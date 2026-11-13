#!/usr/bin/env node
/* Advisory glossary check.
     node tools/i18n-lint-terms.js <lang> <pageId> [--all-rows]
   Reads docs/glossary-<lang>.md (table rows: English | translation | …) and lists translations where an
   English glossary term occurs in the English source but none of its glossary translations occurs in the
   translation. It never fails: a hit is a place to look, not always a mistake (a pronoun, a different
   sense of the word, or a deliberate choice recorded in the glossary notes).                          */
'use strict';
const fs = require('fs');
const path = require('path');
const lib = require('./i18n-lib');

function readGlossary(file) {
  const rows = [];
  fs.readFileSync(file, 'utf8').split('\n').forEach(line => {
    if (!/^\s*\|/.test(line) || /^\s*\|\s*:?-{2,}/.test(line)) return;
    const cells = line.split('|').slice(1, -1).map(c => c.trim());
    if (cells.length < 2 || !/[A-Za-z]{2}/.test(cells[0]) || !/[^\x00-\x7f]/.test(cells[1])) return;      // header rows and non-term tables
    const clean = s => s.replace(/\*\*|`|<[^>]+>/g, '').replace(/\s*[?？]\s*$/, '').trim();
    // English: alternatives separated by " / " or ","; text in brackets is a note
    const en = clean(cells[0]).replace(/\([^)]*\)|（[^）]*）/g, ' ').split(/\s*\/\s*|\s*,\s*|\s*;\s*/).map(s => s.trim().toLowerCase()).filter(s => s.length > 2);
    // translation: alternatives separated by / 、 ・ or given in brackets
    const tr = clean(cells[1]).split(/\s*[\/、／]\s*|[()（）]/).map(s => s.trim()).filter(s => s && /[^\x00-\x7f]/.test(s));
    if (en.length && tr.length) rows.push({ en, tr, row: cells[0] + ' | ' + cells[1] });
  });
  return rows;
}

(() => {
  const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
  const [lang, scope] = args;
  if (!lang || !scope) { console.error('Usage: node tools/i18n-lint-terms.js <lang> <pageId>'); process.exit(2); }
  const gfile = path.join(lib.ROOT, 'docs', 'glossary-' + lang + '.md');
  if (!fs.existsSync(gfile)) { console.error('No glossary: docs/glossary-' + lang + '.md'); process.exit(2); }
  const glossary = readGlossary(gfile);
  const base = scope.replace(/\.q$/, ''), dir = path.join(lib.ROOT, 'i18n', lang);
  const page = lib.readOverlay(path.join(dir, base + '.js')) || { strings: {}, questions: {} };
  const qf = lib.readOverlay(path.join(dir, base + '.q.js')) || { strings: {}, questions: {} };
  const pairs = [];
  Object.keys(page.strings).forEach(k => { if (page.strings[k]) pairs.push([k, page.strings[k], 'text']); });
  // question translations need the English: read the bank without a browser
  const bankFile = path.join(lib.ROOT, base === 'dev' ? 'dev/questions-dev.js' : 'data/questions-' + base + '.js');
  const bank = {};
  if (fs.existsSync(bankFile)) {
    const S1 = { questions: { register: (t, list) => (list || []).forEach(q => { bank[q.id] = q; }) } };
    try { require('vm').runInNewContext(fs.readFileSync(bankFile, 'utf8'), { S1, window: { S1 } }); } catch (e) { console.error('Could not read ' + bankFile + ': ' + e.message); }
  }
  const trQ = Object.assign({}, page.questions); Object.keys(qf.questions).forEach(id => { trQ[id] = Object.assign(trQ[id] || {}, qf.questions[id]); });
  Object.keys(trQ).forEach(id => { if (bank[id]) lib.questionPairs(bank[id], trQ[id]).forEach(([p, en, tr]) => { if (tr) pairs.push([String(en), tr, id + '.' + p]); }); });

  const strip = s => s.replace(/<[^>]+>/g, ' ');
  let hits = 0;
  pairs.forEach(([en, tr, where]) => {
    const e = ' ' + strip(en).toLowerCase().replace(/[^a-z0-9À-ɏ'-]+/g, ' ') + ' ', t = strip(tr);
    glossary.forEach(g => {
      const term = g.en.find(x => e.indexOf(' ' + x + ' ') > -1 || e.indexOf(' ' + x + 's ') > -1);
      if (!term) return;
      // a longer glossary term that also matches takes over (e.g. "relative atomic mass" over "mass")
      if (glossary.some(o => o !== g && o.en.some(x => x.length > term.length && x.indexOf(term) > -1 && e.indexOf(' ' + x) > -1) && o.tr.some(x => t.indexOf(x) > -1))) return;
      if (g.tr.some(x => t.indexOf(x) > -1)) return;
      hits++;
      console.log('TERM  "' + term + '" → expected one of: ' + g.tr.join(' / ') + '\n      ' + where + ': ' + strip(en).replace(/\s+/g, ' ').trim().slice(0, 100) + '\n      got: ' + t.replace(/\s+/g, ' ').trim().slice(0, 100));
    });
  });
  console.log('\n' + glossary.length + ' glossary terms, ' + pairs.length + ' translated strings checked, ' + hits + ' place(s) to look at. (Advisory only.)');
})();
