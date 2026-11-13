/* ==========================================================================
   Widgets for topic 1.1.  One file per topic: assets/js/widgets-s1-N.js
   Register with a name prefixed by the topic id, then place
   <figure data-s1-widget="s1-1.kelvin" data-title="…"> in the page.
   The widget API (w) is documented in docs/AUTHORING.md.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  /* Celsius ↔ kelvin converter with a thermometer scale. */
  S1.widgets.register('dev.kelvin', function (w) {
    var MIN = -273.15, MAX = 150;
    var start = w.options.start != null ? Number(w.options.start) : 25;

    var setC = w.readoutItem(t('Celsius'));
    var setK = w.readoutItem(t('Kelvin'));
    var setNote = w.readoutItem(t('What it means'), { text: true });

    var slider = w.slider({ label: t('Temperature'), min: MIN, max: MAX, step: 0.05, value: start, unit: '°C', onInput: update });
    w.button(t('Absolute zero'), function () { slider.set(MIN); });
    w.button(t('Water freezes'), function () { slider.set(0); });
    w.button(t('Room temperature'), function () { slider.set(25); });
    w.button(t('Water boils'), function () { slider.set(100); });

    var marks = [
      { c: MIN, label: 'absolute zero' },   // i18n
      { c: 0, label: 'water freezes' },     // i18n
      { c: 100, label: 'water boils' }      // i18n
    ];

    var cv = w.canvas({ height: 150, label: t('Thermometer scale from absolute zero to 150 degrees Celsius, labelled in both degrees Celsius and kelvin') });
    cv.draw(function (ctx, W, H) {
      var ink = w.color('--ink'), ink3 = w.color('--ink-3'), line = w.color('--line-strong'),
        accent = w.color('--accent'), track = w.color('--surface-2');
      var mono = '12px ' + (w.color('--font-mono') || 'monospace');
      var padL = 14, padR = 14, x0 = padL, x1 = W - padR, y = 62, h = 22;
      function X(c) { return x0 + (c - MIN) / (MAX - MIN) * (x1 - x0); }
      var c = slider.value;

      // tube and fill
      ctx.fillStyle = track; ctx.fillRect(x0, y, x1 - x0, h);
      ctx.fillStyle = accent; ctx.fillRect(x0, y, Math.max(2, X(c) - x0), h);
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.strokeRect(x0, y, x1 - x0, h);

      // ticks: Celsius above, kelvin below
      ctx.font = mono; ctx.textBaseline = 'alphabetic';
      var step = W < 460 ? 100 : 50;
      ctx.strokeStyle = line; ctx.lineWidth = 1;
      for (var tc = -250; tc <= MAX; tc += 50) {
        var x = X(tc);
        ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x, y); ctx.stroke();
        if (tc % step === 0) { ctx.fillStyle = ink3; ctx.textAlign = 'center'; ctx.fillText(String(tc).replace('-', '−'), x, y - 9); }
      }
      for (var k = 0; k <= MAX + 273.15; k += 50) {
        var xk = X(k - 273.15);
        ctx.beginPath(); ctx.moveTo(xk, y + h); ctx.lineTo(xk, y + h + 5); ctx.stroke();
        if (k % step === 0) { ctx.fillStyle = ink3; ctx.textAlign = k === 0 ? 'left' : 'center'; ctx.fillText(String(k), xk, y + h + 18); }
      }
      ctx.fillStyle = ink; ctx.textAlign = 'right';
      ctx.fillText('°C', x1, y - 26);
      ctx.fillText('K', x1, y + h + 36);

      // fixed points
      ctx.textAlign = 'left';
      marks.forEach(function (m, i) {
        var xm = X(m.c);
        ctx.strokeStyle = ink; ctx.lineWidth = 1.5; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(xm, y - 2); ctx.lineTo(xm, y + h + 2); ctx.stroke();
        ctx.setLineDash([]);
        if (W >= 460 || i !== 1) {
          ctx.fillStyle = ink3;
          var tw = ctx.measureText(t(m.label)).width;
          ctx.fillText(t(m.label), Math.min(Math.max(x0, xm - (i === 0 ? 0 : tw / 2)), x1 - tw), y + h + 54);
        }
      });

      // current value marker
      var xc = X(c);
      ctx.strokeStyle = ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(xc, y - 4); ctx.lineTo(xc, y + h + 4); ctx.stroke();
    });

    function update() {
      var c = slider.value, k = c + chem.constants.zeroC;
      if (Math.abs(k) < 1e-9) k = 0;
      setC(chem.fixed(c, 2) + ' °C');
      setK(chem.fixed(k, 2) + ' K');
      setNote(k === 0 ? t('Lowest possible temperature') : c < 0 ? t('Below the freezing point of water') : c < 100 ? t('Water is liquid (at 100 kPa)') : t('At or above the boiling point of water'));
      cv.draw();
    }
    update();
  });
})();
