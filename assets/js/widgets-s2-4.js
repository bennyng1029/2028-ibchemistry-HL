/* ==========================================================================
   Widgets for topic 2.4 — From models to materials.
   s2-4.triangle      Bonding triangle: map of the regions, plotter, predict-first mode
   s2-4.alloy         Pure metal and alloy: push a layer
   s2-4.plastics      Sort the properties of plastics: physical or chemical, and why
   s2-4.addition      Addition polymer builder, and "find the monomer"
   s2-4.condensation  (AHL) Condensation polymer builder and hydrolysis
   Also draws the static structures in the page: elements with data-s24-draw.
   The widget API (w) is documented in docs/AUTHORING.md.

   DATA SOURCES
   Electronegativity: IB Chemistry data booklet (first assessment 2025), section 9.
   Bonding triangle: data booklet section 17. The corner points of the three shaded
   regions were read from the vector artwork of the booklet PDF and converted to axis
   units with the printed tick marks (x ticks 1.0 to 4.0, y ticks 0.5 to 3.0):
     L (0.66, 0)  B (1.29, 1.20)  C (1.71, 0.39)  D (1.92, 0)
     T (2.31, 3.17)  F (2.74, 2.36)  R (3.96, 0)
     metallic = L B C D;  ionic = B T F C;  covalent and polar covalent = C F R D
   Percentage scale beside the triangle (lines read the same way):
     25 % ionic at 1.04, 50 % at 1.60, 75 % at 2.33, 92 % at 3.20 (top of the frame).
   Every user-visible string goes through t() so the site can be translated.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var MINUS = '−', NS = 'http://www.w3.org/2000/svg';
  var CHI = '<i>χ</i>';

  /* ---------- data ---------------------------------------------------------- */
  var EN = { H: 2.2, Li: 1.0, Be: 1.6, B: 2.0, C: 2.6, N: 3.0, O: 3.4, F: 4.0, Na: 0.9, Mg: 1.3, Al: 1.6, Si: 1.9,
    P: 2.2, S: 2.6, Cl: 3.2, K: 0.8, Ca: 1.0, Fe: 1.8, Zn: 1.6, Br: 3.0, Sn: 2.0, I: 2.7, Cs: 0.8, Ba: 0.9 };
  var ORDER = ['H', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ca', 'Fe', 'Zn', 'Br', 'Sn', 'I', 'Cs', 'Ba'];
  function elementNames() {
    return { H: t('hydrogen'), Li: t('lithium'), Be: t('beryllium'), B: t('boron'), C: t('carbon'), N: t('nitrogen'),
      O: t('oxygen'), F: t('fluorine'), Na: t('sodium'), Mg: t('magnesium'), Al: t('aluminium'), Si: t('silicon'),
      P: t('phosphorus'), S: t('sulfur'), Cl: t('chlorine'), K: t('potassium'), Ca: t('calcium'), Fe: t('iron'),
      Zn: t('zinc'), Br: t('bromine'), Sn: t('tin'), I: t('iodine'), Cs: t('caesium'), Ba: t('barium') };
  }
  var G = { L: [0.66, 0], B: [1.29, 1.20], C: [1.71, 0.39], D: [1.92, 0], T: [2.31, 3.17], F: [2.74, 2.36], R: [3.96, 0] };
  var SCALE = [[0, 0], [1.04, 25], [1.60, 50], [2.33, 75], [3.20, 92]];      // [difference, % ionic]
  var PRESETS = [
    ['Na', 'Cl', 'NaCl'], ['Mg', 'O', 'MgO'], ['Cs', 'F', 'CsF'], ['H', 'Cl', 'HCl'], ['H', 'O', 'H₂O'], ['C', 'O', 'CO₂'],
    ['Si', 'O', 'SiO₂'], ['Al', 'Cl', 'AlCl₃'], ['C', 'H', 'CH₄'], ['Cl', 'Cl', 'Cl₂'], ['Na', 'Na', 'Na'], ['Al', 'Al', 'Al'], ['Si', 'Si', 'Si']
  ];
  var CHALLENGES = [
    ['K', 'Br', 'KBr'], ['Sn', 'Cl', 'SnCl₄'], ['Si', 'O', 'SiO₂'], ['Mg', 'Cl', 'MgCl₂'], ['P', 'Cl', 'PCl₃'], ['Na', 'O', 'Na₂O'],
    ['Mg', 'Mg', 'Mg'], ['Si', 'C', 'SiC'], ['Ca', 'O', 'CaO'], ['N', 'H', 'NH₃'], ['Li', 'H', 'LiH'], ['S', 'O', 'SO₂'],
    ['Zn', 'Zn', 'Zn'], ['Ba', 'Cl', 'BaCl₂'], ['C', 'S', 'CS₂']
  ];

  /* ---------- triangle maths ------------------------------------------------- */
  function side(p, a, b) { return (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]); }
  function dist(p, a, b) { return Math.abs(side(p, a, b)) / Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2)); }
  function position(a, b) {
    var xa = EN[a], xb = EN[b];
    return { xa: xa, xb: xb, d: Math.round(Math.abs(xa - xb) * 10) / 10, avg: Math.round((xa + xb) * 50) / 100 };
  }
  function classify(avg, d) {
    var p = [avg, d];
    var sM = side(p, G.D, G.B), sI = side(p, G.C, G.F);
    var region = sM > 0 ? 'metallic' : sI > 0 ? 'ionic' : 'covalent';
    var dM = dist(p, G.D, G.B), dI = dist(p, G.C, G.F), near = null;
    if (region === 'metallic') { if (dM < 0.06) near = d > G.C[1] ? 'ionic' : 'covalent'; }
    else if (dM < 0.06) near = 'metallic';
    else if (dI < 0.06) near = region === 'ionic' ? 'covalent' : 'ionic';
    var outside = side(p, G.L, G.T) > 1e-9 || side(p, G.T, G.R) > 1e-9;
    return { region: region, near: near, outside: outside };
  }
  function pctIonic(d) {
    for (var i = 1; i < SCALE.length; i++) {
      if (d <= SCALE[i][0]) { var a = SCALE[i - 1], b = SCALE[i]; return a[1] + (b[1] - a[1]) * (d - a[0]) / (b[0] - a[0]); }
    }
    return 92;
  }
  function num(x, dp) { var s = x.toFixed(dp == null ? 2 : dp); if (s.indexOf('.') >= 0 && dp == null) s = s.replace(/0$/, ''); return s; }
  function regionName(r) { return r === 'metallic' ? t('metallic') : r === 'ionic' ? t('ionic') : t('covalent or polar covalent'); }
  function mathLine(html) { return '<div class="worked__math">' + html + '</div>'; }

  /* Draw the triangle on a canvas. o: {points: [{avg, d, label, main}], highlight: region | null} */
  function drawTriangle(w, ctx, W, H, o) {
    var narrow = W < 430;
    var m = { l: narrow ? 42 : 56, r: narrow ? 38 : 54, t: 30, b: 44 };
    var x0 = 0.5, x1 = 4.1, y0 = 0, y1 = 3.4;
    function X(v) { return m.l + (v - x0) / (x1 - x0) * (W - m.l - m.r); }
    function Y(v) { return H - m.b - (v - y0) / (y1 - y0) * (H - m.t - m.b); }
    var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), line = w.color('--line'), strong = w.color('--line-strong');
    var mono = w.color('--font-mono') || 'monospace', body = w.color('--font-body') || 'sans-serif';
    var fs = narrow ? 10.5 : 12;
    function poly(pts, fill, stroke, lw) {
      ctx.beginPath();
      pts.forEach(function (p, i) { if (i) ctx.lineTo(X(p[0]), Y(p[1])); else ctx.moveTo(X(p[0]), Y(p[1])); });
      ctx.closePath();
      if (fill) { ctx.fillStyle = fill; ctx.fill(); }
      if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw || 1.2; ctx.stroke(); }
    }
    var regions = {
      metallic: { pts: [G.L, G.B, G.C, G.D], fill: line, at: [1.3, 0.28], name: t('Metallic') },
      ionic: { pts: [G.B, G.T, G.F, G.C], fill: w.color('--accent-soft'), at: [2.12, 2.05], name: t('Ionic') },
      covalent: { pts: [G.C, G.F, G.R, G.D], fill: w.color('--surface-2'), at: [narrow ? 2.72 : 3.0, 0.28], name: t('Covalent') }
    };
    // percentage scale lines (behind the regions)
    ctx.font = fs + 'px ' + mono; ctx.textBaseline = 'middle';
    ctx.setLineDash([3, 3]); ctx.strokeStyle = strong; ctx.lineWidth = 1;
    SCALE.forEach(function (s) {
      if (s[0] > 0) { ctx.beginPath(); ctx.moveTo(X(x0), Y(s[0])); ctx.lineTo(X(x1), Y(s[0])); ctx.stroke(); }
      ctx.fillStyle = ink2; ctx.textAlign = 'left'; ctx.fillText(String(s[1]), X(x1) + 6, Y(s[0]));
    });
    ctx.setLineDash([]);
    ctx.fillStyle = ink2; ctx.textAlign = 'right'; ctx.font = fs + 'px ' + body;
    ctx.fillText(t('% ionic'), W - 4, 12);
    Object.keys(regions).forEach(function (k) { poly(regions[k].pts, regions[k].fill, ink2, 1.2); });
    if (o.highlight && regions[o.highlight]) poly(regions[o.highlight].pts, null, w.color('--accent'), 3);
    // region names
    ctx.fillStyle = ink; ctx.textAlign = 'center'; ctx.font = '700 ' + (fs + 1) + 'px ' + body;
    Object.keys(regions).forEach(function (k) { ctx.fillText(regions[k].name, X(regions[k].at[0]), Y(regions[k].at[1])); });
    ctx.fillText(t('Polar'), X(2.95), Y(1.3)); ctx.fillText(t('covalent'), X(2.95), Y(1.3) + fs + 4);
    // axes
    ctx.strokeStyle = ink2; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(X(x0), Y(y1)); ctx.lineTo(X(x0), Y(y0)); ctx.lineTo(X(x1), Y(y0)); ctx.stroke();
    ctx.font = fs + 'px ' + mono; ctx.fillStyle = ink2;
    var v;
    for (v = 1; v <= 4.001; v += 0.5) {
      ctx.beginPath(); ctx.moveTo(X(v), Y(y0)); ctx.lineTo(X(v), Y(y0) + 4); ctx.stroke();
      ctx.textAlign = 'center'; ctx.fillText(v.toFixed(1), X(v), Y(y0) + 13);
    }
    for (v = 0; v <= 3.001; v += 0.5) {
      ctx.beginPath(); ctx.moveTo(X(x0), Y(v)); ctx.lineTo(X(x0) - 4, Y(v)); ctx.stroke();
      ctx.textAlign = 'right'; ctx.fillText(v.toFixed(1), X(x0) - 7, Y(v));
    }
    ctx.font = fs + 'px ' + body; ctx.fillStyle = ink; ctx.textAlign = 'center';
    ctx.fillText(t('Average electronegativity'), (X(x0) + X(x1)) / 2, H - 9);
    ctx.save(); ctx.translate(11, (Y(y0) + Y(y1)) / 2); ctx.rotate(-Math.PI / 2);
    ctx.fillText(t('Electronegativity difference, Δχ'), 0, 0); ctx.restore();
    // points
    (o.points || []).forEach(function (p) {
      var px = X(p.avg), py = Y(p.d);
      if (p.main) {
        ctx.setLineDash([4, 3]); ctx.strokeStyle = ink; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, Y(y0)); ctx.moveTo(px, py); ctx.lineTo(X(x0), py); ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.beginPath(); ctx.arc(px, py, p.main ? 6 : 4.5, 0, Math.PI * 2);
      ctx.fillStyle = w.color('--accent'); ctx.fill(); ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.stroke();
      if (p.label) {
        ctx.font = '700 ' + (fs + 1) + 'px ' + body;
        var tw = ctx.measureText(p.label).width, left = p.left || px + tw + 12 > W - 2;
        var lx = left ? px - 9 - tw : px + 9, ly = p.below ? py + 15 : py - 11;
        if (ly < 9) ly = py + 14;
        ctx.fillStyle = w.color('--surface'); ctx.fillRect(lx - 2, ly - 8, tw + 4, 16);
        ctx.fillStyle = ink; ctx.textAlign = 'left'; ctx.fillText(p.label, lx, ly);
      }
    });
    void ink3;
  }

  function predictionText(c, d) {
    var s;
    if (c.region === 'ionic') s = t('The ionic model fits best. Expect a hard, brittle solid with a high melting point. It does not conduct electricity as a solid. It conducts when molten or dissolved in water.');
    else if (c.region === 'metallic') s = t('The metallic model fits best. Expect a solid that conducts electricity and heat well and is malleable.');
    else if (d === 0) s = t('The covalent model fits best, and the bonds are non-polar (Δχ = 0). Expect a poor electrical conductor. The triangle cannot tell you if the substance is made of molecules (low melting point) or is a covalent network (very high melting point).');
    else s = t('The covalent model fits best. The bonds are polar, and more polar the higher the point sits. Expect a poor electrical conductor in every state. The triangle cannot tell you if the substance is made of molecules (low melting point) or is a covalent network (very high melting point).');
    if (c.near) s += ' ' + t('Take care: this point is very close to the boundary with the {region} region. The triangle does not give a clear answer here. Expect properties between the two models.', { region: regionName(c.near) });
    if (c.outside) s += ' ' + t('This point is just outside the outline printed in the data booklet. The printed outline is drawn a little too small for points like this one (it happens with fluorides). Your two numbers are still correct. Read the nearest region: {region}.', { region: regionName(c.region) });
    return s;
  }

  /* ==========================================================================
     1. Bonding triangle
     ========================================================================== */
  S1.widgets.register('s2-4.triangle', function (w) {
    var NAMES = elementNames();
    if (w.options.mode === 'map') return mapMode(w);

    var state = { a: 'Na', b: 'Cl', predict: null, answered: true };
    var opts = ORDER.map(function (s) { return { value: s, label: s + '  ' + NAMES[s] + '  χ = ' + EN[s].toFixed(1) }; });
    var selA = w.select({ label: t('First element'), options: opts, value: 'Na', onChange: function (v) { state.a = v; manual(); } });
    var selB = w.select({ label: t('Second element (choose the same one for an element)'), options: opts, value: 'Cl', onChange: function (v) { state.b = v; manual(); } });
    var selP = w.select({ label: t('Or pick an example'), value: '0',
      options: PRESETS.map(function (p, i) { return { value: String(i), label: p[2] }; }).concat([{ value: 'x', label: t('(my own choice)') }]),
      onChange: function (v) { if (v === 'x') return; var p = PRESETS[Number(v)]; state.a = p[0]; state.b = p[1]; state.predict = null; state.answered = true; sync(); update(); } });
    w.button(t('Predict first: new compound'), newChallenge, { primary: true });

    var bar = el('div', { class: 's24-bar' }); w.stage.appendChild(bar);
    var cv = w.canvas({ height: function (width) { return Math.round(Math.min(430, Math.max(280, width * 0.72))); },
      label: t('Bonding triangle. Horizontal axis: average electronegativity. Vertical axis: electronegativity difference. Metallic region at the bottom left, ionic region at the top, covalent and polar covalent region at the bottom right. The readout below gives the position of the chosen point.') });
    var work = el('div', { class: 's24-work', 'data-i18n': 'off' }); w.stage.appendChild(work);
    var fb = el('div', { class: 'feedback', role: 'status' }); w.stage.appendChild(fb);

    var setPos = w.readoutItem(t('Position (average, difference)'));
    var setRegion = w.readoutItem(t('Region'));
    var setPct = w.readoutItem(t('Read from the % scale'));
    var setPred = w.readoutItem(t('Prediction'), { text: true });

    function label() {
      var i, list = PRESETS.concat(CHALLENGES);
      for (i = 0; i < list.length; i++) if ((list[i][0] === state.a && list[i][1] === state.b) || (list[i][0] === state.b && list[i][1] === state.a)) return list[i][2];
      return state.a === state.b ? state.a : state.a + '–' + state.b;
    }
    function sync() { selA.set(state.a); selB.set(state.b); }
    function manual() { state.predict = null; state.answered = true; selP.set('x'); update(); }
    function newChallenge() {
      var c;
      do { c = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)]; } while (state.predict && c[2] === state.predict[2]);
      state.predict = c; state.answered = false; state.a = c[0]; state.b = c[1]; selP.set('x'); sync(); update();
    }
    function answer(choice) {
      var p = position(state.a, state.b), c = classify(p.avg, p.d);
      state.answered = true;
      var right = choice === c.region;
      fb.className = 'feedback ' + (right ? 'feedback--right' : 'feedback--wrong');
      fb.innerHTML = '<span class="feedback__label">' + (right ? t('Correct') : t('Not quite')) + '</span><p>' +
        t('{formula} sits in the {region} region. Check the two numbers in the working, then find the point on the triangle.', { formula: label(), region: regionName(c.region) }) +
        (c.near ? ' ' + t('It is close to the boundary with the {other} region, so either model on its own is a rough description.', { other: regionName(c.near) }) : '') + '</p>';
      update(true);
    }
    cv.draw(function (ctx, W, H) {
      var p = position(state.a, state.b), pts = [];
      if (state.answered) pts.push({ avg: p.avg, d: p.d, label: label(), main: true });
      drawTriangle(w, ctx, W, H, { points: pts, highlight: state.answered ? classify(p.avg, p.d).region : null });
    });
    function update(keepFeedback) {
      var p = position(state.a, state.b), c = classify(p.avg, p.d), same = state.a === state.b;
      if (!keepFeedback) { fb.innerHTML = ''; fb.className = 'feedback'; }
      bar.innerHTML = '';
      bar.hidden = state.answered;
      if (!state.answered) {
        bar.appendChild(el('p', { html: '<b>' + t('Where would {formula} sit?', { formula: label() }) + '</b> ' +
          (same ? t('Use χ({a}) = {xa}.', { a: state.a, xa: p.xa.toFixed(1) }) : t('Use χ({a}) = {xa} and χ({b}) = {xb}.', { a: state.a, xa: p.xa.toFixed(1), b: state.b, xb: p.xb.toFixed(1) })) + ' ' +
          t('Work out the difference and the average on paper. Then choose a region.') }));
        var row = el('div', { class: 'btn-row' });
        ['metallic', 'ionic', 'covalent'].forEach(function (r) {
          var b = el('button', { class: 'btn btn--small', type: 'button', text: regionName(r) });
          b.addEventListener('click', function () { answer(r); });
          row.appendChild(b);
        });
        bar.appendChild(row);
        work.innerHTML = '';
        setPos('?'); setRegion('?'); setPct('?'); setPred(t('Make your prediction first.'));
      } else {
        work.innerHTML = same
          ? mathLine('Δ' + CHI + ' = |' + p.xa.toFixed(1) + ' ' + MINUS + ' ' + p.xa.toFixed(1) + '| = ' + p.d.toFixed(1)) +
            mathLine(t('average') + ' ' + CHI + ' = (' + p.xa.toFixed(1) + ' + ' + p.xa.toFixed(1) + ') / 2 = ' + num(p.avg))
          : mathLine('Δ' + CHI + ' = |' + CHI + '(' + state.a + ') ' + MINUS + ' ' + CHI + '(' + state.b + ')| = |' + p.xa.toFixed(1) + ' ' + MINUS + ' ' + p.xb.toFixed(1) + '| = ' + p.d.toFixed(1)) +
            mathLine(t('average') + ' ' + CHI + ' = (' + p.xa.toFixed(1) + ' + ' + p.xb.toFixed(1) + ') / 2 = ' + num(p.avg));
        setPos('(' + num(p.avg) + ', ' + p.d.toFixed(1) + ')');
        setRegion(regionName(c.region));
        var pc = Math.round(pctIonic(p.d) / 5) * 5;
        setPct(t('about {ionic} % ionic, {cov} % covalent', { ionic: pc, cov: 100 - pc }));
        setPred(predictionText(c, p.d));
      }
      cv.draw();
    }
    update();
  });

  function mapMode(w) {
    var INFO = {
      all: t('Each corner is one pure bonding model. Most substances sit somewhere between the corners.'),
      metallic: t('Bottom left: both elements have low electronegativity, and the difference is small. Neither atom holds its outer electrons strongly, so the electrons are delocalized. Sodium is an example.'),
      ionic: t('Top: one element has low electronegativity and the other has high electronegativity, so the difference is large. Electrons are transferred and ions form. Caesium fluoride is a very ionic example.'),
      covalent: t('Bottom right: both elements have high electronegativity, and the difference is small. Both atoms attract the electrons strongly, so the electrons are shared. Chlorine is an example. Higher up this region the sharing is unequal: polar covalent.')
    };
    var which = 'all';
    w.select({ label: t('Explain a region'), value: 'all', options: [{ value: 'all', label: t('The whole triangle') }, { value: 'metallic', label: t('Metallic') },
      { value: 'ionic', label: t('Ionic') }, { value: 'covalent', label: t('Covalent and polar covalent') }], onChange: function (v) { which = v; update(); } });
    var cv = w.canvas({ height: function (width) { return Math.round(Math.min(410, Math.max(270, width * 0.7))); },
      label: t('Bonding triangle with example substances. Sodium is in the metallic corner, chlorine in the covalent corner and caesium fluoride at the ionic top. Sodium chloride is in the ionic region. Silicon dioxide is in the polar covalent region. On a wide screen hydrogen chloride is also shown there.') });
    var setInfo = w.readoutItem(t('What this region means'), { text: true });
    var POINTS = [['Na', 'Na', 'Na', true], ['Cl', 'Cl', 'Cl₂'], ['Cs', 'F', 'CsF', true], ['Na', 'Cl', 'NaCl', true], ['H', 'Cl', 'HCl', 'below', 'wide'], ['Si', 'O', 'SiO₂', true]];
    cv.draw(function (ctx, W, H) {
      drawTriangle(w, ctx, W, H, { highlight: which === 'all' ? null : which, points: POINTS.filter(function (q) { return W >= 430 || q[4] !== 'wide'; }).map(function (q) {
        var p = position(q[0], q[1]); return { avg: p.avg, d: p.d, label: q[2], left: q[3] === true, below: q[3] === 'below' };
      }) });
    });
    function update() { setInfo(INFO[which]); cv.draw(); }
    update();
  }

  /* ==========================================================================
     2. Alloy lattice
     ========================================================================== */
  S1.widgets.register('s2-4.alloy', function (w) {
    var kind = 'pure', shift = 0, done = 0, anim = null, msg = '';
    w.select({ label: t('Material'), value: 'pure', options: [
      { value: 'pure', label: t('Pure metal') },
      { value: 'big', label: t('Alloy: some larger atoms added') },
      { value: 'small', label: t('Alloy: some smaller atoms added') }
    ], onChange: function (v) { kind = v; reset(); } });
    w.button(t('Push the top layers'), push, { primary: true });
    w.button(t('Reset'), reset);
    var cv = w.canvas({ height: 250, label: t('Model of a metal lattice: rows of positive ions in a sea of delocalized electrons. In the alloy some ions are a different size, so the rows are no longer regular.') });
    var setWhat = w.readoutItem(t('What happened'), { text: true });
    var ROWS = 5, MOVING = 2;                     // the top two rows are pushed
    var FOREIGN = [[1, 3], [2, 6], [3, 2], [0, 7], [4, 8], [3, 10]];   // [row, column] of the added atoms

    function layout(W) {
      var r = S1.util.clamp(W / 30, 9, 15), left = 40, cols = Math.max(7, Math.floor((W - left - 6.5 * r) / (2 * r)));
      return { r: r, cols: cols, left: left, top: 46 };
    }
    cv.draw(function (ctx, W, H) {
      var L = layout(W), r = L.r, k = kind === 'big' ? 1.3 : kind === 'small' ? 0.68 : 1;
      var ink = w.color('--ink'), body = w.color('--font-body') || 'sans-serif';
      var rowH = r * Math.sqrt(3), atoms = [], i, j;
      for (i = 0; i < ROWS; i++) for (j = 0; j < L.cols; j++) {
        atoms.push({ row: i, col: j, x: L.left + r + j * 2 * r + (i % 2 ? r : 0), y: L.top + r + i * rowH, f: false });
      }
      if (kind !== 'pure') {
        var fs = [];
        FOREIGN.forEach(function (f) { atoms.forEach(function (a) { if (a.row === f[0] && a.col === f[1] % L.cols) { a.f = true; fs.push(a); } }); });
        atoms.forEach(function (a) {
          var dx = 0, dy = 0;
          fs.forEach(function (f) {
            if (f === a) return;
            var vx = a.x - f.x, vy = a.y - f.y, dd = Math.sqrt(vx * vx + vy * vy);
            var push = (k - 1) * r * Math.min(1, 2 * r / dd);
            dx += vx / dd * push; dy += vy / dd * push;
          });
          a.dx = dx; a.dy = dy;
        });
        atoms.forEach(function (a) { a.x += a.dx; a.y += a.dy; a.rad = a.f ? r * k : r; });
        // settle: push apart any circles that still overlap, so the picture shows a packed, distorted lattice
        for (var it = 0; it < 8; it++) {
          for (i = 0; i < atoms.length; i++) for (j = i + 1; j < atoms.length; j++) {
            var p1 = atoms[i], p2 = atoms[j], ex = p2.x - p1.x, ey = p2.y - p1.y, need = p1.rad + p2.rad;
            if (Math.abs(ex) > need || Math.abs(ey) > need) continue;
            var el2 = Math.sqrt(ex * ex + ey * ey);
            if (el2 >= need || el2 === 0) continue;
            var mv = (need - el2) / 2;
            p1.x -= ex / el2 * mv; p1.y -= ey / el2 * mv; p2.x += ex / el2 * mv; p2.y += ey / el2 * mv;
          }
        }
      }
      // the moving rows ride up and over the row below, as real spheres would
      var u = ((r + shift * 2 * r) % (2 * r) + 2 * r) % (2 * r), near = Math.min(u, 2 * r - u);
      var lift = Math.sqrt(4 * r * r - near * near) - rowH;
      // sea of delocalized electrons
      ctx.fillStyle = w.color('--accent-soft');
      var seaW = L.cols * 2 * r + r + r * 1.2, split = L.top + r + (MOVING - 0.5) * rowH;
      ctx.fillRect(L.left - r * 0.6 + shift * 2 * r, L.top - r * 0.6 - lift, seaW, split - (L.top - r * 0.6) + 1);
      ctx.fillRect(L.left - r * 0.6, split, seaW, L.top + r + (ROWS - 1) * rowH + r * 1.6 - split);
      atoms.forEach(function (a) {
        var x = a.x + (a.row < MOVING ? shift * 2 * r : 0), y = a.y - (a.row < MOVING ? lift : 0), rr = a.f ? r * k : r;
        ctx.beginPath(); ctx.arc(x, y, rr - 0.8, 0, Math.PI * 2);
        ctx.fillStyle = a.f ? w.color('--ink-2') : w.color('--surface'); ctx.fill();
        ctx.strokeStyle = ink; ctx.lineWidth = a.f ? 2.2 : 1.2; ctx.stroke();
        ctx.fillStyle = a.f ? w.color('--surface') : ink; ctx.font = '700 ' + Math.round(rr * 0.95) + 'px ' + body;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('+', x, y + 0.5);
      });
      // force arrow on the top rows
      var ay = L.top + r + 0.5 * rowH, ax = L.left - r * 0.6 + shift * 2 * r;
      ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(ax - 28, ay); ctx.lineTo(ax - 4, ay); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ax - 1, ay); ctx.lineTo(ax - 9, ay - 5); ctx.lineTo(ax - 9, ay + 5); ctx.closePath(); ctx.fill();
      ctx.font = '12px ' + body; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = ink;
      ctx.fillText(t('force'), ax - 30, ay - 9);
      ctx.fillText(t('Shaded background: delocalized electrons (not drawn one by one)'), 2, H - 8, W - 4);
      ctx.fillText(kind === 'pure' ? t('All ions are the same size: regular layers') : t('Dark circles: atoms of the added element'), 2, 16, W - 4);
    });

    function say() { setWhat(msg); }
    function reset() { if (anim) anim.stop(); shift = 0; done = 0; msg = t('Nothing yet. Press “Push the top layers”.'); say(); cv.draw(); }
    var loop = w.loop(function (dt) {
      if (!anim) return;
      anim.p = Math.min(1, anim.p + dt / anim.time);
      var e = anim.p < 0.5 ? 2 * anim.p * anim.p : 1 - Math.pow(-2 * anim.p + 2, 2) / 2;
      if (anim.blocked) shift = 0.2 * Math.sin(Math.PI * anim.p);
      else shift = anim.from + e;
      if (anim.p >= 1) { if (!anim.blocked) { done += 1; shift = done; } else shift = 0; var fin = anim.end; anim = null; loop.stop(); msg = fin; say(); }
      cv.draw();
    });
    function push() {
      if (anim) return;
      if (kind === 'pure') {
        if (done >= 2) { msg = t('The layers have moved two places. Press Reset to try again.'); say(); return; }
        anim = { p: 0, time: w.reducedMotion ? 0.01 : 1.3, from: done, blocked: false,
          end: t('The layers slid one place. Every ion is still surrounded by delocalized electrons, so the metallic bonding is unchanged. The metal changed shape without breaking: it is malleable.') };
      } else {
        anim = { p: 0, time: w.reducedMotion ? 0.01 : 0.9, blocked: true,
          end: t('The layers hardly moved. The different-sized atoms break up the regular layers, so the layers cannot slide past each other as easily. The same force gives less change of shape: the alloy is harder and stronger.') };
      }
      anim.stop = function () { anim = null; loop.stop(); };
      loop.start(true);
    }
    reset();
  });

  /* ==========================================================================
     3. Plastics: physical or chemical property, and the structural reason
     ========================================================================== */
  S1.widgets.register('s2-4.plastics', function (w) {
    var ITEMS = [
      { p: t('Does not conduct electricity'), k: 'phys', why: t('All the outer electrons are held in covalent bonds. There are no delocalized electrons and no mobile ions to carry charge.') },
      { p: t('Does not react with water, air, acids or alkalis'), k: 'chem', why: t('The chains are held together by strong covalent bonds, which take a lot of energy to break. So the polymer is chemically unreactive (inert).') },
      { p: t('Low density'), k: 'phys', why: t('The chains are made mostly of light atoms such as carbon and hydrogen, and long chains do not pack tightly.') },
      { p: t('Not broken down by microorganisms (non-biodegradable)'), k: 'chem', why: t('This is a chemical property: it is about reactions. The strong covalent bonds in the chains are not easily broken, so the plastic stays in the environment for a very long time.') },
      { p: t('Softens when heated, so it can be moulded into shapes'), k: 'phys', why: t('Only weak intermolecular forces hold one chain to the next. Gentle heating gives the chains enough energy to slide past each other. No covalent bonds break.') },
      { p: t('Poor conductor of heat'), k: 'phys', why: t('There are no delocalized electrons to carry energy quickly through the material.') },
      { p: t('Strong for its mass'), k: 'phys', why: t('Each chain is very long, so the many intermolecular forces along its length add up. The chains also tangle.') }
    ];
    var i = 0, score = 0, answered = false;
    var card = el('div', { class: 's24-bar' }); w.stage.appendChild(card);
    var fb = el('div', { class: 'feedback', role: 'status' }); w.stage.appendChild(fb);
    var setScore = w.readoutItem(t('Sorted correctly'));
    function show() {
      answered = false; fb.innerHTML = ''; fb.className = 'feedback'; card.innerHTML = '';
      if (i >= ITEMS.length) {
        card.appendChild(el('p', { html: '<b>' + t('All sorted.') + '</b> ' + t('In an exam, read the question carefully: if it asks for a chemical property of a plastic, a physical property earns no mark.') }));
        var again = el('button', { class: 'btn btn--small', type: 'button', text: t('Start again') });
        again.addEventListener('click', function () { i = 0; score = 0; show(); });
        card.appendChild(again); setScore(score + ' / ' + ITEMS.length); return;
      }
      var it = ITEMS[i];
      card.appendChild(el('p', { class: 'small muted', text: t('Property {n} of {total}', { n: i + 1, total: ITEMS.length }) }));
      card.appendChild(el('p', { html: '<b>' + it.p + '</b>' }));
      var row = el('div', { class: 'btn-row' });
      [['phys', t('Physical property')], ['chem', t('Chemical property')]].forEach(function (o) {
        var b = el('button', { class: 'btn btn--small', type: 'button', text: o[1] });
        b.addEventListener('click', function () { choose(o[0]); });
        row.appendChild(b);
      });
      card.appendChild(row);
      setScore(score + ' / ' + ITEMS.length);
    }
    function choose(k) {
      if (answered) return;
      var it = ITEMS[i], right = k === it.k;
      answered = true; if (right) score += 1;
      fb.className = 'feedback ' + (right ? 'feedback--right' : 'feedback--wrong');
      fb.innerHTML = '<span class="feedback__label">' + (right ? t('Correct') : t('Not quite')) + '</span><p>' +
        (it.k === 'phys' ? t('This is a physical property: no new substance forms.') : t('This is a chemical property: it describes how the plastic reacts.')) +
        ' <b>' + t('Reason from the structure:') + '</b> ' + it.why + '</p>';
      var next = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Next property') });
      next.addEventListener('click', function () { i += 1; show(); });
      fb.appendChild(next); setScore(score + ' / ' + ITEMS.length);
    }
    show();
  });

  /* ==========================================================================
     Structure drawing helpers
     ========================================================================== */
  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  var INK = 'var(--ink)', ACC = 'var(--accent)';
  var SC = 46;                                   // S1.mol default: pixels per bond-length unit

  /* Monomers CH2=CH2 type: a, b on the first carbon (up, down); c, d on the second carbon (up, down). */
  function monomers() {
    return {
      ethene: { name: t('ethene'), a: 'H', b: 'H', c: 'H', d: 'H', mono: 'CH₂=CH₂', rep: '–CH₂–CH₂–' },
      propene: { name: t('propene'), a: 'H', b: 'H', c: 'H', d: 'CH₃', mono: 'CH₂=CHCH₃', rep: '–CH₂–CH(CH₃)–' },
      chloroethene: { name: t('chloroethene'), a: 'H', b: 'H', c: 'H', d: 'Cl', mono: 'CH₂=CHCl', rep: '–CH₂–CHCl–' },
      tetrafluoroethene: { name: t('tetrafluoroethene'), a: 'F', b: 'F', c: 'F', d: 'F', mono: 'CF₂=CF₂', rep: '–CF₂–CF₂–' },
      phenylethene: { name: t('phenylethene'), a: 'H', b: 'H', c: 'H', d: 'C₆H₅', mono: 'CH₂=CHC₆H₅', rep: '–CH₂–CH(C₆H₅)–' },
      propenenitrile: { name: t('propenenitrile'), a: 'H', b: 'H', c: 'H', d: 'CN', mono: 'CH₂=CHCN', rep: '–CH₂–CH(CN)–' },
      dichloro11: { name: t('1,1-dichloroethene'), a: 'H', b: 'H', c: 'Cl', d: 'Cl', mono: 'CH₂=CCl₂', rep: '–CH₂–CCl₂–' },
      dichloro12: { name: t('1,2-dichloroethene'), a: 'H', b: 'Cl', c: 'H', d: 'Cl', mono: 'CHCl=CHCl', rep: '–CHCl–CHCl–' },
      difluoro11: { name: t('1,1-difluoroethene'), a: 'H', b: 'H', c: 'F', d: 'F', mono: 'CH₂=CF₂', rep: '–CH₂–CF₂–' },
      but2ene: { name: t('but-2-ene'), a: 'H', b: 'CH₃', c: 'H', d: 'CH₃', mono: 'CH₃CH=CHCH₃', rep: '–CH(CH₃)–CH(CH₃)–' }
    };
  }
  /* Call S1.mol.structural, then make multi-letter side groups start at their bonded carbon
     (so the bond goes to the C of CH3, C6H5 or CN) and add any brackets. */
  function drawStruct(host, spec, extra) {
    if (!S1.mol || !host) return null;
    host.innerHTML = '';
    var svg = S1.mol.structural(host, spec);
    if (!svg) return null;
    var vb = svg.getAttribute('viewBox').split(' ').map(Number), padR = 0, padB = 0, padT = 0;
    Array.prototype.forEach.call(svg.querySelectorAll('text'), function (tx) {
      var s = tx.textContent;
      if (s.length > 1 && s.charAt(0) === 'C' && s !== 'Cl') {
        tx.setAttribute('text-anchor', 'start'); tx.setAttribute('x', Number(tx.getAttribute('x')) - 7);
        padR = Math.max(padR, Number(tx.getAttribute('x')) + s.length * 11.5 - (vb[0] + vb[2]));
      }
    });
    if (extra && extra.brackets) {
      var b = extra.brackets, st = 'fill:none;stroke:' + INK + ';stroke-width:1.8', k = 8;
      var L = b.x1 * SC, R = b.x2 * SC, T = b.y1 * SC, B = b.y2 * SC;
      svgEl('path', { d: 'M' + (L + k) + ' ' + T + ' H' + L + ' V' + B + ' H' + (L + k), style: st }, svg);
      svgEl('path', { d: 'M' + (R - k) + ' ' + T + ' H' + R + ' V' + B + ' H' + (R - k), style: st }, svg);
      var nt = svgEl('text', { x: R + 5, y: B + 5, 'text-anchor': 'start', style: 'fill:' + INK + ';font-family:var(--font-body);font-size:17px;font-style:italic;font-weight:700' }, svg);
      nt.textContent = 'n';
      padB = Math.max(padB, B + 12 - (vb[1] + vb[3])); padT = Math.max(padT, vb[1] - (T - 4));
      padR = Math.max(padR, R + 20 - (vb[0] + vb[2]));
    }
    if (extra && extra.marks) {
      extra.marks.forEach(function (mk) {
        svgEl('ellipse', { cx: mk.x * SC, cy: mk.y * SC, rx: mk.rx * SC, ry: mk.ry * SC, style: 'fill:none;stroke:' + ACC + ';stroke-width:2;stroke-dasharray:5 4' }, svg);
      });
    }
    vb[1] -= padT; vb[3] += padT + padB; vb[2] += Math.max(0, padR);
    svg.setAttribute('viewBox', vb.join(' ')); svg.setAttribute('width', vb[2]); svg.setAttribute('height', vb[3]);
    return svg;
  }
  /* n separate monomer molecules, side by side (trigonal planar around each carbon). */
  function monomerSpec(m, count, label) {
    var atoms = [], bonds = [], k, gap = 3.85;
    for (k = 0; k < (count || 1); k++) {
      var x = k * gap, base = atoms.length;
      atoms.push({ el: 'C', x: x, y: 0 }, { el: 'C', x: x + 1.25, y: 0 },
        { el: m.a, x: x - 0.6, y: -0.98 }, { el: m.b, x: x - 0.6, y: 0.98 }, { el: m.c, x: x + 1.85, y: -0.98 }, { el: m.d, x: x + 1.85, y: 0.98 });
      bonds.push({ a: base, b: base + 1, order: 2 }, { a: base, b: base + 2 }, { a: base, b: base + 3 }, { a: base + 1, b: base + 4 }, { a: base + 1, b: base + 5 });
    }
    return { atoms: atoms, bonds: bonds, label: label };
  }
  /* A chain of `units` repeating units. opts.open: units drawn apart, each with two half bonds. */
  function chainSpec(m, units, label, opts) {
    var atoms = [], bonds = [], k, open = opts && opts.open, gap = open ? 3.3 : 2.5, prev = null;
    for (k = 0; k < units; k++) {
      var x = k * gap, base = atoms.length;
      atoms.push({ el: 'C', x: x, y: 0 }, { el: 'C', x: x + 1.25, y: 0 },
        { el: m.a, x: x, y: -1.1 }, { el: m.b, x: x, y: 1.1 }, { el: m.c, x: x + 1.25, y: -1.1 }, { el: m.d, x: x + 1.25, y: 1.1 });
      bonds.push({ a: base, b: base + 1 }, { a: base, b: base + 2 }, { a: base, b: base + 3 }, { a: base + 1, b: base + 4 }, { a: base + 1, b: base + 5 });
      if (open || k === 0) { atoms.push({ el: '', x: x - 0.8, y: 0 }); bonds.push({ a: atoms.length - 1, b: base }); }
      else bonds.push({ a: prev, b: base });
      if (open || k === units - 1) { atoms.push({ el: '', x: x + ((opts && opts.endR) || 2.05), y: 0 }); bonds.push({ a: base + 1, b: atoms.length - 1 }); }
      prev = base + 1;
    }
    return { atoms: atoms, bonds: bonds, label: label };
  }
  function unitRight(m) { var len = Math.max(m.c.length, m.d.length); return len > 1 ? Math.max(1.7, 1.25 + (len * 11.5 + 2) / SC) : 1.7; }
  function unitBrackets(m) { return { brackets: { x1: -0.45, x2: unitRight(m), y1: -1.55, y2: 1.55 } }; }
  function unitSpec(m, label) { return chainSpec(m, 1, label, { endR: unitRight(m) + 0.35 }); }

  /* ---------- row drawer for condensation polymers (local helper) ------------
     S1.mol.structural cannot draw group labels with trimmed bonds, boxes for "the rest
     of the molecule", highlights or repeat brackets, so this small drawer does it in
     the same visual style.  rows: [[item, item …], …]; item = {nodes, contL, contR, bracket}
     | {sign: '+'} ; node = {l, box, top: {l, order}, bot: {l, order}, hl: 'leave' | 'link' | 'new'} */
  function sub(s) { return String(s).replace(/\d/g, function (d) { return '₀₁₂₃₄₅₆₇₈₉'.charAt(Number(d)); }); }
  function drawRows(host, rows, label) {
    host.innerHTML = ''; host.setAttribute('data-i18n', 'off'); host.classList.add('mol');
    var svg = svgEl('svg', { role: 'img', class: 'mol__svg', 'aria-label': label }, host);
    svg.style.maxWidth = '100%'; svg.style.height = 'auto';
    var BOND = 19, FS = 17, y = 0, maxW = 0, laid = [];
    function nodeW(n) { return n.box ? Math.max(46, sub(n.l).length * 7.6 + 10) : Math.max(13, n.l.length * 11.5); }
    rows.forEach(function (row) {
      var x = 0, items = [];
      row.forEach(function (it) {
        if (it.sign) { items.push({ sign: it.sign, x: x + 12 }); x += 34; return; }
        var start = x, pos = [];
        if (it.bracket) x += 10;
        if (it.contL) x += BOND + 4;
        it.nodes.forEach(function (n, i) { var wd = nodeW(n); if (i) x += BOND; pos.push({ n: n, x: x + wd / 2, w: wd }); x += wd; });
        if (it.contR) x += BOND + 4;
        if (it.bracket) x += 24;
        items.push({ it: it, pos: pos, x0: start, x1: x });
        x += 6;
      });
      var rh = row.every(function (it) { return it.sign; }) ? 40 : 104;
      laid.push({ items: items, w: x, y: y + rh / 2 }); maxW = Math.max(maxW, x); y += rh;
    });
    var line = 'stroke:' + INK + ';stroke-width:1.8;stroke-linecap:round';
    function text(x, yy, s, size, weight, fill) {
      var tx = svgEl('text', { x: x, y: yy, 'text-anchor': 'middle', 'dominant-baseline': 'central',
        style: 'fill:' + (fill || INK) + ';font-family:var(--font-body);font-size:' + (size || FS) + 'px;font-weight:' + (weight || 700) }, svg);
      tx.textContent = s; return tx;
    }
    laid.forEach(function (row) {
      var off = (maxW - row.w) / 2, cy = row.y;
      row.items.forEach(function (item) {
        if (item.sign) { text(off + item.x, cy, item.sign, 20, 700); return; }
        var pos = item.pos, it = item.it, first = pos[0], last = pos[pos.length - 1];
        pos.forEach(function (p, i) {
          var px = off + p.x, n = p.n;
          if (i) { var q = pos[i - 1]; svgEl('line', { x1: off + q.x + q.w / 2 + 2, y1: cy, x2: px - p.w / 2 - 2, y2: cy, style: line }, svg); }
          if (n.box) {
            svgEl('rect', { x: px - p.w / 2, y: cy - 13, width: p.w, height: 26, style: 'fill:var(--surface-2);stroke:' + INK + ';stroke-width:1.4' }, svg);
            text(px, cy + 0.5, sub(n.l), 13, 600);
          } else text(px, cy + 0.5, n.l);
          [['top', -1], ['bot', 1]].forEach(function (tb) {
            var s = n[tb[0]]; if (!s) return;
            var offs = s.order === 2 ? [-3, 3] : [0];
            offs.forEach(function (o) { svgEl('line', { x1: px + o, y1: cy + tb[1] * 11, x2: px + o, y2: cy + tb[1] * 24, style: line }, svg); });
            text(px, cy + tb[1] * 35, s.l);
          });
        });
        if (it.contL) svgEl('line', { x1: off + first.x - first.w / 2 - 2, y1: cy, x2: off + first.x - first.w / 2 - 2 - BOND - 4, y2: cy, style: line }, svg);
        if (it.contR) svgEl('line', { x1: off + last.x + last.w / 2 + 2, y1: cy, x2: off + last.x + last.w / 2 + 2 + BOND + 4, y2: cy, style: line }, svg);
        if (it.bracket) {
          var Lx = off + first.x - first.w / 2 - (it.contL ? BOND / 2 + 3 : 4), Rx = off + last.x + last.w / 2 + (it.contR ? BOND / 2 + 3 : 4), T = cy - 47, B = cy + 47;
          var st = 'fill:none;stroke:' + INK + ';stroke-width:1.8';
          svgEl('path', { d: 'M' + (Lx + 7) + ' ' + T + ' H' + Lx + ' V' + B + ' H' + (Lx + 7), style: st }, svg);
          svgEl('path', { d: 'M' + (Rx - 7) + ' ' + T + ' H' + Rx + ' V' + B + ' H' + (Rx - 7), style: st }, svg);
          var nt = text(Rx + 9, B - 2, 'n', 16, 700); nt.style.fontStyle = 'italic';
        }
        // highlights: one outline around each run of nodes that share a tag
        var i = 0;
        while (i < pos.length) {
          var tag = pos[i].n.hl, j = i;
          if (!tag) { i++; continue; }
          while (j + 1 < pos.length && pos[j + 1].n.hl === tag) j++;
          var hx0 = off + pos[i].x - pos[i].w / 2 - 5, hx1 = off + pos[j].x + pos[j].w / 2 + 5, tall = false;
          for (var q2 = i; q2 <= j; q2++) if (pos[q2].n.top || pos[q2].n.bot) tall = true;
          if (tag === 'leave') {
            svgEl('rect', { x: hx0, y: cy - 15, width: hx1 - hx0, height: 30, rx: 6, style: 'fill:none;stroke:' + ACC + ';stroke-width:2;stroke-dasharray:5 4' }, svg);
          } else {
            var uy = cy + (tall ? 49 : 18);
            svgEl('path', { d: 'M' + hx0 + ' ' + (uy - 5) + ' V' + uy + ' H' + hx1 + ' V' + (uy - 5), style: 'fill:none;stroke:' + ACC + ';stroke-width:2.4' }, svg);
          }
          i = j + 1;
        }
      });
    });
    var h = y + 4;
    svg.setAttribute('viewBox', '-8 0 ' + (maxW + 16) + ' ' + h);
    svg.setAttribute('width', maxW + 16); svg.setAttribute('height', h);
    return svg;
  }
  /* Node builders for the three kinds of condensation monomer. */
  var O2 = { l: 'O', order: 2 }, Hs = { l: 'H' };
  function N(l, more) { var n = { l: l }; if (more) for (var k in more) n[k] = more[k]; return n; }
  function boxNode(l) { return { l: l, box: true }; }
  function waterItem(hl) { return { nodes: [N('H', { hl: hl }), N('O', { hl: hl }), N('H', { hl: hl })] }; }
  /* sys: {kind: 'ester' | 'amide' | 'peptide', a: 'box text of monomer A', b: 'box text of monomer B'} */
  function condParts(sys) {
    var X = sys.kind === 'ester' ? 'O' : 'N', xb = sys.kind === 'ester' ? null : Hs, P = {};
    if (sys.kind === 'peptide') {
      var aa = function (r, hlN, hlC) {
        return [N('H', { hl: hlN }), N('N', { bot: Hs }), N('C', { top: Hs, bot: { l: r } }), N('C', { top: O2 }), N('O', { hl: hlC }), N('H', { hl: hlC })];
      };
      P.monoA = function (mark) { return { nodes: aa(sys.a, null, mark ? 'leave' : null) }; };
      P.monoB = function (mark) { return { nodes: aa(sys.b, mark ? 'leave' : null, null) }; };
      P.dimer = function (tag) {
        return { nodes: [N('H'), N('N', { bot: Hs }), N('C', { top: Hs, bot: { l: sys.a } }), N('C', { top: O2, hl: tag }), N('N', { bot: Hs, hl: tag }),
          N('C', { top: Hs, bot: { l: sys.b } }), N('C', { top: O2 }), N('O'), N('H')] };
      };
      P.rep = function () { return { nodes: [N('N', { bot: Hs }), N('C', { top: Hs, bot: { l: 'R' } }), N('C', { top: O2 })], contL: true, contR: true, bracket: true }; };
      return P;
    }
    P.monoA = function (mark) { var h = mark ? 'leave' : null; return { nodes: [N('H'), N(X, { bot: xb }), boxNode(sys.a), N(X, { bot: xb }), N('H', { hl: h })] }; };
    P.monoB = function (mark) { var h = mark ? 'leave' : null; return { nodes: [N('H', { hl: h }), N('O', { hl: h }), N('C', { top: O2 }), boxNode(sys.b), N('C', { top: O2 }), N('O'), N('H')] }; };
    P.dimer = function (tag) {
      return { nodes: [N('H'), N(X, { bot: xb }), boxNode(sys.a), N(X, { bot: xb, hl: tag }), N('C', { top: O2, hl: tag }), boxNode(sys.b), N('C', { top: O2 }), N('O'), N('H')] };
    };
    P.rep = function () {
      return { nodes: [N(X, { bot: xb }), boxNode(sys.a), N(X, { bot: xb }), N('C', { top: O2 }), boxNode(sys.b), N('C', { top: O2 })], contL: true, contR: true, bracket: true };
    };
    return P;
  }

  /* ==========================================================================
     4. Addition polymer builder
     ========================================================================== */
  S1.widgets.register('s2-4.addition', function (w) {
    var M = monomers();
    var FORWARD = ['ethene', 'propene', 'chloroethene', 'tetrafluoroethene', 'phenylethene'];
    var REVERSE = [
      ['chloroethene', ['dichloro11', 'ethene', 'dichloro12']], ['propene', ['but2ene', 'ethene', 'chloroethene']],
      ['tetrafluoroethene', ['difluoro11', 'ethene', 'chloroethene']], ['but2ene', ['propene', 'ethene', 'dichloro12']],
      ['dichloro11', ['chloroethene', 'dichloro12', 'ethene']], ['propenenitrile', ['propene', 'ethene', 'chloroethene']],
      ['phenylethene', ['propene', 'ethene', 'but2ene']], ['difluoro11', ['tetrafluoroethene', 'ethene', 'dichloro11']]
    ];
    var key = 'ethene', step = 0, reverse = false, rev = null;
    var sel = w.select({ label: t('Monomer'), value: key, options: FORWARD.map(function (k) { return { value: k, label: M[k].name + '  ' + M[k].mono }; }),
      onChange: function (v) { key = v; step = 0; reverse = false; update(); } });
    var bBack = w.button(t('Back'), function () { if (step > 0) { step -= 1; update(); } });
    var bNext = w.button(t('Next step'), function () { if (step < 3) { step += 1; update(); } }, { primary: true });
    var bRev = w.button(t('Reverse: find the monomer'), function () { reverse = true; newReverse(); });
    var bFwd = w.button(t('Back to the builder'), function () { reverse = false; step = 0; update(); });

    var head = el('div', { class: 's24-bar' }); w.stage.appendChild(head);
    var draw = el('div', { class: 's24-stage' }); w.stage.appendChild(draw);
    var choices = el('div', { class: 's24-choices' }); w.stage.appendChild(choices);
    var fb = el('div', { class: 'feedback', role: 'status' }); w.stage.appendChild(fb);
    var setMono = w.readoutItem(t('Monomer'));
    var setRep = w.readoutItem(t('Repeating unit'));
    var setNote = w.readoutItem(t('Check'), { text: true });

    var STEPS = [
      [t('Step 1 of 4: three monomer molecules'), t('Each monomer has a carbon to carbon double bond, C=C.')],
      [t('Step 2 of 4: open each double bond'), t('One of the two bonds in each C=C breaks. Each of the two carbons can now form one new bond. This picture is a book-keeping model, not the reaction mechanism.')],
      [t('Step 3 of 4: join the units'), t('The new bonds link the carbons into one long chain. Only single bonds remain in the backbone. The side groups have not moved. No atoms are lost.')],
      [t('Step 4 of 4: the repeating unit'), t('One pair of backbone carbons with its four side groups, in brackets. The bonds must cross the brackets. The letter n means a very large number.')]
    ];
    function update() {
      var m = M[key];
      sel.el.hidden = reverse; bBack.hidden = reverse; bNext.hidden = reverse; bRev.hidden = reverse; bFwd.hidden = !reverse;
      fb.innerHTML = ''; fb.className = 'feedback'; choices.innerHTML = '';
      if (reverse) return;
      bBack.disabled = step === 0; bNext.disabled = step === 3;
      head.innerHTML = '<p><b>' + STEPS[step][0] + '</b> ' + STEPS[step][1] + '</p>';
      if (step === 0) drawStruct(draw, monomerSpec(m, 3, t('Three separate molecules of {name}, each with a carbon to carbon double bond', { name: m.name })));
      else if (step === 1) drawStruct(draw, chainSpec(m, 3, t('Three units of {name} with the double bonds opened: each unit has a single bond between its two carbons and one free bond at each end', { name: m.name }), { open: true }));
      else if (step === 2) drawStruct(draw, chainSpec(m, 3, t('A chain of three repeating units made from {name}: six backbone carbons joined by single bonds, with a continuation bond at each end', { name: m.name })));
      else drawStruct(draw, unitSpec(m, t('Repeating unit of the polymer of {name}: {unit}, in square brackets with n', { name: m.name, unit: m.rep })), unitBrackets(m));
      setMono(m.mono);
      setRep(step === 3 ? '[' + m.rep + ']<sub><i>n</i></sub>' : t('reach step 4'));
      setNote(step === 3 ? t('The repeating unit has the same atoms as one monomer: nothing is lost, so the atom economy is 100 %.') : t('Count the atoms at each step. The number never changes.'));
    }
    function newReverse() {
      var r;
      do { r = REVERSE[Math.floor(Math.random() * REVERSE.length)]; } while (rev && r[0] === rev[0]);
      rev = r;
      sel.el.hidden = true; bBack.hidden = true; bNext.hidden = true; bRev.hidden = true; bFwd.hidden = false;
      fb.innerHTML = ''; fb.className = 'feedback'; choices.innerHTML = '';
      head.innerHTML = '<p><b>' + t('Find the monomer.') + '</b> ' + t('This is a section of an addition polymer. Which monomer made it?') + '</p>';
      drawStruct(draw, chainSpec(M[r[0]], 3, t('A section of an addition polymer chain with six backbone carbons. Repeating unit: {unit}', { unit: M[r[0]].rep })));
      var keys = S1.util.shuffle([r[0]].concat(r[1]));
      keys.forEach(function (k) {
        var b = el('button', { class: 'btn s24-choice', type: 'button', 'aria-label': M[k].mono });
        var inner = el('span', { class: 's24-choice__mol' }); b.appendChild(inner);
        choices.appendChild(b);
        drawStruct(inner, monomerSpec(M[k], 1, M[k].mono));
        b.addEventListener('click', function () {
          var right = k === r[0];
          fb.className = 'feedback ' + (right ? 'feedback--right' : 'feedback--wrong');
          fb.innerHTML = '<span class="feedback__label">' + (right ? t('Correct') : t('Not this one')) + '</span><p>' +
            (right ? t('The monomer is {name}, {mono}. Two neighbouring backbone carbons and their four side groups make one repeating unit. Put the double bond back between those two carbons.', { name: M[k].name, mono: M[k].mono })
              : t('Split the chain into pairs of backbone carbons. Each pair, with its four side groups, came from one monomer. Compare those side groups with this molecule, then try again.')) + '</p>';
          if (right) {
            var again = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Another polymer') });
            again.addEventListener('click', newReverse); fb.appendChild(again);
          }
        });
      });
      setMono('?'); setRep('[' + M[r[0]].rep + ']<sub><i>n</i></sub>'); setNote(t('The repeating unit of an addition polymer has two backbone carbons.'));
    }
    update();
  });

  /* ==========================================================================
     5. (AHL) Condensation polymer builder
     ========================================================================== */
  S1.widgets.register('s2-4.condensation', function (w) {
    var SYS = {
      ester: { kind: 'ester', a: '(CH2)2', b: '(CH2)4', name: t('Polyester: diol + dicarboxylic acid'), link: t('ester link, –COO–'),
        A: t('a diol (two –OH groups)'), B: t('a dicarboxylic acid (two –COOH groups)'), rep: '–O–(CH₂)₂–O–CO–(CH₂)₄–CO–' },
      amide: { kind: 'amide', a: '(CH2)6', b: '(CH2)4', name: t('Polyamide: diamine + dicarboxylic acid'), link: t('amide link, –CONH–'),
        A: t('a diamine (two –NH₂ groups)'), B: t('a dicarboxylic acid (two –COOH groups)'), rep: '–NH–(CH₂)₆–NH–CO–(CH₂)₄–CO–' },
      peptide: { kind: 'peptide', a: 'R¹', b: 'R²', name: t('Polypeptide: amino acids'), link: t('amide link, –CONH– (called a peptide bond in proteins)'),
        A: t('an amino acid (one –NH₂ group and one –COOH group)'), B: t('a second amino acid'), rep: '–NH–CHR–CO–' }
    };
    var kind = 'ester', step = 0;
    w.select({ label: t('Polymer type'), value: kind, options: ['ester', 'amide', 'peptide'].map(function (k) { return { value: k, label: SYS[k].name }; }),
      onChange: function (v) { kind = v; step = 0; update(); } });
    var bBack = w.button(t('Back'), function () { if (step > 0) { step -= 1; update(); } });
    var bNext = w.button(t('Next step'), function () { if (step < 4) { step += 1; update(); } }, { primary: true });
    var head = el('div', { class: 's24-bar' }); w.stage.appendChild(head);
    var draw = el('div', { class: 's24-stage' }); w.stage.appendChild(draw);
    var setLink = w.readoutItem(t('Link formed'), { text: true });
    var setSmall = w.readoutItem(t('Small molecule released'));
    var setRep = w.readoutItem(t('Repeating unit'));

    function update() {
      var s = SYS[kind], P = condParts(s), narrow = w.stage.clientWidth < 560, rows, title, text, label;
      bBack.disabled = step === 0; bNext.disabled = step === 4;
      if (step === 0) {
        title = t('Step 1 of 5: the two monomers');
        text = kind === 'peptide'
          ? t('Monomer A is {A}. Monomer B is {B}. Each monomer has two functional groups, one at each end, so it can join on both sides. R¹ and R² stand for the side groups.', { A: s.A, B: s.B })
          : t('Monomer A is {A}. Monomer B is {B}. Each monomer has two functional groups, one at each end, so it can join on both sides. A box stands for the rest of the molecule.', { A: s.A, B: s.B });
        rows = narrow ? [[P.monoA()], [{ sign: '+' }, P.monoB()]] : [[P.monoA(), { sign: '+' }, P.monoB()]];
        label = t('Two monomers, each with a functional group at both ends');
      } else if (step === 1) {
        title = t('Step 2 of 5: find the atoms that leave');
        text = t('The dashed outlines mark an H atom on one monomer and the –OH of a –COOH group on the other monomer. Together these atoms make one molecule of water.');
        rows = narrow ? [[P.monoA(true)], [{ sign: '+' }, P.monoB(true)]] : [[P.monoA(true), { sign: '+' }, P.monoB(true)]];
        label = t('The same two monomers. A hydrogen atom on one monomer and the OH of a carboxyl group on the other monomer are outlined.');
      } else if (step === 2) {
        title = t('Step 3 of 5: the link forms and water is released');
        text = t('A new bond joins the two monomers. The underlined atoms are the {link}. The product still has a functional group at each end, so it can react again and the chain grows.', { link: s.link });
        rows = [[P.dimer('link')], [{ sign: '+' }, waterItem(null)]];
        label = t('The two monomers joined by a new link, and one molecule of water');
      } else if (step === 3) {
        title = t('Step 4 of 5: the repeating unit');
        text = kind === 'peptide'
          ? t('One amino acid unit with its end atoms removed, in brackets with n. R stands for the side group, which differs from one amino acid to the next.')
          : t('One unit from A joined to one unit from B, with the end H and OH removed. The bonds cross the brackets. One link is inside the unit. The second link forms where units join.');
        rows = [[P.rep()]];
        label = t('Repeating unit of the condensation polymer in square brackets with n: {unit}', { unit: s.rep });
      } else {
        title = t('Step 5 of 5: hydrolysis, the reverse reaction');
        text = t('Water breaks the underlined link. The –OH of water joins the C=O carbon and the H of water joins the O or N atom. The monomers form again. Biological macromolecules are broken down in the same way.');
        rows = [[P.dimer('link')], [{ sign: '+' }, waterItem('leave')], [{ sign: '↓' }], narrow ? [P.monoA(true)] : [P.monoA(true), { sign: '+' }, P.monoB(true)]];
        if (narrow) rows.push([{ sign: '+' }, P.monoB(true)]);
        label = t('Hydrolysis: the linked molecule and one water molecule give back the two monomers. The atoms that came from water are outlined.');
      }
      head.innerHTML = '<p><b>' + title + '</b> ' + text + '</p>';
      drawRows(draw, rows, label);
      setLink(step >= 2 ? s.link : '?');
      setSmall(step >= 2 ? 'H<sub>2</sub>O' : '?');
      setRep(step >= 3 ? '[' + s.rep + ']<sub><i>n</i></sub>' : '?');
    }
    w.listen(window, 'resize', function () { update(); });
    update();
  });

  /* ==========================================================================
     Static structures in the page: <div data-s24-draw="rep" data-m="propene">
     ========================================================================== */
  function drawStatic(root) {
    if (!S1.mol) return;
    var M = monomers();
    Array.prototype.forEach.call((root || document).querySelectorAll('[data-s24-draw]'), function (host) {
      var kind = host.getAttribute('data-s24-draw'), m = M[host.getAttribute('data-m')], label = host.getAttribute('data-label') || '';
      if (label) label = S1.t(label);          // the text alternative follows the language (the drawing is redrawn on s1:langchange)
      if (kind === 'mono' && m) drawStruct(host, monomerSpec(m, 1, label || m.mono));
      else if (kind === 'chain' && m) drawStruct(host, chainSpec(m, Number(host.getAttribute('data-units')) || 3, label || m.rep));
      else if (kind === 'rep' && m) drawStruct(host, unitSpec(m, label || m.rep), unitBrackets(m));
      else if (kind === 'pair' && m) drawStruct(host, chainSpec(m, 2, label || m.rep), { marks: [{ x: 0.625, y: 0, rx: 1.15, ry: 1.5 }] });
      else if (kind === 'cond') {
        var P = condParts({ kind: host.getAttribute('data-kind'), a: host.getAttribute('data-a'), b: host.getAttribute('data-b') });
        var show = host.getAttribute('data-show'), narrow = (host.clientWidth || window.innerWidth - 80) < 520, rows;
        if (show === 'monomers') rows = narrow ? [[P.monoA(true)], [{ sign: '+' }, P.monoB(true)]] : [[P.monoA(true), { sign: '+' }, P.monoB(true)]];
        else if (show === 'dimer') rows = [[P.dimer('link')]];
        else if (show === 'plain-monomers') rows = narrow ? [[P.monoA()], [{ sign: '+' }, P.monoB()]] : [[P.monoA(), { sign: '+' }, P.monoB()]];
        else rows = [[P.rep()]];
        drawRows(host, rows, label);
      }
      host.classList.add('s24-drawn');
    });
  }
  S1.ready(function () { drawStatic(document); });
  document.addEventListener('s1:langchange', function () { window.setTimeout(function () { drawStatic(document); }, 0); });
})();
