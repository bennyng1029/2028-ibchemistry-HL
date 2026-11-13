/* s1-1.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-1.q', {
  questions: {

    // ── s1-1-q001 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "s1-1-q001": {
      // EN: <p>Which of these is a <strong>homogeneous mixture</strong>?</p>
      stem: "<p>次のうち、<strong>均一混合物</strong> (homogeneous mixture) はどれですか。</p>",
      options: [
        // EN: Distilled water, <span class="chem">H2O</span>
        "蒸留水 <span class=\"chem\">H2O</span>",
        // EN: Clean, dry air
        "きれいで乾いた空気",
        // EN: Sand stirred into water
        "水に入れてかき混ぜた砂",
        // EN: Copper wire
        "銅線",
      ],
      hints: [
        // EN: A mixture contains more than one substance, and the substances are not chemically bonded to each other.
        "混合物は 2 種類以上の物質を含み、物質どうしは化学的に結合していません。",
        // EN: Homogeneous means the composition is the same throughout. You cannot see separate parts.
        "均一とは、どの部分も組成が同じということです。成分を見分けることはできません。",
      ],
      // EN: <p>Dry air is a mixture of gases (mainly nitrogen and oxygen) that is evenly mixed, so its composition is the same throughout. That is a homogeneous mixture.</p>
      solution: "<p>乾いた空気は、気体（おもに窒素と酸素）が均一に混ざった混合物なので、どの部分も組成が同じです。これが均一混合物です。</p>",
      misconception: {
        // EN (option A): Water is a compound. Its hydrogen and oxygen atoms are chemically bonded in a fixed ratio, so it is a pure substance, not a mixture.
        "0": "水は化合物です。水素原子と酸素原子が一定の比で化学的に結合しているので、混合物ではなく純物質です。",
        // EN (option C): This is a mixture, but you can see separate regions of sand and water. That makes it heterogeneous.
        "2": "これは混合物ですが、砂の部分と水の部分が分かれて見えます。だから不均一混合物です。",
        // EN (option D): Copper is an element. It contains only one type of atom.
        "3": "銅は単体です。1 種類の原子だけでできています。",
      },
    },

    // ── s1-1-q002 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "s1-1-q002": {
      // EN: <p>A gas sample is at 25 °C. What is its temperature in kelvin? Give your answer to 3 significant figures.</p>
      stem: "<p>気体の試料が 25 °C にあります。この温度は何ケルビンですか。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: Kelvin and degrees Celsius have the same step size. Only the zero point is different.
        "ケルビンとセルシウス度は、1 目盛りの幅が同じです。違うのは 0 の位置だけです。",
        // EN: <span class="mono">T(K) = T(°C) + 273.15</span>
        "<span class=\"mono\">T(K) = T(°C) + 273.15</span>",
      ],
      // EN: <div class="worked__math"><i>T</i> = 25 + 273.15 = 298.15 K</div><p>To 3 significant figures this is <strong>298 K</strong>.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 25 + 273.15 = 298.15 K</div><p>有効数字 3 桁で <strong>298 K</strong> です。</p>",
    },

    // ── s1-1-q004 · order · foundation · SL · Structure 1.1.1 · 2 marks
    "s1-1-q004": {
      // EN: <p>Put these steps in order to get dry salt crystals from a dry mixture of sand and salt.</p>
      stem: "<p>砂と塩の乾いた混合物から、乾いた塩の結晶を得ます。次のステップを正しい順に並べましょう。</p>",
      options: [
        // EN: Add water and stir so that the salt dissolves.
        "水を加えてかき混ぜ、塩を溶かす。",
        // EN: Filter. The sand stays on the filter paper as the residue.
        "ろ過する。砂は残留物としてろ紙に残る。",
        // EN: Heat the filtrate to evaporate most of the water.
        "ろ液を加熱して、水の大部分を蒸発させる。",
        // EN: Leave the solution to cool and crystallize, then dry the crystals.
        "溶液を置いて冷やし、結晶化させてから、結晶を乾かす。",
      ],
      hints: [
        // EN: Which property is different for sand and salt? Use it first.
        "砂と塩で違う性質は何でしょうか。まずそれを使います。",
        // EN: The salt ends up in the filtrate, still dissolved. What must happen to the water?
        "塩は溶けたまま、ろ液に入ります。水をどうすればよいでしょうか。",
      ],
      // EN: <p>Salt is soluble in water and sand is not. Dissolving (solvation) then filtering separates them: sand is the residue and salt solution is the filtrate. Evaporating the water from the filtrate leaves the salt, which crystallizes and can be dried.</p>
      solution: "<p>塩は水に溶け、砂は溶けません。溶かして（溶媒和）からろ過すると、2 つを分けられます。砂が残留物、食塩水がろ液です。ろ液から水を蒸発させると塩が残り、塩は結晶になるので、乾かせます。</p>",
    },

    // ── s1-1-q006 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "s1-1-q006": {
      // EN: <p>Which of these is a <strong>compound</strong>?</p>
      stem: "<p>次のうち、<strong>化合物</strong> (compound) はどれですか。</p>",
      options: [
        // EN: Chlorine gas, <span class="chem">Cl2</span>
        "塩素（気体）<span class=\"chem\">Cl2</span>",
        // EN: Ammonia, <span class="chem">NH3</span>
        "アンモニア <span class=\"chem\">NH3</span>",
        // EN: Air
        "空気",
        // EN: Salt water
        "食塩水",
      ],
      hints: [
        // EN: A compound contains atoms of two or more different elements, chemically bonded.
        "化合物は、2 種類以上の異なる元素の原子が化学的に結合してできています。",
        // EN: Look at each formula. How many different elements does it contain?
        "それぞれの化学式を見ましょう。元素は何種類ありますか。",
      ],
      // EN: <p>Ammonia contains nitrogen and hydrogen atoms chemically bonded in a fixed 1 : 3 ratio, so it is a compound. <span class="chem">Cl2</span> is an element. Air and salt water are mixtures.</p>
      solution: "<p>アンモニアは、窒素原子と水素原子が 1 : 3 の一定の比で化学的に結合しているので、化合物です。<span class=\"chem\">Cl2</span> は単体です。空気と食塩水は混合物です。</p>",
      misconception: {
        // EN (option A): A chlorine molecule has two atoms, but both are chlorine atoms. One type of atom means an element.
        "0": "塩素分子は原子を 2 個含みますが、どちらも塩素原子です。原子が 1 種類なので、単体です。",
        // EN (option C): Air is a mixture. Its gases are not chemically bonded to each other and their proportions can vary.
        "2": "空気は混合物です。気体どうしは化学的に結合しておらず、割合も変わります。",
        // EN (option D): Salt water is a mixture (a solution). The salt and water are not chemically bonded in a fixed ratio.
        "3": "食塩水は混合物（溶液）です。塩と水は、一定の比で化学的に結合しているわけではありません。",
      },
    },

    // ── s1-1-q007 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q007": {
      // EN: <p>On a very cold night, water vapour in the air forms ice crystals directly on a window, with no liquid in between. What is this change of state called?</p>
      stem: "<p>とても寒い夜、空気中の水蒸気が、液体を経ずに、窓の上で直接氷の結晶になります。この状態変化を何といいますか。</p>",
      options: [
        // EN: Sublimation
        "昇華 (sublimation)",
        // EN: Condensation
        "凝縮 (condensation)",
        // EN: Deposition
        "凝華 (deposition)",
        // EN: Freezing
        "凝固 (freezing)",
      ],
      hints: [
        // EN: Write down the starting state and the final state first.
        "まず、はじめの状態と終わりの状態を書き出しましょう。",
        // EN: The change is gas → solid.
        "変化は 気体 → 固体 です。",
      ],
      // EN: <p>Water vapour is a gas and ice is a solid. The change gas → solid is called <strong>deposition</strong>.</p>
      solution: "<p>水蒸気は気体、氷は固体です。気体 → 固体 の変化を<strong>凝華</strong> (deposition) といいます。</p>",
      misconception: {
        // EN (option A): Sublimation is the opposite direction: solid to gas.
        "0": "昇華は逆向きで、固体から気体への変化です。",
        // EN (option B): Condensation is gas to liquid. Here no liquid forms.
        "1": "凝縮は気体から液体への変化です。ここでは液体はできません。",
        // EN (option D): Freezing is liquid to solid. Here the starting state is a gas.
        "3": "凝固は液体から固体への変化です。ここでは、はじめの状態は気体です。",
      },
    },

    // ── s1-1-q008 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q008": {
      // EN: <p>Which row describes the particles in a <strong>liquid</strong>?</p>
      stem: "<p><strong>液体</strong>の粒子を正しく表しているのは、どれですか。</p>",
      options: [
        // EN: Close together, regular arrangement, vibrate about fixed positions
        "近くにあり、規則正しく並び、決まった位置で振動する",
        // EN: Close together, random arrangement, move past each other
        "近くにあり、不規則に並び、たがいにすれ違って動く",
        // EN: Far apart, random arrangement, move past each other
        "遠く離れていて、不規則に並び、たがいにすれ違って動く",
        // EN: Far apart, random arrangement, move quickly in all directions
        "遠く離れていて、不規則に並び、あらゆる向きに速く動く",
      ],
      hints: [
        // EN: Think about three things: spacing, arrangement and movement.
        "間隔、並び方、動きの 3 つを考えましょう。",
        // EN: A liquid flows, but it is almost impossible to squash into a smaller volume. What does each fact tell you?
        "液体は流れますが、押して体積を小さくすることはほとんどできません。それぞれの事実から何がわかりますか。",
      ],
      // EN: <p>A liquid cannot easily be compressed, so its particles are close together. It flows and takes the shape of its container, so its particles are randomly arranged and can move past each other.</p>
      solution: "<p>液体は簡単には圧縮できないので、粒子は近くにあります。液体は流れて容器の形になるので、粒子は不規則に並び、たがいにすれ違って動けます。</p>",
      misconception: {
        // EN (option A): That describes a solid. In a liquid the particles are not in fixed positions.
        "0": "それは固体の説明です。液体では、粒子の位置は決まっていません。",
        // EN (option C): Particles in a liquid are still close together. That is why a liquid is very hard to compress.
        "2": "液体の粒子も近くにあります。だから、液体はとても圧縮しにくいのです。",
        // EN (option D): That describes a gas.
        "3": "それは気体の説明です。",
      },
    },

    // ── s1-1-q009 · numeric · foundation · SL · Structure 1.1.3 · 1 mark
    "s1-1-q009": {
      // EN: <p>Liquid nitrogen boils at 77 K. What is this temperature in degrees Celsius? Give your answer to 3 significant figures.</p>
      stem: "<p>液体窒素は 77 K で沸騰します。この温度は何 °C ですか。有効数字 3 桁で答えましょう。</p>",
      hints: [
        // EN: Going from kelvin to degrees Celsius, the number gets smaller.
        "ケルビンからセルシウス度に直すと、数は小さくなります。",
        // EN: <span class="mono">T(°C) = T(K) − 273.15</span>. The answer will be negative.
        "<span class=\"mono\">T(°C) = T(K) − 273.15</span>。答えは負になります。",
      ],
      // EN: <div class="worked__math"><i>T</i> = 77 − 273.15 = −196.15 °C</div><p>To 3 significant figures this is <strong>−196 °C</strong>.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 77 − 273.15 = −196.15 °C</div><p>有効数字 3 桁で <strong>−196 °C</strong> です。</p>",
    },

    // ── s1-1-q010 · mcq · foundation · SL · Structure 1.1.2 · 1 mark
    "s1-1-q010": {
      // EN: <p>Sodium chloride is dissolved in water. Which formula with state symbol describes the dissolved sodium chloride?</p>
      stem: "<p>塩化ナトリウムを水に溶かしました。溶けた塩化ナトリウムを表す、状態記号付きの化学式はどれですか。</p>",
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
        "「水に溶けている」を表す状態記号が 1 つあります。英語の aqueous（水溶液の）から来ています。",
      ],
      // EN: <p>(aq) means aqueous: dissolved in water. The solution is written <span class="chem">NaCl(aq)</span>.</p>
      solution: "<p>(aq) は aqueous の略で、水に溶けているという意味です。この溶液は <span class=\"chem\">NaCl(aq)</span> と書きます。</p>",
      misconception: {
        // EN (option A): (s) means solid. Once the salt has dissolved it is no longer a solid.
        "0": "(s) は固体という意味です。塩は溶けてしまえば、もう固体ではありません。",
        // EN (option B): (l) means a pure liquid. <span class="chem">NaCl(l)</span> would be molten salt, above 800 °C. Dissolved in water is (aq).
        "1": "(l) は純粋な液体という意味です。<span class=\"chem\">NaCl(l)</span> は、800 °C より高い温度で融解した塩を表します。水に溶けているときは (aq) です。",
        // EN (option C): (g) means gas. Dissolving does not turn salt into a gas.
        "2": "(g) は気体という意味です。溶けても、塩は気体にはなりません。",
      },
    },

    // ── s1-1-q003 · multi · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q003": {
      // EN: <p>Which of these changes of state <strong>release</strong> energy to the surroundings? Select all that apply.</p>
      stem: "<p>次の状態変化のうち、外界（周囲）へエネルギーを<strong>放出する</strong>ものはどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Melting
        "融解 (melting)",
        // EN: Freezing
        "凝固 (freezing)",
        // EN: Evaporation
        "蒸発 (evaporation)",
        // EN: Condensation
        "凝縮 (condensation)",
        // EN: Sublimation
        "昇華 (sublimation)",
        // EN: Deposition
        "凝華 (deposition)",
      ],
      hints: [
        // EN: Think about the direction. Do the particles end up closer together and more strongly held, or further apart?
        "変化の向きを考えましょう。粒子は近づいて強く結びつきますか。それとも離れますか。",
      ],
      // EN: <p>Energy is released when particles come closer together and attractions form between them: gas to liquid (condensation), liquid to solid (freezing) and gas to solid (deposition). These changes are exothermic.</p>
      solution: "<p>粒子が近づき、粒子間に引力がはたらくようになるとき、エネルギーが放出されます。気体から液体（凝縮）、液体から固体（凝固）、気体から固体（凝華）です。これらは発熱 (exothermic) 変化です。</p>",
      misconception: {
        // EN (option A): Melting needs energy in. The particles must overcome some of the attractions holding them in fixed positions.
        "0": "融解にはエネルギーを加える必要があります。粒子は、決まった位置にとどめている引力の一部に打ち勝たなければなりません。",
        // EN (option C): Evaporation needs energy in. Particles must overcome the attractions to their neighbours to escape from the liquid.
        "2": "蒸発にはエネルギーを加える必要があります。粒子が液体から飛び出すには、まわりの粒子との引力に打ち勝たなければなりません。",
        // EN (option E): Sublimation (solid to gas) needs energy in to separate the particles.
        "4": "昇華（固体から気体）では、粒子を引き離すためにエネルギーを加える必要があります。",
      },
    },

    // ── s1-1-q005 · short · exam · SL · Structure 1.1.3 · 2 marks
    "s1-1-q005": {
      // EN: <p>A pure solid is heated at a steady rate. Explain why its temperature stays constant while it melts.</p>
      stem: "<p>純粋な固体を一定の割合で加熱します。融解しているあいだ、温度が一定である理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Temperature is a measure of the average kinetic energy of the particles. Where else can the energy go?
        "温度は粒子の平均運動エネルギーの尺度です。エネルギーは、ほかにどこへ行けるでしょうか。",
      ],
      // EN: <p>While the solid melts, the energy supplied is used to overcome the forces of attraction between the particles, which increases their potential energy. The average kinetic energy of the particles does not change, so the temperature stays constant.</p>
      answer: "<p>固体が融解しているあいだ、加えたエネルギーは粒子間の引力に打ち勝つために使われ、粒子の位置エネルギーが大きくなります。粒子の平均運動エネルギーは変わらないので、温度は一定のままです。</p>",
      markscheme: [
        // EN: Energy is used to overcome (or weaken) the forces of attraction between the particles. Accept: increases the potential energy of the particles.
        "エネルギーは、粒子間の引力に打ち勝つ（または弱める）ために使われる。次も可：粒子の位置エネルギーが大きくなる。",
        // EN: The average kinetic energy of the particles does not change (so the temperature is constant).
        "粒子の平均運動エネルギーは変わらない（だから温度は一定である）。",
      ],
    },

    // ── s1-1-q011 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q011": {
      // EN: <p>Propanone and water mix completely to give a clear, colourless liquid. Propanone boils at 56 °C and water boils at 100 °C. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of mixture</th><th scope="col">Best method to separate</th></tr></thead><tbody><tr><th scope="row">A</th><td>homogeneous</td><td>filtration</td></tr><tr><th scope="row">B</th><td>homogeneous</td><td>distillation</td></tr><tr><th scope="row">C</th><td>heterogeneous</td><td>filtration</td></tr><tr><th scope="row">D</th><td>heterogeneous</td><td>distillation</td></tr></tbody></table></div>
      stem: "<p>プロパノン (propanone) と水は完全に混ざり合い、無色透明の液体になります。プロパノンは 56 °C、水は 100 °C で沸騰します。正しい行はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">混合物の種類</th><th scope=\"col\">最も適した分離法</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>均一</td><td>ろ過</td></tr><tr><th scope=\"row\">B</th><td>均一</td><td>蒸留</td></tr><tr><th scope=\"row\">C</th><td>不均一</td><td>ろ過</td></tr><tr><th scope=\"row\">D</th><td>不均一</td><td>蒸留</td></tr></tbody></table></div>",
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
        "「完全に混ざり合う」「透明」という言葉から、成分を見分けられるかどうかがわかります。",
        // EN: Which property is different for the two liquids? The question gives you the data.
        "2 つの液体で違う性質は何でしょうか。問題文にデータがあります。",
      ],
      // EN: <p>The two liquids mix completely, so the composition is the same throughout: a homogeneous mixture. They have different boiling points, so they can be separated by distillation. Propanone has the lower boiling point, so it vaporizes more easily and is collected first.</p>
      solution: "<p>2 つの液体は完全に混ざり合うので、どの部分も組成が同じです。つまり均一混合物です。沸点が違うので、蒸留で分けられます。プロパノンのほうが沸点が低いので、気化しやすく、先に集まります。</p>",
      misconception: {
        // EN (option A): The mixture type is right, but filtration only removes an undissolved solid. Both liquids pass through filter paper.
        "0": "混合物の種類は合っています。でも、ろ過で取り除けるのは溶けていない固体だけです。どちらの液体もろ紙を通り抜けます。",
        // EN (option C): The liquids mix completely, so the composition is the same throughout: homogeneous. And both liquids pass through filter paper.
        "2": "2 つの液体は完全に混ざり合うので、どの部分も組成が同じです。つまり均一です。また、どちらの液体もろ紙を通り抜けます。",
        // EN (option D): The method is right, but the liquids mix completely. There are no separate layers, so the mixture is homogeneous.
        "3": "分離法は合っています。でも、2 つの液体は完全に混ざり合います。別々の層にならないので、均一混合物です。",
      },
    },

    // ── s1-1-q012 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q012": {
      // EN: <p>A student sets up paper chromatography to separate the dyes in an ink. Why must the solvent level in the beaker start <strong>below</strong> the baseline where the ink spot is placed?</p>
      stem: "<p>生徒が、インクの色素を分けるためにペーパークロマトグラフィーの準備をします。ビーカーの溶媒の液面は、インクのスポットを付けた原線 (baseline) より<strong>下</strong>から始めなければなりません。それはなぜですか。</p>",
      options: [
        // EN: So that the solvent does not evaporate before it reaches the spot
        "溶媒がスポットに届く前に蒸発しないようにするため",
        // EN: So that the dyes are carried up the paper and do not dissolve into the solvent in the beaker
        "色素がビーカーの溶媒に溶け出さず、紙の上へ運ばれるようにするため",
        // EN: So that the pencil baseline does not dissolve in the solvent
        "鉛筆で引いた原線が溶媒に溶けないようにするため",
        // EN: So that the dyes react with the paper before the solvent reaches them
        "溶媒が届く前に、色素が紙と反応するようにするため",
      ],
      hints: [
        // EN: Imagine the spot starting underneath the surface of the solvent. Where would the dyes go?
        "スポットが最初から溶媒の液面より下にあると想像しましょう。色素はどこへ行きますか。",
      ],
      // EN: <p>If the spot starts below the solvent surface, the dyes dissolve straight into the solvent in the beaker. With the solvent level below the baseline, the solvent rises up the paper, reaches the spot and carries the dyes upward, each by a different distance.</p>
      solution: "<p>スポットが溶媒の液面より下から始まると、色素はビーカーの溶媒にそのまま溶け出してしまいます。液面が原線より下にあれば、溶媒は紙を上がってスポットに届き、色素を上へ運びます。進む距離は色素ごとに違います。</p>",
      misconception: {
        // EN (option A): Evaporation is reduced by putting a lid on the beaker. It is not the reason for the solvent level.
        "0": "蒸発を減らすには、ビーカーにふたをします。液面の高さを決める理由ではありません。",
        // EN (option C): Pencil does not dissolve in the solvent at any level. That is why the baseline is drawn in pencil and not in ink.
        "2": "鉛筆の線は、液面がどこにあっても溶媒に溶けません。だから原線はインクではなく鉛筆で引きます。",
        // EN (option D): Chromatography is a physical separation. The dyes do not react with the paper.
        "3": "クロマトグラフィーは物理的な分離です。色素は紙と反応しません。",
      },
    },

    // ── s1-1-q013 · short · exam · SL · Structure 1.1.1 · 2 marks
    "s1-1-q013": {
      // EN: <p>Distinguish between an element and a compound.</p>
      stem: "<p>単体 (element) と化合物 (compound) を区別しなさい (distinguish)。</p>",
      hints: [
        // EN: “Distinguish” asks for the difference. Write one clear statement about each, so the two can be compared.
        "「区別しなさい (distinguish)」は、違いを答える問題です。2 つをくらべられるように、それぞれについてはっきりした文を 1 つずつ書きましょう。",
      ],
      // EN: <p>An element contains only one type of atom and cannot be chemically broken down into simpler substances. A compound contains atoms of two or more different elements chemically bonded together in a fixed ratio.</p>
      answer: "<p>単体は 1 種類の原子だけでできていて、化学的な方法では、それ以上簡単な物質に分解できません。化合物は、2 種類以上の異なる元素の原子が、一定の比で化学的に結合してできています。</p>",
      markscheme: [
        // EN: Element: contains only one type of atom. Accept: cannot be chemically broken down into simpler substances.
        "単体：1 種類の原子だけでできている。次も可：化学的な方法では、それ以上簡単な物質に分解できない。",
        // EN: Compound: atoms of (two or more) different elements chemically bonded/combined. Accept: can be broken down into simpler substances by chemical means.
        "化合物：（2 種類以上の）異なる元素の原子が化学的に結合している。次も可：化学的な方法で、より簡単な物質に分解できる。",
      ],
    },

    // ── s1-1-q014 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "s1-1-q014": {
      // EN: <p>In recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent. What happens if much more hot solvent than this is used?</p>
      stem: "<p>再結晶では、不純物を含む固体を<strong>最小限</strong>の体積の熱い溶媒に溶かします。これよりずっと多くの熱い溶媒を使うと、どうなりますか。</p>",
      options: [
        // EN: Fewer crystals form on cooling, because more of the product stays dissolved
        "生成物が溶けたまま多く残るので、冷やしたときにできる結晶が少なくなる",
        // EN: The insoluble impurities dissolve and can no longer be filtered off
        "溶けない不純物が溶けてしまい、ろ過で取り除けなくなる",
        // EN: The crystals form faster on cooling, so they are less pure
        "冷やしたときに結晶が速くできるので、純度が下がる",
        // EN: The product reacts with the extra solvent
        "生成物が余分な溶媒と反応する",
      ],
      hints: [
        // EN: Even cold solvent dissolves a little of the product.
        "冷たい溶媒にも、生成物は少し溶けます。",
        // EN: More solvent can hold more dissolved product after cooling. What does that do to the mass of crystals?
        "溶媒が多いほど、冷やしたあとも溶けたままでいられる生成物が多くなります。すると、結晶の質量はどうなりますか。",
      ],
      // EN: <p>Some product always stays dissolved in the cold solvent. The larger the volume of solvent, the more product stays in solution, so fewer crystals form and the yield is lower. Using the minimum volume of hot solvent gives a solution that is close to saturated, so most of the product crystallizes on cooling.</p>
      solution: "<p>生成物の一部は、冷たい溶媒にも必ず溶けたまま残ります。溶媒の体積が大きいほど、溶液に残る生成物が多くなるので、できる結晶が減り、収量が下がります。最小限の体積の熱い溶媒を使うと、飽和に近い溶液になるので、冷やしたときに生成物のほとんどが結晶になります。</p>",
      misconception: {
        // EN (option B): Insoluble impurities do not dissolve in the solvent, however much is used. They are removed by filtering the hot solution.
        "1": "溶けない不純物は、溶媒をどれだけ使っても溶けません。熱い溶液をろ過して取り除きます。",
        // EN (option C): A more dilute solution does not crystallize faster. It may not crystallize at all.
        "2": "うすい溶液のほうが速く結晶になる、ということはありません。まったく結晶にならないこともあります。",
        // EN (option D): Recrystallization is a physical process. The solvent is chosen so that it does not react with the product.
        "3": "再結晶は物理的な操作です。溶媒には、生成物と反応しないものを選びます。",
      },
    },

    // ── s1-1-q015 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q015": {
      // EN: <p>A pure substance X is heated steadily from 20 °C. Its temperature rises to 80 °C and stays there for four minutes. It then rises to 218 °C and stays there for several minutes before rising again. What is present at 150 °C?</p>
      stem: "<p>純物質 X を 20 °C から一定の割合で加熱します。温度は 80 °C まで上がり、そこで 4 分間変わりません。次に 218 °C まで上がり、そこで数分間変わらず、そのあとまた上がります。150 °C では何が存在しますか。</p>",
      options: [
        // EN: Solid only
        "固体だけ",
        // EN: Solid and liquid together
        "固体と液体の両方",
        // EN: Liquid only
        "液体だけ",
        // EN: Gas only
        "気体だけ",
      ],
      hints: [
        // EN: A flat part of a heating curve is a change of state. There are two of them here.
        "加熱曲線の平らな部分は状態変化です。ここでは 2 つあります。",
        // EN: The melting point is 80 °C and the boiling point is 218 °C. Where does 150 °C sit?
        "融点は 80 °C、沸点は 218 °C です。150 °C はどこにありますか。",
      ],
      // EN: <p>The temperature stays constant at 80 °C (melting) and at 218 °C (boiling). 150 °C is above the melting point and below the boiling point, on a sloping part of the curve, so X is a liquid only.</p>
      solution: "<p>温度は 80 °C（融解）と 218 °C（沸騰）で一定になります。150 °C は融点より高く、沸点より低く、曲線の傾いた部分にあります。だから X は液体だけです。</p>",
      misconception: {
        // EN (option A): X is a solid only below its melting point. The first flat part, at 80 °C, is the melting point.
        "0": "X が固体だけなのは、融点より低いときです。80 °C にある 1 つ目の平らな部分が融点です。",
        // EN (option B): Two states are present together only on a flat part of the curve. At 150 °C the temperature is rising.
        "1": "2 つの状態が同時に存在するのは、曲線の平らな部分だけです。150 °C では温度が上がっています。",
        // EN (option D): X is a gas only above its boiling point. The second flat part, at 218 °C, is the boiling point.
        "3": "X が気体だけなのは、沸点より高いときです。218 °C にある 2 つ目の平らな部分が沸点です。",
      },
    },

    // ── s1-1-q016 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q016": {
      // EN: <p>In an experiment, a solution warms from 18.5 °C to 46.0 °C. What is the temperature <strong>change</strong> in kelvin?</p>
      stem: "<p>ある実験で、溶液が 18.5 °C から 46.0 °C まで温まります。温度の<strong>変化</strong>は何ケルビンですか。</p>",
      hints: [
        // EN: This is a change, not a single temperature reading.
        "これは変化であって、1 つの温度の値ではありません。",
        // EN: One kelvin is the same size as one degree Celsius. Change = final − initial.
        "1 ケルビンの幅は、セルシウス度の 1 度の幅と同じです。変化 = あと − はじめ。",
      ],
      // EN: <div class="worked__math">Δ<i>T</i> = 46.0 °C − 18.5 °C = 27.5 °C = <b>27.5 K</b></div><p>Check the long way: (46.0 + 273.15) − (18.5 + 273.15) = 319.15 K − 291.65 K = 27.5 K. The 273.15 cancels. Adding 273.15 to the change (to get 300.65) is a common error.</p>
      solution: "<div class=\"worked__math\">Δ<i>T</i> = 46.0 °C − 18.5 °C = 27.5 °C = <b>27.5 K</b></div><p>遠回りの方法で確かめます：(46.0 + 273.15) − (18.5 + 273.15) = 319.15 K − 291.65 K = 27.5 K。273.15 は消えます。変化に 273.15 を足して 300.65 とするのは、よくある間違いです。</p>",
    },

    // ── s1-1-q017 · mcq · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q017": {
      // EN: <p>Beaker 1 contains 50 g of water at 60 °C. Beaker 2 contains 200 g of water at 60 °C. Which statement about the average kinetic energy of the water molecules is correct?</p>
      stem: "<p>ビーカー 1 には 60 °C の水が 50 g 入っています。ビーカー 2 には 60 °C の水が 200 g 入っています。水分子の平均運動エネルギーについて、正しいものはどれですか。</p>",
      options: [
        // EN: It is greater in beaker 1, because there are fewer molecules to share the energy
        "ビーカー 1 のほうが大きい。エネルギーを分け合う分子が少ないから",
        // EN: It is greater in beaker 2, because there are more molecules
        "ビーカー 2 のほうが大きい。分子が多いから",
        // EN: It is the same in both beakers
        "どちらのビーカーでも同じ",
        // EN: It cannot be compared without knowing the volumes
        "体積がわからないと、くらべられない",
      ],
      hints: [
        // EN: What does temperature measure? Compare the two temperatures.
        "温度は何の尺度でしょうか。2 つの温度をくらべましょう。",
      ],
      // EN: <p>Temperature is a measure of the average kinetic energy of the particles. Both beakers are at 60 °C (333.15 K), so the average kinetic energy of the molecules is the same in both. Beaker 2 has more molecules, so its total energy is greater, but the average is not.</p>
      solution: "<p>温度は粒子の平均運動エネルギーの尺度です。どちらのビーカーも 60 °C（333.15 K）なので、分子の平均運動エネルギーはどちらも同じです。ビーカー 2 は分子が多いので、エネルギーの合計は大きくなります。でも、平均は変わりません。</p>",
      misconception: {
        // EN (option A): Temperature already measures the average per particle. The number of particles sharing the energy does not matter.
        "0": "温度は、もともと粒子 1 個あたりの平均を表しています。エネルギーを分け合う粒子の数は関係ありません。",
        // EN (option B): Beaker 2 has more energy in total, but the question asks about the average per molecule. That depends only on temperature.
        "1": "ビーカー 2 はエネルギーの合計は大きいですが、問われているのは分子 1 個あたりの平均です。平均は温度だけで決まります。",
        // EN (option D): Volume is not needed. The temperature tells you the average kinetic energy.
        "3": "体積は必要ありません。温度から平均運動エネルギーがわかります。",
      },
    },

    // ── s1-1-q018 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q018": {
      // EN: <p>Solid calcium carbonate reacts with dilute hydrochloric acid. The products are calcium chloride solution, water and carbon dioxide gas. Which equation has the correct state symbols?</p>
      stem: "<p>固体の炭酸カルシウムが希塩酸と反応します。生成物は、塩化カルシウム水溶液、水、気体の二酸化炭素です。状態記号が正しい反応式はどれですか。</p>",
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
        "「固体」「希…酸」「水溶液」「気体」という言葉を、それぞれ状態記号に置き換えましょう。",
        // EN: Water is written <span class="chem">H2O(l)</span>.
        "水は <span class=\"chem\">H2O(l)</span> と書きます。",
      ],
      // EN: <p>Solid calcium carbonate is (s). Dilute hydrochloric acid and calcium chloride solution are dissolved in water, so both are (aq). Water is a pure liquid, (l). Carbon dioxide is a gas, (g).</p><p><span class="chem">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span></p>
      solution: "<p>固体の炭酸カルシウムは (s) です。希塩酸と塩化カルシウム水溶液は水に溶けているので、どちらも (aq) です。水は純粋な液体なので (l) です。二酸化炭素は気体なので (g) です。</p><p><span class=\"chem\">CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g)</span></p>",
      misconception: {
        // EN (option A): Dilute hydrochloric acid is hydrogen chloride dissolved in water, so it is (aq). (l) would mean pure liquid hydrogen chloride.
        "0": "希塩酸は、塩化水素が水に溶けたものなので (aq) です。(l) と書くと、純粋な液体の塩化水素という意味になります。",
        // EN (option B): Water is the solvent. It is a pure liquid, (l). It cannot be “dissolved in water”.
        "1": "水は溶媒です。純粋な液体なので (l) です。水が「水に溶けている」ことはありえません。",
        // EN (option D): The question says the calcium carbonate is solid, (s), and the calcium chloride is a solution, (aq).
        "3": "問題文によると、炭酸カルシウムは固体 (s) で、塩化カルシウムは水溶液 (aq) です。",
      },
    },

    // ── s1-1-q019 · short · exam · SL · Structure 1.1.2 · 2 marks
    "s1-1-q019": {
      // EN: <p>The air in a sealed syringe can easily be squeezed into a smaller volume. Water in the same syringe cannot. Explain this difference using the kinetic molecular theory.</p>
      stem: "<p>密閉した注射器の中の空気は、押すと簡単に体積が小さくなります。同じ注射器に入れた水は、そうなりません。この違いを、分子運動論 (kinetic molecular theory) を使って説明しなさい (explain)。</p>",
      hints: [
        // EN: Compare the spacing of the particles in a gas and in a liquid.
        "気体と液体で、粒子の間隔をくらべましょう。",
      ],
      // EN: <p>In a gas the particles are far apart, with a lot of empty space between them, so they can be pushed closer together. In a liquid the particles are already close together (touching), so there is very little space to push them into.</p>
      answer: "<p>気体では、粒子は遠く離れていて、粒子のあいだに何もない空間がたくさんあります。だから、粒子を押して近づけることができます。液体では、粒子はすでに近くにある（ふれ合っている）ので、粒子を押しこむ空間がほとんどありません。</p>",
      markscheme: [
        // EN: Gas: particles are far apart / there is a lot of empty space between particles (so they can be pushed closer together).
        "気体：粒子は遠く離れている / 粒子のあいだに何もない空間がたくさんある（だから、押して近づけることができる）。",
        // EN: Liquid: particles are (already) close together / touching / there is very little space between particles.
        "液体：粒子は（すでに）近くにある / ふれ合っている / 粒子のあいだに空間がほとんどない。",
      ],
    },

    // ── s1-1-q020 · numeric · exam · SL · Structure 1.1.3 · 1 mark
    "s1-1-q020": {
      // EN: <p>Mercury melts at −38.83 °C. What is this temperature in kelvin? Give your answer to 2 decimal places.</p>
      stem: "<p>水銀は −38.83 °C で融解します。この温度は何ケルビンですか。小数第 2 位まで答えましょう。</p>",
      hints: [
        // EN: Keep the minus sign when you substitute.
        "代入するとき、マイナスの符号を落とさないようにしましょう。",
        // EN: <span class="mono">T(K) = (−38.83) + 273.15</span>
        "<span class=\"mono\">T(K) = (−38.83) + 273.15</span>",
      ],
      // EN: <div class="worked__math"><i>T</i> = (−38.83) + 273.15 = <b>234.32 K</b></div><p>Both values have two decimal places, so the answer keeps two. A common slip is to lose the minus sign, which gives 311.98 K.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = (−38.83) + 273.15 = <b>234.32 K</b></div><p>どちらの値も小数第 2 位まであるので、答えも小数第 2 位まで書きます。よくあるミスはマイナスの符号を落とすことで、そうすると 311.98 K になってしまいます。</p>",
    },

    // ── s1-1-q021 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q021": {
      // EN: <p>When solid iodine is warmed gently, it turns directly into a purple gas: <span class="chem">I2(s) -> I2(g)</span>. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Name of the change</th><th scope="col">Energy</th></tr></thead><tbody><tr><th scope="row">A</th><td>sublimation</td><td>absorbed from the surroundings</td></tr><tr><th scope="row">B</th><td>sublimation</td><td>released to the surroundings</td></tr><tr><th scope="row">C</th><td>deposition</td><td>absorbed from the surroundings</td></tr><tr><th scope="row">D</th><td>evaporation</td><td>absorbed from the surroundings</td></tr></tbody></table></div>
      stem: "<p>固体のヨウ素をおだやかに温めると、直接、紫色の気体になります：<span class=\"chem\">I2(s) -> I2(g)</span>。正しい行はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">変化の名前</th><th scope=\"col\">エネルギー</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>昇華</td><td>外界（周囲）から吸収する</td></tr><tr><th scope=\"row\">B</th><td>昇華</td><td>外界（周囲）へ放出する</td></tr><tr><th scope=\"row\">C</th><td>凝華</td><td>外界（周囲）から吸収する</td></tr><tr><th scope=\"row\">D</th><td>蒸発</td><td>外界（周囲）から吸収する</td></tr></tbody></table></div>",
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
        "状態記号を読みましょう：(s) → (g)。",
        // EN: Do the particles end up further apart or closer together?
        "粒子は離れますか。それとも近づきますか。",
      ],
      // EN: <p>Solid → gas is sublimation. The particles must overcome the attractions between them to separate, which needs energy, so energy is absorbed from the surroundings (endothermic).</p>
      solution: "<p>固体 → 気体 は昇華 (sublimation) です。粒子が離れるには、粒子間の引力に打ち勝たなければならず、エネルギーが必要です。だから、外界（周囲）からエネルギーを吸収します（吸熱、endothermic）。</p>",
      misconception: {
        // EN (option B): The name is right, but separating the particles of a solid needs energy in. Sublimation is endothermic.
        "1": "名前は合っています。でも、固体の粒子を引き離すには、エネルギーを加える必要があります。昇華は吸熱です。",
        // EN (option C): Deposition is the reverse change, gas to solid.
        "2": "凝華は逆向きの変化で、気体から固体です。",
        // EN (option D): Evaporation starts from a liquid. The state symbols show the iodine starts as a solid.
        "3": "蒸発は液体から始まる変化です。状態記号を見ると、ヨウ素は固体から始まっています。",
      },
    },

    // ── s1-1-q029 · short · exam · SL · Structure 1.1.1 · 4 marks
    "s1-1-q029": {
      // EN: <p>A dry mixture contains iron filings, sand and salt (sodium chloride). Iron is attracted to a magnet. Sand and salt are not. Outline how to obtain a dry sample of each of the three solids.</p>
      stem: "<p>鉄粉、砂、塩（塩化ナトリウム）の乾いた混合物があります。鉄は磁石に引きつけられます。砂と塩は引きつけられません。3 つの固体それぞれの乾いた試料を得る方法について、概要を述べなさい (outline)。</p>",
      hints: [
        // EN: Find a physical property that is different for each solid. The question gives you one of them.
        "固体ごとに違う物理的性質を見つけましょう。そのうち 1 つは問題文にあります。",
        // EN: After filtering, neither product is finished. One is wet and one is still dissolved.
        "ろ過のあと、どちらもまだ仕上がっていません。一方はぬれていて、もう一方はまだ溶けています。",
      ],
      // EN: <p>Use a magnet to remove the iron filings. Add water to the sand and salt and stir, so that the salt dissolves. Filter: the sand stays on the filter paper as the residue. Rinse the sand with a little water and leave it to dry. Heat the filtrate to evaporate the water, leave it to crystallize, and dry the salt crystals.</p>
      answer: "<p>磁石を使って鉄粉を取り除きます。砂と塩に水を加えてかき混ぜ、塩を溶かします。ろ過すると、砂は残留物としてろ紙に残ります。砂を少量の水ですすぎ、置いて乾かします。ろ液を加熱して水を蒸発させ、置いておいて結晶化させ、塩の結晶を乾かします。</p>",
      markscheme: [
        // EN: Use a magnet to remove the iron (filings).
        "磁石を使って鉄（粉）を取り除く。",
        // EN: Add water and stir / dissolve the salt.
        "水を加えてかき混ぜる / 塩を溶かす。",
        // EN: Filter (to remove the sand): sand is the residue / salt solution is the filtrate.
        "ろ過する（砂を取り除く）：砂が残留物 / 食塩水がろ液。",
        // EN: Rinse and dry the sand / the residue.
        "砂 / 残留物をすすいで乾かす。",
        // EN: Evaporate the water from the filtrate / heat the filtrate and leave it to crystallize (to obtain the salt).
        "ろ液から水を蒸発させる / ろ液を加熱し、置いておいて結晶化させる（塩を得る）。",
      ],
    },

    // ── s1-1-q030 · mcq · exam · SL · Structure 1.1.2 · 1 mark
    "s1-1-q030": {
      // EN: <p>Evaporation and boiling are both types of vaporization. Which statement is correct?</p>
      stem: "<p>蒸発 (evaporation) と沸騰 (boiling) は、どちらも気化 (vaporization) の一種です。正しいものはどれですか。</p>",
      options: [
        // EN: Evaporation happens only at the boiling point
        "蒸発は沸点でだけ起こる",
        // EN: Boiling happens only at the surface of the liquid
        "沸騰は液体の表面でだけ起こる",
        // EN: Evaporation happens at the surface of the liquid, at temperatures below the boiling point
        "蒸発は、沸点より低い温度で、液体の表面で起こる",
        // EN: Evaporation releases energy to the surroundings and boiling absorbs energy
        "蒸発は外界（周囲）へエネルギーを放出し、沸騰はエネルギーを吸収する",
      ],
      hints: [
        // EN: Think of a puddle drying up and a kettle boiling. Where does the vapour form in each one?
        "水たまりが乾くときと、やかんの湯が沸くときを考えましょう。それぞれ、蒸気はどこでできますか。",
        // EN: Both changes are liquid → gas.
        "どちらの変化も 液体 → 気体 です。",
      ],
      // EN: <p>Evaporation takes place at the surface of a liquid, at temperatures below the boiling point. Boiling takes place at the boiling point, with bubbles of vapour forming throughout the liquid. Both are vaporization (liquid → gas), and both absorb energy.</p>
      solution: "<p>蒸発は、沸点より低い温度で、液体の表面で起こります。沸騰は沸点で起こり、液体全体に蒸気の泡ができます。どちらも気化（液体 → 気体）で、どちらもエネルギーを吸収します。</p>",
      misconception: {
        // EN (option A): That describes boiling. A puddle evaporates on a cool day, far below 100 °C.
        "0": "それは沸騰の説明です。水たまりは、100 °C よりずっと低い、すずしい日にも蒸発します。",
        // EN (option B): That describes evaporation. In boiling, bubbles of vapour form all through the liquid.
        "1": "それは蒸発の説明です。沸騰では、液体全体に蒸気の泡ができます。",
        // EN (option D): Both are liquid → gas, so both absorb energy. The particles must overcome the attractions to their neighbours.
        "3": "どちらも 液体 → 気体 なので、どちらもエネルギーを吸収します。粒子は、まわりの粒子との引力に打ち勝たなければなりません。",
      },
    },

    // ── s1-1-q027 · mcq · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q027": {
      // EN: <p>Three samples of nitrogen gas are at different temperatures: X is at 150 K, Y is at −150 °C and Z is at 150 °C. Which list puts the samples in order of the average kinetic energy of their molecules, <strong>lowest first</strong>?</p>
      stem: "<p>温度の違う窒素（気体）の試料が 3 つあります。X は 150 K、Y は −150 °C、Z は 150 °C です。分子の平均運動エネルギーが<strong>小さい順</strong>に並べたものはどれですか。</p>",
      options: [
        // EN: X, Y, Z
        "X、Y、Z",
        // EN: Y, X, Z
        "Y、X、Z",
        // EN: Y, Z, X
        "Y、Z、X",
        // EN: They are all the same
        "どれも同じ",
      ],
      hints: [
        // EN: Temperature is a measure of average kinetic energy, so the coldest sample has the lowest average kinetic energy.
        "温度は平均運動エネルギーの尺度です。だから、いちばん冷たい試料の平均運動エネルギーがいちばん小さくなります。",
        // EN: Put all three temperatures on the same scale before you compare them.
        "くらべる前に、3 つの温度を同じ目盛りにそろえましょう。",
      ],
      // EN: <div class="worked__math">X: 150 K</div><div class="worked__math">Y: (−150) + 273.15 = 123.15 K</div><div class="worked__math">Z: 150 + 273.15 = 423.15 K</div><p>Temperature is a measure of the average kinetic energy of the particles. The order of temperature, lowest first, is Y, X, Z, so that is also the order of average kinetic energy.</p>
      solution: "<div class=\"worked__math\">X: 150 K</div><div class=\"worked__math\">Y: (−150) + 273.15 = 123.15 K</div><div class=\"worked__math\">Z: 150 + 273.15 = 423.15 K</div><p>温度は粒子の平均運動エネルギーの尺度です。温度が低い順に並べると Y、X、Z なので、平均運動エネルギーの順も同じです。</p>",
      misconception: {
        // EN (option A): You may have treated −150 °C as larger than 150 K. Convert first: −150 °C = 123.15 K, which is colder than 150 K.
        "0": "−150 °C を 150 K より大きいと考えたのかもしれません。まず換算しましょう。−150 °C = 123.15 K で、150 K より冷たいです。",
        // EN (option C): X is at 150 K, which is −123.15 °C. That is much colder than Z at 150 °C, so X cannot have the highest average kinetic energy.
        "2": "X は 150 K、つまり −123.15 °C です。150 °C の Z よりずっと冷たいので、X の平均運動エネルギーがいちばん大きいはずはありません。",
        // EN (option D): The number 150 appears three times, but the units and signs differ. These are three different temperatures.
        "3": "150 という数が 3 回出てきますが、単位と符号が違います。3 つは別々の温度です。",
      },
    },

    // ── s1-1-q028 · numeric · challenge · SL · Structure 1.1.3 · 2 marks
    "s1-1-q028": {
      // EN: <p>A liquid starts at −12.48 °C. It is warmed until its temperature has risen by 85.00 K. What is its final temperature in kelvin? Give your answer to 2 decimal places.</p>
      stem: "<p>ある液体は、はじめ −12.48 °C です。温度が 85.00 K 上がるまで温めます。最後の温度は何ケルビンですか。小数第 2 位まで答えましょう。</p>",
      hints: [
        // EN: There are two different things here: a single temperature reading and a temperature change. Which one needs 273.15?
        "ここには別々のものが 2 つあります。1 つの温度の値と、温度の変化です。273.15 が必要なのはどちらでしょうか。",
        // EN: Convert −12.48 °C to kelvin. Then add the rise. A rise of 85.00 K is the same as a rise of 85.00 °C.
        "−12.48 °C をケルビンに換算します。それから上昇分を足します。85.00 K の上昇は、85.00 °C の上昇と同じです。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>start</sub> = (−12.48) + 273.15 = 260.67 K</div><div class="worked__math"><i>T</i><sub>final</sub> = 260.67 K + 85.00 K = <b>345.67 K</b></div><p>Only the starting reading is converted. Adding 273.15 to the rise as well gives 618.82 K, which is wrong. Forgetting to convert at all gives 72.52, which is the final temperature in °C, not in K.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>start</sub> = (−12.48) + 273.15 = 260.67 K</div><div class=\"worked__math\"><i>T</i><sub>final</sub> = 260.67 K + 85.00 K = <b>345.67 K</b></div><p>換算するのは、はじめの温度の値だけです。上昇分にも 273.15 を足すと 618.82 K になりますが、これは間違いです。換算をまったく忘れると 72.52 になります。これは最後の温度を °C で表した値で、K の値ではありません。</p>",
    },

    // ── s1-1-q024 · mcq · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q024": {
      // EN: <p>The table gives the melting and boiling points of four substances. Which substance is a <strong>liquid</strong> at −50 °C?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col" class="num">Melting point / K</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">63</td><td class="num">77</td></tr><tr><th scope="row">B</th><td class="num">159</td><td class="num">352</td></tr><tr><th scope="row">C</th><td class="num">234</td><td class="num">630</td></tr><tr><th scope="row">D</th><td class="num">273</td><td class="num">373</td></tr></tbody></table></div>
      stem: "<p>表は、4 つの物質の融点と沸点を示しています。−50 °C で<strong>液体</strong>である物質はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\" class=\"num\">融点 / K</th><th scope=\"col\" class=\"num\">沸点 / K</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">63</td><td class=\"num\">77</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">159</td><td class=\"num\">352</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">234</td><td class=\"num\">630</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">273</td><td class=\"num\">373</td></tr></tbody></table></div>",
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
        "まず、すべてを同じ単位にそろえましょう。",
        // EN: −50 °C = 223.15 K. A liquid is above its melting point and below its boiling point.
        "−50 °C = 223.15 K。液体は、融点より高く、沸点より低い温度にあります。",
      ],
      // EN: <div class="worked__math"><i>T</i> = (−50) + 273.15 = 223.15 K</div><p>A substance is a liquid when the temperature is between its melting point and its boiling point. Only B fits: 159 K &lt; 223.15 K &lt; 352 K. A is a gas. C and D are solids.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = (−50) + 273.15 = 223.15 K</div><p>温度が融点と沸点のあいだにあるとき、物質は液体です。当てはまるのは B だけです：159 K &lt; 223.15 K &lt; 352 K。A は気体です。C と D は固体です。</p>",
      misconception: {
        // EN (option A): −50 °C is 223.15 K. That is above the boiling point of A (77 K), so A is a gas.
        "0": "−50 °C は 223.15 K です。A の沸点（77 K）より高いので、A は気体です。",
        // EN (option C): −50 °C is 223.15 K. That is below the melting point of C (234 K), so C is still a solid.
        "2": "−50 °C は 223.15 K です。C の融点（234 K）より低いので、C はまだ固体です。",
        // EN (option D): −50 °C is 223.15 K. That is below the melting point of D (273 K), so D is a solid.
        "3": "−50 °C は 223.15 K です。D の融点（273 K）より低いので、D は固体です。",
      },
    },

    // ── s1-1-q025 · short · challenge · SL · Structure 1.1.3 · 3 marks
    "s1-1-q025": {
      // EN: <p>Steam at 100 °C causes a more serious burn than the same mass of liquid water at 100 °C. Explain this, using ideas about particles and changes of state.</p>
      stem: "<p>100 °C の水蒸気は、同じ質量の 100 °C の液体の水よりも、ひどいやけどを起こします。粒子と状態変化の考え方を使って、その理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: What is the same for the steam and the water? What is different?
        "水蒸気と水で、同じものは何でしょうか。違うものは何でしょうか。",
        // EN: What happens to steam when it touches something cooler than 100 °C? Is energy absorbed or released?
        "水蒸気が 100 °C より冷たいものにふれると、どうなりますか。エネルギーは吸収されますか、放出されますか。",
      ],
      // EN: <p>The steam and the water are at the same temperature, so their particles have the same average kinetic energy. But when steam touches cooler skin it condenses. Condensation releases energy, because forces of attraction form between the particles as they come close together. The liquid water formed then cools from 100 °C, releasing the same energy as the hot water would. So steam transfers more energy to the skin in total.</p>
      answer: "<p>水蒸気と水は同じ温度なので、粒子の平均運動エネルギーは同じです。でも、水蒸気は、より冷たい皮ふにふれると凝縮します。凝縮ではエネルギーが放出されます。粒子が近づくときに、粒子間に引力がはたらくようになるからです。そのあと、できた液体の水が 100 °C から冷えていき、熱い水と同じだけのエネルギーを放出します。だから、水蒸気のほうが、合計で多くのエネルギーを皮ふに渡します。</p>",
      markscheme: [
        // EN: Same temperature, so the particles have the same average kinetic energy. Accept: the difference is not due to temperature.
        "同じ温度なので、粒子の平均運動エネルギーは同じである。次も可：違いは温度によるものではない。",
        // EN: Steam condenses on the skin, and condensation releases energy / is exothermic.
        "水蒸気は皮ふの上で凝縮し、凝縮はエネルギーを放出する / 発熱である。",
        // EN: Energy is released because forces of attraction form between the particles (as they come closer together). Accept: steam also then cools as liquid water, so more energy is transferred in total.
        "（粒子が近づくときに）粒子間に引力がはたらくようになるので、エネルギーが放出される。次も可：水蒸気はそのあと液体の水としても冷えるので、合計で多くのエネルギーが渡される。",
      ],
    },

    // ── s1-1-q026 · multi · challenge · SL · Structure 1.1.3 · 1 mark
    "s1-1-q026": {
      // EN: <p>A pure liquid is cooled steadily in a freezer. For several minutes it is freezing: liquid and solid are both present. Which statements are correct <strong>during this time</strong>? Select all that apply.</p>
      stem: "<p>純粋な液体を冷凍庫で一定の割合で冷やします。数分のあいだ凝固が続き、液体と固体の両方が存在します。<strong>このあいだ</strong>について、正しいものはどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: The temperature of the substance stays constant.
        "物質の温度は一定のままである。",
        // EN: The average kinetic energy of the particles is decreasing.
        "粒子の平均運動エネルギーは小さくなっている。",
        // EN: Energy is being released to the surroundings.
        "エネルギーが外界（周囲）へ放出されている。",
        // EN: The particles stop moving as they join the solid.
        "粒子は、固体に加わると動きを止める。",
        // EN: Forces of attraction hold more and more particles in fixed positions.
        "引力によって、決まった位置にとどまる粒子がどんどん増えていく。",
      ],
      hints: [
        // EN: Freezing is a change of state. What does a cooling curve look like during a change of state?
        "凝固は状態変化です。状態変化のあいだ、冷却曲線はどんな形になりますか。",
        // EN: Energy keeps leaving the substance, but the temperature is not falling. Which kind of energy is changing?
        "エネルギーは物質から出ていき続けますが、温度は下がりません。変化しているのは、どの種類のエネルギーでしょうか。",
      ],
      // EN: <p>During freezing the temperature stays constant, so the average kinetic energy of the particles does not change. Energy is still released to the colder surroundings: it comes from the decrease in potential energy as attractions hold the particles in fixed positions. The particles in the solid continue to vibrate.</p>
      solution: "<p>凝固のあいだ、温度は一定なので、粒子の平均運動エネルギーは変わりません。それでも、エネルギーは、より冷たい外界（周囲）へ放出されています。このエネルギーは、引力が粒子を決まった位置にとどめるときに、位置エネルギーが小さくなることで生じます。固体の中の粒子は、振動を続けています。</p>",
      misconception: {
        // EN (option B): The temperature is constant during freezing, so the average kinetic energy is constant too. The energy that leaves comes from the potential energy of the particles.
        "1": "凝固のあいだ温度は一定なので、平均運動エネルギーも一定です。出ていくエネルギーは、粒子の位置エネルギーから来ています。",
        // EN (option D): Particles in a solid still vibrate about their fixed positions. They do not stop moving.
        "3": "固体の粒子も、決まった位置で振動しています。動きを止めるわけではありません。",
      },
    },

  }
});
