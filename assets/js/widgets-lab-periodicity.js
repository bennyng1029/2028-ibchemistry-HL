/* ==========================================================================
   Widgets for Lab 10 — Periodic trends in the laboratory.
   lab-periodicity.halogens  four test tubes (KCl, KBr, KI, water control) + chlorine water, bromine
                             water or iodine solution, then cyclohexane; ranks the halogens
   lab-periodicity.group1    timed teacher demonstration: Li, Na, K with water; repeat runs, mean ± half range
   lab-periodicity.oxides    oxides with water: universal indicator or pH meter, classify, then the equation
   Colours of solutions and of universal indicator are drawn as real colours, because the colour is
   what is being observed; every colour is also named in text. Timings and pH values carry random
   scatter, so every run differs a little, like real data.
   Every user-visible string goes through t("English text", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, el = S1.util.el, chem = S1.chem;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  function f(s) { return chem.formula(s); }

  /* ---------- Shared helpers ---------------------------------------------------- */
  function rand(a, b) { return a + Math.random() * (b - a); }
  function fonts(w) {
    var mono = w.color('--font-mono') || 'monospace', body = w.color('--font-body') || 'sans-serif';
    return {
      mono: function (px, bold) { return (bold ? '600 ' : '') + px + 'px ' + mono; },
      body: function (px, bold) { return (bold ? '700 ' : '') + px + 'px ' + body; }
    };
  }
  function stateOf(w, make) { if (!w.el._lptState) w.el._lptState = make(); return w.el._lptState; }
  function p(html) { return '<p>' + html + '</p>'; }
  function msgBox(parent) {
    var box = el('div', { class: 'lpt-msg', role: 'status' });
    box.hidden = true;
    parent.appendChild(box);
    return {
      el: box,
      show: function (tone, html) { box.setAttribute('data-tone', tone); box.innerHTML = html; box.hidden = false; },
      hide: function () { box.hidden = true; box.innerHTML = ''; }
    };
  }
  function resultsTable(w, caption) {
    var wrap = el('div', { class: 'lpt-results', 'aria-live': 'off' });
    w.readout.appendChild(wrap);
    return function (cols, rows, empty) {
      if (!rows.length) { wrap.innerHTML = '<p class="lpt-results__title">' + caption + '</p><p class="muted">' + empty + '</p>'; return; }
      var h = '<p class="lpt-results__title">' + caption + '</p><div class="table-scroll" tabindex="0"><table class="data"><thead><tr>';
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
  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
  /** Draw a test tube (outline from tokens) with up to two liquid layers. layers: [{rgb, a, frac}] from the bottom. */
  function tube(ctx, x, y, wd, ht, layers, outline, empty) {
    var r = wd / 2, fill = 0.62 * ht, bottom = y + ht;
    var level = bottom;
    ctx.save();
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, bottom - r); ctx.arc(x + r, bottom - r, r, Math.PI, 0, true); ctx.lineTo(x + wd, y); ctx.closePath(); ctx.clip();
    layers.forEach(function (L) {
      var hgt = fill * L.frac;
      ctx.fillStyle = L.a > 0.02 ? rgba(L.rgb, L.a) : empty;
      ctx.fillRect(x, level - hgt, wd, hgt);
      level -= hgt;
      ctx.strokeStyle = outline; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, level); ctx.lineTo(x + wd, level); ctx.stroke();
    });
    ctx.restore();
    ctx.strokeStyle = outline; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, bottom - r); ctx.arc(x + r, bottom - r, r, Math.PI, 0, true); ctx.lineTo(x + wd, y); ctx.stroke();
  }

  /* ==========================================================================
     1. Halogens and halide ions
     ========================================================================== */
  var HALS = ['Cl', 'Br', 'I'];               // index = position in group 17 (lower index = more reactive)
  var TUBES = ['KCl', 'KBr', 'KI', 'water'];
  /* Real colours of each halogen: in water (dilute) and in cyclohexane. */
  var AQ = { Cl: [196, 226, 140], Br: [230, 140, 20], I: [128, 64, 18] };
  var ORG = { Cl: [210, 235, 170], Br: [232, 110, 20], I: [140, 40, 160] };
  var AQ_A = { Cl: 0.18, Br: 0.62, I: 0.78 }, ORG_A = { Cl: 0.12, Br: 0.85, I: 0.85 };

  S1.widgets.register('lab-periodicity.halogens', function (w) {
    var st = stateOf(w, function () { return { hal: 'Cl', age: 'fresh', stage: 0, res: {}, k: rand(0.85, 1.1), order: {} }; });
    function halName(h) { return ({ Cl: t('chlorine water'), Br: t('bromine water'), I: t('iodine solution') })[h]; }
    function halElement(h) { return ({ Cl: t('chlorine'), Br: t('bromine'), I: t('iodine') })[h]; }
    function tubeName(k) { return ({ KCl: t('potassium chloride'), KBr: t('potassium bromide'), KI: t('potassium iodide'), water: t('water (control)') })[k]; }
    function tubeShort(k) { return k === 'water' ? t('water') : k; }
    /* Words for a colour. strength: 1 normal, 'pale', 'very pale'. */
    function aqWord(h, s) {
      if (h === 'Cl') return s === 1 ? t('very pale green') : t('colourless');
      if (h === 'Br') return s === 1 ? t('yellow-orange') : s === 'pale' ? t('pale yellow') : t('very pale yellow');
      return s === 1 ? t('brown') : s === 'pale' ? t('pale yellow-brown') : t('very pale yellow-brown');
    }
    function orgWord(h, s) {
      if (h === 'Cl') return t('colourless');
      if (h === 'Br') return s === 1 ? t('orange') : t('pale orange');
      return s === 1 ? t('violet (purple)') : t('pale violet');
    }
    /** What is in the tube after the halogen solution is added: which halogen colours it, and how strongly. */
    function outcome(h, tb) {
      var ion = tb === 'water' ? null : tb.slice(1);           // 'Cl', 'Br', 'I'
      var reacts = ion && HALS.indexOf(h) < HALS.indexOf(ion);
      var weak = h === 'Cl' && st.age === 'old';
      return { colourOf: reacts ? ion : h, strength: weak ? (reacts && ion === 'I' ? 'pale' : 'very pale') : 1, reacts: !!reacts };
    }
    function observe(h, tb, shaken) {
      var o = outcome(h, tb);
      if (!shaken) return { aq: aqWord(o.colourOf, o.strength) };
      return { aq: o.colourOf === 'Cl' ? t('colourless') : aqWord(o.colourOf, o.strength === 1 ? 'pale' : 'very pale'), org: orgWord(o.colourOf, o.strength) };
    }

    w.select({ label: t('Halogen solution'), options: HALS.map(function (h) { return { value: h, label: halName(h) }; }), value: st.hal, onChange: function (v) { st.hal = v; st.stage = 0; msg.hide(); update(); } });
    w.select({ label: t('Chlorine water used'), options: [{ value: 'fresh', label: t('freshly made') }, { value: 'old', label: t('two weeks old, left open') }], value: st.age, onChange: function (v) { st.age = v; st.stage = 0; update(); } });
    w.button(t('Add 10 drops to each tube'), function () { st.stage = 1; record(); update(); }, { primary: true });
    w.button(t('Add cyclohexane and shake'), function () {
      if (!st.stage) { msg.show('warn', p(t('Add the halogen solution first.'))); return; }
      st.stage = 2; record(); update();
    });
    w.button(t('Empty and rinse the tubes'), function () { st.stage = 0; msg.hide(); update(); });

    var cv = w.canvas({ height: 210, label: t('A rack of four test tubes: potassium chloride, potassium bromide, potassium iodide and water as a control. The colour of each layer is named in the readout below.') });
    cv.draw(function (ctx, W, H) {
      var F = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), outline = w.color('--ink-2'), empty = w.color('--surface-2');
      var slot = W / 4, tw = Math.min(40, slot * 0.42), th = 140, y0 = 26;
      TUBES.forEach(function (tb, i) {
        var x = i * slot + (slot - tw) / 2, layers = [];
        if (st.stage >= 1) {
          var o = outcome(st.hal, tb), k = o.strength === 1 ? st.k : o.strength === 'pale' ? 0.45 : 0.22;
          if (st.stage === 1) layers.push({ rgb: AQ[o.colourOf], a: Math.min(0.95, AQ_A[o.colourOf] * k), frac: 0.8 });
          else {
            layers.push({ rgb: AQ[o.colourOf], a: o.colourOf === 'Cl' ? 0 : Math.min(0.9, AQ_A[o.colourOf] * k * 0.35), frac: 0.8 });
            layers.push({ rgb: ORG[o.colourOf], a: Math.min(0.95, ORG_A[o.colourOf] * k), frac: 0.38 });
          }
        } else layers.push({ rgb: [255, 255, 255], a: 0, frac: 0.8 });
        tube(ctx, x, y0, tw, th, layers, outline, empty);
        ctx.fillStyle = ink2; ctx.font = F.mono(11); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
        ctx.fillText(String(i + 1), x + tw / 2, 16);
        ctx.fillStyle = ink; ctx.font = F.mono(12, true);
        ctx.fillText(tubeShort(tb), x + tw / 2, y0 + th + 20);
      });
      if (st.stage === 2) {
        ctx.fillStyle = ink2; ctx.font = F.body(11); ctx.textAlign = 'right';
        ctx.fillText(t('top: cyclohexane'), W - 2, H - 2);
      }
    });

    var setTubes = TUBES.map(function (tb, i) { return w.readoutItem(t('Tube {n}: {name}', { n: i + 1, name: tubeName(tb) }), { text: true }); });
    var msg = msgBox(w.stage);
    w.stage.appendChild(el('p', { class: 'lpt-q', html: t('When you have tested all three halogens: put them in order of reactivity.') }));
    var row = el('div', { class: 'btn-row' }), sels = [];
    w.stage.appendChild(row);
    [t('most reactive'), t('middle'), t('least reactive')].forEach(function (lab, i) {
      var id = S1.util.uid('lpt'), s = el('select', { class: 'select', id: id });
      s.appendChild(el('option', { value: '', html: t('choose') }));
      HALS.forEach(function (h) { s.appendChild(el('option', { value: h, html: halElement(h) })); });
      s.value = st.order[i] || '';
      s.addEventListener('change', function () { st.order[i] = s.value; });
      sels.push(s);
      row.appendChild(el('div', { class: 'control', style: 'flex:0 1 auto' }, [el('label', { class: 'control__label', for: id, html: lab }), s]));
    });
    var chk = el('button', { class: 'btn btn--small btn--primary', type: 'button', html: t('Check the order') });
    row.appendChild(chk);
    var orderMsg = msgBox(w.stage);
    chk.addEventListener('click', function () {
      var got = sels.map(function (s) { return s.value; });
      var done = HALS.every(function (h) { return st.res[h + '-KCl'] && st.res[h + '-KCl'].org; });
      if (got.some(function (g) { return !g; })) { orderMsg.show('warn', p(t('Choose a halogen for each place first.'))); return; }
      var ok = got.join() === 'Cl,Br,I';
      var html = p(ok ? t('Correct: chlorine, then bromine, then iodine. Reactivity decreases down group 17.') : t('Not quite. Look at which halogens changed the colour of which halide solutions.')) +
        p(t('Chlorine displaced bromide and iodide ions. Bromine displaced iodide ions only. Iodine displaced neither.'));
      if (!done) html += p(t('Tip: run all three halogens with cyclohexane so that your table is complete.'));
      orderMsg.show(ok ? 'ok' : 'bad', html);
    });
    var drawTable = resultsTable(w, t('Results table (copy it into your notebook)'));

    function record() {
      var key = st.hal + (st.hal === 'Cl' && st.age === 'old' ? '*' : '');
      TUBES.forEach(function (tb) {
        var o = observe(st.hal, tb, st.stage === 2), k = key + '-' + tb, r = st.res[k] || (st.res[k] = { h: st.hal, old: key !== st.hal, tb: tb });
        if (st.stage === 1) r.aq = o.aq;
        else r.org = o.org;
      });
    }
    function update() {
      TUBES.forEach(function (tb, i) {
        if (!st.stage) { setTubes[i](t('empty: 2 cm³ of solution, no halogen added yet')); return; }
        var o = observe(st.hal, tb, st.stage === 2);
        setTubes[i](st.stage === 1 ? t('water layer {aq}', { aq: o.aq }) : t('top (cyclohexane) layer {org}; bottom (water) layer {aq}', { org: o.org, aq: o.aq }));
      });
      var rows = [];
      Object.keys(st.res).forEach(function (k) {
        var r = st.res[k];
        rows.push([f(r.h + '2') + (r.old ? ' ' + t('(old)') : ''), tubeShort(r.tb), r.aq || '—', r.org || t('not tested')]);
      });
      drawTable([{ label: t('Added') }, { label: t('To') }, { label: t('Water layer') }, { label: t('Cyclohexane layer') }], rows, t('No results yet. Add a halogen solution to the tubes.'));
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     2. Group 1 metals with water (timed)
     ========================================================================== */
  var METALS = ['Li', 'Na', 'K'];
  var BASE_T = { Li: 55, Na: 13.5, K: 4.2 };     // s for a 3 mm cube, room temperature

  S1.widgets.register('lab-periodicity.group1', function (w) {
    var st = stateOf(w, function () { return { metal: 'Li', runs: [] }; });
    var run = null;
    function metalName(m) { return ({ Li: t('lithium'), Na: t('sodium'), K: t('potassium') })[m]; }
    function observations(m, fire) {
      if (m === 'Li') return [t('Floats on the water.'), t('Fizzes steadily: bubbles of hydrogen.'), t('Moves slowly and does not melt.'), t('Gets smaller until it is gone.'), t('The indicator turns from green to purple around it: an alkaline solution forms.')];
      if (m === 'Na') return [t('Floats on the water.'), t('Melts into a shiny ball: the reaction releases enough heat to melt it.'), t('Fizzes quickly and darts about on the surface.'), fire ? t('This time the hydrogen caught fire with a yellow-orange flame.') : t('Gets smaller until it is gone.'), t('The indicator turns from green to purple: an alkaline solution forms.')];
      return [t('Floats and melts into a ball at once.'), t('Fizzes violently and moves very fast.'), t('The hydrogen catches fire at once with a lilac flame.'), t('Ends with a small crack as the last of the metal spits.'), t('The indicator turns from green to purple: an alkaline solution forms.')];
    }

    w.select({ label: t('Metal'), options: METALS.map(function (m) { return { value: m, label: metalName(m) }; }), value: st.metal, onChange: function (v) { st.metal = v; if (!run) update(); } });
    var dropBtn = w.button(t('Drop in a piece and time it'), drop, { primary: true });
    w.button(t('Clear results'), function () { stop(); st.runs = []; st.last = null; update(); });

    var cv = w.canvas({ height: 180, label: t('Side view of a glass trough of water with universal indicator. A small piece of metal floats on the surface. The observations and the stopwatch time are given in the readout.') });
    cv.draw(function (ctx, W, H) {
      var F = fonts(w), ink = w.color('--ink'), outline = w.color('--ink-2'), metal = w.color('--line-strong'), ink3 = w.color('--ink-3');
      var x0 = 10, x1 = W - 10, top = 40, surf = 70, bottom = H - 30;
      // water with indicator: green, turning purple as hydroxide forms
      var prog = run ? run.prog : (st.last ? 1 : 0);
      ctx.fillStyle = 'rgba(70,170,80,0.32)'; ctx.fillRect(x0, surf, x1 - x0, bottom - surf);
      if (prog > 0) {
        var px = run ? run.x : (st.last ? st.last.x : 0);
        var spread = 30 + prog * (x1 - x0) * 0.35;
        var g = ctx.createRadialGradient(px, surf + 4, 4, px, surf + 4, spread);
        g.addColorStop(0, 'rgba(110,40,150,' + (0.25 + 0.4 * prog) + ')'); g.addColorStop(1, 'rgba(110,40,150,0)');
        ctx.fillStyle = g; ctx.fillRect(x0, surf, x1 - x0, bottom - surf);
      }
      ctx.strokeStyle = outline; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x0, top); ctx.lineTo(x0, bottom); ctx.lineTo(x1, bottom); ctx.lineTo(x1, top); ctx.stroke();
      ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, surf); ctx.lineTo(x1, surf); ctx.stroke();
      if (run) {
        var size = 10 * (1 - run.prog) + 1, m = run.m;
        // bubbles
        ctx.strokeStyle = ink3; ctx.lineWidth = 1;
        for (var b = 0; b < (m === 'Li' ? 4 : 8); b++) {
          var bx = run.x + (Math.sin(run.t * 7 + b * 2.1) * 12), by = surf + 6 + ((run.t * 40 + b * 9) % 18);
          ctx.beginPath(); ctx.arc(bx, by, 2, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.fillStyle = metal;
        if (m === 'Li') ctx.fillRect(run.x - size / 2, surf - size * 0.6, size, size * 0.6);
        else { ctx.beginPath(); ctx.arc(run.x, surf - size * 0.4, size * 0.55, 0, Math.PI * 2); ctx.fill(); }
        if (m === 'K' || (m === 'Na' && run.fire && run.prog > 0.5)) {
          ctx.fillStyle = m === 'K' ? 'rgba(190,140,235,0.85)' : 'rgba(255,170,0,0.85)';
          ctx.beginPath(); ctx.moveTo(run.x - 7, surf - 6); ctx.quadraticCurveTo(run.x, surf - 40, run.x + 7, surf - 6); ctx.closePath(); ctx.fill();
        }
      }
      ctx.fillStyle = ink; ctx.font = F.mono(16, true); ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      var shown = run ? run.t : (st.last ? st.last.time : 0);
      ctx.fillText(t('stopwatch {s} s', { s: shown.toFixed(2) }), x0, 22);
      if (run && run.speed > 1) { ctx.font = F.body(11); ctx.fillStyle = ink3; ctx.textAlign = 'right'; ctx.fillText(t('shown {k} times faster', { k: Math.round(run.speed) }), x1, 22); }
    });

    var setStatus = w.readoutItem(t('Run'), { text: true });
    var obsBox = el('ul', { class: 'lpt-obs' });
    var obsWrap = el('div', { class: 'widget__readout-item', style: 'flex:1 1 100%' }, [el('span', { class: 'widget__readout-label', html: t('Observations') }), obsBox]);
    w.readout.appendChild(obsWrap);
    var setMeans = w.readoutItem(t('Mean time ± half the range'), { text: true });
    var drawTable = resultsTable(w, t('Results table (piece size ±0.5 mm; copy it into your notebook)'));
    var loop = w.loop(function (dt) {
      if (!run) return;
      run.t = Math.min(run.time, run.t + dt * run.speed);
      run.prog = run.t / run.time;
      run.x += run.vx * dt * 60; if (run.x < 30 || run.x > cv.width - 30) run.vx = -run.vx;
      if (run.t >= run.time) finish(); else cv.draw();
    });

    function drop() {
      if (run) return;
      var m = st.metal, size = rand(2.6, 3.4);
      var time = BASE_T[m] * (size / 3) * rand(0.93, 1.07);
      run = { m: m, size: Math.round(size * 2) / 2, time: Math.round(time * 10) / 10, t: 0, prog: 0, x: cv.width / 2, vx: m === 'Li' ? 0.3 : m === 'Na' ? 1.6 : 2.6, fire: m === 'Na' && Math.random() < 0.25 };
      run.speed = Math.max(1, run.time / 3);
      dropBtn.disabled = true;
      setStatus(t('{m}: piece dropped in, stopwatch running.', { m: metalName(m) }));
      showObs(m, run.fire);
      if (w.reducedMotion) { run.t = run.time; finish(); } else loop.start(true);
    }
    function stop() { loop.stop(); run = null; dropBtn.disabled = false; }
    function finish() {
      var r = run;
      st.runs.push({ m: r.m, size: r.size, time: r.time });
      st.last = { time: r.time, x: r.x, m: r.m, fire: r.fire };
      stop();
      update();
      setStatus(t('{m}: the piece has gone after {s} s.', { m: metalName(r.m), s: r.time.toFixed(1) }));
    }
    function showObs(m, fire) { obsBox.innerHTML = observations(m, fire).map(function (o) { return '<li>' + o + '</li>'; }).join(''); }
    function update() {
      if (!run) {
        setStatus(st.last ? t('{m}: the piece has gone after {s} s.', { m: metalName(st.last.m), s: st.last.time.toFixed(1) }) : t('Ready. Choose a metal and drop in a piece.'));
        if (st.last) showObs(st.last.m, st.last.fire); else obsBox.innerHTML = '<li>' + t('Nothing yet.') + '</li>';
      }
      var parts = [];
      METALS.forEach(function (m) {
        var ts = st.runs.filter(function (r) { return r.m === m; }).map(function (r) { return r.time; });
        if (!ts.length) return;
        var mean = ts.reduce(function (a, b) { return a + b; }, 0) / ts.length;
        if (ts.length < 2) { parts.push(t('{m}: {mean} s (one run: repeat it)', { m: metalName(m), mean: mean.toFixed(1) })); return; }
        var half = (Math.max.apply(null, ts) - Math.min.apply(null, ts)) / 2;
        parts.push(t('{m}: {mean} ± {u} s from {n} runs ({pc} %)', { m: metalName(m), mean: mean.toFixed(1), u: half.toFixed(1), n: ts.length, pc: (100 * half / mean).toFixed(1) }));
      });
      setMeans(parts.length ? parts.join('<br>') : t('No runs yet.'));
      drawTable([{ label: t('Run'), num: true }, { label: t('Metal') }, { label: t('Size / mm'), num: true }, { label: t('Time / s'), num: true }],
        st.runs.map(function (r, i) { return [String(i + 1), metalName(r.m), r.size.toFixed(1), r.time.toFixed(1)]; }),
        t('No runs yet.'));
      cv.draw();
    }
    update();
  });

  /* ==========================================================================
     3. Oxides with water
     ========================================================================== */
  var OXIDES = ['water', 'Na2O', 'MgO', 'CaO', 'Al2O3', 'SiO2', 'P4O10', 'CO2', 'SO2'];
  var PH = { water: 5.8, Na2O: 13.2, MgO: 10.1, CaO: 12.3, Al2O3: 5.8, SiO2: 5.8, P4O10: 1.8, CO2: 4.0, SO2: 2.4 };
  var CHAR = { Na2O: 'basic', MgO: 'basic', CaO: 'basic', Al2O3: 'none', SiO2: 'none', P4O10: 'acidic', CO2: 'acidic', SO2: 'acidic' };
  var EQ = { Na2O: 'Na2O(s) + H2O(l) -> 2NaOH(aq)', MgO: 'MgO(s) + H2O(l) -> Mg(OH)2(aq)', CaO: 'CaO(s) + H2O(l) -> Ca(OH)2(aq)',
    P4O10: 'P4O10(s) + 6H2O(l) -> 4H3PO4(aq)', CO2: 'CO2(g) + H2O(l) <=> H2CO3(aq)', SO2: 'SO2(g) + H2O(l) <=> H2SO3(aq)' };
  var REQUIRED = { Na2O: true, MgO: true, CaO: true, CO2: true, SO2: true };
  /* Universal indicator: [upper pH limit, colour key, rgb]. */
  var UI = [[3, 'red', [215, 40, 40]], [5, 'orange', [240, 140, 30]], [5.5, 'yellow', [235, 210, 40]], [6.5, 'yellow-green', [170, 200, 50]], [7.5, 'green', [60, 165, 70]],
    [8.5, 'blue-green', [40, 150, 140]], [10.5, 'blue', [40, 90, 200]], [15, 'purple', [110, 40, 150]]];
  function uiBand(ph) { for (var i = 0; i < UI.length; i++) if (ph < UI[i][0]) return UI[i]; return UI[UI.length - 1]; }

  S1.widgets.register('lab-periodicity.oxides', function (w) {
    var st = stateOf(w, function () { return { ox: 'water', how: 'meter', rows: [], cur: null }; });
    function oxName(o) {
      return ({ water: t('none: distilled water only (control)'), Na2O: t('sodium oxide'), MgO: t('magnesium oxide (from burning magnesium)'), CaO: t('calcium oxide'), Al2O3: t('aluminium oxide'),
        SiO2: t('silicon dioxide'), P4O10: t('phosphorus(V) oxide (teacher, fume cupboard)'), CO2: t('carbon dioxide (bubbled in)'), SO2: t('sulfur dioxide (from burning sulfur, fume cupboard)') })[o];
    }
    function oxShort(o) { return o === 'water' ? t('control') : f(o); }
    function uiName(key) {
      return ({ red: t('red'), orange: t('orange'), yellow: t('yellow'), 'yellow-green': t('yellow-green'), green: t('green'), 'blue-green': t('blue-green'), blue: t('blue'), purple: t('purple') })[key];
    }
    function charName(c) { return c === 'basic' ? t('basic') : c === 'acidic' ? t('acidic') : t('no change from the control'); }

    w.select({ label: t('Oxide added to 50 cm³ of water'), options: OXIDES.map(function (o) { return { value: o, label: oxName(o) }; }), value: st.ox, onChange: function (v) { st.ox = v; st.cur = null; msg.hide(); paint(); } });
    w.select({ label: t('Measure with'), options: [{ value: 'ui', label: t('universal indicator') }, { value: 'meter', label: t('pH meter') }], value: st.how, onChange: function (v) { st.how = v; } });
    w.button(t('Add to water and measure'), measure, { primary: true });
    w.button(t('Clear results'), function () { st.rows = []; st.cur = null; msg.hide(); paint(); });

    var cv = w.canvas({ height: 170, label: t('A beaker of water with the oxide added. With universal indicator the water takes the indicator colour; with a pH meter the display shows the reading. Both are given in the readout.') });
    cv.draw(function (ctx, W, H) {
      var F = fonts(w), ink = w.color('--ink'), outline = w.color('--ink-2'), surf2 = w.color('--surface-2'), ink3 = w.color('--ink-3');
      var bx = 20, bw = Math.min(150, W * 0.42), top = 20, bottom = H - 16, lvl = top + 40;
      var c = st.cur;
      ctx.fillStyle = c && c.how === 'ui' ? rgba(uiBand(c.ph)[2], 0.75) : surf2;
      ctx.fillRect(bx, lvl, bw, bottom - lvl);
      ctx.strokeStyle = outline; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(bx - 4, top); ctx.lineTo(bx, top + 4); ctx.lineTo(bx, bottom); ctx.lineTo(bx + bw, bottom); ctx.lineTo(bx + bw, top); ctx.stroke();
      ctx.fillStyle = ink3; ctx.font = F.mono(10); ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText(t('50 cm³'), bx + bw - 4, lvl - 8);
      // pH meter
      var mx = bx + bw + 24, mw = Math.min(140, W - mx - 10);
      if (c && c.how === 'meter') {
        ctx.strokeStyle = outline; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(bx + bw * 0.6, bottom - 12); ctx.lineTo(bx + bw * 0.6, top - 4); ctx.lineTo(mx + mw / 2, top - 4); ctx.lineTo(mx + mw / 2, 40); ctx.stroke();
      }
      ctx.strokeStyle = outline; ctx.lineWidth = 2; ctx.strokeRect(mx, 40, mw, 70);
      ctx.fillStyle = ink; ctx.font = F.mono(26, true); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(c && c.how === 'meter' ? c.ph.toFixed(1) : '--.-', mx + mw / 2, 72);
      ctx.font = F.body(11); ctx.fillStyle = ink3;
      ctx.fillText(t('pH meter'), mx + mw / 2, 98);
      if (c && c.how === 'ui') { ctx.font = F.body(12, true); ctx.fillStyle = ink; ctx.textAlign = 'left'; ctx.fillText(t('indicator: {c}', { c: uiName(uiBand(c.ph)[1]) }), bx, 10); }
    });

    var setObs = w.readoutItem(t('Reading'), { text: true });
    var clsWrap = el('div');
    w.stage.appendChild(clsWrap);
    var msg = msgBox(w.stage);
    var drawTable = resultsTable(w, t('Results table (copy it into your notebook)'));

    function measure() {
      var o = st.ox, ph = PH[o] + rand(-0.2, 0.2);
      if (o === 'Al2O3' || o === 'SiO2') ph = PH.water + rand(-0.15, 0.15);
      ph = Math.round(ph * 10) / 10;
      st.cur = { ox: o, how: st.how, ph: ph, cls: null };
      st.rows.push(st.cur);
      msg.hide();
      paint();
    }
    function readingText(c) {
      return c.how === 'meter' ? t('pH {v} (±0.1)', { v: c.ph.toFixed(1) }) : t('{c}, about pH {n}', { c: uiName(uiBand(c.ph)[1]), n: Math.round(c.ph) });
    }
    function classify(choice) {
      var c = st.cur; if (!c) return;
      c.cls = choice;
      var right = CHAR[c.ox] === choice, html = '';
      if (c.ox === 'Al2O3') html = p(t('Aluminium oxide does not dissolve, so the pH is the same as the control. This test cannot show its character. It is amphoteric: it reacts with both acids and bases.'));
      else if (c.ox === 'SiO2') html = p(t('Silicon dioxide does not dissolve, so the pH is the same as the control. It is still an acidic oxide, because it reacts with bases, but this test cannot show that.'));
      else html = p(CHAR[c.ox] === 'basic' ? t('The pH is well above the control, so the oxide is basic: it forms a hydroxide.') : t('The pH is well below the control, so the oxide is acidic: it forms an acid.')) +
        p('<span class="lpt-eq">' + f(EQ[c.ox]) + '</span>') +
        p(REQUIRED[c.ox] ? t('You must be able to write this equation.') : t('You do not need this equation. Only the oxides of group 1 and group 2 metals, carbon and sulfur are required.'));
      if (c.ox === 'MgO') html += p(t('Magnesium hydroxide is only slightly soluble, so the solution is only weakly alkaline.'));
      msg.show(right ? 'ok' : 'bad', p(right ? t('Correct.') : t('Not quite. Compare the reading with the control, not with pH 7.')) + html);
      paint();
    }
    function paint() {
      var c = st.cur;
      clsWrap.innerHTML = '';
      if (!c) setObs(t('Choose an oxide and press “Add to water and measure”.'));
      else {
        setObs(t('{oxide}: {reading}', { oxide: oxName(c.ox), reading: readingText(c) }));
        if (c.ox !== 'water') {
          clsWrap.appendChild(el('p', { class: 'lpt-q', html: t('Classify this oxide from your reading.') }));
          var row = el('div', { class: 'btn-row' });
          ['basic', 'acidic', 'none'].forEach(function (k) {
            var b = el('button', { class: 'btn btn--small', type: 'button', 'aria-pressed': String(c.cls === k), html: charName(k) });
            b.addEventListener('click', function () { classify(k); });
            row.appendChild(b);
          });
          clsWrap.appendChild(row);
        }
      }
      drawTable([{ label: t('Oxide') }, { label: t('Reading') }, { label: t('Your classification') }],
        st.rows.map(function (r) { return [oxShort(r.ox), readingText(r), r.ox === 'water' ? '—' : (r.cls ? charName(r.cls) : t('not yet'))]; }),
        t('No results yet. Start with the water control.'));
      cv.draw();
    }
    paint();
  });
})();
