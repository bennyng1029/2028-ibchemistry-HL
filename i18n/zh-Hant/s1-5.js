/* s1-5 — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-5', {
  strings: {

    // page title (browser tab)
    "1.5 Ideal gases | Structure Lab": "1.5 理想氣體 | Structure Lab",

    // Ideal gases > page header > p
    "Structure 1.5": "Structure 1.5",

    // Ideal gases > page header > h1
    "Ideal gases": "理想氣體",

    // Ideal gases > page header > span
    "How does the model of ideal gas behaviour help us to predict the behaviour of real gases?": "理想氣體行為的模型，怎樣幫助我們預測真實氣體的行為？",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes. Everything in this topic is SL core. There is no Additional HL content in 1.5.": "不看筆記也做得到，就剔選該項。本課題全部屬於 SL 核心內容，1.5 沒有 HL 附加內容。",

    // What you need to be able to do > checklist > span
    "Recognize the key assumptions of the ideal gas model.": "認出理想氣體模型的主要假設。",

    // What you need to be able to do > checklist > span
    "Explain why real gases deviate from the model, especially at low temperature and high pressure.": "解釋真實氣體為何偏離這個模型，尤其是在低溫和高壓下。",

    // What you need to be able to do > checklist > span
    "Use the molar volume of an ideal gas at STP to convert between amount and gas volume.": "利用理想氣體在 STP 下的摩爾體積，換算物質的量和氣體體積。",

    // What you need to be able to do > checklist > span
    "Describe and sketch how pressure, volume and temperature are related for a fixed mass of gas, and analyse graphs of these variables.": "描述固定質量的氣體的壓強、體積和溫度有甚麼關係，繪畫有關的略圖，並分析這些變量的圖表。",

    // What you need to be able to do > checklist > span
    "Use the combined gas law when the conditions of a gas change.": "氣體的條件改變時，運用聯合氣體定律。",

    // What you need to be able to do > checklist > span
    "Solve problems with <i>PV</i> = <i>nRT</i>, using consistent units.": "用 <i>PV</i> = <i>nRT</i> 解題，並使用一致的單位。",

    // What you need to be able to do > checklist > span
    "Calculate the molar mass of a gas from experimental data.": "根據實驗數據計算氣體的摩爾質量。",

    // The ideal gas model > h2
    "The ideal gas model": "理想氣體模型",

    // The ideal gas model > p
    "Pump up a bicycle tyre and you can feel the gas pushing back. That push is <dfn data-def=\"The force per unit area on a surface. For a gas it comes from particles colliding with the walls of the container.\">pressure</dfn>. It comes from billions of tiny particles hitting the inside of the tyre.": "替單車輪胎打氣時，你會感到氣體在反推。這就是<dfn data-def=\"作用在表面上每單位面積的力。氣體的壓強來自粒子撞擊容器壁。\">壓強 <span class=\"en-term\">(pressure)</span></dfn>的作用。輪胎裏有數以十億計的微小粒子不斷撞擊內壁，壓強就是這樣來的。",

    // The ideal gas model > data-def attribute
    "The force per unit area on a surface. For a gas it comes from particles colliding with the walls of the container.": "作用在表面上每單位面積的力。氣體的壓強來自粒子撞擊容器壁。",

    // The ideal gas model > p
    "Real gas particles are complicated. So chemists use a simplified picture called an <dfn data-def=\"A model gas made of moving particles with negligible volume and no intermolecular forces, in which all collisions are elastic.\">ideal gas</dfn>. It is a model: it leaves out details to make the mathematics manageable.": "真實氣體的粒子很複雜。所以化學家用一個簡化的圖像，稱為<dfn data-def=\"一種模型氣體：由運動中的粒子組成，粒子的體積可忽略，沒有分子間引力，所有碰撞都是彈性碰撞。\">理想氣體 <span class=\"en-term\">(ideal gas)</span></dfn>。它是一個模型：略去一些細節，令數學運算容易處理。",

    // The ideal gas model > data-def attribute
    "A model gas made of moving particles with negligible volume and no intermolecular forces, in which all collisions are elastic.": "一種模型氣體：由運動中的粒子組成，粒子的體積可忽略，沒有分子間引力，所有碰撞都是彈性碰撞。",

    // The ideal gas model > p
    "The model makes four assumptions. Learn these four.": "這個模型有四個假設。這四個都要記住。",

    // The ideal gas model > li
    "The gas consists of <strong>moving particles</strong>.": "氣體由<strong>運動中的粒子</strong>組成 <span class=\"en-term\">(moving particles)</span>。",

    // The ideal gas model > li
    "The particles have <strong>negligible volume</strong>. The particles themselves take up almost none of the space in the container.": "粒子的<strong>體積可忽略</strong> <span class=\"en-term\">(negligible volume)</span>。粒子本身幾乎不佔容器內的空間。",

    // The ideal gas model > li
    "There are <strong>no intermolecular forces</strong>. The particles do not attract or repel each other.": "<strong>沒有分子間引力</strong> <span class=\"en-term\">(no intermolecular forces)</span>。粒子之間既不相吸，也不相斥。",

    // The ideal gas model > li
    "All collisions between particles are <strong>elastic</strong>.": "粒子之間的所有碰撞都是<strong>彈性</strong>碰撞 <span class=\"en-term\">(elastic collisions)</span>。",

    // The ideal gas model > p
    "An <dfn data-def=\"A collision in which the total kinetic energy of the particles is the same before and after.\">elastic collision</dfn> is one where no kinetic energy is lost overall. The particles bounce apart with the same total kinetic energy they had before.": "<dfn data-def=\"粒子的總動能在碰撞前後保持不變的碰撞。\">彈性碰撞 <span class=\"en-term\">(elastic collision)</span></dfn>是指整體沒有損失動能的碰撞。粒子彈開後，總動能和碰撞前一樣。",

    // The ideal gas model > data-def attribute
    "A collision in which the total kinetic energy of the particles is the same before and after.": "粒子的總動能在碰撞前後保持不變的碰撞。",

    // The ideal gas model > p
    "<dfn data-def=\"Small enough to be ignored without changing the answer in any way that matters.\">Negligible</dfn> means small enough to ignore. A gas at room conditions is almost entirely empty space, so ignoring the size of the particles is usually a very good approximation.": "<dfn data-def=\"小得可以不理，而且不會對答案造成任何重要的影響。\">可忽略 <span class=\"en-term\">(negligible)</span></dfn>的意思是小得可以不理。在一般室內條件下，氣體幾乎全是空的空間，所以不理會粒子的大小，通常是很好的近似。",

    // The ideal gas model > data-def attribute
    "Small enough to be ignored without changing the answer in any way that matters.": "小得可以不理，而且不會對答案造成任何重要的影響。",

    // The ideal gas model > key idea > p
    "An ideal gas does not exist. It is a model that real gases follow closely under everyday conditions. That is why one equation works for hydrogen, oxygen and carbon dioxide alike.": "理想氣體並不存在。它是一個模型，真實氣體在日常條件下的行為和它十分接近。所以同一條方程對氫、氧和二氧化碳都適用。",

    // The ideal gas model > exam tip (shown in English + translation) > p
    "If you are asked to state assumptions, use the exact phrases: <em>negligible volume</em> (of the particles), <em>no intermolecular forces</em>, <em>elastic collisions</em>. Writing “the gas has no volume” loses the mark. The gas fills its container. It is the particles whose volume is negligible.": "如果題目要你寫出 (state) 假設，請用準確的字眼：（粒子的）<em>體積可忽略</em>、<em>沒有分子間引力</em>、<em>彈性碰撞</em>。寫「氣體沒有體積」會失分。氣體會充滿整個容器，可忽略的是粒子的體積。",

    // The ideal gas model > not needed for IB > p
    "Textbooks often list more assumptions and go on to derive gas pressure from particle speeds. The four statements above are what the IB guide lists. You do not need the kinetic energy equation (<span class=\"mono\">E = 3/2 RT</span>), root-mean-square speeds or any derivation.": "課本常常列出更多假設，還會由粒子的速率推導氣體壓強。以上四項就是 IB 指南列出的假設。你不需要學動能方程 (<span class=\"mono\">E = 3/2 RT</span>)、方均根速率或任何推導。",

    // The ideal gas model > data-title attribute
    "Ideal gas model: quick check": "理想氣體模型：快速小測",

    // Real gases and the limits of the model > data-toc attribute
    "Real gases": "真實氣體",

    // Real gases and the limits of the model > h2
    "Real gases and the limits of the model": "真實氣體和模型的局限",

    // Real gases and the limits of the model > p
    "Cool steam and it turns into liquid water. An ideal gas could never do that, because its particles do not attract each other. So real gases cannot be exactly ideal.": "把水蒸氣冷卻，它會變成液態水。理想氣體永遠做不到這件事，因為它的粒子不會互相吸引。所以真實氣體不可能完全理想。",

    // Real gases and the limits of the model > p
    "A <dfn data-def=\"An actual gas. Its particles have a volume of their own and attract each other, so it does not follow the ideal gas model exactly.\">real gas</dfn> breaks two of the assumptions. Its particles do have some volume, and they do attract each other. Under most conditions both effects are tiny. Under two conditions they are not.": "<dfn data-def=\"實際存在的氣體。粒子本身有體積，而且互相吸引，所以不會完全符合理想氣體模型。\">真實氣體 <span class=\"en-term\">(real gas)</span></dfn>不符合其中兩個假設：粒子確實有一定的體積，粒子之間也確實互相吸引。在大多數條件下，這兩種影響都非常小。但在兩種條件下，影響就不小了。",

    // Real gases and the limits of the model > data-def attribute
    "An actual gas. Its particles have a volume of their own and attract each other, so it does not follow the ideal gas model exactly.": "實際存在的氣體。粒子本身有體積，而且互相吸引，所以不會完全符合理想氣體模型。",

    // Real gases and the limits of the model > h3
    "High pressure: particle volume matters": "高壓：粒子的體積變得重要",

    // Real gases and the limits of the model > p
    "At high pressure the gas is squeezed into a small space. The particles are close together. Their own volume is now a noticeable share of the container, so it is no longer negligible. Because the particles are close, the forces between them are also more significant.": "在高壓下，氣體被擠進很小的空間，粒子靠得很近。這時粒子本身的體積佔了容器相當大的一部分，不再可以忽略。粒子靠得近，粒子之間的作用力也變得更顯著。",

    // Real gases and the limits of the model > h3
    "Low temperature: intermolecular forces matter": "低溫：分子間引力變得重要",

    // Real gases and the limits of the model > p
    "At low temperature the particles have less kinetic energy and move more slowly. Slow particles are affected more by the attractions between them, so the intermolecular forces are no longer negligible. Cool a real gas far enough and those forces pull the particles together into a liquid.": "在低溫下，粒子的動能較少，運動較慢。運動慢的粒子較容易受彼此之間的吸引影響，所以分子間引力不再可以忽略。把真實氣體冷卻到足夠低的溫度，這些引力會把粒子拉在一起，變成液體。",

    // Real gases and the limits of the model > key idea > p
    "Real gases deviate most from ideal behaviour at <strong>low temperature and high pressure</strong>. They behave most like an ideal gas at <strong>high temperature and low pressure</strong>.": "真實氣體在<strong>低溫和高壓</strong>下最偏離理想行為，在<strong>高溫和低壓</strong>下最接近理想氣體。",

    // Real gases and the limits of the model > widget > data-title attribute
    "Real versus ideal: when does the model break down?": "真實與理想：模型何時失效？",

    // Real gases and the limits of the model > widget > data-kicker attribute
    "Qualitative model": "定性模型",

    // Real gases and the limits of the model > widget > figcaption
    "Move the temperature and pressure sliders and watch the three bars. Dashed lines mark attractions between slow, close particles. This is an illustration to build your intuition. Nothing here is calculated from an equation, and the particles are drawn far too large.": "移動溫度和壓強滑桿，觀察三條橫條。虛線代表運動慢而又靠得近的粒子之間的吸引。這只是幫你建立直覺的示意圖：當中沒有任何數值是由方程算出來的，粒子也畫得遠比實際大。",

    // Real gases and the limits of the model > h3
    "Which gases are closest to ideal?": "哪些氣體最接近理想？",

    // Real gases and the limits of the model > p
    "Gases with <strong>weak intermolecular forces</strong> and <strong>small particles</strong> match the model best. Helium and hydrogen are very close to ideal under ordinary conditions. Gases with stronger attractions between their molecules, such as ammonia, deviate more under the same conditions.": "<strong>分子間引力弱</strong>、<strong>粒子小</strong>的氣體最符合模型。在一般條件下，氦和氫非常接近理想氣體。分子之間吸引較強的氣體（例如氨），在相同條件下偏離得較多。",

    // Real gases and the limits of the model > p
    "You will study the types of intermolecular force in Structure 2.2. For now, one clue is enough: a gas with a higher boiling point has stronger forces between its particles.": "你會在 Structure 2.2 學到分子間引力的種類。現在只要記住一個線索：沸點較高的氣體，粒子之間的引力較強。",

    // Real gases and the limits of the model > exam tip (shown in English + translation) > p
    "For “explain why a real gas deviates” questions, give a condition and a reason for each mark. <em>High pressure: particles are close together, so the volume of the particles is not negligible.</em> <em>Low temperature: particles move more slowly, so intermolecular forces become significant.</em>": "遇到「解釋 (explain) 真實氣體為何偏離」這類題目，每一分都要寫出一個條件和一個原因。<em>高壓：粒子靠得很近，所以粒子的體積不可忽略。</em> <em>低溫：粒子運動較慢，所以分子間引力變得顯著。</em>",

    // Real gases and the limits of the model > common mistake > p
    "Do not swap the conditions. “High temperature and low pressure” describes where a gas is <em>most</em> ideal. A quick check: think of where a gas turns into a liquid (cold and squeezed). That is where it is least ideal.": "不要把條件調轉。「高溫和低壓」是氣體<em>最</em>接近理想的條件。快速檢查的方法：想想氣體在甚麼情況下會變成液體（又冷又受擠壓）。那就是它最不理想的情況。",

    // Real gases and the limits of the model > not needed for IB > p
    "No mathematics is required for real gases. You do not need the van der Waals equation, the compressibility factor <i>Z</i>, or any calculation of how far a gas deviates. A reasoned explanation in words is all the IB asks for.": "真實氣體不需要任何數學運算。你不需要學范德華方程、壓縮因子 <i>Z</i>，也不用計算氣體偏離了多少。IB 只要求你用文字作合理的解釋。",

    // Real gases and the limits of the model > data-title attribute
    "Real gases: quick check": "真實氣體：快速小測",

    // Molar volume of an ideal gas > data-toc attribute
    "Molar volume at STP": "STP 下的摩爾體積",

    // Molar volume of an ideal gas > h2
    "Molar volume of an ideal gas": "理想氣體的摩爾體積",

    // Molar volume of an ideal gas > p
    "Picture a box a little under 30 cm along each side, about the space taken up by four footballs. At 0 °C and 100 kPa, that box holds one mole of gas. It does not matter which gas.": "想像一個每邊略短於 30 cm 的箱子，大約是四個足球所佔的空間。在 0 °C 和 100 kPa 下，這個箱子剛好裝着一摩爾氣體。無論是哪一種氣體都一樣。",

    // Molar volume of an ideal gas > p
    "This follows from Avogadro’s law, which you met in Structure 1.4: equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. Turn it around: equal numbers of molecules occupy equal volumes.": "這來自你在 Structure 1.4 學過的亞佛加德羅定律：在相同的溫度和壓強下，相同體積的氣體含有相同數目的分子。反過來說：相同數目的分子佔相同的體積。",

    // Molar volume of an ideal gas > p
    "The <dfn data-def=\"The volume occupied by one mole of an ideal gas. It is a constant at a specific temperature and pressure.\">molar volume</dfn>, <i>V</i><sub>m</sub>, is the volume of one mole of an ideal gas. It is a constant at a specific temperature and pressure.": "<dfn data-def=\"一摩爾理想氣體所佔的體積。在指定的溫度和壓強下，它是一個常數。\">摩爾體積 <span class=\"en-term\">(molar volume)</span></dfn> <i>V</i><sub>m</sub> 是一摩爾理想氣體的體積。在指定的溫度和壓強下，它是一個常數。",

    // Molar volume of an ideal gas > data-def attribute
    "The volume occupied by one mole of an ideal gas. It is a constant at a specific temperature and pressure.": "一摩爾理想氣體所佔的體積。在指定的溫度和壓強下，它是一個常數。",

    // Molar volume of an ideal gas > p
    "<dfn data-def=\"Standard temperature and pressure: 273.15 K (0 °C) and 100 kPa.\">STP</dfn> stands for standard temperature and pressure: <span class=\"mono\">273.15 K</span> (0 °C) and <span class=\"mono\">100 kPa</span>. At STP the molar volume of an ideal gas is <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<dfn data-def=\"標準溫度與壓力：273.15 K (0 °C) 和 100 kPa。\">標準溫度與壓力 <span class=\"en-term\">(STP)</span></dfn>（standard temperature and pressure）是指 <span class=\"mono\">273.15 K</span> (0 °C) 和 <span class=\"mono\">100 kPa</span>。在 STP 下，理想氣體的摩爾體積是 <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>。",

    // Molar volume of an ideal gas > data-def attribute
    "Standard temperature and pressure: 273.15 K (0 °C) and 100 kPa.": "標準溫度與壓力：273.15 K (0 °C) 和 100 kPa。",

    // Molar volume of an ideal gas > equation > dd
    // The ideal gas equation > equation > dd
    "amount of gas <span class=\"unit\">mol</span>": "氣體的物質的量 <span class=\"unit\">mol</span>",

    // Molar volume of an ideal gas > equation > dd
    "volume of the gas <span class=\"unit\">dm3</span>": "氣體的體積 <span class=\"unit\">dm3</span>",

    // Molar volume of an ideal gas > equation > dt
    "V<sub>m</sub>": "V<sub>m</sub>",

    // Molar volume of an ideal gas > equation > dd
    "molar volume, 22.7 at STP <span class=\"unit\">dm3 mol-1</span>": "摩爾體積，在 STP 下是 22.7 <span class=\"unit\">dm3 mol-1</span>",

    // Molar volume of an ideal gas > data booklet note > p
    "The data booklet gives the molar volume of an ideal gas at STP as <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span> (also written <span class=\"mono\">2.27 × 10<sup>−2</sup> m<sup>3</sup> mol<sup>−1</sup></span>), with STP defined as 273.15 K and 100 kPa. The relationship <i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> is not printed, so learn it.": "數據手冊列出理想氣體在 STP 下的摩爾體積是 <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>（也寫作 <span class=\"mono\">2.27 × 10<sup>−2</sup> m<sup>3</sup> mol<sup>−1</sup></span>），並把 STP 定為 273.15 K 和 100 kPa。關係式 <i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> 沒有印在手冊上，所以要記住。",

    // Molar volume of an ideal gas > widget > data-title attribute
    "How big is a mole of gas at STP?": "STP 下一摩爾氣體有多大？",

    // Molar volume of an ideal gas > widget > data-kicker attribute
    "To scale": "按比例",

    // Molar volume of an ideal gas > widget > figcaption
    "Move either slider. The shaded cube shows the gas at STP, drawn to the same scale as a football and a 1 dm<sup>3</sup> cube. The amount and the volume always stay in the ratio 22.7 dm<sup>3</sup> for each mole.": "移動任何一個滑桿。有陰影的立方體代表 STP 下的氣體，和足球及 1 dm<sup>3</sup> 的立方體按同一比例繪畫。物質的量和體積的比例永遠不變：每摩爾 22.7 dm<sup>3</sup>。",

    // Molar volume of an ideal gas > common mistake > p
    "Older books and many websites use <span class=\"mono\">22.4 dm<sup>3</sup> mol<sup>−1</sup></span>. That value is for 0 °C and a pressure of 101.325 kPa (1 atmosphere), which was the older standard pressure. The IB data booklet defines STP as 0 °C and 100 kPa. The pressure is slightly lower, so the gas takes up slightly more space: <span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>. Using 22.4 in an IB exam gives a wrong answer.": "舊課本和很多網站使用 <span class=\"mono\">22.4 dm<sup>3</sup> mol<sup>−1</sup></span>。這個數值適用於 0 °C 和 101.325 kPa（1 個大氣壓），那是舊的標準壓強。IB 數據手冊把 STP 定為 0 °C 和 100 kPa。壓強稍低，氣體佔的空間就稍大：<span class=\"mono\">22.7 dm<sup>3</sup> mol<sup>−1</sup></span>。在 IB 考試用 22.4 會得出錯誤的答案。香港課本常用的 24 dm³ mol⁻¹（常溫常壓）同樣不要用。",

    // Molar volume of an ideal gas > h3
    // The combined gas law > h3
    // The ideal gas equation > h3
    // Molar mass of a gas from experimental data > h3
    "Method in words": "文字說明方法",

    // Molar volume of an ideal gas > li
    "Check the conditions are STP. If they are not, use <i>PV</i> = <i>nRT</i> instead (later on this page).": "先確定條件是 STP。如果不是，改用 <i>PV</i> = <i>nRT</i>（見本頁較後部分）。",

    // Molar volume of an ideal gas > li
    "Put the volume in dm<sup>3</sup>. To convert from cm<sup>3</sup>, divide by 1000.": "把體積換成 dm<sup>3</sup>。由 cm<sup>3</sup> 換算時，除以 1000。",

    // Molar volume of an ideal gas > li
    "To find amount: <i>n</i> = <i>V</i> ÷ 22.7. To find volume: <i>V</i> = <i>n</i> × 22.7.": "求物質的量：<i>n</i> = <i>V</i> ÷ 22.7。求體積：<i>V</i> = <i>n</i> × 22.7。",

    // Molar volume of an ideal gas > worked example > h3
    "Amount from a gas volume at STP": "由 STP 下的氣體體積求物質的量",

    // Molar volume of an ideal gas > worked example > p
    "A sample of nitrogen gas occupies 568 cm<sup>3</sup> at STP. Calculate the amount of nitrogen, in mol.": "一個氮氣樣本在 STP 下佔 568 cm<sup>3</sup>。計算 (calculate) 氮氣的物質的量，以 mol 表示。",

    // Molar volume of an ideal gas > worked example > data-title attribute
    "Convert the volume to dm³": "把體積換算成 dm³",

    // Molar volume of an ideal gas > worked example > p
    "The molar volume is in dm<sup>3</sup> mol<sup>−1</sup>, so the volume must be in dm<sup>3</sup> too. There are 1000 cm<sup>3</sup> in 1 dm<sup>3</sup>.": "摩爾體積的單位是 dm<sup>3</sup> mol<sup>−1</sup>，所以體積也要用 dm<sup>3</sup>。1 dm<sup>3</sup> 有 1000 cm<sup>3</sup>。",

    // Molar volume of an ideal gas > worked example > data-title attribute
    "Write the relationship": "寫出關係式",

    // Molar volume of an ideal gas > worked example > p
    "The gas is at STP, so one mole occupies 22.7 dm<sup>3</sup>.": "氣體處於 STP，所以一摩爾佔 22.7 dm<sup>3</sup>。",

    // Molar volume of an ideal gas > worked example > data-title attribute
    // The combined gas law > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    // widget string (assets/js/widgets-s1-5.js)
    "Substitute with units": "連同單位代入",

    // Molar volume of an ideal gas > worked example > p
    "dm<sup>3</sup> divided by dm<sup>3</sup> mol<sup>−1</sup> leaves mol. The units confirm the method.": "dm<sup>3</sup> 除以 dm<sup>3</sup> mol<sup>−1</sup>，剩下 mol。單位證實方法正確。",

    // Molar volume of an ideal gas > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Round to the data": "按數據取有效數字",

    // Molar volume of an ideal gas > worked example > p
    "568 cm<sup>3</sup> and 22.7 both have 3 significant figures.": "568 cm<sup>3</sup> 和 22.7 都有 3 位有效數字。",

    // Molar volume of an ideal gas > worked example > p
    "0.0250 mol of N<sub>2</sub>": "0.0250 mol N<sub>2</sub>",

    // Molar volume of an ideal gas > try it > p
    "Calculate the volume, in dm<sup>3</sup>, occupied by 0.0420 mol of carbon dioxide at STP.": "計算 0.0420 mol 二氧化碳在 STP 下所佔的體積，以 dm<sup>3</sup> 表示。",

    // Molar volume of an ideal gas > try it > li
    "At STP, every mole of an ideal gas occupies the same volume. Which data booklet value is that?": "在 STP 下，每摩爾理想氣體所佔的體積都相同。這是數據手冊上的哪一個數值？",

    // Molar volume of an ideal gas > try it > li
    "<i>V</i> = <i>n</i> × <i>V</i><sub>m</sub> = <span class=\"mono\">0.0420 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<i>V</i> = <i>n</i> × <i>V</i><sub>m</sub> = <span class=\"mono\">0.0420 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>。",

    // Molar volume of an ideal gas > try it > p
    "To 3 significant figures: <strong>0.953 dm<sup>3</sup></strong>.": "取至 3 位有效數字：<strong>0.953 dm<sup>3</sup></strong>。",

    // Molar volume of an ideal gas > try it > p
    "A balloon contains 1250 cm<sup>3</sup> of helium at STP. Calculate the amount of helium, in mol.": "一個氣球裝有 1250 cm<sup>3</sup> 氦氣，處於 STP。計算氦氣的物質的量，以 mol 表示。",

    // Molar volume of an ideal gas > try it > li
    "Convert the volume first: 1250 cm<sup>3</sup> is how many dm<sup>3</sup>?": "先換算體積：1250 cm<sup>3</sup> 是多少 dm<sup>3</sup>？",

    // Molar volume of an ideal gas > try it > li
    "<i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> = <span class=\"mono\">1.25 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>.": "<i>n</i> = <i>V</i> ÷ <i>V</i><sub>m</sub> = <span class=\"mono\">1.25 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>。",

    // Molar volume of an ideal gas > try it > p
    "To 3 significant figures: <strong>0.0551 mol</strong>.": "取至 3 位有效數字：<strong>0.0551 mol</strong>。",

    // Molar volume of an ideal gas > exam tip (shown in English + translation) > p
    "22.7 dm<sup>3</sup> mol<sup>−1</sup> works only at STP. If a question gives any other temperature or pressure, such as 25 °C, the molar volume is different and you need <i>PV</i> = <i>nRT</i>.": "22.7 dm<sup>3</sup> mol<sup>−1</sup> 只適用於 STP。如果題目給的是其他溫度或壓強，例如 25 °C，摩爾體積就不同，你要用 <i>PV</i> = <i>nRT</i>。",

    // Molar volume of an ideal gas > exam tip (shown in English + translation) > p
    "The data booklet also lists SATP (standard ambient temperature and pressure): 298.15 K (25 °C) and 100 kPa. It gives no molar volume for SATP, so 22.7 does not apply there. Use <i>PV</i> = <i>nRT</i>.": "數據手冊也列出 SATP（標準環境溫度與壓力）：298.15 K (25 °C) 和 100 kPa。手冊沒有給 SATP 的摩爾體積，所以 22.7 在那裏不適用。請用 <i>PV</i> = <i>nRT</i>。",

    // Molar volume of an ideal gas > data-title attribute
    "Molar volume: quick check": "摩爾體積：快速小測",

    // How pressure, volume and temperature are related > data-toc attribute
    "P, V and T graphs": "P、V、T 圖表",

    // How pressure, volume and temperature are related > h2
    "How pressure, volume and temperature are related": "壓強、體積和溫度有甚麼關係",

    // How pressure, volume and temperature are related > p
    "Push the plunger of a sealed syringe and it pushes back harder. Leave a football outside on a cold night and it goes soft. These are the relationships in this section.": "把密封針筒的活塞推進去，它會更用力地反推。寒冷的晚上把足球留在室外，它會變軟。這一節講的就是這些關係。",

    // How pressure, volume and temperature are related > p
    "A gas sample is described by four variables: pressure <i>P</i>, volume <i>V</i>, temperature <i>T</i> and amount <i>n</i>. To see how two of them are related, you hold the others constant. A <dfn data-def=\"A sample in which the amount of gas, n, does not change. No gas enters or leaves.\">fixed mass</dfn> of gas means <i>n</i> is constant.": "一個氣體樣本可以用四個變量來描述：壓強 <i>P</i>、體積 <i>V</i>、溫度 <i>T</i> 和物質的量 <i>n</i>。要知道其中兩個有甚麼關係，就要保持其餘的不變。<dfn data-def=\"氣體的物質的量 n 不變的樣本。沒有氣體進入或離開。\">固定質量 <span class=\"en-term\">(fixed mass)</span></dfn>的氣體，意思是 <i>n</i> 不變。",

    // How pressure, volume and temperature are related > data-def attribute
    "A sample in which the amount of gas, n, does not change. No gas enters or leaves.": "氣體的物質的量 n 不變的樣本。沒有氣體進入或離開。",

    // How pressure, volume and temperature are related > widget > data-title attribute
    "Ideal gas sandbox": "理想氣體實驗場",

    // How pressure, volume and temperature are related > widget > data-kicker attribute
    "Model": "模型",

    // How pressure, volume and temperature are related > widget > figcaption
    "Choose an experiment, then drag the highlighted variable or press “Run the experiment”. The pressure is calculated from <i>PV</i> = <i>nRT</i>. In the picture, the particle speed scales with √<i>T</i>, the number of particles with <i>n</i>, and the length of the cylinder with <i>V</i>. The particles are drawn much larger than to scale, and there are far fewer of them than in a real sample.": "選一個實驗，然後拖曳突出顯示的變量，或按「開始實驗」。壓強由 <i>PV</i> = <i>nRT</i> 算出。圖中粒子的速率隨 √<i>T</i> 增減，粒子數目隨 <i>n</i> 增減，氣缸長度隨 <i>V</i> 增減。粒子畫得遠比實際比例大，數目也遠比真實樣本少。",

    // How pressure, volume and temperature are related > h3
    "Pressure and volume (temperature constant)": "壓強和體積（溫度不變）",

    // How pressure, volume and temperature are related > p
    "Squeeze a gas into half the volume and the particles hit the walls twice as often. The pressure doubles.": "把氣體壓縮到一半體積，粒子撞擊容器壁的次數就多一倍。壓強變成兩倍。",

    // How pressure, volume and temperature are related > p
    "Pressure is <dfn data-def=\"Two quantities are inversely proportional if one doubles when the other halves. Their product is constant.\">inversely proportional</dfn> to volume: <span class=\"mono\"><i>P</i> ∝ 1/<i>V</i></span>, so <span class=\"mono\"><i>PV</i> = constant</span>. A graph of <i>P</i> against <i>V</i> is a curve. A graph of <i>P</i> against 1/<i>V</i> is a straight line through the origin.": "壓強與體積<dfn data-def=\"一個量加倍時另一個量減半，這兩個量就成反比。兩者的乘積不變。\">成反比 <span class=\"en-term\">(inversely proportional)</span></dfn>：<span class=\"mono\"><i>P</i> ∝ 1/<i>V</i></span>，所以 <span class=\"mono\"><i>PV</i> = 常數</span>。<i>P</i> 對 <i>V</i> 的圖是一條曲線。<i>P</i> 對 1/<i>V</i> 的圖是一條通過原點的直線。",

    // How pressure, volume and temperature are related > data-def attribute
    "Two quantities are inversely proportional if one doubles when the other halves. Their product is constant.": "一個量加倍時另一個量減半，這兩個量就成反比。兩者的乘積不變。",

    // How pressure, volume and temperature are related > h3
    "Volume and temperature (pressure constant)": "體積和溫度（壓強不變）",

    // How pressure, volume and temperature are related > p
    "Heat a gas in a container with a freely moving piston. The particles move faster and push the piston out until the pressure inside matches the pressure outside again. The volume increases.": "把氣體放在活塞可以自由移動的容器內加熱。粒子運動加快，把活塞向外推，直到容器內的壓強再次與外面的壓強相等。體積增加。",

    // How pressure, volume and temperature are related > p
    "Volume is <dfn data-def=\"Two quantities are directly proportional if doubling one doubles the other. Their graph is a straight line through the origin.\">directly proportional</dfn> to the temperature in kelvin: <span class=\"mono\"><i>V</i> ∝ <i>T</i></span>, so <span class=\"mono\"><i>V</i>/<i>T</i> = constant</span>. A graph of <i>V</i> against <i>T</i> in kelvin is a straight line through the origin.": "體積與開爾文溫度<dfn data-def=\"一個量加倍時另一個量也加倍，這兩個量就成正比。它們的圖是一條通過原點的直線。\">成正比 <span class=\"en-term\">(directly proportional)</span></dfn>：<span class=\"mono\"><i>V</i> ∝ <i>T</i></span>，所以 <span class=\"mono\"><i>V</i>/<i>T</i> = 常數</span>。<i>V</i> 對 <i>T</i>（以開爾文為單位）的圖是一條通過原點的直線。",

    // How pressure, volume and temperature are related > data-def attribute
    "Two quantities are directly proportional if doubling one doubles the other. Their graph is a straight line through the origin.": "一個量加倍時另一個量也加倍，這兩個量就成正比。它們的圖是一條通過原點的直線。",

    // How pressure, volume and temperature are related > p
    "Plot the same data against temperature in °C and you still get a straight line, but it does not pass through the origin. Extend the line backwards (extrapolate) and it reaches zero volume at <span class=\"mono\">−273.15 °C</span>. That temperature is <dfn data-def=\"0 K or −273.15 °C: the lowest possible temperature, at which an ideal gas would have zero volume.\">absolute zero</dfn>, 0 K.": "用同一組數據對攝氏溫度 (°C) 作圖，仍然得到一條直線，但它不通過原點。把直線向後延長（外推，extrapolate），它會在 <span class=\"mono\">−273.15 °C</span> 到達零體積。這個溫度就是<dfn data-def=\"0 K 或 −273.15 °C：可能達到的最低溫度，理想氣體在這個溫度的體積會是零。\">絕對零度 <span class=\"en-term\">(absolute zero)</span></dfn>，即 0 K。",

    // How pressure, volume and temperature are related > data-def attribute
    "0 K or −273.15 °C: the lowest possible temperature, at which an ideal gas would have zero volume.": "0 K 或 −273.15 °C：可能達到的最低溫度，理想氣體在這個溫度的體積會是零。",

    // How pressure, volume and temperature are related > h3
    "Pressure and temperature (volume constant)": "壓強和溫度（體積不變）",

    // How pressure, volume and temperature are related > p
    "Heat a gas in a rigid container. The particles move faster, so they hit the walls harder and more often. The pressure increases.": "把氣體放在堅硬的容器內加熱。粒子運動加快，撞擊容器壁更用力，也更頻密。壓強增加。",

    // How pressure, volume and temperature are related > p
    "Pressure is directly proportional to the temperature in kelvin: <span class=\"mono\"><i>P</i> ∝ <i>T</i></span>, so <span class=\"mono\"><i>P</i>/<i>T</i> = constant</span>. A graph of <i>P</i> against <i>T</i> in kelvin is a straight line through the origin.": "壓強與開爾文溫度成正比：<span class=\"mono\"><i>P</i> ∝ <i>T</i></span>，所以 <span class=\"mono\"><i>P</i>/<i>T</i> = 常數</span>。<i>P</i> 對 <i>T</i>（以開爾文為單位）的圖是一條通過原點的直線。",

    // How pressure, volume and temperature are related > table > caption
    "Three relationships for a fixed mass of an ideal gas": "固定質量理想氣體的三種關係",

    // How pressure, volume and temperature are related > table > th
    "Held constant": "保持不變的量",

    // How pressure, volume and temperature are related > table > th
    "Relationship": "關係",

    // How pressure, volume and temperature are related > table > th
    "What stays the same": "不變的數值",

    // How pressure, volume and temperature are related > table > th
    "Graph": "圖表",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> ∝ 1/<i>V</i> (inverse)": "<i>P</i> ∝ 1/<i>V</i>（反比）",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> against <i>V</i>: curve. <i>P</i> against 1/<i>V</i>: line through origin.": "<i>P</i> 對 <i>V</i>：曲線。<i>P</i> 對 1/<i>V</i>：通過原點的直線。",

    // How pressure, volume and temperature are related > table > td
    "<i>V</i> ∝ <i>T</i> (direct, <i>T</i> in K)": "<i>V</i> ∝ <i>T</i>（正比，<i>T</i> 以 K 為單位）",

    // How pressure, volume and temperature are related > table > td
    "<i>V</i> against <i>T</i>/K: line through origin.": "<i>V</i> 對 <i>T</i>/K：通過原點的直線。",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> ∝ <i>T</i> (direct, <i>T</i> in K)": "<i>P</i> ∝ <i>T</i>（正比，<i>T</i> 以 K 為單位）",

    // How pressure, volume and temperature are related > table > td
    "<i>P</i> against <i>T</i>/K: line through origin.": "<i>P</i> 對 <i>T</i>/K：通過原點的直線。",

    // How pressure, volume and temperature are related > common mistake > p
    "The direct proportions work only in kelvin. Heating a gas from 20 °C to 40 °C does not double its volume or pressure. In kelvin that is 293 K to 313 K, an increase of about 7 %.": "正比關係只在使用開爾文時才成立。把氣體由 20 °C 加熱到 40 °C，體積或壓強不會加倍。換成開爾文是由 293 K 到 313 K，只增加約 7%。",

    // How pressure, volume and temperature are related > widget > data-title attribute
    "Gas-law graphs: the shapes to know": "氣體定律圖表：要認得的形狀",

    // How pressure, volume and temperature are related > widget > figcaption
    "Study the six sketches, then press “Test yourself” and match each relationship to its shape. Notice that <i>PV</i> against <i>P</i> is flat: at constant temperature the product <i>PV</i> does not change.": "先細看六幅略圖，然後按「自我測試」，把每種關係配對到它的形狀。留意 <i>PV</i> 對 <i>P</i> 的圖是水平的：溫度不變時，乘積 <i>PV</i> 不會改變。",

    // How pressure, volume and temperature are related > exam tip (shown in English + translation) > p
    "When you sketch a graph, label both axes with the quantity and its unit, and make it clear whether a straight line passes through the origin. For <i>V</i> against <i>T</i> in °C, show the line meeting the temperature axis at −273 °C, usually as a dashed extrapolation.": "繪畫略圖 (sketch) 時，兩條軸都要標示物理量和單位，並清楚顯示直線是否通過原點。畫 <i>V</i> 對 <i>T</i>（以 °C 為單位）的圖時，要畫出直線在 −273 °C 與溫度軸相交，通常用虛線表示外推的部分。",

    // How pressure, volume and temperature are related > not needed for IB > p
    "These relationships have historical names (Boyle’s law, Charles’s law, Gay-Lussac’s law). The IB will not assess the names. You need the relationships and their graphs, not who discovered them.": "這些關係各有歷史上的名稱（波義耳定律、查理定律、蓋呂薩克定律）。IB 不會考這些名稱。你要掌握的是這些關係和它們的圖表，而不是誰發現的。",

    // How pressure, volume and temperature are related > data-title attribute
    "Relationships and graphs: quick check": "關係和圖表：快速小測",

    // The combined gas law > h2
    "The combined gas law": "聯合氣體定律",

    // The combined gas law > p
    "A weather balloon rises. The air outside gets colder and the pressure drops, both at once. To find the new volume you need one equation that handles pressure, volume and temperature together.": "氣象氣球向上升。外面的空氣越來越冷，壓強也同時下降。要求出新的體積，你需要一條能同時處理壓強、體積和溫度的方程。",

    // The combined gas law > p
    "Putting the three relationships together gives the <dfn data-def=\"P1V1/T1 = P2V2/T2 for a fixed amount of gas whose conditions change from state 1 to state 2.\">combined gas law</dfn>. It links two sets of conditions for the same sample of gas: state 1 (before) and state 2 (after).": "把三種關係合起來，就得到<dfn data-def=\"P1V1/T1 = P2V2/T2，適用於條件由狀態 1 變為狀態 2 而物質的量固定的氣體。\">聯合氣體定律 <span class=\"en-term\">(combined gas law)</span></dfn>。它把同一個氣體樣本的兩組條件連繫起來：狀態 1（變化前）和狀態 2（變化後）。",

    // The combined gas law > data-def attribute
    "P1V1/T1 = P2V2/T2 for a fixed amount of gas whose conditions change from state 1 to state 2.": "P1V1/T1 = P2V2/T2，適用於條件由狀態 1 變為狀態 2 而物質的量固定的氣體。",

    // The combined gas law > equation > dd
    "pressure, same unit on both sides <span class=\"unit\">kPa</span>": "壓強，兩邊用相同的單位 <span class=\"unit\">kPa</span>",

    // The combined gas law > equation > dd
    "volume, same unit on both sides <span class=\"unit\">dm3</span>": "體積，兩邊用相同的單位 <span class=\"unit\">dm3</span>",

    // The combined gas law > equation > dd
    "temperature, always in kelvin <span class=\"unit\">K</span>": "溫度，必須用開爾文 <span class=\"unit\">K</span>",

    // The combined gas law > equation > dd
    "before and after the change, for a fixed amount of gas": "變化前和變化後，氣體的物質的量固定",

    // The combined gas law > data booklet note > p
    "The combined gas law is printed in the data booklet. You do not need to memorise it, but you do need to rearrange it.": "聯合氣體定律印在數據手冊上。你不用背，但要懂得重排。",

    // The combined gas law > li
    "List <i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub> and <i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>. Mark the unknown with a question mark.": "列出 <i>P</i><sub>1</sub>、<i>V</i><sub>1</sub>、<i>T</i><sub>1</sub> 和 <i>P</i><sub>2</sub>、<i>V</i><sub>2</sub>、<i>T</i><sub>2</sub>。在未知數旁打上問號。",

    // The combined gas law > li
    "Convert both temperatures to kelvin: add 273.15.": "把兩個溫度都換算成開爾文：加 273.15。",

    // The combined gas law > li
    "Check that the two pressures share a unit and the two volumes share a unit. They do not have to be Pa or m<sup>3</sup>, because the units cancel.": "檢查兩個壓強的單位相同，兩個體積的單位也相同。不一定要用 Pa 或 m<sup>3</sup>，因為單位會互相抵消。",

    // The combined gas law > li
    "If a variable is constant, it cancels. Cross it out on both sides.": "如果某個變量不變，它會抵消。在兩邊把它刪去。",

    // The combined gas law > li
    "Rearrange for the unknown, substitute, and round at the end.": "重排公式求未知數，代入數值，最後才取有效數字。",

    // The combined gas law > li
    "Sense check: did the answer move in the direction you expected?": "合理性檢查：答案的變化方向和你預期的一樣嗎？",

    // The combined gas law > worked example > h3
    "New volume when pressure and temperature both change": "壓強和溫度同時改變時的新體積",

    // The combined gas law > worked example > p
    "A gas syringe contains 85.0 cm<sup>3</sup> of gas at 22.0 °C and 101 kPa. Calculate the volume of the gas, in cm<sup>3</sup>, at 65.0 °C and 125 kPa.": "一個氣體注射器在 22.0 °C 和 101 kPa 下裝有 85.0 cm<sup>3</sup> 氣體。計算氣體在 65.0 °C 和 125 kPa 下的體積，以 cm<sup>3</sup> 表示。",

    // The combined gas law > worked example > data-title attribute
    "List the two states": "列出兩個狀態",

    // The combined gas law > worked example > p
    "Sorting the data first stops you mixing up “before” and “after”.": "先整理數據，就不會把「變化前」和「變化後」混淆。",

    // The combined gas law > worked example > data-title attribute
    "Convert temperatures to kelvin": "把溫度換算成開爾文",

    // The combined gas law > worked example > p
    "The gas relationships are proportional only on the kelvin scale.": "氣體的關係只在開氏溫標下才成比例。",

    // The combined gas law > worked example > data-title attribute
    "Rearrange for V₂": "重排求 V₂",

    // The combined gas law > worked example > p
    "Multiply both sides by <i>T</i><sub>2</sub> and divide by <i>P</i><sub>2</sub> to leave <i>V</i><sub>2</sub> alone.": "兩邊乘以 <i>T</i><sub>2</sub>，再除以 <i>P</i><sub>2</sub>，令 <i>V</i><sub>2</sub> 獨立在一邊。",

    // The combined gas law > worked example > p
    "kPa cancels with kPa and K with K, leaving cm<sup>3</sup>. No conversion to dm<sup>3</sup> is needed here.": "kPa 與 kPa 抵消，K 與 K 抵消，剩下 cm<sup>3</sup>。這裏不需要換算成 dm<sup>3</sup>。",

    // The combined gas law > worked example > data-title attribute
    // The ideal gas equation > worked example > data-title attribute
    "Round and sense check": "取有效數字並檢查合理性",

    // The combined gas law > worked example > data-label attribute
    // The ideal gas equation > worked example > data-label attribute
    "Check": "檢查",

    // The combined gas law > worked example > p
    "Heating makes the gas expand, but the larger pressure squeezes it more. A slightly smaller volume is reasonable. The data have 3 significant figures.": "加熱令氣體膨脹，但較大的壓強把它壓縮得更多。體積稍為變小是合理的。數據有 3 位有效數字。",

    // The combined gas law > worked example > p
    "78.7 cm<sup>3</sup>": "78.7 cm<sup>3</sup>",

    // The combined gas law > try it > p
    "A gas occupies 2.40 dm<sup>3</sup> at 15.0 °C. It is heated to 80.0 °C at constant pressure. Calculate the new volume, in dm<sup>3</sup>.": "一種氣體在 15.0 °C 下佔 2.40 dm<sup>3</sup>。在壓強不變的情況下把它加熱至 80.0 °C。計算新的體積，以 dm<sup>3</sup> 表示。",

    // The combined gas law > try it > li
    "The pressure is constant, so <i>P</i> cancels. You are left with <i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>. What must you do to the temperatures first?": "壓強不變，所以 <i>P</i> 抵消，剩下 <i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>。你要先怎樣處理溫度？",

    // The combined gas law > try it > li
    "<i>T</i><sub>1</sub> = 288.15 K and <i>T</i><sub>2</sub> = 353.15 K. Then <i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>.": "<i>T</i><sub>1</sub> = 288.15 K，<i>T</i><sub>2</sub> = 353.15 K。然後 <i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>。",

    // The combined gas law > try it > p
    "To 3 significant figures: <strong>2.94 dm<sup>3</sup></strong>. If you got 12.8 dm<sup>3</sup>, you used °C.": "取至 3 位有效數字：<strong>2.94 dm<sup>3</sup></strong>。如果你得到 12.8 dm<sup>3</sup>，那是因為用了 °C。",

    // The combined gas law > try it > p
    "A sealed, rigid steel container holds gas at 310 kPa and 20.0 °C. It is left in the sun and warms to 55.0 °C. Calculate the new pressure, in kPa.": "一個密封的堅硬鋼製容器，裝有 310 kPa、20.0 °C 的氣體。容器放在太陽下，升溫至 55.0 °C。計算新的壓強，以 kPa 表示。",

    // The combined gas law > try it > li
    "Rigid means the volume is constant, so <i>V</i> cancels: <i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>.": "堅硬表示體積不變，所以 <i>V</i> 抵消：<i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>。",

    // The combined gas law > try it > li
    "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = <span class=\"mono\">310 kPa × 328.15 K ÷ 293.15 K</span>.": "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × <i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub> = <span class=\"mono\">310 kPa × 328.15 K ÷ 293.15 K</span>。",

    // The combined gas law > try it > p
    "To 3 significant figures: <strong>347 kPa</strong>.": "取至 3 位有效數字：<strong>347 kPa</strong>。",

    // The combined gas law > common mistake > p
    "The combined gas law is only for a fixed amount of gas. If gas is added or escapes between the two states, <i>n</i> has changed and you need <i>PV</i> = <i>nRT</i> for each state.": "聯合氣體定律只適用於物質的量固定的氣體。如果在兩個狀態之間有氣體加入或漏走，<i>n</i> 就改變了，你要對每個狀態分別使用 <i>PV</i> = <i>nRT</i>。",

    // The combined gas law > data-title attribute
    "Combined gas law: quick check": "聯合氣體定律：快速小測",

    // The ideal gas equation > data-toc attribute
    "PV = nRT": "PV = nRT",

    // The ideal gas equation > h2
    "The ideal gas equation": "理想氣體方程",

    // The ideal gas equation > p
    "The combined gas law compares a gas before and after a change. Often you have only one set of conditions and want to know how much gas is there. For that you need the <dfn data-def=\"PV = nRT: the equation linking the pressure, volume, amount and temperature of an ideal gas.\">ideal gas equation</dfn>.": "聯合氣體定律比較氣體在變化前和變化後的情況。但很多時候你只有一組條件，想知道有多少氣體。這時就要用<dfn data-def=\"PV = nRT：把理想氣體的壓強、體積、物質的量和溫度連繫起來的方程。\">理想氣體方程 <span class=\"en-term\">(ideal gas equation)</span></dfn>。",

    // The ideal gas equation > data-def attribute
    "PV = nRT: the equation linking the pressure, volume, amount and temperature of an ideal gas.": "PV = nRT：把理想氣體的壓強、體積、物質的量和溫度連繫起來的方程。",

    // The ideal gas equation > equation > dd
    "pressure <span class=\"unit\">Pa</span> (or kPa)": "壓強 <span class=\"unit\">Pa</span>（或 kPa）",

    // The ideal gas equation > equation > dd
    "volume <span class=\"unit\">m3</span> (or dm<sup>3</sup> with kPa)": "體積 <span class=\"unit\">m3</span>（或 dm<sup>3</sup>，配合 kPa）",

    // The ideal gas equation > equation > dd
    // Molar mass of a gas from experimental data > equation > dd
    "gas constant, 8.31 <span class=\"unit\">J K-1 mol-1</span>": "氣體常數，8.31 <span class=\"unit\">J K-1 mol-1</span>",

    // The ideal gas equation > equation > dd
    // Molar mass of a gas from experimental data > equation > dd
    "temperature <span class=\"unit\">K</span>": "溫度 <span class=\"unit\">K</span>",

    // The ideal gas equation > data booklet note > p
    "The equation <i>PV</i> = <i>nRT</i> and the value <span class=\"mono\"><i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup></span> are both in the data booklet.": "方程 <i>PV</i> = <i>nRT</i> 和數值 <span class=\"mono\"><i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup></span> 都在數據手冊內。",

    // The ideal gas equation > h3
    "Units: the part that costs the most marks": "單位：最容易失分的地方",

    // The ideal gas equation > p
    "<i>R</i> is given in joules. So the product <i>P</i> × <i>V</i> must come out in joules too. Two pairs of units do this.": "<i>R</i> 的單位裏有焦耳。所以乘積 <i>P</i> × <i>V</i> 的單位也必須是焦耳。有兩組單位做得到。",

    // The ideal gas equation > table > caption
    "Two consistent unit sets for PV = nRT, both with R = 8.31 J K⁻¹ mol⁻¹": "PV = nRT 的兩組一致單位，兩組都用 R = 8.31 J K⁻¹ mol⁻¹",

    // The ideal gas equation > table > th
    "Set": "組別",

    // The ideal gas equation > table > th
    "Pressure": "壓強",

    // The ideal gas equation > table > th
    "Volume": "體積",

    // The ideal gas equation > table > th
    "Why P × V is in joules": "為何 P × V 的單位是焦耳",

    // The ideal gas equation > table > th
    "SI base": "SI 基本單位",

    // The ideal gas equation > table > td
    "Pa": "Pa",

    // The ideal gas equation > table > td
    "1 Pa = 1 N m<sup>−2</sup>, so Pa × m<sup>3</sup> = N m = J": "1 Pa = 1 N m<sup>−2</sup>，所以 Pa × m<sup>3</sup> = N m = J",

    // The ideal gas equation > table > th
    "Lab-sized": "實驗室常用",

    // The ideal gas equation > table > td
    // The ideal gas equation > table > th
    "kPa": "kPa",

    // The ideal gas equation > table > td
    // The ideal gas equation > table > th
    "dm<sup>3</sup>": "dm<sup>3</sup>",

    // The ideal gas equation > table > td
    "kPa × dm<sup>3</sup> = (10<sup>3</sup> Pa) × (10<sup>−3</sup> m<sup>3</sup>) = Pa × m<sup>3</sup> = J": "kPa × dm<sup>3</sup> = (10<sup>3</sup> Pa) × (10<sup>−3</sup> m<sup>3</sup>) = Pa × m<sup>3</sup> = J",

    // The ideal gas equation > p
    "In the second set the factor of 1000 in kPa cancels the factor of 1/1000 in dm<sup>3</sup>. Both sets give the same answer. Choose one set and convert everything into it before you substitute.": "在第二組中，kPa 的 1000 倍剛好與 dm<sup>3</sup> 的 1/1000 抵消。兩組得出相同的答案。選定一組，代入之前先把所有數值換算成這一組的單位。",

    // The ideal gas equation > table > caption
    "Conversions you will use every time": "每次都會用到的換算",

    // The ideal gas equation > table > th
    "From": "由",

    // The ideal gas equation > table > th
    "To": "換成",

    // The ideal gas equation > table > th
    "Do this": "做法",

    // The ideal gas equation > table > th
    "Example": "例子",

    // The ideal gas equation > table > td
    "add 273.15": "加 273.15",

    // The ideal gas equation > table > th
    "cm<sup>3</sup>": "cm<sup>3</sup>",

    // The ideal gas equation > table > td
    "divide by 1000": "除以 1000",

    // The ideal gas equation > table > td
    "250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>": "250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>",

    // The ideal gas equation > table > td
    "2.50 dm<sup>3</sup> = 2.50 × 10<sup>−3</sup> m<sup>3</sup>": "2.50 dm<sup>3</sup> = 2.50 × 10<sup>−3</sup> m<sup>3</sup>",

    // The ideal gas equation > table > td
    "divide by 1 000 000": "除以 1 000 000",

    // The ideal gas equation > table > td
    "250 cm<sup>3</sup> = 2.50 × 10<sup>−4</sup> m<sup>3</sup>": "250 cm<sup>3</sup> = 2.50 × 10<sup>−4</sup> m<sup>3</sup>",

    // The ideal gas equation > table > td
    "multiply by 1000": "乘以 1000",

    // The ideal gas equation > table > td
    "101 kPa = 1.01 × 10<sup>5</sup> Pa": "101 kPa = 1.01 × 10<sup>5</sup> Pa",

    // The ideal gas equation > li
    "List what you know (<i>P</i>, <i>V</i>, <i>n</i>, <i>T</i>) and mark the unknown.": "列出已知的量（<i>P</i>、<i>V</i>、<i>n</i>、<i>T</i>），並標出未知數。",

    // The ideal gas equation > li
    "Convert: <i>T</i> to K. Then either <i>P</i> to kPa and <i>V</i> to dm<sup>3</sup>, or <i>P</i> to Pa and <i>V</i> to m<sup>3</sup>.": "換算：把 <i>T</i> 換成 K。然後把 <i>P</i> 換成 kPa、<i>V</i> 換成 dm<sup>3</sup>，或者把 <i>P</i> 換成 Pa、<i>V</i> 換成 m<sup>3</sup>。",

    // The ideal gas equation > li
    "If you have a mass instead of an amount, use <i>n</i> = <i>m</i> ÷ <i>M</i> (from Structure 1.4).": "如果題目給的是質量而不是物質的量，用 <i>n</i> = <i>m</i> ÷ <i>M</i>（見 Structure 1.4）。",

    // The ideal gas equation > li
    "Rearrange <i>PV</i> = <i>nRT</i> for the unknown before you put numbers in.": "代入數字之前，先把 <i>PV</i> = <i>nRT</i> 重排成求未知數的形式。",

    // The ideal gas equation > li
    "Substitute with units, calculate, and round at the end.": "連同單位代入，計算，最後才取有效數字。",

    // The ideal gas equation > table > caption
    "PV = nRT rearranged for each variable": "把 PV = nRT 重排，求每個變量",

    // The ideal gas equation > table > th
    "To find": "要求",

    // The ideal gas equation > table > th
    "Use": "使用",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "pressure": "壓強",

    // The ideal gas equation > table > td
    "<i>P</i> = <i>nRT</i> ÷ <i>V</i>": "<i>P</i> = <i>nRT</i> ÷ <i>V</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "volume": "體積",

    // The ideal gas equation > table > td
    "<i>V</i> = <i>nRT</i> ÷ <i>P</i>": "<i>V</i> = <i>nRT</i> ÷ <i>P</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "amount": "物質的量",

    // The ideal gas equation > table > td
    "<i>n</i> = <i>PV</i> ÷ <i>RT</i>": "<i>n</i> = <i>PV</i> ÷ <i>RT</i>",

    // The ideal gas equation > table > th
    // widget string (assets/js/widgets-s1-5.js)
    "temperature": "溫度",

    // The ideal gas equation > table > td
    "<i>T</i> = <i>PV</i> ÷ <i>nR</i>": "<i>T</i> = <i>PV</i> ÷ <i>nR</i>",

    // The ideal gas equation > widget > data-title attribute
    "PV = nRT solver with unit coach": "PV = nRT 解題工具（附單位提示）",

    // The ideal gas equation > widget > figcaption
    "Choose what to find, type the values in the units the question gives, and read the working from top to bottom: conversions first, then the rearrangement, then the substitution. Use it to check your own working, not to replace it.": "選擇要求的量，按題目所給的單位輸入數值，然後由上至下閱讀計算步驟：先換算，再重排，最後代入。用它來核對你自己的計算步驟，不要用它代替自己做。",

    // The ideal gas equation > worked example > h3
    "Finding a volume with kPa and dm³": "用 kPa 和 dm³ 求體積",

    // The ideal gas equation > worked example > p
    "Calculate the volume, in dm<sup>3</sup>, occupied by 0.150 mol of carbon dioxide at 25.0 °C and 98.5 kPa.": "計算 0.150 mol 二氧化碳在 25.0 °C 和 98.5 kPa 下所佔的體積，以 dm<sup>3</sup> 表示。",

    // The ideal gas equation > worked example > data-title attribute
    "List and convert": "列出數據並換算",

    // The ideal gas equation > worked example > p
    "The pressure is already in kPa, so the answer will come out in dm<sup>3</sup>. Only the temperature needs converting.": "壓強已經是 kPa，所以答案的單位會是 dm<sup>3</sup>。只有溫度需要換算。",

    // The ideal gas equation > worked example > data-title attribute
    "Rearrange for V": "重排求 V",

    // The ideal gas equation > worked example > p
    "Divide both sides of <i>PV</i> = <i>nRT</i> by <i>P</i>.": "把 <i>PV</i> = <i>nRT</i> 兩邊除以 <i>P</i>。",

    // The ideal gas equation > worked example > p
    "mol × J K<sup>−1</sup> mol<sup>−1</sup> × K leaves J. Then J ÷ kPa gives dm<sup>3</sup>.": "mol × J K<sup>−1</sup> mol<sup>−1</sup> × K 剩下 J。然後 J ÷ kPa 得出 dm<sup>3</sup>。",

    // The ideal gas equation > worked example > p
    "One mole at STP is 22.7 dm<sup>3</sup>, so 0.150 mol near room conditions should be a few dm<sup>3</sup>. The data have 3 significant figures.": "一摩爾氣體在 STP 下是 22.7 dm<sup>3</sup>，所以 0.150 mol 在接近室內條件下應該是幾 dm<sup>3</sup>。數據有 3 位有效數字。",

    // The ideal gas equation > worked example > p
    "3.77 dm<sup>3</sup>": "3.77 dm<sup>3</sup>",

    // The ideal gas equation > worked example > h3
    "Finding an amount, then a mass, with Pa and m³": "用 Pa 和 m³ 先求物質的量，再求質量",

    // The ideal gas equation > worked example > p
    "A 2.50 dm<sup>3</sup> flask contains oxygen gas, O<sub>2</sub>, at 27.0 °C and 150 kPa. Calculate the mass of oxygen in the flask.": "一個 2.50 dm<sup>3</sup> 的燒瓶在 27.0 °C 和 150 kPa 下裝有氧氣 O<sub>2</sub>。計算燒瓶內氧氣的質量。",

    // The ideal gas equation > worked example > data-title attribute
    "Convert to Pa, m³ and K": "換算成 Pa、m³ 和 K",

    // The ideal gas equation > worked example > p
    "This example uses the SI base set to show that it gives the same kind of answer. You could also keep kPa and dm<sup>3</sup>.": "這個例題用 SI 基本單位那一組，讓你看到它同樣得出正確的答案。你也可以保留 kPa 和 dm<sup>3</sup>。",

    // The ideal gas equation > worked example > data-title attribute
    "Rearrange for n": "重排求 n",

    // The ideal gas equation > worked example > p
    "You need the amount before you can find a mass. Divide both sides by <i>RT</i>.": "要先知道物質的量，才能求質量。兩邊除以 <i>RT</i>。",

    // The ideal gas equation > worked example > p
    "Pa × m<sup>3</sup> = J on top. J K<sup>−1</sup> mol<sup>−1</sup> × K = J mol<sup>−1</sup> underneath. J ÷ J mol<sup>−1</sup> leaves mol.": "分子是 Pa × m<sup>3</sup> = J。分母是 J K<sup>−1</sup> mol<sup>−1</sup> × K = J mol<sup>−1</sup>。J ÷ J mol<sup>−1</sup> 剩下 mol。",

    // The ideal gas equation > worked example > data-title attribute
    "Convert amount to mass": "把物質的量換算成質量",

    // The ideal gas equation > worked example > p
    "Oxygen gas is O<sub>2</sub>, so <i>M</i> = 2 × 16.00 = 32.00 g mol<sup>−1</sup>. Keep the unrounded value of <i>n</i> in your calculator.": "氧氣是 O<sub>2</sub>，所以 <i>M</i> = 2 × 16.00 = 32.00 g mol<sup>−1</sup>。把未經四捨五入的 <i>n</i> 值留在計算機內。",

    // The ideal gas equation > worked example > p
    "The data have 3 significant figures.": "數據有 3 位有效數字。",

    // The ideal gas equation > worked example > p
    "4.81 g of O<sub>2</sub>": "4.81 g O<sub>2</sub>",

    // The ideal gas equation > try it > p
    "Calculate the pressure, in kPa, of 0.250 mol of gas in a 5.00 dm<sup>3</sup> container at 30.0 °C.": "0.250 mol 氣體在 30.0 °C 下裝在 5.00 dm<sup>3</sup> 的容器內。計算氣體的壓強，以 kPa 表示。",

    // The ideal gas equation > try it > li
    "The volume is in dm<sup>3</sup>, so the pressure will come out in kPa. Convert the temperature to kelvin.": "體積的單位是 dm<sup>3</sup>，所以壓強的單位會是 kPa。把溫度換算成開爾文。",

    // The ideal gas equation > try it > li
    "<i>P</i> = <i>nRT</i> ÷ <i>V</i> = <span class=\"mono\">(0.250 × 8.31 × 303.15) ÷ 5.00</span>.": "<i>P</i> = <i>nRT</i> ÷ <i>V</i> = <span class=\"mono\">(0.250 × 8.31 × 303.15) ÷ 5.00</span>。",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>126 kPa</strong>.": "取至 3 位有效數字：<strong>126 kPa</strong>。",

    // The ideal gas equation > try it > p
    "0.100 mol of gas occupies 2.00 dm<sup>3</sup> at a pressure of 150 kPa. Calculate the temperature of the gas, in K.": "0.100 mol 氣體在 150 kPa 的壓強下佔 2.00 dm<sup>3</sup>。計算氣體的溫度，以 K 表示。",

    // The ideal gas equation > try it > li
    "kPa and dm<sup>3</sup> already match, so no conversion is needed. Rearrange <i>PV</i> = <i>nRT</i> for <i>T</i>.": "kPa 和 dm<sup>3</sup> 已經配對，不需要換算。把 <i>PV</i> = <i>nRT</i> 重排成求 <i>T</i> 的形式。",

    // The ideal gas equation > try it > li
    "<i>T</i> = <i>PV</i> ÷ <i>nR</i> = <span class=\"mono\">(150 × 2.00) ÷ (0.100 × 8.31)</span>.": "<i>T</i> = <i>PV</i> ÷ <i>nR</i> = <span class=\"mono\">(150 × 2.00) ÷ (0.100 × 8.31)</span>。",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>361 K</strong>. The equation always gives temperature in kelvin.": "取至 3 位有效數字：<strong>361 K</strong>。這條方程得出的溫度一定以開爾文為單位。",

    // The ideal gas equation > try it > p
    "A gas syringe holds 250 cm<sup>3</sup> of methane, CH<sub>4</sub>, at 18.0 °C and 102 kPa. Calculate the mass of methane, in g.": "一個氣體注射器在 18.0 °C 和 102 kPa 下裝有 250 cm<sup>3</sup> 甲烷 CH<sub>4</sub>。計算甲烷的質量，以 g 表示。",

    // The ideal gas equation > try it > li
    "Two conversions are needed before you start: cm<sup>3</sup> to dm<sup>3</sup> and °C to K.": "開始之前要做兩個換算：cm<sup>3</sup> 換成 dm<sup>3</sup>，°C 換成 K。",

    // The ideal gas equation > try it > li
    "<i>n</i> = <i>PV</i> ÷ <i>RT</i> = <span class=\"mono\">(102 × 0.250) ÷ (8.31 × 291.15)</span>. Then <i>m</i> = <i>n</i> × <i>M</i>, with <i>M</i>(CH<sub>4</sub>) = 16.05 g mol<sup>−1</sup>.": "<i>n</i> = <i>PV</i> ÷ <i>RT</i> = <span class=\"mono\">(102 × 0.250) ÷ (8.31 × 291.15)</span>。然後 <i>m</i> = <i>n</i> × <i>M</i>，其中 <i>M</i>(CH<sub>4</sub>) = 16.05 g mol<sup>−1</sup>。",

    // The ideal gas equation > try it > p
    "To 3 significant figures: <strong>0.169 g</strong>.": "取至 3 位有效數字：<strong>0.169 g</strong>。",

    // The ideal gas equation > common mistake > p
    "The two classic errors are leaving the temperature in °C, and putting cm<sup>3</sup> straight in with kPa. The first gives an answer that is wildly out. The second is out by exactly 1000. If your amount of gas in a small flask comes out as several moles, check your volume unit.": "兩個典型錯誤：一是溫度沒有換算，仍用 °C；二是把 cm<sup>3</sup> 直接和 kPa 一起代入。第一個錯誤會令答案相差極遠。第二個錯誤令答案剛好相差 1000 倍。如果你算出小燒瓶內的氣體有好幾摩爾，就要檢查體積的單位。",

    // The ideal gas equation > exam tip (shown in English + translation) > p
    "In a 2-mark gas equation question, one mark is usually for correct unit conversions (kelvin, and matching pressure and volume units) and one for the answer. Write the conversions as separate lines so the first mark is safe even if your final answer slips.": "在 2 分的氣體方程題目中，通常一分給正確的單位換算（開爾文，以及互相配合的壓強和體積單位），一分給答案。把換算逐行分開寫，即使最後答案出錯，第一分也保得住。",

    // The ideal gas equation > not needed for IB > p
    "IB uses SI units only for pressure and volume, so you will not meet atm, mmHg, bar or litres in gas questions. Partial pressures (Dalton’s law), Graham’s law of effusion and mole fractions are not in the guide at all. If a textbook chapter turns to those, you can stop.": "IB 的壓強和體積只用 SI 單位，所以氣體題目不會出現 atm、mmHg、bar 或升 (litre)。分壓（道爾頓定律，Dalton’s law）、格雷姆瀉流定律 (Graham’s law of effusion) 和摩爾分數 (mole fraction) 都完全不在指南內。如果課本某一章開始講這些內容，你可以停下來。",

    // The ideal gas equation > data-title attribute
    "PV = nRT: quick check": "PV = nRT：快速小測",

    // Molar mass of a gas from experimental data > data-toc attribute
    "Molar mass from gas data": "由氣體數據求摩爾質量",

    // Molar mass of a gas from experimental data > h2
    "Molar mass of a gas from experimental data": "根據實驗數據求氣體的摩爾質量",

    // Molar mass of a gas from experimental data > p
    "You have an unknown liquid that evaporates easily (a <dfn data-def=\"A volatile liquid is one that evaporates easily.\">volatile</dfn> liquid). Inject a weighed drop into a warm gas syringe and it turns to vapour. Read the volume, the temperature and the pressure, and you can work out its molar mass.": "你有一種容易蒸發的未知液體（<dfn data-def=\"易揮發的液體是容易蒸發的液體。\">易揮發 <span class=\"en-term\">(volatile)</span></dfn>液體）。把一滴已稱重的液體注入溫暖的氣體注射器，它會變成蒸氣。讀出體積、溫度和壓強，就可以算出它的摩爾質量。",

    // Molar mass of a gas from experimental data > data-def attribute
    "A volatile liquid is one that evaporates easily.": "易揮發的液體是容易蒸發的液體。",

    // Molar mass of a gas from experimental data > p
    "The idea has two links. The gas equation gives the amount, <i>n</i>. Then molar mass is mass divided by amount.": "思路分兩步。先用氣體方程求物質的量 <i>n</i>。然後，摩爾質量等於質量除以物質的量。",

    // Molar mass of a gas from experimental data > equation > dd
    "molar mass <span class=\"unit\">g mol-1</span>": "摩爾質量 <span class=\"unit\">g mol-1</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "mass of the gas sample <span class=\"unit\">g</span>": "氣體樣本的質量 <span class=\"unit\">g</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "amount of gas, from <i>n</i> = <i>PV</i> ÷ <i>RT</i> <span class=\"unit\">mol</span>": "氣體的物質的量，由 <i>n</i> = <i>PV</i> ÷ <i>RT</i> 求得 <span class=\"unit\">mol</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "pressure <span class=\"unit\">kPa</span>": "壓強 <span class=\"unit\">kPa</span>",

    // Molar mass of a gas from experimental data > equation > dd
    "volume <span class=\"unit\">dm3</span>": "體積 <span class=\"unit\">dm3</span>",

    // Molar mass of a gas from experimental data > p
    "The combined form <i>M</i> = <i>mRT</i> ÷ <i>PV</i> is not in the data booklet. You do not need to memorise it. Working in two steps (find <i>n</i>, then <i>M</i> = <i>m</i> ÷ <i>n</i>) is safer and shows your method.": "合併形式 <i>M</i> = <i>mRT</i> ÷ <i>PV</i> 不在數據手冊內。你不用背。分兩步做（先求 <i>n</i>，再用 <i>M</i> = <i>m</i> ÷ <i>n</i>）較穩妥，也能展示你的方法。",

    // Molar mass of a gas from experimental data > li
    "Convert <i>T</i> to K, and <i>P</i> and <i>V</i> to a matching pair (kPa with dm<sup>3</sup>).": "把 <i>T</i> 換成 K，並把 <i>P</i> 和 <i>V</i> 換成配對的單位（kPa 配 dm<sup>3</sup>）。",

    // Molar mass of a gas from experimental data > li
    "Find the amount of gas: <i>n</i> = <i>PV</i> ÷ <i>RT</i>.": "求氣體的物質的量：<i>n</i> = <i>PV</i> ÷ <i>RT</i>。",

    // Molar mass of a gas from experimental data > li
    "Find the molar mass: <i>M</i> = <i>m</i> ÷ <i>n</i>, with the mass in g.": "求摩爾質量：<i>M</i> = <i>m</i> ÷ <i>n</i>，質量以 g 為單位。",

    // Molar mass of a gas from experimental data > li
    "If you also know the empirical formula, divide <i>M</i> by the empirical formula mass to find how many empirical units make one molecule.": "如果你還知道實驗式，把 <i>M</i> 除以實驗式質量，就知道一個分子由多少個實驗式單位組成。",

    // Molar mass of a gas from experimental data > worked example > h3
    "Molar mass of a volatile liquid": "易揮發液體的摩爾質量",

    // Molar mass of a gas from experimental data > worked example > p
    "0.180 g of a volatile liquid is injected into a gas syringe kept at 100.0 °C. It vaporises completely and the vapour occupies 95.1 cm<sup>3</sup> at 101 kPa. Calculate the molar mass of the liquid.": "把 0.180 g 易揮發液體注入保持在 100.0 °C 的氣體注射器。液體完全汽化，蒸氣在 101 kPa 下佔 95.1 cm<sup>3</sup>。計算這種液體的摩爾質量。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Convert the units": "換算單位",

    // Molar mass of a gas from experimental data > worked example > p
    "With the pressure in kPa, the volume must be in dm<sup>3</sup>. The temperature must be in kelvin.": "壓強用 kPa，體積就必須用 dm<sup>3</sup>。溫度必須用開爾文。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the amount of vapour": "求蒸氣的物質的量",

    // Molar mass of a gas from experimental data > worked example > p
    "The gas equation counts the moles of vapour without needing to know what the substance is.": "氣體方程可以數出蒸氣有多少摩爾，不需要知道它是甚麼物質。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Divide mass by amount": "質量除以物質的量",

    // Molar mass of a gas from experimental data > worked example > p
    "Molar mass is the mass of one mole, so it is grams divided by moles.": "摩爾質量是一摩爾的質量，所以是克數除以摩爾數。",

    // Molar mass of a gas from experimental data > worked example > p
    "The mass, volume and pressure have 3 significant figures.": "質量、體積和壓強都有 3 位有效數字。",

    // Molar mass of a gas from experimental data > worked example > p
    "58.1 g mol<sup>−1</sup>": "58.1 g mol<sup>−1</sup>",

    // Molar mass of a gas from experimental data > worked example > h3
    "From percentage composition and gas data to a molecular formula": "由質量百分組成和氣體數據求分子式",

    // Molar mass of a gas from experimental data > worked example > p
    "A hydrocarbon contains 85.6 % carbon and 14.4 % hydrogen by mass. A 0.500 g sample of the gas occupies 221 cm<sup>3</sup> at 25.0 °C and 100 kPa. Determine the molecular formula of the hydrocarbon.": "某種烴按質量計含 85.6% 碳和 14.4% 氫。0.500 g 這種氣體的樣本在 25.0 °C 和 100 kPa 下佔 221 cm<sup>3</sup>。求出 (determine) 這種烴的分子式。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the empirical formula": "求實驗式",

    // Molar mass of a gas from experimental data > worked example > p
    "This is the Structure 1.4 method: imagine 100 g, divide each mass by <i>A</i><sub>r</sub>, then divide by the smallest.": "這是 Structure 1.4 的方法：假設有 100 g，把每個質量除以 <i>A</i><sub>r</sub>，再除以最小的數。",

    // Molar mass of a gas from experimental data > worked example > maths line
    "ratio H : C = 14.25… ÷ 7.127… = 2.00, so the empirical formula is CH<sub>2</sub>": "H : C 的比 = 14.25… ÷ 7.127… = 2.00，所以實驗式是 CH<sub>2</sub>",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Convert the gas data": "換算氣體數據",

    // Molar mass of a gas from experimental data > worked example > p
    "kPa needs dm<sup>3</sup>, and the temperature must be in kelvin.": "kPa 要配 dm<sup>3</sup>，溫度必須用開爾文。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the amount of gas": "求氣體的物質的量",

    // Molar mass of a gas from experimental data > worked example > p
    "The conditions are not STP, so use the gas equation, not 22.7.": "條件不是 STP，所以要用氣體方程，不能用 22.7。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Find the molar mass": "求摩爾質量",

    // Molar mass of a gas from experimental data > worked example > p
    "Mass divided by amount.": "質量除以物質的量。",

    // Molar mass of a gas from experimental data > worked example > data-title attribute
    "Compare with the empirical formula mass": "與實驗式質量比較",

    // Molar mass of a gas from experimental data > worked example > p
    "The molecular formula is a whole-number multiple of the empirical formula. Experimental data rarely give an exact whole number, so round to the nearest one.": "分子式是實驗式的整數倍。實驗數據很少得出剛好的整數，所以取最接近的整數。",

    // Molar mass of a gas from experimental data > worked example > maths line
    "molecular formula = (CH<sub>2</sub>)<sub>4</sub> = <b>C<sub>4</sub>H<sub>8</sub></b>": "分子式 = (CH<sub>2</sub>)<sub>4</sub> = <b>C<sub>4</sub>H<sub>8</sub></b>",

    // Molar mass of a gas from experimental data > try it > p
    "1.26 g of a gas occupies 0.750 dm<sup>3</sup> at 20.0 °C and 96.0 kPa. Calculate the molar mass of the gas.": "1.26 g 氣體在 20.0 °C 和 96.0 kPa 下佔 0.750 dm<sup>3</sup>。計算這種氣體的摩爾質量。",

    // Molar mass of a gas from experimental data > try it > li
    "Find the amount of gas first with <i>n</i> = <i>PV</i> ÷ <i>RT</i>. Remember kelvin.": "先用 <i>n</i> = <i>PV</i> ÷ <i>RT</i> 求氣體的物質的量。記得用開爾文。",

    // Molar mass of a gas from experimental data > try it > li
    "<i>n</i> = <span class=\"mono\">(96.0 × 0.750) ÷ (8.31 × 293.15)</span>. Then <i>M</i> = 1.26 g ÷ <i>n</i>.": "<i>n</i> = <span class=\"mono\">(96.0 × 0.750) ÷ (8.31 × 293.15)</span>。然後 <i>M</i> = 1.26 g ÷ <i>n</i>。",

    // Molar mass of a gas from experimental data > try it > p
    "To 3 significant figures: <strong>42.6 g mol<sup>−1</sup></strong>.": "取至 3 位有效數字：<strong>42.6 g mol<sup>−1</sup></strong>。",

    // Molar mass of a gas from experimental data > h3
    "Gas density uses the same idea": "氣體密度用的是同一個思路",

    // Molar mass of a gas from experimental data > p
    "Density is mass divided by volume. If a question gives the density of a gas, it has given you the mass of a known volume. For example, a density of 1.25 g dm<sup>−3</sup> means 1.25 g occupies 1.00 dm<sup>3</sup>. Put those two values into the method above. There is no new formula to learn.": "密度是質量除以體積。如果題目給了氣體的密度，就等於給了你某個已知體積的質量。例如，密度是 1.25 g dm<sup>−3</sup>，表示 1.25 g 佔 1.00 dm<sup>3</sup>。把這兩個數值代入上面的方法就可以了。不用學新的公式。",

    // Molar mass of a gas from experimental data > exam tip (shown in English + translation) > p
    "These questions are often chained: empirical formula in one part, molar mass from gas data in the next, molecular formula at the end. Each part is marked with “error carried forward”. If an earlier answer is wrong but you use it correctly afterwards, you still earn the later marks. So keep going, and show every line.": "這類題目常常環環相扣：一部分求實驗式，下一部分由氣體數據求摩爾質量，最後求分子式。每部分都按「承前錯誤」(error carried forward) 的原則評分。如果前面的答案錯了，但你之後正確地使用它，後面的分數仍然拿得到。所以要繼續做下去，並寫出每一行步驟。",

    // Molar mass of a gas from experimental data > common mistake > p
    "Do not use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount unless the gas is at STP. Vapour in a syringe at 100 °C takes up much more space per mole than that.": "除非氣體處於 STP，否則不要用 22.7 dm<sup>3</sup> mol<sup>−1</sup> 求物質的量。100 °C 的注射器內的蒸氣，每摩爾所佔的空間比這個數值大得多。",

    // Molar mass of a gas from experimental data > data-title attribute
    "Molar mass from gas data: quick check": "由氣體數據求摩爾質量：快速小測",

    // Linking it up > h2
    "Linking it up": "把知識連繫起來",

    // Linking it up > p
    "The IB guide asks linking questions that connect this topic to others. Short answers to four of them:": "IB 指南設有連繫問題 (linking questions)，把這個課題和其他課題連起來。以下是其中四條的簡短答案：",

    // Linking it up > h3
    "Avogadro’s law applies to ideal gases. Under what conditions might a real gas deviate most?": "亞佛加德羅定律適用於理想氣體。真實氣體在甚麼條件下偏離得最多？",

    // Linking it up > p
    "At low temperature and high pressure. There the particles are slow and close together, so intermolecular forces and the volume of the particles are no longer negligible. Under those conditions, equal volumes of two real gases may not contain exactly equal numbers of molecules.": "在低溫和高壓下。這時粒子運動慢，又靠得近，所以分子間引力和粒子的體積都不再可以忽略。在這些條件下，相同體積的兩種真實氣體所含的分子數目未必完全相同。",

    // Linking it up > h3
    "Under comparable conditions, why do some gases deviate more than others?": "在相近的條件下，為甚麼有些氣體比其他氣體偏離得更多？",

    // Linking it up > p
    "Gases whose particles attract each other more strongly deviate more, because the “no intermolecular forces” assumption fits them less well. Larger particles also make the “negligible volume” assumption less accurate. Structure 2.2 explains why some molecules attract more strongly than others.": "粒子之間吸引較強的氣體偏離得較多，因為「沒有分子間引力」這個假設對它們較不適用。粒子較大，也令「體積可忽略」這個假設較不準確。Structure 2.2 會解釋為甚麼有些分子之間的吸引比其他分子強。",

    // Linking it up > h3
    "Graphs can be sketches or accurately plotted points. What are the advantages and limitations of each?": "圖表可以是略圖，也可以是準確描點的圖。兩者各有甚麼優點和局限？",

    // Linking it up > p
    "A sketch shows the shape of a relationship quickly: curve or line, through the origin or not. It carries no scale, so you cannot read values from it. Plotted data points let you find a gradient or an intercept, judge the scatter and spot anomalous results, and extrapolate (for example to absolute zero). They take longer, and they are only as reliable as the measurements and the range that was measured.": "略圖能快速顯示關係的形狀：是曲線還是直線，通過原點還是不通過。略圖沒有標度，所以不能從中讀出數值。描出數據點的圖，可以用來求斜率或截距，判斷數據點有多分散，找出異常結果，還可以外推（例如推至絕對零度）。但這種圖較費時，而且它有多可靠，取決於量度的質素和量度的範圍。",

    // Linking it up > h3
    "How can the ideal gas law be used to find the molar mass of a gas from experimental data?": "怎樣用理想氣體定律，根據實驗數據求氣體的摩爾質量？",

    // Linking it up > p
    "Measure the mass, pressure, volume and temperature of a gas sample. Use <i>n</i> = <i>PV</i> ÷ <i>RT</i> to find the amount, then <i>M</i> = <i>m</i> ÷ <i>n</i>. The result assumes the gas behaves ideally, so it is most accurate at high temperature and low pressure.": "量度氣體樣本的質量、壓強、體積和溫度。用 <i>n</i> = <i>PV</i> ÷ <i>RT</i> 求物質的量，再用 <i>M</i> = <i>m</i> ÷ <i>n</i>。這個結果假設氣體的行為符合理想，所以在高溫和低壓下最準確。",

    // Exam-style practice > h2
    "Exam-style practice": "考試題型練習",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. All questions are original and stay inside the syllabus. Have your data booklet and calculator ready.": "共三組題目，由入門到進階。所有題目均為原創，並且不超出課程大綱。請準備好數據手冊和計算機。",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "基礎：每次一個概念",

    // Exam-style practice > data-title attribute
    "1.5 foundation": "1.5 基礎",

    // Exam-style practice > h3
    "Exam standard": "考試程度",

    // Exam-style practice > data-title attribute
    "1.5 exam standard": "1.5 考試程度",

    // Exam-style practice > h3
    "Challenge: multi-step and unfamiliar contexts": "挑戰：多步驟和陌生情境",

    // Exam-style practice > data-title attribute
    "1.5 challenge": "1.5 挑戰",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature and amount are held constant. Move the volume slider.": "溫度和物質的量保持不變。移動體積滑桿。",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume and amount are held constant (a rigid container). Move the temperature slider.": "體積和物質的量保持不變（堅硬的容器）。移動溫度滑桿。",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure is held at {P} kPa and the amount at {n} mol. The piston is free to move. Move the temperature slider.": "壓強保持在 {P} kPa，物質的量保持在 {n} mol。活塞可以自由移動。移動溫度滑桿。",

    // widget string (assets/js/widgets-s1-5.js)
    "Experiment": "實驗",

    // widget string (assets/js/widgets-s1-5.js)
    "P against V (T and n constant)": "P 對 V（T 和 n 不變）",

    // widget string (assets/js/widgets-s1-5.js)
    "P against T (V and n constant)": "P 對 T（V 和 n 不變）",

    // widget string (assets/js/widgets-s1-5.js)
    "V against T (P and n constant)": "V 對 T（P 和 n 不變）",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature, T": "溫度 T",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume, V": "體積 V",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount of gas, n": "氣體的物質的量 n",

    // widget string (assets/js/widgets-s1-5.js)
    "Pause particles": "暫停粒子",

    // widget string (assets/js/widgets-s1-5.js)
    "Run the experiment": "開始實驗",

    // widget string (assets/js/widgets-s1-5.js)
    "Clear graph": "清除圖表",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure, P": "壓強 P",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount, n": "物質的量 n",

    // widget string (assets/js/widgets-s1-5.js)
    "PV ÷ nT": "PV ÷ nT",

    // widget string (assets/js/widgets-s1-5.js)
    "This experiment": "這個實驗",

    // widget string (assets/js/widgets-s1-5.js)
    "Left: a cylinder of gas particles closed by a piston. Right: a graph of the two variables in the chosen experiment, traced as you move the slider. All values are in the readout below.": "左：一個裝有氣體粒子、以活塞封閉的氣缸。右：所選實驗中兩個變量的圖表，隨你移動滑桿而描畫出來。所有數值都在下方的讀數中。",

    // widget string (assets/js/widgets-s1-5.js)
    "volume / {unit}": "體積 / {unit}",

    // widget string (assets/js/widgets-s1-5.js)
    "Model of the gas": "氣體模型",

    // widget string (assets/js/widgets-s1-5.js)
    "piston": "活塞",

    // widget string (assets/js/widgets-s1-5.js)
    "extrapolated to {T} K": "外推至 {T} K",

    // widget string (assets/js/widgets-s1-5.js)
    "Play particles": "播放粒子",

    // widget string (assets/js/widgets-s1-5.js)
    "The grey line is your previous run.": "灰色線是你上一次的實驗。",

    // widget string (assets/js/widgets-s1-5.js)
    "a curve that falls steeply at first and then levels off, never touching either axis": "一條起初急降、然後漸趨平緩的曲線，永不接觸任何一條軸",

    // widget string (assets/js/widgets-s1-5.js)
    "a straight line through the origin": "一條通過原點的直線",

    // widget string (assets/js/widgets-s1-5.js)
    "a straight line that does not pass through the origin; extended back, it meets the horizontal axis at a negative value": "一條不通過原點的直線；向後延長，會在負值處與橫軸相交",

    // widget string (assets/js/widgets-s1-5.js)
    "a horizontal straight line": "一條水平直線",

    // widget string (assets/js/widgets-s1-5.js)
    "T and n constant": "T 和 n 不變",

    // widget string (assets/js/widgets-s1-5.js)
    "P is inversely proportional to V. Doubling V halves P.": "P 與 V 成反比。V 加倍，P 減半。",

    // widget string (assets/js/widgets-s1-5.js)
    "P is directly proportional to 1/V, so this plot turns the curve into a straight line.": "P 與 1/V 成正比，所以這樣作圖會把曲線變成直線。",

    // widget string (assets/js/widgets-s1-5.js)
    "P and n constant": "P 和 n 不變",

    // widget string (assets/js/widgets-s1-5.js)
    "V is directly proportional to T in kelvin. Zero volume would be reached at 0 K.": "V 與開爾文溫度 T 成正比。到 0 K 時體積會變成零。",

    // widget string (assets/js/widgets-s1-5.js)
    "Still a straight line, but 0 °C is not zero on the kelvin scale. Extended back, the line reaches V = 0 at {T} °C.": "仍然是直線，但 0 °C 不是開氏溫標的零點。向後延長，直線在 {T} °C 到達 V = 0。",

    // widget string (assets/js/widgets-s1-5.js)
    "V and n constant": "V 和 n 不變",

    // widget string (assets/js/widgets-s1-5.js)
    "P is directly proportional to T in kelvin.": "P 與開爾文溫度 T 成正比。",

    // widget string (assets/js/widgets-s1-5.js)
    "PV = nRT. With n and T fixed, PV stays the same whatever the pressure.": "PV = nRT。n 和 T 固定時，無論壓強是多少，PV 都不變。",

    // widget string (assets/js/widgets-s1-5.js)
    "Sketch graph of {y} against {x}: {shape}": "{y} 對 {x} 的略圖：{shape}",

    // widget string (assets/js/widgets-s1-5.js)
    "Sketch graph: {shape}": "略圖：{shape}",

    // widget string (assets/js/widgets-s1-5.js)
    "negative": "負值",

    // widget string (assets/js/widgets-s1-5.js)
    "Matching exercise": "配對練習",

    // widget string (assets/js/widgets-s1-5.js)
    "{y} against {x}": "{y} 對 {x}",

    // widget string (assets/js/widgets-s1-5.js)
    "Shape {letter}": "形狀 {letter}",

    // widget string (assets/js/widgets-s1-5.js)
    "Each relationship below is for a fixed mass of an ideal gas. Choose the shape of its graph. A shape can be used more than once.": "以下每種關係都是關於固定質量的理想氣體。選出它的圖表形狀。同一個形狀可以用多於一次。",

    // widget string (assets/js/widgets-s1-5.js)
    "Choose a shape": "選擇形狀",

    // widget string (assets/js/widgets-s1-5.js)
    "Check my matches": "檢查我的配對",

    // widget string (assets/js/widgets-s1-5.js)
    "Not answered yet.": "尚未作答。",

    // widget string (assets/js/widgets-s1-5.js)
    "Correct. {why}": "正確。{why}",

    // widget string (assets/js/widgets-s1-5.js)
    "Not this shape. Ask: is it direct or inverse proportion, and is the horizontal axis zero at the origin?": "不是這個形狀。想一想：是正比還是反比？橫軸在原點是否等於零？",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct. All matched. Open the labelled gallery to see them together.": "{total} 題中答對 {right} 題。全部配對正確。打開附標示的圖庫，一併重溫。",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct ({blank} not answered). Change your choices and check again.": "{total} 題中答對 {right} 題（{blank} 題未答）。更改你的選擇，再檢查一次。",

    // widget string (assets/js/widgets-s1-5.js)
    "{right} of {total} correct. Change your choices and check again.": "{total} 題中答對 {right} 題。更改你的選擇，再檢查一次。",

    // widget string (assets/js/widgets-s1-5.js)
    "Test yourself: match the shapes": "自我測試：配對形狀",

    // widget string (assets/js/widgets-s1-5.js)
    "Show the labelled gallery": "顯示附標示的圖庫",

    // widget string (assets/js/widgets-s1-5.js)
    "Choose a shape for each relationship, then press Check.": "為每種關係選一個形狀，然後按「檢查我的配對」。",

    // widget string (assets/js/widgets-s1-5.js)
    "Study the six graphs, then test yourself.": "先細看六幅圖表，然後自我測試。",

    // widget string (assets/js/widgets-s1-5.js)
    "Find": "要求的量",

    // widget string (assets/js/widgets-s1-5.js)
    "pressure, P": "壓強 P",

    // widget string (assets/js/widgets-s1-5.js)
    "volume, V": "體積 V",

    // widget string (assets/js/widgets-s1-5.js)
    "temperature, T": "溫度 T",

    // widget string (assets/js/widgets-s1-5.js)
    "amount, n": "物質的量 n",

    // widget string (assets/js/widgets-s1-5.js)
    "mass, m (formula known)": "質量 m（已知化學式）",

    // widget string (assets/js/widgets-s1-5.js)
    "molar mass, M (mass known)": "摩爾質量 M（已知質量）",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount of gas given as": "題目給的氣體量",

    // widget string (assets/js/widgets-s1-5.js)
    "amount in mol": "物質的量 (mol)",

    // widget string (assets/js/widgets-s1-5.js)
    "mass in g and a formula": "質量 (g) 和化學式",

    // widget string (assets/js/widgets-s1-5.js)
    "Work in": "使用的單位",

    // widget string (assets/js/widgets-s1-5.js)
    "{p} and {v}": "{p} 和 {v}",

    // widget string (assets/js/widgets-s1-5.js)
    "Unit for {quantity}": "{quantity}的單位",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure, {sym}": "壓強 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume, {sym}": "體積 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature, {sym}": "溫度 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Amount, {sym}": "物質的量 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "Mass, {sym}": "質量 {sym}",

    // widget string (assets/js/widgets-s1-5.js)
    "mass": "質量",

    // widget string (assets/js/widgets-s1-5.js)
    "Formula of the gas": "氣體的化學式",

    // widget string (assets/js/widgets-s1-5.js)
    "formula": "化學式",

    // widget string (assets/js/widgets-s1-5.js)
    "Answer": "答案",

    // widget string (assets/js/widgets-s1-5.js)
    "Unit check": "單位檢查",

    // widget string (assets/js/widgets-s1-5.js)
    "(already in {unit})": "（已經是 {unit}）",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a pressure greater than zero.": "請輸入大於零的壓強。",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a volume greater than zero.": "請輸入大於零的體積。",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a temperature.": "請輸入溫度。",

    // widget string (assets/js/widgets-s1-5.js)
    "The temperature must be above absolute zero (0 K, {T} °C).": "溫度必須高於絕對零度（0 K，{T} °C）。",

    // widget string (assets/js/widgets-s1-5.js)
    "Type a formula using element symbols up to krypton, such as {a} or {b}.": "請用元素符號輸入化學式（最多到氪），例如 {a} 或 {b}。",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter a mass greater than zero.": "請輸入大於零的質量。",

    // widget string (assets/js/widgets-s1-5.js)
    "Enter an amount greater than zero.": "請輸入大於零的物質的量。",

    // widget string (assets/js/widgets-s1-5.js)
    "Waiting for valid values.": "等待有效的數值。",

    // widget string (assets/js/widgets-s1-5.js)
    "then {eq}": "然後 {eq}",

    // widget string (assets/js/widgets-s1-5.js)
    "then {eq} (the same as {eq2})": "然後 {eq}（與 {eq2} 相同）",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} instead of {right} K would give an answer {factor} times too big.": "<b>溫度仍用 °C。</b>用 {wrong} 而不是 {right} K，答案會是正確值的 {factor} 倍，太大了。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} instead of {right} K would give an answer {factor} times too small.": "<b>溫度仍用 °C。</b>用 {wrong} 而不是 {right} K，答案只有正確值的 {factor} 分之一，太小了。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Temperature left in °C.</b> Using {wrong} °C directly would give a zero or negative answer, which is impossible. Always add 273.15 first.": "<b>溫度仍用 °C。</b>直接用 {wrong} °C 會得出零或負數的答案，這是不可能的。一定要先加 273.15。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>{cm3} used as if it were {dm3}.</b> Putting {value} straight in with kPa would make the answer 1000 times too big. 1 {dm3} = 1000 {cm3}.": "<b>把 {cm3} 當作 {dm3} 使用。</b>把 {value} 直接和 kPa 一起代入，答案會是正確值的 1000 倍，太大了。1 {dm3} = 1000 {cm3}。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>{cm3} used as if it were {dm3}.</b> Putting {value} straight in with kPa would make the answer 1000 times too small. 1 {dm3} = 1000 {cm3}.": "<b>把 {cm3} 當作 {dm3} 使用。</b>把 {value} 直接和 kPa 一起代入，答案只有正確值的 1000 分之一，太小了。1 {dm3} = 1000 {cm3}。",

    // widget string (assets/js/widgets-s1-5.js)
    "<b>Mixed unit sets.</b> kPa goes with {dm3}, and Pa goes with {m3}. Pairing kPa with {m3}, or Pa with {dm3}, puts the answer out by a factor of 1000.": "<b>混用兩組單位。</b>kPa 配 {dm3}，Pa 配 {m3}。把 kPa 配 {m3}，或把 Pa 配 {dm3}，答案會相差 1000 倍。",

    // widget string (assets/js/widgets-s1-5.js)
    "Convert to the units you chose": "換算成你選擇的單位",

    // widget string (assets/js/widgets-s1-5.js)
    "Rearrange {eq}": "重排 {eq}",

    // widget string (assets/js/widgets-s1-5.js)
    "({n} significant figures)": "（{n} 位有效數字）",

    // widget string (assets/js/widgets-s1-5.js)
    "In an exam, round to the smallest number of significant figures in the data you were given.": "考試時，按題目所給數據中最少的有效數字位數來取答案。",

    // widget string (assets/js/widgets-s1-5.js)
    "Classic errors to avoid here": "這裏要避免的典型錯誤",

    // widget string (assets/js/widgets-s1-5.js)
    "{p} {times} {v} = J, so it matches R in {Runit}.": "{p} {times} {v} = J，所以與單位是 {Runit} 的 R 配合。",

    // widget string (assets/js/widgets-s1-5.js)
    "small particles, weak forces (for example helium)": "粒子小、引力弱（例如氦）",

    // widget string (assets/js/widgets-s1-5.js)
    "larger particles, stronger forces (for example ammonia)": "粒子較大、引力較強（例如氨）",

    // widget string (assets/js/widgets-s1-5.js)
    "Type of gas": "氣體種類",

    // widget string (assets/js/widgets-s1-5.js)
    "Temperature (0 = very low, 100 = very high)": "溫度（0 = 極低，100 = 極高）",

    // widget string (assets/js/widgets-s1-5.js)
    "Pressure (0 = very low, 100 = very high)": "壓強（0 = 極低，100 = 極高）",

    // widget string (assets/js/widgets-s1-5.js)
    "Pause": "暫停",

    // widget string (assets/js/widgets-s1-5.js)
    "Most ideal conditions": "最理想的條件",

    // widget string (assets/js/widgets-s1-5.js)
    "Least ideal conditions": "最不理想的條件",

    // widget string (assets/js/widgets-s1-5.js)
    "How close to ideal?": "有多接近理想？",

    // widget string (assets/js/widgets-s1-5.js)
    "Particle volume": "粒子體積",

    // widget string (assets/js/widgets-s1-5.js)
    "Intermolecular forces": "分子間引力",

    // widget string (assets/js/widgets-s1-5.js)
    "Remember": "記住",

    // widget string (assets/js/widgets-s1-5.js)
    "Far from ideal": "遠離理想",

    // widget string (assets/js/widgets-s1-5.js)
    "Noticeably non-ideal": "明顯不理想",

    // widget string (assets/js/widgets-s1-5.js)
    "Fairly close to ideal": "頗接近理想",

    // widget string (assets/js/widgets-s1-5.js)
    "Very close to ideal": "非常接近理想",

    // widget string (assets/js/widgets-s1-5.js)
    "negligible: particles are far apart": "可忽略：粒子相距很遠",

    // widget string (assets/js/widgets-s1-5.js)
    "starting to matter": "開始有影響",

    // widget string (assets/js/widgets-s1-5.js)
    "significant: particles are crowded": "顯著：粒子很擠迫",

    // widget string (assets/js/widgets-s1-5.js)
    "a large share of the space": "佔了空間的一大部分",

    // widget string (assets/js/widgets-s1-5.js)
    "negligible: particles are fast and far apart": "可忽略：粒子快而且相距遠",

    // widget string (assets/js/widgets-s1-5.js)
    "significant": "顯著",

    // widget string (assets/js/widgets-s1-5.js)
    "strong effect: particles are slow and close": "影響強：粒子慢而且靠得近",

    // widget string (assets/js/widgets-s1-5.js)
    "Particle volume matters": "粒子體積的影響",

    // widget string (assets/js/widgets-s1-5.js)
    "Intermolecular forces matter": "分子間引力的影響",

    // widget string (assets/js/widgets-s1-5.js)
    "Close to ideal behaviour": "接近理想行為的程度",

    // widget string (assets/js/widgets-s1-5.js)
    "hardly ↔ a lot": "很小 ↔ 很大",

    // widget string (assets/js/widgets-s1-5.js)
    "not at all ↔ very": "完全不接近 ↔ 非常接近",

    // widget string (assets/js/widgets-s1-5.js)
    "This picture is a qualitative illustration. The bars are not calculated from any gas equation, and particle sizes are exaggerated.": "這幅圖只是定性的示意圖。橫條並非由任何氣體方程算出，粒子的大小也經過誇大。",

    // widget string (assets/js/widgets-s1-5.js)
    "A box of gas particles. Higher pressure makes the box smaller so the particles are crowded. Lower temperature makes them slower, and dashed lines show attractions between close neighbours. Three bars below show how much particle volume and intermolecular forces matter and how close the gas is to ideal behaviour.": "一箱氣體粒子。壓強越高，箱子越小，粒子越擠迫。溫度越低，粒子越慢，虛線顯示相鄰粒子之間的吸引。下方三條橫條顯示粒子體積和分子間引力的影響有多大，以及氣體有多接近理想行為。",

    // widget string (assets/js/widgets-s1-5.js)
    "volume at low pressure": "低壓時的體積",

    // widget string (assets/js/widgets-s1-5.js)
    "Play": "播放",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume at STP, V": "STP 下的體積 V",

    // widget string (assets/js/widgets-s1-5.js)
    "{n} mol": "{n} mol",

    // widget string (assets/js/widgets-s1-5.js)
    "Volume at STP": "STP 下的體積",

    // widget string (assets/js/widgets-s1-5.js)
    "Cube side": "立方體邊長",

    // widget string (assets/js/widgets-s1-5.js)
    "Working": "計算步驟",

    // widget string (assets/js/widgets-s1-5.js)
    "A cube holding the chosen amount of gas at STP, drawn to scale beside a football about 22 centimetres across and a 1 cubic decimetre cube. The values are in the readout below.": "一個立方體，裝着所選物質的量的氣體（處於 STP），旁邊按比例畫了一個直徑約 22 厘米的足球和一個 1 立方分米的立方體。數值在下方的讀數中。",

    // widget string (assets/js/widgets-s1-5.js)
    "gas at STP": "STP 下的氣體",

    // widget string (assets/js/widgets-s1-5.js)
    "football": "足球",

    // widget string (assets/js/widgets-s1-5.js)
    "scale: {length} cm": "比例尺：{length} cm",

    // widget string (assets/js/widgets-s1-5.js)
    "{working}. The same for any ideal gas: {examples}.": "{working}。任何理想氣體都一樣：{examples}。",

  }
});
