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

/* String literals passed to t(...), or given as t:/tTitle:/tLabel: keys, or written as data-t attributes. */
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
const NOISE = /^(data-[\w-]+|is-[\w-]+|aria-[\w-]+|ahl|sl|all|en|ja|zh-Hant|[a-z]+__[\w-]+|[.#\[].*|[a-z0-9]+(-[a-z0-9]+)+)$/;
function scanSource(src) {
  const keys = new Set();
  const add = v => { v = norm(v); if (v && /[A-Za-z]{2}/.test(v) && !NOISE.test(v)) keys.add(v); };
  // Lines marked with a trailing "// i18n" comment hold keys that reach t() through a variable.
  src.split('\n').forEach(line => { if (/\/\/ i18n\s*$/.test(line)) literalsIn(line.replace(/\/\/ i18n\s*$/, '')).forEach(v => { if (/[A-Z]/.test(v) || / /.test(v)) add(v); }); });
  src = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  // t( ... ) calls: take the literals of the first argument (handles a ? 'x' : 'y')
  const call = /(?:^|[^\w.$])(?:S1\.t|w\.t|t)\(/g;
  let m;
  while ((m = call.exec(src))) {
    let i = call.lastIndex, depth = 1, inStr = null, start = i, end = -1;
    for (; i < src.length; i++) {
      const ch = src[i];
      if (inStr) { if (ch === '\\') i++; else if (ch === inStr) inStr = null; continue; }
      if (ch === "'" || ch === '"') { inStr = ch; continue; }
      if (ch === '(' || ch === '{' || ch === '[') depth++;
      else if (ch === ')' || ch === '}' || ch === ']') { depth--; if (depth === 0) { end = i; break; } }
      else if (ch === ',' && depth === 1) { end = i; break; }
    }
    if (end > start) literalsIn(src.slice(start, end)).forEach(add);
  }
  // t: 'x', tTitle: cond ? 'x' : 'y', tLabel: 'x'
  const prop = /\b(?:t|tTitle|tLabel):\s*([^\n]*?)(?=,\s*[\w'"]+\s*:|\s*\}\)|\s*\},|\n)/g;
  while ((m = prop.exec(src))) literalsIn(m[1]).forEach(add);
  // data-t="…" inside HTML strings (entities are decoded the way the browser will)
  const attr = /data-t(?:-aria|-title)?="([^"]*)"/g;
  while ((m = attr.exec(src))) add(m[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
  return [...keys].filter(k => !/^' \+|\+ '$/.test(k));
}

/* Read an overlay file without a browser. */
function readOverlay(file) {
  if (!fs.existsSync(file)) return null;
  const got = { strings: {}, questions: {} };
  const S1 = { i18n: { register: (l, s, d) => { Object.assign(got.strings, (d && d.strings) || {}); Object.assign(got.questions, (d && d.questions) || {}); }, manifest: () => {} } };
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), { S1, window: { S1 } }, { filename: file });
  return got;
}

function writeOverlay(file, lang, scope, data) {
  const head = '/* ' + scope + ' — ' + lang + ' translation overlay for Structure Lab.\n' +
    '   Keys are the English source text. Fill in the values; leave "" for "not translated yet" (English is shown).\n' +
    '   Do not edit keys. See docs/TRANSLATING.md. */\n';
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, head + "S1.i18n.register('" + lang + "', '" + scope + "', " + JSON.stringify(data, null, 2) + ');\n');
}

const Q_FIELDS = ['stem', 'options', 'hints', 'solution', 'answer', 'markscheme', 'misconception', 'correctNote', 'unit'];
function questionSkeleton(q) {
  const o = {};
  Q_FIELDS.forEach(f => {
    const v = q[f];
    if (v == null) return;
    if (f === 'answer' && q.type !== 'short') return;                 // numeric / index answers are logic, never translated
    if (f === 'unit' && !/[A-Za-z]{4}/.test(String(v))) return;       // unit symbols stay as they are
    if (Array.isArray(v)) o[f] = v.map(() => '');
    else if (typeof v === 'object') { o[f] = {}; Object.keys(v).forEach(k => { o[f][k] = ''; }); }
    else if (typeof v === 'string') o[f] = '';
  });
  return o;
}

/* Catalog of one scope: {strings: [keys], questions: {id: {english fields}}} */
async function catalog(browser, scope) {
  if (scope === 'ui') {
    const keys = new Set();
    SHELL_FILES.forEach(f => { const p = path.join(ROOT, f); if (fs.existsSync(p)) scanSource(fs.readFileSync(p, 'utf8')).forEach(k => keys.add(k)); });
    // Registry strings and anything the shell asks for while a page starts up.
    const page = await browser.newPage();
    for (const id of ['home', 'practice', 'dev']) {
      await page.goto('file://' + path.join(ROOT, pageFile(id)));
      await page.waitForTimeout(150);
      const got = await page.evaluate(() => {
        const out = [];
        S1.groups.forEach(g => out.push(g.name, g.title));
        S1.topics.forEach(t => out.push(t.title, t.short, t.blurb));
        return out;
      });
      got.forEach(k => keys.add(norm(k)));
    }
    await page.close();
    return { strings: [...keys].sort((a, b) => a.localeCompare(b)), questions: {} };
  }
  const file = pageFile(scope);
  if (!file || !fs.existsSync(path.join(ROOT, file))) throw new Error('No page for scope "' + scope + '"');
  const ui = new Set((await catalog(browser, 'ui')).strings);
  const page = await browser.newPage();
  await page.addInitScript(() => { try { localStorage.removeItem('s1.lang'); } catch (e) {} });
  await page.goto('file://' + path.join(ROOT, file));
  await page.waitForTimeout(300);
  const got = await page.evaluate((id) => {
    const c = S1.i18n.catalog();
    const qs = S1.questions.byTopic(id === 'dev' ? 'dev' : id);
    return { title: c.title, blocks: c.blocks, attrs: c.attrs, questions: JSON.parse(JSON.stringify(qs)) };
  }, scope);
  await page.close();
  const keys = [];
  const add = k => { k = norm(k); if (k && !ui.has(k) && !keys.includes(k)) keys.push(k); };
  add(got.title); got.blocks.forEach(add); got.attrs.forEach(add);
  const wf = scope === 'dev' ? 'dev/widgets-dev.js' : 'assets/js/widgets-' + scope + '.js';
  if (fs.existsSync(path.join(ROOT, wf))) scanSource(fs.readFileSync(path.join(ROOT, wf), 'utf8')).forEach(add);
  const questions = {};
  got.questions.forEach(q => { questions[q.id] = q; });
  return { strings: keys, questions };
}

module.exports = { ROOT, LANGS, norm, pageFile, scanSource, readOverlay, writeOverlay, questionSkeleton, catalog, Q_FIELDS };
