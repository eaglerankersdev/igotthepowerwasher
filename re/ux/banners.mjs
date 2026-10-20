import { chromium } from "playwright";
const b=await chromium.launch();
for (const [r,w] of [["/pressure-washing",1440],["/about-us",1440],["/contact-us",390],["/the-clean-team",1440]]){
 const c=await b.newContext({viewport:{width:w,height:900},isMobile:w<768});const p=await c.newPage();
 await p.goto("http://localhost:3000"+r,{waitUntil:"networkidle"});await p.waitForTimeout(2200);
 const info=await p.$eval('div.min-h-\\[60vh\\]',e=>{const c=getComputedStyle(e);return {bg:c.backgroundColor,img:c.backgroundImage.slice(0,70)}});
 console.log(r,w,JSON.stringify(info));
 const box=await p.$eval('div.min-h-\\[60vh\\]',e=>{const r=e.getBoundingClientRect();return {y:r.y+scrollY,h:r.height}});
 await p.screenshot({path:`re/ux/banner${r.replace(/\//g,'-')}-${w}.png`,clip:{x:0,y:box.y,width:w,height:Math.min(box.h,600)}});await c.close();}
await b.close();
