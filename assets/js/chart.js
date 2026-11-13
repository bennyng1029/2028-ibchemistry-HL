/* ==========================================================================
   Structure Lab — chart.js   (optional; load after core.js)
   Small canvas charts in the site's theme: S1.chart.

     S1.chart.plot(el, spec)          axes + line / scatter / bar / stick series
     S1.chart.ir(el, opts)            IR spectrum (wavenumber axis runs 4000 → 400)
     S1.chart.massSpectrum(el, opts)  mass spectrum (bars at m/z)
     S1.chart.nmr(el, opts)           1H NMR stick spectrum with splitting

   Colours are CSS tokens. Charts redraw on resize, theme change and language change.
   Specs and examples: docs/AUTHORING.md, section 9.  Demo: dev/mol-demo.html
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.util) { if (window.console) console.error('chart.js needs core.js to be loaded first'); return; }
  var t = S1.t, doc = document;
  var SERIES_TOKENS = ['--accent', '--ink-2', '--line-strong', '--ink'];

  function niceStep(span, target) {
    var raw = span / Math.max(1, target), pow = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10)), f = raw / pow;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * pow;
  }
  function ticksFor(ax, lo, hi, target) {
    if (ax.ticks) return ax.ticks.slice();
    var step = ax.step || niceStep(hi - lo, target), out = [], first = Math.ceil(lo / step - 1e-9) * step;
    for (var v = first; v <= hi + step * 1e-6; v += step) out.push(Math.abs(v) < step * 1e-9 ? 0 : Number(v.toPrecision(12)));
    return out;
  }
  function fmtTick(ax, v) { return ax.format ? ax.format(v) : String(v).replace('-', '−'); }
  function pointOf(d) { return Array.isArray(d) ? { x: d[0], y: d[1], label: d[2] } : d; }

  /**
   * plot(el, spec) → {el, canvas, update(spec), redraw()}
   * spec = {
   *   height: 260,                         // CSS px (width follows the container)
   *   label: 'Text alternative',           // required: what the chart shows, in words
   *   x: {label, min, max, step | ticks: [], reverse: false, format: fn},
   *   y: {label, min, max, step | ticks: [], reverse: false, format: fn},
   *   categories: ['Li', 'Be', ...],       // optional: named x positions 0, 1, 2 … (for bars or element trends)
   *   series: [{ type: 'line' | 'scatter' | 'bar' | 'stick', data: [[x, y] | [x, y, 'label'] | {x, y, label}],
   *              color: '--accent', name: 'legend text', width: 2, points: true, labels: false }],
   *   annotations: [{x, y, text, dx: 0, dy: -10}]
   * }
   * Axis labels, series names and annotation text are passed through S1.t.
   */
  function plot(el, spec) {
    el = typeof el === 'string' ? doc.querySelector(el) : el;
    el.innerHTML = ''; el.classList.add('chart'); el.setAttribute('data-i18n', 'off');
    var canvas = doc.createElement('canvas');
    canvas.setAttribute('role', 'img'); canvas.style.display = 'block';
    el.appendChild(canvas);
    var ctx = canvas.getContext('2d'), W = 0, H = 0;
    S1.i18n.liveAttr(canvas, 'aria-label', function () { return t(spec.label || 'Chart'); });

    function size() {
      var w = Math.max(220, Math.floor(el.clientWidth || 320)), h = spec.height || 260, dpr = Math.min(window.devicePixelRatio || 1, 3);
      W = w; H = h; canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function draw() {
      var col = S1.theme.color, ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3'), grid = col('--line'), surface = col('--surface');
      var body = col('--font-body') || 'sans-serif', mono = col('--font-mono') || 'monospace';
      var xa = spec.x || {}, ya = spec.y || {}, series = spec.series || [], cats = spec.categories;
      ctx.clearRect(0, 0, W, H);
      // data extent
      var xs = [], ys = [];
      series.forEach(function (s) { s.data.forEach(function (d) { d = pointOf(d); xs.push(d.x); ys.push(d.y); }); });
      var xmin = xa.min != null ? xa.min : cats ? -0.5 : Math.min.apply(null, xs), xmax = xa.max != null ? xa.max : cats ? cats.length - 0.5 : Math.max.apply(null, xs);
      var ymin = ya.min != null ? ya.min : Math.min(0, Math.min.apply(null, ys)), ymax = ya.max != null ? ya.max : Math.max.apply(null, ys);
      if (xmax === xmin) xmax = xmin + 1;
      if (ya.max == null) { var st = niceStep(ymax - ymin || 1, 5); ymax = Math.ceil(ymax / st + 1e-9) * st; }
      if (ymax === ymin) ymax = ymin + 1;
      var legend = series.filter(function (s) { return s.name; });
      var m = { l: 56, r: 16, t: legend.length ? 30 : 14, b: xa.label ? 48 : 30 };
      if (W < 420) m.l = 48;
      var pw = W - m.l - m.r, ph = H - m.t - m.b;
      function X(v) { var f = (v - xmin) / (xmax - xmin); if (xa.reverse) f = 1 - f; return m.l + f * pw; }
      function Y(v) { var f = (v - ymin) / (ymax - ymin); if (ya.reverse) f = 1 - f; return m.t + (1 - f) * ph; }

      // grid and y ticks
      ctx.font = '12px ' + mono; ctx.lineWidth = 1;
      ticksFor(ya, ymin, ymax, Math.max(3, Math.floor(ph / 44))).forEach(function (v) {
        var y = Math.round(Y(v)) + 0.5;
        ctx.strokeStyle = grid; ctx.beginPath(); ctx.moveTo(m.l, y); ctx.lineTo(W - m.r, y); ctx.stroke();
        ctx.fillStyle = ink3; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(fmtTick(ya, v), m.l - 7, y);
      });
      // x ticks
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      if (cats) {
        var every = Math.ceil(cats.length * 26 / pw);
        cats.forEach(function (c, i) { if (i % every) return; ctx.fillStyle = ink3; ctx.fillText(c, X(i), m.t + ph + 7); });
      } else {
        ticksFor(xa, xmin, xmax, Math.max(3, Math.floor(pw / 70))).forEach(function (v) {
          var x = Math.round(X(v)) + 0.5;
          ctx.strokeStyle = ink3; ctx.beginPath(); ctx.moveTo(x, m.t + ph); ctx.lineTo(x, m.t + ph + 4); ctx.stroke();
          ctx.fillStyle = ink3; ctx.fillText(fmtTick(xa, v), x, m.t + ph + 7);
        });
      }
      // axes
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(m.l + 0.5, m.t); ctx.lineTo(m.l + 0.5, m.t + ph + 0.5); ctx.lineTo(W - m.r, m.t + ph + 0.5); ctx.stroke();
      ctx.fillStyle = ink2; ctx.font = '13px ' + body;
      if (xa.label) { ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; ctx.fillText(t(xa.label), m.l + pw / 2, H - 4); }
      if (ya.label) { ctx.save(); ctx.translate(13, m.t + ph / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(t(ya.label), 0, 0); ctx.restore(); }

      // series
      ctx.save(); ctx.beginPath(); ctx.rect(m.l, m.t - 6, pw + 1, ph + 6); ctx.clip();
      var barSeries = series.filter(function (s) { return s.type === 'bar'; }), barIdx = 0;
      series.forEach(function (s, si) {
        var c = col(s.color || SERIES_TOKENS[si % SERIES_TOKENS.length]), pts = s.data.map(pointOf);
        var base = Y(Math.max(ymin, Math.min(ymax, 0)));
        if (s.type === 'bar') {
          var slot = pw / (cats ? cats.length : Math.max(1, pts.length)), bw = Math.max(2, slot * 0.7 / barSeries.length - 2), k = barIdx++;
          pts.forEach(function (p) {
            var x0 = X(p.x) - (barSeries.length * (bw + 2)) / 2 + k * (bw + 2) + 1, y = Y(p.y);
            ctx.fillStyle = c; ctx.fillRect(x0, Math.min(y, base), bw, Math.abs(base - y));
          });
        } else if (s.type === 'stick') {
          ctx.strokeStyle = c; ctx.lineWidth = s.width || 2;
          pts.forEach(function (p) { var x = Math.round(X(p.x)) + 0.5; ctx.beginPath(); ctx.moveTo(x, base); ctx.lineTo(x, Y(p.y)); ctx.stroke(); });
        } else {
          if (s.type !== 'scatter') {
            ctx.strokeStyle = c; ctx.lineWidth = s.width || 2; ctx.lineJoin = 'round'; ctx.beginPath();
            pts.forEach(function (p, i) { if (i) ctx.lineTo(X(p.x), Y(p.y)); else ctx.moveTo(X(p.x), Y(p.y)); });
            ctx.stroke();
          }
          if (s.type === 'scatter' || s.points) {
            pts.forEach(function (p) { ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), 4, 0, Math.PI * 2); ctx.fillStyle = c; ctx.fill(); ctx.strokeStyle = surface; ctx.lineWidth = 1.5; ctx.stroke(); });
          }
        }
      });
      ctx.restore();
      // point labels (drawn unclipped so they are not cut at the top)
      series.forEach(function (s) {
        s.data.map(pointOf).forEach(function (p) {
          if (p.label == null && !s.labels) return;
          var text = p.label != null ? String(p.label) : fmtTick(ya, p.y);
          ctx.font = '11px ' + mono; ctx.fillStyle = ink; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
          var tx = Math.max(m.l + 12, Math.min(W - m.r - 10, X(p.x)));
          ctx.fillText(text, tx, Math.max(11, (ya.reverse ? Math.max(Y(p.y), m.t) : Y(p.y)) - 6));
        });
      });
      (spec.annotations || []).forEach(function (a) {
        var text = t(a.text), ax = X(a.x) + (a.dx || 0), ay = Y(a.y) + (a.dy == null ? -10 : a.dy);
        ctx.font = '12px ' + body; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        var tw = ctx.measureText(text).width + 8;
        ax = Math.max(m.l + tw / 2 + 2, Math.min(W - m.r - tw / 2, ax)); ay = Math.max(9, Math.min(m.t + ph - 9, ay));
        ctx.globalAlpha = 0.88; ctx.fillStyle = surface; ctx.fillRect(ax - tw / 2, ay - 8, tw, 16); ctx.globalAlpha = 1;
        ctx.fillStyle = ink; ctx.fillText(text, ax, ay);
      });
      // legend: swatch + name along the top
      var lx = m.l;
      ctx.font = '12px ' + body; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
      legend.forEach(function (s) {
        var c = col(s.color || SERIES_TOKENS[series.indexOf(s) % SERIES_TOKENS.length]), name = t(s.name);
        ctx.fillStyle = c; ctx.fillRect(lx, 9, 14, 4); ctx.fillStyle = ink2; ctx.fillText(name, lx + 19, 11);
        lx += 19 + ctx.measureText(name).width + 16;
      });
    }
    size(); draw();
    var lastW = el.clientWidth;
    var onResize = function () { if (el.clientWidth === lastW) return; lastW = el.clientWidth; size(); draw(); };
    if (window.ResizeObserver) new ResizeObserver(onResize).observe(el); else window.addEventListener('resize', onResize);
    doc.addEventListener('s1:themechange', draw);
    doc.addEventListener('s1:langchange', draw);
    return { el: el, canvas: canvas, redraw: draw, update: function (s) { spec = s; S1.i18n.render(canvas); size(); draw(); } };
  }

  /**
   * ir(el, {peaks: [{at: 1715, depth: 85, width: 18, label: 'C=O'}], height, label})
   * depth is the percentage of light absorbed at the peak (0–100); width is the half-width in cm^-1.
   * The wavenumber axis runs from 4000 down to 400 cm^-1, as on printed spectra.
   */
  function ir(el, o) {
    var pts = [], peaks = o.peaks || [];
    for (var v = 4000; v >= 400; v -= 4) {
      var tr = 97;
      peaks.forEach(function (p) { var w = p.width || 20; tr -= (p.depth || 60) * (w * w) / ((v - p.at) * (v - p.at) + w * w); });
      pts.push([v, Math.max(2, tr)]);
    }
    return plot(el, {
      height: o.height || 260, label: o.label || 'Infrared spectrum',   // i18n
      x: { label: 'Wavenumber / cm⁻¹', min: 400, max: 4000, reverse: true, ticks: [4000, 3500, 3000, 2500, 2000, 1500, 1000, 500] },   // i18n
      y: { label: 'Transmittance / %', min: 0, max: 100, step: 20 },   // i18n
      series: [{ type: 'line', data: pts, color: '--accent', width: 1.8 }],
      annotations: peaks.filter(function (p) { return p.label; }).map(function (p) { return { x: p.at, y: Math.max(4, 97 - (p.depth || 60)), text: p.label, dy: 14 }; })
    });
  }

  /**
   * massSpectrum(el, {peaks: [[m/z, relative abundance, optional label]], xMax, height, label})
   * Peaks with a label, and the tallest peak, are labelled.
   */
  function massSpectrum(el, o) {
    var peaks = o.peaks || [], top = Math.max.apply(null, peaks.map(function (p) { return p[1]; }));
    var xMax = o.xMax || Math.ceil((Math.max.apply(null, peaks.map(function (p) { return p[0]; })) + 5) / 10) * 10;
    return plot(el, {
      height: o.height || 260, label: o.label || 'Mass spectrum',   // i18n
      x: { label: 'm/z', min: o.xMin || 0, max: xMax },   // i18n
      y: { label: o.yLabel || 'Relative abundance / %', min: 0, max: o.yMax || Math.ceil(top / 20) * 20, step: 20 },   // i18n
      series: [{ type: 'stick', width: 3, color: '--accent', data: peaks.map(function (p) { return [p[0], p[1], p[2] != null ? p[2] : (p[1] === top || o.labelAll ? String(p[0]) : null)]; }) }]
    });
  }

  /**
   * nmr(el, {signals: [{shift: 1.2, h: 3, split: 3, j: 0.035, label: 'CH3'}], max: 10, height, label})
   * split = number of lines in the signal (1 singlet, 2 doublet, 3 triplet, 4 quartet …); line heights follow
   * Pascal's triangle and the total height is proportional to h (the number of hydrogen atoms).
   * The chemical shift axis runs from max down to 0 ppm.
   */
  function nmr(el, o) {
    var sticks = [], notes = [], maxY = 0;
    (o.signals || []).forEach(function (s) {
      var n = Math.max(1, s.split || 1), row = [1], j = s.j || 0.035;
      for (var i = 1; i < n; i++) { var next = [1]; for (var k = 1; k < i; k++) next.push(row[k - 1] + row[k]); next.push(1); row = next; }
      var sum = row.reduce(function (a, b) { return a + b; }, 0), peak = 0;
      row.forEach(function (r, i2) { var y = (s.h || 1) * r / sum * n; peak = Math.max(peak, y); sticks.push([s.shift + (i2 - (n - 1) / 2) * j, y]); });
      maxY = Math.max(maxY, peak);
      if (s.label) notes.push({ x: s.shift, y: peak, text: s.label, dy: -10 });
    });
    return plot(el, {
      height: o.height || 240, label: o.label || 'Proton NMR spectrum',   // i18n
      x: { label: 'Chemical shift / ppm', min: 0, max: o.max || 10, reverse: true, step: 1 },   // i18n
      y: { label: 'Signal', min: 0, max: maxY * 1.3 || 1, ticks: [] },   // i18n
      series: [{ type: 'stick', width: 2, color: '--accent', data: sticks }],
      annotations: notes
    });
  }

  S1.chart = { plot: plot, ir: ir, massSpectrum: massSpectrum, nmr: nmr };
})();
