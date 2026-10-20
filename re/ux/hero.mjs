import { chromium } from "playwright";
const b=await chromium.launch();
for (const [w,h] of [[1440,900],[1280,720],[1024,768],[390,844]]){
 const c=await b.newContext({viewport:{width:w,height:h},isMobile:w<768});await c.addInitScript(()=>sessionStorage.setItem("igtpw-intro-seen","1"));
 const p=await c.newPage();await p.goto("http://localhost:3000/",{waitUntil:"networkidle"});await p.waitForTimeout(1500);
 const r=await p.$eval('.home-hero',e=>{const a=e.getBoundingClientRect();const i=e.querySelector('img').getBoundingClientRect();return {top:a.top,bottom:a.bottom,img:[Math.round(i.width),Math.round(i.height)]}});
 console.log(w+'x'+h,'hero bottom',Math.round(r.bottom),'<= viewport',h,r.bottom<=h+1?'FITS':'CUT','img box',r.img);
 await p.screenshot({path:`re/ux/hero-${w}x${h}.png`});await c.close();}
await b.close();
