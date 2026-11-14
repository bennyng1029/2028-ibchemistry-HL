/* ==========================================================================
   Widgets for Lab 9 — Identifying the type of bonding from properties
   (Structure 2.1.3, 2.2.7, 2.2.9, 2.3.1, 2.4.1).
   lab-bonding-properties.bench   Test bench: six unknown solids (drawn at
        random from eight), seven tests, a results table, a distilled-water
        control, and a classification check (ionic, covalent molecular,
        covalent network, metallic).
   Conductivity circuit: 6.0 V d.c. supply, 100 Ω resistor and a digital
   milliammeter (reads to 0.1 mA) in series with two carbon electrodes. A
   good conductor gives about 60 mA (6.0 V / 100 Ω); a solution of a soluble
   ionic solid (0.5 g in 10 cm3 of water) about 20–25 mA; distilled water
   about 0.0–0.1 mA. Each reading has random scatter.
   Melting points (°C) for the reveal: NaCl 801, KI 681 (CRC Handbook);
   Cu 1085, Sn 231.9, C 3500 (sublimes) from the data booklet, section 8;
   SiO2 about 1710, paraffin wax about 50–60, sucrose about 186 (decomposes).
   Every visible string goes through t().
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  function gauss() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function font(w, px, bold, mono) { return (bold ? '700 ' : '') + px + 'px ' + (w.color(mono ? '--font-mono' : '--font-body') || 'sans-serif'); }

  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function types() {
    return { ionic: t('Ionic'), molecular: t('Covalent molecular'), network: t('Covalent network'), metallic: t('Metallic') };
  }

  /* The eight substances. Built inside the widget so that t() runs in the current language.
     ca: mean current with the solid shaken in water (null = only distilled water conducts); cs: solid; cm: melt. */
  function substances() {
    var brittle = { o: t('Brittle: the crystals shatter into smaller pieces.'), s: t('brittle') };
    var noMelt = { o: t('Does not melt, even when heated strongly in a Bunsen flame.'), s: t('does not melt'), melts: false };
    var dissolves = { o: t('Dissolves to give a colourless solution.'), s: t('dissolves') };
    var sinks = { o: t('Does not dissolve: the solid stays at the bottom.'), s: t('insoluble') };
    var malleable = { o: t('Malleable: it flattens into a thinner piece without breaking.'), s: t('malleable') };
    return [
      { id: 'nacl', name: t('sodium chloride'), formula: 'NaCl', type: 'ionic', mp: t('801 °C'), look: t('white cubic crystals'),
        hammer: brittle, heat: noMelt, water: dissolves, hexane: sinks, cs: 0, cm: null, ca: 24.5 },
      { id: 'ki', name: t('potassium iodide'), formula: 'KI', type: 'ionic', mp: t('681 °C'), look: t('white crystalline powder'),
        hammer: brittle, heat: noMelt, water: dissolves, hexane: sinks, cs: 0, cm: null, ca: 21.5 },
      { id: 'wax', name: t('paraffin wax'), formula: null, type: 'molecular', mp: t('about 55 °C'), look: t('white, waxy solid'),
        hammer: { o: t('Soft: it dents and squashes; it does not shatter.'), s: t('soft') },
        heat: { o: t('Melts in the hot-water bath, below 100 °C, to a clear liquid.'), s: t('melts below 100 °C'), melts: true },
        water: { o: t('Does not dissolve: the wax floats on the water.'), s: t('insoluble') },
        hexane: dissolves, cs: 0, cm: 0, ca: null },
      { id: 'sucrose', name: t('sucrose'), formula: 'C12H22O11', type: 'molecular', mp: t('about 186 °C, then decomposes'), look: t('white crystals'),
        hammer: { o: t('Brittle: the crystals crush to a powder.'), s: t('brittle') },
        heat: { o: t('Melts on gentle heating in the flame, then turns brown and chars.'), s: t('melts, then chars'), melts: true },
        water: dissolves, hexane: sinks, cs: 0, cm: 0, ca: null },
      { id: 'sio2', name: t('silicon dioxide (sand)'), formula: 'SiO2', type: 'network', mp: t('about 1710 °C'), look: t('colourless or white grains'),
        hammer: { o: t('Very hard: the grains do not break or flatten.'), s: t('very hard') },
        heat: noMelt, water: sinks, hexane: sinks, cs: 0, cm: null, ca: null },
      { id: 'graphite', name: t('graphite'), formula: 'C', type: 'network', mp: t('about 3500 °C (sublimes)'), look: t('grey-black solid with a shine; feels slippery'),
        hammer: { o: t('Soft: it flakes and leaves a grey mark on the paper.'), s: t('soft, flakes') },
        heat: { o: t('Does not melt; it glows red in the flame.'), s: t('does not melt'), melts: false },
        water: { o: t('Does not dissolve: the flakes float or sink.'), s: t('insoluble') }, hexane: sinks, cs: 58.4, cm: null, ca: null },
      { id: 'cu', name: t('copper'), formula: 'Cu', type: 'metallic', mp: t('1085 °C'), look: t('shiny, pinkish-brown metal foil'),
        hammer: malleable, heat: noMelt, water: sinks, hexane: sinks, cs: 59.8, cm: null, ca: null },
      { id: 'sn', name: t('tin'), formula: 'Sn', type: 'metallic', mp: t('232 °C'), look: t('shiny, silvery-grey metal granules'),
        hammer: malleable, heat: { o: t('Melts in a crucible in a hot Bunsen flame to a shiny liquid.'), s: t('melts in a flame'), melts: true },
        water: sinks, hexane: sinks, cs: 59.7, cm: 59.5, ca: null }
    ];
  }

  function tests() {
    return [
      { id: 'hammer', label: t('Tap with a hammer') },
      { id: 'heat', label: t('Heat: water bath, then Bunsen flame') },
      { id: 'water', label: t('Shake with water') },
      { id: 'hexane', label: t('Shake with hexane') },
      { id: 'cs', label: t('Conductivity of the solid') },
      { id: 'cm', label: t('Conductivity of the melt') },
      { id: 'ca', label: t('Conductivity after shaking with water') }
    ];
  }

  S1.widgets.register('lab-bonding-properties.bench', function (w) {
    var SUBS = substances(), TESTS = tests(), TYPES = types();
    var set = [], results = {}, control = [], current = 'A', test = 'hammer', last = null, checked = false, revealAll = false;

    var selU = w.select({ label: t('Unknown solid'), value: 'A', options: LETTERS.map(function (L) { return { value: L, label: t('Solid {L}', { L: L }) }; }), onChange: function (v) { current = v; last = null; update(); } });
    var selT = w.select({ label: t('Test'), value: test, options: TESTS.map(function (x) { return { value: x.id, label: x.label }; }), onChange: function (v) { test = v; last = null; update(); } });
    w.button(t('Do the test'), doTest, { primary: true });
    w.button(t('Test distilled water (control)'), function () { var I = waterReading(); control.push(I); last = { control: true, I: I }; update(); });
    w.button(t('New set of unknowns'), function () { newSet(); update(); });

    var setLook = w.readoutItem(t('Appearance'), { text: true });
    var setObs = w.readoutItem(t('Observation'), { text: true });

    var cv = w.canvas({ height: 190, label: t('Drawing of the chosen test on the chosen solid, with the ammeter reading for conductivity tests') });
    var tableBox = el('div', { class: 'table-scroll bp-table', tabindex: '0' });
    var ctrlLine = el('p', { class: 'bp-note' });
    var classBox = el('div', { class: 'bp-classify' });
    w.stage.appendChild(tableBox); w.stage.appendChild(ctrlLine); w.stage.appendChild(classBox);

    function newSet() {
      var pool = SUBS.slice();
      for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp; }
      set = pool.slice(0, 6); results = {}; control = []; last = null; checked = false; revealAll = false;
      LETTERS.forEach(function (L) { results[L] = {}; });
      buildClassify();
    }
    function sub(L) { return set[LETTERS.indexOf(L)]; }

    function waterReading() { return Math.max(0, Math.round((0.05 + gauss() * 0.04) * 10) / 10); }
    function current_(mean, rel) { return Math.max(0, Math.round((mean * (1 + gauss() * rel)) * 10) / 10); }

    function doTest() {
      var s = sub(current), r = results[current], res;
      if (test === 'hammer' || test === 'heat' || test === 'water' || test === 'hexane') {
        res = { o: s[test].o, s: s[test].s };
      } else {
        var I, note = '';
        if (test === 'cs') I = s.cs > 0 ? current_(s.cs, 0.004) : 0;
        else if (test === 'cm') {
          if (!s.heat.melts) { res = { o: t('Cannot be tested: the solid does not melt in a Bunsen flame.'), s: t('not tested') }; }
          else { I = s.cm > 0 ? current_(s.cm, 0.004) : 0; if (s.id === 'sn') note = t('(Teacher demonstration: molten tin in a crucible, carbon electrodes.)'); if (s.id === 'sucrose') note = t('(The melt soon chars, so the test is quick.)'); }
        } else I = s.ca ? current_(s.ca, 0.015) : waterReading();
        if (!res) {
          var vals = (r[test] && r[test].vals) || [];
          vals = vals.concat([I]);
          var big = I >= 1;
          res = { vals: vals, I: I, o: (big ? t('The ammeter reads {I} mA: a current flows.', { I: I.toFixed(1) }) : t('The ammeter reads {I} mA: no significant current.', { I: I.toFixed(1) })) + (note ? ' ' + note : ''),
            s: t('{list} mA', { list: vals.slice(-3).map(function (v) { return v.toFixed(1); }).join(', ') }) };
        }
      }
      r[test] = res; last = { L: current, test: test, res: res };
      update();
    }

    function update() {
      var s = sub(current);
      setLook(t('Solid {L}: {look}', { L: current, look: s.look }));
      if (last && last.control) setObs(t('Distilled water alone: the ammeter reads {I} mA.', { I: last.I.toFixed(1) }));
      else if (last && last.L === current && last.test === test) setObs(last.res.o);
      else setObs(t('Choose a test and press “Do the test”.'));
      table(); cv.draw();
      ctrlLine.innerHTML = control.length ? t('Control, distilled water alone: {list} mA.', { list: control.slice(-5).map(function (v) { return v.toFixed(1); }).join(', ') })
        : t('Control: test distilled water alone, so you know what “no current” reads on this ammeter.');
    }

    function table() {
      var h = '<table class="data"><caption>' + t('Results (conductivity: 6.0 V supply, ammeter ±0.1 mA)') + '</caption><thead><tr><th scope="col">' + t('Solid') + '</th>';
      var heads = [t('Hammer'), t('Heating'), t('Water'), t('Hexane'), t('Solid / mA'), t('Melt / mA'), t('With water / mA')];
      heads.forEach(function (x) { h += '<th scope="col">' + x + '</th>'; });
      h += '</tr></thead><tbody>';
      LETTERS.forEach(function (L) {
        var s = sub(L), show = revealAll || (checked && classOf(L) === s.type);
        h += '<tr' + (L === current ? ' class="bp-current"' : '') + '><th scope="row">' + L + (show ? '<span class="bp-id">' + s.name + '</span>' : '') + '</th>';
        TESTS.forEach(function (x) { var r = results[L][x.id]; h += '<td>' + (r ? r.s : '<span class="bp-empty">–</span>') + '</td>'; });
        h += '</tr>';
      });
      tableBox.innerHTML = h + '</tbody></table>';
    }

    /* Classification panel */
    var classSel = {}, fb;
    function classOf(L) { return classSel[L] ? classSel[L].value : ''; }
    function buildClassify() {
      classBox.innerHTML = ''; classSel = {};
      classBox.appendChild(el('h5', { class: 'bp-classify__title', text: t('Classify each solid') }));
      var grid = el('div', { class: 'bp-classify__grid' });
      LETTERS.forEach(function (L) {
        var id = S1.util.uid('bp');
        var s = el('select', { class: 'select', id: id });
        s.appendChild(el('option', { value: '', text: t('Choose…') }));
        Object.keys(TYPES).forEach(function (k) { s.appendChild(el('option', { value: k, text: TYPES[k] })); });
        s.addEventListener('change', function () { checked = false; fb.innerHTML = ''; fb.className = 'feedback'; table(); });
        classSel[L] = s;
        grid.appendChild(el('div', { class: 'control' }, [el('label', { class: 'control__label', for: id, text: t('Solid {L}', { L: L }) }), s]));
      });
      classBox.appendChild(grid);
      var row = el('div', { class: 'bp-classify__buttons' });
      var check = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Check my classification') });
      var show = el('button', { class: 'btn btn--small', type: 'button', text: t('Show the answers') });
      check.addEventListener('click', checkAll); show.addEventListener('click', function () { revealAll = true; checkAll(); });
      row.appendChild(check); row.appendChild(show); classBox.appendChild(row);
      fb = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
      classBox.appendChild(fb);
    }

    function why(s) {
      if (s.id === 'graphite') return t('It conducts as a solid, like a metal, but it is not malleable, does not melt in a flame and is a non-metal: a covalent network of layers, with delocalized electrons that move along each layer.');
      if (s.type === 'ionic') return t('It conducts only after it dissolves (or melts), never as a solid: its ions are fixed in the lattice but free to move once it breaks up. High melting point, brittle, soluble in water but not in hexane.');
      if (s.type === 'molecular') return t('It melts easily and never conducts, even when melted or mixed with water: weak forces between molecules and no charged particles that can move.');
      if (s.type === 'network') return t('It does not melt in a flame, does not dissolve in either solvent and does not conduct: a giant structure held by strong covalent bonds.');
      return t('It conducts as a solid and as a liquid, and it is malleable: delocalized electrons and layers of cations that can slide.');
    }

    function checkAll() {
      checked = true;
      var right = 0, done = 0, lines = [];
      LETTERS.forEach(function (L) {
        var s = sub(L), v = classOf(L), tested = Object.keys(results[L]).length;
        if (!v && !revealAll) return;
        done++;
        if (v === s.type) { right++; lines.push('<li>' + t('{L}: right. {type}: {name}.', { L: L, type: TYPES[s.type], name: s.name }) + ' ' + t('Melting point {mp}.', { mp: s.mp }) + '</li>'); }
        else if (revealAll) lines.push('<li>' + t('{L}: {type}: {name}.', { L: L, type: TYPES[s.type], name: s.name }) + ' ' + why(s) + '</li>');
        else lines.push('<li>' + t('{L}: not right yet.', { L: L }) + ' ' + (tested < 3 ? t('Do more tests on it first.') : hint(s, v)) + '</li>');
      });
      if (!done) { fb.className = 'feedback feedback--partial'; fb.innerHTML = '<span class="feedback__label">' + t('Nothing to check') + '</span><p>' + t('Choose a type for at least one solid.') + '</p>'; table(); return; }
      fb.className = 'feedback ' + (right === done && done === 6 ? 'feedback--right' : right ? 'feedback--partial' : 'feedback--wrong');
      fb.innerHTML = '<span class="feedback__label">' + t('{right} of {n} right', { right: right, n: done }) + '</span><ul>' + lines.join('') + '</ul>';
      table();
    }

    function hint(s, v) {
      if (s.id === 'graphite' && v === 'metallic') return t('Look at the hammer test. A metal would flatten.');
      if (v === 'ionic') return t('An ionic solid does not conduct as a solid, but its mixture with water conducts clearly more than the control. Does this solid fit that pattern?');
      if (v === 'metallic') return t('A metal conducts as a solid and flattens when hammered. Does this solid do both?');
      if (v === 'network') return t('A covalent network does not melt in a flame, does not dissolve and does not conduct (except graphite). Is it brittle or does it flatten?');
      return t('A covalent molecular solid melts easily and never conducts. Did this one melt below a few hundred degrees?');
    }

    /* Drawing of the current test */
    cv.draw(function (ctx, W, H) {
      if (!set.length) return;
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), surf = w.color('--surface'), surf2 = w.color('--surface-2'), soft = w.color('--accent-soft'), accent = w.color('--accent');
      var s = sub(current), r = results[current][test], done = !!r && last && last.L === current && last.test === test;
      var cx = Math.min(W / 2, 170);
      ctx.lineWidth = 1.5; ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      var base = H - 26;
      ctx.beginPath(); ctx.moveTo(8, base + 0.5); ctx.lineTo(W - 8, base + 0.5); ctx.stroke();
      function solidLump(x, y, wdt, hgt) {
        ctx.fillStyle = s.type === 'metallic' || s.id === 'graphite' ? ink3 : surf2; ctx.fillRect(x, y, wdt, hgt); ctx.strokeStyle = ink; ctx.strokeRect(x + 0.5, y + 0.5, wdt, hgt);
      }
      function caption(text) { ctx.fillStyle = ink2; ctx.font = font(w, 12); ctx.textAlign = 'center'; ctx.fillText(text, W / 2, H - 10); }
      if (last && last.control) {
        beaker(cx, base, false); ammeter(cx + 70, 40, last.I);
        caption(t('distilled water only')); return;
      }
      if (test === 'hammer') {
        ctx.fillStyle = surf2; ctx.fillRect(cx - 60, base - 10, 120, 10); ctx.strokeStyle = ink; ctx.strokeRect(cx - 60, base - 10, 120, 10);
        var flat = done && s.hammer.s === t('malleable'), shat = done && s.hammer.s === t('brittle');
        if (flat) solidLump(cx - 36, base - 16, 72, 6);
        else if (shat) { for (var i = 0; i < 6; i++) solidLump(cx - 40 + i * 14, base - 18 + (i % 2) * 3, 8, 8); }
        else solidLump(cx - 14, base - 34, 28, 24);
        ctx.fillStyle = ink2; ctx.fillRect(cx + 4, 30, 8, 60); ctx.fillStyle = ink; ctx.fillRect(cx - 18, 20, 52, 16);
        caption(done ? r.s : t('sample on a tile, wrapped in paper'));
      } else if (test === 'heat') {
        ctx.fillStyle = surf2; ctx.fillRect(cx - 9, base - 50, 18, 50); ctx.strokeStyle = ink; ctx.strokeRect(cx - 9, base - 50, 18, 50);
        ctx.beginPath(); ctx.moveTo(cx - 7, base - 52); ctx.quadraticCurveTo(cx, base - 92, cx + 7, base - 52); ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.stroke(); ctx.lineWidth = 1.5;
        ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(cx - 24, base - 100); ctx.lineTo(cx - 18, base - 120); ctx.lineTo(cx + 18, base - 120); ctx.lineTo(cx + 24, base - 100); ctx.closePath(); ctx.stroke();
        var melted = done && s.heat.melts;
        if (melted) { ctx.fillStyle = soft; ctx.fillRect(cx - 21, base - 108, 42, 7); }
        else solidLump(cx - 10, base - 112, 20, 10);
        caption(done ? r.s : t('crucible over a Bunsen burner'));
      } else if (test === 'water' || test === 'hexane') {
        var tx = cx - 14, top = 26, bot = base - 18;
        ctx.fillStyle = soft; ctx.fillRect(tx, top + 40, 28, bot - top - 40);
        var dis = done && r.s === t('dissolves');
        if (done && !dis) { if (s.id === 'wax' && test === 'water') solidLump(tx + 6, top + 42, 16, 8); else solidLump(tx + 4, bot - 10, 20, 9); }
        else if (!done) solidLump(tx + 4, bot - 10, 20, 9);
        ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(tx, top); ctx.lineTo(tx, bot); ctx.arc(cx, bot, 14, Math.PI, 0, true); ctx.lineTo(tx + 28, top); ctx.stroke();
        ctx.fillStyle = ink2; ctx.font = font(w, 12); ctx.textAlign = 'left'; ctx.fillText(test === 'water' ? t('water') : t('hexane'), tx + 40, top + 50);
        caption(done ? r.s : t('a spatula of solid in 5 cm³ of liquid'));
      } else {
        var Ival = done && r.I != null ? r.I : null;
        if (test === 'cs') solidLump(cx - 34, base - 22, 68, 22);
        else if (test === 'cm') { ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(cx - 34, base - 40); ctx.lineTo(cx - 26, base); ctx.lineTo(cx + 26, base); ctx.lineTo(cx + 34, base - 40); ctx.stroke(); if (done && s.heat.melts) { ctx.fillStyle = soft; ctx.fillRect(cx - 29, base - 22, 58, 21); } else solidLump(cx - 18, base - 14, 36, 13); }
        else beaker(cx, base, !!s.ca);
        // electrodes and wires
        ctx.fillStyle = ink2; ctx.fillRect(cx - 16, base - 70, 5, 52); ctx.fillRect(cx + 11, base - 70, 5, 52);
        ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(cx - 13, base - 70); ctx.lineTo(cx - 13, 18); ctx.lineTo(cx + 50, 18); ctx.moveTo(cx + 13, base - 70); ctx.lineTo(cx + 13, 52); ctx.lineTo(cx + 50, 52); ctx.stroke();
        ctx.font = font(w, 11); ctx.fillStyle = ink2; ctx.textAlign = 'left'; ctx.fillText(t('6.0 V, 100 Ω'), Math.max(4, cx - 90), 12);
        ammeter(cx + 70, 35, Ival);
        caption(test === 'cm' && done && !s.heat.melts ? t('does not melt: cannot be tested') : done ? r.s : t('carbon electrodes, 6.0 V d.c.'));
      }
      function beaker(x, y, ions) {
        ctx.fillStyle = soft; ctx.fillRect(x - 40, y - 46, 80, 46);
        ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(x - 40, y - 64); ctx.lineTo(x - 40, y); ctx.lineTo(x + 40, y); ctx.lineTo(x + 40, y - 64); ctx.stroke();
      }
      function ammeter(x, y, I) {
        ctx.fillStyle = surf; ctx.strokeStyle = ink; ctx.fillRect(x - 22, y - 18, 64, 36); ctx.strokeRect(x - 22 + 0.5, y - 18 + 0.5, 64, 36);
        ctx.fillStyle = ink; ctx.font = font(w, 15, true, true); ctx.textAlign = 'center';
        ctx.fillText(I == null ? '–––' : I.toFixed(1), x + 10, y - 2);
        ctx.font = font(w, 10); ctx.fillStyle = ink3; ctx.fillText(t('mA'), x + 10, y + 12);
      }
    });

    newSet();
    update();
  });
})();
