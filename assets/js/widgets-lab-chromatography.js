/* ==========================================================================
   Widgets for Lab 2 — Paper and thin-layer chromatography (labs/lab-chromatography.html).
   lab-chromatography.plate    run a chromatogram of mixture M beside references A–D: choose the
                               stationary phase, the solvent mixture and the set-up, stop the run,
                               then read a ruler and record distances; identify the parts of M
   lab-chromatography.solvent  run the same mixture in six solvent mixtures and plot RF against
                               the percentage of the more polar solvent

   Model. Each substance has an invented polarity p (A most polar, D least polar; X is in M but is
   not one of the references). RF = 1 / (1 + exp(5(p − s) + h)), where s is the polarity of the
   mobile phase and h is larger for the more strongly attracting silica layer. So a more polar
   substance has a smaller RF, and a more polar mobile phase raises every RF. The solvent front
   rises as the square root of time, as it does in real paper and TLC. All values are model data
   and are labelled so on the page. Every user-visible string goes through t("…", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  var POL = { A: 0.95, B: 0.70, X: 0.50, C: 0.32, D: 0.10 };
  var PHASE = { paper: { s0: 0.2, s1: 0.7, h: 0, k: 6 }, tlc: { s0: 0, s1: 0.75, h: 0.6, k: 15 } };
  function rfModel(comp, phase, pct) {
    var P = PHASE[phase], s = P.s0 + P.s1 * pct / 100;
    return 1 / (1 + Math.exp(5 * (POL[comp] - s) + P.h));
  }
  var MIXTURE = ['B', 'X', 'D'];          // the parts of M, from lowest to highest spot

  /* ---------- small helpers ---------------------------------------------- */
  function gauss(sd) { var u = 1 - Math.random(), v = Math.random(); return sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function f1(x) { return chem.fixed(x, 1); }
  function f2(x) { return chem.fixed(x, 2); }
  function fonts(w) {
    var mono = w.color('--font-mono') || 'monospace', body = w.color('--font-body') || 'sans-serif';
    return {
      mono: function (px, bold) { return (bold ? '600 ' : '') + px + 'px ' + mono; },
      body: function (px, bold) { return (bold ? '700 ' : '') + px + 'px ' + body; }
    };
  }
  function feedback(parent) {
    var box = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
    parent.appendChild(box);
    return {
      set: function (tone, label, html) {
        box.className = 'feedback' + (tone ? ' feedback--' + tone : '');
        box.innerHTML = (label ? '<span class="feedback__label">' + label + '</span>' : '') + (html || '');
      },
      clear: function () { box.className = 'feedback'; box.innerHTML = ''; }
    };
  }
  /** Labelled select placed in any parent. options: [{value, label}]. */
  function picker(label, options, parent, onChange) {
    var id = S1.util.uid('ctl');
    var s = el('select', { class: 'select', id: id });
    function fill(list, value) {
      s.innerHTML = '';
      list.forEach(function (o) { s.appendChild(el('option', { value: o.value, text: o.label })); });
      if (value != null) s.value = value;
    }
    fill(options);
    if (onChange) s.addEventListener('change', function () { onChange(s.value); });
    var wrap = el('div', { class: 'control', style: 'flex:0 1 auto' }, [el('label', { class: 'control__label', for: id, text: label }), s]);
    parent.appendChild(wrap);
    return { el: wrap, select: s, fill: fill, get value() { return s.value; }, set value(v) { s.value = v; } };
  }
  /** Table with a caption; rows can be replaced as a whole. */
  function dataTable(parent, caption, cols) {
    var wrap = el('div', { class: 'table-scroll lab-table' });
    var table = el('table', { class: 'data' }), tbody = el('tbody'), tr = el('tr');
    cols.forEach(function (c) { tr.appendChild(el('th', { scope: 'col', class: c.num ? 'num' : null, html: c.label })); });
    table.appendChild(el('caption', { html: caption })); table.appendChild(el('thead', null, [tr])); table.appendChild(tbody);
    wrap.appendChild(table);
    var empty = el('p', { class: 'lab-empty', html: t('No readings yet.') });
    parent.appendChild(empty); parent.appendChild(wrap);
    function sync() { wrap.hidden = !tbody.children.length; empty.hidden = !!tbody.children.length; }
    sync();
    return {
      set: function (rows) {
        tbody.innerHTML = '';
        rows.forEach(function (cells) {
          var row = el('tr');
          cells.forEach(function (c, i) { row.appendChild(el(i === 0 ? 'th' : 'td', { scope: i === 0 ? 'row' : null, class: cols[i].num ? 'num' : null, html: c })); });
          tbody.appendChild(row);
        });
        sync();
      }
    };
  }
  function solventText(phase, pct) {
    return phase === 'paper'
      ? t('{a} % water, {b} % ethanol', { a: pct, b: 100 - pct })
      : t('{a} % ethyl acetate, {b} % hexane', { a: pct, b: 100 - pct });
  }

  /* =======================================================================
     1. Run a chromatogram and measure it
     ======================================================================= */
  S1.widgets.register('lab-chromatography.plate', function (w) {
    var PAPER_H = 12.0, BASE = 1.5;
    var LANES = [{ name: 'M', comps: MIXTURE }, { name: 'A', comps: ['A'] }, { name: 'B', comps: ['B'] }, { name: 'C', comps: ['C'] }, { name: 'D', comps: ['D'] }];

    var phase = w.select({ label: t('Stationary phase'), options: [{ value: 'paper', label: t('Chromatography paper') }, { value: 'tlc', label: t('TLC plate (silica)') }], value: 'paper', onChange: reset });
    var pct = w.slider({ label: t('More polar solvent in the mobile phase'), min: 0, max: 100, step: 10, value: 40, unit: '%', onInput: reset });
    var setup = w.select({ label: t('Set-up'), options: [
      { value: 'ok', label: t('As in the method') },
      { value: 'lid', label: t('No lid on the tank') },
      { value: 'ink', label: t('Baseline drawn in ink') },
      { value: 'deep', label: t('Solvent above the baseline') },
      { value: 'big', label: t('Large, wide spots') }], value: 'ok', onChange: reset });
    var runBtn = w.button(t('Run'), toggleRun, { primary: true });
    var stopBtn = w.button(t('Take out and mark the front'), finish);
    w.button(t('New paper'), reset);

    var setSolv = w.readoutItem(t('Mobile phase'), { text: true });
    var setTime = w.readoutItem(t('Time'));
    var setState = w.readoutItem(t('Status'), { text: true });

    var cv = w.canvas({ height: function (W) { return W < 420 ? 400 : 380; }, label: t('Chromatogram with five lanes: mixture M and reference substances A, B, C and D, a pencil baseline, the solvent front and a ruler whose zero is at the bottom edge') });

    // Measuring tools, below the picture
    var tools = el('div', { class: 'lab-tools' }); w.stage.appendChild(tools);
    var cursor = w.slider({ label: t('Ruler line (zero at the bottom edge)'), min: 0, max: PAPER_H, step: 0.1, value: 1.5, unit: 'cm', onInput: function () { cv.draw(); }, parent: tools });
    var FEAT = [{ value: 'base', label: t('Baseline') }, { value: 'front', label: t('Solvent front') },
      { value: 'M1', label: t('M, spot 1 (lowest)') }, { value: 'M2', label: t('M, spot 2') }, { value: 'M3', label: t('M, spot 3 (highest)') },
      { value: 'A', label: t('Spot A') }, { value: 'B', label: t('Spot B') }, { value: 'C', label: t('Spot C') }, { value: 'D', label: t('Spot D') }];
    var feat = picker(t('Reading is for'), FEAT, tools);
    var recBtn = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Record reading') });
    tools.appendChild(el('div', { class: 'control lab-tools__btn', style: 'flex:0 1 auto' }, [recBtn]));
    w.listen(recBtn, 'click', record);
    var note = el('p', { class: 'lab-note' }); w.stage.appendChild(note);
    var table = dataTable(w.stage, t('Raw data (ruler reads to ±0.05 cm)'), [
      { label: t('Feature') }, { label: t('Ruler reading / cm'), num: true }, { label: t('Distance from baseline / cm'), num: true }, { label: t('R<sub>F</sub>'), num: true }]);

    // Identification
    var idBox = el('div', { class: 'lab-id', hidden: true }); w.stage.appendChild(idBox);
    var idLabel = S1.util.uid('id');
    idBox.appendChild(el('p', { class: 'control__label', id: idLabel, html: t('Which reference substances are in mixture M?') }));
    var chips = el('div', { class: 'btn-row', role: 'group', 'aria-labelledby': idLabel }); idBox.appendChild(chips);
    var picked = {};
    ['A', 'B', 'C', 'D'].forEach(function (k) {
      var b = el('button', { class: 'btn btn--small lab-chip', type: 'button', 'aria-pressed': 'false', text: k });
      w.listen(b, 'click', function () { picked[k] = !picked[k]; b.setAttribute('aria-pressed', String(!!picked[k])); idFb.clear(); });
      chips.appendChild(b);
    });
    var checkBtn = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Check') });
    chips.appendChild(checkBtn); w.listen(checkBtn, 'click', checkId);
    var idFb = feedback(idBox);

    var state, front, tSim, rf, readings, tilt, loop, speed;
    loop = w.loop(function (dt) {
      tSim += Math.min(dt, 0.1) * speed;
      var P = PHASE[phase.value], k = P.k * (setup.value === 'lid' ? 0.6 : 1), pool = setup.value === 'deep' ? 2.0 : 0.8;
      front = Math.min(PAPER_H, pool + Math.sqrt(k * tSim));
      if (front >= PAPER_H) { front = PAPER_H; finish(); return; }
      paint();
    });
    function pool() { return setup.value === 'deep' ? 2.0 : 0.8; }
    function reset() {
      if (loop) loop.stop();
      state = 'ready'; front = pool(); tSim = 0; readings = {}; picked = {};
      Array.prototype.forEach.call(chips.querySelectorAll('.lab-chip'), function (b) { b.setAttribute('aria-pressed', 'false'); });
      var P = PHASE[phase.value], k = P.k * (setup.value === 'lid' ? 0.6 : 1);
      speed = Math.pow(PAPER_H - pool(), 2) / k / 16;           // whole paper in about 16 s
      var sd = setup.value === 'lid' ? 0.03 : 0.008;
      rf = {};
      ['A', 'B', 'C', 'D', 'X'].forEach(function (c) { rf[c] = clamp(rfModel(c, phase.value, pct.value) * (1 + gauss(0.02)) + gauss(sd), 0.005, 0.99); });
      tilt = setup.value === 'lid' ? rnd(-0.35, 0.35) : rnd(-0.05, 0.05);
      runBtn.textContent = t('Run'); idBox.hidden = true; idFb.clear(); note.innerHTML = '';
      setSolv(solventText(phase.value, pct.value));
      table.set([]);
      paint();
    }
    function toggleRun() {
      if (state === 'done') reset();
      if (state === 'running') { loop.stop(); state = 'paused'; runBtn.textContent = t('Run'); paint(); return; }
      state = 'running'; runBtn.textContent = t('Pause'); loop.start(true); paint();
    }
    function finish() {
      if (state === 'ready') return;
      loop.stop(); state = 'done'; runBtn.textContent = t('Run');
      idBox.hidden = setup.value === 'deep';
      paint();
    }
    function frontDist() { return front - BASE; }
    function spotPos(comp) {              // height of the spot centre above the bottom edge, cm
      var d = Math.max(0, frontDist());
      return BASE + rf[comp] * d;
    }
    function spotR(comp) { return (setup.value === 'big' ? 0.38 : 0.13) + 0.035 * (spotPos(comp) - BASE); }
    function trueOf(key) {
      if (key === 'base') return BASE;
      if (key === 'front') return front;
      if (key.charAt(0) === 'M') return spotPos(MIXTURE[Number(key.charAt(1)) - 1]);
      return spotPos(key);
    }
    function paint() {
      var mm = Math.floor(tSim), ss = Math.floor((tSim - mm) * 60);
      setTime(t('{m} min {s} s', { m: mm, s: ss < 10 ? '0' + ss : ss }));
      var msg;
      if (state === 'ready') msg = setup.value === 'deep' ? t('Ready. The solvent level is above the baseline.') : t('Ready. The spots are on the baseline, above the solvent. Press Run.');
      else if (state === 'running') msg = t('Running. Solvent front {d} cm above the baseline.', { d: f1(Math.max(0, frontDist())) });
      else if (state === 'paused') msg = t('Paused.');
      else if (setup.value === 'deep') msg = t('The spots dissolved into the solvent in the tank. There is nothing to measure. Start again with the solvent below the baseline.');
      else if (front >= PAPER_H - 0.01) msg = t('The solvent reached the top edge. You cannot tell how far it would have gone, so you cannot find R<sub>F</sub> values. Start again and stop earlier.');
      else msg = t('Finished. Move the ruler line to each feature and record the reading.');
      if (state === 'done' && front < PAPER_H - 0.01) {
        if (setup.value === 'lid') msg += ' ' + t('Without a lid the solvent evaporated from the paper: the front is uneven and the R<sub>F</sub> values will not repeat well.');
        if (setup.value === 'ink') msg += ' ' + t('The ink baseline dissolved and has run up the paper as a smear.');
        if (setup.value === 'big') msg += ' ' + t('The large spots have spread out, so their centres are hard to judge and neighbouring spots may overlap.');
      }
      setState(msg);
      cv.draw();
    }
    function record() {
      if (state !== 'done') { note.innerHTML = t('Finish the run first: take the paper out and mark the solvent front.'); return; }
      var key = feat.value, val = Math.round(cursor.value * 10) / 10;
      readings[key] = val;
      var off = Math.abs(val - trueOf(key)), tip = '';
      if (key === 'base' || key === 'front') { if (off > 0.15) tip = t('Check the position: the line is not on the {f}.', { f: key === 'base' ? t('baseline') : t('solvent front') }); }
      else if (off > Math.max(0.15, spotR(key.charAt(0) === 'M' ? MIXTURE[Number(key.charAt(1)) - 1] : key) * 0.6)) tip = t('Measure to the centre of the spot.');
      note.innerHTML = t('Recorded {f}: {v} cm.', { f: FEAT.filter(function (x) { return x.value === key; })[0].label, v: f1(val) }) + (tip ? ' ' + tip : '');
      var rows = [], b = readings.base, fr = readings.front;
      FEAT.forEach(function (x) {
        if (readings[x.value] == null) return;
        var r = readings[x.value], dist = b != null ? r - b : null;
        var rfv = '–';
        if (b != null && fr != null && x.value !== 'base' && x.value !== 'front' && fr - b > 0) rfv = f2(dist / (fr - b));
        rows.push([x.label, f1(r), x.value === 'base' ? '–' : dist == null ? '–' : f1(dist), rfv]);
      });
      table.set(rows);
    }
    function checkId() {
      if (front >= PAPER_H - 0.01) { idFb.set('partial', t('No valid result.'), '<p>' + t('The solvent ran off the top, so the run cannot be used.') + '</p>'); return; }
      var right = !!picked.B && !!picked.D && !picked.A && !picked.C;
      var html = '<p>' + t('Spot 1 of M is level with B and spot 3 is level with D: same R<sub>F</sub> in the same run, so M contains B and D. Spot 2 is not level with any reference, so M also contains a substance that is not A, B, C or D.') + '</p>';
      if (right) idFb.set('right', t('Correct.'), html);
      else if (picked.C) idFb.set('wrong', t('Not yet.'), '<p>' + t('Compare spot 2 of M with spot C carefully. Calculate both R<sub>F</sub> values: they differ by more than the uncertainty.') + '</p>');
      else idFb.set('wrong', t('Not yet.'), '<p>' + t('A substance is present if a spot in lane M has the same R<sub>F</sub> value as the reference spot.') + '</p>');
    }
    w.listen(cv.el, 'click', function (e) {
      var r = cv.el.getBoundingClientRect(), y = e.clientY - r.top;
      var g = geom(cv.width, cv.height), cm = clamp((g.bottom - y) / g.px, 0, PAPER_H);
      cursor.set(Math.round(cm * 10) / 10);
    });
    function geom(W, H) {
      var top = 18, bottom = H - 34, px = (bottom - top) / PAPER_H;
      var rulerW = 46, paperW = Math.min(300, W - rulerW - 30), x0 = Math.max(6, (W - paperW - rulerW - 14) / 2), x1 = x0 + paperW;
      return { top: top, bottom: bottom, px: px, x0: x0, x1: x1, paperW: paperW, rx: x1 + 10, rulerW: rulerW };
    }
    cv.draw(function (ctx, W, H) {
      if (!rf) return;
      var g = geom(W, H), f = fonts(w);
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), soft = w.color('--accent-soft'), surf = w.color('--surface'), s2 = w.color('--surface-2'), lineC = w.color('--line-strong');
      function Y(cm) { return g.bottom - cm * g.px; }
      // tank solvent
      ctx.fillStyle = soft; ctx.fillRect(g.x0 - 8, Y(pool()), g.paperW + 16, pool() * g.px + 6);
      // paper or plate
      ctx.fillStyle = phase.value === 'tlc' ? s2 : surf; ctx.fillRect(g.x0, g.top, g.paperW, g.bottom - g.top);
      // wet area (the front can be uneven without a lid)
      if (state !== 'ready') {
        ctx.fillStyle = soft; ctx.globalAlpha = 0.5;
        ctx.beginPath(); ctx.moveTo(g.x0, g.bottom); ctx.lineTo(g.x0, Y(front - tilt)); ctx.lineTo(g.x1, Y(Math.min(PAPER_H, front + tilt))); ctx.lineTo(g.x1, g.bottom); ctx.closePath(); ctx.fill();
        ctx.globalAlpha = 1;
      }
      ctx.strokeStyle = lineC; ctx.lineWidth = 1.5; ctx.strokeRect(g.x0 + 0.5, g.top + 0.5, g.paperW - 1, g.bottom - g.top - 1);
      // baseline
      ctx.strokeStyle = setup.value === 'ink' ? ink : ink3; ctx.lineWidth = setup.value === 'ink' ? 1.6 : 1;
      ctx.beginPath(); ctx.moveTo(g.x0, Y(BASE)); ctx.lineTo(g.x1, Y(BASE)); ctx.stroke();
      if (setup.value === 'ink' && state !== 'ready' && front > BASE) {      // ink dyes move up as a smear
        ctx.fillStyle = ink2; ctx.globalAlpha = 0.25; ctx.fillRect(g.x0, Y(BASE + 0.55 * (front - BASE)), g.paperW, 0.55 * (front - BASE) * g.px); ctx.globalAlpha = 1;
      }
      // solvent front
      if (state === 'done' && front < PAPER_H) {
        ctx.strokeStyle = accent; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(g.x0, Y(front - tilt)); ctx.lineTo(g.x1, Y(front + tilt)); ctx.stroke();
      }
      // spots
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      var dissolved = setup.value === 'deep' && state !== 'ready';
      LANES.forEach(function (ln, i) {
        var x = g.x0 + g.paperW * (i + 0.5) / LANES.length;
        ctx.fillStyle = ink2; ctx.font = f.mono(12, true); ctx.fillText(ln.name, x, Y(BASE) + 14);
        if (dissolved) return;
        ln.comps.forEach(function (c, j) {
          var pos = state === 'ready' ? BASE : spotPos(c), r = state === 'ready' ? (setup.value === 'big' ? 0.38 : 0.13) : spotR(c);
          var rx = Math.min(g.paperW / LANES.length / 2 - 3, Math.max(5, r * g.px * 1.3)), ry = Math.max(3.5, r * g.px);
          if (state === 'ready' && j > 0) return;
          ctx.fillStyle = ink; ctx.globalAlpha = state === 'ready' ? 0.9 : 0.78;
          ctx.beginPath(); ctx.ellipse(x, Y(pos), rx, ry, 0, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
          if (ln.name === 'M' && state === 'done') { ctx.fillStyle = ink; ctx.font = f.mono(11, true); ctx.textAlign = 'right'; ctx.fillText(String(j + 1), x - rx - 3, Y(pos)); ctx.textAlign = 'center'; }
        });
      });
      // ruler, zero at the bottom edge
      ctx.fillStyle = s2; ctx.fillRect(g.rx, g.top, g.rulerW, g.bottom - g.top);
      ctx.strokeStyle = lineC; ctx.lineWidth = 1; ctx.strokeRect(g.rx + 0.5, g.top + 0.5, g.rulerW - 1, g.bottom - g.top - 1);
      ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.font = f.mono(10); ctx.textAlign = 'left';
      for (var mm = 0; mm <= PAPER_H * 10; mm++) {
        var y = Y(mm / 10), big = mm % 10 === 0, mid = mm % 5 === 0;
        if (g.px < 22 && !big && !mid) continue;
        ctx.lineWidth = big ? 1.2 : 0.7; ctx.beginPath(); ctx.moveTo(g.rx, y); ctx.lineTo(g.rx + (big ? 14 : mid ? 10 : 6), y); ctx.stroke();
        if (big) ctx.fillText(String(mm / 10), g.rx + 18, y);
      }
      ctx.fillStyle = ink2; ctx.font = f.body(11); ctx.textAlign = 'center'; ctx.fillText('cm', g.rx + g.rulerW / 2, g.top - 9);
      // ruler line
      var ly = Y(cursor.value);
      ctx.strokeStyle = accent; ctx.lineWidth = 1.2; ctx.setLineDash([5, 3]);
      ctx.beginPath(); ctx.moveTo(g.x0 - 6, ly); ctx.lineTo(g.rx + g.rulerW, ly); ctx.stroke(); ctx.setLineDash([]);
      // key
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.font = f.body(11); ctx.fillStyle = ink2;
      ctx.fillText(t('Model data. Ruler line: dashed. Solvent front: solid line.'), 6, H - 6, W - 12);
    });
    reset();
  });

  /* =======================================================================
     2. Solvent series: RF against solvent composition
     ======================================================================= */
  S1.widgets.register('lab-chromatography.solvent', function (w) {
    var PCTS = [0, 20, 40, 60, 80, 100];
    var phase = w.select({ label: t('Stationary phase'), options: [{ value: 'paper', label: t('Chromatography paper') }, { value: 'tlc', label: t('TLC plate (silica)') }], value: 'paper', onChange: function () { data = null; fill(); } });
    w.button(t('Run all six'), run, { primary: true });
    var data = null;
    var cv = w.canvas({ height: 260, label: t('Graph of RF value against the percentage of the more polar solvent in the mobile phase, for the three spots of mixture M') });
    var table = dataTable(w.stage, t('Results (RF from measured distances)'), [
      { label: t('Polar solvent / %'), num: true }, { label: t('Front / cm'), num: true }, { label: t('Spot 1'), num: true }, { label: t('Spot 2'), num: true }, { label: t('Spot 3'), num: true }, { label: t('Smallest gap'), num: true }]);
    var ask = el('div', { class: 'lab-id', hidden: true }); w.stage.appendChild(ask);
    var best = picker(t('Best mobile phase for separating M'), PCTS.map(function (p) { return { value: String(p), label: p + ' %' }; }), ask);
    var chk = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Check') });
    ask.appendChild(el('div', { class: 'btn-row' }, [chk])); w.listen(chk, 'click', check);
    var fb = feedback(ask);
    var setSolv = w.readoutItem(t('Solvents'), { text: true });

    function fill() {
      setSolv(phase.value === 'paper' ? t('Ethanol (less polar) mixed with water (more polar).') : t('Hexane (non-polar) mixed with ethyl acetate (more polar).'));
      ask.hidden = !data; fb.clear();
      if (!data) { table.set([]); cv.draw(); return; }
      table.set(data.map(function (d) { return [String(d.pct), f1(d.front), f2(d.rf[0]), f2(d.rf[1]), f2(d.rf[2]), f2(Math.min(d.rf[1] - d.rf[0], d.rf[2] - d.rf[1]))]; }));
      cv.draw();
    }
    function run() {
      data = PCTS.map(function (p) {
        var front = Math.round(rnd(7.5, 9.5) * 10) / 10;
        var rf = MIXTURE.map(function (c) {
          var d = Math.round(clamp(rfModel(c, phase.value, p) * (1 + gauss(0.02)) + gauss(0.008), 0.003, 0.99) * front * 10) / 10;
          return d / front;
        }).sort(function (a, b) { return a - b; });
        return { pct: p, front: front, rf: rf };
      });
      fill();
    }
    function check() {
      var gaps = PCTS.map(function (p) { var r = MIXTURE.map(function (c) { return rfModel(c, phase.value, p); }); return Math.min(r[1] - r[0], r[2] - r[1]); });
      var top = Math.max.apply(null, gaps), i = PCTS.indexOf(Number(best.value));
      var ok = gaps[i] >= top - 0.03;
      fb.set(ok ? 'right' : 'wrong', ok ? t('Good choice.') : t('Not the best.'),
        '<p>' + (ok ? t('All three spots are well apart here: the smallest gap between neighbouring spots is about as large as it gets.')
          : Number(best.value) < 40 ? t('With so little of the polar solvent, the spots stay near the baseline and crowd together. Look for the column with the largest smallest gap.')
            : t('With so much of the polar solvent, the spots are carried near the front and crowd together. Look for the column with the largest smallest gap.')) + '</p>');
    }
    cv.draw(function (ctx, W, H) {
      var f = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), lineC = w.color('--line-strong'), accent = w.color('--accent');
      var L = 42, R = W - 54, T = 12, B = H - 40;
      function X(p) { return L + p / 100 * (R - L); }
      function Y(r) { return B - r * (B - T); }
      ctx.strokeStyle = lineC; ctx.lineWidth = 1; ctx.fillStyle = ink2; ctx.font = f.mono(10); ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      for (var r = 0; r <= 1.0001; r += 0.2) { ctx.beginPath(); ctx.moveTo(L - 4, Y(r)); ctx.lineTo(R, Y(r)); ctx.globalAlpha = r ? 0.35 : 1; ctx.stroke(); ctx.globalAlpha = 1; ctx.fillText(r.toFixed(1), L - 6, Y(r)); }
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      PCTS.forEach(function (p) { ctx.beginPath(); ctx.moveTo(X(p), B); ctx.lineTo(X(p), B + 4); ctx.stroke(); ctx.fillText(String(p), X(p), B + 6); });
      ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(L, T); ctx.lineTo(L, B); ctx.lineTo(R, B); ctx.stroke();
      ctx.font = f.body(11); ctx.fillStyle = ink2; ctx.fillText(t('more polar solvent in the mobile phase / %'), (L + R) / 2, B + 22, W - 10);
      ctx.save(); ctx.translate(11, (T + B) / 2); ctx.rotate(-Math.PI / 2); ctx.textBaseline = 'middle'; ctx.fillText(t('RF value'), 0, 0); ctx.restore();
      if (!data) {
        ctx.fillStyle = ink2; ctx.textBaseline = 'middle'; ctx.fillText(t('Press Run all six.'), (L + R) / 2, (T + B) / 2);
        return;
      }
      var cols = [accent, ink2, ink];
      [0, 1, 2].forEach(function (k) {
        ctx.strokeStyle = cols[k]; ctx.fillStyle = cols[k]; ctx.lineWidth = 1.6; ctx.setLineDash(k === 1 ? [5, 3] : k === 2 ? [2, 3] : []);
        ctx.beginPath(); data.forEach(function (d, i) { var x = X(d.pct), y = Y(d.rf[k]); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.setLineDash([]);
        data.forEach(function (d) {
          var x = X(d.pct), y = Y(d.rf[k]);
          ctx.beginPath();
          if (k === 0) ctx.arc(x, y, 4, 0, Math.PI * 2);
          else if (k === 1) ctx.rect(x - 4, y - 4, 8, 8);
          else { ctx.moveTo(x, y - 5); ctx.lineTo(x + 5, y + 4); ctx.lineTo(x - 5, y + 4); ctx.closePath(); }
          ctx.fill();
        });
        var last = data[data.length - 1];
        ctx.font = f.body(11, true); ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        var ly = Y(last.rf[k]) + (k === 2 ? -9 : k === 1 ? 1 : 10);
        ctx.fillText(t('spot {n}', { n: k + 1 }), R + 6, ly);
      });
    });
    fill();
  });
})();
