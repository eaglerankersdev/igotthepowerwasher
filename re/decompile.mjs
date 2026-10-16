// Recover JSX from Next.js production chunks: (0, x.jsx)("div", {className, children}) -> <div className=...>...</div>
import fs from "node:fs";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";
const traverse = _traverse.default?.default ?? _traverse.default ?? _traverse; const generate = _generate.default?.default ?? _generate.default ?? _generate;

const [, , input, output] = process.argv;
const src = fs.readFileSync(input, "utf8");
const ast = parse(src, { sourceType: "script", plugins: ["jsx"] });

const isJsxCallee = (c) => {
  // (0, n.jsx) | n.jsx | n.jsxs | n.jsxDEV
  if (t.isSequenceExpression(c) && c.expressions.length === 2 && t.isNumericLiteral(c.expressions[0])) c = c.expressions[1];
  return t.isMemberExpression(c) && t.isIdentifier(c.property) && ["jsx", "jsxs"].includes(c.property.name) && t.isIdentifier(c.object);
};
const toName = (n) => {
  if (t.isStringLiteral(n)) return t.jsxIdentifier(n.value);
  if (t.isIdentifier(n)) return t.jsxIdentifier(/^[a-z]/.test(n.name) ? "C_" + n.name : n.name);
  if (t.isMemberExpression(n) && !n.computed) {
    const obj = toName(n.object);
    if (!obj) return null;
    return t.jsxMemberExpression(t.isJSXIdentifier(obj) || t.isJSXMemberExpression(obj) ? obj : obj, t.jsxIdentifier(n.property.name));
  }
  return null;
};
const childNode = (c) => {
  if (t.isStringLiteral(c)) {
    // keep exact whitespace semantics
    return /^[^{}<>&\n]*$/.test(c.value) && c.value.trim() === c.value && c.value !== "" ? t.jsxText(c.value) : t.jsxExpressionContainer(c);
  }
  if (t.isJSXElement(c) || t.isJSXFragment(c)) return c;
  return t.jsxExpressionContainer(c);
};

traverse(ast, {
  CallExpression: {
    exit(path) {
      const { callee, arguments: args } = path.node;
      if (!isJsxCallee(callee) || args.length < 2) return;
      const name = toName(args[0]);
      if (!name || !t.isObjectExpression(args[1])) return;
      const attrs = [], children = [];
      for (const p of args[1].properties) {
        if (t.isSpreadElement(p)) { attrs.push(t.jsxSpreadAttribute(p.argument)); continue; }
        if (!t.isObjectProperty(p) || p.computed) return; // bail on unusual shapes
        const key = t.isIdentifier(p.key) ? p.key.name : t.isStringLiteral(p.key) ? p.key.value : null;
        if (key === null) return;
        if (key === "children") {
          const v = p.value;
          if (t.isArrayExpression(v)) v.elements.forEach((e) => e && children.push(childNode(e)));
          else children.push(childNode(v));
          continue;
        }
        const v = p.value;
        const val = t.isStringLiteral(v) && !/["\n\\]/.test(v.value) ? t.stringLiteral(v.value) : t.jsxExpressionContainer(t.isBooleanLiteral(v) || true ? v : v);
        attrs.push(t.jsxAttribute(t.jsxIdentifier(key), t.isUnaryExpression(v) && v.operator === "!" && t.isNumericLiteral(v.argument) ? (v.argument.value === 0 ? null : t.jsxExpressionContainer(t.booleanLiteral(false))) : val));
      }
      if (args[2] !== undefined) attrs.push(t.jsxAttribute(t.jsxIdentifier("key"), t.jsxExpressionContainer(args[2])));
      const selfClosing = children.length === 0;
      const el = t.jsxElement(t.jsxOpeningElement(name, attrs, selfClosing), selfClosing ? null : t.jsxClosingElement(name), children, selfClosing);
      path.replaceWith(el);
    },
  },
  // !0 -> true, !1 -> false
  UnaryExpression(path) {
    const n = path.node;
    if (n.operator === "!" && t.isNumericLiteral(n.argument) && (n.argument.value === 0 || n.argument.value === 1)) path.replaceWith(t.booleanLiteral(n.argument.value === 0));
  },
});

let out = generate(ast, { retainLines: false, compact: false, jsescOption: { minimal: true } }).code;
// Collapse giant inline JSON.parse('...') payloads so the file stays readable.
out = out.replace(/JSON\.parse\((['"])\{"(v|nm)"[\s\S]{2000,}?\}\1\)/g, (m) => `JSON.parse(/* LOTTIE_JSON ${m.length} bytes */ "{}")`);
fs.writeFileSync(output, out);
console.log("wrote", output, out.length);
