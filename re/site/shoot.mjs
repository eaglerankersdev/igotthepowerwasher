import { chromium } from 'playwright';
import fs from 'node:fs';
const routes = JSON.parse(fs.readFileSync('site/routes.json')); 
const extra=['/annual-maintenance-program','/satisfaction-guarantee-policy','/gas-station','/gum-removal','/oil-removal','/grease-removal','/commercial-gallery','/residential-gallery'];
const list=[...new Set([...Object.keys(routes).filter(r=>routes[r][0]==='200'), ...extra])];
const browser=await chromium.launch();
const meta={};
for (const w of [1440,390]){
  const ctx=await browser.newContext({viewport:{width:w,height:900},isMobile:w<768,hasTouch:w<768});
  for (const r of list){
    const page=await ctx.newPage(); const reqs=new Set(); const errs=[];
    page.on('response',res=>{ if(res.status()>=400) errs.push(res.status()+' '+res.url()); const u=res.url(); if(!u.startsWith('https://www.igtpw.com')) reqs.add(new URL(u).host); });
    try{
      await page.goto('https://www.igtpw.com'+r,{waitUntil:'networkidle',timeout:60000});
      await page.waitForTimeout(2500);
      const H=await page.evaluate(()=>document.documentElement.scrollHeight);
      for(let y=0;y<H;y+=500){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(80);}
      await page.evaluate(()=>window.scrollTo(0,0)); await page.waitForTimeout(1200);
      const name=(r==='/'?'home':r.slice(1).replace(/\//g,'__'));
      await page.screenshot({path:`site/shots/${name}-${w}.png`,fullPage:true});
      const info=await page.evaluate(()=>({h:document.documentElement.scrollHeight, lottie:[...document.querySelectorAll('svg[preserveAspectRatio]')].filter(s=>s.querySelector('g')).map(s=>s.getAttribute('viewBox')+' '+s.getAttribute('preserveAspectRatio')+' in .'+s.parentElement.className.split(' ').slice(0,3).join('.')), canvases:document.querySelectorAll('canvas').length, videos:document.querySelectorAll('video').length, iframes:[...document.querySelectorAll('iframe')].map(i=>i.src.slice(0,80)), forms:document.querySelectorAll('form').length, inputs:document.querySelectorAll('input,textarea,select').length}));
      meta[`${r}@${w}`]={...info,errors:errs,thirdParty:[...reqs]};
      console.log(w,r,'h=',info.h,'lottie=',info.lottie.length,'forms=',info.forms,'iframes=',info.iframes.length,'3p=',[...reqs].join(','),'errs=',errs.length);
    }catch(e){console.log('FAIL',w,r,String(e).slice(0,100));}
    await page.close();
  }
  await ctx.close();
}
await browser.close();
fs.writeFileSync('site/shots/meta.json',JSON.stringify(meta,null,1));
