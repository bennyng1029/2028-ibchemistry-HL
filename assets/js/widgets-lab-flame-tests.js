/* ==========================================================================
   Widgets for Lab 4 — Flame tests and emission spectra.
   lab-flame-tests.flame         flame tests on six chlorides and three unknowns, with wire cleaning
   lab-flame-tests.spectroscope  hand spectroscope: continuous and line spectra, cross-hair readings
                                 (±2 nm), a scale error that differs from one instrument to the next
   lab-flame-tests.match         identify the elements in an unknown tube from a set of readings
   Line wavelengths are the brightest visible lines, rounded to the nearest nm (NIST values:
   H 410.2, 434.0, 486.1, 656.3; He 447.1, 471.3, 492.2, 501.6, 587.6, 667.8; Li 610.4, 670.8;
   Na 589.0/589.6; Hg 404.7, 435.8, 546.1, 577.0/579.1). Colour names for wavelengths follow the
   data booklet colour wheel. Flame and line colours are drawn as real colours because the colour
   itself is what is being observed; every colour is also named in text.
   Every user-visible string goes through t("English text", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  /* ---------- Shared helpers ---------------------------------------------------- */
  function rand(a, b) { return a + Math.random() * (b - a); }
  function randInt(a, b) { return Math.floor(rand(a, b + 1)); }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function esc(s) { return S1.util.escapeHtml(String(s)); }
  function fonts(w) {
    var mono = w.color('--font-mono') || 'monospace', body = w.color('--font-body') || 'sans-serif';
    return {
      mono: function (px, bold) { return (bold ? '600 ' : '') + px + 'px ' + mono; },
      body: function (px, bold) { return (bold ? '700 ' : '') + px + 'px ' + body; }
    };
  }
  /** Keep state on the widget element so that a restart (language change) does not lose the results. */
  function stateOf(w, make) { if (!w.el._lftState) w.el._lftState = make(); return w.el._lftState; }
  /** Message box in the stage. */
  function msgBox(parent) {
    var box = el('div', { class: 'lft-msg', role: 'status' });
    box.hidden = true;
    parent.appendChild(box);
    return {
      el: box,
      show: function (tone, html) { box.setAttribute('data-tone', tone); box.innerHTML = html; box.hidden = false; },
      hide: function () { box.hidden = true; box.innerHTML = ''; }
    };
  }
  function p(html) { return '<p>' + html + '</p>'; }
  /** Results table placed under the readout. cols: [{label, num}]; rows: arrays of HTML. */
  function resultsTable(w, caption) {
    var wrap = el('div', { class: 'lft-results', 'aria-live': 'off' });
    w.readout.appendChild(wrap);
    return function (cols, rows, empty) {
      if (!rows.length) { wrap.innerHTML = '<p class="lft-results__title">' + caption + '</p><p class="muted">' + empty + '</p>'; return; }
      var h = '<p class="lft-results__title">' + caption + '</p><div class="table-scroll" tabindex="0"><table class="data"><thead><tr>';
      cols.forEach(function (c) { h += '<th scope="col"' + (c.num ? ' class="num"' : '') + '>' + c.label + '</th>'; });
      h += '</tr></thead><tbody>';
      rows.forEach(function (r) {
        h += '<tr>';
        r.forEach(function (c, i) { h += '<td' + (cols[i].num ? ' class="num"' : '') + '>' + c + '</td>'; });
        h += '</tr>';
      });
      wrap.innerHTML = h + '</tbody></table></div>';
    };
  }

  /* Colour names for a wavelength: data booklet colour wheel bands. */
  var WHEEL = [[400, 424, 'violet'], [424, 491, 'blue'], [491, 575, 'green'], [575, 585, 'yellow'], [585, 647, 'orange'], [647, 700, 'red']];
  function colourName(nm) {
    var key = nm < 400 ? 'ultraviolet' : nm > 700 ? 'infrared' : 'red';
    for (var i = 0; i < WHEEL.length; i++) if (nm >= WHEEL[i][0] && nm < WHEEL[i][1]) { key = WHEEL[i][2]; break; }
    return ({ violet: t('violet'), blue: t('blue'), green: t('green'), yellow: t('yellow'), orange: t('orange'), red: t('red'), ultraviolet: t('ultraviolet'), infrared: t('infrared') })[key];
  }
  /* Approximate screen colour of a wavelength (the one place a colour is computed, because the
     physical colour of the light is the subject). */
  function wavelengthRGB(nm, k) {
    var r = 0, g = 0, b = 0;
    if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
    else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
    else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
    else if (nm <= 780) { r = 1; }
    var f = nm < 420 ? 0.3 + 0.7 * (nm - 380) / 40 : nm > 700 ? 0.3 + 0.7 * (780 - nm) / 80 : 1;
    f *= (k == null ? 1 : k);
    function ch(v) { return Math.round(255 * Math.pow(Math.max(0, v * f), 0.8)); }
    return 'rgb(' + ch(r) + ',' + ch(g) + ',' + ch(b) + ')';
  }

  /* Reference lines: [wavelength / nm, relative brightness 0–1]. */
  var LINES = {
    H: [[410, 0.45], [434, 0.6], [486, 0.85], [656, 1]],
    He: [[447, 0.6], [471, 0.4], [492, 0.45], [502, 0.6], [588, 1], [668, 0.6]],
    Li: [[610, 0.45], [671, 1]],
    Na: [[589, 1]],
    Hg: [[405, 0.6], [436, 0.9], [546, 1], [578, 0.8]]
  };
  function elementName(sym) {
    return ({ H: t('hydrogen'), He: t('helium'), Li: t('lithium'), Na: t('sodium'), Hg: t('mercury') })[sym];
  }

  /* ==========================================================================
     1. Flame tests
     ========================================================================== */
  var SALT_IDS = ['li', 'na', 'k', 'ca', 'sr', 'cu'];
  function saltTable() {
    return {
      li: { formula: 'LiCl', name: t('lithium chloride'), ion: t('lithium ion'), words: [t('red (crimson)'), t('deep red')], rgb: [214, 24, 64] },
      na: { formula: 'NaCl', name: t('sodium chloride'), ion: t('sodium ion'), words: [t('yellow-orange, bright and long-lasting'), t('intense yellow-orange')], rgb: [255, 176, 0] },
      k: { formula: 'KCl', name: t('potassium chloride'), ion: t('potassium ion'), words: [t('lilac (pale violet)'), t('pale lilac, faint')], rgb: [196, 150, 236] },
      ca: { formula: 'CaCl2', name: t('calcium chloride'), ion: t('calcium ion'), words: [t('orange-red (brick red)'), t('orange-red')], rgb: [236, 92, 36] },
      sr: { formula: 'SrCl2', name: t('strontium chloride'), ion: t('strontium ion'), words: [t('red (crimson)'), t('bright red')], rgb: [226, 22, 44] },
      cu: { formula: 'CuCl2', name: t('copper(II) chloride'), ion: t('copper(II) ion'), words: [t('blue-green'), t('green with a blue edge')], rgb: [40, 196, 150] }
    };
  }

  S1.widgets.register('lab-flame-tests.flame', function (w) {
    var SALTS = saltTable();
    var st = stateOf(w, function () {
      var ids = S1.util.shuffle(SALT_IDS);
      return { residue: ['na'], unknown: { A: ids[0], B: ids[1], C: ids[2] }, rows: [], flame: 'idle', last: null, guesses: {} };
    });
    var sampleOpts = SALT_IDS.map(function (id) { return { value: id, label: SALTS[id].name }; })
      .concat([{ value: 'A', label: t('unknown A') }, { value: 'B', label: t('unknown B') }, { value: 'C', label: t('unknown C') }]);
    var sample = w.select({ label: t('Sample on the wire'), options: sampleOpts, value: st.sample || 'li', onChange: function (v) { st.sample = v; } });
    st.sample = sample.value;
    w.button(t('Clean the wire'), clean);
    w.button(t('Dip and heat'), dip, { primary: true });
    w.button(t('Clear results'), function () { st.rows = []; st.last = null; st.flame = 'idle'; render(); });

    var cv = w.canvas({ height: 230, label: t('A Bunsen burner with a blue flame in a dark viewing area. A wire loop holds the sample at the edge of the flame. The colour of the flame is named in the text below the picture and in the readout.') });
    cv.draw(function (ctx, W, H) {
      var F = fonts(w), band = w.color('--band-bg'), ink = w.color('--ink'), metal = w.color('--line-strong'), ink3 = w.color('--ink-3');
      var boxH = H - 34;
      ctx.fillStyle = band; ctx.fillRect(0, 0, W, boxH);
      var cx = W * 0.42, base = boxH - 36;
      // burner
      ctx.fillStyle = metal;
      ctx.fillRect(cx - 9, base, 18, 30);
      ctx.fillRect(cx - 26, boxH - 8, 52, 8);
      // flame: outer coloured envelope, inner blue cone
      var col = flameRGB();
      var fh = Math.min(150, base - 14);
      if (col) {
        ctx.fillStyle = 'rgba(' + col.join(',') + ',' + (st.flame === 'trace' ? 0.35 : 0.85) + ')';
        ctx.beginPath(); ctx.moveTo(cx - 16, base); ctx.quadraticCurveTo(cx - 30, base - fh * 0.55, cx, base - fh); ctx.quadraticCurveTo(cx + 30, base - fh * 0.55, cx + 16, base); ctx.closePath(); ctx.fill();
      } else {
        ctx.fillStyle = 'rgba(70,110,255,0.35)';
        ctx.beginPath(); ctx.moveTo(cx - 14, base); ctx.quadraticCurveTo(cx - 24, base - fh * 0.5, cx, base - fh * 0.8); ctx.quadraticCurveTo(cx + 24, base - fh * 0.5, cx + 14, base); ctx.closePath(); ctx.fill();
      }
      ctx.fillStyle = 'rgba(90,140,255,0.95)';
      ctx.beginPath(); ctx.moveTo(cx - 8, base); ctx.quadraticCurveTo(cx - 10, base - 22, cx, base - 40); ctx.quadraticCurveTo(cx + 10, base - 22, cx + 8, base); ctx.closePath(); ctx.fill();
      // wire loop at the edge of the flame
      var wy = base - fh * 0.45;
      ctx.strokeStyle = metal; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(W - 10, wy - 26); ctx.lineTo(cx + 20, wy); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx + 15, wy + 1, 5, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = metal; ctx.fillRect(W - 40, wy - 34, 36, 12);
      // caption line
      ctx.fillStyle = ink; ctx.font = F.body(14, true); ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(flameCaption(), 4, H - 12, W - 8);
      ctx.fillStyle = ink3;
    });

    var setLast = w.readoutItem(t('Last observation'), { text: true });
    var setWire = w.readoutItem(t('Wire'), { text: true });
    var drawTable = resultsTable(w, t('Results table (copy it into your notebook)'));

    // identification of the unknowns
    var idBox = el('div');
    w.stage.appendChild(idBox);
    idBox.appendChild(el('p', { class: 'lft-q', html: t('Identify the unknowns: which metal ion does each one contain?') }));
    var row = el('div', { class: 'btn-row' });
    idBox.appendChild(row);
    var guessSel = {};
    ['A', 'B', 'C'].forEach(function (k) {
      var id = S1.util.uid('lft');
      var s = el('select', { class: 'select', id: id });
      s.appendChild(el('option', { value: '', html: t('choose') }));
      SALT_IDS.forEach(function (sid) { s.appendChild(el('option', { value: sid, html: SALTS[sid].ion })); });
      s.value = st.guesses[k] || '';
      s.addEventListener('change', function () { st.guesses[k] = s.value; });
      guessSel[k] = s;
      row.appendChild(el('div', { class: 'control', style: 'flex:0 1 auto' }, [el('label', { class: 'control__label', for: id, html: t('Unknown {k}', { k: k }) }), s]));
    });
    var checkBtn = el('button', { class: 'btn btn--small btn--primary', type: 'button', html: t('Check my identifications') });
    row.appendChild(checkBtn);
    var msg = msgBox(idBox);
    checkBtn.addEventListener('click', checkIds);

    function saltOf(v) { return SALTS[st.unknown[v] || v]; }
    function sampleLabel(v) { return st.unknown[v] ? t('unknown {k}', { k: v }) : SALTS[v].name; }
    function flameRGB() {
      if (st.flame === 'trace') return SALTS.na.rgb;
      if (st.flame !== 'sample' || !st.last) return null;
      return st.last.rgb;
    }
    function flameCaption() {
      if (st.flame === 'idle') return t('Flame: blue (no sample)');
      if (st.flame === 'clean') return t('Blank test: the flame stays blue. The wire is clean.');
      if (st.flame === 'trace') return t('Blank test: faint yellow-orange. The wire is not clean yet.');
      return t('Flame colour: {c}', { c: st.last.word });
    }
    function clean() {
      // Sodium is everywhere (fingers, dust), so one cleaning does not always remove it all.
      var trace = st.residue.length > 0 && Math.random() < (st.residue.length > 1 ? 0.6 : 0.3);
      st.residue = trace ? ['na'] : [];
      st.flame = trace ? 'trace' : 'clean';
      render();
    }
    function dip() {
      var v = sample.value, s = saltOf(v), id = st.unknown[v] || v;
      var others = st.residue.filter(function (r) { return r !== id; });
      var word = pick(s.words), rgb = s.rgb.slice();
      if (others.length) {
        var o = SALTS[others[0]];
        if (others.indexOf('na') > -1 && id === 'k') { word = t('yellow-orange; the lilac colour is hidden'); rgb = SALTS.na.rgb.slice(); }
        else if (others.indexOf('na') > -1) { word = t('{c}, mixed with yellow-orange', { c: s.words[0] }); rgb = [Math.round((rgb[0] + 255) / 2), Math.round((rgb[1] + 176) / 2), Math.round(rgb[2] / 2)]; }
        else { word = t('{c}, with flashes of {o}', { c: s.words[0], o: o.words[0] }); rgb = [Math.round((rgb[0] + o.rgb[0]) / 2), Math.round((rgb[1] + o.rgb[1]) / 2), Math.round((rgb[2] + o.rgb[2]) / 2)]; }
      }
      st.last = { v: v, word: word, rgb: rgb, cleaned: !st.residue.length };
      st.rows.push(st.last);
      if (st.residue.indexOf(id) < 0) st.residue.push(id);
      st.flame = 'sample';
      render();
    }
    function checkIds() {
      var html = '', right = 0, missing = false;
      ['A', 'B', 'C'].forEach(function (k) {
        var g = guessSel[k].value, truth = st.unknown[k];
        if (!g) { missing = true; return; }
        var red = (truth === 'li' || truth === 'sr') && (g === 'li' || g === 'sr');
        if (g === truth) { right++; html += p(t('Unknown {k}: correct, it contains the {ion}.', { k: k, ion: SALTS[truth].ion })); }
        else if (red) { right++; html += p(t('Unknown {k}: it contains the {ion}. Lithium and strontium both give a red flame, so a flame test alone cannot tell them apart. Look at the spectrum.', { k: k, ion: SALTS[truth].ion })); }
        else html += p(t('Unknown {k}: not the {ion}. Test it again with a clean wire and compare it with the known salts side by side.', { k: k, ion: SALTS[g].ion }));
      });
      if (missing) { msg.show('warn', p(t('Choose an ion for all three unknowns first.'))); return; }
      msg.show(right === 3 ? 'ok' : 'bad', html);
    }
    function render() {
      setWire(st.residue.length ? t('Not clean: traces of an earlier sample or of sodium may be on it.') : t('Clean: the last blank test gave no colour.'));
      setLast(st.last && st.flame === 'sample' ? t('{s}: {c}', { s: sampleLabel(st.last.v), c: st.last.word }) : flameCaption());
      drawTable([{ label: t('Test'), num: true }, { label: t('Sample') }, { label: t('Flame colour observed') }, { label: t('Wire cleaned first?') }],
        st.rows.map(function (r, i) { return [String(i + 1), sampleLabel(r.v), r.word, r.cleaned ? t('yes') : t('no')]; }),
        t('No tests yet. Clean the wire, then dip and heat.'));
      cv.draw();
    }
    render();
  });

  /* ==========================================================================
     2. Hand spectroscope
     ========================================================================== */
  S1.widgets.register('lab-flame-tests.spectroscope', function (w) {
    var st = stateOf(w, function () { return { inst: 0, rows: [], source: 'H', unknown: pick(['H', 'He', 'Hg']) }; });
    function newInstrument() {
      st.inst++;
      st.offset = randInt(-4, 4);
      st.jitter = {};
      Object.keys(LINES).forEach(function (k) { st.jitter[k] = LINES[k].map(function () { return rand(-0.6, 0.6); }); });
    }
    if (!st.inst) newInstrument();

    var SOURCES = [
      { value: 'lamp', label: t('filament lamp (white light)'), short: t('lamp') },
      { value: 'H', label: t('hydrogen discharge tube'), short: t('hydrogen tube') },
      { value: 'He', label: t('helium discharge tube'), short: t('helium tube') },
      { value: 'Hg', label: t('mercury discharge tube'), short: t('mercury tube') },
      { value: 'Na', label: t('flame with sodium chloride'), short: t('sodium flame') },
      { value: 'Li', label: t('flame with lithium chloride'), short: t('lithium flame') },
      { value: 'X', label: t('unknown discharge tube'), short: t('unknown tube') }
    ];
    function sourceLabel(v) { for (var i = 0; i < SOURCES.length; i++) if (SOURCES[i].value === v) return SOURCES[i].short; return v; }
    w.select({ label: t('Light source'), options: SOURCES, value: st.source, onChange: function (v) { st.source = v; update(); } });
    var cross = w.slider({ label: t('Cross-hair position on the scale'), min: 400, max: 700, step: 1, value: st.cross || 550, unit: 'nm', onInput: function (v) { st.cross = v; update(); } });
    w.button(t('Record reading'), record, { primary: true });
    w.button(t('New spectroscope'), function () { newInstrument(); st.unknown = pick(['H', 'He', 'Hg']); msg.hide(); update(); });
    w.button(t('Clear readings'), function () { st.rows = []; msg.hide(); update(); });

    function shownLines() {
      var key = st.source === 'X' ? st.unknown : st.source;
      if (!LINES[key]) return [];
      return LINES[key].map(function (l, i) { return { nm: l[0] + st.offset + st.jitter[key][i], k: l[1] }; });
    }
    var cv = w.canvas({ height: 150, label: t('The view through a hand spectroscope: a dark field with the spectrum of the chosen source above a wavelength scale from 400 to 700 nanometres, and a cross-hair marker. The readout says whether the cross-hair is on a bright line.') });
    cv.draw(function (ctx, W) {
      var F = fonts(w), band = w.color('--band-bg'), ink = w.color('--ink'), ink3 = w.color('--ink-3'), line = w.color('--line-strong');
      var x0 = 14, x1 = W - 14, y0 = 18, h = 76;
      function X(nm) { return x0 + (nm - 400) / 300 * (x1 - x0); }
      ctx.fillStyle = band; ctx.fillRect(x0, y0, x1 - x0, h);
      if (st.source === 'lamp') {
        for (var x = Math.ceil(x0); x <= x1; x++) { ctx.fillStyle = wavelengthRGB(400 + (x - x0) / (x1 - x0) * 300); ctx.fillRect(x, y0, 1.5, h); }
      } else {
        shownLines().forEach(function (l) {
          if (l.nm < 398 || l.nm > 702) return;
          var xc = X(l.nm);
          ctx.fillStyle = wavelengthRGB(l.nm, 0.35 * l.k); ctx.fillRect(xc - 3, y0, 6, h);
          ctx.fillStyle = wavelengthRGB(l.nm, l.k); ctx.fillRect(xc - 1.2, y0, 2.4, h);
        });
      }
      // scale
      var ys = y0 + h + 4;
      ctx.strokeStyle = ink3; ctx.fillStyle = ink3; ctx.lineWidth = 1; ctx.font = F.mono(11); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      for (var nm = 400; nm <= 700; nm += 10) {
        var big = nm % 50 === 0;
        ctx.beginPath(); ctx.moveTo(X(nm), ys); ctx.lineTo(X(nm), ys + (big ? 9 : 5)); ctx.stroke();
        if (big && (W >= 420 || nm % 100 === 0)) ctx.fillText(String(nm), X(nm), ys + 22);
      }
      ctx.beginPath(); ctx.moveTo(X(400), ys); ctx.lineTo(X(700), ys); ctx.stroke();
      ctx.font = F.body(12); ctx.textAlign = 'left';
      ctx.fillText(t('scale reading / nm'), x0, ys + 38);
      // cross-hair
      var xc2 = X(cross.value);
      ctx.strokeStyle = line; ctx.setLineDash([4, 3]); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(xc2, y0); ctx.lineTo(xc2, y0 + h); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = ink;
      ctx.beginPath(); ctx.moveTo(xc2, y0 - 1); ctx.lineTo(xc2 - 6, y0 - 11); ctx.lineTo(xc2 + 6, y0 - 11); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(xc2, ys); ctx.lineTo(xc2 - 6, ys + 10); ctx.lineTo(xc2 + 6, ys + 10); ctx.closePath(); ctx.fill();
    });

    var setRead = w.readoutItem(t('Cross-hair reading'));
    var setHere = w.readoutItem(t('At the cross-hair'), { text: true });
    var setCount = w.readoutItem(t('Spectrum'), { text: true });
    var msg = msgBox(w.stage);
    var drawTable = resultsTable(w, t('Readings table (each reading ±2 nm)'));

    function lineAtCross() {
      var best = null;
      shownLines().forEach(function (l) { var d = Math.abs(l.nm - cross.value); if (d <= 2 && (!best || d < best.d)) best = { d: d, l: l }; });
      return best;
    }
    function record() {
      if (st.source === 'lamp') { msg.show('warn', p(t('A continuous spectrum has no separate lines to record. Every wavelength from violet to red is present.'))); return; }
      if (!lineAtCross()) { msg.show('warn', p(t('There is no bright line at the cross-hair. Move it onto the centre of a line first.'))); return; }
      msg.hide();
      st.rows.push({ src: st.source, inst: st.inst, nm: cross.value });
      update();
    }
    function update() {
      var v = cross.value;
      setRead(v + ' ± 2 nm');
      if (st.source === 'lamp') {
        setHere(t('Light of every colour. Here it is {c}.', { c: colourName(v) }));
        setCount(t('Continuous: an unbroken band from violet to red.'));
      } else {
        var hit = lineAtCross();
        setHere(hit ? (hit.d <= 0.8 ? t('A bright {c} line, centred on the cross-hair.', { c: colourName(v) }) : t('The edge of a bright {c} line. Move a little to centre it.', { c: colourName(v) })) : t('Dark: no light of this wavelength.'));
        var n = shownLines().filter(function (l) { return l.nm >= 398 && l.nm <= 702; }).length;
        setCount(t.n ? t.n(n, { one: 'Line spectrum: 1 bright line on a dark background.', other: 'Line spectrum: {n} bright lines on a dark background.' }) : t('Line spectrum: {n} bright lines on a dark background.', { n: n }));
      }
      drawTable([{ label: t('Reading'), num: true }, { label: t('Source') }, { label: t('Wavelength / nm'), num: true }, { label: t('Colour') }, { label: t('Spectroscope') }],
        st.rows.map(function (r, i) { return [String(i + 1), sourceLabel(r.src), r.nm + ' ± 2', colourName(r.nm), t('number {n}', { n: r.inst })]; }),
        t('No readings yet. Put the cross-hair on a line and press “Record reading”.'));
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     3. Identify the elements in an unknown tube
     ========================================================================== */
  var POOL = ['H', 'He', 'Li', 'Hg'];
  S1.widgets.register('lab-flame-tests.match', function (w) {
    var st = stateOf(w, function () { return {}; });
    function newUnknown() {
      var pool = S1.util.shuffle(POOL);
      st.truth = pool.slice(0, Math.random() < 0.5 ? 1 : 2);
      st.read = [];
      st.truth.forEach(function (s) { LINES[s].forEach(function (l) { st.read.push(l[0] + randInt(-2, 2)); }); });
      st.read.sort(function (a, b) { return a - b; });
      st.pick = {};
    }
    if (!st.truth) newUnknown();

    var cv = w.canvas({ height: function (W) { return W < 420 ? 236 : 214; }, label: t('Five spectra on the same scale from 400 to 700 nanometres: the unknown tube at the top, then the reference line spectra of hydrogen, helium, lithium and mercury. The readings are listed in the text.') });
    cv.draw(function (ctx, W, H) {
      var F = fonts(w), band = w.color('--band-bg'), ink = w.color('--ink'), ink3 = w.color('--ink-3');
      var narrow = W < 420, lx = narrow ? 0 : 74, x0 = lx + 12, x1 = W - 14;
      var rows = [{ label: t('unknown'), lines: st.read.map(function (nm) { return [nm, 1]; }) }].concat(POOL.map(function (s) { return { label: elementName(s), lines: LINES[s] }; }));
      var rowH = narrow ? 38 : 34, stripH = narrow ? 20 : 24;
      function X(nm) { return x0 + (nm - 400) / 300 * (x1 - x0); }
      rows.forEach(function (r, i) {
        var y = 4 + i * rowH + (narrow ? 14 : 0);
        ctx.fillStyle = ink; ctx.font = F.body(12, i === 0); ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
        if (narrow) ctx.fillText(r.label, x0 - 12, y - 7); else ctx.fillText(r.label, 0, y + stripH / 2);
        ctx.fillStyle = band; ctx.fillRect(x0, y, x1 - x0, stripH);
        r.lines.forEach(function (l) { ctx.fillStyle = wavelengthRGB(l[0], Math.max(0.6, l[1])); ctx.fillRect(X(l[0]) - 1.2, y, 2.4, stripH); });
      });
      var ya = 4 + rows.length * rowH + (narrow ? 8 : 0);
      ctx.strokeStyle = ink3; ctx.fillStyle = ink3; ctx.font = F.mono(11); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(X(400), ya); ctx.lineTo(X(700), ya); ctx.stroke();
      for (var nm = 400; nm <= 700; nm += 50) {
        ctx.beginPath(); ctx.moveTo(X(nm), ya); ctx.lineTo(X(nm), ya + 5); ctx.stroke();
        if (W >= 420 || nm % 100 === 0) ctx.fillText(String(nm), X(nm), ya + 17);
      }
    });

    var readP = el('p', { class: 'lft-readings' });
    w.stage.appendChild(readP);
    w.stage.appendChild(el('p', { class: 'lft-q', html: t('Which elements are in the tube? Choose all that apply.') }));
    var row = el('div', { class: 'btn-row' });
    w.stage.appendChild(row);
    var btns = {};
    POOL.forEach(function (s) {
      var b = el('button', { class: 'btn btn--small', type: 'button', 'aria-pressed': 'false', html: elementName(s) });
      b.addEventListener('click', function () { st.pick[s] = !st.pick[s]; msg.hide(); paint(); });
      btns[s] = b; row.appendChild(b);
    });
    var check = el('button', { class: 'btn btn--small btn--primary', type: 'button', html: t('Check') });
    var again = el('button', { class: 'btn btn--small btn--quiet', type: 'button', html: t('New unknown tube') });
    row.appendChild(check); row.appendChild(again);
    var msg = msgBox(w.stage);
    var setScore = w.readoutItem(t('Tubes identified correctly'));
    check.addEventListener('click', doCheck);
    again.addEventListener('click', function () { newUnknown(); msg.hide(); paint(); cv.draw(); });

    function matched(s) {
      return LINES[s].every(function (l) { return st.read.some(function (r) { return Math.abs(r - l[0]) <= 2; }); });
    }
    function doCheck() {
      var chosen = POOL.filter(function (s) { return st.pick[s]; });
      if (!chosen.length) { msg.show('warn', p(t('Choose at least one element first.'))); return; }
      var ok = POOL.every(function (s) { return !!st.pick[s] === (st.truth.indexOf(s) > -1); });
      var html = '';
      POOL.forEach(function (s) {
        var name = elementName(s), lines = LINES[s].map(function (l) { return l[0]; }).join(', ');
        if (st.truth.indexOf(s) > -1) html += p(t('{el} is present: all of its lines ({lines} nm) are in the readings, within ±2 nm.', { el: name, lines: lines }));
        else if (!matched(s)) html += p(t('{el} is not present: some of its lines ({lines} nm) are missing.', { el: name, lines: lines }));
      });
      st.done = (st.done || 0) + (ok ? 1 : 0); st.tries = (st.tries || 0) + 1;
      msg.show(ok ? 'ok' : 'bad', p(ok ? t('Correct.') : t('Not quite. An element is present only if every one of its lines is there.')) + html);
      setScore(t('{a} of {b}', { a: st.done, b: st.tries }));
    }
    function paint() {
      readP.innerHTML = t('Readings / nm (±2 nm): {list}', { list: st.read.join(', ') });
      POOL.forEach(function (s) { btns[s].setAttribute('aria-pressed', String(!!st.pick[s])); });
    }
    setScore(st.tries ? t('{a} of {b}', { a: st.done, b: st.tries }) : '—');
    paint();
  });
})();
