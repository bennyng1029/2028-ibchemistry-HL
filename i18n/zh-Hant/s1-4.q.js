/* s1-4.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-4.q', {
  questions: {

    // ── s1-4-q001 · mcq · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q001": {
      // EN: <p>Which statement describes <strong>one mole</strong> of a substance?</p>
      stem: "<p>以下哪一項描述了<strong>一摩爾</strong>物質？</p>",
      options: [
        // EN: It has a mass of 6.02 × 10<sup>23</sup> <span class="unit">g</span>.
        "它的質量是 6.02 × 10<sup>23</sup> <span class=\"unit\">g</span>。",
        // EN: It contains the number of elementary entities given by the Avogadro constant.
        "它所含的基本粒子單元數目，等於亞佛加德羅常數所給的數值。",
        // EN: It is the mass of one atom compared with an atom of carbon-12.
        "它是一個原子的質量與一個碳-12 原子相比所得的值。",
        // EN: It is 12 <span class="unit">g</span> of any element.
        "它是 12 <span class=\"unit\">g</span> 的任何元素。",
      ],
      hints: [
        // EN: The mole is the SI unit of <em>amount of substance</em>. It is a counting unit, like a dozen, but much bigger.
        "摩爾是<em>物質的量</em> (amount of substance) 的 SI 單位。它是用來數數目的單位，就像「一打」，只是大得多。",
        // EN: The count is fixed by a constant in your data booklet. Its symbol is <i>N</i><sub>A</sub>.
        "這個數目由數據手冊中的一個常數決定，符號是 <i>N</i><sub>A</sub>。",
      ],
      // EN: <p>One mole contains exactly the number of elementary entities given by the Avogadro constant, <i>N</i><sub>A</sub> = 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span>. The entities can be atoms, molecules, ions, electrons or any specified group of particles.</p>
      solution: "<p>一摩爾所含的基本粒子單元數目，剛好等於亞佛加德羅常數所給的數值：<i>N</i><sub>A</sub> = 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span>。這些粒子單元可以是原子、分子、離子、電子，或任何指明的一組粒子。</p>",
      misconception: {
        // EN (option A): 6.02 × 10<sup>23</sup> is a number of particles, not a mass in grams. The mass of one mole is the molar mass, and it is different for each substance.
        "0": "6.02 × 10<sup>23</sup> 是粒子的數目，不是以克表示的質量。一摩爾的質量是摩爾質量，每種物質都不同。",
        // EN (option C): That describes relative atomic mass. The mole counts particles. It does not compare masses.
        "2": "這是相對原子質量的描述。摩爾是用來數粒子的，不是用來比較質量的。",
        // EN (option D): 12 <span class="unit">g</span> is one mole only for carbon-12. One mole of another element has a different mass.
        "3": "只有碳-12 的一摩爾才是 12 <span class=\"unit\">g</span>。其他元素一摩爾的質量並不相同。",
      },
    },

    // ── s1-4-q002 · numeric · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q002": {
      // EN: <p>How many molecules are there in 0.450 <span class="unit">mol</span> of water, <span class="chem">H2O</span>? Give your answer to 3 significant figures.</p>
      stem: "<p>0.450 <span class=\"unit\">mol</span> 的水 <span class=\"chem\">H2O</span> 含有多少個分子？答案取至 3 位有效數字。</p>",
      hints: [
        // EN: Use the relationship between number of particles and amount: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "利用粒子數目和物質的量之間的關係：<span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>。",
        // EN: Going from moles to particles makes the number much bigger, so you multiply by 6.02 × 10<sup>23</sup>.
        "由摩爾換算成粒子數目，數字會大很多，所以要乘以 6.02 × 10<sup>23</sup>。",
      ],
      // EN: <div class="worked__math"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></div><div class="worked__math"><i>N</i> = 0.450 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></div><div class="worked__math"><i>N</i> = 2.709 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>2.71 × 10<sup>23</sup> molecules</strong></div><p>Check the size: you have less than one mole, so the answer must be less than 6.02 × 10<sup>23</sup>. If you divided instead of multiplying you would get a number far smaller than 1, which cannot be a count of molecules.</p>
      solution: "<div class=\"worked__math\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></div><div class=\"worked__math\"><i>N</i> = 0.450 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></div><div class=\"worked__math\"><i>N</i> = 2.709 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>2.71 × 10<sup>23</sup> 個分子</strong></div><p>檢查大小：你有的不足一摩爾，所以答案一定小於 6.02 × 10<sup>23</sup>。如果你用了除法而不是乘法，會得出一個遠小於 1 的數，這不可能是分子的數目。</p>",
    },

    // ── s1-4-q003 · numeric · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q003": {
      // EN: <p>A sample of water contains 9.03 × 10<sup>22</sup> molecules. Calculate the amount of water, in <span class="unit">mol</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>一個水樣本含有 9.03 × 10<sup>22</sup> 個分子。計算 (calculate) 水的物質的量，以 <span class=\"unit\">mol</span> 表示。答案取至 3 位有效數字。</p>",
      hints: [
        // EN: Rearrange <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> to make <i>n</i> the subject.
        "把 <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> 重排，令 <i>n</i> 成為主項。",
        // EN: Going from particles to moles makes the number much smaller, so you divide by 6.02 × 10<sup>23</sup>. Compare the powers of ten first: 10<sup>22</sup> is less than 10<sup>23</sup>, so the answer is less than 1 mol.
        "由粒子數目換算成摩爾，數字會小很多，所以要除以 6.02 × 10<sup>23</sup>。先比較 10 的次方：10<sup>22</sup> 小於 10<sup>23</sup>，所以答案小於 1 mol。",
      ],
      // EN: <div class="worked__math"><i>n</i> = <span class="frac"><span><i>N</i></span><span><i>N</i><sub>A</sub></span></span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>9.03 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span></div><div class="worked__math"><i>n</i> = <strong>0.150 <span class="unit">mol</span></strong></div><p>If you multiplied by <i>N</i><sub>A</sub> instead, you would get about 5 × 10<sup>46</sup>, which is not a sensible amount in moles.</p>
      solution: "<div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span><i>N</i></span><span><i>N</i><sub>A</sub></span></span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>9.03 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span></div><div class=\"worked__math\"><i>n</i> = <strong>0.150 <span class=\"unit\">mol</span></strong></div><p>如果你反過來乘以 <i>N</i><sub>A</sub>，會得出大約 5 × 10<sup>46</sup>，以摩爾計這個數量並不合理。</p>",
    },

    // ── s1-4-q004 · mcq · exam · SL · Structure 1.4.1 · 1 mark
    "s1-4-q004": {
      // EN: <p>What is the total number of <strong>atoms</strong> in 0.500 <span class="unit">mol</span> of ammonia, <span class="chem">NH3</span>?</p>
      stem: "<p>0.500 <span class=\"unit\">mol</span> 的氨 <span class=\"chem\">NH3</span> 中，<strong>原子</strong>的總數是多少？</p>",
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
        "先用 <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> 求出分子的數目。",
        // EN: Then ask: how many atoms are in one molecule of <span class="chem">NH3</span>? Multiply by that number.
        "然後問自己：一個 <span class=\"chem\">NH3</span> 分子有多少個原子？再乘以這個數。",
      ],
      // EN: <div class="worked__math"><i>N</i> = 0.500 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 3.01 × 10<sup>23</sup> molecules</div><p>Each <span class="chem">NH3</span> molecule contains 1 N atom and 3 H atoms: 4 atoms.</p><div class="worked__math"><i>N</i>(atoms) = 4 × 3.01 × 10<sup>23</sup><br>&nbsp;&nbsp;= 1.204 × 10<sup>24</sup><br>&nbsp;&nbsp;= <strong>1.20 × 10<sup>24</sup></strong></div>
      solution: "<div class=\"worked__math\"><i>N</i> = 0.500 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 3.01 × 10<sup>23</sup> 個分子</div><p>每個 <span class=\"chem\">NH3</span> 分子含有 1 個 N 原子和 3 個 H 原子：共 4 個原子。</p><div class=\"worked__math\"><i>N</i>(原子) = 4 × 3.01 × 10<sup>23</sup><br>&nbsp;&nbsp;= 1.204 × 10<sup>24</sup><br>&nbsp;&nbsp;= <strong>1.20 × 10<sup>24</sup></strong></div>",
      misconception: {
        // EN (option A): This is the number of <span class="chem">NH3</span> <em>molecules</em> (0.500 × 6.02 × 10<sup>23</sup>). The question asks for atoms, and each molecule contains 4 atoms.
        "0": "這是 <span class=\"chem\">NH3</span> <em>分子</em>的數目 (0.500 × 6.02 × 10<sup>23</sup>)。題目問的是原子，而每個分子含有 4 個原子。",
        // EN (option B): You multiplied by 3, so you counted only the hydrogen atoms. Each <span class="chem">NH3</span> molecule has 1 N atom and 3 H atoms: 4 atoms in total.
        "1": "你乘了 3，所以只數了氫原子。每個 <span class=\"chem\">NH3</span> 分子有 1 個 N 原子和 3 個 H 原子：合共 4 個原子。",
        // EN (option D): You divided by the Avogadro constant instead of multiplying. A count of atoms in a visible sample must be a very large number.
        "3": "你除以亞佛加德羅常數，而不是乘以它。一個看得見的樣本中，原子的數目一定是非常大的數。",
      },
    },

    // ── s1-4-q005 · mcq · exam · SL · Structure 1.4.1 · 1 mark
    "s1-4-q005": {
      // EN: <p>What is the total number of <strong>ions</strong> in 0.20 <span class="unit">mol</span> of aluminium sulfate, <span class="chem">Al2(SO4)3</span>?</p>
      stem: "<p>0.20 <span class=\"unit\">mol</span> 的硫酸鋁 <span class=\"chem\">Al2(SO4)3</span> 中，<strong>離子</strong>的總數是多少？</p>",
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
        "寫出一個式單位中的離子：有多少個 <span class=\"chem\">Al^3+</span>？有多少個 <span class=\"chem\">SO4^2-</span>？",
        // EN: A polyatomic ion such as <span class="chem">SO4^2-</span> counts as one ion. Find the amount of ions in mol, then multiply by <i>N</i><sub>A</sub>.
        "<span class=\"chem\">SO4^2-</span> 這類多原子離子只算作一個離子。先求出離子的物質的量 (mol)，再乘以 <i>N</i><sub>A</sub>。",
      ],
      // EN: <p>One formula unit contains 2 <span class="chem">Al^3+</span> ions and 3 <span class="chem">SO4^2-</span> ions: 5 ions.</p><div class="worked__math"><i>n</i>(ions) = 5 × 0.20 <span class="unit">mol</span><br>&nbsp;&nbsp;= 1.0 <span class="unit">mol</span></div><div class="worked__math"><i>N</i>(ions) = 1.0 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>6.0 × 10<sup>23</sup></strong></div>
      solution: "<p>一個式單位含有 2 個 <span class=\"chem\">Al^3+</span> 離子和 3 個 <span class=\"chem\">SO4^2-</span> 離子：共 5 個離子。</p><div class=\"worked__math\"><i>n</i>(離子) = 5 × 0.20 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 1.0 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>N</i>(離子) = 1.0 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>6.0 × 10<sup>23</sup></strong></div>",
      misconception: {
        // EN (option A): This is the number of formula units (0.20 × 6.02 × 10<sup>23</sup>). Each formula unit contains more than one ion.
        "0": "這是式單位的數目 (0.20 × 6.02 × 10<sup>23</sup>)。每個式單位含有不止一個離子。",
        // EN (option B): You counted 2 ions per formula unit, one kind of positive ion and one kind of negative ion. Use the subscripts: there are 2 <span class="chem">Al^3+</span> and 3 <span class="chem">SO4^2-</span>, which is 5 ions.
        "1": "你把每個式單位當作有 2 個離子：一種正離子和一種負離子。要看下標：有 2 個 <span class=\"chem\">Al^3+</span> 和 3 個 <span class=\"chem\">SO4^2-</span>，即 5 個離子。",
        // EN (option D): You counted all 17 <em>atoms</em> in the formula. A sulfate ion, <span class="chem">SO4^2-</span>, is one ion even though it contains 5 atoms.
        "3": "你數了化學式中全部 17 個<em>原子</em>。一個硫酸根離子 <span class=\"chem\">SO4^2-</span> 雖然含有 5 個原子，但只是一個離子。",
      },
    },

    // ── s1-4-q006 · multi · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q006": {
      // EN: <p>Which statements about the mole are correct? Select <strong>all</strong> that apply.</p>
      stem: "<p>以下哪些關於摩爾的敘述是正確的？選出<strong>所有</strong>正確選項。</p>",
      options: [
        // EN: The mole is the SI unit of amount of substance.
        "摩爾是物質的量的 SI 單位。",
        // EN: One mole of any substance has a mass of 6.02 × 10<sup>23</sup> <span class="unit">g</span>.
        "任何物質一摩爾的質量都是 6.02 × 10<sup>23</sup> <span class=\"unit\">g</span>。",
        // EN: 1 <span class="unit">mol</span> of <span class="chem">H2O</span> molecules and 1 <span class="unit">mol</span> of <span class="chem">Fe</span> atoms contain the same number of particles.
        "1 <span class=\"unit\">mol</span> 的 <span class=\"chem\">H2O</span> 分子和 1 <span class=\"unit\">mol</span> 的 <span class=\"chem\">Fe</span> 原子含有相同數目的粒子。",
        // EN: The Avogadro constant has the units <span class="unit">mol-1</span>.
        "亞佛加德羅常數的單位是 <span class=\"unit\">mol-1</span>。",
        // EN: 1 <span class="unit">mol</span> of <span class="chem">O2</span> molecules contains 6.02 × 10<sup>23</sup> oxygen atoms.
        "1 <span class=\"unit\">mol</span> 的 <span class=\"chem\">O2</span> 分子含有 6.02 × 10<sup>23</sup> 個氧原子。",
      ],
      hints: [
        // EN: A mole is a fixed number of particles. Always ask: a mole of what?
        "一摩爾是固定數目的粒子。每次都要問：是一摩爾的甚麼？",
        // EN: For the last statement, count the atoms in one <span class="chem">O2</span> molecule.
        "最後一項：數一數一個 <span class=\"chem\">O2</span> 分子有多少個原子。",
      ],
      // EN: <p>The mole is the SI unit of amount of substance. One mole of anything contains 6.02 × 10<sup>23</sup> of the specified entities, so 1 mol of water molecules and 1 mol of iron atoms hold the same number of particles. <i>N</i><sub>A</sub> means "per mole", so its units are <span class="unit">mol-1</span>.</p><p>The two wrong statements mix up number with mass, and molecules with atoms.</p>
      solution: "<p>摩爾是物質的量的 SI 單位。任何東西的一摩爾都含有 6.02 × 10<sup>23</sup> 個指明的粒子單元，所以 1 mol 的水分子和 1 mol 的鐵原子含有相同數目的粒子。<i>N</i><sub>A</sub> 的意思是「每摩爾」，所以它的單位是 <span class=\"unit\">mol-1</span>。</p><p>兩項錯誤的敘述，一項混淆了數目和質量，另一項混淆了分子和原子。</p>",
      misconception: {
        // EN (option B): 6.02 × 10<sup>23</sup> is a number of particles, not a mass. The mass of one mole is the molar mass, which is different for each substance.
        "1": "6.02 × 10<sup>23</sup> 是粒子的數目，不是質量。一摩爾的質量是摩爾質量，每種物質都不同。",
        // EN (option E): There are 6.02 × 10<sup>23</sup> <span class="chem">O2</span> <em>molecules</em>. Each molecule has 2 atoms, so there are 1.20 × 10<sup>24</sup> oxygen atoms.
        "4": "這裏有 6.02 × 10<sup>23</sup> 個 <span class=\"chem\">O2</span> <em>分子</em>。每個分子有 2 個原子，所以氧原子有 1.20 × 10<sup>24</sup> 個。",
      },
    },

    // ── s1-4-q007 · mcq · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q007": {
      // EN: <p>Relative atomic masses compare the mass of an atom with a standard. What is the standard?</p>
      stem: "<p>相對原子質量是把一個原子的質量和一個標準作比較。這個標準是甚麼？</p>",
      options: [
        // EN: The mass of one atom of hydrogen-1
        "一個氫-1 原子的質量",
        // EN: The mass of one atom of carbon-12
        "一個碳-12 原子的質量",
        // EN: <span class="frac"><span>1</span><span>12</span></span> of the mass of one atom of carbon-12
        "一個碳-12 原子質量的 <span class=\"frac\"><span>1</span><span>12</span></span>",
        // EN: <span class="frac"><span>1</span><span>16</span></span> of the mass of one atom of oxygen-16
        "一個氧-16 原子質量的 <span class=\"frac\"><span>1</span><span>16</span></span>",
      ],
      hints: [
        // EN: The scale is set so that one atom of a particular carbon isotope has a relative mass of exactly 12.
        "這個標度的定法，是令某一種碳同位素的一個原子的相對質量剛好等於 12。",
        // EN: If the whole atom is 12 units, what fraction of the atom is 1 unit?
        "如果整個原子是 12 個單位，那麼 1 個單位是這個原子的幾分之幾？",
      ],
      // EN: <p>Masses of atoms are compared on a scale relative to carbon-12. One atom of <span class="chem">^12C</span> is given a mass of exactly 12, so the unit of the scale is <span class="frac"><span>1</span><span>12</span></span> of the mass of a carbon-12 atom.</p>
      solution: "<p>原子的質量是在以碳-12 為基準的標度上比較的。一個 <span class=\"chem\">^12C</span> 原子的質量定為剛好 12，所以這個標度的單位是一個碳-12 原子質量的 <span class=\"frac\"><span>1</span><span>12</span></span>。</p>",
      misconception: {
        // EN (option A): Hydrogen has a relative atomic mass close to 1, but it is not the standard. The scale is defined using carbon-12.
        "0": "氫的相對原子質量接近 1，但它不是標準。這個標度是用碳-12 來定義的。",
        // EN (option B): Right isotope, but the whole atom is not the unit. If it were, carbon-12 would have a relative mass of 1, not 12.
        "1": "同位素選對了，但單位不是整個原子。如果是，碳-12 的相對質量就會是 1，而不是 12。",
        // EN (option D): An oxygen scale was used in the past. The scale used now, and by the IB, is based on carbon-12.
        "3": "以前曾經用過以氧為基準的標度。現在通用的標度（IB 也用）以碳-12 為基準。",
      },
    },

    // ── s1-4-q008 · mcq · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q008": {
      // EN: <p>Which is the relative formula mass, <i>M</i><sub>r</sub>, of calcium hydroxide, <span class="chem">Ca(OH)2</span>?</p><p>Use <i>A</i><sub>r</sub>: Ca = 40.08, O = 16.00, H = 1.01.</p>
      stem: "<p>氫氧化鈣 <span class=\"chem\">Ca(OH)2</span> 的相對式量 <i>M</i><sub>r</sub> 是以下哪一項？</p><p>使用 <i>A</i><sub>r</sub>：Ca = 40.08、O = 16.00、H = 1.01。</p>",
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
        "把化學式中每一個原子的相對原子質量加起來。",
        // EN: The 2 outside the bracket multiplies both O and H. Also think about whether a <em>relative</em> mass has units.
        "括號外的 2 同時乘 O 和 H。另外想一想：<em>相對</em>質量有沒有單位？",
      ],
      // EN: <div class="worked__math"><i>M</i><sub>r</sub> = 40.08 + 2 × (16.00 + 1.01)</div><div class="worked__math"><i>M</i><sub>r</sub> = 40.08 + 34.02<br>&nbsp;&nbsp;= <strong>74.10</strong> (no units)</div><p><i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> are ratios, so they have no units. Molar mass has the same number with units of <span class="unit">g mol-1</span>.</p>
      solution: "<div class=\"worked__math\"><i>M</i><sub>r</sub> = 40.08 + 2 × (16.00 + 1.01)</div><div class=\"worked__math\"><i>M</i><sub>r</sub> = 40.08 + 34.02<br>&nbsp;&nbsp;= <strong>74.10</strong>（沒有單位）</div><p><i>A</i><sub>r</sub> 和 <i>M</i><sub>r</sub> 都是比值，所以沒有單位。摩爾質量的數值相同，但有單位 <span class=\"unit\">g mol-1</span>。</p>",
      misconception: {
        // EN (option A): You added one Ca, one O and one H. The subscript 2 outside the bracket means there are two O atoms and two H atoms.
        "0": "你只加了一個 Ca、一個 O 和一個 H。括號外的下標 2 表示有兩個 O 原子和兩個 H 原子。",
        // EN (option B): You applied the subscript 2 to hydrogen only. A subscript outside a bracket multiplies <em>everything</em> inside the bracket.
        "1": "你只把下標 2 用在氫上。括號外的下標要乘括號內的<em>每一項</em>。",
        // EN (option D): The number is right, but relative formula mass has no units. 74.10 <span class="unit">g mol-1</span> is the molar mass, <i>M</i>.
        "3": "數值是對的，但相對式量沒有單位。74.10 <span class=\"unit\">g mol-1</span> 是摩爾質量 <i>M</i>。",
      },
    },

    // ── s1-4-q009 · numeric · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q009": {
      // EN: <p>Calculate the relative formula mass, <i>M</i><sub>r</sub>, of iron(III) sulfate, <span class="chem">Fe2(SO4)3</span>. Give your answer to 2 decimal places.</p><p>Use the data booklet values: Fe = 55.85, S = 32.07, O = 16.00.</p>
      stem: "<p>計算 (calculate) 硫酸鐵(III) <span class=\"chem\">Fe2(SO4)3</span> 的相對式量 <i>M</i><sub>r</sub>。答案取至小數點後 2 位。</p><p>使用數據手冊的數值：Fe = 55.85、S = 32.07、O = 16.00。</p>",
      hints: [
        // EN: Count the atoms of each element first. The subscript 3 outside the bracket multiplies everything inside it.
        "先數清楚每種元素有多少個原子。括號外的下標 3 要乘括號內的每一項。",
        // EN: There are 2 Fe, 3 S and 3 × 4 = 12 O. Use the 2 decimal place <i>A</i><sub>r</sub> values, not whole numbers.
        "有 2 個 Fe、3 個 S 和 3 × 4 = 12 個 O。使用小數點後 2 位的 <i>A</i><sub>r</sub> 數值，不要用整數。",
      ],
      // EN: <p>Count the atoms in <span class="chem">Fe2(SO4)3</span>: 2 Fe, 3 S and 3 × 4 = 12 O.</p><div class="worked__math"><i>M</i><sub>r</sub> = (2 × 55.85) + (3 × 32.07)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (12 × 16.00)</div><div class="worked__math"><i>M</i><sub>r</sub> = 111.70 + 96.21 + 192.00<br>&nbsp;&nbsp;= <strong>399.91</strong> (no units)</div><p>Named slips: ignoring the bracket gives 207.77 (one S and four O). Using 3 S but only 4 O gives 271.91. Using whole-number <i>A</i><sub>r</sub> values gives 400. The guide says to use the two-decimal-place values from the data booklet.</p>
      solution: "<p>數一數 <span class=\"chem\">Fe2(SO4)3</span> 中的原子：2 個 Fe、3 個 S 和 3 × 4 = 12 個 O。</p><div class=\"worked__math\"><i>M</i><sub>r</sub> = (2 × 55.85) + (3 × 32.07)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (12 × 16.00)</div><div class=\"worked__math\"><i>M</i><sub>r</sub> = 111.70 + 96.21 + 192.00<br>&nbsp;&nbsp;= <strong>399.91</strong>（沒有單位）</div><p>常見失誤：忽略括號會得出 207.77（只算了一個 S 和四個 O）。用了 3 個 S 但只用 4 個 O，會得出 271.91。用整數的 <i>A</i><sub>r</sub> 會得出 400。學科指南要求使用數據手冊中小數點後兩位的數值。</p>",
    },

    // ── s1-4-q010 · short · exam · SL · Structure 1.4.2 · 2 marks
    "s1-4-q010": {
      // EN: <p>Chlorine has a relative atomic mass of 35.45.</p><p>State what is meant by <strong>relative atomic mass</strong>, and state its units.</p>
      stem: "<p>氯的相對原子質量是 35.45。</p><p>寫出 (state) <strong>相對原子質量</strong> (relative atomic mass) 的意思，並寫出它的單位。</p>",
      hints: [
        // EN: There are two ideas in the definition: an average over the isotopes, and a comparison with a standard atom.
        "定義中有兩個概念：各同位素的平均值，以及和一個標準原子作比較。",
        // EN: A <em>relative</em> mass is one mass divided by another mass. What happens to the units?
        "<em>相對</em>質量是一個質量除以另一個質量。單位會怎樣？",
      ],
      // EN: <p>Chlorine is a mixture of isotopes, so its relative atomic mass is a weighted average, which is why it is not a whole number. The comparison is with <span class="frac"><span>1</span><span>12</span></span> of the mass of a <span class="chem">^12C</span> atom. Because it is a ratio of two masses, it has no units.</p>
      solution: "<p>氯是多種同位素的混合物，所以它的相對原子質量是加權平均值，這就是它不是整數的原因。比較的對象是一個 <span class=\"chem\">^12C</span> 原子質量的 <span class=\"frac\"><span>1</span><span>12</span></span>。因為它是兩個質量的比值，所以沒有單位。</p>",
      // EN: <p>Relative atomic mass is the weighted average mass of the atoms of an element (taking the abundance of its isotopes into account), compared with <span class="frac"><span>1</span><span>12</span></span> of the mass of an atom of carbon-12. It has no units.</p>
      answer: "<p>相對原子質量是一種元素的原子的加權平均質量（計及各同位素的豐度），與一個碳-12 原子質量的 <span class=\"frac\"><span>1</span><span>12</span></span> 相比所得的值。它沒有單位。</p>",
      markscheme: [
        // EN: Weighted average mass of the atoms (or isotopes) of an element, relative to 1/12 of the mass of an atom of carbon-12. (Accept "compared with carbon-12 taken as exactly 12".)
        "一種元素的原子（或同位素）的加權平均質量，相對於一個碳-12 原子質量的 1/12。（接受「與定為剛好 12 的碳-12 相比」。）",
        // EN: It has no units. (Do not accept g or g mol⁻¹.)
        "沒有單位。（不接受 g 或 g mol⁻¹。）",
      ],
    },

    // ── s1-4-q011 · mcq · exam · SL · Structure 1.4.2 · 1 mark
    "s1-4-q011": {
      // EN: <p>What is the molar mass of hydrated copper(II) sulfate, <span class="chem">CuSO4.5H2O</span>, in <span class="unit">g mol-1</span>?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, S = 32.07, O = 16.00, H = 1.01.</p>
      stem: "<p>水合硫酸銅(II) <span class=\"chem\">CuSO4.5H2O</span> 的摩爾質量是多少（以 <span class=\"unit\">g mol-1</span> 表示）？</p><p>使用 <i>A</i><sub>r</sub>：Cu = 63.55、S = 32.07、O = 16.00、H = 1.01。</p>",
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
        "那一點的意思是「與……結合」。把水的質量加到 <span class=\"chem\">CuSO4</span> 的質量上。",
        // EN: Work out <i>M</i>(<span class="chem">CuSO4</span>) and <i>M</i>(<span class="chem">H2O</span>) separately. Then add five lots of water.
        "分開計算 <i>M</i>(<span class=\"chem\">CuSO4</span>) 和 <i>M</i>(<span class=\"chem\">H2O</span>)。然後加上五份水。",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">CuSO4</span>) = 63.55 + 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 159.62 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">CuSO4.5H2O</span>) = 159.62 + (5 × 18.02)<br>&nbsp;&nbsp;= <strong>249.72 <span class="unit">g mol-1</span></strong></div>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">CuSO4</span>) = 63.55 + 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 159.62 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 159.62 + (5 × 18.02)<br>&nbsp;&nbsp;= <strong>249.72 <span class=\"unit\">g mol-1</span></strong></div>",
      misconception: {
        // EN (option A): This is the molar mass of anhydrous <span class="chem">CuSO4</span>. The water of crystallization is part of the formula and part of the mass you weigh.
        "0": "這是無水 <span class=\"chem\">CuSO4</span> 的摩爾質量。結晶水是化學式的一部分，也是你稱量到的質量的一部分。",
        // EN (option B): You added one <span class="chem">H2O</span> (18.02). The 5 in front of <span class="chem">H2O</span> means five water molecules per formula unit.
        "1": "你只加了一個 <span class=\"chem\">H2O</span> (18.02)。<span class=\"chem\">H2O</span> 前面的 5 表示每個式單位有五個水分子。",
        // EN (option C): You multiplied only the hydrogen by 5 (10 H and 1 O). The 5 multiplies the whole <span class="chem">H2O</span>: 10 H and 5 O.
        "2": "你只把氫乘以 5（10 個 H 和 1 個 O）。5 要乘整個 <span class=\"chem\">H2O</span>：10 個 H 和 5 個 O。",
      },
    },

    // ── s1-4-q012 · numeric · foundation · SL · Structure 1.4.3 · 1 mark
    "s1-4-q012": {
      // EN: <p>Calculate the amount, in <span class="unit">mol</span>, of calcium carbonate in 25.0 <span class="unit">g</span> of <span class="chem">CaCO3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CaCO3</span>) = 100.09 <span class="unit">g mol-1</span></p>
      stem: "<p>計算 (calculate) 25.0 <span class=\"unit\">g</span> <span class=\"chem\">CaCO3</span> 中碳酸鈣的物質的量，以 <span class=\"unit\">mol</span> 表示。答案取至 3 位有效數字。</p><p><i>M</i>(<span class=\"chem\">CaCO3</span>) = 100.09 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: The relationship between amount, mass and molar mass is in your data booklet: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "物質的量、質量和摩爾質量之間的關係可在數據手冊找到：<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>。",
        // EN: Mass is in <span class="unit">g</span> and molar mass is in <span class="unit">g mol-1</span>, so no unit conversion is needed. 25.0 g is less than 100.09 g, so the answer is less than 1 mol.
        "質量的單位是 <span class=\"unit\">g</span>，摩爾質量的單位是 <span class=\"unit\">g mol-1</span>，所以不用換算單位。25.0 g 小於 100.09 g，所以答案小於 1 mol。",
      ],
      // EN: <div class="worked__math"><i>n</i> = <span class="frac"><span><i>m</i></span><span><i>M</i></span></span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>25.0 <span class="unit">g</span></span><span>100.09 <span class="unit">g mol-1</span></span></span></div><div class="worked__math"><i>n</i> = 0.24978 <span class="unit">mol</span> = <strong>0.250 <span class="unit">mol</span></strong></div><p>If you multiplied instead you would get about 2500, which fails the size check.</p>
      solution: "<div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>25.0 <span class=\"unit\">g</span></span><span>100.09 <span class=\"unit\">g mol-1</span></span></span></div><div class=\"worked__math\"><i>n</i> = 0.24978 <span class=\"unit\">mol</span> = <strong>0.250 <span class=\"unit\">mol</span></strong></div><p>如果你用了乘法，會得出大約 2500，這個數通不過大小檢查。</p>",
    },

    // ── s1-4-q013 · numeric · foundation · SL · Structure 1.4.3 · 1 mark
    "s1-4-q013": {
      // EN: <p>Calculate the mass, in <span class="unit">g</span>, of 0.350 <span class="unit">mol</span> of sulfuric acid, <span class="chem">H2SO4</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">H2SO4</span>) = 98.09 <span class="unit">g mol-1</span></p>
      stem: "<p>計算 (calculate) 0.350 <span class=\"unit\">mol</span> 硫酸 <span class=\"chem\">H2SO4</span> 的質量，以 <span class=\"unit\">g</span> 表示。答案取至 3 位有效數字。</p><p><i>M</i>(<span class=\"chem\">H2SO4</span>) = 98.09 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Start from <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> and rearrange it to make <i>m</i> the subject.
        "由 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> 開始，把它重排，令 <i>m</i> 成為主項。",
        // EN: <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>. Check the units: mol × g mol<sup>−1</sup> = g.
        "<span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span>。檢查單位：mol × g mol<sup>−1</sup> = g。",
      ],
      // EN: <div class="worked__math"><i>m</i> = <i>n</i> × <i>M</i></div><div class="worked__math"><i>m</i> = 0.350 <span class="unit">mol</span> × 98.09 <span class="unit">g mol-1</span></div><div class="worked__math"><i>m</i> = 34.33 <span class="unit">g</span> = <strong>34.3 <span class="unit">g</span></strong></div><p>Size check: about one third of a mole, so about one third of 98 g.</p>
      solution: "<div class=\"worked__math\"><i>m</i> = <i>n</i> × <i>M</i></div><div class=\"worked__math\"><i>m</i> = 0.350 <span class=\"unit\">mol</span> × 98.09 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>m</i> = 34.33 <span class=\"unit\">g</span> = <strong>34.3 <span class=\"unit\">g</span></strong></div><p>檢查大小：大約是三分之一摩爾，所以質量大約是 98 g 的三分之一。</p>",
    },

    // ── s1-4-q014 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q014": {
      // EN: <p>Calculate the number of molecules in 9.00 <span class="unit">g</span> of water, <span class="chem">H2O</span>. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, O = 16.00.</p>
      stem: "<p>計算 (calculate) 9.00 <span class=\"unit\">g</span> 的水 <span class=\"chem\">H2O</span> 中分子的數目。答案取至 3 位有效數字。</p><p>使用 <i>A</i><sub>r</sub>：H = 1.01、O = 16.00。</p>",
      hints: [
        // EN: This is a two-step route: mass → amount → number of particles. You cannot go from grams to particles in one step.
        "這條路線有兩步：質量 → 物質的量 → 粒子數目。不能一步由克跳到粒子數目。",
        // EN: Step 1: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> with <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. Step 2: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "第 1 步：<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>，其中 <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>。第 2 步：<span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>。",
        // EN: Keep all the digits of <i>n</i> in your calculator. Round only the final answer.
        "把 <i>n</i> 的所有位數留在計算機內。只在最後的答案才取近似值。",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class="unit">g mol-1</span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>9.00 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.49945 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>N</i> = 0.49945 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>3.01 × 10<sup>23</sup> molecules</strong> &nbsp; (M2)</div><p>The question asks for molecules. Multiplying by 3 as well would give the number of atoms (9.02 × 10<sup>23</sup>), which is a different question.</p>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>9.00 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.49945 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>N</i> = 0.49945 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>3.01 × 10<sup>23</sup> 個分子</strong> &nbsp; (M2)</div><p>題目問的是分子。如果再乘以 3，得出的是原子的數目 (9.02 × 10<sup>23</sup>)，那是另一條問題的答案。</p>",
    },

    // ── s1-4-q015 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q015": {
      // EN: <p>Calculate the number of <strong>oxygen atoms</strong> in 8.80 <span class="unit">g</span> of carbon dioxide, <span class="chem">CO2</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span></p>
      stem: "<p>計算 (calculate) 8.80 <span class=\"unit\">g</span> 二氧化碳 <span class=\"chem\">CO2</span> 中<strong>氧原子</strong>的數目。答案取至 3 位有效數字。</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Route: mass → amount of <span class="chem">CO2</span> → amount of O atoms → number of O atoms.
        "路線：質量 → <span class=\"chem\">CO2</span> 的物質的量 → O 原子的物質的量 → O 原子的數目。",
        // EN: Each <span class="chem">CO2</span> molecule contains 2 oxygen atoms, so <i>n</i>(O) = 2 × <i>n</i>(<span class="chem">CO2</span>).
        "每個 <span class=\"chem\">CO2</span> 分子含有 2 個氧原子，所以 <i>n</i>(O) = 2 × <i>n</i>(<span class=\"chem\">CO2</span>)。",
        // EN: Finish with <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "最後用 <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>。",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">CO2</span>) = <span class="frac"><span>8.80 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.19995 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(O) = 2 × 0.19995 <span class="unit">mol</span><br>&nbsp;&nbsp;= 0.39991 <span class="unit">mol</span></div><div class="worked__math"><i>N</i>(O) = 0.39991 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>2.41 × 10<sup>23</sup> atoms</strong> &nbsp; (M2)</div><p>Named slips: 1.20 × 10<sup>23</sup> is the number of <span class="chem">CO2</span> molecules (subscript not used). 3.61 × 10<sup>23</sup> is the number of all atoms (multiplied by 3, not 2).</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">CO2</span>) = <span class=\"frac\"><span>8.80 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.19995 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(O) = 2 × 0.19995 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 0.39991 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>N</i>(O) = 0.39991 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>2.41 × 10<sup>23</sup> 個原子</strong> &nbsp; (M2)</div><p>常見失誤：1.20 × 10<sup>23</sup> 是 <span class=\"chem\">CO2</span> 分子的數目（沒有用下標）。3.61 × 10<sup>23</sup> 是所有原子的數目（乘了 3，而不是 2）。</p>",
    },

    // ── s1-4-q016 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q016": {
      // EN: <p>Epsom salt is hydrated magnesium sulfate, <span class="chem">MgSO4.7H2O</span>.</p><p>Calculate the amount, in <span class="unit">mol</span>, of <strong>water molecules</strong> in 12.3 <span class="unit">g</span> of Epsom salt. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">MgSO4</span>) = 120.38 <span class="unit">g mol-1</span>, &nbsp; <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>瀉鹽 (Epsom salt) 是水合硫酸鎂 <span class=\"chem\">MgSO4.7H2O</span>。</p><p>計算 (calculate) 12.3 <span class=\"unit\">g</span> 瀉鹽中<strong>水分子</strong>的物質的量，以 <span class=\"unit\">mol</span> 表示。答案取至 3 位有效數字。</p><p><i>M</i>(<span class=\"chem\">MgSO4</span>) = 120.38 <span class=\"unit\">g mol-1</span>， &nbsp; <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: The 12.3 g is hydrated salt, so you need the molar mass of the whole formula, water included.
        "12.3 g 是水合鹽的質量，所以要用整個化學式（包括水）的摩爾質量。",
        // EN: <i>M</i>(<span class="chem">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02). Use it in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "<i>M</i>(<span class=\"chem\">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02)。把它代入 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>。",
        // EN: One mole of the hydrate contains 7 mol of water molecules.
        "一摩爾水合物含有 7 mol 水分子。",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02)<br>&nbsp;&nbsp;= 246.52 <span class="unit">g mol-1</span></div><div class="worked__math"><i>n</i>(hydrate) = <span class="frac"><span>12.3 <span class="unit">g</span></span><span>246.52 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.049895 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = 7 × 0.049895 <span class="unit">mol</span><br>&nbsp;&nbsp;= <strong>0.349 <span class="unit">mol</span></strong> &nbsp; (M2)</div><p>Named slip: dividing 12.3 g by the anhydrous molar mass (120.38) gives 0.715 mol. The solid you weighed includes its water, so the hydrated molar mass must be used.</p>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02)<br>&nbsp;&nbsp;= 246.52 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>n</i>(水合物) = <span class=\"frac\"><span>12.3 <span class=\"unit\">g</span></span><span>246.52 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.049895 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = 7 × 0.049895 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= <strong>0.349 <span class=\"unit\">mol</span></strong> &nbsp; (M2)</div><p>常見失誤：把 12.3 g 除以無水鹽的摩爾質量 (120.38)，會得出 0.715 mol。你稱量的固體包含了水，所以一定要用水合鹽的摩爾質量。</p>",
    },

    // ── s1-4-q017 · mcq · exam · SL · Structure 1.4.3 · 1 mark
    "s1-4-q017": {
      // EN: <p>What is the mass, in <span class="unit">g</span>, of <strong>one molecule</strong> of water?</p><p><i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p><strong>一個水分子</strong>的質量是多少（以 <span class=\"unit\">g</span> 表示）？</p><p><i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
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
        "18.02 g 是一摩爾分子的質量。這個質量由多少個分子平分？",
        // EN: Share the mass equally: divide the molar mass by <i>N</i><sub>A</sub>. Expect a very small number.
        "把質量平分：摩爾質量除以 <i>N</i><sub>A</sub>。答案應該是非常小的數。",
      ],
      // EN: <p>One mole of water molecules has a mass of 18.02 <span class="unit">g</span>. That mass is shared between 6.02 × 10<sup>23</sup> molecules.</p><div class="worked__math"><i>m</i>(one molecule) = <span class="frac"><span>18.02 <span class="unit">g mol-1</span></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span></div><div class="worked__math"><i>m</i>(one molecule) = <strong>2.99 × 10<sup>−23</sup> <span class="unit">g</span></strong></div>
      solution: "<p>一摩爾水分子的質量是 18.02 <span class=\"unit\">g</span>。這個質量由 6.02 × 10<sup>23</sup> 個分子平分。</p><div class=\"worked__math\"><i>m</i>(一個分子) = <span class=\"frac\"><span>18.02 <span class=\"unit\">g mol-1</span></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span></div><div class=\"worked__math\"><i>m</i>(一個分子) = <strong>2.99 × 10<sup>−23</sup> <span class=\"unit\">g</span></strong></div>",
      misconception: {
        // EN (option A): This is 1 ÷ <i>N</i><sub>A</sub>. You left out the molar mass. One mole of water has a mass of 18.02 g, not 1 g.
        "0": "這是 1 ÷ <i>N</i><sub>A</sub>。你漏了摩爾質量。一摩爾水的質量是 18.02 g，不是 1 g。",
        // EN (option C): You divided <i>N</i><sub>A</sub> by the molar mass. That gives the number of molecules in 1 g of water, not the mass of one molecule.
        "2": "你把 <i>N</i><sub>A</sub> 除以摩爾質量。這樣得出的是 1 g 水中分子的數目，不是一個分子的質量。",
        // EN (option D): You multiplied the molar mass by <i>N</i><sub>A</sub>. One molecule cannot have a larger mass than a whole mole of molecules.
        "3": "你把摩爾質量乘以 <i>N</i><sub>A</sub>。一個分子的質量不可能比整整一摩爾分子還要大。",
      },
    },

    // ── s1-4-q018 · mcq · exam · SL · Structure 1.4.3 · 1 mark
    "s1-4-q018": {
      // EN: <p>Which sample contains the greatest total number of <strong>atoms</strong>?</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, He = 4.00, C = 12.01, O = 16.00.</p>
      stem: "<p>以下哪一個樣本所含的<strong>原子</strong>總數最多？</p><p>使用 <i>A</i><sub>r</sub>：H = 1.01、He = 4.00、C = 12.01、O = 16.00。</p>",
      options: [
        // EN: 4.00 <span class="unit">g</span> of helium, <span class="chem">He</span>
        "4.00 <span class=\"unit\">g</span> 氦 <span class=\"chem\">He</span>",
        // EN: 16.0 <span class="unit">g</span> of methane, <span class="chem">CH4</span>
        "16.0 <span class=\"unit\">g</span> 甲烷 <span class=\"chem\">CH4</span>",
        // EN: 27.0 <span class="unit">g</span> of water, <span class="chem">H2O</span>
        "27.0 <span class=\"unit\">g</span> 水 <span class=\"chem\">H2O</span>",
        // EN: 44.0 <span class="unit">g</span> of carbon dioxide, <span class="chem">CO2</span>
        "44.0 <span class=\"unit\">g</span> 二氧化碳 <span class=\"chem\">CO2</span>",
      ],
      hints: [
        // EN: For each sample find the amount of molecules with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "用 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> 求出每個樣本中分子的物質的量。",
        // EN: Then multiply by the number of atoms in one molecule. Compare amounts of atoms in mol. You do not need <i>N</i><sub>A</sub> to compare.
        "然後乘以一個分子中原子的數目。比較原子的物質的量 (mol) 就可以了，不需要用 <i>N</i><sub>A</sub>。",
      ],
      // EN: <div class="table-scroll"><table class="data"><thead><tr><th scope="col">Sample</th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>M</i> / g mol<sup>−1</sup></span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>n</i> / mol</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Atoms each</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>n</i>(atoms) / mol</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">He</span></th><td class="num">4.00</td><td class="num">1.00</td><td class="num">1</td><td class="num">1.00</td></tr><tr><th scope="row"><span class="chem">CH4</span></th><td class="num">16.05</td><td class="num">0.997</td><td class="num">5</td><td class="num"><strong>4.98</strong></td></tr><tr><th scope="row"><span class="chem">H2O</span></th><td class="num">18.02</td><td class="num">1.50</td><td class="num">3</td><td class="num">4.50</td></tr><tr><th scope="row"><span class="chem">CO2</span></th><td class="num">44.01</td><td class="num">1.00</td><td class="num">3</td><td class="num">3.00</td></tr></tbody></table></div><p>Methane has the largest amount of atoms, so it has the greatest number of atoms.</p>
      solution: "<div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">樣本</th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>M</i> / g mol<sup>−1</sup></span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>n</i> / mol</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">每個粒子的原子數</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>n</i>(原子) / mol</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">He</span></th><td class=\"num\">4.00</td><td class=\"num\">1.00</td><td class=\"num\">1</td><td class=\"num\">1.00</td></tr><tr><th scope=\"row\"><span class=\"chem\">CH4</span></th><td class=\"num\">16.05</td><td class=\"num\">0.997</td><td class=\"num\">5</td><td class=\"num\"><strong>4.98</strong></td></tr><tr><th scope=\"row\"><span class=\"chem\">H2O</span></th><td class=\"num\">18.02</td><td class=\"num\">1.50</td><td class=\"num\">3</td><td class=\"num\">4.50</td></tr><tr><th scope=\"row\"><span class=\"chem\">CO2</span></th><td class=\"num\">44.01</td><td class=\"num\">1.00</td><td class=\"num\">3</td><td class=\"num\">3.00</td></tr></tbody></table></div><p>甲烷中原子的物質的量最大，所以它所含的原子數目最多。</p>",
      misconception: {
        // EN (option A): Helium atoms are light, but 4.00 g is only 1.00 mol of atoms. The other samples contain several atoms in every molecule.
        "0": "氦原子很輕，但 4.00 g 只是 1.00 mol 原子。其他樣本的每個分子都含有幾個原子。",
        // EN (option C): Water has the most <em>molecules</em> here (1.50 mol), but each has only 3 atoms: 4.50 mol of atoms. Compare with 5 atoms per <span class="chem">CH4</span> molecule.
        "2": "這裏水的<em>分子</em>最多 (1.50 mol)，但每個分子只有 3 個原子：共 4.50 mol 原子。和每個 <span class=\"chem\">CH4</span> 分子有 5 個原子比較一下。",
        // EN (option D): The largest mass does not mean the most atoms. 44.0 g of <span class="chem">CO2</span> is about 1.00 mol of molecules, which is 3.00 mol of atoms.
        "3": "質量最大不代表原子最多。44.0 g <span class=\"chem\">CO2</span> 大約是 1.00 mol 分子，即 3.00 mol 原子。",
      },
    },

    // ── s1-4-q019 · numeric · challenge · SL · Structure 1.4.3 · 3 marks
    "s1-4-q019": {
      // EN: <p>A sample of magnesium chloride, <span class="chem">MgCl2</span>, contains 3.01 × 10<sup>22</sup> chloride ions.</p><p>Calculate the mass of the sample, in <span class="unit">g</span>. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: Mg = 24.31, Cl = 35.45.</p>
      stem: "<p>一個氯化鎂 <span class=\"chem\">MgCl2</span> 樣本含有 3.01 × 10<sup>22</sup> 個氯離子。</p><p>計算 (calculate) 樣本的質量，以 <span class=\"unit\">g</span> 表示。答案取至 3 位有效數字。</p><p>使用 <i>A</i><sub>r</sub>：Mg = 24.31、Cl = 35.45。</p>",
      hints: [
        // EN: Work backwards along the usual route: number of ions → amount of ions → amount of <span class="chem">MgCl2</span> → mass.
        "沿着平常的路線倒過來走：離子數目 → 離子的物質的量 → <span class=\"chem\">MgCl2</span> 的物質的量 → 質量。",
        // EN: One formula unit of <span class="chem">MgCl2</span> contains 2 chloride ions. So is the amount of <span class="chem">MgCl2</span> bigger or smaller than the amount of <span class="chem">Cl-</span>?
        "一個 <span class=\"chem\">MgCl2</span> 式單位含有 2 個氯離子。那麼 <span class=\"chem\">MgCl2</span> 的物質的量比 <span class=\"chem\">Cl-</span> 的大還是小？",
        // EN: <i>n</i>(<span class="chem">MgCl2</span>) = <i>n</i>(<span class="chem">Cl-</span>) ÷ 2. Then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> with <i>M</i> = 95.21 <span class="unit">g mol-1</span>.
        "<i>n</i>(<span class=\"chem\">MgCl2</span>) = <i>n</i>(<span class=\"chem\">Cl-</span>) ÷ 2。然後用 <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span>，其中 <i>M</i> = 95.21 <span class=\"unit\">g mol-1</span>。",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">Cl-</span>) = <span class="frac"><span>3.01 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0500 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">MgCl2</span>) = 0.0500 <span class="unit">mol</span> ÷ 2<br>&nbsp;&nbsp;= 0.0250 <span class="unit">mol</span> &nbsp; (M2)</div><div class="worked__math"><i>M</i>(<span class="chem">MgCl2</span>) = 24.31 + (2 × 35.45)<br>&nbsp;&nbsp;= 95.21 <span class="unit">g mol-1</span></div><div class="worked__math"><i>m</i> = 0.0250 <span class="unit">mol</span> × 95.21 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= <strong>2.38 <span class="unit">g</span></strong> &nbsp; (M3)</div><p>Named slips: 4.76 g means you did not divide by 2. 9.52 g means you multiplied by 2 instead of dividing. There are fewer formula units than chloride ions.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">Cl-</span>) = <span class=\"frac\"><span>3.01 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0500 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">MgCl2</span>) = 0.0500 <span class=\"unit\">mol</span> ÷ 2<br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">mol</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MgCl2</span>) = 24.31 + (2 × 35.45)<br>&nbsp;&nbsp;= 95.21 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>m</i> = 0.0250 <span class=\"unit\">mol</span> × 95.21 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= <strong>2.38 <span class=\"unit\">g</span></strong> &nbsp; (M3)</div><p>常見失誤：得出 4.76 g，表示你沒有除以 2。得出 9.52 g，表示你乘了 2 而不是除以 2。式單位的數目比氯離子少。</p>",
    },

    // ── s1-4-q020 · mcq · challenge · SL · Structure 1.4.3 · 1 mark
    "s1-4-q020": {
      // EN: <p>A student calculates the number of hydrogen atoms in 3.20 <span class="unit">g</span> of methane, <span class="chem">CH4</span>. Their working is shown.</p><ol><li><i>M</i>(<span class="chem">CH4</span>) = 12.01 + (4 × 1.01) = 16.05 <span class="unit">g mol-1</span></li><li><i>n</i>(<span class="chem">CH4</span>) = 3.20 ÷ 16.05 = 0.199 <span class="unit">mol</span></li><li>Number of molecules = 0.199 × 6.02 × 10<sup>23</sup> = 1.20 × 10<sup>23</sup></li><li>Number of H atoms = 1.20 × 10<sup>23</sup> ÷ 4 = 3.00 × 10<sup>22</sup></li></ol><p>Which line contains the error?</p>
      stem: "<p>一名學生計算 3.20 <span class=\"unit\">g</span> 甲烷 <span class=\"chem\">CH4</span> 中氫原子的數目。計算步驟如下。</p><ol><li><i>M</i>(<span class=\"chem\">CH4</span>) = 12.01 + (4 × 1.01) = 16.05 <span class=\"unit\">g mol-1</span></li><li><i>n</i>(<span class=\"chem\">CH4</span>) = 3.20 ÷ 16.05 = 0.199 <span class=\"unit\">mol</span></li><li>分子數目 = 0.199 × 6.02 × 10<sup>23</sup> = 1.20 × 10<sup>23</sup></li><li>H 原子數目 = 1.20 × 10<sup>23</sup> ÷ 4 = 3.00 × 10<sup>22</sup></li></ol><p>哪一行有錯誤？</p>",
      options: [
        // EN: Line 1
        "第 1 行",
        // EN: Line 2
        "第 2 行",
        // EN: Line 3
        "第 3 行",
        // EN: Line 4
        "第 4 行",
      ],
      hints: [
        // EN: Check each line for two things: the right relationship, and an answer that moves in a sensible direction.
        "每一行檢查兩件事：關係式是否用對，以及答案變大或變小的方向是否合理。",
        // EN: Should there be more hydrogen atoms than molecules, or fewer?
        "氫原子應該比分子多，還是比分子少？",
      ],
      // EN: <p>Lines 1 to 3 are correct. In line 4 the student divided by 4. Each <span class="chem">CH4</span> molecule contains 4 hydrogen atoms, so there are 4 times <em>more</em> H atoms than molecules.</p><div class="worked__math"><i>N</i>(H) = 4 × 1.20 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>4.80 × 10<sup>23</sup></strong></div>
      solution: "<p>第 1 至 3 行都正確。在第 4 行，學生除以 4。每個 <span class=\"chem\">CH4</span> 分子含有 4 個氫原子，所以 H 原子的數目是分子的 4 倍，是<em>更多</em>而不是更少。</p><div class=\"worked__math\"><i>N</i>(H) = 4 × 1.20 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>4.80 × 10<sup>23</sup></strong></div>",
      misconception: {
        // EN (option A): Line 1 is correct: one C and four H gives 16.05 <span class="unit">g mol-1</span>. Look for a step where the answer moves in the wrong direction.
        "0": "第 1 行正確：一個 C 和四個 H 得出 16.05 <span class=\"unit\">g mol-1</span>。找出答案向錯誤方向變化的那一步。",
        // EN (option B): Line 2 is correct: <i>n</i> = <i>m</i> ÷ <i>M</i> with mass in g and molar mass in g mol<sup>−1</sup>.
        "1": "第 2 行正確：<i>n</i> = <i>m</i> ÷ <i>M</i>，質量以 g 表示，摩爾質量以 g mol<sup>−1</sup> 表示。",
        // EN (option C): Line 3 is correct: moles to molecules means multiplying by <i>N</i><sub>A</sub>.
        "2": "第 3 行正確：由摩爾換算成分子數目，要乘以 <i>N</i><sub>A</sub>。",
      },
    },

    // ── s1-4-q021 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "s1-4-q021": {
      // EN: <p>Glucose has the molecular formula <span class="chem">C6H12O6</span>. What is its empirical formula?</p>
      stem: "<p>葡萄糖的分子式是 <span class=\"chem\">C6H12O6</span>。它的實驗式 (empirical formula) 是甚麼？</p>",
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
        "實驗式表示各元素原子的最簡比。",
        // EN: Find the largest number that divides exactly into 6, 12 and 6.
        "找出能同時整除 6、12 和 6 的最大的數。",
      ],
      // EN: <div class="worked__math">C : H : O = 6 : 12 : 6</div><div class="worked__math">Divide by 6: C : H : O = 1 : 2 : 1</div><p>The empirical formula is <strong><span class="chem">CH2O</span></strong>.</p>
      solution: "<div class=\"worked__math\">C : H : O = 6 : 12 : 6</div><div class=\"worked__math\">除以 6：C : H : O = 1 : 2 : 1</div><p>實驗式是 <strong><span class=\"chem\">CH2O</span></strong>。</p>",
      misconception: {
        // EN (option A): This is the molecular formula: the actual number of atoms in one molecule. The empirical formula is the simplest whole-number ratio.
        "0": "這是分子式：一個分子中原子的實際數目。實驗式是最簡整數比。",
        // EN (option B): You divided by 2, but 3 : 6 : 3 can still be divided by 3. Keep going until the ratio cannot be made simpler.
        "1": "你除以 2，但 3 : 6 : 3 還可以再除以 3。要一直約簡，直到比不能再簡化為止。",
        // EN (option D): You removed the subscripts instead of dividing them. The ratio of atoms is 6 : 12 : 6, which simplifies to 1 : 2 : 1.
        "3": "你把下標刪掉，而不是把它們約簡。原子的比是 6 : 12 : 6，約簡後是 1 : 2 : 1。",
      },
    },

    // ── s1-4-q022 · numeric · exam · SL · Structure 1.4.4 · 2 marks
    "s1-4-q022": {
      // EN: <p>Ammonium sulfate, <span class="chem">(NH4)2SO4</span>, is used as a fertilizer.</p><p>Calculate the percentage by mass of nitrogen in ammonium sulfate. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: N = 14.01, H = 1.01, S = 32.07, O = 16.00.</p>
      stem: "<p>硫酸銨 <span class=\"chem\">(NH4)2SO4</span> 可用作肥料。</p><p>計算 (calculate) 硫酸銨中氮的質量百分率。答案取至 3 位有效數字。</p><p>使用 <i>A</i><sub>r</sub>：N = 14.01、H = 1.01、S = 32.07、O = 16.00。</p>",
      hints: [
        // EN: Percentage by mass of an element = (mass of that element in one mole of compound ÷ molar mass of compound) × 100.
        "某元素的質量百分率 =（一摩爾化合物中該元素的質量 ÷ 化合物的摩爾質量）× 100。",
        // EN: Count the nitrogen atoms carefully. The subscript 2 outside the bracket applies to N and to H.
        "小心數清楚氮原子的數目。括號外的下標 2 對 N 和 H 都適用。",
        // EN: <i>M</i> = (2 × 14.01) + (8 × 1.01) + 32.07 + (4 × 16.00).
        "<i>M</i> = (2 × 14.01) + (8 × 1.01) + 32.07 + (4 × 16.00)。",
      ],
      // EN: <div class="worked__math"><i>M</i> = (2 × 14.01) + (8 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 132.17 <span class="unit">g mol-1</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(N in 1 mol) = 2 × 14.01 <span class="unit">g</span><br>&nbsp;&nbsp;= 28.02 <span class="unit">g</span></div><div class="worked__math">% N = <span class="frac"><span>28.02</span><span>132.17</span></span> × 100<br>&nbsp;&nbsp;= <strong>21.2 %</strong> &nbsp; (M2)</div><p>Named slip: 10.6 % means you counted one nitrogen atom instead of two.</p>
      solution: "<div class=\"worked__math\"><i>M</i> = (2 × 14.01) + (8 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 132.17 <span class=\"unit\">g mol-1</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(1 mol 中的 N) = 2 × 14.01 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 28.02 <span class=\"unit\">g</span></div><div class=\"worked__math\">% N = <span class=\"frac\"><span>28.02</span><span>132.17</span></span> × 100<br>&nbsp;&nbsp;= <strong>21.2 %</strong> &nbsp; (M2)</div><p>常見失誤：得出 10.6 %，表示你只數了一個氮原子，而不是兩個。</p>",
    },

    // ── s1-4-q023 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q023": {
      // EN: <p>A compound contains, by mass, 29.1 % sodium, 40.5 % sulfur and 30.4 % oxygen.</p><p>What is its empirical formula?</p><p>Use <i>A</i><sub>r</sub>: Na = 22.99, S = 32.07, O = 16.00.</p>
      stem: "<p>某化合物按質量計含有 29.1 % 鈉、40.5 % 硫和 30.4 % 氧。</p><p>它的實驗式是甚麼？</p><p>使用 <i>A</i><sub>r</sub>：Na = 22.99、S = 32.07、O = 16.00。</p>",
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
        "假設有 100 g 化合物，每個百分率就變成以克表示的質量。然後每種元素都用 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span>。",
        // EN: Divide all three amounts by the smallest one.
        "把三個物質的量都除以其中最小的一個。",
        // EN: You should get 1 : 1 : 1.5. Do not round the 1.5. What can you multiply by to make every number whole?
        "你應該得出 1 : 1 : 1.5。不要把 1.5 四捨五入。乘以甚麼數可以令每個數都變成整數？",
      ],
      // EN: <div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Na</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">S</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">O</span></th></tr></thead><tbody><tr><th scope="row">Mass in 100 g / g</th><td class="num">29.1</td><td class="num">40.5</td><td class="num">30.4</td></tr><tr><th scope="row">÷ <i>A</i><sub>r</sub> → amount / mol</th><td class="num">1.266</td><td class="num">1.263</td><td class="num">1.900</td></tr><tr><th scope="row">÷ smallest (1.263)</th><td class="num">1.00</td><td class="num">1.00</td><td class="num">1.50</td></tr><tr><th scope="row">× 2</th><td class="num">2</td><td class="num">2</td><td class="num">3</td></tr></tbody></table></div><p>The empirical formula is <strong><span class="chem">Na2S2O3</span></strong>.</p>
      solution: "<div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">Na</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">S</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">O</span></th></tr></thead><tbody><tr><th scope=\"row\">100 g 中的質量 / g</th><td class=\"num\">29.1</td><td class=\"num\">40.5</td><td class=\"num\">30.4</td></tr><tr><th scope=\"row\">÷ <i>A</i><sub>r</sub> → 物質的量 / mol</th><td class=\"num\">1.266</td><td class=\"num\">1.263</td><td class=\"num\">1.900</td></tr><tr><th scope=\"row\">÷ 最小值 (1.263)</th><td class=\"num\">1.00</td><td class=\"num\">1.00</td><td class=\"num\">1.50</td></tr><tr><th scope=\"row\">× 2</th><td class=\"num\">2</td><td class=\"num\">2</td><td class=\"num\">3</td></tr></tbody></table></div><p>實驗式是 <strong><span class=\"chem\">Na2S2O3</span></strong>。</p>",
      misconception: {
        // EN (option A): You rounded 1.5 down to 1. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.
        "0": "你把 1.5 捨去成 1。以 .5 結尾的比值離整數太遠，不能四捨五入。應該把每個數都乘以 2。",
        // EN (option B): You rounded 1.5 up to 2. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.
        "1": "你把 1.5 進位成 2。以 .5 結尾的比值離整數太遠，不能四捨五入。應該把每個數都乘以 2。",
        // EN (option D): You used the percentages as if they were numbers of atoms (29 : 40 : 30 ≈ 3 : 4 : 3). Divide each percentage by the <i>A</i><sub>r</sub> first to get moles.
        "3": "你把百分率當成原子的數目 (29 : 40 : 30 ≈ 3 : 4 : 3)。要先把每個百分率除以 <i>A</i><sub>r</sub>，換算成摩爾。",
      },
    },

    // ── s1-4-q024 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q024": {
      // EN: <p>1.43 <span class="unit">g</span> of an oxide of copper is heated in a stream of hydrogen until all of it has been reduced to copper. The copper left has a mass of 1.27 <span class="unit">g</span>.</p><p>What is the empirical formula of the oxide?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, O = 16.00.</p>
      stem: "<p>把 1.43 <span class=\"unit\">g</span> 某種銅的氧化物放在氫氣流中加熱，直至全部還原成銅。剩下的銅的質量是 1.27 <span class=\"unit\">g</span>。</p><p>這種氧化物的實驗式是甚麼？</p><p>使用 <i>A</i><sub>r</sub>：Cu = 63.55、O = 16.00。</p>",
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
        "這種氧化物只含銅和氧。失去的質量就是氧的質量，所以用減法求出來。",
        // EN: Convert each mass to an amount with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span>. Use the mass of an oxygen <em>atom</em>.
        "用 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span> 把每個質量換算成物質的量。要用氧<em>原子</em>的質量。",
        // EN: Divide both amounts by the smaller one to get the ratio.
        "把兩個物質的量都除以較小的一個，得出比。",
      ],
      // EN: <div class="worked__math"><i>m</i>(O) = 1.43 <span class="unit">g</span> − 1.27 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.16 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(Cu) = <span class="frac"><span>1.27 <span class="unit">g</span></span><span>63.55 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0200 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.16 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0100 <span class="unit">mol</span></div><div class="worked__math">Cu : O = 0.0200 : 0.0100<br>&nbsp;&nbsp;= 2 : 1</div><p>The empirical formula is <strong><span class="chem">Cu2O</span></strong>.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(O) = 1.43 <span class=\"unit\">g</span> − 1.27 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.16 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(Cu) = <span class=\"frac\"><span>1.27 <span class=\"unit\">g</span></span><span>63.55 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0200 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.16 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0100 <span class=\"unit\">mol</span></div><div class=\"worked__math\">Cu : O = 0.0200 : 0.0100<br>&nbsp;&nbsp;= 2 : 1</div><p>實驗式是 <strong><span class=\"chem\">Cu2O</span></strong>。</p>",
      misconception: {
        // EN (option A): You have the ratio upside down. There are 0.0200 mol of Cu and 0.0100 mol of O, so there are two Cu for each O.
        "0": "你把比倒轉了。Cu 有 0.0200 mol，O 有 0.0100 mol，所以每一個 O 對應兩個 Cu。",
        // EN (option C): You divided the mass of oxygen by 32.00. The formula counts oxygen <em>atoms</em>, so use <i>A</i><sub>r</sub>(O) = 16.00, not <i>M</i>(<span class="chem">O2</span>).
        "2": "你把氧的質量除以 32.00。化學式數的是氧<em>原子</em>，所以要用 <i>A</i><sub>r</sub>(O) = 16.00，而不是 <i>M</i>(<span class=\"chem\">O2</span>)。",
        // EN (option D): You used the ratio of the masses (1.27 : 0.16 ≈ 8 : 1). A formula is a ratio of amounts in moles, so divide each mass by its <i>A</i><sub>r</sub> first.
        "3": "你用了質量的比 (1.27 : 0.16 ≈ 8 : 1)。化學式是物質的量（摩爾）的比，所以要先把每個質量除以它的 <i>A</i><sub>r</sub>。",
      },
    },

    // ── s1-4-q025 · short · exam · SL · Structure 1.4.4 · 3 marks
    "s1-4-q025": {
      // EN: <p>A compound contains only carbon, hydrogen and oxygen. Complete combustion of 1.50 <span class="unit">g</span> of the compound gives 3.30 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.80 <span class="unit">g</span> of <span class="chem">H2O</span>.</p><p>Determine the empirical formula of the compound. Show your working.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>
      stem: "<p>某化合物只含碳、氫和氧。1.50 <span class=\"unit\">g</span> 這種化合物完全燃燒，生成 3.30 <span class=\"unit\">g</span> <span class=\"chem\">CO2</span> 和 1.80 <span class=\"unit\">g</span> <span class=\"chem\">H2O</span>。</p><p>求出 (determine) 這種化合物的實驗式。寫出計算步驟。</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>，<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>。<i>A</i><sub>r</sub>：C = 12.01、H = 1.01、O = 16.00。</p>",
      hints: [
        // EN: All the carbon ends up in <span class="chem">CO2</span> and all the hydrogen ends up in <span class="chem">H2O</span>. Use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> for each product.
        "所有碳都變成 <span class=\"chem\">CO2</span>，所有氫都變成 <span class=\"chem\">H2O</span>。兩種生成物都用 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>。",
        // EN: Each <span class="chem">H2O</span> contains 2 H atoms, so <i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>).
        "每個 <span class=\"chem\">H2O</span> 含有 2 個 H 原子，所以 <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)。",
        // EN: The oxygen in the products comes partly from the air, so you cannot count it directly. Find the mass of O in the compound by difference: mass of compound − mass of C − mass of H.
        "生成物中的氧有一部分來自空氣，所以不能直接計算。要用減法求出化合物中 O 的質量：化合物的質量 − C 的質量 − H 的質量。",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>)<br>&nbsp;&nbsp;= <span class="frac"><span>3.30 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.07498 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>)<br>&nbsp;&nbsp;= 2 × <span class="frac"><span>1.80 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1998 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(C) = 0.07498 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.9005 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.1998 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.2018 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 1.50 <span class="unit">g</span> − 0.9005 <span class="unit">g</span> − 0.2018 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.3977 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.3977 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02485 <span class="unit">mol</span> &nbsp; (M2)</div><p>Divide each amount by the smallest (0.02485 mol):</p><div class="worked__math">C : H : O = 3.02 : 8.04 : 1.00</div><p>Empirical formula: <strong><span class="chem">C3H8O</span></strong> (M3). The ratios 3.02 and 8.04 are within experimental rounding of whole numbers, so rounding is justified here.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)<br>&nbsp;&nbsp;= <span class=\"frac\"><span>3.30 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.07498 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)<br>&nbsp;&nbsp;= 2 × <span class=\"frac\"><span>1.80 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1998 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(C) = 0.07498 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.9005 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.1998 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.2018 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 1.50 <span class=\"unit\">g</span> − 0.9005 <span class=\"unit\">g</span> − 0.2018 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.3977 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.3977 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02485 <span class=\"unit\">mol</span> &nbsp; (M2)</div><p>把每個物質的量除以最小的一個 (0.02485 mol)：</p><div class=\"worked__math\">C : H : O = 3.02 : 8.04 : 1.00</div><p>實驗式：<strong><span class=\"chem\">C3H8O</span></strong> (M3)。3.02 和 8.04 與整數的差距在實驗數據取近似值的誤差範圍內，所以這裏可以取整數。</p>",
      // EN: <p><i>n</i>(C) = 3.30 ÷ 44.01 = 0.0750 mol and <i>n</i>(H) = 2 × (1.80 ÷ 18.02) = 0.200 mol.</p><p><i>m</i>(O) = 1.50 − (0.0750 × 12.01) − (0.200 × 1.01) = 0.398 g, so <i>n</i>(O) = 0.398 ÷ 16.00 = 0.0249 mol.</p><p>C : H : O = 0.0750 : 0.200 : 0.0249 = 3 : 8 : 1. Empirical formula: <span class="chem">C3H8O</span>.</p>
      answer: "<p><i>n</i>(C) = 3.30 ÷ 44.01 = 0.0750 mol，而 <i>n</i>(H) = 2 × (1.80 ÷ 18.02) = 0.200 mol。</p><p><i>m</i>(O) = 1.50 − (0.0750 × 12.01) − (0.200 × 1.01) = 0.398 g，所以 <i>n</i>(O) = 0.398 ÷ 16.00 = 0.0249 mol。</p><p>C : H : O = 0.0750 : 0.200 : 0.0249 = 3 : 8 : 1。實驗式：<span class=\"chem\">C3H8O</span>。</p>",
      markscheme: [
        // EN: M1: n(C) = 0.0750 mol AND n(H) = 0.200 mol. (Accept masses: 0.901 g of C and 0.202 g of H.)
        "M1：n(C) = 0.0750 mol 以及 n(H) = 0.200 mol。（接受質量：C 0.901 g 和 H 0.202 g。）",
        // EN: M2: mass of O by difference = 0.398 g, OR n(O) = 0.0249 mol.
        "M2：用減法求得 O 的質量 = 0.398 g，或 n(O) = 0.0249 mol。",
        // EN: M3: C₃H₈O. (A correct final formula with no working would earn all 3 marks, but always show working so that an error is penalised only once.)
        "M3：C₃H₈O。（最後的化學式正確但沒有計算步驟，仍可得全部 3 分；但一定要寫出步驟，這樣出錯時只會被扣一次分。）",
      ],
    },

    // ── s1-4-q026 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q026": {
      // EN: <p>An oxide of phosphorus has the empirical formula <span class="chem">P2O5</span> and a molar mass of 283.88 <span class="unit">g mol-1</span>.</p><p>What is its molecular formula?</p><p>Use <i>A</i><sub>r</sub>: P = 30.97, O = 16.00.</p>
      stem: "<p>磷的一種氧化物的實驗式是 <span class=\"chem\">P2O5</span>，摩爾質量是 283.88 <span class=\"unit\">g mol-1</span>。</p><p>它的分子式是甚麼？</p><p>使用 <i>A</i><sub>r</sub>：P = 30.97、O = 16.00。</p>",
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
        "求出一個實驗式單位 <span class=\"chem\">P2O5</span> 的質量。",
        // EN: Divide the molar mass by the empirical formula mass. The result is how many empirical units make one molecule.
        "把摩爾質量除以實驗式的式量。結果就是一個分子由多少個實驗式單位組成。",
      ],
      // EN: <p>Find the mass of one empirical formula unit.</p><div class="worked__math"><i>M</i>(<span class="chem">P2O5</span>) = (2 × 30.97) + (5 × 16.00)<br>&nbsp;&nbsp;= 141.94 <span class="unit">g mol-1</span></div><div class="worked__math">Number of units = <span class="frac"><span>283.88 <span class="unit">g mol-1</span></span><span>141.94 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><div class="worked__math">Molecular formula = 2 × <span class="chem">P2O5</span><br>&nbsp;&nbsp;= <strong><span class="chem">P4O10</span></strong></div>
      solution: "<p>求出一個實驗式單位的質量。</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">P2O5</span>) = (2 × 30.97) + (5 × 16.00)<br>&nbsp;&nbsp;= 141.94 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\">單位數目 = <span class=\"frac\"><span>283.88 <span class=\"unit\">g mol-1</span></span><span>141.94 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><div class=\"worked__math\">分子式 = 2 × <span class=\"chem\">P2O5</span><br>&nbsp;&nbsp;= <strong><span class=\"chem\">P4O10</span></strong></div>",
      misconception: {
        // EN (option A): This is the empirical formula. Its mass is 141.94, which is only half of the molar mass, so the molecule contains two empirical units.
        "0": "這是實驗式。它的質量是 141.94，只有摩爾質量的一半，所以一個分子含有兩個實驗式單位。",
        // EN (option B): You doubled only the oxygen. Every subscript in the empirical formula must be multiplied by the same whole number.
        "1": "你只把氧加倍。實驗式中的每個下標都要乘以同一個整數。",
        // EN (option C): You doubled only the phosphorus. Every subscript in the empirical formula must be multiplied by the same whole number.
        "2": "你只把磷加倍。實驗式中的每個下標都要乘以同一個整數。",
      },
    },

    // ── s1-4-q027 · numeric · exam · SL · Structure 1.4.4 · 3 marks
    "s1-4-q027": {
      // EN: <p>7.15 <span class="unit">g</span> of hydrated sodium carbonate, <span class="chem">Na2CO3</span>·<i>x</i><span class="chem">H2O</span>, is heated to constant mass. The anhydrous <span class="chem">Na2CO3</span> left has a mass of 2.65 <span class="unit">g</span>.</p><p>Determine the whole-number value of <i>x</i>.</p><p><i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>把 7.15 <span class=\"unit\">g</span> 水合碳酸鈉 <span class=\"chem\">Na2CO3</span>·<i>x</i><span class=\"chem\">H2O</span> 加熱至質量不變。剩下的無水 <span class=\"chem\">Na2CO3</span> 的質量是 2.65 <span class=\"unit\">g</span>。</p><p>求出 (determine) <i>x</i> 的整數值。</p><p><i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span>，<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: This is an empirical formula problem with two "building blocks": <span class="chem">Na2CO3</span> and <span class="chem">H2O</span>. The mass lost on heating is the mass of water.
        "這是一條實驗式的題目，只是有兩塊「積木」：<span class=\"chem\">Na2CO3</span> 和 <span class=\"chem\">H2O</span>。加熱時失去的質量就是水的質量。",
        // EN: Find the amount of each with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>. Use 2.65 g for <span class="chem">Na2CO3</span> and the mass lost for <span class="chem">H2O</span>.
        "用 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> 求出兩者的物質的量。<span class=\"chem\">Na2CO3</span> 用 2.65 g，<span class=\"chem\">H2O</span> 用失去的質量。",
        // EN: <i>x</i> = <i>n</i>(<span class="chem">H2O</span>) ÷ <i>n</i>(<span class="chem">Na2CO3</span>).
        "<i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">Na2CO3</span>)。",
      ],
      // EN: <div class="worked__math"><i>m</i>(<span class="chem">H2O</span>) = 7.15 <span class="unit">g</span> − 2.65 <span class="unit">g</span><br>&nbsp;&nbsp;= 4.50 <span class="unit">g</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">Na2CO3</span>) = <span class="frac"><span>2.65 <span class="unit">g</span></span><span>105.99 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02500 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = <span class="frac"><span>4.50 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2497 <span class="unit">mol</span> &nbsp; (M2)</div><div class="worked__math"><i>x</i> = <span class="frac"><span>0.2497 <span class="unit">mol</span></span><span>0.02500 <span class="unit">mol</span></span></span><br>&nbsp;&nbsp;= 9.99 &nbsp; (M3)</div><p>To the nearest whole number, <strong><i>x</i> = 10</strong>.</p><p>Named slips: dividing the masses (4.50 ÷ 2.65 = 1.7) skips the conversion to moles. Using 7.15 g as the mass of <span class="chem">Na2CO3</span> gives 3.7, because 7.15 g still includes the water.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(<span class=\"chem\">H2O</span>) = 7.15 <span class=\"unit\">g</span> − 2.65 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 4.50 <span class=\"unit\">g</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">Na2CO3</span>) = <span class=\"frac\"><span>2.65 <span class=\"unit\">g</span></span><span>105.99 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02500 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = <span class=\"frac\"><span>4.50 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2497 <span class=\"unit\">mol</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>x</i> = <span class=\"frac\"><span>0.2497 <span class=\"unit\">mol</span></span><span>0.02500 <span class=\"unit\">mol</span></span></span><br>&nbsp;&nbsp;= 9.99 &nbsp; (M3)</div><p>取至最接近的整數，<strong><i>x</i> = 10</strong>。</p><p>常見失誤：直接把兩個質量相除 (4.50 ÷ 2.65 = 1.7)，是漏了換算成摩爾這一步。把 7.15 g 當作 <span class=\"chem\">Na2CO3</span> 的質量會得出 3.7，因為 7.15 g 還包含了水。</p>",
    },

    // ── s1-4-q028 · short · exam · SL · Structure 1.4.4 · 2 marks
    "s1-4-q028": {
      // EN: <p>A student heats a hydrated salt in a crucible to find the amount of water of crystallization. The method says: "heat to constant mass".</p><p>Describe what "heat to constant mass" means in practice, and explain why it is done.</p>
      stem: "<p>一名學生在坩堝中加熱一種水合鹽，以求出結晶水的物質的量。實驗方法寫着：「加熱至質量不變」(heat to constant mass)。</p><p>描述 (describe)「加熱至質量不變」在實際操作中是甚麼意思，並解釋 (explain) 為甚麼要這樣做。</p>",
      hints: [
        // EN: How can you tell, using only a balance, that nothing more is leaving the crucible?
        "只用天平，你怎樣知道再沒有東西離開坩堝？",
        // EN: Think about what would happen to your value for the water if some water was still in the solid.
        "想一想：如果固體中還留有一些水，你求得的水的數值會怎樣？",
      ],
      // EN: <p>One weighing cannot tell you whether water is still being lost. If the mass after a second heating is the same as after the first, no more water is leaving. If you stop too early, the mass lost is too small, so the calculated amount of water is too low.</p>
      solution: "<p>只稱量一次，無法知道水是否仍在流失。如果第二次加熱後的質量和第一次加熱後相同，就表示再沒有水離開。如果太早停止，失去的質量會偏小，計算出來的水的物質的量就會偏低。</p>",
      // EN: <p>Heat, cool and weigh the crucible, then repeat the heating and weighing until two weighings in a row give the same mass. This shows that all the water of crystallization has been removed, so the mass lost is the full mass of water.</p>
      answer: "<p>把坩堝加熱、冷卻，然後稱量；再重複加熱和稱量，直至連續兩次稱量得到相同的質量。這表示所有結晶水都已除去，所以失去的質量就是水的全部質量。</p>",
      markscheme: [
        // EN: Heat, (cool,) weigh and repeat until the mass no longer changes / two consecutive readings are the same.
        "加熱、（冷卻、）稱量，並重複，直至質量不再改變／連續兩次讀數相同。",
        // EN: To make sure that all of the water has been removed / the dehydration is complete. (Accept: otherwise the mass of water, and so the value of x, would be too low.)
        "確保所有水都已除去／脫水完全。（接受：否則水的質量會偏低，x 的數值也會偏低。）",
      ],
    },

    // ── s1-4-q029 · short · challenge · SL · Structure 1.4.4 · 4 marks
    "s1-4-q029": {
      // EN: <p>A colourless liquid contains only carbon, hydrogen and oxygen. Complete combustion of 1.35 <span class="unit">g</span> of the liquid gives 2.64 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.35 <span class="unit">g</span> of <span class="chem">H2O</span>. Its molar mass is 90.14 <span class="unit">g mol-1</span>.</p><p>Determine the empirical formula and the molecular formula of the liquid. Show your working.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>
      stem: "<p>某無色液體只含碳、氫和氧。1.35 <span class=\"unit\">g</span> 這種液體完全燃燒，生成 2.64 <span class=\"unit\">g</span> <span class=\"chem\">CO2</span> 和 1.35 <span class=\"unit\">g</span> <span class=\"chem\">H2O</span>。它的摩爾質量是 90.14 <span class=\"unit\">g mol-1</span>。</p><p>求出 (determine) 這種液體的實驗式和分子式。寫出計算步驟。</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>，<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>。<i>A</i><sub>r</sub>：C = 12.01、H = 1.01、O = 16.00。</p>",
      hints: [
        // EN: Split the task: first the empirical formula from the combustion data, then the molecular formula from the molar mass.
        "把題目分成兩部分：先用燃燒數據求實驗式，再用摩爾質量求分子式。",
        // EN: <i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>), <i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>). Find the mass of O by difference.
        "<i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)，<i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)。用減法求出 O 的質量。",
        // EN: Compare the molar mass with the mass of one empirical formula unit. Multiply every subscript by the ratio.
        "把摩爾質量和一個實驗式單位的質量比較。把每個下標都乘以這個比值。",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = <span class="frac"><span>2.64 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × <span class="frac"><span>1.35 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1498 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(C) = 0.05999 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.7204 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.1498 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.1513 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 1.35 <span class="unit">g</span> − 0.7204 <span class="unit">g</span> − 0.1513 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.4782 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.4782 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02989 <span class="unit">mol</span> &nbsp; (M2)</div><p>Divide each amount by the smallest (0.02989 mol):</p><div class="worked__math">C : H : O = 2.01 : 5.01 : 1.00</div><p>Empirical formula: <strong><span class="chem">C2H5O</span></strong> (M3). Now compare its mass with the molar mass.</p><div class="worked__math"><i>M</i>(<span class="chem">C2H5O</span>) = (2 × 12.01) + (5 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 16.00<br>&nbsp;&nbsp;= 45.07 <span class="unit">g mol-1</span></div><div class="worked__math">Number of units = <span class="frac"><span>90.14 <span class="unit">g mol-1</span></span><span>45.07 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><p>Molecular formula = 2 × <span class="chem">C2H5O</span> = <strong><span class="chem">C4H10O2</span></strong> (M4).</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = <span class=\"frac\"><span>2.64 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × <span class=\"frac\"><span>1.35 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1498 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(C) = 0.05999 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.7204 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.1498 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.1513 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 1.35 <span class=\"unit\">g</span> − 0.7204 <span class=\"unit\">g</span> − 0.1513 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.4782 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.4782 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02989 <span class=\"unit\">mol</span> &nbsp; (M2)</div><p>把每個物質的量除以最小的一個 (0.02989 mol)：</p><div class=\"worked__math\">C : H : O = 2.01 : 5.01 : 1.00</div><p>實驗式：<strong><span class=\"chem\">C2H5O</span></strong> (M3)。現在把它的質量和摩爾質量比較。</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">C2H5O</span>) = (2 × 12.01) + (5 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 16.00<br>&nbsp;&nbsp;= 45.07 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\">單位數目 = <span class=\"frac\"><span>90.14 <span class=\"unit\">g mol-1</span></span><span>45.07 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><p>分子式 = 2 × <span class=\"chem\">C2H5O</span> = <strong><span class=\"chem\">C4H10O2</span></strong> (M4)。</p>",
      // EN: <p><i>n</i>(C) = 2.64 ÷ 44.01 = 0.0600 mol; <i>n</i>(H) = 2 × (1.35 ÷ 18.02) = 0.150 mol.</p><p><i>m</i>(O) = 1.35 − (0.0600 × 12.01) − (0.150 × 1.01) = 0.478 g; <i>n</i>(O) = 0.0299 mol.</p><p>C : H : O = 2 : 5 : 1, so the empirical formula is <span class="chem">C2H5O</span> (mass 45.07). 90.14 ÷ 45.07 = 2, so the molecular formula is <span class="chem">C4H10O2</span>.</p>
      answer: "<p><i>n</i>(C) = 2.64 ÷ 44.01 = 0.0600 mol；<i>n</i>(H) = 2 × (1.35 ÷ 18.02) = 0.150 mol。</p><p><i>m</i>(O) = 1.35 − (0.0600 × 12.01) − (0.150 × 1.01) = 0.478 g；<i>n</i>(O) = 0.0299 mol。</p><p>C : H : O = 2 : 5 : 1，所以實驗式是 <span class=\"chem\">C2H5O</span>（質量 45.07）。90.14 ÷ 45.07 = 2，所以分子式是 <span class=\"chem\">C4H10O2</span>。</p>",
      markscheme: [
        // EN: M1: n(C) = 0.0600 mol AND n(H) = 0.150 mol. (Accept masses: 0.720 g of C and 0.151 g of H.)
        "M1：n(C) = 0.0600 mol 以及 n(H) = 0.150 mol。（接受質量：C 0.720 g 和 H 0.151 g。）",
        // EN: M2: mass of O by difference = 0.478 g, OR n(O) = 0.0299 mol.
        "M2：用減法求得 O 的質量 = 0.478 g，或 n(O) = 0.0299 mol。",
        // EN: M3: empirical formula C₂H₅O.
        "M3：實驗式 C₂H₅O。",
        // EN: M4: 90.14 ÷ 45.07 = 2, so molecular formula C₄H₁₀O₂. (Allow error carried forward from your empirical formula.)
        "M4：90.14 ÷ 45.07 = 2，所以分子式是 C₄H₁₀O₂。（接受由你的實驗式帶來的承前錯誤，即 error carried forward。）",
      ],
    },

    // ── s1-4-q030 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "s1-4-q030": {
      // EN: <p>An oxide of iron contains 72.4 % iron and 27.6 % oxygen by mass. A student works out its empirical formula.</p><ol><li>Fe: 72.4 ÷ 55.85 = 1.296 &nbsp; O: 27.6 ÷ 16.00 = 1.725</li><li>Divide by the smallest: Fe 1.296 ÷ 1.296 = 1.00 &nbsp; O 1.725 ÷ 1.296 = 1.33</li><li>Round to whole numbers: Fe = 1, O = 1</li><li>Empirical formula: <span class="chem">FeO</span></li></ol><p>Which statement about this working is correct?</p>
      stem: "<p>鐵的一種氧化物按質量計含有 72.4 % 鐵和 27.6 % 氧。一名學生計算它的實驗式。</p><ol><li>Fe：72.4 ÷ 55.85 = 1.296 &nbsp; O：27.6 ÷ 16.00 = 1.725</li><li>除以最小值：Fe 1.296 ÷ 1.296 = 1.00 &nbsp; O 1.725 ÷ 1.296 = 1.33</li><li>取整數：Fe = 1，O = 1</li><li>實驗式：<span class=\"chem\">FeO</span></li></ol><p>以下哪一項關於這個計算的敘述是正確的？</p>",
      options: [
        // EN: Line 1 is wrong: the percentages should be divided by the atomic numbers.
        "第 1 行錯誤：百分率應該除以原子序。",
        // EN: Line 2 is wrong: the student should divide by the largest value.
        "第 2 行錯誤：學生應該除以最大值。",
        // EN: Line 3 is wrong: 1.33 is too far from a whole number to round.
        "第 3 行錯誤：1.33 離整數太遠，不能四捨五入。",
        // EN: The working is correct and the formula is <span class="chem">FeO</span>.
        "計算正確，化學式是 <span class=\"chem\">FeO</span>。",
      ],
      hints: [
        // EN: Only round when a value is very close to a whole number (for example 1.98 or 3.02).
        "只有在數值非常接近整數時（例如 1.98 或 3.02）才可以四捨五入。",
        // EN: 1.33 is a recognizable fraction: 1⅓. What can you multiply by to clear a third?
        "1.33 是一個認得出的分數：1⅓。乘以甚麼數可以消去三分之一？",
      ],
      // EN: <p>Lines 1 and 2 are correct. The error is in line 3. A ratio of 1 : 1.33 must be multiplied up, not rounded.</p><div class="worked__math">Fe : O = 1.00 : 1.33</div><div class="worked__math">× 3: Fe : O = 3.00 : 3.99 ≈ 3 : 4</div><p>The empirical formula is <strong><span class="chem">Fe3O4</span></strong>. Look out for .5 (× 2), .33 or .67 (× 3) and .25 or .75 (× 4).</p>
      solution: "<p>第 1 和第 2 行都正確。錯誤在第 3 行。1 : 1.33 這個比要乘大，不能四捨五入。</p><div class=\"worked__math\">Fe : O = 1.00 : 1.33</div><div class=\"worked__math\">× 3：Fe : O = 3.00 : 3.99 ≈ 3 : 4</div><p>實驗式是 <strong><span class=\"chem\">Fe3O4</span></strong>。留意這些小數：.5（× 2）、.33 或 .67（× 3）、.25 或 .75（× 4）。</p>",
      misconception: {
        // EN (option A): Dividing by <i>A</i><sub>r</sub> is right. It converts mass into amount in moles. Atomic number counts protons and is not used here.
        "0": "除以 <i>A</i><sub>r</sub> 是對的，這樣可以把質量換算成物質的量（摩爾）。原子序是質子的數目，這裏用不着。",
        // EN (option B): Dividing by the smallest value is the standard method. It sets the smallest amount to 1 so that the other values are easy to compare.
        "1": "除以最小值是標準做法。這樣最小的物質的量變成 1，其他數值就容易比較。",
        // EN (option D): Check the last step. 1.33 is one and a third, not about 1. <span class="chem">FeO</span> would contain 77.7 % iron, which does not match the data.
        "3": "檢查最後一步。1.33 是一又三分之一，不是大約 1。<span class=\"chem\">FeO</span> 會含有 77.7 % 鐵，與數據不符。",
      },
    },

    // ── s1-4-q031 · numeric · challenge · SL · Structure 1.4.4 · 3 marks
    "s1-4-q031": {
      // EN: <p>A metal M forms a chloride with the formula <span class="chem">MCl2</span>. The chloride contains 74.47 % chlorine by mass.</p><p>Calculate the relative atomic mass of M. Give your answer to 3 significant figures.</p><p><i>A</i><sub>r</sub>(Cl) = 35.45</p>
      stem: "<p>金屬 M 生成一種氯化物，化學式是 <span class=\"chem\">MCl2</span>。這種氯化物按質量計含有 74.47 % 氯。</p><p>計算 (calculate) M 的相對原子質量。答案取至 3 位有效數字。</p><p><i>A</i><sub>r</sub>(Cl) = 35.45</p>",
      hints: [
        // EN: This is percentage composition in reverse. You know the formula and the percentage, and you want a molar mass.
        "這是把質量百分組成倒過來做。你已知化學式和百分率，要求的是摩爾質量。",
        // EN: In one mole of <span class="chem">MCl2</span> there are 2 × 35.45 = 70.90 g of chlorine. That 70.90 g is 74.47 % of the molar mass.
        "一摩爾 <span class=\"chem\">MCl2</span> 含有 2 × 35.45 = 70.90 g 氯。這 70.90 g 佔摩爾質量的 74.47 %。",
        // EN: Molar mass = 70.90 ÷ 0.7447. Then subtract the chlorine to leave M.
        "摩爾質量 = 70.90 ÷ 0.7447。然後減去氯的部分，剩下的就是 M。",
      ],
      // EN: <p>One mole of <span class="chem">MCl2</span> contains 2 mol of Cl.</p><div class="worked__math"><i>m</i>(Cl) = 2 × 35.45 <span class="unit">g</span><br>&nbsp;&nbsp;= 70.90 <span class="unit">g</span> &nbsp; (M1)</div><div class="worked__math"><i>M</i>(<span class="chem">MCl2</span>) = <span class="frac"><span>70.90 <span class="unit">g mol-1</span></span><span>0.7447</span></span><br>&nbsp;&nbsp;= 95.21 <span class="unit">g mol-1</span> &nbsp; (M2)</div><div class="worked__math"><i>A</i><sub>r</sub>(M) = 95.21 − 70.90<br>&nbsp;&nbsp;= 24.31<br>&nbsp;&nbsp;= <strong>24.3</strong> (no units) &nbsp; (M3)</div><p>The data booklet value for magnesium is 24.31, so M is magnesium. Named slips: 12.2 means you used one Cl instead of two. 95.2 means you did not subtract the chlorine.</p>
      solution: "<p>一摩爾 <span class=\"chem\">MCl2</span> 含有 2 mol Cl。</p><div class=\"worked__math\"><i>m</i>(Cl) = 2 × 35.45 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 70.90 <span class=\"unit\">g</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MCl2</span>) = <span class=\"frac\"><span>70.90 <span class=\"unit\">g mol-1</span></span><span>0.7447</span></span><br>&nbsp;&nbsp;= 95.21 <span class=\"unit\">g mol-1</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>A</i><sub>r</sub>(M) = 95.21 − 70.90<br>&nbsp;&nbsp;= 24.31<br>&nbsp;&nbsp;= <strong>24.3</strong>（沒有單位） &nbsp; (M3)</div><p>數據手冊中鎂的數值是 24.31，所以 M 是鎂。常見失誤：得出 12.2，表示你只用了一個 Cl，而不是兩個。得出 95.2，表示你沒有減去氯的部分。</p>",
    },

    // ── s1-4-q032 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "s1-4-q032": {
      // EN: <p>0.920 <span class="unit">g</span> of a compound of carbon, hydrogen and oxygen burns completely to give 1.76 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.08 <span class="unit">g</span> of <span class="chem">H2O</span>. A student starts to find the empirical formula.</p><ol><li><i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>) = 1.76 ÷ 44.01 = 0.0400 <span class="unit">mol</span></li><li><i>n</i>(H) = <i>n</i>(<span class="chem">H2O</span>) = 1.08 ÷ 18.02 = 0.0599 <span class="unit">mol</span></li><li><i>m</i>(O) = 0.920 − (0.0400 × 12.01) − (0.0599 × 1.01) = 0.379 <span class="unit">g</span></li><li><i>n</i>(O) = 0.379 ÷ 16.00 = 0.0237 <span class="unit">mol</span></li></ol><p>Which line contains the first error?</p>
      stem: "<p>0.920 <span class=\"unit\">g</span> 某種由碳、氫和氧組成的化合物完全燃燒，生成 1.76 <span class=\"unit\">g</span> <span class=\"chem\">CO2</span> 和 1.08 <span class=\"unit\">g</span> <span class=\"chem\">H2O</span>。一名學生開始求它的實驗式。</p><ol><li><i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) = 1.76 ÷ 44.01 = 0.0400 <span class=\"unit\">mol</span></li><li><i>n</i>(H) = <i>n</i>(<span class=\"chem\">H2O</span>) = 1.08 ÷ 18.02 = 0.0599 <span class=\"unit\">mol</span></li><li><i>m</i>(O) = 0.920 − (0.0400 × 12.01) − (0.0599 × 1.01) = 0.379 <span class=\"unit\">g</span></li><li><i>n</i>(O) = 0.379 ÷ 16.00 = 0.0237 <span class=\"unit\">mol</span></li></ol><p>第一個錯誤出現在哪一行？</p>",
      options: [
        // EN: Line 1
        "第 1 行",
        // EN: Line 2
        "第 2 行",
        // EN: Line 3
        "第 3 行",
        // EN: Line 4
        "第 4 行",
      ],
      hints: [
        // EN: Check each "<i>n</i>(element) = <i>n</i>(product)" step against the formula of the product.
        "每一個「<i>n</i>(元素) = <i>n</i>(生成物)」的步驟，都要對照生成物的化學式來檢查。",
        // EN: How many hydrogen atoms are in one molecule of <span class="chem">H2O</span>?
        "一個 <span class=\"chem\">H2O</span> 分子有多少個氫原子？",
      ],
      // EN: <p>The first error is in line 2. Each <span class="chem">H2O</span> molecule contains 2 hydrogen atoms.</p><div class="worked__math"><i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>)<br>&nbsp;&nbsp;= 2 × 0.0599 <span class="unit">mol</span><br>&nbsp;&nbsp;= 0.120 <span class="unit">mol</span></div><div class="worked__math"><i>m</i>(C) = 0.0400 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.480 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.120 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.121 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 0.920 <span class="unit">g</span> − 0.480 <span class="unit">g</span> − 0.121 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.319 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.319 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0199 <span class="unit">mol</span></div><div class="worked__math">C : H : O = 0.0400 : 0.120 : 0.0199<br>&nbsp;&nbsp;= 2 : 6 : 1</div><p>The correct empirical formula is <span class="chem">C2H6O</span>. In an exam, lines 3 and 4 would still earn credit as "error carried forward", which is why showing working matters.</p>
      solution: "<p>第一個錯誤在第 2 行。每個 <span class=\"chem\">H2O</span> 分子含有 2 個氫原子。</p><div class=\"worked__math\"><i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)<br>&nbsp;&nbsp;= 2 × 0.0599 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 0.120 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>m</i>(C) = 0.0400 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.480 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.120 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.121 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 0.920 <span class=\"unit\">g</span> − 0.480 <span class=\"unit\">g</span> − 0.121 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.319 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.319 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0199 <span class=\"unit\">mol</span></div><div class=\"worked__math\">C : H : O = 0.0400 : 0.120 : 0.0199<br>&nbsp;&nbsp;= 2 : 6 : 1</div><p>正確的實驗式是 <span class=\"chem\">C2H6O</span>。在考試中，第 3 和第 4 行仍然可以按「承前錯誤」(error carried forward) 得分，所以寫出計算步驟很重要。</p>",
      misconception: {
        // EN (option A): Line 1 is correct. Each <span class="chem">CO2</span> molecule contains one carbon atom, so <i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>).
        "0": "第 1 行正確。每個 <span class=\"chem\">CO2</span> 分子含有一個碳原子，所以 <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)。",
        // EN (option C): The method in line 3 is correct: oxygen is found by difference. Its value is wrong only because it uses a wrong number from an earlier line. Find where that number came from.
        "2": "第 3 行的方法正確：氧是用減法求出的。它的數值不對，只是因為用了前面某一行的錯誤數字。找出那個數字是從哪裏來的。",
        // EN (option D): The method in line 4 is correct: <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub> with 16.00 for oxygen atoms. The wrong value was carried forward from an earlier line.
        "3": "第 4 行的方法正確：<i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub>，氧原子用 16.00。錯誤的數值是從前面某一行沿用下來的。",
      },
    },

    // ── s1-4-q033 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q033": {
      // EN: <p>0.0500 <span class="unit">mol</span> of sodium chloride is dissolved in water and the solution is made up to 250 <span class="unit">cm3</span>.</p><p>Calculate the concentration of the solution, in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>把 0.0500 <span class=\"unit\">mol</span> 氯化鈉溶於水，再把溶液加水至 250 <span class=\"unit\">cm3</span>。</p><p>計算 (calculate) 溶液的濃度，以 <span class=\"unit\">mol dm-3</span> 表示。答案取至 3 位有效數字。</p>",
      hints: [
        // EN: The data booklet gives <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>. Rearranged: <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span>.
        "數據手冊給出 <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span>。重排後：<span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span>。",
        // EN: The volume must be in <span class="unit">dm3</span>. To convert <span class="unit">cm3</span> to <span class="unit">dm3</span>, divide by 1000: 250 <span class="unit">cm3</span> = 0.250 <span class="unit">dm3</span>.
        "體積一定要以 <span class=\"unit\">dm3</span> 表示。由 <span class=\"unit\">cm3</span> 換算成 <span class=\"unit\">dm3</span>，要除以 1000：250 <span class=\"unit\">cm3</span> = 0.250 <span class=\"unit\">dm3</span>。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 250 <span class="unit">cm3</span> ÷ 1000 = 0.250 <span class="unit">dm3</span></div><div class="worked__math"><i>C</i> = <span class="frac"><span><i>n</i></span><span><i>V</i></span></span> = <span class="frac"><span>0.0500 <span class="unit">mol</span></span><span>0.250 <span class="unit">dm3</span></span></span></div><div class="worked__math"><i>C</i> = <strong>0.200 <span class="unit">mol dm-3</span></strong></div><p>Named slips: 0.000200 means you left the volume in <span class="unit">cm3</span>. 0.0125 means you multiplied by the volume instead of dividing.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 250 <span class=\"unit\">cm3</span> ÷ 1000 = 0.250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>C</i> = <span class=\"frac\"><span><i>n</i></span><span><i>V</i></span></span> = <span class=\"frac\"><span>0.0500 <span class=\"unit\">mol</span></span><span>0.250 <span class=\"unit\">dm3</span></span></span></div><div class=\"worked__math\"><i>C</i> = <strong>0.200 <span class=\"unit\">mol dm-3</span></strong></div><p>常見失誤：得出 0.000200，表示你沒有把體積由 <span class=\"unit\">cm3</span> 換算過來。得出 0.0125，表示你乘以體積，而不是除以體積。</p>",
    },

    // ── s1-4-q034 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q034": {
      // EN: <p>A bottle is labelled <span class="mono">[NaOH] = 0.10</span>. What do the square brackets tell you?</p>
      stem: "<p>一個瓶子的標籤寫着 <span class=\"mono\">[NaOH] = 0.10</span>。方括號告訴你甚麼？</p>",
      options: [
        // EN: The bottle contains 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span>.
        "瓶內有 0.10 <span class=\"unit\">mol</span> <span class=\"chem\">NaOH</span>。",
        // EN: The solution contains 0.10 <span class="unit">g</span> of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.
        "每 <span class=\"unit\">dm3</span> 溶液含有 0.10 <span class=\"unit\">g</span> <span class=\"chem\">NaOH</span>。",
        // EN: The solution contains 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.
        "每 <span class=\"unit\">dm3</span> 溶液含有 0.10 <span class=\"unit\">mol</span> <span class=\"chem\">NaOH</span>。",
        // EN: 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span> was added to exactly 1 <span class="unit">dm3</span> of water.
        "把 0.10 <span class=\"unit\">mol</span> <span class=\"chem\">NaOH</span> 加進剛好 1 <span class=\"unit\">dm3</span> 的水中。",
      ],
      hints: [
        // EN: Square brackets around a formula mean "molar concentration of".
        "化學式外面加上方括號，意思是「……的摩爾濃度」。",
        // EN: Molar concentration = amount of solute ÷ volume of <em>solution</em>.
        "摩爾濃度 = 溶質的物質的量 ÷ <em>溶液</em>的體積。",
      ],
      // EN: <p>[NaOH] means the molar concentration of sodium hydroxide, in <span class="unit">mol dm-3</span>. So there is 0.10 mol of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.</p>
      solution: "<p>[NaOH] 表示氫氧化鈉的摩爾濃度，單位是 <span class=\"unit\">mol dm-3</span>。所以每 <span class=\"unit\">dm3</span> 溶液含有 0.10 mol <span class=\"chem\">NaOH</span>。</p>",
      misconception: {
        // EN (option A): Square brackets show a concentration, not an amount. The amount in the bottle also depends on the volume of solution.
        "0": "方括號表示濃度，不是物質的量。瓶內的物質的量還要看溶液的體積。",
        // EN (option B): Square brackets mean <em>molar</em> concentration, in <span class="unit">mol dm-3</span>. A mass concentration in <span class="unit">g dm-3</span> is written without square brackets.
        "1": "方括號表示<em>摩爾</em>濃度，單位是 <span class=\"unit\">mol dm-3</span>。以 <span class=\"unit\">g dm-3</span> 表示的質量濃度不用方括號。",
        // EN (option D): Concentration is defined by the volume of the final <em>solution</em>, not the volume of water added. Adding solute to 1 <span class="unit">dm3</span> of water does not give exactly 1 <span class="unit">dm3</span> of solution.
        "3": "濃度是按最後<em>溶液</em>的體積來定義的，不是按加入的水的體積。把溶質加進 1 <span class=\"unit\">dm3</span> 水中，得到的溶液不會剛好是 1 <span class=\"unit\">dm3</span>。",
      },
    },

    // ── s1-4-q035 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q035": {
      // EN: <p>Calculate the amount, in <span class="unit">mol</span>, of <span class="chem">HCl</span> in 25.0 <span class="unit">cm3</span> of 0.120 <span class="unit">mol dm-3</span> hydrochloric acid. Give your answer to 3 significant figures.</p>
      stem: "<p>計算 (calculate) 25.0 <span class=\"unit\">cm3</span> 的 0.120 <span class=\"unit\">mol dm-3</span> 氫氯酸中 <span class=\"chem\">HCl</span> 的物質的量，以 <span class=\"unit\">mol</span> 表示。答案取至 3 位有效數字。</p>",
      hints: [
        // EN: Use <span class="mono"><i>n</i> = <i>C</i><i>V</i></span> from the data booklet.
        "使用數據手冊中的 <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span>。",
        // EN: Convert the volume first: 25.0 <span class="unit">cm3</span> ÷ 1000 = 0.0250 <span class="unit">dm3</span>.
        "先換算體積：25.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.0250 <span class=\"unit\">dm3</span>。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 25.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.0250 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.120 <span class="unit">mol dm-3</span> × 0.0250 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = 0.00300 <span class="unit">mol</span><br>&nbsp;&nbsp;= <strong>3.00 × 10<sup>−3</sup> <span class="unit">mol</span></strong></div><p>Named slip: 3.00 mol means you did not convert <span class="unit">cm3</span> to <span class="unit">dm3</span>. A small flask of dilute acid cannot hold 3 mol of HCl.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 25.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.120 <span class=\"unit\">mol dm-3</span> × 0.0250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = 0.00300 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= <strong>3.00 × 10<sup>−3</sup> <span class=\"unit\">mol</span></strong></div><p>常見失誤：得出 3.00 mol，表示你沒有把 <span class=\"unit\">cm3</span> 換算成 <span class=\"unit\">dm3</span>。一小瓶稀酸不可能含有 3 mol HCl。</p>",
    },

    // ── s1-4-q036 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "s1-4-q036": {
      // EN: <p>A student needs 100.0 <span class="unit">cm3</span> of a 0.2000 <span class="unit">mol dm-3</span> standard solution of sodium carbonate, <span class="chem">Na2CO3</span>.</p><p>Calculate the mass of anhydrous sodium carbonate needed, in <span class="unit">g</span>. Give your answer to 4 significant figures.</p><p><i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span></p>
      stem: "<p>一名學生需要 100.0 <span class=\"unit\">cm3</span> 的 0.2000 <span class=\"unit\">mol dm-3</span> 碳酸鈉 <span class=\"chem\">Na2CO3</span> 標準溶液。</p><p>計算 (calculate) 所需無水碳酸鈉的質量，以 <span class=\"unit\">g</span> 表示。答案取至 4 位有效數字。</p><p><i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Two relationships, one after the other: <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>, then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>.
        "先後用兩條關係式：先 <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span>，再 <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span>。",
        // EN: Convert the volume: 100.0 <span class="unit">cm3</span> = 0.1000 <span class="unit">dm3</span>.
        "換算體積：100.0 <span class=\"unit\">cm3</span> = 0.1000 <span class=\"unit\">dm3</span>。",
        // EN: The data have 4 significant figures, so give 4 in your answer.
        "數據有 4 位有效數字，所以答案也要寫 4 位。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 100.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.1000 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.2000 <span class="unit">mol dm-3</span> × 0.1000 <span class="unit">dm3</span><br>&nbsp;&nbsp;= 0.02000 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i> = <i>n</i> × <i>M</i><br>&nbsp;&nbsp;= 0.02000 <span class="unit">mol</span> × 105.99 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 2.1198 <span class="unit">g</span><br>&nbsp;&nbsp;= <strong>2.120 <span class="unit">g</span></strong> &nbsp; (M2)</div><p>Named slips: 21.20 g is the mass for a whole <span class="unit">dm3</span> (volume not used). 2120 g means the volume was left in <span class="unit">cm3</span>.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 100.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.1000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">mol dm-3</span> × 0.1000 <span class=\"unit\">dm3</span><br>&nbsp;&nbsp;= 0.02000 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i> = <i>n</i> × <i>M</i><br>&nbsp;&nbsp;= 0.02000 <span class=\"unit\">mol</span> × 105.99 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 2.1198 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= <strong>2.120 <span class=\"unit\">g</span></strong> &nbsp; (M2)</div><p>常見失誤：21.20 g 是配製整整一 <span class=\"unit\">dm3</span> 所需的質量（沒有用體積）。得出 2120 g，表示體積沒有由 <span class=\"unit\">cm3</span> 換算過來。</p>",
    },

    // ── s1-4-q037 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q037": {
      // EN: <p>A solution of hydrochloric acid has a concentration of 7.30 <span class="unit">g dm-3</span>.</p><p>Calculate its concentration in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">HCl</span>) = 36.46 <span class="unit">g mol-1</span></p>
      stem: "<p>一種氫氯酸溶液的濃度是 7.30 <span class=\"unit\">g dm-3</span>。</p><p>計算 (calculate) 它以 <span class=\"unit\">mol dm-3</span> 表示的濃度。答案取至 3 位有效數字。</p><p><i>M</i>(<span class=\"chem\">HCl</span>) = 36.46 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Both units are "per <span class="unit">dm3</span>". Only the top of the unit changes: grams become moles.
        "兩個單位都是「每 <span class=\"unit\">dm3</span>」。只有單位的上半部分改變：克變成摩爾。",
        // EN: Grams to moles: divide by the molar mass, as in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "由克換算成摩爾：除以摩爾質量，和 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> 一樣。",
      ],
      // EN: <p>Concentration in <span class="unit">mol dm-3</span> = concentration in <span class="unit">g dm-3</span> ÷ molar mass.</p><div class="worked__math"><i>C</i> = <span class="frac"><span>7.30 <span class="unit">g dm-3</span></span><span>36.46 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2002 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.200 <span class="unit">mol dm-3</span></strong></div><p>Named slip: multiplying gives 266. One <span class="unit">dm3</span> holding 7.30 g of a substance with <i>M</i> ≈ 36 must hold much less than one mole.</p>
      solution: "<p>以 <span class=\"unit\">mol dm-3</span> 表示的濃度 = 以 <span class=\"unit\">g dm-3</span> 表示的濃度 ÷ 摩爾質量。</p><div class=\"worked__math\"><i>C</i> = <span class=\"frac\"><span>7.30 <span class=\"unit\">g dm-3</span></span><span>36.46 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2002 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.200 <span class=\"unit\">mol dm-3</span></strong></div><p>常見失誤：用了乘法會得出 266。一 <span class=\"unit\">dm3</span> 溶液只含 7.30 g 物質，而這種物質的 <i>M</i> ≈ 36，所以所含的一定遠少於一摩爾。</p>",
    },

    // ── s1-4-q038 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q038": {
      // EN: <p>A solution of potassium manganate(VII) has [<span class="chem">KMnO4</span>] = 0.0250 <span class="unit">mol dm-3</span>.</p><p>Calculate its concentration in <span class="unit">g dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">KMnO4</span>) = 158.04 <span class="unit">g mol-1</span></p>
      stem: "<p>一種錳(VII)酸鉀 (potassium manganate(VII)) 溶液的 [<span class=\"chem\">KMnO4</span>] = 0.0250 <span class=\"unit\">mol dm-3</span>。</p><p>計算 (calculate) 它以 <span class=\"unit\">g dm-3</span> 表示的濃度。答案取至 3 位有效數字。</p><p><i>M</i>(<span class=\"chem\">KMnO4</span>) = 158.04 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: You are changing moles into grams, in every <span class="unit">dm3</span>. Which way does <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> go?
        "你要把每 <span class=\"unit\">dm3</span> 中的摩爾換算成克。<span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> 是向哪個方向換算的？",
        // EN: Multiply the molar concentration by the molar mass. Check the units: mol dm<sup>−3</sup> × g mol<sup>−1</sup> = g dm<sup>−3</sup>.
        "把摩爾濃度乘以摩爾質量。檢查單位：mol dm<sup>−3</sup> × g mol<sup>−1</sup> = g dm<sup>−3</sup>。",
      ],
      // EN: <p>Concentration in <span class="unit">g dm-3</span> = concentration in <span class="unit">mol dm-3</span> × molar mass.</p><div class="worked__math"><i>C</i> = 0.0250 <span class="unit">mol dm-3</span> × 158.04 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 3.951 <span class="unit">g dm-3</span><br>&nbsp;&nbsp;= <strong>3.95 <span class="unit">g dm-3</span></strong></div><p>Named slip: dividing gives 0.000158. One mole of <span class="chem">KMnO4</span> has a mass of 158 g, so the number of grams must be bigger than the number of moles.</p>
      solution: "<p>以 <span class=\"unit\">g dm-3</span> 表示的濃度 = 以 <span class=\"unit\">mol dm-3</span> 表示的濃度 × 摩爾質量。</p><div class=\"worked__math\"><i>C</i> = 0.0250 <span class=\"unit\">mol dm-3</span> × 158.04 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 3.951 <span class=\"unit\">g dm-3</span><br>&nbsp;&nbsp;= <strong>3.95 <span class=\"unit\">g dm-3</span></strong></div><p>常見失誤：用了除法會得出 0.000158。一摩爾 <span class=\"chem\">KMnO4</span> 的質量是 158 g，所以克數一定比摩爾數大。</p>",
    },

    // ── s1-4-q039 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q039": {
      // EN: <p>A solution of magnesium chloride has [<span class="chem">MgCl2</span>] = 0.15 <span class="unit">mol dm-3</span>.</p><p>What is the concentration of chloride ions, [<span class="chem">Cl-</span>], in <span class="unit">mol dm-3</span>?</p>
      stem: "<p>一種氯化鎂溶液的 [<span class=\"chem\">MgCl2</span>] = 0.15 <span class=\"unit\">mol dm-3</span>。</p><p>氯離子的濃度 [<span class=\"chem\">Cl-</span>] 是多少（以 <span class=\"unit\">mol dm-3</span> 表示）？</p>",
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
        "寫出這種鹽溶解時發生的變化：<span class=\"chem\">MgCl2 -> Mg^2+ + 2Cl-</span>。",
        // EN: How many moles of <span class="chem">Cl-</span> come from one mole of <span class="chem">MgCl2</span>?
        "一摩爾 <span class=\"chem\">MgCl2</span> 會產生多少摩爾 <span class=\"chem\">Cl-</span>？",
      ],
      // EN: <div class="worked__math"><span class="chem">MgCl2(s) -> Mg^2+(aq) + 2Cl-(aq)</span></div><div class="worked__math">[<span class="chem">Cl-</span>] = 2 × [<span class="chem">MgCl2</span>]<br>&nbsp;&nbsp;= 2 × 0.15 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.30 <span class="unit">mol dm-3</span></strong></div>
      solution: "<div class=\"worked__math\"><span class=\"chem\">MgCl2(s) -> Mg^2+(aq) + 2Cl-(aq)</span></div><div class=\"worked__math\">[<span class=\"chem\">Cl-</span>] = 2 × [<span class=\"chem\">MgCl2</span>]<br>&nbsp;&nbsp;= 2 × 0.15 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.30 <span class=\"unit\">mol dm-3</span></strong></div>",
      misconception: {
        // EN (option A): You divided by 2. Each formula unit releases 2 chloride ions, so there are more chloride ions than formula units, not fewer.
        "0": "你除以 2。每個式單位釋出 2 個氯離子，所以氯離子比式單位多，而不是少。",
        // EN (option B): This is the concentration of <span class="chem">Mg^2+</span> ions. The subscript 2 in <span class="chem">MgCl2</span> means each formula unit gives 2 chloride ions.
        "1": "這是 <span class=\"chem\">Mg^2+</span> 離子的濃度。<span class=\"chem\">MgCl2</span> 中的下標 2 表示每個式單位給出 2 個氯離子。",
        // EN (option D): This is the total concentration of all ions (1 <span class="chem">Mg^2+</span> + 2 <span class="chem">Cl-</span>). The question asks for chloride ions only.
        "3": "這是所有離子的總濃度（1 個 <span class=\"chem\">Mg^2+</span> + 2 個 <span class=\"chem\">Cl-</span>）。題目只問氯離子。",
      },
    },

    // ── s1-4-q040 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q040": {
      // EN: <p>A student has a 1.00 <span class="unit">mol dm-3</span> stock solution of copper(II) sulfate. They need 250.0 <span class="unit">cm3</span> of a 0.0800 <span class="unit">mol dm-3</span> solution.</p><p>Calculate the volume of stock solution needed, in <span class="unit">cm3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>一名學生有 1.00 <span class=\"unit\">mol dm-3</span> 的硫酸銅(II) 儲備溶液 (stock solution)。這名學生需要 250.0 <span class=\"unit\">cm3</span> 的 0.0800 <span class=\"unit\">mol dm-3</span> 溶液。</p><p>計算 (calculate) 所需儲備溶液的體積，以 <span class=\"unit\">cm3</span> 表示。答案取至 3 位有效數字。</p>",
      hints: [
        // EN: Diluting adds water but does not change the amount of solute. So <i>n</i> before = <i>n</i> after, which gives <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.
        "稀釋只是加水，溶質的物質的量不變。所以稀釋前的 <i>n</i> = 稀釋後的 <i>n</i>，由此得出 <span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>。",
        // EN: Label the values: <i>C</i><sub>1</sub> = 1.00, <i>C</i><sub>2</sub> = 0.0800, <i>V</i><sub>2</sub> = 250.0 <span class="unit">cm3</span>. Both volumes can stay in <span class="unit">cm3</span> here because the same unit is on both sides.
        "先標明各數值：<i>C</i><sub>1</sub> = 1.00，<i>C</i><sub>2</sub> = 0.0800，<i>V</i><sub>2</sub> = 250.0 <span class=\"unit\">cm3</span>。這裏兩個體積都可以保留 <span class=\"unit\">cm3</span>，因為等號兩邊用的是同一個單位。",
      ],
      // EN: <div class="worked__math"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></div><div class="worked__math"><i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class="frac"><span>0.0800 <span class="unit">mol dm-3</span> × 250.0 <span class="unit">cm3</span></span><span>1.00 <span class="unit">mol dm-3</span></span></span></div><div class="worked__math"><i>V</i><sub>1</sub> = <strong>20.0 <span class="unit">cm3</span></strong></div><p>Size check: the new solution is 12.5 times more dilute, so you need one 12.5th of the final volume. The 20.0 <span class="unit">cm3</span> is then made up to 250.0 <span class="unit">cm3</span> with distilled water. You do not add 250 <span class="unit">cm3</span> of water to it.</p>
      solution: "<div class=\"worked__math\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></div><div class=\"worked__math\"><i>V</i><sub>1</sub> = <span class=\"frac\"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class=\"frac\"><span>0.0800 <span class=\"unit\">mol dm-3</span> × 250.0 <span class=\"unit\">cm3</span></span><span>1.00 <span class=\"unit\">mol dm-3</span></span></span></div><div class=\"worked__math\"><i>V</i><sub>1</sub> = <strong>20.0 <span class=\"unit\">cm3</span></strong></div><p>檢查大小：新溶液稀了 12.5 倍，所以需要的儲備溶液是最後體積的 12.5 分之一。然後用蒸餾水把這 20.0 <span class=\"unit\">cm3</span> 加至 250.0 <span class=\"unit\">cm3</span>。不是向它加入 250 <span class=\"unit\">cm3</span> 水。</p>",
    },

    // ── s1-4-q041 · order · exam · SL · Structure 1.4.5 · 2 marks
    "s1-4-q041": {
      // EN: <p>Put these steps in order to prepare 250.0 <span class="unit">cm3</span> of a standard solution from a solid.</p>
      stem: "<p>把以下步驟排列次序，說明怎樣用固體配製 250.0 <span class=\"unit\">cm3</span> 標準溶液。</p>",
      options: [
        // EN: Weigh the required mass of solid accurately on a balance.
        "用天平準確稱量所需質量的固體。",
        // EN: Dissolve the solid in a small volume of distilled water in a beaker, stirring with a glass rod.
        "在燒杯中用少量蒸餾水溶解固體，並用玻璃棒攪拌。",
        // EN: Pour the solution through a funnel into a 250.0 cm<sup>3</sup> volumetric flask. Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask.
        "經漏斗把溶液倒進 250.0 cm<sup>3</sup> 容量瓶。用蒸餾水沖洗燒杯、玻璃棒和漏斗，並把洗液加進容量瓶。",
        // EN: Add distilled water until the bottom of the meniscus is on the graduation mark, adding the last part drop by drop.
        "加入蒸餾水，直至彎液面底部到達刻度線；最後一小段要逐滴加入。",
        // EN: Stopper the flask and invert it several times to mix.
        "塞好容量瓶，倒轉數次搖勻。",
      ],
      hints: [
        // EN: The solid must be fully dissolved before the volume is made up to the mark.
        "固體必須先完全溶解，才可以把體積加至刻度線。",
        // EN: Mixing comes last. If you mixed and then added more water, the concentration would change.
        "搖勻是最後一步。如果搖勻後再加水，濃度就會改變。",
      ],
      // EN: <p>Weigh, dissolve, transfer with rinsings, make up to the mark, mix.</p><p>The rinsings matter because any solution left in the beaker would mean less solute in the flask than you weighed. The flask is filled to the mark so that the volume of <em>solution</em> is exactly 250.0 <span class="unit">cm3</span>. Inverting makes the concentration the same throughout.</p>
      solution: "<p>稱量、溶解、連同洗液轉移、加水至刻度線、搖勻。</p><p>洗液很重要：燒杯內若留有溶液，容量瓶中的溶質就會比你稱量的少。把容量瓶加至刻度線，是要令<em>溶液</em>的體積剛好是 250.0 <span class=\"unit\">cm3</span>。倒轉搖勻可令溶液各處的濃度相同。</p>",
    },

    // ── s1-4-q042 · short · exam · SL · Structure 1.4.5 · 3 marks
    "s1-4-q042": {
      // EN: <p>A student has weighed 2.650 <span class="unit">g</span> of anhydrous sodium carbonate into a small beaker.</p><p>Describe how the student should use this solid to prepare 250.0 <span class="unit">cm3</span> of a standard solution.</p>
      stem: "<p>一名學生已把 2.650 <span class=\"unit\">g</span> 無水碳酸鈉稱量到一個小燒杯中。</p><p>描述 (describe) 學生應怎樣用這些固體配製 250.0 <span class=\"unit\">cm3</span> 標準溶液。</p>",
      hints: [
        // EN: Name the piece of glassware that measures one fixed volume very precisely.
        "寫出那件能非常精密地量度一個固定體積的玻璃儀器的名稱。",
        // EN: How do you make sure that <em>all</em> of the weighed solid ends up in the solution?
        "怎樣確保稱量好的固體<em>全部</em>都進入溶液？",
        // EN: There are two more things to say: how the final volume is set, and what you do after that.
        "還有兩點要寫：怎樣定出最後的體積，以及之後要做甚麼。",
      ],
      // EN: <p>What the marks reward: the type of water (distilled or deionized, because tap water contains dissolved ions), the volumetric flask with the rinsings transferred, making up to the mark, and mixing by inversion.</p><p>Two answers that lose marks: "add 250 <span class="unit">cm3</span> of water" (the final <em>solution</em> must be 250.0 <span class="unit">cm3</span>, which is not the same thing) and using a beaker or measuring cylinder to measure the final volume (not precise enough).</p>
      solution: "<p>得分的要點：水的種類（蒸餾水或去離子水，因為自來水含有溶解了的離子）、使用容量瓶並把洗液一併轉移、加水至刻度線，以及倒轉搖勻。</p><p>兩種會失分的答案：「加入 250 <span class=\"unit\">cm3</span> 水」（必須是最後的<em>溶液</em>有 250.0 <span class=\"unit\">cm3</span>，兩者並不相同），以及用燒杯或量筒量度最後的體積（不夠精密）。</p>",
      // EN: <p>Dissolve the solid in distilled (deionized) water in the beaker. Transfer the solution to a 250.0 cm<sup>3</sup> volumetric flask, rinsing the beaker (and funnel and stirring rod) with distilled water and adding the rinsings to the flask. Add distilled water up to the graduation mark (bottom of the meniscus on the line). Stopper and invert the flask several times to mix.</p>
      answer: "<p>在燒杯中用蒸餾水（去離子水）溶解固體。把溶液轉移到 250.0 cm<sup>3</sup> 容量瓶，用蒸餾水沖洗燒杯（以及漏斗和攪拌棒），並把洗液加進容量瓶。加入蒸餾水至刻度線（彎液面底部在線上）。塞好容量瓶，倒轉數次搖勻。</p>",
      markscheme: [
        // EN: Dissolve the solid in distilled / deionized water (in the beaker). (Do not accept "water" alone.)
        "（在燒杯中）用蒸餾水／去離子水溶解固體。（只寫「水」不接受。）",
        // EN: Transfer to a 250 cm³ volumetric flask AND rinse the beaker, adding the rinsings / washings to the flask.
        "轉移到 250 cm³ 容量瓶，並且沖洗燒杯，把洗液加進容量瓶。",
        // EN: Make up to the (graduation) mark with distilled water / until the bottom of the meniscus is on the mark. (Do not accept "add 250 cm³ of water".)
        "用蒸餾水加至（刻度）線／直至彎液面底部到達刻度線。（不接受「加入 250 cm³ 水」。）",
        // EN: Stopper and invert / shake to mix thoroughly. (Any three points for 3 marks.)
        "塞好並倒轉／搖動，使溶液徹底混和。（任何三點可得 3 分。）",
      ],
    },

    // ── s1-4-q043 · short · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q043": {
      // EN: <p>A student has a 0.500 <span class="unit">mol dm-3</span> stock solution of nickel(II) sulfate. To make a calibration curve they need 100.0 <span class="unit">cm3</span> of a 0.0500 <span class="unit">mol dm-3</span> solution.</p><p>Calculate the volume of stock solution needed and describe how to carry out the dilution, naming the glassware.</p>
      stem: "<p>一名學生有 0.500 <span class=\"unit\">mol dm-3</span> 的硫酸鎳(II) 儲備溶液。為了製作校準曲線，這名學生需要 100.0 <span class=\"unit\">cm3</span> 的 0.0500 <span class=\"unit\">mol dm-3</span> 溶液。</p><p>計算 (calculate) 所需儲備溶液的體積，並描述 (describe) 怎樣稀釋，寫出所用玻璃儀器的名稱。</p>",
      hints: [
        // EN: The amount of solute does not change on dilution: <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.
        "稀釋時溶質的物質的量不變：<span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>。",
        // EN: Choose glassware made to deliver or contain one precise volume. A measuring cylinder is not precise enough.
        "選用專為放出或盛載一個精密體積而設計的玻璃儀器。量筒不夠精密。",
        // EN: How do you make the final volume exactly 100.0 <span class="unit">cm3</span>?
        "怎樣令最後的體積剛好是 100.0 <span class=\"unit\">cm3</span>？",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class="frac"><span>0.0500 <span class="unit">mol dm-3</span> × 100.0 <span class="unit">cm3</span></span><span>0.500 <span class="unit">mol dm-3</span></span></span><br>&nbsp;&nbsp;= <strong>10.0 <span class="unit">cm3</span></strong></div><p>A pipette delivers the 10.0 <span class="unit">cm3</span> precisely. A volumetric flask fixes the final volume precisely. Writing "add 90 <span class="unit">cm3</span> of water" does not earn the mark: you make the solution <em>up to the mark</em>, because it is the final volume of solution that must be 100.0 <span class="unit">cm3</span>.</p>
      solution: "<div class=\"worked__math\"><i>V</i><sub>1</sub> = <span class=\"frac\"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class=\"frac\"><span>0.0500 <span class=\"unit\">mol dm-3</span> × 100.0 <span class=\"unit\">cm3</span></span><span>0.500 <span class=\"unit\">mol dm-3</span></span></span><br>&nbsp;&nbsp;= <strong>10.0 <span class=\"unit\">cm3</span></strong></div><p>移液管可以精密地放出 10.0 <span class=\"unit\">cm3</span>。容量瓶可以精密地定出最後的體積。寫「加入 90 <span class=\"unit\">cm3</span> 水」不會得分：你要把溶液<em>加至刻度線</em>，因為必須是最後溶液的體積等於 100.0 <span class=\"unit\">cm3</span>。</p>",
      // EN: <p><i>V</i><sub>1</sub> = (0.0500 × 100.0) ÷ 0.500 = 10.0 cm<sup>3</sup>.</p><p>Use a 10.0 cm<sup>3</sup> volumetric (bulb) pipette to transfer the stock solution into a 100.0 cm<sup>3</sup> volumetric flask. Add distilled water up to the graduation mark. Stopper and invert to mix.</p>
      answer: "<p><i>V</i><sub>1</sub> = (0.0500 × 100.0) ÷ 0.500 = 10.0 cm<sup>3</sup>。</p><p>用 10.0 cm<sup>3</sup> 的容量（球形）移液管把儲備溶液轉移到 100.0 cm<sup>3</sup> 容量瓶。加入蒸餾水至刻度線。塞好並倒轉搖勻。</p>",
      markscheme: [
        // EN: Volume of stock = 10.0 cm³.
        "儲備溶液的體積 = 10.0 cm³。",
        // EN: Measured with a (10.0 cm³) volumetric / graduated pipette (or burette). (Do not accept measuring cylinder.)
        "用 (10.0 cm³) 容量／刻度移液管（或滴定管）量度。（不接受量筒。）",
        // EN: Into a 100.0 cm³ volumetric flask.
        "轉移到 100.0 cm³ 容量瓶。",
        // EN: Made up to the mark with distilled / deionized water, AND mixed / inverted. (The volume mark plus any two of the other points for 3 marks.)
        "用蒸餾水／去離子水加至刻度線，並且混和／倒轉搖勻。（體積這一點加上其餘任何兩點可得 3 分。）",
      ],
    },

    // ── s1-4-q044 · numeric · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q044": {
      // EN: <p>5.55 <span class="unit">g</span> of calcium chloride, <span class="chem">CaCl2</span>, is dissolved in distilled water and made up to 500.0 <span class="unit">cm3</span> in a volumetric flask (solution A).</p><p>10.0 <span class="unit">cm3</span> of solution A is then pipetted into a 250.0 <span class="unit">cm3</span> volumetric flask and made up to the mark (solution B).</p><p>Calculate [<span class="chem">Cl-</span>] in solution B, in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CaCl2</span>) = 110.98 <span class="unit">g mol-1</span></p>
      stem: "<p>把 5.55 <span class=\"unit\">g</span> 氯化鈣 <span class=\"chem\">CaCl2</span> 溶於蒸餾水，在容量瓶中加水至 500.0 <span class=\"unit\">cm3</span>（溶液 A）。</p><p>然後用移液管把 10.0 <span class=\"unit\">cm3</span> 溶液 A 轉移到 250.0 <span class=\"unit\">cm3</span> 容量瓶，加水至刻度線（溶液 B）。</p><p>計算 (calculate) 溶液 B 中的 [<span class=\"chem\">Cl-</span>]，以 <span class=\"unit\">mol dm-3</span> 表示。答案取至 3 位有效數字。</p><p><i>M</i>(<span class=\"chem\">CaCl2</span>) = 110.98 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Plan the chain: mass → amount of <span class="chem">CaCl2</span> → concentration of solution A → chloride ion concentration → dilution.
        "先計劃整條路線：質量 → <span class=\"chem\">CaCl2</span> 的物質的量 → 溶液 A 的濃度 → 氯離子的濃度 → 稀釋。",
        // EN: For solution A use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> then <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span> with <i>V</i> = 0.5000 <span class="unit">dm3</span>. Each <span class="chem">CaCl2</span> gives 2 <span class="chem">Cl-</span>.
        "溶液 A：先用 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>，再用 <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span>，其中 <i>V</i> = 0.5000 <span class=\"unit\">dm3</span>。每個 <span class=\"chem\">CaCl2</span> 給出 2 個 <span class=\"chem\">Cl-</span>。",
        // EN: For the dilution use <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> with <i>V</i><sub>1</sub> = 10.0 <span class="unit">cm3</span> and <i>V</i><sub>2</sub> = 250.0 <span class="unit">cm3</span>.
        "稀釋：用 <span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>，其中 <i>V</i><sub>1</sub> = 10.0 <span class=\"unit\">cm3</span>，<i>V</i><sub>2</sub> = 250.0 <span class=\"unit\">cm3</span>。",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">CaCl2</span>) = <span class="frac"><span>5.55 <span class="unit">g</span></span><span>110.98 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05001 <span class="unit">mol</span></div><div class="worked__math"><i>V</i>(A) = 500.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.5000 <span class="unit">dm3</span></div><div class="worked__math">[<span class="chem">CaCl2</span>] in A = <span class="frac"><span>0.05001 <span class="unit">mol</span></span><span>0.5000 <span class="unit">dm3</span></span></span><br>&nbsp;&nbsp;= 0.1000 <span class="unit">mol dm-3</span> &nbsp; (M1)</div><div class="worked__math">[<span class="chem">Cl-</span>] in A = 2 × 0.1000 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= 0.2000 <span class="unit">mol dm-3</span> &nbsp; (M2)</div><p>Dilution: the same ions are spread through a larger volume, so multiply by <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>.</p><div class="worked__math"><span class="frac"><span><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class="frac"><span>10.0 <span class="unit">cm3</span></span><span>250.0 <span class="unit">cm3</span></span></span><br>&nbsp;&nbsp;= 0.0400</div><div class="worked__math">[<span class="chem">Cl-</span>] in B = 0.2000 <span class="unit">mol dm-3</span> × 0.0400<br>&nbsp;&nbsp;= <strong>0.00800 <span class="unit">mol dm-3</span></strong> &nbsp; (M3)</div><p>Named slips: 0.00400 means you forgot that each <span class="chem">CaCl2</span> gives 2 chloride ions. 0.200 is solution A, before the dilution.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">CaCl2</span>) = <span class=\"frac\"><span>5.55 <span class=\"unit\">g</span></span><span>110.98 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05001 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>V</i>(A) = 500.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.5000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\">A 中的 [<span class=\"chem\">CaCl2</span>] = <span class=\"frac\"><span>0.05001 <span class=\"unit\">mol</span></span><span>0.5000 <span class=\"unit\">dm3</span></span></span><br>&nbsp;&nbsp;= 0.1000 <span class=\"unit\">mol dm-3</span> &nbsp; (M1)</div><div class=\"worked__math\">A 中的 [<span class=\"chem\">Cl-</span>] = 2 × 0.1000 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">mol dm-3</span> &nbsp; (M2)</div><p>稀釋：同樣的離子分散到更大的體積中，所以要乘以 <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>。</p><div class=\"worked__math\"><span class=\"frac\"><span><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class=\"frac\"><span>10.0 <span class=\"unit\">cm3</span></span><span>250.0 <span class=\"unit\">cm3</span></span></span><br>&nbsp;&nbsp;= 0.0400</div><div class=\"worked__math\">B 中的 [<span class=\"chem\">Cl-</span>] = 0.2000 <span class=\"unit\">mol dm-3</span> × 0.0400<br>&nbsp;&nbsp;= <strong>0.00800 <span class=\"unit\">mol dm-3</span></strong> &nbsp; (M3)</div><p>常見失誤：得出 0.00400，表示你忘了每個 <span class=\"chem\">CaCl2</span> 給出 2 個氯離子。0.200 是稀釋前溶液 A 的濃度。</p>",
    },

    // ── s1-4-q045 · numeric · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q045": {
      // EN: <p>A student makes a calibration curve for a coloured solution of copper(II) sulfate by measuring the absorbance of four standard solutions in a colorimeter.</p><div class="table-scroll"><table class="data"><caption>Calibration data</caption><thead><tr><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">[<span class="chem">CuSO4</span>] / mol dm<sup>−3</sup></span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Absorbance</span></th></tr></thead><tbody><tr><td class="num">0.010</td><td class="num">0.120</td></tr><tr><td class="num">0.020</td><td class="num">0.240</td></tr><tr><td class="num">0.030</td><td class="num">0.360</td></tr><tr><td class="num">0.040</td><td class="num">0.480</td></tr></tbody></table></div><p>The graph of absorbance against concentration is a straight line through the origin.</p><p>An unknown solution is too dark to measure directly. The student dilutes 5.00 <span class="unit">cm3</span> of it to 100.0 <span class="unit">cm3</span>. The diluted solution has an absorbance of 0.300.</p><p>Determine the concentration of the <strong>original</strong> unknown solution, in <span class="unit">mol dm-3</span>. Give your answer to 2 significant figures.</p>
      stem: "<p>一名學生用比色計量度四種標準溶液的吸光度，為有顏色的硫酸銅(II) 溶液製作校準曲線。</p><div class=\"table-scroll\"><table class=\"data\"><caption>校準數據</caption><thead><tr><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">[<span class=\"chem\">CuSO4</span>] / mol dm<sup>−3</sup></span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">吸光度</span></th></tr></thead><tbody><tr><td class=\"num\">0.010</td><td class=\"num\">0.120</td></tr><tr><td class=\"num\">0.020</td><td class=\"num\">0.240</td></tr><tr><td class=\"num\">0.030</td><td class=\"num\">0.360</td></tr><tr><td class=\"num\">0.040</td><td class=\"num\">0.480</td></tr></tbody></table></div><p>吸光度對濃度的線圖是一條通過原點的直線。</p><p>一種未知溶液顏色太深，不能直接量度。學生把 5.00 <span class=\"unit\">cm3</span> 這種溶液稀釋至 100.0 <span class=\"unit\">cm3</span>。稀釋後溶液的吸光度是 0.300。</p><p>求出 (determine) <strong>原來</strong>未知溶液的濃度，以 <span class=\"unit\">mol dm-3</span> 表示。答案取至 2 位有效數字。</p>",
      hints: [
        // EN: A calibration curve turns a measurement (absorbance) into a concentration. Find the gradient of the line: absorbance per <span class="unit">mol dm-3</span>.
        "校準曲線把量度結果（吸光度）轉換成濃度。先求出直線的斜率：每 <span class=\"unit\">mol dm-3</span> 的吸光度。",
        // EN: Use the line to read the concentration of the <em>diluted</em> solution: concentration = absorbance ÷ gradient.
        "用這條直線讀出<em>稀釋後</em>溶液的濃度：濃度 = 吸光度 ÷ 斜率。",
        // EN: Then undo the dilution with <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>. The original solution must be more concentrated than the diluted one.
        "然後用 <span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> 把稀釋還原。原來的溶液一定比稀釋後的濃。",
      ],
      // EN: <div class="worked__math">Gradient = <span class="frac"><span>0.480</span><span>0.040 <span class="unit">mol dm-3</span></span></span><br>&nbsp;&nbsp;= 12.0 <span class="unit">dm3 mol-1</span> &nbsp; (M1)</div><div class="worked__math"><i>C</i>(diluted) = <span class="frac"><span>0.300</span><span>12.0 <span class="unit">dm3 mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0250 <span class="unit">mol dm-3</span> &nbsp; (M2)</div><p>Undo the dilution. The original solution is more concentrated by the factor <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>.</p><div class="worked__math"><span class="frac"><span><i>V</i><sub>2</sub></span><span><i>V</i><sub>1</sub></span></span> = <span class="frac"><span>100.0 <span class="unit">cm3</span></span><span>5.00 <span class="unit">cm3</span></span></span><br>&nbsp;&nbsp;= 20.0</div><div class="worked__math"><i>C</i>(original) = 0.0250 <span class="unit">mol dm-3</span> × 20.0<br>&nbsp;&nbsp;= <strong>0.50 <span class="unit">mol dm-3</span></strong> &nbsp; (M3)</div><p>The absorbance 0.300 lies between the standards (0.240 and 0.360), so the reading is inside the range of the calibration line. That is why the dark solution was diluted first. Named slips: 0.025 is the diluted solution. 0.00125 means you applied the dilution factor the wrong way round.</p>
      solution: "<div class=\"worked__math\">斜率 = <span class=\"frac\"><span>0.480</span><span>0.040 <span class=\"unit\">mol dm-3</span></span></span><br>&nbsp;&nbsp;= 12.0 <span class=\"unit\">dm3 mol-1</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>C</i>(稀釋後) = <span class=\"frac\"><span>0.300</span><span>12.0 <span class=\"unit\">dm3 mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">mol dm-3</span> &nbsp; (M2)</div><p>把稀釋還原。原來溶液的濃度是稀釋後的 <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub> 倍。</p><div class=\"worked__math\"><span class=\"frac\"><span><i>V</i><sub>2</sub></span><span><i>V</i><sub>1</sub></span></span> = <span class=\"frac\"><span>100.0 <span class=\"unit\">cm3</span></span><span>5.00 <span class=\"unit\">cm3</span></span></span><br>&nbsp;&nbsp;= 20.0</div><div class=\"worked__math\"><i>C</i>(原來) = 0.0250 <span class=\"unit\">mol dm-3</span> × 20.0<br>&nbsp;&nbsp;= <strong>0.50 <span class=\"unit\">mol dm-3</span></strong> &nbsp; (M3)</div><p>吸光度 0.300 落在標準溶液之間（0.240 和 0.360），所以讀數在校準線的範圍之內。這就是要先稀釋深色溶液的原因。常見失誤：0.025 是稀釋後溶液的濃度。得出 0.00125，表示你把稀釋倍數用反了。</p>",
    },

    // ── s1-4-q046 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "s1-4-q046": {
      // EN: <p>Which is a correct statement of Avogadro's law?</p>
      stem: "<p>以下哪一項正確地表述了亞佛加德羅定律 (Avogadro's law)？</p>",
      options: [
        // EN: Equal masses of all gases, at the same temperature and pressure, occupy equal volumes.
        "在相同的溫度和壓強下，質量相等的所有氣體佔有相等的體積。",
        // EN: Equal volumes of all gases, at the same temperature and pressure, contain equal numbers of molecules.
        "在相同的溫度和壓強下，體積相等的所有氣體含有相等數目的分子。",
        // EN: Equal volumes of all gases, at the same temperature and pressure, have equal masses.
        "在相同的溫度和壓強下，體積相等的所有氣體有相等的質量。",
        // EN: Equal volumes of all gases contain equal numbers of molecules at any temperature and pressure.
        "在任何溫度和壓強下，體積相等的所有氣體都含有相等數目的分子。",
      ],
      hints: [
        // EN: The law connects two things: the volume of a gas and the number of molecules in it.
        "這條定律把兩件事連繫起來：氣體的體積，以及其中分子的數目。",
        // EN: A gas expands when heated or when the pressure is lowered. What conditions must be the same for a fair comparison?
        "氣體受熱或壓強降低時會膨脹。要公平地比較，哪些條件必須相同？",
      ],
      // EN: <p>Avogadro's law: equal volumes of all gases, measured under the same conditions of temperature and pressure, contain equal numbers of molecules. This means that for gases at the same temperature and pressure, the ratio of volumes equals the ratio of amounts in moles.</p>
      solution: "<p>亞佛加德羅定律：在相同的溫度和壓強條件下量度，體積相等的所有氣體含有相等數目的分子。也就是說，對於在相同溫度和壓強下的氣體，體積比等於物質的量（摩爾）之比。</p>",
      misconception: {
        // EN (option A): Equal masses of different gases contain different numbers of molecules, because their molar masses differ. The law links volume to number of molecules, not to mass.
        "0": "質量相等的不同氣體含有不同數目的分子，因為它們的摩爾質量不同。這條定律把體積和分子數目連繫起來，與質量無關。",
        // EN (option C): Equal volumes hold equal numbers of molecules, but the molecules of different gases have different masses. So the masses are not equal.
        "2": "體積相等，分子數目就相等，但不同氣體的分子質量不同。所以質量並不相等。",
        // EN (option D): The condition is missing. The two gases must be measured at the <em>same</em> temperature and pressure as each other.
        "3": "漏了條件。兩種氣體必須在彼此<em>相同</em>的溫度和壓強下量度。",
      },
    },

    // ── s1-4-q047 · numeric · foundation · SL · Structure 1.4.6 · 1 mark
    "s1-4-q047": {
      // EN: <p>Nitrogen reacts with hydrogen to form ammonia.</p><p><span class="chem">N2(g) + 3H2(g) -> 2NH3(g)</span></p><p>What volume of hydrogen, in <span class="unit">cm3</span>, reacts exactly with 30 <span class="unit">cm3</span> of nitrogen? All volumes are measured at the same temperature and pressure.</p>
      stem: "<p>氮與氫反應生成氨。</p><p><span class=\"chem\">N2(g) + 3H2(g) -> 2NH3(g)</span></p><p>剛好與 30 <span class=\"unit\">cm3</span> 氮完全反應的氫的體積是多少（以 <span class=\"unit\">cm3</span> 表示）？所有體積都在相同的溫度和壓強下量度。</p>",
      hints: [
        // EN: For gases at the same temperature and pressure, the ratio of volumes is the same as the ratio of moles in the equation.
        "對於在相同溫度和壓強下的氣體，體積比等於方程式中的摩爾比。",
        // EN: The equation shows 1 volume of <span class="chem">N2</span> reacting with 3 volumes of <span class="chem">H2</span>.
        "方程式顯示 1 份體積的 <span class=\"chem\">N2</span> 與 3 份體積的 <span class=\"chem\">H2</span> 反應。",
      ],
      // EN: <p>The mole ratio <span class="chem">N2</span> : <span class="chem">H2</span> is 1 : 3. At the same temperature and pressure the volume ratio is also 1 : 3.</p><div class="worked__math"><i>V</i>(<span class="chem">H2</span>) = 3 × 30 <span class="unit">cm3</span> = <strong>90 <span class="unit">cm3</span></strong></div><p>No molar masses or conversions to moles are needed. Avogadro's law lets you use the coefficients directly on the volumes.</p>
      solution: "<p><span class=\"chem\">N2</span> : <span class=\"chem\">H2</span> 的摩爾比是 1 : 3。在相同的溫度和壓強下，體積比也是 1 : 3。</p><div class=\"worked__math\"><i>V</i>(<span class=\"chem\">H2</span>) = 3 × 30 <span class=\"unit\">cm3</span> = <strong>90 <span class=\"unit\">cm3</span></strong></div><p>不需要用摩爾質量，也不用換算成摩爾。根據亞佛加德羅定律，可以把系數直接用在體積上。</p>",
    },

    // ── s1-4-q048 · mcq · exam · SL · Structure 1.4.6 · 1 mark
    "s1-4-q048": {
      // EN: <p>20 <span class="unit">cm3</span> of propane is burned completely in 150 <span class="unit">cm3</span> of oxygen, which is an excess.</p><p><span class="chem">C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)</span></p><p>What is the total volume of gas remaining, in <span class="unit">cm3</span>, when the mixture has returned to the original temperature and pressure?</p>
      stem: "<p>20 <span class=\"unit\">cm3</span> 丙烷在 150 <span class=\"unit\">cm3</span> 氧中完全燃燒，氧是過量的。</p><p><span class=\"chem\">C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)</span></p><p>當混合物回復到原來的溫度和壓強時，剩餘氣體的總體積是多少（以 <span class=\"unit\">cm3</span> 表示）？</p>",
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
        "把系數當作體積比來用，但只限於氣體。檢查每一個物態符號。",
        // EN: Work out the volume of <span class="chem">O2</span> that reacts and the volume of <span class="chem">CO2</span> formed from 20 <span class="unit">cm3</span> of propane.
        "計算 20 <span class=\"unit\">cm3</span> 丙烷會與多少體積的 <span class=\"chem\">O2</span> 反應，以及生成多少體積的 <span class=\"chem\">CO2</span>。",
        // EN: What is in the container at the end? The gas that was made, plus any gas that was not used up.
        "最後容器內有甚麼？生成的氣體，加上沒有用完的氣體。",
      ],
      // EN: <div class="worked__math"><i>V</i>(<span class="chem">O2</span>) reacting = 5 × 20 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 100 <span class="unit">cm3</span></div><div class="worked__math"><i>V</i>(<span class="chem">O2</span>) left over = 150 <span class="unit">cm3</span> − 100 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 50 <span class="unit">cm3</span></div><div class="worked__math"><i>V</i>(<span class="chem">CO2</span>) formed = 3 × 20 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 60 <span class="unit">cm3</span></div><p>The water is a liquid, so its volume is negligible.</p><div class="worked__math">Total gas = 50 <span class="unit">cm3</span> + 60 <span class="unit">cm3</span><br>&nbsp;&nbsp;= <strong>110 <span class="unit">cm3</span></strong></div>
      solution: "<div class=\"worked__math\">反應的 <i>V</i>(<span class=\"chem\">O2</span>) = 5 × 20 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 100 <span class=\"unit\">cm3</span></div><div class=\"worked__math\">剩餘的 <i>V</i>(<span class=\"chem\">O2</span>) = 150 <span class=\"unit\">cm3</span> − 100 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 50 <span class=\"unit\">cm3</span></div><div class=\"worked__math\">生成的 <i>V</i>(<span class=\"chem\">CO2</span>) = 3 × 20 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 60 <span class=\"unit\">cm3</span></div><p>水是液體，所以它的體積可忽略。</p><div class=\"worked__math\">氣體總體積 = 50 <span class=\"unit\">cm3</span> + 60 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= <strong>110 <span class=\"unit\">cm3</span></strong></div>",
      misconception: {
        // EN (option A): This is the <span class="chem">CO2</span> only. Some oxygen is left over: 150 <span class="unit">cm3</span> was supplied but only 100 <span class="unit">cm3</span> reacted.
        "0": "這只是 <span class=\"chem\">CO2</span> 的體積。還有一些氧剩下：提供了 150 <span class=\"unit\">cm3</span>，但只有 100 <span class=\"unit\">cm3</span> 參與反應。",
        // EN (option C): You counted the water as a gas (60 + 80) and left out the excess oxygen. The state symbol (l) shows that the water is liquid, so its volume is negligible.
        "2": "你把水當作氣體 (60 + 80)，又漏了過量的氧。物態符號 (l) 表示水是液體，所以它的體積可忽略。",
        // EN (option D): You included the excess oxygen, but you also counted 80 <span class="unit">cm3</span> of water vapour. The state symbol (l) shows that the water is liquid at the final conditions.
        "3": "你計入了過量的氧，但也算了 80 <span class=\"unit\">cm3</span> 水蒸氣。物態符號 (l) 表示在最後的條件下水是液體。",
      },
    },

    // ── s1-4-q049 · numeric · exam · SL · Structure 1.4.6 · 1 mark
    "s1-4-q049": {
      // EN: <p>Butane burns completely in oxygen.</p><p><span class="chem">2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)</span></p><p>Calculate the volume of oxygen, in <span class="unit">cm3</span>, needed to burn 20.0 <span class="unit">cm3</span> of butane completely. Both volumes are measured at the same temperature and pressure. Give your answer to 3 significant figures.</p>
      stem: "<p>丁烷在氧中完全燃燒。</p><p><span class=\"chem\">2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)</span></p><p>計算 (calculate) 完全燃燒 20.0 <span class=\"unit\">cm3</span> 丁烷所需的氧的體積，以 <span class=\"unit\">cm3</span> 表示。兩個體積都在相同的溫度和壓強下量度。答案取至 3 位有效數字。</p>",
      hints: [
        // EN: At the same temperature and pressure, volume ratio = mole ratio.
        "在相同的溫度和壓強下，體積比 = 摩爾比。",
        // EN: The ratio is 2 volumes of butane to 13 volumes of oxygen. Watch the 2 in front of the butane: the ratio is not 1 : 13.
        "比例是 2 份體積的丁烷對 13 份體積的氧。留意丁烷前面的 2：比例不是 1 : 13。",
      ],
      // EN: <p>The mole ratio <span class="chem">C4H10</span> : <span class="chem">O2</span> is 2 : 13. At the same temperature and pressure the volume ratio is also 2 : 13.</p><div class="worked__math"><i>V</i>(<span class="chem">O2</span>) = 20.0 <span class="unit">cm3</span> × <span class="frac"><span>13</span><span>2</span></span><br>&nbsp;&nbsp;= <strong>130 <span class="unit">cm3</span></strong></div><p>Named slip: 260 <span class="unit">cm3</span> means you multiplied by 13 and ignored the coefficient 2 on butane.</p>
      solution: "<p><span class=\"chem\">C4H10</span> : <span class=\"chem\">O2</span> 的摩爾比是 2 : 13。在相同的溫度和壓強下，體積比也是 2 : 13。</p><div class=\"worked__math\"><i>V</i>(<span class=\"chem\">O2</span>) = 20.0 <span class=\"unit\">cm3</span> × <span class=\"frac\"><span>13</span><span>2</span></span><br>&nbsp;&nbsp;= <strong>130 <span class=\"unit\">cm3</span></strong></div><p>常見失誤：得出 260 <span class=\"unit\">cm3</span>，表示你只乘以 13，忽略了丁烷的系數 2。</p>",
    },

    // ── s1-4-q050 · mcq · challenge · SL · Structure 1.4.6 · 1 mark
    "s1-4-q050": {
      // EN: <p>10 <span class="unit">cm3</span> of a gaseous hydrocarbon, <span class="chem">C</span><sub><i>x</i></sub><span class="chem">H</span><sub><i>y</i></sub>, burns completely in excess oxygen. It forms 30 <span class="unit">cm3</span> of carbon dioxide and 40 <span class="unit">cm3</span> of water vapour. All volumes are measured at the same temperature (above 100 °C) and pressure.</p><p>What is the formula of the hydrocarbon?</p>
      stem: "<p>10 <span class=\"unit\">cm3</span> 某種氣態烴 <span class=\"chem\">C</span><sub><i>x</i></sub><span class=\"chem\">H</span><sub><i>y</i></sub> 在過量的氧中完全燃燒，生成 30 <span class=\"unit\">cm3</span> 二氧化碳和 40 <span class=\"unit\">cm3</span> 水蒸氣。所有體積都在相同的溫度（高於 100 °C）和壓強下量度。</p><p>這種烴的化學式是甚麼？</p>",
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
        "亞佛加德羅定律：體積比就是分子數目的比。把 10 : 30 : 40 約簡。",
        // EN: One molecule of hydrocarbon gives 3 molecules of <span class="chem">CO2</span> and 4 molecules of <span class="chem">H2O</span>.
        "一個烴分子生成 3 個 <span class=\"chem\">CO2</span> 分子和 4 個 <span class=\"chem\">H2O</span> 分子。",
        // EN: All the C atoms end up in <span class="chem">CO2</span> and all the H atoms end up in <span class="chem">H2O</span>. Count the atoms.
        "所有 C 原子都變成 <span class=\"chem\">CO2</span>，所有 H 原子都變成 <span class=\"chem\">H2O</span>。數一數原子。",
      ],
      // EN: <p>Volume ratio, hydrocarbon : <span class="chem">CO2</span> : <span class="chem">H2O</span>:</p><div class="worked__math">10 : 30 : 40 = 1 : 3 : 4</div><p>So 1 molecule of hydrocarbon gives 3 molecules of <span class="chem">CO2</span> and 4 molecules of <span class="chem">H2O</span>.</p><div class="worked__math">C atoms: <i>x</i> = 3 × 1 = 3</div><div class="worked__math">H atoms: <i>y</i> = 4 × 2 = 8</div><p>The hydrocarbon is <strong><span class="chem">C3H8</span></strong>. Here the water counts as a gas because the temperature is above 100 °C.</p>
      solution: "<p>體積比，烴 : <span class=\"chem\">CO2</span> : <span class=\"chem\">H2O</span>：</p><div class=\"worked__math\">10 : 30 : 40 = 1 : 3 : 4</div><p>所以 1 個烴分子生成 3 個 <span class=\"chem\">CO2</span> 分子和 4 個 <span class=\"chem\">H2O</span> 分子。</p><div class=\"worked__math\">C 原子：<i>x</i> = 3 × 1 = 3</div><div class=\"worked__math\">H 原子：<i>y</i> = 4 × 2 = 8</div><p>這種烴是 <strong><span class=\"chem\">C3H8</span></strong>。這裏的水算作氣體，因為溫度高於 100 °C。</p>",
      misconception: {
        // EN (option A): You have the carbon right, but you gave each water molecule one hydrogen atom. Each <span class="chem">H2O</span> contains 2 H atoms, so 4 volumes of water means 8 H.
        "0": "碳的數目對了，但你把每個水分子當作只有一個氫原子。每個 <span class=\"chem\">H2O</span> 含有 2 個 H 原子，所以 4 份體積的水代表 8 個 H。",
        // EN (option C): You swapped the two products. The 30 <span class="unit">cm3</span> of <span class="chem">CO2</span> gives the carbon and the 40 <span class="unit">cm3</span> of <span class="chem">H2O</span> gives the hydrogen.
        "2": "你把兩種生成物對調了。30 <span class=\"unit\">cm3</span> <span class=\"chem\">CO2</span> 用來求碳，40 <span class=\"unit\">cm3</span> <span class=\"chem\">H2O</span> 用來求氫。",
        // EN (option D): You used the volumes as numbers of atoms. Divide by the 10 <span class="unit">cm3</span> of hydrocarbon first, to find how many molecules of each product form from <em>one</em> molecule.
        "3": "你把體積當成原子的數目。要先除以烴的 10 <span class=\"unit\">cm3</span>，求出<em>一個</em>烴分子會生成多少個各種生成物的分子。",
      },
    },

    // ── s1-4-q051 · multi · challenge · SL · Structure 1.4.6 · 1 mark
    "s1-4-q051": {
      // EN: <p>Two identical flasks are at the same temperature and pressure. Flask A contains ammonia, <span class="chem">NH3</span>. Flask B contains oxygen, <span class="chem">O2</span>.</p><p>Which statements are correct? Select <strong>all</strong> that apply.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, N = 14.01, O = 16.00.</p>
      stem: "<p>兩個完全相同的燒瓶處於相同的溫度和壓強。燒瓶 A 盛有氨 <span class=\"chem\">NH3</span>。燒瓶 B 盛有氧 <span class=\"chem\">O2</span>。</p><p>以下哪些敘述是正確的？選出<strong>所有</strong>正確選項。</p><p>使用 <i>A</i><sub>r</sub>：H = 1.01、N = 14.01、O = 16.00。</p>",
      options: [
        // EN: The two flasks contain the same number of molecules.
        "兩個燒瓶含有相同數目的分子。",
        // EN: Flask A contains twice as many atoms as flask B.
        "燒瓶 A 所含的原子數目是燒瓶 B 的兩倍。",
        // EN: The two flasks contain the same mass of gas.
        "兩個燒瓶所含氣體的質量相同。",
        // EN: The gas in flask B has the greater mass.
        "燒瓶 B 中氣體的質量較大。",
        // EN: Flask B contains fewer molecules because <span class="chem">O2</span> molecules are heavier.
        "燒瓶 B 所含的分子較少，因為 <span class=\"chem\">O2</span> 分子較重。",
      ],
      hints: [
        // EN: Start from Avogadro's law. What does it say about the number of molecules in each flask?
        "由亞佛加德羅定律開始。關於每個燒瓶中分子的數目，它說了甚麼？",
        // EN: Then compare one molecule of each gas: how many atoms does it have, and what is its molar mass?
        "然後比較兩種氣體各一個分子：它有多少個原子？它的摩爾質量是多少？",
      ],
      // EN: <p>Same volume, temperature and pressure means the same number of molecules, and so the same amount in moles, <i>n</i>.</p><p>Atoms: <span class="chem">NH3</span> has 4 atoms per molecule and <span class="chem">O2</span> has 2. So flask A contains twice as many atoms.</p><p>Mass: <i>m</i> = <i>n</i> × <i>M</i>, and <i>n</i> is the same for both.</p><div class="worked__math"><i>M</i>(<span class="chem">NH3</span>) = 17.04 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">O2</span>) = 32.00 <span class="unit">g mol-1</span></div><p>Oxygen has the larger molar mass, so flask B has the greater mass.</p>
      solution: "<p>體積、溫度和壓強都相同，表示分子數目相同，所以物質的量（摩爾）<i>n</i> 也相同。</p><p>原子：<span class=\"chem\">NH3</span> 每個分子有 4 個原子，<span class=\"chem\">O2</span> 有 2 個。所以燒瓶 A 所含的原子數目是兩倍。</p><p>質量：<i>m</i> = <i>n</i> × <i>M</i>，而兩者的 <i>n</i> 相同。</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">NH3</span>) = 17.04 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">O2</span>) = 32.00 <span class=\"unit\">g mol-1</span></div><p>氧的摩爾質量較大，所以燒瓶 B 的質量較大。</p>",
      misconception: {
        // EN (option C): Equal numbers of molecules do not mean equal masses. The molar masses are different: 17.04 <span class="unit">g mol-1</span> for <span class="chem">NH3</span> and 32.00 <span class="unit">g mol-1</span> for <span class="chem">O2</span>.
        "2": "分子數目相等不代表質量相等。兩者的摩爾質量不同：<span class=\"chem\">NH3</span> 是 17.04 <span class=\"unit\">g mol-1</span>，<span class=\"chem\">O2</span> 是 32.00 <span class=\"unit\">g mol-1</span>。",
        // EN (option E): Avogadro's law does not depend on the mass or size of the molecules. Equal volumes at the same temperature and pressure contain equal numbers of molecules.
        "4": "亞佛加德羅定律與分子的質量或大小無關。在相同的溫度和壓強下，相等的體積含有相等數目的分子。",
      },
    },

    // ── s1-4-q052 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q052": {
      // EN: <p>A student wants to find the concentration of a coloured solution with a colorimeter and a calibration curve.</p><p>Which describes how the calibration curve is made and used?</p>
      stem: "<p>一名學生想用比色計和校準曲線 (calibration curve) 求出一種有顏色溶液的濃度。</p><p>以下哪一項描述了校準曲線的製作和使用方法？</p>",
      options: [
        // EN: Measure the absorbance of the unknown solution several times and take the mean.
        "量度未知溶液的吸光度數次，然後取平均值。",
        // EN: Measure the absorbance of several solutions of known concentration, plot absorbance against concentration, then read the concentration of the unknown from the line.
        "量度幾種已知濃度溶液的吸光度，繪畫吸光度對濃度的線圖，然後從線上讀出未知溶液的濃度。",
        // EN: Measure the absorbance of one solution of known concentration and assume the unknown has the same concentration.
        "量度一種已知濃度溶液的吸光度，並假設未知溶液的濃度與它相同。",
        // EN: Plot the mass of solute against the volume of solution and find the gradient.
        "繪畫溶質質量對溶液體積的線圖，並求出斜率。",
      ],
      hints: [
        // EN: A calibration curve links an instrument reading to a concentration. Which solutions must you measure to draw it?
        "校準曲線把儀器的讀數和濃度連繫起來。要畫出這條線，必須量度哪些溶液？",
        // EN: Standard solutions have known concentrations. The unknown is measured last and read from the graph.
        "標準溶液的濃度是已知的。未知溶液最後才量度，再從線圖讀出濃度。",
      ],
      // EN: <p>Make several standard solutions of known concentration. Measure the absorbance of each. Plot absorbance (<i>y</i>) against concentration (<i>x</i>) and draw the line of best fit. Then measure the absorbance of the unknown and read its concentration from the line. The unknown should lie inside the range of the standards.</p>
      solution: "<p>配製幾種已知濃度的標準溶液。量度每一種的吸光度。以吸光度 (<i>y</i>) 對濃度 (<i>x</i>) 繪圖，並畫出最佳擬合線。然後量度未知溶液的吸光度，從線上讀出它的濃度。未知溶液的讀數應落在標準溶液的範圍之內。</p>",
      misconception: {
        // EN (option A): Repeating the reading makes it more reliable, but an absorbance is not a concentration. You need solutions of known concentration to link the two.
        "0": "重複量度可令讀數更可靠，但吸光度不是濃度。你需要已知濃度的溶液，才能把兩者連繫起來。",
        // EN (option C): One known solution gives one point, not a line. Several standard solutions are needed, and the unknown is read from the line of best fit.
        "2": "一種已知溶液只給出一個點，不能成為一條線。需要幾種標準溶液，再從最佳擬合線讀出未知溶液的濃度。",
        // EN (option D): That graph would give a concentration in <span class="unit">g dm-3</span> for a solution you made yourself. It does not use the colorimeter and says nothing about the unknown.
        "3": "這個線圖只能給出你自己配製的溶液以 <span class=\"unit\">g dm-3</span> 表示的濃度。它沒有用到比色計，也不能說明未知溶液的任何事。",
      },
    },

    // ── s1-4-q053 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q053": {
      // EN: <p>3.60 <span class="unit">g</span> of glucose is dissolved in distilled water and the solution is made up to 200.0 <span class="unit">cm3</span>.</p><p>Calculate the concentration of the solution in <span class="unit">g dm-3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>把 3.60 <span class=\"unit\">g</span> 葡萄糖溶於蒸餾水，再把溶液加水至 200.0 <span class=\"unit\">cm3</span>。</p><p>計算 (calculate) 溶液以 <span class=\"unit\">g dm-3</span> 表示的濃度。答案取至 3 位有效數字。</p>",
      hints: [
        // EN: A concentration in <span class="unit">g dm-3</span> is the mass of solute divided by the volume of solution. You do not need the molar mass.
        "以 <span class=\"unit\">g dm-3</span> 表示的濃度，是溶質的質量除以溶液的體積。不需要用摩爾質量。",
        // EN: Convert the volume first: 200.0 <span class="unit">cm3</span> ÷ 1000 = 0.2000 <span class="unit">dm3</span>.
        "先換算體積：200.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.2000 <span class=\"unit\">dm3</span>。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 200.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.2000 <span class="unit">dm3</span></div><div class="worked__math">concentration = <span class="frac"><span>3.60 <span class="unit">g</span></span><span>0.2000 <span class="unit">dm3</span></span></span><br>&nbsp;&nbsp;= <strong>18.0 <span class="unit">g dm-3</span></strong></div><p>Named slips: 0.0180 means you left the volume in <span class="unit">cm3</span>. 0.720 means you multiplied by the volume instead of dividing.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 200.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\">濃度 = <span class=\"frac\"><span>3.60 <span class=\"unit\">g</span></span><span>0.2000 <span class=\"unit\">dm3</span></span></span><br>&nbsp;&nbsp;= <strong>18.0 <span class=\"unit\">g dm-3</span></strong></div><p>常見失誤：得出 0.0180，表示你沒有把體積由 <span class=\"unit\">cm3</span> 換算過來。得出 0.720，表示你乘以體積，而不是除以體積。</p>",
    },

  }
});
