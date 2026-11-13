/* Shared code for the i18n tools. Dev-only: needs Node and Playwright (no other dependencies). */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SHELL_FILES = ['assets/js/chem.js', 'assets/js/core.js', 'assets/js/quiz.js', 'assets/js/mol.js', 'assets/js/chart.js'];
const LANGS = ['ja', 'zh-Hant'];

const norm = s => String(s == null ? '' : s).replace(/\s+/g, ' ').trim();

function pageFile(id) {
  if (id === 'home') return 'index.html';
  if (id === 'practice') return 'practice.html';
  if (/^s\d+-\d+h?$/.test(id)) return 'topics/' + id + '.html';
  if (id === 'dev') return 'dev/kitchen-sink.html';
  return null;
}
const isTopic = id => /^s\d+-\d+h?$/.test(id) || id === 'dev';

/* ---------- Finding t("…") strings in source files ---------------------------- */
function unquote(lit) {
  const q = lit[0];
  let body = lit.slice(1, -1);
  if (q === "'") body = body.replace(/\\'/g, "'").replace(/"/g, '\\"');
  try { return JSON.parse('"' + body + '"'); } catch (e) { return null; }
}
function literalsIn(code) {
  const out = [];
  const re = /'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"/g;
  let m;
  while ((m = re.exec(code))) { const v = unquote(m[0]); if (v != null) out.push(v); }
  return out;
}
const NOISE = /^(data-[\w-]+|is-[\w-]+|aria-[\w-]+|ahl|sl|all|en|ja|zh-Hant|ui|[a-z]+__[\w-]+|[.#][\w-].*|\[[\w-]+(?:[~^$*|]?=.*)?\]|[a-z0-9]+(-[a-z0-9]+)+)$/;
// Page and widget files: class names and selectors only. A hyphenated word in a t("…") call is a real string
// ("non-metal", "s-block", "but-2-ene"), so the generic "looks like an id" rule of NOISE is not used there
// (except for an operand of a comparison, such as  t(kind === 'some-id' ? … : …)).
const NOISE_PAGE = /^(data-[\w-]+|is-[\w-]+|aria-[\w-]+|[a-z]+__[\w-]+|[.#][\w-].*|\[[\w-]+(?:[~^$*|]?=.*)?\])$/;
const IDLIKE = /^[a-z0-9]+(-[a-z0-9]+)+$/;
/* The rule shared with S1.i18n.translatable() in core.js (used by coverage()): a string is translatable when it
   has at least one letter outside its {placeholders} and its |context suffix.  So "{n} p", "m.p. {T} °C" and
   "{C} °C = {K} K" are entries (word order and unit words can differ), and "{a} × {b}" or "1 σ" are not. */
const translatable = v => /[A-Za-zÀ-ɏ]/.test(String(v).replace(/\|[A-Za-z0-9_-]+$/, '').replace(/\{\w+\}/g, ''));
// Like literalsIn, but drops id-like literals that are an operand of ===, !==, == or !=
function keyLiteralsIn(code) {
  const out = [];
  const re = /'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"/g;
  let m;
  while ((m = re.exec(code))) {
    const v = unquote(m[0]);
    if (v == null) continue;
    const compared = /[=!]==?\s*$/.test(code.slice(0, m.index)) || /^\s*[=!]==?/.test(code.slice(re.lastIndex));
    if (compared && IDLIKE.test(v)) continue;
    out.push(v);
  }
  return out;
}
// One argument of a call, starting at index i (just after "(" or ","): returns [text, indexAfter]
function argAt(src, i) {
  let depth = 1, inStr = null;
  const start = i;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (inStr) { if (ch === '\\') i++; else if (ch === inStr) inStr = null; continue; }
    if (ch === "'" || ch === '"') { inStr = ch; continue; }
    if (ch === '(' || ch === '{' || ch === '[') depth++;
    else if (ch === ')' || ch === '}' || ch === ']') { depth--; if (depth === 0) return [src.slice(start, i), i]; }
    else if (ch === ',' && depth === 1) return [src.slice(start, i), i + 1];
  }
  return [src.slice(start), src.length];
}
/* mode 'shell': t(), t.n(), tl(), S1.i18n.ui()  — mode 'page': t(), S1.t(), w.t() and their .n() */
function scanSource(src, mode) {
  const keys = [];
  const noise = mode === 'shell' ? NOISE : NOISE_PAGE;
  const add = v => { v = norm(v); if (v && translatable(v) && !noise.test(v) && !keys.includes(v)) keys.push(v); };
  src.split('\n').forEach(line => { if (/\/\/ i18n\s*$/.test(line)) literalsIn(line.replace(/\/\/ i18n\s*$/, '')).forEach(v => { if (/[A-Z]/.test(v) || / /.test(v)) add(v); }); });
  src = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  const names = mode === 'shell' ? 'S1\\.i18n\\.ui|S1\\.i18n\\.either|tl|t' : 'S1\\.t|w\\.t|t';
  const call = new RegExp('(?:^|[^\\w.$])(?:' + names + ')(\\.n)?\\(', 'g');
  let m;
  while ((m = call.exec(src))) {
    let [arg, next] = argAt(src, call.lastIndex);
    if (m[1]) [arg] = argAt(src, next);                 // t.n(count, {one, other}): the forms are the second argument
    (mode === 'shell' ? literalsIn(arg) : keyLiteralsIn(arg)).forEach(add);
  }
  if (mode === 'shell') {
    const prop = /\b(?:t|tTitle|tLabel):\s*([^\n]*?)(?=,\s*[\w'"]+\s*:|\s*\}\)|\s*\},|\n)/g;
    while ((m = prop.exec(src))) literalsIn(m[1]).forEach(add);
    const attr = /data-t(?:-aria|-title)?="([^"]*)"/g;
    while ((m = attr.exec(src))) add(m[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
  }
  return keys.filter(k => !/^' \+|\+ '$/.test(k));
}

/* ---------- Reading and writing overlay files ---------------------------------- */
function readOverlay(file) {
  if (!fs.existsSync(file)) return null;
  const got = { strings: {}, questions: {} };
  const S1 = { i18n: { register: (l, s, d) => {
    Object.assign(got.strings, (d && d.strings) || {});
    Object.keys((d && d.questions) || {}).forEach(id => { got.questions[id] = Object.assign(got.questions[id] || {}, d.questions[id]); });
  }, manifest: () => {} } };
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), { S1, window: { S1 } }, { filename: file });
  return got;
}
const J = v => JSON.stringify(v);
const comment = (indent, text) => String(text).split('\n').map(l => indent + '// ' + l.replace(/\*\//g, '* /')).join('\n') + '\n';

/* entries: [{key, ctx: [..]}], values: {key: translation} → the body of a strings object, in order */
function stringsBlock(entries, values, indent) {
  let out = '';
  entries.forEach(e => {
    (e.ctx && e.ctx.length ? e.ctx : ['']).forEach(c => { if (c) out += comment(indent, c); });
    out += indent + J(e.key) + ': ' + J(values[e.key] || '') + ',\n\n';
  });
  return out;
}
function writeStringsFile(file, lang, scope, entries, values, stale) {
  let s = '/* ' + scope + ' — ' + lang + ' translation overlay for Structure Lab (page text, attributes, widget strings).\n' +
    '   Each entry: a comment saying where the text appears, then "English source": "translation".\n' +
    '   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.\n' +
    '   Rules, lints and workflow: docs/TRANSLATING.md. */\n';
  s += "S1.i18n.register('" + lang + "', '" + scope + "', {\n  strings: {\n\n" + stringsBlock(entries, values, '    ');
  if (stale && stale.length) {
    s += '    // ---- STALE: the English for these entries has changed or gone. Reuse the wording above, then delete them. ----\n';
    stale.forEach(k => { s += '    ' + J(k) + ': ' + J(values[k]) + ',\n'; });
  }
  s += '  }\n});\n';
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, s);
}

const Q_FIELDS = ['stem', 'options', 'hints', 'solution', 'answer', 'markscheme', 'misconception', 'correctNote', 'unit'];
/* The translatable fields of a question, as {field: englishValue} (arrays and objects kept as such). */
function questionFields(q) {
  const o = {};
  Q_FIELDS.forEach(f => {
    const v = q[f];
    if (v == null) return;
    if (f === 'answer' && q.type !== 'short') return;                 // numeric / index answers are logic, never translated
    if (f === 'unit' && !/[A-Za-z]{4}/.test(String(v))) return;       // unit symbols stay as they are
    if (Array.isArray(v)) o[f] = v.slice();
    else if (typeof v === 'object') o[f] = Object.assign({}, v);
    else if (typeof v === 'string') o[f] = v;
  });
  return o;
}
/* Flat list of [path, english, translation] for one question */
function questionPairs(q, tr) {
  const out = [], en = questionFields(q);
  tr = tr || {};
  Object.keys(en).forEach(f => {
    if (Array.isArray(en[f])) en[f].forEach((v, i) => out.push([f + '[' + i + ']', v, (tr[f] && tr[f][i]) || '']));
    else if (typeof en[f] === 'object') Object.keys(en[f]).forEach(k => out.push([f + '.' + k, en[f][k], (tr[f] && tr[f][k]) || '']));
    else out.push([f, en[f], tr[f] || '']);
  });
  return out;
}
function writeQuestionsFile(file, lang, scope, questions, old) {
  let s = '/* ' + scope + ' — ' + lang + ' question translations for Structure Lab.\n' +
    '   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".\n' +
    '   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.\n' +
    '   Markscheme points and model answers are shown in English with your translation underneath.\n' +
    '   Rules, lints and workflow: docs/TRANSLATING.md. */\n';
  s += "S1.i18n.register('" + lang + "', '" + scope + "', {\n  questions: {\n\n";
  Object.keys(questions).forEach(id => {
    const q = questions[id], en = questionFields(q), prev = (old && old[id]) || {};
    s += '    // ── ' + id + ' · ' + q.type + ' · ' + q.tier + ' · ' + q.level.toUpperCase() + (q.syllabus ? ' · ' + q.syllabus : '') + ' · ' + q.marks + (q.marks === 1 ? ' mark' : ' marks') + '\n';
    s += '    ' + J(id) + ': {\n';
    Object.keys(en).forEach(f => {
      if (Array.isArray(en[f])) {
        s += '      ' + f + ': [\n';
        en[f].forEach((v, i) => { s += comment('        ', 'EN: ' + norm(v)) + '        ' + J((prev[f] && prev[f][i]) || '') + ',\n'; });
        s += '      ],\n';
      } else if (typeof en[f] === 'object') {
        s += '      ' + f + ': {\n';
        Object.keys(en[f]).forEach(k => { s += comment('        ', 'EN (option ' + 'ABCDEFGH'[k] + '): ' + norm(en[f][k])) + '        ' + J(k) + ': ' + J((prev[f] && prev[f][k]) || '') + ',\n'; });
        s += '      },\n';
      } else s += comment('      ', 'EN: ' + norm(en[f])) + '      ' + f + ': ' + J(prev[f] || '') + ',\n';
    });
    s += '    },\n\n';
  });
  s += '  }\n});\n';
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, s);
}

/* ---------- Catalog: what is translatable in one scope -------------------------- */
let uiCache = null;
async function catalog(browser, scope) {
  if (scope === 'ui') {
    if (uiCache) return uiCache;
    const keys = [];
    const add = (k, c) => { k = norm(k); if (!k) return; let e = keys.find(x => x.key === k); if (!e) { e = { key: k, ctx: [] }; keys.push(e); } if (c && !e.ctx.includes(c)) e.ctx.push(c); };
    SHELL_FILES.forEach(f => { const p = path.join(ROOT, f); if (fs.existsSync(p)) scanSource(fs.readFileSync(p, 'utf8'), 'shell').forEach(k => add(k, 'shell: ' + path.basename(f))); });
    const page = await browser.newPage();
    await page.goto('file://' + path.join(ROOT, 'index.html'));
    await page.waitForTimeout(150);
    const got = await page.evaluate(() => {
      const out = [];
      S1.groups.forEach(g => out.push([g.name, 'strand name'], [g.title, 'strand title']));
      S1.topics.forEach(t => out.push([t.title, 'topic ' + t.num + ' title (menus, tiles)'], [t.short, 'topic ' + t.num + ' short name (tile)'], [t.blurb, 'topic ' + t.num + ' tile text']));
      return out;
    });
    got.forEach(g => add(g[0], g[1]));
    await page.close();
    keys.sort((a, b) => a.key.localeCompare(b.key));
    uiCache = { entries: keys, questions: {}, counts: { blocks: 0, attrs: 0, widget: 0, shell: keys.length } };
    return uiCache;
  }
  const base = scope.replace(/\.q$/, '');
  const file = pageFile(base);
  if (!file || !fs.existsSync(path.join(ROOT, file))) throw new Error('No page for scope "' + scope + '"');
  const page = await browser.newPage();
  await page.goto('file://' + path.join(ROOT, file));
  await page.evaluate(() => { try { localStorage.removeItem('s1.lang'); } catch (e) {} });
  await page.reload();
  await page.waitForTimeout(300);
  const got = await page.evaluate((id) => {
    const c = S1.i18n.catalog();
    return { entries: c.entries, questions: JSON.parse(JSON.stringify(S1.questions.byTopic(id))) };
  }, base);
  await page.close();
  const entries = got.entries.map(e => ({ key: e.key, ctx: e.ctx, kind: e.kind }));
  let blocks = 0, attrs = 0, widget = 0;
  entries.forEach(e => { if (/attribute$/.test(e.kind)) attrs++; else blocks++; });
  const wf = base === 'dev' ? 'dev/widgets-dev.js' : 'assets/js/widgets-' + base + '.js';
  if (fs.existsSync(path.join(ROOT, wf))) scanSource(fs.readFileSync(path.join(ROOT, wf), 'utf8'), 'page').forEach(k => {
    const e = entries.find(x => x.key === k);
    if (e) { if (!e.ctx.includes('widget string (' + wf + ')')) e.ctx.push('widget string (' + wf + ')'); }
    else { entries.push({ key: k, ctx: ['widget string (' + wf + ')'], kind: 'widget string' }); widget++; }
  });
  const questions = {};
  got.questions.forEach(q => { questions[q.id] = q; });
  return { entries, questions, counts: { blocks, attrs, widget, shell: 0 } };
}

/* ---------- Lints: what a translation must keep ---------------------------------- */
const VOID = new Set(['br', 'hr', 'img', 'input', 'wbr']);
/* Tiny HTML reader: tags (multiset), contents of protected elements, hrefs, dfn inner HTML, plain text. */
function readHtml(html, opts) {
  const tags = [], prot = [], hrefs = [], dfns = [], enTerms = [], nums = [];
  let text = '', i = 0;
  const stack = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g;
  let m;
  // Numbers are read one text node at a time: a tag is a boundary, so "… = 18.</p><p><sup>40</sup>K" is 18 and 40,
  // never 18.40, and a full stop that ends a sentence is never part of a number.
  const pushText = s => { text += s; stack.forEach(f => { f.text += s; f.html += s; }); (decode(s).match(NUM) || []).forEach(n => nums.push(n)); };
  while ((m = re.exec(html))) {
    pushText(html.slice(i, m.index)); i = re.lastIndex;
    const name = m[2].toLowerCase(), attrs = m[3] || '';
    if (!m[1]) {
      const cls = (/class\s*=\s*"([^"]*)"/.exec(attrs) || /class\s*=\s*'([^']*)'/.exec(attrs) || [])[1] || '';
      // spans a translator may add: the English term beside a key term, and a no-break phrase
      const isEn = name === 'span' && /\ben-term\b/.test(cls), isFree = isEn || (name === 'span' && /^\s*nowrap\s*$/.test(cls));
      const href = (/href\s*=\s*"([^"]*)"/.exec(attrs) || [])[1];
      if (href != null) hrefs.push(href);
      const kind = /\bchem\b/.test(cls) ? 'chem' : /\bunit\b/.test(cls) ? 'unit' : /\bfrac\b/.test(cls) ? 'frac' : name === 'sub' ? 'sub' : name === 'sup' ? 'sup' : null;
      stack.forEach(f => { f.html += m[0]; });
      if (!isFree) tags.push(name + (kind === 'chem' || kind === 'unit' || kind === 'frac' ? '.' + kind : ''));
      if (!VOID.has(name) && !/\/\s*$/.test(attrs)) stack.push({ name, kind, isEn, text: '', html: '' });
    } else {
      let f = null;
      while (stack.length) { f = stack.pop(); if (f.name === name) break; f = null; }
      if (f) {
        stack.forEach(p => { p.html += m[0]; });
        if (f.kind && f.kind !== 'frac') prot.push(f.kind + ':' + norm(f.text));
        if (f.kind === 'frac' && !/[A-Za-zÀ-ɏ぀-鿿]{2}/.test(f.text.replace(/\s/g, ''))) prot.push('frac:' + norm(f.text));
        if (f.name === 'dfn') dfns.push(f.html);
        if (f.isEn) enTerms.push(norm(f.text));
      }
    }
  }
  pushText(html.slice(i));
  return { tags, prot, hrefs, dfns, enTerms, nums, text: text.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>') };
}
// Character references must not be read as numbers ("&#8722;5" is −5, not 8722 and 5).
function decode(s) {
  return s.replace(/&#x([0-9a-fA-F]+);/g, (m, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(+d))
    .replace(/&nbsp;/g, ' ').replace(/&[a-zA-Z]+\d*;/g, ' ');
}
// "sup:40" → <sup>40</sup>, "chem:H2O" → <span class="chem">H2O</span> (for messages)
function showProt(p) {
  const i = p.indexOf(':'), kind = p.slice(0, i), txt = p.slice(i + 1);
  return kind === 'sub' || kind === 'sup' ? '<' + kind + '>' + txt + '</' + kind + '>' : kind === 'frac' ? 'fraction "' + txt + '"' : '<span class="' + kind + '">' + txt + '</span>';
}
const multiset = a => { const m = {}; a.forEach(x => { m[x] = (m[x] || 0) + 1; }); return m; };
function diffMulti(a, b) {           // items of a that b lacks, and items b has too many of
  const A = multiset(a), B = multiset(b), missing = [], extra = [];
  Object.keys(A).forEach(k => { for (let n = (B[k] || 0); n < A[k]; n++) missing.push(k); });
  Object.keys(B).forEach(k => { for (let n = (A[k] || 0); n < B[k]; n++) extra.push(k); });
  return { missing, extra };
}
const NUM = /\d+(?:[.,]\d+)*/g;                  // a trailing "." or "," is never included
const OPS = /[=+−×÷\/<>≤≥≈→⇌±]|(?<![A-Za-z])-(?![A-Za-z])/g;
/**
 * lintPair(english, translation, {math, lang}) → array of problem strings (empty = fine)
 */
function lintPair(en, tr, opts) {
  opts = opts || {};
  const out = [];
  if (!tr) return out;
  const ph = diffMulti(en.match(/\{\w+\}/g) || [], tr.match(/\{\w+\}/g) || []);
  if (ph.missing.length) out.push('placeholder missing: ' + ph.missing.join(' '));
  if (ph.extra.length) out.push('placeholder not in the English: ' + ph.extra.join(' '));
  const a = readHtml(en), b = readHtml(tr);
  const tg = diffMulti(a.tags, b.tags);
  if (tg.missing.length) out.push('tag missing: ' + tg.missing.map(x => '<' + x + '>').join(' '));
  if (tg.extra.length) out.push('tag not in the English: ' + tg.extra.map(x => '<' + x + '>').join(' '));
  const pr = diffMulti(a.prot, b.prot);
  // Parity is strict: every formula, unit, <sub> and <sup> appears exactly as often as in the English.
  if (pr.missing.length || pr.extra.length) {
    const inEn = multiset(a.prot), inTr = multiset(b.prot);
    const gone = [...new Set(pr.missing)].map(x => showProt(x) + (inEn[x] > 1 || inTr[x] ? ' (English ' + inEn[x] + '×, translation ' + (inTr[x] || 0) + '×)' : ''));
    const repeated = [...new Set(pr.extra.filter(x => inEn[x]))].map(x => showProt(x) + ' (English ' + inEn[x] + '×, translation ' + inTr[x] + '×)');
    const added = [...new Set(pr.extra.filter(x => !inEn[x]))].map(showProt);
    if (gone.length) out.push('formula / unit / sub / sup missing or changed: ' + gone.join(' | ') + '. Copy each one from the English exactly, the same number of times');
    if (repeated.length) out.push('formula / unit / sub / sup used more often than in the English: ' + repeated.join(' | ') + '. It must appear the same number of times: reword the sentence so that it is not repeated');
    if (added.length) out.push('formula / unit / sub / sup not in the English: ' + added.join(' | ') + (gone.length ? ' (probably the changed form of the missing one above)' : '') + '. Do not add or alter them');
  }
  const hr = diffMulti(a.hrefs, b.hrefs);
  if (hr.missing.length || hr.extra.length) out.push('link target changed: ' + hr.missing.concat(hr.extra).join(' '));
  // exam-language policy: a key term keeps its English beside it
  a.dfns.forEach((d, i) => {
    const term = norm(d.replace(/<[^>]+>/g, '')).toLowerCase(), got = b.dfns[i];
    if (got == null) return;                             // tag parity already reported
    const en2 = readHtml(got).enTerms.map(x => x.toLowerCase().replace(/[()（）]/g, '').trim());
    if (!en2.some(x => x === term || x.indexOf(term) > -1)) out.push('<dfn> must keep the English term: <dfn>… <span class="en-term">(' + norm(d.replace(/<[^>]+>/g, '')) + ')</span></dfn>');
  });
  // numbers
  const btext = b.text.replace(new RegExp(b.enTerms.map(x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') || '$^', 'g'), ' ');
  if (/[０-９]/.test(b.text)) out.push('full-width digits: use 0-9');
  const nm = diffMulti(a.nums, b.nums);
  // "groups 1,2 and 13" may become "1、2": a comma-joined token is also satisfied by its parts
  nm.missing = nm.missing.filter(tok => {
    if (tok.indexOf(',') < 0) return true;
    const parts = tok.split(','), ex = nm.extra.slice();
    for (const p of parts) { const j = ex.indexOf(p); if (j < 0) return true; ex.splice(j, 1); }
    nm.extra = ex; return false;
  });
  if (nm.missing.length) out.push('number missing: ' + nm.missing.join(' ') + ' (numbers are compared text by text between tags; write them with the digits 0-9 exactly as in the English)');
  if (opts.math) {
    const oa = (a.text.match(OPS) || []).join(' '), ob = (btext.match(OPS) || []).join(' ');
    if (oa !== ob) out.push('maths operators changed: "' + oa + '" → "' + ob + '"');
    if (nm.extra.length) out.push('number not in the English: ' + nm.extra.join(' '));
  }
  return out;
}
/* Does this question field hold maths lines? (operator check applies to .worked__math lines only, so: no.) */

/* Similarity for "closest current key" (bigram Dice) */
function similarity(a, b) {
  const grams = s => { const g = {}; s = s.toLowerCase(); for (let i = 0; i < s.length - 1; i++) { const k = s.slice(i, i + 2); g[k] = (g[k] || 0) + 1; } return g; };
  const A = grams(a), B = grams(b); let inter = 0, na = 0, nb = 0;
  Object.keys(A).forEach(k => { na += A[k]; if (B[k]) inter += Math.min(A[k], B[k]); });
  Object.keys(B).forEach(k => { nb += B[k]; });
  return na + nb ? 2 * inter / (na + nb) : 0;
}
function closest(key, candidates) {
  let best = null, score = 0;
  candidates.forEach(c => { const s = similarity(key, c); if (s > score) { score = s; best = c; } });
  return score >= 0.55 ? { key: best, score } : null;
}

module.exports = { translatable, ROOT, LANGS, norm, pageFile, isTopic, scanSource, readOverlay, writeStringsFile, writeQuestionsFile, stringsBlock, comment,
  questionFields, questionPairs, catalog, lintPair, readHtml, closest, Q_FIELDS, J };
