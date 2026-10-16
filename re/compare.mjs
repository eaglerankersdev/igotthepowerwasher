// Visual + geometric comparison: original (live) vs clone (localhost).
// Usage: node compare.mjs [cloneBase]  → writes re/diff/*
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const ORIG = "https://www.igtpw.com/pressure-washing";
const CLONE = (process.argv[2] || "http://localhost:3000") + "/pressure-washing";
const WIDTHS = [1440, 1024, 768, 390];
const OUT = path.resolve("diff");
fs.mkdirSync(OUT, { recursive: true });

// Elements whose boxes are compared. Lottie SVG roots are masked in pixel diffs.
const BOX_SELECTORS = {
  nav: "nav",
  navLogo: "nav img",
  navEstimate: 'nav a[href="/get-estimate"]',
  navHome: 'nav ul li a[href="/"]',
  navSeal: 'nav ul li a[href="/seal-solutions"]',
  hero: "div.min-h-\\[60vh\\]",
  h1: "h1",
  breadcrumb: "h1 + div",
  introH2: "div.bg-gradient-to-b h2",
  introP: "div.bg-gradient-to-b > div > div > p",
  comp15: "div.flex.justify-center.mb-12",
  card1: "section:nth-of-type(1) > div.bg-white",
  card2: "section:nth-of-type(2) > div.bg-white",
  card3: "section:nth-of-type(3) > div.bg-white",
  quote: "blockquote",
  img305: 'img[src$="305.png"]',
  img299: 'img[src$="299-1024x683-1.png"]',
  imgEff: 'img[src$="effff.jpg"]',
  slider1: "section.p-8 > div > div:nth-child(1)",
  slider2: "section.p-8 > div > div:nth-child(2)",
  footer: "footer",
  footerH4: "footer h4",
  footerCopy: "footer .border-t p",
};

const HIDE_LOTTIE = `
  svg[viewBox="0 0 1080 1080"], svg[viewBox="0 0 512 512"][width="512"] { visibility: hidden !important; }
`;

async function capture(browser, url, w, tag) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: 900 },
    deviceScaleFactor: 1,
    isMobile: w < 768,
    hasTouch: w < 768,
    reducedMotion: "no-preference",
  });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);
  // Drive all whileInView animations to completion with an identical scroll sequence.
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(100);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1500);
  const boxes = await page.evaluate((sels) => {
    const out = {};
    for (const [k, s] of Object.entries(sels)) {
      const el = document.querySelector(s);
      if (!el) {
        out[k] = null;
        continue;
      }
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      out[k] = {
        x: +r.x.toFixed(2),
        y: +(r.y + scrollY).toFixed(2),
        w: +r.width.toFixed(2),
        h: +r.height.toFixed(2),
        font: `${cs.fontSize}/${cs.lineHeight} ${cs.fontWeight} ${cs.fontFamily}`,
        color: cs.color,
        bg: cs.backgroundColor,
      };
    }
    out.__height = document.documentElement.scrollHeight;
    out.__lottie = [...document.querySelectorAll("svg[viewBox='0 0 1080 1080'], svg[viewBox='0 0 512 512'][width='512']")].map((s) => ({
      par: s.getAttribute("preserveAspectRatio"),
      parent: s.parentElement.className,
      r: (() => {
        const r = s.getBoundingClientRect();
        return [r.x, r.y + scrollY, r.width, r.height].map((n) => +n.toFixed(1));
      })(),
    }));
    return out;
  }, BOX_SELECTORS);
  await page.addStyleTag({ content: HIDE_LOTTIE });
  await page.waitForTimeout(200);
  const file = path.join(OUT, `${tag}-${w}.png`);
  await page.screenshot({ path: file, fullPage: true });
  await ctx.close();
  return { boxes, file };
}

