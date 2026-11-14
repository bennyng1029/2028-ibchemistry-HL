/* lab-chromatography — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-chromatography', {
  strings: {

    // page title (browser tab)
    "Lab 2 Paper and thin-layer chromatography | Structure Lab": "實驗 2 紙色層法和薄層色層法 | Structure Lab",

    // Paper and thin-layer chromatography > page header > p
    "Lab 2 · Structure 1.1 and 2.2": "實驗 2 · Structure 1.1 和 2.2",

    // Paper and thin-layer chromatography > page header > h1
    "Paper and thin-layer chromatography": "紙色層法和薄層色層法",

    // Paper and thin-layer chromatography > page header > span
    "How can paper or thin-layer chromatography separate the parts of a mixture, and what do R<sub>F</sub> values tell you about them?": "紙色層法或薄層色層法怎樣把混合物的各部分分開？R<sub>F</sub> 值又告訴你它們甚麼？",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "This lab practises the chromatography technique from Structure 1.1.1 and Tool 1, and the R<sub>F</sub> skills from Structure 2.2.10. Tick each item when you can do it without help.": "這個實驗練習 Structure 1.1.1 和 Tool 1 的色層法技術，以及 Structure 2.2.10 的 R<sub>F</sub> 值技巧。當你不用別人幫忙也做得到某一項時，就剔選它。",

    // What you need to be able to do > checklist > span
    "Describe how to run a paper or TLC chromatogram and give the reason for each key step.": "描述怎樣製作紙色層譜或薄層色層譜，並說明每個主要步驟的原因。",

    // What you need to be able to do > checklist > span
    "Measure the distances moved by a spot and by the solvent front, both from the baseline.": "由基線起，量度斑點和溶劑前沿各自移動的距離。",

    // What you need to be able to do > checklist > span
    "Calculate an R<sub>F</sub> value to a sensible precision, with no unit.": "計算 R<sub>F</sub> 值至合理的精密度，不寫單位。",

    // What you need to be able to do > checklist > span
    "Use R<sub>F</sub> values and reference substances to identify the parts of a mixture.": "用 R<sub>F</sub> 值和參照物質辨認混合物的各部分。",

    // What you need to be able to do > checklist > span
    "Explain differences in R<sub>F</sub> using the polarity of the substances and of the stationary and mobile phases.": "用物質、固定相和流動相的極性，解釋 R<sub>F</sub> 值的差異。",

    // What you need to be able to do > checklist > span
    "Work out the uncertainty of an R<sub>F</sub> value and use it when you compare values.": "計算 R<sub>F</sub> 值的不確定度，並在比較數值時運用它。",

    // What you need to be able to do > checklist > span
    "Identify errors in a chromatography experiment and suggest realistic improvements.": "辨認色層法實驗中的誤差，並提出切實可行的改進方法。",

    // The chemistry behind it > data-toc attribute
    "Background": "背景",

    // The chemistry behind it > h2
    "The chemistry behind it": "背後的化學",

    // The chemistry behind it > p
    "Chromatography separates the parts of a mixture because they have different attractions, through intermolecular forces, to two phases. The <dfn data-def=\"The phase that does not move: the water held in the paper fibres, or the silica layer on a TLC plate.\">stationary phase</dfn> stays still. The <dfn data-def=\"The solvent that moves through the paper or plate, carrying the parts of the mixture with it.\">mobile phase</dfn> is the solvent that moves up and carries the mixture with it.": "色層法能把混合物的各部分分開，因為它們透過分子間引力對兩個相的吸引力不同。<dfn data-def=\"不會移動的相：紙纖維中保留的水，或薄層板上的矽石層。\">固定相 <span class=\"en-term\">(stationary phase)</span></dfn>保持不動。<dfn data-def=\"在紙或薄層板上移動的溶劑，它會帶着混合物的各部分一起移動。\">流動相 <span class=\"en-term\">(mobile phase)</span></dfn>是向上移動、帶着混合物一起走的溶劑。",

    // The chemistry behind it > data-def attribute
    "The phase that does not move: the water held in the paper fibres, or the silica layer on a TLC plate.": "不會移動的相：紙纖維中保留的水，或薄層板上的矽石層。",

    // The chemistry behind it > data-def attribute
    "The solvent that moves through the paper or plate, carrying the parts of the mixture with it.": "在紙或薄層板上移動的溶劑，它會帶着混合物的各部分一起移動。",

    // The chemistry behind it > table > caption
    "The two techniques in this lab": "本實驗的兩種技術",

    // The chemistry behind it > table > th
    "Technique": "技術",

    // The chemistry behind it > table > th
    // widget string (assets/js/widgets-lab-chromatography.js)
    "Stationary phase": "固定相",

    // The chemistry behind it > table > th
    "Mobile phase used here": "這裏使用的流動相",

    // The chemistry behind it > table > th
    "paper chromatography": "紙色層法",

    // The chemistry behind it > table > td
    "water held in the cellulose fibres of the paper (polar)": "保留在紙的纖維素纖維中的水（極性）",

    // The chemistry behind it > table > td
    "mixtures of ethanol and water": "乙醇和水的混合物",

    // The chemistry behind it > table > th
    "thin-layer chromatography (TLC)": "薄層色層法 (TLC)",

    // The chemistry behind it > table > td
    "a thin layer of silica, <span class=\"chem\">SiO2</span>, on a plate (polar, with –OH groups on its surface)": "板上的一層薄矽石 <span class=\"chem\">SiO2</span>（極性，表面有 –OH 基）",

    // The chemistry behind it > table > td
    "mixtures of hexane and ethyl acetate": "己烷和乙酸乙酯的混合物",

    // The chemistry behind it > p
    "Both stationary phases are polar and can form hydrogen bonds. So a polar substance is held back strongly and moves only a short way. A less polar substance spends more time dissolved in the moving solvent and travels further. Making the mobile phase <strong>more polar</strong> helps it compete for the polar substances, so every spot moves further.": "兩種固定相都是極性的，而且能形成氫鍵。所以極性物質被牢牢留住，只移動很短的距離。極性較弱的物質有較多時間溶在移動的溶劑中，走得較遠。使流動相的<strong>極性較強</strong>，它就能和固定相爭奪極性物質，所以每個斑點都會走得更遠。",

    // The chemistry behind it > equation > maths line
    "<i>R</i><sub>F</sub> = <span class=\"frac\"><span>distance moved by the spot</span><span>distance moved by the solvent front</span></span>": "<i>R</i><sub>F</sub> = <span class=\"frac\"><span>斑點移動的距離</span><span>溶劑前沿移動的距離</span></span>",

    // The chemistry behind it > equation > dt
    // widget string (assets/js/widgets-lab-chromatography.js)
    "R<sub>F</sub>": "R<sub>F</sub>",

    // The chemistry behind it > equation > dd
    "retardation factor, between 0 and 1, no unit": "比移值 (retardation factor)，在 0 和 1 之間，沒有單位",

    // The chemistry behind it > equation > dt
    "distances": "距離",

    // The chemistry behind it > equation > dd
    "both measured from the baseline; spot distance to the centre of the spot <span class=\"unit\">cm</span>": "兩者都由基線量起；斑點的距離量到斑點中心 <span class=\"unit\">cm</span>",

    // The chemistry behind it > p
    "A substance has the same R<sub>F</sub> value only if the stationary phase, the solvent and the temperature are the same. That is why known substances are run on the <strong>same</strong> paper as the mixture. The full theory is in <a href=\"../topics/s2-2.html#chromatography\">Structure 2.2: chromatography</a>, and the place of chromatography among other separation methods is in <a href=\"../topics/s1-1.html#separating\">Structure 1.1</a> and <a href=\"lab-separation.html\">Lab 1</a>.": "只有固定相、溶劑和溫度都相同，同一種物質的 R<sub>F</sub> 值才會相同。所以已知物質要和混合物在<strong>同一張</strong>紙上進行。完整的理論見 <a href=\"../topics/s2-2.html#chromatography\">Structure 2.2：色層法</a>；色層法在各種分離方法中的位置，見 <a href=\"../topics/s1-1.html#separating\">Structure 1.1</a> 和<a href=\"lab-separation.html\">實驗 1</a>。",

    // The chemistry behind it > not needed for IB > p
    "Locating agents (a UV lamp, iodine, ninhydrin) for colourless spots are not required. Nor are column chromatography, two-way chromatography, or how gas chromatographs and HPLC machines work. The equation the simulation uses to produce R<sub>F</sub> values is not part of the course.": "你不需要知道用來顯示無色斑點的顯色劑（紫外燈、碘、茚三酮），也不需要學柱色層法、雙向色層法，或氣相色層儀和 HPLC 儀器的運作原理。模擬器用來產生 R<sub>F</sub> 值的方程不屬於課程內容。",

    // Aim, variables and safety > data-toc attribute
    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的、變量和安全",

    // Aim, variables and safety > p
    "<strong>Aim:</strong> to find out which of four known substances, A to D, are present in a mixture M, and to investigate how the polarity of the mobile phase affects R<sub>F</sub> values.": "<strong>目的：</strong>找出 A 至 D 四種已知物質中，哪些存在於混合物 M 中，並探究流動相的極性怎樣影響 R<sub>F</sub> 值。",

    // Aim, variables and safety > table > caption
    "Variables in the solvent investigation": "溶劑探究中的變量",

    // Aim, variables and safety > table > th
    "Type": "類型",

    // Aim, variables and safety > table > th
    "Variable": "變量",

    // Aim, variables and safety > table > th
    "How it is measured or kept the same": "量度方法或保持不變的方法",

    // Aim, variables and safety > table > th
    "Independent": "自變量",

    // Aim, variables and safety > table > td
    "percentage of the more polar solvent in the mobile phase": "流動相中極性較強的溶劑的百分率",

    // Aim, variables and safety > table > td
    "measured with graduated pipettes or a measuring cylinder": "用刻度移液管或量筒量度",

    // Aim, variables and safety > table > th
    "Dependent": "應變量",

    // Aim, variables and safety > table > td
    "R<sub>F</sub> value of each spot": "每個斑點的 R<sub>F</sub> 值",

    // Aim, variables and safety > table > td
    "distances measured with a ruler, ±0.05 cm per reading": "用直尺量度距離，每個讀數 ±0.05 cm",

    // Aim, variables and safety > table > th
    "Controlled": "控制變量",

    // Aim, variables and safety > table > td
    "type of paper or plate": "紙或薄層板的種類",

    // Aim, variables and safety > table > td
    "cut from the same sheet or box": "從同一張紙或同一盒中裁出",

    // Aim, variables and safety > table > td
    "temperature and solvent vapour in the tank": "溫度和色層槽中的溶劑蒸氣",

    // Aim, variables and safety > table > td
    "same room; lid on and tank left to saturate before each run": "同一個房間；每次進行前蓋上蓋子，讓色層槽內的蒸氣飽和",

    // Aim, variables and safety > table > td
    "position and size of the spots": "斑點的位置和大小",

    // Aim, variables and safety > table > td
    "same baseline height (1.5 cm); small spots from a fine capillary": "基線高度相同（1.5 cm）；用幼細的毛細管點出小斑點",

    // Aim, variables and safety > h3
    "Equipment": "儀器",

    // Aim, variables and safety > li
    "chromatography paper or silica TLC plates": "色層紙或矽石薄層板",

    // Aim, variables and safety > li
    "mixture M and reference solutions A, B, C, D": "混合物 M 和參照溶液 A、B、C、D",

    // Aim, variables and safety > li
    "fine glass capillary tubes for spotting": "用來點樣的幼細玻璃毛細管",

    // Aim, variables and safety > li
    "chromatography tank or beaker with a lid": "有蓋的色層槽或燒杯",

    // Aim, variables and safety > li
    "ethanol, water, hexane, ethyl acetate": "乙醇、水、己烷、乙酸乙酯",

    // Aim, variables and safety > li
    "10 cm<sup>3</sup> measuring cylinders": "10 cm<sup>3</sup> 量筒",

    // Aim, variables and safety > li
    "pencil and 30 cm ruler (1 mm divisions)": "鉛筆和 30 cm 直尺（每格 1 mm）",

    // Aim, variables and safety > li
    "fume cupboard": "煙櫥",

    // Aim, variables and safety > p
    "Wear eye protection. Ethanol, hexane and ethyl acetate are highly flammable: there must be no naked flames anywhere in the room. Hexane and ethyl acetate vapours are harmful and irritating, and long exposure to hexane can damage nerves: run TLC in a fume cupboard and keep the tank covered.": "戴上護目鏡。乙醇、己烷和乙酸乙酯都極易燃：整個房間內都不可以有明火。己烷和乙酸乙酯的蒸氣有害並有刺激性，長時間接觸己烷可損害神經：要在煙櫥中進行薄層色層法，並把色層槽蓋好。",

    // Aim, variables and safety > p
    "Capillary tubes are thin glass: put broken ones in the glass bin. Do not scrape the silica layer, because the dust irritates the lungs. Pour used organic solvents into the labelled residue bottle, not down the sink.": "毛細管是幼細的玻璃管：打破了要放進玻璃廢物箱。不要刮矽石層，因為粉塵會刺激肺部。用過的有機溶劑要倒進有標籤的廢液瓶，不要倒進水槽。",

    // Method > h2
    "Method": "方法",

    // Method > li
    "Draw a baseline in <strong>pencil</strong> 1.5 cm from the bottom of the paper and mark five lanes. <em>Why:</em> graphite does not dissolve in the solvent; ink would run.": "用<strong>鉛筆</strong>在距離紙底部 1.5 cm 處畫一條基線，並標出五條道。<em>原因：</em>石墨不會溶於溶劑；墨水則會化開。",

    // Method > li
    "Use a fine capillary to put a small spot of M on the baseline. Let it dry and add more to the same place two or three times. Spot A, B, C and D in the other lanes. <em>Why:</em> small, concentrated spots give compact spots that do not overlap.": "用幼細的毛細管在基線上點一小點 M。讓它乾透，再在同一位置多點兩三次。在其他道點上 A、B、C 和 D。<em>原因：</em>小而濃的斑點會形成緊密、不重疊的斑點。",

    // Method > li
    "Pour the mobile phase into the tank to a depth of about 0.8 cm, put the lid on and leave it for a few minutes. <em>Why:</em> the air in the tank fills with solvent vapour, so the solvent does not evaporate from the paper as it rises.": "把流動相倒進色層槽，深約 0.8 cm，蓋上蓋子，放置幾分鐘。<em>原因：</em>色層槽內的空氣會充滿溶劑蒸氣，所以溶劑沿紙上升時不會從紙上蒸發。",

    // Method > li
    "Stand the paper in the tank with the baseline <strong>above</strong> the solvent level, not touching the sides, and replace the lid. <em>Why:</em> spots below the solvent level would dissolve into the solvent in the tank.": "把紙豎立在色層槽中，基線要<strong>高於</strong>溶劑液面，紙不要碰到槽壁，然後蓋回蓋子。<em>原因：</em>低於溶劑液面的斑點會溶進槽內的溶劑中。",

    // Method > li
    "When the solvent front is about 1 cm from the top, take the paper out and mark the solvent front in pencil at once. <em>Why:</em> the front cannot be seen once the solvent evaporates, and if it reaches the top you cannot tell how far it would have gone.": "當溶劑前沿距離頂部約 1 cm 時，取出紙張，立即用鉛筆標出溶劑前沿。<em>原因：</em>溶劑蒸發後就看不到前沿；如果前沿到達頂部，你就無法知道它本來會走多遠。",

    // Method > li
    "Let the paper dry in the fume cupboard. Draw a pencil ring round each spot.": "讓紙在煙櫥中乾透。用鉛筆在每個斑點周圍畫一個圈。",

    // Method > li
    "With the ruler's zero at the bottom edge, read the positions of the baseline, the solvent front and the centre of each spot. Subtract the baseline reading to get each distance.": "把直尺的零點對準紙的底邊，讀出基線、溶劑前沿和每個斑點中心的位置。減去基線的讀數，得出每個距離。",

    // Method > li
    "Repeat with mobile phases of different composition, keeping everything else the same.": "用不同組成的流動相重複實驗，其他一切保持不變。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "進行實驗",

    // Run the experiment > h3
    "1. Identify the parts of mixture M": "1. 辨認混合物 M 的各部分",

    // Run the experiment > p
    "Run the paper with the method as written. Stop it before the solvent reaches the top. Then record readings for the baseline, the front and each spot, and decide which reference substances are in M. Afterwards, try each faulty set-up and see what goes wrong.": "按書面的方法進行。在溶劑到達頂部之前停止。然後記錄基線、前沿和每個斑點的讀數，並判斷 M 含有哪些參照物質。之後，試試每一種有問題的裝置，看看出了甚麼問題。",

    // Run the experiment > widget > data-title attribute
    "Chromatography tank": "色層槽",

    // Run the experiment > widget > figcaption
    "Press Run, then \"Take out and mark the front\". Move the ruler line (slider, number box, or tap the picture), choose what the reading is for, and press Record reading. The table works out distances and R<sub>F</sub> values once you have recorded the baseline and the front. A new run gives slightly different values. All values are model data.": "按「開始」，然後按「取出並標出前沿」。移動直尺線（用滑桿、數字方格，或點選圖片），選擇讀數所屬的位置，然後按「記錄讀數」。記錄了基線和前沿之後，表格會計算距離和 R<sub>F</sub> 值。重新進行會得出稍有不同的數值。所有數值都是模型數據。",

    // Run the experiment > h3
    "2. Change the polarity of the mobile phase": "2. 改變流動相的極性",

    // Run the experiment > p
    "Now run mixture M in six mobile phases at once, from 0 % to 100 % of the more polar solvent. Look at the trend and choose the mobile phase that separates the three spots best.": "現在用六種流動相同時進行混合物 M 的色層分析，極性較強的溶劑由 0 % 至 100 %。觀察趨勢，選出把三個斑點分得最開的流動相。",

    // Run the experiment > widget > data-title attribute
    "Solvent series": "溶劑系列",

    // Run the experiment > widget > figcaption
    "Press Run all six. Each line is one spot of M, with its own marker shape: circle for spot 1, square for spot 2, triangle for spot 3. The \"smallest gap\" column shows how close the two nearest spots are. All values are model data.": "按「六個同時開始」。每條線代表 M 的一個斑點，各有自己的標記形狀：圓形是斑點 1，方形是斑點 2，三角形是斑點 3。「最小間距」一欄顯示最接近的兩個斑點有多近。所有數值都是模型數據。",

    // Run the experiment > key idea > p
    "Every R<sub>F</sub> value goes up as the mobile phase becomes more polar. The order of the spots does not change: the most polar substance, which is held most strongly by the polar stationary phase, always has the smallest R<sub>F</sub>.": "流動相的極性越強，每個 R<sub>F</sub> 值都越大。斑點的次序不會改變：極性最強的物質被極性固定相留得最牢，所以 R<sub>F</sub> 值總是最小。",

    // Processing the data > data-toc attribute
    // Processing the data > h2
    "Processing the data": "處理數據",

    // Processing the data > worked example > data-kicker attribute
    "Worked example": "例題",

    // Processing the data > worked example > h3
    "R<sub>F</sub> values from ruler readings": "由直尺讀數求 R<sub>F</sub> 值",

    // Processing the data > worked example > p
    "A student ran mixture M on paper with 40 % water in ethanol. With the ruler's zero at the bottom edge, the readings were: baseline 1.5 cm, solvent front 9.7 cm, spots of M at 3.6 cm, 5.6 cm and 8.7 cm. On the same paper, the references gave R<sub>F</sub> values of B 0.25, C 0.69 and D 0.87. Calculate the R<sub>F</sub> values of the three spots and identify them.": "某學生用含 40 % 水的乙醇作溶劑，在紙上進行混合物 M 的色層分析。直尺的零點對準底邊，讀數如下：基線 1.5 cm，溶劑前沿 9.7 cm，M 的斑點在 3.6 cm、5.6 cm 和 8.7 cm。在同一張紙上，參照物質的 R<sub>F</sub> 值是 B 0.25、C 0.69 和 D 0.87。計算三個斑點的 R<sub>F</sub> 值，並辨認它們。",

    // Processing the data > worked example > data-title attribute
    "Turn readings into distances": "把讀數轉化為距離",

    // Processing the data > worked example > p
    "Both distances start at the baseline, not at the edge of the paper.": "兩個距離都由基線起計，不是由紙邊起計。",

    // Processing the data > worked example > maths line
    "solvent front: 9.7 cm − 1.5 cm = 8.2 cm": "溶劑前沿：9.7 cm − 1.5 cm = 8.2 cm",

    // Processing the data > worked example > maths line
    "spots: 3.6 − 1.5 = 2.1 cm; 5.6 − 1.5 = 4.1 cm; 8.7 − 1.5 = 7.2 cm": "斑點：3.6 − 1.5 = 2.1 cm；5.6 − 1.5 = 4.1 cm；8.7 − 1.5 = 7.2 cm",

    // Processing the data > worked example > data-title attribute
    "Divide each spot distance by the front distance": "把每個斑點的距離除以前沿的距離",

    // Processing the data > worked example > p
    "The spot cannot move further than the solvent, so each answer is less than 1.": "斑點不可能走得比溶劑遠，所以每個答案都小於 1。",

    // Processing the data > worked example > maths line
    "spot 1: 2.1 / 8.2 = 0.256…": "斑點 1：2.1 / 8.2 = 0.256…",

    // Processing the data > worked example > maths line
    "spot 2: 4.1 / 8.2 = 0.500": "斑點 2：4.1 / 8.2 = 0.500",

    // Processing the data > worked example > maths line
    "spot 3: 7.2 / 8.2 = 0.878…": "斑點 3：7.2 / 8.2 = 0.878…",

    // Processing the data > worked example > data-title attribute
    "Round to the data": "按數據取捨位數",

    // Processing the data > worked example > p
    "The distances have 2 significant figures, so give R<sub>F</sub> to 2 decimal places (2 significant figures). It has no unit.": "距離有 2 位有效數字，所以 R<sub>F</sub> 值取至小數點後 2 位（2 位有效數字）。它沒有單位。",

    // Processing the data > worked example > data-title attribute
    "Compare with the references": "和參照物質比較",

    // Processing the data > worked example > p
    "Same R<sub>F</sub> on the same paper means probably the same substance.": "在同一張紙上 R<sub>F</sub> 值相同，表示很可能是同一種物質。",

    // Processing the data > worked example > p
    "Spot 1 (0.26) matches B (0.25). Spot 3 (0.88) matches D (0.87). Spot 2 (0.50) does not match C (0.69) or any other reference.": "斑點 1 (0.26) 與 B (0.25) 相符。斑點 3 (0.88) 與 D (0.87) 相符。斑點 2 (0.50) 與 C (0.69) 或任何其他參照物質都不相符。",

    // Processing the data > worked example > p
    "R<sub>F</sub> = 0.26, 0.50 and 0.88. M contains B, D and one substance that is not A, B, C or D.": "R<sub>F</sub> = 0.26、0.50 和 0.88。M 含有 B、D，以及一種不是 A、B、C 或 D 的物質。",

    // Processing the data > try it > data-label attribute
    // widget string (assets/js/widgets-lab-chromatography.js)
    "RF value": "RF 值",

    // Processing the data > try it > p
    "On a TLC plate, the ruler (zero at the bottom edge) reads 2.0 cm at the baseline, 10.4 cm at the solvent front and 7.1 cm at the centre of a spot. Calculate the R<sub>F</sub> value of the spot.": "在一塊薄層板上，直尺（零點對準底邊）在基線的讀數是 2.0 cm，在溶劑前沿是 10.4 cm，在一個斑點中心是 7.1 cm。計算這個斑點的 R<sub>F</sub> 值。",

    // Processing the data > try it > li
    "Subtract the baseline reading from both of the other readings first.": "先從另外兩個讀數中減去基線的讀數。",

    // Processing the data > try it > li
    "The spot moved 5.1 cm and the front moved 8.4 cm. Divide.": "斑點移動了 5.1 cm，前沿移動了 8.4 cm。把兩者相除。",

    // Processing the data > try it > maths line
    "spot: 7.1 cm − 2.0 cm = 5.1 cm; front: 10.4 cm − 2.0 cm = 8.4 cm": "斑點：7.1 cm − 2.0 cm = 5.1 cm；前沿：10.4 cm − 2.0 cm = 8.4 cm",

    // Processing the data > common mistake > p
    "Three slips cost marks: measuring from the edge of the paper instead of the baseline, dividing by the length of the paper instead of the distance to the solvent front, and giving R<sub>F</sub> a unit. An R<sub>F</sub> above 1 always means the fraction is upside down.": "三種失誤會失分：由紙邊而不是由基線量起；除以紙的長度而不是到溶劑前沿的距離；給 R<sub>F</sub> 值加上單位。R<sub>F</sub> 值大於 1，一定表示分數上下倒轉了。",

    // Uncertainties > h2
    "Uncertainties": "不確定度",

    // Uncertainties > p
    "A ruler with 1 mm divisions can be read to ±0.05 cm. Each distance is the difference of two readings (the feature and the baseline), so add the absolute uncertainties:": "每格 1 mm 的直尺可以讀至 ±0.05 cm。每個距離都是兩個讀數（該位置和基線）之差，所以要把絕對不確定度相加：",

    // Uncertainties > p
    "R<sub>F</sub> is a division, so add the percentage uncertainties. For spot 1 in the worked example:": "R<sub>F</sub> 是一個除法，所以要把百分不確定度相加。以例題中的斑點 1 為例：",

    // Uncertainties > maths line
    "spot: (0.1 / 2.1) × 100 = 4.8 %": "斑點：(0.1 / 2.1) × 100 = 4.8 %",

    // Uncertainties > maths line
    "front: (0.1 / 8.2) × 100 = 1.2 %": "前沿：(0.1 / 8.2) × 100 = 1.2 %",

    // Uncertainties > maths line
    "% uncertainty of <i>R</i><sub>F</sub> = 4.8 % + 1.2 % = 6.0 %": "<i>R</i><sub>F</sub> 的百分不確定度 = 4.8 % + 1.2 % = 6.0 %",

    // Uncertainties > maths line
    "absolute uncertainty = 0.256 × 6.0 / 100 = ±0.015, so <i>R</i><sub>F</sub> = 0.26 ± 0.02": "絕對不確定度 = 0.256 × 6.0 / 100 = ±0.015，所以 <i>R</i><sub>F</sub> = 0.26 ± 0.02",

    // Uncertainties > p
    "A spot that has moved only a short way has a large percentage uncertainty. Letting the solvent run further makes all the distances bigger and the percentage uncertainties smaller. Judging the centre of a wide, fuzzy spot adds more uncertainty than the ruler does, so keep the spots small.": "只移動了很短距離的斑點，百分不確定度很大。讓溶劑走得更遠，所有距離都會變大，百分不確定度就會變小。判斷又闊又模糊的斑點的中心，帶來的不確定度比直尺還大，所以斑點要點得小。",

    // Uncertainties > try it > data-label attribute
    "Percentage uncertainty": "百分不確定度",

    // Uncertainties > try it > p
    "Calculate the percentage uncertainty of the R<sub>F</sub> value of spot 3 in the worked example (spot 7.2 cm, front 8.2 cm, each ±0.1 cm).": "計算例題中斑點 3 的 R<sub>F</sub> 值的百分不確定度（斑點 7.2 cm，前沿 8.2 cm，各 ±0.1 cm）。",

    // Uncertainties > try it > li
    "Work out the percentage uncertainty of each distance.": "計算每個距離的百分不確定度。",

    // Uncertainties > try it > li
    "Add (0.1 / 7.2) × 100 and (0.1 / 8.2) × 100.": "把 (0.1 / 7.2) × 100 和 (0.1 / 8.2) × 100 相加。",

    // Uncertainties > try it > maths line
    "% uncertainty = 1.39 % + 1.22 % = 2.6 %": "百分不確定度 = 1.39 % + 1.22 % = 2.6 %",

    // Uncertainties > h3
    "Comparing with a reference value": "和參考值比較",

    // Uncertainties > p
    "A data sheet gives R<sub>F</sub> = 0.25 for substance B under the same conditions. Spot 1 gave 0.256.": "一份數據表列出物質 B 在相同條件下的 R<sub>F</sub> = 0.25。斑點 1 得出 0.256。",

    // Uncertainties > maths line
    "percentage error = |0.256 − 0.25| / 0.25 × 100 = 2.4 %": "百分誤差 = |0.256 − 0.25| / 0.25 × 100 = 2.4 %",

    // Uncertainties > p
    "The percentage error (2.4 %) is smaller than the percentage uncertainty (6.0 %), so spot 1 agrees with B. Spot 2 (0.50 ± 0.02) differs from C (0.69) by 0.19, which is about ten times its uncertainty, so spot 2 is not C. Literature R<sub>F</sub> values change with the paper, the solvent and the temperature, which is why running references on the same paper is more reliable than a data sheet.": "百分誤差 (2.4 %) 小於百分不確定度 (6.0 %)，所以斑點 1 與 B 相符。斑點 2 (0.50 ± 0.02) 與 C (0.69) 相差 0.19，約為它的不確定度的十倍，所以斑點 2 不是 C。文獻中的 R<sub>F</sub> 值會隨紙張、溶劑和溫度改變，所以在同一張紙上進行參照物質，比查數據表更可靠。",

    // Uncertainties > exam tip (shown in English + translation) > p
    "Markschemes accept R<sub>F</sub> values within a small range, because distances are read from a diagram. Show both distances and the division. When you compare two values, say whether the difference is bigger than the uncertainty.": "由於距離是從圖中讀出的，評分準則接受在一個小範圍內的 R<sub>F</sub> 值。要寫出兩個距離和除法。比較兩個數值時，要說明差異是否大於不確定度。",

    // Evaluation: errors and improvements > data-toc attribute
    "Evaluation": "評價",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評價：誤差和改進",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averages reduce its effect.\">random error</dfn>, such as judging the centre of a spot, scatters the results; repeat runs and averages reduce it. A <dfn data-def=\"An error that shifts every result in the same direction. Repeats do not reduce it; you must change the method or the apparatus.\">systematic error</dfn>, such as measuring every distance from the edge of the paper, shifts every result the same way; only a change of method removes it.": "<dfn data-def=\"使重複讀數在真實值上下不可預測地分散的誤差。重複量度和取平均值可以減少它的影響。\">隨機誤差 <span class=\"en-term\">(random error)</span></dfn>（例如判斷斑點的中心）會使結果分散；重複進行和取平均值可以減少它。<dfn data-def=\"使每個結果都向同一方向偏移的誤差。重複量度不能減少它；你必須改變實驗方法或儀器。\">系統誤差 <span class=\"en-term\">(systematic error)</span></dfn>（例如每個距離都由紙邊量起）會使每個結果都向同一方向偏移；只有改變實驗方法才能消除它。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes repeated readings scatter unpredictably above and below the true value. Repeats and averages reduce its effect.": "使重複讀數在真實值上下不可預測地分散的誤差。重複量度和取平均值可以減少它的影響。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that shifts every result in the same direction. Repeats do not reduce it; you must change the method or the apparatus.": "使每個結果都向同一方向偏移的誤差。重複量度不能減少它；你必須改變實驗方法或儀器。",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in this practical": "這個實驗的誤差來源",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差來源",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "對結果的影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "切實可行的改進",

    // Evaluation: errors and improvements > table > th
    "large spots": "斑點太大",

    // Evaluation: errors and improvements > table > td
    "spots spread and overlap, the centre is hard to judge, so R<sub>F</sub> values are less precise and two substances may look like one": "斑點擴散並重疊，中心難以判斷，所以 R<sub>F</sub> 值較不精密，兩種物質可能看來像一種",

    // Evaluation: errors and improvements > table > td
    "use a fine capillary; apply small amounts and dry between applications": "用幼細的毛細管；每次只點少量，每次之間要乾透",

    // Evaluation: errors and improvements > table > th
    "no lid on the tank": "色層槽沒有蓋",

    // Evaluation: errors and improvements > table > td
    "solvent evaporates from the paper, so the front rises slowly and unevenly and R<sub>F</sub> values vary between runs": "溶劑從紙上蒸發，所以前沿上升得慢而不均勻，每次的 R<sub>F</sub> 值都不同",

    // Evaluation: errors and improvements > table > td
    "cover the tank and let it fill with solvent vapour before the run": "蓋好色層槽，進行前讓槽內充滿溶劑蒸氣",

    // Evaluation: errors and improvements > table > th
    "front not marked at once (systematic)": "沒有立即標出前沿（系統誤差）",

    // Evaluation: errors and improvements > table > td
    "the solvent evaporates and the front is marked too low, so every R<sub>F</sub> is too high": "溶劑蒸發，前沿標得太低，所以每個 R<sub>F</sub> 值都過高",

    // Evaluation: errors and improvements > table > td
    "mark the front in pencil as soon as the paper comes out": "紙一取出就用鉛筆標出前沿",

    // Evaluation: errors and improvements > table > th
    "solvent reaches the top edge": "溶劑到達頂邊",

    // Evaluation: errors and improvements > table > td
    "the true front distance is unknown, so R<sub>F</sub> cannot be calculated": "不知道前沿的真正距離，所以無法計算 R<sub>F</sub> 值",

    // Evaluation: errors and improvements > table > td
    "take the paper out when the front is about 1 cm from the top": "前沿距離頂部約 1 cm 時就取出紙張",

    // Evaluation: errors and improvements > table > th
    "distances measured from the paper edge (systematic)": "由紙邊量度距離（系統誤差）",

    // Evaluation: errors and improvements > table > td
    "both distances are too big by the same amount, so R<sub>F</sub> values are too high (closer to 1)": "兩個距離都多了相同的長度，所以 R<sub>F</sub> 值過高（較接近 1）",

    // Evaluation: errors and improvements > table > td
    "measure every distance from the baseline": "每個距離都由基線量起",

    // Evaluation: errors and improvements > table > th
    "spots close together": "斑點靠得太近",

    // Evaluation: errors and improvements > table > td
    "poor separation; the spots cannot be measured or told apart": "分離效果差；斑點無法量度或區分",

    // Evaluation: errors and improvements > table > td
    "change the solvent composition, use longer paper, or use TLC": "改變溶劑的組成、用較長的紙，或用薄層色層法",

    // Evaluation: errors and improvements > table > th
    "short run (small distances, random)": "進行時間太短（距離小，隨機誤差）",

    // Evaluation: errors and improvements > table > td
    "the ±0.1 cm uncertainty is a large percentage of each distance": "±0.1 cm 的不確定度佔每個距離的百分率很大",

    // Evaluation: errors and improvements > table > td
    "let the solvent run further; repeat the run and average the R<sub>F</sub> values": "讓溶劑走得更遠；重複進行並取 R<sub>F</sub> 值的平均值",

    // Exam practice > data-toc attribute
    // Exam practice > h2
    "Exam practice": "考試練習",

    // Exam practice > p
    "These questions are in the style of Paper 1B: method, readings from a chromatogram, R<sub>F</sub> values, uncertainty, and links to polarity.": "這些題目屬 Paper 1B 題型：實驗方法、色層譜的讀數、R<sub>F</sub> 值、不確定度，以及與極性的關係。",

    // Exam practice > data-title attribute
    "Lab 2 exam practice": "實驗 2 考試練習",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No readings yet.": "還沒有讀數。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{a} % water, {b} % ethanol": "{a} % 水，{b} % 乙醇",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{a} % ethyl acetate, {b} % hexane": "{a} % 乙酸乙酯，{b} % 己烷",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Chromatography paper": "色層紙",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "TLC plate (silica)": "薄層板（矽石）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "More polar solvent in the mobile phase": "流動相中極性較強的溶劑",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Set-up": "裝置",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "As in the method": "按照實驗方法",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No lid on the tank": "色層槽沒有蓋",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Baseline drawn in ink": "用墨水畫基線",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvent above the baseline": "溶劑高於基線",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Large, wide spots": "又大又闊的斑點",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Run": "開始",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Take out and mark the front": "取出並標出前沿",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "New paper": "新的紙",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Mobile phase": "流動相",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Time": "時間",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Status": "狀態",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Chromatogram with five lanes: mixture M and reference substances A, B, C and D, a pencil baseline, the solvent front and a ruler whose zero is at the bottom edge": "有五條道的色層譜：混合物 M 和參照物質 A、B、C、D，一條鉛筆基線、溶劑前沿，以及一把零點在底邊的直尺",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ruler line (zero at the bottom edge)": "直尺線（零點在底邊）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Baseline": "基線",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvent front": "溶劑前沿",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 1 (lowest)": "M，斑點 1（最低）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 2": "M，斑點 2",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "M, spot 3 (highest)": "M，斑點 3（最高）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot A": "斑點 A",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot B": "斑點 B",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot C": "斑點 C",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot D": "斑點 D",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Reading is for": "讀數所屬位置",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Record reading": "記錄讀數",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Raw data (ruler reads to ±0.05 cm)": "原始數據（直尺讀數至 ±0.05 cm）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Feature": "位置",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ruler reading / cm": "直尺讀數 / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Distance from baseline / cm": "與基線的距離 / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Which reference substances are in mixture M?": "混合物 M 含有哪些參照物質？",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Check": "檢查",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Pause": "暫停",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "{m} min {s} s": "{m} min {s} s",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ready. The solvent level is above the baseline.": "準備好了。溶劑液面高於基線。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ready. The spots are on the baseline, above the solvent. Press Run.": "準備好了。斑點在基線上，高於溶劑。按「開始」。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Running. Solvent front {d} cm above the baseline.": "進行中。溶劑前沿在基線以上 {d} cm。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Paused.": "已暫停。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The spots dissolved into the solvent in the tank. There is nothing to measure. Start again with the solvent below the baseline.": "斑點溶進了槽內的溶劑中，沒有東西可以量度。重新開始，溶劑要低於基線。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The solvent reached the top edge. You cannot tell how far it would have gone, so you cannot find R<sub>F</sub> values. Start again and stop earlier.": "溶劑到達了頂邊。你無法知道它本來會走多遠，所以無法求出 R<sub>F</sub> 值。重新開始，並早一點停止。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Finished. Move the ruler line to each feature and record the reading.": "完成。把直尺線移到每個位置，然後記錄讀數。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Without a lid the solvent evaporated from the paper: the front is uneven and the R<sub>F</sub> values will not repeat well.": "沒有蓋子，溶劑從紙上蒸發了：前沿不平均，R<sub>F</sub> 值的重複性會很差。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The ink baseline dissolved and has run up the paper as a smear.": "墨水基線溶解了，在紙上向上化開成一片污跡。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The large spots have spread out, so their centres are hard to judge and neighbouring spots may overlap.": "大斑點擴散開來，所以中心難以判斷，相鄰的斑點也可能重疊。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Finish the run first: take the paper out and mark the solvent front.": "請先完成進行：取出紙張並標出溶劑前沿。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Check the position: the line is not on the {f}.": "請檢查位置：直尺線不在{f}上。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "baseline": "基線",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "solvent front": "溶劑前沿",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Measure to the centre of the spot.": "量到斑點的中心。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Recorded {f}: {v} cm.": "已記錄{f}：{v} cm。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "No valid result.": "沒有有效結果。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "The solvent ran off the top, so the run cannot be used.": "溶劑走出了頂邊，所以這次結果不能用。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 1 of M is level with B and spot 3 is level with D: same R<sub>F</sub> in the same run, so M contains B and D. Spot 2 is not level with any reference, so M also contains a substance that is not A, B, C or D.": "M 的斑點 1 與 B 同高，斑點 3 與 D 同高：在同一次進行中 R<sub>F</sub> 值相同，所以 M 含有 B 和 D。斑點 2 與任何參照物質都不同高，所以 M 還含有一種不是 A、B、C 或 D 的物質。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Correct.": "正確。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Not yet.": "仍未正確。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Compare spot 2 of M with spot C carefully. Calculate both R<sub>F</sub> values: they differ by more than the uncertainty.": "仔細比較 M 的斑點 2 和斑點 C。計算兩者的 R<sub>F</sub> 值：它們的差異大於不確定度。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "A substance is present if a spot in lane M has the same R<sub>F</sub> value as the reference spot.": "如果 M 道中有一個斑點與參照斑點的 R<sub>F</sub> 值相同，就表示含有該物質。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Model data. Ruler line: dashed. Solvent front: solid line.": "模型數據。直尺線：虛線。溶劑前沿：實線。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Run all six": "六個同時開始",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Graph of RF value against the percentage of the more polar solvent in the mobile phase, for the three spots of mixture M": "混合物 M 三個斑點的 RF 值對流動相中極性較強溶劑百分率的圖表",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Results (RF from measured distances)": "結果（由量得的距離計算 RF）",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Polar solvent / %": "極性溶劑 / %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Front / cm": "前沿 / cm",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 1": "斑點 1",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 2": "斑點 2",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Spot 3": "斑點 3",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Smallest gap": "最小間距",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Best mobile phase for separating M": "分離 M 的最佳流動相",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Solvents": "溶劑",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Ethanol (less polar) mixed with water (more polar).": "乙醇（極性較弱）與水（極性較強）混合。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Hexane (non-polar) mixed with ethyl acetate (more polar).": "己烷（非極性）與乙酸乙酯（極性較強）混合。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Good choice.": "選得好。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Not the best.": "不是最好的選擇。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "All three spots are well apart here: the smallest gap between neighbouring spots is about as large as it gets.": "這裏三個斑點都分得很開：相鄰斑點之間的最小間距差不多是最大的。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "With so little of the polar solvent, the spots stay near the baseline and crowd together. Look for the column with the largest smallest gap.": "極性溶劑這麼少，斑點留在基線附近，擠在一起。找出「最小間距」最大的一欄。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "With so much of the polar solvent, the spots are carried near the front and crowd together. Look for the column with the largest smallest gap.": "極性溶劑這麼多，斑點被帶到前沿附近，擠在一起。找出「最小間距」最大的一欄。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "more polar solvent in the mobile phase / %": "流動相中極性較強的溶劑 / %",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "Press Run all six.": "按「六個同時開始」。",

    // widget string (assets/js/widgets-lab-chromatography.js)
    "spot {n}": "斑點 {n}",

  }
});
