/* ==========================================================================
   Structure Lab — periodic-data.js   (optional; load after chem.js)
   Property data for trend plots and the periodic table widgets: S1.periodic.

   VALUES AND SOURCES — every number here must be checked against the current
   IB Chemistry data booklet before publication.  null means "not given here":
   the value was uncertain, differs between sources, or does not exist.

   en      Electronegativity, Pauling scale, 1 d.p.  Z = 1–56.
           Source: values as tabulated in the IB Chemistry data booklet (periodic
           trends table), entered from memory of that table.  Noble gases He, Ne,
           Ar and Kr are null (the booklet gives no value); Xe is 2.6.
   ie1     First ionization energy / kJ mol^-1, nearest whole number.  Z = 1–56,
           plus Hf, Au, Hg, Tl, Pb, Bi, Rn.  Source: IB data booklet values, which
           follow the CRC Handbook of Chemistry and Physics.  Period 6 d-block
           elements whose values differ between editions are null.
   radius  Atomic (covalent) radius / pm.  Z = 1–56.  Source: IB data booklet
           values (covalent radii).  Period 6 is null.
   ions    Ionic radius / pm with the ion charge, most common ion first.
           Source: IB data booklet values, which follow Shannon (1976) effective
           ionic radii for six-coordination.  Listed only where well established.
   mp      Melting point / K, nearest kelvin, at about 100 kPa.  Source: CRC
           Handbook of Chemistry and Physics.  null for He (does not solidify at
           this pressure), C and As (sublime), and where the value is uncertain.
           Phosphorus is white phosphorus; sulfur is the rhombic/monoclinic melt at 388 K.
   config  Ground-state electron configuration, built by the Aufbau order with the
           accepted exceptions listed in EXCEPTIONS (Cr, Cu, Nb, Mo, Ru, Rh, Pd, Ag,
           La, Ce, Gd, Pt, Au, Ac, Th, Pa, U, Np, Cm, Lr).  Not from a table.
   Lanthanoids (Z = 57–71) and Z > 86 have a configuration only.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1 = window.S1 || {};

  var DATA = {
    1: {"en": 2.2, "ie1": 1312, "radius": 32, "ions": [], "mp": 14},
    2: {"en": null, "ie1": 2372, "radius": 37, "ions": [], "mp": null},
    3: {"en": 1.0, "ie1": 520, "radius": 130, "ions": [{"charge": 1, "radius": 76}], "mp": 454},
    4: {"en": 1.6, "ie1": 900, "radius": 99, "ions": [{"charge": 2, "radius": 45}], "mp": 1560},
    5: {"en": 2.0, "ie1": 801, "radius": 84, "ions": [{"charge": 3, "radius": 27}], "mp": 2349},
    6: {"en": 2.6, "ie1": 1086, "radius": 75, "ions": [{"charge": 4, "radius": 16}], "mp": null},
    7: {"en": 3.0, "ie1": 1402, "radius": 71, "ions": [{"charge": -3, "radius": 146}], "mp": 63},
    8: {"en": 3.4, "ie1": 1314, "radius": 64, "ions": [{"charge": -2, "radius": 140}], "mp": 54},
    9: {"en": 4.0, "ie1": 1681, "radius": 60, "ions": [{"charge": -1, "radius": 133}], "mp": 53},
    10: {"en": null, "ie1": 2081, "radius": 62, "ions": [], "mp": 25},
    11: {"en": 0.9, "ie1": 496, "radius": 160, "ions": [{"charge": 1, "radius": 102}], "mp": 371},
    12: {"en": 1.3, "ie1": 738, "radius": 140, "ions": [{"charge": 2, "radius": 72}], "mp": 923},
    13: {"en": 1.6, "ie1": 578, "radius": 124, "ions": [{"charge": 3, "radius": 54}], "mp": 933},
    14: {"en": 1.9, "ie1": 787, "radius": 114, "ions": [{"charge": 4, "radius": 40}], "mp": 1687},
    15: {"en": 2.2, "ie1": 1012, "radius": 109, "ions": [{"charge": 5, "radius": 38}], "mp": 317},
    16: {"en": 2.6, "ie1": 1000, "radius": 104, "ions": [{"charge": -2, "radius": 184}], "mp": 388},
    17: {"en": 3.2, "ie1": 1251, "radius": 100, "ions": [{"charge": -1, "radius": 181}], "mp": 172},
    18: {"en": null, "ie1": 1520, "radius": 101, "ions": [], "mp": 84},
    19: {"en": 0.8, "ie1": 419, "radius": 200, "ions": [{"charge": 1, "radius": 138}], "mp": 337},
    20: {"en": 1.0, "ie1": 590, "radius": 174, "ions": [{"charge": 2, "radius": 100}], "mp": 1115},
    21: {"en": 1.4, "ie1": 633, "radius": 159, "ions": [{"charge": 3, "radius": 75}], "mp": 1814},
    22: {"en": 1.5, "ie1": 659, "radius": 148, "ions": [{"charge": 2, "radius": 86}, {"charge": 4, "radius": 61}], "mp": 1941},
    23: {"en": 1.6, "ie1": 651, "radius": 144, "ions": [{"charge": 2, "radius": 79}, {"charge": 5, "radius": 54}], "mp": 2183},
    24: {"en": 1.7, "ie1": 653, "radius": 130, "ions": [{"charge": 3, "radius": 62}, {"charge": 6, "radius": 44}], "mp": 2180},
    25: {"en": 1.6, "ie1": 717, "radius": 129, "ions": [{"charge": 2, "radius": 83}, {"charge": 4, "radius": 53}], "mp": 1519},
    26: {"en": 1.8, "ie1": 762, "radius": 124, "ions": [{"charge": 2, "radius": 61}, {"charge": 3, "radius": 55}], "mp": 1811},
    27: {"en": 1.9, "ie1": 760, "radius": 118, "ions": [{"charge": 2, "radius": 65}, {"charge": 3, "radius": 55}], "mp": 1768},
    28: {"en": 1.9, "ie1": 737, "radius": 117, "ions": [{"charge": 2, "radius": 69}], "mp": 1728},
    29: {"en": 1.9, "ie1": 745, "radius": 122, "ions": [{"charge": 1, "radius": 77}, {"charge": 2, "radius": 73}], "mp": 1358},
    30: {"en": 1.6, "ie1": 906, "radius": 120, "ions": [{"charge": 2, "radius": 74}], "mp": 693},
    31: {"en": 1.8, "ie1": 579, "radius": 123, "ions": [{"charge": 3, "radius": 62}], "mp": 303},
    32: {"en": 2.0, "ie1": 762, "radius": 120, "ions": [{"charge": 4, "radius": 53}], "mp": 1211},
    33: {"en": 2.2, "ie1": 947, "radius": 120, "ions": [{"charge": 3, "radius": 58}, {"charge": 5, "radius": 46}], "mp": null},
    34: {"en": 2.6, "ie1": 941, "radius": 118, "ions": [{"charge": -2, "radius": 198}], "mp": 494},
    35: {"en": 3.0, "ie1": 1140, "radius": 117, "ions": [{"charge": -1, "radius": 196}], "mp": 266},
    36: {"en": null, "ie1": 1351, "radius": 116, "ions": [], "mp": 116},
    37: {"en": 0.8, "ie1": 403, "radius": 215, "ions": [{"charge": 1, "radius": 152}], "mp": 312},
    38: {"en": 1.0, "ie1": 549, "radius": 190, "ions": [{"charge": 2, "radius": 118}], "mp": 1050},
    39: {"en": 1.2, "ie1": 600, "radius": 176, "ions": [{"charge": 3, "radius": 90}], "mp": 1799},
    40: {"en": 1.3, "ie1": 640, "radius": 164, "ions": [{"charge": 4, "radius": 72}], "mp": 2128},
    41: {"en": 1.6, "ie1": 652, "radius": 156, "ions": [], "mp": 2750},
    42: {"en": 2.2, "ie1": 684, "radius": 146, "ions": [], "mp": 2896},
    43: {"en": 2.1, "ie1": 702, "radius": 138, "ions": [], "mp": 2430},
    44: {"en": 2.2, "ie1": 710, "radius": 136, "ions": [], "mp": 2607},
    45: {"en": 2.3, "ie1": 720, "radius": 134, "ions": [], "mp": 2237},
    46: {"en": 2.2, "ie1": 804, "radius": 130, "ions": [], "mp": 1828},
    47: {"en": 1.9, "ie1": 731, "radius": 136, "ions": [{"charge": 1, "radius": 115}], "mp": 1235},
    48: {"en": 1.7, "ie1": 868, "radius": 140, "ions": [{"charge": 2, "radius": 95}], "mp": 594},
    49: {"en": 1.8, "ie1": 558, "radius": 142, "ions": [{"charge": 3, "radius": 80}], "mp": 430},
    50: {"en": 2.0, "ie1": 709, "radius": 140, "ions": [{"charge": 2, "radius": 118}, {"charge": 4, "radius": 69}], "mp": 505},
    51: {"en": 2.0, "ie1": 831, "radius": 140, "ions": [{"charge": 3, "radius": 76}], "mp": 904},
    52: {"en": 2.1, "ie1": 869, "radius": 137, "ions": [{"charge": -2, "radius": 221}], "mp": 723},
    53: {"en": 2.7, "ie1": 1008, "radius": 136, "ions": [{"charge": -1, "radius": 220}], "mp": 387},
    54: {"en": 2.6, "ie1": 1170, "radius": 136, "ions": [], "mp": 161},
    55: {"en": 0.8, "ie1": 376, "radius": 238, "ions": [{"charge": 1, "radius": 167}], "mp": 302},
    56: {"en": 0.9, "ie1": 503, "radius": 206, "ions": [{"charge": 2, "radius": 135}], "mp": 1000},
    72: {"en": null, "ie1": 659, "radius": null, "ions": [], "mp": 2506},
    73: {"en": null, "ie1": null, "radius": null, "ions": [], "mp": 3290},
    74: {"en": null, "ie1": null, "radius": null, "ions": [], "mp": 3695},
    75: {"en": null, "ie1": null, "radius": null, "ions": [], "mp": 3459},
    76: {"en": null, "ie1": null, "radius": null, "ions": [], "mp": 3306},
    77: {"en": null, "ie1": null, "radius": null, "ions": [], "mp": 2719},
    78: {"en": null, "ie1": null, "radius": null, "ions": [], "mp": 2041},
    79: {"en": null, "ie1": 890, "radius": null, "ions": [], "mp": 1337},
    80: {"en": null, "ie1": 1007, "radius": null, "ions": [], "mp": 234},
    81: {"en": null, "ie1": 589, "radius": null, "ions": [], "mp": 577},
    82: {"en": null, "ie1": 716, "radius": null, "ions": [], "mp": 601},
    83: {"en": null, "ie1": 703, "radius": null, "ions": [], "mp": 545},
    84: {"en": null, "ie1": null, "radius": null, "ions": [], "mp": null},
    85: {"en": null, "ie1": null, "radius": null, "ions": [], "mp": null},
    86: {"en": null, "ie1": 1037, "radius": null, "ions": [], "mp": null}
  };

  var ORDER = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'];
  var CAP = { s: 2, p: 6, d: 10, f: 14 };
  var CORES = [[2, 'He'], [10, 'Ne'], [18, 'Ar'], [36, 'Kr'], [54, 'Xe'], [86, 'Rn']];
  // Changes relative to the simple Aufbau filling: {sublevel: electrons}
  var EXCEPTIONS = {
    24: { '4s': 1, '3d': 5 }, 29: { '4s': 1, '3d': 10 },
    41: { '5s': 1, '4d': 4 }, 42: { '5s': 1, '4d': 5 }, 44: { '5s': 1, '4d': 7 }, 45: { '5s': 1, '4d': 8 }, 46: { '5s': 0, '4d': 10 }, 47: { '5s': 1, '4d': 10 },
    57: { '4f': 0, '5d': 1 }, 58: { '4f': 1, '5d': 1 }, 64: { '4f': 7, '5d': 1 },
    78: { '6s': 1, '5d': 9 }, 79: { '6s': 1, '5d': 10 },
    89: { '5f': 0, '6d': 1 }, 90: { '5f': 0, '6d': 2 }, 91: { '5f': 2, '6d': 1 }, 92: { '5f': 3, '6d': 1 }, 93: { '5f': 4, '6d': 1 }, 96: { '5f': 7, '6d': 1 },
    103: { '6d': 0, '7p': 1 }
  };

  /** Occupied sublevels of the neutral atom: [{sub: '1s', n: 2}, ...] in filling order. */
  function occupancy(z) {
    var left = z, occ = {}, i;
    for (i = 0; i < ORDER.length && left > 0; i++) { var c = Math.min(CAP[ORDER[i][1]], left); occ[ORDER[i]] = c; left -= c; }
    var ex = EXCEPTIONS[z];
    if (ex) for (var k in ex) occ[k] = ex[k];
    return ORDER.filter(function (s) { return occ[s] > 0; }).map(function (s) { return { sub: s, n: occ[s] }; });
  }
  /**
   * Electron configuration string.
   * opts.condensed (default true): start from the noble gas core, e.g. '[Ar] 3d5 4s1'.
   * opts.order: 'shell' (default, sublevels sorted by n: 3d before 4s) or 'filling' (4s before 3d).
   * opts.html: superscript the electron counts.
   */
  function config(z, opts) {
    opts = opts || {};
    var occ = occupancy(z), core = null, i;
    if (opts.condensed !== false) for (i = 0; i < CORES.length; i++) if (CORES[i][0] < z) core = CORES[i];
    if (core) { var coreSubs = occupancy(core[0]).map(function (o) { return o.sub; }); occ = occ.filter(function (o) { return coreSubs.indexOf(o.sub) < 0; }); }
    if (opts.order !== 'filling') occ.sort(function (a, b) { return a.sub[0] - b.sub[0] || 'spdf'.indexOf(a.sub[1]) - 'spdf'.indexOf(b.sub[1]); });
    var parts = occ.map(function (o) { return opts.html ? o.sub + '<sup>' + o.n + '</sup>' : o.sub + o.n; });
    return (core ? '[' + core[1] + '] ' : '') + parts.join(' ');
  }

  S1.periodic = {
    data: DATA,
    /** get('Na') or get(11) → {z, symbol, name, ar, group, period, block, category, en, ie1, radius, ions, mp, config}. Missing values are null. */
    get: function (key) {
      var el = S1.chem && S1.chem.element(key);
      if (!el) return null;
      var d = DATA[el.z] || {}, out = {}, k;
      for (k in el) out[k] = el[k];
      out.en = d.en == null ? null : d.en; out.ie1 = d.ie1 == null ? null : d.ie1; out.radius = d.radius == null ? null : d.radius;
      out.ions = d.ions || []; out.mp = d.mp == null ? null : d.mp;
      out.config = config(el.z);
      return out;
    },
    /** series('ie1', 3, 10) → [{z, symbol, value}] for a trend plot (elements with null are left out). prop 'ionRadius' uses the first listed ion. */
    series: function (prop, zFrom, zTo) {
      var out = [];
      for (var z = zFrom; z <= zTo; z++) {
        var e = S1.periodic.get(z); if (!e) continue;
        var v = prop === 'ionRadius' ? (e.ions[0] ? e.ions[0].radius : null) : e[prop];
        if (v != null) out.push({ z: z, symbol: e.symbol, value: v });
      }
      return out;
    },
    config: config,
    occupancy: occupancy
  };
})();
