#!/usr/bin/env node
/* Build or top up translation skeletons.
     node tools/i18n-extract.js <pageId> [--lang ja|zh-Hant|ko] [--write] [--only-missing] [--json]
   <pageId> is ui, home, practice, or a topic id such as s1-4.

   --write          creates or rewrites  i18n/<lang>/<pageId>.js   (page text, attributes, widget strings)
                                    and  i18n/<lang>/<pageId>.q.js (question bank), for each language.
                    Entries are in page order, each with a comment saying where it appears. Existing
                    translations are kept. Entries whose English has gone are moved to a STALE list at the end.
   --only-missing   with --write: do not rewrite anything. Append the entries that are new since the last
                    extraction to the end of the existing file(s), leaving every existing line untouched.
   (no --write)     print the page skeleton.   --json prints the catalog as JSON.                          */
'use strict';
const fs = require('fs');
const path = require('path');
const lib = require('./i18n-lib');

(async () => {
  const args = process.argv.slice(2);
  const scope = (args.find(a => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--lang') || '').replace(/\.q$/, '');
  if (!scope) { console.error('Usage: node tools/i18n-extract.js <pageId> [--lang <lang>] [--write] [--only-missing] [--json]'); process.exit(2); }
  const li = args.indexOf('--lang');
  const langs = li > -1 ? [args[li + 1]] : lib.LANGS;
  const write = args.includes('--write'), onlyMissing = args.includes('--only-missing');
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const cat = await lib.catalog(browser, scope);
  await browser.close();
  const hasQ = Object.keys(cat.questions).length > 0;

  if (args.includes('--json')) { console.log(JSON.stringify(cat, null, 2)); return; }
  for (const lang of langs) {
    const dir = path.join(lib.ROOT, 'i18n', lang);
    const file = path.join(dir, scope + '.js'), qfile = path.join(dir, scope + '.q.js');
    const old = lib.readOverlay(file) || { strings: {}, questions: {} };
    const oldQ = lib.readOverlay(qfile) || { strings: {}, questions: {} };
    const values = {};
    Object.keys(old.strings).forEach(k => { values[lib.norm(k)] = old.strings[k]; });
    const prevQ = Object.assign({}, old.questions);          // older combined files keep working
    Object.keys(oldQ.questions).forEach(id => { prevQ[id] = Object.assign(prevQ[id] || {}, oldQ.questions[id]); });
    const keys = cat.entries.map(e => e.key);
    const stale = Object.keys(values).filter(k => !keys.includes(k) && values[k]);

    if (!write) {
      console.log("S1.i18n.register('" + lang + "', '" + scope + "', {\n  strings: {\n\n" + lib.stringsBlock(cat.entries, values, '    ') + '  }\n});');
      break;
    }
    if (onlyMissing) {
      const fresh = cat.entries.filter(e => !(e.key in values));
      if (fs.existsSync(file) && fresh.length) {
        fs.appendFileSync(file, '\n/* Added by i18n-extract --only-missing on ' + new Date().toISOString().slice(0, 10) + ': new or changed English. */\n' +
          "S1.i18n.register('" + lang + "', '" + scope + "', {\n  strings: {\n\n" + lib.stringsBlock(fresh, {}, '    ') + '  }\n});\n');
      } else if (!fs.existsSync(file) && cat.entries.length) lib.writeStringsFile(file, lang, scope, cat.entries, values, []);
      // new questions, and new slots of questions that are already there (answerDisplay, an extra hint …)
      const freshQ = {}, slots = {};
      let newQ = 0, newSlots = 0;
      Object.keys(cat.questions).forEach(id => {
        const miss = lib.missingSlots(cat.questions[id], prevQ[id]);
        if (!miss.length) return;
        freshQ[id] = cat.questions[id]; slots[id] = miss;
        if (prevQ[id]) newSlots += miss.length; else newQ++;
      });
      if (hasQ && !fs.existsSync(qfile)) lib.writeQuestionsFile(qfile, lang, scope + '.q', cat.questions, prevQ);
      else if (Object.keys(freshQ).length) {
        const tmp = qfile + '.tmp'; lib.writeQuestionsFile(tmp, lang, scope + '.q', freshQ, prevQ, slots);
        fs.appendFileSync(qfile, '\n/* Added by i18n-extract --only-missing on ' + new Date().toISOString().slice(0, 10) + ': new questions and new slots. */\n' + fs.readFileSync(tmp, 'utf8').replace(/^\/\*[\s\S]*?\*\/\n/, ''));
        fs.unlinkSync(tmp);
      }
      console.log(lang + ': ' + fresh.length + ' new string(s), ' + newQ + ' new question(s) and ' + newSlots + ' new slot(s) in existing questions appended; nothing else touched' + (stale.length ? '; ' + stale.length + ' stale (see i18n-check)' : ''));
      continue;
    }
    if (cat.entries.length) lib.writeStringsFile(file, lang, scope, cat.entries, values, stale);
    if (hasQ) lib.writeQuestionsFile(qfile, lang, scope + '.q', cat.questions, prevQ);
    console.log('wrote ' + path.relative(lib.ROOT, file) + ' (' + cat.entries.length + ' strings' + (stale.length ? ', ' + stale.length + ' stale kept at the end' : '') + ')' +
      (hasQ ? ' and ' + path.relative(lib.ROOT, qfile) + ' (' + Object.keys(cat.questions).length + ' questions)' : ''));
  }
  if (write) console.log('Next: translate, then  node tools/i18n-check.js <lang> ' + scope + ' --verbose   (also refreshes i18n/<lang>/index.js)');
})().catch(e => { console.error(e); process.exit(1); });
