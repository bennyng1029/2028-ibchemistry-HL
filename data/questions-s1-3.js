/* ==========================================================================
   Structure 1 Lab — question bank for Structure 1.3 Electron configurations
   Schema: docs/AUTHORING.md section 4.  All questions are original.
   SL+HL: 1.3.1–1.3.5.  AHL: 1.3.6, 1.3.7 and transition-element ion
   configurations (tagged 1.3.5 + 'ahl'; the explicit outcome is Structure 3.1.9).
   Constants: h = 6.63e-34 J s, c = 3.00e8 m s-1, NA = 6.02e23 mol-1 (data booklet).
   Ionization energies are real values in kJ mol-1 (first IEs as in the IB data
   booklet; successive IEs from CRC-sourced tables, rounded to the nearest whole number).
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  /* ---------- small local helpers (no globals) ----------------------------- */
  var MINUS = '−', TIMES = '×';

  // cfg('[Ar] 4s1 3d5') → [Ar] 4s<sup>1</sup> 3d<sup>5</sup>
  function cfg(s) {
    return '<span class="mono">' + s.replace(/(\d[spdf])(\d+)/g, '$1<sup>$2</sup>') + '</span>';
  }
  // sci('6.63', -34) → 6.63 × 10<sup>−34</sup>
  function sci(m, e) {
    return m + ' ' + TIMES + ' 10<sup>' + (e < 0 ? MINUS + (-e) : e) + '</sup>';
  }
  // Lines of working. Long lines are broken before '=' (and before '× (' or '÷ (') so they fit a phone screen.
  function plainLen(h) { return h.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').length; }
  function math(lines) {
    var IND = '<br>&nbsp;&nbsp;';
    return lines.map(function (l) {
      if (plainLen(l) > 34) {
        var parts = l.split(' = ').map(function (part) {
          return plainLen(part) > 30 ? part.replace(/ ([\u00d7\u00f7]) \(/g, IND + '$1 (').replace(/ &nbsp; \(/g, IND + '(').replace(/ \u2248 /g, IND + '\u2248 ') : part;
        });
        var head = parts.shift();
        if (parts.length && plainLen(head) < 12) head += ' = ' + parts.shift();
        l = [head].concat(parts).join(IND + '= ');
      }
      return '<div class="worked__math">' + l + '</div>';
    }).join('');
  }
  function ieTable(caption, head, rows) {
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

  /* Orbital (arrow-in-box) diagram as inline SVG. Uses currentColor so it works in both themes.
     groups = [['1s', ['ud']], ['2p', ['ud', 'u', '']]]   u = up arrow, d = down arrow            */
  function boxes(groups, label) {
    var B = 30, GAP = 16, x = 2, parts = '';
    function arrow(cx, up) {
      var y1 = up ? 25 : 7, y2 = up ? 8 : 24, yh = up ? 13 : 19;
      return '<path d="M' + cx + ' ' + y1 + 'V' + y2 + 'M' + (cx - 4) + ' ' + yh + 'L' + cx + ' ' + y2 + 'L' + (cx + 4) + ' ' + yh + '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    groups.forEach(function (g) {
      var start = x;
      g[1].forEach(function (o) {
        parts += '<rect x="' + x + '" y="2" width="' + B + '" height="' + B + '" fill="none" stroke="currentColor" stroke-width="1.4"/>';
        var n = o.length;
        o.split('').forEach(function (a, i) { parts += arrow(x + (n === 1 ? B / 2 : (i === 0 ? 10 : 20)), a === 'u'); });
        x += B;
      });
      parts += '<text x="' + ((start + x) / 2) + '" y="50" text-anchor="middle" font-size="14" fill="currentColor">' + g[0] + '</text>';
      x += GAP;
    });
    var w = x - GAP + 2;
    return '<p><svg viewBox="0 0 ' + w + ' 56" width="' + w + '" height="56" role="img" aria-label="' + label + '">' + parts + '</svg></p>';
  }

  /* Energy-level diagram for hydrogen with four labelled emission arrows (not to scale). */
  function levelDiagram() {
    var y = { 1: 196, 2: 112, 3: 68, 4: 44, 5: 30 }, s = '';
    [1, 2, 3, 4, 5].forEach(function (n) {
      s += '<line x1="62" x2="286" y1="' + y[n] + '" y2="' + y[n] + '" stroke="currentColor" stroke-width="1.4"/>';
      s += '<text x="54" y="' + (y[n] + 4) + '" text-anchor="end" font-size="13" fill="currentColor">n = ' + n + '</text>';
    });
    s += '<line x1="62" x2="286" y1="16" y2="16" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/>';
    s += '<text x="54" y="20" text-anchor="end" font-size="13" fill="currentColor">n = ∞</text>';
    function arrow(x, from, to, name) {
      var y1 = y[from], y2 = y[to] - 2;
      s += '<path d="M' + x + ' ' + y1 + 'V' + y2 + 'M' + (x - 5) + ' ' + (y2 - 8) + 'L' + x + ' ' + y2 + 'L' + (x + 5) + ' ' + (y2 - 8) + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      s += '<text x="' + (x + 9) + '" y="' + Math.max(y2 - 12, (y1 + y2) / 2 + 5) + '" font-size="14" font-weight="700" fill="currentColor">' + name + '</text>';
    }
    arrow(96, 2, 1, 'P'); arrow(148, 3, 2, 'Q'); arrow(200, 5, 2, 'R'); arrow(252, 4, 3, 'S');
    return '<p><svg viewBox="0 0 300 210" width="300" height="210" role="img" aria-label="Energy level diagram for hydrogen, not to scale. Horizontal lines for n = 1 at the bottom up to n = 5, getting closer together, and a dashed line for n = infinity at the top. Four downward arrows: P from n = 2 to n = 1, Q from n = 3 to n = 2, R from n = 5 to n = 2, S from n = 4 to n = 3.">' + s + '</svg></p>';
  }

  /* One p orbital drawn on x, y, z axes. */
  function pOrbital() {
    var s = '';
    s += '<line x1="20" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="1.2"/>';      // x
    s += '<line x1="130" y1="186" x2="130" y2="14" stroke="currentColor" stroke-width="1.2"/>';       // y
    s += '<line x1="76" y1="154" x2="184" y2="46" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>'; // z
    s += '<text x="246" y="105" font-size="14" fill="currentColor">x</text>';
    s += '<text x="126" y="11" text-anchor="middle" font-size="14" fill="currentColor">y</text>';
    s += '<text x="190" y="44" font-size="14" fill="currentColor">z</text>';
    // two lobes along the x axis, meeting at the nucleus
    s += '<path d="M130 100C150 68 214 70 214 100C214 130 150 132 130 100Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.8"/>';
    s += '<path d="M130 100C110 68 46 70 46 100C46 130 110 132 130 100Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.8"/>';
    s += '<circle cx="130" cy="100" r="3" fill="currentColor"/>';
    return '<p><svg viewBox="0 0 262 196" width="262" height="196" role="img" aria-label="An orbital drawn on x, y and z axes. It has two lobes, one on each side of the nucleus, pointing along the horizontal axis, which is labelled x. The vertical axis is labelled y and the dashed diagonal axis is labelled z.">' + s + '</svg></p>';
  }

  /* log10(IE) against number of the electron removed, plotted from real data. */
  function logGraph(values) {
    var X0 = 52, X1 = 300, Y0 = 176, Y1 = 16, lo = 2.8, hi = 4.6, s = '', pts = [];
    function px(i) { return X0 + 14 + (X1 - X0 - 28) * i / (values.length - 1); }
    function py(v) { return Y0 - (Y0 - Y1) * (v - lo) / (hi - lo); }
    s += '<path d="M' + X0 + ' ' + Y1 + 'V' + Y0 + 'H' + X1 + '" fill="none" stroke="currentColor" stroke-width="1.4"/>';
    [3.0, 3.5, 4.0, 4.5].forEach(function (t) {
      s += '<line x1="' + (X0 - 5) + '" x2="' + X1 + '" y1="' + py(t) + '" y2="' + py(t) + '" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.35"/>';
      s += '<text x="' + (X0 - 9) + '" y="' + (py(t) + 4) + '" text-anchor="end" font-size="12" fill="currentColor">' + t.toFixed(1) + '</text>';
    });
    values.forEach(function (v, i) {
      var x = px(i), yv = py(Math.log(v) / Math.LN10);
      pts.push(x.toFixed(1) + ' ' + yv.toFixed(1));
      s += '<line x1="' + x + '" x2="' + x + '" y1="' + Y0 + '" y2="' + (Y0 + 5) + '" stroke="currentColor" stroke-width="1.2"/>';
      s += '<text x="' + x + '" y="' + (Y0 + 19) + '" text-anchor="middle" font-size="12" fill="currentColor">' + (i + 1) + '</text>';
    });
    s += '<path d="M' + pts.join('L') + '" fill="none" stroke="currentColor" stroke-width="1.4"/>';
    pts.forEach(function (p) { var c = p.split(' '); s += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="4" fill="currentColor"/>'; });
    s += '<text x="' + ((X0 + X1) / 2) + '" y="' + (Y0 + 38) + '" text-anchor="middle" font-size="12" fill="currentColor">number of the electron removed</text>';
    s += '<text transform="translate(14 ' + ((Y0 + Y1) / 2) + ') rotate(-90)" text-anchor="middle" font-size="12" fill="currentColor">log₁₀(IE / kJ mol⁻¹)</text>';
    return '<p><svg viewBox="0 0 310 220" width="310" height="220" role="img" aria-label="Graph of log to base 10 of ionization energy against the number of the electron removed, from 1 to 8. The points rise gently from about 3.0 for the first electron to about 3.8 for the fifth, jump sharply to about 4.3 for the sixth, then rise gently to about 4.5 for the eighth.">' + s + '</svg></p>';
  }

  var KJ = '<span class="unit">kJ mol-1</span>';

  S1.questions.register('s1-3', [

  /* ======================= Structure 1.3.1 (SL) ============================ */
  {
    id: 's1-3-q001', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.1',
    stem: '<p>Which statement describes a <strong>line</strong> spectrum?</p>',
    options: [
      'It contains all the wavelengths in a range, so the colours merge into each other.',
      'It contains only certain separate wavelengths, seen as individual lines.',
      'It contains only one wavelength, seen as a single line.',
      'It contains every wavelength of the electromagnetic spectrum.'
    ],
    answer: 1,
    misconception: {
      0: 'This describes a continuous spectrum, such as the rainbow of colours from white light passed through a prism.',
      2: 'A line spectrum usually has many lines. Each line is one wavelength, but there are several of them.',
      3: 'This is the opposite idea. A line spectrum is missing most wavelengths. Only a few specific ones are present.'
    },
    hints: ['Picture a rainbow next to a set of thin coloured lines on a dark background. Which one is the line spectrum?'],
    solution: '<p>A <strong>continuous</strong> spectrum contains all wavelengths (or frequencies) in a range. A <strong>line</strong> spectrum contains only certain discrete wavelengths (or frequencies), seen as separate lines.</p>'
  },
  {
    id: 's1-3-q002', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.1',
    stem: '<p>Which colour of visible light has photons of the <strong>highest</strong> energy?</p>',
    options: ['Red', 'Yellow', 'Green', 'Violet'],
    answer: 3,
    misconception: {
      0: 'Red light has the longest wavelength in the visible region, so it has the lowest frequency and the lowest energy.',
      1: 'Yellow is in the middle of the visible region. Look for the colour with the shortest wavelength.',
      2: 'Green is in the middle of the visible region. Look for the colour with the shortest wavelength.'
    },
    hints: ['The data booklet shows the visible region running from violet (about 400 nm) to red (about 700 nm).', 'Shorter wavelength means higher frequency, and higher frequency means higher energy.'],
    solution: '<p>Violet light has the shortest wavelength in the visible region (about 400 nm). Shorter wavelength means higher frequency and higher energy, so violet photons have the highest energy.</p>'
  },
  {
    id: 's1-3-q003', level: 'sl', tier: 'foundation', type: 'order', marks: 1,
    syllabus: 'Structure 1.3.1',
    stem: '<p>Put these types of electromagnetic radiation in order of <strong>increasing frequency</strong> (lowest frequency first).</p>',
    options: ['Infrared', 'Red light', 'Green light', 'Violet light', 'Ultraviolet'],
    hints: ['Increasing frequency is the same order as increasing energy and <em>decreasing</em> wavelength.', 'Infrared lies next to the red end of the visible region. Ultraviolet lies next to the violet end.'],
    solution: '<p>Infrared has the longest wavelength of these, so it has the lowest frequency. Within the visible region the wavelength falls from red (about 700 nm) through green to violet (about 400 nm), so the frequency rises. Ultraviolet has a shorter wavelength than violet, so it has the highest frequency and the highest energy.</p>'
  },
  {
    id: 's1-3-q004', level: 'sl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 1.3.1',
    stem: '<p>A sample of gaseous atoms is given energy by an electric discharge. Explain how one line in the emission spectrum of the element is produced.</p>',
    answer: '<p>The energy excites an electron to a higher energy level. The electron then returns (falls) to a lower energy level and emits a photon. The energy of the photon equals the difference in energy between the two levels, so the light has one specific frequency (wavelength), which is seen as a line.</p>',
    markscheme: [
      'An electron (in an excited state) returns/falls from a higher energy level to a lower energy level.',
      'A photon is emitted whose energy equals the difference between the two levels (accept: light of a specific frequency/wavelength is emitted).'
    ],
    hints: ['Start with where the electron is after the atom has absorbed energy.', 'What leaves the atom when the electron drops down, and what fixes its energy?']
  },

  /* ======================= Structure 1.3.2 (SL) ============================ */
  {
    id: 's1-3-q005', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.2',
    stem: '<p>In the emission spectrum of hydrogen, electrons fall to the first, second or third energy level. Which row gives the region of the electromagnetic spectrum for each set of lines?</p>',
    options: [
      'To n = 1: visible. To n = 2: ultraviolet. To n = 3: infrared.',
      'To n = 1: ultraviolet. To n = 2: visible. To n = 3: infrared.',
      'To n = 1: infrared. To n = 2: visible. To n = 3: ultraviolet.',
      'To n = 1: ultraviolet. To n = 2: infrared. To n = 3: visible.'
    ],
    answer: 1,
    misconception: {
      0: 'The visible lines do not end at n = 1. Falls to n = 1 release the most energy, and that puts them in the ultraviolet.',
      2: 'This is the right list in the wrong direction. Falls to n = 1 are the largest drops in energy, so they give the highest-energy radiation, not the lowest.',
      3: 'Visible light has more energy than infrared, so it must come from the larger drops. Falls to n = 2 release more energy than falls to n = 3.'
    },
    hints: ['Falls to the lowest level release the most energy.', 'In order of decreasing energy: ultraviolet, visible, infrared.'],
    solution: '<p>The gap between n = 1 and the levels above it is the largest, so falls to n = 1 emit the highest-energy photons: <strong>ultraviolet</strong>. Falls to n = 2 release less energy: <strong>visible</strong>. Falls to n = 3 release less again: <strong>infrared</strong>.</p>'
  },
  {
    id: 's1-3-q006', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.2',
    stem: '<p>Which electron transition in a hydrogen atom <strong>emits</strong> radiation of the <strong>shortest wavelength</strong>?</p>',
    options: ['n = 4 to n = 3', 'n = 5 to n = 2', 'n = 2 to n = 1', 'n = 1 to n = 3'],
    answer: 2,
    misconception: {
      0: 'This is a fall between two levels that are close together in energy. It is a small energy change, so it gives a long wavelength (infrared).',
      1: 'This electron crosses more levels, but the levels above n = 2 are close together. The single gap from n = 2 to n = 1 is larger than the whole drop from n = 5 to n = 2.',
      3: 'This electron moves <em>up</em>. The atom must absorb energy for that, so no radiation is emitted.'
    },
    hints: ['Shortest wavelength means highest energy, so look for the largest fall in energy.', 'The energy levels are not evenly spaced. They get closer together as n increases.'],
    solution: '<p>Shortest wavelength means highest frequency and highest energy. The levels converge, so the gap between n = 1 and n = 2 is by far the largest gap. Any fall to n = 1 gives ultraviolet radiation, which has more energy than the visible lines (falls to n = 2) or the infrared lines (falls to n = 3). So n = 2 to n = 1 emits the shortest wavelength of the four.</p>'
  },
  {
    id: 's1-3-q007', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.2',
    stem: '<p>In each set of lines in the hydrogen emission spectrum, the lines get closer together towards the high-frequency end. What does this show?</p>',
    options: [
      'The energy levels get closer together as their energy increases.',
      'The energy levels are equally spaced.',
      'Electrons can have any energy inside the atom.',
      'Electrons in higher energy levels move more slowly.'
    ],
    answer: 0,
    misconception: {
      1: 'Equally spaced levels would not make the lines bunch up. The lines converge because the gaps between higher levels shrink.',
      2: 'If electrons could have any energy, the spectrum would be continuous. Separate lines show the opposite.',
      3: 'The spectrum gives information about energy differences between levels. It does not tell you how fast the electrons move.'
    },
    hints: ['Each line is one energy difference. If two lines are close together, what does that say about the two starting levels?'],
    solution: '<p>Lines that are close together come from electrons falling from levels that are close in energy. The lines converge at high frequency, so the energy levels converge (get closer together) at higher energy.</p>'
  },
  {
    id: 's1-3-q008', level: 'sl', tier: 'exam', type: 'multi', marks: 2,
    syllabus: 'Structure 1.3.2',
    stem: '<p>Which statements about the emission spectrum of hydrogen are correct?</p>',
    options: [
      'It is made of separate lines, not a continuous band of colour.',
      'Each line is produced when an electron moves from a lower to a higher energy level.',
      'Within each set of lines, the lines get closer together as the frequency increases.',
      'The lines in the visible region come from electrons falling to n = 2.',
      'Falls to n = 1 give lines of lower energy than falls to n = 3.',
      'Each line corresponds to photons of one specific energy.'
    ],
    answer: [0, 2, 3, 5],
    misconception: {
      1: 'Moving up needs energy to be absorbed. Emission lines come from electrons falling from a higher level to a lower one.',
      4: 'Falls to n = 1 are the largest drops in energy. They give ultraviolet lines, which have more energy than the infrared lines from falls to n = 3.'
    },
    hints: ['Emission means the atom gives out light. Which direction must the electron move?', 'Largest fall in energy gives the highest-energy radiation.'],
    solution: '<p>The spectrum is a line spectrum. Each line is light of one frequency, emitted when an electron falls from a higher to a lower energy level, so each line corresponds to photons of one specific energy. The visible lines come from falls to n = 2. Falls to n = 1 give ultraviolet lines (higher energy) and falls to n = 3 give infrared lines (lower energy). In each set the lines converge at high frequency.</p>'
  },
  {
    id: 's1-3-q009', level: 'sl', tier: 'exam', type: 'short', marks: 3,
    syllabus: 'Structure 1.3.2',
    stem: '<p>The emission spectrum of hydrogen is a line spectrum, not a continuous spectrum. Explain how this is evidence that the electron in a hydrogen atom can only be in certain energy levels.</p>',
    answer: '<p>A line spectrum shows that the atom emits light of only certain frequencies, so only photons of certain energies are emitted. Each photon is emitted when the electron falls from a higher energy level to a lower one, and the energy of the photon equals the difference in energy between those two levels. Only certain energy differences are seen, so the electron can only have certain fixed (discrete) energies. If the electron could have any energy, every energy difference would be possible and the spectrum would be continuous.</p>',
    markscheme: [
      'Only certain/specific frequencies (or wavelengths, or photon energies) are emitted.',
      'Each photon/line is produced when an electron falls from a higher to a lower energy level, and its energy equals the energy difference between the two levels.',
      'So only certain energy differences are possible, which means the energy levels are discrete/fixed (accept: if any energy were allowed the spectrum would be continuous).'
    ],
    hints: ['What does each line tell you about the energy of the photons emitted?', 'Link the photon energy to the two levels the electron moves between.', 'Finish with the contrast: what would you see if any energy were allowed?']
  },
  {
    id: 's1-3-q010', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.2',
    stem: '<p>The diagram shows some energy levels of the hydrogen atom (not to scale) and four electron transitions, P, Q, R and S.</p>' + levelDiagram() + '<p>Which transition emits <strong>visible</strong> light of the <strong>lowest frequency</strong>?</p>',
    options: ['P', 'Q', 'R', 'S'],
    answer: 1,
    misconception: {
      0: 'P ends on n = 1. Falls to n = 1 give ultraviolet radiation, which is not visible and has the highest frequency of the four.',
      2: 'R does give visible light because it ends on n = 2. But it is a larger fall than Q, so its frequency is higher.',
      3: 'S has the lowest frequency of all four, but it ends on n = 3. Falls to n = 3 give infrared radiation, which is not visible.'
    },
    hints: ['First find the arrows that give visible light. Which level must they end on?', 'Then compare the lengths of those falls. Smaller fall in energy means lower frequency.'],
    solution: '<p>Visible lines come from falls to n = 2, so only Q (n = 3 to n = 2) and R (n = 5 to n = 2) are visible. Q is the smaller fall in energy, so its photon has less energy and a lower frequency. The answer is Q. (P is ultraviolet and S is infrared.)</p>'
  },
  {
    id: 's1-3-q011', level: 'sl', tier: 'challenge', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.3.2',
    stem: '<p>In a sample of hydrogen gas, atoms are excited so that the highest level reached by any electron is n = 5. The electrons can return to lower levels in one fall or in several smaller falls.</p><p>How many different lines can appear in the <strong>visible</strong> region of the emission spectrum?</p>',
    answer: 3, tolerance: { abs: 0.01 }, unit: 'lines',
    hints: ['Visible lines come from falls that end on one particular level. Which one?', 'List every level above it that an electron could start from.'],
    solution: '<p>Visible lines come from falls that end on n = 2. The electron can start from n = 3, n = 4 or n = 5 (it can reach n = 3 or n = 4 by an earlier, smaller fall from n = 5).</p>' + math(['n = 5 → n = 2, &nbsp; n = 4 → n = 2, &nbsp; n = 3 → n = 2']) + '<p>That is <strong>3</strong> lines in the visible region. The other possible falls end on n = 1 (ultraviolet) or on n = 3 or n = 4 (infrared).</p>'
  },

  /* ======================= Structure 1.3.3 (SL) ============================ */
  {
    id: 's1-3-q012', level: 'sl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.3.3',
    stem: '<p>What is the maximum number of electrons that can occupy the main energy level n = 4?</p>',
    answer: 32, tolerance: { abs: 0.01 }, unit: 'electrons',
    hints: ['A main energy level n can hold a maximum of 2n<sup>2</sup> electrons.', 'Square n first, then multiply by 2.'],
    solution: math(['maximum = 2n<sup>2</sup> = 2 ' + TIMES + ' 4<sup>2</sup> = 2 ' + TIMES + ' 16 = 32 electrons']) + '<p>Check with the sublevels: 4s (2) + 4p (6) + 4d (10) + 4f (14) = 32.</p><p>Common slips: 2n = 8, and n<sup>2</sup> = 16 (that is the number of orbitals, each of which holds two electrons).</p>'
  },

  /* ======================= Structure 1.3.4 (SL) ============================ */
  {
    id: 's1-3-q013', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.4',
    stem: '<p>Which row describes the shapes of an s orbital and a p orbital?</p>',
    options: [
      's orbital: spherical. p orbital: dumbbell-shaped.',
      's orbital: dumbbell-shaped. p orbital: spherical.',
      's orbital: circular path around the nucleus. p orbital: figure-of-eight path around the nucleus.',
      's orbital: spherical. p orbital: spherical, but larger.'
    ],
    answer: 0,
    misconception: {
      1: 'These are the right two shapes, swapped. The s orbital is the sphere.',
      2: 'An orbital is not a path. It is a region of space where there is a high probability of finding the electron.',
      3: 'A larger sphere describes an s orbital in a higher main energy level (2s compared with 1s). A p orbital has two lobes.'
    },
    hints: ['One of them looks the same from every direction. The other has two lobes, one on each side of the nucleus.'],
    solution: '<p>An s orbital is spherical, centred on the nucleus. A p orbital is dumbbell-shaped: two lobes on opposite sides of the nucleus. There are three p orbitals in a p sublevel, pointing along the x, y and z axes.</p>'
  },
  {
    id: 's1-3-q014', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.4',
    stem: '<p>The diagram shows one atomic orbital. The nucleus is where the axes cross.</p>' + pOrbital() + '<p>Which orbital is shown?</p>',
    options: ['s', 'p<sub>x</sub>', 'p<sub>y</sub>', 'p<sub>z</sub>'],
    answer: 1,
    misconception: {
      0: 'An s orbital is a sphere centred on the nucleus. This orbital has two lobes.',
      2: 'A p<sub>y</sub> orbital has its lobes along the y axis. Check which axis runs through the middle of both lobes here.',
      3: 'A p<sub>z</sub> orbital has its lobes along the z axis. Check which axis runs through the middle of both lobes here.'
    },
    hints: ['Two lobes means a p orbital.', 'A p orbital is named after the axis that its lobes lie along.'],
    solution: '<p>The orbital has two lobes, one on each side of the nucleus, so it is a p orbital. The lobes lie along the x axis, so it is p<sub>x</sub>. The other two p orbitals have the same shape and the same energy, but point along the y and z axes.</p>'
  },

  /* ======================= Structure 1.3.5 (SL) ============================ */
  {
    id: 's1-3-q015', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>What is the full electron configuration of a phosphorus atom (Z = 15) in its ground state?</p>',
    options: [
      cfg('1s2 2s2 2p6 3s2 3p3'),
      cfg('1s2 2s2 2p6 3s2 3d3'),
      cfg('1s2 2s2 2p8 3s2 3p1'),
      cfg('1s2 2s2 2p6 3s2 3p5')
    ],
    answer: 0,
    misconception: {
      1: 'After 3s the next sublevel to fill is 3p, not 3d. The 3d sublevel is higher in energy than 4s.',
      2: 'A p sublevel has three orbitals, so it holds at most 6 electrons, not 8.',
      3: 'Count the electrons: 2 + 2 + 6 + 2 + 5 = 17. That is chlorine. Phosphorus has 15.'
    },
    hints: ['The superscripts must add up to 15.', 'Fill in the order 1s, 2s, 2p, 3s, 3p. An s sublevel holds 2 electrons and a p sublevel holds 6.'],
    solution: '<p>Fill the sublevels from the lowest energy upwards (Aufbau principle): 1s (2), 2s (2), 2p (6), 3s (2). That is 12 electrons. The remaining 3 go into 3p.</p>' + math([cfg('1s2 2s2 2p6 3s2 3p3') + ' &nbsp; (2 + 2 + 6 + 2 + 3 = 15)'])
  },
  {
    id: 's1-3-q016', level: 'sl', tier: 'foundation', type: 'order', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>Put these sublevels in the order in which they are filled as atomic number increases (first to be filled at the top).</p>',
    options: ['3s', '3p', '4s', '3d', '4p'],
    hints: ['Electrons go into the lowest-energy sublevel available (Aufbau principle).', 'One sublevel of the fourth main energy level is filled before the 3d sublevel.'],
    solution: '<p>The order of filling is 3s, 3p, 4s, 3d, 4p. The 4s sublevel is filled before 3d: potassium is ' + cfg('[Ar] 4s1') + ' and calcium is ' + cfg('[Ar] 4s2') + '. The 3d sublevel then fills from scandium to zinc, and 4p fills from gallium to krypton.</p>'
  },
  {
    id: 's1-3-q017', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>A student draws this orbital diagram for a beryllium atom (Z = 4).</p>' + boxes([['1s', ['ud']], ['2s', ['uu']]], 'Orbital diagram. The 1s box contains one up arrow and one down arrow. The 2s box contains two up arrows.') + '<p>Which rule or principle does the diagram break?</p>',
    options: ['The Aufbau principle', 'Hund’s rule', 'The Pauli exclusion principle', 'None. The diagram is correct.'],
    answer: 2,
    misconception: {
      0: 'The Aufbau principle is about filling the lowest-energy sublevels first. Here 1s is full before 2s is used, so the order is right.',
      1: 'Hund’s rule is about how electrons spread out over several orbitals of the same energy, such as the three 2p orbitals. A 2s sublevel has only one orbital.',
      3: 'Look at the two arrows in the 2s box. They point the same way.'
    },
    hints: ['Compare the two arrows in the 1s box with the two arrows in the 2s box.', 'Which principle says that two electrons in the same orbital must have opposite spins?'],
    solution: '<p>The two electrons in the 2s orbital are drawn with the same spin (both arrows up). The <strong>Pauli exclusion principle</strong> says an orbital can hold at most two electrons, and they must have opposite spins. The 2s box should show one arrow up and one arrow down.</p>'
  },
  {
    id: 's1-3-q018', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>What is the electron configuration of the sulfide ion, <span class="chem">S^2-</span>? (Sulfur has Z = 16.)</p>',
    options: [
      cfg('1s2 2s2 2p6 3s2 3p2'),
      cfg('1s2 2s2 2p6 3s2 3p4'),
      cfg('1s2 2s2 2p6 3s2 3p6'),
      cfg('1s2 2s2 2p6 3s2 3p6 4s2')
    ],
    answer: 2,
    misconception: {
      0: 'This has 14 electrons. A 2− charge means the atom has <em>gained</em> two electrons, not lost them.',
      1: 'This is the sulfur atom, with 16 electrons. The ion has two more.',
      3: 'This has 20 electrons. The ion has 16 + 2 = 18.'
    },
    hints: ['Work out the number of electrons first: atomic number, then adjust for the charge.', 'A negative charge means extra electrons.'],
    solution: '<p>A sulfur atom has 16 electrons. The 2− charge means two extra electrons: 16 + 2 = 18 electrons.</p>' + math([cfg('1s2 2s2 2p6 3s2 3p6') + ' &nbsp; (the same configuration as argon)'])
  },
  {
    id: 's1-3-q019', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>What is the condensed electron configuration of a chromium atom (Z = 24) in its ground state?</p>',
    options: [
      cfg('[Ar] 4s2 3d4'),
      cfg('[Ar] 4s1 3d5'),
      cfg('[Ar] 3d6'),
      cfg('[Kr] 4s1 3d5')
    ],
    answer: 1,
    misconception: {
      0: 'This is what the usual filling order predicts, but chromium is one of the two exceptions you must know.',
      2: 'This has the right number of electrons, but the 4s orbital is not empty in a chromium atom.',
      3: 'The noble gas core must be the noble gas <em>before</em> the element. Krypton (Z = 36) comes after chromium.'
    },
    hints: ['Argon has 18 electrons, so 6 more are needed.', 'Chromium and copper are the two exceptions to the usual filling order.'],
    solution: '<p>Chromium has 24 electrons: the argon core (18) plus 6. The usual order predicts ' + cfg('[Ar] 4s2 3d4') + ', but chromium is an exception. Its ground state is ' + cfg('[Ar] 4s1 3d5') + '. (Writing it as ' + cfg('[Ar] 3d5 4s1') + ' is also accepted.)</p>'
  },
  {
    id: 's1-3-q020', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>What is the full electron configuration of a copper atom (Z = 29) in its ground state?</p>',
    options: [
      cfg('1s2 2s2 2p6 3s2 3p6 4s2 3d9'),
      cfg('1s2 2s2 2p6 3s2 3p6 4s1 3d10'),
      cfg('1s2 2s2 2p6 3s2 3p6 3d10'),
      cfg('1s2 2s2 2p6 3s2 3p6 4s2 3d10')
    ],
    answer: 1,
    misconception: {
      0: 'This is what the usual filling order predicts, but copper is one of the two exceptions you must know.',
      2: 'Count the electrons: this has 28. A copper atom has 29.',
      3: 'Count the electrons: this has 30. That is zinc.'
    },
    hints: ['The superscripts must add up to 29.', 'Chromium and copper are the two exceptions to the usual filling order.'],
    solution: '<p>Copper has 29 electrons. The usual order predicts ' + cfg('4s2 3d9') + ' after the argon core, but copper is an exception. Its ground state is</p>' + math([cfg('1s2 2s2 2p6 3s2 3p6 4s1 3d10') + ' &nbsp; (2 + 2 + 6 + 2 + 6 + 1 + 10 = 29)'])
  },
  {
    id: 's1-3-q021', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>How many <strong>unpaired</strong> electrons are there in an iron atom (Z = 26) in its ground state?</p>',
    answer: 4, tolerance: { abs: 0.01 }, unit: 'unpaired electrons',
    hints: ['Write the configuration first. Only a partly filled sublevel can contain unpaired electrons.', 'A d sublevel has five orbitals. Put one electron in each orbital before pairing any (Hund’s rule).'],
    solution: '<p>Iron is ' + cfg('[Ar] 4s2 3d6') + '. The 4s orbital is full, so its two electrons are paired. The 3d sublevel has five orbitals and six electrons. By Hund’s rule the first five electrons go into separate orbitals, and the sixth pairs up with one of them.</p>' + boxes([['4s', ['ud']], ['3d', ['ud', 'u', 'u', 'u', 'u']]], 'Orbital diagram for iron beyond the argon core. The 4s box has one up and one down arrow. The five 3d boxes hold: an up and a down arrow, then one up arrow in each of the other four.') + '<p>That leaves <strong>4</strong> unpaired electrons.</p>'
  },
  {
    id: 's1-3-q022', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>A student draws this orbital diagram for a nitrogen atom (Z = 7) in its ground state.</p>' + boxes([['1s', ['ud']], ['2s', ['ud']], ['2p', ['ud', 'u', '']]], 'Orbital diagram. The 1s box and the 2s box each contain one up arrow and one down arrow. Of the three 2p boxes, the first contains an up arrow and a down arrow, the second contains one up arrow, and the third is empty.') + '<p>Which rule or principle does the diagram break?</p>',
    options: ['The Aufbau principle', 'Hund’s rule', 'The Pauli exclusion principle', 'None. The diagram is correct.'],
    answer: 1,
    misconception: {
      0: 'The sublevels are filled in the right order: 1s, then 2s, then 2p. The problem is inside the 2p sublevel.',
      2: 'Every orbital that holds two electrons shows one arrow up and one arrow down, so the Pauli exclusion principle is obeyed.',
      3: 'Look at the 2p sublevel. One orbital holds a pair while another orbital of the same energy is empty.'
    },
    hints: ['The number of electrons (7) and the order of the sublevels are both right. Look at how the 2p electrons are arranged.', 'Which rule says orbitals of the same energy are each occupied singly before any is doubly occupied?'],
    solution: '<p><strong>Hund’s rule</strong>: orbitals in the same sublevel are each occupied by one electron, with parallel spins, before any orbital is doubly occupied. The three 2p electrons of nitrogen should be in three separate 2p orbitals, all with the same spin.</p>' + boxes([['1s', ['ud']], ['2s', ['ud']], ['2p', ['u', 'u', 'u']]], 'Correct orbital diagram for nitrogen. The 1s and 2s boxes each contain a pair of opposite arrows. Each of the three 2p boxes contains one up arrow.')
  },
  {
    id: 's1-3-q023', level: 'sl', tier: 'exam', type: 'multi', marks: 2,
    syllabus: 'Structure 1.3.5',
    stem: '<p>Which ions have the same electron configuration as an argon atom, ' + cfg('1s2 2s2 2p6 3s2 3p6') + '?</p>',
    options: [
      '<span class="chem">K+</span>',
      '<span class="chem">Cl-</span>',
      '<span class="chem">Na+</span>',
      '<span class="chem">Ca^2+</span>',
      '<span class="chem">O^2-</span>',
      '<span class="chem">S^2-</span>'
    ],
    answer: [0, 1, 3, 5],
    misconception: {
      2: 'A sodium atom has 11 electrons, so <span class="chem">Na+</span> has 10. That is the configuration of neon, not argon.',
      4: 'An oxygen atom has 8 electrons, so <span class="chem">O^2-</span> has 10. That is the configuration of neon, not argon.'
    },
    hints: ['Argon has 18 electrons. Count the electrons in each ion.', 'Electrons in an ion = atomic number − charge. For a 2− ion, subtracting −2 adds two.'],
    solution: '<p>Argon has 18 electrons. Count the electrons in each ion:</p>' + math([
      '<span class="chem">K+</span>: 19 − 1 = 18 &nbsp; yes',
      '<span class="chem">Cl-</span>: 17 + 1 = 18 &nbsp; yes',
      '<span class="chem">Na+</span>: 11 − 1 = 10 &nbsp; no (neon)',
      '<span class="chem">Ca^2+</span>: 20 − 2 = 18 &nbsp; yes',
      '<span class="chem">O^2-</span>: 8 + 2 = 10 &nbsp; no (neon)',
      '<span class="chem">S^2-</span>: 16 + 2 = 18 &nbsp; yes'
    ])
  },
  {
    id: 's1-3-q024', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>How many <strong>orbitals</strong> are there in total in the main energy level n = 3?</p>',
    answer: 9, tolerance: { abs: 0.01 }, unit: 'orbitals',
    hints: ['The third main energy level has three sublevels: 3s, 3p and 3d.', 'An s sublevel has 1 orbital, a p sublevel has 3 and a d sublevel has 5.'],
    solution: math(['3s: 1 orbital &nbsp; 3p: 3 orbitals &nbsp; 3d: 5 orbitals', 'total = 1 + 3 + 5 = 9 orbitals']) + '<p>Check: each orbital holds 2 electrons, so n = 3 holds 9 ' + TIMES + ' 2 = 18 electrons, which agrees with 2n<sup>2</sup> = 18. The common slip is to answer 18, which is the number of electrons, not orbitals.</p>'
  },
  {
    id: 's1-3-q025', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>Atoms of element X have the configuration ' + cfg('[Ne] 3s2') + '. Atoms of element Y have the configuration ' + cfg('1s2 2s2 2p3') + '. X and Y form an ionic compound in which each ion has a noble gas configuration.</p><p>Which row gives the formula of the compound and the configurations of the ions?</p>',
    options: [
      'X<sub>3</sub>Y<sub>2</sub>. Both ions are ' + cfg('1s2 2s2 2p6') + '.',
      'X<sub>2</sub>Y<sub>3</sub>. Both ions are ' + cfg('1s2 2s2 2p6') + '.',
      'X<sub>3</sub>Y<sub>2</sub>. The X ion is ' + cfg('1s2 2s2 2p6') + ' and the Y ion is ' + cfg('1s2 2s2') + '.',
      'XY. Both ions are ' + cfg('1s2 2s2 2p6') + '.'
    ],
    answer: 0,
    misconception: {
      1: 'The configurations are right, but the formula is not. Three 2+ ions balance two 3− ions, so the numbers go the other way round.',
      2: 'Y is a non-metal with five outer electrons. It gains three electrons to fill 2p. It does not lose its 2p electrons.',
      3: 'The charges are not equal in size. X forms a 2+ ion and Y forms a 3− ion, so a 1 : 1 formula is not neutral.'
    },
    hints: ['X has two outer electrons. Y has five. Which loses electrons and which gains?', 'Find the charge on each ion, then balance the charges to get the formula.'],
    solution: '<p>X (' + cfg('[Ne] 3s2') + ', magnesium) loses its two 3s electrons to form X<sup>2+</sup>: ' + cfg('1s2 2s2 2p6') + '.</p><p>Y (' + cfg('1s2 2s2 2p3') + ', nitrogen) gains three electrons to form Y<sup>3−</sup>: ' + cfg('1s2 2s2 2p6') + '.</p><p>Balance the charges: 3 ' + TIMES + ' (2+) = 6+ and 2 ' + TIMES + ' (3−) = 6−, so the formula is X<sub>3</sub>Y<sub>2</sub> (<span class="chem">Mg3N2</span>).</p>'
  },
  {
    id: 's1-3-q026', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>Which atom has the <strong>greatest</strong> number of unpaired electrons in its ground state?</p>',
    options: ['Cr (Z = 24)', 'Mn (Z = 25)', 'Fe (Z = 26)', 'As (Z = 33)'],
    answer: 0,
    misconception: {
      1: 'Manganese, ' + cfg('[Ar] 4s2 3d5') + ', has five unpaired electrons. One of the other atoms has more, because of an exception to the usual filling order.',
      2: 'Iron, ' + cfg('[Ar] 4s2 3d6') + ', has four unpaired electrons. The sixth 3d electron has to pair up.',
      3: 'Arsenic, ' + cfg('[Ar] 4s2 3d10 4p3') + ', has three unpaired electrons, all in 4p. The 3d sublevel is full.'
    },
    hints: ['Write the condensed configuration of each atom. Remember the two exceptions.', 'Use Hund’s rule in each partly filled sublevel: one electron per orbital before any pairing.'],
    solution: '<p>Write each configuration and count the singly occupied orbitals.</p>' + math([
      'Cr: ' + cfg('[Ar] 4s1 3d5') + ' &nbsp; 1 + 5 = 6 unpaired',
      'Mn: ' + cfg('[Ar] 4s2 3d5') + ' &nbsp; 5 unpaired',
      'Fe: ' + cfg('[Ar] 4s2 3d6') + ' &nbsp; 4 unpaired',
      'As: ' + cfg('[Ar] 4s2 3d10 4p3') + ' &nbsp; 3 unpaired'
    ]) + '<p>Chromium is an exception to the usual filling order. Its single 4s electron and its five 3d electrons are all unpaired, so it has the most: 6.</p>'
  },

  /* ============ Structure 1.3.5, transition-element ions (AHL) ============ */
  {
    id: 's1-3-q027', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.5',
    stem: '<p>What is the condensed electron configuration of the <span class="chem">Fe^3+</span> ion? (Iron has Z = 26.)</p>',
    options: [
      cfg('[Ar] 4s2 3d3'),
      cfg('[Ar] 4s1 3d4'),
      cfg('[Ar] 3d5'),
      cfg('[Ar] 4s2 3d9')
    ],
    answer: 2,
    misconception: {
      0: 'This removes all three electrons from 3d. When a first-row transition element forms an ion, the 4s electrons are lost first.',
      1: 'This removes one 4s electron and two 3d electrons. Both 4s electrons are lost before any 3d electron.',
      3: 'This has three <em>more</em> electrons than the atom. A 3+ charge means three electrons have been lost.'
    },
    hints: ['Start from the atom: ' + cfg('[Ar] 4s2 3d6') + '. Three electrons must be removed.', 'Which sublevel loses electrons first when a first-row transition element forms a positive ion?'],
    solution: '<p>The iron atom is ' + cfg('[Ar] 4s2 3d6') + '. When first-row transition elements form ions, the 4s electrons are removed before the 3d electrons. Remove the two 4s electrons, then one 3d electron:</p>' + math(['<span class="chem">Fe^3+</span>: ' + cfg('[Ar] 3d5') + ' &nbsp; (26 − 3 = 23 electrons)']) + '<p>This skill is listed for HL in Structure 3.1.</p>'
  },

  /* ======================= Structure 1.3.6 (AHL) =========================== */
  {
    id: 's1-3-q028', level: 'ahl', tier: 'foundation', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.6',
    stem: '<p>Which feature of the emission spectrum of an atom can be used to find its first ionization energy?</p>',
    options: [
      'The line with the lowest frequency in the visible region',
      'The total number of lines in the spectrum',
      'The limit of convergence at high frequency',
      'The spacing between the first two lines of a set'
    ],
    answer: 2,
    misconception: {
      0: 'A single line gives the energy difference between two levels inside the atom. Ionization means the electron leaves the atom completely.',
      1: 'The number of lines does not measure an energy.',
      3: 'The spacing between two lines gives the energy difference between two upper levels. It does not give the energy needed to remove the electron.'
    },
    hints: ['Ionization means the electron is removed completely, to n = ∞. Where do the lines end up as the upper level gets higher and higher?'],
    solution: '<p>The lines in a set get closer together at higher frequency until they merge. This point is the <strong>limit of convergence</strong>. It corresponds to the electron moving between the lower level and n = ∞, which is ionization. Its frequency (or wavelength) gives the ionization energy using E = hf.</p>'
  },
  {
    id: 's1-3-q029', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.6',
    stem: '<p>Why does the first ionization energy generally <strong>increase</strong> across period 3, from sodium to argon?</p>',
    options: [
      'The number of occupied main energy levels increases.',
      'The nuclear charge increases while the shielding by inner electrons stays about the same.',
      'The atoms get larger, so the outer electrons are further from the nucleus.',
      'The shielding by inner electrons increases with each element.'
    ],
    answer: 1,
    misconception: {
      0: 'All the period 3 elements have three occupied main energy levels. A new level starts only at the next period.',
      2: 'The atoms get <em>smaller</em> across a period. And an electron further from the nucleus would be easier to remove, not harder.',
      3: 'Across a period the extra electrons go into the same main energy level, so the number of inner (shielding) electrons does not change. More shielding would also make ionization easier, not harder.'
    },
    hints: ['What changes in the nucleus from one element to the next?', 'Are the extra electrons going into a new main energy level or the same one?'],
    solution: '<p>Across the period the number of protons increases, so the nuclear charge increases. The outer electrons are all in the same main energy level (n = 3), so the shielding by the inner electrons is about the same. The outer electrons are attracted more strongly to the nucleus (and are closer to it), so more energy is needed to remove one.</p>'
  },
  {
    id: 's1-3-q030', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 1.3.6',
    stem: '<p>The first ionization energies of three group 1 elements are: Li 520, Na 496 and K 419 ' + KJ + '.</p><p>Explain why the first ionization energy decreases down the group.</p>',
    answer: '<p>Going down the group, the outer electron is in a higher main energy level, so it is further from the nucleus. There are also more inner electrons, so the outer electron is more shielded from the nucleus. The attraction between the nucleus and the outer electron is weaker (even though the nuclear charge is larger), so less energy is needed to remove it.</p>',
    markscheme: [
      'The outer electron is in a higher main energy level / is further from the nucleus (accept: atomic radius increases).',
      'There is more shielding by inner electrons, so the attraction between the nucleus and the outer electron is weaker (this outweighs the increase in nuclear charge).'
    ],
    hints: ['Compare where the outer electron is: 2s in Li, 3s in Na, 4s in K.', 'Two things change that both weaken the attraction to the nucleus. Name both.']
  },
  {
    id: 's1-3-q031', level: 'ahl', tier: 'exam', type: 'short', marks: 2,
    syllabus: 'Structure 1.3.6',
    stem: '<p>The first ionization energy of beryllium is 900 ' + KJ + ' and that of boron is 801 ' + KJ + ', even though boron has the greater nuclear charge.</p><p>Explain why boron has the lower first ionization energy.</p>',
    answer: '<p>Beryllium is ' + cfg('1s2 2s2') + ', so the electron removed comes from the 2s sublevel. Boron is ' + cfg('1s2 2s2 2p1') + ', so the electron removed comes from the 2p sublevel. The 2p sublevel is higher in energy than the 2s sublevel (the 2p electron is also shielded by the 2s electrons), so less energy is needed to remove it.</p>',
    markscheme: [
      'The electron is removed from the 2p sublevel in B but from the 2s sublevel in Be (accept: configurations 1s² 2s² 2p¹ and 1s² 2s² used to show this).',
      'The 2p sublevel is higher in energy than 2s / the 2p electron is further from the nucleus and shielded by the 2s electrons, so it is easier to remove.'
    ],
    hints: ['Write the electron configuration of each atom. Which sublevel does the outermost electron come from?', 'Base the explanation on the energy of the electron that is removed.']
  },
  {
    id: 's1-3-q032', level: 'ahl', tier: 'challenge', type: 'short', marks: 2,
    syllabus: 'Structure 1.3.6',
    stem: '<p>The first ionization energy of nitrogen is 1402 ' + KJ + ' and that of oxygen is 1314 ' + KJ + '. In both atoms the electron is removed from the 2p sublevel, and oxygen has the greater nuclear charge.</p><p>Explain why oxygen has the lower first ionization energy.</p>',
    answer: '<p>Nitrogen is ' + cfg('1s2 2s2 2p3') + ': each 2p orbital holds one electron. Oxygen is ' + cfg('1s2 2s2 2p4') + ': one 2p orbital holds two electrons. The electron removed from oxygen comes from this doubly occupied 2p orbital. The two electrons in the same orbital repel each other, which raises the energy of the electron, so less energy is needed to remove it.</p>' + boxes([['2p in N', ['u', 'u', 'u']], ['2p in O', ['ud', 'u', 'u']]], 'Orbital diagrams of the 2p sublevel. In nitrogen each of the three 2p boxes holds one up arrow. In oxygen the first 2p box holds an up and a down arrow and the other two hold one up arrow each.'),
    markscheme: [
      'In O the electron is removed from a doubly occupied 2p orbital / a 2p orbital containing a pair of electrons (in N each 2p orbital is singly occupied).',
      'Repulsion between the two electrons in the same orbital makes the electron easier to remove (accept: raises its energy).'
    ],
    hints: ['Draw the three 2p boxes for each atom and fill them using Hund’s rule.', 'What is different about the orbital that the electron leaves in oxygen?', 'Do not write about a half-filled sublevel being "stable". Explain using repulsion and the energy of the electron removed.']
  },
  {
    id: 's1-3-q033', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.3.6',
    stem: '<p>The red line in the visible emission spectrum of hydrogen has a wavelength of 656 nm.</p><p>Calculate the frequency of this light. Use c = ' + sci('3.00', 8) + ' <span class="unit">m s-1</span> and give your answer to three significant figures.</p>',
    answer: 3.00e8 / 656e-9, tolerance: '1%', sigfigs: 3, unit: 'Hz',
    hints: ['The data booklet gives c = λf. Rearrange it to make f the subject.', 'Convert the wavelength to metres first: 1 nm = 1 ' + TIMES + ' 10<sup>−9</sup> m.'],
    solution: '<p>Convert the wavelength to metres, then use c = λf.</p>' + math([
      'λ = 656 nm = 656 ' + TIMES + ' 10<sup>−9</sup> m = ' + sci('6.56', -7) + ' m',
      'f = c ÷ λ = (' + sci('3.00', 8) + ' <span class="unit">m s-1</span>) ÷ (' + sci('6.56', -7) + ' m)',
      'f = ' + sci('4.57', 14) + ' <span class="unit">s-1</span> = ' + sci('4.57', 14) + ' Hz'
    ]) + '<p>If you leave the wavelength in nm you get ' + sci('4.57', 5) + ', which is too small by a factor of 10<sup>9</sup>.</p>'
  },
  {
    id: 's1-3-q034', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.3.6',
    stem: '<p>One line in the emission spectrum of hydrogen has a frequency of ' + sci('6.17', 14) + ' Hz.</p><p>Calculate the energy of one photon of this light. Use h = ' + sci('6.63', -34) + ' J s and give your answer to three significant figures.</p>',
    answer: 6.63e-34 * 6.17e14, tolerance: '1%', sigfigs: 3, unit: 'J',
    hints: ['The data booklet gives E = hf.', 'Multiply the two numbers. Add the powers of ten: −34 + 14.'],
    solution: math([
      'E = hf',
      'E = (' + sci('6.63', -34) + ' J s) ' + TIMES + ' (' + sci('6.17', 14) + ' <span class="unit">s-1</span>)',
      'E = ' + sci('4.09', -19) + ' J'
    ]) + '<p>This is the energy of <em>one</em> photon, so it is the energy change of one atom. It is a very small number of joules.</p>'
  },
  {
    id: 's1-3-q035', level: 'ahl', tier: 'exam', type: 'numeric', marks: 3,
    syllabus: 'Structure 1.3.6',
    stem: '<p>In the emission spectrum of hydrogen, the lines produced by electrons falling to n = 1 converge at a wavelength of 91.2 nm.</p><p>Calculate the first ionization energy of hydrogen, in ' + KJ + '. Use the data booklet values of h, c and the Avogadro constant.</p>',
    answer: 6.63e-34 * 3.00e8 / 91.2e-9 * 6.02e23 / 1000, tolerance: '1%', sigfigs: [3, 4], unit: 'kJ mol-1',
    answerDisplay: '1310 (or 1313)',
    hints: [
      'Three steps: wavelength → frequency (c = λf), frequency → energy of one photon (E = hf), energy for one atom → energy for one mole.',
      'Convert 91.2 nm to metres before you start.',
      'To go from J per atom to ' + KJ + ', multiply by ' + sci('6.02', 23) + ' <span class="unit">mol-1</span> and divide by 1000.'
    ],
    solution: '<p>The convergence limit corresponds to ionization, so the photon at 91.2 nm has the energy needed to ionize one atom.</p>' + math([
      'λ = 91.2 nm = ' + sci('9.12', -8) + ' m',
      'f = c ÷ λ = (' + sci('3.00', 8) + ' <span class="unit">m s-1</span>) ÷ (' + sci('9.12', -8) + ' m) = ' + sci('3.289', 15) + ' <span class="unit">s-1</span>',
      'E = hf = (' + sci('6.63', -34) + ' J s) ' + TIMES + ' (' + sci('3.289', 15) + ' <span class="unit">s-1</span>) = ' + sci('2.181', -18) + ' J &nbsp; (for one atom)',
      'for one mole: ' + sci('2.181', -18) + ' J ' + TIMES + ' ' + sci('6.02', 23) + ' <span class="unit">mol-1</span> = ' + sci('1.313', 6) + ' <span class="unit">J mol-1</span>',
      'IE = ' + sci('1.313', 6) + ' <span class="unit">J mol-1</span> ÷ 1000 = 1313 ' + KJ + ' ≈ 1310 ' + KJ
    ]) + '<p>Check: the data booklet value for hydrogen is 1312 ' + KJ + '. Common slips: leaving the wavelength in nm, stopping at the energy of one atom (' + sci('2.18', -18) + ' J), and forgetting to divide by 1000.</p>'
  },
  {
    id: 's1-3-q036', level: 'ahl', tier: 'exam', type: 'numeric', marks: 2,
    syllabus: 'Structure 1.3.6',
    stem: '<p>In the emission spectrum of helium atoms, the lines produced by electrons falling to the lowest energy level converge at a frequency of ' + sci('5.94', 15) + ' Hz.</p><p>Calculate the first ionization energy of helium, in ' + KJ + '.</p>',
    answer: 6.63e-34 * 5.94e15 * 6.02e23 / 1000, tolerance: '1%', sigfigs: [3, 4], unit: 'kJ mol-1',
    answerDisplay: '2370',
    hints: [
      'You already have the frequency, so go straight to E = hf.',
      'E = hf gives the energy for one atom in joules. The answer must be for one mole, in kilojoules.'
    ],
    solution: math([
      'E = hf = (' + sci('6.63', -34) + ' J s) ' + TIMES + ' (' + sci('5.94', 15) + ' <span class="unit">s-1</span>) = ' + sci('3.938', -18) + ' J &nbsp; (for one atom)',
      'for one mole: ' + sci('3.938', -18) + ' J ' + TIMES + ' ' + sci('6.02', 23) + ' <span class="unit">mol-1</span> = ' + sci('2.371', 6) + ' <span class="unit">J mol-1</span>',
      'IE = ' + sci('2.371', 6) + ' <span class="unit">J mol-1</span> ÷ 1000 = 2371 ' + KJ + ' ≈ 2370 ' + KJ
    ]) + '<p>This is the highest first ionization energy of any element. The data booklet value is 2372 ' + KJ + '.</p>'
  },
  {
    id: 's1-3-q037', level: 'ahl', tier: 'exam', type: 'numeric', marks: 3,
    syllabus: 'Structure 1.3.6',
    stem: '<p>The first ionization energy of sodium is 496 ' + KJ + '.</p><p>Calculate the wavelength, in nm, of the convergence limit that corresponds to the ionization of a gaseous sodium atom. Give your answer to three significant figures.</p>',
    answer: 3.00e8 / (496e3 / 6.02e23 / 6.63e-34) * 1e9, tolerance: '1%', sigfigs: 3, unit: 'nm',
    hints: [
      'This is the usual calculation in reverse. First find the energy needed to ionize <em>one</em> atom, in joules.',
      'kJ → J: multiply by 1000. One mole → one atom: divide by ' + sci('6.02', 23) + ' <span class="unit">mol-1</span>.',
      'Then f = E ÷ h, and λ = c ÷ f. Convert metres to nm at the end.'
    ],
    solution: '<p>Work backwards: energy per mole → energy per atom → frequency → wavelength.</p>' + math([
      'IE = 496 ' + KJ + ' = ' + sci('4.96', 5) + ' <span class="unit">J mol-1</span>',
      'for one atom: E = ' + sci('4.96', 5) + ' <span class="unit">J mol-1</span> ÷ ' + sci('6.02', 23) + ' <span class="unit">mol-1</span> = ' + sci('8.239', -19) + ' J',
      'f = E ÷ h = (' + sci('8.239', -19) + ' J) ÷ (' + sci('6.63', -34) + ' J s) = ' + sci('1.243', 15) + ' <span class="unit">s-1</span>',
      'λ = c ÷ f = (' + sci('3.00', 8) + ' <span class="unit">m s-1</span>) ÷ (' + sci('1.243', 15) + ' <span class="unit">s-1</span>) = ' + sci('2.41', -7) + ' m',
      'λ = ' + sci('2.41', -7) + ' m ' + TIMES + ' 10<sup>9</sup> <span class="unit">nm m-1</span> = 241 nm'
    ]) + '<p>241 nm is in the ultraviolet region. If you forget to change kJ to J, you get a wavelength 1000 times too long.</p>'
  },
  {
    id: 's1-3-q038', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 2,
    syllabus: 'Structure 1.3.6',
    stem: '<p>Ultraviolet radiation of wavelength 200 nm shines on separate samples of gaseous sodium atoms and gaseous magnesium atoms. The first ionization energies are Na 496 ' + KJ + ' and Mg 738 ' + KJ + '.</p><p>For which atoms does one photon of this radiation have enough energy to remove an electron from an atom in its ground state?</p>',
    options: ['Both sodium and magnesium', 'Sodium only', 'Magnesium only', 'Neither sodium nor magnesium'],
    answer: 1,
    misconception: {
      0: 'The energy of one mole of these photons is ' + sci('5.99', 5) + ' <span class="unit">J mol-1</span>. That looks larger than 738, but the units are different. Convert it to ' + KJ + ' before comparing.',
      2: 'A photon needs <em>at least</em> the ionization energy. The atom with the lower ionization energy is the one that is easier to ionize.',
      3: 'The energy of one photon is about 10<sup>−18</sup> J, which looks tiny next to 496. But 496 ' + KJ + ' is for a mole of atoms. Multiply the photon energy by the Avogadro constant before comparing.'
    },
    hints: [
      'Find the energy of one photon with f = c ÷ λ and E = hf.',
      'Convert to ' + KJ + ' so that you can compare it with the two ionization energies.'
    ],
    solution: math([
      'λ = 200 nm = ' + sci('2.00', -7) + ' m',
      'f = c ÷ λ = (' + sci('3.00', 8) + ' <span class="unit">m s-1</span>) ÷ (' + sci('2.00', -7) + ' m) = ' + sci('1.50', 15) + ' <span class="unit">s-1</span>',
      'E = hf = (' + sci('6.63', -34) + ' J s) ' + TIMES + ' (' + sci('1.50', 15) + ' <span class="unit">s-1</span>) = ' + sci('9.945', -19) + ' J &nbsp; (one photon)',
      'per mole: ' + sci('9.945', -19) + ' J ' + TIMES + ' ' + sci('6.02', 23) + ' <span class="unit">mol-1</span> ÷ 1000 = 599 ' + KJ
    ]) + '<p>599 ' + KJ + ' is more than 496 ' + KJ + ' (Na) but less than 738 ' + KJ + ' (Mg). So a photon has enough energy to ionize a sodium atom but not a magnesium atom.</p>'
  },
  {
    id: 's1-3-q039', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 3,
    syllabus: 'Structure 1.3.6',
    stem: '<p>In the emission spectrum of hydrogen, the lines in and near the visible region are produced by electrons falling to n = 2. These lines converge at a wavelength of 365 nm.</p><p>Calculate the energy, in ' + KJ + ', needed to remove an electron from the n = 2 level of a hydrogen atom. Give your answer to three significant figures.</p>',
    answer: 6.63e-34 * 3.00e8 / 365e-9 * 6.02e23 / 1000, tolerance: '1%', sigfigs: 3, unit: 'kJ mol-1',
    hints: [
      'The method is the same as for a first ionization energy: the convergence limit of a set of lines corresponds to removing the electron from the level where those lines end.',
      'λ → f with c = λf, then E = hf, then scale from one atom to one mole and from J to kJ.'
    ],
    solution: '<p>This convergence limit corresponds to an electron moving between n = 2 and n = ∞.</p>' + math([
      'λ = 365 nm = ' + sci('3.65', -7) + ' m',
      'f = c ÷ λ = (' + sci('3.00', 8) + ' <span class="unit">m s-1</span>) ÷ (' + sci('3.65', -7) + ' m) = ' + sci('8.219', 14) + ' <span class="unit">s-1</span>',
      'E = hf = (' + sci('6.63', -34) + ' J s) ' + TIMES + ' (' + sci('8.219', 14) + ' <span class="unit">s-1</span>) = ' + sci('5.449', -19) + ' J &nbsp; (for one atom)',
      'per mole: ' + sci('5.449', -19) + ' J ' + TIMES + ' ' + sci('6.02', 23) + ' <span class="unit">mol-1</span> ÷ 1000 = 328 ' + KJ
    ]) + '<p>This is much less than the first ionization energy of hydrogen (1312 ' + KJ + '). The first ionization energy is for an atom in its ground state, with the electron in n = 1. An electron already in n = 2 is higher in energy, so less energy is needed to remove it. To find a first ionization energy you must use the convergence limit of the lines that end on the ground state.</p>'
  },
  {
    id: 's1-3-q040', level: 'ahl', tier: 'challenge', type: 'short', marks: 3,
    syllabus: 'Structure 1.3.6',
    stem: '<p>The table shows the first ionization energies of the period 3 elements.</p>' +
      ieTable('First ionization energy / kJ mol<sup>−1</sup>', ['Element', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'], [['First IE', '496', '738', '578', '787', '1012', '1000', '1251', '1520']]) +
      '<p>The values do not rise steadily. Use the data to explain how the two decreases are evidence that the third main energy level is divided into sublevels.</p>',
    answer: '<p>If all the n = 3 electrons had the same energy, the first ionization energy would rise steadily across the period as the nuclear charge increases. It does not.</p><p>The value falls from Mg (738) to Al (578). In Mg the electron is removed from the 3s sublevel, but in Al it is removed from the 3p sublevel. The 3p sublevel is higher in energy than 3s, so the electron is easier to remove. This shows that n = 3 contains sublevels of different energy.</p><p>The value falls from P (1012) to S (1000). In P each 3p orbital holds one electron. In S the electron is removed from a 3p orbital that holds two electrons. Repulsion between the paired electrons makes it easier to remove. This shows that the 3p sublevel is made of orbitals that fill singly before they pair.</p>',
    markscheme: [
      'Mg to Al decrease: the electron is removed from the 3p sublevel in Al but from 3s in Mg, and 3p is higher in energy than 3s (so n = 3 is split into sublevels of different energy).',
      'P to S decrease: the electron in S is removed from a doubly occupied 3p orbital, and repulsion between the paired electrons makes it easier to remove (in P the 3p orbitals are singly occupied).',
      'Link to evidence: with a single undivided energy level the ionization energy would increase steadily with nuclear charge / the decreases come after the 3s sublevel is full and after each 3p orbital holds one electron, which matches the s and p sublevels.'
    ],
    hints: ['Find the two places where the value goes down, not up.', 'For each one, write the configurations of the two elements and ask which electron is removed.', 'Finish by saying what the pattern would look like if there were no sublevels.']
  },

  /* ======================= Structure 1.3.7 (AHL) =========================== */
  {
    id: 's1-3-q041', level: 'ahl', tier: 'foundation', type: 'numeric', marks: 1,
    syllabus: 'Structure 1.3.7',
    stem: '<p>The table shows the first four successive ionization energies of an element.</p>' +
      ieTable('Successive ionization energies / kJ mol<sup>−1</sup>', ['', '1st', '2nd', '3rd', '4th'], [['IE', '590', '1145', '4912', '6491']]) +
      '<p>In which group of the periodic table is the element? Type the group number.</p>',
    answer: 2, tolerance: { abs: 0.01 }, unit: '',
    hints: ['Look for the place where the ionization energy suddenly becomes several times larger.', 'The number of electrons removed <em>before</em> the large jump is the number of outer electrons.'],
    solution: '<p>Compare each value with the one before it.</p>' + math([
      '1st → 2nd: 590 → 1145 &nbsp; (about 2 times)',
      '2nd → 3rd: 1145 → 4912 &nbsp; (about 4 times: the large jump)',
      '3rd → 4th: 4912 → 6491 &nbsp; (about 1.3 times)'
    ]) + '<p>Two electrons are removed before the large jump, so the atom has two outer electrons. The third electron comes from a main energy level closer to the nucleus. The element is in <strong>group 2</strong>. (These are the values for calcium.)</p>'
  },
  {
    id: 's1-3-q042', level: 'ahl', tier: 'exam', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.7',
    stem: '<p>The table shows the first six successive ionization energies of an element in period 3.</p>' +
      ieTable('Successive ionization energies / kJ mol<sup>−1</sup>', ['', '1st', '2nd', '3rd', '4th', '5th', '6th'], [['IE', '787', '1577', '3232', '4356', '16\u00a0091', '19\u00a0805']]) +
      '<p>Which element is it?</p>',
    options: ['Aluminium', 'Silicon', 'Phosphorus', 'Sulfur'],
    answer: 1,
    misconception: {
      0: 'Aluminium is in group 13, so its large jump comes after the 3rd electron. Here the 4th value (4356) is not much larger than the 3rd (3232).',
      2: 'This counts the electron <em>after</em> the jump as an outer electron. The 5th electron is the first one taken from the inner level. Phosphorus would have its large jump after the 5th electron.',
      3: 'Sulfur has six outer electrons, so all six of these values would rise gradually with no large jump.'
    },
    hints: ['Find the largest jump between two neighbouring values.', 'Count the electrons removed before that jump. That is the number of outer electrons.'],
    solution: '<p>The values rise gradually up to the 4th (4356), then jump to 16\u00a0091 for the 5th. That is about 3.7 times larger. Four electrons are removed before the jump, so the atom has four outer electrons and is in group 14. The group 14 element in period 3 is <strong>silicon</strong>, ' + cfg('[Ne] 3s2 3p2') + '. The 5th electron has to come from the n = 2 level.</p>'
  },
  {
    id: 's1-3-q043', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 2,
    syllabus: 'Structure 1.3.7',
    stem: '<p>The table shows successive ionization energies of two elements, X and Y. Both are in period 3.</p>' +
      ieTable('Successive ionization energies / kJ mol<sup>−1</sup>', ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'], [
        ['X', '738', '1451', '7733', '10\u00a0543', '13\u00a0630', '18\u00a0020', '21\u00a0711', '25\u00a0661'],
        ['Y', '1251', '2298', '3822', '5159', '6542', '9362', '11\u00a0018', '33\u00a0604']
      ]) +
      '<p>X and Y form an ionic compound. What is its formula?</p>',
    options: ['XY', 'XY<sub>2</sub>', 'X<sub>2</sub>Y', 'X<sub>2</sub>Y<sub>7</sub>'],
    answer: 1,
    misconception: {
      0: 'A 1 : 1 formula needs charges of equal size. X has two outer electrons and forms a 2+ ion. Y has seven outer electrons and gains one electron to form a 1− ion.',
      2: 'The ratio is the wrong way round. X forms X<sup>2+</sup> and Y forms Y<sup>−</sup>, so two Y ions are needed for each X ion.',
      3: 'This uses the numbers of outer electrons (2 and 7) as if they were the ion charges. Y does not lose seven electrons. It gains one to complete its outer level.'
    },
    hints: ['Find the large jump for each element to get its number of outer electrons.', 'X is a metal and Y is a non-metal. What charge does each ion have?', 'Balance the charges.'],
    solution: '<p><strong>X:</strong> the large jump is between the 2nd (1451) and 3rd (7733) values. X has two outer electrons, so it is in group 2 and forms X<sup>2+</sup>.</p><p><strong>Y:</strong> the values rise gradually until the large jump between the 7th (11\u00a0018) and 8th (33\u00a0604). Y has seven outer electrons, so it is in group 17 and gains one electron to form Y<sup>−</sup>.</p><p>One X<sup>2+</sup> ion needs two Y<sup>−</sup> ions, so the formula is XY<sub>2</sub>. (X is magnesium and Y is chlorine: <span class="chem">MgCl2</span>.)</p>'
  },
  {
    id: 's1-3-q044', level: 'ahl', tier: 'exam', type: 'short', marks: 3,
    syllabus: 'Structure 1.3.7',
    stem: '<p>The first four successive ionization energies of aluminium (Z = 13) are 578, 1817, 2745 and 11\u00a0577 ' + KJ + '.</p><p>(a) Explain why the second ionization energy is greater than the first. [1]</p><p>(b) Explain why the fourth ionization energy is very much greater than the third. [2]</p>',
    answer: '<p>(a) The second electron is removed from a positive ion, not from a neutral atom. The same nuclear charge now attracts fewer electrons (there is less repulsion between the remaining electrons), so each electron is held more strongly.</p><p>(b) Aluminium is ' + cfg('1s2 2s2 2p6 3s2 3p1') + '. The first three electrons come from the third main energy level. The fourth electron comes from the second main energy level (2p), which is closer to the nucleus. It is shielded by fewer inner electrons, so it is attracted much more strongly and needs much more energy to remove.</p>',
    markscheme: [
      '(a) The electron is removed from a positive ion / the same nuclear charge attracts fewer electrons / less electron–electron repulsion, so the attraction is stronger.',
      '(b) The fourth electron is removed from a main energy level closer to the nucleus / from n = 2 (2p), not n = 3.',
      '(b) It is less shielded (fewer inner electrons) and so much more strongly attracted to the nucleus.'
    ],
    hints: ['For (a): after one electron has gone, what is the particle that the next electron leaves?', 'For (b): write the configuration of aluminium. Where does the fourth electron come from?']
  },
  {
    id: 's1-3-q045', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.7',
    stem: '<p>The graph shows log<sub>10</sub> of the first eight successive ionization energies of an element.</p>' + logGraph([1012, 1907, 2914, 4964, 6274, 21267, 25431, 29872]) + '<p>In which group of the periodic table is the element?</p>',
    options: ['Group 13', 'Group 14', 'Group 15', 'Group 16'],
    answer: 2,
    misconception: {
      0: 'A group 13 element has three outer electrons, so the large jump would come between the 3rd and 4th points. Here those points rise gently.',
      1: 'A group 14 element has four outer electrons, so the large jump would come between the 4th and 5th points. Count the points before the jump again.',
      3: 'This counts the 6th electron as an outer electron. The 6th electron is the first one <em>after</em> the jump, so it comes from the inner level.'
    },
    hints: ['Find the one place where the graph steps up sharply.', 'How many points lie before the step? That is the number of outer electrons.', 'For groups 13 to 18, group number = 10 + number of outer electrons.'],
    solution: '<p>The first five points rise gently. Between the 5th and 6th points the graph steps up sharply. On a log scale, a step of about 0.5 means the value becomes about 3 times larger. So five electrons are removed before the large jump: the atom has five outer electrons and the element is in <strong>group 15</strong>. (The data are for phosphorus, ' + cfg('[Ne] 3s2 3p3') + '.)</p><p>A log scale is used because successive ionization energies cover a very wide range. On an ordinary scale the first few points would be squashed together at the bottom of the graph.</p>'
  },
  {
    id: 's1-3-q046', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
    syllabus: 'Structure 1.3.7',
    stem: '<p>An element has twelve successive ionization energies. There are only two large jumps. Some of the values are shown.</p>' +
      ieTable('Successive ionization energies / kJ mol<sup>−1</sup>', ['', '2nd', '3rd', '10th', '11th'], [['IE', '1451', '7733', '35\u00a0458', '169\u00a0988']]) +
      '<p>Which arrangement of electrons in main energy levels fits these data?</p>',
    options: [
      'n = 1: 2 electrons. n = 2: 8 electrons. n = 3: 2 electrons.',
      'n = 1: 2 electrons. n = 2: 2 electrons. n = 3: 8 electrons.',
      'n = 1: 10 electrons. n = 2: 2 electrons.',
      'n = 1: 2 electrons. n = 2: 10 electrons.'
    ],
    answer: 0,
    misconception: {
      1: 'The right numbers in the wrong order. The first electrons to be removed are the outer ones, so the group of 2 before the first jump is in the highest level, not the middle one.',
      2: 'This uses only the first jump. The second jump, between the 10th and 11th values, shows that the ten inner electrons are in two different main energy levels.',
      3: 'This uses only the second jump. The first jump, between the 2nd and 3rd values, shows that the first two electrons are in a different main energy level from the next eight.'
    },
    hints: ['Twelve ionization energies means twelve electrons.', 'Each large jump marks the start of a new main energy level, closer to the nucleus.', 'The first electrons removed are the outermost ones.'],
    solution: '<p>Twelve ionization energies means the atom has twelve electrons. The jumps split them into three groups:</p>' + math([
      'electrons 1 and 2: easiest to remove → outer level (n = 3)',
      'large jump (1451 → 7733)',
      'electrons 3 to 10: eight electrons → next level in (n = 2)',
      'large jump (35\u00a0458 → 169\u00a0988)',
      'electrons 11 and 12: hardest to remove → closest to the nucleus (n = 1)'
    ]) + '<p>So the arrangement is 2, 8, 2: the element is magnesium, ' + cfg('1s2 2s2 2p6 3s2') + ', in group 2 and period 3.</p>'
  }

  ]);
})();
