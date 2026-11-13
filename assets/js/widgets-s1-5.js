/* ==========================================================================
   Widgets for topic 1.5 — Ideal gases.
   s1-5.sandbox   ideal gas sandbox (particles + piston + live graph)
   s1-5.gallery   gas-law graph gallery and shape-matching exercise
   s1-5.solver    PV = nRT solver with unit coach
   s1-5.real      real versus ideal gas (qualitative illustration)
   s1-5.molar     molar volume at STP, drawn to scale, with n <-> V calculator
   The widget API (w) is documented in docs/AUTHORING.md.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el, clamp = S1.util.clamp;
  var R = chem.constants.R, VM = chem.constants.Vm_STP, K0 = chem.constants.zeroC;
  var MINUS = '−', TIMES = '×';
  /* Translation hook: every user-visible string goes through t(). */
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  function monoFont(w, px) { return (px || 12) + 'px ' + (w.color('--font-mono') || 'monospace'); }
  function bodyFont(w, px, bold) { return (bold ? '700 ' : '') + (px || 13) + 'px ' + (w.color('--font-body') || 'sans-serif'); }
  function niceCeil(x) {
    var p = Math.pow(10, Math.floor(Math.log(x) / Math.LN10)), m = x / p;
    var steps = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
    for (var i = 0; i < steps.length; i++) if (m <= steps[i] + 1e-9) return steps[i] * p;
    return 10 * p;
  }
  function setDisabled(slider, off) {
    Array.prototype.forEach.call(slider.el.querySelectorAll('input'), function (i) { i.disabled = !!off; });
  }
  /* Number as HTML with up to `sf` significant figures, trailing zeros removed (for working lines). */
  function tidy(x, sf) {
    if (!isFinite(x)) return String(x);
    if (x === 0) return '0';
    sf = sf || 6;
    var r = chem.roundSig(x, sf), a = Math.abs(r);
    if (a >= 1e6 || a < 1e-3) {
      var e = Math.floor(Math.log(a) / Math.LN10 + 1e-12), m = Number((r / Math.pow(10, e)).toPrecision(sf));
      if (Math.abs(m) >= 10) { m /= 10; e += 1; }
      return String(m).replace('-', MINUS) + ' ' + TIMES + ' 10<sup>' + (e < 0 ? MINUS : '') + Math.abs(e) + '</sup>';
    }
    return String(Number(r.toPrecision(sf))).replace('-', MINUS);
  }

  /* ======================================================================
     1. Ideal gas sandbox
     ====================================================================== */
  S1.widgets.register('s1-5.sandbox', function (w) {
    var VMIN = 5, VMAX = 50, TMIN = 100, TMAX = 600, P_HOLD = 100;
    var MODES = {
      pv: { x: 'V', y: 'P', note: t('Temperature and amount are held constant. Move the volume slider.') },
      pt: { x: 'T', y: 'P', note: t('Volume and amount are held constant (a rigid container). Move the temperature slider.') },
      vt: { x: 'T', y: 'V', note: t('Pressure is held at {P} kPa and the amount at {n} mol. The piston is free to move. Move the temperature slider.', { P: '100', n: '1.00' }) }
    };
    var AX = {
      V: { label: 'V / dm³', max: VMAX, tick: 10 },
      T: { label: 'T / K', max: TMAX, tick: 100 },
      P: { label: 'P / kPa' }
    };
    var st = { mode: 'pv', T: 300, V: 25, n: 1, P: 0 };
    var trace = [], ghost = [], heldKey = '', sweep = null;

    var mode = w.select({
      label: t('Experiment'), value: 'pv', onChange: function (v) { st.mode = v; sweep = null; ghost = []; trace = []; heldKey = ''; update(); },
      options: [
        { value: 'pv', label: t('P against V (T and n constant)') },
        { value: 'pt', label: t('P against T (V and n constant)') },
        { value: 'vt', label: t('V against T (P and n constant)') }
      ]
    });
    var sT = w.slider({ label: t('Temperature, T'), min: TMIN, max: TMAX, step: 5, value: st.T, unit: 'K', onInput: function (v) { st.T = v; update(); } });
    var sV = w.slider({ label: t('Volume, V'), min: VMIN, max: VMAX, step: 0.5, value: st.V, unit: 'dm3', onInput: function (v) { st.V = v; update(); } });
    var sN = w.slider({ label: t('Amount of gas, n'), min: 0.5, max: 2, step: 0.1, value: st.n, unit: 'mol', onInput: function (v) { st.n = v; update(); } });
    var playBtn = w.button(t('Pause particles'), function () {
      if (loop.running) { loop.stop(); } else { loop.start(true); }
      syncPlay();
    });
    w.button(t('Run the experiment'), function () {
      var m = MODES[st.mode];
      sweep = m.x === 'V' ? { s: sV, key: 'V', from: VMIN, to: VMAX, t: 0 } : { s: sT, key: 'T', from: TMIN, to: TMAX, t: 0 };
      trace = [];
      loop.start(true); syncPlay();
    }, { primary: true });
    w.button(t('Clear graph'), function () { trace = []; ghost = []; update(); });

    var setP = w.readoutItem(t('Pressure, P'));
    var setV = w.readoutItem(t('Volume, V'));
    var setT = w.readoutItem(t('Temperature, T'));
    var setN = w.readoutItem(t('Amount, n'));
    var setK = w.readoutItem(t('PV ÷ nT'));
    var setNote = w.readoutItem(t('This experiment'), { text: true });

    /* particles: positions as fractions (x of the full barrel length, y of its height) */
    var parts = [];
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function syncParticles() {
      var want = Math.round(st.n * 40), frac = st.V / VMAX;
      while (parts.length < want) {
        var ang = rnd(0, Math.PI * 2), f = rnd(0.55, 1.45);
        parts.push({ x: rnd(0.02, 0.98) * frac, y: rnd(0.03, 0.97), dx: Math.cos(ang) * f, dy: Math.sin(ang) * f });
      }
      parts.length = want;
      parts.forEach(function (p) { if (p.x > frac) p.x = frac * rnd(0.9, 1); });
    }
    var geo = { bw: 300, bh: 120 };
    function step(dt) {
      var frac = st.V / VMAX, speed = 85 * Math.sqrt(st.T / 300);       // px per second; speed scales with the square root of T
      parts.forEach(function (p) {
        p.x += p.dx * speed * dt / geo.bw; p.y += p.dy * speed * dt / geo.bh;
        if (p.x < 0) { p.x = -p.x; p.dx = Math.abs(p.dx); }
        if (p.x > frac) { p.x = Math.max(0, 2 * frac - p.x); p.dx = -Math.abs(p.dx); }
        if (p.y < 0) { p.y = -p.y; p.dy = Math.abs(p.dy); }
        if (p.y > 1) { p.y = 2 - p.y; p.dy = -Math.abs(p.dy); }
        p.x = clamp(p.x, 0, frac); p.y = clamp(p.y, 0, 1);
      });
    }

    var opts = { height: 290, label: t('Left: a cylinder of gas particles closed by a piston. Right: a graph of the two variables in the chosen experiment, traced as you move the slider. All values are in the readout below.') };
    var cv = w.canvas(opts), busy = false;
    cv.draw(function (ctx, W, H) {
      var wide = W >= 620, want = wide ? 290 : 470;
      if (opts.height !== want && !busy) { busy = true; opts.height = want; cv.resize(); busy = false; return; }
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), line = w.color('--line'),
        strong = w.color('--line-strong'), accent = w.color('--accent'), surf2 = w.color('--surface-2');
      var cyl = wide ? { x: 8, y: 34, w: Math.round(W * 0.44), h: 150 } : { x: 8, y: 30, w: W - 16, h: 110 };
      var gr = wide ? { x: cyl.x + cyl.w + 70, y: 22, w: W - (cyl.x + cyl.w + 70) - 14, h: H - 22 - 46 } : { x: 56, y: 205, w: W - 56 - 12, h: H - 205 - 44 };

      /* ---- cylinder ---- */
      var rod = 26, bw = cyl.w - rod - 10, bh = cyl.h, x0 = cyl.x + 2, y0 = cyl.y;
      geo.bw = bw; geo.bh = bh;
      var px = x0 + st.V / VMAX * bw;
      ctx.fillStyle = surf2; ctx.fillRect(x0, y0, px - x0, bh);
      ctx.strokeStyle = ink; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x0 + bw + 8, y0); ctx.lineTo(x0, y0); ctx.lineTo(x0, y0 + bh); ctx.lineTo(x0 + bw + 8, y0 + bh); ctx.stroke();
      ctx.fillStyle = ink2; ctx.fillRect(px, y0 + 1, 7, bh - 2);                         // piston
      ctx.fillRect(px + 7, y0 + bh / 2 - 3, rod, 6);                                      // rod
      ctx.fillStyle = accent;
      parts.forEach(function (p) { ctx.beginPath(); ctx.arc(x0 + 3 + p.x * (bw - 6) , y0 + 3 + p.y * (bh - 6), 2.6, 0, Math.PI * 2); ctx.fill(); });
      ctx.font = monoFont(w, 11); ctx.fillStyle = ink3; ctx.strokeStyle = strong; ctx.lineWidth = 1; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (var v = 0; v <= VMAX; v += 10) {
        var tx = x0 + v / VMAX * bw;
        ctx.beginPath(); ctx.moveTo(tx, y0 + bh + 2); ctx.lineTo(tx, y0 + bh + 7); ctx.stroke();
        ctx.fillText(String(v), tx, y0 + bh + 9);
      }
      ctx.textAlign = 'left'; ctx.fillText(t('volume / {unit}', { unit: 'dm³' }), x0, y0 + bh + 24);
      ctx.fillStyle = ink; ctx.font = bodyFont(w, 12, true); ctx.textBaseline = 'alphabetic';
      ctx.fillText(t('Model of the gas'), x0, y0 - 12);
      ctx.font = monoFont(w, 11); ctx.fillStyle = ink3; ctx.textAlign = 'right';
      ctx.fillText(t('piston'), Math.min(px + 46, x0 + bw + rod), y0 - 5);

      /* ---- graph ---- */
      var m = MODES[st.mode], ax = AX[m.x], xmax = ax.max, ymax, ylab, ytick;
      if (m.y === 'V') { ymax = VMAX; ylab = AX.V.label; }
      else { ymax = niceCeil(m.x === 'V' ? st.n * R * st.T / VMIN : st.n * R * TMAX / st.V); ylab = AX.P.label; }
      ytick = ymax / 5;
      function X(x) { return gr.x + x / xmax * gr.w; }
      function Y(y) { return gr.y + gr.h - y / ymax * gr.h; }
      ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.font = monoFont(w, 11); ctx.fillStyle = ink3;
      var i, gx, gy;
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (i = 0; i <= xmax + 1e-9; i += ax.tick) {
        gx = X(i); ctx.beginPath(); ctx.moveTo(gx, gr.y); ctx.lineTo(gx, gr.y + gr.h); ctx.stroke();
        ctx.fillText(String(i), gx, gr.y + gr.h + 5);
      }
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      for (i = 0; i <= 5; i++) {
        gy = Y(i * ytick); ctx.beginPath(); ctx.moveTo(gr.x, gy); ctx.lineTo(gr.x + gr.w, gy); ctx.stroke();
        ctx.fillText(String(Math.round(i * ytick * 10) / 10), gr.x - 5, gy);
      }
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(gr.x, gr.y); ctx.lineTo(gr.x, gr.y + gr.h); ctx.lineTo(gr.x + gr.w, gr.y + gr.h); ctx.stroke();
      ctx.fillStyle = ink; ctx.font = bodyFont(w, 12, true); ctx.textAlign = 'right'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(ax.label, gr.x + gr.w, gr.y + gr.h + 34);
      ctx.textAlign = 'left'; ctx.fillText(ylab, gr.x - 44, gr.y - 8);

      function poly(pts, colour, width, dots) {
        if (!pts.length) return;
        var s = pts.slice().sort(function (a, b) { return a.x - b.x; });
        ctx.strokeStyle = colour; ctx.lineWidth = width; ctx.lineJoin = 'round';
        ctx.beginPath();
        s.forEach(function (p, k) { if (k) ctx.lineTo(X(p.x), Y(Math.min(p.y, ymax))); else ctx.moveTo(X(p.x), Y(Math.min(p.y, ymax))); });
        ctx.stroke();
        if (dots) { ctx.fillStyle = colour; s.forEach(function (p) { ctx.beginPath(); ctx.arc(X(p.x), Y(Math.min(p.y, ymax)), 1.8, 0, Math.PI * 2); ctx.fill(); }); }
        return s;
      }
      poly(ghost, strong, 2, false);
      var sorted = poly(trace, accent, 2.5, true);
      if (m.x === 'T' && sorted && sorted.length > 1) {          // straight line: extrapolate back to 0 K
        ctx.setLineDash([5, 4]); ctx.strokeStyle = accent; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(sorted[0].x), Y(sorted[0].y)); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = ink3; ctx.font = monoFont(w, 11); ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
        ctx.fillText(t('extrapolated to {T} K', { T: 0 }), X(0) + 6, Y(0) - 6);
      }
      var cx = X(st[m.x]), cy = Y(Math.min(st[m.y], ymax));
      ctx.setLineDash([2, 3]); ctx.strokeStyle = ink2; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx, gr.y + gr.h); ctx.lineTo(cx, cy); ctx.lineTo(gr.x, cy); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.stroke();
    });

    var loop = w.loop(function (dt) {
      if (sweep) {
        sweep.t += dt / 3.5;
        var f = Math.min(sweep.t, 1), val = sweep.from + (sweep.to - sweep.from) * f;
        var stp = sweep.key === 'V' ? 0.5 : 5; val = Math.round(val / stp) * stp;
        sweep.s.set(val, true); st[sweep.key] = val;
        if (f >= 1) sweep = null;
        update(true);
      }
      step(dt); cv.draw();
    });
    function syncPlay() { playBtn.textContent = loop.running ? t('Pause particles') : t('Play particles'); }

    function update(fromLoop) {
      var m = MODES[st.mode];
      if (st.mode === 'vt') {
        st.n = 1; sN.set(1, true); st.P = P_HOLD;
        st.V = st.n * R * st.T / st.P; sV.set(Math.round(st.V * 2) / 2, true);
      } else {
        st.P = st.n * R * st.T / st.V;
      }
      setDisabled(sV, st.mode === 'vt'); setDisabled(sN, st.mode === 'vt');
      var key = st.mode + '|' + (m.x === 'V' ? st.T : st.V) + '|' + st.n;
      if (key !== heldKey) { if (heldKey && trace.length > 1) ghost = trace; trace = []; heldKey = key; }
      var xv = st[m.x];
      if (!trace.some(function (p) { return Math.abs(p.x - xv) < 1e-9; })) trace.push({ x: xv, y: st[m.y] });
      syncParticles();
      setP(chem.fmt(st.P, 3) + ' kPa');
      setV(chem.fmt(st.V, 3) + ' dm<sup>3</sup>');
      setT(String(st.T) + ' K (' + chem.fixed(st.T - K0, 0) + ' °C)');
      setN(chem.fixed(st.n, 2) + ' mol');
      setK(chem.fixed(st.P * st.V / (st.n * st.T), 2) + ' J K<sup>' + MINUS + '1</sup> mol<sup>' + MINUS + '1</sup> = <i>R</i>');
      setNote(m.note + (ghost.length ? ' ' + t('The grey line is your previous run.') : ''));
      if (!fromLoop) cv.draw();
    }
    update();
    loop.start(); syncPlay();
    w.el.addEventListener('click', function () { window.setTimeout(syncPlay, 0); });
  });

  /* ======================================================================
     2. Graph gallery + matching
     ====================================================================== */
  var SHAPES = {
    inv: { name: 'A', words: t('a curve that falls steeply at first and then levels off, never touching either axis') },
    origin: { name: 'B', words: t('a straight line through the origin') },
    offset: { name: 'C', words: t('a straight line that does not pass through the origin; extended back, it meets the horizontal axis at a negative value') },
    flat: { name: 'D', words: t('a horizontal straight line') }
  };
  var GRAPHS = [
    { id: 'pv', y: 'P', x: 'V', held: t('T and n constant'), shape: 'inv', why: t('P is inversely proportional to V. Doubling V halves P.') },
    { id: 'pinv', y: 'P', x: '1/V', held: t('T and n constant'), shape: 'origin', why: t('P is directly proportional to 1/V, so this plot turns the curve into a straight line.') },
    { id: 'vtk', y: 'V', x: 'T / K', held: t('P and n constant'), shape: 'origin', why: t('V is directly proportional to T in kelvin. Zero volume would be reached at 0 K.') },
    { id: 'vtc', y: 'V', x: 'T / °C', held: t('P and n constant'), shape: 'offset', why: t('Still a straight line, but 0 °C is not zero on the kelvin scale. Extended back, the line reaches V = 0 at {T} °C.', { T: '−273.15' }) },
    { id: 'ptk', y: 'P', x: 'T / K', held: t('V and n constant'), shape: 'origin', why: t('P is directly proportional to T in kelvin.') },
    { id: 'pvp', y: 'PV', x: 'P', held: t('T and n constant'), shape: 'flat', why: t('PV = nRT. With n and T fixed, PV stays the same whatever the pressure.') }
  ];
  function sketch(shape, g) {
    var W = 180, H = 132, L = 30, B = 104, T = 14, Rr = 168;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + (g ? t('Sketch graph of {y} against {x}: {shape}', { y: g.y, x: g.x, shape: SHAPES[shape].words }) : t('Sketch graph: {shape}', { shape: SHAPES[shape].words })) + '" class="g5-svg">';
    var yAxisX = shape === 'offset' ? 84 : L;
    s += '<path d="M' + L + ' ' + B + ' H' + Rr + '" fill="none" stroke="var(--ink)" stroke-width="1.5"/>';
    s += '<path d="M' + yAxisX + ' ' + T + ' V' + B + '" fill="none" stroke="var(--ink)" stroke-width="1.5"/>';
    if (shape === 'inv') {
      var d = '', k;
      for (k = 0; k <= 30; k++) { var xv = 0.13 + k / 30 * 0.87, yv = 0.115 / xv; d += (k ? ' L' : 'M') + (L + xv * (Rr - L)).toFixed(1) + ' ' + (B - yv * (B - T)).toFixed(1); }
      s += '<path d="' + d + '" fill="none" stroke="var(--accent)" stroke-width="2.5"/>';
    } else if (shape === 'origin') {
      s += '<path d="M' + L + ' ' + B + ' L' + (Rr - 8) + ' ' + (T + 10) + '" fill="none" stroke="var(--accent)" stroke-width="2.5"/>';
    } else if (shape === 'offset') {
      var yi = B - 38;                                   // intercept on the y-axis
      var slope = (B - yi) / (yAxisX - L);               // line meets the x-axis at x = L
      s += '<path d="M' + L + ' ' + B + ' L' + yAxisX + ' ' + yi + '" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>';
      s += '<path d="M' + yAxisX + ' ' + yi + ' L' + (Rr - 8) + ' ' + (yi - slope * (Rr - 8 - yAxisX)).toFixed(1) + '" fill="none" stroke="var(--accent)" stroke-width="2.5"/>';
    } else {
      s += '<path d="M' + L + ' ' + (T + 34) + ' H' + (Rr - 8) + '" fill="none" stroke="var(--accent)" stroke-width="2.5"/>';
    }
    var tx = 'font-family="var(--font-mono)" font-size="11" fill="var(--ink-2)"';
    s += '<text x="' + (yAxisX - 5) + '" y="' + (B + 13) + '" text-anchor="end" ' + tx + '>0</text>';
    if (g) {
      s += '<text x="' + (yAxisX + 6) + '" y="' + (T + 8) + '" ' + tx + ' fill="var(--ink)" font-weight="600">' + g.y + '</text>';
      s += '<text x="' + Rr + '" y="' + (B + 24) + '" text-anchor="end" ' + tx + ' fill="var(--ink)" font-weight="600">' + g.x + '</text>';
      if (shape === 'offset') s += '<text x="' + (L - 4) + '" y="' + (B + 13) + '" ' + tx + '>' + MINUS + '273.15</text>';
    } else if (shape === 'offset') {
      s += '<text x="' + (L - 2) + '" y="' + (B + 13) + '" ' + tx + '>' + t('negative') + '</text>';
    }
    return s + '</svg>';
  }

  S1.widgets.register('s1-5.gallery', function (w) {
    var setResult = w.readoutItem(t('Matching exercise'), { text: true });
    var gallery = el('div', { class: 'g5-grid' });
    GRAPHS.forEach(function (g) {
      gallery.appendChild(el('div', { class: 'g5-card', html: sketch(g.shape, g) +
        '<p class="g5-card__t"><b>' + t('{y} against {x}', { y: g.y, x: g.x }) + '</b><span class="muted"> (' + g.held + ')</span></p><p class="g5-card__w">' + g.why + '</p>' }));
    });
    var test = el('div', { class: 'g5-test', hidden: '' });
    var shapesRow = el('div', { class: 'g5-grid g5-grid--shapes' });
    ['inv', 'origin', 'offset', 'flat'].forEach(function (k) {
      shapesRow.appendChild(el('div', { class: 'g5-card', html: sketch(k, null) + '<p class="g5-card__t"><b>' + t('Shape {letter}', { letter: SHAPES[k].name }) + '</b></p>' }));
    });
    test.appendChild(el('p', { class: 'g5-lead', text: t('Each relationship below is for a fixed mass of an ideal gas. Choose the shape of its graph. A shape can be used more than once.') }));
    test.appendChild(shapesRow);
    var rows = el('ol', { class: 'g5-rows' }), selects = [];
    S1.util.shuffle(GRAPHS.slice()).forEach(function (g) {
      var id = S1.util.uid('g5'), sel = el('select', { class: 'select', id: id });
      sel.appendChild(el('option', { value: '', text: t('Choose a shape') }));
      ['inv', 'origin', 'offset', 'flat'].forEach(function (k) { sel.appendChild(el('option', { value: k, text: t('Shape {letter}', { letter: SHAPES[k].name }) })); });
      var mark = el('span', { class: 'g5-mark' });
      rows.appendChild(el('li', { 'data-graph': g.id, 'data-shape': g.shape }, [
        el('label', { for: id, html: '<b>' + t('{y} against {x}', { y: g.y, x: g.x }) + '</b> <span class="muted">(' + g.held + ')</span>' }), sel, mark]));
      selects.push({ g: g, sel: sel, mark: mark });
    });
    test.appendChild(rows);
    var actions = el('div', { class: 'btn-row' });
    var check = el('button', { class: 'btn btn--primary btn--small', type: 'button', text: t('Check my matches') });
    actions.appendChild(check); test.appendChild(actions);
    check.addEventListener('click', function () {
      var right = 0, blank = 0;
      selects.forEach(function (r) {
        if (!r.sel.value) { blank++; r.mark.textContent = t('Not answered yet.'); r.mark.className = 'g5-mark'; return; }
        var ok = r.sel.value === r.g.shape; if (ok) right++;
        r.mark.className = 'g5-mark ' + (ok ? 'g5-mark--ok' : 'g5-mark--no');
        r.mark.textContent = ok ? t('Correct. {why}', { why: r.g.why }) : t('Not this shape. Ask: is it direct or inverse proportion, and is the horizontal axis zero at the origin?');
      });
      var v = { right: right, total: selects.length, blank: blank };
      setResult(right === selects.length ? t('{right} of {total} correct. All matched. Open the labelled gallery to see them together.', v)
        : blank ? t('{right} of {total} correct ({blank} not answered). Change your choices and check again.', v)
        : t('{right} of {total} correct. Change your choices and check again.', v));
    });
    w.stage.appendChild(gallery); w.stage.appendChild(test);
    var showing = 'gallery';
    var toggle = w.button(t('Test yourself: match the shapes'), function () {
      showing = showing === 'gallery' ? 'test' : 'gallery';
      gallery.hidden = showing !== 'gallery'; test.hidden = showing !== 'test';
      toggle.textContent = showing === 'gallery' ? t('Test yourself: match the shapes') : t('Show the labelled gallery');
      setResult(showing === 'test' ? t('Choose a shape for each relationship, then press Check.') : t('Study the six graphs, then test yourself.'));
    }, { primary: true });
    setResult(t('Study the six graphs, then test yourself.'));
  });

  /* ======================================================================
     3. PV = nRT solver with unit coach
     ====================================================================== */
  S1.widgets.register('s1-5.solver', function (w) {
    var U = function (s) { return chem.unit(s); };
    var unknown = w.select({
      label: 'Find', value: 'n', onChange: sync,
      options: [
        { value: 'P', label: 'pressure, P' }, { value: 'V', label: 'volume, V' }, { value: 'T', label: 'temperature, T' },
        { value: 'n', label: 'amount, n' }, { value: 'm', label: 'mass, m (formula known)' }, { value: 'M', label: 'molar mass, M (mass known)' }
      ]
    });
    var amountAs = w.select({ label: 'Amount of gas given as', value: 'n', onChange: sync, options: [{ value: 'n', label: 'amount in mol' }, { value: 'm', label: 'mass in g and a formula' }] });
    var unitSet = w.select({ label: 'Work in', value: 'k', onChange: sync, options: [{ value: 'k', label: 'kPa and dm³' }, { value: 'p', label: 'Pa and m³' }] });

    var form = el('div', { class: 's5-form' }), F = {};
    function field(key, label, value, units) {
      var id = S1.util.uid('s5');
      var inp = el('input', { class: 'input', id: id, type: 'text', value: value, inputmode: key === 'formula' ? 'text' : 'decimal', autocomplete: 'off', spellcheck: 'false' });
      var kids = [el('label', { class: 'field-label', for: id, html: label }), inp], sel = null;
      if (units && units.length > 1) {
        sel = el('select', { class: 'select', 'aria-label': 'Unit for ' + label.replace(/<[^>]+>/g, '') });
        units.forEach(function (u) { sel.appendChild(el('option', { value: u, text: u.replace('3', '³') })); });
        sel.addEventListener('change', sync); kids.push(sel);
      } else if (units) kids.push(el('span', { class: 'control__unit', html: U(units[0]) }));
      var row = el('div', { class: 's5-field' }, kids);
      inp.addEventListener('input', sync);
      form.appendChild(row);
      F[key] = { row: row, inp: inp, sel: sel };
    }
    field('P', 'Pressure, <i>P</i>', '101', ['kPa', 'Pa']);
    field('V', 'Volume, <i>V</i>', '250', ['cm3', 'dm3', 'm3']);
    field('T', 'Temperature, <i>T</i>', '25.0', ['°C', 'K']);
    field('n', 'Amount, <i>n</i>', '0.0100', ['mol']);
    field('m', 'Mass, <i>m</i>', '0.450', ['g']);
    field('formula', 'Formula of the gas', 'CO2', null);
    var out = el('div', { class: 's5-out', 'aria-live': 'polite' });
    w.stage.appendChild(form); w.stage.appendChild(out);
    var setAns = w.readoutItem('Answer');
    var setCheck = w.readoutItem('Unit check', { text: true });

    function show(key, on) { F[key].row.hidden = !on; }
    function val(key) { var p = chem.parseNumber(F[key].inp.value); return p ? p.value : NaN; }
    function line(html) { return '<div class="worked__math">' + html + '</div>'; }

    function sync() {
      var u = unknown.value, aAs = amountAs.value, kset = unitSet.value === 'k';
      var needAmount = u === 'P' || u === 'V' || u === 'T';
      amountAs.el.hidden = !needAmount;
      show('P', u !== 'P'); show('V', u !== 'V'); show('T', u !== 'T');
      show('n', needAmount && aAs === 'n');
      show('m', (needAmount && aAs === 'm') || u === 'M');
      show('formula', (needAmount && aAs === 'm') || u === 'm');

      var pu = kset ? 'kPa' : 'Pa', vu = kset ? 'dm<sup>3</sup>' : 'm<sup>3</sup>', Ru = 'J K<sup>' + MINUS + '1</sup> mol<sup>' + MINUS + '1</sup>';
      var conv = [], errs = [], notes = [], P, V, T, n, m, M, Vraw, Traw, tC = false, vCm = false;
      if (u !== 'P') {
        var p0 = val('P'), pUnit = F.P.sel.value;
        if (!(p0 > 0)) errs.push('Enter a pressure greater than zero.');
        if (pUnit === 'kPa') { P = kset ? p0 : p0 * 1000; conv.push(kset ? '<i>P</i> = ' + tidy(p0) + ' kPa (already in kPa)' : '<i>P</i> = ' + tidy(p0) + ' kPa ' + TIMES + ' 1000 = ' + tidy(P) + ' Pa'); }
        else { P = kset ? p0 / 1000 : p0; conv.push(kset ? '<i>P</i> = ' + tidy(p0) + ' Pa ÷ 1000 = ' + tidy(P) + ' kPa' : '<i>P</i> = ' + tidy(p0) + ' Pa (already in Pa)'); }
      }
      if (u !== 'V') {
        var v0 = val('V'), vUnit = F.V.sel.value, dm; Vraw = v0;
        if (!(v0 > 0)) errs.push('Enter a volume greater than zero.');
        dm = vUnit === 'cm3' ? v0 / 1000 : vUnit === 'm3' ? v0 * 1000 : v0; vCm = vUnit === 'cm3';
        V = kset ? dm : dm / 1000;
        var vt = '<i>V</i> = ' + tidy(v0) + ' ' + U(vUnit);
        if (kset) vt += vUnit === 'cm3' ? ' ÷ 1000 = ' + tidy(V) + ' dm<sup>3</sup>' : vUnit === 'm3' ? ' ' + TIMES + ' 1000 = ' + tidy(V) + ' dm<sup>3</sup>' : ' (already in dm<sup>3</sup>)';
        else vt += vUnit === 'cm3' ? ' ÷ 10<sup>6</sup> = ' + tidy(V) + ' m<sup>3</sup>' : vUnit === 'dm3' ? ' ÷ 1000 = ' + tidy(V) + ' m<sup>3</sup>' : ' (already in m<sup>3</sup>)';
        conv.push(vt);
      }
      if (u !== 'T') {
        var t0 = val('T'); Traw = t0; tC = F.T.sel.value !== 'K';
        T = tC ? t0 + K0 : t0;
        if (!isFinite(t0)) errs.push('Enter a temperature.'); else if (!(T > 0)) errs.push('The temperature must be above absolute zero (0 K, ' + MINUS + '273.15 °C).');
        conv.push(tC ? '<i>T</i> = ' + tidy(t0) + ' °C + 273.15 = ' + tidy(T, 7) + ' K' : '<i>T</i> = ' + tidy(t0, 7) + ' K (already in kelvin)');
      }
      var needM = (needAmount && aAs === 'm') || u === 'm', formula = F.formula.inp.value.trim();
      if (needM) {
        M = chem.molarMass(formula);
        if (!formula || !isFinite(M) || !(M > 0)) errs.push('Type a formula using element symbols up to krypton, such as CO2 or NH3.');
      }
      if ((needAmount && aAs === 'm') || u === 'M') { m = val('m'); if (!(m > 0)) errs.push('Enter a mass greater than zero.'); }
      if (needAmount && aAs === 'n') { n = val('n'); if (!(n > 0)) errs.push('Enter an amount greater than zero.'); }
      if (errs.length) {
        out.innerHTML = '<p class="s5-err">' + errs.join(' ') + '</p>'; setAns('—'); setCheck('Waiting for valid values.'); return;
      }
      if (needAmount && aAs === 'm') {
        n = m / M;
        conv.push('<i>M</i>(' + chem.formula(formula) + ') = ' + chem.fixed(M, 2) + ' g mol<sup>' + MINUS + '1</sup>');
        conv.push('<i>n</i> = <i>m</i> ÷ <i>M</i> = ' + tidy(m) + ' g ÷ ' + chem.fixed(M, 2) + ' g mol<sup>' + MINUS + '1</sup> = ' + tidy(n, 5) + ' mol');
      }
      var Rt = '8.31 ' + Ru, re = [], sub = [], ans, ansHtml, extra = '';
      var Pt = function () { return tidy(P) + ' ' + pu; }, Vt = function () { return tidy(V) + ' ' + vu; }, Tt = function () { return tidy(T, 7) + ' K'; }, nt = function () { return tidy(n, 5) + ' mol'; };
      if (u === 'P') {
        ans = n * R * T / V; re.push('<i>P</i> = <i>nRT</i> ÷ <i>V</i>');
        sub.push('<i>P</i> = (' + nt() + ' ' + TIMES + ' ' + Rt + ' ' + TIMES + ' ' + Tt() + ') ÷ ' + Vt());
        ansHtml = chem.fmt(ans, 3) + ' ' + pu; extra = kset ? ' = ' + chem.fmt(ans * 1000, 3) + ' Pa' : ' = ' + chem.fmt(ans / 1000, 3) + ' kPa';
      } else if (u === 'V') {
        ans = n * R * T / P; re.push('<i>V</i> = <i>nRT</i> ÷ <i>P</i>');
        sub.push('<i>V</i> = (' + nt() + ' ' + TIMES + ' ' + Rt + ' ' + TIMES + ' ' + Tt() + ') ÷ ' + Pt());
        ansHtml = chem.fmt(ans, 3) + ' ' + vu; extra = kset ? ' = ' + chem.fmt(ans * 1000, 3) + ' cm<sup>3</sup>' : ' = ' + chem.fmt(ans * 1000, 3) + ' dm<sup>3</sup>';
      } else if (u === 'T') {
        ans = P * V / (n * R); re.push('<i>T</i> = <i>PV</i> ÷ <i>nR</i>');
        sub.push('<i>T</i> = (' + Pt() + ' ' + TIMES + ' ' + Vt() + ') ÷ (' + nt() + ' ' + TIMES + ' ' + Rt + ')');
        ansHtml = chem.fmt(ans, 3) + ' K'; extra = ' (' + chem.fixed(ans - K0, 0) + ' °C)';
      } else {
        n = P * V / (R * T); re.push('<i>n</i> = <i>PV</i> ÷ <i>RT</i>');
        sub.push('<i>n</i> = (' + Pt() + ' ' + TIMES + ' ' + Vt() + ') ÷ (' + Rt + ' ' + TIMES + ' ' + Tt() + ') = ' + tidy(n, 5) + ' mol');
        if (u === 'n') { ans = n; ansHtml = chem.fmt(ans, 3) + ' mol'; }
        if (u === 'm') {
          ans = n * M; re.push('then <i>m</i> = <i>n</i> ' + TIMES + ' <i>M</i>');
          sub.push('<i>M</i>(' + chem.formula(formula) + ') = ' + chem.fixed(M, 2) + ' g mol<sup>' + MINUS + '1</sup>');
          sub.push('<i>m</i> = ' + tidy(n, 5) + ' mol ' + TIMES + ' ' + chem.fixed(M, 2) + ' g mol<sup>' + MINUS + '1</sup>');
          ansHtml = chem.fmt(ans, 3) + ' g';
        }
        if (u === 'M') {
          ans = m / n; re.push('then <i>M</i> = <i>m</i> ÷ <i>n</i> &nbsp; (the same as <i>M</i> = <i>mRT</i> ÷ <i>PV</i>)');
          sub.push('<i>M</i> = ' + tidy(m) + ' g ÷ ' + tidy(n, 5) + ' mol');
          ansHtml = chem.fmt(ans, 3) + ' g mol<sup>' + MINUS + '1</sup>';
        }
      }
      /* classic errors, shown with the wrong value they would give */
      function ratio(wrong) { var r = wrong / ans; return r >= 1 ? chem.fmt(r, 2) + ' times too big' : chem.fmt(1 / r, 2) + ' times too small'; }
      if (tC && u !== 'T') {
        if (Traw > 0) {
          var wrongT = u === 'P' ? n * R * Traw / V : u === 'V' ? n * R * Traw / P : u === 'M' ? ans * Traw / T : ans * T / Traw;
          notes.push('<b>Temperature left in °C.</b> Using ' + tidy(Traw) + ' instead of ' + tidy(T, 7) + ' K would give an answer ' + ratio(wrongT) + '.');
        } else notes.push('<b>Temperature left in °C.</b> Using ' + tidy(Traw) + ' °C directly would give a zero or negative answer, which is impossible. Always add 273.15 first.');
      }
      if (vCm && u !== 'V') {
        var bigger = (u === 'n' || u === 'm' || u === 'T');
        notes.push('<b>cm<sup>3</sup> used as if it were dm<sup>3</sup>.</b> Putting ' + tidy(Vraw) + ' straight in with kPa would make the answer 1000 times too ' + (bigger ? 'big' : 'small') + '. 1 dm<sup>3</sup> = 1000 cm<sup>3</sup>.');
      }
      if (u !== 'P' && u !== 'V') notes.push('<b>Mixed unit sets.</b> kPa goes with dm<sup>3</sup>, and Pa goes with m<sup>3</sup>. Pairing kPa with m<sup>3</sup>, or Pa with dm<sup>3</sup>, puts the answer out by a factor of 1000.');

      var html = '<ol class="s5-steps">';
      html += '<li><h5>Convert to the units you chose</h5>' + conv.map(line).join('') + '</li>';
      html += '<li><h5>Rearrange <i>PV</i> = <i>nRT</i></h5>' + re.map(line).join('') + '</li>';
      html += '<li><h5>Substitute with units</h5>' + sub.map(line).join('') + '</li>';
      html += '<li><h5>Answer</h5>' + line('<b>' + ansHtml + '</b>' + extra + ' &nbsp; (3 significant figures)') + '<p class="s5-small">In an exam, round to the smallest number of significant figures in the data you were given.</p></li>';
      html += '</ol>';
      if (notes.length) html += '<aside class="callout callout--mistake" data-title="Classic errors to avoid here"><ul class="s5-notes"><li>' + notes.join('</li><li>') + '</li></ul></aside>';
      out.innerHTML = html;
      setAns(ansHtml + extra);
      setCheck(kset ? 'kPa ' + TIMES + ' dm³ = J, so it matches R in J K⁻¹ mol⁻¹.' : 'Pa ' + TIMES + ' m³ = J, so it matches R in J K⁻¹ mol⁻¹.');
    }
    sync();
  });

  /* ======================================================================
     4. Real versus ideal (qualitative illustration only)
     ====================================================================== */
  S1.widgets.register('s1-5.real', function (w) {
    var N = 34, parts = [], i;
    for (i = 0; i < N; i++) { var a = Math.random() * Math.PI * 2, f = 0.6 + Math.random() * 0.8; parts.push({ x: Math.random(), y: Math.random(), dx: Math.cos(a) * f, dy: Math.sin(a) * f }); }
    var GAS = {
      small: { r: 3, size: 0.55, force: 0.45, label: 'small particles, weak forces (for example helium)' },
      large: { r: 5.5, size: 1, force: 1, label: 'larger particles, stronger forces (for example ammonia)' }
    };
    var gas = w.select({ label: 'Type of gas', value: 'large', onChange: update, options: [{ value: 'small', label: GAS.small.label }, { value: 'large', label: GAS.large.label }] });
    var sT = w.slider({ label: 'Temperature (0 = very low, 100 = very high)', min: 0, max: 100, step: 1, value: 50, onInput: update });
    var sP = w.slider({ label: 'Pressure (0 = very low, 100 = very high)', min: 0, max: 100, step: 1, value: 30, onInput: update });
    var playBtn = w.button('Pause', function () { if (loop.running) loop.stop(); else loop.start(true); syncPlay(); });
    w.button('Most ideal conditions', function () { sT.set(100, true); sP.set(0, true); update(); });
    w.button('Least ideal conditions', function () { sT.set(0, true); sP.set(100, true); update(); });
    var setVerdict = w.readoutItem('How close to ideal?', { text: true });
    var setVol = w.readoutItem('Particle volume', { text: true });
    var setF = w.readoutItem('Intermolecular forces', { text: true });
    var setNote = w.readoutItem('Remember', { text: true });
    var lev = { vol: 0, force: 0, ideal: 1 }, box = { w: 200, h: 150 };

    function words(x, list) { return list[x < 0.25 ? 0 : x < 0.5 ? 1 : x < 0.75 ? 2 : 3]; }
    function update() {
      var g = GAS[gas.value], t = sT.value / 100, p = sP.value / 100;
      lev.vol = clamp(p * g.size, 0, 1);                                   // illustrative scores only: no gas law behind them
      lev.force = clamp((1 - t) * (0.4 + 0.6 * p) * g.force * 1.15, 0, 1);
      lev.ideal = clamp(1 - 0.5 * lev.vol - 0.5 * lev.force - 0.25 * Math.max(lev.vol, lev.force), 0, 1);
      setVerdict(words(lev.ideal, ['Far from ideal', 'Noticeably non-ideal', 'Fairly close to ideal', 'Very close to ideal']));
      setVol(words(lev.vol, ['negligible: particles are far apart', 'starting to matter', 'significant: particles are crowded', 'a large share of the space']));
      setF(words(lev.force, ['negligible: particles are fast and far apart', 'starting to matter', 'significant', 'strong effect: particles are slow and close']));
      setNote('This picture is a qualitative illustration. The bars are not calculated from any gas equation, and particle sizes are exaggerated.');
      cv.draw();
    }
    var cv = w.canvas({ height: 330, label: 'A box of gas particles. Higher pressure makes the box smaller so the particles are crowded. Lower temperature makes them slower, and dashed lines show attractions between close neighbours. Three bars below show how much particle volume and intermolecular forces matter and how close the gas is to ideal behaviour.' });
    cv.draw(function (ctx, W, H) {
      var g = GAS[gas.value], p = sP.value / 100;
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), surf2 = w.color('--surface-2'), strong = w.color('--line-strong');
      var maxW = Math.min(W - 16, 520), bh = 170, bw = Math.max(70, maxW * (1 - 0.74 * p)), x0 = 8, y0 = 8;
      box.w = bw - 2 * g.r - 4; box.h = bh - 2 * g.r - 4;
      ctx.strokeStyle = strong; ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.strokeRect(x0, y0, maxW, bh); ctx.setLineDash([]);
      ctx.fillStyle = surf2; ctx.fillRect(x0, y0, bw, bh);
      ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.strokeRect(x0, y0, bw, bh);
      var pts = parts.map(function (q) { return { x: x0 + g.r + 2 + q.x * box.w, y: y0 + g.r + 2 + q.y * box.h }; });
      if (lev.force > 0.2) {                                              // attractions between close neighbours
        var reach = 16 + 26 * lev.force, a, b, d;
        ctx.strokeStyle = ink2; ctx.lineWidth = 1 + lev.force; ctx.setLineDash([3, 3]);
        for (a = 0; a < N; a++) for (b = a + 1; b < N; b++) {
          d = Math.sqrt(Math.pow(pts[a].x - pts[b].x, 2) + Math.pow(pts[a].y - pts[b].y, 2));
          if (d < reach) { ctx.beginPath(); ctx.moveTo(pts[a].x, pts[a].y); ctx.lineTo(pts[b].x, pts[b].y); ctx.stroke(); }
        }
        ctx.setLineDash([]);
      }
      ctx.fillStyle = accent;
      pts.forEach(function (q) { ctx.beginPath(); ctx.arc(q.x, q.y, g.r, 0, Math.PI * 2); ctx.fill(); });
      if (maxW - bw > 110) { ctx.fillStyle = ink3; ctx.font = monoFont(w, 11); ctx.textAlign = 'right'; ctx.textBaseline = 'alphabetic'; ctx.fillText('volume at low pressure', x0 + maxW - 6, y0 + bh - 8); }
      /* bars */
      var rows = [['Particle volume matters', lev.vol], ['Intermolecular forces matter', lev.force], ['Close to ideal behaviour', lev.ideal]];
      var by = y0 + bh + 26, bx = x0, barW = Math.min(W - 16, 520);
      rows.forEach(function (r, k) {
        var y = by + k * 44;
        ctx.fillStyle = ink; ctx.font = bodyFont(w, 13, k === 2); ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
        ctx.fillText(r[0], bx, y);
        ctx.fillStyle = ink3; ctx.font = monoFont(w, 11); ctx.textAlign = 'right';
        ctx.fillText(k === 2 ? 'not at all ↔ very' : 'hardly ↔ a lot', bx + barW, y);
        ctx.fillStyle = surf2; ctx.fillRect(bx, y + 6, barW, 12);
        ctx.fillStyle = k === 2 ? accent : ink2; ctx.fillRect(bx, y + 6, Math.max(3, barW * r[1]), 12);
        ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.strokeRect(bx, y + 6, barW, 12);
      });
    });
    var loop = w.loop(function (dt) {
      var speed = 28 + 120 * Math.sqrt(sT.value / 100);
      parts.forEach(function (q) {
        q.x += q.dx * speed * dt / box.w; q.y += q.dy * speed * dt / box.h;
        if (q.x < 0) { q.x = -q.x; q.dx = Math.abs(q.dx); } if (q.x > 1) { q.x = 2 - q.x; q.dx = -Math.abs(q.dx); }
        if (q.y < 0) { q.y = -q.y; q.dy = Math.abs(q.dy); } if (q.y > 1) { q.y = 2 - q.y; q.dy = -Math.abs(q.dy); }
        q.x = clamp(q.x, 0, 1); q.y = clamp(q.y, 0, 1);
      });
      cv.draw();
    });
    function syncPlay() { playBtn.textContent = loop.running ? 'Pause' : 'Play'; }
    update(); loop.start(); syncPlay();
  });

  /* ======================================================================
     5. Molar volume at STP, to scale
     ====================================================================== */
  S1.widgets.register('s1-5.molar', function (w) {
    var NMAX = 4;
    var sN = w.slider({ label: 'Amount of gas, n', min: 0.05, max: NMAX, step: 0.05, value: 1, unit: 'mol', onInput: function (v) { sV.set(Math.round(v * VM * 100) / 100, true); update(v); } });
    var sV = w.slider({ label: 'Volume at STP, V', min: 1, max: 90.8, step: 0.1, value: 22.7, unit: 'dm3', onInput: function (v) { var n = v / VM; sN.set(Math.round(n * 1000) / 1000, true); update(n); } });
    w.button('1.00 mol', function () { sN.set(1); });
    w.button('0.500 mol', function () { sN.set(0.5); });
    w.button('2.00 mol', function () { sN.set(2); });
    var setN = w.readoutItem('Amount, n'), setV = w.readoutItem('Volume at STP'), setSide = w.readoutItem('Cube side'), setCalc = w.readoutItem('Working', { text: true });
    var n = 1;
    var cv = w.canvas({ height: 250, label: 'A cube holding the chosen amount of gas at STP, drawn to scale beside a football about 22 centimetres across and a 1 cubic decimetre cube. The values are in the readout below.' });
    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), soft = w.color('--accent-soft'), surf2 = w.color('--surface-2');
      var sideMax = Math.pow(NMAX * VM, 1 / 3) * 10;                         // cm
      var s = Math.min((W - 30) / (sideMax * 1.3 + 22 + 10 + 14), (H - 62) / (sideMax * 1.3));   // px per cm
      var base = H - 40, side = Math.pow(n * VM, 1 / 3) * 10, px = side * s, off = px * 0.3, x = 10;
      function cube(x, sz, o, fill, stroke) {
        ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.lineJoin = 'round';
        ctx.beginPath(); ctx.moveTo(x, base - sz); ctx.lineTo(x + o, base - sz - o); ctx.lineTo(x + sz + o, base - sz - o); ctx.lineTo(x + sz + o, base - o); ctx.lineTo(x + sz, base); ctx.lineTo(x, base); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.strokeRect(x, base - sz, sz, sz);
        ctx.beginPath(); ctx.moveTo(x + sz, base - sz); ctx.lineTo(x + sz + o, base - sz - o); ctx.stroke();
      }
      cube(x, px, off, soft, accent);
      var bx = x + sideMax * s * 1.3 + 6 * s, rBall = 11 * s;
      ctx.fillStyle = surf2; ctx.strokeStyle = ink; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(bx + rBall, base - rBall, rBall, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(bx + rBall, base - rBall, rBall * 0.32, 0, Math.PI * 2); ctx.stroke();
      var ux = bx + 2 * rBall + 5 * s;
      cube(ux, 10 * s, 3 * s, surf2, ink);
      ctx.strokeStyle = ink2; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(4, base + 0.5); ctx.lineTo(W - 4, base + 0.5); ctx.stroke();
      ctx.font = monoFont(w, 11); ctx.fillStyle = ink; ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      ctx.fillText('gas at STP', x, base + 6);
      ctx.fillStyle = ink3; ctx.fillText(chem.fmt(n * VM, 3) + ' dm³', x, base + 21);
      ctx.textAlign = 'center';
      ctx.fillStyle = ink; ctx.fillText('football', bx + rBall, base + 6); ctx.fillStyle = ink3; ctx.fillText('22 cm', bx + rBall, base + 21);
      ctx.fillStyle = ink; ctx.fillText('1 dm³', ux + 5 * s + 4, base + 6); ctx.fillStyle = ink3; ctx.fillText('10 cm', ux + 5 * s + 4, base + 21);
      /* scale bar */
      ctx.strokeStyle = ink; ctx.lineWidth = 2; var sx = W - 12 - 10 * s;
      ctx.beginPath(); ctx.moveTo(sx, 14); ctx.lineTo(sx + 10 * s, 14); ctx.moveTo(sx, 9); ctx.lineTo(sx, 19); ctx.moveTo(sx + 10 * s, 9); ctx.lineTo(sx + 10 * s, 19); ctx.stroke();
      ctx.fillStyle = ink3; ctx.textAlign = 'right'; ctx.fillText('scale: 10 cm', W - 12, 24);
    });
    function update(v) {
      n = v; var V = n * VM;
      setN(chem.fmt(n, 3) + ' mol');
      setV(chem.fmt(V, 3) + ' dm<sup>3</sup> = ' + chem.fmt(V * 1000, 3) + ' cm<sup>3</sup>');
      setSide(chem.fmt(Math.pow(V, 1 / 3) * 10, 3) + ' cm');
      setCalc('V = n ' + TIMES + ' 22.7 dm³ mol⁻¹ = ' + chem.toSig(n, 3) + ' mol ' + TIMES + ' 22.7 dm³ mol⁻¹ = ' + chem.toSig(V, 3) + ' dm³. The same for any ideal gas: H₂, CO₂ or Ar.');
      cv.draw();
    }
    update(1);
  });
})();
