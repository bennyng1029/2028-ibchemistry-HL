/* ==========================================================================
   Widgets for Lab 7 — Investigating the gas laws (Structure 1.5.3–1.5.4).
   lab-gas-laws.boyle   sealed gas syringe + pressure sensor: P against V and P against 1/V
   lab-gas-laws.heat    water bath: P against temperature (fixed V) or V against temperature (fixed P),
                        extrapolated to find absolute zero, with worst-fit lines
   Each reading carries random scatter and the precision of real apparatus:
   gas syringe ±0.5 cm3, pressure sensor ±0.1 kPa, thermometer ±0.5 °C.
   Some systematic errors are built in on purpose (gas in the connecting tube, plunger
   friction, gas not yet at the bath temperature). The page's evaluation section explains them.
   The widget API (w) is documented in docs/AUTHORING.md.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el, clamp = S1.util.clamp;
  var K0 = chem.constants.zeroC;
  /* Translation hook: every user-visible string goes through t(). */
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  /* ---------- small helpers ---------- */
  function rand(a, b) { return a + Math.random() * (b - a); }
  function gauss() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function step(x, s) { return Math.round(x / s) * s; }
  function fx(x, dp) { return chem.fixed(x, dp); }                       // display (true minus sign)
  function plain(x, dp) { return Number(x).toFixed(dp); }                  // for copied text
  function sig(x, n) { return chem.toSig(x, n).replace('-', '−'); }
  function mono(w, px, bold) { return (bold ? '600 ' : '') + (px || 12) + 'px ' + (w.color('--font-mono') || 'monospace'); }
  function body(w, px) { return (px || 12) + 'px ' + (w.color('--font-body') || 'sans-serif'); }
  /* least-squares straight line y = m x + b */
  function fitLine(pts) {
    var n = pts.length; if (n < 2) return null;
    var sx = 0, sy = 0, sxx = 0, sxy = 0;
    pts.forEach(function (p) { sx += p[0]; sy += p[1]; sxx += p[0] * p[0]; sxy += p[0] * p[1]; });
    var d = n * sxx - sx * sx; if (Math.abs(d) < 1e-12) return null;
    var m = (n * sxy - sx * sy) / d;
    return { m: m, b: (sy - m * sx) / n };
  }
  function tableHtml(cols, rows) {
    var h = '<table class="data"><thead><tr>' + cols.map(function (c, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + c + '</th>'; }).join('') + '</tr></thead><tbody>';
    if (!rows.length) h += '<tr><td colspan="' + cols.length + '">' + t('No readings yet.') + '</td></tr>';
    rows.forEach(function (r) { h += '<tr>' + r.map(function (c, i) { return i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>'; });
    return h + '</tbody></table>';
  }
  /* Copy tab-separated text. Calls done(true | false). */
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
  /* Horizontal syringe: nozzle at x, barrel graduated 0 … vmax cm3, plunger at volume v. */
  function drawSyringe(ctx, w, o) {
    var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), soft = w.color('--accent-soft');
    var bx = o.x + 10, len = o.len, y = o.y, h = o.h, px = bx + clamp(o.v / o.vmax, 0, 1.04) * len;
    ctx.fillStyle = ink2; ctx.fillRect(o.x, y + h / 2 - 4, 10, 8);                         // nozzle
    if (o.capped) { ctx.fillStyle = ink; ctx.fillRect(o.x - 5, y + h / 2 - 6, 6, 12); }
    ctx.fillStyle = soft; ctx.fillRect(bx, y + 1, px - bx, h - 2);                         // gas
    ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.strokeRect(bx, y, len + 6, h);         // barrel
    ctx.fillStyle = ink2; ctx.fillRect(px, y + 2, 6, h - 4);                               // plunger head
    var rodEnd = Math.max(px + 20, o.rodEnd);
    ctx.fillRect(px + 6, y + h / 2 - 2.5, rodEnd - px - 6, 5);                             // rod
    ctx.fillRect(rodEnd - 4, y + h / 2 - 12, 4, 24);                                       // handle
    ctx.strokeStyle = ink3; ctx.lineWidth = 1; ctx.fillStyle = ink3; ctx.font = mono(w, 10); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    for (var v = 0; v <= o.vmax; v += 10) {
      var tx = Math.round(bx + v / o.vmax * len) + 0.5;
      ctx.beginPath(); ctx.moveTo(tx, y); ctx.lineTo(tx, y + (v % 20 ? 5 : 8)); ctx.stroke();
      if (v % 20 === 0) ctx.fillText(String(v), tx, y - 2);
    }
  }
  function display(ctx, w, x, y, wd, value, unit) {
    var ink = w.color('--ink'), ink3 = w.color('--ink-3'), surf2 = w.color('--surface-2');
    ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.strokeRect(x, y, wd, 44);
    ctx.fillStyle = surf2; ctx.fillRect(x + 5, y + 5, wd - 10, 22);
    ctx.fillStyle = ink; ctx.font = mono(w, 14, true); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(value, x + wd / 2, y + 16);
    ctx.fillStyle = ink3; ctx.font = mono(w, 10); ctx.fillText(unit, x + wd / 2, y + 36);
  }

  /* ======================================================================
     1. Pressure and volume at constant temperature
     ====================================================================== */
  S1.widgets.register('lab-gas-laws.boyle', function (w) {
    var VMIN = 25, VMAX = 100, VSEAL = 50, MAXROWS = 16;
    var run, rows = [], cur = { p: 0 };
    function newRun() {
      run = { room: step(rand(19.5, 23.5), 0.5), patm: step(rand(99.5, 102.5), 0.1), dead: rand(0.6, 1.6), lastV: VSEAL };
      run.k = run.patm * (VSEAL + run.dead);        // P (V + tube volume) is constant for the trapped air
      rows = [];
    }
    newRun();

    var sV = w.slider({ label: t('Syringe reading, V'), min: VMIN, max: VMAX, step: 1, value: VSEAL, unit: 'cm3', onInput: function () { settle(); update(); } });
    var waitSel = w.select({ label: t('After moving the plunger'), value: 'wait', onChange: function () { settle(); update(); }, options: [
      { value: 'wait', label: t('Wait 30 s, then read the sensor') },
      { value: 'now', label: t('Read the sensor at once') }] });
    var graphSel = w.select({ label: t('Graph'), value: 'inv', onChange: update, options: [
      { value: 'inv', label: t('P against 1/V') },
      { value: 'pv', label: t('P against V') }] });
    w.button(t('Record reading'), record, { primary: true });
    w.button(t('Delete last reading'), function () { rows.pop(); setNote(t('Last reading deleted.')); update(); });
    w.button(t('New run'), function () { newRun(); sV.set(VSEAL, true); settle(); setNote(t('New run: the syringe was refilled with air at {V} cm³ and sealed.', { V: VSEAL })); update(); });
    w.button(t('Copy data'), function () {
      var lines = [[t('V / cm³ (±0.5)'), t('P / kPa (±0.1)'), t('1/V / cm⁻³'), t('PV / kPa cm³')].join('\t')];
      rows.forEach(function (r) { lines.push([plain(r.V, 0), plain(r.p, 1), plain(1 / r.V, 5), plain(r.p * r.V, 0)].join('\t')); });
      copyText(lines.join('\n'), function (ok) { setNote(ok ? t('Copied {n} readings as tab-separated text. Paste them into a spreadsheet.', { n: rows.length }) : t('Copying is blocked in this browser. Select the table with the mouse and copy it instead.')); });
    });

    var setP = w.readoutItem(t('Pressure sensor'));
    var setRoom = w.readoutItem(t('Room temperature'));
    var setN = w.readoutItem(t('Readings'));
    var setFit = w.readoutItem(t('Best-fit line'), { text: true });
    var setNote = w.readoutItem(t('Note'), { text: true });

    var cv = w.canvas({ height: 112, label: t('A gas syringe sealed to a pressure sensor by a short tube. The plunger position shows the syringe reading. The sensor shows the pressure. The values are also in the readout.') });
    cv.draw(function (ctx, W) {
      var bw = Math.min(92, Math.round(W * 0.28));
      display(ctx, w, 2, 26, bw, fx(cur.p, 1), 'kPa');
      ctx.fillStyle = w.color('--ink-3'); ctx.font = body(w, 11); ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText(t('pressure sensor'), 2 + bw / 2, 76);
      var sx = bw + 20;
      ctx.strokeStyle = w.color('--ink-2'); ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(bw + 2, 48); ctx.lineTo(sx, 48); ctx.stroke();
      var len = Math.round((W - sx - 16) * 0.72);
      drawSyringe(ctx, w, { x: sx, y: 34, h: 28, len: len, v: sV.value, vmax: 100, rodEnd: W - 2 });
      ctx.fillStyle = w.color('--ink-3'); ctx.font = body(w, 11); ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText(t('gas syringe (cm³)'), sx + 10 + len / 2, 76);
    });
    var hosts = makeHosts(w), chart = null;

    function settle() {
      var V = sV.value, Vtrue = V + gauss() * 0.15;
      var warm = waitSel.value === 'now' ? clamp(0.12 * (run.lastV - V) / V, -0.03, 0.03) : 0;   // quick compression warms the gas
      cur.p = step(run.k / (Vtrue + run.dead) * (1 + warm) + gauss() * 0.05, 0.1);
    }
    function record() {
      if (rows.length >= MAXROWS) { setNote(t('That is plenty of readings. Delete one or start a new run.')); return; }
      rows.push({ V: sV.value, p: cur.p });
      run.lastV = sV.value;
      setNote(t('Recorded V = {V} cm³, P = {p} kPa.', { V: fx(sV.value, 0), p: fx(cur.p, 1) }));
      update();
    }
    function spec() {
      var pts = rows.map(function (r) { return [r.V, r.p]; }), inv = graphSel.value === 'inv';
      var series = [], ann = [];
      if (inv) {
        var ip = rows.map(function (r) { return [1 / r.V, r.p]; }), f = fitLine(ip);
        series.push({ type: 'scatter', data: ip, name: t('Readings') });
        if (f && rows.length >= 3) series.push({ type: 'line', data: [[0, f.b], [0.045, f.m * 0.045 + f.b]], color: '--ink-2', width: 1.5, name: t('Best-fit line') });
        return { label: t('Graph of pressure against 1/V for the readings in the table, with a straight line of best fit.'), height: 250,
          x: { label: t('1/V / cm⁻³'), min: 0, max: 0.045, step: 0.01, format: function (v) { return v.toFixed(2); } },
          y: { label: t('P / kPa'), min: 0, max: 200, step: 50 }, series: series, annotations: ann };
      }
      series.push({ type: 'scatter', data: pts, name: t('Readings') });
      if (rows.length >= 3) {
        var k = rows.reduce(function (s, r) { return s + r.p * r.V; }, 0) / rows.length, curve = [];
        for (var v = 22; v <= 100; v += 2) curve.push([v, k / v]);
        series.push({ type: 'line', data: curve, color: '--ink-2', width: 1.5, name: t('Curve P = k/V') });
      }
      return { label: t('Graph of pressure against volume for the readings in the table, with a curve through the points.'), height: 250,
        x: { label: t('V / cm³'), min: 0, max: 100, step: 20 }, y: { label: t('P / kPa'), min: 0, max: 200, step: 50 }, series: series };
    }
    function update() {
      cv.draw();
      setP(fx(cur.p, 1) + ' kPa');
      setRoom(fx(run.room, 1) + ' °C');
      setN(String(rows.length));
      if (S1.chart) { var s = spec(); if (chart) chart.update(s); else chart = S1.chart.plot(hosts.chart, s); }
      if (rows.length < 3) setFit(t('Record at least three readings over the whole range of the syringe.'));
      else if (graphSel.value === 'inv') {
        var f = fitLine(rows.map(function (r) { return [1 / r.V, r.p]; }));
        if (!f) setFit(t('Record at least three readings over the whole range of the syringe.'));   // no spread in 1/V yet
        else setFit(t('gradient = {m} kPa cm³, y-intercept = {b} kPa', { m: sig(f.m, 3), b: fx(f.b, 1) }));
      } else {
        var pv = rows.map(function (r) { return r.p * r.V; }), lo = Math.min.apply(null, pv), hi = Math.max.apply(null, pv);
        setFit(t('PV ranges from {lo} to {hi} kPa cm³', { lo: sig(lo, 3), hi: sig(hi, 3) }));
      }
      var sorted = rows.map(function (r, i) { return { r: r, i: i }; });
      hosts.table.innerHTML = tableHtml(['#', t('V / cm³ (±0.5)'), t('P / kPa (±0.1)'), t('1/V / cm⁻³'), t('PV / kPa cm³')],
        sorted.map(function (o) { var r = o.r; return [String(o.i + 1), fx(r.V, 0), fx(r.p, 1), fx(1 / r.V, 5), fx(r.p * r.V, 0)]; }));
    }
    settle();
    setNote(t('Air was sealed in the syringe at {V} cm³. Move the plunger, then record the sensor reading.', { V: VSEAL }));
    update();
  });

  /* ======================================================================
     2. Pressure or volume against temperature: find absolute zero
     ====================================================================== */
  S1.widgets.register('lab-gas-laws.heat', function (w) {
    var VF = 250, V0 = 70, MAXROWS = 14;
    var mode = w.options.mode === 'pres' ? 'pres' : 'vol';
    var run, data, cur = {};
    function newRun() {
      run = { room: rand(19.5, 23.5), patm: step(rand(99.5, 102.5), 0.1), tube: rand(0.8, 2), fric: rand(0.4, 0.9) };
      data = { vol: [], pres: [] };
      resetGas();
    }
    // The apparatus is sealed at room temperature, then left in the bath until it is steady before the first reading.
    function resetGas() { run.gasT = cur.bath != null ? cur.bath : run.room; run.lastV = V0 * (run.gasT + K0) / (run.room + K0); }
    newRun();

    w.select({ label: t('Set-up'), value: mode, onChange: function (v) { mode = v; resetGas(); setNote(modeNote()); update(); }, options: [
      { value: 'vol', label: t('Fixed volume (pressure sensor)') },
      { value: 'pres', label: t('Fixed pressure (gas syringe)') }] });
    var sT = w.slider({ label: t('Water-bath temperature'), min: 0, max: 90, step: 1, value: 20, unit: '°C', onInput: function () { bath(); update(); } });
    var waitSel = w.select({ label: t('Before each reading'), value: 'wait', onChange: update, options: [
      { value: 'wait', label: t('Stir and wait 3 minutes') },
      { value: 'now', label: t('Read at once') }] });
    var axisSel = w.select({ label: t('Temperature axis'), value: 'C', onChange: update, options: [
      { value: 'C', label: t('θ in °C, extrapolated') },
      { value: 'K', label: t('T in K') }] });
    w.button(t('Take reading'), record, { primary: true });
    w.button(t('Delete last reading'), function () { data[mode].pop(); setNote(t('Last reading deleted.')); update(); });
    w.button(t('New run'), function () { newRun(); setNote(t('New run: fresh apparatus, sealed with air at room temperature and left in the bath until steady.')); update(); });
    w.button(t('Copy data'), function () {
      var rows = data[mode], lines = [[t('θ / °C (±0.5)'), t('T / K'), mode === 'vol' ? t('P / kPa (±0.1)') : t('V / cm³ (±0.5)')].join('\t')];
      rows.forEach(function (r) { lines.push([plain(r.th, 1), plain(r.th + K0, 2), plain(r.y, 1)].join('\t')); });
      copyText(lines.join('\n'), function (ok) { setNote(ok ? t('Copied {n} readings as tab-separated text. Paste them into a spreadsheet.', { n: rows.length }) : t('Copying is blocked in this browser. Select the table with the mouse and copy it instead.')); });
    });

    var setTh = w.readoutItem(t('Thermometer'));
    var setY = w.readoutItem(t('Last reading'));
    var setN = w.readoutItem(t('Readings'));
    var setFit = w.readoutItem(t('Best-fit line'), { text: true });
    var setZero = w.readoutItem(t('Absolute zero estimate'), { text: true });
    var setNote = w.readoutItem(t('Note'), { text: true });
    function modeNote() {
      return mode === 'vol'
        ? t('A 250 cm³ flask of air is sealed and joined to a pressure sensor. The volume is fixed. Change the bath temperature and take readings.')
        : t('A gas syringe holding {V} cm³ of air at room temperature is sealed and held under the water. The plunger moves, so the pressure stays at atmospheric pressure.', { V: V0 });
    }

    var cv = w.canvas({ height: 150, label: t('A water bath with a thermometer. Fixed volume: a sealed flask in the bath joined by a tube to a pressure sensor. Fixed pressure: a sealed gas syringe under the water. The readings are in the readout.') });
    cv.draw(function (ctx, W) {
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), soft = w.color('--accent-soft'), accent = w.color('--accent');
      var bwid = mode === 'vol' ? Math.round(W * 0.6) : W - 4, bx = 2, by = 30, bh = 112;
      ctx.fillStyle = soft; ctx.fillRect(bx, by + 14, bwid, bh - 14);                   // water
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + bwid, by + bh); ctx.lineTo(bx + bwid, by); ctx.stroke();
      // thermometer
      var tx = mode === 'vol' ? bx + 14 : bx + bwid - 16;
      ctx.strokeStyle = ink2; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(tx, by - 22); ctx.lineTo(tx, by + bh - 18); ctx.stroke();
      ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(tx, by + bh - 14, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = ink; ctx.font = mono(w, 12, true); ctx.textAlign = mode === 'vol' ? 'left' : 'right'; ctx.textBaseline = 'top';
      ctx.fillText(fx(cur.thermo, 1) + ' °C', mode === 'vol' ? tx + 8 : tx - 8, 2);
      ctx.fillStyle = ink3; ctx.font = body(w, 11); ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
      ctx.textAlign = mode === 'vol' ? 'right' : 'left';
      ctx.fillText(t('water bath'), mode === 'vol' ? bx + bwid - 6 : bx + 6, by + bh - 4);
      if (mode === 'vol') {
        var fxc = bx + Math.round(bwid * 0.4), fyc = by + 70, r = 30;
        ctx.fillStyle = w.color('--surface'); ctx.beginPath(); ctx.arc(fxc, fyc, r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(fxc, fyc, r, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = w.color('--surface'); ctx.fillRect(fxc - 7, fyc - r - 34, 14, 36);
        ctx.strokeRect(fxc - 7, fyc - r - 34, 14, 36);
        ctx.fillStyle = ink2; ctx.fillRect(fxc - 9, fyc - r - 40, 18, 9);               // bung
        ctx.strokeStyle = ink2; ctx.lineWidth = 3; ctx.beginPath();
        var dw = Math.min(92, W - bwid - 14), dcx = W - dw / 2 - 2;
        ctx.moveTo(fxc, fyc - r - 40); ctx.lineTo(fxc, 22); ctx.lineTo(dcx, 22); ctx.lineTo(dcx, 40); ctx.stroke();
        display(ctx, w, W - dw - 2, 40, dw, cur.last != null ? fx(cur.last, 1) : '–', 'kPa');
        ctx.fillStyle = ink3; ctx.font = body(w, 11); ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        ctx.fillText(t('pressure sensor'), W - dw / 2 - 2, 90);
        ctx.fillText(t('air'), fxc, fyc - 6);
      } else {
        var len = Math.round((W - 40) * 0.62);
        var vShow = cur.last != null ? cur.last : V0;
        drawSyringe(ctx, w, { x: 14, y: by + 46, h: 26, len: len, v: vShow, vmax: 100, rodEnd: Math.min(W - 26, 24 + len * 1.3), capped: true });
        ctx.fillStyle = ink3; ctx.font = body(w, 11); ctx.textAlign = 'left'; ctx.textBaseline = 'top';
        ctx.fillText(t('sealed gas syringe (cm³)'), 18, by + 76);
      }
    });
    var hosts = makeHosts(w), chart = null;

    function bath() {
      cur.bath = sT.value + gauss() * 0.3;                         // true temperature of the bath
      cur.thermo = step(cur.bath + gauss() * 0.15, 0.5);          // thermometer, read to ±0.5 °C
    }
    function record() {
      var rows = data[mode];
      if (rows.length >= MAXROWS) { setNote(t('That is plenty of readings. Delete one or start a new run.')); return; }
      if (!rows.length) { run.gasT = cur.bath; run.lastV = V0 * (cur.bath + K0) / (run.room + K0); }   // the first reading follows a long wait in the bath
      var lag = waitSel.value === 'wait' ? 0.01 : 0.4;            // fraction of the temperature gap still left
      run.gasT = cur.bath + (run.gasT - cur.bath) * lag;
      var Tg = run.gasT + K0, Tr = run.room + K0, y;
      if (mode === 'vol') {
        // the gas in the connecting tube stays at room temperature
        y = run.patm * (VF + run.tube) / Tr / (VF / Tg + run.tube / Tr) + gauss() * 0.05;
        y = step(y, 0.1);
      } else {
        var Vt = V0 * Tg / Tr, dir = Vt > run.lastV + 0.05 ? 1 : (Vt < run.lastV - 0.05 ? -1 : 0);
        y = Vt - dir * run.fric * rand(0.6, 1) + gauss() * 0.2;    // the plunger sticks a little behind the gas
        run.lastV = Vt; y = step(y, 0.5);
      }
      rows.push({ th: cur.thermo, y: y });
      setNote(mode === 'vol' ? t('Recorded θ = {th} °C, P = {y} kPa.', { th: fx(cur.thermo, 1), y: fx(y, 1) }) : t('Recorded θ = {th} °C, V = {y} cm³.', { th: fx(cur.thermo, 1), y: fx(y, 1) }));
      update();
    }
    function analyse(rows) {
      var f = fitLine(rows.map(function (r) { return [r.th, r.y]; }));
      if (!f || rows.length < 3 || Math.abs(f.m) < 1e-9) return null;
      var s = rows.slice().sort(function (a, b) { return a.th - b.th; }), lo = s[0], hi = s[s.length - 1];
      if (hi.th - lo.th < 20) return { f: f, x0: -f.b / f.m, narrow: true };
      var dy = mode === 'vol' ? 0.1 : 0.5, dx = 0.5, ends = [];
      // steepest and shallowest lines through the ends of the error bars of the lowest and highest points
      [[lo.th + dx, lo.y - dy, hi.th - dx, hi.y + dy], [lo.th - dx, lo.y + dy, hi.th + dx, hi.y - dy]].forEach(function (q) {
        var m = (q[3] - q[1]) / (q[2] - q[0]); ends.push(q[0] - q[1] / m);
      });
      return { f: f, x0: -f.b / f.m, a: Math.min(ends[0], ends[1]), z: Math.max(ends[0], ends[1]) };
    }
    function spec(rows, A) {
      var K = axisSel.value === 'K', yl = mode === 'vol' ? t('P / kPa') : t('V / cm³'), ymax = mode === 'vol' ? 140 : 100;
      var off = K ? K0 : 0, series = [{ type: 'scatter', data: rows.map(function (r) { return [r.th + off, r.y]; }), name: t('Readings') }], ann = [];
      if (A) {
        var xa = K ? -K0 : Math.max(-300, Math.min(A.x0, 0)), xb = 100;
        series.push({ type: 'line', data: [[xa + off, A.f.m * xa + A.f.b], [xb + off, A.f.m * xb + A.f.b]], color: '--ink-2', width: 1.5, name: K ? t('Best-fit line') : t('Best-fit line, extrapolated') });
        if (!K && A.x0 >= -300 && A.x0 <= 0) ann.push({ x: A.x0, y: 0, text: t('≈ {x} °C', { x: fx(A.x0, 0) }), dy: -14 });
        if (!K && A.x0 < -300) ann.push({ x: -250, y: ymax * 0.1, text: t('meets the axis below −300 °C'), dy: 0 });
        if (K) ann.push({ x: 60, y: A.f.m * (-K0) + A.f.b, text: t('{v} {u} at 0 K', { v: fx(A.f.m * (-K0) + A.f.b, 1), u: mode === 'vol' ? 'kPa' : 'cm³' }), dy: -14 });
      }
      return { label: K ? t('Graph of the readings against temperature in kelvin, with the line of best fit.') : t('Graph of the readings against temperature in degrees Celsius. The line of best fit is extended back to where it meets the temperature axis.'),
        height: 260, x: K ? { label: t('T / K'), min: 0, max: 400, step: 100 } : { label: t('θ / °C'), min: -300, max: 100, step: 100 },
        y: { label: yl, min: 0, max: ymax, step: 20 }, series: series, annotations: ann };
    }
    function update() {
      var rows = data[mode], A = analyse(rows), unit = mode === 'vol' ? 'kPa' : 'cm³';
      cur.last = rows.length ? rows[rows.length - 1].y : null;
      cv.draw();
      setTh(fx(cur.thermo, 1) + ' °C');
      setY(cur.last != null ? (mode === 'vol' ? 'P = ' : 'V = ') + fx(cur.last, 1) + ' ' + unit : '–');
      setN(String(rows.length));
      if (S1.chart) { var s = spec(rows, A); if (chart) chart.update(s); else chart = S1.chart.plot(hosts.chart, s); }
      if (!A) { setFit(t('Take at least three readings, spread from 0 °C to 90 °C.')); setZero('–'); }
      else {
        setFit((mode === 'vol' ? 'P = ' : 'V = ') + sig(A.f.m, 3) + 'θ ' + (A.f.b < 0 ? '− ' : '+ ') + fx(Math.abs(A.f.b), 1) + ' (' + t('gradient in {u} °C⁻¹', { u: unit }) + ')');
        if (A.narrow) setZero(t('{x} °C. Spread your readings over a wider range to estimate its uncertainty.', { x: fx(A.x0, 0) }));
        else setZero(t('{x} °C (worst-fit lines: {a} °C to {z} °C)', { x: fx(A.x0, 0), a: fx(A.a, 0), z: fx(A.z, 0) }));
      }
      hosts.table.innerHTML = tableHtml(['#', t('θ / °C (±0.5)'), t('T / K'), mode === 'vol' ? t('P / kPa (±0.1)') : t('V / cm³ (±0.5)')],
        rows.map(function (r, i) { return [String(i + 1), fx(r.th, 1), fx(r.th + K0, 2), fx(r.y, 1)]; }));
    }
    bath();
    setNote(modeNote());
    update();
  });
})();
