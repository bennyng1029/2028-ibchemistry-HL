/* lab-periodicity.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-periodicity.q', {
  questions: {

    // ── lab-periodicity-q001 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q001": {
      // EN: <p>A few drops of a halogen solution are added to a solution of a potassium halide. In which mixture does a displacement reaction take place?</p>
      stem: "<p>把幾滴鹵素溶液加入鹵化鉀溶液中。在哪一種混合物中會發生置換反應？</p>",
      options: [
        // EN: Iodine solution and potassium bromide
        "碘溶液和溴化鉀",
        // EN: Bromine water and potassium chloride
        "溴水和氯化鉀",
        // EN: Bromine water and potassium iodide
        "溴水和碘化鉀",
        // EN: Iodine solution and potassium chloride
        "碘溶液和氯化鉀",
      ],
      hints: [
        // EN: A halogen displaces only halide ions of halogens below it in group 17.
        "鹵素只能置換第 17 族中位於它下方的鹵素的鹵離子。",
      ],
      // EN: <p>Bromine is above iodine in group 17, so it is more reactive. It takes electrons from iodide ions: <span class="chem">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>.</p>
      solution: "<p>在第 17 族中，溴位於碘的上方，所以溴較活潑。它從碘離子奪取電子：<span class=\"chem\">Br2(aq) + 2I-(aq) -> 2Br-(aq) + I2(aq)</span>。</p>",
      misconception: {
        // EN (option A): Iodine is below bromine in group 17, so it is less reactive and cannot take electrons from bromide ions.
        "0": "在第 17 族中，碘位於溴的下方，所以碘較不活潑，不能從溴離子奪取電子。",
        // EN (option B): Bromine is below chlorine, so it is less reactive and cannot displace chloride ions.
        "1": "溴位於氯的下方，所以溴較不活潑，不能置換氯離子。",
        // EN (option D): Iodine is the least reactive of the three, so it displaces neither chloride nor bromide ions.
        "3": "碘是三者中最不活潑的，所以它既不能置換氯離子，也不能置換溴離子。",
      },
    },

    // ── lab-periodicity-q002 · mcq · exam · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q002": {
      // EN: <p>Chlorine water is added to a colourless solution of an unknown potassium halide. Cyclohexane is then added and the tube is shaken. The top (cyclohexane) layer is violet.</p><p>Which ion was in the unknown solution? (In cyclohexane: chlorine is colourless, bromine is orange and iodine is violet.)</p>
      stem: "<p>把氯水加入一種未知鹵化鉀的無色溶液中。然後加入環己烷並搖動試管。上層（環己烷層）是紫色的。</p><p>未知溶液中含有哪一種離子？（在環己烷中：氯是無色的，溴是橙色的，碘是紫色的。）</p>",
      options: [
        // EN: Chloride
        "氯離子",
        // EN: Bromide
        "溴離子",
        // EN: Iodide
        "碘離子",
        // EN: Potassium
        "鉀離子",
      ],
      hints: [
        // EN: Which halogen is violet in cyclohexane? Where did it come from?
        "哪一種鹵素在環己烷中是紫色的？它從哪裏來？",
      ],
      // EN: <p>The violet layer shows iodine. Chlorine did not bring any iodine with it, so the iodine must have formed from iodide ions: <span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span>.</p>
      solution: "<p>紫色層顯示有碘。氯沒有帶來任何碘，所以碘一定是由碘離子生成的：<span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span>。</p>",
      misconception: {
        // EN (option A): Chlorine cannot react with chloride ions, so the top layer would stay colourless.
        "0": "氯不能與氯離子反應，所以上層會保持無色。",
        // EN (option B): Bromide ions would give bromine, which is orange in cyclohexane.
        "1": "溴離子會生成溴，溴在環己烷中是橙色的。",
        // EN (option D): Potassium ions are spectator ions: they are in every one of these salts and do not react.
        "3": "鉀離子是旁觀離子：這些鹽全部都含有鉀離子，而它們不參與反應。",
      },
    },

    // ── lab-periodicity-q003 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q003": {
      // EN: <p>When chlorine water is added to potassium iodide solution, the solution turns brown. Write the ionic equation, with state symbols, for the reaction.</p>
      stem: "<p>把氯水加入碘化鉀溶液時，溶液變成褐色。寫出 (write) 這個反應的離子方程式，連同物態符號。</p>",
      hints: [
        // EN: Chlorine takes electrons from iodide ions. What forms?
        "氯從碘離子奪取電子。生成了甚麼？",
        // EN: Leave out the ions that do not change.
        "刪去沒有改變的離子。",
      ],
      // EN: <div class="worked__math"><span class="chem">Cl2(aq) + 2KI(aq) -> 2KCl(aq) + I2(aq)</span></div><div class="worked__math">remove K<sup>+</sup>: <b><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></b></div>
      solution: "<div class=\"worked__math\"><span class=\"chem\">Cl2(aq) + 2KI(aq) -> 2KCl(aq) + I2(aq)</span></div><div class=\"worked__math\">刪去 K<sup>+</sup>：<b><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></b></div>",
      // EN: <p><span class="chem">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></p><p>The potassium ions are spectator ions and are left out.</p>
      answer: "<p><span class=\"chem\">Cl2(aq) + 2I-(aq) -> 2Cl-(aq) + I2(aq)</span></p><p>鉀離子是旁觀離子，所以不寫出來。</p>",
      markscheme: [
        // EN: Correct species: Cl₂ and I⁻ on the left, Cl⁻ and I₂ on the right, with no K⁺.
        "物種正確：左邊是 Cl₂ 和 I⁻，右邊是 Cl⁻ 和 I₂，沒有 K⁺。",
        // EN: Balanced (2I⁻ and 2Cl⁻) with correct state symbols (all aq).
        "已配平（2I⁻ 和 2Cl⁻），物態符號正確（全部都是 aq）。",
      ],
    },

    // ── lab-periodicity-q004 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q004": {
      // EN: <p>Bromine water is added to potassium chloride solution. The colour of the mixture is the same as that of the control tube (bromine water and water). Explain this observation.</p>
      stem: "<p>把溴水加入氯化鉀溶液中。混合物的顏色與對照試管（溴水和水）相同。解釋 (explain) 這個觀察。</p>",
      hints: [
        // EN: What does "same as the control" tell you about whether anything happened?
        "「與對照相同」告訴你有沒有發生任何變化？",
        // EN: Compare how strongly bromine and chlorine atoms attract an extra electron.
        "比較溴原子和氯原子吸引一個額外電子的強弱。",
      ],
      // EN: <p>See the model answer: the observation (no change) and the reason (bromine is less reactive, because its atoms attract electrons less strongly).</p>
      solution: "<p>見參考答案：觀察（沒有變化）和原因（溴較不活潑，因為溴原子吸引電子的能力較弱）。</p>",
      // EN: <p>No reaction takes place, so no new halogen forms and the colour is just that of bromine. Bromine is less reactive than chlorine: a bromine atom is larger, so its outer energy level is further from the nucleus and more shielded, and it attracts an extra electron less strongly than a chlorine atom. So bromine cannot take electrons from chloride ions.</p>
      answer: "<p>沒有發生反應，所以沒有生成新的鹵素，顏色只是溴的顏色。溴比氯較不活潑：溴原子較大，所以它的最外層能級離原子核較遠，屏蔽也較多，吸引一個額外電子的能力比氯原子弱。所以溴不能從氯離子奪取電子。</p>",
      markscheme: [
        // EN: No reaction / bromine does not displace chloride ions, because bromine is less reactive than chlorine.
        "沒有反應／溴不能置換氯離子，因為溴比氯較不活潑。",
        // EN: Bromine atoms are larger / the outer level is further from the nucleus and more shielded, so they attract an electron less strongly than chlorine atoms.
        "溴原子較大／最外層離原子核較遠，屏蔽也較多，所以吸引電子的能力比氯原子弱。",
      ],
    },

    // ── lab-periodicity-q005 · mcq · foundation · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q005": {
      // EN: <p>In the halogen experiment, a student also adds each halogen solution to a tube containing distilled water instead of a halide solution. What is the purpose of this tube?</p>
      stem: "<p>在鹵素實驗中，一名學生也把每種鹵素溶液加入一支裝有蒸餾水（而不是鹵化物溶液）的試管。這支試管的作用是甚麼？</p>",
      options: [
        // EN: To dilute the halogen so that the reaction is slower
        "稀釋鹵素，使反應較慢",
        // EN: To show the colour of the halogen solution when no reaction happens, for comparison
        "顯示沒有發生反應時鹵素溶液的顏色，作比較之用",
        // EN: To check that the halide solutions are all the same concentration
        "檢查所有鹵化物溶液的濃度是否相同",
        // EN: To make the cyclohexane layer separate more quickly
        "使環己烷層更快分開",
      ],
      hints: [
        // EN: How do you know whether a colour is new, or was there already?
        "你怎樣知道某種顏色是新出現的，還是本來就有？",
      ],
      // EN: <p>The water tube is a control. It shows the colour of the halogen solution when nothing reacts. A tube that ends up a different colour from the control shows that a new halogen has formed.</p>
      solution: "<p>裝水的試管是對照。它顯示沒有東西反應時鹵素溶液的顏色。如果某支試管最後的顏色與對照不同，就顯示生成了新的鹵素。</p>",
      misconception: {
        // EN (option A): The water tube is a separate tube; it is not added to the other mixtures.
        "0": "裝水的試管是一支獨立的試管；它不會加入其他混合物中。",
        // EN (option C): Water contains no halide ions, so it cannot tell you anything about their concentrations.
        "2": "水不含鹵離子，所以它不能告訴你鹵離子的濃度。",
        // EN (option D): The layers separate because cyclohexane and water do not mix, whatever is dissolved in them.
        "3": "兩層會分開，是因為環己烷和水不互溶，不論其中溶解了甚麼。",
      },
    },

    // ── lab-periodicity-q006 · numeric · exam · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q006": {
      // EN: <p>A teacher drops pieces of potassium of the same size onto water and times how long each piece takes to disappear.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Times for potassium</caption><thead><tr><th scope="col">Run</th><th scope="col" class="num">Time / s</th></tr></thead><tbody><tr><th scope="row">1</th><td class="num">4.6</td></tr><tr><th scope="row">2</th><td class="num">3.9</td></tr><tr><th scope="row">3</th><td class="num">4.3</td></tr><tr><th scope="row">4</th><td class="num">4.0</td></tr></tbody></table></div><p>Calculate the mean time, in s.</p>
      stem: "<p>老師把大小相同的鉀塊放到水面上，並計時每塊消失所需的時間。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>鉀的時間</caption><thead><tr><th scope=\"col\">次數</th><th scope=\"col\" class=\"num\">時間 / s</th></tr></thead><tbody><tr><th scope=\"row\">1</th><td class=\"num\">4.6</td></tr><tr><th scope=\"row\">2</th><td class=\"num\">3.9</td></tr><tr><th scope=\"row\">3</th><td class=\"num\">4.3</td></tr><tr><th scope=\"row\">4</th><td class=\"num\">4.0</td></tr></tbody></table></div><p>計算 (calculate) 平均時間，以 s 表示。</p>",
      hints: [
        // EN: Add the four times and divide by 4.
        "把四個時間相加，再除以 4。",
        // EN: Give the mean to the same number of decimal places as the data.
        "平均值取至與數據相同的小數位。",
      ],
      // EN: <div class="worked__math">(4.6 + 3.9 + 4.3 + 4.0) / 4 = 16.8 / 4 = <b>4.2 s</b></div>
      solution: "<div class=\"worked__math\">(4.6 + 3.9 + 4.3 + 4.0) / 4 = 16.8 / 4 = <b>4.2 s</b></div>",
    },

    // ── lab-periodicity-q007 · short · exam · SL · Structure 3.1.4 · 3 marks
    "lab-periodicity-q007": {
      // EN: <p>A small piece of sodium is dropped onto water containing universal indicator. State three observations, and write the equation for the reaction.</p>
      stem: "<p>把一小塊鈉放到含有通用指示劑的水面上。寫出 (state) 三項觀察，並寫出這個反應的方程式。</p>",
      hints: [
        // EN: Think about what you see happen to the metal, and to the indicator.
        "想想你看到金屬和指示劑發生了甚麼變化。",
        // EN: The products are a hydroxide and a gas.
        "生成物是一種氫氧化物和一種氣體。",
      ],
      // EN: <p>See the model answer. "Hydrogen is given off" is a conclusion, not an observation; say "fizzes" or "bubbles".</p>
      solution: "<p>見參考答案。「放出氫」是結論，不是觀察；要寫「冒泡」或「產生氣泡」。</p>",
      // EN: <p>The sodium floats; it melts into a ball; it fizzes (bubbles of gas) and moves about on the surface; it gets smaller and disappears; the indicator turns from green to purple (blue). <span class="chem">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></p>
      answer: "<p>鈉浮在水面；熔成小球；冒泡（產生氣泡），並在水面上四處移動；逐漸變小並消失；指示劑由綠色變成紫色（藍色）。<span class=\"chem\">2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)</span></p>",
      markscheme: [
        // EN: Any two observations: floats / melts into a ball / fizzes or effervescence / moves on the surface / gets smaller or disappears.
        "任何兩項觀察：浮在水面／熔成小球／冒泡或泡騰／在水面上移動／逐漸變小或消失。",
        // EN: The indicator turns purple (or blue): an alkaline solution forms.
        "指示劑變成紫色（或藍色）：生成了鹼性溶液。",
        // EN: Equation: 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) (state symbols not needed for the mark).
        "方程式：2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)（這一分不需要物態符號）。",
      ],
    },

    // ── lab-periodicity-q008 · mcq · challenge · SL · Structure 3.1.4 · 1 mark
    "lab-periodicity-q008": {
      // EN: <p>A class records the mean time for a 3 mm cube of each metal to disappear on water.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Mean times</caption><thead><tr><th scope="col">Metal</th><th scope="col" class="num">Mean time / s</th></tr></thead><tbody><tr><th scope="row">lithium</th><td class="num">57 ± 4</td></tr><tr><th scope="row">sodium</th><td class="num">14 ± 1</td></tr><tr><th scope="row">potassium</th><td class="num">4.2 ± 0.4</td></tr></tbody></table></div><p>Which conclusion is best supported by these data?</p>
      stem: "<p>一班學生記錄每種金屬的 3 mm 立方體在水面上消失所需的平均時間。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>平均時間</caption><thead><tr><th scope=\"col\">金屬</th><th scope=\"col\" class=\"num\">平均時間 / s</th></tr></thead><tbody><tr><th scope=\"row\">鋰</th><td class=\"num\">57 ± 4</td></tr><tr><th scope=\"row\">鈉</th><td class=\"num\">14 ± 1</td></tr><tr><th scope=\"row\">鉀</th><td class=\"num\">4.2 ± 0.4</td></tr></tbody></table></div><p>這些數據最能支持哪一個結論？</p>",
      options: [
        // EN: Reactivity increases down group 1, because the outer electron is lost more easily
        "沿第 1 族向下活潑性增加，因為外層電子較容易失去",
        // EN: Reactivity increases down group 1, because the atoms have more protons to attract water
        "沿第 1 族向下活潑性增加，因為原子有較多質子吸引水",
        // EN: The data cannot show a trend, because each time has an uncertainty
        "數據不能顯示趨勢，因為每個時間都有不確定度",
        // EN: Potassium reacts about 14 times faster than lithium, so its first ionization energy is 14 times smaller
        "鉀的反應比鋰快約 14 倍，所以它的第一電離能小 14 倍",
      ],
      hints: [
        // EN: Do the ranges of the results overlap?
        "各結果的範圍有沒有重疊？",
        // EN: Which explanation is about losing the outer electron?
        "哪一個解釋是關於失去外層電子的？",
      ],
      // EN: <p>The times fall steeply from lithium to potassium, far more than the uncertainties, so the metals become more reactive down the group. The outer electron is further from the nucleus and more shielded, so it is lost more easily.</p>
      solution: "<p>由鋰至鉀，時間急劇下降，下降幅度遠大於不確定度，所以這些金屬沿族向下變得較活潑。外層電子離原子核較遠，屏蔽也較多，所以較容易失去。</p>",
      misconception: {
        // EN (option B): The trend is right, but the reason is wrong. The extra nuclear charge is outweighed by the greater distance and shielding of the outer electron.
        "1": "趨勢正確，但原因錯誤。外層電子距離較遠和屏蔽較多的影響，超過了額外核電荷的影響。",
        // EN (option C): The differences between the metals are far bigger than the uncertainties, and the ranges do not overlap, so the trend is real.
        "2": "各金屬之間的差異遠大於不確定度，而且範圍沒有重疊，所以趨勢是真實的。",
        // EN (option D): Reaction time is not proportional to ionization energy. The first ionization energy of potassium (419 kJ mol⁻¹) is only a little lower than that of lithium (520 kJ mol⁻¹).
        "3": "反應時間與電離能並不成正比。鉀的第一電離能（419 kJ mol⁻¹）只比鋰的（520 kJ mol⁻¹）低一點。",
      },
    },

    // ── lab-periodicity-q009 · mcq · foundation · SL · Structure 3.1.5 · 1 mark
    "lab-periodicity-q009": {
      // EN: <p>A student adds four oxides, W, X, Y and Z, to water and measures the pH of each mixture with a pH meter. Distilled water on its own gives pH 5.8.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>pH of each oxide with water</caption><thead><tr><th scope="col">Oxide</th><th scope="col" class="num">pH</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">12.3</td></tr><tr><th scope="row">X</th><td class="num">5.8</td></tr><tr><th scope="row">Y</th><td class="num">2.4</td></tr><tr><th scope="row">Z</th><td class="num">10.1</td></tr></tbody></table></div><p>Which oxide could be sulfur dioxide?</p>
      stem: "<p>一名學生把 W、X、Y 和 Z 四種氧化物加入水中，用 pH 計量度每種混合物的 pH。只有蒸餾水時 pH 是 5.8。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>每種氧化物與水的 pH</caption><thead><tr><th scope=\"col\">氧化物</th><th scope=\"col\" class=\"num\">pH</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">12.3</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">5.8</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">2.4</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">10.1</td></tr></tbody></table></div><p>哪一種氧化物可能是二氧化硫？</p>",
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
        // EN: Sulfur is a non-metal. What kind of solution does its oxide form?
        "硫是非金屬。它的氧化物形成哪一類溶液？",
      ],
      // EN: <p>Sulfur dioxide is an acidic oxide: <span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span>. The only reading well below the control is <b>Y</b>, pH 2.4.</p>
      solution: "<p>二氧化硫是酸性氧化物：<span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span>。唯一遠低於對照的讀數是 <b>Y</b>，pH 2.4。</p>",
      misconception: {
        // EN (option A): pH 12.3 is strongly alkaline: this is a basic metal oxide such as calcium oxide.
        "0": "pH 12.3 是強鹼性：這是鹼性金屬氧化物，例如氧化鈣。",
        // EN (option B): pH 5.8 is the same as the control, so this oxide has not dissolved. Sulfur dioxide dissolves and forms an acid.
        "1": "pH 5.8 與對照相同，所以這種氧化物沒有溶解。二氧化硫會溶解並形成酸。",
        // EN (option D): pH 10.1 is alkaline: a basic metal oxide such as magnesium oxide.
        "3": "pH 10.1 是鹼性：鹼性金屬氧化物，例如氧化鎂。",
      },
    },

    // ── lab-periodicity-q010 · short · exam · SL · Structure 3.1.5 · 2 marks
    "lab-periodicity-q010": {
      // EN: <p>Lithium burns in air to form lithium oxide, a white solid. When the solid is added to water containing universal indicator, the indicator turns purple. Deduce the equation, with state symbols, for the reaction of lithium oxide with water.</p>
      stem: "<p>鋰在空氣中燃燒，生成白色固體氧化鋰。把這種固體加入含有通用指示劑的水中，指示劑變成紫色。推斷 (deduce) 氧化鋰與水反應的方程式，連同物態符號。</p>",
      hints: [
        // EN: Lithium forms Li⁺ ions. What are the formulas of its oxide and hydroxide?
        "鋰形成 Li⁺ 離子。它的氧化物和氫氧化物的化學式是甚麼？",
        // EN: A basic oxide + water → a metal hydroxide.
        "鹼性氧化物 + 水 → 金屬氫氧化物。",
      ],
      // EN: <div class="worked__math">Li<sub>2</sub>O + H<sub>2</sub>O → LiOH (not balanced)</div><div class="worked__math"><b><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></b></div>
      solution: "<div class=\"worked__math\">Li<sub>2</sub>O + H<sub>2</sub>O → LiOH（未配平）</div><div class=\"worked__math\"><b><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></b></div>",
      // EN: <p><span class="chem">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></p><p>Lithium is in group 1, so its ion is Li⁺: the oxide is Li₂O and the hydroxide is LiOH.</p>
      answer: "<p><span class=\"chem\">Li2O(s) + H2O(l) -> 2LiOH(aq)</span></p><p>鋰屬於第 1 族，所以它的離子是 Li⁺：氧化物是 Li₂O，氫氧化物是 LiOH。</p>",
      markscheme: [
        // EN: Correct formulas: Li₂O and LiOH.
        "化學式正確：Li₂O 和 LiOH。",
        // EN: Balanced (2LiOH) with correct state symbols.
        "已配平（2LiOH），物態符號正確。",
      ],
    },

    // ── lab-periodicity-q011 · short · exam · SL · Structure 3.1.5 · 2 marks
    "lab-periodicity-q011": {
      // EN: <p>Sulfur is burned in a gas jar of air in a fume cupboard. Water is added and the jar is shaken. The pH of the water falls from 5.8 to 2.4. Write the equation, with state symbols, for the reaction that lowers the pH, and state one environmental problem caused by this reaction in the atmosphere.</p>
      stem: "<p>在煙櫥內，硫在盛有空氣的集氣瓶中燃燒。加入水並搖動集氣瓶。水的 pH 由 5.8 下降至 2.4。寫出 (write) 使 pH 下降的反應的方程式，連同物態符號，並寫出 (state) 這個反應在大氣中造成的一個環境問題。</p>",
      hints: [
        // EN: Burning sulfur forms sulfur dioxide. Add its atoms to those of water to get the acid.
        "燃燒硫會生成二氧化硫。把它的原子與水的原子加起來，就得到酸。",
      ],
      // EN: <p>Sulfur dioxide is an acidic oxide. It reacts with water to form sulfurous acid, H₂SO₃. Gaseous non-metal oxides dissolving in rain water cause acid rain.</p>
      solution: "<p>二氧化硫是酸性氧化物。它與水反應生成亞硫酸 H₂SO₃。氣態非金屬氧化物溶解在雨水中，造成酸雨。</p>",
      // EN: <p><span class="chem">SO2(g) + H2O(l) <=> H2SO3(aq)</span></p><p>In the atmosphere this forms acid rain, which damages buildings, trees and life in lakes.</p>
      answer: "<p><span class=\"chem\">SO2(g) + H2O(l) <=> H2SO3(aq)</span></p><p>在大氣中，這會形成酸雨，損害建築物、樹木和湖泊中的生物。</p>",
      markscheme: [
        // EN: SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq) (accept → for ⇌).
        "SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq)（接受以 → 代替 ⇌）。",
        // EN: Acid rain (accept a named effect of acid rain).
        "酸雨（接受寫出酸雨的某一種影響）。",
      ],
    },

    // ── lab-periodicity-q012 · mcq · challenge · SL · Structure 3.1.5 · 1 mark
    "lab-periodicity-q012": {
      // EN: <p>A student stirs 0.50 g of aluminium oxide with 50 cm<sup>3</sup> of distilled water. The pH is 5.8, the same as the distilled water on its own. Which statement is correct?</p>
      stem: "<p>一名學生把 0.50 g 氧化鋁與 50 cm<sup>3</sup> 蒸餾水一起攪拌。pH 是 5.8，與只有蒸餾水時相同。哪一項陳述是正確的？</p>",
      options: [
        // EN: Aluminium oxide is a neutral oxide, because the pH did not change
        "氧化鋁是中性氧化物，因為 pH 沒有改變",
        // EN: Aluminium oxide is an acidic oxide, because the pH is below 7
        "氧化鋁是酸性氧化物，因為 pH 低於 7",
        // EN: The test cannot show the character of aluminium oxide, because it does not dissolve in water
        "這項測試不能顯示氧化鋁的性質，因為它不溶於水",
        // EN: The pH meter must be faulty, because a metal oxide always gives pH above 7
        "pH 計一定有故障，因為金屬氧化物總是給出高於 7 的 pH",
      ],
      hints: [
        // EN: Compare the reading with the control, not with 7.
        "把讀數與對照比較，而不是與 7 比較。",
      ],
      // EN: <p>The reading equals the control, so the oxide did not dissolve or react with water. To show that aluminium oxide is amphoteric, you would need to test it with an acid and with an alkali.</p>
      solution: "<p>讀數等於對照，所以這種氧化物沒有溶解，也沒有與水反應。要顯示氧化鋁是兩性的，你需要用酸和可溶於水的鹼測試它。</p>",
      misconception: {
        // EN (option A): No change in pH means nothing dissolved, not that the oxide is neutral. Aluminium oxide reacts with both acids and bases: it is amphoteric.
        "0": "pH 沒有改變表示沒有東西溶解，而不是氧化物是中性的。氧化鋁既與酸反應，也與鹼反應：它是兩性的。",
        // EN (option B): pH 5.8 is just the control value: dissolved carbon dioxide from the air makes distilled water slightly acidic.
        "1": "pH 5.8 只是對照的數值：空氣中溶解的二氧化碳使蒸餾水略呈酸性。",
        // EN (option D): Insoluble metal oxides do not change the pH. The meter gave the same reading as the control, which is what you expect.
        "3": "不溶的金屬氧化物不會改變 pH。pH 計給出與對照相同的讀數，這正是預期的結果。",
      },
    },

    // ── lab-periodicity-q013 · short · exam · SL · Structure 3.1.4 · 2 marks
    "lab-periodicity-q013": {
      // EN: <p>A student repeats the chlorine water and potassium bromide test with chlorine water from a bottle that had been left open for two weeks. This time the colour change is very faint. Suggest a reason, and an improvement.</p>
      stem: "<p>一名學生用一瓶已打開放置了兩星期的氯水，重複氯水和溴化鉀的測試。這次顏色變化非常淡。提出 (suggest) 一個原因和一項改進。</p>",
      hints: [
        // EN: Chlorine is a gas at room temperature. What happens to it in an open bottle?
        "氯在室溫下是氣體。它在打開了的瓶中會怎樣？",
      ],
      // EN: <p>See the model answer. This is a systematic error: repeating with the same bottle gives the same faint result.</p>
      solution: "<p>見參考答案。這是系統誤差：用同一瓶氯水重複，會得到同樣淡的結果。</p>",
      // EN: <p>Chlorine escapes from the solution over time (it is a gas), so the old chlorine water contains very little chlorine. Only a little bromine forms, so the colour is faint. Use freshly made chlorine water, kept in a stoppered bottle.</p>
      answer: "<p>氯會隨時間從溶液中逸出（它是氣體），所以舊的氯水只含很少氯。只生成少量溴，所以顏色很淡。用新配製並以有塞的瓶保存的氯水。</p>",
      markscheme: [
        // EN: Chlorine has escaped / the concentration of chlorine is lower, so little bromine forms.
        "氯已逸出／氯的濃度較低，所以只生成少量溴。",
        // EN: Use freshly made chlorine water (accept: keep it stoppered; add more drops and compare with a control).
        "用新配製的氯水（接受：把它塞好保存；加入更多滴並與對照比較）。",
      ],
    },

  }
});
