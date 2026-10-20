import { chromium } from "playwright";
import fs from "node:fs";
const routes=JSON.parse(fs.readFileSync("re/site/module-map.json")).pages.map(p=>p.route);
const b=await chromium.launch();
const c=await b.newContext({viewport:{width:1440,height:900},colorScheme:process.argv[2]||"dark"});await c.addInitScript(()=>sessionStorage.setItem("igtpw-intro-seen","1"));
const out={};
for(const r of routes){const p=await c.newPage();await p.goto("http://localhost:3000"+r,{waitUntil:"networkidle"});await p.waitForTimeout(600);
 const res=await p.evaluate(()=>{
  const cv=document.createElement('canvas');cv.width=cv.height=1;const cx=cv.getContext('2d',{willReadFrequently:true});
  const rgba=c=>{cx.clearRect(0,0,1,1);cx.fillStyle='#000';cx.fillStyle=c;cx.fillRect(0,0,1,1);return [...cx.getImageData(0,0,1,1).data];};
  const lum=c=>{if(!c||c==='transparent'||/rgba?\(0, 0, 0, 0\)/.test(c))return null;const [r,g,b,a]=rgba(c);if(a<128)return null;const f=v=>{v/=255;return v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4};return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b)};
  let bgEl=null;const bgOf=e=>{for(let n=e;n;n=n.parentElement){const s=getComputedStyle(n);if(s.backgroundImage!=='none')return null;const l=lum(s.backgroundColor);if(l!==null){bgEl=n;return l;}}bgEl=document.body;return lum(getComputedStyle(document.body).backgroundColor)};
  const bad=[];
  for(const e of document.querySelectorAll('main *')){ if(!e.childNodes.length||![...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim().length>1))continue;
   const s=getComputedStyle(e); if(s.visibility==='hidden'||+s.opacity<0.1||e.closest('[aria-hidden=true]'))continue;
   let overImg=false;for(let n=e.parentElement;n&&n!==document.body;n=n.parentElement){if([...n.children].some(k=>(k.tagName==='IMG'||k.tagName==='VIDEO'||k.querySelector&&k.querySelector(':scope > img'))&&getComputedStyle(k).position==='absolute')){overImg=true;break;}}
   if(overImg)continue;
   const fg=lum(s.color),bg=bgOf(e); if(fg===null||bg===null)continue;
   const cr=(Math.max(fg,bg)+0.05)/(Math.min(fg,bg)+0.05);
   const big=parseFloat(s.fontSize)>=24||(parseFloat(s.fontSize)>=18.6&&+s.fontWeight>=700);
   if(cr<(big?3:4.5)) bad.push({bg:(bgEl.className&&bgEl.className.baseVal===undefined?bgEl.className:'').slice(0,90),bgc:getComputedStyle(bgEl).backgroundColor,t:(e.innerText||"").trim().slice(0,40),cr:+cr.toFixed(2),color:s.color,tag:e.tagName});}
  return bad;});
 if(res.length){out[r]=res;console.log(r,res.length,JSON.stringify(res.slice(0,3)));}
 await p.close();}
fs.writeFileSync(`re/ux/contrast-${process.argv[2]||"dark"}.json`,JSON.stringify(out,null,1));
await b.close();
