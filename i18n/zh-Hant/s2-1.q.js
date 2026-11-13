/* s2-1.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's2-1.q', {
  questions: {

    // ── s2-1-q001 · mcq · foundation · SL · Structure 2.1.1 · 1 mark
    "s2-1-q001": {
      // EN: <p>A magnesium atom has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span></span>. What is the charge of the ion that magnesium forms?</p>
      stem: "<p>鎂原子的電子排佈是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span></span>。鎂形成的離子帶甚麼電荷？</p>",
      options: [
        // EN: 1+
        "1+",
        // EN: 2+
        "2+",
        // EN: 2−
        "2−",
        // EN: 6−
        "6−",
      ],
      hints: [
        // EN: Which shell is the outer shell, and how many electrons does it hold?
        "哪一層是最外層？它有多少個電子？",
        // EN: Magnesium is a metal. Do metal atoms lose or gain electrons?
        "鎂是金屬。金屬原子會失去還是得到電子？",
      ],
      // EN: <p>The outer shell is shell 3, which holds 2 electrons (<span class="mono"><span class="nowrap">3s<sup>2</sup></span></span>). Magnesium is a metal, so the atom loses both.</p><div class="worked__math">charge = 12 protons − 10 electrons = 2+</div><p>The ion is <span class="chem">Mg^2+</span>, with the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.</p>
      solution: "<p>最外層是第 3 層，有 2 個電子（<span class=\"mono\"><span class=\"nowrap\">3s<sup>2</sup></span></span>）。鎂是金屬，所以原子會失去這兩個電子。</p><div class=\"worked__math\">電荷 = 12 個質子 − 10 個電子 = 2+</div><p>離子是 <span class=\"chem\">Mg^2+</span>，電子排佈是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。</p>",
      misconception: {
        // EN (option A): Magnesium has two electrons in its outer shell, and it loses both of them, not one.
        "0": "鎂的最外層有兩個電子，它會失去全部兩個，不是只失去一個。",
        // EN (option C): The size is right but the sign is wrong. Losing two negative electrons leaves more protons than electrons, so the ion is positive.
        "2": "大小正確，但正負號錯了。失去兩個帶負電荷的電子後，質子比電子多，所以離子帶正電荷。",
        // EN (option D): A metal atom with two outer electrons does not gain six more. Losing two electrons takes far less energy.
        "3": "最外層有兩個電子的金屬原子，不會再得到六個電子。失去兩個電子所需的能量少得多。",
      },
    },

    // ── s2-1-q002 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q002": {
      // EN: <p>Why does sodium chloride dissolve in water?</p>
      stem: "<p>為甚麼氯化鈉 (sodium chloride) 溶於水？</p>",
      options: [
        // EN: Polar water molecules attract the ions strongly enough to separate them from the lattice.
        "極性的水分子對離子的吸引夠強，能把離子從晶格中分開。",
        // EN: Water molecules break the covalent bonds between the sodium atoms and the chlorine atoms.
        "水分子破壞了鈉原子和氯原子之間的共價鍵。",
        // EN: Sodium chloride molecules fit into the spaces between the water molecules.
        "氯化鈉分子剛好能填進水分子之間的空隙。",
        // EN: Water reacts with the ions and changes them back into atoms.
        "水和離子發生反應，把離子變回原子。",
      ],
      hints: [
        // EN: What particles is sodium chloride made of?
        "氯化鈉由甚麼粒子組成？",
        // EN: A water molecule has a slightly negative end and a slightly positive end. What will each end attract?
        "水分子有一端略帶負電荷，另一端略帶正電荷。兩端各會吸引甚麼？",
      ],
      // EN: <p>Water molecules are polar. The slightly negative oxygen end is attracted to <span class="chem">Na+</span> ions and the slightly positive hydrogen end is attracted to <span class="chem">Cl-</span> ions. Together these attractions are strong enough to pull the ions out of the lattice. The separated ions are then surrounded by water molecules.</p>
      solution: "<p>水分子是極性分子。略帶負電荷的氧一端受 <span class=\"chem\">Na+</span> 離子吸引，略帶正電荷的氫一端受 <span class=\"chem\">Cl-</span> 離子吸引。這些引力合起來夠強，能把離子拉出晶格。分開了的離子隨後被水分子包圍。</p>",
      misconception: {
        // EN (option B): Sodium chloride has no covalent bonds between sodium and chlorine. It is a lattice of ions held together by electrostatic attraction.
        "1": "氯化鈉中，鈉和氯之間沒有共價鍵。它是靠靜電引力維繫的離子晶格。",
        // EN (option C): There are no sodium chloride molecules. The solid is a lattice of separate <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions.
        "2": "沒有氯化鈉分子這回事。這種固體是由獨立的 <span class=\"chem\">Na+</span> 和 <span class=\"chem\">Cl-</span> 離子組成的晶格。",
        // EN (option D): The ions stay as ions in the solution. That is why the solution conducts electricity.
        "3": "離子在溶液中仍然是離子。所以溶液才能導電。",
      },
    },

    // ── s2-1-q003 · numeric · foundation · SL · Structure 2.1.1 · 1 mark
    "s2-1-q003": {
      // EN: <p>An atom has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>4</sup></span></span>. How many electrons does this atom gain when it forms its usual ion?</p>
      stem: "<p>某原子的電子排佈是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>4</sup></span></span>。這個原子形成常見的離子時，會得到多少個電子？</p>",
      hints: [
        // EN: Count the electrons in the outer shell: add the 3s and 3p electrons.
        "數出最外層的電子：把 3s 和 3p 的電子加起來。",
        // EN: A non-metal atom gains electrons until its outer s and p sublevels hold eight electrons.
        "非金屬原子會得到電子，直至最外層的 s 和 p 亞層共有八個電子。",
      ],
      // EN: <div class="worked__math">outer shell: 3s<sup>2</sup> 3p<sup>4</sup> = 6 electrons</div><div class="worked__math">electrons gained = 8 − 6 = 2</div><p>The atom gains <strong>2</strong> electrons and forms an ion with a charge of 2−. (The element is sulfur and the ion is <span class="chem">S^2-</span>.)</p>
      solution: "<div class=\"worked__math\">最外層：3s<sup>2</sup> 3p<sup>4</sup> = 6 個電子</div><div class=\"worked__math\">得到的電子 = 8 − 6 = 2</div><p>原子得到 <strong>2</strong> 個電子，形成電荷為 2− 的離子。（這種元素是硫，離子是 <span class=\"chem\">S^2-</span>。）</p>",
    },

    // ── s2-1-q004 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q004": {
      // EN: <p>What is an ionic bond?</p>
      stem: "<p>甚麼是離子鍵 (ionic bond)？</p>",
      options: [
        // EN: The transfer of electrons from a metal atom to a non-metal atom
        "電子由金屬原子轉移到非金屬原子",
        // EN: The electrostatic attraction between oppositely charged ions
        "帶相反電荷的離子之間的靜電引力",
        // EN: The electrostatic attraction between two nuclei and a shared pair of electrons
        "兩個原子核與共用電子對之間的靜電引力",
        // EN: The electrostatic attraction between cations and delocalized electrons
        "陽離子與離域電子之間的靜電引力",
      ],
      hints: [
        // EN: The question asks what the bond <em>is</em>, not how the ions were made.
        "題目問的是離子鍵<em>是</em>甚麼，不是離子怎樣形成。",
        // EN: Which two kinds of particle are in an ionic compound, and what force acts between them?
        "離子化合物裏有哪兩種粒子？它們之間有甚麼作用力？",
      ],
      // EN: <p>An ionic bond is the electrostatic attraction between oppositely charged ions (cations and anions).</p>
      solution: "<p>離子鍵是帶相反電荷的離子（陽離子和陰離子）之間的靜電引力。</p>",
      misconception: {
        // EN (option A): The transfer of electrons is how the ions form. The bond is the attraction between the ions afterwards. Markschemes do not accept “transfer of electrons” as the definition.
        "0": "電子轉移是離子形成的方式。離子鍵是其後離子之間的引力。評分準則不接受以「電子轉移」(transfer of electrons) 作為定義。",
        // EN (option C): A shared pair of electrons describes a covalent bond. In an ionic bond no electrons are shared.
        "2": "共用電子對描述的是共價鍵。離子鍵中沒有共用電子。",
        // EN (option D): Cations and delocalized electrons describe a metal. An ionic compound contains cations and anions.
        "3": "陽離子和離域電子描述的是金屬。離子化合物含有陽離子和陰離子。",
      },
    },

    // ── s2-1-q005 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q005": {
      // EN: <p>What is the formula of calcium chloride?</p>
      stem: "<p>氯化鈣 (calcium chloride) 的化學式是甚麼？</p>",
      options: [
        // EN: <span class="chem">CaCl</span>
        "<span class=\"chem\">CaCl</span>",
        // EN: <span class="chem">Ca2Cl</span>
        "<span class=\"chem\">Ca2Cl</span>",
        // EN: <span class="chem">CaCl2</span>
        "<span class=\"chem\">CaCl2</span>",
        // EN: <span class="chem">Ca(Cl)2</span>
        "<span class=\"chem\">Ca(Cl)2</span>",
      ],
      hints: [
        // EN: Calcium is in group 2 and chlorine is in group 17. Write the two ions with their charges.
        "鈣在第 2 族，氯在第 17 族。寫出兩種離子和它們的電荷。",
        // EN: How many 1− ions balance one 2+ ion?
        "要多少個 1− 離子才能平衡一個 2+ 離子？",
      ],
      // EN: <p>The ions are <span class="chem">Ca^2+</span> and <span class="chem">Cl-</span>.</p><div class="worked__math">1 × (2+) = 2+ &nbsp; and &nbsp; 2 × (1−) = 2−</div><p>The formula is <span class="chem">CaCl2</span>.</p>
      solution: "<p>離子是 <span class=\"chem\">Ca^2+</span> 和 <span class=\"chem\">Cl-</span>。</p><div class=\"worked__math\">1 × (2+) = 2+ &nbsp; 和 &nbsp; 2 × (1−) = 2−</div><p>化學式是 <span class=\"chem\">CaCl2</span>。</p>",
      misconception: {
        // EN (option A): One <span class="chem">Ca^2+</span> and one <span class="chem">Cl-</span> give a total charge of 1+. The charges must add up to zero.
        "0": "一個 <span class=\"chem\">Ca^2+</span> 和一個 <span class=\"chem\">Cl-</span> 的總電荷是 1+。電荷加起來必須是零。",
        // EN (option B): The numbers are the wrong way round. Two <span class="chem">Ca^2+</span> ions would give 4+ against only 1−.
        "1": "數字的位置調轉了。兩個 <span class=\"chem\">Ca^2+</span> 離子有 4+，卻只有 1− 來平衡。",
        // EN (option D): The ratio is right, but brackets are only used around a polyatomic ion. Chloride is a single atom, so no brackets are needed.
        "3": "比例正確，但括號只用於多原子離子。氯離子只有一個原子，所以不需要括號。",
      },
    },

    // ── s2-1-q006 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q006": {
      // EN: <p>What is the name of <span class="chem">K2S</span>?</p>
      stem: "<p><span class=\"chem\">K2S</span> 的名稱是甚麼？</p>",
      options: [
        // EN: potassium sulfide
        "potassium sulfide（硫化鉀）",
        // EN: potassium sulfate
        "potassium sulfate（硫酸鉀）",
        // EN: dipotassium sulfide
        "dipotassium sulfide（硫化二鉀）",
        // EN: potassium(II) sulfide
        "potassium(II) sulfide（硫化鉀(II)）",
      ],
      hints: [
        // EN: The compound contains only two elements. What ending does the anion take?
        "這種化合物只含兩種元素。陰離子的英文名稱以甚麼結尾？",
      ],
      // EN: <p>The cation is named first: potassium. The anion is made from one element, sulfur, so its name ends in -ide: sulfide. The name is <strong>potassium sulfide</strong>.</p>
      solution: "<p>先寫陽離子的名稱：potassium（鉀）。陰離子由單一元素硫 (sulfur) 形成，所以名稱以 -ide 結尾：sulfide（硫離子）。名稱是 <strong>potassium sulfide</strong>（硫化鉀）。</p>",
      misconception: {
        // EN (option B): Sulfate is the polyatomic ion <span class="chem">SO4^2-</span>, which contains oxygen. This formula has no oxygen.
        "1": "Sulfate（硫酸根離子）是多原子離子 <span class=\"chem\">SO4^2-</span>，含有氧。這個化學式裏沒有氧。",
        // EN (option C): Names of ionic compounds do not use prefixes such as di-. The number of ions follows from the charges.
        "2": "離子化合物的名稱不用 di- 這類前綴。離子的數目由電荷決定。",
        // EN (option D): A Roman numeral is only used for a metal that can form more than one ion. Potassium, in group 1, only forms <span class="chem">K+</span>. A numeral would also show the charge, which is 1+, not 2+.
        "3": "只有能形成多於一種離子的金屬，才用羅馬數字。鉀在第 1 族，只形成 <span class=\"chem\">K+</span>。而且羅馬數字表示的是電荷，這裏電荷是 1+，不是 2+。",
      },
    },

    // ── s2-1-q007 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q007": {
      // EN: <p>Which row gives the correct name and formula of a polyatomic ion?</p>
      stem: "<p>哪一行的多原子離子名稱和化學式都正確？</p>",
      options: [
        // EN: sulfate, <span class="chem">SO3^2-</span>
        "硫酸根離子 (sulfate)，<span class=\"chem\">SO3^2-</span>",
        // EN: carbonate, <span class="chem">CO3-</span>
        "碳酸根離子 (carbonate)，<span class=\"chem\">CO3-</span>",
        // EN: nitrate, <span class="chem">NO3-</span>
        "硝酸根離子 (nitrate)，<span class=\"chem\">NO3-</span>",
        // EN: ammonium, <span class="chem">NH3+</span>
        "銨離子 (ammonium)，<span class=\"chem\">NH3+</span>",
      ],
      hints: [
        // EN: Check two things in each row: the number of atoms and the charge.
        "每一行都要檢查兩樣東西：原子的數目和電荷。",
      ],
      // EN: <p>Nitrate is <span class="chem">NO3-</span>. The others should be sulfate <span class="chem">SO4^2-</span>, carbonate <span class="chem">CO3^2-</span> and ammonium <span class="chem">NH4+</span>.</p>
      solution: "<p>硝酸根離子是 <span class=\"chem\">NO3-</span>。其餘三個應該是：硫酸根離子 <span class=\"chem\">SO4^2-</span>、碳酸根離子 <span class=\"chem\">CO3^2-</span> 和銨離子 <span class=\"chem\">NH4+</span>。</p>",
      misconception: {
        // EN (option A): Sulfate has four oxygen atoms: <span class="chem">SO4^2-</span>.
        "0": "硫酸根離子有四個氧原子：<span class=\"chem\">SO4^2-</span>。",
        // EN (option B): The atoms are right but the charge is wrong. Carbonate is <span class="chem">CO3^2-</span>.
        "1": "原子正確，但電荷錯了。碳酸根離子是 <span class=\"chem\">CO3^2-</span>。",
        // EN (option D): <span class="chem">NH3</span> is ammonia, a neutral molecule. The ammonium ion has four hydrogen atoms: <span class="chem">NH4+</span>.
        "3": "<span class=\"chem\">NH3</span> 是氨 (ammonia)，是中性分子。銨離子 (ammonium) 有四個氫原子：<span class=\"chem\">NH4+</span>。",
      },
    },

    // ── s2-1-q008 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q008": {
      // EN: <p>Why does solid sodium chloride <strong>not</strong> conduct electricity?</p>
      stem: "<p>為甚麼固體氯化鈉<strong>不</strong>導電？</p>",
      options: [
        // EN: It contains no charged particles.
        "它不含帶電粒子。",
        // EN: Its ions are held in fixed positions in the lattice.
        "它的離子固定在晶格中的位置。",
        // EN: Its electrons are held in fixed positions in the lattice.
        "它的電子固定在晶格中的位置。",
        // EN: Its molecules have no overall charge.
        "它的分子整體不帶電荷。",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move.
        "物質要導電，必須有可自由移動的帶電粒子。",
        // EN: Which charged particles does sodium chloride contain? Can they move in the solid?
        "氯化鈉含有哪些帶電粒子？它們在固體中能移動嗎？",
      ],
      // EN: <p>Solid sodium chloride contains ions, but they are held in fixed positions in the lattice by strong electrostatic attraction. They can only vibrate. Because the ions cannot move from place to place, no charge can flow.</p>
      solution: "<p>固體氯化鈉含有離子，但強的靜電引力把離子固定在晶格中的位置。離子只能振動。因為離子不能由一處移到另一處，所以電荷無法流動。</p>",
      misconception: {
        // EN (option A): Solid sodium chloride is made of charged particles: <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions. The problem is that they cannot move.
        "0": "固體氯化鈉由帶電粒子組成：<span class=\"chem\">Na+</span> 和 <span class=\"chem\">Cl-</span> 離子。問題在於這些離子不能移動。",
        // EN (option C): In an ionic compound the charge would be carried by ions, not by electrons. The explanation must be about the ions.
        "2": "在離子化合物中，傳導電荷的是離子，不是電子。解釋必須圍繞離子。",
        // EN (option D): Sodium chloride has no molecules. It is a lattice of ions.
        "3": "氯化鈉沒有分子。它是離子組成的晶格。",
      },
    },

    // ── s2-1-q009 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q009": {
      // EN: <p>Which quantity is a measure of the strength of the ionic bonding in a compound?</p>
      stem: "<p>哪個物理量可以量度化合物中離子鍵的強度？</p>",
      options: [
        // EN: Electronegativity
        "電負性 (electronegativity)",
        // EN: First ionization energy
        "第一電離能 (first ionization energy)",
        // EN: Lattice enthalpy
        "晶格焓 (lattice enthalpy)",
        // EN: Relative formula mass
        "相對式量 (relative formula mass)",
      ],
      hints: [
        // EN: Which quantity is the energy needed to separate the ions of a solid lattice completely?
        "哪個物理量是把固體晶格的離子完全分開所需的能量？",
      ],
      // EN: <p>Lattice enthalpy is the enthalpy change when one mole of a solid ionic compound is separated into gaseous ions. The stronger the electrostatic attraction between the ions, the larger the lattice enthalpy.</p>
      solution: "<p>晶格焓是一摩爾固體離子化合物分離成氣態離子時的焓變。離子之間的靜電引力越強，晶格焓越大。</p>",
      misconception: {
        // EN (option A): Electronegativity describes how strongly one atom attracts bonding electrons. It is a property of an element, not of the bonding in a compound.
        "0": "電負性描述一個原子吸引鍵合電子的能力有多強。它是元素的性質，不是化合物中鍵合的性質。",
        // EN (option B): First ionization energy is the energy needed to remove an electron from a gaseous atom. It does not measure the attraction between ions in a lattice.
        "1": "第一電離能是從氣態原子移走一個電子所需的能量。它並不量度晶格中離子之間的引力。",
        // EN (option D): Relative formula mass is the mass of a formula unit. It tells you nothing about how strongly the ions attract each other.
        "3": "相對式量是一個式單位的質量。它不能說明離子互相吸引得有多強。",
      },
    },

    // ── s2-1-q010 · order · foundation · SL · Structure 2.1.2 · 2 marks
    "s2-1-q010": {
      // EN: <p>Put these steps in order to deduce the formula of aluminium oxide.</p>
      stem: "<p>把以下步驟排列次序，推斷 (deduce) 氧化鋁 (aluminium oxide) 的化學式。</p>",
      options: [
        // EN: Write the two ions: <span class="chem">Al^3+</span> and <span class="chem">O^2-</span>.
        "寫出兩種離子：<span class=\"chem\">Al^3+</span> 和 <span class=\"chem\">O^2-</span>。",
        // EN: Find the smallest total charge that 3 and 2 both divide into: 6.
        "找出 3 和 2 都能整除的最小總電荷：6。",
        // EN: Work out the numbers of ions: two <span class="chem">Al^3+</span> give 6+ and three <span class="chem">O^2-</span> give 6−.
        "求出離子的數目：兩個 <span class=\"chem\">Al^3+</span> 有 6+，三個 <span class=\"chem\">O^2-</span> 有 6−。",
        // EN: Write the formula: <span class="chem">Al2O3</span>.
        "寫出化學式：<span class=\"chem\">Al2O3</span>。",
      ],
      hints: [
        // EN: You cannot balance the charges until you know them.
        "不知道電荷，就不能平衡電荷。",
        // EN: The formula is the last thing you write.
        "化學式是最後才寫的。",
      ],
      // EN: <p>Start from the ions and their charges. Find the smallest common total (6), work out how many of each ion give that total, then write those numbers as subscripts: <span class="chem">Al2O3</span>.</p>
      solution: "<p>由離子和它們的電荷開始。找出最小的共同總數 (6)，求出每種離子要多少個才得到這個總數，然後把這些數目寫成下標：<span class=\"chem\">Al2O3</span>。</p>",
    },

    // ── s2-1-q011 · mcq · exam · SL · Structure 2.1.1 · 1 mark
    "s2-1-q011": {
      // EN: <p>Which ion has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>6</sup></span></span>?</p>
      stem: "<p>哪個離子的電子排佈是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>6</sup></span></span>？</p>",
      options: [
        // EN: <span class="chem">Na+</span>
        "<span class=\"chem\">Na+</span>",
        // EN: <span class="chem">O^2-</span>
        "<span class=\"chem\">O^2-</span>",
        // EN: <span class="chem">S^2-</span>
        "<span class=\"chem\">S^2-</span>",
        // EN: <span class="chem">Mg^2+</span>
        "<span class=\"chem\">Mg^2+</span>",
      ],
      hints: [
        // EN: Add the superscripts to find how many electrons the ion has.
        "把上標的數字加起來，求出這個離子有多少個電子。",
        // EN: For each ion, work out the number of electrons: atomic number minus the charge (with its sign).
        "逐一求出每個離子的電子數目：原子序減去電荷（連同正負號）。",
      ],
      // EN: <p>The configuration has 2 + 2 + 6 + 2 + 6 = 18 electrons.</p><div class="worked__math">S<sup>2−</sup>: 16 + 2 = 18 electrons</div><p>The other three ions each have 10 electrons. Only <span class="chem">S^2-</span> has 18.</p>
      solution: "<p>這個電子排佈有 2 + 2 + 6 + 2 + 6 = 18 個電子。</p><div class=\"worked__math\">S<sup>2−</sup>：16 + 2 = 18 個電子</div><p>其餘三個離子各有 10 個電子。只有 <span class=\"chem\">S^2-</span> 有 18 個。</p>",
      misconception: {
        // EN (option A): A sodium atom has 11 electrons and loses 1. <span class="chem">Na+</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "0": "鈉原子有 11 個電子，失去 1 個。<span class=\"chem\">Na+</span> 有 10 個電子：<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
        // EN (option B): An oxygen atom has 8 electrons and gains 2. <span class="chem">O^2-</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "1": "氧原子有 8 個電子，得到 2 個。<span class=\"chem\">O^2-</span> 有 10 個電子：<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
        // EN (option D): A magnesium atom has 12 electrons and loses 2. <span class="chem">Mg^2+</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "3": "鎂原子有 12 個電子，失去 2 個。<span class=\"chem\">Mg^2+</span> 有 10 個電子：<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
      },
    },

    // ── s2-1-q012 · mcq · exam · SL · Structure 2.1.1 · 1 mark
    "s2-1-q012": {
      // EN: <p>Iron forms two chlorides, <span class="chem">FeCl2</span> and <span class="chem">FeCl3</span>. Which statement explains this?</p>
      stem: "<p>鐵會形成兩種氯化物：<span class=\"chem\">FeCl2</span> 和 <span class=\"chem\">FeCl3</span>。哪一項陳述能解釋這個現象？</p>",
      options: [
        // EN: Chlorine can form ions with two different charges.
        "氯能形成兩種不同電荷的離子。",
        // EN: Iron is a transition element and can form ions with different charges.
        "鐵是過渡元素，能形成不同電荷的離子。",
        // EN: Iron has isotopes with different numbers of neutrons.
        "鐵有中子數目不同的同位素。",
        // EN: The charge of an iron ion is equal to its group number.
        "鐵離子的電荷等於它的族數。",
      ],
      hints: [
        // EN: The chloride ion is always <span class="chem">Cl-</span>. What must the charge on iron be in each compound?
        "氯離子一定是 <span class=\"chem\">Cl-</span>。在這兩種化合物中，鐵的電荷分別是多少？",
      ],
      // EN: <p>Each chloride ion is 1−. In <span class="chem">FeCl2</span> the iron ion is <span class="chem">Fe^2+</span> and in <span class="chem">FeCl3</span> it is <span class="chem">Fe^3+</span>. Iron is a transition element, and a transition element can form ions with different charges. The compounds are iron(II) chloride and iron(III) chloride.</p>
      solution: "<p>每個氯離子是 1−。在 <span class=\"chem\">FeCl2</span> 中，鐵離子是 <span class=\"chem\">Fe^2+</span>；在 <span class=\"chem\">FeCl3</span> 中，鐵離子是 <span class=\"chem\">Fe^3+</span>。鐵是過渡元素，而過渡元素能形成不同電荷的離子。這兩種化合物是氯化鐵(II) (iron(II) chloride) 和氯化鐵(III) (iron(III) chloride)。</p>",
      misconception: {
        // EN (option A): Chlorine, in group 17, forms only the chloride ion, <span class="chem">Cl-</span>. The difference is in the iron ion.
        "0": "氯在第 17 族，只形成氯離子 <span class=\"chem\">Cl-</span>。分別在於鐵離子。",
        // EN (option C): Isotopes differ in neutrons, which does not change the charge of an ion or the formula of a compound.
        "2": "同位素的分別在於中子數目，這不會改變離子的電荷或化合物的化學式。",
        // EN (option D): Iron is in group 8, and its common ions are 2+ and 3+. The group number does not give the charge of a transition element ion.
        "3": "鐵在第 8 族，而它常見的離子是 2+ 和 3+。過渡元素離子的電荷不能由族數得知。",
      },
    },

    // ── s2-1-q013 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q013": {
      // EN: <p>What is the formula of ammonium sulfate?</p>
      stem: "<p>硫酸銨 (ammonium sulfate) 的化學式是甚麼？</p>",
      options: [
        // EN: <span class="chem">NH4SO4</span>
        "<span class=\"chem\">NH4SO4</span>",
        // EN: <span class="chem">(NH4)2SO4</span>
        "<span class=\"chem\">(NH4)2SO4</span>",
        // EN: <span class="chem">NH4(SO4)2</span>
        "<span class=\"chem\">NH4(SO4)2</span>",
        // EN: <span class="chem">(NH4)2S</span>
        "<span class=\"chem\">(NH4)2S</span>",
      ],
      hints: [
        // EN: Write the two ions with their charges: ammonium and sulfate.
        "寫出兩種離子和它們的電荷：銨離子 (ammonium) 和硫酸根離子 (sulfate)。",
        // EN: How many 1+ ions balance one 2− ion? Do you need brackets?
        "要多少個 1+ 離子才能平衡一個 2− 離子？需要括號嗎？",
      ],
      // EN: <p>The ions are <span class="chem">NH4+</span> and <span class="chem">SO4^2-</span>.</p><div class="worked__math">2 × (1+) = 2+ &nbsp; and &nbsp; 1 × (2−) = 2−</div><p>Two ammonium ions need brackets: <span class="chem">(NH4)2SO4</span>.</p>
      solution: "<p>離子是 <span class=\"chem\">NH4+</span> 和 <span class=\"chem\">SO4^2-</span>。</p><div class=\"worked__math\">2 × (1+) = 2+ &nbsp; 和 &nbsp; 1 × (2−) = 2−</div><p>兩個銨離子要用括號：<span class=\"chem\">(NH4)2SO4</span>。</p>",
      misconception: {
        // EN (option A): One <span class="chem">NH4+</span> (1+) does not balance one <span class="chem">SO4^2-</span> (2−). The total charge would be 1−.
        "0": "一個 <span class=\"chem\">NH4+</span> (1+) 不能平衡一個 <span class=\"chem\">SO4^2-</span> (2−)。總電荷會是 1−。",
        // EN (option C): The numbers are the wrong way round. One 1+ ion and two 2− ions give a total charge of 3−.
        "2": "數字的位置調轉了。一個 1+ 離子和兩個 2− 離子，總電荷是 3−。",
        // EN (option D): This is ammonium sulf<em>ide</em>. Sulfate is the polyatomic ion <span class="chem">SO4^2-</span>.
        "3": "這是硫化銨 (ammonium sulf<em>ide</em>)。Sulfate（硫酸根離子）是多原子離子 <span class=\"chem\">SO4^2-</span>。",
      },
    },

    // ── s2-1-q014 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q014": {
      // EN: <p>What is the formula of iron(III) hydroxide?</p>
      stem: "<p>氫氧化鐵(III) (iron(III) hydroxide) 的化學式是甚麼？</p>",
      options: [
        // EN: <span class="chem">Fe3OH</span>
        "<span class=\"chem\">Fe3OH</span>",
        // EN: <span class="chem">FeOH3</span>
        "<span class=\"chem\">FeOH3</span>",
        // EN: <span class="chem">Fe(OH)2</span>
        "<span class=\"chem\">Fe(OH)2</span>",
        // EN: <span class="chem">Fe(OH)3</span>
        "<span class=\"chem\">Fe(OH)3</span>",
      ],
      hints: [
        // EN: The Roman numeral gives the charge on the iron ion.
        "羅馬數字表示鐵離子的電荷。",
        // EN: Hydroxide is <span class="chem">OH-</span>. How many are needed to balance 3+?
        "氫氧離子是 <span class=\"chem\">OH-</span>。要多少個才能平衡 3+？",
      ],
      // EN: <p>The ions are <span class="chem">Fe^3+</span> and <span class="chem">OH-</span>.</p><div class="worked__math">1 × (3+) = 3+ &nbsp; and &nbsp; 3 × (1−) = 3−</div><p>Three hydroxide ions need brackets: <span class="chem">Fe(OH)3</span>.</p>
      solution: "<p>離子是 <span class=\"chem\">Fe^3+</span> 和 <span class=\"chem\">OH-</span>。</p><div class=\"worked__math\">1 × (3+) = 3+ &nbsp; 和 &nbsp; 3 × (1−) = 3−</div><p>三個氫氧離子要用括號：<span class=\"chem\">Fe(OH)3</span>。</p>",
      misconception: {
        // EN (option A): The Roman numeral III is the charge on the iron ion, 3+. It is not the number of iron ions.
        "0": "羅馬數字 III 是鐵離子的電荷 3+，不是鐵離子的數目。",
        // EN (option B): Without brackets, the 3 applies only to hydrogen. Three hydroxide ions must be written <span class="chem">(OH)3</span>.
        "1": "沒有括號的話，3 只適用於氫。三個氫氧離子必須寫成 <span class=\"chem\">(OH)3</span>。",
        // EN (option C): This is iron(II) hydroxide. Two <span class="chem">OH-</span> ions only balance a 2+ ion.
        "2": "這是氫氧化鐵(II) (iron(II) hydroxide)。兩個 <span class=\"chem\">OH-</span> 離子只能平衡一個 2+ 離子。",
      },
    },

    // ── s2-1-q015 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q015": {
      // EN: <p>What is the name of <span class="chem">CuCO3</span>?</p>
      stem: "<p><span class=\"chem\">CuCO3</span> 的名稱是甚麼？</p>",
      options: [
        // EN: copper carbonate
        "copper carbonate（碳酸銅）",
        // EN: copper(I) carbonate
        "copper(I) carbonate（碳酸銅(I)）",
        // EN: copper(II) carbonate
        "copper(II) carbonate（碳酸銅(II)）",
        // EN: copper(II) carbide
        "copper(II) carbide（碳化銅(II)）",
      ],
      hints: [
        // EN: What is the charge on a carbonate ion?
        "碳酸根離子的電荷是多少？",
        // EN: The compound is neutral and contains one copper ion. What must its charge be?
        "這種化合物呈中性，含有一個銅離子。銅離子的電荷必定是多少？",
      ],
      // EN: <p>Carbonate is <span class="chem">CO3^2-</span>. One copper ion balances one carbonate ion, so the copper ion is <span class="chem">Cu^2+</span>. Copper can also form <span class="chem">Cu+</span>, so the name needs the Roman numeral: <strong>copper(II) carbonate</strong>.</p>
      solution: "<p>碳酸根離子是 <span class=\"chem\">CO3^2-</span>。一個銅離子平衡一個碳酸根離子，所以銅離子是 <span class=\"chem\">Cu^2+</span>。銅也能形成 <span class=\"chem\">Cu+</span>，所以名稱要有羅馬數字：<strong>copper(II) carbonate</strong>（碳酸銅(II)）。</p>",
      misconception: {
        // EN (option A): Copper is a transition element that can form more than one ion, so the name needs a Roman numeral to show the charge.
        "0": "銅是過渡元素，能形成多於一種離子，所以名稱要用羅馬數字表示電荷。",
        // EN (option B): Carbonate is 2−. One copper ion balances it, so the copper ion must be 2+, not 1+. Copper(I) carbonate would be <span class="chem">Cu2CO3</span>.
        "1": "碳酸根離子是 2−。一個銅離子就平衡了它，所以銅離子必定是 2+，不是 1+。碳酸銅(I) (copper(I) carbonate) 應該是 <span class=\"chem\">Cu2CO3</span>。",
        // EN (option D): The metal is right, but <span class="chem">CO3^2-</span> is the polyatomic ion carbonate. An -ide ending is for an anion of one element.
        "3": "金屬正確，但 <span class=\"chem\">CO3^2-</span> 是多原子離子碳酸根 (carbonate)。-ide 結尾只用於由單一元素形成的陰離子。",
      },
    },

    // ── s2-1-q016 · numeric · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q016": {
      // EN: <p>Deduce the formula of calcium phosphate. How many <strong>ions</strong>, in total, are in one formula unit?</p>
      stem: "<p>推斷 (deduce) 磷酸鈣 (calcium phosphate) 的化學式。一個式單位裏總共有多少個<strong>離子</strong>？</p>",
      hints: [
        // EN: The ions are <span class="chem">Ca^2+</span> and <span class="chem">PO4^3-</span>. Find the smallest total charge that 2 and 3 both divide into.
        "離子是 <span class=\"chem\">Ca^2+</span> 和 <span class=\"chem\">PO4^3-</span>。找出 2 和 3 都能整除的最小總電荷。",
        // EN: A phosphate ion counts as one ion, although it contains five atoms.
        "一個磷酸根離子雖然含有五個原子，但只算一個離子。",
      ],
      // EN: <div class="worked__math">smallest common total charge = 6</div><div class="worked__math">6 ÷ 2 = 3 Ca<sup>2+</sup> ions &nbsp; and &nbsp; 6 ÷ 3 = 2 PO<sub>4</sub><sup>3−</sup> ions</div><p>The formula is <span class="chem">Ca3(PO4)2</span>. One formula unit contains 3 + 2 = <strong>5</strong> ions.</p>
      solution: "<div class=\"worked__math\">最小的共同總電荷 = 6</div><div class=\"worked__math\">6 ÷ 2 = 3 個 Ca<sup>2+</sup> 離子 &nbsp; 和 &nbsp; 6 ÷ 3 = 2 個 PO<sub>4</sub><sup>3−</sup> 離子</div><p>化學式是 <span class=\"chem\">Ca3(PO4)2</span>。一個式單位含有 3 + 2 = <strong>5</strong> 個離子。</p>",
    },

    // ── s2-1-q017 · short · exam · SL · Structure 2.1.2 · 2 marks
    "s2-1-q017": {
      // EN: <p>Sodium hydrogencarbonate, <span class="chem">NaHCO3</span>, contains both ionic bonds and covalent bonds. State where each type of bond is found in this compound.</p>
      stem: "<p>碳酸氫鈉 (sodium hydrogencarbonate) <span class=\"chem\">NaHCO3</span> 同時含有離子鍵和共價鍵。寫出 (state) 這種化合物中，每種鍵分別在哪裏。</p>",
      hints: [
        // EN: Split the formula into its two ions first.
        "先把化學式分拆成兩種離子。",
        // EN: A polyatomic ion is a group of atoms. What kind of bond holds the atoms in the group together?
        "多原子離子是一組原子。把這組原子連結在一起的是哪種鍵？",
      ],
      // EN: <p>The ionic bonding is between the sodium ions, <span class="chem">Na+</span>, and the hydrogencarbonate ions, <span class="chem">HCO3-</span>. The covalent bonds are between the atoms inside each hydrogencarbonate ion (between carbon and oxygen, and between oxygen and hydrogen).</p>
      answer: "<p>離子鍵在鈉離子 <span class=\"chem\">Na+</span> 和碳酸氫根離子 <span class=\"chem\">HCO3-</span> 之間。共價鍵在每個碳酸氫根離子內的原子之間（碳和氧之間，以及氧和氫之間）。</p>",
      markscheme: [
        // EN: Ionic: between the sodium ion / Na⁺ and the hydrogencarbonate ion / HCO₃⁻. Accept: between the cation and the (polyatomic) anion.
        "離子鍵：在鈉離子／Na⁺ 和碳酸氫根離子／HCO₃⁻ 之間。接受：在陽離子和（多原子）陰離子之間。",
        // EN: Covalent: between the atoms within the hydrogencarbonate ion. Accept: between C and O / between O and H.
        "共價鍵：在碳酸氫根離子內的原子之間。接受：在 C 和 O 之間／在 O 和 H 之間。",
      ],
    },

    // ── s2-1-q018 · short · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q018": {
      // EN: <p>State what is meant by the term <em>ionic bond</em>.</p>
      stem: "<p>寫出 (state)<em>離子鍵</em> (ionic bond) 一詞的意思。</p>",
      hints: [
        // EN: Name the force, and name the particles it acts between.
        "寫出作用力的名稱，以及它在哪些粒子之間起作用。",
      ],
      // EN: <p>An ionic bond is the electrostatic attraction between oppositely charged ions.</p>
      answer: "<p>離子鍵是帶相反電荷的離子之間的靜電引力。</p>",
      markscheme: [
        // EN: Electrostatic attraction between oppositely charged ions. Accept: between cations and anions / between positive and negative ions. Do not accept: “transfer of electrons” alone, or an answer without “electrostatic”.
        "帶相反電荷的離子之間的靜電引力。接受：陽離子和陰離子之間／正離子和負離子之間。不接受：只寫「電子轉移」，或答案沒有「靜電」一詞。",
      ],
    },

    // ── s2-1-q019 · multi · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q019": {
      // EN: <p>Which statements about solid sodium chloride are correct? Select all that apply.</p>
      stem: "<p>以下哪些關於固體氯化鈉的陳述正確？選出所有正確選項。</p>",
      options: [
        // EN: Each sodium ion is surrounded by chloride ions.
        "每個鈉離子都被氯離子包圍。",
        // EN: The solid is made of separate NaCl molecules.
        "這種固體由獨立的 NaCl 分子組成。",
        // EN: The formula NaCl gives the ratio of the ions in the lattice.
        "化學式 NaCl 表示晶格中離子的比例。",
        // EN: The electrostatic attraction between the ions acts in all directions.
        "離子之間的靜電引力向所有方向起作用。",
        // EN: Each sodium ion is bonded to only one chloride ion.
        "每個鈉離子只和一個氯離子鍵合。",
        // EN: The lattice contains delocalized electrons.
        "晶格含有離域電子。",
      ],
      hints: [
        // EN: Picture the lattice: what are the nearest neighbours of each ion?
        "想像一下晶格：每個離子最近的鄰居是甚麼？",
        // EN: Does the formula of an ionic compound describe a molecule or a ratio?
        "離子化合物的化學式描述的是分子，還是比例？",
      ],
      // EN: <p>Sodium chloride is a three-dimensional lattice. Each ion is surrounded by ions of the opposite charge, and the electrostatic attraction acts in all directions. There are no molecules, so the formula NaCl is an empirical formula: it gives the ratio of the ions, 1 : 1.</p>
      solution: "<p>氯化鈉是三維晶格。每個離子都被帶相反電荷的離子包圍，靜電引力向所有方向起作用。晶格裏沒有分子，所以化學式 NaCl 是實驗式：它表示離子的比例 1 : 1。</p>",
      misconception: {
        // EN (option B): There are no molecules in an ionic lattice. Every ion attracts all the oppositely charged ions around it.
        "1": "離子晶格裏沒有分子。每個離子都吸引周圍所有帶相反電荷的離子。",
        // EN (option E): The attraction is not between one pair. A sodium ion attracts every chloride ion near it, in all directions.
        "4": "引力不是只在一對離子之間。一個鈉離子會向所有方向吸引附近的每一個氯離子。",
        // EN (option F): Delocalized electrons are found in metals. In sodium chloride all the electrons belong to individual ions.
        "5": "離域電子存在於金屬中。在氯化鈉中，所有電子都屬於個別的離子。",
      },
    },

    // ── s2-1-q020 · mcq · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q020": {
      // EN: <p>The table gives some properties of four substances, W, X, Y and Z. The data are illustrative. Which substance is most likely to be an ionic compound?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Melting point / °C</th><th scope="col">Conducts when solid?</th><th scope="col">Conducts when molten?</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">1085</td><td>yes</td><td>yes</td></tr><tr><th scope="row">X</th><td class="num">770</td><td>no</td><td>yes</td></tr><tr><th scope="row">Y</th><td class="num">1700</td><td>no</td><td>no</td></tr><tr><th scope="row">Z</th><td class="num">80</td><td>no</td><td>no</td></tr></tbody></table></div>
      stem: "<p>下表列出 W、X、Y 和 Z 四種物質的一些性質。數據只作示例用。哪種物質最有可能是離子化合物？</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">物質</th><th scope=\"col\" class=\"num\">熔點 / °C</th><th scope=\"col\">固體時導電？</th><th scope=\"col\">熔融時導電？</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">1085</td><td>能</td><td>能</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">770</td><td>不能</td><td>能</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">1700</td><td>不能</td><td>不能</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">80</td><td>不能</td><td>不能</td></tr></tbody></table></div>",
      options: [
        // EN: W
        "W",
        // EN: X
        "X",
        // EN: Y
        "Y",
        // EN: Z
        "Z",
      ],
      hints: [
        // EN: An ionic compound contains ions. When can those ions move?
        "離子化合物含有離子。這些離子甚麼時候能移動？",
        // EN: Look for a high melting point together with conduction only in the molten state.
        "找出熔點高、而且只在熔融狀態下導電的物質。",
      ],
      // EN: <p>An ionic compound has a high melting point, because of the strong electrostatic attraction in the lattice. It does not conduct when solid (ions in fixed positions) but does conduct when molten (ions free to move). Only <strong>X</strong> fits all three.</p>
      solution: "<p>離子化合物的熔點高，因為晶格中的靜電引力強。它在固體時不導電（離子在固定位置），但熔融時導電（離子可自由移動）。只有 <strong>X</strong> 三項都符合。</p>",
      misconception: {
        // EN (option A): W conducts when solid. In a solid ionic compound the ions are in fixed positions, so it does not conduct. W behaves like a metal.
        "0": "W 在固體時導電。固體離子化合物的離子在固定位置，所以不導電。W 的表現像金屬。",
        // EN (option C): Y has a high melting point, but it does not conduct when molten. A molten ionic compound has ions that are free to move, so it must conduct.
        "2": "Y 的熔點高，但熔融時不導電。熔融的離子化合物有可自由移動的離子，所以一定導電。",
        // EN (option D): Z melts at a low temperature and never conducts. An ionic lattice needs a lot of energy to break down, and its molten form conducts.
        "3": "Z 在低溫下熔化，而且任何時候都不導電。離子晶格要大量能量才會瓦解，而熔融後能導電。",
      },
    },

    // ── s2-1-q021 · order · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q021": {
      // EN: <p>Arrange these sodium halides in order of increasing lattice enthalpy, <strong>smallest first</strong>.</p>
      stem: "<p>把以下鹵化鈉按晶格焓由小至大排列，<strong>最小的排最先</strong>。</p>",
      options: [
        // EN: <span class="chem">NaI</span>
        "<span class=\"chem\">NaI</span>",
        // EN: <span class="chem">NaBr</span>
        "<span class=\"chem\">NaBr</span>",
        // EN: <span class="chem">NaCl</span>
        "<span class=\"chem\">NaCl</span>",
        // EN: <span class="chem">NaF</span>
        "<span class=\"chem\">NaF</span>",
      ],
      hints: [
        // EN: The cation and all the charges are the same. What is different?
        "陽離子和所有電荷都相同。有甚麼不同？",
        // EN: Ionic radius increases down group 17. Smaller ions get closer together.
        "沿第 17 族向下，離子半徑增大。離子越小，靠得越近。",
      ],
      // EN: <p>All four contain <span class="chem">Na+</span> and a 1− ion, so only the ionic radius of the halide ion changes. Data booklet radii: <span class="chem">I-</span> 220 pm, <span class="chem">Br-</span> 196 pm, <span class="chem">Cl-</span> 181 pm, <span class="chem">F-</span> 133 pm. The smaller the anion, the closer the ions and the stronger the electrostatic attraction.</p><div class="worked__math">NaI 705 &lt; NaBr 754 &lt; NaCl 790 &lt; NaF 930 &nbsp; (kJ mol<sup>−1</sup>)</div>
      solution: "<p>四種化合物都含有 <span class=\"chem\">Na+</span> 和一個 1− 離子，所以只有鹵離子的離子半徑不同。數據手冊的半徑：<span class=\"chem\">I-</span> 220 pm、<span class=\"chem\">Br-</span> 196 pm、<span class=\"chem\">Cl-</span> 181 pm、<span class=\"chem\">F-</span> 133 pm。陰離子越小，離子靠得越近，靜電引力越強。</p><div class=\"worked__math\">NaI 705 &lt; NaBr 754 &lt; NaCl 790 &lt; NaF 930 &nbsp; (kJ mol<sup>−1</sup>)</div>",
    },

    // ── s2-1-q022 · short · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q022": {
      // EN: <p>The lattice enthalpy of magnesium oxide is 3791 <span class="unit">kJ mol-1</span>. The lattice enthalpy of barium oxide is 3054 <span class="unit">kJ mol-1</span>. Explain why the lattice enthalpy of magnesium oxide is larger.</p>
      stem: "<p>氧化鎂 (magnesium oxide) 的晶格焓是 3791 <span class=\"unit\">kJ mol-1</span>。氧化鋇 (barium oxide) 的晶格焓是 3054 <span class=\"unit\">kJ mol-1</span>。解釋 (explain) 為甚麼氧化鎂的晶格焓較大。</p>",
      hints: [
        // EN: Compare the two cations. Is it the charge or the ionic radius that is different?
        "比較兩種陽離子。不同的是電荷，還是離子半徑？",
        // EN: Finish by naming the force that is stronger.
        "最後要寫出哪種作用力較強。",
      ],
      // EN: <p>Both compounds contain a 2+ ion and the oxide ion, so the charges are the same. The <span class="chem">Mg^2+</span> ion has a smaller ionic radius than the <span class="chem">Ba^2+</span> ion (72 pm against 135 pm), so the ions are closer together in magnesium oxide. The electrostatic attraction between the oppositely charged ions is therefore stronger.</p>
      answer: "<p>兩種化合物都含有一個 2+ 離子和氧離子，所以電荷相同。<span class=\"chem\">Mg^2+</span> 離子的離子半徑比 <span class=\"chem\">Ba^2+</span> 離子小（72 pm 對 135 pm），所以氧化鎂中的離子靠得較近。因此，帶相反電荷的離子之間的靜電引力較強。</p>",
      markscheme: [
        // EN: Mg²⁺ has a smaller ionic radius than Ba²⁺. Accept: the ions are closer together / smaller distance between the ions in MgO. Do not accept: “atomic radius” or “magnesium is smaller” without reference to ions.
        "Mg²⁺ 的離子半徑比 Ba²⁺ 小。接受：MgO 中的離子靠得較近／離子之間的距離較短。不接受：「原子半徑」，或只寫「鎂較小」而沒有提及離子。",
        // EN: Stronger electrostatic attraction between the (oppositely charged) ions in MgO. Accept: stronger attraction between Mg²⁺ and O²⁻.
        "MgO 中（帶相反電荷的）離子之間的靜電引力較強。接受：Mg²⁺ 和 O²⁻ 之間的引力較強。",
      ],
    },

    // ── s2-1-q023 · short · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q023": {
      // EN: <p>Explain why sodium chloride conducts electricity when it is molten but not when it is solid.</p>
      stem: "<p>解釋 (explain) 為甚麼氯化鈉在熔融時導電，在固體時卻不導電。</p>",
      hints: [
        // EN: Which charged particles does sodium chloride contain?
        "氯化鈉含有哪些帶電粒子？",
        // EN: Write one sentence about the solid and one about the liquid.
        "寫一句關於固體，再寫一句關於液體。",
      ],
      // EN: <p>In the solid, the ions are held in fixed positions in the lattice and cannot move. When the solid melts, the lattice breaks down and the ions are free to move, so they can carry charge.</p>
      answer: "<p>在固體中，離子固定在晶格中的位置，不能移動。固體熔化時，晶格瓦解，離子可自由移動，所以能傳導電荷。</p>",
      markscheme: [
        // EN: Solid: ions are in fixed positions / ions cannot move (through the lattice).
        "固體：離子在固定位置／離子不能（在晶格中）移動。",
        // EN: Molten: ions are free to move / mobile ions (carry the charge). Do not accept: electrons are free to move.
        "熔融：離子可自由移動／有可流動的離子（傳導電荷）。不接受：電子可自由移動。",
      ],
    },

    // ── s2-1-q024 · multi · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q024": {
      // EN: <p>Which properties are typical of an ionic compound such as potassium bromide? Select all that apply.</p>
      stem: "<p>以下哪些是溴化鉀 (potassium bromide) 這類離子化合物的典型性質？選出所有正確選項。</p>",
      options: [
        // EN: High melting point
        "熔點高",
        // EN: Low volatility
        "揮發性低",
        // EN: Conducts electricity when solid
        "固體時導電",
        // EN: Conducts electricity when molten
        "熔融時導電",
        // EN: Dissolves well in non-polar solvents such as hexane
        "易溶於己烷等非極性溶劑",
        // EN: Brittle
        "脆",
      ],
      hints: [
        // EN: Start from the structure: a lattice of ions held by strong electrostatic attraction.
        "由結構入手：靠強的靜電引力維繫的離子晶格。",
        // EN: For each property ask: does it need a lot of energy? Can the ions move?
        "每項性質都問一問：需要大量能量嗎？離子能移動嗎？",
      ],
      // EN: <p>The strong electrostatic attraction between the ions gives a high melting point and a low volatility. The solid does not conduct because its ions are in fixed positions, but the molten compound conducts because its ions are free to move. The solid is brittle: a force can bring ions of the same charge next to each other, and they repel. It does not dissolve in non-polar solvents.</p>
      solution: "<p>離子之間強的靜電引力，令熔點高、揮發性低。固體不導電，因為離子在固定位置；熔融的化合物能導電，因為離子可自由移動。固體是脆的：外力會令同電荷的離子相鄰，然後互相排斥。它不溶於非極性溶劑。</p>",
      misconception: {
        // EN (option C): In the solid the ions are held in fixed positions in the lattice, so they cannot carry charge.
        "2": "在固體中，離子固定在晶格中的位置，所以不能傳導電荷。",
        // EN (option E): Non-polar molecules do not attract ions strongly enough to pull them out of the lattice. Ionic compounds are more likely to dissolve in a polar solvent such as water.
        "4": "非極性分子對離子的吸引不夠強，不能把離子拉出晶格。離子化合物較可能溶於水這類極性溶劑。",
      },
    },

    // ── s2-1-q025 · order · challenge · SL · Structure 2.1.3 · 2 marks
    "s2-1-q025": {
      // EN: <p>Use the charges of the ions, and the ionic radii in section 10 of the data booklet, to arrange these compounds in order of increasing lattice enthalpy, <strong>smallest first</strong>.</p>
      stem: "<p>利用離子的電荷和數據手冊第 10 節的離子半徑，把以下化合物按晶格焓由小至大排列，<strong>最小的排最先</strong>。</p>",
      options: [
        // EN: <span class="chem">KCl</span>
        "<span class=\"chem\">KCl</span>",
        // EN: <span class="chem">NaF</span>
        "<span class=\"chem\">NaF</span>",
        // EN: <span class="chem">CaCl2</span>
        "<span class=\"chem\">CaCl2</span>",
        // EN: <span class="chem">BaO</span>
        "<span class=\"chem\">BaO</span>",
        // EN: <span class="chem">MgO</span>
        "<span class=\"chem\">MgO</span>",
      ],
      hints: [
        // EN: Sort by ion charge first. Which compounds contain only 1+ and 1− ions? Which contain a 2+ ion and a 2− ion?
        "先按離子電荷分類。哪些化合物只含 1+ 和 1− 離子？哪些含有一個 2+ 離子和一個 2− 離子？",
        // EN: Within a group with the same charges, the compound with the smaller ions has the larger lattice enthalpy.
        "在電荷相同的一組之內，離子較小的化合物晶格焓較大。",
      ],
      // EN: <p><strong>Charges first.</strong> KCl and NaF contain 1+ and 1− ions. <span class="chem">CaCl2</span> contains a 2+ ion and 1− ions. BaO and MgO contain 2+ and 2− ions. Higher charges give stronger electrostatic attraction.</p><p><strong>Then ionic radius.</strong> <span class="chem">Na+</span> (102 pm) and <span class="chem">F-</span> (133 pm) are smaller than <span class="chem">K+</span> (138 pm) and <span class="chem">Cl-</span> (181 pm), so NaF is above KCl. <span class="chem">Mg^2+</span> (72 pm) is smaller than <span class="chem">Ba^2+</span> (135 pm), so MgO is above BaO.</p><div class="worked__math">KCl 720 &lt; NaF 930 &lt; CaCl<sub>2</sub> 2271 &lt; BaO 3054 &lt; MgO 3791 &nbsp; (kJ mol<sup>−1</sup>)</div>
      solution: "<p><strong>先看電荷。</strong>KCl 和 NaF 含有 1+ 和 1− 離子。<span class=\"chem\">CaCl2</span> 含有一個 2+ 離子和 1− 離子。BaO 和 MgO 含有 2+ 和 2− 離子。電荷越高，靜電引力越強。</p><p><strong>再看離子半徑。</strong><span class=\"chem\">Na+</span> (102 pm) 和 <span class=\"chem\">F-</span> (133 pm) 比 <span class=\"chem\">K+</span> (138 pm) 和 <span class=\"chem\">Cl-</span> (181 pm) 小，所以 NaF 排在 KCl 之上。<span class=\"chem\">Mg^2+</span> (72 pm) 比 <span class=\"chem\">Ba^2+</span> (135 pm) 小，所以 MgO 排在 BaO 之上。</p><div class=\"worked__math\">KCl 720 &lt; NaF 930 &lt; CaCl<sub>2</sub> 2271 &lt; BaO 3054 &lt; MgO 3791 &nbsp; (kJ mol<sup>−1</sup>)</div>",
    },

    // ── s2-1-q026 · mcq · challenge · SL · Structure 2.1.2 · 1 mark
    "s2-1-q026": {
      // EN: <p>Element X has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span>. Element Y has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>. X and Y form an ionic compound. Which row is correct?</p>
      stem: "<p>元素 X 的電子排佈是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span>。元素 Y 的電子排佈是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span>。X 和 Y 形成離子化合物。哪一行正確？</p>",
      options: [
        // EN: Formula <span class="chem">X3Y2</span>. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "化學式 <span class=\"chem\">X3Y2</span>。兩種離子的電子排佈都是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
        // EN: Formula <span class="chem">X2Y3</span>. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "化學式 <span class=\"chem\">X2Y3</span>。兩種離子的電子排佈都是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
        // EN: Formula <span class="chem">X2Y3</span>. The ions have the configurations <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span> and <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>.
        "化學式 <span class=\"chem\">X2Y3</span>。兩種離子的電子排佈是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span> 和 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span>。",
        // EN: Formula XY. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "化學式 XY。兩種離子的電子排佈都是 <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
      ],
      hints: [
        // EN: How many outer electrons does each atom have? Which one is the metal?
        "每個原子有多少個最外層電子？哪一個是金屬？",
        // EN: X loses 3 electrons and Y gains 2. Write the two ions, then balance the charges.
        "X 失去 3 個電子，Y 得到 2 個。寫出兩種離子，然後平衡電荷。",
      ],
      // EN: <p>X has 3 outer electrons (<span class="mono"><span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span>) and loses them: <span class="chem">X^3+</span>, <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>. Y has 6 outer electrons (<span class="mono"><span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>) and gains 2: <span class="chem">Y^2-</span>, <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.</p><div class="worked__math">2 × (3+) = 6+ &nbsp; and &nbsp; 3 × (2−) = 6−</div><p>The formula is <span class="chem">X2Y3</span>. (X is aluminium and Y is oxygen.)</p>
      solution: "<p>X 有 3 個最外層電子（<span class=\"mono\"><span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span>），會失去它們：<span class=\"chem\">X^3+</span>，<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。Y 有 6 個最外層電子（<span class=\"mono\"><span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span>），會得到 2 個：<span class=\"chem\">Y^2-</span>，<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。</p><div class=\"worked__math\">2 × (3+) = 6+ &nbsp; 和 &nbsp; 3 × (2−) = 6−</div><p>化學式是 <span class=\"chem\">X2Y3</span>。（X 是鋁，Y 是氧。）</p>",
      misconception: {
        // EN (option A): The configurations are right, but the subscripts are the wrong way round. Three 3+ ions and two 2− ions give 9+ against 4−.
        "0": "電子排佈正確，但下標的位置調轉了。三個 3+ 離子和兩個 2− 離子，是 9+ 對 4−。",
        // EN (option C): The formula is right, but these are the configurations of the neutral atoms. The ions have lost or gained electrons.
        "2": "化學式正確，但這些是中性原子的電子排佈。離子已經失去或得到電子。",
        // EN (option D): One 3+ ion and one 2− ion leave a total charge of 1+. The charges must add up to zero.
        "3": "一個 3+ 離子和一個 2− 離子，剩下總電荷 1+。電荷加起來必須是零。",
      },
    },

    // ── s2-1-q027 · short · challenge · SL · Structure 2.1.3 · 3 marks
    "s2-1-q027": {
      // EN: <p>The table gives data booklet values for sodium fluoride and calcium oxide.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Compound</th><th scope="col">Ionic radii / pm</th><th scope="col" class="num">Lattice enthalpy / kJ mol<sup>−1</sup></th></tr></thead><tbody><tr><th scope="row">NaF</th><td><span class="chem">Na+</span> 102, <span class="chem">F-</span> 133</td><td class="num">930</td></tr><tr><th scope="row">CaO</th><td><span class="chem">Ca^2+</span> 100, <span class="chem">O^2-</span> 140</td><td class="num">3401</td></tr></tbody></table></div><p>Use the data to explain why the lattice enthalpy of calcium oxide is much larger than that of sodium fluoride.</p>
      stem: "<p>下表列出氟化鈉 (sodium fluoride) 和氧化鈣 (calcium oxide) 的數據手冊數值。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">化合物</th><th scope=\"col\">離子半徑 / pm</th><th scope=\"col\" class=\"num\">晶格焓 / kJ mol<sup>−1</sup></th></tr></thead><tbody><tr><th scope=\"row\">NaF</th><td><span class=\"chem\">Na+</span> 102、<span class=\"chem\">F-</span> 133</td><td class=\"num\">930</td></tr><tr><th scope=\"row\">CaO</th><td><span class=\"chem\">Ca^2+</span> 100、<span class=\"chem\">O^2-</span> 140</td><td class=\"num\">3401</td></tr></tbody></table></div><p>利用這些數據，解釋 (explain) 為甚麼氧化鈣的晶格焓比氟化鈉大得多。</p>",
      hints: [
        // EN: Add the two radii for each compound. What do you notice?
        "把每種化合物的兩個半徑加起來。你留意到甚麼？",
        // EN: If the distance between the ions is nearly the same, which other factor is left?
        "如果離子之間的距離幾乎相同，還剩下哪個因素？",
      ],
      // EN: <p>The ionic radii are almost the same in the two compounds: the sum of the radii is 102 + 133 = 235 pm in NaF and 100 + 140 = 240 pm in CaO. So the distance between the ions cannot explain the difference. The ions in CaO have twice the charge (2+ and 2−, against 1+ and 1−). The electrostatic attraction between the oppositely charged ions is therefore much stronger in CaO, and more energy is needed to separate the ions.</p>
      answer: "<p>兩種化合物的離子半徑幾乎相同：NaF 的半徑之和是 102 + 133 = 235 pm，CaO 的是 100 + 140 = 240 pm。所以離子之間的距離不能解釋這個差別。CaO 的離子電荷是兩倍（2+ 和 2−，相對於 1+ 和 1−）。因此 CaO 中帶相反電荷的離子之間的靜電引力強得多，要把離子分開需要更多能量。</p>",
      markscheme: [
        // EN: The ionic radii / the distances between the ions are (almost) the same in both compounds (235 pm and 240 pm), so radius does not explain the difference.
        "兩種化合物的離子半徑／離子之間的距離（幾乎）相同（235 pm 和 240 pm），所以半徑不能解釋這個差別。",
        // EN: The ions in CaO have higher charges: 2+ and 2− against 1+ and 1−.
        "CaO 的離子電荷較高：2+ 和 2−，相對於 1+ 和 1−。",
        // EN: Stronger electrostatic attraction between the (oppositely charged) ions in CaO. Accept: more energy needed to separate the ions.
        "CaO 中（帶相反電荷的）離子之間的靜電引力較強。接受：把離子分開需要更多能量。",
      ],
    },

    // ── s2-1-q028 · multi · challenge · SL · Structure 2.1.3 · 1 mark
    "s2-1-q028": {
      // EN: <p>The lattice enthalpy of calcium fluoride, <span class="chem">CaF2</span>, is 2651 <span class="unit">kJ mol-1</span>. The lattice enthalpy of calcium chloride, <span class="chem">CaCl2</span>, is 2271 <span class="unit">kJ mol-1</span>. Which statements help to explain why the value for calcium fluoride is larger? Select all that apply.</p>
      stem: "<p>氟化鈣 (calcium fluoride) <span class=\"chem\">CaF2</span> 的晶格焓是 2651 <span class=\"unit\">kJ mol-1</span>。氯化鈣 (calcium chloride) <span class=\"chem\">CaCl2</span> 的晶格焓是 2271 <span class=\"unit\">kJ mol-1</span>。以下哪些陳述有助解釋氟化鈣的數值為甚麼較大？選出所有正確選項。</p>",
      options: [
        // EN: The fluoride ion has a smaller ionic radius than the chloride ion.
        "氟離子的離子半徑比氯離子小。",
        // EN: The fluoride ion has a higher charge than the chloride ion.
        "氟離子的電荷比氯離子高。",
        // EN: The centres of the ions are closer together in calcium fluoride.
        "氟化鈣中離子的中心靠得較近。",
        // EN: The electrostatic attraction between the ions is stronger in calcium fluoride.
        "氟化鈣中離子之間的靜電引力較強。",
        // EN: The intermolecular forces are stronger in calcium fluoride.
        "氟化鈣的分子間引力較強。",
      ],
      hints: [
        // EN: Both compounds contain <span class="chem">Ca^2+</span>. Compare the two anions: charge and ionic radius.
        "兩種化合物都含有 <span class=\"chem\">Ca^2+</span>。比較兩種陰離子的電荷和離子半徑。",
        // EN: Data booklet: <span class="chem">F-</span> 133 pm, <span class="chem">Cl-</span> 181 pm.
        "數據手冊：<span class=\"chem\">F-</span> 133 pm、<span class=\"chem\">Cl-</span> 181 pm。",
      ],
      // EN: <p>Both anions are 1−, so charge does not explain the difference. <span class="chem">F-</span> (133 pm) is smaller than <span class="chem">Cl-</span> (181 pm), so the centres of the ions are closer together in <span class="chem">CaF2</span>. The electrostatic attraction between the oppositely charged ions is stronger, and the lattice enthalpy is larger.</p>
      solution: "<p>兩種陰離子都是 1−，所以電荷不能解釋這個差別。<span class=\"chem\">F-</span> (133 pm) 比 <span class=\"chem\">Cl-</span> (181 pm) 小，所以 <span class=\"chem\">CaF2</span> 中離子的中心靠得較近。帶相反電荷的離子之間的靜電引力較強，晶格焓也較大。</p>",
      misconception: {
        // EN (option B): Fluoride and chloride are both in group 17, so both ions have a charge of 1−. The charges are the same in the two compounds.
        "1": "氟和氯都在第 17 族，所以兩種離子的電荷都是 1−。兩種化合物中的電荷相同。",
        // EN (option E): Ionic compounds have no molecules, so there are no intermolecular forces. The force is electrostatic attraction between ions.
        "4": "離子化合物沒有分子，所以沒有分子間引力。這裏的作用力是離子之間的靜電引力。",
      },
    },

    // ── s2-1-q029 · mcq · challenge · SL · Structure 2.1.2 · 1 mark
    "s2-1-q029": {
      // EN: <p>The dichromate ion has the formula <span class="chem">Cr2O7^2-</span>. What is the formula of iron(III) dichromate?</p>
      stem: "<p>重鉻酸根離子 (dichromate ion) 的化學式是 <span class=\"chem\">Cr2O7^2-</span>。重鉻酸鐵(III) (iron(III) dichromate) 的化學式是甚麼？</p>",
      options: [
        // EN: <span class="chem">FeCr2O7</span>
        "<span class=\"chem\">FeCr2O7</span>",
        // EN: <span class="chem">Fe3(Cr2O7)2</span>
        "<span class=\"chem\">Fe3(Cr2O7)2</span>",
        // EN: <span class="chem">Fe2(Cr2O7)3</span>
        "<span class=\"chem\">Fe2(Cr2O7)3</span>",
        // EN: <span class="chem">Fe2Cr6O21</span>
        "<span class=\"chem\">Fe2Cr6O21</span>",
      ],
      hints: [
        // EN: You do not need to know this ion. Treat it like sulfate: a 2− polyatomic ion.
        "你不需要認識這個離子。把它當作硫酸根離子那樣處理：一個 2− 的多原子離子。",
        // EN: Iron(III) is 3+. Find the smallest total charge that 3 and 2 both divide into.
        "鐵(III) 是 3+。找出 3 和 2 都能整除的最小總電荷。",
      ],
      // EN: <p>The ions are <span class="chem">Fe^3+</span> and <span class="chem">Cr2O7^2-</span>. The smallest common total is 6.</p><div class="worked__math">2 × (3+) = 6+ &nbsp; and &nbsp; 3 × (2−) = 6−</div><p>Three dichromate ions go in brackets: <span class="chem">Fe2(Cr2O7)3</span>.</p>
      solution: "<p>離子是 <span class=\"chem\">Fe^3+</span> 和 <span class=\"chem\">Cr2O7^2-</span>。最小的共同總數是 6。</p><div class=\"worked__math\">2 × (3+) = 6+ &nbsp; 和 &nbsp; 3 × (2−) = 6−</div><p>三個重鉻酸根離子要放在括號內：<span class=\"chem\">Fe2(Cr2O7)3</span>。</p>",
      misconception: {
        // EN (option A): One <span class="chem">Fe^3+</span> and one <span class="chem">Cr2O7^2-</span> leave a total charge of 1+. This would be the formula of iron(II) dichromate.
        "0": "一個 <span class=\"chem\">Fe^3+</span> 和一個 <span class=\"chem\">Cr2O7^2-</span>，剩下總電荷 1+。這個化學式屬於重鉻酸鐵(II) (iron(II) dichromate)。",
        // EN (option B): The numbers are the wrong way round. Three 3+ ions and two 2− ions give 9+ against 4−.
        "1": "數字的位置調轉了。三個 3+ 離子和兩個 2− 離子，是 9+ 對 4−。",
        // EN (option D): The numbers of atoms are right, but the dichromate ion must stay together in brackets. The formula has to show that the compound contains three <span class="chem">Cr2O7^2-</span> ions.
        "3": "原子的數目正確，但重鉻酸根離子必須保持完整，放在括號內。化學式要顯示這種化合物含有三個 <span class=\"chem\">Cr2O7^2-</span> 離子。",
      },
    },

    // ── s2-1-q030 · short · challenge · SL · Structure 2.1.3 · 3 marks
    "s2-1-q030": {
      // EN: <p>A student writes this about magnesium chloride, <span class="chem">MgCl2</span>:</p><p><em>“Solid magnesium chloride does not conduct electricity because it contains no ions. When it melts, its electrons become free to move, so it conducts. It has a high melting point because the intermolecular forces between the magnesium chloride molecules are strong.”</em></p><p>Identify the three errors and correct each one.</p>
      stem: "<p>一名學生這樣描述氯化鎂 (magnesium chloride) <span class=\"chem\">MgCl2</span>：</p><p><em>「固體氯化鎂不導電，因為它不含離子。它熔化時，電子變得可自由移動，所以能導電。它的熔點高，因為氯化鎂分子之間的分子間引力強。」</em></p><p>辨認 (identify) 當中的三個錯誤，並逐一改正。</p>",
      hints: [
        // EN: Take one sentence at a time. What particles is magnesium chloride made of?
        "逐句來看。氯化鎂由甚麼粒子組成？",
        // EN: Which particles move in a molten ionic compound?
        "熔融的離子化合物中，移動的是哪些粒子？",
        // EN: What holds an ionic lattice together?
        "離子晶格靠甚麼維繫在一起？",
      ],
      // EN: <p>(1) The solid does contain ions, <span class="chem">Mg^2+</span> and <span class="chem">Cl-</span>. It does not conduct because the ions are held in fixed positions in the lattice. (2) When it melts, it is the ions, not electrons, that become free to move and carry the charge. (3) There are no molecules and no intermolecular forces. The melting point is high because the electrostatic attraction between the oppositely charged ions in the lattice is strong, so a lot of energy is needed to overcome it.</p>
      answer: "<p>(1) 固體其實含有離子：<span class=\"chem\">Mg^2+</span> 和 <span class=\"chem\">Cl-</span>。它不導電，是因為離子固定在晶格中的位置。(2) 熔化時，變得可自由移動並傳導電荷的是離子，不是電子。(3) 這裏沒有分子，也沒有分子間引力。熔點高，是因為晶格中帶相反電荷的離子之間的靜電引力強，所以需要大量能量才能克服。</p>",
      markscheme: [
        // EN: The solid contains ions, but they are in fixed positions / cannot move (so it does not conduct).
        "固體含有離子，但離子在固定位置／不能移動（所以不導電）。",
        // EN: When molten, the ions (not electrons) are free to move / carry the charge.
        "熔融時，離子（不是電子）可自由移動／傳導電荷。",
        // EN: There are no molecules / no intermolecular forces: the high melting point is due to strong electrostatic attraction between oppositely charged ions (in the lattice).
        "沒有分子／沒有分子間引力：熔點高是因為（晶格中）帶相反電荷的離子之間有強的靜電引力。",
      ],
    },

  }
});
