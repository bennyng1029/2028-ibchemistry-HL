/* ==========================================================================
   Widgets for Lab 6 — Standard solutions and calibration curves.
   lab-standard-solution.prepare      make a standard solution of CuSO4.5H2O in a volumetric flask
   lab-standard-solution.calibration  standards from two burettes (or measuring cylinders), a colorimeter,
                                      a calibration line (S1.chart) and an unknown read from it
   Every run has new random scatter. Precision of the simulated apparatus: balance ±0.01 g,
   volumetric flask ±0.10 cm3 (100.0) or ±0.2 cm3 (250.0), burette ±0.05 cm3 per reading,
   10 cm3 measuring cylinder ±0.1 cm3, colorimeter ±0.01. The colorimeter response is a simulated
   straight line (absorbance proportional to concentration); its slope depends on the filter.
   Every user-visible English string goes through t("…", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var M_HYD = chem.molarMass('CuSO4.5H2O');
  var STOCK = 0.250;                       // mol dm-3, the standard solution made in part A
  var MOLDM = 'mol dm<sup>−3</sup>', CM3 = 'cm<sup>3</sup>';

  /* ---------- shared helpers -------------------------------------------- */
  function gauss() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function rand(a, b) { return a + Math.random() * (b - a); }
  function weigh(trueMass) { return Math.round((trueMass + gauss() * 0.004) * 100) / 100; }
  function sig(x, n) { return chem.toSig(x, n); }
  function strip(html) { var d = document.createElement('div'); d.innerHTML = html; return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function svgText(x, y, str, cls, anchor) {
    return '<text x="' + x + '" y="' + y + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + (cls ? ' class="' + cls + '"' : '') + '>' + str + '</text>';
  }
  function dataTable(w, caption, parent, cls) {
    var box = el('div', { class: 'labw-data' + (cls ? ' ' + cls : '') });
    var head = el('div', { class: 'labw-data__head' });
    var status = el('span', { class: 'labw-data__status', role: 'status', 'aria-live': 'polite' });
    var copy = el('button', { class: 'btn btn--small', type: 'button', html: t('Copy table') });
    head.appendChild(el('p', { class: 'labw-data__title', html: t('Raw data') }));
    head.appendChild(el('span', {}, [copy, ' ', status]));
    var table = el('table', { class: 'data' });
    box.appendChild(head); box.appendChild(el('div', { class: 'table-scroll' }, [table]));
    (parent || w.stage).appendChild(box);
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
  function workBox(parent) {
    var box = el('div', { class: 'labw-work' });
    parent.appendChild(box);
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
  function lock(ctl, off) { Array.prototype.forEach.call(ctl.el.querySelectorAll('input, select'), function (i) { i.disabled = off; }); }

  /* =======================================================================
     Part A: make the standard solution
     ======================================================================= */
  S1.widgets.register('lab-standard-solution.prepare', function (w) {
    var FLASK = { '100.0': 0.10, '250.0': 0.2 };
    var flask = w.select({ label: t('Volumetric flask'), value: '250.0', onChange: newRun, options: [
      { value: '100.0', label: t('100.0 cm³ (±0.10 cm³)') }, { value: '250.0', label: t('250.0 cm³ (±0.2 cm³)') }] });

    // "Check your calculation" box in the controls area
    var cid = S1.util.uid('mass');
    var input = el('input', { class: 'input', id: cid, type: 'text', inputmode: 'decimal', autocomplete: 'off' });
    var checkBtn = el('button', { class: 'btn btn--small', type: 'button', html: t('Check') });
    var fb = el('p', { class: 'labw-check__fb', role: 'status', 'aria-live': 'polite' });
    var lab = el('label', { class: 'control__label', for: cid });
    w.controls.appendChild(el('div', { class: 'labw-check' }, [el('div', { class: 'control' }, [lab, el('div', { class: 'control__row' }, [input, el('span', { class: 'control__unit', html: 'g' })])]), checkBtn, fb]));
    w.listen(checkBtn, 'click', checkMass);
    w.listen(input, 'keydown', function (e) { if (e.key === 'Enter') checkMass(); });

    var rinse = w.select({ label: t('Transfer to the flask'), value: 'rinse', onChange: draw, options: [
      { value: 'rinse', label: t('Rinse beaker, rod and funnel; add rinsings') }, { value: 'none', label: t('Pour only, no rinsing') }] });
    var makeup = w.select({ label: t('Making up to the mark'), value: 'eye', onChange: draw, options: [
      { value: 'eye', label: t('Eye level, last drops by dropping pipette') }, { value: 'over', label: t('Fill quickly from the wash bottle') }, { value: 'short', label: t('Stop with the meniscus below the mark') }] });
    var mix = w.select({ label: t('Mixing'), value: 'invert', onChange: draw, options: [
      { value: 'invert', label: t('Stopper and invert ten times') }, { value: 'none', label: t('Do not mix') }] });
    var next = w.button(t('Do the next step'), step, { primary: true });
    w.button(t('Start again'), newRun);

    var svg = w.svg('0 0 360 236', { label: t('A balance and a volumetric flask with a close-up of the neck, showing the meniscus and the graduation mark') });
    svg.classList.add('labw-svg');
    var steps = el('ol', { class: 'labw-steps' });
    w.stage.appendChild(steps);
    var table = dataTable(w, t('Part A: making the standard solution'));
    var work = workBox(w.stage);
    var setRead = w.readoutItem(t('Balance reading'));
    var setCalc = w.readoutItem(t('Concentration from your data'));
    var setTrue = w.readoutItem(t('Concentration really in the flask'));

    var S;
    function vNom() { return Number(flask.value); }
    function target() { return STOCK * vNom() / 1000 * M_HYD; }
    function newRun() {
      var tg = target();
      S = { step: 0, boat: rand(1.55, 2.05), solid: tg + gauss() * 0.02, residue: rand(0, 0.015), r1: null, r2: null, last: null, loss: 0, vTrue: null, mixed: true, topFactor: 1 };
      lab.innerHTML = t('Your calculated mass of CuSO₄·5H₂O for {v} cm³ of {c} mol dm⁻³', { v: flask.value, c: STOCK.toFixed(3) });
      fb.innerHTML = '';
      [rinse, makeup, mix].forEach(function (c) { lock(c, false); });
      lock(flask, false);
      draw();
    }
    function checkMass() {
      var res = chem.checkNumeric(input.value, { answer: target(), tolerance: '0.5%', sigfigs: [3, 4] });
      if (res.status === 'correct') fb.innerHTML = t('Correct: aim for about {m} g. You do not need exactly this mass, but you must record the mass you use.', { m: target().toFixed(2) });
      else if (res.status === 'sigfig') fb.innerHTML = t('Right value. Give it to 3 or 4 significant figures.');
      else if (res.status === 'invalid') fb.innerHTML = t('Type a number, such as 12.3.');
      else fb.innerHTML = t('Not yet. Use n = CV with V in dm³, then m = n × M with the molar mass of the hydrate, 249.72 g mol⁻¹.');
    }
    function step() {
      if (S.step >= 6) return;
      S.step++;
      if (S.step === 1) { S.r1 = weigh(S.boat + S.solid); S.last = S.r1; lock(flask, true); }
      else if (S.step === 2) { S.r2 = weigh(S.boat + S.residue); S.last = S.r2; }
      else if (S.step === 4) { S.loss = rinse.value === 'rinse' ? rand(0, 0.001) : rand(0.01, 0.025); lock(rinse, true); }
      else if (S.step === 5) {
        var tol = FLASK[flask.value], scale = vNom() / 250;
        S.vTrue = vNom() + gauss() * tol / 2;
        if (makeup.value === 'over') S.vTrue += rand(0.5, 1.6) * scale;
        if (makeup.value === 'short') S.vTrue -= rand(0.4, 1.2) * scale;
        lock(makeup, true);
      } else if (S.step === 6) { S.mixed = mix.value === 'invert'; S.topFactor = S.mixed ? 1 : rand(0.9, 0.96); lock(mix, true); }
      draw();
    }
    function stepTexts() {
      return [
        t('Weigh the weighing boat with the solid.'),
        t('Tip the solid into a beaker and reweigh the empty boat.'),
        t('Dissolve the solid in about 100 cm³ of distilled water, stirring.'),
        t('Transfer the solution to the volumetric flask through a funnel.'),
        t('Add distilled water up to the mark.'),
        t('Stopper the flask and mix.')
      ];
    }
    function flaskSvg(level) {
      // level: null = empty, 'part' = bulb two-thirds full, or a number of px above (+) or below (−) the mark
      var h = '', cx = 250, by = 160, r = 46, neckTop = 34, mark = 70;
      var fillTop = level == null ? null : level === 'part' ? by - 10 : mark - level;
      if (fillTop != null) {
        h += '<clipPath id="' + clip + '"><circle cx="' + cx + '" cy="' + by + '" r="' + r + '"/><rect x="' + (cx - 9) + '" y="' + neckTop + '" width="18" height="' + (by - r - neckTop + 6) + '"/></clipPath>';
        h += '<rect x="' + (cx - r) + '" y="' + fillTop + '" width="' + (2 * r) + '" height="' + (by + r - fillTop) + '" fill="var(--accent)" fill-opacity="0.45" clip-path="url(#' + clip + ')"/>';
      }
      h += '<path d="M' + (cx - 9) + ' ' + neckTop + ' V' + (by - r + 4) + ' A' + r + ' ' + r + ' 0 1 0 ' + (cx + 9) + ' ' + (by - r + 4) + ' V' + neckTop + '" fill="none" stroke="var(--ink)" stroke-width="1.8"/>';
      h += '<line x1="' + (cx - 13) + '" y1="' + mark + '" x2="' + (cx + 13) + '" y2="' + mark + '" stroke="var(--ink)" stroke-width="2"/>';
      h += svgText(cx + 18, mark + 4, t('the mark'), 'labw-svg__small');
      h += svgText(cx, by + r + 18, t('{v} cm³ flask', { v: flask.value }), 'labw-svg__small', 'middle');
      return h;
    }
    var clip = S1.util.uid('clip');
    function draw() {
      var st = S.step, level = st < 4 ? null : st === 4 ? 'part' : (S.vTrue - vNom()) / (vNom() / 250) * 6;
      var h = '<rect x="20" y="130" width="130" height="58" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<rect x="32" y="142" width="106" height="30" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.2"/>' +
        svgText(132, 164, (S.last == null ? '0.00' : S.last.toFixed(2)) + ' g', 'labw-svg__display', 'end') +
        '<rect x="45" y="120" width="80" height="6" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.3"/>' +
        '<line x1="85" y1="126" x2="85" y2="130" stroke="var(--ink)" stroke-width="2"/>' +
        svgText(85, 206, t('balance, ±0.01 g'), 'labw-svg__small', 'middle');
      if (st === 1) h += '<path d="M60 120 l6 -10 h38 l6 10 z" fill="var(--accent)" fill-opacity="0.8" stroke="var(--ink)" stroke-width="1.2"/>';
      if (st === 2) h += '<path d="M60 120 l6 -10 h38 l6 10 z" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.2"/>';
      h += flaskSvg(level);
      var cap = st === 0 ? t('Ready to weigh') : t('Step {n} of 6 done', { n: st });
      h += svgText(85, 30, cap, 'labw-svg__strong', 'middle');
      if (st >= 5) {
        var d = S.vTrue - vNom();
        h += svgText(85, 50, Math.abs(d) < 0.1 * (vNom() / 100) ? t('meniscus on the mark') : d > 0 ? t('meniscus above the mark') : t('meniscus below the mark'), 'labw-svg__small', 'middle');
      }
      svg.innerHTML = h;
      // step list
      steps.innerHTML = '';
      stepTexts().forEach(function (s, i) {
        var li = el('li', { class: i < st ? 'is-done' : i === st ? 'is-now' : '' });
        li.innerHTML = s + (i < st ? ' <span class="labw-steps__tag">' + t('(done)') + '</span>' : i === st ? ' <span class="labw-steps__tag">' + t('(next)') + '</span>' : '');
        steps.appendChild(li);
      });
      next.disabled = st >= 6;
      // table
      var rows = [];
      if (S.r1 != null) rows.push([t('Mass of boat and solid / g'), S.r1.toFixed(2)]);
      if (S.r2 != null) { rows.push([t('Mass of empty boat after tipping / g'), S.r2.toFixed(2)]); rows.push([t('Mass of solid transferred / g'), (S.r1 - S.r2).toFixed(2)]); }
      if (st >= 5) rows.push([t('Volume of solution / cm³'), flask.value + ' ± ' + (flask.value === '250.0' ? '0.2' : '0.10')]);
      table.set([t('Quantity'), t('Value')], rows);
      setRead(S.last == null ? '—' : S.last.toFixed(2) + ' g');
      if (st >= 2) {
        var m = S.r1 - S.r2, cCalc = m / M_HYD / (vNom() / 1000);
        setCalc(sig(cCalc, 4) + ' ' + MOLDM);
        if (st >= 6) {
          var cTrue = (S.solid - S.residue) * (1 - S.loss) / M_HYD / (S.vTrue / 1000);
          setTrue(sig(cTrue, 4) + ' ' + MOLDM);
          var diff = (cTrue - cCalc) / cCalc * 100, notes = [];
          notes.push('<i>n</i> = ' + m.toFixed(2) + ' g ÷ ' + M_HYD.toFixed(2) + ' g mol<sup>−1</sup> = ' + sig(m / M_HYD, 5) + ' mol');
          notes.push('[CuSO<sub>4</sub>] = ' + sig(m / M_HYD, 5) + ' mol ÷ ' + (vNom() / 1000).toFixed(4) + ' dm<sup>3</sup> = <b>' + sig(cCalc, 4) + ' ' + MOLDM + '</b>');
          notes.push({ note: t('The solution really in the flask differs from your calculated value by {d} %.', { d: (diff >= 0 ? '+' : '−') + sig(Math.abs(diff), 2) }) });
          if (rinse.value === 'none') notes.push({ note: t('Without rinsing, some copper(II) sulfate stayed in the beaker and funnel, so the true concentration is lower than you calculated.') });
          if (makeup.value === 'over') notes.push({ note: t('You went past the mark, so the volume is too large and the true concentration is lower than you calculated.') });
          if (makeup.value === 'short') notes.push({ note: t('You stopped below the mark, so the volume is too small and the true concentration is higher than you calculated.') });
          if (!S.mixed) notes.push({ note: t('Not mixed: a sample from the top of the flask is only {c} mol dm⁻³. The solution is not uniform.', { c: sig(cTrue * S.topFactor, 3) }) });
          if (rinse.value === 'rinse' && makeup.value === 'eye' && S.mixed) notes.push({ note: t('Good technique: the only differences come from the balance and the tolerance of the flask, and they are tiny.') });
          work.lines(notes);
        } else { setTrue('—'); work.clear(); }
      } else { setCalc('—'); setTrue('—'); work.clear(); }
    }
    newRun();
  });

  /* =======================================================================
     Part B: standards, colorimeter and calibration curve
     ======================================================================= */
  S1.widgets.register('lab-standard-solution.calibration', function (w) {
    var V1 = [2, 4, 6, 8, 10];
    var SLOPE = { red: 2.95, green: 0.62, blue: 0.08 };
    var glass = w.select({ label: t('Measure the volumes with'), value: 'burette', onChange: newRun, options: [
      { value: 'burette', label: t('Two burettes (±0.05 cm³)') }, { value: 'cylinder', label: t('Two measuring cylinders (±0.1 cm³)') }] });
    var filter = w.select({ label: t('Colorimeter filter'), value: 'red', onChange: function () { S.k = SLOPE[filter.value] * S.inst; S.std = null; S.unk = null; S.reveal = false; draw(); }, options: [
      { value: 'red', label: t('Red') }, { value: 'green', label: t('Green') }, { value: 'blue', label: t('Blue') }] });
    var bMake = w.button(t('1. Make the standards'), make, { primary: true });
    var bZero = w.button(t('2. Zero with the blank'), zero);
    var bStd = w.button(t('3. Measure the standards'), measureStd);
    var bUnk = w.button(t('4. Measure the unknown (×3)'), measureUnk);
    var bRev = w.button(t('Reveal the true value'), function () { S.reveal = true; draw(); });
    w.button(t('New run'), newRun);

    var chartBox = el('div', { class: 'labw-chart' });
    w.stage.appendChild(chartBox);
    var chart = null;
    var note = el('p', { class: 'labw-note' });
    w.stage.appendChild(note);
    var table = dataTable(w, t('Part B: standards and absorbance readings'), null, 'labw-data--short');
    var work = workBox(w.stage);
    var setGrad = w.readoutItem(t('Gradient of the line'));
    var setInt = w.readoutItem(t('y-intercept'));
    var setUA = w.readoutItem(t('Mean absorbance of the unknown'));
    var setUC = w.readoutItem(t('Unknown concentration read from the line'));

    var S;
    function newRun() {
      var inst = 1 + gauss() * 0.02;
      S = { made: false, zeroed: false, std: null, unk: null, reveal: false, inst: inst, k: SLOPE[filter.value] * inst,
        stock: STOCK * (1 + gauss() * 0.002), offset: rand(0.03, 0.07), cu: rand(0.07, 0.22), tubes: [] };
      draw();
    }
    function sdV() { return glass.value === 'burette' ? 0.03 : 0.15; }
    function make() {
      S.tubes = V1.map(function (v) {
        var a = v + gauss() * sdV(), b = 10 - v > 0 ? (10 - v) + gauss() * sdV() : 0;
        return { v1: v, cNom: STOCK * v / 10, cTrue: S.stock * a / (a + b) };
      });
      S.made = true; S.std = null; S.unk = null; S.reveal = false; draw();
    }
    function read(c) {
      var a = S.k * c + (S.zeroed ? 0 : S.offset) + gauss() * 0.004;
      return Math.max(0, Math.round(a * 100) / 100);
    }
    function zero() { S.zeroed = true; S.std = null; S.unk = null; S.reveal = false; draw(); }
    function measureStd() { if (!S.made) return; S.std = [read(0)].concat(S.tubes.map(function (tb) { return read(tb.cTrue); })); draw(); }
    function measureUnk() { S.unk = [read(S.cu), read(S.cu), read(S.cu)]; S.reveal = false; draw(); }
    function fit() {
      var xs = [0].concat(S.tubes.map(function (tb) { return tb.cNom; })), ys = S.std, n = xs.length, sx = 0, sy = 0, sxx = 0, sxy = 0;
      for (var i = 0; i < n; i++) { sx += xs[i]; sy += ys[i]; sxx += xs[i] * xs[i]; sxy += xs[i] * ys[i]; }
      var m = (n * sxy - sx * sy) / (n * sxx - sx * sx);
      return { m: m, b: (sy - m * sx) / n };
    }
    function draw() {
      bZero.disabled = S.zeroed; bStd.disabled = !S.made; bUnk.disabled = !S.std; bRev.disabled = !S.unk || S.reveal;
      var series = [], ann = [], f = null, mean = null, cu = null;
      if (S.std) {
        f = fit();
        series.push({ type: 'scatter', name: t('standards'), color: '--accent', data: S.std.map(function (a, i) { return [i ? S.tubes[i - 1].cNom : 0, a]; }) });
        series.push({ type: 'line', name: t('line of best fit'), color: '--ink-2', width: 1.6, data: [[0, f.b], [0.27, f.b + f.m * 0.27]] });
      }
      if (S.unk && f) {
        mean = (S.unk[0] + S.unk[1] + S.unk[2]) / 3;
        cu = f.m > 0 ? (mean - f.b) / f.m : NaN;
        if (isFinite(cu) && cu >= 0 && cu <= 0.27) {
          series.push({ type: 'line', name: t('unknown'), color: '--line-strong', width: 2, data: [[0, mean], [cu, mean], [cu, 0]] });
          ann.push({ x: cu, y: mean, text: t('unknown'), dy: -14 });
        }
      }
      var spec = { label: t('Calibration graph: absorbance against concentration of copper(II) sulfate for the standards, with the line of best fit and the reading for the unknown'),
        height: 270, x: { label: t('[CuSO₄] / mol dm⁻³'), min: 0, max: 0.27, step: 0.05, format: function (v) { return v.toFixed(2); } },
        y: { label: t('Absorbance'), min: 0, max: 1, step: 0.2, format: function (v) { return v.toFixed(1); } },
        series: series.length ? series : [{ type: 'scatter', data: [] }], annotations: ann };
      if (chart) chart.update(spec); else chart = S1.chart.plot(chartBox, spec);
      // note
      var msg;
      if (!S.made) msg = t('Start by making the five standards from the 0.250 mol dm⁻³ stock solution.');
      else if (!S.std) msg = S.zeroed ? t('The colorimeter reads zero with the blank. Now measure the standards.') : t('Zero the colorimeter with the blank (distilled water) before you measure.');
      else if (!S.zeroed) msg = t('You did not zero on the blank: every reading includes the absorbance of the cuvette and water, so the line does not pass through the origin.');
      else if (filter.value !== 'red') msg = t('With this filter the absorbances are small and the line is shallow, so each 0.01 reading error is a large part of the value. A blue solution absorbs red light most.');
      else if (!S.unk) msg = t('Now measure the unknown three times.');
      else msg = t('Read across from the unknown’s mean absorbance to the line, then down to the concentration axis.');
      note.innerHTML = msg;
      // table
      var rows = [];
      if (S.made) {
        rows.push([t('Blank'), '0.00', '10.00', '0.0000', S.std ? S.std[0].toFixed(2) : '']);
        S.tubes.forEach(function (tb, i) {
          rows.push([t('Standard {n}', { n: i + 1 }), tb.v1.toFixed(2), (10 - tb.v1).toFixed(2), tb.cNom.toFixed(4), S.std ? S.std[i + 1].toFixed(2) : '']);
        });
      }
      if (S.unk) rows.push([t('Unknown'), '', '', '?', S.unk.map(function (a) { return a.toFixed(2); }).join(', ')]);
      table.set([t('Tube'), t('V(stock) / cm³'), t('V(water) / cm³'), t('[CuSO₄] / mol dm⁻³'), t('Absorbance')], rows);
      // readout
      setGrad(f ? sig(f.m, 3) + ' dm<sup>3</sup> mol<sup>−1</sup>' : '—');
      var bR = f ? Math.round(f.b * 1000) / 1000 : 0;
      setInt(f ? (bR < 0 ? '−' : '') + Math.abs(bR).toFixed(3) : '—');
      setUA(mean != null ? mean.toFixed(3) : '—');
      setUC(cu != null && isFinite(cu) ? sig(cu, 3) + ' ' + MOLDM : '—');
      if (S.unk && f) {
        var lines = [
          t('mean absorbance = ({a} + {b} + {c}) ÷ 3 = {m}', { a: S.unk[0].toFixed(2), b: S.unk[1].toFixed(2), c: S.unk[2].toFixed(2), m: mean.toFixed(3) }),
          '[CuSO<sub>4</sub>] = (' + mean.toFixed(3) + (bR < 0 ? ' + ' : ' − ') + Math.abs(bR).toFixed(3) + ') ÷ ' + sig(f.m, 3) + ' = <b>' + (isFinite(cu) ? sig(cu, 3) : '?') + ' ' + MOLDM + '</b>'
        ];
        if (isFinite(cu) && cu > 0.25) lines.push({ note: t('The unknown is above the top standard. Dilute it by a known factor and measure it again.') });
        if (S.reveal) {
          lines.push({ note: t('The true concentration of the unknown is {c} mol dm⁻³. Your percentage error: {e} %.', { c: sig(S.cu, 3), e: sig(Math.abs(cu - S.cu) / S.cu * 100, 2) }) });
        }
        work.lines(lines);
      } else work.clear();
    }
    newRun();
  });
})();
