/* ==========================================================================
   Widgets for Lab 3 — Heating and cooling curves (Structure 1.1.2–1.1.3).
   lab-heating-curve.rig   Virtual heating / cooling experiment: choose a
                           substance, heating or cooling, the rate, the
                           thermometer and the reading interval. A stopwatch
                           runs, readings are logged in a raw-data table and
                           plotted live with S1.chart.
   Model: one well-stirred sample exchanging heat with a bath (Newton's law),
   or heated on a hotplate (water). During a change of state the energy goes
   into the change of state and the temperature stays at the melting point
   (with a small spread that grows with the heating rate, because the sample
   is not perfectly uniform). Liquids can supercool on cooling, then jump back
   to the freezing point when crystals form. The thermometer lags the sample
   (time constant 4 s), has a small calibration offset that changes per run,
   and is read to its scale (glass ±0.5 °C, digital ±0.1 °C).
   Literature values (101.3 kPa): stearic (octadecanoic) acid m.p. 69.3 °C,
   lauric (dodecanoic) acid m.p. 43.8 °C, water m.p. 0.0 °C, b.p. 100.0 °C.
   School-grade fatty acids are not pure, so each run's true melting point is
   a little below the literature value. Every visible string goes through t().
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var MINUS = '−';

  function rand(a, b) { return a + Math.random() * (b - a); }
  function gauss() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function sgn(x) { return String(x).replace('-', MINUS); }
  function font(w, px, bold, mono) { return (bold ? '700 ' : '') + px + 'px ' + (w.color(mono ? '--font-mono' : '--font-body') || 'sans-serif'); }

  /* Substances. Built inside the widget so that t() runs in the current language. */
  function substances() {
    return {
      stearic: {
        name: t('Stearic acid'), lit: 69.3, mass: 5, cs: 16, cl: 19.5, L: 995, bp: null,
        heat: { start: 20, envs: [80, 95], k: 0.25, labels: [t('Gentle: water bath at about 80 °C'), t('Fast: water bath at about 95 °C')], dur: 900, yMin: 10, yMax: 100 },
        cool: { start: 85, envs: [20, 15], ks: [0.06, 0.25], labels: [t('Slow: tube in an empty beaker (air)'), t('Fast: tube in a beaker of cold water')], dur: 900, sc: [[0, 1.5], [0.5, 2.5]], yMin: 10, yMax: 90 },
        impure: [0.3, 1.2]
      },
      lauric: {
        name: t('Lauric acid'), lit: 43.8, mass: 5, cs: 18.8, cl: 19.5, L: 915, bp: null,
        heat: { start: 20, envs: [55, 70], k: 0.25, labels: [t('Gentle: water bath at about 55 °C'), t('Fast: water bath at about 70 °C')], dur: 900, yMin: 10, yMax: 80 },
        cool: { start: 60, envs: [20, 12], ks: [0.06, 0.25], labels: [t('Slow: tube in an empty beaker (air)'), t('Fast: tube in a beaker of cold water')], dur: 900, sc: [[0, 1.5], [0.5, 2.5]], yMin: 0, yMax: 70 },
        impure: [0.2, 1.0]
      },
      water: {
        name: t('Water (ice)'), lit: 0.0, bpLit: 100.0, mass: 20, cs: 82, cl: 124, L: 6680, bp: true,
        heat: { start: -10, powers: [25, 60], kLoss: 0.1, room: 20, labels: [t('Gentle: hotplate on a low setting'), t('Fast: hotplate on a high setting')], dur: 1200, yMin: -20, yMax: 110 },
        cool: { start: 20, envs: [-10, -20], ks: [0.25, 0.3], labels: [t('Slow: ice–salt bath at about −10 °C'), t('Fast: ice–salt bath at about −20 °C')], dur: 900, sc: [[1, 4], [2, 5]], yMin: -25, yMax: 25, cl: 29, cs: 18.5, L: 1670 },
        impure: [0, 0]
      }
    };
  }

  S1.widgets.register('lab-heating-curve.rig', function (w) {
    var SUB = substances();
    var sub = w.options.substance && SUB[w.options.substance] ? w.options.substance : 'stearic';
    var mode = 'heat', rate = 0, kind = 'glass', interval = 30, speed = 30;

    var selSub = w.select({ label: t('Substance'), value: sub, options: [
      { value: 'stearic', label: t('Stearic acid') }, { value: 'lauric', label: t('Lauric acid') }, { value: 'water', label: t('Water (ice)') }],
      onChange: function (v) { sub = v; fillRates(); reset(); } });
    var selMode = w.select({ label: t('Experiment'), value: mode, options: [
      { value: 'heat', label: t('Heating curve') }, { value: 'cool', label: t('Cooling curve') }],
      onChange: function (v) { mode = v; fillRates(); reset(); } });
    var selRate = w.select({ label: t('Rate'), value: '0', options: [{ value: '0', label: t('Gentle') }], onChange: function (v) { rate = Number(v); reset(); } });
    var selTh = w.select({ label: t('Thermometer'), value: kind, options: [
      { value: 'glass', label: t('Glass, 1 °C divisions (±0.5 °C)') }, { value: 'digital', label: t('Digital probe (±0.1 °C)') }],
      onChange: function (v) { kind = v; reset(); } });
    var selInt = w.select({ label: t('Reading every'), value: '30', options: [
      { value: '15', label: t('15 s') }, { value: '30', label: t('30 s') }, { value: '60', label: t('60 s') }],
      onChange: function (v) { interval = Number(v); reset(); } });
    w.select({ label: t('Clock speed'), value: '30', options: [
      { value: '10', label: t('10 × real time') }, { value: '30', label: t('30 × real time') }, { value: '60', label: t('60 × real time') }],
      onChange: function (v) { speed = Number(v); } });

    var btnGo = w.button(t('Start'), function () { if (run.done) return; if (going) { loop.stop(); going = false; } else { loop.start(true); going = true; } label(); }, { primary: true });
    w.button(t('Run to the end'), function () { loop.stop(); going = false; while (!run.done) step(0.25); after(); label(); });
    w.button(t('New run'), function () { reset(); });
    var btnFlat = w.button(t('Find the flat parts'), function () { showFlat = !showFlat; after(); });

    function fillRates() {
      var cfg = SUB[sub][mode];
      selRate.setOptions([{ value: '0', label: cfg.labels[0] }, { value: '1', label: cfg.labels[1] }], '0');
      rate = Number(selRate.value);
    }

    var setTime = w.readoutItem(t('Time'));
    var setTemp = w.readoutItem(t('Thermometer'));
    var setSeen = w.readoutItem(t('What you see'));
    var setN = w.readoutItem(t('Readings'));
    var setFlat = w.readoutItem(t('Flat parts'), { text: true });

    var cv = w.canvas({ height: 210, label: t('Apparatus: a boiling tube of the sample with a thermometer, in a water bath or on a hotplate. The drawing shows how much of the sample is solid and how much is liquid.') });
    var chartBox = el('div', { class: 'hc-chart' });
    w.stage.appendChild(chartBox);
    var tableBox = el('div', { class: 'table-scroll hc-table', tabindex: '0' });
    w.stage.appendChild(tableBox);

    var run, going = false, showFlat = false, chart = null;
    var loop = w.loop(function (dt) { var sim = dt * speed, n = Math.ceil(sim / 0.25); for (var i = 0; i < n && !run.done; i++) step(sim / n); after(); if (run.done) { loop.stop(); going = false; label(); } });

    function label() { btnGo.textContent = run.done ? t('Run finished') : going ? t('Pause') : (run.time > 0 ? t('Continue') : t('Start')); btnGo.disabled = run.done; }

    function reset() {
      loop.stop(); going = false; showFlat = false;
      var S = SUB[sub], cfg = S[mode], water = sub === 'water';
      var cs = (mode === 'cool' && cfg.cs) || S.cs, cl = (mode === 'cool' && cfg.cl) || S.cl, L = (mode === 'cool' && cfg.L) || S.L;
      var pressure = rand(98.5, 102.5);
      run = {
        S: S, cfg: cfg, water: water, mode: mode, rate: rate, kind: kind, interval: interval,
        cs: cs, cl: cl, L: L, Lv: 45200,
        tm: S.lit - rand(S.impure[0], S.impure[1]),            // true melting point of this sample
        tb: water ? 100 + (pressure - 101.3) * 0.28 : null,     // true boiling point today
        pressure: pressure,
        cal: kind === 'glass' ? rand(-0.3, 0.3) : rand(-0.1, 0.1),
        env: mode === 'heat' && !water ? cfg.envs[rate] + rand(-1.5, 1.5) : mode === 'cool' ? cfg.envs[rate] + rand(-1.5, 1.5) : null,
        k: mode === 'heat' ? cfg.k : cfg.ks ? cfg.ks[rate] : 0,
        power: mode === 'heat' && water ? cfg.powers[rate] * rand(0.93, 1.07) : 0,
        sc: mode === 'cool' ? (Math.random() < (water ? 0.95 : 0.75) ? rand(cfg.sc[rate][0], cfg.sc[rate][1]) : 0) : 0,
        T: cfg.start + rand(-0.8, 0.8), Tth: 0, f: mode === 'heat' ? 0 : 1, g: 0,
        nucleated: false, time: 0, nextRead: 0, rows: [], done: false, flow: 0
      };
      if (mode === 'cool' && water) run.tm = 0;
      run.Tth = run.T;
      after(); label();
    }

    /* Width of the melting (or freezing) range seen at the thermometer: the sample is not perfectly
       uniform, more so when the heat flows faster, and an impure sample melts over a range. */
    function spread(P) { return Math.min(2.2, Math.abs(P) * (run.mode === 'heat' ? 0.25 : 0.15)) + (run.S.lit - run.tm) * 0.6; }

    /* One time step of the model (dt in simulated seconds). */
    function step(dt) {
      var r = run, P;
      if (r.water && r.mode === 'heat') P = r.power - r.cfg.kLoss * (r.T - r.cfg.room);
      else P = r.k * (r.env - r.T);
      r.flow = P;
      if (r.mode === 'heat') {
        var s = r.water ? 0.1 : spread(P), m0 = r.tm - s / 2;
        if (r.f <= 0 && r.T < m0) { r.T = Math.min(m0, r.T + P * dt / r.cs); if (r.T >= m0 - 1e-9) r.f = 1e-6; }
        else if (r.f < 1) { r.f = Math.min(1, r.f + Math.max(0, P) * dt / r.L); r.T = m0 + s * r.f; }   // melting
        else if (r.water && r.T >= r.tb - 1e-9 && P > 0) { r.g = Math.min(1, r.g + P * dt / r.Lv); r.T = r.tb; }  // boiling
        else { r.T += P * dt / r.cl; if (r.water && r.T > r.tb) r.T = r.tb; }
      } else {
        var s2 = r.water ? 0.15 : spread(P);
        if (r.f >= 1 && !r.nucleated) {                                   // liquid cooling, may supercool
          r.T += P * dt / r.cl;
          if (r.T <= r.tm - r.sc) {                                       // crystals form: latent heat warms it back
            r.nucleated = true;
            r.f = Math.max(0.001, 1 - r.cl * (r.tm - r.T) / r.L); r.T = r.tm - s2 * (1 - r.f);
          }
        } else if (r.f > 0) {                                             // freezing
          r.f = Math.max(0, r.f + Math.min(0, P) * dt / r.L); r.T = r.tm - s2 * (1 - r.f);
        } else r.T += P * dt / r.cs;                                       // solid cooling
      }
      r.Tth += (r.T - r.Tth) * (1 - Math.exp(-dt / 4));                   // thermometer lag (time constant 4 s)
      r.time += dt;
      while (r.time >= r.nextRead - 1e-9 && r.nextRead <= r.cfg.dur) { record(); r.nextRead += r.interval; }
      if (r.time >= r.cfg.dur) r.done = true;
    }

    function reading() {
      var r = run, q = r.kind === 'glass' ? 0.5 : 0.1, noise = r.kind === 'glass' ? 0.15 : 0.04;
      return Math.round((r.Tth + r.cal + gauss() * noise) / q) * q;
    }

    function seen() {
      var r = run, water = r.water;
      if (r.mode === 'cool' && r.f >= 1) return water ? t('water') : t('liquid');
      if (r.mode === 'cool' && r.f > 0 && r.f < 1) return water ? t('ice forming in water') : t('crystals forming in liquid');
      if (r.f <= 0) return water ? t('ice') : t('solid');
      if (r.f < 1) return water ? t('ice and water') : t('solid and liquid');
      if (water && r.g > 0) return t('water, boiling');
      return water ? t('water') : t('liquid');
    }

    function record() {
      var r = run;
      r.rows.push({ time: Math.round(r.nextRead), T: reading(), seen: seen(), mixed: r.f > 0 && r.f < 1, boil: r.water && r.g > 0 });
    }

    function fmtT(v) { return sgn(v.toFixed(run.kind === 'glass' ? 1 : 1)); }

    /* Flat parts. A change of state is read from the observations: consecutive readings taken while two
       states were seen (or while water was boiling). A flat part at the end of a run, where only one state is
       present (three or more readings within 1.0 °C, or 0.4 °C for the probe), is the sample reaching the
       temperature of its surroundings. */
    function flats() {
      var rows = run.rows, out = [], tol = run.kind === 'glass' ? 1.0 : 0.4, i = 0;
      function seg(list, change) {
        var sum = 0, lo = Infinity, hi = -Infinity;
        list.forEach(function (x) { sum += x.T; lo = Math.min(lo, x.T); hi = Math.max(hi, x.T); });
        return { a: list[0].time, b: list[list.length - 1].time, mean: sum / list.length, lo: lo, hi: hi, n: list.length, change: change, boil: list[0].boil };
      }
      while (i < rows.length) {
        if (rows[i].mixed || rows[i].boil) {
          var j = i;
          while (j + 1 < rows.length && (rows[j + 1].mixed || rows[j + 1].boil) && rows[j + 1].boil === rows[i].boil) j++;
          if (j > i) out.push(seg(rows.slice(i, j + 1), true));
          i = j + 1;
        } else i++;
      }
      var k = rows.length - 1, lo = Infinity, hi = -Infinity;
      while (k >= 0 && !rows[k].mixed && !rows[k].boil) {
        lo = Math.min(lo, rows[k].T); hi = Math.max(hi, rows[k].T);
        if (hi - lo > tol + 1e-9) break;
        k--;
      }
      var tail = rows.slice(k + 1);
      if (tail.length >= 3 && !tail[0].mixed && !tail[0].boil) out.push(seg(tail, false));
      return out;
    }

    function after() {
      var r = run;
      setTime(t('{s} s', { s: Math.round(r.time) }));
      setTemp(t('{T} °C', { T: fmtT(Math.round((r.Tth + r.cal) / (r.kind === 'glass' ? 0.5 : 0.1)) * (r.kind === 'glass' ? 0.5 : 0.1)) }));
      setSeen(seen());
      setN(String(r.rows.length));
      var fl = flats();
      if (!showFlat) setFlat(r.rows.length ? t('Press “Find the flat parts” when you have enough readings.') : t('No readings yet. Press Start.'));
      else if (!fl.length) setFlat(t('No flat part yet: no two readings in a row were taken while two states were present.'));
      else setFlat(fl.map(function (f) {
        var what = f.change ? (f.boil ? t('boiling seen') : t('change of state seen')) : t('one state only: the sample has reached the temperature of its surroundings');
        return t('{a}–{b} s: mean {m} °C (readings {lo} to {hi} °C), {what}', { a: f.a, b: f.b, m: sgn(f.mean.toFixed(2)), lo: fmtT(f.lo), hi: fmtT(f.hi), what: what });
      }).join(' · '));
      btnFlat.textContent = showFlat ? t('Hide the flat parts') : t('Find the flat parts');
      table(); plot(fl); cv.draw();
    }

    function table() {
      var r = run, h = '<table class="data"><caption>' + t('Raw data: {name}, {mode}', { name: r.S.name, mode: r.mode === 'heat' ? t('heating') : t('cooling') }) + '</caption><thead><tr>' +
        '<th scope="col" class="num">' + t('Time / s') + '<br>' + t('±1 s') + '</th><th scope="col" class="num">' + t('Temperature / °C') + '<br>' + (r.kind === 'glass' ? t('±0.5 °C') : t('±0.1 °C')) + '</th><th scope="col">' + t('What you see') + '</th></tr></thead><tbody>';
      if (!r.rows.length) h += '<tr><td colspan="3">' + t('No readings yet.') + '</td></tr>';
      r.rows.forEach(function (x) { h += '<tr><td class="num">' + x.time + '</td><td class="num">' + fmtT(x.T) + '</td><td>' + x.seen + '</td></tr>'; });
      tableBox.innerHTML = h + '</tbody></table>';
      tableBox.scrollTop = tableBox.scrollHeight;
    }

    function plot(fl) {
      if (!S1.chart) return;
      var r = run, data = r.rows.map(function (x) { return [x.time, x.T]; });
      var series = [{ type: 'line', points: true, data: data.length ? data : [[0, r.cfg.start]], name: t('readings') }];
      if (!data.length) series[0].data = [];
      var ann = [];
      if (showFlat) {
        fl.forEach(function (f) {
          ann.push({ x: (f.a + f.b) / 2, y: f.mean, dy: r.mode === 'heat' ? -16 : 16, text: t('mean {m} °C', { m: sgn(f.mean.toFixed(1)) }) });
        });
        series.push({ type: 'line', width: 1, color: '--line-strong', name: t('lit. m.p.'), data: [[0, r.S.lit], [r.cfg.dur, r.S.lit]] });
        if (r.water && r.mode === 'heat') series.push({ type: 'line', width: 1, color: '--ink-2', name: t('lit. b.p.'), data: [[0, r.S.bpLit], [r.cfg.dur, r.S.bpLit]] });
      }
      var spec = {
        label: t('Graph of temperature against time for the readings in the table'), height: 250,
        x: { label: t('Time / s'), min: 0, max: r.cfg.dur, step: r.cfg.dur > 900 ? 300 : 150 },
        y: { label: t('Temperature / °C'), min: r.cfg.yMin, max: r.cfg.yMax, step: r.cfg.yMax - r.cfg.yMin > 80 ? 20 : 10 },
        series: series.filter(function (s) { return s.data.length; }), annotations: ann
      };
      if (!spec.series.length) spec.series = [{ type: 'scatter', data: [[0, r.cfg.yMin - 100]] }];
      if (chart) chart.update(spec); else chart = S1.chart.plot(chartBox, spec);
    }

    /* The apparatus drawing. */
    cv.draw(function (ctx, W, H) {
      var r = run; if (!r) return;
      var ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), line = w.color('--line-strong'),
        surf = w.color('--surface'), surf2 = w.color('--surface-2'), soft = w.color('--accent-soft'), accent = w.color('--accent');
      var cx = Math.min(W * 0.36, 150), base = H - 26;
      var bathW = 120, bathH = 110, bx = cx - bathW / 2, by = base - bathH;
      ctx.lineWidth = 1.5; ctx.lineJoin = 'round';
      var hot = r.mode === 'heat', water = r.water;
      // hotplate
      if (hot) {
        ctx.fillStyle = surf2; ctx.strokeStyle = ink; ctx.fillRect(bx - 14, base, bathW + 28, 14); ctx.strokeRect(bx - 14, base, bathW + 28, 14);
        ctx.fillStyle = ink3; ctx.font = font(w, 11); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(t('hotplate'), cx, base + 7);
      } else {
        ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(bx - 14, base + 0.5); ctx.lineTo(bx + bathW + 14, base + 0.5); ctx.stroke();
      }
      // beaker
      var liquidTop = by + 22;
      var filled = !(r.mode === 'cool' && !water && r.rate === 0);       // empty beaker when cooling in air
      if (water && hot) {
        // ice and water in a beaker; thermometer straight in
        var lvl = by + 30;
        ctx.fillStyle = soft; ctx.fillRect(bx, lvl, bathW, base - lvl);
        var ice = Math.round((1 - r.f) * 9);
        ctx.strokeStyle = ink2; ctx.fillStyle = surf;
        for (var i = 0; i < ice; i++) { var ix = bx + 10 + (i % 5) * 21, iy = lvl + 4 + Math.floor(i / 5) * 22; ctx.fillRect(ix, iy, 16, 16); ctx.strokeRect(ix + 0.5, iy + 0.5, 16, 16); }
        if (r.g > 0) { ctx.strokeStyle = ink2; for (var b = 0; b < 8; b++) { ctx.beginPath(); ctx.arc(bx + 12 + b * 14, base - 12 - (b % 3) * 18, 3, 0, Math.PI * 2); ctx.stroke(); } }
        ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx, base); ctx.lineTo(bx + bathW, base); ctx.lineTo(bx + bathW, by); ctx.stroke();
        thermometer(ctx, cx + 30, by - 50, base - 14);
        tag(ctx, r.f <= 0 ? t('ice') : r.f < 1 ? t('ice and water') : r.g > 0 ? t('boiling water') : t('water'), bx + 40, lvl - 9, ink);
      } else {
        if (filled) {
          ctx.fillStyle = soft; ctx.fillRect(bx, liquidTop, bathW, base - liquidTop);
          if (r.mode === 'cool' && water) {               // ice–salt: small cubes
            ctx.strokeStyle = ink3; for (var k = 0; k < 14; k++) { var kx = bx + 6 + (k % 7) * 16, ky = liquidTop + 10 + Math.floor(k / 7) * 46; ctx.strokeRect(kx + 0.5, ky + 0.5, 9, 9); }
          }
        }
        ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx, base); ctx.lineTo(bx + bathW, base); ctx.lineTo(bx + bathW, by); ctx.stroke();
        // boiling tube
        var tw = 26, tx = cx - tw / 2, ttop = by - 46, tbot = base - 16, sTop = tbot - 56;
        // sample: solid fraction at the bottom and sides (hatched), liquid above (plain)
        var solidH = (tbot - sTop) * (r.f >= 1 ? 0 : 1 - r.f);
        ctx.save(); ctx.beginPath(); ctx.rect(tx, sTop, tw, tbot - sTop); ctx.arc(cx, tbot, tw / 2, 0, Math.PI); ctx.clip();
        ctx.fillStyle = surf2; ctx.fillRect(tx, sTop, tw, tbot - sTop + tw / 2);
        if (solidH > 0) {
          var sy = tbot + tw / 2 - solidH - tw / 2;
          ctx.fillStyle = surf; ctx.fillRect(tx, sy, tw, tbot + tw / 2 - sy);
          ctx.strokeStyle = ink2; ctx.lineWidth = 1;
          for (var hx = tx - 40; hx < tx + tw + 40; hx += 6) { ctx.beginPath(); ctx.moveTo(hx, tbot + tw / 2); ctx.lineTo(hx + 40, sy - 40 + 40); ctx.stroke(); }
        }
        ctx.restore();
        ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(tx, ttop); ctx.lineTo(tx, tbot); ctx.arc(cx, tbot, tw / 2, Math.PI, 0, true); ctx.lineTo(tx + tw, ttop); ctx.stroke();
        thermometer(ctx, cx, ttop - 22, tbot + 4);
        // labels on the left
        ctx.font = font(w, 12); ctx.fillStyle = ink2; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        var bathTxt = hot ? t('water bath') : filled ? (water ? t('ice–salt bath') : t('cold water')) : t('air');
        ctx.textBaseline = 'alphabetic'; ctx.fillText(t('around the tube: {what}', { what: bathTxt }), Math.max(4, bx - 14), H - 3);
      }
      // right-hand panel: stopwatch, reading, state
      var px = Math.max(cx + bathW / 2 + 22, W * 0.56), pw = W - px - 6;
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = ink3; ctx.font = font(w, 11); ctx.fillText(t('stopwatch'), px, 26);
      ctx.fillStyle = ink; ctx.font = font(w, 20, true, true); ctx.fillText(t('{s} s', { s: Math.floor(r.time) }), px, 48);
      ctx.fillStyle = ink3; ctx.font = font(w, 11); ctx.fillText(t('thermometer'), px, 74);
      var q = r.kind === 'glass' ? 0.5 : 0.1;
      ctx.fillStyle = ink; ctx.font = font(w, 20, true, true); ctx.fillText(t('{T} °C', { T: fmtT(Math.round((r.Tth + r.cal) / q) * q) }), px, 96);
      ctx.fillStyle = ink3; ctx.font = font(w, 11); ctx.fillText(t('sample'), px, 122);
      ctx.fillStyle = ink; ctx.font = font(w, 13, true);
      wrap(ctx, seen(), px, 140, pw, 16);
      if (water && hot) { ctx.fillStyle = ink3; ctx.font = font(w, 11); ctx.fillText(t('air pressure {p} kPa', { p: r.pressure.toFixed(1) }), px, H - 8); }

      function thermometer(c, x, top, bottom) {
        c.fillStyle = surf; c.strokeStyle = ink; c.lineWidth = 1.2;
        c.fillRect(x - 3, top, 6, bottom - top); c.strokeRect(x - 3, top, 6, bottom - top);
        c.beginPath(); c.arc(x, bottom, 5, 0, Math.PI * 2); c.fillStyle = ink; c.fill();
        var frac = Math.max(0.05, Math.min(0.95, (r.Tth - r.cfg.yMin) / (r.cfg.yMax - r.cfg.yMin)));
        c.fillStyle = accent; c.fillRect(x - 1.5, bottom - (bottom - top) * frac, 3, (bottom - top) * frac);
      }
      function tag(c, s, x, y, col) { c.font = font(w, 12); c.fillStyle = col; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(s, x, y); }
      function wrap(c, s, x, y, maxW, lh) {
        var words = String(s).split(' '), lineS = '';
        words.forEach(function (wd) { var test = lineS ? lineS + ' ' + wd : wd; if (c.measureText(test).width > maxW && lineS) { c.fillText(lineS, x, y); y += lh; lineS = wd; } else lineS = test; });
        if (lineS) c.fillText(lineS, x, y);
      }
    });

    fillRates();
    reset();
    w.onCleanup(function () { if (chart) chart.destroy(); });
  });
})();
