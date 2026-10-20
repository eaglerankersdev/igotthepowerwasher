import { chromium } from "playwright";
const b=await chromium.launch();const c=await b.newContext({viewport:{width:1440,height:900}});await c.addInitScript(()=>sessionStorage.setItem("igtpw-intro-seen","1"));const p=await c.newPage();
p.on('response',r=>{if(r.url().includes("29740301"))console.log('resp',r.status(),r.headers()['content-type'],r.url().slice(21,140));});
await p.goto("http://localhost:3000/house-washing",{waitUntil:"networkidle"});
const el=p.locator('img[src*="29740301"]').first();await el.scrollIntoViewIfNeeded();await p.waitForTimeout(2500);
console.log(await el.evaluate(i=>({src:i.currentSrc.slice(0,140),complete:i.complete,nw:i.naturalWidth,loading:i.loading})));
await b.close();
