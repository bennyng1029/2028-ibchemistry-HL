/* lab-empirical-formula.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-empirical-formula.q', {
  questions: {

    // ── lab-empirical-formula-q001 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q001": {
      // EN: <p>A student burns magnesium ribbon in a crucible to find the empirical formula of magnesium oxide. The method says to lift the lid slightly, every minute or so, and then put it straight back.</p><p>What is the reason for this?</p>
      stem: "<p>ある生徒が、酸化マグネシウムの組成式を求めるために、るつぼの中でマグネシウムリボンを燃焼させます。方法には、1 分ほどごとにふたを少しだけ持ち上げ、すぐにもどすように書かれています。</p><p>その理由はどれですか。</p>",
      options: [
        // EN: To let water vapour escape from the crucible
        "るつぼから水蒸気を逃がすため",
        // EN: To let oxygen in while keeping most of the magnesium oxide in the crucible
        "酸化マグネシウムのほとんどをるつぼの中に残したまま、酸素を入れるため",
        // EN: To check whether the magnesium has melted
        "マグネシウムが融解したかどうかを確かめるため",
        // EN: To cool the crucible so that it does not crack
        "るつぼが割れないように冷やすため",
      ],
      hints: [
        // EN: Write the equation for the reaction. Which reactant comes from the air?
        "反応の化学反応式を書きましょう。空気からくる反応物はどれでしょうか。",
        // EN: What would you see escaping if the lid were left off?
        "ふたをしていなかったら、何が逃げていくのが見えるでしょうか。",
      ],
      // EN: <p>The reaction <span class="chem">2Mg + O2 -> 2MgO</span> needs oxygen from the air, so the lid must be lifted to let air in. But the product forms as a fine white smoke, so the lid must go straight back on to stop it escaping. Losing product would make the mass of oxygen too low.</p>
      solution: "<p>反応 <span class=\"chem\">2Mg + O2 -> 2MgO</span> には空気中の酸素が必要なので、ふたを持ち上げて空気を入れる必要があります。しかし、生成物は細かい白い煙になってできるので、逃げないようにすぐにふたをもどす必要があります。生成物が失われると、酸素の質量が低くなりすぎます。</p>",
      misconception: {
        // EN (option A): No water is formed when magnesium burns. The only reactant from the air that matters here is oxygen.
        "0": "マグネシウムが燃焼しても水はできません。ここで大切な、空気からくる反応物は酸素だけです。",
        // EN (option C): Whether the metal melts does not change the result. Think about what the reaction needs from the air, and what could be lost.
        "2": "金属が融解するかどうかは、結果を変えません。反応が空気から何を必要とするか、何が失われうるかを考えましょう。",
        // EN (option D): The crucible is designed to take strong heating. Lifting the lid is about the gases and the solid product.
        "3": "るつぼは強い加熱に耐えるようにできています。ふたを持ち上げるのは、気体と固体の生成物のためです。",
      },
    },

    // ── lab-empirical-formula-q002 · numeric · foundation · SL · Structure 1.4.3 · 2 marks
    "lab-empirical-formula-q002": {
      // EN: <p>A student heats magnesium in a crucible until the mass is constant. The balance reads to 0.01 g.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible and lid</th><td class="num">23.18</td></tr><tr><th scope="row">Crucible, lid and magnesium</th><td class="num">23.42</td></tr><tr><th scope="row">Crucible, lid and product (constant)</th><td class="num">23.58</td></tr></tbody></table></div><p>Calculate the amount, in mol, of oxygen atoms that combined with the magnesium. <i>A</i><sub>r</sub>(O) = 16.00</p>
      stem: "<p>ある生徒が、質量が一定になるまでるつぼの中でマグネシウムを加熱します。電子てんびんは 0.01 g まで読めます。</p><div class=\"table-scroll\"><table class=\"data\"><caption>生データ</caption><thead><tr><th scope=\"col\">測定</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">るつぼとふた</th><td class=\"num\">23.18</td></tr><tr><th scope=\"row\">るつぼ、ふた、マグネシウム</th><td class=\"num\">23.42</td></tr><tr><th scope=\"row\">るつぼ、ふた、生成物（一定）</th><td class=\"num\">23.58</td></tr></tbody></table></div><p>マグネシウムと結びついた酸素原子の物質量を mol で計算しなさい (calculate)。<i>A</i><sub>r</sub>(O) = 16.00</p>",
      hints: [
        // EN: The gain in mass from the magnesium reading to the final reading is the mass of oxygen.
        "マグネシウムを入れたときの読みから最後の読みまでに増えた質量が、酸素の質量です。",
        // EN: <i>n</i> = <i>m</i> ÷ <i>M</i> with the molar mass of oxygen atoms, 16.00 <span class="unit">g mol-1</span>.
        "<i>n</i> = <i>m</i> ÷ <i>M</i> を、酸素原子のモル質量 16.00 <span class=\"unit\">g mol-1</span> で使います。",
      ],
      // EN: <div class="worked__math">mass of O = 23.58 <span class="unit">g</span> − 23.42 <span class="unit">g</span> = 0.16 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(O) = 0.16 <span class="unit">g</span> ÷ 16.00 <span class="unit">g mol-1</span> = 0.010 <span class="unit">mol</span></div><p>Use the mass of oxygen <em>atoms</em> (16.00), because the question asks for atoms. 0.16 g has 2 significant figures, so the answer is 0.010 mol.</p>
      solution: "<div class=\"worked__math\">O の質量 = 23.58 <span class=\"unit\">g</span> − 23.42 <span class=\"unit\">g</span> = 0.16 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(O) = 0.16 <span class=\"unit\">g</span> ÷ 16.00 <span class=\"unit\">g mol-1</span> = 0.010 <span class=\"unit\">mol</span></div><p>問われているのは原子なので、酸素<em>原子</em>の質量（16.00）を使います。0.16 g は有効数字 2 桁なので、答えは 0.010 mol です。</p>",
    },

    // ── lab-empirical-formula-q003 · short · exam · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q003": {
      // EN: <p>A student uses a balance that reads to 0.001 g.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible and lid</th><td class="num">25.317</td></tr><tr><th scope="row">Crucible, lid and magnesium</th><td class="num">25.803</td></tr><tr><th scope="row">After heating to constant mass</th><td class="num">26.111</td></tr></tbody></table></div><p>Determine the empirical formula of the oxide. Show your working. <i>A</i><sub>r</sub>: Mg = 24.31, O = 16.00</p>
      stem: "<p>ある生徒が、0.001 g まで読める電子てんびんを使います。</p><div class=\"table-scroll\"><table class=\"data\"><caption>生データ</caption><thead><tr><th scope=\"col\">測定</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">るつぼとふた</th><td class=\"num\">25.317</td></tr><tr><th scope=\"row\">るつぼ、ふた、マグネシウム</th><td class=\"num\">25.803</td></tr><tr><th scope=\"row\">質量が一定になるまで加熱したあと</th><td class=\"num\">26.111</td></tr></tbody></table></div><p>この酸化物の組成式を求めなさい (determine)。途中の計算を示しなさい。<i>A</i><sub>r</sub>：Mg = 24.31、O = 16.00</p>",
      hints: [
        // EN: First find two masses: magnesium (before heating) and oxygen (the gain on heating).
        "まず 2 つの質量を求めます。マグネシウム（加熱する前）と酸素（加熱で増えた分）です。",
        // EN: Convert each mass to moles, then divide both by the smaller amount.
        "それぞれの質量を物質量に直し、両方を小さいほうの物質量で割ります。",
      ],
      // EN: <div class="worked__math">mass of Mg = 25.803 <span class="unit">g</span> − 25.317 <span class="unit">g</span> = 0.486 <span class="unit">g</span></div><div class="worked__math">mass of O = 26.111 <span class="unit">g</span> − 25.803 <span class="unit">g</span> = 0.308 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.01999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(O) = 0.308 ÷ 16.00 = 0.01925 <span class="unit">mol</span></div><div class="worked__math">Mg : O = 0.01999 ÷ 0.01925 : 1 = 1.04 : 1</div><p>1.04 is within experimental error of 1, so the empirical formula is <span class="chem">MgO</span>.</p>
      solution: "<div class=\"worked__math\">Mg の質量 = 25.803 <span class=\"unit\">g</span> − 25.317 <span class=\"unit\">g</span> = 0.486 <span class=\"unit\">g</span></div><div class=\"worked__math\">O の質量 = 26.111 <span class=\"unit\">g</span> − 25.803 <span class=\"unit\">g</span> = 0.308 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.01999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(O) = 0.308 ÷ 16.00 = 0.01925 <span class=\"unit\">mol</span></div><div class=\"worked__math\">Mg : O = 0.01999 ÷ 0.01925 : 1 = 1.04 : 1</div><p>1.04 は実験の誤差の範囲で 1 と見なせるので、組成式は <span class=\"chem\">MgO</span> です。</p>",
      // EN: <p>mass of Mg = 25.803 − 25.317 = 0.486 g; mass of O = 26.111 − 25.803 = 0.308 g.</p><p><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.0200 mol; <i>n</i>(O) = 0.308 ÷ 16.00 = 0.0193 mol.</p><p>Mg : O = 1.04 : 1 ≈ 1 : 1, so the empirical formula is <span class="chem">MgO</span>.</p>
      answer: "<p>Mg の質量 = 25.803 − 25.317 = 0.486 g、O の質量 = 26.111 − 25.803 = 0.308 g。</p><p><i>n</i>(Mg) = 0.486 ÷ 24.31 = 0.0200 mol、<i>n</i>(O) = 0.308 ÷ 16.00 = 0.0193 mol。</p><p>Mg : O = 1.04 : 1 ≈ 1 : 1、よって組成式は <span class=\"chem\">MgO</span>。</p>",
      markscheme: [
        // EN: M1: mass of Mg = 0.486 g AND mass of O = 0.308 g.
        "M1：Mg の質量 = 0.486 g かつ O の質量 = 0.308 g。",
        // EN: M2: n(Mg) = 0.0200 mol AND n(O) = 0.0193 mol (ECF from M1).
        "M2：n(Mg) = 0.0200 mol かつ n(O) = 0.0193 mol（M1 からの誤りの持ち越し (ECF)）。",
        // EN: M3: ratio close to 1 : 1, so MgO. (Award [3] for a correct final answer with working.)
        "M3：比が 1 : 1 に近いので MgO。（途中の計算があり、最終的な答えが正しければ [3]。）",
      ],
    },

    // ── lab-empirical-formula-q004 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q004": {
      // EN: <p>During the magnesium experiment, a small part of the magnesium reacts with nitrogen in the air to form magnesium nitride, <span class="chem">Mg3N2</span>, instead of magnesium oxide.</p><p>What is the effect on the experimental ratio <i>n</i>(O) : <i>n</i>(Mg), and why?</p>
      stem: "<p>マグネシウムの実験中に、マグネシウムのごく一部が、酸化マグネシウムではなく、空気中の窒素と反応して窒化マグネシウム <span class=\"chem\">Mg3N2</span> になります。</p><p>実験で求めた比 <i>n</i>(O) : <i>n</i>(Mg) はどうなりますか。また、その理由は何ですか。</p>",
      options: [
        // EN: Higher, because the nitrogen adds extra mass to the product
        "高くなる。窒素が生成物に余分な質量を加えるから",
        // EN: Lower, because forming the nitride adds less mass for each mole of magnesium than forming the oxide
        "低くなる。窒化物ができると、マグネシウム 1 mol あたりに増える質量が、酸化物ができる場合より小さいから",
        // EN: No change, because the student only calculates the amount of oxygen
        "変わらない。生徒は酸素の物質量しか計算しないから",
        // EN: Lower, because the nitrogen escapes as a gas
        "低くなる。窒素は気体として逃げるから",
      ],
      hints: [
        // EN: The student assumes every gram gained is oxygen.
        "生徒は、増えた質量はすべて酸素だと考えています。",
        // EN: Compare the mass gained by 3 mol of Mg when it forms Mg₃N₂ and when it forms 3 MgO.
        "Mg 3 mol が Mg₃N₂ になるときと、3 MgO になるときに増える質量をくらべましょう。",
      ],
      // EN: <p>3 mol of Mg gain 2 × 14.01 = 28.02 g as <span class="chem">Mg3N2</span>, but 3 × 16.00 = 48.00 g as 3 <span class="chem">MgO</span>. So the total mass gain is smaller than it should be. The student counts all of the gain as oxygen, so the calculated amount of oxygen is too low and the ratio O : Mg is <strong>too low</strong>.</p><p>Improvement: add a few drops of distilled water to the cooled product and heat again. The nitride is converted to the oxide.</p>
      solution: "<p>Mg 3 mol は、<span class=\"chem\">Mg3N2</span> になると 2 × 14.01 = 28.02 g 増えますが、3 <span class=\"chem\">MgO</span> になると 3 × 16.00 = 48.00 g 増えます。そのため、増えた質量の合計は本来より小さくなります。生徒は増えた分をすべて酸素として数えるので、計算した酸素の物質量が低くなりすぎ、比 O : Mg は<strong>低くなりすぎます</strong>。</p><p>改善策：冷ました生成物に蒸留水を数滴加え、もう一度加熱します。窒化物は酸化物に変わります。</p>",
      misconception: {
        // EN (option A): The nitrogen does add mass, but compare it with the mass the oxide would have added for the same magnesium. 3 mol of Mg gain 28.02 g as Mg₃N₂ but 48.00 g as 3 mol of MgO.
        "0": "窒素は質量を加えますが、同じマグネシウムから酸化物ができた場合に増える質量とくらべましょう。Mg 3 mol は、Mg₃N₂ になると 28.02 g 増えますが、MgO 3 mol になると 48.00 g 増えます。",
        // EN (option C): The student does not know that any nitride has formed. All of the mass gain is counted as oxygen, so the nitride does change the calculated ratio.
        "2": "生徒は、窒化物ができたことを知りません。増えた質量はすべて酸素として数えられるので、窒化物は計算した比を変えてしまいます。",
        // EN (option D): The nitrogen stays in the solid as nitride ions. It is the smaller mass gain that matters.
        "3": "窒素は窒化物イオンとして固体の中に残ります。問題なのは、増える質量が小さいことです。",
      },
    },

    // ── lab-empirical-formula-q005 · numeric · exam · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q005": {
      // EN: <p>A student heats hydrated magnesium sulfate, <span class="chem">MgSO4.xH2O</span>, to constant mass.</p><div class="table-scroll"><table class="data"><caption>Raw data</caption><thead><tr><th scope="col">Reading</th><th scope="col" class="num">Mass / g</th></tr></thead><tbody><tr><th scope="row">Crucible</th><td class="num">15.62</td></tr><tr><th scope="row">Crucible and hydrate</th><td class="num">19.32</td></tr><tr><th scope="row">Crucible and anhydrous salt (constant)</th><td class="num">17.43</td></tr></tbody></table></div><p>Calculate the value of <i>x</i>, to the nearest whole number. <i>M</i>(<span class="chem">MgSO4</span>) = 120.38 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span></p>
      stem: "<p>ある生徒が、硫酸マグネシウム水和物 <span class=\"chem\">MgSO4.xH2O</span> を質量が一定になるまで加熱します。</p><div class=\"table-scroll\"><table class=\"data\"><caption>生データ</caption><thead><tr><th scope=\"col\">測定</th><th scope=\"col\" class=\"num\">質量 / g</th></tr></thead><tbody><tr><th scope=\"row\">るつぼ</th><td class=\"num\">15.62</td></tr><tr><th scope=\"row\">るつぼと水和物</th><td class=\"num\">19.32</td></tr><tr><th scope=\"row\">るつぼと無水塩（一定）</th><td class=\"num\">17.43</td></tr></tbody></table></div><p><i>x</i> の値を、最も近い整数で計算しなさい (calculate)。<i>M</i>(<span class=\"chem\">MgSO4</span>) = 120.38 <span class=\"unit\">g mol-1</span>、<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Mass of anhydrous salt = final − crucible. Mass of water = (crucible + hydrate) − final.
        "無水塩の質量 = 最後の質量 − るつぼ。水の質量 = (るつぼ + 水和物) − 最後の質量。",
        // EN: x = n(H₂O) ÷ n(MgSO₄).
        "x = n(H₂O) ÷ n(MgSO₄)。",
      ],
      // EN: <div class="worked__math">mass of <span class="chem">MgSO4</span> = 17.43 − 15.62 = 1.81 <span class="unit">g</span></div><div class="worked__math">mass of water = 19.32 − 17.43 = 1.89 <span class="unit">g</span></div><div class="worked__math"><i>n</i>(<span class="chem">MgSO4</span>) = 1.81 ÷ 120.38 = 0.01504 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(<span class="chem">H2O</span>) = 1.89 ÷ 18.02 = 0.1049 <span class="unit">mol</span></div><div class="worked__math"><i>x</i> = 0.1049 ÷ 0.01504 = 6.98</div><p>To the nearest whole number, <i>x</i> = <strong>7</strong>: <span class="chem">MgSO4.7H2O</span>.</p>
      solution: "<div class=\"worked__math\"><span class=\"chem\">MgSO4</span> の質量 = 17.43 − 15.62 = 1.81 <span class=\"unit\">g</span></div><div class=\"worked__math\">水の質量 = 19.32 − 17.43 = 1.89 <span class=\"unit\">g</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">MgSO4</span>) = 1.81 ÷ 120.38 = 0.01504 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(<span class=\"chem\">H2O</span>) = 1.89 ÷ 18.02 = 0.1049 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>x</i> = 0.1049 ÷ 0.01504 = 6.98</div><p>最も近い整数にすると、<i>x</i> = <strong>7</strong>：<span class=\"chem\">MgSO4.7H2O</span>。</p>",
    },

    // ── lab-empirical-formula-q006 · short · foundation · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q006": {
      // EN: <p>A student heats hydrated copper(II) sulfate and weighs it after each heating, on a balance that reads to 0.01 g. The last two readings are 20.14 g and then 20.12 g.</p><p>State and explain whether the student can stop heating.</p>
      stem: "<p>ある生徒が、硫酸銅(II) 水和物を加熱し、加熱するたびに 0.01 g まで読める電子てんびんで質量をはかります。最後の 2 回の読みは 20.14 g、続いて 20.12 g でした。</p><p>生徒が加熱をやめてよいかどうかを述べ、説明しなさい (state and explain)。</p>",
      hints: [
        // EN: How big is the difference between the readings, compared with what the balance can show?
        "読みの差は、電子てんびんが示せる値にくらべてどれくらいの大きさでしょうか。",
        // EN: What does a falling mass tell you about the water?
        "質量が減っていることは、水について何を示しているでしょうか。",
      ],
      // EN: <p>Constant mass means two consecutive readings agree within the balance’s precision. 20.14 g and 20.12 g differ by 0.02 g, so the mass is still going down: not all of the water has gone yet. Stopping now would make the mass of water too small and <i>x</i> too low.</p>
      solution: "<p>質量が一定とは、続けて 2 回の読みが電子てんびんの精密さの範囲で一致することです。20.14 g と 20.12 g は 0.02 g 違うので、質量はまだ減っています。水がまだすべてはなくなっていないのです。ここでやめると、水の質量が小さくなりすぎ、<i>x</i> が低くなりすぎます。</p>",
      // EN: <p>No. The two readings differ by 0.02 g, which is more than the precision of the balance, so the mass is still falling and some water is still present. The student should heat, cool and weigh again until two readings in a row agree (within 0.01 g).</p>
      answer: "<p>やめてはいけません。2 回の読みは 0.02 g 違い、これは電子てんびんの精密さより大きいので、質量はまだ減っていて、水がまだ残っています。生徒は、続けて 2 回の読みが（0.01 g 以内で）一致するまで、加熱し、冷まし、はかることをくり返すべきです。</p>",
      markscheme: [
        // EN: No: the mass is still decreasing / the readings are not the same within 0.01 g.
        "やめてはいけない：質量がまだ減っている / 読みが 0.01 g 以内で同じになっていない。",
        // EN: Some water of crystallization is still present, so heat, cool and reweigh until two consecutive masses agree.
        "水和水がまだ残っているので、続けて 2 回の質量が一致するまで、加熱し、冷まし、はかりなおす。",
      ],
    },

    // ── lab-empirical-formula-q007 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q007": {
      // EN: <p>A student heats hydrated copper(II) sulfate very strongly. The white powder starts to turn black, because some <span class="chem">CuSO4</span> decomposes into <span class="chem">CuO</span> and gaseous <span class="chem">SO3</span>.</p><p>What is the effect on the calculated value of <i>x</i>?</p>
      stem: "<p>ある生徒が、硫酸銅(II) 水和物をとても強く加熱します。<span class=\"chem\">CuSO4</span> の一部が <span class=\"chem\">CuO</span> と気体の <span class=\"chem\">SO3</span> に分解するので、白い粉末が黒くなりはじめます。</p><p>計算した <i>x</i> の値はどうなりますか。</p>",
      options: [
        // EN: Too high, because the extra loss of mass is counted as water
        "高すぎる。余分に失われた質量が水として数えられるから",
        // EN: Too low, because copper(II) oxide is heavier than copper(II) sulfate
        "低すぎる。酸化銅(II) は硫酸銅(II) より重いから",
        // EN: No effect, because all of the water has still been removed
        "影響はない。水はやはりすべて取り除かれているから",
        // EN: Too low, because less water is lost
        "低すぎる。失われる水が少なくなるから",
      ],
      hints: [
        // EN: Does decomposition make the solid lighter or heavier?
        "分解すると、固体は軽くなるでしょうか、重くなるでしょうか。",
        // EN: The student calculates the mass of water as (mass before) − (mass after).
        "生徒は、水の質量を（加熱前の質量）−（加熱後の質量）で計算します。",
      ],
      // EN: <p>Losing <span class="chem">SO3</span> makes the final mass too low. So the mass of “water” (before − after) is too high, and the mass of anhydrous salt is too low. Both changes make <i>x</i> = <i>n</i>(<span class="chem">H2O</span>) ÷ <i>n</i>(<span class="chem">CuSO4</span>) <strong>too high</strong>. Heat gently and stop when the solid is white all through.</p>
      solution: "<p><span class=\"chem\">SO3</span> が失われると、最後の質量が低くなりすぎます。すると、「水」の質量（加熱前 − 加熱後）は大きくなりすぎ、無水塩の質量は小さくなりすぎます。どちらの変化も、<i>x</i> = <i>n</i>(<span class=\"chem\">H2O</span>) ÷ <i>n</i>(<span class=\"chem\">CuSO4</span>) を<strong>高くしすぎます</strong>。おだやかに加熱し、固体が全体に白くなったらやめましょう。</p>",
      misconception: {
        // EN (option B): One mole of CuO (79.55 g) is lighter than one mole of CuSO₄ (159.62 g). Decomposition makes the solid lighter, not heavier.
        "1": "CuO 1 mol（79.55 g）は CuSO₄ 1 mol（159.62 g）より軽いです。分解すると固体は軽くなり、重くはなりません。",
        // EN (option C): The water has gone, but extra mass has gone too. The student cannot tell the two losses apart.
        "2": "水はなくなっていますが、余分な質量もなくなっています。生徒には、2 つの損失を区別できません。",
        // EN (option D): The water is all lost. The question is what happens to the mass of the solid left behind.
        "3": "水はすべて失われています。問題は、あとに残った固体の質量がどうなるかです。",
      },
    },

    // ── lab-empirical-formula-q008 · mcq · exam · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q008": {
      // EN: <p>A student lets the hot anhydrous copper(II) sulfate cool on the open bench for 20 minutes before each weighing. What is the most likely effect on the value of <i>x</i>?</p>
      stem: "<p>ある生徒が、熱い無水硫酸銅(II) を、質量をはかる前に毎回、実験台の上で 20 分間冷まします。<i>x</i> の値はどうなる可能性が最も高いですか。</p>",
      options: [
        // EN: Too high, because the solid loses more water as it cools slowly
        "高すぎる。ゆっくり冷えるあいだに、固体がさらに水を失うから",
        // EN: Too low, because the solid absorbs water from the air, so the final mass is too high
        "低すぎる。固体が空気中の水を吸収するので、最後の質量が高すぎるから",
        // EN: Too low, because the hot crucible makes the balance read high
        "低すぎる。熱いるつぼのせいで、電子てんびんの読みが高くなるから",
        // EN: No effect, because the solid was already weighed hot
        "影響はない。固体はすでに熱いうちにはかってあるから",
      ],
      hints: [
        // EN: Anhydrous copper(II) sulfate is used as a test for water. What does it do in moist air?
        "無水硫酸銅(II) は水の検出に使われます。湿った空気の中では何をするでしょうか。",
        // EN: If the final mass is too high, is the calculated mass of water too high or too low?
        "最後の質量が高すぎると、計算した水の質量は高すぎるでしょうか、低すぎるでしょうか。",
      ],
      // EN: <p>Anhydrous copper(II) sulfate takes water back from the air. So the final mass is too high, the calculated mass of water is too low and the anhydrous mass is too high. <i>x</i> comes out <strong>too low</strong>. Cool the crucible in a desiccator and weigh it as soon as it is cool.</p>
      solution: "<p>無水硫酸銅(II) は、空気中の水を取りこんでもどります。そのため、最後の質量が高すぎ、計算した水の質量は低すぎ、無水塩の質量は高すぎます。<i>x</i> は<strong>低くなりすぎます</strong>。るつぼはデシケーターの中で冷まし、冷めたらすぐに質量をはかりましょう。</p>",
      misconception: {
        // EN (option A): Once the solid is cool it is no longer losing water. Anhydrous copper(II) sulfate does the opposite in moist air.
        "0": "冷めた固体は、もう水を失いません。湿った空気の中では、無水硫酸銅(II) は逆のことをします。",
        // EN (option C): Weighing a hot crucible does give wrong readings, but this student waited until it was cool. Think about what the solid does in air.
        "2": "熱いるつぼをはかると、たしかに読みは正しくなりませんが、この生徒は冷めるまで待ちました。空気の中で固体が何をするかを考えましょう。",
        // EN (option D): The solid is weighed after it cools, so anything it gains while cooling is in the reading.
        "3": "固体は冷めてからはかるので、冷めるあいだに増えた分は読みに含まれます。",
      },
    },

    // ── lab-empirical-formula-q009 · numeric · exam · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q009": {
      // EN: <p>In a hydrate experiment, the crucible and hydrate weigh 22.46 g before heating and 21.31 g at constant mass. The balance reads to ±0.01 g.</p><p>Calculate the percentage uncertainty in the mass of water lost.</p>
      stem: "<p>水和物の実験で、るつぼと水和物の質量は、加熱前が 22.46 g、質量が一定になったときが 21.31 g です。電子てんびんは ±0.01 g まで読めます。</p><p>失われた水の質量の百分率の不確かさを計算しなさい (calculate)。</p>",
      hints: [
        // EN: The mass of water is a difference of two readings. Add their absolute uncertainties.
        "水の質量は 2 つの読みの差です。それぞれの絶対不確かさを足しましょう。",
        // EN: Percentage uncertainty = absolute uncertainty ÷ value × 100.
        "百分率の不確かさ = 絶対不確かさ ÷ 値 × 100。",
      ],
      // EN: <div class="worked__math">mass of water = 22.46 − 21.31 = 1.15 <span class="unit">g</span></div><div class="worked__math">absolute uncertainty = ±0.01 + ±0.01 = ±0.02 <span class="unit">g</span></div><div class="worked__math">percentage uncertainty = 0.02 ÷ 1.15 × 100 = 1.7 %</div><p>A common slip is to use ±0.01 g. Every mass found by difference uses two readings.</p>
      solution: "<div class=\"worked__math\">水の質量 = 22.46 − 21.31 = 1.15 <span class=\"unit\">g</span></div><div class=\"worked__math\">絶対不確かさ = ±0.01 + ±0.01 = ±0.02 <span class=\"unit\">g</span></div><div class=\"worked__math\">百分率の不確かさ = 0.02 ÷ 1.15 × 100 = 1.7 %</div><p>よくある間違いは、±0.01 g を使うことです。差から求める質量には、必ず 2 つの読みを使います。</p>",
    },

    // ── lab-empirical-formula-q010 · numeric · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q010": {
      // EN: <p>A student’s experiment gives <i>x</i> = 4.60 for hydrated copper(II) sulfate. The accepted formula is <span class="chem">CuSO4.5H2O</span>.</p><p>Calculate the percentage error.</p>
      stem: "<p>ある生徒の実験では、硫酸銅(II) 水和物について <i>x</i> = 4.60 になりました。認められている化学式は <span class=\"chem\">CuSO4.5H2O</span> です。</p><p>百分率誤差を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Percentage error = |experimental − accepted| ÷ accepted × 100.
        "百分率誤差 = |実験値 − 認められている値| ÷ 認められている値 × 100。",
      ],
      // EN: <div class="worked__math">percentage error = |4.60 − 5| ÷ 5 × 100 = 8.0 %</div><p>The difference is always divided by the <em>accepted</em> value, not by the student’s value.</p>
      solution: "<div class=\"worked__math\">百分率誤差 = |4.60 − 5| ÷ 5 × 100 = 8.0 %</div><p>差は必ず<em>認められている</em>値で割ります。生徒の値で割るのではありません。</p>",
    },

    // ── lab-empirical-formula-q011 · short · challenge · SL · Structure 1.4.4 · 3 marks
    "lab-empirical-formula-q011": {
      // EN: <p>A 0.580 g sample of a hydrocarbon is burned completely in excess oxygen. The products are 1.760 g of <span class="chem">CO2</span> and 0.900 g of <span class="chem">H2O</span>.</p><p>Determine the empirical formula of the hydrocarbon. <i>M</i>(<span class="chem">CO2</span>) = 44.01 <span class="unit">g mol-1</span>, <i>M</i>(<span class="chem">H2O</span>) = 18.02 <span class="unit">g mol-1</span>, <i>A</i><sub>r</sub>: C = 12.01, H = 1.01</p>
      stem: "<p>炭化水素の試料 0.580 g を、過剰の酸素中で完全燃焼させます。生成物は <span class=\"chem\">CO2</span> 1.760 g と <span class=\"chem\">H2O</span> 0.900 g です。</p><p>この炭化水素の組成式を求めなさい (determine)。<i>M</i>(<span class=\"chem\">CO2</span>) = 44.01 <span class=\"unit\">g mol-1</span>、<i>M</i>(<span class=\"chem\">H2O</span>) = 18.02 <span class=\"unit\">g mol-1</span>、<i>A</i><sub>r</sub>：C = 12.01、H = 1.01</p>",
      hints: [
        // EN: All the carbon ends up in CO₂ and all the hydrogen in H₂O.
        "炭素はすべて CO₂ に、水素はすべて H₂O になります。",
        // EN: Each H₂O molecule holds two H atoms. Your ratio will not be a whole number at first.
        "H₂O 分子 1 個には H 原子が 2 個含まれます。比は、最初は整数になりません。",
      ],
      // EN: <div class="worked__math"><i>n</i>(C) = 1.760 ÷ 44.01 = 0.03999 <span class="unit">mol</span></div><div class="worked__math"><i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 2 × 0.04994 = 0.09989 <span class="unit">mol</span></div><div class="worked__math">C : H = 1 : (0.09989 ÷ 0.03999) = 1 : 2.50</div><p>2.50 is not close to a whole number, so it is a real ratio: multiply by 2 to get 2 : 5. The empirical formula is <span class="chem">C2H5</span>.</p><p>Check for oxygen: mass of C + H = 0.03999 × 12.01 + 0.09989 × 1.01 = 0.480 + 0.101 = 0.581 g. This equals the sample mass within the precision of the data, so the compound contains no oxygen, as expected for a hydrocarbon.</p>
      solution: "<div class=\"worked__math\"><i>n</i>(C) = 1.760 ÷ 44.01 = 0.03999 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 2 × 0.04994 = 0.09989 <span class=\"unit\">mol</span></div><div class=\"worked__math\">C : H = 1 : (0.09989 ÷ 0.03999) = 1 : 2.50</div><p>2.50 は整数に近くないので、本当の比です。2 をかけて 2 : 5 にします。組成式は <span class=\"chem\">C2H5</span> です。</p><p>酸素がないか確かめます：C + H の質量 = 0.03999 × 12.01 + 0.09989 × 1.01 = 0.480 + 0.101 = 0.581 g。これはデータの精密さの範囲で試料の質量に等しいので、炭化水素で予想されるとおり、この化合物は酸素を含みません。</p>",
      // EN: <p><i>n</i>(C) = 1.760 ÷ 44.01 = 0.0400 mol. <i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 0.0999 mol.</p><p>C : H = 1 : 2.50 = 2 : 5. Empirical formula <span class="chem">C2H5</span>. (Check: 0.0400 × 12.01 + 0.0999 × 1.01 = 0.581 g, the mass of the sample, so there is no oxygen.)</p>
      answer: "<p><i>n</i>(C) = 1.760 ÷ 44.01 = 0.0400 mol。<i>n</i>(H) = 2 × (0.900 ÷ 18.02) = 0.0999 mol。</p><p>C : H = 1 : 2.50 = 2 : 5。組成式は <span class=\"chem\">C2H5</span>。（確認：0.0400 × 12.01 + 0.0999 × 1.01 = 0.581 g で試料の質量に等しいので、酸素は含まれない。）</p>",
      markscheme: [
        // EN: M1: n(C) = n(CO₂) = 0.0400 mol.
        "M1：n(C) = n(CO₂) = 0.0400 mol。",
        // EN: M2: n(H) = 2 × n(H₂O) = 0.0999 mol.
        "M2：n(H) = 2 × n(H₂O) = 0.0999 mol。",
        // EN: M3: C : H = 1 : 2.5 = 2 : 5, so C₂H₅. (Do not accept CH₂ or CH₃: 2.5 must be multiplied up, not rounded.)
        "M3：C : H = 1 : 2.5 = 2 : 5、よって C₂H₅。（CH₂ や CH₃ は不可：2.5 は丸めずに整数をかける。）",
      ],
    },

    // ── lab-empirical-formula-q012 · mcq · foundation · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q012": {
      // EN: <p>A student heats iron in oxygen and calculates the mole ratio Fe : O = 1 : 1.48. Which empirical formula fits the data best?</p>
      stem: "<p>ある生徒が、鉄を酸素中で加熱し、物質量の比 Fe : O = 1 : 1.48 を求めました。データに最もよく合う組成式はどれですか。</p>",
      options: [
        // EN: <span class="chem">FeO</span>
        "<span class=\"chem\">FeO</span>",
        // EN: <span class="chem">Fe2O3</span>
        "<span class=\"chem\">Fe2O3</span>",
        // EN: <span class="chem">Fe3O4</span>
        "<span class=\"chem\">Fe3O4</span>",
        // EN: <span class="chem">Fe3O2</span>
        "<span class=\"chem\">Fe3O2</span>",
      ],
      hints: [
        // EN: Is 1.48 close to a whole number? Is it close to a simple fraction?
        "1.48 は整数に近いでしょうか。簡単な分数に近いでしょうか。",
        // EN: 1.5 = 3/2. Multiply both sides of the ratio by 2.
        "1.5 = 3/2 です。比の両方に 2 をかけましょう。",
      ],
      // EN: <p>1.48 is very close to 1.5. Multiply both numbers by 2: Fe : O = 2 : 2.96 ≈ 2 : 3. The empirical formula is <span class="chem">Fe2O3</span>. Ratios such as 1.5, 1.33 and 1.25 must be multiplied up, not rounded.</p>
      solution: "<p>1.48 は 1.5 にとても近い値です。両方の数に 2 をかけると、Fe : O = 2 : 2.96 ≈ 2 : 3 になります。組成式は <span class=\"chem\">Fe2O3</span> です。1.5、1.33、1.25 のような比は、丸めずに整数をかける必要があります。</p>",
      misconception: {
        // EN (option A): Rounding 1.48 to 1 throws away a real difference of almost 50 %. That is far too big to be experimental error.
        "0": "1.48 を 1 に丸めると、50 % 近い本当の差を捨ててしまいます。実験の誤差としては大きすぎます。",
        // EN (option C): Fe₃O₄ has Fe : O = 1 : 1.33. Your value 1.48 is much closer to another simple ratio.
        "2": "Fe₃O₄ では Fe : O = 1 : 1.33 です。あなたの値 1.48 は、別の簡単な比にずっと近い値です。",
        // EN (option D): In Fe₃O₂ there is less oxygen than iron, so O ÷ Fe would be below 1.
        "3": "Fe₃O₂ では酸素が鉄より少ないので、O ÷ Fe は 1 より小さくなります。",
      },
    },

    // ── lab-empirical-formula-q013 · short · exam · SL · Structure 1.4.4 · 2 marks
    "lab-empirical-formula-q013": {
      // EN: <p>In the magnesium experiment, a student uses 0.24 g of magnesium and a balance that reads to 0.01 g. The mass of oxygen gained is 0.16 g, with an uncertainty of ±0.02 g (12.5 %).</p><p>Suggest <strong>two</strong> changes to the method that would reduce the percentage uncertainty in the mass of oxygen. Explain one of them.</p>
      stem: "<p>マグネシウムの実験で、ある生徒が 0.24 g のマグネシウムと 0.01 g まで読める電子てんびんを使います。増えた酸素の質量は 0.16 g で、不確かさは ±0.02 g（12.5 %）です。</p><p>酸素の質量の百分率の不確かさを小さくするための方法の変更を <strong>2 つ</strong>提案しなさい (suggest)。そのうち 1 つを説明しなさい (explain)。</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty ÷ value × 100. Which two numbers in that fraction could you change?
        "百分率の不確かさ = 絶対不確かさ ÷ 値 × 100。この分数のうち、変えられる 2 つの数はどれでしょうか。",
      ],
      // EN: <p>Percentage uncertainty = absolute uncertainty ÷ measured value × 100. To make it smaller you can make the top smaller (a balance reading to 0.001 g gives ±0.002 g for a difference) or the bottom bigger (more magnesium gives more oxygen). With 0.48 g of Mg and a 0.01 g balance, the uncertainty in about 0.32 g of oxygen falls to about 6 %.</p>
      solution: "<p>百分率の不確かさ = 絶対不確かさ ÷ 測定値 × 100。これを小さくするには、分子を小さくする（0.001 g まで読める電子てんびんなら、差の不確かさは ±0.002 g）か、分母を大きくする（マグネシウムが多いほど酸素も多くなる）ことができます。Mg 0.48 g と 0.01 g の電子てんびんなら、約 0.32 g の酸素の不確かさは約 6 % に下がります。</p>",
      // EN: <p>Use a longer piece of magnesium ribbon (a bigger sample), and use a balance that reads to 0.001 g. With a bigger sample the mass of oxygen is larger, but the absolute uncertainty of the balance stays the same, so it is a smaller percentage.</p>
      answer: "<p>長いマグネシウムリボン（多い試料）を使い、0.001 g まで読める電子てんびんを使います。試料が多いと酸素の質量は大きくなりますが、電子てんびんの絶対不確かさは同じなので、百分率では小さくなります。</p>",
      markscheme: [
        // EN: Two valid changes: a larger mass of magnesium / longer ribbon AND a more precise balance (0.001 g).
        "正しい変更 2 つ：マグネシウムの質量を大きくする / リボンを長くする、かつ、より精密な電子てんびん（0.001 g）を使う。",
        // EN: Explanation: the same absolute uncertainty is a smaller fraction of a larger mass / a 0.001 g balance has a ten times smaller absolute uncertainty. (Repeating and averaging reduces random error but does not change the uncertainty of one reading; accept it only as a third point.)
        "説明：同じ絶対不確かさでも、大きな質量に対しては小さな割合になる / 0.001 g の電子てんびんは絶対不確かさが 10 分の 1 になる。（くり返して平均をとると偶然誤差は小さくなるが、1 回の読みの不確かさは変わらない。3 つ目のポイントとしてのみ可。）",
      ],
    },

    // ── lab-empirical-formula-q014 · mcq · challenge · SL · Structure 1.4.4 · 1 mark
    "lab-empirical-formula-q014": {
      // EN: <p>A student finds the ratio <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 ± 0.14 for magnesium oxide. The expected value is 1.00. Which conclusion is best supported?</p>
      stem: "<p>ある生徒が、酸化マグネシウムについて比 <i>n</i>(O) ÷ <i>n</i>(Mg) = 0.93 ± 0.14 を求めました。予想される値は 1.00 です。最もよく裏づけられる結論はどれですか。</p>",
      options: [
        // EN: There must be a systematic error, because the result is not 1.00
        "結果が 1.00 ではないので、系統誤差があるはずだ",
        // EN: The result agrees with MgO within its uncertainty, so random error could explain the difference
        "結果は不確かさの範囲で MgO と一致しているので、差は偶然誤差で説明できる",
        // EN: The formula of the oxide is not MgO, because the percentage error is 7 %
        "百分率誤差が 7 % なので、酸化物の化学式は MgO ではない",
        // EN: The uncertainty is too large to say anything, so the data should be discarded
        "不確かさが大きすぎて何もいえないので、データは捨てるべきだ",
      ],
      hints: [
        // EN: Work out the range of values the uncertainty allows: 0.93 − 0.14 to 0.93 + 0.14.
        "不確かさが許す値の範囲を求めましょう：0.93 − 0.14 から 0.93 + 0.14 まで。",
        // EN: Is 1.00 inside that range?
        "1.00 はその範囲に入っているでしょうか。",
      ],
      // EN: <p>The uncertainty gives a range of 0.79 to 1.07. The expected value 1.00 lies inside it. So the result is consistent with <span class="chem">MgO</span>, and the 7 % difference can be explained by random error alone. To test for a systematic error, the uncertainty must first be made smaller: more magnesium and a 0.001 g balance.</p>
      solution: "<p>不確かさから、範囲は 0.79〜1.07 になります。予想される値 1.00 はその中に入っています。したがって、結果は <span class=\"chem\">MgO</span> と矛盾せず、7 % の差は偶然誤差だけで説明できます。系統誤差があるかを調べるには、まず不確かさを小さくする必要があります。マグネシウムを多くし、0.001 g の電子てんびんを使います。</p>",
      misconception: {
        // EN (option A): A result that differs from 1.00 is expected for every real measurement. Compare the size of the difference with the size of the uncertainty.
        "0": "実際の測定では、どの結果も 1.00 とは違う値になるものです。差の大きさを、不確かさの大きさとくらべましょう。",
        // EN (option C): A 7 % difference is smaller than the 15 % uncertainty, so the data do not rule out MgO.
        "2": "7 % の差は 15 % の不確かさより小さいので、データから MgO を否定することはできません。",
        // EN (option D): The range 0.79 to 1.07 still rules out other simple ratios such as 1.5 and 0.5. Large uncertainty is a reason to improve the method, not to throw the data away.
        "3": "0.79〜1.07 の範囲でも、1.5 や 0.5 のような、ほかの簡単な比は否定できます。不確かさが大きいことは、方法を改善する理由であって、データを捨てる理由ではありません。",
      },
    },

  }
});
