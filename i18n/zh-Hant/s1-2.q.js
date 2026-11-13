/* s1-2.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-2.q', {
  questions: {

    // ── s1-2-q001 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q001": {
      // EN: <p>Which statement describes the nucleus of an atom?</p>
      stem: "<p>以下哪一項描述原子的原子核？</p>",
      options: [
        // EN: It is positively charged and contains most of the mass of the atom.
        "帶正電荷，並佔原子的大部分質量。",
        // EN: It is neutral and contains most of the mass of the atom.
        "呈電中性，並佔原子的大部分質量。",
        // EN: It is positively charged and takes up most of the volume of the atom.
        "帶正電荷，並佔原子的大部分體積。",
        // EN: It is negatively charged and contains protons, neutrons and electrons.
        "帶負電荷，內有質子、中子和電子。",
      ],
      hints: [
        // EN: Which particles are in the nucleus, and what charge does each one have?
        "原子核內有哪些粒子？每種粒子帶甚麼電荷？",
        // EN: Think about mass and volume separately. Where is the mass? Where is the space?
        "把質量和體積分開來想。質量在哪裏？空間在哪裏？",
      ],
      // EN: <p>The nucleus contains protons (relative charge +1) and neutrons (charge 0), so it is positively charged. Protons and neutrons each have a relative mass of 1 and the mass of an electron is negligible, so nearly all the mass is in the nucleus. It is very small and dense.</p>
      solution: "<p>原子核內有質子（相對電荷 +1）和中子（電荷 0），所以帶正電荷。質子和中子的相對質量都是 1，而電子的質量可忽略，所以原子的質量幾乎全部集中在原子核。原子核十分細小，密度很高。</p>",
      misconception: {
        // EN (option B): Neutrons are neutral, but the nucleus also contains protons, so the nucleus as a whole is positive. Only the whole atom is neutral.
        "1": "中子呈電中性，但原子核內還有質子，所以整個原子核帶正電荷。只有整個原子才是電中性。",
        // EN (option C): The charge is right, but the nucleus is tiny. Most of the volume of an atom is the space occupied by the electrons.
        "2": "電荷是對的，但原子核十分細小。原子的大部分體積是電子所佔的空間。",
        // EN (option D): Electrons are not in the nucleus. They occupy the space outside it, and the nucleus is positive.
        "3": "電子不在原子核內，而是在原子核外的空間。原子核帶正電荷。",
      },
    },

    // ── s1-2-q002 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q002": {
      // EN: <p>Which row gives the relative mass and relative charge of a <strong>neutron</strong>?</p>
      stem: "<p>哪一行列出了<strong>中子</strong>的相對質量和相對電荷？</p>",
      options: [
        // EN: Relative mass 1, relative charge +1
        "相對質量 1，相對電荷 +1",
        // EN: Relative mass 1, relative charge 0
        "相對質量 1，相對電荷 0",
        // EN: Relative mass negligible, relative charge 0
        "相對質量可忽略，相對電荷 0",
        // EN: Relative mass negligible, relative charge −1
        "相對質量可忽略，相對電荷 −1",
      ],
      hints: [
        // EN: The name is a clue to the charge.
        "名稱本身已經提示了它的電荷。",
        // EN: A neutron is a nucleon, like a proton. Their masses are almost the same.
        "中子和質子一樣，都是核子。兩者的質量幾乎相同。",
      ],
      // EN: <p>A neutron has a relative mass of 1 (the same as a proton) and a relative charge of 0. The proton is mass 1, charge +1. The electron has negligible mass and charge −1.</p>
      solution: "<p>中子的相對質量是 1（與質子相同），相對電荷是 0。質子的質量是 1，電荷是 +1。電子的質量可忽略，電荷是 −1。</p>",
      misconception: {
        // EN (option A): This row describes a proton. A neutron has the same relative mass but no charge.
        "0": "這一行描述的是質子。中子的相對質量與質子相同，但不帶電荷。",
        // EN (option C): A neutron has no charge, but its mass is not negligible. It has about the same mass as a proton.
        "2": "中子不帶電荷，但質量不可忽略。中子的質量與質子大致相同。",
        // EN (option D): This row describes an electron.
        "3": "這一行描述的是電子。",
      },
    },

    // ── s1-2-q003 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q003": {
      // EN: <p>How many neutrons are in an atom of <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>31</span><span>15</span></span><span>P</span></span>?</p>
      stem: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>31</span><span>15</span></span><span>P</span></span> 原子有多少個中子？</p>",
      options: [
        // EN: 15
        "15",
        // EN: 16
        "16",
        // EN: 31
        "31",
        // EN: 46
        "46",
      ],
      hints: [
        // EN: The top number is protons + neutrons. The bottom number is protons.
        "上方的數字是質子 + 中子。下方的數字是質子。",
      ],
      // EN: <div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 31 − 15 = 16</div>
      solution: "<div class=\"worked__math\">中子數 = <i>A</i> − <i>Z</i> = 31 − 15 = 16</div>",
      misconception: {
        // EN (option A): 15 is the atomic number: the number of protons (and of electrons in the neutral atom).
        "0": "15 是原子序：即質子的數目（也是中性原子的電子數目）。",
        // EN (option C): 31 is the mass number. It counts protons and neutrons together.
        "2": "31 是質量數，是質子和中子的總數。",
        // EN (option D): You added the two numbers. The mass number already includes the protons, so subtract instead.
        "3": "你把兩個數字相加了。質量數已經包括質子，所以應該相減。",
      },
    },

    // ── s1-2-q004 · numeric · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q004": {
      // EN: <p>How many electrons are in the ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>?</p>
      stem: "<p>離子 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span> 有多少個電子？</p>",
      hints: [
        // EN: A neutral calcium atom has the same number of electrons as protons.
        "中性鈣原子的電子數目與質子數目相同。",
        // EN: A 2+ ion has lost two electrons.
        "2+ 離子失去了兩個電子。",
      ],
      // EN: <div class="worked__math">electrons in a Ca atom = <i>Z</i> = 20</div><div class="worked__math">electrons in Ca<sup>2+</sup> = 20 − 2 = 18</div><p>If you got 22, you added the charge. A positive ion has <em>lost</em> electrons.</p>
      solution: "<div class=\"worked__math\">Ca 原子的電子數 = <i>Z</i> = 20</div><div class=\"worked__math\">Ca<sup>2+</sup> 的電子數 = 20 − 2 = 18</div><p>如果你的答案是 22，就是把電荷加上去了。正離子是<em>失去</em>了電子。</p>",
      // EN: electrons
      unit: "個電子",
    },

    // ── s1-2-q005 · multi · foundation · SL · Structure 1.2.2 · 1 mark
    "s1-2-q005": {
      // EN: <p>Two atoms are isotopes of the same element. Which statements about them are correct? Select all that apply.</p>
      stem: "<p>兩個原子是同一種元素的同位素。以下哪些關於它們的敘述是正確的？選出所有正確選項。</p>",
      options: [
        // EN: They have the same number of protons.
        "質子數目相同。",
        // EN: They have different numbers of neutrons.
        "中子數目不同。",
        // EN: As neutral atoms, they have different numbers of electrons.
        "同是中性原子時，電子數目不同。",
        // EN: They have the same mass number.
        "質量數相同。",
        // EN: They have the same chemical properties.
        "化學性質相同。",
      ],
      hints: [
        // EN: Start from the definition: same element, different numbers of neutrons.
        "由定義開始：同一種元素，中子數目不同。",
        // EN: What fixes which element an atom is? What decides how it reacts?
        "是甚麼決定原子屬於哪一種元素？是甚麼決定原子怎樣反應？",
      ],
      // EN: <p>Isotopes are atoms of the same element (same number of protons) with different numbers of neutrons, so their mass numbers differ. As neutral atoms they have the same number of electrons, arranged in the same way, so their chemical properties are the same.</p>
      solution: "<p>同位素是同一種元素的原子（質子數目相同），但中子數目不同，所以質量數不同。同是中性原子時，電子數目相同，排列方式也相同，所以化學性質相同。</p>",
      misconception: {
        // EN (option C): Neutral atoms of the same element have the same number of protons, so they have the same number of electrons. A different number of electrons would make an ion, not an isotope.
        "2": "同一種元素的中性原子，質子數目相同，所以電子數目也相同。電子數目不同就是離子，而不是同位素。",
        // EN (option D): Mass number = protons + neutrons. The neutrons differ, so the mass numbers differ.
        "3": "質量數 = 質子 + 中子。中子數目不同，所以質量數不同。",
      },
    },

    // ── s1-2-q006 · numeric · foundation · SL · Structure 1.2.2 · 2 marks
    "s1-2-q006": {
      // EN: <p>A sample of rubidium contains 72.0% <span class="nowrap"><sup>85</sup>Rb</span> and 28.0% <span class="nowrap"><sup>87</sup>Rb</span>. Calculate the relative atomic mass of rubidium in this sample, to two decimal places.</p>
      stem: "<p>某銣樣本含有 72.0% <span class=\"nowrap\"><sup>85</sup>Rb</span> 和 28.0% <span class=\"nowrap\"><sup>87</sup>Rb</span>。計算 (calculate) 這個樣本中銣的相對原子質量，答案取至小數點後 2 位。</p>",
      hints: [
        // EN: Multiply each mass number by its percentage abundance.
        "把每個質量數乘以它的百分豐度。",
        // EN: <span class="mono">(85 × 72.0 + 87 × 28.0) ÷ 100</span>
        "<span class=\"mono\">(85 × 72.0 + 87 × 28.0) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">85 × 72.0 = 6120</div><div class="worked__math">87 × 28.0 = 2436</div><div class="worked__math"><i>A</i><sub>r</sub> = (6120 + 2436) / 100 = 8556 / 100 = <b>85.56</b></div><p>No units. Check: the answer is between 85 and 87, and nearer 85, the more abundant isotope.</p>
      solution: "<div class=\"worked__math\">85 × 72.0 = 6120</div><div class=\"worked__math\">87 × 28.0 = 2436</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (6120 + 2436) / 100 = 8556 / 100 = <b>85.56</b></div><p>沒有單位。檢查：答案在 85 和 87 之間，並且較接近豐度較高的 85。</p>",
    },

    // ── s1-2-q007 · order · foundation · SL · Structure 1.2.2 · 2 marks
    "s1-2-q007": {
      // EN: <p>Put these steps in order to calculate a relative atomic mass from the mass numbers and percentage abundances of the isotopes.</p>
      stem: "<p>把以下步驟排列次序，由同位素的質量數和百分豐度計算相對原子質量。</p>",
      options: [
        // EN: Check that the percentage abundances add up to 100.
        "檢查各百分豐度相加是否等於 100。",
        // EN: Multiply the mass of each isotope by its percentage abundance.
        "把每種同位素的質量乘以它的百分豐度。",
        // EN: Add the results together.
        "把結果相加。",
        // EN: Divide the total by 100.
        "把總和除以 100。",
        // EN: Round the answer, usually to two decimal places, and give no units.
        "把答案取近似值，通常取至小數點後 2 位，不用寫單位。",
      ],
      hints: [
        // EN: Rounding always comes last.
        "取近似值永遠是最後一步。",
      ],
      // EN: <p>Weight each isotope first (mass × abundance), then add, then divide by 100 because the abundances are percentages. Round only at the end.</p>
      solution: "<p>先為每種同位素加權（質量 × 豐度），然後相加，再除以 100，因為豐度是百分率。到最後才取近似值。</p>",
    },

    // ── s1-2-q008 · multi · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q008": {
      // EN: <p>Which statements about the fluoride ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>19</span><span>9</span></span><span>F</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span> are correct? Select all that apply.</p>
      stem: "<p>以下哪些關於氟離子 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>19</span><span>9</span></span><span>F</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span> 的敘述是正確的？選出所有正確選項。</p>",
      options: [
        // EN: It has 9 protons.
        "有 9 個質子。",
        // EN: It has 19 neutrons.
        "有 19 個中子。",
        // EN: It has 10 neutrons.
        "有 10 個中子。",
        // EN: It has 10 electrons.
        "有 10 個電子。",
        // EN: It has 8 electrons.
        "有 8 個電子。",
      ],
      hints: [
        // EN: Deal with the nucleus first: protons = <i>Z</i>, neutrons = <i>A</i> − <i>Z</i>.
        "先處理原子核：質子數 = <i>Z</i>，中子數 = <i>A</i> − <i>Z</i>。",
        // EN: A 1− charge means one more electron than protons.
        "1− 電荷表示電子比質子多一個。",
      ],
      // EN: <div class="worked__math">protons = <i>Z</i> = 9</div><div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 19 − 9 = 10</div><div class="worked__math">electrons = 9 + 1 = 10</div>
      solution: "<div class=\"worked__math\">質子數 = <i>Z</i> = 9</div><div class=\"worked__math\">中子數 = <i>A</i> − <i>Z</i> = 19 − 9 = 10</div><div class=\"worked__math\">電子數 = 9 + 1 = 10</div>",
      misconception: {
        // EN (option B): 19 is the mass number: protons and neutrons together. Neutrons = 19 − 9.
        "1": "19 是質量數：即質子和中子的總數。中子數 = 19 − 9。",
        // EN (option E): You subtracted the charge. A negative ion has gained an electron, so it has one more than the 9 protons.
        "4": "你減去了電荷。負離子得到了一個電子，所以電子比 9 個質子多一個。",
      },
    },

    // ── s1-2-q009 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q009": {
      // EN: <p>The table shows the particles in four species. The letters are not chemical symbols.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Species</th><th scope="col" class="num">Protons</th><th scope="col" class="num">Neutrons</th><th scope="col" class="num">Electrons</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">17</td><td class="num">18</td><td class="num">17</td></tr><tr><th scope="row">X</th><td class="num">17</td><td class="num">20</td><td class="num">18</td></tr><tr><th scope="row">Y</th><td class="num">18</td><td class="num">20</td><td class="num">18</td></tr><tr><th scope="row">Z</th><td class="num">19</td><td class="num">20</td><td class="num">18</td></tr></tbody></table></div><p>Which two species are isotopes of the same element?</p>
      stem: "<p>下表列出四種物種 (species) 所含的粒子。表中的字母並不是化學符號。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">物種</th><th scope=\"col\" class=\"num\">質子</th><th scope=\"col\" class=\"num\">中子</th><th scope=\"col\" class=\"num\">電子</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">17</td><td class=\"num\">18</td><td class=\"num\">17</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">17</td><td class=\"num\">20</td><td class=\"num\">18</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">18</td><td class=\"num\">20</td><td class=\"num\">18</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">19</td><td class=\"num\">20</td><td class=\"num\">18</td></tr></tbody></table></div><p>哪兩種物種是同一種元素的同位素？</p>",
      options: [
        // EN: W and X
        "W 和 X",
        // EN: X and Y
        "X 和 Y",
        // EN: X and Z
        "X 和 Z",
        // EN: Y and Z
        "Y 和 Z",
      ],
      hints: [
        // EN: Which column decides what element a species is?
        "哪一欄決定物種屬於哪一種元素？",
        // EN: Isotopes: same protons, different neutrons. The electron column does not matter here.
        "同位素：質子數目相同，中子數目不同。這裏不用理會電子那一欄。",
      ],
      // EN: <p>W and X both have 17 protons, so they are the same element. They have 18 and 20 neutrons, so they are isotopes. X has one extra electron, so it is a 1− ion, but it is still an isotope of the same element as W.</p>
      solution: "<p>W 和 X 都有 17 個質子，所以是同一種元素。它們分別有 18 和 20 個中子，所以是同位素。X 多了一個電子，所以是 1− 離子，但它與 W 仍然是同一種元素的同位素。</p>",
      misconception: {
        // EN (option B): X and Y have the same number of neutrons and electrons, but different numbers of protons. They are different elements.
        "1": "X 和 Y 的中子和電子數目相同，但質子數目不同。它們是不同的元素。",
        // EN (option C): X and Z both have 18 electrons and 20 neutrons, but 17 and 19 protons. Different protons means different elements.
        "2": "X 和 Z 都有 18 個電子和 20 個中子，但質子分別是 17 和 19 個。質子數目不同，就是不同的元素。",
        // EN (option D): Y and Z have the same number of neutrons. Isotopes need the same number of protons and <em>different</em> numbers of neutrons.
        "3": "Y 和 Z 的中子數目相同。同位素的質子數目必須相同，中子數目必須<em>不同</em>。",
      },
    },

    // ── s1-2-q010 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q010": {
      // EN: <p>Which row is correct for the ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>34</span><span>16</span></span><span>S</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span>?</p>
      stem: "<p>哪一行正確描述離子 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>34</span><span>16</span></span><span>S</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2−</span></span>？</p>",
      options: [
        // EN: 16 protons, 18 neutrons, 14 electrons
        "16 個質子、18 個中子、14 個電子",
        // EN: 16 protons, 18 neutrons, 18 electrons
        "16 個質子、18 個中子、18 個電子",
        // EN: 16 protons, 34 neutrons, 18 electrons
        "16 個質子、34 個中子、18 個電子",
        // EN: 18 protons, 16 neutrons, 16 electrons
        "18 個質子、16 個中子、16 個電子",
      ],
      hints: [
        // EN: Protons come from the bottom number, whatever the charge.
        "不論電荷是多少，質子數目都由下方的數字得出。",
        // EN: Negative ions have more electrons than protons.
        "負離子的電子比質子多。",
      ],
      // EN: <div class="worked__math">protons = <i>Z</i> = 16</div><div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 34 − 16 = 18</div><div class="worked__math">electrons = 16 + 2 = 18</div>
      solution: "<div class=\"worked__math\">質子數 = <i>Z</i> = 16</div><div class=\"worked__math\">中子數 = <i>A</i> − <i>Z</i> = 34 − 16 = 18</div><div class=\"worked__math\">電子數 = 16 + 2 = 18</div>",
      misconception: {
        // EN (option A): You subtracted the charge. A 2− ion has gained two electrons: 16 + 2.
        "0": "你減去了電荷。2− 離子得到了兩個電子：16 + 2。",
        // EN (option C): 34 is the mass number, not the number of neutrons. Neutrons = 34 − 16.
        "2": "34 是質量數，不是中子數目。中子數 = 34 − 16。",
        // EN (option D): The charge does not change the number of protons. Sulfur always has 16 protons; the ion has two extra electrons.
        "3": "電荷不會改變質子數目。硫永遠有 16 個質子；這個離子多了兩個電子。",
      },
    },

    // ── s1-2-q011 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q011": {
      // EN: <p>Separate beams of protons, neutrons and electrons, all travelling at the same speed, pass between a positively charged plate and a negatively charged plate. Which statement is correct?</p>
      stem: "<p>質子束、中子束和電子束各自以相同速率，在一塊帶正電荷的極板和一塊帶負電荷的極板之間穿過。以下哪一項是正確的？</p>",
      options: [
        // EN: Protons and electrons are deflected by the same amount, in opposite directions.
        "質子和電子的偏轉幅度相同，方向相反。",
        // EN: Electrons are deflected towards the positive plate, by more than the protons are deflected.
        "電子偏向正極板，偏轉幅度比質子大。",
        // EN: Neutrons are deflected towards the negative plate, by less than the protons.
        "中子偏向負極板，偏轉幅度比質子小。",
        // EN: Protons are deflected towards the positive plate, by less than the electrons.
        "質子偏向正極板，偏轉幅度比電子小。",
      ],
      hints: [
        // EN: Opposite charges attract. Which plate attracts each particle?
        "異性電荷互相吸引。每種粒子會被哪一塊極板吸引？",
        // EN: The force is the same size on a proton and an electron. Which one is easier to push off course?
        "質子和電子所受的力大小相同。哪一種較容易被推離原來的路線？",
      ],
      // EN: <p>Electrons (relative charge −1) are attracted to the positive plate. Protons (+1) are attracted to the negative plate. The charges have the same size, but the mass of an electron is negligible compared with a proton, so the electron beam bends much more. Neutrons (charge 0) are not deflected.</p>
      solution: "<p>電子（相對電荷 −1）被正極板吸引。質子（+1）被負極板吸引。兩者的電荷大小相同，但與質子相比，電子的質量可忽略，所以電子束的偏轉大得多。中子（電荷 0）不會偏轉。</p>",
      misconception: {
        // EN (option A): The directions are opposite and the charges are the same size, but an electron has a far smaller mass than a proton, so it is deflected much more.
        "0": "兩者的方向相反，電荷大小相同，但電子的質量遠小於質子，所以偏轉大得多。",
        // EN (option C): Neutrons have no charge, so the plates have no effect on them. They travel straight on.
        "2": "中子不帶電荷，所以極板對中子沒有影響。中子直線前進。",
        // EN (option D): Protons are positive, so they are attracted to the negative plate, not the positive one.
        "3": "質子帶正電荷，所以被負極板吸引，而不是正極板。",
      },
    },

    // ── s1-2-q012 · short · exam · SL · Structure 1.2.1 · 2 marks
    "s1-2-q012": {
      // EN: <p>A species contains 26 protons, 30 neutrons and 23 electrons. Deduce its nuclear symbol, including the charge. Use the periodic table.</p>
      stem: "<p>某物種 (species) 含有 26 個質子、30 個中子和 23 個電子。推斷 (deduce) 它的核符號，包括電荷。請使用週期表。</p>",
      hints: [
        // EN: The number of protons tells you the element.
        "質子數目告訴你它是哪一種元素。",
        // EN: Mass number = protons + neutrons. Charge = protons − electrons.
        "質量數 = 質子 + 中子。電荷 = 質子 − 電子。",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>56</span><span>26</span></span><span>Fe</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">3+</span></span></p><p>Atomic number = 26, so the element is iron. Mass number = 26 + 30 = 56. Charge = 26 − 23 = +3, written 3+.</p>
      answer: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>56</span><span>26</span></span><span>Fe</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">3+</span></span></p><p>原子序 = 26，所以元素是鐵。質量數 = 26 + 30 = 56。電荷 = 26 − 23 = +3，寫成 3+。</p>",
      markscheme: [
        // EN: Mass number 56 (top left) and atomic number 26 (bottom left) with the symbol Fe.
        "質量數 56（左上角）和原子序 26（左下角），配上符號 Fe。",
        // EN: Charge 3+ shown (accept +3).
        "寫出電荷 3+（接受 +3）。",
      ],
    },

    // ── s1-2-q013 · numeric · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q013": {
      // EN: <p>Magnesium extracted from a meteorite contains 77.5% <span class="nowrap"><sup>24</sup>Mg</span>, 10.3% <span class="nowrap"><sup>25</sup>Mg</span> and 12.2% <span class="nowrap"><sup>26</sup>Mg</span>. Calculate the relative atomic mass of magnesium in this sample, to two decimal places.</p>
      stem: "<p>從某隕石提取的鎂含有 77.5% <span class=\"nowrap\"><sup>24</sup>Mg</span>、10.3% <span class=\"nowrap\"><sup>25</sup>Mg</span> 和 12.2% <span class=\"nowrap\"><sup>26</sup>Mg</span>。計算 (calculate) 這個樣本中鎂的相對原子質量，答案取至小數點後 2 位。</p>",
      hints: [
        // EN: Three isotopes means three products to add.
        "有三種同位素，即有三個乘積要相加。",
        // EN: <span class="mono">(24 × 77.5 + 25 × 10.3 + 26 × 12.2) ÷ 100</span>
        "<span class=\"mono\">(24 × 77.5 + 25 × 10.3 + 26 × 12.2) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">24 × 77.5 = 1860.0</div><div class="worked__math">25 × 10.3 = 257.5</div><div class="worked__math">26 × 12.2 = 317.2</div><div class="worked__math"><i>A</i><sub>r</sub> = (1860.0 + 257.5 + 317.2) / 100 = 2434.7 / 100 = 24.347</div><div class="worked__math"><i>A</i><sub>r</sub> = <b>24.35</b> (2 d.p.)</div><p>The data booklet value for magnesium is 24.31. That is for magnesium on Earth, and it does not score here. The question asks for the value from this sample.</p>
      solution: "<div class=\"worked__math\">24 × 77.5 = 1860.0</div><div class=\"worked__math\">25 × 10.3 = 257.5</div><div class=\"worked__math\">26 × 12.2 = 317.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (1860.0 + 257.5 + 317.2) / 100 = 2434.7 / 100 = 24.347</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = <b>24.35</b>（小數點後 2 位）</div><p>數據手冊中鎂的數值是 24.31。那是地球上的鎂的數值，在這裏不會得分。題目要求的是這個樣本的數值。</p>",
    },

    // ── s1-2-q014 · numeric · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q014": {
      // EN: <p>Gallium has two isotopes. <span class="nowrap"><sup>69</sup>Ga</span> has a relative mass of 68.93 and <span class="nowrap"><sup>71</sup>Ga</span> has a relative mass of 70.92. The relative atomic mass of gallium is 69.72. Calculate the percentage abundance of <span class="nowrap"><sup>69</sup>Ga</span>.</p>
      stem: "<p>鎵有兩種同位素。<span class=\"nowrap\"><sup>69</sup>Ga</span> 的相對質量是 68.93，<span class=\"nowrap\"><sup>71</sup>Ga</span> 的相對質量是 70.92。鎵的相對原子質量是 69.72。計算 (calculate) <span class=\"nowrap\"><sup>69</sup>Ga</span> 的百分豐度。</p>",
      hints: [
        // EN: Let the percentage of <sup>69</sup>Ga be <i>x</i>. Then <sup>71</sup>Ga is 100 − <i>x</i>.
        "設 <sup>69</sup>Ga 的百分率為 <i>x</i>，那麼 <sup>71</sup>Ga 就是 100 − <i>x</i>。",
        // EN: <span class="mono">68.93x + 70.92(100 − x) = 6972</span>
        "<span class=\"mono\">68.93x + 70.92(100 − x) = 6972</span>",
      ],
      // EN: <div class="worked__math">68.93<i>x</i> + 70.92(100 − <i>x</i>) = 69.72 × 100 = 6972</div><div class="worked__math">68.93<i>x</i> + 7092 − 70.92<i>x</i> = 6972</div><div class="worked__math">7092 − 1.99<i>x</i> = 6972</div><div class="worked__math">1.99<i>x</i> = 7092 − 6972 = 120</div><div class="worked__math"><i>x</i> = 120 / 1.99 = 60.30… = <b>60.3%</b></div><p>Check: 69.72 is closer to 68.93 than to 70.92, so <sup>69</sup>Ga should be the more abundant isotope. It is.</p>
      solution: "<div class=\"worked__math\">68.93<i>x</i> + 70.92(100 − <i>x</i>) = 69.72 × 100 = 6972</div><div class=\"worked__math\">68.93<i>x</i> + 7092 − 70.92<i>x</i> = 6972</div><div class=\"worked__math\">7092 − 1.99<i>x</i> = 6972</div><div class=\"worked__math\">1.99<i>x</i> = 7092 − 6972 = 120</div><div class=\"worked__math\"><i>x</i> = 120 / 1.99 = 60.30… = <b>60.3%</b></div><p>檢查：69.72 較接近 68.93，而不是 70.92，所以 <sup>69</sup>Ga 應該是豐度較高的同位素。結果正是這樣。</p>",
    },

    // ── s1-2-q015 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q015": {
      // EN: <p>Two samples of hydrogen gas are compared under the same conditions. One contains only <span class="nowrap"><sup>1</sup>H</span><sub>2</sub> molecules and the other only <span class="nowrap"><sup>2</sup>H</span><sub>2</sub> molecules. Which property is the <strong>same</strong> for both samples?</p>
      stem: "<p>在相同條件下比較兩個氫氣樣本。一個只含 <span class=\"nowrap\"><sup>1</sup>H</span><sub>2</sub> 分子，另一個只含 <span class=\"nowrap\"><sup>2</sup>H</span><sub>2</sub> 分子。兩個樣本的哪一種性質是<strong>相同</strong>的？</p>",
      options: [
        // EN: The density of the gas
        "氣體的密度",
        // EN: The rate at which the gas diffuses
        "氣體擴散的速率",
        // EN: The boiling point
        "沸點",
        // EN: The way the gas reacts with oxygen
        "氣體與氧反應的方式",
      ],
      hints: [
        // EN: Sort the options into physical properties and chemical properties.
        "把選項分為物理性質和化學性質。",
        // EN: Isotopes have the same number of electrons.
        "同位素的電子數目相同。",
      ],
      // EN: <p>Isotopes have the same number of electrons and the same electron arrangement, so their chemical properties are the same: both gases react with oxygen in the same way to form water. Density, rate of diffusion and boiling point are physical properties that depend on mass, so they differ.</p>
      solution: "<p>同位素的電子數目相同，電子的排列方式也相同，所以化學性質相同：兩種氣體都以相同的方式與氧反應，生成水。密度、擴散速率和沸點是取決於質量的物理性質，所以並不相同。</p>",
      misconception: {
        // EN (option A): Density depends on mass. Molecules of <sup>2</sup>H<sub>2</sub> have twice the mass of <sup>1</sup>H<sub>2</sub> molecules, so the gas is denser.
        "0": "密度取決於質量。<sup>2</sup>H<sub>2</sub> 分子的質量是 <sup>1</sup>H<sub>2</sub> 分子的兩倍，所以氣體的密度較高。",
        // EN (option B): Rate of diffusion depends on mass. The heavier molecules move more slowly at the same temperature.
        "1": "擴散速率取決於質量。在相同溫度下，較重的分子運動得較慢。",
        // EN (option C): Boiling point is a physical property and differs slightly between isotopes because the masses differ.
        "2": "沸點是物理性質。同位素的質量不同，所以沸點也略有不同。",
      },
    },

    // ── s1-2-q016 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q016": {
      // EN: <p>An element has two isotopes. 75% of its atoms have a mass number of 35 and 25% have a mass number of 37. What is the relative atomic mass of the element?</p>
      stem: "<p>某元素有兩種同位素。75% 的原子質量數是 35，25% 的原子質量數是 37。這種元素的相對原子質量是多少？</p>",
      options: [
        // EN: 35.0
        "35.0",
        // EN: 35.5
        "35.5",
        // EN: 36.0
        "36.0",
        // EN: 36.5
        "36.5",
      ],
      hints: [
        // EN: The answer must be closer to the more abundant isotope.
        "答案必定較接近豐度較高的同位素。",
        // EN: <span class="mono">(35 × 75 + 37 × 25) ÷ 100</span>, or think of four atoms: three of 35 and one of 37.
        "<span class=\"mono\">(35 × 75 + 37 × 25) ÷ 100</span>，或者想像四個原子：三個是 35，一個是 37。",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>r</sub> = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <b>35.5</b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>r</sub> = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <b>35.5</b></div>",
      misconception: {
        // EN (option A): 35.0 is the mass of the more common isotope. The 25% of heavier atoms pull the average up.
        "0": "35.0 是較常見的同位素的質量。那 25% 較重的原子會把平均值拉高。",
        // EN (option C): 36.0 is the simple average of 35 and 37. That would only be right if the two isotopes were equally abundant.
        "2": "36.0 是 35 和 37 的簡單平均值。只有兩種同位素的豐度相等時，這才是對的。",
        // EN (option D): You swapped the abundances. 36.5 would be right for 25% of 35 and 75% of 37.
        "3": "你把兩個豐度對調了。如果 25% 是 35、75% 是 37，答案才是 36.5。",
      },
    },

    // ── s1-2-q017 · short · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q017": {
      // EN: <p>Explain why two isotopes of the same element have the same chemical properties but different densities.</p>
      stem: "<p>解釋 (explain) 為何同一種元素的兩種同位素化學性質相同，密度卻不同。</p>",
      hints: [
        // EN: One part of the answer is about electrons. The other is about mass.
        "答案的一部分與電子有關，另一部分與質量有關。",
      ],
      // EN: <p>Isotopes have the same number of electrons (the same electron configuration), and chemical properties depend on the electrons, so the isotopes react in the same way. They have different numbers of neutrons, so their atoms have different masses, and density depends on mass.</p>
      answer: "<p>同位素的電子數目相同（電子排佈相同），而化學性質取決於電子，所以同位素的反應方式相同。同位素的中子數目不同，所以原子的質量不同，而密度取決於質量。</p>",
      markscheme: [
        // EN: Same number of electrons / same electron configuration (so same chemical properties).
        "電子數目相同／電子排佈相同（所以化學性質相同）。",
        // EN: Different numbers of neutrons, so different mass (so different density).
        "中子數目不同，所以質量不同（所以密度不同）。",
      ],
    },

    // ── s1-2-q018 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q018": {
      // EN: <p>Which species contains more electrons than neutrons?</p>
      stem: "<p>哪一種物種 (species) 的電子比中子多？</p>",
      options: [
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>2</span><span>1</span></span><span>H</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>2</span><span>1</span></span><span>H</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>9</span><span>4</span></span><span>Be</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>9</span><span>4</span></span><span>Be</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>16</span><span>8</span></span><span>O</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>16</span><span>8</span></span><span>O</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2−</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>23</span><span>11</span></span><span>Na</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>23</span><span>11</span></span><span>Na</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">+</span></span>",
      ],
      hints: [
        // EN: Work out neutrons (<i>A</i> − <i>Z</i>) and electrons for each one.
        "求出每種粒子的中子數 (<i>A</i> − <i>Z</i>) 和電子數。",
        // EN: Remember to adjust the electrons for the charge.
        "記住要按電荷調整電子數目。",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>16</span><span>8</span></span><span>O</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span> has 16 − 8 = 8 neutrons and 8 + 2 = 10 electrons. It is the only species with more electrons than neutrons.</p>
      solution: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>16</span><span>8</span></span><span>O</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2−</span></span> 有 16 − 8 = 8 個中子和 8 + 2 = 10 個電子。只有這種物種的電子比中子多。</p>",
      misconception: {
        // EN (option A): This atom has 1 electron and 2 − 1 = 1 neutron. They are equal.
        "0": "這個原子有 1 個電子和 2 − 1 = 1 個中子。兩者相等。",
        // EN (option B): This atom has 4 electrons and 9 − 4 = 5 neutrons.
        "1": "這個原子有 4 個電子和 9 − 4 = 5 個中子。",
        // EN (option D): This ion has 11 − 1 = 10 electrons and 23 − 11 = 12 neutrons.
        "3": "這個離子有 11 − 1 = 10 個電子和 23 − 11 = 12 個中子。",
      },
    },

    // ── s1-2-q019 · numeric · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q019": {
      // EN: <p>An element has three isotopes with mass numbers 24, 25 and 26. In one sample, 79.0% of the atoms have a mass number of 24, and the relative atomic mass of the sample is 24.32. Calculate the percentage abundance of the isotope with mass number 25. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>某元素有三種同位素，質量數分別是 24、25 和 26。在某樣本中，79.0% 的原子質量數是 24，而樣本的相對原子質量是 24.32。計算 (calculate) 質量數 25 的同位素的百分豐度。以質量數作為同位素的質量。</p>",
      hints: [
        // EN: The other two isotopes share what is left: 100 − 79.0 = 21.0%.
        "餘下的由另外兩種同位素瓜分：100 − 79.0 = 21.0%。",
        // EN: Let the percentage with mass number 25 be <i>x</i>. Then the percentage with mass number 26 is 21.0 − <i>x</i>.
        "設質量數 25 的百分率為 <i>x</i>，那麼質量數 26 的百分率就是 21.0 − <i>x</i>。",
        // EN: <span class="mono">24 × 79.0 + 25x + 26(21.0 − x) = 2432</span>
        "<span class=\"mono\">24 × 79.0 + 25x + 26(21.0 − x) = 2432</span>",
      ],
      // EN: <div class="worked__math">% of mass 25 = <i>x</i>, so % of mass 26 = 100 − 79.0 − <i>x</i> = 21.0 − <i>x</i></div><div class="worked__math">24 × 79.0 + 25<i>x</i> + 26(21.0 − <i>x</i>) = 24.32 × 100 = 2432</div><div class="worked__math">1896 + 25<i>x</i> + 546 − 26<i>x</i> = 2432</div><div class="worked__math">2442 − <i>x</i> = 2432</div><div class="worked__math"><i>x</i> = <b>10.0%</b></div><p>Check: (24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = 2432 / 100 = 24.32.</p>
      solution: "<div class=\"worked__math\">質量 25 的百分率 = <i>x</i>，所以質量 26 的百分率 = 100 − 79.0 − <i>x</i> = 21.0 − <i>x</i></div><div class=\"worked__math\">24 × 79.0 + 25<i>x</i> + 26(21.0 − <i>x</i>) = 24.32 × 100 = 2432</div><div class=\"worked__math\">1896 + 25<i>x</i> + 546 − 26<i>x</i> = 2432</div><div class=\"worked__math\">2442 − <i>x</i> = 2432</div><div class=\"worked__math\"><i>x</i> = <b>10.0%</b></div><p>檢查：(24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = 2432 / 100 = 24.32。</p>",
    },

    // ── s1-2-q020 · mcq · challenge · SL · Structure 1.2.1 · 1 mark
    "s1-2-q020": {
      // EN: <p>Which pair of species has the same number of neutrons <strong>and</strong> the same number of electrons?</p>
      stem: "<p>哪一對物種 (species) 的中子數目相同，<strong>而且</strong>電子數目也相同？</p>",
      options: [
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>18</span></span><span>Ar</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>18</span></span><span>Ar</span></span> 和 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span></span> 和 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">+</span></span> 和 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>35</span><span>17</span></span><span>Cl</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>37</span><span>17</span></span><span>Cl</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>35</span><span>17</span></span><span>Cl</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span> 和 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>37</span><span>17</span></span><span>Cl</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span>",
      ],
      hints: [
        // EN: Make a small table: neutrons and electrons for each species.
        "列一個小表：寫出每種物種的中子和電子數目。",
        // EN: Same mass number does not mean same number of neutrons.
        "質量數相同，不代表中子數目相同。",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span>: neutrons = 39 − 19 = 20, electrons = 19 − 1 = 18.</p><p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>: neutrons = 40 − 20 = 20, electrons = 20 − 2 = 18.</p><p>Both counts match, so this is the pair.</p>
      solution: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">+</span></span>：中子數 = 39 − 19 = 20，電子數 = 19 − 1 = 18.</p><p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>：中子數 = 40 − 20 = 20，電子數 = 20 − 2 = 18.</p><p>兩個數目都相同，所以答案是這一對。</p>",
      misconception: {
        // EN (option A): Both have 18 electrons and the same mass number, but the neutrons differ: 40 − 18 = 22 and 40 − 20 = 20.
        "0": "兩者都有 18 個電子，質量數也相同，但中子數目不同：40 − 18 = 22 和 40 − 20 = 20。",
        // EN (option B): Both have 20 neutrons, but as neutral atoms they have 19 and 20 electrons.
        "1": "兩者都有 20 個中子，但兩者是中性原子，電子分別是 19 和 20 個。",
        // EN (option D): Both have 18 electrons, but they are isotopes, so the neutrons differ: 18 and 20.
        "3": "兩者都有 18 個電子，但它們是同位素，所以中子數目不同：18 和 20。",
      },
    },

    // ── s1-2-q021 · short · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q021": {
      // EN: <p>“Heavy water” has the formula <span class="nowrap"><sup>2</sup>H</span><sub>2</sub>O. Ordinary water is almost entirely <span class="nowrap"><sup>1</sup>H</span><sub>2</sub>O. In both, the oxygen is <span class="nowrap"><sup>16</sup>O</span>.</p><p>Sodium reacts with ordinary water to form sodium hydroxide and hydrogen. Predict, with reasons, how heavy water compares with ordinary water in (a) its reaction with sodium and (b) its density.</p>
      stem: "<p>「重水」的化學式是 <span class=\"nowrap\"><sup>2</sup>H</span><sub>2</sub>O。普通的水幾乎全是 <span class=\"nowrap\"><sup>1</sup>H</span><sub>2</sub>O。兩者中的氧都是 <span class=\"nowrap\"><sup>16</sup>O</span>。</p><p>鈉與普通的水反應，生成氫氧化鈉和氫。預測 (predict) 重水與普通的水相比，(a) 與鈉的反應和 (b) 密度有何異同，並說明理由。</p>",
      hints: [
        // EN: Which of (a) and (b) is a chemical property, and which is a physical property?
        "(a) 和 (b) 之中，哪一項是化學性質？哪一項是物理性質？",
        // EN: Compare the masses of the two molecules by adding up mass numbers.
        "把質量數相加，比較兩種分子的質量。",
      ],
      // EN: <p>(a) Heavy water reacts with sodium in the same way, giving the same type of products, because <span class="nowrap"><sup>1</sup>H</span> and <span class="nowrap"><sup>2</sup>H</span> have the same number of electrons, so their chemical properties are the same.</p><p>(b) Heavy water is denser. Each <span class="nowrap"><sup>2</sup>H</span> atom has one more neutron than <span class="nowrap"><sup>1</sup>H</span>, so a molecule of heavy water has a greater mass (2 + 2 + 16 = 20, compared with 1 + 1 + 16 = 18).</p>
      answer: "<p>(a) 重水與鈉的反應方式相同，生成同類的生成物，因為 <span class=\"nowrap\"><sup>1</sup>H</span> 和 <span class=\"nowrap\"><sup>2</sup>H</span> 的電子數目相同，所以化學性質相同。</p><p>(b) 重水的密度較高。每個 <span class=\"nowrap\"><sup>2</sup>H</span> 原子比 <span class=\"nowrap\"><sup>1</sup>H</span> 多一個中子，所以重水分子的質量較大（2 + 2 + 16 = 20，而普通的水是 1 + 1 + 16 = 18）。</p>",
      markscheme: [
        // EN: Same reaction / same chemical behaviour with sodium, because the isotopes have the same number of electrons (same electron configuration).
        "與鈉的反應相同／化學行為相同，因為這些同位素的電子數目相同（電子排佈相同）。",
        // EN: Heavy water has the greater density.
        "重水的密度較高。",
        // EN: Because its molecules have a greater mass (extra neutron in each hydrogen atom; 20 compared with 18).
        "因為重水分子的質量較大（每個氫原子多一個中子；20 對 18）。",
      ],
    },

    // ── s1-2-q022 · numeric · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q022": {
      // EN: <p>Natural boron contains 19.9% <span class="nowrap"><sup>10</sup>B</span> and 80.1% <span class="nowrap"><sup>11</sup>B</span>. An enriched sample is made by mixing natural boron with pure <span class="nowrap"><sup>10</sup>B</span>, so that for every 2 atoms of natural boron there is 1 added atom of <span class="nowrap"><sup>10</sup>B</span>. Calculate the relative atomic mass of boron in the enriched sample, to two decimal places. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>天然的硼含有 19.9% <span class=\"nowrap\"><sup>10</sup>B</span> 和 80.1% <span class=\"nowrap\"><sup>11</sup>B</span>。把天然的硼與純 <span class=\"nowrap\"><sup>10</sup>B</span> 混合，製成一個濃縮樣本：每 2 個天然硼原子，就加入 1 個 <span class=\"nowrap\"><sup>10</sup>B</span> 原子。計算 (calculate) 濃縮樣本中硼的相對原子質量，答案取至小數點後 2 位。以質量數作為同位素的質量。</p>",
      hints: [
        // EN: Work with a convenient number of atoms: 200 atoms of natural boron and 100 added atoms of <sup>10</sup>B.
        "選一個方便計算的原子數目：200 個天然硼原子，加上 100 個 <sup>10</sup>B 原子。",
        // EN: Of the 200 natural atoms, 19.9% are <sup>10</sup>B. Find the total number of <sup>10</sup>B atoms out of 300.
        "200 個天然硼原子中，19.9% 是 <sup>10</sup>B。求出 300 個原子中 <sup>10</sup>B 原子的總數。",
        // EN: Then use the weighted mean with the new abundances.
        "然後用新的豐度計算加權平均值。",
      ],
      // EN: <p>Take 200 atoms of natural boron and 100 atoms of added <span class="nowrap"><sup>10</sup>B</span>, 300 atoms in total.</p><div class="worked__math"><sup>10</sup>B atoms = (19.9 / 100 × 200) + 100 = 39.8 + 100 = 139.8</div><div class="worked__math"><sup>11</sup>B atoms = 300 − 139.8 = 160.2</div><div class="worked__math"><i>A</i><sub>r</sub> = (10 × 139.8 + 11 × 160.2) / 300 = (1398.0 + 1762.2) / 300</div><div class="worked__math"><i>A</i><sub>r</sub> = 3160.2 / 300 = 10.534 = <b>10.53</b> (2 d.p.)</div><p>This is lower than the data booklet value of 10.81, as expected: the sample has extra atoms of the lighter isotope.</p>
      solution: "<p>取 200 個天然硼原子和 100 個加入的 <span class=\"nowrap\"><sup>10</sup>B</span> 原子，合共 300 個原子。</p><div class=\"worked__math\"><sup>10</sup>B 原子數 = (19.9 / 100 × 200) + 100 = 39.8 + 100 = 139.8</div><div class=\"worked__math\"><sup>11</sup>B 原子數 = 300 − 139.8 = 160.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (10 × 139.8 + 11 × 160.2) / 300 = (1398.0 + 1762.2) / 300</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 3160.2 / 300 = 10.534 = <b>10.53</b>（小數點後 2 位）</div><p>答案比數據手冊的 10.81 低，這是預料之內：樣本多了較輕的同位素的原子。</p>",
    },

    // ── s1-2-q023 · mcq · foundation · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q023": {
      // EN: <p>The mass spectrum of an element shows three peaks, all from ions with a 1+ charge. What does the <strong>height</strong> of each peak show?</p>
      stem: "<p>某元素的質譜有三個峰，全部來自帶 1+ 電荷的離子。每個峰的<strong>高度</strong>表示甚麼？</p>",
      options: [
        // EN: The mass of that isotope
        "該同位素的質量",
        // EN: The relative abundance of that isotope
        "該同位素的相對豐度",
        // EN: The number of neutrons in that isotope
        "該同位素的中子數目",
        // EN: The charge on that ion
        "該離子的電荷",
      ],
      hints: [
        // EN: What is plotted on the vertical axis of a mass spectrum?
        "質譜的縱軸表示甚麼？",
      ],
      // EN: <p>The vertical axis is relative abundance, so the height of a peak shows how much of that isotope is present. The position on the horizontal axis (<i>m/z</i>) gives the mass of the isotope. Three peaks means three isotopes.</p>
      solution: "<p>縱軸是相對豐度，所以峰的高度表示該同位素有多少。峰在橫軸 (<i>m/z</i>) 上的位置表示同位素的質量。三個峰代表三種同位素。</p>",
      misconception: {
        // EN (option A): The mass is read from the position of the peak on the horizontal <i>m/z</i> axis, not from its height.
        "0": "質量要從峰在橫軸（<i>m/z</i> 軸）上的位置讀出，而不是從高度讀出。",
        // EN (option C): You can work out the neutrons from the position of the peak (mass number minus atomic number), not from its height.
        "2": "中子數目可以由峰的位置求出（質量數減原子序），而不是由高度求出。",
        // EN (option D): The charge is part of the <i>m/z</i> value on the horizontal axis. Here every ion is 1+.
        "3": "電荷已包含在橫軸的 <i>m/z</i> 值之內。這裏每個離子都是 1+。",
      },
    },

    // ── s1-2-q024 · numeric · foundation · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q024": {
      // EN: <p>The mass spectrum of a sample of lithium has two peaks: <i>m/z</i> 6 with a relative abundance of 7.6%, and <i>m/z</i> 7 with a relative abundance of 92.4%. Calculate the relative atomic mass of lithium in this sample, to two decimal places.</p>
      stem: "<p>某鋰樣本的質譜有兩個峰：<i>m/z</i> 6 的相對豐度是 7.6%，<i>m/z</i> 7 的相對豐度是 92.4%。計算 (calculate) 這個樣本中鋰的相對原子質量，答案取至小數點後 2 位。</p>",
      hints: [
        // EN: The heights are percentages and add up to 100, so this is the usual weighted mean.
        "峰高是百分率，相加等於 100，所以用平常的加權平均值方法就可以。",
        // EN: <span class="mono">(6 × 7.6 + 7 × 92.4) ÷ 100</span>
        "<span class=\"mono\">(6 × 7.6 + 7 × 92.4) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">6 × 7.6 = 45.6</div><div class="worked__math">7 × 92.4 = 646.8</div><div class="worked__math"><i>A</i><sub>r</sub> = (45.6 + 646.8) / 100 = 692.4 / 100 = 6.924 = <b>6.92</b> (2 d.p.)</div><p>The data booklet gives 6.94. Write the value you calculated from the spectrum.</p>
      solution: "<div class=\"worked__math\">6 × 7.6 = 45.6</div><div class=\"worked__math\">7 × 92.4 = 646.8</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (45.6 + 646.8) / 100 = 692.4 / 100 = 6.924 = <b>6.92</b>（小數點後 2 位）</div><p>數據手冊的數值是 6.94。你要寫的是由質譜計算出來的數值。</p>",
    },

    // ── s1-2-q025 · numeric · exam · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q025": {
      // EN: <p>The mass spectrum of a sample of copper has two peaks: <i>m/z</i> 63 with a relative abundance of 100.0, and <i>m/z</i> 65 with a relative abundance of 44.6. Calculate the relative atomic mass of copper in this sample, to two decimal places.</p>
      stem: "<p>某銅樣本的質譜有兩個峰：<i>m/z</i> 63 的相對豐度是 100.0，<i>m/z</i> 65 的相對豐度是 44.6。計算 (calculate) 這個樣本中銅的相對原子質量，答案取至小數點後 2 位。</p>",
      hints: [
        // EN: Add the two peak heights. Is the total 100?
        "把兩個峰高相加。總和是 100 嗎？",
        // EN: <span class="mono">(63 × 100.0 + 65 × 44.6) ÷ (100.0 + 44.6)</span>
        "<span class=\"mono\">(63 × 100.0 + 65 × 44.6) ÷ (100.0 + 44.6)</span>",
      ],
      // EN: <div class="worked__math">total height = 100.0 + 44.6 = 144.6</div><div class="worked__math">63 × 100.0 + 65 × 44.6 = 6300.0 + 2899.0 = 9199.0</div><div class="worked__math"><i>A</i><sub>r</sub> = 9199.0 / 144.6 = 63.6168… = <b>63.62</b> (2 d.p.)</div><p>The heights do not add up to 100, so divide by their total. The data booklet value, 63.55, does not score: the question asks for the value from this spectrum.</p>
      solution: "<div class=\"worked__math\">峰高總和 = 100.0 + 44.6 = 144.6</div><div class=\"worked__math\">63 × 100.0 + 65 × 44.6 = 6300.0 + 2899.0 = 9199.0</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 9199.0 / 144.6 = 63.6168… = <b>63.62</b>（小數點後 2 位）</div><p>峰高相加不等於 100，所以要除以峰高的總和。數據手冊的數值 63.55 不會得分：題目要求的是由這個質譜得出的數值。</p>",
    },

    // ── s1-2-q026 · mcq · exam · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q026": {
      // EN: <p>The mass spectrum of an element has two peaks. The peak at <i>m/z</i> 10 has a height of 1 unit and the peak at <i>m/z</i> 11 has a height of 4 units. What is the relative atomic mass of the element?</p>
      stem: "<p>某元素的質譜有兩個峰。<i>m/z</i> 10 的峰高度是 1 個單位，<i>m/z</i> 11 的峰高度是 4 個單位。這種元素的相對原子質量是多少？</p>",
      options: [
        // EN: 10.2
        "10.2",
        // EN: 10.5
        "10.5",
        // EN: 10.8
        "10.8",
        // EN: 11.0
        "11.0",
      ],
      hints: [
        // EN: The heights add up to 5, not 100. Divide by 5.
        "峰高相加等於 5，不是 100。要除以 5。",
        // EN: <span class="mono">(10 × 1 + 11 × 4) ÷ (1 + 4)</span>
        "<span class=\"mono\">(10 × 1 + 11 × 4) ÷ (1 + 4)</span>",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>r</sub> = (10 × 1 + 11 × 4) / (1 + 4) = (10 + 44) / 5 = 54 / 5 = <b>10.8</b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>r</sub> = (10 × 1 + 11 × 4) / (1 + 4) = (10 + 44) / 5 = 54 / 5 = <b>10.8</b></div>",
      misconception: {
        // EN (option A): You swapped the heights. 10.2 would be right if the peak at 10 were the taller one.
        "0": "你把兩個峰高對調了。如果 10 的峰較高，答案才是 10.2。",
        // EN (option B): 10.5 is the simple average of 10 and 11. The peaks are not the same height, so the isotopes must be weighted.
        "1": "10.5 是 10 和 11 的簡單平均值。兩個峰的高度不同，所以同位素必須加權。",
        // EN (option D): 11.0 is the mass of the more abundant isotope. The atoms of mass 10 pull the average down a little.
        "3": "11.0 是豐度較高的同位素的質量。質量是 10 的原子會把平均值稍為拉低。",
      },
    },

    // ── s1-2-q027 · short · exam · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q027": {
      // EN: <p>Bromine has two isotopes, <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span>, in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has peaks at <i>m/z</i> 158, 160 and 162 with heights in the ratio 1 : 2 : 1. Explain why there are three peaks and why the middle peak is the tallest.</p>
      stem: "<p>溴有兩種同位素：<span class=\"nowrap\"><sup>79</sup>Br</span> 和 <span class=\"nowrap\"><sup>81</sup>Br</span>，豐度幾乎相等。溴 <span class=\"chem\">Br2</span> 的質譜在 <i>m/z</i> 158、160 和 162 有峰，高度比是 1 : 2 : 1。解釋 (explain) 為何有三個峰，以及為何中間的峰最高。</p>",
      hints: [
        // EN: Each molecule has two atoms. List every way of choosing them from the two isotopes, and add up the masses.
        "每個分子有兩個原子。列出從兩種同位素中選出兩個原子的所有組合，並把質量相加。",
        // EN: Think of tossing two coins. Why is “one head and one tail” more likely than “two heads”?
        "想像擲兩個硬幣。為何「一正一反」比「兩個正面」的機會大？",
      ],
      // EN: <p>The three peaks are from the three possible combinations of isotopes in a <span class="chem">Br2+</span> ion: <span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>79</sup>Br</span> (79 + 79 = 158), <span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> (79 + 81 = 160) and <span class="nowrap"><sup>81</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> (81 + 81 = 162).</p><p>The mixed molecule can form in two ways (<span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> or <span class="nowrap"><sup>81</sup>Br</span>–<span class="nowrap"><sup>79</sup>Br</span>), so it is twice as likely as either of the others. Chance: ½ × ½ = ¼, 2 × ½ × ½ = ½, ½ × ½ = ¼.</p>
      answer: "<p>三個峰來自 <span class=\"chem\">Br2+</span> 離子中三種可能的同位素組合：<span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>79</sup>Br</span> (79 + 79 = 158)、<span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span> (79 + 81 = 160) 和 <span class=\"nowrap\"><sup>81</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span> (81 + 81 = 162)。</p><p>混合的分子有兩種形成方式（<span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span> 或 <span class=\"nowrap\"><sup>81</sup>Br</span>–<span class=\"nowrap\"><sup>79</sup>Br</span>），所以它的機會是其餘兩種各自的兩倍。機會：½ × ½ = ¼，2 × ½ × ½ = ½，½ × ½ = ¼。</p>",
      markscheme: [
        // EN: Peaks identified with the isotope combinations: 158 is two <sup>79</sup>Br, 160 is one <sup>79</sup>Br and one <sup>81</sup>Br, 162 is two <sup>81</sup>Br.
        "指出各個峰對應的同位素組合：158 是兩個 <sup>79</sup>Br，160 是一個 <sup>79</sup>Br 和一個 <sup>81</sup>Br，162 是兩個 <sup>81</sup>Br。",
        // EN: The mixed combination can form in two ways / is twice as probable (as each of the others).
        "混合的組合有兩種形成方式／機會是（其餘每一種的）兩倍。",
      ],
    },

    // ── s1-2-q028 · numeric · challenge · AHL · Structure 1.2.3 · 3 marks
    "s1-2-q028": {
      // EN: <p>The table gives the peaks in the mass spectrum of a sample of germanium.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><i>m/z</i></th><th scope="col" class="num">Relative abundance</th></tr></thead><tbody><tr><th scope="row">70</th><td class="num">56.4</td></tr><tr><th scope="row">72</th><td class="num">75.2</td></tr><tr><th scope="row">73</th><td class="num">21.2</td></tr><tr><th scope="row">74</th><td class="num">100.0</td></tr><tr><th scope="row">76</th><td class="num">21.2</td></tr></tbody></table></div><p>Calculate the relative atomic mass of germanium in this sample, to two decimal places.</p>
      stem: "<p>下表列出某鍺樣本的質譜中的峰。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><i>m/z</i></th><th scope=\"col\" class=\"num\">相對豐度</th></tr></thead><tbody><tr><th scope=\"row\">70</th><td class=\"num\">56.4</td></tr><tr><th scope=\"row\">72</th><td class=\"num\">75.2</td></tr><tr><th scope=\"row\">73</th><td class=\"num\">21.2</td></tr><tr><th scope=\"row\">74</th><td class=\"num\">100.0</td></tr><tr><th scope=\"row\">76</th><td class=\"num\">21.2</td></tr></tbody></table></div><p>計算 (calculate) 這個樣本中鍺的相對原子質量，答案取至小數點後 2 位。</p>",
      hints: [
        // EN: Add up the five relative abundances first. The total is not 100.
        "先把五個相對豐度相加。總和不是 100。",
        // EN: Multiply each <i>m/z</i> by its relative abundance and add the five products.
        "把每個 <i>m/z</i> 乘以它的相對豐度，再把五個乘積相加。",
        // EN: Divide the sum of the products by the total relative abundance.
        "把乘積的總和除以相對豐度的總和。",
      ],
      // EN: <div class="worked__math">total = 56.4 + 75.2 + 21.2 + 100.0 + 21.2 = 274.0</div><div class="worked__math">70 × 56.4 = 3948.0</div><div class="worked__math">72 × 75.2 = 5414.4</div><div class="worked__math">73 × 21.2 = 1547.6</div><div class="worked__math">74 × 100.0 = 7400.0</div><div class="worked__math">76 × 21.2 = 1611.2</div><div class="worked__math">sum = 3948.0 + 5414.4 + 1547.6 + 7400.0 + 1611.2 = 19921.2</div><div class="worked__math"><i>A</i><sub>r</sub> = 19921.2 / 274.0 = 72.7051… = <b>72.71</b> (2 d.p.)</div><p>Check: the answer lies between 70 and 76. The data booklet value, 72.63, is slightly different and does not score here.</p>
      solution: "<div class=\"worked__math\">總和 = 56.4 + 75.2 + 21.2 + 100.0 + 21.2 = 274.0</div><div class=\"worked__math\">70 × 56.4 = 3948.0</div><div class=\"worked__math\">72 × 75.2 = 5414.4</div><div class=\"worked__math\">73 × 21.2 = 1547.6</div><div class=\"worked__math\">74 × 100.0 = 7400.0</div><div class=\"worked__math\">76 × 21.2 = 1611.2</div><div class=\"worked__math\">乘積總和 = 3948.0 + 5414.4 + 1547.6 + 7400.0 + 1611.2 = 19921.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 19921.2 / 274.0 = 72.7051… = <b>72.71</b>（小數點後 2 位）</div><p>檢查：答案在 70 和 76 之間。數據手冊的數值 72.63 略有不同，在這裏不會得分。</p>",
    },

    // ── s1-2-q029 · mcq · challenge · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q029": {
      // EN: <p>Chlorine has two isotopes, <span class="nowrap"><sup>35</sup>Cl</span> and <span class="nowrap"><sup>37</sup>Cl</span>, with abundances in the ratio 3 : 1. The mass spectrum of chlorine, <span class="chem">Cl2</span>, has peaks at <i>m/z</i> 70, 72 and 74. What is the ratio of the heights of these peaks, in that order?</p>
      stem: "<p>氯有兩種同位素：<span class=\"nowrap\"><sup>35</sup>Cl</span> 和 <span class=\"nowrap\"><sup>37</sup>Cl</span>，豐度比是 3 : 1。氯 <span class=\"chem\">Cl2</span> 的質譜在 <i>m/z</i> 70、72 和 74 有峰。按這個次序，這些峰的高度比是多少？</p>",
      options: [
        // EN: 1 : 2 : 1
        "1 : 2 : 1",
        // EN: 3 : 2 : 1
        "3 : 2 : 1",
        // EN: 9 : 3 : 1
        "9 : 3 : 1",
        // EN: 9 : 6 : 1
        "9 : 6 : 1",
      ],
      hints: [
        // EN: The chance that one atom is <sup>35</sup>Cl is ¾. The chance that it is <sup>37</sup>Cl is ¼.
        "一個原子是 <sup>35</sup>Cl 的機會是 ¾，是 <sup>37</sup>Cl 的機會是 ¼。",
        // EN: A molecule has two atoms: multiply the two chances. Count the mixed molecule both ways round.
        "一個分子有兩個原子：把兩個機會相乘。混合的分子有兩種排列，兩種都要計算。",
      ],
      // EN: <div class="worked__math"><i>m/z</i> 70 (<sup>35</sup>Cl–<sup>35</sup>Cl): ¾ × ¾ = 9/16</div><div class="worked__math"><i>m/z</i> 72 (<sup>35</sup>Cl–<sup>37</sup>Cl, two ways): 2 × ¾ × ¼ = 6/16</div><div class="worked__math"><i>m/z</i> 74 (<sup>37</sup>Cl–<sup>37</sup>Cl): ¼ × ¼ = 1/16</div><p>Ratio of heights = <strong>9 : 6 : 1</strong>.</p>
      solution: "<div class=\"worked__math\"><i>m/z</i> 70 (<sup>35</sup>Cl–<sup>35</sup>Cl)：¾ × ¾ = 9/16</div><div class=\"worked__math\"><i>m/z</i> 72（<sup>35</sup>Cl–<sup>37</sup>Cl，兩種方式）：2 × ¾ × ¼ = 6/16</div><div class=\"worked__math\"><i>m/z</i> 74 (<sup>37</sup>Cl–<sup>37</sup>Cl)：¼ × ¼ = 1/16</div><p>高度比 = <strong>9 : 6 : 1</strong>。</p>",
      misconception: {
        // EN (option A): 1 : 2 : 1 is the pattern when the two isotopes are equally abundant, as in bromine. Here <sup>35</sup>Cl is three times as common.
        "0": "1 : 2 : 1 是兩種同位素豐度相等時的規律，例如溴。這裏 <sup>35</sup>Cl 的數量是另一種同位素的三倍。",
        // EN (option B): The chances have to be multiplied, one factor for each atom in the molecule: ¾ × ¾ for the peak at 70, and so on.
        "1": "機會要相乘，分子中每個原子佔一個因子：70 的峰是 ¾ × ¾，如此類推。",
        // EN (option C): Nearly right, but the mixed molecule can form in two ways (<sup>35</sup>Cl–<sup>37</sup>Cl or <sup>37</sup>Cl–<sup>35</sup>Cl), so its chance is 2 × ¾ × ¼.
        "2": "差不多對了，但混合的分子有兩種形成方式（<sup>35</sup>Cl–<sup>37</sup>Cl 或 <sup>37</sup>Cl–<sup>35</sup>Cl），所以它的機會是 2 × ¾ × ¼。",
      },
    },

    // ── s1-2-q030 · numeric · challenge · AHL · Structure 1.2.3 · 3 marks
    "s1-2-q030": {
      // EN: <p>An element has two isotopes, with mass numbers 85 and 87, and a relative atomic mass of 85.47. In its mass spectrum the peak at <i>m/z</i> 85 is the taller one and is given a relative abundance of 100. Calculate the relative abundance of the peak at <i>m/z</i> 87 on the same scale. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>某元素有兩種同位素，質量數分別是 85 和 87，相對原子質量是 85.47。在它的質譜中，<i>m/z</i> 85 的峰較高，相對豐度設為 100。計算 (calculate) <i>m/z</i> 87 的峰在同一標度上的相對豐度。以質量數作為同位素的質量。</p>",
      hints: [
        // EN: First find the percentage abundance of each isotope from the relative atomic mass.
        "先由相對原子質量求出每種同位素的百分豐度。",
        // EN: <span class="mono">85x + 87(100 − x) = 8547</span> gives the percentage of the isotope of mass 85.
        "由 <span class=\"mono\">85x + 87(100 − x) = 8547</span> 可求出質量 85 的同位素的百分率。",
        // EN: Then scale: if the taller peak is 100, the other is (its percentage ÷ the percentage of the taller one) × 100.
        "然後按比例換算：如果較高的峰是 100，另一個峰就是（它的百分率 ÷ 較高的峰的百分率）× 100。",
      ],
      // EN: <div class="worked__math">85<i>x</i> + 87(100 − <i>x</i>) = 85.47 × 100 = 8547</div><div class="worked__math">8700 − 2<i>x</i> = 8547</div><div class="worked__math"><i>x</i> = 153 / 2 = 76.5% (mass 85), so mass 87 is 23.5%</div><div class="worked__math">relative abundance of the peak at 87 = 23.5 / 76.5 × 100 = 30.71… = <b>30.7</b></div><p>Check: (85 × 100 + 87 × 30.7) / 130.7 = 85.47.</p>
      solution: "<div class=\"worked__math\">85<i>x</i> + 87(100 − <i>x</i>) = 85.47 × 100 = 8547</div><div class=\"worked__math\">8700 − 2<i>x</i> = 8547</div><div class=\"worked__math\"><i>x</i> = 153 / 2 = 76.5%（質量 85），所以質量 87 佔 23.5%</div><div class=\"worked__math\">87 的峰的相對豐度 = 23.5 / 76.5 × 100 = 30.71… = <b>30.7</b></div><p>檢查：(85 × 100 + 87 × 30.7) / 130.7 = 85.47。</p>",
    },

    // ── s1-2-q031 · mcq · foundation · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q031": {
      // EN: <p>The mass spectrum of a sample of magnesium has a peak at <i>m/z</i> 25. Which species causes this peak?</p>
      stem: "<p>某鎂樣本的質譜在 <i>m/z</i> 25 有一個峰。這個峰由哪一種物種 (species) 產生？</p>",
      options: [
        // EN: <span class="nowrap"><sup>25</sup>Mg</span>
        "<span class=\"nowrap\"><sup>25</sup>Mg</span>",
        // EN: <span class="nowrap"><sup>25</sup>Mg<sup>+</sup></span>
        "<span class=\"nowrap\"><sup>25</sup>Mg<sup>+</sup></span>",
        // EN: <span class="nowrap"><sup>25</sup>Mg<sup>−</sup></span>
        "<span class=\"nowrap\"><sup>25</sup>Mg<sup>−</sup></span>",
        // EN: <span class="nowrap"><sup>25</sup>Mg<sup>2+</sup></span>
        "<span class=\"nowrap\"><sup>25</sup>Mg<sup>2+</sup></span>",
      ],
      hints: [
        // EN: What does the “z” in <i>m/z</i> stand for?
        "<i>m/z</i> 中的「z」代表甚麼？",
        // EN: The particles detected are ions. Are they positive or negative?
        "檢測到的粒子是離子。它們是正離子還是負離子？",
      ],
      // EN: <p>The particles detected are positive ions. For a peak at <i>m/z</i> 25 the ion has mass 25 and a 1+ charge: <span class="nowrap"><sup>25</sup>Mg<sup>+</sup></span>. Always include the charge when you name the species that causes a peak.</p>
      solution: "<p>檢測到的粒子是正離子。<i>m/z</i> 25 的峰，離子的質量是 25，帶 1+ 電荷：<span class=\"nowrap\"><sup>25</sup>Mg<sup>+</sup></span>。指出產生某個峰的物種時，一定要寫上電荷。</p>",
      misconception: {
        // EN (option A): The isotope is right, but the charge is missing. A mass spectrometer detects positive ions, and in an exam the mark is lost without the +.
        "0": "同位素是對的，但漏了電荷。質譜儀檢測的是正離子；考試時沒有寫 + 就會失分。",
        // EN (option C): The particles detected in a mass spectrometer are positive ions, not negative ions.
        "2": "質譜儀檢測到的粒子是正離子，不是負離子。",
        // EN (option D): A 2+ ion of mass 25 has <i>m/z</i> = 25 ÷ 2 = 12.5, so it would not give a peak at 25.
        "3": "質量 25 的 2+ 離子，<i>m/z</i> = 25 ÷ 2 = 12.5，所以不會在 25 產生峰。",
      },
    },

    // ── s1-2-q032 · mcq · exam · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q032": {
      // EN: <p>Bromine has two isotopes, <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span>, in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has three peaks near <i>m/z</i> 160. It also has exactly two more peaks, at <i>m/z</i> 79 and 81, with almost equal heights. Which species cause the peaks at <i>m/z</i> 79 and 81?</p>
      stem: "<p>溴有兩種同位素：<span class=\"nowrap\"><sup>79</sup>Br</span> 和 <span class=\"nowrap\"><sup>81</sup>Br</span>，豐度幾乎相等。溴 <span class=\"chem\">Br2</span> 的質譜在 <i>m/z</i> 160 附近有三個峰。此外還有剛好兩個峰，位於 <i>m/z</i> 79 和 81，高度幾乎相等。<i>m/z</i> 79 和 81 的峰由哪些物種 (species) 產生？</p>",
      options: [
        // EN: <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span> atoms
        "<span class=\"nowrap\"><sup>79</sup>Br</span> 和 <span class=\"nowrap\"><sup>81</sup>Br</span> 原子",
        // EN: <span class="nowrap"><sup>79</sup>Br<sup>+</sup></span> and <span class="nowrap"><sup>81</sup>Br<sup>+</sup></span> ions
        "<span class=\"nowrap\"><sup>79</sup>Br<sup>+</sup></span> 和 <span class=\"nowrap\"><sup>81</sup>Br<sup>+</sup></span> 離子",
        // EN: <span class="nowrap"><sup>79</sup>Br<sup>−</sup></span> and <span class="nowrap"><sup>81</sup>Br<sup>−</sup></span> ions
        "<span class=\"nowrap\"><sup>79</sup>Br<sup>−</sup></span> 和 <span class=\"nowrap\"><sup>81</sup>Br<sup>−</sup></span> 離子",
        // EN: <span class="chem">Br2</span> molecules that have lost two electrons
        "失去了兩個電子的 <span class=\"chem\">Br2</span> 分子",
      ],
      hints: [
        // EN: Compare 79 and 81 with the mass numbers of the two isotopes.
        "把 79 和 81 與兩種同位素的質量數比較。",
        // EN: Some molecules break into single atoms in the instrument. What charge must a particle have to be detected?
        "有些分子會在儀器內分裂成單個原子。粒子要帶甚麼電荷才會被檢測到？",
      ],
      // EN: <p>Some <span class="chem">Br2</span> molecules break into single atoms in the instrument. The atoms are detected as positive ions: <span class="nowrap"><sup>79</sup>Br<sup>+</sup></span> at <i>m/z</i> 79 and <span class="nowrap"><sup>81</sup>Br<sup>+</sup></span> at <i>m/z</i> 81. The two isotopes are almost equally abundant, so the two peaks have almost equal heights.</p>
      solution: "<p>有些 <span class=\"chem\">Br2</span> 分子會在儀器內分裂成單個原子。這些原子以正離子的形式被檢測到：<span class=\"nowrap\"><sup>79</sup>Br<sup>+</sup></span> 位於 <i>m/z</i> 79，<span class=\"nowrap\"><sup>81</sup>Br<sup>+</sup></span> 位於 <i>m/z</i> 81。兩種同位素的豐度幾乎相等，所以兩個峰的高度幾乎相等。</p>",
      misconception: {
        // EN (option A): The isotopes are right, but neutral atoms are not detected. The species must be positive ions, so the + is needed.
        "0": "同位素是對的，但中性原子不會被檢測到。這些物種必須是正離子，所以要寫上 +。",
        // EN (option C): Bromine forms bromide ions in its compounds, but the particles detected in a mass spectrometer are positive ions.
        "2": "溴在化合物中會形成溴離子（負離子），但質譜儀檢測到的粒子是正離子。",
        // EN (option D): Ions with a 2+ charge would appear at half their mass: 158 ÷ 2 = 79, 160 ÷ 2 = 80 and 162 ÷ 2 = 81. That would give three peaks, with the tallest at 80, not two equal peaks.
        "3": "帶 2+ 電荷的離子會出現在質量一半的位置：158 ÷ 2 = 79、160 ÷ 2 = 80 和 162 ÷ 2 = 81。這樣會有三個峰，最高的在 80，而不是兩個高度相等的峰。",
      },
    },

  }
});
