// Unbundle the igtpw.com Next.js production chunks into per-module TSX files.
// Every app module reachable from a page entry becomes components/m/M<id>.tsx with
// library references rewritten to real imports. Library/runtime modules are mapped,
// never copied. Usage: node re/unbundle.mjs   (run from project root)
import fs from "node:fs";
import path from "node:path";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";
const traverse = _traverse.default?.default ?? _traverse.default ?? _traverse;
const generate = _generate.default?.default ?? _generate.default ?? _generate;

const ROOT = process.cwd();
const SITE = path.join(ROOT, "re/site");
const OUT = path.join(ROOT, "components/m");
const iconMap = JSON.parse(fs.readFileSync(path.join(SITE, "icon-map.json"), "utf8"));
const moduleMap = JSON.parse(fs.readFileSync(path.join(SITE, "module-map.json"), "utf8"));

// ---------- 1. Load every module factory from every chunk ----------
const factories = new Map(); // id -> { node, chunk }
for (const f of fs.readdirSync(path.join(SITE, "chunks"))) {
  if (!f.endsWith(".js") || /^(4bd1b696|polyfills|webpack|main-app|dc112a36|8627a13e)/.test(f)) continue;
  const code = fs.readFileSync(path.join(SITE, "chunks", f), "utf8");
  let ast;
  try {
    ast = parse(code, { sourceType: "script" });
  } catch {
    continue;
  }
  traverse(ast, {
    CallExpression(p) {
      const c = p.node.callee;
      if (!(t.isMemberExpression(c) && t.isIdentifier(c.property, { name: "push" }))) return;
      const arr = p.node.arguments[0];
      if (!t.isArrayExpression(arr) || !t.isObjectExpression(arr.elements[1])) return;
      for (const prop of arr.elements[1].properties) {
        if (!t.isObjectProperty(prop)) continue;
        const id = t.isNumericLiteral(prop.key) ? String(prop.key.value) : t.isStringLiteral(prop.key) ? prop.key.value : t.isIdentifier(prop.key) ? prop.key.name : null;
        if (!id) continue;
        if (!factories.has(id)) factories.set(id, []);
        factories.get(id).push({ node: prop.value, chunk: f, code });
      }
      p.stop();
    },
  });
}

const facText = (fac) => generate(fac.node, { compact: true }).code;
const variants = new Map(); // id -> [{text, chunk}]
for (const [id, list] of factories) {
  const seen = [];
  for (const f of list) {
    const tx = facText(f);
    if (!seen.some((v) => v.text === tx)) seen.push({ text: tx, fac: f });
  }
  variants.set(id, seen);
}
let currentChunks = []; // chunks loaded by the route being converted
function pickFactory(id) {
  const vs = variants.get(id);
  if (!vs) return null;
  if (vs.length === 1) return { fac: vs[0].fac, key: id };
  for (const c of currentChunks) {
    const i = vs.findIndex((v) => v.fac.chunk === c);
    if (i >= 0) return { fac: vs[i].fac, key: `${id}_v${i}` };
  }
  return { fac: vs[0].fac, key: `${id}_v0` };
}
// ---------- 2. Library mapping ----------
const imports = (spec) => spec; // documentation helper
const LIB = {
  5155: { kind: "jsxruntime" },
  2115: { kind: "named", from: "react" },
  1741: { kind: "map", map: { P: ["framer-motion", "motion"] } },
  760: { kind: "map", map: { N: ["framer-motion", "AnimatePresence"] } },
  6896: { kind: "map", map: { s: ["framer-motion", "useAnimation"] } },
  6766: { kind: "map", map: { default: ["next/image", "default:Image"] } },
  6874: { kind: "map", map: { default: ["next/link", "default:Link"] } },
  5028: { kind: "map", map: { default: ["next/dynamic", "default:dynamic"] } },
  2177: { kind: "map", map: { mN: ["react-hook-form", "useForm"] } },
  8543: { kind: "toast" },
  5518: { kind: "map", map: { Ay: ["@/lib/emailjs", "default:emailjs"], default: ["@/lib/emailjs", "default:emailjs"], send: ["@/lib/emailjs", "send"], sendForm: ["@/lib/emailjs", "sendForm"], init: ["@/lib/emailjs", "init"] } },
  4987: { kind: "map", map: { Ay: ["styled-components", "default:styled"] } },
  5933: { kind: "map", map: { _: ["@/lib/tagged-template", "_taggedTemplateLiteral"] } },
  9137: { kind: "module", spec: ["styled-jsx/style", "default:JSXStyle"] },
  9911: { kind: "icons" },
  351: { kind: "icons" },
  8229: { kind: "map", map: { _: ["@/lib/interop", "_interop_require_default"] } },
};
const CSS = moduleMap.css; // id -> "@/styles/x.module.css"
const RUNTIME_SKIP = new Set(["255", "2146", "4054", "5744", "6645", "7357", "7828", "6654", "4436", "4331", "5982", "8802", "2885", "7494", "845", "2082", "869", "1508", "9066", "3770"]);

