/* ==========================================================================
   Structure Lab — question bank for Structure 3.2 Functional groups:
   classification of organic compounds (SL + HL core, understandings 3.2.1–3.2.6).
   Schema: docs/AUTHORING.md section 4.  All questions are original.
   The Additional HL understandings 3.2.7–3.2.12 (stereoisomers and spectra)
   are in data/questions-s3-2h.js, not here.

   Scope limits (docs/research/syllabus-structure3.md):
   - Functional groups to identify: halogeno, hydroxyl, carbonyl, carboxyl, alkoxy,
     amino, amido, ester, phenyl.  Classes: alkanes, alkenes, alkynes, halogenoalkanes,
     alcohols, aldehydes, ketones, carboxylic acids, ethers, amines, amides, esters.
   - Naming is tested only for saturated or mono-unsaturated compounds with a parent
     chain of up to six carbons and one type of group from halogeno, hydroxyl,
     carbonyl and carboxyl.  Names of ethers and esters appear in solutions only.
   - No reactions, no stereoisomers, no spectra.

   Drawings: the quiz engine does not run S1.mol helpers inside question HTML, so
   skel() and full() below build inline SVG (currentColor) from a small SMILES-like
   code.  Every drawing carries a data-g attribute that lists the atoms and bonds
   exactly as drawn; the checking script reads it back (RDKit) and compares it
   with the IUPAC name (OPSIN, PubChem).
   Boiling points: PubChem experimental records, at 101 kPa, rounded to the nearest
   degree (butane and 2,2-dimethylpropane to 0.5 °C).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  /* ---------- small local helpers (no globals) ----------------------------- */
  var MINUS = '−';

  // cf('CH3CH(OH)CH3') → condensed formula with subscripts (never wraps)
  function cf(s) {
    return '<span class="chem">' + s.replace(/([A-Za-z\)])(\d+)/g, '$1<sub>$2</sub>') + '</span>';
  }
  // general formula: gf('C', 'n', 'H', '2n+2')
  function gf() {
    var h = '';
    for (var i = 0; i < arguments.length; i += 2) h += arguments[i] + (arguments[i + 1] ? '<sub>' + arguments[i + 1].replace(/n/g, '<i>n</i>').replace(/-/g, MINUS) + '</sub>' : '');
    return '<span class="chem">' + h + '</span>';
  }
  function math(lines) {
    return lines.map(function (l) { return '<div class="worked__math">' + l + '</div>'; }).join('');
  }
  function table(caption, head, rows) {
    var h = '<div class="table-scroll" tabindex="0"><table class="data"><caption>' + caption + '</caption><thead><tr>';
    head.forEach(function (c, i) { h += '<th' + (i ? ' class="num"' : '') + ' scope="col">' + c + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) {
      h += '<tr>';
      r.forEach(function (c, i) { h += i ? '<td class="num">' + c + '</td>' : '<th scope="row">' + c + '</th>'; });
      h += '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  /* ---------- structure drawings -------------------------------------------
     parse('CC(C)CC(=O)O'): a small subset of SMILES.
       atoms C N O F Cl Br I · bonds = and # · branches ( ) · ring digits 1–9.
     The LAST neighbour written after an atom continues the main chain; neighbours
     in brackets are drawn as branches.  Hydrogens are worked out from valence.   */
  var VAL = { C: 4, N: 3, O: 2, F: 1, Cl: 1, Br: 1, I: 1 };
  function parse(s) {
    var atoms = [], bonds = [], stack = [], prev = -1, order = 1, open = {}, i = 0;
    while (i < s.length) {
      var c = s.charAt(i);
      if (c === '(') stack.push(prev);
      else if (c === ')') prev = stack.pop();
      else if (c === '=') order = 2;
      else if (c === '#') order = 3;
      else if (c >= '1' && c <= '9') {
        if (open[c]) { bonds.push({ a: open[c].a, b: prev, o: Math.max(order, open[c].o), ring: true }); open[c] = null; }
        else open[c] = { a: prev, o: order };
        order = 1;
      } else {
        var two = s.substr(i, 2), el = (two === 'Cl' || two === 'Br') ? two : c;
        if (!VAL[el]) throw new Error('s3-2 bank: unknown atom in ' + s);
        atoms.push({ el: el, kids: [], par: -1, nb: [], used: 0 });
        var n = atoms.length - 1;
        if (prev >= 0) { bonds.push({ a: prev, b: n, o: order }); atoms[prev].kids.push(n); atoms[n].par = prev; }
        order = 1; prev = n; i += el.length - 1;
      }
      i++;
    }
    bonds.forEach(function (b) {
      atoms[b.a].nb.push(b.b); atoms[b.b].nb.push(b.a);
      atoms[b.a].used += b.o; atoms[b.b].used += b.o;
    });
    atoms.forEach(function (a) {
      a.h = VAL[a.el] - a.used;
      if (a.h < 0) throw new Error('s3-2 bank: too many bonds in ' + s);
    });
    return { atoms: atoms, bonds: bonds };
  }
  function r1(v) { return Math.round(v * 10) / 10; }
  function line(x1, y1, x2, y2) { return '<path d="M' + r1(x1) + ' ' + r1(y1) + 'L' + r1(x2) + ' ' + r1(y2) + '"/>'; }
  function txt(x, y, s, anchor) {
    return '<text x="' + r1(x) + '" y="' + r1(y + 4.6) + '" text-anchor="' + (anchor || 'middle') + '">' + s + '</text>';
  }
  function svg(kind, box, lines, texts, label, g) {
    var w = Math.ceil(box.x2 - box.x1), h = Math.ceil(box.y2 - box.y1);
    return '<svg class="mol mol--' + kind + '" viewBox="' + r1(box.x1) + ' ' + r1(box.y1) + ' ' + w + ' ' + h + '" width="' + w + '" height="' + h +
      '" role="img" aria-label="' + label + '" data-g="' + g + '" style="vertical-align:middle;max-width:100%;height:auto">' +
      '<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' + lines + '</g>' +
      '<g fill="currentColor" stroke="none" font-size="13" font-weight="500">' + texts + '</g></svg>';
  }
  function graphCode(prefix, atoms, bonds) {
    return prefix + ':' + atoms.join('.') + ';' + bonds.map(function (b) { return b.a + ['-', '=', '#'][b.o - 1] + b.b; }).join(',');
  }

  /* Skeletal formula.  Zig-zag chain, 120° angles, hetero-atoms labelled with their hydrogens.
     opts.flip starts the zig-zag downwards.                                                   */
  function skel(smiles, opts) {
    opts = opts || {};
    var m = parse(smiles), A = m.atoms, RAD = Math.PI / 180, L = 26;
    function ux(d) { return Math.cos(d * RAD); }
    function uy(d) { return Math.sin(d * RAD); }
    function put(i, x, y) { A[i].x = x; A[i].y = y; A[i].placed = true; }
    // which way a branch should turn next: away from atoms already drawn, otherwise to the right
    function lean(i, d) {
      function room(s) {
        var x = A[i].x + ux(d + 60 * s), y = A[i].y + uy(d + 60 * s), best = 1e9;
        A.forEach(function (q, k) { if (q.placed && k !== i) best = Math.min(best, Math.sqrt((q.x - x) * (q.x - x) + (q.y - y) * (q.y - y))); });
        return Math.min(best, 1.6);
      }
      var up = room(1), down = room(-1);
      if (Math.abs(up - down) > 0.05) return up > down ? 1 : -1;
      return ux(d + 60) >= ux(d - 60) - 1e-9 ? 1 : -1;
    }
    m.bonds.forEach(function (b) {
      if (!b.ring) return;
      var path = [b.b], k = b.b;
      while (k !== b.a) { k = A[k].par; path.push(k); }
      path.reverse();
      var ring = { members: path, done: false };
      path.forEach(function (q) { A[q].ring = ring; });
    });
    function go(i, d, s) {
      var a = A[i];
      if (a.ring) {
        var ring = a.ring, mem = ring.members, n = mem.length;
        if (!ring.done) {
          var dir = d == null ? 0 : d, R = 0.5 / Math.sin(Math.PI / n);
          ring.cx = a.x + R * ux(dir); ring.cy = a.y + R * uy(dir);
          var k0 = mem.indexOf(i);
          mem.forEach(function (q, j) {
            var ang = dir + 180 + (j - k0) * 360 / n;
            put(q, ring.cx + R * ux(ang), ring.cy + R * uy(ang)); A[q].out = ang;
          });
          ring.done = true;
          mem.forEach(function (q) {
            A[q].kids.forEach(function (kid) {
              if (A[kid].placed) return;
              put(kid, A[q].x + ux(A[q].out), A[q].y + uy(A[q].out));
              go(kid, A[q].out, lean(kid, A[q].out));
            });
          });
        }
        return;
      }
      var kids = a.kids.slice();
      if (!kids.length) return;
      var main = kids.pop(), mainAng, br;
      if (d == null) { mainAng = 30 * s; br = [mainAng + 120 * s, mainAng - 120 * s, mainAng + 180]; }
      else {
        mainAng = d + 60 * s;
        var away = d - 60 * s;
        br = kids.length === 1 ? [away] : [away + 30, away - 30];
      }
      kids.forEach(function (kid, j) {
        put(kid, a.x + ux(br[j]), a.y + uy(br[j]));
        go(kid, br[j], lean(kid, br[j]));
      });
      put(main, a.x + ux(mainAng), a.y + uy(mainAng));
      go(main, mainAng, -s);
    }
    put(0, 0, 0);
    go(0, null, opts.flip ? -1 : 1);

    var box = { x1: 1e9, y1: 1e9, x2: -1e9, y2: -1e9 }, lines = '', texts = '';
    function grow(x, y, rx, ry) {
      box.x1 = Math.min(box.x1, x - rx); box.x2 = Math.max(box.x2, x + rx);
      box.y1 = Math.min(box.y1, y - ry); box.y2 = Math.max(box.y2, y + ry);
    }
    A.forEach(function (a) {
      a.px = a.x * L; a.py = -a.y * L;                 // SVG y grows downwards
      a.lab = a.el === 'C' ? '' : a.el;
      a.gap = a.lab ? (a.lab.length > 1 ? 10 : 7.5) : 0;
      grow(a.px, a.py, a.lab ? 11 : 4, a.lab ? 10 : 4);
      if (!a.lab) return;
      texts += txt(a.px, a.py, a.lab);
      if (!a.h) return;
      var hs = 'H' + (a.h > 1 ? '<tspan font-size="9.5" dy="3">' + a.h + '</tspan>' : ''), half = a.lab.length > 1 ? 9 : 5.2;
      var sx = 0, sy = 0;
      a.nb.forEach(function (q) { sx += A[q].x - a.x; sy += A[q].y - a.y; });
      if (a.nb.length >= 2 && Math.abs(sx) < 0.3) {               // N–H in a chain: H above or below
        var dy = sy > 0 ? 13 : -13;
        texts += txt(a.px, a.py + dy, hs); grow(a.px, a.py + dy, 9, 9);
      } else if (sx > 0.25) {                                      // bond leaves to the right: write HO, H2N
        texts += txt(a.px - half, a.py, hs, 'end'); grow(a.px - half - 9, a.py, 8, 10);
      } else {
        texts += txt(a.px + half, a.py, hs, 'start'); grow(a.px + half + 9, a.py, 8, 10);
      }
    });
    m.bonds.forEach(function (b) {
      var p = A[b.a], q = A[b.b], dx = q.px - p.px, dy = q.py - p.py, len = Math.sqrt(dx * dx + dy * dy);
      var ex = dx / len, ey = dy / len, nx = -ey, ny = ex;
      var x1 = p.px + ex * p.gap, y1 = p.py + ey * p.gap, x2 = q.px - ex * q.gap, y2 = q.py - ey * q.gap;
      if (b.o === 1) { lines += line(x1, y1, x2, y2); return; }
      var side = 0, mx = (p.px + q.px) / 2, my = (p.py + q.py) / 2;
      if (p.ring && p.ring === q.ring) side = (p.ring.cx * L - mx) * nx + (-p.ring.cy * L - my) * ny;
      else if (!(p.lab && p.nb.length === 1) && !(q.lab && q.nb.length === 1)) {
        p.nb.concat(q.nb).forEach(function (k) { if (k !== b.a && k !== b.b) side += (A[k].px - mx) * nx + (A[k].py - my) * ny; });
      }
      if (b.o === 3) {
        lines += line(x1, y1, x2, y2) + line(x1 + nx * 3.4, y1 + ny * 3.4, x2 + nx * 3.4, y2 + ny * 3.4) + line(x1 - nx * 3.4, y1 - ny * 3.4, x2 - nx * 3.4, y2 - ny * 3.4);
      } else if (Math.abs(side) < 1e-6) {                          // C=O and other end groups: two equal lines
        lines += line(x1 + nx * 2.2, y1 + ny * 2.2, x2 + nx * 2.2, y2 + ny * 2.2) + line(x1 - nx * 2.2, y1 - ny * 2.2, x2 - nx * 2.2, y2 - ny * 2.2);
      } else {                                                     // C=C: second, shorter line on the inner side
        var sg = side > 0 ? 1 : -1, o = 4.2 * sg, t1 = p.gap ? 0 : 4, t2 = q.gap ? 0 : 4;
        lines += line(x1, y1, x2, y2) + line(x1 + nx * o + ex * t1, y1 + ny * o + ey * t1, x2 + nx * o - ex * t2, y2 + ny * o - ey * t2);
      }
    });
    var g = graphCode('S', A.map(function (a) { return a.el + (a.el !== 'C' && a.h ? a.h : ''); }), m.bonds);
    return svg('skeletal', box, lines, texts, opts.label || ('Skeletal formula. Line notation: ' + smiles), g);
  }

  /* Full structural formula: every atom and every bond, on a square grid.
     The main chain runs left to right; one-atom branches go above and below.   */
  function full(smiles, opts) {
    opts = opts || {};
    var m = parse(smiles), A = m.atoms, U = 34, pts = [], segs = [], chain = [], order = {};
    m.bonds.forEach(function (b) { order[b.a + '_' + b.b] = b.o; order[b.b + '_' + b.a] = b.o; });
    function add(el, x, y) { pts.push({ el: el, x: x, y: y }); return pts.length - 1; }
    function bond(a, b, o) { segs.push({ a: a, b: b, o: o || 1 }); }
    for (var i = 0; i >= 0; i = A[i].kids.length ? A[i].kids[A[i].kids.length - 1] : -1) chain.push(i);
    chain.forEach(function (ai, k) { A[ai].p = add(A[ai].el, k, 0); if (k) bond(A[chain[k - 1]].p, A[ai].p, order[chain[k - 1] + '_' + ai]); });
    chain.forEach(function (ai, k) {
      var a = A[ai], first = k === 0, last = k === chain.length - 1;
      var UP = [0, -1], DOWN = [0, 1], LEFT = [-1, 0], RIGHT = [1, 0];
      var bSlots = [UP, DOWN], hSlots = [UP, DOWN];
      if (first) { bSlots.push(LEFT); hSlots.unshift(LEFT); }
      if (last) { bSlots.push(RIGHT); if (first) hSlots.push(RIGHT); else hSlots.unshift(RIGHT); }
      var taken = [];
      function take(list) {
        for (var j = 0; j < list.length; j++) if (taken.indexOf(list[j]) < 0) { taken.push(list[j]); return list[j]; }
        throw new Error('s3-2 bank: no room in full(' + smiles + ')');
      }
      a.kids.slice(0, last ? a.kids.length : a.kids.length - 1).forEach(function (kid) {
        var b = A[kid], d = take(bSlots);
        if (b.kids.length) throw new Error('s3-2 bank: full() draws one-atom branches only: ' + smiles);
        var bp = add(b.el, k + d[0], d[1]);
        bond(a.p, bp, order[ai + '_' + kid]);
        if (b.h === 1 || b.h === 3) bond(bp, add('H', k + 2 * d[0], 2 * d[1]));
        if (b.h >= 2) [-1, 1].forEach(function (sgn) {
          bond(bp, d[0] === 0 ? add('H', k + 0.72 * sgn, 1.62 * d[1]) : add('H', k + 1.62 * d[0], 0.72 * sgn));
        });
      });
      for (var j = 0; j < a.h; j++) { var d = take(hSlots); bond(a.p, add('H', k + d[0], d[1])); }
    });
    var box = { x1: 1e9, y1: 1e9, x2: -1e9, y2: -1e9 }, lines = '', texts = '';
    pts.forEach(function (p) {
      p.px = p.x * U; p.py = p.y * U; p.gap = p.el.length > 1 ? 10 : 7.5;
      texts += txt(p.px, p.py, p.el);
      box.x1 = Math.min(box.x1, p.px - 11); box.x2 = Math.max(box.x2, p.px + 11);
      box.y1 = Math.min(box.y1, p.py - 10); box.y2 = Math.max(box.y2, p.py + 10);
    });
    segs.forEach(function (b) {
      var p = pts[b.a], q = pts[b.b], dx = q.px - p.px, dy = q.py - p.py, len = Math.sqrt(dx * dx + dy * dy);
      var ex = dx / len, ey = dy / len, nx = -ey, ny = ex, gp = Math.abs(ex) > 0.9 ? p.gap : 7.5, gq = Math.abs(ex) > 0.9 ? q.gap : 7.5;
      var x1 = p.px + ex * gp, y1 = p.py + ey * gp, x2 = q.px - ex * gq, y2 = q.py - ey * gq;
      if (b.o === 1) lines += line(x1, y1, x2, y2);
      else lines += line(x1 + nx * 2.3, y1 + ny * 2.3, x2 + nx * 2.3, y2 + ny * 2.3) + line(x1 - nx * 2.3, y1 - ny * 2.3, x2 - nx * 2.3, y2 - ny * 2.3);
    });
    var g = graphCode('F', pts.map(function (p) { return p.el; }), segs);
    return svg('structural', box, lines, texts, opts.label || ('Full structural formula. Line notation: ' + smiles), g);
  }
  function fig(s) { return '<p data-i18n="off">' + s + '</p>'; }
  function pair(a, b) {
    function one(name, drawing) { return '<span style="display:inline-block;white-space:nowrap;margin:0 1.5em 0.4em 0"><strong>' + name + '</strong>&nbsp; ' + drawing + '</span>'; }
    return '<p data-i18n="off">' + one('X', a) + ' ' + one('Y', b) + '</p>';
  }

  /* ---------- the questions -------------------------------------------------- */
  S1.questions.register('s3-2', [

  /* ======================= Structure 3.2.1  Formulas ========================= */
  {
    id: 's3-2-q001', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.1',
    stem: '<p>Propan-2-ol can be represented in four ways. Which one is the <strong>condensed structural formula</strong>?</p>',
    options: [cf('C3H8O'), cf('CH3CH(OH)CH3'), skel('CC(O)C'), full('CC(O)C')],
    answer: 1,
    misconception: {
      0: 'This is the molecular formula. It counts the atoms of each element in one molecule, but it does not show how they are joined.',
      2: 'This is the skeletal formula. Each line is a bond, each end or corner is a carbon atom, and hydrogen atoms on carbon are not drawn.',
      3: 'This is the full structural formula. It shows every atom and every bond. A condensed formula writes each carbon with its atoms as a group, without drawing bonds.'
    },
    hints: ['A condensed structural formula is written on one line. It lists each carbon atom followed by the atoms joined to it.'],
    solution: '<p>' + cf('CH3CH(OH)CH3') + ' is the condensed structural formula. Read it carbon by carbon: a ' + cf('CH3') + ' group, then a CH carbon that carries an OH group (the brackets show a branch), then another ' + cf('CH3') + ' group.</p><p>' + cf('C3H8O') + ' is the molecular formula. The zig-zag drawing is the skeletal formula. The drawing with every atom and bond is the full structural formula.</p>'
  },
  {
    id: 's3-2-q002', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.1',
    stem: '<p>The skeletal formula of a compound is shown.</p>' + fig(skel('CC(O)CC(C)C')) + '<p>How many <strong>carbon</strong> atoms are there in one molecule?</p>',
    answer: 6, tolerance: { abs: 0.01 }, unit: 'carbon atoms',
    hints: ['In a skeletal formula, every end of a line and every corner is a carbon atom, unless another symbol is written there.', 'Count the ends and the corners. Do not count the O of the OH group.'],
    solution: '<p>Count each line end and each corner that has no symbol.</p><p>Along the chain there are 5 carbon atoms: the left end, three corners, and the right end. The branch at the right adds 1 more line end.</p>' + math(['5 + 1 = 6 carbon atoms']) + '<p>The line that goes to OH ends at an oxygen atom, so it is not a carbon atom. The molecular formula is ' + cf('C6H14O') + '.</p>'
  },
  {
    id: 's3-2-q003', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.1',
    stem: '<p>The skeletal formula of a hydrocarbon is shown.</p>' + fig(skel('CC(C)=CCC')) + '<p>How many <strong>hydrogen</strong> atoms are there in one molecule?</p>',
    answer: 12, tolerance: { abs: 0.01 }, unit: 'hydrogen atoms',
    hints: ['Each carbon atom forms four bonds in total. The bonds that are not drawn are bonds to hydrogen.', 'A double bond counts as two of the four bonds for each carbon atom it joins.', 'Work along the molecule and write the number of H atoms on each carbon. Then add them.'],
    solution: '<p>There are 6 carbon atoms. Give each one enough hydrogen atoms to make four bonds.</p>' + math(['three line ends: 3 ' + '×' + ' ' + cf('CH3') + ' = 9 H', 'C=C carbon with the branch: 4 bonds to carbon already, 0 H', 'other C=C carbon: 3 bonds drawn, 1 H', cf('CH2') + ' corner: 2 H', 'total = 9 + 0 + 1 + 2 = 12 H']) + '<p>The molecular formula is ' + cf('C6H12') + '. This fits the general formula of the alkenes, ' + gf('C', 'n', 'H', '2n') + '.</p>'
  },
  {
    id: 's3-2-q004', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.1',
    stem: '<p>What is the <strong>molecular formula</strong> of the compound with this skeletal formula?</p>' + fig(skel('CC(C)CC(=O)O')),
    options: [cf('C4H8O2'), cf('C5H10O2'), cf('C5H12O2'), cf('C5H10O')],
    answer: 1,
    misconception: {
      0: 'One carbon atom is missing. The end of the short branch line is a carbon atom too, and so is the carbon that holds the two oxygen atoms.',
      2: 'This has two hydrogen atoms too many. The carbon with the C=O double bond uses two of its four bonds for that oxygen, so it holds no hydrogen atoms.',
      3: 'There are two oxygen atoms: one in the C=O double bond and one in the OH group.'
    },
    hints: ['Count the carbon atoms first: line ends and corners with no symbol.', 'Then give each carbon atom enough hydrogen atoms to make four bonds. Remember the H in OH.'],
    solution: '<p>Carbon: 2 line ends on the left, 2 corners in the chain, and the carbon joined to both oxygen atoms. That is 5 C.</p>' + math(['2 ' + '×' + ' ' + cf('CH3') + ' = 6 H', 'CH (branch point) = 1 H', cf('CH2') + ' = 2 H', 'C(=O)OH carbon = 0 H, and OH = 1 H', 'total = 6 + 1 + 2 + 1 = 10 H']) + '<p>There are 2 O atoms. The molecular formula is ' + cf('C5H10O2') + '.</p>'
  },
  {
    id: 's3-2-q005', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.1',
    stem: '<p>The full structural formula of a compound is shown.</p>' + fig(full('CCCC(=O)O')) + '<p>What is its <strong>empirical formula</strong>?</p>',
    options: [cf('C4H8O2'), cf('C2H4O2'), cf('C2H4O'), cf('CH2O')],
    answer: 2,
    misconception: {
      0: 'This is the molecular formula. The empirical formula is the simplest whole-number ratio, so divide every subscript by the largest number that divides all of them.',
      1: 'Carbon and hydrogen were divided by 2, but oxygen was not. Every subscript must be divided by the same number.',
      3: 'Carbon and hydrogen were divided by 4, but oxygen by 2. The ratio 4 : 8 : 2 can only be divided by 2.'
    },
    hints: ['First count the atoms to get the molecular formula.', 'Then divide every subscript by the same largest whole number.'],
    solution: '<p>Count the atoms in the drawing: 4 C, 8 H and 2 O. The molecular formula is ' + cf('C4H8O2') + '.</p>' + math(['4 : 8 : 2 = 2 : 4 : 1 &nbsp; (divide by 2)']) + '<p>The empirical formula is ' + cf('C2H4O') + '.</p>'
  },
  {
    id: 's3-2-q006', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.1',
    stem: '<p>Which skeletal formula represents ' + cf('CH3CH2CH(CH3)CHO') + '?</p>',
    options: [skel('CC(C)CC=O'), skel('CCC(C)CO'), skel('CCC(C)C=O'), skel('CCC(C)C(=O)C')],
    answer: 2,
    misconception: {
      0: 'The branch is on the wrong carbon atom. In the condensed formula the CH that carries ' + cf('CH3') + ' is joined directly to CHO.',
      1: 'CHO is not C' + '–' + 'OH. In CHO the carbon atom has a double bond to oxygen and a single bond to hydrogen.',
      3: 'This drawing has six carbon atoms. CHO is at the end of a chain: its carbon holds H, not another carbon atom.'
    },
    hints: ['Count the carbon atoms in the condensed formula. The skeletal formula must have the same number of line ends and corners.', 'CHO means a carbon atom with a double bond to O and a single bond to H.'],
    solution: '<p>Read the condensed formula from left to right: ' + cf('CH3') + ', ' + cf('CH2') + ', then a CH that carries a ' + cf('CH3') + ' branch, then CHO. That is 5 carbon atoms.</p><p>The correct drawing has a chain of four carbon atoms that ends in C=O, with a one-carbon branch on the carbon next to the C=O carbon.</p>'
  },
  {
    id: 's3-2-q007', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.2.1',
    stem: '<p>The skeletal formula of a compound is shown.</p>' + fig(skel('CC(=O)C(C)C')) + '<p>Deduce (a) the molecular formula and (b) a condensed structural formula of the compound.</p>',
    answer: '<p>(a) ' + cf('C5H10O') + '</p><p>(b) ' + cf('CH3COCH(CH3)2') + ' &nbsp;or&nbsp; ' + cf('CH3COCH(CH3)CH3') + '</p><p>There are 5 carbon atoms: three line ends, the C=O carbon and the branch-point carbon. The three line ends are ' + cf('CH3') + ' groups (9 H) and the branch point is CH (1 H). The C=O carbon has no hydrogen atoms.</p>',
    markscheme: [
      '(a) ' + cf('C5H10O') + ' (elements in any order).',
      '(b) ' + cf('CH3COCH(CH3)2') + ' (accept ' + cf('CH3COCH(CH3)CH3') + ', ' + cf('(CH3)2CHCOCH3') + ' or ' + cf('CH3C(O)CH(CH3)2') + '). Do not accept a molecular formula here.'
    ],
    hints: ['Count carbon atoms at line ends and corners. Then add hydrogen atoms so that each carbon has four bonds.', 'In a condensed formula a C=O in the middle of a chain is written CO. A branch is written in brackets after the carbon that carries it.']
  },
  {
    id: 's3-2-q008', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.1',
    stem: '<p>Paracetamol is a medicine that reduces pain. Its skeletal formula is shown.</p>' + fig(skel('CC(=O)NC1=CC=C(O)C=C1')) + '<p>What is the molecular formula of paracetamol?</p>',
    options: [cf('C8H5NO2'), cf('C7H9NO2'), cf('C8H9NO2'), cf('C8H15NO2')],
    answer: 2,
    misconception: {
      0: 'The four hydrogen atoms on the ring are missing. A ring carbon with only three bonds drawn (counting the double bond as two) holds one hydrogen atom.',
      1: 'One carbon atom is missing. The free line end on the left is a ' + cf('CH3') + ' group.',
      3: 'This treats the ring as if it had only single bonds. Each ring carbon is part of one double bond, so it has room for at most one hydrogen atom.'
    },
    hints: ['Count carbon atoms: the six corners of the ring, the C=O carbon and the line end.', 'Ring carbons that carry N or O have no hydrogen atoms. The other four ring carbons have one each.', 'Do not forget the hydrogen atoms written in NH and OH.'],
    solution: '<p>Carbon: 6 in the ring + the C=O carbon + the ' + cf('CH3') + ' line end = 8 C.</p>' + math([cf('CH3') + ' = 3 H', 'N' + '–' + 'H = 1 H', 'four ring C' + '–' + 'H = 4 H', 'O' + '–' + 'H = 1 H', 'total = 3 + 1 + 4 + 1 = 9 H']) + '<p>There is 1 N atom and there are 2 O atoms. The molecular formula is ' + cf('C8H9NO2') + '.</p>'
  },

  /* ======================= Structure 3.2.2  Functional groups ================ */
  {
    id: 's3-2-q009', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.2',
    stem: '<p>Ethanol is ' + cf('CH3CH2OH') + '. What is the name of the <strong>functional group</strong> ' + '–' + 'OH in ethanol?</p>',
    options: ['Alcohol', 'Hydroxide', 'Hydroxyl', 'Carboxyl'],
    answer: 2,
    misconception: {
      0: '“Alcohol” is the name of the class of compound (the homologous series). The question asks for the name of the group, and markschemes do not accept the class name.',
      1: 'Hydroxide is the ion ' + cf('OH') + '<sup>' + MINUS + '</sup> in ionic compounds such as NaOH. In ethanol the OH is joined to carbon by a covalent bond.',
      3: 'Carboxyl is the group ' + '–' + 'COOH, where the OH is on a carbon that also has a C=O double bond.'
    },
    hints: ['A class name (such as alcohol) and a functional group name are different things. Which one does the question ask for?'],
    solution: '<p>The group ' + '–' + 'OH joined to a carbon atom by a covalent bond is the <strong>hydroxyl</strong> group. Compounds that contain it belong to the class called alcohols.</p><p>Exam point: if the question says “functional group”, write hydroxyl. If it says “class” or “homologous series”, write alcohol.</p>'
  },
  {
    id: 's3-2-q010', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.2',
    stem: '<p>Which hydrocarbon is <strong>unsaturated</strong>?</p>',
    options: [cf('CH3CH2CH2CH3'), cf('(CH3)2CHCH3'), cf('CH3CH=CHCH3'), cf('(CH3)4C')],
    answer: 2,
    misconception: {
      0: 'This is butane. All its carbon' + '–' + 'carbon bonds are single bonds, so it is saturated.',
      1: 'A branch does not make a molecule unsaturated. Every carbon' + '–' + 'carbon bond here is a single bond.',
      3: 'This molecule is highly branched, but it has only single bonds between carbon atoms. It is saturated.'
    },
    hints: ['Unsaturated means that the molecule contains at least one carbon' + '–' + 'carbon double or triple bond.'],
    solution: '<p>A saturated compound has only single bonds between its carbon atoms. An unsaturated compound has at least one carbon' + '–' + 'carbon double bond or triple bond.</p><p>' + cf('CH3CH=CHCH3') + ' has a C=C double bond, so it is unsaturated. The other three are alkanes.</p>'
  },
  {
    id: 's3-2-q011', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.2',
    stem: '<p>The skeletal formula of propanal is shown.</p>' + fig(skel('CCC=O')) + '<p>What is the name of the <strong>functional group</strong> in propanal?</p>',
    options: ['Aldehyde', 'Carbonyl', 'Carboxyl', 'Alkoxy'],
    answer: 1,
    misconception: {
      0: '“Aldehyde” is the class of compound. The functional group in an aldehyde has a different name, and the class name does not score when the group is asked for.',
      2: 'Carboxyl is ' + '–' + 'COOH. It needs an OH on the same carbon as the C=O. Propanal has no OH.',
      3: 'Alkoxy is an oxygen atom with single bonds to two carbon atoms (C' + '–' + 'O' + '–' + 'C). Here the oxygen has a double bond to one carbon.'
    },
    hints: ['The group is C=O. Aldehydes and ketones both contain it.'],
    solution: '<p>The C=O group is the <strong>carbonyl</strong> group. Aldehydes have it at the end of the chain. Ketones have it in the middle of the chain.</p><p>Aldehyde is the name of the class, so it does not answer a question about the functional group.</p>'
  },
  {
    id: 's3-2-q012', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.2',
    stem: '<p>A compound has the condensed formula ' + cf('CH3CH2CONH2') + '. Which row gives the name of its functional group and the name of its class?</p>',
    options: ['Functional group: amino. Class: amine.', 'Functional group: amido. Class: amide.', 'Functional group: amide. Class: amido.', 'Functional group: carbonyl. Class: ketone.'],
    answer: 1,
    misconception: {
      0: 'An amino group is ' + cf('NH2') + ' on a carbon that has no C=O. Here the nitrogen is joined directly to the C=O carbon, which makes a different group.',
      2: 'The two words are the wrong way round. Group names often end in -o or -yl (amino, amido, hydroxyl). Class names are the family names (amine, amide, alcohol).',
      3: 'A ketone has C=O between two carbon atoms. Here the C=O carbon is joined to nitrogen, so the C=O and the ' + cf('NH2') + ' count together as one group.'
    },
    hints: ['Look at what is joined to the C=O carbon: a carbon chain on one side and ' + cf('NH2') + ' on the other.', 'One word in each row is a group name and the other is a class name. Check they are in the right columns.'],
    solution: '<p>' + cf('CONH2') + ' is a C=O with a nitrogen atom on the same carbon. This is the <strong>amido</strong> group. Compounds with this group are <strong>amides</strong>.</p><p>Compare: ' + cf('CH3CH2CH2NH2') + ' has an amino group and is an amine.</p>'
  },
  {
    id: 's3-2-q013', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.2',
    stem: '<p>Aspirin is a common medicine. Its skeletal formula is shown.</p>' + fig(skel('OC(=O)C1=CC=CC=C1OC(C)=O')) + '<p>Which functional groups are present in aspirin? Select <strong>all</strong> that apply.</p>',
    options: ['Carboxyl', 'Ester', 'Phenyl', 'Hydroxyl', 'Alkoxy'],
    answer: [0, 1, 2],
    misconception: {
      3: 'The only OH in aspirin is on a carbon that also has a C=O. Together they make one carboxyl group. It is not counted as a separate hydroxyl group.',
      4: 'Alkoxy is C' + '–' + 'O' + '–' + 'C with no C=O next to the oxygen. In aspirin the C' + '–' + 'O' + '–' + 'C oxygen is next to a C=O, so it is part of an ester group.'
    },
    hints: ['Look at each oxygen atom together with its neighbours before you name a group.', 'C(=O)' + '–' + 'OH is one group. C(=O)' + '–' + 'O' + '–' + 'C is one group.'],
    solution: '<p>Aspirin has three functional groups.</p><ul><li><strong>Phenyl</strong>: the six-carbon ring with alternating double bonds.</li><li><strong>Carboxyl</strong>: the C(=O)OH on the ring.</li><li><strong>Ester</strong>: the C(=O)' + '–' + 'O' + '–' + 'C link, with the O joined to the ring.</li></ul><p>There is no separate hydroxyl group and no alkoxy group, because each of those oxygen atoms is next to a C=O.</p>'
  },
  {
    id: 's3-2-q014', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.2',
    stem: '<p>The skeletal formulas of two biologically active compounds, X and Y, are shown.</p>' + pair(skel('CC(=O)NC1=CC=C(O)C=C1'), skel('NCCC1=CC=C(O)C=C1')) + '<p>Which functional groups are present in <strong>both</strong> X and Y?</p>',
    options: ['Amino, hydroxyl and phenyl', 'Hydroxyl and phenyl', 'Alcohol and benzene', 'Carbonyl, hydroxyl and phenyl'],
    answer: 1,
    misconception: {
      0: 'Only Y has an amino group. In X the nitrogen is joined to a C=O carbon, so X has an amido group.',
      2: 'These are not names of functional groups. Alcohol is a class and benzene is a compound. The group names are hydroxyl and phenyl.',
      3: 'Y has no C=O at all. In X the C=O is part of the amido group, so it is not named as a separate carbonyl group.'
    },
    hints: ['List the groups in X first, then the groups in Y. Then compare the two lists.', 'Check what each nitrogen atom is joined to. Is there a C=O on the next carbon?'],
    solution: '<p>X contains hydroxyl (OH on the ring), phenyl (the ring) and amido (N joined to C=O).</p><p>Y contains hydroxyl, phenyl and amino (' + cf('NH2') + ' on a carbon with no C=O).</p><p>The groups in both are <strong>hydroxyl and phenyl</strong>.</p>'
  },
  {
    id: 's3-2-q015', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.2.2',
    stem: '<p>The skeletal formula of a compound is shown.</p>' + fig(skel('COCCN')) + '<p>State the names of the <strong>two</strong> functional groups in this compound.</p>',
    answer: '<p>Alkoxy and amino.</p><p>The oxygen atom has single bonds to two carbon atoms (C' + '–' + 'O' + '–' + 'C). This is an alkoxy group. The class of compound with this group is the ethers.</p><p>The ' + cf('NH2') + ' on a carbon atom is an amino group. The class of compound is the amines.</p>',
    markscheme: [
      'Alkoxy. (Do not award the mark for “ether”: that is the class name.)',
      'Amino. (“Amine” has been accepted for this group in a markscheme, but amino is the safe answer.)'
    ],
    hints: ['Group names are asked for, not class names.', 'One group is an oxygen atom between two carbon atoms. The other is ' + cf('NH2') + '.']
  },
  {
    id: 's3-2-q016', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.2',
    stem: '<p>The skeletal formula of a compound is shown.</p>' + fig(skel('NCC(=O)CCOC')) + '<p>Which list names <strong>all</strong> the functional groups in this compound?</p>',
    options: ['Amido and alkoxy', 'Amino, carbonyl and ester', 'Amino, carbonyl and alkoxy', 'Amine, ketone and ether'],
    answer: 2,
    misconception: {
      0: 'In an amido group the nitrogen is bonded directly to the C=O carbon. Here there is a ' + cf('CH2') + ' between N and C=O, so they are two separate groups.',
      1: 'In an ester the C' + '–' + 'O' + '–' + 'C oxygen is bonded directly to the C=O carbon. Here two ' + cf('CH2') + ' groups separate them.',
      3: 'These are the correct classes, but the question asks for functional groups. Class names do not score when group names are asked for.'
    },
    hints: ['For N and for each O, check the atoms it is bonded to directly.', 'Amido and ester groups need the N or O to be on the C=O carbon itself.'],
    solution: '<p>Work from left to right.</p><ul><li>' + cf('NH2') + ' on a ' + cf('CH2') + ' carbon: <strong>amino</strong>.</li><li>C=O with a carbon atom on each side: <strong>carbonyl</strong>.</li><li>O with single bonds to two carbon atoms, and no C=O next to it: <strong>alkoxy</strong>.</li></ul><p>Amine, ketone and ether are the matching class names.</p>'
  },

  /* ======================= Structure 3.2.3  Homologous series ================ */
  {
    id: 's3-2-q017', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.3',
    stem: '<p>Which statement is correct for the members of one homologous series?</p>',
    options: ['They have the same molecular formula.', 'Each member differs from the next by a ' + cf('CH2') + ' unit.', 'They have the same boiling point.', 'They have different functional groups.'],
    answer: 1,
    misconception: {
      0: 'Compounds with the same molecular formula are isomers. Members of a homologous series have the same <em>general</em> formula, but different molecular formulas.',
      2: 'Physical properties change gradually along the series. For example, the boiling point rises as the chain gets longer.',
      3: 'All members of a homologous series have the same functional group. That is why their chemical properties are similar.'
    },
    hints: ['Compare methane ' + cf('CH4') + ', ethane ' + cf('C2H6') + ' and propane ' + cf('C3H8') + '. What is added each time?'],
    solution: '<p>A homologous series is a family of compounds with the same functional group. Each member differs from the next by a common unit, ' + cf('CH2') + '.</p><p>Members share one general formula and have similar chemical properties. Their physical properties show a gradual trend.</p>'
  },
  {
    id: 's3-2-q018', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.3',
    stem: '<p>What is the general formula of the alkenes (non-cyclic, with one C=C double bond)?</p>',
    options: [gf('C', 'n', 'H', '2n+2'), gf('C', 'n', 'H', '2n'), gf('C', 'n', 'H', '2n-2'), gf('C', 'n', 'H', '2n+1')],
    answer: 1,
    misconception: {
      0: 'This is the general formula of the alkanes. An alkene has two hydrogen atoms fewer than the alkane with the same number of carbon atoms.',
      2: 'This is the general formula of the alkynes, which have one carbon' + '–' + 'carbon triple bond.',
      3: 'This is an alkyl group, such as ' + cf('CH3') + ' or ' + cf('C2H5') + '. It is part of a molecule, not a complete molecule.'
    },
    hints: ['Test each formula with ethene, ' + cf('C2H4') + ', and propene, ' + cf('C3H6') + '.'],
    solution: '<p>Ethene is ' + cf('C2H4') + ' and propene is ' + cf('C3H6') + '. In each one the number of H atoms is twice the number of C atoms.</p><p>The general formula is ' + gf('C', 'n', 'H', '2n') + '.</p>'
  },
  {
    id: 's3-2-q019', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.3',
    stem: '<p>Which compound is in the same homologous series as ethanol, ' + cf('CH3CH2OH') + '?</p>',
    options: [cf('CH3OCH3'), cf('CH3CHO'), cf('HOCH2CH2OH'), cf('CH3CH2CH2CH2OH')],
    answer: 3,
    misconception: {
      0: 'This has the same molecular formula as ethanol, so it is an isomer. Its functional group is alkoxy (C' + '–' + 'O' + '–' + 'C), so it is an ether, not an alcohol.',
      1: 'This is an aldehyde. Its functional group is carbonyl (C=O), not hydroxyl.',
      2: 'This has two hydroxyl groups. It differs from ethanol by an extra O atom, not by ' + cf('CH2') + ' units.'
    },
    hints: ['Members of one series have the same functional group.', 'They differ only by one or more ' + cf('CH2') + ' units.'],
    solution: '<p>Ethanol has one hydroxyl group on a saturated carbon chain. ' + cf('CH3CH2CH2CH2OH') + ' (butan-1-ol) also has one hydroxyl group, and it has two more ' + cf('CH2') + ' units.</p><p>Both fit the general formula ' + gf('C', 'n', 'H', '2n+1', 'OH', '') + '.</p>'
  },
  {
    id: 's3-2-q020', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.3',
    stem: '<p>The first three members of the carboxylic acid homologous series are ' + cf('CH2O2') + ', ' + cf('C2H4O2') + ' and ' + cf('C3H6O2') + '.</p><p>How many <strong>hydrogen</strong> atoms are there in one molecule of the member with six carbon atoms?</p>',
    answer: 12, tolerance: { abs: 0.01 }, unit: 'hydrogen atoms',
    hints: ['What changes from one member to the next?', 'Each extra carbon atom brings two extra hydrogen atoms. Write the general formula.'],
    solution: '<p>Each member has one more ' + cf('CH2') + ' than the one before. The number of H atoms is always twice the number of C atoms, and there are always 2 O atoms.</p>' + math(['general formula: ' + gf('C', 'n', 'H', '2n', 'O', '2'), 'n = 6: &nbsp; H = 2 ' + '×' + ' 6 = 12']) + '<p>The member with six carbon atoms is ' + cf('C6H12O2') + ' (hexanoic acid).</p>'
  },
  {
    id: 's3-2-q021', level: 'sl', tier: 'exam', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.3',
    stem: '<p>Which statements describe the members of a homologous series? Select <strong>all</strong> that apply.</p>',
    options: ['They can be described by the same general formula.', 'They have similar chemical properties.', 'They have the same molecular formula.', 'They show a gradual change in physical properties.', 'They have the same molar mass.'],
    answer: [0, 1, 3],
    misconception: {
      2: 'Compounds with the same molecular formula are isomers. Members of a homologous series have different molecular formulas, such as ' + cf('CH4') + ', ' + cf('C2H6') + ' and ' + cf('C3H8') + '.',
      4: 'Each member has one more ' + cf('CH2') + ' than the last, so the molar mass rises by about 14 <span class="unit">g mol-1</span> each time.'
    },
    hints: ['Think about what stays the same along the series (the functional group) and what changes (the chain length).'],
    solution: '<p>Members of a homologous series:</p><ul><li>have the same functional group, so they have similar chemical properties;</li><li>fit the same general formula;</li><li>differ from the next member by ' + cf('CH2') + ';</li><li>show a gradual trend in physical properties such as boiling point.</li></ul><p>Their molecular formulas and molar masses are different.</p>'
  },
  {
    id: 's3-2-q022', level: 'sl', tier: 'challenge', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.3',
    stem: '<p>Which homologous series have the general formula ' + gf('C', 'n', 'H', '2n', 'O', '') + '? Consider saturated, non-cyclic members only. Select <strong>all</strong> that apply.</p>',
    options: ['Aldehydes', 'Ketones', 'Alcohols', 'Ethers', 'Carboxylic acids'],
    answer: [0, 1],
    misconception: {
      2: 'Test with ethanol, ' + cf('C2H6O') + '. Alcohols have only single bonds, so they fit ' + gf('C', 'n', 'H', '2n+2', 'O', '') + '.',
      3: 'Test with methoxymethane, ' + cf('CH3OCH3') + ', which is ' + cf('C2H6O') + '. Ethers fit ' + gf('C', 'n', 'H', '2n+2', 'O', '') + ', the same as alcohols.',
      4: 'Carboxylic acids have two oxygen atoms. Ethanoic acid is ' + cf('C2H4O2') + ', so the series fits ' + gf('C', 'n', 'H', '2n', 'O', '2') + '.'
    },
    hints: ['Write the molecular formula of one small member of each series and test it.', 'A C=O double bond removes two hydrogen atoms compared with a molecule that has only single bonds.'],
    solution: '<p>Test one member of each series.</p>' + math(['propanal ' + cf('CH3CH2CHO') + ' = ' + cf('C3H6O'), 'propanone ' + cf('CH3COCH3') + ' = ' + cf('C3H6O'), 'ethanol ' + cf('CH3CH2OH') + ' = ' + cf('C2H6O'), 'methoxymethane ' + cf('CH3OCH3') + ' = ' + cf('C2H6O'), 'ethanoic acid ' + cf('CH3COOH') + ' = ' + cf('C2H4O2')]) + '<p>Only the aldehydes and the ketones fit ' + gf('C', 'n', 'H', '2n', 'O', '') + '. This is why an aldehyde and a ketone with the same number of carbon atoms are functional group isomers.</p>'
  },

  /* ======================= Structure 3.2.4  Trends in a series =============== */
  {
    id: 's3-2-q023', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.4',
    stem: '<p>How does the boiling point change from methane to hexane in the alkane homologous series, and why?</p>',
    options: ['It increases, because the covalent bonds in the molecules become stronger.', 'It increases, because the London (dispersion) forces between the molecules become stronger.', 'It decreases, because larger molecules are held together more weakly.', 'It stays the same, because all alkanes have the same type of bonding.'],
    answer: 1,
    misconception: {
      0: 'Boiling does not break the covalent bonds inside molecules. It separates whole molecules from each other, so the forces <em>between</em> molecules matter.',
      2: 'Larger molecules have more electrons, so the forces between them are stronger, not weaker.',
      3: 'The type of force is the same, but its strength is not. More electrons give stronger London (dispersion) forces.'
    },
    hints: ['When a liquid boils, the molecules move apart but stay whole.', 'Each extra ' + cf('CH2') + ' adds 8 electrons to the molecule.'],
    solution: '<p>The boiling point <strong>increases</strong> along the series. Each member has one more ' + cf('CH2') + ', so it has more electrons and a larger surface.</p><p>This makes the London (dispersion) forces between the molecules stronger. More energy is needed to separate the molecules.</p>'
  },
  {
    id: 's3-2-q024', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.2.4',
    stem: '<p>The table shows the boiling points of the first six alkanes.</p>' + table('Boiling points of the straight-chain alkanes', ['Alkane', 'Formula', 'Boiling point / °C'], [['methane', cf('CH4'), MINUS + '162'], ['ethane', cf('C2H6'), MINUS + '89'], ['propane', cf('C3H8'), MINUS + '42'], ['butane', cf('C4H10'), MINUS + '0.5'], ['pentane', cf('C5H12'), '36'], ['hexane', cf('C6H14'), '69']]) + '<p>Explain the trend in boiling point shown by the data.</p>',
    answer: '<p>The boiling point increases as the number of carbon atoms increases. Each molecule has more electrons (a greater molar mass and a larger surface area) than the one before, so the London (dispersion) forces between the molecules are stronger. More energy is needed to overcome these forces and separate the molecules.</p>',
    markscheme: [
      'More electrons / greater molar mass / larger surface area (as the chain length increases), so stronger London (dispersion) forces between molecules.',
      'More energy is needed to overcome the intermolecular forces / to separate the molecules. (Do not accept any answer that says covalent bonds are broken.)'
    ],
    hints: ['Name the force that acts between alkane molecules.', 'Say what changes in the molecule, how that changes the force, and what that means for the energy needed.']
  },
  {
    id: 's3-2-q025', level: 'sl', tier: 'exam', type: 'order', marks: 1,
    syllabus: 'Structure 3.2.4',
    stem: '<p>These four compounds have similar molar masses (58 to 60 <span class="unit">g mol-1</span>). Put them in order of <strong>increasing boiling point</strong> (lowest boiling point first).</p>',
    options: ['Butane, ' + cf('CH3CH2CH2CH3'), 'Propanal, ' + cf('CH3CH2CHO'), 'Propan-1-ol, ' + cf('CH3CH2CH2OH'), 'Ethanoic acid, ' + cf('CH3COOH')],
    hints: ['The molar masses are similar, so the London (dispersion) forces are similar. Look for other forces.', 'Which molecules are polar? Which have an H atom bonded to O, so that they can form hydrogen bonds with each other?'],
    solution: '<p>The London (dispersion) forces are similar, so the functional group decides the order.</p>' + table('Boiling points', ['Compound', 'Strongest force between molecules', 'Boiling point / °C'], [['butane', 'London (dispersion) forces only', MINUS + '0.5'], ['propanal', 'dipole' + '–' + 'dipole forces (polar C=O)', '48'], ['propan-1-ol', 'hydrogen bonding (O' + '–' + 'H)', '97'], ['ethanoic acid', 'hydrogen bonding (C=O and O' + '–' + 'H)', '118']]) + '<p>Ethanoic acid is higher than propan-1-ol because the carboxyl group forms more hydrogen bonds: both its C=O and its O' + '–' + 'H take part.</p>'
  },
  {
    id: 's3-2-q026', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.4',
    stem: '<p>Ethanol and propane have similar molar masses, and each molecule has 26 electrons.</p>' + table('Data for two compounds', ['Compound', 'Molar mass / g mol<sup>' + MINUS + '1</sup>', 'Boiling point / °C'], [['propane, ' + cf('CH3CH2CH3'), '44.11', MINUS + '42'], ['ethanol, ' + cf('CH3CH2OH'), '46.08', '78']]) + '<p>Which statement explains why the boiling point of ethanol is much higher?</p>',
    options: ['The O' + '–' + 'H covalent bond in ethanol is stronger than the C' + '–' + 'H bonds in propane.', 'Ethanol molecules form hydrogen bonds with each other.', 'Ethanol has much stronger London (dispersion) forces than propane.', 'Ethanol contains ions, and propane does not.'],
    answer: 1,
    misconception: {
      0: 'No covalent bond is broken when a liquid boils. The strength of bonds inside the molecule does not decide the boiling point.',
      2: 'The two molecules have the same number of electrons, so their London (dispersion) forces are similar. This cannot explain a difference of 120 °C.',
      3: 'Ethanol is a molecular covalent compound. The hydroxyl group is not a hydroxide ion.'
    },
    hints: ['Boiling separates molecules from each other. Which forces act between ethanol molecules but not between propane molecules?'],
    solution: '<p>Propane is non-polar. Only London (dispersion) forces act between its molecules.</p><p>Ethanol has a hydroxyl group. The H atom bonded to O in one molecule is attracted to a lone pair on the O atom of another molecule. This is hydrogen bonding, which is stronger than London (dispersion) forces between molecules of this size. More energy is needed to separate the molecules.</p>'
  },
  {
    id: 's3-2-q027', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.2.4',
    stem: '<p>The three compounds in the table are structural isomers with the molecular formula ' + cf('C5H12') + '.</p>' + table('Boiling points of three isomers', ['Compound', 'Condensed formula', 'Boiling point / °C'], [['pentane', cf('CH3CH2CH2CH2CH3'), '36'], ['2-methylbutane', cf('(CH3)2CHCH2CH3'), '28'], ['2,2-dimethylpropane', cf('(CH3)4C'), '9.5']]) + '<p>Explain why the boiling points are different, even though the three compounds have the same molar mass.</p>',
    answer: '<p>All three molecules have the same number of electrons, and all three are non-polar, so the only forces between the molecules are London (dispersion) forces. A more branched molecule is more compact (closer to a sphere). It has a smaller surface area in contact with neighbouring molecules. The London (dispersion) forces are therefore weaker, and less energy is needed to separate the molecules. So the boiling point falls as branching increases.</p>',
    markscheme: [
      'The only intermolecular forces are London (dispersion) forces (in all three compounds) / the number of electrons is the same.',
      'More branching gives a more compact / more spherical molecule with a smaller surface area (less contact between molecules).',
      'So the London (dispersion) forces are weaker and less energy is needed to separate the molecules (accept the reverse argument for the straight chain).'
    ],
    hints: ['The number of electrons is the same in all three, so look at the shape of each molecule.', 'How well can long, straight molecules lie next to each other, compared with ball-shaped molecules?']
  },

  /* ======================= Structure 3.2.5  IUPAC names ====================== */
  {
    id: 's3-2-q028', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>What is the IUPAC name of ' + cf('CH3CH2CH2CH2OH') + '?</p>',
    options: ['Butan-4-ol', 'Butanal', 'Butan-1-ol', 'Butanol'],
    answer: 2,
    misconception: {
      0: 'The chain was numbered from the wrong end. Number from the end that gives the hydroxyl group the lowest possible number.',
      1: 'The ending -al is for aldehydes (CHO). A compound with a hydroxyl group has the ending -ol.',
      3: 'The position number is missing. Without it the name could also mean the isomer with OH on the second carbon.'
    },
    hints: ['Count the carbon atoms in the chain to get the stem.', 'Number the chain so that the carbon with OH has the lowest number, and put that number before -ol.'],
    solution: '<p>Step 1: the longest chain has 4 carbon atoms, so the stem is but-. All bonds between carbon atoms are single, so it is butan-.</p><p>Step 2: the functional group is hydroxyl, so the ending is -ol.</p><p>Step 3: number from the end nearest the OH. The OH is on carbon 1.</p><p>The name is <strong>butan-1-ol</strong>.</p>'
  },
  {
    id: 's3-2-q029', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>The skeletal formula of an alkane is shown.</p>' + fig(skel('CC(CC)CCC')) + '<p>The first step in naming it is to find the longest continuous chain of carbon atoms. How many carbon atoms are in the <strong>longest chain</strong>?</p>',
    answer: 6, tolerance: { abs: 0.01 }, unit: 'carbon atoms',
    hints: ['The longest chain does not have to be drawn in a straight line across the page. It can go round a corner.', 'Try starting at each line end in turn. Count the longest path to another line end.'],
    solution: '<p>The chain drawn across the page has only 5 carbon atoms. A longer path starts at the end of the two-carbon branch, goes down to the main zig-zag, and then runs to the right-hand end.</p>' + math(['2 (branch) + 4 (rest of the zig-zag) = 6 carbon atoms']) + '<p>The parent chain is hexane. The one carbon atom left over (the left-hand end) is a methyl group on carbon 3, so the compound is 3-methylhexane.</p>'
  },
  {
    id: 's3-2-q030', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>What is the IUPAC name of this compound?</p>' + fig(skel('CC(C)C(Cl)CC')),
    options: ['3-chloro-4-methylpentane', '2-methyl-3-chloropentane', '3-chloro-2-methylpentane', '2-chloro-1,1-dimethylbutane'],
    answer: 2,
    misconception: {
      0: 'The chain was numbered from the wrong end. Numbering from the other end gives the lower set of numbers, 2 and 3, instead of 3 and 4.',
      1: 'The numbers are right, but substituents are listed in alphabetical order: chloro comes before methyl.',
      3: 'The longest chain was not used. The chain has five carbon atoms (pentane), not four.'
    },
    hints: ['Find the longest chain. Then number it from the end that gives the substituents the lowest numbers.', 'Write the substituents in alphabetical order.'],
    solution: '<p>Step 1: the longest chain has 5 carbon atoms: pentane.</p><p>Step 2: there are two substituents, a methyl group and a chlorine atom. Numbering from the left gives positions 2 and 3. Numbering from the right gives 3 and 4. Use 2 and 3.</p><p>Step 3: list the substituents alphabetically: chloro before methyl.</p><p>The name is <strong>3-chloro-2-methylpentane</strong>.</p>'
  },
  {
    id: 's3-2-q031', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>What is the IUPAC name of this compound?</p>' + fig(skel('CC(C)CC=O')),
    options: ['2-methylbutanal', '3-methylbutanal', '3-methylbutan-1-one', 'Pentanal'],
    answer: 1,
    misconception: {
      0: 'The chain was numbered from the wrong end. In an aldehyde the C=O carbon is always carbon 1.',
      2: 'The ending -one is for ketones, where the C=O is inside the chain. A C=O at the end of the chain is an aldehyde, with the ending -al.',
      3: 'Pentanal has an unbranched chain of five carbon atoms. This molecule has a chain of four carbon atoms and a methyl branch. The two are isomers.'
    },
    hints: ['The C=O is at the end of the chain. Which class is this, and what is its ending?', 'The carbon atom of the C=O group is carbon 1.'],
    solution: '<p>Step 1: the longest chain that includes the C=O carbon has 4 carbon atoms: butan-.</p><p>Step 2: the C=O is at the end of the chain, so the compound is an aldehyde: butanal. The C=O carbon is carbon 1, so no number is needed for it.</p><p>Step 3: the methyl group is on carbon 3.</p><p>The name is <strong>3-methylbutanal</strong>.</p>'
  },
  {
    id: 's3-2-q032', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>What is the IUPAC name of this compound?</p>' + fig(skel('CC(C)CC(=O)C')),
    options: ['2-methylpentan-4-one', '4-methylpentan-2-one', '4-methylpentanone', '1,1-dimethylbutan-3-one'],
    answer: 1,
    misconception: {
      0: 'The chain was numbered from the wrong end. The carbonyl group must get the lowest possible number, so it is carbon 2, not carbon 4.',
      2: 'The position of the C=O is missing. In a five-carbon chain the C=O could be on carbon 2 or carbon 3, so the number is needed.',
      3: 'The longest chain was not used. The chain has five carbon atoms (pentane), with one methyl branch.'
    },
    hints: ['The C=O is inside the chain. Which class is this, and what is its ending?', 'Number the chain from the end nearer to the C=O.'],
    solution: '<p>Step 1: the longest chain has 5 carbon atoms: pentan-.</p><p>Step 2: the C=O is inside the chain, so the compound is a ketone, with the ending -one. Number from the right-hand end so that the C=O carbon is carbon 2: pentan-2-one.</p><p>Step 3: the methyl group is then on carbon 4.</p><p>The name is <strong>4-methylpentan-2-one</strong>.</p>'
  },
  {
    id: 's3-2-q033', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>Which skeletal formula represents <strong>2-methylbutanoic acid</strong>?</p>',
    options: [skel('CC(C)CC(=O)O'), skel('CCC(C)C=O'), skel('CCC(C)CC(=O)O'), skel('CCC(C)C(=O)O')],
    answer: 3,
    misconception: {
      0: 'This is 3-methylbutanoic acid. The carbon of the COOH group is carbon 1, so carbon 2 is the carbon next to it.',
      1: 'This has no OH on the C=O carbon, so it is an aldehyde (2-methylbutanal), not a carboxylic acid.',
      2: 'This chain is too long. The carbon atom of the COOH group is counted as part of the four-carbon butan- chain. This drawing is 3-methylpentanoic acid.'
    },
    hints: ['Butanoic acid has four carbon atoms in the chain, including the carbon of the COOH group.', 'The COOH carbon is carbon 1. Put the methyl group on carbon 2.'],
    solution: '<p>Build the molecule from the name.</p><p>butan-: a chain of 4 carbon atoms. -oic acid: carbon 1 is the carbon of a COOH group. 2-methyl: a ' + cf('CH3') + ' branch on carbon 2, the carbon next to COOH.</p><p>The condensed formula is ' + cf('CH3CH2CH(CH3)COOH') + '.</p>'
  },
  {
    id: 's3-2-q034', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 3.2.5',
    stem: '<p>The skeletal formula of an alkene is shown.</p>' + fig(skel('CC=CC(C)C')) + '<p>State the IUPAC name of this compound. Show how you chose the numbers.</p>',
    answer: '<p><strong>4-methylpent-2-ene</strong></p><p>The longest chain that contains the C=C has 5 carbon atoms: pent-. Number from the end nearer to the double bond. The double bond then starts at carbon 2: pent-2-ene. The methyl group is on carbon 4.</p><p>Numbering from the other end would give 2-methylpent-3-ene. This is wrong because the double bond must get the lowest possible number.</p>',
    markscheme: [
      'Parent chain: pent-2-ene (five carbon atoms, numbered so that the double bond starts at carbon 2).',
      'Complete name: 4-methylpent-2-ene. (Missing hyphens are not penalised. Do not accept 2-methylpent-3-ene.)'
    ],
    hints: ['The parent chain must contain both carbon atoms of the C=C.', 'The double bond gets the lowest possible number. The branch takes whatever number follows from that.']
  },
  {
    id: 's3-2-q035', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>What is the IUPAC name of this compound?</p>' + fig(full('CC(Cl)(Cl)CC')),
    options: ['2-dichlorobutane', '2,2-chlorobutane', '3,3-dichlorobutane', '2,2-dichlorobutane'],
    answer: 3,
    misconception: {
      0: 'Each substituent needs its own number, even when both are on the same carbon atom. Write 2,2- for two chlorine atoms on carbon 2.',
      1: 'The prefix di- is missing. Two identical substituents need both the numbers (2,2-) and the prefix di-.',
      2: 'The chain was numbered from the wrong end. Number from the end nearer to the chlorine atoms, so they are on carbon 2.'
    },
    hints: ['Count the carbon atoms in the chain, then number from the end nearer to the chlorine atoms.', 'Two identical substituents: give one number for each, and use the prefix di-.'],
    solution: '<p>Step 1: the chain has 4 carbon atoms and only single bonds: butane.</p><p>Step 2: number from the left, so that the chlorine atoms are on carbon 2 (not carbon 3).</p><p>Step 3: there are two chlorine atoms. Give a number for each and use di-: 2,2-dichloro.</p><p>The name is <strong>2,2-dichlorobutane</strong>.</p>'
  },
  {
    id: 's3-2-q036', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>What is the IUPAC name of this compound?</p>' + fig(skel('CC(C)=CC(=O)O')),
    options: ['3-methylbutanoic acid', '2-methylbut-2-en-4-oic acid', '3-methylbut-2-enoic acid', '3-methylbut-2-enal'],
    answer: 2,
    misconception: {
      0: 'This name is for a saturated acid. The C=C double bond must be shown in the name by -en- and its position.',
      1: 'The chain was numbered from the wrong end. The carbon atom of the COOH group is always carbon 1.',
      3: 'The ending -al is for an aldehyde. The C=O carbon here also carries an OH, so the group is carboxyl and the ending is -oic acid.'
    },
    hints: ['Start numbering at the carbon atom of the COOH group.', 'The name needs three parts: the branch, the position of the C=C, and the ending for the carboxyl group.'],
    solution: '<p>Step 1: the longest chain that includes the COOH carbon has 4 carbon atoms: but-.</p><p>Step 2: the COOH carbon is carbon 1. The C=C double bond starts at carbon 2: but-2-en-.</p><p>Step 3: the group is carboxyl, so the ending is -oic acid: but-2-enoic acid.</p><p>Step 4: the methyl branch is on carbon 3.</p><p>The name is <strong>3-methylbut-2-enoic acid</strong>.</p>'
  },
  {
    id: 's3-2-q037', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.5',
    stem: '<p>What is the IUPAC name of this compound?</p>' + fig(skel('CC(O)C(CC)C')),
    options: ['3-ethylbutan-2-ol', '3-methylpentan-2-ol', '3-methylpentan-4-ol', '2-ethylbutan-3-ol'],
    answer: 1,
    misconception: {
      0: 'The chain drawn across the page has four carbon atoms, but it is not the longest. A chain of five goes through the two-carbon branch.',
      2: 'The five-carbon chain is right, but it was numbered from the wrong end. The hydroxyl group must get the lowest possible number.',
      3: 'Two slips: the longest chain has five carbon atoms, not four, and the hydroxyl group must get the lowest possible number.'
    },
    hints: ['Look for the longest chain that contains the carbon with the OH. It may go round a corner.', 'Number the chain from the end nearer to the OH.'],
    solution: '<p>Step 1: the longest chain that contains the C' + '–' + 'OH carbon runs from the left-hand end, through the carbon with OH and the branch point, and on through the two-carbon branch. It has 5 carbon atoms: pentan-.</p><p>Step 2: number from the end nearer to the OH. The OH is on carbon 2: pentan-2-ol.</p><p>Step 3: the one carbon atom left over is a methyl group on carbon 3.</p><p>The name is <strong>3-methylpentan-2-ol</strong>. Its condensed formula is ' + cf('CH3CH(OH)CH(CH3)CH2CH3') + '.</p>'
  },

  /* ======================= Structure 3.2.6  Structural isomers =============== */
  {
    id: 's3-2-q038', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>What are structural isomers?</p>',
    options: ['Compounds with the same general formula but different numbers of carbon atoms', 'Compounds with the same molecular formula but different connectivities of their atoms', 'Compounds with the same empirical formula but different molar masses', 'Atoms with the same number of protons but different numbers of neutrons'],
    answer: 1,
    misconception: {
      0: 'This describes members of a homologous series. Isomers have exactly the same atoms.',
      2: 'These compounds have different molecular formulas (for example ' + cf('C2H4') + ' and ' + cf('C3H6') + '), so they are not isomers.',
      3: 'This describes isotopes of an element. Isomers are compounds.'
    },
    hints: ['Isomers contain the same atoms. What is different about them?'],
    solution: '<p>Structural isomers have the <strong>same molecular formula</strong> but <strong>different connectivities</strong>: the atoms are joined together in a different order.</p><p>Example: butane, ' + cf('CH3CH2CH2CH3') + ', and methylpropane, ' + cf('(CH3)3CH') + ', are both ' + cf('C4H10') + '.</p>'
  },
  {
    id: 's3-2-q039', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>Which compound is a <strong>secondary</strong> alcohol?</p>',
    options: [cf('CH3CH2CH2OH'), cf('(CH3)2CHCH2OH'), cf('CH3CH(OH)CH3'), cf('(CH3)3COH')],
    answer: 2,
    misconception: {
      0: 'The carbon that holds the OH is joined to only one other carbon atom. This is a primary alcohol.',
      1: 'The branch is on the next carbon along. The carbon that holds the OH is ' + cf('CH2') + ', joined to only one other carbon atom, so this is a primary alcohol.',
      3: 'The carbon that holds the OH is joined to three other carbon atoms. This is a tertiary alcohol.'
    },
    hints: ['Find the carbon atom that is bonded to the OH group.', 'Count how many other carbon atoms are bonded directly to that carbon: one = primary, two = secondary, three = tertiary.'],
    solution: '<p>Look only at the carbon atom that carries the OH group, and count the carbon atoms joined to it.</p><p>In ' + cf('CH3CH(OH)CH3') + ' (propan-2-ol) that carbon is joined to two ' + cf('CH3') + ' groups. Two carbon atoms means a <strong>secondary</strong> alcohol.</p>'
  },
  {
    id: 's3-2-q040', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>How many structural isomers have the molecular formula ' + cf('C5H12') + '?</p>',
    answer: 3, tolerance: { abs: 0.01 }, unit: 'isomers',
    hints: ['Start with the unbranched chain of five carbon atoms.', 'Then shorten the chain to four carbon atoms and add one methyl branch. Then try a chain of three with two branches.', 'Check that you have not drawn the same molecule twice in a different position.'],
    solution: '<p>Work from the longest chain to the shortest.</p><ul><li>Chain of 5: pentane, ' + cf('CH3CH2CH2CH2CH3') + '</li><li>Chain of 4 with one methyl branch: 2-methylbutane, ' + cf('(CH3)2CHCH2CH3') + '</li><li>Chain of 3 with two methyl branches: 2,2-dimethylpropane, ' + cf('(CH3)4C') + '</li></ul><p>There are <strong>3</strong> isomers. A methyl group on carbon 3 of butane is the same molecule as 2-methylbutane, seen from the other end.</p>'
  },
  {
    id: 's3-2-q041', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>The skeletal formulas of two alcohols, X and Y, are shown.</p>' + pair(skel('CCCCO'), skel('CCC(O)C')) + '<p>How are X and Y related?</p>',
    options: ['They are chain isomers.', 'They are position isomers.', 'They are functional group isomers.', 'They are not isomers.'],
    answer: 1,
    misconception: {
      0: 'Chain isomers have differently branched carbon chains. Here both molecules have an unbranched chain of four carbon atoms.',
      2: 'Functional group isomers have different functional groups. Both molecules have a hydroxyl group.',
      3: 'Both have the molecular formula ' + cf('C4H10O') + ' and their atoms are joined differently, so they are isomers.'
    },
    hints: ['Check the molecular formula of each. Then compare the carbon chain, the functional group, and where the group is.'],
    solution: '<p>Both molecules are ' + cf('C4H10O') + '. Both have the same unbranched four-carbon chain and the same functional group, hydroxyl.</p><p>Only the position of the group is different: carbon 1 in X (butan-1-ol) and carbon 2 in Y (butan-2-ol). They are <strong>position isomers</strong>.</p>'
  },
  {
    id: 's3-2-q042', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>Which compound is a <strong>secondary</strong> amine?</p>',
    options: [cf('CH3CH(NH2)CH3'), cf('CH3CH2NHCH3'), cf('(CH3)3N'), cf('(CH3)3CNH2')],
    answer: 1,
    misconception: {
      0: 'This is the alcohol rule used by mistake. For amines, count the carbon atoms bonded to the <em>nitrogen</em>. Here the N is bonded to one carbon, so the amine is primary.',
      2: 'The nitrogen atom is bonded to three carbon atoms. This is a tertiary amine.',
      3: 'The nitrogen atom is bonded to only one carbon atom, so this is a primary amine. The branching of that carbon does not matter.'
    },
    hints: ['For amines, the rule is about the nitrogen atom, not about a carbon atom.', 'Count the carbon atoms bonded directly to N.'],
    solution: '<p>Amines are classified by the number of carbon atoms bonded to the nitrogen atom.</p><p>In ' + cf('CH3CH2NHCH3') + ' the nitrogen is bonded to two carbon atoms (and one H). It is a <strong>secondary</strong> amine.</p><p>This is different from alcohols and halogenoalkanes, where you count the carbon atoms on the carbon that holds the group.</p>'
  },
  {
    id: 's3-2-q043', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>Two halogenoalkanes are X, ' + cf('CH3CH2CHBrCH3') + ', and Y, ' + cf('(CH3)2CHCH2Br') + '. Which row classifies them correctly?</p>',
    options: ['X is primary. Y is secondary.', 'X is secondary. Y is primary.', 'X is secondary. Y is secondary.', 'X is secondary. Y is tertiary.'],
    answer: 1,
    misconception: {
      0: 'The two answers are the wrong way round. Count the carbon atoms on the carbon that holds the Br.',
      2: 'In Y the branch is on the carbon next to the C' + '–' + 'Br carbon. The C' + '–' + 'Br carbon itself is ' + cf('CH2') + ', joined to only one carbon atom.',
      3: 'In Y the carbon with three carbon neighbours is the CH, but the Br is on the ' + cf('CH2') + ' carbon next to it.'
    },
    hints: ['Find the carbon atom bonded to Br in each molecule.', 'Count the other carbon atoms bonded directly to that carbon.'],
    solution: '<p>X: the C' + '–' + 'Br carbon is bonded to two other carbon atoms (' + cf('CH2') + ' and ' + cf('CH3') + '). X is <strong>secondary</strong>. It is 2-bromobutane.</p><p>Y: the C' + '–' + 'Br carbon is ' + cf('CH2Br') + ', bonded to one other carbon atom. Y is <strong>primary</strong>. It is 1-bromo-2-methylpropane.</p>'
  },
  {
    id: 's3-2-q044', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>How many structural isomers have the molecular formula ' + cf('C4H9Br') + '?</p>',
    answer: 4, tolerance: { abs: 0.01 }, unit: 'isomers',
    hints: ['There are two possible carbon chains for four carbon atoms: unbranched, and branched.', 'For each chain, put the Br on each different carbon atom in turn.', 'Carbon atoms that are equivalent (for example the two ends of butane) give the same molecule.'],
    solution: '<p>Unbranched chain (butane): Br on carbon 1 or on carbon 2.</p><p>Branched chain (methylpropane): Br on a ' + cf('CH3') + ' carbon or on the central carbon.</p><ul><li>1-bromobutane, ' + cf('CH3CH2CH2CH2Br') + ' (primary)</li><li>2-bromobutane, ' + cf('CH3CH2CHBrCH3') + ' (secondary)</li><li>1-bromo-2-methylpropane, ' + cf('(CH3)2CHCH2Br') + ' (primary)</li><li>2-bromo-2-methylpropane, ' + cf('(CH3)3CBr') + ' (tertiary)</li></ul><p>There are <strong>4</strong> structural isomers.</p>'
  },
  {
    id: 's3-2-q045', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>The skeletal formula of compound X is shown.</p>' + fig(skel('CC(C)CCC')) + '<p>Three of the drawings below are structural isomers of X. Which drawing shows <strong>X itself</strong>, drawn in a different way?</p>',
    options: [skel('CCC(C)CC'), skel('CC(C)(C)CC'), skel('CCCC(C)C', { flip: true }), skel('CC(C)C(C)C')],
    answer: 2,
    misconception: {
      0: 'Here the branch is on the middle carbon of a five-carbon chain (3-methylpentane). In X the branch is on the second carbon.',
      1: 'This molecule has two branches on the same carbon and a longest chain of four (2,2-dimethylbutane). X has one branch and a longest chain of five.',
      3: 'This molecule has two branches on neighbouring carbon atoms and a longest chain of four (2,3-dimethylbutane). X has one branch.'
    },
    hints: ['Turning a drawing over, or drawing it from the other end, does not make a new molecule.', 'Name each drawing: find the longest chain, then the position of each branch. Two drawings with the same name are the same compound.'],
    solution: '<p>Name X: the longest chain has 5 carbon atoms, and there is one methyl branch on carbon 2. X is 2-methylpentane.</p><p>The correct drawing also has a five-carbon chain with one methyl branch on the second carbon from one end. It is X, turned over and drawn from the other end.</p><p>The other three are 3-methylpentane, 2,2-dimethylbutane and 2,3-dimethylbutane. All are ' + cf('C6H14') + ', so they are chain isomers of X.</p>'
  },
  {
    id: 's3-2-q046', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>Which pair of compounds are <strong>functional group isomers</strong>?</p>',
    options: ['Propan-1-ol, ' + cf('CH3CH2CH2OH') + ', and propan-2-ol, ' + cf('CH3CH(OH)CH3'), 'Butane, ' + cf('CH3CH2CH2CH3') + ', and methylpropane, ' + cf('(CH3)3CH'), 'Propanal, ' + cf('CH3CH2CHO') + ', and propanone, ' + cf('CH3COCH3'), 'Ethanol, ' + cf('CH3CH2OH') + ', and propan-1-ol, ' + cf('CH3CH2CH2OH')],
    answer: 2,
    misconception: {
      0: 'Both are alcohols. Only the position of the hydroxyl group differs, so these are position isomers.',
      1: 'Both are alkanes. Only the branching of the carbon chain differs, so these are chain isomers.',
      3: 'These have different molecular formulas (' + cf('C2H6O') + ' and ' + cf('C3H8O') + '), so they are not isomers. They are members of the same homologous series.'
    },
    hints: ['Functional group isomers have the same molecular formula but belong to different classes of compound.'],
    solution: '<p>Propanal and propanone are both ' + cf('C3H6O') + '. Propanal is an aldehyde and propanone is a ketone, so they belong to different classes.</p><p>They are <strong>functional group isomers</strong>. (Both contain a carbonyl group, but its place in the chain puts them in different homologous series.)</p>'
  },
  {
    id: 's3-2-q047', level: 'sl', tier: 'challenge', type: 'numeric', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>How many structural isomers have the molecular formula ' + cf('C4H10O') + '? Include isomers from every class of compound.</p>',
    answer: 7, tolerance: { abs: 0.01 }, unit: 'isomers',
    hints: ['The formula fits ' + gf('C', 'n', 'H', '2n+2', 'O', '') + ', so there are no double bonds and no rings. Which two classes fit?', 'Alcohols: use both four-carbon chains, and put OH on each different carbon.', 'Ethers: put the O atom between two carbon groups. The groups can be 1 + 3 carbon atoms or 2 + 2.'],
    solution: '<p>The oxygen atom can be in a hydroxyl group (alcohols) or between two carbon atoms (ethers).</p><p><strong>Alcohols (4)</strong></p><ul><li>butan-1-ol, ' + cf('CH3CH2CH2CH2OH') + '</li><li>butan-2-ol, ' + cf('CH3CH2CH(OH)CH3') + '</li><li>2-methylpropan-1-ol, ' + cf('(CH3)2CHCH2OH') + '</li><li>2-methylpropan-2-ol, ' + cf('(CH3)3COH') + '</li></ul><p><strong>Ethers (3)</strong></p><ul><li>' + cf('CH3OCH2CH2CH3') + '</li><li>' + cf('CH3OCH(CH3)2') + '</li><li>' + cf('CH3CH2OCH2CH3') + '</li></ul>' + math(['4 + 3 = 7 structural isomers']) + '<p>You do not need to name the ethers.</p>'
  },
  {
    id: 's3-2-q048', level: 'sl', tier: 'challenge', type: 'multi', marks: 1,
    syllabus: 'Structure 3.2.6',
    stem: '<p>Which compounds are <strong>functional group isomers</strong> of propanoic acid, ' + cf('CH3CH2COOH') + '? Select <strong>all</strong> that apply.</p>',
    options: [cf('CH3COOCH3'), cf('HOOCCH2CH3'), cf('HCOOCH2CH3'), cf('CH3CH2CH2COOH'), cf('CH3COCH2OH')],
    answer: [0, 2, 4],
    misconception: {
      1: 'This is propanoic acid itself, written from the other end. Writing a formula backwards does not make a new compound.',
      3: 'This has four carbon atoms, so its molecular formula is ' + cf('C4H8O2') + '. It is the next member of the same homologous series, not an isomer.'
    },
    hints: ['Work out the molecular formula of propanoic acid first. An isomer must match it exactly.', 'Then check the functional group: it must be different from carboxyl.'],
    solution: '<p>Propanoic acid is ' + cf('C3H6O2') + ' and its functional group is carboxyl.</p><ul><li>' + cf('CH3COOCH3') + ' is ' + cf('C3H6O2') + ' with an ester group: a functional group isomer.</li><li>' + cf('HCOOCH2CH3') + ' is ' + cf('C3H6O2') + ' with an ester group: a functional group isomer.</li><li>' + cf('CH3COCH2OH') + ' is ' + cf('C3H6O2') + ' with a carbonyl group and a hydroxyl group: a functional group isomer.</li><li>' + cf('HOOCCH2CH3') + ' is propanoic acid.</li><li>' + cf('CH3CH2CH2COOH') + ' is ' + cf('C4H8O2') + ', a different molecular formula.</li></ul>'
  },
  {
    id: 's3-2-q049', level: 'sl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 3.2.6',
    stem: '<p>Pentan-2-one is ' + cf('CH3COCH2CH2CH3') + '. State the IUPAC name of:</p><p>(a) a position isomer of pentan-2-one;</p><p>(b) a chain isomer of pentan-2-one that is also a ketone;</p><p>(c) a functional group isomer of pentan-2-one.</p>',
    answer: '<p>Pentan-2-one is ' + cf('C5H10O') + '.</p><p>(a) <strong>Pentan-3-one</strong>, ' + cf('CH3CH2COCH2CH3') + '. The chain is the same, and the C=O has moved to carbon 3.</p><p>(b) <strong>3-methylbutan-2-one</strong>, ' + cf('CH3COCH(CH3)2') + '. The carbon chain is now branched.</p><p>(c) <strong>Pentanal</strong>, ' + cf('CH3CH2CH2CH2CHO') + ', or another aldehyde with the formula ' + cf('C5H10O') + '. An aldehyde is in a different class from a ketone.</p>',
    markscheme: [
      '(a) Pentan-3-one.',
      '(b) 3-methylbutan-2-one (accept 3-methylbutanone).',
      '(c) Pentanal (accept 2-methylbutanal, 3-methylbutanal or 2,2-dimethylpropanal).'
    ],
    hints: ['Every answer must have the molecular formula ' + cf('C5H10O') + '.', 'Position isomer: move the C=O along the same chain. Chain isomer: change the branching of the carbon chain.', 'Which other class has the general formula ' + gf('C', 'n', 'H', '2n', 'O', '') + '?']
  }

  ]);
})();
