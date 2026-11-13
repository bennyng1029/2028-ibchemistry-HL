#!/usr/bin/env node
/* Build or refresh a translation skeleton.
     node tools/i18n-extract.js <scope> [--lang ja|zh-Hant] [--write] [--json]
   <scope> is ui, home, practice, or a topic id such as s1-1.
   Without --write it prints the skeleton. With --write it creates or updates
   i18n/<lang>/<scope>.js for each language, keeping translations that already exist
   and dropping keys that no longer exist in the English source.               */
'use strict';
const path = require('path');
const lib = require('./i18n-lib');

(async () => {
  const args = process.argv.slice(2);
  const scope = args.find(a => !a.startsWith('--'));
  if (!scope) { console.error('Usage: node tools/i18n-extract.js <scope> [--lang <lang>] [--write] [--json]'); process.exit(2); }
  const li = args.indexOf('--lang');
  const langs = li > -1 ? [args[li + 1]] : lib.LANGS;
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const cat = await lib.catalog(browser, scope);
  await browser.close();

  for (const lang of langs) {
    const file = path.join(lib.ROOT, 'i18n', lang, scope + '.js');
    const old = lib.readOverlay(file) || { strings: {}, questions: {} };
    const oldStrings = {};
    Object.keys(old.strings).forEach(k => { oldStrings[lib.norm(k)] = old.strings[k]; });
    const data = { strings: {}, questions: {} };
    cat.strings.forEach(k => { data.strings[k] = oldStrings[k] || ''; });
    Object.keys(cat.questions).forEach(id => {
      const sk = lib.questionSkeleton(cat.questions[id]), prev = old.questions[id] || {};
      Object.keys(sk).forEach(f => {
        if (Array.isArray(sk[f])) sk[f] = sk[f].map((v, i) => (prev[f] && prev[f][i]) || '');
        else if (typeof sk[f] === 'object') Object.keys(sk[f]).forEach(k => { sk[f][k] = (prev[f] && prev[f][k]) || ''; });
        else sk[f] = prev[f] || '';
      });
      data.questions[id] = sk;
    });
    if (!Object.keys(data.questions).length) delete data.questions;
    if (args.includes('--write')) {
      lib.writeOverlay(file, lang, scope, data);
      console.log('wrote ' + path.relative(lib.ROOT, file) + '  (' + cat.strings.length + ' strings, ' + Object.keys(cat.questions).length + ' questions)');
    } else if (args.includes('--json')) {
      console.log(JSON.stringify({ lang, scope, strings: data.strings, questions: data.questions || {}, english: cat.questions }, null, 2));
    } else {
      console.log("S1.i18n.register('" + lang + "', '" + scope + "', " + JSON.stringify(data, null, 2) + ');');
    }
    if (!args.includes('--write')) break;      // printing once is enough
  }
  if (args.includes('--write')) console.log('Now run: node tools/i18n-check.js <lang>   (this also refreshes i18n/<lang>/index.js)');
})().catch(e => { console.error(e); process.exit(1); });
