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
      stem: "<p>원자의 원자핵을 옳게 설명한 것은 어느 것인가요?</p>",
      options: [
        // EN: It is positively charged and contains most of the mass of the atom.
        "양전하를 띠고, 원자 질량의 대부분을 차지해요.",
        // EN: It is neutral and contains most of the mass of the atom.
        "전기적으로 중성이고, 원자 질량의 대부분을 차지해요.",
        // EN: It is positively charged and takes up most of the volume of the atom.
        "양전하를 띠고, 원자 부피의 대부분을 차지해요.",
        // EN: It is negatively charged and contains protons, neutrons and electrons.
        "음전하를 띠고, 양성자, 중성자, 전자를 포함해요.",
      ],
      hints: [
        // EN: Which particles are in the nucleus, and what charge does each one have?
        "원자핵에는 어떤 입자가 있고, 각 입자의 전하는 무엇인가요?",
        // EN: Think about mass and volume separately. Where is the mass? Where is the space?
        "질량과 부피를 따로 생각해 봐요. 질량은 어디에 있나요? 빈 공간은 어디에 있나요?",
      ],
      // EN: <p>The nucleus contains protons (relative charge +1) and neutrons (charge 0), so it is positively charged. Protons and neutrons each have a relative mass of 1 and the mass of an electron is negligible, so nearly all the mass is in the nucleus. It is very small and dense.</p>
      solution: "<p>원자핵에는 양성자(상대 전하 +1)와 중성자(전하 0)가 있으므로 원자핵은 양전하를 띠어요. 양성자와 중성자의 상대 질량은 각각 1이고 전자의 질량은 무시할 수 있을 만큼 작으므로, 원자 질량의 거의 전부가 원자핵에 있어요. 원자핵은 아주 작고 밀도가 커요.</p>",
      misconception: {
        // EN (option B): Neutrons are neutral, but the nucleus also contains protons, so the nucleus as a whole is positive. Only the whole atom is neutral.
        "1": "중성자는 전하가 없지만 원자핵에는 양성자도 있으므로 원자핵 전체는 양전하를 띠어요. 중성인 것은 원자 전체뿐이에요.",
        // EN (option C): The charge is right, but the nucleus is tiny. Most of the volume of an atom is the space occupied by the electrons.
        "2": "전하는 맞지만 원자핵은 아주 작아요. 원자 부피의 대부분은 전자가 차지하는 공간이에요.",
        // EN (option D): Electrons are not in the nucleus. They occupy the space outside it, and the nucleus is positive.
        "3": "전자는 원자핵 안에 없어요. 전자는 원자핵 바깥 공간에 있고, 원자핵은 양전하를 띠어요.",
      },
    },

    // ── s1-2-q002 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q002": {
      // EN: <p>Which row gives the relative mass and relative charge of a <strong>neutron</strong>?</p>
      stem: "<p><strong>중성자</strong>의 상대 질량과 상대 전하를 옳게 나타낸 것은 어느 것인가요?</p>",
      options: [
        // EN: Relative mass 1, relative charge +1
        "상대 질량 1, 상대 전하 +1",
        // EN: Relative mass 1, relative charge 0
        "상대 질량 1, 상대 전하 0",
        // EN: Relative mass negligible, relative charge 0
        "상대 질량 무시할 수 있음, 상대 전하 0",
        // EN: Relative mass negligible, relative charge −1
        "상대 질량 무시할 수 있음, 상대 전하 −1",
      ],
      hints: [
        // EN: The name is a clue to the charge.
        "이름(neutron, 중성자)이 전하에 대한 힌트예요.",
        // EN: A neutron is a nucleon, like a proton. Their masses are almost the same.
        "중성자는 양성자처럼 핵자예요. 두 입자의 질량은 거의 같아요.",
      ],
      // EN: <p>A neutron has a relative mass of 1 (the same as a proton) and a relative charge of 0. The proton is mass 1, charge +1. The electron has negligible mass and charge −1.</p>
      solution: "<p>중성자의 상대 질량은 1(양성자와 같음)이고 상대 전하는 0이에요. 양성자는 질량 1, 전하 +1이에요. 전자는 질량을 무시할 수 있고 전하는 −1이에요.</p>",
      misconception: {
        // EN (option A): This row describes a proton. A neutron has the same relative mass but no charge.
        "0": "이것은 양성자예요. 중성자는 상대 질량은 같지만 전하가 없어요.",
        // EN (option C): A neutron has no charge, but its mass is not negligible. It has about the same mass as a proton.
        "2": "중성자는 전하가 없지만 질량은 무시할 수 없어요. 양성자와 질량이 거의 같아요.",
        // EN (option D): This row describes an electron.
        "3": "이것은 전자예요.",
      },
    },

    // ── s1-2-q003 · mcq · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q003": {
      // EN: <p>How many neutrons are in an atom of <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>31</span><span>15</span></span><span>P</span></span>?</p>
      stem: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>31</span><span>15</span></span><span>P</span></span> 원자 1개에 들어 있는 중성자는 몇 개인가요?</p>",
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
        "위의 숫자는 양성자 + 중성자 수예요. 아래 숫자는 양성자 수예요.",
      ],
      // EN: <div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 31 − 15 = 16</div>
      solution: "<div class=\"worked__math\">중성자 수 = <i>A</i> − <i>Z</i> = 31 − 15 = 16</div>",
      misconception: {
        // EN (option A): 15 is the atomic number: the number of protons (and of electrons in the neutral atom).
        "0": "15는 원자 번호예요. 양성자 수(그리고 중성 원자의 전자 수)를 나타내요.",
        // EN (option C): 31 is the mass number. It counts protons and neutrons together.
        "2": "31은 질량수예요. 양성자와 중성자를 합한 수예요.",
        // EN (option D): You added the two numbers. The mass number already includes the protons, so subtract instead.
        "3": "두 숫자를 더했어요. 질량수에는 이미 양성자가 포함되어 있으니 빼야 해요.",
      },
    },

    // ── s1-2-q004 · numeric · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q004": {
      // EN: <p>How many electrons are in the ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>?</p>
      stem: "<p>이온 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>에 들어 있는 전자는 몇 개인가요?</p>",
      hints: [
        // EN: A neutral calcium atom has the same number of electrons as protons.
        "중성인 칼슘 원자는 양성자 수와 전자 수가 같아요.",
        // EN: A 2+ ion has lost two electrons.
        "2+ 이온은 전자 두 개를 잃은 이온이에요.",
      ],
      // EN: <div class="worked__math">electrons in a Ca atom = <i>Z</i> = 20</div><div class="worked__math">electrons in Ca<sup>2+</sup> = 20 − 2 = 18</div><p>If you got 22, you added the charge. A positive ion has <em>lost</em> electrons.</p>
      solution: "<div class=\"worked__math\">Ca 원자의 전자 수 = <i>Z</i> = 20</div><div class=\"worked__math\">Ca<sup>2+</sup>의 전자 수 = 20 − 2 = 18</div><p>22가 나왔다면 전하를 더한 거예요. 양이온은 전자를 <em>잃은</em> 이온이에요.</p>",
      // EN: electrons
      unit: "개",
    },

    // ── s1-2-q005 · multi · foundation · SL · Structure 1.2.2 · 1 mark
    "s1-2-q005": {
      // EN: <p>Two atoms are isotopes of the same element. Which statements about them are correct? Select all that apply.</p>
      stem: "<p>두 원자가 같은 원소의 동위 원소예요. 이 두 원자에 대한 설명으로 옳은 것을 모두 고르세요.</p>",
      options: [
        // EN: They have the same number of protons.
        "양성자 수가 같아요.",
        // EN: They have different numbers of neutrons.
        "중성자 수가 달라요.",
        // EN: As neutral atoms, they have different numbers of electrons.
        "중성 원자일 때 전자 수가 달라요.",
        // EN: They have the same mass number.
        "질량수가 같아요.",
        // EN: They have the same chemical properties.
        "화학적 성질이 같아요.",
      ],
      hints: [
        // EN: Start from the definition: same element, different numbers of neutrons.
        "정의에서 시작해 봐요: 같은 원소, 다른 중성자 수.",
        // EN: What fixes which element an atom is? What decides how it reacts?
        "원자가 어떤 원소인지를 정하는 것은 무엇인가요? 어떻게 반응할지를 정하는 것은 무엇인가요?",
      ],
      // EN: <p>Isotopes are atoms of the same element (same number of protons) with different numbers of neutrons, so their mass numbers differ. As neutral atoms they have the same number of electrons, arranged in the same way, so their chemical properties are the same.</p>
      solution: "<p>동위 원소는 같은 원소(양성자 수가 같음)이면서 중성자 수가 다른 원자이므로 질량수가 달라요. 중성 원자일 때 전자 수가 같고 전자 배치도 같으므로 화학적 성질이 같아요.</p>",
      misconception: {
        // EN (option C): Neutral atoms of the same element have the same number of protons, so they have the same number of electrons. A different number of electrons would make an ion, not an isotope.
        "2": "같은 원소의 중성 원자는 양성자 수가 같으므로 전자 수도 같아요. 전자 수가 다르면 동위 원소가 아니라 이온이에요.",
        // EN (option D): Mass number = protons + neutrons. The neutrons differ, so the mass numbers differ.
        "3": "질량수 = 양성자 수 + 중성자 수예요. 중성자 수가 다르므로 질량수도 달라요.",
      },
    },

    // ── s1-2-q006 · numeric · foundation · SL · Structure 1.2.2 · 2 marks
    "s1-2-q006": {
      // EN: <p>A sample of rubidium contains 72.0% <span class="nowrap"><sup>85</sup>Rb</span> and 28.0% <span class="nowrap"><sup>87</sup>Rb</span>. Calculate the relative atomic mass of rubidium in this sample, to two decimal places.</p>
      stem: "<p>어떤 루비듐 시료에는 <span class=\"nowrap\"><sup>85</sup>Rb</span>이 72.0%, <span class=\"nowrap\"><sup>87</sup>Rb</span>이 28.0% 들어 있어요. 이 시료에서 루비듐의 상대 원자 질량을 소수점 아래 2자리까지 계산하시오 (calculate).</p>",
      hints: [
        // EN: Multiply each mass number by its percentage abundance.
        "각 질량수에 존재 백분율을 곱해요.",
        // EN: <span class="mono">(85 × 72.0 + 87 × 28.0) ÷ 100</span>
        "<span class=\"mono\">(85 × 72.0 + 87 × 28.0) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">85 × 72.0 = 6120</div><div class="worked__math">87 × 28.0 = 2436</div><div class="worked__math"><i>A</i><sub>r</sub> = (6120 + 2436) / 100 = 8556 / 100 = <b>85.56</b></div><p>No units. Check: the answer is between 85 and 87, and nearer 85, the more abundant isotope.</p>
      solution: "<div class=\"worked__math\">85 × 72.0 = 6120</div><div class=\"worked__math\">87 × 28.0 = 2436</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (6120 + 2436) / 100 = 8556 / 100 = <b>85.56</b></div><p>단위는 없어요. 확인: 답은 85와 87 사이에 있고, 더 많이 존재하는 동위 원소인 85에 더 가까워요.</p>",
    },

    // ── s1-2-q007 · order · foundation · SL · Structure 1.2.2 · 2 marks
    "s1-2-q007": {
      // EN: <p>Put these steps in order to calculate a relative atomic mass from the mass numbers and percentage abundances of the isotopes.</p>
      stem: "<p>동위 원소의 질량수와 존재 백분율로 상대 원자 질량을 계산하는 단계를 순서대로 배열하세요.</p>",
      options: [
        // EN: Check that the percentage abundances add up to 100.
        "존재 백분율의 합이 100인지 확인해요.",
        // EN: Multiply the mass of each isotope by its percentage abundance.
        "각 동위 원소의 질량에 존재 백분율을 곱해요.",
        // EN: Add the results together.
        "곱한 값을 모두 더해요.",
        // EN: Divide the total by 100.
        "합계를 100으로 나눠요.",
        // EN: Round the answer, usually to two decimal places, and give no units.
        "답을 반올림하고(보통 소수점 아래 2자리), 단위는 쓰지 않아요.",
      ],
      hints: [
        // EN: Rounding always comes last.
        "반올림은 항상 마지막에 해요.",
      ],
      // EN: <p>Weight each isotope first (mass × abundance), then add, then divide by 100 because the abundances are percentages. Round only at the end.</p>
      solution: "<p>먼저 각 동위 원소에 가중치를 주고(질량 × 존재 비율), 그다음 더하고, 존재 비율이 백분율이므로 100으로 나눠요. 반올림은 마지막에만 해요.</p>",
    },

    // ── s1-2-q008 · multi · foundation · SL · Structure 1.2.1 · 1 mark
    "s1-2-q008": {
      // EN: <p>Which statements about the fluoride ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>19</span><span>9</span></span><span>F</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span> are correct? Select all that apply.</p>
      stem: "<p>플루오린화 이온 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>19</span><span>9</span></span><span>F</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span>에 대한 설명으로 옳은 것을 모두 고르세요.</p>",
      options: [
        // EN: It has 9 protons.
        "양성자가 9개 있어요.",
        // EN: It has 19 neutrons.
        "중성자가 19개 있어요.",
        // EN: It has 10 neutrons.
        "중성자가 10개 있어요.",
        // EN: It has 10 electrons.
        "전자가 10개 있어요.",
        // EN: It has 8 electrons.
        "전자가 8개 있어요.",
      ],
      hints: [
        // EN: Deal with the nucleus first: protons = <i>Z</i>, neutrons = <i>A</i> − <i>Z</i>.
        "먼저 원자핵부터 따져 봐요: 양성자 수 = <i>Z</i>, 중성자 수 = <i>A</i> − <i>Z</i>.",
        // EN: A 1− charge means one more electron than protons.
        "전하가 1−라는 것은 전자가 양성자보다 하나 더 많다는 뜻이에요.",
      ],
      // EN: <div class="worked__math">protons = <i>Z</i> = 9</div><div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 19 − 9 = 10</div><div class="worked__math">electrons = 9 + 1 = 10</div>
      solution: "<div class=\"worked__math\">양성자 수 = <i>Z</i> = 9</div><div class=\"worked__math\">중성자 수 = <i>A</i> − <i>Z</i> = 19 − 9 = 10</div><div class=\"worked__math\">전자 수 = 9 + 1 = 10</div>",
      misconception: {
        // EN (option B): 19 is the mass number: protons and neutrons together. Neutrons = 19 − 9.
        "1": "19는 질량수예요. 양성자와 중성자를 합한 수예요. 중성자 수 = 19 − 9.",
        // EN (option E): You subtracted the charge. A negative ion has gained an electron, so it has one more than the 9 protons.
        "4": "전하를 뺐어요. 음이온은 전자를 얻었으므로 양성자 9개보다 전자가 하나 더 많아요.",
      },
    },

    // ── s1-2-q009 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q009": {
      // EN: <p>The table shows the particles in four species. The letters are not chemical symbols.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Species</th><th scope="col" class="num">Protons</th><th scope="col" class="num">Neutrons</th><th scope="col" class="num">Electrons</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">17</td><td class="num">18</td><td class="num">17</td></tr><tr><th scope="row">X</th><td class="num">17</td><td class="num">20</td><td class="num">18</td></tr><tr><th scope="row">Y</th><td class="num">18</td><td class="num">20</td><td class="num">18</td></tr><tr><th scope="row">Z</th><td class="num">19</td><td class="num">20</td><td class="num">18</td></tr></tbody></table></div><p>Which two species are isotopes of the same element?</p>
      stem: "<p>표는 네 가지 화학종에 들어 있는 입자의 수를 나타낸 거예요. 문자는 원소 기호가 아니에요.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">화학종</th><th scope=\"col\" class=\"num\">양성자</th><th scope=\"col\" class=\"num\">중성자</th><th scope=\"col\" class=\"num\">전자</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">17</td><td class=\"num\">18</td><td class=\"num\">17</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">17</td><td class=\"num\">20</td><td class=\"num\">18</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">18</td><td class=\"num\">20</td><td class=\"num\">18</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">19</td><td class=\"num\">20</td><td class=\"num\">18</td></tr></tbody></table></div><p>같은 원소의 동위 원소인 두 화학종은 어느 것인가요?</p>",
      options: [
        // EN: W and X
        "W와 X",
        // EN: X and Y
        "X와 Y",
        // EN: X and Z
        "X와 Z",
        // EN: Y and Z
        "Y와 Z",
      ],
      hints: [
        // EN: Which column decides what element a species is?
        "화학종이 어떤 원소인지를 정하는 열은 어느 것인가요?",
        // EN: Isotopes: same protons, different neutrons. The electron column does not matter here.
        "동위 원소: 양성자 수는 같고 중성자 수는 달라요. 여기서 전자 열은 상관없어요.",
      ],
      // EN: <p>W and X both have 17 protons, so they are the same element. They have 18 and 20 neutrons, so they are isotopes. X has one extra electron, so it is a 1− ion, but it is still an isotope of the same element as W.</p>
      solution: "<p>W와 X는 둘 다 양성자가 17개이므로 같은 원소예요. 중성자는 18개와 20개이므로 동위 원소예요. X는 전자가 하나 더 많으므로 1− 이온이지만, 여전히 W와 같은 원소의 동위 원소예요.</p>",
      misconception: {
        // EN (option B): X and Y have the same number of neutrons and electrons, but different numbers of protons. They are different elements.
        "1": "X와 Y는 중성자 수와 전자 수가 같지만 양성자 수가 달라요. 서로 다른 원소예요.",
        // EN (option C): X and Z both have 18 electrons and 20 neutrons, but 17 and 19 protons. Different protons means different elements.
        "2": "X와 Z는 둘 다 전자가 18개, 중성자가 20개이지만 양성자는 17개와 19개예요. 양성자 수가 다르면 다른 원소예요.",
        // EN (option D): Y and Z have the same number of neutrons. Isotopes need the same number of protons and <em>different</em> numbers of neutrons.
        "3": "Y와 Z는 중성자 수가 같아요. 동위 원소는 양성자 수가 같고 중성자 수가 <em>달라야</em> 해요.",
      },
    },

    // ── s1-2-q010 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q010": {
      // EN: <p>Which row is correct for the ion <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>34</span><span>16</span></span><span>S</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span>?</p>
      stem: "<p>이온 <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>34</span><span>16</span></span><span>S</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2−</span></span>에 대해 옳은 것은 어느 것인가요?</p>",
      options: [
        // EN: 16 protons, 18 neutrons, 14 electrons
        "양성자 16개, 중성자 18개, 전자 14개",
        // EN: 16 protons, 18 neutrons, 18 electrons
        "양성자 16개, 중성자 18개, 전자 18개",
        // EN: 16 protons, 34 neutrons, 18 electrons
        "양성자 16개, 중성자 34개, 전자 18개",
        // EN: 18 protons, 16 neutrons, 16 electrons
        "양성자 18개, 중성자 16개, 전자 16개",
      ],
      hints: [
        // EN: Protons come from the bottom number, whatever the charge.
        "양성자 수는 전하와 상관없이 아래 숫자에서 알 수 있어요.",
        // EN: Negative ions have more electrons than protons.
        "음이온은 양성자보다 전자가 더 많아요.",
      ],
      // EN: <div class="worked__math">protons = <i>Z</i> = 16</div><div class="worked__math">neutrons = <i>A</i> − <i>Z</i> = 34 − 16 = 18</div><div class="worked__math">electrons = 16 + 2 = 18</div>
      solution: "<div class=\"worked__math\">양성자 수 = <i>Z</i> = 16</div><div class=\"worked__math\">중성자 수 = <i>A</i> − <i>Z</i> = 34 − 16 = 18</div><div class=\"worked__math\">전자 수 = 16 + 2 = 18</div>",
      misconception: {
        // EN (option A): You subtracted the charge. A 2− ion has gained two electrons: 16 + 2.
        "0": "전하를 뺐어요. 2− 이온은 전자 두 개를 얻었어요: 16 + 2.",
        // EN (option C): 34 is the mass number, not the number of neutrons. Neutrons = 34 − 16.
        "2": "34는 중성자 수가 아니라 질량수예요. 중성자 수 = 34 − 16.",
        // EN (option D): The charge does not change the number of protons. Sulfur always has 16 protons; the ion has two extra electrons.
        "3": "전하는 양성자 수를 바꾸지 않아요. 황은 항상 양성자가 16개이고, 이 이온은 전자가 두 개 더 많아요.",
      },
    },

    // ── s1-2-q011 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q011": {
      // EN: <p>Separate beams of protons, neutrons and electrons, all travelling at the same speed, pass between a positively charged plate and a negatively charged plate. Which statement is correct?</p>
      stem: "<p>양성자, 중성자, 전자의 빔이 각각 따로 모두 같은 속력으로 양전하를 띤 판과 음전하를 띤 판 사이를 지나가요. 옳은 설명은 어느 것인가요?</p>",
      options: [
        // EN: Protons and electrons are deflected by the same amount, in opposite directions.
        "양성자와 전자는 반대 방향으로 같은 정도만큼 휘어져요.",
        // EN: Electrons are deflected towards the positive plate, by more than the protons are deflected.
        "전자는 양극판 쪽으로 휘어지고, 양성자보다 더 많이 휘어져요.",
        // EN: Neutrons are deflected towards the negative plate, by less than the protons.
        "중성자는 음극판 쪽으로 휘어지고, 양성자보다 덜 휘어져요.",
        // EN: Protons are deflected towards the positive plate, by less than the electrons.
        "양성자는 양극판 쪽으로 휘어지고, 전자보다 덜 휘어져요.",
      ],
      hints: [
        // EN: Opposite charges attract. Which plate attracts each particle?
        "반대 전하끼리는 끌어당겨요. 각 입자를 끌어당기는 판은 어느 쪽인가요?",
        // EN: The force is the same size on a proton and an electron. Which one is easier to push off course?
        "양성자와 전자가 받는 힘의 크기는 같아요. 어느 쪽이 경로에서 더 쉽게 벗어날까요?",
      ],
      // EN: <p>Electrons (relative charge −1) are attracted to the positive plate. Protons (+1) are attracted to the negative plate. The charges have the same size, but the mass of an electron is negligible compared with a proton, so the electron beam bends much more. Neutrons (charge 0) are not deflected.</p>
      solution: "<p>전자(상대 전하 −1)는 양극판 쪽으로 끌려가요. 양성자(+1)는 음극판 쪽으로 끌려가요. 두 전하의 크기는 같지만 전자의 질량은 양성자에 비해 무시할 수 있을 만큼 작으므로 전자 빔이 훨씬 많이 휘어져요. 중성자(전하 0)는 휘어지지 않아요.</p>",
      misconception: {
        // EN (option A): The directions are opposite and the charges are the same size, but an electron has a far smaller mass than a proton, so it is deflected much more.
        "0": "방향이 반대이고 전하의 크기가 같은 것은 맞지만, 전자는 양성자보다 질량이 훨씬 작아서 훨씬 많이 휘어져요.",
        // EN (option C): Neutrons have no charge, so the plates have no effect on them. They travel straight on.
        "2": "중성자는 전하가 없으므로 판의 영향을 받지 않아요. 그대로 곧게 나아가요.",
        // EN (option D): Protons are positive, so they are attracted to the negative plate, not the positive one.
        "3": "양성자는 양전하를 띠므로 양극판이 아니라 음극판 쪽으로 끌려가요.",
      },
    },

    // ── s1-2-q012 · short · exam · SL · Structure 1.2.1 · 2 marks
    "s1-2-q012": {
      // EN: <p>A species contains 26 protons, 30 neutrons and 23 electrons. Deduce its nuclear symbol, including the charge. Use the periodic table.</p>
      stem: "<p>어떤 화학종에 양성자 26개, 중성자 30개, 전자 23개가 있어요. 전하를 포함하여 이 화학종의 원소 기호 표기(핵종 표기)를 추론하시오 (deduce). 주기율표를 이용하세요.</p>",
      hints: [
        // EN: The number of protons tells you the element.
        "양성자 수를 보면 어떤 원소인지 알 수 있어요.",
        // EN: Mass number = protons + neutrons. Charge = protons − electrons.
        "질량수 = 양성자 수 + 중성자 수. 전하 = 양성자 수 − 전자 수.",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>56</span><span>26</span></span><span>Fe</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">3+</span></span></p><p>Atomic number = 26, so the element is iron. Mass number = 26 + 30 = 56. Charge = 26 − 23 = +3, written 3+.</p>
      answer: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>56</span><span>26</span></span><span>Fe</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">3+</span></span></p><p>원자 번호 = 26이므로 원소는 철이에요. 질량수 = 26 + 30 = 56. 전하 = 26 − 23 = +3이고, 3+로 써요.</p>",
      markscheme: [
        // EN: Mass number 56 (top left) and atomic number 26 (bottom left) with the symbol Fe.
        "원소 기호 Fe와 함께 질량수 56(왼쪽 위)과 원자 번호 26(왼쪽 아래)을 씀.",
        // EN: Charge 3+ shown (accept +3).
        "전하 3+를 나타냄(+3도 인정).",
      ],
    },

    // ── s1-2-q013 · numeric · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q013": {
      // EN: <p>Magnesium extracted from a meteorite contains 77.5% <span class="nowrap"><sup>24</sup>Mg</span>, 10.3% <span class="nowrap"><sup>25</sup>Mg</span> and 12.2% <span class="nowrap"><sup>26</sup>Mg</span>. Calculate the relative atomic mass of magnesium in this sample, to two decimal places.</p>
      stem: "<p>운석에서 추출한 마그네슘에는 <span class=\"nowrap\"><sup>24</sup>Mg</span>이 77.5%, <span class=\"nowrap\"><sup>25</sup>Mg</span>이 10.3%, <span class=\"nowrap\"><sup>26</sup>Mg</span>이 12.2% 들어 있어요. 이 시료에서 마그네슘의 상대 원자 질량을 소수점 아래 2자리까지 계산하시오.</p>",
      hints: [
        // EN: Three isotopes means three products to add.
        "동위 원소가 3가지이므로 더할 곱도 3개예요.",
        // EN: <span class="mono">(24 × 77.5 + 25 × 10.3 + 26 × 12.2) ÷ 100</span>
        "<span class=\"mono\">(24 × 77.5 + 25 × 10.3 + 26 × 12.2) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">24 × 77.5 = 1860.0</div><div class="worked__math">25 × 10.3 = 257.5</div><div class="worked__math">26 × 12.2 = 317.2</div><div class="worked__math"><i>A</i><sub>r</sub> = (1860.0 + 257.5 + 317.2) / 100 = 2434.7 / 100 = 24.347</div><div class="worked__math"><i>A</i><sub>r</sub> = <b>24.35</b> (2 d.p.)</div><p>The data booklet value for magnesium is 24.31. That is for magnesium on Earth, and it does not score here. The question asks for the value from this sample.</p>
      solution: "<div class=\"worked__math\">24 × 77.5 = 1860.0</div><div class=\"worked__math\">25 × 10.3 = 257.5</div><div class=\"worked__math\">26 × 12.2 = 317.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (1860.0 + 257.5 + 317.2) / 100 = 2434.7 / 100 = 24.347</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = <b>24.35</b> (소수점 아래 2자리)</div><p>데이터 부클릿에 나온 마그네슘의 값은 24.31이에요. 이것은 지구의 마그네슘 값이므로 여기서는 점수를 받을 수 없어요. 문제는 이 시료의 값을 묻고 있어요.</p>",
    },

    // ── s1-2-q014 · numeric · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q014": {
      // EN: <p>Gallium has two isotopes. <span class="nowrap"><sup>69</sup>Ga</span> has a relative mass of 68.93 and <span class="nowrap"><sup>71</sup>Ga</span> has a relative mass of 70.92. The relative atomic mass of gallium is 69.72. Calculate the percentage abundance of <span class="nowrap"><sup>69</sup>Ga</span>.</p>
      stem: "<p>갈륨에는 동위 원소가 2가지 있어요. <span class=\"nowrap\"><sup>69</sup>Ga</span>의 상대 질량은 68.93이고 <span class=\"nowrap\"><sup>71</sup>Ga</span>의 상대 질량은 70.92예요. 갈륨의 상대 원자 질량은 69.72예요. <span class=\"nowrap\"><sup>69</sup>Ga</span>의 존재 백분율을 계산하시오.</p>",
      hints: [
        // EN: Let the percentage of <sup>69</sup>Ga be <i>x</i>. Then <sup>71</sup>Ga is 100 − <i>x</i>.
        "<sup>69</sup>Ga의 백분율을 <i>x</i>라고 해요. 그러면 <sup>71</sup>Ga는 100 − <i>x</i>예요.",
        // EN: <span class="mono">68.93x + 70.92(100 − x) = 6972</span>
        "<span class=\"mono\">68.93x + 70.92(100 − x) = 6972</span>",
      ],
      // EN: <div class="worked__math">68.93<i>x</i> + 70.92(100 − <i>x</i>) = 69.72 × 100 = 6972</div><div class="worked__math">68.93<i>x</i> + 7092 − 70.92<i>x</i> = 6972</div><div class="worked__math">7092 − 1.99<i>x</i> = 6972</div><div class="worked__math">1.99<i>x</i> = 7092 − 6972 = 120</div><div class="worked__math"><i>x</i> = 120 / 1.99 = 60.30… = <b>60.3%</b></div><p>Check: 69.72 is closer to 68.93 than to 70.92, so <sup>69</sup>Ga should be the more abundant isotope. It is.</p>
      solution: "<div class=\"worked__math\">68.93<i>x</i> + 70.92(100 − <i>x</i>) = 69.72 × 100 = 6972</div><div class=\"worked__math\">68.93<i>x</i> + 7092 − 70.92<i>x</i> = 6972</div><div class=\"worked__math\">7092 − 1.99<i>x</i> = 6972</div><div class=\"worked__math\">1.99<i>x</i> = 7092 − 6972 = 120</div><div class=\"worked__math\"><i>x</i> = 120 / 1.99 = 60.30… = <b>60.3%</b></div><p>확인: 69.72는 70.92보다 68.93에 더 가까우므로 <sup>69</sup>Ga가 더 많이 존재하는 동위 원소여야 해요. 실제로 그래요.</p>",
    },

    // ── s1-2-q015 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q015": {
      // EN: <p>Two samples of hydrogen gas are compared under the same conditions. One contains only <span class="nowrap"><sup>1</sup>H</span><sub>2</sub> molecules and the other only <span class="nowrap"><sup>2</sup>H</span><sub>2</sub> molecules. Which property is the <strong>same</strong> for both samples?</p>
      stem: "<p>같은 조건에서 수소 기체 시료 두 개를 비교해요. 하나는 <span class=\"nowrap\"><sup>1</sup>H</span><sub>2</sub> 분자만, 다른 하나는 <span class=\"nowrap\"><sup>2</sup>H</span><sub>2</sub> 분자만 들어 있어요. 두 시료에서 <strong>같은</strong> 성질은 어느 것인가요?</p>",
      options: [
        // EN: The density of the gas
        "기체의 밀도",
        // EN: The rate at which the gas diffuses
        "기체가 확산하는 속도",
        // EN: The boiling point
        "끓는점",
        // EN: The way the gas reacts with oxygen
        "기체가 산소와 반응하는 방식",
      ],
      hints: [
        // EN: Sort the options into physical properties and chemical properties.
        "보기를 물리적 성질과 화학적 성질로 나눠 봐요.",
        // EN: Isotopes have the same number of electrons.
        "동위 원소는 전자 수가 같아요.",
      ],
      // EN: <p>Isotopes have the same number of electrons and the same electron arrangement, so their chemical properties are the same: both gases react with oxygen in the same way to form water. Density, rate of diffusion and boiling point are physical properties that depend on mass, so they differ.</p>
      solution: "<p>동위 원소는 전자 수와 전자 배치가 같으므로 화학적 성질이 같아요. 두 기체 모두 산소와 같은 방식으로 반응하여 물이 돼요. 밀도, 확산 속도, 끓는점은 질량에 따라 달라지는 물리적 성질이므로 서로 달라요.</p>",
      misconception: {
        // EN (option A): Density depends on mass. Molecules of <sup>2</sup>H<sub>2</sub> have twice the mass of <sup>1</sup>H<sub>2</sub> molecules, so the gas is denser.
        "0": "밀도는 질량에 따라 달라요. <sup>2</sup>H<sub>2</sub> 분자의 질량은 <sup>1</sup>H<sub>2</sub> 분자의 두 배이므로 기체의 밀도가 더 커요.",
        // EN (option B): Rate of diffusion depends on mass. The heavier molecules move more slowly at the same temperature.
        "1": "확산 속도는 질량에 따라 달라요. 같은 온도에서 더 무거운 분자가 더 느리게 움직여요.",
        // EN (option C): Boiling point is a physical property and differs slightly between isotopes because the masses differ.
        "2": "끓는점은 물리적 성질이고, 질량이 다르기 때문에 동위 원소마다 조금씩 달라요.",
      },
    },

    // ── s1-2-q016 · mcq · exam · SL · Structure 1.2.2 · 1 mark
    "s1-2-q016": {
      // EN: <p>An element has two isotopes. 75% of its atoms have a mass number of 35 and 25% have a mass number of 37. What is the relative atomic mass of the element?</p>
      stem: "<p>어떤 원소에는 동위 원소가 2가지 있어요. 원자의 75%는 질량수가 35이고, 25%는 질량수가 37이에요. 이 원소의 상대 원자 질량은 얼마인가요?</p>",
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
        "답은 더 많이 존재하는 동위 원소에 더 가까워야 해요.",
        // EN: <span class="mono">(35 × 75 + 37 × 25) ÷ 100</span>, or think of four atoms: three of 35 and one of 37.
        "<span class=\"mono\">(35 × 75 + 37 × 25) ÷ 100</span>, 또는 원자 네 개를 생각해 봐요: 35가 세 개, 37이 하나.",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>r</sub> = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <b>35.5</b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>r</sub> = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = <b>35.5</b></div>",
      misconception: {
        // EN (option A): 35.0 is the mass of the more common isotope. The 25% of heavier atoms pull the average up.
        "0": "35.0은 더 흔한 동위 원소의 질량이에요. 25%를 차지하는 더 무거운 원자가 평균을 끌어올려요.",
        // EN (option C): 36.0 is the simple average of 35 and 37. That would only be right if the two isotopes were equally abundant.
        "2": "36.0은 35와 37의 단순 평균이에요. 두 동위 원소의 존재 비율이 같을 때만 맞는 값이에요.",
        // EN (option D): You swapped the abundances. 36.5 would be right for 25% of 35 and 75% of 37.
        "3": "존재 비율을 서로 바꿨어요. 36.5는 35가 25%, 37이 75%일 때 맞는 값이에요.",
      },
    },

    // ── s1-2-q017 · short · exam · SL · Structure 1.2.2 · 2 marks
    "s1-2-q017": {
      // EN: <p>Explain why two isotopes of the same element have the same chemical properties but different densities.</p>
      stem: "<p>같은 원소의 두 동위 원소가 화학적 성질은 같지만 밀도는 다른 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: One part of the answer is about electrons. The other is about mass.
        "답의 한 부분은 전자에 대한 것이에요. 다른 부분은 질량에 대한 것이에요.",
      ],
      // EN: <p>Isotopes have the same number of electrons (the same electron configuration), and chemical properties depend on the electrons, so the isotopes react in the same way. They have different numbers of neutrons, so their atoms have different masses, and density depends on mass.</p>
      answer: "<p>동위 원소는 전자 수가 같고(전자 배치가 같고), 화학적 성질은 전자에 따라 정해지므로 동위 원소는 같은 방식으로 반응해요. 동위 원소는 중성자 수가 다르므로 원자의 질량이 다르고, 밀도는 질량에 따라 달라져요.</p>",
      markscheme: [
        // EN: Same number of electrons / same electron configuration (so same chemical properties).
        "전자 수가 같음 / 전자 배치가 같음(그래서 화학적 성질이 같음).",
        // EN: Different numbers of neutrons, so different mass (so different density).
        "중성자 수가 다르므로 질량이 다름(그래서 밀도가 다름).",
      ],
    },

    // ── s1-2-q018 · mcq · exam · SL · Structure 1.2.1 · 1 mark
    "s1-2-q018": {
      // EN: <p>Which species contains more electrons than neutrons?</p>
      stem: "<p>전자 수가 중성자 수보다 많은 화학종은 어느 것인가요?</p>",
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
        "각각에 대해 중성자 수(<i>A</i> − <i>Z</i>)와 전자 수를 구해 봐요.",
        // EN: Remember to adjust the electrons for the charge.
        "전하에 맞게 전자 수를 조정하는 것을 잊지 마세요.",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>16</span><span>8</span></span><span>O</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2−</span></span> has 16 − 8 = 8 neutrons and 8 + 2 = 10 electrons. It is the only species with more electrons than neutrons.</p>
      solution: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>16</span><span>8</span></span><span>O</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2−</span></span>은 중성자가 16 − 8 = 8개, 전자가 8 + 2 = 10개예요. 전자 수가 중성자 수보다 많은 화학종은 이것 하나뿐이에요.</p>",
      misconception: {
        // EN (option A): This atom has 1 electron and 2 − 1 = 1 neutron. They are equal.
        "0": "이 원자는 전자가 1개, 중성자가 2 − 1 = 1개예요. 둘이 같아요.",
        // EN (option B): This atom has 4 electrons and 9 − 4 = 5 neutrons.
        "1": "이 원자는 전자가 4개, 중성자가 9 − 4 = 5개예요.",
        // EN (option D): This ion has 11 − 1 = 10 electrons and 23 − 11 = 12 neutrons.
        "3": "이 이온은 전자가 11 − 1 = 10개, 중성자가 23 − 11 = 12개예요.",
      },
    },

    // ── s1-2-q019 · numeric · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q019": {
      // EN: <p>An element has three isotopes with mass numbers 24, 25 and 26. In one sample, 79.0% of the atoms have a mass number of 24, and the relative atomic mass of the sample is 24.32. Calculate the percentage abundance of the isotope with mass number 25. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>어떤 원소에는 질량수가 24, 25, 26인 동위 원소가 3가지 있어요. 한 시료에서 원자의 79.0%는 질량수가 24이고, 이 시료의 상대 원자 질량은 24.32예요. 질량수가 25인 동위 원소의 존재 백분율을 계산하시오. 동위 원소의 질량으로 질량수를 그대로 쓰세요.</p>",
      hints: [
        // EN: The other two isotopes share what is left: 100 − 79.0 = 21.0%.
        "나머지 두 동위 원소가 남은 부분을 나눠 가져요: 100 − 79.0 = 21.0%.",
        // EN: Let the percentage with mass number 25 be <i>x</i>. Then the percentage with mass number 26 is 21.0 − <i>x</i>.
        "질량수 25의 백분율을 <i>x</i>라고 해요. 그러면 질량수 26의 백분율은 21.0 − <i>x</i>예요.",
        // EN: <span class="mono">24 × 79.0 + 25x + 26(21.0 − x) = 2432</span>
        "<span class=\"mono\">24 × 79.0 + 25x + 26(21.0 − x) = 2432</span>",
      ],
      // EN: <div class="worked__math">% of mass 25 = <i>x</i>, so % of mass 26 = 100 − 79.0 − <i>x</i> = 21.0 − <i>x</i></div><div class="worked__math">24 × 79.0 + 25<i>x</i> + 26(21.0 − <i>x</i>) = 24.32 × 100 = 2432</div><div class="worked__math">1896 + 25<i>x</i> + 546 − 26<i>x</i> = 2432</div><div class="worked__math">2442 − <i>x</i> = 2432</div><div class="worked__math"><i>x</i> = <b>10.0%</b></div><p>Check: (24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = 2432 / 100 = 24.32.</p>
      solution: "<div class=\"worked__math\">질량 25의 % = <i>x</i>, 따라서 질량 26의 % = 100 − 79.0 − <i>x</i> = 21.0 − <i>x</i></div><div class=\"worked__math\">24 × 79.0 + 25<i>x</i> + 26(21.0 − <i>x</i>) = 24.32 × 100 = 2432</div><div class=\"worked__math\">1896 + 25<i>x</i> + 546 − 26<i>x</i> = 2432</div><div class=\"worked__math\">2442 − <i>x</i> = 2432</div><div class=\"worked__math\"><i>x</i> = <b>10.0%</b></div><p>확인: (24 × 79.0 + 25 × 10.0 + 26 × 11.0) / 100 = 2432 / 100 = 24.32.</p>",
    },

    // ── s1-2-q020 · mcq · challenge · SL · Structure 1.2.1 · 1 mark
    "s1-2-q020": {
      // EN: <p>Which pair of species has the same number of neutrons <strong>and</strong> the same number of electrons?</p>
      stem: "<p>중성자 수가 같고 <strong>또한</strong> 전자 수도 같은 화학종의 쌍은 어느 것인가요?</p>",
      options: [
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>18</span></span><span>Ar</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>18</span></span><span>Ar</span></span>, <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span></span>, <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">+</span></span>, <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>",
        // EN: <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>35</span><span>17</span></span><span>Cl</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span> and <span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>37</span><span>17</span></span><span>Cl</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">−</span></span>
        "<span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>35</span><span>17</span></span><span>Cl</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span>, <span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>37</span><span>17</span></span><span>Cl</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">−</span></span>",
      ],
      hints: [
        // EN: Make a small table: neutrons and electrons for each species.
        "작은 표를 만들어 봐요: 화학종마다 중성자 수와 전자 수.",
        // EN: Same mass number does not mean same number of neutrons.
        "질량수가 같다고 중성자 수가 같은 것은 아니에요.",
      ],
      // EN: <p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>39</span><span>19</span></span><span>K</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">+</span></span>: neutrons = 39 − 19 = 20, electrons = 19 − 1 = 18.</p><p><span class="nowrap" style="display:inline-flex;align-items:center;vertical-align:middle;line-height:1"><span style="display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em"><span>40</span><span>20</span></span><span>Ca</span><span style="align-self:flex-start;font-size:0.7em;line-height:1.1">2+</span></span>: neutrons = 40 − 20 = 20, electrons = 20 − 2 = 18.</p><p>Both counts match, so this is the pair.</p>
      solution: "<p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>39</span><span>19</span></span><span>K</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">+</span></span>: 중성자 수 = 39 − 19 = 20, 전자 수 = 19 − 1 = 18.</p><p><span class=\"nowrap\" style=\"display:inline-flex;align-items:center;vertical-align:middle;line-height:1\"><span style=\"display:inline-flex;flex-direction:column;align-items:flex-end;font-size:0.7em;line-height:1.1;margin-right:0.06em\"><span>40</span><span>20</span></span><span>Ca</span><span style=\"align-self:flex-start;font-size:0.7em;line-height:1.1\">2+</span></span>: 중성자 수 = 40 − 20 = 20, 전자 수 = 20 − 2 = 18.</p><p>두 수가 모두 같으므로 이 쌍이 답이에요.</p>",
      misconception: {
        // EN (option A): Both have 18 electrons and the same mass number, but the neutrons differ: 40 − 18 = 22 and 40 − 20 = 20.
        "0": "둘 다 전자가 18개이고 질량수도 같지만 중성자 수가 달라요: 40 − 18 = 22, 40 − 20 = 20.",
        // EN (option B): Both have 20 neutrons, but as neutral atoms they have 19 and 20 electrons.
        "1": "둘 다 중성자가 20개이지만, 중성 원자이므로 전자는 19개와 20개예요.",
        // EN (option D): Both have 18 electrons, but they are isotopes, so the neutrons differ: 18 and 20.
        "3": "둘 다 전자가 18개이지만 서로 동위 원소이므로 중성자 수가 달라요: 18개와 20개.",
      },
    },

    // ── s1-2-q021 · short · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q021": {
      // EN: <p>“Heavy water” has the formula <span class="nowrap"><sup>2</sup>H</span><sub>2</sub>O. Ordinary water is almost entirely <span class="nowrap"><sup>1</sup>H</span><sub>2</sub>O. In both, the oxygen is <span class="nowrap"><sup>16</sup>O</span>.</p><p>Sodium reacts with ordinary water to form sodium hydroxide and hydrogen. Predict, with reasons, how heavy water compares with ordinary water in (a) its reaction with sodium and (b) its density.</p>
      stem: "<p>‘중수(heavy water)’의 화학식은 <span class=\"nowrap\"><sup>2</sup>H</span><sub>2</sub>O예요. 보통의 물은 거의 모두 <span class=\"nowrap\"><sup>1</sup>H</span><sub>2</sub>O예요. 두 물 모두 산소는 <span class=\"nowrap\"><sup>16</sup>O</span>이에요.</p><p>나트륨(Na)은 보통의 물과 반응하여 수산화 나트륨과 수소를 만들어요. 중수를 보통의 물과 비교하여 (a) 나트륨과의 반응과 (b) 밀도가 어떻게 다를지 이유와 함께 예측하시오 (predict).</p>",
      hints: [
        // EN: Which of (a) and (b) is a chemical property, and which is a physical property?
        "(a)와 (b) 중 어느 것이 화학적 성질이고, 어느 것이 물리적 성질인가요?",
        // EN: Compare the masses of the two molecules by adding up mass numbers.
        "질량수를 더해서 두 분자의 질량을 비교해 봐요.",
      ],
      // EN: <p>(a) Heavy water reacts with sodium in the same way, giving the same type of products, because <span class="nowrap"><sup>1</sup>H</span> and <span class="nowrap"><sup>2</sup>H</span> have the same number of electrons, so their chemical properties are the same.</p><p>(b) Heavy water is denser. Each <span class="nowrap"><sup>2</sup>H</span> atom has one more neutron than <span class="nowrap"><sup>1</sup>H</span>, so a molecule of heavy water has a greater mass (2 + 2 + 16 = 20, compared with 1 + 1 + 16 = 18).</p>
      answer: "<p>(a) 중수는 나트륨과 같은 방식으로 반응하여 같은 종류의 생성물을 만들어요. <span class=\"nowrap\"><sup>1</sup>H</span>와 <span class=\"nowrap\"><sup>2</sup>H</span>는 전자 수가 같아서 화학적 성질이 같기 때문이에요.</p><p>(b) 중수가 밀도가 더 커요. <span class=\"nowrap\"><sup>2</sup>H</span> 원자는 각각 <span class=\"nowrap\"><sup>1</sup>H</span>보다 중성자가 하나 더 많으므로, 중수 분자의 질량이 더 커요(2 + 2 + 16 = 20, 보통의 물은 1 + 1 + 16 = 18).</p>",
      markscheme: [
        // EN: Same reaction / same chemical behaviour with sodium, because the isotopes have the same number of electrons (same electron configuration).
        "나트륨과의 반응이 같음 / 화학적 거동이 같음. 동위 원소의 전자 수가 같기(전자 배치가 같기) 때문.",
        // EN: Heavy water has the greater density.
        "중수의 밀도가 더 큼.",
        // EN: Because its molecules have a greater mass (extra neutron in each hydrogen atom; 20 compared with 18).
        "중수 분자의 질량이 더 크기 때문(각 수소 원자에 중성자가 하나 더 있음. 20 대 18).",
      ],
    },

    // ── s1-2-q022 · numeric · challenge · SL · Structure 1.2.2 · 3 marks
    "s1-2-q022": {
      // EN: <p>Natural boron contains 19.9% <span class="nowrap"><sup>10</sup>B</span> and 80.1% <span class="nowrap"><sup>11</sup>B</span>. An enriched sample is made by mixing natural boron with pure <span class="nowrap"><sup>10</sup>B</span>, so that for every 2 atoms of natural boron there is 1 added atom of <span class="nowrap"><sup>10</sup>B</span>. Calculate the relative atomic mass of boron in the enriched sample, to two decimal places. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>천연 붕소에는 <span class=\"nowrap\"><sup>10</sup>B</span>가 19.9%, <span class=\"nowrap\"><sup>11</sup>B</span>가 80.1% 들어 있어요. 천연 붕소에 순수한 <span class=\"nowrap\"><sup>10</sup>B</span>를 섞어서, 천연 붕소 원자 2개마다 추가한 <span class=\"nowrap\"><sup>10</sup>B</span> 원자가 1개 있도록 농축 시료를 만들어요. 농축 시료에서 붕소의 상대 원자 질량을 소수점 아래 2자리까지 계산하시오. 동위 원소의 질량으로 질량수를 그대로 쓰세요.</p>",
      hints: [
        // EN: Work with a convenient number of atoms: 200 atoms of natural boron and 100 added atoms of <sup>10</sup>B.
        "다루기 쉬운 원자 수로 생각해요: 천연 붕소 원자 200개와 추가한 <sup>10</sup>B 원자 100개.",
        // EN: Of the 200 natural atoms, 19.9% are <sup>10</sup>B. Find the total number of <sup>10</sup>B atoms out of 300.
        "천연 원자 200개 중 19.9%가 <sup>10</sup>B예요. 300개 중 <sup>10</sup>B 원자의 총수를 구해요.",
        // EN: Then use the weighted mean with the new abundances.
        "그다음 새 존재 비율로 가중 평균을 구해요.",
      ],
      // EN: <p>Take 200 atoms of natural boron and 100 atoms of added <span class="nowrap"><sup>10</sup>B</span>, 300 atoms in total.</p><div class="worked__math"><sup>10</sup>B atoms = (19.9 / 100 × 200) + 100 = 39.8 + 100 = 139.8</div><div class="worked__math"><sup>11</sup>B atoms = 300 − 139.8 = 160.2</div><div class="worked__math"><i>A</i><sub>r</sub> = (10 × 139.8 + 11 × 160.2) / 300 = (1398.0 + 1762.2) / 300</div><div class="worked__math"><i>A</i><sub>r</sub> = 3160.2 / 300 = 10.534 = <b>10.53</b> (2 d.p.)</div><p>This is lower than the data booklet value of 10.81, as expected: the sample has extra atoms of the lighter isotope.</p>
      solution: "<p>천연 붕소 원자 200개와 추가한 <span class=\"nowrap\"><sup>10</sup>B</span> 원자 100개, 모두 300개로 생각해요.</p><div class=\"worked__math\"><sup>10</sup>B 원자 수 = (19.9 / 100 × 200) + 100 = 39.8 + 100 = 139.8</div><div class=\"worked__math\"><sup>11</sup>B 원자 수 = 300 − 139.8 = 160.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (10 × 139.8 + 11 × 160.2) / 300 = (1398.0 + 1762.2) / 300</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 3160.2 / 300 = 10.534 = <b>10.53</b> (소수점 아래 2자리)</div><p>예상대로 데이터 부클릿 값 10.81보다 작아요. 시료에 가벼운 동위 원소의 원자가 더 들어 있기 때문이에요.</p>",
    },

    // ── s1-2-q023 · mcq · foundation · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q023": {
      // EN: <p>The mass spectrum of an element shows three peaks, all from ions with a 1+ charge. What does the <strong>height</strong> of each peak show?</p>
      stem: "<p>어떤 원소의 질량 스펙트럼에 봉우리가 3개 있고, 모두 1+ 전하를 띤 이온에서 나온 거예요. 각 봉우리의 <strong>높이</strong>는 무엇을 나타내나요?</p>",
      options: [
        // EN: The mass of that isotope
        "그 동위 원소의 질량",
        // EN: The relative abundance of that isotope
        "그 동위 원소의 상대 존재 비율",
        // EN: The number of neutrons in that isotope
        "그 동위 원소의 중성자 수",
        // EN: The charge on that ion
        "그 이온의 전하",
      ],
      hints: [
        // EN: What is plotted on the vertical axis of a mass spectrum?
        "질량 스펙트럼의 세로축에는 무엇이 표시되나요?",
      ],
      // EN: <p>The vertical axis is relative abundance, so the height of a peak shows how much of that isotope is present. The position on the horizontal axis (<i>m/z</i>) gives the mass of the isotope. Three peaks means three isotopes.</p>
      solution: "<p>세로축은 상대 존재 비율이므로, 봉우리의 높이는 그 동위 원소가 얼마나 들어 있는지를 나타내요. 가로축(<i>m/z</i>)의 위치는 동위 원소의 질량을 알려 줘요. 봉우리가 3개이면 동위 원소가 3가지예요.</p>",
      misconception: {
        // EN (option A): The mass is read from the position of the peak on the horizontal <i>m/z</i> axis, not from its height.
        "0": "질량은 봉우리의 높이가 아니라 가로축(<i>m/z</i>)에서 봉우리의 위치로 읽어요.",
        // EN (option C): You can work out the neutrons from the position of the peak (mass number minus atomic number), not from its height.
        "2": "중성자 수는 봉우리의 높이가 아니라 위치로 구할 수 있어요(질량수 빼기 원자 번호).",
        // EN (option D): The charge is part of the <i>m/z</i> value on the horizontal axis. Here every ion is 1+.
        "3": "전하는 가로축의 <i>m/z</i> 값에 포함되어 있어요. 여기서는 모든 이온이 1+예요.",
      },
    },

    // ── s1-2-q024 · numeric · foundation · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q024": {
      // EN: <p>The mass spectrum of a sample of lithium has two peaks: <i>m/z</i> 6 with a relative abundance of 7.6%, and <i>m/z</i> 7 with a relative abundance of 92.4%. Calculate the relative atomic mass of lithium in this sample, to two decimal places.</p>
      stem: "<p>어떤 리튬 시료의 질량 스펙트럼에는 봉우리가 2개 있어요: 상대 존재 비율 7.6%인 <i>m/z</i> 6과 상대 존재 비율 92.4%인 <i>m/z</i> 7. 이 시료에서 리튬의 상대 원자 질량을 소수점 아래 2자리까지 계산하시오.</p>",
      hints: [
        // EN: The heights are percentages and add up to 100, so this is the usual weighted mean.
        "높이가 백분율이고 합이 100이므로 보통의 가중 평균으로 구하면 돼요.",
        // EN: <span class="mono">(6 × 7.6 + 7 × 92.4) ÷ 100</span>
        "<span class=\"mono\">(6 × 7.6 + 7 × 92.4) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">6 × 7.6 = 45.6</div><div class="worked__math">7 × 92.4 = 646.8</div><div class="worked__math"><i>A</i><sub>r</sub> = (45.6 + 646.8) / 100 = 692.4 / 100 = 6.924 = <b>6.92</b> (2 d.p.)</div><p>The data booklet gives 6.94. Write the value you calculated from the spectrum.</p>
      solution: "<div class=\"worked__math\">6 × 7.6 = 45.6</div><div class=\"worked__math\">7 × 92.4 = 646.8</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = (45.6 + 646.8) / 100 = 692.4 / 100 = 6.924 = <b>6.92</b> (소수점 아래 2자리)</div><p>데이터 부클릿 값은 6.94예요. 스펙트럼으로 계산한 값을 쓰세요.</p>",
    },

    // ── s1-2-q025 · numeric · exam · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q025": {
      // EN: <p>The mass spectrum of a sample of copper has two peaks: <i>m/z</i> 63 with a relative abundance of 100.0, and <i>m/z</i> 65 with a relative abundance of 44.6. Calculate the relative atomic mass of copper in this sample, to two decimal places.</p>
      stem: "<p>어떤 구리 시료의 질량 스펙트럼에는 봉우리가 2개 있어요: 상대 존재 비율 100.0인 <i>m/z</i> 63과 상대 존재 비율 44.6인 <i>m/z</i> 65. 이 시료에서 구리의 상대 원자 질량을 소수점 아래 2자리까지 계산하시오.</p>",
      hints: [
        // EN: Add the two peak heights. Is the total 100?
        "두 봉우리의 높이를 더해 봐요. 합이 100인가요?",
        // EN: <span class="mono">(63 × 100.0 + 65 × 44.6) ÷ (100.0 + 44.6)</span>
        "<span class=\"mono\">(63 × 100.0 + 65 × 44.6) ÷ (100.0 + 44.6)</span>",
      ],
      // EN: <div class="worked__math">total height = 100.0 + 44.6 = 144.6</div><div class="worked__math">63 × 100.0 + 65 × 44.6 = 6300.0 + 2899.0 = 9199.0</div><div class="worked__math"><i>A</i><sub>r</sub> = 9199.0 / 144.6 = 63.6168… = <b>63.62</b> (2 d.p.)</div><p>The heights do not add up to 100, so divide by their total. The data booklet value, 63.55, does not score: the question asks for the value from this spectrum.</p>
      solution: "<div class=\"worked__math\">전체 높이 = 100.0 + 44.6 = 144.6</div><div class=\"worked__math\">63 × 100.0 + 65 × 44.6 = 6300.0 + 2899.0 = 9199.0</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 9199.0 / 144.6 = 63.6168… = <b>63.62</b> (소수점 아래 2자리)</div><p>높이의 합이 100이 아니므로 높이의 합으로 나눠요. 데이터 부클릿 값 63.55는 점수를 받을 수 없어요. 문제는 이 스펙트럼으로 구한 값을 묻고 있어요.</p>",
    },

    // ── s1-2-q026 · mcq · exam · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q026": {
      // EN: <p>The mass spectrum of an element has two peaks. The peak at <i>m/z</i> 10 has a height of 1 unit and the peak at <i>m/z</i> 11 has a height of 4 units. What is the relative atomic mass of the element?</p>
      stem: "<p>어떤 원소의 질량 스펙트럼에 봉우리가 2개 있어요. <i>m/z</i> 10의 봉우리는 높이가 1단위이고 <i>m/z</i> 11의 봉우리는 높이가 4단위예요. 이 원소의 상대 원자 질량은 얼마인가요?</p>",
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
        "높이의 합은 100이 아니라 5예요. 5로 나눠요.",
        // EN: <span class="mono">(10 × 1 + 11 × 4) ÷ (1 + 4)</span>
        "<span class=\"mono\">(10 × 1 + 11 × 4) ÷ (1 + 4)</span>",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>r</sub> = (10 × 1 + 11 × 4) / (1 + 4) = (10 + 44) / 5 = 54 / 5 = <b>10.8</b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>r</sub> = (10 × 1 + 11 × 4) / (1 + 4) = (10 + 44) / 5 = 54 / 5 = <b>10.8</b></div>",
      misconception: {
        // EN (option A): You swapped the heights. 10.2 would be right if the peak at 10 were the taller one.
        "0": "높이를 서로 바꿨어요. 10.2는 10의 봉우리가 더 높을 때 맞는 값이에요.",
        // EN (option B): 10.5 is the simple average of 10 and 11. The peaks are not the same height, so the isotopes must be weighted.
        "1": "10.5는 10과 11의 단순 평균이에요. 봉우리 높이가 다르므로 동위 원소에 가중치를 줘야 해요.",
        // EN (option D): 11.0 is the mass of the more abundant isotope. The atoms of mass 10 pull the average down a little.
        "3": "11.0은 더 많이 존재하는 동위 원소의 질량이에요. 질량 10인 원자가 평균을 조금 끌어내려요.",
      },
    },

    // ── s1-2-q027 · short · exam · AHL · Structure 1.2.3 · 2 marks
    "s1-2-q027": {
      // EN: <p>Bromine has two isotopes, <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span>, in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has peaks at <i>m/z</i> 158, 160 and 162 with heights in the ratio 1 : 2 : 1. Explain why there are three peaks and why the middle peak is the tallest.</p>
      stem: "<p>브로민에는 동위 원소 <span class=\"nowrap\"><sup>79</sup>Br</span>와 <span class=\"nowrap\"><sup>81</sup>Br</span>가 거의 같은 비율로 존재해요. 브로민(<span class=\"chem\">Br2</span>)의 질량 스펙트럼에는 <i>m/z</i> 158, 160, 162에 봉우리가 있고, 높이의 비는 1 : 2 : 1이에요. 봉우리가 3개인 이유와 가운데 봉우리가 가장 높은 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Each molecule has two atoms. List every way of choosing them from the two isotopes, and add up the masses.
        "분자 하나에는 원자가 두 개 있어요. 두 동위 원소에서 원자를 고르는 모든 경우를 나열하고 질량을 더해 봐요.",
        // EN: Think of tossing two coins. Why is “one head and one tail” more likely than “two heads”?
        "동전 두 개를 던진다고 생각해 봐요. 왜 ‘앞면 하나, 뒷면 하나’가 ‘앞면 두 개’보다 더 잘 나올까요?",
      ],
      // EN: <p>The three peaks are from the three possible combinations of isotopes in a <span class="chem">Br2+</span> ion: <span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>79</sup>Br</span> (79 + 79 = 158), <span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> (79 + 81 = 160) and <span class="nowrap"><sup>81</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> (81 + 81 = 162).</p><p>The mixed molecule can form in two ways (<span class="nowrap"><sup>79</sup>Br</span>–<span class="nowrap"><sup>81</sup>Br</span> or <span class="nowrap"><sup>81</sup>Br</span>–<span class="nowrap"><sup>79</sup>Br</span>), so it is twice as likely as either of the others. Chance: ½ × ½ = ¼, 2 × ½ × ½ = ½, ½ × ½ = ¼.</p>
      answer: "<p>세 봉우리는 <span class=\"chem\">Br2+</span> 이온에서 가능한 동위 원소 조합 3가지에서 나와요: <span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>79</sup>Br</span> (79 + 79 = 158), <span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span> (79 + 81 = 160), <span class=\"nowrap\"><sup>81</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span> (81 + 81 = 162).</p><p>섞인 분자는 두 가지 방법(<span class=\"nowrap\"><sup>79</sup>Br</span>–<span class=\"nowrap\"><sup>81</sup>Br</span> 또는 <span class=\"nowrap\"><sup>81</sup>Br</span>–<span class=\"nowrap\"><sup>79</sup>Br</span>)으로 만들어질 수 있으므로, 다른 두 조합 각각보다 두 배 더 잘 생겨요. 확률: ½ × ½ = ¼, 2 × ½ × ½ = ½, ½ × ½ = ¼.</p>",
      markscheme: [
        // EN: Peaks identified with the isotope combinations: 158 is two <sup>79</sup>Br, 160 is one <sup>79</sup>Br and one <sup>81</sup>Br, 162 is two <sup>81</sup>Br.
        "봉우리를 동위 원소 조합과 연결함: 158은 <sup>79</sup>Br 두 개, 160은 <sup>79</sup>Br 하나와 <sup>81</sup>Br 하나, 162는 <sup>81</sup>Br 두 개.",
        // EN: The mixed combination can form in two ways / is twice as probable (as each of the others).
        "섞인 조합은 두 가지 방법으로 만들어질 수 있음 / (다른 조합 각각보다) 확률이 두 배임.",
      ],
    },

    // ── s1-2-q028 · numeric · challenge · AHL · Structure 1.2.3 · 3 marks
    "s1-2-q028": {
      // EN: <p>The table gives the peaks in the mass spectrum of a sample of germanium.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><i>m/z</i></th><th scope="col" class="num">Relative abundance</th></tr></thead><tbody><tr><th scope="row">70</th><td class="num">56.4</td></tr><tr><th scope="row">72</th><td class="num">75.2</td></tr><tr><th scope="row">73</th><td class="num">21.2</td></tr><tr><th scope="row">74</th><td class="num">100.0</td></tr><tr><th scope="row">76</th><td class="num">21.2</td></tr></tbody></table></div><p>Calculate the relative atomic mass of germanium in this sample, to two decimal places.</p>
      stem: "<p>표는 어떤 저마늄 시료의 질량 스펙트럼에 나타난 봉우리예요.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><i>m/z</i></th><th scope=\"col\" class=\"num\">상대 존재 비율</th></tr></thead><tbody><tr><th scope=\"row\">70</th><td class=\"num\">56.4</td></tr><tr><th scope=\"row\">72</th><td class=\"num\">75.2</td></tr><tr><th scope=\"row\">73</th><td class=\"num\">21.2</td></tr><tr><th scope=\"row\">74</th><td class=\"num\">100.0</td></tr><tr><th scope=\"row\">76</th><td class=\"num\">21.2</td></tr></tbody></table></div><p>이 시료에서 저마늄의 상대 원자 질량을 소수점 아래 2자리까지 계산하시오.</p>",
      hints: [
        // EN: Add up the five relative abundances first. The total is not 100.
        "먼저 상대 존재 비율 다섯 개를 모두 더해요. 합은 100이 아니에요.",
        // EN: Multiply each <i>m/z</i> by its relative abundance and add the five products.
        "각 <i>m/z</i>에 상대 존재 비율을 곱하고, 곱한 값 다섯 개를 더해요.",
        // EN: Divide the sum of the products by the total relative abundance.
        "곱의 합을 상대 존재 비율의 합으로 나눠요.",
      ],
      // EN: <div class="worked__math">total = 56.4 + 75.2 + 21.2 + 100.0 + 21.2 = 274.0</div><div class="worked__math">70 × 56.4 = 3948.0</div><div class="worked__math">72 × 75.2 = 5414.4</div><div class="worked__math">73 × 21.2 = 1547.6</div><div class="worked__math">74 × 100.0 = 7400.0</div><div class="worked__math">76 × 21.2 = 1611.2</div><div class="worked__math">sum = 3948.0 + 5414.4 + 1547.6 + 7400.0 + 1611.2 = 19921.2</div><div class="worked__math"><i>A</i><sub>r</sub> = 19921.2 / 274.0 = 72.7051… = <b>72.71</b> (2 d.p.)</div><p>Check: the answer lies between 70 and 76. The data booklet value, 72.63, is slightly different and does not score here.</p>
      solution: "<div class=\"worked__math\">합계 = 56.4 + 75.2 + 21.2 + 100.0 + 21.2 = 274.0</div><div class=\"worked__math\">70 × 56.4 = 3948.0</div><div class=\"worked__math\">72 × 75.2 = 5414.4</div><div class=\"worked__math\">73 × 21.2 = 1547.6</div><div class=\"worked__math\">74 × 100.0 = 7400.0</div><div class=\"worked__math\">76 × 21.2 = 1611.2</div><div class=\"worked__math\">곱의 합 = 3948.0 + 5414.4 + 1547.6 + 7400.0 + 1611.2 = 19921.2</div><div class=\"worked__math\"><i>A</i><sub>r</sub> = 19921.2 / 274.0 = 72.7051… = <b>72.71</b> (소수점 아래 2자리)</div><p>확인: 답은 70과 76 사이에 있어요. 데이터 부클릿 값 72.63은 조금 다르고, 여기서는 점수를 받을 수 없어요.</p>",
    },

    // ── s1-2-q029 · mcq · challenge · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q029": {
      // EN: <p>Chlorine has two isotopes, <span class="nowrap"><sup>35</sup>Cl</span> and <span class="nowrap"><sup>37</sup>Cl</span>, with abundances in the ratio 3 : 1. The mass spectrum of chlorine, <span class="chem">Cl2</span>, has peaks at <i>m/z</i> 70, 72 and 74. What is the ratio of the heights of these peaks, in that order?</p>
      stem: "<p>염소에는 동위 원소 <span class=\"nowrap\"><sup>35</sup>Cl</span>와 <span class=\"nowrap\"><sup>37</sup>Cl</span>가 3 : 1의 비로 존재해요. 염소(<span class=\"chem\">Cl2</span>)의 질량 스펙트럼에는 <i>m/z</i> 70, 72, 74에 봉우리가 있어요. 이 순서대로 봉우리 높이의 비는 얼마인가요?</p>",
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
        "원자 하나가 <sup>35</sup>Cl일 확률은 ¾이에요. <sup>37</sup>Cl일 확률은 ¼이에요.",
        // EN: A molecule has two atoms: multiply the two chances. Count the mixed molecule both ways round.
        "분자에는 원자가 두 개 있어요: 두 확률을 곱해요. 섞인 분자는 두 가지 순서를 모두 세요.",
      ],
      // EN: <div class="worked__math"><i>m/z</i> 70 (<sup>35</sup>Cl–<sup>35</sup>Cl): ¾ × ¾ = 9/16</div><div class="worked__math"><i>m/z</i> 72 (<sup>35</sup>Cl–<sup>37</sup>Cl, two ways): 2 × ¾ × ¼ = 6/16</div><div class="worked__math"><i>m/z</i> 74 (<sup>37</sup>Cl–<sup>37</sup>Cl): ¼ × ¼ = 1/16</div><p>Ratio of heights = <strong>9 : 6 : 1</strong>.</p>
      solution: "<div class=\"worked__math\"><i>m/z</i> 70 (<sup>35</sup>Cl–<sup>35</sup>Cl): ¾ × ¾ = 9/16</div><div class=\"worked__math\"><i>m/z</i> 72 (<sup>35</sup>Cl–<sup>37</sup>Cl, 두 가지 방법): 2 × ¾ × ¼ = 6/16</div><div class=\"worked__math\"><i>m/z</i> 74 (<sup>37</sup>Cl–<sup>37</sup>Cl): ¼ × ¼ = 1/16</div><p>높이의 비 = <strong>9 : 6 : 1</strong>.</p>",
      misconception: {
        // EN (option A): 1 : 2 : 1 is the pattern when the two isotopes are equally abundant, as in bromine. Here <sup>35</sup>Cl is three times as common.
        "0": "1 : 2 : 1은 브로민처럼 두 동위 원소의 존재 비율이 같을 때의 무늬예요. 여기서는 <sup>35</sup>Cl이 세 배 더 흔해요.",
        // EN (option B): The chances have to be multiplied, one factor for each atom in the molecule: ¾ × ¾ for the peak at 70, and so on.
        "1": "확률은 곱해야 해요. 분자 속 원자 하나마다 인수 하나씩: 70의 봉우리는 ¾ × ¾, 나머지도 마찬가지예요.",
        // EN (option C): Nearly right, but the mixed molecule can form in two ways (<sup>35</sup>Cl–<sup>37</sup>Cl or <sup>37</sup>Cl–<sup>35</sup>Cl), so its chance is 2 × ¾ × ¼.
        "2": "거의 맞았지만, 섞인 분자는 두 가지 방법(<sup>35</sup>Cl–<sup>37</sup>Cl 또는 <sup>37</sup>Cl–<sup>35</sup>Cl)으로 만들어질 수 있으므로 확률은 2 × ¾ × ¼예요.",
      },
    },

    // ── s1-2-q030 · numeric · challenge · AHL · Structure 1.2.3 · 3 marks
    "s1-2-q030": {
      // EN: <p>An element has two isotopes, with mass numbers 85 and 87, and a relative atomic mass of 85.47. In its mass spectrum the peak at <i>m/z</i> 85 is the taller one and is given a relative abundance of 100. Calculate the relative abundance of the peak at <i>m/z</i> 87 on the same scale. Use the mass numbers as the masses of the isotopes.</p>
      stem: "<p>어떤 원소에는 질량수가 85와 87인 동위 원소가 2가지 있고, 상대 원자 질량은 85.47이에요. 질량 스펙트럼에서 <i>m/z</i> 85의 봉우리가 더 높고, 이 봉우리의 상대 존재 비율을 100으로 정해요. 같은 기준에서 <i>m/z</i> 87 봉우리의 상대 존재 비율을 계산하시오. 동위 원소의 질량으로 질량수를 그대로 쓰세요.</p>",
      hints: [
        // EN: First find the percentage abundance of each isotope from the relative atomic mass.
        "먼저 상대 원자 질량으로 각 동위 원소의 존재 백분율을 구해요.",
        // EN: <span class="mono">85x + 87(100 − x) = 8547</span> gives the percentage of the isotope of mass 85.
        "<span class=\"mono\">85x + 87(100 − x) = 8547</span>을 풀면 질량 85인 동위 원소의 백분율이 나와요.",
        // EN: Then scale: if the taller peak is 100, the other is (its percentage ÷ the percentage of the taller one) × 100.
        "그다음 비율을 맞춰요: 더 높은 봉우리가 100이면, 다른 봉우리는 (그 백분율 ÷ 더 높은 봉우리의 백분율) × 100이에요.",
      ],
      // EN: <div class="worked__math">85<i>x</i> + 87(100 − <i>x</i>) = 85.47 × 100 = 8547</div><div class="worked__math">8700 − 2<i>x</i> = 8547</div><div class="worked__math"><i>x</i> = 153 / 2 = 76.5% (mass 85), so mass 87 is 23.5%</div><div class="worked__math">relative abundance of the peak at 87 = 23.5 / 76.5 × 100 = 30.71… = <b>30.7</b></div><p>Check: (85 × 100 + 87 × 30.7) / 130.7 = 85.47.</p>
      solution: "<div class=\"worked__math\">85<i>x</i> + 87(100 − <i>x</i>) = 85.47 × 100 = 8547</div><div class=\"worked__math\">8700 − 2<i>x</i> = 8547</div><div class=\"worked__math\"><i>x</i> = 153 / 2 = 76.5% (질량 85), 따라서 질량 87은 23.5%</div><div class=\"worked__math\">87 봉우리의 상대 존재 비율 = 23.5 / 76.5 × 100 = 30.71… = <b>30.7</b></div><p>확인: (85 × 100 + 87 × 30.7) / 130.7 = 85.47.</p>",
    },

    // ── s1-2-q031 · mcq · foundation · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q031": {
      // EN: <p>The mass spectrum of a sample of magnesium has a peak at <i>m/z</i> 25. Which species causes this peak?</p>
      stem: "<p>어떤 마그네슘 시료의 질량 스펙트럼에 <i>m/z</i> 25의 봉우리가 있어요. 이 봉우리를 만드는 화학종은 어느 것인가요?</p>",
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
        "<i>m/z</i>의 ‘z’는 무엇을 나타내나요?",
        // EN: The particles detected are ions. Are they positive or negative?
        "검출되는 입자는 이온이에요. 양이온일까요, 음이온일까요?",
      ],
      // EN: <p>The particles detected are positive ions. For a peak at <i>m/z</i> 25 the ion has mass 25 and a 1+ charge: <span class="nowrap"><sup>25</sup>Mg<sup>+</sup></span>. Always include the charge when you name the species that causes a peak.</p>
      solution: "<p>검출되는 입자는 양이온이에요. <i>m/z</i> 25의 봉우리를 만드는 이온은 질량이 25이고 전하가 1+예요: <span class=\"nowrap\"><sup>25</sup>Mg<sup>+</sup></span>. 봉우리를 만드는 화학종을 쓸 때는 항상 전하를 포함하세요.</p>",
      misconception: {
        // EN (option A): The isotope is right, but the charge is missing. A mass spectrometer detects positive ions, and in an exam the mark is lost without the +.
        "0": "동위 원소는 맞지만 전하가 빠졌어요. 질량 분석기는 양이온을 검출하고, 시험에서 +가 없으면 점수를 잃어요.",
        // EN (option C): The particles detected in a mass spectrometer are positive ions, not negative ions.
        "2": "질량 분석기에서 검출되는 입자는 음이온이 아니라 양이온이에요.",
        // EN (option D): A 2+ ion of mass 25 has <i>m/z</i> = 25 ÷ 2 = 12.5, so it would not give a peak at 25.
        "3": "질량 25인 2+ 이온은 <i>m/z</i> = 25 ÷ 2 = 12.5이므로 25에 봉우리를 만들지 않아요.",
      },
    },

    // ── s1-2-q032 · mcq · exam · AHL · Structure 1.2.3 · 1 mark
    "s1-2-q032": {
      // EN: <p>Bromine has two isotopes, <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span>, in almost equal abundance. The mass spectrum of bromine, <span class="chem">Br2</span>, has three peaks near <i>m/z</i> 160. It also has exactly two more peaks, at <i>m/z</i> 79 and 81, with almost equal heights. Which species cause the peaks at <i>m/z</i> 79 and 81?</p>
      stem: "<p>브로민에는 동위 원소 <span class=\"nowrap\"><sup>79</sup>Br</span>와 <span class=\"nowrap\"><sup>81</sup>Br</span>가 거의 같은 비율로 존재해요. 브로민(<span class=\"chem\">Br2</span>)의 질량 스펙트럼에는 <i>m/z</i> 160 근처에 봉우리가 3개 있어요. 또 <i>m/z</i> 79와 81에 높이가 거의 같은 봉우리가 정확히 2개 더 있어요. <i>m/z</i> 79와 81의 봉우리를 만드는 화학종은 무엇인가요?</p>",
      options: [
        // EN: <span class="nowrap"><sup>79</sup>Br</span> and <span class="nowrap"><sup>81</sup>Br</span> atoms
        "<span class=\"nowrap\"><sup>79</sup>Br</span> 원자와 <span class=\"nowrap\"><sup>81</sup>Br</span> 원자",
        // EN: <span class="nowrap"><sup>79</sup>Br<sup>+</sup></span> and <span class="nowrap"><sup>81</sup>Br<sup>+</sup></span> ions
        "<span class=\"nowrap\"><sup>79</sup>Br<sup>+</sup></span> 이온과 <span class=\"nowrap\"><sup>81</sup>Br<sup>+</sup></span> 이온",
        // EN: <span class="nowrap"><sup>79</sup>Br<sup>−</sup></span> and <span class="nowrap"><sup>81</sup>Br<sup>−</sup></span> ions
        "<span class=\"nowrap\"><sup>79</sup>Br<sup>−</sup></span> 이온과 <span class=\"nowrap\"><sup>81</sup>Br<sup>−</sup></span> 이온",
        // EN: <span class="chem">Br2</span> molecules that have lost two electrons
        "전자 두 개를 잃은 <span class=\"chem\">Br2</span> 분자",
      ],
      hints: [
        // EN: Compare 79 and 81 with the mass numbers of the two isotopes.
        "79와 81을 두 동위 원소의 질량수와 비교해 봐요.",
        // EN: Some molecules break into single atoms in the instrument. What charge must a particle have to be detected?
        "분석기 안에서 어떤 분자는 원자 하나하나로 쪼개져요. 입자가 검출되려면 어떤 전하를 띠어야 할까요?",
      ],
      // EN: <p>Some <span class="chem">Br2</span> molecules break into single atoms in the instrument. The atoms are detected as positive ions: <span class="nowrap"><sup>79</sup>Br<sup>+</sup></span> at <i>m/z</i> 79 and <span class="nowrap"><sup>81</sup>Br<sup>+</sup></span> at <i>m/z</i> 81. The two isotopes are almost equally abundant, so the two peaks have almost equal heights.</p>
      solution: "<p>분석기 안에서 일부 <span class=\"chem\">Br2</span> 분자는 원자 하나하나로 쪼개져요. 이 원자들은 양이온으로 검출돼요: <i>m/z</i> 79의 <span class=\"nowrap\"><sup>79</sup>Br<sup>+</sup></span>와 <i>m/z</i> 81의 <span class=\"nowrap\"><sup>81</sup>Br<sup>+</sup></span>. 두 동위 원소의 존재 비율이 거의 같으므로 두 봉우리의 높이도 거의 같아요.</p>",
      misconception: {
        // EN (option A): The isotopes are right, but neutral atoms are not detected. The species must be positive ions, so the + is needed.
        "0": "동위 원소는 맞지만 중성 원자는 검출되지 않아요. 화학종은 양이온이어야 하므로 +가 필요해요.",
        // EN (option C): Bromine forms bromide ions in its compounds, but the particles detected in a mass spectrometer are positive ions.
        "2": "브로민은 화합물 속에서 브로민화 이온을 만들지만, 질량 분석기에서 검출되는 입자는 양이온이에요.",
        // EN (option D): Ions with a 2+ charge would appear at half their mass: 158 ÷ 2 = 79, 160 ÷ 2 = 80 and 162 ÷ 2 = 81. That would give three peaks, with the tallest at 80, not two equal peaks.
        "3": "2+ 전하를 띤 이온은 질량의 절반 위치에 나타나요: 158 ÷ 2 = 79, 160 ÷ 2 = 80, 162 ÷ 2 = 81. 그러면 높이가 같은 봉우리 2개가 아니라, 80이 가장 높은 봉우리 3개가 나와야 해요.",
      },
    },

  }
});
