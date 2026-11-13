/* s1-4 — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-4', {
  strings: {

    // page title (browser tab)
    "1.4 Counting particles by mass: the mole | Structure Lab": "1.4 用質量來數粒子：摩爾 | Structure Lab",

    // Counting particles by mass: the mole > page header > p
    "Structure 1.4": "Structure 1.4",

    // Counting particles by mass: the mole > page header > h1
    "Counting particles by mass: the mole": "用質量來數粒子：摩爾",

    // Counting particles by mass: the mole > page header > span
    "How do we quantify matter on the atomic scale?": "在原子的尺度上，我們怎樣量化物質？",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "This topic is almost all calculation, and every later calculation in the course is built on it. Tick each item when you can do it without looking at your notes. All of it is SL and HL core. There is no Additional HL content in 1.4.": "這個課題幾乎全是計算，而且課程往後的每一種計算都以它為基礎。不看筆記也做得到的項目，就剔選它。全部都是 SL 和 HL 的核心內容。1.4 沒有 HL 附加內容。",

    // What you need to be able to do > checklist > span
    "Convert an amount in moles to a number of atoms, molecules, ions or formula units, and back, using the Avogadro constant.": "利用亞佛加德羅常數，把以摩爾表示的物質的量換算成原子、分子、離子或式單位的數目，也能反過來換算。",

    // What you need to be able to do > checklist > span
    "Work out a relative formula mass, <i>M</i><sub>r</sub>, from relative atomic masses, and say why <i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> have no units.": "由相對原子質量求出相對式量 <i>M</i><sub>r</sub>，並說出 <i>A</i><sub>r</sub> 和 <i>M</i><sub>r</sub> 為甚麼沒有單位。",

    // What you need to be able to do > checklist > span
    "Solve problems that link mass, amount and number of particles using <i>n</i> = <i>m</i> / <i>M</i>.": "用 <i>n</i> = <i>m</i> / <i>M</i> 解決把質量、物質的量和粒子數目連繫起來的問題。",

    // What you need to be able to do > checklist > span
    "Go from percentage composition by mass to an empirical formula, and from a formula to percentage composition.": "由質量百分組成求出實驗式，也能由化學式求出質量百分組成。",

    // What you need to be able to do > checklist > span
    "Find an empirical formula from mass data, including combustion data and heating a hydrate.": "由質量數據求出實驗式，包括燃燒數據和加熱水合物的數據。",

    // What you need to be able to do > checklist > span
    "Find a molecular formula from an empirical formula and a molar mass.": "由實驗式和摩爾質量求出分子式。",

    // What you need to be able to do > checklist > span
    "Solve problems with <i>n</i> = <i>CV</i>, and convert between <span class=\"unit\">mol dm-3</span> and <span class=\"unit\">g dm-3</span>.": "用 <i>n</i> = <i>CV</i> 解決問題，並在 <span class=\"unit\">mol dm-3</span> 和 <span class=\"unit\">g dm-3</span> 之間換算。",

    // What you need to be able to do > checklist > span
    "Describe how to prepare a standard solution and a dilution, and how a calibration curve gives an unknown concentration.": "描述怎樣配製標準溶液和稀釋溶液，以及怎樣用校準曲線求出未知濃度。",

    // What you need to be able to do > checklist > span
    "State Avogadro’s law and use the mole ratio of an equation to find volumes of reacting gases.": "寫出亞佛加德羅定律，並利用方程式的摩爾比求出反應氣體的體積。",

    // Before any mole calculation: three questions > data-toc attribute
    "Before you calculate": "計算之前",

    // Before any mole calculation: three questions > h2
    "Before any mole calculation: three questions": "做任何摩爾計算之前：先問三個問題",

    // Before any mole calculation: three questions > p
    "Most lost marks in this topic do not come from hard chemistry. They come from pressing calculator buttons before you know where you are going. So use the same routine every time, even when the question looks short.": "這個課題失分，多數不是因為化學太難，而是因為還未弄清楚要往哪裏走，就急着按計算機。所以每次都要用同一套程序，即使題目看來很短也一樣。",

    // Before any mole calculation: three questions > li
    "<strong>What am I given, and in what units?</strong><span>Write each value with its unit and say what it is: a mass in g, a volume in cm<sup>3</sup>, a concentration in mol dm<sup>−3</sup>, a number of particles.</span>": "<strong>題目給了我甚麼？單位是甚麼？</strong><span>把每個數值連同單位寫下來，並說明它是甚麼：以 g 表示的質量、以 cm<sup>3</sup> 表示的體積、以 mol dm<sup>−3</sup> 表示的濃度，還是粒子數目。</span>",

    // Before any mole calculation: three questions > li
    "<strong>What do I want, and in what units?</strong><span>Underline it in the question. “Amount” always means moles. “Number of atoms” is not the same as “number of molecules”.</span>": "<strong>我要求甚麼？單位是甚麼？</strong><span>在題目中把它劃上底線。「物質的量」(amount) 永遠是指摩爾數。「原子數目」和「分子數目」並不相同。</span>",

    // Before any mole calculation: three questions > li
    "<strong>Which link connects them?</strong><span>Every route goes through <b>moles</b>. Pick the relationship that turns what you have into moles, then the one that turns moles into what you want.</span>": "<strong>哪一個關係把兩者連起來？</strong><span>每一條路線都要經過<b>摩爾</b>。先選一個關係，把已知的量變成摩爾；再選一個關係，把摩爾變成要求的量。</span>",

    // Before any mole calculation: three questions > key idea > p
    "There are only three relationships to choose from in this topic: <span class=\"mono\"><i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub></span> for particles, <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span> for mass, and <span class=\"mono\"><i>n</i> = <i>C</i> × <i>V</i></span> for solutions. The mole is the meeting point of all three.": "這個課題只有三個關係可以選：粒子用 <span class=\"mono\"><i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub></span>，質量用 <span class=\"mono\"><i>n</i> = <i>m</i> ÷ <i>M</i></span>，溶液用 <span class=\"mono\"><i>n</i> = <i>C</i> × <i>V</i></span>。三者都在摩爾會合。",

    // Before any mole calculation: three questions > h3
    "Get the units right first": "先把單位弄對",

    // Before any mole calculation: three questions > p
    "The relationships only work in their own units: mass in <span class=\"unit\">g</span>, volume of solution in <span class=\"unit\">dm3</span>. Questions often give <span class=\"unit\">cm3</span> or <span class=\"unit\">mg</span> instead. Convert before you substitute, and write the conversion down as its own line.": "每個關係都只在自己的單位下才成立：質量用 <span class=\"unit\">g</span>，溶液體積用 <span class=\"unit\">dm3</span>。題目卻常常給 <span class=\"unit\">cm3</span> 或 <span class=\"unit\">mg</span>。先換算，才代入，並且把換算獨立寫成一行。",

    // Before any mole calculation: three questions > widget > data-title attribute
    "Unit-conversion strip": "單位換算尺",

    // Before any mole calculation: three questions > widget > figcaption
    "Type a value and choose its unit. Each step to the right is a unit 1000 times bigger, so the number gets 1000 times smaller.": "輸入一個數值，再選擇它的單位。每向右一格，單位就大 1000 倍，所以數字會小 1000 倍。",

    // Before any mole calculation: three questions > common mistake > p
    "Putting a volume in <span class=\"unit\">cm3</span> straight into <i>n</i> = <i>CV</i> gives an answer 1000 times too big. A quick check: 25 cm<sup>3</sup> is a small amount of liquid, so in dm<sup>3</sup> it must be a small number, 0.025.": "把以 <span class=\"unit\">cm3</span> 表示的體積直接代入 <i>n</i> = <i>CV</i>，答案會大了 1000 倍。快速檢查：25 cm<sup>3</sup> 是很少的液體，所以換成 dm<sup>3</sup> 後一定是個很小的數，即 0.025。",

    // Before any mole calculation: three questions > try it > p
    "A pipette delivers 25.0 cm<sup>3</sup> of solution. What is this volume in dm<sup>3</sup>?": "一支移液管放出 25.0 cm<sup>3</sup> 溶液。這個體積是多少 dm<sup>3</sup>？",

    // Before any mole calculation: three questions > try it > li
    "A dm<sup>3</sup> is bigger than a cm<sup>3</sup>. Will the number get bigger or smaller?": "dm<sup>3</sup> 比 cm<sup>3</sup> 大。數字會變大還是變小？",

    // Before any mole calculation: three questions > try it > li
    "Divide by 1000: <span class=\"mono\">25.0 ÷ 1000</span>. Keep three significant figures.": "除以 1000：<span class=\"mono\">25.0 ÷ 1000</span>。保留 3 位有效數字。",

    // Before any mole calculation: three questions > try it > p
    "The zero at the end matters. It shows the value is known to three significant figures.": "末尾的 0 很重要。它表示這個數值準確至 3 位有效數字。",

    // Before any mole calculation: three questions > h3
    "Significant figures: a short guide": "有效數字：簡短指引",

    // Before any mole calculation: three questions > p
    "<dfn data-def=\"The digits in a number that carry real information about its precision. Leading zeros do not count.\">Significant figures</dfn> (s.f.) tell the reader how precisely a value is known. Your answer cannot be more precise than the data you started with.": "<dfn data-def=\"一個數之中，真正反映其精密度的數字。開頭的 0 不算。\">有效數字 <span class=\"en-term\">(significant figures)</span></dfn>（s.f.）告訴讀者一個數值有多精密。你的答案不可能比最初的數據更精密。",

    // Before any mole calculation: three questions > data-def attribute
    "The digits in a number that carry real information about its precision. Leading zeros do not count.": "一個數之中，真正反映其精密度的數字。開頭的 0 不算。",

    // Before any mole calculation: three questions > table > caption
    "Counting significant figures": "數有效數字",

    // Before any mole calculation: three questions > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Value": "數值",

    // Before any mole calculation: three questions > table > th
    "Why": "原因",

    // Before any mole calculation: three questions > table > td
    "Zeros after the decimal point at the end count.": "小數點後、位於末尾的 0 要算。",

    // Before any mole calculation: three questions > table > td
    "Zeros at the front only place the decimal point. They do not count.": "開頭的 0 只用來定出小數點的位置，不算。",

    // Before any mole calculation: three questions > table > td
    "A volumetric flask is precise, so its volume is often given to 4 s.f.": "容量瓶很精密，所以它的體積通常給至 4 位有效數字。",

    // Before any mole calculation: three questions > table > td
    "In scientific notation, count the digits in front of the “× 10”.": "用科學記數法時，數「× 10」前面的數字。",

    // Before any mole calculation: three questions > li
    "Keep the full value in your calculator through every step. Rounding in the middle can change the last digit of the answer.": "每一步都把完整的數值留在計算機裏。中途取近似值，可能會改變答案的最後一個數字。",

    // Before any mole calculation: three questions > li
    "Round once, at the end. Look at the data in the question, find the value with the fewest significant figures, and give your answer to that many. In most questions that is 3.": "只在最後取一次有效數字。看看題目的數據，找出有效數字最少的那個數值，答案就取至同樣的位數。大部分題目是 3 位。",

    // Before any mole calculation: three questions > li
    "Counted and defined numbers do not limit you: the 2 in <span class=\"chem\">H2O</span>, the coefficients in an equation, the 1000 in a unit conversion.": "數出來的數和定義出來的數不會限制有效數字：<span class=\"chem\">H2O</span> 中的 2、方程式中的系數、單位換算中的 1000。",

    // Before any mole calculation: three questions > li
    "Write the unit after every final answer.": "每個最終答案後面都要寫單位。",

    // Before any mole calculation: three questions > exam tip (shown in English + translation) > p
    "IB markschemes give their answers to the precision of the data: usually 3 s.f., and 4 s.f. when the data are given to 4. Match the data and you are safe. A mark is not normally taken off for significant figures unless the question asks for a set number, so do not panic about them. Show your working too. If you slip in one step, the later steps can still earn marks when the method is correct.": "IB 評分準則的答案，精密度與數據一致：通常是 3 位有效數字；數據給至 4 位時，就是 4 位。跟數據一致就穩妥。除非題目指定要多少位有效數字，否則一般不會因有效數字而扣分，所以不用為此驚慌。也要寫出計算步驟。即使其中一步出錯，只要方法正確，之後的步驟仍然可以得分。",

    // The mole and the Avogadro constant > data-toc attribute
    "The mole": "摩爾",

    // The mole and the Avogadro constant > h2
    "The mole and the Avogadro constant": "摩爾和亞佛加德羅常數",

    // The mole and the Avogadro constant > p
    "Eggs are sold by the dozen, and paper by the ream of 500 sheets. When things are small and you need a lot of them, you count in groups. Atoms are so small that the group has to be enormous.": "雞蛋論「打」賣，紙張以 500 張為一「令」。東西很小、數量又多時，就一組一組地數。原子實在太小，所以這個「組」必須極大。",

    // The mole and the Avogadro constant > p
    "The <dfn data-def=\"The SI unit of amount of substance. One mole contains exactly the number of elementary entities given by the Avogadro constant.\">mole</dfn> (symbol <span class=\"unit\">mol</span>) is the SI unit of <dfn data-def=\"The quantity that counts particles in groups of the Avogadro constant. Symbol n, unit mol.\">amount of substance</dfn>, symbol <i>n</i>. One mole contains exactly the number of elementary entities given by the <dfn data-def=\"The number of elementary entities in one mole. Symbol NA. In the data booklet as 6.02 × 10^23 mol^-1.\">Avogadro constant</dfn>, <i>N</i><sub>A</sub>.": "<dfn data-def=\"物質的量的 SI 單位。1 摩爾所含的基本粒子單元數目，剛好等於亞佛加德羅常數所給的數目。\">摩爾 <span class=\"en-term\">(mole)</span></dfn>（符號 <span class=\"unit\">mol</span>）是<dfn data-def=\"以亞佛加德羅常數為一組來數算粒子的量。符號 n，單位 mol。\">物質的量 <span class=\"en-term\">(amount of substance)</span></dfn>的 SI 單位，物質的量的符號是 <i>n</i>。物質的量即香港課本所說的「摩爾數」。1 摩爾所含的基本粒子單元數目，剛好等於<dfn data-def=\"1 摩爾所含的基本粒子單元數目。符號 NA。數據手冊給的數值是 6.02 × 10^23 mol^-1。\">亞佛加德羅常數 <span class=\"en-term\">(Avogadro constant)</span></dfn> <i>N</i><sub>A</sub> 所給的數目。",

    // The mole and the Avogadro constant > data-def attribute
    "The SI unit of amount of substance. One mole contains exactly the number of elementary entities given by the Avogadro constant.": "物質的量的 SI 單位。1 摩爾所含的基本粒子單元數目，剛好等於亞佛加德羅常數所給的數目。",

    // The mole and the Avogadro constant > data-def attribute
    "The quantity that counts particles in groups of the Avogadro constant. Symbol n, unit mol.": "以亞佛加德羅常數為一組來數算粒子的量。符號 n，單位 mol。",

    // The mole and the Avogadro constant > data-def attribute
    "The number of elementary entities in one mole. Symbol NA. In the data booklet as 6.02 × 10^23 mol^-1.": "1 摩爾所含的基本粒子單元數目。符號 NA。數據手冊給的數值是 6.02 × 10^23 mol^-1。",

    // The mole and the Avogadro constant > p
    "An <dfn data-def=\"The particle being counted: an atom, a molecule, an ion, an electron, any other particle, or a specified group of particles such as a formula unit.\">elementary entity</dfn> is whatever particle you are counting. It may be an atom, a molecule, an ion, an electron, or a specified group of particles such as one <dfn data-def=\"The group of ions shown by the formula of an ionic compound, for example one Na+ and one Cl- for NaCl.\">formula unit</dfn> of <span class=\"chem\">NaCl</span>. So always say <em>what</em> you have a mole of.": "<dfn data-def=\"被數算的粒子：原子、分子、離子、電子、任何其他粒子，或指明的一組粒子（例如一個式單位）。\">基本粒子單元 <span class=\"en-term\">(elementary entity)</span></dfn>就是你正在數算的那種粒子。它可以是原子、分子、離子、電子，也可以是指明的一組粒子，例如 <span class=\"chem\">NaCl</span> 的一個<dfn data-def=\"離子化合物的化學式所表示的一組離子，例如 NaCl 是一個 Na+ 和一個 Cl-。\">式單位 <span class=\"en-term\">(formula unit)</span></dfn>。所以一定要說清楚你有一摩爾的<em>甚麼</em>。",

    // The mole and the Avogadro constant > data-def attribute
    "The particle being counted: an atom, a molecule, an ion, an electron, any other particle, or a specified group of particles such as a formula unit.": "被數算的粒子：原子、分子、離子、電子、任何其他粒子，或指明的一組粒子（例如一個式單位）。",

    // The mole and the Avogadro constant > data-def attribute
    "The group of ions shown by the formula of an ionic compound, for example one Na+ and one Cl- for NaCl.": "離子化合物的化學式所表示的一組離子，例如 NaCl 是一個 Na+ 和一個 Cl-。",

    // The mole and the Avogadro constant > data booklet note > p
    "<i>N</i><sub>A</sub> = <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span>. The unit mol<sup>−1</sup> means “per mole”. You do not need to memorize the value, but you must know when to use it.": "<i>N</i><sub>A</sub> = <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span>。單位 mol<sup>−1</sup> 的意思是「每摩爾」。這個數值不用背，但你必須知道甚麼時候用它。",

    // The mole and the Avogadro constant > equation > dd
    "number of particles (no unit)": "粒子數目（沒有單位）",

    // The mole and the Avogadro constant > equation > dd
    // Molar mass: weighing instead of counting > equation > dd
    "amount of substance <span class=\"unit\">mol</span>": "物質的量 <span class=\"unit\">mol</span>",

    // The mole and the Avogadro constant > equation > dt
    "N<sub>A</sub>": "N<sub>A</sub>",

    // The mole and the Avogadro constant > equation > dd
    "Avogadro constant <span class=\"unit\">mol-1</span>": "亞佛加德羅常數 <span class=\"unit\">mol-1</span>",

    // The mole and the Avogadro constant > p
    "This relationship is not printed in the data booklet, so learn it. It follows from the definition. Moles to particles: multiply by <i>N</i><sub>A</sub>. Particles to moles: divide by <i>N</i><sub>A</sub>. A number of particles is always huge and an amount in moles is usually small, so check that your answer went the right way.": "數據手冊沒有印出這個關係，所以要記住。它直接來自定義。摩爾變粒子數目：乘以 <i>N</i><sub>A</sub>。粒子數目變摩爾：除以 <i>N</i><sub>A</sub>。粒子數目總是極大，以摩爾表示的物質的量通常很小，所以要檢查答案的方向有沒有弄反。",

    // The mole and the Avogadro constant > widget > data-title attribute
    "How big is a mole?": "一摩爾有多大？",

    // The mole and the Avogadro constant > widget > figcaption
    "The line is a powers-of-ten scale, so one mole is not “a bit more” than the other markers: it is a million times more than the number of seconds since the Big Bang. Choose a substance and a mass to see how many particles an ordinary sample holds.": "這條線是 10 的次方標度，所以一摩爾並不是比其他標記「多一點」：它是宇宙大爆炸至今的秒數的一百萬倍。選一種物質和一個質量，看看一個普通的樣本有多少粒子。",

    // The mole and the Avogadro constant > h3
    "Atoms inside molecules, ions inside formulas": "分子裏的原子，化學式裏的離子",

    // The mole and the Avogadro constant > p
    "A formula is a recipe for one particle, and also for one mole of them. One molecule of <span class=\"chem\">NH3</span> contains 1 nitrogen atom and 3 hydrogen atoms. So one mole of <span class=\"chem\">NH3</span> molecules contains 1 mol of N atoms and 3 mol of H atoms.": "化學式是一個粒子的「配方」，也是一摩爾粒子的配方。一個 <span class=\"chem\">NH3</span> 分子有 1 個氮原子和 3 個氫原子。所以一摩爾 <span class=\"chem\">NH3</span> 分子有 1 mol N 原子和 3 mol H 原子。",

    // The mole and the Avogadro constant > p
    "The same works for ionic compounds. One formula unit of <span class=\"chem\">MgCl2</span> contains one <span class=\"chem\">Mg^2+</span> ion and two <span class=\"chem\">Cl-</span> ions. So 1 mol of <span class=\"chem\">MgCl2</span> contains 1 mol of <span class=\"chem\">Mg^2+</span> ions, 2 mol of <span class=\"chem\">Cl-</span> ions, and 3 mol of ions in total.": "離子化合物也一樣。<span class=\"chem\">MgCl2</span> 的一個式單位有一個 <span class=\"chem\">Mg^2+</span> 離子和兩個 <span class=\"chem\">Cl-</span> 離子。所以 1 mol <span class=\"chem\">MgCl2</span> 有 1 mol <span class=\"chem\">Mg^2+</span> 離子、2 mol <span class=\"chem\">Cl-</span> 離子，離子總共是 3 mol。",

    // The mole and the Avogadro constant > h3
    // Relative atomic mass and relative formula mass > h3
    // Molar mass: weighing instead of counting > h3
    // Concentration of solutions > h3
    // Avogadro’s law and reacting gas volumes > h3
    "Method in words": "文字說明方法",

    // The mole and the Avogadro constant > li
    "Name the particle the question asks about: molecules, atoms of one element, all atoms, or ions.": "先說出題目問的是哪種粒子：分子、某一種元素的原子、所有原子，還是離子。",

    // The mole and the Avogadro constant > li
    "If it asks about atoms or ions inside a formula, multiply the amount of the compound by the subscript first.": "如果問的是化學式裏的原子或離子，先把化合物的物質的量乘以下標。",

    // The mole and the Avogadro constant > li
    "Multiply moles by <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span> to get the number, or divide a number by it to get moles.": "把摩爾乘以 <span class=\"mono\">6.02 × 10<sup>23</sup> mol<sup>−1</sup></span> 得出數目；或者把數目除以它，得出摩爾。",

    // The mole and the Avogadro constant > li
    "Give the answer in scientific notation, to the significant figures of the data.": "答案用科學記數法表示，有效數字跟數據一致。",

    // The mole and the Avogadro constant > worked example > h3
    "Moles to number of molecules": "由摩爾求分子數目",

    // The mole and the Avogadro constant > worked example > p
    "Calculate the number of molecules in 0.350 mol of carbon dioxide, <span class=\"chem\">CO2</span>.": "計算 (calculate) 0.350 mol 二氧化碳 <span class=\"chem\">CO2</span> 的分子數目。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Ask the three questions": "先問三個問題",

    // The mole and the Avogadro constant > worked example > p
    "Given: an amount, 0.350 mol. Wanted: a number of molecules. Link: the Avogadro constant.": "已知：物質的量，0.350 mol。要求：分子數目。連繫：亞佛加德羅常數。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Substitute with units": "連同單位代入",

    // The mole and the Avogadro constant > worked example > p
    "mol × mol<sup>−1</sup> cancels, leaving a pure number. That is what a count should be.": "mol × mol<sup>−1</sup> 互相抵消，剩下一個純數。數目本來就應該是這樣。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    // Molar mass: weighing instead of counting > worked example > data-title attribute
    // Concentration of solutions > worked example > data-title attribute
    "Round to the data": "按數據取有效數字",

    // The mole and the Avogadro constant > worked example > p
    "0.350 and 6.02 both have 3 significant figures, so the answer has 3.": "0.350 和 6.02 都有 3 位有效數字，所以答案也是 3 位。",

    // The mole and the Avogadro constant > worked example > maths line
    "<i>N</i> = <b>2.11 × 10<sup>23</sup> molecules</b>": "<i>N</i> = <b>2.11 × 10<sup>23</sup> 個分子</b>",

    // The mole and the Avogadro constant > worked example > p
    "2.11 × 10<sup>23</sup> molecules of CO<sub>2</sub>": "2.11 × 10<sup>23</sup> 個 CO<sub>2</sub> 分子",

    // The mole and the Avogadro constant > worked example > h3
    "Atoms inside a molecule": "分子裏的原子",

    // The mole and the Avogadro constant > worked example > p
    "Calculate the number of hydrogen atoms in 0.125 mol of ammonia, <span class=\"chem\">NH3</span>.": "計算 0.125 mol 氨 <span class=\"chem\">NH3</span> 的氫原子數目。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Spot what is being counted": "看清楚數的是甚麼",

    // The mole and the Avogadro constant > worked example > p
    "The question asks for hydrogen atoms, not ammonia molecules. Each molecule holds 3 of them.": "題目問的是氫原子，不是氨分子。每個分子有 3 個氫原子。",

    // The mole and the Avogadro constant > worked example > maths line
    "1 mol NH<sub>3</sub> contains 3 mol H atoms": "1 mol NH<sub>3</sub> 含 3 mol H 原子",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Find the amount of hydrogen atoms": "求氫原子的物質的量",

    // The mole and the Avogadro constant > worked example > p
    "Use the subscript from the formula as a multiplier while you are still in moles.": "趁還在用摩爾時，把化學式的下標當作乘數。",

    // The mole and the Avogadro constant > worked example > data-title attribute
    "Convert moles to a number": "把摩爾換算成數目",

    // The mole and the Avogadro constant > worked example > p
    "Now it is the same step as before: multiply by the Avogadro constant.": "現在和之前是同一步：乘以亞佛加德羅常數。",

    // The mole and the Avogadro constant > worked example > p
    "The data have 3 significant figures. The 3 from the formula is an exact count and does not limit the answer.": "數據有 3 位有效數字。化學式裏的 3 是準確的數目，不會限制答案的有效數字。",

    // The mole and the Avogadro constant > worked example > maths line
    "<i>N</i>(H) = <b>2.26 × 10<sup>23</sup> atoms</b>": "<i>N</i>(H) = <b>2.26 × 10<sup>23</sup> 個原子</b>",

    // The mole and the Avogadro constant > worked example > p
    "2.26 × 10<sup>23</sup> hydrogen atoms": "2.26 × 10<sup>23</sup> 個氫原子",

    // The mole and the Avogadro constant > common mistake > p
    "“One mole of oxygen” is unclear. One mole of <span class=\"chem\">O2</span> molecules contains two moles of O atoms. Hydrogen, nitrogen, oxygen, fluorine, chlorine, bromine and iodine exist as two-atom molecules, so check whether the question means atoms or molecules.": "「一摩爾氧」說得不清楚。一摩爾 <span class=\"chem\">O2</span> 分子含兩摩爾 O 原子。氫、氮、氧、氟、氯、溴和碘都以雙原子分子存在，所以要看清楚題目指的是原子還是分子。",

    // The mole and the Avogadro constant > try it > p
    "A piece of copper wire contains 1.50 × 10<sup>22</sup> copper atoms. Calculate the amount of copper, in mol.": "一段銅線含 1.50 × 10<sup>22</sup> 個銅原子。計算銅的物質的量，以 mol 表示。",

    // The mole and the Avogadro constant > try it > li
    "You have a number of particles and you want moles. Will the answer be bigger or smaller than 1?": "你有粒子數目，要求摩爾。答案會大於 1 還是小於 1？",

    // The mole and the Avogadro constant > try it > li
    "Divide by the Avogadro constant: <span class=\"mono\">1.50 × 10<sup>22</sup> ÷ 6.02 × 10<sup>23</sup></span>.": "除以亞佛加德羅常數：<span class=\"mono\">1.50 × 10<sup>22</sup> ÷ 6.02 × 10<sup>23</sup></span>。",

    // The mole and the Avogadro constant > try it > p
    "To 3 significant figures: <strong>0.0249 mol</strong>. There are fewer atoms than one mole, so the amount is less than 1.": "取至 3 位有效數字：<strong>0.0249 mol</strong>。原子數目少於一摩爾，所以物質的量小於 1。",

    // The mole and the Avogadro constant > try it > data-label attribute
    "Number of ions": "離子數目",

    // The mole and the Avogadro constant > try it > p
    "Calculate the total number of ions in 0.200 mol of calcium chloride, <span class=\"chem\">CaCl2</span>.": "計算 0.200 mol 氯化鈣 <span class=\"chem\">CaCl2</span> 的離子總數。",

    // The mole and the Avogadro constant > try it > li
    "How many ions are in one formula unit of <span class=\"chem\">CaCl2</span>? Count the <span class=\"chem\">Ca^2+</span> and the <span class=\"chem\">Cl-</span> ions.": "<span class=\"chem\">CaCl2</span> 的一個式單位有多少個離子？數一數 <span class=\"chem\">Ca^2+</span> 和 <span class=\"chem\">Cl-</span> 離子。",

    // The mole and the Avogadro constant > try it > li
    "There are 3 ions per formula unit, so <i>n</i>(ions) = 3 × 0.200 mol. Then multiply by <span class=\"mono\">6.02 × 10<sup>23</sup></span>.": "每個式單位有 3 個離子，所以 <i>n</i>(離子) = 3 × 0.200 mol。然後乘以 <span class=\"mono\">6.02 × 10<sup>23</sup></span>。",

    // The mole and the Avogadro constant > try it > maths line
    "<i>n</i>(ions) = 3 × 0.200 mol = 0.600 mol": "<i>n</i>(離子) = 3 × 0.200 mol = 0.600 mol",

    // The mole and the Avogadro constant > try it > p
    "To 3 significant figures: <strong>3.61 × 10<sup>23</sup> ions</strong>.": "取至 3 位有效數字：<strong>3.61 × 10<sup>23</sup> 個離子</strong>。",

    // The mole and the Avogadro constant > not needed for IB > p
    "You may see an older definition: “the amount that contains as many particles as 12 g of carbon-12”. The IB guide does not use it. It defines the mole by a fixed number of particles. That number is exactly 6.02214076 × 10<sup>23</sup>, but you only ever use the data booklet value, 6.02 × 10<sup>23</sup>. You do not need the history of the change.": "你可能見過較舊的定義：「所含粒子數目與 12 g 碳-12 相同的量」。IB 指南不用這個定義，而是用一個固定的粒子數目來定義摩爾。這個數目準確地是 6.02214076 × 10<sup>23</sup>，但你只會用數據手冊的數值 6.02 × 10<sup>23</sup>。定義怎樣改變的歷史不用知道。",

    // The mole and the Avogadro constant > data-title attribute
    "The mole: quick check": "摩爾：快速小測",

    // Relative atomic mass and relative formula mass > data-toc attribute
    "Relative masses": "相對質量",

    // Relative atomic mass and relative formula mass > h2
    "Relative atomic mass and relative formula mass": "相對原子質量和相對式量",

    // Relative atomic mass and relative formula mass > p
    "One atom has a mass of around 10<sup>−23</sup> g. Numbers like that are awkward, so chemists compare atoms with each other instead. The standard is the carbon-12 atom, <span class=\"chem\">^12C</span>, which is given a mass of exactly 12 units.": "一個原子的質量大約是 10<sup>−23</sup> g。這樣的數字很不方便，所以化學家改為把原子互相比較。標準是碳-12 原子 <span class=\"chem\">^12C</span>，它的質量定為剛好 12 個單位。",

    // Relative atomic mass and relative formula mass > p
    "The <dfn data-def=\"The weighted average mass of the atoms of an element, taking isotopic abundance into account, relative to one-twelfth of the mass of an atom of carbon-12. It has no units.\">relative atomic mass</dfn>, <i>A</i><sub>r</sub>, of an element is the weighted average mass of its atoms compared with one-twelfth of the mass of a carbon-12 atom. It is an average because most elements are a mixture of isotopes (see topic 1.2). That is why chlorine has <i>A</i><sub>r</sub> = 35.45, although no single chlorine atom has that mass.": "元素的<dfn data-def=\"一種元素的原子的加權平均質量（已考慮同位素豐度），相對於一個碳-12 原子質量的十二分之一。它沒有單位。\">相對原子質量 <span class=\"en-term\">(relative atomic mass)</span></dfn> <i>A</i><sub>r</sub>，是該元素原子的加權平均質量與一個碳-12 原子質量的十二分之一相比的值。它是平均值，因為大部分元素都是幾種同位素的混合物（見課題 1.2）。所以氯的 <i>A</i><sub>r</sub> = 35.45，雖然沒有任何一個氯原子的質量是這個數。",

    // Relative atomic mass and relative formula mass > data-def attribute
    "The weighted average mass of the atoms of an element, taking isotopic abundance into account, relative to one-twelfth of the mass of an atom of carbon-12. It has no units.": "一種元素的原子的加權平均質量（已考慮同位素豐度），相對於一個碳-12 原子質量的十二分之一。它沒有單位。",

    // Relative atomic mass and relative formula mass > p
    "The <dfn data-def=\"The sum of the relative atomic masses of all the atoms in a formula. It has no units.\">relative formula mass</dfn>, <i>M</i><sub>r</sub>, is the sum of the <i>A</i><sub>r</sub> values of every atom in the formula. For a substance made of molecules it is also called the relative molecular mass.": "<dfn data-def=\"化學式中所有原子的相對原子質量的總和。它沒有單位。\">相對式量 <span class=\"en-term\">(relative formula mass)</span></dfn> <i>M</i><sub>r</sub> 是化學式中每個原子的 <i>A</i><sub>r</sub> 的總和。由分子構成的物質，它也稱為相對分子質量 (relative molecular mass)。",

    // Relative atomic mass and relative formula mass > data-def attribute
    "The sum of the relative atomic masses of all the atoms in a formula. It has no units.": "化學式中所有原子的相對原子質量的總和。它沒有單位。",

    // Relative atomic mass and relative formula mass > key idea > p
    "<i>A</i><sub>r</sub> and <i>M</i><sub>r</sub> are ratios: one mass divided by another mass. The units cancel, so they have <strong>no units</strong>.": "<i>A</i><sub>r</sub> 和 <i>M</i><sub>r</sub> 都是比：一個質量除以另一個質量。單位互相抵消，所以它們<strong>沒有單位</strong>。",

    // Relative atomic mass and relative formula mass > data booklet note > p
    "The periodic table in the data booklet gives <i>A</i><sub>r</sub> to two decimal places: H 1.01, C 12.01, N 14.01, O 16.00, Na 22.99, Cl 35.45. Use these values in calculations, not rounded whole numbers.": "數據手冊的週期表把 <i>A</i><sub>r</sub> 給至小數點後兩位：H 1.01、C 12.01、N 14.01、O 16.00、Na 22.99、Cl 35.45。計算時用這些數值，不要用取整後的整數。",

    // Relative atomic mass and relative formula mass > li
    "List each element in the formula.": "列出化學式中的每種元素。",

    // Relative atomic mass and relative formula mass > li
    "Count its atoms. A subscript outside a bracket multiplies everything inside the bracket.": "數它的原子。括號外的下標，要乘括號內的所有原子。",

    // Relative atomic mass and relative formula mass > li
    "Multiply each count by the element’s <i>A</i><sub>r</sub> (2 d.p.).": "把每個原子數目乘以該元素的 <i>A</i><sub>r</sub>（小數點後 2 位）。",

    // Relative atomic mass and relative formula mass > li
    "Add the subtotals. Give <i>M</i><sub>r</sub> to 2 decimal places, with no unit.": "把各個小計加起來。<i>M</i><sub>r</sub> 給至小數點後 2 位，不寫單位。",

    // Relative atomic mass and relative formula mass > widget > data-title attribute
    "Molar mass builder": "摩爾質量建構工具",

    // Relative atomic mass and relative formula mass > widget > figcaption
    "Type a formula or build one with the buttons. The table counts every atom, including those inside brackets and in water of crystallization. It uses the <i>A</i><sub>r</sub> values from the data booklet.": "輸入化學式，或用按鈕砌出化學式。表格會數出每一個原子，包括括號內的原子和結晶水裏的原子。所用的 <i>A</i><sub>r</sub> 來自數據手冊。",

    // Relative atomic mass and relative formula mass > worked example > h3
    "Relative formula mass with brackets": "有括號的相對式量",

    // Relative atomic mass and relative formula mass > worked example > p
    "Determine the relative formula mass of calcium nitrate, <span class=\"chem\">Ca(NO3)2</span>.": "求出 (determine) 硝酸鈣 <span class=\"chem\">Ca(NO3)2</span> 的相對式量。",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Count the atoms": "數原子",

    // Relative atomic mass and relative formula mass > worked example > p
    "The 2 outside the bracket doubles everything inside it: 2 × N and 2 × 3 = 6 O.": "括號外的 2 把括號內的所有原子加倍：2 × N，以及 2 × 3 = 6 個 O。",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Multiply by each relative atomic mass": "乘以各自的相對原子質量",

    // Relative atomic mass and relative formula mass > worked example > p
    "Use the two-decimal-place values from the data booklet.": "用數據手冊中小數點後兩位的數值。",

    // Relative atomic mass and relative formula mass > worked example > data-title attribute
    "Add the subtotals": "把小計加起來",

    // Relative atomic mass and relative formula mass > worked example > p
    "When you add, keep the decimal places of the data: two.": "相加時，保留數據的小數位：兩位。",

    // Relative atomic mass and relative formula mass > worked example > p
    "<i>M</i><sub>r</sub> = 164.10 (no units)": "<i>M</i><sub>r</sub> = 164.10（沒有單位）",

    // Relative atomic mass and relative formula mass > p
    "A <dfn data-def=\"A salt whose crystals contain a fixed number of water molecules per formula unit, called water of crystallization.\">hydrated salt</dfn> has water molecules built into its crystals. The dot in <span class=\"chem\">CuSO4.5H2O</span> means “with”, so add five whole waters: <span class=\"mono\">63.55 + 32.07 + 4(16.00) + 5(18.02) = 249.72</span>.": "<dfn data-def=\"晶體中每個式單位帶有固定數目水分子的鹽。這些水稱為結晶水。\">水合鹽 <span class=\"en-term\">(hydrated salt)</span></dfn>的晶體裏結合了水分子。<span class=\"chem\">CuSO4.5H2O</span> 中的點表示「連同」，所以要加上五個完整的水分子：<span class=\"mono\">63.55 + 32.07 + 4(16.00) + 5(18.02) = 249.72</span>。",

    // Relative atomic mass and relative formula mass > data-def attribute
    "A salt whose crystals contain a fixed number of water molecules per formula unit, called water of crystallization.": "晶體中每個式單位帶有固定數目水分子的鹽。這些水稱為結晶水。",

    // Relative atomic mass and relative formula mass > common mistake > p
    "In <span class=\"chem\">Ca(NO3)2</span> it is easy to count only 3 oxygen atoms and get 116.10. The subscript after a bracket multiplies every atom inside it. Count atoms first, then use the calculator.": "在 <span class=\"chem\">Ca(NO3)2</span> 中，很容易只數到 3 個氧原子，得出 116.10。括號後的下標要乘括號內的每一個原子。先數原子，再按計算機。",

    // Relative atomic mass and relative formula mass > try it > data-label attribute
    "Mr": "Mr",

    // Relative atomic mass and relative formula mass > try it > p
    "Determine the relative formula mass of aluminium sulfate, <span class=\"chem\">Al2(SO4)3</span>. Give your answer to 2 decimal places. (<i>A</i><sub>r</sub>: Al 26.98, S 32.07, O 16.00)": "求出硫酸鋁 <span class=\"chem\">Al2(SO4)3</span> 的相對式量。答案取至小數點後 2 位。（<i>A</i><sub>r</sub>：Al 26.98、S 32.07、O 16.00）",

    // Relative atomic mass and relative formula mass > try it > li
    "Count the atoms first. How many S atoms and how many O atoms are in three sulfate groups?": "先數原子。三個硫酸根裏有多少個 S 原子、多少個 O 原子？",

    // Relative atomic mass and relative formula mass > try it > li
    "There are 2 Al, 3 S and 12 O: <span class=\"mono\">2(26.98) + 3(32.07) + 12(16.00)</span>.": "有 2 個 Al、3 個 S 和 12 個 O：<span class=\"mono\">2(26.98) + 3(32.07) + 12(16.00)</span>。",

    // Relative atomic mass and relative formula mass > try it > p
    "<strong>342.17</strong>, with no unit, because it is a relative mass.": "<strong>342.17</strong>，沒有單位，因為它是相對質量。",

    // Relative atomic mass and relative formula mass > not needed for IB > p
    "You do not need the unified atomic mass unit (u or Da) or the mass of one atom in kilograms for this topic. Calculating <i>A</i><sub>r</sub> from isotope abundances belongs to topic 1.2.": "這個課題不需要用統一原子質量單位（u 或 Da），也不需要用以千克表示的一個原子的質量。由同位素豐度計算 <i>A</i><sub>r</sub> 屬於課題 1.2。",

    // Relative atomic mass and relative formula mass > data-title attribute
    "Relative masses: quick check": "相對質量：快速小測",

    // Molar mass: weighing instead of counting > data-toc attribute
    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Molar mass": "摩爾質量",

    // Molar mass: weighing instead of counting > h2
    "Molar mass: weighing instead of counting": "摩爾質量：以稱量代替數算",

    // Molar mass: weighing instead of counting > p
    "A bank does not count coins one by one. It weighs the bag, because it knows the mass of one coin. Chemists do the same with atoms. If you know the mass of one mole of a substance, a balance tells you how many particles you have.": "銀行不會把硬幣逐個數。它知道一個硬幣的質量，所以只要稱一稱整袋硬幣。化學家對原子也是這樣做。只要知道一摩爾某物質的質量，用天平就可以知道你有多少粒子。",

    // Molar mass: weighing instead of counting > p
    "The <dfn data-def=\"The mass of one mole of a substance. Symbol M, units g mol^-1. It has the same number as the relative formula mass.\">molar mass</dfn>, <i>M</i>, is the mass of one mole of a substance. Its units are <span class=\"unit\">g mol-1</span>. The mole is chosen so that the molar mass has the same number as <i>M</i><sub>r</sub>: water has <i>M</i><sub>r</sub> = 18.02, so <i>M</i> = 18.02 g mol<sup>−1</sup>.": "<dfn data-def=\"一摩爾某物質的質量。符號 M，單位 g mol^-1。它的數值與相對式量相同。\">摩爾質量 <span class=\"en-term\">(molar mass)</span></dfn> <i>M</i> 是一摩爾某物質的質量。它的單位是 <span class=\"unit\">g mol-1</span>。摩爾的大小經過特別選定，使摩爾質量的數值與 <i>M</i><sub>r</sub> 相同：水的 <i>M</i><sub>r</sub> = 18.02，所以 <i>M</i> = 18.02 g mol<sup>−1</sup>。",

    // Molar mass: weighing instead of counting > data-def attribute
    "The mass of one mole of a substance. Symbol M, units g mol^-1. It has the same number as the relative formula mass.": "一摩爾某物質的質量。符號 M，單位 g mol^-1。它的數值與相對式量相同。",

    // Molar mass: weighing instead of counting > table > caption
    "Same number, different meaning": "數值相同，意思不同",

    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Quantity": "物理量",

    // Molar mass: weighing instead of counting > table > th
    "Symbol": "符號",

    // Molar mass: weighing instead of counting > table > th
    "For water": "以水為例",

    // Molar mass: weighing instead of counting > table > th
    "Units": "單位",

    // Molar mass: weighing instead of counting > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Relative formula mass": "相對式量",

    // Molar mass: weighing instead of counting > table > td
    "<i>M</i><sub>r</sub>": "<i>M</i><sub>r</sub>",

    // Molar mass: weighing instead of counting > table > td
    "none": "沒有",

    // Molar mass: weighing instead of counting > table > td
    "<span class=\"unit\">g mol-1</span>": "<span class=\"unit\">g mol-1</span>",

    // Molar mass: weighing instead of counting > table > th
    "Mass of your sample": "你的樣本的質量",

    // Molar mass: weighing instead of counting > table > td
    "whatever you weighed": "你稱到多少就是多少",

    // Molar mass: weighing instead of counting > equation > dd
    "mass of the sample <span class=\"unit\">g</span>": "樣本的質量 <span class=\"unit\">g</span>",

    // Molar mass: weighing instead of counting > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "摩爾質量 <span class=\"unit\">g mol-1</span>",

    // Molar mass: weighing instead of counting > data booklet note > p
    "<i>n</i> = <i>m</i> / <i>M</i> is printed in the data booklet. Rearranged: <span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> and <span class=\"mono\"><i>M</i> = <i>m</i> ÷ <i>n</i></span>.": "數據手冊印有 <i>n</i> = <i>m</i> / <i>M</i>。重排後：<span class=\"mono\"><i>m</i> = <i>n</i> × <i>M</i></span> 和 <span class=\"mono\"><i>M</i> = <i>m</i> ÷ <i>n</i></span>。",

    // Molar mass: weighing instead of counting > p
    "Let the units check your rearrangement. Grams divided by grams-per-mole gives moles: <span class=\"mono\">g ÷ g mol<sup>−1</sup> = mol</span>. If your units come out as something else, the formula is upside down.": "用單位檢查公式有沒有重排錯。克除以「克每摩爾」得出摩爾：<span class=\"mono\">g ÷ g mol<sup>−1</sup> = mol</span>。如果得出的單位不是這樣，公式就是上下顛倒了。",

    // Molar mass: weighing instead of counting > h3
    // Molar mass: weighing instead of counting > widget > data-title attribute
    "The mole map": "摩爾地圖",

    // Molar mass: weighing instead of counting > p
    "Mass, particles, solutions and gases never convert directly into each other. Each one converts to moles, and moles convert to each of the others. That is the whole topic in one picture.": "質量、粒子、溶液和氣體之間從來不能直接換算。每一個都先換算成摩爾，摩爾再換算成其餘各個。整個課題就是這一幅圖。",

    // Molar mass: weighing instead of counting > widget > figcaption
    "Choose what you are given and what you want, then type a value and a formula. The route lights up and the working appears line by line with units. Solutions are covered in section 1.4.5. The gas-volume link uses the molar volume at STP from the data booklet, which belongs to topic 1.5.": "選擇已知的量和要求的量，然後輸入數值和化學式。路線會亮起來，計算步驟連同單位逐行出現。溶液在 1.4.5 小節講解。氣體體積的連繫用數據手冊中 STP 下的摩爾體積，屬於課題 1.5。",

    // Molar mass: weighing instead of counting > li
    "Ask the three questions. Find “given” and “wanted” on the mole map.": "先問三個問題。在摩爾地圖上找出「已知」和「要求」。",

    // Molar mass: weighing instead of counting > li
    "If mass is involved, work out the molar mass <i>M</i> from the formula.": "如果涉及質量，由化學式求出摩爾質量 <i>M</i>。",

    // Molar mass: weighing instead of counting > li
    "Step 1: convert what you are given into moles.": "第 1 步：把已知的量換算成摩爾。",

    // Molar mass: weighing instead of counting > li
    "Step 2: convert moles into what you want. If the question asks about atoms or ions inside the formula, multiply by the subscript while you are in moles.": "第 2 步：把摩爾換算成要求的量。如果題目問的是化學式裏的原子或離子，趁還在用摩爾時乘以下標。",

    // Molar mass: weighing instead of counting > li
    "Round once at the end and add the unit.": "最後才取一次有效數字，並加上單位。",

    // Molar mass: weighing instead of counting > worked example > h3
    "Mass to moles": "由質量求摩爾",

    // Molar mass: weighing instead of counting > worked example > p
    "Calculate the amount, in mol, of calcium carbonate in a 12.5 g piece of marble. Assume the marble is pure <span class=\"chem\">CaCO3</span>.": "計算一塊 12.5 g 大理石中碳酸鈣的物質的量，以 mol 表示。假設大理石是純 <span class=\"chem\">CaCO3</span>。",

    // Molar mass: weighing instead of counting > worked example > p
    "Given: a mass in g. Wanted: an amount in mol. Link: molar mass.": "已知：以 g 表示的質量。要求：以 mol 表示的物質的量。連繫：摩爾質量。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Find the molar mass": "求摩爾質量",

    // Molar mass: weighing instead of counting > worked example > p
    "You need <i>M</i> before you can use the relationship. One Ca, one C, three O.": "要先有 <i>M</i>，才可以用這個關係。一個 Ca、一個 C、三個 O。",

    // Molar mass: weighing instead of counting > worked example > p
    "Keep the extra digits in your calculator for now.": "暫時把多出來的數字留在計算機裏。",

    // Molar mass: weighing instead of counting > worked example > p
    "The mass has 3 significant figures.": "質量有 3 位有效數字。",

    // Molar mass: weighing instead of counting > worked example > p
    "0.125 mol of CaCO<sub>3</sub>": "0.125 mol CaCO<sub>3</sub>",

    // Molar mass: weighing instead of counting > worked example > h3
    "Mass to number of atoms (two links)": "由質量求原子數目（兩個連繫）",

    // Molar mass: weighing instead of counting > worked example > p
    "Calculate the number of oxygen atoms in 4.90 g of sulfuric acid, <span class=\"chem\">H2SO4</span>.": "計算 4.90 g 硫酸 <span class=\"chem\">H2SO4</span> 的氧原子數目。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Plan the route on the mole map": "在摩爾地圖上計劃路線",

    // Molar mass: weighing instead of counting > worked example > p
    "Mass and particles do not connect directly. Go mass → moles of H<sub>2</sub>SO<sub>4</sub> → moles of O atoms → number of O atoms.": "質量和粒子不能直接連起來。路線是：質量 → H<sub>2</sub>SO<sub>4</sub> 的摩爾 → O 原子的摩爾 → O 原子的數目。",

    // Molar mass: weighing instead of counting > worked example > maths line
    "g &nbsp;→&nbsp; mol H<sub>2</sub>SO<sub>4</sub> &nbsp;→&nbsp; mol O &nbsp;→&nbsp; number of O atoms": "g &nbsp;→&nbsp; mol H<sub>2</sub>SO<sub>4</sub> &nbsp;→&nbsp; mol O &nbsp;→&nbsp; O 原子的數目",

    // Molar mass: weighing instead of counting > worked example > p
    "Mass is involved, so <i>M</i> is needed.": "涉及質量，所以需要 <i>M</i>。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Convert mass to moles": "把質量換算成摩爾",

    // Molar mass: weighing instead of counting > worked example > p
    "This is the first link: <i>n</i> = <i>m</i> ÷ <i>M</i>.": "這是第一個連繫：<i>n</i> = <i>m</i> ÷ <i>M</i>。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Use the subscript": "使用下標",

    // Molar mass: weighing instead of counting > worked example > p
    "Each H<sub>2</sub>SO<sub>4</sub> contains 4 oxygen atoms.": "每個 H<sub>2</sub>SO<sub>4</sub> 有 4 個氧原子。",

    // Molar mass: weighing instead of counting > worked example > data-title attribute
    "Convert moles to a number and round": "把摩爾換算成數目，再取有效數字",

    // Molar mass: weighing instead of counting > worked example > p
    "Second link: multiply by <i>N</i><sub>A</sub>. Round to the 3 significant figures of the data.": "第二個連繫：乘以 <i>N</i><sub>A</sub>。按數據取至 3 位有效數字。",

    // Molar mass: weighing instead of counting > worked example > maths line
    "<i>N</i>(O) = <b>1.20 × 10<sup>23</sup> atoms</b>": "<i>N</i>(O) = <b>1.20 × 10<sup>23</sup> 個原子</b>",

    // Molar mass: weighing instead of counting > worked example > p
    "1.20 × 10<sup>23</sup> oxygen atoms": "1.20 × 10<sup>23</sup> 個氧原子",

    // Molar mass: weighing instead of counting > common mistake > p
    "Multiplying when you should divide is the classic slip. Estimate first: 4.90 g is much less than one mole of H<sub>2</sub>SO<sub>4</sub> (98.09 g), so the amount must be much less than 1 mol. An answer of 481 mol cannot be right.": "應該除卻乘了，是最典型的錯誤。先估算：4.90 g 遠少於一摩爾 H<sub>2</sub>SO<sub>4</sub>（98.09 g），所以物質的量一定遠小於 1 mol。答案是 481 mol 就不可能對。",

    // Molar mass: weighing instead of counting > try it > p
    "Calculate the mass of 0.0450 mol of sodium hydroxide, <span class=\"chem\">NaOH</span>. (<i>A</i><sub>r</sub>: Na 22.99, O 16.00, H 1.01)": "計算 0.0450 mol 氫氧化鈉 <span class=\"chem\">NaOH</span> 的質量。（<i>A</i><sub>r</sub>：Na 22.99、O 16.00、H 1.01）",

    // Molar mass: weighing instead of counting > try it > li
    "You have moles and want grams. Rearrange <i>n</i> = <i>m</i> / <i>M</i> to make <i>m</i> the subject.": "你有摩爾，要求克。重排 <i>n</i> = <i>m</i> / <i>M</i>，使 <i>m</i> 成為主項。",

    // Molar mass: weighing instead of counting > try it > li
    "<i>M</i>(NaOH) = 22.99 + 16.00 + 1.01 = 40.00 g mol<sup>−1</sup>. Then <i>m</i> = <i>n</i> × <i>M</i>.": "<i>M</i>(NaOH) = 22.99 + 16.00 + 1.01 = 40.00 g mol<sup>−1</sup>。然後 <i>m</i> = <i>n</i> × <i>M</i>。",

    // Molar mass: weighing instead of counting > try it > p
    "<strong>1.80 g</strong> (3 significant figures).": "<strong>1.80 g</strong>（3 位有效數字）。",

    // Molar mass: weighing instead of counting > try it > p
    "A sample of carbon dioxide contains 3.01 × 10<sup>22</sup> molecules. Calculate its mass. (<i>A</i><sub>r</sub>: C 12.01, O 16.00)": "一個二氧化碳樣本含 3.01 × 10<sup>22</sup> 個分子。計算它的質量。（<i>A</i><sub>r</sub>：C 12.01、O 16.00）",

    // Molar mass: weighing instead of counting > try it > li
    "Particles and mass do not connect directly. Which quantity do you go through?": "粒子和質量不能直接連起來。中間要經過哪一個量？",

    // Molar mass: weighing instead of counting > try it > li
    "First <i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub>. Then <i>m</i> = <i>n</i> × <i>M</i>, with <i>M</i>(CO<sub>2</sub>) = 44.01 g mol<sup>−1</sup>.": "先用 <i>n</i> = <i>N</i> ÷ <i>N</i><sub>A</sub>。再用 <i>m</i> = <i>n</i> × <i>M</i>，其中 <i>M</i>(CO<sub>2</sub>) = 44.01 g mol<sup>−1</sup>。",

    // Molar mass: weighing instead of counting > try it > p
    "To 3 significant figures: <strong>2.20 g</strong>.": "取至 3 位有效數字：<strong>2.20 g</strong>。",

    // Molar mass: weighing instead of counting > not needed for IB > data-title attribute
    // Concentration of solutions > not needed for IB > data-title attribute
    // Avogadro’s law and reacting gas volumes > not needed for IB > data-title attribute
    "Comes later": "之後才學",

    // Molar mass: weighing instead of counting > not needed for IB > p
    "Using molar masses with a balanced equation to find the mass of a product, and limiting reactant, percentage yield and atom economy, are all in Reactivity 2.1. They use exactly the mass ⇄ moles steps you are learning here, with one extra step in the middle.": "用摩爾質量配合平衡方程式求生成物的質量，以及限量反應物、百分產率和原子經濟，全部屬於 Reactivity 2.1。它們用的正是你現在學的「質量 ⇄ 摩爾」步驟，只是中間多了一步。",

    // Molar mass: weighing instead of counting > data-title attribute
    "Molar mass: quick check": "摩爾質量：快速小測",

    // Empirical and molecular formulas > data-toc attribute
    // Empirical and molecular formulas > h2
    "Empirical and molecular formulas": "實驗式和分子式",

    // Empirical and molecular formulas > p
    "A recipe that says “2 parts flour to 1 part butter” gives you the ratio, but not how big the batch is. Chemical formulas come in the same two kinds.": "食譜寫「2 份麵粉配 1 份牛油」，只告訴你比例，沒有說這一批要做多少。化學式同樣有這兩種。",

    // Empirical and molecular formulas > p
    "The <dfn data-def=\"The simplest whole-number ratio of atoms of each element present in a compound.\">empirical formula</dfn> of a compound gives the simplest ratio of atoms of each element present in it. The <dfn data-def=\"The actual number of atoms of each element present in one molecule.\">molecular formula</dfn> gives the actual number of atoms of each element present in a molecule.": "化合物的<dfn data-def=\"化合物中各元素原子的最簡整數比。\">實驗式 <span class=\"en-term\">(empirical formula)</span></dfn>給出化合物中各元素原子的最簡比。<dfn data-def=\"一個分子中各元素原子的實際數目。\">分子式 <span class=\"en-term\">(molecular formula)</span></dfn>給出一個分子中各元素原子的實際數目。",

    // Empirical and molecular formulas > data-def attribute
    "The simplest whole-number ratio of atoms of each element present in a compound.": "化合物中各元素原子的最簡整數比。",

    // Empirical and molecular formulas > data-def attribute
    "The actual number of atoms of each element present in one molecule.": "一個分子中各元素原子的實際數目。",

    // Empirical and molecular formulas > table > caption
    "Empirical and molecular formulas compared": "實驗式和分子式的比較",

    // Empirical and molecular formulas > table > th
    "Compound": "化合物",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Molecular formula": "分子式",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "Empirical formula": "實驗式",

    // Empirical and molecular formulas > table > th
    "Molecular ÷ empirical": "分子式 ÷ 實驗式",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "glucose": "葡萄糖",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">CH2O</span>": "<span class=\"chem\">CH2O</span>",

    // Empirical and molecular formulas > table > th
    "ethene": "乙烯",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">CH2</span>": "<span class=\"chem\">CH2</span>",

    // Empirical and molecular formulas > table > th
    "hydrogen peroxide": "過氧化氫",

    // Empirical and molecular formulas > table > td
    "<span class=\"chem\">HO</span>": "<span class=\"chem\">HO</span>",

    // Empirical and molecular formulas > table > th
    // widget string (assets/js/widgets-s1-4.js)
    "water": "水",

    // Empirical and molecular formulas > p
    "The molecular formula is always a whole-number multiple of the empirical formula. Sometimes the multiple is 1 and the two are the same. Ionic compounds such as <span class=\"chem\">NaCl</span> have no molecules, so their formula is already an empirical formula.": "分子式一定是實驗式的整數倍。有時倍數是 1，兩者就相同。<span class=\"chem\">NaCl</span> 等離子化合物沒有分子，所以它們的化學式本身已經是實驗式。",

    // Empirical and molecular formulas > h3
    "From a formula to percentage composition": "由化學式求質量百分組成",

    // Empirical and molecular formulas > p
    "<dfn data-def=\"The percentage of the total mass of a compound that is due to each element.\">Percentage composition by mass</dfn> says what share of a compound’s mass comes from each element.": "<dfn data-def=\"化合物的總質量中，每種元素所佔的百分率。\">質量百分組成 <span class=\"en-term\">(percentage composition by mass)</span></dfn>說明化合物的質量中，每種元素各佔多少。",

    // Empirical and molecular formulas > data-def attribute
    "The percentage of the total mass of a compound that is due to each element.": "化合物的總質量中，每種元素所佔的百分率。",

    // Empirical and molecular formulas > equation > maths line
    "% of element = <span class=\"frac\"><span>atoms of element × <i>A</i><sub>r</sub></span><span><i>M</i><sub>r</sub></span></span> × 100": "元素的 % = <span class=\"frac\"><span>該元素的原子數目 × <i>A</i><sub>r</sub></span><span><i>M</i><sub>r</sub></span></span> × 100",

    // Empirical and molecular formulas > equation > dt
    "A<sub>r</sub>": "A<sub>r</sub>",

    // Empirical and molecular formulas > equation > dd
    "relative atomic mass of the element (no units)": "該元素的相對原子質量（沒有單位）",

    // Empirical and molecular formulas > equation > dt
    "M<sub>r</sub>": "M<sub>r</sub>",

    // Empirical and molecular formulas > equation > dd
    "relative formula mass of the compound (no units)": "化合物的相對式量（沒有單位）",

    // Empirical and molecular formulas > p
    "For iron(III) oxide, <span class=\"chem\">Fe2O3</span>: <i>M</i><sub>r</sub> = <span class=\"mono\">2(55.85) + 3(16.00) = 159.70</span>. So the percentage of iron is <span class=\"mono\">111.70 ÷ 159.70 × 100 = 69.94 %</span>, and oxygen is the rest, <span class=\"mono\">30.06 %</span>. The percentages must add up to 100.": "以氧化鐵(III) <span class=\"chem\">Fe2O3</span> 為例：<i>M</i><sub>r</sub> = <span class=\"mono\">2(55.85) + 3(16.00) = 159.70</span>。所以鐵的百分率是 <span class=\"mono\">111.70 ÷ 159.70 × 100 = 69.94 %</span>，其餘是氧，<span class=\"mono\">30.06 %</span>。各百分率加起來必須是 100。",

    // Empirical and molecular formulas > try it > p
    "Urea, <span class=\"chem\">CO(NH2)2</span>, is used as a fertilizer because of its nitrogen content. Calculate the percentage by mass of nitrogen in urea. (<i>A</i><sub>r</sub>: C 12.01, O 16.00, N 14.01, H 1.01)": "尿素 <span class=\"chem\">CO(NH2)2</span> 含氮，所以用作肥料。計算尿素中氮的質量百分率。（<i>A</i><sub>r</sub>：C 12.01、O 16.00、N 14.01、H 1.01）",

    // Empirical and molecular formulas > try it > li
    "How many nitrogen atoms are in the formula? The 2 outside the bracket matters.": "化學式裏有多少個氮原子？括號外的 2 很重要。",

    // Empirical and molecular formulas > try it > li
    "<i>M</i><sub>r</sub> = 12.01 + 16.00 + 2(14.01) + 4(1.01) = 60.07. Then % N = <span class=\"mono\">2(14.01) ÷ 60.07 × 100</span>.": "<i>M</i><sub>r</sub> = 12.01 + 16.00 + 2(14.01) + 4(1.01) = 60.07。然後 % N = <span class=\"mono\">2(14.01) ÷ 60.07 × 100</span>。",

    // Empirical and molecular formulas > try it > p
    "To 3 significant figures: <strong>46.6 %</strong>.": "取至 3 位有效數字：<strong>46.6 %</strong>。",

    // Empirical and molecular formulas > h3
    "From composition to an empirical formula: the table method": "由組成求實驗式：列表法",

    // Empirical and molecular formulas > p
    "Going the other way is the more common exam question. A formula is a ratio of <em>atoms</em>, which means a ratio of <em>moles</em>. But the data are masses. So the job is: convert each mass to moles, then simplify the ratio.": "反過來做，才是考試較常見的題目。化學式是<em>原子</em>的比，也就是<em>摩爾</em>的比。但數據卻是質量。所以要做的是：把每個質量換算成摩爾，再化簡這個比。",

    // Empirical and molecular formulas > li
    "Make a column for each element. Write its mass in g. If you are given percentages, imagine a 100 g sample, so 40 % becomes 40 g.": "每種元素開一欄。寫下它的質量，以 g 表示。如果題目給的是百分率，就想像有一個 100 g 的樣本，40 % 就變成 40 g。",

    // Empirical and molecular formulas > li
    "Divide each mass by that element’s <i>A</i><sub>r</sub>. This gives the amount of each element in mol.": "把每個質量除以該元素的 <i>A</i><sub>r</sub>。這樣得出每種元素的物質的量，以 mol 表示。",

    // Empirical and molecular formulas > li
    "Divide every amount by the smallest one. The smallest becomes 1.": "把每個物質的量除以最小的那個。最小的就變成 1。",

    // Empirical and molecular formulas > li
    "If every number is now within about 0.1 of a whole number, round. If one ends in about .5, multiply them all by 2. If one ends in about .33 or .67, multiply by 3. If one ends in .25 or .75, multiply by 4.": "如果現在每個數都與整數相差約 0.1 以內，就取整數。如果有一個數的小數部分約是 .5，全部乘以 2。如果約是 .33 或 .67，全部乘以 3。如果是 .25 或 .75，全部乘以 4。",

    // Empirical and molecular formulas > li
    "Write the formula with the whole numbers as subscripts.": "用這些整數作下標，寫出化學式。",

    // Empirical and molecular formulas > worked example > h3
    "Empirical formula from percentage composition": "由質量百分組成求實驗式",

    // Empirical and molecular formulas > worked example > p
    "A compound contains 48.64 % carbon, 8.16 % hydrogen and 43.20 % oxygen by mass. Determine its empirical formula.": "一種化合物按質量計含 48.64 % 碳、8.16 % 氫和 43.20 % 氧。求出 (determine) 它的實驗式。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Turn percentages into masses": "把百分率變成質量",

    // Empirical and molecular formulas > worked example > p
    "In a 100 g sample, each percentage is the mass in grams. Any sample size gives the same ratio, and 100 g is the easiest.": "在 100 g 的樣本中，每個百分率就是以克表示的質量。樣本多大，比都一樣，而 100 g 最容易計算。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Convert each mass to moles": "把每個質量換算成摩爾",

    // Empirical and molecular formulas > worked example > p
    "A formula counts atoms, so you need amounts, not masses. Use <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub>.": "化學式數的是原子，所以需要的是物質的量，不是質量。用 <i>n</i> = <i>m</i> ÷ <i>A</i><sub>r</sub>。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the smallest": "除以最小的數",

    // Empirical and molecular formulas > worked example > p
    "This sets the smallest amount to 1 and shows the ratio clearly. The smallest is 2.700.": "這樣把最小的物質的量變成 1，比就一目了然。最小的是 2.700。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Clear the fraction": "消去分數",

    // Empirical and molecular formulas > worked example > p
    "1.50 is not close to a whole number, so it must not be rounded. Multiplying everything by 2 turns it into 3.": "1.50 並不接近整數，所以不可以取整。全部乘以 2，它就變成 3。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Write the formula": "寫出化學式",

    // Empirical and molecular formulas > worked example > p
    "5.98 is within experimental error of 6, so the ratio is 3 : 6 : 2.": "5.98 與 6 的差別在實驗誤差之內，所以比是 3 : 6 : 2。",

    // Empirical and molecular formulas > worked example > maths line
    "empirical formula = <b>C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></b>": "實驗式 = <b>C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></b>",

    // Empirical and molecular formulas > widget > data-title attribute
    "Empirical formula solver": "實驗式求解器",

    // Empirical and molecular formulas > widget > figcaption
    "Enter your own percentages or masses and watch each column of the table method fill in. Switch to “Combustion analysis” for CO<sub>2</sub> and H<sub>2</sub>O data. Add a molar mass to get the molecular formula too.": "輸入你自己的百分率或質量，看着列表法的每一欄逐步填上。切換到「燃燒分析」，可以用 CO<sub>2</sub> 和 H<sub>2</sub>O 的數據。加入摩爾質量，還可以得出分子式。",

    // Empirical and molecular formulas > common mistake > p
    "Three slips cause most wrong formulas. Using the percentages directly as the ratio, without dividing by <i>A</i><sub>r</sub>. Dividing by atomic number instead of <i>A</i><sub>r</sub>. Rounding 1.5 up to 2, or 1.33 down to 1, instead of multiplying by 2 or 3.": "大部分錯的化學式都來自三種錯誤。第一，沒有除以 <i>A</i><sub>r</sub>，直接把百分率當作比。第二，除以原子序，而不是 <i>A</i><sub>r</sub>。第三，把 1.5 進位成 2，或把 1.33 捨去成 1，而不是乘以 2 或 3。",

    // Empirical and molecular formulas > try it > p
    "An oxide of phosphorus contains 43.64 % phosphorus and 56.36 % oxygen by mass. Its empirical formula can be written <span class=\"chem\">P2Ox</span>. Find the whole number <i>x</i>. (<i>A</i><sub>r</sub>: P 30.97, O 16.00)": "磷的一種氧化物按質量計含 43.64 % 磷和 56.36 % 氧。它的實驗式可以寫成 <span class=\"chem\">P2Ox</span>。求整數 <i>x</i>。（<i>A</i><sub>r</sub>：P 30.97、O 16.00）",

    // Empirical and molecular formulas > try it > li
    "Use the table method: divide each percentage by <i>A</i><sub>r</sub>, then divide both by the smaller answer.": "用列表法：把每個百分率除以 <i>A</i><sub>r</sub>，再把兩個結果都除以較小的那個。",

    // Empirical and molecular formulas > try it > li
    "You should get P : O = 1 : 2.50. What do you multiply by to make both numbers whole?": "你應該得出 P : O = 1 : 2.50。要乘以多少，兩個數才都變成整數？",

    // Empirical and molecular formulas > try it > p
    "The empirical formula is P<sub>2</sub>O<sub>5</sub>, so <strong><i>x</i> = 5</strong>.": "實驗式是 P<sub>2</sub>O<sub>5</sub>，所以 <strong><i>x</i> = 5</strong>。",

    // Empirical and molecular formulas > data-title attribute
    "Composition and empirical formulas: quick check": "組成和實驗式：快速小測",

    // Empirical and molecular formulas > h3
    "Empirical formula from combustion data": "由燃燒數據求實驗式",

    // Empirical and molecular formulas > p
    "Many compounds contain only carbon, hydrogen and oxygen. To analyse one, a weighed sample is burned completely in excess oxygen. The carbon dioxide and the water that form are collected and weighed.": "很多化合物只含碳、氫和氧。要分析這類化合物，可以把已稱量的樣本在過量氧氣中完全燃燒，然後收集生成的二氧化碳和水，並稱量。",

    // Empirical and molecular formulas > key idea > p
    "Every carbon atom in the sample ends up in a <span class=\"chem\">CO2</span> molecule. Every hydrogen atom ends up in an <span class=\"chem\">H2O</span> molecule. The oxygen in the products comes partly from the air, so the oxygen in the sample is found by subtraction.": "樣本中的每個碳原子，最後都在一個 <span class=\"chem\">CO2</span> 分子裏。每個氫原子，最後都在一個 <span class=\"chem\">H2O</span> 分子裏。生成物中的氧有一部分來自空氣，所以樣本中的氧要用減法求出。",

    // Empirical and molecular formulas > li
    "Mass of C in the sample = mass of <span class=\"chem\">CO2</span> × <span class=\"mono\">12.01 ÷ 44.01</span>.": "樣本中 C 的質量 = <span class=\"chem\">CO2</span> 的質量 × <span class=\"mono\">12.01 ÷ 44.01</span>。",

    // Empirical and molecular formulas > li
    "Mass of H in the sample = mass of <span class=\"chem\">H2O</span> × <span class=\"mono\">2(1.01) ÷ 18.02</span>. The 2 is there because each water molecule holds two hydrogen atoms.": "樣本中 H 的質量 = <span class=\"chem\">H2O</span> 的質量 × <span class=\"mono\">2(1.01) ÷ 18.02</span>。有 2，是因為每個水分子有兩個氫原子。",

    // Empirical and molecular formulas > li
    "Mass of O in the sample = mass of sample − mass of C − mass of H.": "樣本中 O 的質量 = 樣本的質量 − C 的質量 − H 的質量。",

    // Empirical and molecular formulas > li
    "Now use the table method on the three masses.": "現在對這三個質量使用列表法。",

    // Empirical and molecular formulas > p
    "You can also work in moles: <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) and <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>). You still need the masses of C and H to find the oxygen by difference.": "也可以用摩爾來計算：<i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)，而 <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)。但仍然需要 C 和 H 的質量，才能用減法求出氧。",

    // Empirical and molecular formulas > worked example > h3
    "Empirical formula from combustion analysis": "由燃燒分析求實驗式",

    // Empirical and molecular formulas > worked example > p
    "A compound contains only carbon, hydrogen and oxygen. Complete combustion of 0.660 g of it produces 1.319 g of <span class=\"chem\">CO2</span> and 0.540 g of <span class=\"chem\">H2O</span>. Determine the empirical formula.": "一種化合物只含碳、氫和氧。0.660 g 這種化合物完全燃燒，生成 1.319 g <span class=\"chem\">CO2</span> 和 0.540 g <span class=\"chem\">H2O</span>。求出它的實驗式。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of carbon": "求碳的質量",

    // Empirical and molecular formulas > worked example > p
    "All the carbon is now in the CO<sub>2</sub>. Carbon makes up 12.01 out of every 44.01 g of CO<sub>2</sub>.": "所有碳現在都在 CO<sub>2</sub> 裏。每 44.01 g CO<sub>2</sub> 中，碳佔 12.01 g。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of hydrogen": "求氫的質量",

    // Empirical and molecular formulas > worked example > p
    "All the hydrogen is now in the H<sub>2</sub>O. Hydrogen makes up 2.02 out of every 18.02 g of water.": "所有氫現在都在 H<sub>2</sub>O 裏。每 18.02 g 水中，氫佔 2.02 g。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of oxygen by difference": "用減法求氧的質量",

    // Empirical and molecular formulas > worked example > p
    "Whatever is not carbon or hydrogen must be oxygen. Use unrounded values from your calculator.": "不是碳、也不是氫的部分，一定是氧。用計算機裏未取近似值的數值。",

    // Empirical and molecular formulas > worked example > p
    "From here it is the ordinary table method.": "由這裏開始，就是普通的列表法。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the smallest and write the formula": "除以最小的數，寫出化學式",

    // Empirical and molecular formulas > worked example > p
    "The smallest is 0.01497. The ratios are whole numbers within experimental error.": "最小的是 0.01497。各個比在實驗誤差之內都是整數。",

    // Empirical and molecular formulas > worked example > maths line
    "empirical formula = <b>C<sub>2</sub>H<sub>4</sub>O</b>": "實驗式 = <b>C<sub>2</sub>H<sub>4</sub>O</b>",

    // Empirical and molecular formulas > exam tip (shown in English + translation) > p
    "A typical 3-mark combustion question gives one mark for the masses or amounts of C and H, one for oxygen by difference, and one for the formula. Lay your working out in that order so each mark is easy to find.": "典型的 3 分燃燒題：C 和 H 的質量或物質的量佔一分，用減法求出氧佔一分，化學式佔一分。按這個次序寫出計算步驟，每一分都容易找到。",

    // Empirical and molecular formulas > try it > p
    "A compound contains only C, H and O. Burning 1.150 g of it completely gives 2.197 g of <span class=\"chem\">CO2</span> and 1.349 g of <span class=\"chem\">H2O</span>. Calculate the mass of oxygen in the 1.150 g sample, to 3 significant figures.": "一種化合物只含 C、H 和 O。1.150 g 這種化合物完全燃燒，生成 2.197 g <span class=\"chem\">CO2</span> 和 1.349 g <span class=\"chem\">H2O</span>。計算這 1.150 g 樣本中氧的質量，取至 3 位有效數字。",

    // Empirical and molecular formulas > try it > li
    "Find the mass of carbon from the CO<sub>2</sub> and the mass of hydrogen from the H<sub>2</sub>O. Then subtract both from 1.150 g.": "由 CO<sub>2</sub> 求碳的質量，由 H<sub>2</sub>O 求氫的質量。然後從 1.150 g 減去這兩個質量。",

    // Empirical and molecular formulas > try it > li
    "<i>m</i>(C) = 2.197 × 12.01 ÷ 44.01 and <i>m</i>(H) = 1.349 × 2.02 ÷ 18.02. Do not round them before you subtract.": "<i>m</i>(C) = 2.197 × 12.01 ÷ 44.01，<i>m</i>(H) = 1.349 × 2.02 ÷ 18.02。相減之前不要取近似值。",

    // Empirical and molecular formulas > try it > p
    "<strong>0.399 g</strong> of oxygen. Carrying on: the amounts are C 0.04992 mol, H 0.1497 mol and O 0.02495 mol, a ratio of 2 : 6 : 1, so the empirical formula is C<sub>2</sub>H<sub>6</sub>O.": "氧的質量是 <strong>0.399 g</strong>。繼續做下去：物質的量是 C 0.04992 mol、H 0.1497 mol 和 O 0.02495 mol，比是 2 : 6 : 1，所以實驗式是 C<sub>2</sub>H<sub>6</sub>O。",

    // Empirical and molecular formulas > h3
    "From empirical formula to molecular formula": "由實驗式求分子式",

    // Empirical and molecular formulas > p
    "The empirical formula gives the ratio. To find the real molecule you need one more fact: the molar mass. It usually comes from another experiment, often a gas measurement (topic 1.5).": "實驗式給出比。要找出真正的分子，還需要一項資料：摩爾質量。它通常來自另一個實驗，很多時是量度氣體（課題 1.5）。",

    // Empirical and molecular formulas > li
    "Work out the mass of the empirical formula, from <i>A</i><sub>r</sub> values.": "用 <i>A</i><sub>r</sub> 求出實驗式質量。",

    // Empirical and molecular formulas > li
    "Divide the molar mass by the empirical formula mass. The answer should be a whole number.": "把摩爾質量除以實驗式質量。答案應該是整數。",

    // Empirical and molecular formulas > li
    "Multiply every subscript in the empirical formula by that whole number.": "把實驗式中的每個下標乘以這個整數。",

    // Empirical and molecular formulas > worked example > h3
    "Molecular formula from molar mass": "由摩爾質量求分子式",

    // Empirical and molecular formulas > worked example > p
    "The compound in the last worked example has the empirical formula <span class=\"chem\">C2H4O</span>. Its molar mass is 88.12 g mol<sup>−1</sup>. Determine its molecular formula.": "上一道例題的化合物，實驗式是 <span class=\"chem\">C2H4O</span>。它的摩爾質量是 88.12 g mol<sup>−1</sup>。求出它的分子式。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the empirical formula mass": "求實驗式質量",

    // Empirical and molecular formulas > worked example > p
    "You need to know how heavy one “unit” of the ratio is.": "你要知道這個比的一個「單位」有多重。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide the molar mass by it": "把摩爾質量除以它",

    // Empirical and molecular formulas > worked example > p
    "This tells you how many empirical units fit into one molecule.": "這樣就知道一個分子裏有多少個實驗式單位。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Multiply the subscripts": "把下標乘大",

    // Empirical and molecular formulas > worked example > p
    "Two units per molecule, so double every subscript.": "每個分子有兩個單位，所以每個下標都加倍。",

    // Empirical and molecular formulas > try it > data-label attribute
    "Carbon atoms": "碳原子數目",

    // Empirical and molecular formulas > try it > p
    "A sugar has the empirical formula <span class=\"chem\">CH2O</span> and a molar mass of 180.18 g mol<sup>−1</sup>. How many carbon atoms are in one molecule of the sugar? (<i>A</i><sub>r</sub>: C 12.01, H 1.01, O 16.00)": "一種糖的實驗式是 <span class=\"chem\">CH2O</span>，摩爾質量是 180.18 g mol<sup>−1</sup>。這種糖的一個分子有多少個碳原子？（<i>A</i><sub>r</sub>：C 12.01、H 1.01、O 16.00）",

    // Empirical and molecular formulas > try it > li
    "Find the mass of one CH<sub>2</sub>O unit first.": "先求一個 CH<sub>2</sub>O 單位的式量。",

    // Empirical and molecular formulas > try it > li
    "The empirical formula mass is 30.03. Divide 180.18 by it to see how many units make one molecule.": "實驗式質量是 30.03。把 180.18 除以它，看看多少個單位組成一個分子。",

    // Empirical and molecular formulas > try it > maths line
    "empirical formula mass = 12.01 + 2(1.01) + 16.00 = 30.03": "實驗式質量 = 12.01 + 2(1.01) + 16.00 = 30.03",

    // Empirical and molecular formulas > try it > p
    "The molecular formula is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, so there are <strong>6</strong> carbon atoms.": "分子式是 C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>，所以有 <strong>6</strong> 個碳原子。",

    // Empirical and molecular formulas > common mistake > p
    "Read which formula the question wants. If it asks for the empirical formula of <span class=\"chem\">C4H8O2</span>, simplify to <span class=\"chem\">C2H4O</span>. If it asks for the molecular formula, do not simplify.": "看清楚題目要的是哪一種式。如果問 <span class=\"chem\">C4H8O2</span> 的實驗式，就化簡成 <span class=\"chem\">C2H4O</span>。如果問分子式，就不要化簡。",

    // Empirical and molecular formulas > h3
    "Water of crystallization from heating a hydrate": "加熱水合物求結晶水",

    // Empirical and molecular formulas > p
    "The same table method finds the <i>x</i> in a hydrated salt such as <span class=\"chem\">CuSO4.xH2O</span>. A weighed sample is heated so the water is driven off as steam. What is left is the <dfn data-def=\"Without water. An anhydrous salt has lost its water of crystallization.\">anhydrous</dfn> salt. The mass lost is the mass of water.": "同樣的列表法可以求出水合鹽（例如 <span class=\"chem\">CuSO4.xH2O</span>）中的 <i>x</i>。把已稱量的樣本加熱，水就變成水蒸氣走掉。剩下的是<dfn data-def=\"不含水。無水鹽已失去結晶水。\">無水 <span class=\"en-term\">(anhydrous)</span></dfn>鹽。失去的質量就是水的質量。",

    // Empirical and molecular formulas > data-def attribute
    "Without water. An anhydrous salt has lost its water of crystallization.": "不含水。無水鹽已失去結晶水。",

    // Empirical and molecular formulas > p
    "Here the two “elements” in the table are the anhydrous salt and the water. Divide each mass by its own molar mass, then divide by the amount of salt.": "這裏表中的兩種「元素」是無水鹽和水。把每個質量除以各自的摩爾質量，再除以鹽的物質的量。",

    // Empirical and molecular formulas > worked example > h3
    "Finding x in a hydrate": "求水合物中的 x",

    // Empirical and molecular formulas > worked example > p
    "4.99 g of hydrated copper(II) sulfate, <span class=\"chem\">CuSO4.xH2O</span>, is heated to constant mass. 3.19 g of anhydrous <span class=\"chem\">CuSO4</span> remains. Determine <i>x</i>.": "把 4.99 g 水合硫酸銅(II) <span class=\"chem\">CuSO4.xH2O</span> 加熱至質量不變，剩下 3.19 g 無水 <span class=\"chem\">CuSO4</span>。求出 <i>x</i>。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Find the mass of water lost": "求失去的水的質量",

    // Empirical and molecular formulas > worked example > p
    "The only thing that left the crucible was water.": "離開坩堝的只有水。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Convert both masses to moles": "把兩個質量都換算成摩爾",

    // Empirical and molecular formulas > worked example > p
    "The formula is a mole ratio of salt to water. <i>M</i>(CuSO<sub>4</sub>) = 63.55 + 32.07 + 4(16.00) = 159.62 g mol<sup>−1</sup>.": "這個化學式是鹽與水的摩爾比。<i>M</i>(CuSO<sub>4</sub>) = 63.55 + 32.07 + 4(16.00) = 159.62 g mol<sup>−1</sup>。",

    // Empirical and molecular formulas > worked example > data-title attribute
    "Divide by the amount of salt": "除以鹽的物質的量",

    // Empirical and molecular formulas > worked example > p
    "You want the number of waters for each one CuSO<sub>4</sub>.": "你要求的是每一個 CuSO<sub>4</sub> 配多少個水分子。",

    // Empirical and molecular formulas > worked example > p
    "<i>x</i> must be a whole number, because it counts molecules.": "<i>x</i> 必須是整數，因為它數的是分子。",

    // Empirical and molecular formulas > worked example > maths line
    "<i>x</i> = <b>5</b>, so the formula is CuSO<sub>4</sub>·5H<sub>2</sub>O": "<i>x</i> = <b>5</b>，所以化學式是 CuSO<sub>4</sub>·5H<sub>2</sub>O",

    // Empirical and molecular formulas > exam tip (shown in English + translation) > p
    "“Heat to constant mass” means heat, cool, weigh, and repeat until two weighings agree. It shows that all the water has gone. If some water stays behind, the mass lost is too small and the calculated <i>x</i> is too low.": "「加熱至質量不變」的意思是：加熱、冷卻、稱量，然後重複，直至兩次稱量的結果一致。這表示所有水都已走掉。如果還有水留下，失去的質量就偏小，計算出來的 <i>x</i> 就偏低。",

    // Empirical and molecular formulas > try it > p
    "6.16 g of hydrated magnesium sulfate, <span class=\"chem\">MgSO4.xH2O</span>, is heated to constant mass. 3.01 g of anhydrous <span class=\"chem\">MgSO4</span> remains. Determine the whole number <i>x</i>. (<i>M</i>: <span class=\"chem\">MgSO4</span> 120.38 g mol<sup>−1</sup>, <span class=\"chem\">H2O</span> 18.02 g mol<sup>−1</sup>)": "把 6.16 g 水合硫酸鎂 <span class=\"chem\">MgSO4.xH2O</span> 加熱至質量不變，剩下 3.01 g 無水 <span class=\"chem\">MgSO4</span>。求出整數 <i>x</i>。（<i>M</i>：<span class=\"chem\">MgSO4</span> 120.38 g mol<sup>−1</sup>、<span class=\"chem\">H2O</span> 18.02 g mol<sup>−1</sup>）",

    // Empirical and molecular formulas > try it > li
    "The mass of water is the mass lost on heating: 6.16 g − 3.01 g.": "水的質量就是加熱時失去的質量：6.16 g − 3.01 g。",

    // Empirical and molecular formulas > try it > li
    "Convert 3.01 g of MgSO<sub>4</sub> and 3.15 g of H<sub>2</sub>O to moles. Then divide the moles of water by the moles of salt.": "把 3.01 g MgSO<sub>4</sub> 和 3.15 g H<sub>2</sub>O 換算成摩爾。然後把水的摩爾除以鹽的摩爾。",

    // Empirical and molecular formulas > try it > p
    "Rounded to a whole number, <strong><i>x</i> = 7</strong>: MgSO<sub>4</sub>·7H<sub>2</sub>O.": "取至整數，<strong><i>x</i> = 7</strong>：MgSO<sub>4</sub>·7H<sub>2</sub>O。",

    // Empirical and molecular formulas > not needed for IB > p
    "Combustion problems in this topic use compounds of carbon, hydrogen and oxygen, with oxygen found by difference. You do not need to know how an elemental analyser works.": "這個課題的燃燒題，用的是碳、氫、氧的化合物，氧用減法求出。你不需要知道元素分析儀怎樣運作。",

    // Empirical and molecular formulas > data-title attribute
    "Combustion, molecular formulas and hydrates: quick check": "燃燒、分子式和水合物：快速小測",

    // Concentration of solutions > data-toc attribute
    "Concentration": "濃度",

    // Concentration of solutions > h2
    "Concentration of solutions": "溶液的濃度",

    // Concentration of solutions > p
    "Two glasses of squash can hold the same amount of syrup but taste different, because one has more water in it. What matters is how much is dissolved <em>per unit volume</em>. That is concentration.": "兩杯沖調果汁所用的濃縮糖漿可以一樣多，味道卻不同，因為其中一杯的水較多。重要的是<em>每單位體積</em>溶解了多少。這就是濃度。",

    // Concentration of solutions > p
    "A <dfn data-def=\"The substance that dissolves.\">solute</dfn> dissolves in a <dfn data-def=\"The liquid that does the dissolving, usually water.\">solvent</dfn> to make a <dfn data-def=\"A homogeneous mixture of a solute dissolved in a solvent.\">solution</dfn>. The <dfn data-def=\"The amount of solute, in mol, per cubic decimetre of solution. Units mol dm^-3. Shown by square brackets.\">molar concentration</dfn> is the amount of solute divided by the volume of the solution. Its units are <span class=\"unit\">mol dm-3</span>.": "<dfn data-def=\"被溶解的物質。\">溶質 <span class=\"en-term\">(solute)</span></dfn>溶解在<dfn data-def=\"用來溶解溶質的液體，通常是水。\">溶劑 <span class=\"en-term\">(solvent)</span></dfn>中，形成<dfn data-def=\"溶質溶解在溶劑中形成的均勻混合物。\">溶液 <span class=\"en-term\">(solution)</span></dfn>。<dfn data-def=\"每立方分米溶液所含溶質的物質的量（以 mol 表示）。單位 mol dm^-3。用方括號表示。\">摩爾濃度 <span class=\"en-term\">(molar concentration)</span></dfn>是溶質的物質的量除以溶液的體積。它的單位是 <span class=\"unit\">mol dm-3</span>。",

    // Concentration of solutions > data-def attribute
    "The substance that dissolves.": "被溶解的物質。",

    // Concentration of solutions > data-def attribute
    "The liquid that does the dissolving, usually water.": "用來溶解溶質的液體，通常是水。",

    // Concentration of solutions > data-def attribute
    "A homogeneous mixture of a solute dissolved in a solvent.": "溶質溶解在溶劑中形成的均勻混合物。",

    // Concentration of solutions > data-def attribute
    "The amount of solute, in mol, per cubic decimetre of solution. Units mol dm^-3. Shown by square brackets.": "每立方分米溶液所含溶質的物質的量（以 mol 表示）。單位 mol dm^-3。用方括號表示。",

    // Concentration of solutions > equation > dd
    "amount of solute <span class=\"unit\">mol</span>": "溶質的物質的量 <span class=\"unit\">mol</span>",

    // Concentration of solutions > equation > dd
    "molar concentration <span class=\"unit\">mol dm-3</span>": "摩爾濃度 <span class=\"unit\">mol dm-3</span>",

    // Concentration of solutions > equation > dd
    "volume of solution <span class=\"unit\">dm3</span>": "溶液的體積 <span class=\"unit\">dm3</span>",

    // Concentration of solutions > data booklet note > p
    "<i>n</i> = <i>CV</i> is printed in the data booklet. Rearranged: <span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span> and <span class=\"mono\"><i>V</i> = <i>n</i> ÷ <i>C</i></span>. The volume must be in dm<sup>3</sup>.": "數據手冊印有 <i>n</i> = <i>CV</i>。重排後：<span class=\"mono\"><i>C</i> = <i>n</i> ÷ <i>V</i></span> 和 <span class=\"mono\"><i>V</i> = <i>n</i> ÷ <i>C</i></span>。體積必須以 dm<sup>3</sup> 表示。",

    // Concentration of solutions > p
    "Square brackets mean “molar concentration of”. So <span class=\"mono\">[NaCl] = 0.400 mol dm<sup>−3</sup></span> reads “the concentration of sodium chloride is 0.400 moles per cubic decimetre”. You are expected to use this notation.": "方括號的意思是「……的摩爾濃度」。所以 <span class=\"mono\">[NaCl] = 0.400 mol dm<sup>−3</sup></span> 讀作「氯化鈉的濃度是每立方分米 0.400 摩爾」。考試要求你會用這種寫法。",

    // Concentration of solutions > key idea > p
    "<i>V</i> is the volume of the finished <strong>solution</strong>, not the volume of water you added. Dissolving a solid changes the volume a little, which is why solutions are made up to a mark and not by adding a measured volume of water.": "<i>V</i> 是配好的<strong>溶液</strong>的體積，不是你加入的水的體積。固體溶解後，體積會稍為改變。所以配製溶液時是加水至刻度線，而不是加入某個量好的體積的水。",

    // Concentration of solutions > h3
    "Two ways to state a concentration": "表示濃度的兩種方法",

    // Concentration of solutions > p
    "The <dfn data-def=\"The mass of solute, in g, per cubic decimetre of solution. Units g dm^-3.\">mass concentration</dfn> is the mass of solute per volume of solution, in <span class=\"unit\">g dm-3</span>. The two are linked by the molar mass, in exactly the way mass and moles are.": "<dfn data-def=\"每立方分米溶液所含溶質的質量（以 g 表示）。單位 g dm^-3。\">質量濃度 <span class=\"en-term\">(mass concentration)</span></dfn>是每單位體積溶液所含溶質的質量，單位是 <span class=\"unit\">g dm-3</span>。兩種濃度由摩爾質量連繫起來，和質量與摩爾的關係完全一樣。",

    // Concentration of solutions > data-def attribute
    "The mass of solute, in g, per cubic decimetre of solution. Units g dm^-3.": "每立方分米溶液所含溶質的質量（以 g 表示）。單位 g dm^-3。",

    // Concentration of solutions > equation > maths line
    "mass concentration = <i>C</i> × <i>M</i>": "質量濃度 = <i>C</i> × <i>M</i>",

    // Concentration of solutions > equation > dd
    "molar mass of the solute <span class=\"unit\">g mol-1</span>": "溶質的摩爾質量 <span class=\"unit\">g mol-1</span>",

    // Concentration of solutions > p
    "The mass concentration comes out in <span class=\"unit\">g dm-3</span>. For example, 0.0500 mol dm<sup>−3</sup> sulfuric acid (<i>M</i> = 98.09 g mol<sup>−1</sup>) is <span class=\"mono\">0.0500 × 98.09 = 4.90 g dm<sup>−3</sup></span>. To go from g dm<sup>−3</sup> to mol dm<sup>−3</sup>, divide by <i>M</i>.": "這樣得出的質量濃度以 <span class=\"unit\">g dm-3</span> 為單位。例如 0.0500 mol dm<sup>−3</sup> 的硫酸（<i>M</i> = 98.09 g mol<sup>−1</sup>）是 <span class=\"mono\">0.0500 × 98.09 = 4.90 g dm<sup>−3</sup></span>。由 g dm<sup>−3</sup> 變成 mol dm<sup>−3</sup>，就除以 <i>M</i>。",

    // Concentration of solutions > li
    "Ask the three questions. Is the solute given as a mass, an amount or a concentration?": "先問三個問題。溶質是以質量、物質的量還是濃度給出的？",

    // Concentration of solutions > li
    "Convert every volume from cm<sup>3</sup> to dm<sup>3</sup> by dividing by 1000. Write this as its own line.": "把每個體積除以 1000，由 cm<sup>3</sup> 換算成 dm<sup>3</sup>。這一步獨立寫成一行。",

    // Concentration of solutions > li
    "If you have a mass of solute, convert it to moles with <i>n</i> = <i>m</i> ÷ <i>M</i>.": "如果有的是溶質的質量，用 <i>n</i> = <i>m</i> ÷ <i>M</i> 換算成摩爾。",

    // Concentration of solutions > li
    "Use <i>n</i> = <i>CV</i>, rearranged for what you want.": "用 <i>n</i> = <i>CV</i>，按要求的量重排。",

    // Concentration of solutions > li
    "Check the size of the answer, round, and write the unit.": "檢查答案的大小是否合理，取有效數字，並寫上單位。",

    // Concentration of solutions > worked example > h3
    "Concentration from mass and volume": "由質量和體積求濃度",

    // Concentration of solutions > worked example > p
    "5.85 g of sodium chloride, <span class=\"chem\">NaCl</span>, is dissolved in distilled water and the solution is made up to 250.0 cm<sup>3</sup>. Calculate the concentration in mol dm<sup>−3</sup> and in g dm<sup>−3</sup>.": "把 5.85 g 氯化鈉 <span class=\"chem\">NaCl</span> 溶於蒸餾水，再把溶液加水至 250.0 cm<sup>3</sup>。計算濃度，分別以 mol dm<sup>−3</sup> 和 g dm<sup>−3</sup> 表示。",

    // Concentration of solutions > worked example > data-title attribute
    "Convert the volume to dm³": "把體積換算成 dm³",

    // Concentration of solutions > worked example > p
    "<i>n</i> = <i>CV</i> only works with the volume in dm<sup>3</sup>.": "體積以 dm<sup>3</sup> 表示，<i>n</i> = <i>CV</i> 才成立。",

    // Concentration of solutions > worked example > data-title attribute
    "Convert the mass to moles": "把質量換算成摩爾",

    // Concentration of solutions > worked example > p
    "Molar concentration needs an amount in mol, not a mass.": "摩爾濃度需要以 mol 表示的物質的量，不是質量。",

    // Concentration of solutions > worked example > data-title attribute
    "Divide amount by volume": "把物質的量除以體積",

    // Concentration of solutions > worked example > p
    "Rearranging <i>n</i> = <i>CV</i> gives <i>C</i> = <i>n</i> ÷ <i>V</i>.": "重排 <i>n</i> = <i>CV</i>，得出 <i>C</i> = <i>n</i> ÷ <i>V</i>。",

    // Concentration of solutions > worked example > p
    "The mass has 3 significant figures, the fewest in the data.": "質量有 3 位有效數字，是數據中最少的。",

    // Concentration of solutions > worked example > data-title attribute
    "Find the mass concentration": "求質量濃度",

    // Concentration of solutions > worked example > p
    "Mass per volume uses the mass directly. There is no need to go through moles.": "每單位體積的質量可以直接用質量來算，不必經過摩爾。",

    // Concentration of solutions > worked example > p
    "0.400 mol dm<sup>−3</sup>, which is 23.4 g dm<sup>−3</sup>": "0.400 mol dm<sup>−3</sup>，即 23.4 g dm<sup>−3</sup>",

    // Concentration of solutions > common mistake > p
    "Dividing by 250 instead of 0.2500 gives 0.000400, an answer 1000 times too small. Mixing up the two units is also common. For the same solution, the value in <span class=\"unit\">g dm-3</span> is always the bigger number, because every molar mass is greater than 1 g mol<sup>−1</sup>.": "除以 250 而不是 0.2500，會得出 0.000400，答案小了 1000 倍。把兩種單位混淆也很常見。同一溶液，以 <span class=\"unit\">g dm-3</span> 表示的數值一定較大，因為所有摩爾質量都大於 1 g mol<sup>−1</sup>。",

    // Concentration of solutions > try it > p
    "Calculate the amount, in mol, of solute in 20.0 cm<sup>3</sup> of a 0.150 mol dm<sup>−3</sup> solution.": "計算 20.0 cm<sup>3</sup> 的 0.150 mol dm<sup>−3</sup> 溶液中溶質的物質的量，以 mol 表示。",

    // Concentration of solutions > try it > li
    "Which relationship links amount, concentration and volume? What unit must the volume be in?": "哪一個關係把物質的量、濃度和體積連起來？體積必須用甚麼單位？",

    // Concentration of solutions > try it > li
    "<i>V</i> = 20.0 ÷ 1000 = 0.0200 dm<sup>3</sup>. Then <i>n</i> = <i>C</i> × <i>V</i>.": "<i>V</i> = 20.0 ÷ 1000 = 0.0200 dm<sup>3</sup>。然後 <i>n</i> = <i>C</i> × <i>V</i>。",

    // Concentration of solutions > try it > p
    "<strong>0.00300 mol</strong>, or 3.00 × 10<sup>−3</sup> mol.": "<strong>0.00300 mol</strong>，即 3.00 × 10<sup>−3</sup> mol。",

    // Concentration of solutions > try it > p
    "1.20 g of sodium hydroxide, <span class=\"chem\">NaOH</span>, is dissolved and made up to 250.0 cm<sup>3</sup> of solution. Calculate [NaOH]. (<i>M</i>(NaOH) = 40.00 g mol<sup>−1</sup>)": "把 1.20 g 氫氧化鈉 <span class=\"chem\">NaOH</span> 溶解，再加水配成 250.0 cm<sup>3</sup> 溶液。計算 [NaOH]。（<i>M</i>(NaOH) = 40.00 g mol<sup>−1</sup>）",

    // Concentration of solutions > try it > li
    "Two conversions are needed before you can divide: mass to moles, and cm<sup>3</sup> to dm<sup>3</sup>.": "相除之前要先做兩個換算：質量換成摩爾，cm<sup>3</sup> 換成 dm<sup>3</sup>。",

    // Concentration of solutions > try it > li
    "<i>n</i> = 1.20 ÷ 40.00 = 0.0300 mol and <i>V</i> = 0.2500 dm<sup>3</sup>. Now <i>C</i> = <i>n</i> ÷ <i>V</i>.": "<i>n</i> = 1.20 ÷ 40.00 = 0.0300 mol，<i>V</i> = 0.2500 dm<sup>3</sup>。現在 <i>C</i> = <i>n</i> ÷ <i>V</i>。",

    // Concentration of solutions > try it > p
    "<strong>0.120 mol dm<sup>−3</sup></strong>": "<strong>0.120 mol dm<sup>−3</sup></strong>",

    // Concentration of solutions > try it > p
    "A bottle is labelled “sodium hydroxide, 8.00 g dm<sup>−3</sup>”. Convert this to a molar concentration. (<i>M</i>(NaOH) = 40.00 g mol<sup>−1</sup>)": "一個瓶子的標籤寫着「氫氧化鈉，8.00 g dm<sup>−3</sup>」。把它換算成摩爾濃度。（<i>M</i>(NaOH) = 40.00 g mol<sup>−1</sup>）",

    // Concentration of solutions > try it > li
    "Going from grams to moles: do you multiply or divide by the molar mass?": "由克變成摩爾：是乘以摩爾質量，還是除以摩爾質量？",

    // Concentration of solutions > try it > li
    "Divide: <span class=\"mono\">8.00 g dm<sup>−3</sup> ÷ 40.00 g mol<sup>−1</sup></span>.": "除：<span class=\"mono\">8.00 g dm<sup>−3</sup> ÷ 40.00 g mol<sup>−1</sup></span>。",

    // Concentration of solutions > try it > p
    "<strong>0.200 mol dm<sup>−3</sup></strong>. The units confirm it: g dm<sup>−3</sup> ÷ g mol<sup>−1</sup> = mol dm<sup>−3</sup>.": "<strong>0.200 mol dm<sup>−3</sup></strong>。單位也證實了這一點：g dm<sup>−3</sup> ÷ g mol<sup>−1</sup> = mol dm<sup>−3</sup>。",

    // Concentration of solutions > h3
    "Concentration of the ions": "離子的濃度",

    // Concentration of solutions > p
    "When an ionic compound dissolves, its ions separate. The formula tells you how many of each you get. One <span class=\"chem\">MgCl2</span> gives one <span class=\"chem\">Mg^2+</span> and two <span class=\"chem\">Cl-</span>. So in 0.150 mol dm<sup>−3</sup> <span class=\"chem\">MgCl2</span>, <span class=\"mono\">[Mg<sup>2+</sup>] = 0.150 mol dm<sup>−3</sup></span> and <span class=\"mono\">[Cl<sup>−</sup>] = 2 × 0.150 = 0.300 mol dm<sup>−3</sup></span>.": "離子化合物溶解時，離子會分開。化學式告訴你每種離子各有多少。一個 <span class=\"chem\">MgCl2</span> 給出一個 <span class=\"chem\">Mg^2+</span> 和兩個 <span class=\"chem\">Cl-</span>。所以在 0.150 mol dm<sup>−3</sup> 的 <span class=\"chem\">MgCl2</span> 中，<span class=\"mono\">[Mg<sup>2+</sup>] = 0.150 mol dm<sup>−3</sup></span>，而 <span class=\"mono\">[Cl<sup>−</sup>] = 2 × 0.150 = 0.300 mol dm<sup>−3</sup></span>。",

    // Concentration of solutions > data-title attribute
    "Concentration calculations: quick check": "濃度計算：快速小測",

    // Concentration of solutions > h3
    "Making a standard solution": "配製標準溶液",

    // Concentration of solutions > p
    "A <dfn data-def=\"A solution whose concentration is known accurately.\">standard solution</dfn> is one whose concentration is known accurately. It is made in a <dfn data-def=\"A flask with a long narrow neck and a single graduation mark. It holds one accurately known volume, such as 250.0 cm^3.\">volumetric flask</dfn>, which has a single mark on a narrow neck and holds one precise volume.": "<dfn data-def=\"濃度已準確知道的溶液。\">標準溶液 <span class=\"en-term\">(standard solution)</span></dfn>是濃度已準確知道的溶液。它在<dfn data-def=\"瓶頸又長又窄、只有一條刻度線的瓶。它盛載一個準確已知的體積，例如 250.0 cm^3。\">容量瓶 <span class=\"en-term\">(volumetric flask)</span></dfn>中配製。容量瓶的窄頸上只有一條刻度線，只盛載一個精密的體積。",

    // Concentration of solutions > data-def attribute
    "A solution whose concentration is known accurately.": "濃度已準確知道的溶液。",

    // Concentration of solutions > data-def attribute
    "A flask with a long narrow neck and a single graduation mark. It holds one accurately known volume, such as 250.0 cm^3.": "瓶頸又長又窄、只有一條刻度線的瓶。它盛載一個準確已知的體積，例如 250.0 cm^3。",

    // Concentration of solutions > widget > data-title attribute
    "Solution lab": "溶液實驗室",

    // Concentration of solutions > widget > figcaption
    "Choose a solute, a mass and a flask to see both concentrations with the working. Switch the task to “Dilute a stock solution” to explore <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>. Flask sizes are drawn roughly to scale. The depth of shading is illustrative: it shows “more concentrated” or “less concentrated”, not a measured colour.": "選擇溶質、質量和容量瓶，就可以看到兩種濃度和計算步驟。把任務切換到「稀釋儲備溶液」，可以探索 <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>。容量瓶的大小大致按比例繪畫。顏色深淺只作示意：它表示「較濃」或「較稀」，並不是量度出來的顏色。",

    // Concentration of solutions > worked example > h3
    "Mass needed for a standard solution": "配製標準溶液所需的質量",

    // Concentration of solutions > worked example > p
    "Calculate the mass of anhydrous sodium carbonate, <span class=\"chem\">Na2CO3</span>, needed to prepare 250.0 cm<sup>3</sup> of a 0.1000 mol dm<sup>−3</sup> solution.": "計算配製 250.0 cm<sup>3</sup> 的 0.1000 mol dm<sup>−3</sup> 溶液所需無水碳酸鈉 <span class=\"chem\">Na2CO3</span> 的質量。",

    // Concentration of solutions > worked example > p
    "Given: a concentration and a volume. Wanted: a mass. Route: solution → moles → mass.": "已知：濃度和體積。要求：質量。路線：溶液 → 摩爾 → 質量。",

    // Concentration of solutions > worked example > maths line
    "<i>n</i> = <i>CV</i> &nbsp; then &nbsp; <i>m</i> = <i>n</i> × <i>M</i>": "<i>n</i> = <i>CV</i> &nbsp; 然後 &nbsp; <i>m</i> = <i>n</i> × <i>M</i>",

    // Concentration of solutions > worked example > p
    "The concentration is per dm<sup>3</sup>, so the volume must match.": "濃度是以每 dm<sup>3</sup> 計的，所以體積的單位要一致。",

    // Concentration of solutions > worked example > data-title attribute
    "Find the amount needed": "求所需的物質的量",

    // Concentration of solutions > worked example > p
    "This is the amount of solute that must end up in the flask.": "這是最後必須在容量瓶裏的溶質的物質的量。",

    // Concentration of solutions > worked example > data-title attribute
    "Convert moles to mass": "把摩爾換算成質量",

    // Concentration of solutions > worked example > p
    "A balance measures grams, not moles.": "天平量的是克，不是摩爾。",

    // Concentration of solutions > worked example > p
    "Standard-solution data are given to 4 significant figures, so the answer is too.": "標準溶液的數據給至 4 位有效數字，所以答案也是 4 位。",

    // Concentration of solutions > worked example > p
    "2.650 g of Na<sub>2</sub>CO<sub>3</sub>": "2.650 g Na<sub>2</sub>CO<sub>3</sub>",

    // Concentration of solutions > p
    "Calculating the mass is half the job. You also need to be able to describe the procedure:": "計算質量只是工作的一半。你還要能夠描述步驟：",

    // Concentration of solutions > li
    "Weigh the solid accurately on a balance.": "用天平準確稱量固體。",

    // Concentration of solutions > li
    "Dissolve it in a small volume of <strong>distilled</strong> (or deionized) water in a beaker, stirring until none is left.": "在燒杯中用少量<strong>蒸餾</strong>水（或去離子水）溶解固體，攪拌至固體完全溶解。",

    // Concentration of solutions > li
    "Pour the solution through a funnel into the volumetric flask. Rinse the beaker, the stirring rod and the funnel with distilled water, and add the <strong>rinsings</strong> to the flask.": "把溶液經漏斗倒進容量瓶。用蒸餾水沖洗燒杯、玻璃棒和漏斗，並把<strong>洗液</strong>加進容量瓶。",

    // Concentration of solutions > li
    "Add distilled water until the bottom of the meniscus sits on the <strong>mark</strong>. Add the last drops with a dropping pipette.": "加蒸餾水，直至彎液面底部剛好在<strong>刻度線</strong>上。最後幾滴用滴管加入。",

    // Concentration of solutions > li
    "Stopper the flask and <strong>invert</strong> it several times to mix.": "塞上瓶塞，把容量瓶<strong>倒轉</strong>幾次，搖勻溶液。",

    // Concentration of solutions > exam tip (shown in English + translation) > p
    "Markschemes reward specific words: <strong>volumetric flask</strong>, <strong>distilled or deionized water</strong>, transfer <strong>with rinsings</strong>, <strong>make up to the mark</strong>, <strong>stopper and invert to mix</strong>. Writing only “water” can lose a mark. “Add 250 cm<sup>3</sup> of water” is wrong chemistry: the flask is filled <em>up to</em> the mark, so the solution, not the water, is 250.0 cm<sup>3</sup>.": "評分準則要求寫出特定的字眼：<strong>容量瓶</strong>、<strong>蒸餾水或去離子水</strong>、<strong>連同洗液</strong>一併轉移、<strong>加水至刻度線</strong>、<strong>塞上瓶塞並倒轉搖勻</strong>。只寫「水」可能會失一分。「加入 250 cm<sup>3</sup> 水」在化學上是錯的：容量瓶是加水<em>至</em>刻度線，所以 250.0 cm<sup>3</sup> 的是溶液，不是水。",

    // Concentration of solutions > try it > p
    "Calculate the mass of hydrated copper(II) sulfate, <span class=\"chem\">CuSO4.5H2O</span>, needed to prepare 100.0 cm<sup>3</sup> of a 0.200 mol dm<sup>−3</sup> solution. (<i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>)": "計算配製 100.0 cm<sup>3</sup> 的 0.200 mol dm<sup>−3</sup> 溶液所需水合硫酸銅(II) <span class=\"chem\">CuSO4.5H2O</span> 的質量。（<i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>）",

    // Concentration of solutions > try it > li
    "Route: solution → moles → mass. Start by converting 100.0 cm<sup>3</sup> to dm<sup>3</sup>.": "路線：溶液 → 摩爾 → 質量。先把 100.0 cm<sup>3</sup> 換算成 dm<sup>3</sup>。",

    // Concentration of solutions > try it > li
    "<i>n</i> = 0.200 × 0.1000 = 0.0200 mol. Then <i>m</i> = <i>n</i> × <i>M</i>, using the molar mass of the hydrate, because that is the solid you weigh.": "<i>n</i> = 0.200 × 0.1000 = 0.0200 mol。然後 <i>m</i> = <i>n</i> × <i>M</i>，要用水合物的摩爾質量，因為你稱量的固體是水合物。",

    // Concentration of solutions > try it > p
    "To 3 significant figures (set by 0.200): <strong>4.99 g</strong>.": "取至 3 位有效數字（由 0.200 決定）：<strong>4.99 g</strong>。",

    // Concentration of solutions > h3
    "Dilution": "稀釋",

    // Concentration of solutions > p
    "Adding water to squash makes it weaker, but the syrup is all still there. <dfn data-def=\"Lowering the concentration of a solution by adding more solvent. The amount of solute does not change.\">Dilution</dfn> lowers the concentration by adding solvent. The amount of solute does not change.": "在沖調果汁中加水，味道會變淡，但糖漿全部都還在。<dfn data-def=\"加入更多溶劑來降低溶液的濃度。溶質的物質的量不變。\">稀釋 <span class=\"en-term\">(dilution)</span></dfn>是加入溶劑來降低濃度。溶質的物質的量不變。",

    // Concentration of solutions > data-def attribute
    "Lowering the concentration of a solution by adding more solvent. The amount of solute does not change.": "加入更多溶劑來降低溶液的濃度。溶質的物質的量不變。",

    // Concentration of solutions > p
    "Amount before = amount after. Since <i>n</i> = <i>CV</i>, that gives the dilution relationship.": "稀釋前的物質的量 = 稀釋後的物質的量。因為 <i>n</i> = <i>CV</i>，所以得出稀釋的關係式。",

    // Concentration of solutions > equation > dd
    "concentration of the stock solution <span class=\"unit\">mol dm-3</span>": "儲備溶液的濃度 <span class=\"unit\">mol dm-3</span>",

    // Concentration of solutions > equation > dd
    "volume of stock solution taken <span class=\"unit\">cm3</span>": "取用的儲備溶液體積 <span class=\"unit\">cm3</span>",

    // Concentration of solutions > equation > dd
    "concentration after dilution <span class=\"unit\">mol dm-3</span>": "稀釋後的濃度 <span class=\"unit\">mol dm-3</span>",

    // Concentration of solutions > equation > dd
    "final total volume <span class=\"unit\">cm3</span>": "最終的總體積 <span class=\"unit\">cm3</span>",

    // Concentration of solutions > p
    "This relationship is not in the data booklet, so learn where it comes from. The two volumes may both be in cm<sup>3</sup> or both in dm<sup>3</sup>, as long as they match. The <dfn data-def=\"How many times a solution has been diluted: final volume divided by the volume of stock taken.\">dilution factor</dfn> is <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>. A “10 times” dilution divides the concentration by 10.": "數據手冊沒有這個關係，所以要明白它是怎樣來的。兩個體積可以都用 cm<sup>3</sup>，或者都用 dm<sup>3</sup>，只要單位一致就可以。<dfn data-def=\"溶液稀釋了多少倍：最終體積除以取用的儲備溶液體積。\">稀釋倍數 <span class=\"en-term\">(dilution factor)</span></dfn>是 <i>V</i><sub>2</sub> ÷ <i>V</i><sub>1</sub>。稀釋「10 倍」，濃度就除以 10。",

    // Concentration of solutions > data-def attribute
    "How many times a solution has been diluted: final volume divided by the volume of stock taken.": "溶液稀釋了多少倍：最終體積除以取用的儲備溶液體積。",

    // Concentration of solutions > worked example > h3
    "Volume of stock solution for a dilution": "稀釋所需的儲備溶液體積",

    // Concentration of solutions > worked example > p
    "What volume of 2.00 mol dm<sup>−3</sup> hydrochloric acid is needed to prepare 250.0 cm<sup>3</sup> of 0.100 mol dm<sup>−3</sup> hydrochloric acid?": "配製 250.0 cm<sup>3</sup> 的 0.100 mol dm<sup>−3</sup> 氫氯酸 (hydrochloric acid)，需要多少體積的 2.00 mol dm<sup>−3</sup> 氫氯酸？",

    // Concentration of solutions > worked example > data-title attribute
    "Label the four quantities": "標明四個量",

    // Concentration of solutions > worked example > p
    "“1” is the stock solution you start with. “2” is the diluted solution you end with. The unknown is <i>V</i><sub>1</sub>.": "「1」是開始時的儲備溶液。「2」是最後得到的稀釋溶液。未知數是 <i>V</i><sub>1</sub>。",

    // Concentration of solutions > worked example > data-title attribute
    "Rearrange for the unknown": "重排公式求未知數",

    // Concentration of solutions > worked example > p
    "The amount of HCl is the same before and after: <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>.": "稀釋前後 HCl 的物質的量相同：<i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>。",

    // Concentration of solutions > worked example > p
    "The concentration units cancel, so <i>V</i><sub>1</sub> comes out in the same unit as <i>V</i><sub>2</sub>.": "濃度的單位互相抵消，所以 <i>V</i><sub>1</sub> 的單位與 <i>V</i><sub>2</sub> 相同。",

    // Concentration of solutions > worked example > data-title attribute
    "Check with the dilution factor": "用稀釋倍數檢查",

    // Concentration of solutions > worked example > data-label attribute
    // Avogadro’s law and reacting gas volumes > worked example > data-label attribute
    "Check": "檢查",

    // Concentration of solutions > worked example > p
    "The concentration falls 20 times (2.00 ÷ 0.100), so the volume must grow 20 times.": "濃度降至原來的 20 分之一（2.00 ÷ 0.100），所以體積必須增至 20 倍。",

    // Concentration of solutions > worked example > p
    "12.5 cm<sup>3</sup> of the 2.00 mol dm<sup>−3</sup> acid": "12.5 cm<sup>3</sup> 的 2.00 mol dm<sup>−3</sup> 酸",

    // Concentration of solutions > p
    "You also need to describe the procedure. Markschemes look for these points:": "你也要能夠描述步驟。評分準則會找以下各點：",

    // Concentration of solutions > li
    "Use a <strong>pipette</strong> (or a burette) to measure the stock solution. A measuring cylinder is not precise enough.": "用<strong>移液管</strong>（或滴定管）量取儲備溶液。量筒不夠精密。",

    // Concentration of solutions > li
    "Run it into a <strong>volumetric flask</strong> of the right size, here 250.0 cm<sup>3</sup>.": "把它放進大小合適的<strong>容量瓶</strong>，這裏是 250.0 cm<sup>3</sup>。",

    // Concentration of solutions > li
    "Add <strong>distilled water</strong> up to the <strong>mark</strong>.": "加<strong>蒸餾水</strong>至<strong>刻度線</strong>。",

    // Concentration of solutions > li
    "Stopper and invert several times to <strong>mix</strong>.": "塞上瓶塞，倒轉幾次，把溶液<strong>搖勻</strong>。",

    // Concentration of solutions > common mistake > p
    "“Add 237.5 cm<sup>3</sup> of water” is not the right description. <i>V</i><sub>2</sub> is the <em>total</em> final volume, and volumes do not always add exactly. The correct instruction is to make the solution up to the mark.": "「加入 237.5 cm<sup>3</sup> 水」並不是正確的描述。<i>V</i><sub>2</sub> 是最終的<em>總</em>體積，而體積相加後不一定剛好等於總和。正確的指示是把溶液加水至刻度線。",

    // Concentration of solutions > p
    "A <dfn data-def=\"A series of dilutions in which each new solution is made by diluting the one before it by the same factor.\">serial dilution</dfn> repeats the same step. Dilute a 1.00 mol dm<sup>−3</sup> stock 10 times to get 0.100 mol dm<sup>−3</sup>. Dilute that 10 times to get 0.0100 mol dm<sup>−3</sup>, and so on. It reaches very low concentrations without measuring tiny volumes.": "<dfn data-def=\"一連串的稀釋，每一份新溶液都是把前一份溶液按相同倍數稀釋而成。\">連續稀釋 <span class=\"en-term\">(serial dilution)</span></dfn>是重複同一個步驟。把 1.00 mol dm<sup>−3</sup> 的儲備溶液稀釋 10 倍，得到 0.100 mol dm<sup>−3</sup>。把它再稀釋 10 倍，得到 0.0100 mol dm<sup>−3</sup>，如此類推。這樣不用量度極小的體積，也可以得到很低的濃度。",

    // Concentration of solutions > data-def attribute
    "A series of dilutions in which each new solution is made by diluting the one before it by the same factor.": "一連串的稀釋，每一份新溶液都是把前一份溶液按相同倍數稀釋而成。",

    // Concentration of solutions > try it > p
    "10.0 cm<sup>3</sup> of a 0.500 mol dm<sup>−3</sup> solution is pipetted into a 250.0 cm<sup>3</sup> volumetric flask and made up to the mark with distilled water. Calculate the concentration of the diluted solution.": "用移液管把 10.0 cm<sup>3</sup> 的 0.500 mol dm<sup>−3</sup> 溶液放進 250.0 cm<sup>3</sup> 容量瓶，再加蒸餾水至刻度線。計算稀釋後溶液的濃度。",

    // Concentration of solutions > try it > li
    "Which values are <i>C</i><sub>1</sub>, <i>V</i><sub>1</sub> and <i>V</i><sub>2</sub>? The unknown is <i>C</i><sub>2</sub>. It must be smaller than 0.500.": "哪些數值是 <i>C</i><sub>1</sub>、<i>V</i><sub>1</sub> 和 <i>V</i><sub>2</sub>？未知數是 <i>C</i><sub>2</sub>。它一定小於 0.500。",

    // Concentration of solutions > try it > p
    "<strong>0.0200 mol dm<sup>−3</sup></strong>. The dilution factor is 250.0 ÷ 10.0 = 25, and 0.500 ÷ 25 = 0.0200.": "<strong>0.0200 mol dm<sup>−3</sup></strong>。稀釋倍數是 250.0 ÷ 10.0 = 25，而 0.500 ÷ 25 = 0.0200。",

    // Concentration of solutions > h3
    "Finding a concentration with a calibration curve": "用校準曲線求濃度",

    // Concentration of solutions > p
    "Some solutions are coloured, and the more concentrated they are, the more light they absorb. A <dfn data-def=\"An instrument that measures how much light of a chosen colour a solution absorbs.\">colorimeter</dfn> or spectrophotometer measures this as a number called absorbance. That gives a quick way to find an unknown concentration.": "有些溶液有顏色，而且濃度越高，吸收的光越多。<dfn data-def=\"量度溶液吸收了多少某種選定顏色的光的儀器。\">比色計 <span class=\"en-term\">(colorimeter)</span></dfn>或分光光度計 (spectrophotometer) 把吸收的程度量度成一個數，稱為吸光度 (absorbance)。這樣就可以很快求出未知濃度。",

    // Concentration of solutions > data-def attribute
    "An instrument that measures how much light of a chosen colour a solution absorbs.": "量度溶液吸收了多少某種選定顏色的光的儀器。",

    // Concentration of solutions > li
    "Make several standard solutions of known concentration, usually by diluting one stock solution.": "配製幾份已知濃度的標準溶液，通常是把同一份儲備溶液稀釋而成。",

    // Concentration of solutions > li
    "Measure the absorbance of each one.": "量度每一份的吸光度。",

    // Concentration of solutions > li
    "Plot absorbance (<i>y</i>) against concentration (<i>x</i>) and draw the line of best fit. This graph is the <dfn data-def=\"A graph of an instrument reading against known concentrations, used to read off an unknown concentration.\">calibration curve</dfn>.": "以吸光度（<i>y</i>）對濃度（<i>x</i>）繪圖，並畫出最佳擬合線 (line of best fit)。這幅圖就是<dfn data-def=\"儀器讀數對已知濃度的圖，用來讀出未知濃度。\">校準曲線 <span class=\"en-term\">(calibration curve)</span></dfn>。",

    // Concentration of solutions > data-def attribute
    "A graph of an instrument reading against known concentrations, used to read off an unknown concentration.": "儀器讀數對已知濃度的圖，用來讀出未知濃度。",

    // Concentration of solutions > li
    "Measure the absorbance of the unknown solution and read its concentration from the line.": "量度未知溶液的吸光度，再從線上讀出它的濃度。",

    // Concentration of solutions > widget > data-title attribute
    "Reading a calibration curve": "解讀校準曲線",

    // Concentration of solutions > widget > figcaption
    "The crosses are six standard solutions (example data, not a real experiment). Move the slider to set the absorbance of an unknown. Read across to the line, then down to the axis. The unknown must lie inside the range of the standards.": "交叉代表六份標準溶液（示例數據，並非真實實驗）。移動滑桿，設定未知溶液的吸光度。先橫向讀到直線，再向下讀到軸上。未知溶液必須在標準溶液的範圍之內。",

    // Concentration of solutions > not needed for IB > p
    "You do not need the Beer–Lambert law or any equation for absorbance. You only need the idea: known standards, a graph, a line of best fit, and reading the unknown from it. Concentration units such as ppm, molality, percentage by mass and mole fraction are not in the IB guide. Use <span class=\"unit\">mol dm-3</span> and <span class=\"unit\">g dm-3</span>.": "你不需要比爾－朗伯定律 (Beer–Lambert law)，也不需要任何吸光度的方程。你只需要明白這個概念：已知的標準溶液、一幅圖、一條最佳擬合線，然後從線上讀出未知濃度。ppm、質量摩爾濃度 (molality)、質量百分率和摩爾分數 (mole fraction) 等濃度單位不在 IB 指南之內。用 <span class=\"unit\">mol dm-3</span> 和 <span class=\"unit\">g dm-3</span>。",

    // Concentration of solutions > not needed for IB > p
    "Titration calculations, where a solution of known concentration is used to find another through a reaction, belong to Reactivity 2.1 and Reactivity 3.1. They combine <i>n</i> = <i>CV</i> from this section with the mole ratio of an equation.": "滴定計算是用已知濃度的溶液，透過反應求出另一溶液的濃度，屬於 Reactivity 2.1 和 Reactivity 3.1。它們把本節的 <i>n</i> = <i>CV</i> 和方程式的摩爾比結合起來。",

    // Concentration of solutions > data-title attribute
    "Standard solutions, dilution and calibration: quick check": "標準溶液、稀釋和校準：快速小測",

    // Avogadro’s law and reacting gas volumes > data-toc attribute
    // Avogadro’s law and reacting gas volumes > key idea > data-title attribute
    "Avogadro’s law": "亞佛加德羅定律",

    // Avogadro’s law and reacting gas volumes > h2
    "Avogadro’s law and reacting gas volumes": "亞佛加德羅定律和反應氣體體積",

    // Avogadro’s law and reacting gas volumes > p
    "In a gas, the particles are far apart. Almost all of the volume is empty space, so the size of the particles themselves hardly matters. A balloon of hydrogen and a balloon of carbon dioxide of the same size, at the same temperature and pressure, hold the same number of molecules, even though the carbon dioxide molecules are much heavier.": "氣體中的粒子相距很遠。差不多所有體積都是空的，所以粒子本身的大小幾乎沒有影響。一個氫氣球和一個二氧化碳氣球，如果大小相同、溫度和壓強也相同，所含的分子數目就相同，儘管二氧化碳分子重得多。",

    // Avogadro’s law and reacting gas volumes > key idea > p
    "Equal volumes of all gases, measured under the same conditions of temperature and pressure, contain equal numbers of molecules.": "在相同的溫度和壓強下量度，體積相同的所有氣體含有相同數目的分子。",

    // Avogadro’s law and reacting gas volumes > p
    "Equal numbers of molecules means equal amounts in moles. So for gases at the same temperature and pressure, volume is directly proportional to amount. Double the moles, double the volume.": "分子數目相同，即以摩爾表示的物質的量相同。所以在相同的溫度和壓強下，氣體的體積與物質的量成正比。摩爾加倍，體積也加倍。",

    // Avogadro’s law and reacting gas volumes > p
    "This has a very useful result. In a balanced equation, the coefficients give the mole ratio. For gases, the same coefficients also give the <strong>volume ratio</strong>. You can work in volumes and never calculate a single mole.": "這帶來一個很有用的結果。在平衡方程式中，系數給出摩爾比。對氣體來說，同一組系數也給出<strong>體積比</strong>。你可以直接用體積計算，完全不用計算摩爾。",

    // Avogadro’s law and reacting gas volumes > widget > data-title attribute
    "Reacting gas volumes": "反應氣體體積",

    // Avogadro’s law and reacting gas volumes > widget > figcaption
    "Pick a reaction, choose one gas and set its volume. The other volumes follow from the coefficients. Box heights are in proportion to the volumes. This is a model: each dot stands for the same very large number of molecules, and every box has the same number of dots per unit area, as Avogadro’s law says.": "選一個反應，再選其中一種氣體並設定它的體積。其他體積由系數決定。方格的高度與體積成比例。這是一個模型：每一點代表同樣大的一批分子（數目極大），而每個方格內每單位面積的點數都相同，正如亞佛加德羅定律所說。",

    // Avogadro’s law and reacting gas volumes > li
    "Write the balanced equation with state symbols. Only substances marked (g) take part in the volume ratio.": "寫出帶物態符號的平衡方程式。只有標明 (g) 的物質才計入體積比。",

    // Avogadro’s law and reacting gas volumes > li
    "Check that all volumes are measured at the same temperature and pressure.": "檢查所有體積是否在相同的溫度和壓強下量度。",

    // Avogadro’s law and reacting gas volumes > li
    "Find the coefficient of the gas you know and of the gas you want.": "找出已知氣體和要求氣體的系數。",

    // Avogadro’s law and reacting gas volumes > li
    "Volume wanted = volume known × (coefficient wanted ÷ coefficient known).": "要求的體積 = 已知的體積 ×（要求氣體的系數 ÷ 已知氣體的系數）。",

    // Avogadro’s law and reacting gas volumes > li
    "Keep the same volume unit throughout. There is no need to convert cm<sup>3</sup> to dm<sup>3</sup>, because it is a ratio.": "全程使用同一個體積單位。不必把 cm<sup>3</sup> 換算成 dm<sup>3</sup>，因為這是一個比。",

    // Avogadro’s law and reacting gas volumes > worked example > h3
    "Volumes of reacting gases": "反應氣體的體積",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Propane burns completely in oxygen:": "丙烷在氧氣中完全燃燒：",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "<span class=\"chem\">C3H8(g) + 5O2(g) -&gt; 3CO2(g) + 4H2O(l)</span>": "<span class=\"chem\">C3H8(g) + 5O2(g) -&gt; 3CO2(g) + 4H2O(l)</span>",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "25.0 cm<sup>3</sup> of propane is burned. All volumes are measured at the same temperature and pressure. Calculate the volume of oxygen needed and the volume of carbon dioxide formed.": "燃燒 25.0 cm<sup>3</sup> 丙烷。所有體積都在相同的溫度和壓強下量度。計算所需氧氣的體積和生成的二氧化碳的體積。",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Read the mole ratio": "讀出摩爾比",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The coefficients tell you how many moles react. An unwritten coefficient is 1.": "系數告訴你有多少摩爾參與反應。沒有寫出來的系數就是 1。",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Use Avogadro’s law": "運用亞佛加德羅定律",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Same temperature and pressure, so the volume ratio of the gases equals the mole ratio.": "溫度和壓強相同，所以氣體的體積比等於摩爾比。",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "volume ratio = 1 : 5 : 3": "體積比 = 1 : 5 : 3",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Scale to the volume given": "按已知體積放大",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "Multiply by coefficient wanted ÷ coefficient known. The coefficients are exact, so the answers keep 3 significant figures.": "乘以「要求氣體的系數 ÷ 已知氣體的系數」。系數是準確的數，所以答案保留 3 位有效數字。",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Check the state symbols": "檢查物態符號",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The water is a liquid, (l). It is not a gas, so it adds nothing to the gas volume.": "水是液體，(l)。它不是氣體，所以不會增加氣體體積。",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "gas before: 25.0 + 125 = 150 cm<sup>3</sup> &nbsp; gas after: 75.0 cm<sup>3</sup>": "反應前的氣體: 25.0 + 125 = 150 cm<sup>3</sup> &nbsp; 反應後的氣體: 75.0 cm<sup>3</sup>",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "125 cm<sup>3</sup> of O<sub>2</sub> is needed and 75.0 cm<sup>3</sup> of CO<sub>2</sub> forms": "需要 125 cm<sup>3</sup> O<sub>2</sub>，生成 75.0 cm<sup>3</sup> CO<sub>2</sub>",

    // Avogadro’s law and reacting gas volumes > common mistake > p
    "Volumes of gases are not conserved in a reaction. In the example, 150 cm<sup>3</sup> of gas becomes 75.0 cm<sup>3</sup>. Mass is conserved and atoms are conserved, but the number of gas molecules can change. Also watch for <span class=\"chem\">H2O(l)</span>: counting liquid water as a gas volume is a common wrong answer.": "氣體的體積在反應中並不守恆。在這道例題中，150 cm<sup>3</sup> 氣體變成 75.0 cm<sup>3</sup>。質量守恆，原子也守恆，但氣體分子的數目可以改變。還要留意 <span class=\"chem\">H2O(l)</span>：把液態水當作氣體體積來計算，是常見的錯誤答案。",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Carbon monoxide burns in oxygen: <span class=\"chem\">2CO(g) + O2(g) -&gt; 2CO2(g)</span>. What volume of oxygen is needed to react completely with 150 cm<sup>3</sup> of carbon monoxide, at the same temperature and pressure? Give your answer to 3 significant figures.": "一氧化碳在氧氣中燃燒：<span class=\"chem\">2CO(g) + O2(g) -&gt; 2CO2(g)</span>。在相同的溫度和壓強下，要與 150 cm<sup>3</sup> 一氧化碳完全反應，需要多少體積的氧氣？答案取至 3 位有效數字。",

    // Avogadro’s law and reacting gas volumes > try it > li
    "What is the mole ratio of CO to O<sub>2</sub> in the equation? The volume ratio is the same.": "方程式中 CO 與 O<sub>2</sub> 的摩爾比是多少？體積比也一樣。",

    // Avogadro’s law and reacting gas volumes > try it > li
    "CO : O<sub>2</sub> = 2 : 1, so <i>V</i>(O<sub>2</sub>) = 150 × (1 ÷ 2).": "CO : O<sub>2</sub> = 2 : 1，所以 <i>V</i>(O<sub>2</sub>) = 150 × (1 ÷ 2)。",

    // Avogadro’s law and reacting gas volumes > try it > p
    "<strong>75.0 cm<sup>3</sup></strong> of oxygen.": "<strong>75.0 cm<sup>3</sup></strong> 氧氣。",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Ammonia is made from nitrogen and hydrogen: <span class=\"chem\">N2(g) + 3H2(g) -&gt; 2NH3(g)</span>. What volume of ammonia forms when 45.0 cm<sup>3</sup> of hydrogen reacts completely, at the same temperature and pressure?": "氨由氮氣和氫氣製成：<span class=\"chem\">N2(g) + 3H2(g) -&gt; 2NH3(g)</span>。在相同的溫度和壓強下，45.0 cm<sup>3</sup> 氫氣完全反應，生成多少體積的氨？",

    // Avogadro’s law and reacting gas volumes > try it > li
    "Find the coefficients of the gas you know (H<sub>2</sub>) and the gas you want (NH<sub>3</sub>).": "找出已知氣體（H<sub>2</sub>）和要求氣體（NH<sub>3</sub>）的系數。",

    // Avogadro’s law and reacting gas volumes > try it > li
    "H<sub>2</sub> : NH<sub>3</sub> = 3 : 2, so <i>V</i>(NH<sub>3</sub>) = 45.0 × (2 ÷ 3).": "H<sub>2</sub> : NH<sub>3</sub> = 3 : 2，所以 <i>V</i>(NH<sub>3</sub>) = 45.0 × (2 ÷ 3)。",

    // Avogadro’s law and reacting gas volumes > try it > p
    "<strong>30.0 cm<sup>3</sup></strong> of ammonia. It also needs 45.0 ÷ 3 = 15.0 cm<sup>3</sup> of nitrogen.": "<strong>30.0 cm<sup>3</sup></strong> 氨。反應還需要 45.0 ÷ 3 = 15.0 cm<sup>3</sup> 氮氣。",

    // Avogadro’s law and reacting gas volumes > h3
    "When one gas is in excess": "其中一種氣體過量時",

    // Avogadro’s law and reacting gas volumes > p
    "Sometimes more of one gas is supplied than the reaction needs. The question then says that gas is “in <dfn data-def=\"More than the amount needed to react. Some of it is left over at the end.\">excess</dfn>”. Some of it is left over at the end, mixed with the gases that were made.": "有時其中一種氣體的供應量多於反應所需。題目會說這種氣體「<dfn data-def=\"多於反應所需的量。反應結束時有一部分剩下。\">過量 <span class=\"en-term\">(in excess)</span></dfn>」。反應結束時，它有一部分剩下，與生成的氣體混在一起。",

    // Avogadro’s law and reacting gas volumes > data-def attribute
    "More than the amount needed to react. Some of it is left over at the end.": "多於反應所需的量。反應結束時有一部分剩下。",

    // Avogadro’s law and reacting gas volumes > li
    "Use the volume ratio to find how much of the excess gas <em>reacts</em>.": "用體積比求出過量的氣體有多少<em>參與反應</em>。",

    // Avogadro’s law and reacting gas volumes > li
    "Gas left over = volume supplied − volume that reacted.": "剩下的氣體 = 供應的體積 − 參與反應的體積。",

    // Avogadro’s law and reacting gas volumes > li
    "Gas at the end = gas left over + gaseous products. Leave out anything marked (l) or (s).": "最後的氣體 = 剩下的氣體 + 氣態生成物。標明 (l) 或 (s) 的都不計算。",

    // Avogadro’s law and reacting gas volumes > worked example > h3
    "Gas left at the end": "最後剩下的氣體",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "10.0 cm<sup>3</sup> of methane is burned in 50.0 cm<sup>3</sup> of oxygen, which is an excess:": "10.0 cm<sup>3</sup> 甲烷在 50.0 cm<sup>3</sup> 氧氣中燃燒，氧氣過量：",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "<span class=\"chem\">CH4(g) + 2O2(g) -&gt; CO2(g) + 2H2O(l)</span>": "<span class=\"chem\">CH4(g) + 2O2(g) -&gt; CO2(g) + 2H2O(l)</span>",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "All volumes are measured at the same temperature and pressure. Calculate the total volume of gas at the end.": "所有體積都在相同的溫度和壓強下量度。計算最後氣體的總體積。",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the oxygen that reacts": "求參與反應的氧氣",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "All the methane burns, because oxygen is in excess. The ratio CH<sub>4</sub> : O<sub>2</sub> is 1 : 2.": "氧氣過量，所以甲烷全部燃燒。CH<sub>4</sub> : O<sub>2</sub> 的比是 1 : 2。",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "<i>V</i>(O<sub>2</sub> reacting) = 10.0 cm<sup>3</sup> × <span class=\"frac\"><span>2</span><span>1</span></span> = 20.0 cm<sup>3</sup>": "<i>V</i>(參與反應的 O<sub>2</sub>) = 10.0 cm<sup>3</sup> × <span class=\"frac\"><span>2</span><span>1</span></span> = 20.0 cm<sup>3</sup>",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the oxygen left over": "求剩下的氧氣",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "What was supplied, minus what was used.": "供應的量，減去用掉的量。",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    // Avogadro’s law and reacting gas volumes > try it > maths line
    "<i>V</i>(O<sub>2</sub> left) = 50.0 cm<sup>3</sup> − 20.0 cm<sup>3</sup> = 30.0 cm<sup>3</sup>": "<i>V</i>(剩下的 O<sub>2</sub>) = 50.0 cm<sup>3</sup> − 20.0 cm<sup>3</sup> = 30.0 cm<sup>3</sup>",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Find the gas made": "求生成的氣體",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The ratio CH<sub>4</sub> : CO<sub>2</sub> is 1 : 1. The water is a liquid, so it is not counted.": "CH<sub>4</sub> : CO<sub>2</sub> 的比是 1 : 1。水是液體，所以不計算。",

    // Avogadro’s law and reacting gas volumes > worked example > data-title attribute
    "Add the gases present at the end": "把最後存在的氣體加起來",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "The container now holds the oxygen left over and the carbon dioxide made.": "容器裏現在有剩下的氧氣和生成的二氧化碳。",

    // Avogadro’s law and reacting gas volumes > worked example > maths line
    "<i>V</i>(total) = 30.0 cm<sup>3</sup> + 10.0 cm<sup>3</sup> = <b>40.0 cm<sup>3</sup></b>": "<i>V</i>(總) = 30.0 cm<sup>3</sup> + 10.0 cm<sup>3</sup> = <b>40.0 cm<sup>3</sup></b>",

    // Avogadro’s law and reacting gas volumes > worked example > p
    "40.0 cm<sup>3</sup> of gas: 30.0 cm<sup>3</sup> of O<sub>2</sub> and 10.0 cm<sup>3</sup> of CO<sub>2</sub>": "40.0 cm<sup>3</sup> 氣體：30.0 cm<sup>3</sup> O<sub>2</sub> 和 10.0 cm<sup>3</sup> CO<sub>2</sub>",

    // Avogadro’s law and reacting gas volumes > try it > p
    "40.0 cm<sup>3</sup> of carbon monoxide is burned in 50.0 cm<sup>3</sup> of oxygen, which is an excess: <span class=\"chem\">2CO(g) + O2(g) -&gt; 2CO2(g)</span>. Calculate the total volume of gas at the end, at the same temperature and pressure.": "40.0 cm<sup>3</sup> 一氧化碳在 50.0 cm<sup>3</sup> 氧氣中燃燒，氧氣過量：<span class=\"chem\">2CO(g) + O2(g) -&gt; 2CO2(g)</span>。計算在相同的溫度和壓強下，最後氣體的總體積。",

    // Avogadro’s law and reacting gas volumes > try it > li
    "Two gases are present at the end: the oxygen left over and the carbon dioxide made. Find each one.": "最後有兩種氣體：剩下的氧氣和生成的二氧化碳。逐一求出。",

    // Avogadro’s law and reacting gas volumes > try it > li
    "O<sub>2</sub> reacting = 40.0 × (1 ÷ 2) = 20.0 cm<sup>3</sup>, so 30.0 cm<sup>3</sup> is left. CO<sub>2</sub> made = 40.0 × (2 ÷ 2).": "參與反應的 O<sub>2</sub> = 40.0 × (1 ÷ 2) = 20.0 cm<sup>3</sup>，所以剩下 30.0 cm<sup>3</sup>。生成的 CO<sub>2</sub> = 40.0 × (2 ÷ 2)。",

    // Avogadro’s law and reacting gas volumes > try it > maths line
    "<i>V</i>(O<sub>2</sub> reacting) = 40.0 cm<sup>3</sup> × <span class=\"frac\"><span>1</span><span>2</span></span> = 20.0 cm<sup>3</sup>": "<i>V</i>(參與反應的 O<sub>2</sub>) = 40.0 cm<sup>3</sup> × <span class=\"frac\"><span>1</span><span>2</span></span> = 20.0 cm<sup>3</sup>",

    // Avogadro’s law and reacting gas volumes > try it > p
    "Total: 30.0 + 40.0 = <strong>70.0 cm<sup>3</sup></strong>.": "總體積：30.0 + 40.0 = <strong>70.0 cm<sup>3</sup></strong>。",

    // Avogadro’s law and reacting gas volumes > exam tip (shown in English + translation) > p
    "If you are asked to state Avogadro’s law, include all three parts: equal volumes of gases, same temperature and pressure, equal numbers of molecules. In a calculation, write “volume ratio = mole ratio” before you use the coefficients.": "如果題目要你寫出亞佛加德羅定律，三個部分都要寫：氣體的體積相同、溫度和壓強相同、分子數目相同。在計算題中，使用系數之前先寫「體積比 = 摩爾比」(volume ratio = mole ratio)。",

    // Avogadro’s law and reacting gas volumes > not needed for IB > p
    "The molar volume of a gas (22.7 dm<sup>3</sup> mol<sup>−1</sup> at STP) and <i>PV</i> = <i>nRT</i> are in topic 1.5. In this topic, the question tells you which gas is in excess. Working out for yourself which reactant runs out first (the limiting reactant) is taught in Reactivity 2.1.": "氣體的摩爾體積（STP 下是 22.7 dm<sup>3</sup> mol<sup>−1</sup>）和 <i>PV</i> = <i>nRT</i> 屬於課題 1.5。在這個課題，題目會告訴你哪一種氣體過量。自己判斷哪一種反應物先用完（限量反應物），要到 Reactivity 2.1 才學。",

    // Avogadro’s law and reacting gas volumes > data-title attribute
    "Avogadro’s law: quick check": "亞佛加德羅定律：快速小測",

    // Where this topic stops > data-toc attribute
    "What is not in 1.4": "1.4 不包括甚麼",

    // Where this topic stops > h2
    "Where this topic stops": "這個課題到哪裏為止",

    // Where this topic stops > p
    "Textbooks and online tutors often pile extra material onto the mole. This table shows what is in Structure 1.4, what comes later in the course, and what you can leave alone.": "課本和網上的教學資源常常在摩爾這個課題上加入很多額外內容。下表列出哪些屬於 Structure 1.4，哪些在課程較後部分才學，哪些可以不理。",

    // Where this topic stops > table > caption
    "In, later, or not needed": "本課題內容、之後才學，還是不要求",

    // Where this topic stops > table > th
    "Idea": "概念",

    // Where this topic stops > table > th
    "Status": "情況",

    // Where this topic stops > table > th
    "Moles ⇄ particles, mass, concentration": "摩爾 ⇄ 粒子、質量、濃度",

    // Where this topic stops > table > td
    "In this topic (1.4.1, 1.4.3, 1.4.5)": "屬於這個課題（1.4.1、1.4.3、1.4.5）",

    // Where this topic stops > table > th
    "Empirical and molecular formulas, including combustion data": "實驗式和分子式，包括燃燒數據",

    // Where this topic stops > table > td
    "In this topic (1.4.4)": "屬於這個課題（1.4.4）",

    // Where this topic stops > table > th
    "Standard solutions, dilution, calibration curves": "標準溶液、稀釋、校準曲線",

    // Where this topic stops > table > td
    "In this topic (1.4.5)": "屬於這個課題（1.4.5）",

    // Where this topic stops > table > th
    "Gas volume ratios from an equation, including a gas you are told is in excess": "由方程式求氣體體積比，包括題目指明過量的氣體",

    // Where this topic stops > table > td
    "In this topic (1.4.6)": "屬於這個課題（1.4.6）",

    // Where this topic stops > table > th
    "Reacting masses from an equation": "由方程式求反應質量",

    // Where this topic stops > table > td
    "Later: Reactivity 2.1": "之後才學：Reactivity 2.1",

    // Where this topic stops > table > th
    "Finding the limiting reactant, percentage yield, atom economy": "找出限量反應物、百分產率、原子經濟",

    // Where this topic stops > table > th
    "Percentage uncertainty of a concentration you have made": "自己配製的溶液的濃度的百分不確定度",

    // Where this topic stops > table > td
    "Later: the uncertainty skills in Tool 3": "之後才學：Tool 3 的不確定度技巧",

    // Where this topic stops > table > th
    "Titration calculations": "滴定計算",

    // Where this topic stops > table > td
    "Later: Reactivity 2.1 and 3.1": "之後才學：Reactivity 2.1 和 3.1",

    // Where this topic stops > table > th
    "Molar volume at STP, <i>PV</i> = <i>nRT</i>": "STP 下的摩爾體積、<i>PV</i> = <i>nRT</i>",

    // Where this topic stops > table > td
    "Next topic: Structure 1.5": "下一個課題：Structure 1.5",

    // Where this topic stops > table > th
    "ppm, molality, percentage by mass as a concentration, mole fraction": "ppm、質量摩爾濃度、以質量百分率表示的濃度、摩爾分數",

    // Where this topic stops > table > td
    "Not in the IB guide": "不在 IB 指南之內",

    // Where this topic stops > table > th
    "Old values: 22.4 dm<sup>3</sup> mol<sup>−1</sup>, “24 dm<sup>3</sup> at room temperature”": "舊數值：22.4 dm<sup>3</sup> mol<sup>−1</sup>、「常溫下 24 dm<sup>3</sup>」",

    // Where this topic stops > table > td
    "Not used. The data booklet gives 22.7 dm<sup>3</sup> mol<sup>−1</sup> at STP": "不使用。數據手冊給的是 STP 下 22.7 dm<sup>3</sup> mol<sup>−1</sup>",

    // Linking it up > data-toc attribute
    // Linking it up > h2
    "Linking it up": "把知識連繫起來",

    // Linking it up > p
    "The guide lists linking questions that connect this topic to others. Here are short answers to four of them.": "指南列出了一些連繫問題，把這個課題與其他課題連起來。以下是其中四題的簡短答案。",

    // Linking it up > h3
    "How can molar masses be used with chemical equations to determine the masses of the products of a reaction?": "怎樣把摩爾質量配合化學方程式，求出反應生成物的質量？",

    // Linking it up > p
    "An equation gives a ratio in moles, but a balance measures grams. So you convert the mass of a reactant to moles with its molar mass, use the mole ratio from the equation, then convert the moles of product back to a mass with the product’s molar mass. The two outer steps are from this topic. The full method is taught in Reactivity 2.1.": "方程式給出的是摩爾比，但天平量的是克。所以要先用反應物的摩爾質量把它的質量換算成摩爾，再用方程式的摩爾比，最後用生成物的摩爾質量把生成物的摩爾換算回質量。頭尾兩步來自這個課題。完整的方法在 Reactivity 2.1 學習。",

    // Linking it up > h3
    "What is the importance of approximation in the determination of an empirical formula?": "在求實驗式時，取近似值有甚麼重要性？",

    // Linking it up > p
    "Measured masses always carry some error, so the mole ratio never comes out as perfect whole numbers. You have to judge when 2.99 means 3. You also have to judge when a value is <em>not</em> an error: 1.50 or 1.33 are real ratios that must be multiplied up, not rounded. Good approximation means rounding small differences and respecting large ones.": "量度出來的質量總有誤差，所以摩爾比從來不會剛好是整數。你要判斷 2.99 甚麼時候代表 3。你也要判斷一個數值甚麼時候<em>不是</em>誤差：1.50 或 1.33 是真正的比，必須乘大，不可以取整。好的近似，就是把小的差距取整，同時尊重大的差距。",

    // Linking it up > h3
    "What are the considerations in the choice of glassware used in preparing a standard solution and a serial dilution?": "配製標準溶液和進行連續稀釋時，選擇玻璃儀器要考慮甚麼？",

    // Linking it up > p
    "The concentration is only as accurate as the volumes. A volumetric flask and a pipette are each made to deliver one volume very precisely, so they are used for the final volume and for the portion of stock solution. A beaker or measuring cylinder has a much larger uncertainty and is only used for rough work, such as dissolving the solid. In a serial dilution, any error in one step is carried into every later step, which makes precise glassware even more important.": "體積有多準確，濃度就有多準確。容量瓶和移液管各自只量度一個體積，但非常精密，所以用來量度最終體積和取用的那份儲備溶液。燒杯或量筒的不確定度大得多，只用於粗略的工作，例如溶解固體。在連續稀釋中，任何一步的誤差都會帶到之後的每一步，所以精密的玻璃儀器更加重要。",

    // Linking it up > h3
    "Avogadro’s law applies to ideal gases. Under what conditions might a real gas deviate most from an ideal gas?": "亞佛加德羅定律適用於理想氣體。真實氣體在甚麼條件下最偏離理想氣體？",

    // Linking it up > p
    "At low temperature and high pressure. Then the particles are close together and moving slowly, so the forces between them and the space the particles take up are no longer negligible. Topic 1.5 explains this.": "在低溫和高壓下。這時粒子靠得很近，而且運動得慢，所以粒子之間的作用力和粒子本身所佔的空間不再可以忽略。課題 1.5 會解釋這一點。",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "考試題型練習",

    // Exam-style practice > p
    "Work through the three levels in order. Use the three questions on every calculation, and write your working on paper before you type an answer. Each set draws questions you have not yet answered correctly first.": "按次序完成三個程度。每一道計算題都用那三個問題，並且先在紙上寫出計算步驟，才輸入答案。每一組都會先抽出你還未答對的題目。",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "基礎：每次一個概念",

    // Exam-style practice > data-title attribute
    "1.4 foundation": "1.4 基礎",

    // Exam-style practice > h3
    "Exam standard": "考試程度",

    // Exam-style practice > data-title attribute
    "1.4 exam standard": "1.4 考試程度",

    // Exam-style practice > h3
    "Challenge: level 7 stretch": "挑戰：邁向 7 級",

    // Exam-style practice > data-title attribute
    "1.4 challenge": "1.4 挑戰",

    // widget string (assets/js/widgets-s1-4.js)
    "Leave the charge off, or write it with ^ as in SO4^2-. A charge does not change the molar mass.": "不用寫電荷，或者用 ^ 來寫，例如 SO4^2-。電荷不會改變摩爾質量。",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a formula, for example H2O or Ca(OH)2.": "請輸入化學式，例如 H2O 或 Ca(OH)2。",

    // widget string (assets/js/widgets-s1-4.js)
    "Use capital letters for element symbols: write H2O, not h2o.": "元素符號要用大寫字母：寫 H2O，不是 h2o。",

    // widget string (assets/js/widgets-s1-4.js)
    "There is a closing bracket with no opening bracket.": "有一個右括號沒有對應的左括號。",

    // widget string (assets/js/widgets-s1-4.js)
    "Check the capital letters near “{ch}”. Each symbol starts with one capital letter.": "請檢查「{ch}」附近的大寫字母。每個元素符號都以一個大寫字母開頭。",

    // widget string (assets/js/widgets-s1-4.js)
    "I cannot read “{ch}” in a formula.": "化學式中的「{ch}」無法辨認。",

    // widget string (assets/js/widgets-s1-4.js)
    "“{sym}” is not an element symbol with a relative atomic mass in this tool. Check the spelling and the capital letters.": "這個工具沒有元素符號「{sym}」的相對原子質量。請檢查拼寫和大寫字母。",

    // widget string (assets/js/widgets-s1-4.js)
    "A bracket is not closed.": "有一個括號沒有關上。",

    // widget string (assets/js/widgets-s1-4.js)
    "Something is missing after the dot.": "點的後面缺了東西。",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution volumes are usually given in cm<sup>3</sup>. <i>n</i> = <i>CV</i> needs dm<sup>3</sup>. The gas equation in topic 1.5 needs m<sup>3</sup>. Going to a bigger unit makes the number smaller, so you divide.": "溶液的體積通常以 cm<sup>3</sup> 給出。<i>n</i> = <i>CV</i> 需要 dm<sup>3</sup>。課題 1.5 的氣體方程需要 m<sup>3</sup>。換成較大的單位，數字會變小，所以要除。",

    // widget string (assets/js/widgets-s1-4.js)
    "<i>n</i> = <i>m</i> ÷ <i>M</i> needs the mass in g, because <i>M</i> is in g mol<sup>−1</sup>. Going to a bigger unit makes the number smaller, so you divide.": "<i>n</i> = <i>m</i> ÷ <i>M</i> 需要以 g 表示的質量，因為 <i>M</i> 的單位是 g mol<sup>−1</sup>。換成較大的單位，數字會變小，所以要除。",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume": "體積",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass": "質量",

    // widget string (assets/js/widgets-s1-4.js)
    "Unit": "單位",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a number, for example 25.0.": "請輸入一個數，例如 25.0。",

    // widget string (assets/js/widgets-s1-4.js)
    "carbon dioxide": "二氧化碳",

    // widget string (assets/js/widgets-s1-4.js)
    "copper": "銅",

    // widget string (assets/js/widgets-s1-4.js)
    "iron": "鐵",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium chloride": "氯化鈉",

    // widget string (assets/js/widgets-s1-4.js)
    "Substance": "物質",

    // widget string (assets/js/widgets-s1-4.js)
    "{name} ({formula})": "{name} ({formula})",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of sample": "樣本的質量",

    // widget string (assets/js/widgets-s1-4.js)
    "Number line on a powers-of-ten scale from 1 to 10 to the power 24, marking the number of people on Earth, the number of seconds since the Big Bang, one mole, and the number of particles in your sample": "以 10 的次方為標度的數線，由 1 到 10 的 24 次方，標出地球上的人數、宇宙大爆炸至今的秒數、一摩爾，以及你的樣本的粒子數目",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount": "物質的量",

    // widget string (assets/js/widgets-s1-4.js)
    "Particles": "粒子",

    // widget string (assets/js/widgets-s1-4.js)
    "Inside them": "粒子之內",

    // widget string (assets/js/widgets-s1-4.js)
    "people on Earth": "地球上的人數",

    // widget string (assets/js/widgets-s1-4.js)
    "about {n}": "約 {n}",

    // widget string (assets/js/widgets-s1-4.js)
    "seconds since the Big Bang": "大爆炸至今的秒數",

    // widget string (assets/js/widgets-s1-4.js)
    "one mole": "一摩爾",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of molecules": "你的樣本：分子數目",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of atoms": "你的樣本：原子數目",

    // widget string (assets/js/widgets-s1-4.js)
    "your sample: number of formula units": "你的樣本：式單位數目",

    // widget string (assets/js/widgets-s1-4.js)
    "Each big tick is 1000 times the one before.": "每一大格是前一格的 1000 倍。",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} molecules": "{N} 個分子",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} atoms": "{N} 個原子",

    // widget string (assets/js/widgets-s1-4.js)
    "{N} formula units": "{N} 個式單位",

    // widget string (assets/js/widgets-s1-4.js)
    "each particle is one atom": "每個粒子就是一個原子",

    // widget string (assets/js/widgets-s1-4.js)
    "{per} ions each: {N} ions": "每個有 {per} 個離子：共 {N} 個離子",

    // widget string (assets/js/widgets-s1-4.js)
    "{per} atoms each: {N} atoms": "每個有 {per} 個原子：共 {N} 個原子",

    // widget string (assets/js/widgets-s1-4.js)
    "Counting one particle every second, one mole would take about {years} years. That is over a million times the age of the universe (about {age} years).": "每秒數一個粒子，數完一摩爾大約要 {years} 年。這是宇宙年齡（約 {age} 年）的一百萬倍以上。",

    // widget string (assets/js/widgets-s1-4.js)
    "If all 8 billion people counted together at that speed, it would still take about {n} million years.": "即使全球 80 億人 (8 billion) 一起用這個速度數，仍然要大約 {n} 百萬年。",

    // widget string (assets/js/widgets-s1-4.js)
    "Yet one mole of water molecules is only {m} g of water: about {v} cm<sup>3</sup>, a little more than a tablespoon.": "但一摩爾水分子只是 {m} g 水：約 {v} cm<sup>3</sup>，比一湯匙多一點。",

    // widget string (assets/js/widgets-s1-4.js)
    "Formula": "化學式",

    // widget string (assets/js/widgets-s1-4.js)
    "Or load an example": "或載入例子",

    // widget string (assets/js/widgets-s1-4.js)
    "Build the formula with buttons": "用按鈕砌出化學式",

    // widget string (assets/js/widgets-s1-4.js)
    "dot for water of crystallization": "代表結晶水的點",

    // widget string (assets/js/widgets-s1-4.js)
    "open bracket": "左括號",

    // widget string (assets/js/widgets-s1-4.js)
    "close bracket": "右括號",

    // widget string (assets/js/widgets-s1-4.js)
    "Delete": "刪除",

    // widget string (assets/js/widgets-s1-4.js)
    "Clear": "清除",

    // widget string (assets/js/widgets-s1-4.js)
    "Atoms in one formula unit": "一個式單位中的原子",

    // widget string (assets/js/widgets-s1-4.js)
    "Breakdown of {formula}": "{formula} 的分項計算",

    // widget string (assets/js/widgets-s1-4.js)
    "Element": "元素",

    // widget string (assets/js/widgets-s1-4.js)
    "Atoms": "原子數目",

    // widget string (assets/js/widgets-s1-4.js)
    "Subtotal": "小計",

    // widget string (assets/js/widgets-s1-4.js)
    "Total": "總和",

    // widget string (assets/js/widgets-s1-4.js)
    "{value} <span class=\"mole-unitnote\">(no units)</span>": "{value} <span class=\"mole-unitnote\">（沒有單位）</span>",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass (g)": "質量 (g)",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass / g": "質量 / g",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount (mol)": "物質的量 (mol)",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount / mol": "物質的量 / mol",

    // widget string (assets/js/widgets-s1-4.js)
    "Number of particles": "粒子數目",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution: concentration and volume": "溶液：濃度和體積",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration / mol dm<sup>−3</sup>": "濃度 / mol dm<sup>−3</sup>",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume at STP (dm³)": "STP 下的氣體體積 (dm³)",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume at STP / dm<sup>3</sup>": "STP 下的氣體體積 / dm<sup>3</sup>",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration (mol dm⁻³)": "濃度 (mol dm⁻³)",

    // widget string (assets/js/widgets-s1-4.js)
    "I am given": "已知的量",

    // widget string (assets/js/widgets-s1-4.js)
    "I want": "要求的量",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume of solution / cm<sup>3</sup>": "溶液的體積 / cm<sup>3</sup>",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume of solution made / cm<sup>3</sup>": "配成的溶液體積 / cm<sup>3</sup>",

    // widget string (assets/js/widgets-s1-4.js)
    "Substance (formula)": "物質（化學式）",

    // widget string (assets/js/widgets-s1-4.js)
    "The mole map: amount in moles in the centre, linked to mass, number of particles, solution concentration and volume, and gas volume at STP": "摩爾地圖：以摩爾表示的物質的量在中央，連接質量、粒子數目、溶液的濃度和體積，以及 STP 下的氣體體積",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass, m": "質量 m",

    // widget string (assets/js/widgets-s1-4.js)
    "Particles, N": "粒子 N",

    // widget string (assets/js/widgets-s1-4.js)
    "a number": "一個數目",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount, n": "物質的量 n",

    // widget string (assets/js/widgets-s1-4.js)
    "Solution, C and V": "溶液 C 和 V",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas volume, V": "氣體體積 V",

    // widget string (assets/js/widgets-s1-4.js)
    "dm³, at STP only": "dm³，只限 STP",

    // widget string (assets/js/widgets-s1-4.js)
    "to mol: C × V": "→ mol: C × V",

    // widget string (assets/js/widgets-s1-4.js)
    "to C: n ÷ V": "→ C: n ÷ V",

    // widget string (assets/js/widgets-s1-4.js)
    "to mol: ÷ 22.7": "→ mol: ÷ 22.7",

    // widget string (assets/js/widgets-s1-4.js)
    "to dm³: × 22.7": "→ dm³: × 22.7",

    // widget string (assets/js/widgets-s1-4.js)
    "Path": "路線",

    // widget string (assets/js/widgets-s1-4.js)
    "Answer": "答案",

    // widget string (assets/js/widgets-s1-4.js)
    "mass": "質量",

    // widget string (assets/js/widgets-s1-4.js)
    "amount": "物質的量",

    // widget string (assets/js/widgets-s1-4.js)
    "number of particles": "粒子數目",

    // widget string (assets/js/widgets-s1-4.js)
    "solution": "溶液",

    // widget string (assets/js/widgets-s1-4.js)
    "gas volume": "氣體體積",

    // widget string (assets/js/widgets-s1-4.js)
    "GIVEN": "已知",

    // widget string (assets/js/widgets-s1-4.js)
    "WANTED": "要求",

    // widget string (assets/js/widgets-s1-4.js)
    "via moles": "經摩爾",

    // widget string (assets/js/widgets-s1-4.js)
    "A solution to a concentration is one step: <i>C</i> = <i>n</i> ÷ <i>V</i>. Pick a different quantity to convert to.": "由溶液求濃度只需一步：<i>C</i> = <i>n</i> ÷ <i>V</i>。請選另一個要換算成的量。",

    // widget string (assets/js/widgets-s1-4.js)
    "Pick two different quantities.": "請選兩個不同的量。",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive number for the quantity you are given. You can write 1.5e22 or 1.5 × 10^22.": "請為已知的量輸入一個正數。可以寫成 1.5e22 或 1.5 × 10^22。",

    // widget string (assets/js/widgets-s1-4.js)
    "{error} The molar mass is needed whenever mass is involved.": "{error} 凡是涉及質量，都需要摩爾質量。",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the volume of the solution in cm<sup>3</sup>.": "請輸入溶液的體積，以 cm<sup>3</sup> 表示。",

    // widget string (assets/js/widgets-s1-4.js)
    "({sf} s.f.)": "（{sf} 位有效數字）",

    // widget string (assets/js/widgets-s1-4.js)
    "That is the number of molecules or formula units of {formula}. Each one contains {atoms} atoms, so the number of atoms is {atoms} × {N} = {total}.": "這是 {formula} 的分子或式單位的數目。每個含 {atoms} 個原子，所以原子數目是 {atoms} × {N} = {total}。",

    // widget string (assets/js/widgets-s1-4.js)
    "For an element written as a single atom, such as {formula}, the particles are atoms.": "寫成單個原子的元素（例如 {formula}），粒子就是原子。",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the volume of solution made, in cm<sup>3</sup>.": "請輸入配成的溶液體積，以 cm<sup>3</sup> 表示。",

    // widget string (assets/js/widgets-s1-4.js)
    "As a mass concentration of {formula}: {C} × {M} = {G}.": "以 {formula} 的質量濃度表示：{C} × {M} = {G}。",

    // widget string (assets/js/widgets-s1-4.js)
    "22.7 dm<sup>3</sup> mol<sup>−1</sup> is the molar volume of an ideal gas at STP (273.15 K and 100 kPa) from the data booklet. It works only for gases, only at STP. Topic 1.5 covers it.": "22.7 dm<sup>3</sup> mol<sup>−1</sup> 是數據手冊所給、理想氣體在 STP（273.15 K 和 100 kPa）下的摩爾體積。它只適用於氣體，而且只限 STP。課題 1.5 會講解。",

    // widget string (assets/js/widgets-s1-4.js)
    "The formula is not needed for this conversion. Molar mass only matters when mass is involved.": "這個換算不需要化學式。只有涉及質量時，才需要摩爾質量。",

    // widget string (assets/js/widgets-s1-4.js)
    "The answer is rounded to {sf} significant figures to match the value you typed. The working keeps extra digits until the end.": "答案取至 {sf} 位有效數字，與你輸入的數值一致。計算步驟會保留多出來的數字，到最後才取有效數字。",

    // widget string (assets/js/widgets-s1-4.js)
    "concentration": "濃度",

    // widget string (assets/js/widgets-s1-4.js)
    "{from} → {to} (one step)": "{from} → {to}（一步）",

    // widget string (assets/js/widgets-s1-4.js)
    "{from} → amount → {to} (two steps)": "{from} → 物質的量 → {to}（兩步）",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g gives {c} g CO₂ and {h} g H₂O": "{m} g 生成 {c} g CO₂ 和 {h} g H₂O",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g gives {c} g CO₂ and {h} g H₂O (a hydrocarbon)": "{m} g 生成 {c} g CO₂ 和 {h} g H₂O（烴）",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .5). Do not round it. Multiply every ratio by 2 to clear the fraction.": "除以最小的數後，得出的比不是整數（小數部分約是 .5）。不要取整。把每個比乘以 2，消去分數。",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .33 or .67). Do not round it. Multiply every ratio by 3 to clear the fraction.": "除以最小的數後，得出的比不是整數（小數部分約是 .33 或 .67）。不要取整。把每個比乘以 3，消去分數。",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .25 or .75). Do not round it. Multiply every ratio by 4 to clear the fraction.": "除以最小的數後，得出的比不是整數（小數部分約是 .25 或 .75）。不要取整。把每個比乘以 4，消去分數。",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .2, .4, .6 or .8). Do not round it. Multiply every ratio by 5 to clear the fraction.": "除以最小的數後，得出的比不是整數（小數部分約是 .2、.4、.6 或 .8）。不要取整。把每個比乘以 5，消去分數。",

    // widget string (assets/js/widgets-s1-4.js)
    "Dividing by the smallest gave a ratio that is not whole (it ends in about .17 or .83). Do not round it. Multiply every ratio by 6 to clear the fraction.": "除以最小的數後，得出的比不是整數（小數部分約是 .17 或 .83）。不要取整。把每個比乘以 6，消去分數。",

    // widget string (assets/js/widgets-s1-4.js)
    "Type of data": "數據類型",

    // widget string (assets/js/widgets-s1-4.js)
    "Masses or percentages": "質量或百分率",

    // widget string (assets/js/widgets-s1-4.js)
    "Combustion analysis": "燃燒分析",

    // widget string (assets/js/widgets-s1-4.js)
    "Values are": "數值是",

    // widget string (assets/js/widgets-s1-4.js)
    "percentages by mass": "質量百分率",

    // widget string (assets/js/widgets-s1-4.js)
    "masses in g": "以 g 表示的質量",

    // widget string (assets/js/widgets-s1-4.js)
    "Load an example": "載入例子",

    // widget string (assets/js/widgets-s1-4.js)
    "Elements and their values": "元素和數值",

    // widget string (assets/js/widgets-s1-4.js)
    "Element {n}": "元素 {n}",

    // widget string (assets/js/widgets-s1-4.js)
    "Value {n}": "數值 {n}",

    // widget string (assets/js/widgets-s1-4.js)
    "Combustion data": "燃燒數據",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of compound / g": "化合物的質量 / g",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of CO<sub>2</sub> formed / g": "生成的 CO<sub>2</sub> 質量 / g",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of H<sub>2</sub>O formed / g": "生成的 H<sub>2</sub>O 質量 / g",

    // widget string (assets/js/widgets-s1-4.js)
    "Molar mass, if known / g mol<sup>−1</sup> (optional)": "摩爾質量（如已知）/ g mol<sup>−1</sup>（可不填）",

    // widget string (assets/js/widgets-s1-4.js)
    "Empirical formula mass": "實驗式質量",

    // widget string (assets/js/widgets-s1-4.js)
    "“{sym}” is not an element symbol with a relative atomic mass in this tool. Check the spelling.": "這個工具沒有元素符號「{sym}」的相對原子質量。請檢查拼寫。",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive percentage for {sym}.": "請為 {sym} 輸入一個正的百分率。",

    // widget string (assets/js/widgets-s1-4.js)
    "Type a positive mass for {sym}.": "請為 {sym} 輸入一個正的質量。",

    // widget string (assets/js/widgets-s1-4.js)
    "{sym} appears twice. Give each element one row.": "{sym} 出現了兩次。每種元素只佔一行。",

    // widget string (assets/js/widgets-s1-4.js)
    "Enter at least two elements.": "請輸入最少兩種元素。",

    // widget string (assets/js/widgets-s1-4.js)
    "% by mass": "質量 %",

    // widget string (assets/js/widgets-s1-4.js)
    "Your percentages add up to {sum} %, not 100 %. If one element (often oxygen) is not given, find it by difference: 100 − the others.": "你的百分率加起來是 {sum} %，不是 100 %。如果有一種元素（通常是氧）沒有給出，就用減法求出：100 − 其他元素。",

    // widget string (assets/js/widgets-s1-4.js)
    "Percentages: imagine 100 g of the compound. Then {p} % means {p} g.": "百分率：想像有 100 g 化合物。那麼 {p} % 就是 {p} g。",

    // widget string (assets/js/widgets-s1-4.js)
    "Type the three masses in grams.": "請輸入三個質量，以克表示。",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of C = {calc}": "C 的質量 = {calc}",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of H = {calc}": "H 的質量 = {calc}",

    // widget string (assets/js/widgets-s1-4.js)
    "The carbon and hydrogen add up to more than the sample mass. Check the three masses.": "碳和氫的質量加起來超過了樣本的質量。請檢查三個質量。",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of O = {calc}": "O 的質量 = {calc}",

    // widget string (assets/js/widgets-s1-4.js)
    "mass of O = {calc}, which is zero within rounding": "O 的質量 = {calc}，在取近似值的誤差之內等於零",

    // widget string (assets/js/widgets-s1-4.js)
    "All the carbon ends up in CO<sub>2</sub> and all the hydrogen ends up in H<sub>2</sub>O. Oxygen cannot be found this way because extra oxygen came from the air, so it is found by difference.": "所有碳最後都在 CO<sub>2</sub> 裏，所有氫最後都在 H<sub>2</sub>O 裏。氧不能這樣求，因為有額外的氧來自空氣，所以要用減法求出。",

    // widget string (assets/js/widgets-s1-4.js)
    "All the carbon ends up in CO<sub>2</sub> and all the hydrogen ends up in H<sub>2</sub>O. Here they account for the whole sample, so there is no oxygen: the compound is a hydrocarbon.": "所有碳最後都在 CO<sub>2</sub> 裏，所有氫最後都在 H<sub>2</sub>O 裏。這裏碳和氫已佔了整個樣本，所以沒有氧：這種化合物是烴。",

    // widget string (assets/js/widgets-s1-4.js)
    "÷ smallest": "÷ 最小值",

    // widget string (assets/js/widgets-s1-4.js)
    "Whole number": "整數",

    // widget string (assets/js/widgets-s1-4.js)
    "The table method": "列表法",

    // widget string (assets/js/widgets-s1-4.js)
    "These ratios are not close to whole numbers, even after multiplying by 2, 3, 4, 5 or 6. Check the data, and check that no element is missing.": "即使乘以 2、3、4、5 或 6，這些比仍然不接近整數。請檢查數據，並檢查有沒有漏了元素。",

    // widget string (assets/js/widgets-s1-4.js)
    "Some ratios are a little away from whole numbers. Experimental data are never exact, so values within about 0.1 are rounded.": "有些比與整數有少許差別。實驗數據從來不會完全準確，所以相差約 0.1 以內的數值會取整。",

    // widget string (assets/js/widgets-s1-4.js)
    "empirical formula = {formula}": "實驗式 = {formula}",

    // widget string (assets/js/widgets-s1-4.js)
    "empirical formula mass = {calc}": "實驗式質量 = {calc}",

    // widget string (assets/js/widgets-s1-4.js)
    "<i>M</i> ÷ empirical formula mass = {calc}": "<i>M</i> ÷ 實驗式質量 = {calc}",

    // widget string (assets/js/widgets-s1-4.js)
    "molecular formula = the empirical formula = {formula}": "分子式 = 實驗式 = {formula}",

    // widget string (assets/js/widgets-s1-4.js)
    "molecular formula = {calc}": "分子式 = {calc}",

    // widget string (assets/js/widgets-s1-4.js)
    "That is not close to a whole number, so this molar mass does not fit this empirical formula. Check both.": "這個數不接近整數，所以這個摩爾質量與這個實驗式不相符。請檢查兩者。",

    // widget string (assets/js/widgets-s1-4.js)
    "needs the molar mass": "需要摩爾質量",

    // widget string (assets/js/widgets-s1-4.js)
    "the mark": "刻度線",

    // widget string (assets/js/widgets-s1-4.js)
    "hydrated copper(II) sulfate": "水合硫酸銅(II)",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium carbonate": "碳酸鈉",

    // widget string (assets/js/widgets-s1-4.js)
    "sodium hydroxide": "氫氧化鈉",

    // widget string (assets/js/widgets-s1-4.js)
    "Task": "任務",

    // widget string (assets/js/widgets-s1-4.js)
    "Make a standard solution": "配製標準溶液",

    // widget string (assets/js/widgets-s1-4.js)
    "Dilute a stock solution": "稀釋儲備溶液",

    // widget string (assets/js/widgets-s1-4.js)
    "Solute": "溶質",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass of solute": "溶質的質量",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask": "容量瓶",

    // widget string (assets/js/widgets-s1-4.js)
    "Stock concentration, C₁": "儲備溶液濃度 C₁",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume taken by pipette, V₁": "移液管量取的體積 V₁",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask, V₂": "容量瓶 V₂",

    // widget string (assets/js/widgets-s1-4.js)
    "Volumetric flask filled to the graduation mark": "加水至刻度線的容量瓶",

    // widget string (assets/js/widgets-s1-4.js)
    "Amount of solute": "溶質的物質的量",

    // widget string (assets/js/widgets-s1-4.js)
    "Molar concentration": "摩爾濃度",

    // widget string (assets/js/widgets-s1-4.js)
    "Mass concentration": "質量濃度",

    // widget string (assets/js/widgets-s1-4.js)
    "{m} g of solute": "{m} g 溶質",

    // widget string (assets/js/widgets-s1-4.js)
    "weighed on a balance": "用天平稱量",

    // widget string (assets/js/widgets-s1-4.js)
    "dissolve,": "溶解，",

    // widget string (assets/js/widgets-s1-4.js)
    "make up": "加水",

    // widget string (assets/js/widgets-s1-4.js)
    "to the mark": "至刻度線",

    // widget string (assets/js/widgets-s1-4.js)
    "{v} cm³ flask": "{v} cm³ 容量瓶",

    // widget string (assets/js/widgets-s1-4.js)
    "blue solution": "藍色溶液",

    // widget string (assets/js/widgets-s1-4.js)
    "colourless solution": "無色溶液",

    // widget string (assets/js/widgets-s1-4.js)
    "A balance with {m} g of {name} and a {v} cm3 volumetric flask filled to the graduation mark": "天平上有 {m} g {name}，旁邊是加水至刻度線的 {v} cm3 容量瓶",

    // widget string (assets/js/widgets-s1-4.js)
    "mass concentration = {calc}": "質量濃度 = {calc}",

    // widget string (assets/js/widgets-s1-4.js)
    "The solid weighed is the hydrate, so its molar mass includes the five waters. One mole of the hydrate gives one mole of CuSO<sub>4</sub> in solution. Check: {C} × {M} = {G}.": "稱量的固體是水合物，所以它的摩爾質量包括那五個水分子。一摩爾水合物在溶液中給出一摩爾 CuSO<sub>4</sub>。檢查：{C} × {M} = {G}。",

    // widget string (assets/js/widgets-s1-4.js)
    "Check: {C} × {M} = {G}.": "檢查：{C} × {M} = {G}。",

    // widget string (assets/js/widgets-s1-4.js)
    "{G} <span class=\"mole-unitnote\">(of hydrate)</span>": "{G} <span class=\"mole-unitnote\">（以水合物計）</span>",

    // widget string (assets/js/widgets-s1-4.js)
    "stock solution": "儲備溶液",

    // widget string (assets/js/widgets-s1-4.js)
    "pipette": "移液管",

    // widget string (assets/js/widgets-s1-4.js)
    "add water": "加水",

    // widget string (assets/js/widgets-s1-4.js)
    "A beaker of stock solution, and a {v} cm3 volumetric flask holding the paler diluted solution": "一個盛有儲備溶液的燒杯，以及一個 {v} cm3 容量瓶，瓶內是顏色較淺的稀釋溶液",

    // widget string (assets/js/widgets-s1-4.js)
    "dilution factor = {calc}": "稀釋倍數 = {calc}",

    // widget string (assets/js/widgets-s1-4.js)
    "The amount of solute does not change: {n} mol leaves the pipette and {n} mol is in the flask. Only the volume changes. The volumes can stay in cm<sup>3</sup> here because the same unit is on both sides.": "溶質的物質的量不變：{n} mol 離開移液管，容量瓶裏也是 {n} mol。只有體積改變。這裏體積可以繼續用 cm<sup>3</sup>，因為等號兩邊的單位相同。",

    // widget string (assets/js/widgets-s1-4.js)
    "diluted {factor} times": "稀釋了 {factor} 倍",

    // widget string (assets/js/widgets-s1-4.js)
    "Absorbance of the unknown": "未知溶液的吸光度",

    // widget string (assets/js/widgets-s1-4.js)
    "Calibration curve: absorbance against concentration for six standard solutions, with a straight line of best fit": "校準曲線：六份標準溶液的吸光度對濃度的圖，附有一條最佳擬合直線",

    // widget string (assets/js/widgets-s1-4.js)
    "Absorbance measured": "量度到的吸光度",

    // widget string (assets/js/widgets-s1-4.js)
    "Concentration read from the line": "從線上讀出的濃度",

    // widget string (assets/js/widgets-s1-4.js)
    "concentration / mol dm⁻³": "濃度 / mol dm⁻³",

    // widget string (assets/js/widgets-s1-4.js)
    "absorbance": "吸光度",

    // widget string (assets/js/widgets-s1-4.js)
    "Reaction": "反應",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas whose volume you set": "由你設定體積的氣體",

    // widget string (assets/js/widgets-s1-4.js)
    "Its volume": "它的體積",

    // widget string (assets/js/widgets-s1-4.js)
    "Boxes of gas whose heights are in proportion to the reacting volumes": "幾個氣體方格，高度與反應氣體的體積成比例",

    // widget string (assets/js/widgets-s1-4.js)
    "Volume ratio of the gases": "氣體的體積比",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas before": "反應前的氣體",

    // widget string (assets/js/widgets-s1-4.js)
    "Gas after": "反應後的氣體",

    // widget string (assets/js/widgets-s1-4.js)
    "liquid:": "液體：",

    // widget string (assets/js/widgets-s1-4.js)
    "not a gas": "不是氣體",

    // widget string (assets/js/widgets-s1-4.js)
    "you set this": "由你設定",

    // widget string (assets/js/widgets-s1-4.js)
    "Same temperature and pressure, so the volume ratio of the gases equals the mole ratio in the equation. Multiply by (coefficient wanted ÷ coefficient given).": "溫度和壓強相同，所以氣體的體積比等於方程式中的摩爾比。乘以（要求氣體的系數 ÷ 已知氣體的系數）。",

    // widget string (assets/js/widgets-s1-4.js)
    "The water is a liquid here. Its volume is tiny compared with the gases, and Avogadro’s law applies to gases only, so it is left out of the gas volumes.": "這裏的水是液體。與氣體相比，它的體積極小，而且亞佛加德羅定律只適用於氣體，所以氣體體積不包括水。",

    // widget string (assets/js/widgets-s1-4.js)
    "Total gas volume: {before} of reactants becomes {after} of product. Here the total stays the same, because the equation has the same number of gas molecules on each side. That is not true for most reactions.": "氣體總體積：{before} 的反應物變成 {after} 的生成物。這裏總體積不變，因為方程式兩邊的氣體分子數目相同。大部分反應並不是這樣。",

    // widget string (assets/js/widgets-s1-4.js)
    "Total gas volume: {before} of reactants becomes {after} of product. Volume is not conserved, because the number of gas molecules changes. Mass is conserved.": "氣體總體積：{before} 的反應物變成 {after} 的生成物。體積並不守恆，因為氣體分子的數目改變了。質量則守恆。",

  }
});
