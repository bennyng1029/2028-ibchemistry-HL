const {chromium}=require('playwright');
(async()=>{
 const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:1280,height:900}})).newPage();
 const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto('file:///home/user/2028-ibchemistry-HL/practice.html');await p.waitForTimeout(800);
 await p.evaluate(()=>{const s=document.querySelector('[data-s1-lang-select]');s.value='zh-Hant';s.dispatchEvent(new Event('change',{bubbles:true}));});
 await p.waitForTimeout(2500);
 const r=await p.evaluate(()=>{const h=document.createElement('div');h.id='probe';document.querySelector('main').appendChild(h);
   const out={};for(const id of ['s1-3-q001','s1-3-q003','s1-3-q004','s1-3-q008','s1-3-q011']){const d=document.createElement('div');h.appendChild(d);S1.quiz.mount(d,{ids:[id],shuffle:false,count:1});
     out[id]=[...d.querySelectorAll('button,input,textarea,select')].map(e=>e.tagName+'.'+e.className+':'+(e.type||'')+':'+(e.textContent||'').trim().slice(0,20)).join(' || ');}
   out.cov=JSON.stringify(S1.i18n.coverage()).slice(0,600);return out;});
 console.log(JSON.stringify(r,null,1));console.log('errs',errs);
 await b.close();})();
