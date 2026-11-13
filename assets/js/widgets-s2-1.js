/* ==========================================================================
   Widgets for topic 2.1 — The ionic model.
   s2-1.ions      Ion maker: electron configuration of an atom and of its ion
   s2-1.formula   Ionic formula builder with charge tiles (free build and quiz)
   s2-1.lattice   Rotatable 3-D model of the sodium chloride lattice
   s2-1.states    Solid / molten / dissolved: can the ions move? (conductivity)
   s2-1.brittle   "Hit it": why an ionic crystal is brittle
   s2-1.enthalpy  Lattice enthalpy comparer: predict, then reveal
   s2-1.sorter    Match each property to its explanation
   s2-1.poly      Lewis formulas of the ammonium and hydroxide ions (static)
   The widget API (w) is documented in docs/AUTHORING.md.
   DATA: ionic radii (pm) are from section 10 and lattice enthalpies (kJ mol-1)
   from section 16 of the IB Chemistry data booklet (first assessment 2025).
   The block between DATA-START and DATA-END is read by the checking script.
   Every user-visible string goes through t() so the site can be translated.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var MINUS = '−';

  /*DATA-START*/
  /* Ionic radius / pm (data booklet section 10), keyed by ion. */
  var RADIUS = {
    'Li+': 76, 'Na+': 102, 'K+': 138, 'Cs+': 167,
    'Mg2+': 72, 'Ca2+': 100, 'Ba2+': 135,
    'F-': 133, 'Cl-': 181, 'Br-': 196, 'I-': 220, 'O2-': 140
  };
  /* Lattice enthalpy / kJ mol-1 at 298.15 K (data booklet section 16; endothermic: solid -> gaseous ions). */
  var LATTICE = [
    { f: 'LiF',   cat: 'Li', qc: 1, an: 'F',  qa: 1, dH: 1049 },
    { f: 'NaF',   cat: 'Na', qc: 1, an: 'F',  qa: 1, dH: 930 },
    { f: 'KF',    cat: 'K',  qc: 1, an: 'F',  qa: 1, dH: 829 },
    { f: 'LiCl',  cat: 'Li', qc: 1, an: 'Cl', qa: 1, dH: 864 },
    { f: 'NaCl',  cat: 'Na', qc: 1, an: 'Cl', qa: 1, dH: 790 },
    { f: 'KCl',   cat: 'K',  qc: 1, an: 'Cl', qa: 1, dH: 720 },
    { f: 'NaBr',  cat: 'Na', qc: 1, an: 'Br', qa: 1, dH: 754 },
    { f: 'NaI',   cat: 'Na', qc: 1, an: 'I',  qa: 1, dH: 705 },
    { f: 'CsI',   cat: 'Cs', qc: 1, an: 'I',  qa: 1, dH: 613 },
    { f: 'CaF2',  cat: 'Ca', qc: 2, an: 'F',  qa: 1, dH: 2651 },
    { f: 'MgCl2', cat: 'Mg', qc: 2, an: 'Cl', qa: 1, dH: 2540 },
    { f: 'CaCl2', cat: 'Ca', qc: 2, an: 'Cl', qa: 1, dH: 2271 },
    { f: 'BaCl2', cat: 'Ba', qc: 2, an: 'Cl', qa: 1, dH: 2069 },
    { f: 'MgO',   cat: 'Mg', qc: 2, an: 'O',  qa: 2, dH: 3791 },
    { f: 'CaO',   cat: 'Ca', qc: 2, an: 'O',  qa: 2, dH: 3401 },
    { f: 'BaO',   cat: 'Ba', qc: 2, an: 'O',  qa: 2, dH: 3054 }
  ];
  /*DATA-END*/

  /* ---------- shared helpers ---------------------------------------------- */
  function chargeText(q) {
    var n = Math.abs(q);
    return q === 0 ? '' : (n === 1 ? '' : String(n)) + (q > 0 ? '+' : MINUS);
  }
  /* HTML for an ion: ionHTML('SO4', -2) -> SO4 with subscript and 2- superscript. */
  function ionHTML(f, q) {
    return '<span class="nowrap">' + chem.formula(f) + (q ? '<sup>' + chargeText(q) + '</sup>' : '') + '</span>';
  }
  /* Plain-text ion for <option> labels and canvas text: uses Unicode sub/superscripts. */
  var SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' };
  var SUP = { 1: '', 2: '²', 3: '³', 4: '⁴' };
  function ionText(f, q) {
    var s = f.replace(/\d/g, function (d) { return SUB[d]; });
    return s + (q ? SUP[Math.abs(q)] + (q > 0 ? '⁺' : '⁻') : '');
  }
  function fText(f) { return f.replace(/\d/g, function (d) { return SUB[d]; }); }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function font(w, px, weight, token) { return (weight ? weight + ' ' : '') + px + 'px ' + (w.color(token || '--font-body') || 'sans-serif'); }
  function setFeedback(node, kind, label, html) {
    node.className = 'feedback' + (kind ? ' feedback--' + kind : '');
    node.innerHTML = label || html ? (label ? '<span class="feedback__label">' + label + '</span>' : '') + (html || '') : '';
  }
  /* Small deterministic random number generator, so a paused picture is the same every time. */
  function rng(seed) {
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }
  function stepper(parent, label, lessLabel, moreLabel, get, set, min, max) {
    var out = el('output', { class: 'stepper__value', text: String(get()) });
    var minus = el('button', { class: 'btn btn--small stepper__btn', type: 'button', text: MINUS, 'aria-label': lessLabel });
    var plus = el('button', { class: 'btn btn--small stepper__btn', type: 'button', text: '+', 'aria-label': moreLabel });
    minus.addEventListener('click', function () { set(Math.max(min, get() - 1)); });
    plus.addEventListener('click', function () { set(Math.min(max, get() + 1)); });
    parent.appendChild(el('div', { class: 'stepper', role: 'group', 'aria-label': label }, [
      el('span', { class: 'control__label', text: label }),
      el('div', { class: 'stepper__row' }, [minus, out, plus])
    ]));
    return { sync: function () { out.textContent = String(get()); minus.disabled = get() <= min; plus.disabled = get() >= max; } };
  }

  /* ==========================================================================
     1. Ion maker
     ========================================================================== */
  S1.widgets.register('s2-1.ions', function (w) {
    /* cfg is the ground-state configuration in filling order (4s before 3d), as in topic 1.3. */
    var ELS = [
      { s: 'Li', z: 3,  where: t('group 1'),  name: t('lithium'),   cfg: [['1s', 2], ['2s', 1]], ions: [{ q: 1, name: t('lithium ion') }] },
      { s: 'Na', z: 11, where: t('group 1'),  name: t('sodium'),    cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 1]], ions: [{ q: 1, name: t('sodium ion') }] },
      { s: 'K',  z: 19, where: t('group 1'),  name: t('potassium'), cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 1]], ions: [{ q: 1, name: t('potassium ion') }] },
      { s: 'Mg', z: 12, where: t('group 2'),  name: t('magnesium'), cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2]], ions: [{ q: 2, name: t('magnesium ion') }] },
      { s: 'Ca', z: 20, where: t('group 2'),  name: t('calcium'),   cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2]], ions: [{ q: 2, name: t('calcium ion') }] },
      { s: 'Al', z: 13, where: t('group 13'), name: t('aluminium'), cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 1]], ions: [{ q: 3, name: t('aluminium ion') }] },
      { s: 'N',  z: 7,  where: t('group 15'), name: t('nitrogen'),  cfg: [['1s', 2], ['2s', 2], ['2p', 3]], ions: [{ q: -3, name: t('nitride ion') }] },
      { s: 'P',  z: 15, where: t('group 15'), name: t('phosphorus'), cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 3]], ions: [{ q: -3, name: t('phosphide ion') }] },
      { s: 'O',  z: 8,  where: t('group 16'), name: t('oxygen'),    cfg: [['1s', 2], ['2s', 2], ['2p', 4]], ions: [{ q: -2, name: t('oxide ion') }] },
      { s: 'S',  z: 16, where: t('group 16'), name: t('sulfur'),    cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 4]], ions: [{ q: -2, name: t('sulfide ion') }] },
      { s: 'F',  z: 9,  where: t('group 17'), name: t('fluorine'),  cfg: [['1s', 2], ['2s', 2], ['2p', 5]], ions: [{ q: -1, name: t('fluoride ion') }] },
      { s: 'Cl', z: 17, where: t('group 17'), name: t('chlorine'),  cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 5]], ions: [{ q: -1, name: t('chloride ion') }] },
      { s: 'Br', z: 35, where: t('group 17'), name: t('bromine'),   cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2], ['3d', 10], ['4p', 5]], ions: [{ q: -1, name: t('bromide ion') }] },
      { s: 'Ar', z: 18, where: t('group 18'), name: t('argon'),     cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6]], ions: [] },
      { s: 'Fe', z: 26, where: t('transition element'), tm: true, name: t('iron'),   cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2], ['3d', 6]], ions: [{ q: 2, name: t('iron(II) ion') }, { q: 3, name: t('iron(III) ion') }] },
      { s: 'Cu', z: 29, where: t('transition element'), tm: true, name: t('copper'), cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 1], ['3d', 10]], ions: [{ q: 1, name: t('copper(I) ion') }, { q: 2, name: t('copper(II) ion') }] },
      { s: 'Co', z: 27, where: t('transition element'), tm: true, name: t('cobalt'), cfg: [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2], ['3d', 7]], ions: [{ q: 2, name: t('cobalt(II) ion') }, { q: 3, name: t('cobalt(III) ion') }] }
    ];
    var NOBLE = { 2: t('helium'), 10: t('neon'), 18: t('argon'), 36: t('krypton') };
    var LETTER = { s: 0, p: 1, d: 2 };
    var state = { i: 1, k: 0, formed: false };

    function shellOf(sub) { return Number(sub.charAt(0)); }
    function outerShell(cfg) { return Math.max.apply(null, cfg.map(function (c) { return shellOf(c[0]); })); }
    /* Returns [[sub, kept, lost, gained]] for the ion of charge q. Cations lose electrons from the
       highest shell first (p before s within a shell, so 4s before 3d). Anions fill the outer p sublevel. */
    function ionCfg(cfg, q) {
      var rows = cfg.map(function (c) { return [c[0], c[1], 0, 0]; });
      var n;
      if (q > 0) {
        var order = rows.slice().sort(function (a, b) { return shellOf(b[0]) - shellOf(a[0]) || LETTER[b[0].charAt(1)] - LETTER[a[0].charAt(1)]; });
        n = q;
        order.forEach(function (r) { var take = Math.min(n, r[1]); r[1] -= take; r[2] += take; n -= take; });
      } else if (q < 0) {
        var top = outerShell(cfg), p = rows.filter(function (r) { return r[0] === top + 'p'; })[0];
        p[3] = -q;
      }
      return rows;
    }
    function cfgHTML(rows) {
      return '<span class="mono">' + rows.filter(function (r) { return r[1] + (r[3] || 0) > 0; }).map(function (r) {
        return '<span class="nowrap">' + r[0] + '<sup>' + (r[1] + (r[3] || 0)) + '</sup></span>';
      }).join(' ') + '</span>';
    }
    function chips(rows, top, showChange) {
      var box = el('div', { class: 'ionmaker__subs' });
      rows.forEach(function (r) {
        var dots = el('span', { class: 'sub__dots' }), i;
        for (i = 0; i < r[1]; i++) dots.appendChild(el('i', { class: 'e' }));
        if (showChange) {
          for (i = 0; i < r[2]; i++) dots.appendChild(el('i', { class: 'e e--lost' }));
          for (i = 0; i < r[3]; i++) dots.appendChild(el('i', { class: 'e e--gained' }));
        }
        box.appendChild(el('span', { class: 'sub' + (shellOf(r[0]) === top ? ' sub--outer' : '') }, [el('span', { class: 'sub__name', text: r[0] }), dots]));
      });
      return box;
    }

    var sel = w.select({
      label: t('Element'), value: 'Na',
      options: ELS.map(function (e) { return { value: e.s, label: e.s + ' – ' + e.name + ' (' + e.where + ')' }; }),
      onChange: function (v) { ELS.forEach(function (e, i) { if (e.s === v) state.i = i; }); state.k = 0; state.formed = false; update(); }
    });
    var ionPick = el('div', { class: 'stepper', role: 'group', 'aria-label': t('Which ion?') });
    w.controls.appendChild(ionPick);
    var btn = w.button(t('Form the ion'), function () { state.formed = !state.formed; update(); }, { primary: true });

    var box = el('div', { class: 'ionmaker', 'data-i18n': 'off' });
    w.stage.appendChild(box);

    var setAtom = w.readoutItem(t('Atom'));
    var setIon = w.readoutItem(t('Ion'));
    var setCharge = w.readoutItem(t('Charge'));
    var setWords = w.readoutItem(t('In words'), { text: true });

    function update() {
      var e = ELS[state.i], ion = e.ions[state.k], top = outerShell(e.cfg);
      // which-ion buttons (only when the element forms more than one ion)
      ionPick.innerHTML = ''; ionPick.hidden = e.ions.length < 2;
      if (e.ions.length > 1) {
        ionPick.appendChild(el('span', { class: 'control__label', text: t('Which ion?') }));
        var seg = el('div', { class: 'seg' });
        e.ions.forEach(function (io, k) {
          var b = el('button', { class: 'seg__btn', type: 'button', 'aria-pressed': String(k === state.k), html: ionHTML(e.s, io.q) });
          b.addEventListener('click', function () { state.k = k; update(); });
          seg.appendChild(b);
        });
        ionPick.appendChild(seg);
      }
      btn.hidden = !ion;
      btn.textContent = state.formed ? t('Back to the atom') : t('Form the ion');

      box.innerHTML = '';
      var atomRows = e.cfg.map(function (c) { return [c[0], c[1], 0, 0]; });
      box.appendChild(el('div', { class: 'ionmaker__label', html: t('Atom of {name}: {p} protons, {n} electrons', { name: e.name, p: e.z, n: e.z }) }));
      box.appendChild(chips(atomRows, top, false));
      setAtom(ionHTML(e.s, 0) + ' ' + cfgHTML(atomRows));

      if (!ion) {
        box.appendChild(el('div', { class: 'ionmaker__note', html: t('Argon does not normally form ions. Its outer shell is already full, so it does not lose or gain electrons in ordinary chemistry.') }));
        setIon(t('none')); setCharge('0');
        setWords(t('A noble gas atom already has a full outer shell.'));
        return;
      }
      if (!state.formed) {
        box.appendChild(el('div', { class: 'ionmaker__note', html: t('The sublevels with a thick border are the outer shell. Predict: will this atom lose or gain electrons, and how many? Then press Form the ion.') }));
        setIon('?'); setCharge('?');
        setWords(t('Make your prediction, then press Form the ion.'));
        return;
      }
      var rows = ionCfg(e.cfg, ion.q), nE = e.z - ion.q, k = Math.abs(ion.q);
      var lostFrom = rows.filter(function (r) { return r[2] > 0; }).map(function (r) { return r[2] + ' × ' + r[0]; }).join(', ');
      box.appendChild(el('div', { class: 'ionmaker__arrow', html: ion.q > 0 ?
        (k === 1 ? t('loses 1 electron') : t('loses {k} electrons', { k: k })) + ' (' + lostFrom + ')' :
        (k === 1 ? t('gains 1 electron') : t('gains {k} electrons', { k: k })) }));
      box.appendChild(el('div', { class: 'ionmaker__label', html: t('{ion}, the {name}: {p} protons, {n} electrons', { ion: ionHTML(e.s, ion.q), name: ion.name, p: e.z, n: nE }) }));
      box.appendChild(chips(rows, top, true));
      box.appendChild(el('div', { class: 'ionmaker__key', html:
        '<span><i class="e"></i> ' + t('electron') + '</span>' +
        (ion.q > 0 ? '<span><i class="e e--lost"></i> ' + t('electron lost') + '</span>' : '<span><i class="e e--gained"></i> ' + t('electron gained') + '</span>') }));
      setIon(ionHTML(e.s, ion.q) + ' ' + cfgHTML(rows));
      setCharge(t('{p} protons and {n} electrons, so the charge is {q}', { p: e.z, n: nE, q: '<b>' + Math.abs(ion.q) + (ion.q > 0 ? '+' : MINUS) + '</b>' }));
      var noble = NOBLE[nE] && !e.tm ? NOBLE[nE] : null;
      var words = ion.q > 0 ?
        t('A metal atom loses electrons and becomes a positive ion (a cation).') :
        t('A non-metal atom gains electrons and becomes a negative ion (an anion).');
      if (noble) words += ' ' + t('The ion has the same electron configuration as {gas}.', { gas: noble });
      if (e.tm) words += ' ' + t('The 4s electrons are lost before the 3d electrons. A transition element can form more than one ion: try the other one.');
      setWords(words);
    }
    sel.set(ELS[state.i].s);
    update();
  });

  /* ==========================================================================
     2. Ionic formula builder
     ========================================================================== */
  S1.widgets.register('s2-1.formula', function (w) {
    /* Names.  She must write compound names in English in the exam, so the English name is ALWAYS shown, built from
       the English ion names (en), never from translations.  In another language a gloss follows in brackets:
         ion:   the local name of the ion, shown after the English name in the two pickers   ("lithium|ion" → 鋰離子)
         stem:  the form the ion takes inside a compound name in that language            ("sulfate|in-name" → 硫酸)
       and the local compound name is put together by the translated pattern "{cation} {anion}|compound-name"
       (Japanese and Chinese name the anion first: "{anion}{cation}" gives 硫酸鋁 / 硫酸アルミニウム).  If the pattern
       or either stem has no translation there is no gloss: a wrongly composed name is worse than none. */
    var CATIONS = [
      { id: 'Li', f: 'Li', q: 1, en: 'lithium', ion: t('lithium|ion'), stem: t('lithium|in-name') },
      { id: 'Na', f: 'Na', q: 1, en: 'sodium', ion: t('sodium|ion'), stem: t('sodium|in-name') },
      { id: 'K', f: 'K', q: 1, en: 'potassium', ion: t('potassium|ion'), stem: t('potassium|in-name') },
      { id: 'NH4', f: 'NH4', q: 1, poly: true, en: 'ammonium', ion: t('ammonium|ion'), stem: t('ammonium|in-name') },
      { id: 'Cu1', f: 'Cu', q: 1, el: 'Cu', en: 'copper(I)', ion: t('copper(I)|ion'), stem: t('copper(I)|in-name') },
      { id: 'Mg', f: 'Mg', q: 2, en: 'magnesium', ion: t('magnesium|ion'), stem: t('magnesium|in-name') },
      { id: 'Ca', f: 'Ca', q: 2, en: 'calcium', ion: t('calcium|ion'), stem: t('calcium|in-name') },
      { id: 'Ba', f: 'Ba', q: 2, en: 'barium', ion: t('barium|ion'), stem: t('barium|in-name') },
      { id: 'Fe2', f: 'Fe', q: 2, el: 'Fe', en: 'iron(II)', ion: t('iron(II)|ion'), stem: t('iron(II)|in-name') },
      { id: 'Cu2', f: 'Cu', q: 2, el: 'Cu', en: 'copper(II)', ion: t('copper(II)|ion'), stem: t('copper(II)|in-name') },
      { id: 'Al', f: 'Al', q: 3, en: 'aluminium', ion: t('aluminium|ion'), stem: t('aluminium|in-name') },
      { id: 'Fe3', f: 'Fe', q: 3, el: 'Fe', en: 'iron(III)', ion: t('iron(III)|ion'), stem: t('iron(III)|in-name') }
    ];
    var ANIONS = [
      { id: 'F', f: 'F', q: 1, en: 'fluoride', ion: t('fluoride|ion'), stem: t('fluoride|in-name') },
      { id: 'Cl', f: 'Cl', q: 1, en: 'chloride', ion: t('chloride|ion'), stem: t('chloride|in-name') },
      { id: 'Br', f: 'Br', q: 1, en: 'bromide', ion: t('bromide|ion'), stem: t('bromide|in-name') },
      { id: 'I', f: 'I', q: 1, en: 'iodide', ion: t('iodide|ion'), stem: t('iodide|in-name') },
      { id: 'OH', f: 'OH', q: 1, poly: true, en: 'hydroxide', ion: t('hydroxide|ion'), stem: t('hydroxide|in-name') },
      { id: 'NO3', f: 'NO3', q: 1, poly: true, en: 'nitrate', ion: t('nitrate|ion'), stem: t('nitrate|in-name') },
      { id: 'HCO3', f: 'HCO3', q: 1, poly: true, en: 'hydrogencarbonate', ion: t('hydrogencarbonate|ion'), stem: t('hydrogencarbonate|in-name') },
      { id: 'O', f: 'O', q: 2, en: 'oxide', ion: t('oxide|ion'), stem: t('oxide|in-name') },
      { id: 'S', f: 'S', q: 2, en: 'sulfide', ion: t('sulfide|ion'), stem: t('sulfide|in-name') },
      { id: 'CO3', f: 'CO3', q: 2, poly: true, en: 'carbonate', ion: t('carbonate|ion'), stem: t('carbonate|in-name') },
      { id: 'SO4', f: 'SO4', q: 2, poly: true, en: 'sulfate', ion: t('sulfate|ion'), stem: t('sulfate|in-name') },
      { id: 'N', f: 'N', q: 3, en: 'nitride', ion: t('nitride|ion'), stem: t('nitride|in-name') },
      { id: 'PO4', f: 'PO4', q: 3, poly: true, en: 'phosphate', ion: t('phosphate|ion'), stem: t('phosphate|in-name') }
    ];
    /* Quiz targets: real, well-known compounds only. [cation id, anion id] */
    var TARGETS = [['Mg', 'Cl'], ['Al', 'O'], ['K', 'S'], ['Ca', 'N'], ['Na', 'CO3'], ['Ca', 'OH'], ['Al', 'SO4'], ['NH4', 'CO3'],
      ['Fe3', 'O'], ['Fe2', 'SO4'], ['Cu2', 'NO3'], ['Cu1', 'O'], ['Ca', 'PO4'], ['Na', 'HCO3'], ['NH4', 'PO4'], ['Mg', 'NO3'],
      ['Ba', 'OH'], ['NH4', 'NO3'], ['Fe3', 'OH'], ['Cu2', 'SO4'], ['Li', 'O'], ['K', 'PO4'], ['Fe3', 'Cl'], ['Ba', 'SO4'], ['NH4', 'SO4'], ['Al', 'NO3']];
    function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
    function part(ion, n) { return ion.poly && n > 1 ? '(' + ion.f + ')' + n : ion.f + (n > 1 ? n : ''); }
    function formulaOf(c, a) { var g = c.q * a.q / gcd(c.q, a.q); return part(c, g / c.q) + part(a, g / a.q); }
    function nameEn(c, a) { return c.en + ' ' + a.en; }
    function nameLocal(c, a) {                // '' when it cannot be composed correctly
      if (S1.i18n.get() === 'en' || c.stem === c.en || a.stem === a.en || t('{cation} {anion}|compound-name') === '{cation} {anion}') return '';
      return t('{cation} {anion}|compound-name', { cation: c.stem, anion: a.stem });
    }
    function nameOf(c, a) { var local = nameLocal(c, a); return nameEn(c, a) + (local ? ' (' + local + ')' : ''); }
    function pickLabel(ion, sign) { return ionText(ion.f, sign * ion.q) + '  ' + ion.en + (ion.ion !== ion.en ? ' (' + ion.ion + ')' : ''); }

    var state = { c: 'Al', a: 'SO4', nc: 1, na: 1, quiz: null, last: -1, solved: false };

    var selC = w.select({ label: t('Cation (positive ion)'), value: state.c,
      options: CATIONS.map(function (c) { return { value: c.id, label: pickLabel(c, 1) }; }),
      onChange: function (v) { state.c = v; state.nc = 1; changed(); } });
    var selA = w.select({ label: t('Anion (negative ion)'), value: state.a,
      options: ANIONS.map(function (a) { return { value: a.id, label: pickLabel(a, -1) }; }),
      onChange: function (v) { state.a = v; state.na = 1; changed(); } });
    var stC = stepper(w.controls, t('Number of cations'), t('One cation fewer'), t('One more cation'), function () { return state.nc; }, function (v) { state.nc = v; changed(); }, 1, 3);
    var stA = stepper(w.controls, t('Number of anions'), t('One anion fewer'), t('One more anion'), function () { return state.na; }, function (v) { state.na = v; changed(); }, 1, 3);
    var btnAuto = w.button(t('Balance it for me'), function () {
      var c = byId(CATIONS, state.c), a = byId(ANIONS, state.a), g = c.q * a.q / gcd(c.q, a.q);
      state.nc = g / c.q; state.na = g / a.q; changed();
    });
    var btnQuiz = w.button(t('Quiz me'), newQuiz, { primary: true });
    var btnCheck = w.button(t('Check my formula'), check);
    var btnFree = w.button(t('Back to free build'), function () { state.quiz = null; state.solved = false; setFeedback(fb); update(); });

    var bar = el('div', { class: 'challenge-bar' });
    var tiles = el('div', { class: 'tiles', 'data-i18n': 'off' });
    var fb = el('div', { class: 'feedback', role: 'status' });
    w.stage.appendChild(bar); w.stage.appendChild(tiles); w.stage.appendChild(fb);

    var setPos = w.readoutItem(t('Total positive charge'));
    var setNeg = w.readoutItem(t('Total negative charge'));
    var setFormula = w.readoutItem(t('Formula'));
    var setName = w.readoutItem(t('Name'), { text: true });
    var setStatus = w.readoutItem(t('Charge balance'), { text: true });

    function changed() { if (state.quiz) { state.solved = false; setFeedback(fb); } update(); }

    function newQuiz() {
      var i;
      do { i = Math.floor(Math.random() * TARGETS.length); } while (i === state.last);
      state.last = i; state.quiz = { c: TARGETS[i][0], a: TARGETS[i][1] }; state.solved = false;
      state.nc = 1; state.na = 1;
      setFeedback(fb); update();
    }

    function check() {
      if (!state.quiz) return;
      var c = byId(CATIONS, state.c), a = byId(ANIONS, state.a), tc = byId(CATIONS, state.quiz.c), ta = byId(ANIONS, state.quiz.a);
      var pos = c.q * state.nc, neg = a.q * state.na, msgs = [];
      if (c.id !== tc.id) {
        msgs.push(c.el && c.el === tc.el ?
          t('Cation: the Roman numeral in the name is the charge on the metal ion. Check which ion of this metal you need.') :
          t('Cation: read the first word of the name again and choose that positive ion.'));
      }
      if (a.id !== ta.id) {
        msgs.push(t('Anion: read the ending of the name. An ending in -ide is usually a single element. Names such as sulfate, nitrate and carbonate are polyatomic ions that contain oxygen.'));
      }
      if (!msgs.length && pos !== neg) msgs.push(t('The ions are right, but the charges do not balance yet: {pos}+ against {neg}{minus}. Change the numbers of ions until the totals match.', { pos: pos, neg: neg, minus: MINUS }));
      if (!msgs.length && gcd(state.nc, state.na) > 1) msgs.push(t('The charges balance, but this is not the simplest ratio. An ionic formula uses the smallest whole numbers.'));
      if (msgs.length) { setFeedback(fb, 'wrong', t('Not yet'), '<ul><li>' + msgs.join('</li><li>') + '</li></ul>'); return; }
      state.solved = true;
      setFeedback(fb, 'right', t('Correct'), t('{name} is {formula}.', { name: nameOf(tc, ta), formula: '<b>' + chem.formula(formulaOf(tc, ta)) + '</b>' }) +
        (tc.poly && state.nc > 1 || ta.poly && state.na > 1 ? ' ' + t('The brackets show that the number outside applies to the whole polyatomic ion.') : ''));
      update();
    }

    function tileRow(ion, n, sign, total) {
      var track = el('div', { class: 'tiles__track' });
      for (var i = 0; i < n; i++) {
        var units = [];
        for (var k = 0; k < ion.q; k++) units.push(sign > 0 ? '+' : MINUS);
        var tile = el('span', { class: 'ctile ' + (sign > 0 ? 'ctile--pos' : 'ctile--neg'), style: '--q:' + ion.q }, [
          el('span', { class: 'ctile__f', html: ionHTML(ion.f, sign * ion.q) }),
          el('span', { class: 'ctile__u', text: units.join(' ') })
        ]);
        track.appendChild(tile);
      }
      return el('div', { class: 'tiles__row' }, [
        el('div', { class: 'tiles__cap', html: (sign > 0 ? t('Positive charge') : t('Negative charge')) + ': <b>' + total + (sign > 0 ? '+' : MINUS) + '</b>' }),
        track
      ]);
    }

    function update() {
      var c = byId(CATIONS, state.c), a = byId(ANIONS, state.a);
      var pos = c.q * state.nc, neg = a.q * state.na, balanced = pos === neg, simplest = gcd(state.nc, state.na) === 1;
      selC.set(state.c); selA.set(state.a); stC.sync(); stA.sync();
      var quiz = !!state.quiz;
      btnAuto.hidden = quiz; btnCheck.hidden = !quiz; btnFree.hidden = !quiz;
      btnQuiz.textContent = quiz ? t('New question') : t('Quiz me');
      bar.hidden = !quiz;
      if (quiz) {
        bar.innerHTML = '<span class="challenge-bar__label">' + t('Build') + '</span> <b>' + nameEn(byId(CATIONS, state.quiz.c), byId(ANIONS, state.quiz.a)) + '</b>' +
          ' <span class="muted small">' + t('Choose the two ions, set how many of each, then press Check my formula.') + '</span>';
      }
      tiles.style.setProperty('--n', String(Math.max(pos, neg, 4)));
      tiles.innerHTML = '';
      tiles.appendChild(tileRow(c, state.nc, 1, pos));
      tiles.appendChild(tileRow(a, state.na, -1, neg));

      setPos(pos + '+'); setNeg(neg + MINUS);
      var show = balanced && simplest && (!quiz || state.solved);
      if (quiz && !state.solved) {
        setFormula(t('hidden')); setName(t('Hidden in quiz mode until your answer is correct.'));
        setStatus(balanced ? t('The totals match.') : t('The totals do not match yet.'));
        return;
      }
      setFormula(show ? '<b>' + chem.formula(formulaOf(c, a)) + '</b>' : '?');
      setName(show ? nameOf(c, a) : t('Balance the charges first.'));
      if (!balanced) {
        setStatus(pos > neg ?
          t('Not balanced: {pos}+ against {neg}{minus}. You need more negative charge, or less positive charge.', { pos: pos, neg: neg, minus: MINUS }) :
          t('Not balanced: {pos}+ against {neg}{minus}. You need more positive charge, or less negative charge.', { pos: pos, neg: neg, minus: MINUS }));
      } else if (!simplest) {
        setStatus(t('Balanced, but not the simplest ratio. Divide both numbers of ions by {g}.', { g: gcd(state.nc, state.na) }));
      } else {
        setStatus(t('Balanced: {pos}+ and {neg}{minus} add up to zero.', { pos: pos, neg: neg, minus: MINUS }));
      }
    }
    update();
  });

  /* ==========================================================================
     3. Sodium chloride lattice in 3-D
     ========================================================================== */
  S1.widgets.register('s2-1.lattice', function (w) {
    if (!S1.mol || !S1.mol.viewer3d) {
      w.stage.appendChild(el('div', { class: 'muted', text: t('The 3-D model could not be loaded.') }));
      return;
    }
    var state = { n: 4, lines: true };
    function spec() {
      var n = state.n, atoms = [], bonds = [], idx = {}, x, y, z, off = (n - 1) / 2, d = 1.45;   /* spacing in viewer units: wide, so you can see inside */
      for (x = 0; x < n; x++) for (y = 0; y < n; y++) for (z = 0; z < n; z++) {
        var na = (x + y + z) % 2 === 0;
        idx[x + ',' + y + ',' + z] = atoms.length;
        atoms.push({ el: na ? 'Na' : 'Cl', label: na ? 'Na⁺' : 'Cl⁻', x: (x - off) * d, y: (y - off) * d, z: (z - off) * d });
      }
      if (state.lines) {
        for (x = 0; x < n; x++) for (y = 0; y < n; y++) for (z = 0; z < n; z++) {
          var a = idx[x + ',' + y + ',' + z];
          if (x + 1 < n) bonds.push({ a: a, b: idx[(x + 1) + ',' + y + ',' + z] });
          if (y + 1 < n) bonds.push({ a: a, b: idx[x + ',' + (y + 1) + ',' + z] });
          if (z + 1 < n) bonds.push({ a: a, b: idx[x + ',' + y + ',' + (z + 1)] });
        }
      }
      return { atoms: atoms, bonds: bonds, height: n > 3 ? 340 : 280,
        label: t('Model of a small piece of the sodium chloride lattice. Sodium ions and chloride ions alternate in all three directions, so every ion has ions of the opposite charge as its nearest neighbours.') };
    }
    w.select({ label: t('Size of the piece of crystal'), value: '4',
      options: [{ value: '2', label: t('2 × 2 × 2 ions') }, { value: '4', label: t('4 × 4 × 4 ions') }],
      onChange: function (v) { state.n = Number(v); update(); } });
    var btnLines = w.button(t('Hide the lines'), function () { state.lines = !state.lines; update(); });
    var host = el('div', {});
    w.stage.appendChild(host);
    var view = S1.mol.viewer3d(host, spec());
    w.onCleanup(function () { view.spin(false); });

    var setNa = w.readoutItem(t('Sodium ions shown'));
    var setCl = w.readoutItem(t('Chloride ions shown'));
    var setRatio = w.readoutItem(t('Ratio|ions'));
    var setUnit = w.readoutItem(t('Formula'));
    var setNote = w.readoutItem(t('Notice'), { text: true });
    function update() {
      var half = state.n * state.n * state.n / 2;
      view.setSpec(spec());
      btnLines.textContent = state.lines ? t('Hide the lines') : t('Show the lines');
      setNa(String(half)); setCl(String(half)); setRatio('1 : 1'); setUnit('<b>NaCl</b>');
      setNote(t('A bigger piece has more ions, but the ratio stays 1 : 1. The formula NaCl gives this ratio. It does not describe a molecule.'));
    }
    update();
  });

  /* ==========================================================================
     4. Solid, molten, dissolved: can the ions move?
     ========================================================================== */
  S1.widgets.register('s2-1.states', function (w) {
    var RC = 7.2, RA = 12.8;            /* Na+ 102 pm and Cl- 181 pm at the same scale (about 0.0706 px per pm) */
    var D = RC + RA;                     /* distance between neighbouring ion centres in the solid */
    var TOP = 44, BOTTOM = 26;
    var state = { mode: 'solid', playing: false };
    var parts = [], builtFor = '', clock = 0;

    w.select({ label: t('State of the sodium chloride'), value: 'solid',
      options: [{ value: 'solid', label: t('Solid') }, { value: 'molten', label: t('Molten (liquid)') }, { value: 'aq', label: t('Dissolved in water') }],
      onChange: function (v) { state.mode = v; builtFor = ''; update(); } });
    var btnPlay = w.button(t('Play'), function () { if (state.playing) { loop.stop(); state.playing = false; } else { loop.start(true); state.playing = true; } sync(); }, { primary: true });
    var cv = w.canvas({ height: 290, label: t('Particle model of sodium chloride between two electrodes. In the solid the ions stay in fixed positions. In the molten and dissolved states the sodium ions drift towards the negative electrode and the chloride ions towards the positive electrode.') });
    var setIons = w.readoutItem(t('Can the ions move from place to place?'), { text: true });
    var setLamp = w.readoutItem(t('Does it conduct electricity?'), { text: true });
    var setWhy = w.readoutItem(t('Why'), { text: true });

    function build(W, H) {
      var r = rng(7), x0, y0, cols, rows, i, j;
      parts = [];
      var top = TOP + 8, bottom = H - BOTTOM - 8, left = 14, right = W - 14;
      if (state.mode === 'solid') {
        cols = Math.floor((right - left - 2 * RA) / D) + 1; rows = Math.floor((bottom - top - 2 * RA) / D) + 1;
        if (cols % 2) cols -= 1;         /* equal numbers of each ion in every row */
        x0 = (W - (cols - 1) * D) / 2; y0 = (top + bottom - (rows - 1) * D) / 2;
        for (j = 0; j < rows; j++) for (i = 0; i < cols; i++) {
          parts.push({ q: (i + j) % 2 ? -1 : 1, hx: x0 + i * D, hy: y0 + j * D, x: x0 + i * D, y: y0 + j * D, ph: r() * 6.28, ph2: r() * 6.28 });
        }
      } else {
        var gap = state.mode === 'molten' ? D * 1.22 : 62;
        cols = Math.max(2, Math.floor((right - left) / gap)); rows = Math.max(2, Math.floor((bottom - top) / gap));
        if (cols % 2) cols -= 1;
        var gx = (right - left) / cols, gy = (bottom - top) / rows, jit = state.mode === 'molten' ? 0.22 : 0.3;
        for (j = 0; j < rows; j++) for (i = 0; i < cols; i++) {
          parts.push({ q: (i + j) % 2 ? -1 : 1, x: left + gx * (i + 0.5 + (r() - 0.5) * jit), y: top + gy * (j + 0.5 + (r() - 0.5) * jit),
            a: r() * 6.28, spin: r() * 6.28 });
        }
      }
      builtFor = state.mode + '|' + W + '|' + H;
    }
    function rad(p) { return (p.q > 0 ? RC : RA) + (state.mode === 'aq' ? 13 : 0); }

    function step(dt) {
      var W = cv.width, H = cv.height, top = TOP + 8, bottom = H - BOTTOM - 8, i, j, p, q;
      clock += dt;
      if (state.mode === 'solid') {
        for (i = 0; i < parts.length; i++) {
          p = parts[i];
          p.x = p.hx + 1.3 * Math.sin(clock * 9 + p.ph); p.y = p.hy + 1.3 * Math.sin(clock * 8.3 + p.ph2);
        }
        return;
      }
      var r = Math.random, speed = state.mode === 'molten' ? 26 : 22, drift = 16;
      for (i = 0; i < parts.length; i++) {
        p = parts[i];
        p.a += (r() - 0.5) * 3.5 * Math.sqrt(dt * 60) * 0.4;
        /* cations drift left (to the negative electrode), anions drift right */
        p.x += (Math.cos(p.a) * speed + (p.q > 0 ? -drift : drift)) * dt;
        p.y += Math.sin(p.a) * speed * dt;
        p.spin += dt * 0.6;
      }
      for (var pass = 0; pass < 2; pass++) {
        for (i = 0; i < parts.length; i++) for (j = i + 1; j < parts.length; j++) {
          p = parts[i]; q = parts[j];
          var dx = q.x - p.x, dy = q.y - p.y, d = Math.sqrt(dx * dx + dy * dy) || 0.01, min = rad(p) + rad(q) + (state.mode === 'molten' ? 0.5 : 2);
          if (d < min) { var push = (min - d) / 2; dx /= d; dy /= d; p.x -= dx * push; p.y -= dy * push; q.x += dx * push; q.y += dy * push; }
        }
      }
      for (i = 0; i < parts.length; i++) {
        p = parts[i];
        /* the picture is a window on a small part of the liquid: ions that leave one side are replaced by ions entering the other */
        if (p.x < -rad(p)) p.x += W + 2 * rad(p); else if (p.x > W + rad(p)) p.x -= W + 2 * rad(p);
        if (p.y < top + rad(p)) { p.y = top + rad(p); p.a = -p.a; } else if (p.y > bottom - rad(p)) { p.y = bottom - rad(p); p.a = -p.a; }
      }
    }

    function water(ctx, x, y, ang, towardsO) {
      /* a small water molecule; ang points from the ion to the molecule. towardsO: the oxygen end faces the ion
         (true for a cation); otherwise the hydrogen atoms face the ion (an anion). */
      var ox = x, oy = y, flip = towardsO ? 0 : Math.PI, h = 4.6, a1 = ang + flip + 0.92, a2 = ang + flip - 0.92;
      ctx.fillStyle = w.color('--surface'); ctx.strokeStyle = w.color('--ink-3'); ctx.lineWidth = 1;
      [a1, a2].forEach(function (a) { ctx.beginPath(); ctx.arc(ox + Math.cos(a) * h, oy + Math.sin(a) * h, 2.1, 0, 6.3); ctx.fill(); ctx.stroke(); });
      ctx.fillStyle = w.color('--line-strong'); ctx.beginPath(); ctx.arc(ox, oy, 3.6, 0, 6.3); ctx.fill(); ctx.stroke();
    }

    cv.draw(function (ctx, W, H) {
      if (builtFor !== state.mode + '|' + W + '|' + H) build(W, H);
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), accent = w.color('--accent'), surface = w.color('--surface'), line = w.color('--line-strong');
      var mobile = state.mode !== 'solid', i, p;
      /* frame and electrode labels */
      ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.strokeRect(0.5, TOP + 0.5, W - 1, H - TOP - BOTTOM - 1);
      ctx.font = font(w, 12); ctx.fillStyle = ink2; ctx.textBaseline = 'middle';
      ctx.textAlign = 'left'; ctx.fillText('← ' + t('to the negative electrode'), 2, H - 11);
      ctx.textAlign = 'right'; ctx.fillText(t('to the positive electrode') + ' →', W - 2, H - 11);
      /* key */
      ctx.textAlign = 'left';
      ctx.beginPath(); ctx.arc(10, 12, RC, 0, 6.3); ctx.fillStyle = accent; ctx.fill(); ctx.strokeStyle = ink; ctx.stroke();
      ctx.fillStyle = ink; ctx.font = font(w, 13); ctx.fillText('Na⁺', 22, 12);
      ctx.beginPath(); ctx.arc(70, 14, RA, 0, 6.3); ctx.fillStyle = surface; ctx.fill(); ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = ink; ctx.fillText('Cl⁻', 88, 12);
      if (state.mode === 'aq') { water(ctx, 132, 13, 0, true); ctx.fillStyle = ink; ctx.fillText(t('water'), 144, 12); }
      /* lamp */
      var lx = W - 16, ly = 16;
      ctx.beginPath(); ctx.arc(lx, ly, 9, 0, 6.3); ctx.fillStyle = mobile ? accent : surface; ctx.fill(); ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.stroke();
      if (mobile) { for (i = 0; i < 8; i++) { var a = i * Math.PI / 4; ctx.beginPath(); ctx.moveTo(lx + Math.cos(a) * 12, ly + Math.sin(a) * 12); ctx.lineTo(lx + Math.cos(a) * 15.5, ly + Math.sin(a) * 15.5); ctx.stroke(); } }
      ctx.textAlign = 'right'; ctx.fillStyle = ink; ctx.font = font(w, 13, 700);
      ctx.fillText(mobile ? t('lamp on') : t('lamp off'), lx - 20, 12);
      /* ions */
      ctx.save(); ctx.beginPath(); ctx.rect(1, TOP + 1, W - 2, H - TOP - BOTTOM - 2); ctx.clip();
      for (i = 0; i < parts.length; i++) {
        p = parts[i];
        var r = p.q > 0 ? RC : RA;
        if (state.mode === 'aq') {
          for (var k = 0; k < 4; k++) { var ang = p.spin + k * Math.PI / 2; water(ctx, p.x + Math.cos(ang) * (r + 6.5), p.y + Math.sin(ang) * (r + 6.5), ang, p.q > 0); }
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.3);
        ctx.fillStyle = p.q > 0 ? accent : surface; ctx.fill();
        ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.fillStyle = p.q > 0 ? w.color('--on-accent') : ink; ctx.font = font(w, p.q > 0 ? 11 : 14, 700); ctx.textAlign = 'center';
        ctx.fillText(p.q > 0 ? '+' : MINUS, p.x, p.y + 0.5);
      }
      ctx.restore();
    });

    var loop = w.loop(function (dt) { step(dt); cv.draw(); });
    function sync() { btnPlay.textContent = state.playing ? t('Pause') : t('Play'); }
    function update() {
      var m = state.mode;
      setIons(m === 'solid' ? t('No. Each ion vibrates about a fixed position in the lattice.') :
        m === 'molten' ? t('Yes. The lattice has broken down, so the ions can move past each other.') :
        t('Yes. Water molecules have separated the ions, so the ions can move through the solution.'));
      setLamp(m === 'solid' ? t('No') : t('Yes'));
      setWhy(m === 'solid' ? t('There are ions, but they are not free to move, so no charge can flow.') :
        t('The moving ions carry the charge. Sodium ions move towards the negative electrode and chloride ions towards the positive electrode. No electrons move through the liquid.'));
      cv.draw(); sync();
    }
    update();
    if (!w.reducedMotion) { loop.start(); state.playing = true; sync(); }
  });

  /* ==========================================================================
     5. Hit it: why an ionic crystal is brittle
     ========================================================================== */
  S1.widgets.register('s2-1.brittle', function (w) {
    var COLS = 8, ROWS = 4;
    var state = { stage: 0, shift: 0, gap: 0 };   /* shift: 0 to 1 ion spacing; gap: 0 to 1 */
    var target = { shift: 0, gap: 0 };
    var btn = w.button(t('Hit it|button'), advance, { primary: true });
    var btnReset = w.button(t('Reset'), function () { state.stage = 0; state.shift = state.gap = 0; target.shift = target.gap = 0; loop.stop(); update(); });
    var cv = w.canvas({ height: function (W) { return W < 420 ? 250 : 270; }, label: t('Four layers of ions in a slice through an ionic crystal. A force pushes the top two layers sideways by one ion. Ions with the same charge are then next to each other, they repel, and the crystal splits.') });
    var setSee = w.readoutItem(t('What is happening'), { text: true });

    function advance() {
      if (state.stage === 0) { state.stage = 1; target.shift = 1; }
      else if (state.stage === 1) { state.stage = 2; target.gap = 1; }
      else { state.stage = 0; state.shift = state.gap = 0; target.shift = target.gap = 0; }
      if (w.reducedMotion) { state.shift = target.shift; state.gap = target.gap; update(); }
      else { loop.start(true); update(); }
    }
    var loop = w.loop(function (dt) {
      var v = dt * 1.6, done = true;
      ['shift', 'gap'].forEach(function (k) {
        if (state[k] < target[k]) { state[k] = Math.min(target[k], state[k] + v); done = false; }
        else if (state[k] > target[k]) { state[k] = target[k]; }
      });
      cv.draw();
      if (done) loop.stop();
    });

    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), accent = w.color('--accent'), surface = w.color('--surface');
      /* d = distance between neighbouring ion centres = r(Na+) + r(Cl-); the two radii are to scale (102 pm and 181 pm) */
      var d = Math.min(36, (W - 30) / (COLS + 2.2)), rc = d * 102 / 283, ra = d * 181 / 283;
      var x0 = (W - (COLS + 1) * d) / 2 + d * 0.5, yBase = H - 34, i, j;
      var sx = state.shift * d;
      /* As the upper block slides, chloride ions meet chloride ions. Two chloride ions cannot overlap,
         so the block is forced upwards until they only touch: height h between the two middle layers. */
      var gapX = (1 - state.shift) * d;
      var h = Math.max(d, Math.sqrt(Math.max(0, 4 * ra * ra - gapX * gapX)));
      var lift = (h - d) + state.gap * d * 0.9;
      function pos(i, j) {             /* j = 0 is the bottom layer */
        var upper = j >= 2;
        return { x: x0 + i * d + (upper ? sx : 0), y: yBase - ra - j * d - (upper ? lift : 0) };
      }
      /* force arrow on the upper block */
      var pa = pos(0, 2), pb = pos(0, 3), ay = (pa.y + pb.y) / 2, ax = pa.x - ra - 6, ax0 = Math.max(2, ax - 34);
      ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(ax0, ay); ctx.lineTo(ax - 8, ay); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax - 9, ay - 6); ctx.lineTo(ax - 9, ay + 6); ctx.closePath(); ctx.fill();
      ctx.font = font(w, 12, 700); ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
      ctx.fillText(t('force'), ax0, ay - 8);
      /* ions */
      for (j = 0; j < ROWS; j++) for (i = 0; i < COLS; i++) {
        var p = pos(i, j), plus = (i + j) % 2 === 0, r = plus ? rc : ra;
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.3);
        ctx.fillStyle = plus ? accent : surface; ctx.fill(); ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.fillStyle = plus ? w.color('--on-accent') : ink; ctx.font = font(w, Math.max(10, r * (plus ? 1.3 : 1)), 700); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(plus ? '+' : MINUS, p.x, p.y + 0.5);
      }
      /* repulsion arrows where two positive ions now face each other across the gap */
      if (state.shift > 0.98) {
        ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 1.5;
        for (i = 1; i < COLS; i++) {
          if ((i + 1) % 2 !== 0) continue;                    /* lower ion (i, 1) must be positive */
          var lo = pos(i, 1), hi = pos(i - 1, 2), y1 = hi.y + rc + 3, y2 = lo.y - rc - 3, mx = lo.x;
          if (y2 - y1 < 12) continue;
          ctx.beginPath(); ctx.moveTo(mx, y1 + 4); ctx.lineTo(mx, y2 - 4); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(mx, y1); ctx.lineTo(mx - 4, y1 + 6); ctx.lineTo(mx + 4, y1 + 6); ctx.closePath(); ctx.fill();
          ctx.beginPath(); ctx.moveTo(mx, y2); ctx.lineTo(mx - 4, y2 - 6); ctx.lineTo(mx + 4, y2 - 6); ctx.closePath(); ctx.fill();
        }
      }
      /* caption inside the picture */
      ctx.font = font(w, 12); ctx.fillStyle = ink2; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(state.shift > 0.98 ? t('ions with the same charge now face each other and repel') : t('each ion is next to ions of the opposite charge'), W / 2, H - 12);
    });

    function update() {
      btn.textContent = state.stage === 0 ? t('Hit it|button') : state.stage === 1 ? t('What happens next?') : t('Start again');
      btnReset.hidden = state.stage === 0;
      setSee(state.stage === 0 ? t('Before the hit: every ion is next to ions of the opposite charge. Attraction holds the layers together.') :
        state.stage === 1 ? t('The force has moved the top layers along by one ion. Now ions with the same charge are next to each other.') :
        t('Ions with the same charge repel. The layers push apart and the crystal splits. This is why ionic solids are brittle.'));
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     6. Lattice enthalpy comparer
     ========================================================================== */
  S1.widgets.register('s2-1.enthalpy', function (w) {
    var state = { a: 'NaCl', b: 'MgO', pick: null, why: null, shown: false };
    function get(f) { for (var i = 0; i < LATTICE.length; i++) if (LATTICE[i].f === f) return LATTICE[i]; return null; }
    function rCat(c) { return RADIUS[c.cat + (c.qc > 1 ? c.qc : '') + '+']; }
    function rAn(c) { return RADIUS[c.an + (c.qa > 1 ? c.qa : '') + '-']; }
    function sum(c) { return rCat(c) + rAn(c); }
    function prod(c) { return c.qc * c.qa; }
    var opts = LATTICE.map(function (c) { return { value: c.f, label: fText(c.f) }; });
    var selA = w.select({ label: t('Compound A'), value: state.a, options: opts, onChange: function (v) { state.a = v; reset(); } });
    var selB = w.select({ label: t('Compound B'), value: state.b, options: opts, onChange: function (v) { state.b = v; reset(); } });
    void selA; void selB;

    var cv = w.canvas({ height: function (W) { return W < 480 ? 430 : 250; }, label: t('For each compound, one cation and one anion drawn touching, to the same scale, with their charges and ionic radii. After you predict, bars show the two lattice enthalpies.') });
    var form = el('div', { class: 'predict' });
    var fb = el('div', { class: 'feedback', role: 'status' });
    w.stage.appendChild(form); w.stage.appendChild(fb);
    var setA = w.readoutItem(t('Compound A'));
    var setB = w.readoutItem(t('Compound B'));

    function radioGroup(legend, name, options, key) {
      var fs = el('fieldset', { class: 'predict__set' }, [el('legend', { class: 'predict__legend', html: legend })]);
      options.forEach(function (o) {
        var input = el('input', { type: 'radio', name: name, value: o.value });
        if (state[key] === o.value) input.checked = true;
        input.addEventListener('change', function () { state[key] = o.value; });
        fs.appendChild(el('label', { class: 'predict__opt' }, [input, el('span', { html: o.label })]));
      });
      return fs;
    }
    var uid = S1.util.uid ? S1.util.uid('le') : 'le' + Math.floor(Math.random() * 1e6);
    function buildForm() {
      var A = get(state.a), B = get(state.b);
      form.innerHTML = '';
      if (A === B) { form.appendChild(el('div', { class: 'muted', text: t('Choose two different compounds to compare.') })); return; }
      form.appendChild(el('div', { class: 'predict__title', text: t('Predict before you reveal the values') }));
      form.appendChild(radioGroup(t('Which compound has the larger lattice enthalpy?'), uid + 'p', [
        { value: 'a', label: 'A: ' + chem.formula(A.f) }, { value: 'b', label: 'B: ' + chem.formula(B.f) }], 'pick'));
      form.appendChild(radioGroup(t('What is the main reason?'), uid + 'w', [
        { value: 'charge', label: t('Its ions have higher charges.') },
        { value: 'radius', label: t('Its ions are smaller, so the ion centres are closer together.') },
        { value: 'both', label: t('Both: higher charges and smaller ions.') }], 'why'));
      var b = el('button', { class: 'btn btn--primary btn--small', type: 'button', text: t('Reveal the values') });
      b.addEventListener('click', reveal);
      form.appendChild(b);
    }
    function ions(c) { return ionHTML(c.cat, c.qc) + ' ' + rCat(c) + ' pm, ' + ionHTML(c.an, -c.qa) + ' ' + rAn(c) + ' pm'; }
    function chargesText(c) { return t('{a}+ and {b}−', { a: c.qc, b: c.qa }); }

    function reveal() {
      var A = get(state.a), B = get(state.b);
      if (A === B) return;
      if (!state.pick || !state.why) { setFeedback(fb, 'partial', t('Predict first'), t('Choose one answer for each of the two questions, then reveal.')); return; }
      state.shown = true;
      var big = A.dH > B.dH ? A : B, small = big === A ? B : A, right = (state.pick === 'a') === (big === A);
      var moreCharge = prod(big) > prod(small), closer = sum(big) < sum(small);
      /* When the two sums of radii differ by 10 pm or less, the distance is "almost the same": charge is then the main reason. */
      var near = moreCharge && Math.abs(sum(big) - sum(small)) <= 10;
      var reason = near ? 'charge' : moreCharge && closer ? 'both' : moreCharge ? 'charge' : 'radius';
      var v = { big: chem.formula(big.f), small: chem.formula(small.f), sb: sum(big), ss: sum(small), qb: chargesText(big), qs: chargesText(small), hb: big.dH, hs: small.dH };
      var explain = reason === 'radius' ?
        t('The ions in both compounds have the same charges ({qb}). In {big} the sum of the ionic radii is smaller ({sb} pm against {ss} pm), so the centres of the ions are closer together. The electrostatic attraction between the oppositely charged ions is stronger, so the lattice enthalpy is larger.', v) :
        near ?
        t('The ions in {big} have higher charges ({qb}, against {qs} in {small}). The sum of the ionic radii is almost the same in the two compounds ({sb} pm against {ss} pm), so the higher charges are the main reason. The electrostatic attraction between the oppositely charged ions is stronger, so the lattice enthalpy is larger.', v) :
        reason === 'both' ?
        t('The ions in {big} have higher charges ({qb}, against {qs} in {small}). The sum of the ionic radii is also smaller ({sb} pm against {ss} pm). Both effects make the electrostatic attraction between the oppositely charged ions stronger, so the lattice enthalpy is larger.', v) :
        t('The ions in {big} have higher charges ({qb}, against {qs} in {small}). The ions in {big} are not closer together ({sb} pm against {ss} pm), but here the effect of the higher charge is bigger. The electrostatic attraction is stronger, so the lattice enthalpy is larger.', v);
      var values = t('Data booklet values: {big} {hb} kJ mol⁻¹, {small} {hs} kJ mol⁻¹.', v);
      if (right && (state.why === reason || (near && closer && state.why === 'both'))) setFeedback(fb, 'right', t('Correct'), values + ' ' + explain);
      else if (right) setFeedback(fb, 'partial', t('Right compound, check the reason'), values + ' ' + explain);
      else setFeedback(fb, 'wrong', t('Not this time'), values + ' ' + explain);
      update();
    }
    function reset() { state.pick = state.why = null; state.shown = false; setFeedback(fb); buildForm(); update(); }

    cv.draw(function (ctx, W, H) {
      var A = get(state.a), B = get(state.b), stack = W < 480;
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), accent = w.color('--accent'), surface = w.color('--surface'), line = w.color('--line-strong');
      var pw = stack ? W : W / 2, ph = stack ? H / 2 : H;
      var scale = Math.min((pw - 24) / 774, (ph - 112) / 440);   /* 774 pm = widest pair (CsI); 440 pm = tallest ion */
      [A, B].forEach(function (c, k) {
        var ox = stack ? 0 : k * pw, oy = stack ? k * ph : 0;
        var rc = rCat(c) * scale, ra = rAn(c) * scale, total = 2 * (rc + ra);
        var cy = oy + 30 + 220 * scale, x1 = ox + (pw - total) / 2 + rc, x2 = x1 + rc + ra;
        ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillStyle = ink; ctx.font = font(w, 15, 700, '--font-display');
        ctx.fillText((k ? 'B: ' : 'A: ') + fText(c.f), ox + 8, oy + 14);
        if (k && !stack) { ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ox + 0.5, 6); ctx.lineTo(ox + 0.5, H - 6); ctx.stroke(); }
        if (k && stack) { ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(6, oy + 0.5); ctx.lineTo(W - 6, oy + 0.5); ctx.stroke(); }
        /* ions, to scale */
        ctx.lineWidth = 1.5; ctx.strokeStyle = ink;
        ctx.beginPath(); ctx.arc(x1, cy, rc, 0, 6.3); ctx.fillStyle = accent; ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.arc(x2, cy, ra, 0, 6.3); ctx.fillStyle = surface; ctx.fill(); ctx.stroke();
        ctx.textAlign = 'center';
        ctx.font = font(w, Math.max(10, Math.min(15, rc * 0.8)), 700); ctx.fillStyle = w.color('--on-accent'); ctx.fillText(chargeText(c.qc), x1, cy + 0.5);
        ctx.font = font(w, Math.max(11, Math.min(16, ra * 0.6)), 700); ctx.fillStyle = ink; ctx.fillText(chargeText(-c.qa), x2, cy + 0.5);
        /* distance between centres */
        var dy = cy + 220 * scale + 12;
        ctx.strokeStyle = ink2; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x1, dy - 5); ctx.lineTo(x1, dy + 5); ctx.moveTo(x2, dy - 5); ctx.lineTo(x2, dy + 5); ctx.moveTo(x1, dy); ctx.lineTo(x2, dy); ctx.stroke();
        ctx.fillStyle = ink2; ctx.font = font(w, 12, '', '--font-mono');
        ctx.fillText(rCat(c) + ' + ' + rAn(c) + ' = ' + sum(c) + ' pm', ox + pw / 2, dy + 16);
        /* bar */
        var by = dy + 34, bx = ox + 12, bw = pw - 24;
        ctx.strokeStyle = line; ctx.strokeRect(bx + 0.5, by + 0.5, bw - 1, 15);
        ctx.textAlign = 'left'; ctx.font = font(w, 12, '', '--font-mono');
        if (state.shown && A !== B) {
          ctx.fillStyle = accent; ctx.fillRect(bx + 1, by + 1, (bw - 2) * c.dH / 4000, 14);
          ctx.fillStyle = ink; ctx.fillText(c.dH + ' kJ mol⁻¹', bx, by + 28);
        } else {
          ctx.fillStyle = ink2; ctx.fillText(t('lattice enthalpy: ?'), bx, by + 28);
        }
      });
    });

    function update() {
      var A = get(state.a), B = get(state.b);
      setA('<b>' + chem.formula(A.f) + '</b>: ' + ions(A) + (state.shown ? ', <b>' + A.dH + '</b> kJ mol<sup>−1</sup>' : ''));
      setB('<b>' + chem.formula(B.f) + '</b>: ' + ions(B) + (state.shown ? ', <b>' + B.dH + '</b> kJ mol<sup>−1</sup>' : ''));
      cv.draw();
    }
    buildForm(); update();
  });

  /* ==========================================================================
     7. Properties sorter
     ========================================================================== */
  S1.widgets.register('s2-1.sorter', function (w) {
    var EXPL = [
      { id: 'strong', text: t('The electrostatic attraction between the oppositely charged ions is strong and acts throughout the lattice. A lot of energy is needed to overcome it.') },
      { id: 'fixed', text: t('The ions are held in fixed positions in the lattice. They cannot move from place to place.') },
      { id: 'free', text: t('The lattice has broken down. The ions are free to move and carry charge.') },
      { id: 'repel', text: t('A force moves a layer of ions. Ions with the same charge come next to each other and repel.') },
      { id: 'water', text: t('The solvent molecules are polar. They attract the ions strongly enough to pull them out of the lattice.') },
      { id: 'nonpolar', text: t('The solvent molecules are non-polar. They do not attract the ions strongly enough to separate them.') },
      { id: 'electrons', wrong: t('Delocalized electrons explain why metals conduct. In an ionic compound the charge is carried by moving ions.'), text: t('Delocalized electrons are free to move through the structure.') },
      { id: 'molecules', wrong: t('An ionic compound has no molecules, so it has no intermolecular forces. It is a lattice of ions.'), text: t('The forces between the molecules are weak and need little energy to overcome.') }
    ];
    var PROPS = [
      { text: t('Sodium chloride has a high melting point and a low volatility.'), ans: 'strong' },
      { text: t('Solid sodium chloride does not conduct electricity.'), ans: 'fixed' },
      { text: t('Molten sodium chloride conducts electricity.'), ans: 'free' },
      { text: t('A sodium chloride crystal shatters when it is hit.'), ans: 'repel' },
      { text: t('Sodium chloride dissolves in water.'), ans: 'water' },
      { text: t('Sodium chloride does not dissolve in hexane.'), ans: 'nonpolar' }
    ];
    var order = S1.util.shuffle(EXPL), LETTERS = 'ABCDEFGH';
    var selects = [], marks = [];
    var wrap = el('div', { class: 'sorter' });
    var listE = el('ol', { class: 'sorter__expl', 'data-i18n': 'off' });
    order.forEach(function (e, i) { listE.appendChild(el('li', {}, [el('b', { text: LETTERS[i] + '  ' }), el('span', { html: e.text })])); });
    var listP = el('div', { class: 'sorter__props' });
    PROPS.forEach(function (p, i) {
      var id = (S1.util.uid ? S1.util.uid('so') : 'so' + i);
      var s = el('select', { class: 'select', id: id });
      s.appendChild(el('option', { value: '', text: t('Choose') }));
      order.forEach(function (e, k) { s.appendChild(el('option', { value: e.id, text: LETTERS[k] })); });
      s.addEventListener('change', function () { marks[i].textContent = ''; marks[i].className = 'sorter__mark'; });
      var mark = el('span', { class: 'sorter__mark', role: 'status' });
      selects.push(s); marks.push(mark);
      listP.appendChild(el('div', { class: 'sorter__row' }, [
        el('label', { class: 'sorter__prop', for: id, html: (i + 1) + '. ' + p.text }),
        el('span', { class: 'sorter__pick' }, [s]), mark
      ]));
    });
    wrap.appendChild(el('div', { class: 'sorter__head', text: t('Explanations') }));
    wrap.appendChild(listE);
    wrap.appendChild(el('div', { class: 'sorter__head', text: t('Properties: choose the letter of the explanation') }));
    wrap.appendChild(listP);
    w.stage.appendChild(wrap);
    var setScore = w.readoutItem(t('Score'), { text: true });
    setScore(t('Match all six, then press Check.'));

    function find(id) { for (var i = 0; i < EXPL.length; i++) if (EXPL[i].id === id) return EXPL[i]; return null; }
    w.button(t('Check'), function () {
      var right = 0;
      PROPS.forEach(function (p, i) {
        var v = selects[i].value, m = marks[i];
        if (!v) { m.className = 'sorter__mark'; m.textContent = t('Choose a letter.'); return; }
        if (v === p.ans) { right++; m.className = 'sorter__mark sorter__mark--right'; m.textContent = t('Correct'); return; }
        var e = find(v);
        m.className = 'sorter__mark sorter__mark--wrong';
        m.innerHTML = t('Not yet.') + ' ' + (e.wrong || t('That explains a different property. Ask: what can the ions do, or not do, here?'));
      });
      setScore(right === PROPS.length ? t('All six are matched correctly.') : t('{n} of 6 correct. Change the others and check again.', { n: right }));
    }, { primary: true });
    w.button(t('Clear'), function () {
      selects.forEach(function (s, i) { s.value = ''; marks[i].textContent = ''; marks[i].className = 'sorter__mark'; });
      setScore(t('Match all six, then press Check.'));
    });
  });

  /* ==========================================================================
     8. Lewis formulas of two polyatomic ions (static drawing, no controls)
     ========================================================================== */
  S1.widgets.register('s2-1.poly', function (w) {
    if (!S1.mol || !S1.mol.lewis) return;
    var row = el('div', { class: 'polyfig' });
    function item(spec, caption) {
      var host = el('div', {});
      row.appendChild(el('div', { class: 'polyfig__item' }, [host, el('div', { class: 'polyfig__cap', html: caption })]));
      S1.mol.lewis(host, spec);
    }
    w.stage.appendChild(row);
    item({ central: 'N', outer: ['H', 'H', 'H', 'H'], bracket: true, charge: '+', label: t('Lewis formula of the ammonium ion: a nitrogen atom joined to four hydrogen atoms by covalent bonds, in square brackets with a charge of 1+') },
      t('ammonium ion, {f}', { f: ionHTML('NH4', 1) }));
    item({ central: 'O', outer: ['H'], centralLone: 3, bracket: true, charge: '-', label: t('Lewis formula of the hydroxide ion: an oxygen atom with three lone pairs joined to one hydrogen atom by a covalent bond, in square brackets with a charge of 1−') },
      t('hydroxide ion, {f}', { f: ionHTML('OH', -1) }));
  });
})();
