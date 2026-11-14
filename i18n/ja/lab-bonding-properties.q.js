/* lab-bonding-properties.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-bonding-properties.q', {
  questions: {

    // ── lab-bonding-properties-q001 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q001": {
      // EN: <p>Four solids were tested.</p><div class="table-scroll"><table class="data"><caption>Test results (control, distilled water: 0.1 mA)</caption><thead><tr><th scope="col">Solid</th><th scope="col">Melting</th><th scope="col" class="num">Solid / mA</th><th scope="col" class="num">With water / mA</th></tr></thead><tbody><tr><th scope="row">A</th><td>melts below 100 °C</td><td class="num">0.0</td><td class="num">0.1</td></tr><tr><th scope="row">B</th><td>does not melt in a Bunsen flame</td><td class="num">0.0</td><td class="num">21.7</td></tr><tr><th scope="row">C</th><td>does not melt in a Bunsen flame</td><td class="num">0.0</td><td class="num">0.1</td></tr><tr><th scope="row">D</th><td>does not melt in a Bunsen flame</td><td class="num">59.4</td><td class="num">0.1</td></tr></tbody></table></div><p>Which solid is most likely to be ionic?</p>
      stem: "<p>4 つの固体を調べました。</p><div class=\"table-scroll\"><table class=\"data\"><caption>実験の結果（対照の蒸留水：0.1 mA）</caption><thead><tr><th scope=\"col\">固体</th><th scope=\"col\">融け方</th><th scope=\"col\" class=\"num\">固体 / mA</th><th scope=\"col\" class=\"num\">水と混ぜたもの / mA</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>100 °C より低い温度で融ける</td><td class=\"num\">0.0</td><td class=\"num\">0.1</td></tr><tr><th scope=\"row\">B</th><td>ガスバーナーの炎で融けない</td><td class=\"num\">0.0</td><td class=\"num\">21.7</td></tr><tr><th scope=\"row\">C</th><td>ガスバーナーの炎で融けない</td><td class=\"num\">0.0</td><td class=\"num\">0.1</td></tr><tr><th scope=\"row\">D</th><td>ガスバーナーの炎で融けない</td><td class=\"num\">59.4</td><td class=\"num\">0.1</td></tr></tbody></table></div><p>イオン結合でできている可能性が最も高い固体はどれですか。</p>",
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
        "イオン性の固体は、固体では電気を通しません。では、いつ電気を通すでしょうか。",
      ],
      // EN: <p>B has a high melting point, does not conduct as a solid, and its mixture with water conducts far more than distilled water. This is the pattern of an ionic lattice: the ions are fixed in the solid but free to move once the solid dissolves.</p>
      solution: "<p>B は融点が高く、固体では電気を通さず、水との混合物は蒸留水よりずっと電気を通します。これはイオン結晶のパターンです。イオンは固体の中では固定されていますが、固体が溶けると動けるようになります。</p>",
      misconception: {
        // EN (option A): A low melting point and no current in any test fit a covalent molecular solid, with weak forces between molecules.
        "0": "融点が低く、どの実験でも電流が流れないのは、分子の間の力が弱い分子性物質（共有結合）に当てはまります。",
        // EN (option C): C has a high melting point but its mixture with water reads the same as the control. No ions are released, so it fits a covalent network.
        "2": "C は融点が高いですが、水との混合物の読みは対照と同じです。イオンが出ていないので、共有結合の結晶に当てはまります。",
        // EN (option D): D conducts as a solid. Ions in a lattice are fixed, so an ionic solid cannot do this. D is a metal (or graphite).
        "3": "D は固体で電気を通します。結晶格子の中のイオンは固定されているので、イオン性の固体にはこれはできません。D は金属（または黒鉛）です。",
      },
    },

    // ── lab-bonding-properties-q002 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q002": {
      // EN: <p>Why does solid potassium iodide not conduct electricity?</p>
      stem: "<p>固体のヨウ化カリウムが電気を通さないのはなぜですか。</p>",
      options: [
        // EN: It contains no charged particles.
        "電荷をもつ粒子を含まないから。",
        // EN: Its ions are held in fixed positions in the lattice.
        "イオンが結晶格子の中の決まった位置に保たれているから。",
        // EN: Its electrons are all held in covalent bonds.
        "電子がすべて共有結合に使われているから。",
        // EN: Its ions are too large to move.
        "イオンが大きすぎて動けないから。",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move.
        "電気を通すには、動ける電荷をもつ粒子が必要です。",
      ],
      // EN: <p>Solid potassium iodide contains ions, but they are held in fixed positions in the lattice by strong electrostatic attraction. They can only vibrate, so they cannot carry charge through the solid.</p>
      solution: "<p>固体のヨウ化カリウムにはイオンがありますが、強い静電気的な引力によって、結晶格子の中の決まった位置に保たれています。イオンは振動できるだけなので、固体の中で電荷を運べません。</p>",
      misconception: {
        // EN (option A): Potassium iodide is made of K<sup>+</sup> and I<sup>−</sup> ions. The charged particles are there, but they cannot move.
        "0": "ヨウ化カリウムは K<sup>+</sup> と I<sup>−</sup> のイオンでできています。電荷をもつ粒子はありますが、動けません。",
        // EN (option C): Potassium iodide is ionic, not covalent. Conduction in an ionic compound is by moving ions, not electrons.
        "2": "ヨウ化カリウムは共有結合ではなく、イオン結合の物質です。イオン化合物で電気を通すのは、電子ではなく動くイオンです。",
        // EN (option D): Size is not the reason. The same ions move freely when the solid is melted or dissolved.
        "3": "大きさは理由ではありません。固体を融解したり溶かしたりすると、同じイオンが自由に動きます。",
      },
    },

    // ── lab-bonding-properties-q003 · short · exam · SL · Structure 2.1.3 · 2 marks
    "lab-bonding-properties-q003": {
      // EN: <p>Sodium chloride does not conduct as a solid, but a mixture of sodium chloride and water conducts. Explain this difference.</p>
      stem: "<p>塩化ナトリウムは固体では電気を通しませんが、塩化ナトリウムと水の混合物は電気を通します。この違いを説明しなさい (explain)。</p>",
      hints: [
        // EN: Both states contain the same ions. What is different about them?
        "どちらの状態にも同じイオンがあります。何が違うのでしょうか。",
      ],
      // EN: <p>In the solid, the ions are held in fixed positions in the lattice, so they cannot move. When sodium chloride dissolves, the lattice breaks up and the ions are free to move through the solution, so they can carry charge.</p>
      answer: "<p>固体では、イオンが結晶格子の中の決まった位置に保たれているので、動けません。塩化ナトリウムが溶けると、結晶格子がくずれ、イオンが溶液の中を自由に動けるようになるので、電荷を運べます。</p>",
      markscheme: [
        // EN: Solid: ions in fixed positions / cannot move. Do not accept: “no ions” or “no free electrons” alone.
        "固体：イオンが決まった位置にある / 動けない。「イオンがない」や「自由電子がない」だけでは認めない。",
        // EN: In solution: ions are free to move (and carry charge). Do not accept: “electrons move”.
        "溶液中：イオンが自由に動ける（そして電荷を運ぶ）。「電子が動く」は認めない。",
      ],
    },

    // ── lab-bonding-properties-q004 · mcq · exam · SL · Structure 2.2.7 · 1 mark
    "lab-bonding-properties-q004": {
      // EN: <p>An unknown grey solid conducts electricity as a solid, does not melt in a Bunsen flame, and leaves a grey mark when tapped. It is graphite. Why does graphite conduct?</p>
      stem: "<p>未知の灰色の固体は、固体で電気を通し、ガスバーナーの炎で融けず、たたくと灰色の跡が残ります。これは黒鉛です。黒鉛が電気を通すのはなぜですか。</p>",
      options: [
        // EN: It contains positive ions that move through the layers.
        "層の間を動く陽イオンを含むから。",
        // EN: Each carbon atom forms three covalent bonds, and the fourth outer electron is delocalized within its layer, so it can move along the layers.
        "それぞれの炭素原子は 3 つの共有結合をつくり、4 つ目の最外殻電子はその層の中で非局在化しているので、層にそって動けるから。",
        // EN: It has metallic bonding between its carbon atoms.
        "炭素原子の間に金属結合があるから。",
        // EN: Its layers are held together by strong covalent bonds.
        "層どうしが強い共有結合で結びついているから。",
      ],
      hints: [
        // EN: How many covalent bonds does each carbon atom form in graphite? What happens to its other outer electron?
        "黒鉛の中で、それぞれの炭素原子はいくつの共有結合をつくるでしょうか。残りの最外殻電子はどうなるでしょうか。",
      ],
      // EN: <p>In graphite each carbon atom is covalently bonded to three others in a flat layer. The fourth outer electron of each atom is delocalized, so it can move along the layers and carry charge.</p>
      solution: "<p>黒鉛では、それぞれの炭素原子が平らな層の中でほかの 3 個の原子と共有結合しています。それぞれの原子の 4 つ目の最外殻電子は非局在化しているので、層にそって動き、電荷を運べます。</p>",
      misconception: {
        // EN (option A): Graphite contains no ions. The current is carried by electrons.
        "0": "黒鉛にはイオンがありません。電流を運ぶのは電子です。",
        // EN (option C): Graphite is a non-metal element with covalent bonds. It conducts because of delocalized electrons, but it is not malleable like a metal.
        "2": "黒鉛は共有結合をもつ非金属の単体です。非局在化電子のために電気を通しますが、金属のような展性はありません。",
        // EN (option D): The forces between the layers are weak. Strong bonds alone do not give conduction: diamond has strong bonds and does not conduct.
        "3": "層の間の力は弱いのです。強い結合だけでは電気は通りません。ダイヤモンドは強い結合をもちますが、電気を通しません。",
      },
    },

    // ── lab-bonding-properties-q005 · short · exam · SL · Structure 2.2.9 · 2 marks
    "lab-bonding-properties-q005": {
      // EN: <p>Sucrose dissolves well in water, but the solution reads the same current as distilled water. Explain both observations.</p>
      stem: "<p>スクロースは水によく溶けますが、その水溶液の電流の読みは蒸留水と同じです。両方の観察を説明しなさい (explain)。</p>",
      hints: [
        // EN: What particles are in a sugar solution? Do they carry a charge?
        "砂糖の水溶液には、どんな粒子があるでしょうか。その粒子は電荷をもっているでしょうか。",
      ],
      // EN: <p>Sucrose is a covalent molecular substance. Its molecules have many –OH groups, so they form hydrogen bonds with water molecules, which is why it dissolves. The solution contains neutral molecules, not ions, so there are no charged particles free to move and it does not conduct.</p>
      answer: "<p>スクロースは分子性物質（共有結合）です。その分子には –OH 基が多くあるので、水分子と水素結合をつくります。だから水に溶けます。水溶液に含まれるのはイオンではなく電気的に中性の分子なので、動ける電荷をもつ粒子がなく、電気を通しません。</p>",
      markscheme: [
        // EN: Dissolves: (polar) sucrose molecules form hydrogen bonds with water. Accept: attractions between sucrose and water molecules.
        "溶ける：（極性のある）スクロース分子が水と水素結合をつくる。認める：スクロース分子と水分子の間の引力。",
        // EN: No conduction: the solution contains (neutral) molecules, not ions / no charged particles free to move.
        "電気を通さない：水溶液に含まれるのはイオンではなく（中性の）分子 / 動ける電荷をもつ粒子がない。",
      ],
    },

    // ── lab-bonding-properties-q006 · mcq · foundation · SL · Structure 2.3.1 · 1 mark
    "lab-bonding-properties-q006": {
      // EN: <p>A piece of copper flattens without breaking when it is hammered. Which statement explains this?</p>
      stem: "<p>銅のかけらは、ハンマーでたたくと割れずに平たくなります。これを説明している文はどれですか。</p>",
      options: [
        // EN: The copper atoms are joined by strong, directional covalent bonds.
        "銅原子は、強く方向性のある共有結合で結びついている。",
        // EN: Layers of cations can slide over each other, and the attraction to the delocalized electrons holds them together in any position.
        "陽イオンの層が互いにすべることができ、非局在化電子への引力が、どの位置でも層をまとめている。",
        // EN: Copper ions of the same charge repel each other when the layers move.
        "層が動くと、同じ電荷をもつ銅イオンどうしが反発する。",
        // EN: The delocalized electrons move away from the hammer.
        "非局在化電子がハンマーから離れる。",
      ],
      hints: [
        // EN: Is metallic bonding directional? What happens to it when the layers move?
        "金属結合には方向性があるでしょうか。層が動くと、金属結合はどうなるでしょうか。",
      ],
      // EN: <p>In a metal the bonding is the attraction between a lattice of cations and delocalized electrons. It acts in all directions, so when the layers of cations slide, the bonding stays intact and the metal changes shape without breaking.</p>
      solution: "<p>金属の結合は、陽イオンの格子と非局在化電子の間の引力です。この引力はあらゆる方向にはたらくので、陽イオンの層がすべっても結合は保たれ、金属は割れずに形を変えます。</p>",
      misconception: {
        // EN (option A): Metallic bonding is not directional. Directional covalent bonds would break, so the solid would be brittle.
        "0": "金属結合には方向性がありません。方向性のある共有結合なら切れてしまい、固体はもろくなります。",
        // EN (option C): That is why an ionic crystal shatters. In a metal the delocalized electrons stay between the cations, so the layers stay bonded.
        "2": "それはイオン結晶が粉々に割れる理由です。金属では非局在化電子が陽イオンの間にとどまるので、層は結合したままです。",
        // EN (option D): The electrons do not move away. They stay delocalized around the cations as the layers slide.
        "3": "電子は離れていきません。層がすべっても、陽イオンのまわりで非局在化したままです。",
      },
    },

    // ── lab-bonding-properties-q007 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "lab-bonding-properties-q007": {
      // EN: <p>Use the data booklet values <i>χ</i>(Ca) = 1.0 and <i>χ</i>(Cl) = 3.2. Calculate the electronegativity difference, Δ<i>χ</i>, for calcium chloride, <span class="chem">CaCl2</span>.</p>
      stem: "<p>データブックレットの値 <i>χ</i>(Ca) = 1.0 と <i>χ</i>(Cl) = 3.2 を使い、塩化カルシウム <span class=\"chem\">CaCl2</span> の電気陰性度の差 Δ<i>χ</i> を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Subtract the smaller value from the larger. The 2 in the formula is not used.
        "大きいほうの値から小さいほうの値を引きます。化学式の 2 は使いません。",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 1.0 = 2.2</div><p>A large difference: calcium chloride is in the ionic region of the triangle, so it should conduct when dissolved but not as a solid.</p>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 1.0 = 2.2</div><p>差が大きいので、塩化カルシウムは三角形のイオン結合の領域にあります。したがって、溶けると電気を通し、固体では通さないはずです。</p>",
    },

    // ── lab-bonding-properties-q008 · numeric · exam · SL · Structure 2.4.2 · 1 mark
    "lab-bonding-properties-q008": {
      // EN: <p>Use the data booklet values <i>χ</i>(Al) = 1.6 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity for aluminium chloride, <span class="chem">AlCl3</span>, used as the horizontal coordinate of the bonding triangle.</p>
      stem: "<p>データブックレットの値 <i>χ</i>(Al) = 1.6 と <i>χ</i>(Cl) = 3.2 を使い、結合の三角形の横軸の座標に使う、塩化アルミニウム <span class=\"chem\">AlCl3</span> の電気陰性度の平均を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Average = (χ<sub>a</sub> + χ<sub>b</sub>) / 2, using one value for each element.
        "平均 = (χ<sub>a</sub> + χ<sub>b</sub>) / 2。それぞれの元素の値を 1 つずつ使います。",
      ],
      // EN: <div class="worked__math">average <i>χ</i> = (1.6 + 3.2) / 2 = 2.4</div><p>With Δ<i>χ</i> = 1.6, this point lies towards the polar covalent part of the triangle, well below sodium chloride. This fits aluminium chloride’s much lower melting and sublimation temperature.</p>
      solution: "<div class=\"worked__math\"><i>χ</i> の平均 = (1.6 + 3.2) / 2 = 2.4</div><p>Δ<i>χ</i> = 1.6 なので、この点は三角形の極性共有結合の部分の方にあり、塩化ナトリウムよりずっと下です。これは、塩化アルミニウムの融解・昇華の温度がずっと低いことと合います。</p>",
    },

    // ── lab-bonding-properties-q009 · short · exam · SL · Structure 2.1.3 · 2 marks
    "lab-bonding-properties-q009": {
      // EN: <p>Before testing the solids, a student measures the current when the electrodes are dipped in distilled water alone. Explain why this is done, and why the electrodes are rinsed with distilled water between tests.</p>
      stem: "<p>固体を調べる前に、ある生徒が、電極を蒸留水だけに浸したときの電流を測定します。これを行う理由と、実験の合間に電極を蒸留水ですすぐ理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: What would you compare each reading with? What could be left on the electrodes after dipping them in salt solution?
        "それぞれの読みを何とくらべるでしょうか。電極を食塩水に浸したあと、電極には何が残っている可能性があるでしょうか。",
      ],
      // EN: <p>Distilled water is a control: it shows the small reading that is not caused by the solid, so each mixture can be compared with it. Rinsing removes ions left on the electrodes from the previous solution, which would otherwise give a higher current in the next test.</p>
      answer: "<p>蒸留水は対照です。固体が原因ではない小さな読みがわかるので、それぞれの混合物をそれとくらべられます。すすぐと、前の溶液から電極に残ったイオンが取り除かれます。そうしないと、次の実験で電流が大きくなってしまいます。</p>",
      markscheme: [
        // EN: Control / baseline: shows the current without any dissolved solid, to compare with. Accept: water itself may conduct slightly.
        "対照 / 基準：溶けた固体がないときの電流を示し、くらべる基準になる。認める：水そのものがわずかに電気を通すことがある。",
        // EN: Rinsing removes ions carried over from the previous test, which would raise the next reading / contaminate it.
        "すすぐと前の実験から持ちこまれたイオンが取り除かれる。残っていると次の読みが大きくなる / 汚染される。",
      ],
    },

    // ── lab-bonding-properties-q010 · numeric · exam · SL · Structure 2.1.3 · 1 mark
    "lab-bonding-properties-q010": {
      // EN: <p>Three readings for one solution are 18.2, 18.8 and 18.5 mA. Using half the range as the uncertainty, calculate the percentage uncertainty in the mean current.</p>
      stem: "<p>1 つの溶液についての 3 回の読みは、18.2、18.8、18.5 mA です。範囲の半分を不確かさとして、電流の平均の百分率の不確かさを計算しなさい (calculate)。</p>",
      hints: [
        // EN: Mean = 18.5 mA. Half the range = (18.8 − 18.2) ÷ 2.
        "平均 = 18.5 mA。範囲の半分 = (18.8 − 18.2) ÷ 2。",
        // EN: Percentage uncertainty = uncertainty ÷ mean × 100.
        "百分率の不確かさ = 不確かさ ÷ 平均 × 100。",
      ],
      // EN: <div class="worked__math">mean = (18.2 + 18.8 + 18.5) ÷ 3 = 18.5 mA</div><div class="worked__math">uncertainty = (18.8 − 18.2) ÷ 2 = ±0.3 mA</div><div class="worked__math">% uncertainty = 0.3 ÷ 18.5 × 100 = 1.6 %</div>
      solution: "<div class=\"worked__math\">平均 = (18.2 + 18.8 + 18.5) ÷ 3 = 18.5 mA</div><div class=\"worked__math\">不確かさ = (18.8 − 18.2) ÷ 2 = ±0.3 mA</div><div class=\"worked__math\">百分率の不確かさ = 0.3 ÷ 18.5 × 100 = 1.6 %</div>",
    },

    // ── lab-bonding-properties-q011 · mcq · exam · SL · Structure 2.3.1 · 1 mark
    "lab-bonding-properties-q011": {
      // EN: <p>Two grey, shiny unknown solids both conduct electricity as solids and do not melt in a Bunsen flame. One is a metal and the other is graphite. Which test distinguishes them?</p>
      stem: "<p>灰色で光沢のある 2 つの未知の固体は、どちらも固体で電気を通し、ガスバーナーの炎で融けません。一方は金属で、もう一方は黒鉛です。両者を見分けられる実験はどれですか。</p>",
      options: [
        // EN: Shaking with water
        "水と振り混ぜる",
        // EN: Tapping with a hammer
        "ハンマーでたたく",
        // EN: Measuring the conductivity of the solid again with a higher voltage
        "電圧を上げて、固体の電気伝導性をもう一度測定する",
        // EN: Shaking with hexane
        "ヘキサンと振り混ぜる",
      ],
      hints: [
        // EN: Which property of metals comes from layers of cations that can slide?
        "金属のどの性質が、すべることのできる陽イオンの層から生まれるでしょうか。",
      ],
      // EN: <p>A metal is malleable: it flattens when hammered. Graphite is not malleable: it flakes and crumbles, because its layers separate easily. So the hammer test tells them apart.</p>
      solution: "<p>金属には展性があり、たたくと平たくなります。黒鉛には展性がなく、層が簡単にはがれるので、薄くはがれたりくずれたりします。だから、ハンマーの実験で見分けられます。</p>",
      misconception: {
        // EN (option A): Neither a metal nor graphite dissolves in water, so both give the same result.
        "0": "金属も黒鉛も水には溶けないので、どちらも同じ結果になります。",
        // EN (option C): Both conduct as solids, because both have delocalized electrons. A higher voltage does not separate them.
        "2": "どちらも非局在化電子をもつので、固体で電気を通します。電圧を上げても見分けられません。",
        // EN (option D): Neither dissolves in hexane.
        "3": "どちらもヘキサンには溶けません。",
      },
    },

    // ── lab-bonding-properties-q012 · mcq · exam · SL · Structure 2.2.9 · 1 mark
    "lab-bonding-properties-q012": {
      // EN: <p>Paraffin wax dissolves in hexane but not in water. Which is the best explanation?</p>
      stem: "<p>パラフィンろうはヘキサンに溶けますが、水には溶けません。最もよい説明はどれですか。</p>",
      options: [
        // EN: Wax is ionic and hexane is polar.
        "ろうはイオン結合の物質で、ヘキサンには極性がある。",
        // EN: Wax molecules are non-polar. London forces between wax and hexane molecules are similar in strength to those they replace, but wax cannot break the hydrogen bonds between water molecules.
        "ろうの分子は無極性である。ろうとヘキサンの分子の間のロンドン力は、置きかわる力と同じくらいの強さだが、ろうは水分子の間の水素結合を切ることができない。",
        // EN: Wax has a covalent network structure.
        "ろうは共有結合の結晶である。",
        // EN: Water is denser than hexane.
        "水はヘキサンより密度が大きい。",
      ],
      hints: [
        // EN: “Like dissolves like.” Is wax polar or non-polar? What forces hold water molecules together?
        "「似たものどうしはよく溶け合う」。ろうには極性があるでしょうか、ないでしょうか。水分子どうしは、どんな力で結びついているでしょうか。",
      ],
      // EN: <p>Wax is made of long non-polar hydrocarbon molecules held by London forces. Hexane is also non-polar, so wax and hexane molecules can mix with similar attractions. Water molecules are held together by hydrogen bonds, which non-polar wax molecules cannot replace, so wax does not dissolve in water.</p>
      solution: "<p>ろうは、ロンドン力で結びついた、長い無極性の炭化水素の分子でできています。ヘキサンも無極性なので、ろうとヘキサンの分子は、同じくらいの引力で混ざり合えます。水分子どうしは水素結合で結びついていて、無極性のろうの分子はそれに置きかわれないので、ろうは水に溶けません。</p>",
      misconception: {
        // EN (option A): Wax is a covalent molecular substance, and hexane is non-polar.
        "0": "ろうは分子性物質（共有結合）で、ヘキサンは無極性です。",
        // EN (option C): A network solid would not dissolve in anything, and would not melt below 100 °C.
        "2": "共有結合の結晶なら、何にも溶けず、100 °C より低い温度では融けません。",
        // EN (option D): Density decides whether the wax floats, not whether it dissolves.
        "3": "密度で決まるのは、ろうが浮くかどうかで、溶けるかどうかではありません。",
      },
    },

    // ── lab-bonding-properties-q013 · mcq · foundation · SL · Structure 2.2.9 · 1 mark
    "lab-bonding-properties-q013": {
      // EN: <p>Which precaution is needed when testing the solubility of solids in hexane?</p>
      stem: "<p>ヘキサンへの固体の溶けやすさを調べるときに必要な注意はどれですか。</p>",
      options: [
        // EN: Heat the hexane in a Bunsen flame to make the solid dissolve faster.
        "固体が速く溶けるように、ヘキサンをガスバーナーの炎で加熱する。",
        // EN: Use the hexane in a fume cupboard with no flames nearby.
        "ヘキサンは、近くに火のないドラフトの中で使う。",
        // EN: Pour the used hexane down the sink with plenty of water.
        "使ったヘキサンは、多量の水とともに流しに捨てる。",
        // EN: Use a larger volume of hexane to dilute it.
        "ヘキサンをうすめるために、より多くの体積を使う。",
      ],
      hints: [
        // EN: What is the main hazard of hexane?
        "ヘキサンのおもな危険性は何でしょうか。",
      ],
      // EN: <p>Hexane is highly flammable and its vapour is harmful. Use small volumes in a fume cupboard, keep all flames away, and put the waste in a labelled organic waste container.</p>
      solution: "<p>ヘキサンはとても燃えやすく、その蒸気は有害です。ドラフトの中で少量を使い、火をすべて遠ざけ、廃液はラベルの付いた有機溶媒の廃液容器に入れましょう。</p>",
      misconception: {
        // EN (option A): Hexane is highly flammable. It must never be heated with a flame.
        "0": "ヘキサンはとても燃えやすい物質です。決して炎で加熱してはいけません。",
        // EN (option C): Hexane does not mix with water and is harmful to the environment. It goes in an organic waste container.
        "2": "ヘキサンは水と混ざらず、環境に有害です。有機溶媒の廃液容器に入れます。",
        // EN (option D): More hexane means more flammable vapour, not less hazard.
        "3": "ヘキサンが多いほど燃えやすい蒸気も多くなり、危険性は小さくなりません。",
      },
    },

    // ── lab-bonding-properties-q014 · short · challenge · SL · Structure 2.2.9 · 2 marks
    "lab-bonding-properties-q014": {
      // EN: <p>A student finds that solid Y has a high melting point and dissolves in water. The student concludes that Y is ionic. Evaluate this conclusion and state one further test that would support it.</p>
      stem: "<p>ある生徒は、固体 Y が融点が高く、水に溶けることを見つけました。生徒は、Y はイオン結合の物質だと結論づけます。この結論を評価し (evaluate)、それを裏づけるさらなる実験を 1 つ述べなさい (state)。</p>",
      hints: [
        // EN: Can you think of a non-ionic solid that dissolves in water?
        "水に溶ける、イオン結合でない固体を思いつくでしょうか。",
        // EN: Which property depends on whether there are ions that can move?
        "動けるイオンがあるかどうかで決まる性質はどれでしょうか。",
      ],
      // EN: <p>The evidence is not enough: some covalent molecular substances (for example sucrose) dissolve in water, and network or metallic solids also have high melting points. Test the conductivity: if Y does not conduct as a solid but the solution conducts clearly more than distilled water, Y releases ions and is ionic.</p>
      answer: "<p>この証拠では不十分です。分子性物質（共有結合）にも水に溶けるもの（たとえばスクロース）があり、共有結合の結晶や金属も融点が高いからです。電気伝導性を調べましょう。Y が固体では電気を通さず、水溶液が蒸留水よりはっきり電気を通すなら、Y はイオンを出しているので、イオン結合の物質です。</p>",
      markscheme: [
        // EN: Not sufficient: dissolving in water / a high melting point is also shown by other types (for example a polar molecular solid dissolves).
        "不十分：水に溶ける / 融点が高いことは、ほかの種類の物質にも見られる（たとえば極性のある分子性の固体は溶ける）。",
        // EN: Further test: conductivity of the solution (compared with distilled water) AND of the solid: solution conducts, solid does not → ionic.
        "さらなる実験：水溶液（蒸留水とくらべる）と固体の電気伝導性：水溶液は電気を通し、固体は通さない → イオン結合。",
      ],
    },

  }
});
