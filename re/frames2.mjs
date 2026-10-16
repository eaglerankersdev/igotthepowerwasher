import { chromium } from 'playwright';
const browser=await chromium.launch();
{
const ctx=await browser.newContext({viewport:{width:1440,height:900}});
const page=await ctx.newPage();
await page.goto('https://www.igtpw.com/pressure-washing',{waitUntil:'networkidle'}); await page.waitForTimeout(2000);
const sec=await page.$('section.p-8.bg-white'); const sb=await sec.boundingBox();
await page.evaluate(y=>window.scrollTo(0,y),sb.y-20); await page.waitForTimeout(800);
await page.$eval('input[type=range]',e=>{const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;setter.call(e,'25');e.dispatchEvent(new Event('input',{bubbles:true}));});
await page.waitForTimeout(400);
await page.screenshot({path:'shots/slider-25.png',clip:{x:0,y:20,width:1440,height:Math.min(sb.height,860)}});
console.log('slider state', JSON.stringify(await page.$eval('section.p-8 > div > div',e=>({h:e.style.height, clipW:e.children[1].style.width, lineLeft:e.querySelector('.w-1').style.left, w:e.getBoundingClientRect().width}))));
// range input computed
console.log('range', JSON.stringify(await page.$eval('input[type=range]',e=>{const c=getComputedStyle(e);const r=e.getBoundingClientRect();return {w:r.width,h:r.height,opacity:c.opacity,cursor:c.cursor,top:c.top,transform:c.transform};})));
// h1 + hero details
console.log('hero', JSON.stringify(await page.$eval('div.min-h-\\[60vh\\]',e=>{const c=getComputedStyle(e);const r=e.getBoundingClientRect();return {h:r.height,bg:c.backgroundColor,bgimg:c.backgroundImage, inner:(()=>{const i=e.firstElementChild;const ic=getComputedStyle(i);return {bg:ic.backgroundImage,op:ic.opacity}})()};})));
console.log('h1', JSON.stringify(await page.$eval('h1',e=>{const c=getComputedStyle(e);const r=e.getBoundingClientRect();return {w:r.width,h:r.height,fs:c.fontSize,lh:c.lineHeight,ff:c.fontFamily,mb:c.marginBottom,opacity:c.opacity,transform:c.transform};})));
console.log('breadcrumb', JSON.stringify(await page.$eval('h1 + div',e=>{const c=getComputedStyle(e);const r=e.getBoundingClientRect();return {w:r.width,h:r.height,fs:c.fontSize,lh:c.lineHeight,ff:c.fontFamily,fw:c.fontWeight,color:c.color,opacity:c.opacity, iconSvg:e.querySelector('svg')?.outerHTML.slice(0,300)};})));
console.log('chevron', JSON.stringify(await page.$eval('nav ul li button svg',e=>e.outerHTML.slice(0,400))));
console.log('burger', JSON.stringify(await page.$eval('nav button.md\\:hidden svg',e=>e.outerHTML.slice(0,400))));
console.log('footer icons', JSON.stringify(await page.$$eval('footer svg',els=>els.map(e=>e.outerHTML.slice(0,160)))));
await ctx.close();
}
{
const ctx=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});
const page=await ctx.newPage();
await page.goto('https://www.igtpw.com/pressure-washing',{waitUntil:'networkidle'}); await page.waitForTimeout(2000);
await page.screenshot({path:'shots/mobile-top.png',clip:{x:0,y:0,width:390,height:844}});
await page.click('nav button.md\\:hidden'); await page.waitForTimeout(500);
await page.screenshot({path:'shots/mobile-menu-open.png',fullPage:false});
console.log('mobile nav open', JSON.stringify(await page.$eval('nav',e=>{const r=e.getBoundingClientRect();return {h:r.height, menuDisplay:getComputedStyle(e.querySelector('div.w-full')).display, ulRect:(()=>{const u=e.querySelector('ul').getBoundingClientRect();return [u.x,u.y,u.width,u.height]})()};})));
await page.click('nav ul li button:has-text("Residential")'); await page.waitForTimeout(400);
await page.screenshot({path:'shots/mobile-menu-residential.png',fullPage:false});
console.log('mobile lottie', JSON.stringify(await page.$$eval('nav svg[viewBox="0 0 1080 1080"]',els=>els.map(e=>({par:e.getAttribute('preserveAspectRatio'),parentClass:e.parentElement.className,display:getComputedStyle(e.parentElement).display,rect:(()=>{const r=e.getBoundingClientRect();return [r.x,r.y,r.width,r.height]})()})))));
await ctx.close();
}
for (const w of [1024,768]){
const ctx=await browser.newContext({viewport:{width:w,height:900}});
const page=await ctx.newPage();
await page.goto('https://www.igtpw.com/pressure-washing',{waitUntil:'networkidle'}); await page.waitForTimeout(1500);
await page.screenshot({path:`shots/nav-${w}.png`,clip:{x:0,y:0,width:w,height:700}});
await ctx.close();
}
await browser.close();
