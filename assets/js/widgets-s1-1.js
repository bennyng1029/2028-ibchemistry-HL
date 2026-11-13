/* ==========================================================================
   Widgets for topic 1.1 — Introduction to the particulate nature of matter
   s1-1.kelvin      Celsius ↔ kelvin scale
   s1-1.particles   particle model of solid / liquid / gas for a chosen substance
   s1-1.heating     heating curve of water with a particle picture
   s1-1.separate    choose a separation technique from the property difference
   s1-1.sorter      sort substances into element / compound / mixture types
   The widget API (w) is documented in docs/AUTHORING.md.
   The DOM widgets use the .p11-* classes defined in topics/s1-1.html.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem;
  var ZERO = chem.constants.zeroC;
  var MINUS = '\u2212';
  /* Translation hook: every user-visible string goes through t(). */
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  function h(tag, attrs, html) {
    var n = document.createElement(tag), k;
    for (k in attrs) if (Object.prototype.hasOwnProperty.call(attrs, k)) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }
  function signed(x, dp) { return chem.fixed(x, dp == null ? 0 : dp); }
  function feedback(node, right, html) {
    node.className = 'feedback ' + (right ? 'feedback--right' : 'feedback--wrong');
    node.innerHTML = '<span class="feedback__label">' + (right ? t('Correct') : t('Not quite')) + '</span>' + html;
  }

  /* ------------------------------------------------------------------------
     Shared particle model.
     A 2-D model with soft discs in a 300 × 200 box. Every particle is in one of
     three modes: 0 = held near a lattice site (solid), 1 = touching but free to
     move past neighbours (liquid), 2 = free in the whole box (gas).
     Random thermal motion is set by a thermostat so that the mean kinetic
     energy is proportional to the temperature in kelvin, in every mode.
     ------------------------------------------------------------------------ */
  function makeSim(N, cols, seed) {
    var BW = 300, BH = 200, R = 7, SP = 18, D0 = 16.5;
    var K_REP = 4000, K_SITE = 1500, GRAV = 400, K_CEIL = 400, C_KT = 19.4;
    var GAMMA = [6, 4, 0.5];
    var s = seed || 12345;
    function rnd() { s |= 0; s = s + 0x6D2B79F5 | 0; var z = Math.imul(s ^ s >>> 15, 1 | s); z = z + Math.imul(z ^ z >>> 7, 61 | z) ^ z; return ((z ^ z >>> 14) >>> 0) / 4294967296; }
    function gauss() { var u = 1 - rnd(), v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

    var sites = [], p = [], i;
    var blockW = (cols - 1) * SP + SP / 2;
    for (i = 0; i < N; i++) {
      var row = Math.floor(i / cols), col = i % cols;
      sites.push({ x: (BW - blockW) / 2 + col * SP + (row % 2 ? SP / 2 : 0), y: BH - R - 2 - row * SP * 0.866 });
      p.push({ x: sites[i].x, y: sites[i].y, vx: 0, vy: 0, rank: i });
    }
    var nS = N, nG = 0, T = 1, kT = C_KT;
    var ax = new Array(N), ay = new Array(N);

    function mode(q) { return q.rank < nS ? 0 : (q.rank >= N - nG ? 2 : 1); }
    /* Give the lowest particles the lowest lattice sites, so freezing looks orderly. */
    function rerank() {
      var sorted = p.slice().sort(function (a, b) { return b.y - a.y; }), r = 0;
      for (var c = 0; c < N; c += cols) {
        sorted.slice(c, c + cols).sort(function (a, b) { return a.x - b.x; }).forEach(function (q) { q.rank = r++; });
      }
    }
    function set(solid, gas, tK) {
      solid = Math.max(0, Math.min(N, solid)); gas = Math.max(0, Math.min(N - solid, gas));
      tK = Math.max(tK, 1);
      if (solid > 0 && nS === 0) rerank();
      if (tK !== T) { var f = Math.sqrt(tK / T); p.forEach(function (q) { q.vx *= f; q.vy *= f; }); }
      nS = solid; nG = gas; T = tK; kT = C_KT * tK;
    }
    function sub(dt) {
      var j, q, o, dx, dy, d2, d, f, m, nL = N - nS - nG;
      var surf = BH - Math.max(2 * R + 4, (nL * SP * SP * 1.05 + nS * SP * SP * 0.866) / BW + R);
      for (i = 0; i < N; i++) { ax[i] = 0; ay[i] = 0; }
      for (i = 0; i < N; i++) {
        q = p[i];
        for (j = i + 1; j < N; j++) {
          o = p[j]; dx = q.x - o.x; dy = q.y - o.y; d2 = dx * dx + dy * dy;
          if (d2 < D0 * D0 && d2 > 1e-6) {
            d = Math.sqrt(d2); f = K_REP * (D0 - d) / d;
            ax[i] += f * dx; ay[i] += f * dy; ax[j] -= f * dx; ay[j] -= f * dy;
          }
        }
      }
      for (i = 0; i < N; i++) {
        q = p[i]; m = mode(q);
        if (m === 0) { ax[i] += -K_SITE * (q.x - sites[q.rank].x); ay[i] += -K_SITE * (q.y - sites[q.rank].y); }
        else if (m === 1) { ay[i] += GRAV; if (q.y < surf) ay[i] += K_CEIL * (surf - q.y); }
        var g = GAMMA[m], amp = Math.sqrt(2 * g * kT * dt);
        q.vx += (ax[i] - g * q.vx) * dt + amp * gauss();
        q.vy += (ay[i] - g * q.vy) * dt + amp * gauss();
        q.x += q.vx * dt; q.y += q.vy * dt;
        if (q.x < R) { q.x = R; q.vx = Math.abs(q.vx); } else if (q.x > BW - R) { q.x = BW - R; q.vx = -Math.abs(q.vx); }
        if (q.y < R) { q.y = R; q.vy = Math.abs(q.vy); } else if (q.y > BH - R) { q.y = BH - R; q.vy = -Math.abs(q.vy); }
      }
    }
    function step(dt) { var n = Math.max(1, Math.ceil(dt / (1 / 240))); for (var k = 0; k < n; k++) sub(dt / n); }
    function relax(seconds) { var n = Math.round(seconds * 60); for (var k = 0; k < n; k++) step(1 / 60); }
    function draw(ctx, ox, oy, sc, col) {
      ctx.fillStyle = col.bg; ctx.fillRect(ox, oy, BW * sc, BH * sc);
      ctx.fillStyle = col.fill; ctx.strokeStyle = col.ink; ctx.lineWidth = Math.max(1, 1.2 * sc);
      for (var k = 0; k < N; k++) {
        ctx.beginPath(); ctx.arc(ox + p[k].x * sc, oy + p[k].y * sc, R * sc, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
      }
      ctx.strokeStyle = col.ink; ctx.lineWidth = 2; ctx.strokeRect(ox, oy, BW * sc, BH * sc);
    }
    return { N: N, BW: BW, BH: BH, set: set, step: step, relax: relax, draw: draw };
  }
  function simColors(w) { return { bg: w.color('--surface'), fill: w.color('--accent'), ink: w.color('--ink') }; }

  /* ------------------------------------------------------------------------
     Celsius ↔ kelvin converter with a thermometer scale.
     ------------------------------------------------------------------------ */
  S1.widgets.register('s1-1.kelvin', function (w) {
    var MIN = -273.15, MAX = 150;
    var start = w.options.start != null ? Number(w.options.start) : 25;

    var setC = w.readoutItem(t('Celsius'));
    var setK = w.readoutItem(t('Kelvin'));
    var setNote = w.readoutItem(t('What it means'), { text: true });

    var slider = w.slider({ label: t('Temperature'), min: MIN, max: MAX, step: 0.05, value: start, unit: '°C', onInput: update });
    w.button(t('Absolute zero'), function () { slider.set(MIN); });
    w.button(t('Water freezes'), function () { slider.set(0); });
    w.button(t('Room temperature'), function () { slider.set(25); });
    w.button(t('Water boils'), function () { slider.set(100); });

    var marks = [
      { c: MIN, label: t('absolute zero') },
      { c: 0, label: t('water freezes') },
      { c: 100, label: t('water boils') }
    ];

    var cv = w.canvas({ height: 150, label: t('Thermometer scale from absolute zero to 150 degrees Celsius, labelled in both degrees Celsius and kelvin') });
    cv.draw(function (ctx, W) {
      var ink = w.color('--ink'), ink3 = w.color('--ink-3'), line = w.color('--line-strong'),
        accent = w.color('--accent'), track = w.color('--surface-2');
      var mono = '12px ' + (w.color('--font-mono') || 'monospace');
      var padL = 14, padR = 14, x0 = padL, x1 = W - padR, y = 62, hh = 22;
      function X(c) { return x0 + (c - MIN) / (MAX - MIN) * (x1 - x0); }
      var c = slider.value;

      ctx.fillStyle = track; ctx.fillRect(x0, y, x1 - x0, hh);
      ctx.fillStyle = accent; ctx.fillRect(x0, y, Math.max(2, X(c) - x0), hh);
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.strokeRect(x0, y, x1 - x0, hh);

      ctx.font = mono; ctx.textBaseline = 'alphabetic';
      var step = W < 460 ? 100 : 50;
      ctx.strokeStyle = line; ctx.lineWidth = 1;
      for (var tc = -250; tc <= MAX; tc += 50) {
        var x = X(tc);
        ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x, y); ctx.stroke();
        if (tc % step === 0) { ctx.fillStyle = ink3; ctx.textAlign = 'center'; ctx.fillText(String(tc).replace('-', MINUS), x, y - 9); }
      }
      for (var k = 0; k <= MAX + 273.15; k += 50) {
        var xk = X(k - 273.15);
        ctx.beginPath(); ctx.moveTo(xk, y + hh); ctx.lineTo(xk, y + hh + 5); ctx.stroke();
        if (k % step === 0) { ctx.fillStyle = ink3; ctx.textAlign = k === 0 ? 'left' : 'center'; ctx.fillText(String(k), xk, y + hh + 18); }
      }
      ctx.fillStyle = ink; ctx.textAlign = 'right';
      ctx.fillText('°C', x1, y - 26);
      ctx.fillText('K', x1, y + hh + 36);

      ctx.textAlign = 'left';
      marks.forEach(function (m, i) {
        var xm = X(m.c);
        ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(xm, y - 2); ctx.lineTo(xm, y + hh + 2); ctx.stroke();
        ctx.setLineDash([]);
        if (W >= 460 || i !== 1) {
          ctx.fillStyle = ink3;
          var tw = ctx.measureText(m.label).width;
          ctx.fillText(m.label, Math.min(Math.max(x0, xm - (i === 0 ? 0 : tw / 2)), x1 - tw), y + hh + 54);
        }
      });

      var xc = X(c);
      ctx.strokeStyle = ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(xc, y - 4); ctx.lineTo(xc, y + hh + 4); ctx.stroke();
    });

    function update() {
      var c = slider.value, k = c + ZERO;
      if (Math.abs(k) < 1e-9) k = 0;
      setC(chem.fixed(c, 2) + ' °C');
      setK(chem.fixed(k, 2) + ' K');
      setNote(k === 0 ? t('Absolute zero: the lowest possible temperature') : c < 0 ? t('Below the freezing point of water') : c < 100 ? t('Water is liquid (at normal atmospheric pressure)') : t('At or above the boiling point of water'));
      cv.draw();
    }
    update();
  });

  /* ------------------------------------------------------------------------
     Particle model simulator: solid → liquid → gas for a chosen substance.
     Melting and boiling points are rounded to the nearest degree.
     ------------------------------------------------------------------------ */
  var SUBSTANCES = {
    water:    { name: t('Water'), formula: 'H2O', mp: 0, bp: 100, min: -50, max: 150, start: 25 },
    ethanol:  { name: t('Ethanol'), formula: 'C2H5OH', mp: -114, bp: 78, min: -170, max: 130, start: 25 },
    nitrogen: { name: t('Nitrogen'), formula: 'N2', mp: -210, bp: -196, min: -230, max: -170, start: -203 }
  };

  S1.widgets.register('s1-1.particles', function (w) {
    var N = 48, sim = makeSim(N, 8, 2028);
    var sub = SUBSTANCES.water;

    var setT = w.readoutItem(t('Temperature'));
    var setState = w.readoutItem(t('State'));
    var setDesc = w.readoutItem(t('What the particles are doing'), { text: true });

    w.select({
      label: t('Substance'), value: 'water',
      options: Object.keys(SUBSTANCES).map(function (k) { return { value: k, label: SUBSTANCES[k].name }; }),
      onChange: function (v) { sub = SUBSTANCES[v]; applyRange(); slider.set(sub.start); }
    });
    var sOpts = { label: t('Temperature'), min: sub.min, max: sub.max, step: 1, value: sub.start, unit: '°C', onInput: update };
    var slider = w.slider(sOpts);
    function applyRange() {
      sOpts.min = sub.min; sOpts.max = sub.max;
      Array.prototype.forEach.call(slider.el.querySelectorAll('input'), function (inp) { inp.min = sub.min; inp.max = sub.max; });
    }
    w.button(t('Melting point'), function () { slider.set(sub.mp); });
    w.button(t('Boiling point'), function () { slider.set(sub.bp); });

    var cv = w.canvas({ height: 300, label: t('Box of 48 particles shown as a solid, liquid or gas, with a bar below showing the temperature ranges of the three states') });
    var loop = w.loop(function (dt) { sim.step(dt); cv.draw(); });
    var playBtn = w.button(t('Pause motion'), function () {
      if (loop.running || wanted) { wanted = false; loop.stop(); } else { wanted = true; loop.start(true); }
      playBtn.textContent = wanted ? t('Pause motion') : t('Play motion');
    });
    var wanted = !w.reducedMotion;
    if (!wanted) playBtn.textContent = t('Play motion');

    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink3 = w.color('--ink-3'), soft = w.color('--accent-soft'), track = w.color('--surface-2');
      var sc = Math.min((W - 8) / sim.BW, (H - 78) / sim.BH);
      var ox = (W - sim.BW * sc) / 2, oy = 4;
      sim.draw(ctx, ox, oy, sc, simColors(w));

      /* state bar */
      var x0 = 6, x1 = W - 6, y = H - 56, bh = 22, c = slider.value;
      function X(tc) { return x0 + (tc - sub.min) / (sub.max - sub.min) * (x1 - x0); }
      var zones = [[t('solid'), sub.min, sub.mp], [t('liquid'), sub.mp, sub.bp], [t('gas'), sub.bp, sub.max]];
      var cur = c < sub.mp ? 0 : c === sub.mp ? -1 : c < sub.bp ? 1 : c === sub.bp ? -2 : 2;
      ctx.font = '12px ' + (w.color('--font-mono') || 'monospace'); ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
      zones.forEach(function (z, i) {
        var on = cur === i || (cur === -1 && i < 2) || (cur === -2 && i > 0);
        ctx.fillStyle = on ? soft : track; ctx.fillRect(X(z[1]), y, X(z[2]) - X(z[1]), bh);
        ctx.strokeStyle = ink; ctx.lineWidth = on ? 2 : 1; ctx.strokeRect(X(z[1]), y, X(z[2]) - X(z[1]), bh);
        ctx.fillStyle = ink; ctx.fillText(z[0], (X(z[1]) + X(z[2])) / 2, y + bh / 2 + 1);
      });
      ctx.textBaseline = 'alphabetic'; ctx.fillStyle = ink3;
      var lm = t('m.p. {T} °C', { T: signed(sub.mp) }), lb = t('b.p. {T} °C', { T: signed(sub.bp) });
      var wm = ctx.measureText(lm).width, wb = ctx.measureText(lb).width;
      var xm = Math.max(x0 + wm / 2, X(sub.mp)), xb = Math.min(x1 - wb / 2, X(sub.bp));
      if (xb - xm < (wm + wb) / 2 + 8) { var mid = (xm + xb) / 2; xm = mid - (wm + 8) / 2 - 0; xb = mid + (wb + 8) / 2; xm = Math.max(x0 + wm / 2, xm); }
      ctx.fillText(lm, xm, y + bh + 16); ctx.fillText(lb, xb, y + bh + 16);
      ctx.fillStyle = ink3; ctx.textAlign = 'left'; ctx.fillText(signed(sub.min), x0, y + bh + 34);
      ctx.textAlign = 'right'; ctx.fillText(signed(sub.max) + ' °C', x1, y + bh + 34);
      /* marker */
      var xc = X(c);
      ctx.fillStyle = ink; ctx.beginPath(); ctx.moveTo(xc, y - 1); ctx.lineTo(xc - 6, y - 11); ctx.lineTo(xc + 6, y - 11); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(xc, y); ctx.lineTo(xc, y + bh); ctx.stroke();
    });

    function update() {
      var c = slider.value, k = c + ZERO, state, desc, nS = 0, nG = 0;
      if (c < sub.mp) {
        nS = N; state = t('Solid');
        desc = t('Close together in a regular, fixed arrangement. They only vibrate about fixed positions.');
      } else if (c === sub.mp) {
        nS = N / 2; state = t('Solid and liquid together');
        desc = t('At the melting point both states can exist together. Some particles are still in fixed positions. Others have broken free and move past each other.');
      } else if (c < sub.bp) {
        state = t('Liquid');
        desc = t('Still close together, but in a random arrangement. They move past each other, so the liquid flows and takes the shape of the bottom of the box.');
      } else if (c === sub.bp) {
        nG = N / 3; state = t('Liquid and gas together');
        desc = t('At the boiling point both states can exist together. Some particles have escaped the attractions of their neighbours and move freely through the box.');
      } else {
        nG = N; state = t('Gas');
        desc = t('Far apart, in a random arrangement. They move quickly in all directions and fill the whole box.');
      }
      sim.set(nS, nG, k);
      if (!loop.running) sim.relax(2.5);
      setT(t('{C} °C = {K} K', { C: signed(c), K: chem.fixed(k, 2) }));
      setState(state);
      setDesc(desc);
      cv.draw();
    }
    update();
    if (wanted) loop.start();
  });

  /* ------------------------------------------------------------------------
     Heating curve explorer for 100 g of water, drawn to scale.
     Approximate values: c(ice) 2.09, c(water) 4.18, c(steam) 2.01 J g-1 K-1;
     melting 334 J g-1; boiling 2260 J g-1.
     ------------------------------------------------------------------------ */
  var HC = (function () {
    var m = 100, T0 = -40, T1 = 140;
    var e = [m * 2.09 * (0 - T0) / 1000, m * 334 / 1000, m * 4.18 * 100 / 1000, m * 2260 / 1000, m * 2.01 * (T1 - 100) / 1000];
    var cum = [0], i;
    for (i = 0; i < e.length; i++) cum.push(cum[i] + e[i]);
    return { T0: T0, T1: T1, e: e, cum: cum, total: cum[5], temps: [T0, 0, 0, 100, 100, T1] };
  })();

  S1.widgets.register('s1-1.heating', function (w) {
    var N = 36, sim = makeSim(N, 6, 77);
    var STAGES = [
      { label: function () { return t('Ice warming: solid'); },
        text: t('The temperature rises. The energy supplied increases the average kinetic energy of the particles: they vibrate faster about their fixed positions.') },
      { label: function (pct) { return t('Melting: solid and liquid ({pct}% melted)', { pct: pct }); },
        text: t('The temperature stays at 0 °C. The energy supplied is used to overcome some of the attractions that hold the particles in fixed positions. Their potential energy rises. Their average kinetic energy does not change.') },
      { label: function () { return t('Water warming: liquid'); },
        text: t('The temperature rises again. All the solid has melted, so the energy supplied increases the average kinetic energy of the particles.') },
      { label: function (pct) { return t('Boiling: liquid and gas ({pct}% boiled)', { pct: pct }); },
        text: t('The temperature stays at 100 °C. The energy supplied is used to overcome the attractions between the particles so that they separate completely. Their average kinetic energy does not change. This plateau is long because the particles must be fully separated.') },
      { label: function () { return t('Steam warming: gas'); },
        text: t('The temperature rises again. All the liquid has boiled, so the energy supplied increases the average kinetic energy of the gas particles.') }
    ];

    var setE = w.readoutItem(t('Energy supplied'));
    var setT = w.readoutItem(t('Temperature'));
    var setStage = w.readoutItem(t('Stage'));
    var setText = w.readoutItem(t('Why'), { text: true });

    var slider = w.slider({ label: t('Energy supplied'), min: 0, max: Math.round(HC.total * 10) / 10, step: 0.2, value: 4, unit: 'kJ', onInput: update });
    function stageOf(E) { for (var i = 0; i < 5; i++) if (E <= HC.cum[i + 1] + 1e-9) return i; return 4; }
    function go(i) { slider.set(Math.round((HC.cum[i] + HC.cum[i + 1]) / 2 * 5) / 5); }
    w.button(t('Previous stage'), function () { go(Math.max(0, stageOf(slider.value) - 1)); });
    w.button(t('Next stage'), function () { go(Math.min(4, stageOf(slider.value) + 1)); }, { primary: true });

    var cv = w.canvas({ height: 330, label: t('Heating curve for 100 grams of water: temperature against energy supplied, with flat sections at 0 and 100 degrees Celsius, and a particle picture for the chosen point') });
    var loop = w.loop(function (dt) { sim.step(dt); cv.draw(); });
    var wanted = !w.reducedMotion;
    var playBtn = w.button(wanted ? t('Pause motion') : t('Play motion'), function () {
      if (wanted) { wanted = false; loop.stop(); } else { wanted = true; loop.start(true); }
      playBtn.textContent = wanted ? t('Pause motion') : t('Play motion');
    });

    function tempAt(E) {
      var i = stageOf(E), f = (E - HC.cum[i]) / HC.e[i];
      return { i: i, f: Math.max(0, Math.min(1, f)), T: HC.temps[i] + (HC.temps[i + 1] - HC.temps[i]) * Math.max(0, Math.min(1, f)) };
    }

    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink3 = w.color('--ink-3'), line = w.color('--line'), accent = w.color('--accent');
      var mono = '12px ' + (w.color('--font-mono') || 'monospace'), body = '13px ' + (w.color('--font-body') || 'sans-serif');
      var pl = 46, pr = 10, pt = 12, pb = 40, pw = W - pl - pr, ph = H - pt - pb;
      function X(E) { return pl + E / HC.total * pw; }
      function Y(T) { return pt + (HC.T1 - T) / (HC.T1 - HC.T0) * ph; }
      var cur = tempAt(slider.value);

      /* grid and axes */
      ctx.font = mono; ctx.textBaseline = 'middle'; ctx.textAlign = 'right';
      for (var T = -40; T <= 140; T += 20) {
        ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(pl, Y(T)); ctx.lineTo(pl + pw, Y(T)); ctx.stroke();
        if (T % 40 === 0 || T === 100) { ctx.fillStyle = ink3; ctx.fillText(String(T).replace('-', MINUS), pl - 6, Y(T)); }
      }
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      var xs = W < 460 ? 100 : 50;
      for (var E = 0; E <= HC.total; E += 50) {
        ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(X(E), pt + ph); ctx.lineTo(X(E), pt + ph + 4); ctx.stroke();
        if (E % xs === 0) { ctx.fillStyle = ink3; ctx.fillText(String(E), X(E), pt + ph + 17); }
      }
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(pl, pt); ctx.lineTo(pl, pt + ph); ctx.lineTo(pl + pw, pt + ph); ctx.stroke();
      ctx.fillStyle = ink; ctx.font = body; ctx.fillText(t('energy supplied / kJ'), pl + pw / 2, H - 5);
      ctx.save(); ctx.translate(12, pt + ph / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(t('temperature / °C'), 0, 0); ctx.restore();

      /* cursor guide lines (under the particle picture) */
      var xc = X(slider.value), yc = Y(cur.T);
      ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
      ctx.beginPath(); ctx.moveTo(xc, pt + ph); ctx.lineTo(xc, yc); ctx.lineTo(pl, yc); ctx.stroke(); ctx.setLineDash([]);
      /* particle picture in the empty lower right of the plot */
      var ax0 = X(HC.cum[3]) + 14, ay0 = Y(100) + 30, aw = pl + pw - 8 - ax0, ah = pt + ph - 10 - ay0;
      var sc = Math.min(aw / sim.BW, ah / sim.BH);
      var bx = pl + pw - 8 - sim.BW * sc, by = pt + ph - 10 - sim.BH * sc;
      sim.draw(ctx, bx, by, sc, simColors(w));
      ctx.fillStyle = ink3; ctx.font = mono; ctx.textAlign = 'left';
      ctx.fillText(t('particle picture'), bx, by - 6);

      /* curve: every stage, then the current stage on top */
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      ctx.strokeStyle = ink3; ctx.lineWidth = 2; ctx.beginPath();
      for (var i = 0; i <= 5; i++) { if (i === 0) ctx.moveTo(X(HC.cum[i]), Y(HC.temps[i])); else ctx.lineTo(X(HC.cum[i]), Y(HC.temps[i])); }
      ctx.stroke();
      ctx.strokeStyle = accent; ctx.lineWidth = 5; ctx.beginPath();
      ctx.moveTo(X(HC.cum[cur.i]), Y(HC.temps[cur.i])); ctx.lineTo(X(HC.cum[cur.i + 1]), Y(HC.temps[cur.i + 1])); ctx.stroke();

      /* plateau labels */
      ctx.fillStyle = ink; ctx.font = body; ctx.textAlign = 'left';
      ctx.fillText(t('melting'), X(HC.cum[2]) + 6, Y(0) + 16);
      ctx.fillText(t('boiling'), X(HC.cum[3]) + 14, Y(100) - 8);

      /* cursor */
      var xc2 = X(slider.value), yc2 = Y(cur.T);
      ctx.fillStyle = w.color('--surface'); ctx.strokeStyle = ink; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(xc2, yc2, 6, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    });

    function update() {
      var cur = tempAt(slider.value), st = STAGES[cur.i], nS = 0, nG = 0;
      if (cur.i === 0) nS = N;
      else if (cur.i === 1) nS = Math.round(N * (1 - cur.f));
      else if (cur.i === 3) nG = Math.round(N * cur.f);
      else if (cur.i === 4) nG = N;
      sim.set(nS, nG, cur.T + ZERO);
      if (!loop.running) sim.relax(2.5);
      setE(t('{E} kJ', { E: chem.fixed(slider.value, 1) }));
      setT(t('{C} °C = {K} K', { C: chem.fixed(cur.T, 1), K: chem.fixed(cur.T + ZERO, 1) }));
      setStage(st.label(Math.round(cur.f * 100)));
      setText(st.text);
      cv.draw();
    }
    update();
    if (wanted) loop.start();
  });

  /* ------------------------------------------------------------------------
     Separation chooser.
     ------------------------------------------------------------------------ */
  var svgCount = 0;
  function svgWrap(vb, inner) {
    var id = 'p11-ah-' + (++svgCount);
    inner = inner.split('#p11-ah').join('#' + id);
    return '<svg class="p11-svg" viewBox="' + vb + '" role="img" focusable="false">' +
      '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0 0 L10 5 L0 10 z"/></marker></defs>' + inner + '</svg>';
  }
  /* label with a leader line: text at (x, y); lines is one translated string in which | marks a line break; leader from (lx1, ly1) to (lx2, ly2) */
  function lab(x, y, lines, lx1, ly1, lx2, ly2, anchor) {
    var o = '<text x="' + x + '" y="' + y + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + '>';
    String(lines).split('|').forEach(function (ln, i) { o += '<tspan x="' + x + '" dy="' + (i ? 15 : 0) + '">' + ln + '</tspan>'; });
    o += '</text>';
    if (lx1 != null) o += '<line class="lead" x1="' + lx1 + '" y1="' + ly1 + '" x2="' + lx2 + '" y2="' + ly2 + '"/>';
    return o;
  }
  function flame(x, y) { return '<path class="ln" d="M' + (x - 9) + ' ' + y + ' Q' + (x - 12) + ' ' + (y - 14) + ' ' + x + ' ' + (y - 26) + ' Q' + (x + 12) + ' ' + (y - 14) + ' ' + (x + 9) + ' ' + y + ' z"/>'; }
  function funnel(cx, top, half, withPaper) {
    var s = '<path class="ln" d="M' + (cx - half) + ' ' + top + ' L' + (cx - 5) + ' ' + (top + half) + ' V' + (top + half + 34) + ' M' + (cx + half) + ' ' + top + ' L' + (cx + 5) + ' ' + (top + half) + ' V' + (top + half + 34) + '"/>';
    if (withPaper) s += '<path class="ln dash" d="M' + (cx - half + 9) + ' ' + (top + 3) + ' L' + cx + ' ' + (top + half - 5) + ' L' + (cx + half - 9) + ' ' + (top + 3) + '"/>';
    return s;
  }
  function beaker(x, y, bw, bh, level, cls) {
    return (level ? '<rect class="' + (cls || 'liq') + '" x="' + (x + 1) + '" y="' + (y + bh - level) + '" width="' + (bw - 2) + '" height="' + (level - 1) + '"/>' : '') +
      '<path class="ln" d="M' + x + ' ' + y + ' V' + (y + bh) + ' H' + (x + bw) + ' V' + y + '"/>';
  }
  function crystals(pts) { return pts.map(function (q) { return '<rect class="solid" x="' + q[0] + '" y="' + q[1] + '" width="7" height="7" transform="rotate(45 ' + (q[0] + 3.5) + ' ' + (q[1] + 3.5) + ')"/>'; }).join(''); }
  function grains(pts) { return pts.map(function (q) { return '<circle class="solid" cx="' + q[0] + '" cy="' + q[1] + '" r="3.2"/>'; }).join(''); }

  var SCHEM = {
    filtration: function () {
      return svgWrap('0 0 360 235',
        '<polygon class="liq" points="134,64 226,64 185,104 175,104"/>' +
        '<polygon class="solid" points="166,92 194,92 182,104 178,104"/>' +
        funnel(180, 50, 62, true) +
        beaker(125, 138, 110, 85, 34) +
        '<circle class="liq-drop" cx="180" cy="158" r="3.5"/>' +
        lab(6, 34, t('mixture|poured in'), 62, 44, 150, 70) +
        lab(262, 44, t('filter paper|in a funnel'), 258, 48, 226, 58) +
        lab(262, 100, t('residue:|insoluble solid|stays on paper'), 258, 97, 190, 98) +
        lab(250, 186, t('filtrate:|liquid that|passes through'), 246, 196, 222, 204));
    },
    solvation: function () {
      return svgWrap('0 0 360 235',
        beaker(120, 60, 120, 150, 100) +
        '<line class="ln thick" x1="215" y1="30" x2="170" y2="185"/>' +
        grains([[140, 203], [152, 204], [163, 203], [176, 204], [189, 203], [201, 204], [213, 203], [226, 204], [146, 197], [170, 197], [195, 197], [220, 197]]) +
        '<path class="ln" marker-end="url(#p11-ah)" d="M60 36 Q100 30 130 70"/>' +
        lab(6, 26, t('add water|(the solvent)')) +
        lab(250, 34, t('stir with a|glass rod'), 246, 34, 216, 36) +
        lab(250, 120, t('soluble solid|dissolves:|a solution forms'), 246, 126, 222, 140) +
        lab(6, 176, t('insoluble solid|does not|dissolve'), 96, 190, 138, 201));
    },
    evaporation: function () {
      return svgWrap('0 0 360 235',
        '<path class="liq" d="M124 118 Q180 168 236 118 z"/>' +
        '<path class="ln" d="M112 104 Q180 190 248 104"/>' +
        crystals([[150, 132], [176, 144], [200, 133]]) +
        '<line class="ln" x1="96" y1="158" x2="264" y2="158"/><path class="ln" d="M110 158 L98 226 M250 158 L262 226"/>' +
        flame(180, 222) +
        '<path class="ln" marker-end="url(#p11-ah)" d="M150 96 q-8 -14 0 -28 q8 -14 0 -28"/>' +
        '<path class="ln" marker-end="url(#p11-ah)" d="M180 96 q-8 -14 0 -28 q8 -14 0 -28"/>' +
        '<path class="ln" marker-end="url(#p11-ah)" d="M210 96 q-8 -14 0 -28 q8 -14 0 -28"/>' +
        lab(236, 40, t('solvent leaves|as vapour'), 232, 44, 216, 56) +
        lab(268, 100, t('evaporating|basin'), 264, 104, 246, 110) +
        lab(4, 100, t('solution, then|crystals of the|dissolved solid'), 94, 116, 148, 130) +
        lab(200, 198, t('gentle|heat'), 198, 200, 190, 208));
    },
    distillation: function () {
      return svgWrap('0 0 360 235',
        '<path class="liq" d="M35 160 A34 34 0 0 0 99 160 z"/>' +
        '<circle class="ln" cx="67" cy="150" r="34"/>' +
        '<rect class="bg" x="58" y="62" width="18" height="58"/><path class="ln" d="M58 119 V62 M76 119 V92 M76 78 V62"/>' +
        '<line class="ln thick" x1="67" y1="30" x2="67" y2="84"/><circle class="solid" cx="67" cy="85" r="3.5"/>' +
        '<g transform="translate(76,85) rotate(22)"><rect class="bg ln" x="0" y="-7" width="190" height="14"/><rect class="liq ln" x="34" y="-15" width="118" height="30"/><rect class="bg ln" x="34" y="-7" width="118" height="14"/>' +
        '<path class="ln" d="M132 15 V30 M56 -15 V-30"/></g>' +
        beaker(232, 172, 56, 56, 22) + '<circle class="liq-drop" cx="254" cy="166" r="3.5"/>' +
        flame(67, 228) +
        lab(84, 26, t('thermometer: reads the|boiling point of the vapour'), 80, 28, 70, 40) +
        lab(196, 78, t('cooling water out'), 192, 76, 140, 84, null) +
        lab(248, 98, t('condenser:|vapour cools|to a liquid'), 244, 102, 197, 117) +
        lab(160, 200, t('cooling|water in'), 164, 196, 185, 166, 'end') +
        lab(296, 196, t('distillate'), 294, 198, 282, 212) +
        lab(4, 112, t('mixture'), 30, 116, 52, 168) +
        lab(22, 222, t('heat'), 50, 218, 58, 218));
    },
    recrystallization: function () {
      function cap(x, y, n, lines) { return '<text class="num" x="' + x + '" y="' + y + '">' + n + '</text>' + lab(x + 16, y, lines); }
      return svgWrap('0 0 360 330',
        /* 1 dissolve hot */
        beaker(60, 22, 60, 62, 40) + grains([[76, 76], [90, 78], [104, 76]]) + flame(90, 116) +
        cap(8, 134, '1', t('Dissolve in the minimum|volume of hot solvent.')) +
        /* 2 filter hot */
        funnel(270, 14, 34, true) + '<polygon class="solid" points="262,34 278,34 272,42 268,42"/>' + beaker(244, 56, 52, 36, 16) +
        cap(188, 134, '2', t('Filter while hot:|insoluble impurities|stay on the paper.')) +
        /* 3 cool */
        beaker(60, 186, 60, 62, 40) + crystals([[70, 238], [84, 239], [98, 238], [77, 229], [92, 230], [106, 236]]) +
        cap(8, 272, '3', t('Cool slowly: crystals form.|Soluble impurities stay|dissolved.')) +
        /* 4 filter, rinse, dry */
        funnel(270, 178, 34, true) + crystals([[258, 190], [268, 196], [276, 190]]) + beaker(244, 220, 52, 36, 16) +
        cap(188, 272, '4', t('Filter, rinse with a little|cold solvent, then dry|the crystals.')));
    },
    chromatography: function () {
      return svgWrap('0 0 360 235',
        '<rect class="liq" x="121" y="196" width="118" height="23"/>' +
        '<rect class="paper" x="158" y="34" width="44" height="174"/>' +
        '<path class="ln" d="M120 30 V220 H240 V30"/>' +
        '<line class="ln thick" x1="112" y1="26" x2="248" y2="26"/>' +
        '<line class="ln thin" x1="158" y1="182" x2="202" y2="182"/>' +
        '<circle class="ln" cx="180" cy="182" r="4"/>' +
        '<circle class="solid" cx="180" cy="150" r="5"/><circle class="solid" cx="180" cy="108" r="5"/><circle class="solid" cx="180" cy="72" r="5"/>' +
        '<line class="ln dash" x1="158" y1="52" x2="202" y2="52"/>' +
        lab(4, 22, t('lid'), 26, 20, 112, 25) +
        lab(256, 50, t('solvent front'), 252, 48, 204, 52) +
        lab(256, 96, t('separated dyes:|each travels a|different distance'), 252, 104, 187, 108) +
        lab(4, 94, t('chromatography|paper'), 100, 98, 157, 110) +
        lab(4, 162, t('pencil baseline|with the start|spot'), 92, 172, 157, 181) +
        lab(256, 190, t('solvent: its level|starts below|the baseline'), 252, 200, 236, 206));
    }
  };

  var PROPS = [
    { id: 'sol', label: t('Solubility in water: one solid dissolves, the other does not.') },
    { id: 'insol', label: t('One part is an undissolved solid, the other is a liquid. The solid particles are too large to pass through filter paper.') },
    { id: 'vol', label: t('Volatility: one part has a much lower boiling point, so it turns to vapour more easily.') },
    { id: 'hotcold', label: t('Solubility changes with temperature: the solid is much more soluble in hot solvent than in cold solvent.') },
    { id: 'attract', label: t('The parts are attracted to paper and to a solvent by different amounts.') }
  ];
  var TECHS = [
    { id: 'solvation', label: t('Solvation (dissolving), then filtration') },
    { id: 'filtration', label: t('Filtration') },
    { id: 'evaporation', label: t('Evaporation, then crystallization') },
    { id: 'distillation', label: t('Distillation') },
    { id: 'recrystallization', label: t('Recrystallization') },
    { id: 'chromatography', label: t('Paper chromatography') }
  ];
  var MIXTURES = [
    { id: 'sandwater', label: t('Sand in salt water'), mix: t('Sand stirred into salt water.'), want: t('the sand removed from the liquid'),
      prop: 'insol', tech: 'filtration',
      propWhy: t('The sand has not dissolved. Its grains are far too large to pass through the tiny holes in filter paper. The water and the dissolved salt pass through.'),
      techWhy: t('Filtration separates an insoluble solid from a liquid. The sand is the <strong>residue</strong>. The salt solution is the <strong>filtrate</strong>. Filtration cannot remove the dissolved salt.'),
      propHints: { sol: t('There is only one undissolved solid here. The salt is already dissolved.'), vol: t('True, but it is a slow way to get sand out of water. Look for the simplest difference.'), hotcold: t('Sand does not dissolve in hot water either.'), attract: t('That is the idea behind chromatography, which separates dissolved substances.') } },
    { id: 'sandsalt', label: t('Dry sand and salt'), mix: t('A dry mixture of sand and salt (both solids).'), want: t('the sand and the salt in separate containers'),
      prop: 'sol', tech: 'solvation',
      propWhy: t('Salt is soluble in water. Sand is insoluble.'),
      techWhy: t('Add water and stir. The salt dissolves (solvation) and the sand does not. Then filter: sand is the residue, salt solution is the filtrate. Evaporate the water from the filtrate to get the salt back, and dry the sand.'),
      propHints: { insol: t('Both parts are solids at the start. There is no liquid to filter yet.'), vol: t('Both solids have very high boiling points. Heating will not separate them in a school laboratory.'), hotcold: t('That difference is used to purify one solid, not to separate these two.'), attract: t('That is the idea behind chromatography, which separates dissolved substances.') } },
    { id: 'crystals', label: t('Copper(II) sulfate solution'), mix: t('Copper(II) sulfate dissolved in water.'), want: t('solid copper(II) sulfate crystals'),
      prop: 'vol', tech: 'evaporation',
      propWhy: t('Water is volatile: it turns to vapour when heated. The dissolved solid has a very high boiling point and stays behind.'),
      techWhy: t('Heat gently to evaporate some of the water until the solution is saturated. Then leave it to cool so that crystals form (crystallization). You want the solid, so the water can escape into the air.'),
      propHints: { sol: t('There is only one solid here, and it is already dissolved.'), insol: t('The solid is dissolved, so its particles pass through filter paper with the water.'), hotcold: t('True for many solids, but here there are no impurities to remove. Which difference lets you remove the water?'), attract: t('There is only one dissolved substance, so there is nothing to spread out on paper.') } },
    { id: 'purewater', label: t('Salt water (you want the water)'), mix: t('Salt dissolved in water.'), want: t('pure water'),
      prop: 'vol', tech: 'distillation',
      propWhy: t('Water boils at 100 °C. Salt has a very high boiling point and does not vaporize.'),
      techWhy: t('Distillation boils the water and then condenses the vapour back to a liquid in a separate container. The liquid collected is the <strong>distillate</strong>. The salt stays in the flask. Evaporation would lose the water you want.'),
      propHints: { sol: t('There is only one solid here, and it is already dissolved.'), insol: t('The salt is dissolved, so it passes through filter paper with the water.'), hotcold: t('That helps to purify a solid. Here you want the liquid.'), attract: t('Chromatography separates tiny amounts for identification. It would not give you a beaker of water.') } },
    { id: 'ethanol', label: t('Ethanol and water'), mix: t('Ethanol and water, two liquids that mix completely.'), want: t('the ethanol separated from the water'),
      prop: 'vol', tech: 'distillation',
      propWhy: t('Ethanol boils at 78 °C and water at 100 °C. Ethanol is more volatile.'),
      techWhy: t('On heating, the vapour contains more of the liquid with the lower boiling point (ethanol). The condenser turns the vapour back into a liquid, which is collected as the distillate.'),
      propHints: { sol: t('Both parts are liquids, and they mix completely.'), insol: t('There is no undissolved solid. Both liquids pass through filter paper.'), hotcold: t('That applies to a solid dissolved in a solvent.'), attract: t('Chromatography separates tiny amounts for identification, not two bulk liquids.') } },
    { id: 'ink', label: t('Dyes in black ink'), mix: t('Black ink, a solution of several coloured dyes.'), want: t('to find out how many dyes the ink contains'),
      prop: 'attract', tech: 'chromatography',
      propWhy: t('Each dye is attracted to the paper and dissolves in the moving solvent by a different amount.'),
      techWhy: t('The solvent moves up the paper and carries the dyes with it. A dye that is more soluble in the solvent and less attracted to the paper travels further. Each dye ends up at a different height.'),
      propHints: { sol: t('All the dyes are dissolved in the same ink.'), insol: t('The dyes are dissolved, so they pass through filter paper together.'), vol: t('Dyes are not volatile. Heating removes the solvent but leaves the dyes mixed together.'), hotcold: t('That would not separate several dissolved dyes from each other.') } },
    { id: 'recryst', label: t('Impure solid product'), mix: t('An impure solid product from a reaction. It contains small amounts of other solids.'), want: t('pure, dry crystals of the product'),
      prop: 'hotcold', tech: 'recrystallization',
      propWhy: t('The product is very soluble in the hot solvent but much less soluble in the cold solvent. Small amounts of soluble impurities stay dissolved when the solution cools.'),
      techWhy: t('Dissolve the solid in the minimum volume of hot solvent. Filter hot to remove insoluble impurities. Cool so that the product crystallizes. Filter, rinse with a little cold solvent and dry.'),
      propHints: { sol: t('Close. But one filtration cannot remove impurities that also dissolve.'), insol: t('Everything is solid at the start. There is no liquid to filter yet.'), vol: t('The solids are not volatile.'), attract: t('Chromatography separates tiny amounts for identification. It would not give you a useful mass of product.') } }
  ];
  var TECH_HINTS = {
    solvation: t('Solvation is the first step when you start with two solids, one soluble and one insoluble.'),
    filtration: t('Filtration only removes a solid that has not dissolved. Dissolved particles pass through the paper.'),
    evaporation: t('Evaporation keeps the dissolved solid and loses the solvent into the air. Check which part you want to keep.'),
    distillation: t('Distillation collects the liquid that boils off. Check which part you want to keep.'),
    recrystallization: t('Recrystallization purifies a solid that has small amounts of impurities.'),
    chromatography: t('Paper chromatography separates small amounts of dissolved substances so that you can identify them.')
  };

  var DIAGRAMS = {
    filtration: { name: t('Filtration'), alt: t('Labelled diagram of filtration') },
    solvation: { name: t('Solvation'), alt: t('Labelled diagram of solvation') },
    evaporation: { name: t('Evaporation and crystallization'), alt: t('Labelled diagram of evaporation and crystallization') },
    distillation: { name: t('Distillation'), alt: t('Labelled diagram of distillation') },
    recrystallization: { name: t('Recrystallization'), alt: t('Labelled diagram of recrystallization') },
    chromatography: { name: t('Paper chromatography'), alt: t('Labelled diagram of paper chromatography') }
  };

  S1.widgets.register('s1-1.separate', function (w) {
    var setProp = w.readoutItem(t('Property that differs'), { text: true });
    var setTech = w.readoutItem(t('Technique'), { text: true });
    var box = h('div', { 'class': 'p11-chooser' });
    w.stage.appendChild(box);
    var current = MIXTURES[0];
    w.select({
      label: t('Mixture'), value: current.id,
      options: MIXTURES.map(function (m) { return { value: m.id, label: m.label }; }),
      onChange: function (v) { current = MIXTURES.filter(function (m) { return m.id === v; })[0]; render(); }
    });
    w.button(t('Start again'), function () { render(); });

    function optionList(items, name, onPick) {
      var wrap = h('div', { 'class': 'p11-opts', role: 'group', 'aria-label': name });
      items.forEach(function (it) {
        var b = h('button', { type: 'button', 'class': 'btn btn--small', 'aria-pressed': 'false', 'data-id': it.id }, it.label);
        b.addEventListener('click', function () {
          Array.prototype.forEach.call(wrap.children, function (c) { c.setAttribute('aria-pressed', 'false'); });
          b.setAttribute('aria-pressed', 'true');
          onPick(it.id, wrap);
        });
        wrap.appendChild(b);
      });
      return wrap;
    }
    function lock(wrap) { Array.prototype.forEach.call(wrap.children, function (c) { if (c.getAttribute('aria-pressed') !== 'true') c.disabled = true; }); }

    function render() {
      var m = current;
      box.innerHTML = '';
      setProp(t('Not chosen yet')); setTech(t('Not chosen yet'));
      box.appendChild(h('p', { 'class': 'p11-task' }, t('<strong>You have:</strong> {mix}<br><strong>You want:</strong> {want}.', { mix: m.mix, want: m.want })));
      box.appendChild(h('p', { 'class': 'p11-step' }, t('Step 1. Which physical property is different?')));
      var fb1 = h('div', { 'class': 'feedback', role: 'status' });
      var step2 = h('div', {});
      box.appendChild(optionList(PROPS, t('Property that differs'), function (id, wrap) {
        if (id === m.prop) {
          feedback(fb1, true, '<p>' + m.propWhy + '</p>');
          lock(wrap);
          setProp(PROPS.filter(function (q) { return q.id === id; })[0].label);
          if (!step2.firstChild) showStep2();
        } else feedback(fb1, false, '<p>' + (m.propHints[id] || t('Try another property.')) + '</p>');
      }));
      box.appendChild(fb1);
      box.appendChild(step2);

      function showStep2() {
        step2.appendChild(h('p', { 'class': 'p11-step' }, t('Step 2. Which technique uses that difference to give you what you want?')));
        var fb2 = h('div', { 'class': 'feedback', role: 'status' });
        var out = h('div', {});
        step2.appendChild(optionList(TECHS, t('Technique'), function (id, wrap) {
          if (id === m.tech) {
            feedback(fb2, true, '<p>' + m.techWhy + '</p>');
            lock(wrap);
            setTech(TECHS.filter(function (q) { return q.id === id; })[0].label);
            var parts = m.tech === 'solvation' ? ['solvation', 'filtration'] : m.tech === 'evaporation' ? ['evaporation'] : [m.tech];
            out.innerHTML = parts.map(function (k) {
              return '<div class="p11-schem"><p class="p11-schem__title">' + DIAGRAMS[k].name + '</p>' + SCHEM[k]() + '</div>';
            }).join('');
            Array.prototype.forEach.call(out.querySelectorAll('svg'), function (s, i) { s.setAttribute('aria-label', DIAGRAMS[parts[i]].alt); });
          } else feedback(fb2, false, '<p>' + TECH_HINTS[id] + '</p>');
        }));
        step2.appendChild(fb2);
        step2.appendChild(out);
      }
    }
    render();
  });

  /* Static gallery of every schematic (used once on the page, below the table of techniques). */
  S1.widgets.register('s1-1.apparatus', function (w) {
    var names = {};
    Object.keys(DIAGRAMS).forEach(function (k) { names[k] = DIAGRAMS[k].name; });
    var keys = Object.keys(names), cur = w.options.start || 'filtration';
    var out = h('div', { 'class': 'p11-schem' });
    w.select({ label: t('Technique'), value: cur, options: keys.map(function (k) { return { value: k, label: names[k] }; }), onChange: function (v) { cur = v; show(); } });
    w.stage.appendChild(out);
    function show() { out.innerHTML = SCHEM[cur](); out.querySelector('svg').setAttribute('aria-label', DIAGRAMS[cur].alt); }
    show();
  });

  /* ------------------------------------------------------------------------
     Classify-it sorter.
     ------------------------------------------------------------------------ */
  var BINS = [
    { id: 'element', label: t('Element') },
    { id: 'compound', label: t('Compound') },
    { id: 'homo', label: t('Homogeneous mixture') },
    { id: 'hetero', label: t('Heterogeneous mixture') }
  ];
  var ITEMS = [
    { id: 'cu', label: t('Copper wire'), bin: 'element', why: t('Copper contains only copper atoms.') },
    { id: 'o2', label: t('Oxygen gas, {formula}', { formula: 'O<sub>2</sub>' }), bin: 'element', why: t('The molecules contain two atoms, but both are oxygen atoms. One type of atom means an element.') },
    { id: 'dia', label: t('Diamond'), bin: 'element', why: t('Diamond contains only carbon atoms.') },
    { id: 'h2o', label: t('Distilled water, {formula}', { formula: 'H<sub>2</sub>O' }), bin: 'compound', why: t('Hydrogen and oxygen atoms are chemically bonded in a fixed 2 : 1 ratio.') },
    { id: 'nacl', label: t('Sodium chloride crystals, {formula}', { formula: 'NaCl' }), bin: 'compound', why: t('Sodium and chlorine are chemically bonded in a fixed 1 : 1 ratio.') },
    { id: 'co2', label: t('Carbon dioxide, {formula}', { formula: 'CO<sub>2</sub>' }), bin: 'compound', why: t('Carbon and oxygen atoms are chemically bonded in a fixed 1 : 2 ratio.') },
    { id: 'air', label: t('Clean, dry air'), bin: 'homo', why: t('Air is several gases (mainly nitrogen and oxygen) mixed evenly. The composition is the same throughout.') },
    { id: 'salt', label: t('Salt dissolved in water'), bin: 'homo', why: t('A solution is a mixture with the same composition throughout. You cannot see separate parts.') },
    { id: 'brass', label: t('Brass (copper and zinc)'), bin: 'homo', why: t('Brass is an alloy. The copper and zinc atoms are mixed evenly, and the ratio can vary, so it is a mixture and not a compound.') },
    { id: 'sand', label: t('Sand stirred into water'), bin: 'hetero', why: t('You can see separate regions of sand and of water. The composition is not the same throughout.') },
    { id: 'oil', label: t('Oil and water'), bin: 'hetero', why: t('The two liquids form separate layers. The composition is not the same throughout.') },
    { id: 'granite', label: t('Granite rock'), bin: 'hetero', why: t('You can see grains of different minerals. The composition is not the same throughout.') }
  ];
  var WRONG = {
    'element>compound': t('Check the types of atom. A compound needs atoms of two or more different elements.'),
    'element>homo': t('A mixture contains more than one substance. This is a single substance.'),
    'element>hetero': t('A mixture contains more than one substance. This is a single substance.'),
    'compound>element': t('An element has only one type of atom. Look at the formula: how many different elements are in it?'),
    'compound>homo': t('The different atoms here are chemically bonded in a fixed ratio. In a mixture the parts are not bonded to each other and the ratio can vary.'),
    'compound>hetero': t('The different atoms here are chemically bonded in a fixed ratio. That makes a single pure substance, not a mixture.'),
    'homo>element': t('There is more than one substance here.'),
    'homo>compound': t('The substances here are not chemically bonded to each other, and their ratio can vary. That makes a mixture.'),
    'homo>hetero': t('It is a mixture, but can you see separate parts? If the composition is the same throughout, it is homogeneous.'),
    'hetero>element': t('There is more than one substance here.'),
    'hetero>compound': t('The substances here are not chemically bonded to each other, and their ratio can vary. That makes a mixture.'),
    'hetero>homo': t('It is a mixture, but the parts are not evenly spread. You can see separate regions.')
  };

  S1.widgets.register('s1-1.sorter', function (w) {
    var setDone = w.readoutItem(t('Sorted'));
    var setFirst = w.readoutItem(t('Right first time'));
    var box = h('div', { 'class': 'p11-sorter' });
    w.stage.appendChild(box);
    w.button(t('Start again'), function () { start(); });
    var order, placed, tried, firstRight, selected;

    function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), tmp = a[i]; a[i] = a[j]; a[j] = tmp; } return a; }
    function start() { order = shuffle(ITEMS.slice()); placed = {}; tried = {}; firstRight = 0; selected = order[0].id; render(null); }

    function render(fb) {
      box.innerHTML = '';
      var remaining = order.filter(function (it) { return !placed[it.id]; });
      if (remaining.length && !remaining.some(function (it) { return it.id === selected; })) selected = remaining[0].id;
      var name = 'p11-sort-' + (w.el.id || 'a');
      if (remaining.length) {
        box.appendChild(h('p', { 'class': 'p11-step' }, t('1. Pick a substance')));
        var chips = h('div', { 'class': 'chips', role: 'radiogroup', 'aria-label': t('Substances still to sort') });
        remaining.forEach(function (it) {
          var lbl = h('label', { 'class': 'chip' }, '<input type="radio" name="' + name + '" value="' + it.id + '"' + (it.id === selected ? ' checked' : '') + '><span>' + it.label + '</span>');
          lbl.firstChild.addEventListener('change', function () { selected = it.id; });
          chips.appendChild(lbl);
        });
        box.appendChild(chips);
        box.appendChild(h('p', { 'class': 'p11-step' }, t('2. Choose where it belongs')));
      } else {
        box.appendChild(h('p', { 'class': 'p11-step' }, t('All sorted. You got {n} of {total} right first time.', { n: firstRight, total: ITEMS.length })));
      }
      var fbNode = h('div', { 'class': 'feedback', role: 'status' });
      var bins = h('div', { 'class': 'p11-bins' });
      BINS.forEach(function (b) {
        var cell = h('div', { 'class': 'p11-bin' });
        var btn = h('button', { type: 'button', 'class': 'btn btn--small', 'data-bin': b.id }, b.label);
        if (!remaining.length) btn.disabled = true;
        btn.addEventListener('click', function () { place(b.id); });
        cell.appendChild(btn);
        var ul = h('ul', { 'aria-label': t('{bin}: substances placed here', { bin: b.label }) });
        order.forEach(function (it) { if (placed[it.id] && it.bin === b.id) ul.appendChild(h('li', {}, it.label)); });
        cell.appendChild(ul);
        bins.appendChild(cell);
      });
      box.appendChild(bins);
      box.appendChild(fbNode);
      if (fb) feedback(fbNode, fb.right, fb.html);
      setDone(t('{n} of {total}', { n: Object.keys(placed).length, total: ITEMS.length }));
      setFirst(String(firstRight));
      if (fb && fb.focus) { var f = box.querySelector('[data-bin="' + fb.focus + '"]'); if (f && !f.disabled) f.focus(); }
    }
    function place(binId) {
      var it = ITEMS.filter(function (q) { return q.id === selected; })[0];
      if (!it || placed[it.id]) return;
      if (it.bin === binId) {
        if (!tried[it.id]) firstRight++;
        placed[it.id] = true;
        render({ right: true, html: '<p>' + t('<strong>{name}</strong>: {text}', { name: it.label, text: it.why }) + '</p>', focus: binId });
      } else {
        tried[it.id] = true;
        render({ right: false, html: '<p>' + t('<strong>{name}</strong>: {text}', { name: it.label, text: WRONG[it.bin + '>' + binId] }) + '</p>', focus: binId });
      }
    }
    start();
  });
})();
