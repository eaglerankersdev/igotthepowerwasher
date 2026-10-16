// Behavioural parity checks, run identically against the original and the clone.
// Usage: node interactions.mjs [cloneBase]
import { chromium } from "playwright";
import fs from "node:fs";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const ORIG = "https://www.igtpw.com/pressure-washing";
const CLONE = (process.argv[2] || "http://localhost:3000") + "/pressure-washing";

async function run(browser, url) {
  const r = {};
  // Desktop
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "no-preference" });
    const page = await ctx.newPage();
    // Hero animation timeline: sample h1 / breadcrumb / arrow opacity from navigation commit.
    await page.goto(url, { waitUntil: "commit" });
    const samples = [];
    const tStart = Date.now();
    while (Date.now() - tStart < 6000) {
      const v = await page.evaluate(() => {
        const g = (s) => { const e = document.querySelector(s); return e ? +getComputedStyle(e).opacity : null; };
        return [g("h1"), g("h1 + div"), g("h1 + div span")];
      }).catch(() => null);
      if (v) samples.push([Date.now() - tStart, ...v]);
      await page.waitForTimeout(25);
    }
    const timeline = (idx) => {
      const started = samples.find((s) => s[idx] !== null && s[idx] < 1 && s[idx] > 0); // first frame of actual progress
      if (!started) return { started: null };
      const ended = samples.find((s) => s[0] > started[0] && s[idx] === 1);
      const minOp = Math.min(...samples.filter((s) => s[idx] !== null).map((s) => s[idx]));
      return { t0: started[0], durationMs: ended ? Math.round((ended[0] - started[0]) / 100) * 100 : null, minOpacity: minOp };
    };
    const h1t = timeline(1), bct = timeline(2), art = timeline(3);
    r.heroTimeline = {
      h1Duration: h1t.durationMs, h1MinOpacity: h1t.minOpacity,
      breadcrumbDelayMs: bct.t0 !== null && h1t.t0 !== null ? Math.round((bct.t0 - h1t.t0) / 100) * 100 : null,
      arrowDelayMs: art.t0 !== null && h1t.t0 !== null ? Math.round((art.t0 - h1t.t0) / 100) * 100 : null,
    };
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(500);
    r.heroLate = await page.$eval("h1", (e) => ({ op: getComputedStyle(e).opacity, tf: getComputedStyle(e).transform }));
    r.sectionsBeforeScroll = await page.$$eval("section.mb-20", (els) => els.map((e) => getComputedStyle(e).opacity));
    // Lottie mounts
    r.lottie = await page.$$eval("svg[viewBox='0 0 1080 1080'], svg[viewBox='0 0 512 512'][width='512']", (els) =>
      els.map((s) => ({
        vb: s.getAttribute("viewBox"),
        par: s.getAttribute("preserveAspectRatio"),
        parent: s.parentElement.className,
        speedAttr: s.parentElement.getAttribute("speed"),
        display: getComputedStyle(s.parentElement).display,
        parentStyle: s.parentElement.getAttribute("style"),
      })),
    );
    // Are the Lottie mounts animating? Compare two clipped screenshots 600 ms apart.
    const animating = async (sel) => {
      const el = page.locator(sel).first();
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      let prev = PNG.sync.read(await el.screenshot());
      let changedFrames = 0;
      for (let i = 0; i < 6; i++) {
        await page.waitForTimeout(500);
        const cur = PNG.sync.read(await el.screenshot());
        if (cur.width === prev.width && cur.height === prev.height) {
          const n = pixelmatch(prev.data, cur.data, null, cur.width, cur.height, { threshold: 0.1 });
          if (n > 50) changedFrames++;
        }
        prev = cur;
      }
      return changedFrames > 0;
    };
    r.navLottieAnimating = await animating("nav");
    r.comp15Animating = await animating("div.flex.justify-center.mb-12");
    r.footerLottieAnimating = await animating("footer");
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    // Hover colors
    await page.hover('nav a[href="/get-estimate"]');
    await page.waitForTimeout(250);
    r.estimateHoverBg = await page.$eval('nav a[href="/get-estimate"]', (e) => getComputedStyle(e).backgroundColor);
    await page.hover('nav ul li a[href="/"]');
    await page.waitForTimeout(250);
    r.homeHoverColor = await page.$eval('nav ul li a[href="/"]', (e) => getComputedStyle(e).color);
    // Dropdowns
    const dd = async () => page.$$eval("nav ul li div.absolute", (els) => els.map((e) => ({ items: e.querySelectorAll("a").length, r: (() => { const b = e.getBoundingClientRect(); return [Math.round(b.x), Math.round(b.y), Math.round(b.width), Math.round(b.height)]; })() })));
    await page.click('nav ul li button:has-text("Residential")');
    await page.waitForTimeout(150);
    r.residentialOpen = await dd();
    await page.click('nav ul li button:has-text("Residential")');
    await page.waitForTimeout(150);
    r.residentialToggledClosed = await dd();
    await page.click('nav ul li button:has-text("Commercial")');
    await page.waitForTimeout(150);
    await page.locator('nav ul li button:has-text("Stain Removal") svg').click();
    await page.waitForTimeout(150);
    r.commercialStainOpen = await dd();
    await page.locator('nav ul li button:has-text("Parking Lot Maintenance") svg').click();
    await page.waitForTimeout(150);
    r.parkingOpen = await dd();
    await page.click('nav ul li button:has-text("Gallery")');
    await page.waitForTimeout(150);
    r.galleryOpenReplacesCommercial = await dd();
    await page.mouse.click(700, 600); // outside nav
    await page.waitForTimeout(150);
    r.clickOutsideCloses = await dd();
    r.urlAfterMenus = page.url().replace(/^https?:\/\/[^/]+/, "");
    // Sections animate into view
    const sec = page.locator("section.mb-20").nth(1);
    await sec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    r.section2AfterScroll = await page.$$eval("section.mb-20", (els) => els.map((e) => getComputedStyle(e).opacity + "/" + getComputedStyle(e).transform));
    // Slider
    const sl = await page.$("input[type=range]");
    await sl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const state = () => page.$eval("section.p-8 > div > div", (e) => ({ h: e.style.height, clipW: e.children[1].style.width, line: e.querySelector(".w-1").style.left, handle: e.querySelector(".rounded-full").style.left }));
    r.sliderInitial = await state();
    const box = await sl.boundingBox();
    await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.5);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.2, box.y + box.height * 0.5, { steps: 8 });
    await page.mouse.up();
    await page.waitForTimeout(300);
    r.sliderAfterDrag = await state();
    await page.keyboard.press("ArrowRight");
    await page.waitForTimeout(100);
    r.sliderAfterKey = await state();
    await ctx.close();
  }
  // Mobile
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: "no-preference" });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    r.mobileMenuClosed = await page.$eval("nav", (e) => ({ h: Math.round(e.getBoundingClientRect().height), menu: getComputedStyle(e.querySelector("div.w-full")).display }));
    await page.click("nav button.md\\:hidden");
    await page.waitForTimeout(200);
    r.mobileMenuOpen = await page.$eval("nav", (e) => ({ h: Math.round(e.getBoundingClientRect().height), menu: getComputedStyle(e.querySelector("div.w-full")).display, ul: (() => { const u = e.querySelector("ul").getBoundingClientRect(); return [Math.round(u.x), Math.round(u.y), Math.round(u.width), Math.round(u.height)]; })() }));
    await page.click('nav ul li button:has-text("Residential")');
    await page.waitForTimeout(200);
    r.mobileResidential = await page.$$eval("nav ul li div.absolute", (els) => els.map((e) => { const b = e.getBoundingClientRect(); return [Math.round(b.x), Math.round(b.y), Math.round(b.width), Math.round(b.height)]; }));
    r.mobileLottie = await page.$$eval("nav svg[viewBox='0 0 1080 1080']", (els) => els.map((s) => ({ par: s.getAttribute("preserveAspectRatio"), display: getComputedStyle(s.parentElement).display })));
    await page.mouse.click(200, 700);
    await page.waitForTimeout(200);
    r.mobileClickOutside = await page.$eval("nav", (e) => getComputedStyle(e.querySelector("div.w-full")).display);
    await ctx.close();
  }
  return r;
}

const browser = await chromium.launch();
const o = await run(browser, ORIG);
const c = await run(browser, CLONE);
await browser.close();
fs.writeFileSync("diff/interactions.json", JSON.stringify({ original: o, clone: c }, null, 1));
let mismatches = 0;
for (const k of Object.keys(o)) {
  const same = JSON.stringify(o[k]) === JSON.stringify(c[k]);
  if (!same) mismatches++;
  console.log(`${same ? "OK  " : "DIFF"} ${k}: ${JSON.stringify(o[k]).slice(0, 160)}${same ? "" : "\n      clone: " + JSON.stringify(c[k]).slice(0, 160)}`);
}
console.log(`\n${mismatches} mismatching checks of ${Object.keys(o).length}`);
