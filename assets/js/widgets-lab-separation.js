/* ==========================================================================
   Widgets for Lab 1 — Separating and purifying mixtures (labs/lab-separation.html).
   lab-separation.chooser    choose a technique for a mixture and see where each part ends up
   lab-separation.recryst    recrystallize impure benzoic acid: solvent volume, hot filtration,
                             cooling, rinse and drying change the yield and the purity
   lab-separation.meltpoint  melting point apparatus: heat a capillary, record the melting range

   Data. Benzoic acid solubility in water (g per 100 cm3) is interpolated from
   literature values (0 °C 0.17, 18 °C 0.27, 25 °C 0.34, 40 °C 0.55, 75 °C 2.15,
   100 °C 5.63; CRC Handbook / Wikipedia, rounded). Literature melting point of
   benzoic acid: 122 °C. The composition of the impure sample, the losses in
   each step and the melting-point depression are invented model data, chosen to
   behave like a school practical. They are labelled as model data on the page.
   Every user-visible string goes through t("English text", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, chem = S1.chem, el = S1.util.el;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
  var MP_LIT = 122.0;

  /* ---------- small helpers ---------------------------------------------- */
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function gauss(sd) { var u = 1 - Math.random(), v = Math.random(); return sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function r2(x) { return Math.round(x * 100) / 100; }
  function half(x) { return Math.round(x * 2) / 2; }
  function f2(x) { return chem.fixed(x, 2); }
  function f1(x) { return chem.fixed(x, 1); }
  function fonts(w) {
    var mono = w.color('--font-mono') || 'monospace', body = w.color('--font-body') || 'sans-serif';
    return {
      mono: function (px, bold) { return (bold ? '600 ' : '') + px + 'px ' + mono; },
      body: function (px, bold) { return (bold ? '700 ' : '') + px + 'px ' + body; }
    };
  }
  /** Feedback box using the site's .feedback styles. tone: 'right' | 'wrong' | 'partial' | ''. */
  function feedback(parent) {
    var box = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
    parent.appendChild(box);
    return {
      el: box,
      set: function (tone, label, html) {
        box.className = 'feedback' + (tone ? ' feedback--' + tone : '');
        box.innerHTML = (label ? '<span class="feedback__label">' + label + '</span>' : '') + (html || '');
      },
      clear: function () { box.className = 'feedback'; box.innerHTML = ''; }
    };
  }
  /** A raw-data table in the stage, newest row first (at most max rows if given): {add(cells), clear()}. Cells are HTML; numeric columns get class num. */
  function dataTable(parent, caption, cols, max) {
    var wrap = el('div', { class: 'table-scroll lab-table' });
    var table = el('table', { class: 'data' });
    var cap = el('caption', { html: caption });
    var thead = el('thead'), tr = el('tr'), tbody = el('tbody');
    function cls(c) { return [c.num ? 'num' : '', c.wide ? 'lab-wide' : ''].join(' ').trim() || null; }
    cols.forEach(function (c) { tr.appendChild(el('th', { scope: 'col', class: cls(c), html: c.label })); });
    thead.appendChild(tr); table.appendChild(cap); table.appendChild(thead); table.appendChild(tbody); wrap.appendChild(table);
    var empty = el('p', { class: 'lab-empty', html: t('No results yet.') });
    parent.appendChild(empty); parent.appendChild(wrap);
    function sync() { var none = !tbody.children.length; wrap.hidden = none; empty.hidden = !none; }
    sync();
    return {
      add: function (cells) {
        var row = el('tr');
        cells.forEach(function (c, i) { row.appendChild(el(i === 0 ? 'th' : 'td', { scope: i === 0 ? 'row' : null, class: cls(cols[i]), html: c })); });
        if (max && tbody.children.length >= max) tbody.removeChild(tbody.lastChild);
        tbody.insertBefore(row, tbody.firstChild); sync();
      },
      clear: function () { tbody.innerHTML = ''; sync(); }
    };
  }

  /* ---------- benzoic acid solubility (g per 100 cm3 of water) ----------- */
  var SOL = [[0, 0.17], [18, 0.27], [25, 0.34], [40, 0.55], [75, 2.15], [100, 5.63]];
  function solubility(T) {
    if (T <= SOL[0][0]) return SOL[0][1];
    for (var i = 1; i < SOL.length; i++) {
      if (T <= SOL[i][0]) {
        var a = SOL[i - 1], b = SOL[i], f = (T - a[0]) / (b[0] - a[0]);
        return Math.exp(Math.log(a[1]) + f * (Math.log(b[1]) - Math.log(a[1])));
      }
    }
    return SOL[SOL.length - 1][1];
  }
  var T_HOT = 95, T_ICE = 5, T_ROOM = 20;

  /* Shared between the recrystallization and melting point widgets: products made in this visit. */
  var RUNS = [], runListeners = [];
  function addRun(run) { RUNS.push(run); runListeners.slice().forEach(function (fn) { fn(run); }); }

  /* =======================================================================
     1. Choosing a technique
     ======================================================================= */
  S1.widgets.register('lab-separation.chooser', function (w) {
    // Component kinds: insol (insoluble solid), solute (dissolved or soluble solid), liquid (volatile, bp in °C),
    // impure (crude solid with a little soluble impurity), dyes (several dissolved dyes, tiny amounts).
    var MIX = [
      { name: t('Sand in water'), goal: t('Goal: get the sand back.'), want: ['sand'], wet: true,
        parts: [{ id: 'sand', name: t('sand'), kind: 'insol' }, { id: 'water', name: t('water'), kind: 'liquid', bp: 100 }] },
      { name: t('Salt water (sodium chloride solution)'), goal: t('Goal: get solid salt.'), want: ['salt'], wet: true,
        parts: [{ id: 'salt', name: t('salt'), kind: 'solute' }, { id: 'water', name: t('water'), kind: 'liquid', bp: 100 }] },
      { name: t('Salt water, but you want the water'), goal: t('Goal: collect pure water.'), want: ['water'], wet: true,
        parts: [{ id: 'salt', name: t('salt'), kind: 'solute' }, { id: 'water', name: t('water'), kind: 'liquid', bp: 100 }] },
      { name: t('Ethanol and water (they mix completely)'), goal: t('Goal: get the ethanol out.'), want: ['ethanol'], wet: true,
        parts: [{ id: 'ethanol', name: t('ethanol'), kind: 'liquid', bp: 78 }, { id: 'water', name: t('water'), kind: 'liquid', bp: 100 }] },
      { name: t('Dry mixture of sand and salt'), goal: t('Goal: a dry sample of each solid.'), want: ['sand', 'salt'], wet: false,
        parts: [{ id: 'sand', name: t('sand'), kind: 'insol' }, { id: 'salt', name: t('salt'), kind: 'solute' }] },
      { name: t('Impure benzoic acid crystals'), goal: t('Goal: purer benzoic acid.'), want: ['ba'], wet: false,
        parts: [{ id: 'ba', name: t('benzoic acid'), kind: 'impure' }, { id: 'imp', name: t('soluble impurity'), kind: 'solute' }] },
      { name: t('Black ink'), goal: t('Goal: find out how many dyes it contains.'), want: ['dyes'], wet: true,
        parts: [{ id: 'dyes', name: t('dyes'), kind: 'dyes' }, { id: 'water', name: t('solvent'), kind: 'liquid', bp: 100 }] }
    ];
    var TECH = [
      { value: 'filter', label: t('Filtration') },
      { value: 'evap', label: t('Evaporation, then crystallize') },
      { value: 'distil', label: t('Simple distillation') },
      { value: 'recryst', label: t('Recrystallization') },
      { value: 'seq', label: t('Dissolve in water, filter, evaporate the filtrate') },
      { value: 'chroma', label: t('Paper chromatography') }
    ];
    var mixSel = w.select({ label: t('Mixture'), options: MIX.map(function (m, i) { return { value: String(i), label: m.name }; }), value: '0', onChange: newMix });
    var techSel = w.select({ label: t('Technique'), options: TECH, value: 'filter', onChange: function () { fb.clear(); bins.innerHTML = ''; } });
    w.button(t('Try it'), tryIt, { primary: true });
    var goal = el('p', { class: 'lab-goal' }); w.stage.appendChild(goal);
    var bins = el('div', { class: 'lab-bins' }); w.stage.appendChild(bins);
    var fb = feedback(w.stage);
    var log = dataTable(w.stage, t('Your attempts'), [{ label: t('Mixture'), wide: true }, { label: t('Technique'), wide: true }, { label: t('Result') }], 8);
    var setV = w.readoutItem(t('Result'), { text: true });

    function names(list) { return list.map(function (p) { return p.name; }).join(', '); }
    function newMix() { var m = MIX[Number(mixSel.value)]; goal.innerHTML = m.goal; bins.innerHTML = ''; fb.clear(); setV(t('Choose a technique and press Try it.')); }

    /** Where does each part end up? Returns {bins: [{label, items, lost}], note}. */
    function simulate(m, tech) {
      var P = m.parts, by = function (k) { return P.filter(function (p) { return p.kind === k; }); };
      var liquids = by('liquid'), insol = by('insol'), solutes = by('solute'), impure = by('impure'), dyes = by('dyes');
      var nonLiquid = P.filter(function (p) { return p.kind !== 'liquid'; });
      if (tech === 'chroma') {
        if (dyes.length) return { bins: [{ label: t('Spots on the paper'), items: [t('three separate coloured spots')] }], ok: 'yes',
          note: t('The dyes separate into spots. This tells you how many dyes there are and, with known dyes beside it, which ones. Lab 2 runs this experiment and measures R<sub>F</sub> values.') };
        return { bins: [{ label: t('On the paper'), items: [t('a faint smear')] }], ok: 'no',
          note: t('Chromatography separates tiny amounts of dissolved substances so you can identify them. It does not give you a usable sample of anything.') };
      }
      if (tech === 'recryst') {
        if (impure.length) return { bins: [{ label: t('Crystals on the filter paper'), items: [t('benzoic acid (purer)')] }, { label: t('In the filtrate'), items: [t('soluble impurity'), t('a little benzoic acid')] }], ok: 'yes',
          note: t('Benzoic acid dissolves well in hot water and poorly in cold water. The impurity is present in a small amount, so it stays dissolved when the solution cools. You lose a little product, which stays in solution.') };
        return { bins: [{ label: t('Nothing useful'), items: [names(P)], lost: true }], ok: 'no',
          note: t('Recrystallization purifies a solid that contains small amounts of impurities. This mixture is not like that.') };
      }
      if (tech === 'seq') {
        if (impure.length) return { bins: [{ label: t('On the filter paper'), items: [t('most of the benzoic acid, still impure')] }, { label: t('In the evaporating basin'), items: [t('soluble impurity'), t('some benzoic acid')] }, { label: t('Lost to the air'), items: [t('water')], lost: true }], ok: 'part',
          note: t('Cold water dissolves only a little benzoic acid, so most stays on the paper with impurity still inside the crystals. Recrystallization is designed for this job.') };
        var out = [];
        if (insol.length || dyes.length) out.push({ label: t('On the filter paper (residue)'), items: insol.map(function (p) { return p.name; }) });
        out = out.filter(function (b) { return b.items.length; });
        var basin = solutes.concat(dyes);
        if (basin.length) out.push({ label: t('In the evaporating basin'), items: basin.map(function (p) { return p.name; }) });
        out.push({ label: t('Lost to the air'), items: [t('water')].concat(liquids.filter(function (p) { return p.id !== 'water'; }).map(function (p) { return p.name; })), lost: true });
        return { bins: out, note: t('Water dissolves the soluble solid. Filtration holds back the insoluble solid. Evaporation removes the water from the filtrate. Rinse and dry the residue, and dry the crystals.') };
      }
      if (!liquids.length) {
        if (tech === 'filter') return { bins: [{ label: t('On the filter paper'), items: [names(P)] }], ok: 'no', note: t('Filtration needs a liquid. A dry mixture just sits on the paper. Dissolve the soluble part first.') };
        return { bins: [{ label: t('Still in the container'), items: [names(P)] }], ok: 'no', note: t('There is no liquid to evaporate or boil, so nothing separates. Heating a dry mixture does not separate these solids.') };
      }
      if (tech === 'filter') {
        var res = insol.map(function (p) { return p.name; });
        var filt = solutes.concat(dyes, liquids).map(function (p) { return p.name; });
        var b = [];
        if (res.length) b.push({ label: t('On the filter paper (residue)'), items: res });
        else b.push({ label: t('On the filter paper (residue)'), items: [t('nothing')] });
        b.push({ label: t('Passes through (filtrate)'), items: [filt.join(' + ')] });
        return { bins: b, note: res.length ? t('The solid grains are too big to pass through the paper. The liquid passes through.') : t('Dissolved particles are as small as the solvent particles. They pass straight through the filter paper.') };
      }
      if (tech === 'evap') {
        var left = nonLiquid.map(function (p) { return p.name; });
        return { bins: [{ label: t('Left in the basin'), items: left.length ? [left.join(' + ')] : [t('nothing')] }, { label: t('Lost to the air'), items: [liquids.map(function (p) { return p.name; }).join(' + ')], lost: true }],
          note: t('The liquid turns to vapour and escapes. Anything that does not evaporate is left behind.') };
      }
      if (tech === 'distil') {
        var bpRead;
        if (liquids.length > 1) {
          bpRead = t('The still-head thermometer starts at about {a} °C and rises slowly towards 100 °C.', { a: f1(half(rnd(78.5, 80.5))) });
          return { bins: [{ label: t('Collected as distillate'), items: [t('mostly ethanol, with some water')] }, { label: t('Left in the flask'), items: [t('mostly water')] }], ok: 'part',
            note: t('Ethanol boils at 78 °C and water at 100 °C, so the first distillate is rich in ethanol. Both liquids are volatile, so simple distillation cannot give pure ethanol.') + ' ' + bpRead };
        }
        bpRead = t('The still-head thermometer reads {a} °C while the distillate is collected.', { a: f1(half(rnd(99.4, 100.2))) });
        var leftD = nonLiquid.map(function (p) { return p.name; });
        return { bins: [{ label: t('Collected as distillate'), items: [liquids[0].name] }, { label: t('Left in the flask'), items: [leftD.join(' + ')] }],
          note: t('The liquid boils, the vapour condenses in the condenser and is collected. Substances that do not boil stay in the flask.') + ' ' + bpRead };
      }
      return { bins: [] };
    }
    function judge(m, sim, tech) {
      if (sim.ok) return sim.ok;
      if (m.want[0] === 'dyes') return 'no';                      // you need to see the dyes apart, not just keep them
      if (m.parts[0].id === 'sand' && m.wet && (tech === 'evap' || tech === 'distil')) return 'part';
      // Each wanted part must end up in a bin of its own that is not "lost".
      var good = m.want.every(function (id) {
        var name = m.parts.filter(function (p) { return p.id === id; })[0].name;
        return sim.bins.some(function (b) { return !b.lost && b.items.length === 1 && b.items[0] === name; });
      });
      return good ? 'yes' : 'no';
    }
    function tryIt() {
      var m = MIX[Number(mixSel.value)], tech = techSel.value, label = TECH.filter(function (x) { return x.value === tech; })[0].label;
      var sim = simulate(m, tech), v = judge(m, sim, tech);
      if (v === 'part' && !sim.ok) sim.note += ' ' + t('You do get the sand, but boiling off all that water is slow and wastes energy. Filtration does the job in minutes.');
      bins.innerHTML = '';
      sim.bins.forEach(function (b) {
        var box = el('div', { class: 'lab-bin' + (b.lost ? ' lab-bin--lost' : '') });
        box.appendChild(el('p', { class: 'lab-bin__label', html: b.label }));
        var ul = el('ul', { class: 'lab-bin__items' });
        b.items.forEach(function (it) { ul.appendChild(el('li', { html: it })); });
        box.appendChild(ul); bins.appendChild(box);
      });
      var verdict = v === 'yes' ? t('This works.') : v === 'part' ? t('This only partly works.') : t('This does not work.');
      fb.set(v === 'yes' ? 'right' : v === 'part' ? 'partial' : 'wrong', verdict, '<p>' + (sim.note || '') + '</p>' +
        (m.want[0] === 'dyes' && tech !== 'chroma' ? '<p>' + t('Hint: you only need to see the dyes, not collect them.') + '</p>' : ''));
      setV(verdict);
      log.add([m.name, label, v === 'yes' ? t('works') : v === 'part' ? t('partly') : t('does not work')]);
    }
    newMix();
  });

  /* =======================================================================
     2. Recrystallization of impure benzoic acid
     ======================================================================= */
  S1.widgets.register('lab-separation.recryst', function (w) {
    var vol = w.slider({ label: t('Volume of hot water'), min: 20, max: 200, step: 5, value: 45, unit: 'cm3', onInput: function () { cv.draw(); } });
    var hot = w.select({ label: t('Hot filtration'), options: [{ value: 'yes', label: t('Filter while hot') }, { value: 'no', label: t('Skip it') }], value: 'yes' });
    var cool = w.select({ label: t('Cooling'), options: [
      { value: 'slow-ice', label: t('Slowly to room temperature, then ice bath') },
      { value: 'slow-room', label: t('Slowly to room temperature only') },
      { value: 'fast-ice', label: t('Straight into an ice bath') }], value: 'slow-ice', onChange: function () { cv.draw(); } });
    var rinse = w.select({ label: t('Rinse the crystals with'), options: [
      { value: 'cold', label: t('a little ice-cold water') }, { value: 'warm', label: t('warm water') }, { value: 'none', label: t('no rinse') }], value: 'cold' });
    var dry = w.select({ label: t('Before weighing'), options: [
      { value: 'constant', label: t('Dry to constant mass') }, { value: 'damp', label: t('Weigh straight away') }], value: 'constant' });
    w.button(t('Run recrystallization'), run, { primary: true });
    w.button(t('Clear table'), function () { table.clear(); });

    var cv = w.canvas({ height: function (W) { return W < 420 ? 250 : 230; }, label: t('Graph of the solubility of benzoic acid in water against temperature, with a line for the concentration of your hot solution and the mass that crystallizes on cooling') });
    var note = el('p', { class: 'lab-note' }); w.stage.appendChild(note);
    var table = dataTable(w.stage, t('Raw data (balance reads to ±0.01 g)'), [
      { label: t('Run') }, { label: t('Method'), wide: true }, { label: t('m(impure sample) / g'), num: true }, { label: t('m(watch glass) / g'), num: true },
      { label: t('m(watch glass + product) / g'), num: true }, { label: t('m(product) / g'), num: true }, { label: t('Recovery / %'), num: true }]);
    var setM = w.readoutItem(t('Mass of product')), setR = w.readoutItem(t('Recovery')), setA = w.readoutItem(t('What you see'), { text: true });
    setM('–'); setR('–'); setA(t('Set up the method and press Run recrystallization.'));

    function Tfinal() { return cool.value === 'slow-room' ? T_ROOM : T_ICE; }
    function shortMethod() {
      var c = { 'slow-ice': t('slow + ice'), 'slow-room': t('slow, room temp.'), 'fast-ice': t('fast, ice') }[cool.value];
      var r = { cold: t('cold rinse'), warm: t('warm rinse'), none: t('no rinse') }[rinse.value];
      return t('{v} cm³; {hot}; {cool}; {rinse}; {dry}', { v: vol.value, hot: hot.value === 'yes' ? t('hot filtered') : t('not filtered hot'), cool: c, rinse: r, dry: dry.value === 'constant' ? t('dried') : t('damp') });
    }

    function run() {
      var V = vol.value, Tf = Tfinal();
      var mSample = rnd(1.95, 2.10);
      var fBA = rnd(0.905, 0.915), fSand = 0.04, mBA = mSample * fBA, mSand = mSample * fSand, mImp = mSample - mBA - mSand;
      var cap = solubility(T_HOT) * V / 100;                       // most benzoic acid the hot water can hold
      var dissolved = Math.min(mBA, cap), undissolved = mBA - dissolved;
      var sat = dissolved / cap, funnel = 0, sandIn = 0, extraBA = 0;
      if (hot.value === 'yes') {
        funnel = dissolved * 0.10 * Math.max(0, (sat - 0.9) / 0.1) * rnd(0.7, 1.1);   // crystals that form early in the funnel
        if (undissolved > 0) funnel += undissolved;                                     // undissolved solid stays with the sand
      } else { sandIn = mSand; extraBA = undissolved; }
      var inSolution = dissolved - (hot.value === 'yes' ? Math.min(funnel, dissolved) : 0);
      var retained = Math.min(inSolution, solubility(Tf) * V / 100);
      var crystals = Math.max(0, inSolution - retained);
      var rinseLoss = rinse.value === 'warm' ? Math.min(crystals, rnd(0.12, 0.22)) : rinse.value === 'cold' ? Math.min(crystals, rnd(0.01, 0.03)) : 0;
      crystals -= rinseLoss;
      crystals *= 1 - rnd(0.02, 0.05);                                // left on the paper, the rod and the glass
      // Soluble impurity carried into the product (mass % of the dry product)
      var incl = (cool.value === 'fast-ice' ? rnd(1.3, 1.9) : rnd(0.15, 0.4)) + (rinse.value === 'none' ? rnd(1.2, 1.8) : 0);
      var totalBA = crystals + extraBA;
      var impIn = totalBA > 0 ? Math.min(mImp, totalBA * incl / (100 - incl)) : 0;
      var dryMass = totalBA + impIn + sandIn;
      var water = dry.value === 'damp' ? dryMass * rnd(0.10, 0.22) : 0;
      var product = dryMass + water;
      var glass = rnd(21, 31);
      var rS = r2(mSample), rG = r2(glass), rGP = r2(glass + product), rP = r2(rGP - rG), rec = rS > 0 ? rP / rS * 100 : 0;
      var x = totalBA + impIn > 0 ? impIn / (totalBA + impIn) * 100 : 0;
      var n = RUNS.length + 1;
      addRun({ n: n, x: x + (water > 0 ? 2.5 : 0), sand: sandIn > 0, damp: water > 0, mass: rP });
      table.add([String(n), shortMethod(), f2(rS), f2(rG), f2(rGP), f2(rP), chem.toSig(rec, 3)]);
      setM(f2(rP) + ' g'); setR(chem.toSig(rec, 3) + ' %');
      var seen = [];
      if (product < 0.02) seen.push(t('Almost no crystals form. Too much water: the benzoic acid stays dissolved.'));
      else {
        seen.push(cool.value === 'fast-ice' ? t('Small, fine crystals.') : t('Large, needle-shaped white crystals.'));
        if (sandIn > 0) seen.push(t('Grey grains of sand are mixed with the crystals.'));
        if (water > 0) seen.push(t('The crystals look wet and stick together.'));
        if (rinse.value === 'none') seen.push(t('The crystals are slightly off-white.'));
      }
      setA(seen.join(' '));
      var why = [];
      if (undissolved > 0.005) why.push(hot.value === 'yes' ? t('Not all of the benzoic acid dissolved in {v} cm³ of hot water. The undissolved solid was filtered off with the sand and lost.', { v: V }) : t('Not all of the benzoic acid dissolved, and it was not filtered off, so it ended up in the product with the sand.'));
      else if (funnel > 0.02) why.push(t('The hot solution was nearly saturated, so some crystals formed early in the filter funnel and were lost.'));
      why.push(t('About {m} g of benzoic acid stayed dissolved in the cold filtrate.', { m: f2(retained) }));
      if (rinse.value === 'warm') why.push(t('The warm rinse dissolved some of the crystals.'));
      if (water > 0) why.push(t('The mass includes water, so the recovery is too high.'));
      note.innerHTML = why.join(' ');
      cv.draw();
    }

    cv.draw(function (ctx, W, H) {
      var f = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), aInk = w.color('--accent-ink'), lineC = w.color('--line-strong'), soft = w.color('--accent-soft');
      var L = 44, R = W - 12, T = 16, B = H - 40, YMAX = 182 / vol.value > 5.8 ? 10 : 6;
      function X(Tc) { return L + Tc / 100 * (R - L); }
      function Y(s) { return B - Math.min(s, YMAX) / YMAX * (B - T); }
      ctx.strokeStyle = lineC; ctx.lineWidth = 1; ctx.fillStyle = ink2; ctx.font = f.mono(10); ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      for (var s = 0; s <= YMAX; s += 2) { ctx.beginPath(); ctx.moveTo(L - 4, Y(s)); ctx.lineTo(L, Y(s)); ctx.stroke(); ctx.fillText(String(s), L - 6, Y(s)); }
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (var tc = 0; tc <= 100; tc += 20) { ctx.beginPath(); ctx.moveTo(X(tc), B); ctx.lineTo(X(tc), B + 4); ctx.stroke(); ctx.fillText(String(tc), X(tc), B + 6); }
      ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(L, T); ctx.lineTo(L, B); ctx.lineTo(R, B); ctx.stroke();
      ctx.font = f.body(11); ctx.fillStyle = ink2; ctx.fillText(t('temperature / °C'), (L + R) / 2, B + 22);
      ctx.save(); ctx.translate(11, (T + B) / 2); ctx.rotate(-Math.PI / 2); ctx.textBaseline = 'middle'; ctx.fillText(t('solubility / g per 100 cm³'), 0, 0); ctx.restore();
      // solubility curve
      ctx.strokeStyle = ink2; ctx.lineWidth = 2; ctx.beginPath();
      for (var k = 0; k <= 100; k++) { var yy = Y(solubility(k)); if (k) ctx.lineTo(X(k), yy); else ctx.moveTo(X(k), yy); }
      ctx.stroke();
      ctx.fillStyle = ink2; ctx.font = f.body(11); ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
      ctx.fillText(t('solubility curve'), X(100) - 2, Y(solubility(100)) - 4);
      // concentration of the hot solution, if all 1.82 g dissolved
      var V = vol.value, c = 1.82 / V * 100, Tf = Tfinal(), sHot = solubility(T_HOT), sCold = solubility(Tf);
      var cEff = Math.min(c, sHot);
      ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(X(Tf), Y(cEff)); ctx.lineTo(X(T_HOT), Y(cEff)); ctx.stroke(); ctx.setLineDash([]);
      // vertical bar at the final temperature: crystals (top part) and still dissolved (bottom part)
      var bx = X(Tf) + 4, bw = 12;
      ctx.fillStyle = soft; ctx.fillRect(bx, Y(cEff), bw, Y(sCold) - Y(cEff));
      ctx.strokeStyle = accent; ctx.lineWidth = 1.5; ctx.strokeRect(bx + 0.5, Y(cEff) + 0.5, bw - 1, Math.max(1, Y(sCold) - Y(cEff)) - 1);
      ctx.fillStyle = lineC; ctx.fillRect(bx, Y(sCold), bw, Math.max(2, B - Y(sCold)));
      ctx.fillStyle = aInk; ctx.font = f.body(11, true); ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      var midY = (Y(cEff) + Y(sCold)) / 2;
      if (Y(sCold) - Y(cEff) > 14) ctx.fillText(t('crystallizes'), bx + bw + 5, midY);
      ctx.fillStyle = ink2; ctx.font = f.body(10.5);
      ctx.textBaseline = 'bottom'; ctx.fillText(t('stays dissolved'), bx + bw + 5, Math.min(B - 5, Y(sCold) - 3));
      // hot point marker
      ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(X(T_HOT), Y(cEff), 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = ink; ctx.font = f.body(11); ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
      var msg = c > sHot + 1e-9 ? t('{v} cm³: not all dissolves at 95 °C', { v: V }) : t('{v} cm³ of hot solution', { v: V });
      var my = Math.max(T + 12, Y(Math.min(c, YMAX)) - 6);
      ctx.fillText(msg, X(T_HOT) - 6, my);
      if (c > YMAX) { ctx.textAlign = 'left'; ctx.fillText('↑', X(T_HOT) + 6, T + 12); }
    });
  });

  /* =======================================================================
     3. Melting point apparatus
     ======================================================================= */
  S1.widgets.register('lab-separation.meltpoint', function (w) {
    var BASE = [{ value: 'crude', label: t('Impure sample (before recrystallization)') }, { value: 'pure', label: t('Pure benzoic acid (reference)') }];
    function sampleOptions() {
      return BASE.concat(RUNS.map(function (r) { return { value: 'run' + r.n, label: t('Your product from run {n}', { n: r.n }) }; }));
    }
    var samp = w.select({ label: t('Sample in the capillary'), options: sampleOptions(), value: 'crude', onChange: reset });
    var rate = w.select({ label: t('Heating'), options: [
      { value: 'fast', label: t('Fast: 10 °C per minute all the way') },
      { value: 'two', label: t('Fast to 110 °C, then 2 °C per minute') }], value: 'two', onChange: reset });
    var playBtn = w.button(t('Start heating'), toggle, { primary: true });
    var startBtn = w.button(t('Melting starts now'), function () { record('start'); });
    var endBtn = w.button(t('Fully melted now'), function () { record('end'); });
    w.button(t('New capillary'), reset);
    var listener = function () { samp.setOptions(sampleOptions()); };
    runListeners.push(listener);
    w.onCleanup(function () { var i = runListeners.indexOf(listener); if (i > -1) runListeners.splice(i, 1); });

    var cv = w.canvas({ height: 230, label: t('Melting point apparatus: a thermometer and a magnified capillary tube holding the sample, which turns from solid to liquid as it is heated') });
    var fb = feedback(w.stage);
    var table = dataTable(w.stage, t('Raw data (thermometer reads to ±0.5 °C)'), [
      { label: t('Sample') }, { label: t('Heating') }, { label: t('Melting starts / °C'), num: true }, { label: t('Fully melted / °C'), num: true }, { label: t('Range / °C'), num: true }]);
    var setT = w.readoutItem(t('Thermometer')), setTime = w.readoutItem(t('Time')), setS = w.readoutItem(t('Sample'), { text: true });

    var T0 = 95, Tblock, time, running, melt, startRead, endRead, onset, endT, sand, damp, offset = 0;
    var loop = w.loop(function (dt) {
      // Display speed: about 1.5 °C of thermometer rise per real second, whatever the simulated rate.
      var r = currentRate(), dT = Math.min(dt, 0.1) * 1.5;
      Tblock += dT; time += dT / r;
      if (Tblock >= 135) { Tblock = 135; stop(); }
      update();
    });
    function currentRate() { return rate.value === 'fast' || Tblock < 110 ? 10 : 2; }
    function sampleProps() {
      var v = samp.value, x = 0, s = false, d = false;
      if (v === 'crude') x = rnd(5.2, 5.8);
      else if (v === 'pure') x = 0;
      else { var r = RUNS.filter(function (q) { return 'run' + q.n === v; })[0]; if (r) { x = r.x; s = r.sand; d = r.damp; } }
      onset = MP_LIT - 1.5 * x - rnd(0.4, 0.8);
      endT = MP_LIT - 0.45 * x - rnd(0, 0.3);
      sand = s; damp = d;
    }
    function reset() {
      if (loop) loop.stop(); running = false; Tblock = T0; time = 0; melt = 0; startRead = null; endRead = null;
      offset = gauss(0.15); sampleProps(); fb.clear(); playBtn.textContent = t('Start heating'); update();
    }
    function stop() { loop.stop(); running = false; playBtn.textContent = t('Start heating'); }
    function toggle() {
      if (running) { stop(); return; }
      if (Tblock >= 135) reset();
      running = true; playBtn.textContent = t('Pause'); loop.start(true);
    }
    function reading() { return half(Tblock + offset); }   // a 1 °C thermometer, read to the nearest 0.5 °C
    function sampleTemp() { return Tblock - currentRate() * (0.15 + 0.2 * melt); }   // the sample lags behind the thermometer, more while it absorbs heat to melt
    function record(which) {
      var r = reading();
      if (which === 'start') { startRead = r; fb.set('', t('Recorded: melting starts at {T} °C.', { T: f1(r) }), '<p>' + t('Now watch for the moment the last solid disappears.') + '</p>'); return; }
      if (startRead == null) { fb.set('partial', t('Record the start first.'), '<p>' + t('Press "Melting starts now" when you first see liquid in the tube.') + '</p>'); return; }
      endRead = r;
      var range = endRead - startRead;
      var name = samp.el.querySelector('select').selectedOptions[0].textContent;
      table.add([name, rate.value === 'fast' ? t('fast') : t('slow near the melting point'), f1(startRead), f1(endRead), f1(range)]);
      var msgs = [];
      if (range < 0) msgs.push(t('The end is below the start. Repeat with a new capillary.'));
      else if (range <= 1.5 && Math.abs(endRead - MP_LIT) <= 1) msgs.push(t('A sharp melting range close to the literature value of 122 °C: the sample is close to pure.'));
      else if (endRead < MP_LIT - 1 || range > 1.5) msgs.push(t('The sample melts below 122 °C and over a range of {r} °C. Impurities lower the melting point and widen the range.', { r: f1(range) }));
      if (rate.value === 'fast') msgs.push(t('You heated fast. The thermometer runs ahead of the sample, so the readings are too high and the range looks wider. Heat slowly near the melting point.'));
      if (sand) msgs.push(t('Grains of sand did not melt at all. Sand is an insoluble impurity: hot filtration removes it.'));
      if (damp) msgs.push(t('The sample was damp. Water is an impurity too: dry the product before you test it.'));
      fb.set(range <= 1.5 && Math.abs(endRead - MP_LIT) <= 1 && rate.value !== 'fast' && !sand && !damp ? 'right' : 'partial', t('Range {a}–{b} °C', { a: f1(startRead), b: f1(endRead) }), '<p>' + msgs.join(' ') + '</p>');
    }
    function update() {
      var Ts = sampleTemp();
      melt = endT > onset ? S1.util.clamp((Ts - onset) / (endT - onset), 0, 1) : (Ts >= endT ? 1 : 0);
      setT(f1(reading()) + ' °C');
      var mm = Math.floor(time), ss = Math.floor((time - mm) * 60);
      setTime(t('{m} min {s} s', { m: mm, s: ss < 10 ? '0' + ss : ss }) + ' · ' + t('{r} °C per min', { r: currentRate() }));
      var state = melt <= 0 ? t('White solid.') : melt < 0.12 ? t('The solid shrinks and the first drops of liquid appear.') : melt < 0.9 ? t('Partly melted: solid and liquid together.') : melt < 1 ? t('Almost all liquid, a few crystals left.') : (sand ? t('Clear liquid, but some gritty grains have not melted.') : t('Clear liquid.'));
      setS(state);
      cv.draw();
    }
    cv.draw(function (ctx, W, H) {
      var f = fonts(w), ink = w.color('--ink'), ink2 = w.color('--ink-2'), ink3 = w.color('--ink-3'), accent = w.color('--accent'), soft = w.color('--accent-soft'), surf = w.color('--surface-2'), lineC = w.color('--line-strong');
      // thermometer
      var tx = 34, top = 14, bot = H - 30, tmin = 90, tmax = 135;
      function TY(v) { return bot - (v - tmin) / (tmax - tmin) * (bot - top); }
      ctx.fillStyle = surf; ctx.fillRect(tx - 7, top - 6, 14, bot - top + 12);
      ctx.strokeStyle = lineC; ctx.lineWidth = 1; ctx.strokeRect(tx - 6.5, top - 5.5, 13, bot - top + 11);
      ctx.fillStyle = accent; ctx.fillRect(tx - 3, TY(Tblock), 6, bot - TY(Tblock) + 6);
      ctx.beginPath(); ctx.arc(tx, bot + 12, 9, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = ink; ctx.fillStyle = ink2; ctx.font = f.mono(10); ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      for (var v = tmin; v <= tmax; v++) {
        var y = TY(v), big = v % 5 === 0;
        ctx.lineWidth = big ? 1.2 : 0.6; ctx.beginPath(); ctx.moveTo(tx + 7, y); ctx.lineTo(tx + (big ? 15 : 11), y); ctx.stroke();
        if (big) ctx.fillText(String(v), tx + 18, y);
      }
      ctx.fillStyle = ink; ctx.font = f.body(11); ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText('°C', tx + 26, bot + 14);
      // magnified capillary
      var cx = Math.min(W - 70, Math.max(150, W * 0.62)), cw = 34, cTop = 40, cBot = H - 50;
      ctx.fillStyle = ink2; ctx.font = f.body(11); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
      ctx.fillText(t('capillary (magnified)'), cx, cTop - 10);
      ctx.strokeStyle = ink2; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cx - cw / 2, cTop); ctx.lineTo(cx - cw / 2, cBot); ctx.arc(cx, cBot, cw / 2, Math.PI, 0, true); ctx.lineTo(cx + cw / 2, cTop); ctx.stroke();
      // sample column: solid packed at the bottom, melting from the outside in
      var colTop = cBot - 70, colH = cBot + cw / 2 - 2 - colTop;
      var liqH = colH * (0.82 + 0.18 * (1 - melt)) * melt;            // liquid takes slightly less room than the powder
      var solidH = colH * (1 - melt) * 0.98;
      // liquid
      if (melt > 0) {
        ctx.fillStyle = soft; ctx.fillRect(cx - cw / 2 + 2, cBot + cw / 2 - 3 - Math.max(liqH, solidH * 0.2 + liqH), cw - 4, Math.max(liqH, solidH * 0.2 + liqH));
      }
      // solid as a hatched block
      if (solidH > 0.5) {
        var sy = cBot + cw / 2 - 3 - solidH, sx = cx - (cw / 2 - 3) * (0.4 + 0.6 * (1 - melt)), sw = (cw - 6) * (0.4 + 0.6 * (1 - melt));
        ctx.save(); ctx.beginPath(); ctx.rect(sx, sy, sw, solidH); ctx.clip();
        ctx.fillStyle = surf; ctx.fillRect(sx, sy, sw, solidH);
        ctx.strokeStyle = ink3; ctx.lineWidth = 1;
        for (var d = -40; d < solidH + 40; d += 6) { ctx.beginPath(); ctx.moveTo(sx, sy + d); ctx.lineTo(sx + sw, sy + d - sw); ctx.stroke(); }
        ctx.restore();
        ctx.strokeStyle = ink3; ctx.strokeRect(sx + 0.5, sy + 0.5, sw - 1, solidH - 1);
      }
      if (sand && melt >= 0.9) {
        ctx.fillStyle = ink; [[-8, -6], [5, -12], [-2, -18], [9, -4]].forEach(function (p) { ctx.beginPath(); ctx.arc(cx + p[0], cBot + cw / 2 - 4 + p[1], 1.8, 0, Math.PI * 2); ctx.fill(); });
      }
      // labels
      ctx.fillStyle = ink; ctx.font = f.body(11); ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      var lx = cx + cw / 2 + 8;
      if (lx + 40 < W) {
        if (solidH > 6) ctx.fillText(t('solid'), lx, cBot + cw / 2 - 3 - solidH / 2);
        if (melt > 0.05) ctx.fillText(t('liquid'), lx, cBot + cw / 2 - 3 - Math.max(liqH, 10) + 6);
      }
      ctx.fillStyle = ink2; ctx.textAlign = 'right'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(t('Model data. Literature value: 122 °C.'), W - 4, H - 4, W - tx - 60);
    });
    reset();
  });
})();
