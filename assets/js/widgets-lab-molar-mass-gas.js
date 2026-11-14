/* ==========================================================================
   Widgets for Lab 8 — Molar volume and the molar mass of a gas (Structure 1.5.4, 1.4).
   lab-molar-mass-gas.mg       magnesium + excess hydrochloric acid, hydrogen collected in a gas syringe:
                               molar volume at room conditions, graph of V(H2) against m(Mg)
   lab-molar-mass-gas.vapour   a volatile liquid injected into a gas syringe in a heating jacket:
                               M = mRT / PV, graph of volume of vapour against mass
   Readings carry random scatter and the precision of real apparatus: balance ±0.001 g,
   gas syringe ±0.5 cm3, thermometer ±0.5 °C, barometer ±0.1 kPa. Built-in systematic errors
   (oxide coating, gas lost before the bung is fitted, warm gas, water vapour in the hydrogen,
   non-ideal vapour near its boiling point, liquid lost from the needle) are explained on the page.
   The widget API (w) is documented in docs/AUTHORING.md.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el, clamp = S1.util.clamp;
  var R = chem.constants.R, K0 = chem.constants.zeroC, VM = chem.constants.Vm_STP;
  /* Translation hook: every user-visible string goes through t(). */
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  /* ---------- small helpers ---------- */
  function rand(a, b) { return a + Math.random() * (b - a); }
  function gauss() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function step(x, s) { return Math.round(x / s) * s; }
  function fx(x, dp) { return chem.fixed(x, dp); }
  function plain(x, dp) { return Number(x).toFixed(dp); }
  function sig(x, n) { return chem.toSig(x, n).replace('-', '−'); }
  function sci(x, n) { return chem.sci(x, n); }
  function mono(w, px, bold) { return (bold ? '600 ' : '') + (px || 12) + 'px ' + (w.color('--font-mono') || 'monospace'); }
  function body(w, px) { return (px || 12) + 'px ' + (w.color('--font-body') || 'sans-serif'); }
  /* water vapour pressure / kPa (Tetens approximation), used only inside the model */
  function pWater(theta) { return 0.61078 * Math.exp(17.27 * theta / (theta + 237.3)); }
  /* least-squares line through the origin, y = k x */
  function fitOrigin(pts) {
    var sxx = 0, sxy = 0; pts.forEach(function (p) { sxx += p[0] * p[0]; sxy += p[0] * p[1]; });
    return sxx > 0 ? sxy / sxx : null;
  }
  function mean(a) { return a.reduce(function (s, x) { return s + x; }, 0) / a.length; }
  function tableHtml(cols, rows) {
    var h = '<table class="data"><thead><tr>' + cols.map(function (c, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + c + '</th>'; }).join('') + '</tr></thead><tbody>';
    if (!rows.length) h += '<tr><td colspan="' + cols.length + '">' + t('No readings yet.') + '</td></tr>';
    rows.forEach(function (r) { h += '<tr>' + r.map(function (c, i) { return i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>'; });
    return h + '</tbody></table>';
  }
  function copyText(text, done) {
    function fallback() {
      var ta = el('textarea', { 'aria-hidden': 'true', style: 'position:fixed;left:-9999px;top:0' });
      ta.value = text; document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta); done(ok);
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
      else fallback();
    } catch (e) { fallback(); }
  }
  function makeHosts(w) {
    var chartHost = el('div', { class: 'lab-chart' });
    var tableHost = el('div', { class: 'table-scroll', 'data-i18n': 'off', tabindex: '0' });
    w.stage.appendChild(chartHost); w.stage.appendChild(tableHost);
    return { chart: chartHost, table: tableHost };
  }
  /* Horizontal gas syringe: nozzle at x, barrel 0 … 100 cm3, plunger at v. */
  function drawSyringe(ctx, w, o) {
    var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), soft = w.color('--accent-soft');
    var bx = o.x + 10, len = o.len, y = o.y, h = o.h, px = bx + clamp(o.v / 100, 0, 1.04) * len;
    ctx.fillStyle = ink2; ctx.fillRect(o.x, y + h / 2 - 4, 10, 8);
    ctx.fillStyle = soft; ctx.fillRect(bx, y + 1, px - bx, h - 2);
    ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.strokeRect(bx, y, len + 6, h);
    ctx.fillStyle = ink2; ctx.fillRect(px, y + 2, 6, h - 4);
    var rodEnd = Math.max(px + 20, o.rodEnd);
    ctx.fillRect(px + 6, y + h / 2 - 2.5, rodEnd - px - 6, 5);
    ctx.fillRect(rodEnd - 4, y + h / 2 - 11, 4, 22);
    ctx.strokeStyle = ink3; ctx.lineWidth = 1; ctx.fillStyle = ink3; ctx.font = mono(w, 10); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    for (var v = 0; v <= 100; v += 10) {
      var tx = Math.round(bx + v / 100 * len) + 0.5;
      ctx.beginPath(); ctx.moveTo(tx, y); ctx.lineTo(tx, y + (v % 20 ? 5 : 8)); ctx.stroke();
      if (v % 20 === 0) ctx.fillText(String(v), tx, y - 2);
    }
    return { bx: bx, px: px };
  }

  /* ======================================================================
     1. Magnesium and hydrochloric acid: molar volume of hydrogen
     ====================================================================== */
  S1.widgets.register('lab-molar-mass-gas.mg', function (w) {
    var AR = chem.element('Mg').ar, MAXROWS = 12;
    var day, rows = [], anim = null, shownV = 0, bubbles = [];
    function newDay() {
      var th = rand(19, 24), p = rand(99.0, 102.5);
      day = { th: th, p: p, thRead: step(th + gauss() * 0.2, 0.5), pRead: step(p + gauss() * 0.04, 0.1) };
      rows = []; shownV = 0;
    }
    newDay();

    var sM = w.slider({ label: t('Mass of magnesium ribbon to cut'), min: 0.020, max: 0.110, step: 0.005, value: 0.070, unit: 'g' });
    var cleanSel = w.select({ label: t('Ribbon surface'), value: 'clean', options: [
      { value: 'clean', label: t('Cleaned with sandpaper') },
      { value: 'oxide', label: t('Dull, as supplied') }] });
    var addSel = w.select({ label: t('Adding the magnesium'), value: 'tip', options: [
      { value: 'tip', label: t('Tipped in after the bung is fitted') },
      { value: 'drop', label: t('Dropped in, then the bung fitted') }] });
    var readSel = w.select({ label: t('Volume read'), value: 'cool', options: [
      { value: 'cool', label: t('After cooling to room temperature') },
      { value: 'warm', label: t('As soon as the fizzing stops') }] });
    var runBtn = w.button(t('Run the reaction'), run, { primary: true });
    w.button(t('Delete last run'), function () { if (anim) return; rows.pop(); shownV = 0; setNote(t('Last run deleted.')); update(); });
    w.button(t('New day'), function () { if (anim) return; newDay(); setNote(t('A new day: new room temperature and pressure, and an empty results table.')); update(); });
    w.button(t('Copy data'), function () {
      var lines = [[t('m(Mg) / g (±0.001)'), t('V(H₂) / cm³ (±0.5)'), t('θ / °C (±0.5)'), t('P / kPa (±0.1)')].join('\t')];
      rows.forEach(function (r) { lines.push([plain(r.m, 3), r.over ? '>100' : plain(r.V, 1), plain(day.thRead, 1), plain(day.pRead, 1)].join('\t')); });
      copyText(lines.join('\n'), function (ok) { setNote(ok ? t('Copied {n} runs as tab-separated text. Paste them into a spreadsheet.', { n: rows.length }) : t('Copying is blocked in this browser. Select the table with the mouse and copy it instead.')); });
    });

    var setCond = w.readoutItem(t('Room conditions'));
    var setLast = w.readoutItem(t('Last run'));
    var setVm = w.readoutItem(t('Molar volume, mean of runs'), { text: true });
    var setGrad = w.readoutItem(t('Molar volume from the gradient'), { text: true });
    var setIdeal = w.readoutItem(t('Ideal gas value at room conditions'));
    var setNote = w.readoutItem(t('Note'), { text: true });

    var cv = w.canvas({ height: 150, label: t('A conical flask of hydrochloric acid with a small tube of magnesium inside, sealed with a bung. A delivery tube leads to a horizontal gas syringe. The plunger moves out as hydrogen is produced. The readings are in the readout.') });
    cv.draw(function (ctx, W) {
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), soft = w.color('--accent-soft'), accent = w.color('--accent'), surf = w.color('--surface');
      // flask
      var fx0 = 8, fy = 140, fw = 84, neckW = 22, neckY = 64, cx = fx0 + fw / 2;
      ctx.beginPath(); ctx.moveTo(cx - neckW / 2, neckY); ctx.lineTo(cx - neckW / 2, neckY + 22); ctx.lineTo(fx0, fy); ctx.lineTo(fx0 + fw, fy); ctx.lineTo(cx + neckW / 2, neckY + 22); ctx.lineTo(cx + neckW / 2, neckY); ctx.closePath();
      ctx.fillStyle = surf; ctx.fill();
      // acid
      ctx.save(); ctx.clip(); ctx.fillStyle = soft; ctx.fillRect(fx0, 112, fw, 30); ctx.restore();
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(cx - neckW / 2, neckY); ctx.lineTo(cx - neckW / 2, neckY + 22); ctx.lineTo(fx0, fy); ctx.lineTo(fx0 + fw, fy); ctx.lineTo(cx + neckW / 2, neckY + 22); ctx.lineTo(cx + neckW / 2, neckY); ctx.stroke();
      ctx.fillStyle = ink2; ctx.fillRect(cx - neckW / 2 - 3, neckY - 8, neckW + 6, 12);                  // bung
      // magnesium: in a small tube (before) or in the acid (during and after)
      // small tube that held the magnesium; the ribbon is in it before the run and shrinks in the acid during it
      ctx.strokeStyle = ink2; ctx.lineWidth = 1; ctx.strokeRect(cx + 8, 96, 8, 22);
      ctx.fillStyle = ink3;
      if (anim) { var left = 1 - Math.min(1, anim.t / anim.dur); ctx.fillRect(cx - 14, 132, Math.max(1, 18 * left), 3); }
      else if (shownV <= 0) ctx.fillRect(cx + 10, 102, 4, 14);
      ctx.strokeStyle = accent; ctx.lineWidth = 1;
      bubbles.forEach(function (b) { ctx.beginPath(); ctx.arc(b.x, b.y, 2, 0, Math.PI * 2); ctx.stroke(); });
      ctx.fillStyle = ink3; ctx.font = body(w, 11); ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.textAlign = 'left';
      ctx.fillText(t('HCl(aq), excess'), fx0 + fw + 8, 126);
      // delivery tube to the syringe
      var sx = fx0 + fw + 18, sy = 22;
      ctx.strokeStyle = ink2; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx, neckY - 8); ctx.lineTo(cx, sy + 13); ctx.lineTo(sx, sy + 13); ctx.stroke();
      var len = Math.round((W - sx - 14) * 0.68);
      drawSyringe(ctx, w, { x: sx, y: sy, h: 26, len: len, v: shownV, rodEnd: Math.min(W - 2, sx + 10 + len * 1.35) });
      ctx.fillStyle = ink; ctx.font = mono(w, 13, true); ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText((!anim && shownV > 0 && rows.length && rows[rows.length - 1].over ? '> 100' : fx(shownV, 1)) + ' cm³', sx + 4, sy + 36);
      ctx.fillStyle = ink3; ctx.font = body(w, 11);
      ctx.fillText(t('gas syringe'), sx + 4, sy + 54);
      if (anim) { ctx.fillStyle = ink2; ctx.fillText(t('reacting…'), sx + 4, sy + 70); }
    });
    var hosts = makeHosts(w), chart = null;
    var loop = w.loop(function (dt) {
      if (!anim) return;
      anim.t += dt;
      var f = Math.min(1, anim.t / anim.dur), e = 1 - Math.pow(1 - f, 2.2);
      shownV = Math.min(100, anim.to * e);
      if (Math.random() < 0.6) bubbles.push({ x: 38 + Math.random() * 18, y: 132, v: 30 + Math.random() * 30 });
      bubbles.forEach(function (b) { b.y -= b.v * dt; }); bubbles = bubbles.filter(function (b) { return b.y > 114 && f < 1; });
      cv.draw();
      if (f >= 1) { var done = anim; anim = null; bubbles = []; loop.stop(); finish(done.row); }
    });

    function run() {
      if (anim) return;
      if (rows.length >= MAXROWS) { setNote(t('That is plenty of runs. Delete one or start a new day.')); return; }
      var m = Math.max(0.010, step(sM.value + gauss() * 0.0025, 0.001));               // the ribbon is never cut exactly
      var mMg = cleanSel.value === 'oxide' ? m * (1 - rand(0.02, 0.05)) : m;             // part of the mass is MgO
      var n = mMg / AR, Tk = day.th + K0;
      var V = n * R * Tk / (day.p - pWater(day.th)) * 1000;                             // cm3; the hydrogen is saturated with water vapour
      if (addSel.value === 'drop') V -= rand(2, 5);                                    // escapes before the bung is in
      V -= rand(0.2, 0.5);                                                            // a little dissolves in the acid
      if (readSel.value === 'warm') V *= 1 + rand(0.015, 0.03);                        // the gas is still warm
      V = step(V + gauss() * 0.3, 0.5);                                               // plunger friction and reading
      var row = { m: m, V: V, over: V > 100, how: [cleanSel.value, addSel.value, readSel.value] };
      runBtn.disabled = true; setNote(t('The magnesium is reacting. Hydrogen pushes the plunger out.'));
      if (w.reducedMotion) { shownV = Math.min(100, V); finish(row); return; }
      shownV = 0; anim = { t: 0, dur: 2.6, to: Math.min(V, 103), row: row }; loop.start(true);
    }
    function finish(row) {
      rows.push(row); runBtn.disabled = false;
      setNote(row.over ? t('The plunger reached the end of the syringe and gas escaped. This run cannot be used: use less magnesium.')
        : t('Recorded m = {m} g, V = {V} cm³.', { m: fx(row.m, 3), V: fx(row.V, 1) }));
      update();
    }
    function good() { return rows.filter(function (r) { return !r.over; }); }
    function spec() {
      // ideal: cm3 of hydrogen per gram of Mg = (1 / Ar) mol × RT/P (dm3 per mol, P in kPa) × 1000
      var g = good(), k = fitOrigin(g.map(function (r) { return [r.m, r.V]; })), ideal = (R * (day.thRead + K0) / day.pRead) * 1000 / AR;
      var series = [{ type: 'scatter', data: g.map(function (r) { return [r.m, r.V]; }), name: t('Runs') }];
      if (k && g.length >= 2) series.push({ type: 'line', data: [[0, 0], [0.11, 0.11 * k]], color: '--ink-2', width: 1.5, name: t('Best-fit line') });
      series.push({ type: 'line', data: [[0, 0], [0.11, 0.11 * ideal]], color: '--line-strong', width: 1, name: t('Ideal gas') });
      return { label: t('Graph of the volume of hydrogen against the mass of magnesium for each run, with a best-fit line through the origin and the line expected for an ideal gas at room conditions.'),
        height: 250, x: { label: t('m(Mg) / g'), min: 0, max: 0.11, step: 0.02, format: function (v) { return v.toFixed(2); } },
        y: { label: t('V(H₂) / cm³'), min: 0, max: 120, step: 20 }, series: series };
    }
    function update() {
      cv.draw();
      var g = good(), idealVm = R * (day.thRead + K0) / day.pRead;
      setCond(fx(day.thRead, 1) + ' °C, ' + fx(day.pRead, 1) + ' kPa');
      var last = rows[rows.length - 1];
      setLast(last ? fx(last.m, 3) + ' g → ' + (last.over ? '> 100' : fx(last.V, 1)) + ' cm³' : '–');
      setIdeal(fx(idealVm, 1) + ' dm³ mol⁻¹');
      if (g.length) {
        var vms = g.map(function (r) { return r.V / 1000 / (r.m / AR); }), mv = mean(vms);
        setVm(t('{v} dm³ mol⁻¹ (at STP: {s} dm³ mol⁻¹, data booklet {b})', { v: fx(mv, 1), s: fx(mv * day.pRead / 100 * K0 / (day.thRead + K0), 1), b: fx(VM, 1) }));
      } else setVm(t('Run the reaction at least once.'));
      var k = fitOrigin(g.map(function (r) { return [r.m, r.V]; }));
      if (k && g.length >= 3) setGrad(t('gradient = {k} cm³ g⁻¹, so molar volume = {v} dm³ mol⁻¹', { k: sig(k, 4), v: fx(k * AR / 1000, 1) }));
      else setGrad(t('Do at least three runs with different masses.'));
      if (S1.chart) { var s = spec(); if (chart) chart.update(s); else chart = S1.chart.plot(hosts.chart, s); }
      var how = { clean: t('cleaned'), oxide: t('dull'), tip: t('tipped in'), drop: t('dropped in'), cool: t('cooled'), warm: t('warm') };
      hosts.table.innerHTML = tableHtml(['#', t('m(Mg) / g (±0.001)'), t('V(H₂) / cm³ (±0.5)'), t('n(H₂) / mol'), t('V<sub>m</sub> / dm³ mol⁻¹'), t('Method')],
        rows.map(function (r, i) {
          var n = r.m / AR;
          return [String(i + 1), fx(r.m, 3), r.over ? '> 100' : fx(r.V, 1), sci(n, 3), r.over ? '–' : fx(r.V / 1000 / n, 1), r.how.map(function (h) { return how[h]; }).join(', ')];
        }));
    }
    setNote(t('Choose a mass of magnesium and run the reaction. The acid is in excess, so all the magnesium reacts.'));
    update();
  });

  /* ======================================================================
     2. Volatile liquid in a heated gas syringe: M = mRT / PV
     ====================================================================== */
  S1.widgets.register('lab-molar-mass-gas.vapour', function (w) {
    var MAXROWS = 10;
    function liquids() {
      return {
        A: { name: t('propanone'), formula: 'C3H6O', bp: 56, rho: 0.79, a: 0.03 },
        B: { name: t('hexane'), formula: 'C6H14', bp: 69, rho: 0.66, a: 0.03 },
        C: { name: t('ethanol'), formula: 'C2H5OH', bp: 78, rho: 0.79, a: 0.06 }
      };
    }
    var LIQ = liquids();
    Object.keys(LIQ).forEach(function (k) { LIQ[k].M = chem.molarMass(LIQ[k].formula); });
    var day, data, cur = { V1: 5.0, V2: null, drops: false }, revealed = false, liq = 'A';
    function newDay() { var p = rand(99.5, 102.5); day = { p: p, pRead: step(p + gauss() * 0.04, 0.1) }; data = { A: [], B: [], C: [] }; cur.V2 = null; cur.drops = false; }
    newDay();

    w.select({ label: t('Liquid'), value: 'A', onChange: function (v) { liq = v; cur.V2 = null; cur.drops = false; revealed = false; revealBtn.textContent = t('Reveal the liquid'); update(); }, options: [
      { value: 'A', label: t('Unknown liquid A') }, { value: 'B', label: t('Unknown liquid B') }, { value: 'C', label: t('Unknown liquid C') }] });
    var sT = w.slider({ label: t('Heating-jacket temperature'), min: 50, max: 110, step: 1, value: 98, unit: '°C' });
    var sVol = w.slider({ label: t('Volume of liquid drawn up'), min: 0.05, max: 0.30, step: 0.01, value: 0.15, unit: 'cm3' });
    w.button(t('Inject and read'), inject, { primary: true });
    w.button(t('Delete last reading'), function () { data[liq].pop(); cur.V2 = null; setNote(t('Last reading deleted.')); update(); });
    var revealBtn = w.button(t('Reveal the liquid'), function () { revealed = !revealed; revealBtn.textContent = revealed ? t('Hide the liquid') : t('Reveal the liquid'); update(); });
    w.button(t('New day'), function () { newDay(); setNote(t('A new day: a new atmospheric pressure, and an empty results table.')); update(); });
    w.button(t('Copy data'), function () {
      var rows = data[liq], lines = [[t('m before / g'), t('m after / g'), t('V before / cm³'), t('V after / cm³'), t('θ / °C (±0.5)'), t('P / kPa (±0.1)')].join('\t')];
      rows.forEach(function (r) { lines.push([plain(r.m1, 3), plain(r.m2, 3), plain(r.V1, 1), r.over ? '>100' : plain(r.V2, 1), plain(r.th, 1), plain(day.pRead, 1)].join('\t')); });
      copyText(lines.join('\n'), function (ok) { setNote(ok ? t('Copied {n} readings as tab-separated text. Paste them into a spreadsheet.', { n: rows.length }) : t('Copying is blocked in this browser. Select the table with the mouse and copy it instead.')); });
    });

    var setP = w.readoutItem(t('Atmospheric pressure'));
    var setLast = w.readoutItem(t('Last injection'), { text: true });
    var setM = w.readoutItem(t('Molar mass, mean'), { text: true });
    var setGrad = w.readoutItem(t('Molar mass from the gradient'), { text: true });
    var setId = w.readoutItem(t('The liquid'), { text: true });
    var setNote = w.readoutItem(t('Note'), { text: true });

    var cv = w.canvas({ height: 130, label: t('A gas syringe inside a heating jacket. A hypodermic syringe injects the liquid through a self-sealing rubber cap on the nozzle. The vapour pushes the plunger out. The readings are in the readout.') });
    cv.draw(function (ctx, W) {
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), surf2 = w.color('--surface-2'), accent = w.color('--accent');
      var sx = 58, sy = 52, len = Math.round((W - sx - 16) * 0.66), jx = sx + 4, jw = len + 26;
      // heating jacket
      ctx.fillStyle = surf2; ctx.fillRect(jx, sy - 22, jw, 70);
      ctx.strokeStyle = ink3; ctx.lineWidth = 1; ctx.setLineDash([4, 3]); ctx.strokeRect(jx, sy - 22, jw, 70); ctx.setLineDash([]);
      var g = drawSyringe(ctx, w, { x: sx, y: sy, h: 26, len: len, v: cur.V2 != null ? Math.min(cur.V2, 104) : cur.V1, rodEnd: Math.min(W - 2, sx + 10 + len * 1.32) });
      if (cur.drops) { ctx.fillStyle = accent; [[10, 18], [22, 20], [16, 21]].forEach(function (d) { ctx.beginPath(); ctx.arc(g.bx + d[0], sy + d[1], 2.2, 0, Math.PI * 2); ctx.fill(); }); }
      // self-sealing cap and hypodermic syringe
      ctx.fillStyle = ink; ctx.fillRect(sx - 6, sy + 7, 7, 12);
      ctx.strokeStyle = ink2; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(sx - 6, sy + 13); ctx.lineTo(sx - 20, sy + 13); ctx.stroke();
      ctx.strokeStyle = ink; ctx.lineWidth = 1.2; ctx.strokeRect(2, sy + 7, 18, 12);
      ctx.fillStyle = ink2; ctx.fillRect(0, sy + 11, 4, 4);
      ctx.fillStyle = ink3; ctx.font = body(w, 11); ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText(t('heating jacket'), jx + 4, sy + 34);
      ctx.fillText(t('hypodermic'), 0, sy + 24);
      ctx.fillStyle = ink; ctx.font = mono(w, 12, true); ctx.textBaseline = 'top';
      ctx.fillText(fx(cur.th != null ? cur.th : sT.value, 1) + ' °C', jx + 4, 2);
      ctx.textAlign = 'right';
      ctx.fillText((cur.V2 != null ? (cur.V2 > 100 ? '> 100' : fx(cur.V2, 1)) : fx(cur.V1, 1)) + ' cm³', W - 2, 2);
    });
    var hosts = makeHosts(w), chart = null;

    function inject() {
      var rows = data[liq], L = LIQ[liq];
      if (rows.length >= MAXROWS) { setNote(t('That is plenty of readings. Delete one or start a new day.')); return; }
      var Tj = sT.value + gauss() * 0.4, th = step(Tj + gauss() * 0.2, 0.5);
      var V1 = step(rand(2, 8), 0.5);                                           // air already in the syringe, at the jacket temperature
      var m1 = step(rand(10.5, 13.5), 0.001);
      var mInj = sVol.value * L.rho * (1 + gauss() * 0.04), lost = rand(0, 0.003);   // some liquid evaporates from the needle tip
      var m2 = step(m1 - mInj - lost, 0.001);
      var f = Tj >= L.bp + 3 ? 1 : clamp(1 - (L.bp + 3 - Tj) / 30, 0.25, 1);      // not all the liquid vaporizes
      var z = 1 - L.a * Math.exp(-Math.max(0, Tj - L.bp) / 18);                   // attractions make the vapour take up less space than an ideal gas
      var dV = f * z * (mInj / L.M) * R * (Tj + K0) / day.p * 1000;
      var V2 = step(V1 + dV + gauss() * 0.3, 0.5);
      var row = { m1: m1, m2: m2, V1: V1, V2: V2, th: th, over: V2 > 100, drops: f < 1 };
      rows.push(row); cur.V1 = V1; cur.V2 = V2; cur.th = th; cur.drops = f < 1;
      if (row.over) setNote(t('The plunger reached the end of the syringe and vapour escaped. This reading cannot be used: inject less liquid.'));
      else if (f < 1) setNote(t('Drops of liquid are still visible in the syringe. Not all of the liquid has vaporized at this temperature.'));
      else setNote(t('Recorded. The vapour pushed the plunger from {a} cm³ to {b} cm³.', { a: fx(V1, 1), b: fx(V2, 1) }));
      update();
    }
    function Mof(r) { return (r.m1 - r.m2) * R * (r.th + K0) / (day.pRead * 1000 * (r.V2 - r.V1) * 1e-6); }
    function update() {
      cv.draw();
      var rows = data[liq], g = rows.filter(function (r) { return !r.over; }), L = LIQ[liq];
      setP(fx(day.pRead, 1) + ' kPa');
      var last = rows[rows.length - 1];
      setLast(!last ? t('Inject the liquid to take a reading.') : last.over ? t('Δm = {m} g, but the syringe overflowed.', { m: fx(last.m1 - last.m2, 3) })
        : t('Δm = {m} g, ΔV = {v} cm³, θ = {th} °C', { m: fx(last.m1 - last.m2, 3), v: fx(last.V2 - last.V1, 1), th: fx(last.th, 1) }));
      var Ms = g.map(Mof), mM = Ms.length ? mean(Ms) : null;
      setM(mM ? fx(mM, 1) + ' g mol⁻¹' : '–');
      var k = fitOrigin(g.map(function (r) { return [r.m1 - r.m2, r.V2 - r.V1]; })), Tm = g.length ? mean(g.map(function (r) { return r.th + K0; })) : 0, Mg = null;
      if (k && g.length >= 3) { Mg = R * Tm / (day.pRead * 1000 * k * 1e-6); setGrad(t('gradient = {k} cm³ g⁻¹, so M = {M} g mol⁻¹', { k: sig(k, 3), M: fx(Mg, 1) })); }
      else setGrad(t('Inject at least three different volumes at the same jacket temperature.'));
      if (revealed) {
        var best = Mg || mM;
        setId(t('{name}, {formula}, M = {M} g mol⁻¹, boiling point {bp} °C.', { name: L.name, formula: chem.formula(L.formula), M: fx(L.M, 2), bp: L.bp }) +
          (best ? ' ' + t('Your percentage error: {e} %.', { e: fx(Math.abs(best - L.M) / L.M * 100, 1) }) : ''));
      } else setId(t('Hidden. Work out M first, then reveal it.'));
      if (S1.chart) {
        var series = [{ type: 'scatter', data: g.map(function (r) { return [r.m1 - r.m2, r.V2 - r.V1]; }), name: t('Injections') }];
        if (k && g.length >= 2) series.push({ type: 'line', data: [[0, 0], [0.3, 0.3 * k]], color: '--ink-2', width: 1.5, name: t('Best-fit line') });
        var s = { label: t('Graph of the volume of vapour against the mass of liquid injected, with a best-fit line through the origin.'), height: 240,
          x: { label: t('Δm / g'), min: 0, max: 0.3, step: 0.05, format: function (v) { return v.toFixed(2); } }, y: { label: t('ΔV / cm³'), min: 0, max: 100, step: 20 }, series: series };
        if (chart) chart.update(s); else chart = S1.chart.plot(hosts.chart, s);
      }
      hosts.table.innerHTML = tableHtml(['#', t('m before / g'), t('m after / g'), t('Δm / g (±0.002)'), t('V before / cm³'), t('V after / cm³'), t('ΔV / cm³ (±1.0)'), t('θ / °C (±0.5)'), t('M / g mol⁻¹')],
        rows.map(function (r, i) {
          return [String(i + 1), fx(r.m1, 3), fx(r.m2, 3), fx(r.m1 - r.m2, 3), fx(r.V1, 1), r.over ? '> 100' : fx(r.V2, 1), r.over ? '–' : fx(r.V2 - r.V1, 1), fx(r.th, 1), r.over ? '–' : fx(Mof(r), 1)];
        }));
    }
    setNote(t('Choose a liquid, set the jacket temperature and inject. Keep the jacket temperature the same for every injection you want on one graph.'));
    update();
  });
})();
