/* ==========================================================================
   Widgets for topic 1.2 — The nuclear atom.
   s1-2.build     Build an atom or ion from protons, neutrons and electrons
   s1-2.scale     How small the nucleus is compared with the atom
   s1-2.mixer     Isotope mixer: weighted-mean relative atomic mass
   s1-2.spectrum  (AHL) Mass spectrum reader
   The widget API (w) is documented in docs/AUTHORING.md.
   Isotope data: typical natural abundances (%) and relative isotopic masses
   rounded to 2 d.p. Students are never asked to remember these.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var MINUS = '−', TIMES = '×';

  /* ---------- shared helpers ---------------------------------------------- */

  function chargeText(q) {
    if (q === 0) return '';
    var n = Math.abs(q);
    return (n === 1 ? '' : String(n)) + (q > 0 ? '+' : MINUS);
  }
  /* Full nuclear symbol with stacked A and Z (styled by .nuc in the page). */
  function nucHTML(A, Z, sym, q) {
    return '<span class="nuc"><span class="nuc__az"><span>' + A + '</span><span>' + Z + '</span></span>' +
      '<span>' + sym + '</span>' + (q ? '<sup>' + chargeText(q) + '</sup>' : '') + '</span>';
  }
  /* Trim a number to at most dp decimal places without trailing zeros. */
  function trim(x, dp) {
    var s = x.toFixed(dp);
    if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s;
  }
  function font(w, px, token) { return px + 'px ' + (w.color(token || '--font-mono') || 'monospace'); }

  var ISOTOPES = {
    B:  { name: 'Boron',     iso: [[10, 10.01, 19.9], [11, 11.01, 80.1]] },
    Mg: { name: 'Magnesium', iso: [[24, 23.99, 78.99], [25, 24.99, 10.00], [26, 25.98, 11.01]] },
    Cl: { name: 'Chlorine',  iso: [[35, 34.97, 75.76], [37, 36.97, 24.24]] },
    Cu: { name: 'Copper',    iso: [[63, 62.93, 69.15], [65, 64.93, 30.85]] },
    Li: { name: 'Lithium',   iso: [[6, 6.02, 7.59], [7, 7.02, 92.41]] },
    Ne: { name: 'Neon',      iso: [[20, 19.99, 90.48], [21, 20.99, 0.27], [22, 21.99, 9.25]] },
    Si: { name: 'Silicon',   iso: [[28, 27.98, 92.22], [29, 28.98, 4.69], [30, 29.97, 3.09]] },
    Ga: { name: 'Gallium',   iso: [[69, 68.93, 60.11], [71, 70.92, 39.89]] },
    Br: { name: 'Bromine',   iso: [[79, 78.92, 50.69], [81, 80.92, 49.31]] }
  };

  /* ==========================================================================
     1. Build an atom
     ========================================================================== */
  S1.widgets.register('s1-2.build', function (w) {
    var state = { p: 1, n: 0, e: 1 };
    var LIMITS = { p: [1, 36], n: [0, 60], e: [0, 40] };
    var NAMES = { p: 'protons', n: 'neutrons', e: 'electrons' };
    var outs = {};
    var challenge = null;

    function stepper(key, label) {
      var out = el('output', { class: 'stepper__value', text: String(state[key]) });
      var minus = el('button', { class: 'btn btn--small stepper__btn', type: 'button', text: MINUS, 'aria-label': 'One fewer: ' + NAMES[key] });
      var plus = el('button', { class: 'btn btn--small stepper__btn', type: 'button', text: '+', 'aria-label': 'One more: ' + NAMES[key] });
      minus.addEventListener('click', function () { change(key, -1); });
      plus.addEventListener('click', function () { change(key, 1); });
      outs[key] = { out: out, minus: minus, plus: plus };
      w.controls.appendChild(el('div', { class: 'stepper', role: 'group', 'aria-label': label }, [
        el('span', { class: 'control__label', text: label }),
        el('div', { class: 'stepper__row' }, [minus, out, plus])
      ]));
    }
    stepper('p', 'Protons');
    stepper('n', 'Neutrons');
    stepper('e', 'Electrons');

    var btnChallenge = w.button('Challenge me', newChallenge, { primary: true });
    var btnCheck = w.button('Check my atom', check);
    var btnFree = w.button('Back to free build', function () { challenge = null; syncMode(); update(); });

    var bar = el('div', { class: 'challenge-bar' });
    w.stage.appendChild(bar);
    var cv = w.canvas({ height: 250, label: 'Schematic atom: a nucleus of protons and neutrons with the electrons shown as dots in the space around it' });
    var fb = el('div', { class: 'feedback', role: 'status' });
    w.stage.appendChild(fb);

    var setSym = w.readoutItem('Nuclear symbol');
    var setName = w.readoutItem('Element');
    var setA = w.readoutItem('Mass number A');
    var setQ = w.readoutItem('Charge');
    var setType = w.readoutItem('This is', { text: true });

    var TARGETS = [
      [37, 17, -1], [24, 12, 2], [56, 26, 3], [16, 8, -2], [39, 19, 1], [79, 35, -1], [27, 13, 3],
      [14, 6, 0], [2, 1, 0], [32, 16, -2], [65, 29, 2], [40, 20, 2], [15, 7, -3], [7, 3, 1],
      [19, 9, -1], [52, 24, 3], [31, 15, 0], [1, 1, 1], [84, 36, 0], [55, 25, 2]
    ];
    var lastTarget = -1;

    function change(key, d) {
      state[key] = S1.util.clamp(state[key] + d, LIMITS[key][0], LIMITS[key][1]);
      fb.innerHTML = ''; fb.className = 'feedback';
      update();
    }

    function newChallenge() {
      var i;
      do { i = Math.floor(Math.random() * TARGETS.length); } while (i === lastTarget);
      lastTarget = i;
      var t = TARGETS[i];
      challenge = { A: t[0], Z: t[1], q: t[2] };
      fb.innerHTML = ''; fb.className = 'feedback';
      syncMode(); update();
    }

    function syncMode() {
      btnCheck.hidden = !challenge; btnFree.hidden = !challenge;
      btnChallenge.textContent = challenge ? 'New challenge' : 'Challenge me';
      bar.hidden = !challenge;
      if (challenge) {
        var sym = chem.element(challenge.Z).symbol;
        bar.innerHTML = '<span class="challenge-bar__label">Challenge</span> Build ' + nucHTML(challenge.A, challenge.Z, sym, challenge.q) +
          ' <span class="muted small">Set the protons, neutrons and electrons, then press Check my atom.</span>';
      }
    }

    function check() {
      if (!challenge) return;
      var want = { p: challenge.Z, n: challenge.A - challenge.Z, e: challenge.Z - challenge.q };
      var msgs = [];
      if (state.p !== want.p) msgs.push('Protons: the atomic number <i>Z</i> (bottom number) is the number of protons.');
      if (state.n !== want.n) msgs.push('Neutrons: the mass number <i>A</i> (top number) counts protons and neutrons together, so neutrons = <i>A</i> ' + MINUS + ' <i>Z</i>.');
      if (state.e !== want.e) {
        msgs.push(challenge.q === 0 ? 'Electrons: there is no charge on the symbol, so electrons = protons.' :
          challenge.q > 0 ? 'Electrons: a positive charge means electrons have been lost. Electrons = <i>Z</i> ' + MINUS + ' charge.' :
            'Electrons: a negative charge means electrons have been gained. Electrons = <i>Z</i> + size of the charge.');
      }
      if (!msgs.length) {
        fb.className = 'feedback feedback--right';
        fb.innerHTML = '<span class="feedback__label">Correct</span>' + want.p + ' protons, ' + want.n + ' neutrons and ' + want.e + ' electrons.';
      } else {
        fb.className = 'feedback feedback--wrong';
        fb.innerHTML = '<span class="feedback__label">Not yet</span>' + msgs.join('<br>');
      }
    }

    function update() {
      var Z = state.p, A = state.p + state.n, q = state.p - state.e, elem = chem.element(Z);
      ['p', 'n', 'e'].forEach(function (k) {
        outs[k].out.textContent = String(state[k]);
        outs[k].minus.disabled = state[k] <= LIMITS[k][0];
        outs[k].plus.disabled = state[k] >= LIMITS[k][1];
      });
      setSym(nucHTML(A, Z, elem.symbol, q));
      setName(elem.name);
      setA(state.p + ' + ' + state.n + ' = ' + A);
      setQ(q === 0 ? '0' : chargeText(q));
      setType(q === 0 ? 'a neutral atom (protons = electrons)' :
        q > 0 ? 'a cation: positive ion, ' + q + ' fewer electron' + (q === 1 ? '' : 's') + ' than protons' :
          'an anion: negative ion, ' + (-q) + ' more electron' + (q === -1 ? '' : 's') + ' than protons');
      cv.draw();
    }

    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), accent = w.color('--accent'),
        onAccent = w.color('--on-accent'), soft = w.color('--accent-soft'), surface = w.color('--surface'), line = w.color('--line-strong');
      var cx = W / 2, cy = H / 2 - 6, R = Math.min(W / 2 - 8, H / 2 - 22);
      var N = state.p + state.n, rn = N > 60 ? 3.6 : N > 30 ? 4.4 : 5.2, GA = 2.399963;

      // region where the electrons are found: a fuzzy-edged area, not an orbit
      ctx.fillStyle = soft; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.setLineDash([2, 5]);
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);

      // nucleus: protons carry a plus sign, neutrons are open circles
      var c = rn * 1.02, nucR = c * Math.sqrt(N) + rn, i, a, r, x, y;
      for (i = N - 1; i >= 0; i--) {
        r = c * Math.sqrt(i + 0.35); a = i * GA;
        x = cx + r * Math.cos(a); y = cy + r * Math.sin(a);
        var isP = Math.floor((i + 1) * state.p / N) > Math.floor(i * state.p / N);
        ctx.beginPath(); ctx.arc(x, y, rn, 0, Math.PI * 2);
        ctx.fillStyle = isP ? accent : surface; ctx.fill();
        ctx.strokeStyle = isP ? accent : ink; ctx.lineWidth = 1; ctx.stroke();
        if (isP) {
          ctx.strokeStyle = onAccent; ctx.lineWidth = 1.2; ctx.beginPath();
          ctx.moveTo(x - rn * 0.5, y); ctx.lineTo(x + rn * 0.5, y); ctx.moveTo(x, y - rn * 0.5); ctx.lineTo(x, y + rn * 0.5); ctx.stroke();
        }
      }

      // electrons: one dot each, scattered in the space outside the nucleus
      var rmin = nucR + 9, rmax = R - 7;
      for (i = 0; i < state.e; i++) {
        var f = (i * 0.618034 + 0.31) % 1;
        r = rmin + (rmax - rmin) * Math.sqrt(f * 0.85 + 0.15); a = i * GA + 0.6;
        x = cx + r * Math.cos(a); y = cy + r * Math.sin(a);
        ctx.fillStyle = ink2; ctx.beginPath(); ctx.arc(x, y, 4.2, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = surface; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x - 2.2, y); ctx.lineTo(x + 2.2, y); ctx.stroke();
      }

      // legend
      ctx.font = font(w, 11.5, '--font-body'); ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
      var ly = H - 9, lx = 6;
      ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(lx + 5, ly, 5, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = onAccent; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(lx + 2.5, ly); ctx.lineTo(lx + 7.5, ly); ctx.moveTo(lx + 5, ly - 2.5); ctx.lineTo(lx + 5, ly + 2.5); ctx.stroke();
      ctx.fillStyle = ink; var t1 = state.p + ' p'; ctx.fillText(t1, lx + 14, ly); lx += 14 + ctx.measureText(t1).width + 14;
      ctx.fillStyle = surface; ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(lx + 5, ly, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = ink; var t2 = state.n + ' n'; ctx.fillText(t2, lx + 14, ly); lx += 14 + ctx.measureText(t2).width + 14;
      ctx.fillStyle = ink2; ctx.beginPath(); ctx.arc(lx + 5, ly, 4.2, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = surface; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(lx + 2.8, ly); ctx.lineTo(lx + 7.2, ly); ctx.stroke();
      ctx.fillStyle = ink; ctx.fillText(state.e + ' e' + MINUS, lx + 14, ly);
      ctx.fillStyle = ink3; ctx.textAlign = 'right'; ctx.fillText('not to scale', W - 6, ly);
    });

    syncMode(); update();
  });

  /* ==========================================================================
     2. Scale of the atom
     Model values: atom about 1 x 10^-10 m across, nucleus about 1 x 10^-15 m,
     so the ratio drawn is 1 : 100 000 (the real ratio depends on the element).
     ========================================================================== */
  S1.widgets.register('s1-2.scale', function (w) {
    var ATOM = 1e-10, RATIO = 1e5;
    var setZoom = w.readoutItem('Zoom');
    var setView = w.readoutItem('Width of this view');
    var setNuc = w.readoutItem('Nucleus on your screen');
    var setNote = w.readoutItem('Picture it', { text: true });

    var slider = w.slider({ label: 'Zoom in (power of ten)', min: 0, max: 5, step: 0.05, value: 0, onInput: update });
    w.button('Whole atom', function () { slider.set(0); });
    w.button('Zoom to the nucleus', function () { slider.set(5); });

    var cv = w.canvas({ height: 250, label: 'An atom drawn to scale with its nucleus at the centre. At low zoom the nucleus is far too small to see.' });

    function lengthLabel(m) {
      var pm = m / 1e-12;
      if (pm >= 1) return trim(pm, 0) + ' pm';
      return trim(m / 1e-15, 0) + ' fm';
    }

    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink3 = w.color('--ink-3'), soft = w.color('--accent-soft'), line = w.color('--line-strong'), accent = w.color('--accent');
      var z = Math.pow(10, slider.value), base = Math.min(W, H - 40) * 0.86;
      var cx = W / 2, cy = (H - 34) / 2 + 2, Ra = base / 2 * z, Rn = Ra / RATIO;
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, H - 34); ctx.clip();
      // the atom: region occupied by electrons, with a soft (dashed) edge
      ctx.fillStyle = soft;
      if (Ra > W + H) ctx.fillRect(0, 0, W, H - 34);
      else {
        ctx.beginPath(); ctx.arc(cx, cy, Ra, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.setLineDash([2, 5]); ctx.beginPath(); ctx.arc(cx, cy, Ra, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      }
      ctx.font = font(w, 12, '--font-body'); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      if (Rn >= 0.75) {
        ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(cx, cy, Rn, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = ink; ctx.fillText('nucleus', cx, Math.max(14, cy - Rn - 8));
      } else {
        // too small to draw: mark where it is
        ctx.strokeStyle = ink; ctx.lineWidth = 1.2;
        [[0, -1], [0, 1], [-1, 0], [1, 0]].forEach(function (d) {
          ctx.beginPath(); ctx.moveTo(cx + d[0] * 5, cy + d[1] * 5); ctx.lineTo(cx + d[0] * 14, cy + d[1] * 14); ctx.stroke();
        });
        ctx.fillStyle = ink; ctx.fillText('nucleus is here,', cx, cy - 34); ctx.fillText('too small to draw', cx, cy - 19);
      }
      if (Ra <= W + H && Ra < H) { ctx.fillStyle = ink3; ctx.fillText('electrons are somewhere in this region', cx, cy + Math.min(Ra - 10, 60)); }
      else if (slider.value > 0.6) { ctx.fillStyle = ink3; ctx.fillText('all of this view is inside the atom', cx, H - 44); }
      ctx.restore();

      // scale bar
      var pxPerM = base * z / ATOM, L = Math.pow(10, Math.floor(Math.log(W * 0.4 / pxPerM) / Math.LN10 + 1e-9)), bw = L * pxPerM;
      var bx = 10, by = H - 14;
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.beginPath();
      ctx.moveTo(bx, by - 5); ctx.lineTo(bx, by + 5); ctx.moveTo(bx, by); ctx.lineTo(bx + bw, by); ctx.moveTo(bx + bw, by - 5); ctx.lineTo(bx + bw, by + 5); ctx.stroke();
      ctx.fillStyle = ink; ctx.font = font(w, 12); ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(lengthLabel(L), bx + bw + 8, by);
    });

    function update() {
      var z = Math.pow(10, slider.value), base = Math.min(cv.width, cv.height - 40) * 0.86;
      var nucPx = base * z / RATIO;
      setZoom(TIMES + ' ' + (z >= 100 ? chem.toSig(z, 2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : chem.toSig(z, 2)));
      setView(chem.sci(cv.width / (base * z) * ATOM, 1) + ' m');
      setNuc(nucPx >= 1 ? chem.toSig(nucPx, 2) + ' px wide' : chem.toSig(nucPx, 1) + ' px (cannot be drawn)');
      setNote(slider.value < 0.5 ? 'If this atom were 1 km across, its nucleus would be about 1 cm across: a marble in the middle of a town.' :
        slider.value < 4.2 ? 'Keep going. You need to zoom in about 100 000 times before the nucleus fills the view.' :
          'The nucleus fills the view. The edge of the atom is now far off your screen, and almost all of the mass of the atom is in this dot.');
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     3. Isotope mixer
     ========================================================================== */
  S1.widgets.register('s1-2.mixer', function (w) {
    var ORDER = ['Cl', 'Mg', 'B', 'Cu'];
    var sym = ORDER.indexOf(w.options.start) >= 0 ? w.options.start : 'Cl';
    var ab = [];                                  // current abundances in %
    var setAr = w.readoutItem('Relative atomic mass from your mixture');
    var setBook = w.readoutItem('Data booklet');
    var setNote = w.readoutItem('Compare', { text: true });

    var selEl = w.select({ label: 'Element', value: sym, options: ORDER.map(function (s) { return { value: s, label: ISOTOPES[s].name }; }), onChange: function (v) { sym = v; load(); } });
    var selMass = w.select({ label: 'Mass used for each isotope', value: 'acc', options: [{ value: 'acc', label: 'Relative isotopic mass (2 d.p.)' }, { value: 'A', label: 'Mass number only' }], onChange: update });
    var s1 = w.slider({ label: 'Isotope 1', min: 0, max: 100, step: 0.01, value: 50, unit: '%', onInput: function (v) { moved(0, v); } });
    var s2 = w.slider({ label: 'Isotope 2', min: 0, max: 100, step: 0.01, value: 50, unit: '%', onInput: function (v) { moved(1, v); } });
    w.button('Natural abundances', load);

    var cv = w.canvas({ height: 190, label: 'Balance diagram: a block for each isotope on a mass scale, with the weighted mean shown as the balance point' });
    var work = el('div', { class: 'mix-work', 'aria-live': 'polite' });
    w.stage.appendChild(work);

    function iso() { return ISOTOPES[sym].iso; }
    function r2(x) { return Math.round(x * 100) / 100; }
    function setLabel(s, text) {
      s.el.querySelector('label').textContent = text;
      var num = s.el.querySelector('input[type="number"]'); if (num) num.setAttribute('aria-label', text + ' in %, exact value');
    }

    function load() {
      var list = iso();
      ab = list.map(function (i) { return i[2]; });
      setLabel(s1, 'Abundance of ' + sym + '-' + list[0][0]);
      s1.set(ab[0], true);
      if (list.length === 3) { s2.el.hidden = false; setLabel(s2, 'Abundance of ' + sym + '-' + list[1][0]); s2.set(ab[1], true); }
      else s2.el.hidden = true;
      update();
    }

    function moved(i, v) {
      var list = iso();
      ab[i] = r2(v);
      if (list.length === 2) ab[1] = r2(100 - ab[0]);
      else {
        var other = 1 - i;
        if (ab[i] + ab[other] > 100) { ab[other] = r2(100 - ab[i]); (other === 0 ? s1 : s2).set(ab[other], true); }
        ab[2] = r2(100 - ab[0] - ab[1]);
      }
      update();
    }

    function masses() { return iso().map(function (i) { return selMass.value === 'A' ? i[0] : i[1]; }); }
    function mean() { var m = masses(), t = 0; for (var k = 0; k < m.length; k++) t += m[k] * ab[k]; return t / 100; }

    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), line = w.color('--line-strong'), ink2 = w.color('--ink-2');
      var list = iso(), m = masses(), Ar = mean();
      var lo = list[0][0] - 0.6, hi = list[list.length - 1][0] + 0.6, padL = 16, padR = 16;
      function X(v) { return padL + (v - lo) / (hi - lo) * (W - padL - padR); }
      var beamY = 118, maxH = 78, bwid = Math.min(54, (X(lo + 1) - X(lo)) * 0.6);
      ctx.font = font(w, 12); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      // blocks: height is proportional to abundance
      for (var k = 0; k < list.length; k++) {
        var h = ab[k] / 100 * maxH, x = X(m[k]);
        ctx.fillStyle = accent; ctx.fillRect(x - bwid / 2, beamY - h, bwid, h);
        ctx.fillStyle = ink; ctx.fillText(trim(ab[k], 2) + '%', x, beamY - h - 6);
        ctx.fillStyle = ink2; ctx.fillText(sym + '-' + list[k][0], x, beamY + 44);
      }
      // beam with a tick at each whole number
      ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(X(lo), beamY); ctx.lineTo(X(hi), beamY); ctx.stroke();
      ctx.lineWidth = 1; ctx.fillStyle = ink3;
      for (var t = Math.ceil(lo); t <= hi; t++) { ctx.beginPath(); ctx.moveTo(X(t), beamY); ctx.lineTo(X(t), beamY + 5); ctx.stroke(); }
      // balance point = weighted mean
      var xa = X(Ar);
      ctx.fillStyle = ink; ctx.beginPath(); ctx.moveTo(xa, beamY + 2); ctx.lineTo(xa - 9, beamY + 18); ctx.lineTo(xa + 9, beamY + 18); ctx.closePath(); ctx.fill();
      ctx.font = font(w, 12); ctx.fillStyle = ink;
      var lab = 'balance point = ' + Ar.toFixed(2), tw = ctx.measureText(lab).width;
      ctx.fillText(lab, Math.min(Math.max(xa, tw / 2 + 4), W - tw / 2 - 4), beamY + 66);
      ctx.strokeStyle = line; ctx.beginPath(); ctx.moveTo(xa, beamY + 18); ctx.lineTo(xa, beamY + 52); ctx.stroke();
    });

    function update() {
      var list = iso(), m = masses(), Ar = mean(), book = chem.element(sym).ar, k, parts = [], prods = [], total = 0;
      for (k = 0; k < list.length; k++) {
        parts.push(trim(m[k], 2) + ' ' + TIMES + ' ' + trim(ab[k], 2));
        prods.push(trim(m[k] * ab[k], 4)); total += m[k] * ab[k];
      }
      var frac = function (top) { return '<span class="frac"><span>' + top + '</span><span>100</span></span>'; };
      work.innerHTML =
        '<p class="mix-work__title">Working, line by line</p>' +
        '<div class="worked__math"><i>A</i><sub>r</sub> = ' + frac(parts.join(' + ')) + '</div>' +
        '<div class="worked__math"><i>A</i><sub>r</sub> = ' + frac(prods.join(' + ')) + ' = ' + frac(trim(total, 4)) + '</div>' +
        '<div class="worked__math"><i>A</i><sub>r</sub> = ' + trim(total / 100, 6) + ' = <b>' + Ar.toFixed(2) + '</b> (2 d.p., no units)</div>' +
        '<p class="small muted">Check: the abundances add up to ' + trim(ab.reduce(function (a, b) { return a + b; }, 0), 2) + '%.' +
        (list.length === 3 ? ' ' + sym + '-' + list[2][0] + ' is whatever is left: ' + trim(ab[2], 2) + '%.' : ' ' + sym + '-' + list[1][0] + ' is whatever is left: ' + trim(ab[1], 2) + '%.') + '</p>';
      setAr(Ar.toFixed(2));
      setBook(book.toFixed(2));
      var natural = list.every(function (i, n) { return Math.abs(i[2] - ab[n]) < 0.005; });
      var diff = Math.abs(Number(Ar.toFixed(2)) - book);
      setNote(!natural ? 'This is not the natural mixture, so the answer is not the data booklet value. A different mixture of isotopes gives a different relative atomic mass.' :
        selMass.value === 'A' ? 'Natural mixture, using mass numbers as the masses. The answer is ' + (diff < 0.005 ? 'the same as' : 'close to, but not the same as,') + ' the data booklet value, because the real mass of an isotope is not exactly a whole number.' :
          diff < 0.011 ? 'Natural mixture. Your weighted mean matches the data booklet value' + (diff < 0.005 ? '.' : ' to within 0.01 (the masses here are rounded to 2 d.p.).') :
            'Natural mixture. Close to the data booklet value.');
      cv.draw();
    }
    selEl.set(sym);
    load();
  });

  /* ==========================================================================
     4. (AHL) Mass spectrum reader
     Bars are drawn at integer m/z (singly charged ions), heights to scale.
     ========================================================================== */
  S1.widgets.register('s1-2.spectrum', function (w) {
    var ORDER = ['Cl', 'Mg', 'B', 'Cu', 'Ne', 'Ga', 'Si', 'Br', 'Li'];
    var MYSTERY = ['B', 'Mg', 'Si', 'Cl', 'Cu', 'Ga', 'Br', 'Li', 'Ne'];
    var sym = 'Cl', mystery = false, solved = false, showVals = false, lastMystery = '';
    var peaks = [];                               // [{mz, h}] heights as displayed

    var selSample = w.select({ label: 'Sample', value: 'Cl', options: ORDER.map(function (s) { return { value: s, label: ISOTOPES[s].name }; }).concat([{ value: '?', label: 'Mystery element' }]), onChange: pick });
    var selMode = w.select({ label: 'Peak heights show', value: 'pct', options: [{ value: 'pct', label: 'Percentage abundance' }, { value: 'rel', label: 'Relative abundance (tallest peak = 100)' }], onChange: function () { rebuild(); } });

    var idAr = S1.util.uid('ctl'), idSym = S1.util.uid('ctl');
    var inAr = el('input', { class: 'input', id: idAr, type: 'text', inputmode: 'decimal', autocomplete: 'off' });
    var arWrap = el('div', { class: 'control spec-entry' }, [el('label', { class: 'control__label', for: idAr, html: 'Your <i>A</i><sub>r</sub> (2 d.p.)' }), el('div', { class: 'control__row' }, [inAr])]);
    w.controls.appendChild(arWrap);
    var btnCheck = w.button('Check', checkAr, { primary: true });
    arWrap.querySelector('.control__row').appendChild(btnCheck);
    inAr.addEventListener('keydown', function (e) { if (e.key === 'Enter') checkAr(); });

    var inSym = el('input', { class: 'input', id: idSym, type: 'text', autocomplete: 'off', maxlength: 12 });
    var btnSym = el('button', { class: 'btn btn--small', type: 'button', text: 'Check element' });
    var symWrap = el('div', { class: 'control spec-entry' }, [el('label', { class: 'control__label', for: idSym, text: 'Mystery element (symbol or name)' }), el('div', { class: 'control__row' }, [inSym, btnSym])]);
    w.controls.appendChild(symWrap);
    btnSym.addEventListener('click', checkSym);
    inSym.addEventListener('keydown', function (e) { if (e.key === 'Enter') checkSym(); });

    var btnVals = w.button('Show peak heights', function () { showVals = !showVals; sync(); cv.draw(); });
    var btnWork = w.button('Show the calculation', function () { work.hidden = !work.hidden; sync(); });
    var btnNew = w.button('New mystery', function () { pick('?'); });

    var cv = w.canvas({ height: 280, label: 'Mass spectrum: bar chart of relative abundance against m/z' });
    var fb = el('div', { class: 'feedback', role: 'status' });
    var work = el('div', { class: 'mix-work' }); work.hidden = true;
    w.stage.appendChild(fb); w.stage.appendChild(work);

    var setPeaks = w.readoutItem('Peaks', { text: true });

    function pick(v) {
      mystery = v === '?';
      if (mystery) {
        do { sym = MYSTERY[Math.floor(Math.random() * MYSTERY.length)]; } while (sym === lastMystery);
        lastMystery = sym; selSample.set('?');
        if (selMode.value !== 'rel') selMode.set('rel');
      } else sym = v;
      solved = false; showVals = false; work.hidden = true;
      inAr.value = ''; inSym.value = '';
      rebuild();
    }

    function rebuild() {
      var list = ISOTOPES[sym].iso, max = 0;
      list.forEach(function (i) { if (i[2] > max) max = i[2]; });
      peaks = list.map(function (i) {
        return { mz: i[0], h: selMode.value === 'rel' ? Math.round(i[2] / max * 1000) / 10 : i[2] };
      });
      fb.innerHTML = ''; fb.className = 'feedback';
      renderWork(); sync(); cv.draw();
    }

    function total() { return peaks.reduce(function (a, p) { return a + p.h; }, 0); }
    function calcAr() { return peaks.reduce(function (a, p) { return a + p.mz * p.h; }, 0) / total(); }

    function renderWork() {
      var T = total(), top = peaks.map(function (p) { return p.mz + ' ' + TIMES + ' ' + trim(p.h, 2); }).join(' + ');
      var prods = peaks.map(function (p) { return trim(p.mz * p.h, 2); }).join(' + ');
      var sum = peaks.reduce(function (a, p) { return a + p.mz * p.h; }, 0), Ar = calcAr();
      var frac = function (a, b) { return '<span class="frac"><span>' + a + '</span><span>' + b + '</span></span>'; };
      var isPct = Math.abs(T - 100) < 0.005;
      work.innerHTML =
        '<p class="mix-work__title">The calculation</p>' +
        '<p class="small">' + (isPct ? 'These heights are percentages, so they add up to 100.' :
          'These heights do <strong>not</strong> add up to 100, so divide by their total, not by 100.') + '</p>' +
        '<div class="worked__math">total of peak heights = ' + peaks.map(function (p) { return trim(p.h, 2); }).join(' + ') + ' = ' + trim(T, 2) + '</div>' +
        '<div class="worked__math"><i>A</i><sub>r</sub> = ' + frac(top, trim(T, 2)) + '</div>' +
        '<div class="worked__math"><i>A</i><sub>r</sub> = ' + frac(prods, trim(T, 2)) + ' = ' + frac(trim(sum, 2), trim(T, 2)) + '</div>' +
        '<div class="worked__math"><i>A</i><sub>r</sub> = ' + trim(Ar, 5) + ' = <b>' + Ar.toFixed(2) + '</b> (2 d.p., no units)</div>';
    }

    function sync() {
      symWrap.hidden = !mystery; btnNew.hidden = !mystery;
      btnVals.textContent = showVals ? 'Hide peak heights' : 'Show peak heights';
      btnVals.setAttribute('aria-pressed', showVals ? 'true' : 'false');
      btnWork.textContent = work.hidden ? 'Show the calculation' : 'Hide the calculation';
      setPeaks(showVals || !work.hidden ?
        peaks.map(function (p) { return '<span class="nowrap"><i>m/z</i> ' + p.mz + ': ' + trim(p.h, 2) + (selMode.value === 'pct' ? '%' : '') + '</span>'; }).join(', ') :
        peaks.length + ' peaks, at <i>m/z</i> ' + peaks.map(function (p) { return p.mz; }).join(', ') + '. Read each height from the chart, or press Show peak heights.');
    }

    function say(kind, label, html) {
      fb.className = 'feedback' + (kind ? ' feedback--' + kind : '');
      fb.innerHTML = '<span class="feedback__label">' + label + '</span>' + html;
    }

    function checkAr() {
      var parsed = chem.parseNumber(inAr.value), Ar = calcAr(), book = chem.element(sym).ar;
      if (!parsed) { say('', 'Enter a number', 'Type your relative atomic mass, for example 24.32.'); return; }
      var v = parsed.value, ok = Math.abs(v - Ar) <= 0.05;
      var isBook = Math.abs(v - book) < 0.005 && Math.abs(Number(Ar.toFixed(2)) - book) > 0.005;
      if (isBook && !mystery) {
        say('partial', 'That is the data booklet value',
          'The question is asking for the value <em>from this spectrum</em>. Here that is slightly different from ' + book.toFixed(2) + '. In an exam the booklet value does not score when you are asked to calculate from the data.');
      } else if (ok) {
        solved = true;
        say('right', 'Correct', 'From this spectrum <i>A</i><sub>r</sub> = ' + Ar.toFixed(2) + '.' +
          (mystery ? ' Now find the element whose relative atomic mass in the periodic table is closest to this, and enter it above.' :
            ' The data booklet gives ' + book.toFixed(2) + '. The small difference is because the real mass of each isotope is not exactly a whole number.'));
      } else {
        var mzs = peaks.map(function (p) { return p.mz; }), simple = mzs.reduce(function (a, b) { return a + b; }, 0) / mzs.length;
        var lo = Math.min.apply(null, mzs), hi = Math.max.apply(null, mzs), by100 = peaks.reduce(function (a, p) { return a + p.mz * p.h; }, 0) / 100;
        var msg = v < lo || v > hi ?
          (Math.abs(v - by100) <= 0.06 && Math.abs(total() - 100) > 0.5 ? 'You divided by 100, but these peak heights do not add up to 100. Divide by the total of the heights.' :
            'A weighted mean must lie between the lightest and heaviest isotope: between ' + lo + ' and ' + hi + '.') :
          Math.abs(v - simple) < 0.011 ? 'That is the simple average of the <i>m/z</i> values. Each isotope has to be weighted by its abundance.' :
            'Multiply each <i>m/z</i> by its peak height, add the results, then divide by the total of the peak heights. Check how you read each height.';
        say('wrong', 'Not yet', msg);
      }
    }

    function checkSym() {
      if (!mystery) return;
      var t = inSym.value.trim().toLowerCase(), e = chem.element(sym);
      if (!t) { say('', 'Enter an element', 'Type a symbol such as Mg, or a name.'); return; }
      if (t === e.symbol.toLowerCase() || t === e.name.toLowerCase()) {
        say('right', 'Correct', 'It is ' + e.name + '. The data booklet gives <i>A</i><sub>r</sub> = ' + e.ar.toFixed(2) + ', and this spectrum gives ' + calcAr().toFixed(2) + '.');
      } else {
        say('wrong', 'Not yet', (solved ? '' : 'Work out <i>A</i><sub>r</sub> first. ') + 'Look in the periodic table for the element whose relative atomic mass is closest to your value. Do not match the mass to the atomic number.');
      }
    }

    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), grid = w.color('--line'), ink2 = w.color('--ink-2');
      var padL = 46, padR = 12, padT = 22, padB = 44;
      var x0 = padL, x1 = W - padR, y0 = H - padB, y1 = padT;
      var lo = peaks[0].mz - 2, hi = peaks[peaks.length - 1].mz + 2;
      function X(v) { return x0 + (v - lo) / (hi - lo) * (x1 - x0); }
      function Y(v) { return y0 - v / 100 * (y0 - y1); }
      ctx.font = font(w, 11.5); ctx.textBaseline = 'middle';
      // horizontal grid every 10, labels every 20
      for (var g = 0; g <= 100; g += 10) {
        ctx.strokeStyle = grid; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, Y(g)); ctx.lineTo(x1, Y(g)); ctx.stroke();
        ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(x0 - 4, Y(g)); ctx.lineTo(x0, Y(g)); ctx.stroke();
        if (g % 20 === 0) { ctx.fillStyle = ink2; ctx.textAlign = 'right'; ctx.fillText(String(g), x0 - 7, Y(g)); }
      }
      // axes
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x0, y1 - 6); ctx.lineTo(x0, y0); ctx.lineTo(x1, y0); ctx.stroke();
      // x ticks at every whole number
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      for (var t = lo; t <= hi; t++) {
        ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(X(t), y0); ctx.lineTo(X(t), y0 + 4); ctx.stroke();
        if (t > lo && t < hi) { ctx.fillStyle = ink2; ctx.fillText(String(t), X(t), y0 + 17); }
      }
      // bars
      var bw = Math.max(4, Math.min(16, (X(lo + 1) - X(lo)) * 0.28));
      peaks.forEach(function (p) {
        var top = Y(p.h);
        ctx.fillStyle = accent; ctx.fillRect(X(p.mz) - bw / 2, Math.min(top, y0 - 1.5), bw, Math.max(y0 - top, 1.5));
        if (showVals) { ctx.fillStyle = ink; ctx.fillText(trim(p.h, 2), X(p.mz), top - 6); }
      });
      // axis titles
      ctx.fillStyle = ink; ctx.font = 'italic ' + font(w, 12.5, '--font-body'); ctx.fillText('m/z', (x0 + x1) / 2, H - 6);
      ctx.save(); ctx.translate(12, (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
      ctx.font = font(w, 12.5, '--font-body'); ctx.fillText(selMode.value === 'pct' ? 'relative abundance / %' : 'relative abundance', 0, 0); ctx.restore();
      ctx.font = font(w, 11.5, '--font-body'); ctx.fillStyle = ink3; ctx.textAlign = 'right';
      ctx.fillText(mystery ? 'mystery element' : ISOTOPES[sym].name.toLowerCase(), x1, 12);
    });

    rebuild();
  });
})();
