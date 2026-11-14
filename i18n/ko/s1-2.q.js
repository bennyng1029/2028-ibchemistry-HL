/* s1-2.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's1-2.q', {
  questions: {

    // ── s1-2-q001 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q001": {
      // EN: <p>Which statement describes the nucleus of an atom?</p>
      stem: "",
      options: [
        // EN: It is positively charged and contains most of the mass of the atom.
        "",
        // EN: It is neutral and contains most of the mass of the atom.
        "",
        // EN: It is positively charged and takes up most of the volume of the atom.
        "",
        // EN: It is negatively charged and contains protons, neutrons and electrons.
        "",
      ],
      hints: [
        // EN: Which particles are in the nucleus, and what charge does each one have?
        "",
        // EN: Think about mass and volume separately. Where is the mass? Where is the space?
        "",
      ],
      // EN: <p>The nucleus contains protons (relative charge +1) and neutrons (charge 0), so it is positively charged. Protons and neutrons each have a relative mass of 1 and the mass of an electron is negligible, so nearly all the mass is in the nucleus. It is very small and dense.</p>
      solution: "",
      misconception: {
        // EN (option B): Neutrons are neutral, but the nucleus also contains protons, so the nucleus as a whole is positive. Only the whole atom is neutral.
        "1": "",
        // EN (option C): The charge is right, but the nucleus is tiny. Most of the volume of an atom is the space occupied by the electrons.
        "2": "",
        // EN (option D): Electrons are not in the nucleus. They occupy the space outside it, and the nucleus is positive.
        "3": "",
      },
    },

    // ── s1-2-q002 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q002": {
      // EN: <p>Which row gives the relative mass and relative charge of a <strong>neutron</strong>?</p>
      stem: "",
      options: [
        // EN: Relative mass 1, relative charge +1
        "",
        // EN: Relative mass 1, relative charge 0
        "",
        // EN: Relative mass negligible, relative charge 0
        "",
        // EN: Relative mass negligible, relative charge −1
        "",
      ],
      hints: [
        // EN: The name is a clue to the charge.
        "",
        // EN: A neutron is a nucleon, like a proton. Their masses are almost the same.
        "",
      ],
      // EN: <p>A neutron has a relative mass of 1 (the same as a proton) and a relative charge of 0. The proton is mass 1, charge +1. The electron has negligible mass and charge −1.</p>
      solution: "",
      misconception: {
        // EN (option A): This row describes a proton. A neutron has the same relative mass but no charge.
        "0": "",
        // EN (option C): A neutron has no charge, but its mass is not negligible. It has about the same mass as a proton.
        "2": "",
        // EN (option D): This row describes an electron.
        "3": "",
      },
    },

    // ── s1-2-q003 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q003": {
      // EN: <p>How many neutrons are in an atom of <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>31</span><span>15</span></span><span>P</span></span>?</p>
      stem: "",
      options: [
        // EN: 15
        "",
        // EN: 16
        "",
        // EN: 31
        "",
        // EN: 46
        "",
      ],
      hints: [
        // EN: The top number is protons + neutrons. The bottom number is protons.
        "",
      ],
      // EN: <div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 31 − 15 = 16</div>
      solution: "",
      misconception: {
        // EN (option A): 15 is the atomic number: the number of protons (and of electrons in the neutral atom).
        "0": "",
        // EN (option C): 31 is the mass number. It counts protons and neutrons together.
        "2": "",
        // EN (option D): You added the two numbers. The mass number already includes the protons, so subtract instead.
        "3": "",
      },
    },

    // ── s1-2-q004 · numeric · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q004": {
      // EN: <p>How many electrons are in the ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>?</p>
      stem: "",
      hints: [
        // EN: A neutral calcium atom has the same number of electrons as protons.
        "",
        // EN: A 2+ ion has lost two electrons.
        "",
      ],
      // EN: <div class="worked__math">electrons in a Ca atom = <i>Z</i> = 20</div><div class="worked__math">electrons in Ca<sup>2+</sup> = 20 − 2 = 18</div><p>If you got 22, you added the charge. A positive ion has <em>lost</em> electrons.</p>
      solution: "",
      // EN: electrons
      unit: "",
    },

    // ── s1-2-q005 · multi · foundation · SL · Structure 1.2.2 · 1 mark
    "s1-2-q005": {
      // EN: <p>Two atoms are isotopes of the same element. Which statements about them are correct? Select all that apply.</p>
      stem: "",
      options: [
        // EN: They have the same number of protons.
        "",
        // EN: They have different numbers of neutrons.
        "",
        // EN: As neutral atoms, they have different numbers of electrons.
        "",
        // EN: They have the same mass number.
        "",
        // EN: They have the same chemical properties.
        "",
      ],
      hints: [
        // EN: Start from the definition: same element, different numbers of neutrons.
        "",
        // EN: What fixes which element an atom is? What decides how it reacts?
        "",
      ],
      // EN: <p>Isotopes are atoms of the same element (same number of protons) with different numbers of neutrons, so their mass numbers differ. As neutral atoms they have the same number of electrons, arranged in the same way, so their chemical properties are the same.</p>
      solution: "",
      misconception: {
        // EN (option C): Neutral atoms of the same element have the same number of protons, so they have the same number of electrons. A different number of electrons would make an ion, not an isotope.
        "2": "",
        // EN (option D): Mass number = protons + neutrons. The neutrons differ, so the mass numbers differ.
        "3": "",
      },
    },

    // ── s1-2-q006 · numeric · foundation · SL · Structure 1.2.2 · 2 marks
    "s1-2-q006": {
      // EN: <p>A sample of rubidium contains 72.0% <span class="nowrap"><sup>85</sup>Rb</span> and 28.0% <span class="nowrap"><sup>87</sup>Rb</span>. Calculate the relative atomic mass of rubidium in this sample, to two decimal places.</p>
      stem: "",
      hints: [
        // EN: Multiply each mass number by its percentage abundance.
        "",
        // EN: <span class="mono">(85 × 72.0 + 87 × 28.0) ÷ 100</span>
        "",
      ],
      // EN: <div class="worked__math">85 × 72.0 = 6120</div><div class="worked__math">87 × 28.0 = 2436</div><div class="worked__math"><i>A</i><sub>r</sub> = (6120 + 2436) / 100 = 8556 / 100 = <b>85.56</b></div><p>No units. Check: the answer is between 85 and 87, and nearer 85, the more abundant isotope.</p>
      solution: "",
    },

    // ── s1-2-q007 · order · foundation · SL · Structure 1.2.2 · 2 marks
    "s1-2-q007": {
      // EN: <p>Put these steps in order to calculate a relative atomic mass from the mass numbers and percentage abundances of the isotopes.</p>
      stem: "",
      options: [
        // EN: Check that the percentage abundances add up to 100.
        "",
        // EN: Multiply the mass of each isotope by its percentage abundance.
        "",
        // EN: Add the results together.
        "",
        // EN: Divide the total by 100.
        "",
        // EN: Round the answer, usually to two decimal places, and give no units.
        "",
      ],
      hints: [
        // EN: Rounding always comes last.
        "",
      ],
      // EN: <p>Weight each isotope first (mass × abundance), then add, then divide by 100 because the abundances are percentages. Round only at the end.</p>
      solution: "",
    },

    // ── s1-2-q008 · multi · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q008": {
      // EN: <p>Which statements about the fluoride ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>19</span><span>9</span></span><span>F</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span> are correct? Select all that apply.</p>
      stem: "",
      options: [
        // EN: It has 9 protons.
        "",
        // EN: It has 19 neutrons.
        "",
        // EN: It has 10 neutrons.
        "",
        // EN: It has 10 electrons.
        "",
        // EN: It has 8 electrons.
        "",
      ],
      hints: [
        // EN: Deal with the nucleus first: protons = <i>Z</i>, neutrons = <i>A</i> − <i>Z</i>.
        "",
        // EN: A 1− charge means one more electron than protons.
        "",
      ],
      // EN: <div class="worked__math">protons = <i>Z</i> = 9</div><div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 19 − 9 = 10</div><div class="worked__math">electrons = 9 + 1 = 10</div>
      solution: "",
      misconception: {
        // EN (option B): 19 is the mass number: protons and neutrons together. Neutrons = 19 − 9.
        "1": "",
        // EN (option E): You subtracted the charge. A negative ion has gained an electron, so it has one more than the 9 protons.
        "4": "",
      },
    },

    // ── s1-2-q009 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q009": {
      // EN: <p>The table shows the particles in four species. The letters are not chemical symbols.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Species</th><th scope="col" class="num">Protons</th><th scope="col" class="num">Neutrons</th><th scope="col" class="num">Electrons</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">17</td><td class="num">18</td><td class="num">17</td></tr><tr><th scope="row">X</th><td class="num">17</td><td class="num">20</td><td class="num">18</td></tr><tr><th scope="row">Y</th><td class="num">18</td><td class="num">20</td><td class="num">18</td></tr><tr><th scope="row">Z</th><td class="num">19</td><td class="num">20</td><td class="num">18</td></tr></tbody></table></div><p>Which two species are isotopes of the same element?</p>
      stem: "",
      options: [
        // EN: W and X
        "",
        // EN: X and Y
        "",
        // EN: X and Z
        "",
        // EN: Y and Z
        "",
      ],
      hints: [
        // EN: Which column decides what element a species is?
        "",
        // EN: Isotopes: same protons, different neutrons. The electron column does not matter here.
        "",
      ],
      // EN: <p>W and X both have 17 protons, so they are the same element. They have 18 and 20 neutrons, so they are isotopes. X has one extra electron, so it is a 1− ion, but it is still an isotope of the same element as W.</p>
      solution: "",
      misconception: {
        // EN (option B): X and Y have the same number of neutrons and electrons, but different numbers of protons. They are different elements.
        "1": "",
        // EN (option C): X and Z both have 18 electrons and 20 neutrons, but 17 and 19 protons. Different protons means different elements.
        "2": "",
        // EN (option D): Y and Z have the same number of neutrons. Isotopes need the same number of protons and <em>different</em> numbers of neutrons.
        "3": "",
      },
    },

    // ── s1-2-q010 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q010": {
      // EN: <p>Which row is correct for the ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>34</span><span>16</span></span><span>S</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span>?</p>
      stem: "",
      options: [
        // EN: 16 protons, 18 neutrons, 14 electrons
        "",
        // EN: 16 protons, 18 neutrons, 18 electrons
        "",
        // EN: 16 protons, 34 neutrons, 18 electrons
        "",
        // EN: 18 protons, 16 neutrons, 16 electrons
        "",
      ],
      hints: [
        // EN: Protons come from the bottom number, whatever the charge.
        "",
        // EN: Negative ions have more electrons than protons.
        "",
      ],
      // EN: <div class="worked__math">protons = <i>Z</i> = 16</div><div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 34 − 16 = 18</div><div class="worked__math">electrons = 16 + 2 = 18</div>
      solution: "",
      misconception: {
        // EN (option A): You subtracted the charge. A 2− ion has gained two electrons: 16 + 2.
        "0": "",
        // EN (option C): 34 is the mass number, not the number of neutrons. Neutrons = 34 − 16.
        "2": "",
        // EN (option D): The charge does not change the number of protons. Sulfur always has 16 protons; the ion has two extra electrons.
        "3": "",
      },
    },

    // ── s1-2-q011 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q011": {
      // EN: <p>Separate beams of protons, neutrons and electrons, all travelling at the same speed, pass between a positively charged plate and a negatively charged plate. Which statement is correct?</p>
      stem: "",
      options: [
        // EN: Protons and electrons are deflected by the same amount, in opposite directions.
        "",
        // EN: Electrons are deflected towards the positive plate, by more than the protons are deflected.
        "",
        // EN: Neutrons are deflected towards the negative plate, by less than the protons.
        "",
        // EN: Protons are deflected towards the positive plate, by less than the electrons.
        "",
      ],
      hints: [
        // EN: Opposite charges attract. Which plate attracts each particle?
        "",
        // EN: The force is the same size on a proton and an electron. Which one is easier to push off course?
        "",
      ],
      // EN: <p>Electrons (relative charge −1) are attracted to the positive plate. Protons (+1) are attracted to the negative plate. The charges have the same size, but the mass of an electron is negligible compared with a proton, so the electron beam bends much more. Neutrons (charge 0) are not deflected.</p>
      solution: "",
      misconception: {
        // EN (option A): The directions are opposite and the charges are the same size, but an electron has a far smaller mass than a proton, so it is deflected much more.
        "0": "",
        // EN (option C): Neutrons have no charge, so the plates have no effect on them. They travel straight on.
        "2": "",
        // EN (option D): Protons are positive, so they are attracted to the negative plate, not the positive one.
        "3": "",
      },
    },

    // ── s1-2-q012 · short · exam · SL · Structure 1.2.1 · 2 marks
    "s1-2-q012": {
      // EN: <p>A species contains 26 protons, 30 neutrons and 23 electrons. Deduce its nuclear symbol, including the charge. Use the periodic table.</p>
      stem: "",
      hints: [
        // EN: The number of protons tells you the element.
        "",
        // EN: Mass number = protons + neutrons. Charge = protons − electrons.
        "",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>56</span><span>26</span></span><span>Fe</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">3+</span></span></p><p>Atomic number = 26, so the element is iron. Mass number = 26 + 30 = 56. Charge = 26 − 23 = +3, written 3+.</p>
      answer: "",
      markscheme: [
        // EN: Mass number 56 (top left) and atomic number 26 (bottom left) with the symbol Fe.
        "",
        // EN: Charge 3+ shown (accept +3).
        "",
      ],
    },

    // ── s1-2-q013 · numeric · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q013": {
      // EN: <p>Magnesium extracted from a meteorite contains 77.5% <span class="nowrap"><sup>24</sup>Mg</span>, 10.3% <span class="nowrap"><sup>25</sup>Mg</span> and 12.2% <span class="nowrap"><sup>26</sup>Mg</span>. Calculate the relative atomic mass of magnesium in this sample, to two decimal places.</p>
      stem: "",
      hints: [
        // EN: Three isotopes means three products to add.
        "",
        // EN: <span class="mono">(24 × 77.5 + 25 × 10.3 + 26 × 12.2) ÷ 100</span>
        "",
      ],
      // EN: <div class="worked__math">24 × 77.5 = 1860.0</div><div class="worked__math">25 × 10.3 = 257.5</div><div class="worked__math">26 × 12.2 = 317.2</div><div class="worked__math"><i>A</i><sub>r</sub> = (1860.0 + 257.5 + 317.2) / 100 = 2434.7 / 100 = 24.347</div><div class="worked__math"><i>A</i><sub>r</sub> = <b>24.35</b> (2 d.p.)</div><p>The data booklet value for magnesium is 24.31. That is for magnesium on Earth, and it does not score here. The question asks for the value from this sample.</p>
      solution: "",
    },

    // ── s1-2-q014 · numeric · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q014": {
      // EN: <p>Gallium has two isotopes. <span class="nowrap"><sup>69</sup>Ga</span> has a relative mass of 68.93 and <span class="nowrap"><sup>71</sup>Ga</span> has a relative mass of 70.92. The relative atomic mass of gallium is 69.72. Calculate the percentage abundance of <span class="nowrap"><sup>69</sup>Ga</span>.</p>
      stem: "",
      hints: [
        // EN: Let the percentage of <sup>69</sup>Ga be <i>x</i>. Then <sup>71</sup>Ga is 100 − <i>x</i>.
        "",
        // EN: <span class="mono">68.93x + 70.92(100 − x) = 6972</span>
        "",
      ],
      // EN: <div class="worked__math">68.93<i>x</i> + 70.92(100 − <i>x</i>) = 69.72 × 100 = 6972</div><div class="worked__math">68.93<i>x</i> + 7092 − 70.92<i>x</i> = 6972</div><div class="worked__math">7092 − 1.99<i>x</i> = 6972</div><div class="worked__math">1.99<i>x</i> = 7092 − 6972 = 120</div><div class="worked__math"><i>x</i> = 120 / 1.99 = 60.30… = <b>60.3%</b></div><p>Check: 69.72 is closer to 68.93 than to 70.92, so <sup>69</sup>Ga should be the more abundant isotope. It is.</p>
      solution: "",
    },

    // ── s1-2-q015 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q015": {
      // EN: <p>Two samples of hydrogen gas are compared under the same conditions. One contains only <span class="nowrap"><sup>1</sup>H</span><sub>2</sub> molecules and the other only <span class="nowrap"><sup>2</sup>H</span><sub>2</sub> molecules. Which property is the <strong>same</strong> for both samples?</p>
      stem: "",
      options: [
        // EN: The density of the gas
        "",
        // EN: The rate at which the gas diffuses
        "",
        // EN: The boiling point
        "",
        // EN: The way the gas reacts with oxygen
        "",
      ],
      hints: [
        // EN: Sort the options into physical properties and chemical properties.
        "",
        // EN: Isotopes have the same number of electrons.
        "",
      ],
      // EN: <p>Isotopes have the same number of electrons and the same electron arrangement, so their chemical properties are the same: both gases react with oxygen in the same way to form water. Density, rate of diffusion and boiling point are physical properties that depend on mass, so they differ.</p>
      solution: "",
      misconception: {
        // EN (option A): Density depends on mass. Molecules of <sup>2</sup>H<sub>2</sub> have twice the mass of <sup>1</sup>H<sub>2</sub> molecules, so the gas is denser.
        "0": "",
        // EN (option B): Rate of diffusion depends on mass. The heavier molecules move more slowly at the same temperature.
        "1": "",
        // EN (option C): Boiling point is a physical property and differs slightly between isotopes because the masses differ.
        "2": "",
      },
    },

    // ── s1-2-q016 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q016": {
      // EN: <p>An element has two isotopes. 75% of its atoms have a mass number of 35 and 25% have a mass number of 37. What is the relative atomic mass of the element?</p>
      stem: "",
      options: [
        // EN: 35.0
        "",
        // EN: 35.5
        "",
        // EN: 36.0
        "",
        // EN: 36.5
        "",
      ],
      hints: [
        // EN: The answer must be closer to the more abundant isotope.
        "",
        // EN: <span class="mono">(35 × 75 + 37 × 25) ÷ 100</span>, or think of four atoms: three of 35 and one of 37.
        "",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>r</sub> = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <b>35.5</b></div>
      solution: "",
      misconception: {
        // EN (option A): 35.0 is the mass of the more common isotope. The 25% of heavier atoms pull the average up.
        "0": "",
        // EN (option C): 36.0 is the simple average of 35 and 37. That would only be right if the two isotopes were equally abundant.
        "2": "",
        // EN (option D): You swapped the abundances. 36.5 would be right for 25% of 35 and 75% of 37.
        "3": "",
      },
    },

    // ── s1-2-q017 · short · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q017": {
      // EN: <p>Explain why two isotopes of the same element have the same chemical properties but different densities.</p>
      stem: "",
      hints: [
        // EN: One part of the answer is about electrons. The other is about mass.
        "",
      ],
      // EN: <p>Isotopes have the same number of electrons (the same electron configuration), and chemical properties depend on the electrons, so the isotopes react in the same way. They have different numbers of neutrons, so their atoms have different masses, and density depends on mass.</p>
      answer: "",
      markscheme: [
        // EN: Same number of electrons / same electron configuration (so same chemical properties).
        "",
        // EN: Different numbers of neutrons, so different mass (so different density).
        "",
      ],
    },

    // ── s1-2-q018 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q018": {
      // EN: <p>Which species contains more electrons than neutrons?</p>
      stem: "",
      options: [
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>2</span><span>1</span></span><span>H</span></span>
        "",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>9</span><span>4</span></span><span>Be</span></span>
        "",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>16</span><span>8</span></span><span>O</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span>
        "",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>23</span><span>11</span></span><span>Na</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span>
        "",
      ],
      hints: [
        // EN: Work out neutrons (<i>A</i> − <i>Z</i>) and electrons for each one.
        "",
        // EN: Remember to adjust the electrons for the charge.
        "",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>16</span><span>8</span></span><span>O</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span> has 16 − 8 = 8 neutrons and 8 + 2 = 10 electrons. It is the only species with more electrons than neutrons.</p>
      solution: "",
      misconception: {
        // EN (option A): This atom has 1 electron and 2 − 1 = 1 neutron. They are equal.
        "0": "",
        // EN (option B): This atom has 4 electrons and 9 − 4 = 5 neutrons.
        "1": "",
        // EN (option D): This ion has 11 − 1 = 10 electrons and 23 − 11 = 12 neutrons.
        "3": "",
      },
    },

    // ── s1-2-q019 · numeric · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q019": {
      // EN: <p>An element has three isotopes with mass numbers 24, 25 and 26. In one sample, 79.0% of the atoms have a mass number of 24, and the relative atomic mass of the sample is 24.32. Calculate the percentage abundance of the isotope with mass number 25. Use the mass numbers as the masses of the isotopes.</p>
      stem: "",
      hints: [
        // EN: The other two isotopes share what is left: 100 − 79.0 = 21.0%.
        "",
        // EN: Let the percentage with mass number 25 be <i>x</i>. Then the percentage with mass number 26 is 21.0 − <i>x</i>.
        "",
        // EN: <span class="mono">24 × 79.0 + 25x + 26(21.0 − x) = 2432</span>
        "",
      ],
      // EN: <div class="worked__math">% of mass 25 = <i>x</i>, so % of mass 26 = 100 − 79.0 − <i>x</i> = 21.0 − <i>x</i></div><div class="worked__math">24 × 79.0 + 25<i>x</i> + 26(21.0 − <i>x</i>) = 24.32 × 100 = 2432</div><div class="worked__math">1896 + 25<i>x</i> + 546 − 26<i>x</i> = 2432</div><div class="worked__math">2442 − <i>x</i> = 2432</div><div class="worked__math"><i>x</i> = <b>10.0%</b></div><p>Check: (24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = 2432 / 100 = 24.32.</p>
      solution: "",
    },

    // ── s1-2-q020 · mcq · challenge · SL · Structure 1.2.1 · 1 mark
    "s1-2-q020": {
      // EN: <p>Which pair of species has the same number of neutrons <strong>and</strong> the same number of electrons?</p>
      stem: "",
      options: [
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>18</span></span><span>Ar</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>
        "",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span></span>
        "",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>
        "",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>35</span><span>17</span></span><span>Cl</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>37</span><span>17</span></span><span>Cl</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span>
        "",
      ],
      hints: [
        // EN: Make a small table: neutrons and electrons for each species.
        "",
        // EN: Same mass number does not mean same number of neutrons.
        "",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span>: neutrons = 39 − 19 = 20, electrons = 19 − 1 = 18.</p><p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>: neutrons = 40 − 20 = 20, electrons = 20 − 2 = 18.</p><p>Both counts match, so this is the pair.</p>
      solution: "",
      misconception: {
        // EN (option A): Both have 18 electrons and the same mass number, but the neutrons differ: 40 − 18 = 22 and 40 − 20 = 20.
        "0": "",
        // EN (option B): Both have 20 neutrons, but as neutral atoms they have 19 and 20 electrons.
        "1": "",
        // EN (option D): Both have 18 electrons, but they are isotopes, so the neutrons differ: 18 and 20.
        "3": "",
      },
    },

    // ── s1-2-q021 · short · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q021": {
      // EN: <p>“Heavy water” has the formula <span class="nowrap"><sup>2</sup>H</span><sub>2</sub>O. Ordinary water is almost entirely <span class="nowrap"><sup>1</sup>H</span><sub>2</sub>O. In both, the oxygen is <span class="nowrap"><sup>16</sup>O</span>.</p><p>Sodium reacts with ordinary water to form sodium hydroxide and hydrogen. Predict, with reasons, how heavy water compares with ordinary water in (a) its reaction with sodium and (b) its density.</p>
      stem: "",
      hints: [
        // EN: Which of (a) and (b) is a chemical property, and which is a physical property?
        "",
        // EN: Compare the masses of the two molecules by adding up mass numbers.
        "",
      ],
      // EN: <p>(a) Heavy water reacts with sodium in the same way, giving the same type of products, because <span class="nowrap"><sup>1</sup>H</span> and <span class="nowrap"><sup>2</sup>H</span> have the same number of electrons, so their chemical properties are the same.</p><p>(b) Heavy water is denser. Each <span class="nowrap"><sup>2</sup>H</span> atom has one more neutron than <span class="nowrap"><sup>1</sup>H</span>, so a molecule of heavy water has a greater mass (2 + 2 + 16 = 20, compared with 1 + 1 + 16 = 18).</p>
      answer: "",
      markscheme: [
        // EN: Same reaction / same chemical behaviour with sodium, because the isotopes have the same number of electrons (same electron configuration).
        "",
        // EN: Heavy water has the greater density.
        "",
        // EN: Because its molecules have a greater mass (extra neutron in each hydrogen atom; 20 compared with 18).
        "",
      ],
    },

    // ── s1-2-q022 · numeric · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q022": {
      // EN: <p>Natural boron contains 19.9% <span class="nowrap"><sup>10</sup>B</span> and 80.1% <span class="nowrap"><sup>11</sup>B</span>. An enriched sample is made by mixing natural boron with pure <span class="nowrap"><sup>10</sup>B</span>, so that for every 2 atoms of natural boron there is 1 added atom of <span class="nowrap"><sup>10</sup>B</span>. Calculate the relative atomic mass of boron in the enriched sample, to two decimal places. Use the mass numbers as the masses of the isotopes.</p>
      stem: "",
      hints: [
        // EN: Work with a convenient number of atoms: 200 atoms of natural boron and 100 added atoms of <sup>10</sup>B.
        "",
        // EN: Of the 200 natural atoms, 19.9% are <sup>10</sup>B. Find the total number of <sup>10</sup>B atoms out of 300.
        "",
        // EN: Then use the weighted mean with the new abundances.
        "",
      ],
      // EN: <p>Take 200 atoms of natural boron and 100 atoms of added <span class="nowrap"><sup>10</sup>B</span>, 300 atoms in total.</p><div class="worked__math"><sup>10</sup>B atoms = (19.9 / 100 × 200) + 100 = 39.8 + 100 = 139.8</div><div class="worked__math"><sup>11</sup>B atoms = 300 − 139.8 = 160.2</div><div class="worked__math"><i>A</i><sub>r</sub> = (10 × 139.8 + 11 × 160.2) / 300 = (1398.0 + 1762.2) / 300</div><div class="worked__math"><i>A</i><sub>r</sub> = 3160.2 / 300 = 10.534 = <b>10.53</b> (2 d.p.)</div><p>This is lower than the data booklet value of 10.81, as expected: the sample has extra atoms of the lighter isotope.</p>
      solution: "",
    },

    // ── s1-2-q023 · mcq · foundation · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q023": {
      // EN: <p>The mass spectrum of an element shows three peaks, all from ions with a 1+ charge. What does the <strong>height</strong> of each peak show?</p>
      stem: "",
      options: [
        // EN: The mass of that isotope
        "",
        // EN: The relative abundance of that isotope
        "",
        // EN: The number of neutrons in that isotope
        "",
        // EN: The charge on that ion
        "",
      ],
      hints: [
        // EN: What is plotted on the vertical axis of a mass spectrum?
        "",
      ],
      // EN: <p>The vertical axis is relative abundance, so the height of a peak shows how much of that isotope is present. The position on the horizontal axis (<i>m/z</i>) gives the mass of the isotope. Three peaks means three isotopes.</p>
      solution: "",
      misconception: {
        // EN (option A): The mass is read from the position of the peak on the horizontal <i>m/z</i> axis, not from its height.
        "0": "",
        // EN (option C): You can work out the neutrons from the position of the peak (mass number minus atomic number), not from its height.
        "2": "",
        // EN (option D): The charge is part of the <i>m/z</i> value on the horizontal axis. Here every ion is 1+.
        "3": "",
      },
    },

    // ── s1-2-q024 · numeric · foundation · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q024": {
      // EN: <p>The mass spectrum of a sample of lithium has two peaks: <i>m/z</i> 6 with a relative abundance of 7.6%, and <i>m/z</i> 7 with a relative abundance of 92.4%. Calculate the relative atomic mass of lithium in this sample, to two decimal places.</p>
      stem: "",
      hints: [
        // EN: The heights are percentages and add up to 100, so this is the usual weighted mean.
        "",
        // EN: <span class="mono">(6 × 7.6 + 7 × 92.4) ÷ 100</span>
        "",
      ],
      // EN: <div class="worked__math">6 × 7.6 = 45.6</div><div class="worked__math">7 × 92.4 = 646.8</div><div class="worked__math"><i>A</i><sub>r</sub> = (45.6 + 646.8) / 100 = 692.4 / 100 = 6.924 = <b>6.92</b> (2 d.p.)</div><p>The data booklet gives 6.94. Write the value you calculated from the spectrum.</p>
      solution: "",
    },

    // ── s1-2-q025 · numeric · exam · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q025": {
      // EN: <p>The mass spectrum of a sample of copper has two peaks: <i>m/z</i> 63 with a relative abundance of 100.0, and <i>m/z</i> 65 with a relative abundance of 44.6. Calculate the relative atomic mass of copper in this sample, to two decimal places.</p>
      stem: "",
      hints: [
        // EN: Add the two peak heights. Is the total 100?
        "",
        // EN: <span class="mono">(63 × 100.0 + 65 × 44.6) ÷ (100.0 + 44.6)</span>
        "",
      ],
      // EN: <div class="worked__math">total height = 100.0 + 44.6 = 144.6</div><div class="worked__math">63 × 100.0 + 65 × 44.6 = 6300.0 + 2899.0 = 9199.0</div><div class="worked__math"><i>A</i><sub>r</sub> = 9199.0 / 144.6 = 63.6168… = <b>63.62</b> (2 d.p.)</div><p>The heights do not add up to 100, so divide by their total. The data booklet value, 63.55, does not score: the question asks for the value from this spectrum.</p>
      solution: "",
    },

    // ── s1-2-q026 · mcq · exam · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q026": {
      // EN: <p>The mass spectrum of an element has two peaks. The peak at <i>m/z</i> 10 has a height of 1 unit and the peak at <i>m/z</i> 11 has a height of 4 units. What is the relative atomic mass of the element?</p>
      stem: "",
      options: [
        // EN: 10.2
        "",
        // EN: 10.5
        "",
        // EN: 10.8
        "",
        // EN: 11.0
        "",
      ],
      hints: [
        // EN: The heights add up to 5, not 100. Divide by 5.
        "",
        // EN: <span class="mono">(10 × 1 + 11 × 4) ÷ (1 + 4)</span>
        "",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>r</sub> = (10 × 1 + 11 × 4) / (1 + 4) = (10 + 44) / 5 = 54 / 5 = <b>10.8</b></div>
      solution: "",
      misconception: {
        // EN (option A): You swapped the heights. 10.2 would be right if the peak at 10 were the taller one.
        "0": "",
        // EN (option B): 10.5 is the simple average of 10 and 11. The peaks are not the same height, so the isotopes must be weighted.
        "1": "",
        // EN (option D): 11.0 is the mass of the more abundant isotope. The atoms of mass 10 pull the average down a little.
        "3": "",
      },
    },

    // ── s1-2-q027 · short · exam · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q027": {
      // EN: <p>Bromine has two isotopes, <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span>, in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has peaks at <i>m/z</i> 158, 160 and 162 with heights in the ratio 1 : 2 : 1. Explain why there are three peaks and why the middle peak is the tallest.</p>
      stem: "",
      hints: [
        // EN: Each molecule has two atoms. List every way of choosing them from the two isotopes, and add up the masses.
        "",
        // EN: Think of tossing two coins. Why is “one head and one tail” more likely than “two heads”?
        "",
      ],
      // EN: <p>The three peaks are from the three possible combinations of isotopes in a <span class="chem">Br2+</span> ion: <span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>79</sup>Br</span> (79 + 79 = 158), <span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> (79 + 81 = 160) and <span class="nowrap"><sup>81</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> (81 + 81 = 162).</p><p>The mixed molecule can form in two ways (<span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> or <span class="nowrap"><sup>81</sup>Br</span>–<span class="nowrap"><sup>79</sup>Br</span>), so it is twice as likely as either of the others. Chance: ½ × ½ = ¼, 2 × ½ × ½ = ½, ½ × ½ = ¼.</p>
      answer: "",
      markscheme: [
        // EN: Peaks identified with the isotope combinations: 158 is two <sup>79</sup>Br, 160 is one <sup>79</sup>Br and one <sup>81</sup>Br, 162 is two <sup>81</sup>Br.
        "",
        // EN: The mixed combination can form in two ways / is twice as probable (as each of the others).
        "",
      ],
    },

    // ── s1-2-q028 · numeric · challenge · AHL · Structure 1.2.3 · 3 marks
    "s1-2-q028": {
      // EN: <p>The table gives the peaks in the mass spectrum of a sample of germanium.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><i>m/z</i></th><th scope="col" class="num">Relative abundance</th></tr></thead><tbody><tr><th scope="row">70</th><td class="num">56.4</td></tr><tr><th scope="row">72</th><td class="num">75.2</td></tr><tr><th scope="row">73</th><td class="num">21.2</td></tr><tr><th scope="row">74</th><td class="num">100.0</td></tr><tr><th scope="row">76</th><td class="num">21.2</td></tr></tbody></table></div><p>Calculate the relative atomic mass of germanium in this sample, to two decimal places.</p>
      stem: "",
      hints: [
        // EN: Add up the five relative abundances first. The total is not 100.
        "",
        // EN: Multiply each <i>m/z</i> by its relative abundance and add the five products.
        "",
        // EN: Divide the sum of the products by the total relative abundance.
        "",
      ],
      // EN: <div class="worked__math">total = 56.4 + 75.2 + 21.2 + 100.0 + 21.2 = 274.0</div><div class="worked__math">70 × 56.4 = 3948.0</div><div class="worked__math">72 × 75.2 = 5414.4</div><div class="worked__math">73 × 21.2 = 1547.6</div><div class="worked__math">74 × 100.0 = 7400.0</div><div class="worked__math">76 × 21.2 = 1611.2</div><div class="worked__math">sum = 3948.0 + 5414.4 + 1547.6 + 7400.0 + 1611.2 = 19921.2</div><div class="worked__math"><i>A</i><sub>r</sub> = 19921.2 / 274.0 = 72.7051… = <b>72.71</b> (2 d.p.)</div><p>Check: the answer lies between 70 and 76. The data booklet value, 72.63, is slightly different and does not score here.</p>
      solution: "",
    },

    // ── s1-2-q029 · mcq · challenge · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q029": {
      // EN: <p>Chlorine has two isotopes, <span class="nowrap"><sup>35</sup>Cl</span> and <span class="nowrap"><sup>37</sup>Cl</span>, with abundances in the ratio 3 : 1. The mass spectrum of chlorine, <span class="chem">Cl2</span>, has peaks at <i>m/z</i> 70, 72 and 74. What is the ratio of the heights of these peaks, in that order?</p>
      stem: "",
      options: [
        // EN: 1 : 2 : 1
        "",
        // EN: 3 : 2 : 1
        "",
        // EN: 9 : 3 : 1
        "",
        // EN: 9 : 6 : 1
        "",
      ],
      hints: [
        // EN: The chance that one atom is <sup>35</sup>Cl is ¾. The chance that it is <sup>37</sup>Cl is ¼.
        "",
        // EN: A molecule has two atoms: multiply the two chances. Count the mixed molecule both ways round.
        "",
      ],
      // EN: <div class="worked__math"><i>m/z</i> 70 (<sup>35</sup>Cl–<sup>35</sup>Cl): ¾ × ¾ = 9/16</div><div class="worked__math"><i>m/z</i> 72 (<sup>35</sup>Cl–<sup>37</sup>Cl, two ways): 2 × ¾ × ¼ = 6/16</div><div class="worked__math"><i>m/z</i> 74 (<sup>37</sup>Cl–<sup>37</sup>Cl): ¼ × ¼ = 1/16</div><p>Ratio of heights = <strong>9 : 6 : 1</strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): 1 : 2 : 1 is the pattern when the two isotopes are equally abundant, as in bromine. Here <sup>35</sup>Cl is three times as common.
        "0": "",
        // EN (option B): The chances have to be multiplied, one factor for each atom in the molecule: ¾ × ¾ for the peak at 70, and so on.
        "1": "",
        // EN (option C): Nearly right, but the mixed molecule can form in two ways (<sup>35</sup>Cl–<sup>37</sup>Cl or <sup>37</sup>Cl–<sup>35</sup>Cl), so its chance is 2 × ¾ × ¼.
        "2": "",
      },
    },

    // ── s1-2-q030 · numeric · challenge · AHL · Structure 1.2.3 · 3 marks
    "s1-2-q030": {
      // EN: <p>An element has two isotopes, with mass numbers 85 and 87, and a relative atomic mass of 85.47. In its mass spectrum the peak at <i>m/z</i> 85 is the taller one and is given a relative abundance of 100. Calculate the relative abundance of the peak at <i>m/z</i> 87 on the same scale. Use the mass numbers as the masses of the isotopes.</p>
      stem: "",
      hints: [
        // EN: First find the percentage abundance of each isotope from the relative atomic mass.
        "",
        // EN: <span class="mono">85x + 87(100 − x) = 8547</span> gives the percentage of the isotope of mass 85.
        "",
        // EN: Then scale: if the taller peak is 100, the other is (its percentage ÷ the percentage of the taller one) × 100.
        "",
      ],
      // EN: <div class="worked__math">85<i>x</i> + 87(100 − <i>x</i>) = 85.47 × 100 = 8547</div><div class="worked__math">8700 − 2<i>x</i> = 8547</div><div class="worked__math"><i>x</i> = 153 / 2 = 76.5% (mass 85), so mass 87 is 23.5%</div><div class="worked__math">relative abundance of the peak at 87 = 23.5 / 76.5 × 100 = 30.71… = <b>30.7</b></div><p>Check: (85 × 100 + 87 × 30.7) / 130.7 = 85.47.</p>
      solution: "",
    },

    // ── s1-2-q031 · mcq · foundation · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q031": {
      // EN: <p>The mass spectrum of a sample of magnesium has a peak at <i>m/z</i> 25. Which species causes this peak?</p>
      stem: "",
      options: [
        // EN: <span class="nowrap"><sup>25</sup>Mg</span>
        "",
        // EN: <span class="nowrap"><sup>25</sup>Mg<sup>+</sup></span>
        "",
        // EN: <span class="nowrap"><sup>25</sup>Mg<sup>−</sup></span>
        "",
        // EN: <span class="nowrap"><sup>25</sup>Mg<sup>2+</sup></span>
        "",
      ],
      hints: [
        // EN: What does the “z” in <i>m/z</i> stand for?
        "",
        // EN: The particles detected are ions. Are they positive or negative?
        "",
      ],
      // EN: <p>The particles detected are positive ions. For a peak at <i>m/z</i> 25 the ion has mass 25 and a 1+ charge: <span class="nowrap"><sup>25</sup>Mg<sup>+</sup></span>. Always include the charge when you name the species that causes a peak.</p>
      solution: "",
      misconception: {
        // EN (option A): The isotope is right, but the charge is missing. A mass spectrometer detects positive ions, and in an exam the mark is lost without the +.
        "0": "",
        // EN (option C): The particles detected in a mass spectrometer are positive ions, not negative ions.
        "2": "",
        // EN (option D): A 2+ ion of mass 25 has <i>m/z</i> = 25 ÷ 2 = 12.5, so it would not give a peak at 25.
        "3": "",
      },
    },

    // ── s1-2-q032 · mcq · exam · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q032": {
      // EN: <p>Bromine has two isotopes, <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span>, in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has three peaks near <i>m/z</i> 160. It also has exactly two more peaks, at <i>m/z</i> 79 and 81, with almost equal heights. Which species cause the peaks at <i>m/z</i> 79 and 81?</p>
      stem: "",
      options: [
        // EN: <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span> atoms
        "",
        // EN: <span class="nowrap"><sup>79</sup>Br<sup>+</sup></span> and <span class="nowrap"><sup>81</sup>Br<sup>+</sup></span> ions
        "",
        // EN: <span class="nowrap"><sup>79</sup>Br<sup>−</sup></span> and <span class="nowrap"><sup>81</sup>Br<sup>−</sup></span> ions
        "",
        // EN: <span class="chem">Br2</span> molecules that have lost two electrons
        "",
      ],
      hints: [
        // EN: Compare 79 and 81 with the mass numbers of the two isotopes.
        "",
        // EN: Some molecules break into single atoms in the instrument. What charge must a particle have to be detected?
        "",
      ],
      // EN: <p>Some <span class="chem">Br2</span> molecules break into single atoms in the instrument. The atoms are detected as positive ions: <span class="nowrap"><sup>79</sup>Br<sup>+</sup></span> at <i>m/z</i> 79 and <span class="nowrap"><sup>81</sup>Br<sup>+</sup></span> at <i>m/z</i> 81. The two isotopes are almost equally abundant, so the two peaks have almost equal heights.</p>
      solution: "",
      misconception: {
        // EN (option A): The isotopes are right, but neutral atoms are not detected. The species must be positive ions, so the + is needed.
        "0": "",
        // EN (option C): Bromine forms bromide ions in its compounds, but the particles detected in a mass spectrometer are positive ions.
        "2": "",
        // EN (option D): Ions with a 2+ charge would appear at half their mass: 158 ÷ 2 = 79, 160 ÷ 2 = 80 and 162 ÷ 2 = 81. That would give three peaks, with the tallest at 80, not two equal peaks.
        "3": "",
      },
    },

  }
});
