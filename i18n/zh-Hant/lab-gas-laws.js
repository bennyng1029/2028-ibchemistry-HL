/* lab-gas-laws — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-gas-laws', {
  strings: {

    // page title (browser tab)
    "Lab 7 Investigating the gas laws | Structure Lab": "實驗 7 探究氣體定律 | Structure Lab",

    // Investigating the gas laws > page header > p
    "Lab 7 · Structure 1.5": "實驗 7 · Structure 1.5",

    // Investigating the gas laws > page header > h1
    "Investigating the gas laws": "探究氣體定律",

    // Investigating the gas laws > page header > span
    "What can measurements on a trapped sample of air tell us about how pressure, volume and temperature are linked, and is there a lowest possible temperature?": "量度一份被困住的空氣樣本，能告訴我們壓強、體積和溫度之間有甚麼關係？是否存在一個最低的可能溫度？",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "These are practical skills. Tick each one when you can do it on your own.": "這些是實驗技能。你能獨自做到某項時，就剔選該項。",

    // What you need to be able to do > checklist > span
    "Identify the independent, dependent and controlled variables in a gas experiment.": "辨認氣體實驗中的自變量、應變量和控制變量。",

    // What you need to be able to do > checklist > span
    "Record pressure, volume and temperature readings with their units and uncertainties.": "記錄壓強、體積和溫度的讀數，連同單位和不確定度。",

    // What you need to be able to do > checklist > span
    "Test for inverse proportion by calculating <i>PV</i> or by plotting <i>P</i> against 1/<i>V</i>.": "計算 <i>PV</i>，或繪畫 <i>P</i> 對 1/<i>V</i> 的圖表，以檢驗是否成反比。",

    // What you need to be able to do > checklist > span
    "Plot a graph against temperature and draw a line of best fit.": "繪畫某個量對溫度的圖表，並畫出最佳擬合線。",

    // What you need to be able to do > checklist > span
    "Extrapolate a straight line to estimate absolute zero.": "把直線外推以估算絕對零度。",

    // What you need to be able to do > checklist > span
    "Estimate the uncertainty of an extrapolated value and compare it with the percentage error.": "估算外推值的不確定度，並與百分誤差比較。",

    // What you need to be able to do > checklist > span
    "Identify random and systematic errors and suggest realistic improvements.": "辨認隨機誤差和系統誤差，並提出切實可行的改進方法。",

    // The chemistry behind it > h2
    "The chemistry behind it": "背後的化學",

    // The chemistry behind it > p
    "Gas particles are always moving. They hit the walls of their container, and those collisions cause the pressure. For a <strong>fixed amount</strong> of an ideal gas, three relationships follow.": "氣體粒子一直在運動。它們撞擊容器壁，這些碰撞產生壓強。對於<strong>固定物質的量</strong>的理想氣體，可以得出三種關係。",

    // The chemistry behind it > table > caption
    "Three relationships for a fixed amount of gas": "固定物質的量的氣體的三種關係",

    // The chemistry behind it > table > th
    "Kept constant": "保持不變",

    // The chemistry behind it > table > th
    "Relationship": "關係",

    // The chemistry behind it > table > th
    "Straight line through the origin": "穿過原點的直線",

    // The chemistry behind it > table > th
    // Uncertainties > table > th
    "temperature": "溫度",

    // The chemistry behind it > table > td
    "Pressure is inversely proportional to volume.": "壓強與體積成反比。",

    // The chemistry behind it > table > td
    "<i>P</i> against 1/<i>V</i>": "<i>P</i> 對 1/<i>V</i>",

    // The chemistry behind it > table > th
    "volume": "體積",

    // The chemistry behind it > table > td
    "Pressure is proportional to the absolute temperature.": "壓強與絕對溫度成正比。",

    // The chemistry behind it > table > td
    "<i>P</i> against <i>T</i> in K": "<i>P</i> 對 <i>T</i>（單位 K）",

    // The chemistry behind it > table > th
    // Aim, variables and safety > table > td
    // Uncertainties > table > th
    "pressure": "壓強",

    // The chemistry behind it > table > td
    "Volume is proportional to the absolute temperature.": "體積與絕對溫度成正比。",

    // The chemistry behind it > table > td
    "<i>V</i> against <i>T</i> in K": "<i>V</i> 對 <i>T</i>（單位 K）",

    // The chemistry behind it > p
    "In the laboratory you measure temperature in °C. A graph of pressure (or volume) against temperature in °C is still a straight line, but it does not pass through the origin. If you extend the line backwards, it meets the temperature axis at about −273 °C. That is <dfn data-def=\"The lowest possible temperature, 0 K or −273.15 °C. An ideal gas would have zero pressure and zero volume there.\">absolute zero</dfn>, 0 K. Extending a line beyond your data like this is called <dfn data-def=\"Extending a graph line beyond the range of the measured data to estimate a value.\">extrapolation</dfn>.": "在實驗室裏，你以 °C 量度溫度。壓強（或體積）對攝氏溫度的圖表仍然是一條直線，但它不穿過原點。如果你把直線向後延長，它會在約 −273 °C 與溫度軸相交。那就是<dfn data-def=\"可能達到的最低溫度，即 0 K 或 −273.15 °C。理想氣體在這溫度的壓強和體積都是零。\">絕對零度 <span class=\"en-term\">(absolute zero)</span></dfn>，即 0 K。像這樣把直線延長到數據範圍以外，稱為<dfn data-def=\"把圖表上的線延長到量度數據的範圍以外，以估算一個數值。\">外推 <span class=\"en-term\">(extrapolation)</span></dfn>。",

    // The chemistry behind it > data-def attribute
    "The lowest possible temperature, 0 K or −273.15 °C. An ideal gas would have zero pressure and zero volume there.": "可能達到的最低溫度，即 0 K 或 −273.15 °C。理想氣體在這溫度的壓強和體積都是零。",

    // The chemistry behind it > data-def attribute
    "Extending a graph line beyond the range of the measured data to estimate a value.": "把圖表上的線延長到量度數據的範圍以外，以估算一個數值。",

    // The chemistry behind it > p
    "The full story is on the topic page: <a href=\"../topics/s1-5.html#graphs\">gas-law graphs</a> and <a href=\"../topics/s1-5.html#pvnrt\">the ideal gas equation</a>.": "完整的內容在課題頁：<a href=\"../topics/s1-5.html#graphs\">氣體定律的圖表</a>和<a href=\"../topics/s1-5.html#pvnrt\">理想氣體方程</a>。",

    // The chemistry behind it > key idea > p
    "All three relationships come from one equation, <i>PV</i> = <i>nRT</i>. Keep one of <i>P</i>, <i>V</i> and <i>T</i> (and <i>n</i>) fixed and the other two are proportional or inversely proportional, as long as <i>T</i> is in kelvin.": "三種關係都來自同一條方程 <i>PV</i> = <i>nRT</i>。把 <i>P</i>、<i>V</i>、<i>T</i> 其中一個（以及 <i>n</i>）固定，餘下兩個就成正比或反比，只要 <i>T</i> 以開爾文為單位。",

    // The chemistry behind it > not needed for IB > p
    "Books call these Boyle’s law, Charles’s law and the pressure law. The guide says the names of the gas laws will not be assessed. You need the relationships and their graphs, not the names.": "課本稱這些定律為波義耳定律、查理定律和壓強定律。學科指南說明不會評核氣體定律的名稱。你需要的是這些關係和它們的圖表，而不是名稱。",

    // Aim, variables and safety > data-toc attribute
    "Aim, variables, safety": "目的、變量、安全",

    // Aim, variables and safety > h2
    "Aim, variables and safety": "目的、變量和安全",

    // Aim, variables and safety > p
    "<strong>Aim.</strong> Part A: find how the pressure of a fixed amount of air changes with its volume at constant temperature. Part B: find how the pressure (at fixed volume) or the volume (at fixed pressure) changes with temperature, and use the graph to estimate absolute zero.": "<strong>目的：</strong>A 部分：找出在溫度不變時，固定物質的量的空氣的壓強怎樣隨體積改變。B 部分：找出壓強（體積固定時）或體積（壓強固定時）怎樣隨溫度改變，並用圖表估算絕對零度。",

    // Aim, variables and safety > table > caption
    "Variables": "變量",

    // Aim, variables and safety > table > th
    "Variable": "變量",

    // Aim, variables and safety > table > th
    "Part A": "A 部分",

    // Aim, variables and safety > table > th
    "Part B, fixed volume": "B 部分，體積固定",

    // Aim, variables and safety > table > th
    "Part B, fixed pressure": "B 部分，壓強固定",

    // Aim, variables and safety > table > th
    "independent": "自變量",

    // Aim, variables and safety > table > td
    "volume of the syringe": "針筒的體積",

    // Aim, variables and safety > table > td
    "temperature of the water bath": "水浴的溫度",

    // Aim, variables and safety > table > th
    "dependent": "應變量",

    // Aim, variables and safety > table > td
    "volume of the gas": "氣體的體積",

    // Aim, variables and safety > table > th
    "controlled": "控制變量",

    // Aim, variables and safety > table > td
    "temperature; amount of air (no leaks)": "溫度；空氣的物質的量（不漏氣）",

    // Aim, variables and safety > table > td
    "volume of the flask; amount of air (no leaks)": "燒瓶的體積；空氣的物質的量（不漏氣）",

    // Aim, variables and safety > table > td
    "atmospheric pressure; amount of air (no leaks)": "大氣壓強；空氣的物質的量（不漏氣）",

    // Aim, variables and safety > h3
    "Equipment": "儀器",

    // Aim, variables and safety > li
    "100 cm<sup>3</sup> gas syringe (±0.5 cm<sup>3</sup>), with a cap to seal the nozzle": "100 cm<sup>3</sup> 氣體注射器（±0.5 cm<sup>3</sup>），附可封住管口的蓋",

    // Aim, variables and safety > li
    "gas pressure sensor and data logger (±0.1 kPa, range up to about 210 kPa)": "氣體壓強感應器和數據記錄器（±0.1 kPa，量程最高約 210 kPa）",

    // Aim, variables and safety > li
    "short, narrow plastic tube to join the syringe or flask to the sensor": "又短又窄的塑膠管，把注射器或燒瓶連接到感應器",

    // Aim, variables and safety > li
    "250 cm<sup>3</sup> borosilicate round-bottomed flask with a one-hole bung and glass tube": "250 cm<sup>3</sup> 硼矽酸玻璃圓底燒瓶，附單孔塞和玻璃管",

    // Aim, variables and safety > li
    "large beaker or electric water bath, kettle, ice, stirring rod": "大燒杯或電熱水浴、電熱水壺、冰、攪拌棒",

    // Aim, variables and safety > li
    "thermometer, −10 °C to 110 °C (±0.5 °C)": "溫度計，−10 °C 至 110 °C（±0.5 °C）",

    // Aim, variables and safety > li
    "clamp stands, bosses and clamps": "鐵架、十字夾和夾",

    // Aim, variables and safety > p
    "Water near 90 °C scalds. Use an electric water bath or add kettle water slowly, never carry a full beaker of hot water, and clamp the flask so the bath cannot be knocked over. Wear eye protection: a sealed flask is above atmospheric pressure when hot, and a flask with a crack can break. Check the flask for cracks first, and never move a hot flask straight into ice water. Keep the data logger and any mains leads away from the water.": "接近 90 °C 的水會燙傷人。使用電熱水浴，或慢慢加入熱水壺的水；切勿拿着整杯熱水走動，並用夾固定燒瓶，以免水浴被撞翻。戴上護目鏡：密封的燒瓶受熱時壓強高於大氣壓強，有裂紋的燒瓶可能會破裂。先檢查燒瓶有沒有裂紋，切勿把熱燒瓶直接放進冰水。數據記錄器和所有電源線都要遠離水。",

    // Method > h2
    "Method": "方法",

    // Method > h3
    "Part A: pressure and volume": "A 部分：壓強和體積",

    // Method > li
    "Pull the plunger out to 50 cm<sup>3</sup>. Join the syringe to the pressure sensor with the shortest tube you have. <em>Why:</em> the air inside the tube is part of the trapped gas, but the syringe scale does not measure it.": "把活塞拉出至 50 cm<sup>3</sup>。用最短的管把注射器連接到壓強感應器。<em>原因：</em>管內的空氣也是被困氣體的一部分，但注射器的刻度不會量度它。",

    // Method > li
    "Test for leaks. Hold the plunger in at about 30 cm<sup>3</sup> for one minute. The pressure reading should not fall. <em>Why:</em> the amount of gas must stay constant.": "檢查是否漏氣。把活塞推入並保持在約 30 cm<sup>3</sup> 一分鐘。壓強讀數不應下降。<em>原因：</em>氣體的物質的量必須保持不變。",

    // Method > li
    "Move the plunger to a new volume. Wait about 30 seconds, then record the volume and the pressure. <em>Why:</em> pushing the plunger in quickly warms the gas a little. Waiting lets it return to room temperature.": "把活塞移到新的體積。等候約 30 秒，然後記錄體積和壓強。<em>原因：</em>快速推入活塞會使氣體稍為變暖。等候可讓氣體回到室溫。",

    // Method > li
    "Take readings from 25 cm<sup>3</sup> to 100 cm<sup>3</sup>, about every 10 cm<sup>3</sup>. Then repeat the readings, moving the plunger the other way. <em>Why:</em> a wide range shows the shape of the graph, and repeats show up leaks and friction.": "由 25 cm<sup>3</sup> 至 100 cm<sup>3</sup> 讀數，大約每 10 cm<sup>3</sup> 一次。然後把活塞向相反方向移動，重複讀數。<em>原因：</em>範圍廣可顯示圖表的形狀，重複讀數可揭示漏氣和摩擦。",

    // Method > li
    "Record the room temperature at the start and at the end. <em>Why:</em> temperature is a controlled variable, so you need to show it stayed the same.": "在開始和結束時記錄室溫。<em>原因：</em>溫度是控制變量，所以你需要證明它保持不變。",

    // Method > h3
    "Part B: temperature": "B 部分：溫度",

    // Method > li
    "Clamp the dry flask so that as much of it as possible is under the water. Join it to the pressure sensor with a short tube. <em>Why:</em> all the gas should be at the bath temperature.": "用夾固定乾燥的燒瓶，使它盡量浸在水中。用短管把它連接到壓強感應器。<em>原因：</em>所有氣體都應處於水浴的溫度。",

    // Method > li
    "Start with a mixture of ice and water at about 0 °C. Stir, wait until both the thermometer and the pressure reading are steady, then record both. <em>Why:</em> the gas inside the flask takes a few minutes to reach the temperature of the water.": "先用約 0 °C 的冰水混合物。攪拌，等候溫度計和壓強讀數都穩定，然後記錄兩者。<em>原因：</em>燒瓶內的氣體需要幾分鐘才能達到水的溫度。",

    // Method > li
    "Raise the temperature by about 10 °C to 15 °C, by heating or by adding hot water. Stir, wait, and record again. Continue up to about 90 °C. <em>Why:</em> a wide range of temperatures makes the extrapolation more reliable.": "加熱或加入熱水，使溫度升高約 10 °C 至 15 °C。攪拌、等候，再記錄。繼續直至約 90 °C。<em>原因：</em>溫度範圍廣，外推會更可靠。",

    // Method > li
    "For the fixed-pressure version, seal about 70 cm<sup>3</sup> of air in a gas syringe with a cap and hold it under the water. Record the volume instead of the pressure. Turn the plunger gently before each reading. <em>Why:</em> friction can stop the plunger moving freely, so the gas would not be at atmospheric pressure.": "做壓強固定的版本時，把約 70 cm<sup>3</sup> 空氣封在帶蓋的氣體注射器中，並把它浸在水中。記錄體積而不是壓強。每次讀數前輕輕轉動活塞。<em>原因：</em>摩擦可能使活塞不能自由移動，氣體就不會處於大氣壓強。",

    // Method > li
    "Plot pressure (or volume) against temperature in °C. Draw the line of best fit and extend it to the temperature axis.": "繪畫壓強（或體積）對攝氏溫度的圖表。畫出最佳擬合線，並把它延長至溫度軸。",

    // Run the experiment > data-toc attribute
    // Run the experiment > h2
    "Run the experiment": "進行實驗",

    // Run the experiment > p
    "These are simulated experiments. Every reading has a small random error, like a real one, so a new run gives slightly different data. The precision is that of real apparatus. Copy your table into a spreadsheet if you want to plot it yourself.": "這些是模擬實驗。每個讀數都有細小的隨機誤差，就像真實實驗一樣，所以每次新的實驗得出的數據都略有不同。精密度與真實儀器相同。如果你想自己繪圖，可以把表格複製到試算表。",

    // Run the experiment > widget > data-title attribute
    "Part A: squeeze the air in a gas syringe": "A 部分：壓縮氣體注射器中的空氣",

    // Run the experiment > widget > data-kicker attribute
    "Virtual experiment": "虛擬實驗",

    // Run the experiment > widget > figcaption
    "Set a syringe reading and record the pressure. Take at least six readings from 25 cm<sup>3</sup> to 100 cm<sup>3</sup>. Compare the two graphs: the curve of <i>P</i> against <i>V</i>, and the straight line of <i>P</i> against 1/<i>V</i>. Then try “Read the sensor at once” after big moves of the plunger, and look at the <i>PV</i> column.": "設定注射器的讀數，記錄壓強。由 25 cm<sup>3</sup> 至 100 cm<sup>3</sup> 至少讀取六個讀數。比較兩幅圖表：<i>P</i> 對 <i>V</i> 的曲線，以及 <i>P</i> 對 1/<i>V</i> 的直線。然後在大幅移動活塞後試試「立即讀取感應器」，並看看 <i>PV</i> 一欄。",

    // Run the experiment > widget > data-title attribute
    "Part B: warm the air and find absolute zero": "B 部分：加熱空氣，找出絕對零度",

    // Run the experiment > widget > figcaption
    "Choose a set-up. Set the bath temperature, take a reading, and repeat from about 0 °C to 90 °C. The graph extends your line of best fit back to the temperature axis. The readout gives your estimate of absolute zero and a range from the worst-fit lines. Switch the temperature axis to kelvin to see the line pass close to the origin. Then start a new run and choose “Read at once”: how far does your estimate move, and which way?": "選擇一種裝置。設定水浴溫度，讀取讀數，並由約 0 °C 至 90 °C 重複。圖表會把你的最佳擬合線向後延長至溫度軸。讀數顯示區會給出你估算的絕對零度，以及由最差擬合線得出的範圍。把溫度軸轉為開爾文，看看直線怎樣接近原點。然後開始新的實驗，選擇「立即讀取」：你的估算值移動了多少？向哪個方向移動？",

    // Run the experiment > exam tip (shown in English + translation) > p
    "On a graph you plot yourself, label each axis with the quantity and its unit (<span class=\"mono\">P / kPa</span>, <span class=\"mono\">θ / °C</span>), choose scales that spread the points over most of the grid, and draw one smooth line of best fit. Do not join the points dot to dot.": "在你自己繪畫的圖表上，每條軸都要標示物理量和單位（<span class=\"mono\">P / kPa</span>、<span class=\"mono\">θ / °C</span>），選擇能使數據點分佈在大部分方格上的標度，並畫出一條平滑的最佳擬合線。不要把數據點逐點連起來。",

    // Processing the data > h2
    "Processing the data": "處理數據",

    // Processing the data > p
    "Two calculations come out of this lab. From Part B, you find where the line meets the temperature axis. From Part A, you test whether <i>PV</i> stays constant and use the gradient to find the amount of gas.": "這個實驗有兩項計算。在 B 部分，你找出直線與溫度軸相交的位置。在 A 部分，你檢驗 <i>PV</i> 是否保持不變，並用斜率求出氣體的物質的量。",

    // Processing the data > worked example > h3
    "Absolute zero from a pressure–temperature graph": "從壓強－溫度圖表求絕對零度",

    // Processing the data > worked example > p
    "A student heats a sealed flask of air and plots pressure against temperature in °C. The line of best fit passes through (0.0 °C, 92.4 kPa) and (80.0 °C, 119.6 kPa). Estimate absolute zero from this line.": "一名學生加熱一個密封的空氣燒瓶，並繪畫壓強對攝氏溫度的圖表。最佳擬合線穿過 (0.0 °C, 92.4 kPa) 和 (80.0 °C, 119.6 kPa)。從這條直線估算絕對零度。",

    // Processing the data > worked example > data-title attribute
    "Find the gradient": "求斜率",

    // Processing the data > worked example > p
    "Use two points on the line, far apart, not two data points.": "用線上相距較遠的兩點，而不是兩個數據點。",

    // Processing the data > worked example > maths line
    "gradient = (119.6 − 92.4) kPa ÷ (80.0 − 0.0) °C = 27.2 ÷ 80.0 = 0.340 kPa °C<sup>−1</sup>": "斜率 = (119.6 − 92.4) kPa ÷ (80.0 − 0.0) °C = 27.2 ÷ 80.0 = 0.340 kPa °C<sup>−1</sup>",

    // Processing the data > worked example > data-title attribute
    "Read the intercept on the pressure axis": "讀出壓強軸上的截距",

    // Processing the data > worked example > p
    "The line passes through θ = 0.0 °C at 92.4 kPa, so that is the y-intercept.": "直線在 θ = 0.0 °C 時穿過 92.4 kPa，所以這就是 y 截距。",

    // Processing the data > worked example > data-title attribute
    "Set the pressure to zero": "把壓強設為零",

    // Processing the data > worked example > p
    "An ideal gas has zero pressure at absolute zero, so solve for θ when <i>P</i> = 0.": "理想氣體在絕對零度時壓強為零，所以求 <i>P</i> = 0 時的 θ。",

    // Processing the data > worked example > data-title attribute
    "Round and compare": "取捨並比較",

    // Processing the data > worked example > p
    "The data have 3 significant figures. The literature value is −273.15 °C.": "數據有 3 位有效數字。文獻值是 −273.15 °C。",

    // Processing the data > worked example > maths line
    "percentage error = |−271.8 − (−273.15)| ÷ 273.15 × 100 = 0.5 %": "百分誤差 = |−271.8 − (−273.15)| ÷ 273.15 × 100 = 0.5 %",

    // Processing the data > worked example > p
    "Absolute zero is about −272 °C, a 0.5 % difference from −273.15 °C.": "絕對零度約為 −272 °C，與 −273.15 °C 相差 0.5 %。",

    // Processing the data > try it > p
    "In the fixed-pressure experiment, the line of best fit of volume against temperature passes through (10.0 °C, 52.6 cm<sup>3</sup>) and (90.0 °C, 67.4 cm<sup>3</sup>). Estimate absolute zero, in °C.": "在壓強固定的實驗中，體積對溫度的最佳擬合線穿過 (10.0 °C, 52.6 cm<sup>3</sup>) 和 (90.0 °C, 67.4 cm<sup>3</sup>)。估算絕對零度，以 °C 表示。",

    // Processing the data > try it > li
    "Find the gradient first, in cm<sup>3</sup> °C<sup>−1</sup>. Then work back from a known point to the temperature at which <i>V</i> = 0.": "先求斜率，單位是 cm<sup>3</sup> °C<sup>−1</sup>。然後從一個已知點倒推出 <i>V</i> = 0 時的溫度。",

    // Processing the data > try it > li
    "gradient = (67.4 − 52.6) ÷ (90.0 − 10.0). The volume must fall by 52.6 cm<sup>3</sup> from the point at 10.0 °C.": "斜率 = (67.4 − 52.6) ÷ (90.0 − 10.0)。體積必須從 10.0 °C 那一點下降 52.6 cm<sup>3</sup>。",

    // Processing the data > try it > maths line
    "gradient = 14.8 cm<sup>3</sup> ÷ 80.0 °C = 0.185 cm<sup>3</sup> °C<sup>−1</sup>": "斜率 = 14.8 cm<sup>3</sup> ÷ 80.0 °C = 0.185 cm<sup>3</sup> °C<sup>−1</sup>",

    // Processing the data > try it > maths line
    "temperature fall needed = 52.6 ÷ 0.185 = 284.3 °C": "所需的溫度下降 = 52.6 ÷ 0.185 = 284.3 °C",

    // Processing the data > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Processing the data > worked example > h3
    "Testing inverse proportion and finding the amount of gas": "檢驗反比關係並求出氣體的物質的量",

    // Processing the data > worked example > p
    "In Part A at 21.0 °C a student records: 30 cm<sup>3</sup>, 168.6 kPa; 50 cm<sup>3</sup>, 101.3 kPa; 80 cm<sup>3</sup>, 63.5 kPa; 100 cm<sup>3</sup>, 50.8 kPa. Show that the pressure is inversely proportional to the volume, and calculate the amount of air, in mol.": "在 A 部分，一名學生在 21.0 °C 記錄了：30 cm<sup>3</sup>，168.6 kPa；50 cm<sup>3</sup>，101.3 kPa；80 cm<sup>3</sup>，63.5 kPa；100 cm<sup>3</sup>，50.8 kPa。證明壓強與體積成反比，並計算空氣的物質的量，以 mol 表示。",

    // Processing the data > worked example > data-title attribute
    "Calculate PV for each reading": "計算每個讀數的 PV",

    // Processing the data > worked example > p
    "If <i>P</i> is inversely proportional to <i>V</i>, the product <i>PV</i> is constant.": "如果 <i>P</i> 與 <i>V</i> 成反比，乘積 <i>PV</i> 就是常數。",

    // Processing the data > worked example > data-title attribute
    "Judge the spread": "判斷數值的分散程度",

    // Processing the data > worked example > p
    "The values differ by less than 0.5 %, which is within the uncertainty of the volume readings (about 1.7 % at 30 cm<sup>3</sup>). So <i>PV</i> is constant within experimental error.": "各數值相差不足 0.5 %，在體積讀數的不確定度之內（在 30 cm<sup>3</sup> 時約為 1.7 %）。所以在實驗誤差範圍內，<i>PV</i> 是常數。",

    // Processing the data > worked example > maths line
    "mean <i>PV</i> = 5071 kPa cm<sup>3</sup> ≈ 5.07 × 10<sup>3</sup> kPa cm<sup>3</sup>": "<i>PV</i> 的平均值 = 5071 kPa cm<sup>3</sup> ≈ 5.07 × 10<sup>3</sup> kPa cm<sup>3</sup>",

    // Processing the data > worked example > data-title attribute
    "Convert to SI units": "換算為 SI 單位",

    // Processing the data > worked example > p
    "1 kPa = 10<sup>3</sup> Pa and 1 cm<sup>3</sup> = 10<sup>−6</sup> m<sup>3</sup>, so 1 kPa cm<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup> = 10<sup>−3</sup> J.": "1 kPa = 10<sup>3</sup> Pa，1 cm<sup>3</sup> = 10<sup>−6</sup> m<sup>3</sup>，所以 1 kPa cm<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup> = 10<sup>−3</sup> J。",

    // Processing the data > worked example > data-title attribute
    "Use PV = nRT": "用 PV = nRT",

    // Processing the data > worked example > p
    "Temperature must be in kelvin: 21.0 + 273.15 = 294.15 K.": "溫度必須以開爾文為單位：21.0 + 273.15 = 294.15 K。",

    // Processing the data > worked example > maths line
    "<i>n</i> = <b>2.07 × 10<sup>−3</sup> mol</b> (3 significant figures)": "<i>n</i> = <b>2.07 × 10<sup>−3</sup> mol</b>（3 位有效數字）",

    // Processing the data > worked example > p
    "<i>PV</i> is constant within error, so <i>P</i> ∝ 1/<i>V</i>. The syringe holds 2.07 × 10<sup>−3</sup> mol of air.": "在誤差範圍內 <i>PV</i> 是常數，所以 <i>P</i> ∝ 1/<i>V</i>。注射器中有 2.07 × 10<sup>−3</sup> mol 空氣。",

    // Processing the data > try it > p
    "The gradient of a student’s graph of <i>P</i> against 1/<i>V</i> is 3.86 × 10<sup>3</sup> kPa cm<sup>3</sup>. The room temperature was 18.5 °C. Calculate the amount of air in the syringe, in mol.": "一名學生繪畫 <i>P</i> 對 1/<i>V</i> 的圖表，斜率是 3.86 × 10<sup>3</sup> kPa cm<sup>3</sup>。室溫是 18.5 °C。計算注射器中空氣的物質的量，以 mol 表示。",

    // Processing the data > try it > li
    "The gradient of <i>P</i> against 1/<i>V</i> equals <i>PV</i>. Convert kPa cm<sup>3</sup> to J (Pa m<sup>3</sup>) before you use <i>R</i> = 8.31.": "<i>P</i> 對 1/<i>V</i> 的斜率等於 <i>PV</i>。用 <i>R</i> = 8.31 之前，先把 kPa cm<sup>3</sup> 換算為 J（Pa m<sup>3</sup>）。",

    // Processing the data > try it > li
    "3.86 × 10<sup>3</sup> kPa cm<sup>3</sup> = 3.86 J. <i>T</i> = 18.5 + 273.15 = 291.65 K.": "3.86 × 10<sup>3</sup> kPa cm<sup>3</sup> = 3.86 J。<i>T</i> = 18.5 + 273.15 = 291.65 K。",

    // Processing the data > common mistake > p
    "Putting kPa and cm<sup>3</sup> straight into <i>PV</i> = <i>nRT</i> with <i>R</i> = 8.31 gives an answer 1000 times too large. Use Pa and m<sup>3</sup>, or kPa and dm<sup>3</sup>. Always use kelvin for <i>T</i>: a temperature in °C gives nonsense.": "把 kPa 和 cm<sup>3</sup> 直接代入 <i>PV</i> = <i>nRT</i> 並用 <i>R</i> = 8.31，得出的答案會大 1000 倍。要用 Pa 和 m<sup>3</sup>，或 kPa 和 dm<sup>3</sup>。<i>T</i> 一定要用開爾文：用攝氏溫度會得出毫無意義的答案。",

    // Uncertainties > h2
    "Uncertainties": "不確定度",

    // Uncertainties > h3
    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Readings": "讀數",

    // Uncertainties > table > caption
    "Uncertainty of the apparatus": "儀器的不確定度",

    // Uncertainties > table > th
    "Reading": "讀數",

    // Uncertainties > table > th
    "Absolute uncertainty": "絕對不確定度",

    // Uncertainties > table > th
    "Example": "例子",

    // Uncertainties > table > th
    "Percentage uncertainty": "百分不確定度",

    // Uncertainties > table > th
    "syringe volume": "注射器體積",

    // Uncertainties > table > td
    "±0.5 cm<sup>3</sup>": "±0.5 cm<sup>3</sup>",

    // Uncertainties > table > td
    "30 cm<sup>3</sup>": "30 cm<sup>3</sup>",

    // Uncertainties > table > td
    "100 cm<sup>3</sup>": "100 cm<sup>3</sup>",

    // Uncertainties > table > td
    "±0.1 kPa": "±0.1 kPa",

    // Uncertainties > table > td
    "168.6 kPa": "168.6 kPa",

    // Uncertainties > p
    "Percentage uncertainty = absolute uncertainty ÷ value × 100. The same reading has a much smaller percentage uncertainty in kelvin than in °C, because the number is bigger. A temperature <em>difference</em> uses two readings, so its absolute uncertainty is ±0.5 + 0.5 = ±1.0 °C.": "百分不確定度 = 絕對不確定度 ÷ 數值 × 100。同一個讀數，以開爾文表示時的百分不確定度比以攝氏度表示時小得多，因為數值較大。溫度<em>差</em>用兩個讀數，所以它的絕對不確定度是 ±0.5 + 0.5 = ±1.0 °C。",

    // Uncertainties > p
    "For a product or a quotient, add the percentage uncertainties. At 30 cm<sup>3</sup>, <i>PV</i> has an uncertainty of 1.7 % + 0.06 % ≈ 1.7 %. The volume dominates. That is why the smallest volumes give the least certain points.": "乘積或商的百分不確定度，是各百分不確定度之和。在 30 cm<sup>3</sup> 時，<i>PV</i> 的不確定度是 1.7 % + 0.06 % ≈ 1.7 %。體積佔主導地位。所以最小的體積給出最不確定的數據點。",

    // Uncertainties > h3
    "The uncertainty of absolute zero": "絕對零度的不確定度",

    // Uncertainties > p
    "Your estimate comes from an extrapolation, so small errors in the line become large errors at −273 °C. One way to see how large is to draw two <dfn data-def=\"The steepest and the shallowest straight lines that still pass through the error bars of the data points.\">worst-fit lines</dfn>: the steepest and the shallowest lines that still pass through the error bars of your lowest and highest points.": "你的估算值來自外推，所以直線的小誤差到了 −273 °C 會變成大誤差。要看看誤差有多大，一個方法是畫出兩條<dfn data-def=\"仍然穿過各數據點誤差棒的最陡和最平直線。\">最差擬合線 <span class=\"en-term\">(worst-fit lines)</span></dfn>：仍然穿過最低點和最高點誤差棒的最陡和最平直線。",

    // Uncertainties > data-def attribute
    "The steepest and the shallowest straight lines that still pass through the error bars of the data points.": "仍然穿過各數據點誤差棒的最陡和最平直線。",

    // Uncertainties > p
    "Take the worked example. The lowest and highest readings, (0.0 °C, 92.4 kPa) and (80.0 °C, 119.6 kPa), sit on the line, with error bars of ±0.5 °C and ±0.1 kPa.": "用例題的數據。最低和最高的讀數 (0.0 °C, 92.4 kPa) 和 (80.0 °C, 119.6 kPa) 都在直線上，誤差棒是 ±0.5 °C 和 ±0.1 kPa。",

    // Uncertainties > li
    "Steepest line: through (0.5 °C, 92.3 kPa) and (79.5 °C, 119.7 kPa). It meets the axis at −266 °C.": "最陡的直線：穿過 (0.5 °C, 92.3 kPa) 和 (79.5 °C, 119.7 kPa)。它在 −266 °C 與軸相交。",

    // Uncertainties > li
    "Shallowest line: through (−0.5 °C, 92.5 kPa) and (80.5 °C, 119.5 kPa). It meets the axis at −278 °C.": "最平的直線：穿過 (−0.5 °C, 92.5 kPa) 和 (80.5 °C, 119.5 kPa)。它在 −278 °C 與軸相交。",

    // Uncertainties > p
    "So the result is <span class=\"mono\">−272 ± 6 °C</span>. The literature value, −273.15 °C, lies inside this range. The 0.5 % percentage error is smaller than the uncertainty, so random error alone could explain the difference. If the literature value had been outside the range, a systematic error would be likely.": "所以結果是 <span class=\"mono\">−272 ± 6 °C</span>。文獻值 −273.15 °C 在這個範圍之內。0.5 % 的百分誤差小於不確定度，所以單憑隨機誤差已可解釋這個差異。如果文獻值在範圍之外，就很可能有系統誤差。",

    // Uncertainties > key idea > p
    "Real data scatter more than the error bars of the instruments suggest, because of other random errors (the gas not quite at the bath temperature, uneven heating). The worst-fit lines then have to pass through all the points’ error bars, not just the two end points. The virtual experiment uses the two end points to keep things simple.": "真實數據的分散程度比儀器的誤差棒所顯示的大，因為還有其他隨機誤差（氣體未完全達到水浴溫度、加熱不均勻）。這時最差擬合線必須穿過所有數據點的誤差棒，而不只是兩個端點。虛擬實驗為了簡單起見，只用兩個端點。",

    // Uncertainties > not needed for IB > p
    "The guide does not set a formal method for the uncertainty of a gradient or an intercept. Worst-fit lines are one common way. You will not need a statistical method such as least-squares error analysis.": "學科指南沒有規定求斜率或截距不確定度的正式方法。最差擬合線是常用的方法之一。你不需要用統計方法，例如最小二乘法誤差分析。",

    // Evaluation: errors and improvements > data-toc attribute
    "Errors and improvements": "誤差和改進",

    // Evaluation: errors and improvements > h2
    "Evaluation: errors and improvements": "評價：誤差和改進",

    // Evaluation: errors and improvements > p
    "A <dfn data-def=\"An error that makes readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.\">random error</dfn> scatters readings both ways; repeats reduce its effect. A <dfn data-def=\"An error that shifts every reading in the same direction. Repeats do not remove it; you must change the method or the apparatus.\">systematic error</dfn> pushes every reading the same way, so repeats do not help. You have to change the method.": "<dfn data-def=\"使讀數在真實值上下不可預測地散開的誤差。重複量度和取平均值可減少它的影響。\">隨機誤差 <span class=\"en-term\">(random error)</span></dfn>使讀數向兩個方向散開；重複量度可減少它的影響。<dfn data-def=\"使每個讀數都向同一方向偏移的誤差。重複量度不能消除它；你必須改變方法或儀器。\">系統誤差 <span class=\"en-term\">(systematic error)</span></dfn>使每個讀數都偏向同一方向，所以重複量度沒有幫助。你必須改變方法。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that makes readings scatter unpredictably above and below the true value. Repeats and averaging reduce its effect.": "使讀數在真實值上下不可預測地散開的誤差。重複量度和取平均值可減少它的影響。",

    // Evaluation: errors and improvements > data-def attribute
    "An error that shifts every reading in the same direction. Repeats do not remove it; you must change the method or the apparatus.": "使每個讀數都向同一方向偏移的誤差。重複量度不能消除它；你必須改變方法或儀器。",

    // Evaluation: errors and improvements > table > caption
    "Sources of error in the gas-law experiments": "氣體定律實驗的誤差來源",

    // Evaluation: errors and improvements > table > th
    "Source of error": "誤差來源",

    // Evaluation: errors and improvements > table > th
    "Effect on the result": "對結果的影響",

    // Evaluation: errors and improvements > table > th
    "Realistic improvement": "切實可行的改進",

    // Evaluation: errors and improvements > table > td
    "Part B, fixed volume: the air in the connecting tube stays near room temperature (systematic).": "B 部分，體積固定：連接管內的空氣一直接近室溫（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The pressure rises less than it should as the bath heats up. The gradient is too small, so the line meets the axis too far down: the estimate is more negative than −273 °C.": "水浴升溫時，壓強上升得比應有的少。斜率太小，所以直線與軸相交的位置太低：估算值比 −273 °C 更負。",

    // Evaluation: errors and improvements > table > td
    "Use a short, narrow tube and a large flask, and push the flask as deep into the water as possible.": "用又短又窄的管和大的燒瓶，並把燒瓶盡量深入水中。",

    // Evaluation: errors and improvements > table > td
    "Part B: readings taken before the gas reaches the bath temperature (systematic when heating).": "B 部分：氣體未達到水浴溫度就讀數（加熱時屬系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The first reading, taken after a long wait in ice water, is correct. After each rise in temperature the gas is still cooler than the thermometer reading, so the later pressures (or volumes) are too low. The line is too shallow, so the estimate is more negative than −273 °C, often by a lot.": "第一個讀數在冰水中等候了很久才讀取，是正確的。每次升溫後，氣體仍比溫度計讀數冷，所以之後的壓強（或體積）太低。直線太平，所以估算值比 −273 °C 更負，而且往往相差很多。",

    // Evaluation: errors and improvements > table > td
    "Stir the water and wait until the sensor reading has stopped changing before you record.": "攪拌水，等候感應器讀數不再改變才記錄。",

    // Evaluation: errors and improvements > table > td
    "Part B, fixed pressure: friction between the plunger and the barrel (systematic when heating).": "B 部分，壓強固定：活塞與針筒之間的摩擦（加熱時屬系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The plunger sticks behind the expanding gas, so the volumes read after heating are too small. The line is too shallow, so the estimate is more negative than −273 °C. Friction also adds random scatter.": "活塞卡住，跟不上膨脹的氣體，所以加熱後讀取的體積太小。直線太平，所以估算值比 −273 °C 更負。摩擦也會增加隨機的分散。",

    // Evaluation: errors and improvements > table > td
    "Use a glass syringe, turn the plunger gently before each reading, or use a capillary tube with a bead of liquid instead.": "用玻璃注射器，每次讀數前輕輕轉動活塞，或改用有一小段液柱的毛細管。",

    // Evaluation: errors and improvements > table > td
    "Part A: air in the tube to the sensor is not included in <i>V</i> (systematic).": "A 部分：通往感應器的管內空氣沒有計入 <i>V</i>（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "<i>PV</i> falls slightly as <i>V</i> gets smaller, and the graph of <i>P</i> against 1/<i>V</i> does not pass exactly through the origin.": "<i>V</i> 變小時 <i>PV</i> 稍為下降，而 <i>P</i> 對 1/<i>V</i> 的圖表不會剛好穿過原點。",

    // Evaluation: errors and improvements > table > td
    "Use the shortest tube possible, or measure the tube’s volume and add it to every syringe reading.": "用盡可能短的管，或量度管的體積，並加到每個注射器讀數上。",

    // Evaluation: errors and improvements > table > td
    "Part A: gas leaks out at the joints at high pressure (systematic).": "A 部分：高壓時氣體從接駁處漏出（系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The amount of gas falls, so <i>PV</i> falls during the run.": "氣體的物質的量減少，所以 <i>PV</i> 在實驗過程中下降。",

    // Evaluation: errors and improvements > table > td
    "Use tight push-fit joints, test for leaks first, and take readings without long delays.": "用緊密的推入式接頭，先檢查是否漏氣，讀數時不要拖延太久。",

    // Evaluation: errors and improvements > table > td
    "Part A: reading straight after a quick compression (random or systematic).": "A 部分：快速壓縮後立即讀數（隨機或系統誤差）。",

    // Evaluation: errors and improvements > table > td
    "The gas is briefly warmer, so the pressure is too high at small volumes.": "氣體短暫地變暖，所以在小體積時壓強太高。",

    // Evaluation: errors and improvements > table > td
    "Move the plunger slowly and wait about 30 s before each reading.": "慢慢移動活塞，每次讀數前等候約 30 s。",

    // Evaluation: errors and improvements > table > td
    "Readings of the thermometer and the syringe scale (random).": "溫度計和注射器刻度的讀數（隨機誤差）。",

    // Evaluation: errors and improvements > table > td
    "Points scatter about the line, so the gradient and the intercept are less certain.": "數據點在直線兩旁散開，所以斜率和截距較不確定。",

    // Evaluation: errors and improvements > table > td
    "Take more readings over a wider range and repeat them; use a digital temperature probe.": "在更廣的範圍內讀取更多讀數並重複；使用數字溫度探頭。",

    // Evaluation: errors and improvements > table > td
    "Long extrapolation from 0–90 °C back to −273 °C.": "由 0–90 °C 長距離外推至 −273 °C。",

    // Evaluation: errors and improvements > table > td
    "Small errors in the gradient give large errors in the estimate.": "斜率的小誤差會使估算值有大誤差。",

    // Evaluation: errors and improvements > table > td
    "Use the widest safe temperature range and many evenly spread points.": "使用安全範圍內最廣的溫度範圍，以及許多分佈均勻的數據點。",

    // Evaluation: errors and improvements > exam tip (shown in English + translation) > p
    "For an error question, say three things: what the error is, which way it moves the result (bigger or smaller, and why), and a specific improvement. “Human error” and “be more careful” earn no marks.": "回答誤差題時要說出三件事：誤差是甚麼、它使結果向哪個方向移動（變大或變小，以及原因），以及一項具體的改進。「人為錯誤」和「要更小心」不會得分。",

    // Evaluation: errors and improvements > not needed for IB > p
    "Air behaves almost ideally between 0 °C and 90 °C and up to about 200 kPa, so non-ideal behaviour is not a significant error here. You do not need to correct for it.": "在 0 °C 至 90 °C 之間、最高約 200 kPa 時，空氣的行為幾乎是理想的，所以在這裏非理想行為不是重大誤差。你不需要為它作出修正。",

    // Exam practice > h2
    "Exam practice": "考試練習",

    // Exam practice > p
    "Paper 1B style questions on this practical: data, graphs, uncertainties and evaluation. All the questions are original.": "關於這個實驗的 Paper 1B 形式題目：數據、圖表、不確定度和評價。所有題目都是原創的。",

    // Exam practice > data-title attribute
    "Gas laws lab: exam practice": "氣體定律實驗：考試練習",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "No readings yet.": "還沒有讀數。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Syringe reading, V": "注射器讀數 V",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "After moving the plunger": "移動活塞後",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Wait 30 s, then read the sensor": "等候 30 s，然後讀取感應器",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Read the sensor at once": "立即讀取感應器",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph": "圖表",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P against 1/V": "P 對 1/V",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P against V": "P 對 V",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Record reading": "記錄讀數",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Delete last reading": "刪除最後一個讀數",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Last reading deleted.": "已刪除最後一個讀數。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run": "再做一次",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run: the syringe was refilled with air at {V} cm³ and sealed.": "新的實驗：注射器重新注入 {V} cm³ 空氣並已密封。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copy data": "複製數據",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "V / cm³ (±0.5)": "V / cm³ (±0.5)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P / kPa (±0.1)": "P / kPa (±0.1)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "1/V / cm⁻³": "1/V / cm⁻³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "PV / kPa cm³": "PV / kPa cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copied {n} readings as tab-separated text. Paste them into a spreadsheet.": "已把 {n} 個讀數複製為以 Tab 分隔的文字。把它們貼到試算表。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Copying is blocked in this browser. Select the table with the mouse and copy it instead.": "這個瀏覽器不容許複製。請用滑鼠選取表格，再自行複製。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Pressure sensor": "壓強感應器",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Room temperature": "室溫",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Best-fit line": "最佳擬合線",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Note": "備註",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A gas syringe sealed to a pressure sensor by a short tube. The plunger position shows the syringe reading. The sensor shows the pressure. The values are also in the readout.": "氣體注射器以短管密封連接到壓強感應器。活塞的位置顯示注射器讀數，感應器顯示壓強。這些數值也在讀數顯示區中。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "pressure sensor": "壓強感應器",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gas syringe (cm³)": "氣體注射器 (cm³)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "That is plenty of readings. Delete one or start a new run.": "讀數已經足夠。刪除一個讀數，或開始新的實驗。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded V = {V} cm³, P = {p} kPa.": "已記錄 V = {V} cm³，P = {p} kPa。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of pressure against 1/V for the readings in the table, with a straight line of best fit.": "表中讀數的壓強對 1/V 圖表，附一條直的最佳擬合線。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "P / kPa": "P / kPa",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Curve P = k/V": "曲線 P = k/V",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of pressure against volume for the readings in the table, with a curve through the points.": "表中讀數的壓強對體積圖表，附一條穿過數據點的曲線。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "V / cm³": "V / cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Record at least three readings over the whole range of the syringe.": "在注射器的整個範圍內至少記錄三個讀數。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gradient = {m} kPa cm³, y-intercept = {b} kPa": "斜率 = {m} kPa cm³，y 截距 = {b} kPa",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "PV ranges from {lo} to {hi} kPa cm³": "PV 由 {lo} 至 {hi} kPa cm³",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Air was sealed in the syringe at {V} cm³. Move the plunger, then record the sensor reading.": "已把 {V} cm³ 空氣封在注射器中。移動活塞，然後記錄感應器讀數。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Set-up": "裝置",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Fixed volume (pressure sensor)": "體積固定（壓強感應器）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Fixed pressure (gas syringe)": "壓強固定（氣體注射器）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Water-bath temperature": "水浴溫度",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Before each reading": "每次讀數前",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Stir and wait 3 minutes": "攪拌並等候 3 分鐘",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Read at once": "立即讀取",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Temperature axis": "溫度軸",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ in °C, extrapolated": "θ 以 °C 表示，外推",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "T in K": "T 以 K 表示",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Take reading": "讀取讀數",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "New run: fresh apparatus, sealed with air at room temperature and left in the bath until steady.": "新的實驗：新的儀器，密封了室溫的空氣，並放在水浴中直至穩定。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ / °C (±0.5)": "θ / °C (±0.5)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "T / K": "T / K",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Thermometer": "溫度計",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Last reading": "最後一個讀數",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Absolute zero estimate": "絕對零度估算值",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A 250 cm³ flask of air is sealed and joined to a pressure sensor. The volume is fixed. Change the bath temperature and take readings.": "一個 250 cm³ 的空氣燒瓶已密封，並連接到壓強感應器。體積固定。改變水浴溫度並讀取讀數。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A gas syringe holding {V} cm³ of air at room temperature is sealed and held under the water. The plunger moves, so the pressure stays at atmospheric pressure.": "一支裝有 {V} cm³ 室溫空氣的氣體注射器已密封，並浸在水中。活塞會移動，所以壓強保持在大氣壓強。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "A water bath with a thermometer. Fixed volume: a sealed flask in the bath joined by a tube to a pressure sensor. Fixed pressure: a sealed gas syringe under the water. The readings are in the readout.": "裝有溫度計的水浴。體積固定：水浴中的密封燒瓶以管連接到壓強感應器。壓強固定：水中的密封氣體注射器。讀數在讀數顯示區中。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "water bath": "水浴",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "air": "空氣",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "sealed gas syringe (cm³)": "密封的氣體注射器 (cm³)",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded θ = {th} °C, P = {y} kPa.": "已記錄 θ = {th} °C，P = {y} kPa。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Recorded θ = {th} °C, V = {y} cm³.": "已記錄 θ = {th} °C，V = {y} cm³。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Best-fit line, extrapolated": "最佳擬合線（外推）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "≈ {x} °C": "≈ {x} °C",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "meets the axis below −300 °C": "在 −300 °C 以下才與軸相交",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{v} {u} at 0 K": "0 K 時為 {v} {u}",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of the readings against temperature in kelvin, with the line of best fit.": "讀數對開爾文溫度的圖表，附最佳擬合線。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Graph of the readings against temperature in degrees Celsius. The line of best fit is extended back to where it meets the temperature axis.": "讀數對攝氏溫度的圖表。最佳擬合線向後延長至與溫度軸相交。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "θ / °C": "θ / °C",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "Take at least three readings, spread from 0 °C to 90 °C.": "至少讀取三個讀數，由 0 °C 至 90 °C 分佈。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "gradient in {u} °C⁻¹": "斜率（單位 {u} °C⁻¹）",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{x} °C. Spread your readings over a wider range to estimate its uncertainty.": "{x} °C。把讀數分佈在更廣的範圍，以估算它的不確定度。",

    // widget string (assets/js/widgets-lab-gas-laws.js)
    "{x} °C (worst-fit lines: {a} °C to {z} °C)": "{x} °C（最差擬合線：{a} °C 至 {z} °C）",

  }
});
