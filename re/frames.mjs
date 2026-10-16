import { chromium } from 'playwright';
const browser=await chromium.launch();
const ctx=await browser.newContext({viewport:{width:1440,height:900}});
const page=await ctx.newPage();
await page.goto('https://www.igtpw.com/pressure-washing',{waitUntil:'networkidle'});
await page.waitForTimeout(2500);
// nav frames (bubbles speed 0.1)
for (let i=0;i<4;i++){await page.screenshot({path:`shots/nav-frame-${i}.png`,clip:{x:0,y:0,width:1440,height:160}});await page.waitForTimeout(1000);}
// comp 15 frames
const el=await page.$('div.flex.justify-center.mb-12');
const box=await el.boundingBox(); await page.evaluate(y=>window.scrollTo(0,y-200),box.y); await page.waitForTimeout(1200);
for (let i=0;i<4;i++){await page.screenshot({path:`shots/comp15-frame-${i}.png`,clip:{x:box.x-20,y:box.y-200-20,width:box.width+40,height:box.height+40}});await page.waitForTimeout(600);}
// footer frames
const f=await page.$('footer'); const fb=await f.boundingBox();
await page.evaluate(y=>window.scrollTo(0,y),fb.y-50); await page.waitForTimeout(1200);
for (let i=0;i<3;i++){await page.screenshot({path:`shots/footer-frame-${i}.png`,clip:{x:0,y:fb.y-(fb.y-50)+0,width:1440,height:Math.min(fb.height,850)}});await page.waitForTimeout(700);}
// lottie DOM details
const info=await page.evaluate(()=>{
  const out=[];
  for(const svg of document.querySelectorAll('svg')){ if(!svg.querySelector('g[clip-path], defs clipPath')) continue;
    const r=svg.getBoundingClientRect(); const p=svg.parentElement; const pr=p.getBoundingClientRect();
    out.push({where: svg.closest('nav')?'nav':svg.closest('footer')?'footer':'page', viewBox:svg.getAttribute('viewBox'), w:svg.getAttribute('width'),h:svg.getAttribute('height'),par:svg.getAttribute('preserveAspectRatio'), svgStyle:svg.getAttribute('style'), rect:[r.x,r.y+scrollY,r.width,r.height].map(n=>+n.toFixed(1)), parentClass:p.className, parentStyle:p.getAttribute('style'), parentRect:[pr.x,pr.y+scrollY,pr.width,pr.height].map(n=>+n.toFixed(1)), display:getComputedStyle(p).display, firstG: (svg.querySelector('g')||{}).getAttribute? svg.querySelector('g').getAttribute('transform'):null});
  }
  return out;
});
console.log(JSON.stringify(info,null,1));
// hover state of nav link and button
await page.evaluate(()=>window.scrollTo(0,0));
await page.hover('nav a[href="/get-estimate"]'); await page.waitForTimeout(300);
console.log('estimate hover bg', await page.$eval('nav a[href="/get-estimate"]',e=>getComputedStyle(e).backgroundColor));
await page.hover('nav ul li a[href="/"]'); await page.waitForTimeout(300);
console.log('home hover color', await page.$eval('nav ul li a[href="/"]',e=>getComputedStyle(e).color));
// open Residential dropdown
await page.click('nav ul li button:has-text("Residential")'); await page.waitForTimeout(400);
await page.screenshot({path:'shots/nav-dropdown-residential.png',clip:{x:0,y:0,width:1440,height:420}});
const dd=await page.$eval('nav ul li div.absolute',e=>{const r=e.getBoundingClientRect();const c=getComputedStyle(e);return {rect:[r.x,r.y,r.width,r.height],bg:c.backgroundColor,border:c.border,radius:c.borderRadius,shadow:c.boxShadow,font:c.fontSize};});
console.log('dropdown',JSON.stringify(dd));
await page.click('nav ul li button:has-text("Commercial")'); await page.waitForTimeout(300);
await page.click('nav ul li button:has-text("Stain Removal")'); await page.waitForTimeout(400);
await page.screenshot({path:'shots/nav-dropdown-commercial-stain.png',clip:{x:0,y:0,width:1440,height:520}});
// slider interaction
const sl=await page.$('input[type=range]'); const sb=await sl.boundingBox();
await page.evaluate(y=>window.scrollTo(0,y-100),sb.y); await page.waitForTimeout(500);
await page.$eval('input[type=range]',e=>{const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;setter.call(e,'25');e.dispatchEvent(new Event('input',{bubbles:true}));});
await page.waitForTimeout(400);
const sbox=await (await page.$('section.p-8.bg-white')).boundingBox();
await page.screenshot({path:'shots/slider-25.png',clip:{x:0,y:sbox.y-(sb.y-100),width:1440,height:sbox.height}});
console.log('slider state', await page.$eval('section.p-8 > div > div',e=>({h:e.style.height, clipW:e.children[1].style.width, lineLeft:e.querySelector('.w-1').style.left})));
await browser.close();
