// Behavioural parity checks for site-wide features: homepage loader timeline and
// form validation. Never submits filled forms to the original site.
// Usage (from re/): node behaviour-site.mjs
import { chromium } from "playwright";
import fs from "node:fs";

const ORIG = "https://www.igtpw.com";
const CLONE = "http://localhost:3000";

async function loader(browser, base, w) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, isMobile: w < 768, hasTouch: w < 768, reducedMotion: "no-preference" });
  const page = await ctx.newPage();
  const t0 = Date.now();
  await page.goto(base + "/", { waitUntil: "commit" });
  const samples = [];
  let removedAt = null, lottieInfo = null, blurredEarly = null;
  while (Date.now() - t0 < 30000) {
    const s = await page
      .evaluate(() => {
        const ov = document.querySelector(".fixed.inset-0.z-50");
        const content = document.querySelector("div.transition-all.duration-500");
        const svg = ov && ov.querySelector("svg");
        const holder = svg && svg.parentElement;
        return {
          overlay: !!ov,
          overlayClass: ov ? ov.className : null,
          contentBlur: content ? content.className.includes("blur-sm") : null,
          lottie: holder ? { style: holder.getAttribute("style"), cls: holder.className, svgVB: svg.getAttribute("viewBox") } : null,
          pulse: !!(ov && ov.querySelector(".animate-pulse")),
        };
      })
      .catch(() => null);
    if (s) {
      samples.push([Date.now() - t0, s.overlay, s.contentBlur, !!s.lottie]);
      if (s.lottie && !lottieInfo) lottieInfo = s.lottie;
      if (blurredEarly === null && s.overlay) blurredEarly = { overlayClass: s.overlayClass, contentBlur: s.contentBlur };
      if (!s.overlay && samples.some((x) => x[1])) {
        removedAt = Date.now() - t0;
        break;
      }
    }
    await page.waitForTimeout(100);
  }
  const lottieMountedAt = samples.find((x) => x[3])?.[0] ?? null;
  await page.waitForTimeout(700);
  const after = await page.evaluate(() => document.querySelector("div.transition-all.duration-500")?.className);
  await ctx.close();
  return {
    early: blurredEarly,
    lottie: lottieInfo,
    // Wall-clock durations depend on network; report play time = removal - mount, rounded to 0.5 s.
    playSeconds: removedAt && lottieMountedAt ? Math.round(((removedAt - lottieMountedAt) / 1000) * 2) / 2 : null,
    afterClass: after,
  };
}

async function emptySubmit(browser, base, route, submitSel) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(base + route, { waitUntil: "networkidle" });
  if (route === "/") await page.waitForFunction(() => !document.querySelector(".fixed.inset-0.z-50"), null, { timeout: 25000 }).catch(() => {});
  await page.waitForTimeout(1000);
  const form = page.locator("form").first();
  await form.scrollIntoViewIfNeeded();
  const before = await form.evaluate((f) => f.innerText);
  await form.locator(submitSel).first().click();
  await page.waitForTimeout(800);
  const errors = await form.evaluate((f) => [...f.querySelectorAll("p, span")].filter((e) => /required|invalid|valid/i.test(e.innerText) && e.offsetParent).map((e) => e.innerText.trim()));
  const fields = await form.evaluate((f) => [...f.querySelectorAll("input, select, textarea")].map((i) => `${i.tagName}:${i.type}:${i.name}`));
  await ctx.close();
  return { fields, errors, beforeLen: before.length };
}

const browser = await chromium.launch();
const results = {};
for (const w of [1440, 390]) {
  results[`loader@${w}`] = { original: await loader(browser, ORIG, w), clone: await loader(browser, CLONE, w) };
}
for (const [route, sel] of [["/get-estimate", 'button[type="submit"]'], ["/contact-us", 'button[type="submit"]'], ["/career", 'button[type="submit"]'], ["/", 'button[type="submit"]']]) {
  results[`form${route}`] = { original: await emptySubmit(browser, ORIG, route, sel), clone: await emptySubmit(browser, CLONE, route, sel) };
}
await browser.close();
fs.writeFileSync("diff-site/behaviour.json", JSON.stringify(results, null, 1));
for (const [k, v] of Object.entries(results)) {
  const same = JSON.stringify(v.original) === JSON.stringify(v.clone);
  console.log(`${same ? "OK  " : "DIFF"} ${k}`);
  console.log("     original:", JSON.stringify(v.original).slice(0, 400));
  if (!same) console.log("     clone:   ", JSON.stringify(v.clone).slice(0, 400));
}
