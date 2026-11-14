/* lab-standard-solution — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-standard-solution', {
  strings: {

    // page title (browser tab)
    "Lab 6 Standard solutions and calibration curves | Structure Lab": "實驗 6 標準溶液和校準曲線 | Structure Lab",

    // Standard solutions and calibration curves > page header > p
    "Lab 6 · Structure 1.4": "實驗 6 · Structure 1.4",

    // Standard solutions and calibration curves > page header > h1
    "Standard solutions and calibration curves": "標準溶液和校準曲線",

    // Standard solutions and calibration curves > page header > span
    "How do we make a solution whose concentration we know exactly, and then use it to measure a concentration we do not know?": "怎樣配製一種濃度準確已知的溶液，再用它來量度一個未知的濃度？",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "In part A you make a standard solution of copper(II) sulfate. In part B you dilute it to make a set of standards, measure how much light each absorbs, and use the graph to find the concentration of an unknown. Tick each skill when you can do it without notes.": "在 A 部分，你會配製硫酸銅(II) 標準溶液。在 B 部分，你會把它稀釋成一系列標準溶液，量度每一種吸收多少光，再用圖表求出未知溶液的濃度。不看筆記也做得到，就剔選該項技能。",

    // What you need to be able to do > checklist > span
    "Calculate the mass of solid needed for a given volume and concentration of solution.": "按指定的溶液體積和濃度，計算所需固體的質量。",

    // What you need to be able to do > checklist > span
    "Describe how to prepare a standard solution in a volumetric flask, using the words a markscheme expects.": "用評分準則要求的字眼，描述怎樣在容量瓶中配製標準溶液。",

    // What you need to be able to do > checklist > span
    "Calculate and describe a dilution, and choose suitable glassware for it.": "計算和描述稀釋，並選擇合適的玻璃儀器。",

    // What you need to be able to do > checklist > span
    "Make a set of standards, plot a calibration curve and read an unknown concentration from it.": "配製一系列標準溶液，繪畫校準曲線，並從曲線讀出未知濃度。",

    // What you need to be able to do > checklist > span
    "Explain why a colorimeter filter of the complementary colour is used.": "解釋比色計為甚麼要用補色的濾光片。",

    // What you need to be able to do > checklist > span
    "Propagate uncertainties from the balance, flask, pipette and burette into a concentration.": "把天平、容量瓶、移液管和滴定管的不確定度傳遞到濃度的不確定度。",

    // What you need to be able to do > checklist > span
    "Say how each common error changes the concentration, and suggest a realistic improvement.": "說出每種常見誤差怎樣改變濃度，並提出切實可行的改進方法。",

    // The chemistry behind it > data-toc attribute
    // The chemistry behind it > h2
    "The chemistry behind it": "背後的化學",

    // The chemistry behind it > p
    "A <dfn data-def=\"A solution whose concentration is known accurately.\">standard solution</dfn> is a solution whose concentration is known accurately. You make it by dissolving a weighed mass of solid and making the solution up to an exact volume. Two relationships do all the work:": "<dfn data-def=\"濃度準確已知的溶液。\">標準溶液 <span class=\"en-term\">(standard solution)</span></dfn>是濃度準確已知的溶液。配製方法是把稱量過的固體溶解，再把溶液加水至準確的體積。全部計算只靠兩條關係式：",

    // The chemistry behind it > data-def attribute
    "A solution whose concentration is known accurately.": "濃度準確已知的溶液。",

    // The chemistry behind it > equation > dd
    "amount of solute <span class=\"unit\">mol</span>": "溶質的物質的量 <span class=\"unit\">mol</span>",

    // The chemistry behind it > equation > dd
    "mass of solute <span class=\"unit\">g</span>": "溶質的質量 <span class=\"unit\">g</span>",

    // The chemistry behind it > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "摩爾質量 <span class=\"unit\">g mol-1</span>",

    // The chemistry behind it > equation > dd
    "concentration <span class=\"unit\">mol dm-3</span>": "濃度 <span class=\"unit\">mol dm-3</span>",

    // The chemistry behind it > equation > dd
    "volume of solution <span class=\"unit\">dm3</span>": "溶液的體積 <span class=\"unit\">dm3</span>",

    // The chemistry behind it > p
    "Diluting a solution does not change the amount of solute, so <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>. The full explanations are on the topic page: <a href=\"../topics/s1-4.html#concentration\">Concentration</a>.": "稀釋溶液不會改變溶質的物質的量，所以 <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>。完整的解釋在課題頁：<a href=\"../topics/s1-4.html#concentration\">濃度</a>。",

    // The chemistry behind it > h3
    "Why copper(II) sulfate?": "為甚麼用硫酸銅(II)？",

    // The chemistry behind it > p
    "Copper(II) sulfate solution is blue. The more concentrated it is, the deeper the blue and the more light it absorbs. A <dfn data-def=\"An instrument that shines light of one colour through a sample and measures how much of it is absorbed.\">colorimeter</dfn> measures this as a number called <dfn data-def=\"A measure of how much light a sample absorbs. It has no units. 0 means no light is absorbed.\">absorbance</dfn>. Over a sensible range, a graph of absorbance against concentration is a straight line. That graph is the <dfn data-def=\"A graph of an instrument reading against the known concentrations of standards, used to read off an unknown concentration.\">calibration curve</dfn>.": "硫酸銅(II) 溶液是藍色的。溶液越濃，藍色越深，吸收的光也越多。<dfn data-def=\"讓一種顏色的光穿過樣本，並量度有多少光被吸收的儀器。\">比色計 <span class=\"en-term\">(colorimeter)</span></dfn>把這個量度成一個數值，稱為<dfn data-def=\"量度樣本吸收多少光的數值。它沒有單位。0 表示沒有光被吸收。\">吸光度 <span class=\"en-term\">(absorbance)</span></dfn>。在合理的範圍內，吸光度對濃度的圖表是一條直線。這幅圖表就是<dfn data-def=\"儀器讀數對標準溶液已知濃度的圖表，用來讀出未知濃度。\">校準曲線 <span class=\"en-term\">(calibration curve)</span></dfn>。",

    // The chemistry behind it > data-def attribute
    "An instrument that shines light of one colour through a sample and measures how much of it is absorbed.": "讓一種顏色的光穿過樣本，並量度有多少光被吸收的儀器。",

    // The chemistry behind it > data-def attribute
    "A measure of how much light a sample absorbs. It has no units. 0 means no light is absorbed.": "量度樣本吸收多少光的數值。它沒有單位。0 表示沒有光被吸收。",

    // The chemistry behind it > data-def attribute
    "A graph of an instrument reading against the known concentrations of standards, used to read off an unknown concentration.": "儀器讀數對標準溶液已知濃度的圖表，用來讀出未知濃度。",

    // The chemistry behind it > p
    "The solid you weigh is the hydrate, <span class=\"chem\">CuSO4.5H2O</span>, <i>M</i> = 249.72 g mol<sup>−1</sup>. One mole of it gives one mole of <span class=\"chem\">CuSO4</span> in solution, so [<span class=\"chem\">CuSO4</span>] = <i>n</i>(hydrate) ÷ <i>V</i>.": "你稱量的固體是水合物 <span class=\"chem\">CuSO4.5H2O</span>，<i>M</i> = 249.72 g mol<sup>−1</sup>。1 摩爾水合物在溶液中產生 1 摩爾 <span class=\"chem\">CuSO4</span>，所以 [<span class=\"chem\">CuSO4</span>] = <i>n</i>(水合物) ÷ <i>V</i>。",

    // The chemistry behind it > not needed for IB > p
    "You do not need the Beer–Lambert law or any equation for absorbance. You only need the method: standards of known concentration, a graph, a line of best fit, and reading the unknown from the line. The colorimeter here is simulated with a straight-line response.": "你不需要比爾－朗伯定律，也不需要任何吸光度的公式。你只需要掌握方法：已知濃度的標準溶液、一幅圖表、一條最佳擬合線，以及從線上讀出未知濃度。這裏的比色計是模擬的，讀數與濃度成直線關係。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的、變量和安全",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> To prepare a 0.250 mol dm<sup>−3</sup> standard solution of copper(II) sulfate, and to use it to find the concentration of an unknown copper(II) sulfate solution with a calibration curve.": "<strong>目的：</strong>配製 0.250 mol dm<sup>−3</sup> 的硫酸銅(II) 標準溶液，並利用它和校準曲線，求出一種未知硫酸銅(II) 溶液的濃度。",

    // Aim, variables and safety > table > caption
    "Variables in part B": "B 部分的變量",

    // Aim, variables and safety > table > th
    "Type": "類型",

    // Aim, variables and safety > table > th
    "Variable": "變量",

    // Aim, variables and safety > table > th
    "How": "方法",

    // Aim, variables and safety > table > th
    "Independent": "自變量",

    // Aim, variables and safety > table > td
    "Concentration of each standard": "每種標準溶液的濃度",

    // Aim, variables and safety > table > td
    "Volumes of stock solution and water measured from two burettes": "用兩支滴定管量取儲備溶液和水的體積",

    // Aim, variables and safety > table > th
    "Dependent": "應變量",

    // Aim, variables and safety > table > td
    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Absorbance": "吸光度",

    // Aim, variables and safety > table > td
    "Read on the colorimeter, ±0.01": "在比色計上讀取，±0.01",

    // Aim, variables and safety > table > th
    "Controlled": "控制變量",

    // Aim, variables and safety > table > td
    "Filter (colour of light)": "濾光片（光的顏色）",

    // Aim, variables and safety > table > td
    "The same red filter for every reading": "每次讀數都用同一塊紅色濾光片",

    // Aim, variables and safety > table > td
    "Path length and cuvette": "光程和比色杯",

    // Aim, variables and safety > table > td
    "The same cuvette, same way round, filled to the same height": "用同一個比色杯，放置方向相同，注入相同高度的溶液",

    // Aim, variables and safety > table > td
    "Zero of the colorimeter": "比色計的零點",

    // Aim, variables and safety > table > td
    "Set with a cuvette of distilled water (the blank) before measuring": "量度前用一個裝有蒸餾水的比色杯（空白溶液）校零",

    // Aim, variables and safety > table > td
    "Temperature": "溫度",

    // Aim, variables and safety > table > td
    "All solutions at room temperature": "所有溶液都在室溫",

    // Aim, variables and safety > h3
    "Equipment": "儀器",

    // Aim, variables and safety > li
    "Hydrated copper(II) sulfate, weighing boat, spatula, balance reading to 0.01 g": "水合硫酸銅(II)、稱量舟、刮勺、讀數至 0.01 g 的天平",

    // Aim, variables and safety > li
    "Beaker, glass stirring rod, filter funnel, wash bottle of distilled water, dropping pipette": "燒杯、玻璃攪拌棒、漏斗、裝有蒸餾水的洗瓶、滴管",

    // Aim, variables and safety > li
    "250.0 cm<sup>3</sup> volumetric flask (±0.2 cm<sup>3</sup>) with stopper": "250.0 cm<sup>3</sup> 容量瓶（±0.2 cm<sup>3</sup>）連塞",

    // Aim, variables and safety > li
    "Two 50 cm<sup>3</sup> burettes (±0.05 cm<sup>3</sup> per reading), six test tubes in a rack": "兩支 50 cm<sup>3</sup> 滴定管（每個讀數 ±0.05 cm<sup>3</sup>）、試管架上的六支試管",

    // Aim, variables and safety > li
    "Colorimeter with a red filter, cuvettes, tissue": "裝有紅色濾光片的比色計、比色杯、紙巾",

    // Aim, variables and safety > p
    "Wear eye protection. Copper(II) sulfate, solid and solution, is harmful if swallowed and causes eye and skin irritation. Wipe up spills at once and wash your hands after the practical. It is very toxic to aquatic life, so collect all leftover solutions in the labelled waste container and do not pour them down the sink. Fill burettes below eye level, with a funnel, and remove the funnel before you take a reading. Glassware such as volumetric flasks breaks easily: hold the flask by the neck and the stopper together when you invert it.": "戴上護目鏡。硫酸銅(II) 無論是固體還是溶液，吞服都有害，並會刺激眼睛和皮膚。溢出的溶液要立即抹乾，實驗後要洗手。它對水生生物毒性很大，所以把剩餘的溶液全部收集在貼有標籤的廢液容器裏，不要倒進水槽。在眼睛水平以下用漏斗注滿滴定管，讀數前要取走漏斗。容量瓶等玻璃儀器很容易破裂：倒轉容量瓶時，要同時握住瓶頸和瓶塞。",

    // Method > h2
    "Method": "方法",

    // Method > h3
    "Part A: the standard solution": "A 部分：標準溶液",

    // Method > li
    "Calculate the mass of <span class=\"chem\">CuSO4.5H2O</span> needed (15.61 g for 250.0 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup>).": "計算所需 <span class=\"chem\">CuSO4.5H2O</span> 的質量（配製 250.0 cm<sup>3</sup> 0.250 mol dm<sup>−3</sup> 的溶液需要 15.61 g）。",

    // Method > li
    "Weigh a weighing boat with about that mass of solid. Record the mass exactly; it does not need to be exactly 15.61 g.": "用稱量舟稱取大約這個質量的固體。準確記錄質量；質量不必剛好是 15.61 g。",

    // Method > li
    "Tip the solid into a beaker, then reweigh the empty boat. <span class=\"muted\">This is weighing by difference: the mass in the beaker is what you use, even if a few crystals stay in the boat.</span>": "把固體倒進燒杯，再稱量空的稱量舟。<span class=\"muted\">這是差減稱量法：即使有幾粒晶體留在稱量舟裏，你用的也是燒杯中固體的質量。</span>",

    // Method > li
    "Add about 100 cm<sup>3</sup> of distilled water and stir until all the solid has dissolved. <span class=\"muted\">Solid that has not dissolved would not reach the flask evenly.</span>": "加入大約 100 cm<sup>3</sup> 蒸餾水，攪拌至所有固體溶解。<span class=\"muted\">未溶解的固體不能均勻地轉移到容量瓶裏。</span>",

    // Method > li
    "Pour the solution through a funnel into the volumetric flask. Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask. <span class=\"muted\">This makes sure all the weighed solute ends up in the flask.</span>": "把溶液經漏斗倒進容量瓶。用蒸餾水沖洗燒杯、玻璃棒和漏斗，並把洗液加進容量瓶。<span class=\"muted\">這樣可確保所有稱量過的溶質都進入容量瓶。</span>",

    // Method > li
    "Add distilled water until the bottom of the meniscus sits on the mark, with your eye level with the mark. Add the last few drops with a dropping pipette. <span class=\"muted\">Overshooting cannot be undone.</span>": "加入蒸餾水，直至彎液面底部剛好在刻度線上，眼睛要與刻度線在同一水平。最後幾滴用滴管加入。<span class=\"muted\">加過了頭就無法補救。</span>",

    // Method > li
    "Stopper the flask and invert it ten or more times. <span class=\"muted\">Otherwise the solution near the bottom is more concentrated than near the top.</span>": "塞好容量瓶，倒轉十次或以上。<span class=\"muted\">否則瓶底附近的溶液會比瓶頂附近的濃。</span>",

    // Method > h3
    "Part B: standards and the calibration curve": "B 部分：標準溶液和校準曲線",

    // Method > li
    "Fill one burette with the standard solution and one with distilled water.": "一支滴定管注滿標準溶液，另一支注滿蒸餾水。",

    // Method > li
    "Run 2.00, 4.00, 6.00, 8.00 and 10.00 cm<sup>3</sup> of standard into five test tubes, and add water to make each up to 10.00 cm<sup>3</sup>. Mix each tube.": "把 2.00、4.00、6.00、8.00 和 10.00 cm<sup>3</sup> 標準溶液分別放進五支試管，再加水使每支試管的溶液達 10.00 cm<sup>3</sup>。把每支試管的溶液混勻。",

    // Method > li
    "Fit the red filter. Put the blank (distilled water) in the colorimeter and set the reading to zero.": "裝上紅色濾光片。把空白溶液（蒸餾水）放進比色計，把讀數調至零。",

    // Method > li
    "Measure the absorbance of each standard. Rinse the cuvette with the next solution before you fill it, and wipe the clear sides with tissue.": "量度每種標準溶液的吸光度。注入下一種溶液之前，先用該溶液沖洗比色杯，並用紙巾抹淨透光的兩面。",

    // Method > li
    "Measure the unknown three times and take the mean.": "量度未知溶液三次，取平均值。",

    // Method > li
    "Plot absorbance against concentration, draw the line of best fit, and read the unknown’s concentration from the line.": "繪畫吸光度對濃度的圖表，畫出最佳擬合線，並從線上讀出未知溶液的濃度。",

    // Method > exam tip (shown in English + translation) > p
    "For “describe how to prepare a standard solution”, markschemes look for: <strong>dissolve in distilled (or deionized) water</strong>; transfer <strong>with rinsings</strong> to a <strong>volumetric flask</strong>; <strong>make up to the mark</strong>; <strong>stopper and invert</strong> to mix. “Add 250 cm<sup>3</sup> of water” loses the mark.": "對於「描述怎樣配製標準溶液」，評分準則要求：<strong>溶解於蒸餾水（或去離子水）</strong>；<strong>連同洗液</strong>轉移到<strong>容量瓶</strong>；<strong>加水至刻度線</strong>；<strong>塞好並倒轉</strong>搖勻。寫「加入 250 cm<sup>3</sup> 水」會失分。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "進行實驗",

    // Run the experiment > p
    "Every run gives slightly different readings, as a real one would. Try the good technique first, then change one choice at a time to see what each error does.": "每次實驗的讀數都略有不同，就像真實實驗一樣。先試用正確的技巧，然後每次只改變一個選擇，看看每種錯誤有甚麼影響。",

    // Run the experiment > widget > data-title attribute
    "Part A: make the standard solution": "A 部分：配製標準溶液",

    // Run the experiment > widget > figcaption
    "Check your mass calculation first, then do each step in order. The choices change how you transfer the solution, make it up to the mark and mix it. At the end, compare the concentration you would calculate with what is really in the flask.": "先檢查你的質量計算，再按次序完成每個步驟。各個選擇會改變你轉移溶液、加水至刻度線和搖勻的方式。最後，比較你計算出的濃度和容量瓶中真正的濃度。",

    // Run the experiment > widget > data-title attribute
    "Part B: standards, colorimeter and calibration curve": "B 部分：標準溶液、比色計和校準曲線",

    // Run the experiment > widget > figcaption
    "Make the standards, zero the colorimeter on the blank, measure the standards and the unknown, then read the unknown from the line. Try measuring cylinders instead of burettes, or a filter of the wrong colour, and watch the points scatter or the line flatten.": "配製標準溶液，用空白溶液把比色計校零，量度標準溶液和未知溶液，然後從線上讀出未知濃度。試試用量筒代替滴定管，或用錯誤顏色的濾光片，看看數據點怎樣散開，或直線怎樣變得平緩。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "處理數據",

    // Processing the data > worked example > h3
    "The concentration of the standard solution": "標準溶液的濃度",

    // Processing the data > worked example > p
    "A student wants 250.0 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup> copper(II) sulfate. They weigh by difference: boat and solid 17.43 g, empty boat afterwards 1.84 g. Calculate the mass they should aim for, and the actual concentration they made. <i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>.": "一名學生要配製 250.0 cm<sup>3</sup> 0.250 mol dm<sup>−3</sup> 的硫酸銅(II) 溶液。他用差減稱量法：稱量舟和固體 17.43 g，之後空的稱量舟 1.84 g。計算他應該稱取的目標質量，以及他實際配製的濃度。<i>M</i>(<span class=\"chem\">CuSO4.5H2O</span>) = 249.72 g mol<sup>−1</sup>。",

    // Processing the data > worked example > data-title attribute
    "Amount needed": "所需的物質的量",

    // Processing the data > worked example > p
    "Convert the volume to dm<sup>3</sup> first, then use <i>n</i> = <i>CV</i>.": "先把體積換算為 dm<sup>3</sup>，再用 <i>n</i> = <i>CV</i>。",

    // Processing the data > worked example > data-title attribute
    "Mass to aim for": "目標質量",

    // Processing the data > worked example > p
    "Use the molar mass of the hydrate, because that is the solid on the balance.": "用水合物的摩爾質量，因為放在天平上的固體是水合物。",

    // Processing the data > worked example > data-title attribute
    "Mass actually used": "實際使用的質量",

    // Processing the data > worked example > p
    "The mass in the beaker is the difference between the two readings.": "燒杯中固體的質量是兩個讀數的差。",

    // Processing the data > worked example > data-title attribute
    "Actual concentration": "實際濃度",

    // Processing the data > worked example > p
    "Report the concentration you really made, not the one you aimed for.": "報告你真正配製的濃度，而不是目標濃度。",

    // Processing the data > worked example > p
    "Aim for 15.61 g. The solution made is 0.2497 mol dm<sup>−3</sup> (4 s.f., matching 15.59 g and 250.0 cm<sup>3</sup>).": "目標質量是 15.61 g。配製出的溶液是 0.2497 mol dm<sup>−3</sup>（4 位有效數字，與 15.59 g 和 250.0 cm<sup>3</sup> 相配）。",

    // Processing the data > try it > p
    "Another student uses a 100.0 cm<sup>3</sup> volumetric flask. Boat and solid: 7.95 g. Empty boat afterwards: 1.69 g. Calculate the concentration of copper(II) sulfate in the flask.": "另一名學生用 100.0 cm<sup>3</sup> 容量瓶。稱量舟和固體：7.95 g。之後空的稱量舟：1.69 g。計算容量瓶中硫酸銅(II) 的濃度。",

    // Processing the data > try it > li
    "Mass transferred = 7.95 − 1.69. Then <i>n</i> = <i>m</i> ÷ 249.72.": "轉移的質量 = 7.95 − 1.69。然後 <i>n</i> = <i>m</i> ÷ 249.72。",

    // Processing the data > try it > li
    "[<span class=\"chem\">CuSO4</span>] = <i>n</i> ÷ 0.1000 dm<sup>3</sup>.": "[<span class=\"chem\">CuSO4</span>] = <i>n</i> ÷ 0.1000 dm<sup>3</sup>。",

    // Processing the data > h3
    "Diluting to make the standards": "稀釋以配製標準溶液",

    // Processing the data > p
    "Each standard is a dilution of the stock, so use <i>C</i><sub>2</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>, where <i>V</i><sub>2</sub> is the total volume (stock + water).": "每種標準溶液都是儲備溶液的稀釋液，所以用 <i>C</i><sub>2</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>，其中 <i>V</i><sub>2</sub> 是總體積（儲備溶液 + 水）。",

    // Processing the data > try it > p
    "A test tube holds 7.00 cm<sup>3</sup> of 0.250 mol dm<sup>−3</sup> copper(II) sulfate and 3.00 cm<sup>3</sup> of distilled water. Calculate the concentration of the mixture.": "一支試管裝有 7.00 cm<sup>3</sup> 0.250 mol dm<sup>−3</sup> 的硫酸銅(II) 溶液和 3.00 cm<sup>3</sup> 蒸餾水。計算混合物的濃度。",

    // Processing the data > try it > li
    "The total volume is 7.00 + 3.00 = 10.00 cm<sup>3</sup>.": "總體積是 7.00 + 3.00 = 10.00 cm<sup>3</sup>。",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Processing the data > worked example > h3
    "Reading an unknown from the calibration curve": "從校準曲線讀出未知濃度",

    // Processing the data > worked example > table > caption
    "Calibration data (red filter)": "校準數據（紅色濾光片）",

    // Processing the data > worked example > table > th
    "Standard": "標準溶液",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "[CuSO₄] / mol dm⁻³": "[CuSO₄] / mol dm⁻³",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Blank": "空白溶液",

    // Processing the data > worked example > table > th
    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Unknown": "未知溶液",

    // Processing the data > worked example > p
    "Find the concentration of the unknown in mol dm<sup>−3</sup> and in g dm<sup>−3</sup>. <i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 g mol<sup>−1</sup>.": "求未知溶液的濃度，以 mol dm<sup>−3</sup> 和 g dm<sup>−3</sup> 表示。<i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 g mol<sup>−1</sup>。",

    // Processing the data > worked example > data-title attribute
    "Average the unknown": "求未知溶液讀數的平均值",

    // Processing the data > worked example > p
    "Repeat readings reduce the effect of random error.": "重複讀數可減少隨機誤差的影響。",

    // Processing the data > worked example > maths line
    "mean absorbance = (0.41 + 0.42 + 0.41) ÷ 3 = 0.413": "平均吸光度 = (0.41 + 0.42 + 0.41) ÷ 3 = 0.413",

    // Processing the data > worked example > data-title attribute
    "Find the gradient of the line": "求直線的斜率",

    // Processing the data > worked example > p
    "The points lie close to a straight line through the origin. Use two points on the line, far apart.": "數據點都接近一條穿過原點的直線。用線上相距較遠的兩點。",

    // Processing the data > worked example > maths line
    "gradient = (0.740 − 0.000) ÷ (0.2500 − 0.0000) = 2.96 dm<sup>3</sup> mol<sup>−1</sup>": "斜率 = (0.740 − 0.000) ÷ (0.2500 − 0.0000) = 2.96 dm<sup>3</sup> mol<sup>−1</sup>",

    // Processing the data > worked example > data-title attribute
    "Read the concentration": "讀出濃度",

    // Processing the data > worked example > p
    "On the graph you read across from the absorbance to the line and down to the axis. The gradient does the same job.": "在圖表上，你從吸光度橫向讀到直線，再向下讀到軸。斜率的作用相同。",

    // Processing the data > worked example > data-title attribute
    "Convert to g dm⁻³": "換算為 g dm⁻³",

    // Processing the data > worked example > p
    "Multiply by the molar mass of the dissolved substance, <span class=\"chem\">CuSO4</span>.": "乘以溶解了的物質 <span class=\"chem\">CuSO4</span> 的摩爾質量。",

    // Processing the data > worked example > p
    "[<span class=\"chem\">CuSO4</span>] = 0.140 mol dm<sup>−3</sup> = 22.3 g dm<sup>−3</sup>. The unknown lies inside the range of the standards, so reading it from the line is reliable.": "[<span class=\"chem\">CuSO4</span>] = 0.140 mol dm<sup>−3</sup> = 22.3 g dm<sup>−3</sup>。未知溶液在標準溶液的範圍之內，所以從直線讀出的數值是可靠的。",

    // Processing the data > common mistake > p
    "Reading an unknown from a part of the line you have extended beyond the last standard is not reliable: the line may bend at high absorbance. If the unknown is above the top standard, dilute it by a known factor, measure it again, and multiply the result by the factor.": "如果直線延伸到最後一種標準溶液以外，從延伸部分讀出的未知濃度並不可靠：吸光度高時，直線可能會彎曲。如果未知溶液高於最濃的標準溶液，就按已知倍數把它稀釋，再量度一次，然後把結果乘以該倍數。",

    // Processing the data > try it > p
    "In another run the line of best fit passes through the origin with a gradient of 2.95 dm<sup>3</sup> mol<sup>−1</sup>. The mean absorbance of the unknown is 0.52. Calculate [<span class=\"chem\">CuSO4</span>].": "在另一次實驗中，最佳擬合線穿過原點，斜率是 2.95 dm<sup>3</sup> mol<sup>−1</sup>。未知溶液的平均吸光度是 0.52。計算 [<span class=\"chem\">CuSO4</span>]。",

    // Processing the data > try it > li
    "Absorbance = gradient × concentration, for a line through the origin.": "對於穿過原點的直線，吸光度 = 斜率 × 濃度。",

    // Processing the data > try it > li
    "[<span class=\"chem\">CuSO4</span>] = 0.52 ÷ 2.95.": "[<span class=\"chem\">CuSO4</span>] = 0.52 ÷ 2.95。",

    // Processing the data > try it > p
    "The absorbance has 2 significant figures, so 0.18 (or 0.176) mol dm<sup>−3</sup>.": "吸光度有 2 位有效數字，所以答案是 0.18（或 0.176）mol dm<sup>−3</sup>。",

    // Uncertainties > data-toc attribute
    // Uncertainties > h2
    "Uncertainties": "不確定度",

    // Uncertainties > p
    "Every piece of glassware has an uncertainty, usually printed on it. For a reading on a scale, it is half the smallest division or the precision of the display.": "每件玻璃儀器都有不確定度，通常印在儀器上。刻度上的讀數，不確定度是最小刻度的一半，或顯示器的精密度。",

    // Uncertainties > table > caption
    "Typical uncertainties of the apparatus": "儀器的典型不確定度",

    // Uncertainties > table > th
    "Apparatus": "儀器",

    // Uncertainties > table > th
    "Uncertainty": "不確定度",

    // Uncertainties > table > th
    "Note": "備註",

    // Uncertainties > table > th
    "Balance (2 d.p.)": "天平（小數點後 2 位）",

    // Uncertainties > table > td
    "Per reading. A mass by difference uses two readings: ±0.02 g": "每個讀數。差減稱量法用兩個讀數：±0.02 g",

    // Uncertainties > table > th
    "Volumetric flask, 250.0 cm<sup>3</sup>": "容量瓶，250.0 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.2 cm<sup>3</sup>": "±0.2 cm<sup>3</sup>",

    // Uncertainties > table > td
    "One volume only": "只能量取一個體積",

    // Uncertainties > table > th
    "Volumetric pipette, 25.00 cm<sup>3</sup>": "移液管，25.00 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.04 cm<sup>3</sup>": "±0.04 cm<sup>3</sup>",

    // Uncertainties > table > th
    "Burette": "滴定管",

    // Uncertainties > table > td
    "±0.05 cm<sup>3</sup>": "±0.05 cm<sup>3</sup>",

    // Uncertainties > table > td
    "Per reading. A volume delivered uses two readings: ±0.10 cm<sup>3</sup>": "每個讀數。放出的體積用兩個讀數：±0.10 cm<sup>3</sup>",

    // Uncertainties > table > th
    "Measuring cylinder, 10 cm<sup>3</sup>": "量筒，10 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.1 cm<sup>3</sup>": "±0.1 cm<sup>3</sup>",

    // Uncertainties > table > td
    "Not precise enough for standard solutions": "精密度不足以配製標準溶液",

    // Uncertainties > table > th
    "Colorimeter": "比色計",

    // Uncertainties > table > td
    "Absorbance has no units": "吸光度沒有單位",

    // Uncertainties > worked example > data-kicker attribute
    "Worked example 3": "例題 3",

    // Uncertainties > worked example > h3
    "Uncertainty in the stock and in one standard": "儲備溶液和一種標準溶液的不確定度",

    // Uncertainties > worked example > p
    "Use the worked example above: 15.59 g of solid in a 250.0 cm<sup>3</sup> flask gives 0.2497 mol dm<sup>−3</sup>. Standard 2 is 4.00 cm<sup>3</sup> of this stock and 6.00 cm<sup>3</sup> of water, each from a burette. Find the percentage uncertainty in each concentration.": "用上面的例題：15.59 g 固體放在 250.0 cm<sup>3</sup> 容量瓶中，得到 0.2497 mol dm<sup>−3</sup>。標準溶液 2 由 4.00 cm<sup>3</sup> 這種儲備溶液和 6.00 cm<sup>3</sup> 水組成，兩者都用滴定管量取。求每個濃度的百分不確定度。",

    // Uncertainties > worked example > data-title attribute
    "Stock: the mass": "儲備溶液：質量",

    // Uncertainties > worked example > p
    "Weighing by difference uses two readings, ±0.01 g each.": "差減稱量法用兩個讀數，每個 ±0.01 g。",

    // Uncertainties > worked example > data-title attribute
    "Stock: the volume": "儲備溶液：體積",

    // Uncertainties > worked example > p
    "Concentration = <i>n</i> ÷ <i>V</i> is a division, so the percentages add.": "濃度 = <i>n</i> ÷ <i>V</i> 是除法，所以百分不確定度相加。",

    // Uncertainties > worked example > maths line
    "stock: 0.13 % + 0.08 % = 0.21 %, so 0.2497 ± 0.0005 mol dm<sup>−3</sup>": "儲備溶液：0.13 % + 0.08 % = 0.21 %，所以 0.2497 ± 0.0005 mol dm<sup>−3</sup>",

    // Uncertainties > worked example > data-title attribute
    "Standard 2: the volumes": "標準溶液 2：體積",

    // Uncertainties > worked example > p
    "Each burette volume is a difference of two readings: ±0.10 cm<sup>3</sup>. The total volume is a sum of two volumes: ±0.20 cm<sup>3</sup>.": "每個滴定管體積都是兩個讀數的差：±0.10 cm<sup>3</sup>。總體積是兩個體積之和：±0.20 cm<sup>3</sup>。",

    // Uncertainties > worked example > maths line
    "stock taken: 0.10 ÷ 4.00 × 100 = 2.5 %": "取用的儲備溶液：0.10 ÷ 4.00 × 100 = 2.5 %",

    // Uncertainties > worked example > maths line
    "total volume: 0.20 ÷ 10.00 × 100 = 2.0 %": "總體積：0.20 ÷ 10.00 × 100 = 2.0 %",

    // Uncertainties > worked example > data-title attribute
    "Standard 2: combine": "標準溶液 2：合併",

    // Uncertainties > worked example > p
    "<i>C</i><sub>2</sub> = <i>C</i><sub>1</sub> × <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>: multiply and divide, so add all three percentages.": "<i>C</i><sub>2</sub> = <i>C</i><sub>1</sub> × <i>V</i><sub>1</sub> ÷ <i>V</i><sub>2</sub>：有乘有除，所以三個百分不確定度全部相加。",

    // Uncertainties > worked example > p
    "Stock: ±0.21 %. Standard 2: about ±5 %. The small volumes in the dilution, not the balance or the flask, control the uncertainty of the standards.": "儲備溶液：±0.21 %。標準溶液 2：約 ±5 %。決定標準溶液不確定度的，是稀釋時的小體積，而不是天平或容量瓶。",

    // Uncertainties > key idea > p
    "The same absolute uncertainty is a bigger percentage of a smaller quantity. That is why the most dilute standard is the least certain, and why bigger volumes (a pipette into a 100.0 cm<sup>3</sup> flask, say) give better standards than a few cm<sup>3</sup> from a burette.": "同一個絕對不確定度，在較小的量中佔較大的百分比。所以最稀的標準溶液最不確定；用較大的體積（例如用移液管量取到 100.0 cm<sup>3</sup> 容量瓶）配製的標準溶液，也比從滴定管放出幾 cm<sup>3</sup> 的好。",

    // Uncertainties > h3
    "Comparing with the true value": "與真實值比較",

    // Uncertainties > p
    "Suppose the unknown was made by the teacher as 0.150 mol dm<sup>−3</sup>, and you found 0.140 mol dm<sup>−3</sup>.": "假設未知溶液是老師配製的 0.150 mol dm<sup>−3</sup> 溶液，而你求得 0.140 mol dm<sup>−3</sup>。",

    // Uncertainties > maths line
    "percentage error = |0.140 − 0.150| ÷ 0.150 × 100 = 6.7 %": "百分誤差 = |0.140 − 0.150| ÷ 0.150 × 100 = 6.7 %",

    // Uncertainties > p
    "The uncertainty of the result is at least that of the standards (about 5 %), plus the reading of the absorbance (0.01 in 0.41, about 2.4 %), so around 7 %. The percentage error is about the same size, so the result is consistent with the true value within its uncertainty. If the error had been 20 %, you should look for a systematic error.": "結果的不確定度至少等於標準溶液的不確定度（約 5 %），再加上讀取吸光度的不確定度（0.41 中的 0.01，約 2.4 %），所以約為 7 %。百分誤差的大小與此相近，所以在不確定度範圍內，結果與真實值相符。如果誤差是 20 %，你就應該找找有沒有系統誤差。",

    // Uncertainties > try it > p
    "A student makes a standard by running 10.00 cm<sup>3</sup> of stock from a volumetric pipette (±0.04 cm<sup>3</sup>) into a 50.00 cm<sup>3</sup> volumetric flask (±0.08 cm<sup>3</sup>) and making it up to the mark. Ignoring the uncertainty of the stock, calculate the percentage uncertainty in the new concentration.": "一名學生配製一種標準溶液：用移液管（±0.04 cm<sup>3</sup>）把 10.00 cm<sup>3</sup> 儲備溶液放進 50.00 cm<sup>3</sup> 容量瓶（±0.08 cm<sup>3</sup>），再加水至刻度線。不計儲備溶液的不確定度，計算新濃度的百分不確定度。",

    // Uncertainties > try it > li
    "Find the percentage uncertainty of each volume.": "求每個體積的百分不確定度。",

    // Uncertainties > try it > li
    "0.04 ÷ 10.00 × 100 and 0.08 ÷ 50.00 × 100, then add.": "0.04 ÷ 10.00 × 100 和 0.08 ÷ 50.00 × 100，然後相加。",

    // Uncertainties > try it > maths line
    "pipette: 0.04 ÷ 10.00 × 100 = 0.4 %": "移液管：0.04 ÷ 10.00 × 100 = 0.4 %",

    // Uncertainties > try it > maths line
    "flask: 0.08 ÷ 50.00 × 100 = 0.16 %": "容量瓶：0.08 ÷ 50.00 × 100 = 0.16 %",

    // Uncertainties > try it > maths line
    "total = 0.4 % + 0.16 % = 0.56 %": "總計 = 0.4 % + 0.16 % = 0.56 %",

    // Uncertainties > try it > p
    "About 0.6 %, much better than about 5 % with burettes into 10 cm<sup>3</sup>.": "約 0.6 %，比用滴定管量取到 10 cm<sup>3</sup> 的約 5 % 好得多。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差和改進",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評價：誤差和改進",

    // Evaluation: errors and improvements > p
    "<dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">Random errors</dfn> make the points scatter about the line; more precise glassware and repeats reduce them. <dfn data-def=\"An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.\">Systematic errors</dfn> move every result the same way; only a better method removes them.": "<dfn data-def=\"使重複讀數在真實值上下不可預測地散開的誤差。重複量度和取平均值可減少它的影響。\">隨機誤差 <span class=\"en-term\">(random errors)</span></dfn>使數據點在直線兩旁散開；較精密的玻璃儀器和重複量度可減少隨機誤差。<dfn data-def=\"使每個結果都偏向同一方向的誤差，例如總是太低。重複量度不能消除它；必須改變方法。\">系統誤差 <span class=\"en-term\">(systematic errors)</span></dfn>使每個結果都偏向同一方向；只有更好的方法才能消除系統誤差。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "使重複讀數在真實值上下不可預測地散開的誤差。重複量度和取平均值可減少它的影響。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that pushes every result the same way, for example always too low. Repeats do not remove it; the method must change.": "使每個結果都偏向同一方向的誤差，例如總是太低。重複量度不能消除它；必須改變方法。",

    // Evaluation: errors and improvements > table > caption
    "Common errors, their effect, and how to fix them": "常見誤差、其影響和改正方法",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差來源",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "對結果的影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "切實可行的改進",

    // Evaluation: errors and improvements > table > th
    "Rinsings of the beaker and funnel not added to the flask": "沒有把燒杯和漏斗的洗液加進容量瓶",

    // Evaluation: errors and improvements > table > td
    "Some solute is lost: the true concentration is <strong>lower</strong> than the one calculated": "損失了部分溶質：真正濃度比計算值<strong>低</strong>",

    // Evaluation: errors and improvements > table > td
    "Rinse beaker, rod and funnel with distilled water and add every rinsing to the flask": "用蒸餾水沖洗燒杯、玻璃棒和漏斗，並把所有洗液加進容量瓶",

    // Evaluation: errors and improvements > table > th
    "Water added past the mark": "加水超過刻度線",

    // Evaluation: errors and improvements > table > td
    "Volume too large: concentration <strong>lower</strong> than calculated": "體積太大：濃度比計算值<strong>低</strong>",

    // Evaluation: errors and improvements > table > td
    "Add the last few cm<sup>3</sup> drop by drop with a dropping pipette, eye level with the mark": "最後幾 cm<sup>3</sup> 用滴管逐滴加入，眼睛與刻度線在同一水平",

    // Evaluation: errors and improvements > table > th
    "Stopped below the mark, or meniscus read from above": "在刻度線以下就停止，或從上方讀取彎液面",

    // Evaluation: errors and improvements > table > td
    "Volume too small: concentration <strong>higher</strong> than calculated": "體積太小：濃度比計算值<strong>高</strong>",

    // Evaluation: errors and improvements > table > td
    "Read the bottom of the meniscus with your eye level with the mark": "眼睛與刻度線在同一水平，讀取彎液面底部",

    // Evaluation: errors and improvements > table > th
    "Flask not inverted to mix": "沒有倒轉容量瓶搖勻",

    // Evaluation: errors and improvements > table > td
    "The solution is not uniform: samples taken from it are too dilute or too concentrated, at random": "溶液不均勻：從中取出的樣本會隨機地太稀或太濃",

    // Evaluation: errors and improvements > table > td
    "Stopper and invert at least ten times": "塞好並倒轉至少十次",

    // Evaluation: errors and improvements > table > th
    "Mass of solid taken from the first reading only (no reweighing of the boat)": "固體質量只取第一個讀數（沒有再稱量稱量舟）",

    // Evaluation: errors and improvements > table > td
    "Crystals left in the boat are counted: calculated concentration <strong>higher</strong> than the true one": "留在稱量舟裏的晶體也計算在內：計算出的濃度比真正濃度<strong>高</strong>",

    // Evaluation: errors and improvements > table > td
    "Weigh by difference: reweigh the boat after tipping": "用差減稱量法：倒出固體後再稱量稱量舟",

    // Evaluation: errors and improvements > table > th
    "Standards measured with measuring cylinders": "用量筒量取標準溶液",

    // Evaluation: errors and improvements > table > td
    "Large random error: points scatter about the line, so the unknown is less certain": "隨機誤差大：數據點在直線兩旁散開，所以未知濃度較不確定",

    // Evaluation: errors and improvements > table > td
    "Use burettes, or pipettes and volumetric flasks": "用滴定管，或用移液管和容量瓶",

    // Evaluation: errors and improvements > table > th
    "Colorimeter not zeroed with the blank": "沒有用空白溶液把比色計校零",

    // Evaluation: errors and improvements > table > td
    "Every absorbance is too high by the same amount: the line does not pass through the origin. A line through the origin would then give an unknown that is too <strong>high</strong>": "每個吸光度都高出相同的數值：直線不穿過原點。這時若用穿過原點的直線，得出的未知濃度會太<strong>高</strong>",

    // Evaluation: errors and improvements > table > td
    "Zero on a cuvette of distilled water before measuring, and check the zero again between readings": "量度前用裝有蒸餾水的比色杯校零，並在讀數之間再檢查零點",

    // Evaluation: errors and improvements > table > th
    "Fingerprints, scratches or bubbles on the cuvette": "比色杯上有指紋、刮痕或氣泡",

    // Evaluation: errors and improvements > table > td
    "Random extra absorbance: readings too high and scattered": "隨機的額外吸光度：讀數太高而且散亂",

    // Evaluation: errors and improvements > table > td
    "Hold cuvettes by the ridged sides, wipe the clear sides, tap out bubbles": "拿比色杯時握住有坑紋的兩面，抹淨透光的兩面，輕敲以除去氣泡",

    // Evaluation: errors and improvements > table > th
    "Wrong filter (blue light for a blue solution)": "用錯濾光片（藍色溶液用藍光）",

    // Evaluation: errors and improvements > table > td
    "Very small absorbances and a shallow line: a large percentage uncertainty": "吸光度很小，直線平緩：百分不確定度大",

    // Evaluation: errors and improvements > table > td
    "Use the filter of the complementary colour (red or orange for a blue solution)": "用補色的濾光片（藍色溶液用紅色或橙色）",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "For each error, give the direction and the reason: “volume too large, so the concentration is lower than calculated”. Then give an improvement that fixes that exact error. The colour wheel in the data booklet tells you which filter is complementary to the colour of the solution.": "每種誤差都要寫出影響的方向和原因：「體積太大，所以濃度比計算值低」。然後寫出針對這個誤差的改進方法。數據手冊中的色輪告訴你哪種濾光片是溶液顏色的補色。",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "考試練習",

    // Exam practice > p
    "These questions are in the style of Paper 1B: short parts built on practical data. Write your working on paper before you type an answer.": "這些題目屬於 Paper 1B 的形式：以實驗數據為基礎的短題。先在紙上寫出計算步驟，再輸入答案。",

    // Exam practice > data-title attribute
    "Lab 6: standard solutions and calibration": "實驗 6：標準溶液和校準",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copy table": "複製表格",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Raw data": "原始數據",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "No readings yet.": "還沒有讀數。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copied. Paste it into a spreadsheet or your notes.": "已複製。把它貼到試算表或你的筆記裏。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Copying is blocked here. Select the table and copy it by hand.": "這裏無法複製。請選取表格，自行複製。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Volumetric flask": "容量瓶",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "100.0 cm³ (±0.10 cm³)": "100.0 cm³ (±0.10 cm³)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "250.0 cm³ (±0.2 cm³)": "250.0 cm³ (±0.2 cm³)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Check": "檢查",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Transfer to the flask": "轉移到容量瓶",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Rinse beaker, rod and funnel; add rinsings": "沖洗燒杯、玻璃棒和漏斗；加入洗液",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Pour only, no rinsing": "只倒入，不沖洗",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Making up to the mark": "加水至刻度線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Eye level, last drops by dropping pipette": "眼睛平視，最後幾滴用滴管",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Fill quickly from the wash bottle": "用洗瓶快速注水",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stop with the meniscus below the mark": "彎液面在刻度線以下就停止",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mixing": "搖勻",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stopper and invert ten times": "塞好並倒轉十次",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Do not mix": "不搖勻",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Do the next step": "做下一步",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Start again": "重新開始",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "A balance and a volumetric flask with a close-up of the neck, showing the meniscus and the graduation mark": "天平和容量瓶，並放大瓶頸，顯示彎液面和刻度線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Part A: making the standard solution": "A 部分：配製標準溶液",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Balance reading": "天平讀數",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Concentration from your data": "由你的數據得出的濃度",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Concentration really in the flask": "容量瓶中真正的濃度",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Your calculated mass of CuSO₄·5H₂O for {v} cm³ of {c} mol dm⁻³": "你計算出配製 {v} cm³ {c} mol dm⁻³ 溶液所需 CuSO₄·5H₂O 的質量",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Correct: aim for about {m} g. You do not need exactly this mass, but you must record the mass you use.": "正確：目標約為 {m} g。你不需要剛好這個質量，但必須記錄你所用的質量。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Right value. Give it to 3 or 4 significant figures.": "數值正確。請取 3 或 4 位有效數字。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Type a number, such as 12.3.": "請輸入一個數，例如 12.3。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Not yet. Use n = CV with V in dm³, then m = n × M with the molar mass of the hydrate, 249.72 g mol⁻¹.": "仍未正確。用 n = CV（V 以 dm³ 為單位），再用 m = n × M，其中 M 是水合物的摩爾質量 249.72 g mol⁻¹。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Weigh the weighing boat with the solid.": "用稱量舟稱取固體。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Tip the solid into a beaker and reweigh the empty boat.": "把固體倒進燒杯，再稱量空的稱量舟。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Dissolve the solid in about 100 cm³ of distilled water, stirring.": "把固體溶解在約 100 cm³ 蒸餾水中，並攪拌。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Transfer the solution to the volumetric flask through a funnel.": "把溶液經漏斗轉移到容量瓶。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Add distilled water up to the mark.": "加入蒸餾水至刻度線。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Stopper the flask and mix.": "塞好容量瓶並搖勻。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "the mark": "刻度線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "{v} cm³ flask": "{v} cm³ 容量瓶",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "balance, ±0.01 g": "天平，±0.01 g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Ready to weigh": "準備稱量",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Step {n} of 6 done": "已完成第 {n} 步（共 6 步）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus on the mark": "彎液面在刻度線上",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus above the mark": "彎液面高於刻度線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "meniscus below the mark": "彎液面低於刻度線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "(done)": "（已完成）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "(next)": "（下一步）",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of boat and solid / g": "稱量舟和固體的質量 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of empty boat after tipping / g": "倒出後空稱量舟的質量 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mass of solid transferred / g": "轉移的固體質量 / g",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Volume of solution / cm³": "溶液的體積 / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Quantity": "物理量",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Value": "數值",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The solution really in the flask differs from your calculated value by {d} %.": "容量瓶中真正的溶液與你的計算值相差 {d} %。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Without rinsing, some copper(II) sulfate stayed in the beaker and funnel, so the true concentration is lower than you calculated.": "沒有沖洗，部分硫酸銅(II) 留在燒杯和漏斗裏，所以真正濃度比你的計算值低。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You went past the mark, so the volume is too large and the true concentration is lower than you calculated.": "你加水超過了刻度線，所以體積太大，真正濃度比你的計算值低。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You stopped below the mark, so the volume is too small and the true concentration is higher than you calculated.": "你在刻度線以下就停止，所以體積太小，真正濃度比你的計算值高。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Not mixed: a sample from the top of the flask is only {c} mol dm⁻³. The solution is not uniform.": "沒有搖勻：從容量瓶頂部取的樣本只有 {c} mol dm⁻³。溶液不均勻。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Good technique: the only differences come from the balance and the tolerance of the flask, and they are tiny.": "技巧正確：唯一的差異來自天平和容量瓶的容許誤差，而且非常小。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Measure the volumes with": "量取體積的儀器",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Two burettes (±0.05 cm³)": "兩支滴定管 (±0.05 cm³)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Two measuring cylinders (±0.1 cm³)": "兩個量筒 (±0.1 cm³)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Colorimeter filter": "比色計濾光片",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Red": "紅色",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Green": "綠色",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Blue": "藍色",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "1. Make the standards": "1. 配製標準溶液",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "2. Zero with the blank": "2. 用空白溶液校零",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "3. Measure the standards": "3. 量度標準溶液",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "4. Measure the unknown (×3)": "4. 量度未知溶液 (×3)",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Reveal the true value": "顯示真實值",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "New run": "再做一次",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Part B: standards and absorbance readings": "B 部分：標準溶液和吸光度讀數",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Gradient of the line": "直線的斜率",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "y-intercept": "y 截距",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Mean absorbance of the unknown": "未知溶液的平均吸光度",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Unknown concentration read from the line": "從直線讀出的未知濃度",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "standards": "標準溶液",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "line of best fit": "最佳擬合線",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "unknown": "未知溶液",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Calibration graph: absorbance against concentration of copper(II) sulfate for the standards, with the line of best fit and the reading for the unknown": "校準圖表：各標準溶液的吸光度對硫酸銅(II) 濃度，附最佳擬合線和未知溶液的讀數",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Start by making the five standards from the 0.250 mol dm⁻³ stock solution.": "先用 0.250 mol dm⁻³ 儲備溶液配製五種標準溶液。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The colorimeter reads zero with the blank. Now measure the standards.": "用空白溶液時比色計讀數為零。現在量度標準溶液。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Zero the colorimeter with the blank (distilled water) before you measure.": "量度前，先用空白溶液（蒸餾水）把比色計校零。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "You did not zero on the blank: every reading includes the absorbance of the cuvette and water, so the line does not pass through the origin.": "你沒有用空白溶液校零：每個讀數都包括比色杯和水的吸光度，所以直線不穿過原點。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "With this filter the absorbances are small and the line is shallow, so each 0.01 reading error is a large part of the value. A blue solution absorbs red light most.": "用這種濾光片，吸光度很小，直線平緩，所以每個 0.01 的讀數誤差都佔數值的一大部分。藍色溶液吸收最多的是紅光。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Now measure the unknown three times.": "現在量度未知溶液三次。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Read across from the unknown’s mean absorbance to the line, then down to the concentration axis.": "從未知溶液的平均吸光度橫向讀到直線，再向下讀到濃度軸。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Standard {n}": "標準溶液 {n}",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "Tube": "試管",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "V(stock) / cm³": "V(儲備溶液) / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "V(water) / cm³": "V(水) / cm³",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "mean absorbance = ({a} + {b} + {c}) ÷ 3 = {m}": "平均吸光度 = ({a} + {b} + {c}) ÷ 3 = {m}",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The unknown is above the top standard. Dilute it by a known factor and measure it again.": "未知溶液高於最濃的標準溶液。按已知倍數把它稀釋，再量度一次。",

    // widget string (assets/js/widgets-lab-standard-solution.js)
    "The true concentration of the unknown is {c} mol dm⁻³. Your percentage error: {e} %.": "未知溶液的真正濃度是 {c} mol dm⁻³。你的百分誤差：{e} %。",

  }
});
