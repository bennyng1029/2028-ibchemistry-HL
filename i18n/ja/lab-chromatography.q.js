/* lab-chromatography.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-chromatography.q', {
  questions: {

    // ── lab-chromatography-q001 · numeric · foundation · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q001": {
      // EN: <p>On a chromatogram, the centre of a spot is 3.4 <span class="unit">cm</span> above the baseline. The solvent front is 7.9 <span class="unit">cm</span> above the baseline. Calculate the <i>R</i><sub>F</sub> value of the spot.</p>
      stem: "<p>あるクロマトグラムで、スポットの中心は原線から 3.4 <span class=\"unit\">cm</span> 上にあります。溶媒先端は原線から 7.9 <span class=\"unit\">cm</span> 上にあります。このスポットの <i>R</i><sub>F</sub> 値を計算しなさい (calculate)。</p>",
      hints: [
        // EN: <i>R</i><sub>F</sub> = distance moved by the spot ÷ distance moved by the solvent front.
        "<i>R</i><sub>F</sub> = スポットが進んだ距離 ÷ 溶媒先端が進んだ距離。",
        // EN: Both distances are already measured from the baseline. Divide 3.4 by 7.9.
        "どちらの距離も、すでに原線から測ってあります。3.4 を 7.9 で割りましょう。",
      ],
      // EN: <div class="worked__math"><i>R</i><sub>F</sub> = 3.4 <span class="unit">cm</span> / 7.9 <span class="unit">cm</span> = 0.430…</div><div class="worked__math"><i>R</i><sub>F</sub> = <strong>0.43</strong> (no unit)</div>
      solution: "<div class=\"worked__math\"><i>R</i><sub>F</sub> = 3.4 <span class=\"unit\">cm</span> / 7.9 <span class=\"unit\">cm</span> = 0.430…</div><div class=\"worked__math\"><i>R</i><sub>F</sub> = <strong>0.43</strong>（単位なし）</div>",
    },

    // ── lab-chromatography-q002 · numeric · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q002": {
      // EN: <p>A student placed a ruler with its zero at the bottom edge of a TLC plate and recorded these readings.</p><div class="table-scroll"><table class="data"><caption>Ruler readings</caption><thead><tr><th scope="col">Feature</th><th scope="col" class="num">Reading / cm</th></tr></thead><tbody><tr><th scope="row">baseline</th><td class="num">1.0</td></tr><tr><th scope="row">centre of spot X</th><td class="num">4.8</td></tr><tr><th scope="row">solvent front</th><td class="num">8.6</td></tr><tr><th scope="row">top edge of plate</th><td class="num">10.0</td></tr></tbody></table></div><p>Calculate the <i>R</i><sub>F</sub> value of spot X.</p>
      stem: "<p>ある生徒が、TLC プレートの下端に定規のゼロを合わせて、次の読みを記録しました。</p><div class=\"table-scroll\"><table class=\"data\"><caption>定規の読み</caption><thead><tr><th scope=\"col\">測る位置</th><th scope=\"col\" class=\"num\">読み / cm</th></tr></thead><tbody><tr><th scope=\"row\">原線</th><td class=\"num\">1.0</td></tr><tr><th scope=\"row\">スポット X の中心</th><td class=\"num\">4.8</td></tr><tr><th scope=\"row\">溶媒先端</th><td class=\"num\">8.6</td></tr><tr><th scope=\"row\">プレートの上端</th><td class=\"num\">10.0</td></tr></tbody></table></div><p>スポット X の <i>R</i><sub>F</sub> 値を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Distances are measured from the baseline, not from the bottom edge.
        "距離は、下端からではなく、原線から測ります。",
        // EN: The top edge of the plate is not needed.
        "プレートの上端の読みは必要ありません。",
      ],
      // EN: <div class="worked__math">spot: 4.8 − 1.0 = 3.8 <span class="unit">cm</span></div><div class="worked__math">front: 8.6 − 1.0 = 7.6 <span class="unit">cm</span></div><div class="worked__math"><i>R</i><sub>F</sub> = 3.8 / 7.6 = <strong>0.50</strong></div><p>M1 for both distances from the baseline, M2 for the answer. Using the readings directly gives 4.8 / 8.6 = 0.56, and dividing by the plate length gives 0.42: both are wrong.</p>
      solution: "<div class=\"worked__math\">スポット：4.8 − 1.0 = 3.8 <span class=\"unit\">cm</span></div><div class=\"worked__math\">先端：8.6 − 1.0 = 7.6 <span class=\"unit\">cm</span></div><div class=\"worked__math\"><i>R</i><sub>F</sub> = 3.8 / 7.6 = <strong>0.50</strong></div><p>M1 は原線から測った 2 つの距離、M2 は答えです。読みをそのまま使うと 4.8 / 8.6 = 0.56、プレートの長さで割ると 0.42 になります。どちらも間違いです。</p>",
    },

    // ── lab-chromatography-q003 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-chromatography-q003": {
      // EN: <p>Why is the baseline of a chromatogram drawn in pencil rather than ink?</p>
      stem: "<p>クロマトグラムの原線を、インクではなく鉛筆で引くのはなぜですか。</p>",
      options: [
        // EN: Pencil lines are easier to see when the paper is wet.
        "紙がぬれたとき、鉛筆の線のほうが見やすいから。",
        // EN: Graphite does not dissolve in the solvent, but ink would dissolve and move up the paper.
        "黒鉛は溶媒に溶けないが、インクは溶けて紙を上がっていくから。",
        // EN: Pencil can be rubbed out after the experiment.
        "実験のあとで鉛筆の線は消せるから。",
        // EN: Ink would react with the substances being separated.
        "インクは、分けようとしている物質と反応するから。",
      ],
      hints: [
        // EN: Ink is itself a mixture of dyes.
        "インクそのものが、色素の混合物です。",
      ],
      // EN: <p>Ink is a mixture of soluble dyes. It would dissolve in the mobile phase and give extra spots or smears. Graphite is insoluble, so the baseline stays put.</p>
      solution: "<p>インクは、溶ける色素の混合物です。インクは移動相に溶けて、余分なスポットやしみをつくってしまいます。黒鉛は溶けないので、原線はその場にとどまります。</p>",
      misconception: {
        // EN (option A): Visibility is not the problem. Think about what the moving solvent does to the line.
        "0": "見やすさは問題ではありません。動いていく溶媒が線にどんな影響を与えるかを考えましょう。",
        // EN (option C): Rubbing out is not needed; the baseline is used for measuring afterwards.
        "2": "消す必要はありません。原線は、あとで測定に使います。",
        // EN (option D): Chromatography is a physical separation. The problem with ink is physical: it dissolves.
        "3": "クロマトグラフィーは物理的な分離です。インクの問題も物理的なもので、溶けてしまうことです。",
      },
    },

    // ── lab-chromatography-q004 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-chromatography-q004": {
      // EN: <p>A student pours solvent into a beaker so that the solvent level is 0.5 <span class="unit">cm</span> <strong>above</strong> the baseline. What will happen?</p>
      stem: "<p>ある生徒が、溶媒の液面が原線より 0.5 <span class=\"unit\">cm</span> <strong>上</strong>になるように、ビーカーに溶媒を注ぎます。どうなりますか。</p>",
      options: [
        // EN: The spots move up the paper faster.
        "スポットが紙を速く上がっていく。",
        // EN: The spots dissolve into the solvent in the beaker, so no chromatogram forms.
        "スポットがビーカーの溶媒に溶け出すので、クロマトグラムができない。",
        // EN: The <i>R</i><sub>F</sub> values are all larger, but the order of the spots is the same.
        "<i>R</i><sub>F</sub> 値はすべて大きくなるが、スポットの順番は同じ。",
        // EN: Nothing changes, because the solvent still rises up the paper.
        "溶媒は紙を上がっていくので、何も変わらない。",
      ],
      hints: [
        // EN: Where does the mixture go when it is covered by a lot of solvent?
        "たくさんの溶媒におおわれると、混合物はどこへ行くでしょうか。",
      ],
      // EN: <p>The spots are submerged, so the substances dissolve into the solvent in the beaker instead of being carried up the paper. The baseline must be above the solvent level.</p>
      solution: "<p>スポットが溶媒に沈んでいるので、物質は紙を上へ運ばれずに、ビーカーの溶媒に溶け出してしまいます。原線は溶媒の液面より上にする必要があります。</p>",
      misconception: {
        // EN (option A): The spots are under the solvent surface, so they are not carried up from the baseline at all.
        "0": "スポットは溶媒の液面より下にあるので、原線から上へまったく運ばれません。",
        // EN (option C): The problem is not the <i>R</i><sub>F</sub> value. The mixture leaves the paper altogether.
        "2": "問題は <i>R</i><sub>F</sub> 値ではありません。混合物が紙からすっかりなくなってしまいます。",
        // EN (option D): The solvent does rise, but the mixture has already left the paper and spread into the bulk solvent.
        "3": "溶媒は上がっていきますが、混合物はすでに紙から離れ、溶媒全体に広がってしまっています。",
      },
    },

    // ── lab-chromatography-q005 · short · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q005": {
      // EN: <p>Explain how paper chromatography separates the components of a mixture.</p>
      stem: "<p>ペーパークロマトグラフィーで混合物の成分が分かれるしくみを説明しなさい (explain)。</p>",
      hints: [
        // EN: Name the two phases.
        "2 つの相の名前を挙げましょう。",
        // EN: Why does one component move further than another in the same time?
        "同じ時間で、ある成分がほかの成分より遠くへ進むのはなぜでしょうか。",
      ],
      // EN: <p>One mark for the two phases and the idea of distribution between them; one mark for <em>different</em> attractions leading to different rates of movement. "They have different R<sub>F</sub> values" restates the result, it does not explain it.</p>
      solution: "<p>1 点は 2 つの相と、成分がその 2 つの相に分配されるという考え、もう 1 点は引きつけられ方が<em>違う</em>ために進む速さが違うことです。「R<sub>F</sub> 値が違うから」は結果を言い直しただけで、説明にはなっていません。</p>",
      // EN: <p>The components are distributed between the stationary phase (water held in the paper) and the mobile phase (the solvent). Each component has a different relative attraction to the two phases, through intermolecular forces, so each moves up the paper at a different rate and they separate.</p>
      answer: "<p>成分は、固定相（紙に含まれている水）と移動相（溶媒）のあいだに分配されます。成分ごとに、分子間力による 2 つの相への引きつけられ方の比が違うので、紙を上がる速さがそれぞれ違い、成分が分かれます。</p>",
      markscheme: [
        // EN: Components distribute / partition between the stationary phase and the mobile phase (or: are continually adsorbed and released).
        "成分が固定相と移動相のあいだに分配される（または：吸着と脱離をくり返す）。",
        // EN: Components have different (relative) attractions to the two phases / different solubilities in the solvent, so they move at different speeds.
        "成分によって、2 つの相への（相対的な）引きつけられ方 / 溶媒への溶けやすさが違うので、進む速さが違う。",
      ],
    },

    // ── lab-chromatography-q006 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q006": {
      // EN: <p>A mixture of three compounds is separated on a silica TLC plate (polar stationary phase) using a non-polar mobile phase. Which compound has the <strong>largest</strong> <i>R</i><sub>F</sub> value?</p>
      stem: "<p>3 つの化合物の混合物を、シリカの TLC プレート（極性の固定相）と無極性の移動相で分けます。<i>R</i><sub>F</sub> 値が<strong>最も大きい</strong>化合物はどれですか。</p>",
      options: [
        // EN: The compound with three –OH groups
        "–OH 基を 3 つもつ化合物",
        // EN: The compound with one –OH group
        "–OH 基を 1 つもつ化合物",
        // EN: The compound with only C–H and C–C bonds
        "C–H 結合と C–C 結合だけをもつ化合物",
        // EN: All three have the same value, because they move with the same solvent.
        "同じ溶媒といっしょに動くので、3 つとも同じ値になる。",
      ],
      hints: [
        // EN: Which compound is attracted least to the polar silica?
        "極性のシリカに最も引きつけられにくいのは、どの化合物でしょうか。",
      ],
      // EN: <p>The hydrocarbon-like compound has only weak London (dispersion) forces with the polar silica and dissolves well in the non-polar solvent. It spends most time in the mobile phase and travels furthest.</p>
      solution: "<p>炭化水素に似た化合物は、極性のシリカとのあいだに弱いロンドン（分散）力しかはたらかず、無極性の溶媒によく溶けます。移動相にいる時間が最も長いので、最も遠くまで進みます。</p>",
      misconception: {
        // EN (option A): Three –OH groups form many hydrogen bonds to the silica, so this compound is held back most. It has the smallest <i>R</i><sub>F</sub>.
        "0": "–OH 基が 3 つあると、シリカとのあいだに水素結合がたくさんできるので、この化合物は最も強く引きとめられます。<i>R</i><sub>F</sub> 値は最も小さくなります。",
        // EN (option B): One –OH group still hydrogen-bonds to the silica. This compound is held back more than one with no polar groups.
        "1": "–OH 基が 1 つでも、シリカと水素結合をつくります。この化合物は、極性の基をもたない化合物より強く引きとめられます。",
        // EN (option D): They move in the same solvent, but their attractions to the stationary phase differ. That is why they separate.
        "3": "同じ溶媒の中を動きますが、固定相への引きつけられ方が違います。だから分かれるのです。",
      },
    },

    // ── lab-chromatography-q007 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q007": {
      // EN: <p>A TLC run with hexane gives spots very close to the baseline. The student repeats it with a 1 : 1 mixture of hexane and ethyl acetate, which is more polar. What happens to the <i>R</i><sub>F</sub> values?</p>
      stem: "<p>ヘキサンで TLC を展開すると、スポットが原線のすぐ近くにとどまりました。生徒は、極性がより大きいヘキサンと酢酸エチルの 1 : 1 混合物で、もう一度展開します。<i>R</i><sub>F</sub> 値はどうなりますか。</p>",
      options: [
        // EN: They all decrease.
        "すべて小さくなる。",
        // EN: They all increase.
        "すべて大きくなる。",
        // EN: They stay the same, because <i>R</i><sub>F</sub> depends only on the substance.
        "<i>R</i><sub>F</sub> 値は物質だけで決まるので、変わらない。",
        // EN: The order of the spots is reversed.
        "スポットの順番が逆になる。",
      ],
      hints: [
        // EN: Which phase does a more polar solvent compete with?
        "極性の大きい溶媒は、どちらの相と競い合うでしょうか。",
      ],
      // EN: <p>The polar compounds are now attracted more strongly to the mobile phase, so they spend more time moving. Every spot moves further and every <i>R</i><sub>F</sub> increases, with the order unchanged.</p>
      solution: "<p>極性の化合物は、移動相により強く引きつけられるようになるので、動いている時間が長くなります。どのスポットも遠くまで進み、どの <i>R</i><sub>F</sub> 値も大きくなります。順番は変わりません。</p>",
      misconception: {
        // EN (option A): A more polar mobile phase competes better with the polar silica for the compounds, so they move further, not less.
        "0": "極性の大きい移動相は、極性のシリカと化合物を引きつけ合う力で競いやすくなるので、化合物は遠くまで進みます。短くはなりません。",
        // EN (option C): <i>R</i><sub>F</sub> depends on the substance <em>and</em> on the conditions: the stationary phase, the solvent and the temperature.
        "2": "<i>R</i><sub>F</sub> 値は、物質<em>と</em>条件（固定相、溶媒、温度）によって決まります。",
        // EN (option D): The stationary phase has not changed, so the most polar compound is still held most strongly. The order stays the same.
        "3": "固定相は変わっていないので、最も極性の大きい化合物が、やはり最も強く引きとめられます。順番は同じままです。",
      },
    },

    // ── lab-chromatography-q008 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-chromatography-q008": {
      // EN: <p>State <strong>two</strong> reasons why a lid is placed on the chromatography tank during the run.</p>
      stem: "<p>展開のあいだ、クロマトグラフィーの展開槽にふたをする理由を <strong>2 つ</strong>述べなさい (state)。</p>",
      hints: [
        // EN: Think about the paper as the solvent rises through it.
        "溶媒が紙を上がっていくときの、紙のようすを考えましょう。",
        // EN: Think about safety too.
        "安全のことも考えましょう。",
      ],
      // EN: <p>Without a lid, solvent evaporates from the surface of the paper, so the front moves slowly and unevenly and the <i>R</i><sub>F</sub> values are not reproducible. Many mobile phases are also volatile and flammable.</p>
      solution: "<p>ふたがないと、溶媒が紙の表面から蒸発するので、先端の進み方が遅く不ぞろいになり、<i>R</i><sub>F</sub> 値が再現しません。また、移動相の多くは揮発性で燃えやすい物質です。</p>",
      // EN: <p>The tank fills with solvent vapour, so the solvent does not evaporate from the paper as it rises (the front rises steadily and the results are reproducible). It also keeps flammable or harmful solvent vapour in the tank.</p>
      answer: "<p>展開槽が溶媒の蒸気で満たされるので、溶媒が上がっていくあいだに紙から蒸発しなくなります（先端が一定の速さで上がり、結果が再現します）。また、燃えやすい、または有害な溶媒の蒸気を展開槽の中に閉じこめておけます。</p>",
      markscheme: [
        // EN: Saturates the air in the tank with solvent vapour / stops the solvent evaporating from the paper (so the solvent front rises evenly).
        "展開槽の中の空気を溶媒の蒸気で飽和させる / 溶媒が紙から蒸発するのを防ぐ（だから溶媒先端が均一に上がる）。",
        // EN: Prevents harmful / flammable vapour escaping into the room. (Accept: keeps the composition of a mixed solvent constant.)
        "有害な / 燃えやすい蒸気が部屋に出ていくのを防ぐ。（混合溶媒の組成を一定に保つ、も可。）",
      ],
    },

    // ── lab-chromatography-q009 · numeric · challenge · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q009": {
      // EN: <p>A spot moved 1.8 <span class="unit">cm</span> and the solvent front moved 9.0 <span class="unit">cm</span> from the baseline. Each distance has an uncertainty of ±0.1 <span class="unit">cm</span>.</p><p>Calculate the percentage uncertainty of the <i>R</i><sub>F</sub> value.</p>
      stem: "<p>スポットは原線から 1.8 <span class=\"unit\">cm</span>、溶媒先端は 9.0 <span class=\"unit\">cm</span> 進みました。それぞれの距離の不確かさは ±0.1 <span class=\"unit\">cm</span> です。</p><p><i>R</i><sub>F</sub> 値の百分率の不確かさを計算しなさい (calculate)。</p>",
      hints: [
        // EN: <i>R</i><sub>F</sub> is a division, so add the percentage uncertainties of the two distances.
        "<i>R</i><sub>F</sub> 値は割り算で求めるので、2 つの距離の百分率の不確かさを足します。",
        // EN: (0.1 / 1.8) × 100 + (0.1 / 9.0) × 100
        "(0.1 / 1.8) × 100 + (0.1 / 9.0) × 100",
      ],
      // EN: <div class="worked__math">(0.1 / 1.8) × 100 = 5.56 %</div><div class="worked__math">(0.1 / 9.0) × 100 = 1.11 %</div><div class="worked__math">percentage uncertainty = 5.56 % + 1.11 % = <strong>6.7 %</strong></div><p>Most of the uncertainty comes from the short distance moved by the spot. A longer run would reduce it.</p>
      solution: "<div class=\"worked__math\">(0.1 / 1.8) × 100 = 5.56 %</div><div class=\"worked__math\">(0.1 / 9.0) × 100 = 1.11 %</div><div class=\"worked__math\">百分率の不確かさ = 5.56 % + 1.11 % = <strong>6.7 %</strong></div><p>不確かさのほとんどは、スポットが進んだ距離が短いことから来ています。展開距離を長くすれば、小さくできます。</p>",
    },

    // ── lab-chromatography-q010 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q010": {
      // EN: <p>A food colouring F and four permitted dyes were run on the same paper. The table shows the <i>R</i><sub>F</sub> values. The uncertainty of each value is ±0.02.</p><div class="table-scroll"><table class="data"><caption><i>R</i><sub>F</sub> values on one chromatogram</caption><thead><tr><th scope="col">Sample</th><th scope="col" class="num"><i>R</i><sub>F</sub> value(s)</th></tr></thead><tbody><tr><th scope="row">F</th><td class="num">0.18, 0.47, 0.71</td></tr><tr><th scope="row">dye 1</th><td class="num">0.18</td></tr><tr><th scope="row">dye 2</th><td class="num">0.33</td></tr><tr><th scope="row">dye 3</th><td class="num">0.46</td></tr><tr><th scope="row">dye 4</th><td class="num">0.79</td></tr></tbody></table></div><p>Which conclusion is correct?</p>
      stem: "<p>食用色素 F と、使用が認められている 4 種類の色素を、同じ紙で展開しました。表は <i>R</i><sub>F</sub> 値を示しています。それぞれの値の不確かさは ±0.02 です。</p><div class=\"table-scroll\"><table class=\"data\"><caption>1 枚のクロマトグラムでの <i>R</i><sub>F</sub> 値</caption><thead><tr><th scope=\"col\">試料</th><th scope=\"col\" class=\"num\"><i>R</i><sub>F</sub> 値</th></tr></thead><tbody><tr><th scope=\"row\">F</th><td class=\"num\">0.18, 0.47, 0.71</td></tr><tr><th scope=\"row\">色素 1</th><td class=\"num\">0.18</td></tr><tr><th scope=\"row\">色素 2</th><td class=\"num\">0.33</td></tr><tr><th scope=\"row\">色素 3</th><td class=\"num\">0.46</td></tr><tr><th scope=\"row\">色素 4</th><td class=\"num\">0.79</td></tr></tbody></table></div><p>正しい結論はどれですか。</p>",
      options: [
        // EN: F contains dyes 1, 3 and 4.
        "F には色素 1、3、4 が含まれている。",
        // EN: F contains dyes 1 and 3 and one substance that is not dyes 1–4.
        "F には色素 1 と 3、そして色素 1–4 のどれでもない物質が 1 つ含まれている。",
        // EN: F contains dyes 1, 2 and 3.
        "F には色素 1、2、3 が含まれている。",
        // EN: F contains only dye 1, because it is the only exact match.
        "ぴったり一致するのは色素 1 だけなので、F には色素 1 だけが含まれている。",
      ],
      hints: [
        // EN: Two values match if their difference is within the uncertainty.
        "2 つの値の差が不確かさの範囲に入っていれば、2 つの値は一致しています。",
      ],
      // EN: <p>0.18 matches dye 1 exactly and 0.47 matches dye 3 (0.46) within ±0.02. 0.71 matches none of the dyes, so F also contains an unknown substance.</p>
      solution: "<p>0.18 は色素 1 とぴったり一致し、0.47 は ±0.02 の範囲で色素 3（0.46）と一致します。0.71 はどの色素とも一致しないので、F には未知の物質も含まれています。</p>",
      misconception: {
        // EN (option A): 0.71 and 0.79 differ by 0.08, which is far more than the ±0.02 uncertainty. They are different substances.
        "0": "0.71 と 0.79 は 0.08 違い、これは ±0.02 の不確かさよりずっと大きい差です。別の物質です。",
        // EN (option C): No spot of F has an <i>R</i><sub>F</sub> near 0.33.
        "2": "F のスポットに、<i>R</i><sub>F</sub> 値が 0.33 に近いものはありません。",
        // EN (option D): 0.47 and 0.46 differ by less than the uncertainty, so dye 3 matches as well.
        "3": "0.47 と 0.46 の差は不確かさより小さいので、色素 3 も一致します。",
      },
    },

    // ── lab-chromatography-q011 · short · exam · SL · Structure 2.2.10 · 2 marks
    "lab-chromatography-q011": {
      // EN: <p>Two components of a mixture give spots with <i>R</i><sub>F</sub> values of 0.92 and 0.95. Suggest <strong>two</strong> changes to the method that would improve the separation.</p>
      stem: "<p>混合物の 2 つの成分のスポットの <i>R</i><sub>F</sub> 値は 0.92 と 0.95 でした。分離をよくするための方法の変更を <strong>2 つ</strong>提案しなさい (suggest)。</p>",
      hints: [
        // EN: Both spots are near the front. What makes spots move less far?
        "どちらのスポットも先端の近くにあります。スポットが進む距離を短くするには、どうすればよいでしょうか。",
        // EN: A greater distance travelled makes the gap between spots bigger.
        "進む距離が長くなると、スポットどうしの間隔も大きくなります。",
      ],
      // EN: <p>Spots near the front mean the components are attracted much more to the mobile phase. A less polar solvent lowers both <i>R</i><sub>F</sub> values and spreads them out. A longer run makes the same difference in <i>R</i><sub>F</sub> into a bigger distance.</p>
      solution: "<p>スポットが先端の近くにあるということは、成分が移動相にずっと強く引きつけられているということです。極性の小さい溶媒を使うと、どちらの <i>R</i><sub>F</sub> 値も小さくなり、スポットが離れます。展開距離を長くすると、同じ <i>R</i><sub>F</sub> 値の差が、より大きな距離の差になります。</p>",
      // EN: <p>Use a less polar mobile phase, so both components are held back more by the polar stationary phase and move less far; their spots move apart. Use a longer piece of paper so the solvent can travel further. (Or: use TLC instead of paper; turn the paper 90° and run it again in a second solvent.)</p>
      answer: "<p>極性の小さい移動相を使います。すると、どちらの成分も極性の固定相に強く引きとめられて、進む距離が短くなり、スポットどうしが離れます。また、長い紙を使って、溶媒をもっと遠くまで進ませます。（または：紙の代わりに TLC を使う。紙を 90° 回して、2 つ目の溶媒でもう一度展開する。）</p>",
      markscheme: [
        // EN: Change the solvent / use a less polar mobile phase.
        "溶媒を変える / 極性の小さい移動相を使う。",
        // EN: Use longer paper / let the solvent run further / use TLC / run again at 90° in a different solvent. (Any one.)
        "長い紙を使う / 溶媒をもっと遠くまで進ませる / TLC を使う / 90° 回して別の溶媒でもう一度展開する。（どれか 1 つ。）",
      ],
    },

    // ── lab-chromatography-q012 · mcq · exam · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q012": {
      // EN: <p>A student takes the paper out of the tank but forgets to mark the solvent front. Ten minutes later the student marks the edge of the wet area. What is the effect on the calculated <i>R</i><sub>F</sub> values?</p>
      stem: "<p>ある生徒が、展開槽から紙を取り出しましたが、溶媒先端に印を付けるのを忘れました。10 分後に、ぬれている部分のふちに印を付けました。計算した <i>R</i><sub>F</sub> 値はどうなりますか。</p>",
      options: [
        // EN: They are too small.
        "小さすぎる。",
        // EN: They are too large.
        "大きすぎる。",
        // EN: They are unchanged.
        "変わらない。",
        // EN: Some are too large and some too small.
        "大きすぎるものと小さすぎるものがある。",
      ],
      hints: [
        // EN: What happens to the wet area as the solvent evaporates?
        "溶媒が蒸発すると、ぬれている部分はどうなるでしょうか。",
        // EN: Is the front distance too big or too small?
        "先端の距離は大きすぎるでしょうか、それとも小さすぎるでしょうか。",
      ],
      // EN: <p>As the solvent evaporates, the wet area shrinks, so the front is marked too low. The front distance is too small, so every <i>R</i><sub>F</sub> is too large. This is a systematic error.</p>
      solution: "<p>溶媒が蒸発すると、ぬれている部分がせまくなるので、先端の印が低くなりすぎます。先端の距離が小さすぎるので、どの <i>R</i><sub>F</sub> 値も大きすぎます。これは系統誤差です。</p>",
      misconception: {
        // EN (option A): The front distance is the denominator. A smaller denominator gives a larger fraction.
        "0": "先端の距離は分母です。分母が小さいほど、分数は大きくなります。",
        // EN (option C): The spots have stopped moving, but the visible edge of the wet area has moved down as the solvent evaporated.
        "2": "スポットはもう動いていませんが、ぬれている部分の見えるふちは、溶媒が蒸発するにつれて下がっています。",
        // EN (option D): Every <i>R</i><sub>F</sub> is divided by the same wrong front distance, so they are all affected in the same direction.
        "3": "どの <i>R</i><sub>F</sub> 値も同じまちがった先端の距離で割っているので、すべて同じ向きに影響を受けます。",
      },
    },

    // ── lab-chromatography-q013 · multi · challenge · SL · Structure 2.2.10 · 1 mark
    "lab-chromatography-q013": {
      // EN: <p>Which statements about <i>R</i><sub>F</sub> values are correct? Select all that apply.</p>
      stem: "<p><i>R</i><sub>F</sub> 値について正しい記述はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: An <i>R</i><sub>F</sub> value has no unit.
        "<i>R</i><sub>F</sub> 値には単位がない。",
        // EN: An <i>R</i><sub>F</sub> value is always between 0 and 1.
        "<i>R</i><sub>F</sub> 値はいつも 0 と 1 のあいだにある。",
        // EN: A substance has the same <i>R</i><sub>F</sub> value in any solvent.
        "物質の <i>R</i><sub>F</sub> 値は、どの溶媒でも同じである。",
        // EN: A pure substance gives a single spot with one <i>R</i><sub>F</sub> value.
        "純物質は、1 つの <i>R</i><sub>F</sub> 値をもつ 1 つのスポットになる。",
        // EN: Two substances with the same <i>R</i><sub>F</sub> in one solvent must be the same substance.
        "ある溶媒で <i>R</i><sub>F</sub> 値が同じ 2 つの物質は、必ず同じ物質である。",
      ],
      hints: [
        // EN: <i>R</i><sub>F</sub> is a ratio of two distances.
        "<i>R</i><sub>F</sub> 値は 2 つの距離の比です。",
        // EN: Which conditions affect how far a spot moves?
        "スポットが進む距離に影響する条件は何でしょうか。",
      ],
      // EN: <p><i>R</i><sub>F</sub> is a ratio of two lengths, so it has no unit, and a spot cannot pass the solvent front, so it is at most 1. It is only constant for fixed conditions. A match in one solvent is good evidence, not proof.</p>
      solution: "<p><i>R</i><sub>F</sub> 値は 2 つの長さの比なので、単位はありません。また、スポットは溶媒先端を越えられないので、最大でも 1 です。値が一定になるのは、条件が決まっているときだけです。1 つの溶媒で一致しても、それはよい証拠であって、証明ではありません。</p>",
      misconception: {
        // EN (option C): <i>R</i><sub>F</sub> depends on the stationary phase, the solvent and the temperature. Change the solvent and it changes.
        "2": "<i>R</i><sub>F</sub> 値は、固定相、溶媒、温度によって決まります。溶媒を変えれば、値も変わります。",
        // EN (option E): Matching <i>R</i><sub>F</sub> values in one solvent suggest the same substance, but do not prove it. Running in a second solvent makes the evidence stronger.
        "4": "1 つの溶媒で <i>R</i><sub>F</sub> 値が一致すれば、同じ物質である可能性が高いといえますが、証明にはなりません。2 つ目の溶媒でも展開すると、証拠がより確かになります。",
      },
    },

  }
});
