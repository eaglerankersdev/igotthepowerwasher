import { chromium } from "playwright";
const b=await chromium.launch();
for (const scheme of ["dark","light"]){const c=await b.newContext({viewport:{width:1440,height:900},colorScheme:scheme});await c.addInitScript(()=>sessionStorage.setItem("igtpw-intro-seen","1"));const p=await c.newPage();
await p.goto("http://localhost:3000/about-us",{waitUntil:"networkidle"});await p.waitForTimeout(800);const t=p.locator("table").first();await t.scrollIntoViewIfNeeded();await p.waitForTimeout(400);await t.screenshot({path:`re/ux/table-${scheme}.png`});await c.close();}
for (const [w,h] of [[1440,900],[1024,768],[390,844]]){const c=await b.newContext({viewport:{width:w,height:h},isMobile:w<768});await c.addInitScript(()=>sessionStorage.setItem("igtpw-intro-seen","1"));const p=await c.newPage();await p.goto("http://localhost:3000/",{waitUntil:"networkidle"});await p.waitForTimeout(1200);
const r=await p.$eval('.home-hero',e=>{const a=e.getBoundingClientRect();return [Math.round(a.width),Math.round(a.bottom)]});console.log(`${w}x${h} hero width ${r[0]} bottom ${r[1]}`);await p.screenshot({path:`re/ux/hero2-${w}.png`});await c.close();}
await b.close();
