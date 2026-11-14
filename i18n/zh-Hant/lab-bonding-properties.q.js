/* lab-bonding-properties.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-bonding-properties.q', {
  questions: {

    // ── lab-bonding-properties-q001 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q001": {
      // EN: <p>Four solids were tested.</p><div class="table-scroll"><table class="data"><caption>Test results (control, distilled water: 0.1 mA)</caption><thead><tr><th scope="col">Solid</th><th scope="col">Melting</th><th scope="col" class="num">Solid / mA</th><th scope="col" class="num">With water / mA</th></tr></thead><tbody><tr><th scope="row">A</th><td>melts below 100 °C</td><td class="num">0.0</td><td class="num">0.1</td></tr><tr><th scope="row">B</th><td>does not melt in a Bunsen flame</td><td class="num">0.0</td><td class="num">21.7</td></tr><tr><th scope="row">C</th><td>does not melt in a Bunsen flame</td><td class="num">0.0</td><td class="num">0.1</td></tr><tr><th scope="row">D</th><td>does not melt in a Bunsen flame</td><td class="num">59.4</td><td class="num">0.1</td></tr></tbody></table></div><p>Which solid is most likely to be ionic?</p>
      stem: "<p>測試了四種固體。</p><div class=\"table-scroll\"><table class=\"data\"><caption>測試結果（對照，蒸餾水：0.1 mA）</caption><thead><tr><th scope=\"col\">固體</th><th scope=\"col\">熔化</th><th scope=\"col\" class=\"num\">固體 / mA</th><th scope=\"col\" class=\"num\">加水後 / mA</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>在 100 °C 以下熔化</td><td class=\"num\">0.0</td><td class=\"num\">0.1</td></tr><tr><th scope=\"row\">B</th><td>在本生燈火焰中不熔化</td><td class=\"num\">0.0</td><td class=\"num\">21.7</td></tr><tr><th scope=\"row\">C</th><td>在本生燈火焰中不熔化</td><td class=\"num\">0.0</td><td class=\"num\">0.1</td></tr><tr><th scope=\"row\">D</th><td>在本生燈火焰中不熔化</td><td class=\"num\">59.4</td><td class=\"num\">0.1</td></tr></tbody></table></div><p>哪一種固體最有可能是離子化合物？</p>",
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
        // EN: An ionic solid does not conduct as a solid. When does it conduct?
        "離子固體在固態時不導電。它在甚麼時候導電？",
      ],
      // EN: <p>B has a high melting point, does not conduct as a solid, and its mixture with water conducts far more than distilled water. This is the pattern of an ionic lattice: the ions are fixed in the solid but free to move once the solid dissolves.</p>
      solution: "<p>B 的熔點高，固態時不導電，而它與水的混合物導電程度遠高於蒸餾水。這是離子晶格的規律：離子在固體中固定，但固體溶解後就可以自由移動。</p>",
      misconception: {
        // EN (option A): A low melting point and no current in any test fit a covalent molecular solid, with weak forces between molecules.
        "0": "熔點低，而且在任何測試中都沒有電流，符合共價分子固體：分子之間的引力微弱。",
        // EN (option C): C has a high melting point but its mixture with water reads the same as the control. No ions are released, so it fits a covalent network.
        "2": "C 的熔點高，但它與水的混合物讀數與對照相同。沒有釋放出離子，所以它符合巨型共價結構。",
        // EN (option D): D conducts as a solid. Ions in a lattice are fixed, so an ionic solid cannot do this. D is a metal (or graphite).
        "3": "D 在固態時導電。晶格中的離子是固定的，所以離子固體不可能這樣。D 是金屬（或石墨）。",
      },
    },

    // ── lab-bonding-properties-q002 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q002": {
      // EN: <p>Why does solid potassium iodide not conduct electricity?</p>
      stem: "<p>為甚麼固態碘化鉀不導電？</p>",
      options: [
        // EN: It contains no charged particles.
        "它不含帶電粒子。",
        // EN: Its ions are held in fixed positions in the lattice.
        "它的離子固定在晶格中的位置上。",
        // EN: Its electrons are all held in covalent bonds.
        "它的電子全部都在共價鍵中。",
        // EN: Its ions are too large to move.
        "它的離子太大，不能移動。",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move.
        "物質要導電，需要有可自由移動的帶電粒子。",
      ],
      // EN: <p>Solid potassium iodide contains ions, but they are held in fixed positions in the lattice by strong electrostatic attraction. They can only vibrate, so they cannot carry charge through the solid.</p>
      solution: "<p>固態碘化鉀含有離子，但強大的靜電引力把它們固定在晶格中的位置上。它們只能振動，所以不能在固體中傳送電荷。</p>",
      misconception: {
        // EN (option A): Potassium iodide is made of K<sup>+</sup> and I<sup>−</sup> ions. The charged particles are there, but they cannot move.
        "0": "碘化鉀由 K<sup>+</sup> 和 I<sup>−</sup> 離子構成。帶電粒子是存在的，但它們不能移動。",
        // EN (option C): Potassium iodide is ionic, not covalent. Conduction in an ionic compound is by moving ions, not electrons.
        "2": "碘化鉀是離子化合物，不是共價化合物。離子化合物靠移動的離子導電，而不是電子。",
        // EN (option D): Size is not the reason. The same ions move freely when the solid is melted or dissolved.
        "3": "大小不是原因。固體熔化或溶解時，同樣的離子就可以自由移動。",
      },
    },

    // ── lab-bonding-properties-q003 · short · exam · SL · Structure 2.1.3 · 2 marks
    "lab-bonding-properties-q003": {
      // EN: <p>Sodium chloride does not conduct as a solid, but a mixture of sodium chloride and water conducts. Explain this difference.</p>
      stem: "<p>氯化鈉在固態時不導電，但氯化鈉和水的混合物導電。解釋 (explain) 這個差異。</p>",
      hints: [
        // EN: Both states contain the same ions. What is different about them?
        "兩種狀態都含有相同的離子。它們有甚麼不同？",
      ],
      // EN: <p>In the solid, the ions are held in fixed positions in the lattice, so they cannot move. When sodium chloride dissolves, the lattice breaks up and the ions are free to move through the solution, so they can carry charge.</p>
      answer: "<p>在固體中，離子固定在晶格中的位置上，所以不能移動。氯化鈉溶解時，晶格瓦解，離子可以在溶液中自由移動，所以可以傳送電荷。</p>",
      markscheme: [
        // EN: Solid: ions in fixed positions / cannot move. Do not accept: “no ions” or “no free electrons” alone.
        "固體：離子在固定的位置上／不能移動。不接受：只寫「沒有離子」或「沒有自由電子」。",
        // EN: In solution: ions are free to move (and carry charge). Do not accept: “electrons move”.
        "在溶液中：離子可以自由移動（並傳送電荷）。不接受：「電子移動」。",
      ],
    },

    // ── lab-bonding-properties-q004 · mcq · exam · SL · Structure 2.2.7 · 1 mark
    "lab-bonding-properties-q004": {
      // EN: <p>An unknown grey solid conducts electricity as a solid, does not melt in a Bunsen flame, and leaves a grey mark when tapped. It is graphite. Why does graphite conduct?</p>
      stem: "<p>一種未知的灰色固體在固態時導電，在本生燈火焰中不熔化，輕敲時留下灰色痕跡。它是石墨。為甚麼石墨導電？</p>",
      options: [
        // EN: It contains positive ions that move through the layers.
        "它含有在層中移動的正離子。",
        // EN: Each carbon atom forms three covalent bonds, and the fourth outer electron is delocalized within its layer, so it can move along the layers.
        "每個碳原子形成三個共價鍵，第四個外層電子在所屬的層中離域，所以可以沿着層移動。",
        // EN: It has metallic bonding between its carbon atoms.
        "它的碳原子之間有金屬鍵。",
        // EN: Its layers are held together by strong covalent bonds.
        "它的層與層之間由強共價鍵連接。",
      ],
      hints: [
        // EN: How many covalent bonds does each carbon atom form in graphite? What happens to its other outer electron?
        "在石墨中，每個碳原子形成多少個共價鍵？它的另一個外層電子怎樣了？",
      ],
      // EN: <p>In graphite each carbon atom is covalently bonded to three others in a flat layer. The fourth outer electron of each atom is delocalized, so it can move along the layers and carry charge.</p>
      solution: "<p>在石墨中，每個碳原子與另外三個碳原子以共價鍵連接，形成平面層。每個原子的第四個外層電子是離域的，所以可以沿着層移動並傳送電荷。</p>",
      misconception: {
        // EN (option A): Graphite contains no ions. The current is carried by electrons.
        "0": "石墨不含離子。電流由電子傳送。",
        // EN (option C): Graphite is a non-metal element with covalent bonds. It conducts because of delocalized electrons, but it is not malleable like a metal.
        "2": "石墨是有共價鍵的非金屬元素。它因為有離域電子而導電，但它不像金屬那樣有展性。",
        // EN (option D): The forces between the layers are weak. Strong bonds alone do not give conduction: diamond has strong bonds and does not conduct.
        "3": "層與層之間的引力微弱。只有強鍵並不能導電：金剛石有強鍵，但不導電。",
      },
    },

    // ── lab-bonding-properties-q005 · short · exam · SL · Structure 2.2.9 · 2 marks
    "lab-bonding-properties-q005": {
      // EN: <p>Sucrose dissolves well in water, but the solution reads the same current as distilled water. Explain both observations.</p>
      stem: "<p>蔗糖易溶於水，但溶液的電流讀數與蒸餾水相同。解釋 (explain) 這兩個觀察。</p>",
      hints: [
        // EN: What particles are in a sugar solution? Do they carry a charge?
        "糖溶液中有甚麼粒子？它們帶電荷嗎？",
      ],
      // EN: <p>Sucrose is a covalent molecular substance. Its molecules have many –OH groups, so they form hydrogen bonds with water molecules, which is why it dissolves. The solution contains neutral molecules, not ions, so there are no charged particles free to move and it does not conduct.</p>
      answer: "<p>蔗糖是共價分子物質。它的分子有許多 –OH 基，所以能與水分子形成氫鍵，因此它會溶解。溶液含有中性分子而不是離子，所以沒有可自由移動的帶電粒子，因此不導電。</p>",
      markscheme: [
        // EN: Dissolves: (polar) sucrose molecules form hydrogen bonds with water. Accept: attractions between sucrose and water molecules.
        "溶解：（極性的）蔗糖分子與水形成氫鍵。接受：蔗糖分子與水分子之間有引力。",
        // EN: No conduction: the solution contains (neutral) molecules, not ions / no charged particles free to move.
        "不導電：溶液含有（中性的）分子，而不是離子／沒有可自由移動的帶電粒子。",
      ],
    },

    // ── lab-bonding-properties-q006 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "lab-bonding-properties-q006": {
      // EN: <p>A piece of copper flattens without breaking when it is hammered. Which statement explains this?</p>
      stem: "<p>一塊銅被錘打時被壓扁而不會破裂。哪一項陳述解釋了這個現象？</p>",
      options: [
        // EN: The copper atoms are joined by strong, directional covalent bonds.
        "銅原子以有方向性的強共價鍵連接。",
        // EN: Layers of cations can slide over each other, and the attraction to the delocalized electrons holds them together in any position.
        "陽離子層可以互相滑過，而離域電子的引力在任何位置都能把它們維繫在一起。",
        // EN: Copper ions of the same charge repel each other when the layers move.
        "層移動時，帶相同電荷的銅離子互相排斥。",
        // EN: The delocalized electrons move away from the hammer.
        "離域電子移離錘子。",
      ],
      hints: [
        // EN: Is metallic bonding directional? What happens to it when the layers move?
        "金屬鍵有方向性嗎？層移動時，金屬鍵會怎樣？",
      ],
      // EN: <p>In a metal the bonding is the attraction between a lattice of cations and delocalized electrons. It acts in all directions, so when the layers of cations slide, the bonding stays intact and the metal changes shape without breaking.</p>
      solution: "<p>在金屬中，鍵合是陽離子晶格與離域電子之間的引力。這種引力作用於所有方向，所以陽離子層滑動時，鍵合仍然完好，金屬改變形狀而不會破裂。</p>",
      misconception: {
        // EN (option A): Metallic bonding is not directional. Directional covalent bonds would break, so the solid would be brittle.
        "0": "金屬鍵沒有方向性。有方向性的共價鍵會斷裂，固體就會是脆的。",
        // EN (option C): That is why an ionic crystal shatters. In a metal the delocalized electrons stay between the cations, so the layers stay bonded.
        "2": "這是離子晶體碎裂的原因。在金屬中，離域電子留在陽離子之間，所以層與層之間仍然鍵合。",
        // EN (option D): The electrons do not move away. They stay delocalized around the cations as the layers slide.
        "3": "電子不會移走。層滑動時，它們仍然離域分佈在陽離子周圍。",
      },
    },

    // ── lab-bonding-properties-q007 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "lab-bonding-properties-q007": {
      // EN: <p>Use the data booklet values <i>χ</i>(Ca) = 1.0 and <i>χ</i>(Cl) = 3.2. Calculate the electronegativity difference, Δ<i>χ</i>, for calcium chloride, <span class="chem">CaCl2</span>.</p>
      stem: "<p>用數據手冊的數值 <i>χ</i>(Ca) = 1.0 和 <i>χ</i>(Cl) = 3.2。計算 (calculate) 氯化鈣 <span class=\"chem\">CaCl2</span> 的電負性差 Δ<i>χ</i>。</p>",
      hints: [
        // EN: Subtract the smaller value from the larger. The 2 in the formula is not used.
        "用較大的數值減去較小的數值。不用化學式中的 2。",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 1.0 = 2.2</div><p>A large difference: calcium chloride is in the ionic region of the triangle, so it should conduct when dissolved but not as a solid.</p>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 1.0 = 2.2</div><p>差很大：氯化鈣位於三角的離子區域，所以它應該在溶解時導電，但在固態時不導電。</p>",
    },

    // ── lab-bonding-properties-q008 · numeric · exam · SL · Structure 2.4.2 · 1 mark
    "lab-bonding-properties-q008": {
      // EN: <p>Use the data booklet values <i>χ</i>(Al) = 1.6 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity for aluminium chloride, <span class="chem">AlCl3</span>, used as the horizontal coordinate of the bonding triangle.</p>
      stem: "<p>用數據手冊的數值 <i>χ</i>(Al) = 1.6 和 <i>χ</i>(Cl) = 3.2。計算 (calculate) 氯化鋁 <span class=\"chem\">AlCl3</span> 的平均電負性，即鍵合三角的橫坐標。</p>",
      hints: [
        // EN: Average = (χ<sub>a</sub> + χ<sub>b</sub>) / 2, using one value for each element.
        "平均值 = (χ<sub>a</sub> + χ<sub>b</sub>) / 2，每種元素只用一個數值。",
      ],
      // EN: <div class="worked__math">average <i>χ</i> = (1.6 + 3.2) / 2 = 2.4</div><p>With Δ<i>χ</i> = 1.6, this point lies towards the polar covalent part of the triangle, well below sodium chloride. This fits aluminium chloride’s much lower melting and sublimation temperature.</p>
      solution: "<div class=\"worked__math\">平均 <i>χ</i> = (1.6 + 3.2) / 2 = 2.4</div><p>Δ<i>χ</i> = 1.6，這一點位於三角中靠近極性共價的部分，遠低於氯化鈉。這與氯化鋁的熔化和昇華溫度低得多相符。</p>",
    },

    // ── lab-bonding-properties-q009 · short · exam · SL · Structure 2.1.3 · 2 marks
    "lab-bonding-properties-q009": {
      // EN: <p>Before testing the solids, a student measures the current when the electrodes are dipped in distilled water alone. Explain why this is done, and why the electrodes are rinsed with distilled water between tests.</p>
      stem: "<p>測試固體之前，一名學生先量度電極浸在只有蒸餾水中時的電流。解釋 (explain) 為甚麼要這樣做，以及為甚麼每次測試之間要用蒸餾水沖洗電極。</p>",
      hints: [
        // EN: What would you compare each reading with? What could be left on the electrodes after dipping them in salt solution?
        "你會把每個讀數與甚麼比較？把電極浸在鹽溶液後，電極上可能殘留甚麼？",
      ],
      // EN: <p>Distilled water is a control: it shows the small reading that is not caused by the solid, so each mixture can be compared with it. Rinsing removes ions left on the electrodes from the previous solution, which would otherwise give a higher current in the next test.</p>
      answer: "<p>蒸餾水是對照：它顯示不是由固體造成的小讀數，所以每種混合物都可以與它比較。沖洗可除去電極上殘留的上一種溶液的離子，否則下一個測試的電流會較高。</p>",
      markscheme: [
        // EN: Control / baseline: shows the current without any dissolved solid, to compare with. Accept: water itself may conduct slightly.
        "對照／基線：顯示沒有溶解任何固體時的電流，作比較之用。接受：水本身可能稍為導電。",
        // EN: Rinsing removes ions carried over from the previous test, which would raise the next reading / contaminate it.
        "沖洗可除去從上一個測試帶過來的離子，否則這些離子會使下一個讀數升高／受到污染。",
      ],
    },

    // ── lab-bonding-properties-q010 · numeric · exam · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q010": {
      // EN: <p>Three readings for one solution are 18.2, 18.8 and 18.5 mA. Using half the range as the uncertainty, calculate the percentage uncertainty in the mean current.</p>
      stem: "<p>一種溶液的三個讀數是 18.2、18.8 和 18.5 mA。以範圍的一半作為不確定度，計算 (calculate) 平均電流的百分不確定度。</p>",
      hints: [
        // EN: Mean = 18.5 mA. Half the range = (18.8 − 18.2) ÷ 2.
        "平均值 = 18.5 mA。範圍的一半 = (18.8 − 18.2) ÷ 2。",
        // EN: Percentage uncertainty = uncertainty ÷ mean × 100.
        "百分不確定度 = 不確定度 ÷ 平均值 × 100。",
      ],
      // EN: <div class="worked__math">mean = (18.2 + 18.8 + 18.5) ÷ 3 = 18.5 mA</div><div class="worked__math">uncertainty = (18.8 − 18.2) ÷ 2 = ±0.3 mA</div><div class="worked__math">% uncertainty = 0.3 ÷ 18.5 × 100 = 1.6 %</div>
      solution: "<div class=\"worked__math\">平均值 = (18.2 + 18.8 + 18.5) ÷ 3 = 18.5 mA</div><div class=\"worked__math\">不確定度 = (18.8 − 18.2) ÷ 2 = ±0.3 mA</div><div class=\"worked__math\">百分不確定度 = 0.3 ÷ 18.5 × 100 = 1.6 %</div>",
    },

    // ── lab-bonding-properties-q011 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "lab-bonding-properties-q011": {
      // EN: <p>Two grey, shiny unknown solids both conduct electricity as solids and do not melt in a Bunsen flame. One is a metal and the other is graphite. Which test distinguishes them?</p>
      stem: "<p>兩種有光澤的灰色未知固體在固態時都導電，在本生燈火焰中都不熔化。一種是金屬，另一種是石墨。哪一項測試可以區分它們？</p>",
      options: [
        // EN: Shaking with water
        "與水一起搖動",
        // EN: Tapping with a hammer
        "用錘子輕敲",
        // EN: Measuring the conductivity of the solid again with a higher voltage
        "用較高的電壓再量度固體的導電性",
        // EN: Shaking with hexane
        "與己烷一起搖動",
      ],
      hints: [
        // EN: Which property of metals comes from layers of cations that can slide?
        "金屬的哪一種性質來自可以滑動的陽離子層？",
      ],
      // EN: <p>A metal is malleable: it flattens when hammered. Graphite is not malleable: it flakes and crumbles, because its layers separate easily. So the hammer test tells them apart.</p>
      solution: "<p>金屬有展性：被錘打時會壓扁。石墨沒有展性：它會剝落和碎裂，因為它的層很容易分開。所以錘子測試可以區分它們。</p>",
      misconception: {
        // EN (option A): Neither a metal nor graphite dissolves in water, so both give the same result.
        "0": "金屬和石墨都不溶於水，所以兩者結果相同。",
        // EN (option C): Both conduct as solids, because both have delocalized electrons. A higher voltage does not separate them.
        "2": "兩者在固態時都導電，因為兩者都有離域電子。較高的電壓不能區分它們。",
        // EN (option D): Neither dissolves in hexane.
        "3": "兩者都不溶於己烷。",
      },
    },

    // ── lab-bonding-properties-q012 · mcq · exam · SL · Structure 2.2.9 · 1 mark
    "lab-bonding-properties-q012": {
      // EN: <p>Paraffin wax dissolves in hexane but not in water. Which is the best explanation?</p>
      stem: "<p>石蠟溶於己烷，但不溶於水。哪一項是最好的解釋？</p>",
      options: [
        // EN: Wax is ionic and hexane is polar.
        "蠟是離子化合物，而己烷是極性的。",
        // EN: Wax molecules are non-polar. London forces between wax and hexane molecules are similar in strength to those they replace, but wax cannot break the hydrogen bonds between water molecules.
        "蠟分子是非極性的。蠟分子與己烷分子之間的倫敦力，與它們所取代的倫敦力強度相近；但蠟不能破壞水分子之間的氫鍵。",
        // EN: Wax has a covalent network structure.
        "蠟有巨型共價結構。",
        // EN: Water is denser than hexane.
        "水的密度比己烷大。",
      ],
      hints: [
        // EN: “Like dissolves like.” Is wax polar or non-polar? What forces hold water molecules together?
        "「相似者相溶」。蠟是極性還是非極性的？甚麼引力把水分子維繫在一起？",
      ],
      // EN: <p>Wax is made of long non-polar hydrocarbon molecules held by London forces. Hexane is also non-polar, so wax and hexane molecules can mix with similar attractions. Water molecules are held together by hydrogen bonds, which non-polar wax molecules cannot replace, so wax does not dissolve in water.</p>
      solution: "<p>蠟由長鏈的非極性烴分子構成，分子之間由倫敦力維繫。己烷也是非極性的，所以蠟分子和己烷分子可以混合，引力相近。水分子之間由氫鍵維繫，非極性的蠟分子不能取代這些氫鍵，所以蠟不溶於水。</p>",
      misconception: {
        // EN (option A): Wax is a covalent molecular substance, and hexane is non-polar.
        "0": "蠟是共價分子物質，而己烷是非極性的。",
        // EN (option C): A network solid would not dissolve in anything, and would not melt below 100 °C.
        "2": "巨型共價固體不會溶於任何溶劑，也不會在 100 °C 以下熔化。",
        // EN (option D): Density decides whether the wax floats, not whether it dissolves.
        "3": "密度決定蠟是否浮起，而不是它是否溶解。",
      },
    },

    // ── lab-bonding-properties-q013 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "lab-bonding-properties-q013": {
      // EN: <p>Which precaution is needed when testing the solubility of solids in hexane?</p>
      stem: "<p>測試固體在己烷中的溶解度時，需要哪一項安全措施？</p>",
      options: [
        // EN: Heat the hexane in a Bunsen flame to make the solid dissolve faster.
        "用本生燈火焰加熱己烷，使固體溶解得更快。",
        // EN: Use the hexane in a fume cupboard with no flames nearby.
        "在煙櫥內使用己烷，附近不可有火焰。",
        // EN: Pour the used hexane down the sink with plenty of water.
        "用大量清水把用過的己烷倒進水槽。",
        // EN: Use a larger volume of hexane to dilute it.
        "用較大體積的己烷把它稀釋。",
      ],
      hints: [
        // EN: What is the main hazard of hexane?
        "己烷的主要危險是甚麼？",
      ],
      // EN: <p>Hexane is highly flammable and its vapour is harmful. Use small volumes in a fume cupboard, keep all flames away, and put the waste in a labelled organic waste container.</p>
      solution: "<p>己烷高度易燃，蒸氣有害。在煙櫥內使用少量己烷，所有火焰都要遠離，並把廢液放進貼有標籤的有機廢液容器。</p>",
      misconception: {
        // EN (option A): Hexane is highly flammable. It must never be heated with a flame.
        "0": "己烷高度易燃。絕不可以用火焰加熱。",
        // EN (option C): Hexane does not mix with water and is harmful to the environment. It goes in an organic waste container.
        "2": "己烷不與水混合，而且對環境有害。它要放進有機廢液容器。",
        // EN (option D): More hexane means more flammable vapour, not less hazard.
        "3": "己烷越多，易燃的蒸氣越多，危險不會減少。",
      },
    },

    // ── lab-bonding-properties-q014 · short · challenge · SL · Structure 2.2.9 · 2 marks
    "lab-bonding-properties-q014": {
      // EN: <p>A student finds that solid Y has a high melting point and dissolves in water. The student concludes that Y is ionic. Evaluate this conclusion and state one further test that would support it.</p>
      stem: "<p>一名學生發現固體 Y 的熔點高，並溶於水。學生的結論是 Y 是離子化合物。評價 (evaluate) 這個結論，並寫出 (state) 一項可支持它的進一步測試。</p>",
      hints: [
        // EN: Can you think of a non-ionic solid that dissolves in water?
        "你能想到一種溶於水的非離子固體嗎？",
        // EN: Which property depends on whether there are ions that can move?
        "哪一種性質取決於是否有可以移動的離子？",
      ],
      // EN: <p>The evidence is not enough: some covalent molecular substances (for example sucrose) dissolve in water, and network or metallic solids also have high melting points. Test the conductivity: if Y does not conduct as a solid but the solution conducts clearly more than distilled water, Y releases ions and is ionic.</p>
      answer: "<p>證據不足：有些共價分子物質（例如蔗糖）溶於水，而巨型共價固體和金屬固體的熔點也高。測試導電性：如果 Y 在固態時不導電，但它的溶液導電程度明顯高於蒸餾水，Y 就釋放出離子，是離子化合物。</p>",
      markscheme: [
        // EN: Not sufficient: dissolving in water / a high melting point is also shown by other types (for example a polar molecular solid dissolves).
        "不足夠：其他類型的物質也會溶於水／熔點高（例如極性分子固體會溶解）。",
        // EN: Further test: conductivity of the solution (compared with distilled water) AND of the solid: solution conducts, solid does not → ionic.
        "進一步測試：溶液的導電性（與蒸餾水比較）以及固體的導電性：溶液導電，固體不導電 → 離子化合物。",
      ],
    },

  }
});
