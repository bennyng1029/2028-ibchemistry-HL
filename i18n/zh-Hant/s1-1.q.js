/* s1-1.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's1-1.q', {
  questions: {

    // ── s1-1-q001 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "s1-1-q001": {
      // EN: <p>Which of these is a <strong>homogeneous mixture</strong>?</p>
      stem: "<p>以下哪一項是<strong>均勻混合物</strong>？</p>",
      options: [
        // EN: Distilled water, <span class="chem">H2O</span>
        "蒸餾水 <span class=\"chem\">H2O</span>",
        // EN: Clean, dry air
        "潔淨乾燥的空氣",
        // EN: Sand stirred into water
        "攪拌在水中的沙",
        // EN: Copper wire
        "銅線",
      ],
      hints: [
        // EN: A mixture contains more than one substance, and the substances are not chemically bonded to each other.
        "混合物含有多於一種物質，而且這些物質之間沒有以化學鍵結合。",
        // EN: Homogeneous means the composition is the same throughout. You cannot see separate parts.
        "「均勻」表示各處的組成都相同，看不到分開的成分。",
      ],
      // EN: <p>Dry air is a mixture of gases (mainly nitrogen and oxygen) that is evenly mixed, so its composition is the same throughout. That is a homogeneous mixture.</p>
      solution: "<p>乾燥空氣是幾種氣體（主要是氮和氧）均勻混合而成的混合物，所以各處的組成都相同。這就是均勻混合物。</p>",
      misconception: {
        // EN (option A): Water is a compound. Its hydrogen and oxygen atoms are chemically bonded in a fixed ratio, so it is a pure substance, not a mixture.
        "0": "水是化合物。氫原子和氧原子以化學鍵結合，比例固定，所以水是純物質，不是混合物。",
        // EN (option C): This is a mixture, but you can see separate regions of sand and water. That makes it heterogeneous.
        "2": "這是混合物，但可以看到沙和水各自的區域，所以是不均勻混合物。",
        // EN (option D): Copper is an element. It contains only one type of atom.
        "3": "銅是元素，只含一種原子。",
      },
    },

    // ── s1-1-q002 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "s1-1-q002": {
      // EN: <p>A gas sample is at 25 °C. What is its temperature in kelvin? Give your answer to 3 significant figures.</p>
      stem: "<p>某氣體樣本的溫度是 25 °C。以開爾文表示，它的溫度是多少？答案取至 3 位有效數字。</p>",
      hints: [
        // EN: Kelvin and degrees Celsius have the same step size. Only the zero point is different.
        "開爾文和攝氏度的刻度大小相同，只是零點不同。",
        // EN: <span class="mono">T(K) = T(°C) + 273.15</span>
        "<span class=\"mono\">T(K) = T(°C) + 273.15</span>",
      ],
      // EN: <div class="worked__math"><i>T</i> = 25 + 273.15 = 298.15 K</div><p>To 3 significant figures this is <strong>298 K</strong>.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 25 + 273.15 = 298.15 K</div><p>取至 3 位有效數字，即 <strong>298 K</strong>。</p>",
    },

    // ── s1-1-q004 · order · foundation · SL · Structure 1.1.1 · 2 marks
    "s1-1-q004": {
      // EN: <p>Put these steps in order to get dry salt crystals from a dry mixture of sand and salt.</p>
      stem: "<p>要從沙和鹽的乾混合物中取得乾的鹽晶體，把以下步驟排列次序。</p>",
      options: [
        // EN: Add water and stir so that the salt dissolves.
        "加水並攪拌，讓鹽溶解。",
        // EN: Filter. The sand stays on the filter paper as the residue.
        "過濾。沙留在濾紙上，成為殘餘物。",
        // EN: Heat the filtrate to evaporate most of the water.
        "加熱濾液，把大部分的水蒸發掉。",
        // EN: Leave the solution to cool and crystallize, then dry the crystals.
        "讓溶液靜置冷卻並結晶，然後把晶體弄乾。",
      ],
      hints: [
        // EN: Which property is different for sand and salt? Use it first.
        "沙和鹽有哪一種性質不同？先利用它。",
        // EN: The salt ends up in the filtrate, still dissolved. What must happen to the water?
        "鹽最後在濾液中，仍然是溶解了的。水要怎樣處理？",
      ],
      // EN: <p>Salt is soluble in water and sand is not. Dissolving (solvation) then filtering separates them: sand is the residue and salt solution is the filtrate. Evaporating the water from the filtrate leaves the salt, which crystallizes and can be dried.</p>
      solution: "<p>鹽可溶於水，沙則不溶。先溶解（溶劑化），再過濾，就能把兩者分開：沙是殘餘物，鹽溶液是濾液。把濾液中的水蒸發掉，就留下鹽；鹽結晶後可以弄乾。</p>",
    },

    // ── s1-1-q006 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "s1-1-q006": {
      // EN: <p>Which of these is a <strong>compound</strong>?</p>
      stem: "<p>以下哪一項是<strong>化合物</strong>？</p>",
      options: [
        // EN: Chlorine gas, <span class="chem">Cl2</span>
        "氯氣 <span class=\"chem\">Cl2</span>",
        // EN: Ammonia, <span class="chem">NH3</span>
        "氨 <span class=\"chem\">NH3</span>",
        // EN: Air
        "空氣",
        // EN: Salt water
        "鹽水",
      ],
      hints: [
        // EN: A compound contains atoms of two or more different elements, chemically bonded.
        "化合物含有兩種或以上不同元素的原子，這些原子以化學鍵結合。",
        // EN: Look at each formula. How many different elements does it contain?
        "看看每個化學式。它含有多少種不同的元素？",
      ],
      // EN: <p>Ammonia contains nitrogen and hydrogen atoms chemically bonded in a fixed 1 : 3 ratio, so it is a compound. <span class="chem">Cl2</span> is an element. Air and salt water are mixtures.</p>
      solution: "<p>氨含有氮原子和氫原子，兩者以化學鍵結合，比例固定為 1 : 3，所以氨是化合物。<span class=\"chem\">Cl2</span> 是元素。空氣和鹽水是混合物。</p>",
      misconception: {
        // EN (option A): A chlorine molecule has two atoms, but both are chlorine atoms. One type of atom means an element.
        "0": "氯分子有兩個原子，但兩個都是氯原子。只有一種原子，就是元素。",
        // EN (option C): Air is a mixture. Its gases are not chemically bonded to each other and their proportions can vary.
        "2": "空氣是混合物。其中的氣體之間沒有以化學鍵結合，比例也可以改變。",
        // EN (option D): Salt water is a mixture (a solution). The salt and water are not chemically bonded in a fixed ratio.
        "3": "鹽水是混合物（溶液）。鹽和水並不是以固定比例用化學鍵結合的。",
      },
    },

    // ── s1-1-q007 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q007": {
      // EN: <p>On a very cold night, water vapour in the air forms ice crystals directly on a window, with no liquid in between. What is this change of state called?</p>
      stem: "<p>在非常寒冷的夜晚，空氣中的水蒸氣直接在窗上形成冰晶，中間沒有出現液體。這種物態變化叫甚麼？</p>",
      options: [
        // EN: Sublimation
        "昇華 (sublimation)",
        // EN: Condensation
        "凝結 (condensation)",
        // EN: Deposition
        "凝華 (deposition)",
        // EN: Freezing
        "凝固 (freezing)",
      ],
      hints: [
        // EN: Write down the starting state and the final state first.
        "先寫下開始時的物態和最後的物態。",
        // EN: The change is gas → solid.
        "這個變化是氣體 → 固體。",
      ],
      // EN: <p>Water vapour is a gas and ice is a solid. The change gas → solid is called <strong>deposition</strong>.</p>
      solution: "<p>水蒸氣是氣體，冰是固體。氣體 → 固體的變化叫<strong>凝華</strong> (deposition)。</p>",
      misconception: {
        // EN (option A): Sublimation is the opposite direction: solid to gas.
        "0": "昇華的方向相反：由固體變成氣體。",
        // EN (option B): Condensation is gas to liquid. Here no liquid forms.
        "1": "凝結是氣體變成液體。這裏沒有液體形成。",
        // EN (option D): Freezing is liquid to solid. Here the starting state is a gas.
        "3": "凝固是液體變成固體。這裏開始時的物態是氣體。",
      },
    },

    // ── s1-1-q008 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q008": {
      // EN: <p>Which row describes the particles in a <strong>liquid</strong>?</p>
      stem: "<p>以下哪一項描述<strong>液體</strong>中的粒子？</p>",
      options: [
        // EN: Close together, regular arrangement, vibrate about fixed positions
        "靠得很近，排列有規律，在固定位置振動",
        // EN: Close together, random arrangement, move past each other
        "靠得很近，排列不規則，可以互相滑過",
        // EN: Far apart, random arrangement, move past each other
        "相距很遠，排列不規則，可以互相滑過",
        // EN: Far apart, random arrangement, move quickly in all directions
        "相距很遠，排列不規則，向各個方向快速運動",
      ],
      hints: [
        // EN: Think about three things: spacing, arrangement and movement.
        "想想三方面：間距、排列和運動。",
        // EN: A liquid flows, but it is almost impossible to squash into a smaller volume. What does each fact tell you?
        "液體能夠流動，但幾乎不可能壓縮成更小的體積。這兩點各自說明甚麼？",
      ],
      // EN: <p>A liquid cannot easily be compressed, so its particles are close together. It flows and takes the shape of its container, so its particles are randomly arranged and can move past each other.</p>
      solution: "<p>液體不易壓縮，所以粒子靠得很近。液體能夠流動，並隨容器的形狀改變，所以粒子排列不規則，可以互相滑過。</p>",
      misconception: {
        // EN (option A): That describes a solid. In a liquid the particles are not in fixed positions.
        "0": "這是固體的描述。液體中的粒子並不在固定位置。",
        // EN (option C): Particles in a liquid are still close together. That is why a liquid is very hard to compress.
        "2": "液體中的粒子仍然靠得很近，所以液體很難壓縮。",
        // EN (option D): That describes a gas.
        "3": "這是氣體的描述。",
      },
    },

    // ── s1-1-q009 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "s1-1-q009": {
      // EN: <p>Liquid nitrogen boils at 77 K. What is this temperature in degrees Celsius? Give your answer to 3 significant figures.</p>
      stem: "<p>液態氮在 77 K 沸騰。以攝氏度表示，這個溫度是多少？答案取至 3 位有效數字。</p>",
      hints: [
        // EN: Going from kelvin to degrees Celsius, the number gets smaller.
        "從開爾文換成攝氏度，數值變小。",
        // EN: <span class="mono">T(°C) = T(K) − 273.15</span>. The answer will be negative.
        "<span class=\"mono\">T(°C) = T(K) − 273.15</span>。答案會是負數。",
      ],
      // EN: <div class="worked__math"><i>T</i> = 77 − 273.15 = −196.15 °C</div><p>To 3 significant figures this is <strong>−196 °C</strong>.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 77 − 273.15 = −196.15 °C</div><p>取至 3 位有效數字，即 <strong>−196 °C</strong>。</p>",
    },

    // ── s1-1-q010 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q010": {
      // EN: <p>Sodium chloride is dissolved in water. Which formula with state symbol describes the dissolved sodium chloride?</p>
      stem: "<p>氯化鈉溶解在水中。哪一個附有物態符號的化學式，表示溶解了的氯化鈉？</p>",
      options: [
        // EN: <span class="chem">NaCl(s)</span>
        "<span class=\"chem\">NaCl(s)</span>",
        // EN: <span class="chem">NaCl(l)</span>
        "<span class=\"chem\">NaCl(l)</span>",
        // EN: <span class="chem">NaCl(g)</span>
        "<span class=\"chem\">NaCl(g)</span>",
        // EN: <span class="chem">NaCl(aq)</span>
        "<span class=\"chem\">NaCl(aq)</span>",
      ],
      hints: [
        // EN: One state symbol means “dissolved in water”. It comes from the word aqueous.
        "有一個物態符號表示「溶解在水中」。它來自 aqueous（水溶液）這個詞。",
      ],
      // EN: <p>(aq) means aqueous: dissolved in water. The solution is written <span class="chem">NaCl(aq)</span>.</p>
      solution: "<p>(aq) 代表 aqueous，即溶解在水中。這個溶液寫成 <span class=\"chem\">NaCl(aq)</span>。</p>",
      misconception: {
        // EN (option A): (s) means solid. Once the salt has dissolved it is no longer a solid.
        "0": "(s) 表示固體。鹽溶解後就不再是固體。",
        // EN (option B): (l) means a pure liquid. <span class="chem">NaCl(l)</span> would be molten salt, above 800 °C. Dissolved in water is (aq).
        "1": "(l) 表示純液體。<span class=\"chem\">NaCl(l)</span> 是 800 °C 以上的熔融食鹽。溶解在水中要用 (aq)。",
        // EN (option C): (g) means gas. Dissolving does not turn salt into a gas.
        "2": "(g) 表示氣體。溶解不會把鹽變成氣體。",
      },
    },

    // ── s1-1-q003 · multi · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q003": {
      // EN: <p>Which of these changes of state <strong>release</strong> energy to the surroundings? Select all that apply.</p>
      stem: "<p>以下哪些物態變化會向周圍環境<strong>釋放</strong>能量？選出所有正確選項。</p>",
      options: [
        // EN: Melting
        "熔化 (melting)",
        // EN: Freezing
        "凝固 (freezing)",
        // EN: Evaporation
        "蒸發 (evaporation)",
        // EN: Condensation
        "凝結 (condensation)",
        // EN: Sublimation
        "昇華 (sublimation)",
        // EN: Deposition
        "凝華 (deposition)",
      ],
      hints: [
        // EN: Think about the direction. Do the particles end up closer together and more strongly held, or further apart?
        "想想變化的方向。粒子最後是靠得更近、被吸得更緊，還是相距更遠？",
      ],
      // EN: <p>Energy is released when particles come closer together and attractions form between them: gas to liquid (condensation), liquid to solid (freezing) and gas to solid (deposition). These changes are exothermic.</p>
      solution: "<p>粒子靠得更近、粒子間形成引力時，會釋放能量：氣體變液體（凝結）、液體變固體（凝固）和氣體變固體（凝華）。這些變化是放熱 (exothermic) 的。</p>",
      misconception: {
        // EN (option A): Melting needs energy in. The particles must overcome some of the attractions holding them in fixed positions.
        "0": "熔化需要吸收能量。粒子必須克服部分把它們固定在原位的引力。",
        // EN (option C): Evaporation needs energy in. Particles must overcome the attractions to their neighbours to escape from the liquid.
        "2": "蒸發需要吸收能量。粒子必須克服鄰近粒子的引力，才能離開液體。",
        // EN (option E): Sublimation (solid to gas) needs energy in to separate the particles.
        "4": "昇華（固體變氣體）需要吸收能量來分開粒子。",
      },
    },

    // ── s1-1-q005 · short · exam · SL · Structure 1.1.3 · 2 marks
    "s1-1-q005": {
      // EN: <p>A pure solid is heated at a steady rate. Explain why its temperature stays constant while it melts.</p>
      stem: "<p>以穩定的速率加熱一種純固體。解釋 (explain) 為甚麼它熔化時溫度保持不變。</p>",
      hints: [
        // EN: Temperature is a measure of the average kinetic energy of the particles. Where else can the energy go?
        "溫度是粒子平均動能的量度。能量還可以去哪裏？",
      ],
      // EN: <p>While the solid melts, the energy supplied is used to overcome the forces of attraction between the particles, which increases their potential energy. The average kinetic energy of the particles does not change, so the temperature stays constant.</p>
      answer: "<p>固體熔化時，所供應的能量用來克服粒子間的引力，這會增加粒子的勢能。粒子的平均動能不變，所以溫度保持不變。</p>",
      markscheme: [
        // EN: Energy is used to overcome (or weaken) the forces of attraction between the particles. Accept: increases the potential energy of the particles.
        "能量用來克服（或減弱）粒子間的引力。接受：增加粒子的勢能。",
        // EN: The average kinetic energy of the particles does not change (so the temperature is constant).
        "粒子的平均動能不變（所以溫度保持不變）。",
      ],
    },

    // ── s1-1-q011 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q011": {
      // EN: <p>Propanone and water mix completely to give a clear, colourless liquid. Propanone boils at 56 °C and water boils at 100 °C. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of mixture</th><th scope="col">Best method to separate</th></tr></thead><tbody><tr><th scope="row">A</th><td>homogeneous</td><td>filtration</td></tr><tr><th scope="row">B</th><td>homogeneous</td><td>distillation</td></tr><tr><th scope="row">C</th><td>heterogeneous</td><td>filtration</td></tr><tr><th scope="row">D</th><td>heterogeneous</td><td>distillation</td></tr></tbody></table></div>
      stem: "<p>丙酮 (propanone) 和水完全互溶，形成清澈無色的液體。丙酮在 56 °C 沸騰，水在 100 °C 沸騰。哪一行正確？</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">混合物的類型</th><th scope=\"col\">最佳的分離方法</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>均勻</td><td>過濾</td></tr><tr><th scope=\"row\">B</th><td>均勻</td><td>蒸餾</td></tr><tr><th scope=\"row\">C</th><td>不均勻</td><td>過濾</td></tr><tr><th scope=\"row\">D</th><td>不均勻</td><td>蒸餾</td></tr></tbody></table></div>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
      ],
      hints: [
        // EN: “Mix completely” and “clear” tell you whether you can see separate parts.
        "「完全互溶」和「清澈」說明能否看到分開的成分。",
        // EN: Which property is different for the two liquids? The question gives you the data.
        "兩種液體有哪一種性質不同？題目已提供數據。",
      ],
      // EN: <p>The two liquids mix completely, so the composition is the same throughout: a homogeneous mixture. They have different boiling points, so they can be separated by distillation. Propanone has the lower boiling point, so it vaporizes more easily and is collected first.</p>
      solution: "<p>兩種液體完全互溶，所以各處的組成都相同：是均勻混合物。兩者的沸點不同，所以可以用蒸餾分離。丙酮的沸點較低，較容易汽化，會先被收集。</p>",
      misconception: {
        // EN (option A): The mixture type is right, but filtration only removes an undissolved solid. Both liquids pass through filter paper.
        "0": "混合物的類型正確，但過濾只能除去未溶解的固體。兩種液體都會通過濾紙。",
        // EN (option C): The liquids mix completely, so the composition is the same throughout: homogeneous. And both liquids pass through filter paper.
        "2": "兩種液體完全互溶，所以各處的組成都相同：是均勻混合物。而且兩種液體都會通過濾紙。",
        // EN (option D): The method is right, but the liquids mix completely. There are no separate layers, so the mixture is homogeneous.
        "3": "方法正確，但兩種液體完全互溶，沒有分層，所以是均勻混合物。",
      },
    },

    // ── s1-1-q012 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q012": {
      // EN: <p>A student sets up paper chromatography to separate the dyes in an ink. Why must the solvent level in the beaker start <strong>below</strong> the baseline where the ink spot is placed?</p>
      stem: "<p>一名學生用紙色層法分離墨水中的染料。開始時，燒杯中溶劑的液面為甚麼必須<strong>低於</strong>點有墨水斑點的基線？</p>",
      options: [
        // EN: So that the solvent does not evaporate before it reaches the spot
        "使溶劑不會在到達斑點前蒸發掉",
        // EN: So that the dyes are carried up the paper and do not dissolve into the solvent in the beaker
        "使染料被溶劑帶着沿紙向上移動，而不會溶進燒杯的溶劑中",
        // EN: So that the pencil baseline does not dissolve in the solvent
        "使鉛筆畫的基線不會溶於溶劑",
        // EN: So that the dyes react with the paper before the solvent reaches them
        "使染料在溶劑到達前先與紙反應",
      ],
      hints: [
        // EN: Imagine the spot starting underneath the surface of the solvent. Where would the dyes go?
        "想像斑點一開始就在溶劑液面之下。染料會去哪裏？",
      ],
      // EN: <p>If the spot starts below the solvent surface, the dyes dissolve straight into the solvent in the beaker. With the solvent level below the baseline, the solvent rises up the paper, reaches the spot and carries the dyes upward, each by a different distance.</p>
      solution: "<p>如果斑點一開始就在溶劑液面之下，染料會直接溶進燒杯的溶劑中。溶劑液面低於基線時，溶劑沿紙上升，到達斑點，再帶着染料向上移動，每種染料移動的距離都不同。</p>",
      misconception: {
        // EN (option A): Evaporation is reduced by putting a lid on the beaker. It is not the reason for the solvent level.
        "0": "在燒杯上加蓋可以減少蒸發。這不是溶劑液面要低於基線的原因。",
        // EN (option C): Pencil does not dissolve in the solvent at any level. That is why the baseline is drawn in pencil and not in ink.
        "2": "無論液面在哪裏，鉛筆痕都不會溶於溶劑。所以基線用鉛筆畫，不用墨水畫。",
        // EN (option D): Chromatography is a physical separation. The dyes do not react with the paper.
        "3": "色層法是物理分離方法。染料不會與紙反應。",
      },
    },

    // ── s1-1-q013 · short · exam · SL · Structure 1.1.1 · 2 marks
    "s1-1-q013": {
      // EN: <p>Distinguish between an element and a compound.</p>
      stem: "<p>區分 (distinguish) 元素和化合物。</p>",
      hints: [
        // EN: “Distinguish” asks for the difference. Write one clear statement about each, so the two can be compared.
        "「區分」(distinguish) 要求你寫出兩者的分別。為兩者各寫一句清晰的陳述，讓兩者可以比較。",
      ],
      // EN: <p>An element contains only one type of atom and cannot be chemically broken down into simpler substances. A compound contains atoms of two or more different elements chemically bonded together in a fixed ratio.</p>
      answer: "<p>元素只含一種原子，不能用化學方法分解成更簡單的物質。化合物含有兩種或以上不同元素的原子，這些原子以化學鍵結合，比例固定。</p>",
      markscheme: [
        // EN: Element: contains only one type of atom. Accept: cannot be chemically broken down into simpler substances.
        "元素：只含一種原子。接受：不能用化學方法分解成更簡單的物質。",
        // EN: Compound: atoms of (two or more) different elements chemically bonded/combined. Accept: can be broken down into simpler substances by chemical means.
        "化合物：含有（兩種或以上）不同元素的原子，以化學鍵結合／化合。接受：可以用化學方法分解成更簡單的物質。",
      ],
    },

    // ── s1-1-q014 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q014": {
      // EN: <p>In recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent. What happens if much more hot solvent than this is used?</p>
      stem: "<p>再結晶時，要用<strong>最少量</strong>的熱溶劑溶解不純的固體。如果所用的熱溶劑比這個分量多很多，會怎樣？</p>",
      options: [
        // EN: Fewer crystals form on cooling, because more of the product stays dissolved
        "冷卻時形成的晶體較少，因為有較多生成物仍然溶解",
        // EN: The insoluble impurities dissolve and can no longer be filtered off
        "不溶的雜質會溶解，不能再用過濾除去",
        // EN: The crystals form faster on cooling, so they are less pure
        "冷卻時晶體形成得較快，所以純度較低",
        // EN: The product reacts with the extra solvent
        "生成物與多出來的溶劑反應",
      ],
      hints: [
        // EN: Even cold solvent dissolves a little of the product.
        "即使是冷溶劑，也會溶解少量生成物。",
        // EN: More solvent can hold more dissolved product after cooling. What does that do to the mass of crystals?
        "溶劑越多，冷卻後能溶解的生成物就越多。這對晶體的質量有甚麼影響？",
      ],
      // EN: <p>Some product always stays dissolved in the cold solvent. The larger the volume of solvent, the more product stays in solution, so fewer crystals form and the yield is lower. Using the minimum volume of hot solvent gives a solution that is close to saturated, so most of the product crystallizes on cooling.</p>
      solution: "<p>總有一些生成物仍然溶解在冷溶劑中。溶劑的體積越大，留在溶液中的生成物就越多，所以形成的晶體較少，產量較低。用最少量的熱溶劑，可以得到接近飽和的溶液，冷卻時大部分生成物都會結晶。</p>",
      misconception: {
        // EN (option B): Insoluble impurities do not dissolve in the solvent, however much is used. They are removed by filtering the hot solution.
        "1": "不溶的雜質無論用多少溶劑都不會溶解。它們是靠過濾熱溶液除去的。",
        // EN (option C): A more dilute solution does not crystallize faster. It may not crystallize at all.
        "2": "較稀的溶液不會結晶得較快，甚至可能完全不結晶。",
        // EN (option D): Recrystallization is a physical process. The solvent is chosen so that it does not react with the product.
        "3": "再結晶是物理過程。選用的溶劑不會與生成物反應。",
      },
    },

    // ── s1-1-q015 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q015": {
      // EN: <p>A pure substance X is heated steadily from 20 °C. Its temperature rises to 80 °C and stays there for four minutes. It then rises to 218 °C and stays there for several minutes before rising again. What is present at 150 °C?</p>
      stem: "<p>由 20 °C 開始，以穩定的速率加熱純物質 X。溫度升至 80 °C，並停留四分鐘。然後溫度升至 218 °C，停留幾分鐘後再上升。在 150 °C 時，X 以甚麼物態存在？</p>",
      options: [
        // EN: Solid only
        "只有固體",
        // EN: Solid and liquid together
        "固體和液體並存",
        // EN: Liquid only
        "只有液體",
        // EN: Gas only
        "只有氣體",
      ],
      hints: [
        // EN: A flat part of a heating curve is a change of state. There are two of them here.
        "加熱曲線的水平部分代表物態變化。這裏有兩段。",
        // EN: The melting point is 80 °C and the boiling point is 218 °C. Where does 150 °C sit?
        "熔點是 80 °C，沸點是 218 °C。150 °C 在哪個位置？",
      ],
      // EN: <p>The temperature stays constant at 80 °C (melting) and at 218 °C (boiling). 150 °C is above the melting point and below the boiling point, on a sloping part of the curve, so X is a liquid only.</p>
      solution: "<p>溫度在 80 °C（熔化）和 218 °C（沸騰）保持不變。150 °C 高於熔點、低於沸點，位於曲線的傾斜部分，所以 X 只以液體存在。</p>",
      misconception: {
        // EN (option A): X is a solid only below its melting point. The first flat part, at 80 °C, is the melting point.
        "0": "X 在熔點以下才只有固體。第一段水平部分（80 °C）是熔點。",
        // EN (option B): Two states are present together only on a flat part of the curve. At 150 °C the temperature is rising.
        "1": "只有在曲線的水平部分，兩種物態才會並存。在 150 °C 時，溫度正在上升。",
        // EN (option D): X is a gas only above its boiling point. The second flat part, at 218 °C, is the boiling point.
        "3": "X 在沸點以上才只有氣體。第二段水平部分（218 °C）是沸點。",
      },
    },

    // ── s1-1-q016 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q016": {
      // EN: <p>In an experiment, a solution warms from 18.5 °C to 46.0 °C. What is the temperature <strong>change</strong> in kelvin?</p>
      stem: "<p>在一個實驗中，某溶液由 18.5 °C 升溫至 46.0 °C。以開爾文表示，溫度<strong>變化</strong>是多少？</p>",
      hints: [
        // EN: This is a change, not a single temperature reading.
        "這是溫度變化，不是單一個溫度讀數。",
        // EN: One kelvin is the same size as one degree Celsius. Change = final − initial.
        "一開爾文的大小與一攝氏度相同。變化 = 最終值 − 初始值。",
      ],
      // EN: <div class="worked__math">Δ<i>T</i> = 46.0 °C − 18.5 °C = 27.5 °C = <b>27.5 K</b></div><p>Check the long way: (46.0 + 273.15) − (18.5 + 273.15) = 319.15 K − 291.65 K = 27.5 K. The 273.15 cancels. Adding 273.15 to the change (to get 300.65) is a common error.</p>
      solution: "<div class=\"worked__math\">Δ<i>T</i> = 46.0 °C − 18.5 °C = 27.5 °C = <b>27.5 K</b></div><p>用較長的做法驗算：(46.0 + 273.15) − (18.5 + 273.15) = 319.15 K − 291.65 K = 27.5 K。273.15 互相抵消。把 273.15 加到溫度變化上（得出 300.65）是常見錯誤。</p>",
    },

    // ── s1-1-q017 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q017": {
      // EN: <p>Beaker 1 contains 50 g of water at 60 °C. Beaker 2 contains 200 g of water at 60 °C. Which statement about the average kinetic energy of the water molecules is correct?</p>
      stem: "<p>燒杯 1 盛有 50 g 的水，溫度是 60 °C。燒杯 2 盛有 200 g 的水，溫度是 60 °C。以下哪一項關於水分子平均動能的陳述正確？</p>",
      options: [
        // EN: It is greater in beaker 1, because there are fewer molecules to share the energy
        "燒杯 1 的較大，因為分享能量的分子較少",
        // EN: It is greater in beaker 2, because there are more molecules
        "燒杯 2 的較大，因為分子較多",
        // EN: It is the same in both beakers
        "兩個燒杯的相同",
        // EN: It cannot be compared without knowing the volumes
        "不知道體積就不能比較",
      ],
      hints: [
        // EN: What does temperature measure? Compare the two temperatures.
        "溫度量度的是甚麼？比較兩個溫度。",
      ],
      // EN: <p>Temperature is a measure of the average kinetic energy of the particles. Both beakers are at 60 °C (333.15 K), so the average kinetic energy of the molecules is the same in both. Beaker 2 has more molecules, so its total energy is greater, but the average is not.</p>
      solution: "<p>溫度是粒子平均動能的量度。兩個燒杯都是 60 °C (333.15 K)，所以兩者的分子平均動能相同。燒杯 2 的分子較多，所以總能量較大，但平均值並不較大。</p>",
      misconception: {
        // EN (option A): Temperature already measures the average per particle. The number of particles sharing the energy does not matter.
        "0": "溫度量度的已經是每個粒子的平均值。有多少粒子分享能量並不重要。",
        // EN (option B): Beaker 2 has more energy in total, but the question asks about the average per molecule. That depends only on temperature.
        "1": "燒杯 2 的總能量較多，但題目問的是每個分子的平均值。這只取決於溫度。",
        // EN (option D): Volume is not needed. The temperature tells you the average kinetic energy.
        "3": "不需要知道體積。溫度已經反映平均動能。",
      },
    },

    // ── s1-1-q018 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q018": {
      // EN: <p>Solid calcium carbonate reacts with dilute hydrochloric acid. The products are calcium chloride solution, water and carbon dioxide gas. Which equation has the correct state symbols?</p>
      stem: "<p>固體碳酸鈣 (calcium carbonate) 與稀氫氯酸 (dilute hydrochloric acid) 反應，生成物是氯化鈣溶液、水和二氧化碳氣體。哪一條方程式的物態符號正確？</p>",
      options: [
        // EN: <span class="chem">CaCO3(s) + 2HCl(l) -> CaCl2(aq) + H2O(l) + CO2(g)</span>
        "<span class=\"chem\">CaCO3(s) + 2HCl(l) -> CaCl2(aq) + H2O(l) + CO2(g)</span>",
        // EN: <span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(aq) + CO2(g)</span>
        "<span class=\"chem\">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(aq) + CO2(g)</span>",
        // EN: <span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span>
        "<span class=\"chem\">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span>",
        // EN: <span class="chem">CaCO3(aq) + 2HCl(aq) -> CaCl2(s) + H2O(l) + CO2(g)</span>
        "<span class=\"chem\">CaCO3(aq) + 2HCl(aq) -> CaCl2(s) + H2O(l) + CO2(g)</span>",
      ],
      hints: [
        // EN: Translate each phrase: “solid”, “dilute … acid”, “solution”, “gas”.
        "把每個詞語轉成物態符號：「固體」、「稀⋯⋯酸」、「溶液」、「氣體」。",
        // EN: Water is written <span class="chem">H2O(l)</span>.
        "水寫成 <span class=\"chem\">H2O(l)</span>。",
      ],
      // EN: <p>Solid calcium carbonate is (s). Dilute hydrochloric acid and calcium chloride solution are dissolved in water, so both are (aq). Water is a pure liquid, (l). Carbon dioxide is a gas, (g).</p><p><span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span></p>
      solution: "<p>固體碳酸鈣是 (s)。稀氫氯酸和氯化鈣溶液都是溶解在水中的，所以兩者都是 (aq)。水是純液體 (l)。二氧化碳是氣體 (g)。</p><p><span class=\"chem\">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span></p>",
      misconception: {
        // EN (option A): Dilute hydrochloric acid is hydrogen chloride dissolved in water, so it is (aq). (l) would mean pure liquid hydrogen chloride.
        "0": "稀氫氯酸是溶解在水中的氯化氫，所以是 (aq)。(l) 表示純液態氯化氫。",
        // EN (option B): Water is the solvent. It is a pure liquid, (l). It cannot be “dissolved in water”.
        "1": "水是溶劑，是純液體 (l)。水不可能「溶解在水中」。",
        // EN (option D): The question says the calcium carbonate is solid, (s), and the calcium chloride is a solution, (aq).
        "3": "題目說碳酸鈣是固體 (s)，氯化鈣是溶液 (aq)。",
      },
    },

    // ── s1-1-q019 · short · exam · SL · Structure 1.1.2 · 2 marks
    "s1-1-q019": {
      // EN: <p>The air in a sealed syringe can easily be squeezed into a smaller volume. Water in the same syringe cannot. Explain this difference using the kinetic molecular theory.</p>
      stem: "<p>密封針筒內的空氣可以輕易壓縮成較小的體積。同一個針筒內的水卻不可以。用分子運動論解釋 (explain) 這個分別。</p>",
      hints: [
        // EN: Compare the spacing of the particles in a gas and in a liquid.
        "比較氣體和液體中粒子的間距。",
      ],
      // EN: <p>In a gas the particles are far apart, with a lot of empty space between them, so they can be pushed closer together. In a liquid the particles are already close together (touching), so there is very little space to push them into.</p>
      answer: "<p>氣體中的粒子相距很遠，粒子之間有很多空間，所以可以把粒子推得更近。液體中的粒子本來已經靠得很近（互相接觸），所以幾乎沒有空間可以再把粒子推近。</p>",
      markscheme: [
        // EN: Gas: particles are far apart / there is a lot of empty space between particles (so they can be pushed closer together).
        "氣體：粒子相距很遠／粒子之間有很多空間（所以可以把粒子推得更近）。",
        // EN: Liquid: particles are (already) close together / touching / there is very little space between particles.
        "液體：粒子（本來已經）靠得很近／互相接觸／粒子之間的空間極少。",
      ],
    },

    // ── s1-1-q020 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q020": {
      // EN: <p>Mercury melts at −38.83 °C. What is this temperature in kelvin? Give your answer to 2 decimal places.</p>
      stem: "<p>汞在 −38.83 °C 熔化。以開爾文表示，這個溫度是多少？答案取至小數點後 2 位。</p>",
      hints: [
        // EN: Keep the minus sign when you substitute.
        "代入數值時要保留負號。",
        // EN: <span class="mono">T(K) = (−38.83) + 273.15</span>
        "<span class=\"mono\">T(K) = (−38.83) + 273.15</span>",
      ],
      // EN: <div class="worked__math"><i>T</i> = (−38.83) + 273.15 = <b>234.32 K</b></div><p>Both values have two decimal places, so the answer keeps two. A common slip is to lose the minus sign, which gives 311.98 K.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = (−38.83) + 273.15 = <b>234.32 K</b></div><p>兩個數值都有兩位小數，所以答案保留兩位。常見的失誤是漏掉負號，結果得出 311.98 K。</p>",
    },

    // ── s1-1-q021 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q021": {
      // EN: <p>When solid iodine is warmed gently, it turns directly into a purple gas: <span class="chem">I2(s) -> I2(g)</span>. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Name of the change</th><th scope="col">Energy</th></tr></thead><tbody><tr><th scope="row">A</th><td>sublimation</td><td>absorbed from the surroundings</td></tr><tr><th scope="row">B</th><td>sublimation</td><td>released to the surroundings</td></tr><tr><th scope="row">C</th><td>deposition</td><td>absorbed from the surroundings</td></tr><tr><th scope="row">D</th><td>evaporation</td><td>absorbed from the surroundings</td></tr></tbody></table></div>
      stem: "<p>固體碘稍為加熱，會直接變成紫色氣體：<span class=\"chem\">I2(s) -> I2(g)</span>。哪一行正確？</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">變化的名稱</th><th scope=\"col\">能量</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>昇華 (sublimation)</td><td>從周圍環境吸收</td></tr><tr><th scope=\"row\">B</th><td>昇華 (sublimation)</td><td>向周圍環境釋放</td></tr><tr><th scope=\"row\">C</th><td>凝華 (deposition)</td><td>從周圍環境吸收</td></tr><tr><th scope=\"row\">D</th><td>蒸發 (evaporation)</td><td>從周圍環境吸收</td></tr></tbody></table></div>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
      ],
      hints: [
        // EN: Read the state symbols: (s) → (g).
        "看看物態符號：(s) → (g)。",
        // EN: Do the particles end up further apart or closer together?
        "粒子最後是相距更遠，還是靠得更近？",
      ],
      // EN: <p>Solid → gas is sublimation. The particles must overcome the attractions between them to separate, which needs energy, so energy is absorbed from the surroundings (endothermic).</p>
      solution: "<p>固體 → 氣體是昇華。粒子必須克服粒子間的引力才能分開，這需要能量，所以會從周圍環境吸收能量（吸熱，endothermic）。</p>",
      misconception: {
        // EN (option B): The name is right, but separating the particles of a solid needs energy in. Sublimation is endothermic.
        "1": "名稱正確，但把固體的粒子分開需要吸收能量。昇華是吸熱的。",
        // EN (option C): Deposition is the reverse change, gas to solid.
        "2": "凝華是相反的變化，由氣體變成固體。",
        // EN (option D): Evaporation starts from a liquid. The state symbols show the iodine starts as a solid.
        "3": "蒸發由液體開始。物態符號顯示碘開始時是固體。",
      },
    },

    // ── s1-1-q029 · short · exam · SL · Structure 1.1.1 · 4 marks
    "s1-1-q029": {
      // EN: <p>A dry mixture contains iron filings, sand and salt (sodium chloride). Iron is attracted to a magnet. Sand and salt are not. Outline how to obtain a dry sample of each of the three solids.</p>
      stem: "<p>一份乾混合物含有鐵屑、沙和食鹽（氯化鈉）。鐵會被磁鐵吸引，沙和鹽則不會。概述 (outline) 怎樣取得這三種固體各自的乾燥樣本。</p>",
      hints: [
        // EN: Find a physical property that is different for each solid. The question gives you one of them.
        "為每種固體找出一種不同的物理性質。題目已經告訴你其中一種。",
        // EN: After filtering, neither product is finished. One is wet and one is still dissolved.
        "過濾後，兩種物質都還未處理好：一種是濕的，另一種仍然溶解在水中。",
      ],
      // EN: <p>Use a magnet to remove the iron filings. Add water to the sand and salt and stir, so that the salt dissolves. Filter: the sand stays on the filter paper as the residue. Rinse the sand with a little water and leave it to dry. Heat the filtrate to evaporate the water, leave it to crystallize, and dry the salt crystals.</p>
      answer: "<p>用磁鐵取走鐵屑。在沙和鹽中加水並攪拌，讓鹽溶解。過濾：沙留在濾紙上，成為殘餘物。用少量水沖洗沙，然後放着讓它變乾。加熱濾液，把水蒸發掉，靜置讓它結晶，再把鹽晶體弄乾。</p>",
      markscheme: [
        // EN: Use a magnet to remove the iron (filings).
        "用磁鐵取走鐵（屑）。",
        // EN: Add water and stir / dissolve the salt.
        "加水並攪拌／把鹽溶解。",
        // EN: Filter (to remove the sand): sand is the residue / salt solution is the filtrate.
        "過濾（以除去沙）：沙是殘餘物／鹽溶液是濾液。",
        // EN: Rinse and dry the sand / the residue.
        "沖洗並弄乾沙／殘餘物。",
        // EN: Evaporate the water from the filtrate / heat the filtrate and leave it to crystallize (to obtain the salt).
        "把濾液中的水蒸發掉／加熱濾液並靜置讓它結晶（以取得鹽）。",
      ],
    },

    // ── s1-1-q030 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q030": {
      // EN: <p>Evaporation and boiling are both types of vaporization. Which statement is correct?</p>
      stem: "<p>蒸發和沸騰都屬於汽化。以下哪一項陳述正確？</p>",
      options: [
        // EN: Evaporation happens only at the boiling point
        "蒸發只在沸點發生",
        // EN: Boiling happens only at the surface of the liquid
        "沸騰只在液面發生",
        // EN: Evaporation happens at the surface of the liquid, at temperatures below the boiling point
        "蒸發在液面發生，溫度低於沸點",
        // EN: Evaporation releases energy to the surroundings and boiling absorbs energy
        "蒸發向周圍環境釋放能量，沸騰則吸收能量",
      ],
      hints: [
        // EN: Think of a puddle drying up and a kettle boiling. Where does the vapour form in each one?
        "想想水窪變乾和水壺裏的水沸騰。兩種情況中，蒸氣在哪裏形成？",
        // EN: Both changes are liquid → gas.
        "兩種變化都是液體 → 氣體。",
      ],
      // EN: <p>Evaporation takes place at the surface of a liquid, at temperatures below the boiling point. Boiling takes place at the boiling point, with bubbles of vapour forming throughout the liquid. Both are vaporization (liquid → gas), and both absorb energy.</p>
      solution: "<p>蒸發在液面發生，溫度低於沸點。沸騰在沸點發生，整個液體內都會形成蒸氣泡。兩者都是汽化（液體 → 氣體），都會吸收能量。</p>",
      misconception: {
        // EN (option A): That describes boiling. A puddle evaporates on a cool day, far below 100 °C.
        "0": "這是沸騰的描述。水窪在清涼的日子也會蒸發，溫度遠低於 100 °C。",
        // EN (option B): That describes evaporation. In boiling, bubbles of vapour form all through the liquid.
        "1": "這是蒸發的描述。沸騰時，整個液體內都會形成蒸氣泡。",
        // EN (option D): Both are liquid → gas, so both absorb energy. The particles must overcome the attractions to their neighbours.
        "3": "兩者都是液體 → 氣體，所以都吸收能量。粒子必須克服鄰近粒子的引力。",
      },
    },

    // ── s1-1-q027 · mcq · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q027": {
      // EN: <p>Three samples of nitrogen gas are at different temperatures: X is at 150 K, Y is at −150 °C and Z is at 150 °C. Which list puts the samples in order of the average kinetic energy of their molecules, <strong>lowest first</strong>?</p>
      stem: "<p>三個氮氣樣本的溫度各不相同：X 是 150 K，Y 是 −150 °C，Z 是 150 °C。哪一項按分子的平均動能排列這些樣本，<strong>由最低開始</strong>？</p>",
      options: [
        // EN: X, Y, Z
        "X、Y、Z",
        // EN: Y, X, Z
        "Y、X、Z",
        // EN: Y, Z, X
        "Y、Z、X",
        // EN: They are all the same
        "全部相同",
      ],
      hints: [
        // EN: Temperature is a measure of average kinetic energy, so the coldest sample has the lowest average kinetic energy.
        "溫度是平均動能的量度，所以最冷的樣本平均動能最低。",
        // EN: Put all three temperatures on the same scale before you compare them.
        "比較前，先把三個溫度換成同一種溫標。",
      ],
      // EN: <div class="worked__math">X: 150 K</div><div class="worked__math">Y: (−150) + 273.15 = 123.15 K</div><div class="worked__math">Z: 150 + 273.15 = 423.15 K</div><p>Temperature is a measure of the average kinetic energy of the particles. The order of temperature, lowest first, is Y, X, Z, so that is also the order of average kinetic energy.</p>
      solution: "<div class=\"worked__math\">X：150 K</div><div class=\"worked__math\">Y：(−150) + 273.15 = 123.15 K</div><div class=\"worked__math\">Z：150 + 273.15 = 423.15 K</div><p>溫度是粒子平均動能的量度。溫度由低至高的次序是 Y、X、Z，所以平均動能的次序也是這樣。</p>",
      misconception: {
        // EN (option A): You may have treated −150 °C as larger than 150 K. Convert first: −150 °C = 123.15 K, which is colder than 150 K.
        "0": "你可能把 −150 °C 當作比 150 K 大。先換算：−150 °C = 123.15 K，比 150 K 更冷。",
        // EN (option C): X is at 150 K, which is −123.15 °C. That is much colder than Z at 150 °C, so X cannot have the highest average kinetic energy.
        "2": "X 是 150 K，即 −123.15 °C，比 150 °C 的 Z 冷得多，所以 X 的平均動能不可能最高。",
        // EN (option D): The number 150 appears three times, but the units and signs differ. These are three different temperatures.
        "3": "150 這個數出現了三次，但單位和正負號不同。這是三個不同的溫度。",
      },
    },

    // ── s1-1-q028 · numeric · challenge · SL · Structure 1.1.3 · 2 marks
    "s1-1-q028": {
      // EN: <p>A liquid starts at −12.48 °C. It is warmed until its temperature has risen by 85.00 K. What is its final temperature in kelvin? Give your answer to 2 decimal places.</p>
      stem: "<p>某液體最初的溫度是 −12.48 °C。把它加熱，直至溫度上升了 85.00 K。以開爾文表示，它最終的溫度是多少？答案取至小數點後 2 位。</p>",
      hints: [
        // EN: There are two different things here: a single temperature reading and a temperature change. Which one needs 273.15?
        "這裏有兩樣不同的東西：單一個溫度讀數和溫度變化。哪一個需要用 273.15？",
        // EN: Convert −12.48 °C to kelvin. Then add the rise. A rise of 85.00 K is the same as a rise of 85.00 °C.
        "把 −12.48 °C 換算成開爾文，然後加上升幅。上升 85.00 K 等於上升 85.00 °C。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>start</sub> = (−12.48) + 273.15 = 260.67 K</div><div class="worked__math"><i>T</i><sub>final</sub> = 260.67 K + 85.00 K = <b>345.67 K</b></div><p>Only the starting reading is converted. Adding 273.15 to the rise as well gives 618.82 K, which is wrong. Forgetting to convert at all gives 72.52, which is the final temperature in °C, not in K.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>start</sub> = (−12.48) + 273.15 = 260.67 K</div><div class=\"worked__math\"><i>T</i><sub>final</sub> = 260.67 K + 85.00 K = <b>345.67 K</b></div><p>只有開始時的讀數需要換算。如果把 273.15 也加到升幅上，會得出 618.82 K，這是錯的。如果完全忘記換算，會得出 72.52，這是以 °C 表示的最終溫度，不是以 K 表示的。</p>",
    },

    // ── s1-1-q024 · mcq · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q024": {
      // EN: <p>The table gives the melting and boiling points of four substances. Which substance is a <strong>liquid</strong> at −50 °C?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num">Melting point / K</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">63</td><td class="num">77</td></tr><tr><th scope="row">B</th><td class="num">159</td><td class="num">352</td></tr><tr><th scope="row">C</th><td class="num">234</td><td class="num">630</td></tr><tr><th scope="row">D</th><td class="num">273</td><td class="num">373</td></tr></tbody></table></div>
      stem: "<p>下表列出四種物質的熔點和沸點。哪一種物質在 −50 °C 時是<strong>液體</strong>？</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\" class=\"num\">熔點 / K</th><th scope=\"col\" class=\"num\">沸點 / K</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">63</td><td class=\"num\">77</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">159</td><td class=\"num\">352</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">234</td><td class=\"num\">630</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">273</td><td class=\"num\">373</td></tr></tbody></table></div>",
      options: [
        // EN: A
        "A",
        // EN: B
        "B",
        // EN: C
        "C",
        // EN: D
        "D",
      ],
      hints: [
        // EN: Put everything in the same unit first.
        "先把所有數值換成相同單位。",
        // EN: −50 °C = 223.15 K. A liquid is above its melting point and below its boiling point.
        "−50 °C = 223.15 K。液體的溫度高於熔點、低於沸點。",
      ],
      // EN: <div class="worked__math"><i>T</i> = (−50) + 273.15 = 223.15 K</div><p>A substance is a liquid when the temperature is between its melting point and its boiling point. Only B fits: 159 K &lt; 223.15 K &lt; 352 K. A is a gas. C and D are solids.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = (−50) + 273.15 = 223.15 K</div><p>溫度在熔點和沸點之間時，物質是液體。只有 B 符合：159 K &lt; 223.15 K &lt; 352 K。A 是氣體。C 和 D 是固體。</p>",
      misconception: {
        // EN (option A): −50 °C is 223.15 K. That is above the boiling point of A (77 K), so A is a gas.
        "0": "−50 °C 是 223.15 K，高於 A 的沸點 (77 K)，所以 A 是氣體。",
        // EN (option C): −50 °C is 223.15 K. That is below the melting point of C (234 K), so C is still a solid.
        "2": "−50 °C 是 223.15 K，低於 C 的熔點 (234 K)，所以 C 仍然是固體。",
        // EN (option D): −50 °C is 223.15 K. That is below the melting point of D (273 K), so D is a solid.
        "3": "−50 °C 是 223.15 K，低於 D 的熔點 (273 K)，所以 D 是固體。",
      },
    },

    // ── s1-1-q025 · short · challenge · SL · Structure 1.1.3 · 3 marks
    "s1-1-q025": {
      // EN: <p>Steam at 100 °C causes a more serious burn than the same mass of liquid water at 100 °C. Explain this, using ideas about particles and changes of state.</p>
      stem: "<p>100 °C 的水蒸氣造成的燙傷，比相同質量的 100 °C 液態水更嚴重。用粒子和物態變化的概念解釋 (explain) 這個現象。</p>",
      hints: [
        // EN: What is the same for the steam and the water? What is different?
        "水蒸氣和水有甚麼相同？有甚麼不同？",
        // EN: What happens to steam when it touches something cooler than 100 °C? Is energy absorbed or released?
        "水蒸氣接觸到低於 100 °C 的東西時會怎樣？是吸收還是釋放能量？",
      ],
      // EN: <p>The steam and the water are at the same temperature, so their particles have the same average kinetic energy. But when steam touches cooler skin it condenses. Condensation releases energy, because forces of attraction form between the particles as they come close together. The liquid water formed then cools from 100 °C, releasing the same energy as the hot water would. So steam transfers more energy to the skin in total.</p>
      answer: "<p>水蒸氣和水的溫度相同，所以兩者的粒子平均動能相同。但水蒸氣接觸到較冷的皮膚時會凝結。凝結會釋放能量，因為粒子靠近時，粒子間形成引力。凝結而成的液態水再由 100 °C 冷卻，釋放的能量與熱水釋放的相同。所以水蒸氣傳給皮膚的總能量較多。</p>",
      markscheme: [
        // EN: Same temperature, so the particles have the same average kinetic energy. Accept: the difference is not due to temperature.
        "溫度相同，所以粒子的平均動能相同。接受：這個分別不是溫度造成的。",
        // EN: Steam condenses on the skin, and condensation releases energy / is exothermic.
        "水蒸氣在皮膚上凝結，而凝結會釋放能量／是放熱的。",
        // EN: Energy is released because forces of attraction form between the particles (as they come closer together). Accept: steam also then cools as liquid water, so more energy is transferred in total.
        "釋放能量是因為粒子間形成引力（粒子靠得更近時）。接受：水蒸氣凝結成液態水後還會冷卻，所以傳遞的總能量較多。",
      ],
    },

    // ── s1-1-q026 · multi · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q026": {
      // EN: <p>A pure liquid is cooled steadily in a freezer. For several minutes it is freezing: liquid and solid are both present. Which statements are correct <strong>during this time</strong>? Select all that apply.</p>
      stem: "<p>在冷凍櫃中以穩定的速率冷卻一種純液體。有幾分鐘它正在凝固：液體和固體同時存在。<strong>在這段時間內</strong>，以下哪些陳述正確？選出所有正確選項。</p>",
      options: [
        // EN: The temperature of the substance stays constant.
        "物質的溫度保持不變。",
        // EN: The average kinetic energy of the particles is decreasing.
        "粒子的平均動能正在減少。",
        // EN: Energy is being released to the surroundings.
        "能量正釋放到周圍環境。",
        // EN: The particles stop moving as they join the solid.
        "粒子加入固體後就停止運動。",
        // EN: Forces of attraction hold more and more particles in fixed positions.
        "引力把越來越多粒子固定在原位。",
      ],
      hints: [
        // EN: Freezing is a change of state. What does a cooling curve look like during a change of state?
        "凝固是物態變化。物態變化期間，冷卻曲線是甚麼樣子的？",
        // EN: Energy keeps leaving the substance, but the temperature is not falling. Which kind of energy is changing?
        "能量不斷離開物質，但溫度沒有下降。哪一種能量正在改變？",
      ],
      // EN: <p>During freezing the temperature stays constant, so the average kinetic energy of the particles does not change. Energy is still released to the colder surroundings: it comes from the decrease in potential energy as attractions hold the particles in fixed positions. The particles in the solid continue to vibrate.</p>
      solution: "<p>凝固期間溫度保持不變，所以粒子的平均動能不變。能量仍然釋放到較冷的周圍環境：引力把粒子固定在原位時，勢能減少，這些能量就是由此而來。固體中的粒子繼續振動。</p>",
      misconception: {
        // EN (option B): The temperature is constant during freezing, so the average kinetic energy is constant too. The energy that leaves comes from the potential energy of the particles.
        "1": "凝固期間溫度不變，所以平均動能也不變。離開的能量來自粒子的勢能。",
        // EN (option D): Particles in a solid still vibrate about their fixed positions. They do not stop moving.
        "3": "固體中的粒子仍然在固定位置振動，並沒有停止運動。",
      },
    },

  }
});
