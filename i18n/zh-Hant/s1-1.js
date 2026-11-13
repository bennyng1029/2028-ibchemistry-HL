/* s1-1 — zh-Hant translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-1', {
  strings: {

    // page title (browser tab)
    "1.1 Particulate nature of matter | Structure Lab": "1.1 物質的粒子本質 | Structure Lab",

    // Introduction to the particulate nature of matter > page header > p
    "Structure 1.1": "Structure 1.1",

    // Introduction to the particulate nature of matter > page header > h1
    "Introduction to the particulate nature of matter": "物質的粒子本質簡介",

    // Introduction to the particulate nature of matter > page header > span
    "How can we model the particulate nature of matter?": "我們怎樣用模型描述物質的粒子本質？",

    // What you need to be able to do > h2
    "What you need to be able to do": "你要做得到的事",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes. Everything in this topic is SL core. There is no Additional HL content in 1.1.": "不看筆記也做得到，就剔選該項。本課題的內容全部屬於 SL 核心內容。1.1 沒有 HL 附加內容。",

    // What you need to be able to do > checklist > span
    "Tell apart elements, compounds and mixtures from their properties.": "根據性質分辨元素、化合物和混合物。",

    // What you need to be able to do > checklist > span
    "Say whether a mixture is homogeneous or heterogeneous, and why.": "指出混合物是均勻還是不均勻，並說明原因。",

    // What you need to be able to do > checklist > span
    "Choose a suitable method to separate a mixture: solvation, filtration, recrystallization, evaporation, distillation or paper chromatography.": "選擇合適的方法分離混合物：溶劑化（溶解）、過濾、再結晶、蒸發、蒸餾或紙色層法。",

    // What you need to be able to do > checklist > span
    "Use the kinetic molecular theory to describe and explain the properties of solids, liquids and gases.": "用分子運動論描述和解釋固體、液體和氣體的性質。",

    // What you need to be able to do > checklist > span
    "Name the six changes of state and say whether each one absorbs or releases energy.": "寫出六種物態變化的名稱，並指出每種變化是吸收還是釋放能量。",

    // What you need to be able to do > checklist > span
    "Use the state symbols (s), (l), (g) and (aq) in chemical equations.": "在化學方程式中使用物態符號 (s)、(l)、(g) 和 (aq)。",

    // What you need to be able to do > checklist > span
    "Interpret what happens to temperature and to the particles during a change of state, for example on a heating curve.": "解讀物態變化期間溫度和粒子有甚麼變化，例如在加熱曲線上。",

    // What you need to be able to do > checklist > span
    "Convert between degrees Celsius and kelvin, and link temperature in kelvin to the average kinetic energy of the particles.": "換算攝氏度和開爾文，並把以開爾文表示的溫度與粒子的平均動能連繫起來。",

    // Elements, compounds and mixtures > h2
    "Elements, compounds and mixtures": "元素、化合物和混合物",

    // Elements, compounds and mixtures > p
    "Think about a glass of sea water. You can get salt out of it by leaving it in the sun. You cannot get hydrogen out of the water that way. The salt and the water are only mixed. The hydrogen and oxygen in the water are chemically bonded. That difference is what this section is about.": "想像一杯海水。把它放在陽光下曬乾，就能得到鹽。但用這個方法，不能從水中得到氫。鹽和水只是混在一起，水裏的氫和氧卻是以化學鍵結合的。這一節要講的就是這個分別。",

    // Elements, compounds and mixtures > p
    "An <dfn data-def=\"A substance that cannot be chemically broken down into simpler substances. It contains only one type of atom.\">element</dfn> is a substance that cannot be chemically broken down into simpler substances. It contains only one type of atom. Examples: copper, <span class=\"chem\">O2</span>, diamond.": "<dfn data-def=\"A substance that cannot be chemically broken down into simpler substances. It contains only one type of atom.\">元素 <span class=\"en-term\">(element)</span></dfn>是不能用化學方法分解成更簡單物質的物質，只含一種原子。例子：銅、<span class=\"chem\">O2</span>、金剛石。",

    // Elements, compounds and mixtures > data-def attribute
    "A substance that cannot be chemically broken down into simpler substances. It contains only one type of atom.": "不能用化學方法分解成更簡單物質的物質，只含一種原子。",

    // Elements, compounds and mixtures > p
    "A <dfn data-def=\"A substance made of atoms of two or more different elements, chemically bonded together in a fixed ratio.\">compound</dfn> is made of atoms of different elements, chemically bonded together in a fixed ratio. Examples: <span class=\"chem\">H2O</span>, <span class=\"chem\">NaCl</span>, <span class=\"chem\">CO2</span>.": "<dfn data-def=\"A substance made of atoms of two or more different elements, chemically bonded together in a fixed ratio.\">化合物 <span class=\"en-term\">(compound)</span></dfn>由不同元素的原子組成，這些原子以化學鍵結合，比例固定。例子：<span class=\"chem\">H2O</span>、<span class=\"chem\">NaCl</span>、<span class=\"chem\">CO2</span>。",

    // Elements, compounds and mixtures > data-def attribute
    "A substance made of atoms of two or more different elements, chemically bonded together in a fixed ratio.": "由兩種或以上不同元素的原子組成的物質，這些原子以化學鍵結合，比例固定。",

    // Elements, compounds and mixtures > p
    "A <dfn data-def=\"More than one element or compound, in no fixed ratio, not chemically bonded to each other. It can be separated by physical methods.\">mixture</dfn> contains more than one element or compound, in no fixed ratio. The parts are not chemically bonded to each other, so they can be separated by physical methods. Examples: air, sea water.": "<dfn data-def=\"More than one element or compound, in no fixed ratio, not chemically bonded to each other. It can be separated by physical methods.\">混合物 <span class=\"en-term\">(mixture)</span></dfn>含有多於一種元素或化合物，比例不固定。各成分之間沒有以化學鍵結合，所以可以用物理方法分離。例子：空氣、海水。",

    // Elements, compounds and mixtures > data-def attribute
    "More than one element or compound, in no fixed ratio, not chemically bonded to each other. It can be separated by physical methods.": "含有多於一種元素或化合物，比例不固定，各成分之間沒有以化學鍵結合。可以用物理方法分離。",

    // Elements, compounds and mixtures > key idea > p
    "A compound has different properties from the elements in it. A mixture keeps the properties of its parts. That is why a mixture can be separated by physical methods and a compound cannot.": "化合物的性質與組成它的元素不同。混合物則保留各成分的性質。所以混合物可以用物理方法分離，化合物卻不可以。",

    // Elements, compounds and mixtures > table > caption
    "Three kinds of matter": "三類物質",

    // Elements, compounds and mixtures > table > th
    "Type": "類別",

    // Elements, compounds and mixtures > table > th
    "Examples": "例子",

    // Elements, compounds and mixtures > table > th
    "Composition": "組成",

    // Elements, compounds and mixtures > table > th
    "Properties": "性質",

    // Elements, compounds and mixtures > table > th
    "How to separate the parts": "怎樣分離各成分",

    // Elements, compounds and mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Element": "元素",

    // Elements, compounds and mixtures > table > td
    "copper, <span class=\"chem\">O2</span>": "銅、<span class=\"chem\">O2</span>",

    // Elements, compounds and mixtures > table > td
    "one type of atom": "一種原子",

    // Elements, compounds and mixtures > table > td
    "its own fixed properties": "有自己固定的性質",

    // Elements, compounds and mixtures > table > td
    "cannot be broken down chemically": "不能用化學方法分解",

    // Elements, compounds and mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Compound": "化合物",

    // Elements, compounds and mixtures > table > td
    "<span class=\"chem\">NaCl</span>, <span class=\"chem\">CO2</span>": "<span class=\"chem\">NaCl</span>、<span class=\"chem\">CO2</span>",

    // Elements, compounds and mixtures > table > td
    "different elements, bonded, fixed ratio": "不同元素，以化學鍵結合，比例固定",

    // Elements, compounds and mixtures > table > td
    "different from its elements": "與組成它的元素不同",

    // Elements, compounds and mixtures > table > td
    "chemical reaction only": "只能用化學反應",

    // Elements, compounds and mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Mixture": "混合物",

    // Elements, compounds and mixtures > table > td
    "air, sea water": "空氣、海水",

    // Elements, compounds and mixtures > table > td
    "no fixed ratio, not bonded to each other": "比例不固定，各成分之間沒有化學鍵",

    // Elements, compounds and mixtures > table > td
    "each part keeps its own": "各成分保留自己的性質",

    // Elements, compounds and mixtures > table > td
    "physical methods": "物理方法",

    // Elements, compounds and mixtures > p
    "Here is one example of “different properties”. Sodium is a soft metal that reacts violently with water. Chlorine is a toxic yellow-green gas. The compound sodium chloride is the white solid you put on food.": "這裏有一個「性質不同」的例子。鈉是質軟的金屬，遇水會劇烈反應。氯是有毒的黃綠色氣體。兩者形成的化合物氯化鈉，卻是你撒在食物上的白色固體。",

    // Elements, compounds and mixtures > common mistake > p
    "“Pure” in everyday speech means natural or clean. In chemistry a pure substance is a single element or a single compound. Pure orange juice is a mixture.": "日常用語中的「純」，意思是天然或潔淨。在化學裏，純物質是指單一種元素或單一種化合物。「純橙汁」其實是混合物。",

    // Elements, compounds and mixtures > common mistake > p
    "An element is not always single atoms. <span class=\"chem\">O2</span>, <span class=\"chem\">N2</span> and <span class=\"chem\">Cl2</span> are molecules, but each contains only one type of atom, so each is an element.": "元素不一定以單個原子存在。<span class=\"chem\">O2</span>、<span class=\"chem\">N2</span> 和 <span class=\"chem\">Cl2</span> 都是分子，但每種分子只含一種原子，所以都是元素。",

    // Elements, compounds and mixtures > h3
    "Homogeneous and heterogeneous mixtures": "均勻混合物和不均勻混合物",

    // Elements, compounds and mixtures > p
    "Stir salt into water and it disappears. Stir sand into water and you still see the sand. Both are mixtures, but they are different kinds.": "把鹽放進水裏攪拌，鹽會消失不見。把沙放進水裏攪拌，仍然看得見沙。兩者都是混合物，但種類不同。",

    // Elements, compounds and mixtures > p
    "A <dfn data-def=\"A mixture with the same composition and properties throughout. You cannot see separate parts.\">homogeneous mixture</dfn> has the same composition and properties throughout. You cannot see separate parts. Solutions are homogeneous. So is air.": "<dfn data-def=\"A mixture with the same composition and properties throughout. You cannot see separate parts.\">均勻混合物 <span class=\"en-term\">(homogeneous mixture)</span></dfn>各處的組成和性質都相同，看不到分開的成分。溶液是均勻混合物，空氣也是。",

    // Elements, compounds and mixtures > data-def attribute
    "A mixture with the same composition and properties throughout. You cannot see separate parts.": "各處的組成和性質都相同的混合物。看不到分開的成分。",

    // Elements, compounds and mixtures > p
    "A <dfn data-def=\"A mixture whose composition is not the same throughout. It has separate regions with different properties.\">heterogeneous mixture</dfn> does not have the same composition throughout. It has separate regions with different properties. Sand in water and oil on water are heterogeneous.": "<dfn data-def=\"A mixture whose composition is not the same throughout. It has separate regions with different properties.\">不均勻混合物 <span class=\"en-term\">(heterogeneous mixture)</span></dfn>各處的組成並不相同，有性質不同的獨立區域。沙和水、浮在水面的油，都是不均勻混合物。",

    // Elements, compounds and mixtures > data-def attribute
    "A mixture whose composition is not the same throughout. It has separate regions with different properties.": "各處的組成並不相同的混合物，有性質不同的獨立區域。",

    // Elements, compounds and mixtures > common mistake > p
    "A homogeneous mixture is not a compound. Salt water looks like one substance, but the salt and water are not chemically bonded in a fixed ratio. You can add more salt, and you can get the salt back by evaporating the water.": "均勻混合物不是化合物。鹽水看來像單一種物質，但鹽和水並不是以固定比例用化學鍵結合的。你可以多加一些鹽，也可以把水蒸發掉，取回鹽。",

    // Elements, compounds and mixtures > widget > data-title attribute
    "Classify it": "物質分類",

    // Elements, compounds and mixtures > widget > figcaption
    "Pick a substance, then choose its box. Ask two questions each time. Is it one substance or more than one? If it is one, how many types of atom? If it is more than one, can you see separate parts?": "先選一種物質，再選它所屬的類別。每次問自己兩個問題。它是一種物質，還是多於一種？如果是一種，它含有多少種原子？如果多於一種，看得見分開的成分嗎？",

    // Elements, compounds and mixtures > exam tip (shown in English + translation) > p
    "To “distinguish between an element and a compound”, give one clear statement about each. An element contains only one type of atom. A compound contains atoms of different elements chemically bonded in a fixed ratio. If a question asks for a physical property that differs, do not give a chemical property or a molar mass.": "題目要求「區分 (distinguish) 元素和化合物」時，為兩者各寫一句清晰的陳述。元素只含一種原子。化合物含有不同元素的原子，這些原子以化學鍵結合，比例固定。如果題目問的是哪一種物理性質不同，不要答化學性質或摩爾質量。",

    // Elements, compounds and mixtures > not needed for IB > p
    "You do not need colloids, suspensions or emulsions as separate categories. Homogeneous and heterogeneous are enough. Why particular substances do or do not mix is explained with intermolecular forces later, in Structure 2.2.": "你不需要把膠體、懸浮液或乳濁液當作獨立的類別來學，知道均勻和不均勻就足夠。某些物質為甚麼能夠或不能夠混合，要用分子間引力來解釋，稍後會在 Structure 2.2 學到。",

    // Elements, compounds and mixtures > data-title attribute
    "Elements, compounds and mixtures: quick check": "元素、化合物和混合物：快速小測",

    // Separating mixtures > data-toc attribute
    // Separating mixtures > h2
    "Separating mixtures": "分離混合物",

    // Separating mixtures > p
    "Making coffee uses two separation techniques. Hot water dissolves the flavour compounds out of the ground beans. Then a paper filter holds back the grounds and lets the solution through.": "沖咖啡用了兩種分離技術。熱水把咖啡粉裏的香味化合物溶解出來。然後濾紙擋住咖啡渣，讓溶液通過。",

    // Separating mixtures > p
    "Every separation works the same way. You find a <strong>physical property that is different</strong> for the parts of the mixture, and you pick a technique that uses that difference.": "所有分離方法的原理都一樣。先找出混合物各成分<strong>不同的物理性質</strong>，再選用利用這個差異的技術。",

    // Separating mixtures > table > caption
    "The six techniques named in the syllabus": "課程大綱列明的六種技術",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Technique": "技術",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Property that differs": "不同的性質",

    // Separating mixtures > table > th
    "What it separates": "分離甚麼",

    // Separating mixtures > table > th
    "Words to use": "要用的字詞",

    // Separating mixtures > table > th
    "Solvation (dissolving)": "溶劑化（溶解）",

    // Separating mixtures > table > td
    "solubility in a chosen solvent": "在所選溶劑中的溶解度",

    // Separating mixtures > table > td
    "a soluble solid from an insoluble solid (first step)": "可溶固體和不溶固體（第一步）",

    // Separating mixtures > table > td
    "solute, solvent, solution": "溶質 (solute)、溶劑 (solvent)、溶液 (solution)",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Filtration": "過濾",

    // Separating mixtures > table > td
    "particle size: an undissolved solid cannot pass through filter paper": "粒子大小：未溶解的固體不能通過濾紙",

    // Separating mixtures > table > td
    "an insoluble solid from a liquid or solution": "不溶固體和液體或溶液",

    // Separating mixtures > table > td
    "residue (on the paper), filtrate (passes through)": "殘餘物 (residue)：留在濾紙上；濾液 (filtrate)：通過濾紙",

    // Separating mixtures > table > th
    // Changes of state and state symbols > table > th
    "Evaporation": "蒸發",

    // Separating mixtures > table > td
    "volatility: the solvent turns to vapour, the dissolved solid does not": "揮發性：溶劑會變成蒸氣，溶解了的固體不會",

    // Separating mixtures > table > td
    "a dissolved solid from its solvent (you keep the solid)": "溶解了的固體和溶劑（保留固體）",

    // Separating mixtures > table > td
    "heat to evaporate, then leave to crystallize": "加熱蒸發 (evaporate)，然後靜置結晶 (crystallize)",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Distillation": "蒸餾",

    // Separating mixtures > table > td
    "volatility (boiling point)": "揮發性（沸點）",

    // Separating mixtures > table > td
    "a solvent from a solution, or two liquids that mix and have different boiling points (you keep the liquid)": "溶液中的溶劑，或兩種互溶而沸點不同的液體（保留液體）",

    // Separating mixtures > table > td
    "boil, condense, distillate": "沸騰 (boil)、凝結 (condense)、餾液 (distillate)",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Recrystallization": "再結晶",

    // Separating mixtures > table > td
    "solubility in hot solvent compared with cold solvent": "在熱溶劑和冷溶劑中的溶解度不同",

    // Separating mixtures > table > td
    "a solid product from small amounts of impurities": "固體生成物和少量雜質",

    // Separating mixtures > table > td
    "minimum volume of hot solvent, cool, filter, rinse, dry": "最少量的熱溶劑 (minimum volume of hot solvent)、冷卻、過濾、沖洗、弄乾",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Paper chromatography": "紙色層法",

    // Separating mixtures > table > td
    "how strongly each part is attracted to the paper compared with the moving solvent": "各成分受紙吸引的強弱（與流動的溶劑相比）",

    // Separating mixtures > table > td
    "small amounts of dissolved substances, such as dyes": "少量溶解了的物質，例如染料",

    // Separating mixtures > table > td
    "baseline, solvent front, spots": "基線 (baseline)、溶劑前沿 (solvent front)、斑點 (spots)",

    // Separating mixtures > p
    "<dfn data-def=\"The process in which particles of a solute become surrounded by solvent particles and spread out through the solvent. In everyday words: dissolving.\">Solvation</dfn> is the chemist’s word for dissolving: solvent particles surround the solute particles and carry them into the liquid. A liquid is <dfn data-def=\"A volatile liquid turns to vapour easily. It has a low boiling point.\">volatile</dfn> if it turns to vapour easily, which means it has a low boiling point.": "<dfn data-def=\"The process in which particles of a solute become surrounded by solvent particles and spread out through the solvent. In everyday words: dissolving.\">溶劑化 <span class=\"en-term\">(solvation)</span></dfn>是化學家對「溶解」的說法：溶劑粒子包圍溶質粒子，把它們帶進液體裏。液體如果容易變成蒸氣，就是<dfn data-def=\"A volatile liquid turns to vapour easily. It has a low boiling point.\">易揮發 <span class=\"en-term\">(volatile)</span></dfn>的，也就是說它的沸點低。",

    // Separating mixtures > data-def attribute
    "The process in which particles of a solute become surrounded by solvent particles and spread out through the solvent. In everyday words: dissolving.": "溶質粒子被溶劑粒子包圍，並分散到整個溶劑中的過程。用日常的話說，就是溶解。",

    // Separating mixtures > data-def attribute
    "A volatile liquid turns to vapour easily. It has a low boiling point.": "易揮發的液體容易變成蒸氣，沸點低。",

    // Separating mixtures > widget > data-title attribute
    "What each technique looks like": "每種技術的裝置",

    // Separating mixtures > widget > data-kicker attribute
    "Diagrams": "圖解",

    // Separating mixtures > widget > figcaption
    "Choose a technique to see a labelled diagram. These are simple sketches, not drawn to scale. Notice where each part of the mixture ends up.": "選一種技術，看看附有標示的圖。這些只是簡單的示意圖，並非按比例繪畫。留意混合物的每個成分最後去了哪裏。",

    // Separating mixtures > h3
    "How to choose a technique": "怎樣選擇技術",

    // Separating mixtures > li
    "List what is in the mixture and the state of each part: solid, liquid or dissolved.": "列出混合物裏有甚麼，以及每個成分的狀態：固體、液體，還是已溶解。",

    // Separating mixtures > li
    "Decide which part you want to keep.": "決定你想保留哪個成分。",

    // Separating mixtures > li
    "Find a physical property that is different: solubility, particle size, boiling point, or attraction to paper.": "找出一種不同的物理性質：溶解度、粒子大小、沸點，或受紙吸引的程度。",

    // Separating mixtures > li
    "Pick the technique that uses that difference. Use more than one step if you need to.": "選用利用這個差異的技術。有需要時可以用多於一個步驟。",

    // Separating mixtures > li
    "Finish the job: dry a solid, or evaporate the solvent from a filtrate.": "做好最後一步：把固體弄乾，或把濾液中的溶劑蒸發掉。",

    // Separating mixtures > widget > data-title attribute
    "Separation chooser": "分離方法選擇器",

    // Separating mixtures > widget > figcaption
    "Choose a mixture, then answer the two steps. Notice that the same property difference can lead to different techniques. It depends on which part you want to keep.": "選一種混合物，然後回答兩個步驟。留意：同一種性質差異，可以對應不同的技術，視乎你想保留哪個成分。",

    // Separating mixtures > worked example > data-kicker attribute
    "Worked example: planning a separation": "例題：計劃分離步驟",

    // Separating mixtures > worked example > h3
    "Getting dry sand and dry salt from a mixture of the two": "從沙和鹽的混合物中取得乾的沙和乾的鹽",

    // Separating mixtures > worked example > p
    "A student has a dry mixture of sand and salt (sodium chloride). Outline how to obtain a dry sample of each solid.": "一名學生有一份沙和食鹽（氯化鈉）的乾混合物。概述 (outline) 怎樣取得每種固體的乾燥樣本。",

    // Separating mixtures > worked example > data-title attribute
    "Find the property that differs": "找出不同的性質",

    // Separating mixtures > worked example > p
    "Every separation starts from a difference in a physical property.": "每一種分離方法都從物理性質的差異入手。",

    // Separating mixtures > worked example > p
    "Salt is soluble in water. Sand is insoluble in water.": "鹽可溶於水。沙不溶於水。",

    // Separating mixtures > worked example > data-title attribute
    "Dissolve the salt": "把鹽溶解",

    // Separating mixtures > worked example > p
    "Solvation moves the salt into the liquid and leaves the sand as a solid.": "溶劑化使鹽進入液體，沙則仍然是固體。",

    // Separating mixtures > worked example > p
    "Add distilled water to the mixture and stir until no more solid dissolves.": "在混合物中加入蒸餾水，攪拌至固體不再溶解。",

    // Separating mixtures > worked example > data-title attribute
    "Filter": "過濾",

    // Separating mixtures > worked example > p
    "The undissolved sand grains cannot pass through filter paper. The dissolved salt can.": "未溶解的沙粒不能通過濾紙。溶解了的鹽可以通過。",

    // Separating mixtures > worked example > p
    "Pour the mixture through filter paper in a funnel. Sand is the residue. Salt solution is the filtrate.": "把混合物倒進放有濾紙的漏斗。沙是殘餘物，鹽溶液是濾液。",

    // Separating mixtures > worked example > data-title attribute
    "Finish the sand": "處理沙",

    // Separating mixtures > worked example > p
    "The sand is wet, and it has salt solution on it.": "沙是濕的，表面還沾有鹽溶液。",

    // Separating mixtures > worked example > p
    "Rinse the residue with a little distilled water, then leave it to dry.": "用少量蒸餾水沖洗殘餘物，然後放着讓它變乾。",

    // Separating mixtures > worked example > data-title attribute
    "Finish the salt": "處理鹽",

    // Separating mixtures > worked example > p
    "The salt is still dissolved. Water is volatile and salt is not.": "鹽仍然溶解在水中。水易揮發，鹽不易揮發。",

    // Separating mixtures > worked example > p
    "Heat the filtrate to evaporate the water. Leave it to crystallize, then dry the crystals.": "加熱濾液，把水蒸發掉。靜置讓它結晶，然後把晶體弄乾。",

    // Separating mixtures > worked example > p
    "Add water and stir, filter, rinse and dry the residue (sand), evaporate the water from the filtrate and dry the crystals (salt).": "加水並攪拌，過濾，沖洗殘餘物（沙）並弄乾，把濾液中的水蒸發掉，再把晶體（鹽）弄乾。",

    // Separating mixtures > exam tip (shown in English + translation) > p
    "In a separation plan, each workable step in a sensible order earns a mark. The steps students forget are the last ones: drying the residue and evaporating the filtrate. Use any physical property the question gives you. For example, if one solid is magnetic, remove it with a magnet first.": "在分離計劃中，每個可行而次序合理的步驟都可得分。學生最常忘記的是最後的步驟：把殘餘物弄乾和蒸發濾液。題目提供的任何物理性質都可以利用。例如，如果其中一種固體有磁性，就先用磁鐵把它取走。",

    // Separating mixtures > h3
    "Recrystallization, step by step": "再結晶的步驟",

    // Separating mixtures > p
    "Recrystallization purifies a solid that contains small amounts of impurities. It works when the solid is very soluble in the hot solvent and much less soluble in the cold solvent.": "再結晶用來提純含有少量雜質的固體。條件是這種固體在熱溶劑中的溶解度很高，在冷溶劑中的溶解度卻低得多。",

    // Separating mixtures > li
    "Dissolve the impure solid in the <strong>minimum volume of hot solvent</strong>.": "用<strong>最少量的熱溶劑</strong>溶解不純的固體。",

    // Separating mixtures > li
    "Filter the solution while it is hot. Insoluble impurities stay on the filter paper.": "趁熱過濾溶液。不溶的雜質留在濾紙上。",

    // Separating mixtures > li
    "Let the filtrate cool. The product is less soluble in cold solvent, so it forms crystals. Soluble impurities are present in small amounts, so they stay dissolved.": "讓濾液冷卻。生成物在冷溶劑中的溶解度較低，所以形成晶體。可溶的雜質只有少量，所以仍然溶解在溶劑中。",

    // Separating mixtures > li
    "Filter to collect the crystals.": "過濾，收集晶體。",

    // Separating mixtures > li
    "Rinse the crystals with a little <strong>cold</strong> solvent, then dry them.": "用少量<strong>冷</strong>溶劑沖洗晶體，然後弄乾。",

    // Separating mixtures > common mistake > p
    "Using plenty of hot solvent “to be safe” loses product. The more solvent there is, the more product stays dissolved after cooling, so fewer crystals form. The same idea explains the cold rinse: warm solvent would dissolve some of your crystals again.": "為了「保險」而用大量熱溶劑，反而會損失生成物。溶劑越多，冷卻後仍然溶解的生成物就越多，形成的晶體就越少。用冷溶劑沖洗也是同一道理：暖的溶劑會把部分晶體再次溶解。",

    // Separating mixtures > h3
    "Paper chromatography in practice": "紙色層法的實際操作",

    // Separating mixtures > p
    "Draw the baseline in pencil, because pencil does not dissolve in the solvent. Put a small spot of the mixture on the baseline. Stand the paper in a little solvent, with the solvent level <strong>below</strong> the baseline. If the spot started under the solvent, the dyes would dissolve into the beaker instead of moving up the paper. A pure substance gives one spot. A mixture gives more than one.": "用鉛筆畫基線，因為鉛筆痕不會溶於溶劑。在基線上點一小點混合物。把紙豎立在少量溶劑中，溶劑的液面要<strong>低於</strong>基線。如果斑點一開始就浸在溶劑裏，染料會溶進燒杯的溶劑中，而不會沿紙向上移動。純物質只有一個斑點，混合物則有多於一個。",

    // Separating mixtures > not needed for IB > p
    "You do not need retardation factor (R<sub>f</sub>) calculations or the terms stationary phase and mobile phase in this topic. They come later, in Structure 2.2, together with thin layer chromatography. You also do not need the details of fractionating columns, centrifuges or separating funnels here.": "本課題不需要計算 R<sub>f</sub> 值 (retardation factor)，也不需要用「固定相」和「流動相」這兩個詞。這些內容連同薄層色層法，稍後會在 Structure 2.2 學到。這裏也不需要知道分餾柱、離心機或分液漏斗的細節。",

    // Separating mixtures > data-title attribute
    "Separating mixtures: quick check": "分離混合物：快速小測",

    // The kinetic molecular theory and states of matter > data-toc attribute
    "States of matter": "物態",

    // The kinetic molecular theory and states of matter > h2
    "The kinetic molecular theory and states of matter": "分子運動論和物態",

    // The kinetic molecular theory and states of matter > p
    "An ice cube keeps its shape on a plate. When it melts, the water spreads out. When the water boils away, the steam fills the kitchen. It is the same substance, <span class=\"chem\">H2O</span>, each time. What changes is how its particles are arranged and how they move.": "冰塊放在碟上，會保持形狀。冰熔化後，水會流散開來。水沸騰變成水蒸氣後，會充滿整個廚房。每一次都是同一種物質 <span class=\"chem\">H2O</span>。改變的是粒子的排列方式和運動方式。",

    // The kinetic molecular theory and states of matter > p
    "The <dfn data-def=\"A model that explains the physical properties of solids, liquids and gases, and changes of state, in terms of particles that are always moving.\">kinetic molecular theory</dfn> is a model. It says that all matter is made of particles that are always moving, and that there are forces of attraction between them. With those two ideas you can explain the physical properties of solids, liquids and gases.": "<dfn data-def=\"A model that explains the physical properties of solids, liquids and gases, and changes of state, in terms of particles that are always moving.\">分子運動論 <span class=\"en-term\">(kinetic molecular theory)</span></dfn>是一個模型。它指出所有物質都由不停運動的粒子組成，而粒子之間有引力。憑這兩點，就可以解釋固體、液體和氣體的物理性質。",

    // The kinetic molecular theory and states of matter > data-def attribute
    "A model that explains the physical properties of solids, liquids and gases, and changes of state, in terms of particles that are always moving.": "一個模型，用不停運動的粒子來解釋固體、液體和氣體的物理性質，以及物態變化。",

    // The kinetic molecular theory and states of matter > table > caption
    "Solids, liquids and gases in the particle model": "粒子模型中的固體、液體和氣體",

    // The kinetic molecular theory and states of matter > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Solid": "固體",

    // The kinetic molecular theory and states of matter > table > th
    // What happens to temperature during a change of state > worked example > p
    // widget string (assets/js/widgets-s1-1.js)
    "Liquid": "液體",

    // The kinetic molecular theory and states of matter > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Gas": "氣體",

    // The kinetic molecular theory and states of matter > table > th
    "Arrangement": "排列",

    // The kinetic molecular theory and states of matter > table > td
    "regular, fixed positions": "有規律，位置固定",

    // The kinetic molecular theory and states of matter > table > td
    "random": "不規則",

    // The kinetic molecular theory and states of matter > table > th
    "Spacing": "間距",

    // The kinetic molecular theory and states of matter > table > td
    "close together": "靠得很近",

    // The kinetic molecular theory and states of matter > table > td
    "far apart": "相距很遠",

    // The kinetic molecular theory and states of matter > table > th
    "Movement": "運動",

    // The kinetic molecular theory and states of matter > table > td
    "vibrate about fixed positions": "在固定位置振動",

    // The kinetic molecular theory and states of matter > table > td
    "move past each other": "互相滑過",

    // The kinetic molecular theory and states of matter > table > td
    "move quickly in all directions": "向各個方向快速運動",

    // The kinetic molecular theory and states of matter > table > th
    "Attractions between particles": "粒子間的引力",

    // The kinetic molecular theory and states of matter > table > td
    "strong enough to hold particles in place": "強得足以把粒子固定在原位",

    // The kinetic molecular theory and states of matter > table > td
    "hold particles close, but not in place": "使粒子靠近，但不能固定在原位",

    // The kinetic molecular theory and states of matter > table > td
    "very weak, because the particles are far apart": "非常弱，因為粒子相距很遠",

    // The kinetic molecular theory and states of matter > table > th
    "Shape": "形狀",

    // The kinetic molecular theory and states of matter > table > td
    "fixed": "固定",

    // The kinetic molecular theory and states of matter > table > td
    "takes the shape of its container": "隨容器的形狀改變",

    // The kinetic molecular theory and states of matter > table > td
    "fills its container": "充滿整個容器",

    // The kinetic molecular theory and states of matter > table > th
    "Volume": "體積",

    // The kinetic molecular theory and states of matter > table > td
    "not fixed: fills its container": "不固定：充滿整個容器",

    // The kinetic molecular theory and states of matter > table > th
    "Can it be compressed?": "可以壓縮嗎？",

    // The kinetic molecular theory and states of matter > table > td
    "no (almost)": "（幾乎）不可以",

    // The kinetic molecular theory and states of matter > table > td
    "yes, easily": "可以，很容易",

    // The kinetic molecular theory and states of matter > widget > data-title attribute
    "Particle model: solid, liquid, gas": "粒子模型：固體、液體、氣體",

    // The kinetic molecular theory and states of matter > widget > figcaption
    "Choose a substance and move the temperature slider. Watch the arrangement, the spacing and the movement. This is a model: it is flat (2-D), it shows only 48 particles, and it is not to scale. In a real gas at room pressure the particles are about ten times further apart than in the liquid. Speeds are only a guide. The model also does not show that ice is slightly less dense than liquid water, which is unusual. Melting and boiling points are rounded to the nearest degree, at normal atmospheric pressure.": "選一種物質，然後移動溫度滑桿。觀察粒子的排列、間距和運動。這只是模型：它是平面的 (2-D)，只顯示 48 個粒子，而且不按比例。在室內壓強下的真實氣體中，粒子之間的距離大約是液體中的十倍。速率只供參考。模型也沒有顯示冰的密度比液態水略低這個不尋常的特點。熔點和沸點是正常大氣壓強下的數值，取至最接近的整數度。",

    // The kinetic molecular theory and states of matter > key idea > p
    "Link each property to the particles. Solids and liquids are hard to compress because their particles are already close together. Gases are easy to compress because there is a lot of empty space between the particles. Liquids and gases flow because their particles can move past each other.": "把每種性質與粒子連繫起來。固體和液體難以壓縮，因為粒子本來已經靠得很近。氣體容易壓縮，因為粒子之間有很多空間。液體和氣體能夠流動，因為粒子可以互相滑過。",

    // The kinetic molecular theory and states of matter > common mistake > p
    "The particles themselves do not expand, melt or get hot. When a substance is heated, its particles move faster and usually move further apart. Each particle stays the same size.": "粒子本身不會膨脹、熔化或變熱。物質受熱時，粒子運動得更快，粒子之間的距離通常也會增加。每個粒子的大小保持不變。",

    // The kinetic molecular theory and states of matter > exam tip (shown in English + translation) > p
    "When you describe a state, cover three things: arrangement, spacing and movement. For example, for a liquid: “particles are close together, randomly arranged, and move past each other”.": "描述一種物態時，要包括三方面：排列、間距和運動。以液體為例：「粒子靠得很近，排列不規則，可以互相滑過」。",

    // The kinetic molecular theory and states of matter > not needed for IB > p
    "You do not need other states such as plasma, or phase diagrams and triple points. Why one substance is a solid and another a gas at room temperature depends on the bonding and the forces between particles. That comes in Structure 2.": "你不需要學等離子體等其他物態，也不需要學相圖和三相點。一種物質在室溫下是固體，另一種卻是氣體，原因在於鍵合和粒子間的作用力。這些內容會在 Structure 2 學到。",

    // Changes of state and state symbols > data-toc attribute
    "Changes of state": "物態變化",

    // Changes of state and state symbols > h2
    "Changes of state and state symbols": "物態變化和物態符號",

    // Changes of state and state symbols > p
    "A puddle dries up. A cold window mists over. Frost forms on a freezing night without any liquid water appearing first. Each of these is a change of state, and each has a name you need to know.": "水窪乾了。冰冷的窗上蒙了一層霧氣。嚴寒的夜裏結了霜，卻沒有先出現液態水。這些都是物態變化，每一種都有你需要知道的名稱。",

    // Changes of state and state symbols > aria-label attribute
    "Diagram of the six changes of state. Solid to liquid is melting. Liquid to gas is vaporization. Solid to gas is sublimation. These three absorb energy. Gas to liquid is condensation. Liquid to solid is freezing. Gas to solid is deposition. These three release energy.": "六種物態變化的示意圖。固體變液體是熔化。液體變氣體是汽化。固體變氣體是昇華。這三種變化吸收能量。氣體變液體是凝結。液體變固體是凝固。氣體變固體是凝華。這三種變化釋放能量。",

    // Changes of state and state symbols > figcaption
    "The six changes of state. Changes that overcome attractions between particles absorb energy. Changes in which attractions form between particles release energy.": "六種物態變化。克服粒子間引力的變化會吸收能量。粒子間形成引力的變化會釋放能量。",

    // Changes of state and state symbols > table > caption
    "Names of the changes of state": "物態變化的名稱",

    // Changes of state and state symbols > table > th
    "Change": "變化",

    // Changes of state and state symbols > table > th
    "Name": "名稱",

    // Changes of state and state symbols > table > th
    "Energy": "能量",

    // Changes of state and state symbols > table > th
    "Example": "例子",

    // Changes of state and state symbols > table > th
    "solid → liquid": "固體 → 液體",

    // Changes of state and state symbols > table > td
    // widget string (assets/js/widgets-s1-1.js)
    "melting": "熔化 (melting)",

    // Changes of state and state symbols > table > td
    "absorbed (endothermic)": "吸收（吸熱）",

    // Changes of state and state symbols > table > td
    "ice melting in a drink": "飲品中的冰熔化",

    // Changes of state and state symbols > table > th
    "liquid → gas": "液體 → 氣體",

    // Changes of state and state symbols > table > td
    "vaporization (evaporation or boiling)": "汽化 (vaporization)，即蒸發 (evaporation) 或沸騰 (boiling)",

    // Changes of state and state symbols > table > td
    "a puddle drying, a kettle boiling": "水窪變乾、水壺裏的水沸騰",

    // Changes of state and state symbols > table > th
    "solid → gas": "固體 → 氣體",

    // Changes of state and state symbols > table > td
    "sublimation": "昇華 (sublimation)",

    // Changes of state and state symbols > table > td
    "dry ice, <span class=\"chem\">CO2(s)</span>, turning to gas": "乾冰 <span class=\"chem\">CO2(s)</span> 變成氣體",

    // Changes of state and state symbols > table > th
    "gas → liquid": "氣體 → 液體",

    // Changes of state and state symbols > table > td
    "condensation": "凝結 (condensation)",

    // Changes of state and state symbols > table > td
    "released (exothermic)": "釋放（放熱）",

    // Changes of state and state symbols > table > td
    "mist on a cold window": "冰冷窗上的霧氣",

    // Changes of state and state symbols > table > th
    "liquid → solid": "液體 → 固體",

    // Changes of state and state symbols > table > td
    "freezing": "凝固 (freezing)",

    // Changes of state and state symbols > table > td
    "water turning to ice": "水結成冰",

    // Changes of state and state symbols > table > th
    "gas → solid": "氣體 → 固體",

    // Changes of state and state symbols > table > td
    "deposition": "凝華 (deposition)",

    // Changes of state and state symbols > table > td
    "frost forming on cold glass": "冰冷的玻璃上結霜",

    // Changes of state and state symbols > h3
    "Why energy goes in or comes out": "為甚麼要吸收或釋放能量",

    // Changes of state and state symbols > p
    "There are forces of attraction between particles. To melt, vaporize or sublime a substance, the particles must overcome some or all of those attractions. That needs energy, so these changes are <dfn data-def=\"A change that absorbs energy from the surroundings.\">endothermic</dfn>: they absorb energy from the surroundings.": "粒子之間有引力。物質要熔化、汽化或昇華，粒子必須克服部分或全部引力。這需要能量，所以這些變化是<dfn data-def=\"A change that absorbs energy from the surroundings.\">吸熱 <span class=\"en-term\">(endothermic)</span></dfn>變化：它們從周圍環境吸收能量。",

    // Changes of state and state symbols > data-def attribute
    "A change that absorbs energy from the surroundings.": "從周圍環境吸收能量的變化。",

    // Changes of state and state symbols > p
    "In the opposite changes, attractions form between the particles and hold them more strongly. That releases energy to the surroundings, so condensation, freezing and deposition are <dfn data-def=\"A change that releases energy to the surroundings.\">exothermic</dfn>.": "在相反方向的變化中，粒子之間形成引力，粒子被吸得更緊。這會向周圍環境釋放能量，所以凝結、凝固和凝華是<dfn data-def=\"A change that releases energy to the surroundings.\">放熱 <span class=\"en-term\">(exothermic)</span></dfn>變化。",

    // Changes of state and state symbols > data-def attribute
    "A change that releases energy to the surroundings.": "向周圍環境釋放能量的變化。",

    // Changes of state and state symbols > common mistake > p
    "Freezing releases energy. It feels wrong because freezing happens in cold places. But the water must lose energy to its colder surroundings in order to freeze. Energy leaves the water, so the change is exothermic.": "凝固會釋放能量。這聽起來不對勁，因為凝固在寒冷的地方發生。但水必須把能量傳給較冷的周圍環境，才能凝固。能量離開了水，所以這個變化是放熱的。",

    // Changes of state and state symbols > h3
    "Evaporation and boiling are both vaporization": "蒸發和沸騰都是汽化",

    // Changes of state and state symbols > table > caption
    "Two ways for a liquid to become a gas": "液體變成氣體的兩種方式",

    // Changes of state and state symbols > table > th
    "Boiling": "沸騰",

    // Changes of state and state symbols > table > th
    "Where?": "在哪裏發生？",

    // Changes of state and state symbols > table > td
    "at the surface only": "只在液面",

    // Changes of state and state symbols > table > td
    "throughout the liquid (bubbles of vapour form)": "在整個液體內（形成蒸氣泡）",

    // Changes of state and state symbols > table > th
    "At what temperature?": "在甚麼溫度發生？",

    // Changes of state and state symbols > table > td
    "any temperature below the boiling point": "低於沸點的任何溫度",

    // Changes of state and state symbols > table > td
    "at the boiling point": "在沸點",

    // Changes of state and state symbols > table > th
    "Which particles?": "哪些粒子？",

    // Changes of state and state symbols > table > td
    "the faster particles at the surface escape": "液面上運動較快的粒子逃逸",

    // Changes of state and state symbols > table > td
    "particles all through the liquid": "整個液體內的粒子",

    // Changes of state and state symbols > common mistake > p
    "The bubbles in boiling water are not air, and they are not hydrogen and oxygen. They are water vapour, <span class=\"chem\">H2O(g)</span>. A change of state does not break the bonds inside the molecules. It only separates whole molecules from each other.": "沸水裏的氣泡不是空氣，也不是氫氣和氧氣。它們是水蒸氣 <span class=\"chem\">H2O(g)</span>。物態變化不會破壞分子內的鍵，只會把完整的分子互相分開。",

    // Changes of state and state symbols > h3
    "State symbols": "物態符號",

    // Changes of state and state symbols > p
    "A <dfn data-def=\"A letter in brackets after a formula in an equation that shows the state of the substance: (s), (l), (g) or (aq).\">state symbol</dfn> is written in brackets after a formula to show the state of the substance.": "<dfn data-def=\"A letter in brackets after a formula in an equation that shows the state of the substance: (s), (l), (g) or (aq).\">物態符號 <span class=\"en-term\">(state symbol)</span></dfn>寫在化學式後面的括號內，表示物質的狀態。",

    // Changes of state and state symbols > data-def attribute
    "A letter in brackets after a formula in an equation that shows the state of the substance: (s), (l), (g) or (aq).": "方程式中寫在化學式後面括號內的字母，表示物質的狀態：(s)、(l)、(g) 或 (aq)。",

    // Changes of state and state symbols > table > caption
    "The four state symbols": "四個物態符號",

    // Changes of state and state symbols > table > th
    "Symbol": "符號",

    // Changes of state and state symbols > table > th
    "Meaning": "意思",

    // Changes of state and state symbols > table > td
    // widget string (assets/js/widgets-s1-1.js)
    "solid": "固體",

    // Changes of state and state symbols > table > td
    "<span class=\"chem\">NaCl(s)</span>, salt crystals": "<span class=\"chem\">NaCl(s)</span>，食鹽晶體",

    // Changes of state and state symbols > table > td
    "pure liquid": "純液體",

    // Changes of state and state symbols > table > td
    "<span class=\"chem\">H2O(l)</span>, water; <span class=\"chem\">NaCl(l)</span>, molten salt": "<span class=\"chem\">H2O(l)</span>，水；<span class=\"chem\">NaCl(l)</span>，熔融的食鹽",

    // Changes of state and state symbols > table > td
    // widget string (assets/js/widgets-s1-1.js)
    "gas": "氣體",

    // Changes of state and state symbols > table > td
    "<span class=\"chem\">CO2(g)</span>": "<span class=\"chem\">CO2(g)</span>",

    // Changes of state and state symbols > table > th
    "(aq)": "(aq)",

    // Changes of state and state symbols > table > td
    "aqueous: dissolved in water": "水溶液 (aqueous)：溶解在水中",

    // Changes of state and state symbols > table > td
    "<span class=\"chem\">NaCl(aq)</span>, salt solution": "<span class=\"chem\">NaCl(aq)</span>，食鹽溶液",

    // Changes of state and state symbols > p
    "Changes of state can be written as equations. The formula stays the same and only the state symbol changes:": "物態變化可以寫成方程式。化學式保持不變，只有物態符號改變：",

    // Changes of state and state symbols > p
    "<span class=\"chem\">H2O(s) -&gt; H2O(l)</span> (melting) &nbsp;&nbsp; <span class=\"chem\">CO2(s) -&gt; CO2(g)</span> (sublimation)": "<span class=\"chem\">H2O(s) -&gt; H2O(l)</span>（熔化） &nbsp;&nbsp; <span class=\"chem\">CO2(s) -&gt; CO2(g)</span>（昇華）",

    // Changes of state and state symbols > p
    "A reaction equation with state symbols looks like this:": "附有物態符號的反應方程式是這樣的：",

    // Changes of state and state symbols > p
    "<span class=\"chem\">Zn(s) + 2HCl(aq) -&gt; ZnCl2(aq) + H2(g)</span>": "<span class=\"chem\">Zn(s) + 2HCl(aq) -&gt; ZnCl2(aq) + H2(g)</span>",

    // Changes of state and state symbols > p
    "Read it as: solid zinc reacts with hydrochloric acid solution to give zinc chloride solution and hydrogen gas.": "讀法是：固體鋅與氫氯酸 (hydrochloric acid) 溶液反應，生成氯化鋅溶液和氫氣。",

    // Changes of state and state symbols > common mistake > p
    "(l) and (aq) are different. <span class=\"chem\">NaCl(l)</span> is salt that has been melted, above 800 °C. <span class=\"chem\">NaCl(aq)</span> is salt dissolved in water. Water itself is <span class=\"chem\">H2O(l)</span>, never <span class=\"chem\">H2O(aq)</span>.": "(l) 和 (aq) 並不相同。<span class=\"chem\">NaCl(l)</span> 是在 800 °C 以上熔化了的食鹽。<span class=\"chem\">NaCl(aq)</span> 是溶解在水中的食鹽。水本身是 <span class=\"chem\">H2O(l)</span>，絕不是 <span class=\"chem\">H2O(aq)</span>。",

    // Changes of state and state symbols > exam tip (shown in English + translation) > p
    "State symbols are marked when the question asks for them, so include them whenever you are asked. Acids, alkalis and dissolved salts are (aq). Water as a product is (l). A solid that forms in a solution (a precipitate) is (s).": "題目要求寫物態符號時，物態符號會計分，所以只要題目要求，就一定要寫。酸、鹼和溶解了的鹽是 (aq)。作為生成物的水是 (l)。在溶液中形成的固體（沉澱物）是 (s)。",

    // Changes of state and state symbols > data-title attribute
    "States and changes of state: quick check": "物態和物態變化：快速小測",

    // Temperature and the kelvin scale > data-toc attribute
    "Temperature and kelvin": "溫度和開爾文",

    // Temperature and the kelvin scale > h2
    "Temperature and the kelvin scale": "溫度和開氏溫標",

    // Temperature and the kelvin scale > p
    "Put a spoon in hot tea and the handle warms up. The fast-moving particles in the tea hit the particles of the spoon and pass energy on. “Hot” means the particles have, on average, more energy of movement.": "把匙子放進熱茶裏，匙柄會變暖。茶裏快速運動的粒子撞擊匙子的粒子，把能量傳過去。「熱」的意思是粒子運動的能量平均來說較多。",

    // Temperature and the kelvin scale > p
    "<dfn data-def=\"The energy a particle has because it is moving.\">Kinetic energy</dfn>, <i>E</i><sub>k</sub>, is the energy a particle has because it is moving. In any sample some particles move slowly and some move fast, so we talk about the average.": "<dfn data-def=\"The energy a particle has because it is moving.\">動能 <span class=\"en-term\">(kinetic energy)</span></dfn> <i>E</i><sub>k</sub> 是粒子因為運動而具有的能量。任何樣本中，都有些粒子運動得慢，有些運動得快，所以我們說的是平均值。",

    // Temperature and the kelvin scale > data-def attribute
    "The energy a particle has because it is moving.": "粒子因為運動而具有的能量。",

    // Temperature and the kelvin scale > key idea > p
    "Temperature, <i>T</i>, in kelvin (K) is a measure of the average kinetic energy of the particles.": "以開爾文 (K) 表示的溫度 <i>T</i>，是粒子平均動能的量度。",

    // Temperature and the kelvin scale > p
    "The Celsius scale puts its zero at the freezing point of water. The kelvin scale puts its zero at <dfn data-def=\"0 K, the lowest possible temperature.\">absolute zero</dfn>, the lowest possible temperature. At absolute zero the particles have the lowest possible kinetic energy.": "攝氏溫標把零點定在水的凝固點。開氏溫標把零點定在<dfn data-def=\"0 K, the lowest possible temperature.\">絕對零度 <span class=\"en-term\">(absolute zero)</span></dfn>，即可能達到的最低溫度。在絕對零度，粒子的動能是可能的最低值。",

    // Temperature and the kelvin scale > data-def attribute
    "0 K, the lowest possible temperature.": "0 K，可能達到的最低溫度。",

    // Temperature and the kelvin scale > p
    "The higher the temperature in kelvin, the greater the average kinetic energy of the particles. Two samples at the same temperature have the same average kinetic energy, even if one sample is much bigger than the other.": "以開爾文表示的溫度越高，粒子的平均動能越大。溫度相同的兩個樣本，平均動能也相同，即使其中一個樣本比另一個大得多。",

    // Temperature and the kelvin scale > p
    "The kelvin is the SI unit of temperature. One kelvin is the same size as one degree Celsius. Only the zero point is different, so you convert by adding or subtracting a fixed number.": "開爾文是溫度的 SI 單位。一開爾文的大小與一攝氏度相同。只是零點不同，所以換算時只需加上或減去一個固定的數。",

    // Temperature and the kelvin scale > equation > dd
    "temperature on the kelvin scale <span class=\"unit\">K</span>": "開氏溫標的溫度 <span class=\"unit\">K</span>",

    // Temperature and the kelvin scale > equation > dd
    "temperature on the Celsius scale <span class=\"unit\">°C</span>": "攝氏溫標的溫度 <span class=\"unit\">°C</span>",

    // Temperature and the kelvin scale > widget > data-title attribute
    "Celsius and kelvin, side by side": "攝氏和開爾文對照",

    // Temperature and the kelvin scale > widget > figcaption
    "Drag the slider or type a value. Both scales have the same step size, so a change of 1 °C is a change of 1 K. Only the zero point differs. There are no negative temperatures in kelvin.": "拖曳滑桿或輸入數值。兩種溫標的刻度大小相同，所以 1 °C 的變化就是 1 K 的變化。只有零點不同。開爾文溫度沒有負值。",

    // Temperature and the kelvin scale > data booklet note > p
    "The data booklet gives the conversion: temperature (K) = temperature (°C) + 273.15. It also gives STP as 273.15 K and 100 kPa.": "數據手冊提供了換算公式：溫度 (K) = 溫度 (°C) + 273.15。手冊也列出 STP 是 273.15 K 和 100 kPa。",

    // Temperature and the kelvin scale > h3
    "Method in words": "文字說明方法",

    // Temperature and the kelvin scale > li
    "Decide the direction. Going to kelvin, the number gets bigger: add 273.15. Going to degrees Celsius, the number gets smaller: subtract 273.15.": "先決定換算方向。換成開爾文，數值變大：加 273.15。換成攝氏度，數值變小：減 273.15。",

    // Temperature and the kelvin scale > li
    "Keep the sign of a negative Celsius value.": "攝氏數值如果是負數，要保留負號。",

    // Temperature and the kelvin scale > li
    "Round to the same number of decimal places as the temperature you were given.": "答案的小數位數要與題目給的溫度相同。",

    // Temperature and the kelvin scale > li
    "Write the unit as K, with no degree sign.": "單位寫成 K，不加度數符號。",

    // Temperature and the kelvin scale > li
    "For a temperature <em>change</em>, do not add 273.15. The change is the same number in °C and in K.": "如果是溫度<em>變化</em>，不要加 273.15。溫度變化以 °C 和 K 表示時，數值相同。",

    // Temperature and the kelvin scale > worked example > data-kicker attribute
    "Worked example 1": "例題 1",

    // Temperature and the kelvin scale > worked example > h3
    "Converting a boiling point to kelvin": "把沸點換算成開爾文",

    // Temperature and the kelvin scale > worked example > p
    "Liquid oxygen boils at −182.96 °C. Give this temperature in kelvin.": "液態氧在 −182.96 °C 沸騰。以開爾文表示這個溫度。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Write the relationship": "寫出關係式",

    // Temperature and the kelvin scale > worked example > p
    "Starting from the formula shows your method.": "從公式開始寫，可以展示你的方法。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Substitute, keeping the sign": "代入數值，保留正負號",

    // Temperature and the kelvin scale > worked example > p
    "The Celsius value is negative. Losing the minus sign is the most common slip.": "攝氏數值是負數。漏掉負號是最常見的失誤。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Round sensibly": "合理地取小數位",

    // Temperature and the kelvin scale > worked example > p
    "When you add, the answer keeps the smallest number of decimal places in the data. Both values have two decimal places, so keep two.": "做加法時，答案的小數位數取數據中最少的一個。兩個數值都有兩位小數，所以保留兩位。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Check that it makes sense": "檢查答案是否合理",

    // Temperature and the kelvin scale > worked example > data-label attribute
    "Check": "檢查",

    // Temperature and the kelvin scale > worked example > p
    "A kelvin value is always positive, and always bigger than the Celsius value.": "開爾文數值一定是正數，而且一定比攝氏數值大。",

    // Temperature and the kelvin scale > worked example > maths line
    "90.19 &gt; −182.96, and 90.19 &gt; 0": "90.19 &gt; −182.96，而且 90.19 &gt; 0",

    // Temperature and the kelvin scale > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Temperature and the kelvin scale > worked example > h3
    "Converting kelvin to degrees Celsius": "把開爾文換算成攝氏度",

    // Temperature and the kelvin scale > worked example > p
    "Ethanol boils at 351.52 K. Give this temperature in degrees Celsius.": "乙醇在 351.52 K 沸騰。以攝氏度表示這個溫度。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Rearrange the relationship": "重排關係式",

    // Temperature and the kelvin scale > worked example > p
    "You want °C on its own, so subtract 273.15 from both sides.": "你想把 °C 單獨放在一邊，所以兩邊同時減去 273.15。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Substitute": "代入數值",

    // Temperature and the kelvin scale > worked example > p
    "Going from kelvin to °C, the number must get smaller.": "從開爾文換成 °C，數值一定變小。",

    // Temperature and the kelvin scale > worked example > p
    "Both values have two decimal places, so keep two.": "兩個數值都有兩位小數，所以保留兩位。",

    // Temperature and the kelvin scale > worked example > data-kicker attribute
    "Worked example 3": "例題 3",

    // Temperature and the kelvin scale > worked example > h3
    "A temperature change in °C and in K": "以 °C 和 K 表示的溫度變化",

    // Temperature and the kelvin scale > worked example > p
    "Water is heated from 21.4 °C to 68.9 °C. Find the temperature change in °C and in K.": "水由 21.4 °C 加熱至 68.9 °C。求以 °C 和以 K 表示的溫度變化。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Find the change in °C": "求以 °C 表示的變化",

    // Temperature and the kelvin scale > worked example > p
    "A change is always final minus initial.": "變化永遠是最終值減去初始值。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Convert both temperatures to kelvin": "把兩個溫度都換算成開爾文",

    // Temperature and the kelvin scale > worked example > p
    "This is the long way. It shows you what happens to the 273.15.": "這是較長的做法，但可以讓你看到 273.15 最後怎樣了。",

    // Temperature and the kelvin scale > worked example > maths line
    "initial: 21.4 + 273.15 = 294.55 K": "初始：21.4 + 273.15 = 294.55 K",

    // Temperature and the kelvin scale > worked example > maths line
    "final: 68.9 + 273.15 = 342.05 K": "最終：68.9 + 273.15 = 342.05 K",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Find the change in K": "求以 K 表示的變化",

    // Temperature and the kelvin scale > worked example > p
    "The 273.15 is added to both values, so it cancels when you subtract.": "兩個數值都加了 273.15，所以相減時互相抵消。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "State the result": "寫出結果",

    // Temperature and the kelvin scale > worked example > p
    "The scales have the same step size, so a change is the same number on both.": "兩種溫標的刻度大小相同，所以溫度變化在兩種溫標上的數值相同。",

    // Temperature and the kelvin scale > worked example > p
    "47.5 °C, which is also 47.5 K": "47.5 °C，也就是 47.5 K",

    // Temperature and the kelvin scale > common mistake > p
    "Adding 273.15 to a temperature change is wrong. A rise of 47.5 °C is a rise of 47.5 K, not 320.65 K. Add 273.15 only to a single temperature reading.": "把 273.15 加到溫度變化上是錯的。上升 47.5 °C 就是上升 47.5 K，不是 320.65 K。只有單一個溫度讀數才加 273.15。",

    // Temperature and the kelvin scale > exam tip (shown in English + translation) > p
    "Write temperatures in kelvin as <span class=\"mono\">298 K</span>, with no degree sign. In gas calculations (Structure 1.5), always convert to kelvin before you substitute.": "開爾文溫度要寫成 <span class=\"mono\">298 K</span>，不加度數符號。在氣體計算（Structure 1.5）中，代入數值前一定要先換算成開爾文。",

    // Temperature and the kelvin scale > try it > p
    "Normal human body temperature is about 37 °C. What is this in kelvin? Give your answer to 3 significant figures.": "人的正常體溫約為 37 °C。以開爾文表示是多少？答案取至 3 位有效數字。",

    // Temperature and the kelvin scale > try it > li
    "Which is bigger, the number in kelvin or the number in °C? Decide before you calculate.": "開爾文數值和 °C 數值，哪個較大？計算前先想一想。",

    // Temperature and the kelvin scale > try it > li
    "Add 273.15 to the Celsius value: <span class=\"mono\">37 + 273.15</span>.": "把攝氏數值加上 273.15：<span class=\"mono\">37 + 273.15</span>。",

    // Temperature and the kelvin scale > try it > p
    "To 3 significant figures: <strong>310 K</strong>.": "取至 3 位有效數字：<strong>310 K</strong>。",

    // Temperature and the kelvin scale > try it > p
    "Liquid helium boils at 4.22 K. What is this in degrees Celsius? Give your answer to 2 decimal places.": "液態氦在 4.22 K 沸騰。以攝氏度表示是多少？答案取至小數點後 2 位。",

    // Temperature and the kelvin scale > try it > li
    "Going from kelvin to °C, the number gets smaller. Here it will be negative.": "從開爾文換成 °C，數值變小。這裏會是負數。",

    // Temperature and the kelvin scale > try it > li
    "Subtract 273.15 from the kelvin value: <span class=\"mono\">4.22 − 273.15</span>.": "把開爾文數值減去 273.15：<span class=\"mono\">4.22 − 273.15</span>。",

    // Temperature and the kelvin scale > try it > p
    "The answer is negative because 4.22 K is far below the freezing point of water.": "答案是負數，因為 4.22 K 遠低於水的凝固點。",

    // Temperature and the kelvin scale > try it > p
    "A solution warms from −5.0 °C to 21.5 °C. What is the temperature change in kelvin?": "某溶液由 −5.0 °C 升溫至 21.5 °C。以開爾文表示，溫度變化是多少？",

    // Temperature and the kelvin scale > try it > li
    "This is a change, not a single reading. Do you need 273.15?": "這是溫度變化，不是單一個讀數。需要用 273.15 嗎？",

    // Temperature and the kelvin scale > try it > li
    "Change = final − initial: <span class=\"mono\">21.5 − (−5.0)</span>. Subtracting a negative number means adding.": "變化 = 最終值 − 初始值：<span class=\"mono\">21.5 − (−5.0)</span>。減去負數等於加上正數。",

    // Temperature and the kelvin scale > try it > p
    "A temperature change is the same number in °C and in K.": "溫度變化以 °C 和 K 表示時，數值相同。",

    // Temperature and the kelvin scale > not needed for IB > p
    "You do not need a formula that links kinetic energy to temperature or to particle speed. You need the idea only: temperature in kelvin is a measure of average kinetic energy. Many textbooks go one step further and say that the average kinetic energy is directly proportional to the temperature in kelvin. That is correct, but the IB guide says only “a measure of”, so this site does not ask you to calculate with it. The graph of how kinetic energies are spread out among the particles comes later, in Reactivity 2.2.": "你不需要把動能與溫度或粒子速率連繫起來的公式，只需要知道這個概念：以開爾文表示的溫度是平均動能的量度。很多課本會多走一步，指出平均動能與開爾文溫度成正比。這是正確的，但 IB 指南只說是「量度」(a measure of)，所以本網站不會要求你用它來計算。顯示粒子動能怎樣分佈的圖表，稍後會在 Reactivity 2.2 學到。",

    // What happens to temperature during a change of state > data-toc attribute
    "Heating curves": "加熱曲線",

    // What happens to temperature during a change of state > h2
    "What happens to temperature during a change of state": "物態變化期間溫度有甚麼變化",

    // What happens to temperature during a change of state > p
    "Put a thermometer in a pan of boiling water and keep the heat on. The reading stays at 100 °C until the water has boiled away. Energy is going in all the time, but the temperature is not rising. Where is the energy going?": "把溫度計放進一鍋沸水，並繼續加熱。讀數一直停在 100 °C，直到水全部汽化為止。能量不斷輸入，溫度卻沒有上升。能量去了哪裏？",

    // What happens to temperature during a change of state > p
    "A <dfn data-def=\"A graph of temperature against energy supplied (or time of steady heating) for a substance as it is heated through its changes of state.\">heating curve</dfn> shows the temperature of a substance as energy is supplied to it at a steady rate. It has sloping parts and flat parts.": "<dfn data-def=\"A graph of temperature against energy supplied (or time of steady heating) for a substance as it is heated through its changes of state.\">加熱曲線 <span class=\"en-term\">(heating curve)</span></dfn>顯示以穩定的速率向物質供應能量時，物質的溫度怎樣變化。曲線有傾斜部分和水平部分。",

    // What happens to temperature during a change of state > data-def attribute
    "A graph of temperature against energy supplied (or time of steady heating) for a substance as it is heated through its changes of state.": "物質受熱並經歷物態變化時，溫度對所供應能量（或穩定加熱的時間）的圖表。",

    // What happens to temperature during a change of state > li
    "<strong>Sloping parts: one state is being heated.</strong> The energy supplied increases the average kinetic energy of the particles, so the temperature rises.": "<strong>傾斜部分：正在加熱單一種物態。</strong>所供應的能量增加粒子的平均動能，所以溫度上升。",

    // What happens to temperature during a change of state > li
    "<strong>Flat parts: the state is changing.</strong> The energy supplied is used to overcome the forces of attraction between the particles. This increases their <dfn data-def=\"Energy stored because of the positions of particles relative to each other. It rises when particles that attract each other are moved apart.\">potential energy</dfn>. Their average kinetic energy does not change, so the temperature stays constant.": "<strong>水平部分：物態正在改變。</strong>所供應的能量用來克服粒子間的引力。這會增加粒子的<dfn data-def=\"Energy stored because of the positions of particles relative to each other. It rises when particles that attract each other are moved apart.\">勢能 <span class=\"en-term\">(potential energy)</span></dfn>。粒子的平均動能不變，所以溫度保持不變。",

    // What happens to temperature during a change of state > data-def attribute
    "Energy stored because of the positions of particles relative to each other. It rises when particles that attract each other are moved apart.": "因粒子之間的相對位置而儲存的能量。把互相吸引的粒子分開時，勢能會增加。",

    // What happens to temperature during a change of state > widget > data-title attribute
    "Heating curve explorer: 100 g of water": "加熱曲線探索工具：100 g 水",

    // What happens to temperature during a change of state > widget > figcaption
    "Move the slider or step through the five stages. Notice the two flat parts: energy is supplied but the temperature does not change. The graph is to scale for 100 g of water at normal atmospheric pressure, using approximate data. The particle picture is a flat model and is not to scale. Read the curve from right to left and it becomes a cooling curve: the same flat parts appear as the steam condenses and the water freezes.": "移動滑桿，或逐一查看五個階段。留意兩段水平部分：能量不斷供應，但溫度沒有改變。圖表按比例顯示 100 g 水在正常大氣壓強下的情況，所用數據是近似值。粒子圖是平面模型，不按比例。由右至左看這條曲線，它就成為冷卻曲線：水蒸氣凝結和水凝固時，會出現相同的水平部分。",

    // What happens to temperature during a change of state > key idea > p
    "During a change of state, the temperature stays constant even though energy is still being supplied or removed. The first flat part is at the melting point. The second is at the boiling point.": "物態變化期間，即使能量仍在供應或移走，溫度也保持不變。第一段水平部分在熔點，第二段在沸點。",

    // What happens to temperature during a change of state > h3
    "How to read a heating or cooling curve": "怎樣解讀加熱曲線或冷卻曲線",

    // What happens to temperature during a change of state > li
    "Find the flat parts. On a heating curve the lower one is the melting point and the higher one is the boiling point.": "先找出水平部分。在加熱曲線上，較低的一段是熔點，較高的一段是沸點。",

    // What happens to temperature during a change of state > li
    "Name the state on each sloping part: solid below the melting point, liquid between, gas above the boiling point.": "說出每段傾斜部分的物態：低於熔點是固體，兩者之間是液體，高於沸點是氣體。",

    // What happens to temperature during a change of state > li
    "On a flat part, two states are present together.": "在水平部分，兩種物態同時存在。",

    // What happens to temperature during a change of state > li
    "To find the state at a given temperature, compare it with the melting point and the boiling point.": "要找出某個溫度下的物態，把這個溫度與熔點和沸點比較。",

    // What happens to temperature during a change of state > worked example > data-kicker attribute
    "Worked example 4": "例題 4",

    // What happens to temperature during a change of state > worked example > h3
    "Finding the state from melting and boiling points": "從熔點和沸點找出物態",

    // What happens to temperature during a change of state > worked example > p
    "Bromine melts at 266 K and boils at 332 K. What is the state of bromine at 25 °C?": "溴在 266 K 熔化，在 332 K 沸騰。溴在 25 °C 時是甚麼物態？",

    // What happens to temperature during a change of state > worked example > data-title attribute
    "Put everything in the same unit": "把所有數值換成相同單位",

    // What happens to temperature during a change of state > worked example > p
    "You cannot compare a temperature in °C with temperatures in K.": "以 °C 表示的溫度不能與以 K 表示的溫度直接比較。",

    // What happens to temperature during a change of state > worked example > data-title attribute
    "Compare with the melting point": "與熔點比較",

    // What happens to temperature during a change of state > worked example > p
    "Above the melting point, the substance is not a solid.": "高於熔點，物質就不是固體。",

    // What happens to temperature during a change of state > worked example > maths line
    "298.15 K &gt; 266 K, so bromine has melted": "298.15 K &gt; 266 K，所以溴已經熔化",

    // What happens to temperature during a change of state > worked example > data-title attribute
    "Compare with the boiling point": "與沸點比較",

    // What happens to temperature during a change of state > worked example > p
    "Below the boiling point, the substance has not boiled.": "低於沸點，物質還沒有沸騰。",

    // What happens to temperature during a change of state > worked example > maths line
    "298.15 K &lt; 332 K, so bromine has not boiled": "298.15 K &lt; 332 K，所以溴還沒有沸騰",

    // What happens to temperature during a change of state > worked example > data-title attribute
    "State the answer": "寫出答案",

    // What happens to temperature during a change of state > worked example > p
    "Between the melting point and the boiling point, a substance is a liquid.": "在熔點和沸點之間，物質是液體。",

    // What happens to temperature during a change of state > worked example > maths line
    "Bromine is a <b>liquid</b> at 25 °C: <span class=\"chem\">Br2(l)</span>": "溴在 25 °C 時是<b>液體</b>：<span class=\"chem\">Br2(l)</span>",

    // What happens to temperature during a change of state > common mistake > p
    "“The temperature is constant, so no energy is being absorbed” is wrong. Energy is still going in. It is used to overcome the attractions between the particles. This increases their potential energy, not their average kinetic energy.": "「溫度不變，所以沒有吸收能量」這個說法是錯的。能量仍在輸入，用來克服粒子間的引力。這會增加粒子的勢能，而不是平均動能。",

    // What happens to temperature during a change of state > exam tip (shown in English + translation) > p
    "“Explain why the temperature stays constant during melting” is usually worth 2 marks. Mark 1: the energy is used to overcome the forces of attraction between the particles. Mark 2: the average kinetic energy of the particles does not change. Write both.": "「解釋熔化期間溫度為甚麼保持不變」這類題目通常佔 2 分。第 1 分：能量用來克服粒子間的引力。第 2 分：粒子的平均動能不變。兩點都要寫。",

    // What happens to temperature during a change of state > not needed for IB > p
    "You do not need to calculate the energy for any part of a heating curve in this topic. Calculations with specific heat capacity come later, in Reactivity 1.1. The numbers on the graph above are there only to make the scale honest.": "本課題不需要計算加熱曲線任何部分的能量。涉及比熱容量的計算，稍後會在 Reactivity 1.1 學到。上面圖表中的數字，只是為了讓比例符合實際。",

    // What happens to temperature during a change of state > data-title attribute
    "Temperature and heating curves: quick check": "溫度和加熱曲線：快速小測",

    // Linking it up > h2
    "Linking it up": "把知識連繫起來",

    // Linking it up > p
    "The syllabus asks questions that connect this topic to others. Short answers to four of them:": "課程大綱設有一些把本課題與其他課題連繫起來的問題。以下是其中四題的簡短答案：",

    // Linking it up > h3
    "What factors are considered in choosing a method to separate the components of a mixture?": "選擇分離混合物各成分的方法時，要考慮哪些因素？",

    // Linking it up > p
    "The states of the components, a physical property that differs between them (solubility, particle size, boiling point), and which component you want to keep. For example, evaporation and distillation both use volatility, but only distillation keeps the liquid.": "各成分的物態、各成分之間不同的物理性質（溶解度、粒子大小、沸點），以及你想保留哪個成分。例如，蒸發和蒸餾都利用揮發性，但只有蒸餾能保留液體。",

    // Linking it up > h3
    "Why are alloys generally considered to be mixtures, even though they often contain metallic bonding?": "合金通常含有金屬鍵，為甚麼一般仍被視為混合物？",

    // Linking it up > p
    "An alloy does not have a fixed ratio of elements. Brass can be made with different proportions of copper and zinc. A compound always has a fixed ratio. The full picture of bonding in alloys comes in Structure 2.3.": "合金中各元素的比例並不固定。黃銅可以用不同比例的銅和鋅製成。化合物的比例卻一定是固定的。合金中鍵合的詳情會在 Structure 2.3 學到。",

    // Linking it up > h3
    "Why are some changes of state endothermic and some exothermic?": "為甚麼有些物態變化是吸熱的，有些是放熱的？",

    // Linking it up > p
    "Melting, vaporization and sublimation need energy to overcome attractions between particles, so they are endothermic. Freezing, condensation and deposition form attractions between particles, which releases energy, so they are exothermic. Energy changes are studied in Reactivity 1.": "熔化、汽化和昇華需要能量來克服粒子間的引力，所以是吸熱的。凝固、凝結和凝華時粒子間形成引力，會釋放能量，所以是放熱的。能量變化會在 Reactivity 1 學到。",

    // Linking it up > h3
    "What is the graphical distribution of kinetic energy values of particles in a sample at a fixed temperature?": "在固定溫度下，樣本中粒子動能數值的分佈圖是怎樣的？",

    // Linking it up > p
    "At any one temperature the particles do not all have the same kinetic energy. A few have very little, a few have a lot, and most are in between. Temperature measures the average. The shape of this distribution is covered in Reactivity 2.2.": "在任何一個溫度下，粒子的動能並不完全相同。少數粒子的動能很低，少數很高，大部分介乎兩者之間。溫度量度的是平均值。這個分佈的形狀會在 Reactivity 2.2 學到。",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "考試題型練習",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. You get feedback after each question. Questions you have not yet answered correctly come first. All questions are original and written for this site.": "共有三組題目，由入門到進階。每答完一題都會有回饋。你還未答對的題目會先出現。所有題目都是原創，專為本網站編寫。",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "基礎：每次一個概念",

    // Exam-style practice > data-title attribute
    "1.1 foundation": "1.1 基礎",

    // Exam-style practice > h3
    "Exam standard": "考試程度",

    // Exam-style practice > data-title attribute
    "1.1 exam standard": "1.1 考試程度",

    // Exam-style practice > h3
    "Challenge: level 7 stretch": "挑戰：邁向 7 級",

    // Exam-style practice > data-title attribute
    "1.1 challenge": "1.1 挑戰",

    // widget string (assets/js/widgets-s1-1.js)
    "Correct": "正確",

    // widget string (assets/js/widgets-s1-1.js)
    "Not quite": "仍未正確",

    // widget string (assets/js/widgets-s1-1.js)
    "Celsius": "攝氏",

    // widget string (assets/js/widgets-s1-1.js)
    "Kelvin": "開爾文",

    // widget string (assets/js/widgets-s1-1.js)
    "What it means": "代表甚麼",

    // widget string (assets/js/widgets-s1-1.js)
    "Temperature": "溫度",

    // widget string (assets/js/widgets-s1-1.js)
    "Absolute zero": "絕對零度",

    // widget string (assets/js/widgets-s1-1.js)
    "Water freezes": "水凝固",

    // widget string (assets/js/widgets-s1-1.js)
    "Room temperature": "室溫",

    // widget string (assets/js/widgets-s1-1.js)
    "Water boils": "水沸騰",

    // widget string (assets/js/widgets-s1-1.js)
    "absolute zero": "絕對零度",

    // widget string (assets/js/widgets-s1-1.js)
    "water freezes": "水凝固",

    // widget string (assets/js/widgets-s1-1.js)
    "water boils": "水沸騰",

    // widget string (assets/js/widgets-s1-1.js)
    "Thermometer scale from absolute zero to 150 degrees Celsius, labelled in both degrees Celsius and kelvin": "溫度計刻度，由絕對零度至 150 攝氏度，同時以攝氏度和開爾文標示",

    // widget string (assets/js/widgets-s1-1.js)
    "Absolute zero: the lowest possible temperature": "絕對零度：可能達到的最低溫度",

    // widget string (assets/js/widgets-s1-1.js)
    "Below the freezing point of water": "低於水的凝固點",

    // widget string (assets/js/widgets-s1-1.js)
    "Water is liquid (at normal atmospheric pressure)": "水是液體（在正常大氣壓強下）",

    // widget string (assets/js/widgets-s1-1.js)
    "At or above the boiling point of water": "等於或高於水的沸點",

    // widget string (assets/js/widgets-s1-1.js)
    "Water": "水",

    // widget string (assets/js/widgets-s1-1.js)
    "Ethanol": "乙醇",

    // widget string (assets/js/widgets-s1-1.js)
    "Nitrogen": "氮",

    // widget string (assets/js/widgets-s1-1.js)
    "State": "物態",

    // widget string (assets/js/widgets-s1-1.js)
    "What the particles are doing": "粒子在做甚麼",

    // widget string (assets/js/widgets-s1-1.js)
    "Substance": "物質",

    // widget string (assets/js/widgets-s1-1.js)
    "Melting point": "熔點",

    // widget string (assets/js/widgets-s1-1.js)
    "Boiling point": "沸點",

    // widget string (assets/js/widgets-s1-1.js)
    "Box of 48 particles shown as a solid, liquid or gas, with a bar below showing the temperature ranges of the three states": "盒子裏有 48 個粒子，顯示為固體、液體或氣體；下方的橫條顯示三種物態的溫度範圍",

    // widget string (assets/js/widgets-s1-1.js)
    "Pause motion": "暫停運動",

    // widget string (assets/js/widgets-s1-1.js)
    "Play motion": "播放運動",

    // widget string (assets/js/widgets-s1-1.js)
    "liquid": "液體",

    // widget string (assets/js/widgets-s1-1.js)
    "Close together in a regular, fixed arrangement. They only vibrate about fixed positions.": "靠得很近，排列有規律，位置固定。粒子只在固定位置振動。",

    // widget string (assets/js/widgets-s1-1.js)
    "Solid and liquid together": "固體和液體並存",

    // widget string (assets/js/widgets-s1-1.js)
    "At the melting point both states can exist together. Some particles are still in fixed positions. Others have broken free and move past each other.": "在熔點，兩種物態可以同時存在。部分粒子仍在固定位置。其餘粒子已經掙脫，可以互相滑過。",

    // widget string (assets/js/widgets-s1-1.js)
    "Still close together, but in a random arrangement. They move past each other, so the liquid flows and takes the shape of the bottom of the box.": "仍然靠得很近，但排列不規則。粒子可以互相滑過，所以液體能夠流動，並隨盒子底部的形狀改變。",

    // widget string (assets/js/widgets-s1-1.js)
    "Liquid and gas together": "液體和氣體並存",

    // widget string (assets/js/widgets-s1-1.js)
    "At the boiling point both states can exist together. Some particles have escaped the attractions of their neighbours and move freely through the box.": "在沸點，兩種物態可以同時存在。部分粒子已經擺脫鄰近粒子的引力，在盒子裏自由運動。",

    // widget string (assets/js/widgets-s1-1.js)
    "Far apart, in a random arrangement. They move quickly in all directions and fill the whole box.": "相距很遠，排列不規則。粒子向各個方向快速運動，充滿整個盒子。",

    // widget string (assets/js/widgets-s1-1.js)
    "Ice warming: solid": "冰升溫：固體",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature rises. The energy supplied increases the average kinetic energy of the particles: they vibrate faster about their fixed positions.": "溫度上升。所供應的能量增加粒子的平均動能：粒子在固定位置振動得更快。",

    // widget string (assets/js/widgets-s1-1.js)
    "Melting: solid and liquid ({pct}% melted)": "熔化：固體和液體（已熔化 {pct}%）",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature stays at 0 °C. The energy supplied is used to overcome some of the attractions that hold the particles in fixed positions. Their potential energy rises. Their average kinetic energy does not change.": "溫度停在 0 °C。所供應的能量用來克服部分把粒子固定在原位的引力。粒子的勢能增加，平均動能不變。",

    // widget string (assets/js/widgets-s1-1.js)
    "Water warming: liquid": "水升溫：液體",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature rises again. All the solid has melted, so the energy supplied increases the average kinetic energy of the particles.": "溫度再次上升。固體已全部熔化，所以所供應的能量增加粒子的平均動能。",

    // widget string (assets/js/widgets-s1-1.js)
    "Boiling: liquid and gas ({pct}% boiled)": "沸騰：液體和氣體（已汽化 {pct}%）",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature stays at 100 °C. The energy supplied is used to overcome the attractions between the particles so that they separate completely. Their average kinetic energy does not change. This plateau is long because the particles must be fully separated.": "溫度停在 100 °C。所供應的能量用來克服粒子間的引力，使粒子完全分開。粒子的平均動能不變。這段水平部分很長，因為粒子必須完全分開。",

    // widget string (assets/js/widgets-s1-1.js)
    "Steam warming: gas": "水蒸氣升溫：氣體",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature rises again. All the liquid has boiled, so the energy supplied increases the average kinetic energy of the gas particles.": "溫度再次上升。液體已全部汽化，所以所供應的能量增加氣體粒子的平均動能。",

    // widget string (assets/js/widgets-s1-1.js)
    "Energy supplied": "所供應的能量",

    // widget string (assets/js/widgets-s1-1.js)
    "Stage": "階段",

    // widget string (assets/js/widgets-s1-1.js)
    "Why": "原因",

    // widget string (assets/js/widgets-s1-1.js)
    "Previous stage": "上一階段",

    // widget string (assets/js/widgets-s1-1.js)
    "Next stage": "下一階段",

    // widget string (assets/js/widgets-s1-1.js)
    "Heating curve for 100 grams of water: temperature against energy supplied, with flat sections at 0 and 100 degrees Celsius, and a particle picture for the chosen point": "100 克水的加熱曲線：溫度對所供應能量的圖表，在 0 和 100 攝氏度有水平部分，並附有所選位置的粒子圖",

    // widget string (assets/js/widgets-s1-1.js)
    "energy supplied / kJ": "所供應的能量 / kJ",

    // widget string (assets/js/widgets-s1-1.js)
    "temperature / °C": "溫度 / °C",

    // widget string (assets/js/widgets-s1-1.js)
    "particle picture": "粒子圖",

    // widget string (assets/js/widgets-s1-1.js)
    "boiling": "沸騰 (boiling)",

    // widget string (assets/js/widgets-s1-1.js)
    "{E} kJ": "{E} kJ",

    // widget string (assets/js/widgets-s1-1.js)
    "mixture|poured in": "混合物|倒入",

    // widget string (assets/js/widgets-s1-1.js)
    "filter paper|in a funnel": "濾紙|放在漏斗內",

    // widget string (assets/js/widgets-s1-1.js)
    "residue:|insoluble solid|stays on paper": "殘餘物：|不溶固體|留在濾紙上",

    // widget string (assets/js/widgets-s1-1.js)
    "filtrate:|liquid that|passes through": "濾液：|通過濾紙|的液體",

    // widget string (assets/js/widgets-s1-1.js)
    "add water|(the solvent)": "加水|（溶劑）",

    // widget string (assets/js/widgets-s1-1.js)
    "stir with a|glass rod": "用玻璃棒|攪拌",

    // widget string (assets/js/widgets-s1-1.js)
    "soluble solid|dissolves:|a solution forms": "可溶固體|溶解：|形成溶液",

    // widget string (assets/js/widgets-s1-1.js)
    "insoluble solid|does not|dissolve": "不溶固體|不會|溶解",

    // widget string (assets/js/widgets-s1-1.js)
    "solvent leaves|as vapour": "溶劑變成|蒸氣離開",

    // widget string (assets/js/widgets-s1-1.js)
    "evaporating|basin": "蒸發皿",

    // widget string (assets/js/widgets-s1-1.js)
    "solution, then|crystals of the|dissolved solid": "先是溶液，|其後是固體|的晶體",

    // widget string (assets/js/widgets-s1-1.js)
    "gentle|heat": "溫和|加熱",

    // widget string (assets/js/widgets-s1-1.js)
    "thermometer: shows the|temperature of the vapour": "溫度計：顯示|蒸氣的溫度",

    // widget string (assets/js/widgets-s1-1.js)
    "cooling water out": "冷卻水出口",

    // widget string (assets/js/widgets-s1-1.js)
    "condenser:|vapour cools|to a liquid": "冷凝器：|蒸氣冷卻|成為液體",

    // widget string (assets/js/widgets-s1-1.js)
    "cooling|water in": "冷卻水|入口",

    // widget string (assets/js/widgets-s1-1.js)
    "distillate": "餾液",

    // widget string (assets/js/widgets-s1-1.js)
    "mixture": "混合物",

    // widget string (assets/js/widgets-s1-1.js)
    "heat": "加熱",

    // widget string (assets/js/widgets-s1-1.js)
    "Dissolve in the minimum|volume of hot solvent.": "用最少量的|熱溶劑溶解。",

    // widget string (assets/js/widgets-s1-1.js)
    "Filter while hot:|insoluble impurities|stay on the paper.": "趁熱過濾：|不溶的雜質|留在濾紙上。",

    // widget string (assets/js/widgets-s1-1.js)
    "Cool slowly: crystals form.|Soluble impurities stay|dissolved.": "慢慢冷卻：形成晶體。|可溶的雜質|仍然溶解。",

    // widget string (assets/js/widgets-s1-1.js)
    "Filter, rinse with a little|cold solvent, then dry|the crystals.": "過濾，用少量冷溶劑|沖洗，然後把晶體|弄乾。",

    // widget string (assets/js/widgets-s1-1.js)
    "lid": "蓋",

    // widget string (assets/js/widgets-s1-1.js)
    "solvent front": "溶劑前沿",

    // widget string (assets/js/widgets-s1-1.js)
    "separated dyes:|each travels a|different distance": "分離了的染料：|各自移動的|距離不同",

    // widget string (assets/js/widgets-s1-1.js)
    "chromatography|paper": "色層紙",

    // widget string (assets/js/widgets-s1-1.js)
    "pencil baseline|with the start|spot": "鉛筆基線|和起始的|斑點",

    // widget string (assets/js/widgets-s1-1.js)
    "solvent: its level|starts below|the baseline": "溶劑：液面|起初低於|基線",

    // widget string (assets/js/widgets-s1-1.js)
    "Solubility in water: one solid dissolves, the other does not.": "在水中的溶解度：一種固體會溶解，另一種不會。",

    // widget string (assets/js/widgets-s1-1.js)
    "One part is an undissolved solid, the other is a liquid. The solid particles are too large to pass through filter paper.": "一個成分是未溶解的固體，另一個是液體。固體粒子太大，不能通過濾紙。",

    // widget string (assets/js/widgets-s1-1.js)
    "Volatility: one part has a much lower boiling point, so it turns to vapour more easily.": "揮發性：其中一個成分的沸點低得多，所以較容易變成蒸氣。",

    // widget string (assets/js/widgets-s1-1.js)
    "Solubility changes with temperature: the solid is much more soluble in hot solvent than in cold solvent.": "溶解度隨溫度改變：固體在熱溶劑中的溶解度遠高於在冷溶劑中。",

    // widget string (assets/js/widgets-s1-1.js)
    "The parts are attracted to paper and to a solvent by different amounts.": "各成分受紙和受溶劑吸引的程度不同。",

    // widget string (assets/js/widgets-s1-1.js)
    "Solvation (dissolving), then filtration": "溶劑化（溶解），然後過濾",

    // widget string (assets/js/widgets-s1-1.js)
    "Evaporation, then crystallization": "蒸發，然後結晶",

    // widget string (assets/js/widgets-s1-1.js)
    "Sand in salt water": "混有沙的鹽水",

    // widget string (assets/js/widgets-s1-1.js)
    "Sand stirred into salt water.": "沙攪拌在鹽水中。",

    // widget string (assets/js/widgets-s1-1.js)
    "the sand removed from the liquid": "把沙從液體中分離出來",

    // widget string (assets/js/widgets-s1-1.js)
    "The sand has not dissolved. Its grains are far too large to pass through the tiny holes in filter paper. The water and the dissolved salt pass through.": "沙沒有溶解。沙粒太大，不能通過濾紙上的微細小孔。水和溶解了的鹽可以通過。",

    // widget string (assets/js/widgets-s1-1.js)
    "Filtration separates an insoluble solid from a liquid. The sand is the <strong>residue</strong>. The salt solution is the <strong>filtrate</strong>. Filtration cannot remove the dissolved salt.": "過濾可以把不溶固體從液體中分離出來。沙是<strong>殘餘物</strong> (residue)。鹽溶液是<strong>濾液</strong> (filtrate)。過濾不能除去溶解了的鹽。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is only one undissolved solid here. The salt is already dissolved.": "這裏只有一種未溶解的固體。鹽已經溶解了。",

    // widget string (assets/js/widgets-s1-1.js)
    "True, but it is a slow way to get sand out of water. Look for the simplest difference.": "沒錯，但用這個方法把沙從水中取出很慢。找找最簡單的差異。",

    // widget string (assets/js/widgets-s1-1.js)
    "Sand does not dissolve in hot water either.": "沙在熱水中也不會溶解。",

    // widget string (assets/js/widgets-s1-1.js)
    "That is the idea behind chromatography, which separates dissolved substances.": "這是色層法的原理，用來分離溶解了的物質。",

    // widget string (assets/js/widgets-s1-1.js)
    "Dry sand and salt": "乾的沙和鹽",

    // widget string (assets/js/widgets-s1-1.js)
    "A dry mixture of sand and salt (both solids).": "沙和鹽的乾混合物（兩者都是固體）。",

    // widget string (assets/js/widgets-s1-1.js)
    "the sand and the salt in separate containers": "把沙和鹽分別放在不同的容器裏",

    // widget string (assets/js/widgets-s1-1.js)
    "Salt is soluble in water. Sand is insoluble.": "鹽可溶於水。沙不溶於水。",

    // widget string (assets/js/widgets-s1-1.js)
    "Add water and stir. The salt dissolves (solvation) and the sand does not. Then filter: sand is the residue, salt solution is the filtrate. Evaporate the water from the filtrate to get the salt back, and dry the sand.": "加水並攪拌。鹽會溶解（溶劑化），沙不會。然後過濾：沙是殘餘物，鹽溶液是濾液。把濾液中的水蒸發掉，取回鹽，並把沙弄乾。",

    // widget string (assets/js/widgets-s1-1.js)
    "Both parts are solids at the start. There is no liquid to filter yet.": "開始時兩個成分都是固體，還沒有液體可以過濾。",

    // widget string (assets/js/widgets-s1-1.js)
    "Both solids have very high boiling points. Heating will not separate them in a school laboratory.": "兩種固體的沸點都非常高。在學校實驗室裏，加熱不能把它們分開。",

    // widget string (assets/js/widgets-s1-1.js)
    "That difference is used to purify one solid, not to separate these two.": "這個差異用來提純一種固體，不能分開這兩種固體。",

    // widget string (assets/js/widgets-s1-1.js)
    "Copper(II) sulfate solution": "硫酸銅(II)溶液",

    // widget string (assets/js/widgets-s1-1.js)
    "Copper(II) sulfate dissolved in water.": "溶解在水中的硫酸銅(II)。",

    // widget string (assets/js/widgets-s1-1.js)
    "solid copper(II) sulfate crystals": "得到固體硫酸銅(II)晶體",

    // widget string (assets/js/widgets-s1-1.js)
    "Water is volatile: it turns to vapour when heated. The dissolved solid has a very high boiling point and stays behind.": "水易揮發：受熱時會變成蒸氣。溶解了的固體沸點非常高，會留下來。",

    // widget string (assets/js/widgets-s1-1.js)
    "Heat gently to evaporate some of the water until the solution is saturated. Then leave it to cool so that crystals form (crystallization). You want the solid, so the water can escape into the air.": "溫和加熱，蒸發部分的水，直至溶液飽和。然後靜置冷卻，讓晶體形成（結晶）。你要的是固體，所以水可以散失到空氣中。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is only one solid here, and it is already dissolved.": "這裏只有一種固體，而且已經溶解了。",

    // widget string (assets/js/widgets-s1-1.js)
    "The solid is dissolved, so its particles pass through filter paper with the water.": "固體已經溶解，所以它的粒子會隨水一起通過濾紙。",

    // widget string (assets/js/widgets-s1-1.js)
    "True for many solids, but here there are no impurities to remove. Which difference lets you remove the water?": "很多固體都是這樣，但這裏沒有雜質要除去。哪一種差異可以讓你除去水？",

    // widget string (assets/js/widgets-s1-1.js)
    "There is only one dissolved substance, so there is nothing to spread out on paper.": "這裏只有一種溶解了的物質，所以沒有東西可以在紙上分開。",

    // widget string (assets/js/widgets-s1-1.js)
    "Salt water (you want the water)": "鹽水（你想要水）",

    // widget string (assets/js/widgets-s1-1.js)
    "Salt dissolved in water.": "溶解在水中的鹽。",

    // widget string (assets/js/widgets-s1-1.js)
    "pure water": "得到純水",

    // widget string (assets/js/widgets-s1-1.js)
    "Water boils at 100 °C. Salt has a very high boiling point and does not vaporize.": "水在 100 °C 沸騰。鹽的沸點非常高，不會汽化。",

    // widget string (assets/js/widgets-s1-1.js)
    "Distillation boils the water and then condenses the vapour back to a liquid in a separate container. The liquid collected is the <strong>distillate</strong>. The salt stays in the flask. Evaporation would lose the water you want.": "蒸餾先使水沸騰，再把蒸氣凝結成液體，收集在另一個容器裏。收集到的液體是<strong>餾液</strong> (distillate)。鹽留在燒瓶裏。如果用蒸發，你想要的水就會散失。",

    // widget string (assets/js/widgets-s1-1.js)
    "The salt is dissolved, so it passes through filter paper with the water.": "鹽已經溶解，所以會隨水一起通過濾紙。",

    // widget string (assets/js/widgets-s1-1.js)
    "That helps to purify a solid. Here you want the liquid.": "這個方法有助提純固體。這裏你要的是液體。",

    // widget string (assets/js/widgets-s1-1.js)
    "Chromatography separates tiny amounts for identification. It would not give you a beaker of water.": "色層法用來分離極少量的物質，以便辨認。它不能給你一燒杯水。",

    // widget string (assets/js/widgets-s1-1.js)
    "Ethanol and water": "乙醇和水",

    // widget string (assets/js/widgets-s1-1.js)
    "Ethanol and water, two liquids that mix completely.": "乙醇和水，兩種完全互溶的液體。",

    // widget string (assets/js/widgets-s1-1.js)
    "the ethanol separated from the water": "把乙醇從水中分離出來",

    // widget string (assets/js/widgets-s1-1.js)
    "Ethanol boils at 78 °C and water at 100 °C. Ethanol is more volatile.": "乙醇在 78 °C 沸騰，水在 100 °C 沸騰。乙醇較易揮發。",

    // widget string (assets/js/widgets-s1-1.js)
    "On heating, the vapour contains more of the liquid with the lower boiling point (ethanol). The condenser turns the vapour back into a liquid, which is collected as the distillate. One distillation gives a distillate that is richer in ethanol. It is not pure ethanol.": "加熱時，蒸氣中含有較多沸點較低的液體（乙醇）。冷凝器把蒸氣變回液體，收集到的就是餾液。蒸餾一次得到的餾液含有較多乙醇，但不是純乙醇。",

    // widget string (assets/js/widgets-s1-1.js)
    "Both parts are liquids, and they mix completely.": "兩個成分都是液體，而且完全互溶。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is no undissolved solid. Both liquids pass through filter paper.": "這裏沒有未溶解的固體。兩種液體都會通過濾紙。",

    // widget string (assets/js/widgets-s1-1.js)
    "That applies to a solid dissolved in a solvent.": "這適用於溶解在溶劑中的固體。",

    // widget string (assets/js/widgets-s1-1.js)
    "Chromatography separates tiny amounts for identification, not two bulk liquids.": "色層法用來分離極少量的物質以便辨認，不能分離兩種大量的液體。",

    // widget string (assets/js/widgets-s1-1.js)
    "Dyes in black ink": "黑色墨水中的染料",

    // widget string (assets/js/widgets-s1-1.js)
    "Black ink, a solution of several coloured dyes.": "黑色墨水，是幾種有色染料的溶液。",

    // widget string (assets/js/widgets-s1-1.js)
    "to find out how many dyes the ink contains": "找出墨水含有多少種染料",

    // widget string (assets/js/widgets-s1-1.js)
    "Each dye is attracted to the paper and dissolves in the moving solvent by a different amount.": "每種染料受紙吸引的程度，以及在流動溶劑中的溶解程度，都各不相同。",

    // widget string (assets/js/widgets-s1-1.js)
    "The solvent moves up the paper and carries the dyes with it. A dye that is more soluble in the solvent and less attracted to the paper travels further. Each dye ends up at a different height.": "溶劑沿紙向上移動，並帶着染料一起走。較易溶於溶劑、較少受紙吸引的染料，移動得較遠。每種染料最後停在不同的高度。",

    // widget string (assets/js/widgets-s1-1.js)
    "All the dyes are dissolved in the same ink.": "所有染料都溶解在同一種墨水裏。",

    // widget string (assets/js/widgets-s1-1.js)
    "The dyes are dissolved, so they pass through filter paper together.": "染料已經溶解，所以會一起通過濾紙。",

    // widget string (assets/js/widgets-s1-1.js)
    "Dyes are not volatile. Heating removes the solvent but leaves the dyes mixed together.": "染料不易揮發。加熱可以除去溶劑，但染料仍然混在一起。",

    // widget string (assets/js/widgets-s1-1.js)
    "That would not separate several dissolved dyes from each other.": "這樣不能把幾種溶解了的染料互相分開。",

    // widget string (assets/js/widgets-s1-1.js)
    "Impure solid product": "不純的固體生成物",

    // widget string (assets/js/widgets-s1-1.js)
    "An impure solid product from a reaction. It contains small amounts of other solids.": "某反應得到的不純固體生成物，含有少量其他固體。",

    // widget string (assets/js/widgets-s1-1.js)
    "pure, dry crystals of the product": "得到純淨而乾燥的生成物晶體",

    // widget string (assets/js/widgets-s1-1.js)
    "The product is very soluble in the hot solvent but much less soluble in the cold solvent. Small amounts of soluble impurities stay dissolved when the solution cools.": "生成物在熱溶劑中的溶解度很高，在冷溶劑中卻低得多。溶液冷卻時，少量的可溶雜質仍然溶解在溶劑中。",

    // widget string (assets/js/widgets-s1-1.js)
    "Dissolve the solid in the minimum volume of hot solvent. Filter hot to remove insoluble impurities. Cool so that the product crystallizes. Filter, rinse with a little cold solvent and dry.": "用最少量的熱溶劑溶解固體。趁熱過濾，除去不溶的雜質。冷卻，讓生成物結晶。過濾，用少量冷溶劑沖洗，然後弄乾。",

    // widget string (assets/js/widgets-s1-1.js)
    "Close. But one filtration cannot remove impurities that also dissolve.": "很接近。但只過濾一次，不能除去同樣會溶解的雜質。",

    // widget string (assets/js/widgets-s1-1.js)
    "Everything is solid at the start. There is no liquid to filter yet.": "開始時全部都是固體，還沒有液體可以過濾。",

    // widget string (assets/js/widgets-s1-1.js)
    "The solids are not volatile.": "這些固體不易揮發。",

    // widget string (assets/js/widgets-s1-1.js)
    "Chromatography separates tiny amounts for identification. It would not give you a useful mass of product.": "色層法用來分離極少量的物質，以便辨認。它不能給你足夠分量的生成物。",

    // widget string (assets/js/widgets-s1-1.js)
    "Solvation is the first step when you start with two solids, one soluble and one insoluble.": "開始時有兩種固體，一種可溶、一種不溶，第一步就是溶劑化。",

    // widget string (assets/js/widgets-s1-1.js)
    "Filtration only removes a solid that has not dissolved. Dissolved particles pass through the paper.": "過濾只能除去沒有溶解的固體。溶解了的粒子會通過濾紙。",

    // widget string (assets/js/widgets-s1-1.js)
    "Evaporation keeps the dissolved solid and loses the solvent into the air. Check which part you want to keep.": "蒸發會保留溶解了的固體，溶劑則散失到空氣中。看清楚你想保留哪個成分。",

    // widget string (assets/js/widgets-s1-1.js)
    "Distillation collects the liquid that boils off. Check which part you want to keep.": "蒸餾會收集沸騰汽化的液體。看清楚你想保留哪個成分。",

    // widget string (assets/js/widgets-s1-1.js)
    "Recrystallization purifies a solid that has small amounts of impurities.": "再結晶用來提純含有少量雜質的固體。",

    // widget string (assets/js/widgets-s1-1.js)
    "Paper chromatography separates small amounts of dissolved substances so that you can identify them.": "紙色層法用來分離少量溶解了的物質，讓你可以辨認它們。",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of filtration": "附有標示的過濾裝置圖",

    // widget string (assets/js/widgets-s1-1.js)
    "Solvation": "溶劑化（溶解）",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of solvation": "附有標示的溶劑化示意圖",

    // widget string (assets/js/widgets-s1-1.js)
    "Evaporation and crystallization": "蒸發和結晶",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of evaporation and crystallization": "附有標示的蒸發和結晶裝置圖",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of distillation": "附有標示的蒸餾裝置圖",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of recrystallization": "附有標示的再結晶示意圖",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of paper chromatography": "附有標示的紙色層法裝置圖",

    // widget string (assets/js/widgets-s1-1.js)
    "Start again": "重新開始",

    // widget string (assets/js/widgets-s1-1.js)
    "Not chosen yet": "尚未選擇",

    // widget string (assets/js/widgets-s1-1.js)
    "<strong>You have:</strong> {mix}<br><strong>You want:</strong> {want}.": "<strong>現有：</strong>{mix}<br><strong>目標：</strong>{want}。",

    // widget string (assets/js/widgets-s1-1.js)
    "Step 1. Which physical property is different?": "第 1 步：哪一種物理性質不同？",

    // widget string (assets/js/widgets-s1-1.js)
    "Try another property.": "試試另一種性質。",

    // widget string (assets/js/widgets-s1-1.js)
    "Step 2. Which technique uses that difference to give you what you want?": "第 2 步：哪一種技術利用這個差異，讓你達到目標？",

    // widget string (assets/js/widgets-s1-1.js)
    "Homogeneous mixture": "均勻混合物",

    // widget string (assets/js/widgets-s1-1.js)
    "Heterogeneous mixture": "不均勻混合物",

    // widget string (assets/js/widgets-s1-1.js)
    "Copper wire": "銅線",

    // widget string (assets/js/widgets-s1-1.js)
    "Copper contains only copper atoms.": "銅只含銅原子。",

    // widget string (assets/js/widgets-s1-1.js)
    "Oxygen gas, {formula}": "氧氣 {formula}",

    // widget string (assets/js/widgets-s1-1.js)
    "The molecules contain two atoms, but both are oxygen atoms. One type of atom means an element.": "分子含有兩個原子，但兩個都是氧原子。只有一種原子，就是元素。",

    // widget string (assets/js/widgets-s1-1.js)
    "Diamond": "金剛石",

    // widget string (assets/js/widgets-s1-1.js)
    "Diamond contains only carbon atoms.": "金剛石只含碳原子。",

    // widget string (assets/js/widgets-s1-1.js)
    "Distilled water, {formula}": "蒸餾水 {formula}",

    // widget string (assets/js/widgets-s1-1.js)
    "Hydrogen and oxygen atoms are chemically bonded in a fixed 2 : 1 ratio.": "氫原子和氧原子以化學鍵結合，比例固定為 2 : 1。",

    // widget string (assets/js/widgets-s1-1.js)
    "Sodium chloride crystals, {formula}": "氯化鈉晶體 {formula}",

    // widget string (assets/js/widgets-s1-1.js)
    "Sodium and chlorine are chemically bonded in a fixed 1 : 1 ratio.": "鈉和氯以化學鍵結合，比例固定為 1 : 1。",

    // widget string (assets/js/widgets-s1-1.js)
    "Carbon dioxide, {formula}": "二氧化碳 {formula}",

    // widget string (assets/js/widgets-s1-1.js)
    "Carbon and oxygen atoms are chemically bonded in a fixed 1 : 2 ratio.": "碳原子和氧原子以化學鍵結合，比例固定為 1 : 2。",

    // widget string (assets/js/widgets-s1-1.js)
    "Clean, dry air": "潔淨乾燥的空氣",

    // widget string (assets/js/widgets-s1-1.js)
    "Air is several gases (mainly nitrogen and oxygen) mixed evenly. The composition is the same throughout.": "空氣由幾種氣體（主要是氮和氧）均勻混合而成。各處的組成都相同。",

    // widget string (assets/js/widgets-s1-1.js)
    "Salt dissolved in water": "溶解在水中的鹽",

    // widget string (assets/js/widgets-s1-1.js)
    "A solution is a mixture with the same composition throughout. You cannot see separate parts.": "溶液是各處組成都相同的混合物。看不到分開的成分。",

    // widget string (assets/js/widgets-s1-1.js)
    "Brass (copper and zinc)": "黃銅（銅和鋅）",

    // widget string (assets/js/widgets-s1-1.js)
    "Brass is an alloy. The copper and zinc atoms are mixed evenly, and the ratio can vary, so it is a mixture and not a compound.": "黃銅是合金。銅原子和鋅原子均勻混合，而且比例可以改變，所以它是混合物，不是化合物。",

    // widget string (assets/js/widgets-s1-1.js)
    "Sand stirred into water": "攪拌在水中的沙",

    // widget string (assets/js/widgets-s1-1.js)
    "You can see separate regions of sand and of water. The composition is not the same throughout.": "可以看到沙和水各自的區域。各處的組成並不相同。",

    // widget string (assets/js/widgets-s1-1.js)
    "Oil and water": "油和水",

    // widget string (assets/js/widgets-s1-1.js)
    "The two liquids form separate layers. The composition is not the same throughout.": "兩種液體分成不同的層。各處的組成並不相同。",

    // widget string (assets/js/widgets-s1-1.js)
    "Granite rock": "花崗岩",

    // widget string (assets/js/widgets-s1-1.js)
    "You can see grains of different minerals. The composition is not the same throughout.": "可以看到不同礦物的顆粒。各處的組成並不相同。",

    // widget string (assets/js/widgets-s1-1.js)
    "Check the types of atom. A compound needs atoms of two or more different elements.": "檢查原子的種類。化合物需要有兩種或以上不同元素的原子。",

    // widget string (assets/js/widgets-s1-1.js)
    "A mixture contains more than one substance. This is a single substance.": "混合物含有多於一種物質。這是單一種物質。",

    // widget string (assets/js/widgets-s1-1.js)
    "An element has only one type of atom. Look at the formula: how many different elements are in it?": "元素只有一種原子。看看化學式：裏面有多少種不同的元素？",

    // widget string (assets/js/widgets-s1-1.js)
    "The different atoms here are chemically bonded in a fixed ratio. In a mixture the parts are not bonded to each other and the ratio can vary.": "這裏不同的原子以化學鍵結合，比例固定。在混合物中，各成分之間沒有化學鍵，比例也可以改變。",

    // widget string (assets/js/widgets-s1-1.js)
    "The different atoms here are chemically bonded in a fixed ratio. That makes a single pure substance, not a mixture.": "這裏不同的原子以化學鍵結合，比例固定。所以它是單一種純物質，不是混合物。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is more than one substance here.": "這裏有多於一種物質。",

    // widget string (assets/js/widgets-s1-1.js)
    "The substances here are not chemically bonded to each other, and their ratio can vary. That makes a mixture.": "這裏的物質之間沒有以化學鍵結合，比例也可以改變。所以它是混合物。",

    // widget string (assets/js/widgets-s1-1.js)
    "It is a mixture, but can you see separate parts? If the composition is the same throughout, it is homogeneous.": "它是混合物，但看得見分開的成分嗎？如果各處的組成都相同，就是均勻混合物。",

    // widget string (assets/js/widgets-s1-1.js)
    "It is a mixture, but the parts are not evenly spread. You can see separate regions.": "它是混合物，但各成分沒有均勻分佈。可以看到分開的區域。",

    // widget string (assets/js/widgets-s1-1.js)
    "Sorted": "已分類",

    // widget string (assets/js/widgets-s1-1.js)
    "Right first time": "第一次就答對",

    // widget string (assets/js/widgets-s1-1.js)
    "1. Pick a substance": "1. 選一種物質",

    // widget string (assets/js/widgets-s1-1.js)
    "Substances still to sort": "尚待分類的物質",

    // widget string (assets/js/widgets-s1-1.js)
    "2. Choose where it belongs": "2. 選擇它所屬的類別",

    // widget string (assets/js/widgets-s1-1.js)
    "All sorted. You got {n} of {total} right first time.": "全部分類完成。{total} 個之中，你有 {n} 個第一次就答對。",

    // widget string (assets/js/widgets-s1-1.js)
    "{bin}: substances placed here": "{bin}：已放在這裏的物質",

    // widget string (assets/js/widgets-s1-1.js)
    "{n} of {total}": "{n} / {total}",

    // widget string (assets/js/widgets-s1-1.js)
    "<strong>{name}</strong>: {text}": "<strong>{name}</strong>：{text}",

  }
});

/* Added by i18n-extract --only-missing on 2026-11-13: new or changed English. */
S1.i18n.register('zh-Hant', 's1-1', {
  strings: {

    // Changes of state and state symbols > figure label
    "energy absorbed (endothermic): arrows pointing right": "吸收能量（吸熱）：箭嘴向右",

    // Changes of state and state symbols > figure label
    "SOLID": "固體",

    // Changes of state and state symbols > figure label
    "LIQUID": "液體",

    // Changes of state and state symbols > figure label
    "GAS": "氣體",

    // Changes of state and state symbols > figure label
    "vaporization": "汽化 (vaporization)",

    // Changes of state and state symbols > figure label
    "energy released (exothermic): arrows pointing left": "釋出能量（放熱）：箭嘴向左",

    // widget string (assets/js/widgets-s1-1.js)
    "m.p. {T} °C": "熔點 {T} °C",

    // widget string (assets/js/widgets-s1-1.js)
    "b.p. {T} °C": "沸點 {T} °C",

    // widget string (assets/js/widgets-s1-1.js)
    "{C} °C = {K} K": "{C} °C = {K} K",

  }
});

/* Added by i18n-extract --only-missing on 2026-11-13: new or changed English. */
S1.i18n.register('zh-Hant', 's1-1', {
  strings: {

    // widget string (assets/js/widgets-s1-1.js)
    "melting|curve": "熔化",

  }
});
