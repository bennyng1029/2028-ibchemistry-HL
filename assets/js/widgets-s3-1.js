/* ==========================================================================
   Widgets for topic 3.1 — The periodic table: classification of elements.
   s3-1.table      interactive periodic table (118 elements), with a quiz mode
   s3-1.trends     periodic trends explorer: heat-map, graph, explanation builder
   s3-1.iso        ions with the same electron configuration (N3- … Al3+)
   s3-1.group1     group 1 metals with water (observations, equation, reason)
   s3-1.halogens   halogen + halide ion displacement grid (predict, then check)
   s3-1.oxides     oxides across period 3: bonding, acid-base character, water
   s3-1.oxstate    oxidation state trainer, step by step, with names
   s3-1.dions      (AHL) first-row transition element ions: remove 4s first
   s3-1.succie     (AHL) successive ionization energies: Ca against Sc … Zn
   s3-1.wheel      (AHL) colour wheel, complementary colour and c = λf
   Data sources. BK below was typed from the IB Chemistry data booklet (2025),
   sections 9 and 10: first ionization energy, electron affinity,
   electronegativity, atomic (covalent) radius and the first-listed ionic radius.
   The colour wheel boundaries are those of booklet section 15.
   Successive ionization energies (SUCC) are not in the booklet: they are the
   CRC-based values in the standard reference table "Molar ionization energies
   of the elements", rounded to the nearest kJ mol-1.
   Every user-visible string goes through t("English text", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el, P = S1.periodic;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var SVGNS = 'http://www.w3.org/2000/svg';
  var MINUS = '−';
  var CLIGHT = chem.constants.c;

  /* ---------- Small shared helpers ------------------------------------------- */
  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { if (k === 'text') n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(n);
    return n;
  }
  function fonts(w) {
    var mono = w.color('--font-mono') || 'monospace', body = w.color('--font-body') || 'sans-serif';
    return {
      mono: function (px, bold) { return (bold ? '600 ' : '') + px + 'px ' + mono; },
      body: function (px, bold) { return (bold ? '700 ' : '') + px + 'px ' + body; }
    };
  }
  /** Segmented button group. items: [{value, label}] → {value, set(v), el}. */
  function seg(w, label, items, value, onChange, parent) {
    var id = S1.util.uid('seg');
    var group = el('div', { class: 'seg s31-seg__group', role: 'group', 'aria-labelledby': id });
    var state = { value: value, buttons: [] };
    items.forEach(function (it) {
      var b = el('button', { class: 'seg__btn', type: 'button', 'aria-pressed': String(it.value === value), html: it.label });
      b.addEventListener('click', function () { state.set(it.value); if (onChange) onChange(it.value); });
      b._value = it.value;
      state.buttons.push(b);
      group.appendChild(b);
    });
    state.set = function (v) {
      state.value = v;
      state.buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b._value === v)); });
    };
    var wrap = el('div', { class: 'control s31-seg' }, [el('span', { class: 'control__label', id: id, html: label }), group]);
    (parent || w.controls).appendChild(wrap);
    state.el = wrap;
    return state;
  }
  /** Message box with a tone: 'ok' | 'bad' | 'warn' | 'info'. Returns {el, show(tone, html), hide()}. */
  function msgBox(parent) {
    var box = el('div', { class: 's31-msg', hidden: true, role: 'status', 'aria-live': 'polite' });
    if (parent) parent.appendChild(box);
    return {
      el: box,
      show: function (tone, html) { box.hidden = false; box.setAttribute('data-tone', tone); box.innerHTML = html; },
      hide: function () { box.hidden = true; box.innerHTML = ''; }
    };
  }
  function p(html) { return '<p>' + html + '</p>'; }
  function f(s) { return chem.formula(s); }
  function signed(n) { return n > 0 ? '+' + n : n < 0 ? MINUS + Math.abs(n) : '0'; }
  function cfg(z) { return P.config(z, { order: 'filling', html: true }); }
  function cfgHtml(s) { return s.replace(/([spdf])(\d+)/g, '$1<sup>$2</sup>'); }
  function elName(e) { return t(e.name); }
  var SUPS = { 1: '⁺', 2: '²⁺', 3: '³⁺', 4: '⁴⁺', 5: '⁵⁺', '-1': '⁻', '-2': '²⁻', '-3': '³⁻' };
  function ionText(sym, charge) { return sym + (SUPS[charge] || ''); }
  function ionHtml(sym, charge) {
    var n = Math.abs(charge), s = (n === 1 ? '' : n) + (charge > 0 ? '+' : MINUS);
    return '<span class="chem" data-i18n="off">' + sym + '<sup>' + s + '</sup></span>';
  }

  /* ---------- Data booklet values (sections 9 and 10) --------------------------
     Z: [first IE / kJ mol-1, electron affinity / kJ mol-1, electronegativity,
         atomic radius / pm, charge of first-listed ion, its radius / pm]
     null = the booklet gives no value. */
  var BK = {
    1: [1312, -73, 2.2, 32, null, null], 2: [2372, null, null, 37, null, null],
    3: [520, -60, 1.0, 130, 1, 76], 4: [900, null, 1.6, 99, 2, 45], 5: [801, -27, 2.0, 84, 3, 27], 6: [1086, -122, 2.6, 75, 4, 16],
    7: [1402, null, 3.0, 71, -3, 146], 8: [1314, -141, 3.4, 64, -2, 140], 9: [1681, -328, 4.0, 60, -1, 133], 10: [2081, null, null, 62, null, null],
    11: [496, -53, 0.9, 160, 1, 102], 12: [738, null, 1.3, 140, 2, 72], 13: [578, -42, 1.6, 124, 3, 54], 14: [787, -134, 1.9, 114, 4, 40],
    15: [1012, -72, 2.2, 109, 5, 38], 16: [1000, -200, 2.6, 104, -2, 184], 17: [1251, -349, 3.2, 100, -1, 181], 18: [1520, null, null, 101, null, null],
    19: [419, -48, 0.8, 200, 1, 138], 20: [590, -2, 1.0, 174, 2, 100], 21: [633, -18, 1.4, 159, 3, 75], 22: [659, -8, 1.5, 148, 2, 86],
    23: [651, -51, 1.6, 144, 2, 79], 24: [653, -64, 1.7, 130, 3, 62], 25: [717, null, 1.6, 129, 2, 83], 26: [762, -15, 1.8, 124, 2, 61],
    27: [760, -64, 1.9, 118, 2, 65], 28: [737, -112, 1.9, 117, 2, 69], 29: [745, -119, 1.9, 122, 1, 77], 30: [906, null, 1.6, 120, 2, 74],
    31: [579, -41, 1.8, 123, 3, 62], 32: [762, -119, 2.0, 120, 4, 53], 33: [944, -78, 2.2, 120, 3, 58], 34: [941, -195, 2.6, 118, -2, 198],
    35: [1140, -325, 3.0, 117, -1, 196], 36: [1351, null, null, 116, null, null],
    37: [403, -47, 0.8, 215, 1, 152], 38: [549, -5, 1.0, 190, 2, 118], 39: [600, -30, 1.2, 176, 3, 90], 40: [640, -41, 1.3, 164, 4, 72],
    41: [652, -88, 1.6, 156, 3, 72], 42: [684, -72, 2.2, 146, 4, 65], 43: [702, -53, 2.1, 138, 4, 65], 44: [710, -101, 2.2, 136, 3, 68],
    45: [720, -110, 2.3, 134, 3, 67], 46: [804, -54, 2.2, 130, 2, 86], 47: [731, -126, 1.9, 136, 1, 115], 48: [868, null, 1.7, 140, 2, 95],
    49: [558, -29, 1.8, 142, 3, 80], 50: [709, -107, 2.0, 140, 2, 118], 51: [831, -101, 2.0, 140, 3, 76], 52: [869, -190, 2.1, 137, -2, 221],
    53: [1008, -295, 2.7, 136, -1, 220], 54: [1170, null, null, 136, null, null],
    55: [376, -46, 0.8, 238, 1, 167], 56: [503, -14, 0.9, 206, 2, 135]
  };
  S1._s31 = { BK: BK };   // exposed for the checking script only
  var PIDX = { ie: 0, ea: 1, en: 2, radius: 3, ion: 5 };
  function val(z, prop) { var d = BK[z]; if (!d) return null; var v = d[PIDX[prop]]; return v == null ? null : v; }
  function numTxt(v, prop) { return prop === 'en' ? v.toFixed(1) : String(v).replace('-', MINUS); }

  /* ==========================================================================
     1. Interactive periodic table
     ========================================================================== */
  function familyOf(e) {
    if (e.group === 1 && e.z !== 1) return 'alkali';
    if (e.group === 17) return 'halogen';
    if (e.group === 18) return 'noble';
    if (e.block === 'd' && e.group >= 3 && e.group <= 11) return 'transition';
    return 'none';
  }
  function valence(e) { // s- and p-block only
    if (e.z === 2) return 2;
    return e.group <= 2 ? e.group : e.group - 10;
  }

  S1.widgets.register('s3-1.table', function (w) {
    var by = 'block', mode = 'explore', selZ = Number(w.options.start) || 11, quiz = null, score = { right: 0, tries: 0 };
    var cells = {}, grid = {};
    seg(w, t('Colour the table by'), [
      { value: 'block', label: t('Block') }, { value: 'class', label: t('Metal or non-metal') }, { value: 'family', label: t('Named family') }
    ], by, function (v) { by = v; paint(); });
    var modeSeg = seg(w, t('Mode'), [
      { value: 'explore', label: t('Explore') }, { value: 'quiz', label: t('Find the element') }
    ], mode, function (v) { mode = v; if (v === 'quiz') newQuestion(); else { quizBox.hidden = true; fb.hide(); } update(); });

    var quizBox = el('div', { class: 's31-ask', hidden: true });
    var quizQ = el('p', { class: 's31-ask__q' });
    quizBox.appendChild(quizQ);
    var fb = msgBox(quizBox);
    var nextBtn = el('button', { class: 'btn btn--small btn--primary', type: 'button', hidden: true, html: t('Next question') });
    nextBtn.addEventListener('click', newQuestion);
    quizBox.appendChild(el('div', { class: 'btn-row s31-gap' }, [nextBtn]));
    w.stage.appendChild(quizBox);

    var scroll = el('div', { class: 's31-pt-scroll', tabindex: '-1' });
    var table = el('div', { class: 's31-pt', role: 'group', 'data-by': by });
    table.setAttribute('aria-label', t('Periodic table of the elements. Use the arrow keys to move between elements and Enter to choose one.'));
    // group numbers
    for (var g = 1; g <= 18; g++) table.appendChild(el('span', { class: 's31-pt__head', style: 'grid-column:' + (g + 1) + ';grid-row:1', text: String(g), 'aria-hidden': 'true' }));
    for (var pr = 1; pr <= 7; pr++) table.appendChild(el('span', { class: 's31-pt__head', style: 'grid-column:1;grid-row:' + (pr + 1), text: String(pr), 'aria-hidden': 'true' }));
    table.appendChild(el('span', { class: 's31-pt__note', style: 'grid-column:1 / span 4;grid-row:10', html: t('period 6, f-block') }));
    table.appendChild(el('span', { class: 's31-pt__note', style: 'grid-column:1 / span 4;grid-row:11', html: t('period 7, f-block') }));
    chem.elements.forEach(function (e) {
      var col, row;
      if (e.group != null) { col = e.group + 1; row = e.period + 1; }
      else { col = (e.period === 6 ? e.z - 58 : e.z - 90) + 5; row = e.period === 6 ? 10 : 11; }
      var b = el('button', { class: 's31-el', type: 'button', tabindex: '-1', style: 'grid-column:' + col + ';grid-row:' + row,
        'data-z': e.z, 'data-block': e.block, 'data-class': e.category, 'data-family': familyOf(e) }, [
        el('span', { class: 's31-el__z', text: String(e.z) }),
        el('span', { class: 's31-el__sym', text: e.symbol }),
        el('span', { class: 's31-el__tag' })
      ]);
      b.addEventListener('click', function () { choose(e.z); });
      cells[e.z] = b; grid[row + ',' + col] = e.z; b._row = row; b._col = col;
      table.appendChild(b);
    });
    table.addEventListener('keydown', function (ev) {
      var d = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] }[ev.key];
      var cur = ev.target && ev.target._row ? ev.target : null;
      if (!d || !cur) return;
      ev.preventDefault();
      var r = cur._row, c = cur._col;
      for (var i = 0; i < 18; i++) {
        r += d[0]; c += d[1];
        if (r < 2 || r > 11 || c < 2 || c > 19) return;
        var z = grid[r + ',' + c];
        if (z) { focusCell(z); return; }
      }
    });
    scroll.appendChild(table);
    w.stage.appendChild(scroll);
    var legend = el('div', { class: 's31-legend' });
    w.stage.appendChild(legend);

    var setEl = w.readoutItem(t('Element'));
    var setPos = w.readoutItem(t('Position'));
    var setClass = w.readoutItem(t('Class and family'));
    var setCfg = w.readoutItem(t('Electron configuration'));
    var setWhy = w.readoutItem(t('How position and configuration match'), { text: true });
    var setScore = w.readoutItem(t('Score'));

    var TAGS = {
      block: { s: 's', p: 'p', d: 'd', f: 'f' },
      class: { metal: 'M', metalloid: 'Md', 'non-metal': 'N', unknown: '?' },
      family: { alkali: 'A', halogen: 'H', noble: 'Ng', transition: 'T', none: '' }
    };
    function legendItems() {
      if (by === 'block') return [['s', t('s-block')], ['p', t('p-block')], ['d', t('d-block')], ['f', t('f-block')]];
      if (by === 'class') return [['metal', t('M = metal')], ['metalloid', t('Md = metalloid')], ['non-metal', t('N = non-metal')], ['unknown', t('? = not yet known')]];
      return [['alkali', t('A = alkali metal (group 1, not hydrogen)')], ['halogen', t('H = halogen (group 17)')], ['noble', t('Ng = noble gas (group 18)')], ['transition', t('T = transition element (d-block, groups 3 to 11)')]];
    }
    function paint() {
      table.setAttribute('data-by', by);
      var attr = by === 'block' ? 'data-block' : by === 'class' ? 'data-class' : 'data-family';
      Object.keys(cells).forEach(function (z) { var b = cells[z]; b.lastChild.textContent = TAGS[by][b.getAttribute(attr)] || ''; });
      legend.innerHTML = '';
      legendItems().forEach(function (it) {
        legend.appendChild(el('span', { class: 's31-legend__item' }, [el('span', { class: 's31-legend__sw', 'data-k': it[0], 'data-by': by }), el('span', { html: it[1] })]));
      });
    }
    function focusCell(z) {
      Object.keys(cells).forEach(function (k) { cells[k].setAttribute('tabindex', Number(k) === z ? '0' : '-1'); });
      cells[z].focus();
    }
    function mark() {
      Object.keys(cells).forEach(function (k) {
        var on = Number(k) === selZ;
        cells[k].setAttribute('aria-pressed', String(on));
        cells[k].setAttribute('tabindex', on ? '0' : '-1');
      });
    }
    function posText(e) {
      if (e.group == null) return t('period {p}, f-block (no group number)', { p: e.period });
      return t('period {p}, group {g}, {b}-block', { p: e.period, g: e.group, b: e.block });
    }
    function classText(e) {
      var c = e.category === 'metal' ? t('metal') : e.category === 'metalloid' ? t('metalloid') : e.category === 'non-metal' ? t('non-metal') : t('class not yet known');
      var fam = familyOf(e);
      var ft = fam === 'alkali' ? t('alkali metal') : fam === 'halogen' ? t('halogen') : fam === 'noble' ? t('noble gas') : fam === 'transition' ? t('transition element') : '';
      return ft ? c + '; ' + ft : c;
    }
    function whyText(e) {
      var n = e.period, v = { n: n, g: e.group, sym: e.symbol };
      if (e.z > 36) return t('You only need to deduce configurations up to Z = 36. For heavier elements you only need the position: period, group, block and class.');
      if (e.z === 1) return t('One electron in 1s. The outer energy level is n = 1, so hydrogen is in period 1. It has one valence electron, so it is placed in group 1, but it is a non-metal and not an alkali metal.');
      if (e.z === 2) return t('Two electrons in 1s. The outer energy level is n = 1, so helium is in period 1. Its outer level is full, so it is placed in group 18 with the noble gases.');
      if (e.block === 's') { v.v = e.group; return t('The highest occupied energy level is n = {n}, so the period is {n}. There are {v} valence electrons, in the {n}s sublevel, so the group is {g}.', v); }
      if (e.block === 'p') { v.v = e.group - 10; v.pp = e.group - 12; return t('The highest occupied energy level is n = {n}, so the period is {n}. The valence electrons are {n}s2 and {n}p{pp}: {v} in total. For groups 13 to 18, group number = valence electrons + 10 = {g}.', v); }
      if (e.group === 12) { v.name = elName(e); return t('The highest occupied energy level is n = {n}, so the period is {n}. The 3d sublevel is being filled across this row, so {sym} is in the d-block. 4s and 3d electrons together: 12, so the group is 12. Group 12 elements are usually not counted as transition elements.', v); }
      return t('The highest occupied energy level is n = {n}, so the period is {n}. The 3d sublevel is being filled, so {sym} is in the d-block. Count the 4s and 3d electrons together to get the group number: {g}.', v);
    }
    function update() {
      var e = chem.element(selZ);
      mark();
      setScore(mode === 'quiz' ? t('{right} found in {tries} tries', score) : MINUS);
      if (mode === 'quiz' && quiz && !quiz.done) {
        setEl(t('Choose an element in the table')); setPos(MINUS); setClass(MINUS); setCfg(MINUS); setWhy(t('Read the question above the table, then click or tap the element.'));
        return;
      }
      setEl(t('{symbol} ({name}), Z = {z}', { symbol: e.symbol, name: elName(e), z: e.z }));
      setPos(posText(e));
      setClass(classText(e));
      setCfg(e.z <= 36 ? cfg(e.z) : t('not needed beyond Z = 36'));
      setWhy(whyText(e));
    }
    function choose(z) {
      if (mode === 'quiz' && quiz && !quiz.done) {
        var e = chem.element(z), target = chem.element(quiz.z);
        score.tries++;
        selZ = z;
        if (z === quiz.z) {
          score.right++; quiz.done = true;
          fb.show('ok', p(t('Correct. {symbol} ({name}) is in period {p}, group {g}. Its configuration is {cfg}.', { symbol: target.symbol, name: elName(target), p: target.period, g: target.group, cfg: cfg(target.z) })));
          nextBtn.hidden = false;
        } else {
          var hint = e.period !== target.period ? t('Check the period: it equals the highest occupied main energy level.')
            : t('The period is right. Now count the outer electrons to find the group.');
          fb.show('bad', p(t('Not this one. You chose {symbol}, in period {p}{g}.', { symbol: e.symbol, p: e.period, g: e.group == null ? '' : t(', group {g}', { g: e.group }) }) + ' ' + hint));
          mark(); setScore(t('{right} found in {tries} tries', score));
          return;
        }
      } else selZ = z;
      update();
    }
    function newQuestion() {
      var kind = Math.floor(Math.random() * 3), z;
      do { z = 3 + Math.floor(Math.random() * 34); } while (quiz && z === quiz.z);
      var e = chem.element(z);
      if (kind === 2 && (e.block === 'd' || e.z === 2)) kind = 0;
      quiz = { z: z, done: false };
      if (kind === 0) quizQ.innerHTML = t('Find the element whose atoms have the electron configuration {cfg}.', { cfg: '<span class="mono">' + cfg(z) + '</span>' });
      else if (kind === 1) quizQ.innerHTML = t('Find the element in period {p}, group {g}. Before you click, work out its electron configuration.', { p: e.period, g: e.group });
      else quizQ.innerHTML = t('Find the element whose atoms have {v} valence electrons, with the outer electrons in main energy level n = {n}.', { v: valence(e), n: e.period });
      quizBox.hidden = false; nextBtn.hidden = true; fb.hide();
      update();
    }
    paint(); update();
    void modeSeg;
  });

  /* ==========================================================================
     2. Periodic trends explorer
     ========================================================================== */
  var PERIOD_Z = { 2: [3, 10], 3: [11, 18] };
  function groupMembers(g) { // down a group, Z ≤ 56, hydrogen left out of group 1
    return chem.elements.filter(function (e) { return e.group === g && e.z <= 56 && e.z !== 1; }).map(function (e) { return e.z; });
  }

  S1.widgets.register('s3-1.trends', function (w) {
    var prop = 'radius', dir = 'across', period = 3, group = 1, revealed = false, guess = null;

    w.select({ label: t('Property'), value: prop, options: [
      { value: 'radius', label: t('Atomic radius') }, { value: 'ion', label: t('Ionic radius') }, { value: 'ie', label: t('First ionization energy') },
      { value: 'ea', label: t('Electron affinity') }, { value: 'en', label: t('Electronegativity') }
    ], onChange: function (v) { prop = v; fixChoice(); reset(); } });
    var dirSeg = seg(w, t('Direction'), [{ value: 'across', label: t('Across a period') }, { value: 'down', label: t('Down a group') }], dir, function (v) { dir = v; fixChoice(); reset(); });
    var whichWrap = el('div', { class: 's31-which' });
    w.controls.appendChild(whichWrap);
    var whichSeg = null;

    function groupsAllowed() {
      // Only groups whose booklet values can be compared fairly. Left out: groups where the
      // first-listed ions have different charges (14, 15), and groups 13 and 14 where the
      // values are irregular for reasons outside the syllabus.
      if (prop === 'ea') return [1, 16, 17];
      if (prop === 'ion') return [1, 2, 13, 16, 17];
      if (prop === 'en') return [1, 2, 15, 16, 17];
      return [1, 2, 14, 15, 16, 17, 18];
    }
    function fixChoice() {
      var ga = groupsAllowed();
      if (ga.indexOf(group) === -1) group = ga[0];
      whichWrap.innerHTML = '';
      if (dir === 'across') whichSeg = seg(w, t('Which period'), [{ value: 2, label: t('Period 2') }, { value: 3, label: t('Period 3') }], period, function (v) { period = v; reset(); }, whichWrap);
      else whichSeg = seg(w, t('Which group'), ga.map(function (gg) { return { value: gg, label: String(gg) }; }), group, function (v) { group = v; reset(); }, whichWrap);
    }

    /* --- heat-map --- */
    var hm = w.canvas({ minWidth: 520, height: function (W) { return Math.round(Math.min(34, W / 18.6) * 6 + 40); },
      label: t('Heat-map of the chosen property on the periodic table, hydrogen to barium. A darker cell means a larger value. The selected period or group is outlined.') });
    var hmGeom = null;
    hm.draw(function (ctx, W, H) {
      var F = fonts(w), ink = w.color('--ink'), ink3 = w.color('--ink-3'), line = w.color('--line'), accent = w.color('--accent'), surface = w.color('--surface');
      var left = 22, top = 18, cw = (W - left - 2) / 18, ch = Math.min(34, W / 18.6);
      hmGeom = { left: left, top: top, cw: cw, ch: ch };
      var vals = [], z;
      for (z = 1; z <= 56; z++) { var v0 = val(z, prop); if (v0 != null) vals.push(prop === 'ea' ? -v0 : v0); }
      var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
      ctx.font = F.mono(10); ctx.fillStyle = ink3; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      for (var g = 1; g <= 18; g++) ctx.fillText(String(g), left + (g - 0.5) * cw, 9);
      for (var pr = 1; pr <= 6; pr++) ctx.fillText(String(pr), 10, top + (pr - 0.5) * ch);
      var selZs = currentZs();
      for (z = 1; z <= 56; z++) {
        var e = chem.element(z), v = val(z, prop);
        var x = left + (e.group - 1) * cw, y = top + (e.period - 1) * ch;
        ctx.fillStyle = surface; ctx.fillRect(x + 1, y + 1, cw - 2, ch - 2);
        if (v != null) {
          var fr = hi === lo ? 0.5 : ((prop === 'ea' ? -v : v) - lo) / (hi - lo);
          ctx.globalAlpha = 0.06 + 0.5 * fr; ctx.fillStyle = accent; ctx.fillRect(x + 1, y + 1, cw - 2, ch - 2); ctx.globalAlpha = 1;
        }
        ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.strokeRect(x + 1.5, y + 1.5, cw - 3, ch - 3);
        ctx.fillStyle = v == null ? ink3 : ink; ctx.font = F.mono(cw >= 30 ? 11 : 10, true);
        ctx.fillText(e.symbol, x + cw / 2, y + ch / 2 - (cw >= 34 && v != null ? 5 : 0));
        if (cw >= 34 && v != null) { ctx.font = F.mono(9); ctx.fillText(numTxt(v, prop), x + cw / 2, y + ch / 2 + 8); }
      }
      ctx.strokeStyle = ink; ctx.lineWidth = 2.5;
      selZs.forEach(function (zz) { var e2 = chem.element(zz); ctx.strokeRect(left + (e2.group - 1) * cw + 1.5, top + (e2.period - 1) * ch + 1.5, cw - 3, ch - 3); });
      ctx.font = F.body(11); ctx.fillStyle = ink3; ctx.textAlign = 'left';
      ctx.fillText(prop === 'ea' ? t('Darker = more negative value (more energy released). No tint = no value in the booklet.') : t('Darker = larger value. No tint = no value in the booklet.'), left, top + 6 * ch + 12);
    });
    hm.el.style.cursor = 'pointer';
    hm.el.addEventListener('click', function (ev) {
      if (!hmGeom) return;
      var r = hm.el.getBoundingClientRect(), x = ev.clientX - r.left, y = ev.clientY - r.top;
      var g = Math.floor((x - hmGeom.left) / hmGeom.cw) + 1, pr = Math.floor((y - hmGeom.top) / hmGeom.ch) + 1;
      if (dir === 'across') { if (pr === 2 || pr === 3) { period = pr; whichSeg.set(pr); reset(); } }
      else if (groupsAllowed().indexOf(g) !== -1) { group = g; whichSeg.set(g); reset(); }
    });

    /* --- prediction, graph, explanation builder --- */
    var ask = el('div', { class: 's31-ask' });
    var askQ = el('p', { class: 's31-ask__q' });
    var askBtns = el('div', { class: 'btn-row' });
    ask.appendChild(askQ); ask.appendChild(askBtns);
    var askFb = msgBox(ask);
    w.stage.appendChild(ask);
    var chartHost = el('div', { class: 's31-chart', hidden: true });
    w.stage.appendChild(chartHost);
    var chart = null;
    var builder = el('div', { class: 's31-builder', hidden: true });
    w.stage.appendChild(builder);
    var setVals = w.readoutItem(t('Data booklet values'), { text: true });

    function currentZs() {
      if (dir === 'across') { var a = PERIOD_Z[period], out = []; for (var z = a[0]; z <= a[1]; z++) out.push(z); return out; }
      return groupMembers(group);
    }
    function series() {
      return currentZs().filter(function (z) {
        if (val(z, prop) == null) return false;
        if (prop === 'radius' && dir === 'across' && chem.element(z).group === 18) return false;
        return true;
      }).map(function (z) {
        var e = chem.element(z);
        return { z: z, name: prop === 'ion' ? ionText(e.symbol, BK[z][4]) : e.symbol, value: val(z, prop) };
      });
    }
    function propName() {
      return prop === 'radius' ? t('atomic radius') : prop === 'ion' ? t('ionic radius') : prop === 'ie' ? t('first ionization energy') : prop === 'ea' ? t('electron affinity') : t('electronegativity');
    }
    function axisLabel() {
      return prop === 'radius' ? t('Atomic radius / pm') : prop === 'ion' ? t('Ionic radius / pm') : prop === 'ie' ? t('First ionization energy / kJ mol⁻¹') : prop === 'ea' ? t('Electron affinity / kJ mol⁻¹') : t('Electronegativity');
    }
    function whereText() { return dir === 'across' ? t('across period {n} (left to right)', { n: period }) : t('down group {g}', { g: group }); }
    function expected() {
      if (prop === 'ion' && dir === 'across') return 'mixed';
      if (prop === 'radius' || prop === 'ion') return dir === 'across' ? 'down' : 'up';
      if (prop === 'ea') return dir === 'across' ? 'neg' : 'pos';
      return dir === 'across' ? 'up' : 'down';
    }
    function model() {
      var v = { n: period, g: group };
      if (prop === 'radius') return dir === 'across'
        ? t('Across period {n} the nuclear charge increases. The outer electrons are in the same main energy level, so the shielding by inner electrons stays about the same. The nucleus attracts the outer electrons more strongly and pulls them closer. The atomic radius decreases.', v)
        : t('Down group {g} each atom has one more occupied main energy level. The outer electrons are further from the nucleus and are shielded by more inner electrons. This outweighs the greater nuclear charge. The atomic radius increases.', v);
      if (prop === 'ion') return dir === 'across'
        ? t('There are two parts. The positive ions come first. They have all lost their outer-level electrons, so they have one fewer occupied energy level than the negative ions. Along the positive ions the nuclear charge increases while the number of electrons stays the same, so the radius decreases. The negative ions have one more occupied energy level, so they are much larger. Along the negative ions the nuclear charge again increases, so the radius decreases again.', v)
        : t('Down group {g} each ion has one more occupied main energy level. The outer electrons are further from the nucleus and more shielded. The ionic radius increases.', v);
      if (prop === 'ie') return dir === 'across'
        ? t('Across period {n} the nuclear charge increases. The electron removed is in the same main energy level, so the shielding by inner electrons stays about the same. The outer electron is attracted more strongly, so more energy is needed to remove it. First ionization energy increases in general. The two small dips are explained in the Additional HL section.', v)
        : t('Down group {g} the electron removed is in a higher main energy level. It is further from the nucleus and shielded by more inner electrons. This outweighs the greater nuclear charge. The outer electron is attracted less strongly, so less energy is needed to remove it. First ionization energy decreases.', v);
      if (prop === 'en') return dir === 'across'
        ? t('Across period {n} the nuclear charge increases and the shielding by inner electrons stays about the same. The atoms get smaller. The nucleus attracts a shared pair of electrons more strongly. Electronegativity increases.', v)
        : t('Down group {g} the atoms have more occupied energy levels. A shared pair of electrons is further from the nucleus and more shielded, so it is attracted less strongly. Electronegativity decreases.', v);
      return dir === 'across'
        ? t('Across period {n} the nuclear charge increases and the shielding stays about the same. An added electron is attracted more strongly, so more energy is released. Electron affinity becomes more negative in general. The booklet data are not smooth: some elements have no value, and the pattern has steps.', v)
        : t('Down group {g} an added electron goes into a higher main energy level. It is further from the nucleus and more shielded, so it is attracted less strongly and less energy is released. Electron affinity becomes less negative in general. Check the graph for exceptions near the top of the group: the data are not a smooth trend.', v);
    }
    function ansLabel(k) {
      if (k === 'up') return t('It increases');
      if (k === 'down') return t('It decreases');
      if (k === 'neg') return t('It becomes more negative (more energy released)');
      if (k === 'pos') return t('It becomes less negative (less energy released)');
      return t('No single steady trend');
    }
    function reset() {
      revealed = false; guess = null;
      askFb.hide(); chartHost.hidden = true; builder.hidden = true; builder.innerHTML = '';
      askQ.innerHTML = t('Predict first: going {where}, what happens to the {prop}?', { where: whereText(), prop: propName() });
      askBtns.innerHTML = '';
      var opts = prop === 'ea' ? ['neg', 'pos', 'mixed'] : ['up', 'down', 'mixed'];
      opts.forEach(function (k) {
        var b = el('button', { class: 'btn btn--small', type: 'button', html: ansLabel(k) });
        b.addEventListener('click', function () { guess = k; reveal(); });
        askBtns.appendChild(b);
      });
      var skip = el('button', { class: 'btn btn--small btn--quiet', type: 'button', html: t('Show the data') });
      skip.addEventListener('click', function () { guess = null; reveal(); });
      askBtns.appendChild(skip);
      setVals(t('Hidden until you predict.'));
      hm.draw();
    }
    function reveal() {
      revealed = true;
      var exp = expected(), s = series();
      if (guess) {
        if (guess === exp) askFb.show('ok', p(t('Your prediction is right: {ans}.', { ans: ansLabel(exp) })));
        else askFb.show('bad', p(t('Not quite. The answer is: {ans}. Look at the graph, then build the explanation below.', { ans: ansLabel(exp) })));
      } else askFb.show('info', p(t('The answer is: {ans}.', { ans: ansLabel(exp) })));
      // Be honest about the data: list any step that goes against the general trend.
      if (exp !== 'mixed') {
        var wantUp = exp === 'up' || exp === 'pos', against = [], ties = false;
        for (var i = 1; i < s.length; i++) {
          var dv = s[i].value - s[i - 1].value;
          if (dv === 0) ties = true;
          else if ((dv > 0) !== wantUp) against.push(s[i - 1].name + ' ' + numTxt(s[i - 1].value, prop) + ' → ' + s[i].name + ' ' + numTxt(s[i].value, prop));
        }
        if (against.length) askFb.el.innerHTML += p(t('This is the general trend. The data booklet values are not perfectly regular. Going the other way: {list}. You only need to explain the general trend.', { list: against.join('; ') }));
        else if (ties) askFb.el.innerHTML += p(t('This is the general trend. Some neighbouring values in the data booklet are equal, because they are rounded.'));
      }
      chartHost.hidden = false;
      var vs = s.map(function (d) { return d.value; });
      var spec = {
        label: t('Line graph of {prop} {where}.', { prop: propName(), where: whereText() }) + ' ' + s.map(function (d) { return d.name + ' ' + numTxt(d.value, prop); }).join(', '),
        height: 250, categories: s.map(function (d) { return d.name; }),
        x: { label: prop === 'ion' ? t('Ion') : t('Element') },
        y: { label: axisLabel(), min: prop === 'ea' ? undefined : 0, max: prop === 'ea' ? 0 : undefined },
        series: [{ type: 'line', points: true, data: s.map(function (d, i) { return [i, d.value, numTxt(d.value, prop)]; }) }]
      };
      if (prop === 'ea') spec.y.min = Math.floor(Math.min.apply(null, vs) / 100) * 100;
      if (chart) chart.update(spec); else chart = S1.chart.plot(chartHost, spec);
      setVals(s.map(function (d) { return d.name + ' ' + numTxt(d.value, prop); }).join(', ') + (prop === 'en' ? '' : ' ' + (prop === 'ie' || prop === 'ea' ? 'kJ mol<sup>−1</sup>' : 'pm')) +
        (prop === 'radius' && dir === 'across' ? ' ' + t('(Group 18 is not plotted.)') : ''));
      buildExplain();
    }
    function buildExplain() {
      builder.hidden = false; builder.innerHTML = '';
      if (prop === 'ion' && dir === 'across') {
        builder.appendChild(el('p', { class: 's31-builder__title', html: t('Explanation') }));
        builder.appendChild(el('p', { html: model() }));
        return;
      }
      builder.appendChild(el('p', { class: 's31-builder__title', html: t('Build the explanation: choose one option in each row, going {where}.', { where: whereText() }) }));
      var rows = [
        { key: 'z', label: t('1. Nuclear charge (number of protons)'), opts: [['up', t('increases')], ['same', t('stays the same')], ['down', t('decreases')]], ans: 'up' },
        { key: 's', label: t('2. Shielding by inner electrons'), opts: [['up', t('increases')], ['same', t('stays about the same')], ['down', t('decreases')]], ans: dir === 'across' ? 'same' : 'up' },
        { key: 'd', label: t('3. The outer electrons are'), opts: [['same', t('in the same main energy level')], ['far', t('in a higher main energy level, further from the nucleus')]], ans: dir === 'across' ? 'same' : 'far' }
      ];
      var sels = rows.map(function (r) {
        var id = S1.util.uid('s31b');
        var s = el('select', { class: 'select', id: id });
        s.appendChild(el('option', { value: '', html: t('choose…') }));
        r.opts.forEach(function (o) { s.appendChild(el('option', { value: o[0], html: o[1] })); });
        builder.appendChild(el('div', { class: 's31-builder__row' }, [el('label', { for: id, html: r.label }), s]));
        return s;
      });
      var out = msgBox();
      var btn = el('button', { class: 'btn btn--small btn--primary', type: 'button', html: t('Check my explanation') });
      btn.addEventListener('click', function () {
        if (sels.some(function (s) { return !s.value; })) { out.show('warn', p(t('Choose an option in all three rows first.'))); return; }
        var good = 0, lines = rows.map(function (r, i) {
          var ok = sels[i].value === r.ans; if (ok) good++;
          var right = r.opts.filter(function (o) { return o[0] === r.ans; })[0][1];
          return '<li>' + (ok ? t('Right: {label} — {right}.', { label: r.label, right: right }) : t('Change this: {label} — {right}.', { label: r.label, right: right })) + '</li>';
        });
        var extra = dir === 'across' ? '' : p(t('Notice that the nuclear charge increases down a group as well. The extra energy levels and extra shielding matter more.'));
        out.show(good === 3 ? 'ok' : 'bad', '<ul>' + lines.join('') + '</ul>' + extra + p('<b>' + t('Model answer.') + '</b> ' + model()));
      });
      builder.appendChild(el('div', { class: 'btn-row s31-gap' }, [btn]));
      builder.appendChild(out.el);
    }
    fixChoice(); reset();
    void dirSeg; void revealed;
  });

  /* ==========================================================================
     3. Ions with the same electron configuration
     ========================================================================== */
  var ISO = [[7, -3], [8, -2], [9, -1], [11, 1], [12, 2], [13, 3]];

  S1.widgets.register('s3-1.iso', function (w) {
    var shown = false, pick = 0;
    var ask = el('div', { class: 's31-ask' });
    ask.appendChild(el('p', { class: 's31-ask__q', html: t('Predict first: these six ions all have 10 electrons (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>). Which statement is correct?') }));
    var row = el('div', { class: 'btn-row' });
    var fb = msgBox();
    [['n', t('The nitride ion is the largest')], ['al', t('The aluminium ion is the largest')], ['same', t('They are all the same size')]].forEach(function (o) {
      var b = el('button', { class: 'btn btn--small', type: 'button', html: o[1] });
      b.addEventListener('click', function () {
        shown = true;
        if (o[0] === 'n') fb.show('ok', p(t('Correct. The nitride ion has the fewest protons (7) pulling on the same 10 electrons, so it is the largest.')));
        else if (o[0] === 'al') fb.show('bad', p(t('Not quite. The aluminium ion has the most protons (13) pulling on the same 10 electrons, so it is the smallest. The nitride ion is the largest.')));
        else fb.show('bad', p(t('Not quite. The electrons are the same, but the nuclear charge is not. More protons pull the same 10 electrons closer.')));
        update();
      });
      row.appendChild(b);
    });
    ask.appendChild(row); ask.appendChild(fb.el);
    w.stage.appendChild(ask);
    var sl = w.slider({ label: t('Choose an ion (1 = nitride … 6 = aluminium)'), min: 1, max: 6, step: 1, value: 1, onInput: function (v) { pick = Math.round(v) - 1; update(); } });
    var setIon = w.readoutItem(t('Ion'));
    var setP = w.readoutItem(t('Protons'));
    var setE = w.readoutItem(t('Electrons'));
    var setR = w.readoutItem(t('Ionic radius'));
    var setNote = w.readoutItem(t('Why'), { text: true });
    var cv = w.canvas({ height: 150, label: t('Six ions drawn as circles to scale: nitride, oxide, fluoride, sodium, magnesium and aluminium. The circles get smaller from left to right as the number of protons rises from 7 to 13.') });
    cv.draw(function (ctx, W, H) {
      var F = fonts(w), ink = w.color('--ink'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), soft = w.color('--accent-soft'), line = w.color('--line-strong');
      var total = 0; ISO.forEach(function (d) { total += 2 * (shown ? BK[d[0]][5] : 100); });
      var gap = 8, scale = Math.min((W - 16 - gap * 5) / total, 0.36), x = (W - (total * scale + gap * 5)) / 2, cy = 62;
      ISO.forEach(function (d, i) {
        var e = chem.element(d[0]), r = (shown ? BK[d[0]][5] : 100) * scale;
        ctx.beginPath(); ctx.arc(x + r, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = shown ? soft : w.color('--surface-2'); ctx.fill();
        ctx.strokeStyle = i === pick ? ink : (shown ? accent : line); ctx.lineWidth = i === pick ? 3 : 1.5; ctx.stroke();
        ctx.fillStyle = ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = F.mono(r > 16 ? 12 : 10, true);
        ctx.fillText(shown ? '+' + d[0] : '?', x + r, cy);
        ctx.font = F.mono(12, i === pick); ctx.fillStyle = i === pick ? ink : ink3;
        ctx.fillText(ionText(e.symbol, d[1]), x + r, 124);
        if (shown) { ctx.font = F.mono(10); ctx.fillText(BK[d[0]][5] + ' pm', x + r, 140); }
        x += 2 * r + gap;
      });
      ctx.font = F.body(11); ctx.fillStyle = ink3; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(shown ? t('Drawn to scale. The number is the nuclear charge.') : t('Sizes hidden until you predict.'), 4, 12);
    });
    function update() {
      var d = ISO[pick], e = chem.element(d[0]);
      setIon(ionHtml(e.symbol, d[1]));
      setP(String(d[0])); setE('10');
      setR(shown ? BK[d[0]][5] + ' pm' : '?');
      setNote(shown ? t('All six ions have the same electron configuration, so the shielding is the same. The nuclear charge rises from +7 to +13. A greater nuclear charge pulls the same 10 electrons closer, so the ion is smaller.') : t('Make a prediction to see the sizes.'));
      cv.draw();
    }
    update();
    void sl;
  });

  /* ==========================================================================
     4. Group 1 metals with water
     ========================================================================== */
  var G1 = [3, 11, 19, 37, 55];

  S1.widgets.register('s3-1.group1', function (w) {
    var z = Number(w.options.start) || 11;
    seg(w, t('Group 1 metal added to water'), G1.map(function (zz) { return { value: zz, label: chem.element(zz).symbol }; }), z, function (v) { z = v; update(); });
    var panel = el('div', { class: 's31-panel' });
    w.stage.appendChild(panel);
    var cv = w.canvas({ height: 190, label: t('Bar chart of the first ionization energies of the group 1 metals. The values fall from lithium, 520, to caesium, 376 kilojoules per mole.') });
    cv.draw(function (ctx, W, H) {
      var F = fonts(w), ink = w.color('--ink'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), bar = w.color('--line-strong'), line = w.color('--line');
      var left = 44, bottom = H - 30, top = 26, bw = Math.min(56, (W - left - 10) / 5 - 12), slot = (W - left - 10) / 5;
      ctx.font = F.body(11); ctx.fillStyle = ink3; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(t('First ionization energy / kJ mol⁻¹ (data booklet)'), 2, 12);
      ctx.font = F.mono(10); ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      [0, 200, 400, 600].forEach(function (v) {
        var y = bottom - v / 600 * (bottom - top);
        ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(W - 6, y); ctx.stroke();
        ctx.fillStyle = ink3; ctx.fillText(String(v), left - 6, y);
      });
      G1.forEach(function (zz, i) {
        var v = BK[zz][0], x = left + i * slot + (slot - bw) / 2, y = bottom - v / 600 * (bottom - top), sel = zz === z;
        ctx.fillStyle = sel ? accent : bar; ctx.fillRect(x, y, bw, bottom - y);
        if (sel) { ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.strokeRect(x, y, bw, bottom - y); }
        ctx.fillStyle = ink; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.font = F.mono(11, sel);
        ctx.fillText(String(v), x + bw / 2, y - 5);
        ctx.fillText(chem.element(zz).symbol, x + bw / 2, bottom + 16);
      });
    });
    var setM = w.readoutItem(t('Metal'));
    var setIE = w.readoutItem(t('First ionization energy'));
    var setR = w.readoutItem(t('Atomic radius'));
    var setWhy = w.readoutItem(t('Why the reaction gets more vigorous down the group'), { text: true });

    function obs(zz) {
      if (zz === 3) return [t('It floats on the water.'), t('It fizzes steadily. Bubbles of hydrogen gas form.'), t('It moves slowly on the surface and gets smaller until it disappears.'), t('It does not melt.')];
      if (zz === 11) return [t('It floats on the water.'), t('It melts into a shiny ball. The reaction releases heat.'), t('It fizzes quickly and moves quickly across the surface.'), t('It gets smaller until it disappears. The hydrogen sometimes catches fire.')];
      if (zz === 19) return [t('It floats on the water.'), t('It melts into a ball at once.'), t('It fizzes very quickly and moves very quickly.'), t('The hydrogen catches fire at once and burns with a lilac flame.')];
      if (zz === 37) return [t('It reacts violently as soon as it touches the water.'), t('The reaction is explosive.'), t('It is too dangerous for a school laboratory. You study it with videos or simulations.')];
      return [t('It reacts explosively as soon as it touches the water.'), t('This is the most vigorous reaction of the five metals shown.'), t('It is too dangerous for a school laboratory. You study it with videos or simulations.')];
    }
    function update() {
      var e = chem.element(z), s = e.symbol;
      panel.innerHTML = '<p class="s31-panel__title">' + t('What you observe: {name} + water', { name: elName(e) }) + '</p><ul>' +
        obs(z).map(function (o) { return '<li>' + o + '</li>'; }).join('') +
        '<li>' + t('The solution left behind is alkaline. It contains hydroxide ions.') + '</li></ul>' +
        '<p class="s31-panel__title">' + t('Equation') + '</p>' +
        '<p class="s31-eq">' + f('2' + s + '(s) + 2H2O(l) -> 2' + s + 'OH(aq) + H2(g)') + '</p>';
      setM(t('{symbol} ({name})', { symbol: s, name: elName(e) }));
      setIE(BK[z][0] + ' kJ mol<sup>−1</sup>');
      setR(BK[z][3] + ' pm');
      setWhy(t('Each atom loses its one outer electron to form a 1+ ion. Going down the group, the outer electron is in a higher main energy level. It is further from the nucleus and shielded by more inner electrons, so it is attracted less strongly and is lost more easily. Metallic character increases down group 1.'));
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     5. Halogen + halide ion displacement grid
     ========================================================================== */
  var HAL = [{ s: 'Cl', z: 17 }, { s: 'Br', z: 35 }, { s: 'I', z: 53 }];

  S1.widgets.register('s3-1.halogens', function (w) {
    var guess = {}, checked = false, cellEls = {};
    function halName(i) { return i === 0 ? t('chlorine') : i === 1 ? t('bromine') : t('iodine'); }
    function halideName(i) { return i === 0 ? t('chloride') : i === 1 ? t('bromide') : t('iodide'); }
    w.stage.appendChild(el('p', { class: 's31-ask__q', html: t('Predict: for each mixture, choose “Reacts” or “No reaction”. Then check.') }));
    var wrap = el('div', { class: 'table-scroll' });
    var table = el('table', { class: 'data s31-grid' });
    var thead = el('tr', null, [el('th', { scope: 'col', html: t('Halogen added') })]);
    HAL.forEach(function (h, j) { thead.appendChild(el('th', { scope: 'col', html: t('{name} ions', { name: halideName(j) }) + ' ' + f(h.s + '-') + '(aq)' })); });
    table.appendChild(el('thead', null, [thead]));
    var tbody = el('tbody');
    HAL.forEach(function (h, i) {
      var tr = el('tr', null, [el('th', { scope: 'row', html: halName(i) + ' ' + f(h.s + '2') + '(aq)' })]);
      HAL.forEach(function (h2, j) {
        var td = el('td');
        if (i === j) td.appendChild(el('span', { class: 'muted', html: t('same element: no change') }));
        else {
          var key = i + '-' + j, group = el('div', { class: 's31-yn', role: 'group' });
          group.setAttribute('aria-label', t('{halogen} with {halide} ions', { halogen: halName(i), halide: halideName(j) }));
          var by = el('button', { class: 'btn btn--small', type: 'button', 'aria-pressed': 'false', html: t('Reacts') });
          var bn = el('button', { class: 'btn btn--small', type: 'button', 'aria-pressed': 'false', html: t('No reaction') });
          var mark = el('div', { class: 's31-yn__mark' });
          by.addEventListener('click', function () { set(key, true); });
          bn.addEventListener('click', function () { set(key, false); });
          group.appendChild(by); group.appendChild(bn);
          td.appendChild(group); td.appendChild(mark);
          cellEls[key] = { y: by, n: bn, mark: mark, i: i, j: j };
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody); wrap.appendChild(table); w.stage.appendChild(wrap);
    var out = msgBox();
    var checkBtn = el('button', { class: 'btn btn--small btn--primary', type: 'button', html: t('Check my predictions') });
    var resetBtn = el('button', { class: 'btn btn--small btn--quiet', type: 'button', html: t('Start again') });
    checkBtn.addEventListener('click', check);
    resetBtn.addEventListener('click', function () { guess = {}; checked = false; out.hide(); paint(); setScore(MINUS); });
    w.stage.appendChild(el('div', { class: 'btn-row s31-gap' }, [checkBtn, resetBtn]));
    w.stage.appendChild(out.el);
    var setScore = w.readoutItem(t('Correct predictions'));
    var setRule = w.readoutItem(t('The rule'), { text: true });

    function set(key, v) { guess[key] = v; checked = false; paint(); }
    function reacts(c) { return c.i < c.j; }
    function paint() {
      Object.keys(cellEls).forEach(function (k) {
        var c = cellEls[k];
        c.y.setAttribute('aria-pressed', String(guess[k] === true));
        c.n.setAttribute('aria-pressed', String(guess[k] === false));
        if (!checked) { c.mark.textContent = ''; c.mark.removeAttribute('data-tone'); }
      });
    }
    function check() {
      var keys = Object.keys(cellEls);
      if (keys.some(function (k) { return guess[k] == null; })) { out.show('warn', p(t('Make a prediction for all six mixtures first.'))); return; }
      checked = true;
      var right = 0;
      keys.forEach(function (k) {
        var c = cellEls[k], ok = guess[k] === reacts(c);
        if (ok) right++;
        c.mark.setAttribute('data-tone', ok ? 'ok' : 'bad');
        c.mark.innerHTML = (ok ? t('Right') : t('Wrong')) + ': ' + (reacts(c) ? (c.j === 2 ? t('reacts, solution turns brown') : t('reacts, solution turns yellow-orange')) : t('no reaction'));
      });
      setScore(t('{n} of 6', { n: right }));
      out.show(right === 6 ? 'ok' : 'info',
        p(t('Three mixtures react. In each one, the halogen higher in group 17 takes electrons from the halide ion of a halogen lower in the group.')) +
        '<p class="s31-eq">' + f('Cl2(aq) + 2Br-(aq) -> 2Cl-(aq) + Br2(aq)') + '</p>' +
        '<p class="s31-eq">' + f('Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)') + '</p>' +
        '<p class="s31-eq">' + f('Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)') + '</p>' +
        p(t('Bromine in solution is yellow-orange. Iodine in solution is brown. Iodine does not displace chloride or bromide ions, and bromine does not displace chloride ions.')));
    }
    setScore(MINUS);
    setRule(t('A halogen atom gains one electron to form a 1− ion. Going down group 17, the outer energy level is further from the nucleus and more shielded, so an extra electron is attracted less strongly. Chlorine gains electrons most easily of these three, and iodine least easily. Non-metallic character decreases down group 17.'));
    paint();
  });

  /* ==========================================================================
     6. Oxides across period 3
     ========================================================================== */
  S1.widgets.register('s3-1.oxides', function (w) {
    var OX = [
      { fm: 'Na2O', name: t('sodium oxide'), cls: t('metal'), bond: t('ionic; giant ionic lattice'), ab: 'basic', ph: 13,
        water: t('It reacts with water and dissolves. The solution is strongly alkaline: the pH is well above 7.'), eq: 'Na2O(s) + H2O(l) -> 2NaOH(aq)', req: true },
      { fm: 'MgO', name: t('magnesium oxide'), cls: t('metal'), bond: t('ionic; giant ionic lattice'), ab: 'basic', ph: 9.5,
        water: t('It reacts only slightly with water, because very little dissolves. The solution is weakly alkaline: the pH is a little above 7.'), eq: 'MgO(s) + H2O(l) -> Mg(OH)2(aq)', req: true },
      { fm: 'Al2O3', name: t('aluminium oxide'), cls: t('metal'), bond: t('ionic; giant ionic lattice'), ab: 'amphoteric', ph: 7,
        water: t('It does not dissolve in water, so the pH stays at 7. It is amphoteric: it can react with acids and with bases.'), eq: null, req: false },
      { fm: 'SiO2', name: t('silicon dioxide'), cls: t('metalloid'), bond: t('covalent; covalent network structure'), ab: 'acidic', ph: 7,
        water: t('It does not dissolve in water, so the pH stays at 7. It is still an acidic oxide, because it reacts with bases.'), eq: null, req: false },
      { fm: 'P4O10', name: t('phosphorus(V) oxide'), cls: t('non-metal'), bond: t('covalent; molecular'), ab: 'acidic', ph: 1.5,
        water: t('It reacts with water to form an acid. The solution is acidic: the pH is well below 7.'), eq: null, req: false },
      { fm: 'SO3', name: t('sulfur trioxide'), cls: t('non-metal'), bond: t('covalent; molecular'), ab: 'acidic', ph: 1,
        water: t('It reacts with water to form sulfuric acid. The solution is strongly acidic: the pH is well below 7. Sulfur dioxide, the other oxide of sulfur, forms a weaker acid.'), eq: 'SO3(g) + H2O(l) -> H2SO4(aq)', req: true },
      { fm: 'Cl2O7', name: t('dichlorine heptoxide'), cls: t('non-metal'), bond: t('covalent; molecular'), ab: 'acidic', ph: 1,
        water: t('It reacts with water to form an acid. The solution is strongly acidic: the pH is well below 7.'), eq: null, req: false }
    ];
    var i = Math.max(0, Math.min(6, (Number(w.options.start) || 1) - 1));
    w.slider({ label: t('Move across period 3 (1 = sodium oxide … 7 = an oxide of chlorine)'), min: 1, max: 7, step: 1, value: i + 1, onInput: function (v) { i = Math.round(v) - 1; update(); } });
    var svg = w.svg('0 0 700 250', { label: t('The oxides of period 3 in a row from sodium oxide to an oxide of chlorine. Below them, a band shows the change from basic, through amphoteric, to acidic. A marker on a pH line shows whether the mixture with water is alkaline, neutral or acidic.') });
    var setOx = w.readoutItem(t('Oxide'));
    var setCls = w.readoutItem(t('Element is a'));
    var setBond = w.readoutItem(t('Bonding and structure'));
    var setAb = w.readoutItem(t('Acid–base character'));
    var setWater = w.readoutItem(t('With water'), { text: true });
    var setEq = w.readoutItem(t('Equation with water'), { text: true });

    function abText(k) { return k === 'basic' ? t('basic') : k === 'amphoteric' ? t('amphoteric') : t('acidic'); }
    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var bw = 92, gap = 8, x0 = 4;
      OX.forEach(function (o, k) {
        var x = x0 + k * (bw + gap), sel = k === i;
        svgEl('rect', { x: x, y: 8, width: bw, height: 54, fill: sel ? 'var(--accent-soft)' : 'var(--surface-2)', stroke: sel ? 'var(--ink)' : 'var(--line-strong)', 'stroke-width': sel ? 3 : 1.5 }, svg);
        var tx = svgEl('text', { x: x + bw / 2, y: 42, 'text-anchor': 'middle', 'font-size': 20, 'font-weight': sel ? 700 : 400, fill: 'var(--ink)', 'font-family': 'var(--font-mono)' }, svg);
        o.fm.split(/(\d+)/).forEach(function (part) {
          if (!part) return;
          if (/^\d+$/.test(part)) svgEl('tspan', { 'baseline-shift': 'sub', 'font-size': 13, text: part }, tx); else svgEl('tspan', { text: part }, tx);
        });
        // character band
        svgEl('rect', { x: x, y: 72, width: bw, height: 30, fill: o.ab === 'amphoteric' ? 'var(--surface)' : o.ab === 'basic' ? 'var(--surface-2)' : 'var(--ink-2)', stroke: 'var(--line-strong)', 'stroke-width': 1.5 }, svg);
        svgEl('text', { x: x + bw / 2, y: 92, 'text-anchor': 'middle', 'font-size': 14, fill: o.ab === 'acidic' ? 'var(--paper)' : 'var(--ink)', 'font-family': 'var(--font-body)', text: abText(o.ab) }, svg);
      });
      svgEl('text', { x: 4, y: 132, 'font-size': 14, fill: 'var(--ink-2)', 'font-family': 'var(--font-body)', text: t('metal oxides') }, svg);
      svgEl('text', { x: 696, y: 132, 'text-anchor': 'end', 'font-size': 14, fill: 'var(--ink-2)', 'font-family': 'var(--font-body)', text: t('non-metal oxides') }, svg);
      // qualitative pH line
      var lx = 60, rx = 640, y = 190;
      function X(ph) { return rx - ph / 14 * (rx - lx); }   // acidic on the right, under the non-metal oxides
      svgEl('line', { x1: lx, y1: y, x2: rx, y2: y, stroke: 'var(--ink)', 'stroke-width': 2 }, svg);
      svgEl('line', { x1: X(7), y1: y - 8, x2: X(7), y2: y + 8, stroke: 'var(--ink)', 'stroke-width': 2 }, svg);
      svgEl('text', { x: X(7), y: y + 26, 'text-anchor': 'middle', 'font-size': 14, fill: 'var(--ink)', 'font-family': 'var(--font-mono)', text: 'pH 7' }, svg);
      svgEl('text', { x: lx, y: y + 26, 'text-anchor': 'start', 'font-size': 14, fill: 'var(--ink-2)', 'font-family': 'var(--font-body)', text: t('alkaline (pH above 7)') }, svg);
      svgEl('text', { x: rx, y: y + 26, 'text-anchor': 'end', 'font-size': 14, fill: 'var(--ink-2)', 'font-family': 'var(--font-body)', text: t('acidic (pH below 7)') }, svg);
      var mx = X(OX[i].ph);
      svgEl('path', { d: 'M' + mx + ' ' + (y - 6) + ' l-9 -16 h18 z', fill: 'var(--accent)', stroke: 'var(--ink)', 'stroke-width': 1.5 }, svg);
      svgEl('text', { x: Math.max(90, Math.min(610, mx)), y: y - 30, 'text-anchor': 'middle', 'font-size': 14, fill: 'var(--ink)', 'font-family': 'var(--font-body)', text: t('{oxide} mixed with water (position is approximate)', { oxide: OX[i].name }) }, svg);
    }
    function update() {
      var o = OX[i];
      setOx(f(o.fm) + ' ' + o.name);
      setCls(o.cls); setBond(o.bond); setAb(abText(o.ab));
      setWater(o.water);
      setEq(o.eq ? '<span class="s31-eq">' + f(o.eq) + '</span> ' + t('(You must be able to write this equation.)') : t('Not required. You only need equations for the oxides of group 1 metals, group 2 metals, carbon and sulfur.'));
      draw();
    }
    w.onTheme(draw);
    update();
  });

  /* ==========================================================================
     7. Oxidation state trainer
     ========================================================================== */
  S1.widgets.register('s3-1.oxstate', function (w) {
    function rule(k) {
      if (k === 'O') return t('Oxygen is −2 in most compounds.');
      if (k === 'H') return t('Hydrogen is +1 when it is bonded to a non-metal.');
      if (k === 'G1') return t('A group 1 metal is always +1 in its compounds.');
      if (k === 'G2') return t('A group 2 metal is always +2 in its compounds.');
      if (k === 'F') return t('Fluorine is always −1 in its compounds.');
      return t('A monatomic ion has an oxidation state equal to its charge. The chloride ion has a 1− charge, so chlorine is −1 here.');
    }
    // f: formula, x: target element, n: atoms of the target, k: known atoms [symbol, count, oxidation state, rule], q: overall charge, a: answer
    var SETS = {
      1: [
        { f: 'MgO', x: 'Mg', n: 1, k: [['O', 1, -2, 'O']], q: 0, a: 2, name: t('magnesium oxide') },
        { f: 'CO2', x: 'C', n: 1, k: [['O', 2, -2, 'O']], q: 0, a: 4, name: t('carbon dioxide') },
        { f: 'Cl2', x: 'Cl', n: 2, k: [], q: 0, a: 0, name: t('chlorine'), note: t('This is an element. The two atoms are identical, so they share the bonding electrons equally. No electrons are transferred, so the oxidation state is 0.') },
        { f: 'H2S', x: 'S', n: 1, k: [['H', 2, 1, 'H']], q: 0, a: -2, name: t('hydrogen sulfide') },
        { f: 'FeCl3', x: 'Fe', n: 1, k: [['Cl', 3, -1, 'ion']], q: 0, a: 3, name: t('iron(III) chloride. The Roman numeral shows the oxidation state of the iron.') },
        { f: 'SO3', x: 'S', n: 1, k: [['O', 3, -2, 'O']], q: 0, a: 6, name: t('sulfur trioxide, or sulfur(VI) oxide') },
        { f: 'NH3', x: 'N', n: 1, k: [['H', 3, 1, 'H']], q: 0, a: -3, name: t('ammonia') }
      ],
      2: [
        { f: 'SO4^2-', x: 'S', n: 1, k: [['O', 4, -2, 'O']], q: -2, a: 6, name: t('sulfate. The systematic name is sulfate(VI).') },
        { f: 'NO3-', x: 'N', n: 1, k: [['O', 3, -2, 'O']], q: -1, a: 5, name: t('nitrate. The systematic name is nitrate(V).') },
        { f: 'Fe2O3', x: 'Fe', n: 2, k: [['O', 3, -2, 'O']], q: 0, a: 3, name: t('iron(III) oxide') },
        { f: 'NO2-', x: 'N', n: 1, k: [['O', 2, -2, 'O']], q: -1, a: 3, name: t('nitrite. The systematic name is nitrate(III).') },
        { f: 'H2SO4', x: 'S', n: 1, k: [['H', 2, 1, 'H'], ['O', 4, -2, 'O']], q: 0, a: 6, name: t('sulfuric acid') },
        { f: 'SO3^2-', x: 'S', n: 1, k: [['O', 3, -2, 'O']], q: -2, a: 4, name: t('sulfite. The systematic name is sulfate(IV).') },
        { f: 'NH4+', x: 'N', n: 1, k: [['H', 4, 1, 'H']], q: 1, a: -3, name: t('ammonium') },
        { f: 'KMnO4', x: 'Mn', n: 1, k: [['K', 1, 1, 'G1'], ['O', 4, -2, 'O']], q: 0, a: 7, name: t('potassium manganate(VII)') },
        { f: 'Cr2O7^2-', x: 'Cr', n: 2, k: [['O', 7, -2, 'O']], q: -2, a: 6, name: t('dichromate(VI)') }
      ],
      3: [
        { f: 'H2O2', x: 'O', n: 2, k: [['H', 2, 1, 'H']], q: 0, a: -1, name: t('hydrogen peroxide'), note: t('This is the peroxide exception. Oxygen is −1 in peroxides, not −2. You do not need to remember the answer if you start from hydrogen, +1.') },
        { f: 'NaH', x: 'H', n: 1, k: [['Na', 1, 1, 'G1']], q: 0, a: -1, name: t('sodium hydride'), note: t('This is the metal hydride exception. The group 1 metal must be +1, so hydrogen is −1 here, not +1.') },
        { f: 'Na2O2', x: 'O', n: 2, k: [['Na', 2, 1, 'G1']], q: 0, a: -1, name: t('sodium peroxide'), note: t('This is the peroxide exception. The group 1 metal must be +1, so each oxygen is −1.') },
        { f: 'CaH2', x: 'H', n: 2, k: [['Ca', 1, 2, 'G2']], q: 0, a: -1, name: t('calcium hydride'), note: t('This is the metal hydride exception. The group 2 metal must be +2, so each hydrogen is −1.') },
        { f: 'OF2', x: 'O', n: 1, k: [['F', 2, -1, 'F']], q: 0, a: 2, name: t('oxygen difluoride'), note: t('Fluorine is always −1, so oxygen is positive here. Start from the atom whose rule has no exceptions.') },
        { f: 'K2Cr2O7', x: 'Cr', n: 2, k: [['K', 2, 1, 'G1'], ['O', 7, -2, 'O']], q: 0, a: 6, name: t('potassium dichromate(VI)') },
        { f: 'BaO2', x: 'O', n: 2, k: [['Ba', 1, 2, 'G2']], q: 0, a: -1, name: t('barium peroxide'), note: t('This is the peroxide exception. The group 2 metal must be +2, so each oxygen is −1.') }
      ]
    };
    var level = 1, idx = 0, done = 0;
    seg(w, t('Level'), [{ value: 1, label: t('1 Simple compounds') }, { value: 2, label: t('2 Ions and three elements') }, { value: 3, label: t('3 Exceptions') }], level, function (v) { level = v; idx = 0; start(); });
    w.button(t('Next species'), function () { idx = (idx + 1) % SETS[level].length; start(); });
    var box = el('div', { class: 's31-ox' });
    w.stage.appendChild(box);
    var setSp = w.readoutItem(t('Species'));
    var setProg = w.readoutItem(t('Species in this level'));
    var setDone = w.readoutItem(t('Completed'));

    function elementName(sym) { return elName(chem.element(sym)); }
    function choiceRow(parent, question, options, answer, onRight, wrongMsg) {
      var step = el('div', { class: 's31-ox__step' });
      step.appendChild(el('p', { class: 's31-ask__q', html: question }));
      var row = el('div', { class: 'btn-row' }), fb = msgBox();
      options.forEach(function (o) {
        var b = el('button', { class: 'btn btn--small', type: 'button', html: signed(o) });
        b.addEventListener('click', function () {
          if (o === answer) {
            Array.prototype.forEach.call(row.children, function (c) { c.disabled = true; });
            b.setAttribute('aria-pressed', 'true');
            fb.show('ok', p(onRight.msg));
            onRight.next();
          } else fb.show('bad', p(wrongMsg));
        });
        row.appendChild(b);
      });
      step.appendChild(row); step.appendChild(fb.el);
      parent.appendChild(step);
    }
    function start() {
      var s = SETS[level][idx];
      box.innerHTML = '';
      setSp(f(s.f)); setProg(t('{i} of {n}', { i: idx + 1, n: SETS[level].length })); setDone(String(done));
      box.appendChild(el('p', { class: 's31-ox__species', html: f(s.f) }));
      box.appendChild(el('p', { html: t('Find the oxidation state of {el} in this species.', { el: '<b>' + elementName(s.x) + ' (' + s.x + ')</b>' }) }));
      var kIndex = 0;
      choiceRow(box, t('Step 1. What must all the oxidation states add up to?'), [-2, -1, 0, 1, 2], s.q,
        { msg: s.q === 0 ? t('Right. There is no overall charge, so the oxidation states add up to 0.') : t('Right. The oxidation states add up to the charge on the ion: {q}.', { q: signed(s.q) }), next: nextKnown },
        t('Not that. The total equals the overall charge on the species. A neutral compound or element has a total of 0.'));
      function nextKnown() {
        if (kIndex >= s.k.length) { finalStep(); return; }
        var k = s.k[kIndex++];
        choiceRow(box, t('Step {n}. What is the oxidation state of each {el} atom here?', { n: kIndex + 1, el: elementName(k[0]) + ' (' + k[0] + ')' }), [-2, -1, 0, 1, 2], k[2],
          { msg: t('Right: {os}.', { os: signed(k[2]) }) + ' ' + rule(k[3]), next: nextKnown },
          t('Not that. Use the rule:') + ' ' + rule(k[3]));
      }
      function finalStep() {
        var terms = s.k.map(function (k) { return (k[1] > 1 ? k[1] : '') + '(' + signed(k[2]) + ')'; });
        terms.push((s.n > 1 ? s.n : '') + '<i>x</i>');
        var eqn = terms.join(' + ') + ' = ' + signed(s.q);
        var step = el('div', { class: 's31-ox__step' });
        step.appendChild(el('p', { class: 's31-ask__q', html: t('Step {n}. Let the oxidation state of {el} be x. Solve for x.', { n: s.k.length + 2, el: s.x }) }));
        step.appendChild(el('div', { class: 'worked__math', 'data-i18n': 'off', html: eqn }));
        var id = S1.util.uid('s31x');
        var input = el('input', { class: 'input input--num', type: 'text', id: id, autocomplete: 'off', inputmode: 'text', size: 6 });
        var btn = el('button', { class: 'btn btn--small btn--primary', type: 'button', html: t('Check') });
        var fb = msgBox();
        step.appendChild(el('div', { class: 'btn-row s31-gap' }, [el('label', { for: id, html: t('x =') }), input, btn]));
        step.appendChild(fb.el);
        box.appendChild(step);
        function check() {
          var raw = input.value.replace(/\s+/g, '').replace(/[−–]/g, '-');
          var m1 = /^([+-]?)(\d+)$/.exec(raw), m2 = /^(\d+)([+-])$/.exec(raw);
          if (!m1 && !m2) { fb.show('warn', p(t('Type a whole number with its sign, for example +4 or −2.'))); return; }
          var value = m1 ? Number(m1[2]) * (m1[1] === '-' ? -1 : 1) : Number(m2[1]) * (m2[2] === '-' ? -1 : 1);
          if (value !== s.a) {
            fb.show('bad', p(value === -s.a && s.a !== 0 ? t('The size is right but the sign is wrong. Check the signs in the equation.') : value === s.a * s.n && s.n > 1 ? t('That is the total for all {n} atoms. Divide by {n} to get the oxidation state of one atom.', { n: s.n }) : t('Not that. Add up the known values, then find what x must be to reach the total.')));
            return;
          }
          var style = '';
          if (m2) style = p(t('Write the sign first: {a}, not {b}. A sign after the number means an ion charge, and it does not earn the mark.', { a: signed(s.a), b: Math.abs(s.a) + (s.a < 0 ? MINUS : '+') }));
          else if (s.a > 0 && m1[1] !== '+') style = p(t('Include the + sign: write {a}. A number with no sign does not earn the mark.', { a: signed(s.a) }));
          done++; setDone(String(done));
          input.disabled = true; btn.disabled = true;
          fb.show(style ? 'warn' : 'ok', p(t('Correct: the oxidation state of {el} is {a}.', { el: s.x, a: '<b>' + signed(s.a) + '</b>' })) + style +
            p(t('Name: {name}', { name: s.name })) + (s.note ? p(s.note) : ''));
        }
        btn.addEventListener('click', check);
        input.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') check(); });
      }
    }
    start();
  });

  /* ==========================================================================
     8. (AHL) Ions of the first-row transition elements: remove 4s first
     ========================================================================== */
  // symbol: [4s electrons, 3d electrons, highest charge offered]
  var DROW = { Sc: [2, 1, 3], Ti: [2, 2, 4], V: [2, 3, 5], Cr: [1, 5, 6], Mn: [2, 5, 4], Fe: [2, 6, 3], Co: [2, 7, 3], Ni: [2, 8, 3], Cu: [1, 10, 3], Zn: [2, 10, 2] };
  var DSYMS = ['Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'];

  S1.widgets.register('s3-1.dions', function (w) {
    var sym = DROW[w.options.start] ? w.options.start : 'Fe', s4, d3;
    w.select({ label: t('Element'), value: sym, options: DSYMS.map(function (s) { return { value: s, label: s + ' (' + elName(chem.element(s)) + ')' }; }), onChange: function (v) { sym = v; resetAtom(); } });
    w.button(t('Remove one 4s electron'), function () { remove('s'); }, { primary: true });
    w.button(t('Remove one 3d electron'), function () { remove('d'); }, { primary: true });
    w.button(t('Start again from the atom'), function () { resetAtom(); });
    var svg = w.svg('0 0 400 132', { label: t('Orbital diagram: one 4s box and five 3d boxes for the chosen atom or ion. Arrows show the electrons.') });
    svg.style.maxWidth = '30rem';
    var fb = msgBox(w.stage);
    var setSp = w.readoutItem(t('Species'));
    var setCfg = w.readoutItem(t('Condensed configuration'));
    var setD = w.readoutItem(t('3d sublevel'));
    var setNote = w.readoutItem(t('What this means'), { text: true });

    function charge() { return DROW[sym][0] + DROW[sym][1] - s4 - d3; }
    function cfgNow() { return '[Ar]' + (s4 ? ' 4s<sup>' + s4 + '</sup>' : '') + (d3 ? ' 3d<sup>' + d3 + '</sup>' : ''); }
    function resetAtom() { s4 = DROW[sym][0]; d3 = DROW[sym][1]; fb.hide(); update(); }
    function remove(which) {
      var c = charge();
      if (c >= DROW[sym][2]) { fb.show('info', p(t('{charge} is the highest charge shown here for {el}.', { charge: c + '+', el: sym }))); return; }
      if (which === 'd' && s4 > 0) {
        fb.show('bad', p(t('Not yet. Remove the 4s electrons first. In the atom, once 3d contains electrons, 4s is the higher of the two sublevels. The 4s electrons are the outermost electrons and are lost first.')));
        return;
      }
      if (which === 's' && s4 === 0) { fb.show('bad', p(t('The 4s sublevel is already empty. The next electron comes from 3d.'))); return; }
      if (which === 's') s4--; else d3--;
      fb.show('ok', p(which === 's' ? t('Right: a 4s electron is removed before any 3d electron.') : t('Right: with 4s empty, the next electron comes from 3d.')));
      update();
    }
    function arrows(n, boxes) { // Hund's rule: one in each box first, then pair
      var out = [];
      for (var i = 0; i < boxes; i++) out.push((n > i ? 1 : 0) + (n > boxes + i ? 1 : 0));
      return out;
    }
    function drawBoxes(label, occ, x, y) {
      svgEl('text', { x: x, y: y - 10, 'font-size': 16, 'font-family': 'var(--font-mono)', fill: 'var(--ink)', text: label }, svg);
      occ.forEach(function (n, i) {
        var bx = x + i * 46;
        svgEl('rect', { x: bx, y: y, width: 46, height: 52, fill: 'var(--surface)', stroke: 'var(--ink)', 'stroke-width': 2 }, svg);
        if (n >= 1) svgEl('text', { x: bx + (n === 2 ? 15 : 23), y: y + 36, 'text-anchor': 'middle', 'font-size': 28, fill: 'var(--accent-ink)', text: '↑' }, svg);
        if (n === 2) svgEl('text', { x: bx + 31, y: y + 36, 'text-anchor': 'middle', 'font-size': 28, fill: 'var(--accent-ink)', text: '↓' }, svg);
      });
    }
    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      drawBoxes('4s', arrows(s4, 1), 20, 40);
      drawBoxes('3d', arrows(d3, 5), 130, 40);
      svgEl('text', { x: 20, y: 124, 'font-size': 14, 'font-family': 'var(--font-body)', fill: 'var(--ink-2)', text: t('Not shown: the [Ar] core of 18 inner electrons.') }, svg);
    }
    function update() {
      var c = charge(), inProgress = c > 0 && s4 > 0;
      draw();
      setSp(c === 0 ? t('{el} atom', { el: sym }) : inProgress ? t('{el} with one electron removed (not finished)', { el: sym }) : ionHtml(sym, c));
      setCfg(inProgress ? MINUS : cfgNow());
      setD(d3 === 0 ? t('empty (3d<sup>0</sup>)') : d3 === 10 ? t('full (3d<sup>10</sup>)') : t('partially filled (3d<sup>{n}</sup>)', { n: d3 }));
      if (c === 0) setNote(t('This is the atom. Choose which sublevel loses the first electron.'));
      else if (inProgress) setNote(t('One 4s electron is still there. Common ions of this element have lost both 4s electrons. Remove it before you read the configuration.'));
      else if (d3 === 0) setNote(t('The d sublevel is empty. There is no d electron to promote between d orbitals, so this ion cannot absorb visible light in that way. This is why compounds of Sc<sup>3+</sup> are colourless.'));
      else if (d3 === 10) setNote(t('The d sublevel is full. There is no space in the higher d orbitals for a promoted electron, so this ion cannot absorb visible light in that way. This is why solutions of Zn<sup>2+</sup> compounds are colourless.'));
      else setNote(t('The d sublevel is partially filled. An electron can be promoted between d orbitals, so this ion can form coloured complexes.'));
    }
    w.onTheme(draw);
    resetAtom();
  });

  /* ==========================================================================
     9. (AHL) Successive ionization energies: calcium against a transition element
     ========================================================================== */
  // kJ mol-1, 1st to 5th, nearest whole number (CRC-based reference table); the first value is the data booklet value
  var SUCC = {
    Ca: [590, 1145, 4912, 6491, 8153],
    Ti: [659, 1310, 2653, 4175, 9581],
    V: [651, 1414, 2830, 4507, 6299],
    Cr: [653, 1591, 2987, 4743, 6702],
    Mn: [717, 1509, 3248, 4940, 6990],
    Fe: [762, 1562, 2957, 5290, 7240],
    Co: [760, 1648, 3232, 4950, 7670],
    Ni: [737, 1753, 3395, 5300, 7339],
    Cu: [745, 1958, 3555, 5536, 7700]
  };
  S1._s31.SUCC = SUCC;

  S1.widgets.register('s3-1.succie', function (w) {
    var sym = SUCC[w.options.start] ? w.options.start : 'Fe';
    w.select({ label: t('Transition element to compare with calcium'), value: sym,
      options: Object.keys(SUCC).filter(function (s) { return s !== 'Ca'; }).map(function (s) { return { value: s, label: s + ' (' + elName(chem.element(s)) + ')' }; }),
      onChange: function (v) { sym = v; update(); } });
    var host = el('div', { class: 's31-chart' });
    w.stage.appendChild(host);
    var chart = null;
    var setCa = w.readoutItem(t('Calcium: each value ÷ the one before'));
    var setTm = w.readoutItem(t('Chosen element: each value ÷ the one before'));
    var setNote = w.readoutItem(t('What the data show'), { text: true });
    function ratios(a) { var out = []; for (var i = 1; i < a.length; i++) out.push(a[i] / a[i - 1]); return out; }
    function ratioText(a) { return ratios(a).map(function (r) { return '×' + r.toFixed(1); }).join(', '); }
    function update() {
      var a = SUCC[sym], ca = SUCC.Ca, name = elName(chem.element(sym));
      var spec = {
        label: t('Bar chart of the first five ionization energies of calcium and {name}.', { name: name }) + ' Ca: ' + ca.join(', ') + '. ' + sym + ': ' + a.join(', ') + '.',
        height: 280, categories: ['1', '2', '3', '4', '5'],
        x: { label: t('Number of the electron removed') },
        y: { label: t('Ionization energy / kJ mol⁻¹'), min: 0, max: 10000, step: 2000 },
        series: [{ type: 'bar', name: t('Ca (group 2)'), color: '--line-strong', data: ca.map(function (v, i) { return [i, v]; }) },
          { type: 'bar', name: sym + ' ' + t('(transition element)'), color: '--accent', data: a.map(function (v, i) { return [i, v]; }) }]
      };
      if (chart) chart.update(spec); else chart = S1.chart.plot(host, spec);
      setCa(ratioText(ca));
      setTm(ratioText(a));
      var big = Math.max.apply(null, ratios(a).slice(0, 2));
      setNote(t('Calcium: the third ionization energy is {r} times the second. The third electron comes from an inner energy level, so calcium only forms the 2+ ion. {name}: the second and third values rise by a factor of {b} or less. The 4s and 3d electrons are close in energy, so the successive ionization energies are close in value. There is no large jump after the second electron, so more than one oxidation state is possible.',
        { r: (ca[2] / ca[1]).toFixed(1), name: name.charAt(0).toUpperCase() + name.slice(1), b: big.toFixed(1) }));
    }
    update();
  });

  /* ==========================================================================
     10. (AHL) Colour wheel, complementary colours and c = λf
     ========================================================================== */
  // Booklet section 15. a0 = start angle of the sector (degrees, anticlockwise from the right-hand side).
  // The fills are illustration colours for the six named bands; every sector is also labelled in words.
  var BANDS = [
    { key: 'violet', lo: 400, hi: 424, a0: 180, fill: 'hsl(275, 60%, 50%)' },
    { key: 'blue', lo: 424, hi: 491, a0: 240, fill: 'hsl(222, 75%, 52%)' },
    { key: 'green', lo: 491, hi: 575, a0: 300, fill: 'hsl(135, 55%, 40%)' },
    { key: 'yellow', lo: 575, hi: 585, a0: 0, fill: 'hsl(52, 90%, 52%)' },
    { key: 'orange', lo: 585, hi: 647, a0: 60, fill: 'hsl(28, 90%, 52%)' },
    { key: 'red', lo: 647, hi: 700, a0: 120, fill: 'hsl(2, 75%, 50%)' }
  ];
  S1._s31.BANDS = BANDS;
  function bandOf(nm) { for (var i = 0; i < BANDS.length; i++) if (nm < BANDS[i].hi || i === BANDS.length - 1) return BANDS[i]; return BANDS[0]; }
  function complementOf(b) { var a = (b.a0 + 180) % 360; return BANDS.filter(function (x) { return x.a0 === a; })[0]; }
  S1._s31.bandOf = bandOf; S1._s31.complementOf = complementOf;

  S1.widgets.register('s3-1.wheel', function (w) {
    var nm = Number(w.options.start) || 600;
    function colourName(k) {
      return k === 'violet' ? t('violet') : k === 'blue' ? t('blue') : k === 'green' ? t('green') : k === 'yellow' ? t('yellow') : k === 'orange' ? t('orange') : t('red');
    }
    var sl = w.slider({ label: t('Wavelength of the light absorbed'), min: 400, max: 700, step: 1, value: nm, unit: 'nm', onInput: function (v) { nm = Math.round(v); update(); } });
    var jump = el('div', { class: 'control s31-seg' }, [el('span', { class: 'control__label', html: t('Try an example') })]);
    var row = el('div', { class: 'btn-row' });
    [[t('absorbs orange'), 600], [t('absorbs green'), 520], [t('absorbs violet'), 410], [t('absorbs yellow'), 580]].forEach(function (pair) {
      var b = el('button', { class: 'btn btn--small', type: 'button', html: pair[0] });
      b.addEventListener('click', function () { sl.set(pair[1]); });
      row.appendChild(b);
    });
    jump.appendChild(row); w.controls.appendChild(jump);

    var wrap = el('div', { class: 's31-wheelwrap' });
    w.stage.appendChild(wrap);
    var wheel = svgEl('svg', { viewBox: '0 0 340 300', role: 'img', class: 's31-wheel' }, wrap);
    var beam = svgEl('svg', { viewBox: '0 0 360 300', role: 'img', class: 's31-beam' }, wrap);
    var setAbs = w.readoutItem(t('Colour absorbed'));
    var setObs = w.readoutItem(t('Colour observed (complementary)'));
    var setF = w.readoutItem(t('Frequency of the light absorbed'), { text: true });

    function pt(cx, cy, r, deg) { var a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; }
    function sectorPath(cx, cy, r, a0) {
      var p0 = pt(cx, cy, r, a0), p1 = pt(cx, cy, r, a0 + 60);
      return 'M' + cx + ' ' + cy + ' L' + p0[0].toFixed(1) + ' ' + p0[1].toFixed(1) + ' A' + r + ' ' + r + ' 0 0 0 ' + p1[0].toFixed(1) + ' ' + p1[1].toFixed(1) + ' Z';
    }
    function plate(svg, x, y, text, bold) {
      var wd = text.length * 7.4 + 12;
      svgEl('rect', { x: x - wd / 2, y: y - 11, width: wd, height: 20, fill: 'var(--surface)', 'fill-opacity': 0.9, stroke: bold ? 'var(--ink)' : 'none', 'stroke-width': 1.5 }, svg);
      svgEl('text', { x: x, y: y + 4, 'text-anchor': 'middle', 'font-size': 13, 'font-weight': bold ? 700 : 400, 'font-family': 'var(--font-body)', fill: 'var(--ink)', text: text }, svg);
    }
    function drawWheel(abs, obs) {
      while (wheel.firstChild) wheel.removeChild(wheel.firstChild);
      var cx = 170, cy = 150, r = 105;
      BANDS.forEach(function (b) {
        var on = b === abs || b === obs;
        svgEl('path', { d: sectorPath(cx, cy, r, b.a0), fill: b.fill, 'fill-opacity': on ? 1 : 0.3, stroke: 'var(--ink)', 'stroke-width': on ? 3 : 1 }, wheel);
      });
      BANDS.forEach(function (b) {
        var c = pt(cx, cy, r * 0.62, b.a0 + 30);
        plate(wheel, c[0], c[1] - (b === abs || b === obs ? 9 : 0), colourName(b.key), b === abs || b === obs);
        if (b === abs) plate(wheel, c[0], c[1] + 13, t('absorbed'), false);
        if (b === obs) plate(wheel, c[0], c[1] + 13, t('observed'), false);
      });
      [[0, '575 nm', 'start', 6, 4], [60, '585 nm', 'start', 2, -4], [120, '647 nm', 'end', -2, -4], [240, '424 nm', 'end', -2, 14], [300, '491 nm', 'start', 2, 14]].forEach(function (l) {
        var q = pt(cx, cy, r, l[0]);
        svgEl('text', { x: q[0] + l[3], y: q[1] + l[4], 'text-anchor': l[2], 'font-size': 13, 'font-family': 'var(--font-mono)', fill: 'var(--ink)', text: l[1] }, wheel);
      });
      var q2 = pt(cx, cy, r, 180);
      svgEl('text', { x: q2[0] - 6, y: q2[1] - 6, 'text-anchor': 'end', 'font-size': 13, 'font-family': 'var(--font-mono)', fill: 'var(--ink)', text: '700 nm' }, wheel);
      svgEl('text', { x: q2[0] - 6, y: q2[1] + 16, 'text-anchor': 'end', 'font-size': 13, 'font-family': 'var(--font-mono)', fill: 'var(--ink)', text: '400 nm' }, wheel);
      var a = pt(cx, cy, r * 0.25, abs.a0 + 30), o = pt(cx, cy, r * 0.25, obs.a0 + 30);
      svgEl('line', { x1: a[0], y1: a[1], x2: o[0], y2: o[1], stroke: 'var(--ink)', 'stroke-width': 2.5 }, wheel);
      svgEl('circle', { cx: o[0], cy: o[1], r: 5, fill: 'var(--ink)' }, wheel);
    }
    function drawBeam(abs, obs) {
      while (beam.firstChild) beam.removeChild(beam.firstChild);
      var order = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
      function strip(x, label, cut) {
        svgEl('text', { x: x + 21, y: 16, 'text-anchor': 'middle', 'font-size': 13, 'font-family': 'var(--font-body)', fill: 'var(--ink)', text: label }, beam);
        order.forEach(function (k, i) {
          var b = BANDS.filter(function (bb) { return bb.key === k; })[0], gone = cut && b === abs;
          svgEl('rect', { x: x, y: 24 + i * 18, width: 42, height: 18, fill: gone ? 'var(--surface)' : b.fill, stroke: 'var(--ink)', 'stroke-width': 1 }, beam);
          if (gone) svgEl('path', { d: 'M' + x + ' ' + (24 + i * 18) + ' l42 18 m0 -18 l-42 18', stroke: 'var(--ink)', 'stroke-width': 1.5, fill: 'none' }, beam);
        });
      }
      strip(8, t('light in'), false);
      svgEl('path', { d: 'M56 78 h34 m-8 -6 l8 6 l-8 6', stroke: 'var(--ink)', 'stroke-width': 2, fill: 'none' }, beam);
      svgEl('rect', { x: 96, y: 30, width: 70, height: 96, fill: obs.fill, 'fill-opacity': 0.55, stroke: 'var(--ink)', 'stroke-width': 2 }, beam);
      plate(beam, 131, 78, t('solution'), false);
      svgEl('path', { d: 'M172 78 h34 m-8 -6 l8 6 l-8 6', stroke: 'var(--ink)', 'stroke-width': 2, fill: 'none' }, beam);
      strip(212, t('light out'), true);
      svgEl('text', { x: 262, y: 70, 'font-size': 13, 'font-family': 'var(--font-body)', fill: 'var(--ink)', text: t('{colour} missing', { colour: colourName(abs.key) }) }, beam);
      svgEl('text', { x: 262, y: 88, 'font-size': 13, 'font-family': 'var(--font-body)', fill: 'var(--ink)', text: t('looks {colour}', { colour: colourName(obs.key) }) }, beam);
      // two sets of d orbitals (the pattern of the split is not required)
      svgEl('text', { x: 8, y: 166, 'font-size': 13, 'font-weight': 700, 'font-family': 'var(--font-body)', fill: 'var(--ink)', text: t('Inside the complex ion') }, beam);
      svgEl('text', { x: 8, y: 183, 'font-size': 13, 'font-family': 'var(--font-body)', fill: 'var(--ink)', text: t('The d sublevel is split into two sets of orbitals.') }, beam);
      svgEl('line', { x1: 60, y1: 208, x2: 170, y2: 208, stroke: 'var(--ink)', 'stroke-width': 3 }, beam);
      svgEl('line', { x1: 60, y1: 270, x2: 170, y2: 270, stroke: 'var(--ink)', 'stroke-width': 3 }, beam);
      svgEl('text', { x: 180, y: 212, 'font-size': 13, 'font-family': 'var(--font-body)', fill: 'var(--ink-2)', text: t('higher-energy d orbitals') }, beam);
      svgEl('text', { x: 180, y: 274, 'font-size': 13, 'font-family': 'var(--font-body)', fill: 'var(--ink-2)', text: t('lower-energy d orbitals') }, beam);
      svgEl('path', { d: 'M100 264 v-46 m-6 9 l6 -9 l6 9', stroke: 'var(--accent)', 'stroke-width': 3, fill: 'none' }, beam);
      svgEl('circle', { cx: 100, cy: 270, r: 6, fill: 'var(--accent)', stroke: 'var(--ink)', 'stroke-width': 1 }, beam);
      svgEl('text', { x: 114, y: 234, 'font-size': 13, 'font-family': 'var(--font-body)', fill: 'var(--ink)', text: t('an electron is promoted') }, beam);
      svgEl('text', { x: 114, y: 251, 'font-size': 13, 'font-family': 'var(--font-body)', fill: 'var(--ink)', text: t('by absorbing {colour} light', { colour: colourName(abs.key) }) }, beam);
    }
    function update() {
      var abs = bandOf(nm), obs = complementOf(abs), fHz = CLIGHT / (nm * 1e-9);
      drawWheel(abs, obs); drawBeam(abs, obs);
      wheel.setAttribute('aria-label', t('Colour wheel from the data booklet with six sectors: orange at the top, then yellow, green, blue, violet and red going clockwise. The {a} sector is marked absorbed and the opposite sector, {o}, is marked observed.', { a: colourName(abs.key), o: colourName(obs.key) }));
      beam.setAttribute('aria-label', t('White light enters a solution. The {a} part is absorbed, so the light that comes out looks {o}. Below, an electron moves from the lower-energy d orbitals to the higher-energy d orbitals.', { a: colourName(abs.key), o: colourName(obs.key) }));
      setAbs(t('{colour} ({lo}–{hi} nm)', { colour: colourName(abs.key), lo: abs.lo, hi: abs.hi }));
      setObs(t('{colour} ({lo}–{hi} nm)', { colour: colourName(obs.key), lo: obs.lo, hi: obs.hi }));
      setF('<span class="mono" data-i18n="off"><i>f</i> = <i>c</i> / <i>λ</i> = 3.00 × 10<sup>8</sup> m s<sup>−1</sup> / (' + nm + ' × 10<sup>−9</sup> m) = ' + chem.sci(fHz, 3) + ' Hz</span>');
    }
    w.onTheme(update);
    update();
  });

  /* ---------- A coordination bond, drawn with the shared molecule helper -------- */
  function drawMols() {
    if (!S1.mol) return;
    Array.prototype.forEach.call(document.querySelectorAll('[data-s31-mol="aqua"]'), function (host) {
      S1.mol.lewis(host, {
        atoms: [{ el: 'Cu', label: 'Cu²⁺', x: 0, y: 0 }, { el: 'O', x: -1.7, y: 0, lone: 1 }, { el: 'H', x: -2.45, y: -0.75 }, { el: 'H', x: -2.45, y: 0.75 }],
        bonds: [{ a: 1, b: 0, dative: true }, { a: 1, b: 2 }, { a: 1, b: 3 }],
        label: t('A water molecule donates a lone pair of electrons to a copper(II) ion. The arrow shows the coordination bond.')
      });
    });
  }
  if (S1.ready) S1.ready(drawMols); else drawMols();
  document.addEventListener('s1:langchange', drawMols);
})();
