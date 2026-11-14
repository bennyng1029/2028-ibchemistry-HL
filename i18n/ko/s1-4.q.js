/* s1-4.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 's1-4.q', {
  questions: {

    // ── s1-4-q001 · mcq · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q001": {
      // EN: <p>Which statement describes <strong>one mole</strong> of a substance?</p>
      stem: "<p>물질 <strong>1몰</strong>을 바르게 설명한 것은 무엇인가요?</p>",
      options: [
        // EN: It has a mass of 6.02 × 10<sup>23</sup> <span class="unit">g</span>.
        "질량이 6.02 × 10<sup>23</sup> <span class=\"unit\">g</span>이에요.",
        // EN: It contains the number of elementary entities given by the Avogadro constant.
        "아보가드로 상수만큼의 기본 입자를 포함해요.",
        // EN: It is the mass of one atom compared with an atom of carbon-12.
        "원자 1개의 질량을 탄소-12 원자와 비교한 값이에요.",
        // EN: It is 12 <span class="unit">g</span> of any element.
        "어떤 원소든 12 <span class=\"unit\">g</span>이에요.",
      ],
      hints: [
        // EN: The mole is the SI unit of <em>amount of substance</em>. It is a counting unit, like a dozen, but much bigger.
        "몰은 <em>물질의 양</em>의 SI 단위예요. 1다스처럼 개수를 세는 단위지만 훨씬 커요.",
        // EN: The count is fixed by a constant in your data booklet. Its symbol is <i>N</i><sub>A</sub>.
        "그 개수는 데이터 부클릿에 있는 상수로 정해져요. 기호는 <i>N</i><sub>A</sub>예요.",
      ],
      // EN: <p>One mole contains exactly the number of elementary entities given by the Avogadro constant, <i>N</i><sub>A</sub> = 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span>. The entities can be atoms, molecules, ions, electrons or any specified group of particles.</p>
      solution: "<p>1몰에는 아보가드로 상수 <i>N</i><sub>A</sub> = 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span>만큼의 기본 입자가 정확히 들어 있어요. 기본 입자는 원자, 분자, 이온, 전자일 수도 있고, 정해 준 입자 묶음일 수도 있어요.</p>",
      misconception: {
        // EN (option A): 6.02 × 10<sup>23</sup> is a number of particles, not a mass in grams. The mass of one mole is the molar mass, and it is different for each substance.
        "0": "6.02 × 10<sup>23</sup>은 입자의 개수이지, 그램 단위의 질량이 아니에요. 1몰의 질량은 몰 질량이고, 물질마다 달라요.",
        // EN (option C): That describes relative atomic mass. The mole counts particles. It does not compare masses.
        "2": "그것은 상대 원자 질량의 설명이에요. 몰은 입자를 세는 단위예요. 질량을 비교하지 않아요.",
        // EN (option D): 12 <span class="unit">g</span> is one mole only for carbon-12. One mole of another element has a different mass.
        "3": "12 <span class=\"unit\">g</span>이 1몰인 것은 탄소-12뿐이에요. 다른 원소 1몰은 질량이 달라요.",
      },
    },

    // ── s1-4-q002 · numeric · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q002": {
      // EN: <p>How many molecules are there in 0.450 <span class="unit">mol</span> of water, <span class="chem">H2O</span>? Give your answer to 3 significant figures.</p>
      stem: "<p>물(<span class=\"chem\">H2O</span>) 0.450 <span class=\"unit\">mol</span>에는 분자가 몇 개 있나요? 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: Use the relationship between number of particles and amount: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "입자 수와 물질의 양 사이의 관계를 이용하세요: <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.",
        // EN: Going from moles to particles makes the number much bigger, so you multiply by 6.02 × 10<sup>23</sup>.
        "몰에서 입자 수로 가면 수가 훨씬 커지므로 6.02 × 10<sup>23</sup>을 곱해요.",
      ],
      // EN: <div class="worked__math"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></div><div class="worked__math"><i>N</i> = 0.450 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></div><div class="worked__math"><i>N</i> = 2.709 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>2.71 × 10<sup>23</sup> molecules</strong></div><p>Check the size: you have less than one mole, so the answer must be less than 6.02 × 10<sup>23</sup>. If you divided instead of multiplying you would get a number far smaller than 1, which cannot be a count of molecules.</p>
      solution: "<div class=\"worked__math\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></div><div class=\"worked__math\"><i>N</i> = 0.450 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></div><div class=\"worked__math\"><i>N</i> = 2.709 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>분자 2.71 × 10<sup>23</sup>개</strong></div><p>크기를 확인해 봐요. 1몰보다 적으므로 답은 6.02 × 10<sup>23</sup>보다 작아야 해요. 곱하지 않고 나누었다면 1보다 훨씬 작은 수가 나오는데, 이런 수는 분자의 개수가 될 수 없어요.</p>",
    },

    // ── s1-4-q003 · numeric · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q003": {
      // EN: <p>A sample of water contains 9.03 × 10<sup>22</sup> molecules. Calculate the amount of water, in <span class="unit">mol</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>물 시료에 분자가 9.03 × 10<sup>22</sup>개 들어 있어요. 물의 양을 <span class=\"unit\">mol</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: Rearrange <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> to make <i>n</i> the subject.
        "<span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>를 <i>n</i>에 대한 식으로 바꾸세요.",
        // EN: Going from particles to moles makes the number much smaller, so you divide by 6.02 × 10<sup>23</sup>. Compare the powers of ten first: 10<sup>22</sup> is less than 10<sup>23</sup>, so the answer is less than 1 mol.
        "입자 수에서 몰로 가면 수가 훨씬 작아지므로 6.02 × 10<sup>23</sup>으로 나눠요. 먼저 10의 거듭제곱을 비교해 봐요: 10<sup>22</sup>는 10<sup>23</sup>보다 작으므로 답은 1 mol보다 작아요.",
      ],
      // EN: <div class="worked__math"><i>n</i> = <span class="frac"><span><i>N</i></span><span><i>N</i><sub>A</sub></span></span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>9.03 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span></div><div class="worked__math"><i>n</i> = <strong>0.150 <span class="unit">mol</span></strong></div><p>If you multiplied by <i>N</i><sub>A</sub> instead, you would get about 5 × 10<sup>46</sup>, which is not a sensible amount in moles.</p>
      solution: "<div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span><i>N</i></span><span><i>N</i><sub>A</sub></span></span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>9.03 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span></div><div class=\"worked__math\"><i>n</i> = <strong>0.150 <span class=\"unit\">mol</span></strong></div><p>대신 <i>N</i><sub>A</sub>를 곱하면 약 5 × 10<sup>46</sup>이 나오는데, 몰 단위의 양으로는 말이 안 되는 값이에요.</p>",
    },

    // ── s1-4-q004 · mcq · exam · SL · Structure 1.4.1 · 1 mark
    "s1-4-q004": {
      // EN: <p>What is the total number of <strong>atoms</strong> in 0.500 <span class="unit">mol</span> of ammonia, <span class="chem">NH3</span>?</p>
      stem: "<p>암모니아(<span class=\"chem\">NH3</span>) 0.500 <span class=\"unit\">mol</span>에 들어 있는 <strong>원자</strong>의 총수는 얼마인가요?</p>",
      options: [
        // EN: 3.01 × 10<sup>23</sup>
        "3.01 × 10<sup>23</sup>",
        // EN: 9.03 × 10<sup>23</sup>
        "9.03 × 10<sup>23</sup>",
        // EN: 1.20 × 10<sup>24</sup>
        "1.20 × 10<sup>24</sup>",
        // EN: 3.32 × 10<sup>−24</sup>
        "3.32 × 10<sup>−24</sup>",
      ],
      hints: [
        // EN: First find the number of molecules with <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "먼저 <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>로 분자 수를 구하세요.",
        // EN: Then ask: how many atoms are in one molecule of <span class="chem">NH3</span>? Multiply by that number.
        "그다음 생각해 봐요: <span class=\"chem\">NH3</span> 분자 1개에는 원자가 몇 개 있나요? 그 수를 곱하세요.",
      ],
      // EN: <div class="worked__math"><i>N</i> = 0.500 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 3.01 × 10<sup>23</sup> molecules</div><p>Each <span class="chem">NH3</span> molecule contains 1 N atom and 3 H atoms: 4 atoms.</p><div class="worked__math"><i>N</i>(atoms) = 4 × 3.01 × 10<sup>23</sup><br>&nbsp;&nbsp;= 1.204 × 10<sup>24</sup><br>&nbsp;&nbsp;= <strong>1.20 × 10<sup>24</sup></strong></div>
      solution: "<div class=\"worked__math\"><i>N</i> = 0.500 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 분자 3.01 × 10<sup>23</sup>개</div><p><span class=\"chem\">NH3</span> 분자 1개에는 N 원자 1개와 H 원자 3개, 모두 4개의 원자가 있어요.</p><div class=\"worked__math\"><i>N</i>(원자) = 4 × 3.01 × 10<sup>23</sup><br>&nbsp;&nbsp;= 1.204 × 10<sup>24</sup><br>&nbsp;&nbsp;= <strong>1.20 × 10<sup>24</sup></strong></div>",
      misconception: {
        // EN (option A): This is the number of <span class="chem">NH3</span> <em>molecules</em> (0.500 × 6.02 × 10<sup>23</sup>). The question asks for atoms, and each molecule contains 4 atoms.
        "0": "이것은 <span class=\"chem\">NH3</span> <em>분자</em>의 수예요(0.500 × 6.02 × 10<sup>23</sup>). 문제는 원자 수를 묻고 있고, 분자 1개에는 원자가 4개 있어요.",
        // EN (option B): You multiplied by 3, so you counted only the hydrogen atoms. Each <span class="chem">NH3</span> molecule has 1 N atom and 3 H atoms: 4 atoms in total.
        "1": "3을 곱했으니 수소 원자만 센 거예요. <span class=\"chem\">NH3</span> 분자 1개에는 N 원자 1개와 H 원자 3개, 모두 4개의 원자가 있어요.",
        // EN (option D): You divided by the Avogadro constant instead of multiplying. A count of atoms in a visible sample must be a very large number.
        "3": "아보가드로 상수를 곱하지 않고 나누었어요. 눈에 보이는 양의 시료에 든 원자 수는 아주 큰 수여야 해요.",
      },
    },

    // ── s1-4-q005 · mcq · exam · SL · Structure 1.4.1 · 1 mark
    "s1-4-q005": {
      // EN: <p>What is the total number of <strong>ions</strong> in 0.20 <span class="unit">mol</span> of aluminium sulfate, <span class="chem">Al2(SO4)3</span>?</p>
      stem: "<p>황산 알루미늄(<span class=\"chem\">Al2(SO4)3</span>) 0.20 <span class=\"unit\">mol</span>에 들어 있는 <strong>이온</strong>의 총수는 얼마인가요?</p>",
      options: [
        // EN: 1.2 × 10<sup>23</sup>
        "1.2 × 10<sup>23</sup>",
        // EN: 2.4 × 10<sup>23</sup>
        "2.4 × 10<sup>23</sup>",
        // EN: 6.0 × 10<sup>23</sup>
        "6.0 × 10<sup>23</sup>",
        // EN: 2.0 × 10<sup>24</sup>
        "2.0 × 10<sup>24</sup>",
      ],
      hints: [
        // EN: Write the ions in one formula unit: how many <span class="chem">Al^3+</span> and how many <span class="chem">SO4^2-</span>?
        "화학식 단위 1개에 있는 이온을 써 보세요: <span class=\"chem\">Al^3+</span>는 몇 개, <span class=\"chem\">SO4^2-</span>는 몇 개인가요?",
        // EN: A polyatomic ion such as <span class="chem">SO4^2-</span> counts as one ion. Find the amount of ions in mol, then multiply by <i>N</i><sub>A</sub>.
        "<span class=\"chem\">SO4^2-</span> 같은 다원자 이온은 이온 1개로 세요. 이온의 양을 mol로 구한 다음 <i>N</i><sub>A</sub>를 곱하세요.",
      ],
      // EN: <p>One formula unit contains 2 <span class="chem">Al^3+</span> ions and 3 <span class="chem">SO4^2-</span> ions: 5 ions.</p><div class="worked__math"><i>n</i>(ions) = 5 × 0.20 <span class="unit">mol</span><br>&nbsp;&nbsp;= 1.0 <span class="unit">mol</span></div><div class="worked__math"><i>N</i>(ions) = 1.0 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>6.0 × 10<sup>23</sup></strong></div>
      solution: "<p>화학식 단위 1개에는 <span class=\"chem\">Al^3+</span> 이온 2개와 <span class=\"chem\">SO4^2-</span> 이온 3개, 모두 5개의 이온이 있어요.</p><div class=\"worked__math\"><i>n</i>(이온) = 5 × 0.20 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 1.0 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>N</i>(이온) = 1.0 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>6.0 × 10<sup>23</sup></strong></div>",
      misconception: {
        // EN (option A): This is the number of formula units (0.20 × 6.02 × 10<sup>23</sup>). Each formula unit contains more than one ion.
        "0": "이것은 화학식 단위의 수예요(0.20 × 6.02 × 10<sup>23</sup>). 화학식 단위 1개에는 이온이 1개보다 많이 들어 있어요.",
        // EN (option B): You counted 2 ions per formula unit, one kind of positive ion and one kind of negative ion. Use the subscripts: there are 2 <span class="chem">Al^3+</span> and 3 <span class="chem">SO4^2-</span>, which is 5 ions.
        "1": "화학식 단위 1개당 이온을 2개(양이온 한 종류, 음이온 한 종류)로 셌어요. 아래 첨자를 보세요: <span class=\"chem\">Al^3+</span> 2개와 <span class=\"chem\">SO4^2-</span> 3개, 모두 5개의 이온이에요.",
        // EN (option D): You counted all 17 <em>atoms</em> in the formula. A sulfate ion, <span class="chem">SO4^2-</span>, is one ion even though it contains 5 atoms.
        "3": "화학식에 있는 <em>원자</em> 17개를 모두 셌어요. 황산 이온 <span class=\"chem\">SO4^2-</span>은 원자 5개로 이루어져 있지만 이온 1개예요.",
      },
    },

    // ── s1-4-q006 · multi · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q006": {
      // EN: <p>Which statements about the mole are correct? Select <strong>all</strong> that apply.</p>
      stem: "<p>몰에 대한 설명으로 옳은 것을 <strong>모두</strong> 고르세요.</p>",
      options: [
        // EN: The mole is the SI unit of amount of substance.
        "몰은 물질의 양의 SI 단위예요.",
        // EN: One mole of any substance has a mass of 6.02 × 10<sup>23</sup> <span class="unit">g</span>.
        "어떤 물질이든 1몰의 질량은 6.02 × 10<sup>23</sup> <span class=\"unit\">g</span>이에요.",
        // EN: 1 <span class="unit">mol</span> of <span class="chem">H2O</span> molecules and 1 <span class="unit">mol</span> of <span class="chem">Fe</span> atoms contain the same number of particles.
        "<span class=\"chem\">H2O</span> 분자 1 <span class=\"unit\">mol</span>과 <span class=\"chem\">Fe</span> 원자 1 <span class=\"unit\">mol</span>에는 같은 수의 입자가 들어 있어요.",
        // EN: The Avogadro constant has the units <span class="unit">mol-1</span>.
        "아보가드로 상수의 단위는 <span class=\"unit\">mol-1</span>이에요.",
        // EN: 1 <span class="unit">mol</span> of <span class="chem">O2</span> molecules contains 6.02 × 10<sup>23</sup> oxygen atoms.
        "<span class=\"chem\">O2</span> 분자 1 <span class=\"unit\">mol</span>에는 산소 원자가 6.02 × 10<sup>23</sup>개 들어 있어요.",
      ],
      hints: [
        // EN: A mole is a fixed number of particles. Always ask: a mole of what?
        "몰은 정해진 수의 입자예요. 늘 물어보세요: 무엇의 몰인가?",
        // EN: For the last statement, count the atoms in one <span class="chem">O2</span> molecule.
        "마지막 설명은 <span class=\"chem\">O2</span> 분자 1개에 있는 원자 수를 세어 보세요.",
      ],
      // EN: <p>The mole is the SI unit of amount of substance. One mole of anything contains 6.02 × 10<sup>23</sup> of the specified entities, so 1 mol of water molecules and 1 mol of iron atoms hold the same number of particles. <i>N</i><sub>A</sub> means "per mole", so its units are <span class="unit">mol-1</span>.</p><p>The two wrong statements mix up number with mass, and molecules with atoms.</p>
      solution: "<p>몰은 물질의 양의 SI 단위예요. 무엇이든 1몰에는 정해 준 입자가 6.02 × 10<sup>23</sup>개 들어 있으므로, 물 분자 1 mol과 철 원자 1 mol에는 같은 수의 입자가 있어요. <i>N</i><sub>A</sub>는 “1몰당”이라는 뜻이므로 단위는 <span class=\"unit\">mol-1</span>이에요.</p><p>틀린 두 설명은 개수와 질량을, 분자와 원자를 혼동했어요.</p>",
      misconception: {
        // EN (option B): 6.02 × 10<sup>23</sup> is a number of particles, not a mass. The mass of one mole is the molar mass, which is different for each substance.
        "1": "6.02 × 10<sup>23</sup>은 입자의 개수이지 질량이 아니에요. 1몰의 질량은 몰 질량이고, 물질마다 달라요.",
        // EN (option E): There are 6.02 × 10<sup>23</sup> <span class="chem">O2</span> <em>molecules</em>. Each molecule has 2 atoms, so there are 1.20 × 10<sup>24</sup> oxygen atoms.
        "4": "<span class=\"chem\">O2</span> <em>분자</em>가 6.02 × 10<sup>23</sup>개 있어요. 분자 1개에 원자가 2개씩 있으므로 산소 원자는 1.20 × 10<sup>24</sup>개예요.",
      },
    },

    // ── s1-4-q007 · mcq · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q007": {
      // EN: <p>Relative atomic masses compare the mass of an atom with a standard. What is the standard?</p>
      stem: "<p>상대 원자 질량은 원자의 질량을 기준과 비교한 값이에요. 그 기준은 무엇인가요?</p>",
      options: [
        // EN: The mass of one atom of hydrogen-1
        "수소-1 원자 1개의 질량",
        // EN: The mass of one atom of carbon-12
        "탄소-12 원자 1개의 질량",
        // EN: <span class="frac"><span>1</span><span>12</span></span> of the mass of one atom of carbon-12
        "탄소-12 원자 1개 질량의 <span class=\"frac\"><span>1</span><span>12</span></span>",
        // EN: <span class="frac"><span>1</span><span>16</span></span> of the mass of one atom of oxygen-16
        "산소-16 원자 1개 질량의 <span class=\"frac\"><span>1</span><span>16</span></span>",
      ],
      hints: [
        // EN: The scale is set so that one atom of a particular carbon isotope has a relative mass of exactly 12.
        "어떤 탄소 동위 원소 원자 1개의 상대 질량이 정확히 12가 되도록 눈금을 정해요.",
        // EN: If the whole atom is 12 units, what fraction of the atom is 1 unit?
        "원자 전체가 12단위라면, 1단위는 원자의 몇 분의 몇인가요?",
      ],
      // EN: <p>Masses of atoms are compared on a scale relative to carbon-12. One atom of <span class="chem">^12C</span> is given a mass of exactly 12, so the unit of the scale is <span class="frac"><span>1</span><span>12</span></span> of the mass of a carbon-12 atom.</p>
      solution: "<p>원자의 질량은 탄소-12를 기준으로 한 눈금에서 비교해요. <span class=\"chem\">^12C</span> 원자 1개의 질량을 정확히 12로 정하므로, 눈금의 1단위는 탄소-12 원자 1개 질량의 <span class=\"frac\"><span>1</span><span>12</span></span>이에요.</p>",
      misconception: {
        // EN (option A): Hydrogen has a relative atomic mass close to 1, but it is not the standard. The scale is defined using carbon-12.
        "0": "수소의 상대 원자 질량은 1에 가깝지만 기준은 아니에요. 눈금은 탄소-12로 정의해요.",
        // EN (option B): Right isotope, but the whole atom is not the unit. If it were, carbon-12 would have a relative mass of 1, not 12.
        "1": "동위 원소는 맞지만 원자 전체가 1단위는 아니에요. 그렇다면 탄소-12의 상대 질량은 12가 아니라 1이 될 거예요.",
        // EN (option D): An oxygen scale was used in the past. The scale used now, and by the IB, is based on carbon-12.
        "3": "예전에는 산소 기준 눈금을 쓰기도 했어요. 지금 쓰는 눈금, 그리고 IB가 쓰는 눈금은 탄소-12 기준이에요.",
      },
    },

    // ── s1-4-q008 · mcq · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q008": {
      // EN: <p>Which is the relative formula mass, <i>M</i><sub>r</sub>, of calcium hydroxide, <span class="chem">Ca(OH)2</span>?</p><p>Use <i>A</i><sub>r</sub>: Ca = 40.08, O = 16.00, H = 1.01.</p>
      stem: "<p>수산화 칼슘(<span class=\"chem\">Ca(OH)2</span>)의 상대 화학식량 <i>M</i><sub>r</sub>은 얼마인가요?</p><p><i>A</i><sub>r</sub>을 이용하세요: Ca = 40.08, O = 16.00, H = 1.01.</p>",
      options: [
        // EN: 57.09
        "57.09",
        // EN: 58.10
        "58.10",
        // EN: 74.10
        "74.10",
        // EN: 74.10 <span class="unit">g mol-1</span>
        "74.10 <span class=\"unit\">g mol-1</span>",
      ],
      hints: [
        // EN: Add the relative atomic masses of every atom in the formula.
        "화학식에 있는 모든 원자의 상대 원자 질량을 더하세요.",
        // EN: The 2 outside the bracket multiplies both O and H. Also think about whether a <em>relative</em> mass has units.
        "괄호 밖의 2는 O와 H 둘 다에 곱해요. 그리고 <em>상대</em> 질량에 단위가 있는지도 생각해 보세요.",
      ],
      // EN: <div class="worked__math"><i>M</i><sub>r</sub> = 40.08 + 2 × (16.00 + 1.01)</div><div class="worked__math"><i>M</i><sub>r</sub> = 40.08 + 34.02<br>&nbsp;&nbsp;= <strong>74.10</strong> (no units)</div><p><i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> are ratios, so they have no units. Molar mass has the same number with units of <span class="unit">g mol-1</span>.</p>
      solution: "<div class=\"worked__math\"><i>M</i><sub>r</sub> = 40.08 + 2 × (16.00 + 1.01)</div><div class=\"worked__math\"><i>M</i><sub>r</sub> = 40.08 + 34.02<br>&nbsp;&nbsp;= <strong>74.10</strong> (단위 없음)</div><p><i>A</i><sub>r</sub>과 <i>M</i><sub>r</sub>은 비이므로 단위가 없어요. 몰 질량은 같은 수에 <span class=\"unit\">g mol-1</span> 단위가 붙어요.</p>",
      misconception: {
        // EN (option A): You added one Ca, one O and one H. The subscript 2 outside the bracket means there are two O atoms and two H atoms.
        "0": "Ca 1개, O 1개, H 1개만 더했어요. 괄호 밖의 아래 첨자 2는 O 원자 2개와 H 원자 2개가 있다는 뜻이에요.",
        // EN (option B): You applied the subscript 2 to hydrogen only. A subscript outside a bracket multiplies <em>everything</em> inside the bracket.
        "1": "아래 첨자 2를 수소에만 적용했어요. 괄호 밖의 아래 첨자는 괄호 안의 <em>모든 것</em>에 곱해요.",
        // EN (option D): The number is right, but relative formula mass has no units. 74.10 <span class="unit">g mol-1</span> is the molar mass, <i>M</i>.
        "3": "수는 맞지만 상대 화학식량에는 단위가 없어요. 74.10 <span class=\"unit\">g mol-1</span>은 몰 질량 <i>M</i>이에요.",
      },
    },

    // ── s1-4-q009 · numeric · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q009": {
      // EN: <p>Calculate the relative formula mass, <i>M</i><sub>r</sub>, of iron(III) sulfate, <span class="chem">Fe2(SO4)3</span>. Give your answer to 2 decimal places.</p><p>Use the data booklet values: Fe = 55.85, S = 32.07, O = 16.00.</p>
      stem: "<p>황산 철(III)(<span class=\"chem\">Fe2(SO4)3</span>)의 상대 화학식량 <i>M</i><sub>r</sub>을 계산하시오 (calculate). 소수점 아래 2자리로 답하세요.</p><p>데이터 부클릿 값을 이용하세요: Fe = 55.85, S = 32.07, O = 16.00.</p>",
      hints: [
        // EN: Count the atoms of each element first. The subscript 3 outside the bracket multiplies everything inside it.
        "먼저 각 원소의 원자 수를 세세요. 괄호 밖의 아래 첨자 3은 괄호 안의 모든 것에 곱해요.",
        // EN: There are 2 Fe, 3 S and 3 × 4 = 12 O. Use the 2 decimal place <i>A</i><sub>r</sub> values, not whole numbers.
        "Fe 2개, S 3개, O 3 × 4 = 12개예요. 정수가 아니라 소수점 아래 2자리까지인 <i>A</i><sub>r</sub> 값을 쓰세요.",
      ],
      // EN: <p>Count the atoms in <span class="chem">Fe2(SO4)3</span>: 2 Fe, 3 S and 3 × 4 = 12 O.</p><div class="worked__math"><i>M</i><sub>r</sub> = (2 × 55.85) + (3 × 32.07)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (12 × 16.00)</div><div class="worked__math"><i>M</i><sub>r</sub> = 111.70 + 96.21 + 192.00<br>&nbsp;&nbsp;= <strong>399.91</strong> (no units)</div><p>Named slips: ignoring the bracket gives 207.77 (one S and four O). Using 3 S but only 4 O gives 271.91. Using whole-number <i>A</i><sub>r</sub> values gives 400. The guide says to use the two-decimal-place values from the data booklet.</p>
      solution: "<p><span class=\"chem\">Fe2(SO4)3</span>의 원자 수를 세면 Fe 2개, S 3개, O 3 × 4 = 12개예요.</p><div class=\"worked__math\"><i>M</i><sub>r</sub> = (2 × 55.85) + (3 × 32.07)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (12 × 16.00)</div><div class=\"worked__math\"><i>M</i><sub>r</sub> = 111.70 + 96.21 + 192.00<br>&nbsp;&nbsp;= <strong>399.91</strong> (단위 없음)</div><p>흔한 실수: 괄호를 무시하면 207.77(S 1개, O 4개)이 나와요. S는 3개로 하고 O는 4개만 쓰면 271.91이 나와요. 정수 <i>A</i><sub>r</sub> 값을 쓰면 400이 나와요. 교수요목 안내서는 데이터 부클릿의 소수점 아래 2자리 값을 쓰라고 해요.</p>",
    },

    // ── s1-4-q010 · short · exam · SL · Structure 1.4.2 · 2 marks
    "s1-4-q010": {
      // EN: <p>Chlorine has a relative atomic mass of 35.45.</p><p>State what is meant by <strong>relative atomic mass</strong>, and state its units.</p>
      stem: "<p>염소의 상대 원자 질량은 35.45예요.</p><p><strong>상대 원자 질량</strong>의 뜻을 쓰고, 그 단위를 쓰시오 (state).</p>",
      hints: [
        // EN: There are two ideas in the definition: an average over the isotopes, and a comparison with a standard atom.
        "정의에는 두 가지 생각이 들어 있어요: 동위 원소들의 평균, 그리고 기준 원자와의 비교.",
        // EN: A <em>relative</em> mass is one mass divided by another mass. What happens to the units?
        "<em>상대</em> 질량은 한 질량을 다른 질량으로 나눈 값이에요. 단위는 어떻게 될까요?",
      ],
      // EN: <p>Chlorine is a mixture of isotopes, so its relative atomic mass is a weighted average, which is why it is not a whole number. The comparison is with <span class="frac"><span>1</span><span>12</span></span> of the mass of a <span class="chem">^12C</span> atom. Because it is a ratio of two masses, it has no units.</p>
      solution: "<p>염소는 동위 원소의 혼합물이므로 상대 원자 질량은 가중 평균이에요. 그래서 정수가 아니에요. 비교 기준은 <span class=\"chem\">^12C</span> 원자 1개 질량의 <span class=\"frac\"><span>1</span><span>12</span></span>이에요. 두 질량의 비이므로 단위가 없어요.</p>",
      // EN: <p>Relative atomic mass is the weighted average mass of the atoms of an element (taking the abundance of its isotopes into account), compared with <span class="frac"><span>1</span><span>12</span></span> of the mass of an atom of carbon-12. It has no units.</p>
      answer: "<p>상대 원자 질량은 어떤 원소 원자들의 가중 평균 질량(동위 원소의 존재 비율을 고려한 값)을 탄소-12 원자 1개 질량의 <span class=\"frac\"><span>1</span><span>12</span></span>과 비교한 값이에요. 단위가 없어요.</p>",
      markscheme: [
        // EN: Weighted average mass of the atoms (or isotopes) of an element, relative to 1/12 of the mass of an atom of carbon-12. (Accept "compared with carbon-12 taken as exactly 12".)
        "원소의 원자(또는 동위 원소)들의 가중 평균 질량을 탄소-12 원자 1개 질량의 1/12에 대해 나타낸 값. (“탄소-12를 정확히 12로 두고 비교한 값”도 인정.)",
        // EN: It has no units. (Do not accept g or g mol⁻¹.)
        "단위가 없음. (g 또는 g mol⁻¹은 인정하지 않음.)",
      ],
    },

    // ── s1-4-q011 · mcq · exam · SL · Structure 1.4.2 · 1 mark
    "s1-4-q011": {
      // EN: <p>What is the molar mass of hydrated copper(II) sulfate, <span class="chem">CuSO4.5H2O</span>, in <span class="unit">g mol-1</span>?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, S = 32.07, O = 16.00, H = 1.01.</p>
      stem: "<p>황산 구리(II) 수화물(<span class=\"chem\">CuSO4.5H2O</span>)의 몰 질량은 몇 <span class=\"unit\">g mol-1</span>인가요?</p><p><i>A</i><sub>r</sub>을 이용하세요: Cu = 63.55, S = 32.07, O = 16.00, H = 1.01.</p>",
      options: [
        // EN: 159.62
        "159.62",
        // EN: 177.64
        "177.64",
        // EN: 185.72
        "185.72",
        // EN: 249.72
        "249.72",
      ],
      hints: [
        // EN: The dot means "combined with". Add the mass of the water to the mass of the <span class="chem">CuSO4</span>.
        "점은 “결합되어 있다”는 뜻이에요. 물의 질량을 <span class=\"chem\">CuSO4</span>의 질량에 더하세요.",
        // EN: Work out <i>M</i>(<span class="chem">CuSO4</span>) and <i>M</i>(<span class="chem">H2O</span>) separately. Then add five lots of water.
        "<i>M</i>(<span class=\"chem\">CuSO4</span>)와 <i>M</i>(<span class=\"chem\">H2O</span>)를 따로 구하세요. 그다음 물 5개분을 더하세요.",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">CuSO4</span>) = 63.55 + 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 159.62 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">CuSO4.5H2O</span>) = 159.62 + (5 × 18.02)<br>&nbsp;&nbsp;= <strong>249.72 <span class="unit">g mol-1</span></strong></div>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">CuSO4</span>) = 63.55 + 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 159.62 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 159.62 + (5 × 18.02)<br>&nbsp;&nbsp;= <strong>249.72 <span class=\"unit\">g mol-1</span></strong></div>",
      misconception: {
        // EN (option A): This is the molar mass of anhydrous <span class="chem">CuSO4</span>. The water of crystallization is part of the formula and part of the mass you weigh.
        "0": "이것은 무수 <span class=\"chem\">CuSO4</span>의 몰 질량이에요. 결정수도 화학식의 일부이고, 저울로 다는 질량의 일부예요.",
        // EN (option B): You added one <span class="chem">H2O</span> (18.02). The 5 in front of <span class="chem">H2O</span> means five water molecules per formula unit.
        "1": "<span class=\"chem\">H2O</span>를 1개(18.02)만 더했어요. <span class=\"chem\">H2O</span> 앞의 5는 화학식 단위 1개당 물 분자가 5개라는 뜻이에요.",
        // EN (option C): You multiplied only the hydrogen by 5 (10 H and 1 O). The 5 multiplies the whole <span class="chem">H2O</span>: 10 H and 5 O.
        "2": "수소에만 5를 곱했어요(H 10개, O 1개). 5는 <span class=\"chem\">H2O</span> 전체에 곱해요: H 10개, O 5개.",
      },
    },

    // ── s1-4-q012 · numeric · foundation · SL · Structure 1.4.3 · 1 mark
    "s1-4-q012": {
      // EN: <p>Calculate the amount, in <span class="unit">mol</span>, of calcium carbonate in 25.0 <span class="unit">g</span> of <span class="chem">CaCO3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CaCO3</span>) = 100.09 <span class="unit">g mol-1</span></p>
      stem: "<p><span class=\"chem\">CaCO3</span> 25.0 <span class=\"unit\">g</span>에 들어 있는 탄산 칼슘의 양을 <span class=\"unit\">mol</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>M</i>(<span class=\"chem\">CaCO3</span>) = 100.09 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: The relationship between amount, mass and molar mass is in your data booklet: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "물질의 양, 질량, 몰 질량 사이의 관계는 데이터 부클릿에 있어요: <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.",
        // EN: Mass is in <span class="unit">g</span> and molar mass is in <span class="unit">g mol-1</span>, so no unit conversion is needed. 25.0 g is less than 100.09 g, so the answer is less than 1 mol.
        "질량은 <span class=\"unit\">g</span>, 몰 질량은 <span class=\"unit\">g mol-1</span>이므로 단위를 바꿀 필요가 없어요. 25.0 g은 100.09 g보다 작으므로 답은 1 mol보다 작아요.",
      ],
      // EN: <div class="worked__math"><i>n</i> = <span class="frac"><span><i>m</i></span><span><i>M</i></span></span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>25.0 <span class="unit">g</span></span><span>100.09 <span class="unit">g mol-1</span></span></span></div><div class="worked__math"><i>n</i> = 0.24978 <span class="unit">mol</span> = <strong>0.250 <span class="unit">mol</span></strong></div><p>If you multiplied instead you would get about 2500, which fails the size check.</p>
      solution: "<div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>25.0 <span class=\"unit\">g</span></span><span>100.09 <span class=\"unit\">g mol-1</span></span></span></div><div class=\"worked__math\"><i>n</i> = 0.24978 <span class=\"unit\">mol</span> = <strong>0.250 <span class=\"unit\">mol</span></strong></div><p>대신 곱하면 약 2500이 나와서 크기 확인을 통과하지 못해요.</p>",
    },

    // ── s1-4-q013 · numeric · foundation · SL · Structure 1.4.3 · 1 mark
    "s1-4-q013": {
      // EN: <p>Calculate the mass, in <span class="unit">g</span>, of 0.350 <span class="unit">mol</span> of sulfuric acid, <span class="chem">H2SO4</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">H2SO4</span>) = 98.09 <span class="unit">g mol-1</span></p>
      stem: "<p>황산(<span class=\"chem\">H2SO4</span>) 0.350 <span class=\"unit\">mol</span>의 질량을 <span class=\"unit\">g</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>M</i>(<span class=\"chem\">H2SO4</span>) = 98.09 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Start from <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> and rearrange it to make <i>m</i> the subject.
        "<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>에서 시작해 <i>m</i>에 대한 식으로 바꾸세요.",
        // EN: <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>. Check the units: mol × g mol<sup>−1</sup> = g.
        "<span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span>. 단위를 확인하세요: mol × g mol<sup>−1</sup> = g.",
      ],
      // EN: <div class="worked__math"><i>m</i> = <i>n</i> × <i>M</i></div><div class="worked__math"><i>m</i> = 0.350 <span class="unit">mol</span> × 98.09 <span class="unit">g mol-1</span></div><div class="worked__math"><i>m</i> = 34.33 <span class="unit">g</span> = <strong>34.3 <span class="unit">g</span></strong></div><p>Size check: about one third of a mole, so about one third of 98 g.</p>
      solution: "<div class=\"worked__math\"><i>m</i> = <i>n</i> × <i>M</i></div><div class=\"worked__math\"><i>m</i> = 0.350 <span class=\"unit\">mol</span> × 98.09 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>m</i> = 34.33 <span class=\"unit\">g</span> = <strong>34.3 <span class=\"unit\">g</span></strong></div><p>크기 확인: 약 3분의 1몰이므로 98 g의 약 3분의 1이에요.</p>",
    },

    // ── s1-4-q014 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q014": {
      // EN: <p>Calculate the number of molecules in 9.00 <span class="unit">g</span> of water, <span class="chem">H2O</span>. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, O = 16.00.</p>
      stem: "<p>물(<span class=\"chem\">H2O</span>) 9.00 <span class=\"unit\">g</span>에 들어 있는 분자 수를 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>A</i><sub>r</sub>을 이용하세요: H = 1.01, O = 16.00.</p>",
      hints: [
        // EN: This is a two-step route: mass → amount → number of particles. You cannot go from grams to particles in one step.
        "두 단계로 가요: 질량 → 물질의 양 → 입자 수. 그램에서 입자 수로 한 번에 갈 수는 없어요.",
        // EN: Step 1: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> with <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. Step 2: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "1단계: <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>로 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>. 2단계: <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.",
        // EN: Keep all the digits of <i>n</i> in your calculator. Round only the final answer.
        "계산기에 <i>n</i>의 모든 자릿수를 남겨 두세요. 마지막 답만 반올림하세요.",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class="unit">g mol-1</span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>9.00 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.49945 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>N</i> = 0.49945 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>3.01 × 10<sup>23</sup> molecules</strong> &nbsp; (M2)</div><p>The question asks for molecules. Multiplying by 3 as well would give the number of atoms (9.02 × 10<sup>23</sup>), which is a different question.</p>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>9.00 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.49945 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>N</i> = 0.49945 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>분자 3.01 × 10<sup>23</sup>개</strong> &nbsp; (M2)</div><p>문제는 분자 수를 묻고 있어요. 여기에 3까지 곱하면 원자 수(9.02 × 10<sup>23</sup>)가 되는데, 그것은 다른 질문의 답이에요.</p>",
    },

    // ── s1-4-q015 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q015": {
      // EN: <p>Calculate the number of <strong>oxygen atoms</strong> in 8.80 <span class="unit">g</span> of carbon dioxide, <span class="chem">CO2</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span></p>
      stem: "<p>이산화 탄소(<span class=\"chem\">CO2</span>) 8.80 <span class=\"unit\">g</span>에 들어 있는 <strong>산소 원자</strong>의 수를 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Route: mass → amount of <span class="chem">CO2</span> → amount of O atoms → number of O atoms.
        "경로: 질량 → <span class=\"chem\">CO2</span>의 양 → O 원자의 양 → O 원자 수.",
        // EN: Each <span class="chem">CO2</span> molecule contains 2 oxygen atoms, so <i>n</i>(O) = 2 × <i>n</i>(<span class="chem">CO2</span>).
        "<span class=\"chem\">CO2</span> 분자 1개에는 산소 원자가 2개 있으므로 <i>n</i>(O) = 2 × <i>n</i>(<span class=\"chem\">CO2</span>)예요.",
        // EN: Finish with <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "마지막으로 <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>를 쓰세요.",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">CO2</span>) = <span class="frac"><span>8.80 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.19995 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(O) = 2 × 0.19995 <span class="unit">mol</span><br>&nbsp;&nbsp;= 0.39991 <span class="unit">mol</span></div><div class="worked__math"><i>N</i>(O) = 0.39991 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>2.41 × 10<sup>23</sup> atoms</strong> &nbsp; (M2)</div><p>Named slips: 1.20 × 10<sup>23</sup> is the number of <span class="chem">CO2</span> molecules (subscript not used). 3.61 × 10<sup>23</sup> is the number of all atoms (multiplied by 3, not 2).</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">CO2</span>) = <span class=\"frac\"><span>8.80 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.19995 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(O) = 2 × 0.19995 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 0.39991 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>N</i>(O) = 0.39991 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>원자 2.41 × 10<sup>23</sup>개</strong> &nbsp; (M2)</div><p>흔한 실수: 1.20 × 10<sup>23</sup>은 <span class=\"chem\">CO2</span> 분자의 수예요(아래 첨자를 쓰지 않음). 3.61 × 10<sup>23</sup>은 모든 원자의 수예요(2가 아니라 3을 곱함).</p>",
    },

    // ── s1-4-q016 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q016": {
      // EN: <p>Epsom salt is hydrated magnesium sulfate, <span class="chem">MgSO4.7H2O</span>.</p><p>Calculate the amount, in <span class="unit">mol</span>, of <strong>water molecules</strong> in 12.3 <span class="unit">g</span> of Epsom salt. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">MgSO4</span>) = 120.38 <span class="unit">g mol-1</span>, &nbsp; <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>엡섬염은 황산 마그네슘 수화물(<span class=\"chem\">MgSO4.7H2O</span>)이에요.</p><p>엡섬염 12.3 <span class=\"unit\">g</span>에 들어 있는 <strong>물 분자</strong>의 양을 <span class=\"unit\">mol</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>M</i>(<span class=\"chem\">MgSO4</span>) = 120.38 <span class=\"unit\">g mol-1</span>, &nbsp; <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: The 12.3 g is hydrated salt, so you need the molar mass of the whole formula, water included.
        "12.3 g은 수화된 염의 질량이므로, 물까지 포함한 화학식 전체의 몰 질량이 필요해요.",
        // EN: <i>M</i>(<span class="chem">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02). Use it in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "<i>M</i>(<span class=\"chem\">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02). 이 값을 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>에 넣으세요.",
        // EN: One mole of the hydrate contains 7 mol of water molecules.
        "수화물 1몰에는 물 분자가 7 mol 들어 있어요.",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02)<br>&nbsp;&nbsp;= 246.52 <span class="unit">g mol-1</span></div><div class="worked__math"><i>n</i>(hydrate) = <span class="frac"><span>12.3 <span class="unit">g</span></span><span>246.52 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.049895 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = 7 × 0.049895 <span class="unit">mol</span><br>&nbsp;&nbsp;= <strong>0.349 <span class="unit">mol</span></strong> &nbsp; (M2)</div><p>Named slip: dividing 12.3 g by the anhydrous molar mass (120.38) gives 0.715 mol. The solid you weighed includes its water, so the hydrated molar mass must be used.</p>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02)<br>&nbsp;&nbsp;= 246.52 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>n</i>(수화물) = <span class=\"frac\"><span>12.3 <span class=\"unit\">g</span></span><span>246.52 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.049895 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = 7 × 0.049895 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= <strong>0.349 <span class=\"unit\">mol</span></strong> &nbsp; (M2)</div><p>흔한 실수: 12.3 g을 무수물의 몰 질량(120.38)으로 나누면 0.715 mol이 나와요. 저울로 단 고체에는 물이 포함되어 있으므로 수화물의 몰 질량을 써야 해요.</p>",
    },

    // ── s1-4-q017 · mcq · exam · SL · Structure 1.4.3 · 1 mark
    "s1-4-q017": {
      // EN: <p>What is the mass, in <span class="unit">g</span>, of <strong>one molecule</strong> of water?</p><p><i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>물 <strong>분자 1개</strong>의 질량은 몇 <span class=\"unit\">g</span>인가요?</p><p><i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      options: [
        // EN: 1.66 × 10<sup>−24</sup>
        "1.66 × 10<sup>−24</sup>",
        // EN: 2.99 × 10<sup>−23</sup>
        "2.99 × 10<sup>−23</sup>",
        // EN: 3.34 × 10<sup>22</sup>
        "3.34 × 10<sup>22</sup>",
        // EN: 1.08 × 10<sup>25</sup>
        "1.08 × 10<sup>25</sup>",
      ],
      hints: [
        // EN: 18.02 g is the mass of one mole of molecules. How many molecules share that mass?
        "18.02 g은 분자 1몰의 질량이에요. 몇 개의 분자가 이 질량을 나누어 가질까요?",
        // EN: Share the mass equally: divide the molar mass by <i>N</i><sub>A</sub>. Expect a very small number.
        "질량을 똑같이 나누세요: 몰 질량을 <i>N</i><sub>A</sub>로 나눠요. 아주 작은 수가 나올 거예요.",
      ],
      // EN: <p>One mole of water molecules has a mass of 18.02 <span class="unit">g</span>. That mass is shared between 6.02 × 10<sup>23</sup> molecules.</p><div class="worked__math"><i>m</i>(one molecule) = <span class="frac"><span>18.02 <span class="unit">g mol-1</span></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span></div><div class="worked__math"><i>m</i>(one molecule) = <strong>2.99 × 10<sup>−23</sup> <span class="unit">g</span></strong></div>
      solution: "<p>물 분자 1몰의 질량은 18.02 <span class=\"unit\">g</span>이에요. 이 질량을 분자 6.02 × 10<sup>23</sup>개가 나누어 가져요.</p><div class=\"worked__math\"><i>m</i>(분자 1개) = <span class=\"frac\"><span>18.02 <span class=\"unit\">g mol-1</span></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span></div><div class=\"worked__math\"><i>m</i>(분자 1개) = <strong>2.99 × 10<sup>−23</sup> <span class=\"unit\">g</span></strong></div>",
      misconception: {
        // EN (option A): This is 1 ÷ <i>N</i><sub>A</sub>. You left out the molar mass. One mole of water has a mass of 18.02 g, not 1 g.
        "0": "이것은 1 ÷ <i>N</i><sub>A</sub>예요. 몰 질량을 빠뜨렸어요. 물 1몰의 질량은 1 g이 아니라 18.02 g이에요.",
        // EN (option C): You divided <i>N</i><sub>A</sub> by the molar mass. That gives the number of molecules in 1 g of water, not the mass of one molecule.
        "2": "<i>N</i><sub>A</sub>를 몰 질량으로 나누었어요. 그러면 분자 1개의 질량이 아니라 물 1 g에 든 분자 수가 나와요.",
        // EN (option D): You multiplied the molar mass by <i>N</i><sub>A</sub>. One molecule cannot have a larger mass than a whole mole of molecules.
        "3": "몰 질량에 <i>N</i><sub>A</sub>를 곱했어요. 분자 1개가 분자 1몰 전체보다 무거울 수는 없어요.",
      },
    },

    // ── s1-4-q018 · mcq · exam · SL · Structure 1.4.3 · 1 mark
    "s1-4-q018": {
      // EN: <p>Which sample contains the greatest total number of <strong>atoms</strong>?</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, He = 4.00, C = 12.01, O = 16.00.</p>
      stem: "<p><strong>원자</strong>의 총수가 가장 많은 시료는 무엇인가요?</p><p><i>A</i><sub>r</sub>을 이용하세요: H = 1.01, He = 4.00, C = 12.01, O = 16.00.</p>",
      options: [
        // EN: 4.00 <span class="unit">g</span> of helium, <span class="chem">He</span>
        "헬륨(<span class=\"chem\">He</span>) 4.00 <span class=\"unit\">g</span>",
        // EN: 16.0 <span class="unit">g</span> of methane, <span class="chem">CH4</span>
        "메테인(<span class=\"chem\">CH4</span>) 16.0 <span class=\"unit\">g</span>",
        // EN: 27.0 <span class="unit">g</span> of water, <span class="chem">H2O</span>
        "물(<span class=\"chem\">H2O</span>) 27.0 <span class=\"unit\">g</span>",
        // EN: 44.0 <span class="unit">g</span> of carbon dioxide, <span class="chem">CO2</span>
        "이산화 탄소(<span class=\"chem\">CO2</span>) 44.0 <span class=\"unit\">g</span>",
      ],
      hints: [
        // EN: For each sample find the amount of molecules with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "각 시료에서 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>로 분자의 양을 구하세요.",
        // EN: Then multiply by the number of atoms in one molecule. Compare amounts of atoms in mol. You do not need <i>N</i><sub>A</sub> to compare.
        "그다음 분자 1개에 있는 원자 수를 곱하세요. 원자의 양을 mol로 비교하세요. 비교할 때는 <i>N</i><sub>A</sub>가 필요 없어요.",
      ],
      // EN: <div class="table-scroll"><table class="data"><thead><tr><th scope="col">Sample</th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>M</i> / g mol<sup>−1</sup></span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>n</i> / mol</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Atoms each</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>n</i>(atoms) / mol</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">He</span></th><td class="num">4.00</td><td class="num">1.00</td><td class="num">1</td><td class="num">1.00</td></tr><tr><th scope="row"><span class="chem">CH4</span></th><td class="num">16.05</td><td class="num">0.997</td><td class="num">5</td><td class="num"><strong>4.98</strong></td></tr><tr><th scope="row"><span class="chem">H2O</span></th><td class="num">18.02</td><td class="num">1.50</td><td class="num">3</td><td class="num">4.50</td></tr><tr><th scope="row"><span class="chem">CO2</span></th><td class="num">44.01</td><td class="num">1.00</td><td class="num">3</td><td class="num">3.00</td></tr></tbody></table></div><p>Methane has the largest amount of atoms, so it has the greatest number of atoms.</p>
      solution: "<div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">시료</th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>M</i> / g mol<sup>−1</sup></span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>n</i> / mol</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">분자당 원자 수</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>n</i>(원자) / mol</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">He</span></th><td class=\"num\">4.00</td><td class=\"num\">1.00</td><td class=\"num\">1</td><td class=\"num\">1.00</td></tr><tr><th scope=\"row\"><span class=\"chem\">CH4</span></th><td class=\"num\">16.05</td><td class=\"num\">0.997</td><td class=\"num\">5</td><td class=\"num\"><strong>4.98</strong></td></tr><tr><th scope=\"row\"><span class=\"chem\">H2O</span></th><td class=\"num\">18.02</td><td class=\"num\">1.50</td><td class=\"num\">3</td><td class=\"num\">4.50</td></tr><tr><th scope=\"row\"><span class=\"chem\">CO2</span></th><td class=\"num\">44.01</td><td class=\"num\">1.00</td><td class=\"num\">3</td><td class=\"num\">3.00</td></tr></tbody></table></div><p>원자의 양이 가장 많은 것은 메테인이므로, 원자 수도 메테인이 가장 많아요.</p>",
      misconception: {
        // EN (option A): Helium atoms are light, but 4.00 g is only 1.00 mol of atoms. The other samples contain several atoms in every molecule.
        "0": "헬륨 원자는 가볍지만 4.00 g은 원자 1.00 mol밖에 안 돼요. 다른 시료는 분자마다 원자가 여러 개 있어요.",
        // EN (option C): Water has the most <em>molecules</em> here (1.50 mol), but each has only 3 atoms: 4.50 mol of atoms. Compare with 5 atoms per <span class="chem">CH4</span> molecule.
        "2": "여기서 <em>분자</em>가 가장 많은 것은 물(1.50 mol)이지만, 분자마다 원자가 3개뿐이라 원자는 4.50 mol이에요. <span class=\"chem\">CH4</span> 분자는 원자가 5개인 것과 비교해 보세요.",
        // EN (option D): The largest mass does not mean the most atoms. 44.0 g of <span class="chem">CO2</span> is about 1.00 mol of molecules, which is 3.00 mol of atoms.
        "3": "질량이 가장 크다고 원자가 가장 많은 것은 아니에요. <span class=\"chem\">CO2</span> 44.0 g은 분자 약 1.00 mol, 즉 원자 3.00 mol이에요.",
      },
    },

    // ── s1-4-q019 · numeric · challenge · SL · Structure 1.4.3 · 3 marks
    "s1-4-q019": {
      // EN: <p>A sample of magnesium chloride, <span class="chem">MgCl2</span>, contains 3.01 × 10<sup>22</sup> chloride ions.</p><p>Calculate the mass of the sample, in <span class="unit">g</span>. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: Mg = 24.31, Cl = 35.45.</p>
      stem: "<p>염화 마그네슘(<span class=\"chem\">MgCl2</span>) 시료에 염화 이온이 3.01 × 10<sup>22</sup>개 들어 있어요.</p><p>이 시료의 질량을 <span class=\"unit\">g</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>A</i><sub>r</sub>을 이용하세요: Mg = 24.31, Cl = 35.45.</p>",
      hints: [
        // EN: Work backwards along the usual route: number of ions → amount of ions → amount of <span class="chem">MgCl2</span> → mass.
        "평소 경로를 거꾸로 따라가세요: 이온 수 → 이온의 양 → <span class=\"chem\">MgCl2</span>의 양 → 질량.",
        // EN: One formula unit of <span class="chem">MgCl2</span> contains 2 chloride ions. So is the amount of <span class="chem">MgCl2</span> bigger or smaller than the amount of <span class="chem">Cl-</span>?
        "<span class=\"chem\">MgCl2</span> 화학식 단위 1개에는 염화 이온이 2개 있어요. 그러면 <span class=\"chem\">MgCl2</span>의 양은 <span class=\"chem\">Cl-</span>의 양보다 클까요, 작을까요?",
        // EN: <i>n</i>(<span class="chem">MgCl2</span>) = <i>n</i>(<span class="chem">Cl-</span>) ÷ 2. Then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> with <i>M</i> = 95.21 <span class="unit">g mol-1</span>.
        "<i>n</i>(<span class=\"chem\">MgCl2</span>) = <i>n</i>(<span class=\"chem\">Cl-</span>) ÷ 2. 그다음 <i>M</i> = 95.21 <span class=\"unit\">g mol-1</span>로 <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span>를 쓰세요.",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">Cl-</span>) = <span class="frac"><span>3.01 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0500 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">MgCl2</span>) = 0.0500 <span class="unit">mol</span> ÷ 2<br>&nbsp;&nbsp;= 0.0250 <span class="unit">mol</span> &nbsp; (M2)</div><div class="worked__math"><i>M</i>(<span class="chem">MgCl2</span>) = 24.31 + (2 × 35.45)<br>&nbsp;&nbsp;= 95.21 <span class="unit">g mol-1</span></div><div class="worked__math"><i>m</i> = 0.0250 <span class="unit">mol</span> × 95.21 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= <strong>2.38 <span class="unit">g</span></strong> &nbsp; (M3)</div><p>Named slips: 4.76 g means you did not divide by 2. 9.52 g means you multiplied by 2 instead of dividing. There are fewer formula units than chloride ions.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">Cl-</span>) = <span class=\"frac\"><span>3.01 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0500 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">MgCl2</span>) = 0.0500 <span class=\"unit\">mol</span> ÷ 2<br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">mol</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MgCl2</span>) = 24.31 + (2 × 35.45)<br>&nbsp;&nbsp;= 95.21 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>m</i> = 0.0250 <span class=\"unit\">mol</span> × 95.21 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= <strong>2.38 <span class=\"unit\">g</span></strong> &nbsp; (M3)</div><p>흔한 실수: 4.76 g이 나왔다면 2로 나누지 않은 거예요. 9.52 g이 나왔다면 2로 나누지 않고 곱한 거예요. 화학식 단위는 염화 이온보다 적어요.</p>",
    },

    // ── s1-4-q020 · mcq · challenge · SL · Structure 1.4.3 · 1 mark
    "s1-4-q020": {
      // EN: <p>A student calculates the number of hydrogen atoms in 3.20 <span class="unit">g</span> of methane, <span class="chem">CH4</span>. Their working is shown.</p><ol><li><i>M</i>(<span class="chem">CH4</span>) = 12.01 + (4 × 1.01) = 16.05 <span class="unit">g mol-1</span></li><li><i>n</i>(<span class="chem">CH4</span>) = 3.20 ÷ 16.05 = 0.199 <span class="unit">mol</span></li><li>Number of molecules = 0.199 × 6.02 × 10<sup>23</sup> = 1.20 × 10<sup>23</sup></li><li>Number of H atoms = 1.20 × 10<sup>23</sup> ÷ 4 = 3.00 × 10<sup>22</sup></li></ol><p>Which line contains the error?</p>
      stem: "<p>한 학생이 메테인(<span class=\"chem\">CH4</span>) 3.20 <span class=\"unit\">g</span>에 들어 있는 수소 원자 수를 계산했어요. 풀이는 다음과 같아요.</p><ol><li><i>M</i>(<span class=\"chem\">CH4</span>) = 12.01 + (4 × 1.01) = 16.05 <span class=\"unit\">g mol-1</span></li><li><i>n</i>(<span class=\"chem\">CH4</span>) = 3.20 ÷ 16.05 = 0.199 <span class=\"unit\">mol</span></li><li>분자 수 = 0.199 × 6.02 × 10<sup>23</sup> = 1.20 × 10<sup>23</sup></li><li>H 원자 수 = 1.20 × 10<sup>23</sup> ÷ 4 = 3.00 × 10<sup>22</sup></li></ol><p>잘못된 줄은 어느 것인가요?</p>",
      options: [
        // EN: Line 1
        "1번 줄",
        // EN: Line 2
        "2번 줄",
        // EN: Line 3
        "3번 줄",
        // EN: Line 4
        "4번 줄",
      ],
      hints: [
        // EN: Check each line for two things: the right relationship, and an answer that moves in a sensible direction.
        "각 줄에서 두 가지를 확인하세요: 관계식이 맞는지, 답이 알맞은 방향으로 변하는지.",
        // EN: Should there be more hydrogen atoms than molecules, or fewer?
        "수소 원자는 분자보다 많아야 할까요, 적어야 할까요?",
      ],
      // EN: <p>Lines 1 to 3 are correct. In line 4 the student divided by 4. Each <span class="chem">CH4</span> molecule contains 4 hydrogen atoms, so there are 4 times <em>more</em> H atoms than molecules.</p><div class="worked__math"><i>N</i>(H) = 4 × 1.20 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>4.80 × 10<sup>23</sup></strong></div>
      solution: "<p>1~3번 줄은 맞아요. 4번 줄에서 학생은 4로 나누었어요. <span class=\"chem\">CH4</span> 분자 1개에는 수소 원자가 4개 있으므로, H 원자는 분자보다 4배 <em>많아요</em>.</p><div class=\"worked__math\"><i>N</i>(H) = 4 × 1.20 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>4.80 × 10<sup>23</sup></strong></div>",
      misconception: {
        // EN (option A): Line 1 is correct: one C and four H gives 16.05 <span class="unit">g mol-1</span>. Look for a step where the answer moves in the wrong direction.
        "0": "1번 줄은 맞아요: C 1개와 H 4개로 16.05 <span class=\"unit\">g mol-1</span>이에요. 답이 잘못된 방향으로 변하는 단계를 찾아보세요.",
        // EN (option B): Line 2 is correct: <i>n</i> = <i>m</i> ÷ <i>M</i> with mass in g and molar mass in g mol<sup>−1</sup>.
        "1": "2번 줄은 맞아요: 질량은 g, 몰 질량은 g mol<sup>−1</sup>로 <i>n</i> = <i>m</i> ÷ <i>M</i>이에요.",
        // EN (option C): Line 3 is correct: moles to molecules means multiplying by <i>N</i><sub>A</sub>.
        "2": "3번 줄은 맞아요: 몰에서 분자 수로 가려면 <i>N</i><sub>A</sub>를 곱해요.",
      },
    },

    // ── s1-4-q021 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "s1-4-q021": {
      // EN: <p>Glucose has the molecular formula <span class="chem">C6H12O6</span>. What is its empirical formula?</p>
      stem: "<p>포도당의 분자식은 <span class=\"chem\">C6H12O6</span>이에요. 실험식은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">C6H12O6</span>
        "<span class=\"chem\">C6H12O6</span>",
        // EN: <span class="chem">C3H6O3</span>
        "<span class=\"chem\">C3H6O3</span>",
        // EN: <span class="chem">CH2O</span>
        "<span class=\"chem\">CH2O</span>",
        // EN: <span class="chem">CHO</span>
        "<span class=\"chem\">CHO</span>",
      ],
      hints: [
        // EN: The empirical formula gives the simplest ratio of atoms of each element.
        "실험식은 각 원소 원자 수의 가장 간단한 비를 나타내요.",
        // EN: Find the largest number that divides exactly into 6, 12 and 6.
        "6, 12, 6을 모두 나누어떨어지게 하는 가장 큰 수를 찾으세요.",
      ],
      // EN: <div class="worked__math">C : H : O = 6 : 12 : 6</div><div class="worked__math">Divide by 6: C : H : O = 1 : 2 : 1</div><p>The empirical formula is <strong><span class="chem">CH2O</span></strong>.</p>
      solution: "<div class=\"worked__math\">C : H : O = 6 : 12 : 6</div><div class=\"worked__math\">6으로 나누기: C : H : O = 1 : 2 : 1</div><p>실험식은 <strong><span class=\"chem\">CH2O</span></strong>예요.</p>",
      misconception: {
        // EN (option A): This is the molecular formula: the actual number of atoms in one molecule. The empirical formula is the simplest whole-number ratio.
        "0": "이것은 분자식, 즉 분자 1개에 실제로 들어 있는 원자 수예요. 실험식은 가장 간단한 정수비예요.",
        // EN (option B): You divided by 2, but 3 : 6 : 3 can still be divided by 3. Keep going until the ratio cannot be made simpler.
        "1": "2로 나누었지만 3 : 6 : 3은 아직 3으로 나눌 수 있어요. 더 간단하게 만들 수 없을 때까지 계속하세요.",
        // EN (option D): You removed the subscripts instead of dividing them. The ratio of atoms is 6 : 12 : 6, which simplifies to 1 : 2 : 1.
        "3": "아래 첨자를 나누지 않고 지워 버렸어요. 원자 수의 비는 6 : 12 : 6이고, 간단히 하면 1 : 2 : 1이에요.",
      },
    },

    // ── s1-4-q022 · numeric · exam · SL · Structure 1.4.4 · 2 marks
    "s1-4-q022": {
      // EN: <p>Ammonium sulfate, <span class="chem">(NH4)2SO4</span>, is used as a fertilizer.</p><p>Calculate the percentage by mass of nitrogen in ammonium sulfate. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: N = 14.01, H = 1.01, S = 32.07, O = 16.00.</p>
      stem: "<p>황산 암모늄(<span class=\"chem\">(NH4)2SO4</span>)은 비료로 쓰여요.</p><p>황산 암모늄에서 질소의 질량 백분율을 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>A</i><sub>r</sub>을 이용하세요: N = 14.01, H = 1.01, S = 32.07, O = 16.00.</p>",
      hints: [
        // EN: Percentage by mass of an element = (mass of that element in one mole of compound ÷ molar mass of compound) × 100.
        "원소의 질량 백분율 = (화합물 1몰 속 그 원소의 질량 ÷ 화합물의 몰 질량) × 100.",
        // EN: Count the nitrogen atoms carefully. The subscript 2 outside the bracket applies to N and to H.
        "질소 원자 수를 조심해서 세세요. 괄호 밖의 아래 첨자 2는 N과 H 모두에 적용돼요.",
        // EN: <i>M</i> = (2 × 14.01) + (8 × 1.01) + 32.07 + (4 × 16.00).
        "<i>M</i> = (2 × 14.01) + (8 × 1.01) + 32.07 + (4 × 16.00).",
      ],
      // EN: <div class="worked__math"><i>M</i> = (2 × 14.01) + (8 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 132.17 <span class="unit">g mol-1</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(N in 1 mol) = 2 × 14.01 <span class="unit">g</span><br>&nbsp;&nbsp;= 28.02 <span class="unit">g</span></div><div class="worked__math">% N = <span class="frac"><span>28.02</span><span>132.17</span></span> × 100<br>&nbsp;&nbsp;= <strong>21.2 %</strong> &nbsp; (M2)</div><p>Named slip: 10.6 % means you counted one nitrogen atom instead of two.</p>
      solution: "<div class=\"worked__math\"><i>M</i> = (2 × 14.01) + (8 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 132.17 <span class=\"unit\">g mol-1</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(1 mol 속 N) = 2 × 14.01 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 28.02 <span class=\"unit\">g</span></div><div class=\"worked__math\">% N = <span class=\"frac\"><span>28.02</span><span>132.17</span></span> × 100<br>&nbsp;&nbsp;= <strong>21.2 %</strong> &nbsp; (M2)</div><p>흔한 실수: 10.6 %가 나왔다면 질소 원자를 2개가 아니라 1개로 센 거예요.</p>",
    },

    // ── s1-4-q023 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q023": {
      // EN: <p>A compound contains, by mass, 29.1 % sodium, 40.5 % sulfur and 30.4 % oxygen.</p><p>What is its empirical formula?</p><p>Use <i>A</i><sub>r</sub>: Na = 22.99, S = 32.07, O = 16.00.</p>
      stem: "<p>어떤 화합물은 질량으로 나트륨 29.1 %, 황 40.5 %, 산소 30.4 %를 포함해요.</p><p>이 화합물의 실험식은 무엇인가요?</p><p><i>A</i><sub>r</sub>을 이용하세요: Na = 22.99, S = 32.07, O = 16.00.</p>",
      options: [
        // EN: <span class="chem">NaSO</span>
        "<span class=\"chem\">NaSO</span>",
        // EN: <span class="chem">NaSO2</span>
        "<span class=\"chem\">NaSO2</span>",
        // EN: <span class="chem">Na2S2O3</span>
        "<span class=\"chem\">Na2S2O3</span>",
        // EN: <span class="chem">Na3S4O3</span>
        "<span class=\"chem\">Na3S4O3</span>",
      ],
      hints: [
        // EN: Imagine 100 g of compound, so each percentage becomes a mass in grams. Then use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span> for each element.
        "화합물이 100 g 있다고 생각하면 각 백분율이 그램 단위의 질량이 돼요. 그다음 원소마다 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span>를 쓰세요.",
        // EN: Divide all three amounts by the smallest one.
        "세 양을 모두 가장 작은 값으로 나누세요.",
        // EN: You should get 1 : 1 : 1.5. Do not round the 1.5. What can you multiply by to make every number whole?
        "1 : 1 : 1.5가 나와야 해요. 1.5를 반올림하지 마세요. 어떤 수를 곱하면 모든 수가 정수가 될까요?",
      ],
      // EN: <div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Na</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">S</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">O</span></th></tr></thead><tbody><tr><th scope="row">Mass in 100 g / g</th><td class="num">29.1</td><td class="num">40.5</td><td class="num">30.4</td></tr><tr><th scope="row">÷ <i>A</i><sub>r</sub> → amount / mol</th><td class="num">1.266</td><td class="num">1.263</td><td class="num">1.900</td></tr><tr><th scope="row">÷ smallest (1.263)</th><td class="num">1.00</td><td class="num">1.00</td><td class="num">1.50</td></tr><tr><th scope="row">× 2</th><td class="num">2</td><td class="num">2</td><td class="num">3</td></tr></tbody></table></div><p>The empirical formula is <strong><span class="chem">Na2S2O3</span></strong>.</p>
      solution: "<div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">Na</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">S</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">O</span></th></tr></thead><tbody><tr><th scope=\"row\">100 g 속 질량 / g</th><td class=\"num\">29.1</td><td class=\"num\">40.5</td><td class=\"num\">30.4</td></tr><tr><th scope=\"row\">÷ <i>A</i><sub>r</sub> → 양 / mol</th><td class=\"num\">1.266</td><td class=\"num\">1.263</td><td class=\"num\">1.900</td></tr><tr><th scope=\"row\">÷ 가장 작은 값(1.263)</th><td class=\"num\">1.00</td><td class=\"num\">1.00</td><td class=\"num\">1.50</td></tr><tr><th scope=\"row\">× 2</th><td class=\"num\">2</td><td class=\"num\">2</td><td class=\"num\">3</td></tr></tbody></table></div><p>실험식은 <strong><span class=\"chem\">Na2S2O3</span></strong>예요.</p>",
      misconception: {
        // EN (option A): You rounded 1.5 down to 1. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.
        "0": "1.5를 1로 내렸어요. .5로 끝나는 비는 정수와 너무 멀어서 반올림할 수 없어요. 대신 모든 수에 2를 곱하세요.",
        // EN (option B): You rounded 1.5 up to 2. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.
        "1": "1.5를 2로 올렸어요. .5로 끝나는 비는 정수와 너무 멀어서 반올림할 수 없어요. 대신 모든 수에 2를 곱하세요.",
        // EN (option D): You used the percentages as if they were numbers of atoms (29 : 40 : 30 ≈ 3 : 4 : 3). Divide each percentage by the <i>A</i><sub>r</sub> first to get moles.
        "3": "백분율을 원자 수처럼 썼어요(29 : 40 : 30 ≈ 3 : 4 : 3). 먼저 각 백분율을 <i>A</i><sub>r</sub>로 나누어 몰을 구하세요.",
      },
    },

    // ── s1-4-q024 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q024": {
      // EN: <p>1.43 <span class="unit">g</span> of an oxide of copper is heated in a stream of hydrogen until all of it has been reduced to copper. The copper left has a mass of 1.27 <span class="unit">g</span>.</p><p>What is the empirical formula of the oxide?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, O = 16.00.</p>
      stem: "<p>구리 산화물 1.43 <span class=\"unit\">g</span>을 수소 기류 속에서 가열해 모두 구리로 환원시켰어요. 남은 구리의 질량은 1.27 <span class=\"unit\">g</span>이에요.</p><p>이 산화물의 실험식은 무엇인가요?</p><p><i>A</i><sub>r</sub>을 이용하세요: Cu = 63.55, O = 16.00.</p>",
      options: [
        // EN: <span class="chem">CuO2</span>
        "<span class=\"chem\">CuO2</span>",
        // EN: <span class="chem">Cu2O</span>
        "<span class=\"chem\">Cu2O</span>",
        // EN: <span class="chem">Cu4O</span>
        "<span class=\"chem\">Cu4O</span>",
        // EN: <span class="chem">Cu8O</span>
        "<span class=\"chem\">Cu8O</span>",
      ],
      hints: [
        // EN: The oxide contains only copper and oxygen. The mass lost is the mass of oxygen, so find it by subtraction.
        "이 산화물에는 구리와 산소만 있어요. 줄어든 질량이 산소의 질량이므로 뺄셈으로 구하세요.",
        // EN: Convert each mass to an amount with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span>. Use the mass of an oxygen <em>atom</em>.
        "<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span>로 각 질량을 양으로 바꾸세요. 산소 <em>원자</em>의 질량을 쓰세요.",
        // EN: Divide both amounts by the smaller one to get the ratio.
        "두 양을 작은 쪽으로 나누어 비를 구하세요.",
      ],
      // EN: <div class="worked__math"><i>m</i>(O) = 1.43 <span class="unit">g</span> − 1.27 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.16 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(Cu) = <span class="frac"><span>1.27 <span class="unit">g</span></span><span>63.55 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0200 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.16 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0100 <span class="unit">mol</span></div><div class="worked__math">Cu : O = 0.0200 : 0.0100<br>&nbsp;&nbsp;= 2 : 1</div><p>The empirical formula is <strong><span class="chem">Cu2O</span></strong>.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(O) = 1.43 <span class=\"unit\">g</span> − 1.27 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.16 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(Cu) = <span class=\"frac\"><span>1.27 <span class=\"unit\">g</span></span><span>63.55 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0200 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.16 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0100 <span class=\"unit\">mol</span></div><div class=\"worked__math\">Cu : O = 0.0200 : 0.0100<br>&nbsp;&nbsp;= 2 : 1</div><p>실험식은 <strong><span class=\"chem\">Cu2O</span></strong>예요.</p>",
      misconception: {
        // EN (option A): You have the ratio upside down. There are 0.0200 mol of Cu and 0.0100 mol of O, so there are two Cu for each O.
        "0": "비를 거꾸로 썼어요. Cu는 0.0200 mol, O는 0.0100 mol이므로 O 1개당 Cu가 2개예요.",
        // EN (option C): You divided the mass of oxygen by 32.00. The formula counts oxygen <em>atoms</em>, so use <i>A</i><sub>r</sub>(O) = 16.00, not <i>M</i>(<span class="chem">O2</span>).
        "2": "산소의 질량을 32.00으로 나누었어요. 화학식은 산소 <em>원자</em>를 세므로 <i>M</i>(<span class=\"chem\">O2</span>)가 아니라 <i>A</i><sub>r</sub>(O) = 16.00을 쓰세요.",
        // EN (option D): You used the ratio of the masses (1.27 : 0.16 ≈ 8 : 1). A formula is a ratio of amounts in moles, so divide each mass by its <i>A</i><sub>r</sub> first.
        "3": "질량의 비를 썼어요(1.27 : 0.16 ≈ 8 : 1). 화학식은 몰 단위 양의 비이므로 먼저 각 질량을 <i>A</i><sub>r</sub>로 나누세요.",
      },
    },

    // ── s1-4-q025 · short · exam · SL · Structure 1.4.4 · 3 marks
    "s1-4-q025": {
      // EN: <p>A compound contains only carbon, hydrogen and oxygen. Complete combustion of 1.50 <span class="unit">g</span> of the compound gives 3.30 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.80 <span class="unit">g</span> of <span class="chem">H2O</span>.</p><p>Determine the empirical formula of the compound. Show your working.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>
      stem: "<p>어떤 화합물은 탄소, 수소, 산소만 포함해요. 이 화합물 1.50 <span class=\"unit\">g</span>을 완전 연소시키면 <span class=\"chem\">CO2</span> 3.30 <span class=\"unit\">g</span>과 <span class=\"chem\">H2O</span> 1.80 <span class=\"unit\">g</span>이 생겨요.</p><p>이 화합물의 실험식을 구하시오 (determine). 풀이 과정을 보이세요.</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>, <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>",
      hints: [
        // EN: All the carbon ends up in <span class="chem">CO2</span> and all the hydrogen ends up in <span class="chem">H2O</span>. Use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> for each product.
        "탄소는 모두 <span class=\"chem\">CO2</span>로, 수소는 모두 <span class=\"chem\">H2O</span>로 가요. 각 생성물에 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>를 쓰세요.",
        // EN: Each <span class="chem">H2O</span> contains 2 H atoms, so <i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>).
        "<span class=\"chem\">H2O</span> 1개에는 H 원자가 2개 있으므로 <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)예요.",
        // EN: The oxygen in the products comes partly from the air, so you cannot count it directly. Find the mass of O in the compound by difference: mass of compound − mass of C − mass of H.
        "생성물 속 산소의 일부는 공기에서 왔으므로 바로 셀 수 없어요. 화합물 속 O의 질량은 차이로 구하세요: 화합물의 질량 − C의 질량 − H의 질량.",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>)<br>&nbsp;&nbsp;= <span class="frac"><span>3.30 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.07498 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>)<br>&nbsp;&nbsp;= 2 × <span class="frac"><span>1.80 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1998 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(C) = 0.07498 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.9005 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.1998 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.2018 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 1.50 <span class="unit">g</span> − 0.9005 <span class="unit">g</span> − 0.2018 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.3977 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.3977 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02485 <span class="unit">mol</span> &nbsp; (M2)</div><p>Divide each amount by the smallest (0.02485 mol):</p><div class="worked__math">C : H : O = 3.02 : 8.04 : 1.00</div><p>Empirical formula: <strong><span class="chem">C3H8O</span></strong> (M3). The ratios 3.02 and 8.04 are within experimental rounding of whole numbers, so rounding is justified here.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)<br>&nbsp;&nbsp;= <span class=\"frac\"><span>3.30 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.07498 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)<br>&nbsp;&nbsp;= 2 × <span class=\"frac\"><span>1.80 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1998 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(C) = 0.07498 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.9005 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.1998 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.2018 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 1.50 <span class=\"unit\">g</span> − 0.9005 <span class=\"unit\">g</span> − 0.2018 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.3977 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.3977 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02485 <span class=\"unit\">mol</span> &nbsp; (M2)</div><p>각 양을 가장 작은 값(0.02485 mol)으로 나누세요:</p><div class=\"worked__math\">C : H : O = 3.02 : 8.04 : 1.00</div><p>실험식: <strong><span class=\"chem\">C3H8O</span></strong> (M3). 3.02와 8.04는 실험 오차 범위 안에서 정수에 가까우므로, 여기서는 반올림해도 돼요.</p>",
      // EN: <p><i>n</i>(C) = 3.30 ÷ 44.01 = 0.0750 mol and <i>n</i>(H) = 2 × (1.80 ÷ 18.02) = 0.200 mol.</p><p><i>m</i>(O) = 1.50 − (0.0750 × 12.01) − (0.200 × 1.01) = 0.398 g, so <i>n</i>(O) = 0.398 ÷ 16.00 = 0.0249 mol.</p><p>C : H : O = 0.0750 : 0.200 : 0.0249 = 3 : 8 : 1. Empirical formula: <span class="chem">C3H8O</span>.</p>
      answer: "<p><i>n</i>(C) = 3.30 ÷ 44.01 = 0.0750 mol, <i>n</i>(H) = 2 × (1.80 ÷ 18.02) = 0.200 mol.</p><p><i>m</i>(O) = 1.50 − (0.0750 × 12.01) − (0.200 × 1.01) = 0.398 g이므로 <i>n</i>(O) = 0.398 ÷ 16.00 = 0.0249 mol.</p><p>C : H : O = 0.0750 : 0.200 : 0.0249 = 3 : 8 : 1. 실험식: <span class=\"chem\">C3H8O</span>.</p>",
      markscheme: [
        // EN: M1: n(C) = 0.0750 mol AND n(H) = 0.200 mol. (Accept masses: 0.901 g of C and 0.202 g of H.)
        "M1: n(C) = 0.0750 mol 그리고 n(H) = 0.200 mol. (질량도 인정: C 0.901 g, H 0.202 g.)",
        // EN: M2: mass of O by difference = 0.398 g, OR n(O) = 0.0249 mol.
        "M2: 차이로 구한 O의 질량 = 0.398 g, 또는 n(O) = 0.0249 mol.",
        // EN: M3: C₃H₈O. (A correct final formula with no working would earn all 3 marks, but always show working so that an error is penalised only once.)
        "M3: C₃H₈O. (풀이 없이 최종 화학식만 맞아도 3점을 모두 받지만, 실수가 한 번만 감점되도록 늘 풀이 과정을 보이세요.)",
      ],
    },

    // ── s1-4-q026 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q026": {
      // EN: <p>An oxide of phosphorus has the empirical formula <span class="chem">P2O5</span> and a molar mass of 283.88 <span class="unit">g mol-1</span>.</p><p>What is its molecular formula?</p><p>Use <i>A</i><sub>r</sub>: P = 30.97, O = 16.00.</p>
      stem: "<p>인의 산화물 중 하나는 실험식이 <span class=\"chem\">P2O5</span>이고 몰 질량이 283.88 <span class=\"unit\">g mol-1</span>이에요.</p><p>분자식은 무엇인가요?</p><p><i>A</i><sub>r</sub>을 이용하세요: P = 30.97, O = 16.00.</p>",
      options: [
        // EN: <span class="chem">P2O5</span>
        "<span class=\"chem\">P2O5</span>",
        // EN: <span class="chem">P2O10</span>
        "<span class=\"chem\">P2O10</span>",
        // EN: <span class="chem">P4O5</span>
        "<span class=\"chem\">P4O5</span>",
        // EN: <span class="chem">P4O10</span>
        "<span class=\"chem\">P4O10</span>",
      ],
      hints: [
        // EN: Find the mass of one empirical formula unit, <span class="chem">P2O5</span>.
        "실험식 단위 <span class=\"chem\">P2O5</span> 1개의 질량을 구하세요.",
        // EN: Divide the molar mass by the empirical formula mass. The result is how many empirical units make one molecule.
        "몰 질량을 실험식량으로 나누세요. 그 결과가 분자 1개를 이루는 실험식 단위의 개수예요.",
      ],
      // EN: <p>Find the mass of one empirical formula unit.</p><div class="worked__math"><i>M</i>(<span class="chem">P2O5</span>) = (2 × 30.97) + (5 × 16.00)<br>&nbsp;&nbsp;= 141.94 <span class="unit">g mol-1</span></div><div class="worked__math">Number of units = <span class="frac"><span>283.88 <span class="unit">g mol-1</span></span><span>141.94 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><div class="worked__math">Molecular formula = 2 × <span class="chem">P2O5</span><br>&nbsp;&nbsp;= <strong><span class="chem">P4O10</span></strong></div>
      solution: "<p>실험식 단위 1개의 질량을 구하세요.</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">P2O5</span>) = (2 × 30.97) + (5 × 16.00)<br>&nbsp;&nbsp;= 141.94 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\">단위 개수 = <span class=\"frac\"><span>283.88 <span class=\"unit\">g mol-1</span></span><span>141.94 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><div class=\"worked__math\">분자식 = 2 × <span class=\"chem\">P2O5</span><br>&nbsp;&nbsp;= <strong><span class=\"chem\">P4O10</span></strong></div>",
      misconception: {
        // EN (option A): This is the empirical formula. Its mass is 141.94, which is only half of the molar mass, so the molecule contains two empirical units.
        "0": "이것은 실험식이에요. 질량이 141.94로 몰 질량의 절반밖에 안 되므로, 분자에는 실험식 단위가 2개 들어 있어요.",
        // EN (option B): You doubled only the oxygen. Every subscript in the empirical formula must be multiplied by the same whole number.
        "1": "산소만 2배 했어요. 실험식의 모든 아래 첨자에 같은 정수를 곱해야 해요.",
        // EN (option C): You doubled only the phosphorus. Every subscript in the empirical formula must be multiplied by the same whole number.
        "2": "인만 2배 했어요. 실험식의 모든 아래 첨자에 같은 정수를 곱해야 해요.",
      },
    },

    // ── s1-4-q027 · numeric · exam · SL · Structure 1.4.4 · 3 marks
    "s1-4-q027": {
      // EN: <p>7.15 <span class="unit">g</span> of hydrated sodium carbonate, <span class="chem">Na2CO3</span>·<i>x</i><span class="chem">H2O</span>, is heated to constant mass. The anhydrous <span class="chem">Na2CO3</span> left has a mass of 2.65 <span class="unit">g</span>.</p><p>Determine the whole-number value of <i>x</i>.</p><p><i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>탄산 나트륨 수화물(<span class=\"chem\">Na2CO3</span>·<i>x</i><span class=\"chem\">H2O</span>) 7.15 <span class=\"unit\">g</span>을 질량이 일정해질 때까지 가열했어요. 남은 무수 <span class=\"chem\">Na2CO3</span>의 질량은 2.65 <span class=\"unit\">g</span>이에요.</p><p><i>x</i>의 정숫값을 구하시오 (determine).</p><p><i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span>, <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: This is an empirical formula problem with two "building blocks": <span class="chem">Na2CO3</span> and <span class="chem">H2O</span>. The mass lost on heating is the mass of water.
        "이것은 “구성 단위”가 두 개(<span class=\"chem\">Na2CO3</span>와 <span class=\"chem\">H2O</span>)인 실험식 문제예요. 가열해서 줄어든 질량이 물의 질량이에요.",
        // EN: Find the amount of each with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>. Use 2.65 g for <span class="chem">Na2CO3</span> and the mass lost for <span class="chem">H2O</span>.
        "<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>로 각각의 양을 구하세요. <span class=\"chem\">Na2CO3</span>는 2.65 g, <span class=\"chem\">H2O</span>는 줄어든 질량을 쓰세요.",
        // EN: <i>x</i> = <i>n</i>(<span class="chem">H2O</span>) ÷ <i>n</i>(<span class="chem">Na2CO3</span>).
        "<i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">Na2CO3</span>).",
      ],
      // EN: <div class="worked__math"><i>m</i>(<span class="chem">H2O</span>) = 7.15 <span class="unit">g</span> − 2.65 <span class="unit">g</span><br>&nbsp;&nbsp;= 4.50 <span class="unit">g</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">Na2CO3</span>) = <span class="frac"><span>2.65 <span class="unit">g</span></span><span>105.99 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02500 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = <span class="frac"><span>4.50 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2497 <span class="unit">mol</span> &nbsp; (M2)</div><div class="worked__math"><i>x</i> = <span class="frac"><span>0.2497 <span class="unit">mol</span></span><span>0.02500 <span class="unit">mol</span></span></span><br>&nbsp;&nbsp;= 9.99 &nbsp; (M3)</div><p>To the nearest whole number, <strong><i>x</i> = 10</strong>.</p><p>Named slips: dividing the masses (4.50 ÷ 2.65 = 1.7) skips the conversion to moles. Using 7.15 g as the mass of <span class="chem">Na2CO3</span> gives 3.7, because 7.15 g still includes the water.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(<span class=\"chem\">H2O</span>) = 7.15 <span class=\"unit\">g</span> − 2.65 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 4.50 <span class=\"unit\">g</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">Na2CO3</span>) = <span class=\"frac\"><span>2.65 <span class=\"unit\">g</span></span><span>105.99 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02500 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = <span class=\"frac\"><span>4.50 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2497 <span class=\"unit\">mol</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>x</i> = <span class=\"frac\"><span>0.2497 <span class=\"unit\">mol</span></span><span>0.02500 <span class=\"unit\">mol</span></span></span><br>&nbsp;&nbsp;= 9.99 &nbsp; (M3)</div><p>가장 가까운 정수로 나타내면 <strong><i>x</i> = 10</strong>이에요.</p><p>흔한 실수: 질량끼리 나누면(4.50 ÷ 2.65 = 1.7) 몰로 바꾸는 단계를 건너뛴 거예요. 7.15 g을 <span class=\"chem\">Na2CO3</span>의 질량으로 쓰면 3.7이 나와요. 7.15 g에는 아직 물이 포함되어 있기 때문이에요.</p>",
    },

    // ── s1-4-q028 · short · exam · SL · Structure 1.4.4 · 2 marks
    "s1-4-q028": {
      // EN: <p>A student heats a hydrated salt in a crucible to find the amount of water of crystallization. The method says: "heat to constant mass".</p><p>Describe what "heat to constant mass" means in practice, and explain why it is done.</p>
      stem: "<p>한 학생이 도가니에 수화된 염을 넣고 가열해서 결정수의 양을 구하려고 해요. 실험 방법에는 “질량이 일정해질 때까지 가열한다”라고 쓰여 있어요.</p><p>“질량이 일정해질 때까지 가열한다”가 실제로 무엇을 뜻하는지 서술하시오 (describe). 그리고 왜 그렇게 하는지 설명하시오 (explain).</p>",
      hints: [
        // EN: How can you tell, using only a balance, that nothing more is leaving the crucible?
        "저울만 써서, 도가니에서 더 이상 빠져나가는 것이 없다는 것을 어떻게 알 수 있을까요?",
        // EN: Think about what would happen to your value for the water if some water was still in the solid.
        "고체에 물이 아직 남아 있다면 물의 양을 구한 값이 어떻게 될지 생각해 보세요.",
      ],
      // EN: <p>One weighing cannot tell you whether water is still being lost. If the mass after a second heating is the same as after the first, no more water is leaving. If you stop too early, the mass lost is too small, so the calculated amount of water is too low.</p>
      solution: "<p>한 번 재는 것만으로는 물이 아직 빠져나가고 있는지 알 수 없어요. 두 번째로 가열한 뒤의 질량이 첫 번째와 같으면 더 이상 물이 빠져나가지 않는 거예요. 너무 일찍 멈추면 줄어든 질량이 너무 작아서, 계산한 물의 양도 너무 작게 나와요.</p>",
      // EN: <p>Heat, cool and weigh the crucible, then repeat the heating and weighing until two weighings in a row give the same mass. This shows that all the water of crystallization has been removed, so the mass lost is the full mass of water.</p>
      answer: "<p>도가니를 가열하고 식힌 뒤 질량을 재요. 그다음 연속한 두 번의 측정값이 같아질 때까지 가열과 측정을 되풀이해요. 그러면 결정수가 모두 제거되었으므로 줄어든 질량이 물의 전체 질량이에요.</p>",
      markscheme: [
        // EN: Heat, (cool,) weigh and repeat until the mass no longer changes / two consecutive readings are the same.
        "가열하고 (식히고) 질량을 잰 뒤, 질량이 더 이상 변하지 않을 때까지 / 연속한 두 측정값이 같을 때까지 되풀이한다.",
        // EN: To make sure that all of the water has been removed / the dehydration is complete. (Accept: otherwise the mass of water, and so the value of x, would be too low.)
        "물이 모두 제거되었는지 / 탈수가 완전히 일어났는지 확인하기 위해서. (인정: 그렇지 않으면 물의 질량과 x의 값이 너무 작게 나온다.)",
      ],
    },

    // ── s1-4-q029 · short · challenge · SL · Structure 1.4.4 · 4 marks
    "s1-4-q029": {
      // EN: <p>A colourless liquid contains only carbon, hydrogen and oxygen. Complete combustion of 1.35 <span class="unit">g</span> of the liquid gives 2.64 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.35 <span class="unit">g</span> of <span class="chem">H2O</span>. Its molar mass is 90.14 <span class="unit">g mol-1</span>.</p><p>Determine the empirical formula and the molecular formula of the liquid. Show your working.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>
      stem: "<p>어떤 무색 액체는 탄소, 수소, 산소만 포함해요. 이 액체 1.35 <span class=\"unit\">g</span>을 완전 연소시키면 <span class=\"chem\">CO2</span> 2.64 <span class=\"unit\">g</span>과 <span class=\"chem\">H2O</span> 1.35 <span class=\"unit\">g</span>이 생겨요. 이 액체의 몰 질량은 90.14 <span class=\"unit\">g mol-1</span>이에요.</p><p>이 액체의 실험식과 분자식을 구하시오 (determine). 풀이 과정을 보이세요.</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>, <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>",
      hints: [
        // EN: Split the task: first the empirical formula from the combustion data, then the molecular formula from the molar mass.
        "문제를 나누세요: 먼저 연소 자료로 실험식을 구하고, 그다음 몰 질량으로 분자식을 구해요.",
        // EN: <i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>), <i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>). Find the mass of O by difference.
        "<i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>), <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>). O의 질량은 차이로 구하세요.",
        // EN: Compare the molar mass with the mass of one empirical formula unit. Multiply every subscript by the ratio.
        "몰 질량을 실험식 단위 1개의 질량과 비교하세요. 모든 아래 첨자에 그 비를 곱하세요.",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = <span class="frac"><span>2.64 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × <span class="frac"><span>1.35 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1498 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(C) = 0.05999 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.7204 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.1498 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.1513 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 1.35 <span class="unit">g</span> − 0.7204 <span class="unit">g</span> − 0.1513 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.4782 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.4782 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02989 <span class="unit">mol</span> &nbsp; (M2)</div><p>Divide each amount by the smallest (0.02989 mol):</p><div class="worked__math">C : H : O = 2.01 : 5.01 : 1.00</div><p>Empirical formula: <strong><span class="chem">C2H5O</span></strong> (M3). Now compare its mass with the molar mass.</p><div class="worked__math"><i>M</i>(<span class="chem">C2H5O</span>) = (2 × 12.01) + (5 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 16.00<br>&nbsp;&nbsp;= 45.07 <span class="unit">g mol-1</span></div><div class="worked__math">Number of units = <span class="frac"><span>90.14 <span class="unit">g mol-1</span></span><span>45.07 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><p>Molecular formula = 2 × <span class="chem">C2H5O</span> = <strong><span class="chem">C4H10O2</span></strong> (M4).</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = <span class=\"frac\"><span>2.64 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × <span class=\"frac\"><span>1.35 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1498 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(C) = 0.05999 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.7204 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.1498 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.1513 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 1.35 <span class=\"unit\">g</span> − 0.7204 <span class=\"unit\">g</span> − 0.1513 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.4782 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.4782 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02989 <span class=\"unit\">mol</span> &nbsp; (M2)</div><p>각 양을 가장 작은 값(0.02989 mol)으로 나누세요:</p><div class=\"worked__math\">C : H : O = 2.01 : 5.01 : 1.00</div><p>실험식: <strong><span class=\"chem\">C2H5O</span></strong> (M3). 이제 그 질량을 몰 질량과 비교해요.</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">C2H5O</span>) = (2 × 12.01) + (5 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 16.00<br>&nbsp;&nbsp;= 45.07 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\">단위 개수 = <span class=\"frac\"><span>90.14 <span class=\"unit\">g mol-1</span></span><span>45.07 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><p>분자식 = 2 × <span class=\"chem\">C2H5O</span> = <strong><span class=\"chem\">C4H10O2</span></strong> (M4).</p>",
      // EN: <p><i>n</i>(C) = 2.64 ÷ 44.01 = 0.0600 mol; <i>n</i>(H) = 2 × (1.35 ÷ 18.02) = 0.150 mol.</p><p><i>m</i>(O) = 1.35 − (0.0600 × 12.01) − (0.150 × 1.01) = 0.478 g; <i>n</i>(O) = 0.0299 mol.</p><p>C : H : O = 2 : 5 : 1, so the empirical formula is <span class="chem">C2H5O</span> (mass 45.07). 90.14 ÷ 45.07 = 2, so the molecular formula is <span class="chem">C4H10O2</span>.</p>
      answer: "<p><i>n</i>(C) = 2.64 ÷ 44.01 = 0.0600 mol; <i>n</i>(H) = 2 × (1.35 ÷ 18.02) = 0.150 mol.</p><p><i>m</i>(O) = 1.35 − (0.0600 × 12.01) − (0.150 × 1.01) = 0.478 g; <i>n</i>(O) = 0.0299 mol.</p><p>C : H : O = 2 : 5 : 1이므로 실험식은 <span class=\"chem\">C2H5O</span>(질량 45.07)예요. 90.14 ÷ 45.07 = 2이므로 분자식은 <span class=\"chem\">C4H10O2</span>예요.</p>",
      markscheme: [
        // EN: M1: n(C) = 0.0600 mol AND n(H) = 0.150 mol. (Accept masses: 0.720 g of C and 0.151 g of H.)
        "M1: n(C) = 0.0600 mol 그리고 n(H) = 0.150 mol. (질량도 인정: C 0.720 g, H 0.151 g.)",
        // EN: M2: mass of O by difference = 0.478 g, OR n(O) = 0.0299 mol.
        "M2: 차이로 구한 O의 질량 = 0.478 g, 또는 n(O) = 0.0299 mol.",
        // EN: M3: empirical formula C₂H₅O.
        "M3: 실험식 C₂H₅O.",
        // EN: M4: 90.14 ÷ 45.07 = 2, so molecular formula C₄H₁₀O₂. (Allow error carried forward from your empirical formula.)
        "M4: 90.14 ÷ 45.07 = 2이므로 분자식은 C₄H₁₀O₂. (앞에서 구한 실험식의 오류는 이어서 인정(ECF).)",
      ],
    },

    // ── s1-4-q030 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "s1-4-q030": {
      // EN: <p>An oxide of iron contains 72.4 % iron and 27.6 % oxygen by mass. A student works out its empirical formula.</p><ol><li>Fe: 72.4 ÷ 55.85 = 1.296 &nbsp; O: 27.6 ÷ 16.00 = 1.725</li><li>Divide by the smallest: Fe 1.296 ÷ 1.296 = 1.00 &nbsp; O 1.725 ÷ 1.296 = 1.33</li><li>Round to whole numbers: Fe = 1, O = 1</li><li>Empirical formula: <span class="chem">FeO</span></li></ol><p>Which statement about this working is correct?</p>
      stem: "<p>어떤 철 산화물은 질량으로 철 72.4 %, 산소 27.6 %를 포함해요. 한 학생이 실험식을 다음과 같이 구했어요.</p><ol><li>Fe: 72.4 ÷ 55.85 = 1.296 &nbsp; O: 27.6 ÷ 16.00 = 1.725</li><li>가장 작은 값으로 나누기: Fe 1.296 ÷ 1.296 = 1.00 &nbsp; O 1.725 ÷ 1.296 = 1.33</li><li>정수로 반올림하기: Fe = 1, O = 1</li><li>실험식: <span class=\"chem\">FeO</span></li></ol><p>이 풀이에 대한 설명으로 옳은 것은 무엇인가요?</p>",
      options: [
        // EN: Line 1 is wrong: the percentages should be divided by the atomic numbers.
        "1번 줄이 틀렸다: 백분율을 원자 번호로 나누어야 한다.",
        // EN: Line 2 is wrong: the student should divide by the largest value.
        "2번 줄이 틀렸다: 가장 큰 값으로 나누어야 한다.",
        // EN: Line 3 is wrong: 1.33 is too far from a whole number to round.
        "3번 줄이 틀렸다: 1.33은 정수와 너무 멀어서 반올림할 수 없다.",
        // EN: The working is correct and the formula is <span class="chem">FeO</span>.
        "풀이가 맞고 화학식은 <span class=\"chem\">FeO</span>이다.",
      ],
      hints: [
        // EN: Only round when a value is very close to a whole number (for example 1.98 or 3.02).
        "값이 정수에 아주 가까울 때만 반올림하세요(예: 1.98이나 3.02).",
        // EN: 1.33 is a recognizable fraction: 1⅓. What can you multiply by to clear a third?
        "1.33은 알아볼 수 있는 분수예요: 1⅓. 3분의 1을 없애려면 무엇을 곱하면 될까요?",
      ],
      // EN: <p>Lines 1 and 2 are correct. The error is in line 3. A ratio of 1 : 1.33 must be multiplied up, not rounded.</p><div class="worked__math">Fe : O = 1.00 : 1.33</div><div class="worked__math">× 3: Fe : O = 3.00 : 3.99 ≈ 3 : 4</div><p>The empirical formula is <strong><span class="chem">Fe3O4</span></strong>. Look out for .5 (× 2), .33 or .67 (× 3) and .25 or .75 (× 4).</p>
      solution: "<p>1번과 2번 줄은 맞아요. 오류는 3번 줄에 있어요. 1 : 1.33이라는 비는 반올림하지 말고 곱해서 정수로 만들어야 해요.</p><div class=\"worked__math\">Fe : O = 1.00 : 1.33</div><div class=\"worked__math\">× 3: Fe : O = 3.00 : 3.99 ≈ 3 : 4</div><p>실험식은 <strong><span class=\"chem\">Fe3O4</span></strong>예요. .5(× 2), .33 또는 .67(× 3), .25 또는 .75(× 4)를 잘 살펴보세요.</p>",
      misconception: {
        // EN (option A): Dividing by <i>A</i><sub>r</sub> is right. It converts mass into amount in moles. Atomic number counts protons and is not used here.
        "0": "<i>A</i><sub>r</sub>로 나누는 것은 맞아요. 질량을 몰 단위의 양으로 바꿔 줘요. 원자 번호는 양성자 수이고 여기서는 쓰지 않아요.",
        // EN (option B): Dividing by the smallest value is the standard method. It sets the smallest amount to 1 so that the other values are easy to compare.
        "1": "가장 작은 값으로 나누는 것은 표준 방법이에요. 가장 작은 양을 1로 맞춰서 다른 값들을 비교하기 쉽게 해 줘요.",
        // EN (option D): Check the last step. 1.33 is one and a third, not about 1. <span class="chem">FeO</span> would contain 77.7 % iron, which does not match the data.
        "3": "마지막 단계를 확인하세요. 1.33은 1과 3분의 1이지, 1에 가까운 값이 아니에요. <span class=\"chem\">FeO</span>라면 철이 77.7 %여야 하는데, 자료와 맞지 않아요.",
      },
    },

    // ── s1-4-q031 · numeric · challenge · SL · Structure 1.4.4 · 3 marks
    "s1-4-q031": {
      // EN: <p>A metal M forms a chloride with the formula <span class="chem">MCl2</span>. The chloride contains 74.47 % chlorine by mass.</p><p>Calculate the relative atomic mass of M. Give your answer to 3 significant figures.</p><p><i>A</i><sub>r</sub>(Cl) = 35.45</p>
      stem: "<p>금속 M은 화학식이 <span class=\"chem\">MCl2</span>인 염화물을 만들어요. 이 염화물은 질량으로 염소를 74.47 % 포함해요.</p><p>M의 상대 원자 질량을 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>A</i><sub>r</sub>(Cl) = 35.45</p>",
      hints: [
        // EN: This is percentage composition in reverse. You know the formula and the percentage, and you want a molar mass.
        "이것은 질량 백분율 조성을 거꾸로 푸는 문제예요. 화학식과 백분율을 알고, 몰 질량을 구하려는 거예요.",
        // EN: In one mole of <span class="chem">MCl2</span> there are 2 × 35.45 = 70.90 g of chlorine. That 70.90 g is 74.47 % of the molar mass.
        "<span class=\"chem\">MCl2</span> 1몰에는 염소가 2 × 35.45 = 70.90 g 있어요. 이 70.90 g이 몰 질량의 74.47 %예요.",
        // EN: Molar mass = 70.90 ÷ 0.7447. Then subtract the chlorine to leave M.
        "몰 질량 = 70.90 ÷ 0.7447. 그다음 염소를 빼면 M이 남아요.",
      ],
      // EN: <p>One mole of <span class="chem">MCl2</span> contains 2 mol of Cl.</p><div class="worked__math"><i>m</i>(Cl) = 2 × 35.45 <span class="unit">g</span><br>&nbsp;&nbsp;= 70.90 <span class="unit">g</span> &nbsp; (M1)</div><div class="worked__math"><i>M</i>(<span class="chem">MCl2</span>) = <span class="frac"><span>70.90 <span class="unit">g mol-1</span></span><span>0.7447</span></span><br>&nbsp;&nbsp;= 95.21 <span class="unit">g mol-1</span> &nbsp; (M2)</div><div class="worked__math"><i>A</i><sub>r</sub>(M) = 95.21 − 70.90<br>&nbsp;&nbsp;= 24.31<br>&nbsp;&nbsp;= <strong>24.3</strong> (no units) &nbsp; (M3)</div><p>The data booklet value for magnesium is 24.31, so M is magnesium. Named slips: 12.2 means you used one Cl instead of two. 95.2 means you did not subtract the chlorine.</p>
      solution: "<p><span class=\"chem\">MCl2</span> 1몰에는 Cl이 2 mol 들어 있어요.</p><div class=\"worked__math\"><i>m</i>(Cl) = 2 × 35.45 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 70.90 <span class=\"unit\">g</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MCl2</span>) = <span class=\"frac\"><span>70.90 <span class=\"unit\">g mol-1</span></span><span>0.7447</span></span><br>&nbsp;&nbsp;= 95.21 <span class=\"unit\">g mol-1</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>A</i><sub>r</sub>(M) = 95.21 − 70.90<br>&nbsp;&nbsp;= 24.31<br>&nbsp;&nbsp;= <strong>24.3</strong> (단위 없음) &nbsp; (M3)</div><p>데이터 부클릿에서 마그네슘의 값은 24.31이므로 M은 마그네슘이에요. 흔한 실수: 12.2가 나왔다면 Cl을 2개가 아니라 1개로 쓴 거예요. 95.2가 나왔다면 염소를 빼지 않은 거예요.</p>",
    },

    // ── s1-4-q032 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "s1-4-q032": {
      // EN: <p>0.920 <span class="unit">g</span> of a compound of carbon, hydrogen and oxygen burns completely to give 1.76 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.08 <span class="unit">g</span> of <span class="chem">H2O</span>. A student starts to find the empirical formula.</p><ol><li><i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>) = 1.76 ÷ 44.01 = 0.0400 <span class="unit">mol</span></li><li><i>n</i>(H) = <i>n</i>(<span class="chem">H2O</span>) = 1.08 ÷ 18.02 = 0.0599 <span class="unit">mol</span></li><li><i>m</i>(O) = 0.920 − (0.0400 × 12.01) − (0.0599 × 1.01) = 0.379 <span class="unit">g</span></li><li><i>n</i>(O) = 0.379 ÷ 16.00 = 0.0237 <span class="unit">mol</span></li></ol><p>Which line contains the first error?</p>
      stem: "<p>탄소, 수소, 산소로 된 화합물 0.920 <span class=\"unit\">g</span>이 완전 연소해서 <span class=\"chem\">CO2</span> 1.76 <span class=\"unit\">g</span>과 <span class=\"chem\">H2O</span> 1.08 <span class=\"unit\">g</span>이 생겼어요. 한 학생이 실험식을 구하기 시작했어요.</p><ol><li><i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) = 1.76 ÷ 44.01 = 0.0400 <span class=\"unit\">mol</span></li><li><i>n</i>(H) = <i>n</i>(<span class=\"chem\">H2O</span>) = 1.08 ÷ 18.02 = 0.0599 <span class=\"unit\">mol</span></li><li><i>m</i>(O) = 0.920 − (0.0400 × 12.01) − (0.0599 × 1.01) = 0.379 <span class=\"unit\">g</span></li><li><i>n</i>(O) = 0.379 ÷ 16.00 = 0.0237 <span class=\"unit\">mol</span></li></ol><p>처음으로 오류가 있는 줄은 어느 것인가요?</p>",
      options: [
        // EN: Line 1
        "1번 줄",
        // EN: Line 2
        "2번 줄",
        // EN: Line 3
        "3번 줄",
        // EN: Line 4
        "4번 줄",
      ],
      hints: [
        // EN: Check each "<i>n</i>(element) = <i>n</i>(product)" step against the formula of the product.
        "“<i>n</i>(원소) = <i>n</i>(생성물)” 단계마다 생성물의 화학식과 맞는지 확인하세요.",
        // EN: How many hydrogen atoms are in one molecule of <span class="chem">H2O</span>?
        "<span class=\"chem\">H2O</span> 분자 1개에는 수소 원자가 몇 개 있나요?",
      ],
      // EN: <p>The first error is in line 2. Each <span class="chem">H2O</span> molecule contains 2 hydrogen atoms.</p><div class="worked__math"><i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>)<br>&nbsp;&nbsp;= 2 × 0.0599 <span class="unit">mol</span><br>&nbsp;&nbsp;= 0.120 <span class="unit">mol</span></div><div class="worked__math"><i>m</i>(C) = 0.0400 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.480 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.120 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.121 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 0.920 <span class="unit">g</span> − 0.480 <span class="unit">g</span> − 0.121 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.319 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.319 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0199 <span class="unit">mol</span></div><div class="worked__math">C : H : O = 0.0400 : 0.120 : 0.0199<br>&nbsp;&nbsp;= 2 : 6 : 1</div><p>The correct empirical formula is <span class="chem">C2H6O</span>. In an exam, lines 3 and 4 would still earn credit as "error carried forward", which is why showing working matters.</p>
      solution: "<p>처음 오류는 2번 줄에 있어요. <span class=\"chem\">H2O</span> 분자 1개에는 수소 원자가 2개 있어요.</p><div class=\"worked__math\"><i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)<br>&nbsp;&nbsp;= 2 × 0.0599 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 0.120 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>m</i>(C) = 0.0400 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.480 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.120 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.121 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 0.920 <span class=\"unit\">g</span> − 0.480 <span class=\"unit\">g</span> − 0.121 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.319 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.319 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0199 <span class=\"unit\">mol</span></div><div class=\"worked__math\">C : H : O = 0.0400 : 0.120 : 0.0199<br>&nbsp;&nbsp;= 2 : 6 : 1</div><p>올바른 실험식은 <span class=\"chem\">C2H6O</span>예요. 시험에서는 3번과 4번 줄도 “오류 이어 인정(error carried forward)”으로 점수를 받을 수 있어요. 그래서 풀이 과정을 보이는 것이 중요해요.</p>",
      misconception: {
        // EN (option A): Line 1 is correct. Each <span class="chem">CO2</span> molecule contains one carbon atom, so <i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>).
        "0": "1번 줄은 맞아요. <span class=\"chem\">CO2</span> 분자 1개에는 탄소 원자가 1개 있으므로 <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)예요.",
        // EN (option C): The method in line 3 is correct: oxygen is found by difference. Its value is wrong only because it uses a wrong number from an earlier line. Find where that number came from.
        "2": "3번 줄의 방법은 맞아요: 산소는 차이로 구해요. 값이 틀린 것은 앞 줄의 틀린 수를 썼기 때문이에요. 그 수가 어디서 왔는지 찾아보세요.",
        // EN (option D): The method in line 4 is correct: <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub> with 16.00 for oxygen atoms. The wrong value was carried forward from an earlier line.
        "3": "4번 줄의 방법은 맞아요: 산소 원자에 16.00을 써서 <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub>이에요. 틀린 값은 앞 줄에서 이어져 온 거예요.",
      },
    },

    // ── s1-4-q033 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q033": {
      // EN: <p>0.0500 <span class="unit">mol</span> of sodium chloride is dissolved in water and the solution is made up to 250 <span class="unit">cm3</span>.</p><p>Calculate the concentration of the solution, in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>염화 나트륨 0.0500 <span class=\"unit\">mol</span>을 물에 녹이고 용액을 250 <span class=\"unit\">cm3</span>로 맞췄어요.</p><p>이 용액의 농도를 <span class=\"unit\">mol dm-3</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: The data booklet gives <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>. Rearranged: <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span>.
        "데이터 부클릿에는 <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span>가 있어요. 식을 바꾸면 <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span>예요.",
        // EN: The volume must be in <span class="unit">dm3</span>. To convert <span class="unit">cm3</span> to <span class="unit">dm3</span>, divide by 1000: 250 <span class="unit">cm3</span> = 0.250 <span class="unit">dm3</span>.
        "부피는 <span class=\"unit\">dm3</span>여야 해요. <span class=\"unit\">cm3</span>를 <span class=\"unit\">dm3</span>로 바꾸려면 1000으로 나누세요: 250 <span class=\"unit\">cm3</span> = 0.250 <span class=\"unit\">dm3</span>.",
      ],
      // EN: <div class="worked__math"><i>V</i> = 250 <span class="unit">cm3</span> ÷ 1000 = 0.250 <span class="unit">dm3</span></div><div class="worked__math"><i>C</i> = <span class="frac"><span><i>n</i></span><span><i>V</i></span></span> = <span class="frac"><span>0.0500 <span class="unit">mol</span></span><span>0.250 <span class="unit">dm3</span></span></span></div><div class="worked__math"><i>C</i> = <strong>0.200 <span class="unit">mol dm-3</span></strong></div><p>Named slips: 0.000200 means you left the volume in <span class="unit">cm3</span>. 0.0125 means you multiplied by the volume instead of dividing.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 250 <span class=\"unit\">cm3</span> ÷ 1000 = 0.250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>C</i> = <span class=\"frac\"><span><i>n</i></span><span><i>V</i></span></span> = <span class=\"frac\"><span>0.0500 <span class=\"unit\">mol</span></span><span>0.250 <span class=\"unit\">dm3</span></span></span></div><div class=\"worked__math\"><i>C</i> = <strong>0.200 <span class=\"unit\">mol dm-3</span></strong></div><p>흔한 실수: 0.000200이 나왔다면 부피를 <span class=\"unit\">cm3</span>로 둔 거예요. 0.0125가 나왔다면 부피로 나누지 않고 곱한 거예요.</p>",
    },

    // ── s1-4-q034 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q034": {
      // EN: <p>A bottle is labelled <span class="mono">[NaOH] = 0.10</span>. What do the square brackets tell you?</p>
      stem: "<p>병에 <span class=\"mono\">[NaOH] = 0.10</span>이라고 적혀 있어요. 대괄호는 무엇을 나타내나요?</p>",
      options: [
        // EN: The bottle contains 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span>.
        "병에 <span class=\"chem\">NaOH</span>가 0.10 <span class=\"unit\">mol</span> 들어 있다.",
        // EN: The solution contains 0.10 <span class="unit">g</span> of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.
        "용액 1 <span class=\"unit\">dm3</span>마다 <span class=\"chem\">NaOH</span>가 0.10 <span class=\"unit\">g</span> 들어 있다.",
        // EN: The solution contains 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.
        "용액 1 <span class=\"unit\">dm3</span>마다 <span class=\"chem\">NaOH</span>가 0.10 <span class=\"unit\">mol</span> 들어 있다.",
        // EN: 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span> was added to exactly 1 <span class="unit">dm3</span> of water.
        "<span class=\"chem\">NaOH</span> 0.10 <span class=\"unit\">mol</span>을 물 정확히 1 <span class=\"unit\">dm3</span>에 넣었다.",
      ],
      hints: [
        // EN: Square brackets around a formula mean "molar concentration of".
        "화학식을 감싼 대괄호는 “~의 몰 농도”라는 뜻이에요.",
        // EN: Molar concentration = amount of solute ÷ volume of <em>solution</em>.
        "몰 농도 = 용질의 양 ÷ <em>용액</em>의 부피.",
      ],
      // EN: <p>[NaOH] means the molar concentration of sodium hydroxide, in <span class="unit">mol dm-3</span>. So there is 0.10 mol of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.</p>
      solution: "<p>[NaOH]는 수산화 나트륨의 몰 농도를 <span class=\"unit\">mol dm-3</span> 단위로 나타낸 거예요. 그러니까 용액 1 <span class=\"unit\">dm3</span>마다 <span class=\"chem\">NaOH</span>가 0.10 mol 들어 있어요.</p>",
      misconception: {
        // EN (option A): Square brackets show a concentration, not an amount. The amount in the bottle also depends on the volume of solution.
        "0": "대괄호는 양이 아니라 농도를 나타내요. 병에 든 양은 용액의 부피에 따라서도 달라져요.",
        // EN (option B): Square brackets mean <em>molar</em> concentration, in <span class="unit">mol dm-3</span>. A mass concentration in <span class="unit">g dm-3</span> is written without square brackets.
        "1": "대괄호는 <em>몰</em> 농도(<span class=\"unit\">mol dm-3</span>)를 뜻해요. <span class=\"unit\">g dm-3</span> 단위의 질량 농도는 대괄호 없이 써요.",
        // EN (option D): Concentration is defined by the volume of the final <em>solution</em>, not the volume of water added. Adding solute to 1 <span class="unit">dm3</span> of water does not give exactly 1 <span class="unit">dm3</span> of solution.
        "3": "농도는 넣은 물의 부피가 아니라 최종 <em>용액</em>의 부피로 정해요. 물 1 <span class=\"unit\">dm3</span>에 용질을 넣는다고 용액이 정확히 1 <span class=\"unit\">dm3</span>가 되지는 않아요.",
      },
    },

    // ── s1-4-q035 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q035": {
      // EN: <p>Calculate the amount, in <span class="unit">mol</span>, of <span class="chem">HCl</span> in 25.0 <span class="unit">cm3</span> of 0.120 <span class="unit">mol dm-3</span> hydrochloric acid. Give your answer to 3 significant figures.</p>
      stem: "<p>0.120 <span class=\"unit\">mol dm-3</span> 염산 25.0 <span class=\"unit\">cm3</span>에 들어 있는 <span class=\"chem\">HCl</span>의 양을 <span class=\"unit\">mol</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: Use <span class="mono"><i>n</i> = <i>C</i><i>V</i></span> from the data booklet.
        "데이터 부클릿의 <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span>를 쓰세요.",
        // EN: Convert the volume first: 25.0 <span class="unit">cm3</span> ÷ 1000 = 0.0250 <span class="unit">dm3</span>.
        "먼저 부피를 바꾸세요: 25.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.0250 <span class=\"unit\">dm3</span>.",
      ],
      // EN: <div class="worked__math"><i>V</i> = 25.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.0250 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.120 <span class="unit">mol dm-3</span> × 0.0250 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = 0.00300 <span class="unit">mol</span><br>&nbsp;&nbsp;= <strong>3.00 × 10<sup>−3</sup> <span class="unit">mol</span></strong></div><p>Named slip: 3.00 mol means you did not convert <span class="unit">cm3</span> to <span class="unit">dm3</span>. A small flask of dilute acid cannot hold 3 mol of HCl.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 25.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.120 <span class=\"unit\">mol dm-3</span> × 0.0250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = 0.00300 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= <strong>3.00 × 10<sup>−3</sup> <span class=\"unit\">mol</span></strong></div><p>흔한 실수: 3.00 mol이 나왔다면 <span class=\"unit\">cm3</span>를 <span class=\"unit\">dm3</span>로 바꾸지 않은 거예요. 작은 플라스크에 든 묽은 산에 HCl이 3 mol이나 있을 수는 없어요.</p>",
    },

    // ── s1-4-q036 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "s1-4-q036": {
      // EN: <p>A student needs 100.0 <span class="unit">cm3</span> of a 0.2000 <span class="unit">mol dm-3</span> standard solution of sodium carbonate, <span class="chem">Na2CO3</span>.</p><p>Calculate the mass of anhydrous sodium carbonate needed, in <span class="unit">g</span>. Give your answer to 4 significant figures.</p><p><i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span></p>
      stem: "<p>한 학생이 탄산 나트륨(<span class=\"chem\">Na2CO3</span>) 0.2000 <span class=\"unit\">mol dm-3</span> 표준 용액 100.0 <span class=\"unit\">cm3</span>가 필요해요.</p><p>필요한 무수 탄산 나트륨의 질량을 <span class=\"unit\">g</span> 단위로 계산하시오 (calculate). 유효 숫자 4자리로 답하세요.</p><p><i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Two relationships, one after the other: <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>, then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>.
        "관계식 두 개를 차례로 써요: <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span>, 그다음 <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span>.",
        // EN: Convert the volume: 100.0 <span class="unit">cm3</span> = 0.1000 <span class="unit">dm3</span>.
        "부피를 바꾸세요: 100.0 <span class=\"unit\">cm3</span> = 0.1000 <span class=\"unit\">dm3</span>.",
        // EN: The data have 4 significant figures, so give 4 in your answer.
        "자료가 유효 숫자 4자리이므로 답도 4자리로 쓰세요.",
      ],
      // EN: <div class="worked__math"><i>V</i> = 100.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.1000 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.2000 <span class="unit">mol dm-3</span> × 0.1000 <span class="unit">dm3</span><br>&nbsp;&nbsp;= 0.02000 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i> = <i>n</i> × <i>M</i><br>&nbsp;&nbsp;= 0.02000 <span class="unit">mol</span> × 105.99 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 2.1198 <span class="unit">g</span><br>&nbsp;&nbsp;= <strong>2.120 <span class="unit">g</span></strong> &nbsp; (M2)</div><p>Named slips: 21.20 g is the mass for a whole <span class="unit">dm3</span> (volume not used). 2120 g means the volume was left in <span class="unit">cm3</span>.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 100.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.1000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">mol dm-3</span> × 0.1000 <span class=\"unit\">dm3</span><br>&nbsp;&nbsp;= 0.02000 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i> = <i>n</i> × <i>M</i><br>&nbsp;&nbsp;= 0.02000 <span class=\"unit\">mol</span> × 105.99 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 2.1198 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= <strong>2.120 <span class=\"unit\">g</span></strong> &nbsp; (M2)</div><p>흔한 실수: 21.20 g은 1 <span class=\"unit\">dm3</span> 전체에 필요한 질량이에요(부피를 쓰지 않음). 2120 g이 나왔다면 부피를 <span class=\"unit\">cm3</span>로 둔 거예요.</p>",
    },

    // ── s1-4-q037 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q037": {
      // EN: <p>A solution of hydrochloric acid has a concentration of 7.30 <span class="unit">g dm-3</span>.</p><p>Calculate its concentration in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">HCl</span>) = 36.46 <span class="unit">g mol-1</span></p>
      stem: "<p>어떤 염산의 농도는 7.30 <span class=\"unit\">g dm-3</span>이에요.</p><p>이 농도를 <span class=\"unit\">mol dm-3</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>M</i>(<span class=\"chem\">HCl</span>) = 36.46 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Both units are "per <span class="unit">dm3</span>". Only the top of the unit changes: grams become moles.
        "두 단위 모두 “<span class=\"unit\">dm3</span>당”이에요. 단위의 윗부분만 바뀌어요: 그램이 몰이 돼요.",
        // EN: Grams to moles: divide by the molar mass, as in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "그램에서 몰로: <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>처럼 몰 질량으로 나눠요.",
      ],
      // EN: <p>Concentration in <span class="unit">mol dm-3</span> = concentration in <span class="unit">g dm-3</span> ÷ molar mass.</p><div class="worked__math"><i>C</i> = <span class="frac"><span>7.30 <span class="unit">g dm-3</span></span><span>36.46 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2002 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.200 <span class="unit">mol dm-3</span></strong></div><p>Named slip: multiplying gives 266. One <span class="unit">dm3</span> holding 7.30 g of a substance with <i>M</i> ≈ 36 must hold much less than one mole.</p>
      solution: "<p><span class=\"unit\">mol dm-3</span> 단위 농도 = <span class=\"unit\">g dm-3</span> 단위 농도 ÷ 몰 질량.</p><div class=\"worked__math\"><i>C</i> = <span class=\"frac\"><span>7.30 <span class=\"unit\">g dm-3</span></span><span>36.46 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2002 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.200 <span class=\"unit\">mol dm-3</span></strong></div><p>흔한 실수: 곱하면 266이 나와요. <i>M</i> ≈ 36인 물질이 1 <span class=\"unit\">dm3</span>에 7.30 g 들어 있다면 1몰보다 훨씬 적어야 해요.</p>",
    },

    // ── s1-4-q038 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q038": {
      // EN: <p>A solution of potassium manganate(VII) has [<span class="chem">KMnO4</span>] = 0.0250 <span class="unit">mol dm-3</span>.</p><p>Calculate its concentration in <span class="unit">g dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">KMnO4</span>) = 158.04 <span class="unit">g mol-1</span></p>
      stem: "<p>망가니즈산(VII) 칼륨(과망가니즈산 칼륨) 용액의 농도는 [<span class=\"chem\">KMnO4</span>] = 0.0250 <span class=\"unit\">mol dm-3</span>이에요.</p><p>이 농도를 <span class=\"unit\">g dm-3</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>M</i>(<span class=\"chem\">KMnO4</span>) = 158.04 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: You are changing moles into grams, in every <span class="unit">dm3</span>. Which way does <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> go?
        "1 <span class=\"unit\">dm3</span>마다 몰을 그램으로 바꾸는 거예요. <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span>은 어느 방향일까요?",
        // EN: Multiply the molar concentration by the molar mass. Check the units: mol dm<sup>−3</sup> × g mol<sup>−1</sup> = g dm<sup>−3</sup>.
        "몰 농도에 몰 질량을 곱하세요. 단위를 확인하세요: mol dm<sup>−3</sup> × g mol<sup>−1</sup> = g dm<sup>−3</sup>.",
      ],
      // EN: <p>Concentration in <span class="unit">g dm-3</span> = concentration in <span class="unit">mol dm-3</span> × molar mass.</p><div class="worked__math"><i>C</i> = 0.0250 <span class="unit">mol dm-3</span> × 158.04 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 3.951 <span class="unit">g dm-3</span><br>&nbsp;&nbsp;= <strong>3.95 <span class="unit">g dm-3</span></strong></div><p>Named slip: dividing gives 0.000158. One mole of <span class="chem">KMnO4</span> has a mass of 158 g, so the number of grams must be bigger than the number of moles.</p>
      solution: "<p><span class=\"unit\">g dm-3</span> 단위 농도 = <span class=\"unit\">mol dm-3</span> 단위 농도 × 몰 질량.</p><div class=\"worked__math\"><i>C</i> = 0.0250 <span class=\"unit\">mol dm-3</span> × 158.04 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 3.951 <span class=\"unit\">g dm-3</span><br>&nbsp;&nbsp;= <strong>3.95 <span class=\"unit\">g dm-3</span></strong></div><p>흔한 실수: 나누면 0.000158이 나와요. <span class=\"chem\">KMnO4</span> 1몰의 질량은 158 g이므로 그램 수가 몰 수보다 커야 해요.</p>",
    },

    // ── s1-4-q039 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q039": {
      // EN: <p>A solution of magnesium chloride has [<span class="chem">MgCl2</span>] = 0.15 <span class="unit">mol dm-3</span>.</p><p>What is the concentration of chloride ions, [<span class="chem">Cl-</span>], in <span class="unit">mol dm-3</span>?</p>
      stem: "<p>염화 마그네슘 용액의 농도는 [<span class=\"chem\">MgCl2</span>] = 0.15 <span class=\"unit\">mol dm-3</span>이에요.</p><p>염화 이온의 농도 [<span class=\"chem\">Cl-</span>]는 몇 <span class=\"unit\">mol dm-3</span>인가요?</p>",
      options: [
        // EN: 0.075
        "0.075",
        // EN: 0.15
        "0.15",
        // EN: 0.30
        "0.30",
        // EN: 0.45
        "0.45",
      ],
      hints: [
        // EN: Write what happens when the salt dissolves: <span class="chem">MgCl2 -> Mg^2+ + 2Cl-</span>.
        "염이 녹을 때 일어나는 일을 써 보세요: <span class=\"chem\">MgCl2 -> Mg^2+ + 2Cl-</span>.",
        // EN: How many moles of <span class="chem">Cl-</span> come from one mole of <span class="chem">MgCl2</span>?
        "<span class=\"chem\">MgCl2</span> 1몰에서 <span class=\"chem\">Cl-</span>는 몇 몰 나오나요?",
      ],
      // EN: <div class="worked__math"><span class="chem">MgCl2(s) -> Mg^2+(aq) + 2Cl-(aq)</span></div><div class="worked__math">[<span class="chem">Cl-</span>] = 2 × [<span class="chem">MgCl2</span>]<br>&nbsp;&nbsp;= 2 × 0.15 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.30 <span class="unit">mol dm-3</span></strong></div>
      solution: "<div class=\"worked__math\"><span class=\"chem\">MgCl2(s) -> Mg^2+(aq) + 2Cl-(aq)</span></div><div class=\"worked__math\">[<span class=\"chem\">Cl-</span>] = 2 × [<span class=\"chem\">MgCl2</span>]<br>&nbsp;&nbsp;= 2 × 0.15 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.30 <span class=\"unit\">mol dm-3</span></strong></div>",
      misconception: {
        // EN (option A): You divided by 2. Each formula unit releases 2 chloride ions, so there are more chloride ions than formula units, not fewer.
        "0": "2로 나누었어요. 화학식 단위 1개에서 염화 이온이 2개 나오므로, 염화 이온은 화학식 단위보다 적은 것이 아니라 많아요.",
        // EN (option B): This is the concentration of <span class="chem">Mg^2+</span> ions. The subscript 2 in <span class="chem">MgCl2</span> means each formula unit gives 2 chloride ions.
        "1": "이것은 <span class=\"chem\">Mg^2+</span> 이온의 농도예요. <span class=\"chem\">MgCl2</span>의 아래 첨자 2는 화학식 단위 1개에서 염화 이온이 2개 나온다는 뜻이에요.",
        // EN (option D): This is the total concentration of all ions (1 <span class="chem">Mg^2+</span> + 2 <span class="chem">Cl-</span>). The question asks for chloride ions only.
        "3": "이것은 모든 이온의 총농도예요(<span class=\"chem\">Mg^2+</span> 1개 + <span class=\"chem\">Cl-</span> 2개). 문제는 염화 이온만 묻고 있어요.",
      },
    },

    // ── s1-4-q040 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q040": {
      // EN: <p>A student has a 1.00 <span class="unit">mol dm-3</span> stock solution of copper(II) sulfate. They need 250.0 <span class="unit">cm3</span> of a 0.0800 <span class="unit">mol dm-3</span> solution.</p><p>Calculate the volume of stock solution needed, in <span class="unit">cm3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>한 학생에게 황산 구리(II) 1.00 <span class=\"unit\">mol dm-3</span> 원액이 있어요. 이 학생은 0.0800 <span class=\"unit\">mol dm-3</span> 용액 250.0 <span class=\"unit\">cm3</span>가 필요해요.</p><p>필요한 원액의 부피를 <span class=\"unit\">cm3</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: Diluting adds water but does not change the amount of solute. So <i>n</i> before = <i>n</i> after, which gives <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.
        "희석하면 물이 더해지지만 용질의 양은 변하지 않아요. 그래서 희석 전 <i>n</i> = 희석 후 <i>n</i>이고, 여기서 <span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>가 나와요.",
        // EN: Label the values: <i>C</i><sub>1</sub> = 1.00, <i>C</i><sub>2</sub> = 0.0800, <i>V</i><sub>2</sub> = 250.0 <span class="unit">cm3</span>. Both volumes can stay in <span class="unit">cm3</span> here because the same unit is on both sides.
        "값에 이름을 붙이세요: <i>C</i><sub>1</sub> = 1.00, <i>C</i><sub>2</sub> = 0.0800, <i>V</i><sub>2</sub> = 250.0 <span class=\"unit\">cm3</span>. 양변에 같은 단위가 있으므로 여기서는 두 부피를 모두 <span class=\"unit\">cm3</span>로 두어도 돼요.",
      ],
      // EN: <div class="worked__math"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></div><div class="worked__math"><i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class="frac"><span>0.0800 <span class="unit">mol dm-3</span> × 250.0 <span class="unit">cm3</span></span><span>1.00 <span class="unit">mol dm-3</span></span></span></div><div class="worked__math"><i>V</i><sub>1</sub> = <strong>20.0 <span class="unit">cm3</span></strong></div><p>Size check: the new solution is 12.5 times more dilute, so you need one 12.5th of the final volume. The 20.0 <span class="unit">cm3</span> is then made up to 250.0 <span class="unit">cm3</span> with distilled water. You do not add 250 <span class="unit">cm3</span> of water to it.</p>
      solution: "<div class=\"worked__math\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></div><div class=\"worked__math\"><i>V</i><sub>1</sub> = <span class=\"frac\"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class=\"frac\"><span>0.0800 <span class=\"unit\">mol dm-3</span> × 250.0 <span class=\"unit\">cm3</span></span><span>1.00 <span class=\"unit\">mol dm-3</span></span></span></div><div class=\"worked__math\"><i>V</i><sub>1</sub> = <strong>20.0 <span class=\"unit\">cm3</span></strong></div><p>크기 확인: 새 용액은 12.5배 묽으므로 최종 부피의 12.5분의 1이 필요해요. 그다음 이 20.0 <span class=\"unit\">cm3</span>에 증류수를 넣어 250.0 <span class=\"unit\">cm3</span>로 맞춰요. 여기에 물 250 <span class=\"unit\">cm3</span>를 더하는 것이 아니에요.</p>",
    },

    // ── s1-4-q041 · order · exam · SL · Structure 1.4.5 · 2 marks
    "s1-4-q041": {
      // EN: <p>Put these steps in order to prepare 250.0 <span class="unit">cm3</span> of a standard solution from a solid.</p>
      stem: "<p>고체로 표준 용액 250.0 <span class=\"unit\">cm3</span>를 만드는 단계를 순서대로 놓으세요.</p>",
      options: [
        // EN: Weigh the required mass of solid accurately on a balance.
        "필요한 질량의 고체를 저울로 정확하게 잰다.",
        // EN: Dissolve the solid in a small volume of distilled water in a beaker, stirring with a glass rod.
        "비커에 든 적은 양의 증류수에 고체를 넣고 유리 막대로 저으며 녹인다.",
        // EN: Pour the solution through a funnel into a 250.0 cm<sup>3</sup> volumetric flask. Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask.
        "깔때기를 통해 용액을 250.0 cm<sup>3</sup> 부피 플라스크에 붓는다. 비커, 유리 막대, 깔때기를 증류수로 헹구고 헹군 물도 플라스크에 넣는다.",
        // EN: Add distilled water until the bottom of the meniscus is on the graduation mark, adding the last part drop by drop.
        "메니스커스의 아랫부분이 표선에 닿을 때까지 증류수를 넣는다. 마지막에는 한 방울씩 넣는다.",
        // EN: Stopper the flask and invert it several times to mix.
        "플라스크의 마개를 막고 여러 번 뒤집어 섞는다.",
      ],
      hints: [
        // EN: The solid must be fully dissolved before the volume is made up to the mark.
        "표선까지 부피를 맞추기 전에 고체가 완전히 녹아 있어야 해요.",
        // EN: Mixing comes last. If you mixed and then added more water, the concentration would change.
        "섞기는 마지막이에요. 섞은 뒤에 물을 더 넣으면 농도가 바뀌어요.",
      ],
      // EN: <p>Weigh, dissolve, transfer with rinsings, make up to the mark, mix.</p><p>The rinsings matter because any solution left in the beaker would mean less solute in the flask than you weighed. The flask is filled to the mark so that the volume of <em>solution</em> is exactly 250.0 <span class="unit">cm3</span>. Inverting makes the concentration the same throughout.</p>
      solution: "<p>질량 재기, 녹이기, 헹군 물과 함께 옮기기, 표선까지 맞추기, 섞기.</p><p>헹구는 것이 중요한 이유는 비커에 용액이 남으면 플라스크 속 용질이 잰 양보다 적어지기 때문이에요. 플라스크를 표선까지 채우는 것은 <em>용액</em>의 부피를 정확히 250.0 <span class=\"unit\">cm3</span>로 만들기 위해서예요. 뒤집어 섞으면 농도가 전체적으로 고르게 돼요.</p>",
    },

    // ── s1-4-q042 · short · exam · SL · Structure 1.4.5 · 3 marks
    "s1-4-q042": {
      // EN: <p>A student has weighed 2.650 <span class="unit">g</span> of anhydrous sodium carbonate into a small beaker.</p><p>Describe how the student should use this solid to prepare 250.0 <span class="unit">cm3</span> of a standard solution.</p>
      stem: "<p>한 학생이 무수 탄산 나트륨 2.650 <span class=\"unit\">g</span>을 작은 비커에 달아 놓았어요.</p><p>이 고체로 표준 용액 250.0 <span class=\"unit\">cm3</span>를 만드는 방법을 서술하시오 (describe).</p>",
      hints: [
        // EN: Name the piece of glassware that measures one fixed volume very precisely.
        "정해진 한 가지 부피를 아주 정밀하게 재는 유리 기구의 이름을 쓰세요.",
        // EN: How do you make sure that <em>all</em> of the weighed solid ends up in the solution?
        "잰 고체가 <em>모두</em> 용액에 들어가게 하려면 어떻게 해야 할까요?",
        // EN: There are two more things to say: how the final volume is set, and what you do after that.
        "두 가지를 더 말해야 해요: 최종 부피를 어떻게 맞추는지, 그리고 그다음에 무엇을 하는지.",
      ],
      // EN: <p>What the marks reward: the type of water (distilled or deionized, because tap water contains dissolved ions), the volumetric flask with the rinsings transferred, making up to the mark, and mixing by inversion.</p><p>Two answers that lose marks: "add 250 <span class="unit">cm3</span> of water" (the final <em>solution</em> must be 250.0 <span class="unit">cm3</span>, which is not the same thing) and using a beaker or measuring cylinder to measure the final volume (not precise enough).</p>
      solution: "<p>점수를 받는 내용: 물의 종류(수돗물에는 이온이 녹아 있으므로 증류수 또는 탈이온수), 헹군 물까지 옮긴 부피 플라스크, 표선까지 맞추기, 뒤집어 섞기.</p><p>점수를 잃는 두 가지 답: “물 250 <span class=\"unit\">cm3</span>를 넣는다”(최종 <em>용액</em>이 250.0 <span class=\"unit\">cm3</span>여야 하므로 같은 말이 아님), 그리고 최종 부피를 비커나 눈금실린더로 재기(충분히 정밀하지 않음).</p>",
      // EN: <p>Dissolve the solid in distilled (deionized) water in the beaker. Transfer the solution to a 250.0 cm<sup>3</sup> volumetric flask, rinsing the beaker (and funnel and stirring rod) with distilled water and adding the rinsings to the flask. Add distilled water up to the graduation mark (bottom of the meniscus on the line). Stopper and invert the flask several times to mix.</p>
      answer: "<p>비커 속 고체를 증류수(탈이온수)에 녹인다. 용액을 250.0 cm<sup>3</sup> 부피 플라스크로 옮기고, 비커(와 깔때기, 유리 막대)를 증류수로 헹궈 헹군 물도 플라스크에 넣는다. 표선까지 증류수를 넣는다(메니스커스의 아랫부분이 선에 닿게). 마개를 막고 플라스크를 여러 번 뒤집어 섞는다.</p>",
      markscheme: [
        // EN: Dissolve the solid in distilled / deionized water (in the beaker). (Do not accept "water" alone.)
        "(비커에서) 고체를 증류수 / 탈이온수에 녹인다. (“물”만 쓰면 인정하지 않음.)",
        // EN: Transfer to a 250 cm³ volumetric flask AND rinse the beaker, adding the rinsings / washings to the flask.
        "250 cm³ 부피 플라스크로 옮기고 그리고 비커를 헹궈 헹군 물 / 씻은 물을 플라스크에 넣는다.",
        // EN: Make up to the (graduation) mark with distilled water / until the bottom of the meniscus is on the mark. (Do not accept "add 250 cm³ of water".)
        "증류수로 (눈금) 표선까지 / 메니스커스의 아랫부분이 표선에 닿을 때까지 맞춘다. (“물 250 cm³를 넣는다”는 인정하지 않음.)",
        // EN: Stopper and invert / shake to mix thoroughly. (Any three points for 3 marks.)
        "마개를 막고 뒤집어 / 흔들어 고르게 섞는다. (아무 세 가지로 3점.)",
      ],
    },

    // ── s1-4-q043 · short · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q043": {
      // EN: <p>A student has a 0.500 <span class="unit">mol dm-3</span> stock solution of nickel(II) sulfate. To make a calibration curve they need 100.0 <span class="unit">cm3</span> of a 0.0500 <span class="unit">mol dm-3</span> solution.</p><p>Calculate the volume of stock solution needed and describe how to carry out the dilution, naming the glassware.</p>
      stem: "<p>한 학생에게 황산 니켈(II) 0.500 <span class=\"unit\">mol dm-3</span> 원액이 있어요. 검량선을 만들려면 0.0500 <span class=\"unit\">mol dm-3</span> 용액 100.0 <span class=\"unit\">cm3</span>가 필요해요.</p><p>필요한 원액의 부피를 계산하시오 (calculate). 그리고 유리 기구의 이름을 들어 희석하는 방법을 서술하시오 (describe).</p>",
      hints: [
        // EN: The amount of solute does not change on dilution: <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.
        "희석해도 용질의 양은 변하지 않아요: <span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.",
        // EN: Choose glassware made to deliver or contain one precise volume. A measuring cylinder is not precise enough.
        "정해진 한 가지 부피를 정밀하게 옮기거나 담도록 만든 유리 기구를 고르세요. 눈금실린더는 충분히 정밀하지 않아요.",
        // EN: How do you make the final volume exactly 100.0 <span class="unit">cm3</span>?
        "최종 부피를 어떻게 정확히 100.0 <span class=\"unit\">cm3</span>로 만들까요?",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class="frac"><span>0.0500 <span class="unit">mol dm-3</span> × 100.0 <span class="unit">cm3</span></span><span>0.500 <span class="unit">mol dm-3</span></span></span><br>&nbsp;&nbsp;= <strong>10.0 <span class="unit">cm3</span></strong></div><p>A pipette delivers the 10.0 <span class="unit">cm3</span> precisely. A volumetric flask fixes the final volume precisely. Writing "add 90 <span class="unit">cm3</span> of water" does not earn the mark: you make the solution <em>up to the mark</em>, because it is the final volume of solution that must be 100.0 <span class="unit">cm3</span>.</p>
      solution: "<div class=\"worked__math\"><i>V</i><sub>1</sub> = <span class=\"frac\"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class=\"frac\"><span>0.0500 <span class=\"unit\">mol dm-3</span> × 100.0 <span class=\"unit\">cm3</span></span><span>0.500 <span class=\"unit\">mol dm-3</span></span></span><br>&nbsp;&nbsp;= <strong>10.0 <span class=\"unit\">cm3</span></strong></div><p>피펫으로 10.0 <span class=\"unit\">cm3</span>를 정밀하게 옮겨요. 부피 플라스크로 최종 부피를 정밀하게 맞춰요. “물 90 <span class=\"unit\">cm3</span>를 넣는다”라고 쓰면 점수를 받지 못해요: 100.0 <span class=\"unit\">cm3</span>여야 하는 것은 최종 용액의 부피이므로 용액을 <em>표선까지</em> 맞춰야 해요.</p>",
      // EN: <p><i>V</i><sub>1</sub> = (0.0500 × 100.0) ÷ 0.500 = 10.0 cm<sup>3</sup>.</p><p>Use a 10.0 cm<sup>3</sup> volumetric (bulb) pipette to transfer the stock solution into a 100.0 cm<sup>3</sup> volumetric flask. Add distilled water up to the graduation mark. Stopper and invert to mix.</p>
      answer: "<p><i>V</i><sub>1</sub> = (0.0500 × 100.0) ÷ 0.500 = 10.0 cm<sup>3</sup>.</p><p>10.0 cm<sup>3</sup> 부피(홀) 피펫으로 원액을 100.0 cm<sup>3</sup> 부피 플라스크에 옮긴다. 표선까지 증류수를 넣는다. 마개를 막고 뒤집어 섞는다.</p>",
      markscheme: [
        // EN: Volume of stock = 10.0 cm³.
        "원액의 부피 = 10.0 cm³.",
        // EN: Measured with a (10.0 cm³) volumetric / graduated pipette (or burette). (Do not accept measuring cylinder.)
        "(10.0 cm³) 부피 피펫 / 눈금 피펫(또는 뷰렛)으로 잰다. (눈금실린더는 인정하지 않음.)",
        // EN: Into a 100.0 cm³ volumetric flask.
        "100.0 cm³ 부피 플라스크에 넣는다.",
        // EN: Made up to the mark with distilled / deionized water, AND mixed / inverted. (The volume mark plus any two of the other points for 3 marks.)
        "증류수 / 탈이온수로 표선까지 맞추고 그리고 섞는다 / 뒤집는다. (부피 점수와 나머지 중 아무 두 가지로 3점.)",
      ],
    },

    // ── s1-4-q044 · numeric · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q044": {
      // EN: <p>5.55 <span class="unit">g</span> of calcium chloride, <span class="chem">CaCl2</span>, is dissolved in distilled water and made up to 500.0 <span class="unit">cm3</span> in a volumetric flask (solution A).</p><p>10.0 <span class="unit">cm3</span> of solution A is then pipetted into a 250.0 <span class="unit">cm3</span> volumetric flask and made up to the mark (solution B).</p><p>Calculate [<span class="chem">Cl-</span>] in solution B, in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CaCl2</span>) = 110.98 <span class="unit">g mol-1</span></p>
      stem: "<p>염화 칼슘(<span class=\"chem\">CaCl2</span>) 5.55 <span class=\"unit\">g</span>을 증류수에 녹이고 부피 플라스크에서 500.0 <span class=\"unit\">cm3</span>로 맞췄어요(용액 A).</p><p>그다음 용액 A 10.0 <span class=\"unit\">cm3</span>를 피펫으로 250.0 <span class=\"unit\">cm3</span> 부피 플라스크에 옮기고 표선까지 맞췄어요(용액 B).</p><p>용액 B의 [<span class=\"chem\">Cl-</span>]를 <span class=\"unit\">mol dm-3</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p><p><i>M</i>(<span class=\"chem\">CaCl2</span>) = 110.98 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Plan the chain: mass → amount of <span class="chem">CaCl2</span> → concentration of solution A → chloride ion concentration → dilution.
        "순서를 계획하세요: 질량 → <span class=\"chem\">CaCl2</span>의 양 → 용액 A의 농도 → 염화 이온의 농도 → 희석.",
        // EN: For solution A use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> then <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span> with <i>V</i> = 0.5000 <span class="unit">dm3</span>. Each <span class="chem">CaCl2</span> gives 2 <span class="chem">Cl-</span>.
        "용액 A는 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>, 그다음 <i>V</i> = 0.5000 <span class=\"unit\">dm3</span>로 <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span>를 쓰세요. <span class=\"chem\">CaCl2</span> 1개에서 <span class=\"chem\">Cl-</span> 2개가 나와요.",
        // EN: For the dilution use <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> with <i>V</i><sub>1</sub> = 10.0 <span class="unit">cm3</span> and <i>V</i><sub>2</sub> = 250.0 <span class="unit">cm3</span>.
        "희석은 <i>V</i><sub>1</sub> = 10.0 <span class=\"unit\">cm3</span>, <i>V</i><sub>2</sub> = 250.0 <span class=\"unit\">cm3</span>로 <span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>를 쓰세요.",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">CaCl2</span>) = <span class="frac"><span>5.55 <span class="unit">g</span></span><span>110.98 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05001 <span class="unit">mol</span></div><div class="worked__math"><i>V</i>(A) = 500.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.5000 <span class="unit">dm3</span></div><div class="worked__math">[<span class="chem">CaCl2</span>] in A = <span class="frac"><span>0.05001 <span class="unit">mol</span></span><span>0.5000 <span class="unit">dm3</span></span></span><br>&nbsp;&nbsp;= 0.1000 <span class="unit">mol dm-3</span> &nbsp; (M1)</div><div class="worked__math">[<span class="chem">Cl-</span>] in A = 2 × 0.1000 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= 0.2000 <span class="unit">mol dm-3</span> &nbsp; (M2)</div><p>Dilution: the same ions are spread through a larger volume, so multiply by <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>.</p><div class="worked__math"><span class="frac"><span><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class="frac"><span>10.0 <span class="unit">cm3</span></span><span>250.0 <span class="unit">cm3</span></span></span><br>&nbsp;&nbsp;= 0.0400</div><div class="worked__math">[<span class="chem">Cl-</span>] in B = 0.2000 <span class="unit">mol dm-3</span> × 0.0400<br>&nbsp;&nbsp;= <strong>0.00800 <span class="unit">mol dm-3</span></strong> &nbsp; (M3)</div><p>Named slips: 0.00400 means you forgot that each <span class="chem">CaCl2</span> gives 2 chloride ions. 0.200 is solution A, before the dilution.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">CaCl2</span>) = <span class=\"frac\"><span>5.55 <span class=\"unit\">g</span></span><span>110.98 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05001 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>V</i>(A) = 500.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.5000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\">A의 [<span class=\"chem\">CaCl2</span>] = <span class=\"frac\"><span>0.05001 <span class=\"unit\">mol</span></span><span>0.5000 <span class=\"unit\">dm3</span></span></span><br>&nbsp;&nbsp;= 0.1000 <span class=\"unit\">mol dm-3</span> &nbsp; (M1)</div><div class=\"worked__math\">A의 [<span class=\"chem\">Cl-</span>] = 2 × 0.1000 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">mol dm-3</span> &nbsp; (M2)</div><p>희석: 같은 이온이 더 큰 부피에 퍼지므로 <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>를 곱해요.</p><div class=\"worked__math\"><span class=\"frac\"><span><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class=\"frac\"><span>10.0 <span class=\"unit\">cm3</span></span><span>250.0 <span class=\"unit\">cm3</span></span></span><br>&nbsp;&nbsp;= 0.0400</div><div class=\"worked__math\">B의 [<span class=\"chem\">Cl-</span>] = 0.2000 <span class=\"unit\">mol dm-3</span> × 0.0400<br>&nbsp;&nbsp;= <strong>0.00800 <span class=\"unit\">mol dm-3</span></strong> &nbsp; (M3)</div><p>흔한 실수: 0.00400이 나왔다면 <span class=\"chem\">CaCl2</span> 1개에서 염화 이온이 2개 나온다는 것을 잊은 거예요. 0.200은 희석하기 전의 용액 A예요.</p>",
    },

    // ── s1-4-q045 · numeric · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q045": {
      // EN: <p>A student makes a calibration curve for a coloured solution of copper(II) sulfate by measuring the absorbance of four standard solutions in a colorimeter.</p><div class="table-scroll"><table class="data"><caption>Calibration data</caption><thead><tr><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">[<span class="chem">CuSO4</span>] / mol dm<sup>−3</sup></span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Absorbance</span></th></tr></thead><tbody><tr><td class="num">0.010</td><td class="num">0.120</td></tr><tr><td class="num">0.020</td><td class="num">0.240</td></tr><tr><td class="num">0.030</td><td class="num">0.360</td></tr><tr><td class="num">0.040</td><td class="num">0.480</td></tr></tbody></table></div><p>The graph of absorbance against concentration is a straight line through the origin.</p><p>An unknown solution is too dark to measure directly. The student dilutes 5.00 <span class="unit">cm3</span> of it to 100.0 <span class="unit">cm3</span>. The diluted solution has an absorbance of 0.300.</p><p>Determine the concentration of the <strong>original</strong> unknown solution, in <span class="unit">mol dm-3</span>. Give your answer to 2 significant figures.</p>
      stem: "<p>한 학생이 색깔 있는 황산 구리(II) 용액의 검량선을 만들려고, 비색계로 표준 용액 4개의 흡광도를 쟀어요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>검량 자료</caption><thead><tr><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">[<span class=\"chem\">CuSO4</span>] / mol dm<sup>−3</sup></span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">흡광도</span></th></tr></thead><tbody><tr><td class=\"num\">0.010</td><td class=\"num\">0.120</td></tr><tr><td class=\"num\">0.020</td><td class=\"num\">0.240</td></tr><tr><td class=\"num\">0.030</td><td class=\"num\">0.360</td></tr><tr><td class=\"num\">0.040</td><td class=\"num\">0.480</td></tr></tbody></table></div><p>농도에 대한 흡광도 그래프는 원점을 지나는 직선이에요.</p><p>농도를 모르는 용액은 색이 너무 진해서 바로 잴 수 없어요. 학생은 이 용액 5.00 <span class=\"unit\">cm3</span>를 100.0 <span class=\"unit\">cm3</span>로 희석했어요. 희석한 용액의 흡광도는 0.300이에요.</p><p><strong>처음</strong> 미지 용액의 농도를 <span class=\"unit\">mol dm-3</span> 단위로 구하시오 (determine). 유효 숫자 2자리로 답하세요.</p>",
      hints: [
        // EN: A calibration curve turns a measurement (absorbance) into a concentration. Find the gradient of the line: absorbance per <span class="unit">mol dm-3</span>.
        "검량선은 측정값(흡광도)을 농도로 바꿔 줘요. 직선의 기울기, 즉 <span class=\"unit\">mol dm-3</span>당 흡광도를 구하세요.",
        // EN: Use the line to read the concentration of the <em>diluted</em> solution: concentration = absorbance ÷ gradient.
        "직선으로 <em>희석한</em> 용액의 농도를 읽으세요: 농도 = 흡광도 ÷ 기울기.",
        // EN: Then undo the dilution with <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>. The original solution must be more concentrated than the diluted one.
        "그다음 <span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>로 희석을 되돌리세요. 처음 용액은 희석한 용액보다 진해야 해요.",
      ],
      // EN: <div class="worked__math">Gradient = <span class="frac"><span>0.480</span><span>0.040 <span class="unit">mol dm-3</span></span></span><br>&nbsp;&nbsp;= 12.0 <span class="unit">dm3 mol-1</span> &nbsp; (M1)</div><div class="worked__math"><i>C</i>(diluted) = <span class="frac"><span>0.300</span><span>12.0 <span class="unit">dm3 mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0250 <span class="unit">mol dm-3</span> &nbsp; (M2)</div><p>Undo the dilution. The original solution is more concentrated by the factor <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>.</p><div class="worked__math"><span class="frac"><span><i>V</i><sub>2</sub></span><span><i>V</i><sub>1</sub></span></span> = <span class="frac"><span>100.0 <span class="unit">cm3</span></span><span>5.00 <span class="unit">cm3</span></span></span><br>&nbsp;&nbsp;= 20.0</div><div class="worked__math"><i>C</i>(original) = 0.0250 <span class="unit">mol dm-3</span> × 20.0<br>&nbsp;&nbsp;= <strong>0.50 <span class="unit">mol dm-3</span></strong> &nbsp; (M3)</div><p>The absorbance 0.300 lies between the standards (0.240 and 0.360), so the reading is inside the range of the calibration line. That is why the dark solution was diluted first. Named slips: 0.025 is the diluted solution. 0.00125 means you applied the dilution factor the wrong way round.</p>
      solution: "<div class=\"worked__math\">기울기 = <span class=\"frac\"><span>0.480</span><span>0.040 <span class=\"unit\">mol dm-3</span></span></span><br>&nbsp;&nbsp;= 12.0 <span class=\"unit\">dm3 mol-1</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>C</i>(희석) = <span class=\"frac\"><span>0.300</span><span>12.0 <span class=\"unit\">dm3 mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">mol dm-3</span> &nbsp; (M2)</div><p>희석을 되돌려요. 처음 용액은 <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>배만큼 더 진해요.</p><div class=\"worked__math\"><span class=\"frac\"><span><i>V</i><sub>2</sub></span><span><i>V</i><sub>1</sub></span></span> = <span class=\"frac\"><span>100.0 <span class=\"unit\">cm3</span></span><span>5.00 <span class=\"unit\">cm3</span></span></span><br>&nbsp;&nbsp;= 20.0</div><div class=\"worked__math\"><i>C</i>(처음) = 0.0250 <span class=\"unit\">mol dm-3</span> × 20.0<br>&nbsp;&nbsp;= <strong>0.50 <span class=\"unit\">mol dm-3</span></strong> &nbsp; (M3)</div><p>흡광도 0.300은 표준 용액의 값(0.240과 0.360) 사이에 있으므로, 측정값이 검량선의 범위 안에 있어요. 그래서 진한 용액을 먼저 희석한 거예요. 흔한 실수: 0.025는 희석한 용액이에요. 0.00125가 나왔다면 희석 배수를 거꾸로 적용한 거예요.</p>",
    },

    // ── s1-4-q046 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "s1-4-q046": {
      // EN: <p>Which is a correct statement of Avogadro's law?</p>
      stem: "<p>아보가드로 법칙을 바르게 나타낸 것은 무엇인가요?</p>",
      options: [
        // EN: Equal masses of all gases, at the same temperature and pressure, occupy equal volumes.
        "온도와 압력이 같을 때, 모든 기체는 질량이 같으면 부피도 같다.",
        // EN: Equal volumes of all gases, at the same temperature and pressure, contain equal numbers of molecules.
        "온도와 압력이 같을 때, 모든 기체는 부피가 같으면 분자 수도 같다.",
        // EN: Equal volumes of all gases, at the same temperature and pressure, have equal masses.
        "온도와 압력이 같을 때, 모든 기체는 부피가 같으면 질량도 같다.",
        // EN: Equal volumes of all gases contain equal numbers of molecules at any temperature and pressure.
        "온도와 압력에 상관없이, 모든 기체는 부피가 같으면 분자 수도 같다.",
      ],
      hints: [
        // EN: The law connects two things: the volume of a gas and the number of molecules in it.
        "이 법칙은 두 가지를 연결해요: 기체의 부피와 그 속에 든 분자 수.",
        // EN: A gas expands when heated or when the pressure is lowered. What conditions must be the same for a fair comparison?
        "기체는 가열하거나 압력을 낮추면 팽창해요. 공정하게 비교하려면 어떤 조건이 같아야 할까요?",
      ],
      // EN: <p>Avogadro's law: equal volumes of all gases, measured under the same conditions of temperature and pressure, contain equal numbers of molecules. This means that for gases at the same temperature and pressure, the ratio of volumes equals the ratio of amounts in moles.</p>
      solution: "<p>아보가드로 법칙: 같은 온도와 압력에서 잰 모든 기체는 부피가 같으면 같은 수의 분자를 포함해요. 그러니까 온도와 압력이 같은 기체에서는 부피의 비가 몰 단위 양의 비와 같아요.</p>",
      misconception: {
        // EN (option A): Equal masses of different gases contain different numbers of molecules, because their molar masses differ. The law links volume to number of molecules, not to mass.
        "0": "서로 다른 기체는 질량이 같아도 몰 질량이 다르므로 분자 수가 달라요. 이 법칙은 부피를 질량이 아니라 분자 수와 연결해요.",
        // EN (option C): Equal volumes hold equal numbers of molecules, but the molecules of different gases have different masses. So the masses are not equal.
        "2": "부피가 같으면 분자 수는 같지만, 기체마다 분자의 질량이 달라요. 그래서 질량은 같지 않아요.",
        // EN (option D): The condition is missing. The two gases must be measured at the <em>same</em> temperature and pressure as each other.
        "3": "조건이 빠졌어요. 두 기체는 서로 <em>같은</em> 온도와 압력에서 재야 해요.",
      },
    },

    // ── s1-4-q047 · numeric · foundation · SL · Structure 1.4.6 · 1 mark
    "s1-4-q047": {
      // EN: <p>Nitrogen reacts with hydrogen to form ammonia.</p><p><span class="chem">N2(g) + 3H2(g) -> 2NH3(g)</span></p><p>What volume of hydrogen, in <span class="unit">cm3</span>, reacts exactly with 30 <span class="unit">cm3</span> of nitrogen? All volumes are measured at the same temperature and pressure.</p>
      stem: "<p>질소는 수소와 반응해 암모니아를 만들어요.</p><p><span class=\"chem\">N2(g) + 3H2(g) -> 2NH3(g)</span></p><p>질소 30 <span class=\"unit\">cm3</span>와 과부족 없이 반응하는 수소의 부피는 몇 <span class=\"unit\">cm3</span>인가요? 모든 부피는 같은 온도와 압력에서 잰 값이에요.</p>",
      hints: [
        // EN: For gases at the same temperature and pressure, the ratio of volumes is the same as the ratio of moles in the equation.
        "온도와 압력이 같은 기체에서는 부피의 비가 반응식의 몰 비와 같아요.",
        // EN: The equation shows 1 volume of <span class="chem">N2</span> reacting with 3 volumes of <span class="chem">H2</span>.
        "반응식을 보면 <span class=\"chem\">N2</span> 1부피가 <span class=\"chem\">H2</span> 3부피와 반응해요.",
      ],
      // EN: <p>The mole ratio <span class="chem">N2</span> : <span class="chem">H2</span> is 1 : 3. At the same temperature and pressure the volume ratio is also 1 : 3.</p><div class="worked__math"><i>V</i>(<span class="chem">H2</span>) = 3 × 30 <span class="unit">cm3</span> = <strong>90 <span class="unit">cm3</span></strong></div><p>No molar masses or conversions to moles are needed. Avogadro's law lets you use the coefficients directly on the volumes.</p>
      solution: "<p><span class=\"chem\">N2</span> : <span class=\"chem\">H2</span>의 몰 비는 1 : 3이에요. 온도와 압력이 같으면 부피의 비도 1 : 3이에요.</p><div class=\"worked__math\"><i>V</i>(<span class=\"chem\">H2</span>) = 3 × 30 <span class=\"unit\">cm3</span> = <strong>90 <span class=\"unit\">cm3</span></strong></div><p>몰 질량도, 몰로 바꾸는 과정도 필요 없어요. 아보가드로 법칙 덕분에 계수를 부피에 바로 쓸 수 있어요.</p>",
    },

    // ── s1-4-q048 · mcq · exam · SL · Structure 1.4.6 · 1 mark
    "s1-4-q048": {
      // EN: <p>20 <span class="unit">cm3</span> of propane is burned completely in 150 <span class="unit">cm3</span> of oxygen, which is an excess.</p><p><span class="chem">C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)</span></p><p>What is the total volume of gas remaining, in <span class="unit">cm3</span>, when the mixture has returned to the original temperature and pressure?</p>
      stem: "<p>프로페인 20 <span class=\"unit\">cm3</span>를 산소 150 <span class=\"unit\">cm3</span>(과량) 속에서 완전 연소시켰어요.</p><p><span class=\"chem\">C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)</span></p><p>혼합물이 처음 온도와 압력으로 돌아왔을 때 남은 기체의 전체 부피는 몇 <span class=\"unit\">cm3</span>인가요?</p>",
      options: [
        // EN: 60
        "60",
        // EN: 110
        "110",
        // EN: 140
        "140",
        // EN: 190
        "190",
      ],
      hints: [
        // EN: Use the coefficients as volume ratios, for the gases only. Check every state symbol.
        "계수를 부피의 비로 쓰되, 기체에만 쓰세요. 상태 기호를 모두 확인하세요.",
        // EN: Work out the volume of <span class="chem">O2</span> that reacts and the volume of <span class="chem">CO2</span> formed from 20 <span class="unit">cm3</span> of propane.
        "프로페인 20 <span class=\"unit\">cm3</span>와 반응하는 <span class=\"chem\">O2</span>의 부피와 생기는 <span class=\"chem\">CO2</span>의 부피를 구하세요.",
        // EN: What is in the container at the end? The gas that was made, plus any gas that was not used up.
        "마지막에 용기 안에는 무엇이 있을까요? 생긴 기체, 그리고 다 쓰이지 않은 기체예요.",
      ],
      // EN: <div class="worked__math"><i>V</i>(<span class="chem">O2</span>) reacting = 5 × 20 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 100 <span class="unit">cm3</span></div><div class="worked__math"><i>V</i>(<span class="chem">O2</span>) left over = 150 <span class="unit">cm3</span> − 100 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 50 <span class="unit">cm3</span></div><div class="worked__math"><i>V</i>(<span class="chem">CO2</span>) formed = 3 × 20 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 60 <span class="unit">cm3</span></div><p>The water is a liquid, so its volume is negligible.</p><div class="worked__math">Total gas = 50 <span class="unit">cm3</span> + 60 <span class="unit">cm3</span><br>&nbsp;&nbsp;= <strong>110 <span class="unit">cm3</span></strong></div>
      solution: "<div class=\"worked__math\">반응한 <i>V</i>(<span class=\"chem\">O2</span>) = 5 × 20 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 100 <span class=\"unit\">cm3</span></div><div class=\"worked__math\">남은 <i>V</i>(<span class=\"chem\">O2</span>) = 150 <span class=\"unit\">cm3</span> − 100 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 50 <span class=\"unit\">cm3</span></div><div class=\"worked__math\">생긴 <i>V</i>(<span class=\"chem\">CO2</span>) = 3 × 20 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 60 <span class=\"unit\">cm3</span></div><p>물은 액체이므로 그 부피는 무시할 수 있어요.</p><div class=\"worked__math\">기체 전체 = 50 <span class=\"unit\">cm3</span> + 60 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= <strong>110 <span class=\"unit\">cm3</span></strong></div>",
      misconception: {
        // EN (option A): This is the <span class="chem">CO2</span> only. Some oxygen is left over: 150 <span class="unit">cm3</span> was supplied but only 100 <span class="unit">cm3</span> reacted.
        "0": "이것은 <span class=\"chem\">CO2</span>만의 부피예요. 산소가 일부 남아요: 150 <span class=\"unit\">cm3</span>를 넣었지만 100 <span class=\"unit\">cm3</span>만 반응했어요.",
        // EN (option C): You counted the water as a gas (60 + 80) and left out the excess oxygen. The state symbol (l) shows that the water is liquid, so its volume is negligible.
        "2": "물을 기체로 세고(60 + 80) 과량의 산소를 빠뜨렸어요. 상태 기호 (l)은 물이 액체라는 뜻이므로 그 부피는 무시할 수 있어요.",
        // EN (option D): You included the excess oxygen, but you also counted 80 <span class="unit">cm3</span> of water vapour. The state symbol (l) shows that the water is liquid at the final conditions.
        "3": "과량의 산소는 넣었지만 수증기 80 <span class=\"unit\">cm3</span>까지 셌어요. 상태 기호 (l)은 마지막 조건에서 물이 액체라는 뜻이에요.",
      },
    },

    // ── s1-4-q049 · numeric · exam · SL · Structure 1.4.6 · 1 mark
    "s1-4-q049": {
      // EN: <p>Butane burns completely in oxygen.</p><p><span class="chem">2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)</span></p><p>Calculate the volume of oxygen, in <span class="unit">cm3</span>, needed to burn 20.0 <span class="unit">cm3</span> of butane completely. Both volumes are measured at the same temperature and pressure. Give your answer to 3 significant figures.</p>
      stem: "<p>뷰테인은 산소 속에서 완전 연소해요.</p><p><span class=\"chem\">2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)</span></p><p>뷰테인 20.0 <span class=\"unit\">cm3</span>를 완전 연소시키는 데 필요한 산소의 부피를 <span class=\"unit\">cm3</span> 단위로 계산하시오 (calculate). 두 부피는 같은 온도와 압력에서 잰 값이에요. 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: At the same temperature and pressure, volume ratio = mole ratio.
        "온도와 압력이 같으면 부피의 비 = 몰 비.",
        // EN: The ratio is 2 volumes of butane to 13 volumes of oxygen. Watch the 2 in front of the butane: the ratio is not 1 : 13.
        "비는 뷰테인 2부피 대 산소 13부피예요. 뷰테인 앞의 2를 조심하세요: 비는 1 : 13이 아니에요.",
      ],
      // EN: <p>The mole ratio <span class="chem">C4H10</span> : <span class="chem">O2</span> is 2 : 13. At the same temperature and pressure the volume ratio is also 2 : 13.</p><div class="worked__math"><i>V</i>(<span class="chem">O2</span>) = 20.0 <span class="unit">cm3</span> × <span class="frac"><span>13</span><span>2</span></span><br>&nbsp;&nbsp;= <strong>130 <span class="unit">cm3</span></strong></div><p>Named slip: 260 <span class="unit">cm3</span> means you multiplied by 13 and ignored the coefficient 2 on butane.</p>
      solution: "<p><span class=\"chem\">C4H10</span> : <span class=\"chem\">O2</span>의 몰 비는 2 : 13이에요. 온도와 압력이 같으면 부피의 비도 2 : 13이에요.</p><div class=\"worked__math\"><i>V</i>(<span class=\"chem\">O2</span>) = 20.0 <span class=\"unit\">cm3</span> × <span class=\"frac\"><span>13</span><span>2</span></span><br>&nbsp;&nbsp;= <strong>130 <span class=\"unit\">cm3</span></strong></div><p>흔한 실수: 260 <span class=\"unit\">cm3</span>가 나왔다면 13을 곱하고 뷰테인의 계수 2를 무시한 거예요.</p>",
    },

    // ── s1-4-q050 · mcq · challenge · SL · Structure 1.4.6 · 1 mark
    "s1-4-q050": {
      // EN: <p>10 <span class="unit">cm3</span> of a gaseous hydrocarbon, <span class="chem">C</span><sub><i>x</i></sub><span class="chem">H</span><sub><i>y</i></sub>, burns completely in excess oxygen. It forms 30 <span class="unit">cm3</span> of carbon dioxide and 40 <span class="unit">cm3</span> of water vapour. All volumes are measured at the same temperature (above 100 °C) and pressure.</p><p>What is the formula of the hydrocarbon?</p>
      stem: "<p>기체 탄화수소 <span class=\"chem\">C</span><sub><i>x</i></sub><span class=\"chem\">H</span><sub><i>y</i></sub> 10 <span class=\"unit\">cm3</span>가 과량의 산소 속에서 완전 연소해요. 이산화 탄소 30 <span class=\"unit\">cm3</span>와 수증기 40 <span class=\"unit\">cm3</span>가 생겨요. 모든 부피는 같은 온도(100 °C보다 높음)와 압력에서 잰 값이에요.</p><p>이 탄화수소의 화학식은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">C3H4</span>
        "<span class=\"chem\">C3H4</span>",
        // EN: <span class="chem">C3H8</span>
        "<span class=\"chem\">C3H8</span>",
        // EN: <span class="chem">C4H6</span>
        "<span class=\"chem\">C4H6</span>",
        // EN: <span class="chem">C30H80</span>
        "<span class=\"chem\">C30H80</span>",
      ],
      hints: [
        // EN: Avogadro's law: the volume ratio is the ratio of molecules. Simplify 10 : 30 : 40.
        "아보가드로 법칙: 부피의 비는 분자 수의 비예요. 10 : 30 : 40을 간단히 하세요.",
        // EN: One molecule of hydrocarbon gives 3 molecules of <span class="chem">CO2</span> and 4 molecules of <span class="chem">H2O</span>.
        "탄화수소 분자 1개에서 <span class=\"chem\">CO2</span> 분자 3개와 <span class=\"chem\">H2O</span> 분자 4개가 생겨요.",
        // EN: All the C atoms end up in <span class="chem">CO2</span> and all the H atoms end up in <span class="chem">H2O</span>. Count the atoms.
        "C 원자는 모두 <span class=\"chem\">CO2</span>로, H 원자는 모두 <span class=\"chem\">H2O</span>로 가요. 원자 수를 세어 보세요.",
      ],
      // EN: <p>Volume ratio, hydrocarbon : <span class="chem">CO2</span> : <span class="chem">H2O</span>:</p><div class="worked__math">10 : 30 : 40 = 1 : 3 : 4</div><p>So 1 molecule of hydrocarbon gives 3 molecules of <span class="chem">CO2</span> and 4 molecules of <span class="chem">H2O</span>.</p><div class="worked__math">C atoms: <i>x</i> = 3 × 1 = 3</div><div class="worked__math">H atoms: <i>y</i> = 4 × 2 = 8</div><p>The hydrocarbon is <strong><span class="chem">C3H8</span></strong>. Here the water counts as a gas because the temperature is above 100 °C.</p>
      solution: "<p>부피의 비, 탄화수소 : <span class=\"chem\">CO2</span> : <span class=\"chem\">H2O</span>:</p><div class=\"worked__math\">10 : 30 : 40 = 1 : 3 : 4</div><p>그러니까 탄화수소 분자 1개에서 <span class=\"chem\">CO2</span> 분자 3개와 <span class=\"chem\">H2O</span> 분자 4개가 생겨요.</p><div class=\"worked__math\">C 원자: <i>x</i> = 3 × 1 = 3</div><div class=\"worked__math\">H 원자: <i>y</i> = 4 × 2 = 8</div><p>이 탄화수소는 <strong><span class=\"chem\">C3H8</span></strong>이에요. 여기서는 온도가 100 °C보다 높으므로 물을 기체로 세요.</p>",
      misconception: {
        // EN (option A): You have the carbon right, but you gave each water molecule one hydrogen atom. Each <span class="chem">H2O</span> contains 2 H atoms, so 4 volumes of water means 8 H.
        "0": "탄소는 맞지만 물 분자 1개에 수소 원자를 1개로 셌어요. <span class=\"chem\">H2O</span> 1개에는 H 원자가 2개 있으므로, 물 4부피는 H 8개예요.",
        // EN (option C): You swapped the two products. The 30 <span class="unit">cm3</span> of <span class="chem">CO2</span> gives the carbon and the 40 <span class="unit">cm3</span> of <span class="chem">H2O</span> gives the hydrogen.
        "2": "두 생성물을 바꿨어요. <span class=\"chem\">CO2</span> 30 <span class=\"unit\">cm3</span>에서 탄소를, <span class=\"chem\">H2O</span> 40 <span class=\"unit\">cm3</span>에서 수소를 알 수 있어요.",
        // EN (option D): You used the volumes as numbers of atoms. Divide by the 10 <span class="unit">cm3</span> of hydrocarbon first, to find how many molecules of each product form from <em>one</em> molecule.
        "3": "부피를 원자 수처럼 썼어요. 먼저 탄화수소 10 <span class=\"unit\">cm3</span>로 나누어, 분자 <em>1개</em>에서 각 생성물 분자가 몇 개 생기는지 구하세요.",
      },
    },

    // ── s1-4-q051 · multi · challenge · SL · Structure 1.4.6 · 1 mark
    "s1-4-q051": {
      // EN: <p>Two identical flasks are at the same temperature and pressure. Flask A contains ammonia, <span class="chem">NH3</span>. Flask B contains oxygen, <span class="chem">O2</span>.</p><p>Which statements are correct? Select <strong>all</strong> that apply.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, N = 14.01, O = 16.00.</p>
      stem: "<p>똑같은 플라스크 두 개가 같은 온도와 압력에 있어요. 플라스크 A에는 암모니아(<span class=\"chem\">NH3</span>)가, 플라스크 B에는 산소(<span class=\"chem\">O2</span>)가 들어 있어요.</p><p>옳은 설명을 <strong>모두</strong> 고르세요.</p><p><i>A</i><sub>r</sub>을 이용하세요: H = 1.01, N = 14.01, O = 16.00.</p>",
      options: [
        // EN: The two flasks contain the same number of molecules.
        "두 플라스크에 든 분자 수는 같다.",
        // EN: Flask A contains twice as many atoms as flask B.
        "플라스크 A에는 플라스크 B보다 원자가 2배 많다.",
        // EN: The two flasks contain the same mass of gas.
        "두 플라스크에 든 기체의 질량은 같다.",
        // EN: The gas in flask B has the greater mass.
        "플라스크 B에 든 기체의 질량이 더 크다.",
        // EN: Flask B contains fewer molecules because <span class="chem">O2</span> molecules are heavier.
        "<span class=\"chem\">O2</span> 분자가 더 무거우므로 플라스크 B에 든 분자 수가 더 적다.",
      ],
      hints: [
        // EN: Start from Avogadro's law. What does it say about the number of molecules in each flask?
        "아보가드로 법칙에서 시작하세요. 각 플라스크에 든 분자 수에 대해 무엇을 말해 주나요?",
        // EN: Then compare one molecule of each gas: how many atoms does it have, and what is its molar mass?
        "그다음 두 기체의 분자 1개를 비교하세요: 원자가 몇 개인지, 몰 질량은 얼마인지.",
      ],
      // EN: <p>Same volume, temperature and pressure means the same number of molecules, and so the same amount in moles, <i>n</i>.</p><p>Atoms: <span class="chem">NH3</span> has 4 atoms per molecule and <span class="chem">O2</span> has 2. So flask A contains twice as many atoms.</p><p>Mass: <i>m</i> = <i>n</i> × <i>M</i>, and <i>n</i> is the same for both.</p><div class="worked__math"><i>M</i>(<span class="chem">NH3</span>) = 17.04 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">O2</span>) = 32.00 <span class="unit">g mol-1</span></div><p>Oxygen has the larger molar mass, so flask B has the greater mass.</p>
      solution: "<p>부피, 온도, 압력이 같으면 분자 수가 같고, 따라서 몰 단위의 양 <i>n</i>도 같아요.</p><p>원자: <span class=\"chem\">NH3</span>는 분자 1개에 원자가 4개, <span class=\"chem\">O2</span>는 2개예요. 그래서 플라스크 A에는 원자가 2배 많아요.</p><p>질량: <i>m</i> = <i>n</i> × <i>M</i>이고, <i>n</i>은 둘 다 같아요.</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">NH3</span>) = 17.04 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">O2</span>) = 32.00 <span class=\"unit\">g mol-1</span></div><p>산소의 몰 질량이 더 크므로 플라스크 B의 질량이 더 커요.</p>",
      misconception: {
        // EN (option C): Equal numbers of molecules do not mean equal masses. The molar masses are different: 17.04 <span class="unit">g mol-1</span> for <span class="chem">NH3</span> and 32.00 <span class="unit">g mol-1</span> for <span class="chem">O2</span>.
        "2": "분자 수가 같다고 질량이 같은 것은 아니에요. 몰 질량이 달라요: <span class=\"chem\">NH3</span>는 17.04 <span class=\"unit\">g mol-1</span>, <span class=\"chem\">O2</span>는 32.00 <span class=\"unit\">g mol-1</span>이에요.",
        // EN (option E): Avogadro's law does not depend on the mass or size of the molecules. Equal volumes at the same temperature and pressure contain equal numbers of molecules.
        "4": "아보가드로 법칙은 분자의 질량이나 크기와 상관없어요. 온도와 압력이 같을 때 부피가 같으면 분자 수도 같아요.",
      },
    },

    // ── s1-4-q052 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q052": {
      // EN: <p>A student wants to find the concentration of a coloured solution with a colorimeter and a calibration curve.</p><p>Which describes how the calibration curve is made and used?</p>
      stem: "<p>한 학생이 비색계와 검량선을 써서 색깔 있는 용액의 농도를 구하려고 해요.</p><p>검량선을 만들고 쓰는 방법을 바르게 설명한 것은 무엇인가요?</p>",
      options: [
        // EN: Measure the absorbance of the unknown solution several times and take the mean.
        "미지 용액의 흡광도를 여러 번 재고 평균을 낸다.",
        // EN: Measure the absorbance of several solutions of known concentration, plot absorbance against concentration, then read the concentration of the unknown from the line.
        "농도를 아는 용액 여러 개의 흡광도를 재고, 농도에 대한 흡광도 그래프를 그린 다음, 직선에서 미지 용액의 농도를 읽는다.",
        // EN: Measure the absorbance of one solution of known concentration and assume the unknown has the same concentration.
        "농도를 아는 용액 하나의 흡광도를 재고, 미지 용액의 농도가 그와 같다고 가정한다.",
        // EN: Plot the mass of solute against the volume of solution and find the gradient.
        "용액의 부피에 대한 용질의 질량 그래프를 그리고 기울기를 구한다.",
      ],
      hints: [
        // EN: A calibration curve links an instrument reading to a concentration. Which solutions must you measure to draw it?
        "검량선은 기기의 측정값을 농도와 연결해요. 검량선을 그리려면 어떤 용액을 재야 할까요?",
        // EN: Standard solutions have known concentrations. The unknown is measured last and read from the graph.
        "표준 용액은 농도를 알아요. 미지 용액은 마지막에 재고 그래프에서 읽어요.",
      ],
      // EN: <p>Make several standard solutions of known concentration. Measure the absorbance of each. Plot absorbance (<i>y</i>) against concentration (<i>x</i>) and draw the line of best fit. Then measure the absorbance of the unknown and read its concentration from the line. The unknown should lie inside the range of the standards.</p>
      solution: "<p>농도를 아는 표준 용액을 여러 개 만들어요. 각각의 흡광도를 재요. 흡광도(<i>y</i>)를 농도(<i>x</i>)에 대해 그리고 가장 잘 맞는 직선을 그어요. 그다음 미지 용액의 흡광도를 재고 직선에서 농도를 읽어요. 미지 용액의 값은 표준 용액들의 범위 안에 있어야 해요.</p>",
      misconception: {
        // EN (option A): Repeating the reading makes it more reliable, but an absorbance is not a concentration. You need solutions of known concentration to link the two.
        "0": "여러 번 재면 측정값을 더 믿을 수 있지만, 흡광도는 농도가 아니에요. 둘을 연결하려면 농도를 아는 용액이 필요해요.",
        // EN (option C): One known solution gives one point, not a line. Several standard solutions are needed, and the unknown is read from the line of best fit.
        "2": "농도를 아는 용액 하나로는 점 하나만 얻을 뿐 직선을 그릴 수 없어요. 표준 용액이 여러 개 필요하고, 미지 용액은 가장 잘 맞는 직선에서 읽어요.",
        // EN (option D): That graph would give a concentration in <span class="unit">g dm-3</span> for a solution you made yourself. It does not use the colorimeter and says nothing about the unknown.
        "3": "그 그래프는 직접 만든 용액의 <span class=\"unit\">g dm-3</span> 단위 농도를 알려 줄 뿐이에요. 비색계를 쓰지 않고, 미지 용액에 대해서는 아무것도 알려 주지 않아요.",
      },
    },

    // ── s1-4-q053 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q053": {
      // EN: <p>3.60 <span class="unit">g</span> of glucose is dissolved in distilled water and the solution is made up to 200.0 <span class="unit">cm3</span>.</p><p>Calculate the concentration of the solution in <span class="unit">g dm-3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>포도당 3.60 <span class=\"unit\">g</span>을 증류수에 녹이고 용액을 200.0 <span class=\"unit\">cm3</span>로 맞췄어요.</p><p>이 용액의 농도를 <span class=\"unit\">g dm-3</span> 단위로 계산하시오 (calculate). 유효 숫자 3자리로 답하세요.</p>",
      hints: [
        // EN: A concentration in <span class="unit">g dm-3</span> is the mass of solute divided by the volume of solution. You do not need the molar mass.
        "<span class=\"unit\">g dm-3</span> 단위의 농도는 용질의 질량을 용액의 부피로 나눈 값이에요. 몰 질량은 필요 없어요.",
        // EN: Convert the volume first: 200.0 <span class="unit">cm3</span> ÷ 1000 = 0.2000 <span class="unit">dm3</span>.
        "먼저 부피를 바꾸세요: 200.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.2000 <span class=\"unit\">dm3</span>.",
      ],
      // EN: <div class="worked__math"><i>V</i> = 200.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.2000 <span class="unit">dm3</span></div><div class="worked__math">concentration = <span class="frac"><span>3.60 <span class="unit">g</span></span><span>0.2000 <span class="unit">dm3</span></span></span><br>&nbsp;&nbsp;= <strong>18.0 <span class="unit">g dm-3</span></strong></div><p>Named slips: 0.0180 means you left the volume in <span class="unit">cm3</span>. 0.720 means you multiplied by the volume instead of dividing.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 200.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\">농도 = <span class=\"frac\"><span>3.60 <span class=\"unit\">g</span></span><span>0.2000 <span class=\"unit\">dm3</span></span></span><br>&nbsp;&nbsp;= <strong>18.0 <span class=\"unit\">g dm-3</span></strong></div><p>흔한 실수: 0.0180이 나왔다면 부피를 <span class=\"unit\">cm3</span>로 둔 거예요. 0.720이 나왔다면 부피로 나누지 않고 곱한 거예요.</p>",
    },

  }
});
