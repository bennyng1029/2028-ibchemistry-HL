/* ==========================================================================
   Widgets for topic 3.2 — Functional groups: classification of organic compounds
   (SL and HL core: Structure 3.2.1 – 3.2.6).

   s3-2.formulas   one compound, six kinds of formula side by side (with a 3-D model)
   s3-2.skeletal   skeletal-formula reading tutor: reveal the implied C and H atoms
   s3-2.translate  "translate it" quiz: skeletal → condensed / H count / molecular formula
   s3-2.spotter    tap the functional group, then name the GROUP and the CLASS
   s3-2.series     boiling points along a homologous series; predict the next member
   s3-2.namer      IUPAC naming trainer: structure → name (step by step) and name → structure
   s3-2.isomers    isomer builder: draw every structural isomer of a molecular formula
   s3-2.pairs      classify a pair: chain, position or functional group isomers (or the same molecule)
   s3-2.degree     primary / secondary / tertiary classifier

   Part 1 of this file is a small chemistry core with no DOM in it (molecule graphs,
   formulas, a rule-based IUPAC namer limited to the syllabus, functional-group
   perception, 2-D and 3-D coordinates). It is exposed as S1._s32 so it can be tested
   in node (see the scratchpad test script named in the build report).

   Boiling points (°C, whole numbers, at 101 kPa) are from the Wikipedia articles of
   the compounds (infobox values, which cite the CRC Handbook / GESTIS), checked
   November 2026. They are real-world data, not data-booklet values.

   Every user-visible string goes through t("English text", {vars}).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  /* ======================================================================
     PART 1 — chemistry core (no DOM)
     ====================================================================== */
  var VALENCE = { C: 4, N: 3, O: 2, F: 1, Cl: 1, Br: 1, I: 1 };
  var HALO = { F: 'fluoro', Cl: 'chloro', Br: 'bromo', I: 'iodo' };
  var STEMS = ['', 'meth', 'eth', 'prop', 'but', 'pent', 'hex', 'hept', 'oct'];
  var MULT = ['', '', 'di', 'tri', 'tetra'];

  /** Molecule from a small subset of SMILES: C N O F Cl Br I, = and #, branches, ring digits (Kekulé rings). */
  function parse(s) {
    var atoms = [], bonds = [], stack = [], prev = -1, order = 1, rings = {}, i = 0;
    while (i < s.length) {
      var ch = s[i];
      if (ch === '(') { stack.push(prev); i++; }
      else if (ch === ')') { prev = stack.pop(); i++; }
      else if (ch === '=') { order = 2; i++; }
      else if (ch === '#') { order = 3; i++; }
      else if (ch >= '0' && ch <= '9') {
        if (rings[ch] != null) { bonds.push({ a: rings[ch], b: prev, order: order }); delete rings[ch]; }
        else rings[ch] = prev;
        order = 1; i++;
      } else {
        var two = s.substr(i, 2), elx = (two === 'Cl' || two === 'Br') ? two : ch;
        if (!VALENCE[elx]) throw new Error('bad SMILES ' + s);
        atoms.push({ el: elx });
        if (prev >= 0) bonds.push({ a: prev, b: atoms.length - 1, order: order });
        order = 1; prev = atoms.length - 1; i += elx.length;
      }
    }
    return prep({ atoms: atoms, bonds: bonds });
  }
  /** Adds neighbour lists (m.nb), implicit hydrogen counts (m.h) and ring flags (m.ring). */
  function prep(m) {
    var n = m.atoms.length, k;
    m.nb = []; m.h = []; m.ring = [];
    for (k = 0; k < n; k++) m.nb.push([]);
    m.bonds.forEach(function (b) { var o = b.order || 1; m.nb[b.a].push({ j: b.b, o: o }); m.nb[b.b].push({ j: b.a, o: o }); });
    m.ok = true;
    for (k = 0; k < n; k++) {
      var used = m.nb[k].reduce(function (s, x) { return s + x.o; }, 0), hh = VALENCE[m.atoms[k].el] - used;
      if (hh < 0) m.ok = false;
      m.h.push(Math.max(0, hh));
    }
    // ring atoms: what is left after pruning leaves again and again
    var deg = m.nb.map(function (l) { return l.length; }), alive = deg.map(function () { return true; }), changed = true;
    while (changed) {
      changed = false;
      for (k = 0; k < n; k++) if (alive[k] && deg[k] <= 1) { alive[k] = false; changed = true; m.nb[k].forEach(function (x) { if (alive[x.j]) deg[x.j]--; }); }
    }
    m.ring = alive; m.cyclic = alive.some(Boolean);
    return m;
  }
  function order(m, a, b) { for (var k = 0; k < m.nb[a].length; k++) if (m.nb[a][k].j === b) return m.nb[a][k].o; return 0; }

  /** Atom counts, with hydrogens. */
  function counts(m) {
    var c = {};
    m.atoms.forEach(function (a, i) { c[a.el] = (c[a.el] || 0) + 1; if (m.h[i]) c.H = (c.H || 0) + m.h[i]; });
    return c;
  }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  /** 'C2H6O' from counts: C, then H, then the other elements in alphabetical order. */
  function formulaText(c, divide) {
    var keys = Object.keys(c).filter(function (k) { return k !== 'C' && k !== 'H'; }).sort();
    var g = 1;
    if (divide) { g = 0; Object.keys(c).forEach(function (k) { g = gcd(g, c[k]); }); }
    return ['C', 'H'].concat(keys).filter(function (k) { return c[k]; }).map(function (k) { var v = c[k] / g; return k + (v > 1 ? v : ''); }).join('');
  }
  function molecular(m) { return formulaText(counts(m), false); }
  function empirical(m) { return formulaText(counts(m), true); }
  /** HTML for a formula written as plain text: digits after a letter or ')' become subscripts; '=' and '#' become bond signs. */
  function fHtml(s) {
    return String(s).replace(/([A-Za-z\)])(\d+)/g, '$1<sub>$2</sub>').replace(/#/g, '≡');
  }

  /* ---------- canonical form (graph identity) ---------------------------------- */
  function hash53(str) {
    var h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (var i = 0, ch; i < str.length; i++) { ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }
  /** The same string for two drawings of the same molecule, a different string for different molecules. */
  function canon(m) {
    var n = m.atoms.length, k;
    if (m.bonds.length !== n - 1) {                       // has a ring: colour refinement
      var col = m.atoms.map(function (a, i) { return hash53(a.el + m.h[i]); });
      for (var r = 0; r < n; r++) col = col.map(function (c, i) { return hash53(c + '|' + m.nb[i].map(function (x) { return x.o + ':' + col[x.j]; }).sort().join(',')); });
      return 'R' + col.slice().sort().join('.');
    }
    var deg = m.nb.map(function (l) { return l.length; }), left = n, gone = deg.map(function () { return false; });
    var layer = []; for (k = 0; k < n; k++) if (deg[k] <= 1) layer.push(k);
    while (left > 2) {
      var next = [];
      layer.forEach(function (i) { gone[i] = true; left--; m.nb[i].forEach(function (x) { if (!gone[x.j] && --deg[x.j] === 1) next.push(x.j); }); });
      layer = next;
    }
    var centres = []; for (k = 0; k < n; k++) if (!gone[k]) centres.push(k);
    function enc(i, p) {
      var kids = [];
      m.nb[i].forEach(function (x) { if (x.j !== p) kids.push(x.o + enc(x.j, i)); });
      return '(' + m.atoms[i].el + kids.sort().join('') + ')';
    }
    return centres.map(function (c) { return enc(c, -1); }).sort()[0];
  }
  /** Carbon skeleton only (single bonds, no other atoms): equal for position isomers, different for chain isomers. */
  function skeleton(m) {
    var map = {}, atoms = [], bonds = [];
    m.atoms.forEach(function (a, i) { if (a.el === 'C') { map[i] = atoms.length; atoms.push({ el: 'C' }); } });
    m.bonds.forEach(function (b) { if (map[b.a] != null && map[b.b] != null) bonds.push({ a: map[b.a], b: map[b.b], order: 1 }); });
    var seen = atoms.map(function () { return false; }), parts = [];
    var nbs = atoms.map(function () { return []; });
    bonds.forEach(function (b) { nbs[b.a].push(b.b); nbs[b.b].push(b.a); });
    atoms.forEach(function (_, s) {
      if (seen[s]) return;
      var comp = [], stack = [s]; seen[s] = true;
      while (stack.length) { var i = stack.pop(); comp.push(i); nbs[i].forEach(function (j) { if (!seen[j]) { seen[j] = true; stack.push(j); } }); }
      var idx = {}; comp.forEach(function (i, k) { idx[i] = k; });
      parts.push(canon(prep({ atoms: comp.map(function () { return { el: 'C' }; }), bonds: bonds.filter(function (b) { return idx[b.a] != null; }).map(function (b) { return { a: idx[b.a], b: idx[b.b], order: 1 }; }) })));
    });
    return parts.sort().join('+');
  }

  /* ---------- functional groups and classes ------------------------------------ */
  /** List of {key, atoms: [indexes]} — one entry per functional group found. */
  function groups(m) {
    var out = [], used = {};
    function cn(i, el) { return m.nb[i].filter(function (x) { return m.atoms[x.j].el === el; }); }
    m.atoms.forEach(function (a, c) {
      if (a.el !== 'C') return;
      var dblO = m.nb[c].filter(function (x) { return x.o === 2 && m.atoms[x.j].el === 'O'; })[0];
      if (!dblO) return;
      var sO = m.nb[c].filter(function (x) { return x.o === 1 && m.atoms[x.j].el === 'O'; })[0];
      var sN = m.nb[c].filter(function (x) { return x.o === 1 && m.atoms[x.j].el === 'N'; })[0];
      if (sO && m.h[sO.j] === 1) { out.push({ key: 'carboxyl', atoms: [c, dblO.j, sO.j] }); used[sO.j] = used[dblO.j] = true; }
      else if (sO) { out.push({ key: 'ester', atoms: [c, dblO.j, sO.j] }); used[sO.j] = used[dblO.j] = true; }
      else if (sN) { out.push({ key: 'amido', atoms: [c, dblO.j, sN.j] }); used[sN.j] = used[dblO.j] = true; }
      else { out.push({ key: cn(c, 'C').length <= 1 ? 'aldehyde' : 'ketone', atoms: [c, dblO.j] }); used[dblO.j] = true; }
    });
    m.atoms.forEach(function (a, i) {
      if (used[i]) return;
      if (a.el === 'O') {
        if (m.nb[i].length === 1 && m.h[i] === 1) out.push({ key: 'hydroxyl', atoms: [i], on: m.nb[i][0].j });
        else if (m.nb[i].length === 2) out.push({ key: 'alkoxy', atoms: [i] });
      } else if (a.el === 'N') out.push({ key: 'amino', atoms: [i] });
      else if (HALO[a.el]) out.push({ key: 'halogeno', atoms: [i], on: m.nb[i][0].j });
    });
    if (m.cyclic) {
      var ringAtoms = []; m.ring.forEach(function (r, i) { if (r) ringAtoms.push(i); });
      if (ringAtoms.length === 6 && ringAtoms.every(function (i) { return m.atoms[i].el === 'C'; })) out.push({ key: 'phenyl', atoms: ringAtoms });
    }
    m.bonds.forEach(function (b) {
      if (m.atoms[b.a].el === 'C' && m.atoms[b.b].el === 'C' && b.order > 1 && !(m.ring[b.a] && m.ring[b.b])) out.push({ key: b.order === 2 ? 'alkenyl' : 'alkynyl', atoms: [b.a, b.b] });
    });
    return out;
  }
  /** Class key of a compound with one kind of functional group ('alkane' if it has none); null if there are two kinds. */
  var CLASS_OF = { carboxyl: 'carboxylic acid', ester: 'ester', amido: 'amide', aldehyde: 'aldehyde', ketone: 'ketone', hydroxyl: 'alcohol', alkoxy: 'ether', amino: 'amine', halogeno: 'halogenoalkane', alkenyl: 'alkene', alkynyl: 'alkyne' };
  function classKey(m) {
    var keys = {}; groups(m).forEach(function (g) { keys[g.key] = true; });
    var list = Object.keys(keys).filter(function (k) { return k !== 'phenyl'; });
    if (!list.length) return 'alkane';
    if (list.length === 1) return CLASS_OF[list[0]];
    if (list.length === 2 && keys.alkenyl) return CLASS_OF[list[0] === 'alkenyl' ? list[1] : list[0]];   // an unsaturated acid is still classed by its carboxyl group
    return null;
  }
  /** Primary / secondary / tertiary: 1, 2 or 3 (0 if the rule does not apply). Returns {degree, centre, counted: [atoms]}. */
  function degree(m) {
    var g = groups(m).filter(function (x) { return x.key === 'hydroxyl' || x.key === 'halogeno' || x.key === 'amino'; })[0];
    if (!g) return null;
    var centre = g.key === 'amino' ? g.atoms[0] : g.on;
    var counted = m.nb[centre].filter(function (x) { return m.atoms[x.j].el === 'C'; }).map(function (x) { return x.j; });
    return { kind: g.key, centre: centre, hetero: g.atoms[0], counted: counted, degree: counted.length };
  }
  /** How two isomers are related: 'same' | 'functional' | 'position' | 'chain' | 'other' (same class, relation not clear-cut). */
  function relation(a, b) {
    if (canon(a) === canon(b)) return 'same';
    var ka = groups(a).map(function (g) { return g.key; }).sort().join('+'), kb = groups(b).map(function (g) { return g.key; }).sort().join('+');
    if (ka !== kb) return 'functional';
    if (/alkoxy|ester|amino|amido/.test(ka)) return 'other';
    return skeleton(a) === skeleton(b) ? 'position' : 'chain';
  }

  /* ---------- IUPAC names: spec → text ------------------------------------------ */
  /**
   * spec = {n, unsat: null | {type: 'en' | 'yn', loc}, suffix: null | {type: 'ol' | 'al' | 'one' | 'oic', loc}, subs: [{name, loc}]}
   * Returns {prefix, parent, name}. Locants are left out only where no other position is possible
   * (methanol, ethanol, ethene, propene, propanone, butanone, chloroethane).
   */
  function formatName(spec) {
    var n = spec.n, subs = spec.subs || [], by = {};
    subs.forEach(function (s) { (by[s.name] = by[s.name] || []).push(s.loc); });
    var noLoc = n === 1 || (n === 2 && subs.length === 1 && !spec.suffix);
    var prefix = Object.keys(by).sort().map(function (name) {
      var locs = by[name].slice().sort(function (p, q) { return p - q; });
      return (noLoc ? '' : locs.join(',') + '-') + MULT[locs.length] + name;
    }).join('-');
    var stem = STEMS[n], parent, u = spec.unsat, sx = spec.suffix;
    if (!u) parent = stem + 'an';
    else if (n === 2 || (n === 3 && !subs.length && !sx)) parent = stem + u.type;
    else parent = stem + '-' + u.loc + '-' + u.type;
    if (!sx) parent += 'e';
    else if (sx.type === 'al') parent += 'al';
    else if (sx.type === 'oic') parent += 'oic acid';
    else if (sx.type === 'ol') parent += n <= 2 ? 'ol' : '-' + sx.loc + '-ol';
    else if (sx.type === 'one') parent += (!u && (n === 3 || (n === 4 && !subs.length))) ? 'one' : '-' + sx.loc + '-one';
    return { prefix: prefix, parent: parent, name: prefix + parent };
  }
  /** Molecule from a spec (chain atoms first, in order; then the group atoms and the branches). */
  function specToMol(spec) {
    var atoms = [], bonds = [], i;
    for (i = 0; i < spec.n; i++) atoms.push({ el: 'C' });
    for (i = 0; i < spec.n - 1; i++) bonds.push({ a: i, b: i + 1, order: spec.unsat && spec.unsat.loc === i + 1 ? (spec.unsat.type === 'en' ? 2 : 3) : 1 });
    function add(elx, to, o) { atoms.push({ el: elx }); bonds.push({ a: to, b: atoms.length - 1, order: o || 1 }); return atoms.length - 1; }
    var sx = spec.suffix;
    if (sx) {
      var c = sx.loc - 1;
      if (sx.type === 'ol') add('O', c);
      else if (sx.type === 'al' || sx.type === 'one') add('O', c, 2);
      else { add('O', c, 2); add('O', c); }
    }
    (spec.subs || []).forEach(function (s) {
      var c2 = s.loc - 1;
      if (s.name === 'methyl') add('C', c2);
      else if (s.name === 'ethyl') add('C', add('C', c2));
      else Object.keys(HALO).forEach(function (h) { if (HALO[h] === s.name) add(h, c2); });
    });
    return prep({ atoms: atoms, bonds: bonds });
  }
  /** Reads a name written in the style of formatName back into a spec (null if it is not in that style). */
  function parseName(name) {
    var s = name.replace(/ acid$/, ''), subs = [], m;
    var re = /^(?:(\d+(?:,\d+)*)-)?(di|tri|tetra)?(bromo|chloro|fluoro|iodo|methyl|ethyl)-?/;
    while ((m = re.exec(s))) {
      var count = m[2] ? MULT.indexOf(m[2]) : 1, locs = m[1] ? m[1].split(',').map(Number) : null;
      if (locs && locs.length !== count) return null;
      for (var k = 0; k < count; k++) subs.push({ name: m[3], loc: locs ? locs[k] : 1 });
      s = s.slice(m[0].length);
    }
    m = /^(meth|eth|prop|but|pent|hex|hept|oct)(an|en|yn|-(\d+)-en|-(\d+)-yn)(e|ol|-(\d+)-ol|al|one|-(\d+)-one|oic)$/.exec(s);
    if (!m) return null;
    var spec = { n: STEMS.indexOf(m[1]), unsat: null, suffix: null, subs: subs };
    if (m[2] !== 'an') spec.unsat = { type: /en$/.test(m[2]) ? 'en' : 'yn', loc: Number(m[3] || m[4] || 1) };
    var e = m[5];
    if (e === 'al') spec.suffix = { type: 'al', loc: 1 };
    else if (e === 'oic') spec.suffix = { type: 'oic', loc: 1 };
    else if (/ol$/.test(e)) spec.suffix = { type: 'ol', loc: Number(m[6] || 1) };
    else if (/one$/.test(e)) spec.suffix = { type: 'one', loc: Number(m[7] || 2) };
    return spec;
  }

  /* ---------- IUPAC names: molecule → spec (the rule-based namer) ---------------- */
  function cmpArr(a, b) { for (var i = 0; i < Math.max(a.length, b.length); i++) { var x = a[i] == null ? -1 : a[i], y = b[i] == null ? -1 : b[i]; if (x !== y) return x - y; } return 0; }
  /** What the namer needs to know about a molecule, or {fail: reason} if it is outside the naming limits. */
  function perceive(m) {
    if (m.cyclic) return { fail: 'ring' };
    var sufAtom = -1, sufType = null, nSuf = 0, halo = 0, unsat = null, nUnsat = 0, bad = null, sufO = {};
    m.atoms.forEach(function (a, i) {
      if (a.el === 'N') bad = 'nitrogen';
      if (HALO[a.el]) { halo++; if (m.atoms[m.nb[i][0].j].el !== 'C') bad = 'halogen'; }
      if (a.el === 'O' && (m.nb[i].length !== 1 || m.atoms[m.nb[i][0].j].el !== 'C')) bad = 'ether';
    });
    if (bad) return { fail: bad };
    m.atoms.forEach(function (a, c) {
      if (a.el !== 'C') return;
      var os = m.nb[c].filter(function (x) { return m.atoms[x.j].el === 'O'; });
      if (!os.length) return;
      var dbl = os.filter(function (x) { return x.o === 2; }).length, oh = os.length - dbl;
      var nc = m.nb[c].filter(function (x) { return m.atoms[x.j].el === 'C'; }).length;
      nSuf++; sufAtom = c; os.forEach(function (x) { sufO[x.j] = true; });
      if (dbl === 1 && oh === 1) sufType = 'oic';
      else if (dbl === 1 && oh === 0) sufType = nc <= 1 ? 'al' : 'one';
      else if (dbl === 0 && oh === 1) sufType = 'ol';
      else bad = 'two groups';
    });
    if (bad) return { fail: bad };
    if (nSuf > 1) return { fail: 'two groups' };
    if (nSuf && halo) return { fail: 'mixed groups' };
    m.bonds.forEach(function (b) { if (b.order > 1 && m.atoms[b.a].el === 'C' && m.atoms[b.b].el === 'C') { nUnsat++; unsat = b; } });
    if (nUnsat > 1) return { fail: 'two multiple bonds' };
    if (unsat && sufType === 'ol' && (unsat.a === sufAtom || unsat.b === sufAtom)) return { fail: 'enol' };
    return { sufAtom: sufAtom, sufType: sufType, unsat: unsat, sufO: sufO };
  }
  /** Every simple path through carbon atoms (each direction is its own entry). */
  function carbonPaths(m) {
    var out = [];
    m.atoms.forEach(function (a, s) {
      if (a.el !== 'C') return;
      (function walk(path) {
        out.push(path.slice());
        var last = path[path.length - 1];
        m.nb[last].forEach(function (x) { if (m.atoms[x.j].el === 'C' && path.indexOf(x.j) < 0) { path.push(x.j); walk(path); path.pop(); } });
      })([s]);
    });
    return out;
  }
  /** The spec you get if `path` is taken as the parent chain, numbered from path[0]. `complex` is true if a branch is not methyl or ethyl. */
  function specFor(m, P, path) {
    var pos = {}, subs = [], complex = false;
    path.forEach(function (i, k) { pos[i] = k + 1; });
    path.forEach(function (i, k) {
      m.nb[i].forEach(function (x) {
        var j = x.j, e = m.atoms[j].el;
        if (pos[j] || P.sufO[j]) return;
        if (HALO[e]) { subs.push({ name: HALO[e], loc: k + 1 }); return; }
        var heavy = m.nb[j].filter(function (y) { return y.j !== i; });
        if (e === 'C' && x.o === 1 && heavy.length === 0) subs.push({ name: 'methyl', loc: k + 1 });
        else if (e === 'C' && x.o === 1 && heavy.length === 1 && heavy[0].o === 1 && m.atoms[heavy[0].j].el === 'C' && m.nb[heavy[0].j].length === 1) subs.push({ name: 'ethyl', loc: k + 1 });
        else { subs.push({ name: '?', loc: k + 1 }); complex = true; }
      });
    });
    var spec = { n: path.length, unsat: null, suffix: null, subs: subs };
    if (P.sufType) spec.suffix = { type: P.sufType, loc: pos[P.sufAtom] };
    if (P.unsat && pos[P.unsat.a] && pos[P.unsat.b]) spec.unsat = { type: P.unsat.order === 2 ? 'en' : 'yn', loc: Math.min(pos[P.unsat.a], pos[P.unsat.b]) };
    return { spec: spec, complex: complex, path: path };
  }
  /**
   * The IUPAC name of a molecule, within the syllabus limits.
   * Returns {name, prefix, parent, spec, path, decided} or {fail: reason}.
   * Rules, in order: the chain contains the carbon of the hydroxyl / carbonyl / carboxyl group; it is the longest such
   * chain and contains the C=C or C≡C; among equal chains the one with more substituents; then number so that the
   * lowest locant goes to (1) the suffix group, (2) the multiple bond, (3) the substituents taken together,
   * (4) the substituent that comes first in the alphabet.
   */
  function nameOf(m) {
    var P = perceive(m);
    if (P.fail) return P;
    var paths = carbonPaths(m);
    if (!paths.length) return { fail: 'no carbon' };
    if (P.sufAtom >= 0) paths = paths.filter(function (p) { return p.indexOf(P.sufAtom) >= 0; });
    var L = Math.max.apply(null, paths.map(function (p) { return p.length; }));
    paths = paths.filter(function (p) { return p.length === L; });
    if (P.unsat) {
      paths = paths.filter(function (p) { return p.indexOf(P.unsat.a) >= 0 && p.indexOf(P.unsat.b) >= 0; });
      if (!paths.length) return { fail: 'multiple bond off the longest chain' };
    }
    var c = paths.map(function (p) { return specFor(m, P, p); });
    var most = Math.max.apply(null, c.map(function (x) { return x.spec.subs.length; }));
    c = c.filter(function (x) { return x.spec.subs.length === most; });
    if (c.some(function (x) { return x.complex; })) return { fail: 'complex branch' };
    var decided = [];
    function keep(label, keyFn) {
      var keys = c.map(keyFn), best = keys.reduce(function (p, q) { return cmpArr(q, p) < 0 ? q : p; });
      var next = c.filter(function (x, i) { return cmpArr(keys[i], best) === 0; });
      if (next.length < c.length) decided.push(label);
      c = next;
    }
    keep('suffix', function (x) { return [x.spec.suffix ? x.spec.suffix.loc : 0]; });
    keep('unsat', function (x) { return [x.spec.unsat ? x.spec.unsat.loc : 0]; });
    keep('subs', function (x) { return x.spec.subs.map(function (s) { return s.loc; }).sort(function (p, q) { return p - q; }); });
    keep('alpha', function (x) { return x.spec.subs.slice().sort(function (p, q) { return p.name < q.name ? -1 : p.name > q.name ? 1 : p.loc - q.loc; }).map(function (s) { return s.loc; }); });
    var names = {}; c.forEach(function (x) { names[formatName(x.spec).name] = true; });
    if (Object.keys(names).length !== 1) return { fail: 'ambiguous' };
    var f = formatName(c[0].spec);
    return { name: f.name, prefix: f.prefix, parent: f.parent, spec: c[0].spec, path: c[0].path, decided: decided, symmetric: c.length > 1 };
  }
  /** True if a molecule is inside the naming limits of Structure 3.2.5 as this page applies them. */
  function inScope(r) {
    if (!r || r.fail) return false;
    var s = r.spec;
    if (s.n > 6) return false;
    if (s.unsat && s.unsat.type === 'yn' && (s.suffix || s.subs.some(function (x) { return x.name !== 'methyl'; }))) return false;
    return s.subs.length <= 3;
  }

  /* ---------- random molecules for the naming trainer --------------------------- */
  function pick(list, rnd) { return list[Math.floor((rnd || Math.random)() * list.length)]; }
  /** A random nameable molecule. level 1: straight chain, one feature. 2: one branch or a locant to decide. 3: two or three substituents, or C=C plus a group. */
  function randomNamed(level, rnd) {
    rnd = rnd || Math.random;
    for (var tries = 0; tries < 400; tries++) {
      var n = level === 1 ? 2 + Math.floor(rnd() * 4) : 3 + Math.floor(rnd() * 4);
      var spec = { n: n, unsat: null, suffix: null, subs: [] };
      var kind = pick(level === 1 ? ['alkane', 'ol', 'al', 'one', 'oic', 'halo', 'en'] : ['ol', 'ol', 'al', 'one', 'one', 'oic', 'halo', 'halo', 'en', 'alkane', 'yn'], rnd);
      var loc = function () { return 1 + Math.floor(rnd() * n); };
      if (kind === 'ol') spec.suffix = { type: 'ol', loc: loc() };
      else if (kind === 'al') spec.suffix = { type: 'al', loc: 1 };
      else if (kind === 'oic') spec.suffix = { type: 'oic', loc: 1 };
      else if (kind === 'one') { if (n < 3) continue; spec.suffix = { type: 'one', loc: 2 + Math.floor(rnd() * (n - 2)) }; }
      else if (kind === 'en') spec.unsat = { type: 'en', loc: 1 + Math.floor(rnd() * (n - 1)) };
      else if (kind === 'yn') spec.unsat = { type: 'yn', loc: 1 + Math.floor(rnd() * (n - 1)) };
      else if (kind === 'halo') {
        var hn = level === 3 && rnd() < 0.5 ? 2 : 1, hal = pick(['chloro', 'bromo', 'chloro', 'bromo', 'fluoro', 'iodo'], rnd);
        for (var h = 0; h < hn; h++) spec.subs.push({ name: h && rnd() < 0.4 ? pick(['chloro', 'bromo'], rnd) : hal, loc: loc() });
      }
      var nb = level === 1 ? 0 : level === 2 ? (kind === 'alkane' || rnd() < 0.7 ? 1 : 0) : 1 + Math.floor(rnd() * 2);
      if (kind === 'alkane' && level > 1) nb = Math.max(nb, 1);
      for (var b = 0; b < nb; b++) spec.subs.push({ name: n >= 5 && rnd() < 0.15 ? 'ethyl' : 'methyl', loc: loc() });
      if (level === 3 && !spec.unsat && spec.suffix && spec.suffix.type !== 'ol' && n >= 4 && rnd() < 0.3) spec.unsat = { type: 'en', loc: 2 + Math.floor(rnd() * (n - 2)) };
      var m = specToMol(spec);
      if (!m.ok) continue;
      var r = nameOf(m);
      if (!inScope(r)) continue;
      if (level === 1 && r.spec.subs.length > (kind === 'halo' ? 1 : 0)) continue;
      if (level === 2 && r.spec.n < 3) continue;
      r.mol = m;
      return r;
    }
    return null;
  }
  /** Wrong names for a multiple-choice step, each tagged with the slip that produces it. */
  function wrongNames(m, r) {
    var out = [], seen = {}; seen[r.name] = true;
    function push(name, why) { if (name && !seen[name]) { seen[name] = true; out.push({ name: name, why: why }); } }
    var P = perceive(m), rev = specFor(m, P, r.path.slice().reverse());
    push(formatName(rev.spec).name, 'end');
    carbonPaths(m).forEach(function (p) {
      if (p.length >= r.spec.n || p.length < 2) return;
      if (P.sufAtom >= 0 && p.indexOf(P.sufAtom) < 0) return;
      if (P.unsat && (p.indexOf(P.unsat.a) < 0 || p.indexOf(P.unsat.b) < 0)) return;
      var c = specFor(m, P, p);
      if (!c.complex && p.length === r.spec.n - 1) push(formatName(c.spec).name, 'chain');
    });
    var s = r.spec, alt;
    function clone() { return JSON.parse(JSON.stringify(s)); }
    if (s.suffix) {
      var swap = { ol: 'al', al: 'ol', one: 'al', oic: 'al' }[s.suffix.type];
      alt = clone(); alt.suffix.type = swap; if (swap === 'al') alt.suffix.loc = 1;
      if (specToMol(alt).ok) push(formatName(alt).name, 'suffix');
      if (s.suffix.type === 'ol' || s.suffix.type === 'one') { alt = clone(); alt.suffix.loc = s.suffix.loc + (s.suffix.loc < s.n - (s.suffix.type === 'one' ? 1 : 0) ? 1 : -1); if (alt.suffix.loc >= 1) push(formatName(alt).name, 'locant'); }
    }
    if (s.unsat) { alt = clone(); alt.unsat = null; push(formatName(alt).name, 'unsat'); alt = clone(); alt.unsat.loc = s.unsat.loc + (s.unsat.loc < s.n - 1 ? 1 : -1); if (alt.unsat.loc >= 1) push(formatName(alt).name, 'locant'); }
    if (s.subs.length) { alt = clone(); alt.subs[0].loc += alt.subs[0].loc < s.n ? 1 : -1; if (alt.subs[0].loc >= 1) push(formatName(alt).name, 'locant'); }
    if (s.n < 6) { alt = clone(); alt.n = s.n + 1; push(formatName(alt).name, 'count'); }
    if (s.n > 2) { alt = clone(); alt.n = s.n - 1; alt.subs = alt.subs.filter(function (x) { return x.loc <= alt.n; }); if (alt.suffix && alt.suffix.loc > alt.n) alt.suffix.loc = alt.n; if (alt.unsat && alt.unsat.loc > alt.n - 1) alt.unsat = null; push(formatName(alt).name, 'count'); }
    return out;
  }
  /** Different molecules that look close to r (for the name → structure mode). */
  function nearMolecules(r, rnd) {
    var out = [], seen = {}; seen[canon(r.mol)] = true;
    function tryc(spec) {
      var m = specToMol(spec); if (!m.ok) return;
      var q = nameOf(m); if (!inScope(q)) return;
      var k = canon(m); if (seen[k]) return;
      seen[k] = true; q.mol = m; out.push(q);
    }
    var s = r.spec, d, alt;
    function clone() { return JSON.parse(JSON.stringify(s)); }
    for (d = -2; d <= 2; d++) {
      if (!d) continue;
      if (s.suffix && (s.suffix.type === 'ol' || s.suffix.type === 'one')) { alt = clone(); alt.suffix.loc += d; if (alt.suffix.loc >= (alt.suffix.type === 'one' ? 2 : 1) && alt.suffix.loc <= s.n - (alt.suffix.type === 'one' ? 1 : 0)) tryc(alt); }
      if (s.unsat) { alt = clone(); alt.unsat.loc += d; if (alt.unsat.loc >= 1 && alt.unsat.loc < s.n) tryc(alt); }
      s.subs.forEach(function (_, i) { alt = clone(); alt.subs[i].loc += d; if (alt.subs[i].loc >= 1 && alt.subs[i].loc <= s.n) tryc(alt); });
    }
    if (s.suffix && s.suffix.type === 'al' && s.n >= 3) { alt = clone(); alt.suffix = { type: 'one', loc: 2 }; tryc(alt); }
    if (s.suffix && s.suffix.type === 'one') { alt = clone(); alt.suffix = { type: 'al', loc: 1 }; tryc(alt); }
    if (s.suffix && s.suffix.type === 'ol') { alt = clone(); alt.suffix = { type: 'al', loc: 1 }; tryc(alt); }
    if (s.suffix && s.suffix.type === 'oic') { alt = clone(); alt.suffix = { type: 'al', loc: 1 }; tryc(alt); alt = clone(); alt.suffix = { type: 'ol', loc: 1 }; tryc(alt); }
    if (s.suffix && s.suffix.type === 'al') { alt = clone(); alt.suffix = { type: 'oic', loc: 1 }; tryc(alt); }
    if (s.n < 6) { alt = clone(); alt.n++; tryc(alt); }
    if (s.n > 2) { alt = clone(); alt.n--; if (!alt.subs.some(function (x) { return x.loc > alt.n; }) && !(alt.suffix && alt.suffix.loc > alt.n) && !(alt.unsat && alt.unsat.loc >= alt.n)) tryc(alt); }
    if (s.unsat) { alt = clone(); alt.unsat = null; tryc(alt); }
    if (!s.subs.length && s.n >= 3) { alt = clone(); alt.subs.push({ name: 'methyl', loc: 2 }); tryc(alt); }
    return S1.util && S1.util.shuffle && !rnd ? S1.util.shuffle(out) : out;
  }

  /* ---------- 2-D coordinates ---------------------------------------------------- */
  function subtreeSize(m, i, p) { var s = 1; m.nb[i].forEach(function (x) { if (x.j !== p && !m.ring[x.j]) s += subtreeSize(m, x.j, i); }); return s; }
  /** The path the skeletal drawing is laid along: the longest path through the heavy atoms (a C=O oxygen is kept off it where it can be). */
  function mainPath(m) {
    var best = null, bestScore = -1, n = m.atoms.length;
    for (var s = 0; s < n; s++) {
      (function walk(path) {
        var last = path[path.length - 1], ext = false;
        m.nb[last].forEach(function (x) { if (path.indexOf(x.j) < 0) { ext = true; path.push(x.j); walk(path); path.pop(); } });
        if (!ext) {
          var score = path.length * 10;
          [path[0], last].forEach(function (e) { if (m.atoms[e].el === 'O' && m.nb[e][0] && m.nb[e][0].o === 2 && path.length > 2) score -= 1; if (m.atoms[e].el !== 'C') score -= 0; });
          if (m.atoms[path[0]].el !== 'C' && m.atoms[last].el === 'C') score -= 0.5;       // put the hetero end on the right
          if (score > bestScore) { bestScore = score; best = path.slice(); }
        }
      })([s]);
    }
    return best;
  }
  function heteroLabel(m, i) {
    var e = m.atoms[i].el, h = m.h[i];
    if (e === 'C') return '';
    if (e === 'O') return h ? 'OH' : 'O';
    if (e === 'N') return m.nb[i].length === 1 ? (h === 2 ? 'NH2' : 'NH') : 'N';
    return e;
  }
  /**
   * Skeletal layout: {atoms: [{x, y, label, i}], bonds: [{a, b, order}]} in bond lengths, y downwards.
   * opts.path: atom indexes to lay along the zig-zag (default mainPath). Extra entries with i = -1 are the
   * hydrogens drawn on an N inside a chain.
   */
  function layoutSkeletal(m, opts) {
    opts = opts || {};
    var n = m.atoms.length, pos = new Array(n), D = Math.PI / 180, extra = [];
    function put(i, x, y) { pos[i] = { x: x, y: y }; }
    function kids(i, p) { return m.nb[i].map(function (x) { return x.j; }).filter(function (j) { return j !== p && !pos[j]; }); }
    function hOnN(i, dirs) {            // free direction for the H of an in-chain N–H
      if (m.atoms[i].el !== 'N' || m.nb[i].length < 2 || !m.h[i]) return;
      var a = dirs.reduce(function (s, d) { return s + Math.cos(d); }, 0), b = dirs.reduce(function (s, d) { return s + Math.sin(d); }, 0), ang = Math.atan2(-b, -a);
      extra.push({ x: pos[i].x + 0.8 * Math.cos(ang), y: pos[i].y + 0.8 * Math.sin(ang), label: 'H', i: -1, on: i });
    }
    function place(i, p, alpha, turn, onPath) {
      var ch = kids(i, p), main = -1, dirs = [alpha + Math.PI];
      if (onPath) ch.forEach(function (j) { if (onPath[j]) main = j; });
      if (main < 0 && ch.length) { ch.sort(function (a, b) { return subtreeSize(m, b, i) - subtreeSize(m, a, i) || (order(m, i, a) - order(m, i, b)); }); if (subtreeSize(m, ch[0], i) > 1 || ch.length === 1) main = ch[0]; }
      var others = ch.filter(function (j) { return j !== main; }), angs = [], base = alpha - turn * 60 * D;
      if (main >= 0) angs = others.length === 1 ? [base] : [base + 30 * D, base - 30 * D];
      else angs = others.length === 1 ? [alpha + turn * 60 * D] : others.length === 2 ? [alpha + 60 * D, alpha - 60 * D] : [alpha + 60 * D, alpha - 60 * D, alpha];
      if (main >= 0) { var md = alpha + turn * 60 * D; put(main, pos[i].x + Math.cos(md), pos[i].y + Math.sin(md)); dirs.push(md); }
      others.forEach(function (j, k) { put(j, pos[i].x + Math.cos(angs[k]), pos[i].y + Math.sin(angs[k])); dirs.push(angs[k]); });
      hOnN(i, dirs);
      if (main >= 0) place(main, i, alpha + turn * 60 * D, -turn, onPath);
      others.forEach(function (j, k) { place(j, i, angs[k], turn, null); });
    }
    if (m.cyclic) {
      var ringAtoms = [], start = m.ring.indexOf(true), cur = start, prev = -1;
      do { ringAtoms.push(cur); var nx = m.nb[cur].filter(function (x) { return m.ring[x.j] && x.j !== prev; })[0].j; prev = cur; cur = nx; } while (cur !== start && ringAtoms.length < 12);
      // start the ring at the atom carrying the largest substituent, and put that atom on the right
      var big = 0, bigSize = -1;
      ringAtoms.forEach(function (i, k) { m.nb[i].forEach(function (x) { if (!m.ring[x.j]) { var s = subtreeSize(m, x.j, i); if (s > bigSize) { bigSize = s; big = k; } } }); });
      ringAtoms.forEach(function (i, k) { var ang = (30 + 60 * (k - big)) * D; put(i, Math.cos(ang), Math.sin(ang)); });
      ringAtoms.forEach(function (i, k) {
        var ang = (30 + 60 * (k - big)) * D;
        kids(i, -1).forEach(function (j) { put(j, pos[i].x + Math.cos(ang), pos[i].y + Math.sin(ang)); place(j, i, ang, Math.sin(ang) > 0 ? -1 : 1, null); });
      });
    } else {
      var path = opts.path || mainPath(m), onPath = {};
      path.forEach(function (i) { onPath[i] = true; });
      put(path[0], 0, 0.5);
      if (path.length === 1) place(path[0], -1, -150 * D, 1, null);
      else {
        // root: treat it as if a parent sat where the zig-zag would have come from
        var root = path[0], others = kids(root, -1).filter(function (j) { return j !== path[1]; });
        put(path[1], Math.cos(-30 * D), 0.5 + Math.sin(-30 * D));
        var back = [150 * D, -90 * D, -150 * D], dirs = [-30 * D];
        if (others.length === 2) back = [150 * D, -110 * D]; if (others.length === 3) back = [150 * D, -100 * D, -170 * D];
        others.forEach(function (j, k) { put(j, pos[root].x + Math.cos(back[k]), pos[root].y + Math.sin(back[k])); dirs.push(back[k]); });
        hOnN(root, dirs);
        others.forEach(function (j, k) { place(j, root, back[k], 1, null); });
        place(path[1], root, -30 * D, 1, onPath);
      }
    }
    var atoms = m.atoms.map(function (a, i) { return { x: pos[i].x, y: pos[i].y, label: heteroLabel(m, i), i: i }; });
    var bonds = m.bonds.map(function (b) { return { a: b.a, b: b.b, order: b.order }; });
    extra.forEach(function (e) { atoms.push(e); bonds.push({ a: e.on, b: atoms.length - 1, order: 1 }); });
    return { atoms: atoms, bonds: bonds };
  }
  /**
   * Right-angle layout for a full structural formula (explicit: true adds every H) or for a drawing made of
   * CH3 / CH2 / OH groups. Returns {atoms: [{el, x, y, i, h}], bonds}. i is the heavy-atom index (-1 for an H).
   */
  function layoutGrid(m, opts) {
    opts = opts || {};
    var explicit = !!opts.explicit, sx = opts.sx || (explicit ? 1.3 : 1.9), sy = opts.sy || (explicit ? 1.2 : 1.25);
    var n = m.atoms.length, pos = new Array(n), out = [], bonds = [], taken = [];
    function free(x, y) { return taken.every(function (p) { return Math.hypot(p.x - x, p.y - y) > 0.7; }); }
    function put(i, x, y) { pos[i] = { x: x, y: y }; taken.push(pos[i]); }
    function step(d) { return { x: d.x * (d.x ? sx : 0), y: d.y * (d.y ? sy : 0) }; }
    function rot(d, s) { return { x: -d.y * s, y: d.x * s }; }
    function addH(i, x, y) { out.push({ el: 'H', x: x, y: y, i: -1 }); taken.push({ x: x, y: y }); bonds.push({ a: i, b: n + out.length - 1, order: 1 }); }
    function place(i, p, d, onPath, isChain) {
      var ch = m.nb[i].map(function (x) { return x.j; }).filter(function (j) { return j !== p && !pos[j]; }), main = -1;
      if (onPath) ch.forEach(function (j) { if (onPath[j]) main = j; });
      var cand = isChain ? [{ x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }] : [d, rot(d, 1), rot(d, -1)];
      var placed = [];
      if (main >= 0) { var s0 = step({ x: 1, y: 0 }); put(main, pos[i].x + s0.x, pos[i].y + s0.y); placed.push([main, { x: 1, y: 0 }, true]); }
      ch.filter(function (j) { return j !== main; }).sort(function (a, b) { return subtreeSize(m, b, i) - subtreeSize(m, a, i); }).forEach(function (j) {
        for (var k = 0; k < cand.length; k++) {
          var s = step(cand[k]), x = pos[i].x + s.x, y = pos[i].y + s.y;
          if (free(x, y)) { put(j, x, y); placed.push([j, cand[k], false]); return; }
        }
        var s2 = step(cand[0]); put(j, pos[i].x + s2.x * 1.6, pos[i].y + s2.y * 1.6); placed.push([j, cand[0], false]);
      });
      if (explicit) {
        var hd = isChain ? [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }] : [d, rot(d, 1), rot(d, -1)], need = m.h[i];
        for (var k2 = 0; k2 < hd.length && need > 0; k2++) {
          var hx, hy;
          if (isChain || k2 === 0) { hx = pos[i].x + hd[k2].x * 1.05; hy = pos[i].y + hd[k2].y * 1.05; }
          else { hx = pos[i].x + hd[k2].x * 0.92 + d.x * 0.5; hy = pos[i].y + hd[k2].y * 0.92 + d.y * 0.5; }
          if (free(hx, hy) && free(pos[i].x + hd[k2].x * (hd[k2].x ? sx : sy), pos[i].y + hd[k2].y * (hd[k2].x ? sx : sy))) { addH(i, hx, hy); need--; }
        }
        for (var e = 0; need > 0 && e < 8; e++) { var ang = Math.PI / 4 + e * Math.PI / 2 + (e > 3 ? 0.4 : 0), ax = pos[i].x + Math.cos(ang) * 1.05, ay = pos[i].y + Math.sin(ang) * 1.05; if (free(ax, ay)) { addH(i, ax, ay); need--; } }
      }
      placed.forEach(function (q) { place(q[0], i, q[1], q[2] ? onPath : null, q[2]); });
    }
    var path = opts.path || mainPath(m), onPath = {};
    path.forEach(function (i) { onPath[i] = true; });
    put(path[0], 0, 0);
    place(path[0], -1, { x: -1, y: 0 }, onPath, true);
    var atoms = m.atoms.map(function (a, i) { return { el: a.el, x: pos[i].x, y: pos[i].y, i: i, h: m.h[i] }; }).concat(out);
    m.bonds.forEach(function (b) { bonds.push({ a: b.a, b: b.b, order: b.order }); });
    return { atoms: atoms, bonds: bonds };
  }
  /** Full structural formula of a molecule with one benzene ring: ring as a hexagon, every H shown. */
  function layoutRingFull(m) {
    var n = m.atoms.length, pos = new Array(n), out = [], bonds = [], D = Math.PI / 180;
    var ringAtoms = [], start = m.ring.indexOf(true), cur = start, prev = -1;
    do { ringAtoms.push(cur); var nx = m.nb[cur].filter(function (x) { return m.ring[x.j] && x.j !== prev; })[0].j; prev = cur; cur = nx; } while (cur !== start && ringAtoms.length < 12);
    var big = 0, bigSize = -1;
    ringAtoms.forEach(function (i, k) { m.nb[i].forEach(function (x) { if (!m.ring[x.j]) { var s = subtreeSize(m, x.j, i); if (s > bigSize) { bigSize = s; big = k; } } }); });
    function addH(i, x, y) { out.push({ el: 'H', x: x, y: y, i: -1 }); bonds.push({ a: i, b: n + out.length - 1, order: 1 }); }
    function grow(i, p, ang) {
      var ch = m.nb[i].map(function (x) { return x.j; }).filter(function (j) { return j !== p; });
      var dirs = [ang, ang - 90 * D, ang + 90 * D], k = 0;
      ch.sort(function (a, b) { return subtreeSize(m, b, i) - subtreeSize(m, a, i) || (order(m, i, b) - order(m, i, a)); });
      // a C=O oxygen goes to the side, the rest of the chain carries straight on
      var dbl = ch.filter(function (j) { return order(m, i, j) === 2; }), rest = ch.filter(function (j) { return order(m, i, j) !== 2; });
      var seq = rest.length ? [rest[0]].concat(dbl, rest.slice(1)) : dbl;
      seq.forEach(function (j) { var a = dirs[k++]; pos[j] = { x: pos[i].x + 1.25 * Math.cos(a), y: pos[i].y + 1.25 * Math.sin(a) }; grow(j, i, a); });
      for (var h = 0; h < m.h[i] && k < 3; h++) { var a2 = dirs[k++]; addH(i, pos[i].x + 1.05 * Math.cos(a2), pos[i].y + 1.05 * Math.sin(a2)); }
    }
    ringAtoms.forEach(function (i, k) { var ang = 60 * (k - big) * D; pos[i] = { x: 1.3 * Math.cos(ang), y: 1.3 * Math.sin(ang) }; });
    ringAtoms.forEach(function (i, k) {
      var ang = 60 * (k - big) * D, sub = m.nb[i].filter(function (x) { return !m.ring[x.j]; })[0];
      if (sub) { pos[sub.j] = { x: pos[i].x + 1.3 * Math.cos(ang), y: pos[i].y + 1.3 * Math.sin(ang) }; grow(sub.j, i, ang); }
      else addH(i, pos[i].x + 1.05 * Math.cos(ang), pos[i].y + 1.05 * Math.sin(ang));
    });
    var atoms = m.atoms.map(function (a, i) { return { el: a.el, x: pos[i].x, y: pos[i].y, i: i, h: m.h[i] }; }).concat(out);
    m.bonds.forEach(function (b) { bonds.push({ a: b.a, b: b.b, order: b.order }); });
    return { atoms: atoms, bonds: bonds };
  }

  /* ---------- 3-D coordinates ---------------------------------------------------- */
  var TET = Math.acos(-1 / 3);
  function bondLength(m, a, b, o) {
    var ea = m.atoms[a] ? m.atoms[a].el : 'H', eb = m.atoms[b] ? m.atoms[b].el : 'H', k = [ea, eb].sort().join('');
    if (k === 'CC') return m.ring[a] && m.ring[b] ? 1.40 : o === 3 ? 1.20 : o === 2 ? 1.34 : 1.54;
    if (k === 'CO') return o === 2 ? 1.22 : 1.43;
    return { CH: 1.09, HO: 0.97, HN: 1.01, CN: 1.47, CF: 1.35, CCl: 1.77, BrC: 1.94, CI: 2.14 }[k] || 1.5;
  }
  function hyb(m, i) {
    var e = m.atoms[i].el, mult = m.nb[i].reduce(function (s, x) { return Math.max(s, x.o); }, 1), dbls = m.nb[i].filter(function (x) { return x.o === 2; }).length;
    if (e === 'C') return mult === 3 || dbls === 2 ? 1 : mult === 2 ? 2 : 3;
    if (e === 'N') return m.nb[i].some(function (x) { return m.atoms[x.j].el === 'C' && m.nb[x.j].some(function (y) { return y.o === 2 && m.atoms[y.j].el === 'O'; }); }) ? 2 : 3;
    return 3;
  }
  function v3(a, b, s) { return [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s]; }
  function sub3(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function dot3(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross3(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function unit3(a) { var l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
  /**
   * A viewer3d spec with every hydrogen: tetrahedral (109.5°) at saturated C, N and O, trigonal planar (120°) at C=C,
   * C=O, benzene-ring and amide atoms, linear (180°) at C≡C. Chains are built staggered. Lone pairs are not drawn.
   */
  function build3d(m) {
    var n = m.atoms.length, P = new Array(n), H = [], bonds = [], parent = new Array(n);
    var root = -1, bestN = -1;
    m.atoms.forEach(function (a, i) { var s = m.nb[i].length + m.h[i] + (m.ring[i] ? -10 : 0) + (a.el === 'C' ? 0 : -5); if (m.nb[i].length + m.h[i] >= 2 && s > bestN) { bestN = s; root = i; } });
    if (root < 0) root = 0;
    function slots(i, back, e1, e2, parentIdx) {
      // directions for the neighbours of atom i other than its parent; back = unit vector towards the parent
      var h = hyb(m, i), th = h === 3 ? TET : h === 2 ? 2 * Math.PI / 3 : Math.PI, phis = h === 3 ? [180, 60, -60] : h === 2 ? [180, 0] : [0];
      return phis.map(function (phi) {
        var f = phi * Math.PI / 180, s = Math.sin(th), c = Math.cos(th);
        var side = v3(v3([0, 0, 0], e1, Math.cos(f)), e2, Math.sin(f));
        return { phi: phi, dir: v3(v3([0, 0, 0], back, c), side, s) };
      });
    }
    function process(i) {
      var p = parent[i], back, e1, e2, sl;
      if (p === -1) {
        var h = hyb(m, i), dirs = h === 3 ? [[0, 1, 0], [Math.sqrt(8 / 9), -1 / 3, 0], [-Math.sqrt(2 / 9), -1 / 3, Math.sqrt(2 / 3)], [-Math.sqrt(2 / 9), -1 / 3, -Math.sqrt(2 / 3)]]
          : h === 2 ? [[1, 0, 0], [-0.5, Math.sqrt(3) / 2, 0], [-0.5, -Math.sqrt(3) / 2, 0]] : [[1, 0, 0], [-1, 0, 0]];
        sl = dirs.map(function (d) { return { phi: 180, dir: d }; });
      } else {
        back = unit3(sub3(P[p], P[i]));
        // reference: another neighbour of the parent that already has a position (a ring atom if the parent is in a ring)
        var refs = m.nb[p].map(function (x) { return x.j; }).filter(function (j) { return j !== i && P[j]; });
        var ringRef = refs.filter(function (j) { return m.ring[j] && m.ring[p]; });
        refs.sort(function (a, b) { return order(m, p, a) - order(m, p, b); });      // prefer a single-bonded neighbour (so O–H and O–C of an acid or ester sit on the C=O side)
        var ref = ringRef.length ? P[ringRef[0]] : refs.length ? P[refs[0]] : (m.hpos && m.hpos[p] && m.hpos[p][0]) || null;
        var rv = ref ? sub3(ref, P[p]) : [0.3, 0.9, 0.2];
        var perp = v3(rv, back, -dot3(rv, back));
        if (Math.hypot(perp[0], perp[1], perp[2]) < 1e-6) { rv = Math.abs(back[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0]; perp = v3(rv, back, -dot3(rv, back)); }
        e1 = unit3(perp); e2 = cross3(back, e1);
        sl = slots(i, back, e1, e2, p);
        if (m.ring[i] && m.ring[p]) {
          var refInRing = ringRef.length > 0;
          // inside a ring: the next ring atom is cis to a ring reference (dihedral 0), anything else points outwards
          sl.forEach(function (s) { s.ringSlot = refInRing ? s.phi === 0 : s.phi === 180; });
        }
      }
      var nbs = m.nb[i].map(function (x) { return x.j; }).filter(function (j) { return j !== p; });
      var todo = [];
      // ring neighbours first
      nbs.forEach(function (j) {
        if (!(m.ring[i] && m.ring[j])) return;
        var k = -1; sl.forEach(function (s, q) { if (k < 0 && !s.used && (s.ringSlot || p === -1 || !m.ring[p])) k = q; });
        if (k < 0) return;
        sl[k].used = true;
        if (!P[j]) { P[j] = v3(P[i], sl[k].dir, bondLength(m, i, j, order(m, i, j))); parent[j] = i; todo.push(j); }
      });
      nbs.filter(function (j) { return !(m.ring[i] && m.ring[j]); }).sort(function (a, b) { return subtreeSize(m, b, i) - subtreeSize(m, a, i); }).forEach(function (j) {
        var k = -1; sl.forEach(function (s, q) { if (k < 0 && !s.used) k = q; });
        if (k < 0 || P[j]) return;
        sl[k].used = true;
        P[j] = v3(P[i], sl[k].dir, bondLength(m, i, j, order(m, i, j))); parent[j] = i; todo.push(j);
      });
      m.hpos = m.hpos || {};
      for (var q = 0; q < m.h[i]; q++) {
        var k2 = -1; sl.forEach(function (s, r) { if (k2 < 0 && !s.used) k2 = r; });
        if (k2 < 0) break;
        sl[k2].used = true;
        var hp = v3(P[i], sl[k2].dir, bondLength(m, i, -1, 1));
        (m.hpos[i] = m.hpos[i] || []).push(hp);
        H.push({ on: i, p: hp });
      }
      return todo;
    }
    m.hpos = {};
    P[root] = [0, 0, 0]; parent[root] = -1;
    var queue = [root];
    while (queue.length) { var nxt = process(queue.shift()); queue = queue.concat(nxt); }
    delete m.hpos;
    var atoms = m.atoms.map(function (a, i) { return { el: a.el, x: P[i][0], y: P[i][1], z: P[i][2] }; });
    m.bonds.forEach(function (b) { bonds.push({ a: b.a, b: b.b, order: b.order }); });
    var hIndex = {};
    H.forEach(function (h) { atoms.push({ el: 'H', x: h.p[0], y: h.p[1], z: h.p[2] }); bonds.push({ a: h.on, b: atoms.length - 1, order: 1 }); (hIndex[h.on] = hIndex[h.on] || []).push(atoms.length - 1); });
    // an angle to label: at a C=C / C=O / ring carbon if there is one, else at the first carbon with two or more neighbours
    var angle = null, pickAt = -1;
    m.atoms.forEach(function (a, i) { if (a.el === 'C' && hyb(m, i) === 2 && !m.ring[i] && pickAt < 0) pickAt = i; });
    if (pickAt < 0) m.atoms.forEach(function (a, i) { if (a.el === 'C' && pickAt < 0 && hyb(m, i) === 3) pickAt = i; });
    if (pickAt >= 0) {
      var around = m.nb[pickAt].map(function (x) { return x.j; }).concat(hIndex[pickAt] || []);
      if (around.length >= 2) angle = [around[0], pickAt, around[1]];
    }
    return { atoms: atoms, bonds: bonds, angle: angle };
  }

  /* ---------- data ---------------------------------------------------------------- */
  /** Curated compounds: [id, SMILES, name, condensed structural formula]. Names of esters, ethers, amines and amides are shown, never tested. */
  var COMPOUNDS = [
    ['ethane', 'CC', 'ethane', 'CH3CH3'],
    ['butane', 'CCCC', 'butane', 'CH3CH2CH2CH3'],
    ['methylpropane', 'CC(C)C', '2-methylpropane', 'CH3CH(CH3)CH3'],
    ['hexane', 'CCCCCC', 'hexane', 'CH3CH2CH2CH2CH2CH3'],
    ['ethene', 'C=C', 'ethene', 'CH2=CH2'],
    ['propene', 'C=CC', 'propene', 'CH2=CHCH3'],
    ['but2ene', 'CC=CC', 'but-2-ene', 'CH3CH=CHCH3'],
    ['ethyne', 'C#C', 'ethyne', 'CH#CH'],
    ['propyne', 'C#CC', 'propyne', 'CH#CCH3'],
    ['chloroethane', 'CCCl', 'chloroethane', 'CH3CH2Cl'],
    ['bromopropane2', 'CC(Br)C', '2-bromopropane', 'CH3CHBrCH3'],
    ['ethanol', 'CCO', 'ethanol', 'CH3CH2OH'],
    ['propan2ol', 'CC(O)C', 'propan-2-ol', 'CH3CH(OH)CH3'],
    ['methylpropan2ol', 'CC(C)(O)C', '2-methylpropan-2-ol', '(CH3)3COH'],
    ['ethanal', 'CC=O', 'ethanal', 'CH3CHO'],
    ['propanal', 'CCC=O', 'propanal', 'CH3CH2CHO'],
    ['propanone', 'CC(=O)C', 'propanone', 'CH3COCH3'],
    ['butanone', 'CC(=O)CC', 'butanone', 'CH3COCH2CH3'],
    ['ethanoic', 'CC(=O)O', 'ethanoic acid', 'CH3COOH'],
    ['butanoic', 'CCCC(=O)O', 'butanoic acid', 'CH3CH2CH2COOH'],
    ['methoxymethane', 'COC', 'methoxymethane', 'CH3OCH3'],
    ['ethoxyethane', 'CCOCC', 'ethoxyethane', 'CH3CH2OCH2CH3'],
    ['ethanamine', 'CCN', 'ethanamine', 'CH3CH2NH2'],
    ['ethanamide', 'CC(=O)N', 'ethanamide', 'CH3CONH2'],
    ['methylethanoate', 'CC(=O)OC', 'methyl ethanoate', 'CH3COOCH3'],
    ['ethylethanoate', 'CC(=O)OCC', 'ethyl ethanoate', 'CH3COOCH2CH3'],
    ['benzoic', 'OC(=O)C1=CC=CC=C1', 'benzoic acid', 'C6H5COOH'],
    // used by the other widgets
    ['methane', 'C', 'methane', 'CH4'],
    ['propane', 'CCC', 'propane', 'CH3CH2CH3'],
    ['pentane', 'CCCCC', 'pentane', 'CH3CH2CH2CH2CH3'],
    ['methylbutane', 'CC(C)CC', '2-methylbutane', 'CH3CH(CH3)CH2CH3'],
    ['dimethylpropane', 'CC(C)(C)C', '2,2-dimethylpropane', 'C(CH3)4'],
    ['but1ene', 'C=CCC', 'but-1-ene', 'CH2=CHCH2CH3'],
    ['methylpropene', 'C=C(C)C', '2-methylprop-1-ene', 'CH2=C(CH3)CH3'],
    ['methanol', 'CO', 'methanol', 'CH3OH'],
    ['propan1ol', 'CCCO', 'propan-1-ol', 'CH3CH2CH2OH'],
    ['butan1ol', 'CCCCO', 'butan-1-ol', 'CH3CH2CH2CH2OH'],
    ['butan2ol', 'CCC(O)C', 'butan-2-ol', 'CH3CH2CH(OH)CH3'],
    ['methylpropan1ol', 'CC(C)CO', '2-methylpropan-1-ol', 'CH3CH(CH3)CH2OH'],
    ['methoxyethane', 'COCC', 'methoxyethane', 'CH3OCH2CH3'],
    ['methoxypropane1', 'COCCC', '1-methoxypropane', 'CH3OCH2CH2CH3'],
    ['methoxypropane2', 'COC(C)C', '2-methoxypropane', 'CH3OCH(CH3)CH3'],
    ['bromobutane1', 'CCCCBr', '1-bromobutane', 'CH3CH2CH2CH2Br'],
    ['bromobutane2', 'CCC(Br)C', '2-bromobutane', 'CH3CH2CHBrCH3'],
    ['bromomethylpropane1', 'CC(C)CBr', '1-bromo-2-methylpropane', 'CH3CH(CH3)CH2Br'],
    ['bromomethylpropane2', 'CC(C)(Br)C', '2-bromo-2-methylpropane', '(CH3)3CBr'],
    ['chloropropane1', 'CCCCl', '1-chloropropane', 'CH3CH2CH2Cl'],
    ['chloropropane2', 'CC(Cl)C', '2-chloropropane', 'CH3CHClCH3'],
    ['chloromethylbutane', 'CCC(C)(Cl)C', '2-chloro-2-methylbutane', 'CH3CH2CCl(CH3)CH3'],
    ['methanoic', 'OC=O', 'methanoic acid', 'HCOOH'],
    ['propanoic', 'CCC(=O)O', 'propanoic acid', 'CH3CH2COOH'],
    ['methylmethanoate', 'O=COC', 'methyl methanoate', 'HCOOCH3'],
    ['ethylmethanoate', 'O=COCC', 'ethyl methanoate', 'HCOOCH2CH3'],
    ['pentan2one', 'CC(=O)CCC', 'pentan-2-one', 'CH3COCH2CH2CH3'],
    ['pentan3one', 'CCC(=O)CC', 'pentan-3-one', 'CH3CH2COCH2CH3'],
    ['methylbutanal', 'CC(C)CC=O', '3-methylbutanal', 'CH3CH(CH3)CH2CHO'],
    ['butanal', 'CCCC=O', 'butanal', 'CH3CH2CH2CHO'],
    ['methylpropanal', 'CC(C)C=O', '2-methylpropanal', 'CH3CH(CH3)CHO'],
    ['propan1amine', 'CCCN', 'propan-1-amine', 'CH3CH2CH2NH2'],
    ['propan2amine', 'CC(N)C', 'propan-2-amine', 'CH3CH(NH2)CH3'],
    ['nmethylethanamine', 'CNCC', 'N-methylethanamine', 'CH3NHCH2CH3'],
    ['trimethylamine', 'CN(C)C', 'N,N-dimethylmethanamine', '(CH3)3N'],
    ['dimethylamine', 'CNC', 'N-methylmethanamine', 'CH3NHCH3'],
    ['methylpropan2amine', 'CC(C)(N)C', '2-methylpropan-2-amine', '(CH3)3CNH2'],
    ['propanamide', 'CCC(=O)N', 'propanamide', 'CH3CH2CONH2'],
    ['pentan3ol', 'CCC(O)CC', 'pentan-3-ol', 'CH3CH2CH(OH)CH2CH3'],
    ['methylbutan2ol', 'CCC(C)(O)C', '2-methylbutan-2-ol', 'CH3CH2C(CH3)(OH)CH3'],
    ['iodopropane1', 'CCCI', '1-iodopropane', 'CH3CH2CH2I'],
    ['paracetamol', 'CC(=O)NC1=CC=C(O)C=C1', 'paracetamol', 'CH3CONHC6H4OH'],
    ['aspirin', 'CC(=O)OC1=CC=CC=C1C(=O)O', 'aspirin', 'CH3COOC6H4COOH'],
    ['phenylethanone', 'CC(=O)C1=CC=CC=C1', '1-phenylethanone', 'C6H5COCH3'],
    ['phenylamine', 'NC1=CC=CC=C1', 'phenylamine', 'C6H5NH2'],
    ['hydroxypropanoic', 'CC(O)C(=O)O', '2-hydroxypropanoic acid (lactic acid)', 'CH3CH(OH)COOH'],
    ['aminoethanoic', 'NCC(=O)O', '2-aminoethanoic acid (glycine)', 'H2NCH2COOH'],
    ['hydroxybutanal', 'CC(O)CC=O', '3-hydroxybutanal', 'CH3CH(OH)CH2CHO'],
    ['chlorophenyl', 'ClCC1=CC=CC=C1', '(chloromethyl)benzene', 'C6H5CH2Cl'],
    ['ethoxypropanone', 'CCOCC(=O)C', '1-ethoxypropan-2-one', 'CH3CH2OCH2COCH3'],
    ['prop2enol', 'C=CCO', 'prop-2-en-1-ol', 'CH2=CHCH2OH'],
    ['methoxyethene', 'COC=C', 'methoxyethene', 'CH3OCH=CH2'],
    ['bromopentane3', 'CCC(Br)CC', '3-bromopentane', 'CH3CH2CHBrCH2CH3'],
    ['methylbutanoic', 'CC(C)CC(=O)O', '3-methylbutanoic acid', 'CH3CH(CH3)CH2COOH']
  ];
  var BY_ID = {};
  COMPOUNDS.forEach(function (c) { BY_ID[c[0]] = { id: c[0], smiles: c[1], name: c[2], condensed: c[3] }; });
  function compound(id) { var c = BY_ID[id]; if (c && !c.mol) c.mol = parse(c.smiles); return c; }

  /** Isomer tasks: formula, what counts, and the complete list of target isomers (ids from COMPOUNDS). */
  var ISOMER_SETS = [
    { formula: 'C4H10', atoms: {}, unsat: false, targets: ['butane', 'methylpropane'] },
    { formula: 'C5H12', atoms: {}, unsat: false, targets: ['pentane', 'methylbutane', 'dimethylpropane'] },
    { formula: 'C2H6O', atoms: { O: 1 }, unsat: false, targets: ['ethanol', 'methoxymethane'] },
    { formula: 'C3H8O', atoms: { O: 1 }, unsat: false, targets: ['propan1ol', 'propan2ol', 'methoxyethane'] },
    { formula: 'C4H10O', atoms: { O: 1 }, unsat: false, targets: ['butan1ol', 'butan2ol', 'methylpropan1ol', 'methylpropan2ol', 'methoxypropane1', 'methoxypropane2', 'ethoxyethane'] },
    { formula: 'C4H9Br', atoms: { Br: 1 }, unsat: false, targets: ['bromobutane1', 'bromobutane2', 'bromomethylpropane1', 'bromomethylpropane2'] },
    { formula: 'C4H8', atoms: {}, unsat: true, rule: 'alkene', targets: ['but1ene', 'but2ene', 'methylpropene'] },
    { formula: 'C3H6O', atoms: { O: 1 }, unsat: true, rule: 'carbonyl', targets: ['propanal', 'propanone'] },
    { formula: 'C2H4O2', atoms: { O: 2 }, unsat: true, rule: 'acid-ester', targets: ['ethanoic', 'methylmethanoate'] },
    { formula: 'C3H6O2', atoms: { O: 2 }, unsat: true, rule: 'acid-ester', targets: ['propanoic', 'methylethanoate', 'ethylmethanoate'] },
    { formula: 'C3H9N', atoms: { N: 1 }, unsat: false, targets: ['propan1amine', 'propan2amine', 'nmethylethanamine', 'trimethylamine'] }
  ];

  /** Boiling points in °C of the straight-chain members (group at C1), by number of carbon atoms. Source: see the file header. */
  var SERIES = [
    { key: 'alkane', general: 'CnH2n+2', first: 1, bp: [-162, -89, -42, 0, 36, 69, 98, 126], mp: [-182, -183, -188, -138, -130, -95, -91, -57], member: function (n) { return 'C' + (n > 1 ? n : '') + 'H' + (2 * n + 2); } },
    { key: 'alkene', general: 'CnH2n', first: 2, bp: [-104, -48, -6, 30, 63], member: function (n) { return 'C' + n + 'H' + 2 * n; } },
    { key: 'alcohol', general: 'CnH2n+1OH', first: 1, bp: [65, 78, 97, 118, 138, 157], member: function (n) { return 'C' + (n > 1 ? n : '') + 'H' + (2 * n + 1) + 'OH'; } },
    { key: 'aldehyde', general: 'CnH2n+1CHO', first: 1, bp: [-19, 20, 48, 75, 103, 131], member: function (n) { return n === 1 ? 'HCHO' : 'C' + (n > 2 ? n - 1 : '') + 'H' + (2 * n - 1) + 'CHO'; } },
    { key: 'carboxylic acid', general: 'CnH2n+1COOH', first: 1, bp: [101, 118, 141, 164, 185, 206], member: function (n) { return n === 1 ? 'HCOOH' : 'C' + (n > 2 ? n - 1 : '') + 'H' + (2 * n - 1) + 'COOH'; } },
    { key: 'halogenoalkane', general: 'CnH2n+1Cl', first: 1, bp: [-24, 12, 47, 78, 108, 135], member: function (n) { return 'C' + (n > 1 ? n : '') + 'H' + (2 * n + 1) + 'Cl'; } }
  ];

  var core = S1._s32 = {
    parse: parse, prep: prep, counts: counts, molecular: molecular, empirical: empirical, fHtml: fHtml, canon: canon, skeleton: skeleton,
    groups: groups, classKey: classKey, degree: degree, relation: relation, formatName: formatName, specToMol: specToMol, parseName: parseName,
    nameOf: nameOf, inScope: inScope, randomNamed: randomNamed, wrongNames: wrongNames, nearMolecules: nearMolecules, carbonPaths: carbonPaths,
    mainPath: mainPath, layoutSkeletal: layoutSkeletal, layoutGrid: layoutGrid, layoutRingFull: layoutRingFull, build3d: build3d,
    COMPOUNDS: COMPOUNDS, compound: compound, ISOMER_SETS: ISOMER_SETS, SERIES: SERIES, HALO: HALO
  };
  if (!S1.widgets || typeof document === 'undefined') return;      // node test: core only

  /*__PART2__*/
})();
