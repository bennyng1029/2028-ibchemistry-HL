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
        "<span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>을 <i>n</i>에 대한 식으로 바꾸세요.",
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
      stem: "<p>수산화 칼슘(<span class=\"chem\">Ca(OH)2</span>)의 상대 화학식량 <i>M</i><sub>r</sub>는 얼마인가요?</p><p><i>A</i><sub>r</sub>를 이용하세요: Ca = 40.08, O = 16.00, H = 1.01.</p>",
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
      solution: "",
      misconception: {
        // EN (option A): You added one Ca, one O and one H. The subscript 2 outside the bracket means there are two O atoms and two H atoms.
        "0": "",
        // EN (option B): You applied the subscript 2 to hydrogen only. A subscript outside a bracket multiplies <em>everything</em> inside the bracket.
        "1": "",
        // EN (option D): The number is right, but relative formula mass has no units. 74.10 <span class="unit">g mol-1</span> is the molar mass, <i>M</i>.
        "3": "",
      },
    },

    // ── s1-4-q009 · numeric · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q009": {
      // EN: <p>Calculate the relative formula mass, <i>M</i><sub>r</sub>, of iron(III) sulfate, <span class="chem">Fe2(SO4)3</span>. Give your answer to 2 decimal places.</p><p>Use the data booklet values: Fe = 55.85, S = 32.07, O = 16.00.</p>
      stem: "",
      hints: [
        // EN: Count the atoms of each element first. The subscript 3 outside the bracket multiplies everything inside it.
        "",
        // EN: There are 2 Fe, 3 S and 3 × 4 = 12 O. Use the 2 decimal place <i>A</i><sub>r</sub> values, not whole numbers.
        "",
      ],
      // EN: <p>Count the atoms in <span class="chem">Fe2(SO4)3</span>: 2 Fe, 3 S and 3 × 4 = 12 O.</p><div class="worked__math"><i>M</i><sub>r</sub> = (2 × 55.85) + (3 × 32.07)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (12 × 16.00)</div><div class="worked__math"><i>M</i><sub>r</sub> = 111.70 + 96.21 + 192.00<br>&nbsp;&nbsp;= <strong>399.91</strong> (no units)</div><p>Named slips: ignoring the bracket gives 207.77 (one S and four O). Using 3 S but only 4 O gives 271.91. Using whole-number <i>A</i><sub>r</sub> values gives 400. The guide says to use the two-decimal-place values from the data booklet.</p>
      solution: "",
    },

    // ── s1-4-q010 · short · exam · SL · Structure 1.4.2 · 2 marks
    "s1-4-q010": {
      // EN: <p>Chlorine has a relative atomic mass of 35.45.</p><p>State what is meant by <strong>relative atomic mass</strong>, and state its units.</p>
      stem: "",
      hints: [
        // EN: There are two ideas in the definition: an average over the isotopes, and a comparison with a standard atom.
        "",
        // EN: A <em>relative</em> mass is one mass divided by another mass. What happens to the units?
        "",
      ],
      // EN: <p>Chlorine is a mixture of isotopes, so its relative atomic mass is a weighted average, which is why it is not a whole number. The comparison is with <span class="frac"><span>1</span><span>12</span></span> of the mass of a <span class="chem">^12C</span> atom. Because it is a ratio of two masses, it has no units.</p>
      solution: "",
      // EN: <p>Relative atomic mass is the weighted average mass of the atoms of an element (taking the abundance of its isotopes into account), compared with <span class="frac"><span>1</span><span>12</span></span> of the mass of an atom of carbon-12. It has no units.</p>
      answer: "",
      markscheme: [
        // EN: Weighted average mass of the atoms (or isotopes) of an element, relative to 1/12 of the mass of an atom of carbon-12. (Accept "compared with carbon-12 taken as exactly 12".)
        "",
        // EN: It has no units. (Do not accept g or g mol⁻¹.)
        "",
      ],
    },

    // ── s1-4-q011 · mcq · exam · SL · Structure 1.4.2 · 1 mark
    "s1-4-q011": {
      // EN: <p>What is the molar mass of hydrated copper(II) sulfate, <span class="chem">CuSO4.5H2O</span>, in <span class="unit">g mol-1</span>?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, S = 32.07, O = 16.00, H = 1.01.</p>
      stem: "",
      options: [
        // EN: 159.62
        "",
        // EN: 177.64
        "",
        // EN: 185.72
        "",
        // EN: 249.72
        "",
      ],
      hints: [
        // EN: The dot means "combined with". Add the mass of the water to the mass of the <span class="chem">CuSO4</span>.
        "",
        // EN: Work out <i>M</i>(<span class="chem">CuSO4</span>) and <i>M</i>(<span class="chem">H2O</span>) separately. Then add five lots of water.
        "",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">CuSO4</span>) = 63.55 + 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 159.62 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">CuSO4.5H2O</span>) = 159.62 + (5 × 18.02)<br>&nbsp;&nbsp;= <strong>249.72 <span class="unit">g mol-1</span></strong></div>
      solution: "",
      misconception: {
        // EN (option A): This is the molar mass of anhydrous <span class="chem">CuSO4</span>. The water of crystallization is part of the formula and part of the mass you weigh.
        "0": "",
        // EN (option B): You added one <span class="chem">H2O</span> (18.02). The 5 in front of <span class="chem">H2O</span> means five water molecules per formula unit.
        "1": "",
        // EN (option C): You multiplied only the hydrogen by 5 (10 H and 1 O). The 5 multiplies the whole <span class="chem">H2O</span>: 10 H and 5 O.
        "2": "",
      },
    },

    // ── s1-4-q012 · numeric · foundation · SL · Structure 1.4.3 · 1 mark
    "s1-4-q012": {
      // EN: <p>Calculate the amount, in <span class="unit">mol</span>, of calcium carbonate in 25.0 <span class="unit">g</span> of <span class="chem">CaCO3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CaCO3</span>) = 100.09 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: The relationship between amount, mass and molar mass is in your data booklet: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "",
        // EN: Mass is in <span class="unit">g</span> and molar mass is in <span class="unit">g mol-1</span>, so no unit conversion is needed. 25.0 g is less than 100.09 g, so the answer is less than 1 mol.
        "",
      ],
      // EN: <div class="worked__math"><i>n</i> = <span class="frac"><span><i>m</i></span><span><i>M</i></span></span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>25.0 <span class="unit">g</span></span><span>100.09 <span class="unit">g mol-1</span></span></span></div><div class="worked__math"><i>n</i> = 0.24978 <span class="unit">mol</span> = <strong>0.250 <span class="unit">mol</span></strong></div><p>If you multiplied instead you would get about 2500, which fails the size check.</p>
      solution: "",
    },

    // ── s1-4-q013 · numeric · foundation · SL · Structure 1.4.3 · 1 mark
    "s1-4-q013": {
      // EN: <p>Calculate the mass, in <span class="unit">g</span>, of 0.350 <span class="unit">mol</span> of sulfuric acid, <span class="chem">H2SO4</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">H2SO4</span>) = 98.09 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: Start from <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> and rearrange it to make <i>m</i> the subject.
        "",
        // EN: <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>. Check the units: mol × g mol<sup>−1</sup> = g.
        "",
      ],
      // EN: <div class="worked__math"><i>m</i> = <i>n</i> × <i>M</i></div><div class="worked__math"><i>m</i> = 0.350 <span class="unit">mol</span> × 98.09 <span class="unit">g mol-1</span></div><div class="worked__math"><i>m</i> = 34.33 <span class="unit">g</span> = <strong>34.3 <span class="unit">g</span></strong></div><p>Size check: about one third of a mole, so about one third of 98 g.</p>
      solution: "",
    },

    // ── s1-4-q014 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q014": {
      // EN: <p>Calculate the number of molecules in 9.00 <span class="unit">g</span> of water, <span class="chem">H2O</span>. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, O = 16.00.</p>
      stem: "",
      hints: [
        // EN: This is a two-step route: mass → amount → number of particles. You cannot go from grams to particles in one step.
        "",
        // EN: Step 1: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> with <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. Step 2: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "",
        // EN: Keep all the digits of <i>n</i> in your calculator. Round only the final answer.
        "",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class="unit">g mol-1</span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>9.00 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.49945 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>N</i> = 0.49945 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>3.01 × 10<sup>23</sup> molecules</strong> &nbsp; (M2)</div><p>The question asks for molecules. Multiplying by 3 as well would give the number of atoms (9.02 × 10<sup>23</sup>), which is a different question.</p>
      solution: "",
    },

    // ── s1-4-q015 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q015": {
      // EN: <p>Calculate the number of <strong>oxygen atoms</strong> in 8.80 <span class="unit">g</span> of carbon dioxide, <span class="chem">CO2</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: Route: mass → amount of <span class="chem">CO2</span> → amount of O atoms → number of O atoms.
        "",
        // EN: Each <span class="chem">CO2</span> molecule contains 2 oxygen atoms, so <i>n</i>(O) = 2 × <i>n</i>(<span class="chem">CO2</span>).
        "",
        // EN: Finish with <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">CO2</span>) = <span class="frac"><span>8.80 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.19995 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(O) = 2 × 0.19995 <span class="unit">mol</span><br>&nbsp;&nbsp;= 0.39991 <span class="unit">mol</span></div><div class="worked__math"><i>N</i>(O) = 0.39991 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>2.41 × 10<sup>23</sup> atoms</strong> &nbsp; (M2)</div><p>Named slips: 1.20 × 10<sup>23</sup> is the number of <span class="chem">CO2</span> molecules (subscript not used). 3.61 × 10<sup>23</sup> is the number of all atoms (multiplied by 3, not 2).</p>
      solution: "",
    },

    // ── s1-4-q016 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q016": {
      // EN: <p>Epsom salt is hydrated magnesium sulfate, <span class="chem">MgSO4.7H2O</span>.</p><p>Calculate the amount, in <span class="unit">mol</span>, of <strong>water molecules</strong> in 12.3 <span class="unit">g</span> of Epsom salt. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">MgSO4</span>) = 120.38 <span class="unit">g mol-1</span>, &nbsp; <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: The 12.3 g is hydrated salt, so you need the molar mass of the whole formula, water included.
        "",
        // EN: <i>M</i>(<span class="chem">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02). Use it in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "",
        // EN: One mole of the hydrate contains 7 mol of water molecules.
        "",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02)<br>&nbsp;&nbsp;= 246.52 <span class="unit">g mol-1</span></div><div class="worked__math"><i>n</i>(hydrate) = <span class="frac"><span>12.3 <span class="unit">g</span></span><span>246.52 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.049895 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = 7 × 0.049895 <span class="unit">mol</span><br>&nbsp;&nbsp;= <strong>0.349 <span class="unit">mol</span></strong> &nbsp; (M2)</div><p>Named slip: dividing 12.3 g by the anhydrous molar mass (120.38) gives 0.715 mol. The solid you weighed includes its water, so the hydrated molar mass must be used.</p>
      solution: "",
    },

    // ── s1-4-q017 · mcq · exam · SL · Structure 1.4.3 · 1 mark
    "s1-4-q017": {
      // EN: <p>What is the mass, in <span class="unit">g</span>, of <strong>one molecule</strong> of water?</p><p><i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "",
      options: [
        // EN: 1.66 × 10<sup>−24</sup>
        "",
        // EN: 2.99 × 10<sup>−23</sup>
        "",
        // EN: 3.34 × 10<sup>22</sup>
        "",
        // EN: 1.08 × 10<sup>25</sup>
        "",
      ],
      hints: [
        // EN: 18.02 g is the mass of one mole of molecules. How many molecules share that mass?
        "",
        // EN: Share the mass equally: divide the molar mass by <i>N</i><sub>A</sub>. Expect a very small number.
        "",
      ],
      // EN: <p>One mole of water molecules has a mass of 18.02 <span class="unit">g</span>. That mass is shared between 6.02 × 10<sup>23</sup> molecules.</p><div class="worked__math"><i>m</i>(one molecule) = <span class="frac"><span>18.02 <span class="unit">g mol-1</span></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span></div><div class="worked__math"><i>m</i>(one molecule) = <strong>2.99 × 10<sup>−23</sup> <span class="unit">g</span></strong></div>
      solution: "",
      misconception: {
        // EN (option A): This is 1 ÷ <i>N</i><sub>A</sub>. You left out the molar mass. One mole of water has a mass of 18.02 g, not 1 g.
        "0": "",
        // EN (option C): You divided <i>N</i><sub>A</sub> by the molar mass. That gives the number of molecules in 1 g of water, not the mass of one molecule.
        "2": "",
        // EN (option D): You multiplied the molar mass by <i>N</i><sub>A</sub>. One molecule cannot have a larger mass than a whole mole of molecules.
        "3": "",
      },
    },

    // ── s1-4-q018 · mcq · exam · SL · Structure 1.4.3 · 1 mark
    "s1-4-q018": {
      // EN: <p>Which sample contains the greatest total number of <strong>atoms</strong>?</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, He = 4.00, C = 12.01, O = 16.00.</p>
      stem: "",
      options: [
        // EN: 4.00 <span class="unit">g</span> of helium, <span class="chem">He</span>
        "",
        // EN: 16.0 <span class="unit">g</span> of methane, <span class="chem">CH4</span>
        "",
        // EN: 27.0 <span class="unit">g</span> of water, <span class="chem">H2O</span>
        "",
        // EN: 44.0 <span class="unit">g</span> of carbon dioxide, <span class="chem">CO2</span>
        "",
      ],
      hints: [
        // EN: For each sample find the amount of molecules with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "",
        // EN: Then multiply by the number of atoms in one molecule. Compare amounts of atoms in mol. You do not need <i>N</i><sub>A</sub> to compare.
        "",
      ],
      // EN: <div class="table-scroll"><table class="data"><thead><tr><th scope="col">Sample</th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>M</i> / g mol<sup>−1</sup></span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>n</i> / mol</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Atoms each</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>n</i>(atoms) / mol</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">He</span></th><td class="num">4.00</td><td class="num">1.00</td><td class="num">1</td><td class="num">1.00</td></tr><tr><th scope="row"><span class="chem">CH4</span></th><td class="num">16.05</td><td class="num">0.997</td><td class="num">5</td><td class="num"><strong>4.98</strong></td></tr><tr><th scope="row"><span class="chem">H2O</span></th><td class="num">18.02</td><td class="num">1.50</td><td class="num">3</td><td class="num">4.50</td></tr><tr><th scope="row"><span class="chem">CO2</span></th><td class="num">44.01</td><td class="num">1.00</td><td class="num">3</td><td class="num">3.00</td></tr></tbody></table></div><p>Methane has the largest amount of atoms, so it has the greatest number of atoms.</p>
      solution: "",
      misconception: {
        // EN (option A): Helium atoms are light, but 4.00 g is only 1.00 mol of atoms. The other samples contain several atoms in every molecule.
        "0": "",
        // EN (option C): Water has the most <em>molecules</em> here (1.50 mol), but each has only 3 atoms: 4.50 mol of atoms. Compare with 5 atoms per <span class="chem">CH4</span> molecule.
        "2": "",
        // EN (option D): The largest mass does not mean the most atoms. 44.0 g of <span class="chem">CO2</span> is about 1.00 mol of molecules, which is 3.00 mol of atoms.
        "3": "",
      },
    },

    // ── s1-4-q019 · numeric · challenge · SL · Structure 1.4.3 · 3 marks
    "s1-4-q019": {
      // EN: <p>A sample of magnesium chloride, <span class="chem">MgCl2</span>, contains 3.01 × 10<sup>22</sup> chloride ions.</p><p>Calculate the mass of the sample, in <span class="unit">g</span>. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: Mg = 24.31, Cl = 35.45.</p>
      stem: "",
      hints: [
        // EN: Work backwards along the usual route: number of ions → amount of ions → amount of <span class="chem">MgCl2</span> → mass.
        "",
        // EN: One formula unit of <span class="chem">MgCl2</span> contains 2 chloride ions. So is the amount of <span class="chem">MgCl2</span> bigger or smaller than the amount of <span class="chem">Cl-</span>?
        "",
        // EN: <i>n</i>(<span class="chem">MgCl2</span>) = <i>n</i>(<span class="chem">Cl-</span>) ÷ 2. Then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> with <i>M</i> = 95.21 <span class="unit">g mol-1</span>.
        "",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">Cl-</span>) = <span class="frac"><span>3.01 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0500 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">MgCl2</span>) = 0.0500 <span class="unit">mol</span> ÷ 2<br>&nbsp;&nbsp;= 0.0250 <span class="unit">mol</span> &nbsp; (M2)</div><div class="worked__math"><i>M</i>(<span class="chem">MgCl2</span>) = 24.31 + (2 × 35.45)<br>&nbsp;&nbsp;= 95.21 <span class="unit">g mol-1</span></div><div class="worked__math"><i>m</i> = 0.0250 <span class="unit">mol</span> × 95.21 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= <strong>2.38 <span class="unit">g</span></strong> &nbsp; (M3)</div><p>Named slips: 4.76 g means you did not divide by 2. 9.52 g means you multiplied by 2 instead of dividing. There are fewer formula units than chloride ions.</p>
      solution: "",
    },

    // ── s1-4-q020 · mcq · challenge · SL · Structure 1.4.3 · 1 mark
    "s1-4-q020": {
      // EN: <p>A student calculates the number of hydrogen atoms in 3.20 <span class="unit">g</span> of methane, <span class="chem">CH4</span>. Their working is shown.</p><ol><li><i>M</i>(<span class="chem">CH4</span>) = 12.01 + (4 × 1.01) = 16.05 <span class="unit">g mol-1</span></li><li><i>n</i>(<span class="chem">CH4</span>) = 3.20 ÷ 16.05 = 0.199 <span class="unit">mol</span></li><li>Number of molecules = 0.199 × 6.02 × 10<sup>23</sup> = 1.20 × 10<sup>23</sup></li><li>Number of H atoms = 1.20 × 10<sup>23</sup> ÷ 4 = 3.00 × 10<sup>22</sup></li></ol><p>Which line contains the error?</p>
      stem: "",
      options: [
        // EN: Line 1
        "",
        // EN: Line 2
        "",
        // EN: Line 3
        "",
        // EN: Line 4
        "",
      ],
      hints: [
        // EN: Check each line for two things: the right relationship, and an answer that moves in a sensible direction.
        "",
        // EN: Should there be more hydrogen atoms than molecules, or fewer?
        "",
      ],
      // EN: <p>Lines 1 to 3 are correct. In line 4 the student divided by 4. Each <span class="chem">CH4</span> molecule contains 4 hydrogen atoms, so there are 4 times <em>more</em> H atoms than molecules.</p><div class="worked__math"><i>N</i>(H) = 4 × 1.20 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>4.80 × 10<sup>23</sup></strong></div>
      solution: "",
      misconception: {
        // EN (option A): Line 1 is correct: one C and four H gives 16.05 <span class="unit">g mol-1</span>. Look for a step where the answer moves in the wrong direction.
        "0": "",
        // EN (option B): Line 2 is correct: <i>n</i> = <i>m</i> ÷ <i>M</i> with mass in g and molar mass in g mol<sup>−1</sup>.
        "1": "",
        // EN (option C): Line 3 is correct: moles to molecules means multiplying by <i>N</i><sub>A</sub>.
        "2": "",
      },
    },

    // ── s1-4-q021 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "s1-4-q021": {
      // EN: <p>Glucose has the molecular formula <span class="chem">C6H12O6</span>. What is its empirical formula?</p>
      stem: "",
      options: [
        // EN: <span class="chem">C6H12O6</span>
        "",
        // EN: <span class="chem">C3H6O3</span>
        "",
        // EN: <span class="chem">CH2O</span>
        "",
        // EN: <span class="chem">CHO</span>
        "",
      ],
      hints: [
        // EN: The empirical formula gives the simplest ratio of atoms of each element.
        "",
        // EN: Find the largest number that divides exactly into 6, 12 and 6.
        "",
      ],
      // EN: <div class="worked__math">C : H : O = 6 : 12 : 6</div><div class="worked__math">Divide by 6: C : H : O = 1 : 2 : 1</div><p>The empirical formula is <strong><span class="chem">CH2O</span></strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): This is the molecular formula: the actual number of atoms in one molecule. The empirical formula is the simplest whole-number ratio.
        "0": "",
        // EN (option B): You divided by 2, but 3 : 6 : 3 can still be divided by 3. Keep going until the ratio cannot be made simpler.
        "1": "",
        // EN (option D): You removed the subscripts instead of dividing them. The ratio of atoms is 6 : 12 : 6, which simplifies to 1 : 2 : 1.
        "3": "",
      },
    },

    // ── s1-4-q022 · numeric · exam · SL · Structure 1.4.4 · 2 marks
    "s1-4-q022": {
      // EN: <p>Ammonium sulfate, <span class="chem">(NH4)2SO4</span>, is used as a fertilizer.</p><p>Calculate the percentage by mass of nitrogen in ammonium sulfate. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: N = 14.01, H = 1.01, S = 32.07, O = 16.00.</p>
      stem: "",
      hints: [
        // EN: Percentage by mass of an element = (mass of that element in one mole of compound ÷ molar mass of compound) × 100.
        "",
        // EN: Count the nitrogen atoms carefully. The subscript 2 outside the bracket applies to N and to H.
        "",
        // EN: <i>M</i> = (2 × 14.01) + (8 × 1.01) + 32.07 + (4 × 16.00).
        "",
      ],
      // EN: <div class="worked__math"><i>M</i> = (2 × 14.01) + (8 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 132.17 <span class="unit">g mol-1</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(N in 1 mol) = 2 × 14.01 <span class="unit">g</span><br>&nbsp;&nbsp;= 28.02 <span class="unit">g</span></div><div class="worked__math">% N = <span class="frac"><span>28.02</span><span>132.17</span></span> × 100<br>&nbsp;&nbsp;= <strong>21.2 %</strong> &nbsp; (M2)</div><p>Named slip: 10.6 % means you counted one nitrogen atom instead of two.</p>
      solution: "",
    },

    // ── s1-4-q023 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q023": {
      // EN: <p>A compound contains, by mass, 29.1 % sodium, 40.5 % sulfur and 30.4 % oxygen.</p><p>What is its empirical formula?</p><p>Use <i>A</i><sub>r</sub>: Na = 22.99, S = 32.07, O = 16.00.</p>
      stem: "",
      options: [
        // EN: <span class="chem">NaSO</span>
        "",
        // EN: <span class="chem">NaSO2</span>
        "",
        // EN: <span class="chem">Na2S2O3</span>
        "",
        // EN: <span class="chem">Na3S4O3</span>
        "",
      ],
      hints: [
        // EN: Imagine 100 g of compound, so each percentage becomes a mass in grams. Then use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span> for each element.
        "",
        // EN: Divide all three amounts by the smallest one.
        "",
        // EN: You should get 1 : 1 : 1.5. Do not round the 1.5. What can you multiply by to make every number whole?
        "",
      ],
      // EN: <div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Na</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">S</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">O</span></th></tr></thead><tbody><tr><th scope="row">Mass in 100 g / g</th><td class="num">29.1</td><td class="num">40.5</td><td class="num">30.4</td></tr><tr><th scope="row">÷ <i>A</i><sub>r</sub> → amount / mol</th><td class="num">1.266</td><td class="num">1.263</td><td class="num">1.900</td></tr><tr><th scope="row">÷ smallest (1.263)</th><td class="num">1.00</td><td class="num">1.00</td><td class="num">1.50</td></tr><tr><th scope="row">× 2</th><td class="num">2</td><td class="num">2</td><td class="num">3</td></tr></tbody></table></div><p>The empirical formula is <strong><span class="chem">Na2S2O3</span></strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): You rounded 1.5 down to 1. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.
        "0": "",
        // EN (option B): You rounded 1.5 up to 2. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.
        "1": "",
        // EN (option D): You used the percentages as if they were numbers of atoms (29 : 40 : 30 ≈ 3 : 4 : 3). Divide each percentage by the <i>A</i><sub>r</sub> first to get moles.
        "3": "",
      },
    },

    // ── s1-4-q024 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q024": {
      // EN: <p>1.43 <span class="unit">g</span> of an oxide of copper is heated in a stream of hydrogen until all of it has been reduced to copper. The copper left has a mass of 1.27 <span class="unit">g</span>.</p><p>What is the empirical formula of the oxide?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, O = 16.00.</p>
      stem: "",
      options: [
        // EN: <span class="chem">CuO2</span>
        "",
        // EN: <span class="chem">Cu2O</span>
        "",
        // EN: <span class="chem">Cu4O</span>
        "",
        // EN: <span class="chem">Cu8O</span>
        "",
      ],
      hints: [
        // EN: The oxide contains only copper and oxygen. The mass lost is the mass of oxygen, so find it by subtraction.
        "",
        // EN: Convert each mass to an amount with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span>. Use the mass of an oxygen <em>atom</em>.
        "",
        // EN: Divide both amounts by the smaller one to get the ratio.
        "",
      ],
      // EN: <div class="worked__math"><i>m</i>(O) = 1.43 <span class="unit">g</span> − 1.27 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.16 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(Cu) = <span class="frac"><span>1.27 <span class="unit">g</span></span><span>63.55 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0200 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.16 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0100 <span class="unit">mol</span></div><div class="worked__math">Cu : O = 0.0200 : 0.0100<br>&nbsp;&nbsp;= 2 : 1</div><p>The empirical formula is <strong><span class="chem">Cu2O</span></strong>.</p>
      solution: "",
      misconception: {
        // EN (option A): You have the ratio upside down. There are 0.0200 mol of Cu and 0.0100 mol of O, so there are two Cu for each O.
        "0": "",
        // EN (option C): You divided the mass of oxygen by 32.00. The formula counts oxygen <em>atoms</em>, so use <i>A</i><sub>r</sub>(O) = 16.00, not <i>M</i>(<span class="chem">O2</span>).
        "2": "",
        // EN (option D): You used the ratio of the masses (1.27 : 0.16 ≈ 8 : 1). A formula is a ratio of amounts in moles, so divide each mass by its <i>A</i><sub>r</sub> first.
        "3": "",
      },
    },

    // ── s1-4-q025 · short · exam · SL · Structure 1.4.4 · 3 marks
    "s1-4-q025": {
      // EN: <p>A compound contains only carbon, hydrogen and oxygen. Complete combustion of 1.50 <span class="unit">g</span> of the compound gives 3.30 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.80 <span class="unit">g</span> of <span class="chem">H2O</span>.</p><p>Determine the empirical formula of the compound. Show your working.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>
      stem: "",
      hints: [
        // EN: All the carbon ends up in <span class="chem">CO2</span> and all the hydrogen ends up in <span class="chem">H2O</span>. Use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> for each product.
        "",
        // EN: Each <span class="chem">H2O</span> contains 2 H atoms, so <i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>).
        "",
        // EN: The oxygen in the products comes partly from the air, so you cannot count it directly. Find the mass of O in the compound by difference: mass of compound − mass of C − mass of H.
        "",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>)<br>&nbsp;&nbsp;= <span class="frac"><span>3.30 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.07498 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>)<br>&nbsp;&nbsp;= 2 × <span class="frac"><span>1.80 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1998 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(C) = 0.07498 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.9005 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.1998 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.2018 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 1.50 <span class="unit">g</span> − 0.9005 <span class="unit">g</span> − 0.2018 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.3977 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.3977 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02485 <span class="unit">mol</span> &nbsp; (M2)</div><p>Divide each amount by the smallest (0.02485 mol):</p><div class="worked__math">C : H : O = 3.02 : 8.04 : 1.00</div><p>Empirical formula: <strong><span class="chem">C3H8O</span></strong> (M3). The ratios 3.02 and 8.04 are within experimental rounding of whole numbers, so rounding is justified here.</p>
      solution: "",
      // EN: <p><i>n</i>(C) = 3.30 ÷ 44.01 = 0.0750 mol and <i>n</i>(H) = 2 × (1.80 ÷ 18.02) = 0.200 mol.</p><p><i>m</i>(O) = 1.50 − (0.0750 × 12.01) − (0.200 × 1.01) = 0.398 g, so <i>n</i>(O) = 0.398 ÷ 16.00 = 0.0249 mol.</p><p>C : H : O = 0.0750 : 0.200 : 0.0249 = 3 : 8 : 1. Empirical formula: <span class="chem">C3H8O</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: n(C) = 0.0750 mol AND n(H) = 0.200 mol. (Accept masses: 0.901 g of C and 0.202 g of H.)
        "",
        // EN: M2: mass of O by difference = 0.398 g, OR n(O) = 0.0249 mol.
        "",
        // EN: M3: C₃H₈O. (A correct final formula with no working would earn all 3 marks, but always show working so that an error is penalised only once.)
        "",
      ],
    },

    // ── s1-4-q026 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q026": {
      // EN: <p>An oxide of phosphorus has the empirical formula <span class="chem">P2O5</span> and a molar mass of 283.88 <span class="unit">g mol-1</span>.</p><p>What is its molecular formula?</p><p>Use <i>A</i><sub>r</sub>: P = 30.97, O = 16.00.</p>
      stem: "",
      options: [
        // EN: <span class="chem">P2O5</span>
        "",
        // EN: <span class="chem">P2O10</span>
        "",
        // EN: <span class="chem">P4O5</span>
        "",
        // EN: <span class="chem">P4O10</span>
        "",
      ],
      hints: [
        // EN: Find the mass of one empirical formula unit, <span class="chem">P2O5</span>.
        "",
        // EN: Divide the molar mass by the empirical formula mass. The result is how many empirical units make one molecule.
        "",
      ],
      // EN: <p>Find the mass of one empirical formula unit.</p><div class="worked__math"><i>M</i>(<span class="chem">P2O5</span>) = (2 × 30.97) + (5 × 16.00)<br>&nbsp;&nbsp;= 141.94 <span class="unit">g mol-1</span></div><div class="worked__math">Number of units = <span class="frac"><span>283.88 <span class="unit">g mol-1</span></span><span>141.94 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><div class="worked__math">Molecular formula = 2 × <span class="chem">P2O5</span><br>&nbsp;&nbsp;= <strong><span class="chem">P4O10</span></strong></div>
      solution: "",
      misconception: {
        // EN (option A): This is the empirical formula. Its mass is 141.94, which is only half of the molar mass, so the molecule contains two empirical units.
        "0": "",
        // EN (option B): You doubled only the oxygen. Every subscript in the empirical formula must be multiplied by the same whole number.
        "1": "",
        // EN (option C): You doubled only the phosphorus. Every subscript in the empirical formula must be multiplied by the same whole number.
        "2": "",
      },
    },

    // ── s1-4-q027 · numeric · exam · SL · Structure 1.4.4 · 3 marks
    "s1-4-q027": {
      // EN: <p>7.15 <span class="unit">g</span> of hydrated sodium carbonate, <span class="chem">Na2CO3</span>·<i>x</i><span class="chem">H2O</span>, is heated to constant mass. The anhydrous <span class="chem">Na2CO3</span> left has a mass of 2.65 <span class="unit">g</span>.</p><p>Determine the whole-number value of <i>x</i>.</p><p><i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: This is an empirical formula problem with two "building blocks": <span class="chem">Na2CO3</span> and <span class="chem">H2O</span>. The mass lost on heating is the mass of water.
        "",
        // EN: Find the amount of each with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>. Use 2.65 g for <span class="chem">Na2CO3</span> and the mass lost for <span class="chem">H2O</span>.
        "",
        // EN: <i>x</i> = <i>n</i>(<span class="chem">H2O</span>) ÷ <i>n</i>(<span class="chem">Na2CO3</span>).
        "",
      ],
      // EN: <div class="worked__math"><i>m</i>(<span class="chem">H2O</span>) = 7.15 <span class="unit">g</span> − 2.65 <span class="unit">g</span><br>&nbsp;&nbsp;= 4.50 <span class="unit">g</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">Na2CO3</span>) = <span class="frac"><span>2.65 <span class="unit">g</span></span><span>105.99 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02500 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = <span class="frac"><span>4.50 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2497 <span class="unit">mol</span> &nbsp; (M2)</div><div class="worked__math"><i>x</i> = <span class="frac"><span>0.2497 <span class="unit">mol</span></span><span>0.02500 <span class="unit">mol</span></span></span><br>&nbsp;&nbsp;= 9.99 &nbsp; (M3)</div><p>To the nearest whole number, <strong><i>x</i> = 10</strong>.</p><p>Named slips: dividing the masses (4.50 ÷ 2.65 = 1.7) skips the conversion to moles. Using 7.15 g as the mass of <span class="chem">Na2CO3</span> gives 3.7, because 7.15 g still includes the water.</p>
      solution: "",
    },

    // ── s1-4-q028 · short · exam · SL · Structure 1.4.4 · 2 marks
    "s1-4-q028": {
      // EN: <p>A student heats a hydrated salt in a crucible to find the amount of water of crystallization. The method says: "heat to constant mass".</p><p>Describe what "heat to constant mass" means in practice, and explain why it is done.</p>
      stem: "",
      hints: [
        // EN: How can you tell, using only a balance, that nothing more is leaving the crucible?
        "",
        // EN: Think about what would happen to your value for the water if some water was still in the solid.
        "",
      ],
      // EN: <p>One weighing cannot tell you whether water is still being lost. If the mass after a second heating is the same as after the first, no more water is leaving. If you stop too early, the mass lost is too small, so the calculated amount of water is too low.</p>
      solution: "",
      // EN: <p>Heat, cool and weigh the crucible, then repeat the heating and weighing until two weighings in a row give the same mass. This shows that all the water of crystallization has been removed, so the mass lost is the full mass of water.</p>
      answer: "",
      markscheme: [
        // EN: Heat, (cool,) weigh and repeat until the mass no longer changes / two consecutive readings are the same.
        "",
        // EN: To make sure that all of the water has been removed / the dehydration is complete. (Accept: otherwise the mass of water, and so the value of x, would be too low.)
        "",
      ],
    },

    // ── s1-4-q029 · short · challenge · SL · Structure 1.4.4 · 4 marks
    "s1-4-q029": {
      // EN: <p>A colourless liquid contains only carbon, hydrogen and oxygen. Complete combustion of 1.35 <span class="unit">g</span> of the liquid gives 2.64 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.35 <span class="unit">g</span> of <span class="chem">H2O</span>. Its molar mass is 90.14 <span class="unit">g mol-1</span>.</p><p>Determine the empirical formula and the molecular formula of the liquid. Show your working.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>
      stem: "",
      hints: [
        // EN: Split the task: first the empirical formula from the combustion data, then the molecular formula from the molar mass.
        "",
        // EN: <i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>), <i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>). Find the mass of O by difference.
        "",
        // EN: Compare the molar mass with the mass of one empirical formula unit. Multiply every subscript by the ratio.
        "",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = <span class="frac"><span>2.64 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × <span class="frac"><span>1.35 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1498 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(C) = 0.05999 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.7204 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.1498 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.1513 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 1.35 <span class="unit">g</span> − 0.7204 <span class="unit">g</span> − 0.1513 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.4782 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.4782 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02989 <span class="unit">mol</span> &nbsp; (M2)</div><p>Divide each amount by the smallest (0.02989 mol):</p><div class="worked__math">C : H : O = 2.01 : 5.01 : 1.00</div><p>Empirical formula: <strong><span class="chem">C2H5O</span></strong> (M3). Now compare its mass with the molar mass.</p><div class="worked__math"><i>M</i>(<span class="chem">C2H5O</span>) = (2 × 12.01) + (5 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 16.00<br>&nbsp;&nbsp;= 45.07 <span class="unit">g mol-1</span></div><div class="worked__math">Number of units = <span class="frac"><span>90.14 <span class="unit">g mol-1</span></span><span>45.07 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><p>Molecular formula = 2 × <span class="chem">C2H5O</span> = <strong><span class="chem">C4H10O2</span></strong> (M4).</p>
      solution: "",
      // EN: <p><i>n</i>(C) = 2.64 ÷ 44.01 = 0.0600 mol; <i>n</i>(H) = 2 × (1.35 ÷ 18.02) = 0.150 mol.</p><p><i>m</i>(O) = 1.35 − (0.0600 × 12.01) − (0.150 × 1.01) = 0.478 g; <i>n</i>(O) = 0.0299 mol.</p><p>C : H : O = 2 : 5 : 1, so the empirical formula is <span class="chem">C2H5O</span> (mass 45.07). 90.14 ÷ 45.07 = 2, so the molecular formula is <span class="chem">C4H10O2</span>.</p>
      answer: "",
      markscheme: [
        // EN: M1: n(C) = 0.0600 mol AND n(H) = 0.150 mol. (Accept masses: 0.720 g of C and 0.151 g of H.)
        "",
        // EN: M2: mass of O by difference = 0.478 g, OR n(O) = 0.0299 mol.
        "",
        // EN: M3: empirical formula C₂H₅O.
        "",
        // EN: M4: 90.14 ÷ 45.07 = 2, so molecular formula C₄H₁₀O₂. (Allow error carried forward from your empirical formula.)
        "",
      ],
    },

    // ── s1-4-q030 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "s1-4-q030": {
      // EN: <p>An oxide of iron contains 72.4 % iron and 27.6 % oxygen by mass. A student works out its empirical formula.</p><ol><li>Fe: 72.4 ÷ 55.85 = 1.296 &nbsp; O: 27.6 ÷ 16.00 = 1.725</li><li>Divide by the smallest: Fe 1.296 ÷ 1.296 = 1.00 &nbsp; O 1.725 ÷ 1.296 = 1.33</li><li>Round to whole numbers: Fe = 1, O = 1</li><li>Empirical formula: <span class="chem">FeO</span></li></ol><p>Which statement about this working is correct?</p>
      stem: "",
      options: [
        // EN: Line 1 is wrong: the percentages should be divided by the atomic numbers.
        "",
        // EN: Line 2 is wrong: the student should divide by the largest value.
        "",
        // EN: Line 3 is wrong: 1.33 is too far from a whole number to round.
        "",
        // EN: The working is correct and the formula is <span class="chem">FeO</span>.
        "",
      ],
      hints: [
        // EN: Only round when a value is very close to a whole number (for example 1.98 or 3.02).
        "",
        // EN: 1.33 is a recognizable fraction: 1⅓. What can you multiply by to clear a third?
        "",
      ],
      // EN: <p>Lines 1 and 2 are correct. The error is in line 3. A ratio of 1 : 1.33 must be multiplied up, not rounded.</p><div class="worked__math">Fe : O = 1.00 : 1.33</div><div class="worked__math">× 3: Fe : O = 3.00 : 3.99 ≈ 3 : 4</div><p>The empirical formula is <strong><span class="chem">Fe3O4</span></strong>. Look out for .5 (× 2), .33 or .67 (× 3) and .25 or .75 (× 4).</p>
      solution: "",
      misconception: {
        // EN (option A): Dividing by <i>A</i><sub>r</sub> is right. It converts mass into amount in moles. Atomic number counts protons and is not used here.
        "0": "",
        // EN (option B): Dividing by the smallest value is the standard method. It sets the smallest amount to 1 so that the other values are easy to compare.
        "1": "",
        // EN (option D): Check the last step. 1.33 is one and a third, not about 1. <span class="chem">FeO</span> would contain 77.7 % iron, which does not match the data.
        "3": "",
      },
    },

    // ── s1-4-q031 · numeric · challenge · SL · Structure 1.4.4 · 3 marks
    "s1-4-q031": {
      // EN: <p>A metal M forms a chloride with the formula <span class="chem">MCl2</span>. The chloride contains 74.47 % chlorine by mass.</p><p>Calculate the relative atomic mass of M. Give your answer to 3 significant figures.</p><p><i>A</i><sub>r</sub>(Cl) = 35.45</p>
      stem: "",
      hints: [
        // EN: This is percentage composition in reverse. You know the formula and the percentage, and you want a molar mass.
        "",
        // EN: In one mole of <span class="chem">MCl2</span> there are 2 × 35.45 = 70.90 g of chlorine. That 70.90 g is 74.47 % of the molar mass.
        "",
        // EN: Molar mass = 70.90 ÷ 0.7447. Then subtract the chlorine to leave M.
        "",
      ],
      // EN: <p>One mole of <span class="chem">MCl2</span> contains 2 mol of Cl.</p><div class="worked__math"><i>m</i>(Cl) = 2 × 35.45 <span class="unit">g</span><br>&nbsp;&nbsp;= 70.90 <span class="unit">g</span> &nbsp; (M1)</div><div class="worked__math"><i>M</i>(<span class="chem">MCl2</span>) = <span class="frac"><span>70.90 <span class="unit">g mol-1</span></span><span>0.7447</span></span><br>&nbsp;&nbsp;= 95.21 <span class="unit">g mol-1</span> &nbsp; (M2)</div><div class="worked__math"><i>A</i><sub>r</sub>(M) = 95.21 − 70.90<br>&nbsp;&nbsp;= 24.31<br>&nbsp;&nbsp;= <strong>24.3</strong> (no units) &nbsp; (M3)</div><p>The data booklet value for magnesium is 24.31, so M is magnesium. Named slips: 12.2 means you used one Cl instead of two. 95.2 means you did not subtract the chlorine.</p>
      solution: "",
    },

    // ── s1-4-q032 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "s1-4-q032": {
      // EN: <p>0.920 <span class="unit">g</span> of a compound of carbon, hydrogen and oxygen burns completely to give 1.76 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.08 <span class="unit">g</span> of <span class="chem">H2O</span>. A student starts to find the empirical formula.</p><ol><li><i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>) = 1.76 ÷ 44.01 = 0.0400 <span class="unit">mol</span></li><li><i>n</i>(H) = <i>n</i>(<span class="chem">H2O</span>) = 1.08 ÷ 18.02 = 0.0599 <span class="unit">mol</span></li><li><i>m</i>(O) = 0.920 − (0.0400 × 12.01) − (0.0599 × 1.01) = 0.379 <span class="unit">g</span></li><li><i>n</i>(O) = 0.379 ÷ 16.00 = 0.0237 <span class="unit">mol</span></li></ol><p>Which line contains the first error?</p>
      stem: "",
      options: [
        // EN: Line 1
        "",
        // EN: Line 2
        "",
        // EN: Line 3
        "",
        // EN: Line 4
        "",
      ],
      hints: [
        // EN: Check each "<i>n</i>(element) = <i>n</i>(product)" step against the formula of the product.
        "",
        // EN: How many hydrogen atoms are in one molecule of <span class="chem">H2O</span>?
        "",
      ],
      // EN: <p>The first error is in line 2. Each <span class="chem">H2O</span> molecule contains 2 hydrogen atoms.</p><div class="worked__math"><i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>)<br>&nbsp;&nbsp;= 2 × 0.0599 <span class="unit">mol</span><br>&nbsp;&nbsp;= 0.120 <span class="unit">mol</span></div><div class="worked__math"><i>m</i>(C) = 0.0400 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.480 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.120 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.121 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 0.920 <span class="unit">g</span> − 0.480 <span class="unit">g</span> − 0.121 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.319 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.319 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0199 <span class="unit">mol</span></div><div class="worked__math">C : H : O = 0.0400 : 0.120 : 0.0199<br>&nbsp;&nbsp;= 2 : 6 : 1</div><p>The correct empirical formula is <span class="chem">C2H6O</span>. In an exam, lines 3 and 4 would still earn credit as "error carried forward", which is why showing working matters.</p>
      solution: "",
      misconception: {
        // EN (option A): Line 1 is correct. Each <span class="chem">CO2</span> molecule contains one carbon atom, so <i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>).
        "0": "",
        // EN (option C): The method in line 3 is correct: oxygen is found by difference. Its value is wrong only because it uses a wrong number from an earlier line. Find where that number came from.
        "2": "",
        // EN (option D): The method in line 4 is correct: <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub> with 16.00 for oxygen atoms. The wrong value was carried forward from an earlier line.
        "3": "",
      },
    },

    // ── s1-4-q033 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q033": {
      // EN: <p>0.0500 <span class="unit">mol</span> of sodium chloride is dissolved in water and the solution is made up to 250 <span class="unit">cm3</span>.</p><p>Calculate the concentration of the solution, in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: The data booklet gives <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>. Rearranged: <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span>.
        "",
        // EN: The volume must be in <span class="unit">dm3</span>. To convert <span class="unit">cm3</span> to <span class="unit">dm3</span>, divide by 1000: 250 <span class="unit">cm3</span> = 0.250 <span class="unit">dm3</span>.
        "",
      ],
      // EN: <div class="worked__math"><i>V</i> = 250 <span class="unit">cm3</span> ÷ 1000 = 0.250 <span class="unit">dm3</span></div><div class="worked__math"><i>C</i> = <span class="frac"><span><i>n</i></span><span><i>V</i></span></span> = <span class="frac"><span>0.0500 <span class="unit">mol</span></span><span>0.250 <span class="unit">dm3</span></span></span></div><div class="worked__math"><i>C</i> = <strong>0.200 <span class="unit">mol dm-3</span></strong></div><p>Named slips: 0.000200 means you left the volume in <span class="unit">cm3</span>. 0.0125 means you multiplied by the volume instead of dividing.</p>
      solution: "",
    },

    // ── s1-4-q034 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q034": {
      // EN: <p>A bottle is labelled <span class="mono">[NaOH] = 0.10</span>. What do the square brackets tell you?</p>
      stem: "",
      options: [
        // EN: The bottle contains 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span>.
        "",
        // EN: The solution contains 0.10 <span class="unit">g</span> of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.
        "",
        // EN: The solution contains 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.
        "",
        // EN: 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span> was added to exactly 1 <span class="unit">dm3</span> of water.
        "",
      ],
      hints: [
        // EN: Square brackets around a formula mean "molar concentration of".
        "",
        // EN: Molar concentration = amount of solute ÷ volume of <em>solution</em>.
        "",
      ],
      // EN: <p>[NaOH] means the molar concentration of sodium hydroxide, in <span class="unit">mol dm-3</span>. So there is 0.10 mol of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.</p>
      solution: "",
      misconception: {
        // EN (option A): Square brackets show a concentration, not an amount. The amount in the bottle also depends on the volume of solution.
        "0": "",
        // EN (option B): Square brackets mean <em>molar</em> concentration, in <span class="unit">mol dm-3</span>. A mass concentration in <span class="unit">g dm-3</span> is written without square brackets.
        "1": "",
        // EN (option D): Concentration is defined by the volume of the final <em>solution</em>, not the volume of water added. Adding solute to 1 <span class="unit">dm3</span> of water does not give exactly 1 <span class="unit">dm3</span> of solution.
        "3": "",
      },
    },

    // ── s1-4-q035 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q035": {
      // EN: <p>Calculate the amount, in <span class="unit">mol</span>, of <span class="chem">HCl</span> in 25.0 <span class="unit">cm3</span> of 0.120 <span class="unit">mol dm-3</span> hydrochloric acid. Give your answer to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Use <span class="mono"><i>n</i> = <i>C</i><i>V</i></span> from the data booklet.
        "",
        // EN: Convert the volume first: 25.0 <span class="unit">cm3</span> ÷ 1000 = 0.0250 <span class="unit">dm3</span>.
        "",
      ],
      // EN: <div class="worked__math"><i>V</i> = 25.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.0250 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.120 <span class="unit">mol dm-3</span> × 0.0250 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = 0.00300 <span class="unit">mol</span><br>&nbsp;&nbsp;= <strong>3.00 × 10<sup>−3</sup> <span class="unit">mol</span></strong></div><p>Named slip: 3.00 mol means you did not convert <span class="unit">cm3</span> to <span class="unit">dm3</span>. A small flask of dilute acid cannot hold 3 mol of HCl.</p>
      solution: "",
    },

    // ── s1-4-q036 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "s1-4-q036": {
      // EN: <p>A student needs 100.0 <span class="unit">cm3</span> of a 0.2000 <span class="unit">mol dm-3</span> standard solution of sodium carbonate, <span class="chem">Na2CO3</span>.</p><p>Calculate the mass of anhydrous sodium carbonate needed, in <span class="unit">g</span>. Give your answer to 4 significant figures.</p><p><i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: Two relationships, one after the other: <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>, then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>.
        "",
        // EN: Convert the volume: 100.0 <span class="unit">cm3</span> = 0.1000 <span class="unit">dm3</span>.
        "",
        // EN: The data have 4 significant figures, so give 4 in your answer.
        "",
      ],
      // EN: <div class="worked__math"><i>V</i> = 100.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.1000 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.2000 <span class="unit">mol dm-3</span> × 0.1000 <span class="unit">dm3</span><br>&nbsp;&nbsp;= 0.02000 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i> = <i>n</i> × <i>M</i><br>&nbsp;&nbsp;= 0.02000 <span class="unit">mol</span> × 105.99 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 2.1198 <span class="unit">g</span><br>&nbsp;&nbsp;= <strong>2.120 <span class="unit">g</span></strong> &nbsp; (M2)</div><p>Named slips: 21.20 g is the mass for a whole <span class="unit">dm3</span> (volume not used). 2120 g means the volume was left in <span class="unit">cm3</span>.</p>
      solution: "",
    },

    // ── s1-4-q037 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q037": {
      // EN: <p>A solution of hydrochloric acid has a concentration of 7.30 <span class="unit">g dm-3</span>.</p><p>Calculate its concentration in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">HCl</span>) = 36.46 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: Both units are "per <span class="unit">dm3</span>". Only the top of the unit changes: grams become moles.
        "",
        // EN: Grams to moles: divide by the molar mass, as in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "",
      ],
      // EN: <p>Concentration in <span class="unit">mol dm-3</span> = concentration in <span class="unit">g dm-3</span> ÷ molar mass.</p><div class="worked__math"><i>C</i> = <span class="frac"><span>7.30 <span class="unit">g dm-3</span></span><span>36.46 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2002 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.200 <span class="unit">mol dm-3</span></strong></div><p>Named slip: multiplying gives 266. One <span class="unit">dm3</span> holding 7.30 g of a substance with <i>M</i> ≈ 36 must hold much less than one mole.</p>
      solution: "",
    },

    // ── s1-4-q038 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q038": {
      // EN: <p>A solution of potassium manganate(VII) has [<span class="chem">KMnO4</span>] = 0.0250 <span class="unit">mol dm-3</span>.</p><p>Calculate its concentration in <span class="unit">g dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">KMnO4</span>) = 158.04 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: You are changing moles into grams, in every <span class="unit">dm3</span>. Which way does <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> go?
        "",
        // EN: Multiply the molar concentration by the molar mass. Check the units: mol dm<sup>−3</sup> × g mol<sup>−1</sup> = g dm<sup>−3</sup>.
        "",
      ],
      // EN: <p>Concentration in <span class="unit">g dm-3</span> = concentration in <span class="unit">mol dm-3</span> × molar mass.</p><div class="worked__math"><i>C</i> = 0.0250 <span class="unit">mol dm-3</span> × 158.04 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 3.951 <span class="unit">g dm-3</span><br>&nbsp;&nbsp;= <strong>3.95 <span class="unit">g dm-3</span></strong></div><p>Named slip: dividing gives 0.000158. One mole of <span class="chem">KMnO4</span> has a mass of 158 g, so the number of grams must be bigger than the number of moles.</p>
      solution: "",
    },

    // ── s1-4-q039 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q039": {
      // EN: <p>A solution of magnesium chloride has [<span class="chem">MgCl2</span>] = 0.15 <span class="unit">mol dm-3</span>.</p><p>What is the concentration of chloride ions, [<span class="chem">Cl-</span>], in <span class="unit">mol dm-3</span>?</p>
      stem: "",
      options: [
        // EN: 0.075
        "",
        // EN: 0.15
        "",
        // EN: 0.30
        "",
        // EN: 0.45
        "",
      ],
      hints: [
        // EN: Write what happens when the salt dissolves: <span class="chem">MgCl2 -> Mg^2+ + 2Cl-</span>.
        "",
        // EN: How many moles of <span class="chem">Cl-</span> come from one mole of <span class="chem">MgCl2</span>?
        "",
      ],
      // EN: <div class="worked__math"><span class="chem">MgCl2(s) -> Mg^2+(aq) + 2Cl-(aq)</span></div><div class="worked__math">[<span class="chem">Cl-</span>] = 2 × [<span class="chem">MgCl2</span>]<br>&nbsp;&nbsp;= 2 × 0.15 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.30 <span class="unit">mol dm-3</span></strong></div>
      solution: "",
      misconception: {
        // EN (option A): You divided by 2. Each formula unit releases 2 chloride ions, so there are more chloride ions than formula units, not fewer.
        "0": "",
        // EN (option B): This is the concentration of <span class="chem">Mg^2+</span> ions. The subscript 2 in <span class="chem">MgCl2</span> means each formula unit gives 2 chloride ions.
        "1": "",
        // EN (option D): This is the total concentration of all ions (1 <span class="chem">Mg^2+</span> + 2 <span class="chem">Cl-</span>). The question asks for chloride ions only.
        "3": "",
      },
    },

    // ── s1-4-q040 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q040": {
      // EN: <p>A student has a 1.00 <span class="unit">mol dm-3</span> stock solution of copper(II) sulfate. They need 250.0 <span class="unit">cm3</span> of a 0.0800 <span class="unit">mol dm-3</span> solution.</p><p>Calculate the volume of stock solution needed, in <span class="unit">cm3</span>. Give your answer to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: Diluting adds water but does not change the amount of solute. So <i>n</i> before = <i>n</i> after, which gives <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.
        "",
        // EN: Label the values: <i>C</i><sub>1</sub> = 1.00, <i>C</i><sub>2</sub> = 0.0800, <i>V</i><sub>2</sub> = 250.0 <span class="unit">cm3</span>. Both volumes can stay in <span class="unit">cm3</span> here because the same unit is on both sides.
        "",
      ],
      // EN: <div class="worked__math"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></div><div class="worked__math"><i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class="frac"><span>0.0800 <span class="unit">mol dm-3</span> × 250.0 <span class="unit">cm3</span></span><span>1.00 <span class="unit">mol dm-3</span></span></span></div><div class="worked__math"><i>V</i><sub>1</sub> = <strong>20.0 <span class="unit">cm3</span></strong></div><p>Size check: the new solution is 12.5 times more dilute, so you need one 12.5th of the final volume. The 20.0 <span class="unit">cm3</span> is then made up to 250.0 <span class="unit">cm3</span> with distilled water. You do not add 250 <span class="unit">cm3</span> of water to it.</p>
      solution: "",
    },

    // ── s1-4-q041 · order · exam · SL · Structure 1.4.5 · 2 marks
    "s1-4-q041": {
      // EN: <p>Put these steps in order to prepare 250.0 <span class="unit">cm3</span> of a standard solution from a solid.</p>
      stem: "",
      options: [
        // EN: Weigh the required mass of solid accurately on a balance.
        "",
        // EN: Dissolve the solid in a small volume of distilled water in a beaker, stirring with a glass rod.
        "",
        // EN: Pour the solution through a funnel into a 250.0 cm<sup>3</sup> volumetric flask. Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask.
        "",
        // EN: Add distilled water until the bottom of the meniscus is on the graduation mark, adding the last part drop by drop.
        "",
        // EN: Stopper the flask and invert it several times to mix.
        "",
      ],
      hints: [
        // EN: The solid must be fully dissolved before the volume is made up to the mark.
        "",
        // EN: Mixing comes last. If you mixed and then added more water, the concentration would change.
        "",
      ],
      // EN: <p>Weigh, dissolve, transfer with rinsings, make up to the mark, mix.</p><p>The rinsings matter because any solution left in the beaker would mean less solute in the flask than you weighed. The flask is filled to the mark so that the volume of <em>solution</em> is exactly 250.0 <span class="unit">cm3</span>. Inverting makes the concentration the same throughout.</p>
      solution: "",
    },

    // ── s1-4-q042 · short · exam · SL · Structure 1.4.5 · 3 marks
    "s1-4-q042": {
      // EN: <p>A student has weighed 2.650 <span class="unit">g</span> of anhydrous sodium carbonate into a small beaker.</p><p>Describe how the student should use this solid to prepare 250.0 <span class="unit">cm3</span> of a standard solution.</p>
      stem: "",
      hints: [
        // EN: Name the piece of glassware that measures one fixed volume very precisely.
        "",
        // EN: How do you make sure that <em>all</em> of the weighed solid ends up in the solution?
        "",
        // EN: There are two more things to say: how the final volume is set, and what you do after that.
        "",
      ],
      // EN: <p>What the marks reward: the type of water (distilled or deionized, because tap water contains dissolved ions), the volumetric flask with the rinsings transferred, making up to the mark, and mixing by inversion.</p><p>Two answers that lose marks: "add 250 <span class="unit">cm3</span> of water" (the final <em>solution</em> must be 250.0 <span class="unit">cm3</span>, which is not the same thing) and using a beaker or measuring cylinder to measure the final volume (not precise enough).</p>
      solution: "",
      // EN: <p>Dissolve the solid in distilled (deionized) water in the beaker. Transfer the solution to a 250.0 cm<sup>3</sup> volumetric flask, rinsing the beaker (and funnel and stirring rod) with distilled water and adding the rinsings to the flask. Add distilled water up to the graduation mark (bottom of the meniscus on the line). Stopper and invert the flask several times to mix.</p>
      answer: "",
      markscheme: [
        // EN: Dissolve the solid in distilled / deionized water (in the beaker). (Do not accept "water" alone.)
        "",
        // EN: Transfer to a 250 cm³ volumetric flask AND rinse the beaker, adding the rinsings / washings to the flask.
        "",
        // EN: Make up to the (graduation) mark with distilled water / until the bottom of the meniscus is on the mark. (Do not accept "add 250 cm³ of water".)
        "",
        // EN: Stopper and invert / shake to mix thoroughly. (Any three points for 3 marks.)
        "",
      ],
    },

    // ── s1-4-q043 · short · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q043": {
      // EN: <p>A student has a 0.500 <span class="unit">mol dm-3</span> stock solution of nickel(II) sulfate. To make a calibration curve they need 100.0 <span class="unit">cm3</span> of a 0.0500 <span class="unit">mol dm-3</span> solution.</p><p>Calculate the volume of stock solution needed and describe how to carry out the dilution, naming the glassware.</p>
      stem: "",
      hints: [
        // EN: The amount of solute does not change on dilution: <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.
        "",
        // EN: Choose glassware made to deliver or contain one precise volume. A measuring cylinder is not precise enough.
        "",
        // EN: How do you make the final volume exactly 100.0 <span class="unit">cm3</span>?
        "",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class="frac"><span>0.0500 <span class="unit">mol dm-3</span> × 100.0 <span class="unit">cm3</span></span><span>0.500 <span class="unit">mol dm-3</span></span></span><br>&nbsp;&nbsp;= <strong>10.0 <span class="unit">cm3</span></strong></div><p>A pipette delivers the 10.0 <span class="unit">cm3</span> precisely. A volumetric flask fixes the final volume precisely. Writing "add 90 <span class="unit">cm3</span> of water" does not earn the mark: you make the solution <em>up to the mark</em>, because it is the final volume of solution that must be 100.0 <span class="unit">cm3</span>.</p>
      solution: "",
      // EN: <p><i>V</i><sub>1</sub> = (0.0500 × 100.0) ÷ 0.500 = 10.0 cm<sup>3</sup>.</p><p>Use a 10.0 cm<sup>3</sup> volumetric (bulb) pipette to transfer the stock solution into a 100.0 cm<sup>3</sup> volumetric flask. Add distilled water up to the graduation mark. Stopper and invert to mix.</p>
      answer: "",
      markscheme: [
        // EN: Volume of stock = 10.0 cm³.
        "",
        // EN: Measured with a (10.0 cm³) volumetric / graduated pipette (or burette). (Do not accept measuring cylinder.)
        "",
        // EN: Into a 100.0 cm³ volumetric flask.
        "",
        // EN: Made up to the mark with distilled / deionized water, AND mixed / inverted. (The volume mark plus any two of the other points for 3 marks.)
        "",
      ],
    },

    // ── s1-4-q044 · numeric · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q044": {
      // EN: <p>5.55 <span class="unit">g</span> of calcium chloride, <span class="chem">CaCl2</span>, is dissolved in distilled water and made up to 500.0 <span class="unit">cm3</span> in a volumetric flask (solution A).</p><p>10.0 <span class="unit">cm3</span> of solution A is then pipetted into a 250.0 <span class="unit">cm3</span> volumetric flask and made up to the mark (solution B).</p><p>Calculate [<span class="chem">Cl-</span>] in solution B, in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CaCl2</span>) = 110.98 <span class="unit">g mol-1</span></p>
      stem: "",
      hints: [
        // EN: Plan the chain: mass → amount of <span class="chem">CaCl2</span> → concentration of solution A → chloride ion concentration → dilution.
        "",
        // EN: For solution A use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> then <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span> with <i>V</i> = 0.5000 <span class="unit">dm3</span>. Each <span class="chem">CaCl2</span> gives 2 <span class="chem">Cl-</span>.
        "",
        // EN: For the dilution use <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> with <i>V</i><sub>1</sub> = 10.0 <span class="unit">cm3</span> and <i>V</i><sub>2</sub> = 250.0 <span class="unit">cm3</span>.
        "",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">CaCl2</span>) = <span class="frac"><span>5.55 <span class="unit">g</span></span><span>110.98 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05001 <span class="unit">mol</span></div><div class="worked__math"><i>V</i>(A) = 500.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.5000 <span class="unit">dm3</span></div><div class="worked__math">[<span class="chem">CaCl2</span>] in A = <span class="frac"><span>0.05001 <span class="unit">mol</span></span><span>0.5000 <span class="unit">dm3</span></span></span><br>&nbsp;&nbsp;= 0.1000 <span class="unit">mol dm-3</span> &nbsp; (M1)</div><div class="worked__math">[<span class="chem">Cl-</span>] in A = 2 × 0.1000 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= 0.2000 <span class="unit">mol dm-3</span> &nbsp; (M2)</div><p>Dilution: the same ions are spread through a larger volume, so multiply by <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>.</p><div class="worked__math"><span class="frac"><span><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class="frac"><span>10.0 <span class="unit">cm3</span></span><span>250.0 <span class="unit">cm3</span></span></span><br>&nbsp;&nbsp;= 0.0400</div><div class="worked__math">[<span class="chem">Cl-</span>] in B = 0.2000 <span class="unit">mol dm-3</span> × 0.0400<br>&nbsp;&nbsp;= <strong>0.00800 <span class="unit">mol dm-3</span></strong> &nbsp; (M3)</div><p>Named slips: 0.00400 means you forgot that each <span class="chem">CaCl2</span> gives 2 chloride ions. 0.200 is solution A, before the dilution.</p>
      solution: "",
    },

    // ── s1-4-q045 · numeric · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q045": {
      // EN: <p>A student makes a calibration curve for a coloured solution of copper(II) sulfate by measuring the absorbance of four standard solutions in a colorimeter.</p><div class="table-scroll"><table class="data"><caption>Calibration data</caption><thead><tr><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">[<span class="chem">CuSO4</span>] / mol dm<sup>−3</sup></span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Absorbance</span></th></tr></thead><tbody><tr><td class="num">0.010</td><td class="num">0.120</td></tr><tr><td class="num">0.020</td><td class="num">0.240</td></tr><tr><td class="num">0.030</td><td class="num">0.360</td></tr><tr><td class="num">0.040</td><td class="num">0.480</td></tr></tbody></table></div><p>The graph of absorbance against concentration is a straight line through the origin.</p><p>An unknown solution is too dark to measure directly. The student dilutes 5.00 <span class="unit">cm3</span> of it to 100.0 <span class="unit">cm3</span>. The diluted solution has an absorbance of 0.300.</p><p>Determine the concentration of the <strong>original</strong> unknown solution, in <span class="unit">mol dm-3</span>. Give your answer to 2 significant figures.</p>
      stem: "",
      hints: [
        // EN: A calibration curve turns a measurement (absorbance) into a concentration. Find the gradient of the line: absorbance per <span class="unit">mol dm-3</span>.
        "",
        // EN: Use the line to read the concentration of the <em>diluted</em> solution: concentration = absorbance ÷ gradient.
        "",
        // EN: Then undo the dilution with <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>. The original solution must be more concentrated than the diluted one.
        "",
      ],
      // EN: <div class="worked__math">Gradient = <span class="frac"><span>0.480</span><span>0.040 <span class="unit">mol dm-3</span></span></span><br>&nbsp;&nbsp;= 12.0 <span class="unit">dm3 mol-1</span> &nbsp; (M1)</div><div class="worked__math"><i>C</i>(diluted) = <span class="frac"><span>0.300</span><span>12.0 <span class="unit">dm3 mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0250 <span class="unit">mol dm-3</span> &nbsp; (M2)</div><p>Undo the dilution. The original solution is more concentrated by the factor <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>.</p><div class="worked__math"><span class="frac"><span><i>V</i><sub>2</sub></span><span><i>V</i><sub>1</sub></span></span> = <span class="frac"><span>100.0 <span class="unit">cm3</span></span><span>5.00 <span class="unit">cm3</span></span></span><br>&nbsp;&nbsp;= 20.0</div><div class="worked__math"><i>C</i>(original) = 0.0250 <span class="unit">mol dm-3</span> × 20.0<br>&nbsp;&nbsp;= <strong>0.50 <span class="unit">mol dm-3</span></strong> &nbsp; (M3)</div><p>The absorbance 0.300 lies between the standards (0.240 and 0.360), so the reading is inside the range of the calibration line. That is why the dark solution was diluted first. Named slips: 0.025 is the diluted solution. 0.00125 means you applied the dilution factor the wrong way round.</p>
      solution: "",
    },

    // ── s1-4-q046 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "s1-4-q046": {
      // EN: <p>Which is a correct statement of Avogadro's law?</p>
      stem: "",
      options: [
        // EN: Equal masses of all gases, at the same temperature and pressure, occupy equal volumes.
        "",
        // EN: Equal volumes of all gases, at the same temperature and pressure, contain equal numbers of molecules.
        "",
        // EN: Equal volumes of all gases, at the same temperature and pressure, have equal masses.
        "",
        // EN: Equal volumes of all gases contain equal numbers of molecules at any temperature and pressure.
        "",
      ],
      hints: [
        // EN: The law connects two things: the volume of a gas and the number of molecules in it.
        "",
        // EN: A gas expands when heated or when the pressure is lowered. What conditions must be the same for a fair comparison?
        "",
      ],
      // EN: <p>Avogadro's law: equal volumes of all gases, measured under the same conditions of temperature and pressure, contain equal numbers of molecules. This means that for gases at the same temperature and pressure, the ratio of volumes equals the ratio of amounts in moles.</p>
      solution: "",
      misconception: {
        // EN (option A): Equal masses of different gases contain different numbers of molecules, because their molar masses differ. The law links volume to number of molecules, not to mass.
        "0": "",
        // EN (option C): Equal volumes hold equal numbers of molecules, but the molecules of different gases have different masses. So the masses are not equal.
        "2": "",
        // EN (option D): The condition is missing. The two gases must be measured at the <em>same</em> temperature and pressure as each other.
        "3": "",
      },
    },

    // ── s1-4-q047 · numeric · foundation · SL · Structure 1.4.6 · 1 mark
    "s1-4-q047": {
      // EN: <p>Nitrogen reacts with hydrogen to form ammonia.</p><p><span class="chem">N2(g) + 3H2(g) -> 2NH3(g)</span></p><p>What volume of hydrogen, in <span class="unit">cm3</span>, reacts exactly with 30 <span class="unit">cm3</span> of nitrogen? All volumes are measured at the same temperature and pressure.</p>
      stem: "",
      hints: [
        // EN: For gases at the same temperature and pressure, the ratio of volumes is the same as the ratio of moles in the equation.
        "",
        // EN: The equation shows 1 volume of <span class="chem">N2</span> reacting with 3 volumes of <span class="chem">H2</span>.
        "",
      ],
      // EN: <p>The mole ratio <span class="chem">N2</span> : <span class="chem">H2</span> is 1 : 3. At the same temperature and pressure the volume ratio is also 1 : 3.</p><div class="worked__math"><i>V</i>(<span class="chem">H2</span>) = 3 × 30 <span class="unit">cm3</span> = <strong>90 <span class="unit">cm3</span></strong></div><p>No molar masses or conversions to moles are needed. Avogadro's law lets you use the coefficients directly on the volumes.</p>
      solution: "",
    },

    // ── s1-4-q048 · mcq · exam · SL · Structure 1.4.6 · 1 mark
    "s1-4-q048": {
      // EN: <p>20 <span class="unit">cm3</span> of propane is burned completely in 150 <span class="unit">cm3</span> of oxygen, which is an excess.</p><p><span class="chem">C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)</span></p><p>What is the total volume of gas remaining, in <span class="unit">cm3</span>, when the mixture has returned to the original temperature and pressure?</p>
      stem: "",
      options: [
        // EN: 60
        "",
        // EN: 110
        "",
        // EN: 140
        "",
        // EN: 190
        "",
      ],
      hints: [
        // EN: Use the coefficients as volume ratios, for the gases only. Check every state symbol.
        "",
        // EN: Work out the volume of <span class="chem">O2</span> that reacts and the volume of <span class="chem">CO2</span> formed from 20 <span class="unit">cm3</span> of propane.
        "",
        // EN: What is in the container at the end? The gas that was made, plus any gas that was not used up.
        "",
      ],
      // EN: <div class="worked__math"><i>V</i>(<span class="chem">O2</span>) reacting = 5 × 20 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 100 <span class="unit">cm3</span></div><div class="worked__math"><i>V</i>(<span class="chem">O2</span>) left over = 150 <span class="unit">cm3</span> − 100 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 50 <span class="unit">cm3</span></div><div class="worked__math"><i>V</i>(<span class="chem">CO2</span>) formed = 3 × 20 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 60 <span class="unit">cm3</span></div><p>The water is a liquid, so its volume is negligible.</p><div class="worked__math">Total gas = 50 <span class="unit">cm3</span> + 60 <span class="unit">cm3</span><br>&nbsp;&nbsp;= <strong>110 <span class="unit">cm3</span></strong></div>
      solution: "",
      misconception: {
        // EN (option A): This is the <span class="chem">CO2</span> only. Some oxygen is left over: 150 <span class="unit">cm3</span> was supplied but only 100 <span class="unit">cm3</span> reacted.
        "0": "",
        // EN (option C): You counted the water as a gas (60 + 80) and left out the excess oxygen. The state symbol (l) shows that the water is liquid, so its volume is negligible.
        "2": "",
        // EN (option D): You included the excess oxygen, but you also counted 80 <span class="unit">cm3</span> of water vapour. The state symbol (l) shows that the water is liquid at the final conditions.
        "3": "",
      },
    },

    // ── s1-4-q049 · numeric · exam · SL · Structure 1.4.6 · 1 mark
    "s1-4-q049": {
      // EN: <p>Butane burns completely in oxygen.</p><p><span class="chem">2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)</span></p><p>Calculate the volume of oxygen, in <span class="unit">cm3</span>, needed to burn 20.0 <span class="unit">cm3</span> of butane completely. Both volumes are measured at the same temperature and pressure. Give your answer to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: At the same temperature and pressure, volume ratio = mole ratio.
        "",
        // EN: The ratio is 2 volumes of butane to 13 volumes of oxygen. Watch the 2 in front of the butane: the ratio is not 1 : 13.
        "",
      ],
      // EN: <p>The mole ratio <span class="chem">C4H10</span> : <span class="chem">O2</span> is 2 : 13. At the same temperature and pressure the volume ratio is also 2 : 13.</p><div class="worked__math"><i>V</i>(<span class="chem">O2</span>) = 20.0 <span class="unit">cm3</span> × <span class="frac"><span>13</span><span>2</span></span><br>&nbsp;&nbsp;= <strong>130 <span class="unit">cm3</span></strong></div><p>Named slip: 260 <span class="unit">cm3</span> means you multiplied by 13 and ignored the coefficient 2 on butane.</p>
      solution: "",
    },

    // ── s1-4-q050 · mcq · challenge · SL · Structure 1.4.6 · 1 mark
    "s1-4-q050": {
      // EN: <p>10 <span class="unit">cm3</span> of a gaseous hydrocarbon, <span class="chem">C</span><sub><i>x</i></sub><span class="chem">H</span><sub><i>y</i></sub>, burns completely in excess oxygen. It forms 30 <span class="unit">cm3</span> of carbon dioxide and 40 <span class="unit">cm3</span> of water vapour. All volumes are measured at the same temperature (above 100 °C) and pressure.</p><p>What is the formula of the hydrocarbon?</p>
      stem: "",
      options: [
        // EN: <span class="chem">C3H4</span>
        "",
        // EN: <span class="chem">C3H8</span>
        "",
        // EN: <span class="chem">C4H6</span>
        "",
        // EN: <span class="chem">C30H80</span>
        "",
      ],
      hints: [
        // EN: Avogadro's law: the volume ratio is the ratio of molecules. Simplify 10 : 30 : 40.
        "",
        // EN: One molecule of hydrocarbon gives 3 molecules of <span class="chem">CO2</span> and 4 molecules of <span class="chem">H2O</span>.
        "",
        // EN: All the C atoms end up in <span class="chem">CO2</span> and all the H atoms end up in <span class="chem">H2O</span>. Count the atoms.
        "",
      ],
      // EN: <p>Volume ratio, hydrocarbon : <span class="chem">CO2</span> : <span class="chem">H2O</span>:</p><div class="worked__math">10 : 30 : 40 = 1 : 3 : 4</div><p>So 1 molecule of hydrocarbon gives 3 molecules of <span class="chem">CO2</span> and 4 molecules of <span class="chem">H2O</span>.</p><div class="worked__math">C atoms: <i>x</i> = 3 × 1 = 3</div><div class="worked__math">H atoms: <i>y</i> = 4 × 2 = 8</div><p>The hydrocarbon is <strong><span class="chem">C3H8</span></strong>. Here the water counts as a gas because the temperature is above 100 °C.</p>
      solution: "",
      misconception: {
        // EN (option A): You have the carbon right, but you gave each water molecule one hydrogen atom. Each <span class="chem">H2O</span> contains 2 H atoms, so 4 volumes of water means 8 H.
        "0": "",
        // EN (option C): You swapped the two products. The 30 <span class="unit">cm3</span> of <span class="chem">CO2</span> gives the carbon and the 40 <span class="unit">cm3</span> of <span class="chem">H2O</span> gives the hydrogen.
        "2": "",
        // EN (option D): You used the volumes as numbers of atoms. Divide by the 10 <span class="unit">cm3</span> of hydrocarbon first, to find how many molecules of each product form from <em>one</em> molecule.
        "3": "",
      },
    },

    // ── s1-4-q051 · multi · challenge · SL · Structure 1.4.6 · 1 mark
    "s1-4-q051": {
      // EN: <p>Two identical flasks are at the same temperature and pressure. Flask A contains ammonia, <span class="chem">NH3</span>. Flask B contains oxygen, <span class="chem">O2</span>.</p><p>Which statements are correct? Select <strong>all</strong> that apply.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, N = 14.01, O = 16.00.</p>
      stem: "",
      options: [
        // EN: The two flasks contain the same number of molecules.
        "",
        // EN: Flask A contains twice as many atoms as flask B.
        "",
        // EN: The two flasks contain the same mass of gas.
        "",
        // EN: The gas in flask B has the greater mass.
        "",
        // EN: Flask B contains fewer molecules because <span class="chem">O2</span> molecules are heavier.
        "",
      ],
      hints: [
        // EN: Start from Avogadro's law. What does it say about the number of molecules in each flask?
        "",
        // EN: Then compare one molecule of each gas: how many atoms does it have, and what is its molar mass?
        "",
      ],
      // EN: <p>Same volume, temperature and pressure means the same number of molecules, and so the same amount in moles, <i>n</i>.</p><p>Atoms: <span class="chem">NH3</span> has 4 atoms per molecule and <span class="chem">O2</span> has 2. So flask A contains twice as many atoms.</p><p>Mass: <i>m</i> = <i>n</i> × <i>M</i>, and <i>n</i> is the same for both.</p><div class="worked__math"><i>M</i>(<span class="chem">NH3</span>) = 17.04 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">O2</span>) = 32.00 <span class="unit">g mol-1</span></div><p>Oxygen has the larger molar mass, so flask B has the greater mass.</p>
      solution: "",
      misconception: {
        // EN (option C): Equal numbers of molecules do not mean equal masses. The molar masses are different: 17.04 <span class="unit">g mol-1</span> for <span class="chem">NH3</span> and 32.00 <span class="unit">g mol-1</span> for <span class="chem">O2</span>.
        "2": "",
        // EN (option E): Avogadro's law does not depend on the mass or size of the molecules. Equal volumes at the same temperature and pressure contain equal numbers of molecules.
        "4": "",
      },
    },

    // ── s1-4-q052 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q052": {
      // EN: <p>A student wants to find the concentration of a coloured solution with a colorimeter and a calibration curve.</p><p>Which describes how the calibration curve is made and used?</p>
      stem: "",
      options: [
        // EN: Measure the absorbance of the unknown solution several times and take the mean.
        "",
        // EN: Measure the absorbance of several solutions of known concentration, plot absorbance against concentration, then read the concentration of the unknown from the line.
        "",
        // EN: Measure the absorbance of one solution of known concentration and assume the unknown has the same concentration.
        "",
        // EN: Plot the mass of solute against the volume of solution and find the gradient.
        "",
      ],
      hints: [
        // EN: A calibration curve links an instrument reading to a concentration. Which solutions must you measure to draw it?
        "",
        // EN: Standard solutions have known concentrations. The unknown is measured last and read from the graph.
        "",
      ],
      // EN: <p>Make several standard solutions of known concentration. Measure the absorbance of each. Plot absorbance (<i>y</i>) against concentration (<i>x</i>) and draw the line of best fit. Then measure the absorbance of the unknown and read its concentration from the line. The unknown should lie inside the range of the standards.</p>
      solution: "",
      misconception: {
        // EN (option A): Repeating the reading makes it more reliable, but an absorbance is not a concentration. You need solutions of known concentration to link the two.
        "0": "",
        // EN (option C): One known solution gives one point, not a line. Several standard solutions are needed, and the unknown is read from the line of best fit.
        "2": "",
        // EN (option D): That graph would give a concentration in <span class="unit">g dm-3</span> for a solution you made yourself. It does not use the colorimeter and says nothing about the unknown.
        "3": "",
      },
    },

    // ── s1-4-q053 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q053": {
      // EN: <p>3.60 <span class="unit">g</span> of glucose is dissolved in distilled water and the solution is made up to 200.0 <span class="unit">cm3</span>.</p><p>Calculate the concentration of the solution in <span class="unit">g dm-3</span>. Give your answer to 3 significant figures.</p>
      stem: "",
      hints: [
        // EN: A concentration in <span class="unit">g dm-3</span> is the mass of solute divided by the volume of solution. You do not need the molar mass.
        "",
        // EN: Convert the volume first: 200.0 <span class="unit">cm3</span> ÷ 1000 = 0.2000 <span class="unit">dm3</span>.
        "",
      ],
      // EN: <div class="worked__math"><i>V</i> = 200.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.2000 <span class="unit">dm3</span></div><div class="worked__math">concentration = <span class="frac"><span>3.60 <span class="unit">g</span></span><span>0.2000 <span class="unit">dm3</span></span></span><br>&nbsp;&nbsp;= <strong>18.0 <span class="unit">g dm-3</span></strong></div><p>Named slips: 0.0180 means you left the volume in <span class="unit">cm3</span>. 0.720 means you multiplied by the volume instead of dividing.</p>
      solution: "",
    },

  }
});
