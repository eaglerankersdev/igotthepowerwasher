import { chromium } from "playwright";
const b=await chromium.launch();const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();
p.on('console',m=>console.log('console',m.type(),m.text().slice(0,150)));
await p.goto("http://localhost:3000/contact-us",{waitUntil:"networkidle"});await p.waitForTimeout(1000);
const btn=p.locator('nav button[aria-label], nav button:has(.sr-only)').first();
console.log('btn text', await btn.innerText());
await btn.tap();await p.waitForTimeout(400);
console.log('expanded', await btn.getAttribute('aria-expanded'), 'menu display', await p.$eval('nav [id$="-mobile"]',e=>getComputedStyle(e).display));
await b.close();
