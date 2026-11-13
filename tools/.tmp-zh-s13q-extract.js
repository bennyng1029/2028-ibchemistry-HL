const lib = require('/home/user/2028-ibchemistry-HL/tools/i18n-lib');
const fs=require('fs');
(async()=>{
  const { chromium } = require('playwright');
  const b = await chromium.launch(); const cat = await lib.catalog(b,'s1-3'); await b.close();
  fs.writeFileSync('/tmp/claude-0/-home-user-2028-ibchemistry-HL/ba9d5b73-1e45-5ec2-8b71-24f100641833/scratchpad/tr-zh-Hant-s1-3q'+'/cat.json', JSON.stringify(cat.questions,null,1));
  const qfile='/home/user/2028-ibchemistry-HL/i18n/zh-Hant/s1-3.q.js';
  if (fs.existsSync(qfile)) { console.log('exists, not writing'); lib.writeQuestionsFile('/tmp/claude-0/-home-user-2028-ibchemistry-HL/ba9d5b73-1e45-5ec2-8b71-24f100641833/scratchpad/tr-zh-Hant-s1-3q'+'/skel.q.js','zh-Hant','s1-3.q',cat.questions,{}); }
  else { lib.writeQuestionsFile(qfile,'zh-Hant','s1-3.q',cat.questions,{}); fs.copyFileSync(qfile,'/tmp/claude-0/-home-user-2028-ibchemistry-HL/ba9d5b73-1e45-5ec2-8b71-24f100641833/scratchpad/tr-zh-Hant-s1-3q'+'/skel.q.js'); console.log('wrote'); }
  console.log(Object.keys(cat.questions).length);
})();
