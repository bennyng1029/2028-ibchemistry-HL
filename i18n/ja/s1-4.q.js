/* s1-4.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-4.q', {
  questions: {

    // ── s1-4-q001 · mcq · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q001": {
      // EN: <p>Which statement describes <strong>one mole</strong> of a substance?</p>
      stem: "<p>物質の<strong>1 モル</strong>を正しく説明している文はどれですか。</p>",
      options: [
        // EN: It has a mass of 6.02 × 10<sup>23</sup> <span class="unit">g</span>.
        "質量が 6.02 × 10<sup>23</sup> <span class=\"unit\">g</span> である。",
        // EN: It contains the number of elementary entities given by the Avogadro constant.
        "アボガドロ定数で決まる数の要素粒子を含む。",
        // EN: It is the mass of one atom compared with an atom of carbon-12.
        "原子 1 個の質量を、炭素 12 の原子とくらべた値である。",
        // EN: It is 12 <span class="unit">g</span> of any element.
        "どの元素でも 12 <span class=\"unit\">g</span> のことである。",
      ],
      hints: [
        // EN: The mole is the SI unit of <em>amount of substance</em>. It is a counting unit, like a dozen, but much bigger.
        "モルは<em>物質量</em> (amount of substance) の SI 単位です。「ダース」のように個数を数える単位ですが、ずっと大きな数を表します。",
        // EN: The count is fixed by a constant in your data booklet. Its symbol is <i>N</i><sub>A</sub>.
        "その個数は、データブックレットにある定数で決まっています。記号は <i>N</i><sub>A</sub> です。",
      ],
      // EN: <p>One mole contains exactly the number of elementary entities given by the Avogadro constant, <i>N</i><sub>A</sub> = 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span>. The entities can be atoms, molecules, ions, electrons or any specified group of particles.</p>
      solution: "<p>1 モルは、アボガドロ定数 <i>N</i><sub>A</sub> = 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span> で決まる数の要素粒子 (elementary entities) を、ちょうど含みます。要素粒子は、原子、分子、イオン、電子のどれでもよく、指定した粒子の集まりでもかまいません。</p>",
      misconception: {
        // EN (option A): 6.02 × 10<sup>23</sup> is a number of particles, not a mass in grams. The mass of one mole is the molar mass, and it is different for each substance.
        "0": "6.02 × 10<sup>23</sup> は粒子の個数で、グラム単位の質量ではありません。1 モルの質量はモル質量で、物質ごとに違います。",
        // EN (option C): That describes relative atomic mass. The mole counts particles. It does not compare masses.
        "2": "これは相対原子質量の説明です。モルは粒子の数を数える単位で、質量をくらべるものではありません。",
        // EN (option D): 12 <span class="unit">g</span> is one mole only for carbon-12. One mole of another element has a different mass.
        "3": "12 <span class=\"unit\">g</span> が 1 モルになるのは炭素 12 だけです。ほかの元素では、1 モルの質量は違います。",
      },
    },

    // ── s1-4-q002 · numeric · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q002": {
      // EN: <p>How many molecules are there in 0.450 <span class="unit">mol</span> of water, <span class="chem">H2O</span>? Give your answer to 3 significant figures.</p>
      stem: "<p>0.450 <span class=\"unit\">mol</span> の水 <span class=\"chem\">H2O</span> には、分子が何個ありますか。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: Use the relationship between number of particles and amount: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "粒子の数と物質量の関係を使います：<span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>。",
        // EN: Going from moles to particles makes the number much bigger, so you multiply by 6.02 × 10<sup>23</sup>.
        "モルから粒子の数に直すと、数はずっと大きくなります。だから 6.02 × 10<sup>23</sup> をかけます。",
      ],
      // EN: <div class="worked__math"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></div><div class="worked__math"><i>N</i> = 0.450 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></div><div class="worked__math"><i>N</i> = 2.709 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>2.71 × 10<sup>23</sup> molecules</strong></div><p>Check the size: you have less than one mole, so the answer must be less than 6.02 × 10<sup>23</sup>. If you divided instead of multiplying you would get a number far smaller than 1, which cannot be a count of molecules.</p>
      solution: "<div class=\"worked__math\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></div><div class=\"worked__math\"><i>N</i> = 0.450 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></div><div class=\"worked__math\"><i>N</i> = 2.709 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>2.71 × 10<sup>23</sup> 個の分子</strong></div><p>大きさを確かめましょう。1 モルより少ないので、答えは 6.02 × 10<sup>23</sup> より小さいはずです。かけ算ではなくわり算をすると、1 よりずっと小さい数になります。分子の個数がそんな数になることはありません。</p>",
    },

    // ── s1-4-q003 · numeric · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q003": {
      // EN: <p>A sample of water contains 9.03 × 10<sup>22</sup> molecules. Calculate the amount of water, in <span class="unit">mol</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>水の試料に 9.03 × 10<sup>22</sup> 個の分子が含まれています。水の物質量を <span class=\"unit\">mol</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: Rearrange <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> to make <i>n</i> the subject.
        "<span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> を変形して、<i>n</i> を求める式にします。",
        // EN: Going from particles to moles makes the number much smaller, so you divide by 6.02 × 10<sup>23</sup>. Compare the powers of ten first: 10<sup>22</sup> is less than 10<sup>23</sup>, so the answer is less than 1 mol.
        "粒子の数からモルに直すと、数はずっと小さくなります。だから 6.02 × 10<sup>23</sup> でわります。先に 10 の何乗かをくらべましょう。10<sup>22</sup> は 10<sup>23</sup> より小さいので、答えは 1 mol より小さくなります。",
      ],
      // EN: <div class="worked__math"><i>n</i> = <span class="frac"><span><i>N</i></span><span><i>N</i><sub>A</sub></span></span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>9.03 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span></div><div class="worked__math"><i>n</i> = <strong>0.150 <span class="unit">mol</span></strong></div><p>If you multiplied by <i>N</i><sub>A</sub> instead, you would get about 5 × 10<sup>46</sup>, which is not a sensible amount in moles.</p>
      solution: "<div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span><i>N</i></span><span><i>N</i><sub>A</sub></span></span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>9.03 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span></div><div class=\"worked__math\"><i>n</i> = <strong>0.150 <span class=\"unit\">mol</span></strong></div><p>まちがえて <i>N</i><sub>A</sub> をかけると、約 5 × 10<sup>46</sup> になります。モル単位の物質量として、ありえない大きさです。</p>",
    },

    // ── s1-4-q004 · mcq · exam · SL · Structure 1.4.1 · 1 mark
    "s1-4-q004": {
      // EN: <p>What is the total number of <strong>atoms</strong> in 0.500 <span class="unit">mol</span> of ammonia, <span class="chem">NH3</span>?</p>
      stem: "<p>0.500 <span class=\"unit\">mol</span> のアンモニア <span class=\"chem\">NH3</span> に含まれる<strong>原子</strong>の総数はいくつですか。</p>",
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
        "まず <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> で分子の数を求めます。",
        // EN: Then ask: how many atoms are in one molecule of <span class="chem">NH3</span>? Multiply by that number.
        "次に、<span class=\"chem\">NH3</span> 1 分子に原子が何個あるかを考えます。その数をかけましょう。",
      ],
      // EN: <div class="worked__math"><i>N</i> = 0.500 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= 3.01 × 10<sup>23</sup> molecules</div><p>Each <span class="chem">NH3</span> molecule contains 1 N atom and 3 H atoms: 4 atoms.</p><div class="worked__math"><i>N</i>(atoms) = 4 × 3.01 × 10<sup>23</sup><br>&nbsp;&nbsp;= 1.204 × 10<sup>24</sup><br>&nbsp;&nbsp;= <strong>1.20 × 10<sup>24</sup></strong></div>
      solution: "<div class=\"worked__math\"><i>N</i> = 0.500 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= 3.01 × 10<sup>23</sup> 個の分子</div><p><span class=\"chem\">NH3</span> 1 分子には、N 原子が 1 個と H 原子が 3 個あります。合わせて 4 個の原子です。</p><div class=\"worked__math\"><i>N</i>(原子) = 4 × 3.01 × 10<sup>23</sup><br>&nbsp;&nbsp;= 1.204 × 10<sup>24</sup><br>&nbsp;&nbsp;= <strong>1.20 × 10<sup>24</sup></strong></div>",
      misconception: {
        // EN (option A): This is the number of <span class="chem">NH3</span> <em>molecules</em> (0.500 × 6.02 × 10<sup>23</sup>). The question asks for atoms, and each molecule contains 4 atoms.
        "0": "これは <span class=\"chem\">NH3</span> <em>分子</em>の数です（0.500 × 6.02 × 10<sup>23</sup>）。問われているのは原子の数で、1 分子に原子が 4 個あります。",
        // EN (option B): You multiplied by 3, so you counted only the hydrogen atoms. Each <span class="chem">NH3</span> molecule has 1 N atom and 3 H atoms: 4 atoms in total.
        "1": "3 をかけたので、水素原子だけを数えています。<span class=\"chem\">NH3</span> 1 分子には N 原子 1 個と H 原子 3 個があり、合わせて 4 個です。",
        // EN (option D): You divided by the Avogadro constant instead of multiplying. A count of atoms in a visible sample must be a very large number.
        "3": "アボガドロ定数をかけるところで、わってしまいました。目に見える量の試料に含まれる原子の数は、とても大きな数になるはずです。",
      },
    },

    // ── s1-4-q005 · mcq · exam · SL · Structure 1.4.1 · 1 mark
    "s1-4-q005": {
      // EN: <p>What is the total number of <strong>ions</strong> in 0.20 <span class="unit">mol</span> of aluminium sulfate, <span class="chem">Al2(SO4)3</span>?</p>
      stem: "<p>0.20 <span class=\"unit\">mol</span> の硫酸アルミニウム <span class=\"chem\">Al2(SO4)3</span> に含まれる<strong>イオン</strong>の総数はいくつですか。</p>",
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
        "組成式単位 (formula unit)、つまり組成式 1 つ分に含まれるイオンを書き出しましょう。<span class=\"chem\">Al^3+</span> は何個、<span class=\"chem\">SO4^2-</span> は何個ですか。",
        // EN: A polyatomic ion such as <span class="chem">SO4^2-</span> counts as one ion. Find the amount of ions in mol, then multiply by <i>N</i><sub>A</sub>.
        "<span class=\"chem\">SO4^2-</span> のような多原子イオンは、1 個のイオンとして数えます。イオンの物質量を mol で求めてから、<i>N</i><sub>A</sub> をかけます。",
      ],
      // EN: <p>One formula unit contains 2 <span class="chem">Al^3+</span> ions and 3 <span class="chem">SO4^2-</span> ions: 5 ions.</p><div class="worked__math"><i>n</i>(ions) = 5 × 0.20 <span class="unit">mol</span><br>&nbsp;&nbsp;= 1.0 <span class="unit">mol</span></div><div class="worked__math"><i>N</i>(ions) = 1.0 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>6.0 × 10<sup>23</sup></strong></div>
      solution: "<p>組成式単位 1 つ（組成式 1 つ分）には、<span class=\"chem\">Al^3+</span> イオンが 2 個、<span class=\"chem\">SO4^2-</span> イオンが 3 個あります。合わせて 5 個のイオンです。</p><div class=\"worked__math\"><i>n</i>(イオン) = 5 × 0.20 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 1.0 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>N</i>(イオン) = 1.0 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>6.0 × 10<sup>23</sup></strong></div>",
      misconception: {
        // EN (option A): This is the number of formula units (0.20 × 6.02 × 10<sup>23</sup>). Each formula unit contains more than one ion.
        "0": "これは組成式単位の数です（0.20 × 6.02 × 10<sup>23</sup>）。組成式単位 1 つには、イオンが複数含まれます。",
        // EN (option B): You counted 2 ions per formula unit, one kind of positive ion and one kind of negative ion. Use the subscripts: there are 2 <span class="chem">Al^3+</span> and 3 <span class="chem">SO4^2-</span>, which is 5 ions.
        "1": "陽イオン 1 種類と陰イオン 1 種類と考えて、組成式単位 1 つにイオン 2 個と数えました。添え字を使いましょう。<span class=\"chem\">Al^3+</span> が 2 個、<span class=\"chem\">SO4^2-</span> が 3 個で、イオンは 5 個です。",
        // EN (option D): You counted all 17 <em>atoms</em> in the formula. A sulfate ion, <span class="chem">SO4^2-</span>, is one ion even though it contains 5 atoms.
        "3": "式の中の<em>原子</em> 17 個をすべて数えました。硫酸イオン <span class=\"chem\">SO4^2-</span> は原子を 5 個含みますが、イオンとしては 1 個です。",
      },
    },

    // ── s1-4-q006 · multi · foundation · SL · Structure 1.4.1 · 1 mark
    "s1-4-q006": {
      // EN: <p>Which statements about the mole are correct? Select <strong>all</strong> that apply.</p>
      stem: "<p>モルについて正しい文はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p>",
      options: [
        // EN: The mole is the SI unit of amount of substance.
        "モルは物質量の SI 単位である。",
        // EN: One mole of any substance has a mass of 6.02 × 10<sup>23</sup> <span class="unit">g</span>.
        "どの物質も、1 モルの質量は 6.02 × 10<sup>23</sup> <span class=\"unit\">g</span> である。",
        // EN: 1 <span class="unit">mol</span> of <span class="chem">H2O</span> molecules and 1 <span class="unit">mol</span> of <span class="chem">Fe</span> atoms contain the same number of particles.
        "1 <span class=\"unit\">mol</span> の <span class=\"chem\">H2O</span> 分子と 1 <span class=\"unit\">mol</span> の <span class=\"chem\">Fe</span> 原子は、同じ数の粒子を含む。",
        // EN: The Avogadro constant has the units <span class="unit">mol-1</span>.
        "アボガドロ定数の単位は <span class=\"unit\">mol-1</span> である。",
        // EN: 1 <span class="unit">mol</span> of <span class="chem">O2</span> molecules contains 6.02 × 10<sup>23</sup> oxygen atoms.
        "1 <span class=\"unit\">mol</span> の <span class=\"chem\">O2</span> 分子は、6.02 × 10<sup>23</sup> 個の酸素原子を含む。",
      ],
      hints: [
        // EN: A mole is a fixed number of particles. Always ask: a mole of what?
        "1 モルは、決まった数の粒子の集まりです。いつも「何の 1 モルか」を確かめましょう。",
        // EN: For the last statement, count the atoms in one <span class="chem">O2</span> molecule.
        "最後の文は、<span class=\"chem\">O2</span> 1 分子の原子の数を数えて考えます。",
      ],
      // EN: <p>The mole is the SI unit of amount of substance. One mole of anything contains 6.02 × 10<sup>23</sup> of the specified entities, so 1 mol of water molecules and 1 mol of iron atoms hold the same number of particles. <i>N</i><sub>A</sub> means "per mole", so its units are <span class="unit">mol-1</span>.</p><p>The two wrong statements mix up number with mass, and molecules with atoms.</p>
      solution: "<p>モルは物質量の SI 単位です。どんなものでも、1 モルは指定した粒子を 6.02 × 10<sup>23</sup> 個含みます。だから、水分子 1 mol と鉄原子 1 mol は同じ数の粒子を含みます。<i>N</i><sub>A</sub> は「1 モルあたり」という意味なので、単位は <span class=\"unit\">mol-1</span> です。</p><p>まちがっている 2 つの文は、個数と質量、分子と原子をそれぞれ取り違えています。</p>",
      misconception: {
        // EN (option B): 6.02 × 10<sup>23</sup> is a number of particles, not a mass. The mass of one mole is the molar mass, which is different for each substance.
        "1": "6.02 × 10<sup>23</sup> は粒子の個数で、質量ではありません。1 モルの質量はモル質量で、物質ごとに違います。",
        // EN (option E): There are 6.02 × 10<sup>23</sup> <span class="chem">O2</span> <em>molecules</em>. Each molecule has 2 atoms, so there are 1.20 × 10<sup>24</sup> oxygen atoms.
        "4": "6.02 × 10<sup>23</sup> 個あるのは <span class=\"chem\">O2</span> <em>分子</em>です。1 分子に原子が 2 個あるので、酸素原子は 1.20 × 10<sup>24</sup> 個です。",
      },
    },

    // ── s1-4-q007 · mcq · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q007": {
      // EN: <p>Relative atomic masses compare the mass of an atom with a standard. What is the standard?</p>
      stem: "<p>相対原子質量は、原子の質量をある基準とくらべた値です。その基準は何ですか。</p>",
      options: [
        // EN: The mass of one atom of hydrogen-1
        "水素 1 の原子 1 個の質量",
        // EN: The mass of one atom of carbon-12
        "炭素 12 の原子 1 個の質量",
        // EN: <span class="frac"><span>1</span><span>12</span></span> of the mass of one atom of carbon-12
        "炭素 12 の原子 1 個の質量の <span class=\"frac\"><span>1</span><span>12</span></span>",
        // EN: <span class="frac"><span>1</span><span>16</span></span> of the mass of one atom of oxygen-16
        "酸素 16 の原子 1 個の質量の <span class=\"frac\"><span>1</span><span>16</span></span>",
      ],
      hints: [
        // EN: The scale is set so that one atom of a particular carbon isotope has a relative mass of exactly 12.
        "この尺度では、炭素のある同位体の原子 1 個の相対質量を、ちょうど 12 と決めています。",
        // EN: If the whole atom is 12 units, what fraction of the atom is 1 unit?
        "原子全体が 12 単位なら、1 単位は原子全体の何分の 1 にあたりますか。",
      ],
      // EN: <p>Masses of atoms are compared on a scale relative to carbon-12. One atom of <span class="chem">^12C</span> is given a mass of exactly 12, so the unit of the scale is <span class="frac"><span>1</span><span>12</span></span> of the mass of a carbon-12 atom.</p>
      solution: "<p>原子の質量は、炭素 12 を基準にした尺度でくらべます。<span class=\"chem\">^12C</span> の原子 1 個の質量をちょうど 12 と決めるので、尺度の 1 単位は炭素 12 の原子の質量の <span class=\"frac\"><span>1</span><span>12</span></span> です。</p>",
      misconception: {
        // EN (option A): Hydrogen has a relative atomic mass close to 1, but it is not the standard. The scale is defined using carbon-12.
        "0": "水素の相対原子質量は 1 に近いですが、基準ではありません。尺度は炭素 12 を使って定義されています。",
        // EN (option B): Right isotope, but the whole atom is not the unit. If it were, carbon-12 would have a relative mass of 1, not 12.
        "1": "同位体は合っています。でも、原子まるごとが 1 単位ではありません。もしそうなら、炭素 12 の相対質量は 12 ではなく 1 になってしまいます。",
        // EN (option D): An oxygen scale was used in the past. The scale used now, and by the IB, is based on carbon-12.
        "3": "昔は酸素を基準にした尺度が使われていました。今の尺度は炭素 12 が基準で、IB もこれを使います。",
      },
    },

    // ── s1-4-q008 · mcq · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q008": {
      // EN: <p>Which is the relative formula mass, <i>M</i><sub>r</sub>, of calcium hydroxide, <span class="chem">Ca(OH)2</span>?</p><p>Use <i>A</i><sub>r</sub>: Ca = 40.08, O = 16.00, H = 1.01.</p>
      stem: "<p>水酸化カルシウム <span class=\"chem\">Ca(OH)2</span> の相対式量 <i>M</i><sub>r</sub> はどれですか。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：Ca = 40.08、O = 16.00、H = 1.01</p>",
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
        "化学式に含まれるすべての原子の相対原子質量を足します。",
        // EN: The 2 outside the bracket multiplies both O and H. Also think about whether a <em>relative</em> mass has units.
        "かっこの外の 2 は、O と H の両方にかかります。<em>相対</em>質量に単位があるかどうかも考えましょう。",
      ],
      // EN: <div class="worked__math"><i>M</i><sub>r</sub> = 40.08 + 2 × (16.00 + 1.01)</div><div class="worked__math"><i>M</i><sub>r</sub> = 40.08 + 34.02<br>&nbsp;&nbsp;= <strong>74.10</strong> (no units)</div><p><i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> are ratios, so they have no units. Molar mass has the same number with units of <span class="unit">g mol-1</span>.</p>
      solution: "<div class=\"worked__math\"><i>M</i><sub>r</sub> = 40.08 + 2 × (16.00 + 1.01)</div><div class=\"worked__math\"><i>M</i><sub>r</sub> = 40.08 + 34.02<br>&nbsp;&nbsp;= <strong>74.10</strong> （単位なし）</div><p><i>A</i><sub>r</sub> と <i>M</i><sub>r</sub> は比なので、単位がありません。モル質量は数値が同じで、単位 <span class=\"unit\">g mol-1</span> が付きます。</p>",
      misconception: {
        // EN (option A): You added one Ca, one O and one H. The subscript 2 outside the bracket means there are two O atoms and two H atoms.
        "0": "Ca、O、H を 1 個ずつ足しました。かっこの外の添え字 2 は、O 原子が 2 個、H 原子が 2 個あるという意味です。",
        // EN (option B): You applied the subscript 2 to hydrogen only. A subscript outside a bracket multiplies <em>everything</em> inside the bracket.
        "1": "添え字 2 を水素だけにかけました。かっこの外の添え字は、かっこの中の<em>すべて</em>にかかります。",
        // EN (option D): The number is right, but relative formula mass has no units. 74.10 <span class="unit">g mol-1</span> is the molar mass, <i>M</i>.
        "3": "数値は合っていますが、相対式量に単位はありません。74.10 <span class=\"unit\">g mol-1</span> はモル質量 <i>M</i> です。",
      },
    },

    // ── s1-4-q009 · numeric · foundation · SL · Structure 1.4.2 · 1 mark
    "s1-4-q009": {
      // EN: <p>Calculate the relative formula mass, <i>M</i><sub>r</sub>, of iron(III) sulfate, <span class="chem">Fe2(SO4)3</span>. Give your answer to 2 decimal places.</p><p>Use the data booklet values: Fe = 55.85, S = 32.07, O = 16.00.</p>
      stem: "<p>硫酸鉄(III) <span class=\"chem\">Fe2(SO4)3</span> の相対式量 <i>M</i><sub>r</sub> を計算しなさい (calculate)。小数第 2 位まで答えましょう。</p><p>データブックレットの値を使いましょう：Fe = 55.85、S = 32.07、O = 16.00</p>",
      hints: [
        // EN: Count the atoms of each element first. The subscript 3 outside the bracket multiplies everything inside it.
        "まず、元素ごとに原子の数を数えます。かっこの外の添え字 3 は、かっこの中のすべてにかかります。",
        // EN: There are 2 Fe, 3 S and 3 × 4 = 12 O. Use the 2 decimal place <i>A</i><sub>r</sub> values, not whole numbers.
        "Fe が 2 個、S が 3 個、O が 3 × 4 = 12 個です。<i>A</i><sub>r</sub> は整数に丸めず、小数第 2 位までの値を使いましょう。",
      ],
      // EN: <p>Count the atoms in <span class="chem">Fe2(SO4)3</span>: 2 Fe, 3 S and 3 × 4 = 12 O.</p><div class="worked__math"><i>M</i><sub>r</sub> = (2 × 55.85) + (3 × 32.07)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (12 × 16.00)</div><div class="worked__math"><i>M</i><sub>r</sub> = 111.70 + 96.21 + 192.00<br>&nbsp;&nbsp;= <strong>399.91</strong> (no units)</div><p>Named slips: ignoring the bracket gives 207.77 (one S and four O). Using 3 S but only 4 O gives 271.91. Using whole-number <i>A</i><sub>r</sub> values gives 400. The guide says to use the two-decimal-place values from the data booklet.</p>
      solution: "<p><span class=\"chem\">Fe2(SO4)3</span> の原子を数えます。Fe が 2 個、S が 3 個、O が 3 × 4 = 12 個です。</p><div class=\"worked__math\"><i>M</i><sub>r</sub> = (2 × 55.85) + (3 × 32.07)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (12 × 16.00)</div><div class=\"worked__math\"><i>M</i><sub>r</sub> = 111.70 + 96.21 + 192.00<br>&nbsp;&nbsp;= <strong>399.91</strong> （単位なし）</div><p>よくあるミス：かっこを無視すると 207.77 になります（S を 1 個、O を 4 個と数えた場合）。S を 3 個にしても、O を 4 個のままにすると 271.91 です。整数の <i>A</i><sub>r</sub> を使うと 400 になります。『指導の手引き』は、データブックレットにある小数第 2 位までの値を使うよう求めています。</p>",
    },

    // ── s1-4-q010 · short · exam · SL · Structure 1.4.2 · 2 marks
    "s1-4-q010": {
      // EN: <p>Chlorine has a relative atomic mass of 35.45.</p><p>State what is meant by <strong>relative atomic mass</strong>, and state its units.</p>
      stem: "<p>塩素の相対原子質量は 35.45 です。</p><p><strong>相対原子質量</strong> (relative atomic mass) とは何かを述べなさい (state)。その単位も述べなさい。</p>",
      hints: [
        // EN: There are two ideas in the definition: an average over the isotopes, and a comparison with a standard atom.
        "定義には 2 つの考えが入ります。同位体についての平均であること、そして基準の原子とくらべた値であることです。",
        // EN: A <em>relative</em> mass is one mass divided by another mass. What happens to the units?
        "<em>相対</em>質量は、ある質量を別の質量でわった値です。単位はどうなりますか。",
      ],
      // EN: <p>Chlorine is a mixture of isotopes, so its relative atomic mass is a weighted average, which is why it is not a whole number. The comparison is with <span class="frac"><span>1</span><span>12</span></span> of the mass of a <span class="chem">^12C</span> atom. Because it is a ratio of two masses, it has no units.</p>
      solution: "<p>塩素は同位体の混合物なので、相対原子質量は加重平均（存在比をかけた平均）です。だから整数になりません。くらべる相手は、<span class=\"chem\">^12C</span> 原子の質量の <span class=\"frac\"><span>1</span><span>12</span></span> です。2 つの質量の比なので、単位はありません。</p>",
      // EN: <p>Relative atomic mass is the weighted average mass of the atoms of an element (taking the abundance of its isotopes into account), compared with <span class="frac"><span>1</span><span>12</span></span> of the mass of an atom of carbon-12. It has no units.</p>
      answer: "<p>相対原子質量は、ある元素の原子の質量の加重平均（同位体の存在比を考えに入れた平均）を、炭素 12 の原子 1 個の質量の <span class=\"frac\"><span>1</span><span>12</span></span> とくらべた値である。単位はない。</p>",
      markscheme: [
        // EN: Weighted average mass of the atoms (or isotopes) of an element, relative to 1/12 of the mass of an atom of carbon-12. (Accept "compared with carbon-12 taken as exactly 12".)
        "ある元素の原子（または同位体）の質量の加重平均を、炭素 12 の原子 1 個の質量の 1/12 を基準として表した値。（「炭素 12 をちょうど 12 としてくらべた値」も認める。）",
        // EN: It has no units. (Do not accept g or g mol⁻¹.)
        "単位はない。（g や g mol⁻¹ は認めない。）",
      ],
    },

    // ── s1-4-q011 · mcq · exam · SL · Structure 1.4.2 · 1 mark
    "s1-4-q011": {
      // EN: <p>What is the molar mass of hydrated copper(II) sulfate, <span class="chem">CuSO4.5H2O</span>, in <span class="unit">g mol-1</span>?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, S = 32.07, O = 16.00, H = 1.01.</p>
      stem: "<p>硫酸銅(II) の水和物 <span class=\"chem\">CuSO4.5H2O</span> のモル質量は何 <span class=\"unit\">g mol-1</span> ですか。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：Cu = 63.55、S = 32.07、O = 16.00、H = 1.01</p>",
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
        "化学式の中の点は「〜と結びついている」という意味です。<span class=\"chem\">CuSO4</span> の質量に、水の質量を足します。",
        // EN: Work out <i>M</i>(<span class="chem">CuSO4</span>) and <i>M</i>(<span class="chem">H2O</span>) separately. Then add five lots of water.
        "<i>M</i>(<span class=\"chem\">CuSO4</span>) と <i>M</i>(<span class=\"chem\">H2O</span>) を別々に求めます。それから、水 5 個分を足します。",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">CuSO4</span>) = 63.55 + 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 159.62 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">CuSO4.5H2O</span>) = 159.62 + (5 × 18.02)<br>&nbsp;&nbsp;= <strong>249.72 <span class="unit">g mol-1</span></strong></div>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">CuSO4</span>) = 63.55 + 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 159.62 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 159.62 + (5 × 18.02)<br>&nbsp;&nbsp;= <strong>249.72 <span class=\"unit\">g mol-1</span></strong></div>",
      misconception: {
        // EN (option A): This is the molar mass of anhydrous <span class="chem">CuSO4</span>. The water of crystallization is part of the formula and part of the mass you weigh.
        "0": "これは無水の <span class=\"chem\">CuSO4</span> のモル質量です。水和水 (water of crystallization) も化学式の一部で、はかった質量に含まれています。",
        // EN (option B): You added one <span class="chem">H2O</span> (18.02). The 5 in front of <span class="chem">H2O</span> means five water molecules per formula unit.
        "1": "<span class=\"chem\">H2O</span> を 1 個分（18.02）しか足していません。<span class=\"chem\">H2O</span> の前の 5 は、組成式単位 1 つにつき水分子が 5 個あるという意味です。",
        // EN (option C): You multiplied only the hydrogen by 5 (10 H and 1 O). The 5 multiplies the whole <span class="chem">H2O</span>: 10 H and 5 O.
        "2": "水素だけを 5 倍しました（H が 10 個、O が 1 個）。5 は <span class=\"chem\">H2O</span> 全体にかかります。H が 10 個、O が 5 個です。",
      },
    },

    // ── s1-4-q012 · numeric · foundation · SL · Structure 1.4.3 · 1 mark
    "s1-4-q012": {
      // EN: <p>Calculate the amount, in <span class="unit">mol</span>, of calcium carbonate in 25.0 <span class="unit">g</span> of <span class="chem">CaCO3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CaCO3</span>) = 100.09 <span class="unit">g mol-1</span></p>
      stem: "<p>25.0 <span class=\"unit\">g</span> の炭酸カルシウム <span class=\"chem\">CaCO3</span> の物質量を <span class=\"unit\">mol</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p><i>M</i>(<span class=\"chem\">CaCO3</span>) = 100.09 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: The relationship between amount, mass and molar mass is in your data booklet: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "物質量、質量、モル質量の関係式はデータブックレットにあります：<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>。",
        // EN: Mass is in <span class="unit">g</span> and molar mass is in <span class="unit">g mol-1</span>, so no unit conversion is needed. 25.0 g is less than 100.09 g, so the answer is less than 1 mol.
        "質量の単位は <span class=\"unit\">g</span>、モル質量の単位は <span class=\"unit\">g mol-1</span> なので、単位の換算はいりません。25.0 g は 100.09 g より小さいので、答えは 1 mol より小さくなります。",
      ],
      // EN: <div class="worked__math"><i>n</i> = <span class="frac"><span><i>m</i></span><span><i>M</i></span></span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>25.0 <span class="unit">g</span></span><span>100.09 <span class="unit">g mol-1</span></span></span></div><div class="worked__math"><i>n</i> = 0.24978 <span class="unit">mol</span> = <strong>0.250 <span class="unit">mol</span></strong></div><p>If you multiplied instead you would get about 2500, which fails the size check.</p>
      solution: "<div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>25.0 <span class=\"unit\">g</span></span><span>100.09 <span class=\"unit\">g mol-1</span></span></span></div><div class=\"worked__math\"><i>n</i> = 0.24978 <span class=\"unit\">mol</span> = <strong>0.250 <span class=\"unit\">mol</span></strong></div><p>まちがえてかけ算をすると約 2500 になります。大きさを確かめれば、おかしいと気づけます。</p>",
    },

    // ── s1-4-q013 · numeric · foundation · SL · Structure 1.4.3 · 1 mark
    "s1-4-q013": {
      // EN: <p>Calculate the mass, in <span class="unit">g</span>, of 0.350 <span class="unit">mol</span> of sulfuric acid, <span class="chem">H2SO4</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">H2SO4</span>) = 98.09 <span class="unit">g mol-1</span></p>
      stem: "<p>0.350 <span class=\"unit\">mol</span> の硫酸 (sulfuric acid) <span class=\"chem\">H2SO4</span> の質量を <span class=\"unit\">g</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p><i>M</i>(<span class=\"chem\">H2SO4</span>) = 98.09 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Start from <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> and rearrange it to make <i>m</i> the subject.
        "<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> から始めて、<i>m</i> を求める式に変形します。",
        // EN: <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>. Check the units: mol × g mol<sup>−1</sup> = g.
        "<span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> です。単位を確かめましょう。mol × g mol<sup>−1</sup> = g になります。",
      ],
      // EN: <div class="worked__math"><i>m</i> = <i>n</i> × <i>M</i></div><div class="worked__math"><i>m</i> = 0.350 <span class="unit">mol</span> × 98.09 <span class="unit">g mol-1</span></div><div class="worked__math"><i>m</i> = 34.33 <span class="unit">g</span> = <strong>34.3 <span class="unit">g</span></strong></div><p>Size check: about one third of a mole, so about one third of 98 g.</p>
      solution: "<div class=\"worked__math\"><i>m</i> = <i>n</i> × <i>M</i></div><div class=\"worked__math\"><i>m</i> = 0.350 <span class=\"unit\">mol</span> × 98.09 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>m</i> = 34.33 <span class=\"unit\">g</span> = <strong>34.3 <span class=\"unit\">g</span></strong></div><p>大きさの確認：約 3 分の 1 モルなので、質量も 98 g の約 3 分の 1 です。</p>",
    },

    // ── s1-4-q014 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q014": {
      // EN: <p>Calculate the number of molecules in 9.00 <span class="unit">g</span> of water, <span class="chem">H2O</span>. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, O = 16.00.</p>
      stem: "<p>9.00 <span class=\"unit\">g</span> の水 <span class=\"chem\">H2O</span> に含まれる分子の数を計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：H = 1.01、O = 16.00</p>",
      hints: [
        // EN: This is a two-step route: mass → amount → number of particles. You cannot go from grams to particles in one step.
        "2 段階の道すじです：質量 → 物質量 → 粒子の数。グラムから粒子の数へ、1 回で進むことはできません。",
        // EN: Step 1: <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> with <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. Step 2: <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "ステップ 1：<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> を使います。<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span> です。ステップ 2：<span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> を使います。",
        // EN: Keep all the digits of <i>n</i> in your calculator. Round only the final answer.
        "<i>n</i> の値は、全部の桁を電卓に残しておきます。丸めるのは最後の答えだけです。",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class="unit">g mol-1</span></div><div class="worked__math"><i>n</i> = <span class="frac"><span>9.00 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.49945 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>N</i> = 0.49945 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>3.01 × 10<sup>23</sup> molecules</strong> &nbsp; (M2)</div><p>The question asks for molecules. Multiplying by 3 as well would give the number of atoms (9.02 × 10<sup>23</sup>), which is a different question.</p>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">H2O</span>) = (2 × 1.01) + 16.00<br>&nbsp;&nbsp;= 18.02 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>n</i> = <span class=\"frac\"><span>9.00 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.49945 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>N</i> = 0.49945 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>3.01 × 10<sup>23</sup> 個の分子</strong> &nbsp; (M2)</div><p>問われているのは分子の数です。さらに 3 をかけると原子の数（9.02 × 10<sup>23</sup>）になり、別の問いの答えになってしまいます。</p>",
    },

    // ── s1-4-q015 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q015": {
      // EN: <p>Calculate the number of <strong>oxygen atoms</strong> in 8.80 <span class="unit">g</span> of carbon dioxide, <span class="chem">CO2</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span></p>
      stem: "<p>8.80 <span class=\"unit\">g</span> の二酸化炭素 <span class=\"chem\">CO2</span> に含まれる<strong>酸素原子</strong>の数を計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Route: mass → amount of <span class="chem">CO2</span> → amount of O atoms → number of O atoms.
        "道すじ：質量 → <span class=\"chem\">CO2</span> の物質量 → O 原子の物質量 → O 原子の数。",
        // EN: Each <span class="chem">CO2</span> molecule contains 2 oxygen atoms, so <i>n</i>(O) = 2 × <i>n</i>(<span class="chem">CO2</span>).
        "<span class=\"chem\">CO2</span> 1 分子には酸素原子が 2 個あります。だから <i>n</i>(O) = 2 × <i>n</i>(<span class=\"chem\">CO2</span>) です。",
        // EN: Finish with <span class="mono"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span>.
        "最後に <span class=\"mono\"><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub></span> を使います。",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">CO2</span>) = <span class="frac"><span>8.80 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.19995 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(O) = 2 × 0.19995 <span class="unit">mol</span><br>&nbsp;&nbsp;= 0.39991 <span class="unit">mol</span></div><div class="worked__math"><i>N</i>(O) = 0.39991 <span class="unit">mol</span> × 6.02 × 10<sup>23</sup> <span class="unit">mol-1</span><br>&nbsp;&nbsp;= <strong>2.41 × 10<sup>23</sup> atoms</strong> &nbsp; (M2)</div><p>Named slips: 1.20 × 10<sup>23</sup> is the number of <span class="chem">CO2</span> molecules (subscript not used). 3.61 × 10<sup>23</sup> is the number of all atoms (multiplied by 3, not 2).</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">CO2</span>) = <span class=\"frac\"><span>8.80 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.19995 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(O) = 2 × 0.19995 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 0.39991 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>N</i>(O) = 0.39991 <span class=\"unit\">mol</span> × 6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span><br>&nbsp;&nbsp;= <strong>2.41 × 10<sup>23</sup> 個の原子</strong> &nbsp; (M2)</div><p>よくあるミス：1.20 × 10<sup>23</sup> は <span class=\"chem\">CO2</span> 分子の数です（添え字を使っていない）。3.61 × 10<sup>23</sup> は全部の原子の数です（2 ではなく 3 をかけた）。</p>",
    },

    // ── s1-4-q016 · numeric · exam · SL · Structure 1.4.3 · 2 marks
    "s1-4-q016": {
      // EN: <p>Epsom salt is hydrated magnesium sulfate, <span class="chem">MgSO4.7H2O</span>.</p><p>Calculate the amount, in <span class="unit">mol</span>, of <strong>water molecules</strong> in 12.3 <span class="unit">g</span> of Epsom salt. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">MgSO4</span>) = 120.38 <span class="unit">g mol-1</span>, &nbsp; <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>エプソム塩 (Epsom salt) は、硫酸マグネシウムの水和物 <span class=\"chem\">MgSO4.7H2O</span> です。</p><p>12.3 <span class=\"unit\">g</span> のエプソム塩に含まれる<strong>水分子</strong>の物質量を <span class=\"unit\">mol</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p><i>M</i>(<span class=\"chem\">MgSO4</span>) = 120.38 <span class=\"unit\">g mol-1</span>, &nbsp; <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: The 12.3 g is hydrated salt, so you need the molar mass of the whole formula, water included.
        "12.3 g は水和物の質量です。だから、水も含めた化学式全体のモル質量が必要です。",
        // EN: <i>M</i>(<span class="chem">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02). Use it in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "<i>M</i>(<span class=\"chem\">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02) です。これを <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> に使います。",
        // EN: One mole of the hydrate contains 7 mol of water molecules.
        "水和物 1 モルには、水分子が 7 mol 含まれます。",
      ],
      // EN: <div class="worked__math"><i>M</i>(<span class="chem">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02)<br>&nbsp;&nbsp;= 246.52 <span class="unit">g mol-1</span></div><div class="worked__math"><i>n</i>(hydrate) = <span class="frac"><span>12.3 <span class="unit">g</span></span><span>246.52 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.049895 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = 7 × 0.049895 <span class="unit">mol</span><br>&nbsp;&nbsp;= <strong>0.349 <span class="unit">mol</span></strong> &nbsp; (M2)</div><p>Named slip: dividing 12.3 g by the anhydrous molar mass (120.38) gives 0.715 mol. The solid you weighed includes its water, so the hydrated molar mass must be used.</p>
      solution: "<div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MgSO4.7H2O</span>) = 120.38 + (7 × 18.02)<br>&nbsp;&nbsp;= 246.52 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>n</i>(水和物) = <span class=\"frac\"><span>12.3 <span class=\"unit\">g</span></span><span>246.52 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.049895 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = 7 × 0.049895 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= <strong>0.349 <span class=\"unit\">mol</span></strong> &nbsp; (M2)</div><p>よくあるミス：12.3 g を無水物のモル質量（120.38）でわると 0.715 mol になります。はかった固体には水が含まれています。だから、水和物のモル質量を使わなければなりません。</p>",
    },

    // ── s1-4-q017 · mcq · exam · SL · Structure 1.4.3 · 1 mark
    "s1-4-q017": {
      // EN: <p>What is the mass, in <span class="unit">g</span>, of <strong>one molecule</strong> of water?</p><p><i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>水<strong>1 分子</strong>の質量は何 <span class=\"unit\">g</span> ですか。</p><p><i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
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
        "18.02 g は、分子 1 モル分の質量です。この質量を、何個の分子で分け合っていますか。",
        // EN: Share the mass equally: divide the molar mass by <i>N</i><sub>A</sub>. Expect a very small number.
        "質量を等しく分けます。モル質量を <i>N</i><sub>A</sub> でわりましょう。とても小さい数になるはずです。",
      ],
      // EN: <p>One mole of water molecules has a mass of 18.02 <span class="unit">g</span>. That mass is shared between 6.02 × 10<sup>23</sup> molecules.</p><div class="worked__math"><i>m</i>(one molecule) = <span class="frac"><span>18.02 <span class="unit">g mol-1</span></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span></div><div class="worked__math"><i>m</i>(one molecule) = <strong>2.99 × 10<sup>−23</sup> <span class="unit">g</span></strong></div>
      solution: "<p>水分子 1 モルの質量は 18.02 <span class=\"unit\">g</span> です。この質量を、6.02 × 10<sup>23</sup> 個の分子で分け合っています。</p><div class=\"worked__math\"><i>m</i>(1 分子) = <span class=\"frac\"><span>18.02 <span class=\"unit\">g mol-1</span></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span></div><div class=\"worked__math\"><i>m</i>(1 分子) = <strong>2.99 × 10<sup>−23</sup> <span class=\"unit\">g</span></strong></div>",
      misconception: {
        // EN (option A): This is 1 ÷ <i>N</i><sub>A</sub>. You left out the molar mass. One mole of water has a mass of 18.02 g, not 1 g.
        "0": "これは 1 ÷ <i>N</i><sub>A</sub> です。モル質量を入れ忘れています。水 1 モルの質量は 18.02 g で、1 g ではありません。",
        // EN (option C): You divided <i>N</i><sub>A</sub> by the molar mass. That gives the number of molecules in 1 g of water, not the mass of one molecule.
        "2": "<i>N</i><sub>A</sub> をモル質量でわりました。これは水 1 g に含まれる分子の数で、1 分子の質量ではありません。",
        // EN (option D): You multiplied the molar mass by <i>N</i><sub>A</sub>. One molecule cannot have a larger mass than a whole mole of molecules.
        "3": "モル質量に <i>N</i><sub>A</sub> をかけました。1 個の分子の質量が、分子 1 モル全体の質量より大きくなることはありません。",
      },
    },

    // ── s1-4-q018 · mcq · exam · SL · Structure 1.4.3 · 1 mark
    "s1-4-q018": {
      // EN: <p>Which sample contains the greatest total number of <strong>atoms</strong>?</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, He = 4.00, C = 12.01, O = 16.00.</p>
      stem: "<p><strong>原子</strong>の総数が最も多い試料はどれですか。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：H = 1.01、He = 4.00、C = 12.01、O = 16.00</p>",
      options: [
        // EN: 4.00 <span class="unit">g</span> of helium, <span class="chem">He</span>
        "4.00 <span class=\"unit\">g</span> のヘリウム <span class=\"chem\">He</span>",
        // EN: 16.0 <span class="unit">g</span> of methane, <span class="chem">CH4</span>
        "16.0 <span class=\"unit\">g</span> のメタン <span class=\"chem\">CH4</span>",
        // EN: 27.0 <span class="unit">g</span> of water, <span class="chem">H2O</span>
        "27.0 <span class=\"unit\">g</span> の水 <span class=\"chem\">H2O</span>",
        // EN: 44.0 <span class="unit">g</span> of carbon dioxide, <span class="chem">CO2</span>
        "44.0 <span class=\"unit\">g</span> の二酸化炭素 <span class=\"chem\">CO2</span>",
      ],
      hints: [
        // EN: For each sample find the amount of molecules with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "それぞれの試料について、<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> で分子の物質量を求めます。",
        // EN: Then multiply by the number of atoms in one molecule. Compare amounts of atoms in mol. You do not need <i>N</i><sub>A</sub> to compare.
        "次に、1 分子に含まれる原子の数をかけます。原子の物質量を mol のままくらべましょう。くらべるだけなら <i>N</i><sub>A</sub> はいりません。",
      ],
      // EN: <div class="table-scroll"><table class="data"><thead><tr><th scope="col">Sample</th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>M</i> / g mol<sup>−1</sup></span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>n</i> / mol</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Atoms each</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0"><i>n</i>(atoms) / mol</span></th></tr></thead><tbody><tr><th scope="row"><span class="chem">He</span></th><td class="num">4.00</td><td class="num">1.00</td><td class="num">1</td><td class="num">1.00</td></tr><tr><th scope="row"><span class="chem">CH4</span></th><td class="num">16.05</td><td class="num">0.997</td><td class="num">5</td><td class="num"><strong>4.98</strong></td></tr><tr><th scope="row"><span class="chem">H2O</span></th><td class="num">18.02</td><td class="num">1.50</td><td class="num">3</td><td class="num">4.50</td></tr><tr><th scope="row"><span class="chem">CO2</span></th><td class="num">44.01</td><td class="num">1.00</td><td class="num">3</td><td class="num">3.00</td></tr></tbody></table></div><p>Methane has the largest amount of atoms, so it has the greatest number of atoms.</p>
      solution: "<div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">試料</th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>M</i> / g mol<sup>−1</sup></span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>n</i> / mol</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">1 個あたりの原子数</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\"><i>n</i>(原子) / mol</span></th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">He</span></th><td class=\"num\">4.00</td><td class=\"num\">1.00</td><td class=\"num\">1</td><td class=\"num\">1.00</td></tr><tr><th scope=\"row\"><span class=\"chem\">CH4</span></th><td class=\"num\">16.05</td><td class=\"num\">0.997</td><td class=\"num\">5</td><td class=\"num\"><strong>4.98</strong></td></tr><tr><th scope=\"row\"><span class=\"chem\">H2O</span></th><td class=\"num\">18.02</td><td class=\"num\">1.50</td><td class=\"num\">3</td><td class=\"num\">4.50</td></tr><tr><th scope=\"row\"><span class=\"chem\">CO2</span></th><td class=\"num\">44.01</td><td class=\"num\">1.00</td><td class=\"num\">3</td><td class=\"num\">3.00</td></tr></tbody></table></div><p>原子の物質量が最も大きいのはメタンです。だから、原子の数もメタンが最も多くなります。</p>",
      misconception: {
        // EN (option A): Helium atoms are light, but 4.00 g is only 1.00 mol of atoms. The other samples contain several atoms in every molecule.
        "0": "ヘリウム原子は軽いですが、4.00 g は原子 1.00 mol にすぎません。ほかの試料は、1 分子に原子がいくつも含まれます。",
        // EN (option C): Water has the most <em>molecules</em> here (1.50 mol), but each has only 3 atoms: 4.50 mol of atoms. Compare with 5 atoms per <span class="chem">CH4</span> molecule.
        "2": "この中で<em>分子</em>が最も多いのは水です（1.50 mol）。でも 1 分子に原子は 3 個だけなので、原子は 4.50 mol です。<span class=\"chem\">CH4</span> は 1 分子に原子が 5 個あります。くらべてみましょう。",
        // EN (option D): The largest mass does not mean the most atoms. 44.0 g of <span class="chem">CO2</span> is about 1.00 mol of molecules, which is 3.00 mol of atoms.
        "3": "質量が最も大きくても、原子が最も多いとはかぎりません。44.0 g の <span class=\"chem\">CO2</span> は分子が約 1.00 mol で、原子は 3.00 mol です。",
      },
    },

    // ── s1-4-q019 · numeric · challenge · SL · Structure 1.4.3 · 3 marks
    "s1-4-q019": {
      // EN: <p>A sample of magnesium chloride, <span class="chem">MgCl2</span>, contains 3.01 × 10<sup>22</sup> chloride ions.</p><p>Calculate the mass of the sample, in <span class="unit">g</span>. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: Mg = 24.31, Cl = 35.45.</p>
      stem: "<p>塩化マグネシウム <span class=\"chem\">MgCl2</span> の試料に、塩化物イオンが 3.01 × 10<sup>22</sup> 個含まれています。</p><p>この試料の質量を <span class=\"unit\">g</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：Mg = 24.31、Cl = 35.45</p>",
      hints: [
        // EN: Work backwards along the usual route: number of ions → amount of ions → amount of <span class="chem">MgCl2</span> → mass.
        "いつもの道すじを逆にたどります：イオンの数 → イオンの物質量 → <span class=\"chem\">MgCl2</span> の物質量 → 質量。",
        // EN: One formula unit of <span class="chem">MgCl2</span> contains 2 chloride ions. So is the amount of <span class="chem">MgCl2</span> bigger or smaller than the amount of <span class="chem">Cl-</span>?
        "<span class=\"chem\">MgCl2</span> の組成式単位 1 つ（組成式 1 つ分）には、塩化物イオンが 2 個あります。では、<span class=\"chem\">MgCl2</span> の物質量は <span class=\"chem\">Cl-</span> の物質量より大きいですか、小さいですか。",
        // EN: <i>n</i>(<span class="chem">MgCl2</span>) = <i>n</i>(<span class="chem">Cl-</span>) ÷ 2. Then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> with <i>M</i> = 95.21 <span class="unit">g mol-1</span>.
        "<i>n</i>(<span class=\"chem\">MgCl2</span>) = <i>n</i>(<span class=\"chem\">Cl-</span>) ÷ 2 です。次に <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> を使います。<i>M</i> = 95.21 <span class=\"unit\">g mol-1</span> です。",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">Cl-</span>) = <span class="frac"><span>3.01 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class="unit">mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0500 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">MgCl2</span>) = 0.0500 <span class="unit">mol</span> ÷ 2<br>&nbsp;&nbsp;= 0.0250 <span class="unit">mol</span> &nbsp; (M2)</div><div class="worked__math"><i>M</i>(<span class="chem">MgCl2</span>) = 24.31 + (2 × 35.45)<br>&nbsp;&nbsp;= 95.21 <span class="unit">g mol-1</span></div><div class="worked__math"><i>m</i> = 0.0250 <span class="unit">mol</span> × 95.21 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= <strong>2.38 <span class="unit">g</span></strong> &nbsp; (M3)</div><p>Named slips: 4.76 g means you did not divide by 2. 9.52 g means you multiplied by 2 instead of dividing. There are fewer formula units than chloride ions.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">Cl-</span>) = <span class=\"frac\"><span>3.01 × 10<sup>22</sup></span><span>6.02 × 10<sup>23</sup> <span class=\"unit\">mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0500 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">MgCl2</span>) = 0.0500 <span class=\"unit\">mol</span> ÷ 2<br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">mol</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MgCl2</span>) = 24.31 + (2 × 35.45)<br>&nbsp;&nbsp;= 95.21 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>m</i> = 0.0250 <span class=\"unit\">mol</span> × 95.21 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= <strong>2.38 <span class=\"unit\">g</span></strong> &nbsp; (M3)</div><p>よくあるミス：4.76 g は、2 でわらなかったときの値です。9.52 g は、2 でわるところで 2 をかけたときの値です。組成式単位の数は、塩化物イオンの数より少なくなります。</p>",
    },

    // ── s1-4-q020 · mcq · challenge · SL · Structure 1.4.3 · 1 mark
    "s1-4-q020": {
      // EN: <p>A student calculates the number of hydrogen atoms in 3.20 <span class="unit">g</span> of methane, <span class="chem">CH4</span>. Their working is shown.</p><ol><li><i>M</i>(<span class="chem">CH4</span>) = 12.01 + (4 × 1.01) = 16.05 <span class="unit">g mol-1</span></li><li><i>n</i>(<span class="chem">CH4</span>) = 3.20 ÷ 16.05 = 0.199 <span class="unit">mol</span></li><li>Number of molecules = 0.199 × 6.02 × 10<sup>23</sup> = 1.20 × 10<sup>23</sup></li><li>Number of H atoms = 1.20 × 10<sup>23</sup> ÷ 4 = 3.00 × 10<sup>22</sup></li></ol><p>Which line contains the error?</p>
      stem: "<p>ある生徒が、3.20 <span class=\"unit\">g</span> のメタン <span class=\"chem\">CH4</span> に含まれる水素原子の数を計算しました。途中の計算は次のとおりです。</p><ol><li><i>M</i>(<span class=\"chem\">CH4</span>) = 12.01 + (4 × 1.01) = 16.05 <span class=\"unit\">g mol-1</span></li><li><i>n</i>(<span class=\"chem\">CH4</span>) = 3.20 ÷ 16.05 = 0.199 <span class=\"unit\">mol</span></li><li>分子の数 = 0.199 × 6.02 × 10<sup>23</sup> = 1.20 × 10<sup>23</sup></li><li>H 原子の数 = 1.20 × 10<sup>23</sup> ÷ 4 = 3.00 × 10<sup>22</sup></li></ol><p>まちがいがあるのは何行目ですか。</p>",
      options: [
        // EN: Line 1
        "1 行目",
        // EN: Line 2
        "2 行目",
        // EN: Line 3
        "3 行目",
        // EN: Line 4
        "4 行目",
      ],
      hints: [
        // EN: Check each line for two things: the right relationship, and an answer that moves in a sensible direction.
        "各行で 2 つのことを確かめます。関係式は正しいですか。答えは、納得できる向きに大きく（または小さく）なっていますか。",
        // EN: Should there be more hydrogen atoms than molecules, or fewer?
        "水素原子の数は、分子の数より多いはずですか、少ないはずですか。",
      ],
      // EN: <p>Lines 1 to 3 are correct. In line 4 the student divided by 4. Each <span class="chem">CH4</span> molecule contains 4 hydrogen atoms, so there are 4 times <em>more</em> H atoms than molecules.</p><div class="worked__math"><i>N</i>(H) = 4 × 1.20 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>4.80 × 10<sup>23</sup></strong></div>
      solution: "<p>1〜3 行目は正しいです。4 行目で、生徒は 4 でわっています。<span class=\"chem\">CH4</span> 1 分子には水素原子が 4 個あります。だから H 原子の数は、分子の数の 4 倍に<em>増えます</em>。</p><div class=\"worked__math\"><i>N</i>(H) = 4 × 1.20 × 10<sup>23</sup><br>&nbsp;&nbsp;= <strong>4.80 × 10<sup>23</sup></strong></div>",
      misconception: {
        // EN (option A): Line 1 is correct: one C and four H gives 16.05 <span class="unit">g mol-1</span>. Look for a step where the answer moves in the wrong direction.
        "0": "1 行目は正しいです。C が 1 個、H が 4 個で 16.05 <span class=\"unit\">g mol-1</span> になります。答えがおかしな向きに変わっているステップを探しましょう。",
        // EN (option B): Line 2 is correct: <i>n</i> = <i>m</i> ÷ <i>M</i> with mass in g and molar mass in g mol<sup>−1</sup>.
        "1": "2 行目は正しいです。<i>n</i> = <i>m</i> ÷ <i>M</i> で、質量は g、モル質量は g mol<sup>−1</sup> です。",
        // EN (option C): Line 3 is correct: moles to molecules means multiplying by <i>N</i><sub>A</sub>.
        "2": "3 行目は正しいです。モルから分子の数に直すときは、<i>N</i><sub>A</sub> をかけます。",
      },
    },

    // ── s1-4-q021 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "s1-4-q021": {
      // EN: <p>Glucose has the molecular formula <span class="chem">C6H12O6</span>. What is its empirical formula?</p>
      stem: "<p>グルコースの分子式は <span class=\"chem\">C6H12O6</span> です。組成式 (empirical formula) は何ですか。</p>",
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
        "組成式は、各元素の原子の数の最も簡単な比を表します。",
        // EN: Find the largest number that divides exactly into 6, 12 and 6.
        "6、12、6 をすべてわり切れる最大の数を見つけましょう。",
      ],
      // EN: <div class="worked__math">C : H : O = 6 : 12 : 6</div><div class="worked__math">Divide by 6: C : H : O = 1 : 2 : 1</div><p>The empirical formula is <strong><span class="chem">CH2O</span></strong>.</p>
      solution: "<div class=\"worked__math\">C : H : O = 6 : 12 : 6</div><div class=\"worked__math\">全部を 6 でわる： C : H : O = 1 : 2 : 1</div><p>組成式は <strong><span class=\"chem\">CH2O</span></strong> です。</p>",
      misconception: {
        // EN (option A): This is the molecular formula: the actual number of atoms in one molecule. The empirical formula is the simplest whole-number ratio.
        "0": "これは分子式で、1 分子に実際に含まれる原子の数を表します。組成式は、最も簡単な整数比です。",
        // EN (option B): You divided by 2, but 3 : 6 : 3 can still be divided by 3. Keep going until the ratio cannot be made simpler.
        "1": "2 でわりましたが、3 : 6 : 3 はまだ 3 でわれます。これ以上簡単にできなくなるまで続けましょう。",
        // EN (option D): You removed the subscripts instead of dividing them. The ratio of atoms is 6 : 12 : 6, which simplifies to 1 : 2 : 1.
        "3": "添え字をわらずに、消してしまいました。原子の数の比は 6 : 12 : 6 で、簡単にすると 1 : 2 : 1 です。",
      },
    },

    // ── s1-4-q022 · numeric · exam · SL · Structure 1.4.4 · 2 marks
    "s1-4-q022": {
      // EN: <p>Ammonium sulfate, <span class="chem">(NH4)2SO4</span>, is used as a fertilizer.</p><p>Calculate the percentage by mass of nitrogen in ammonium sulfate. Give your answer to 3 significant figures.</p><p>Use <i>A</i><sub>r</sub>: N = 14.01, H = 1.01, S = 32.07, O = 16.00.</p>
      stem: "<p>硫酸アンモニウム <span class=\"chem\">(NH4)2SO4</span> は肥料に使われます。</p><p>硫酸アンモニウムに含まれる窒素の質量百分率 (percentage by mass) を計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：N = 14.01、H = 1.01、S = 32.07、O = 16.00</p>",
      hints: [
        // EN: Percentage by mass of an element = (mass of that element in one mole of compound ÷ molar mass of compound) × 100.
        "元素の質量百分率 =（化合物 1 モルに含まれるその元素の質量 ÷ 化合物のモル質量）× 100。",
        // EN: Count the nitrogen atoms carefully. The subscript 2 outside the bracket applies to N and to H.
        "窒素原子の数を注意して数えましょう。かっこの外の添え字 2 は、N にも H にもかかります。",
        // EN: <i>M</i> = (2 × 14.01) + (8 × 1.01) + 32.07 + (4 × 16.00).
        "<i>M</i> = (2 × 14.01) + (8 × 1.01) + 32.07 + (4 × 16.00).",
      ],
      // EN: <div class="worked__math"><i>M</i> = (2 × 14.01) + (8 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 132.17 <span class="unit">g mol-1</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(N in 1 mol) = 2 × 14.01 <span class="unit">g</span><br>&nbsp;&nbsp;= 28.02 <span class="unit">g</span></div><div class="worked__math">% N = <span class="frac"><span>28.02</span><span>132.17</span></span> × 100<br>&nbsp;&nbsp;= <strong>21.2 %</strong> &nbsp; (M2)</div><p>Named slip: 10.6 % means you counted one nitrogen atom instead of two.</p>
      solution: "<div class=\"worked__math\"><i>M</i> = (2 × 14.01) + (8 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 32.07 + (4 × 16.00)<br>&nbsp;&nbsp;= 132.17 <span class=\"unit\">g mol-1</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(1 mol 中の N) = 2 × 14.01 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 28.02 <span class=\"unit\">g</span></div><div class=\"worked__math\">% N = <span class=\"frac\"><span>28.02</span><span>132.17</span></span> × 100<br>&nbsp;&nbsp;= <strong>21.2 %</strong> &nbsp; (M2)</div><p>よくあるミス：10.6 % は、窒素原子を 2 個ではなく 1 個と数えたときの値です。</p>",
    },

    // ── s1-4-q023 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q023": {
      // EN: <p>A compound contains, by mass, 29.1 % sodium, 40.5 % sulfur and 30.4 % oxygen.</p><p>What is its empirical formula?</p><p>Use <i>A</i><sub>r</sub>: Na = 22.99, S = 32.07, O = 16.00.</p>
      stem: "<p>ある化合物は、質量で 29.1 % のナトリウム、40.5 % の硫黄、30.4 % の酸素を含みます。</p><p>この化合物の組成式 (empirical formula) は何ですか。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：Na = 22.99、S = 32.07、O = 16.00</p>",
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
        "化合物が 100 g あると考えます。すると、百分率がそのままグラム単位の質量になります。次に、元素ごとに <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span> を使います。",
        // EN: Divide all three amounts by the smallest one.
        "3 つの物質量を、いちばん小さい値でわります。",
        // EN: You should get 1 : 1 : 1.5. Do not round the 1.5. What can you multiply by to make every number whole?
        "1 : 1 : 1.5 になるはずです。1.5 を丸めてはいけません。何をかければ、すべてが整数になりますか。",
      ],
      // EN: <div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Na</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">S</span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">O</span></th></tr></thead><tbody><tr><th scope="row">Mass in 100 g / g</th><td class="num">29.1</td><td class="num">40.5</td><td class="num">30.4</td></tr><tr><th scope="row">÷ <i>A</i><sub>r</sub> → amount / mol</th><td class="num">1.266</td><td class="num">1.263</td><td class="num">1.900</td></tr><tr><th scope="row">÷ smallest (1.263)</th><td class="num">1.00</td><td class="num">1.00</td><td class="num">1.50</td></tr><tr><th scope="row">× 2</th><td class="num">2</td><td class="num">2</td><td class="num">3</td></tr></tbody></table></div><p>The empirical formula is <strong><span class="chem">Na2S2O3</span></strong>.</p>
      solution: "<div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">Na</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">S</span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">O</span></th></tr></thead><tbody><tr><th scope=\"row\">100 g 中の質量 / g</th><td class=\"num\">29.1</td><td class=\"num\">40.5</td><td class=\"num\">30.4</td></tr><tr><th scope=\"row\">÷ <i>A</i><sub>r</sub> → 物質量 / mol</th><td class=\"num\">1.266</td><td class=\"num\">1.263</td><td class=\"num\">1.900</td></tr><tr><th scope=\"row\">÷ 最小の値 (1.263)</th><td class=\"num\">1.00</td><td class=\"num\">1.00</td><td class=\"num\">1.50</td></tr><tr><th scope=\"row\">× 2</th><td class=\"num\">2</td><td class=\"num\">2</td><td class=\"num\">3</td></tr></tbody></table></div><p>組成式は <strong><span class=\"chem\">Na2S2O3</span></strong> です。</p>",
      misconception: {
        // EN (option A): You rounded 1.5 down to 1. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.
        "0": "1.5 を 1 に切り捨てました。.5 で終わる比は整数から遠すぎるので、丸められません。かわりに、すべての数に 2 をかけましょう。",
        // EN (option B): You rounded 1.5 up to 2. A ratio ending in .5 is too far from a whole number to round. Multiply every number by 2 instead.
        "1": "1.5 を 2 に切り上げました。.5 で終わる比は整数から遠すぎるので、丸められません。かわりに、すべての数に 2 をかけましょう。",
        // EN (option D): You used the percentages as if they were numbers of atoms (29 : 40 : 30 ≈ 3 : 4 : 3). Divide each percentage by the <i>A</i><sub>r</sub> first to get moles.
        "3": "百分率を、そのまま原子の数として使いました（29 : 40 : 30 ≈ 3 : 4 : 3）。まず、それぞれの百分率を <i>A</i><sub>r</sub> でわって、モルに直しましょう。",
      },
    },

    // ── s1-4-q024 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q024": {
      // EN: <p>1.43 <span class="unit">g</span> of an oxide of copper is heated in a stream of hydrogen until all of it has been reduced to copper. The copper left has a mass of 1.27 <span class="unit">g</span>.</p><p>What is the empirical formula of the oxide?</p><p>Use <i>A</i><sub>r</sub>: Cu = 63.55, O = 16.00.</p>
      stem: "<p>銅の酸化物 1.43 <span class=\"unit\">g</span> を水素の気流の中で加熱し、すべてを銅に還元します。残った銅の質量は 1.27 <span class=\"unit\">g</span> です。</p><p>この酸化物の組成式 (empirical formula) は何ですか。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：Cu = 63.55、O = 16.00</p>",
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
        "この酸化物に含まれるのは銅と酸素だけです。減った質量が酸素の質量なので、引き算で求めます。",
        // EN: Convert each mass to an amount with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span>. Use the mass of an oxygen <em>atom</em>.
        "<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub></span> で、それぞれの質量を物質量に直します。酸素は<em>原子</em>の質量を使います。",
        // EN: Divide both amounts by the smaller one to get the ratio.
        "2 つの物質量を小さいほうでわって、比を求めます。",
      ],
      // EN: <div class="worked__math"><i>m</i>(O) = 1.43 <span class="unit">g</span> − 1.27 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.16 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(Cu) = <span class="frac"><span>1.27 <span class="unit">g</span></span><span>63.55 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0200 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.16 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0100 <span class="unit">mol</span></div><div class="worked__math">Cu : O = 0.0200 : 0.0100<br>&nbsp;&nbsp;= 2 : 1</div><p>The empirical formula is <strong><span class="chem">Cu2O</span></strong>.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(O) = 1.43 <span class=\"unit\">g</span> − 1.27 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.16 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(Cu) = <span class=\"frac\"><span>1.27 <span class=\"unit\">g</span></span><span>63.55 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0200 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.16 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0100 <span class=\"unit\">mol</span></div><div class=\"worked__math\">Cu : O = 0.0200 : 0.0100<br>&nbsp;&nbsp;= 2 : 1</div><p>組成式は <strong><span class=\"chem\">Cu2O</span></strong> です。</p>",
      misconception: {
        // EN (option A): You have the ratio upside down. There are 0.0200 mol of Cu and 0.0100 mol of O, so there are two Cu for each O.
        "0": "比が逆になっています。Cu は 0.0200 mol、O は 0.0100 mol なので、O 1 個に対して Cu が 2 個です。",
        // EN (option C): You divided the mass of oxygen by 32.00. The formula counts oxygen <em>atoms</em>, so use <i>A</i><sub>r</sub>(O) = 16.00, not <i>M</i>(<span class="chem">O2</span>).
        "2": "酸素の質量を 32.00 でわりました。化学式で数えるのは酸素<em>原子</em>です。<i>M</i>(<span class=\"chem\">O2</span>) ではなく、<i>A</i><sub>r</sub>(O) = 16.00 を使いましょう。",
        // EN (option D): You used the ratio of the masses (1.27 : 0.16 ≈ 8 : 1). A formula is a ratio of amounts in moles, so divide each mass by its <i>A</i><sub>r</sub> first.
        "3": "質量の比をそのまま使いました（1.27 : 0.16 ≈ 8 : 1）。化学式は、モル単位の物質量の比です。まず、それぞれの質量を <i>A</i><sub>r</sub> でわりましょう。",
      },
    },

    // ── s1-4-q025 · short · exam · SL · Structure 1.4.4 · 3 marks
    "s1-4-q025": {
      // EN: <p>A compound contains only carbon, hydrogen and oxygen. Complete combustion of 1.50 <span class="unit">g</span> of the compound gives 3.30 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.80 <span class="unit">g</span> of <span class="chem">H2O</span>.</p><p>Determine the empirical formula of the compound. Show your working.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>
      stem: "<p>ある化合物は、炭素、水素、酸素だけを含みます。この化合物 1.50 <span class=\"unit\">g</span> を完全燃焼させると、<span class=\"chem\">CO2</span> が 3.30 <span class=\"unit\">g</span>、<span class=\"chem\">H2O</span> が 1.80 <span class=\"unit\">g</span> 生じます。</p><p>この化合物の組成式 (empirical formula) を求めなさい (determine)。途中の計算も書きましょう。</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>、<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>。<i>A</i><sub>r</sub>：C = 12.01、H = 1.01、O = 16.00</p>",
      hints: [
        // EN: All the carbon ends up in <span class="chem">CO2</span> and all the hydrogen ends up in <span class="chem">H2O</span>. Use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> for each product.
        "炭素はすべて <span class=\"chem\">CO2</span> に、水素はすべて <span class=\"chem\">H2O</span> になります。それぞれの生成物に <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> を使います。",
        // EN: Each <span class="chem">H2O</span> contains 2 H atoms, so <i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>).
        "<span class=\"chem\">H2O</span> 1 分子には H 原子が 2 個あります。だから <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>) です。",
        // EN: The oxygen in the products comes partly from the air, so you cannot count it directly. Find the mass of O in the compound by difference: mass of compound − mass of C − mass of H.
        "生成物の酸素は、一部が空気から来ています。だから直接は数えられません。化合物に含まれる O の質量は、引き算で求めます：化合物の質量 − C の質量 − H の質量。",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>)<br>&nbsp;&nbsp;= <span class="frac"><span>3.30 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.07498 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>)<br>&nbsp;&nbsp;= 2 × <span class="frac"><span>1.80 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1998 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(C) = 0.07498 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.9005 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.1998 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.2018 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 1.50 <span class="unit">g</span> − 0.9005 <span class="unit">g</span> − 0.2018 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.3977 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.3977 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02485 <span class="unit">mol</span> &nbsp; (M2)</div><p>Divide each amount by the smallest (0.02485 mol):</p><div class="worked__math">C : H : O = 3.02 : 8.04 : 1.00</div><p>Empirical formula: <strong><span class="chem">C3H8O</span></strong> (M3). The ratios 3.02 and 8.04 are within experimental rounding of whole numbers, so rounding is justified here.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)<br>&nbsp;&nbsp;= <span class=\"frac\"><span>3.30 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.07498 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)<br>&nbsp;&nbsp;= 2 × <span class=\"frac\"><span>1.80 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1998 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(C) = 0.07498 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.9005 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.1998 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.2018 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 1.50 <span class=\"unit\">g</span> − 0.9005 <span class=\"unit\">g</span> − 0.2018 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.3977 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.3977 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02485 <span class=\"unit\">mol</span> &nbsp; (M2)</div><p>それぞれの物質量を、いちばん小さい値（0.02485 mol）でわります。</p><div class=\"worked__math\">C : H : O = 3.02 : 8.04 : 1.00</div><p>組成式：<strong><span class=\"chem\">C3H8O</span></strong> (M3)。3.02 と 8.04 は、実験値の丸めによるずれの範囲で整数に十分近い値です。だから、ここでは整数に丸めてかまいません。</p>",
      // EN: <p><i>n</i>(C) = 3.30 ÷ 44.01 = 0.0750 mol and <i>n</i>(H) = 2 × (1.80 ÷ 18.02) = 0.200 mol.</p><p><i>m</i>(O) = 1.50 − (0.0750 × 12.01) − (0.200 × 1.01) = 0.398 g, so <i>n</i>(O) = 0.398 ÷ 16.00 = 0.0249 mol.</p><p>C : H : O = 0.0750 : 0.200 : 0.0249 = 3 : 8 : 1. Empirical formula: <span class="chem">C3H8O</span>.</p>
      answer: "<p><i>n</i>(C) = 3.30 ÷ 44.01 = 0.0750 mol、<i>n</i>(H) = 2 × (1.80 ÷ 18.02) = 0.200 mol。</p><p><i>m</i>(O) = 1.50 − (0.0750 × 12.01) − (0.200 × 1.01) = 0.398 g なので、<i>n</i>(O) = 0.398 ÷ 16.00 = 0.0249 mol。</p><p>C : H : O = 0.0750 : 0.200 : 0.0249 = 3 : 8 : 1。組成式：<span class=\"chem\">C3H8O</span>。</p>",
      markscheme: [
        // EN: M1: n(C) = 0.0750 mol AND n(H) = 0.200 mol. (Accept masses: 0.901 g of C and 0.202 g of H.)
        "M1：n(C) = 0.0750 mol かつ n(H) = 0.200 mol。（質量でも認める：C が 0.901 g、H が 0.202 g。）",
        // EN: M2: mass of O by difference = 0.398 g, OR n(O) = 0.0249 mol.
        "M2：引き算で求めた O の質量 = 0.398 g、または n(O) = 0.0249 mol。",
        // EN: M3: C₃H₈O. (A correct final formula with no working would earn all 3 marks, but always show working so that an error is penalised only once.)
        "M3：C₃H₈O。（途中の計算がなくても、最後の式が正しければ 3 点すべてもらえる。それでも途中の計算は必ず書くこと。そうすれば、まちがいがあっても減点は 1 回だけですむ。）",
      ],
    },

    // ── s1-4-q026 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "s1-4-q026": {
      // EN: <p>An oxide of phosphorus has the empirical formula <span class="chem">P2O5</span> and a molar mass of 283.88 <span class="unit">g mol-1</span>.</p><p>What is its molecular formula?</p><p>Use <i>A</i><sub>r</sub>: P = 30.97, O = 16.00.</p>
      stem: "<p>リンのある酸化物は、組成式が <span class=\"chem\">P2O5</span>、モル質量が 283.88 <span class=\"unit\">g mol-1</span> です。</p><p>この酸化物の分子式 (molecular formula) は何ですか。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：P = 30.97、O = 16.00</p>",
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
        "組成式 1 つ分、つまり <span class=\"chem\">P2O5</span> の質量を求めます。",
        // EN: Divide the molar mass by the empirical formula mass. The result is how many empirical units make one molecule.
        "モル質量を、組成式 1 つ分の質量でわります。その答えが、1 分子に組成式いくつ分が入っているかを表します。",
      ],
      // EN: <p>Find the mass of one empirical formula unit.</p><div class="worked__math"><i>M</i>(<span class="chem">P2O5</span>) = (2 × 30.97) + (5 × 16.00)<br>&nbsp;&nbsp;= 141.94 <span class="unit">g mol-1</span></div><div class="worked__math">Number of units = <span class="frac"><span>283.88 <span class="unit">g mol-1</span></span><span>141.94 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><div class="worked__math">Molecular formula = 2 × <span class="chem">P2O5</span><br>&nbsp;&nbsp;= <strong><span class="chem">P4O10</span></strong></div>
      solution: "<p>組成式 1 つ分の質量を求めます。</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">P2O5</span>) = (2 × 30.97) + (5 × 16.00)<br>&nbsp;&nbsp;= 141.94 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\">組成式いくつ分か = <span class=\"frac\"><span>283.88 <span class=\"unit\">g mol-1</span></span><span>141.94 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><div class=\"worked__math\">分子式 = 2 × <span class=\"chem\">P2O5</span><br>&nbsp;&nbsp;= <strong><span class=\"chem\">P4O10</span></strong></div>",
      misconception: {
        // EN (option A): This is the empirical formula. Its mass is 141.94, which is only half of the molar mass, so the molecule contains two empirical units.
        "0": "これは組成式です。その質量は 141.94 で、モル質量の半分しかありません。だから、1 分子は組成式 2 つ分でできています。",
        // EN (option B): You doubled only the oxygen. Every subscript in the empirical formula must be multiplied by the same whole number.
        "1": "酸素だけを 2 倍にしました。組成式の添え字は、すべて同じ整数倍にしなければなりません。",
        // EN (option C): You doubled only the phosphorus. Every subscript in the empirical formula must be multiplied by the same whole number.
        "2": "リンだけを 2 倍にしました。組成式の添え字は、すべて同じ整数倍にしなければなりません。",
      },
    },

    // ── s1-4-q027 · numeric · exam · SL · Structure 1.4.4 · 3 marks
    "s1-4-q027": {
      // EN: <p>7.15 <span class="unit">g</span> of hydrated sodium carbonate, <span class="chem">Na2CO3</span>·<i>x</i><span class="chem">H2O</span>, is heated to constant mass. The anhydrous <span class="chem">Na2CO3</span> left has a mass of 2.65 <span class="unit">g</span>.</p><p>Determine the whole-number value of <i>x</i>.</p><p><i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>炭酸ナトリウムの水和物 <span class=\"chem\">Na2CO3</span>·<i>x</i><span class=\"chem\">H2O</span> 7.15 <span class=\"unit\">g</span> を、質量が一定になるまで加熱します。残った無水の <span class=\"chem\">Na2CO3</span> の質量は 2.65 <span class=\"unit\">g</span> です。</p><p><i>x</i> の値を整数で求めなさい (determine)。</p><p><i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span>, <i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: This is an empirical formula problem with two "building blocks": <span class="chem">Na2CO3</span> and <span class="chem">H2O</span>. The mass lost on heating is the mass of water.
        "これは、<span class=\"chem\">Na2CO3</span> と <span class=\"chem\">H2O</span> という 2 つの「部品」でできた組成式の問題です。加熱で減った質量が、水の質量です。",
        // EN: Find the amount of each with <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>. Use 2.65 g for <span class="chem">Na2CO3</span> and the mass lost for <span class="chem">H2O</span>.
        "<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> で、それぞれの物質量を求めます。<span class=\"chem\">Na2CO3</span> には 2.65 g を、<span class=\"chem\">H2O</span> には減った質量を使います。",
        // EN: <i>x</i> = <i>n</i>(<span class="chem">H2O</span>) ÷ <i>n</i>(<span class="chem">Na2CO3</span>).
        "<i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">Na2CO3</span>) です。",
      ],
      // EN: <div class="worked__math"><i>m</i>(<span class="chem">H2O</span>) = 7.15 <span class="unit">g</span> − 2.65 <span class="unit">g</span><br>&nbsp;&nbsp;= 4.50 <span class="unit">g</span> &nbsp; (M1)</div><div class="worked__math"><i>n</i>(<span class="chem">Na2CO3</span>) = <span class="frac"><span>2.65 <span class="unit">g</span></span><span>105.99 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02500 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = <span class="frac"><span>4.50 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2497 <span class="unit">mol</span> &nbsp; (M2)</div><div class="worked__math"><i>x</i> = <span class="frac"><span>0.2497 <span class="unit">mol</span></span><span>0.02500 <span class="unit">mol</span></span></span><br>&nbsp;&nbsp;= 9.99 &nbsp; (M3)</div><p>To the nearest whole number, <strong><i>x</i> = 10</strong>.</p><p>Named slips: dividing the masses (4.50 ÷ 2.65 = 1.7) skips the conversion to moles. Using 7.15 g as the mass of <span class="chem">Na2CO3</span> gives 3.7, because 7.15 g still includes the water.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(<span class=\"chem\">H2O</span>) = 7.15 <span class=\"unit\">g</span> − 2.65 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 4.50 <span class=\"unit\">g</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">Na2CO3</span>) = <span class=\"frac\"><span>2.65 <span class=\"unit\">g</span></span><span>105.99 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02500 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = <span class=\"frac\"><span>4.50 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2497 <span class=\"unit\">mol</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>x</i> = <span class=\"frac\"><span>0.2497 <span class=\"unit\">mol</span></span><span>0.02500 <span class=\"unit\">mol</span></span></span><br>&nbsp;&nbsp;= 9.99 &nbsp; (M3)</div><p>いちばん近い整数にすると、<strong><i>x</i> = 10</strong> です。</p><p>よくあるミス：質量どうしをわる（4.50 ÷ 2.65 = 1.7）と、モルに直すステップが抜けてしまいます。7.15 g を <span class=\"chem\">Na2CO3</span> の質量として使うと 3.7 になります。7.15 g には、まだ水が含まれているからです。</p>",
    },

    // ── s1-4-q028 · short · exam · SL · Structure 1.4.4 · 2 marks
    "s1-4-q028": {
      // EN: <p>A student heats a hydrated salt in a crucible to find the amount of water of crystallization. The method says: "heat to constant mass".</p><p>Describe what "heat to constant mass" means in practice, and explain why it is done.</p>
      stem: "<p>ある生徒が、水和水 (water of crystallization) の物質量を調べるために、水和物をるつぼで加熱します。実験の手順には「質量が一定になるまで加熱する (heat to constant mass)」と書いてあります。</p><p>「質量が一定になるまで加熱する」とは、実際にはどうすることかを記述しなさい (describe)。また、そうする理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: How can you tell, using only a balance, that nothing more is leaving the crucible?
        "電子てんびんだけを使って、るつぼからもう何も出ていかなくなったことを、どうやって確かめますか。",
        // EN: Think about what would happen to your value for the water if some water was still in the solid.
        "固体の中にまだ水が残っていたら、求めた水の量はどうなるかを考えましょう。",
      ],
      // EN: <p>One weighing cannot tell you whether water is still being lost. If the mass after a second heating is the same as after the first, no more water is leaving. If you stop too early, the mass lost is too small, so the calculated amount of water is too low.</p>
      solution: "<p>質量を 1 回はかっただけでは、水がまだ出ている途中かどうかわかりません。2 回目の加熱のあとの質量が 1 回目のあとと同じなら、水はもう出ていません。早くやめすぎると、減った質量が小さすぎます。すると、計算した水の物質量も小さくなりすぎます。</p>",
      // EN: <p>Heat, cool and weigh the crucible, then repeat the heating and weighing until two weighings in a row give the same mass. This shows that all the water of crystallization has been removed, so the mass lost is the full mass of water.</p>
      answer: "<p>るつぼを加熱し、冷まして、質量をはかる。加熱と測定をくり返し、2 回続けて同じ質量になるまで続ける。こうなれば水和水がすべて取り除かれたとわかるので、減った質量が水の質量全体になる。</p>",
      markscheme: [
        // EN: Heat, (cool,) weigh and repeat until the mass no longer changes / two consecutive readings are the same.
        "加熱し、（冷まして、）質量をはかる。これを、質量が変わらなくなるまで / 続けて同じ値になるまでくり返す。",
        // EN: To make sure that all of the water has been removed / the dehydration is complete. (Accept: otherwise the mass of water, and so the value of x, would be too low.)
        "水がすべて取り除かれたこと / 脱水が完了したことを確かめるため。（「そうしないと水の質量が小さくなり、x の値も小さくなりすぎる」も認める。）",
      ],
    },

    // ── s1-4-q029 · short · challenge · SL · Structure 1.4.4 · 4 marks
    "s1-4-q029": {
      // EN: <p>A colourless liquid contains only carbon, hydrogen and oxygen. Complete combustion of 1.35 <span class="unit">g</span> of the liquid gives 2.64 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.35 <span class="unit">g</span> of <span class="chem">H2O</span>. Its molar mass is 90.14 <span class="unit">g mol-1</span>.</p><p>Determine the empirical formula and the molecular formula of the liquid. Show your working.</p><p><i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>. <i>A</i><sub>r</sub>: C = 12.01, H = 1.01, O = 16.00.</p>
      stem: "<p>ある無色の液体は、炭素、水素、酸素だけを含みます。この液体 1.35 <span class=\"unit\">g</span> を完全燃焼させると、<span class=\"chem\">CO2</span> が 2.64 <span class=\"unit\">g</span>、<span class=\"chem\">H2O</span> が 1.35 <span class=\"unit\">g</span> 生じます。この液体のモル質量は 90.14 <span class=\"unit\">g mol-1</span> です。</p><p>この液体の組成式 (empirical formula) と分子式 (molecular formula) を求めなさい (determine)。途中の計算も書きましょう。</p><p><i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>、<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>。<i>A</i><sub>r</sub>：C = 12.01、H = 1.01、O = 16.00</p>",
      hints: [
        // EN: Split the task: first the empirical formula from the combustion data, then the molecular formula from the molar mass.
        "問題を 2 つに分けます。まず燃焼のデータから組成式を求めます。次に、モル質量から分子式を求めます。",
        // EN: <i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>), <i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>). Find the mass of O by difference.
        "<i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)、<i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>) です。O の質量は引き算で求めます。",
        // EN: Compare the molar mass with the mass of one empirical formula unit. Multiply every subscript by the ratio.
        "モル質量を、組成式 1 つ分の質量とくらべます。その比を、すべての添え字にかけます。",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = <span class="frac"><span>2.64 <span class="unit">g</span></span><span>44.01 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × <span class="frac"><span>1.35 <span class="unit">g</span></span><span>18.02 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1498 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i>(C) = 0.05999 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.7204 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.1498 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.1513 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 1.35 <span class="unit">g</span> − 0.7204 <span class="unit">g</span> − 0.1513 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.4782 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.4782 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02989 <span class="unit">mol</span> &nbsp; (M2)</div><p>Divide each amount by the smallest (0.02989 mol):</p><div class="worked__math">C : H : O = 2.01 : 5.01 : 1.00</div><p>Empirical formula: <strong><span class="chem">C2H5O</span></strong> (M3). Now compare its mass with the molar mass.</p><div class="worked__math"><i>M</i>(<span class="chem">C2H5O</span>) = (2 × 12.01) + (5 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 16.00<br>&nbsp;&nbsp;= 45.07 <span class="unit">g mol-1</span></div><div class="worked__math">Number of units = <span class="frac"><span>90.14 <span class="unit">g mol-1</span></span><span>45.07 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><p>Molecular formula = 2 × <span class="chem">C2H5O</span> = <strong><span class="chem">C4H10O2</span></strong> (M4).</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = <span class=\"frac\"><span>2.64 <span class=\"unit\">g</span></span><span>44.01 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × <span class=\"frac\"><span>1.35 <span class=\"unit\">g</span></span><span>18.02 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.1498 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i>(C) = 0.05999 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.7204 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.1498 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.1513 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 1.35 <span class=\"unit\">g</span> − 0.7204 <span class=\"unit\">g</span> − 0.1513 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.4782 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.4782 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.02989 <span class=\"unit\">mol</span> &nbsp; (M2)</div><p>それぞれの物質量を、いちばん小さい値（0.02989 mol）でわります。</p><div class=\"worked__math\">C : H : O = 2.01 : 5.01 : 1.00</div><p>組成式：<strong><span class=\"chem\">C2H5O</span></strong> (M3)。次に、その質量をモル質量とくらべます。</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">C2H5O</span>) = (2 × 12.01) + (5 × 1.01)<br>&nbsp;&nbsp;&nbsp;&nbsp;+ 16.00<br>&nbsp;&nbsp;= 45.07 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\">組成式いくつ分か = <span class=\"frac\"><span>90.14 <span class=\"unit\">g mol-1</span></span><span>45.07 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 2.00</div><p>分子式 = 2 × <span class=\"chem\">C2H5O</span> = <strong><span class=\"chem\">C4H10O2</span></strong> (M4)。</p>",
      // EN: <p><i>n</i>(C) = 2.64 ÷ 44.01 = 0.0600 mol; <i>n</i>(H) = 2 × (1.35 ÷ 18.02) = 0.150 mol.</p><p><i>m</i>(O) = 1.35 − (0.0600 × 12.01) − (0.150 × 1.01) = 0.478 g; <i>n</i>(O) = 0.0299 mol.</p><p>C : H : O = 2 : 5 : 1, so the empirical formula is <span class="chem">C2H5O</span> (mass 45.07). 90.14 ÷ 45.07 = 2, so the molecular formula is <span class="chem">C4H10O2</span>.</p>
      answer: "<p><i>n</i>(C) = 2.64 ÷ 44.01 = 0.0600 mol、<i>n</i>(H) = 2 × (1.35 ÷ 18.02) = 0.150 mol。</p><p><i>m</i>(O) = 1.35 − (0.0600 × 12.01) − (0.150 × 1.01) = 0.478 g、<i>n</i>(O) = 0.0299 mol。</p><p>C : H : O = 2 : 5 : 1 なので、組成式は <span class=\"chem\">C2H5O</span>（質量 45.07）。90.14 ÷ 45.07 = 2 なので、分子式は <span class=\"chem\">C4H10O2</span>。</p>",
      markscheme: [
        // EN: M1: n(C) = 0.0600 mol AND n(H) = 0.150 mol. (Accept masses: 0.720 g of C and 0.151 g of H.)
        "M1：n(C) = 0.0600 mol かつ n(H) = 0.150 mol。（質量でも認める：C が 0.720 g、H が 0.151 g。）",
        // EN: M2: mass of O by difference = 0.478 g, OR n(O) = 0.0299 mol.
        "M2：引き算で求めた O の質量 = 0.478 g、または n(O) = 0.0299 mol。",
        // EN: M3: empirical formula C₂H₅O.
        "M3：組成式 C₂H₅O。",
        // EN: M4: 90.14 ÷ 45.07 = 2, so molecular formula C₄H₁₀O₂. (Allow error carried forward from your empirical formula.)
        "M4：90.14 ÷ 45.07 = 2 なので、分子式は C₄H₁₀O₂。（自分の組成式からの「誤りの持ち越し」(error carried forward) も認める。）",
      ],
    },

    // ── s1-4-q030 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "s1-4-q030": {
      // EN: <p>An oxide of iron contains 72.4 % iron and 27.6 % oxygen by mass. A student works out its empirical formula.</p><ol><li>Fe: 72.4 ÷ 55.85 = 1.296 &nbsp; O: 27.6 ÷ 16.00 = 1.725</li><li>Divide by the smallest: Fe 1.296 ÷ 1.296 = 1.00 &nbsp; O 1.725 ÷ 1.296 = 1.33</li><li>Round to whole numbers: Fe = 1, O = 1</li><li>Empirical formula: <span class="chem">FeO</span></li></ol><p>Which statement about this working is correct?</p>
      stem: "<p>鉄のある酸化物は、質量で 72.4 % の鉄と 27.6 % の酸素を含みます。ある生徒が、次のように組成式を求めました。</p><ol><li>Fe: 72.4 ÷ 55.85 = 1.296 &nbsp; O: 27.6 ÷ 16.00 = 1.725</li><li>最小の値でわる： Fe 1.296 ÷ 1.296 = 1.00 &nbsp; O 1.725 ÷ 1.296 = 1.33</li><li>整数に丸める： Fe = 1, O = 1</li><li>組成式： <span class=\"chem\">FeO</span></li></ol><p>この計算について正しい文はどれですか。</p>",
      options: [
        // EN: Line 1 is wrong: the percentages should be divided by the atomic numbers.
        "1 行目がまちがい：百分率は原子番号でわるべきである。",
        // EN: Line 2 is wrong: the student should divide by the largest value.
        "2 行目がまちがい：いちばん大きい値でわるべきである。",
        // EN: Line 3 is wrong: 1.33 is too far from a whole number to round.
        "3 行目がまちがい：1.33 は整数から遠すぎて、丸められない。",
        // EN: The working is correct and the formula is <span class="chem">FeO</span>.
        "計算は正しく、組成式は <span class=\"chem\">FeO</span> である。",
      ],
      hints: [
        // EN: Only round when a value is very close to a whole number (for example 1.98 or 3.02).
        "丸めてよいのは、値が整数にとても近いときだけです（たとえば 1.98 や 3.02）。",
        // EN: 1.33 is a recognizable fraction: 1⅓. What can you multiply by to clear a third?
        "1.33 は見覚えのある分数、1⅓ です。何をかければ、3 分の 1 の端数をなくせますか。",
      ],
      // EN: <p>Lines 1 and 2 are correct. The error is in line 3. A ratio of 1 : 1.33 must be multiplied up, not rounded.</p><div class="worked__math">Fe : O = 1.00 : 1.33</div><div class="worked__math">× 3: Fe : O = 3.00 : 3.99 ≈ 3 : 4</div><p>The empirical formula is <strong><span class="chem">Fe3O4</span></strong>. Look out for .5 (× 2), .33 or .67 (× 3) and .25 or .75 (× 4).</p>
      solution: "<p>1 行目と 2 行目は正しいです。まちがいは 3 行目にあります。1 : 1.33 という比は、丸めるのではなく、整数になるまで何倍かします。</p><div class=\"worked__math\">Fe : O = 1.00 : 1.33</div><div class=\"worked__math\">× 3: Fe : O = 3.00 : 3.99 ≈ 3 : 4</div><p>組成式は <strong><span class=\"chem\">Fe3O4</span></strong> です。.5（× 2）、.33 や .67（× 3）、.25 や .75（× 4）が出てきたら、丸めずにかけ算をしましょう。</p>",
      misconception: {
        // EN (option A): Dividing by <i>A</i><sub>r</sub> is right. It converts mass into amount in moles. Atomic number counts protons and is not used here.
        "0": "<i>A</i><sub>r</sub> でわるのは正しいです。質量をモル単位の物質量に直せます。原子番号は陽子の数で、ここでは使いません。",
        // EN (option B): Dividing by the smallest value is the standard method. It sets the smallest amount to 1 so that the other values are easy to compare.
        "1": "いちばん小さい値でわるのが、決まったやり方です。最小の物質量が 1 になるので、ほかの値とくらべやすくなります。",
        // EN (option D): Check the last step. 1.33 is one and a third, not about 1. <span class="chem">FeO</span> would contain 77.7 % iron, which does not match the data.
        "3": "最後のステップを確かめましょう。1.33 は「1 と 3 分の 1」で、約 1 ではありません。<span class=\"chem\">FeO</span> なら鉄は 77.7 % になり、データと合いません。",
      },
    },

    // ── s1-4-q031 · numeric · challenge · SL · Structure 1.4.4 · 3 marks
    "s1-4-q031": {
      // EN: <p>A metal M forms a chloride with the formula <span class="chem">MCl2</span>. The chloride contains 74.47 % chlorine by mass.</p><p>Calculate the relative atomic mass of M. Give your answer to 3 significant figures.</p><p><i>A</i><sub>r</sub>(Cl) = 35.45</p>
      stem: "<p>金属 M は、化学式 <span class=\"chem\">MCl2</span> の塩化物をつくります。この塩化物は、質量で 74.47 % の塩素を含みます。</p><p>M の相対原子質量を計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p><i>A</i><sub>r</sub>(Cl) = 35.45</p>",
      hints: [
        // EN: This is percentage composition in reverse. You know the formula and the percentage, and you want a molar mass.
        "質量百分率組成の計算を、逆向きにたどる問題です。化学式と百分率がわかっていて、モル質量を求めます。",
        // EN: In one mole of <span class="chem">MCl2</span> there are 2 × 35.45 = 70.90 g of chlorine. That 70.90 g is 74.47 % of the molar mass.
        "<span class=\"chem\">MCl2</span> 1 モルには、塩素が 2 × 35.45 = 70.90 g 含まれます。この 70.90 g が、モル質量の 74.47 % にあたります。",
        // EN: Molar mass = 70.90 ÷ 0.7447. Then subtract the chlorine to leave M.
        "モル質量 = 70.90 ÷ 0.7447 です。そこから塩素の分を引くと、M の分が残ります。",
      ],
      // EN: <p>One mole of <span class="chem">MCl2</span> contains 2 mol of Cl.</p><div class="worked__math"><i>m</i>(Cl) = 2 × 35.45 <span class="unit">g</span><br>&nbsp;&nbsp;= 70.90 <span class="unit">g</span> &nbsp; (M1)</div><div class="worked__math"><i>M</i>(<span class="chem">MCl2</span>) = <span class="frac"><span>70.90 <span class="unit">g mol-1</span></span><span>0.7447</span></span><br>&nbsp;&nbsp;= 95.21 <span class="unit">g mol-1</span> &nbsp; (M2)</div><div class="worked__math"><i>A</i><sub>r</sub>(M) = 95.21 − 70.90<br>&nbsp;&nbsp;= 24.31<br>&nbsp;&nbsp;= <strong>24.3</strong> (no units) &nbsp; (M3)</div><p>The data booklet value for magnesium is 24.31, so M is magnesium. Named slips: 12.2 means you used one Cl instead of two. 95.2 means you did not subtract the chlorine.</p>
      solution: "<p><span class=\"chem\">MCl2</span> 1 モルには、Cl が 2 mol 含まれます。</p><div class=\"worked__math\"><i>m</i>(Cl) = 2 × 35.45 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 70.90 <span class=\"unit\">g</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">MCl2</span>) = <span class=\"frac\"><span>70.90 <span class=\"unit\">g mol-1</span></span><span>0.7447</span></span><br>&nbsp;&nbsp;= 95.21 <span class=\"unit\">g mol-1</span> &nbsp; (M2)</div><div class=\"worked__math\"><i>A</i><sub>r</sub>(M) = 95.21 − 70.90<br>&nbsp;&nbsp;= 24.31<br>&nbsp;&nbsp;= <strong>24.3</strong> （単位なし） &nbsp; (M3)</div><p>データブックレットでは、マグネシウムの値が 24.31 です。だから M はマグネシウムです。よくあるミス：12.2 は、Cl を 2 個ではなく 1 個で計算したときの値です。95.2 は、塩素の分を引かなかったときの値です。</p>",
    },

    // ── s1-4-q032 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "s1-4-q032": {
      // EN: <p>0.920 <span class="unit">g</span> of a compound of carbon, hydrogen and oxygen burns completely to give 1.76 <span class="unit">g</span> of <span class="chem">CO2</span> and 1.08 <span class="unit">g</span> of <span class="chem">H2O</span>. A student starts to find the empirical formula.</p><ol><li><i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>) = 1.76 ÷ 44.01 = 0.0400 <span class="unit">mol</span></li><li><i>n</i>(H) = <i>n</i>(<span class="chem">H2O</span>) = 1.08 ÷ 18.02 = 0.0599 <span class="unit">mol</span></li><li><i>m</i>(O) = 0.920 − (0.0400 × 12.01) − (0.0599 × 1.01) = 0.379 <span class="unit">g</span></li><li><i>n</i>(O) = 0.379 ÷ 16.00 = 0.0237 <span class="unit">mol</span></li></ol><p>Which line contains the first error?</p>
      stem: "<p>炭素、水素、酸素からなる化合物 0.920 <span class=\"unit\">g</span> を完全燃焼させると、<span class=\"chem\">CO2</span> が 1.76 <span class=\"unit\">g</span>、<span class=\"chem\">H2O</span> が 1.08 <span class=\"unit\">g</span> 生じます。ある生徒が、組成式を求め始めました。</p><ol><li><i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) = 1.76 ÷ 44.01 = 0.0400 <span class=\"unit\">mol</span></li><li><i>n</i>(H) = <i>n</i>(<span class=\"chem\">H2O</span>) = 1.08 ÷ 18.02 = 0.0599 <span class=\"unit\">mol</span></li><li><i>m</i>(O) = 0.920 − (0.0400 × 12.01) − (0.0599 × 1.01) = 0.379 <span class=\"unit\">g</span></li><li><i>n</i>(O) = 0.379 ÷ 16.00 = 0.0237 <span class=\"unit\">mol</span></li></ol><p>最初のまちがいがあるのは何行目ですか。</p>",
      options: [
        // EN: Line 1
        "1 行目",
        // EN: Line 2
        "2 行目",
        // EN: Line 3
        "3 行目",
        // EN: Line 4
        "4 行目",
      ],
      hints: [
        // EN: Check each "<i>n</i>(element) = <i>n</i>(product)" step against the formula of the product.
        "「<i>n</i>(元素) = <i>n</i>(生成物)」のステップを、生成物の化学式と 1 つずつ照らし合わせましょう。",
        // EN: How many hydrogen atoms are in one molecule of <span class="chem">H2O</span>?
        "<span class=\"chem\">H2O</span> 1 分子には、水素原子が何個ありますか。",
      ],
      // EN: <p>The first error is in line 2. Each <span class="chem">H2O</span> molecule contains 2 hydrogen atoms.</p><div class="worked__math"><i>n</i>(H) = 2 × <i>n</i>(<span class="chem">H2O</span>)<br>&nbsp;&nbsp;= 2 × 0.0599 <span class="unit">mol</span><br>&nbsp;&nbsp;= 0.120 <span class="unit">mol</span></div><div class="worked__math"><i>m</i>(C) = 0.0400 <span class="unit">mol</span> × 12.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.480 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(H) = 0.120 <span class="unit">mol</span> × 1.01 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 0.121 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(O) = 0.920 <span class="unit">g</span> − 0.480 <span class="unit">g</span> − 0.121 <span class="unit">g</span><br>&nbsp;&nbsp;= 0.319 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = <span class="frac"><span>0.319 <span class="unit">g</span></span><span>16.00 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0199 <span class="unit">mol</span></div><div class="worked__math">C : H : O = 0.0400 : 0.120 : 0.0199<br>&nbsp;&nbsp;= 2 : 6 : 1</div><p>The correct empirical formula is <span class="chem">C2H6O</span>. In an exam, lines 3 and 4 would still earn credit as "error carried forward", which is why showing working matters.</p>
      solution: "<p>最初のまちがいは 2 行目です。<span class=\"chem\">H2O</span> 1 分子には、水素原子が 2 個あります。</p><div class=\"worked__math\"><i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)<br>&nbsp;&nbsp;= 2 × 0.0599 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= 0.120 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>m</i>(C) = 0.0400 <span class=\"unit\">mol</span> × 12.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.480 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(H) = 0.120 <span class=\"unit\">mol</span> × 1.01 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 0.121 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(O) = 0.920 <span class=\"unit\">g</span> − 0.480 <span class=\"unit\">g</span> − 0.121 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= 0.319 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = <span class=\"frac\"><span>0.319 <span class=\"unit\">g</span></span><span>16.00 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0199 <span class=\"unit\">mol</span></div><div class=\"worked__math\">C : H : O = 0.0400 : 0.120 : 0.0199<br>&nbsp;&nbsp;= 2 : 6 : 1</div><p>正しい組成式は <span class=\"chem\">C2H6O</span> です。試験では、3 行目と 4 行目にも「誤りの持ち越し (error carried forward)」として点がもらえます。途中の計算を書くことが大切なのは、このためです。</p>",
      misconception: {
        // EN (option A): Line 1 is correct. Each <span class="chem">CO2</span> molecule contains one carbon atom, so <i>n</i>(C) = <i>n</i>(<span class="chem">CO2</span>).
        "0": "1 行目は正しいです。<span class=\"chem\">CO2</span> 1 分子には炭素原子が 1 個あるので、<i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) です。",
        // EN (option C): The method in line 3 is correct: oxygen is found by difference. Its value is wrong only because it uses a wrong number from an earlier line. Find where that number came from.
        "2": "3 行目のやり方は正しいです。酸素は引き算で求めます。値がまちがっているのは、前の行のまちがった数を使ったからです。その数がどこから来たのかを探しましょう。",
        // EN (option D): The method in line 4 is correct: <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub> with 16.00 for oxygen atoms. The wrong value was carried forward from an earlier line.
        "3": "4 行目のやり方は正しいです。酸素原子なので 16.00 を使い、<i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub> で計算しています。まちがった値は、前の行から引き継がれたものです。",
      },
    },

    // ── s1-4-q033 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q033": {
      // EN: <p>0.0500 <span class="unit">mol</span> of sodium chloride is dissolved in water and the solution is made up to 250 <span class="unit">cm3</span>.</p><p>Calculate the concentration of the solution, in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>0.0500 <span class=\"unit\">mol</span> の塩化ナトリウム (sodium chloride) を水に溶かし、水を加えて溶液全体を 250 <span class=\"unit\">cm3</span> にします。</p><p>この溶液の濃度を <span class=\"unit\">mol dm-3</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: The data booklet gives <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>. Rearranged: <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span>.
        "データブックレットに <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span> があります。変形すると <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span> です。",
        // EN: The volume must be in <span class="unit">dm3</span>. To convert <span class="unit">cm3</span> to <span class="unit">dm3</span>, divide by 1000: 250 <span class="unit">cm3</span> = 0.250 <span class="unit">dm3</span>.
        "体積は <span class=\"unit\">dm3</span> 単位にします。<span class=\"unit\">cm3</span> を <span class=\"unit\">dm3</span> に直すには、1000 でわります。250 <span class=\"unit\">cm3</span> = 0.250 <span class=\"unit\">dm3</span> です。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 250 <span class="unit">cm3</span> ÷ 1000 = 0.250 <span class="unit">dm3</span></div><div class="worked__math"><i>C</i> = <span class="frac"><span><i>n</i></span><span><i>V</i></span></span> = <span class="frac"><span>0.0500 <span class="unit">mol</span></span><span>0.250 <span class="unit">dm3</span></span></span></div><div class="worked__math"><i>C</i> = <strong>0.200 <span class="unit">mol dm-3</span></strong></div><p>Named slips: 0.000200 means you left the volume in <span class="unit">cm3</span>. 0.0125 means you multiplied by the volume instead of dividing.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 250 <span class=\"unit\">cm3</span> ÷ 1000 = 0.250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>C</i> = <span class=\"frac\"><span><i>n</i></span><span><i>V</i></span></span> = <span class=\"frac\"><span>0.0500 <span class=\"unit\">mol</span></span><span>0.250 <span class=\"unit\">dm3</span></span></span></div><div class=\"worked__math\"><i>C</i> = <strong>0.200 <span class=\"unit\">mol dm-3</span></strong></div><p>よくあるミス：0.000200 は、体積を <span class=\"unit\">cm3</span> のままにしたときの値です。0.0125 は、体積でわるところで、かけてしまったときの値です。</p>",
    },

    // ── s1-4-q034 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q034": {
      // EN: <p>A bottle is labelled <span class="mono">[NaOH] = 0.10</span>. What do the square brackets tell you?</p>
      stem: "<p>びんのラベルに <span class=\"mono\">[NaOH] = 0.10</span> と書いてあります。角かっこは何を表していますか。</p>",
      options: [
        // EN: The bottle contains 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span>.
        "びんの中に <span class=\"chem\">NaOH</span> が 0.10 <span class=\"unit\">mol</span> 入っている。",
        // EN: The solution contains 0.10 <span class="unit">g</span> of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.
        "溶液 1 <span class=\"unit\">dm3</span> あたりに <span class=\"chem\">NaOH</span> が 0.10 <span class=\"unit\">g</span> 含まれる。",
        // EN: The solution contains 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.
        "溶液 1 <span class=\"unit\">dm3</span> あたりに <span class=\"chem\">NaOH</span> が 0.10 <span class=\"unit\">mol</span> 含まれる。",
        // EN: 0.10 <span class="unit">mol</span> of <span class="chem">NaOH</span> was added to exactly 1 <span class="unit">dm3</span> of water.
        "ちょうど 1 <span class=\"unit\">dm3</span> の水に、<span class=\"chem\">NaOH</span> を 0.10 <span class=\"unit\">mol</span> 加えた。",
      ],
      hints: [
        // EN: Square brackets around a formula mean "molar concentration of".
        "化学式を角かっこで囲むと、「〜のモル濃度」という意味になります。",
        // EN: Molar concentration = amount of solute ÷ volume of <em>solution</em>.
        "モル濃度 = 溶質の物質量 ÷ <em>溶液</em>の体積。",
      ],
      // EN: <p>[NaOH] means the molar concentration of sodium hydroxide, in <span class="unit">mol dm-3</span>. So there is 0.10 mol of <span class="chem">NaOH</span> in each <span class="unit">dm3</span> of solution.</p>
      solution: "<p>[NaOH] は、水酸化ナトリウム (sodium hydroxide) のモル濃度を <span class=\"unit\">mol dm-3</span> 単位で表したものです。だから、溶液 1 <span class=\"unit\">dm3</span> あたりに <span class=\"chem\">NaOH</span> が 0.10 mol 含まれます。</p>",
      misconception: {
        // EN (option A): Square brackets show a concentration, not an amount. The amount in the bottle also depends on the volume of solution.
        "0": "角かっこが表すのは濃度で、物質量ではありません。びんの中の物質量は、溶液の体積によっても変わります。",
        // EN (option B): Square brackets mean <em>molar</em> concentration, in <span class="unit">mol dm-3</span>. A mass concentration in <span class="unit">g dm-3</span> is written without square brackets.
        "1": "角かっこは<em>モル</em>濃度を表し、単位は <span class=\"unit\">mol dm-3</span> です。<span class=\"unit\">g dm-3</span> 単位の質量濃度は、角かっこを使わずに書きます。",
        // EN (option D): Concentration is defined by the volume of the final <em>solution</em>, not the volume of water added. Adding solute to 1 <span class="unit">dm3</span> of water does not give exactly 1 <span class="unit">dm3</span> of solution.
        "3": "濃度は、加えた水の体積ではなく、できあがった<em>溶液</em>の体積で決まります。1 <span class=\"unit\">dm3</span> の水に溶質を加えても、溶液はちょうど 1 <span class=\"unit\">dm3</span> にはなりません。",
      },
    },

    // ── s1-4-q035 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q035": {
      // EN: <p>Calculate the amount, in <span class="unit">mol</span>, of <span class="chem">HCl</span> in 25.0 <span class="unit">cm3</span> of 0.120 <span class="unit">mol dm-3</span> hydrochloric acid. Give your answer to 3 significant figures.</p>
      stem: "<p>0.120 <span class=\"unit\">mol dm-3</span> の塩酸 (hydrochloric acid) 25.0 <span class=\"unit\">cm3</span> に含まれる <span class=\"chem\">HCl</span> の物質量を <span class=\"unit\">mol</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: Use <span class="mono"><i>n</i> = <i>C</i><i>V</i></span> from the data booklet.
        "データブックレットの <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span> を使います。",
        // EN: Convert the volume first: 25.0 <span class="unit">cm3</span> ÷ 1000 = 0.0250 <span class="unit">dm3</span>.
        "先に体積を換算します。25.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.0250 <span class=\"unit\">dm3</span> です。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 25.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.0250 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.120 <span class="unit">mol dm-3</span> × 0.0250 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = 0.00300 <span class="unit">mol</span><br>&nbsp;&nbsp;= <strong>3.00 × 10<sup>−3</sup> <span class="unit">mol</span></strong></div><p>Named slip: 3.00 mol means you did not convert <span class="unit">cm3</span> to <span class="unit">dm3</span>. A small flask of dilute acid cannot hold 3 mol of HCl.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 25.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.120 <span class=\"unit\">mol dm-3</span> × 0.0250 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = 0.00300 <span class=\"unit\">mol</span><br>&nbsp;&nbsp;= <strong>3.00 × 10<sup>−3</sup> <span class=\"unit\">mol</span></strong></div><p>よくあるミス：3.00 mol は、<span class=\"unit\">cm3</span> を <span class=\"unit\">dm3</span> に直さなかったときの値です。小さなフラスコに入ったうすい酸に、HCl が 3 mol も入っていることはありません。</p>",
    },

    // ── s1-4-q036 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "s1-4-q036": {
      // EN: <p>A student needs 100.0 <span class="unit">cm3</span> of a 0.2000 <span class="unit">mol dm-3</span> standard solution of sodium carbonate, <span class="chem">Na2CO3</span>.</p><p>Calculate the mass of anhydrous sodium carbonate needed, in <span class="unit">g</span>. Give your answer to 4 significant figures.</p><p><i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span></p>
      stem: "<p>ある生徒が、0.2000 <span class=\"unit\">mol dm-3</span> の炭酸ナトリウム (sodium carbonate) <span class=\"chem\">Na2CO3</span> の標準溶液 (standard solution) を 100.0 <span class=\"unit\">cm3</span> つくります。</p><p>必要な無水炭酸ナトリウムの質量を <span class=\"unit\">g</span> 単位で計算しなさい (calculate)。有効数字 4 桁で答えましょう。</p><p><i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Two relationships, one after the other: <span class="mono"><i>n</i> = <i>C</i><i>V</i></span>, then <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span>.
        "関係式を 2 つ、順番に使います。まず <span class=\"mono\"><i>n</i> = <i>C</i><i>V</i></span>、次に <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> です。",
        // EN: Convert the volume: 100.0 <span class="unit">cm3</span> = 0.1000 <span class="unit">dm3</span>.
        "体積を換算します。100.0 <span class=\"unit\">cm3</span> = 0.1000 <span class=\"unit\">dm3</span> です。",
        // EN: The data have 4 significant figures, so give 4 in your answer.
        "データは有効数字 4 桁なので、答えも 4 桁にします。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 100.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.1000 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.2000 <span class="unit">mol dm-3</span> × 0.1000 <span class="unit">dm3</span><br>&nbsp;&nbsp;= 0.02000 <span class="unit">mol</span> &nbsp; (M1)</div><div class="worked__math"><i>m</i> = <i>n</i> × <i>M</i><br>&nbsp;&nbsp;= 0.02000 <span class="unit">mol</span> × 105.99 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 2.1198 <span class="unit">g</span><br>&nbsp;&nbsp;= <strong>2.120 <span class="unit">g</span></strong> &nbsp; (M2)</div><p>Named slips: 21.20 g is the mass for a whole <span class="unit">dm3</span> (volume not used). 2120 g means the volume was left in <span class="unit">cm3</span>.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 100.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.1000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = <i>C</i><i>V</i><br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">mol dm-3</span> × 0.1000 <span class=\"unit\">dm3</span><br>&nbsp;&nbsp;= 0.02000 <span class=\"unit\">mol</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>m</i> = <i>n</i> × <i>M</i><br>&nbsp;&nbsp;= 0.02000 <span class=\"unit\">mol</span> × 105.99 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 2.1198 <span class=\"unit\">g</span><br>&nbsp;&nbsp;= <strong>2.120 <span class=\"unit\">g</span></strong> &nbsp; (M2)</div><p>よくあるミス：21.20 g は、溶液がまるごと 1 <span class=\"unit\">dm3</span> あるときの質量です（体積を使っていない）。2120 g は、体積を <span class=\"unit\">cm3</span> のままにしたときの値です。</p>",
    },

    // ── s1-4-q037 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q037": {
      // EN: <p>A solution of hydrochloric acid has a concentration of 7.30 <span class="unit">g dm-3</span>.</p><p>Calculate its concentration in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">HCl</span>) = 36.46 <span class="unit">g mol-1</span></p>
      stem: "<p>ある塩酸 (hydrochloric acid) の濃度は 7.30 <span class=\"unit\">g dm-3</span> です。</p><p>この濃度を <span class=\"unit\">mol dm-3</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p><i>M</i>(<span class=\"chem\">HCl</span>) = 36.46 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Both units are "per <span class="unit">dm3</span>". Only the top of the unit changes: grams become moles.
        "どちらの単位も「1 <span class=\"unit\">dm3</span> あたり」です。変わるのは単位の前半だけで、グラムがモルになります。",
        // EN: Grams to moles: divide by the molar mass, as in <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span>.
        "グラムからモルへ直すには、<span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> と同じように、モル質量でわります。",
      ],
      // EN: <p>Concentration in <span class="unit">mol dm-3</span> = concentration in <span class="unit">g dm-3</span> ÷ molar mass.</p><div class="worked__math"><i>C</i> = <span class="frac"><span>7.30 <span class="unit">g dm-3</span></span><span>36.46 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2002 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.200 <span class="unit">mol dm-3</span></strong></div><p>Named slip: multiplying gives 266. One <span class="unit">dm3</span> holding 7.30 g of a substance with <i>M</i> ≈ 36 must hold much less than one mole.</p>
      solution: "<p><span class=\"unit\">mol dm-3</span> 単位の濃度 = <span class=\"unit\">g dm-3</span> 単位の濃度 ÷ モル質量。</p><div class=\"worked__math\"><i>C</i> = <span class=\"frac\"><span>7.30 <span class=\"unit\">g dm-3</span></span><span>36.46 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.2002 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.200 <span class=\"unit\">mol dm-3</span></strong></div><p>よくあるミス：かけ算をすると 266 になります。<i>M</i> ≈ 36 の物質が 1 <span class=\"unit\">dm3</span> に 7.30 g しか入っていないので、1 モルよりずっと少ないはずです。</p>",
    },

    // ── s1-4-q038 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q038": {
      // EN: <p>A solution of potassium manganate(VII) has [<span class="chem">KMnO4</span>] = 0.0250 <span class="unit">mol dm-3</span>.</p><p>Calculate its concentration in <span class="unit">g dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">KMnO4</span>) = 158.04 <span class="unit">g mol-1</span></p>
      stem: "<p>過マンガン酸カリウム (potassium manganate(VII)) の溶液があり、[<span class=\"chem\">KMnO4</span>] = 0.0250 <span class=\"unit\">mol dm-3</span> です。</p><p>この濃度を <span class=\"unit\">g dm-3</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p><i>M</i>(<span class=\"chem\">KMnO4</span>) = 158.04 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: You are changing moles into grams, in every <span class="unit">dm3</span>. Which way does <span class="mono"><i>m</i> = <i>n</i> × <i>M</i></span> go?
        "1 <span class=\"unit\">dm3</span> あたりのモルを、グラムに直します。<span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> は、どちら向きの変換ですか。",
        // EN: Multiply the molar concentration by the molar mass. Check the units: mol dm<sup>−3</sup> × g mol<sup>−1</sup> = g dm<sup>−3</sup>.
        "モル濃度にモル質量をかけます。単位を確かめましょう。mol dm<sup>−3</sup> × g mol<sup>−1</sup> = g dm<sup>−3</sup> になります。",
      ],
      // EN: <p>Concentration in <span class="unit">g dm-3</span> = concentration in <span class="unit">mol dm-3</span> × molar mass.</p><div class="worked__math"><i>C</i> = 0.0250 <span class="unit">mol dm-3</span> × 158.04 <span class="unit">g mol-1</span><br>&nbsp;&nbsp;= 3.951 <span class="unit">g dm-3</span><br>&nbsp;&nbsp;= <strong>3.95 <span class="unit">g dm-3</span></strong></div><p>Named slip: dividing gives 0.000158. One mole of <span class="chem">KMnO4</span> has a mass of 158 g, so the number of grams must be bigger than the number of moles.</p>
      solution: "<p><span class=\"unit\">g dm-3</span> 単位の濃度 = <span class=\"unit\">mol dm-3</span> 単位の濃度 × モル質量。</p><div class=\"worked__math\"><i>C</i> = 0.0250 <span class=\"unit\">mol dm-3</span> × 158.04 <span class=\"unit\">g mol-1</span><br>&nbsp;&nbsp;= 3.951 <span class=\"unit\">g dm-3</span><br>&nbsp;&nbsp;= <strong>3.95 <span class=\"unit\">g dm-3</span></strong></div><p>よくあるミス：わり算をすると 0.000158 になります。<span class=\"chem\">KMnO4</span> 1 モルの質量は 158 g なので、グラムの数値はモルの数値より大きくなるはずです。</p>",
    },

    // ── s1-4-q039 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q039": {
      // EN: <p>A solution of magnesium chloride has [<span class="chem">MgCl2</span>] = 0.15 <span class="unit">mol dm-3</span>.</p><p>What is the concentration of chloride ions, [<span class="chem">Cl-</span>], in <span class="unit">mol dm-3</span>?</p>
      stem: "<p>塩化マグネシウムの溶液があり、[<span class=\"chem\">MgCl2</span>] = 0.15 <span class=\"unit\">mol dm-3</span> です。</p><p>塩化物イオンの濃度 [<span class=\"chem\">Cl-</span>] は何 <span class=\"unit\">mol dm-3</span> ですか。</p>",
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
        "この塩が水に溶けるときの変化を書きましょう：<span class=\"chem\">MgCl2 -> Mg^2+ + 2Cl-</span>。",
        // EN: How many moles of <span class="chem">Cl-</span> come from one mole of <span class="chem">MgCl2</span>?
        "<span class=\"chem\">MgCl2</span> 1 モルから、<span class=\"chem\">Cl-</span> は何モル生じますか。",
      ],
      // EN: <div class="worked__math"><span class="chem">MgCl2(s) -> Mg^2+(aq) + 2Cl-(aq)</span></div><div class="worked__math">[<span class="chem">Cl-</span>] = 2 × [<span class="chem">MgCl2</span>]<br>&nbsp;&nbsp;= 2 × 0.15 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.30 <span class="unit">mol dm-3</span></strong></div>
      solution: "<div class=\"worked__math\"><span class=\"chem\">MgCl2(s) -> Mg^2+(aq) + 2Cl-(aq)</span></div><div class=\"worked__math\">[<span class=\"chem\">Cl-</span>] = 2 × [<span class=\"chem\">MgCl2</span>]<br>&nbsp;&nbsp;= 2 × 0.15 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= <strong>0.30 <span class=\"unit\">mol dm-3</span></strong></div>",
      misconception: {
        // EN (option A): You divided by 2. Each formula unit releases 2 chloride ions, so there are more chloride ions than formula units, not fewer.
        "0": "2 でわりました。組成式単位 1 つから塩化物イオンが 2 個出るので、塩化物イオンは組成式単位より多くなります。少なくはなりません。",
        // EN (option B): This is the concentration of <span class="chem">Mg^2+</span> ions. The subscript 2 in <span class="chem">MgCl2</span> means each formula unit gives 2 chloride ions.
        "1": "これは <span class=\"chem\">Mg^2+</span> イオンの濃度です。<span class=\"chem\">MgCl2</span> の添え字 2 は、組成式単位 1 つから塩化物イオンが 2 個生じるという意味です。",
        // EN (option D): This is the total concentration of all ions (1 <span class="chem">Mg^2+</span> + 2 <span class="chem">Cl-</span>). The question asks for chloride ions only.
        "3": "これは、すべてのイオンを合わせた濃度です（<span class=\"chem\">Mg^2+</span> 1 個 + <span class=\"chem\">Cl-</span> 2 個）。問われているのは塩化物イオンだけです。",
      },
    },

    // ── s1-4-q040 · numeric · exam · SL · Structure 1.4.5 · 1 mark
    "s1-4-q040": {
      // EN: <p>A student has a 1.00 <span class="unit">mol dm-3</span> stock solution of copper(II) sulfate. They need 250.0 <span class="unit">cm3</span> of a 0.0800 <span class="unit">mol dm-3</span> solution.</p><p>Calculate the volume of stock solution needed, in <span class="unit">cm3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>ある生徒が、1.00 <span class=\"unit\">mol dm-3</span> の硫酸銅(II) の原液 (stock solution) を持っています。0.0800 <span class=\"unit\">mol dm-3</span> の溶液が 250.0 <span class=\"unit\">cm3</span> 必要です。</p><p>必要な原液の体積を <span class=\"unit\">cm3</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: Diluting adds water but does not change the amount of solute. So <i>n</i> before = <i>n</i> after, which gives <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.
        "うすめると水は増えますが、溶質の物質量は変わりません。うすめる前の <i>n</i> = うすめたあとの <i>n</i> なので、<span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> が成り立ちます。",
        // EN: Label the values: <i>C</i><sub>1</sub> = 1.00, <i>C</i><sub>2</sub> = 0.0800, <i>V</i><sub>2</sub> = 250.0 <span class="unit">cm3</span>. Both volumes can stay in <span class="unit">cm3</span> here because the same unit is on both sides.
        "値に記号を付けます。<i>C</i><sub>1</sub> = 1.00、<i>C</i><sub>2</sub> = 0.0800、<i>V</i><sub>2</sub> = 250.0 <span class=\"unit\">cm3</span> です。両辺で同じ単位を使うので、ここでは体積を 2 つとも <span class=\"unit\">cm3</span> のままにできます。",
      ],
      // EN: <div class="worked__math"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></div><div class="worked__math"><i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class="frac"><span>0.0800 <span class="unit">mol dm-3</span> × 250.0 <span class="unit">cm3</span></span><span>1.00 <span class="unit">mol dm-3</span></span></span></div><div class="worked__math"><i>V</i><sub>1</sub> = <strong>20.0 <span class="unit">cm3</span></strong></div><p>Size check: the new solution is 12.5 times more dilute, so you need one 12.5th of the final volume. The 20.0 <span class="unit">cm3</span> is then made up to 250.0 <span class="unit">cm3</span> with distilled water. You do not add 250 <span class="unit">cm3</span> of water to it.</p>
      solution: "<div class=\"worked__math\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></div><div class=\"worked__math\"><i>V</i><sub>1</sub> = <span class=\"frac\"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class=\"frac\"><span>0.0800 <span class=\"unit\">mol dm-3</span> × 250.0 <span class=\"unit\">cm3</span></span><span>1.00 <span class=\"unit\">mol dm-3</span></span></span></div><div class=\"worked__math\"><i>V</i><sub>1</sub> = <strong>20.0 <span class=\"unit\">cm3</span></strong></div><p>大きさの確認：新しい溶液は 12.5 倍にうすまっています。だから、原液は最終的な体積の 12.5 分の 1 だけ必要です。この 20.0 <span class=\"unit\">cm3</span> に蒸留水を加えて、全体を 250.0 <span class=\"unit\">cm3</span> にします。250 <span class=\"unit\">cm3</span> の水を加えるのではありません。</p>",
    },

    // ── s1-4-q041 · order · exam · SL · Structure 1.4.5 · 2 marks
    "s1-4-q041": {
      // EN: <p>Put these steps in order to prepare 250.0 <span class="unit">cm3</span> of a standard solution from a solid.</p>
      stem: "<p>固体から標準溶液 (standard solution) 250.0 <span class=\"unit\">cm3</span> をつくります。次の操作を正しい順に並べましょう。</p>",
      options: [
        // EN: Weigh the required mass of solid accurately on a balance.
        "必要な質量の固体を、電子てんびんで正確にはかる。",
        // EN: Dissolve the solid in a small volume of distilled water in a beaker, stirring with a glass rod.
        "ビーカーの中で、固体を少量の蒸留水に溶かす。ガラス棒でかき混ぜる。",
        // EN: Pour the solution through a funnel into a 250.0 cm<sup>3</sup> volumetric flask. Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask.
        "ろうとを使って、溶液を 250.0 cm<sup>3</sup> のメスフラスコ (volumetric flask) に注ぐ。ビーカー、ガラス棒、ろうとを蒸留水ですすぎ、その洗液もフラスコに加える。",
        // EN: Add distilled water until the bottom of the meniscus is on the graduation mark, adding the last part drop by drop.
        "メニスカスの底が標線に合うまで、蒸留水を加える。最後は 1 滴ずつ加える。",
        // EN: Stopper the flask and invert it several times to mix.
        "フラスコに栓をして、数回逆さにして混ぜる。",
      ],
      hints: [
        // EN: The solid must be fully dissolved before the volume is made up to the mark.
        "標線まで水を加える前に、固体を完全に溶かしておく必要があります。",
        // EN: Mixing comes last. If you mixed and then added more water, the concentration would change.
        "混ぜるのは最後です。混ぜたあとで水を足すと、濃度が変わってしまいます。",
      ],
      // EN: <p>Weigh, dissolve, transfer with rinsings, make up to the mark, mix.</p><p>The rinsings matter because any solution left in the beaker would mean less solute in the flask than you weighed. The flask is filled to the mark so that the volume of <em>solution</em> is exactly 250.0 <span class="unit">cm3</span>. Inverting makes the concentration the same throughout.</p>
      solution: "<p>「はかる → 溶かす → 洗液ごと移す → 標線まで水を加える → 混ぜる」の順です。</p><p>洗液が大切なのは、ビーカーに溶液が残ると、フラスコの中の溶質がはかった量より少なくなるからです。標線まで満たすのは、<em>溶液</em>の体積をちょうど 250.0 <span class=\"unit\">cm3</span> にするためです。逆さにして混ぜると、濃度がどこでも同じになります。</p>",
    },

    // ── s1-4-q042 · short · exam · SL · Structure 1.4.5 · 3 marks
    "s1-4-q042": {
      // EN: <p>A student has weighed 2.650 <span class="unit">g</span> of anhydrous sodium carbonate into a small beaker.</p><p>Describe how the student should use this solid to prepare 250.0 <span class="unit">cm3</span> of a standard solution.</p>
      stem: "<p>ある生徒が、無水炭酸ナトリウム 2.650 <span class=\"unit\">g</span> を小さなビーカーにはかり取りました。</p><p>この固体を使って標準溶液 (standard solution) 250.0 <span class=\"unit\">cm3</span> をつくる方法を記述しなさい (describe)。</p>",
      hints: [
        // EN: Name the piece of glassware that measures one fixed volume very precisely.
        "決まった 1 つの体積をとても正確にはかれるガラス器具があります。その名前を書きましょう。",
        // EN: How do you make sure that <em>all</em> of the weighed solid ends up in the solution?
        "はかり取った固体を<em>すべて</em>溶液に入れるには、どうしますか。",
        // EN: There are two more things to say: how the final volume is set, and what you do after that.
        "書くことがあと 2 つあります。最終的な体積をどう合わせるか、そしてそのあとに何をするかです。",
      ],
      // EN: <p>What the marks reward: the type of water (distilled or deionized, because tap water contains dissolved ions), the volumetric flask with the rinsings transferred, making up to the mark, and mixing by inversion.</p><p>Two answers that lose marks: "add 250 <span class="unit">cm3</span> of water" (the final <em>solution</em> must be 250.0 <span class="unit">cm3</span>, which is not the same thing) and using a beaker or measuring cylinder to measure the final volume (not precise enough).</p>
      solution: "<p>点になるのは次の内容です。水の種類（蒸留水または脱イオン水。水道水には溶けたイオンが含まれるため）。メスフラスコを使い、洗液も移すこと。標線まで水を加えること。逆さにして混ぜること。</p><p>点を失う答えが 2 つあります。1 つは「水を 250 <span class=\"unit\">cm3</span> 加える」です（250.0 <span class=\"unit\">cm3</span> でなければならないのは、できあがった<em>溶液</em>です。同じことではありません）。もう 1 つは、最終的な体積をビーカーやメスシリンダーではかることです（精度が足りません）。</p>",
      // EN: <p>Dissolve the solid in distilled (deionized) water in the beaker. Transfer the solution to a 250.0 cm<sup>3</sup> volumetric flask, rinsing the beaker (and funnel and stirring rod) with distilled water and adding the rinsings to the flask. Add distilled water up to the graduation mark (bottom of the meniscus on the line). Stopper and invert the flask several times to mix.</p>
      answer: "<p>ビーカーの中で、固体を蒸留水（脱イオン水）に溶かす。溶液を 250.0 cm<sup>3</sup> のメスフラスコに移す。ビーカー（とろうと、ガラス棒）を蒸留水ですすぎ、洗液もフラスコに加える。標線まで蒸留水を加える（メニスカスの底を線に合わせる）。栓をして、フラスコを数回逆さにして混ぜる。</p>",
      markscheme: [
        // EN: Dissolve the solid in distilled / deionized water (in the beaker). (Do not accept "water" alone.)
        "固体を蒸留水 / 脱イオン水に（ビーカーの中で）溶かす。（「水」だけでは認めない。）",
        // EN: Transfer to a 250 cm³ volumetric flask AND rinse the beaker, adding the rinsings / washings to the flask.
        "250 cm³ のメスフラスコ (volumetric flask) に移し、かつビーカーをすすいで、その洗液もフラスコに加える。",
        // EN: Make up to the (graduation) mark with distilled water / until the bottom of the meniscus is on the mark. (Do not accept "add 250 cm³ of water".)
        "蒸留水を標線まで加える / メニスカスの底が標線に合うまで加える。（「水を 250 cm³ 加える」は認めない。）",
        // EN: Stopper and invert / shake to mix thoroughly. (Any three points for 3 marks.)
        "栓をして、逆さにする / 振ってよく混ぜる。（どれか 3 つで 3 点。）",
      ],
    },

    // ── s1-4-q043 · short · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q043": {
      // EN: <p>A student has a 0.500 <span class="unit">mol dm-3</span> stock solution of nickel(II) sulfate. To make a calibration curve they need 100.0 <span class="unit">cm3</span> of a 0.0500 <span class="unit">mol dm-3</span> solution.</p><p>Calculate the volume of stock solution needed and describe how to carry out the dilution, naming the glassware.</p>
      stem: "<p>ある生徒が、0.500 <span class=\"unit\">mol dm-3</span> の硫酸ニッケル(II) の原液 (stock solution) を持っています。検量線 (calibration curve) をつくるために、0.0500 <span class=\"unit\">mol dm-3</span> の溶液が 100.0 <span class=\"unit\">cm3</span> 必要です。</p><p>必要な原液の体積を計算しなさい (calculate)。また、使うガラス器具の名前を挙げて、希釈のしかたを記述しなさい (describe)。</p>",
      hints: [
        // EN: The amount of solute does not change on dilution: <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>.
        "うすめても、溶質の物質量は変わりません：<span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>。",
        // EN: Choose glassware made to deliver or contain one precise volume. A measuring cylinder is not precise enough.
        "決まった 1 つの体積を正確にはかり取る器具と、正確に入れる器具を選びます。メスシリンダーでは精度が足りません。",
        // EN: How do you make the final volume exactly 100.0 <span class="unit">cm3</span>?
        "最終的な体積をちょうど 100.0 <span class=\"unit\">cm3</span> にするには、どうしますか。",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>1</sub> = <span class="frac"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class="frac"><span>0.0500 <span class="unit">mol dm-3</span> × 100.0 <span class="unit">cm3</span></span><span>0.500 <span class="unit">mol dm-3</span></span></span><br>&nbsp;&nbsp;= <strong>10.0 <span class="unit">cm3</span></strong></div><p>A pipette delivers the 10.0 <span class="unit">cm3</span> precisely. A volumetric flask fixes the final volume precisely. Writing "add 90 <span class="unit">cm3</span> of water" does not earn the mark: you make the solution <em>up to the mark</em>, because it is the final volume of solution that must be 100.0 <span class="unit">cm3</span>.</p>
      solution: "<div class=\"worked__math\"><i>V</i><sub>1</sub> = <span class=\"frac\"><span><i>C</i><sub>2</sub><i>V</i><sub>2</sub></span><span><i>C</i><sub>1</sub></span></span><br>&nbsp;&nbsp;= <span class=\"frac\"><span>0.0500 <span class=\"unit\">mol dm-3</span> × 100.0 <span class=\"unit\">cm3</span></span><span>0.500 <span class=\"unit\">mol dm-3</span></span></span><br>&nbsp;&nbsp;= <strong>10.0 <span class=\"unit\">cm3</span></strong></div><p>ホールピペットを使うと、10.0 <span class=\"unit\">cm3</span> を正確にはかり取れます。メスフラスコを使うと、最終的な体積が正確に決まります。「水を 90 <span class=\"unit\">cm3</span> 加える」と書いても点になりません。溶液は<em>標線まで</em>水を加えてつくります。100.0 <span class=\"unit\">cm3</span> でなければならないのは、できあがった溶液の体積だからです。</p>",
      // EN: <p><i>V</i><sub>1</sub> = (0.0500 × 100.0) ÷ 0.500 = 10.0 cm<sup>3</sup>.</p><p>Use a 10.0 cm<sup>3</sup> volumetric (bulb) pipette to transfer the stock solution into a 100.0 cm<sup>3</sup> volumetric flask. Add distilled water up to the graduation mark. Stopper and invert to mix.</p>
      answer: "<p><i>V</i><sub>1</sub> = (0.0500 × 100.0) ÷ 0.500 = 10.0 cm<sup>3</sup>。</p><p>10.0 cm<sup>3</sup> のホールピペット (volumetric pipette) で原液をはかり取り、100.0 cm<sup>3</sup> のメスフラスコ (volumetric flask) に移す。標線まで蒸留水を加える。栓をして、逆さにして混ぜる。</p>",
      markscheme: [
        // EN: Volume of stock = 10.0 cm³.
        "原液の体積 = 10.0 cm³。",
        // EN: Measured with a (10.0 cm³) volumetric / graduated pipette (or burette). (Do not accept measuring cylinder.)
        "（10.0 cm³ の）ホールピペット / メスピペット（またはビュレット）ではかり取る。（メスシリンダーは認めない。）",
        // EN: Into a 100.0 cm³ volumetric flask.
        "100.0 cm³ のメスフラスコに入れる。",
        // EN: Made up to the mark with distilled / deionized water, AND mixed / inverted. (The volume mark plus any two of the other points for 3 marks.)
        "蒸留水 / 脱イオン水を標線まで加え、かつ混ぜる / 逆さにする。（体積の点に加えて、ほかの 3 つのうち 2 つで 3 点。）",
      ],
    },

    // ── s1-4-q044 · numeric · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q044": {
      // EN: <p>5.55 <span class="unit">g</span> of calcium chloride, <span class="chem">CaCl2</span>, is dissolved in distilled water and made up to 500.0 <span class="unit">cm3</span> in a volumetric flask (solution A).</p><p>10.0 <span class="unit">cm3</span> of solution A is then pipetted into a 250.0 <span class="unit">cm3</span> volumetric flask and made up to the mark (solution B).</p><p>Calculate [<span class="chem">Cl-</span>] in solution B, in <span class="unit">mol dm-3</span>. Give your answer to 3 significant figures.</p><p><i>M</i>(<span class="chem">CaCl2</span>) = 110.98 <span class="unit">g mol-1</span></p>
      stem: "<p>塩化カルシウム <span class=\"chem\">CaCl2</span> 5.55 <span class=\"unit\">g</span> を蒸留水に溶かし、メスフラスコで全体を 500.0 <span class=\"unit\">cm3</span> にします（溶液 A）。</p><p>次に、溶液 A を 10.0 <span class=\"unit\">cm3</span> ホールピペットではかり取り、250.0 <span class=\"unit\">cm3</span> のメスフラスコに入れて、標線まで水を加えます（溶液 B）。</p><p>溶液 B の [<span class=\"chem\">Cl-</span>] を <span class=\"unit\">mol dm-3</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p><p><i>M</i>(<span class=\"chem\">CaCl2</span>) = 110.98 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Plan the chain: mass → amount of <span class="chem">CaCl2</span> → concentration of solution A → chloride ion concentration → dilution.
        "計算の流れを決めます：質量 → <span class=\"chem\">CaCl2</span> の物質量 → 溶液 A の濃度 → 塩化物イオンの濃度 → 希釈。",
        // EN: For solution A use <span class="mono"><i>n</i> = <i>m</i> ÷ <i>M</i></span> then <span class="mono"><i>C</i> = <i>n</i> ÷ <i>V</i></span> with <i>V</i> = 0.5000 <span class="unit">dm3</span>. Each <span class="chem">CaCl2</span> gives 2 <span class="chem">Cl-</span>.
        "溶液 A には、まず <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>、次に <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span> を使います。<i>V</i> = 0.5000 <span class=\"unit\">dm3</span> です。<span class=\"chem\">CaCl2</span> 1 つから <span class=\"chem\">Cl-</span> が 2 個生じます。",
        // EN: For the dilution use <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> with <i>V</i><sub>1</sub> = 10.0 <span class="unit">cm3</span> and <i>V</i><sub>2</sub> = 250.0 <span class="unit">cm3</span>.
        "希釈には <span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> を使います。<i>V</i><sub>1</sub> = 10.0 <span class=\"unit\">cm3</span>、<i>V</i><sub>2</sub> = 250.0 <span class=\"unit\">cm3</span> です。",
      ],
      // EN: <div class="worked__math"><i>n</i>(<span class="chem">CaCl2</span>) = <span class="frac"><span>5.55 <span class="unit">g</span></span><span>110.98 <span class="unit">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05001 <span class="unit">mol</span></div><div class="worked__math"><i>V</i>(A) = 500.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.5000 <span class="unit">dm3</span></div><div class="worked__math">[<span class="chem">CaCl2</span>] in A = <span class="frac"><span>0.05001 <span class="unit">mol</span></span><span>0.5000 <span class="unit">dm3</span></span></span><br>&nbsp;&nbsp;= 0.1000 <span class="unit">mol dm-3</span> &nbsp; (M1)</div><div class="worked__math">[<span class="chem">Cl-</span>] in A = 2 × 0.1000 <span class="unit">mol dm-3</span><br>&nbsp;&nbsp;= 0.2000 <span class="unit">mol dm-3</span> &nbsp; (M2)</div><p>Dilution: the same ions are spread through a larger volume, so multiply by <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>.</p><div class="worked__math"><span class="frac"><span><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class="frac"><span>10.0 <span class="unit">cm3</span></span><span>250.0 <span class="unit">cm3</span></span></span><br>&nbsp;&nbsp;= 0.0400</div><div class="worked__math">[<span class="chem">Cl-</span>] in B = 0.2000 <span class="unit">mol dm-3</span> × 0.0400<br>&nbsp;&nbsp;= <strong>0.00800 <span class="unit">mol dm-3</span></strong> &nbsp; (M3)</div><p>Named slips: 0.00400 means you forgot that each <span class="chem">CaCl2</span> gives 2 chloride ions. 0.200 is solution A, before the dilution.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(<span class=\"chem\">CaCl2</span>) = <span class=\"frac\"><span>5.55 <span class=\"unit\">g</span></span><span>110.98 <span class=\"unit\">g mol-1</span></span></span><br>&nbsp;&nbsp;= 0.05001 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>V</i>(A) = 500.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.5000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\">[<span class=\"chem\">CaCl2</span>]（溶液 A） = <span class=\"frac\"><span>0.05001 <span class=\"unit\">mol</span></span><span>0.5000 <span class=\"unit\">dm3</span></span></span><br>&nbsp;&nbsp;= 0.1000 <span class=\"unit\">mol dm-3</span> &nbsp; (M1)</div><div class=\"worked__math\">[<span class=\"chem\">Cl-</span>]（溶液 A） = 2 × 0.1000 <span class=\"unit\">mol dm-3</span><br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">mol dm-3</span> &nbsp; (M2)</div><p>希釈：同じ数のイオンが、より大きな体積に広がります。だから <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub> をかけます。</p><div class=\"worked__math\"><span class=\"frac\"><span><i>V</i><sub>1</sub></span><span><i>V</i><sub>2</sub></span></span> = <span class=\"frac\"><span>10.0 <span class=\"unit\">cm3</span></span><span>250.0 <span class=\"unit\">cm3</span></span></span><br>&nbsp;&nbsp;= 0.0400</div><div class=\"worked__math\">[<span class=\"chem\">Cl-</span>]（溶液 B） = 0.2000 <span class=\"unit\">mol dm-3</span> × 0.0400<br>&nbsp;&nbsp;= <strong>0.00800 <span class=\"unit\">mol dm-3</span></strong> &nbsp; (M3)</div><p>よくあるミス：0.00400 は、<span class=\"chem\">CaCl2</span> 1 つから塩化物イオンが 2 個生じることを忘れたときの値です。0.200 は、うすめる前の溶液 A の値です。</p>",
    },

    // ── s1-4-q045 · numeric · challenge · SL · Structure 1.4.5 · 3 marks
    "s1-4-q045": {
      // EN: <p>A student makes a calibration curve for a coloured solution of copper(II) sulfate by measuring the absorbance of four standard solutions in a colorimeter.</p><div class="table-scroll"><table class="data"><caption>Calibration data</caption><thead><tr><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">[<span class="chem">CuSO4</span>] / mol dm<sup>−3</sup></span></th><th scope="col" class="num"><span style="text-transform:none;letter-spacing:0">Absorbance</span></th></tr></thead><tbody><tr><td class="num">0.010</td><td class="num">0.120</td></tr><tr><td class="num">0.020</td><td class="num">0.240</td></tr><tr><td class="num">0.030</td><td class="num">0.360</td></tr><tr><td class="num">0.040</td><td class="num">0.480</td></tr></tbody></table></div><p>The graph of absorbance against concentration is a straight line through the origin.</p><p>An unknown solution is too dark to measure directly. The student dilutes 5.00 <span class="unit">cm3</span> of it to 100.0 <span class="unit">cm3</span>. The diluted solution has an absorbance of 0.300.</p><p>Determine the concentration of the <strong>original</strong> unknown solution, in <span class="unit">mol dm-3</span>. Give your answer to 2 significant figures.</p>
      stem: "<p>ある生徒が、色のついた硫酸銅(II) 溶液の検量線 (calibration curve) をつくります。比色計 (colorimeter) を使って、4 つの標準溶液の吸光度 (absorbance) をはかりました。</p><div class=\"table-scroll\"><table class=\"data\"><caption>検量線のデータ</caption><thead><tr><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">[<span class=\"chem\">CuSO4</span>] / mol dm<sup>−3</sup></span></th><th scope=\"col\" class=\"num\"><span style=\"text-transform:none;letter-spacing:0\">吸光度</span></th></tr></thead><tbody><tr><td class=\"num\">0.010</td><td class=\"num\">0.120</td></tr><tr><td class=\"num\">0.020</td><td class=\"num\">0.240</td></tr><tr><td class=\"num\">0.030</td><td class=\"num\">0.360</td></tr><tr><td class=\"num\">0.040</td><td class=\"num\">0.480</td></tr></tbody></table></div><p>濃度を横軸、吸光度を縦軸にとったグラフは、原点を通る直線になります。</p><p>濃度のわからない溶液は、色が濃すぎてそのままでは測定できません。そこで生徒は、この溶液 5.00 <span class=\"unit\">cm3</span> をうすめて 100.0 <span class=\"unit\">cm3</span> にします。うすめた溶液の吸光度は 0.300 です。</p><p><strong>もとの</strong>溶液の濃度を <span class=\"unit\">mol dm-3</span> 単位で求めなさい (determine)。有効数字 2 桁で答えましょう。</p>",
      hints: [
        // EN: A calibration curve turns a measurement (absorbance) into a concentration. Find the gradient of the line: absorbance per <span class="unit">mol dm-3</span>.
        "検量線は、測定値（吸光度）を濃度に直すためのものです。直線の傾きを求めましょう。傾きは、1 <span class=\"unit\">mol dm-3</span> あたりの吸光度です。",
        // EN: Use the line to read the concentration of the <em>diluted</em> solution: concentration = absorbance ÷ gradient.
        "直線を使って、<em>うすめた</em>溶液の濃度を読み取ります。濃度 = 吸光度 ÷ 傾き です。",
        // EN: Then undo the dilution with <span class="mono"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span>. The original solution must be more concentrated than the diluted one.
        "次に、<span class=\"mono\"><i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub></span> で、うすめる前の濃度に戻します。もとの溶液は、うすめた溶液より濃いはずです。",
      ],
      // EN: <div class="worked__math">Gradient = <span class="frac"><span>0.480</span><span>0.040 <span class="unit">mol dm-3</span></span></span><br>&nbsp;&nbsp;= 12.0 <span class="unit">dm3 mol-1</span> &nbsp; (M1)</div><div class="worked__math"><i>C</i>(diluted) = <span class="frac"><span>0.300</span><span>12.0 <span class="unit">dm3 mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0250 <span class="unit">mol dm-3</span> &nbsp; (M2)</div><p>Undo the dilution. The original solution is more concentrated by the factor <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>.</p><div class="worked__math"><span class="frac"><span><i>V</i><sub>2</sub></span><span><i>V</i><sub>1</sub></span></span> = <span class="frac"><span>100.0 <span class="unit">cm3</span></span><span>5.00 <span class="unit">cm3</span></span></span><br>&nbsp;&nbsp;= 20.0</div><div class="worked__math"><i>C</i>(original) = 0.0250 <span class="unit">mol dm-3</span> × 20.0<br>&nbsp;&nbsp;= <strong>0.50 <span class="unit">mol dm-3</span></strong> &nbsp; (M3)</div><p>The absorbance 0.300 lies between the standards (0.240 and 0.360), so the reading is inside the range of the calibration line. That is why the dark solution was diluted first. Named slips: 0.025 is the diluted solution. 0.00125 means you applied the dilution factor the wrong way round.</p>
      solution: "<div class=\"worked__math\">傾き = <span class=\"frac\"><span>0.480</span><span>0.040 <span class=\"unit\">mol dm-3</span></span></span><br>&nbsp;&nbsp;= 12.0 <span class=\"unit\">dm3 mol-1</span> &nbsp; (M1)</div><div class=\"worked__math\"><i>C</i>(うすめた溶液) = <span class=\"frac\"><span>0.300</span><span>12.0 <span class=\"unit\">dm3 mol-1</span></span></span><br>&nbsp;&nbsp;= 0.0250 <span class=\"unit\">mol dm-3</span> &nbsp; (M2)</div><p>うすめる前の濃度に戻します。もとの溶液は、<i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub> 倍だけ濃いです。</p><div class=\"worked__math\"><span class=\"frac\"><span><i>V</i><sub>2</sub></span><span><i>V</i><sub>1</sub></span></span> = <span class=\"frac\"><span>100.0 <span class=\"unit\">cm3</span></span><span>5.00 <span class=\"unit\">cm3</span></span></span><br>&nbsp;&nbsp;= 20.0</div><div class=\"worked__math\"><i>C</i>(もとの溶液) = 0.0250 <span class=\"unit\">mol dm-3</span> × 20.0<br>&nbsp;&nbsp;= <strong>0.50 <span class=\"unit\">mol dm-3</span></strong> &nbsp; (M3)</div><p>吸光度 0.300 は、標準溶液の値（0.240 と 0.360）の間にあります。つまり、検量線の範囲の中で読み取れています。色の濃い溶液を先にうすめたのは、このためです。よくあるミス：0.025 は、うすめた溶液の濃度です。0.00125 は、希釈倍率を逆向きに使ったときの値です。</p>",
    },

    // ── s1-4-q046 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "s1-4-q046": {
      // EN: <p>Which is a correct statement of Avogadro's law?</p>
      stem: "<p>アボガドロの法則 (Avogadro's law) を正しく述べている文はどれですか。</p>",
      options: [
        // EN: Equal masses of all gases, at the same temperature and pressure, occupy equal volumes.
        "同じ温度と圧力では、質量が等しい気体は、種類によらず同じ体積を占める。",
        // EN: Equal volumes of all gases, at the same temperature and pressure, contain equal numbers of molecules.
        "同じ温度と圧力では、体積が等しい気体は、種類によらず同じ数の分子を含む。",
        // EN: Equal volumes of all gases, at the same temperature and pressure, have equal masses.
        "同じ温度と圧力では、体積が等しい気体は、種類によらず同じ質量をもつ。",
        // EN: Equal volumes of all gases contain equal numbers of molecules at any temperature and pressure.
        "体積が等しい気体は、温度と圧力がどうであっても、種類によらず同じ数の分子を含む。",
      ],
      hints: [
        // EN: The law connects two things: the volume of a gas and the number of molecules in it.
        "この法則は 2 つのものを結びつけます。気体の体積と、その中の分子の数です。",
        // EN: A gas expands when heated or when the pressure is lowered. What conditions must be the same for a fair comparison?
        "気体は、加熱したり圧力を下げたりするとふくらみます。公平にくらべるには、どの条件をそろえる必要がありますか。",
      ],
      // EN: <p>Avogadro's law: equal volumes of all gases, measured under the same conditions of temperature and pressure, contain equal numbers of molecules. This means that for gases at the same temperature and pressure, the ratio of volumes equals the ratio of amounts in moles.</p>
      solution: "<p>アボガドロの法則：同じ温度・同じ圧力のもとではかると、体積が等しい気体は、種類によらず同じ数の分子を含みます。つまり、温度と圧力が同じ気体では、体積の比がモル単位の物質量の比に等しくなります。</p>",
      misconception: {
        // EN (option A): Equal masses of different gases contain different numbers of molecules, because their molar masses differ. The law links volume to number of molecules, not to mass.
        "0": "質量が等しくても、気体の種類が違えば分子の数は違います。モル質量が違うからです。この法則が結びつけるのは体積と分子の数で、質量ではありません。",
        // EN (option C): Equal volumes hold equal numbers of molecules, but the molecules of different gases have different masses. So the masses are not equal.
        "2": "体積が等しければ、分子の数は等しくなります。でも、気体の種類が違うと分子の質量が違います。だから質量は等しくなりません。",
        // EN (option D): The condition is missing. The two gases must be measured at the <em>same</em> temperature and pressure as each other.
        "3": "条件が抜けています。2 つの気体は、たがいに<em>同じ</em>温度と圧力ではからなければなりません。",
      },
    },

    // ── s1-4-q047 · numeric · foundation · SL · Structure 1.4.6 · 1 mark
    "s1-4-q047": {
      // EN: <p>Nitrogen reacts with hydrogen to form ammonia.</p><p><span class="chem">N2(g) + 3H2(g) -> 2NH3(g)</span></p><p>What volume of hydrogen, in <span class="unit">cm3</span>, reacts exactly with 30 <span class="unit">cm3</span> of nitrogen? All volumes are measured at the same temperature and pressure.</p>
      stem: "<p>窒素は水素と反応してアンモニアになります。</p><p><span class=\"chem\">N2(g) + 3H2(g) -> 2NH3(g)</span></p><p>30 <span class=\"unit\">cm3</span> の窒素とちょうど反応する水素の体積は何 <span class=\"unit\">cm3</span> ですか。体積はすべて同じ温度と圧力ではかります。</p>",
      hints: [
        // EN: For gases at the same temperature and pressure, the ratio of volumes is the same as the ratio of moles in the equation.
        "同じ温度と圧力の気体では、体積の比は化学反応式のモルの比と同じです。",
        // EN: The equation shows 1 volume of <span class="chem">N2</span> reacting with 3 volumes of <span class="chem">H2</span>.
        "化学反応式から、<span class=\"chem\">N2</span> 1 体積が <span class=\"chem\">H2</span> 3 体積と反応するとわかります。",
      ],
      // EN: <p>The mole ratio <span class="chem">N2</span> : <span class="chem">H2</span> is 1 : 3. At the same temperature and pressure the volume ratio is also 1 : 3.</p><div class="worked__math"><i>V</i>(<span class="chem">H2</span>) = 3 × 30 <span class="unit">cm3</span> = <strong>90 <span class="unit">cm3</span></strong></div><p>No molar masses or conversions to moles are needed. Avogadro's law lets you use the coefficients directly on the volumes.</p>
      solution: "<p>物質量の比（モル比）<span class=\"chem\">N2</span> : <span class=\"chem\">H2</span> は 1 : 3 です。同じ温度と圧力では、体積の比も 1 : 3 です。</p><div class=\"worked__math\"><i>V</i>(<span class=\"chem\">H2</span>) = 3 × 30 <span class=\"unit\">cm3</span> = <strong>90 <span class=\"unit\">cm3</span></strong></div><p>モル質量も、モルへの換算もいりません。アボガドロの法則があるので、係数をそのまま体積に使えます。</p>",
    },

    // ── s1-4-q048 · mcq · exam · SL · Structure 1.4.6 · 1 mark
    "s1-4-q048": {
      // EN: <p>20 <span class="unit">cm3</span> of propane is burned completely in 150 <span class="unit">cm3</span> of oxygen, which is an excess.</p><p><span class="chem">C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)</span></p><p>What is the total volume of gas remaining, in <span class="unit">cm3</span>, when the mixture has returned to the original temperature and pressure?</p>
      stem: "<p>20 <span class=\"unit\">cm3</span> のプロパンを、150 <span class=\"unit\">cm3</span> の酸素の中で完全燃焼させます。酸素は過剰 (in excess) にあります。</p><p><span class=\"chem\">C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)</span></p><p>混合物をもとの温度と圧力に戻したとき、残っている気体の体積は合わせて何 <span class=\"unit\">cm3</span> ですか。</p>",
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
        "係数を体積の比として使います。ただし気体だけです。状態記号をすべて確かめましょう。",
        // EN: Work out the volume of <span class="chem">O2</span> that reacts and the volume of <span class="chem">CO2</span> formed from 20 <span class="unit">cm3</span> of propane.
        "20 <span class=\"unit\">cm3</span> のプロパンと反応する <span class=\"chem\">O2</span> の体積と、生じる <span class=\"chem\">CO2</span> の体積を求めます。",
        // EN: What is in the container at the end? The gas that was made, plus any gas that was not used up.
        "最後に容器の中にあるのは何ですか。生じた気体と、使われずに残った気体です。",
      ],
      // EN: <div class="worked__math"><i>V</i>(<span class="chem">O2</span>) reacting = 5 × 20 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 100 <span class="unit">cm3</span></div><div class="worked__math"><i>V</i>(<span class="chem">O2</span>) left over = 150 <span class="unit">cm3</span> − 100 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 50 <span class="unit">cm3</span></div><div class="worked__math"><i>V</i>(<span class="chem">CO2</span>) formed = 3 × 20 <span class="unit">cm3</span><br>&nbsp;&nbsp;= 60 <span class="unit">cm3</span></div><p>The water is a liquid, so its volume is negligible.</p><div class="worked__math">Total gas = 50 <span class="unit">cm3</span> + 60 <span class="unit">cm3</span><br>&nbsp;&nbsp;= <strong>110 <span class="unit">cm3</span></strong></div>
      solution: "<div class=\"worked__math\"><i>V</i>(<span class=\"chem\">O2</span>)（反応した分） = 5 × 20 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 100 <span class=\"unit\">cm3</span></div><div class=\"worked__math\"><i>V</i>(<span class=\"chem\">O2</span>)（残った分） = 150 <span class=\"unit\">cm3</span> − 100 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 50 <span class=\"unit\">cm3</span></div><div class=\"worked__math\"><i>V</i>(<span class=\"chem\">CO2</span>)（生じた分） = 3 × 20 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= 60 <span class=\"unit\">cm3</span></div><p>水は液体なので、その体積は無視できるほど小さいです。</p><div class=\"worked__math\">気体の合計 = 50 <span class=\"unit\">cm3</span> + 60 <span class=\"unit\">cm3</span><br>&nbsp;&nbsp;= <strong>110 <span class=\"unit\">cm3</span></strong></div>",
      misconception: {
        // EN (option A): This is the <span class="chem">CO2</span> only. Some oxygen is left over: 150 <span class="unit">cm3</span> was supplied but only 100 <span class="unit">cm3</span> reacted.
        "0": "これは <span class=\"chem\">CO2</span> だけの体積です。酸素も残っています。150 <span class=\"unit\">cm3</span> 入れましたが、反応したのは 100 <span class=\"unit\">cm3</span> だけです。",
        // EN (option C): You counted the water as a gas (60 + 80) and left out the excess oxygen. The state symbol (l) shows that the water is liquid, so its volume is negligible.
        "2": "水を気体として数え（60 + 80）、過剰の酸素を入れ忘れました。状態記号 (l) から、水は液体だとわかります。だから、水の体積は無視できるほど小さいです。",
        // EN (option D): You included the excess oxygen, but you also counted 80 <span class="unit">cm3</span> of water vapour. The state symbol (l) shows that the water is liquid at the final conditions.
        "3": "過剰の酸素は入れましたが、水蒸気 80 <span class=\"unit\">cm3</span> も数えてしまいました。状態記号 (l) から、最後の条件では水は液体だとわかります。",
      },
    },

    // ── s1-4-q049 · numeric · exam · SL · Structure 1.4.6 · 1 mark
    "s1-4-q049": {
      // EN: <p>Butane burns completely in oxygen.</p><p><span class="chem">2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)</span></p><p>Calculate the volume of oxygen, in <span class="unit">cm3</span>, needed to burn 20.0 <span class="unit">cm3</span> of butane completely. Both volumes are measured at the same temperature and pressure. Give your answer to 3 significant figures.</p>
      stem: "<p>ブタンは酸素の中で完全燃焼します。</p><p><span class=\"chem\">2C4H10(g) + 13O2(g) -> 8CO2(g) + 10H2O(l)</span></p><p>20.0 <span class=\"unit\">cm3</span> のブタンを完全燃焼させるのに必要な酸素の体積を <span class=\"unit\">cm3</span> 単位で計算しなさい (calculate)。どちらの体積も、同じ温度と圧力ではかります。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: At the same temperature and pressure, volume ratio = mole ratio.
        "同じ温度と圧力では、体積の比 = 物質量の比（モル比）です。",
        // EN: The ratio is 2 volumes of butane to 13 volumes of oxygen. Watch the 2 in front of the butane: the ratio is not 1 : 13.
        "比は、ブタン 2 体積に対して酸素 13 体積です。ブタンの前の 2 に注意しましょう。比は 1 : 13 ではありません。",
      ],
      // EN: <p>The mole ratio <span class="chem">C4H10</span> : <span class="chem">O2</span> is 2 : 13. At the same temperature and pressure the volume ratio is also 2 : 13.</p><div class="worked__math"><i>V</i>(<span class="chem">O2</span>) = 20.0 <span class="unit">cm3</span> × <span class="frac"><span>13</span><span>2</span></span><br>&nbsp;&nbsp;= <strong>130 <span class="unit">cm3</span></strong></div><p>Named slip: 260 <span class="unit">cm3</span> means you multiplied by 13 and ignored the coefficient 2 on butane.</p>
      solution: "<p>物質量の比（モル比）<span class=\"chem\">C4H10</span> : <span class=\"chem\">O2</span> は 2 : 13 です。同じ温度と圧力では、体積の比も 2 : 13 です。</p><div class=\"worked__math\"><i>V</i>(<span class=\"chem\">O2</span>) = 20.0 <span class=\"unit\">cm3</span> × <span class=\"frac\"><span>13</span><span>2</span></span><br>&nbsp;&nbsp;= <strong>130 <span class=\"unit\">cm3</span></strong></div><p>よくあるミス：260 <span class=\"unit\">cm3</span> は、13 をかけただけで、ブタンの係数 2 を無視したときの値です。</p>",
    },

    // ── s1-4-q050 · mcq · challenge · SL · Structure 1.4.6 · 1 mark
    "s1-4-q050": {
      // EN: <p>10 <span class="unit">cm3</span> of a gaseous hydrocarbon, <span class="chem">C</span><sub><i>x</i></sub><span class="chem">H</span><sub><i>y</i></sub>, burns completely in excess oxygen. It forms 30 <span class="unit">cm3</span> of carbon dioxide and 40 <span class="unit">cm3</span> of water vapour. All volumes are measured at the same temperature (above 100 °C) and pressure.</p><p>What is the formula of the hydrocarbon?</p>
      stem: "<p>気体の炭化水素 <span class=\"chem\">C</span><sub><i>x</i></sub><span class=\"chem\">H</span><sub><i>y</i></sub> 10 <span class=\"unit\">cm3</span> を、過剰の酸素の中で完全燃焼させます。二酸化炭素が 30 <span class=\"unit\">cm3</span>、水蒸気が 40 <span class=\"unit\">cm3</span> 生じます。体積はすべて、同じ温度（100 °C より高い）と同じ圧力ではかります。</p><p>この炭化水素の化学式は何ですか。</p>",
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
        "アボガドロの法則：体積の比は、分子の数の比です。10 : 30 : 40 を簡単にしましょう。",
        // EN: One molecule of hydrocarbon gives 3 molecules of <span class="chem">CO2</span> and 4 molecules of <span class="chem">H2O</span>.
        "炭化水素 1 分子から、<span class=\"chem\">CO2</span> が 3 分子、<span class=\"chem\">H2O</span> が 4 分子生じます。",
        // EN: All the C atoms end up in <span class="chem">CO2</span> and all the H atoms end up in <span class="chem">H2O</span>. Count the atoms.
        "C 原子はすべて <span class=\"chem\">CO2</span> に、H 原子はすべて <span class=\"chem\">H2O</span> になります。原子の数を数えましょう。",
      ],
      // EN: <p>Volume ratio, hydrocarbon : <span class="chem">CO2</span> : <span class="chem">H2O</span>:</p><div class="worked__math">10 : 30 : 40 = 1 : 3 : 4</div><p>So 1 molecule of hydrocarbon gives 3 molecules of <span class="chem">CO2</span> and 4 molecules of <span class="chem">H2O</span>.</p><div class="worked__math">C atoms: <i>x</i> = 3 × 1 = 3</div><div class="worked__math">H atoms: <i>y</i> = 4 × 2 = 8</div><p>The hydrocarbon is <strong><span class="chem">C3H8</span></strong>. Here the water counts as a gas because the temperature is above 100 °C.</p>
      solution: "<p>体積の比、炭化水素 : <span class=\"chem\">CO2</span> : <span class=\"chem\">H2O</span> は次のとおりです。</p><div class=\"worked__math\">10 : 30 : 40 = 1 : 3 : 4</div><p>つまり、炭化水素 1 分子から、<span class=\"chem\">CO2</span> が 3 分子、<span class=\"chem\">H2O</span> が 4 分子生じます。</p><div class=\"worked__math\">C 原子： <i>x</i> = 3 × 1 = 3</div><div class=\"worked__math\">H 原子： <i>y</i> = 4 × 2 = 8</div><p>この炭化水素は <strong><span class=\"chem\">C3H8</span></strong> です。ここでは温度が 100 °C より高いので、水も気体として数えます。</p>",
      misconception: {
        // EN (option A): You have the carbon right, but you gave each water molecule one hydrogen atom. Each <span class="chem">H2O</span> contains 2 H atoms, so 4 volumes of water means 8 H.
        "0": "炭素は合っています。でも、水 1 分子に水素原子を 1 個として数えました。<span class=\"chem\">H2O</span> 1 分子には H 原子が 2 個あるので、水 4 体積は H 8 個分です。",
        // EN (option C): You swapped the two products. The 30 <span class="unit">cm3</span> of <span class="chem">CO2</span> gives the carbon and the 40 <span class="unit">cm3</span> of <span class="chem">H2O</span> gives the hydrogen.
        "2": "2 つの生成物を入れ替えてしまいました。30 <span class=\"unit\">cm3</span> の <span class=\"chem\">CO2</span> から炭素の数が、40 <span class=\"unit\">cm3</span> の <span class=\"chem\">H2O</span> から水素の数がわかります。",
        // EN (option D): You used the volumes as numbers of atoms. Divide by the 10 <span class="unit">cm3</span> of hydrocarbon first, to find how many molecules of each product form from <em>one</em> molecule.
        "3": "体積を、そのまま原子の数として使いました。まず、炭化水素の 10 <span class=\"unit\">cm3</span> でわりましょう。すると、炭化水素<em>1 分子</em>から各生成物が何分子できるかがわかります。",
      },
    },

    // ── s1-4-q051 · multi · challenge · SL · Structure 1.4.6 · 1 mark
    "s1-4-q051": {
      // EN: <p>Two identical flasks are at the same temperature and pressure. Flask A contains ammonia, <span class="chem">NH3</span>. Flask B contains oxygen, <span class="chem">O2</span>.</p><p>Which statements are correct? Select <strong>all</strong> that apply.</p><p>Use <i>A</i><sub>r</sub>: H = 1.01, N = 14.01, O = 16.00.</p>
      stem: "<p>同じ大きさの 2 つのフラスコが、同じ温度と圧力にあります。フラスコ A にはアンモニア <span class=\"chem\">NH3</span>、フラスコ B には酸素 <span class=\"chem\">O2</span> が入っています。</p><p>正しい文はどれですか。当てはまるものを<strong>すべて</strong>選びましょう。</p><p>次の <i>A</i><sub>r</sub> を使いましょう：H = 1.01、N = 14.01、O = 16.00</p>",
      options: [
        // EN: The two flasks contain the same number of molecules.
        "2 つのフラスコは、同じ数の分子を含む。",
        // EN: Flask A contains twice as many atoms as flask B.
        "フラスコ A は、フラスコ B の 2 倍の数の原子を含む。",
        // EN: The two flasks contain the same mass of gas.
        "2 つのフラスコは、同じ質量の気体を含む。",
        // EN: The gas in flask B has the greater mass.
        "フラスコ B の気体のほうが、質量が大きい。",
        // EN: Flask B contains fewer molecules because <span class="chem">O2</span> molecules are heavier.
        "<span class=\"chem\">O2</span> 分子のほうが重いので、フラスコ B のほうが分子の数が少ない。",
      ],
      hints: [
        // EN: Start from Avogadro's law. What does it say about the number of molecules in each flask?
        "アボガドロの法則から始めます。それぞれのフラスコの分子の数について、何がわかりますか。",
        // EN: Then compare one molecule of each gas: how many atoms does it have, and what is its molar mass?
        "次に、それぞれの気体の分子 1 個をくらべます。原子は何個ありますか。モル質量はいくつですか。",
      ],
      // EN: <p>Same volume, temperature and pressure means the same number of molecules, and so the same amount in moles, <i>n</i>.</p><p>Atoms: <span class="chem">NH3</span> has 4 atoms per molecule and <span class="chem">O2</span> has 2. So flask A contains twice as many atoms.</p><p>Mass: <i>m</i> = <i>n</i> × <i>M</i>, and <i>n</i> is the same for both.</p><div class="worked__math"><i>M</i>(<span class="chem">NH3</span>) = 17.04 <span class="unit">g mol-1</span></div><div class="worked__math"><i>M</i>(<span class="chem">O2</span>) = 32.00 <span class="unit">g mol-1</span></div><p>Oxygen has the larger molar mass, so flask B has the greater mass.</p>
      solution: "<p>体積、温度、圧力が同じなので、分子の数が同じです。だから、モル単位の物質量 <i>n</i> も同じです。</p><p>原子：<span class=\"chem\">NH3</span> は 1 分子に原子が 4 個、<span class=\"chem\">O2</span> は 2 個です。だから、フラスコ A には 2 倍の数の原子があります。</p><p>質量：<i>m</i> = <i>n</i> × <i>M</i> で、<i>n</i> はどちらも同じです。</p><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">NH3</span>) = 17.04 <span class=\"unit\">g mol-1</span></div><div class=\"worked__math\"><i>M</i>(<span class=\"chem\">O2</span>) = 32.00 <span class=\"unit\">g mol-1</span></div><p>酸素のほうがモル質量が大きいので、フラスコ B のほうが質量が大きくなります。</p>",
      misconception: {
        // EN (option C): Equal numbers of molecules do not mean equal masses. The molar masses are different: 17.04 <span class="unit">g mol-1</span> for <span class="chem">NH3</span> and 32.00 <span class="unit">g mol-1</span> for <span class="chem">O2</span>.
        "2": "分子の数が同じでも、質量が同じとはかぎりません。モル質量が違います。<span class=\"chem\">NH3</span> は 17.04 <span class=\"unit\">g mol-1</span>、<span class=\"chem\">O2</span> は 32.00 <span class=\"unit\">g mol-1</span> です。",
        // EN (option E): Avogadro's law does not depend on the mass or size of the molecules. Equal volumes at the same temperature and pressure contain equal numbers of molecules.
        "4": "アボガドロの法則は、分子の質量や大きさに関係なく成り立ちます。同じ温度と圧力で体積が等しければ、分子の数は等しくなります。",
      },
    },

    // ── s1-4-q052 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q052": {
      // EN: <p>A student wants to find the concentration of a coloured solution with a colorimeter and a calibration curve.</p><p>Which describes how the calibration curve is made and used?</p>
      stem: "<p>ある生徒が、比色計 (colorimeter) と検量線 (calibration curve) を使って、色のついた溶液の濃度を調べようとしています。</p><p>検量線のつくり方と使い方を正しく説明しているのはどれですか。</p>",
      options: [
        // EN: Measure the absorbance of the unknown solution several times and take the mean.
        "濃度のわからない溶液の吸光度を何回かはかり、平均をとる。",
        // EN: Measure the absorbance of several solutions of known concentration, plot absorbance against concentration, then read the concentration of the unknown from the line.
        "濃度のわかっている溶液をいくつか用意して吸光度をはかり、濃度を横軸、吸光度を縦軸にとってグラフをかく。その直線から、濃度のわからない溶液の濃度を読み取る。",
        // EN: Measure the absorbance of one solution of known concentration and assume the unknown has the same concentration.
        "濃度のわかっている溶液 1 つの吸光度をはかり、濃度のわからない溶液も同じ濃度だと考える。",
        // EN: Plot the mass of solute against the volume of solution and find the gradient.
        "溶質の質量を縦軸、溶液の体積を横軸にとってグラフをかき、傾きを求める。",
      ],
      hints: [
        // EN: A calibration curve links an instrument reading to a concentration. Which solutions must you measure to draw it?
        "検量線は、測定器の読みと濃度を結びつけます。検量線をかくには、どの溶液をはかる必要がありますか。",
        // EN: Standard solutions have known concentrations. The unknown is measured last and read from the graph.
        "標準溶液 (standard solution) は、濃度がわかっている溶液です。濃度のわからない溶液は最後にはかり、グラフから濃度を読み取ります。",
      ],
      // EN: <p>Make several standard solutions of known concentration. Measure the absorbance of each. Plot absorbance (<i>y</i>) against concentration (<i>x</i>) and draw the line of best fit. Then measure the absorbance of the unknown and read its concentration from the line. The unknown should lie inside the range of the standards.</p>
      solution: "<p>濃度のわかっている標準溶液をいくつかつくります。それぞれの吸光度 (absorbance) をはかります。吸光度を縦軸 (<i>y</i>)、濃度を横軸 (<i>x</i>) にとって点を打ち、最もよく合う直線（近似直線）を引きます。次に、濃度のわからない溶液の吸光度をはかり、直線から濃度を読み取ります。その値は、標準溶液の範囲の中に入っている必要があります。</p>",
      misconception: {
        // EN (option A): Repeating the reading makes it more reliable, but an absorbance is not a concentration. You need solutions of known concentration to link the two.
        "0": "くり返しはかると、値の信頼性は上がります。でも、吸光度は濃度ではありません。この 2 つを結びつけるには、濃度のわかっている溶液が必要です。",
        // EN (option C): One known solution gives one point, not a line. Several standard solutions are needed, and the unknown is read from the line of best fit.
        "2": "濃度のわかっている溶液が 1 つだけでは、点が 1 つ決まるだけで、直線になりません。標準溶液がいくつか必要です。濃度のわからない溶液の濃度は、最もよく合う直線から読み取ります。",
        // EN (option D): That graph would give a concentration in <span class="unit">g dm-3</span> for a solution you made yourself. It does not use the colorimeter and says nothing about the unknown.
        "3": "そのグラフからわかるのは、自分でつくった溶液の <span class=\"unit\">g dm-3</span> 単位の濃度です。比色計を使っていないので、濃度のわからない溶液については何もわかりません。",
      },
    },

    // ── s1-4-q053 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "s1-4-q053": {
      // EN: <p>3.60 <span class="unit">g</span> of glucose is dissolved in distilled water and the solution is made up to 200.0 <span class="unit">cm3</span>.</p><p>Calculate the concentration of the solution in <span class="unit">g dm-3</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>3.60 <span class=\"unit\">g</span> のグルコースを蒸留水に溶かし、水を加えて溶液全体を 200.0 <span class=\"unit\">cm3</span> にします。</p><p>この溶液の濃度を <span class=\"unit\">g dm-3</span> 単位で計算しなさい (calculate)。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: A concentration in <span class="unit">g dm-3</span> is the mass of solute divided by the volume of solution. You do not need the molar mass.
        "<span class=\"unit\">g dm-3</span> 単位の濃度は、溶質の質量を溶液の体積でわった値です。モル質量はいりません。",
        // EN: Convert the volume first: 200.0 <span class="unit">cm3</span> ÷ 1000 = 0.2000 <span class="unit">dm3</span>.
        "先に体積を換算します。200.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.2000 <span class=\"unit\">dm3</span> です。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 200.0 <span class="unit">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.2000 <span class="unit">dm3</span></div><div class="worked__math">concentration = <span class="frac"><span>3.60 <span class="unit">g</span></span><span>0.2000 <span class="unit">dm3</span></span></span><br>&nbsp;&nbsp;= <strong>18.0 <span class="unit">g dm-3</span></strong></div><p>Named slips: 0.0180 means you left the volume in <span class="unit">cm3</span>. 0.720 means you multiplied by the volume instead of dividing.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 200.0 <span class=\"unit\">cm3</span> ÷ 1000<br>&nbsp;&nbsp;= 0.2000 <span class=\"unit\">dm3</span></div><div class=\"worked__math\">濃度 = <span class=\"frac\"><span>3.60 <span class=\"unit\">g</span></span><span>0.2000 <span class=\"unit\">dm3</span></span></span><br>&nbsp;&nbsp;= <strong>18.0 <span class=\"unit\">g dm-3</span></strong></div><p>よくあるミス：0.0180 は、体積を <span class=\"unit\">cm3</span> のままにしたときの値です。0.720 は、体積でわるところで、かけてしまったときの値です。</p>",
    },

  }
});
