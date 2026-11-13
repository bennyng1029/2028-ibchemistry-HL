/* s1-2.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-2.q', {
  questions: {

    // ── s1-2-q001 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q001": {
      // EN: <p>Which statement describes the nucleus of an atom?</p>
      stem: "<p>原子の原子核を正しく説明している文はどれですか。</p>",
      options: [
        // EN: It is positively charged and contains most of the mass of the atom.
        "正の電荷をもち、原子の質量のほとんどを占める。",
        // EN: It is neutral and contains most of the mass of the atom.
        "電気的に中性で、原子の質量のほとんどを占める。",
        // EN: It is positively charged and takes up most of the volume of the atom.
        "正の電荷をもち、原子の体積のほとんどを占める。",
        // EN: It is negatively charged and contains protons, neutrons and electrons.
        "負の電荷をもち、陽子・中性子・電子が入っている。",
      ],
      hints: [
        // EN: Which particles are in the nucleus, and what charge does each one have?
        "原子核にはどの粒子が入っていますか。それぞれの電荷は何ですか。",
        // EN: Think about mass and volume separately. Where is the mass? Where is the space?
        "質量と体積を分けて考えましょう。質量はどこにありますか。空間はどこですか。",
      ],
      // EN: <p>The nucleus contains protons (relative charge +1) and neutrons (charge 0), so it is positively charged. Protons and neutrons each have a relative mass of 1 and the mass of an electron is negligible, so nearly all the mass is in the nucleus. It is very small and dense.</p>
      solution: "<p>原子核には陽子（相対電荷 +1）と中性子（電荷 0）が入っているので、原子核は正の電荷をもちます。陽子と中性子の相対質量はどちらも 1 で、電子の質量は無視できるほど小さいので、質量のほとんどは原子核にあります。原子核はとても小さく、密度が高い部分です。</p>",
      misconception: {
        // EN (option B): Neutrons are neutral, but the nucleus also contains protons, so the nucleus as a whole is positive. Only the whole atom is neutral.
        "1": "中性子は電気的に中性ですが、原子核には陽子も入っています。そのため原子核全体は正の電荷をもちます。中性なのは原子全体だけです。",
        // EN (option C): The charge is right, but the nucleus is tiny. Most of the volume of an atom is the space occupied by the electrons.
        "2": "電荷は合っていますが、原子核はとても小さいものです。原子の体積のほとんどは、電子がある空間です。",
        // EN (option D): Electrons are not in the nucleus. They occupy the space outside it, and the nucleus is positive.
        "3": "電子は原子核の中にはありません。原子核の外側の空間にあります。原子核は正の電荷をもちます。",
      },
    },

    // ── s1-2-q002 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q002": {
      // EN: <p>Which row gives the relative mass and relative charge of a <strong>neutron</strong>?</p>
      stem: "<p><strong>中性子</strong>の相対質量と相対電荷を正しく示しているのはどれですか。</p>",
      options: [
        // EN: Relative mass 1, relative charge +1
        "相対質量 1、相対電荷 +1",
        // EN: Relative mass 1, relative charge 0
        "相対質量 1、相対電荷 0",
        // EN: Relative mass negligible, relative charge 0
        "相対質量 無視できるほど小さい、相対電荷 0",
        // EN: Relative mass negligible, relative charge −1
        "相対質量 無視できるほど小さい、相対電荷 −1",
      ],
      hints: [
        // EN: The name is a clue to the charge.
        "名前が電荷のヒントになります。",
        // EN: A neutron is a nucleon, like a proton. Their masses are almost the same.
        "中性子は、陽子と同じ核子です。質量はほとんど同じです。",
      ],
      // EN: <p>A neutron has a relative mass of 1 (the same as a proton) and a relative charge of 0. The proton is mass 1, charge +1. The electron has negligible mass and charge −1.</p>
      solution: "<p>中性子の相対質量は 1（陽子と同じ）で、相対電荷は 0 です。陽子は質量 1、電荷 +1 です。電子は質量が無視できるほど小さく、電荷は −1 です。</p>",
      misconception: {
        // EN (option A): This row describes a proton. A neutron has the same relative mass but no charge.
        "0": "これは陽子の説明です。中性子は相対質量が同じですが、電荷はありません。",
        // EN (option C): A neutron has no charge, but its mass is not negligible. It has about the same mass as a proton.
        "2": "中性子に電荷はありませんが、質量は無視できません。陽子とほぼ同じ質量をもちます。",
        // EN (option D): This row describes an electron.
        "3": "これは電子の説明です。",
      },
    },

    // ── s1-2-q003 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q003": {
      // EN: <p>How many neutrons are in an atom of <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>31</span><span>15</span></span><span>P</span></span>?</p>
      stem: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>31</span><span>15</span></span><span>P</span></span> の原子 1 個には、中性子が何個ありますか。</p>",
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
        "上の数は陽子の数 + 中性子の数です。下の数は陽子の数です。",
      ],
      // EN: <div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 31 − 15 = 16</div>
      solution: "<div class=\"worked__math\">中性子の数 = <i>A</i> − <i>Z</i> = 31 − 15 = 16</div>",
      misconception: {
        // EN (option A): 15 is the atomic number: the number of protons (and of electrons in the neutral atom).
        "0": "15 は原子番号です。陽子の数（中性の原子では電子の数でもあります）を表します。",
        // EN (option C): 31 is the mass number. It counts protons and neutrons together.
        "2": "31 は質量数です。陽子と中性子を合わせた数です。",
        // EN (option D): You added the two numbers. The mass number already includes the protons, so subtract instead.
        "3": "2 つの数を足してしまっています。質量数にはすでに陽子の数が入っているので、足すのではなく引きます。",
      },
    },

    // ── s1-2-q004 · numeric · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q004": {
      // EN: <p>How many electrons are in the ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>?</p>
      stem: "<p>イオン <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span> には、電子が何個ありますか。</p>",
      hints: [
        // EN: A neutral calcium atom has the same number of electrons as protons.
        "中性のカルシウム原子では、電子の数は陽子の数と同じです。",
        // EN: A 2+ ion has lost two electrons.
        "2+ のイオンは、電子を 2 個失っています。",
      ],
      // EN: <div class="worked__math">electrons in a Ca atom = <i>Z</i> = 20</div><div class="worked__math">electrons in Ca<sup>2+</sup> = 20 − 2 = 18</div><p>If you got 22, you added the charge. A positive ion has <em>lost</em> electrons.</p>
      solution: "<div class=\"worked__math\">Ca 原子の電子の数 = <i>Z</i> = 20</div><div class=\"worked__math\">Ca<sup>2+</sup> の電子の数 = 20 − 2 = 18</div><p>22 になった人は、電荷を足してしまっています。陽イオンは電子を<em>失って</em>います。</p>",
      // EN: electrons
      unit: "個",
    },

    // ── s1-2-q005 · multi · foundation · SL · Structure 1.2.2 · 1 mark
    "s1-2-q005": {
      // EN: <p>Two atoms are isotopes of the same element. Which statements about them are correct? Select all that apply.</p>
      stem: "<p>2 つの原子が、同じ元素の同位体です。この 2 つについて正しい文はどれですか。当てはまるものをすべて選びなさい。</p>",
      options: [
        // EN: They have the same number of protons.
        "陽子の数が同じである。",
        // EN: They have different numbers of neutrons.
        "中性子の数が違う。",
        // EN: As neutral atoms, they have different numbers of electrons.
        "中性の原子どうしで、電子の数が違う。",
        // EN: They have the same mass number.
        "質量数が同じである。",
        // EN: They have the same chemical properties.
        "化学的性質が同じである。",
      ],
      hints: [
        // EN: Start from the definition: same element, different numbers of neutrons.
        "定義から考えましょう。同じ元素で、中性子の数が違う原子です。",
        // EN: What fixes which element an atom is? What decides how it reacts?
        "原子がどの元素かは、何で決まりますか。原子の反応のしかたは、何で決まりますか。",
      ],
      // EN: <p>Isotopes are atoms of the same element (same number of protons) with different numbers of neutrons, so their mass numbers differ. As neutral atoms they have the same number of electrons, arranged in the same way, so their chemical properties are the same.</p>
      solution: "<p>同位体は、同じ元素（陽子の数が同じ）の原子で、中性子の数が違うものです。そのため質量数が違います。中性の原子どうしでは電子の数が同じで、配置も同じなので、化学的性質は同じです。</p>",
      misconception: {
        // EN (option C): Neutral atoms of the same element have the same number of protons, so they have the same number of electrons. A different number of electrons would make an ion, not an isotope.
        "2": "同じ元素の中性の原子は陽子の数が同じなので、電子の数も同じです。電子の数が違えば、同位体ではなくイオンになります。",
        // EN (option D): Mass number = protons + neutrons. The neutrons differ, so the mass numbers differ.
        "3": "質量数 = 陽子の数 + 中性子の数です。中性子の数が違うので、質量数も違います。",
      },
    },

    // ── s1-2-q006 · numeric · foundation · SL · Structure 1.2.2 · 2 marks
    "s1-2-q006": {
      // EN: <p>A sample of rubidium contains 72.0% <span class="nowrap"><sup>85</sup>Rb</span> and 28.0% <span class="nowrap"><sup>87</sup>Rb</span>. Calculate the relative atomic mass of rubidium in this sample, to two decimal places.</p>
      stem: "<p>あるルビジウムの試料は、<span class=\"nowrap\"><sup>85</sup>Rb</span> を 72.0%、<span class=\"nowrap\"><sup>87</sup>Rb</span> を 28.0% 含んでいます。この試料のルビジウムの相対原子質量を、小数第 2 位まで計算しなさい (calculate)。</p>",
      hints: [
        // EN: Multiply each mass number by its percentage abundance.
        "それぞれの質量数に、存在比（%）をかけます。",
        // EN: <span class="mono">(85 × 72.0 + 87 × 28.0) ÷ 100</span>
        "<span class=\"mono\">(85 × 72.0 + 87 × 28.0) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">85 × 72.0 = 6120</div><div class="worked__math">87 × 28.0 = 2436</div><div class="worked__math"><i>A</i><sub>r</sub> = (6120 + 2436) / 100 = 8556 / 100 = <b>85.56</b></div><p>No units. Check: the answer is between 85 and 87, and nearer 85, the more abundant isotope.</p>
      solution: "<div class=\"worked__math\">85 × 72.0 = 6120</div><div class=\"worked__math\">87 × 28.0 = 2436</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (6120 + 2436) / 100 = 8556 / 100 = <b>85.56</b></div><p>単位はありません。確認：答えは 85 と 87 の間にあり、存在比の大きい 85 のほうに近くなっています。</p>",
    },

    // ── s1-2-q007 · order · foundation · SL · Structure 1.2.2 · 2 marks
    "s1-2-q007": {
      // EN: <p>Put these steps in order to calculate a relative atomic mass from the mass numbers and percentage abundances of the isotopes.</p>
      stem: "<p>同位体の質量数と存在比（%）から相対原子質量を計算します。次の手順を正しい順に並べなさい。</p>",
      options: [
        // EN: Check that the percentage abundances add up to 100.
        "存在比（%）の合計が 100 になることを確かめる。",
        // EN: Multiply the mass of each isotope by its percentage abundance.
        "それぞれの同位体の質量に、存在比（%）をかける。",
        // EN: Add the results together.
        "その結果を足し合わせる。",
        // EN: Divide the total by 100.
        "合計を 100 で割る。",
        // EN: Round the answer, usually to two decimal places, and give no units.
        "答えを四捨五入する。ふつうは小数第 2 位までで、単位は書かない。",
      ],
      hints: [
        // EN: Rounding always comes last.
        "四捨五入は、いつも最後です。",
      ],
      // EN: <p>Weight each isotope first (mass × abundance), then add, then divide by 100 because the abundances are percentages. Round only at the end.</p>
      solution: "<p>まずそれぞれの同位体に重みをつけ（質量 × 存在比）、次に足し、最後に 100 で割ります。存在比が百分率だからです。四捨五入は最後にだけします。</p>",
    },

    // ── s1-2-q008 · multi · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q008": {
      // EN: <p>Which statements about the fluoride ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>19</span><span>9</span></span><span>F</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span> are correct? Select all that apply.</p>
      stem: "<p>フッ化物イオン <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>19</span><span>9</span></span><span>F</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span> について正しい文はどれですか。当てはまるものをすべて選びなさい。</p>",
      options: [
        // EN: It has 9 protons.
        "陽子が 9 個ある。",
        // EN: It has 19 neutrons.
        "中性子が 19 個ある。",
        // EN: It has 10 neutrons.
        "中性子が 10 個ある。",
        // EN: It has 10 electrons.
        "電子が 10 個ある。",
        // EN: It has 8 electrons.
        "電子が 8 個ある。",
      ],
      hints: [
        // EN: Deal with the nucleus first: protons = <i>Z</i>, neutrons = <i>A</i> − <i>Z</i>.
        "まず原子核から考えます。陽子の数 = <i>Z</i>、中性子の数 = <i>A</i> − <i>Z</i> です。",
        // EN: A 1− charge means one more electron than protons.
        "電荷が 1− なので、電子は陽子より 1 個多くなります。",
      ],
      // EN: <div class="worked__math">protons = <i>Z</i> = 9</div><div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 19 − 9 = 10</div><div class="worked__math">electrons = 9 + 1 = 10</div>
      solution: "<div class=\"worked__math\">陽子の数 = <i>Z</i> = 9</div><div class=\"worked__math\">中性子の数 = <i>A</i> − <i>Z</i> = 19 − 9 = 10</div><div class=\"worked__math\">電子の数 = 9 + 1 = 10</div>",
      misconception: {
        // EN (option B): 19 is the mass number: protons and neutrons together. Neutrons = 19 − 9.
        "1": "19 は質量数で、陽子と中性子を合わせた数です。中性子の数 = 19 − 9 です。",
        // EN (option E): You subtracted the charge. A negative ion has gained an electron, so it has one more than the 9 protons.
        "4": "電荷を引いてしまっています。陰イオンは電子を 1 個受け取っているので、電子は陽子の 9 個より 1 個多くなります。",
      },
    },

    // ── s1-2-q009 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q009": {
      // EN: <p>The table shows the particles in four species. The letters are not chemical symbols.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Species</th><th scope="col" class="num">Protons</th><th scope="col" class="num">Neutrons</th><th scope="col" class="num">Electrons</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">17</td><td class="num">18</td><td class="num">17</td></tr><tr><th scope="row">X</th><td class="num">17</td><td class="num">20</td><td class="num">18</td></tr><tr><th scope="row">Y</th><td class="num">18</td><td class="num">20</td><td class="num">18</td></tr><tr><th scope="row">Z</th><td class="num">19</td><td class="num">20</td><td class="num">18</td></tr></tbody></table></div><p>Which two species are isotopes of the same element?</p>
      stem: "<p>次の表は、4 種類の粒子 (species) に含まれる粒子の数を示しています。表の文字は元素記号ではありません。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">粒子</th><th scope=\"col\" class=\"num\">陽子</th><th scope=\"col\" class=\"num\">中性子</th><th scope=\"col\" class=\"num\">電子</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">17</td><td class=\"num\">18</td><td class=\"num\">17</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">17</td><td class=\"num\">20</td><td class=\"num\">18</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">18</td><td class=\"num\">20</td><td class=\"num\">18</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">19</td><td class=\"num\">20</td><td class=\"num\">18</td></tr></tbody></table></div><p>同じ元素の同位体であるのは、どの 2 つですか。</p>",
      options: [
        // EN: W and X
        "W と X",
        // EN: X and Y
        "X と Y",
        // EN: X and Z
        "X と Z",
        // EN: Y and Z
        "Y と Z",
      ],
      hints: [
        // EN: Which column decides what element a species is?
        "粒子がどの元素かを決めるのは、どの列ですか。",
        // EN: Isotopes: same protons, different neutrons. The electron column does not matter here.
        "同位体は、陽子の数が同じで、中性子の数が違います。ここでは電子の列は関係ありません。",
      ],
      // EN: <p>W and X both have 17 protons, so they are the same element. They have 18 and 20 neutrons, so they are isotopes. X has one extra electron, so it is a 1− ion, but it is still an isotope of the same element as W.</p>
      solution: "<p>W と X はどちらも陽子が 17 個なので、同じ元素です。中性子は 18 個と 20 個なので、同位体です。X は電子が 1 個多いので 1− のイオンですが、それでも W と同じ元素の同位体です。</p>",
      misconception: {
        // EN (option B): X and Y have the same number of neutrons and electrons, but different numbers of protons. They are different elements.
        "1": "X と Y は中性子の数と電子の数が同じですが、陽子の数が違います。別の元素です。",
        // EN (option C): X and Z both have 18 electrons and 20 neutrons, but 17 and 19 protons. Different protons means different elements.
        "2": "X と Z はどちらも電子が 18 個、中性子が 20 個ですが、陽子は 17 個と 19 個です。陽子の数が違えば、別の元素です。",
        // EN (option D): Y and Z have the same number of neutrons. Isotopes need the same number of protons and <em>different</em> numbers of neutrons.
        "3": "Y と Z は中性子の数が同じです。同位体は、陽子の数が同じで、中性子の数が<em>違う</em>ものです。",
      },
    },

    // ── s1-2-q010 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q010": {
      // EN: <p>Which row is correct for the ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>34</span><span>16</span></span><span>S</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span>?</p>
      stem: "<p>イオン <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>34</span><span>16</span></span><span>S</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2−</span></span> について正しいのはどれですか。</p>",
      options: [
        // EN: 16 protons, 18 neutrons, 14 electrons
        "陽子 16 個、中性子 18 個、電子 14 個",
        // EN: 16 protons, 18 neutrons, 18 electrons
        "陽子 16 個、中性子 18 個、電子 18 個",
        // EN: 16 protons, 34 neutrons, 18 electrons
        "陽子 16 個、中性子 34 個、電子 18 個",
        // EN: 18 protons, 16 neutrons, 16 electrons
        "陽子 18 個、中性子 16 個、電子 16 個",
      ],
      hints: [
        // EN: Protons come from the bottom number, whatever the charge.
        "電荷が何であっても、陽子の数は下の数でわかります。",
        // EN: Negative ions have more electrons than protons.
        "陰イオンでは、電子が陽子より多くなります。",
      ],
      // EN: <div class="worked__math">protons = <i>Z</i> = 16</div><div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 34 − 16 = 18</div><div class="worked__math">electrons = 16 + 2 = 18</div>
      solution: "<div class=\"worked__math\">陽子の数 = <i>Z</i> = 16</div><div class=\"worked__math\">中性子の数 = <i>A</i> − <i>Z</i> = 34 − 16 = 18</div><div class=\"worked__math\">電子の数 = 16 + 2 = 18</div>",
      misconception: {
        // EN (option A): You subtracted the charge. A 2− ion has gained two electrons: 16 + 2.
        "0": "電荷を引いてしまっています。2− のイオンは電子を 2 個受け取っているので、16 + 2 です。",
        // EN (option C): 34 is the mass number, not the number of neutrons. Neutrons = 34 − 16.
        "2": "34 は質量数で、中性子の数ではありません。中性子の数 = 34 − 16 です。",
        // EN (option D): The charge does not change the number of protons. Sulfur always has 16 protons; the ion has two extra electrons.
        "3": "電荷があっても陽子の数は変わりません。硫黄の陽子はいつも 16 個です。このイオンは電子が 2 個多いのです。",
      },
    },

    // ── s1-2-q011 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q011": {
      // EN: <p>Separate beams of protons, neutrons and electrons, all travelling at the same speed, pass between a positively charged plate and a negatively charged plate. Which statement is correct?</p>
      stem: "<p>陽子・中性子・電子の別々のビームが、どれも同じ速さで、正に帯電した電極板と負に帯電した電極板の間を通ります。正しい文はどれですか。</p>",
      options: [
        // EN: Protons and electrons are deflected by the same amount, in opposite directions.
        "陽子と電子は、反対向きに同じだけ曲げられる。",
        // EN: Electrons are deflected towards the positive plate, by more than the protons are deflected.
        "電子は正の電極板のほうへ曲げられ、曲がり方は陽子より大きい。",
        // EN: Neutrons are deflected towards the negative plate, by less than the protons.
        "中性子は負の電極板のほうへ曲げられ、曲がり方は陽子より小さい。",
        // EN: Protons are deflected towards the positive plate, by less than the electrons.
        "陽子は正の電極板のほうへ曲げられ、曲がり方は電子より小さい。",
      ],
      hints: [
        // EN: Opposite charges attract. Which plate attracts each particle?
        "反対の電荷どうしは引き合います。それぞれの粒子は、どちらの電極板に引かれますか。",
        // EN: The force is the same size on a proton and an electron. Which one is easier to push off course?
        "陽子と電子にはたらく力の大きさは同じです。進む向きを変えやすいのはどちらですか。",
      ],
      // EN: <p>Electrons (relative charge −1) are attracted to the positive plate. Protons (+1) are attracted to the negative plate. The charges have the same size, but the mass of an electron is negligible compared with a proton, so the electron beam bends much more. Neutrons (charge 0) are not deflected.</p>
      solution: "<p>電子（相対電荷 −1）は正の電極板に引かれます。陽子（+1）は負の電極板に引かれます。電荷の大きさは同じですが、電子の質量は陽子とくらべて無視できるほど小さいので、電子のビームのほうがずっと大きく曲がります。中性子（電荷 0）は曲げられません。</p>",
      misconception: {
        // EN (option A): The directions are opposite and the charges are the same size, but an electron has a far smaller mass than a proton, so it is deflected much more.
        "0": "向きが反対で、電荷の大きさが同じなのは合っています。しかし電子の質量は陽子よりはるかに小さいので、電子のほうがずっと大きく曲げられます。",
        // EN (option C): Neutrons have no charge, so the plates have no effect on them. They travel straight on.
        "2": "中性子は電荷をもたないので、電極板の影響を受けません。まっすぐ進みます。",
        // EN (option D): Protons are positive, so they are attracted to the negative plate, not the positive one.
        "3": "陽子は正の電荷をもつので、正の電極板ではなく、負の電極板に引かれます。",
      },
    },

    // ── s1-2-q012 · short · exam · SL · Structure 1.2.1 · 2 marks
    "s1-2-q012": {
      // EN: <p>A species contains 26 protons, 30 neutrons and 23 electrons. Deduce its nuclear symbol, including the charge. Use the periodic table.</p>
      stem: "<p>ある粒子は、陽子を 26 個、中性子を 30 個、電子を 23 個もっています。電荷も含めて、この粒子の原子の記号 (nuclear symbol) を導きなさい (deduce)。周期表を使いなさい。</p>",
      hints: [
        // EN: The number of protons tells you the element.
        "陽子の数から、元素がわかります。",
        // EN: Mass number = protons + neutrons. Charge = protons − electrons.
        "質量数 = 陽子の数 + 中性子の数。電荷 = 陽子の数 − 電子の数。",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>56</span><span>26</span></span><span>Fe</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">3+</span></span></p><p>Atomic number = 26, so the element is iron. Mass number = 26 + 30 = 56. Charge = 26 − 23 = +3, written 3+.</p>
      answer: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>56</span><span>26</span></span><span>Fe</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">3+</span></span></p><p>原子番号 = 26 なので、元素は鉄です。質量数 = 26 + 30 = 56。電荷 = 26 − 23 = +3 で、3+ と書きます。</p>",
      markscheme: [
        // EN: Mass number 56 (top left) and atomic number 26 (bottom left) with the symbol Fe.
        "質量数 56（左上）と原子番号 26（左下）を、元素記号 Fe につけて書いている。",
        // EN: Charge 3+ shown (accept +3).
        "電荷 3+ を書いている（+3 も可）。",
      ],
    },

    // ── s1-2-q013 · numeric · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q013": {
      // EN: <p>Magnesium extracted from a meteorite contains 77.5% <span class="nowrap"><sup>24</sup>Mg</span>, 10.3% <span class="nowrap"><sup>25</sup>Mg</span> and 12.2% <span class="nowrap"><sup>26</sup>Mg</span>. Calculate the relative atomic mass of magnesium in this sample, to two decimal places.</p>
      stem: "<p>ある隕石から取り出したマグネシウムは、<span class=\"nowrap\"><sup>24</sup>Mg</span> を 77.5%、<span class=\"nowrap\"><sup>25</sup>Mg</span> を 10.3%、<span class=\"nowrap\"><sup>26</sup>Mg</span> を 12.2% 含んでいます。この試料のマグネシウムの相対原子質量を、小数第 2 位まで計算しなさい (calculate)。</p>",
      hints: [
        // EN: Three isotopes means three products to add.
        "同位体が 3 つあるので、足す積も 3 つです。",
        // EN: <span class="mono">(24 × 77.5 + 25 × 10.3 + 26 × 12.2) ÷ 100</span>
        "<span class=\"mono\">(24 × 77.5 + 25 × 10.3 + 26 × 12.2) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">24 × 77.5 = 1860.0</div><div class="worked__math">25 × 10.3 = 257.5</div><div class="worked__math">26 × 12.2 = 317.2</div><div class="worked__math"><i>A</i><sub>r</sub> = (1860.0 + 257.5 + 317.2) / 100 = 2434.7 / 100 = 24.347</div><div class="worked__math"><i>A</i><sub>r</sub> = <b>24.35</b> (2 d.p.)</div><p>The data booklet value for magnesium is 24.31. That is for magnesium on Earth, and it does not score here. The question asks for the value from this sample.</p>
      solution: "<div class=\"worked__math\">24 × 77.5 = 1860.0</div><div class=\"worked__math\">25 × 10.3 = 257.5</div><div class=\"worked__math\">26 × 12.2 = 317.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (1860.0 + 257.5 + 317.2) / 100 = 2434.7 / 100 = 24.347</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = <b>24.35</b>（小数第 2 位まで）</div><p>データブックレットのマグネシウムの値は 24.31 です。これは地球上のマグネシウムの値なので、ここでは点になりません。問われているのは、この試料から求めた値です。</p>",
    },

    // ── s1-2-q014 · numeric · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q014": {
      // EN: <p>Gallium has two isotopes. <span class="nowrap"><sup>69</sup>Ga</span> has a relative mass of 68.93 and <span class="nowrap"><sup>71</sup>Ga</span> has a relative mass of 70.92. The relative atomic mass of gallium is 69.72. Calculate the percentage abundance of <span class="nowrap"><sup>69</sup>Ga</span>.</p>
      stem: "<p>ガリウムには 2 つの同位体があります。<span class=\"nowrap\"><sup>69</sup>Ga</span> の相対質量は 68.93、<span class=\"nowrap\"><sup>71</sup>Ga</span> の相対質量は 70.92 です。ガリウムの相対原子質量は 69.72 です。<span class=\"nowrap\"><sup>69</sup>Ga</span> の存在比（%）を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Let the percentage of <sup>69</sup>Ga be <i>x</i>. Then <sup>71</sup>Ga is 100 − <i>x</i>.
        "<sup>69</sup>Ga の存在比（%）を <i>x</i> とおきます。すると <sup>71</sup>Ga は 100 − <i>x</i> です。",
        // EN: <span class="mono">68.93x + 70.92(100 − x) = 6972</span>
        "<span class=\"mono\">68.93x + 70.92(100 − x) = 6972</span>",
      ],
      // EN: <div class="worked__math">68.93<i>x</i> + 70.92(100 − <i>x</i>) = 69.72 × 100 = 6972</div><div class="worked__math">68.93<i>x</i> + 7092 − 70.92<i>x</i> = 6972</div><div class="worked__math">7092 − 1.99<i>x</i> = 6972</div><div class="worked__math">1.99<i>x</i> = 7092 − 6972 = 120</div><div class="worked__math"><i>x</i> = 120 / 1.99 = 60.30… = <b>60.3%</b></div><p>Check: 69.72 is closer to 68.93 than to 70.92, so <sup>69</sup>Ga should be the more abundant isotope. It is.</p>
      solution: "<div class=\"worked__math\">68.93<i>x</i> + 70.92(100 − <i>x</i>) = 69.72 × 100 = 6972</div><div class=\"worked__math\">68.93<i>x</i> + 7092 − 70.92<i>x</i> = 6972</div><div class=\"worked__math\">7092 − 1.99<i>x</i> = 6972</div><div class=\"worked__math\">1.99<i>x</i> = 7092 − 6972 = 120</div><div class=\"worked__math\"><i>x</i> = 120 / 1.99 = 60.30… = <b>60.3%</b></div><p>確認：69.72 は 70.92 より 68.93 に近いので、<sup>69</sup>Ga のほうが存在比は大きいはずです。実際にそうなっています。</p>",
    },

    // ── s1-2-q015 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q015": {
      // EN: <p>Two samples of hydrogen gas are compared under the same conditions. One contains only <span class="nowrap"><sup>1</sup>H</span><sub>2</sub> molecules and the other only <span class="nowrap"><sup>2</sup>H</span><sub>2</sub> molecules. Which property is the <strong>same</strong> for both samples?</p>
      stem: "<p>水素の気体の試料を 2 つ、同じ条件で比べます。一方は <span class=\"nowrap\"><sup>1</sup>H</span><sub>2</sub> 分子だけ、もう一方は <span class=\"nowrap\"><sup>2</sup>H</span><sub>2</sub> 分子だけでできています。2 つの試料で<strong>同じ</strong>になる性質はどれですか。</p>",
      options: [
        // EN: The density of the gas
        "気体の密度",
        // EN: The rate at which the gas diffuses
        "気体が拡散する速さ",
        // EN: The boiling point
        "沸点",
        // EN: The way the gas reacts with oxygen
        "気体と酸素との反応のしかた",
      ],
      hints: [
        // EN: Sort the options into physical properties and chemical properties.
        "選択肢を、物理的性質と化学的性質に分けてみましょう。",
        // EN: Isotopes have the same number of electrons.
        "同位体どうしは、電子の数が同じです。",
      ],
      // EN: <p>Isotopes have the same number of electrons and the same electron arrangement, so their chemical properties are the same: both gases react with oxygen in the same way to form water. Density, rate of diffusion and boiling point are physical properties that depend on mass, so they differ.</p>
      solution: "<p>同位体は電子の数も電子の配置も同じなので、化学的性質は同じです。どちらの気体も同じように酸素と反応して、水ができます。密度、拡散する速さ、沸点は質量で決まる物理的性質なので、違いがあります。</p>",
      misconception: {
        // EN (option A): Density depends on mass. Molecules of <sup>2</sup>H<sub>2</sub> have twice the mass of <sup>1</sup>H<sub>2</sub> molecules, so the gas is denser.
        "0": "密度は質量で決まります。<sup>2</sup>H<sub>2</sub> 分子の質量は <sup>1</sup>H<sub>2</sub> 分子の 2 倍なので、気体の密度も大きくなります。",
        // EN (option B): Rate of diffusion depends on mass. The heavier molecules move more slowly at the same temperature.
        "1": "拡散する速さは質量で決まります。同じ温度では、重い分子のほうがゆっくり動きます。",
        // EN (option C): Boiling point is a physical property and differs slightly between isotopes because the masses differ.
        "2": "沸点は物理的性質です。質量が違うので、同位体によって少し違います。",
      },
    },

    // ── s1-2-q016 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q016": {
      // EN: <p>An element has two isotopes. 75% of its atoms have a mass number of 35 and 25% have a mass number of 37. What is the relative atomic mass of the element?</p>
      stem: "<p>ある元素には 2 つの同位体があります。原子の 75% は質量数が 35 で、25% は質量数が 37 です。この元素の相対原子質量はいくつですか。</p>",
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
        "答えは、存在比の大きい同位体のほうに近いはずです。",
        // EN: <span class="mono">(35 × 75 + 37 × 25) ÷ 100</span>, or think of four atoms: three of 35 and one of 37.
        "<span class=\"mono\">(35 × 75 + 37 × 25) ÷ 100</span> を計算します。または原子 4 個で考えます。3 個が 35 で、1 個が 37 です。",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>r</sub> = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <b>35.5</b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>r</sub> = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <b>35.5</b></div>",
      misconception: {
        // EN (option A): 35.0 is the mass of the more common isotope. The 25% of heavier atoms pull the average up.
        "0": "35.0 は、多いほうの同位体の質量です。25% ある重い原子の分だけ、平均は大きくなります。",
        // EN (option C): 36.0 is the simple average of 35 and 37. That would only be right if the two isotopes were equally abundant.
        "2": "36.0 は 35 と 37 の単純な平均です。これが正しいのは、2 つの同位体の存在比が同じときだけです。",
        // EN (option D): You swapped the abundances. 36.5 would be right for 25% of 35 and 75% of 37.
        "3": "存在比を逆にしています。36.5 になるのは、35 が 25%、37 が 75% のときです。",
      },
    },

    // ── s1-2-q017 · short · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q017": {
      // EN: <p>Explain why two isotopes of the same element have the same chemical properties but different densities.</p>
      stem: "<p>同じ元素の 2 つの同位体は、化学的性質が同じで、密度が違います。その理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: One part of the answer is about electrons. The other is about mass.
        "答えの半分は電子について、もう半分は質量についてです。",
      ],
      // EN: <p>Isotopes have the same number of electrons (the same electron configuration), and chemical properties depend on the electrons, so the isotopes react in the same way. They have different numbers of neutrons, so their atoms have different masses, and density depends on mass.</p>
      answer: "<p>同位体は電子の数が同じ（電子配置が同じ）です。化学的性質は電子で決まるので、同位体は同じように反応します。一方、中性子の数が違うので、原子の質量が違います。密度は質量で決まります。</p>",
      markscheme: [
        // EN: Same number of electrons / same electron configuration (so same chemical properties).
        "電子の数が同じ / 電子配置が同じ（だから化学的性質が同じ）。",
        // EN: Different numbers of neutrons, so different mass (so different density).
        "中性子の数が違うので、質量が違う（だから密度が違う）。",
      ],
    },

    // ── s1-2-q018 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q018": {
      // EN: <p>Which species contains more electrons than neutrons?</p>
      stem: "<p>電子の数が中性子の数より多い粒子はどれですか。</p>",
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
        "それぞれについて、中性子の数（<i>A</i> − <i>Z</i>）と電子の数を求めましょう。",
        // EN: Remember to adjust the electrons for the charge.
        "電子の数は、電荷に合わせて直すのを忘れないようにしましょう。",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>16</span><span>8</span></span><span>O</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span> has 16 − 8 = 8 neutrons and 8 + 2 = 10 electrons. It is the only species with more electrons than neutrons.</p>
      solution: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>16</span><span>8</span></span><span>O</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2−</span></span> は、中性子が 16 − 8 = 8 個、電子が 8 + 2 = 10 個です。電子の数が中性子の数より多い粒子は、これだけです。</p>",
      misconception: {
        // EN (option A): This atom has 1 electron and 2 − 1 = 1 neutron. They are equal.
        "0": "この原子は電子が 1 個、中性子が 2 − 1 = 1 個です。数は同じです。",
        // EN (option B): This atom has 4 electrons and 9 − 4 = 5 neutrons.
        "1": "この原子は電子が 4 個、中性子が 9 − 4 = 5 個です。",
        // EN (option D): This ion has 11 − 1 = 10 electrons and 23 − 11 = 12 neutrons.
        "3": "このイオンは電子が 11 − 1 = 10 個、中性子が 23 − 11 = 12 個です。",
      },
    },

    // ── s1-2-q019 · numeric · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q019": {
      // EN: <p>An element has three isotopes with mass numbers 24, 25 and 26. In one sample, 79.0% of the atoms have a mass number of 24, and the relative atomic mass of the sample is 24.32. Calculate the percentage abundance of the isotope with mass number 25. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>ある元素には、質量数 24、25、26 の 3 つの同位体があります。ある試料では、原子の 79.0% が質量数 24 で、試料の相対原子質量は 24.32 です。質量数 25 の同位体の存在比（%）を計算しなさい (calculate)。同位体の質量には質量数を使いなさい。</p>",
      hints: [
        // EN: The other two isotopes share what is left: 100 − 79.0 = 21.0%.
        "残りの 2 つの同位体で、残りを分け合います。100 − 79.0 = 21.0% です。",
        // EN: Let the percentage with mass number 25 be <i>x</i>. Then the percentage with mass number 26 is 21.0 − <i>x</i>.
        "質量数 25 の存在比（%）を <i>x</i> とおきます。すると質量数 26 の存在比（%）は 21.0 − <i>x</i> です。",
        // EN: <span class="mono">24 × 79.0 + 25x + 26(21.0 − x) = 2432</span>
        "<span class=\"mono\">24 × 79.0 + 25x + 26(21.0 − x) = 2432</span>",
      ],
      // EN: <div class="worked__math">% of mass 25 = <i>x</i>, so % of mass 26 = 100 − 79.0 − <i>x</i> = 21.0 − <i>x</i></div><div class="worked__math">24 × 79.0 + 25<i>x</i> + 26(21.0 − <i>x</i>) = 24.32 × 100 = 2432</div><div class="worked__math">1896 + 25<i>x</i> + 546 − 26<i>x</i> = 2432</div><div class="worked__math">2442 − <i>x</i> = 2432</div><div class="worked__math"><i>x</i> = <b>10.0%</b></div><p>Check: (24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = 2432 / 100 = 24.32.</p>
      solution: "<div class=\"worked__math\">質量 25 の % = <i>x</i>、したがって質量 26 の % = 100 − 79.0 − <i>x</i> = 21.0 − <i>x</i></div><div class=\"worked__math\">24 × 79.0 + 25<i>x</i> + 26(21.0 − <i>x</i>) = 24.32 × 100 = 2432</div><div class=\"worked__math\">1896 + 25<i>x</i> + 546 − 26<i>x</i> = 2432</div><div class=\"worked__math\">2442 − <i>x</i> = 2432</div><div class=\"worked__math\"><i>x</i> = <b>10.0%</b></div><p>確認：(24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = 2432 / 100 = 24.32。</p>",
    },

    // ── s1-2-q020 · mcq · challenge · SL · Structure 1.2.1 · 1 mark
    "s1-2-q020": {
      // EN: <p>Which pair of species has the same number of neutrons <strong>and</strong> the same number of electrons?</p>
      stem: "<p>中性子の数が同じで、<strong>しかも</strong>電子の数も同じ粒子の組はどれですか。</p>",
      options: [
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>18</span></span><span>Ar</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>18</span></span><span>Ar</span></span> と <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span></span> と <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">+</span></span> と <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>35</span><span>17</span></span><span>Cl</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>37</span><span>17</span></span><span>Cl</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>35</span><span>17</span></span><span>Cl</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span> と <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>37</span><span>17</span></span><span>Cl</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span>",
      ],
      hints: [
        // EN: Make a small table: neutrons and electrons for each species.
        "小さな表を作りましょう。それぞれの粒子の中性子の数と電子の数を書きます。",
        // EN: Same mass number does not mean same number of neutrons.
        "質量数が同じでも、中性子の数が同じとはかぎりません。",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span>: neutrons = 39 − 19 = 20, electrons = 19 − 1 = 18.</p><p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>: neutrons = 40 − 20 = 20, electrons = 20 − 2 = 18.</p><p>Both counts match, so this is the pair.</p>
      solution: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">+</span></span>：中性子の数 = 39 − 19 = 20、電子の数 = 19 − 1 = 18。</p><p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>：中性子の数 = 40 − 20 = 20、電子の数 = 20 − 2 = 18。</p><p>どちらの数も一致するので、この組が答えです。</p>",
      misconception: {
        // EN (option A): Both have 18 electrons and the same mass number, but the neutrons differ: 40 − 18 = 22 and 40 − 20 = 20.
        "0": "どちらも電子は 18 個で、質量数も同じです。しかし中性子の数は 40 − 18 = 22 と 40 − 20 = 20 で、違います。",
        // EN (option B): Both have 20 neutrons, but as neutral atoms they have 19 and 20 electrons.
        "1": "どちらも中性子は 20 個です。しかし中性の原子なので、電子は 19 個と 20 個です。",
        // EN (option D): Both have 18 electrons, but they are isotopes, so the neutrons differ: 18 and 20.
        "3": "どちらも電子は 18 個です。しかし同位体なので、中性子の数は 18 個と 20 個で違います。",
      },
    },

    // ── s1-2-q021 · short · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q021": {
      // EN: <p>“Heavy water” has the formula <span class="nowrap"><sup>2</sup>H</span><sub>2</sub>O. Ordinary water is almost entirely <span class="nowrap"><sup>1</sup>H</span><sub>2</sub>O. In both, the oxygen is <span class="nowrap"><sup>16</sup>O</span>.</p><p>Sodium reacts with ordinary water to form sodium hydroxide and hydrogen. Predict, with reasons, how heavy water compares with ordinary water in (a) its reaction with sodium and (b) its density.</p>
      stem: "<p>「重水」の化学式は <span class=\"nowrap\"><sup>2</sup>H</span><sub>2</sub>O です。ふつうの水は、ほとんどすべてが <span class=\"nowrap\"><sup>1</sup>H</span><sub>2</sub>O です。どちらも、酸素は <span class=\"nowrap\"><sup>16</sup>O</span> です。</p><p>ナトリウムはふつうの水と反応して、水酸化ナトリウムと水素ができます。重水をふつうの水と比べるとどうなるか、(a) ナトリウムとの反応と (b) 密度について、理由をつけて予測しなさい (predict)。</p>",
      hints: [
        // EN: Which of (a) and (b) is a chemical property, and which is a physical property?
        "(a) と (b) のうち、化学的性質はどちらで、物理的性質はどちらですか。",
        // EN: Compare the masses of the two molecules by adding up mass numbers.
        "質量数を足して、2 つの分子の質量を比べましょう。",
      ],
      // EN: <p>(a) Heavy water reacts with sodium in the same way, giving the same type of products, because <span class="nowrap"><sup>1</sup>H</span> and <span class="nowrap"><sup>2</sup>H</span> have the same number of electrons, so their chemical properties are the same.</p><p>(b) Heavy water is denser. Each <span class="nowrap"><sup>2</sup>H</span> atom has one more neutron than <span class="nowrap"><sup>1</sup>H</span>, so a molecule of heavy water has a greater mass (2 + 2 + 16 = 20, compared with 1 + 1 + 16 = 18).</p>
      answer: "<p>(a) 重水は、ナトリウムと同じように反応し、同じ種類の生成物ができます。<span class=\"nowrap\"><sup>1</sup>H</span> と <span class=\"nowrap\"><sup>2</sup>H</span> は電子の数が同じなので、化学的性質が同じだからです。</p><p>(b) 重水のほうが密度が大きくなります。<span class=\"nowrap\"><sup>2</sup>H</span> の原子は <span class=\"nowrap\"><sup>1</sup>H</span> より中性子が 1 個多いので、重水の分子のほうが質量が大きいからです（1 + 1 + 16 = 18 に対して、2 + 2 + 16 = 20）。</p>",
      markscheme: [
        // EN: Same reaction / same chemical behaviour with sodium, because the isotopes have the same number of electrons (same electron configuration).
        "ナトリウムと同じように反応する / 化学的なふるまいが同じ。同位体は電子の数が同じ（電子配置が同じ）だから。",
        // EN: Heavy water has the greater density.
        "重水のほうが密度が大きい。",
        // EN: Because its molecules have a greater mass (extra neutron in each hydrogen atom; 20 compared with 18).
        "重水の分子のほうが質量が大きいから（水素原子 1 個につき中性子が 1 個多い。18 に対して 20）。",
      ],
    },

    // ── s1-2-q022 · numeric · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q022": {
      // EN: <p>Natural boron contains 19.9% <span class="nowrap"><sup>10</sup>B</span> and 80.1% <span class="nowrap"><sup>11</sup>B</span>. An enriched sample is made by mixing natural boron with pure <span class="nowrap"><sup>10</sup>B</span>, so that for every 2 atoms of natural boron there is 1 added atom of <span class="nowrap"><sup>10</sup>B</span>. Calculate the relative atomic mass of boron in the enriched sample, to two decimal places. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>天然のホウ素は、<span class=\"nowrap\"><sup>10</sup>B</span> を 19.9%、<span class=\"nowrap\"><sup>11</sup>B</span> を 80.1% 含んでいます。天然のホウ素に純粋な <span class=\"nowrap\"><sup>10</sup>B</span> を混ぜて、濃縮した試料を作ります。天然のホウ素の原子 2 個につき、<span class=\"nowrap\"><sup>10</sup>B</span> の原子を 1 個加えます。この濃縮した試料のホウ素の相対原子質量を、小数第 2 位まで計算しなさい (calculate)。同位体の質量には質量数を使いなさい。</p>",
      hints: [
        // EN: Work with a convenient number of atoms: 200 atoms of natural boron and 100 added atoms of <sup>10</sup>B.
        "計算しやすい原子の数で考えましょう。天然のホウ素の原子 200 個と、加えた <sup>10</sup>B の原子 100 個です。",
        // EN: Of the 200 natural atoms, 19.9% are <sup>10</sup>B. Find the total number of <sup>10</sup>B atoms out of 300.
        "天然の 200 個のうち、19.9% が <sup>10</sup>B です。全部で 300 個のうち、<sup>10</sup>B の原子が何個あるかを求めます。",
        // EN: Then use the weighted mean with the new abundances.
        "そのあと、新しい存在比で加重平均を計算します。",
      ],
      // EN: <p>Take 200 atoms of natural boron and 100 atoms of added <span class="nowrap"><sup>10</sup>B</span>, 300 atoms in total.</p><div class="worked__math"><sup>10</sup>B atoms = (19.9 / 100 × 200) + 100 = 39.8 + 100 = 139.8</div><div class="worked__math"><sup>11</sup>B atoms = 300 − 139.8 = 160.2</div><div class="worked__math"><i>A</i><sub>r</sub> = (10 × 139.8 + 11 × 160.2) / 300 = (1398.0 + 1762.2) / 300</div><div class="worked__math"><i>A</i><sub>r</sub> = 3160.2 / 300 = 10.534 = <b>10.53</b> (2 d.p.)</div><p>This is lower than the data booklet value of 10.81, as expected: the sample has extra atoms of the lighter isotope.</p>
      solution: "<p>天然のホウ素の原子 200 個と、加えた <span class=\"nowrap\"><sup>10</sup>B</span> の原子 100 個、合わせて 300 個で考えます。</p><div class=\"worked__math\"><sup>10</sup>B の原子の数 = (19.9 / 100 × 200) + 100 = 39.8 + 100 = 139.8</div><div class=\"worked__math\"><sup>11</sup>B の原子の数 = 300 − 139.8 = 160.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (10 × 139.8 + 11 × 160.2) / 300 = (1398.0 + 1762.2) / 300</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 3160.2 / 300 = 10.534 = <b>10.53</b>（小数第 2 位まで）</div><p>データブックレットの値 10.81 より小さくなりました。軽いほうの同位体の原子が余分に入っているので、予想どおりです。</p>",
    },

    // ── s1-2-q023 · mcq · foundation · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q023": {
      // EN: <p>The mass spectrum of an element shows three peaks, all from ions with a 1+ charge. What does the <strong>height</strong> of each peak show?</p>
      stem: "<p>ある元素の質量スペクトルには、ピークが 3 本あります。どれも電荷 1+ のイオンによるものです。それぞれのピークの<strong>高さ</strong>は、何を表していますか。</p>",
      options: [
        // EN: The mass of that isotope
        "その同位体の質量",
        // EN: The relative abundance of that isotope
        "その同位体の相対存在量",
        // EN: The number of neutrons in that isotope
        "その同位体の中性子の数",
        // EN: The charge on that ion
        "そのイオンの電荷",
      ],
      hints: [
        // EN: What is plotted on the vertical axis of a mass spectrum?
        "質量スペクトルの縦軸には、何がとってありますか。",
      ],
      // EN: <p>The vertical axis is relative abundance, so the height of a peak shows how much of that isotope is present. The position on the horizontal axis (<i>m/z</i>) gives the mass of the isotope. Three peaks means three isotopes.</p>
      solution: "<p>縦軸は相対存在量なので、ピークの高さは、その同位体がどれだけあるかを表します。横軸（<i>m/z</i>）での位置は、同位体の質量を表します。ピークが 3 本あるので、同位体は 3 つです。</p>",
      misconception: {
        // EN (option A): The mass is read from the position of the peak on the horizontal <i>m/z</i> axis, not from its height.
        "0": "質量は、ピークの高さではなく、横軸の <i>m/z</i> でのピークの位置から読み取ります。",
        // EN (option C): You can work out the neutrons from the position of the peak (mass number minus atomic number), not from its height.
        "2": "中性子の数は、ピークの高さではなく、ピークの位置から求められます（質量数から原子番号を引く）。",
        // EN (option D): The charge is part of the <i>m/z</i> value on the horizontal axis. Here every ion is 1+.
        "3": "電荷は、横軸の <i>m/z</i> の値に含まれています。ここではどのイオンも 1+ です。",
      },
    },

    // ── s1-2-q024 · numeric · foundation · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q024": {
      // EN: <p>The mass spectrum of a sample of lithium has two peaks: <i>m/z</i> 6 with a relative abundance of 7.6%, and <i>m/z</i> 7 with a relative abundance of 92.4%. Calculate the relative atomic mass of lithium in this sample, to two decimal places.</p>
      stem: "<p>あるリチウムの試料の質量スペクトルには、ピークが 2 本あります。<i>m/z</i> 6 の相対存在量は 7.6%、<i>m/z</i> 7 の相対存在量は 92.4% です。この試料のリチウムの相対原子質量を、小数第 2 位まで計算しなさい (calculate)。</p>",
      hints: [
        // EN: The heights are percentages and add up to 100, so this is the usual weighted mean.
        "高さは百分率で、合計は 100 です。いつもの加重平均で計算できます。",
        // EN: <span class="mono">(6 × 7.6 + 7 × 92.4) ÷ 100</span>
        "<span class=\"mono\">(6 × 7.6 + 7 × 92.4) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">6 × 7.6 = 45.6</div><div class="worked__math">7 × 92.4 = 646.8</div><div class="worked__math"><i>A</i><sub>r</sub> = (45.6 + 646.8) / 100 = 692.4 / 100 = 6.924 = <b>6.92</b> (2 d.p.)</div><p>The data booklet gives 6.94. Write the value you calculated from the spectrum.</p>
      solution: "<div class=\"worked__math\">6 × 7.6 = 45.6</div><div class=\"worked__math\">7 × 92.4 = 646.8</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (45.6 + 646.8) / 100 = 692.4 / 100 = 6.924 = <b>6.92</b>（小数第 2 位まで）</div><p>データブックレットの値は 6.94 です。答えには、スペクトルから計算した値を書きます。</p>",
    },

    // ── s1-2-q025 · numeric · exam · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q025": {
      // EN: <p>The mass spectrum of a sample of copper has two peaks: <i>m/z</i> 63 with a relative abundance of 100.0, and <i>m/z</i> 65 with a relative abundance of 44.6. Calculate the relative atomic mass of copper in this sample, to two decimal places.</p>
      stem: "<p>ある銅の試料の質量スペクトルには、ピークが 2 本あります。<i>m/z</i> 63 の相対存在量は 100.0、<i>m/z</i> 65 の相対存在量は 44.6 です。この試料の銅の相対原子質量を、小数第 2 位まで計算しなさい (calculate)。</p>",
      hints: [
        // EN: Add the two peak heights. Is the total 100?
        "2 本のピークの高さを足しましょう。合計は 100 ですか。",
        // EN: <span class="mono">(63 × 100.0 + 65 × 44.6) ÷ (100.0 + 44.6)</span>
        "<span class=\"mono\">(63 × 100.0 + 65 × 44.6) ÷ (100.0 + 44.6)</span>",
      ],
      // EN: <div class="worked__math">total height = 100.0 + 44.6 = 144.6</div><div class="worked__math">63 × 100.0 + 65 × 44.6 = 6300.0 + 2899.0 = 9199.0</div><div class="worked__math"><i>A</i><sub>r</sub> = 9199.0 / 144.6 = 63.6168… = <b>63.62</b> (2 d.p.)</div><p>The heights do not add up to 100, so divide by their total. The data booklet value, 63.55, does not score: the question asks for the value from this spectrum.</p>
      solution: "<div class=\"worked__math\">高さの合計 = 100.0 + 44.6 = 144.6</div><div class=\"worked__math\">63 × 100.0 + 65 × 44.6 = 6300.0 + 2899.0 = 9199.0</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 9199.0 / 144.6 = 63.6168… = <b>63.62</b>（小数第 2 位まで）</div><p>高さの合計が 100 にならないので、高さの合計で割ります。データブックレットの値 63.55 は点になりません。問われているのは、このスペクトルから求めた値です。</p>",
    },

    // ── s1-2-q026 · mcq · exam · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q026": {
      // EN: <p>The mass spectrum of an element has two peaks. The peak at <i>m/z</i> 10 has a height of 1 unit and the peak at <i>m/z</i> 11 has a height of 4 units. What is the relative atomic mass of the element?</p>
      stem: "<p>ある元素の質量スペクトルには、ピークが 2 本あります。<i>m/z</i> 10 のピークの高さは 1 目盛り分、<i>m/z</i> 11 のピークの高さは 4 目盛り分です。この元素の相対原子質量はいくつですか。</p>",
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
        "高さの合計は 100 ではなく 5 です。5 で割ります。",
        // EN: <span class="mono">(10 × 1 + 11 × 4) ÷ (1 + 4)</span>
        "<span class=\"mono\">(10 × 1 + 11 × 4) ÷ (1 + 4)</span>",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>r</sub> = (10 × 1 + 11 × 4) / (1 + 4) = (10 + 44) / 5 = 54 / 5 = <b>10.8</b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>r</sub> = (10 × 1 + 11 × 4) / (1 + 4) = (10 + 44) / 5 = 54 / 5 = <b>10.8</b></div>",
      misconception: {
        // EN (option A): You swapped the heights. 10.2 would be right if the peak at 10 were the taller one.
        "0": "高さを逆にしています。10.2 になるのは、10 のピークのほうが高いときです。",
        // EN (option B): 10.5 is the simple average of 10 and 11. The peaks are not the same height, so the isotopes must be weighted.
        "1": "10.5 は 10 と 11 の単純な平均です。ピークの高さが違うので、同位体に重みをつける必要があります。",
        // EN (option D): 11.0 is the mass of the more abundant isotope. The atoms of mass 10 pull the average down a little.
        "3": "11.0 は、存在比の大きい同位体の質量です。質量 10 の原子の分だけ、平均は少し小さくなります。",
      },
    },

    // ── s1-2-q027 · short · exam · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q027": {
      // EN: <p>Bromine has two isotopes, <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span>, in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has peaks at <i>m/z</i> 158, 160 and 162 with heights in the ratio 1 : 2 : 1. Explain why there are three peaks and why the middle peak is the tallest.</p>
      stem: "<p>臭素には <span class=\"nowrap\"><sup>79</sup>Br</span> と <span class=\"nowrap\"><sup>81</sup>Br</span> の 2 つの同位体があり、存在比はほぼ同じです。臭素 <span class=\"chem\">Br2</span> の質量スペクトルには、<i>m/z</i> 158、160、162 にピークがあり、高さの比は 1 : 2 : 1 です。ピークが 3 本ある理由と、真ん中のピークがいちばん高い理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Each molecule has two atoms. List every way of choosing them from the two isotopes, and add up the masses.
        "分子 1 個には原子が 2 個あります。2 つの同位体から原子を選ぶ組み合わせをすべて書き出し、質量を足しましょう。",
        // EN: Think of tossing two coins. Why is “one head and one tail” more likely than “two heads”?
        "硬貨を 2 枚投げるところを考えましょう。「表と裏が 1 枚ずつ」が「2 枚とも表」より出やすいのはなぜですか。",
      ],
      // EN: <p>The three peaks are from the three possible combinations of isotopes in a <span class="chem">Br2+</span> ion: <span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>79</sup>Br</span> (79 + 79 = 158), <span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> (79 + 81 = 160) and <span class="nowrap"><sup>81</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> (81 + 81 = 162).</p><p>The mixed molecule can form in two ways (<span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> or <span class="nowrap"><sup>81</sup>Br</span>–<span class="nowrap"><sup>79</sup>Br</span>), so it is twice as likely as either of the others. Chance: ½ × ½ = ¼, 2 × ½ × ½ = ½, ½ × ½ = ¼.</p>
      answer: "<p>3 本のピークは、<span class=\"chem\">Br2+</span> イオンに含まれる同位体の 3 通りの組み合わせによるものです。<span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>79</sup>Br</span>（79 + 79 = 158）、<span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span>（79 + 81 = 160）、<span class=\"nowrap\"><sup>81</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span>（81 + 81 = 162）です。</p><p>同位体が混ざった分子は、2 通りのでき方があります（<span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span> または <span class=\"nowrap\"><sup>81</sup>Br</span>–<span class=\"nowrap\"><sup>79</sup>Br</span>）。そのため、ほかの 2 つのどちらとくらべても 2 倍できやすくなります。確率：½ × ½ = ¼、2 × ½ × ½ = ½、½ × ½ = ¼。</p>",
      markscheme: [
        // EN: Peaks identified with the isotope combinations: 158 is two <sup>79</sup>Br, 160 is one <sup>79</sup>Br and one <sup>81</sup>Br, 162 is two <sup>81</sup>Br.
        "ピークを同位体の組み合わせと結びつけている。158 は <sup>79</sup>Br が 2 個、160 は <sup>79</sup>Br が 1 個と <sup>81</sup>Br が 1 個、162 は <sup>81</sup>Br が 2 個。",
        // EN: The mixed combination can form in two ways / is twice as probable (as each of the others).
        "同位体が混ざった組み合わせは 2 通りのでき方がある / （ほかのそれぞれとくらべて）確率が 2 倍である。",
      ],
    },

    // ── s1-2-q028 · numeric · challenge · AHL · Structure 1.2.3 · 3 marks
    "s1-2-q028": {
      // EN: <p>The table gives the peaks in the mass spectrum of a sample of germanium.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><i>m/z</i></th><th scope="col" class="num">Relative abundance</th></tr></thead><tbody><tr><th scope="row">70</th><td class="num">56.4</td></tr><tr><th scope="row">72</th><td class="num">75.2</td></tr><tr><th scope="row">73</th><td class="num">21.2</td></tr><tr><th scope="row">74</th><td class="num">100.0</td></tr><tr><th scope="row">76</th><td class="num">21.2</td></tr></tbody></table></div><p>Calculate the relative atomic mass of germanium in this sample, to two decimal places.</p>
      stem: "<p>次の表は、あるゲルマニウムの試料の質量スペクトルのピークを示しています。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><i>m/z</i></th><th scope=\"col\" class=\"num\">相対存在量</th></tr></thead><tbody><tr><th scope=\"row\">70</th><td class=\"num\">56.4</td></tr><tr><th scope=\"row\">72</th><td class=\"num\">75.2</td></tr><tr><th scope=\"row\">73</th><td class=\"num\">21.2</td></tr><tr><th scope=\"row\">74</th><td class=\"num\">100.0</td></tr><tr><th scope=\"row\">76</th><td class=\"num\">21.2</td></tr></tbody></table></div><p>この試料のゲルマニウムの相対原子質量を、小数第 2 位まで計算しなさい (calculate)。</p>",
      hints: [
        // EN: Add up the five relative abundances first. The total is not 100.
        "まず 5 つの相対存在量を合計します。合計は 100 になりません。",
        // EN: Multiply each <i>m/z</i> by its relative abundance and add the five products.
        "それぞれの <i>m/z</i> に相対存在量をかけ、5 つの積を足します。",
        // EN: Divide the sum of the products by the total relative abundance.
        "積の合計を、相対存在量の合計で割ります。",
      ],
      // EN: <div class="worked__math">total = 56.4 + 75.2 + 21.2 + 100.0 + 21.2 = 274.0</div><div class="worked__math">70 × 56.4 = 3948.0</div><div class="worked__math">72 × 75.2 = 5414.4</div><div class="worked__math">73 × 21.2 = 1547.6</div><div class="worked__math">74 × 100.0 = 7400.0</div><div class="worked__math">76 × 21.2 = 1611.2</div><div class="worked__math">sum = 3948.0 + 5414.4 + 1547.6 + 7400.0 + 1611.2 = 19921.2</div><div class="worked__math"><i>A</i><sub>r</sub> = 19921.2 / 274.0 = 72.7051… = <b>72.71</b> (2 d.p.)</div><p>Check: the answer lies between 70 and 76. The data booklet value, 72.63, is slightly different and does not score here.</p>
      solution: "<div class=\"worked__math\">合計 = 56.4 + 75.2 + 21.2 + 100.0 + 21.2 = 274.0</div><div class=\"worked__math\">70 × 56.4 = 3948.0</div><div class=\"worked__math\">72 × 75.2 = 5414.4</div><div class=\"worked__math\">73 × 21.2 = 1547.6</div><div class=\"worked__math\">74 × 100.0 = 7400.0</div><div class=\"worked__math\">76 × 21.2 = 1611.2</div><div class=\"worked__math\">積の合計 = 3948.0 + 5414.4 + 1547.6 + 7400.0 + 1611.2 = 19921.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 19921.2 / 274.0 = 72.7051… = <b>72.71</b>（小数第 2 位まで）</div><p>確認：答えは 70 と 76 の間にあります。データブックレットの値 72.63 は少し違うので、ここでは点になりません。</p>",
    },

    // ── s1-2-q029 · mcq · challenge · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q029": {
      // EN: <p>Chlorine has two isotopes, <span class="nowrap"><sup>35</sup>Cl</span> and <span class="nowrap"><sup>37</sup>Cl</span>, with abundances in the ratio 3 : 1. The mass spectrum of chlorine, <span class="chem">Cl2</span>, has peaks at <i>m/z</i> 70, 72 and 74. What is the ratio of the heights of these peaks, in that order?</p>
      stem: "<p>塩素には <span class=\"nowrap\"><sup>35</sup>Cl</span> と <span class=\"nowrap\"><sup>37</sup>Cl</span> の 2 つの同位体があり、存在比は 3 : 1 です。塩素 <span class=\"chem\">Cl2</span> の質量スペクトルには、<i>m/z</i> 70、72、74 にピークがあります。この順で、ピークの高さの比はいくつですか。</p>",
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
        "1 個の原子が <sup>35</sup>Cl である確率は ¾ です。<sup>37</sup>Cl である確率は ¼ です。",
        // EN: A molecule has two atoms: multiply the two chances. Count the mixed molecule both ways round.
        "分子には原子が 2 個あるので、2 つの確率をかけます。同位体が混ざった分子は、両方の並び方を数えます。",
      ],
      // EN: <div class="worked__math"><i>m/z</i> 70 (<sup>35</sup>Cl–<sup>35</sup>Cl): ¾ × ¾ = 9/16</div><div class="worked__math"><i>m/z</i> 72 (<sup>35</sup>Cl–<sup>37</sup>Cl, two ways): 2 × ¾ × ¼ = 6/16</div><div class="worked__math"><i>m/z</i> 74 (<sup>37</sup>Cl–<sup>37</sup>Cl): ¼ × ¼ = 1/16</div><p>Ratio of heights = <strong>9 : 6 : 1</strong>.</p>
      solution: "<div class=\"worked__math\"><i>m/z</i> 70（<sup>35</sup>Cl–<sup>35</sup>Cl）：¾ × ¾ = 9/16</div><div class=\"worked__math\"><i>m/z</i> 72（<sup>35</sup>Cl–<sup>37</sup>Cl、二通り）：2 × ¾ × ¼ = 6/16</div><div class=\"worked__math\"><i>m/z</i> 74（<sup>37</sup>Cl–<sup>37</sup>Cl）：¼ × ¼ = 1/16</div><p>高さの比 = <strong>9 : 6 : 1</strong>。</p>",
      misconception: {
        // EN (option A): 1 : 2 : 1 is the pattern when the two isotopes are equally abundant, as in bromine. Here <sup>35</sup>Cl is three times as common.
        "0": "1 : 2 : 1 は、臭素のように 2 つの同位体の存在比が同じときのパターンです。ここでは <sup>35</sup>Cl が 3 倍多くあります。",
        // EN (option B): The chances have to be multiplied, one factor for each atom in the molecule: ¾ × ¾ for the peak at 70, and so on.
        "1": "確率は、分子中の原子 1 個につき 1 つずつかけ合わせる必要があります。70 のピークなら ¾ × ¾、というように計算します。",
        // EN (option C): Nearly right, but the mixed molecule can form in two ways (<sup>35</sup>Cl–<sup>37</sup>Cl or <sup>37</sup>Cl–<sup>35</sup>Cl), so its chance is 2 × ¾ × ¼.
        "2": "おしいです。同位体が混ざった分子は 2 通りのでき方がある（<sup>35</sup>Cl–<sup>37</sup>Cl または <sup>37</sup>Cl–<sup>35</sup>Cl）ので、その確率は 2 × ¾ × ¼ です。",
      },
    },

    // ── s1-2-q030 · numeric · challenge · AHL · Structure 1.2.3 · 3 marks
    "s1-2-q030": {
      // EN: <p>An element has two isotopes, with mass numbers 85 and 87, and a relative atomic mass of 85.47. In its mass spectrum the peak at <i>m/z</i> 85 is the taller one and is given a relative abundance of 100. Calculate the relative abundance of the peak at <i>m/z</i> 87 on the same scale. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>ある元素には、質量数 85 と 87 の 2 つの同位体があり、相対原子質量は 85.47 です。この元素の質量スペクトルでは、<i>m/z</i> 85 のピークのほうが高く、その相対存在量を 100 としています。同じ尺度で、<i>m/z</i> 87 のピークの相対存在量を計算しなさい (calculate)。同位体の質量には質量数を使いなさい。</p>",
      hints: [
        // EN: First find the percentage abundance of each isotope from the relative atomic mass.
        "まず、相対原子質量からそれぞれの同位体の存在比（%）を求めます。",
        // EN: <span class="mono">85x + 87(100 − x) = 8547</span> gives the percentage of the isotope of mass 85.
        "<span class=\"mono\">85x + 87(100 − x) = 8547</span> を解くと、質量 85 の同位体の存在比（%）がわかります。",
        // EN: Then scale: if the taller peak is 100, the other is (its percentage ÷ the percentage of the taller one) × 100.
        "次に尺度を合わせます。高いほうのピークを 100 とすると、もう一方は（その存在比 ÷ 高いほうの存在比）× 100 です。",
      ],
      // EN: <div class="worked__math">85<i>x</i> + 87(100 − <i>x</i>) = 85.47 × 100 = 8547</div><div class="worked__math">8700 − 2<i>x</i> = 8547</div><div class="worked__math"><i>x</i> = 153 / 2 = 76.5% (mass 85), so mass 87 is 23.5%</div><div class="worked__math">relative abundance of the peak at 87 = 23.5 / 76.5 × 100 = 30.71… = <b>30.7</b></div><p>Check: (85 × 100 + 87 × 30.7) / 130.7 = 85.47.</p>
      solution: "<div class=\"worked__math\">85<i>x</i> + 87(100 − <i>x</i>) = 85.47 × 100 = 8547</div><div class=\"worked__math\">8700 − 2<i>x</i> = 8547</div><div class=\"worked__math\"><i>x</i> = 153 / 2 = 76.5%（質量 85）、したがって質量 87 は 23.5%</div><div class=\"worked__math\">87 のピークの相対存在量 = 23.5 / 76.5 × 100 = 30.71… = <b>30.7</b></div><p>確認：(85 × 100 + 87 × 30.7) / 130.7 = 85.47。</p>",
    },

    // ── s1-2-q031 · mcq · foundation · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q031": {
      // EN: <p>The mass spectrum of a sample of magnesium has a peak at <i>m/z</i> 25. Which species causes this peak?</p>
      stem: "<p>あるマグネシウムの試料の質量スペクトルには、<i>m/z</i> 25 にピークがあります。このピークの原因になっている粒子はどれですか。</p>",
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
        "<i>m/z</i> の「z」は何を表していますか。",
        // EN: The particles detected are ions. Are they positive or negative?
        "検出される粒子はイオンです。正のイオンですか、負のイオンですか。",
      ],
      // EN: <p>The particles detected are positive ions. For a peak at <i>m/z</i> 25 the ion has mass 25 and a 1+ charge: <span class="nowrap"><sup>25</sup>Mg<sup>+</sup></span>. Always include the charge when you name the species that causes a peak.</p>
      solution: "<p>検出される粒子は陽イオンです。<i>m/z</i> 25 のピークなら、イオンの質量は 25、電荷は 1+ なので、<span class=\"nowrap\"><sup>25</sup>Mg<sup>+</sup></span> です。ピークの原因になっている粒子を答えるときは、必ず電荷をつけましょう。</p>",
      misconception: {
        // EN (option A): The isotope is right, but the charge is missing. A mass spectrometer detects positive ions, and in an exam the mark is lost without the +.
        "0": "同位体は合っていますが、電荷がありません。質量分析計が検出するのは陽イオンです。試験では、+ がないと点を失います。",
        // EN (option C): The particles detected in a mass spectrometer are positive ions, not negative ions.
        "2": "質量分析計で検出される粒子は、陰イオンではなく陽イオンです。",
        // EN (option D): A 2+ ion of mass 25 has <i>m/z</i> = 25 ÷ 2 = 12.5, so it would not give a peak at 25.
        "3": "質量 25 の 2+ イオンは <i>m/z</i> = 25 ÷ 2 = 12.5 になるので、25 にピークは現れません。",
      },
    },

    // ── s1-2-q032 · mcq · exam · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q032": {
      // EN: <p>Bromine has two isotopes, <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span>, in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has three peaks near <i>m/z</i> 160. It also has exactly two more peaks, at <i>m/z</i> 79 and 81, with almost equal heights. Which species cause the peaks at <i>m/z</i> 79 and 81?</p>
      stem: "<p>臭素には <span class=\"nowrap\"><sup>79</sup>Br</span> と <span class=\"nowrap\"><sup>81</sup>Br</span> の 2 つの同位体があり、存在比はほぼ同じです。臭素 <span class=\"chem\">Br2</span> の質量スペクトルには、<i>m/z</i> 160 の近くにピークが 3 本あります。そのほかに、ちょうど 2 本のピークが <i>m/z</i> 79 と 81 にあり、高さはほぼ同じです。<i>m/z</i> 79 と 81 のピークの原因になっている粒子はどれですか。</p>",
      options: [
        // EN: <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span> atoms
        "<span class=\"nowrap\"><sup>79</sup>Br</span> と <span class=\"nowrap\"><sup>81</sup>Br</span> の原子",
        // EN: <span class="nowrap"><sup>79</sup>Br<sup>+</sup></span> and <span class="nowrap"><sup>81</sup>Br<sup>+</sup></span> ions
        "<span class=\"nowrap\"><sup>79</sup>Br<sup>+</sup></span> と <span class=\"nowrap\"><sup>81</sup>Br<sup>+</sup></span> のイオン",
        // EN: <span class="nowrap"><sup>79</sup>Br<sup>−</sup></span> and <span class="nowrap"><sup>81</sup>Br<sup>−</sup></span> ions
        "<span class=\"nowrap\"><sup>79</sup>Br<sup>−</sup></span> と <span class=\"nowrap\"><sup>81</sup>Br<sup>−</sup></span> のイオン",
        // EN: <span class="chem">Br2</span> molecules that have lost two electrons
        "電子を 2 個失った <span class=\"chem\">Br2</span> 分子",
      ],
      hints: [
        // EN: Compare 79 and 81 with the mass numbers of the two isotopes.
        "79 と 81 を、2 つの同位体の質量数と比べましょう。",
        // EN: Some molecules break into single atoms in the instrument. What charge must a particle have to be detected?
        "装置の中で、一部の分子はばらばらの原子に分かれます。粒子が検出されるには、どんな電荷が必要ですか。",
      ],
      // EN: <p>Some <span class="chem">Br2</span> molecules break into single atoms in the instrument. The atoms are detected as positive ions: <span class="nowrap"><sup>79</sup>Br<sup>+</sup></span> at <i>m/z</i> 79 and <span class="nowrap"><sup>81</sup>Br<sup>+</sup></span> at <i>m/z</i> 81. The two isotopes are almost equally abundant, so the two peaks have almost equal heights.</p>
      solution: "<p>装置の中で、一部の <span class=\"chem\">Br2</span> 分子はばらばらの原子に分かれます。その原子は陽イオンとして検出されます。<span class=\"nowrap\"><sup>79</sup>Br<sup>+</sup></span> が <i>m/z</i> 79 に、<span class=\"nowrap\"><sup>81</sup>Br<sup>+</sup></span> が <i>m/z</i> 81 に現れます。2 つの同位体の存在比はほぼ同じなので、2 本のピークの高さもほぼ同じになります。</p>",
      misconception: {
        // EN (option A): The isotopes are right, but neutral atoms are not detected. The species must be positive ions, so the + is needed.
        "0": "同位体は合っていますが、中性の原子は検出されません。粒子は陽イオンのはずなので、+ が必要です。",
        // EN (option C): Bromine forms bromide ions in its compounds, but the particles detected in a mass spectrometer are positive ions.
        "2": "臭素は化合物の中では臭化物イオンになります。しかし、質量分析計で検出される粒子は陽イオンです。",
        // EN (option D): Ions with a 2+ charge would appear at half their mass: 158 ÷ 2 = 79, 160 ÷ 2 = 80 and 162 ÷ 2 = 81. That would give three peaks, with the tallest at 80, not two equal peaks.
        "3": "電荷 2+ のイオンは、質量の半分の位置に現れます。158 ÷ 2 = 79、160 ÷ 2 = 80、162 ÷ 2 = 81 です。そうなるとピークは 3 本で、いちばん高いのは 80 になります。同じ高さの 2 本のピークにはなりません。",
      },
    },

  }
});
