/* ==========================================================================
   Widgets for topic 2.2 — The covalent model (SL and HL core, 2.2.1–2.2.10).
   s2-2.lewis      Lewis formula builder (count, place pairs, check octets)
   s2-2.bonds      bond length and bond enthalpy comparer (data booklet 11, 12)
   s2-2.vsepr      3-D VSEPR viewer for 2–4 electron domains, with "predict first"
   s2-2.polarity   bond dipoles and net dipole (data booklet electronegativities)
   s2-2.network    3-D models of diamond, graphite, graphene, C60, Si, SiO2
   s2-2.hbond      how to draw a hydrogen bond, label by label
   s2-2.imf        identify the intermolecular forces in a substance
   s2-2.bp         predict and explain a boiling-point difference
   s2-2.chroma     paper / TLC chromatography run with a ruler and RF check
   Also draws the small static Lewis formulas in the page: <div data-s22-lewis="key[:variant]">.

   Data sources. Electronegativity, bond length and bond enthalpy values are the
   IB data booklet (2025) values, sections 9, 11 and 12. Boiling points are from
   PubChem (experimental values at 1 atm), rounded to the nearest degree.
   Measured bond angles are standard literature values, rounded. The RF values
   in the chromatography model are invented model data and are labelled so.
   Every user-visible string goes through t("English text", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el, mol = S1.mol;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var SVGNS = 'http://www.w3.org/2000/svg';
  var MINUS = '−', DEG = '°', DELTA = 'δ';

  /* ---------- Data booklet values ------------------------------------------- */
  var EN = { H: 2.2, Be: 1.6, B: 2.0, C: 2.6, N: 3.0, O: 3.4, F: 4.0, Si: 1.9, P: 2.2, S: 2.6, Cl: 3.2, Br: 3.0, I: 2.7 };
  var VAL = { H: 1, Be: 2, B: 3, C: 4, N: 5, O: 6, F: 7, Si: 4, P: 5, S: 6, Cl: 7, Br: 7, I: 7 };
  var ZNUM = { H: 1, Be: 4, B: 5, C: 6, N: 7, O: 8, F: 9, Si: 14, P: 15, S: 16, Cl: 17, Br: 35, I: 53 };

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
  /** Segmented button group. items: [{value, label}] → {value, set(v), buttons, el}. */
  function seg(w, label, items, value, onChange, parent) {
    var id = S1.util.uid('seg');
    var group = el('div', { class: 'seg', role: 'group', 'aria-labelledby': id });
    var state = { value: value, buttons: [] };
    items.forEach(function (it) {
      var b = el('button', { class: 'seg__btn', type: 'button', 'aria-pressed': String(it.value === value), html: it.label });
      b.addEventListener('click', function () { if (b.disabled) return; state.set(it.value); if (onChange) onChange(it.value); });
      b._value = it.value;
      state.buttons.push(b);
      group.appendChild(b);
    });
    state.set = function (v) {
      state.value = v;
      state.buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b._value === v)); });
    };
    state.enable = function (fn) { state.buttons.forEach(function (b) { b.disabled = !fn(b._value); }); };
    var wrap = el('div', { class: 'control s22-seg' }, [el('span', { class: 'control__label', id: id, text: label }), group]);
    (parent || w.controls).appendChild(wrap);
    state.el = wrap;
    return state;
  }
  /** Labelled select whose options can be replaced. options: [{value, label}] (label may be HTML-free text). */
  function picker(w, label, options, onChange, parent) {
    var id = S1.util.uid('ctl');
    var s = el('select', { class: 'select', id: id });
    var api = {
      select: s,
      setOptions: function (list, value) {
        s.innerHTML = '';
        list.forEach(function (o) { var op = el('option', { value: o.value, text: o.label }); s.appendChild(op); });
        if (value != null) s.value = value;
      }
    };
    Object.defineProperty(api, 'value', { get: function () { return s.value; }, set: function (v) { s.value = v; } });
    api.setOptions(options);
    s.addEventListener('change', function () { onChange(s.value); });
    api.el = el('div', { class: 'control', style: 'flex:0 1 auto' }, [el('label', { class: 'control__label', for: id, text: label }), s]);
    (parent || w.controls).appendChild(api.el);
    return api;
  }
  /** Feedback box (uses the site's .feedback styles). tone: 'right' | 'wrong' | 'partial' | ''. */
  function feedback(parent) {
    var box = el('div', { class: 'feedback s22-fb', role: 'status', 'aria-live': 'polite' });
    parent.appendChild(box);
    return {
      el: box,
      set: function (tone, label, html) {
        box.className = 'feedback s22-fb' + (tone ? ' feedback--' + tone : '');
        box.innerHTML = (label ? '<span class="feedback__label">' + label + '</span>' : '') + (html || '');
      },
      clear: function () { box.className = 'feedback s22-fb'; box.innerHTML = ''; }
    };
  }
  function plainFormula(f) { return chem.formula(f).replace(/<sub>(.*?)<\/sub>/g, function (_, d) { return d.replace(/\d/g, function (c) { return '₀₁₂₃₄₅₆₇₈₉'[+c]; }); }).replace(/<sup>(.*?)<\/sup>/g, function (_, d) { return d.replace('+', '⁺').replace(MINUS, '⁻').replace('-', '⁻').replace(/\d/g, function (c) { return '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]; }); }).replace(/<[^>]+>/g, ''); }

  /* ==========================================================================
     Lewis formulas: species table (target structures)
     ========================================================================== */
  function central(c, outer, orders, cl, ol) {
    var s = mol.centralSpec({ central: c, outer: outer, orders: orders, centralLone: 0, outerLone: ol });
    s.atoms[0].lone = cl || 0;
    s.atoms.forEach(function (a) { if (Array.isArray(a.lone) || a.lone == null) a.lone = Array.isArray(a.lone) ? a.lone.length : 0; delete a.charge; });
    s.bonds.forEach(function (b) { delete b.dative; });
    return { atoms: s.atoms, bonds: s.bonds };
  }
  function pair(a, b, order, la, lb) {
    return { atoms: [{ el: a, x: -0.625, y: 0, lone: la }, { el: b, x: 0.625, y: 0, lone: lb }], bonds: [{ a: 0, b: 1, order: order }] };
  }
  var LEWIS = {
    h2: { f: 'H2', spec: function () { return pair('H', 'H', 1, 0, 0); } },
    cl2: { f: 'Cl2', spec: function () { return pair('Cl', 'Cl', 1, 3, 3); } },
    o2: { f: 'O2', spec: function () { return pair('O', 'O', 2, 2, 2); } },
    hcl: { f: 'HCl', spec: function () { return pair('H', 'Cl', 1, 0, 3); } },
    hf: { f: 'HF', spec: function () { return pair('H', 'F', 1, 0, 3); } },
    h2o: { f: 'H2O', spec: function () { return central('O', ['H', 'H'], null, 2); } },
    nh3: { f: 'NH3', spec: function () { return central('N', ['H', 'H', 'H'], null, 1); } },
    ch4: { f: 'CH4', spec: function () { return central('C', ['H', 'H', 'H', 'H'], null, 0); } },
    co2: { f: 'CO2', spec: function () { return central('C', ['O', 'O'], [2, 2], 0, [2, 2]); } },
    n2: { f: 'N2', spec: function () { return pair('N', 'N', 3, 1, 1); } },
    hcn: { f: 'HCN', spec: function () { return central('C', ['H', 'N'], [1, 3], 0, [0, 1]); } },
    ch2o: { f: 'CH2O', spec: function () { return central('C', ['H', 'H', 'O'], [1, 1, 2], 0, [0, 0, 2]); } },
    c2h4: { f: 'C2H4', spec: function () {
      return { atoms: [{ el: 'C', x: -0.65, y: 0, lone: 0 }, { el: 'C', x: 0.65, y: 0, lone: 0 }, { el: 'H', x: -1.4, y: -1, lone: 0 }, { el: 'H', x: -1.4, y: 1, lone: 0 }, { el: 'H', x: 1.4, y: -1, lone: 0 }, { el: 'H', x: 1.4, y: 1, lone: 0 }],
        bonds: [{ a: 0, b: 1, order: 2 }, { a: 0, b: 2, order: 1 }, { a: 0, b: 3, order: 1 }, { a: 1, b: 4, order: 1 }, { a: 1, b: 5, order: 1 }] };
    } },
    bf3: { f: 'BF3', spec: function () { return central('B', ['F', 'F', 'F'], null, 0, [3, 3, 3]); }, deficient: 'B' },
    becl2: { f: 'BeCl2', spec: function () { return central('Be', ['Cl', 'Cl'], null, 0, [3, 3]); }, deficient: 'Be' },
    nh4: { f: 'NH4+', charge: 1, spec: function () { return central('N', ['H', 'H', 'H', 'H'], null, 0); }, dative: 3 },
    h3o: { f: 'H3O+', charge: 1, spec: function () { return central('O', ['H', 'H', 'H'], null, 1); }, dative: 2 },
    oh: { f: 'OH-', charge: -1, spec: function () { return pair('O', 'H', 1, 3, 0); } },
    co: { f: 'CO', spec: function () { return pair('C', 'O', 3, 1, 1); } },
    no3: { f: 'NO3-', charge: -1, spec: function () { return central('N', ['O', 'O', 'O'], [1, 1, 2], 0, [3, 3, 2]); } },
    nf3: { f: 'NF3', spec: function () { return central('N', ['F', 'F', 'F'], null, 1, [3, 3, 3]); } },
    pcl3: { f: 'PCl3', spec: function () { return central('P', ['Cl', 'Cl', 'Cl'], null, 1, [3, 3, 3]); } },
    of2: { f: 'OF2', spec: function () { return central('O', ['F', 'F'], null, 2, [3, 3]); } },
    so2: { f: 'SO2', spec: function () { return central('S', ['O', 'O'], [2, 1], 1, [2, 3]); } },
    ccl4: { f: 'CCl4', spec: function () { return central('C', ['Cl', 'Cl', 'Cl', 'Cl'], null, 0, [3, 3, 3, 3]); } },
    ch3cl: { f: 'CH3Cl', spec: function () { return central('C', ['H', 'H', 'H', 'Cl'], null, 0, [0, 0, 0, 3]); } },
    chcl3: { f: 'CHCl3', spec: function () { return central('C', ['Cl', 'Cl', 'Cl', 'H'], null, 0, [3, 3, 3, 0]); } },
    h2s: { f: 'H2S', spec: function () { return central('S', ['H', 'H'], null, 2); } },
    i2: { f: 'I2', spec: function () { return pair('I', 'I', 1, 3, 3); } },
    br2: { f: 'Br2', spec: function () { return pair('Br', 'Br', 1, 3, 3); } },
    hbr: { f: 'HBr', spec: function () { return pair('H', 'Br', 1, 0, 3); } }
  };
  function totalElectrons(def, spec) {
    var n = 0; spec.atoms.forEach(function (a) { n += VAL[a.el]; });
    return n - (def.charge || 0);
  }
  function chargeStr(c) { return !c ? '' : (Math.abs(c) > 1 ? Math.abs(c) : '') + (c > 0 ? '+' : '-'); }
  function degrees(spec) { var d = spec.atoms.map(function () { return 0; }); spec.bonds.forEach(function (b) { d[b.a]++; d[b.b]++; }); return d; }
  /** Draw a species. variant: '' (final) | 'skeleton' | 'outer' (single bonds, outer atoms full, the rest on the central atom) | 'dative'. */
  function drawLewis(host, key, variant) {
    var def = LEWIS[key]; if (!def) return;
    var spec = def.spec(), final = !variant || variant === 'dative';
    if (!final) {
      var total = totalElectrons(def, spec), deg = degrees(spec), used = 0, centre = 0;
      deg.forEach(function (d, i) { if (d > deg[centre]) centre = i; });
      spec.bonds.forEach(function (b) { b.order = 1; used += 2; });
      spec.atoms.forEach(function (a, i) {
        a.lone = 0;
        if (variant === 'outer' && i !== centre && a.el !== 'H') { a.lone = 3; used += 6; }
      });
      if (variant === 'outer') spec.atoms[centre].lone = Math.max(0, Math.min(4 - deg[centre], Math.floor((total - used) / 2)));
    }
    if (variant === 'dative' && def.dative != null) spec.bonds[def.dative].dative = true;
    if (final && def.charge) { spec.bracket = true; spec.charge = chargeStr(def.charge); }
    spec.scale = 46;
    spec.label = final ? t('Lewis formula of {formula}', { formula: plainFormula(def.f) }) : t('Unfinished Lewis formula of {formula}', { formula: plainFormula(def.f) });
    mol.lewis(host, spec);
  }
  // Static figures in the page text.
  Array.prototype.forEach.call(document.querySelectorAll('[data-s22-lewis]'), function (host) {
    var parts = host.getAttribute('data-s22-lewis').split(':');
    try { drawLewis(host, parts[0], parts[1] || ''); } catch (e) { if (window.console) console.error('[s2-2] lewis figure', parts, e); }
  });

  /* ==========================================================================
     s2-2.lewis — Lewis formula builder
     ========================================================================== */
  S1.widgets.register('s2-2.lewis', function (w) {
    var ORDER = ['hcl', 'h2o', 'nh3', 'ch4', 'co2', 'n2', 'hcn', 'ch2o', 'c2h4', 'bf3', 'becl2', 'nh4', 'h3o', 'oh', 'co', 'no3'];
    var key = LEWIS[w.options.start] ? w.options.start : 'h2o', def, target, work, total, counted, solved, deg;
    var pick = picker(w, t('Molecule or ion'), ORDER.map(function (k) { return { value: k, label: plainFormula(LEWIS[k].f) }; }), function (v) { load(v); });
    pick.value = key;
    w.button(t('Check my formula'), check, { primary: true });
    w.button(t('Start again'), function () { load(key); });
    w.button(t('Show the answer'), showAnswer);

    var setTotal = w.readoutItem(t('Valence electrons in total'));
    var setPlaced = w.readoutItem(t('Placed so far'));
    var setLeft = w.readoutItem(t('Left to place'));

    var wrap = el('div', { class: 's22-lewis' });
    w.stage.appendChild(wrap);
    var steps = el('ol', { class: 's22-steps' });
    var right = el('div', { class: 's22-lewis__main' });
    wrap.appendChild(steps); wrap.appendChild(right);

    // Step 1: count
    var countBox = el('div', { class: 's22-count' });
    var cid = S1.util.uid('cnt');
    var countIn = el('input', { class: 'input input--num', id: cid, type: 'text', inputmode: 'numeric', autocomplete: 'off' });
    var countBtn = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Check the count') });
    var helpBtn = el('button', { class: 'btn btn--small btn--quiet', type: 'button', text: t('Show how to count') });
    countBox.appendChild(el('label', { class: 'control__label', for: cid, text: t('Step 1. How many valence electrons are there in total?') }));
    countBox.appendChild(el('div', { class: 'btn-row' }, [countIn, countBtn, helpBtn]));
    right.appendChild(countBox);
    var countHelp = el('p', { class: 's22-note', hidden: true });
    right.appendChild(countHelp);
    var host = el('div', { class: 's22-lewis__draw' });
    right.appendChild(host);
    var hint = el('p', { class: 's22-note' });
    right.appendChild(hint);
    var fb = feedback(right);

    countBtn.addEventListener('click', checkCount);
    countIn.addEventListener('keydown', function (e) { if (e.key === 'Enter') checkCount(); });
    helpBtn.addEventListener('click', function () { countHelp.hidden = false; });

    function countWorking() {
      var counts = {}, order = [];
      target.atoms.forEach(function (a) { if (!counts[a.el]) { counts[a.el] = 0; order.push(a.el); } counts[a.el]++; });
      var parts = order.map(function (e) { return e + ': ' + counts[e] + ' × ' + VAL[e] + ' = ' + counts[e] * VAL[e]; });
      var s = parts.join('; ') + '. ';
      if (def.charge > 0) s += t('The charge is {charge}, so take away {n}.', { charge: def.charge + '+', n: def.charge }) + ' ';
      if (def.charge < 0) s += t('The charge is {charge}, so add {n}.', { charge: -def.charge + MINUS, n: -def.charge }) + ' ';
      return s + t('Total = {n} electrons = {p} pairs.', { n: total, p: total / 2 });
    }
    function load(k) {
      key = k; def = LEWIS[k]; target = def.spec(); total = totalElectrons(def, target); deg = degrees(target);
      work = def.spec(); work.bonds.forEach(function (b) { b.order = 1; }); work.atoms.forEach(function (a) { a.lone = 0; });
      counted = false; solved = false;
      countIn.value = ''; countIn.disabled = false; countBtn.disabled = false; countHelp.hidden = true;
      countHelp.textContent = t('Use the group number: H 1, Be 2, B 3, C 4, N 5, O 6, F and Cl 7.') + ' ' + countWorking();
      fb.clear(); render();
    }
    function checkCount() {
      var v = parseInt(countIn.value, 10);
      if (isNaN(v)) { fb.set('partial', t('Type a whole number.'), ''); return; }
      if (v === total) {
        counted = true; countIn.disabled = true; countBtn.disabled = true;
        fb.set('right', t('Correct.'), '<p>' + t('{n} valence electrons, which is {p} pairs. The atoms are already joined with single bonds. Now place the remaining pairs.', { n: total, p: total / 2 }) + '</p>');
        render();
        var first = host.querySelector('.s22-hit'); if (first) first.focus();
      } else if (def.charge && v === total + 2 * def.charge) {
        fb.set('wrong', t('Not yet.'), '<p>' + t('You changed the count the wrong way for the charge. A positive ion has lost electrons. A negative ion has gained electrons.') + '</p>');
      } else if (def.charge && v === total + def.charge) {
        fb.set('wrong', t('Not yet.'), '<p>' + t('You forgot the charge. Take away one electron for each positive charge. Add one for each negative charge.') + '</p>');
      } else {
        fb.set('wrong', t('Not yet.'), '<p>' + t('Add the valence electrons of every atom. Count each atom, not each element.') + '</p>');
      }
    }
    function atomElectrons(i) {
      var n = 2 * work.atoms[i].lone;
      work.bonds.forEach(function (b) { if (b.a === i || b.b === i) n += 2 * b.order; });
      return n;
    }
    function placed() {
      var n = 0; work.atoms.forEach(function (a) { n += 2 * a.lone; }); work.bonds.forEach(function (b) { n += 2 * b.order; });
      return n;
    }
    function signature(s) {
      var inc = s.atoms.map(function () { return []; });
      s.bonds.forEach(function (b) { inc[b.a].push(b.order + s.atoms[b.b].el); inc[b.b].push(b.order + s.atoms[b.a].el); });
      return s.atoms.map(function (a, i) { return a.el + ':' + a.lone + ':' + inc[i].sort().join(','); }).sort().join('|');
    }
    function render() {
      var spec = { atoms: work.atoms.map(function (a) { return { el: a.el, x: a.x, y: a.y, lone: a.lone }; }), bonds: work.bonds.map(function (b) { return { a: b.a, b: b.b, order: b.order }; }), scale: 46 };
      if (solved && def.charge) { spec.bracket = true; spec.charge = chargeStr(def.charge); }
      spec.label = t('Lewis formula of {formula} being built', { formula: plainFormula(def.f) });
      mol.lewis(host, spec);
      var svg = host.querySelector('svg');
      if (counted && !solved && svg) {
        work.bonds.forEach(function (b, i) {
          var A = work.atoms[b.a], B = work.atoms[b.b];
          var c = svgEl('circle', { class: 's22-hit s22-hit--bond', cx: (A.x + B.x) / 2 * 46, cy: (A.y + B.y) / 2 * 46, r: 10, tabindex: 0, role: 'button' }, svg);
          c.setAttribute('aria-label', t('Bond between {a} and {b}: {n} shared pair(s). Press to change.', { a: A.el, b: B.el, n: b.order }));
          bind(c, function () { b.order = b.order % 3 + 1; }, 'b' + i);
        });
        work.atoms.forEach(function (a, i) {
          var c = svgEl('circle', { class: 's22-hit', cx: a.x * 46, cy: a.y * 46, r: 17, tabindex: 0, role: 'button' }, svg);
          c.setAttribute('aria-label', t('Atom {a}: {n} lone pair(s). Press to add one.', { a: a.el, n: a.lone }));
          var cap = Math.max(0, 4 - deg[i]);
          bind(c, function () {
            if (cap === 0) { fb.set('partial', t('No room here.'), '<p>' + t('This atom already has four bonds, so it has no room for a lone pair.') + '</p>'); return; }
            a.lone = (a.lone + 1) % (cap + 1);
          }, 'a' + i);
        });
      }
      var p = placed();
      setTotal(counted ? String(total) : '?');
      setPlaced(counted ? String(p) : MINUS);
      setLeft(counted ? String(total - p) : MINUS);
      hint.textContent = !counted ? t('Count the electrons first. Then you can click the atoms and bonds.')
        : solved ? '' : t('Click an atom to add a lone pair. After the highest number it goes back to zero. Click the middle of a bond to change it: single, double, triple, single.');
      var done = [counted, counted, counted && p === total, solved];
      var labels = [t('Count all the valence electrons. Adjust for the charge of an ion.'), t('Join the atoms with single bonds. (Done for you here. Each bond uses 2 electrons.)'),
        t('Give the outer atoms full shells with lone pairs. Hydrogen needs none. Put any electrons left over on the central atom.'),
        t('Check each atom. If the central atom has fewer than 8 electrons, move a lone pair from an outer atom to make a double or triple bond.')];
      if (def.charge) { labels.push(t('For an ion, add square brackets and the charge.')); done.push(solved); }
      steps.innerHTML = '';
      labels.forEach(function (s, i) {
        steps.appendChild(el('li', { 'data-done': String(!!done[i]) }, [el('span', { class: 's22-steps__mark', text: done[i] ? t('done') : t('to do') }), ' ' + s]));
      });
    }
    function bind(node, act, id) {
      function go(e) { if (e) e.preventDefault(); fb.clear(); act(); render(); var again = host.querySelector('[data-hit="' + id + '"]'); if (again) again.focus(); }
      node.setAttribute('data-hit', id);
      node.addEventListener('click', go);
      node.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') go(e); });
    }
    function successNote() {
      var notes = [];
      if (def.deficient === 'B') notes.push(t('Boron has only 6 electrons here. This is an atom with fewer than an octet, and it is the accepted formula.'));
      if (def.deficient === 'Be') notes.push(t('Beryllium has only 4 electrons here. This is an atom with fewer than an octet, and it is the accepted formula.'));
      if (key === 'nh4') notes.push(t('One of the four N–H bonds is a coordination bond: both electrons came from nitrogen. All four bonds are identical once formed.'));
      if (key === 'h3o') notes.push(t('One of the three O–H bonds is a coordination bond: both electrons came from a lone pair on oxygen.'));
      if (key === 'co') notes.push(t('Each atom keeps one lone pair. Carbon gives 2 electrons to the triple bond and oxygen gives 4. So one of the three shared pairs comes only from oxygen: it is a coordination bond.'));
      if (key === 'no3') notes.push(t('The double bond could go to any one of the three oxygen atoms. HL students study what this means (resonance) on the HL page.'));
      if (def.charge) notes.push(t('The brackets and the charge have been added. In an exam the charge must be shown.'));
      return notes.map(function (n) { return '<p>' + n + '</p>'; }).join('');
    }
    function check() {
      if (!counted) { fb.set('partial', t('Count first.'), '<p>' + t('Do step 1 before you place any electrons.') + '</p>'); return; }
      if (solved) return;
      var p = placed(), i, n;
      if (p > total) { fb.set('wrong', t('Too many electrons.'), '<p>' + t('You have placed {p} electrons, but there are only {n}. Remove {d}.', { p: p, n: total, d: p - total }) + '</p>'); return; }
      if (p < total) { fb.set('wrong', t('Electrons are missing.'), '<p>' + t('You have placed {p} of the {n} electrons. A Lewis formula must show all the valence electrons, including the lone pairs on the outer atoms.', { p: p, n: total }) + '</p>'); return; }
      for (i = 0; i < work.atoms.length; i++) {
        n = atomElectrons(i);
        if (work.atoms[i].el === 'H' && n !== 2) { fb.set('wrong', t('Check hydrogen.'), '<p>' + t('A hydrogen atom holds only 2 electrons: one single bond and no lone pairs.') + '</p>'); return; }
        if (n > 8) { fb.set('wrong', t('More than an octet.'), '<p>' + t('The atom {a} has {n} electrons around it. In this topic no atom has more than four pairs.', { a: work.atoms[i].el, n: n }) + '</p>'); return; }
      }
      if (signature(work) === signature(target)) {
        solved = true; render();
        fb.set('right', t('Correct.'), '<p>' + t('All {n} electrons are shown and every atom has the right number.', { n: total }) + '</p>' + successNote());
        return;
      }
      for (i = 0; i < work.atoms.length; i++) {
        n = atomElectrons(i);
        if (work.atoms[i].el !== 'H' && n < 8 && n < atomTarget(i)) {
          fb.set('wrong', t('Not yet.'), '<p>' + t('The atom {a} has only {n} electrons. Take a lone pair from a neighbouring atom and share it: click the atom to remove the lone pair, then click the bond to make it a multiple bond.', { a: work.atoms[i].el, n: n }) + '</p>'); return;
        }
      }
      if (def.deficient) { fb.set('partial', t('Nearly.'), '<p>' + t('Every atom has 8 electrons, but this is not the accepted formula. {a} is an exception: draw it with single bonds only, so it has fewer than an octet.', { a: def.deficient }) + '</p>'); return; }
      fb.set('partial', t('Nearly.'), '<p>' + t('The electron count is right, but the pairs are not in the usual places. Try the most symmetrical arrangement.') + '</p>');
    }
    function atomTarget(i) {
      var n = 2 * target.atoms[i].lone;
      target.bonds.forEach(function (b) { if (b.a === i || b.b === i) n += 2 * b.order; });
      return n;
    }
    function showAnswer() {
      work = def.spec(); counted = true; solved = true;
      countIn.value = String(total); countIn.disabled = true; countBtn.disabled = true; countHelp.hidden = false;
      render();
      fb.set('', t('Answer shown.'), '<p>' + countWorking() + '</p>' + successNote());
    }
    load(key);
  });

  /* ==========================================================================
     s2-2.bonds — bond length and bond enthalpy (data booklet sections 11 and 12)
     ========================================================================== */
  var BONDS = {
    cc: { label: 'C–C, C=C, C≡C', a: 'C', b: 'C', rows: [[1, 154, 346], [2, 134, 614], [3, 120, 839]] },
    nn: { label: 'N–N, N=N, N≡N', a: 'N', b: 'N', rows: [[1, 146, 158], [2, 125, 470], [3, 110, 945]] },
    co: { label: 'C–O, C=O, C≡O', a: 'C', b: 'O', rows: [[1, 143, 358], [2, 122, 804], [3, 113, 1077]] },
    cn: { label: 'C–N, C=N, C≡N', a: 'C', b: 'N', rows: [[1, 147, 286], [2, 130, 615], [3, 116, 890]] },
    oo: { label: 'O–O, O=O', a: 'O', b: 'O', rows: [[1, 148, 144], [2, 121, 498]] }
  };
  S1.widgets.register('s2-2.bonds', function (w) {
    var key = 'cc';
    w.select({ label: t('Pair of atoms'), value: key, options: Object.keys(BONDS).map(function (k) { return { value: k, label: BONDS[k].label }; }), onChange: function (v) { key = v; update(); } });
    var setLen = w.readoutItem(t('Bond length'), { text: true });
    var setStr = w.readoutItem(t('Bond enthalpy'), { text: true });
    var cv = w.canvas({ height: function (wd) { return wd < 480 ? 330 : 250; }, label: t('Bond lengths drawn to scale, with bars for bond enthalpy') });
    var SYM = ['', '–', '=', '≡'];
    cv.draw(function (ctx, W, H) {
      var f = fonts(w), fam = BONDS[key], rows = fam.rows, narrow = W < 480;
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), accent = w.color('--accent'), line = w.color('--line-strong'), surf = w.color('--surface-2');
      var rowH = H / 3, leftW = narrow ? W : Math.min(300, W * 0.45), pxPerPm = Math.min(1.05, (leftW - 110) / 160);
      var barX = narrow ? 12 : leftW + 20, barMax = W - barX - 96;
      rows.forEach(function (r, i) {
        var y = rowH * i + (narrow ? rowH * 0.32 : rowH / 2), x1 = 34, x2 = x1 + r[1] * pxPerPm;
        // bond lines
        var offs = r[0] === 1 ? [0] : r[0] === 2 ? [-4, 4] : [-6, 0, 6];
        ctx.strokeStyle = ink; ctx.lineWidth = 2;
        offs.forEach(function (o) { ctx.beginPath(); ctx.moveTo(x1, y + o); ctx.lineTo(x2, y + o); ctx.stroke(); });
        [[x1, fam.a], [x2, fam.b]].forEach(function (p) {
          ctx.beginPath(); ctx.arc(p[0], y, 13, 0, Math.PI * 2); ctx.fillStyle = surf; ctx.fill(); ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.stroke();
          ctx.fillStyle = ink; ctx.font = f.body(14, true); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(p[1], p[0], y + 0.5);
        });
        ctx.textAlign = 'left'; ctx.font = f.mono(13, true); ctx.fillStyle = ink;
        ctx.fillText(r[1] + ' pm', x2 + 22, y);
        // enthalpy bar
        var by = narrow ? y + 28 : y - 9, bw = barMax * r[2] / 1100;
        ctx.fillStyle = accent; ctx.fillRect(barX, by, bw, 18);
        ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.strokeRect(barX + 0.5, by + 0.5, barMax, 17);
        ctx.fillStyle = ink; ctx.font = f.mono(13, true); ctx.textBaseline = 'middle';
        var below = bw > barMax - 110;                 // no room after the bar: write the value under its right end
        ctx.textAlign = below ? 'right' : 'left';
        ctx.fillText(r[2] + ' kJ mol⁻¹', below ? barX + barMax : barX + bw + 8, by + (below ? 30 : 9));
        ctx.textAlign = 'left';
        ctx.fillStyle = ink2; ctx.font = f.body(12);
        if (narrow) ctx.fillText(fam.a + SYM[r[0]] + fam.b, barX, by - 46 < rowH * i + 8 ? rowH * i + 10 : by - 46);
      });
      ctx.fillStyle = ink2; ctx.font = f.body(12); ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      if (!narrow) { ctx.fillText(t('length (to scale)'), 20, 14); ctx.fillText(t('bond enthalpy'), barX, 14); }
    });
    function update() {
      var rows = BONDS[key].rows, fam = BONDS[key];
      setLen(rows.map(function (r) { return fam.a + SYM[r[0]] + fam.b + ' ' + r[1] + ' pm'; }).join(' &gt; '));
      setStr(rows.map(function (r) { return fam.a + SYM[r[0]] + fam.b + ' ' + r[2]; }).join(' &lt; ') + ' kJ mol<sup>' + MINUS + '1</sup>');
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     s2-2.vsepr — 3-D shapes for two, three and four electron domains
     ========================================================================== */
  var SHAPE_KEY = { '2-0': 'linear', '3-0': 'trigonal planar', '3-1': 'bent', '4-0': 'tetrahedral', '4-1': 'trigonal pyramidal', '4-2': 'bent' };
  var DOMAIN_GEO = { 2: 'linear', 3: 'trigonal planar', 4: 'tetrahedral' };
  var IDEAL = { 2: 180, 3: 120, 4: 109.5 };
  var VSEPR = [
    { k: 'co2', f: 'CO2', d: 2, lp: 0, c: 'C', o: ['O', 'O'], ord: [2, 2], ang: 180 },
    { k: 'becl2', f: 'BeCl2', d: 2, lp: 0, c: 'Be', o: ['Cl', 'Cl'], ang: 180 },
    { k: 'hcn', f: 'HCN', d: 2, lp: 0, c: 'C', o: ['H', 'N'], ord: [1, 3], ang: 180 },
    { k: 'bf3', f: 'BF3', d: 3, lp: 0, c: 'B', o: ['F', 'F', 'F'], ang: 120 },
    { k: 'ch2o', f: 'CH2O', d: 3, lp: 0, c: 'C', o: ['O', 'H', 'H'], ord: [2, 1, 1], ang: 116, multi: true },
    { k: 'so2', f: 'SO2', d: 3, lp: 1, c: 'S', o: ['O', 'O'], ord: [2, 1], ang: 119, oneFormula: true },
    { k: 'ch4', f: 'CH4', d: 4, lp: 0, c: 'C', o: ['H', 'H', 'H', 'H'], ang: 109.5 },
    { k: 'nh4', f: 'NH4+', d: 4, lp: 0, c: 'N', o: ['H', 'H', 'H', 'H'], ang: 109.5 },
    { k: 'nh3', f: 'NH3', d: 4, lp: 1, c: 'N', o: ['H', 'H', 'H'], ang: 107 },
    { k: 'pcl3', f: 'PCl3', d: 4, lp: 1, c: 'P', o: ['Cl', 'Cl', 'Cl'], ang: 100 },
    { k: 'h2o', f: 'H2O', d: 4, lp: 2, c: 'O', o: ['H', 'H'], ang: 104.5 },
    { k: 'of2', f: 'OF2', d: 4, lp: 2, c: 'O', o: ['F', 'F'], ang: 103 }
  ];
  /** A viewer3d spec drawn with the measured bond angle (bond lengths are not to scale). */
  function vseprSpec(ex) {
    var L = 1.5, rad = Math.PI / 180, atoms = [{ el: ex.c, x: 0, y: 0, z: 0 }], bonds = [], lone = [], angle = null, h, i;
    function add(sym, v, order) { atoms.push({ el: sym, x: v[0] * L, y: v[1] * L, z: v[2] * L }); bonds.push({ a: 0, b: atoms.length - 1, order: order || 1 }); }
    var ord = ex.ord || [];
    if (ex.d === 2) { add(ex.o[0], [-1, 0, 0], ord[0]); add(ex.o[1], [1, 0, 0], ord[1]); angle = [1, 0, 2]; }
    else if (ex.d === 3 && ex.lp === 0) {
      if (ex.multi) { h = ex.ang / 2 * rad; add(ex.o[0], [0, 1, 0], ord[0]); add(ex.o[1], [Math.sin(h), -Math.cos(h), 0], ord[1]); add(ex.o[2], [-Math.sin(h), -Math.cos(h), 0], ord[2]); angle = [2, 0, 3]; }
      else { for (i = 0; i < 3; i++) add(ex.o[i], [Math.sin(i * 120 * rad), Math.cos(i * 120 * rad), 0], ord[i]); angle = [2, 0, 3]; }
    } else if (ex.lp === 0) {
      var T = [[0, 1, 0], [Math.sqrt(8 / 9), -1 / 3, 0], [-Math.sqrt(2 / 9), -1 / 3, Math.sqrt(2 / 3)], [-Math.sqrt(2 / 9), -1 / 3, -Math.sqrt(2 / 3)]];
      T.forEach(function (v, j) { add(ex.o[j], v, ord[j]); }); angle = [2, 0, 3];
    } else if (ex.o.length === 2) {            // bent
      h = ex.ang / 2 * rad;
      add(ex.o[0], [Math.sin(h), -Math.cos(h), 0], ord[0]); add(ex.o[1], [-Math.sin(h), -Math.cos(h), 0], ord[1]); angle = [1, 0, 2];
      if (ex.lp === 1) lone.push({ on: 0, dir: [0, 1, 0] });
      else { lone.push({ on: 0, dir: [0, 0.55, 0.83] }); lone.push({ on: 0, dir: [0, 0.55, -0.83] }); }
    } else {                                   // trigonal pyramidal
      var sb = 2 / Math.sqrt(3) * Math.sin(ex.ang / 2 * rad), cb = Math.sqrt(1 - sb * sb);
      for (i = 0; i < 3; i++) add(ex.o[i], [sb * Math.cos(i * 120 * rad), -cb, sb * Math.sin(i * 120 * rad)], ord[i]);
      lone.push({ on: 0, dir: [0, 1, 0] }); angle = [1, 0, 2];
    }
    // Turn the model so that no atom or lone pair starts hidden behind the central atom in the viewer's first view.
    var ry = (ex.d === 4 && ex.o.length >= 3 ? 45 : 0) * rad, rx = (ex.d === 4 && ex.lp === 2 ? -20 : 0) * rad;
    function turn(v) {
      var y1 = v[1] * Math.cos(rx) - v[2] * Math.sin(rx), z1 = v[1] * Math.sin(rx) + v[2] * Math.cos(rx);
      return [v[0] * Math.cos(ry) + z1 * Math.sin(ry), y1, -v[0] * Math.sin(ry) + z1 * Math.cos(ry)];
    }
    atoms.forEach(function (a) { var v = turn([a.x, a.y, a.z]); a.x = v[0]; a.y = v[1]; a.z = v[2]; });
    lone.forEach(function (l) { l.dir = turn(l.dir); });
    return { atoms: atoms, bonds: bonds, lonePairs: lone, angle: angle, angleText: measured(ex), height: 280,
      label: t('3-D model of {formula}', { formula: plainFormula(ex.f) }) };
  }
  function measured(ex) { return [116, 119, 100, 103].indexOf(ex.ang) > -1 ? t('about {a}', { a: ex.ang + DEG }) : ex.ang + DEG; }
  function shapeName(k) {
    return { 'linear': t('linear'), 'trigonal planar': t('trigonal planar'), 'bent': t('bent (V-shaped)'), 'tetrahedral': t('tetrahedral'), 'trigonal pyramidal': t('trigonal pyramidal') }[k];
  }
  function predictedAngle(ex) {
    if (ex.lp === 0 && !ex.multi) return IDEAL[ex.d] + DEG;
    return t('less than {a}', { a: IDEAL[ex.d] + DEG });
  }
  S1.widgets.register('s2-2.vsepr', function (w) {
    var mode = 'explore', dom = 4, lp = 0, ex = VSEPR[6], view = null, quizEx = null, answered = false;
    var modeSeg = seg(w, t('Mode'), [{ value: 'explore', label: t('Explore') }, { value: 'predict', label: t('Predict first') }], mode, function (v) { mode = v; sync(); });
    var domSeg = seg(w, t('Electron domains'), [2, 3, 4].map(function (n) { return { value: n, label: String(n) }; }), dom, function (v) { dom = v; if (lp > dom - 2) lp = Math.max(0, dom - 2); pickFirst(); sync(); });
    var lpSeg = seg(w, t('Lone pairs on the central atom'), [0, 1, 2].map(function (n) { return { value: n, label: String(n) }; }), lp, function (v) { lp = v; pickFirst(); sync(); });
    var exPick = picker(w, t('Example'), [], function (v) { ex = VSEPR.filter(function (e) { return e.k === v; })[0]; sync(); });

    var setDomGeo = w.readoutItem(t('Electron domain geometry'));
    var setMolGeo = w.readoutItem(t('Molecular geometry'));
    var setAngle = w.readoutItem(t('Bond angle'));
    var setNote = w.readoutItem(t('Notice'), { text: true });

    var quiz = el('div', { class: 's22-predict', hidden: true });
    w.stage.appendChild(quiz);
    var qTitle = el('p', { class: 's22-predict__q' });
    var qLewis = el('div', { class: 's22-lewis__draw' });
    quiz.appendChild(qTitle); quiz.appendChild(qLewis);
    var form = el('div', { class: 's22-predict__form' });
    quiz.appendChild(form);
    var GEO2 = ['linear', 'trigonal planar', 'tetrahedral'], GEO = ['linear', 'trigonal planar', 'bent', 'tetrahedral', 'trigonal pyramidal'];
    var ANG = ['180', '120', '<120', '109.5', '<109.5'];
    function angLabel(a) { return a.charAt(0) === '<' ? t('less than {a}', { a: a.slice(1) + DEG }) : a + DEG; }
    var none = [{ value: '', label: t('Choose…') }];
    var pDom = picker(w, t('Electron domain geometry'), none.concat(GEO2.map(function (g) { return { value: g, label: shapeName(g) }; })), function () {}, form);
    var pMol = picker(w, t('Molecular geometry'), none.concat(GEO.map(function (g) { return { value: g, label: shapeName(g) }; })), function () {}, form);
    var pAng = picker(w, t('Bond angle'), none.concat(ANG.map(function (a) { return { value: a, label: angLabel(a) }; })), function () {}, form);
    var row = el('div', { class: 'btn-row' });
    var checkBtn = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Check my prediction') });
    var nextBtn = el('button', { class: 'btn btn--small', type: 'button', text: t('Next molecule') });
    row.appendChild(checkBtn); row.appendChild(nextBtn); quiz.appendChild(row);
    var fb = feedback(quiz);
    var host = el('div', { class: 's22-view' });
    w.stage.appendChild(host);

    checkBtn.addEventListener('click', function () {
      if (!pDom.value || !pMol.value || !pAng.value) { fb.set('partial', t('Choose all three.'), ''); return; }
      var e = quizEx, okD = pDom.value === DOMAIN_GEO[e.d], okM = pMol.value === SHAPE_KEY[e.d + '-' + e.lp];
      var wantA = (e.lp === 0 ? '' : '<') + IDEAL[e.d], okA = pAng.value === wantA;
      var lines = [];
      lines.push(t('The central atom has {d} electron domains: {b} bonding and {l} lone pair(s). A double or triple bond counts as one domain.', { d: e.d, b: e.d - e.lp, l: e.lp }));
      lines.push((okD ? t('Electron domain geometry: correct.') : t('Electron domain geometry: not correct.')) + ' ' + t('{d} domains are arranged as {g}.', { d: e.d, g: shapeName(DOMAIN_GEO[e.d]) }));
      lines.push((okM ? t('Molecular geometry: correct.') : t('Molecular geometry: not correct.')) + ' ' + t('Looking at the atoms only, the shape is {g}.', { g: shapeName(SHAPE_KEY[e.d + '-' + e.lp]) }));
      lines.push((okA ? t('Bond angle: correct.') : t('Bond angle: not correct.')) + ' ' + (e.lp ? t('Lone pairs repel more than bonding pairs, so the angle is less than {a}. The measured value is {m}.', { a: IDEAL[e.d] + DEG, m: measured(e) }) : t('With no lone pairs the angle is {a}.', { a: IDEAL[e.d] + DEG })));
      var n = (okD ? 1 : 0) + (okM ? 1 : 0) + (okA ? 1 : 0);
      fb.set(n === 3 ? 'right' : n ? 'partial' : 'wrong', t('{n} of 3 correct.', { n: n }), lines.map(function (s) { return '<p>' + s + '</p>'; }).join(''));
      answered = true; show(e);
    });
    nextBtn.addEventListener('click', newQuiz);

    function pickFirst() { ex = VSEPR.filter(function (e) { return e.d === dom && e.lp === lp; })[0]; }
    function show(e) {
      host.hidden = false;
      var spec = vseprSpec(e);
      if (!view) view = mol.viewer3d(host, spec); else view.setSpec(spec);
      setDomGeo(shapeName(DOMAIN_GEO[e.d]));
      setMolGeo(shapeName(SHAPE_KEY[e.d + '-' + e.lp]));
      setAngle(predictedAngle(e) + (e.lp || e.multi ? ' (' + t('measured: {m}', { m: measured(e) }) + ')' : ''));
      var note = e.lp ? t('Each lone pair is an electron domain too. It takes up space but is not part of the shape name.') : t('No lone pairs: the molecular geometry is the same as the electron domain geometry.');
      if (e.multi) note = t('The double bond has more electron density, so it repels more. The H–C–H angle closes to about 116° and each H–C=O angle opens to about 122°.');
      if (e.oneFormula) note += ' ' + t('The model is drawn from one Lewis formula. In the real molecule the two bonds are equal (an HL idea).');
      if (e.k === 'nh4') note += ' ' + t('An ion follows the same rules as a molecule.');
      setNote(note);
    }
    function newQuiz() {
      var pool = VSEPR.filter(function (e) { return !e.multi && (!quizEx || e.k !== quizEx.k); });
      quizEx = pool[Math.floor(Math.random() * pool.length)];
      answered = false; pDom.value = ''; pMol.value = ''; pAng.value = ''; fb.clear();
      qTitle.innerHTML = t('Predict the geometry around the central atom of {formula}.', { formula: chem.formula(quizEx.f) });
      drawLewis(qLewis, quizEx.k, '');
      host.hidden = true;
      setDomGeo('?'); setMolGeo('?'); setAngle('?'); setNote(t('Count the electron domains in the Lewis formula. Then choose your three answers.'));
    }
    function sync() {
      var explore = mode === 'explore';
      domSeg.el.hidden = lpSeg.el.hidden = exPick.el.hidden = !explore;
      quiz.hidden = explore;
      if (explore) {
        domSeg.set(dom); lpSeg.set(lp);
        lpSeg.enable(function (v) { return v <= dom - 2; });
        var list = VSEPR.filter(function (e) { return e.d === dom && e.lp === lp; });
        if (list.indexOf(ex) < 0) ex = list[0];
        exPick.setOptions(list.map(function (e) { return { value: e.k, label: plainFormula(e.f) }; }), ex.k);
        show(ex);
      } else if (!quizEx || answered) newQuiz();
      else { host.hidden = true; }
    }
    sync();
  });

  /* ==========================================================================
     s2-2.polarity — bond dipoles and the net dipole
     ========================================================================== */
  var R3 = Math.sqrt(3), TET = [[0, 1, 0], [Math.sqrt(8 / 9), -1 / 3, 0], [-Math.sqrt(2 / 9), -1 / 3, Math.sqrt(2 / 3)], [-Math.sqrt(2 / 9), -1 / 3, -Math.sqrt(2 / 3)]];
  var TRI = [[0, 1, 0], [R3 / 2, -0.5, 0], [-R3 / 2, -0.5, 0]];
  function bentDirs(deg) { var h = deg / 2 * Math.PI / 180; return [[Math.sin(h), -Math.cos(h), 0], [-Math.sin(h), -Math.cos(h), 0]]; }
  var POLAR = [
    { k: 'hcl', f: 'HCl', c: 'Cl', o: ['H'], dirs: [[-1, 0, 0]], lone: [[1, 0, 0], [0, 1, 0], [0, -1, 0]], shape: 'linear' },
    { k: 'cl2', f: 'Cl2', c: 'Cl', o: ['Cl'], dirs: [[-1, 0, 0]], shape: 'linear' },
    { k: 'co2', f: 'CO2', c: 'C', o: ['O', 'O'], ord: [2, 2], dirs: [[-1, 0, 0], [1, 0, 0]], shape: 'linear' },
    { k: 'becl2', f: 'BeCl2', c: 'Be', o: ['Cl', 'Cl'], dirs: [[-1, 0, 0], [1, 0, 0]], shape: 'linear' },
    { k: 'hcn', f: 'HCN', c: 'C', o: ['H', 'N'], ord: [1, 3], dirs: [[-1, 0, 0], [1, 0, 0]], shape: 'linear' },
    { k: 'h2o', f: 'H2O', c: 'O', o: ['H', 'H'], dirs: bentDirs(104.5), lone: [[0, 0.55, 0.83], [0, 0.55, -0.83]], shape: 'bent' },
    { k: 'so2', f: 'SO2', c: 'S', o: ['O', 'O'], ord: [2, 1], dirs: bentDirs(119), lone: [[0, 1, 0]], shape: 'bent' },
    { k: 'bf3', f: 'BF3', c: 'B', o: ['F', 'F', 'F'], dirs: TRI, shape: 'trigonal planar' },
    { k: 'ch2o', f: 'CH2O', c: 'C', o: ['O', 'H', 'H'], ord: [2, 1, 1], dirs: [[0, 1, 0]].concat(bentDirs(116)), shape: 'trigonal planar' },
    { k: 'nh3', f: 'NH3', c: 'N', o: ['H', 'H', 'H'], dirs: TET.slice(1), lone: [TET[0]], shape: 'trigonal pyramidal' },
    { k: 'ch4', f: 'CH4', c: 'C', o: ['H', 'H', 'H', 'H'], dirs: TET, shape: 'tetrahedral' },
    { k: 'ccl4', f: 'CCl4', c: 'C', o: ['Cl', 'Cl', 'Cl', 'Cl'], dirs: TET, shape: 'tetrahedral' },
    { k: 'ch3cl', f: 'CH3Cl', c: 'C', o: ['Cl', 'H', 'H', 'H'], dirs: TET, shape: 'tetrahedral' },
    { k: 'chcl3', f: 'CHCl3', c: 'C', o: ['H', 'Cl', 'Cl', 'Cl'], dirs: TET, shape: 'tetrahedral' },
    { k: 'nh4', f: 'NH4+', c: 'N', o: ['H', 'H', 'H', 'H'], dirs: TET, shape: 'tetrahedral' }
  ];
  /** Model: each bond dipole is a vector of length Δχ pointing at the more electronegative atom. Returns {bonds, net: [x,y,z], size}. */
  function dipoleModel(m) {
    var net = [0, 0, 0], bonds = m.o.map(function (sym, i) {
      var d = Math.round((EN[sym] - EN[m.c]) * 10) / 10, v = m.dirs[i];
      net[0] += d * v[0]; net[1] += d * v[1]; net[2] += d * v[2];
      return { a: m.c, b: sym, diff: Math.abs(d), neg: d > 0 ? sym : d < 0 ? m.c : null, sign: d };
    });
    var size = Math.hypot(net[0], net[1], net[2]);
    return { bonds: bonds, net: net, size: size < 1e-6 ? 0 : size };
  }
  S1.widgets.register('s2-2.polarity', function (w) {
    var m = POLAR[5], model = dipoleModel(m), revealed = false, guess = null;
    picker(w, t('Molecule or ion'), POLAR.map(function (p) { return { value: p.k, label: plainFormula(p.f) }; }), function (v) {
      m = POLAR.filter(function (p) { return p.k === v; })[0]; model = dipoleModel(m); revealed = false; guess = null; update();
    }).value = m.k;
    var yaw = w.slider({ label: t('Turn the model'), min: 0, max: 360, step: 5, value: 20, unit: DEG, onInput: function () { cv.draw(); } });
    var setBonds = w.readoutItem(t('Each bond (difference in electronegativity)'), { text: true });
    var setCancel = w.readoutItem(t('Do the bond dipoles cancel?'), { text: true });
    var setVerdict = w.readoutItem(t('Net dipole'), { text: true });
    var cv = w.canvas({ height: 290, label: t('Model of the molecule with an arrow along each polar bond') });
    var ask = el('div', { class: 's22-ask' });
    w.stage.appendChild(ask);
    ask.appendChild(el('p', { class: 's22-predict__q', text: t('Predict first: is there a net dipole?') }));
    var row = el('div', { class: 'btn-row' });
    var bYes = el('button', { class: 'btn btn--small', type: 'button', text: t('Yes: it is polar') });
    var bNo = el('button', { class: 'btn btn--small', type: 'button', text: t('No: the dipoles cancel') });
    row.appendChild(bYes); row.appendChild(bNo); ask.appendChild(row);
    var fb = feedback(ask);
    bYes.addEventListener('click', function () { answer(true); });
    bNo.addEventListener('click', function () { answer(false); });

    function answer(saysPolar) {
      guess = saysPolar; revealed = true;
      var polar = model.size > 0, right = polar === saysPolar, why;
      var anyPolar = model.bonds.some(function (b) { return b.diff > 0; });
      if (!anyPolar) why = t('The two atoms are the same, so the bond is not polar. There is nothing to add up.');
      else if (!polar) why = t('The bonds are polar, but the shape is symmetrical: {shape}. The bond dipoles are equal and are arranged symmetrically, so they cancel.', { shape: m.shape === 'bent' ? t('bent') : shapeName(m.shape) });
      else if (m.o.length === 1) why = t('There is one polar bond, so its dipole is the net dipole.');
      else why = (model.bonds.every(function (b) { return b.b === model.bonds[0].b; }) ? t('The shape is {shape}, which is not symmetrical. The bond dipoles do not cancel, so the molecule has a net dipole.', { shape: m.shape === 'bent' ? t('bent') : shapeName(m.shape) }) : t('The shape is {shape}, but the outer atoms are not all the same. The bond dipoles are not equal, so they do not cancel. The molecule has a net dipole.', { shape: m.shape === 'bent' ? t('bent') : shapeName(m.shape) }));
      if (m.k === 'nh4') why += ' ' + t('The ion still has its overall charge of 1+, but it has no net dipole.');
      if (m.k === 'ch4') why += ' ' + t('The C–H difference is only 0.4, so each bond is only slightly polar anyway.');
      fb.set(right ? 'right' : 'wrong', right ? t('Correct.') : t('Not this time.'), '<p>' + why + '</p>');
      update();
    }
    function update() {
      setBonds(model.bonds.filter(function (b, i, arr) { return arr.findIndex(function (o) { return o.b === b.b; }) === i; }).map(function (b) {
        var hi = Math.max(EN[b.a], EN[b.b]), lo = Math.min(EN[b.a], EN[b.b]);
        return (m.o.length === 1 && b.b === 'H' ? b.b + '–' + b.a : b.a + '–' + b.b) + ': ' + hi.toFixed(1) + ' ' + MINUS + ' ' + lo.toFixed(1) + ' = ' + b.diff.toFixed(1) + (b.neg ? ' (' + t('{a} is {d}', { a: b.neg, d: DELTA + MINUS }) + ')' : ' (' + t('not polar') + ')');
      }).join('<br>'));
      if (!revealed) { setCancel(t('Predict first.')); setVerdict(t('Predict first.')); fb.clear(); }
      else {
        setCancel(model.size > 0 ? t('No') : t('Yes'));
        setVerdict(model.size > 0 ? t('Yes: the molecule is polar.') : (m.k === 'nh4' ? t('None: the ion has no net dipole.') : t('None: the molecule is non-polar.')));
      }
      cv.draw();
    }
    function project(p, W, H, scale) {
      var a = yaw.value * Math.PI / 180, pitch = 0.3, cy = Math.cos(a), sy = Math.sin(a), cp = Math.cos(pitch), sp = Math.sin(pitch);
      var x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy, y = p[1] * cp - z * sp;
      return { x: W / 2 + x * scale, y: H / 2 - y * scale + 6, z: p[1] * sp + z * cp };
    }
    function arrow(ctx, x1, y1, x2, y2, width, crossed) {
      var dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy); if (len < 6) return;
      var ux = dx / len, uy = dy / len, hs = Math.min(11, len * 0.45) + width;
      ctx.lineWidth = width; ctx.lineCap = 'butt';
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - ux * hs * 0.8, y2 - uy * hs * 0.8); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - ux * hs - uy * hs * 0.5, y2 - uy * hs + ux * hs * 0.5); ctx.lineTo(x2 - ux * hs + uy * hs * 0.5, y2 - uy * hs - ux * hs * 0.5); ctx.closePath(); ctx.fill();
      if (crossed) { var cx = x1 + ux * 5, cyy = y1 + uy * 5; ctx.lineWidth = Math.max(1.5, width * 0.8); ctx.beginPath(); ctx.moveTo(cx - uy * 6, cyy + ux * 6); ctx.lineTo(cx + uy * 6, cyy - ux * 6); ctx.stroke(); }
    }
    cv.draw(function (ctx, W, H) {
      var f = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), accent = w.color('--accent'), surf = w.color('--surface'), soft = w.color('--accent-soft');
      var scale = Math.min(W, H) / 2 / 1.75, L = 1.15, items = [];
      var two = m.o.length === 1, shift = two ? [L / 2, 0, 0] : [0, 0, 0];
      var C = project(shift, W, H, scale);
      items.push({ z: C.z, kind: 'atom', p: C, el: m.c });
      m.o.forEach(function (sym, i) {
        var d = m.dirs[i], P = project([shift[0] + d[0] * L, d[1] * L, d[2] * L], W, H, scale);
        items.push({ z: (C.z + P.z) / 2 - 0.01, kind: 'bond', p: P, i: i });
        items.push({ z: P.z, kind: 'atom', p: P, el: sym });
      });
      (m.lone || []).forEach(function (d) { var P = project([shift[0] + d[0] * 0.62, d[1] * 0.62, d[2] * 0.62], W, H, scale); items.push({ z: P.z, kind: 'lone', p: P }); });
      items.sort(function (a, b) { return a.z - b.z; });
      items.forEach(function (it) {
        if (it.kind === 'bond') {
          var P = it.p, dx = P.x - C.x, dy = P.y - C.y, len = Math.hypot(dx, dy) || 1, nx = -dy / len, ny = dx / len, order = (m.ord || [])[it.i] || 1;
          var offs = order === 1 ? [0] : order === 2 ? [-3, 3] : [-5, 0, 5];
          ctx.strokeStyle = ink; ctx.lineWidth = 2;
          var r1 = Math.min(len / 2, m.c === 'H' ? 12 : 16), r2 = Math.min(len / 2, m.o[it.i] === 'H' ? 12 : 16), ex = dx / len, ey = dy / len;
          offs.forEach(function (o) { ctx.beginPath(); ctx.moveTo(C.x + ex * r1 + nx * o, C.y + ey * r1 + ny * o); ctx.lineTo(P.x - ex * r2 + nx * o, P.y - ey * r2 + ny * o); ctx.stroke(); });
          var b = model.bonds[it.i];
          if (b.diff > 0 && len > 30) {
            var off = 15 + (order - 1) * 3, s = b.sign > 0 ? 1 : -1;
            var ax = C.x + dx * 0.25 + nx * off, ay = C.y + dy * 0.25 + ny * off, bx = C.x + dx * 0.75 + nx * off, by = C.y + dy * 0.75 + ny * off;
            ctx.strokeStyle = accent; ctx.fillStyle = accent;
            if (s > 0) arrow(ctx, ax, ay, bx, by, 1.5 + b.diff, true); else arrow(ctx, bx, by, ax, ay, 1.5 + b.diff, true);
          }
        } else if (it.kind === 'atom') {
          var r = it.el === 'H' ? 12 : 16;
          ctx.beginPath(); ctx.arc(it.p.x, it.p.y, r, 0, Math.PI * 2); ctx.fillStyle = surf; ctx.fill(); ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.stroke();
          ctx.fillStyle = ink; ctx.font = f.body(it.el.length > 1 ? 13 : 14, true); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(it.el, it.p.x, it.p.y + 0.5);
        } else {
          ctx.beginPath(); ctx.arc(it.p.x, it.p.y, 9, 0, Math.PI * 2); ctx.fillStyle = soft; ctx.fill();
          ctx.fillStyle = ink; [-3.5, 3.5].forEach(function (o) { ctx.beginPath(); ctx.arc(it.p.x + o, it.p.y, 2, 0, Math.PI * 2); ctx.fill(); });
        }
      });
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.font = f.body(12); ctx.fillStyle = ink2;
      ctx.fillText(t('Thin arrows: bond dipoles, pointing at the more electronegative atom.'), 8, H - 8, W - 16);
      if (revealed) {
        ctx.font = f.body(13, true); ctx.fillStyle = ink;
        if (model.size > 0) {
          var o = project([0, 0, 0], W, H, scale), tip = project([model.net[0], model.net[1], model.net[2]].map(function (v) { return v / model.size * 1.05; }), W, H, scale);
          var ddx = tip.x - o.x, ddy = tip.y - o.y, ox, oy;
          if (two) { ox = W / 2 - ddx / 2; oy = H / 2 - 46; }
          else {
            // The net dipole is drawn in its own circle at the top right, so that it never covers an atom or a lone pair.
            var k = 52 / (1.05 * scale), icx = W - 42, icy = 50; ddx *= k; ddy *= k;
            ctx.beginPath(); ctx.arc(icx, icy, 34, 0, Math.PI * 2); ctx.fillStyle = surf; ctx.fill(); ctx.strokeStyle = ink2; ctx.lineWidth = 1; ctx.stroke();
            ox = icx - ddx / 2; oy = icy - ddy / 2;
          }
          ctx.strokeStyle = ink; ctx.fillStyle = ink; arrow(ctx, ox, oy, ox + ddx, oy + ddy, two ? 5 : 4, false);
          if (!two && Math.hypot(ddx, ddy) < 6) { ctx.beginPath(); ctx.arc(W - 42, 50, 5, 0, Math.PI * 2); ctx.fill(); }   // pointing straight at or away from the viewer
          ctx.fillText(two ? t('Thick arrow: net dipole') : t('Thick arrow in the circle: net dipole'), 8, 16, W - 100);
        } else ctx.fillText(t('No net dipole'), 8, 16, W - 16);
      }
    });
    var drag = null;
    w.listen(cv.el, 'pointerdown', function (e) { drag = e.clientX; });
    w.listen(cv.el, 'pointermove', function (e) { if (drag == null) return; var v = (yaw.value + (e.clientX - drag) * 0.8) % 360; if (v < 0) v += 360; drag = e.clientX; yaw.set(Math.round(v / 5) * 5, true); cv.draw(); });
    w.listen(window, 'pointerup', function () { drag = null; });
    update();
  });

  /* ==========================================================================
     s2-2.network — covalent network structures and the carbon allotropes
     ========================================================================== */
  function bondAll(atoms, d, tol) {
    var bonds = [];
    for (var i = 0; i < atoms.length; i++) for (var j = i + 1; j < atoms.length; j++) {
      if (Math.abs(Math.hypot(atoms[i].x - atoms[j].x, atoms[i].y - atoms[j].y, atoms[i].z - atoms[j].z) - d) < (tol || 0.01)) bonds.push({ a: i, b: j, order: 1 });
    }
    return bonds;
  }
  function diamondAtoms(sym, R, bond) {
    var basis = [[0, 0, 0], [0, 0.5, 0.5], [0.5, 0, 0.5], [0.5, 0.5, 0]], a = bond * 4 / R3, out = [];
    for (var i = -2; i <= 2; i++) for (var j = -2; j <= 2; j++) for (var k = -2; k <= 2; k++) basis.forEach(function (p) {
      [[0, 0, 0], [0.25, 0.25, 0.25]].forEach(function (q) {
        var x = i + p[0] + q[0], y = j + p[1] + q[1], z = k + p[2] + q[2];
        if (Math.hypot(x, y, z) <= R + 1e-9) out.push({ el: sym, x: x * a, y: y * a, z: z * a });
      });
    });
    return out;
  }
  function honeycomb(d, radius, shift, y) {
    var out = [], a1 = [R3 * d, 0], a2 = [R3 / 2 * d, 1.5 * d];
    for (var i = -6; i <= 6; i++) for (var j = -6; j <= 6; j++) [[0, 0], [0, d]].forEach(function (b) {
      var x = i * a1[0] + j * a2[0] + b[0], z = i * a1[1] + j * a2[1] + b[1];
      if (Math.hypot(x, z + d) <= radius * d + 1e-6) out.push({ el: 'C', x: x, y: y, z: z + (shift ? d : 0) });
    });
    return out;
  }
  function firstAngle(atoms, bonds, n) {
    var nb = atoms.map(function () { return []; }); bonds.forEach(function (b) { nb[b.a].push(b.b); nb[b.b].push(b.a); });
    for (var i = 0; i < atoms.length; i++) if (nb[i].length === n) return [nb[i][0], i, nb[i][1]];
    return null;
  }
  var NETWORKS = {
    diamond: function () { var a = diamondAtoms('C', 0.9, 1.54), b = bondAll(a, 1.54); return { atoms: a, bonds: b, angle: firstAngle(a, b, 4), angleText: '109.5' + DEG }; },
    graphite: function () {
      var a = honeycomb(1.42, 2.7, false, 3.35).concat(honeycomb(1.42, 2.7, true, 0), honeycomb(1.42, 2.7, false, -3.35));
      return { atoms: a, bonds: bondAll(a, 1.42) };
    },
    graphene: function () { var a = honeycomb(1.42, 4.6, false, 0), b = bondAll(a, 1.42); return { atoms: a, bonds: b, angle: firstAngle(a, b, 3), angleText: '120' + DEG }; },
    c60: function () {
      var phi = (1 + Math.sqrt(5)) / 2, pts = [], k = 0.72;
      function cyc(a, b, c) {
        [[a, b, c], [b, c, a], [c, a, b]].forEach(function (p) {
          [1, -1].forEach(function (s1) { [1, -1].forEach(function (s2) { [1, -1].forEach(function (s3) {
            var q = [p[0] * s1, p[1] * s2, p[2] * s3];
            if (!pts.some(function (r) { return Math.hypot(r[0] - q[0], r[1] - q[1], r[2] - q[2]) < 1e-6; })) pts.push(q);
          }); }); });
        });
      }
      cyc(0, 1, 3 * phi); cyc(1, 2 + phi, 2 * phi); cyc(phi, 2, 2 * phi + 1);
      var a = pts.map(function (p) { return { el: 'C', x: p[0] * k, y: p[1] * k, z: p[2] * k }; });
      return { atoms: a, bonds: bondAll(a, 2 * k) };
    },
    silicon: function () { var a = diamondAtoms('Si', 0.9, 1.6), b = bondAll(a, 1.6); return { atoms: a, bonds: b, angle: firstAngle(a, b, 4), angleText: '109.5' + DEG }; },
    sio2: function () {
      var si = diamondAtoms('Si', 0.8, 3.0), sb = bondAll(si, 3.0), atoms = si.slice(), bonds = [];
      sb.forEach(function (b) {
        var A = si[b.a], B = si[b.b];
        atoms.push({ el: 'O', x: (A.x + B.x) / 2, y: (A.y + B.y) / 2, z: (A.z + B.z) / 2 });
        bonds.push({ a: b.a, b: atoms.length - 1, order: 1 }); bonds.push({ a: b.b, b: atoms.length - 1, order: 1 });
      });
      return { atoms: atoms, bonds: bonds };
    }
  };
  S1.widgets.register('s2-2.network', function (w) {
    var INFO = {
      diamond: { name: t('Diamond'), per: t('4 other carbon atoms'), arr: t('tetrahedral, 109.5°, in three dimensions'), cond: t('No. All four valence electrons are in bonds.'),
        note: t('A covalent network: every atom is held by strong covalent bonds. So diamond is very hard and has a very high melting point.'), alt: t('3-D model of a piece of diamond') },
      graphite: { name: t('Graphite'), per: t('3 other carbon atoms'), arr: t('flat layers of hexagons, 120°'), cond: t('Yes. One electron per atom is delocalized and moves along the layers.'),
        note: t('Covalent bonds inside each layer. Only weak London (dispersion) forces between layers, so no sticks are drawn there. The layers slide: graphite is soft and slippery. The gap between layers is drawn to scale.'), alt: t('3-D model of three layers of graphite') },
      graphene: { name: t('Graphene'), per: t('3 other carbon atoms'), arr: t('one flat layer of hexagons, 120°'), cond: t('Yes. One electron per atom is delocalized across the sheet.'),
        note: t('A single layer of graphite, one atom thick. Very strong, very light, and a very good conductor of electricity and heat.'), alt: t('3-D model of a sheet of graphene') },
      c60: { name: t('Fullerene, C60'), per: t('3 other carbon atoms'), arr: t('a closed cage of 60 atoms: 12 pentagons and 20 hexagons'), cond: t('Poor. Electrons are delocalized inside one molecule but cannot move from one molecule to the next.'),
        note: t('This is a molecule, not a network. Only weak London (dispersion) forces act between C60 molecules, so it turns into a gas at a much lower temperature than diamond, and it dissolves slightly in some non-polar solvents.'), alt: t('3-D model of one molecule of fullerene C60') },
      silicon: { name: t('Silicon'), per: t('4 other silicon atoms'), arr: t('tetrahedral, 109.5°, like diamond'), cond: t('Only slightly at room temperature.'),
        note: t('Same structure as diamond, but Si–Si bonds are longer and weaker than C–C bonds. So silicon melts at a lower temperature (1414 °C) than diamond.'), alt: t('3-D model of a piece of silicon') },
      sio2: { name: t('Silicon dioxide, SiO2'), per: t('Si: 4 oxygen atoms. O: 2 silicon atoms.'), arr: t('tetrahedral around each silicon atom'), cond: t('No. There are no delocalized electrons and no ions that can move.'),
        note: t('A covalent network of Si–O bonds. SiO₂ is a ratio (an empirical formula), not a molecule. Simplified model: oxygen is drawn in a straight line between silicon atoms, but the real Si–O–Si angle is bent.'), alt: t('3-D model of a piece of silicon dioxide') }
    };
    var key = INFO[w.options.start] ? w.options.start : 'diamond';
    w.select({ label: t('Structure'), value: key, options: Object.keys(INFO).map(function (k) { return { value: k, label: INFO[k].name.replace('C60', 'C₆₀').replace('SiO2', 'SiO₂') }; }), onChange: function (v) { key = v; update(); } });
    var setPer = w.readoutItem(t('Each atom is bonded to'), { text: true });
    var setArr = w.readoutItem(t('Arrangement'), { text: true });
    var setCond = w.readoutItem(t('Conducts electricity?'), { text: true });
    var setNote = w.readoutItem(t('Notice'), { text: true });
    var host = el('div', { class: 's22-view' });
    w.stage.appendChild(host);
    var view = null;
    function update() {
      var s = NETWORKS[key](), info = INFO[key];
      s.labels = false; s.height = 340; s.label = info.alt;
      if (!view) view = mol.viewer3d(host, s); else view.setSpec(s);
      setPer(info.per); setArr(info.arr); setCond(info.cond); setNote(info.note);
    }
    update();
  });

  /* ==========================================================================
     s2-2.hbond — drawing a hydrogen bond
     ========================================================================== */
  S1.widgets.register('s2-2.hbond', function (w) {
    // Angles in degrees, 0 = right, anticlockwise. Donor: X at the left with its H pointing right (0°). Acceptor: Y at the right, lone pair pointing left (180°).
    var PAIRS = {
      water: { label: t('Water and water'), don: { el: 'O', subs: [{ el: 'H', a: 104.5 }], lone: [200, 270] }, acc: { el: 'O', subs: [{ el: 'H', a: -10 }, { el: 'H', a: -115 }], lone: [95] } },
      ammonia: { label: t('Ammonia and ammonia'), don: { el: 'N', subs: [{ el: 'H', a: 107 }, { el: 'H', a: 253 }], lone: [180] }, acc: { el: 'N', subs: [{ el: 'H', a: 62 }, { el: 'H', a: 0 }, { el: 'H', a: -62 }], lone: [], dm: [-8, -25] } },
      hf: { label: t('Hydrogen fluoride and hydrogen fluoride'), don: { el: 'F', subs: [], lone: [90, 180, 270] }, acc: { el: 'F', subs: [{ el: 'H', a: -75 }], lone: [90, 0], dm: [30, -24] } },
      ethanol: { label: t('Ethanol and water'), don: { el: 'O', subs: [{ el: 'CH3CH2', a: 80 }], lone: [200, 270], dm: [26, -22] }, acc: { el: 'O', subs: [{ el: 'H', a: -15 }, { el: 'H', a: -120 }], lone: [80] } }
    };
    var key = 'water', step = 0, MAX = 4;
    w.select({ label: t('Molecules'), value: key, options: Object.keys(PAIRS).map(function (k) { return { value: k, label: PAIRS[k].label }; }), onChange: function (v) { key = v; step = 0; draw(); } });
    w.button(t('Add the next label'), function () { step = Math.min(MAX, step + 1); draw(); }, { primary: true });
    w.button(t('Show all'), function () { step = MAX; draw(); });
    w.button(t('Hide the labels'), function () { step = 0; draw(); });
    var setStep = w.readoutItem(t('What to draw'), { text: true });
    var svg = w.svg('75 35 280 175', { label: t('Two molecules with a hydrogen bond drawn as a dashed line between them') });
    svg.style.maxWidth = '34rem';
    function txt(x, y, s, cls, anchor) { var n = svgEl('text', { x: x, y: y, 'text-anchor': anchor || 'middle', 'dominant-baseline': 'central', class: cls || 's22-svg-atom', text: s }, svg); return n; }
    function atomAt(x, y, sym) {
      if (sym === 'CH3CH2') { var n = txt(x + 21, y, '', 's22-svg-atom', 'end'); n.innerHTML = 'CH<tspan baseline-shift="sub" font-size="11">3</tspan>CH<tspan baseline-shift="sub" font-size="11">2</tspan>'; }
      else txt(x, y, sym);
    }
    function lonePair(x, y, deg) {
      var a = -deg * Math.PI / 180, cx = x + Math.cos(a) * 19, cy = y + Math.sin(a) * 19, nx = -Math.sin(a), ny = Math.cos(a);
      [-4.2, 4.2].forEach(function (o) { svgEl('circle', { cx: cx + nx * o, cy: cy + ny * o, r: 2.3, fill: 'var(--ink)' }, svg); });
    }
    function bond(x1, y1, x2, y2, c1, c2) {
      var d = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / d, uy = (y2 - y1) / d;
      svgEl('line', { x1: x1 + ux * c1, y1: y1 + uy * c1, x2: x2 - ux * c2, y2: y2 - uy * c2, stroke: 'var(--ink)', 'stroke-width': 1.8, 'stroke-linecap': 'round' }, svg);
    }
    function molecule(def, x, y, isDonor) {
      atomAt(x, y, def.el);
      def.subs.forEach(function (s) {
        var a = -s.a * Math.PI / 180, L = s.el === 'H' ? 52 : 56, px = x + Math.cos(a) * L, py = y + Math.sin(a) * L;
        bond(x, y, px, py, 12, s.el === 'H' ? 11 : 14); atomAt(px, py, s.el);
        if (step >= 1 && s.el === 'H') txt(px + Math.cos(a) * 20, py + Math.sin(a) * 20, DELTA + '+', 's22-svg-delta');
      });
      if (step >= 2) def.lone.forEach(function (deg) { lonePair(x, y, deg); });
    }
    function draw() {
      svg.innerHTML = '';
      var p = PAIRS[key], dx = 120, dy = 115, hx = dx + 52, ax = hx + 96;
      molecule(p.don, dx, dy, true);
      bond(dx, dy, hx, dy, 12, 11); atomAt(hx, dy, 'H');
      molecule(p.acc, ax, dy, false);
      if (step >= 1) {
        var d1 = p.don.dm || [16, -22], d2 = p.acc.dm || [24, -22];
        txt(dx + d1[0], dy + d1[1], DELTA + MINUS, 's22-svg-delta'); txt(hx, dy - 22, DELTA + '+', 's22-svg-delta'); txt(ax + d2[0], dy + d2[1], DELTA + MINUS, 's22-svg-delta');
      }
      if (step >= 2) lonePair(ax, dy, 180);
      if (step >= 3) {
        svgEl('line', { x1: hx + 12, y1: dy, x2: ax - 26, y2: dy, stroke: 'var(--accent)', 'stroke-width': 2.2, 'stroke-dasharray': '5 4' }, svg);
        txt((hx + ax) / 2 + 2, dy - 40, t('hydrogen bond'), 's22-svg-note');
        svgEl('line', { x1: (hx + ax) / 2 + 2, y1: dy - 31, x2: (hx + ax) / 2 + 2, y2: dy - 5, stroke: 'var(--ink-3)', 'stroke-width': 1 }, svg);
      }
      if (step >= 4) {
        svgEl('path', { d: 'M' + (hx - 24) + ' ' + (dy + 8) + ' A 26 26 0 0 0 ' + (hx + 24) + ' ' + (dy + 8), fill: 'none', stroke: 'var(--ink-2)', 'stroke-width': 1.2 }, svg);
        txt(hx, dy + 46, '180' + DEG, 's22-svg-note');
      }
      var el1 = p.don.el, el2 = p.acc.el;
      setStep([
        t('Start with the two molecules. Then add the labels one at a time.'),
        t('1. Partial charges. {x} is much more electronegative than H, so the {x}–H bond is polar: {x} is δ− and H is δ+.', { x: el1 }),
        t('2. Lone pairs. The {y} atom of the second molecule has a lone pair that points at the H atom.', { y: el2 }),
        t('3. A dashed line from the δ+ hydrogen to the lone pair on {y}. Dashed, because it is a force between molecules. It is not a covalent bond.', { y: el2 }),
        t('4. The three atoms {x}–H···{y} are drawn in a straight line (180°).', { x: el1, y: el2 })
      ][step]);
    }
    draw();
  });

  /* ==========================================================================
     Intermolecular forces: substances (boiling points: PubChem, 1 atm, rounded)
     ========================================================================== */
  var SUBS = {
    ch4: { name: function () { return t('methane'); }, f: 'CH4', bp: -162, lewis: 'ch4', polar: false, hb: false },
    c3h8: { name: function () { return t('propane'); }, f: 'C3H8', bp: -42, chain: { chain: ['C', 'C', 'C'] }, polar: false, hb: false },
    c5: { name: function () { return t('pentane'); }, f: 'C5H12', bp: 36, chain: { chain: ['C', 'C', 'C', 'C', 'C'] }, polar: false, hb: false },
    neo: { name: function () { return t('2,2-dimethylpropane'); }, f: 'C5H12', bp: 10, struct: neoSpec, polar: false, hb: false },
    cl2: { name: function () { return t('chlorine'); }, f: 'Cl2', bp: -34, lewis: 'cl2', polar: false, hb: false },
    br2: { name: function () { return t('bromine'); }, f: 'Br2', bp: 59, lewis: 'br2', polar: false, hb: false },
    i2: { name: function () { return t('iodine'); }, f: 'I2', bp: 184, lewis: 'i2', polar: false, hb: false },
    co2: { name: function () { return t('carbon dioxide'); }, f: 'CO2', bp: null, lewis: 'co2', polar: false, hb: false, polarBonds: true },
    ccl4: { name: function () { return t('tetrachloromethane'); }, f: 'CCl4', bp: 77, lewis: 'ccl4', polar: false, hb: false, polarBonds: true },
    hcl: { name: function () { return t('hydrogen chloride'); }, f: 'HCl', bp: -85, lewis: 'hcl', polar: true, hb: false },
    hbr: { name: function () { return t('hydrogen bromide'); }, f: 'HBr', bp: -66, lewis: 'hbr', polar: true, hb: false },
    h2s: { name: function () { return t('hydrogen sulfide'); }, f: 'H2S', bp: -60, lewis: 'h2s', polar: true, hb: false },
    ch3cl: { name: function () { return t('chloromethane'); }, f: 'CH3Cl', bp: -24, lewis: 'ch3cl', polar: true, hb: false },
    chcl3: { name: function () { return t('trichloromethane'); }, f: 'CHCl3', bp: 61, lewis: 'chcl3', polar: true, hb: false, chTrap: true },
    propanone: { name: function () { return t('propanone'); }, f: 'CH3COCH3', bp: 56, chain: { chain: ['C', 'C', 'C'], subs: { 1: ['=O'] } }, polar: true, hb: false, oTrap: true },
    ether: { name: function () { return t('methoxymethane'); }, f: 'CH3OCH3', bp: -25, chain: { chain: ['C', 'O', 'C'] }, polar: true, hb: false, oTrap: true },
    ethanal: { name: function () { return t('ethanal'); }, f: 'CH3CHO', bp: 20, chain: { chain: ['C', 'C'], subs: { 1: ['=O'] } }, polar: true, hb: false, oTrap: true },
    h2o: { name: function () { return t('water'); }, f: 'H2O', bp: 100, lewis: 'h2o', polar: true, hb: true, hbAtom: 'O' },
    nh3: { name: function () { return t('ammonia'); }, f: 'NH3', bp: -33, lewis: 'nh3', polar: true, hb: true, hbAtom: 'N' },
    hf: { name: function () { return t('hydrogen fluoride'); }, f: 'HF', bp: 20, lewis: 'hf', polar: true, hb: true, hbAtom: 'F' },
    ethanol: { name: function () { return t('ethanol'); }, f: 'CH3CH2OH', bp: 78, chain: { chain: ['C', 'C', 'O'] }, polar: true, hb: true, hbAtom: 'O' }
  };
  /** 2,2-dimethylpropane drawn as a cross, with room for all twelve H atoms (the chain shorthand makes them overlap). */
  function neoSpec() {
    var atoms = [{ el: 'C', x: 0, y: 0 }], bonds = [], D = 1.7, h = 0.95;
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (u) {
      var c = atoms.length; atoms.push({ el: 'C', x: u[0] * D, y: u[1] * D }); bonds.push({ a: 0, b: c, order: 1 });
      [[u[0], u[1]], [-u[1], u[0]], [u[1], -u[0]]].forEach(function (v) { atoms.push({ el: 'H', x: u[0] * D + v[0] * h, y: u[1] * D + v[1] * h }); bonds.push({ a: c, b: atoms.length - 1, order: 1 }); });
    });
    return { atoms: atoms, bonds: bonds, scale: 34 };
  }
  function molarMass(f) { return chem.molarMass(f); }
  function electronCount(f) { var p = chem.parseFormula(f), n = 0; Object.keys(p.counts).forEach(function (e) { n += chem.element(e).z * p.counts[e]; }); return n; }
  function drawSub(host, s) {
    host.innerHTML = '';
    if (s.lewis) drawLewis(host, s.lewis, '');
    else if (s.struct) { var sp = s.struct(); sp.label = t('Full structural formula of {name}', { name: s.name() }); mol.structural(host, sp); }
    else if (s.chain) { var spec = { chain: s.chain.chain, subs: s.chain.subs, label: t('Full structural formula of {name}', { name: s.name() }) }; mol.structural(host, spec); }
    else host.appendChild(el('p', { class: 's22-bigformula', html: chem.formula(s.f) }));
  }
  function bpText(s) { return s.bp == null ? t('sublimes at {v} °C', { v: MINUS + '78' }) : (s.bp < 0 ? MINUS + (-s.bp) : String(s.bp)) + ' ' + DEG + 'C'; }

  S1.widgets.register('s2-2.imf', function (w) {
    var ORDER = ['ch4', 'c3h8', 'cl2', 'i2', 'co2', 'ccl4', 'hcl', 'ch3cl', 'chcl3', 'propanone', 'ether', 'ethanal', 'h2o', 'nh3', 'hf', 'ethanol', 'mixCH4', 'mixCl2'];
    var MIX = {
      mixCH4: { label: t('Mixture: a chloromethane molecule and a methane molecule'), a: 'CH3Cl', b: 'CH4' },
      mixCl2: { label: t('Mixture: a hydrogen chloride molecule and a chlorine molecule'), a: 'HCl', b: 'Cl2' }
    };
    var key = 'h2o';
    w.select({ label: t('Substance'), value: key, options: ORDER.map(function (k) { return { value: k, label: MIX[k] ? MIX[k].label : SUBS[k].name() + ' (' + plainFormula(SUBS[k].f) + ')' }; }), onChange: function (v) { key = v; load(); } });
    var setM = w.readoutItem(t('Molar mass'));
    var setBp = w.readoutItem(t('Boiling point'));
    var wrap = el('div', { class: 's22-imf' });
    w.stage.appendChild(wrap);
    var host = el('div', { class: 's22-lewis__draw' });
    var formEl = el('div', { class: 's22-imf__form' });
    wrap.appendChild(host); wrap.appendChild(formEl);
    var qEl = el('p', { class: 's22-predict__q' });
    formEl.appendChild(qEl);
    var FORCES = [['london', t('London (dispersion) forces')], ['did', t('dipole–induced dipole forces')], ['dd', t('dipole–dipole forces')], ['hb', t('hydrogen bonding')]];
    var boxes = {}, group = el('div', { class: 'chips' });
    FORCES.forEach(function (f) {
      var input = el('input', { type: 'checkbox' });
      boxes[f[0]] = input;
      group.appendChild(el('label', { class: 'chip' }, [input, el('span', { text: f[1] })]));
    });
    formEl.appendChild(group);
    var btn = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Check') });
    formEl.appendChild(el('div', { class: 'btn-row s22-gap' }, [btn]));
    var fb = feedback(formEl);
    btn.addEventListener('click', check);

    function load() {
      Object.keys(boxes).forEach(function (k) { boxes[k].checked = false; });
      fb.clear();
      if (MIX[key]) {
        host.innerHTML = ''; host.appendChild(el('p', { class: 's22-bigformula', html: chem.formula(MIX[key].a) + ' &nbsp;+&nbsp; ' + chem.formula(MIX[key].b) }));
        qEl.textContent = t('Tick every force that acts between these two different molecules.');
        setM(MINUS); setBp(MINUS);
      } else {
        var s = SUBS[key]; drawSub(host, s);
        qEl.textContent = t('Tick every force that acts between the molecules of this substance.');
        setM(chem.fixed(molarMass(s.f), 2) + ' g mol<sup>' + MINUS + '1</sup>'); setBp(bpText(s));
      }
    }
    function check() {
      var want, lines = [], s = SUBS[key];
      if (MIX[key]) {
        want = { london: true, did: true, dd: false, hb: false };
        lines.push(t('London (dispersion) forces act between all molecules.'));
        lines.push(t('{a} is polar and {b} is non-polar. The permanent dipole of {a} pulls on the electrons of {b} and makes a temporary (induced) dipole. That attraction is a dipole–induced dipole force.', { a: chem.formula(MIX[key].a), b: chem.formula(MIX[key].b) }));
        lines.push(t('Dipole–dipole forces need two polar molecules. Hydrogen bonding needs an H atom bonded to N, O or F. Neither acts between this pair.'));
      } else {
        want = { london: true, did: false, dd: s.polar, hb: s.hb };
        lines.push(t('London (dispersion) forces: yes. They act between all molecules, because all molecules have electrons.'));
        if (s.hb) {
          lines.push(t('Dipole–dipole forces: yes. The molecule is polar.'));
          lines.push(t('Hydrogen bonding: yes. There is an H atom bonded directly to {x}, and {x} has a lone pair.', { x: s.hbAtom }));
        } else if (s.polar) {
          lines.push(t('Dipole–dipole forces: yes. The molecule has a net dipole.'));
          lines.push(s.oTrap ? t('Hydrogen bonding: no. There is an oxygen atom, but every H atom is bonded to carbon. No H atom is bonded to O, N or F.')
            : t('Hydrogen bonding: no. No H atom is bonded to N, O or F.'));
        } else {
          lines.push(s.polarBonds ? t('Dipole–dipole forces: no. The bonds are polar, but the molecule is symmetrical, so the bond dipoles cancel. There is no net dipole.')
            : t('Dipole–dipole forces: no. The molecule is non-polar.'));
          lines.push(t('Hydrogen bonding: no.'));
        }
        lines.push(t('Dipole–induced dipole forces: IB uses this name for the attraction between a polar molecule and a non-polar molecule, so it is used for mixtures.'));
      }
      var ok = Object.keys(want).every(function (k) { return boxes[k].checked === want[k]; });
      var missedLondon = !boxes.london.checked;
      fb.set(ok ? 'right' : 'wrong', ok ? t('Correct.') : (missedLondon ? t('Not yet. Remember: London forces are always present.') : t('Not yet.')), lines.map(function (x) { return '<p>' + x + '</p>'; }).join(''));
    }
    load();
  });

  /* ==========================================================================
     s2-2.bp — predict and explain a boiling-point difference
     ========================================================================== */
  S1.widgets.register('s2-2.bp', function (w) {
    var PAIRS = [
      { a: 'c3h8', b: 'ethanal', label: t('Propane and ethanal (similar molar mass)'),
        m1: t('Propane is non-polar: it has London (dispersion) forces only. Ethanal is polar: it has London (dispersion) forces and dipole–dipole forces.'),
        m2: t('The molar masses are almost equal, so the London forces are similar. The extra dipole–dipole forces make the total attraction between ethanal molecules stronger.') },
      { a: 'ether', b: 'ethanol', label: t('Methoxymethane and ethanol (isomers)'),
        m1: t('Ethanol has an O–H group, so it has hydrogen bonding (as well as London and dipole–dipole forces). Methoxymethane has London and dipole–dipole forces only: no H is bonded to O.'),
        m2: t('Hydrogen bonding is stronger than dipole–dipole forces. The molar masses are the same.') },
      { a: 'cl2', b: 'br2', label: t('Chlorine and bromine'),
        m1: t('Both are non-polar. Both have London (dispersion) forces only.'),
        m2: t('A bromine molecule has more electrons (70) than a chlorine molecule (34). So the London forces between bromine molecules are stronger.') },
      { a: 'c5', b: 'neo', label: t('Pentane and 2,2-dimethylpropane (isomers)'),
        m1: t('Both are non-polar. Both have London (dispersion) forces only, and the same number of electrons.'),
        m2: t('Pentane is a long chain. Its molecules touch over a larger surface area than the compact, branched molecules. So the London forces between pentane molecules are stronger.') },
      { a: 'h2s', b: 'h2o', label: t('Hydrogen sulfide and water'),
        m1: t('Water has hydrogen bonding (H bonded to O). Hydrogen sulfide has London and dipole–dipole forces, but no hydrogen bonding.'),
        m2: t('Hydrogen bonding is stronger than the dipole–dipole forces in hydrogen sulfide. This wins, even though hydrogen sulfide has the larger molar mass.') },
      { a: 'hcl', b: 'hbr', label: t('Hydrogen chloride and hydrogen bromide'),
        m1: t('Both are polar. Both have London (dispersion) forces and dipole–dipole forces.'),
        m2: t('Hydrogen bromide has more electrons (36) than hydrogen chloride (18), so its London forces are stronger. This matters more than the slightly larger dipole of hydrogen chloride.') }
    ];
    var idx = 0, revealed = false;
    w.select({ label: t('Pair of substances'), value: 0, options: PAIRS.map(function (p, i) { return { value: i, label: p.label }; }), onChange: function (v) { idx = +v; revealed = false; load(); } });
    var wrap = el('div', { class: 's22-bp' });
    w.stage.appendChild(wrap);
    var cards = el('div', { class: 's22-bp__cards' });
    wrap.appendChild(cards);
    var ask = el('div', { class: 's22-ask' });
    wrap.appendChild(ask);
    ask.appendChild(el('p', { class: 's22-predict__q', text: t('Predict first: which has the higher boiling point?') }));
    var row = el('div', { class: 'btn-row' });
    ask.appendChild(row);
    var fb = feedback(ask);
    function load() {
      var p = PAIRS[idx];
      cards.innerHTML = ''; row.innerHTML = ''; fb.clear();
      [p.a, p.b].forEach(function (k) {
        var s = SUBS[k], card = el('div', { class: 's22-bp__card' });
        card.appendChild(el('p', { class: 's22-bp__name', html: s.name() + ' <span class="mono">' + chem.formula(s.f) + '</span>' }));
        var host = el('div', { class: 's22-lewis__draw' }); card.appendChild(host); drawSub(host, s);
        card.appendChild(el('p', { class: 's22-bp__data mono', html: '<i>M</i> = ' + chem.fixed(molarMass(s.f), 2) + ' g mol<sup>' + MINUS + '1</sup>' }));
        var bpEl = el('p', { class: 's22-bp__data mono', html: t('boiling point') + ': ' + (revealed ? '<b>' + bpText(s) + '</b>' : '?') });
        card.appendChild(bpEl);
        cards.appendChild(card);
        var b = el('button', { class: 'btn btn--small', type: 'button', text: s.name() });
        b.addEventListener('click', function () { answer(k); });
        row.appendChild(b);
      });
    }
    function answer(k) {
      var p = PAIRS[idx], hi = SUBS[p.a].bp > SUBS[p.b].bp ? p.a : p.b, right = k === hi;
      revealed = true; load();
      fb.set(right ? 'right' : 'wrong', right ? t('Correct.') : t('Not this time.'),
        '<p>' + t('The higher boiling point belongs to {name}.', { name: SUBS[hi].name() }) + '</p>' +
        '<p><b>' + t('Name the forces in both:') + '</b> ' + p.m1 + '</p><p><b>' + t('Compare their strength:') + '</b> ' + p.m2 + '</p>' +
        '<p><b>' + t('Link to energy:') + '</b> ' + t('More energy is needed to separate the molecules of {name}, so it boils at a higher temperature.', { name: SUBS[hi].name() }) + '</p>');
    }
    load();
  });

  /* ==========================================================================
     s2-2.chroma — chromatography run, ruler and RF
     ========================================================================== */
  S1.widgets.register('s2-2.chroma', function (w) {
    // Invented model data. P is the most polar component, R the least polar. S is a reference substance that is not in the mixture.
    var RF = {
      paper: { low: { P: 0.15, Q: 0.42, R: 0.80, S: 0.58 }, high: { P: 0.38, Q: 0.63, R: 0.90, S: 0.76 } },
      tlc: { low: { P: 0.10, Q: 0.35, R: 0.75, S: 0.52 }, high: { P: 0.30, Q: 0.58, R: 0.88, S: 0.72 } }
    };
    var LANES = [{ name: 'M', comps: ['P', 'Q', 'R'] }, { name: 'A', comps: ['Q'] }, { name: 'B', comps: ['S'] }, { name: 'C', comps: ['R'] }];
    var PAPER = 120, BASE = 15, POOL = 8;
    var method = 'paper', solvent = 'low', zero = 'base', front = 0, target = 0, state = 'ready', dist = {};
    var mSeg = seg(w, t('Stationary phase'), [{ value: 'paper', label: t('Paper') }, { value: 'tlc', label: t('TLC plate') }], method, function (v) { method = v; reset(); });
    var sSeg = seg(w, t('Mobile phase (solvent)'), [{ value: 'low', label: t('Less polar') }, { value: 'high', label: t('More polar') }], solvent, function (v) { solvent = v; reset(); });
    var zSeg = seg(w, t('Ruler zero at'), [{ value: 'base', label: t('Baseline') }, { value: 'edge', label: t('Bottom edge') }], zero, function (v) { zero = v; showLine(); cv.draw(); });
    w.button(t('Run'), run, { primary: true });
    w.button(t('New paper'), reset);
    var line = w.slider({ label: t('Measuring line'), min: 0, max: 115, step: 0.5, value: 40, unit: 'mm', onInput: function () { showLine(); cv.draw(); } });
    var setState = w.readoutItem(t('Status'), { text: true });
    var setLine = w.readoutItem(t('Measuring line reads'));
    var cv = w.canvas({ height: 420, label: t('Chromatogram: a baseline with four starting spots, a rising solvent front and a ruler') });

    var ask = el('div', { class: 's22-ask', hidden: true });
    w.stage.appendChild(ask);
    var aid = S1.util.uid('rf');
    var spotPick = picker(w, t('Spot in lane M'), [{ value: 'P', label: t('Spot 1 (lowest)') }, { value: 'Q', label: t('Spot 2 (middle)') }, { value: 'R', label: t('Spot 3 (highest)') }], function () { fb.clear(); }, ask);
    var rfIn = el('input', { class: 'input input--num', id: aid, type: 'text', inputmode: 'decimal', autocomplete: 'off' });
    var rfBtn = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Check') });
    ask.appendChild(el('div', { class: 'control' }, [el('label', { class: 'control__label', for: aid, html: t('Your R<sub>F</sub> value') }), el('div', { class: 'btn-row' }, [rfIn, rfBtn])]));
    var fb = feedback(ask);
    rfBtn.addEventListener('click', checkRf);
    rfIn.addEventListener('keydown', function (e) { if (e.key === 'Enter') checkRf(); });

    var loop = w.loop(function (dt) {
      front = Math.min(target, front + dt * target / 3);
      if (front >= target) { loop.stop(); finish(); }
      cv.draw();
    });
    function half(v) { return Math.round(v * 2) / 2; }
    function reset() {
      loop.stop(); state = 'ready'; front = 0; ask.hidden = true; fb.clear(); rfIn.value = '';
      setState(t('Ready. The spots are on the pencil baseline, above the solvent level. Press Run.'));
      showLine(); cv.draw();
    }
    function run() {
      if (state === 'running') return;
      target = 76 + 2 * Math.floor(Math.random() * 11);      // 76 to 96 mm above the baseline
      ['P', 'Q', 'R', 'S'].forEach(function (c) { dist[c] = half(RF[method][solvent][c] * target); });
      front = 0; state = 'running'; ask.hidden = true; fb.clear(); rfIn.value = '';
      setState(t('Running. The solvent rises and carries the components with it.'));
      if (w.reducedMotion) { front = target; finish(); cv.draw(); } else loop.start(true);
    }
    function finish() {
      state = 'done'; front = target; ask.hidden = false;
      setState(t('Finished. The solvent front is marked. Move the measuring line to read distances, then calculate an R<sub>F</sub> value. Lanes A, B and C are known pure substances.'));
    }
    function showLine() { setLine(chem.fixed(line.value, 1) + ' mm'); }
    function checkRf() {
      var r = chem.parseNumber(rfIn.value);
      if (!r) { fb.set('partial', t('Type a number, for example 0.45.'), ''); return; }
      var c = spotPick.value, d = dist[c], want = d / target, v = r.value;
      var work = '<div class="worked__math"><i>R</i><sub>F</sub> = ' + chem.fixed(d, 1) + ' mm / ' + chem.fixed(target, 1) + ' mm = <b>' + chem.fixed(want, 2) + '</b></div>';
      var polar = c === 'P' ? t('This spot moved least. It is the most polar component: it is attracted most strongly to the polar stationary phase.')
        : c === 'R' ? t('This spot moved furthest. It is the least polar component: it is attracted more to the mobile phase than to the polar stationary phase.')
        : t('This spot is in between: its attraction to the stationary phase is in between too.');
      var match = c === 'Q' ? t('It is level with the spot in lane A, so the mixture contains substance A.') : c === 'R' ? t('It is level with the spot in lane C, so the mixture contains substance C.') : t('It is not level with A, B or C, so it is none of them.');
      if (Math.abs(v - want) <= 0.02) { fb.set('right', t('Correct.'), work + '<p>' + polar + ' ' + match + '</p>'); return; }
      var msg;
      if (v > 1) msg = t('An R<sub>F</sub> value can never be more than 1: a spot cannot travel further than the solvent front. Put the spot distance on top.');
      else if (Math.abs(v - (d + BASE) / (target + BASE)) <= 0.015) msg = t('You measured from the bottom edge of the paper. Both distances start at the baseline.');
      else if (Math.abs(v - d / (PAPER - BASE)) <= 0.015) msg = t('You divided by the distance to the top of the paper. Divide by the distance to the solvent front.');
      else if (Math.abs(v - d) < 0.3) msg = t('That is the distance moved by the spot. Divide it by the distance moved by the solvent front.');
      else msg = t('Measure from the baseline to the centre of the spot, and from the baseline to the solvent front. Then divide the first by the second.');
      fb.set('wrong', t('Not yet.'), '<p>' + msg + '</p>');
    }
    cv.draw(function (ctx, W, H) {
      var f = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), soft = w.color('--accent-soft'), surf = w.color('--surface'), s2 = w.color('--surface-2'), lineC = w.color('--line-strong');
      var top = 22, bottom = H - 48, px = (bottom - top) / PAPER;                // px per mm
      var paperW = Math.min(250, W - 150), x0 = Math.max(8, (W - paperW - 120) / 2), x1 = x0 + paperW;
      function Y(mmFromEdge) { return bottom - mmFromEdge * px; }
      // beaker solvent
      ctx.fillStyle = soft; ctx.fillRect(x0 - 8, Y(POOL), paperW + 16, POOL * px + 8);
      // paper
      ctx.fillStyle = surf; ctx.fillRect(x0, top, paperW, bottom - top);
      // wet zone
      var wet = state === 'ready' ? POOL : BASE + front;
      ctx.fillStyle = soft; ctx.globalAlpha = 0.55; ctx.fillRect(x0, Y(wet), paperW, wet * px); ctx.globalAlpha = 1;
      ctx.strokeStyle = lineC; ctx.lineWidth = 1.5; ctx.strokeRect(x0 + 0.5, top + 0.5, paperW - 1, bottom - top - 1);
      // baseline (pencil)
      ctx.strokeStyle = ink3; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, Y(BASE)); ctx.lineTo(x1, Y(BASE)); ctx.stroke();
      // solvent front
      if (state !== 'ready') {
        ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.setLineDash(state === 'done' ? [] : [5, 4]); ctx.beginPath(); ctx.moveTo(x0, Y(BASE + front)); ctx.lineTo(x1, Y(BASE + front)); ctx.stroke(); ctx.setLineDash([]);
      }
      // lanes and spots
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      LANES.forEach(function (ln, i) {
        var x = x0 + paperW * (i + 0.5) / LANES.length;
        ctx.fillStyle = ink2; ctx.font = f.mono(12, true); ctx.fillText(ln.name, x, Y(BASE) + 13);
        if (state === 'ready') { ctx.beginPath(); ctx.arc(x, Y(BASE), 5, 0, Math.PI * 2); ctx.fillStyle = ink; ctx.fill(); return; }
        ln.comps.forEach(function (c, j) {
          var d = state === 'done' ? dist[c] : dist[c] * front / target, y = Y(BASE + d);
          ctx.beginPath(); ctx.ellipse(x, y, 8, 6, 0, 0, Math.PI * 2); ctx.fillStyle = ink; ctx.globalAlpha = 0.88; ctx.fill(); ctx.globalAlpha = 1;
          ctx.strokeStyle = surf; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x - 3, y); ctx.lineTo(x + 3, y); ctx.moveTo(x, y - 3); ctx.lineTo(x, y + 3); ctx.stroke();
          if (ln.name === 'M' && state === 'done') { ctx.fillStyle = ink; ctx.font = f.mono(11, true); ctx.fillText(String(j + 1), x - 17, y); }
        });
      });
      // labels at the left
      ctx.textAlign = 'left'; ctx.font = f.body(11); ctx.fillStyle = ink2;
      // ruler at the right
      var rx = x1 + 14, zeroMm = zero === 'base' ? BASE : 0;
      ctx.fillStyle = s2; ctx.fillRect(rx, top, 44, bottom - top); ctx.strokeStyle = lineC; ctx.lineWidth = 1; ctx.strokeRect(rx + 0.5, top + 0.5, 43, bottom - top - 1);
      ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.font = f.mono(10); ctx.textAlign = 'left';
      for (var mm = 0; mm <= PAPER - zeroMm; mm++) {
        var y = Y(zeroMm + mm); if (y < top + 2) break;
        var big = mm % 10 === 0, mid = mm % 5 === 0;
        ctx.lineWidth = big ? 1.2 : 0.7; ctx.beginPath(); ctx.moveTo(rx, y); ctx.lineTo(rx + (big ? 14 : mid ? 10 : 6), y); ctx.stroke();
        if (big) ctx.fillText(String(mm), rx + 17, y);
      }
      ctx.font = f.body(11); ctx.fillStyle = ink2; ctx.textAlign = 'center'; ctx.fillText('mm', rx + 22, top - 9);
      // measuring line
      var ly = Y(zeroMm + line.value);
      if (ly > top) {
        ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.setLineDash([6, 3]); ctx.beginPath(); ctx.moveTo(x0 - 6, ly); ctx.lineTo(rx + 44, ly); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = ink; ctx.beginPath(); ctx.moveTo(rx + 44, ly); ctx.lineTo(rx + 52, ly - 5); ctx.lineTo(rx + 52, ly + 5); ctx.closePath(); ctx.fill();
        ctx.textAlign = 'left'; ctx.font = f.mono(11, true); if (rx + 56 + 44 < W) ctx.fillText(chem.fixed(line.value, 1), rx + 56, ly);
      }
      // captions
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.font = f.body(11); ctx.fillStyle = ink2;
      var ly2 = H - 20, lx = Math.max(8, x0 - 8);
      ctx.strokeStyle = ink3; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(lx, ly2 - 4); ctx.lineTo(lx + 18, ly2 - 4); ctx.stroke();
      ctx.fillText(t('pencil baseline'), lx + 23, ly2);
      var wB = ctx.measureText(t('pencil baseline')).width + 36;
      ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(lx + wB, ly2 - 4); ctx.lineTo(lx + wB + 18, ly2 - 4); ctx.stroke();
      ctx.fillText(t('solvent front'), lx + wB + 23, ly2);
      ctx.fillText(t('Model data, not a real experiment. Shaded area: solvent.'), lx, H - 4, W - lx - 4);
    });
    reset();
  });
})();