function diffImages(aFile, bFile, w, tag) {
  const a = PNG.sync.read(fs.readFileSync(aFile));
  const b = PNG.sync.read(fs.readFileSync(bFile));
  const W = Math.max(a.width, b.width);
  const H = Math.max(a.height, b.height);
  const pad = (img) => {
    if (img.height === H && img.width === W) return img;
    const p = new PNG({ width: W, height: H, fill: true });
    p.data.fill(255);
    PNG.bitblt(img, p, 0, 0, img.width, img.height, 0, 0);
    return p;
  };
  const A = pad(a), B = pad(b);
  const diff = new PNG({ width: W, height: H });
  const n = pixelmatch(A.data, B.data, diff.data, W, H, { threshold: 0.1, includeAA: false });
  fs.writeFileSync(path.join(OUT, `diff-${w}.png`), PNG.sync.write(diff));
  // Where are the differing pixels? (row bands)
  const rows = [];
  for (let y = 0; y < H; y++) {
    let c = 0;
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      if (diff.data[i] === 255 && diff.data[i + 1] === 0 && diff.data[i + 2] === 0) c++;
    }
    if (c) rows.push([y, c]);
  }
  const bands = [];
  for (const [y, c] of rows) {
    const last = bands[bands.length - 1];
    if (last && y - last.y1 <= 3) { last.y1 = y; last.px += c; } else bands.push({ y0: y, y1: y, px: c });
  }
  // 50/50 overlay
  const ov = new PNG({ width: W, height: H });
  for (let i = 0; i < ov.data.length; i += 4) {
    ov.data[i] = (A.data[i] + B.data[i]) >> 1;
    ov.data[i + 1] = (A.data[i + 1] + B.data[i + 1]) >> 1;
    ov.data[i + 2] = (A.data[i + 2] + B.data[i + 2]) >> 1;
    ov.data[i + 3] = 255;
  }
  fs.writeFileSync(path.join(OUT, `overlay-${w}.png`), PNG.sync.write(ov));
  return { differentPixels: n, totalPixels: W * H, pct: +((100 * n) / (W * H)).toFixed(3), sizeA: [a.width, a.height], sizeB: [b.width, b.height], bands };
}

const browser = await chromium.launch();
const report = {};
for (const w of WIDTHS) {
  const o = await capture(browser, ORIG, w, "orig");
  const c = await capture(browser, CLONE, w, "clone");
  const px = diffImages(o.file, c.file, w, "diff");
  const boxDiffs = [];
  for (const k of Object.keys(BOX_SELECTORS)) {
    const a = o.boxes[k], b = c.boxes[k];
    if (!a || !b) {
      boxDiffs.push({ el: k, missing: !a ? "orig" : "clone" });
      continue;
    }
    const d = { el: k, dx: +(b.x - a.x).toFixed(2), dy: +(b.y - a.y).toFixed(2), dw: +(b.w - a.w).toFixed(2), dh: +(b.h - a.h).toFixed(2) };
    if (a.font !== b.font) d.font = [a.font, b.font];
    if (a.color !== b.color) d.color = [a.color, b.color];
    if (a.bg !== b.bg) d.bg = [a.bg, b.bg];
    boxDiffs.push(d);
  }
  report[w] = { pageHeight: [o.boxes.__height, c.boxes.__height], pixels: px, boxes: boxDiffs, lottie: [o.boxes.__lottie, c.boxes.__lottie] };
  const bad = boxDiffs.filter((d) => d.missing || Math.abs(d.dx) > 1 || Math.abs(d.dy) > 1 || Math.abs(d.dw) > 1 || Math.abs(d.dh) > 1 || d.font || d.color || d.bg);
  console.log(`\n### ${w}px  height orig=${o.boxes.__height} clone=${c.boxes.__height}  png orig=${px.sizeA} clone=${px.sizeB}  pixel diff=${px.pct}% (${px.differentPixels}px)`);
  console.log("  diff bands (y0-y1: px):", px.bands.map((b) => `${b.y0}-${b.y1}: ${b.px}`).join(", ") || "none");
  console.log(bad.length ? "  box mismatches:" : "  all boxes match within 1px");
  for (const d of bad) console.log("   ", JSON.stringify(d));
}
await browser.close();
fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 1));
