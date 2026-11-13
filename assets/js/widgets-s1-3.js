/* ==========================================================================
   Widgets for topic 1.3 — Electron configurations.
   s1-3.spectra    continuous vs line spectrum, with a wavelength cursor
   s1-3.hydrogen   hydrogen energy levels → emission lines (AHL: E = hf, c = λf)
   s1-3.orbitals   shapes of the s orbital and the three p orbitals
   s1-3.config     electron configuration builder, Z = 1–36 and common ions
   s1-3.ie1        (AHL) first ionization energy against atomic number
   s1-3.succ       (AHL) successive ionization energies, with a mystery mode
   Data sources: first ionization energies are the IB data booklet values
   (section 9). Successive ionization energies are rounded to the nearest
   kJ mol-1 from the standard CRC-based table.
   Every user-visible string goes through t("English text", {vars}) so the
   site can be translated; whole sentences are kept as single strings.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var H = chem.constants.h, C = chem.constants.c, NA = chem.constants.NA;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var MINUS = '−';
  var KJMOL = 'kJ mol<sup>−1</sup>';      // unit, HTML
  var KJMOL_TXT = 'kJ mol⁻¹';         // unit, plain text for canvas

  /* ---------- Section quizzes chosen by syllabus code -------------------------
     <div data-s13-quiz="Structure 1.3.1,Structure 1.3.2" data-count="4" data-title="…">
     The bank is written separately, so questions are picked by their `syllabus`
     field at load time and handed to the normal quiz embed through data-ids. */
  (function () {
    var hosts = document.querySelectorAll('[data-s13-quiz]');
    var bank = (S1.questions && S1.questions.byTopic) ? S1.questions.byTopic('s1-3') : [];
    Array.prototype.forEach.call(hosts, function (host) {
      var codes = host.getAttribute('data-s13-quiz').split(',').map(function (s) { return s.trim(); });
      var ids = bank.filter(function (q) { return codes.indexOf(q.syllabus) !== -1; }).map(function (q) { return q.id; });
      if (!ids.length) { if (host.parentNode) host.parentNode.removeChild(host); return; }
      host.setAttribute('data-ids', ids.join(','));
      host.setAttribute('data-s1-quiz', '');
    });
  })();

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
  /** Segmented button group in the controls area. items: [{value, label, aria}] → {value, set(v), buttons}. */
  function seg(w, label, items, value, onChange, parent) {
    var id = S1.util.uid('seg');
    var group = el('div', { class: 'seg', role: 'group', 'aria-labelledby': id });
    var state = { value: value, buttons: [] };
    items.forEach(function (it) {
      var b = el('button', { class: 'seg__btn', type: 'button', 'aria-pressed': String(it.value === value), text: it.label });
      if (it.aria) b.setAttribute('aria-label', it.aria);
      b.addEventListener('click', function () { state.set(it.value); if (onChange) onChange(it.value); });
      b._value = it.value;
      state.buttons.push(b);
      group.appendChild(b);
    });
    state.set = function (v) {
      state.value = v;
      state.buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b._value === v)); });
    };
    var wrap = el('div', { class: 'control s13-seg' }, [el('span', { class: 'control__label', id: id, text: label }), group]);
    (parent || w.controls).appendChild(wrap);
    state.el = wrap;
    return state;
  }
  function sup(n) { return '<sup>' + n + '</sup>'; }
  function arrowHead(ctx, x, y, dir, size) { // dir: +1 points down, -1 points up
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - size * 0.6, y - dir * size); ctx.lineTo(x + size * 0.6, y - dir * size); ctx.closePath(); ctx.fill();
  }
  /** Place text labels in rows so that they do not overlap. items: [{x, text}] sorted by x. Returns row index per item. */
  function packRows(ctx, items, gap, maxRows) {
    var ends = [];
    return items.map(function (it) {
      var wd = ctx.measureText(it.text).width, left = it.x - wd / 2, r = 0;
      while (r < maxRows - 1 && ends[r] != null && ends[r] + gap > left) r++;
      ends[r] = left + wd;
      return r;
    });
  }
  function elName(z) { return t(chem.element(z).name); }

  /* ---------- Colours of visible light ----------------------------------------
     Colour names follow the data booklet colour wheel (section 15). */
  var WHEEL = [[400, 424, 'violet'], [424, 491, 'blue'], [491, 575, 'green'], [575, 585, 'yellow'], [585, 647, 'orange'], [647, 700, 'red']];
  function colourKey(nm) {
    for (var i = 0; i < WHEEL.length; i++) if (nm >= WHEEL[i][0] && nm <= WHEEL[i][1]) return WHEEL[i][2];
    return nm < 400 ? 'ultraviolet' : 'infrared';
  }
  function colourName(key) {
    return ({ violet: t('violet'), blue: t('blue'), green: t('green'), yellow: t('yellow'), orange: t('orange'), red: t('red'), ultraviolet: t('ultraviolet'), infrared: t('infrared') })[key];
  }
  /* Approximate screen colour for a wavelength. A physical rendering of the spectrum
     cannot come from theme tokens, so this is the one place colours are computed. */
  function wavelengthRGB(nm) {
    var r = 0, g = 0, b = 0;
    if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
    else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
    else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
    else if (nm <= 780) { r = 1; }
    var f = nm < 420 ? 0.3 + 0.7 * (nm - 380) / 40 : nm > 700 ? 0.3 + 0.7 * (780 - nm) / 80 : 1;
    function ch(v) { return Math.round(255 * Math.pow(Math.max(0, v * f), 0.8)); }
    return 'rgb(' + ch(r) + ',' + ch(g) + ',' + ch(b) + ')';
  }

  /* ---------- Hydrogen data ----------------------------------------------------
     Level energies are drawn from E(n = 1) = −1312 kJ mol-1 (the booklet first
     ionization energy of hydrogen). Wavelengths are the measured line positions,
     quoted to 3 significant figures. */
  var RH = 1.0967758e7; // m-1, used only to place the lines; never shown to the student
  function levelE(n) { return n === Infinity ? 0 : -1312 / (n * n); }
  function lineNm(hi, lo) { return chem.roundSig(1e9 / (RH * (1 / (lo * lo) - (hi === Infinity ? 0 : 1 / (hi * hi)))), 3); }
  function lineFreq(hi, lo) { return C * RH * (1 / (lo * lo) - (hi === Infinity ? 0 : 1 / (hi * hi))); }
  function nLabel(n) { return n === Infinity ? '∞' : String(n); }
  var H_TOKENS = { 3: '--h-alpha', 4: '--h-beta', 5: '--h-gamma', 6: '--h-delta' };
  var H_VISIBLE = [[3, 656], [4, 486], [5, 434], [6, 410]];

  /* ==========================================================================
     1. Continuous and line spectra
     ========================================================================== */
  S1.widgets.register('s1-3.spectra', function (w) {
    var setCol = w.readoutItem(t('Colour'));
    var setCmp = w.readoutItem(t('Compared with red light (700 nm)'), { text: true });
    var setH = w.readoutItem(t('Hydrogen at this wavelength'), { text: true });
    var slider = w.slider({ label: t('Wavelength'), min: 400, max: 700, step: 1, value: 656, unit: 'nm', onInput: update });
    var cv = w.canvas({ height: 214, label: t('Two spectra on the same wavelength scale from 400 to 700 nanometres. The top strip is a continuous spectrum: an unbroken band of colour from violet to red. The bottom strip is the line emission spectrum of hydrogen: four separate bright lines at 410, 434, 486 and 656 nanometres on a dark background.') });
    cv.draw(function (ctx, W) {
      var F = fonts(w), ink = w.color('--ink'), ink3 = w.color('--ink-3'), band = w.color('--band-bg');
      var x0 = 8, x1 = W - 8, L0 = 390, L1 = 710;
      function X(nm) { return x0 + (nm - L0) / (L1 - L0) * (x1 - x0); }
      ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
      ctx.font = F.body(13, true); ctx.fillStyle = ink;
      ctx.fillText(t('Continuous spectrum'), x0, 14);
      ctx.fillText(t('Line emission spectrum of hydrogen'), x0, 108);
      var y1 = 22, y2 = 116, h = 50, x;
      ctx.fillStyle = band; ctx.fillRect(x0, y1, x1 - x0, h); ctx.fillRect(x0, y2, x1 - x0, h);
      for (x = Math.ceil(X(400)); x <= Math.floor(X(700)); x++) {
        ctx.fillStyle = wavelengthRGB(L0 + (x - x0) / (x1 - x0) * (L1 - L0));
        ctx.fillRect(x, y1, 1.5, h);
      }
      H_VISIBLE.forEach(function (p) {
        ctx.fillStyle = w.color(H_TOKENS[p[0]]);
        ctx.fillRect(X(p[1]) - 1.5, y2, 3, h);
      });
      var ya = y2 + h + 8;
      ctx.strokeStyle = ink3; ctx.lineWidth = 1; ctx.fillStyle = ink3; ctx.font = F.mono(12); ctx.textAlign = 'center';
      for (var tk = 400; tk <= 700; tk += 50) {
        ctx.beginPath(); ctx.moveTo(X(tk), ya); ctx.lineTo(X(tk), ya + 5); ctx.stroke();
        if (W >= 420 || tk % 100 === 0) ctx.fillText(String(tk), X(tk), ya + 18);
      }
      ctx.beginPath(); ctx.moveTo(X(400), ya); ctx.lineTo(X(700), ya); ctx.stroke();
      ctx.font = F.body(12); ctx.textAlign = 'left';
      ctx.fillText(t('wavelength / nm'), x0, ya + 36);
      ctx.textAlign = 'right';
      ctx.fillText(t('← higher frequency, higher energy'), x1, ya + 36);
      var xc = X(slider.value);
      ctx.strokeStyle = ink; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(xc, y1 - 4); ctx.lineTo(xc, y1 + h + 4); ctx.moveTo(xc, y2 - 4); ctx.lineTo(xc, y2 + h + 4); ctx.stroke();
      ctx.fillStyle = ink; arrowHead(ctx, xc, y1 - 1, 1, 6); arrowHead(ctx, xc, y2 - 1, 1, 6);
    });
    function update() {
      var nm = slider.value;
      setCol(t('{colour}, {nm} nm', { colour: colourName(colourKey(nm)), nm: nm }));
      setCmp(nm >= 700 ? t('This is the red end of the visible spectrum: the longest wavelength, lowest frequency and lowest energy per photon that you can see.')
        : t('Shorter wavelength, so higher frequency and more energy per photon.'));
      var hit = null;
      H_VISIBLE.forEach(function (p) { if (Math.abs(p[1] - nm) <= 2) hit = p[1]; });
      setH(hit ? t('Bright line. Hydrogen atoms emit light of {nm} nm.', { nm: hit }) : t('Dark. Hydrogen atoms emit no light of this wavelength. The continuous spectrum has light here.'));
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     2. Hydrogen emission explorer
     ========================================================================== */
  S1.widgets.register('s1-3.hydrogen', function (w) {
    var UPPER = [2, 3, 4, 5, 6, Infinity], LOWER = [1, 2, 3];
    var hi = 3, lo = 2, showAll = false, found = { 1: {}, 2: {}, 3: {} };
    found[2][3] = true;

    function levelAria(n) { return n === Infinity ? t('n equals infinity') : t('n equals {n}', { n: n }); }
    var segHi = seg(w, t('Electron falls from n ='), UPPER.map(function (n) { return { value: n, label: nLabel(n), aria: levelAria(n) }; }), hi, function (v) { hi = v; if (hi <= lo) { lo = Math.min(3, hi - 1); segLo.set(lo); } update(); });
    var segLo = seg(w, t('to n ='), LOWER.map(function (n) { return { value: n, label: String(n), aria: levelAria(n) }; }), lo, function (v) { lo = v; if (hi <= lo) { hi = lo + 1; segHi.set(hi); } update(); });
    var allBtn = w.button(t('Show every line in this series'), function () { showAll = !showAll; allBtn.setAttribute('aria-pressed', String(showAll)); update(); });
    allBtn.setAttribute('aria-pressed', 'false');
    w.button(t('Clear my lines'), function () { found = { 1: {}, 2: {}, 3: {} }; update(); });

    var setTr = w.readoutItem(t('Transition'));
    var setLam = w.readoutItem(t('Wavelength'));
    var setReg = w.readoutItem(t('Region'));
    var setNote = w.readoutItem(t('What it shows'), { text: true });

    function lineColour(h, l) { return (l === 2 && H_TOKENS[h]) ? w.color(H_TOKENS[h]) : null; }

    /* --- energy-level diagram --- */
    var dia = w.canvas({ height: 380, label: t('Energy-level diagram of the hydrogen atom, drawn to scale. Level n = 1 is far below the others. Levels n = 2 to n = 6 get closer and closer together and converge at n = infinity, where the energy is zero. Downward arrows show the transitions you have chosen.') });
    dia.draw(function (ctx, W, Ht) {
      var F = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), accent = w.color('--accent');
      var narrow = W < 430;
      var top = 26, bot = Ht - 30, xL = narrow ? 30 : 46, xR = W - (narrow ? 112 : 170);
      function Y(n) { return bot - (levelE(n) + 1312) / 1312 * (bot - top); }
      ctx.strokeStyle = ink3; ctx.fillStyle = ink3; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(14, bot + 6); ctx.lineTo(14, top + 4); ctx.stroke(); arrowHead(ctx, 14, top - 4, -1, 8);
      ctx.save(); ctx.translate(11, (top + bot) / 2 + 30); ctx.rotate(-Math.PI / 2); ctx.font = F.body(12); ctx.textAlign = 'center'; ctx.fillText(t('energy'), 0, -5); ctx.restore();
      // labels for the crowded upper levels are fanned out with leader lines
      var labY = { 1: Y(1), 2: Y(2) };
      [3, 4, 5, 6, Infinity].forEach(function (n, i) { labY[n] = top + 58 - i * 15; });
      ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
      [1, 2, 3, 4, 5, 6, Infinity].forEach(function (n) {
        var y = Y(n), active = (n === hi || n === lo);
        ctx.strokeStyle = active ? ink : ink2; ctx.lineWidth = active ? 2.5 : 1.25;
        if (n === Infinity) ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(xL, y); ctx.lineTo(xR, y); ctx.stroke(); ctx.setLineDash([]);
        ctx.strokeStyle = ink3; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(xR + 2, y); ctx.lineTo(xR + 14, labY[n]); ctx.stroke();
        ctx.fillStyle = active ? ink : ink2; ctx.font = F.mono(12, active);
        ctx.fillText('n = ' + nLabel(n), xR + 18, labY[n]);
        ctx.textAlign = 'right'; ctx.fillStyle = ink3; ctx.font = F.mono(12);
        ctx.fillText(n === Infinity ? '0' : MINUS + Math.round(-levelE(n)), W - 2, labY[n]);
        ctx.textAlign = 'left';
      });
      ctx.fillStyle = ink3; ctx.font = F.body(11); ctx.textAlign = 'right'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(narrow ? KJMOL_TXT : t('energy / {unit}', { unit: KJMOL_TXT }), W - 2, Ht - 6);
      // arrows: one slot per upper level
      var slotW = (xR - xL) / UPPER.length;
      UPPER.forEach(function (u, i) {
        if (u <= lo) return;
        var current = (u === hi), was = found[lo][u];
        if (!current && !was && !showAll) return;
        var x = xL + (i + 0.5) * slotW, ya = Y(u), yb = Y(lo);
        var col = current ? accent : ink3;
        ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = current ? 3 : 1.5;
        if (u === Infinity) ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(x, ya); ctx.lineTo(x, yb - 7); ctx.stroke(); ctx.setLineDash([]);
        arrowHead(ctx, x, yb - 1, 1, current ? 10 : 7);
      });
      ctx.textAlign = 'left'; ctx.fillStyle = ink3; ctx.font = F.body(11);
      ctx.fillText(narrow ? t('Arrow: electron falls, photon emitted') : t('Each arrow: one electron falls and one photon is emitted'), xL, bot + 18);
    });

    /* --- spectrum strip for the chosen series --- */
    var strip = w.canvas({ height: 232, label: t('Spectrum strip for the chosen series, plotted against frequency. The lines get closer together towards high frequency and stop at the convergence limit.') });
    strip.draw(function (ctx, W) {
      var F = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), band = w.color('--band-bg'), soft = w.color('--surface-2');
      var x0 = 8, x1 = W - 8, sy = 80, sh = 54;
      var fA = lineFreq(lo + 1, lo), fB = lineFreq(Infinity, lo), pad = (fB - fA) * 0.07;
      function X(f) { return x0 + (f - (fA - pad)) / (fB - fA + 2 * pad) * (x1 - x0); }
      ctx.textBaseline = 'alphabetic';
      ctx.font = F.body(13, true); ctx.fillStyle = ink; ctx.textAlign = 'left';
      ctx.fillText(t('Lines from transitions down to n = {n}', { n: lo }), x0, 14);
      // strip background: dark where the light is visible, plain where it is not
      ctx.fillStyle = soft; ctx.fillRect(x0, sy, x1 - x0, sh);
      ctx.strokeStyle = ink3; ctx.lineWidth = 1; ctx.strokeRect(x0 + 0.5, sy + 0.5, x1 - x0 - 1, sh - 1);
      ctx.font = F.body(11); ctx.fillStyle = ink3;
      if (lo === 2) {
        var vEnd = Math.min(x1, X(C / 400e-9));
        ctx.fillStyle = band; ctx.fillRect(x0, sy, vEnd - x0, sh);
      }
      ctx.fillStyle = ink3; ctx.textAlign = 'left';
      ctx.fillText(lo === 2 ? t('Dark band: visible light. Paler band on the right: ultraviolet.') : lo === 1 ? t('All of these lines are ultraviolet (not visible).') : t('All of these lines are infrared (not visible).'), x0, 208);
      var n;
      if (showAll) {
        ctx.globalAlpha = 0.45;
        for (n = lo + 1; n <= 60; n++) {
          var nmA = 1e9 * C / lineFreq(n, lo);
          ctx.fillStyle = (nmA >= 400 && nmA <= 700) ? (lineColour(n, lo) || wavelengthRGB(nmA)) : ink2;
          ctx.fillRect(X(lineFreq(n, lo)) - 0.75, sy + 1, 1.5, sh - 2);
        }
        ctx.globalAlpha = 1;
      }
      var shown = [];
      UPPER.forEach(function (u) { if (u > lo && (found[lo][u] || u === hi || showAll)) shown.push(u); });
      shown.forEach(function (u) {
        var x = X(lineFreq(u, lo));
        if (u === Infinity) {
          ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
          ctx.beginPath(); ctx.moveTo(x, sy - 3); ctx.lineTo(x, sy + sh + 3); ctx.stroke(); ctx.setLineDash([]);
        } else {
          ctx.fillStyle = lineColour(u, lo) || ink;
          ctx.fillRect(x - 1.5, sy + 1, 3, sh - 2);
        }
        if (u === hi) { ctx.fillStyle = ink; arrowHead(ctx, x, sy - 2, 1, 7); }
      });
      // labels: upper level above, wavelength below, packed into rows
      shown.sort(function (a, b) { return lineFreq(a, lo) - lineFreq(b, lo); });
      ctx.font = F.mono(12); ctx.textAlign = 'center';
      var topItems = shown.map(function (u) { return { x: X(lineFreq(u, lo)), text: nLabel(u), u: u }; });
      var rowsT = packRows(ctx, topItems, 5, 2);
      topItems.forEach(function (it, i) {
        ctx.fillStyle = it.u === hi ? ink : ink3; ctx.font = F.mono(12, it.u === hi);
        ctx.fillText(it.text, it.x, sy - 18 - rowsT[i] * 13);
      });
      ctx.font = F.mono(12);
      var botItems = shown.map(function (u) { return { x: X(lineFreq(u, lo)), text: chem.toSig(lineNm(u, lo), 3), u: u }; });
      var rowsB = packRows(ctx, botItems, 6, 4);
      botItems.forEach(function (it, i) {
        var yb = sy + sh + 16 + rowsB[i] * 14, tx = Math.max(x0 + 14, Math.min(x1 - 14, it.x));
        ctx.strokeStyle = ink3; ctx.lineWidth = 1;
        if (rowsB[i] > 0) { ctx.beginPath(); ctx.moveTo(it.x, sy + sh + 3); ctx.lineTo(it.x, sy + sh + 7); ctx.stroke(); }
        ctx.fillStyle = it.u === hi ? ink : ink3; ctx.font = F.mono(12, it.u === hi);
        ctx.fillText(it.text, tx, yb);
      });
      ctx.font = F.body(11); ctx.fillStyle = ink3; ctx.textAlign = 'left';
      ctx.fillText(t('from n ='), x0, 30);
      ctx.fillText(t('wavelength / nm'), x0, 226);
      ctx.textAlign = 'right';
      ctx.fillText(t('frequency and energy increase →'), x1, 226);
    });

    /* --- Additional HL calculation panel --- */
    var calc = el('div', { class: 's13-calc', 'data-level': 'ahl' });
    w.el.insertBefore(calc, w.caption || null);

    function update() {
      found[lo][hi] = true;
      var nm = lineNm(hi, lo), isLimit = hi === Infinity;
      var reg = nm < 400 ? 'uv' : nm > 700 ? 'ir' : 'vis';
      setTr('n = ' + nLabel(hi) + ' → n = ' + lo);
      setLam(chem.toSig(nm, 3) + ' nm');
      if (reg === 'uv') setReg(t('ultraviolet'));
      else if (reg === 'ir') setReg(t('infrared'));
      else setReg(hi === 4 ? t('visible, blue (close to green)') : hi === 5 ? t('visible, blue (close to violet)') : t('visible, {colour}', { colour: colourName(colourKey(nm)) }));
      var note;
      if (isLimit) note = t('This is the convergence limit of the series. The lines crowd together and stop here, because the energy levels themselves converge at n = ∞.');
      else if (lo === 1) note = t('Drops to n = 1 are the largest, so these photons have the most energy. All of these lines are ultraviolet.');
      else if (lo === 2) note = reg === 'vis' ? t('A drop to n = 2 from n = 3, 4, 5 or 6 gives one of the four visible lines. A bigger drop gives a shorter wavelength.') : t('Drops to n = 2 from levels above n = 6 fall just outside the visible region, in the ultraviolet.');
      else note = t('Drops to n = 3 are small, so these photons have little energy. All of these lines are infrared.');
      setNote(note);

      var lamM = nm * 1e-9, f = C / lamM, E = H * f, mol = E * NA / 1000;
      var last = (isLimit && lo === 1)
        ? t('This limit is for electrons falling to n = 1, the ground state. So this energy is the first ionization energy of hydrogen. The data booklet value is 1312 {unit}.', { unit: KJMOL })
        : isLimit ? t('This limit belongs to electrons falling to n = {n}. It is the energy needed to remove an electron that starts in n = {n}, not the first ionization energy. For that you need the limit of the lines ending on n = 1.', { n: lo })
          : t('This matches the gap between the two levels on the diagram. The wavelength is rounded to 3 significant figures, so the last digit can differ by 1.');
      calc.innerHTML = '<p class="level-flag"><span class="badge badge--ahl">' + t('Additional HL') + '</span></p>' +
        '<p class="s13-calc__title">' + (isLimit ? t('Calculate this limit step by step') : t('Calculate this photon step by step')) + '</p>' +
        '<div class="worked__math">λ = ' + chem.toSig(nm, 3) + ' nm = ' + chem.sci(lamM, 3) + ' m</div>' +
        '<div class="worked__math"><i>f</i> = <i>c</i> / λ = 3.00 × 10<sup>8</sup> m s<sup>−1</sup> / ' + chem.sci(lamM, 3) + ' m = ' + chem.sci(f, 3) + ' s<sup>−1</sup></div>' +
        '<div class="worked__math"><i>E</i> = <i>hf</i> = 6.63 × 10<sup>−34</sup> J s × ' + chem.sci(f, 3) + ' s<sup>−1</sup> = ' + t('{E} J per photon', { E: chem.sci(E, 3) }) + '</div>' +
        '<div class="worked__math">' + t('per mole: {E} J × 6.02 × 10<sup>23</sup> mol<sup>−1</sup> ÷ 1000 = {m} {unit}', { E: chem.sci(E, 3), m: chem.toSig(mol, 3), unit: KJMOL }) + '</div>' +
        '<p class="small">' + last + '</p>';
      dia.draw(); strip.draw();
    }
    update();
  });

  /* ==========================================================================
     3. Orbital shapes (recognise only)
     ========================================================================== */
  S1.widgets.register('s1-3.orbitals', function (w) {
    var grid = el('div', { class: 's13-orbitals' });
    w.stage.appendChild(grid);
    var defs = [
      { id: 's', name: t('s orbital'), note: t('Sphere. The same in every direction.'), label: t('An s orbital: a sphere centred on the nucleus, where the x, y and z axes cross.') },
      { id: 'px', name: t('p<sub>x</sub> orbital'), note: t('Dumbbell along the x axis.'), label: t('A p x orbital: a dumbbell of two lobes lying along the x axis, one on each side of the nucleus.') },
      { id: 'py', name: t('p<sub>y</sub> orbital'), note: t('Dumbbell along the y axis.'), label: t('A p y orbital: a dumbbell of two lobes lying along the y axis.') },
      { id: 'pz', name: t('p<sub>z</sub> orbital'), note: t('Dumbbell along the z axis.'), label: t('A p z orbital: a dumbbell of two lobes lying along the z axis.') }
    ];
    defs.forEach(function (d) {
      var cell = el('div', { class: 's13-orbitals__cell' });
      var s = svgEl('svg', { viewBox: '-80 -80 160 160', role: 'img', 'aria-label': d.label }, cell);
      var back = svgEl('g', null, s), mid = svgEl('g', null, s), front = svgEl('g', null, s);
      function axis(parent, x1, y1, x2, y2) { svgEl('line', { x1: x1, y1: y1, x2: x2, y2: y2, stroke: 'var(--ink-3)', 'stroke-width': 1.25 }, parent); }
      function lab(txt, x, y) { svgEl('text', { x: x, y: y, text: txt, fill: 'var(--ink-2)', 'font-size': 13, 'font-style': 'italic', 'font-family': 'var(--font-mono)', 'text-anchor': 'middle' }, front); }
      // oblique view: y to the right, z up, x towards you (down-left)
      axis(back, 0, 0, 42, -42);            // x, far half
      axis(back, -70, 0, 70, 0);            // y
      axis(back, 0, 70, 0, -70);            // z
      lab('y', 74, 14); lab('z', 18, -66); lab('x', -56, 62);
      function lobe(parent, cx, cy, rx, ry, rot) {
        svgEl('ellipse', { cx: cx, cy: cy, rx: rx, ry: ry, transform: 'rotate(' + rot + ')', fill: 'var(--accent-soft)', stroke: 'var(--accent)', 'stroke-width': 2, 'fill-opacity': 0.88 }, parent);
      }
      if (d.id === 's') {
        svgEl('circle', { cx: 0, cy: 0, r: 34, fill: 'var(--accent-soft)', stroke: 'var(--accent)', 'stroke-width': 2, 'fill-opacity': 0.88 }, mid);
        svgEl('ellipse', { cx: 0, cy: 0, rx: 34, ry: 10, fill: 'none', stroke: 'var(--accent)', 'stroke-width': 1, 'stroke-dasharray': '3 3' }, mid);
      } else if (d.id === 'pz') { lobe(mid, 0, -31, 18, 30, 0); lobe(mid, 0, 31, 18, 30, 0); }
      else if (d.id === 'py') { lobe(mid, 0, -31, 18, 30, 90); lobe(mid, 0, 31, 18, 30, 90); }
      else { lobe(mid, 0, -25, 15, 24, 45); lobe(mid, 0, 25, 15, 24, 45); }
      axis(front, 0, 0, -50, 50);           // x, near half, drawn over the orbital
      svgEl('circle', { cx: 0, cy: 0, r: 2.5, fill: 'var(--ink)' }, front);
      cell.appendChild(el('p', { class: 's13-orbitals__name', html: d.name }));
      cell.appendChild(el('p', { class: 's13-orbitals__note small', text: d.note }));
      grid.appendChild(cell);
    });
  });

  /* ==========================================================================
     Electron configuration engine (shared by the builder and the IE widgets)
     ========================================================================== */
  var SUBS = [
    { id: '1s', n: 1, cap: 2 }, { id: '2s', n: 2, cap: 2 }, { id: '2p', n: 2, cap: 6 }, { id: '3s', n: 3, cap: 2 },
    { id: '3p', n: 3, cap: 6 }, { id: '4s', n: 4, cap: 2 }, { id: '3d', n: 3, cap: 10 }, { id: '4p', n: 4, cap: 6 }
  ];
  var FILL = SUBS.map(function (s) { return s.id; });               // Aufbau order
  var REMOVE = ['4p', '4s', '3d', '3p', '3s', '2p', '2s', '1s'];     // highest main energy level first
  var CAP = {}; SUBS.forEach(function (s) { CAP[s.id] = s.cap; });
  var CORES = [{ sym: 'Ar', n: 18, subs: ['1s', '2s', '2p', '3s', '3p'] }, { sym: 'Ne', n: 10, subs: ['1s', '2s', '2p'] }, { sym: 'He', n: 2, subs: ['1s'] }];
  var IONS = { 1: [1, -1], 3: [1], 4: [2], 7: [-3], 8: [-2], 9: [-1], 11: [1], 12: [2], 13: [3], 15: [-3], 16: [-2], 17: [-1], 19: [1], 20: [2],
    21: [3], 22: [2, 3, 4], 23: [2, 3], 24: [2, 3], 25: [2], 26: [2, 3], 27: [2, 3], 28: [2], 29: [1, 2], 30: [2], 31: [3], 34: [-2], 35: [-1] };

  function atomConfig(Z) {
    var c = {}, left = Z;
    FILL.forEach(function (id) { var k = Math.min(CAP[id], left); c[id] = k; left -= k; });
    if (Z === 24) { c['4s'] = 1; c['3d'] = 5; }
    if (Z === 29) { c['4s'] = 1; c['3d'] = 10; }
    return c;
  }
  function speciesConfig(Z, q) {
    var c = atomConfig(Z), k;
    if (q < 0) { k = -q; FILL.forEach(function (id) { var a = Math.min(CAP[id] - c[id], k); c[id] += a; k -= a; }); }
    if (q > 0) { k = q; REMOVE.forEach(function (id) { var r = Math.min(c[id], k); c[id] -= r; k -= r; }); }
    return c;
  }
  function total(c) { return FILL.reduce(function (sum, id) { return sum + c[id]; }, 0); }
  function configHtml(c, skip) {
    var parts = [];
    FILL.forEach(function (id) { if (c[id] > 0 && !(skip && skip.indexOf(id) !== -1)) parts.push(id + sup(c[id])); });
    return parts.join(' ');
  }
  function condensed(c, isAtom) { // → {html, core, bare} or null
    var n = total(c);
    for (var i = 0; i < CORES.length; i++) {
      var core = CORES[i];
      var full = core.subs.every(function (id) { return c[id] === CAP[id]; });
      if (full && (isAtom ? core.n < n : core.n <= n)) { var rest = configHtml(c, core.subs); return { html: '[' + core.sym + ']' + (rest ? ' ' + rest : ''), core: core.sym, bare: !rest }; }
    }
    return null;
  }
  function unpaired(c) {
    return FILL.reduce(function (sum, id) { var orb = CAP[id] / 2; return sum + (c[id] <= orb ? c[id] : CAP[id] - c[id]); }, 0);
  }
  function chargeText(q) { var m = Math.abs(q); return (m > 1 ? m : '') + (q > 0 ? '+' : MINUS); }
  function speciesHtml(Z, q) { var s = chem.element(Z).symbol; return q ? s + '<sup>' + chargeText(q) + '</sup>' : s; }

  /* ==========================================================================
     4. Electron configuration builder
     ========================================================================== */
  S1.widgets.register('s1-3.config', function (w) {
    var Z = Number(w.options.start) || 26, q = 0, mode = 'show', spin = 'up';
    var placed = [];      // fill mode: [{sub, box, spin}]
    var msg = { tone: 'info', html: '' };

    w.select({ label: t('Element'), value: Z, options: chem.elements.filter(function (e) { return e.z <= 36; }).map(function (e) { return { value: e.z, label: e.z + '  ' + e.symbol + '  ' + t(e.name) }; }),
      onChange: function (v) { Z = Number(v); q = 0; resetFill(); fillSpecies(); render(); } });
    // species select (its options change with the element)
    var spId = S1.util.uid('ctl');
    var spSel = el('select', { class: 'select', id: spId });
    w.controls.appendChild(el('div', { class: 'control s13-seg' }, [el('label', { class: 'control__label', for: spId, text: t('Atom or ion') }), spSel]));
    spSel.addEventListener('change', function () { q = Number(spSel.value); render(); });
    function speciesText(ch) {
      var s = chem.element(Z).symbol;
      return ch ? t('{symbol}{charge} ion', { symbol: s, charge: chargeText(ch) }) : t('{symbol} atom', { symbol: s });
    }
    function fillSpecies() {
      spSel.innerHTML = '';
      var list = [0].concat(IONS[Z] || []);
      if (S1.level.get() === 'sl') list = list.filter(function (ch) { return !(ch > 0 && Z >= 21 && Z <= 30); });
      if (list.indexOf(q) === -1) q = 0;
      list.forEach(function (ch) {
        var o = el('option', { value: ch, text: speciesText(ch) });
        if (ch === q) o.selected = true;
        spSel.appendChild(o);
      });
      spSel.disabled = mode === 'fill';
    }
    seg(w, t('Mode'), [{ value: 'show', label: t('Show me') }, { value: 'fill', label: t('Fill it yourself') }], mode, function (v) {
      mode = v; if (mode === 'fill') q = 0; resetFill(); fillSpecies(); render();
    });
    var fillCtl = el('div', { class: 's13-fillctl' });
    w.controls.appendChild(fillCtl);
    seg(w, t('Next arrow'), [{ value: 'up', label: '↑', aria: t('spin up') }, { value: 'down', label: '↓', aria: t('spin down') }], spin, function (v) { spin = v; }, fillCtl);
    var undoBtn = el('button', { class: 'btn btn--small', type: 'button', text: t('Undo') });
    var clearBtn = el('button', { class: 'btn btn--small', type: 'button', text: t('Clear') });
    undoBtn.addEventListener('click', function () { if (placed.length) { placed.pop(); msg = { tone: 'info', html: t('Last electron removed.') }; render(); } });
    clearBtn.addEventListener('click', function () { resetFill(); render(); });
    fillCtl.appendChild(undoBtn); fillCtl.appendChild(clearBtn);

    var svg = w.svg('0 0 470 392', { label: t('Orbital diagram') });
    svg.classList.add('s13-boxes');
    var note = el('div', { class: 's13-msg', role: 'status', 'aria-live': 'polite' });
    w.stage.appendChild(note);

    var setFull = w.readoutItem(t('Full configuration'));
    var setCond = w.readoutItem(t('Condensed configuration'));
    var setUnp = w.readoutItem(t('Unpaired electrons'));

    function resetFill() {
      placed = [];
      msg = { tone: 'info', html: t('Click an orbital box to add an electron. Start with the lowest-energy sublevel. Choose the arrow direction with <b>Next arrow</b>.') };
    }
    resetFill();
    S1.level.onChange(function () { fillSpecies(); render(); });

    /* occupancy of every box: {sub: [{up, down}, …]} */
    function emptyOcc() { var o = {}; SUBS.forEach(function (s) { o[s.id] = []; for (var i = 0; i < s.cap / 2; i++) o[s.id].push({ up: 0, down: 0 }); }); return o; }
    function occFromConfig(c) {
      var o = emptyOcc();
      SUBS.forEach(function (s) { var nb = s.cap / 2, k = c[s.id], i; for (i = 0; i < Math.min(k, nb); i++) o[s.id][i].up = 1; for (i = 0; i < k - nb; i++) o[s.id][i].down = 1; });
      return o;
    }
    function occFromPlaced() { var o = emptyOcc(); placed.forEach(function (p) { o[p.sub][p.box][p.spin] = 1; }); return o; }
    function countsFromOcc(o) { var c = {}; SUBS.forEach(function (s) { c[s.id] = o[s.id].reduce(function (sum, b) { return sum + b.up + b.down; }, 0); }); return c; }

    function tryPlace(sub, box) {
      var o = occFromPlaced(), c = countsFromOcc(o), b = o[sub][box], name = elName(Z);
      var other = spin === 'up' ? 'down' : 'up', i;
      if (placed.length >= Z) { msg = { tone: 'info', html: Z === 1 ? t('A hydrogen atom has only 1 electron. It is already placed.') : t('A {name} atom has only {n} electrons. They are all placed.', { name: name, n: Z }) }; return; }
      if (b.up + b.down === 2) { msg = { tone: 'bad', html: t('<b>Pauli exclusion principle broken.</b> An orbital can hold at most two electrons. This one is full.') }; return; }
      if (b[spin] === 1) { msg = { tone: 'bad', html: t('<b>Pauli exclusion principle broken.</b> Two electrons in the same orbital must have opposite spins. Switch <b>Next arrow</b> to the other direction.') }; return; }
      var idx = FILL.indexOf(sub);
      for (i = 0; i < idx; i++) {
        var lower = FILL[i], enough = c[lower] === CAP[lower];
        if (lower === '4s' && sub === '3d' && (Z === 24 || Z === 29) && c['4s'] >= 1) enough = true; // the two named exceptions
        if (!enough) { msg = { tone: 'bad', html: t('<b>Aufbau principle broken.</b> Electrons go into the lowest-energy sublevel that has space. The {lower} sublevel is lower in energy than {sub} and is not full yet.', { lower: lower, sub: sub }) }; return; }
      }
      var boxes = o[sub], emptyElsewhere = boxes.some(function (x, j) { return j !== box && x.up + x.down === 0; });
      if (b[other] === 1 && emptyElsewhere) { msg = { tone: 'bad', html: t('<b>Hund’s rule broken.</b> Every orbital in a sublevel gets one electron before any orbital gets a second. There is still an empty {sub} orbital.', { sub: sub }) }; return; }
      if (b.up + b.down === 0) {
        var clash = boxes.some(function (x) { return x.up + x.down === 1 && x[other] === 1; });
        if (clash) { msg = { tone: 'bad', html: t('<b>Hund’s rule broken.</b> Single electrons in the same sublevel have parallel spins, so their arrows point the same way. Switch <b>Next arrow</b>.') }; return; }
      }
      placed.push({ sub: sub, box: box, spin: spin });
      c[sub]++;
      var left = Z - placed.length;
      if (left > 0) { msg = { tone: 'info', html: t('Electron added to {sub}. Electrons still to place: {n}.', { sub: sub, n: left }) }; return; }
      var target = atomConfig(Z), same = FILL.every(function (id) { return c[id] === target[id]; });
      if (same && (Z === 24 || Z === 29)) msg = { tone: 'ok', html: t('<b>Complete.</b> This is the ground-state configuration of {name}: {config}. You used the exception: one electron in 4s.', { name: name, config: configHtml(c) }) };
      else if (same) msg = { tone: 'ok', html: t('<b>Complete.</b> This is the ground-state configuration of {name}: {config}.', { name: name, config: configHtml(c) }) };
      else msg = { tone: 'warn', html: t('<b>Nearly.</b> This is what the filling order predicts, but {name} is one of the two exceptions you must know. Its real configuration is {config}. Press Undo to take one electron out of 4s, then put it in 3d.', { name: name, config: configHtml(target) }) };
    }

    function layoutY(id, swap) {
      var y = { '1s': 346, '2s': 286, '2p': 258, '3s': 198, '3p': 170, '4s': 110, '3d': 82, '4p': 30 };
      if (swap) { y['3d'] = 110; y['4s'] = 82; }
      return y[id];
    }
    var COLX = { s: 78, p: 150, d: 290 }, BW = 34, BH = 34;

    function boxAria(id, many, i, b) {
      var v = { sub: id, i: i + 1 }, nE = b.up + b.down;
      if (nE === 0) return many ? t('{sub} orbital {i}, empty. Add an electron.', v) : t('{sub} orbital, empty. Add an electron.', v);
      if (nE === 2) return many ? t('{sub} orbital {i}, full with 2 electrons.', v) : t('{sub} orbital, full with 2 electrons.', v);
      if (b.up) return many ? t('{sub} orbital {i}, 1 electron with spin up. Add an electron.', v) : t('{sub} orbital, 1 electron with spin up. Add an electron.', v);
      return many ? t('{sub} orbital {i}, 1 electron with spin down. Add an electron.', v) : t('{sub} orbital, 1 electron with spin down. Add an electron.', v);
    }
    function draw(o, swap) {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      svgEl('line', { x1: 16, y1: 384, x2: 16, y2: 22, stroke: 'var(--ink-3)', 'stroke-width': 1.5 }, svg);
      svgEl('path', { d: 'M16 10 L10.5 23 L21.5 23 Z', fill: 'var(--ink-3)' }, svg);
      svgEl('text', { x: 0, y: 0, text: t('energy (not to scale)'), fill: 'var(--ink-3)', 'font-size': 13, 'font-family': 'var(--font-body)', 'text-anchor': 'middle', transform: 'translate(34 200) rotate(-90)' }, svg);
      SUBS.forEach(function (s) {
        var type = s.id.charAt(1), y = layoutY(s.id, swap), x0 = COLX[type];
        svgEl('text', { x: x0 - 8, y: y + 22, text: s.id, fill: 'var(--ink)', 'font-size': 15, 'font-family': 'var(--font-mono)', 'text-anchor': 'end' }, svg);
        o[s.id].forEach(function (b, i) {
          var x = x0 + i * BW, g = svgEl('g', { class: 's13-box' }, svg), nE = b.up + b.down;
          if (mode === 'fill') {
            g.setAttribute('role', 'button'); g.setAttribute('tabindex', '0');
            g.setAttribute('aria-label', boxAria(s.id, s.cap > 2, i, b));
            g.classList.add('s13-box--live');
            var act = function () { tryPlace(s.id, i); render(s.id + ':' + i); };
            g.addEventListener('click', act);
            g.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); act(); } });
            g.setAttribute('data-box', s.id + ':' + i);
          }
          svgEl('rect', { x: x, y: y, width: BW, height: BH, fill: nE ? 'var(--accent-soft)' : 'var(--surface)', stroke: 'var(--ink)', 'stroke-width': 1.5 }, g);
          if (b.up) arrow(g, x + 11, y, true);
          if (b.down) arrow(g, x + 23, y, false);
        });
      });
    }
    function arrow(g, cx, y, up) {
      var a = y + 7, b = y + BH - 7, tip = up ? a : b, tail = up ? b : a, d = up ? 1 : -1;
      svgEl('path', { d: 'M' + cx + ' ' + tail + ' L' + cx + ' ' + tip + ' M' + (cx - 4.5) + ' ' + (tip + d * 6.5) + ' L' + cx + ' ' + tip + ' L' + (cx + 4.5) + ' ' + (tip + d * 6.5), fill: 'none', stroke: 'var(--ink)', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
    }

    function render(refocus) {
      fillCtl.hidden = mode !== 'fill';
      var name = elName(Z), c, o, isAtom = q === 0, html, tone = 'info';
      if (mode === 'fill') {
        o = occFromPlaced(); c = countsFromOcc(o);
        draw(o, false);
        svg.setAttribute('aria-label', t('Orbital diagram you are filling for a {name} atom. {done} of {n} electrons placed.', { name: name, done: placed.length, n: Z }));
        setFull(placed.length ? configHtml(c) : '—');
        setCond(t('{done} of {n} electrons placed', { done: placed.length, n: Z }));
        setUnp(String(FILL.reduce(function (sum, id) { return sum + o[id].filter(function (b) { return b.up + b.down === 1; }).length; }, 0)));
        html = msg.html; tone = msg.tone;
      } else {
        c = speciesConfig(Z, q); o = occFromConfig(c);
        var dIon = q > 0 && Z >= 21, n = total(c), sp = speciesHtml(Z, q), atomCfg = configHtml(atomConfig(Z));
        draw(o, dIon);
        svg.setAttribute('aria-label', n ? t('Orbital diagram for {species}. Electrons in each sublevel: {list}.', { species: speciesText(q), list: FILL.filter(function (id) { return c[id] > 0; }).map(function (id) { return id + ' ' + c[id]; }).join(', ') })
          : t('Orbital diagram for {species}. It has no electrons.', { species: speciesText(q) }));
        var cond = condensed(c, isAtom);
        setFull(n ? configHtml(c) : t('no electrons'));
        setCond(cond ? cond.html : n ? t('none: no noble gas comes before this element') : '—');
        setUnp(String(unpaired(c)));
        if (isAtom && Z === 24) { tone = 'warn'; html = t('<b>Exception.</b> Chromium is 4s<sup>1</sup> 3d<sup>5</sup>, not 4s<sup>2</sup> 3d<sup>4</sup>. The 4s and 3d sublevels are very close in energy, and for this atom the arrangement with one 4s electron has the lower energy. Cr and Cu are the only two exceptions you need to know.'); }
        else if (isAtom && Z === 29) { tone = 'warn'; html = t('<b>Exception.</b> Copper is 4s<sup>1</sup> 3d<sup>10</sup>, not 4s<sup>2</sup> 3d<sup>9</sup>. The 4s and 3d sublevels are very close in energy, and for this atom the arrangement with one 4s electron has the lower energy. Cr and Cu are the only two exceptions you need to know.'); }
        else if (isAtom && Z >= 21 && Z <= 30) html = t('{species} has {n} electrons, filled in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. Note that 4s fills before 3d.', { species: sp, n: Z });
        else if (isAtom && Z === 1) html = t('H has 1 electron. It goes into 1s, the lowest-energy sublevel.');
        else if (isAtom) html = t('{species} has {n} electrons, filled in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p.', { species: sp, n: Z });
        else if (n === 0) html = t('{species} is a hydrogen atom that has lost its only electron. It is a bare proton.', { species: sp });
        else if (q < 0) html = t('{species}: start from the atom ({atom}) and add electrons to the next space. Electrons added: {k}. Total: {n}.', { species: sp, atom: atomCfg, k: -q, n: n });
        else if (Z >= 21 && Z <= 30) html = '<span class="badge badge--ahl">AHL</span> ' + t('{species}: start from the atom ({atom}) and remove electrons. Electrons removed: {k}. <b>The 4s electrons are removed before any 3d electron.</b> Once 3d holds electrons it is lower in energy than 4s, which is why the diagram for this ion shows 3d below 4s. Ions of the d-block metals are assessed at HL (Structure 3.1).', { species: sp, atom: atomCfg, k: q });
        else if (Z === 31) html = t('{species}: start from the atom ({atom}) and remove electrons from the highest main energy level, 4p first and then 4s. Electrons removed: {k}. Total left: {n}.', { species: sp, atom: atomCfg, k: q, n: n });
        else html = t('{species}: start from the atom ({atom}) and remove electrons from the highest main energy level. Electrons removed: {k}. Total left: {n}.', { species: sp, atom: atomCfg, k: q, n: n });
        if (!isAtom && cond && cond.bare) html += ' ' + (cond.core === 'He' ? t('That is the same configuration as a helium atom.') : cond.core === 'Ne' ? t('That is the same configuration as a neon atom.') : t('That is the same configuration as an argon atom.'));
      }
      note.setAttribute('data-tone', tone);
      note.innerHTML = '<p>' + html + '</p>';
      if (refocus) { var again = svg.querySelector('[data-box="' + refocus + '"]'); if (again && again.focus) again.focus(); }
    }
    fillSpecies(); render();
  });

  /* ==========================================================================
     5. (AHL) First ionization energy against atomic number
     ========================================================================== */
  // Data booklet section 9, kJ mol-1, Z = 1 … 36
  var IE1 = [1312, 2372, 520, 900, 801, 1086, 1402, 1314, 1681, 2081, 496, 738, 578, 787, 1012, 1000, 1251, 1520,
    419, 590, 633, 659, 651, 653, 717, 762, 760, 737, 745, 906, 579, 762, 944, 941, 1140, 1351];
  function periodOf(Z) { return Z <= 2 ? 1 : Z <= 10 ? 2 : Z <= 18 ? 3 : 4; }
  function groupOf(Z) {
    if (Z === 1) return 1; if (Z === 2) return 18;
    if (Z <= 10) return Z <= 4 ? Z - 2 : Z + 8;
    if (Z <= 18) return Z <= 12 ? Z - 10 : Z;
    return Z - 18;
  }
  function aboveOf(Z) { if (Z === 10) return 2; if (Z >= 11 && Z <= 20) return Z - 8; if (Z >= 31 && Z <= 36) return Z - 18; return null; }
  function outerSub(Z) { var c = atomConfig(Z), i; for (i = 0; i < REMOVE.length; i++) if (c[REMOVE[i]] > 0) return REMOVE[i]; return '1s'; }

  S1.widgets.register('s1-3.ie1', function (w) {
    var Z = Number(w.options.start) || 5, group = 0;
    var slider = w.slider({ label: t('Atomic number, Z'), min: 1, max: 36, step: 1, value: Z, onInput: function (v) { Z = Math.round(v); update(); } });
    var jump = el('div', { class: 'control s13-seg' }, [el('span', { class: 'control__label', text: t('Jump to a discontinuity') })]);
    var row = el('div', { class: 'btn-row' });
    [['Be → B', 5], ['N → O', 8], ['Mg → Al', 13], ['P → S', 16]].forEach(function (p) {
      var b = el('button', { class: 'btn btn--small', type: 'button', text: p[0] });
      b.addEventListener('click', function () { slider.set(p[1]); });
      row.appendChild(b);
    });
    jump.appendChild(row); w.controls.appendChild(jump);
    w.select({ label: t('Join up a group'), value: 0, options: [{ value: 0, label: t('none') }, { value: 1, label: t('Group 1 (Li, Na, K)') }, { value: 2, label: t('Group 2 (Be, Mg, Ca)') }, { value: 17, label: t('Group 17 (F, Cl, Br)') }, { value: 18, label: t('Group 18 (He, Ne, Ar, Kr)') }],
      onChange: function (v) { group = Number(v); cv.draw(); } });

    var setEl = w.readoutItem(t('Element'));
    var setIE = w.readoutItem(t('First ionization energy'));
    var setRem = w.readoutItem(t('Electron removed from'));
    var setAcross = w.readoutItem(t('Compared with the element before it'), { text: true });
    var setDown = w.readoutItem(t('Compared with the element above it'), { text: true });

    var geom = null;
    var cv = w.canvas({ height: 320, label: t('Graph of first ionization energy against atomic number for hydrogen to krypton. The values rise across each period with small dips after groups 2 and 15, peak at each noble gas, then drop sharply at the start of the next period.') });
    cv.draw(function (ctx, W, Ht) {
      var F = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), line = w.color('--line'), accent = w.color('--accent'), soft = w.color('--surface-2'), surface = w.color('--surface');
      var pl = 46, pr = 12, pt = 38, pb = 42, x0 = pl, x1 = W - pr, y0 = Ht - pb, y1 = pt;
      function X(z) { return x0 + (z - 0.5) / 36 * (x1 - x0); }
      function Y(v) { return y0 - v / 2500 * (y0 - y1); }
      geom = { X: X };
      var step = (x1 - x0) / 36;
      [[1, 2, 1], [3, 10, 2], [11, 18, 3], [19, 36, 4]].forEach(function (p, i) {
        if (i % 2 === 1) { ctx.fillStyle = soft; ctx.fillRect(X(p[0]) - step / 2, y1, (p[1] - p[0] + 1) * step, y0 - y1); }
        ctx.fillStyle = ink3; ctx.font = F.body(11); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
        var wide = (p[1] - p[0] + 1) * step > 62;
        ctx.fillText(wide ? t('period {n}', { n: p[2] }) : String(p[2]), (X(p[0]) + X(p[1])) / 2, y1 - 7);
      });
      ctx.font = F.mono(11); ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      for (var v = 0; v <= 2500; v += 500) {
        ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, Y(v)); ctx.lineTo(x1, Y(v)); ctx.stroke();
        ctx.fillStyle = ink3; ctx.fillText(String(v), x0 - 6, Y(v));
      }
      ctx.strokeStyle = ink2; ctx.lineWidth = 1.25; ctx.beginPath(); ctx.moveTo(x0, y1); ctx.lineTo(x0, y0); ctx.lineTo(x1, y0); ctx.stroke();
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      for (var tk = 5; tk <= 35; tk += 5) { ctx.beginPath(); ctx.moveTo(X(tk), y0); ctx.lineTo(X(tk), y0 + 4); ctx.stroke(); ctx.fillStyle = ink3; ctx.fillText(String(tk), X(tk), y0 + 16); }
      ctx.font = F.body(12); ctx.fillStyle = ink3;
      ctx.fillText(t('atomic number, Z'), (x0 + x1) / 2, Ht - 6);
      ctx.textAlign = 'left'; ctx.fillText(t('first IE / {unit}', { unit: KJMOL_TXT }), 2, 11);
      ctx.strokeStyle = ink2; ctx.lineWidth = 1.5; ctx.beginPath();
      IE1.forEach(function (val, i) { if (i === 0) ctx.moveTo(X(1), Y(val)); else ctx.lineTo(X(i + 1), Y(val)); });
      ctx.stroke();
      if (group) {
        ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.setLineDash([6, 4]); ctx.beginPath();
        var first = true;
        IE1.forEach(function (val, i) { var z = i + 1; if (groupOf(z) === group && z !== 1) { if (first) { ctx.moveTo(X(z), Y(val)); first = false; } else ctx.lineTo(X(z), Y(val)); } });
        ctx.stroke(); ctx.setLineDash([]);
      }
      var prev = Z > 1 ? Z - 1 : null, above = aboveOf(Z), allLabels = step >= 17;
      IE1.forEach(function (val, i) {
        var z = i + 1, sel = z === Z, rel = z === prev || z === above, inGroup = group && groupOf(z) === group && z !== 1;
        ctx.beginPath(); ctx.arc(X(z), Y(val), sel ? 6 : (rel || inGroup) ? 4.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = sel ? accent : (rel || inGroup) ? surface : ink2; ctx.fill();
        if (sel || rel || inGroup) { ctx.strokeStyle = sel ? ink : accent; ctx.lineWidth = 2; ctx.stroke(); }
        if (allLabels || sel || rel || inGroup) {
          ctx.font = F.mono(11, sel); ctx.fillStyle = sel ? ink : ink3; ctx.textAlign = 'center';
          ctx.fillText(chem.element(z).symbol, X(z), Y(val) - (sel ? 10 : 8));
        }
      });
    });
    function pick(ev) {
      if (!geom) return;
      var r = cv.el.getBoundingClientRect(), x = ev.clientX - r.left, best = 1, bd = 1e9;
      for (var z = 1; z <= 36; z++) { var d = Math.abs(geom.X(z) - x); if (d < bd) { bd = d; best = z; } }
      if (best !== Z) slider.set(best);
    }
    cv.el.addEventListener('click', pick);
    cv.el.addEventListener('pointermove', function (ev) { if (ev.pointerType === 'mouse') pick(ev); });
    cv.el.style.cursor = 'pointer';

    function kj(z) { return IE1[z - 1] + ' ' + KJMOL; }
    function update() {
      var e = chem.element(Z), v = IE1[Z - 1], sub = outerSub(Z), g = groupOf(Z), p = periodOf(Z);
      setEl(t('{symbol} ({name}), Z = {z}', { symbol: e.symbol, name: elName(Z), z: Z }));
      setIE(kj(Z));
      setRem(t('{sub} sublevel', { sub: sub }));
      var a, vars = { el: e.symbol, sub: sub, n: p, ssub: p + 's' };
      if (Z > 1) { vars.prev = chem.element(Z - 1).symbol; vars.pv = kj(Z - 1); }
      if (Z === 1) a = t('Hydrogen is the first element. Its one electron is in 1s, close to the nucleus, with no inner electrons to shield it.');
      else if (Z === 2) a = t('Higher than H ({pv}). Helium has two protons instead of one, and both electrons are in the same 1s sublevel with no inner electrons to shield them. The attraction to the nucleus is much stronger.', vars);
      else if (g === 1) a = t('Large drop from {prev} ({pv}). A new period starts. The electron removed is in a new main energy level (n = {n}), further from the nucleus and shielded by more inner electrons, so it is attracted less strongly.', vars);
      else if (g === 13) a = t('Lower than {prev} ({pv}), even though the nuclear charge is greater. This is a discontinuity. The electron removed from {el} is in the {sub} sublevel, which is higher in energy than the {ssub} sublevel that {prev} loses an electron from. A higher-energy electron needs less energy to remove.', vars);
      else if (g === 16) a = t('Lower than {prev} ({pv}), even though the nuclear charge is greater. This is a discontinuity. In {prev} each {sub} orbital holds one electron. In {el} one {sub} orbital holds a pair. Two electrons in the same orbital repel each other, so one of them is removed more easily.', vars);
      else if (Z >= 21 && Z <= 30) a = t('Part of the d-block (Sc to Zn). First ionization energy changes only a little here: {prev} is {pv}. You are not asked to explain these small rises and falls in Structure 1.3.', vars);
      else if (Z === 31) a = t('Lower than {prev} ({pv}). The electron removed from {el} is in the {sub} sublevel, which is higher in energy than the {ssub} sublevel that {prev} loses an electron from. A higher-energy electron needs less energy to remove.', vars);
      else a = t('Higher than {prev} ({pv}). This is the general trend across a period. The nuclear charge increases by one proton. The electron removed is in the same main energy level, so the shielding by inner electrons is about the same. The outer electrons are held more strongly and the atom is smaller.', vars);
      setAcross(a);
      var ab = aboveOf(Z), d;
      if (!ab) d = (Z >= 21 && Z <= 30) ? t('No element above it within Z = 1 to 36.') : Z <= 2 ? t('Nothing above it. This is period 1.') : t('Period 2 elements are at the top of their groups. Step down to period 3 to see the group trend.');
      else {
        var dv = { above: chem.element(ab).symbol, av: kj(ab), n: p, m: periodOf(ab) };
        if (v < IE1[ab - 1] - 5) d = t('Lower than {above} ({av}). This is the trend down a group. The outer electron is in a higher main energy level (n = {n} instead of n = {m}), so it is further from the nucleus and shielded by more inner electrons. This outweighs the greater nuclear charge.', dv);
        else d = t('Almost the same as {above} ({av}). This is an exception to the usual decrease down a group. You will not be asked to explain it.', dv);
      }
      setDown(d);
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     6. (AHL) Successive ionization energies
     ========================================================================== */
  // kJ mol-1, rounded to the nearest whole number
  var SUCC = {
    B: [801, 2427, 3660, 25026, 32827],
    C: [1087, 2353, 4621, 6223, 37831, 47277],
    N: [1402, 2856, 4578, 7475, 9445, 53267, 64360],
    O: [1314, 3388, 5301, 7469, 10990, 13327, 71330, 84078],
    F: [1681, 3374, 6050, 8408, 11023, 15164, 17868, 92038, 106434],
    Na: [496, 4562, 6910, 9543, 13354, 16613, 20117, 25496, 28932, 141362, 159076],
    Mg: [738, 1451, 7733, 10543, 13630, 18020, 21711, 25661, 31653, 35458, 169988, 189368],
    Al: [578, 1817, 2745, 11577, 14842, 18379, 23326, 27465, 31853, 38473, 42647, 201266, 222316],
    Si: [787, 1577, 3232, 4356, 16091, 19805, 23780, 29287, 33878, 38726, 45962, 50502, 235196, 257923],
    P: [1012, 1907, 2914, 4964, 6274, 21267, 25431, 29872, 35905, 40950, 46261, 54110, 59024, 271791, 296195],
    S: [1000, 2252, 3357, 4556, 7004, 8496, 27107, 31719, 36621, 43177, 48710, 54460, 62930, 68216, 311048, 337138],
    Cl: [1251, 2298, 3822, 5159, 6542, 9362, 11018, 33604, 38600, 43961, 51068, 57119, 63363, 72341, 78095, 352994, 380760],
    K: [419, 3052, 4420, 5877, 7975, 9590, 11343, 14944, 16964, 48610, 54490, 60730, 68950, 75900, 83080, 93400, 99710, 444880, 476063],
    Ca: [590, 1145, 4912, 6491, 8153, 10496, 12270, 14206, 18191, 20385, 57110, 63410, 70110, 78890, 86310, 94000, 104900, 111711, 494850, 527762]
  };
  var SUCC_PICK = ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ca'];
  var SUCC_MYSTERY = ['B', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ca'];
  var GROUPS = [1, 2, 13, 14, 15, 16, 17];
  function shells(Z) { // electrons per main energy level, outermost first: [{n, count}]
    var c = atomConfig(Z), by = {};
    SUBS.forEach(function (s) { by[s.n] = (by[s.n] || 0) + c[s.id]; });
    return [4, 3, 2, 1].filter(function (n) { return by[n] > 0; }).map(function (n) { return { n: n, count: by[n] }; });
  }

  S1.widgets.register('s1-3.succ', function (w) {
    var sym = w.options.start || 'Al', mystery = false, solved = false, scale = 'log', answerMsg = null, last = null;
    var options = SUCC_PICK.map(function (s) { return { value: s, label: s + '  ' + elName(s) }; });
    options.push({ value: '?', label: t('Mystery element') });
    var sel = w.select({ label: t('Element'), value: sym, options: options, onChange: function (v) {
      answerMsg = null;
      if (v === '?') { mystery = true; newMystery(); } else { mystery = false; sym = v; }
      update();
    } });
    seg(w, t('Vertical scale'), [{ value: 'log', label: 'log(IE)' }, { value: 'lin', label: 'IE' }], scale, function (v) { scale = v; update(); });
    var newBtn = w.button(t('New mystery element'), function () { newMystery(); update(); });

    var cv = w.canvas({ height: 310, label: t('Graph of successive ionization energies against the number of the electron removed.') });
    var ask = el('div', { class: 's13-ask' });
    w.stage.appendChild(ask);
    var askLabelId = S1.util.uid('ask');
    var askRow = el('div', { class: 'btn-row', role: 'group', 'aria-labelledby': askLabelId });
    var fb = el('div', { class: 's13-msg', role: 'status', 'aria-live': 'polite' });
    ask.appendChild(el('p', { class: 's13-ask__q', id: askLabelId, text: t('Which group is the mystery element in?') }));
    GROUPS.forEach(function (g) {
      var b = el('button', { class: 'btn btn--small', type: 'button', text: String(g) });
      b.setAttribute('aria-label', t('Group {g}', { g: g }));
      b.addEventListener('click', function () { answer(g); });
      askRow.appendChild(b);
    });
    ask.appendChild(askRow); ask.appendChild(fb);

    var setWho = w.readoutItem(t('Element'));
    var setVals = w.readoutItem(t('Successive ionization energies / {unit}', { unit: KJMOL_TXT }), { text: true });
    var setRead = w.readoutItem(t('How to read it'), { text: true });

    function newMystery() {
      var pool = SUCC_MYSTERY.filter(function (s) { return s !== last; });
      sym = pool[Math.floor(Math.random() * pool.length)]; last = sym; solved = false; answerMsg = null;
    }
    function valence(s) { return shells(chem.element(s).z)[0].count; }
    function groupFor(s) { var v = valence(s); return v <= 2 ? v : v + 10; }
    function answer(g) {
      var v = valence(sym), right = groupFor(sym), gv = g <= 2 ? g : g - 10;
      if (g === right) {
        solved = true;
        answerMsg = { tone: 'ok', html: t('<b>Correct.</b> The first large jump comes after electron {v}, so the number of electrons in the outer main energy level is {v}: group {g}. The element is {name}.', { v: v, g: right, name: elName(sym) }) };
      } else if (Math.abs(gv - v) === 1) {
        answerMsg = { tone: 'bad', html: t('<b>One out.</b> Find the first large jump and count the electrons removed <em>before</em> it. If the jump is between electron 3 and electron 4, then 3 electrons are in the outer level. Count again.') };
      } else {
        answerMsg = { tone: 'bad', html: t('<b>Not yet.</b> Look for the first place where the graph steps up sharply. Ignore the small steps. A group {g} element would have that jump after electron {k}.', { g: g, k: gv }) };
      }
      update();
    }
    function shown() { var v = SUCC[sym]; return mystery ? v.slice(0, Math.min(v.length, 10)) : v; }

    cv.draw(function (ctx, W, Ht) {
      var F = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), line = w.color('--line'), accent = w.color('--accent');
      var vals = shown(), N = vals.length, reveal = !mystery || solved;
      var pl = 50, pr = 12, pt = 46, pb = 42, x0 = pl, x1 = W - pr, y0 = Ht - pb, y1 = pt;
      var isLog = scale === 'log', ymax = isLog ? 6 : Math.max.apply(null, vals) * 1.06, ymin = isLog ? 2.5 : 0;
      function X(i) { return x0 + (i - 0.5) / N * (x1 - x0); }
      function Yq(q) { return y0 - (q - ymin) / (ymax - ymin) * (y0 - y1); }
      function Y(v) { return Yq(isLog ? Math.log(v) / Math.LN10 : v); }
      ctx.font = F.mono(11); ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      var ticks = [], tk;
      if (isLog) ticks = [3, 4, 5, 6]; else { var stepv = Math.pow(10, Math.floor(Math.log(ymax) / Math.LN10)); if (ymax / stepv < 2.5) stepv /= 2; for (tk = 0; tk <= ymax; tk += stepv) ticks.push(tk); }
      ticks.forEach(function (tv) {
        ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, Yq(tv)); ctx.lineTo(x1, Yq(tv)); ctx.stroke();
        ctx.fillStyle = ink3; ctx.fillText(isLog ? String(tv) : (tv >= 1000 ? (tv / 1000) + 'k' : String(tv)), x0 - 6, Yq(tv));
      });
      ctx.strokeStyle = ink2; ctx.lineWidth = 1.25; ctx.beginPath(); ctx.moveTo(x0, y1); ctx.lineTo(x0, y0); ctx.lineTo(x1, y0); ctx.stroke();
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = ink3;
      var every = (x1 - x0) / N < 17 ? 2 : 1;
      for (tk = 1; tk <= N; tk++) if (tk % every === 0 || tk === 1) ctx.fillText(String(tk), X(tk), y0 + 15);
      ctx.font = F.body(12);
      ctx.fillText(t('number of the electron removed'), (x0 + x1) / 2, Ht - 6);
      ctx.textAlign = 'left';
      ctx.fillText(isLog ? t('log(IE / {unit})', { unit: KJMOL_TXT }) : t('IE / {unit} (k = thousand)', { unit: KJMOL_TXT }), 2, 11);
      if (reveal) {
        var sh = shells(chem.element(sym).z), start = 1;
        sh.forEach(function (s, i) {
          var a = start, b = Math.min(N, start + s.count - 1);
          if (a <= N) {
            ctx.strokeStyle = ink3; ctx.lineWidth = 1.25;
            ctx.beginPath(); ctx.moveTo(X(a) - 5, y1 - 6); ctx.lineTo(X(a) - 5, y1 - 10); ctx.lineTo(X(b) + 5, y1 - 10); ctx.lineTo(X(b) + 5, y1 - 6); ctx.stroke();
            ctx.fillStyle = ink2; ctx.font = F.mono(11); ctx.textAlign = 'center';
            var txt = 'n = ' + s.n, wd = ctx.measureText(txt).width;
            if (X(b) - X(a) + 18 < wd) txt = String(s.n);
            ctx.fillText(txt, (X(a) + X(b)) / 2, y1 - 14);
            if (b < N && i < sh.length - 1) {
              ctx.strokeStyle = accent; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]);
              var xm = (X(b) + X(b + 1)) / 2; ctx.beginPath(); ctx.moveTo(xm, y1 - 2); ctx.lineTo(xm, y0); ctx.stroke(); ctx.setLineDash([]);
            }
          }
          start += s.count;
        });
      }
      ctx.strokeStyle = ink2; ctx.lineWidth = 1.5; ctx.beginPath();
      vals.forEach(function (v, i) { if (i === 0) ctx.moveTo(X(1), Y(v)); else ctx.lineTo(X(i + 1), Y(v)); });
      ctx.stroke();
      vals.forEach(function (v, i) { ctx.beginPath(); ctx.arc(X(i + 1), Y(v), 4, 0, Math.PI * 2); ctx.fillStyle = accent; ctx.fill(); ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.stroke(); });
    });

    function update() {
      var vals = shown(), reveal = !mystery || solved, e = chem.element(sym), sh = shells(e.z), v = sh[0].count;
      ask.hidden = !mystery; newBtn.hidden = !mystery;
      sel.set(mystery ? '?' : sym);
      setWho(reveal ? t('{symbol} ({name}), Z = {z}', { symbol: e.symbol, name: elName(sym), z: e.z }) : t('Mystery element, first {n} values', { n: vals.length }));
      var parts = [], cut = {}, run = 0;
      if (reveal) sh.forEach(function (s) { run += s.count; cut[run] = true; });
      vals.forEach(function (x, i) { parts.push(String(x)); if (cut[i + 1] && i < vals.length - 1) parts.push('<b class="s13-cut">|</b>'); });
      setVals('<span class="mono">' + parts.join(' ') + '</span>');
      if (!reveal) setRead(t('Find the first large jump. Count the electrons removed before it. That number is the number of outer electrons.'));
      else {
        var rv = { v: v, ratio: chem.toSig(vals[v] / vals[v - 1], 2), g: groupFor(sym), list: sh.map(function (s) { return s.count; }).join(', ') };
        var txt = mystery ? t('First large jump: after electron {v} (the value becomes {ratio} times bigger). Outer electrons: {v}. Group {g}.', rv)
          : t('First large jump: after electron {v} (the value becomes {ratio} times bigger). Outer electrons: {v}. Group {g}. The brackets, read from left to right, give the electrons in each main energy level, outermost first: {list}.', rv);
        if (sym === 'Al' || sym === 'B') txt += ' ' + t('The smaller step after electron 1 is a change of sublevel (p to s), not a new main energy level.');
        setRead(txt);
      }
      fb.hidden = !answerMsg;
      if (answerMsg) { fb.setAttribute('data-tone', answerMsg.tone); fb.innerHTML = '<p>' + answerMsg.html + '</p>'; }
      var lv = { values: vals.join(', '), name: elName(sym) };
      cv.el.setAttribute('aria-label', scale === 'log'
        ? (reveal ? t('Graph of the logarithm of successive ionization energy against the number of the electron removed, for {name}. Values in order, in kilojoules per mole: {values}.', lv) : t('Graph of the logarithm of successive ionization energy against the number of the electron removed, for a mystery element. Values in order, in kilojoules per mole: {values}.', lv))
        : (reveal ? t('Graph of successive ionization energy against the number of the electron removed, for {name}. Values in order, in kilojoules per mole: {values}.', lv) : t('Graph of successive ionization energy against the number of the electron removed, for a mystery element. Values in order, in kilojoules per mole: {values}.', lv)));
      cv.draw();
    }
    if (sym === '?') { mystery = true; newMystery(); }
    update();
  });
})();
