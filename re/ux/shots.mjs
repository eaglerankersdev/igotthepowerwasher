import { chromium } from "playwright";
const B="http://localhost:3000"; const b=await chromium.launch();
async function ctx(w,h=900,mobile=false){return b.newContext({viewport:{width:w,height:h},isMobile:mobile,hasTouch:mobile,deviceScaleFactor:mobile?2:1});}
// loader frames
{const c=await ctx(1440);const p=await c.newPage();await p.goto(B+"/",{waitUntil:"commit"});
 for(const t of [1500,5000]){await p.waitForTimeout(t===1500?1500:3500);await p.screenshot({path:`re/ux/loader-${t}.png`});}
 await p.waitForTimeout(7000);await p.screenshot({path:"re/ux/home-after.png"});
 await p.reload({waitUntil:"networkidle"});await p.waitForTimeout(800);await p.screenshot({path:"re/ux/home-revisit.png"});await c.close();}
// nav widths
for(const w of [1024,768]){const c=await ctx(w);const p=await c.newPage();await p.goto(B+"/pressure-washing",{waitUntil:"networkidle"});await p.waitForTimeout(800);await p.screenshot({path:`re/ux/nav-${w}.png`,clip:{x:0,y:0,width:w,height:600}});await c.close();}
// dropdown hover desktop
{const c=await ctx(1440);const p=await c.newPage();await p.goto(B+"/pressure-washing",{waitUntil:"networkidle"});await p.waitForTimeout(600);
 await p.hover('nav li:has-text("Commercial")');await p.waitForTimeout(300);await p.hover('nav button[aria-label="Show Stain Removal services"]');await p.waitForTimeout(300);
 await p.screenshot({path:"re/ux/dropdown.png",clip:{x:0,y:0,width:1440,height:560}});
 await p.keyboard.press("Escape");await p.waitForTimeout(200);
 const open=await p.$$eval('nav [role=menu]',e=>e.length);console.log('menus open after Esc:',open);
 // keyboard focus
 await p.keyboard.press("Tab");await p.waitForTimeout(150);await p.screenshot({path:"re/ux/skiplink.png",clip:{x:0,y:0,width:700,height:120}});
 await c.close();}
// contact form validation + mobile
{const c=await ctx(390,844,true);const p=await c.newPage();await p.goto(B+"/contact-us",{waitUntil:"networkidle"});await p.waitForTimeout(800);
 await p.click('form button[type=submit]');await p.waitForTimeout(500);
 const f=p.locator('form');await f.scrollIntoViewIfNeeded();await p.screenshot({path:"re/ux/form-errors-390.png",fullPage:false});
 await p.click('nav button[aria-controls]');await p.waitForTimeout(300);await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(200);await p.screenshot({path:"re/ux/mobile-menu.png"});
 await c.close();}
{const c=await ctx(390,844,true);const p=await c.newPage();await p.goto(B+"/pressure-washing",{waitUntil:"networkidle"});await p.evaluate(()=>scrollTo(0,2600));await p.waitForTimeout(1200);await p.screenshot({path:"re/ux/actionbar-390.png"});await c.close();}
{const c=await ctx(1440);const p=await c.newPage();await p.goto(B+"/pressure-washing",{waitUntil:"networkidle"});await p.evaluate(()=>scrollTo(0,2700));await p.waitForTimeout(1200);await p.screenshot({path:"re/ux/pw-tech-1440.png"});await c.close();}
await b.close();
