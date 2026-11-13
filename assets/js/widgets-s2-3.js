/* ==========================================================================
   Widgets for topic 2.3 — The metallic model.
   s2-3.lattice   Metallic lattice model: at rest, voltage, heat, hammer
                  (with an ionic crystal beside it for the hammer test)
   s2-3.melting   Melting point trend explorer: predict, then reveal
   s2-3.explain   "Explain the property" builder: choose the marking points
   The widget API (w) is documented in docs/AUTHORING.md.
   Data: melting points (°C) are from section 8 and ionic radii (10^-12 m = pm)
   from section 10 of the IB chemistry data booklet (first assessment 2025).
   Every user-visible string goes through t() so the site can be translated.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, el = S1.util.el, clamp = S1.util.clamp;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var MINUS = '−';

  function font(w, px, bold) { return (bold ? '700 ' : '') + px + 'px ' + (w.color('--font-body') || 'sans-serif'); }
  function isSL() { return S1.level && S1.level.get() === 'sl'; }

  /* A labelled <select> whose options can be rebuilt (the AHL option comes and goes). */
  function makeSelect(w, label, onChange) {
    var id = S1.util.uid('ctl');
    var s = el('select', { class: 'select', id: id });
    s.addEventListener('change', function () { onChange(s.value); });
    w.controls.appendChild(el('div', { class: 'control', style: 'flex:0 1 auto' }, [
      el('label', { class: 'control__label', for: id, text: label }), s]));
    return {
      el: s,
      fill: function (options, value) {
        s.innerHTML = '';
        options.forEach(function (o) { s.appendChild(el('option', { value: o.value, text: o.label })); });
        s.value = value;
        if (s.value !== value && options.length) s.value = options[0].value;
        return s.value;
      }
    };
  }

  /* ==========================================================================
     1. Metallic lattice model
     ========================================================================== */
  S1.widgets.register('s2-3.lattice', function (w) {
    var ROWS = 4, NE = 48;
    var mode = 'rest', clock = 0, hit = false, slide = 0, crack = 0;
    var temps = [], electrons = [], phases = [];
    var i;
    for (i = 0; i < NE; i++) electrons.push({ x: Math.random(), y: Math.random(), a: Math.random() * 6.283 });
    for (i = 0; i < 80; i++) phases.push(Math.random() * 6.283);

    var MODES = [
      { value: 'rest', label: t('No voltage, no heating') },
      { value: 'volt', label: t('Apply a voltage') },
      { value: 'heat', label: t('Heat the left end') },
      { value: 'hammer', label: t('Hit it with a hammer') }
    ];
    var sel = w.select({ label: t('What happens to the metal'), options: MODES, value: mode, onChange: function (v) { setMode(v); } });
    var btnHit = w.button(t('Hit with the hammer'), doHit, { primary: true });
    var btnPlay = w.button(t('Pause'), function () {
      if (loop.running) loop.stop(); else loop.start(true);
      syncPlay();
    });
    w.button(t('Reset'), function () { reset(); cv.draw(); });

    var cv = w.canvas({
      height: function (width) {
        var two = width < 420 ? 18 : 0, s;
        if (mode === 'hammer') {
          s = spacingHammer(width);
          return (width >= 620 ? 8 + ROWS * s + 96 : 8 + 2 * (ROWS * s + 108)) + 30 + two;
        }
        s = spacing(width);
        return ROWS * s + two + (mode === 'heat' ? 142 : mode === 'volt' ? 96 : 80);
      },
      label: t('Model of a metal: rows of positive ions (cations) in fixed positions, with small delocalized electrons moving between them')
    });
    var setSee = w.readoutItem(t('What the model shows'), { text: true });
    var setExam = w.readoutItem(t('How to write it in an exam'), { text: true });

    function cols(width) { return width < 480 ? 7 : width < 700 ? 9 : 12; }
    function spacing(width) { return Math.min(52, (width - 2 * (mode === 'volt' ? 44 : 14)) / cols(width)); }
    function spacingHammer(width) { return Math.min(44, (width >= 620 ? (width - 48) / 2 : width - 28) / 7.15); }

    function reset() {
      hit = false; slide = 0; crack = 0; temps = [];
      btnHit.disabled = false;
      describe();
    }
    function setMode(v) {
      mode = v; sel.set(v); reset();
      btnHit.hidden = mode !== 'hammer';
      cv.resize();
    }
    function doHit() {
      if (hit) return;
      hit = true; btnHit.disabled = true;
      if (!loop.running) { slide = 1; crack = 1; cv.draw(); }
      describe();
    }
    function syncPlay() { btnPlay.textContent = loop.running ? t('Pause') : t('Play'); }

    function describe() {
      if (mode === 'rest') {
        setSee(t('The cations stay in their lattice positions and only vibrate. The delocalized electrons move randomly in all directions between them.'));
        setExam(t('A metallic bond is the electrostatic attraction between a lattice of cations and delocalized electrons.'));
      } else if (mode === 'volt') {
        setSee(t('The electrons still move randomly, but now they also drift towards the positive terminal. New electrons enter from the negative terminal. The cations do not travel.'));
        setExam(t('Metals conduct electricity because the delocalized electrons are free to move through the structure and carry charge.'));
      } else if (mode === 'heat') {
        setSee(t('Cations at the hot end vibrate more. The delocalized electrons move faster there and carry kinetic energy along the metal. Close-packed cations also pass vibrations to their neighbours.'));
        setExam(t('Metals conduct heat because the delocalized electrons and the closely packed cations transfer kinetic energy through the structure.'));
      } else if (!hit) {
        setSee(t('Press “Hit with the hammer”. Watch the top two layers of each lattice.'));
        setExam(t('Metals are malleable because the layers of cations can slide over each other without breaking the metallic bond.'));
      } else {
        setSee(t('Metal: the layers of cations slid to new positions. Delocalized electrons still surround every cation, so the attraction remains and the metal only changes shape. Ionic crystal: ions with the same charge are now next to each other. They repel, and the crystal splits.'));
        setExam(t('Metals are malleable because the layers of cations can slide over each other without breaking the metallic bond. The bond is non-directional: the delocalized electrons attract the cations in every direction.'));
      }
    }

    /* ---- physics of the picture (positions are fractions of the lattice box) ---- */
    function step(dt) {
      clock += dt;
      var width = cv.width, nc = mode === 'hammer' ? 6 : cols(width), n = Math.min(NE, nc * ROWS);
      var k, e, speed, c;
      if (mode === 'heat') {
        if (temps.length !== nc) { temps = []; for (k = 0; k < nc; k++) temps.push(0); }
        var sub = 4, kk = 5 * dt / sub, s2, nt;
        for (s2 = 0; s2 < sub; s2++) {
          nt = temps.slice(); nt[0] = 1;
          for (k = 1; k < nc; k++) nt[k] = temps[k] + kk * (temps[k - 1] - 2 * temps[k] + (k + 1 < nc ? temps[k + 1] : temps[k]));
          temps = nt;
        }
      }
      if (mode === 'hammer' && hit) {
        if (slide < 1) slide = Math.min(1, slide + dt / 0.7);
        else if (crack < 1) crack = Math.min(1, crack + dt / 0.6);
      }
      for (k = 0; k < n; k++) {
        e = electrons[k];
        e.a += (Math.random() - 0.5) * 9 * dt * 3;
        speed = 1.5;
        if (mode === 'heat') { c = clamp(Math.floor(e.x * nc), 0, nc - 1); speed *= 1 + 1.6 * (temps[c] || 0); }
        e.x += (Math.cos(e.a) * speed + (mode === 'volt' ? 1.1 : 0)) * dt / nc;
        e.y += Math.sin(e.a) * speed * dt / ROWS;
        if (e.y < 0) { e.y = -e.y; e.a = -e.a; }
        if (e.y > 1) { e.y = 2 - e.y; e.a = -e.a; }
        if (mode === 'volt') {
          if (e.x > 1) { e.x -= 1; e.y = Math.random(); }
          if (e.x < 0) e.x = 0;
        } else {
          if (e.x < 0) { e.x = -e.x; e.a = Math.PI - e.a; }
          if (e.x > 1) { e.x = 2 - e.x; e.a = Math.PI - e.a; }
        }
        // keep the electron dots in the spaces between the cations, so both stay readable
        var ux = e.x * nc, uy = e.y * ROWS, sx = Math.floor(ux) + 0.5, sy = Math.floor(uy) + 0.5;
        var ddx = ux - sx, ddy = uy - sy, dd = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dd < 0.4) {
          if (dd < 0.001) { ddx = 0.01; ddy = 0; dd = 0.01; }
          e.x = (sx + ddx / dd * 0.4) / nc; e.y = (sy + ddy / dd * 0.4) / ROWS;
        }
        e.x = clamp(e.x, 0, 1); e.y = clamp(e.y, 0, 1);
      }
    }

    /* ---- drawing helpers ---- */
    function ion(ctx, x, y, r, sign, fill, stroke, ink) {
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832);
      ctx.fillStyle = fill; ctx.fill();
      ctx.lineWidth = 1.5; ctx.strokeStyle = stroke; ctx.stroke();
      ctx.fillStyle = ink; ctx.font = font(w, Math.max(11, Math.round(r * 1.1)), true);
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(sign, x, y + 0.5);
    }
    function electron(ctx, x, y) {
      ctx.beginPath(); ctx.arc(x, y, 3.6, 0, 6.2832);
      ctx.fillStyle = w.color('--accent'); ctx.fill();
      ctx.lineWidth = 1; ctx.strokeStyle = w.color('--surface'); ctx.stroke();
    }
    function legend(ctx, x, y, ink2, twoLines) {
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.font = font(w, 12);
      ion(ctx, x + 8, y, 8, '+', w.color('--surface-2'), w.color('--ink-2'), w.color('--ink'));
      ctx.font = font(w, 12); ctx.textAlign = 'left'; ctx.fillStyle = ink2;
      var a = t('cation (positive ion)');
      ctx.fillText(a, x + 22, y);
      var x2 = x + 22 + ctx.measureText(a).width + 18;
      var x3 = x2, y3 = y;
      if (twoLines) { x3 = x + 4; y3 = y + 18; }
      electron(ctx, x3 + 4, y3);
      ctx.fillStyle = ink2; ctx.textAlign = 'left'; ctx.font = font(w, 12);
      ctx.fillText(t('delocalized electron'), x3 + 18, y3);
    }

    function drawMetal(ctx, x0, y0, s, nc, opt) {
      var surface2 = w.color('--surface-2'), ink = w.color('--ink'), ink2 = w.color('--ink-2');
      var r = s * 0.3, c, rw, k, amp, ph, jx, jy, shift, n = Math.min(NE, nc * ROWS), e, ex, lo;
      opt = opt || {};
      for (rw = 0; rw < ROWS; rw++) for (c = 0; c < nc; c++) {
        k = rw * nc + c; ph = phases[k % phases.length];
        amp = s * (0.012 + (mode === 'heat' ? 0.085 * (temps[c] || 0) : 0));
        jx = amp * Math.sin(clock * 21 + ph); jy = amp * Math.cos(clock * 17 + ph * 2);
        shift = opt.slide && rw < 2 ? opt.slide * s : 0;
        ion(ctx, x0 + (c + 0.5) * s + shift + jx, y0 + (rw + 0.5) * s + jy, r, '+', surface2, ink2, ink);
      }
      for (k = 0; k < n; k++) {
        e = electrons[k]; ex = e.x * nc * s;
        if (opt.slide) { lo = e.y < 0.5 ? opt.slide * s : 0; ex = lo + e.x * nc * s; }
        electron(ctx, x0 + ex, y0 + e.y * ROWS * s);
      }
    }

    function drawIonic(ctx, x0, y0, s, nc) {
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), soft = w.color('--accent-soft'), surface2 = w.color('--surface-2');
      var rw, c, pos, shift, lift;
      for (rw = 0; rw < ROWS; rw++) for (c = 0; c < nc; c++) {
        pos = (rw + c) % 2 === 0;
        shift = rw < 2 ? slide * s : 0; lift = rw < 2 ? -crack * s * 0.45 : 0;
        ion(ctx, x0 + (c + 0.5) * s + shift, y0 + (rw + 0.5) * s + lift, pos ? s * 0.24 : s * 0.38, pos ? '+' : MINUS, pos ? surface2 : soft, ink2, ink);
      }
      if (slide >= 1) {
        // like charges now face each other across the break: mark the repulsion
        ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 1.5;
        var yb = y0 + 2 * s - crack * s * 0.22;
        for (c = 1; c < nc; c++) {
          var x = x0 + (c + 0.5) * s, h = s * 0.16 + crack * s * 0.1;
          ctx.beginPath(); ctx.moveTo(x, yb - h); ctx.lineTo(x, yb + h); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(x - 4, yb - h + 5); ctx.lineTo(x, yb - h); ctx.lineTo(x + 4, yb - h + 5); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(x - 4, yb + h - 5); ctx.lineTo(x, yb + h); ctx.lineTo(x + 4, yb + h - 5); ctx.stroke();
        }
      }
    }

    cv.draw(function (ctx, width, height) {
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), line = w.color('--line-strong'), accent = w.color('--accent');
      var nc, s, x0, y0, k;
      if (mode !== 'hammer') {
        nc = cols(width);
        s = spacing(width);
        x0 = (width - nc * s) / 2; y0 = mode === 'heat' ? 34 : 22;
        ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.strokeRect(x0 - 3, y0 - 3, nc * s + 6, ROWS * s + 6);
        if (mode === 'volt') {
          // terminals: a long line for + and a short thick line for − is the circuit symbol; here we label them in words
          ctx.fillStyle = ink; ctx.font = font(w, 20, true); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(MINUS, x0 - 24, y0 + ROWS * s / 2); ctx.fillText('+', x0 + nc * s + 24, y0 + ROWS * s / 2);
          ctx.strokeStyle = ink; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.moveTo(x0 - 8, y0 + s * 0.6); ctx.lineTo(x0 - 8, y0 + ROWS * s - s * 0.6); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(x0 + nc * s + 8, y0 + s * 0.6); ctx.lineTo(x0 + nc * s + 8, y0 + ROWS * s - s * 0.6); ctx.stroke();
        }
        drawMetal(ctx, x0, y0, s, nc);
        var yb = y0 + ROWS * s + 22;
        ctx.textBaseline = 'middle';
        if (mode === 'volt') {
          ctx.fillStyle = accent; ctx.strokeStyle = accent; ctx.lineWidth = 2;
          var ax = width / 2 - 70, bx = width / 2 + 70;
          ctx.beginPath(); ctx.moveTo(ax, yb); ctx.lineTo(bx, yb); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(bx - 8, yb - 5); ctx.lineTo(bx, yb); ctx.lineTo(bx - 8, yb + 5); ctx.stroke();
          ctx.fillStyle = ink2; ctx.font = font(w, 12); ctx.textAlign = 'center';
          ctx.fillText(t('electrons drift towards the positive terminal'), width / 2, yb + 16);
          yb += 16;
        }
        if (mode === 'heat') {
          ctx.fillStyle = ink; ctx.font = font(w, 12, true); ctx.textAlign = 'left';
          ctx.fillText(t('heated end'), x0, 14);
          ctx.textAlign = 'right'; ctx.fillText(t('far end'), x0 + nc * s, 14);
          // strip: how strongly the cations in each column vibrate
          var top = yb - 8, hmax = 34;
          for (k = 0; k < nc; k++) {
            var hh = 3 + hmax * (temps[k] || 0);
            ctx.fillStyle = w.color('--ink-2');
            ctx.fillRect(x0 + k * s + s * 0.2, top + hmax + 3 - hh, s * 0.6, hh);
          }
          ctx.strokeStyle = line; ctx.beginPath(); ctx.moveTo(x0, top + hmax + 3.5); ctx.lineTo(x0 + nc * s, top + hmax + 3.5); ctx.stroke();
          ctx.fillStyle = ink2; ctx.font = font(w, 12); ctx.textAlign = 'center';
          ctx.fillText(t('bar height = how much the cations in that column vibrate'), width / 2, top + hmax + 18);
          yb = top + hmax + 18;
        }
        legend(ctx, Math.max(8, x0), yb + 22, ink2, width < 420);
      } else {
        nc = 6;
        var wide = width >= 620, pw = wide ? (width - 48) / 2 : width - 28;
        s = spacingHammer(width);
        var ph = ROWS * s + 96, p, px, py, titles = [t('Metal'), t('Ionic crystal, for comparison')];
        for (p = 0; p < 2; p++) {
          px = wide ? 16 + p * (pw + 16) : 14; py = wide ? 8 : 8 + p * (ph + 12);
          ctx.fillStyle = ink; ctx.font = font(w, 14, true); ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
          ctx.fillText(titles[p], px, py + 10);
          x0 = px + 4; y0 = py + 50;
          // the arrow shows the push of the hammer on the top two layers
          ctx.strokeStyle = ink; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(x0, y0 - 14); ctx.lineTo(x0 + s * 1.2, y0 - 14); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(x0 + s * 1.2 - 7, y0 - 19); ctx.lineTo(x0 + s * 1.2, y0 - 14); ctx.lineTo(x0 + s * 1.2 - 7, y0 - 9); ctx.stroke();
          ctx.fillStyle = ink2; ctx.font = font(w, 12); ctx.fillText(t('force'), x0 + s * 1.2 + 8, y0 - 14);
          if (p === 0) drawMetal(ctx, x0, y0, s, nc, { slide: slide });
          else drawIonic(ctx, x0, y0, s, nc);
          ctx.fillStyle = ink2; ctx.font = font(w, 12); ctx.textAlign = 'left';
          var note = p === 0
            ? (slide >= 1 ? t('layers slid: bond not broken') : t('layers of cations'))
            : (slide >= 1 ? t('like charges repel: crystal splits') : t('+ and − ions alternate'));
          ctx.fillText(note, x0, y0 + ROWS * s + 20);
        }
        legend(ctx, 14, (wide ? 8 + ph : 8 + 2 * (ph + 12)) + 12, ink2, width < 420);
      }
    });

    var loop = w.loop(function (dt) { step(dt); cv.draw(); });
    w.el.addEventListener('click', function () { window.setTimeout(syncPlay, 0); });

    btnHit.hidden = true;
    var start = w.options.start;
    if (start === 'volt' || start === 'heat' || start === 'hammer') setMode(start); else describe();
    loop.start();
    syncPlay();
  });

  /* ==========================================================================
     2. Melting point trend explorer
     ========================================================================== */
  // [symbol, ion, ionic radius / pm, delocalized electrons per atom, melting point / °C as printed in the booklet]
  var SETS = {
    p3: {
      rows: [['Na', 'Na+', 102, 1, '97.79'], ['Mg', 'Mg^2+', 72, 2, '650.0'], ['Al', 'Al^3+', 54, 3, '660.3']]
    },
    g1: {
      rows: [['Li', 'Li+', 76, 1, '180.5'], ['Na', 'Na+', 102, 1, '97.79'], ['K', 'K+', 138, 1, '63.38'], ['Rb', 'Rb+', 152, 1, '39.30'], ['Cs', 'Cs+', 167, 1, '28.44']]
    },
    d: {
      ahl: true,
      // [symbol, outer electron configuration, which electrons can delocalize (0 = 4s only, 1 = 3d and 4s), melting point]
      rows: [['K', '4s<sup>1</sup>', 0, '63.38'], ['Ca', '4s<sup>2</sup>', 0, '842.0'],
        ['Sc', '3d<sup>1</sup> 4s<sup>2</sup>', 1, '1541'], ['Ti', '3d<sup>2</sup> 4s<sup>2</sup>', 1, '1670'],
        ['V', '3d<sup>3</sup> 4s<sup>2</sup>', 1, '1910'], ['Cr', '3d<sup>5</sup> 4s<sup>1</sup>', 1, '1907'],
        ['Mn', '3d<sup>5</sup> 4s<sup>2</sup>', 1, '1246'], ['Fe', '3d<sup>6</sup> 4s<sup>2</sup>', 1, '1538'],
        ['Co', '3d<sup>7</sup> 4s<sup>2</sup>', 1, '1495'], ['Ni', '3d<sup>8</sup> 4s<sup>2</sup>', 1, '1455'],
        ['Cu', '3d<sup>10</sup> 4s<sup>1</sup>', 1, '1085']]
    }
  };

  S1.widgets.register('s2-3.melting', function (w) {
    var key = SETS[w.options.start] ? w.options.start : 'p3';
    var fixed = w.options.fixed != null;          // an instance pinned to one data set
    var guess = -1, revealed = false, chart = null;

    function setOptions() {
      var o = [{ value: 'p3', label: t('Across period 3: Na, Mg, Al') }, { value: 'g1', label: t('Down group 1: Li to Cs') }];
      if (!isSL()) o.push({ value: 'd', label: t('Additional HL: K, Ca and the transition elements Sc to Cu') });
      return o;
    }
    var sel = null;
    if (!fixed) {
      sel = makeSelect(w, t('Set of metals'), function (v) { key = v; restart(); });
      key = sel.fill(setOptions(), key);
      w.listen(document, 's1:levelchange', function () {
        var k2 = sel.fill(setOptions(), key);
        if (k2 !== key) { key = k2; restart(); }
      });
    }
    var btnReveal = w.button(t('Reveal the melting points'), reveal, { primary: true });
    w.button(t('Start again'), restart);

    var prompt = el('p', { class: 'mp-prompt' });
    var choices = el('div', { class: 'mp-choices', role: 'group' });
    var tableBox = el('div', { class: 'table-scroll', tabindex: '0' });
    var chartBox = el('div', { class: 'mp-chart' });
    var fb = el('div', { class: 'feedback', role: 'status' });
    w.stage.appendChild(prompt); w.stage.appendChild(choices); w.stage.appendChild(tableBox);
    w.stage.appendChild(fb); w.stage.appendChild(chartBox);
    var setHigh = w.readoutItem(t('Highest melting point'));
    var setLow = w.readoutItem(t('Lowest melting point'));

    function info() {
      if (key === 'p3') return {
        prompt: t('Look at the ions in the table. Predict: how does the melting point change from sodium to aluminium?'),
        options: [t('It rises'), t('It falls'), t('It stays about the same')], answer: 0,
        caption: t('Period 3 metals'),
        explain: t('The melting point rises from Na to Al. Going across, the charge on the cation rises from 1+ to 3+, each atom gives more delocalized electrons (1, 2, then 3) and the ionic radius falls. The electrostatic attraction between the cations and the delocalized electrons gets stronger, so more energy is needed to overcome it.') +
          ' ' + t('Notice that the step from Mg to Al is small. This simple model gives the direction of the trend. It does not give the size of each step.')
      };
      if (key === 'g1') return {
        prompt: t('Look at the ions in the table. Predict: how does the melting point change down group 1, from lithium to caesium?'),
        options: [t('It rises'), t('It falls'), t('It stays about the same')], answer: 1,
        caption: t('Group 1 metals'),
        explain: t('The melting point falls from Li to Cs. Every ion has a 1+ charge and every atom gives one delocalized electron. But the ionic radius increases down the group, so the delocalized electrons are further from the nucleus of each cation. The electrostatic attraction between the cations and the delocalized electrons gets weaker, so less energy is needed to overcome it.')
      };
      return {
        prompt: t('Potassium and calcium have only 4s electrons to delocalize. The transition elements also have 3d electrons. Predict: how do the melting points of Sc to Cu compare with K and Ca?'),
        options: [t('Much higher'), t('About the same'), t('Lower')], answer: 0,
        caption: t('Period 4: K, Ca and the transition elements Sc to Cu'),
        explain: t('Every transition element from Sc to Cu melts above 1000 °C, far higher than K and higher than Ca. In a transition element, 3d electrons are delocalized as well as 4s electrons. More delocalized electrons per atom means a stronger electrostatic attraction between the cations and the delocalized electrons.') +
          ' ' + t('The values do not rise smoothly from Sc to Cu. You are not asked to explain each value.')
      };
    }

    function table() {
      var set = SETS[key], inf = info(), h = '<table class="data"><caption>' + inf.caption + '</caption><thead><tr>';
      var mpHead = '<th scope="col" class="num">' + t('Melting point / °C') + '</th>';
      if (key === 'd') {
        h += '<th scope="col">' + t('Metal') + '</th><th scope="col">' + t('Outer electrons') + '</th><th scope="col">' + t('Electrons that can delocalize') + '</th>' + mpHead + '</tr></thead><tbody>';
        set.rows.forEach(function (r) {
          h += '<tr><th scope="row">' + r[0] + '</th><td class="mono" data-i18n="off">' + r[1] + '</td><td>' + (r[2] ? t('3d and 4s') : t('4s only')) +
            '</td><td class="num">' + (revealed ? r[3] : '?') + '</td></tr>';
        });
      } else {
        h += '<th scope="col">' + t('Metal') + '</th><th scope="col">' + t('Ion') + '</th><th scope="col" class="num">' + t('Ionic radius / pm') +
          '</th><th scope="col" class="num">' + t('Delocalized electrons per atom') + '</th>' + mpHead + '</tr></thead><tbody>';
        set.rows.forEach(function (r) {
          h += '<tr><th scope="row">' + r[0] + '</th><td>' + S1.chem.formula(r[1]) + '</td><td class="num">' + r[2] + '</td><td class="num">' + r[3] +
            '</td><td class="num">' + (revealed ? r[4] : '?') + '</td></tr>';
        });
      }
      tableBox.innerHTML = h + '</tbody></table>';
    }

    function render() {
      var inf = info();
      prompt.innerHTML = '<strong>' + t('Predict first.') + '</strong> ' + inf.prompt;
      choices.innerHTML = '';
      choices.setAttribute('aria-label', t('Your prediction'));
      inf.options.forEach(function (label, i) {
        var b = el('button', { class: 'btn btn--small mp-choice', type: 'button', 'aria-pressed': String(guess === i), text: label });
        b.disabled = revealed;
        b.addEventListener('click', function () { guess = i; render(); });
        choices.appendChild(b);
      });
      btnReveal.disabled = guess < 0 || revealed;
      table();
      var rows = SETS[key].rows, mpIdx = key === 'd' ? 3 : 4;
      if (!revealed) {
        fb.className = 'feedback'; fb.innerHTML = '';
        chartBox.innerHTML = ''; chartBox.hidden = true; chart = null;
        setHigh('?'); setLow('?');
        return;
      }
      var right = guess === inf.answer;
      fb.className = 'feedback feedback--' + (right ? 'right' : 'wrong');
      fb.innerHTML = '<span class="feedback__label">' + (right ? t('Your prediction was right') : t('Not what the data show')) + '</span>' + inf.explain;
      var hi = rows[0], lo = rows[0];
      rows.forEach(function (r) { if (Number(r[mpIdx]) > Number(hi[mpIdx])) hi = r; if (Number(r[mpIdx]) < Number(lo[mpIdx])) lo = r; });
      setHigh(t('{metal} {value} °C', { metal: hi[0], value: hi[mpIdx] })); setLow(t('{metal} {value} °C', { metal: lo[0], value: lo[mpIdx] }));
      chartBox.hidden = false;
      if (S1.chart) {
        chart = S1.chart.plot(chartBox, {
          label: t('Bar chart of the melting points in the table above'),
          height: 240,
          categories: rows.map(function (r) { return r[0]; }),
          x: { label: t('Metal') },
          y: { label: t('Melting point / °C'), min: 0 },
          series: [{ type: 'bar', data: rows.map(function (r, i) { return rows.length <= 5 ? [i, Number(r[mpIdx]), r[mpIdx]] : [i, Number(r[mpIdx])]; }) }]
        });
      }
    }
    function reveal() { if (guess < 0) return; revealed = true; render(); }
    function restart() { guess = -1; revealed = false; render(); }
    render();
  });

  /* ==========================================================================
     3. "Explain the property" builder
     ========================================================================== */
  S1.widgets.register('s2-3.explain', function (w) {
    /* Each part: [text, true]  = a marking point, in the order it reads best
                  [text, false, feedback] = should not be in the answer */
    function tasks() {
      var list = [
        { id: 'elec', label: t('Electrical conductivity'), q: t('Explain why solid copper conducts electricity.'), parts: [
          [t('Copper contains delocalized electrons.'), true],
          [t('The delocalized electrons are free to move through the structure and carry charge.'), true],
          [t('The copper ions are free to move and carry charge.'), false, t('In a solid metal the cations stay in their lattice positions. They vibrate but they do not travel. Ions carry the charge in a molten or dissolved ionic compound, not in a metal.')],
          [t('Electrons are set free from the atoms only when a voltage is applied.'), false, t('The delocalized electrons are always there. A voltage does not create them. It makes them drift in one direction.')],
          [t('Copper has a shiny surface.'), false, t('This is true, but it does not explain conductivity. A true statement that does not answer the question earns no mark.')]
        ] },
        { id: 'heat', label: t('Thermal conductivity'), q: t('Explain why metals are good conductors of heat.'), parts: [
          [t('Metals contain delocalized electrons that are free to move through the structure.'), true],
          [t('The delocalized electrons carry kinetic energy from the hot part to the cooler part.'), true],
          [t('The cations are closely packed, so vibrations are also passed from one cation to the next.'), true],
          [t('The cations travel from the hot end to the cold end.'), false, t('The cations stay in their lattice positions. They vibrate more when hot, but they do not travel along the metal.')],
          [t('The metallic bonds break at the hot end and release energy.'), false, t('No bonds break when a solid metal conducts heat. Energy is passed on by moving electrons and vibrating cations.')]
        ] },
        { id: 'mall', label: t('Malleability'), q: t('Explain why metals are malleable.'), parts: [
          [t('The cations are arranged in layers.'), true],
          [t('The layers can slide over each other when a force is applied.'), true],
          [t('The metallic bond is non-directional, so the attraction between the cations and the delocalized electrons is not broken.'), true],
          [t('The delocalized electrons are free to move and carry charge.'), false, t('This is true, but it explains electrical conductivity. It does not say why a metal can change shape without breaking.')],
          [t('The intermolecular forces between the layers are weak.'), false, t('A metal contains no molecules, so it has no intermolecular forces. The layers of cations are held together by metallic bonding.')],
          [t('The metallic bonds are weak, so they break when the metal is hit.'), false, t('The bond is not broken when the layers slide. That is the point: the cations are still attracted to the delocalized electrons in their new positions.')]
        ] },
        { id: 'mgna', label: t('Melting point: Mg and Na'), q: t('Explain why magnesium has a higher melting point than sodium.'), parts: [
          [t('The magnesium ion has a greater charge (2+) than the sodium ion (1+).'), true],
          [t('Magnesium has two delocalized electrons per atom. Sodium has one.'), true],
          [t('The magnesium ion has a smaller ionic radius than the sodium ion.'), true],
          [t('So the electrostatic attraction between the cations and the delocalized electrons is stronger in magnesium, and more energy is needed to overcome it.'), true],
          [t('Magnesium atoms have a greater mass, so they need more energy to melt.'), false, t('Mass is not the reason. Caesium atoms are much heavier than lithium atoms, but caesium melts at a much lower temperature.')],
          [t('Magnesium has stronger intermolecular forces.'), false, t('A metal contains no molecules. Use “metallic bonding” or “the attraction between the cations and the delocalized electrons”.')],
          [t('The attraction between the magnesium ions is stronger.'), false, t('The cations are all positive, so they repel each other. The attraction is between the cations and the delocalized electrons.')]
        ] },
        { id: 'kna', label: t('Melting point: K and Na'), q: t('Explain why potassium has a lower melting point than sodium.'), parts: [
          [t('Both ions have a 1+ charge, and each atom gives one delocalized electron.'), true],
          [t('The potassium ion has a larger ionic radius than the sodium ion.'), true],
          [t('So the electrostatic attraction between the cations and the delocalized electrons is weaker in potassium, and less energy is needed to overcome it.'), true],
          [t('The potassium ion has a smaller charge than the sodium ion.'), false, t('Both are in group 1, so both form 1+ ions. The charge is the same. The difference is the ionic radius.')],
          [t('Potassium has fewer delocalized electrons per atom than sodium.'), false, t('Each atom gives one delocalized electron in both metals. Check the group: both are in group 1.')],
          [t('Potassium loses its outer electron more easily, so it is more reactive.'), false, t('This is true, but it is about chemical reactivity. Melting is a physical change. The question asks about the strength of the metallic bond.')]
        ] }
      ];
      if (!isSL()) list.push(
        { id: 'feca', ahl: true, label: t('Additional HL: melting point of Fe and Ca'), q: t('Explain why iron, a transition element, has a much higher melting point than calcium.'), parts: [
          [t('In iron, 3d electrons are delocalized as well as 4s electrons.'), true],
          [t('So iron has more delocalized electrons per atom than calcium, which has only its two 4s electrons.'), true],
          [t('The electrostatic attraction between the cations and the delocalized electrons is stronger in iron, so more energy is needed to overcome it.'), true],
          [t('Iron has variable oxidation states and forms coloured compounds.'), false, t('These are chemical properties of transition elements (Structure 3.1). They do not explain a melting point.')],
          [t('Iron atoms have a greater mass than calcium atoms.'), false, t('Mass is not the reason. Melting point depends on the strength of the metallic bond.')],
          [t('Iron atoms are joined by strong covalent bonds.'), false, t('Iron is a metal. Its bonding is metallic: an attraction between cations and delocalized electrons, not shared pairs between two atoms.')]
        ] });
      return list;
    }

    var list = tasks(), task = list[0], order = [], picked = {}, checked = false, shown = false;
    var sel = makeSelect(w, t('Question'), function (v) { choose(v); });
    function fillSel() { return sel.fill(list.map(function (x) { return { value: x.id, label: x.label }; }), task.id); }
    fillSel();
    w.listen(document, 's1:levelchange', function () {
      list = tasks();
      var still = list.filter(function (x) { return x.id === task.id; })[0];
      if (!still) choose(list[0].id);
      fillSel();
    });
    w.button(t('Check my answer'), check, { primary: true });
    w.button(t('Show a model answer'), function () { shown = true; renderOut(); });
    w.button(t('Start again'), function () { choose(task.id); });

    var qBox = el('p', { class: 'xb-q' });
    var hint = el('p', { class: 'small muted', text: t('Tick every sentence that belongs in a full-mark answer. Leave out the ones that are wrong or that do not answer the question.') });
    var partsBox = el('div', { class: 'xb-parts' });
    var fb = el('div', { class: 'feedback', role: 'status' });
    var out = el('div', { class: 'xb-out' });
    w.stage.appendChild(qBox); w.stage.appendChild(hint); w.stage.appendChild(partsBox); w.stage.appendChild(fb); w.stage.appendChild(out);
    var setCount = w.readoutItem(t('Marking points chosen'));

    function choose(id) {
      task = list.filter(function (x) { return x.id === id; })[0] || list[0];
      order = S1.util.shuffle(task.parts.map(function (_, i) { return i; }));
      picked = {}; checked = false; shown = false;
      render();
    }

    function nRight() { return task.parts.filter(function (p) { return p[1]; }).length; }

    function render() {
      qBox.innerHTML = '<span class="xb-q__label">' + t('Question') + '</span> ' + task.q;
      partsBox.innerHTML = '';
      order.forEach(function (i) {
        var p = task.parts[i], id = S1.util.uid('xb');
        var cb = el('input', { type: 'checkbox', id: id, 'data-k': String(i) });
        cb.checked = !!picked[i];
        cb.addEventListener('change', function () {
          picked[i] = cb.checked; checked = false; render();
          var again = partsBox.querySelector('input[data-k="' + i + '"]'); if (again) again.focus();
        });
        var row = el('div', { class: 'xb-part' }, [cb, el('label', { for: id, html: p[0] })]);
        if (checked && picked[i]) {
          row.className += p[1] ? ' xb-part--ok' : ' xb-part--no';
          row.appendChild(el('p', { class: 'xb-part__note', html: p[1]
            ? '<strong>' + t('Marking point.') + '</strong>'
            : '<strong>' + t('Leave this out.') + '</strong> ' + p[2] }));
        }
        partsBox.appendChild(row);
      });
      var good = 0, bad = 0;
      task.parts.forEach(function (p, i) { if (picked[i]) { if (p[1]) good++; else bad++; } });
      if (!checked) { fb.className = 'feedback'; fb.innerHTML = ''; setCount('?'); }
      else {
        var need = nRight(), all = good === need && bad === 0;
        setCount(t('{chosen} / {total}', { chosen: good, total: need }));
        fb.className = 'feedback feedback--' + (all ? 'right' : good > 0 ? 'partial' : 'wrong');
        var msg = all ? t('You chose every marking point and nothing else. Read your answer below: this is how to write it in the exam.')
          : (bad === 1 ? t('One of your sentences should not be there. Read the note under it.') + ' '
            : bad ? t('{n} of your sentences should not be there. Read the note under each one.', { n: bad }) + ' ' : '') +
            (need - good === 1 ? t('One marking point is still missing. Look for what the answer has not said yet.')
            : good < need ? t('{n} marking points are still missing. Look for what the answer has not said yet.', { n: need - good }) : '');
        fb.innerHTML = '<span class="feedback__label">' + (all ? t('Full marks') : t('Not yet')) + '</span>' + msg;
      }
      renderOut();
    }

    function renderOut() {
      var mine = task.parts.filter(function (p, i) { return picked[i]; }).map(function (p) { return p[0]; });
      var h = '<p class="xb-out__label">' + t('Your answer so far') + '</p><p>' + (mine.length ? mine.join(' ') : '<span class="muted">' + t('Nothing chosen yet.') + '</span>') + '</p>';
      if (shown) {
        h += '<p class="xb-out__label">' + t('Model answer') + '</p><p>' +
          task.parts.filter(function (p) { return p[1]; }).map(function (p) { return p[0]; }).join(' ') + '</p>';
      }
      out.innerHTML = h;
    }

    function check() { checked = true; render(); }
    choose(w.options.start || list[0].id);
  });
})();
