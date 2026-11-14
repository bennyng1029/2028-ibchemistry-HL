/* lab-separation.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-separation.q', {
  questions: {

    // ── lab-separation-q001 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q001": {
      // EN: <p>A student wants to collect pure water from a sample of sea water. Which technique should be used?</p>
      stem: "<p>ある生徒が、海水の試料から純粋な水を集めたいと考えています。どの方法を使うべきですか。</p>",
      options: [
        // EN: Filtration
        "ろ過",
        // EN: Evaporation
        "蒸発",
        // EN: Simple distillation
        "単蒸留",
        // EN: Recrystallization
        "再結晶",
      ],
      hints: [
        // EN: Which part do you want to keep: the solid or the liquid?
        "残したいのはどちらですか。固体ですか、液体ですか。",
        // EN: You need a technique that turns the water into vapour and then turns it back into liquid.
        "水をいったん蒸気にして、それをまた液体にもどす方法が必要です。",
      ],
      // EN: <p>Distillation boils the water, condenses the vapour and collects it as the distillate. The salt is not volatile, so it stays in the flask. Evaporation uses the same property (volatility) but loses the water.</p>
      solution: "<p>蒸留では、水を沸騰させ、その蒸気を凝縮させて、留出液として集めます。塩は揮発性ではないので、フラスコに残ります。蒸発も同じ性質（揮発性）を使いますが、水は失われてしまいます。</p>",
      misconception: {
        // EN (option A): The salt is dissolved. Dissolved particles pass straight through filter paper, so the filtrate is still sea water.
        "0": "塩は溶けています。溶けている粒子はそのままろ紙を通り抜けるので、ろ液はまだ海水のままです。",
        // EN (option B): Evaporation keeps the salt, but the water escapes into the air as vapour. You want to keep the water.
        "1": "蒸発では塩は残りますが、水は蒸気になって空気中に逃げてしまいます。残したいのは水です。",
        // EN (option D): Recrystallization purifies a solid product. Here you want the liquid.
        "3": "再結晶は固体の生成物を精製する方法です。ここでほしいのは液体です。",
      },
    },

    // ── lab-separation-q002 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q002": {
      // EN: <p>Ethanol and water mix completely. Which physical property allows them to be separated by distillation?</p>
      stem: "<p>エタノールと水は完全に混ざり合います。蒸留でこの 2 つを分けられるのは、どの物理的性質のおかげですか。</p>",
      options: [
        // EN: Their densities are different.
        "密度が違う。",
        // EN: Their boiling points are different.
        "沸点が違う。",
        // EN: Only ethanol is soluble in water.
        "エタノールだけが水に溶ける。",
        // EN: Their particle sizes are different.
        "粒子の大きさが違う。",
      ],
      hints: [
        // EN: Distillation involves boiling and condensing.
        "蒸留では、沸騰と凝縮が起こります。",
      ],
      // EN: <p>Ethanol boils at 78 °C and water at 100 °C. Distillation uses this difference in volatility: the vapour first collected is rich in ethanol.</p>
      solution: "<p>エタノールは 78 °C、水は 100 °C で沸騰します。蒸留はこの揮発性の違いを利用します。最初に集まる蒸気は、エタノールを多く含みます。</p>",
      misconception: {
        // EN (option A): Density matters for liquids that do not mix, which form layers. These two liquids mix completely.
        "0": "密度が関係するのは、混ざり合わずに層をつくる液体どうしの場合です。この 2 つの液体は完全に混ざり合います。",
        // EN (option C): They mix in all proportions, so solubility cannot be the difference here.
        "2": "どんな割合でも混ざり合うので、ここでの違いは溶けやすさではありません。",
        // EN (option D): Particle size is what filtration uses, for an undissolved solid. Molecules in a solution all pass through filter paper.
        "3": "粒子の大きさを利用するのはろ過で、溶けていない固体に使います。溶液中の分子は、すべてろ紙を通り抜けます。",
      },
    },

    // ── lab-separation-q003 · order · foundation · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q003": {
      // EN: <p>Put these steps for recrystallizing an impure solid into the correct order.</p>
      stem: "<p>不純物を含む固体を再結晶する次の手順を、正しい順に並べなさい。</p>",
      options: [
        // EN: Dissolve the solid in the minimum volume of hot solvent.
        "できるだけ少ない量の熱い溶媒に固体を溶かす。",
        // EN: Filter the hot solution to remove insoluble impurities.
        "熱い溶液をろ過して、溶けない不純物を取り除く。",
        // EN: Let the filtrate cool slowly, then cool it in an ice bath.
        "ろ液をゆっくり冷まし、そのあと氷浴で冷やす。",
        // EN: Filter to collect the crystals.
        "ろ過して結晶を集める。",
        // EN: Rinse the crystals with a little ice-cold solvent.
        "少量の氷冷した溶媒で結晶をすすぐ。",
        // EN: Dry the crystals to constant mass.
        "質量が一定になるまで結晶を乾燥させる。",
      ],
      hints: [
        // EN: The insoluble impurities must be removed while the product is still dissolved.
        "溶けない不純物は、生成物がまだ溶けているうちに取り除く必要があります。",
        // EN: The crystals must be collected before they can be rinsed or dried.
        "結晶をすすいだり乾燥させたりする前に、まず結晶を集める必要があります。",
      ],
      // EN: <p>Dissolve hot, filter hot, cool to crystallize, filter to collect, rinse cold, dry. The hot filtration has to come before cooling, while the product is in solution and only the insoluble impurity is solid.</p>
      solution: "<p>熱いうちに溶かし、熱いうちにろ過し、冷やして結晶にし、ろ過して集め、冷たい溶媒ですすぎ、乾燥させます。熱いままのろ過は、冷やす前に行う必要があります。そのときなら、生成物は溶液中にあり、固体なのは溶けない不純物だけだからです。</p>",
    },

    // ── lab-separation-q004 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q004": {
      // EN: <p>In a recrystallization, the impure solid is dissolved in the <strong>minimum</strong> volume of hot solvent.</p><p>Explain why using a large excess of hot solvent reduces the mass of crystals obtained.</p>
      stem: "<p>再結晶では、不純物を含む固体を、<strong>できるだけ少ない</strong>量の熱い溶媒に溶かします。</p><p>熱い溶媒を大過剰に使うと、得られる結晶の質量が少なくなる理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Does the product become completely insoluble when the solvent is cold?
        "溶媒が冷たくなると、生成物はまったく溶けなくなるでしょうか。",
        // EN: The mass that stays dissolved depends on how much solvent there is.
        "溶けたまま残る質量は、溶媒の量によって決まります。",
      ],
      // EN: <p>Solubility is a mass per volume of solvent. Doubling the solvent volume doubles the mass of product that can stay dissolved at the final temperature, and that mass is lost with the filtrate.</p>
      solution: "<p>溶解度は、溶媒の体積あたりの質量です。溶媒の体積を 2 倍にすると、最後の温度で溶けたまま残れる生成物の質量も 2 倍になり、その分はろ液といっしょに失われます。</p>",
      // EN: <p>Some of the product always remains dissolved in the cold solvent. The more solvent there is, the greater the mass of product that stays in solution after cooling, so fewer crystals form.</p>
      answer: "<p>生成物の一部は、冷たい溶媒にもいつも溶けたまま残ります。溶媒が多いほど、冷やしたあとに溶液中に残る生成物の質量が大きくなるので、できる結晶が少なくなります。</p>",
      markscheme: [
        // EN: The product is (still slightly) soluble in the cold solvent / some product stays dissolved after cooling.
        "生成物は冷たい溶媒にも（少しは）溶ける / 冷やしたあとも生成物の一部が溶けたまま残る。",
        // EN: A larger volume of solvent keeps a larger mass of product dissolved, so less crystallizes / lower yield. (Accept: the solution may not become saturated on cooling.)
        "溶媒の体積が大きいと、溶けたまま残る生成物の質量も大きくなるので、結晶になる量が少なくなる / 回収量が少なくなる。（冷やしても溶液が飽和しないことがある、も可。）",
      ],
    },

    // ── lab-separation-q005 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q005": {
      // EN: <p>After recrystallization, a student collects the crystals by filtration and rinses them.</p><p>Explain why the crystals are rinsed, and why the rinsing solvent must be ice-cold.</p>
      stem: "<p>再結晶のあと、ある生徒がろ過で結晶を集め、すすぎます。</p><p>結晶をすすぐ理由と、すすぐ溶媒を氷冷しなければならない理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: What is still wet on the surface of freshly filtered crystals?
        "ろ過したばかりの結晶の表面をぬらしているのは何でしょうか。",
        // EN: How does the solubility of the product change with temperature?
        "生成物の溶けやすさは、温度によってどう変わるでしょうか。",
      ],
      // EN: <p>Two marks: one for what the rinse removes (impure solution on the surface), one for why it is cold (less product dissolves, so the yield is kept).</p>
      solution: "<p>2 点です。1 点はすすぎで何を取り除くか（表面の不純物を含む溶液）、もう 1 点はなぜ冷たい溶媒を使うか（生成物が溶けにくく、回収量が保たれる）です。</p>",
      // EN: <p>The rinse washes off the solution left on the crystals, which contains the dissolved impurities. Ice-cold solvent is used because the product is much less soluble at low temperature, so very little of the crystals dissolves.</p>
      answer: "<p>すすぐと、結晶に残った溶液が洗い流されます。この溶液には、溶けている不純物が含まれています。生成物は低い温度ではずっと溶けにくいので、氷冷した溶媒を使えば、結晶はほとんど溶けません。</p>",
      markscheme: [
        // EN: Rinsing removes the solution (filtrate / mother liquor) on the surface of the crystals, which contains the soluble impurities.
        "すすぐと、結晶の表面にある溶液（ろ液 / 母液）が取り除かれる。この溶液は溶ける不純物を含んでいる。",
        // EN: Cold solvent dissolves (very) little of the product / warm solvent would dissolve some of the crystals and lower the yield.
        "冷たい溶媒には生成物が（ほとんど）溶けない / 温かい溶媒では結晶の一部が溶けて、回収量が減ってしまう。",
      ],
    },

    // ── lab-separation-q006 · numeric · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q006": {
      // EN: <p>A student recrystallized a sample of impure benzoic acid and recorded these masses.</p><div class="table-scroll"><table class="data"><caption>Mass readings</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">impure benzoic acid</th><td class="num">2.56</td></tr><tr><th scope="row">empty watch glass</th><td class="num">23.47</td></tr><tr><th scope="row">watch glass + dry crystals</th><td class="num">25.41</td></tr></tbody></table></div><p>Calculate the percentage recovery of benzoic acid.</p>
      stem: "<p>ある生徒が、不純物を含む安息香酸の試料を再結晶し、次の質量を記録しました。</p><div class=\"table-scroll\"><table class=\"data\"><caption>質量の測定値</caption><thead><tr><th scope=\"col\">測定</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">不純物を含む安息香酸</th><td class=\"num\">2.56</td></tr><tr><th scope=\"row\">空の時計皿</th><td class=\"num\">23.47</td></tr><tr><th scope=\"row\">時計皿 + 乾燥した結晶</th><td class=\"num\">25.41</td></tr></tbody></table></div><p>安息香酸の回収率を計算しなさい (calculate)。</p>",
      hints: [
        // EN: First find the mass of crystals by difference.
        "まず、差から結晶の質量を求めます。",
        // EN: Percentage recovery = (mass of crystals / mass of impure sample) × 100.
        "回収率 = (結晶の質量 / 不純物を含む試料の質量) × 100。",
      ],
      // EN: <div class="worked__math"><i>m</i>(crystals) = 25.41 <span class="unit">g</span> − 23.47 <span class="unit">g</span> = 1.94 <span class="unit">g</span></div><div class="worked__math">recovery = (1.94 <span class="unit">g</span> / 2.56 <span class="unit">g</span>) × 100 = 75.78… %</div><div class="worked__math">recovery = <strong>75.8 %</strong></div><p>M1 for the mass of crystals, M2 for the percentage.</p>
      solution: "<div class=\"worked__math\"><i>m</i>(結晶) = 25.41 <span class=\"unit\">g</span> − 23.47 <span class=\"unit\">g</span> = 1.94 <span class=\"unit\">g</span></div><div class=\"worked__math\">回収率 = (1.94 <span class=\"unit\">g</span> / 2.56 <span class=\"unit\">g</span>) × 100 = 75.78… %</div><div class=\"worked__math\">回収率 = <strong>75.8 %</strong></div><p>M1 は結晶の質量、M2 は百分率です。</p>",
    },

    // ── lab-separation-q007 · numeric · exam · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q007": {
      // EN: <p>Using the data in the table, calculate the percentage uncertainty in the mass of dry crystals. The balance has an uncertainty of ±0.01 <span class="unit">g</span> for each reading.</p><div class="table-scroll"><table class="data"><caption>Mass readings</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">empty watch glass</th><td class="num">23.47</td></tr><tr><th scope="row">watch glass + dry crystals</th><td class="num">25.41</td></tr></tbody></table></div>
      stem: "<p>表のデータを使って、乾燥した結晶の質量の百分率の不確かさを計算しなさい (calculate)。電子てんびんの不確かさは、1 回の読みあたり ±0.01 <span class=\"unit\">g</span> です。</p><div class=\"table-scroll\"><table class=\"data\"><caption>質量の測定値</caption><thead><tr><th scope=\"col\">測定</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">空の時計皿</th><td class=\"num\">23.47</td></tr><tr><th scope=\"row\">時計皿 + 乾燥した結晶</th><td class=\"num\">25.41</td></tr></tbody></table></div>",
      hints: [
        // EN: The mass of crystals comes from two readings. Add their absolute uncertainties.
        "結晶の質量は 2 つの測定値から求めます。それぞれの絶対不確かさを足しましょう。",
        // EN: Divide ±0.02 g by the mass of crystals, 1.94 g, and multiply by 100.
        "±0.02 g を結晶の質量 1.94 g で割り、100 をかけます。",
      ],
      // EN: <div class="worked__math">Δ<i>m</i> = ±(0.01 + 0.01) <span class="unit">g</span> = ±0.02 <span class="unit">g</span></div><div class="worked__math"><i>m</i>(crystals) = 25.41 − 23.47 = 1.94 <span class="unit">g</span></div><div class="worked__math">percentage uncertainty = (0.02 / 1.94) × 100 = <strong>1.0 %</strong></div><p>A common slip is to use ±0.01 g only. A mass found by difference always involves two readings.</p>
      solution: "<div class=\"worked__math\">Δ<i>m</i> = ±(0.01 + 0.01) <span class=\"unit\">g</span> = ±0.02 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>m</i>(結晶) = 25.41 − 23.47 = 1.94 <span class=\"unit\">g</span></div><div class=\"worked__math\">百分率の不確かさ = (0.02 / 1.94) × 100 = <strong>1.0 %</strong></div><p>よくある間違いは、±0.01 g だけを使うことです。差から求めた質量には、必ず 2 つの測定値がかかわります。</p>",
    },

    // ── lab-separation-q008 · mcq · foundation · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q008": {
      // EN: <p>The literature melting point of benzoic acid is 122 °C. Four samples were tested. Which sample is the purest?</p><div class="table-scroll"><table class="data"><caption>Melting ranges</caption><thead><tr><th scope="col">Sample</th><th scope="col" class="num">Melting range / °C</th></tr></thead><tbody><tr><th scope="row">A</th><td class="num">114–119</td></tr><tr><th scope="row">B</th><td class="num">121.5–122.5</td></tr><tr><th scope="row">C</th><td class="num">118–122</td></tr><tr><th scope="row">D</th><td class="num">123–127</td></tr></tbody></table></div>
      stem: "<p>安息香酸の融点の文献値は 122 °C です。4 つの試料を調べました。最も純粋な試料はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><caption>融点範囲</caption><thead><tr><th scope=\"col\">試料</th><th scope=\"col\" class=\"num\">融点範囲 / °C</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td class=\"num\">114–119</td></tr><tr><th scope=\"row\">B</th><td class=\"num\">121.5–122.5</td></tr><tr><th scope=\"row\">C</th><td class=\"num\">118–122</td></tr><tr><th scope=\"row\">D</th><td class=\"num\">123–127</td></tr></tbody></table></div>",
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
        // EN: A pure substance melts at its literature value over a narrow range.
        "純物質は、文献値のところで、せまい範囲で融解します。",
      ],
      // EN: <p>Sample B melts over 1 °C, around the literature value. Impurities lower the melting point and widen the range, as in A and C.</p>
      solution: "<p>試料 B は、文献値のあたりで 1 °C の範囲で融解します。A や C のように、不純物があると融点が下がり、範囲が広がります。</p>",
      misconception: {
        // EN (option A): Sample A melts well below 122 °C and over 5 °C. Both are signs of impurity.
        "0": "試料 A は 122 °C よりかなり低い温度で、5 °C の範囲で融解します。どちらも不純物があるしるしです。",
        // EN (option C): Sample C finishes melting at 122 °C, but it starts 4 °C lower. A wide range shows impurity.
        "2": "試料 C は 122 °C で融解し終わりますが、始まりは 4 °C 低くなっています。範囲が広いのは、不純物があるしるしです。",
        // EN (option D): Impurities lower a melting point; they do not raise it. A range above the literature value and 4 °C wide suggests a different substance, or heating too fast.
        "3": "不純物は融点を下げます。上げることはありません。文献値より高く、幅が 4 °C の範囲は、別の物質か、加熱が速すぎたことを示しています。",
      },
    },

    // ── lab-separation-q009 · short · exam · SL · Structure 1.1.1 · 2 marks
    "lab-separation-q009": {
      // EN: <p>A student weighs the crystals straight after filtering them. The percentage recovery is 104 %.</p><p>Suggest the reason for this result and an improvement to the method.</p>
      stem: "<p>ある生徒が、ろ過したばかりの結晶の質量をすぐにはかりました。回収率は 104 % でした。</p><p>この結果になった理由と、方法の改善策を提案しなさい (suggest)。</p>",
      hints: [
        // EN: Recovery above 100 % means the measured mass contains something that is not benzoic acid.
        "回収率が 100 % を超えるということは、はかった質量に安息香酸以外のものが含まれているということです。",
        // EN: What liquid was just poured through the crystals?
        "結晶には、直前にどんな液体を注ぎましたか。",
      ],
      // EN: <p>Some product is always lost, so a recovery above 100 % shows extra mass. Straight after filtration the crystals are wet. Drying to constant mass makes sure all the water has gone. (Accept also: insoluble impurity such as sand not removed, with "filter the hot solution" as the improvement.)</p>
      solution: "<p>生成物はいつも少しは失われるので、100 % を超える回収率は、余分な質量があることを示します。ろ過した直後の結晶はぬれています。質量が一定になるまで乾燥させれば、水がすべてなくなったことを確かめられます。（砂のような溶けない不純物が取り除かれていない、改善策は「熱い溶液をろ過する」、も可。）</p>",
      // EN: <p>The crystals were still wet, so the mass included water. Dry the crystals in a low-temperature oven or desiccator, weighing them repeatedly until the mass is constant.</p>
      answer: "<p>結晶がまだぬれていたので、質量に水が含まれていました。低温の乾燥器かデシケーターで結晶を乾燥させ、質量が一定になるまでくり返しはかります。</p>",
      markscheme: [
        // EN: The crystals still contain water / solvent, so the measured mass is too high.
        "結晶にまだ水 / 溶媒が含まれているので、はかった質量が大きすぎる。",
        // EN: Dry (in an oven / desiccator) and reweigh until the mass is constant / heat to constant mass.
        "（乾燥器 / デシケーターで）乾燥させ、質量が一定になるまではかりなおす / 質量が一定になるまで加熱する。",
      ],
    },

    // ── lab-separation-q010 · mcq · exam · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q010": {
      // EN: <p>A student heats a capillary tube of pure benzoic acid at 15 °C per minute in a melting point apparatus. What is the most likely effect on the recorded melting range?</p>
      stem: "<p>ある生徒が、純粋な安息香酸を入れた毛細管を、融点測定装置で 1 分あたり 15 °C で加熱します。記録される融点範囲は、どうなる可能性が最も高いですか。</p>",
      options: [
        // EN: Lower than 122 °C and narrower
        "122 °C より低く、せまくなる",
        // EN: Lower than 122 °C and wider
        "122 °C より低く、広くなる",
        // EN: Higher than 122 °C and wider
        "122 °C より高く、広くなる",
        // EN: Exactly 122 °C, because the sample is pure
        "試料が純粋なので、ちょうど 122 °C になる",
      ],
      hints: [
        // EN: Heat takes time to pass from the block into the sample.
        "熱が加熱ブロックから試料に伝わるには時間がかかります。",
        // EN: When the sample finally melts, has the thermometer already gone past that temperature?
        "試料がようやく融解するとき、温度計はすでにその温度を通り過ぎていないでしょうか。",
      ],
      // EN: <p>With fast heating the thermometer is hotter than the sample, so each change is recorded at too high a reading. The temperature also rises a long way between the first drop and the last crystal, so the range looks wider. Heat at 1–2 °C per minute near the melting point.</p>
      solution: "<p>速く加熱すると、温度計が試料より熱くなるので、それぞれの変化が高すぎる読みで記録されます。また、最初の液滴から最後の結晶までのあいだに温度が大きく上がるので、範囲も広く見えます。融点の近くでは 1 分あたり 1–2 °C で加熱しましょう。</p>",
      misconception: {
        // EN (option A): A lower melting point is caused by impurities, not by the heating rate. Here the thermometer gets ahead of the sample.
        "0": "融点が低くなるのは不純物が原因で、加熱の速さではありません。ここでは、温度計の示す温度が試料より先に上がります。",
        // EN (option B): A lower and wider range is the sign of an impure sample. This sample is pure; the problem is the heating rate.
        "1": "低くて広い範囲は、不純物を含む試料のしるしです。この試料は純粋で、問題は加熱の速さです。",
        // EN (option D): The true melting point does not change, but the recorded value does: the reading depends on how well the sample keeps up with the thermometer.
        "3": "本当の融点は変わりませんが、記録される値は変わります。読みは、試料の温度が温度計にどれだけ追いつけるかによって決まります。",
      },
    },

    // ── lab-separation-q011 · short · exam · SL · Structure 1.1.1 · 4 marks
    "lab-separation-q011": {
      // EN: <p>A student has a dry mixture of powdered chalk (calcium carbonate, insoluble in water) and potassium nitrate (soluble in water).</p><p>Outline a method to obtain a dry sample of each solid.</p>
      stem: "<p>ある生徒が、粉末のチョーク（炭酸カルシウム、水に溶けない）と硝酸カリウム（水に溶ける）の乾いた混合物をもっています。</p><p>それぞれの固体の乾いた試料を得る方法について、概要を述べなさい (outline)。</p>",
      hints: [
        // EN: Which solid dissolves in water? Use that difference first.
        "水に溶けるのはどちらの固体ですか。まずその違いを使いましょう。",
        // EN: After filtering, each solid still needs a final step: the residue is wet and the other solid is still dissolved.
        "ろ過したあとも、それぞれの固体には最後のステップが必要です。残留物はぬれていて、もう一方の固体はまだ溶けたままです。",
      ],
      // EN: <p>One mark for each workable step in a sensible order: dissolve, filter, rinse and dry the residue, evaporate the filtrate and crystallize. Forgetting the final step for each solid is the most common way to lose marks.</p>
      solution: "<p>実行できるステップが筋の通った順になっていれば、1 つにつき 1 点です。溶かす、ろ過する、残留物をすすいで乾燥させる、ろ液を蒸発させて結晶化させる。それぞれの固体の最後のステップを忘れるのが、最もよくある減点の原因です。</p>",
      // EN: <ol><li>Add distilled water and stir until the potassium nitrate has dissolved.</li><li>Filter: the chalk is the residue and the potassium nitrate solution is the filtrate.</li><li>Rinse the chalk with a little distilled water and dry it in an oven.</li><li>Heat the filtrate to evaporate some of the water, leave it to crystallize, then filter and dry the crystals.</li></ol>
      answer: "<ol><li>蒸留水を加え、硝酸カリウムが溶けるまでかき混ぜる。</li><li>ろ過する。チョークが残留物、硝酸カリウムの水溶液がろ液になる。</li><li>チョークを少量の蒸留水ですすぎ、乾燥器で乾燥させる。</li><li>ろ液を加熱して水の一部を蒸発させ、放置して結晶化させてから、ろ過して結晶を乾燥させる。</li></ol>",
      markscheme: [
        // EN: Add (distilled) water and stir / dissolve the potassium nitrate.
        "（蒸留）水を加えてかき混ぜる / 硝酸カリウムを溶かす。",
        // EN: Filter (to separate the chalk as the residue).
        "ろ過する（チョークを残留物として分ける）。",
        // EN: Rinse and dry the residue (chalk).
        "残留物（チョーク）をすすいで乾燥させる。",
        // EN: Evaporate (heat) the filtrate and crystallize / dry the potassium nitrate. (Steps must be in a workable order.)
        "ろ液を蒸発させ（加熱し）、結晶化させる / 硝酸カリウムを乾燥させる。（ステップは実行できる順になっていること。）",
      ],
    },

    // ── lab-separation-q012 · multi · challenge · SL · Structure 1.1.1 · 1 mark
    "lab-separation-q012": {
      // EN: <p>A recrystallization gave a low percentage recovery but a pure product. Which changes to the method would increase the recovery? Select all that apply.</p>
      stem: "<p>ある再結晶では、生成物は純粋でしたが、回収率が低くなりました。方法をどう変えれば回収率が上がりますか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Use a smaller volume of hot solvent.
        "熱い溶媒の体積を少なくする。",
        // EN: Cool the filtrate in an ice bath before filtering off the crystals.
        "結晶をろ過して集める前に、ろ液を氷浴で冷やす。",
        // EN: Rinse the crystals with warm solvent.
        "温かい溶媒で結晶をすすぐ。",
        // EN: Warm the funnel before the hot filtration.
        "熱いままのろ過の前に、ろうとを温めておく。",
        // EN: Skip the hot filtration step.
        "熱いままのろ過のステップを省く。",
      ],
      hints: [
        // EN: Product is lost where it stays dissolved or crystallizes in the wrong place.
        "生成物が失われるのは、溶けたまま残るときと、まちがった場所で結晶になるときです。",
      ],
      // EN: <p>Less solvent and a lower final temperature both leave less product dissolved. A warm funnel stops crystals forming on the filter paper during hot filtration. Warm rinsing loses product, and skipping hot filtration only adds impurity.</p>
      solution: "<p>溶媒を少なくすることと、最後の温度を低くすることは、どちらも溶けたまま残る生成物を少なくします。温めたろうとを使えば、熱いままのろ過のあいだにろ紙の上で結晶ができるのを防げます。温かい溶媒ですすぐと生成物が失われ、熱いままのろ過を省くと不純物が増えるだけです。</p>",
      misconception: {
        // EN (option C): Warm solvent dissolves more of the crystals, so the recovery falls further.
        "2": "温かい溶媒は結晶をより多く溶かすので、回収率はさらに下がります。",
        // EN (option E): Skipping hot filtration may add mass, but that mass is insoluble impurity, not product. The product becomes less pure.
        "4": "熱いままのろ過を省くと質量は増えるかもしれませんが、増えるのは溶けない不純物で、生成物ではありません。生成物の純度が下がります。",
      },
    },

    // ── lab-separation-q013 · short · challenge · SL · Structure 1.1.1 · 3 marks
    "lab-separation-q013": {
      // EN: <p>A student recrystallizes impure benzoic acid twice: once cooling the hot filtrate slowly, and once plunging it straight into an ice bath. The thermometer has an uncertainty of ±0.5 °C. The literature melting point is 122 °C.</p><div class="table-scroll"><table class="data"><caption>Results</caption><thead><tr><th scope="col">Cooling</th><th scope="col" class="num">Recovery / %</th><th scope="col" class="num">Melting range / °C</th></tr></thead><tbody><tr><th scope="row">slow, then ice bath</th><td class="num">78</td><td class="num">121.0–122.0</td></tr><tr><th scope="row">straight into ice bath</th><td class="num">80</td><td class="num">118.5–121.0</td></tr></tbody></table></div><p>Evaluate which cooling method is better, using the data.</p>
      stem: "<p>ある生徒が、不純物を含む安息香酸を 2 回再結晶します。1 回は熱いろ液をゆっくり冷まし、もう 1 回はすぐに氷浴に入れます。温度計の不確かさは ±0.5 °C です。融点の文献値は 122 °C です。</p><div class=\"table-scroll\"><table class=\"data\"><caption>結果</caption><thead><tr><th scope=\"col\">冷やし方</th><th scope=\"col\" class=\"num\">回収率 / %</th><th scope=\"col\" class=\"num\">融点範囲 / °C</th></tr></thead><tbody><tr><th scope=\"row\">ゆっくり、そのあと氷浴</th><td class=\"num\">78</td><td class=\"num\">121.0–122.0</td></tr><tr><th scope=\"row\">すぐに氷浴</th><td class=\"num\">80</td><td class=\"num\">118.5–121.0</td></tr></tbody></table></div><p>データを使って、どちらの冷やし方がよいかを評価しなさい (evaluate)。</p>",
      hints: [
        // EN: Compare both columns. Which difference is large compared with its uncertainty?
        "両方の列をくらべましょう。不確かさにくらべて大きいのは、どちらの違いですか。",
        // EN: What does a low, wide melting range tell you?
        "低くて広い融点範囲から、何がわかりますか。",
      ],
      // EN: <p>"Evaluate" means weigh up both sides. Fast cooling gains a little mass, but the melting range shows impurity is trapped in the small crystals. The 2 % gain may be partly the mass of the impurity itself.</p>
      solution: "<p>「評価しなさい (evaluate)」は、両方の面をくらべて判断するという意味です。速く冷やすと質量は少し増えますが、融点範囲から、小さな結晶に不純物が取りこまれていることがわかります。2 % の増加の一部は、不純物そのものの質量かもしれません。</p>",
      // EN: <p>The recoveries are similar (78 % and 80 %). Slow cooling gives a melting range of 1.0 °C that ends at 122 °C, within the ±0.5 °C uncertainty of the literature value, so the product is pure. Fast cooling gives a lower, wider range (2.5 °C, starting 3.5 °C below 122 °C), which is much bigger than the uncertainty, so impurity is present: small crystals formed quickly trap impure solution. Slow cooling is better because purity is the aim and the recovery is almost the same.</p>
      answer: "<p>回収率は同じくらいです（78 % と 80 %）。ゆっくり冷やすと、融点範囲は 1.0 °C で 122 °C で終わり、文献値との差は ±0.5 °C の不確かさの範囲に入るので、生成物は純粋です。速く冷やすと、範囲は低く広くなり（2.5 °C、始まりは 122 °C より 3.5 °C 低い）、この差は不確かさよりずっと大きいので、不純物が含まれています。急にできた小さな結晶が、不純物を含む溶液を取りこむからです。目的は純粋な生成物を得ることで、回収率はほとんど変わらないので、ゆっくり冷やすほうがよい方法です。</p>",
      markscheme: [
        // EN: Recoveries are similar / fast cooling gives only slightly more product (2 % more).
        "回収率は同じくらい / 速く冷やしても生成物はわずかに多いだけ（2 % 多い）。",
        // EN: Fast cooling gives a lower and wider melting range, so the product is less pure; the difference from 122 °C is larger than the ±0.5 °C uncertainty.
        "速く冷やすと融点範囲が低く広くなるので、生成物の純度が低い。122 °C との差は ±0.5 °C の不確かさより大きい。",
        // EN: Slow cooling is better / gives larger crystals that trap less impurity (and the aim is a pure product).
        "ゆっくり冷やすほうがよい / 大きな結晶ができ、不純物を取りこみにくい（目的は純粋な生成物を得ること）。",
      ],
    },

  }
});
