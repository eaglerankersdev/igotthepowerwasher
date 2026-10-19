// Full-site comparison: original vs clone for every route at 4 widths.
// Usage (from re/): node compare-site.mjs [routeFilter] [widths=1440,1024,768,390]
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const ORIG = "https://www.igtpw.com";
const CLONE = process.env.CLONE || "http://localhost:3000";
const WIDTHS = (process.argv[3] || "1440,1024,768,390").split(",").map(Number);
const mm = JSON.parse(fs.readFileSync("site/module-map.json", "utf8"));
const filter = process.argv[2] && process.argv[2] !== "all" ? process.argv[2] : null;
const routes = mm.pages.map((p) => p.route).filter((r) => !filter || r === filter || (filter.endsWith("*") && r.startsWith(filter.slice(0, -1))));
if (!filter) routes.push("/blogs"); // dead footer link: compare the 404 page too
const OUT = path.resolve("diff-site");
fs.mkdirSync(OUT, { recursive: true });

// Time-dependent media is hidden in both captures before the pixel diff.
const MASK = `svg[preserveAspectRatio][style*="translate3d"], video, iframe { visibility: hidden !important; } .animate-scroll-left, .animate-scroll-right { animation: none !important; }`;

async function capture(browser, base, route, w) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1, isMobile: w < 768, hasTouch: w < 768, reducedMotion: "no-preference" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e).slice(0, 200)));
  page.on("console", (m) => m.type() === "error" && errors.push("console: " + m.text().slice(0, 160)));
  await page.goto(base + route, { waitUntil: "networkidle", timeout: 90000 });
  if (route === "/") await page.waitForFunction(() => !document.querySelector(".fixed.inset-0.z-50"), null, { timeout: 25000 }).catch(() => {});
  await page.waitForTimeout(2500);
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(90);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1800);
  const boxes = await page.evaluate(() => {
    const els = [...document.querySelectorAll("nav, h1, h2, h3, h4, p, section, img, form, footer, button")];
    return {
      height: document.documentElement.scrollHeight,
      els: els.slice(0, 400).map((e) => {
        const r = e.getBoundingClientRect();
        return { tag: e.tagName, text: (e.innerText || e.getAttribute("alt") || "").slice(0, 30), x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) };
      }),
    };
  });
  await page.addStyleTag({ content: MASK });
  await page.waitForTimeout(150);
  const buf = await page.screenshot({ fullPage: true });
  await ctx.close();
  return { boxes, png: PNG.sync.read(buf), errors };
}

function diff(a, b) {
  const W = Math.max(a.width, b.width), H = Math.max(a.height, b.height);
  const pad = (img) => {
    if (img.width === W && img.height === H) return img;
    const p = new PNG({ width: W, height: H });
    p.data.fill(255);
    PNG.bitblt(img, p, 0, 0, img.width, img.height, 0, 0);
    return p;
  };
  const A = pad(a), B = pad(b);
  const d = new PNG({ width: W, height: H });
  const n = pixelmatch(A.data, B.data, d.data, W, H, { threshold: 0.1, includeAA: false });
  return { n, pct: +((100 * n) / (W * H)).toFixed(3), d };
}

const browser = await chromium.launch();
const sumFile = path.join(OUT, "summary.json");
const summary = fs.existsSync(sumFile) ? JSON.parse(fs.readFileSync(sumFile, "utf8")).filter((r) => !routes.includes(r.route) || !WIDTHS.includes(r.w)) : [];
for (const route of routes) {
  for (const w of WIDTHS) {
    const name = (route === "/" ? "home" : route.slice(1).replace(/\//g, "__")) + "-" + w;
    for (const f of ["orig", "clone", "diff"]) fs.rmSync(path.join(OUT, `${name}-${f}.png`), { force: true });
    try {
      const o = await capture(browser, ORIG, route, w);
      const c = await capture(browser, CLONE, route, w);
      const px = diff(o.png, c.png);
      if (px.n > 0) {
        fs.writeFileSync(path.join(OUT, name + "-orig.png"), PNG.sync.write(o.png));
        fs.writeFileSync(path.join(OUT, name + "-clone.png"), PNG.sync.write(c.png));
        fs.writeFileSync(path.join(OUT, name + "-diff.png"), PNG.sync.write(px.d));
      }
      const mism = [];
      const n = Math.max(o.boxes.els.length, c.boxes.els.length);
      for (let i = 0; i < n; i++) {
        const A = o.boxes.els[i], B = c.boxes.els[i];
        if (!A || !B || A.tag !== B.tag || Math.abs(A.x - B.x) > 1 || Math.abs(A.y - B.y) > 1 || Math.abs(A.w - B.w) > 1 || Math.abs(A.h - B.h) > 1) mism.push({ i, orig: A, clone: B });
      }
      const row = { route, w, hOrig: o.boxes.height, hClone: c.boxes.height, pixelDiff: px.n, pct: px.pct, elements: o.boxes.els.length, boxMismatches: mism.length, firstMismatch: mism[0] || null, cloneOnlyErrors: c.errors.filter((e) => !o.errors.some((x) => x.replace(/localhost:3000|www\.igtpw\.com|\(Not Found\)|\(\)/g, "") === e.replace(/localhost:3000|www\.igtpw\.com|\(Not Found\)|\(\)/g, ""))) };
      summary.push(row);
      console.log(`${route.padEnd(32)} ${String(w).padStart(4)}  h ${o.boxes.height}/${c.boxes.height}  px ${px.n} (${px.pct}%)  boxes ${mism.length}/${o.boxes.els.length}${row.cloneOnlyErrors.length ? "  ERR " + row.cloneOnlyErrors[0] : ""}`);
    } catch (e) {
      summary.push({ route, w, error: String(e).slice(0, 200) });
      console.log(`${route.padEnd(32)} ${w}  FAILED ${String(e).slice(0, 120)}`);
    }
    fs.writeFileSync(sumFile, JSON.stringify(summary, null, 1));
  }
}
await browser.close();
