/* lab-molar-mass-gas — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-molar-mass-gas', {
  strings: {

    // page title (browser tab)
    "Lab 8 Molar volume and the molar mass of a gas | Structure Lab": "實驗 8 摩爾體積和氣體的摩爾質量 | Structure Lab",

    // Molar volume and the molar mass of a gas > page header > p
    "Lab 8 · Structure 1.5 and 1.4": "實驗 8 · Structure 1.5 和 1.4",

    // Molar volume and the molar mass of a gas > page header > h1
    "Molar volume and the molar mass of a gas": "摩爾體積和氣體的摩爾質量",

    // Molar volume and the molar mass of a gas > page header > span
    "How can a mass, a volume, a temperature and a pressure be combined, through the ideal gas equation, to give the molar mass of a gas?": "怎樣透過理想氣體方程，把質量、體積、溫度和壓強結合起來，求出氣體的摩爾質量？",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "These are practical skills. Tick each one when you can do it on your own.": "這些是實驗技能。你能獨自做到某項時，就剔選該項。",

    // What you need to be able to do > checklist > span
    "Convert cm<sup>3</sup> to m<sup>3</sup>, kPa to Pa and °C to K before using <i>PV</i> = <i>nRT</i>.": "使用 <i>PV</i> = <i>nRT</i> 之前，把 cm<sup>3</sup> 換算為 m<sup>3</sup>、kPa 換算為 Pa、°C 換算為 K。",

    // What you need to be able to do > checklist > span
    "Find the molar volume of hydrogen at room conditions from magnesium and excess acid.": "用鎂和過量的酸，求出氫在室內條件下的摩爾體積。",

    // What you need to be able to do > checklist > span
    "Convert a measured molar volume to STP and compare it with 22.7 dm<sup>3</sup> mol<sup>−1</sup>.": "把量得的摩爾體積換算至 STP，並與 22.7 dm<sup>3</sup> mol<sup>−1</sup> 比較。",

    // What you need to be able to do > checklist > span
    "Calculate the molar mass of a volatile liquid with <i>M</i> = <i>mRT</i> / <i>PV</i>.": "用 <i>M</i> = <i>mRT</i> / <i>PV</i> 計算易揮發液體的摩爾質量。",

    // What you need to be able to do > checklist > span
    "Find a molar volume or a molar mass from the gradient of a graph.": "從圖表的斜率求出摩爾體積或摩爾質量。",

    // What you need to be able to do > checklist > span
    "Propagate uncertainties through <i>M</i> = <i>mRT</i> / <i>PV</i> and compare them with the percentage error.": "把不確定度傳遞到 <i>M</i> = <i>mRT</i> / <i>PV</i>，並與百分誤差比較。",

    // What you need to be able to do > checklist > span
    "Explain whether a named error makes the result too high or too low, and suggest an improvement.": "解釋某個指定的誤差會使結果太高還是太低，並提出改進方法。",

    // The chemistry behind it > h2
    "The chemistry behind it": "背後的化學",

    // The chemistry behind it > p
    "The ideal gas equation links the amount of a gas to things you can measure: its pressure, volume and temperature. The amount also equals mass ÷ molar mass. Put the two together and you can find the molar mass of a gas from four measurements.": "理想氣體方程把氣體的物質的量與可以量度的量聯繫起來：壓強、體積和溫度。物質的量也等於質量 ÷ 摩爾質量。把兩者結合，就可以從四個量度值求出氣體的摩爾質量。",

    // The chemistry behind it > equation > maths line
    "<i>PV</i> = <i>nRT</i> and <i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span>, so <i>M</i> = <span class=\"frac\"><span><i>mRT</i></span><span><i>PV</i></span></span>": "<i>PV</i> = <i>nRT</i> 及 <i>n</i> = <span class=\"frac\"><span><i>m</i></span><span><i>M</i></span></span>，所以 <i>M</i> = <span class=\"frac\"><span><i>mRT</i></span><span><i>PV</i></span></span>",

    // The chemistry behind it > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "摩爾質量 <span class=\"unit\">g mol-1</span>",

    // The chemistry behind it > equation > dd
    "mass of the gas <span class=\"unit\">g</span>": "氣體的質量 <span class=\"unit\">g</span>",

    // The chemistry behind it > equation > dd
    "gas constant, 8.31 <span class=\"unit\">J K-1 mol-1</span>": "氣體常數，8.31 <span class=\"unit\">J K-1 mol-1</span>",

    // The chemistry behind it > equation > dd
    "temperature <span class=\"unit\">K</span>": "溫度 <span class=\"unit\">K</span>",

    // The chemistry behind it > equation > dd
    "pressure <span class=\"unit\">Pa</span>": "壓強 <span class=\"unit\">Pa</span>",

    // The chemistry behind it > equation > dd
    "volume <span class=\"unit\">m3</span>": "體積 <span class=\"unit\">m3</span>",

    // The chemistry behind it > p
    "The <dfn data-def=\"The volume occupied by one mole of a gas at a stated temperature and pressure.\">molar volume</dfn> is the volume of one mole of gas, <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i>. For an ideal gas it is the same for every gas at the same temperature and pressure. At STP (273.15 K, 100 kPa) it is 22.7 dm<sup>3</sup> mol<sup>−1</sup>. A laboratory is warmer than 0 °C, so the molar volume there is larger, about 24 to 25 dm<sup>3</sup> mol<sup>−1</sup>. Work it out from <i>RT</i> / <i>P</i>; it is not in the data booklet.": "<dfn data-def=\"在指定溫度和壓強下，一摩爾氣體所佔的體積。\">摩爾體積 <span class=\"en-term\">(molar volume)</span></dfn>是一摩爾氣體的體積，<i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i>。對理想氣體來說，在相同溫度和壓強下，每種氣體的摩爾體積都相同。在 STP（273.15 K、100 kPa）時，它是 22.7 dm<sup>3</sup> mol<sup>−1</sup>。實驗室比 0 °C 暖，所以那裏的摩爾體積較大，約 24 至 25 dm<sup>3</sup> mol<sup>−1</sup>。用 <i>RT</i> / <i>P</i> 計算出來；數據手冊沒有提供這個數值。",

    // The chemistry behind it > data-def attribute
    "The volume occupied by one mole of a gas at a stated temperature and pressure.": "在指定溫度和壓強下，一摩爾氣體所佔的體積。",

    // The chemistry behind it > p
    "In Part A, magnesium reacts with excess hydrochloric acid. One mole of magnesium gives one mole of hydrogen:": "在 A 部分，鎂與過量的氫氯酸反應。1 摩爾鎂產生 1 摩爾氫：",

    // The chemistry behind it > p
    "<span class=\"chem\">Mg(s) + 2HCl(aq) -&gt; MgCl2(aq) + H2(g)</span>": "<span class=\"chem\">Mg(s) + 2HCl(aq) -&gt; MgCl2(aq) + H2(g)</span>",

    // The chemistry behind it > p
    "In Part B, a weighed sample of a liquid with a low boiling point is turned into vapour inside a heated gas syringe.": "在 B 部分，把一份已稱量、沸點低的液體樣本放進加熱了的氣體注射器內，使它變成蒸氣。",

    // The chemistry behind it > p
    "More on the topic pages: <a href=\"../topics/s1-5.html#pvnrt\">the ideal gas equation</a>, <a href=\"../topics/s1-5.html#molar-mass\">molar mass of a gas</a>, <a href=\"../topics/s1-5.html#molar-volume\">molar volume at STP</a> and <a href=\"../topics/s1-4.html#avogadro\">Avogadro’s law</a>.": "課題頁有更多內容：<a href=\"../topics/s1-5.html#pvnrt\">理想氣體方程</a>、<a href=\"../topics/s1-5.html#molar-mass\">氣體的摩爾質量</a>、<a href=\"../topics/s1-5.html#molar-volume\">STP 下的摩爾體積</a>和<a href=\"../topics/s1-4.html#avogadro\">亞佛加德羅定律</a>。",

    // The chemistry behind it > table > caption
    "Unit traps in PV = nRT (R = 8.31 J K⁻¹ mol⁻¹)": "PV = nRT 的單位陷阱（R = 8.31 J K⁻¹ mol⁻¹）",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "Quantity": "物理量",

    // The chemistry behind it > table > th
    "Measured in": "量度單位",

    // The chemistry behind it > table > th
    "Convert to": "換算為",

    // The chemistry behind it > table > th
    "How": "方法",

    // The chemistry behind it > table > th
    "volume": "體積",

    // The chemistry behind it > table > td
    "cm<sup>3</sup>": "cm<sup>3</sup>",

    // The chemistry behind it > table > td
    "× 10<sup>−6</sup> (divide by 1 000 000)": "× 10<sup>−6</sup>（除以 1 000 000）",

    // The chemistry behind it > table > td
    "dm<sup>3</sup>": "dm<sup>3</sup>",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "pressure": "壓強",

    // The chemistry behind it > table > td
    "kPa": "kPa",

    // The chemistry behind it > table > td
    "Pa": "Pa",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "temperature": "溫度",

    // The chemistry behind it > key idea > p
    "kPa with dm<sup>3</sup> also works, because 1 kPa × 1 dm<sup>3</sup> = 1 J. What never works is mixing them: kPa with m<sup>3</sup>, or Pa with cm<sup>3</sup>.": "kPa 配 dm<sup>3</sup> 也可以，因為 1 kPa × 1 dm<sup>3</sup> = 1 J。絕對不可以混用：kPa 配 m<sup>3</sup>，或 Pa 配 cm<sup>3</sup>。",

    // Aim, variables and safety > data-toc attribute
    "Aim, variables, safety": "目的、變量、安全",

    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的、變量和安全",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> Part A: find the molar volume of hydrogen at room temperature and pressure, and compare it with the ideal gas value. Part B: find the molar mass of an unknown volatile liquid and identify it.": "<strong>目的：</strong>A 部分：求出氫在常溫常壓下的摩爾體積，並與理想氣體的數值比較。B 部分：求出一種未知易揮發液體的摩爾質量，並辨認它。",

    // Aim, variables and safety > table > caption
    "Variables": "變量",

    // Aim, variables and safety > table > th
    "Variable": "變量",

    // Aim, variables and safety > table > th
    "Part A: magnesium and acid": "A 部分：鎂和酸",

    // Aim, variables and safety > table > th
    "Part B: volatile liquid": "B 部分：易揮發液體",

    // Aim, variables and safety > table > th
    "independent": "自變量",

    // Aim, variables and safety > table > td
    "mass of magnesium": "鎂的質量",

    // Aim, variables and safety > table > td
    "mass of liquid injected": "注入液體的質量",

    // Aim, variables and safety > table > th
    "dependent": "應變量",

    // Aim, variables and safety > table > td
    "volume of hydrogen": "氫的體積",

    // Aim, variables and safety > table > td
    "volume of vapour": "蒸氣的體積",

    // Aim, variables and safety > table > th
    "controlled": "控制變量",

    // Aim, variables and safety > table > td
    "room temperature and pressure; acid in excess; the way the magnesium is added": "常溫常壓；酸過量；加入鎂的方法",

    // Aim, variables and safety > table > td
    "temperature of the heating jacket; atmospheric pressure": "加熱套的溫度；大氣壓強",

    // Aim, variables and safety > h3
    "Equipment": "儀器",

    // Aim, variables and safety > li
    "Part A: magnesium ribbon and sandpaper, balance (±0.001 g), 50 cm<sup>3</sup> of 1.0 mol dm<sup>−3</sup> hydrochloric acid, conical flask, small test tube to stand inside it, bung and delivery tube, 100 cm<sup>3</sup> gas syringe (±0.5 cm<sup>3</sup>), thermometer (±0.5 °C), barometer or digital pressure sensor (±0.1 kPa)": "A 部分：鎂帶和砂紙、天平（±0.001 g）、50 cm<sup>3</sup> 1.0 mol dm<sup>−3</sup> 氫氯酸、錐形瓶、可放在錐形瓶內的小試管、塞和導管、100 cm<sup>3</sup> 氣體注射器（±0.5 cm<sup>3</sup>）、溫度計（±0.5 °C）、氣壓計或數字壓強感應器（±0.1 kPa）",

    // Aim, variables and safety > li
    "Part B: 100 cm<sup>3</sup> gas syringe in an electric heating jacket (or a steam jacket), self-sealing rubber cap, 1 cm<sup>3</sup> hypodermic syringe, balance (±0.001 g), thermometer, barometer, the unknown liquid": "B 部分：放在電加熱套（或蒸氣套）中的 100 cm<sup>3</sup> 氣體注射器、自封橡膠蓋、1 cm<sup>3</sup> 注射針筒、天平（±0.001 g）、溫度計、氣壓計、未知液體",

    // Aim, variables and safety > p
    "Hydrogen is extremely flammable and forms explosive mixtures with air: no flames anywhere near Part A, and release the gas only into a well-ventilated room. Hydrochloric acid at 1.0 mol dm<sup>−3</sup> irritates the eyes and skin, so wear eye protection and rinse any splashes with plenty of water. The volatile liquids in Part B (such as propanone or hexane) are highly flammable and their vapours are harmful: use a fume cupboard, heat only with the electric or steam jacket, never a Bunsen burner. The heating jacket is hot enough to burn. Point the hypodermic needle away from people and put it in a sharps container after use.": "氫極易燃，與空氣會形成爆炸性混合物：A 部分附近不可有任何火焰，只可在通風良好的房間釋放氣體。1.0 mol dm<sup>−3</sup> 氫氯酸會刺激眼睛和皮膚，所以要戴上護目鏡，濺到身上要用大量清水沖洗。B 部分的易揮發液體（例如丙酮或己烷）高度易燃，蒸氣有害：要在煙櫥內進行，只可用電加熱套或蒸氣套加熱，切勿用本生燈。加熱套的溫度足以燙傷人。注射針頭不可指向別人，用後放進利器收集箱。",

    // Method > h2
    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Method": "方法",

    // Method > h3
    "Part A: molar volume of hydrogen": "A 部分：氫的摩爾體積",

    // Method > li
    "Rub a length of magnesium ribbon with sandpaper until it is shiny. <em>Why:</em> the dull coating is magnesium oxide. It adds to the mass but gives no hydrogen.": "用砂紙擦一段鎂帶，直至它有光澤。<em>原因：</em>暗啞的表層是氧化鎂。它增加了質量，但不產生氫。",

    // Method > li
    "Cut and weigh a piece of about 0.07 g. <em>Why:</em> at room conditions 0.1 g of magnesium gives about 100 cm<sup>3</sup> of hydrogen, which would fill the syringe.": "剪下並稱量一段約 0.07 g 的鎂帶。<em>原因：</em>在室內條件下，0.1 g 鎂產生約 100 cm<sup>3</sup> 氫，會注滿注射器。",

    // Method > li
    "Put 50 cm<sup>3</sup> of 1.0 mol dm<sup>−3</sup> hydrochloric acid in the flask. Stand the magnesium in a small dry test tube inside the flask. <em>Why:</em> the acid is in large excess, so all the magnesium reacts.": "把 50 cm<sup>3</sup> 1.0 mol dm<sup>−3</sup> 氫氯酸放進錐形瓶。把鎂放在錐形瓶內一支乾燥的小試管中。<em>原因：</em>酸大量過量，所以所有鎂都會反應。",

    // Method > li
    "Fit the bung joined to the gas syringe and check that the syringe reads zero. Then tip the flask so the acid reaches the magnesium. <em>Why:</em> no hydrogen escapes before the apparatus is sealed.": "塞上連接氣體注射器的塞，並檢查注射器讀數是否為零。然後傾側錐形瓶，使酸接觸鎂。<em>原因：</em>在儀器密封之前，不會有氫逸出。",

    // Method > li
    "When the fizzing stops, wait until the flask has cooled to room temperature, then read the volume. <em>Why:</em> the reaction gives out heat, and warm gas takes up more space.": "停止冒泡後，等候錐形瓶冷卻至室溫，然後讀取體積。<em>原因：</em>反應放熱，而溫暖的氣體佔較大的空間。",

    // Method > li
    "Record the room temperature and the atmospheric pressure. Repeat with different masses of magnesium.": "記錄室溫和大氣壓強。用不同質量的鎂重複實驗。",

    // Method > h3
    "Part B: molar mass of a volatile liquid": "B 部分：易揮發液體的摩爾質量",

    // Method > li
    "Heat the gas syringe in its jacket to a steady temperature at least 20 °C above the boiling point of the liquid. Let a few cm<sup>3</sup> of air warm up inside, and record this starting volume. <em>Why:</em> all the liquid must turn into vapour, and the vapour should be far from condensing.": "把氣體注射器放在加熱套中，加熱至比液體沸點高至少 20 °C 的穩定溫度。讓幾 cm<sup>3</sup> 空氣在注射器內變暖，記錄這個起始體積。<em>原因：</em>所有液體都必須變成蒸氣，而蒸氣應遠離凝結的條件。",

    // Method > li
    "Draw about 0.15 cm<sup>3</sup> of the liquid into the hypodermic syringe and weigh it. <em>Why:</em> the vapour must not overfill the gas syringe.": "把約 0.15 cm<sup>3</sup> 液體抽進注射針筒，並稱量。<em>原因：</em>蒸氣不可注滿至超出氣體注射器的容量。",

    // Method > li
    "Push the needle through the self-sealing cap, inject the liquid, withdraw the needle and reweigh the hypodermic syringe at once. <em>Why:</em> the mass injected is the difference between the two weighings.": "把針頭刺穿自封蓋，注入液體，拔出針頭，並立即再稱量注射針筒。<em>原因：</em>注入的質量是兩次稱量的差。",

    // Method > li
    "Wait until the plunger stops moving. Record the final volume and the jacket temperature. <em>Why:</em> the vapour must reach the jacket temperature.": "等候活塞停止移動。記錄最終體積和加熱套的溫度。<em>原因：</em>蒸氣必須達到加熱套的溫度。",

    // Method > li
    "Record the atmospheric pressure. Repeat with different volumes of liquid at the same jacket temperature.": "記錄大氣壓強。在相同的加熱套溫度下，用不同體積的液體重複實驗。",

    // Method > key idea > p
    "Another common version uses butane from a gas lighter. Weigh the lighter, release the gas under water into an upturned measuring cylinder full of water, dry the lighter and weigh it again. The data are processed in exactly the same way.": "另一個常見的版本用打火機中的丁烷。稱量打火機，在水下把氣體釋放到一個倒轉並注滿水的量筒中，弄乾打火機，再稱量一次。數據的處理方法完全相同。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "進行實驗",

    // Run the experiment > p
    "These are simulated experiments. Every reading has a small random error, like a real one, and the apparatus has realistic precision. Some method choices add a systematic error on purpose. Try them, and see which way they push the result.": "這些是模擬實驗。每個讀數都有細小的隨機誤差，就像真實實驗一樣，而儀器的精密度也切合實際。有些方法選擇刻意加入了系統誤差。試試這些選擇，看看它們把結果推向哪個方向。",

    // Run the experiment > widget > data-title attribute
    "Part A: magnesium and hydrochloric acid": "A 部分：鎂和氫氯酸",

    // Run the experiment > widget > data-kicker attribute
    "Virtual experiment": "虛擬實驗",

    // Run the experiment > widget > figcaption
    "Choose a mass of magnesium and run the reaction. Do at least three runs with different masses, using the careful method. Then change one method choice at a time and see how the molar volume changes. The table converts each run to a molar volume; the graph gives one from the gradient.": "選擇鎂的質量，進行反應。用謹慎的方法，以不同質量至少做三次。然後每次只改變一個方法選擇，看看摩爾體積怎樣改變。表格把每次實驗換算為摩爾體積；圖表則從斜率給出一個數值。",

    // Run the experiment > widget > data-title attribute
    "Part B: vaporize a volatile liquid": "B 部分：使易揮發液體汽化",

    // Run the experiment > widget > figcaption
    "Choose an unknown liquid, set the jacket temperature and inject. Use at least three different volumes at the same temperature, then work out the molar mass before you reveal the liquid. Try a jacket temperature close to, or below, the boiling point and see what happens.": "選擇一種未知液體，設定加熱套溫度，然後注入。在相同溫度下至少用三個不同的體積，先計算出摩爾質量，才顯示是哪種液體。試試把加熱套溫度設在接近或低於沸點，看看會發生甚麼事。",

    // Processing the data > h2
    "Processing the data": "處理數據",

    // Processing the data > worked example > h3
    "Molar volume of hydrogen": "氫的摩爾體積",

    // Processing the data > worked example > p
    "0.0742 g of magnesium reacts with excess hydrochloric acid. The hydrogen has a volume of 76.5 cm<sup>3</sup> at 23.0 °C and 100.6 kPa. Calculate the molar volume of hydrogen under these conditions, and convert it to STP.": "0.0742 g 鎂與過量的氫氯酸反應。所得的氫在 23.0 °C 和 100.6 kPa 下體積是 76.5 cm<sup>3</sup>。計算氫在這些條件下的摩爾體積，並把它換算至 STP。",

    // Processing the data > worked example > data-title attribute
    "Amount of magnesium": "鎂的物質的量",

    // Processing the data > worked example > p
    "Use <i>A</i><sub>r</sub>(Mg) = 24.31 from the data booklet.": "用數據手冊中的 <i>A</i><sub>r</sub>(Mg) = 24.31。",

    // Processing the data > worked example > data-title attribute
    "Amount of hydrogen": "氫的物質的量",

    // Processing the data > worked example > p
    "The equation shows 1 mol of Mg gives 1 mol of H<sub>2</sub>.": "方程式顯示 1 mol Mg 產生 1 mol H<sub>2</sub>。",

    // Processing the data > worked example > data-title attribute
    "Molar volume at room conditions": "室內條件下的摩爾體積",

    // Processing the data > worked example > p
    "Convert the volume to dm<sup>3</sup> to get the usual unit.": "把體積換算為 dm<sup>3</sup>，得出常用的單位。",

    // Processing the data > worked example > data-title attribute
    "Convert to STP": "換算至 STP",

    // Processing the data > worked example > p
    "Use the combined gas law, <i>P</i><sub>1</sub><i>V</i><sub>1</sub> / <i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub> / <i>T</i><sub>2</sub>, with temperatures in kelvin. STP is 100 kPa and 273.15 K.": "用聯合氣體定律 <i>P</i><sub>1</sub><i>V</i><sub>1</sub> / <i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub> / <i>T</i><sub>2</sub>，溫度以開爾文為單位。STP 是 100 kPa 和 273.15 K。",

    // Processing the data > worked example > data-title attribute
    "Compare with the data booklet": "與數據手冊比較",

    // Processing the data > worked example > p
    "Percentage error = |experimental − literature| ÷ literature × 100.": "百分誤差 = |實驗值 − 文獻值| ÷ 文獻值 × 100。",

    // Processing the data > worked example > maths line
    "percentage error = (23.26 − 22.7) ÷ 22.7 × 100 = 2.4 %": "百分誤差 = (23.26 − 22.7) ÷ 22.7 × 100 = 2.4 %",

    // Processing the data > worked example > p
    "25.1 dm<sup>3</sup> mol<sup>−1</sup> at 23.0 °C and 100.6 kPa, which is 23.3 dm<sup>3</sup> mol<sup>−1</sup> at STP: 2.4 % above 22.7 dm<sup>3</sup> mol<sup>−1</sup>.": "在 23.0 °C 和 100.6 kPa 下是 25.1 dm<sup>3</sup> mol<sup>−1</sup>，在 STP 下是 23.3 dm<sup>3</sup> mol<sup>−1</sup>：比 22.7 dm<sup>3</sup> mol<sup>−1</sup> 高 2.4 %。",

    // Processing the data > try it > p
    "0.0585 g of magnesium gives 59.0 cm<sup>3</sup> of hydrogen with excess acid. Calculate the molar volume of hydrogen under the conditions of the experiment, in dm<sup>3</sup> mol<sup>−1</sup>.": "0.0585 g 鎂與過量的酸產生 59.0 cm<sup>3</sup> 氫。計算氫在實驗條件下的摩爾體積，以 dm<sup>3</sup> mol<sup>−1</sup> 表示。",

    // Processing the data > try it > li
    "Find the amount of magnesium. It equals the amount of hydrogen.": "求出鎂的物質的量。它等於氫的物質的量。",

    // Processing the data > try it > li
    "<i>n</i> = 0.0585 ÷ 24.31. Then divide the volume in dm<sup>3</sup> by that amount.": "<i>n</i> = 0.0585 ÷ 24.31。然後把以 dm<sup>3</sup> 表示的體積除以這個物質的量。",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Processing the data > worked example > h3
    "Molar mass of a volatile liquid": "易揮發液體的摩爾質量",

    // Processing the data > worked example > p
    "A hypodermic syringe weighs 12.483 g before and 12.331 g after injecting a liquid into a gas syringe at 99.0 °C. The gas syringe reading rises from 4.5 cm<sup>3</sup> to 84.0 cm<sup>3</sup>. The atmospheric pressure is 101.0 kPa. Calculate the molar mass of the liquid.": "在 99.0 °C 下把一種液體注入氣體注射器，注射針筒注射前重 12.483 g，注射後重 12.331 g。氣體注射器的讀數由 4.5 cm<sup>3</sup> 上升至 84.0 cm<sup>3</sup>。大氣壓強是 101.0 kPa。計算這種液體的摩爾質量。",

    // Processing the data > worked example > data-title attribute
    "Find the mass and the volume": "求出質量和體積",

    // Processing the data > worked example > p
    "Both come from the difference between two readings.": "兩者都由兩個讀數的差得出。",

    // Processing the data > worked example > data-title attribute
    "Convert to SI units": "換算為 SI 單位",

    // Processing the data > worked example > p
    "<i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> needs Pa, m<sup>3</sup> and K.": "<i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> 需要用 Pa、m<sup>3</sup> 和 K。",

    // Processing the data > worked example > data-title attribute
    "Substitute into M = mRT / PV": "代入 M = mRT / PV",

    // Processing the data > worked example > p
    "Keep the mass in grams, so the molar mass comes out in g mol<sup>−1</sup>.": "質量保持以克為單位，摩爾質量就會以 g mol<sup>−1</sup> 為單位。",

    // Processing the data > worked example > data-title attribute
    "Round and identify": "取捨並辨認",

    // Processing the data > worked example > p
    "The mass, 0.152 g, has 3 significant figures.": "質量 0.152 g 有 3 位有效數字。",

    // Processing the data > worked example > maths line
    "propanone, <span class=\"chem\">C3H6O</span>: <i>M</i> = 58.09 g mol<sup>−1</sup>; percentage error = 0.8 %": "丙酮 <span class=\"chem\">C3H6O</span>：<i>M</i> = 58.09 g mol<sup>−1</sup>；百分誤差 = 0.8 %",

    // Processing the data > worked example > p
    "58.5 g mol<sup>−1</sup>, which fits propanone (58.09 g mol<sup>−1</sup>).": "58.5 g mol<sup>−1</sup>，與丙酮（58.09 g mol<sup>−1</sup>）吻合。",

    // Processing the data > try it > p
    "0.103 g of a liquid is injected into a gas syringe at 98.5 °C. The volume of vapour is 36.5 cm<sup>3</sup> and the pressure is 100.2 kPa. Calculate the molar mass of the liquid, in g mol<sup>−1</sup>.": "把 0.103 g 一種液體在 98.5 °C 下注入氣體注射器。蒸氣的體積是 36.5 cm<sup>3</sup>，壓強是 100.2 kPa。計算這種液體的摩爾質量，以 g mol<sup>−1</sup> 表示。",

    // Processing the data > try it > li
    "Convert first: cm<sup>3</sup> to m<sup>3</sup>, kPa to Pa, °C to K.": "先換算：cm<sup>3</sup> 換為 m<sup>3</sup>，kPa 換為 Pa，°C 換為 K。",

    // Processing the data > try it > maths line
    "<i>M</i> = 318.1 ÷ 3.657 = 87.0 g mol<sup>−1</sup> (hexane, <span class=\"chem\">C6H14</span>, is 86.20 g mol<sup>−1</sup>)": "<i>M</i> = 318.1 ÷ 3.657 = 87.0 g mol<sup>−1</sup>（己烷 <span class=\"chem\">C6H14</span> 是 86.20 g mol<sup>−1</sup>）",

    // Processing the data > h3
    "Using a graph instead of one run": "用圖表代替單次實驗",

    // Processing the data > p
    "Plot the volume of gas against the mass, for several runs, and draw a line of best fit through the origin. A graph averages out random errors and shows up an odd run. The gradient is the volume per gram.": "把多次實驗的氣體體積對質量作圖，並畫出一條穿過原點的最佳擬合線。圖表可把隨機誤差平均化，並顯示出異常的一次實驗。斜率是每克的體積。",

    // Processing the data > li
    "Part A: molar volume = gradient (cm<sup>3</sup> g<sup>−1</sup>) × 24.31 g mol<sup>−1</sup> ÷ 1000.": "A 部分：摩爾體積 = 斜率 (cm<sup>3</sup> g<sup>−1</sup>) × 24.31 g mol<sup>−1</sup> ÷ 1000。",

    // Processing the data > li
    "Part B: <i>V</i> / <i>m</i> = <i>RT</i> / <i>PM</i>, so <i>M</i> = <i>RT</i> ÷ (<i>P</i> × gradient), with the gradient in m<sup>3</sup> g<sup>−1</sup>.": "B 部分：<i>V</i> / <i>m</i> = <i>RT</i> / <i>PM</i>，所以 <i>M</i> = <i>RT</i> ÷ (<i>P</i> × 斜率)，斜率以 m<sup>3</sup> g<sup>−1</sup> 為單位。",

    // Processing the data > p
    "If your best line clearly misses the origin, a similar amount of gas was lost (or gained) in every run. That is a sign of a systematic error.": "如果你的最佳直線明顯不穿過原點，就表示每次實驗都損失（或增加）了相近數量的氣體。這是系統誤差的跡象。",

    // Processing the data > common mistake > p
    "Using <i>P</i> in kPa with <i>V</i> in cm<sup>3</sup> makes <i>PV</i> 1000 times too big, so the molar mass comes out 1000 times too small. Using °C instead of K is just as serious. If a molar mass looks impossible (0.06 g mol<sup>−1</sup>, or 2000 g mol<sup>−1</sup>), check the units first.": "<i>P</i> 用 kPa 而 <i>V</i> 用 cm<sup>3</sup>，會使 <i>PV</i> 大 1000 倍，所以得出的摩爾質量小 1000 倍。用 °C 代替 K 同樣嚴重。如果摩爾質量看來不可能（0.06 g mol<sup>−1</sup> 或 2000 g mol<sup>−1</sup>），先檢查單位。",

    // Uncertainties > h2
    "Uncertainties": "不確定度",

    // Uncertainties > p
    "For a product or a quotient such as <i>M</i> = <i>mRT</i> / <i>PV</i>, add the percentage uncertainties of the measured quantities. <i>R</i> is a constant and adds nothing. A mass or a volume found by difference uses two readings, so add their absolute uncertainties first.": "對於乘積或商，例如 <i>M</i> = <i>mRT</i> / <i>PV</i>，把各量度值的百分不確定度相加。<i>R</i> 是常數，不會增加不確定度。由差得出的質量或體積用兩個讀數，所以要先把兩者的絕對不確定度相加。",

    // Uncertainties > table > caption
    "Propagating uncertainties for worked example 2": "例題 2 的不確定度傳遞",

    // Uncertainties > table > th
    "Value": "數值",

    // Uncertainties > table > th
    "Absolute uncertainty": "絕對不確定度",

    // Uncertainties > table > th
    "Percentage uncertainty": "百分不確定度",

    // Uncertainties > table > th
    "mass, two weighings": "質量，兩次稱量",

    // Uncertainties > table > th
    "volume, two readings": "體積，兩個讀數",

    // Uncertainties > table > td
    "79.5 cm<sup>3</sup>": "79.5 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±1.0 cm<sup>3</sup>": "±1.0 cm<sup>3</sup>",

    // Uncertainties > table > td
    "101.0 kPa": "101.0 kPa",

    // Uncertainties > table > td
    "±0.1 kPa": "±0.1 kPa",

    // Uncertainties > table > th
    "molar mass": "摩爾質量",

    // Uncertainties > table > td
    "58.5 g mol<sup>−1</sup>": "58.5 g mol<sup>−1</sup>",

    // Uncertainties > table > td
    "±1.6 g mol<sup>−1</sup>": "±1.6 g mol<sup>−1</sup>",

    // Uncertainties > p
    "So <span class=\"mono\">M = 58.5 ± 1.6 g mol<sup>−1</sup></span>, or <span class=\"mono\">59 ± 2 g mol<sup>−1</sup></span> with the uncertainty to one significant figure. The percentage error compared with propanone is 0.8 %, smaller than the 2.8 % uncertainty. The result agrees with propanone within experimental uncertainty. The mass and the volume dominate: a larger sample, within the range of the syringe, would reduce both.": "所以 <span class=\"mono\">M = 58.5 ± 1.6 g mol<sup>−1</sup></span>，或把不確定度取 1 位有效數字，寫成 <span class=\"mono\">59 ± 2 g mol<sup>−1</sup></span>。與丙酮相比，百分誤差是 0.8 %，小於 2.8 % 的不確定度。在實驗不確定度範圍內，結果與丙酮相符。質量和體積佔主導地位：在注射器的範圍內用較大的樣本，可同時減少兩者。",

    // Uncertainties > h3
    "Part A: is the difference bigger than the uncertainty?": "A 部分：差異是否大於不確定度？",

    // Uncertainties > p
    "In worked example 1, the mass (0.0742 ± 0.001 g) has an uncertainty of 1.3 % and the volume (76.5 ± 0.5 cm<sup>3</sup>, one reading from zero) 0.7 %. The molar volume therefore has an uncertainty of about 2.0 %: <span class=\"mono\">25.1 ± 0.5 dm<sup>3</sup> mol<sup>−1</sup></span>.": "在例題 1 中，質量（0.0742 ± 0.001 g）的不確定度是 1.3 %，體積（76.5 ± 0.5 cm<sup>3</sup>，由零開始的一個讀數）是 0.7 %。所以摩爾體積的不確定度約為 2.0 %：<span class=\"mono\">25.1 ± 0.5 dm<sup>3</sup> mol<sup>−1</sup></span>。",

    // Uncertainties > p
    "The ideal gas value at 23.0 °C and 100.6 kPa is <i>RT</i> / <i>P</i> = 8.31 × 296.15 ÷ 100.6 = 24.5 dm<sup>3</sup> mol<sup>−1</sup>. The measured value is 2.5 % higher, which is more than the 2.0 % uncertainty. Random error alone does not explain it, so a systematic error is likely. The table in the next section suggests which.": "在 23.0 °C 和 100.6 kPa 下，理想氣體的數值是 <i>RT</i> / <i>P</i> = 8.31 × 296.15 ÷ 100.6 = 24.5 dm<sup>3</sup> mol<sup>−1</sup>。量得的數值高 2.5 %，大於 2.0 % 的不確定度。單憑隨機誤差不能解釋，所以很可能有系統誤差。下一節的表格提出了可能的誤差。",

    // Uncertainties > not needed for IB > p
    "Hydrogen collected over aqueous acid (or butane collected over water) also contains some water vapour, so the gas volume is a little larger than the volume of dry gas. Correcting for this uses the vapour pressure of water and partial pressures, which are not in the IB guide. You only need to recognize it as a source of error that makes the volume too large.": "在酸溶液上方收集的氫（或在水上方收集的丁烷）也含有一些水蒸氣，所以氣體體積比乾燥氣體的體積稍大。修正這一點要用水的蒸氣壓和分壓，這些不在 IB 學科指南之內。你只需要認出這是一個使體積太大的誤差來源。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差和改進",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評價：誤差和改進",

    // Evaluation: errors and improvements > p
    "A random error scatters the results; repeats and a graph reduce its effect. A systematic error pushes every result the same way; only a change of method fixes it. For each error below, follow the chain: what happens to the measured quantity, then what happens to the result.": "隨機誤差使結果分散；重複實驗和圖表可減少它的影響。系統誤差使每個結果都偏向同一方向；只有改變方法才能改正。對下面每種誤差，按這個思路推理：量度的量怎樣改變，然後結果怎樣改變。",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in finding molar volume and molar mass": "求摩爾體積和摩爾質量時的誤差來源",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差來源",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "對結果的影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "切實可行的改進",

    // Evaluation: errors and improvements > table > td
    "Part A: oxide coating on the magnesium (systematic).": "A 部分：鎂表面有氧化層（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "Part of the mass is magnesium oxide, which gives no hydrogen. Less gas forms than the mass suggests, so the molar volume is too low.": "部分質量是氧化鎂，不產生氫。產生的氣體比質量所顯示的少，所以摩爾體積太低。",

    // Evaluation: errors and improvements > table > td
    "Clean the ribbon with sandpaper until it is shiny, just before weighing.": "在稱量前，用砂紙把鎂帶擦至有光澤。",

    // Evaluation: errors and improvements > table > td
    "Part A: hydrogen escapes before the bung is fitted (systematic).": "A 部分：塞上塞之前已有氫逸出（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The volume measured is too small, so the molar volume is too low.": "量得的體積太小，所以摩爾體積太低。",

    // Evaluation: errors and improvements > table > td
    "Keep the magnesium in a small tube (or on a thread) above the acid and tip the flask only after sealing it.": "把鎂放在酸上方的小試管中（或用線吊着），密封後才傾側錐形瓶。",

    // Evaluation: errors and improvements > table > td
    "Part A: volume read while the gas is still warm (systematic).": "A 部分：氣體仍然溫暖時就讀取體積（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The reaction is exothermic. Warm gas takes up more space, so the molar volume is too high.": "反應是放熱的。溫暖的氣體佔較大的空間，所以摩爾體積太高。",

    // Evaluation: errors and improvements > table > td
    "Wait until the flask is back at room temperature, then read the volume.": "等候錐形瓶回到室溫，然後才讀取體積。",

    // Evaluation: errors and improvements > table > td
    "Part A: the hydrogen contains water vapour (systematic).": "A 部分：氫含有水蒸氣（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The volume includes some water vapour, so the molar volume is too high.": "體積包括了一些水蒸氣，所以摩爾體積太高。",

    // Evaluation: errors and improvements > table > td
    "Note it as a limitation. (The correction is beyond the guide; see the box above.)": "把它記為一項局限。（修正方法超出學科指南；見上面的方框。）",

    // Evaluation: errors and improvements > table > td
    "Part A: some hydrogen dissolves in the acid (systematic, small).": "A 部分：部分氫溶解在酸中（系統誤差，很小）。",

    // Evaluation: errors and improvements > table > td
    "The volume is slightly too small, so the molar volume is slightly too low.": "體積稍為太小，所以摩爾體積稍為太低。",

    // Evaluation: errors and improvements > table > td
    "Hydrogen is only slightly soluble, so this effect is very small. Use the smallest volume of acid that is still in excess.": "氫只是微溶，所以這個影響很小。用仍然過量的最少量酸。",

    // Evaluation: errors and improvements > table > td
    "Part B: the vapour is close to its boiling point (systematic).": "B 部分：蒸氣接近它的沸點（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The attractions between the molecules are no longer negligible, so the vapour takes up less space than an ideal gas would. <i>V</i> is too small, so <i>M</i> is too high.": "分子之間的引力不再可以忽略，所以蒸氣所佔的空間比理想氣體小。<i>V</i> 太小，所以 <i>M</i> 太高。",

    // Evaluation: errors and improvements > table > td
    "Set the jacket at least 20–30 °C above the boiling point of the liquid.": "把加熱套設在比液體沸點高至少 20–30 °C。",

    // Evaluation: errors and improvements > table > td
    "Part B: not all of the liquid vaporizes (systematic).": "B 部分：並非所有液體都汽化（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "<i>V</i> is too small for the mass recorded, so <i>M</i> is too high.": "相對於記錄的質量，<i>V</i> 太小，所以 <i>M</i> 太高。",

    // Evaluation: errors and improvements > table > td
    "Use a higher jacket temperature or a smaller sample. Check that no drops remain.": "用較高的加熱套溫度或較小的樣本。檢查是否仍有液滴。",

    // Evaluation: errors and improvements > table > td
    "Part B: liquid evaporates from the needle between weighing and injecting (systematic).": "B 部分：在稱量和注射之間，液體從針頭蒸發（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The mass recorded is larger than the mass that reached the syringe, so <i>M</i> is too high.": "記錄的質量大於真正進入注射器的質量，所以 <i>M</i> 太高。",

    // Evaluation: errors and improvements > table > td
    "Inject straight after the first weighing and reweigh at once.": "第一次稱量後立即注射，並立即再稱量。",

    // Evaluation: errors and improvements > table > td
    "Both: friction in the gas syringe, and reading the scale (random).": "兩部分：氣體注射器的摩擦，以及讀取刻度（隨機誤差）。",

    // Evaluation: errors and improvements > table > td
    "Volumes scatter, so the result is less precise.": "體積分散，所以結果較不精密。",

    // Evaluation: errors and improvements > table > td
    "Turn the plunger gently before reading; do several runs and use a graph.": "讀數前輕輕轉動活塞；多做幾次實驗並使用圖表。",

    // Evaluation: errors and improvements > table > td
    "Both: small masses on a ±0.001 g balance (random).": "兩部分：在 ±0.001 g 天平上稱量小質量（隨機誤差）。",

    // Evaluation: errors and improvements > table > td
    "A large percentage uncertainty in <i>m</i> (1.3 % for 0.07 g).": "<i>m</i> 的百分不確定度大（0.07 g 時是 1.3 %）。",

    // Evaluation: errors and improvements > table > td
    "Use the largest sample the syringe allows, or a ±0.0001 g balance.": "用注射器容許的最大樣本，或 ±0.0001 g 的天平。",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "Markschemes want the direction <em>and</em> the reason. “The molar volume is too low because some hydrogen escaped before the bung was fitted, so the volume measured was too small” earns the mark. “Gas escaped” on its own usually does not.": "評分準則要求寫出方向<em>和</em>原因。「摩爾體積太低，因為塞上塞之前有些氫逸出了，所以量得的體積太小」可以得分。只寫「氣體逸出了」通常不能得分。",

    // Exam practice > h2
    "Exam practice": "考試練習",

    // Exam practice > p
    "Paper 1B style questions on this practical: calculations, unit traps, uncertainties and evaluation. All the questions are original.": "關於這個實驗的 Paper 1B 形式題目：計算、單位陷阱、不確定度和評價。所有題目都是原創的。",

    // Exam practice > data-title attribute
    "Molar mass of a gas lab: exam practice": "氣體摩爾質量實驗：考試練習",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "No readings yet.": "還沒有讀數。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Mass of magnesium ribbon to cut": "要剪下的鎂帶質量",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ribbon surface": "鎂帶表面",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Cleaned with sandpaper": "已用砂紙擦淨",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Dull, as supplied": "暗啞，未經處理",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Adding the magnesium": "加入鎂",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Tipped in after the bung is fitted": "塞上塞之後傾側加入",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Dropped in, then the bung fitted": "先投入，再塞上塞",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Volume read": "讀取體積",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "After cooling to room temperature": "冷卻至室溫後",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "As soon as the fizzing stops": "一停止冒泡就讀取",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Run the reaction": "進行反應",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Delete last run": "刪除最後一次實驗",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last run deleted.": "已刪除最後一次實驗。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "New day": "新的一天",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A new day: new room temperature and pressure, and an empty results table.": "新的一天：新的室溫和大氣壓強，以及一個空的結果表。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copy data": "複製數據",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m(Mg) / g (±0.001)": "m(Mg) / g (±0.001)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V(H₂) / cm³ (±0.5)": "V(H₂) / cm³ (±0.5)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "θ / °C (±0.5)": "θ / °C (±0.5)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "P / kPa (±0.1)": "P / kPa (±0.1)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copied {n} runs as tab-separated text. Paste them into a spreadsheet.": "已把 {n} 次實驗複製為以 Tab 分隔的文字。把它們貼到試算表。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copying is blocked in this browser. Select the table with the mouse and copy it instead.": "這個瀏覽器不容許複製。請用滑鼠選取表格，再自行複製。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Room conditions": "室內條件",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last run": "最後一次實驗",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar volume, mean of runs": "摩爾體積，各次平均值",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar volume from the gradient": "由斜率得出的摩爾體積",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ideal gas value at room conditions": "室內條件下理想氣體的數值",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Note": "備註",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A conical flask of hydrochloric acid with a small tube of magnesium inside, sealed with a bung. A delivery tube leads to a horizontal gas syringe. The plunger moves out as hydrogen is produced. The readings are in the readout.": "裝有氫氯酸的錐形瓶，瓶內有一支裝着鎂的小試管，以塞密封。導管通往一支水平的氣體注射器。產生氫時活塞向外移動。讀數在讀數顯示區中。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "HCl(aq), excess": "HCl(aq)，過量",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gas syringe": "氣體注射器",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "reacting…": "反應中…",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "That is plenty of runs. Delete one or start a new day.": "實驗次數已經足夠。刪除一次，或開始新的一天。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The magnesium is reacting. Hydrogen pushes the plunger out.": "鎂正在反應。氫把活塞推出。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The plunger reached the end of the syringe and gas escaped. This run cannot be used: use less magnesium.": "活塞到達注射器盡頭，氣體逸出了。這次實驗不能用：請用較少的鎂。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Recorded m = {m} g, V = {V} cm³.": "已記錄 m = {m} g，V = {V} cm³。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Runs": "各次實驗",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Best-fit line": "最佳擬合線",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Ideal gas": "理想氣體",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Graph of the volume of hydrogen against the mass of magnesium for each run, with a best-fit line through the origin and the line expected for an ideal gas at room conditions.": "每次實驗的氫體積對鎂質量的圖表，附穿過原點的最佳擬合線，以及室內條件下理想氣體的預期直線。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m(Mg) / g": "m(Mg) / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V(H₂) / cm³": "V(H₂) / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "{v} dm³ mol⁻¹ (at STP: {s} dm³ mol⁻¹, data booklet {b})": "{v} dm³ mol⁻¹（STP 下：{s} dm³ mol⁻¹，數據手冊 {b}）",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Run the reaction at least once.": "至少進行一次反應。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gradient = {k} cm³ g⁻¹, so molar volume = {v} dm³ mol⁻¹": "斜率 = {k} cm³ g⁻¹，所以摩爾體積 = {v} dm³ mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Do at least three runs with different masses.": "用不同質量至少做三次。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "cleaned": "已擦淨",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "dull": "暗啞",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "tipped in": "傾側加入",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "dropped in": "直接投入",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "cooled": "已冷卻",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "warm": "溫暖",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "n(H₂) / mol": "n(H₂) / mol",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V<sub>m</sub> / dm³ mol⁻¹": "V<sub>m</sub> / dm³ mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Choose a mass of magnesium and run the reaction. The acid is in excess, so all the magnesium reacts.": "選擇鎂的質量，進行反應。酸過量，所以所有鎂都會反應。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "propanone": "丙酮",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "hexane": "己烷",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ethanol": "乙醇",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Liquid": "液體",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Reveal the liquid": "顯示液體",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid A": "未知液體 A",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid B": "未知液體 B",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Unknown liquid C": "未知液體 C",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Heating-jacket temperature": "加熱套溫度",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Volume of liquid drawn up": "抽取的液體體積",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject and read": "注入並讀數",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Delete last reading": "刪除最後一個讀數",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last reading deleted.": "已刪除最後一個讀數。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Hide the liquid": "隱藏液體",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A new day: a new atmospheric pressure, and an empty results table.": "新的一天：新的大氣壓強，以及一個空的結果表。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m before / g": "之前的 m / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "m after / g": "之後的 m / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V before / cm³": "之前的 V / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "V after / cm³": "之後的 V / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Copied {n} readings as tab-separated text. Paste them into a spreadsheet.": "已把 {n} 個讀數複製為以 Tab 分隔的文字。把它們貼到試算表。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Atmospheric pressure": "大氣壓強",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Last injection": "最後一次注射",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar mass, mean": "摩爾質量，平均值",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Molar mass from the gradient": "由斜率得出的摩爾質量",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The liquid": "液體",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "A gas syringe inside a heating jacket. A hypodermic syringe injects the liquid through a self-sealing rubber cap on the nozzle. The vapour pushes the plunger out. The readings are in the readout.": "放在加熱套內的氣體注射器。注射針筒經管口上的自封橡膠蓋注入液體。蒸氣把活塞推出。讀數在讀數顯示區中。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "heating jacket": "加熱套",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "hypodermic": "注射針筒",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "That is plenty of readings. Delete one or start a new day.": "讀數已經足夠。刪除一個讀數，或開始新的一天。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "The plunger reached the end of the syringe and vapour escaped. This reading cannot be used: inject less liquid.": "活塞到達注射器盡頭，蒸氣逸出了。這個讀數不能用：請注入較少的液體。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Drops of liquid are still visible in the syringe. Not all of the liquid has vaporized at this temperature.": "注射器內仍看到液滴。在這個溫度下，並非所有液體都已汽化。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Recorded. The vapour pushed the plunger from {a} cm³ to {b} cm³.": "已記錄。蒸氣把活塞由 {a} cm³ 推至 {b} cm³。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject the liquid to take a reading.": "注入液體以讀取讀數。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm = {m} g, but the syringe overflowed.": "Δm = {m} g，但注射器滿溢了。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm = {m} g, ΔV = {v} cm³, θ = {th} °C": "Δm = {m} g，ΔV = {v} cm³，θ = {th} °C",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "gradient = {k} cm³ g⁻¹, so M = {M} g mol⁻¹": "斜率 = {k} cm³ g⁻¹，所以 M = {M} g mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Inject at least three different volumes at the same jacket temperature.": "在相同的加熱套溫度下，至少注入三個不同的體積。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "{name}, {formula}, M = {M} g mol⁻¹, boiling point {bp} °C.": "{name}，{formula}，M = {M} g mol⁻¹，沸點 {bp} °C。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Your percentage error: {e} %.": "你的百分誤差：{e} %。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Hidden. Work out M first, then reveal it.": "已隱藏。先計算出 M，再顯示答案。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Injections": "各次注射",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Graph of the volume of vapour against the mass of liquid injected, with a best-fit line through the origin.": "蒸氣體積對注入液體質量的圖表，附穿過原點的最佳擬合線。",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm / g": "Δm / g",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ΔV / cm³": "ΔV / cm³",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Δm / g (±0.002)": "Δm / g (±0.002)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "ΔV / cm³ (±1.0)": "ΔV / cm³ (±1.0)",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "M / g mol⁻¹": "M / g mol⁻¹",

    // widget string (assets/js/widgets-lab-molar-mass-gas.js)
    "Choose a liquid, set the jacket temperature and inject. Keep the jacket temperature the same for every injection you want on one graph.": "選擇一種液體，設定加熱套溫度，然後注入。要放在同一幅圖表上的每次注射，加熱套溫度都要相同。",

  }
});
