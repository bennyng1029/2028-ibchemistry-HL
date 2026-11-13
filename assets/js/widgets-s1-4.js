/* ==========================================================================
   Widgets for topic 1.4 — Counting particles by mass: the mole.
   s1-4.units        unit-conversion strip (cm3/dm3/m3, mg/g/kg)
   s1-4.scale        how big is a mole? + particles in a sample
   s1-4.molarmass    molar mass builder (formula -> breakdown table)
   s1-4.molemap      the mole map (interactive roadmap with line-by-line working)
   s1-4.empirical    empirical formula solver (table method + combustion analysis)
   s1-4.solution     solution lab (standard solution and dilution)
   s1-4.calibration  reading a calibration curve
   s1-4.gasratio     Avogadro's law: reacting gas volumes
   All values use S1.chem constants and Ar values (data booklet, 2 d.p.).
   Every user-visible English string goes through t("…", {vars}) so the site
   can be translated. Formulas, numbers and units are passed as placeholders.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el, esc = S1.util.escapeHtml;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var NA = chem.constants.NA, VM = chem.constants.Vm_STP;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var NA_HTML = '6.02 × 10<sup>23</sup>';
  var U = {
    gmol: 'g mol<sup>−1</sup>', moldm: 'mol dm<sup>−3</sup>', gdm: 'g dm<sup>−3</sup>',
    cm3: 'cm<sup>3</sup>', dm3: 'dm<sup>3</sup>', m3: 'm<sup>3</sup>', permol: 'mol<sup>−1</sup>'
  };

  /* ---------- shared helpers -------------------------------------------- */
  function num(str) { var p = chem.parseNumber(str); return p ? p.value : NaN; }
  function sfOf(str, lo, hi) { var p = chem.parseNumber(str); return p ? S1.util.clamp(p.sfMax, lo || 2, hi || 4) : 3; }
  function F(x, n) { return chem.fmt(x, n || 3); }
  /** Intermediate value: exact if it is short, otherwise 5 s.f. followed by an ellipsis. */
  function mid(x) {
    if (x === 0) return '0';
    for (var n = 1; n <= 4; n++) if (Math.abs(chem.roundSig(x, n) - x) <= Math.abs(x) * 1e-10) return F(x, Math.max(n, 2));
    return F(x, 5) + '…';
  }
  /** Fill a box with lines of working (strings) and notes ({note: html}). */
  function lines(box, arr) {
    box.innerHTML = '';
    arr.forEach(function (l) {
      if (l == null) return;
      if (typeof l === 'object') box.appendChild(el('p', { class: 'mole-note', html: l.note }));
      else box.appendChild(el('div', { class: 'worked__math', html: l }));
    });
  }
  /** Labelled text box that lives in a widget's controls area. */
  function field(parent, o) {
    var id = S1.util.uid('fld');
    var input = el('input', { class: 'input mole-input mole-input--mono', type: 'text', id: id, value: o.value == null ? '' : o.value,
      autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', inputmode: o.inputmode || null });
    if (o.width) input.style.width = o.width;
    var wrap = el('div', { class: 'control mole-field' }, [el('label', { class: 'control__label', for: id, html: o.label }), input]);
    if (o.onInput) input.addEventListener('input', function () { o.onInput(input.value); });
    parent.appendChild(wrap);
    return { el: wrap, input: input, get value() { return input.value; }, set: function (v) { input.value = v; }, setLabel: function (h) { wrap.firstChild.innerHTML = h; } };
  }
  function subDigits(f) { return String(f).replace(/\d/g, function (c) { return '₀₁₂₃₄₅₆₇₈₉'[c]; }); }
  function sv(tag, attrs, text) {
    var n = document.createElementNS(SVGNS, tag), k;
    for (k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- formula parser --------------------------------------------- */
  var SUBS = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
  /**
   * 'CuSO4.5H2O' -> { ok, text, html, counts: [{sym, n, ar}], M, working } or { ok: false, error }.
   * Handles brackets and hydrates. Uses the Ar values in S1.chem.elements; elements without one are rejected.
   */
  function parseFormula(raw) {
    var s = String(raw == null ? '' : raw).replace(/[₀-₉]/g, function (c) { return SUBS[c]; })
      .replace(/\((?:s|l|g|aq)\)\s*$/, '').replace(/[·•∙⋅*]/g, '.').replace(/\s+/g, '').replace(/\^?\d*[+−-]$/, '');
    if (!s) return { ok: false, error: t('Type a formula, for example H2O or Ca(OH)2.') };
    if (!/[A-Z]/.test(s)) return { ok: false, error: t('Use capital letters for element symbols: write H2O, not h2o.') };
    var order = [], map = {}, err = null;
    function add(sym, n) { if (!(sym in map)) { map[sym] = 0; order.push(sym); } map[sym] += n; }
    function group(g, mult) {
      var i = 0;
      function count() { var m = /^\d+/.exec(g.slice(i)); if (!m) return 1; i += m[0].length; return parseInt(m[0], 10); }
      function walk(depth) {
        var items = [];
        while (i < g.length && !err) {
          var ch = g[i];
          if (ch === '(' || ch === '[') {
            i++; var inner = walk(depth + 1); if (err) return items;
            var k = count(); inner.forEach(function (it) { items.push({ sym: it.sym, n: it.n * k }); });
          } else if (ch === ')' || ch === ']') {
            if (!depth) { err = t('There is a closing bracket with no opening bracket.'); return items; }
            i++; return items;
          } else {
            var m = /^[A-Z][a-z]?/.exec(g.slice(i));
            if (!m) {
              err = /[a-z]/.test(ch) ? t('Check the capital letters near “{ch}”. Each symbol starts with one capital letter.', { ch: esc(ch) })
                : t('I cannot read “{ch}” in a formula.', { ch: esc(ch) });
              return items;
            }
            var e = chem.element(m[0]);
            if (!e || e.ar == null) { err = t('“{sym}” is not an element symbol with a relative atomic mass in this tool. Check the spelling and the capital letters.', { sym: esc(m[0]) }); return items; }
            i += m[0].length;
            items.push({ sym: e.symbol, n: count() });
          }
        }
        if (depth && !err) err = t('A bracket is not closed.');
        return items;
      }
      walk(0).forEach(function (it) { add(it.sym, it.n * mult); });
    }
    var parts = s.split('.');
    for (var p = 0; p < parts.length && !err; p++) {
      var m = /^(\d+)?(.*)$/.exec(parts[p]);
      if (!m[2]) { err = t('Something is missing after the dot.'); break; }
      group(m[2], m[1] ? parseInt(m[1], 10) : 1);
    }
    if (err) return { ok: false, error: err };
    if (!order.length) return { ok: false, error: t('Type a formula, for example H2O or Ca(OH)2.') };
    var cents = 0, atoms = 0;
    var counts = order.map(function (sym) {
      var e = chem.element(sym); cents += map[sym] * Math.round(e.ar * 100); atoms += map[sym];
      return { sym: sym, name: e.name, n: map[sym], ar: e.ar, sub: Math.round(map[sym] * Math.round(e.ar * 100)) / 100 };
    });
    var M = cents / 100, html = chem.formula(s);
    var working = '<i>M</i>(' + html + ') = ' + counts.map(function (c) { return c.n === 1 ? c.ar.toFixed(2) : c.n + '(' + c.ar.toFixed(2) + ')'; }).join(' + ') +
      (counts.length === 1 && counts[0].n === 1 ? '' : ' = ' + M.toFixed(2)) + ' ' + U.gmol;
    return { ok: true, text: s, html: html, counts: counts, M: M, atoms: atoms, working: working };
  }
  S1.s14 = { parseFormula: parseFormula };   // exposed for the page's test script

  /* =======================================================================
     1. Unit-conversion strip
     ======================================================================= */
  S1.widgets.register('s1-4.units', function (w) {
    var SETS = {
      volume: { units: ['cm3', 'dm3', 'm3'], html: [U.cm3, U.dm3, U.m3], start: '25.0',
        note: t('Solution volumes are usually given in cm<sup>3</sup>. <i>n</i> = <i>CV</i> needs dm<sup>3</sup>. The gas equation in topic 1.5 needs m<sup>3</sup>. Going to a bigger unit makes the number smaller, so you divide.') },
      mass: { units: ['mg', 'g', 'kg'], html: ['mg', 'g', 'kg'], start: '250',
        note: t('<i>n</i> = <i>m</i> ÷ <i>M</i> needs the mass in g, because <i>M</i> is in g mol<sup>−1</sup>. Going to a bigger unit makes the number smaller, so you divide.') }
    };
    var kind = w.select({ label: t('Quantity'), options: [{ value: 'volume', label: t('Volume') }, { value: 'mass', label: t('Mass') }], value: 'volume', onChange: function () { val.set(SETS[kind.value].start); fillUnits(); update(); } });
    var val = field(w.controls, { label: t('Value'), value: '25.0', width: '8rem', inputmode: 'decimal', onInput: update });
    var unit = w.select({ label: t('Unit'), options: ['cm3', 'dm3', 'm3'], value: 'cm3', onChange: update });
    var unitSel = unit.el.querySelector('select');
    var strip = el('div', { class: 'mole-strip' }); w.stage.appendChild(strip);
    var work = el('div', { class: 'mole-work' }); w.stage.appendChild(work);
    function fillUnits() {
      var set = SETS[kind.value]; unitSel.innerHTML = '';
      set.units.forEach(function (u) { unitSel.appendChild(el('option', { value: u, text: u.replace('3', '³') })); });
      unitSel.value = set.units[0];
    }
    function update() {
      var set = SETS[kind.value], x = num(val.value), from = set.units.indexOf(unitSel.value), sf = sfOf(val.value, 1, 6);
      strip.innerHTML = '';
      if (!isFinite(x) || x < 0) { lines(work, [{ note: t('Type a number, for example 25.0.') }]); return; }
      var vals = set.units.map(function (u, i) { return x * Math.pow(1000, from - i); });
      set.units.forEach(function (u, i) {
        if (i) strip.appendChild(el('div', { class: 'mole-strip__op', html: '<span>÷ 1000 →</span><span>← × 1000</span>' }));
        strip.appendChild(el('div', { class: 'mole-strip__cell' + (i === from ? ' is-on' : '') }, [
          el('span', { class: 'mole-strip__val', html: F(vals[i], sf) }), el('span', { class: 'mole-strip__unit', html: set.html[i] })
        ]));
      });
      var out = [];
      set.units.forEach(function (u, i) {
        if (i === from) return;
        var steps = Math.abs(i - from), op = i > from ? '÷' : '×';
        out.push(esc(val.value.trim()) + ' ' + set.html[from] + ' ' + op + ' 1000' + (steps === 2 ? ' ' + op + ' 1000' : '') + ' = <b>' + F(vals[i], sf) + ' ' + set.html[i] + '</b>');
      });
      out.push({ note: set.note });
      lines(work, out);
    }
    fillUnits(); update();
  });

  /* =======================================================================
     2. How big is a mole?  (log scale + particles in a sample)
     ======================================================================= */
  S1.widgets.register('s1-4.scale', function (w) {
    var SUBST = [
      { f: 'H2O', name: t('water'), kind: 'molecule', per: 3 },
      { f: 'CO2', name: t('carbon dioxide'), kind: 'molecule', per: 3 },
      { f: 'C6H12O6', name: t('glucose'), kind: 'molecule', per: 24 },
      { f: 'Cu', name: t('copper'), kind: 'atom', per: 1 },
      { f: 'Fe', name: t('iron'), kind: 'atom', per: 1 },
      { f: 'NaCl', name: t('sodium chloride'), kind: 'ionic', per: 2 }
    ];
    var YEAR = 365.25 * 24 * 3600, UNIVERSE_YR = 13.8e9, PEOPLE = 8e9;
    var sub = w.select({ label: t('Substance'), options: SUBST.map(function (s, i) { return { value: i, label: t('{name} ({formula})', { name: s.name, formula: subDigits(s.f) }) }; }), value: 0, onChange: update });
    var mass = w.slider({ label: t('Mass of sample'), min: 0.1, max: 100, step: 0.1, value: 18, unit: 'g', onInput: update });
    var svg = w.svg('0 0 380 184', { label: t('Number line on a powers-of-ten scale from 1 to 10 to the power 24, marking the number of people on Earth, the number of seconds since the Big Bang, one mole, and the number of particles in your sample') });
    svg.classList.add('mole-svg');
    var facts = el('ul', { class: 'mole-facts' }); w.stage.appendChild(facts);
    var setM = w.readoutItem(t('Molar mass')), setN = w.readoutItem(t('Amount')), setP = w.readoutItem(t('Particles')), setA = w.readoutItem(t('Inside them'));
    var X0 = 22, X1 = 362, Y = 96;
    function X(v) { return X0 + (Math.log(v) / Math.LN10) / 24 * (X1 - X0); }
    function draw(N, s) {
      svg.innerHTML = '';
      svg.appendChild(sv('line', { x1: X0, y1: Y, x2: X1, y2: Y, stroke: 'var(--ink)', 'stroke-width': 1.5 }));
      for (var p = 0; p <= 24; p++) {
        var x = X0 + p / 24 * (X1 - X0), big = p % 3 === 0;
        svg.appendChild(sv('line', { x1: x, y1: Y - (big ? 6 : 3), x2: x, y2: Y + (big ? 6 : 3), stroke: 'var(--line-strong)', 'stroke-width': 1 }));
        if (big) {
          var tick = sv('text', { x: x, y: Y + 20, 'text-anchor': 'middle', class: 'mole-svg__tick' });
          if (p === 0) tick.textContent = '1'; else { tick.textContent = '10'; tick.appendChild(sv('tspan', { dy: -5, 'font-size': 8 }, String(p))); }
          svg.appendChild(tick);
        }
      }
      function mark(v, label1, label2, yTop, anchor, strong) {
        var x = X(v);
        svg.appendChild(sv('line', { x1: x, y1: yTop + 6, x2: x, y2: Y, stroke: strong ? 'var(--accent)' : 'var(--ink-2)', 'stroke-width': strong ? 2.5 : 1.2, 'stroke-dasharray': strong ? null : '3 3' }));
        svg.appendChild(sv('circle', { cx: x, cy: Y, r: strong ? 5 : 3.5, fill: strong ? 'var(--accent)' : 'var(--ink-2)' }));
        svg.appendChild(sv('text', { x: x, y: yTop - 12, 'text-anchor': anchor, class: 'mole-svg__label' + (strong ? ' mole-svg__label--strong' : '') }, label1));
        svg.appendChild(sv('text', { x: x, y: yTop, 'text-anchor': anchor, class: 'mole-svg__small' }, label2));
      }
      mark(PEOPLE, t('people on Earth'), t('about {n}', { n: '8 × 10⁹' }), 62, 'middle');
      mark(UNIVERSE_YR * YEAR, t('seconds since the Big Bang'), t('about {n}', { n: '4 × 10¹⁷' }), 32, 'middle');
      mark(NA, t('one mole'), '6.02 × 10²³', 62, 'end', true);
      // the sample, below the axis
      var xs = X(N);
      svg.appendChild(sv('path', { d: 'M' + xs + ' ' + (Y + 26) + ' l-6 12 h12 z', fill: 'var(--ink)' }));
      svg.appendChild(sv('line', { x1: xs, y1: Y + 38, x2: xs, y2: Y + 50, stroke: 'var(--ink)', 'stroke-width': 1.5 }));
      svg.appendChild(sv('text', { x: Math.min(Math.max(xs, 110), 270), y: Y + 64, 'text-anchor': 'middle', class: 'mole-svg__label' },
        s.kind === 'molecule' ? t('your sample: number of molecules') : s.kind === 'atom' ? t('your sample: number of atoms') : t('your sample: number of formula units')));
      svg.appendChild(sv('text', { x: X0, y: Y + 83, class: 'mole-svg__small' }, t('Each big tick is 1000 times the one before.')));
    }
    function update() {
      var s = SUBST[Number(sub.value)], pf = parseFormula(s.f), m = mass.value, n = m / pf.M, N = n * NA;
      setM(pf.M.toFixed(2) + ' ' + U.gmol);
      setN(F(n, 3) + ' mol');
      var Nh = chem.sci(N, 3), inside = chem.sci(N * s.per, 3);
      setP(s.kind === 'molecule' ? t('{N} molecules', { N: Nh }) : s.kind === 'atom' ? t('{N} atoms', { N: Nh }) : t('{N} formula units', { N: Nh }));
      setA(s.kind === 'atom' ? t('each particle is one atom') : s.kind === 'ionic' ? t('{per} ions each: {N} ions', { per: s.per, N: inside }) : t('{per} atoms each: {N} atoms', { per: s.per, N: inside }));
      draw(N, s);
      var yrs = NA / YEAR;
      facts.innerHTML = '';
      [
        t('Counting one particle every second, one mole would take about {years} years. That is over a million times the age of the universe (about {age} years).', { years: chem.sci(yrs, 2), age: '1.4 × 10<sup>10</sup>' }),
        t('If all 8 billion people counted together at that speed, it would still take about {n} million years.', { n: F(yrs / PEOPLE / 1e6, 2) }),
        t('Yet one mole of water molecules is only {m} g of water: about {v} cm<sup>3</sup>, a little more than a tablespoon.', { m: '18.02', v: '18' })
      ].forEach(function (h) { facts.appendChild(el('li', { html: h })); });
    }
    update();
  });

  /* =======================================================================
     3. Molar mass builder
     ======================================================================= */
  S1.widgets.register('s1-4.molarmass', function (w) {
    var f = field(w.controls, { label: t('Formula'), value: w.options.start || 'Ca(OH)2', width: '13rem', onInput: update });
    w.select({ label: t('Or load an example'), options: ['Ca(OH)2', 'H2O', 'CO2', 'C6H12O6', 'Al2(SO4)3', 'CuSO4.5H2O', '(NH4)2SO4', 'Fe2O3'].map(function (x) { return { value: x, label: subDigits(x).replace('.₅', '·5') }; }), value: 'Ca(OH)2', onChange: function (v) { f.set(v); update(); } });
    var pad = el('div', { class: 'mole-pad', role: 'group', 'aria-label': t('Build the formula with buttons') });
    var KEY_LABEL = { '·': t('dot for water of crystallization'), '(': t('open bracket'), ')': t('close bracket') };
    ['H', 'C', 'N', 'O', 'Na', 'Mg', 'Al', 'S', 'Cl', 'K', 'Ca', 'Fe', 'Cu', '2', '3', '4', '5', '6', '(', ')', '·'].forEach(function (k) {
      pad.appendChild(el('button', { class: 'btn btn--small mole-pad__key', type: 'button', text: k, 'aria-label': KEY_LABEL[k] || k, onclick: function () { f.set(f.value + (k === '·' ? '.' : k)); update(); } }));
    });
    pad.appendChild(el('button', { class: 'btn btn--small mole-pad__key', type: 'button', text: t('Delete'), onclick: function () { f.set(f.value.slice(0, -1)); update(); } }));
    pad.appendChild(el('button', { class: 'btn btn--small mole-pad__key', type: 'button', text: t('Clear'), onclick: function () { f.set(''); update(); } }));
    w.stage.appendChild(pad);
    var big = el('p', { class: 'mole-formula' }); w.stage.appendChild(big);
    var tableBox = el('div', { class: 'table-scroll' }); w.stage.appendChild(tableBox);
    var work = el('div', { class: 'mole-work' }); w.stage.appendChild(work);
    var setMr = w.readoutItem(t('Relative formula mass')), setM = w.readoutItem(t('Molar mass')), setAt = w.readoutItem(t('Atoms in one formula unit'));
    function update() {
      var p = parseFormula(f.value);
      if (!p.ok) {
        big.innerHTML = '<span class="mole-formula__empty">' + (f.value ? esc(f.value) : '…') + '</span>';
        tableBox.innerHTML = ''; lines(work, [{ note: p.error }]);
        setMr('—'); setM('—'); setAt('—'); return;
      }
      big.innerHTML = p.html;
      var rows = p.counts.map(function (c) {
        return '<tr><th scope="row">' + c.sym + ' <span class="muted">' + t(c.name) + '</span></th><td class="num">' + c.n + '</td><td class="num">' + c.ar.toFixed(2) + '</td><td class="num">' + c.n + ' × ' + c.ar.toFixed(2) + ' = ' + c.sub.toFixed(2) + '</td></tr>';
      }).join('');
      tableBox.innerHTML = '<table class="data"><caption>' + t('Breakdown of {formula}', { formula: p.html }) + '</caption><thead><tr><th scope="col">' + t('Element') + '</th><th scope="col" class="num">' + t('Atoms') +
        '</th><th scope="col" class="num"><i>A</i><sub>r</sub></th><th scope="col" class="num">' + t('Subtotal') + '</th></tr></thead><tbody>' + rows +
        '<tr><th scope="row">' + t('Total') + '</th><td class="num">' + p.atoms + '</td><td class="num"></td><td class="num"><b>' + p.M.toFixed(2) + '</b></td></tr></tbody></table>';
      lines(work, [p.working]);
      setMr(t('{value} <span class="mole-unitnote">(no units)</span>', { value: p.M.toFixed(2) }));
      setM(p.M.toFixed(2) + ' ' + U.gmol);
      setAt(String(p.atoms));
    }
    update();
  });

  /* =======================================================================
     4. The mole map
     ======================================================================= */
  S1.widgets.register('s1-4.molemap', function (w) {
    var Q = {
      mass: { label: t('Mass (g)'), inLabel: t('Mass / g'), start: '4.50' },
      amount: { label: t('Amount (mol)'), inLabel: t('Amount / mol'), start: '0.250' },
      particles: { label: t('Number of particles'), inLabel: t('Number of particles'), start: '1.50e22' },
      solution: { label: t('Solution: concentration and volume'), inLabel: t('Concentration / mol dm<sup>−3</sup>'), start: '0.100' },
      gas: { label: t('Gas volume at STP (dm³)'), inLabel: t('Gas volume at STP / dm<sup>3</sup>'), start: '2.27' }
    };
    var TO = [{ value: 'mass', label: t('Mass (g)') }, { value: 'amount', label: t('Amount (mol)') }, { value: 'particles', label: t('Number of particles') }, { value: 'solution', label: t('Concentration (mol dm⁻³)') }, { value: 'gas', label: t('Gas volume at STP (dm³)') }];
    var from = w.select({ label: t('I am given'), options: Object.keys(Q).map(function (k) { return { value: k, label: Q[k].label }; }), value: w.options.from || 'mass', onChange: function (v) { val.set(Q[v].start); update(); } });
    var to = w.select({ label: t('I want'), options: TO, value: w.options.to || 'particles', onChange: update });
    var val = field(w.controls, { label: t('Mass / g'), value: '4.50', width: '8.5rem', onInput: update });
    var vFrom = field(w.controls, { label: t('Volume of solution / cm<sup>3</sup>'), value: '25.0', width: '8.5rem', inputmode: 'decimal', onInput: update });
    var vTo = field(w.controls, { label: t('Volume of solution made / cm<sup>3</sup>'), value: '250.0', width: '8.5rem', inputmode: 'decimal', onInput: update });
    var form = field(w.controls, { label: t('Substance (formula)'), value: w.options.formula || 'H2O', width: '10rem', onInput: update });

    var svg = w.svg('0 -14 380 432', { label: t('The mole map: amount in moles in the centre, linked to mass, number of particles, solution concentration and volume, and gas volume at STP') });
    svg.classList.add('mole-svg', 'mole-svg--map');
    var NODES = {
      mass: { x: 8, y: 10, title: t('Mass, m'), u: 'g' },
      particles: { x: 248, y: 10, title: t('Particles, N'), u: t('a number') },
      amount: { x: 128, y: 171, title: t('Amount, n'), u: 'mol' },
      solution: { x: 8, y: 332, title: t('Solution, C and V'), u: 'mol dm⁻³, dm³' },
      gas: { x: 248, y: 332, title: t('Gas volume, V'), u: t('dm³, at STP only') }
    };
    // "ᴀ" marks where the subscript A of the Avogadro constant goes.
    var EDGES = {
      mass: { x1: 95, y1: 68, x2: 150, y2: 171, lx: 108, anchor: 'end', ly: 112, toN: 'g → mol:  ÷ M', fromN: 'mol → g:  × M' },
      particles: { x1: 285, y1: 68, x2: 230, y2: 171, lx: 272, anchor: 'start', ly: 112, toN: 'N → mol:  ÷ Nᴀ', fromN: 'mol → N:  × Nᴀ' },
      solution: { x1: 95, y1: 332, x2: 150, y2: 229, lx: 108, anchor: 'end', ly: 276, toN: t('to mol:  C × V'), fromN: t('to C:  n ÷ V') },
      gas: { x1: 285, y1: 332, x2: 230, y2: 229, lx: 272, anchor: 'start', ly: 276, toN: t('to mol:  ÷ 22.7'), fromN: t('to dm³:  × 22.7') }
    };
    var parts = { node: {}, edge: {} };
    function opText(e, str, dy) {
      var node = sv('text', { x: e.lx, y: e.ly + dy, 'text-anchor': e.anchor, class: 'mole-map__op' });
      var bits = str.split('ᴀ');
      node.appendChild(document.createTextNode(bits[0]));
      if (bits.length > 1) node.appendChild(sv('tspan', { dy: 3, 'font-size': 8 }, 'A'));
      return node;
    }
    Object.keys(EDGES).forEach(function (k) {
      var e = EDGES[k];
      var line = sv('line', { x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2, class: 'mole-map__edge' });
      var a = opText(e, e.toN, 0), b = opText(e, e.fromN, 18);
      svg.appendChild(line); svg.appendChild(a); svg.appendChild(b);
      parts.edge[k] = { line: line, toN: a, fromN: b };
    });
    Object.keys(NODES).forEach(function (k) {
      var n = NODES[k], g = sv('g', { class: 'mole-map__node' });
      g.appendChild(sv('rect', { x: n.x, y: n.y, width: 124, height: 58 }));
      g.appendChild(sv('text', { x: n.x + 62, y: n.y + 25, 'text-anchor': 'middle', class: 'mole-map__title' }, n.title));
      g.appendChild(sv('text', { x: n.x + 62, y: n.y + 44, 'text-anchor': 'middle', class: 'mole-map__unit' }, n.u));
      var tag = sv('text', { x: n.x + 62, y: n.y + (n.y > 100 ? 73 : -5), 'text-anchor': 'middle', class: 'mole-map__tag' }, '');
      g.appendChild(tag);
      svg.appendChild(g);
      parts.node[k] = { g: g, tag: tag };
    });

    var work = el('div', { class: 'mole-work' }); w.stage.appendChild(work);
    var setPath = w.readoutItem(t('Path'), { text: true }), setAns = w.readoutItem(t('Answer'));
    var NAME = { mass: t('mass'), amount: t('amount'), particles: t('number of particles'), solution: t('solution'), gas: t('gas volume') };
    var TAG = { given: t('GIVEN'), wanted: t('WANTED'), via: t('via moles') };

    function paint(a, b, ok) {
      Object.keys(parts.node).forEach(function (k) {
        var on = ok && (k === a || k === b || k === 'amount');
        parts.node[k].g.setAttribute('class', 'mole-map__node' + (on ? ' is-on' : ''));
        parts.node[k].tag.textContent = !ok ? '' : k === a ? TAG.given : k === b ? TAG.wanted : (k === 'amount' ? TAG.via : '');
      });
      Object.keys(parts.edge).forEach(function (k) {
        var e = parts.edge[k], inUse = ok && k === a, outUse = ok && k === b;
        e.line.setAttribute('class', 'mole-map__edge' + (inUse || outUse ? ' is-on' : ''));
        e.toN.setAttribute('class', 'mole-map__op' + (inUse ? ' is-on' : ''));
        e.fromN.setAttribute('class', 'mole-map__op' + (outUse ? ' is-on' : ''));
      });
    }

    function update() {
      var a = from.value, b = to.value;
      val.setLabel(Q[a].inLabel);
      vFrom.el.hidden = a !== 'solution';
      vTo.el.hidden = b !== 'solution' || a === 'solution';
      var needM = a === 'mass' || b === 'mass';
      var out = [], x = num(val.value), p = parseFormula(form.value), sf = sfOf(val.value, 2, 4);
      function fail(msg) { paint(a, b, false); lines(work, [{ note: msg }]); setPath('—'); setAns('—'); }
      if (a === b) return fail(a === 'solution' ? t('A solution to a concentration is one step: <i>C</i> = <i>n</i> ÷ <i>V</i>. Pick a different quantity to convert to.') : t('Pick two different quantities.'));
      if (!isFinite(x) || x <= 0) return fail(t('Type a positive number for the quantity you are given. You can write 1.5e22 or 1.5 × 10^22.'));
      if (needM && !p.ok) return fail(t('{error} The molar mass is needed whenever mass is involved.', { error: p.error }));
      var shown = esc(val.value.trim()).replace(/\s*(?:[xX×*]\s*10\^?|[eE])\s*([+-]?)(\d+)$/, function (m, s, d) { return ' × 10<sup>' + (s === '-' ? '−' : '') + d + '</sup>'; });
      var n;
      // step 1: to moles
      if (a === 'mass') {
        out.push(p.working);
        n = x / p.M;
        out.push('<i>n</i> = <i>m</i> ÷ <i>M</i> = ' + shown + ' g ÷ ' + p.M.toFixed(2) + ' ' + U.gmol + ' = ' + (b === 'amount' ? '' : mid(n) + ' mol'));
      } else if (a === 'particles') {
        n = x / NA;
        out.push('<i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub> = ' + shown + ' ÷ ' + NA_HTML + ' ' + U.permol + ' = ' + (b === 'amount' ? '' : mid(n) + ' mol'));
      } else if (a === 'solution') {
        var v1 = num(vFrom.value);
        if (!isFinite(v1) || v1 <= 0) return fail(t('Type the volume of the solution in cm<sup>3</sup>.'));
        out.push('<i>V</i> = ' + esc(vFrom.value.trim()) + ' ' + U.cm3 + ' ÷ 1000 = ' + mid(v1 / 1000) + ' ' + U.dm3);
        n = x * v1 / 1000;
        out.push('<i>n</i> = <i>C</i> × <i>V</i> = ' + shown + ' ' + U.moldm + ' × ' + mid(v1 / 1000) + ' ' + U.dm3 + ' = ' + (b === 'amount' ? '' : mid(n) + ' mol'));
      } else if (a === 'gas') {
        n = x / VM;
        out.push('<i>n</i> = <i>V</i> ÷ 22.7 ' + U.dm3 + ' ' + U.permol + ' = ' + shown + ' ' + U.dm3 + ' ÷ 22.7 ' + U.dm3 + ' ' + U.permol + ' = ' + (b === 'amount' ? '' : mid(n) + ' mol'));
      } else { n = x; out.push('<i>n</i> = ' + shown + ' mol'); }
      // step 2: from moles
      var ans, tail = ' <span class="mole-unitnote">' + t('({sf} s.f.)', { sf: sf }) + '</span>';
      if (b === 'amount') {
        ans = F(n, sf) + ' mol'; out[out.length - 1] += '<b>' + ans + '</b>' + tail;
      } else if (b === 'mass') {
        if (a !== 'mass') out.push(p.working);
        ans = F(n * p.M, sf) + ' g';
        out.push('<i>m</i> = <i>n</i> × <i>M</i> = ' + mid(n) + ' mol × ' + p.M.toFixed(2) + ' ' + U.gmol + ' = <b>' + ans + '</b>' + tail);
      } else if (b === 'particles') {
        ans = chem.sci(n * NA, sf);
        out.push('<i>N</i> = <i>n</i> × <i>N</i><sub>A</sub> = ' + mid(n) + ' mol × ' + NA_HTML + ' ' + U.permol + ' = <b>' + ans + '</b>' + tail);
        if (p.ok && p.atoms > 1) out.push({ note: t('That is the number of molecules or formula units of {formula}. Each one contains {atoms} atoms, so the number of atoms is {atoms} × {N} = {total}.', { formula: p.html, atoms: p.atoms, N: ans, total: chem.sci(n * NA * p.atoms, sf) }) });
        else if (p.ok) out.push({ note: t('For an element written as a single atom, such as {formula}, the particles are atoms.', { formula: p.html }) });
      } else if (b === 'solution') {
        var v2 = num(vTo.value);
        if (!isFinite(v2) || v2 <= 0) return fail(t('Type the volume of solution made, in cm<sup>3</sup>.'));
        out.push('<i>V</i> = ' + esc(vTo.value.trim()) + ' ' + U.cm3 + ' ÷ 1000 = ' + mid(v2 / 1000) + ' ' + U.dm3);
        var c = n / (v2 / 1000);
        ans = F(c, sf) + ' ' + U.moldm;
        out.push('<i>C</i> = <i>n</i> ÷ <i>V</i> = ' + mid(n) + ' mol ÷ ' + mid(v2 / 1000) + ' ' + U.dm3 + ' = <b>' + ans + '</b>' + tail);
        if (p.ok) out.push({ note: t('As a mass concentration of {formula}: {C} × {M} = {G}.', { formula: p.html, C: F(c, sf) + ' ' + U.moldm, M: p.M.toFixed(2) + ' ' + U.gmol, G: F(c * p.M, sf) + ' ' + U.gdm }) });
      } else if (b === 'gas') {
        ans = F(n * VM, sf) + ' ' + U.dm3;
        out.push('<i>V</i> = <i>n</i> × 22.7 ' + U.dm3 + ' ' + U.permol + ' = ' + mid(n) + ' mol × 22.7 ' + U.dm3 + ' ' + U.permol + ' = <b>' + ans + '</b>' + tail);
      }
      if (a === 'gas' || b === 'gas') out.push({ note: t('22.7 dm<sup>3</sup> mol<sup>−1</sup> is the molar volume of an ideal gas at STP (273.15 K and 100 kPa) from the data booklet. It works only for gases, only at STP. Topic 1.5 covers it.') });
      if (!needM && b !== 'particles' && b !== 'solution') out.push({ note: t('The formula is not needed for this conversion. Molar mass only matters when mass is involved.') });
      out.push({ note: t('The answer is rounded to {sf} significant figures to match the value you typed. The working keeps extra digits until the end.', { sf: sf }) });
      paint(a, b, true);
      lines(work, out);
      var endName = b === 'solution' ? t('concentration') : NAME[b];
      setPath(a === 'amount' || b === 'amount' ? t('{from} → {to} (one step)', { from: NAME[a], to: endName }) : t('{from} → amount → {to} (two steps)', { from: NAME[a], to: endName }));
      setAns(ans);
    }
    update();
  });

  /* =======================================================================
     5. Empirical formula solver
     ======================================================================= */
  /** Table-method core. items: [{sym, value}] -> rows with mol, ratio, scaled, whole; k = multiplier (or 0 if none found). */
  function empirical(items) {
    var rows = items.map(function (it) { var e = chem.element(it.sym); return { sym: it.sym, value: it.value, shown: it.shown, ar: e.ar, mol: it.value / e.ar }; });
    var min = Math.min.apply(null, rows.map(function (r) { return r.mol; }));
    rows.forEach(function (r) { r.ratio = r.mol / min; });
    var k = 0, rough = false;
    for (var tryK = 1; tryK <= 6 && !k; tryK++) {
      if (rows.every(function (r) { var v = r.ratio * tryK; return Math.round(v) >= 1 && Math.abs(v - Math.round(v)) < 0.09; })) k = tryK;
    }
    if (k) rows.forEach(function (r) { r.scaled = r.ratio * k; r.whole = Math.round(r.scaled); if (Math.abs(r.scaled - r.whole) > 0.03) rough = true; });
    var text = k ? rows.map(function (r) { return r.sym + (r.whole > 1 ? r.whole : ''); }).join('') : '';
    var efm = k ? rows.reduce(function (s, r) { return s + r.whole * Math.round(r.ar * 100); }, 0) / 100 : NaN;
    return { rows: rows, k: k, rough: rough, text: text, efm: efm };
  }
  S1.s14.empirical = empirical;

  S1.widgets.register('s1-4.empirical', function (w) {
    var EX = {
      a: { label: 'C 48.64 %, H 8.16 %, O 43.20 %', basis: 'pct', rows: [['C', '48.64'], ['H', '8.16'], ['O', '43.20']], M: '' },
      b: { label: 'Fe 69.94 %, O 30.06 %', basis: 'pct', rows: [['Fe', '69.94'], ['O', '30.06']], M: '' },
      c: { label: 'Mg 2.43 g, O 1.60 g', basis: 'mass', rows: [['Mg', '2.43'], ['O', '1.60']], M: '' },
      d: { label: 'C 85.63 %, H 14.37 %, M = 56.12', basis: 'pct', rows: [['C', '85.63'], ['H', '14.37']], M: '56.12' }
    };
    var CEX = {
      a: { label: t('{m} g gives {c} g CO₂ and {h} g H₂O', { m: '0.660', c: '1.319', h: '0.540' }), v: ['0.660', '1.319', '0.540'], M: '88.12' },
      b: { label: t('{m} g gives {c} g CO₂ and {h} g H₂O', { m: '1.150', c: '2.197', h: '1.349' }), v: ['1.150', '2.197', '1.349'], M: '' },
      c: { label: t('{m} g gives {c} g CO₂ and {h} g H₂O (a hydrocarbon)', { m: '0.420', c: '1.318', h: '0.540' }), v: ['0.420', '1.318', '0.540'], M: '' }
    };
    var SCALE_HINT = {
      2: t('Dividing by the smallest gave a ratio that is not whole (it ends in about .5). Do not round it. Multiply every ratio by 2 to clear the fraction.'),
      3: t('Dividing by the smallest gave a ratio that is not whole (it ends in about .33 or .67). Do not round it. Multiply every ratio by 3 to clear the fraction.'),
      4: t('Dividing by the smallest gave a ratio that is not whole (it ends in about .25 or .75). Do not round it. Multiply every ratio by 4 to clear the fraction.'),
      5: t('Dividing by the smallest gave a ratio that is not whole (it ends in about .2, .4, .6 or .8). Do not round it. Multiply every ratio by 5 to clear the fraction.'),
      6: t('Dividing by the smallest gave a ratio that is not whole (it ends in about .17 or .83). Do not round it. Multiply every ratio by 6 to clear the fraction.')
    };
    var mode = w.select({ label: t('Type of data'), options: [{ value: 'table', label: t('Masses or percentages') }, { value: 'comb', label: t('Combustion analysis') }], value: w.options.mode || 'table', onChange: sync });
    var basis = w.select({ label: t('Values are'), options: [{ value: 'pct', label: t('percentages by mass') }, { value: 'mass', label: t('masses in g') }], value: 'pct', onChange: update });
    var ex = w.select({ label: t('Load an example'), options: Object.keys(EX).map(function (k) { return { value: k, label: EX[k].label }; }), value: 'a', onChange: function (v) { load(EX[v]); } });
    var cex = w.select({ label: t('Load an example'), options: Object.keys(CEX).map(function (k) { return { value: k, label: CEX[k].label }; }), value: 'a', onChange: function (v) { loadC(CEX[v]); } });

    var grid = el('div', { class: 'mole-grid', role: 'group', 'aria-label': t('Elements and their values') }); w.controls.appendChild(grid);
    var rowsIn = [];
    for (var i = 0; i < 4; i++) {
      var r = el('div', { class: 'mole-grid__row' }); grid.appendChild(r);
      rowsIn.push({ sym: field(r, { label: t('Element {n}', { n: i + 1 }), value: '', width: '4.5rem', onInput: update }), val: field(r, { label: t('Value {n}', { n: i + 1 }), value: '', width: '6.5rem', inputmode: 'decimal', onInput: update }) });
    }
    var cgrid = el('div', { class: 'mole-grid mole-grid--comb', role: 'group', 'aria-label': t('Combustion data') }); w.controls.appendChild(cgrid);
    var cS = field(cgrid, { label: t('Mass of compound / g'), value: '0.660', width: '7rem', inputmode: 'decimal', onInput: update });
    var cC = field(cgrid, { label: t('Mass of CO<sub>2</sub> formed / g'), value: '1.319', width: '7rem', inputmode: 'decimal', onInput: update });
    var cH = field(cgrid, { label: t('Mass of H<sub>2</sub>O formed / g'), value: '0.540', width: '7rem', inputmode: 'decimal', onInput: update });
    var mm = field(w.controls, { label: t('Molar mass, if known / g mol<sup>−1</sup> (optional)'), value: '', width: '7rem', inputmode: 'decimal', onInput: update });

    var pre = el('div', { class: 'mole-work' }); w.stage.appendChild(pre);
    var tableBox = el('div', { class: 'table-scroll' }); w.stage.appendChild(tableBox);
    var post = el('div', { class: 'mole-work' }); w.stage.appendChild(post);
    var setE = w.readoutItem(t('Empirical formula')), setEm = w.readoutItem(t('Empirical formula mass')), setMol = w.readoutItem(t('Molecular formula'));

    function load(e) {
      basis.set(e.basis);
      rowsIn.forEach(function (row, j) { row.sym.set(e.rows[j] ? e.rows[j][0] : ''); row.val.set(e.rows[j] ? e.rows[j][1] : ''); });
      mm.set(e.M); update();
    }
    function loadC(e) { cS.set(e.v[0]); cC.set(e.v[1]); cH.set(e.v[2]); mm.set(e.M); update(); }
    function sync() {
      var isTable = mode.value === 'table';
      basis.el.hidden = !isTable; ex.el.hidden = !isTable; grid.hidden = !isTable; cex.el.hidden = isTable; cgrid.hidden = isTable;
      update();
    }
    function blank(msg) { tableBox.innerHTML = ''; lines(post, [{ note: msg }]); setE('—'); setEm('—'); setMol('—'); }

    function update() {
      var items = [], head, before = [], pct = false;
      if (mode.value === 'table') {
        lines(pre, []);
        pct = basis.value === 'pct';
        for (var j = 0; j < rowsIn.length; j++) {
          var s = rowsIn[j].sym.value.trim(), vtxt = rowsIn[j].val.value.trim();
          if (!s && !vtxt) continue;
          var sym = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(), e = chem.element(sym), v = num(vtxt);
          if (!e || e.ar == null) return blank(t('“{sym}” is not an element symbol with a relative atomic mass in this tool. Check the spelling.', { sym: esc(s) }));
          if (!isFinite(v) || v <= 0) return blank(pct ? t('Type a positive percentage for {sym}.', { sym: sym }) : t('Type a positive mass for {sym}.', { sym: sym }));
          if (items.some(function (it) { return it.sym === sym; })) return blank(t('{sym} appears twice. Give each element one row.', { sym: sym }));
          items.push({ sym: sym, value: v, shown: vtxt });
        }
        if (items.length < 2) return blank(t('Enter at least two elements.'));
        head = pct ? t('% by mass') : t('Mass / g');
        if (pct) {
          var sum = items.reduce(function (acc, it) { return acc + it.value; }, 0);
          if (Math.abs(sum - 100) > 0.6) before.push({ note: t('Your percentages add up to {sum} %, not 100 %. If one element (often oxygen) is not given, find it by difference: 100 − the others.', { sum: F(sum, 4) }) });
          else before.push({ note: t('Percentages: imagine 100 g of the compound. Then {p} % means {p} g.', { p: esc(items[0].shown) }) });
        }
        lines(pre, before);
      } else {
        var ms = num(cS.value), mc = num(cC.value), mh = num(cH.value);
        if (!(ms > 0) || !(mc > 0) || !(mh > 0)) { lines(pre, []); return blank(t('Type the three masses in grams.')); }
        var gC = mc * 12.01 / 44.01, gH = mh * 2.02 / 18.02, gO = ms - gC - gH;
        before.push(t('mass of C = {calc}', { calc: esc(cC.value.trim()) + ' g × <span class="frac"><span>12.01</span><span>44.01</span></span> = ' + F(gC, 4) + ' g' }));
        before.push(t('mass of H = {calc}', { calc: esc(cH.value.trim()) + ' g × <span class="frac"><span>2 × 1.01</span><span>18.02</span></span> = ' + F(gH, 4) + ' g' }));
        if (gO < -0.01 * ms) { lines(pre, before); return blank(t('The carbon and hydrogen add up to more than the sample mass. Check the three masses.')); }
        var hasO = gO > 0.01 * ms, oCalc = esc(cS.value.trim()) + ' g − ' + F(gC, 4) + ' g − ' + F(gH, 4) + ' g = ';
        before.push(hasO ? t('mass of O = {calc}', { calc: oCalc + F(gO, 4) + ' g' }) : t('mass of O = {calc}, which is zero within rounding', { calc: oCalc + chem.fixed(gO, 3) + ' g' }));
        before.push({ note: hasO
          ? t('All the carbon ends up in CO<sub>2</sub> and all the hydrogen ends up in H<sub>2</sub>O. Oxygen cannot be found this way because extra oxygen came from the air, so it is found by difference.')
          : t('All the carbon ends up in CO<sub>2</sub> and all the hydrogen ends up in H<sub>2</sub>O. Here they account for the whole sample, so there is no oxygen: the compound is a hydrocarbon.') });
        lines(pre, before);
        items = [{ sym: 'C', value: gC }, { sym: 'H', value: gH }];
        if (hasO) items.push({ sym: 'O', value: gO });
        head = t('Mass / g');
      }
      var r = empirical(items), anyScale = r.k > 1;
      var th = '<th scope="col">' + t('Element') + '</th><th scope="col" class="num">' + head + '</th><th scope="col" class="num">÷ <i>A</i><sub>r</sub></th><th scope="col" class="num">' + t('Amount / mol') + '</th><th scope="col" class="num">' + t('÷ smallest') + '</th>' +
        (anyScale ? '<th scope="col" class="num">× ' + r.k + '</th>' : '') + '<th scope="col" class="num">' + t('Whole number') + '</th>';
      var body = r.rows.map(function (row) {
        return '<tr><th scope="row">' + row.sym + '</th><td class="num">' + (row.shown ? esc(row.shown) : F(row.value, 4)) + '</td><td class="num">÷ ' + row.ar.toFixed(2) + '</td><td class="num">' + F(row.mol, 4) + '</td><td class="num">' + row.ratio.toFixed(2) + '</td>' +
          (anyScale ? '<td class="num">' + row.scaled.toFixed(2) + '</td>' : '') + '<td class="num"><b>' + (r.k ? row.whole : '?') + '</b></td></tr>';
      }).join('');
      tableBox.innerHTML = '<table class="data"><caption>' + t('The table method') + '</caption><thead><tr>' + th + '</tr></thead><tbody>' + body + '</tbody></table>';
      if (!r.k) {
        lines(post, [{ note: t('These ratios are not close to whole numbers, even after multiplying by 2, 3, 4, 5 or 6. Check the data, and check that no element is missing.') }]);
        setE('—'); setEm('—'); setMol('—'); return;
      }
      var fHtml = chem.formula(r.text), after = [];
      if (anyScale) after.push({ note: SCALE_HINT[r.k] });
      if (r.rough) after.push({ note: t('Some ratios are a little away from whole numbers. Experimental data are never exact, so values within about 0.1 are rounded.') });
      after.push(t('empirical formula = {formula}', { formula: '<b>' + fHtml + '</b>' }));
      setE(fHtml); setEm(r.efm.toFixed(2));
      var M = num(mm.value);
      if (mm.value.trim() && isFinite(M) && M > 0) {
        var mult = M / r.efm, whole = Math.round(mult);
        after.push(t('empirical formula mass = {calc}', { calc: r.rows.map(function (row) { return (row.whole > 1 ? row.whole + '(' + row.ar.toFixed(2) + ')' : row.ar.toFixed(2)); }).join(' + ') + ' = ' + r.efm.toFixed(2) }));
        after.push(t('<i>M</i> ÷ empirical formula mass = {calc}', { calc: esc(mm.value.trim()) + ' ÷ ' + r.efm.toFixed(2) + ' = ' + mult.toFixed(2) }));
        if (whole >= 1 && Math.abs(mult - whole) < 0.06 * whole) {
          var mf = chem.formula(r.rows.map(function (row) { return row.sym + (row.whole * whole > 1 ? row.whole * whole : ''); }).join(''));
          after.push(whole === 1 ? t('molecular formula = the empirical formula = {formula}', { formula: '<b>' + mf + '</b>' })
            : t('molecular formula = {calc}', { calc: '(' + fHtml + ') × ' + whole + ' = <b>' + mf + '</b>' }));
          setMol(mf);
        } else {
          after.push({ note: t('That is not close to a whole number, so this molar mass does not fit this empirical formula. Check both.') });
          setMol('—');
        }
      } else setMol(t('needs the molar mass'));
      lines(post, after);
    }
    load(EX.a); sync();
  });

  /* =======================================================================
     6. Solution lab
     ======================================================================= */
  function flaskSvg(cx, base, vol, opacity, coloured, label, sub, id) {
    // Volumetric flask drawn with its base at y = base; linear size scales with the cube root of its volume.
    var s = Math.pow(vol / 1000, 1 / 3), y0 = -160;
    var d = 'M-8 ' + y0 + ' L-8 ' + (y0 + 72) + ' C-10 ' + (y0 + 85) + ' -48 ' + (y0 + 95) + ' -48 ' + (y0 + 125) + ' C-48 ' + (y0 + 150) + ' -30 0 -20 0 L20 0 C30 0 48 ' + (y0 + 150) + ' 48 ' + (y0 + 125) + ' C48 ' + (y0 + 95) + ' 10 ' + (y0 + 85) + ' 8 ' + (y0 + 72) + ' L8 ' + y0;
    var mark = y0 + 34;
    return '<g transform="translate(' + cx + ' ' + base + ') scale(' + s.toFixed(3) + ')">' +
      '<clipPath id="' + id + '"><path d="' + d + ' Z"/></clipPath>' +
      '<rect x="-50" y="' + mark + '" width="100" height="' + (-mark) + '" clip-path="url(#' + id + ')" fill="' + (coloured ? 'var(--accent)' : 'var(--ink-3)') + '" fill-opacity="' + opacity.toFixed(3) + '"/>' +
      '<path d="' + d + '" fill="none" stroke="var(--ink)" stroke-width="' + (1.6 / s).toFixed(2) + '" stroke-linejoin="round"/>' +
      '<rect x="-10" y="' + (y0 - 12) + '" width="20" height="12" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="' + (1.4 / s).toFixed(2) + '"/>' +
      '<line x1="-15" y1="' + mark + '" x2="15" y2="' + mark + '" stroke="var(--ink)" stroke-width="' + (1.4 / s).toFixed(2) + '"/>' +
      '</g>' +
      '<text x="' + (cx + 20 * s + 12) + '" y="' + (base + mark * s + 4) + '" class="mole-svg__small">' + t('the mark') + '</text>' +
      '<text x="' + cx + '" y="' + (base + 18) + '" text-anchor="middle" class="mole-svg__label">' + label + '</text>' +
      '<text x="' + cx + '" y="' + (base + 33) + '" text-anchor="middle" class="mole-svg__small">' + sub + '</text>';
  }

  S1.widgets.register('s1-4.solution', function (w) {
    var SOL = [
      { f: 'CuSO4.5H2O', name: t('hydrated copper(II) sulfate'), coloured: true },
      { f: 'NaCl', name: t('sodium chloride'), coloured: false },
      { f: 'Na2CO3', name: t('sodium carbonate'), coloured: false },
      { f: 'NaOH', name: t('sodium hydroxide'), coloured: false },
      { f: 'C6H12O6', name: t('glucose'), coloured: false }
    ];
    var FLASKS = ['100.0', '250.0', '500.0', '1000.0'];
    var uid = S1.util.uid('clip');
    function volOpts(list) { return list.map(function (v) { return { value: v, label: v + ' cm³' }; }); }
    var mode = w.select({ label: t('Task'), options: [{ value: 'make', label: t('Make a standard solution') }, { value: 'dilute', label: t('Dilute a stock solution') }], value: w.options.mode || 'make', onChange: sync });
    var solute = w.select({ label: t('Solute'), options: SOL.map(function (s, i) { return { value: i, label: s.name }; }), value: 0, onChange: update });
    var mass = w.slider({ label: t('Mass of solute'), min: 0.1, max: 20, step: 0.05, value: 6.24, unit: 'g', onInput: update });
    var flask = w.select({ label: t('Volumetric flask'), options: volOpts(FLASKS), value: '250.0', onChange: update });
    var c1 = w.slider({ label: t('Stock concentration, C₁'), min: 0.05, max: 2, step: 0.05, value: 1, unit: 'mol dm-3', onInput: update });
    var pip = w.select({ label: t('Volume taken by pipette, V₁'), options: volOpts(['5.0', '10.0', '25.0', '50.0']), value: '25.0', onChange: update });
    var flask2 = w.select({ label: t('Volumetric flask, V₂'), options: volOpts(FLASKS), value: '250.0', onChange: update });
    var svg = w.svg('0 0 380 236', { label: t('Volumetric flask filled to the graduation mark') });
    svg.classList.add('mole-svg');
    var work = el('div', { class: 'mole-work' }); w.stage.appendChild(work);
    var r1 = w.readoutItem(t('Amount of solute')), r2 = w.readoutItem(t('Molar concentration')), r3 = w.readoutItem(t('Mass concentration'));
    var ARROW = '<path d="M140 150 h56 m-8 -6 l8 6 l-8 6" fill="none" stroke="var(--ink-2)" stroke-width="1.6"/>';
    function small(x, y, str) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" class="mole-svg__small">' + str + '</text>'; }
    function label(x, y, str) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" class="mole-svg__label">' + str + '</text>'; }

    function sync() {
      var mk = mode.value === 'make';
      solute.el.hidden = !mk; mass.el.hidden = !mk; flask.el.hidden = !mk;
      c1.el.hidden = mk; pip.el.hidden = mk; flask2.el.hidden = mk;
      update();
    }
    function update() {
      if (mode.value === 'make') {
        var s = SOL[Number(solute.value)], p = parseFormula(s.f), m = mass.value, V = Number(flask.value), n = m / p.M, c = n / (V / 1000), g = m / (V / 1000);
        var hydrate = s.f === 'CuSO4.5H2O';
        var op = s.coloured ? S1.util.clamp(0.06 + 0.9 * c / 0.8, 0.06, 0.95) : 0.1;
        svg.innerHTML =
          '<rect x="34" y="186" width="92" height="8" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.4"/>' +
          '<path d="M52 186 l6 -12 h44 l6 12 z" fill="' + (s.coloured ? 'var(--accent)' : 'var(--surface-2)') + '" fill-opacity="' + (s.coloured ? 0.85 : 1) + '" stroke="var(--ink)" stroke-width="1.4"/>' +
          label(80, 212, t('{m} g of solute', { m: m.toFixed(2) })) + small(80, 227, t('weighed on a balance')) + ARROW +
          small(168, 138, t('dissolve,')) + small(168, 170, t('make up')) + small(168, 183, t('to the mark')) +
          flaskSvg(270, 196, V, op, s.coloured, t('{v} cm³ flask', { v: flask.value }), s.coloured ? t('blue solution') : t('colourless solution'), uid);
        svg.setAttribute('aria-label', t('A balance with {m} g of {name} and a {v} cm3 volumetric flask filled to the graduation mark', { m: m.toFixed(2), name: s.name, v: flask.value }));
        var Vdm = (V / 1000).toFixed(4) + ' ' + U.dm3;
        var check = { C: F(c, 3) + ' ' + U.moldm, M: p.M.toFixed(2) + ' ' + U.gmol, G: F(c * p.M, 3) + ' ' + U.gdm };
        lines(work, [
          p.working,
          '<i>n</i> = <i>m</i> ÷ <i>M</i> = ' + m.toFixed(2) + ' g ÷ ' + p.M.toFixed(2) + ' ' + U.gmol + ' = ' + mid(n) + ' mol',
          '<i>V</i> = ' + flask.value + ' ' + U.cm3 + ' ÷ 1000 = ' + Vdm,
          '[' + chem.formula(hydrate ? 'CuSO4' : s.f) + '] = <i>n</i> ÷ <i>V</i> = ' + mid(n) + ' mol ÷ ' + Vdm + ' = <b>' + F(c, 3) + ' ' + U.moldm + '</b>',
          t('mass concentration = {calc}', { calc: '<i>m</i> ÷ <i>V</i> = ' + m.toFixed(2) + ' g ÷ ' + Vdm + ' = <b>' + F(g, 3) + ' ' + U.gdm + '</b>' }),
          { note: hydrate
            ? t('The solid weighed is the hydrate, so its molar mass includes the five waters. One mole of the hydrate gives one mole of CuSO<sub>4</sub> in solution. Check: {C} × {M} = {G}.', check)
            : t('Check: {C} × {M} = {G}.', check) }
        ]);
        r1(F(n, 3) + ' mol'); r2(F(c, 3) + ' ' + U.moldm);
        r3(hydrate ? t('{G} <span class="mole-unitnote">(of hydrate)</span>', { G: F(g, 3) + ' ' + U.gdm }) : F(g, 3) + ' ' + U.gdm);
      } else {
        var C1 = c1.value, V1 = Number(pip.value), V2 = Number(flask2.value), n1 = C1 * V1 / 1000, C2 = n1 / (V2 / 1000), fac = V2 / V1;
        svg.innerHTML =
          '<path d="M40 110 v78 q0 8 8 8 h64 q8 0 8 -8 v-78" fill="none" stroke="var(--ink)" stroke-width="1.6"/>' +
          '<rect x="41" y="128" width="78" height="67" fill="var(--accent)" fill-opacity="' + S1.util.clamp(0.06 + 0.9 * C1 / 2, 0.06, 0.95).toFixed(3) + '"/>' +
          label(80, 214, t('stock solution')) + small(80, 229, 'C₁ = ' + C1.toFixed(2) + ' mol dm⁻³') + ARROW +
          small(168, 125, t('pipette')) + small(168, 138, pip.value + ' cm³') + small(168, 170, t('add water')) + small(168, 183, t('to the mark')) +
          flaskSvg(270, 196, V2, S1.util.clamp(0.06 + 0.9 * C2 / 2, 0.03, 0.95), true, t('{v} cm³ flask', { v: flask2.value }), 'C₂ = ' + chem.toSig(C2, 3) + ' mol dm⁻³', uid);
        svg.setAttribute('aria-label', t('A beaker of stock solution, and a {v} cm3 volumetric flask holding the paler diluted solution', { v: flask2.value }));
        lines(work, [
          '<i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>',
          '<i>C</i><sub>2</sub> = <span class="frac"><span><i>C</i><sub>1</sub><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class="frac"><span>' + C1.toFixed(2) + ' ' + U.moldm + ' × ' + pip.value + ' ' + U.cm3 + '</span><span>' + flask2.value + ' ' + U.cm3 + '</span></span> = <b>' + F(C2, 3) + ' ' + U.moldm + '</b>',
          t('dilution factor = {calc}', { calc: '<i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub> = ' + flask2.value + ' ÷ ' + pip.value + ' = <b>' + F(fac, 3) + '</b>' }),
          { note: t('The amount of solute does not change: {n} mol leaves the pipette and {n} mol is in the flask. Only the volume changes. The volumes can stay in cm<sup>3</sup> here because the same unit is on both sides.', { n: mid(n1) }) }
        ]);
        r1(F(n1, 3) + ' mol'); r2(F(C2, 3) + ' ' + U.moldm); r3(t('diluted {factor} times', { factor: F(fac, 3) }));
      }
    }
    sync();
  });

  /* =======================================================================
     7. Calibration curve
     ======================================================================= */
  S1.widgets.register('s1-4.calibration', function (w) {
    var STD = [[0, 0.00], [0.020, 0.11], [0.040, 0.21], [0.060, 0.33], [0.080, 0.43], [0.100, 0.54]];
    var n = STD.length, sx = 0, sy = 0, sxx = 0, sxy = 0;
    STD.forEach(function (p) { sx += p[0]; sy += p[1]; sxx += p[0] * p[0]; sxy += p[0] * p[1]; });
    var slope = (n * sxy - sx * sy) / (n * sxx - sx * sx), icpt = (sy - slope * sx) / n;
    var a = w.slider({ label: t('Absorbance of the unknown'), min: 0.05, max: 0.5, step: 0.01, value: 0.27, onInput: update });
    var svg = w.svg('0 0 380 260', { label: t('Calibration curve: absorbance against concentration for six standard solutions, with a straight line of best fit') });
    svg.classList.add('mole-svg');
    var setA = w.readoutItem(t('Absorbance measured')), setC = w.readoutItem(t('Concentration read from the line'));
    var L = 52, R = 366, T = 14, B = 212;
    function X(c) { return L + c / 0.11 * (R - L); }
    function Y(v) { return B - v / 0.6 * (B - T); }
    function update() {
      var A = a.value, c = (A - icpt) / slope, h = '';
      for (var i = 0; i <= 5; i++) {
        var cx = X(i * 0.02), ay = Y(i * 0.1 + 0.1);
        h += '<line x1="' + cx + '" y1="' + B + '" x2="' + cx + '" y2="' + (B + 5) + '" stroke="var(--ink)"/><text x="' + cx + '" y="' + (B + 18) + '" text-anchor="middle" class="mole-svg__tick">' + (i * 0.02).toFixed(2) + '</text>';
        h += '<line x1="' + (L - 5) + '" y1="' + ay + '" x2="' + L + '" y2="' + ay + '" stroke="var(--ink)"/><text x="' + (L - 8) + '" y="' + (ay + 4) + '" text-anchor="end" class="mole-svg__tick">' + (i * 0.1 + 0.1).toFixed(1) + '</text>';
        h += '<line x1="' + L + '" y1="' + ay + '" x2="' + R + '" y2="' + ay + '" stroke="var(--line)"/>';
      }
      h += '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + B + '" stroke="var(--ink)" stroke-width="1.5"/><line x1="' + L + '" y1="' + B + '" x2="' + R + '" y2="' + B + '" stroke="var(--ink)" stroke-width="1.5"/>';
      h += '<text x="' + ((L + R) / 2) + '" y="' + (B + 38) + '" text-anchor="middle" class="mole-svg__label">' + t('concentration / mol dm⁻³') + '</text>';
      h += '<text transform="translate(13 ' + ((T + B) / 2) + ') rotate(-90)" text-anchor="middle" class="mole-svg__label">' + t('absorbance') + '</text>';
      h += '<line x1="' + X(0) + '" y1="' + Y(icpt) + '" x2="' + X(0.108) + '" y2="' + Y(icpt + slope * 0.108) + '" stroke="var(--ink-2)" stroke-width="1.6"/>';
      STD.forEach(function (p) { h += '<path d="M' + (X(p[0]) - 4) + ' ' + (Y(p[1]) - 4) + ' l8 8 m0 -8 l-8 8" stroke="var(--ink)" stroke-width="1.8" fill="none"/>'; });
      h += '<path d="M' + L + ' ' + Y(A) + ' H' + X(c) + ' V' + B + '" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>';
      h += '<circle cx="' + X(c) + '" cy="' + Y(A) + '" r="5" fill="var(--accent)"/>';
      h += '<text x="' + (X(c) + 8) + '" y="' + (B - 8) + '" class="mole-svg__label mole-svg__label--strong">' + c.toFixed(3) + '</text>';
      svg.innerHTML = h;
      setA(A.toFixed(2));
      setC(c.toFixed(3) + ' ' + U.moldm);
    }
    update();
  });

  /* =======================================================================
     8. Avogadro's law: reacting gas volumes
     ======================================================================= */
  S1.widgets.register('s1-4.gasratio', function (w) {
    var EQ = [
      { label: 'N₂(g) + 3H₂(g) → 2NH₃(g)', sp: [['N2', 1, 'r'], ['H2', 3, 'r'], ['NH3', 2, 'p']], first: 'H2' },
      { label: '2CO(g) + O₂(g) → 2CO₂(g)', sp: [['CO', 2, 'r'], ['O2', 1, 'r'], ['CO2', 2, 'p']] },
      { label: 'H₂(g) + Cl₂(g) → 2HCl(g)', sp: [['H2', 1, 'r'], ['Cl2', 1, 'r'], ['HCl', 2, 'p']] },
      { label: '2NO(g) + O₂(g) → 2NO₂(g)', sp: [['NO', 2, 'r'], ['O2', 1, 'r'], ['NO2', 2, 'p']] },
      { label: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)', sp: [['CH4', 1, 'r'], ['O2', 2, 'r'], ['CO2', 1, 'p'], ['H2O', 2, 'p', 'l']] },
      { label: 'C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)', sp: [['C3H8', 1, 'r'], ['O2', 5, 'r'], ['CO2', 3, 'p'], ['H2O', 4, 'p', 'l']] }
    ];
    var eq = w.select({ label: t('Reaction'), options: EQ.map(function (e, i) { return { value: i, label: e.label }; }), value: 0, onChange: function () { fill(); update(); } });
    var which = w.select({ label: t('Gas whose volume you set'), options: ['N2'], value: 'N2', onChange: update });
    var whichSel = which.el.querySelector('select');
    var vol = w.slider({ label: t('Its volume'), min: 5, max: 100, step: 1, value: 60, unit: 'cm3', onInput: update });
    var svg = w.svg('0 0 380 232', { label: t('Boxes of gas whose heights are in proportion to the reacting volumes') });
    svg.classList.add('mole-svg');
    var work = el('div', { class: 'mole-work' }); w.stage.appendChild(work);
    var setR = w.readoutItem(t('Volume ratio of the gases')), setB = w.readoutItem(t('Gas before')), setA = w.readoutItem(t('Gas after'));
    function fill() {
      var e = EQ[Number(eq.value)]; whichSel.innerHTML = '';
      e.sp.forEach(function (s) { if (s[3] !== 'l') whichSel.appendChild(el('option', { value: s[0], text: subDigits(s[0]) })); });
      whichSel.value = e.first || e.sp[0][0];
    }
    function update() {
      var e = EQ[Number(eq.value)], set = e.sp.filter(function (s) { return s[0] === whichSel.value; })[0], V = vol.value;
      var vols = e.sp.map(function (s) { return s[3] === 'l' ? 0 : V * s[1] / set[1]; });
      // Heights are scaled to the largest box in the current reaction, so the boxes compare with each other.
      var maxV = Math.max.apply(null, vols), n = e.sp.length, colW = 380 / n, base = 170, maxH = 138, bw = 54, h = '';
      var before = 0, after = 0, out = [], ratio = [];
      e.sp.forEach(function (s, i) {
        var cx = colW * i + colW / 2, v = vols[i], bh = Math.max(4, v / maxV * maxH), liquid = s[3] === 'l';
        if (i) h += '<text x="' + (colW * i) + '" y="' + (base - 40) + '" text-anchor="middle" class="mole-svg__sign">' + (s[2] === 'p' && e.sp[i - 1][2] === 'r' ? '→' : '+') + '</text>';
        if (liquid) {
          h += '<rect x="' + (cx - bw / 2) + '" y="' + (base - 10) + '" width="' + bw + '" height="10" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="4 3"/>';
          h += '<text x="' + cx + '" y="' + (base - 30) + '" text-anchor="middle" class="mole-svg__small">' + t('liquid:') + '</text><text x="' + cx + '" y="' + (base - 17) + '" text-anchor="middle" class="mole-svg__small">' + t('not a gas') + '</text>';
        } else {
          h += '<rect x="' + (cx - bw / 2) + '" y="' + (base - bh) + '" width="' + bw + '" height="' + bh + '" fill="' + (s === set ? 'var(--accent-soft)' : 'var(--surface-2)') + '" stroke="' + (s === set ? 'var(--accent)' : 'var(--ink)') + '" stroke-width="' + (s === set ? 2.5 : 1.5) + '"/>';
          // dots at the same number per unit area in every box: equal volumes, equal numbers of molecules
          var cols = 5, gap = 9.6, rows = Math.floor((bh - 3) / gap);
          for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
            h += '<circle cx="' + (cx - bw / 2 + 7.8 + c * gap + (r % 2 ? 2.2 : -1)) + '" cy="' + (base - 6 - r * gap) + '" r="1.7" fill="var(--ink-2)"/>';
          }
          if (s[2] === 'r') before += v; else after += v;
          ratio.push(s[1]);
          if (s !== set) out.push('<i>V</i>(' + chem.formula(s[0]) + ') = ' + F(V, 3) + ' ' + U.cm3 + ' × <span class="frac"><span>' + s[1] + '</span><span>' + set[1] + '</span></span> = <b>' + F(v, 3) + ' ' + U.cm3 + '</b>');
        }
        h += '<text x="' + cx + '" y="' + (base + 19) + '" text-anchor="middle" class="mole-svg__label">' + (s[1] > 1 ? s[1] : '') + subDigits(s[0]) + '(' + (liquid ? 'l' : 'g') + ')</text>';
        h += '<text x="' + cx + '" y="' + (base + 35) + '" text-anchor="middle" class="mole-svg__label' + (s === set ? ' mole-svg__label--strong' : '') + '">' + (liquid ? '—' : chem.toSig(v, 3) + ' cm³') + '</text>';
        if (s === set) h += '<text x="' + cx + '" y="' + (base + 50) + '" text-anchor="middle" class="mole-svg__small">' + t('you set this') + '</text>';
      });
      svg.innerHTML = h;
      out.unshift({ note: t('Same temperature and pressure, so the volume ratio of the gases equals the mole ratio in the equation. Multiply by (coefficient wanted ÷ coefficient given).') });
      if (e.sp.some(function (s) { return s[3] === 'l'; })) out.push({ note: t('The water is a liquid here. Its volume is tiny compared with the gases, and Avogadro’s law applies to gases only, so it is left out of the gas volumes.') });
      out.push({ note: t('Total gas volume: {before} of reactants becomes {after} of product. Volume is not conserved, because the number of gas molecules changes. Mass is conserved.', { before: F(before, 3) + ' ' + U.cm3, after: F(after, 3) + ' ' + U.cm3 }) });
      lines(work, out);
      setR(ratio.join(' : '));
      setB(F(before, 3) + ' ' + U.cm3); setA(F(after, 3) + ' ' + U.cm3);
    }
    fill(); update();
  });
})();
