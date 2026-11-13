/* ==========================================================================
   Widgets for topic 1.2 — The nuclear atom.
   s1-2.build     Build an atom or ion from protons, neutrons and electrons
   s1-2.scale     How small the nucleus is compared with the atom
   s1-2.mixer     Isotope mixer: weighted-mean relative atomic mass
   s1-2.spectrum  (AHL) Mass spectrum reader
   The widget API (w) is documented in docs/AUTHORING.md.
   Isotope data: typical natural abundances (%) and relative isotopic masses
   rounded to 2 d.p. Students are never asked to remember these.
   Every user-visible string goes through t() so the site can be translated.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var MINUS = '−', TIMES = '×';
  var AR = '<i>A</i><sub>r</sub>', MZ = '<i>m/z</i>';

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
  function frac(top, bottom) { return '<span class="frac"><span>' + top + '</span><span>' + bottom + '</span></span>'; }
  function mathLine(html) { return '<div class="worked__math">' + html + '</div>'; }

  var ISOTOPES = {
    B:  { name: t('Boron'),     iso: [[10, 10.01, 19.9], [11, 11.01, 80.1]] },
    Mg: { name: t('Magnesium'), iso: [[24, 23.99, 78.99], [25, 24.99, 10.00], [26, 25.98, 11.01]] },
    Cl: { name: t('Chlorine'),  iso: [[35, 34.97, 75.76], [37, 36.97, 24.24]] },
    Cu: { name: t('Copper'),    iso: [[63, 62.93, 69.15], [65, 64.93, 30.85]] },
    Li: { name: t('Lithium'),   iso: [[6, 6.02, 7.59], [7, 7.02, 92.41]] },
    Ne: { name: t('Neon'),      iso: [[20, 19.99, 90.48], [21, 20.99, 0.27], [22, 21.99, 9.25]] },
    Si: { name: t('Silicon'),   iso: [[28, 27.98, 92.22], [29, 28.98, 4.69], [30, 29.97, 3.09]] },
    Ga: { name: t('Gallium'),   iso: [[69, 68.93, 60.11], [71, 70.92, 39.89]] },
    Br: { name: t('Bromine'),   iso: [[79, 78.92, 50.69], [81, 80.92, 49.31]] }
  };

  /* ==========================================================================
     1. Build an atom
     ========================================================================== */
  S1.widgets.register('s1-2.build', function (w) {
    var state = { p: 1, n: 0, e: 1 };
    var LIMITS = { p: [1, 36], n: [0, 60], e: [0, 40] };
    var TEXT = {
      p: { label: t('Protons'), less: t('Remove one proton'), more: t('Add one proton') },
      n: { label: t('Neutrons'), less: t('Remove one neutron'), more: t('Add one neutron') },
      e: { label: t('Electrons'), less: t('Remove one electron'), more: t('Add one electron') }
    };
    var outs = {};
    var challenge = null;

    function stepper(key) {
      var out = el('output', { class: 'stepper__value', text: String(state[key]) });
      var minus = el('button', { class: 'btn btn--small stepper__btn', type: 'button', text: MINUS, 'aria-label': TEXT[key].less });
      var plus = el('button', { class: 'btn btn--small stepper__btn', type: 'button', text: '+', 'aria-label': TEXT[key].more });
      minus.addEventListener('click', function () { change(key, -1); });
      plus.addEventListener('click', function () { change(key, 1); });
      outs[key] = { out: out, minus: minus, plus: plus };
      w.controls.appendChild(el('div', { class: 'stepper', role: 'group', 'aria-label': TEXT[key].label }, [
        el('span', { class: 'control__label', text: TEXT[key].label }),
        el('div', { class: 'stepper__row' }, [minus, out, plus])
      ]));
    }
    stepper('p'); stepper('n'); stepper('e');

    var btnChallenge = w.button(t('Challenge me'), newChallenge, { primary: true });
    var btnCheck = w.button(t('Check my atom'), check);
    var btnFree = w.button(t('Back to free build'), function () { challenge = null; syncMode(); update(); });

    var bar = el('div', { class: 'challenge-bar' });
    w.stage.appendChild(bar);
    var cv = w.canvas({ height: 250, label: t('Schematic atom: a nucleus of protons and neutrons with the electrons shown as dots in the space around it') });
    var fb = el('div', { class: 'feedback', role: 'status' });
    w.stage.appendChild(fb);

    var setSym = w.readoutItem(t('Nuclear symbol'));
    var setName = w.readoutItem(t('Element'));
    var setA = w.readoutItem(t('Mass number A'));
    var setQ = w.readoutItem(t('Charge'));
    var setType = w.readoutItem(t('This is'), { text: true });

    var TARGETS = [
      [37, 17, -1], [24, 12, 2], [56, 26, 3], [16, 8, -2], [39, 19, 1], [79, 35, -1], [27, 13, 3],
      [14, 6, 0], [2, 1, 0], [32, 16, -2], [65, 29, 2], [40, 20, 2], [15, 7, -3], [7, 3, 1],
      [19, 9, -1], [52, 24, 3], [31, 15, 0], [1, 1, 1], [84, 36, 0], [55, 25, 2]
    ];
    var lastTarget = -1;

    function clearFeedback() { fb.innerHTML = ''; fb.className = 'feedback'; }

    function change(key, d) {
      state[key] = S1.util.clamp(state[key] + d, LIMITS[key][0], LIMITS[key][1]);
      clearFeedback(); update();
    }

    function newChallenge() {
      var i;
      do { i = Math.floor(Math.random() * TARGETS.length); } while (i === lastTarget);
      lastTarget = i;
      var target = TARGETS[i];
      challenge = { A: target[0], Z: target[1], q: target[2] };
      clearFeedback(); syncMode(); update();
    }

    function syncMode() {
      btnCheck.hidden = !challenge; btnFree.hidden = !challenge;
      btnChallenge.textContent = challenge ? t('New challenge') : t('Challenge me');
      bar.hidden = !challenge;
      if (challenge) {
        var sym = chem.element(challenge.Z).symbol;
        bar.innerHTML = '<span class="challenge-bar__label">' + t('Challenge') + '</span> ' +
          t('Build {symbol}', { symbol: nucHTML(challenge.A, challenge.Z, sym, challenge.q) }) +
          ' <span class="muted small">' + t('Set the protons, neutrons and electrons, then press Check my atom.') + '</span>';
      }
    }

    function check() {
      if (!challenge) return;
      var want = { p: challenge.Z, n: challenge.A - challenge.Z, e: challenge.Z - challenge.q };
      var msgs = [];
      if (state.p !== want.p) msgs.push(t('Protons: the atomic number <i>Z</i> (bottom number) is the number of protons.'));
      if (state.n !== want.n) msgs.push(t('Neutrons: the mass number <i>A</i> (top number) counts protons and neutrons together, so neutrons = <i>A</i> − <i>Z</i>.'));
      if (state.e !== want.e) {
        msgs.push(challenge.q === 0 ? t('Electrons: there is no charge on the symbol, so electrons = protons.') :
          challenge.q > 0 ? t('Electrons: a positive charge means electrons have been lost. Electrons = <i>Z</i> − charge.') :
            t('Electrons: a negative charge means electrons have been gained. Electrons = <i>Z</i> + size of the charge.'));
      }
      if (!msgs.length) {
        fb.className = 'feedback feedback--right';
        fb.innerHTML = '<span class="feedback__label">' + t('Correct') + '</span>' +
          t('{p} protons, {n} neutrons and {e} electrons.', { p: want.p, n: want.n, e: want.e });
      } else {
        fb.className = 'feedback feedback--wrong';
        fb.innerHTML = '<span class="feedback__label">' + t('Not yet') + '</span>' + msgs.join('<br>');
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
      setName(t(elem.name));
      setA(state.p + ' + ' + state.n + ' = ' + A);
      setQ(q === 0 ? '0' : chargeText(q));
      setType(q === 0 ? t('a neutral atom (protons = electrons)') :
        q === 1 ? t('a cation: positive ion, 1 fewer electron than protons') :
          q > 1 ? t('a cation: positive ion, {n} fewer electrons than protons', { n: q }) :
            q === -1 ? t('an anion: negative ion, 1 more electron than protons') :
              t('an anion: negative ion, {n} more electrons than protons', { n: -q }));
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
      ctx.fillStyle = ink; var t1 = t('{n} p', { n: state.p }); ctx.fillText(t1, lx + 14, ly); lx += 14 + ctx.measureText(t1).width + 14;
      ctx.fillStyle = surface; ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(lx + 5, ly, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = ink; var t2 = t('{n} n', { n: state.n }); ctx.fillText(t2, lx + 14, ly); lx += 14 + ctx.measureText(t2).width + 14;
      ctx.fillStyle = ink2; ctx.beginPath(); ctx.arc(lx + 5, ly, 4.2, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = surface; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(lx + 2.8, ly); ctx.lineTo(lx + 7.2, ly); ctx.stroke();
      ctx.fillStyle = ink; ctx.fillText(t('{n} e−', { n: state.e }), lx + 14, ly);
      ctx.fillStyle = ink3; ctx.textAlign = 'right'; ctx.fillText(t('not to scale'), W - 6, ly);
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
    var setZoom = w.readoutItem(t('Zoom'));
    var setView = w.readoutItem(t('Width of this view'));
    var setNuc = w.readoutItem(t('Nucleus on your screen'));
    var setNote = w.readoutItem(t('Picture it'), { text: true });

    var slider = w.slider({ label: t('Zoom in (power of ten)'), min: 0, max: 5, step: 0.05, value: 0, onInput: update });
    w.button(t('Whole atom'), function () { slider.set(0); });
    w.button(t('Zoom to the nucleus'), function () { slider.set(5); });

    var cv = w.canvas({ height: 250, label: t('An atom drawn to scale with its nucleus at the centre. At low zoom the nucleus is far too small to see.') });

    function lengthLabel(m) {
      var pm = m / 1e-12;
      if (pm >= 1) return trim(pm, 0) + ' pm';
      return trim(m / 1e-15, 1) + ' fm';
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
        ctx.fillStyle = ink; ctx.fillText(t('nucleus'), cx, Math.max(14, cy - Rn - 8));
      } else {
        // too small to draw: mark where it is
        ctx.strokeStyle = ink; ctx.lineWidth = 1.2;
        [[0, -1], [0, 1], [-1, 0], [1, 0]].forEach(function (d) {
          ctx.beginPath(); ctx.moveTo(cx + d[0] * 5, cy + d[1] * 5); ctx.lineTo(cx + d[0] * 14, cy + d[1] * 14); ctx.stroke();
        });
        var lines = t('nucleus is here,\ntoo small to draw').split('\n');
        ctx.fillStyle = ink; ctx.fillText(lines[0], cx, cy - 34); if (lines[1]) ctx.fillText(lines[1], cx, cy - 19);
      }
      if (Ra <= W + H && Ra < H) { ctx.fillStyle = ink3; ctx.fillText(t('electrons are somewhere in this region'), cx, cy + Math.min(Ra - 10, 60)); }
      else if (slider.value > 0.6 && Rn < 30) { ctx.fillStyle = ink3; ctx.fillText(t('all of this view is inside the atom'), cx, H - 44); }
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
      setNuc(nucPx >= 1 ? t('{n} px wide', { n: chem.toSig(nucPx, 2) }) : t('{n} px (cannot be drawn)', { n: chem.toSig(nucPx, 1) }));
      setNote(slider.value < 0.5 ? t('If this atom were 1 km across, its nucleus would be about 1 cm across: a marble in the middle of a town.') :
        slider.value < 4.2 ? t('Keep going. You need to zoom in about 100 000 times before the nucleus fills the view.') :
          t('The nucleus fills the view. The edge of the atom is now far off your screen, and almost all of the mass of the atom is in this dot.'));
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
    var setAr = w.readoutItem(t('Relative atomic mass from your mixture'));
    var setBook = w.readoutItem(t('Data booklet'));
    var setNote = w.readoutItem(t('Compare'), { text: true });

    var selEl = w.select({ label: t('Element'), value: sym, options: ORDER.map(function (s) { return { value: s, label: ISOTOPES[s].name }; }), onChange: function (v) { sym = v; load(); } });
    var selMass = w.select({ label: t('Mass used for each isotope'), value: 'acc', options: [{ value: 'acc', label: t('Relative isotopic mass (2 d.p.)') }, { value: 'A', label: t('Mass number only') }], onChange: update });
    var s1 = w.slider({ label: t('Abundance of isotope 1'), min: 0, max: 100, step: 0.01, value: 50, unit: '%', onInput: function (v) { moved(0, v); } });
    var s2 = w.slider({ label: t('Abundance of isotope 2'), min: 0, max: 100, step: 0.01, value: 50, unit: '%', onInput: function (v) { moved(1, v); } });
    w.button(t('Natural abundances'), load);

    var cv = w.canvas({ height: 190, label: t('Balance diagram: a block for each isotope on a mass scale, with the weighted mean shown as the balance point') });
    var work = el('div', { class: 'mix-work', 'aria-live': 'polite' });
    w.stage.appendChild(work);

    function iso() { return ISOTOPES[sym].iso; }
    function isoName(k) { return sym + '-' + iso()[k][0]; }
    function r2(x) { return Math.round(x * 100) / 100; }
    function setLabel(s, k) {
      s.el.querySelector('label').textContent = t('Abundance of {isotope}', { isotope: isoName(k) });
      var num = s.el.querySelector('input[type="number"]');
      if (num) num.setAttribute('aria-label', t('Abundance of {isotope} in %, exact value', { isotope: isoName(k) }));
    }

    function load() {
      var list = iso();
      ab = list.map(function (i) { return i[2]; });
      setLabel(s1, 0);
      s1.set(ab[0], true);
      if (list.length === 3) { s2.el.hidden = false; setLabel(s2, 1); s2.set(ab[1], true); }
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
    function mean() { var m = masses(), sum = 0; for (var k = 0; k < m.length; k++) sum += m[k] * ab[k]; return sum / 100; }

    cv.draw(function (ctx, W, H) {
      if (!ab.length) return;
      var ink = w.color('--ink'), accent = w.color('--accent'), line = w.color('--line-strong'), ink2 = w.color('--ink-2');
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
        ctx.fillStyle = ink2; ctx.fillText(isoName(k), x, beamY + 44);
      }
      // beam with a tick at each whole number
      ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(X(lo), beamY); ctx.lineTo(X(hi), beamY); ctx.stroke();
      ctx.lineWidth = 1;
      for (var tick = Math.ceil(lo); tick <= hi; tick++) { ctx.beginPath(); ctx.moveTo(X(tick), beamY); ctx.lineTo(X(tick), beamY + 5); ctx.stroke(); }
      // balance point = weighted mean
      var xa = X(Ar);
      ctx.fillStyle = ink; ctx.beginPath(); ctx.moveTo(xa, beamY + 2); ctx.lineTo(xa - 9, beamY + 18); ctx.lineTo(xa + 9, beamY + 18); ctx.closePath(); ctx.fill();
      ctx.font = font(w, 12); ctx.fillStyle = ink;
      var lab = t('balance point = {Ar}', { Ar: Ar.toFixed(2) }), tw = ctx.measureText(lab).width;
      ctx.fillText(lab, Math.min(Math.max(xa, tw / 2 + 4), W - tw / 2 - 4), beamY + 66);
      ctx.strokeStyle = line; ctx.beginPath(); ctx.moveTo(xa, beamY + 18); ctx.lineTo(xa, beamY + 52); ctx.stroke();
    });

    function update() {
      var list = iso(), m = masses(), Ar = mean(), book = chem.element(sym).ar, k, parts = [], prods = [], total = 0;
      for (k = 0; k < list.length; k++) {
        parts.push(trim(m[k], 2) + ' ' + TIMES + ' ' + trim(ab[k], 2));
        prods.push(trim(m[k] * ab[k], 4)); total += m[k] * ab[k];
      }
      var last = list.length - 1;
      work.innerHTML =
        '<p class="mix-work__title">' + t('Working, line by line') + '</p>' +
        mathLine(AR + ' = ' + frac(parts.join(' + '), '100')) +
        mathLine(AR + ' = ' + frac(prods.join(' + '), '100') + ' = ' + frac(trim(total, 4), '100')) +
        mathLine(AR + ' = ' + trim(total / 100, 6) + ' = <b>' + Ar.toFixed(2) + '</b> ' + t('(2 d.p., no units)')) +
        '<p class="small muted">' + t('Check: the abundances add up to {total}%. {isotope} is whatever is left: {rest}%.',
          { total: trim(ab.reduce(function (a, b) { return a + b; }, 0), 2), isotope: isoName(last), rest: trim(ab[last], 2) }) + '</p>';
      setAr(Ar.toFixed(2));
      setBook(book.toFixed(2));
      var natural = list.every(function (i, n) { return Math.abs(i[2] - ab[n]) < 0.005; });
      var diff = Math.abs(Number(Ar.toFixed(2)) - book);
      setNote(!natural ? t('This is not the natural mixture, so the answer is not the data booklet value. A different mixture of isotopes gives a different relative atomic mass.') :
        selMass.value === 'A' ? (diff < 0.005 ?
          t('Natural mixture, using mass numbers as the masses. Here the answer is the same as the data booklet value.') :
          t('Natural mixture, using mass numbers as the masses. The answer is close to, but not the same as, the data booklet value, because the real mass of an isotope is not exactly a whole number.')) :
          diff < 0.005 ? t('Natural mixture. Your weighted mean matches the data booklet value.') :
            diff < 0.011 ? t('Natural mixture. Your weighted mean matches the data booklet value to within 0.01 (the masses here are rounded to 2 d.p.).') :
              t('Natural mixture. Close to the data booklet value.'));
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

    var selSample = w.select({ label: t('Sample'), value: 'Cl', options: ORDER.map(function (s) { return { value: s, label: ISOTOPES[s].name }; }).concat([{ value: '?', label: t('Mystery element') }]), onChange: pick });
    var selMode = w.select({ label: t('Peak heights show'), value: 'pct', options: [{ value: 'pct', label: t('Percentage abundance') }, { value: 'rel', label: t('Relative abundance (tallest peak = 100)') }], onChange: function () { rebuild(); } });

    var idAr = S1.util.uid('ctl'), idSym = S1.util.uid('ctl');
    var inAr = el('input', { class: 'input', id: idAr, type: 'text', inputmode: 'decimal', autocomplete: 'off' });
    var arWrap = el('div', { class: 'control spec-entry' }, [el('label', { class: 'control__label', for: idAr, html: t('Your <i>A</i><sub>r</sub> (2 d.p.)') }), el('div', { class: 'control__row' }, [inAr])]);
    w.controls.appendChild(arWrap);
    var btnCheck = w.button(t('Check'), checkAr, { primary: true });
    arWrap.querySelector('.control__row').appendChild(btnCheck);
    inAr.addEventListener('keydown', function (e) { if (e.key === 'Enter') checkAr(); });

    var inSym = el('input', { class: 'input', id: idSym, type: 'text', autocomplete: 'off', maxlength: 12 });
    var btnSym = el('button', { class: 'btn btn--small', type: 'button', text: t('Check element') });
    var symWrap = el('div', { class: 'control spec-entry' }, [el('label', { class: 'control__label', for: idSym, text: t('Mystery element (symbol or name)') }), el('div', { class: 'control__row' }, [inSym, btnSym])]);
    w.controls.appendChild(symWrap);
    btnSym.addEventListener('click', checkSym);
    inSym.addEventListener('keydown', function (e) { if (e.key === 'Enter') checkSym(); });

    var btnVals = w.button(t('Show peak heights'), function () { showVals = !showVals; sync(); cv.draw(); });
    var btnWork = w.button(t('Show the calculation'), function () { work.hidden = !work.hidden; sync(); });
    var btnNew = w.button(t('New mystery'), function () { pick('?'); });

    var cv = w.canvas({ height: 280, label: t('Mass spectrum: bar chart of relative abundance against m/z') });
    var fb = el('div', { class: 'feedback', role: 'status' });
    var work = el('div', { class: 'mix-work' }); work.hidden = true;
    w.stage.appendChild(fb); w.stage.appendChild(work);

    var setPeaks = w.readoutItem(t('Peaks'), { text: true });

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
      var isPct = Math.abs(T - 100) < 0.005;
      work.innerHTML =
        '<p class="mix-work__title">' + t('The calculation') + '</p>' +
        '<p class="small">' + (isPct ? t('These heights are percentages, so they add up to 100.') :
          t('These heights do <strong>not</strong> add up to 100, so divide by their total, not by 100.')) + '</p>' +
        mathLine(t('total of peak heights = {sum}', { sum: peaks.map(function (p) { return trim(p.h, 2); }).join(' + ') + ' = ' + trim(T, 2) })) +
        mathLine(AR + ' = ' + frac(top, trim(T, 2))) +
        mathLine(AR + ' = ' + frac(prods, trim(T, 2)) + ' = ' + frac(trim(sum, 2), trim(T, 2))) +
        mathLine(AR + ' = ' + trim(Ar, 5) + ' = <b>' + Ar.toFixed(2) + '</b> ' + t('(2 d.p., no units)'));
    }

    function sync() {
      symWrap.hidden = !mystery; btnNew.hidden = !mystery;
      btnVals.textContent = showVals ? t('Hide peak heights') : t('Show peak heights');
      btnVals.setAttribute('aria-pressed', showVals ? 'true' : 'false');
      btnWork.textContent = work.hidden ? t('Show the calculation') : t('Hide the calculation');
      setPeaks(showVals || !work.hidden ?
        peaks.map(function (p) { return '<span class="nowrap">' + MZ + ' ' + p.mz + ': ' + trim(p.h, 2) + (selMode.value === 'pct' ? '%' : '') + '</span>'; }).join(', ') :
        t('{n} peaks, at <i>m/z</i> {list}. Read each height from the chart, or press Show peak heights.',
          { n: peaks.length, list: peaks.map(function (p) { return p.mz; }).join(', ') }));
    }

    function say(kind, label, html) {
      fb.className = 'feedback' + (kind ? ' feedback--' + kind : '');
      fb.innerHTML = '<span class="feedback__label">' + label + '</span>' + html;
    }

    function checkAr() {
      var parsed = chem.parseNumber(inAr.value), Ar = calcAr(), book = chem.element(sym).ar;
      if (!parsed) { say('', t('Enter a number'), t('Type your relative atomic mass, for example 24.32.')); return; }
      var v = parsed.value, ok = Math.abs(v - Ar) <= 0.05;
      var isBook = Math.abs(v - book) < 0.005 && Math.abs(Number(Ar.toFixed(2)) - book) > 0.005;
      var vars = { Ar: Ar.toFixed(2), book: book.toFixed(2) };
      if (isBook && !mystery) {
        say('partial', t('That is the data booklet value'),
          t('The question is asking for the value <em>from this spectrum</em>. Here that is slightly different from {book}. In an exam the booklet value does not score when you are asked to calculate from the data.', vars));
      } else if (ok) {
        solved = true;
        say('right', t('Correct'), mystery ?
          t('From this spectrum <i>A</i><sub>r</sub> = {Ar}. Now find the element whose relative atomic mass in the periodic table is closest to this, and enter it above.', vars) :
          t('From this spectrum <i>A</i><sub>r</sub> = {Ar}. The data booklet gives {book}. The small difference is because the real mass of each isotope is not exactly a whole number.', vars));
      } else {
        var mzs = peaks.map(function (p) { return p.mz; }), simple = mzs.reduce(function (a, b) { return a + b; }, 0) / mzs.length;
        var lo = Math.min.apply(null, mzs), hi = Math.max.apply(null, mzs), by100 = peaks.reduce(function (a, p) { return a + p.mz * p.h; }, 0) / 100;
        var msg = v < lo || v > hi ?
          (Math.abs(v - by100) <= 0.06 && Math.abs(total() - 100) > 0.5 ? t('You divided by 100, but these peak heights do not add up to 100. Divide by the total of the heights.') :
            t('A weighted mean must lie between the lightest and heaviest isotope: between {lo} and {hi}.', { lo: lo, hi: hi })) :
          Math.abs(v - simple) < 0.011 ? t('That is the simple average of the <i>m/z</i> values. Each isotope has to be weighted by its abundance.') :
            t('Multiply each <i>m/z</i> by its peak height, add the results, then divide by the total of the peak heights. Check how you read each height.');
        say('wrong', t('Not yet'), msg);
      }
    }

    function checkSym() {
      if (!mystery) return;
      var typed = inSym.value.trim().toLowerCase(), e = chem.element(sym);
      if (!typed) { say('', t('Enter an element'), t('Type a symbol such as Mg, or a name.')); return; }
      if (typed === e.symbol.toLowerCase() || typed === e.name.toLowerCase() || typed === t(e.name).toLowerCase()) {
        say('right', t('Correct'), t('It is {name}. The data booklet gives <i>A</i><sub>r</sub> = {book}, and this spectrum gives {Ar}.',
          { name: t(e.name), book: e.ar.toFixed(2), Ar: calcAr().toFixed(2) }));
      } else {
        say('wrong', t('Not yet'), solved ?
          t('Look in the periodic table for the element whose relative atomic mass is closest to your value. Do not match the mass to the atomic number.') :
          t('Work out <i>A</i><sub>r</sub> first. Then look in the periodic table for the element whose relative atomic mass is closest to your value. Do not match the mass to the atomic number.'));
      }
    }

    cv.draw(function (ctx, W, H) {
      if (!peaks.length) return;
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
      for (var tick = lo; tick <= hi; tick++) {
        ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(X(tick), y0); ctx.lineTo(X(tick), y0 + 4); ctx.stroke();
        if (tick > lo && tick < hi) { ctx.fillStyle = ink2; ctx.fillText(String(tick), X(tick), y0 + 17); }
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
      ctx.font = font(w, 12.5, '--font-body'); ctx.fillText(selMode.value === 'pct' ? t('relative abundance / %') : t('relative abundance'), 0, 0); ctx.restore();
      ctx.font = font(w, 11.5, '--font-body'); ctx.fillStyle = ink3; ctx.textAlign = 'right';
      ctx.fillText(mystery ? t('mystery element') : ISOTOPES[sym].name, x1, 12);
    });

    rebuild();
  });
})();
