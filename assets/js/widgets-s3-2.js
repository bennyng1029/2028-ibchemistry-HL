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
   Audit, November 2026: every value re-checked against the PubChem experimental records (CRC / ICSC entries).
   Changed: methane −162 → −161 (−161.5), pentanoic acid 185 → 186 (186.1), hexanoic acid 206 → 205 (205).

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
    if (/ester|amido/.test(ka)) return 'other';
    if (/alkoxy|amino/.test(ka)) return skeleton(a) === skeleton(b) ? 'position' : 'other';     // e.g. propan-1-amine / propan-2-amine
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
    if (sufType === 'al' && m.h[sufAtom] < 1) return { fail: 'not an aldehyde' };
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
      if (!inScope(r) || !layoutOk(m)) continue;
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
      var q = nameOf(m); if (!inScope(q) || !layoutOk(m)) return;
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
    if (s.subs.length < 2) for (d = 2; d < s.n; d++) { alt = clone(); alt.subs.push({ name: 'methyl', loc: d }); tryc(alt); }
    s.subs.forEach(function (_, i) { alt = clone(); alt.subs.splice(i, 1); tryc(alt); });
    if (out.length < 3 && s.n > 3) { alt = clone(); alt.n -= 2; alt.subs = []; if (alt.suffix && alt.suffix.loc > alt.n) alt.suffix.loc = alt.n; if (alt.unsat) alt.unsat.loc = 1; tryc(alt); }
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
          [path[0], last].forEach(function (e) { if (m.atoms[e].el !== 'C' && path.length > 2) score -= 2; if (m.atoms[e].el === 'O' && m.nb[e][0] && m.nb[e][0].o === 2 && path.length > 2) score -= 1; });
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
      others.forEach(function (j, k) { place(j, i, angs[k], others.length === 2 ? (k === 0 ? 1 : -1) : turn, null); });
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
        kids(i, -1).forEach(function (j) { put(j, pos[i].x + Math.cos(ang), pos[i].y + Math.sin(ang)); place(j, i, ang, Math.sin(ang) > 0 ? 1 : -1, null); });
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
  /** True if no two atoms of a skeletal layout sit on top of each other. */
  function layoutOk(m) {
    var L = layoutSkeletal(m);
    for (var i = 0; i < L.atoms.length; i++) for (var j = i + 1; j < L.atoms.length; j++) if (Math.hypot(L.atoms[i].x - L.atoms[j].x, L.atoms[i].y - L.atoms[j].y) < 0.6) return false;
    return true;
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
    { key: 'alkane', general: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>', first: 1, bp: [-161, -89, -42, 0, 36, 69, 98, 126], mp: [-182, -183, -188, -138, -130, -95, -91, -57], member: function (n) { return 'C' + (n > 1 ? n : '') + 'H' + (2 * n + 2); } },
    { key: 'alkene', general: 'C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>', first: 2, bp: [-104, -48, -6, 30, 63], member: function (n) { return 'C' + n + 'H' + 2 * n; } },
    { key: 'alcohol', general: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>+1</sub>OH', first: 1, bp: [65, 78, 97, 118, 138, 157], member: function (n) { return 'C' + (n > 1 ? n : '') + 'H' + (2 * n + 1) + 'OH'; } },
    { key: 'aldehyde', general: 'C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O', first: 1, bp: [-19, 20, 48, 75, 103, 131], member: function (n) { return n === 1 ? 'HCHO' : 'C' + (n > 2 ? n - 1 : '') + 'H' + (2 * n - 1) + 'CHO'; } },
    { key: 'carboxylic acid', general: 'C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O<sub>2</sub>', first: 1, bp: [101, 118, 141, 164, 186, 205], member: function (n) { return n === 1 ? 'HCOOH' : 'C' + (n > 2 ? n - 1 : '') + 'H' + (2 * n - 1) + 'COOH'; } },
    { key: 'halogenoalkane', general: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>+1</sub>Cl', first: 1, bp: [-24, 12, 47, 78, 108, 135], member: function (n) { return 'C' + (n > 1 ? n : '') + 'H' + (2 * n + 1) + 'Cl'; } }
  ];

  var core = S1._s32 = {
    parse: parse, prep: prep, counts: counts, molecular: molecular, empirical: empirical, fHtml: fHtml, canon: canon, skeleton: skeleton,
    groups: groups, classKey: classKey, degree: degree, relation: relation, formatName: formatName, specToMol: specToMol, parseName: parseName,
    nameOf: nameOf, inScope: inScope, randomNamed: randomNamed, wrongNames: wrongNames, nearMolecules: nearMolecules, carbonPaths: carbonPaths,
    mainPath: mainPath, layoutOk: layoutOk, layoutSkeletal: layoutSkeletal, layoutGrid: layoutGrid, layoutRingFull: layoutRingFull, build3d: build3d,
    COMPOUNDS: COMPOUNDS, compound: compound, ISOMER_SETS: ISOMER_SETS, SERIES: SERIES, HALO: HALO
  };
  if (!S1.widgets || typeof document === 'undefined') return;      // node test: core only

  /* ======================================================================
     PART 2 — drawing helpers and widgets
     ====================================================================== */
  var el = S1.util.el, SVGNS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, attrs, parent, first) {
    var n = document.createElementNS(SVGNS, tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) { if (first && parent.firstChild) parent.insertBefore(n, parent.firstChild); else parent.appendChild(n); }
    return n;
  }
  function shuffle(a) { return S1.util.shuffle(a.slice()); }
  function groupName(k) {
    switch (k) {
      case 'halogeno': return t('halogeno');
      case 'hydroxyl': return t('hydroxyl');
      case 'aldehyde': case 'ketone': case 'carbonyl': return t('carbonyl');
      case 'carboxyl': return t('carboxyl');
      case 'alkoxy': return t('alkoxy');
      case 'amino': return t('amino');
      case 'amido': return t('amido');
      case 'ester': return t('ester');
      case 'phenyl': return t('phenyl');
      case 'alkenyl': return t('carbon–carbon double bond');
      case 'alkynyl': return t('carbon–carbon triple bond');
    }
    return k;
  }
  function className(k) {
    switch (k) {
      case 'alkane': return t('alkane');
      case 'alkene': return t('alkene');
      case 'alkyne': return t('alkyne');
      case 'halogenoalkane': return t('halogenoalkane');
      case 'alcohol': return t('alcohol');
      case 'aldehyde': return t('aldehyde');
      case 'ketone': return t('ketone');
      case 'carboxylic acid': return t('carboxylic acid');
      case 'ether': return t('ether');
      case 'amine': return t('amine');
      case 'amide': return t('amide');
      case 'ester': return t('ester');
    }
    return k || t('more than one functional group');
  }
  var GROUP_KEYS = ['halogeno', 'hydroxyl', 'carbonyl', 'carboxyl', 'alkoxy', 'amino', 'amido', 'ester', 'phenyl'];
  var CLASS_KEYS = ['alkane', 'alkene', 'alkyne', 'halogenoalkane', 'alcohol', 'aldehyde', 'ketone', 'carboxylic acid', 'ether', 'amine', 'amide', 'ester'];
  function groupOf(key) { return key === 'aldehyde' || key === 'ketone' ? 'carbonyl' : key; }
  function degreeName(d) { return d === 1 ? t('primary') : d === 2 ? t('secondary') : d === 3 ? t('tertiary') : ''; }
  function isSaturated(m) { return !m.bonds.some(function (b) { return b.order > 1 && m.atoms[b.a].el === 'C' && m.atoms[b.b].el === 'C'; }); }

  /** Skeletal drawing through the shared helper. Returns {svg, pts: [{x, y}] per heavy atom (SVG units), L}. */
  function drawSkeletal(host, m, o) {
    o = o || {};
    var S = o.scale || 40, L = layoutSkeletal(m, { path: o.path });
    if (o.flipY) L.atoms.forEach(function (a) { a.y = -a.y; });
    if (o.flipX) L.atoms.forEach(function (a) { a.x = -a.x; });
    var atoms = L.atoms.map(function (a) { return { x: a.x, y: a.y, label: a.label, number: o.numbers && a.i >= 0 && o.numbers[a.i] != null ? o.numbers[a.i] : null }; });
    var svg;
    if (m.atoms.length === 1 && !atoms[0].label) {         // methane: a skeletal formula has nothing to draw
      host.innerHTML = ''; host.appendChild(el('p', { class: 'small muted', text: t('(one carbon atom: nothing to draw)') }));
      return { svg: null, pts: [], L: L, S: S };
    }
    // ring double bonds: the shared helper puts the second line towards the middle of the whole drawing,
    // which hides it on some ring bonds, so draw it here towards the middle of the ring
    var inner = [], bonds = L.bonds.map(function (b) { if (b.order === 2 && m.ring[b.a] && m.ring[b.b]) { inner.push(b); return { a: b.a, b: b.b, order: 1 }; } return b; });
    svg = S1.mol.skeletal(host, { atoms: atoms, bonds: bonds, scale: S, label: o.label || t('Skeletal formula') });
    if (inner.length) {
      var cx = 0, cy = 0, nr = 0;
      L.atoms.forEach(function (a) { if (a.i >= 0 && m.ring[a.i]) { cx += a.x * S; cy += a.y * S; nr++; } });
      cx /= nr; cy /= nr;
      inner.forEach(function (b) {
        var p = L.atoms[b.a], q = L.atoms[b.b], x1 = p.x * S, y1 = p.y * S, x2 = q.x * S, y2 = q.y * S, len = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / len, uy = (y2 - y1) / len;
        var nx = -uy, ny = ux, side = ((cx - (x1 + x2) / 2) * nx + (cy - (y1 + y2) / 2) * ny) >= 0 ? 1 : -1, f = 5 * side, cut = 6;
        svgEl('line', { x1: x1 + nx * f + ux * cut, y1: y1 + ny * f + uy * cut, x2: x2 + nx * f - ux * cut, y2: y2 + ny * f - uy * cut, style: 'stroke:var(--ink);stroke-width:1.8;stroke-linecap:round;fill:none' }, svg);
      });
    }
    return { svg: svg, pts: L.atoms.map(function (a) { return { x: a.x * S, y: a.y * S, i: a.i }; }), L: L, S: S };
  }
  /** Full structural formula (every atom and bond) through the shared helper. */
  function drawFull(host, m, o) {
    o = o || {};
    var L = m.cyclic ? layoutRingFull(m) : layoutGrid(m, { explicit: true });
    return S1.mol.structural(host, { atoms: L.atoms.map(function (a) { return { el: a.el, x: a.x, y: a.y }; }), bonds: L.bonds, scale: o.scale || 34, label: o.label || t('Full structural formula') });
  }
  /** The direction (radians) with the most room around a point, given the directions of its bonds. */
  function freeDirection(dirs) {
    var best = -Math.PI / 2, gap = -1;
    for (var c = 0; c < 16; c++) {
      var cand = -Math.PI / 2 + c * Math.PI / 8, g = dirs.length ? Math.min.apply(null, dirs.map(function (d) { var x = Math.abs(cand - d) % (2 * Math.PI); return x > Math.PI ? 2 * Math.PI - x : x; })) : 9;
      if (g > gap + 1e-6) { gap = g; best = cand; }
    }
    return best;
  }
  function bondDirs(L, i) {
    var out = [];
    L.bonds.forEach(function (b) { var o = b.a === i ? b.b : b.b === i ? b.a : -1; if (o >= 0) out.push(Math.atan2(L.atoms[o].y - L.atoms[i].y, L.atoms[o].x - L.atoms[i].x)); });
    return out;
  }
  /** A focusable, clickable circle over an atom of an SVG drawing. */
  function addHit(svg, x, y, r, label, onPick) {
    var c = svgEl('circle', { cx: x, cy: y, r: r, tabindex: 0, role: 'button', 'aria-label': label, class: 's32-hit' }, svg);
    c.addEventListener('click', onPick);
    c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(); } });
    return c;
  }
  function addHalo(svg, x, y, r) { return svgEl('circle', { cx: x, cy: y, r: r || 15, style: 'fill:var(--accent-soft);stroke:var(--accent);stroke-width:1.5' }, svg, true); }
  function groupLabelParts(m, i) {
    var e = m.atoms[i].el, h = m.h[i];
    if (!h) return [e];
    return [e, 'H', h > 1 ? String(h) : ''];
  }
  /**
   * A drawing made of groups (CH3, CH2, OH …) joined by bonds: local SVG, because the shared helpers draw
   * either every atom or none of the carbons. o: {scale, selected, marks: {i: true}, onPick(i), label, names(i)}.
   */
  function drawGroups(host, m, o) {
    o = o || {};
    var S = o.scale || 34, L = layoutGrid(m, { explicit: false, path: o.path }), pad = 26;
    var xs = L.atoms.map(function (a) { return a.x * S; }), ys = L.atoms.map(function (a) { return a.y * S; });
    var x0 = Math.min.apply(null, xs) - pad - 8, x1 = Math.max.apply(null, xs) + pad + 8, y0 = Math.min.apply(null, ys) - pad, y1 = Math.max.apply(null, ys) + pad;
    host.innerHTML = ''; host.setAttribute('data-i18n', 'off'); host.classList.add('mol');
    var svg = svgEl('svg', { viewBox: [x0, y0, x1 - x0, y1 - y0].join(' '), width: x1 - x0, height: y1 - y0, role: o.onPick ? 'group' : 'img', 'aria-label': o.label || t('Structural formula'), class: 'mol__svg' }, host);
    svg.style.maxWidth = '100%'; svg.style.height = 'auto';
    var half = L.atoms.map(function (a) { var p = groupLabelParts(m, a.i); return (p[0].length * 11 + (p[1] ? 12 : 0) + (p[2] ? 7 : 0)) / 2; });
    L.bonds.forEach(function (b) {
      var p = L.atoms[b.a], q = L.atoms[b.b], dx = q.x - p.x, dy = q.y - p.y, len = Math.hypot(dx, dy) * S, ux = dx * S / len, uy = dy * S / len;
      var ta = Math.abs(ux) > Math.abs(uy) ? half[b.a] + 4 : 13, tb = Math.abs(ux) > Math.abs(uy) ? half[b.b] + 4 : 13;
      var offs = b.order === 2 ? [-3, 3] : b.order === 3 ? [-5, 0, 5] : [0];
      offs.forEach(function (f) {
        svgEl('line', { x1: p.x * S + ux * ta - uy * f, y1: p.y * S + uy * ta + ux * f, x2: q.x * S - ux * tb - uy * f, y2: q.y * S - uy * tb + ux * f, style: 'stroke:var(--ink);stroke-width:1.8;stroke-linecap:round' }, svg);
      });
    });
    L.atoms.forEach(function (a, k) {
      var cx = a.x * S, cy = a.y * S, parts = groupLabelParts(m, a.i);
      if ((o.marks && o.marks[a.i]) || o.selected === a.i) svgEl('rect', { x: cx - half[k] - 5, y: cy - 14, width: 2 * half[k] + 10, height: 28, rx: 3, style: 'fill:var(--accent-soft);stroke:var(--accent);stroke-width:' + (o.selected === a.i ? 2.5 : 1.5) }, svg);
      var tx = svgEl('text', { x: cx, y: cy, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:var(--ink);font-family:var(--font-body);font-size:17px;font-weight:700' }, svg);
      svgEl('tspan', {}, tx).textContent = parts[0] + (parts[1] || '');
      if (parts[2]) { svgEl('tspan', { dy: 5, style: 'font-size:11px' }, tx).textContent = parts[2]; }
      if (o.onPick) {
        var hit = svgEl('rect', { x: cx - half[k] - 6, y: cy - 16, width: 2 * half[k] + 12, height: 32, rx: 3, tabindex: 0, role: 'button', class: 's32-hit',
          'aria-label': (o.names ? o.names(a.i) : parts.join('')) + (o.selected === a.i ? ' (' + t('selected') + ')' : '') }, svg);
        hit.addEventListener('click', function () { o.onPick(a.i); });
        hit.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); o.onPick(a.i); } });
        if (o.focus === a.i) setTimeout(function () { try { hit.focus({ preventScroll: true }); } catch (err) { /* not focusable yet */ } }, 0);
      }
    });
    return svg;
  }

  /* ---------- small UI pieces --------------------------------------------------- */
  function seg(w, label, items, value, onChange, parent) {
    var id = S1.util.uid('seg'), group = el('div', { class: 'seg', role: 'group', 'aria-labelledby': id }), state = { value: value, buttons: [] };
    items.forEach(function (it) {
      var b = el('button', { class: 'seg__btn', type: 'button', 'aria-pressed': String(it.value === value), html: it.label });
      b.addEventListener('click', function () { state.set(it.value); if (onChange) onChange(it.value); });
      b._value = it.value; state.buttons.push(b); group.appendChild(b);
    });
    state.set = function (v) { state.value = v; state.buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b._value === v)); }); };
    (parent || w.controls).appendChild(el('div', { class: 'control s32-seg' }, [el('span', { class: 'control__label', id: id, text: label }), group]));
    return state;
  }
  function say(box, tone, html) {
    box.className = 'feedback s32-fb' + (tone === 'right' ? ' feedback--right' : tone === 'wrong' ? ' feedback--wrong' : tone === 'partial' ? ' feedback--partial' : '');
    box.innerHTML = html ? '<p>' + html + '</p>' : '';
  }
  /** A row of answer buttons. items: [{html, value}]. onPick(value, api) — api.mark(value, 'right' | 'wrong'), api.lock(). */
  function choices(parent, items, onPick, cls) {
    var wrap = el('div', { class: 's32-opts' + (cls ? ' ' + cls : '') }), map = [], api = {};
    items.forEach(function (it) {
      var b = el('button', { class: 'btn s32-opt', type: 'button', html: it.html });
      if (it.node) { b.innerHTML = ''; b.appendChild(it.node); }
      b.addEventListener('click', function () { if (!b.disabled) onPick(it.value, api); });
      map.push({ value: it.value, b: b }); wrap.appendChild(b);
    });
    api.mark = function (value, state) {
      map.forEach(function (x) {
        if (x.value !== value) return;
        x.b.setAttribute('data-state', state);
        if (!x.b.querySelector('.s32-tick')) x.b.appendChild(el('span', { class: 's32-tick', text: state === 'right' ? ' ✓' : ' ✗' }));
        if (state === 'wrong') x.b.disabled = true;
      });
    };
    api.lock = function () { map.forEach(function (x) { x.b.disabled = true; }); };
    api.el = wrap;
    parent.appendChild(wrap);
    return api;
  }
  function nameHtml(name) { return '<b class="s32-name" data-i18n="off">' + S1.util.escapeHtml(name) + '</b>'; }
  function fx(s) { return '<span class="s32-f" data-i18n="off">' + fHtml(s) + '</span>'; }

  /* ---------- static figures in the page: <div data-s32-mol="ethanol" data-view="skeletal"> ---- */
  function molFrom(str) { var c = compound(str); return c ? c.mol : parse(str); }
  function renderFigure(host) {
    var m, view = host.getAttribute('data-view') || 'skeletal', label = host.getAttribute('data-label') || '', scale = Number(host.getAttribute('data-scale')) || 0;
    host.setAttribute('data-i18n', 'off');
    if (view === 'stereo') {            // one tetrahedral carbon drawn with wedge and dash bonds
      var subs = (host.getAttribute('data-subs') || 'H,H,H,H').split(',');
      S1.mol.skeletal(host, { scale: 46, label: label || t('Stereochemical formula'), atoms: [{ x: 0, y: 0, label: 'C' }, { x: 0, y: -1, label: subs[0] }, { x: -0.92, y: 0.42, label: subs[1] }, { x: 0.42, y: 0.92, label: subs[2] }, { x: 0.98, y: 0.22, label: subs[3] }],
        bonds: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3, stereo: 'wedge' }, { a: 0, b: 4, stereo: 'hash' }] });
      return;
    }
    try { m = molFrom(host.getAttribute('data-s32-mol')); } catch (err) { return; }
    if (view === 'full') drawFull(host, m, { label: label, scale: scale || 32 });
    else if (view === 'groups') drawGroups(host, m, { label: label, scale: scale || 32, path: host.getAttribute('data-path') ? host.getAttribute('data-path').split(',').map(Number) : null });
    else if (view === '3d') { var g = build3d(m); S1.mol.viewer3d(host, { atoms: g.atoms, bonds: g.bonds, angle: g.angle, height: Number(host.getAttribute('data-height')) || 220, label: label || t('3-D model') }); }
    else {
      var numbers = null, r;
      if (host.hasAttribute('data-numbers')) { r = nameOf(m); if (!r.fail) { numbers = {}; r.path.forEach(function (i, k) { numbers[i] = k + 1; }); } }
      drawSkeletal(host, m, { label: label, scale: scale || 38, numbers: numbers });
    }
  }
  function renderFigures() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-s32-mol]'), function (h) { if (!h.querySelector('svg, canvas')) renderFigure(h); });
  }
  if (S1.ready) S1.ready(renderFigures); else document.addEventListener('DOMContentLoaded', renderFigures);
  document.addEventListener('s1:langchange', function () { setTimeout(renderFigures, 0); });

  /* ====================================================================== s3-2.formulas */
  S1.widgets.register('s3-2.formulas', function (w) {
    var list = COMPOUNDS.slice(0, 27).map(function (c) { return compound(c[0]); });
    var setClass = w.readoutItem(t('Class of compound')), setGroup = w.readoutItem(t('Functional group')), setSat = w.readoutItem(t('Carbon–carbon bonds'));
    var sel = w.select({ label: t('Compound'), value: w.options.start || 'ethanol', onChange: update,
      options: list.map(function (c) { return { value: c.id, label: c.name + ' (' + className(classKey(c.mol)) + ')' }; }) });
    var grid = el('div', { class: 's32-panels' }); w.stage.appendChild(grid);
    function panel(title, note, cls) {
      var body = el('div', { class: 's32-panel__body' + (cls ? ' ' + cls : '') });
      grid.appendChild(el('div', { class: 's32-panel' }, [el('p', { class: 's32-cap', text: title }), body, el('p', { class: 'small muted s32-panel__note', text: note })]));
      return body;
    }
    var pMol = panel(t('Molecular formula'), t('The actual number of each kind of atom in one molecule.'), 's32-big');
    var pEmp = panel(t('Empirical formula'), t('The simplest whole-number ratio of the atoms.'), 's32-big');
    var pCon = panel(t('Condensed structural formula'), t('The groups in order along the chain, written on one line. Bonds to H are not drawn.'), 's32-big');
    var pFull = panel(t('Full structural formula'), t('Every atom and every bond. Bond angles are drawn as 90°, which is not their real value.'));
    var pSkel = panel(t('Skeletal formula'), t('Each line end and each corner is a carbon atom. H atoms on carbon are not drawn.'));
    var p3d = panel(t('3-D model'), t('The real shape. Drag to turn it. Lone pairs are not drawn.'));
    var viewer = null;
    function update() {
      var c = compound(sel.value), m = c.mol, gs = groups(m);
      pMol.innerHTML = fx(molecular(m)); pEmp.innerHTML = fx(empirical(m)); pCon.innerHTML = fx(c.condensed);
      drawFull(pFull, m, { label: t('Full structural formula of {name}', { name: c.name }) });
      drawSkeletal(pSkel, m, { label: t('Skeletal formula of {name}', { name: c.name }), scale: 40 });
      var g = build3d(m), spec = { atoms: g.atoms, bonds: g.bonds, angle: g.angle, height: 230, label: t('3-D model of {name}', { name: c.name }) };
      if (viewer) viewer.setSpec(spec); else viewer = S1.mol.viewer3d(p3d, spec);
      setClass(className(classKey(m)));
      var names = []; gs.forEach(function (x) { var nm = groupName(x.key); if (names.indexOf(nm) < 0) names.push(nm); });
      setGroup(names.length ? names.join(', ') : t('none (only C–C and C–H bonds)'));
      setSat(isSaturated(m) ? t('saturated (single bonds only)') : gs.some(function (x) { return x.key === 'phenyl'; }) ? t('unsaturated (benzene ring)') : t('unsaturated (has a double or triple bond)'));
    }
    update();
  });

  /* ====================================================================== s3-2.skeletal */
  S1.widgets.register('s3-2.skeletal', function (w) {
    var ids = ['butane', 'methylbutane', 'but2ene', 'propan2ol', 'butanone', 'butanoic', 'methylbutanal', 'chloromethylbutane', 'ethylethanoate', 'propyne', 'benzoic'];
    var setC = w.readoutItem(t('Carbon atoms revealed')), setH = w.readoutItem(t('H atoms on those carbons')), setF = w.readoutItem(t('Molecular formula'));
    var sel = w.select({ label: t('Molecule'), value: w.options.start || 'methylbutane', onChange: reset, options: ids.map(function (id) { return { value: id, label: compound(id).name }; }) });
    w.button(t('Reveal the next carbon'), function () { var next = carbons().filter(function (i) { return !shown[i]; })[0]; if (next != null) reveal(next); }, { primary: true });
    w.button(t('Reveal all'), function () { carbons().forEach(function (i) { shown[i] = true; }); last = -1; draw(); });
    w.button(t('Hide all'), reset);
    var host = el('div', { class: 's32-draw' }), msg = el('div', { class: 'feedback s32-fb' });
    w.stage.appendChild(host); w.stage.appendChild(msg);
    var shown = {}, last = -1, m;
    function carbons() { var out = []; m.atoms.forEach(function (a, i) { if (a.el === 'C') out.push(i); }); return out; }
    function reset() { m = compound(sel.value).mol; shown = {}; last = -1; draw(); }
    function reveal(i) { shown[i] = true; last = i; draw(i); }
    function draw(focusI) {
      var d = drawSkeletal(host, m, { scale: 54, label: t('Skeletal formula of {name}. Each carbon atom is a button.', { name: compound(sel.value).name }) });
      d.svg.setAttribute('role', 'group');
      var cs = carbons(), nC = 0, nH = 0;
      cs.forEach(function (i) {
        var p = d.pts[i];
        if (shown[i]) {
          nC++; nH += m.h[i];
          var ang = freeDirection(bondDirs(d.L, i)), tx = svgEl('text', { x: p.x + Math.cos(ang) * 19, y: p.y + Math.sin(ang) * 17, 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'fill:var(--accent-ink);font-family:var(--font-body);font-size:14px;font-weight:700' }, d.svg);
          svgEl('tspan', {}, tx).textContent = 'C' + (m.h[i] ? 'H' : '');
          if (m.h[i] > 1) svgEl('tspan', { dy: 4, style: 'font-size:10px' }, tx).textContent = m.h[i];
        }
        svgEl('circle', { cx: p.x, cy: p.y, r: 4, style: 'fill:' + (shown[i] ? 'var(--accent)' : 'var(--surface)') + ';stroke:var(--accent);stroke-width:1.8' }, d.svg);
        var hit = addHit(d.svg, p.x, p.y, 14, shown[i] ? t('Carbon atom with {h} hydrogen atoms', { h: m.h[i] }) : t('Hidden carbon atom: press to reveal'), function () { reveal(i); });
        if (focusI === i) setTimeout(function () { try { hit.focus({ preventScroll: true }); } catch (err) { /* ignore */ } }, 0);
      });
      setC(nC + ' / ' + cs.length); setH(String(nH));
      var all = nC === cs.length, cnt = counts(m), other = (cnt.H || 0) - cs.reduce(function (s, i) { return s + m.h[i]; }, 0);
      setF(all ? fx(molecular(m)) : t('reveal every carbon first'));
      if (last >= 0) {
        var bonds = m.nb[last].reduce(function (s, x) { return s + x.o; }, 0);
        say(msg, '', t('This carbon has {b} bonds drawn (a double bond counts as 2, a triple bond as 3). Carbon always forms 4 bonds, so it carries 4 − {b} = {h} hydrogen atoms.', { b: bonds, h: m.h[last] }));
      } else if (all) {
        say(msg, 'right', other ? t('All {c} carbon atoms found, carrying {h} H atoms. Add the {o} H atoms that are drawn on O or N, then count the other atoms.', { c: cs.length, h: nH, o: other })
          : t('All {c} carbon atoms found, carrying {h} H atoms. Now count the other atoms that are drawn.', { c: cs.length, h: nH }));
      } else say(msg, '', t('Press a line end or a corner of the drawing. Each one is a carbon atom.'));
    }
    reset();
  });

  /* ====================================================================== s3-2.translate */
  S1.widgets.register('s3-2.translate', function (w) {
    var pool = COMPOUNDS.map(function (c) { return compound(c[0]); }).filter(function (c) { return !c.mol.cyclic && c.mol.atoms.length >= 3 && classKey(c.mol) && !/acid \(|hydroxy|ethoxypropanone|methoxyethene/.test(c.name); });
    var setScore = w.readoutItem(t('Score')), right = 0, asked = 0, q = null, kindIdx = 0, lastId = '';
    var kinds = ['condensed', 'hcount', 'molecular'];
    var host = el('div', { class: 's32-draw' }), prompt = el('p', { class: 's32-prompt' }), area = el('div'), fb = el('div', { class: 'feedback s32-fb' });
    w.stage.appendChild(host); w.stage.appendChild(prompt); w.stage.appendChild(area); w.stage.appendChild(fb);
    w.button(t('Next question'), next, { primary: true });
    w.el.__s32 = function () { return { id: q.c.id, kind: q.kind }; };
    function done(ok) { if (!q.scored) { q.scored = true; asked++; if (ok) right++; setScore(t('{r} of {n} correct at the first try', { r: right, n: asked })); } }
    function next() {
      var c; do { c = pool[Math.floor(Math.random() * pool.length)]; } while (c.id === lastId);
      lastId = c.id; q = { c: c, kind: kinds[kindIdx++ % 3], scored: false };
      var m = c.mol, cnt = counts(m);
      drawSkeletal(host, m, { scale: 46, label: t('Skeletal formula of the compound in the question') });
      area.innerHTML = ''; say(fb, '', '');
      if (q.kind === 'condensed') {
        prompt.textContent = t('Which condensed structural formula matches this skeletal formula?');
        var mf = molecular(m), nC = cnt.C, others = pool.filter(function (x) { return x.id !== c.id; });
        var score = function (x) { return (molecular(x.mol) === mf ? 0 : counts(x.mol).C === nC ? 1 : 2) + Math.random() * 0.9; };
        others.sort(function (a, b) { return score(a) - score(b); });
        var opts = shuffle([c].concat(others.slice(0, 3)));
        choices(area, opts.map(function (x) { return { html: fx(x.condensed), value: x.id }; }), function (v, api) {
          if (v === c.id) { api.mark(v, 'right'); api.lock(); done(true); say(fb, 'right', t('Correct. This is {name}, {formula}.', { name: nameHtml(c.name), formula: fx(c.condensed) })); }
          else { api.mark(v, 'wrong'); done(false); var o = compound(v); say(fb, 'wrong', molecular(o.mol) === mf ? t('That formula has the right atoms, but they are joined in a different order: it is {name}, an isomer. Follow the chain atom by atom.', { name: nameHtml(o.name) }) : t('That formula is {name}. Count the carbon atoms (line ends and corners) and look at the group that is drawn.', { name: nameHtml(o.name) })); }
        });
      } else if (q.kind === 'hcount') {
        prompt.textContent = t('How many hydrogen atoms are in one molecule of this compound?');
        var input = el('input', { class: 'input input--num s32-num', type: 'text', inputmode: 'numeric', 'aria-label': t('Number of hydrogen atoms') });
        var check = el('button', { class: 'btn btn--primary', type: 'button', text: t('Check') });
        area.appendChild(el('div', { class: 'btn-row' }, [input, check]));
        var go = function () {
          var v = parseInt(input.value, 10), H = cnt.H || 0, onC = 0; m.atoms.forEach(function (a, i) { if (a.el === 'C') onC += m.h[i]; });
          if (isNaN(v)) { say(fb, 'partial', t('Type a whole number.')); return; }
          if (v === H) { done(true); say(fb, 'right', t('Correct: {h} hydrogen atoms. The molecular formula is {f}.', { h: H, f: fx(molecular(m)) })); }
          else { done(false); say(fb, 'wrong', v === onC && onC !== H ? t('You counted the H atoms on carbon. Add the H atoms that are drawn on O or N.') : v === 2 * cnt.C + 2 && !isSaturated(m) ? t('That would be right with single bonds only. Each double bond means two fewer H atoms.') : t('Not {v}. Give every carbon 4 bonds: 4 minus the bonds drawn is its number of H atoms. Then add any H drawn on O or N.', { v: v })); }
        };
        check.addEventListener('click', go); input.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
      } else {
        prompt.textContent = t('What is the molecular formula of this compound?');
        var base = cnt, variants = [], add = function (c2) { var s = formulaText(c2, false); if (variants.indexOf(s) < 0 && c2.H > 0 && c2.C > 0) variants.push(s); };
        var mk = function (dC, dH) { var c2 = JSON.parse(JSON.stringify(base)); c2.C += dC; c2.H = (c2.H || 0) + dH; return c2; };
        add(base); add(mk(0, 2)); add(mk(0, -2)); add(mk(-1, -2)); add(mk(1, 2)); add(mk(-1, 0));
        var correct = variants[0], opts2 = shuffle([correct].concat(shuffle(variants.slice(1)).slice(0, 3)));
        choices(area, opts2.map(function (s) { return { html: fx(s), value: s }; }), function (v, api) {
          if (v === correct) { api.mark(v, 'right'); api.lock(); done(true); say(fb, 'right', t('Correct. This is {name}.', { name: nameHtml(c.name) })); }
          else { api.mark(v, 'wrong'); done(false); say(fb, 'wrong', t('Not that one. Count the carbon atoms first (every line end and corner), then give each carbon enough H atoms to make 4 bonds.')); }
        });
      }
    }
    next();
  });

  /* ====================================================================== s3-2.spotter */
  S1.widgets.register('s3-2.spotter', function (w) {
    var ids = ['bromopropane2', 'butan2ol', 'propanal', 'butanone', 'propanoic', 'methoxyethane', 'ethanamine', 'propanamide', 'ethylethanoate', 'chloropropane1',
      'phenylamine', 'phenylethanone', 'hydroxypropanoic', 'aminoethanoic', 'hydroxybutanal', 'ethoxypropanone', 'chlorophenyl', 'paracetamol', 'aspirin'];
    var setFound = w.readoutItem(t('Groups found')), setScore = w.readoutItem(t('Named correctly at the first try'));
    var sel = w.select({ label: t('Molecule'), value: w.options.start || 'butan2ol', onChange: load,
      options: ids.map(function (id, k) { return { value: id, label: t('Molecule {n}', { n: k + 1 }) + (k >= 10 ? ' ' + t('(challenge)') : '') }; }) });
    w.button(t('Next molecule'), function () { var k = (ids.indexOf(sel.value) + 1) % ids.length; sel.set(ids[k]); load(); }, { primary: true });
    var host = el('div', { class: 's32-draw' }), prompt = el('p', { class: 's32-prompt' }), area = el('div'), fb = el('div', { class: 'feedback s32-fb' });
    w.stage.appendChild(host); w.stage.appendChild(prompt); w.stage.appendChild(area); w.stage.appendChild(fb);
    var m, gs, found, active, good = 0, tries = 0, single;
    w.el.__s32 = function () { return { groups: gs.map(function (g) { return { key: groupOf(g.key), atoms: g.atoms }; }), cls: single ? classKey(m) : null }; };
    function atomLabel(i) { var e = m.atoms[i].el; return e === 'C' ? t('carbon atom') : e === 'O' ? t('oxygen atom') : e === 'N' ? t('nitrogen atom') : t('halogen atom'); }
    function load() {
      m = compound(sel.value).mol; gs = groups(m).filter(function (g) { return GROUP_KEYS.indexOf(groupOf(g.key)) >= 0; });
      found = gs.map(function () { return false; }); active = -1; single = gs.length === 1 && classKey(m);
      area.innerHTML = ''; say(fb, '', ''); draw(); ask();
    }
    function ask() {
      var left = found.filter(function (f) { return !f; }).length;
      setFound(found.length - left + ' / ' + found.length);
      prompt.textContent = left ? (found.length > 1 ? t('This molecule has {n} functional groups. Press an atom that belongs to one of them.', { n: found.length }) : t('Press an atom that belongs to the functional group.'))
        : t('All the functional groups are found. Choose another molecule.');
    }
    function draw() {
      var d = drawSkeletal(host, m, { scale: 46, label: t('Skeletal formula. Each atom is a button.') });
      d.svg.setAttribute('role', 'group');
      gs.forEach(function (g, k) { if (found[k] || k === active) g.atoms.forEach(function (i) { addHalo(d.svg, d.pts[i].x, d.pts[i].y, 15); }); });
      m.atoms.forEach(function (a, i) { addHit(d.svg, d.pts[i].x, d.pts[i].y, 14, atomLabel(i), function () { pickAtom(i); }); });
    }
    function pickAtom(i) {
      if (active >= 0 && !found[active]) return;
      var k = -1; gs.forEach(function (g, q) { if (g.atoms.indexOf(i) >= 0) k = q; });
      if (k < 0) { say(fb, 'wrong', t('That carbon atom is part of the hydrocarbon chain. A functional group is the part that is not only C–C and C–H single bonds.')); return; }
      if (found[k]) { say(fb, '', t('You have already named that group. Look for another one.')); return; }
      active = k; draw(); say(fb, '', '');
      var g = gs[k], first = true;
      prompt.textContent = t('Good: the highlighted atoms form one functional group. What is the name of the GROUP?');
      area.innerHTML = '';
      choices(area, GROUP_KEYS.map(function (key) { return { html: groupName(key), value: key }; }), function (v, api) {
        tries += first ? 1 : 0;
        if (v === groupOf(g.key)) {
          if (first) good++;
          api.mark(v, 'right'); api.lock(); found[k] = true; setScore(good + ' / ' + tries);
          var extra = g.key === 'phenyl' ? ' ' + t('Phenyl is the name of the benzene ring when it is a group in a larger molecule.') : g.key === 'hydroxyl' && m.ring[g.on] ? ' ' + t('A hydroxyl group joined directly to a benzene ring makes a phenol. Phenols are not one of the classes you need.') : '';
          if (single) { say(fb, 'right', t('Correct: the group is {g}.', { g: '<b>' + groupName(g.key) + '</b>' }) + extra); askClass(g); }
          else { say(fb, 'right', t('Correct: the group is {g}.', { g: '<b>' + groupName(g.key) + '</b>' }) + extra); area.innerHTML = ''; active = -1; draw(); ask(); }
        } else {
          api.mark(v, 'wrong'); first = false; setScore(good + ' / ' + tries);
          say(fb, 'wrong', whyNot(v, g.key));
        }
      }, 's32-opts--wrap');
    }
    function whyNot(v, key) {
      if (key === 'carboxyl' && v === 'carbonyl') return t('There is a C=O here, but the same carbon also carries an O–H. The two together are one group with its own name.');
      if (key === 'carboxyl' && v === 'hydroxyl') return t('There is an O–H here, but it sits on a carbon that also has a C=O. The two together are one group with its own name.');
      if (key === 'ester' && (v === 'carbonyl' || v === 'alkoxy')) return t('Look at the whole group: a C=O with an O on the same carbon, and that O joined to another carbon. This combination has its own name.');
      if (key === 'ester' && v === 'carboxyl') return t('Carboxyl ends in O–H. Here the O is joined to a carbon atom instead of an H atom.');
      if (key === 'amido' && (v === 'carbonyl' || v === 'amino')) return t('Look at the whole group: a C=O with a nitrogen atom on the same carbon. This combination has its own name.');
      if (key === 'amino' && v === 'amido') return t('Amido needs a C=O on the carbon next to the nitrogen. Here the nitrogen is joined to carbon atoms that have no C=O.');
      if (key === 'alkoxy' && v === 'hydroxyl') return t('Hydroxyl is O–H. Here the oxygen has no H: it sits between two carbon atoms.');
      if (key === 'alkoxy' && v === 'ester') return t('An ester needs a C=O on the carbon next to the oxygen. Here there is none.');
      if (key === 'hydroxyl' && v === 'alkoxy') return t('Alkoxy is an oxygen between two carbon atoms. Here the oxygen is joined to one carbon and one hydrogen.');
      if ((key === 'aldehyde' || key === 'ketone') && v === 'carboxyl') return t('Carboxyl needs an O–H on the same carbon as the C=O. Here the carbon has only the C=O.');
      return t('Not {v}. Look at which atoms are in the highlighted group and how they are bonded.', { v: groupName(v) });
    }
    function askClass(g) {
      prompt.textContent = t('Now the CLASS: a compound with this group belongs to which class of compounds?');
      area.innerHTML = '';
      var want = classKey(m);
      choices(area, CLASS_KEYS.map(function (key) { return { html: className(key), value: key }; }), function (v, api) {
        if (v === want) {
          api.mark(v, 'right'); api.lock();
          say(fb, 'right', t('Correct. The group is called {g}; the class of compound is {c}. This molecule is {name}.', { g: '<b>' + groupName(g.key) + '</b>', c: '<b>' + className(want) + '</b>', name: nameHtml(compound(sel.value).name) }));
          active = -1; ask();
        } else {
          api.mark(v, 'wrong');
          say(fb, 'wrong', (want === 'aldehyde' && v === 'ketone') || (want === 'ketone' && v === 'aldehyde') ? t('Both classes have the carbonyl group. Check where the C=O is: at the end of the chain (with an H on the same carbon) or inside the chain (between two carbon atoms).')
            : t('Not {v}. Use the group you named to choose the class.', { v: className(v) }));
        }
      }, 's32-opts--wrap');
    }
    load();
  });

  /* ====================================================================== s3-2.series */
  S1.widgets.register('s3-2.series', function (w) {
    function seriesName(k) {
      switch (k) {
        case 'alkane': return t('alkanes');
        case 'alkene': return t('alkenes (C=C at the end of the chain)');
        case 'alcohol': return t('alcohols (OH on carbon 1)');
        case 'aldehyde': return t('aldehydes');
        case 'carboxylic acid': return t('carboxylic acids');
        case 'halogenoalkane': return t('chloroalkanes (Cl on carbon 1)');
      }
      return k;
    }
    var setGen = w.readoutItem(t('General formula')), setMembers = w.readoutItem(t('Members shown'), { text: true }), setStep = w.readoutItem(t('Rise for each extra CH₂'), { text: true });
    var selA = w.select({ label: t('Homologous series'), value: w.options.start || 'alkane', onChange: function () { revealed = false; update(); }, options: SERIES.map(function (s) { return { value: s.key, label: seriesName(s.key) }; }) });
    var selB = w.select({ label: t('Compare with'), value: 'none', onChange: update, options: [{ value: 'none', label: t('nothing') }].concat(SERIES.map(function (s) { return { value: s.key, label: seriesName(s.key) }; })) });
    var prop = seg(w, t('Property'), [{ value: 'bp', label: t('Boiling point') }, { value: 'mp', label: t('Melting point (alkanes)') }], 'bp', function () { revealed = true; update(); });
    var host = el('div'), box = el('div', { class: 's32-predict' }), fb = el('div', { class: 'feedback s32-fb' });
    w.stage.appendChild(host); w.stage.appendChild(box); w.stage.appendChild(fb);
    var chart = null, revealed = false;
    function get(key) { return SERIES.filter(function (s) { return s.key === key; })[0]; }
    function update() {
      var A = get(selA.value), B = selB.value !== 'none' && selB.value !== selA.value ? get(selB.value) : null;
      var mp = prop.value === 'mp';
      if (mp) { A = get('alkane'); B = null; }
      var vals = mp ? A.mp : A.bp, nShow = mp || revealed ? vals.length : vals.length - 1;
      var data = vals.slice(0, nShow).map(function (v, k) { return [A.first + k, v]; });
      var series = [{ type: 'line', points: true, labels: true, data: data, name: seriesName(A.key) }];
      if (B) series.push({ type: 'line', points: true, data: B.bp.map(function (v, k) { return [B.first + k, v]; }), name: seriesName(B.key) });
      var all = vals.concat(B ? B.bp : []), lo = Math.floor((Math.min.apply(null, all) - 15) / 50) * 50, hi = Math.ceil((Math.max.apply(null, all) + 25) / 50) * 50;
      var spec = { height: 300, label: t('Graph of boiling point or melting point against the number of carbon atoms. The values are in the readout below.'),
        x: { label: t('Number of carbon atoms in the molecule'), min: 0.5, max: 8.5, ticks: [1, 2, 3, 4, 5, 6, 7, 8] },
        y: { label: mp ? t('Melting point / °C') : t('Boiling point / °C'), min: lo, max: hi, step: 50 }, series: series };
      if (chart) chart.update(spec); else chart = S1.chart.plot(host, spec);
      setGen('<span class="s32-f" data-i18n="off">' + A.general + '</span>');
      setMembers(data.map(function (d) { return 'C' + d[0] + ': ' + String(d[1]).replace('-', '−') + ' °C'; }).join(', '));
      var steps = []; for (var k = 1; k < nShow; k++) steps.push(vals[k] - vals[k - 1]);
      setStep(steps.map(function (s) { return (s >= 0 ? '+' : '−') + Math.abs(s); }).join(', ') + ' °C');
      box.innerHTML = '';
      var nNext = A.first + vals.length - 1;
      if (mp) { say(fb, '', t('Melting points also rise overall as the chain gets longer, but not smoothly. Melting also depends on how well the molecules pack together in the solid, so small molecules do not follow a neat line.')); return; }
      if (!revealed) {
        var input = el('input', { class: 'input input--num s32-num', type: 'text', inputmode: 'decimal', 'aria-label': t('Your predicted boiling point in °C') });
        var go = el('button', { class: 'btn btn--primary', type: 'button', text: t('Check my prediction') });
        box.appendChild(el('p', { class: 's32-prompt', html: t('Predict the next member: the one with {n} carbon atoms, {f}. What will its boiling point be, in °C?', { n: nNext, f: fx(A.member(nNext)) }) }));
        box.appendChild(el('div', { class: 'btn-row' }, [input, go]));
        var check = function () {
          var p = S1.chem.parseNumber(input.value.replace('−', '-')); if (!p) { say(fb, 'partial', t('Type a number, for example 85.')); return; }
          var actual = vals[vals.length - 1], diff = Math.abs(p.value - actual);
          revealed = true; update();
          say(fb, diff <= 8 ? 'right' : 'partial', t('The measured value is {a} °C. Your prediction was {d} °C away.', { a: String(actual).replace('-', '−'), d: S1.chem.fmt(diff, 2) }) + ' ' +
            (diff <= 8 ? t('The trend is regular enough to predict from: that is the point of a homologous series.') : t('Look at the rise for each extra CH₂ in the readout and add a similar step to the last value.')));
        };
        go.addEventListener('click', check); input.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
        say(fb, '', '');
      } else {
        var again = el('button', { class: 'btn btn--small', type: 'button', text: t('Hide the last member again') });
        again.addEventListener('click', function () { revealed = false; update(); });
        box.appendChild(again);
      }
    }
    update();
  });

  /* ====================================================================== s3-2.namer */
  S1.widgets.register('s3-2.namer', function (w) {
    var setScore = w.readoutItem(t('Completed')), setRule = w.readoutItem(t('Limits'), { text: true });
    setRule(t('Parent chain of 1 to 6 carbon atoms; no more than one C=C or C≡C; one type of group (halogeno, hydroxyl, carbonyl or carboxyl); methyl and ethyl branches.'));
    var mode = seg(w, t('Mode'), [{ value: 'name', label: t('Structure → name') }, { value: 'draw', label: t('Name → structure') }], 'name', fresh);
    var level = seg(w, t('Level'), [{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }], Number(w.options.level) || 1, fresh);
    w.button(t('New molecule'), fresh, { primary: true });
    var host = el('div', { class: 's32-draw' }), prompt = el('p', { class: 's32-prompt' }), area = el('div'), fb = el('div', { class: 'feedback s32-fb' }), built = el('p', { class: 's32-built' });
    w.stage.appendChild(host); w.stage.appendChild(built); w.stage.appendChild(prompt); w.stage.appendChild(area); w.stage.appendChild(fb);
    var r, step, clean, doneCount = 0, cleanCount = 0, drawPath, endA, expect = {};
    w.el.__s32 = function () { return { name: r.name, n: r.spec.n, prefix: r.prefix, end: expect.end, done: doneCount }; };
    function suffixWords(s) {
      if (!s.suffix) return s.unsat ? (s.unsat.type === 'en' ? t('the C=C double bond') : t('the C≡C triple bond')) : '';
      return s.suffix.type === 'ol' ? t('the carbon that carries the O–H') : s.suffix.type === 'oic' ? t('the carbon of the COOH group') : t('the carbon of the C=O group');
    }
    function pickDrawPath() {
      // sometimes lay the drawing along a chain that is NOT the parent chain, so the longest chain bends
      var m = r.mol, s = r.spec, p = null;
      if (level.value > 1 && Math.random() < 0.45) {
        var cands = s.subs.filter(function (x) { return x.name === 'methyl' && x.loc >= 2 && x.loc <= 3 && s.n - x.loc >= 2; });
        if (cands.length) {
          var c = cands[0], at = r.path[c.loc - 1], me = m.nb[at].filter(function (x) { return m.atoms[x.j].el === 'C' && r.path.indexOf(x.j) < 0 && m.nb[x.j].length === 1; })[0];
          if (me) p = [me.j].concat(r.path.slice(c.loc - 1));
        }
      }
      if (p) { var L = layoutSkeletal(m, { path: p }), ok = true; for (var i = 0; i < L.atoms.length; i++) for (var j = i + 1; j < L.atoms.length; j++) if (Math.hypot(L.atoms[i].x - L.atoms[j].x, L.atoms[i].y - L.atoms[j].y) < 0.6) ok = false; if (!ok) p = null; }
      return p;
    }
    function draw(stage) {
      var numbers = null, n = r.spec.n;
      if (stage === 'ends') { numbers = {}; numbers[r.path[endA ? 0 : n - 1]] = 'A'; if (n > 1) numbers[r.path[endA ? n - 1 : 0]] = 'B'; }
      if (stage === 'numbered') { numbers = {}; r.path.forEach(function (i, k) { numbers[i] = k + 1; }); }
      var d = drawSkeletal(host, r.mol, { scale: 46, path: drawPath, numbers: numbers, label: t('Skeletal formula of the molecule to name') });
      if (stage && d.svg) for (var k = 0; k < n - 1; k++) {
        var p = d.pts[r.path[k]], q = d.pts[r.path[k + 1]];
        svgEl('line', { x1: p.x, y1: p.y, x2: q.x, y2: q.y, style: 'stroke:var(--accent-soft);stroke-width:13;stroke-linecap:round' }, d.svg, true);
      }
    }
    function fresh() {
      r = randomNamed(Number(level.value)); clean = true; step = 0; drawPath = pickDrawPath(); endA = Math.random() < 0.5;
      built.innerHTML = ''; say(fb, '', '');
      host.hidden = false;
      if (mode.value === 'name') { draw(null); stepChain(); } else drawMode();
    }
    function finish() {
      doneCount++; if (clean) cleanCount++;
      setScore(t('{n} names, {c} with no slip', { n: doneCount, c: cleanCount }));
    }
    function nextBtn(label, fn) {
      var b = el('button', { class: 'btn btn--primary s32-next', type: 'button', text: label });
      b.addEventListener('click', fn); area.appendChild(b); setTimeout(function () { try { b.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }, 0);
    }
    /* Step 1: the parent chain */
    function stepChain() {
      var s = r.spec, total = r.mol.atoms.filter(function (a) { return a.el === 'C'; }).length, what = suffixWords(s);
      prompt.innerHTML = '<b>' + t('Step 1 of 4.') + '</b> ' + (what ? t('Find the longest chain of carbon atoms that contains {what}. How many carbon atoms are in it?', { what: what }) : t('Find the longest chain of carbon atoms. How many carbon atoms are in it?'));
      area.innerHTML = '';
      choices(area, [1, 2, 3, 4, 5, 6, 7].map(function (v) { return { html: String(v), value: v }; }), function (v, api) {
        if (v === s.n) {
          api.mark(v, 'right'); api.lock(); draw('chain');
          built.innerHTML = t('Parent chain: {n} carbon atoms, so the name is built on {stem}.', { n: s.n, stem: '<b class="s32-name" data-i18n="off">' + STEMS[s.n] + '-</b>' });
          say(fb, 'right', t('Correct. The parent chain is highlighted.') + (total > s.n ? ' ' + t('The other {k} carbon atoms are branches.', { k: total - s.n }) : ''));
          nextBtn(t('Next step'), s.n === 1 ? stepPrefix : stepEnd);
        } else {
          api.mark(v, 'wrong'); clean = false;
          say(fb, 'wrong', v === total && total > s.n ? t('You counted every carbon atom. Count only the atoms in one continuous chain; the rest are branches.') : v < s.n ? t('There is a longer chain. A chain may bend round corners: follow the bonds, not the straight line of the drawing.') : t('Too many. Trace one path from carbon to carbon without lifting your finger and without visiting an atom twice.'));
        }
      });
    }
    /* Step 2: which end is carbon 1 */
    function stepEnd() {
      var s = r.spec, P = perceive(r.mol), rev = specFor(r.mol, P, r.path.slice().reverse()).spec, same = formatName(rev).name === r.name;
      draw('ends');
      prompt.innerHTML = '<b>' + t('Step 2 of 4.') + '</b> ' + t('The ends of the parent chain are marked A and B. Which end is carbon 1?');
      area.innerHTML = '';
      var want = same ? 'same' : endA ? 'A' : 'B', why;
      expect.end = want;
      var locs = function (x) { return x.subs.map(function (q) { return q.loc; }).sort(function (a, b) { return a - b; }).join(','); };
      if (same) why = t('Both directions give exactly the same numbers, so either end can be carbon 1.');
      else if (s.suffix && s.suffix.loc !== rev.suffix.loc) why = s.suffix.type === 'al' || s.suffix.type === 'oic' ? t('The carbon of a –CHO or –COOH group is always carbon 1.') : t('The group named by the ending gets the lowest number it can: {a}, not {b}.', { a: s.suffix.loc, b: rev.suffix.loc });
      else if (s.unsat && s.unsat.loc !== rev.unsat.loc) why = t('The multiple bond gets the lowest number it can: it starts at carbon {a}, not carbon {b}.', { a: s.unsat.loc, b: rev.unsat.loc });
      else if (locs(s) !== locs(rev)) why = t('The substituents get the lowest numbers they can: {a} is lower than {b} at the first difference.', { a: locs(s), b: locs(rev) });
      else why = t('The numbers are the same from both ends, so the substituent that comes first in the alphabet gets the lower number.');
      choices(area, [{ html: t('End A'), value: 'A' }, { html: t('End B'), value: 'B' }, { html: t('It makes no difference'), value: 'same' }], function (v, api) {
        if (v === want) { api.mark(v, 'right'); api.lock(); draw('numbered'); say(fb, 'right', t('Correct.') + ' ' + why); nextBtn(t('Next step'), stepPrefix); }
        else { api.mark(v, 'wrong'); clean = false; say(fb, 'wrong', v === 'same' ? t('It does matter here. Number from each end in turn and compare the numbers you get.') : want === 'same' ? t('Try numbering from the other end as well: do the numbers change?') : t('Number from each end in turn. Which end gives the lower number to the group named by the ending, then to the double bond, then to the branches?')); }
      });
    }
    /* Step 3: the prefix */
    function stepPrefix() {
      var s = r.spec, none = t('nothing: no prefix is needed'), want = r.prefix || none, opts = [], P = perceive(r.mol);
      draw('numbered');
      function add(x) { if (x && x !== want && opts.indexOf(x) < 0) opts.push(x); }
      function pre(spec) { return formatName(spec).prefix || none; }
      var c;
      add(pre(specFor(r.mol, P, r.path.slice().reverse()).spec));
      if (s.subs.length) {
        c = JSON.parse(JSON.stringify(s)); c.subs.forEach(function (x) { if (x.name === 'methyl') x.name = 'ethyl'; else if (x.name === 'ethyl') x.name = 'methyl'; else x.loc = x.loc < s.n ? x.loc + 1 : x.loc - 1; }); add(pre(c));
        c = JSON.parse(JSON.stringify(s)); c.subs = c.subs.slice(0, 1); if (s.subs.length > 1) add(pre(c));
        c = JSON.parse(JSON.stringify(s)); c.subs[0].loc = c.subs[0].loc > 1 ? c.subs[0].loc - 1 : c.subs[0].loc + 1; if (s.n > 1) add(pre(c));
        add(none);
      } else { add('1-methyl'); add('2-methyl'); if (s.n > 2) add(s.n + '-methyl'); }
      opts = shuffle([want].concat(opts.slice(0, 3)));
      prompt.innerHTML = '<b>' + t('Step 3 of 4.') + '</b> ' + t('Look at what is attached to the parent chain, apart from the group named by the ending. Which prefix describes it?');
      area.innerHTML = '';
      var list = s.subs.map(function (x) { return t('carbon {n}: {name}', { n: x.loc, name: x.name }); }).join('; ');
      choices(area, opts.map(function (o) { return { html: o === none ? none : '<span data-i18n="off">' + o + '-</span>', value: o }; }), function (v, api) {
        if (v === want) {
          api.mark(v, 'right'); api.lock();
          say(fb, 'right', s.subs.length ? t('Correct. Attached to the chain: {list}. Two of the same kind are written with di-, three with tri-. Different prefixes go in alphabetical order.', { list: list }) : t('Correct. Nothing is attached except the group named by the ending.'));
          nextBtn(t('Next step'), stepAssemble);
        } else { api.mark(v, 'wrong'); clean = false; say(fb, 'wrong', v === none ? t('Something is attached to the parent chain. Look for a line that leaves the highlighted chain, or a halogen atom.') : t('Not this one. Check each attached group: which numbered carbon is it on, and is it –CH₃ (methyl), –CH₂CH₃ (ethyl) or a halogen?')); }
      });
    }
    /* Step 4: the whole name */
    function stepAssemble() {
      var wrong = wrongNames(r.mol, r), order = ['end', 'chain', 'suffix', 'unsat', 'locant', 'count'], pickd = [];
      order.forEach(function (k) { var x = wrong.filter(function (q) { return q.why === k && pickd.indexOf(q) < 0; })[0]; if (x && pickd.length < 3) pickd.push(x); });
      wrong.forEach(function (x) { if (pickd.length < 3 && pickd.indexOf(x) < 0) pickd.push(x); });
      var opts = shuffle([{ name: r.name, why: null }].concat(pickd));
      prompt.innerHTML = '<b>' + t('Step 4 of 4.') + '</b> ' + t('Put it together: prefix, then parent chain, then the ending. Which is the IUPAC name?');
      area.innerHTML = '';
      choices(area, opts.map(function (o) { return { html: '<span data-i18n="off">' + o.name + '</span>', value: o.name }; }), function (v, api) {
        if (v === r.name) {
          api.mark(v, 'right'); api.lock();
          built.innerHTML = t('Name: {name}', { name: nameHtml(r.name) });
          var s = r.spec, bits = [];
          if (r.prefix) bits.push(t('{p} says what is attached and where', { p: '<b data-i18n="off">' + r.prefix + '-</b>' }));
          bits.push(t('{p} says the parent chain has {n} carbon atoms', { p: '<b data-i18n="off">' + STEMS[s.n] + '-</b>', n: s.n }));
          bits.push(s.unsat ? (s.unsat.type === 'en' ? t('-en- says there is one C=C double bond') : t('-yn- says there is one C≡C triple bond')) : t('-an- says all the carbon–carbon bonds are single'));
          bits.push(!s.suffix ? t('the ending -e says there is no group that needs its own ending') : s.suffix.type === 'ol' ? t('the ending -ol says hydroxyl group (an alcohol)') : s.suffix.type === 'al' ? t('the ending -al says carbonyl group at the end of the chain (an aldehyde)') : s.suffix.type === 'one' ? t('the ending -one says carbonyl group inside the chain (a ketone)') : t('the ending -oic acid says carboxyl group (a carboxylic acid)'));
          say(fb, 'right', t('Correct.') + ' ' + bits.join('; ') + '.');
          finish(); nextBtn(t('New molecule'), fresh);
        } else {
          api.mark(v, 'wrong'); clean = false;
          var why = opts.filter(function (o) { return o.name === v; })[0].why;
          say(fb, 'wrong', why === 'end' ? t('That name numbers the chain from the wrong end.') : why === 'chain' ? t('That name uses a shorter chain as the parent. The parent is the longest chain.') : why === 'suffix' ? t('That ending belongs to a different functional group.') : why === 'unsat' ? t('That name leaves out the multiple bond.') : why === 'count' ? t('That name has the wrong number of carbon atoms in the parent chain.') : t('A position number in that name is wrong. Use the numbers on the drawing.'));
        }
      }, 's32-opts--col');
    }
    /* Name → structure */
    function drawMode() {
      host.innerHTML = ''; host.hidden = true;
      var near = nearMolecules(r).slice(0, 3), opts = shuffle([r].concat(near));
      prompt.innerHTML = t('Which skeletal formula shows {name}?', { name: nameHtml(r.name) });
      area.innerHTML = '';
      var api = choices(area, opts.map(function (o, k) {
        var box = el('span', { class: 's32-pic' });
        drawSkeletal(box, o.mol, { scale: 34, label: t('Structure {n}', { n: k + 1 }) });
        return { html: '', node: box, value: o.name };
      }), function (v, api2) {
        if (v === r.name) {
          api2.mark(v, 'right'); api2.lock(); finish();
          say(fb, 'right', t('Correct: that is {name}.', { name: nameHtml(r.name) }));
          nextBtn(t('New molecule'), fresh);
        } else { api2.mark(v, 'wrong'); clean = false; say(fb, 'wrong', t('That structure is {name}. Read the name you were given from the right: the ending, then the parent chain, then the prefixes with their numbers.', { name: nameHtml(v) })); }
      }, 's32-opts--pics');
      return api;
    }
    fresh();
  });

  /* ====================================================================== s3-2.isomers */
  S1.widgets.register('s3-2.isomers', function (w) {
    var setDraw = w.readoutItem(t('Your drawing')), setTarget = w.readoutItem(t('Target')), setFound = w.readoutItem(t('Isomers found'));
    var sel = w.select({ label: t('Molecular formula'), value: w.options.start || 'C4H10', onChange: load,
      options: ISOMER_SETS.map(function (s) { return { value: s.formula, label: s.formula.replace(/\d+/g, function (d) { return String.fromCharCode.apply(null, d.split('').map(function (c) { return 0x2080 + Number(c); })); }) + ruleShort(s) }; }) });
    function ruleShort(s) { return s.rule === 'alkene' ? ' ' + t('(open chains)') : s.rule === 'carbonyl' ? ' ' + t('(with a carbonyl group)') : s.rule === 'acid-ester' ? ' ' + t('(acids and esters)') : ''; }
    var tools = el('div', { class: 's32-tools' }), host = el('div', { class: 's32-draw s32-draw--edit' }), fb = el('div', { class: 'feedback s32-fb' }), foundBox = el('div', { class: 's32-cards' }), task = el('p', { class: 's32-prompt' });
    w.stage.appendChild(task); w.stage.appendChild(host); w.stage.appendChild(tools); w.stage.appendChild(fb);
    w.stage.appendChild(el('p', { class: 's32-cap', text: t('Isomers you have found') })); w.stage.appendChild(foundBox);
    var set, atoms, bonds, selAtom, found, extras, target, shownAll;
    function current() { return prep({ atoms: atoms.map(function (a) { return { el: a.el }; }), bonds: bonds.map(function (b) { return { a: b.a, b: b.b, order: b.order }; }) }); }
    function fcount(f) { var c = {}; f.replace(/([A-Z][a-z]?)(\d*)/g, function (_, e, n) { c[e] = Number(n) || 1; }); return c; }
    function load() {
      set = ISOMER_SETS.filter(function (s) { return s.formula === sel.value; })[0]; target = fcount(set.formula);
      found = []; extras = []; shownAll = false; clearDrawing();
      task.innerHTML = t('Draw every structural isomer of {f}. Select an atom in the drawing, then add the next atom to it. Hydrogen atoms are added for you.', { f: fx(set.formula) }) + ' ' +
        (set.rule === 'alkene' ? t('This task counts the open-chain isomers. All of them are alkenes.') : set.rule === 'carbonyl' ? t('This task counts the isomers that have a carbonyl group.') : set.rule === 'acid-ester' ? t('This task counts the isomers that are carboxylic acids or esters.') : '');
      say(fb, '', ''); renderFound();
    }
    function clearDrawing() { atoms = [{ el: 'C' }]; bonds = []; selAtom = 0; render(); }
    function addAtom(e, o) {
      atoms.push({ el: e }); bonds.push({ a: selAtom, b: atoms.length - 1, order: o });
      if (VALENCE[e] - o > 0) selAtom = atoms.length - 1;
      say(fb, '', ''); render(selAtom);
    }
    function removeAtom() {
      var m = current();
      if (atoms.length === 1) return;
      if (m.nb[selAtom].length > 1) { say(fb, 'partial', t('Only an atom at the end of a chain can be removed. Select an end atom first.')); return; }
      var nbr = m.nb[selAtom][0].j, k = selAtom;
      atoms.splice(k, 1);
      bonds = bonds.filter(function (b) { return b.a !== k && b.b !== k; }).map(function (b) { return { a: b.a > k ? b.a - 1 : b.a, b: b.b > k ? b.b - 1 : b.b, order: b.order }; });
      selAtom = nbr > k ? nbr - 1 : nbr; say(fb, '', ''); render(selAtom);
    }
    function render(focusI) {
      var m = current(), cnt = counts(m);
      drawGroups(host, m, { scale: 36, selected: selAtom, focus: focusI, label: t('Your drawing. Each group is a button: press one to select it.'), onPick: function (i) { selAtom = i; render(i); } });
      setDraw(fx(molecular(m))); setTarget(fx(set.formula));
      tools.innerHTML = '';
      var free = m.h[selAtom], selEl = atoms[selAtom].el;
      function tool(label, e, o) {
        var left = (target[e] || 0) - (cnt[e] || 0), okBond = free >= o && (e === 'C' ? selEl !== 'Br' : selEl === 'C');
        var b = el('button', { class: 'btn btn--small', type: 'button', html: label });
        if (left <= 0 || !okBond) b.disabled = true;
        b.addEventListener('click', function () { addAtom(e, o); });
        tools.appendChild(b);
      }
      tools.appendChild(el('span', { class: 'control__label s32-tools__label', text: t('Add to the selected atom:') }));
      tool(t('carbon'), 'C', 1);
      if (set.unsat) tool(t('carbon, with a double bond (C=C)'), 'C', 2);
      Object.keys(set.atoms).forEach(function (e) {
        tool(e === 'O' ? t('oxygen') : e === 'N' ? t('nitrogen') : t('bromine'), e, 1);
        if (e === 'O' && set.unsat) tool(t('oxygen, with a double bond (C=O)'), 'O', 2);
      });
      var rm = el('button', { class: 'btn btn--small', type: 'button', text: t('Remove the selected atom') }); rm.addEventListener('click', removeAtom); if (atoms.length === 1) rm.disabled = true;
      var cl = el('button', { class: 'btn btn--small', type: 'button', text: t('Start a new drawing') }); cl.addEventListener('click', function () { say(fb, '', ''); clearDrawing(); });
      var ck = el('button', { class: 'btn btn--small btn--primary', type: 'button', text: t('Check this isomer') }); ck.addEventListener('click', check);
      tools.appendChild(el('span', { class: 's32-tools__break' })); tools.appendChild(rm); tools.appendChild(cl); tools.appendChild(ck);
    }
    function info(c) {
      var m = c.mol, k = classKey(m), d = degree(m), extra = d && d.degree >= 1 && (k === 'alcohol' || k === 'halogenoalkane' || k === 'amine') ? degreeName(d.degree) + ' ' : '';
      return extra + className(k);
    }
    function check() {
      var m = current(), cnt = counts(m), need = [], k;
      Object.keys(target).forEach(function (e) { if (e !== 'H' && (cnt[e] || 0) < target[e]) need.push((target[e] - (cnt[e] || 0)) + ' ' + e); });
      if (need.length) { say(fb, 'partial', t('Not finished yet. You still need to add: {list}.', { list: need.join(', ') })); return; }
      if ((cnt.H || 0) !== target.H) { say(fb, 'wrong', t('Your drawing is {a}, but the target is {b}. The other atoms are right, so check the bonds: each double bond removes two H atoms.', { a: fx(molecular(m)), b: fx(set.formula) })); return; }
      var key = canon(m), idx = -1;
      found.forEach(function (c, q) { if (canon(c.mol) === key) idx = q; });
      if (idx >= 0) { say(fb, 'partial', t('This is the same molecule as number {n}, {name}. The atoms are joined in the same order; bending or turning a drawing does not make a new isomer.', { n: idx + 1, name: nameHtml(found[idx].name) })); return; }
      var hit = null; set.targets.forEach(function (id) { if (canon(compound(id).mol) === key) hit = compound(id); });
      if (!hit) {
        if (extras.indexOf(key) < 0) extras.push(key);
        say(fb, 'partial', t('The formula is right and this is a real structural isomer, but it is not one that this task counts (read the task above). Keep looking for the others.')); return;
      }
      var lines = found.slice(0, 3).map(function (c) {
        var rel = relation(hit.mol, c.mol);
        return rel === 'chain' ? t('It is a chain isomer of {n}: same functional group, different carbon chain.', { n: nameHtml(c.name) })
          : rel === 'position' ? t('It is a position isomer of {n}: same carbon chain, group at a different position.', { n: nameHtml(c.name) })
          : rel === 'functional' ? t('It is a functional group isomer of {n}: the atoms form a different functional group.', { n: nameHtml(c.name) })
          : t('It is in the same class as {n}, with the atoms arranged differently around the group.', { n: nameHtml(c.name) });
      });
      found.push(hit); renderFound();
      say(fb, 'right', t('New isomer: {name} ({cls}).', { name: nameHtml(hit.name), cls: info(hit) }) + ' ' + lines.join(' ') + (found.length === set.targets.length ? ' ' + t('That is all {n} of them.', { n: found.length }) : ''));
      if (found.length < set.targets.length) clearDrawing();
    }
    function renderFound() {
      foundBox.innerHTML = '';
      setFound(found.length + ' / ' + set.targets.length);
      var list = shownAll ? set.targets.map(compound) : found;
      list.forEach(function (c, k) {
        var pic = el('div', { class: 's32-card__pic' }), missed = found.indexOf(c) < 0;
        foundBox.appendChild(el('div', { class: 's32-card' }, [pic, el('p', { class: 's32-card__name', html: (missed ? '' : (found.indexOf(c) + 1) + '. ') + nameHtml(c.name) }), el('p', { class: 'small muted', text: info(c) + (missed ? ' ' + t('(not found yet)') : '') }),
          el('p', { class: 'small s32-f', 'data-i18n': 'off', html: fHtml(c.condensed) })]));
        drawSkeletal(pic, c.mol, { scale: 30, label: t('Skeletal formula of {name}', { name: c.name }) });
      });
      if (!list.length) foundBox.appendChild(el('p', { class: 'small muted', text: t('None yet. Build one above and press "Check this isomer".') }));
      if (!shownAll && found.length < set.targets.length) {
        var b = el('button', { class: 'btn btn--small btn--quiet', type: 'button', text: t('Show all {n} isomers', { n: set.targets.length }) });
        b.addEventListener('click', function () { shownAll = true; renderFound(); }); foundBox.appendChild(b);
      }
    }
    load();
  });

  /* ====================================================================== s3-2.pairs */
  S1.widgets.register('s3-2.pairs', function (w) {
    var pairs = [];
    ISOMER_SETS.forEach(function (s) {
      for (var i = 0; i < s.targets.length; i++) for (var j = i + 1; j < s.targets.length; j++) {
        var a = compound(s.targets[i]), b = compound(s.targets[j]), rel = relation(a.mol, b.mol);
        if (rel !== 'other') pairs.push({ a: a, b: b, rel: rel });
      }
    });
    ['methylbutane', 'butan2ol', 'bromobutane2', 'pentan2one', 'methylpropan1ol', 'but1ene', 'methylbutanal'].forEach(function (id) { pairs.push({ a: compound(id), b: compound(id), rel: 'same' }); });
    var setScore = w.readoutItem(t('Score')), right = 0, asked = 0, cur = null, scored;
    var row = el('div', { class: 's32-pair' }), A = el('div', { class: 's32-pair__pic' }), B = el('div', { class: 's32-pair__pic' }), area = el('div'), fb = el('div', { class: 'feedback s32-fb' });
    row.appendChild(A); row.appendChild(B);
    w.stage.appendChild(el('p', { class: 's32-prompt', text: t('How are these two structures related?') })); w.stage.appendChild(row); w.stage.appendChild(area); w.stage.appendChild(fb);
    w.button(t('Next pair'), next, { primary: true });
    w.el.__s32 = function () { return { rel: cur.rel, a: cur.a.id, b: cur.b.id }; };
    function relName(k) { return k === 'chain' ? t('Chain isomers') : k === 'position' ? t('Position isomers') : k === 'functional' ? t('Functional group isomers') : t('The same molecule'); }
    function next() {
      var p; do { p = pairs[Math.floor(Math.random() * pairs.length)]; } while (p === cur);
      cur = p; scored = false; say(fb, '', '');
      var flip = Math.random() < 0.5, first = flip ? p.b : p.a, second = flip ? p.a : p.b;
      drawSkeletal(A, first.mol, { scale: 38, label: t('First structure') });
      var o2 = { scale: 38, label: t('Second structure') };
      if (p.rel === 'same') {
        var m = second.mol, r = nameOf(m), alt = null;
        if (!r.fail) { var sub = r.spec.subs.filter(function (x) { return x.name === 'methyl' && x.loc > 1 && x.loc < r.spec.n; })[0];
          if (sub) { var at = r.path[sub.loc - 1], me = m.nb[at].filter(function (x) { return m.atoms[x.j].el === 'C' && r.path.indexOf(x.j) < 0; })[0]; if (me) alt = [me.j].concat(sub.loc - 1 >= r.spec.n - sub.loc ? r.path.slice(0, sub.loc).reverse() : r.path.slice(sub.loc - 1)); } }
        if (alt && alt.length >= 3) { o2.path = alt; o2.flipY = Math.random() < 0.5; } else { o2.flipX = true; o2.flipY = true; }
      } else if (Math.random() < 0.4) o2.flipY = true;
      drawSkeletal(B, second.mol, o2);
      area.innerHTML = '';
      choices(area, ['chain', 'position', 'functional', 'same'].map(function (k) { return { html: relName(k), value: k }; }), function (v, api) {
        var names = t('{a} and {b}', { a: nameHtml(p.a.name), b: nameHtml(p.b.name) });
        if (!scored) { scored = true; asked++; if (v === p.rel) right++; setScore(t('{r} of {n} correct at the first try', { r: right, n: asked })); }
        if (v === p.rel) {
          api.mark(v, 'right'); api.lock();
          say(fb, 'right', p.rel === 'same' ? t('Correct. Both drawings are {a}: the atoms are joined in the same order, so it is one molecule drawn two ways.', { a: nameHtml(p.a.name) })
            : p.rel === 'chain' ? t('Correct: {names}. Same functional group, but the carbon chain is branched differently.', { names: names })
            : p.rel === 'position' ? t('Correct: {names}. Same carbon chain and same functional group, at a different position on the chain.', { names: names })
            : t('Correct: {names}. Same molecular formula, but different functional groups: {c1} and {c2}.', { names: names, c1: className(classKey(p.a.mol)), c2: className(classKey(p.b.mol)) }));
        } else {
          api.mark(v, 'wrong');
          say(fb, 'wrong', p.rel === 'same' ? t('Follow the chain in each drawing and list what is attached to each carbon. Do you get the same list?')
            : v === 'same' ? t('They are different molecules. Find the longest chain in each one, or look at where the group is attached.')
            : t('Ask three questions in order. Are the functional groups the same? If yes, is the carbon chain the same? If yes, only the position differs.'));
        }
      }, 's32-opts--wrap');
    }
    next();
  });

  /* ====================================================================== s3-2.degree */
  S1.widgets.register('s3-2.degree', function (w) {
    var ids = ['ethanol', 'propan2ol', 'methylpropan2ol', 'butan2ol', 'methylpropan1ol', 'pentan3ol', 'methylbutan2ol', 'bromobutane1', 'bromobutane2', 'bromomethylpropane2', 'bromomethylpropane1',
      'chloromethylbutane', 'chloropropane2', 'iodopropane1', 'ethanamine', 'propan2amine', 'nmethylethanamine', 'trimethylamine', 'dimethylamine', 'methylpropan2amine'];
    var setScore = w.readoutItem(t('Score')), right = 0, asked = 0, order = shuffle(ids), pos = 0, c, d, scored, stage, marks;
    var host = el('div', { class: 's32-draw' }), prompt = el('p', { class: 's32-prompt' }), area = el('div'), fb = el('div', { class: 'feedback s32-fb' });
    w.stage.appendChild(host); w.stage.appendChild(prompt); w.stage.appendChild(area); w.stage.appendChild(fb);
    w.button(t('Next molecule'), next, { primary: true });
    w.el.__s32 = function () { return { id: c.id, centre: d.centre, degree: d.degree }; };
    function slip() { if (!scored) { scored = true; asked++; setScore(t('{r} of {n} with no slip', { r: right, n: asked })); } }
    function draw() {
      drawGroups(host, c.mol, { scale: 36, marks: marks, onPick: stage === 1 ? pick : null, label: stage === 1 ? t('Structure of the molecule. Each group is a button.') : t('Structure of the molecule') });
    }
    function next() {
      c = compound(order[pos++ % order.length]); d = degree(c.mol); scored = false; stage = 1; marks = {};
      area.innerHTML = ''; say(fb, '', ''); draw();
      prompt.innerHTML = '<b>' + t('Step 1 of 3.') + '</b> ' + (d.kind === 'amino' ? t('This is an amine. Press the atom whose neighbours you must count.') : d.kind === 'hydroxyl' ? t('This is an alcohol. Press the atom whose neighbours you must count.') : t('This is a halogenoalkane. Press the atom whose neighbours you must count.'));
    }
    function pick(i) {
      if (stage !== 1) return;
      if (i !== d.centre) {
        slip();
        say(fb, 'wrong', d.kind === 'amino' ? t('For an amine, look at the nitrogen atom itself.') : i === d.hetero ? (d.kind === 'hydroxyl' ? t('Not the oxygen itself. Look at the carbon atom that the O–H is bonded to.') : t('Not the halogen itself. Look at the carbon atom that the halogen is bonded to.')) : (d.kind === 'hydroxyl' ? t('Look at the carbon atom that is bonded directly to the O–H group.') : t('Look at the carbon atom that is bonded directly to the halogen.')));
        return;
      }
      stage = 2; marks = {}; marks[d.centre] = true; draw();
      say(fb, 'right', d.kind === 'amino' ? t('Correct. For an amine you count on the nitrogen atom.') : t('Correct. This is the carbon atom that carries the group.'));
      prompt.innerHTML = '<b>' + t('Step 2 of 3.') + '</b> ' + t('How many carbon atoms are bonded directly to the highlighted atom?');
      area.innerHTML = '';
      choices(area, [0, 1, 2, 3].map(function (v) { return { html: String(v), value: v }; }), function (v, api) {
        if (v !== d.degree) { api.mark(v, 'wrong'); slip(); say(fb, 'wrong', t('Count only carbon atoms, and only those joined directly to the highlighted atom by a bond. Do not count H, O, N or halogen atoms.')); return; }
        api.mark(v, 'right'); api.lock(); stage = 3; d.counted.forEach(function (j) { marks[j] = true; }); draw();
        say(fb, 'right', t('Correct: {n}. They are highlighted too.', { n: d.degree }));
        prompt.innerHTML = '<b>' + t('Step 3 of 3.') + '</b> ' + t('So this compound is…');
        area.innerHTML = '';
        choices(area, [1, 2, 3].map(function (q) { return { html: degreeName(q), value: q }; }), function (v2, api2) {
          if (v2 !== d.degree) { api2.mark(v2, 'wrong'); slip(); say(fb, 'wrong', t('One carbon neighbour is primary, two is secondary, three is tertiary.')); return; }
          api2.mark(v2, 'right'); api2.lock();
          if (!scored) { scored = true; asked++; right++; setScore(t('{r} of {n} with no slip', { r: right, n: asked })); }
          var cls = className(classKey(c.mol));
          say(fb, 'right', t('Correct: {name} is a {deg} {cls}.', { name: nameHtml(c.name), deg: degreeName(d.degree), cls: cls }) + ' ' +
            (d.kind === 'amino' ? t('The nitrogen atom is bonded to {n} carbon atoms.', { n: d.degree }) : t('The carbon that carries the group is bonded to {n} other carbon atoms.', { n: d.degree })) +
            (d.kind === 'amino' && d.degree === 1 && c.mol.nb[d.counted[0]].filter(function (x) { return c.mol.atoms[x.j].el === 'C'; }).length > 1 ? ' ' + t('Notice that the carbon next to the nitrogen has more than one carbon neighbour. That does not matter for an amine.') : ''));
        });
      });
    }
    next();
  });
})();
