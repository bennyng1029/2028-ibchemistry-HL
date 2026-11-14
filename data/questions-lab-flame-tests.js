/* ==========================================================================
   Structure Lab — question bank for Lab 4, Flame tests and emission spectra.
   Schema: docs/AUTHORING.md section 4. All questions are original, in the style of Paper 1B
   (data from a practical, uncertainty, errors and improvements, plus links to Structure 1.3).
   SL: Structure 1.3.1, 1.3.2.  AHL: Structure 1.3.6 (E = hf, c = λf, convergence limit).
   Constants (data booklet): h = 6.63e-34 J s, c = 3.00e8 m s-1, NA = 6.02e23 mol-1.
   Flame colours and line wavelengths are given in every stem: they are not required recall.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.questions) return;

  var KJ = 'kJ mol<sup>−1</sup>';
  function sci(m, e) { return m + ' × 10<sup>' + (e < 0 ? '−' + (-e) : e) + '</sup>'; }
  function math(lines) { return lines.map(function (l) { return '<div class="worked__math">' + l + '</div>'; }).join(''); }
  function table(caption, head, rows) {
    var h = '<div class="table-scroll" tabindex="0"><table class="data"><caption>' + caption + '</caption><thead><tr>';
    head.forEach(function (c) { h += '<th scope="col">' + c + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) { h += '<tr>' + r.map(function (c, i) { return i ? '<td>' + c + '</td>' : '<th scope="row">' + c + '</th>'; }).join('') + '</tr>'; });
    return h + '</tbody></table></div>';
  }

  S1.questions.register('lab-flame-tests', [

    /* ---------------------------------------------------------------- SL */
    {
      id: 'lab-flame-tests-q001', topic: 'lab-flame-tests', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.3.1',
      stem: '<p>A student looks at four light sources through a hand spectroscope. Which source gives a <strong>continuous</strong> spectrum?</p>',
      options: ['A hydrogen discharge tube', 'A flame containing sodium chloride', 'The hot filament of a lamp', 'A mercury discharge tube'],
      answer: 2,
      misconception: {
        0: 'Excited hydrogen atoms emit only certain wavelengths, so you see separate lines.',
        1: 'The sodium atoms in the flame emit one strong yellow-orange line, not a full band of colours.',
        3: 'Mercury atoms emit a few separate lines (violet, blue, green, yellow), so this is a line spectrum.'
      },
      hints: ['Which source is a hot solid, rather than excited atoms of a gas?'],
      solution: '<p>A hot solid emits light of every wavelength, so the spectrum is an unbroken band from violet to red. The other three sources contain excited gaseous atoms, which emit only certain wavelengths: a line spectrum.</p>'
    },
    {
      id: 'lab-flame-tests-q002', topic: 'lab-flame-tests', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.3.1',
      stem: '<p>Before each flame test, a student dips the wire loop in dilute hydrochloric acid and holds it in the flame until the flame shows no colour. What is the main reason for this?</p>',
      options: [
        'To make the salt stick to the wire',
        'To remove traces of earlier samples, so that only the new salt colours the flame',
        'To turn the metal ions into metal atoms before the test',
        'To make the flame hotter'
      ],
      answer: 1,
      misconception: {
        0: 'The acid does help solid stick to the wire, but heating until there is no colour is a check that the wire is clean.',
        2: 'The cleaning step happens before any sample is added. It is about what is already on the wire.',
        3: 'The acid does not change the temperature of the flame.'
      },
      hints: ['Think about what the blank test (no colour) tells you.'],
      solution: '<p>Traces of an earlier salt, or of sodium from fingers, would add their own colour. Heating the cleaned wire until the flame shows no colour is a blank test: it shows that any colour later comes from the new salt.</p>'
    },
    {
      id: 'lab-flame-tests-q003', topic: 'lab-flame-tests', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.3.1',
      stem: '<p>When a little copper(II) chloride is held in a Bunsen flame, the flame turns blue-green. Explain how the coloured light is produced.</p>',
      answer: '<p>Heat from the flame excites electrons in the copper atoms (or ions) to higher energy levels. The electrons then fall back to lower energy levels and emit photons. The energy of each photon equals the energy difference between the two levels. Only certain differences are possible, so only certain wavelengths are emitted, and these give the colour we see.</p>',
      markscheme: [
        'Electrons are excited / promoted to higher energy levels by the heat of the flame.',
        'Electrons fall / return to lower energy levels and emit photons (light) whose energy equals the difference between the levels (accept: of specific wavelengths/frequencies).'
      ],
      hints: ['What does the heat do to the electrons?', 'What is given out when they return, and what fixes its energy?'],
      solution: '<p>See the model answer. Two ideas earn the marks: excitation by heat, then emission of photons as electrons return to lower levels.</p>'
    },
    {
      id: 'lab-flame-tests-q004', topic: 'lab-flame-tests', level: 'sl', tier: 'exam', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.3.2',
      stem: '<p>Two unknown salts both give a red flame. One contains lithium ions and the other strontium ions. Which method is most likely to tell them apart?</p>',
      options: [
        'Repeat each flame test three times and take the average colour',
        'Use a larger amount of each salt',
        'Look at each flame through a spectroscope and compare the lines with reference spectra',
        'Use a luminous (yellow) Bunsen flame instead of a blue one'
      ],
      answer: 2,
      misconception: {
        0: 'Repeating reduces random error, but both colours are red each time. You cannot average a colour.',
        1: 'More salt gives a brighter flame, not a different colour.',
        3: 'A yellow flame makes the colours harder to see, not easier.'
      },
      hints: ['Each element has its own pattern of lines, even when the colours look alike.'],
      solution: '<p>A spectroscope splits the light into separate lines. Lithium and strontium have different energy levels, so their lines are at different wavelengths. Matching the lines with reference spectra identifies each element.</p>'
    },
    {
      id: 'lab-flame-tests-q005', topic: 'lab-flame-tests', level: 'sl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.3.2',
      stem: '<p>A student checks a spectroscope with a hydrogen tube.</p>' +
        table('Hydrogen lines through the spectroscope', ['Data value / nm', 'Reading / nm (±2)'], [['410', '414'], ['486', '490'], ['656', '660']]) +
        '<p>With the same spectroscope, a mercury tube gives a green line at a reading of 550 nm. Calculate the corrected wavelength, in nm, of the green line.</p>',
      answer: 546, tolerance: { abs: 0.5 }, unit: 'nm',
      hints: ['By how much does the scale read too high or too low for every hydrogen line?', 'Apply the same correction to the mercury reading.'],
      solution: math(['414 − 410 = 4; 490 − 486 = 4; 660 − 656 = 4', 'every reading is 4 nm too high (systematic error)', 'corrected = 550 − 4 = <b>546 nm</b>'])
    },
    {
      id: 'lab-flame-tests-q006', topic: 'lab-flame-tests', level: 'sl', tier: 'foundation', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.3.1',
      stem: '<p>A helium tube shows lines at 447 nm (blue), 502 nm (green), 588 nm (yellow-orange) and 668 nm (red). Which line is produced by photons of the <strong>highest energy</strong>?</p>',
      options: ['447 nm', '502 nm', '588 nm', '668 nm'],
      answer: 0,
      misconception: {
        1: 'Energy rises as wavelength falls. There is a line with a shorter wavelength than 502 nm.',
        2: 'This line is the brightest in the helium spectrum, but brightness depends on how many photons there are, not on the energy of each one.',
        3: 'This is the longest wavelength, so it has the lowest frequency and the lowest energy per photon.'
      },
      hints: ['Shorter wavelength means higher frequency.'],
      solution: '<p>The shortest wavelength has the highest frequency and so the highest energy per photon: <b>447 nm</b>, the blue line.</p>'
    },
    {
      id: 'lab-flame-tests-q007', topic: 'lab-flame-tests', level: 'sl', tier: 'exam', type: 'numeric', marks: 1,
      syllabus: 'Structure 1.3.2',
      stem: '<p>A student records a hydrogen line as 486 ± 2 nm. Calculate the percentage uncertainty of this reading.</p>',
      answer: 0.4115, tolerance: '3%', sigfigs: [1, 2], unit: '%',
      answerDisplay: '0.41 % (accept 0.4 %)',
      hints: ['Percentage uncertainty = absolute uncertainty / reading × 100.'],
      solution: math(['2 / 486 × 100 = <b>0.41 %</b>'])
    },
    {
      id: 'lab-flame-tests-q008', topic: 'lab-flame-tests', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.3.2',
      stem: '<p>A student reads all four visible hydrogen lines through a spectroscope. Every reading is 3 or 4 nm higher than the data value. The readings agree with each other when repeated.</p><p>State the type of error, and suggest how the student should deal with it.</p>',
      answer: '<p>It is a systematic error: every reading is shifted the same way by about the same amount (the scale is out of place). Repeating will not remove it. The student should calibrate the spectroscope: find the shift using lines of known wavelength (such as these hydrogen lines) and subtract it from every reading.</p>',
      markscheme: [
        'Systematic error (accept: zero / calibration error of the scale).',
        'Calibrate with lines of known wavelength and subtract the shift (about 3–4 nm) from every reading (do not accept "repeat the readings").'
      ],
      hints: ['Are the readings scattered on both sides of the true values, or all shifted one way?'],
      solution: '<p>All readings are too high by a similar amount, so the error is systematic. Averaging repeats cannot remove it, but a calibration with known lines can.</p>'
    },
    {
      id: 'lab-flame-tests-q009', topic: 'lab-flame-tests', level: 'sl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.3.2',
      stem: '<p>A calibrated spectroscope gives these readings (each ±2 nm) for a tube that contains one or two elements:</p><p class="mono">409, 433, 448, 471, 487, 492, 502, 587, 657, 669</p>' +
        table('Reference lines', ['Element', 'Lines / nm'], [['hydrogen', '410, 434, 486, 656'], ['helium', '447, 471, 492, 502, 588, 668'], ['lithium', '610, 671'], ['sodium', '589']]) +
        '<p>Which elements are in the tube?</p>',
      options: ['Hydrogen and helium', 'Helium and sodium', 'Hydrogen, helium and lithium', 'Helium only'],
      answer: 0,
      misconception: {
        1: 'Sodium’s only line, 589 nm, overlaps helium’s 588 nm line, so the 587 nm reading is explained by helium. And you still have to explain 409, 433, 487 and 657 nm.',
        2: 'Lithium needs a line at 610 nm as well as 671 nm. There is no reading near 610 nm.',
        3: 'Helium explains six readings, but 409, 433, 487 and 657 nm do not belong to helium.'
      },
      hints: ['Check each element: are all of its lines present?', 'An element with a missing line is not present.'],
      solution: '<p>Hydrogen: 409, 433, 487, 657 match 410, 434, 486, 656. Helium: 448, 471, 492, 502, 587, 669 match all six helium lines. Lithium is ruled out (no line near 610 nm). Sodium cannot be confirmed: its one line is hidden by helium’s 588 nm line, and nothing needs it. Answer: <b>hydrogen and helium</b>.</p>'
    },
    {
      id: 'lab-flame-tests-q010', topic: 'lab-flame-tests', level: 'sl', tier: 'exam', type: 'short', marks: 2,
      syllabus: 'Structure 1.3.1',
      stem: '<p>A student tests potassium chloride with a wire that was used for sodium chloride and not cleaned. The flame is yellow-orange. The data say potassium gives a lilac flame.</p><p>Explain the student’s observation and suggest an improvement.</p>',
      answer: '<p>Traces of sodium chloride were still on the wire. Sodium gives an intense yellow-orange colour, which hides the pale lilac of potassium. The student should clean the wire with dilute hydrochloric acid and heat it until the flame shows no colour before each test (or use a fresh wire or splint for each salt).</p>',
      markscheme: [
        'Sodium (ions) left on the wire / contamination gives yellow-orange light that masks the lilac colour.',
        'Clean the wire with (hydrochloric) acid and heat until no colour is seen, before each test (accept: separate wire or splint for each salt).'
      ],
      hints: ['What was on the wire before the potassium salt?', 'Which colour is more intense?'],
      solution: '<p>See the model answer: contamination by sodium, and a blank test with a cleaned wire as the improvement.</p>'
    },

    /* ---------------------------------------------------------------- AHL */
    {
      id: 'lab-flame-tests-q011', topic: 'lab-flame-tests', level: 'ahl', tier: 'exam', type: 'numeric', marks: 2,
      syllabus: 'Structure 1.3.6',
      stem: '<p>Lithium’s red line has a corrected wavelength of 671 nm. Calculate the energy, in J, of one photon of this light.</p>',
      answer: 2.9642e-19, tolerance: '1%', sigfigs: 3, unit: 'J',
      hints: ['Find the frequency first: f = c / λ, with λ in metres.', 'Then E = hf.'],
      solution: math(['<i>f</i> = 3.00 × 10<sup>8</sup> / 6.71 × 10<sup>−7</sup> = 4.471 × 10<sup>14</sup> s<sup>−1</sup>',
        '<i>E</i> = 6.63 × 10<sup>−34</sup> × 4.471 × 10<sup>14</sup> = <b>2.96 × 10<sup>−19</sup> J</b>'])
    },
    {
      id: 'lab-flame-tests-q012', topic: 'lab-flame-tests', level: 'ahl', tier: 'exam', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.3.6',
      stem: '<p>Mercury gives a green line at 546 nm. Calculate the energy, in ' + KJ + ', of one mole of photons of this light.</p>',
      answer: 219.3, tolerance: '1%', sigfigs: 3, unit: 'kJ mol-1',
      hints: ['λ = 5.46 × 10<sup>−7</sup> m. Use f = c / λ and E = hf.', 'Multiply by the Avogadro constant and divide by 1000.'],
      solution: math(['<i>f</i> = 3.00 × 10<sup>8</sup> / 5.46 × 10<sup>−7</sup> = 5.495 × 10<sup>14</sup> s<sup>−1</sup>',
        '<i>E</i> = 6.63 × 10<sup>−34</sup> × 5.495 × 10<sup>14</sup> = 3.643 × 10<sup>−19</sup> J',
        '3.643 × 10<sup>−19</sup> × 6.02 × 10<sup>23</sup> / 1000 = <b>219 ' + KJ + '</b>'])
    },
    {
      id: 'lab-flame-tests-q013', topic: 'lab-flame-tests', level: 'ahl', tier: 'challenge', type: 'numeric', marks: 3,
      syllabus: 'Structure 1.3.6',
      stem: '<p>In the emission spectrum of hydrogen, the lines that end on the ground state converge at a frequency of ' + sci('3.29', 15) + ' s<sup>−1</sup>. Calculate the first ionization energy of hydrogen in ' + KJ + '.</p>',
      answer: 1313.1, tolerance: '1%', sigfigs: [3, 4], unit: 'kJ mol-1',
      hints: ['At the convergence limit the electron is removed from the atom. E = hf gives the energy for one atom.', 'Multiply by the Avogadro constant and divide by 1000.'],
      solution: math(['<i>E</i> = 6.63 × 10<sup>−34</sup> × 3.29 × 10<sup>15</sup> = 2.181 × 10<sup>−18</sup> J per atom',
        '2.181 × 10<sup>−18</sup> × 6.02 × 10<sup>23</sup> = 1.313 × 10<sup>6</sup> J mol<sup>−1</sup> = <b>1310 ' + KJ + '</b>']),
      answerDisplay: '1310 kJ mol<sup>−1</sup> (1313 to 4 significant figures)'
    },
    {
      id: 'lab-flame-tests-q014', topic: 'lab-flame-tests', level: 'ahl', tier: 'challenge', type: 'mcq', marks: 1,
      syllabus: 'Structure 1.3.6',
      stem: '<p>A student wants to find the first ionization energy of hydrogen from the convergence limit, using a hand spectroscope and a hydrogen tube. Why can this not be done?</p>',
      options: [
        'The lines that end on the ground state (n = 1) are in the ultraviolet, which the spectroscope cannot show',
        'Hydrogen has only four lines, so there is no convergence limit',
        'The visible lines are too bright to read',
        'The convergence limit is at the red end of the spectrum, beyond 700 nm'
      ],
      answer: 0,
      misconception: {
        1: 'Only four lines are visible, but each series has many more lines, crowding together towards its limit.',
        2: 'Brightness is not the problem. The question is which region of the spectrum the needed lines are in.',
        3: 'Lines converge at higher frequency, so towards shorter wavelengths, not towards the red end.'
      },
      hints: ['Which energy level does the electron fall to for the first ionization energy? Is that transition visible?'],
      solution: '<p>The first ionization energy needs the series that ends on n = 1. Those transitions have large energy differences, so the lines are in the ultraviolet. The visible lines end on n = 2, and their limit gives the energy to remove an electron from n = 2, not from the ground state.</p>'
    }
  ]);
})();
