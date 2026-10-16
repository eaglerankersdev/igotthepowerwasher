import { chromium } from 'playwright';
import fs from 'node:fs';
const URL='https://www.igtpw.com/pressure-washing';
const widths=[1440,1024,768,390];
const browser=await chromium.launch();
const results={};
for (const w of widths){
  const ctx=await browser.newContext({viewport:{width:w,height:900},deviceScaleFactor:1,isMobile:w<768,hasTouch:w<768,userAgent: w<768? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1':undefined});
  const page=await ctx.newPage();
  const reqs=[];
  page.on('response',r=>reqs.push({url:r.url(),status:r.status(),type:r.request().resourceType(),ct:r.headers()['content-type']||''}));
  const t0=Date.now();
  await page.goto(URL,{waitUntil:'networkidle'});
  await page.waitForTimeout(3500);
  // scroll through to trigger whileInView
  const H=await page.evaluate(()=>document.documentElement.scrollHeight);
  for(let y=0;y<H;y+=400){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(120);}
  await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(1500);
  await page.screenshot({path:`shots/orig-${w}.png`,fullPage:true});
  const data=await page.evaluate(()=>{
    const q=(sel)=>Array.from(document.querySelectorAll(sel));
    const rect=(el)=>{const r=el.getBoundingClientRect();return {x:+r.x.toFixed(1),y:+(r.y+window.scrollY).toFixed(1),w:+r.width.toFixed(1),h:+r.height.toFixed(1)};};
    const cs=(el,props)=>{const c=getComputedStyle(el);const o={};for(const p of props)o[p]=c.getPropertyValue(p);return o;};
    const typo=['font-family','font-size','font-weight','line-height','letter-spacing','color','text-align','margin-top','margin-bottom','padding','background-color','background-image','border-radius','box-shadow','opacity','transform','min-height','max-width','width','height'];
    const sels=['nav','nav img','nav a[href="/get-estimate"]','nav ul','nav ul li a','nav ul li button','nav button.md\\:hidden','nav svg','h1','h1 + div','h1 + div span','h2','h3','h4','p','section','section > div','blockquote','footer','footer h4','footer a','footer img','footer p','main','body','html','[class*="min-h-"]','input[type=range]','img','ul','li','strong','.font_barlow','svg','canvas','[style*="scale"]'];
    const out={};
    for(const s of sels){out[s]=q(s).slice(0,12).map(el=>({tag:el.tagName,cls:(el.className&&el.className.baseVal!==undefined?el.className.baseVal:el.className)||'',text:(el.innerText||'').slice(0,60),rect:rect(el),style:cs(el,typo)}));}
    out.__fonts=Array.from(document.fonts).map(f=>({family:f.family,weight:f.weight,style:f.style,status:f.status}));
    out.__scrollHeight=document.documentElement.scrollHeight;
    out.__lottie={svgs:q('svg[xmlns][viewBox]').filter(s=>s.closest('nav')||s.closest('footer')||s.querySelector('g[clip-path]')).map(s=>({vb:s.getAttribute('viewBox'),w:s.getAttribute('width'),h:s.getAttribute('height'),pa:s.getAttribute('preserveAspectRatio'),style:s.getAttribute('style'),parent:s.parentElement.className,parentRect:rect(s.parentElement),rect:rect(s)}))};
    out.__images=q('img').map(i=>({src:i.currentSrc||i.src,nw:i.naturalWidth,nh:i.naturalHeight,rect:rect(i),alt:i.alt,objectFit:getComputedStyle(i).objectFit}));
    out.__bgimages=q('*').filter(e=>getComputedStyle(e).backgroundImage!=='none').slice(0,20).map(e=>({cls:e.className,bg:getComputedStyle(e).backgroundImage,rect:rect(e),opacity:getComputedStyle(e).opacity}));
    out.__bodyFont=getComputedStyle(document.body).fontFamily;
    out.__title=document.title;
    return out;
  });
  data.__requests=reqs;
  data.__loadMs=Date.now()-t0;
  fs.writeFileSync(`measure/orig-${w}.json`,JSON.stringify(data,null,1));
  console.log(w,'scrollHeight',data.__scrollHeight,'requests',reqs.length,'fonts',data.__fonts.filter(f=>f.status==='loaded').map(f=>f.family+':'+f.weight).join(','));
  await ctx.close();
}
await browser.close();