// ---------- 3. Module conversion ----------
const queue = [];
const done = new Map(); // id -> { exports: [...] }
const enqueue = (id) => {
  if (!queue.includes(id)) queue.push(id);
};

function convertModule(id) {
  const picked = pickFactory(id);
  if (!picked) throw new Error("No factory for module " + id);
  const fac = picked.fac;
  const fileKey = picked.key;
  const fn = fac.node;
  const params = fn.params.map((p) => p.name);
  const [, exportsName, requireName] = params;
  const wrapper = t.file(t.program([t.expressionStatement(t.cloneNode(fn, true))]));
  const importSpecs = new Map(); // from -> Map(imported -> local)
  const used = new Set();
  const addImport = (from, imported) => {
    if (!importSpecs.has(from)) importSpecs.set(from, new Map());
    const m = importSpecs.get(from);
    let local = imported.startsWith("default:") ? imported.slice(8) : imported.includes(":") ? imported.split(":")[1] : imported;
    if (!m.has(imported)) m.set(imported, local);
    used.add(local);
    return m.get(imported);
  };
  const exportsOut = []; // [exportName, localName]
  const bindings = new Map(); // local var -> { id, interop }
  let isClient = false;

  traverse(wrapper, {
    Program(pp) {
      const fnPath = pp.get("body.0.expression");
      const body = fnPath.get("body");
      // collect `var x = r(123)` bindings and `x = r.n(y)` interop getters
      fnPath.traverse({
        VariableDeclarator(p) {
          const init = p.node.init;
          if (t.isCallExpression(init) && t.isIdentifier(init.callee, { name: requireName }) && t.isNumericLiteral(init.arguments[0])) {
            bindings.set(p.node.id.name, { id: String(init.arguments[0].value), binding: p.scope.getBinding(p.node.id.name) });
          } else if (t.isCallExpression(init) && t.isMemberExpression(init.callee) && t.isIdentifier(init.callee.object, { name: requireName }) && t.isIdentifier(init.callee.property, { name: "n" })) {
            const inner = init.arguments[0];
            if (t.isIdentifier(inner) && bindings.has(inner.name)) bindings.set(p.node.id.name, { ...bindings.get(inner.name), interop: true, binding: p.scope.getBinding(p.node.id.name) });
          }
        },
      });

      const isRef = (p, name) => bindings.has(name) && p.scope.getBinding(name) === bindings.get(name).binding;
      const resolveMember = (modId, prop) => {
        const lib = LIB[modId];
        if (CSS[modId]) return addImport(CSS[modId], "default:styles");
        if (lib) {
          if (lib.kind === "named") return addImport(lib.from, prop);
          if (lib.kind === "jsxruntime") return prop === "Fragment" ? addImport("react", "Fragment") : null;
          if (lib.kind === "map") {
            const m = lib.map[prop];
            if (!m) throw new Error(`Unmapped export ${modId}.${prop} in module ${id}`);
            return addImport(m[0], m[1]);
          }
          if (lib.kind === "icons") {
            const hit = iconMap[`${modId}.${prop}`];
            if (!hit) throw new Error(`Unknown icon ${modId}.${prop}`);
            return addImport(`react-icons/${hit[0]}`, hit[1]);
          }
          if (lib.kind === "toast") {
            const names = { oR: "toast", N9: "ToastContainer" };
            if (!names[prop]) throw new Error(`Unmapped toast export ${prop}`);
            return addImport("react-toastify", names[prop]);
          }
          if (lib.kind === "module") return addImport(lib.spec[0], lib.spec[1]);
        }
        if (RUNTIME_SKIP.has(modId)) throw new Error(`Module ${id} references runtime module ${modId}.${prop}`);
        const k = pickFactory(modId)?.key || modId;
        enqueue(modId);
        return addImport(`./M${k}`, prop === "default" ? "default:M" + k : prop + `:M${k}_${prop}`);
      };

      fnPath.traverse({
        // (0, x.y)(...) -> x.y(...)
        SequenceExpression(p) {
          const ex = p.node.expressions;
          if (ex.length === 2 && t.isNumericLiteral(ex[0], { value: 0 }) && (t.isMemberExpression(ex[1]) || t.isIdentifier(ex[1])) && t.isCallExpression(p.parent) && p.parent.callee === p.node) p.replaceWith(ex[1]);
        },
      });

      fnPath.traverse({
        ExpressionStatement(p) {
          const e = p.node.expression;
          // r.r(a)  (make namespace)  -> drop ;  "use strict" handled by directives
          if (t.isCallExpression(e) && t.isMemberExpression(e.callee) && t.isIdentifier(e.callee.object, { name: requireName }) && t.isIdentifier(e.callee.property, { name: "r" })) return p.remove();
          // r.d(a, {A: () => x})  -> exports
          if (t.isCallExpression(e) && t.isMemberExpression(e.callee) && t.isIdentifier(e.callee.object, { name: requireName }) && t.isIdentifier(e.callee.property, { name: "d" })) {
            for (const pr of e.arguments[1].properties) {
              const name = t.isIdentifier(pr.key) ? pr.key.name : pr.key.value;
              const body = pr.value.body;
              if (t.isIdentifier(body)) exportsOut.push([name, body.name]);
              else throw new Error("complex export in " + id);
            }
            return p.remove();
          }
          // sequence of r.r(a), r.d(...)
          if (t.isSequenceExpression(e)) {
            const keep = [];
            for (const x of e.expressions) {
              if (t.isCallExpression(x) && t.isIdentifier(x.callee, { name: requireName })) {
                const mid = String(x.arguments[0].value);
                if (CSS[mid]) addImport(CSS[mid], "default:styles");
                continue;
              }
              if (t.isCallExpression(x) && t.isMemberExpression(x.callee) && t.isIdentifier(x.callee.object, { name: requireName })) {
                if (t.isIdentifier(x.callee.property, { name: "d" })) {
                  for (const pr of x.arguments[1].properties) exportsOut.push([t.isIdentifier(pr.key) ? pr.key.name : pr.key.value, pr.value.body.name]);
                }
                continue;
              }
              keep.push(x);
            }
            if (!keep.length) return p.remove();
            p.node.expression = keep.length === 1 ? keep[0] : t.sequenceExpression(keep);
          }
          // bare side-effect requires: r(6766);
          if (t.isCallExpression(e) && t.isIdentifier(e.callee, { name: requireName })) {
            const mid = String(e.arguments[0].value);
            if (CSS[mid]) addImport(CSS[mid], "default:styles");
            return p.remove();
          }
        },
      });

      // dynamic lottie import: Promise.all([r.e(9066), r.e(3770)]).then(r.t.bind(r, 3770, 23))  -> import("lottie-react")
      fnPath.traverse({
        CallExpression(p) {
          const n = p.node;
          if (t.isMemberExpression(n.callee) && t.isIdentifier(n.callee.property, { name: "then" }) && t.isCallExpression(n.callee.object) && (generate(n.callee.object).code.startsWith("Promise.all") || /^\w+\.e\(\d+\)$/.test(generate(n.callee.object).code))) {
            const arg = n.arguments[0];
            const src = generate(arg).code;
            const m = src.match(/\.bind\(\w+, (\d+)(?:, \d+)?\)/);
            if (m && m[1] === "5518") { p.replaceWith(t.callExpression(t.import(), [t.stringLiteral("@/lib/emailjs")])); return; }
            if (m && m[1] === "8153") { p.replaceWith(t.callExpression(t.import(), [t.stringLiteral("@lottiefiles/react-lottie-player")])); return; }
            if (m && m[1] === "3770") {
              p.replaceWith(t.callExpression(t.import(), [t.stringLiteral("lottie-react")]));
              return;
            }
            throw new Error("Unknown dynamic import " + src + " in " + id);
          }
        },
      });

      // member expressions on module bindings
      fnPath.traverse({
        MemberExpression(p) {
          const obj = p.node.object;
          if (!t.isIdentifier(obj) || !isRef(p, obj.name) || p.node.computed) return;
          const b = bindings.get(obj.name);
          const prop = p.node.property.name;
          if (b.id === "5155" && (prop === "jsx" || prop === "jsxs")) return; // handled by JSX pass
          const local = resolveMember(b.id, prop);
          if (local) p.replaceWith(t.identifier(local));
        },
        CallExpression(p) {
          // css-module interop: t() where t = r.n(cssModule)
          const c = p.node.callee;
          if (t.isIdentifier(c) && isRef(p, c.name) && bindings.get(c.name).interop && p.node.arguments.length === 0) {
            const b = bindings.get(c.name);
            const local = CSS[b.id] ? addImport(CSS[b.id], "default:styles") : resolveMember(b.id, "default");
            p.replaceWith(t.identifier(local));
          }
        },
        Identifier(p) {
          // bare use of a module binding (e.g. passed around) other than declarations
          if (!isRef(p, p.node.name) || p.parentPath.isVariableDeclarator({ id: p.node })) return;
          if (p.parentPath.isObjectProperty({ key: p.node }) && !p.parent.computed) return;
          if ((p.parentPath.isMemberExpression({ property: p.node }) || p.parentPath.isOptionalMemberExpression({ property: p.node })) && !p.parent.computed) return;
          if (p.parentPath.isMemberExpression({ object: p.node })) return;
          // argument of r.n(x) interop helper (declarator removed later)
          if (p.parentPath.isCallExpression() && t.isMemberExpression(p.parent.callee) && t.isIdentifier(p.parent.callee.object, { name: requireName })) return;
          const b = bindings.get(p.node.name);
          if (b.id === "5155") return;
          if (b.interop && p.parentPath.isCallExpression({ callee: p.node })) return;
          if (CSS[b.id]) { p.replaceWith(t.identifier(addImport(CSS[b.id], "default:styles"))); return; }
          // whole-module usage: e.g. animationData: n where n = r(7842) (JSON module)
          const fac2 = pickFactory(b.id)?.fac;
          if (fac2 && /exports\s*=\s*JSON\.parse/.test(generate(fac2.node).code.slice(0, 200))) {
            const k = pickFactory(b.id)?.key || b.id;
            enqueue(b.id);
            p.replaceWith(t.identifier(addImport(`./M${k}`, "default:M" + k)));
            return;
          }
          throw new Error(`Bare module binding ${p.node.name} -> ${b.id} in ${id} :: ${generate(p.parentPath.parentPath.node).code.slice(0,160)}`);
        },
      });

      // JSX conversion
      fnPath.traverse({
        CallExpression: {
          exit(p) {
            const { callee, arguments: args } = p.node;
            if (!(t.isMemberExpression(callee) && t.isIdentifier(callee.object) && bindings.get(callee.object.name)?.id === "5155" && p.scope.getBinding(callee.object.name) === bindings.get(callee.object.name).binding && ["jsx", "jsxs"].includes(callee.property.name))) return;
            p.replaceWith(toJSX(args, p));
          },
        },
      });

      // remove module binding declarations
      fnPath.traverse({
        VariableDeclarator(p) {
          if (t.isIdentifier(p.node.id) && bindings.has(p.node.id.name) && p.scope.getBinding(p.node.id.name) === bindings.get(p.node.id.name).binding) p.remove();
        },
      });

      // JSON module: e.exports = JSON.parse('...')
      fnPath.traverse({
        AssignmentExpression(p) {
          const l = p.node.left;
          if (t.isMemberExpression(l) && t.isIdentifier(l.object, { name: params[0] }) && t.isIdentifier(l.property, { name: "exports" })) {
            p.parentPath.replaceWith(t.variableDeclaration("const", [t.variableDeclarator(t.identifier("__module_exports"), p.node.right)]));
            exportsOut.push(["default", "__module_exports"]);
          }
        },
      });

      // directives
      const dirs = fnPath.node.body.directives || [];
      if (dirs.some((d) => d.value.value === "use strict")) fnPath.node.body.directives = dirs.filter((d) => d.value.value !== "use strict");
    },
  });

  const fnNode = wrapper.program.body[0].expression;
  let stmts = fnNode.body.body;
  // move export of `default` etc.
  const program = t.program([...stmts]);
  const file = t.file(program);
  // rename lowercase identifiers used as JSX components
  traverse(file, {
    JSXOpeningElement(p) {
      const n = p.node.name;
      if (t.isJSXIdentifier(n) && n.name.startsWith("__LC__")) {
        const orig = n.name.slice(6);
        const binding = p.scope.getBinding(orig);
        const cap = "C" + orig[0].toUpperCase() + orig.slice(1) + "_";
        if (binding) binding.scope.rename(orig, p.scope.generateUid(cap).replace(/^_/, ""));
      }
    },
  });
  // second pass: replace remaining __LC__ names with the renamed binding names
  traverse(file, {
    JSXOpeningElement(p) {
      fixLC(p.node, p);
    },
    JSXClosingElement(p) {
      fixLC(p.node, p);
    },
  });

  // Extract large inline JSON.parse('...') payloads (Lottie animations) into JSON files.
  let jsonCount = 0;
  traverse(file, {
    CallExpression(p) {
      const n = p.node;
      if (!(t.isMemberExpression(n.callee) && t.isIdentifier(n.callee.object, { name: "JSON" }) && t.isIdentifier(n.callee.property, { name: "parse" }))) return;
      const a = n.arguments[0];
      if (!t.isStringLiteral(a) || a.value.length < 2000) return;
      const obj = JSON.parse(a.value);
      const slug = String(obj.nm || "data").replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
      const fname = `M${fileKey}-${slug}${jsonCount ? "-" + jsonCount : ""}.json`;
      jsonCount++;
      fs.mkdirSync(path.join(ROOT, "lib/lottie/m"), { recursive: true });
      fs.writeFileSync(path.join(ROOT, "lib/lottie/m", fname), JSON.stringify(obj));
      const local = addImport(`@/lib/lottie/m/${fname}`, "default:lottie_" + slug.replace(/-/g, "_") + "_" + jsonCount);
      p.replaceWith(t.identifier(local));
    },
    StringLiteral(p) {
      if (p.node.value.includes("/_next/static/media/")) {
        p.node.value = p.node.value.replace(/\/_next\/static\/media\/([^"?]+?)\.[0-9a-f]{8}\.(png|jpe?g|webp|svg)/g, "/media/$1.$2");
        p.node.extra = undefined;
      }
    },
  });
  let code = generate(file, { jsescOption: { minimal: true } }).code;
  const importLines = [];
  for (const [from, m] of importSpecs) {
    const def = [...m.entries()].filter(([k]) => k.startsWith("default:")).map(([, v]) => v);
    const named = [...m.entries()].filter(([k]) => !k.startsWith("default:")).map(([k, v]) => (k.includes(":") ? `${k.split(":")[0]} as ${v}` : k === v ? k : `${k} as ${v}`));
    const parts = [];
    if (def.length) parts.push(def[0]);
    if (named.length) parts.push(`{ ${[...new Set(named)].join(", ")} }`);
    importLines.push(`import ${parts.join(", ")} from "${from}";`);
    if (def.length > 1) for (const d of def.slice(1)) importLines.push(`const ${d} = ${def[0]};`);
  }
  const exp = exportsOut.map(([n, l]) => (n === "default" ? `export default ${l};` : `export { ${l} as ${n} };`)).join("\n");
  const isJson = exportsOut.length === 1 && exportsOut[0][1] === "__module_exports";
  const header = isJson ? "// @ts-nocheck\n/* eslint-disable */\n" : '// @ts-nocheck\n/* eslint-disable */\n"use client";\n';
  const banner = `// Unbundled from igtpw.com chunk ${fac.chunk}, webpack module ${id}${fileKey !== id ? " (variant " + fileKey + ")" : ""}.\n`;
  // Documented source patches (see re/REPORT-SITE.md "Deviations").
  const PATCHES = [[/useState\(\(\) => window\.innerWidth <= 768\)/g, 'useState(() => typeof window !== "undefined" && window.innerWidth <= 768)']];
  for (const [re, rep] of PATCHES) code = code.replace(re, rep);
  const out = header + banner + importLines.join("\n") + "\n\n" + code + "\n\n" + exp + "\n";
  fs.writeFileSync(path.join(OUT, `M${fileKey}.tsx`), out);
  done.set(fileKey, { exports: exportsOut.map((e) => e[0]), chunk: fac.chunk });
}

function fixLC(node, p) {
  const n = node.name;
  if (t.isJSXIdentifier(n) && n.name.startsWith("__LC__")) {
    const orig = n.name.slice(6);
    // find binding after rename: search scope for a binding whose original was orig (renamed name starts with C<Orig>_)
    let s = p.scope;
    const cap = "C" + orig[0].toUpperCase() + orig.slice(1) + "_";
    while (s) {
      const hit = Object.keys(s.bindings).find((k) => k.startsWith(cap));
      if (hit) {
        n.name = hit;
        return;
      }
      s = s.parent;
    }
    n.name = orig; // fallback
  }
}

function toName(n) {
  if (t.isStringLiteral(n)) return t.jsxIdentifier(n.value);
  if (t.isIdentifier(n)) return t.jsxIdentifier(/^[a-z_$]/.test(n.name) && !["motion"].includes(n.name) ? "__LC__" + n.name : n.name);
  if (t.isMemberExpression(n) && !n.computed) {
    const obj = t.isIdentifier(n.object) ? t.jsxIdentifier(n.object.name) : toName(n.object);
    return t.jsxMemberExpression(obj, t.jsxIdentifier(n.property.name));
  }
  return null;
}
function childNode(c) {
  if (t.isStringLiteral(c)) return t.jsxExpressionContainer(c);
  if (t.isJSXElement(c) || t.isJSXFragment(c)) return c;
  return t.jsxExpressionContainer(c);
}
function toJSX(args, p) {
  const name = toName(args[0]);
  if (!name) throw new Error("Unsupported JSX element type: " + generate(args[0]).code);
  const attrs = [], children = [];
  const propsObj = args[1];
  if (t.isObjectExpression(propsObj)) {
    for (const pr of propsObj.properties) {
      if (t.isSpreadElement(pr)) {
        attrs.push(t.jsxSpreadAttribute(pr.argument));
        continue;
      }
      const key = t.isIdentifier(pr.key) ? pr.key.name : t.isStringLiteral(pr.key) ? pr.key.value : null;
      if (pr.computed || key === null) throw new Error("computed prop");
      if (key === "children") {
        const v = pr.value;
        if (t.isArrayExpression(v)) v.elements.forEach((e) => e && children.push(childNode(e)));
        else children.push(childNode(v));
        continue;
      }
      const v = pr.value;
      attrs.push(t.jsxAttribute(t.jsxIdentifier(key), t.isStringLiteral(v) && !/["\\\n{}]/.test(v.value) ? t.stringLiteral(v.value) : t.jsxExpressionContainer(v)));
    }
  } else {
    attrs.push(t.jsxSpreadAttribute(propsObj));
  }
  if (args[2] !== undefined) attrs.push(t.jsxAttribute(t.jsxIdentifier("key"), t.jsxExpressionContainer(args[2])));
  const self = children.length === 0;
  const closeName = t.cloneNode(name, true);
  return t.jsxElement(t.jsxOpeningElement(name, attrs, self), self ? null : t.jsxClosingElement(closeName), children, self);
}

// ---------- 4. Drive from page entries ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.rmSync(path.join(ROOT, "lib/lottie/m"), { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const inventory = JSON.parse(fs.readFileSync(path.join(SITE, "inventory.json"), "utf8"));
const chunkName = (u) => u.split("/_next/static/chunks/")[1].replace(/\//g, "__");
const pages = moduleMap.pages.map((p) => ({ route: p.route, entry: p.entryModule[0], chunks: [...inventory[p.route].pageChunks, ...inventory[p.route].allChunks].map(chunkName) }));
pages.push({ route: "__layout", entry: "9501", chunks: ["app__layout-d2dec3d7c7ca045c.js"] }, { route: "__layout2", entry: "5352", chunks: ["app__layout-d2dec3d7c7ca045c.js"] });
const errors = [];
const written = new Set();
for (const pg of pages) {
  currentChunks = pg.chunks;
  pg.entryKey = pickFactory(pg.entry).key;
  queue.length = 0;
  queue.push(pg.entry);
  const visited = new Set();
  while (queue.length) {
    const id = queue.shift();
    const key = pickFactory(id)?.key || id;
    if (visited.has(id)) continue;
    visited.add(id);
    if (written.has(key)) { // still need to walk its deps for this page's variant resolution
      try { convertModule(id); } catch (e) { errors.push(`M${id}: ${e.message}`); }
      continue;
    }
    written.add(key);
    try {
      convertModule(id);
    } catch (e) {
      errors.push(`M${id}: ${e.message}`);
    }
  }
}
fs.writeFileSync(path.join(SITE, "unbundle-result.json"), JSON.stringify({ pages: pages.map(({ chunks, ...p }) => p), modules: Object.fromEntries(done), errors }, null, 1));
console.log(`modules written: ${[...done.values()].filter((d) => !d.error).length}, errors: ${errors.length}`);
for (const e of errors) console.log("  ERR", e);
