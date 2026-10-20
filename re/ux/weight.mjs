import { chromium } from "playwright";
const base=process.argv[2]||"https://igotthepowerwasher-iaju.vercel.app";
const b=await chromium.launch();
for (const r of ["/","/services","/gallery","/house-washing","/pressure-washing","/seal-solutions"]){
 const c=await b.newContext({viewport:{width:1440,height:900}});await c.addInitScript(()=>sessionStorage.setItem("igtpw-intro-seen","1"));const p=await c.newPage();
 const sizes={};let total=0;
 p.on('response',async res=>{try{const u=res.url();const buf=await res.body();const n=buf.length;total+=n;const t=res.request().resourceType();sizes[t]=(sizes[t]||0)+n;if(n>300000)console.log('   big',Math.round(n/1024)+'KB',u.replace(base,'').slice(0,90));}catch{}});
 const t0=Date.now();await p.goto(base+r,{waitUntil:"load",timeout:120000});const load=Date.now()-t0;
 const H=await p.evaluate(()=>document.documentElement.scrollHeight);for(let y=0;y<H;y+=700){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(80);}await p.waitForLoadState('networkidle');
 console.log(r,'load',load+'ms','total',Math.round(total/1024)+'KB',JSON.stringify(Object.fromEntries(Object.entries(sizes).map(([k,v])=>[k,Math.round(v/1024)]))));await c.close();}
await b.close();
