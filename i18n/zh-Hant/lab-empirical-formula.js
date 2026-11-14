/* lab-empirical-formula — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-empirical-formula', {
  strings: {

    // page title (browser tab)
    "Lab 5 Finding an empirical formula by experiment | Structure Lab": "實驗 5 以實驗求出實驗式 | Structure Lab",

    // Finding an empirical formula by experiment > page header > p
    "Lab 5 · Structure 1.4": "實驗 5 · Structure 1.4",

    // Finding an empirical formula by experiment > page header > h1
    "Finding an empirical formula by experiment": "以實驗求出實驗式",

    // Finding an empirical formula by experiment > page header > span
    "How can the change in mass when a substance is burned or heated tell us the formula of a compound?": "物質燃燒或受熱時的質量變化，怎樣告訴我們化合物的化學式？",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "This lab has two parts. In part A you burn magnesium to find the formula of magnesium oxide. In part B you heat a hydrated salt to find how much water of crystallization it holds. Tick each skill when you can do it without notes.": "這個實驗分為兩部分。在 A 部分，你燃燒鎂，求出氧化鎂的化學式。在 B 部分，你加熱一種水合鹽，求出它含有多少結晶水。當你不用看筆記也做得到某項技巧時，就剔選它。",

    // What you need to be able to do > checklist > span
    "Describe how to burn magnesium in a crucible so that oxygen gets in but no product escapes.": "描述怎樣在坩堝中燃燒鎂，使氧氣可以進入，但生成物不會散失。",

    // What you need to be able to do > checklist > span
    "Explain what “heating to constant mass” means and why it is needed.": "解釋「加熱至質量不變」的意思，以及為甚麼需要這樣做。",

    // What you need to be able to do > checklist > span
    "Find the value of <i>x</i> in a hydrated salt from the mass lost on heating.": "從加熱時失去的質量，求出水合鹽中 <i>x</i> 的數值。",

    // What you need to be able to do > checklist > span
    "Turn mass data into amounts in moles and then into a simple whole-number ratio.": "把質量數據轉化為以摩爾表示的物質的量，再轉化為簡單整數比。",

    // What you need to be able to do > checklist > span
    "Decide when a ratio such as 0.93 can be rounded to 1, and when a ratio such as 1.5 must be multiplied up.": "判斷甚麼時候可以把 0.93 這類比值取整數為 1，甚麼時候必須把 1.5 這類比值乘大。",

    // What you need to be able to do > checklist > span
    "Use the masses of carbon dioxide and water from a combustion to find an empirical formula.": "用燃燒產生的二氧化碳和水的質量求出實驗式。",

    // What you need to be able to do > checklist > span
    "Propagate balance uncertainties through a mass difference and a ratio, and compare the result with the expected formula.": "把天平的不確定度傳遞到質量差和比值中，並把結果與預期的化學式比較。",

    // What you need to be able to do > checklist > span
    "Say how each common error changes the result, and suggest a realistic improvement.": "說明每種常見誤差怎樣改變結果，並提出切實可行的改進方法。",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "背後的化學",

    // The chemistry behind it > p
    "An <dfn data-def=\"The simplest whole-number ratio of the atoms of each element in a compound.\">empirical formula</dfn> gives the simplest whole-number ratio of atoms in a compound. To find it, you need the mass of each element in a sample. Then <i>n</i> = <i>m</i> ÷ <i>M</i> turns each mass into an amount in moles, and the ratio of the amounts is the ratio of the atoms. The full method is on the topic page: <a href=\"../topics/s1-4.html#formulas\">Empirical and molecular formulas</a>.": "<dfn data-def=\"化合物中各元素原子的最簡整數比。\">實驗式 <span class=\"en-term\">(empirical formula)</span></dfn>表示化合物中原子的最簡整數比。要求出實驗式，你需要知道樣本中每種元素的質量。然後用 <i>n</i> = <i>m</i> ÷ <i>M</i> 把每個質量轉化為以摩爾表示的物質的量，物質的量之比就是原子數目之比。完整的方法見課題頁：<a href=\"../topics/s1-4.html#formulas\">實驗式和分子式</a>。",

    // The chemistry behind it > data-def attribute
    "The simplest whole-number ratio of the atoms of each element in a compound.": "化合物中各元素原子的最簡整數比。",

    // The chemistry behind it > h3
    "Part A: magnesium burning in air": "A 部分：鎂在空氣中燃燒",

    // The chemistry behind it > p
    "When magnesium burns, it combines with oxygen from the air. The solid gets <strong>heavier</strong>, because the oxygen atoms now sit in the solid product.": "鎂燃燒時，與空氣中的氧化合。固體變得<strong>較重</strong>，因為氧原子現在處於固體生成物中。",

    // The chemistry behind it > p
    "<span class=\"chem\">2Mg(s) + O2(g) -&gt; 2MgO(s)</span>": "<span class=\"chem\">2Mg(s) + O2(g) -&gt; 2MgO(s)</span>",

    // The chemistry behind it > p
    "So you weigh the magnesium before, and the oxide after. The increase in mass is the mass of oxygen that combined.": "所以你要在反應前稱量鎂，在反應後稱量氧化物。增加的質量就是與鎂化合的氧的質量。",

    // The chemistry behind it > h3
    "Part B: driving off water of crystallization": "B 部分：除去結晶水",

    // The chemistry behind it > p
    "Many salts form crystals with water molecules built into the lattice. This is <dfn data-def=\"Water molecules that are part of the crystal lattice of a salt, in a fixed ratio to the formula unit.\">water of crystallization</dfn>. Blue hydrated copper(II) sulfate loses this water on gentle heating and turns into a white powder.": "很多鹽形成的晶體中，晶格內含有水分子。這就是<dfn data-def=\"鹽的晶格中的一部分水分子，與式單位成固定的比例。\">結晶水 <span class=\"en-term\">(water of crystallization)</span></dfn>。藍色的水合硫酸銅(II) 受溫和加熱時會失去這些水，變成白色粉末。",

    // The chemistry behind it > data-def attribute
    "Water molecules that are part of the crystal lattice of a salt, in a fixed ratio to the formula unit.": "鹽的晶格中的一部分水分子，與式單位成固定的比例。",

    // The chemistry behind it > p
    "<span class=\"chem\">CuSO4.xH2O(s) -&gt; CuSO4(s) + xH2O(g)</span>": "<span class=\"chem\">CuSO4.xH2O(s) -&gt; CuSO4(s) + xH2O(g)</span>",

    // The chemistry behind it > p
    "This time the solid gets <strong>lighter</strong>. The loss in mass is the mass of water. The mass left is the anhydrous salt.": "這次固體變得<strong>較輕</strong>。失去的質量就是水的質量。剩下的質量是無水鹽的質量。",

    // The chemistry behind it > key idea > p
    "In both parts, the balance cannot see atoms. It sees mass. The whole method rests on knowing which change in mass belongs to which substance: a gain of oxygen in part A, a loss of water in part B.": "在兩個部分中，天平都看不見原子，只看見質量。整個方法建基於知道哪一個質量變化屬於哪一種物質：A 部分增加了氧，B 部分失去了水。",

    // The chemistry behind it > h3
    "Linking question: combustion data": "連繫問題：燃燒數據",

    // The chemistry behind it > p
    "The same idea works for compounds of carbon and hydrogen. Burn a known mass completely in excess oxygen and collect the products. All the carbon ends up in <span class=\"chem\">CO2</span> and all the hydrogen in <span class=\"chem\">H2O</span>. So <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>) and <i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>). If the compound also contains oxygen, its mass is found by difference. You will meet one of these in the exam practice.": "同一個概念也適用於碳和氫的化合物。把已知質量的化合物在過量氧氣中完全燃燒，並收集生成物。所有碳最後都在 <span class=\"chem\">CO2</span> 中，所有氫都在 <span class=\"chem\">H2O</span> 中。所以 <i>n</i>(C) = <i>n</i>(<span class=\"chem\">CO2</span>)，<i>n</i>(H) = 2 × <i>n</i>(<span class=\"chem\">H2O</span>)。如果化合物還含有氧，氧的質量用相減法求出。你會在考試練習中遇到這類題目。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的、變量和安全",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> To find the empirical formula of magnesium oxide, and the value of <i>x</i> in <span class=\"chem\">CuSO4.xH2O</span>, from measured masses.": "<strong>目的。</strong>從量得的質量，求出氧化鎂的實驗式，以及 <span class=\"chem\">CuSO4.xH2O</span> 中 <i>x</i> 的數值。",

    // Aim, variables and safety > p
    "These are measurements, not investigations of a cause and effect, so there is no independent variable to change. What matters is what you measure and what you keep the same.": "這些是量度，不是因果關係的探究，所以沒有要改變的自變量。重要的是你量度甚麼，以及保持甚麼不變。",

    // Aim, variables and safety > table > caption
    "Variables in the two parts": "兩個部分的變量",

    // Aim, variables and safety > table > th
    "Variable": "變量",

    // Aim, variables and safety > table > th
    // Method > h3
    "Part A: magnesium oxide": "A 部分：氧化鎂",

    // Aim, variables and safety > table > th
    "Part B: hydrated salt": "B 部分：水合鹽",

    // Aim, variables and safety > table > th
    "Measured": "量度",

    // Aim, variables and safety > table > td
    "Mass of crucible and lid; with magnesium; with the oxide after each heating": "坩堝和蓋的質量；加入鎂後的質量；每次加熱後連氧化物的質量",

    // Aim, variables and safety > table > td
    "Mass of crucible; with the hydrate; after each heating": "坩堝的質量；加入水合物後的質量；每次加熱後的質量",

    // Aim, variables and safety > table > th
    "Calculated": "計算",

    // Aim, variables and safety > table > td
    "Mass of magnesium, mass of oxygen, mole ratio Mg : O": "鎂的質量、氧的質量、摩爾比 Mg : O",

    // Aim, variables and safety > table > td
    "Mass of anhydrous salt, mass of water, value of <i>x</i>": "無水鹽的質量、水的質量、<i>x</i> 的數值",

    // Aim, variables and safety > table > th
    "Controlled": "控制變量",

    // Aim, variables and safety > table > td
    "Same balance for every reading; same crucible and lid; heat until the mass is constant": "每個讀數都用同一個天平；同一個坩堝和蓋；加熱至質量不變",

    // Aim, variables and safety > table > td
    "Same balance; same crucible; gentle heating; cool the same way before every weighing": "同一個天平；同一個坩堝；溫和加熱；每次稱量前都用相同的方法冷卻",

    // Aim, variables and safety > h3
    "Equipment": "儀器",

    // Aim, variables and safety > li
    "Porcelain crucible with lid, pipeclay triangle, tripod, heatproof mat, Bunsen burner, crucible tongs": "有蓋的瓷坩堝、泥三角、三腳架、隔熱墊、本生燈、坩堝鉗",

    // Aim, variables and safety > li
    "Balance reading to 0.01 g (or 0.001 g if available)": "讀數至 0.01 g 的天平（如有，用讀數至 0.001 g 的天平）",

    // Aim, variables and safety > li
    "About 25 cm of magnesium ribbon, cleaned with emery paper to remove the dull oxide layer": "約 25 cm 鎂帶，用砂紙擦去表面暗啞的氧化物層",

    // Aim, variables and safety > li
    "About 2.5 g of hydrated copper(II) sulfate crystals; a desiccator for cooling if available": "約 2.5 g 水合硫酸銅(II) 晶體；如有，用乾燥器冷卻",

    // Aim, variables and safety > p
    "Wear eye protection throughout. Burning magnesium gives out a very bright white light that includes ultraviolet: do not look straight at it, and lift the lid only a little, with tongs. The crucible, lid, triangle and tripod stay hot long after they stop glowing, so move them only with tongs and let them cool on the heatproof mat. Keep the rest of the magnesium ribbon away from the flame. Copper(II) sulfate is harmful if swallowed and irritates the eyes and skin; wash your hands after use and put the residue in the waste container, not the sink, because it is toxic to aquatic life. Do not heat copper(II) sulfate strongly: above about 600 °C it decomposes and gives off sulfur trioxide, which is corrosive.": "整個實驗都要戴上護目鏡。燃燒的鎂發出非常強烈的白光，其中含有紫外光：不要直視，並只用坩堝鉗把蓋子略為揭起。坩堝、蓋、泥三角和三腳架在停止發光後很久仍然很熱，所以只可以用鉗子移動它們，並讓它們在隔熱墊上冷卻。把其餘的鎂帶遠離火焰。硫酸銅(II) 吞服有害，並會刺激眼睛和皮膚；使用後要洗手，殘餘物要放進廢物容器，不要倒進水槽，因為它對水中生物有毒。不要強熱硫酸銅(II)：在約 600 °C 以上，它會分解並放出有腐蝕性的三氧化硫。",

    // Method > h2
    "Method": "方法",

    // Method > li
    "Heat the empty crucible and lid for a minute, let them cool, then weigh them together. <span class=\"muted\">This drives off any moisture, so the first reading is a true starting mass.</span>": "把空坩堝和蓋加熱一分鐘，讓它們冷卻，然後一起稱量。<span class=\"muted\">這樣可以除去任何水分，使第一個讀數是真正的起始質量。</span>",

    // Method > li
    "Coil the cleaned magnesium ribbon loosely, put it in the crucible, and weigh crucible, lid and magnesium together.": "把清潔的鎂帶鬆鬆地捲起，放進坩堝，然後把坩堝、蓋和鎂一起稱量。",

    // Method > li
    "Put the crucible on the pipeclay triangle with the lid on. Heat gently at first, then strongly.": "把坩堝放在泥三角上，蓋上蓋子。先溫和加熱，然後強熱。",

    // Method > li
    "Every minute or so, lift the lid slightly with tongs for a moment, then put it back. <span class=\"muted\">Lifting lets fresh air in, so there is oxygen for the reaction. Putting it back stops the white smoke of magnesium oxide escaping.</span>": "每隔大約一分鐘，用坩堝鉗把蓋子略為揭起片刻，然後蓋回。<span class=\"muted\">揭起蓋子讓新鮮空氣進入，使反應有氧氣。蓋回蓋子可以防止氧化鎂的白煙散失。</span>",

    // Method > li
    "When the magnesium no longer glows when the lid is lifted, take the lid off and heat strongly for two more minutes.": "揭起蓋子時鎂不再發光，就把蓋子拿走，再強熱兩分鐘。",

    // Method > li
    "Let everything cool, then weigh crucible, lid and contents.": "讓所有東西冷卻，然後稱量坩堝、蓋和內容物。",

    // Method > li
    "Heat again for two minutes, cool and reweigh. Repeat until two readings in a row agree to within 0.01 g. <span class=\"muted\">This is heating to constant mass. It shows that the reaction is complete.</span>": "再加熱兩分鐘，冷卻後再稱量。重複，直至連續兩個讀數相差在 0.01 g 之內。<span class=\"muted\">這就是加熱至質量不變。它顯示反應已經完成。</span>",

    // Method > h3
    "Part B: hydrated copper(II) sulfate": "B 部分：水合硫酸銅(II)",

    // Method > li
    "Weigh a clean, dry crucible.": "稱量一個清潔乾燥的坩堝。",

    // Method > li
    "Add about 2.5 g of the blue crystals and weigh again.": "加入約 2.5 g 藍色晶體，再稱量。",

    // Method > li
    "Heat gently, with the lid off, stirring now and then with a glass rod. <span class=\"muted\">Gentle heating stops the crystals spitting out, and stops the anhydrous salt decomposing.</span>": "不蓋蓋子溫和加熱，間中用玻璃棒攪拌。<span class=\"muted\">溫和加熱可以防止晶體濺出，也可以防止無水鹽分解。</span>",

    // Method > li
    "When the solid is white all through, let it cool in a desiccator, then weigh. <span class=\"muted\">Anhydrous copper(II) sulfate takes water back from the air, so it should not cool on the open bench.</span>": "固體完全變成白色後，讓它在乾燥器中冷卻，然後稱量。<span class=\"muted\">無水硫酸銅(II) 會從空氣中重新吸收水分，所以不應放在敞開的實驗枱上冷卻。</span>",

    // Method > li
    "Heat, cool and weigh again until two readings agree to within 0.01 g.": "加熱、冷卻和稱量，重複至兩個讀數相差在 0.01 g 之內。",

    // Method > exam tip (shown in English + translation) > p
    "“Heat to constant mass” earns its mark only with the detail: heat, cool, weigh, and <strong>repeat until two consecutive masses are the same</strong> (within the balance’s precision). Then say why: all the magnesium has reacted, or all the water has been removed.": "「加熱至質量不變」要寫出細節才能得分：加熱、冷卻、稱量，並<strong>重複至連續兩個質量相同</strong>（在天平的精密度之內）。然後說明原因：所有鎂都已反應，或所有水都已除去。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "進行實驗",

    // Run the experiment > p
    "Each run uses a new piece of apparatus and a new sample, so your readings change a little from run to run, just as in a real lab. Work through the buttons from left to right. Write your readings down, or copy the raw data table, before you process them.": "每次實驗都用一套新的儀器和一份新的樣本，所以每次的讀數都會稍有不同，就像在真正的實驗室一樣。由左至右逐個按鈕操作。處理數據之前，先把讀數寫下，或複製原始數據表。",

    // Run the experiment > widget > data-title attribute
    "Part A: burning magnesium in a crucible": "A 部分：在坩堝中燃燒鎂",

    // Run the experiment > widget > figcaption
    "Choose how you use the lid and which balance you have, then weigh, add the magnesium and heat until the mass stops changing. Try the “lid left off” and “lid never lifted” options to see what each error does to the ratio.": "選擇怎樣使用蓋子和用哪一個天平，然後稱量、加入鎂，並加熱至質量不再改變。試試「不蓋蓋子」和「從不揭起蓋子」兩個選項，看看每種誤差對比值有甚麼影響。",

    // Run the experiment > widget > data-title attribute
    "Part B: heating hydrated copper(II) sulfate": "B 部分：加熱水合硫酸銅(II)",

    // Run the experiment > widget > figcaption
    "Heat gently and cool in a desiccator for a good result. Then try strong heating, or cooling on the open bench, and see why the mass never settles or why <i>x</i> comes out wrong.": "溫和加熱，並在乾燥器中冷卻，可以得到好的結果。然後試試強熱，或在敞開的實驗枱上冷卻，看看為甚麼質量一直不能穩定，或為甚麼 <i>x</i> 的數值錯誤。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "處理數據",

    // Processing the data > p
    "The route is always the same: masses of each part, then amounts in moles, then divide by the smallest amount, then a whole-number ratio. Use the data booklet <i>A</i><sub>r</sub> values: Mg = 24.31, O = 16.00, H = 1.01, S = 32.07, Cu = 63.55.": "步驟總是一樣：各部分的質量，然後是以摩爾表示的物質的量，然後除以最小的物質的量，最後得出整數比。使用數據手冊的 <i>A</i><sub>r</sub> 數值：Mg = 24.31、O = 16.00、H = 1.01、S = 32.07、Cu = 63.55。",

    // Processing the data > worked example > h3
    "The formula of magnesium oxide": "氧化鎂的化學式",

    // Processing the data > worked example > p
    "A student records these readings on a balance that reads to 0.01 g.": "某學生用一個讀數至 0.01 g 的天平記錄了以下讀數。",

    // Processing the data > worked example > table > caption
    "Part A raw data": "A 部分原始數據",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reading": "讀數",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Mass / g": "質量 / g",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and lid": "坩堝和蓋",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible, lid and magnesium": "坩堝、蓋和鎂",

    // Processing the data > worked example > table > th
    "After heating 1": "第 1 次加熱後",

    // Processing the data > worked example > table > th
    "After heating 2": "第 2 次加熱後",

    // Processing the data > worked example > table > th
    "After heating 3": "第 3 次加熱後",

    // Processing the data > worked example > p
    "Determine the empirical formula of magnesium oxide.": "求出 (determine) 氧化鎂的實驗式。",

    // Processing the data > worked example > data-title attribute
    "Find the mass of each element": "求出每種元素的質量",

    // Processing the data > worked example > p
    "Use the last, constant reading. The gain in mass is the oxygen that combined.": "用最後一個不變的讀數。增加的質量就是化合了的氧。",

    // Processing the data > worked example > maths line
    "mass of Mg = 26.78 g − 26.42 g = 0.36 g": "Mg 的質量 = 26.78 g − 26.42 g = 0.36 g",

    // Processing the data > worked example > maths line
    "mass of O = 27.00 g − 26.78 g = 0.22 g": "O 的質量 = 27.00 g − 26.78 g = 0.22 g",

    // Processing the data > worked example > data-title attribute
    "Convert each mass to moles": "把每個質量換算成摩爾",

    // Processing the data > worked example > p
    "Atoms combine in a ratio of numbers, not of masses, so use <i>n</i> = <i>m</i> ÷ <i>M</i> for each element.": "原子按數目的比例化合，而不是按質量的比例，所以每種元素都要用 <i>n</i> = <i>m</i> ÷ <i>M</i>。",

    // Processing the data > worked example > data-title attribute
    "Divide by the smaller amount": "除以較小的物質的量",

    // Processing the data > worked example > p
    "This makes the smaller number exactly 1, so the ratio is easy to read.": "這樣較小的數值剛好是 1，比值就容易讀出。",

    // Processing the data > worked example > maths line
    "or, as O ÷ Mg: 0.01375 ÷ 0.01481 = 0.93": "或以 O ÷ Mg 表示：0.01375 ÷ 0.01481 = 0.93",

    // Processing the data > worked example > data-title attribute
    "Judge the whole-number ratio": "判斷整數比",

    // Processing the data > worked example > p
    "1.08 : 1 is close to 1 : 1. The gap is small enough to be experimental error (see the uncertainty section). It is not close to a real ratio such as 3 : 2 = 1.5 : 1.": "1.08 : 1 接近 1 : 1。差距小得可以是實驗誤差（見不確定度一節）。它並不接近 3 : 2 = 1.5 : 1 這類真正的比值。",

    // Processing the data > worked example > maths line
    "Mg : O ≈ 1 : 1, so the empirical formula is <b>MgO</b>": "Mg : O ≈ 1 : 1，所以實驗式是 <b>MgO</b>",

    // Processing the data > worked example > p
    "<span class=\"chem\">MgO</span> (measured ratio Mg : O = 1.08 : 1)": "<span class=\"chem\">MgO</span>（量得的比值 Mg : O = 1.08 : 1）",

    // Processing the data > common mistake > p
    "Using the masses directly (0.36 : 0.22) instead of moles gives a ratio that means nothing. Another slip is to take the mass of oxygen from the first heating reading. Always use the reading where the mass has become constant.": "直接用質量 (0.36 : 0.22) 而不用摩爾，得出的比值沒有意義。另一種失誤是用第一次加熱後的讀數計算氧的質量。一定要用質量已經不變的讀數。",

    // Processing the data > h3
    "Now you: the value of <i>x</i> in a hydrate": "現在輪到你：水合物中 <i>x</i> 的數值",

    // Processing the data > p
    "For a hydrate, the two “parts” are the anhydrous salt and the water. Treat <span class=\"chem\">CuSO4</span> as one unit with <i>M</i> = 159.62 g mol<sup>−1</sup>, and water with <i>M</i> = 18.02 g mol<sup>−1</sup>. Then <i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>).": "對於水合物，兩個「部分」是無水鹽和水。把 <span class=\"chem\">CuSO4</span> 視為一個單位，<i>M</i> = 159.62 g mol<sup>−1</sup>；水的 <i>M</i> = 18.02 g mol<sup>−1</sup>。然後 <i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>)。",

    // Processing the data > try it > p
    "A student heats hydrated copper(II) sulfate. Crucible: 18.47 g. Crucible and hydrate: 21.03 g. After heating: 20.25 g, 20.14 g, 20.12 g, 20.12 g. Calculate the value of <i>x</i> in <span class=\"chem\">CuSO4.xH2O</span> from these data, before rounding to a whole number.": "某學生加熱水合硫酸銅(II)。坩堝：18.47 g。坩堝和水合物：21.03 g。加熱後：20.25 g、20.14 g、20.12 g、20.12 g。從這些數據計算 <span class=\"chem\">CuSO4.xH2O</span> 中 <i>x</i> 的數值，先不要取整數。",

    // Processing the data > try it > li
    "Mass of anhydrous salt = final mass − crucible. Mass of water = (crucible + hydrate) − final mass.": "無水鹽的質量 = 最終質量 − 坩堝。水的質量 = (坩堝 + 水合物) − 最終質量。",

    // Processing the data > try it > li
    "Anhydrous: 1.65 g; water: 0.91 g. Now find <i>n</i> of each and divide <i>n</i>(water) by <i>n</i>(<span class=\"chem\">CuSO4</span>).": "無水鹽：1.65 g；水：0.91 g。現在求出各自的 <i>n</i>，然後把 <i>n</i>(水) 除以 <i>n</i>(<span class=\"chem\">CuSO4</span>)。",

    // Processing the data > try it > maths line
    "mass of <span class=\"chem\">CuSO4</span> = 20.12 g − 18.47 g = 1.65 g": "<span class=\"chem\">CuSO4</span> 的質量 = 20.12 g − 18.47 g = 1.65 g",

    // Processing the data > try it > maths line
    "mass of water = 21.03 g − 20.12 g = 0.91 g": "水的質量 = 21.03 g − 20.12 g = 0.91 g",

    // Processing the data > try it > p
    "<i>x</i> = 4.9 to 2 significant figures (0.91 g has only 2). The nearest whole number is 5, so the formula is <span class=\"chem\">CuSO4.5H2O</span>.": "<i>x</i> = 4.9，取 2 位有效數字（0.91 g 只有 2 位）。最接近的整數是 5，所以化學式是 <span class=\"chem\">CuSO4.5H2O</span>。",

    // Processing the data > key idea > p
    "Approximation is a judgement, not a rule. Round 0.93 or 4.89 to the nearest whole number only when the difference is within your experimental uncertainty. A ratio such as 1 : 1.50 or 1 : 1.33 is real: multiply by 2 or 3 to get whole numbers (2 : 3, 3 : 4).": "取近似值是一種判斷，不是一條規則。只有當差異在實驗不確定度之內時，才把 0.93 或 4.89 取至最接近的整數。1 : 1.50 或 1 : 1.33 這類比值是真實的：要乘以 2 或 3 得出整數 (2 : 3, 3 : 4)。",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "不確定度",

    // Uncertainties > p
    "A balance that reads to 0.01 g has an uncertainty of ±0.01 g in every reading. The masses you use are <strong>differences</strong> of two readings, so their uncertainties add.": "讀數至 0.01 g 的天平，每個讀數的不確定度都是 ±0.01 g。你所用的質量是兩個讀數之<strong>差</strong>，所以它們的不確定度要相加。",

    // Uncertainties > table > caption
    "Rules for propagating uncertainties": "傳遞不確定度的規則",

    // Uncertainties > table > th
    "Operation": "運算",

    // Uncertainties > table > th
    "What to add": "要相加的是",

    // Uncertainties > table > th
    "Example": "例子",

    // Uncertainties > table > th
    "Adding or subtracting": "加或減",

    // Uncertainties > table > td
    "absolute uncertainties": "絕對不確定度",

    // Uncertainties > table > th
    "Multiplying or dividing": "乘或除",

    // Uncertainties > table > td
    "percentage uncertainties": "百分不確定度",

    // Uncertainties > table > td
    "<span class=\"mono\">ratio = <i>n</i>(O) ÷ <i>n</i>(Mg)</span>: add the % uncertainties of the two masses": "<span class=\"mono\">比值 = <i>n</i>(O) ÷ <i>n</i>(Mg)</span>：把兩個質量的百分不確定度相加",

    // Uncertainties > p
    "The molar masses come from the data booklet. Their uncertainty is tiny compared with the balance, so you can ignore it.": "摩爾質量來自數據手冊。它們的不確定度和天平的相比極小，所以可以忽略。",

    // Uncertainties > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Uncertainties > worked example > h3
    "How sure is the magnesium oxide ratio?": "氧化鎂的比值有多可靠？",

    // Uncertainties > worked example > p
    "Use the part A data above (balance ±0.01 g). Find the uncertainty in the ratio <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93, and compare it with the expected value of 1.00 for <span class=\"chem\">MgO</span>.": "使用上面 A 部分的數據（天平 ±0.01 g）。求出比值 <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 的不確定度，並與 <span class=\"chem\">MgO</span> 的預期值 1.00 比較。",

    // Uncertainties > worked example > data-title attribute
    "Absolute uncertainty of each mass": "每個質量的絕對不確定度",

    // Uncertainties > worked example > p
    "Each mass is a difference of two readings, each ±0.01 g.": "每個質量都是兩個讀數之差，每個讀數 ±0.01 g。",

    // Uncertainties > worked example > maths line
    "mass of Mg = 0.36 ± 0.02 g": "Mg 的質量 = 0.36 ± 0.02 g",

    // Uncertainties > worked example > maths line
    "mass of O = 0.22 ± 0.02 g": "O 的質量 = 0.22 ± 0.02 g",

    // Uncertainties > worked example > data-title attribute
    "Turn them into percentages": "轉化為百分率",

    // Uncertainties > worked example > p
    "Percentage uncertainty = absolute uncertainty ÷ value × 100.": "百分不確定度 = 絕對不確定度 ÷ 數值 × 100。",

    // Uncertainties > worked example > data-title attribute
    "Add them for the ratio": "把它們相加，得出比值的不確定度",

    // Uncertainties > worked example > p
    "<i>n</i> = <i>m</i> ÷ <i>M</i> carries the same percentage as the mass, and a ratio is a division, so the percentages add.": "<i>n</i> = <i>m</i> ÷ <i>M</i> 帶有和質量相同的百分率，而比值是一個除法，所以百分率要相加。",

    // Uncertainties > worked example > maths line
    "ratio: 5.6 % + 9.1 % = 14.7 % ≈ 15 %": "比值：5.6 % + 9.1 % = 14.7 % ≈ 15 %",

    // Uncertainties > worked example > maths line
    "0.93 × 0.15 = 0.14, so ratio = 0.93 ± 0.14": "0.93 × 0.15 = 0.14，所以比值 = 0.93 ± 0.14",

    // Uncertainties > worked example > data-title attribute
    "Compare with the expected value": "和預期值比較",

    // Uncertainties > worked example > p
    "Percentage error = |experimental − expected| ÷ expected × 100.": "百分誤差 = |實驗值 − 預期值| ÷ 預期值 × 100。",

    // Uncertainties > worked example > maths line
    "percentage error = |0.93 − 1.00| ÷ 1.00 × 100 = 7 %": "百分誤差 = |0.93 − 1.00| ÷ 1.00 × 100 = 7 %",

    // Uncertainties > worked example > maths line
    "7 % &lt; 15 %: the difference lies <b>inside</b> the uncertainty": "7 % &lt; 15 %：差異在不確定度<b>之內</b>",

    // Uncertainties > worked example > p
    "Ratio = 0.93 ± 0.14 (about ±15 %). The result agrees with <span class=\"chem\">MgO</span> within its uncertainty. Random error from the balance is large enough to explain the whole gap.": "比值 = 0.93 ± 0.14（約 ±15 %）。在不確定度範圍內，結果與 <span class=\"chem\">MgO</span> 相符。天平的隨機誤差大得足以解釋整個差距。",

    // Uncertainties > exam tip (shown in English + translation) > p
    "Quote an absolute uncertainty to one significant figure and the value to the same decimal place: 0.9 ± 0.1, not 0.93 ± 0.14, in a final answer. When the percentage error is <strong>bigger</strong> than the percentage uncertainty, random error alone cannot explain it: look for a systematic error.": "在最終答案中，絕對不確定度取至 1 位有效數字，數值取至相同的小數位：寫 0.9 ± 0.1，而不是 0.93 ± 0.14。當百分誤差<strong>大於</strong>百分不確定度時，單憑隨機誤差不能解釋：要找出系統誤差。",

    // Uncertainties > p
    "The magnesium experiment uses small masses, so a 0.01 g reading is a large fraction of each. A balance reading to 0.001 g makes each mass about ten times more precise. A longer piece of ribbon helps too. Try both in the experiment above.": "鎂的實驗用的質量很小，所以 0.01 g 的讀數佔每個質量很大的比例。讀數至 0.001 g 的天平使每個質量精密約十倍。較長的鎂帶也有幫助。在上面的實驗中兩樣都試試。",

    // Uncertainties > try it > p
    "Use the hydrate data from the “Try it” in the processing section (anhydrous salt 1.65 g, water 0.91 g; balance ±0.01 g). Calculate the percentage uncertainty in the value of <i>x</i>.": "使用處理數據一節「試一試」中水合物的數據（無水鹽 1.65 g，水 0.91 g；天平 ±0.01 g）。計算 <i>x</i> 數值的百分不確定度。",

    // Uncertainties > try it > li
    "Each mass is a difference of two readings, so each has an absolute uncertainty of ±0.02 g.": "每個質量都是兩個讀數之差，所以各有 ±0.02 g 的絕對不確定度。",

    // Uncertainties > try it > li
    "<i>x</i> is a ratio of the two amounts. Add the two percentage uncertainties: 0.02 ÷ 0.91 × 100 and 0.02 ÷ 1.65 × 100.": "<i>x</i> 是兩個物質的量之比。把兩個百分不確定度相加：0.02 ÷ 0.91 × 100 和 0.02 ÷ 1.65 × 100。",

    // Uncertainties > try it > maths line
    "water: 0.02 ÷ 0.91 × 100 = 2.20 %": "水：0.02 ÷ 0.91 × 100 = 2.20 %",

    // Uncertainties > try it > maths line
    "anhydrous salt: 0.02 ÷ 1.65 × 100 = 1.21 %": "無水鹽：0.02 ÷ 1.65 × 100 = 1.21 %",

    // Uncertainties > try it > p
    "So <i>x</i> = 4.89 ± 0.17, or 4.9 ± 0.2. The expected value 5 lies inside this range, and the percentage error (2.3 %) is smaller than the uncertainty.": "所以 <i>x</i> = 4.89 ± 0.17，即 4.9 ± 0.2。預期值 5 在這個範圍內，而且百分誤差 (2.3 %) 小於不確定度。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差和改進",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評價：誤差和改進",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">random error</dfn> scatters results both ways; repeats and a more precise balance reduce it. A <dfn data-def=\"An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.\">systematic error</dfn> pushes every result the same way; only a change of method removes it. In these experiments most of the important errors are systematic.": "<dfn data-def=\"使重複讀數在真實值上下不可預測地分散的誤差。重複量度和取平均值可以減少它的影響。\">隨機誤差 <span class=\"en-term\">(random error)</span></dfn>使結果向兩個方向分散；重複量度和更精密的天平可以減少它。<dfn data-def=\"使每個結果都向同一方向偏移的誤差，例如總是過低。重複量度不能消除它；必須改變實驗方法。\">系統誤差 <span class=\"en-term\">(systematic error)</span></dfn>使每個結果都向同一方向偏移；只有改變實驗方法才能消除它。在這些實驗中，大部分重要的誤差都是系統誤差。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "使重複讀數在真實值上下不可預測地分散的誤差。重複量度和取平均值可以減少它的影響。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.": "使每個結果都向同一方向偏移的誤差，例如總是過低。重複量度不能消除它；必須改變實驗方法。",

    // Evaluation: errors and improvements > table > caption
    "Common errors, their effect, and how to fix them": "常見誤差、它們的影響和修正方法",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差來源",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "對結果的影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "切實可行的改進",

    // Evaluation: errors and improvements > table > th
    "White smoke of <span class=\"chem\">MgO</span> escapes when the lid is off or lifted too long": "不蓋蓋子或揭起蓋子太久時，<span class=\"chem\">MgO</span> 的白煙散失",

    // Evaluation: errors and improvements > table > td
    "Final mass too low, so mass of O too low: ratio O : Mg too <strong>low</strong> (looks like too much Mg)": "最終質量過低，所以 O 的質量過低：比值 O : Mg <strong>過低</strong>（看來好像有太多 Mg）",

    // Evaluation: errors and improvements > table > td
    "Keep the lid on; lift it only slightly and briefly with tongs": "蓋上蓋子；只用坩堝鉗把蓋子略為揭起片刻",

    // Evaluation: errors and improvements > table > th
    "Lid never lifted, so too little oxygen gets in": "從不揭起蓋子，所以進入的氧氣太少",

    // Evaluation: errors and improvements > table > td
    "Some Mg does not react; mass of O too low: ratio too <strong>low</strong>. The mass can look constant even though the reaction is unfinished": "部分 Mg 沒有反應；O 的質量過低：比值<strong>過低</strong>。即使反應未完成，質量也可能看來不變",

    // Evaluation: errors and improvements > table > td
    "Lift the lid every minute; check that no grey metal is left before the final weighings": "每分鐘揭起蓋子一次；最後稱量前，檢查沒有剩下灰色的金屬",

    // Evaluation: errors and improvements > table > th
    "Some magnesium reacts with nitrogen in the air to form <span class=\"chem\">Mg3N2</span>": "部分鎂與空氣中的氮反應，生成 <span class=\"chem\">Mg3N2</span>",

    // Evaluation: errors and improvements > table > td
    "Nitride is lighter than the oxide for the same Mg, so mass gain too small: ratio too <strong>low</strong>": "對相同的 Mg 而言，氮化物比氧化物輕，所以增加的質量太小：比值<strong>過低</strong>",

    // Evaluation: errors and improvements > table > td
    "Add a few drops of distilled water to the cooled solid and heat again: the nitride turns into the oxide (ammonia is given off)": "在冷卻了的固體中加入幾滴蒸餾水，再加熱：氮化物會變成氧化物（放出氨）",

    // Evaluation: errors and improvements > table > th
    "Oxide layer on the ribbon before you start": "開始前鎂帶上有氧化物層",

    // Evaluation: errors and improvements > table > td
    "Part of the “magnesium” mass is already oxide, so less oxygen is gained: ratio too <strong>low</strong>": "「鎂」的質量中有一部分已經是氧化物，所以增加的氧較少：比值<strong>過低</strong>",

    // Evaluation: errors and improvements > table > td
    "Clean the ribbon with emery paper just before weighing": "稱量前才用砂紙擦淨鎂帶",

    // Evaluation: errors and improvements > table > th
    "Hydrate not heated to constant mass (some water left)": "水合物沒有加熱至質量不變（仍有一些水）",

    // Evaluation: errors and improvements > table > td
    "Mass of water too low and anhydrous mass too high: <i>x</i> too <strong>low</strong>": "水的質量過低，無水鹽的質量過高：<i>x</i> <strong>過低</strong>",

    // Evaluation: errors and improvements > table > td
    "Heat, cool and reweigh until two masses agree within 0.01 g": "加熱、冷卻並再稱量，直至兩個質量相差在 0.01 g 之內",

    // Evaluation: errors and improvements > table > th
    "Heating the hydrate too strongly (solid turns black)": "加熱水合物太強（固體變黑）",

    // Evaluation: errors and improvements > table > td
    "<span class=\"chem\">CuSO4</span> decomposes to <span class=\"chem\">CuO</span> and <span class=\"chem\">SO3</span>; extra mass is lost and counted as water: <i>x</i> too <strong>high</strong>. The mass never becomes constant": "<span class=\"chem\">CuSO4</span> 分解成 <span class=\"chem\">CuO</span> 和 <span class=\"chem\">SO3</span>；額外失去的質量被當作水計算：<i>x</i> <strong>過高</strong>。質量一直不能達到恆定",

    // Evaluation: errors and improvements > table > td
    "Heat gently with a small flame; stop when the solid is white all through": "用小火溫和加熱；固體完全變白時就停止",

    // Evaluation: errors and improvements > table > th
    "Crystals spit out of the crucible at the start": "開始時晶體從坩堝中濺出",

    // Evaluation: errors and improvements > table > td
    "Lost solid is counted as water: <i>x</i> too <strong>high</strong>": "損失的固體被當作水計算：<i>x</i> <strong>過高</strong>",

    // Evaluation: errors and improvements > table > td
    "Heat gently at first, with a lid partly on, and stir": "開始時溫和加熱，把蓋子半蓋着，並攪拌",

    // Evaluation: errors and improvements > table > th
    "Anhydrous salt cools on the open bench": "無水鹽放在敞開的實驗枱上冷卻",

    // Evaluation: errors and improvements > table > td
    "It takes water back from the air, so the final mass is too high: <i>x</i> too <strong>low</strong>": "它從空氣中重新吸收水分，所以最終質量過高：<i>x</i> <strong>過低</strong>",

    // Evaluation: errors and improvements > table > td
    "Cool in a desiccator, and weigh as soon as it is cool": "在乾燥器中冷卻，一冷卻就立即稱量",

    // Evaluation: errors and improvements > table > th
    "Small masses read on a 0.01 g balance": "用讀數至 0.01 g 的天平量度小質量",

    // Evaluation: errors and improvements > table > td
    "Random error: large percentage uncertainty (about 15 % in the Mg : O ratio)": "隨機誤差：百分不確定度大（Mg : O 比值約 15 %）",

    // Evaluation: errors and improvements > table > td
    "Use a 0.001 g balance, a bigger sample, and repeat the whole experiment": "使用讀數至 0.001 g 的天平和較大的樣本，並重複整個實驗",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "An evaluation point earns marks when it has three parts: the error, its direction (too high or too low, and why), and an improvement that fixes <em>that</em> error. “Human error” and “be more careful” earn nothing.": "評價要點要有三部分才能得分：誤差、誤差的方向（過高或過低，以及原因），以及能修正<em>該</em>誤差的改進方法。「人為誤差」和「更小心」都不會得分。",

    // Evaluation: errors and improvements > not needed for IB > p
    "You do not need to learn the reaction of magnesium with nitrogen or the decomposition of copper(II) sulfate for the exam. They are here only to explain the errors. You are expected to reason about the direction of an error from the data, not to recall these equations.": "考試不需要你學鎂與氮的反應或硫酸銅(II) 的分解。這裏提到它們，只是為了解釋誤差。你要做的是從數據推理誤差的方向，而不是背出這些方程式。",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "考試練習",

    // Exam practice > p
    "These questions are in the style of Paper 1B: short parts built on practical data. Write your working on paper before you type an answer.": "這些題目屬 Paper 1B 題型：以實驗數據為基礎的短題。輸入答案之前，先在紙上寫出計算步驟。",

    // Exam practice > data-title attribute
    "Lab 5: empirical formula by experiment": "實驗 5：以實驗求出實驗式",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Raw data": "原始數據",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copy table": "複製表格",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "No readings yet.": "還沒有讀數。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copied. Paste it into a spreadsheet or your notes.": "已複製。把它貼到試算表或你的筆記中。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Copying is blocked here. Select the table and copy it by hand.": "這裏不能複製。請選取表格，然後自行複製。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "balance, ±{u} g": "天平，±{u} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "lid": "蓋",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "How you use the lid": "怎樣使用蓋子",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid on, lifted briefly every minute": "蓋上蓋子，每分鐘略為揭起一次",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid left off": "不蓋蓋子",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Lid never lifted": "從不揭起蓋子",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Balance": "天平",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reads to 0.01 g": "讀數至 0.01 g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Reads to 0.001 g": "讀數至 0.001 g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Length of magnesium ribbon": "鎂帶的長度",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "1. Weigh crucible and lid": "1. 稱量坩堝和蓋",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "2. Add magnesium and weigh": "2. 加入鎂並稱量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "3. Heat, cool and weigh": "3. 加熱、冷卻和稱量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Add drops of water, reheat": "加入幾滴水，再加熱",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Show the processing": "顯示數據處理",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "New run": "新的實驗",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "A crucible with a lid on a pipeclay triangle over a Bunsen burner, and a balance showing the latest reading": "放在本生燈上方泥三角上的有蓋坩堝，以及顯示最新讀數的天平",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Part A: masses of crucible, lid and contents": "A 部分：坩堝、蓋和內容物的質量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Balance reading": "天平讀數",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "What to do next": "下一步",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "After heating {n}": "第 {n} 次加熱後",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "After adding water and heating": "加水並加熱後",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Empty crucible and lid": "空坩堝和蓋",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and lid weighed": "已稱量坩堝和蓋",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Magnesium ribbon in the crucible": "坩堝中的鎂帶",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Cooled after heating {n}": "第 {n} 次加熱後已冷卻",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "some grey metal is left": "仍有一些灰色的金屬",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "white powder, no metal left": "白色粉末，沒有剩下金屬",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Weigh the empty crucible and lid.": "稱量空坩堝和蓋。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Choose a length of ribbon, then add it and weigh.": "選擇鎂帶的長度，然後把它加入並稱量。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heat the crucible. Then let it cool and weigh it.": "加熱坩堝。然後讓它冷卻並稱量。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Constant mass: the last two readings agree. Process your data.": "質量不變：最後兩個讀數相同。處理你的數據。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Ten heatings and still not constant. Check your technique and start a new run.": "已加熱十次，質量仍未恆定。檢查你的操作，並開始新的實驗。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "The mass is still changing. Heat, cool and weigh again.": "質量仍在改變。再加熱、冷卻和稱量。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of Mg = {a} g − {b} g = {c} g": "Mg 的質量 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of O = {a} g − {b} g = {c} g": "O 的質量 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "ratio O ÷ Mg = {r}, so Mg : O = 1 : {r}": "比值 O ÷ Mg = {r}，所以 Mg : O = 1 : {r}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "uncertainty in the ratio ≈ {u} % + {v} % = {p} %": "比值的不確定度 ≈ {u} % + {v} % = {p} %",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "ratio = {pm}": "比值 = {pm}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Your mass is not constant yet, so these numbers may change.": "你的質量仍未恆定，所以這些數字可能會改變。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Expected for MgO: a ratio of 1.00. Your percentage error: {e} %.": "MgO 的預期比值：1.00。你的百分誤差：{e} %。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heating": "加熱",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Gentle, with stirring": "溫和，並攪拌",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Strong, roaring flame": "強烈的轟鳴火焰",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Cooling before each weighing": "每次稱量前的冷卻方法",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "In a desiccator": "在乾燥器中",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "On the open bench": "在敞開的實驗枱上",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Mass of crystals to add": "要加入的晶體質量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "1. Weigh empty crucible": "1. 稱量空坩堝",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "2. Add crystals and weigh": "2. 加入晶體並稱量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "A crucible of copper(II) sulfate on a pipeclay triangle over a Bunsen burner, and a balance showing the latest reading": "放在本生燈上方泥三角上、盛有硫酸銅(II) 的坩堝，以及顯示最新讀數的天平",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Part B: masses of crucible and contents": "B 部分：坩堝和內容物的質量",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "The solid looks": "固體看來是",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible": "坩堝",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible and hydrate": "坩堝和水合物",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Nothing in the crucible yet.": "坩堝中還沒有東西。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "blue crystals": "藍色晶體",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "pale blue and white": "淺藍色和白色",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "a white powder": "白色粉末",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "{base}, with black patches": "{base}，有黑色斑塊",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Empty crucible": "空坩堝",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Crucible weighed": "已稱量坩堝",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Blue crystals in the crucible": "坩堝中的藍色晶體",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Weigh the empty crucible.": "稱量空坩堝。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Choose a mass of crystals, then add them and weigh.": "選擇晶體的質量，然後把它們加入並稱量。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Heat the crystals. Then let them cool and weigh.": "加熱晶體。然後讓它們冷卻並稱量。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Ten heatings and the mass is still changing. Something is going wrong: start a new run.": "已加熱十次，質量仍在改變。一定出了問題：開始新的實驗。",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of anhydrous CuSO₄ = {a} g − {b} g = {c} g": "無水 CuSO₄ 的質量 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "mass of water = {a} g − {b} g = {c} g": "水的質量 = {a} g − {b} g = {c} g",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "uncertainty in x ≈ {p} %, so x = {pm}": "x 的不確定度 ≈ {p} %，所以 x = {pm}",

    // widget string (assets/js/widgets-lab-empirical-formula.js)
    "Expected: x = 5. Your percentage error: {e} %.": "預期值：x = 5。你的百分誤差：{e} %。",

  }
});
