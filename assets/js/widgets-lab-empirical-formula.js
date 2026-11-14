/* ==========================================================================
   Widgets for Lab 5 — Finding an empirical formula by experiment.
   lab-empirical-formula.magnesium  burning magnesium in a crucible (heat to constant mass)
   lab-empirical-formula.hydrate    heating CuSO4.xH2O to constant mass
   Every run draws a new crucible and sample, and every balance reading has
   realistic random scatter, rounded to the balance's precision (0.01 g or 0.001 g).
   The systematic errors (MgO smoke, Mg3N2, too little air, spitting, decomposition,
   water taken back from the air) are modelled from simple, stated fractions.
   Ar values come from S1.chem (data booklet, 2 d.p.).
   Every user-visible English string goes through t("…", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var AR_MG = chem.element('Mg').ar, AR_O = chem.element('O').ar;
  var M_MGO = chem.molarMass('MgO'), M_MG3N2 = chem.molarMass('Mg3N2');
  var M_CUSO4 = chem.molarMass('CuSO4'), M_H2O = chem.molarMass('H2O'), M_HYD = chem.molarMass('CuSO4.5H2O'), M_CUO = chem.molarMass('CuO');

  /* ---------- shared helpers -------------------------------------------- */
  function gauss() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function rand(a, b) { return a + Math.random() * (b - a); }
  /** One balance reading: the true mass plus a little scatter (draughts, handling), rounded to the balance. */
  function weigh(trueMass, dp) {
    var step = Math.pow(10, -dp), sd = dp === 2 ? 0.004 : 0.0012;
    return Math.round((trueMass + gauss() * sd) / step) * step;
  }
  function fx(x, dp) { return x.toFixed(dp); }
  function sig(x, n) { return chem.toSig(x, n); }
  function strip(html) { var d = document.createElement('div'); d.innerHTML = html; return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function svgText(x, y, str, cls, anchor) {
    return '<text x="' + x + '" y="' + y + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + (cls ? ' class="' + cls + '"' : '') + '>' + str + '</text>';
  }

  /** Raw-data table with a "Copy table" button, inside the stage. */
  function dataTable(w, caption) {
    var box = el('div', { class: 'labw-data' });
    var head = el('div', { class: 'labw-data__head' });
    var title = el('p', { class: 'labw-data__title', html: t('Raw data') });
    var status = el('span', { class: 'labw-data__status', role: 'status', 'aria-live': 'polite' });
    var copy = el('button', { class: 'btn btn--small', type: 'button', html: t('Copy table') });
    head.appendChild(title); head.appendChild(el('span', {}, [copy, ' ', status]));
    var scroll = el('div', { class: 'table-scroll' });
    var table = el('table', { class: 'data' });
    scroll.appendChild(table);
    box.appendChild(head); box.appendChild(scroll);
    w.stage.appendChild(box);
    var heads = [], rows = [];
    function render() {
      var h = '<caption>' + caption + '</caption><thead><tr>' + heads.map(function (x, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + x + '</th>'; }).join('') + '</tr></thead><tbody>';
      if (!rows.length) h += '<tr><td colspan="' + heads.length + '">' + t('No readings yet.') + '</td></tr>';
      rows.forEach(function (r) { h += '<tr>' + r.map(function (c, i) { return i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>'; });
      table.innerHTML = h + '</tbody>';
    }
    function asText() { return [heads].concat(rows).map(function (r) { return r.map(strip).join('\t'); }).join('\n'); }
    function fallbackCopy(text) {
      var ta = el('textarea', { readonly: true, 'aria-hidden': 'true' }); ta.value = text;
      ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      return ok;
    }
    w.listen(copy, 'click', function () {
      var text = asText();
      function done(ok) { status.innerHTML = ok ? t('Copied. Paste it into a spreadsheet or your notes.') : t('Copying is blocked here. Select the table and copy it by hand.'); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
      else done(fallbackCopy(text));
    });
    return { set: function (h, r) { heads = h; rows = r; status.innerHTML = ''; render(); } };
  }

  /** A box of working lines that the student can show or hide. */
  function workBox(w) {
    var box = el('div', { class: 'labw-work' });
    w.stage.appendChild(box);
    return {
      lines: function (arr) {
        box.innerHTML = '';
        arr.forEach(function (l) {
          if (l == null) return;
          if (typeof l === 'object') { if (l.note) box.appendChild(el('p', { class: 'labw-note', html: l.note })); }
          else box.appendChild(el('div', { class: 'worked__math', html: l }));
        });
      },
      clear: function () { box.innerHTML = ''; }
    };
  }

  /** value ± uncertainty: the uncertainty to 1 s.f., the value to the same decimal place. */
  function pm(x, d) {
    var dd = Number(chem.toSig(d, 1)), dec = Math.max(0, -Math.floor(Math.log(dd) / Math.LN10));
    return x.toFixed(dec) + ' ± ' + dd.toFixed(dec);
  }
  function disable(ctl, off) { Array.prototype.forEach.call(ctl.el.querySelectorAll('input, select'), function (i) { i.disabled = off; }); }

  /** Balance drawing (right-hand part of the apparatus figure). */
  function balanceSvg(x, y, reading, dp) {
    var shown = reading == null ? (dp === 2 ? '0.00' : '0.000') : fx(reading, dp);
    return '<rect x="' + x + '" y="' + (y + 40) + '" width="130" height="58" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.5"/>' +
      '<rect x="' + (x + 12) + '" y="' + (y + 52) + '" width="106" height="30" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.2"/>' +
      svgText(x + 112, y + 74, shown + ' g', 'labw-svg__display', 'end') +
      '<rect x="' + (x + 25) + '" y="' + (y + 30) + '" width="80" height="6" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.3"/>' +
      '<line x1="' + (x + 65) + '" y1="' + (y + 36) + '" x2="' + (x + 65) + '" y2="' + (y + 40) + '" stroke="var(--ink)" stroke-width="2"/>' +
      svgText(x + 65, y + 116, t('balance, ±{u} g', { u: dp === 2 ? '0.01' : '0.001' }), 'labw-svg__small', 'middle');
  }

  /** Crucible on a pipeclay triangle over a Bunsen burner (left-hand part). */
  function rigSvg(o) {
    var h = '';
    // tripod and triangle
    h += '<line x1="40" y1="112" x2="180" y2="112" stroke="var(--ink)" stroke-width="2"/>';
    h += '<line x1="55" y1="112" x2="45" y2="196" stroke="var(--ink)" stroke-width="2"/><line x1="165" y1="112" x2="175" y2="196" stroke="var(--ink)" stroke-width="2"/>';
    h += '<line x1="80" y1="110" x2="140" y2="110" stroke="var(--ink-2)" stroke-width="4"/>';
    // Bunsen burner
    h += '<rect x="102" y="150" width="16" height="40" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.4"/><rect x="88" y="190" width="44" height="7" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.4"/>';
    if (o.flame) h += '<path d="M110 148 q-9 -12 0 -30 q9 18 0 30 z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>';
    // crucible
    h += '<path d="M78 70 l8 42 h48 l8 -42 z" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/>';
    if (o.powder > 0) { var ph = 4 + 18 * o.powder; h += '<path d="M' + (86 - ph * 0.05) + ' ' + (110 - ph) + ' h' + (48 + ph * 0.1) + ' l' + (-ph * 0.05) + ' ' + ph + ' h-48 z" fill="' + (o.powderFill || 'var(--surface-2)') + '" stroke="var(--ink-2)" stroke-width="1"/>'; }
    if (o.coil > 0) {
      var op = Math.max(0.25, Math.min(1, o.coil));
      h += '<path d="M90 104 q6 -14 12 0 t12 0 t12 0 t10 0" fill="none" stroke="var(--ink-3)" stroke-width="3" stroke-opacity="' + op.toFixed(2) + '"/>';
    }
    if (o.crystals > 0) {
      for (var i = 0; i < 7; i++) {
        var cx = 92 + i * 6, cy = 104 - (i % 2) * 5;
        h += '<rect x="' + cx + '" y="' + cy + '" width="7" height="6" fill="var(--accent)" fill-opacity="' + (0.2 + 0.7 * o.crystals).toFixed(2) + '" stroke="var(--ink-2)" stroke-width="0.8"/>';
      }
    }
    if (o.black > 0) h += '<circle cx="104" cy="104" r="4" fill="var(--ink)"/><circle cx="121" cy="106" r="3" fill="var(--ink)"/>';
    // lid
    if (o.lid === 'on') h += '<rect x="74" y="64" width="72" height="6" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.4"/>';
    else if (o.lid === 'ajar') h += '<rect x="76" y="58" width="72" height="6" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.4" transform="rotate(-10 76 64)"/>';
    else if (o.lid === 'off') h += '<rect x="6" y="190" width="40" height="6" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.2"/>' + svgText(26, 210, t('lid'), 'labw-svg__small', 'middle');
    h += svgText(110, 22, o.caption1 || '', 'labw-svg__strong', 'middle');
    h += svgText(110, 40, o.caption2 || '', 'labw-svg__small', 'middle');
    return h;
  }

  /* =======================================================================
     Part A: burning magnesium
     ======================================================================= */
  S1.widgets.register('lab-empirical-formula.magnesium', function (w) {
    var tech = w.select({ label: t('How you use the lid'), value: 'good', onChange: newRun, options: [
      { value: 'good', label: t('Lid on, lifted briefly every minute') },
      { value: 'off', label: t('Lid left off') },
      { value: 'shut', label: t('Lid never lifted') }] });
    var bal = w.select({ label: t('Balance'), value: '2', onChange: newRun, options: [
      { value: '2', label: t('Reads to 0.01 g') }, { value: '3', label: t('Reads to 0.001 g') }] });
    var len = w.slider({ label: t('Length of magnesium ribbon'), min: 10, max: 40, step: 1, value: 25, unit: 'cm', onInput: function () { draw(); } });
    var b1 = w.button(t('1. Weigh crucible and lid'), weighEmpty, { primary: true });
    var b2 = w.button(t('2. Add magnesium and weigh'), addMg);
    var b3 = w.button(t('3. Heat, cool and weigh'), heat);
    var b4 = w.button(t('Add drops of water, reheat'), water);
    var bShow = w.button(t('Show the processing'), toggleWork);
    w.button(t('New run'), newRun);
    var svg = w.svg('0 0 360 220', { label: t('A crucible with a lid on a pipeclay triangle over a Bunsen burner, and a balance showing the latest reading') });
    svg.classList.add('labw-svg');
    var table = dataTable(w, t('Part A: masses of crucible, lid and contents'));
    var work = workBox(w);
    var setRead = w.readoutItem(t('Balance reading'));
    var setStatus = w.readoutItem(t('What to do next'), { text: true });

    var S;   // state of the current run
    function newRun() {
      S = { phase: 0, dp: Number(bal.value), tech: tech.value, cruc: rand(22, 29), perCm: rand(0.0098, 0.0106),
        mg: 0, rem: 0, mgo: 0, nitr: 0, cycle: 0, watered: false, readings: [], show: false, lastRead: null, constant: false };
      disable(len, false); draw();
    }
    function trueMass() { return S.cruc + S.rem + S.mgo + S.nitr; }
    function record(label) { var r = weigh(trueMass(), S.dp); S.readings.push([label, r]); S.lastRead = r; return r; }
    function weighEmpty() { if (S.phase !== 0) return; record(t('Crucible and lid')); S.phase = 1; draw(); }
    function addMg() {
      if (S.phase !== 1) return;
      S.mg = len.value * S.perCm; S.rem = S.mg;
      record(t('Crucible, lid and magnesium')); S.phase = 2; disable(len, true); draw();
    }
    function heat() {
      if (S.phase < 2 || S.cycle >= 10) return;
      S.cycle++;
      var f, fn, smoke;
      if (S.tech === 'good') { f = S.cycle === 1 ? rand(0.8, 0.9) : rand(0.85, 0.95); fn = rand(0.02, 0.04); smoke = rand(0.004, 0.012); }
      else if (S.tech === 'off') { f = S.cycle === 1 ? rand(0.93, 0.98) : 0.97; fn = rand(0.01, 0.02); smoke = S.cycle === 1 ? rand(0.07, 0.12) : rand(0.01, 0.02); }
      else { f = rand(0.3, 0.4); fn = rand(0.1, 0.15); smoke = 0.002; }
      var dm = S.rem * f;
      if (S.rem - dm < 0.0004) dm = S.rem;
      S.rem -= dm;
      S.mgo += dm * (1 - fn) * M_MGO / AR_MG * (1 - smoke);
      S.nitr += dm * fn * M_MG3N2 / (3 * AR_MG);
      record(t('After heating {n}', { n: S.cycle }));
      S.phase = 3; checkConstant(); draw();
    }
    function water() {
      if (S.phase < 3 || S.watered) return;
      // Mg3N2 + 3H2O -> 3MgO + 2NH3, then the solid is heated again
      S.mgo += S.nitr * 3 * M_MGO / M_MG3N2; S.nitr = 0; S.watered = true;
      record(t('After adding water and heating'));
      checkConstant(); draw();
    }
    function checkConstant() {
      var heats = S.readings.slice(2);
      var tol = S.dp === 2 ? 0.01 : 0.002;
      S.constant = heats.length >= 2 && Math.abs(heats[heats.length - 1][1] - heats[heats.length - 2][1]) <= tol + 1e-9;
    }
    function toggleWork() { S.show = !S.show; draw(); }

    function draw() {
      var dp = S.dp, ph = S.phase;
      var lidState = ph < 2 ? 'on' : S.tech === 'off' ? 'off' : S.tech === 'good' && ph === 2 ? 'ajar' : 'on';
      var cap1 = ph === 0 ? t('Empty crucible and lid') : ph === 1 ? t('Crucible and lid weighed') : ph === 2 ? t('Magnesium ribbon in the crucible') : t('Cooled after heating {n}', { n: S.cycle });
      var cap2 = '';
      if (ph >= 3) cap2 = S.rem > S.mg * 0.02 ? t('some grey metal is left') : t('white powder, no metal left');
      svg.innerHTML = rigSvg({ lid: lidState, coil: S.mg ? S.rem / S.mg : 0, powder: ph >= 3 ? Math.min(1, (S.mgo + S.nitr) / (S.mg * 1.66)) : 0, powderFill: 'var(--surface)', flame: false, caption1: cap1, caption2: cap2 }) +
        balanceSvg(215, 50, S.lastRead, dp);
      // raw data table
      var unit = t('Mass / g');
      table.set([t('Reading'), unit], S.readings.map(function (r) { return [r[0], fx(r[1], dp)]; }));
      // buttons
      b1.disabled = ph !== 0; b2.disabled = ph !== 1; b3.disabled = ph < 2 || S.cycle >= 10; b4.disabled = ph < 3 || S.watered;
      bShow.disabled = ph < 3; bShow.setAttribute('aria-pressed', S.show ? 'true' : 'false');
      setRead(S.lastRead == null ? '—' : fx(S.lastRead, dp) + ' g');
      var msg;
      if (ph === 0) msg = t('Weigh the empty crucible and lid.');
      else if (ph === 1) msg = t('Choose a length of ribbon, then add it and weigh.');
      else if (ph === 2) msg = t('Heat the crucible. Then let it cool and weigh it.');
      else if (S.constant) msg = t('Constant mass: the last two readings agree. Process your data.');
      else if (S.cycle >= 10) msg = t('Ten heatings and still not constant. Check your technique and start a new run.');
      else msg = t('The mass is still changing. Heat, cool and weigh again.');
      setStatus(msg);
      // processing
      if (ph >= 3 && S.show) {
        var m1 = S.readings[0][1], m2 = S.readings[1][1], mf = S.readings[S.readings.length - 1][1];
        var mMg = m2 - m1, mO = mf - m2, nMg = mMg / AR_MG, nO = mO / AR_O, r = nO / nMg;
        var u = S.dp === 2 ? 0.02 : 0.002, pc = (u / mMg + u / Math.max(mO, 1e-6)) * 100;
        work.lines([
          t('mass of Mg = {a} g − {b} g = {c} g', { a: fx(m2, dp), b: fx(m1, dp), c: fx(mMg, dp) }),
          t('mass of O = {a} g − {b} g = {c} g', { a: fx(mf, dp), b: fx(m2, dp), c: fx(mO, dp) }),
          '<i>n</i>(Mg) = ' + fx(mMg, dp) + ' ÷ ' + AR_MG.toFixed(2) + ' = ' + sig(nMg, 4) + ' mol',
          '<i>n</i>(O) = ' + fx(mO, dp) + ' ÷ ' + AR_O.toFixed(2) + ' = ' + (nO > 0 ? sig(nO, 4) : '0') + ' mol',
          t('ratio O ÷ Mg = {r}, so Mg : O = 1 : {r}', { r: sig(r, 3) }),
          t('uncertainty in the ratio ≈ {u} % + {v} % = {p} %', { u: sig(u / mMg * 100, 2), v: sig(u / Math.max(mO, 1e-6) * 100, 2), p: sig(pc, 2) }),
          t('ratio = {pm}', { pm: pm(r, r * pc / 100) }),
          { note: S.constant ? '' : t('Your mass is not constant yet, so these numbers may change.') },
          { note: t('Expected for MgO: a ratio of 1.00. Your percentage error: {e} %.', { e: sig(Math.abs(r - 1) * 100, 2) }) }
        ]);
      } else work.clear();
    }
    newRun();
  });

  /* =======================================================================
     Part B: heating hydrated copper(II) sulfate
     ======================================================================= */
  S1.widgets.register('lab-empirical-formula.hydrate', function (w) {
    var heatSel = w.select({ label: t('Heating'), value: 'gentle', onChange: newRun, options: [
      { value: 'gentle', label: t('Gentle, with stirring') }, { value: 'strong', label: t('Strong, roaring flame') }] });
    var coolSel = w.select({ label: t('Cooling before each weighing'), value: 'desiccator', onChange: newRun, options: [
      { value: 'desiccator', label: t('In a desiccator') }, { value: 'bench', label: t('On the open bench') }] });
    var bal = w.select({ label: t('Balance'), value: '2', onChange: newRun, options: [
      { value: '2', label: t('Reads to 0.01 g') }, { value: '3', label: t('Reads to 0.001 g') }] });
    var amount = w.slider({ label: t('Mass of crystals to add'), min: 1, max: 4, step: 0.1, value: 2.5, unit: 'g' });
    var b1 = w.button(t('1. Weigh empty crucible'), weighEmpty, { primary: true });
    var b2 = w.button(t('2. Add crystals and weigh'), addHyd);
    var b3 = w.button(t('3. Heat, cool and weigh'), heat);
    var bShow = w.button(t('Show the processing'), toggleWork);
    w.button(t('New run'), newRun);
    var svg = w.svg('0 0 360 220', { label: t('A crucible of copper(II) sulfate on a pipeclay triangle over a Bunsen burner, and a balance showing the latest reading') });
    svg.classList.add('labw-svg');
    var table = dataTable(w, t('Part B: masses of crucible and contents'));
    var work = workBox(w);
    var setRead = w.readoutItem(t('Balance reading'));
    var setLook = w.readoutItem(t('The solid looks'), { text: true });
    var setStatus = w.readoutItem(t('What to do next'), { text: true });

    var S;
    function newRun() {
      S = { phase: 0, dp: Number(bal.value), heat: heatSel.value, cool: coolSel.value, cruc: rand(16, 21),
        water0: 0, cuso4: 0, cuo: 0, water: 0, cycle: 0, readings: [], lastRead: null, constant: false, show: false };
      disable(amount, false); draw();
    }
    function trueMass() { return S.cruc + S.cuso4 + S.cuo + S.water; }
    function record(label) { var r = weigh(trueMass(), S.dp); S.readings.push([label, r]); S.lastRead = r; return r; }
    function weighEmpty() { if (S.phase !== 0) return; record(t('Crucible')); S.phase = 1; draw(); }
    function addHyd() {
      if (S.phase !== 1) return;
      var hyd = amount.value + rand(-0.08, 0.08);
      S.cuso4 = hyd * M_CUSO4 / M_HYD; S.water = hyd - S.cuso4; S.water0 = S.water;
      record(t('Crucible and hydrate')); S.phase = 2; disable(amount, true); draw();
    }
    function heat() {
      if (S.phase < 2 || S.cycle >= 10) return;
      S.cycle++;
      var f, spit = 0, dec = 0;
      if (S.heat === 'gentle') f = S.cycle === 1 ? rand(0.6, 0.72) : S.cycle === 2 ? rand(0.8, 0.9) : rand(0.9, 0.97);
      else { f = S.cycle === 1 ? rand(0.95, 0.99) : 1; spit = S.cycle === 1 ? rand(0.005, 0.015) : 0; dec = S.cycle === 1 ? rand(0.002, 0.008) : rand(0.015, 0.035); }
      S.water *= (1 - f);
      if (S.water < S.water0 * 0.0015) S.water = 0;
      if (spit) { S.cuso4 *= (1 - spit); S.water *= (1 - spit); S.cuo *= (1 - spit); }
      if (dec) { var d = S.cuso4 * dec; S.cuso4 -= d; S.cuo += d * M_CUO / M_CUSO4; }   // CuSO4 -> CuO + SO3
      if (S.cool === 'bench') S.water += S.cuso4 * rand(0.003, 0.008);                   // takes water back while it cools
      record(t('After heating {n}', { n: S.cycle }));
      S.phase = 3;
      var heats = S.readings.slice(2), tol = S.dp === 2 ? 0.01 : 0.002;
      S.constant = heats.length >= 2 && Math.abs(heats[heats.length - 1][1] - heats[heats.length - 2][1]) <= tol + 1e-9;
      draw();
    }
    function toggleWork() { S.show = !S.show; draw(); }
    function look() {
      if (S.phase < 2) return t('Nothing in the crucible yet.');
      var wf = S.water / S.water0, black = S.cuo > (S.cuso4 + S.cuo) * 0.01;
      var base = wf > 0.6 ? t('blue crystals') : wf > 0.15 ? t('pale blue and white') : t('a white powder');
      return black ? t('{base}, with black patches', { base: base }) : base;
    }
    function draw() {
      var dp = S.dp, ph = S.phase, wf = S.water0 ? S.water / S.water0 : 0, black = S.cuo > (S.cuso4 + S.cuo) * 0.01;
      var cap1 = ph === 0 ? t('Empty crucible') : ph === 1 ? t('Crucible weighed') : ph === 2 ? t('Blue crystals in the crucible') : t('Cooled after heating {n}', { n: S.cycle });
      svg.innerHTML = rigSvg({ lid: ph >= 2 ? 'off' : 'none', crystals: ph >= 2 ? Math.min(1, wf) : 0, powder: ph >= 3 ? 0.6 : 0, powderFill: 'var(--surface)', black: black ? 1 : 0, caption1: cap1, caption2: ph >= 2 ? look() : '' }) +
        balanceSvg(215, 50, S.lastRead, dp);
      table.set([t('Reading'), t('Mass / g')], S.readings.map(function (r) { return [r[0], fx(r[1], dp)]; }));
      b1.disabled = ph !== 0; b2.disabled = ph !== 1; b3.disabled = ph < 2 || S.cycle >= 10;
      bShow.disabled = ph < 3; bShow.setAttribute('aria-pressed', S.show ? 'true' : 'false');
      setRead(S.lastRead == null ? '—' : fx(S.lastRead, dp) + ' g');
      setLook(look());
      var msg;
      if (ph === 0) msg = t('Weigh the empty crucible.');
      else if (ph === 1) msg = t('Choose a mass of crystals, then add them and weigh.');
      else if (ph === 2) msg = t('Heat the crystals. Then let them cool and weigh.');
      else if (S.constant) msg = t('Constant mass: the last two readings agree. Process your data.');
      else if (S.cycle >= 10) msg = t('Ten heatings and the mass is still changing. Something is going wrong: start a new run.');
      else msg = t('The mass is still changing. Heat, cool and weigh again.');
      setStatus(msg);
      if (ph >= 3 && S.show) {
        var m1 = S.readings[0][1], m2 = S.readings[1][1], mf = S.readings[S.readings.length - 1][1];
        var mA = mf - m1, mW = m2 - mf, nA = mA / M_CUSO4, nW = mW / M_H2O, x = nW / nA;
        var u = S.dp === 2 ? 0.02 : 0.002, pc = (u / mA + u / Math.max(mW, 1e-6)) * 100;
        work.lines([
          t('mass of anhydrous CuSO₄ = {a} g − {b} g = {c} g', { a: fx(mf, dp), b: fx(m1, dp), c: fx(mA, dp) }),
          t('mass of water = {a} g − {b} g = {c} g', { a: fx(m2, dp), b: fx(mf, dp), c: fx(mW, dp) }),
          '<i>n</i>(CuSO<sub>4</sub>) = ' + fx(mA, dp) + ' ÷ ' + M_CUSO4.toFixed(2) + ' = ' + sig(nA, 4) + ' mol',
          '<i>n</i>(H<sub>2</sub>O) = ' + fx(mW, dp) + ' ÷ ' + M_H2O.toFixed(2) + ' = ' + sig(nW, 4) + ' mol',
          '<i>x</i> = ' + sig(nW, 4) + ' ÷ ' + sig(nA, 4) + ' = <b>' + sig(x, 3) + '</b>',
          t('uncertainty in x ≈ {p} %, so x = {pm}', { p: sig(pc, 2), pm: pm(x, x * pc / 100) }),
          { note: S.constant ? '' : t('Your mass is not constant yet, so these numbers may change.') },
          { note: t('Expected: x = 5. Your percentage error: {e} %.', { e: sig(Math.abs(x - 5) / 5 * 100, 2) }) }
        ]);
      } else work.clear();
    }
    newRun();
  });
})();
