/* s2-4.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's2-4.q', {
  questions: {

    // ── s2-4-q001 · mcq · foundation · SL · Structure 2.4.1 · 1 mark
    "s2-4-q001": {
      // EN: <p>The bonding triangle shows bonding as a continuum between the ionic, covalent and metallic models. What is plotted on its two axes?</p>
      stem: "<p>結合の三角形は、結合がイオン結合・共有結合・金属結合の 3 つのモデルの間で連続的に変化すること (continuum) を表します。2 つの軸には、それぞれ何をとりますか。</p>",
      options: [
        // EN: Horizontal: average electronegativity. Vertical: electronegativity difference.
        "横軸：電気陰性度の平均。縦軸：電気陰性度の差。",
        // EN: Horizontal: electronegativity difference. Vertical: average electronegativity.
        "横軸：電気陰性度の差。縦軸：電気陰性度の平均。",
        // EN: Horizontal: sum of the electronegativities. Vertical: electronegativity difference.
        "横軸：電気陰性度の合計。縦軸：電気陰性度の差。",
        // EN: Horizontal: electronegativity of the metal. Vertical: electronegativity of the non-metal.
        "横軸：金属の電気陰性度。縦軸：非金属の電気陰性度。",
      ],
      hints: [
        // EN: Ionic compounds have a large electronegativity difference. Where are they on the triangle: high up, or far along?
        "イオン化合物は、電気陰性度の差が大きい物質です。三角形のどこにありますか。高いところですか、それとも横に進んだところですか。",
      ],
      // EN: <p>The horizontal axis is the average electronegativity of the two elements. The vertical axis is the electronegativity difference. A large difference puts a compound near the ionic top.</p>
      solution: "<p>横軸は、2 つの元素の電気陰性度の平均です。縦軸は、電気陰性度の差です。差が大きい化合物は、イオン結合の頂点の近くにきます。</p>",
      misconception: {
        // EN (option B): The axes are swapped. The difference goes up the triangle, which is why the most ionic compounds are at the top.
        "1": "軸が逆です。差は三角形を上に進む向きにとります。だから、イオン結合性が最も大きい化合物が上にきます。",
        // EN (option C): The horizontal axis is the average, not the sum. The sum of two values can be as large as 7.4, which is off the scale.
        "2": "横軸は平均で、合計ではありません。2 つの値の合計は 7.4 にもなることがあり、目盛りからはみ出します。",
        // EN (option D): The triangle does not need a metal and a non-metal. It uses the same two calculations for any two elements.
        "3": "三角形は、金属と非金属の組み合わせでなくても使えます。どんな 2 つの元素にも、同じ 2 つの計算をします。",
      },
    },

    // ── s2-4-q002 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q002": {
      // EN: <p>Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(Cl) = 3.2. Calculate the electronegativity difference for magnesium chloride, <span class="chem nowrap">MgCl<sub>2</sub></span>.</p>
      stem: "<p><i>χ</i>(Mg) = 1.3、<i>χ</i>(Cl) = 3.2 を使って、塩化マグネシウム <span class=\"chem nowrap\">MgCl<sub>2</sub></span> の電気陰性度の差を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Subtract the smaller value from the larger value.
        "大きい値から小さい値を引きます。",
        // EN: Use one value for each element. The 2 in the formula is not used.
        "元素ごとに値を 1 つ使います。化学式の 2 は使いません。",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 1.3 = 1.9</div>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 1.3 = 1.9</div>",
    },

    // ── s2-4-q003 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q003": {
      // EN: <p>Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity for magnesium chloride, <span class="chem nowrap">MgCl<sub>2</sub></span>.</p>
      stem: "<p><i>χ</i>(Mg) = 1.3、<i>χ</i>(Cl) = 3.2 を使って、塩化マグネシウム <span class=\"chem nowrap\">MgCl<sub>2</sub></span> の電気陰性度の平均を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Add the two values, then divide by 2.
        "2 つの値を足してから、2 で割ります。",
        // EN: Use one value for each element. Do not count chlorine twice.
        "元素ごとに値を 1 つ使います。塩素を 2 回数えてはいけません。",
      ],
      // EN: <div class="worked__math">average <i>χ</i> = (1.3 + 3.2) / 2 = 4.5 / 2 = 2.25</div>
      solution: "<div class=\"worked__math\">平均 <i>χ</i> = (1.3 + 3.2) / 2 = 4.5 / 2 = 2.25</div>",
    },

    // ── s2-4-q004 · mcq · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q004": {
      // EN: <p>A binary compound has an average electronegativity of 2.7 and an electronegativity difference of 1.0. Use the bonding triangle to deduce its bonding type.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>ある二元化合物は、電気陰性度の平均が 2.7、電気陰性度の差が 1.0 です。結合の三角形を使って、結合の種類を導きなさい (deduce)。</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"結合の三角形。横軸：電気陰性度の平均、0.5 から 4.0。縦軸：電気陰性度の差、0 から 3.0。金属結合の領域は左下にあり、底辺では平均が約 1.9 までです。イオン結合の領域は、頂点に向かってのびる帯です。共有結合と極性共有結合の領域は右下にあります。\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">金属結合</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">イオン結合</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">極性</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共有結合</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共有結合</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電気陰性度の平均</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電気陰性度の差</text></svg>",
      options: [
        // EN: Ionic
        "イオン結合",
        // EN: Polar covalent
        "極性共有結合",
        // EN: Metallic
        "金属結合",
        // EN: Non-polar covalent
        "無極性の共有結合",
      ],
      hints: [
        // EN: Go along the horizontal axis to 2.7. Then go up to 1.0.
        "横軸に沿って 2.7 まで進みます。それから上に 1.0 まで進みます。",
      ],
      // EN: <p>The point (2.7, 1.0) is on the right-hand side of the triangle and well above the base. That is the polar covalent region.</p>
      solution: "<p>点 (2.7, 1.0) は三角形の右側にあり、底辺よりかなり上です。そこは極性共有結合の領域です。</p>",
      misconception: {
        // EN (option A): Check the axes. Going along to 1.0 and up to 2.7 is the wrong way round. The average, 2.7, goes along and the difference, 1.0, goes up.
        "0": "軸を確かめましょう。横に 1.0、上に 2.7 進むのは逆です。平均の 2.7 を横に、差の 1.0 を上にとります。",
        // EN (option C): The metallic region is at the bottom left, where the average is below about 1.9. An average of 2.7 is far to the right of it.
        "2": "金属結合の領域は左下で、平均が約 1.9 より小さいところです。平均 2.7 は、それよりずっと右です。",
        // EN (option D): A non-polar covalent bond has a difference of 0, so its point is on the base line. This point is at a height of 1.0.
        "3": "無極性の共有結合は差が 0 なので、点は底辺の上にあります。この点の高さは 1.0 です。",
      },
    },

    // ── s2-4-q005 · mcq · foundation · SL · Structure 2.4.3 · 1 mark
    "s2-4-q005": {
      // EN: <p>Which statement describes an alloy?</p>
      stem: "<p>合金を正しく説明している文はどれですか。</p>",
      options: [
        // EN: A compound of two metals that are chemically combined in a fixed ratio.
        "2 種類の金属が一定の比で化学的に結合した化合物。",
        // EN: A mixture of a metal and other metals or non-metals.
        "金属と、ほかの金属または非金属との混合物。",
        // EN: An ionic compound of a metal and a non-metal.
        "金属と非金属のイオン化合物。",
        // EN: A pure metal that has been heated and then cooled quickly.
        "加熱したあと急に冷やした純粋な金属。",
      ],
      hints: [
        // EN: Think of steel: iron with a little carbon. Is the amount of carbon fixed?
        "鋼を考えましょう。鉄に少しの炭素を加えたものです。炭素の量は決まっていますか。",
      ],
      // EN: <p>An alloy is a mixture of a metal and other metals or non-metals. It has enhanced properties, such as greater hardness.</p>
      solution: "<p>合金は、金属と、ほかの金属または非金属との混合物です。もとの金属より優れた性質をもちます。たとえば、よりかたくなります。</p>",
      misconception: {
        // EN (option A): An alloy is a mixture, not a compound. The proportions of the elements can vary.
        "0": "合金は混合物で、化合物ではありません。元素の割合は変えられます。",
        // EN (option C): An ionic compound has ions in a fixed ratio. In an alloy the bonding is metallic, and a non-metal such as carbon can be one of the components without forming an ionic lattice.
        "2": "イオン化合物では、イオンが一定の比で含まれます。合金の結合は金属結合です。炭素のような非金属も、イオンの結晶格子をつくらずに成分の 1 つになれます。",
        // EN (option D): A pure metal contains only one element. An alloy always contains at least one other element.
        "3": "純粋な金属は、1 種類の元素だけでできています。合金には、必ずほかの元素が少なくとも 1 種類入っています。",
      },
    },

    // ── s2-4-q006 · mcq · foundation · SL · Structure 2.4.4 · 1 mark
    "s2-4-q006": {
      // EN: <p>Which statement describes a polymer?</p>
      stem: "<p>高分子（ポリマー）を正しく説明している文はどれですか。</p>",
      options: [
        // EN: A small molecule that can join to many others like it.
        "同じような分子とたくさんつながることができる、小さな分子。",
        // EN: A giant lattice of positive and negative ions.
        "陽イオンと陰イオンでできた巨大な結晶格子。",
        // EN: A large molecule made from many repeating subunits.
        "小さな単位がたくさん繰り返してできた、大きな分子。",
        // EN: A mixture of a metal and other elements.
        "金属とほかの元素との混合物。",
      ],
      hints: [
        // EN: “Poly” means many. “Mono” means one.
        "「ポリ (poly)」は「たくさん」という意味です。「モノ (mono)」は「1 つ」という意味です。",
      ],
      // EN: <p>A polymer is a large molecule (a macromolecule) made from many repeating subunits. The subunits come from small molecules called monomers.</p>
      solution: "<p>高分子は、小さな単位がたくさん繰り返してできた大きな分子（巨大分子）です。その単位は、単量体（モノマー）と呼ばれる小さな分子からできます。</p>",
      misconception: {
        // EN (option A): This describes a monomer. The polymer is the large molecule that forms when many monomers join.
        "0": "これは単量体の説明です。高分子は、たくさんの単量体がつながってできる大きな分子です。",
        // EN (option B): This describes an ionic compound. A polymer is a covalently bonded molecule.
        "1": "これはイオン化合物の説明です。高分子は、共有結合でできた分子です。",
        // EN (option D): This describes an alloy.
        "3": "これは合金の説明です。",
      },
    },

    // ── s2-4-q007 · mcq · foundation · SL · Structure 2.4.5 · 1 mark
    "s2-4-q007": {
      // EN: <p>Chloroethene, <span class="chem nowrap">CH<sub>2</sub>=CHCl</span>, forms an addition polymer. Which is the repeating unit of the polymer?</p>
      stem: "<p>クロロエテン (chloroethene) <span class=\"chem nowrap\">CH<sub>2</sub>=CHCl</span> は付加重合体をつくります。この高分子の繰り返し単位はどれですか。</p>",
      options: [
        // EN: <span class="chem nowrap">–CH=CCl–</span>
        "<span class=\"chem nowrap\">–CH=CCl–</span>",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>
        "<span class=\"chem nowrap\">–CH<sub>2</sub>–CHCl–</span>",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–CH<sub>2</sub>–CHCl–</span>
        "<span class=\"chem nowrap\">–CH<sub>2</sub>–CHCl–CH<sub>2</sub>–CHCl–</span>",
        // EN: <span class="chem nowrap">–CH<sub>2</sub>–CH<sub>2</sub>–Cl–</span>
        "<span class=\"chem nowrap\">–CH<sub>2</sub>–CH<sub>2</sub>–Cl–</span>",
      ],
      hints: [
        // EN: Change C=C to C–C. Then add one bond at each end.
        "C=C を C–C に変えます。それから両端に結合を 1 本ずつ描きます。",
        // EN: The side groups stay on the same carbon atoms.
        "側基は、同じ炭素原子についたままです。",
      ],
      // EN: <p>The double bond becomes a single bond, and each of the two carbons gains a continuation bond: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>. The chlorine atom stays on its carbon as a side group.</p>
      solution: "<p>二重結合が単結合になり、2 個の炭素のそれぞれに、鎖の続きを表す結合 (continuation bond) が 1 本ずつつきます：<span class=\"chem nowrap\">–CH<sub>2</sub>–CHCl–</span>。塩素原子は、側基として同じ炭素についたままです。</p>",
      misconception: {
        // EN (option A): The double bond does not stay. One bond of the C=C breaks so that each carbon can join to a neighbour. Two hydrogen atoms have also been lost here, but no atoms are lost in addition polymerization.
        "0": "二重結合は残りません。C=C の結合が 1 本切れて、それぞれの炭素がとなりとつながれるようになります。また、この選択肢では水素原子が 2 個なくなっています。付加重合では、原子は 1 個も失われません。",
        // EN (option C): This shows two repeating units. The repeating unit is the smallest part that repeats: two backbone carbons.
        "2": "これは繰り返し単位 2 つ分です。繰り返し単位は、繰り返す最も小さな部分で、主鎖の炭素 2 個分です。",
        // EN (option D): Chlorine forms only one bond, so it cannot be in the backbone. It stays as a side group on its carbon.
        "3": "塩素は結合を 1 本しかつくらないので、主鎖には入れません。側基として炭素についたままです。",
      },
    },

    // ── s2-4-q008 · multi · foundation · SL · Structure 2.4.5 · 2 marks
    "s2-4-q008": {
      // EN: <p>Which statements about the addition polymerization of an alkene are correct? Select all that apply.</p>
      stem: "<p>アルケンの付加重合 (addition polymerization) について、正しい文はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: The carbon to carbon double bond in each monomer breaks.
        "それぞれの単量体の、炭素と炭素の二重結合が切れる。",
        // EN: A molecule of water is released each time two monomers join.
        "2 個の単量体がつながるたびに、水分子が 1 個放出される。",
        // EN: The polymer is the only product.
        "生成物は高分子だけである。",
        // EN: The backbone of the polymer contains C=C double bonds.
        "高分子の主鎖に C=C 二重結合がある。",
        // EN: The repeating unit contains the same atoms as one monomer.
        "繰り返し単位は、単量体 1 個と同じ原子を含む。",
      ],
      hints: [
        // EN: Count the atoms before and after. Are any atoms lost?
        "反応の前と後で原子を数えましょう。失われる原子はありますか。",
      ],
      // EN: <p>In addition polymerization the double bond of each monomer breaks and the monomers join. Nothing else is formed, so the polymer is the only product and each repeating unit has the same atoms as one monomer.</p>
      solution: "<p>付加重合では、それぞれの単量体の二重結合が切れて、単量体どうしがつながります。ほかには何もできません。だから生成物は高分子だけで、繰り返し単位は単量体 1 個と同じ原子を含みます。</p>",
      misconception: {
        // EN (option B): Releasing a small molecule is the feature of condensation polymerization. In addition polymerization nothing is released.
        "1": "小さな分子を放出するのは、縮合重合の特徴です。付加重合では何も放出されません。",
        // EN (option D): The double bonds are used up when the monomers join. The backbone has only single bonds between the carbons.
        "3": "二重結合は、単量体がつながるときに使われます。主鎖の炭素の間には単結合しかありません。",
      },
    },

    // ── s2-4-q009 · numeric · exam · SL · Structure 2.4.2 · 1 mark
    "s2-4-q009": {
      // EN: <p>The scale beside the bonding triangle shows the percentage ionic character at different heights.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col" class="num">Δ<i>χ</i></th><th scope="col" class="num">% ionic</th></tr></thead><tbody><tr><td class="num">1.0</td><td class="num">25</td></tr><tr><td class="num">1.6</td><td class="num">50</td></tr><tr><td class="num">2.3</td><td class="num">75</td></tr></tbody></table></div><p>Magnesium chloride has Δ<i>χ</i> = 1.9. Estimate its percentage ionic character from the scale.</p>
      stem: "<p>結合の三角形の横の目盛りは、それぞれの高さでのイオン結合性の割合 (percentage ionic character) を示します。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\" class=\"num\">Δ<i>χ</i></th><th scope=\"col\" class=\"num\">イオン結合性 %</th></tr></thead><tbody><tr><td class=\"num\">1.0</td><td class=\"num\">25</td></tr><tr><td class=\"num\">1.6</td><td class=\"num\">50</td></tr><tr><td class=\"num\">2.3</td><td class=\"num\">75</td></tr></tbody></table></div><p>塩化マグネシウムでは Δ<i>χ</i> = 1.9 です。この目盛りから、イオン結合性の割合を見積もりなさい (estimate)。</p>",
      hints: [
        // EN: Between which two heights in the table does 1.9 lie?
        "1.9 は、表のどの 2 つの高さの間にありますか。",
        // EN: It is a little less than halfway from 1.6 to 2.3. Read a value a little less than halfway from 50 to 75.
        "1.6 から 2.3 までの半分より少し手前です。50 から 75 までの半分より少し手前の値を読みましょう。",
      ],
      // EN: <p>1.9 lies between 1.6 (50 % ionic) and 2.3 (75 % ionic).</p><div class="worked__math">fraction of the way = (1.9 − 1.6) / (2.3 − 1.6) = 0.3 / 0.7 = 0.43</div><div class="worked__math">reading = 50 + 0.43 × 25 = about 60 % ionic</div><p>This is a reading from a diagram, so any answer from about 55 % to 65 % is acceptable.</p>
      solution: "<p>1.9 は、1.6（イオン結合性 50 %）と 2.3（イオン結合性 75 %）の間にあります。</p><div class=\"worked__math\">進んだ割合 = (1.9 − 1.6) / (2.3 − 1.6) = 0.3 / 0.7 = 0.43</div><div class=\"worked__math\">読み = 50 + 0.43 × 25 = イオン結合性 約 60 %</div><p>これは図から読み取る値なので、約 55 % から 65 % までの答えはどれも認められます。</p>",
      // EN: about 60 % (55 to 65 % accepted)
      answerDisplay: "約 60 %（55〜65 % は認められる）",
    },

    // ── s2-4-q010 · mcq · exam · SL · Structure 2.4.2 · 1 mark
    "s2-4-q010": {
      // EN: <p>Tin is a metal and chlorine is a non-metal. Use <i>χ</i>(Sn) = 2.0, <i>χ</i>(Cl) = 3.2 and the bonding triangle. What is the best description of the bonding in tin(IV) chloride, <span class="chem nowrap">SnCl<sub>4</sub></span>?</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>スズは金属で、塩素は非金属です。<i>χ</i>(Sn) = 2.0、<i>χ</i>(Cl) = 3.2 と結合の三角形を使います。塩化スズ(IV) <span class=\"chem nowrap\">SnCl<sub>4</sub></span> の結合を最もよく表しているのはどれですか。</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"結合の三角形。横軸：電気陰性度の平均、0.5 から 4.0。縦軸：電気陰性度の差、0 から 3.0。金属結合の領域は左下にあり、底辺では平均が約 1.9 までです。イオン結合の領域は、頂点に向かってのびる帯です。共有結合と極性共有結合の領域は右下にあります。\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">金属結合</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">イオン結合</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">極性</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共有結合</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共有結合</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電気陰性度の平均</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電気陰性度の差</text></svg>",
      options: [
        // EN: Ionic, because a metal is bonded to a non-metal.
        "イオン結合。金属が非金属と結合しているから。",
        // EN: Ionic, because the electronegativity difference is greater than 1.0.
        "イオン結合。電気陰性度の差が 1.0 より大きいから。",
        // EN: Polar covalent, because the point (2.6, 1.2) lies in that region.
        "極性共有結合。点 (2.6, 1.2) がその領域にあるから。",
        // EN: Metallic, because the compound contains a metal.
        "金属結合。化合物が金属を含むから。",
      ],
      hints: [
        // EN: Calculate both coordinates: the difference and the average.
        "2 つの座標を計算しましょう。差と平均です。",
        // EN: Difference = 3.2 − 2.0. Average = (2.0 + 3.2) / 2. Now find the point.
        "差 = 3.2 − 2.0。平均 = (2.0 + 3.2) / 2。次に、その点をさがしましょう。",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 2.0 = 1.2</div><div class="worked__math">average <i>χ</i> = (2.0 + 3.2) / 2 = 2.6</div><p>The point (2.6, 1.2) is in the polar covalent region. This agrees with the properties: tin(IV) chloride is a liquid made of molecules.</p>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 2.0 = 1.2</div><div class=\"worked__math\">平均 <i>χ</i> = (2.0 + 3.2) / 2 = 2.6</div><p>点 (2.6, 1.2) は極性共有結合の領域にあります。これは性質と合っています。塩化スズ(IV) は、分子でできた液体です。</p>",
      misconception: {
        // EN (option A): “Metal with non-metal” is only a rough guide. The triangle uses the electronegativity values, and here they place the compound in the polar covalent region.
        "0": "「金属と非金属」は、おおまかな目安でしかありません。三角形では電気陰性度の値を使います。その値から、この化合物は極性共有結合の領域にきます。",
        // EN (option B): One number is not enough, and there is no cut-off at 1.0. You need the difference and the average to find the region.
        "1": "数値 1 つでは足りません。また、1.0 に区切りがあるわけでもありません。領域を決めるには、差と平均の両方が必要です。",
        // EN (option D): The metallic region is at the bottom left, where both elements have low electronegativity. Chlorine has a high electronegativity.
        "3": "金属結合の領域は左下で、どちらの元素も電気陰性度が低いところです。塩素の電気陰性度は高いです。",
      },
    },

    // ── s2-4-q011 · mcq · exam · SL · Structure 2.4.1 · 1 mark
    "s2-4-q011": {
      // EN: <p>A binary compound has an average electronegativity of 2.1 and an electronegativity difference of 2.6. Its point is high in the ionic region of the bonding triangle. Which properties does the ionic model predict?</p>
      stem: "<p>ある二元化合物は、電気陰性度の平均が 2.1、電気陰性度の差が 2.6 です。その点は、結合の三角形でイオン結合の領域の高いところにあります。イオン結合モデルからは、どの性質が予測できますか。</p>",
      options: [
        // EN: Low melting point; does not conduct electricity in any state.
        "融点が低い；どの状態でも電気を通さない。",
        // EN: High melting point; conducts electricity as a solid.
        "融点が高い；固体で電気を通す。",
        // EN: High melting point; conducts electricity when molten but not as a solid.
        "融点が高い；融解すると電気を通すが、固体では通さない。",
        // EN: Low melting point; conducts electricity when molten.
        "融点が低い；融解すると電気を通す。",
      ],
      hints: [
        // EN: What particles are in an ionic solid? Can they move?
        "イオン結合の固体には、どんな粒子がありますか。その粒子は動けますか。",
      ],
      // EN: <p>The ionic model has a lattice of oppositely charged ions with strong electrostatic attraction between them, so the melting point is high. The ions cannot move in the solid, but they can move when the compound is molten, so it conducts only then.</p>
      solution: "<p>イオン結合モデルでは、反対の電荷をもつイオンが結晶格子をつくり、その間に強い静電気的な引力 (electrostatic attraction) がはたらきます。だから融点が高くなります。固体ではイオンは動けませんが、融解すると動けます。だから、融解したときだけ電気を通します。</p>",
      misconception: {
        // EN (option A): These are the properties of a molecular covalent substance. An ionic lattice has strong electrostatic attraction between oppositely charged ions in every direction.
        "0": "これは、分子でできた共有結合の物質の性質です。イオンの結晶格子では、反対の電荷をもつイオンの間に、あらゆる方向に強い静電気的な引力がはたらきます。",
        // EN (option B): Conducting as a solid needs delocalized electrons, as in a metal. In a solid ionic lattice the ions are fixed in place.
        "1": "固体で電気を通すには、金属のように非局在化電子が必要です。固体のイオンの結晶格子では、イオンは決まった位置に固定されています。",
        // EN (option D): A lot of energy is needed to overcome the strong electrostatic attraction between the ions, so the melting point is high.
        "3": "イオンの間の強い静電気的な引力に打ち勝つには多くのエネルギーが必要なので、融点は高くなります。",
      },
    },

    // ── s2-4-q012 · short · exam · SL · Structure 2.4.2 · 2 marks
    "s2-4-q012": {
      // EN: <p>Use <i>χ</i>(Ca) = 1.0 and <i>χ</i>(S) = 2.6. Determine the position of calcium sulfide, CaS, in the bonding triangle, and deduce its bonding type.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p><i>χ</i>(Ca) = 1.0、<i>χ</i>(S) = 2.6 を使います。硫化カルシウム CaS が結合の三角形のどこにくるかを求めなさい (determine)。また、結合の種類を導きなさい (deduce)。</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"結合の三角形。横軸：電気陰性度の平均、0.5 から 4.0。縦軸：電気陰性度の差、0 から 3.0。金属結合の領域は左下にあり、底辺では平均が約 1.9 までです。イオン結合の領域は、頂点に向かってのびる帯です。共有結合と極性共有結合の領域は右下にあります。\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">金属結合</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">イオン結合</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">極性</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共有結合</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共有結合</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電気陰性度の平均</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電気陰性度の差</text></svg>",
      hints: [
        // EN: You need two numbers: the difference and the average.
        "数値が 2 つ必要です。差と平均です。",
        // EN: Plot the average along and the difference up.
        "平均を横に、差を上にとって点を打ちます。",
      ],
      // EN: <p>Both values are needed for the first mark. The point (1.8, 1.6) lies above the metallic region and to the left of the polar covalent region, inside the ionic band.</p>
      solution: "<p>1 点目には、両方の値が必要です。点 (1.8, 1.6) は、金属結合の領域の上、極性共有結合の領域の左にあり、イオン結合の帯の中にあります。</p>",
      // EN: <div class="worked__math">Δ<i>χ</i> = 2.6 − 1.0 = 1.6</div><div class="worked__math">average <i>χ</i> = (1.0 + 2.6) / 2 = 1.8</div><p>The point (1.8, 1.6) is in the ionic region, so calcium sulfide is ionic.</p>
      answer: "<div class=\"worked__math\">Δ<i>χ</i> = 2.6 − 1.0 = 1.6</div><div class=\"worked__math\">平均 <i>χ</i> = (1.0 + 2.6) / 2 = 1.8</div><p>点 (1.8, 1.6) はイオン結合の領域にあるので、硫化カルシウムはイオン結合です。</p>",
      markscheme: [
        // EN: Electronegativity difference = 1.6 AND average electronegativity = 1.8 (both needed for the mark).
        "電気陰性度の差 = 1.6 かつ 電気陰性度の平均 = 1.8（点を得るには両方が必要）。",
        // EN: Ionic (bonding), from the position in the triangle.
        "イオン結合。三角形での位置から判断する。",
      ],
    },

    // ── s2-4-q013 · short · exam · SL · Structure 2.4.3 · 2 marks
    "s2-4-q013": {
      // EN: <p>Steel is an alloy made by adding a small amount of carbon to iron. Explain why steel is harder than pure iron.</p>
      stem: "<p>鋼は、鉄に少量の炭素を加えてつくる合金です。鋼が純粋な鉄よりかたい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Start with pure iron. Why is it malleable?
        "まず純粋な鉄から考えます。なぜ展性があるのでしょうか。",
        // EN: What does an atom of a different size do to regular layers?
        "大きさの違う原子は、規則正しい層をどうしますか。",
      ],
      // EN: <p>In pure iron the cations are all the same size and form regular layers that slide over each other. Carbon atoms have a different size and disrupt the layers, so they slide less easily. “The bonds are stronger” is not accepted.</p>
      solution: "<p>純粋な鉄では、陽イオンの大きさがすべて同じで、規則正しい層をつくり、層はたがいにすべります。炭素原子は大きさが違うので層を乱し、層はすべりにくくなります。「結合が強くなる」という答えは認められません。</p>",
      // EN: <p>Carbon atoms are a different size from iron atoms, so they disrupt the regular arrangement of the layers in the lattice. The layers cannot slide over each other as easily, so steel is harder.</p>
      answer: "<p>炭素原子は鉄原子と大きさが違うので、結晶格子の層の規則正しい並び方を乱します。層がたがいにすべりにくくなるので、鋼のほうがかたくなります。</p>",
      markscheme: [
        // EN: The carbon atoms are a different size (smaller) AND disrupt/distort the regular lattice/layers of iron ions.
        "炭素原子は大きさが違う（小さい）かつ 鉄イオンの規則正しい結晶格子 / 層を乱す / ゆがめる。",
        // EN: The layers cannot slide over each other as easily (so more force is needed to change the shape).
        "層がたがいにすべりにくくなる（だから、形を変えるのにより大きな力が必要になる）。",
      ],
    },

    // ── s2-4-q014 · mcq · exam · SL · Structure 2.4.3 · 1 mark
    "s2-4-q014": {
      // EN: <p>Which feature of metallic bonding makes it possible for atoms of another element to take places in a metal lattice?</p>
      stem: "<p>金属結合のどの特徴のおかげで、別の元素の原子が金属の結晶格子の中の場所に入れるのですか。</p>",
      options: [
        // EN: Each metal atom forms a fixed number of covalent bonds in fixed directions.
        "それぞれの金属原子が、決まった方向に決まった数の共有結合をつくる。",
        // EN: The attraction between the cations and the delocalized electrons is non-directional.
        "陽イオンと非局在化電子の間の引力には方向性がない。",
        // EN: The cations and the atoms of the other element form a compound with a fixed ratio.
        "陽イオンと別の元素の原子が、一定の比の化合物をつくる。",
        // EN: The delocalized electrons are removed when the other element is added.
        "別の元素を加えると、非局在化電子が取り除かれる。",
      ],
      hints: [
        // EN: In a metal, does each cation bond to particular neighbours, or to the electrons all around it?
        "金属の中で、陽イオンは決まったとなりの粒子と結合していますか。それとも、まわりを取りまく電子と結合していますか。",
      ],
      // EN: <p>Metallic bonding is the electrostatic attraction between cations and delocalized electrons. It is non-directional, so the lattice can accommodate atoms of other elements and still be held together.</p>
      solution: "<p>金属結合は、陽イオンと非局在化電子 (delocalized electrons) の間の静電気的な引力です。方向性がない (non-directional) ので、結晶格子はほかの元素の原子を受け入れても、まとまったままでいられます。</p>",
      misconception: {
        // EN (option A): Bonds in fixed directions describe covalent bonding. Metallic bonding acts equally in all directions.
        "0": "決まった方向の結合は、共有結合の説明です。金属結合は、どの方向にも同じようにはたらきます。",
        // EN (option C): An alloy is a mixture. Its composition is not fixed.
        "2": "合金は混合物です。組成は決まっていません。",
        // EN (option D): The delocalized electrons stay. They are what holds the lattice together, including the added atoms.
        "3": "非局在化電子は残ります。加えた原子も含めて、結晶格子をまとめているのは非局在化電子です。",
      },
    },

    // ── s2-4-q015 · mcq · exam · SL · Structure 2.4.5 · 1 mark
    "s2-4-q015": {
      // EN: <p>The structure of propene is shown.</p><svg viewBox="0 0 90 112" width="90" height="112" role="img" aria-label="Propene: two carbons joined by a double bond. The first carbon has two H atoms. The second carbon has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="22" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M22 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M22 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="68" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M68 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="68" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M68 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="62" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M32 53 H58 M32 59 H58" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/></svg><p>Which is the repeating unit of poly(propene)?</p>
      stem: "<p>プロペン (propene) の構造を示します。</p><svg viewBox=\"0 0 90 112\" width=\"90\" height=\"112\" role=\"img\" aria-label=\"プロペン：2 個の炭素が二重結合でつながっている。1 番目の炭素には H 原子が 2 個ある。2 番目の炭素には H 原子が 1 個と CH3 基が 1 個ある。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"22\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M22 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M22 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"68\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M68 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"68\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M68 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"62\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M32 53 H58 M32 59 H58\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/></svg><p>ポリプロペン (poly(propene)) の繰り返し単位はどれですか。</p>",
      options: [
        // EN: <svg viewBox="0 0 186 112" width="186" height="112" role="img" aria-label="Option A: three backbone carbons in a row, each with two H atoms, with a continuation bond at each end" style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M132 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M132 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M96 56 H122" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M142 56 H166" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M148 6 H154 V106 H148" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="158" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 186 112\" width=\"186\" height=\"112\" role=\"img\" aria-label=\"選択肢 A：主鎖の炭素 3 個が 1 列に並び、それぞれに H 原子が 2 個ある。両端に鎖の続きを表す結合がある\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M132 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M132 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M96 56 H122\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M142 56 H166\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M148 6 H154 V106 H148\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"158\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 154 112" width="154" height="112" role="img" aria-label="Option B: two backbone carbons joined by a double bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="80" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M50 53 H76 M50 59 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M96 56 H134" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M116 6 H122 V106 H116" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="126" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 154 112\" width=\"154\" height=\"112\" role=\"img\" aria-label=\"選択肢 B：主鎖の炭素 2 個が二重結合でつながり、両端に鎖の続きを表す結合がある。1 番目の炭素には H 原子が 2 個ある。2 番目の炭素には H 原子が 1 個と CH3 基が 1 個ある。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"80\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M50 53 H76 M50 59 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M96 56 H134\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M116 6 H122 V106 H116\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"126\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 154 112" width="154" height="112" role="img" aria-label="Option C: two backbone carbons joined by a single bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="80" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M96 56 H134" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M116 6 H122 V106 H116" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="126" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 154 112\" width=\"154\" height=\"112\" role=\"img\" aria-label=\"選択肢 C：主鎖の炭素 2 個が単結合でつながり、両端に鎖の続きを表す結合がある。1 番目の炭素には H 原子が 2 個ある。2 番目の炭素には H 原子が 1 個と CH3 基が 1 個ある。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"80\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M96 56 H134\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M116 6 H122 V106 H116\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"126\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 118 112" width="118" height="112" role="img" aria-label="Option D: two carbons joined by a single bond, with no continuation bonds. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="22" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M22 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M22 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="68" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M68 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="68" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M68 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="62" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M32 56 H58" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M6 6 H0 V106 H6 M98 6 H104 V106 H98" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="108" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 118 112\" width=\"118\" height=\"112\" role=\"img\" aria-label=\"選択肢 D：2 個の炭素が単結合でつながり、鎖の続きを表す結合はない。1 番目の炭素には H 原子が 2 個ある。2 番目の炭素には H 原子が 1 個と CH3 基が 1 個ある。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"22\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M22 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M22 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"68\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M68 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"68\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M68 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"62\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M32 56 H58\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M6 6 H0 V106 H6 M98 6 H104 V106 H98\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"108\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
      ],
      hints: [
        // EN: Which two carbon atoms were joined by the double bond? Only those are in the backbone.
        "二重結合でつながっていたのは、どの 2 個の炭素原子ですか。主鎖に入るのはその 2 個だけです。",
        // EN: Check that every carbon has exactly four bonds.
        "どの炭素にも結合がちょうど 4 本あることを確かめましょう。",
      ],
      // EN: <p>Change C=C to C–C and add a continuation bond to each of the two carbons. The CH₃ group stays as a side group: –CH<sub>2</sub>–CH(CH<sub>3</sub>)–.</p>
      solution: "<p>C=C を C–C に変え、2 個の炭素のそれぞれに鎖の続きを表す結合を 1 本ずつ描きます。CH₃ 基は側基のままです：–CH<sub>2</sub>–CH(CH<sub>3</sub>)–。</p>",
      misconception: {
        // EN (option A): The CH₃ group is not part of the double bond, so it does not go into the backbone. Only the two carbons of the C=C are in the chain.
        "0": "CH₃ 基は二重結合の一部ではないので、主鎖には入りません。鎖に入るのは、C=C の 2 個の炭素だけです。",
        // EN (option B): The double bond has been kept. Each carbon would then have five bonds. The C=C becomes C–C when the continuation bonds form.
        "1": "二重結合が残っています。これでは、それぞれの炭素の結合が 5 本になってしまいます。鎖の続きを表す結合ができるとき、C=C は C–C になります。",
        // EN (option D): The continuation bonds are missing. Without them the unit cannot join to its neighbours, and each backbone carbon has only three bonds.
        "3": "鎖の続きを表す結合がありません。これでは単位がとなりとつながれず、主鎖の炭素の結合はそれぞれ 3 本しかありません。",
      },
    },

    // ── s2-4-q016 · mcq · exam · SL · Structure 2.4.5 · 1 mark
    "s2-4-q016": {
      // EN: <p>A section of an addition polymer is shown.</p><svg viewBox="0 0 218 112" width="218" height="112" role="img" aria-label="Polymer chain section with four backbone carbons and a continuation bond at each end. Carbons 1 and 3 each have two H atoms. Carbons 2 and 4 each have two Cl atoms." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M132 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M132 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M96 56 H122" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M178 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M178 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M142 56 H168" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M188 56 H212" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/></svg><p>Which monomer formed this polymer?</p>
      stem: "<p>付加重合体の一部分を示します。</p><svg viewBox=\"0 0 218 112\" width=\"218\" height=\"112\" role=\"img\" aria-label=\"主鎖の炭素が 4 個ある高分子の鎖の一部分。両端に鎖の続きを表す結合がある。炭素 1 と炭素 3 には、それぞれ H 原子が 2 個ある。炭素 2 と炭素 4 には、それぞれ Cl 原子が 2 個ある。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M132 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M132 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M96 56 H122\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M178 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M178 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M142 56 H168\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M188 56 H212\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/></svg><p>この高分子は、どの単量体からできましたか。</p>",
      options: [
        // EN: <span class="chem nowrap">CHCl=CHCl</span>
        "<span class=\"chem nowrap\">CHCl=CHCl</span>",
        // EN: <span class="chem nowrap">CH<sub>2</sub>=CHCl</span>
        "<span class=\"chem nowrap\">CH<sub>2</sub>=CHCl</span>",
        // EN: <span class="chem nowrap">CH<sub>2</sub>=CCl<sub>2</sub></span>
        "<span class=\"chem nowrap\">CH<sub>2</sub>=CCl<sub>2</sub></span>",
        // EN: <span class="chem nowrap">CH<sub>3</sub>–CHCl<sub>2</sub></span>
        "<span class=\"chem nowrap\">CH<sub>3</sub>–CHCl<sub>2</sub></span>",
      ],
      hints: [
        // EN: Mark off the chain two backbone carbons at a time.
        "鎖を、主鎖の炭素 2 個ずつに区切りましょう。",
        // EN: One pair is CH<sub>2</sub> joined to CCl<sub>2</sub>. Put a double bond between those two carbons.
        "1 組は、CH<sub>2</sub> と CCl<sub>2</sub> がつながったものです。その 2 個の炭素の間に二重結合を描きます。",
      ],
      // EN: <p>The repeating unit is –CH<sub>2</sub>–CCl<sub>2</sub>–. Remove the continuation bonds and restore the double bond: CH<sub>2</sub>=CCl<sub>2</sub>.</p>
      solution: "<p>繰り返し単位は –CH<sub>2</sub>–CCl<sub>2</sub>– です。鎖の続きを表す結合を消して、二重結合を元に戻します：CH<sub>2</sub>=CCl<sub>2</sub>。</p>",
      misconception: {
        // EN (option A): This monomer would put one chlorine on every backbone carbon. In the polymer shown, both chlorine atoms are on the same carbon and the next carbon has none.
        "0": "この単量体からは、主鎖のどの炭素にも塩素が 1 個ずつついた高分子ができます。図の高分子では、塩素原子は 2 個とも同じ炭素についていて、となりの炭素にはついていません。",
        // EN (option B): This monomer has only one chlorine atom, but each repeating unit in the chain has two.
        "1": "この単量体には塩素原子が 1 個しかありません。しかし鎖の繰り返し単位には、それぞれ 2 個あります。",
        // EN (option D): This molecule has no C=C double bond, so it cannot form an addition polymer.
        "3": "この分子には C=C 二重結合がないので、付加重合体をつくれません。",
      },
    },

    // ── s2-4-q017 · short · exam · SL · Structure 2.4.4 · 2 marks
    "s2-4-q017": {
      // EN: <p>Poly(ethene) is a plastic used for food containers. State one <strong>chemical</strong> property that makes it suitable for this use, and explain the property in terms of the structure of the polymer.</p>
      stem: "<p>ポリエテン (poly(ethene)) は、食品容器に使われるプラスチックです。この用途に向いている<strong>化学的</strong>性質を 1 つ述べなさい (state)。また、その性質を高分子の構造から説明しなさい (explain)。</p>",
      hints: [
        // EN: A chemical property is about whether the substance reacts.
        "化学的性質とは、その物質が反応するかどうかについての性質です。",
        // EN: What kind of bond joins the atoms inside a polymer chain?
        "高分子の鎖の中で、原子はどんな結合でつながっていますか。",
      ],
      // EN: <p>The question asks for a chemical property, so “strong” or “light” earns nothing. Plastics are unreactive because the covalent bonds in their chains are strong.</p>
      solution: "<p>問われているのは化学的性質なので、「強い」や「軽い」では点になりません。プラスチックが反応しにくいのは、鎖の中の共有結合が強いからです。</p>",
      // EN: <p>It is unreactive (chemically inert), so it does not react with the food. The atoms in the polymer chains are joined by strong covalent bonds, which need a lot of energy to break.</p>
      answer: "<p>反応しにくい（化学的に不活性）ので、食品と反応しません。高分子の鎖の中の原子は強い共有結合でつながっていて、切るには多くのエネルギーが必要です。</p>",
      markscheme: [
        // EN: Unreactive / chemically inert / does not react with food, water or acids (accept non-biodegradable). Do not accept a physical property such as strong, flexible or low density.
        "反応しにくい / 化学的に不活性 / 食品、水、酸と反応しない（「生分解されない」も可）。強い、曲げやすい、密度が小さい、のような物理的性質は認めない。",
        // EN: The chains contain strong covalent bonds (C–C and C–H) which are difficult to break.
        "鎖には強い共有結合（C–C と C–H）があり、切れにくい。",
      ],
    },

    // ── s2-4-q018 · order · exam · SL · Structure 2.4.5 · 2 marks
    "s2-4-q018": {
      // EN: <p>Put these steps in order to draw the repeating unit of an addition polymer from its monomer.</p>
      stem: "<p>単量体から付加重合体の繰り返し単位を描きます。次のステップを正しい順に並べましょう。</p>",
      options: [
        // EN: Find the two carbon atoms that are joined by the double bond.
        "二重結合でつながっている 2 個の炭素原子を見つける。",
        // EN: Redraw the monomer with every other group above or below those two carbons.
        "ほかの基がすべて、その 2 個の炭素の上か下にくるように、単量体を描き直す。",
        // EN: Change the double bond to a single bond.
        "二重結合を単結合に変える。",
        // EN: Draw one continuation bond out from each of the two carbons.
        "2 個の炭素のそれぞれから、鎖の続きを表す結合を 1 本ずつ外に向けて描く。",
        // EN: Check that each carbon atom has four bonds.
        "どの炭素原子にも結合が 4 本あることを確かめる。",
      ],
      hints: [
        // EN: You cannot open the double bond until you have found it.
        "二重結合は、見つけてからでないと開けません。",
        // EN: The check comes last.
        "確かめるのは最後です。",
      ],
      // EN: <p>Find the C=C, redraw with the side groups above and below, change C=C to C–C, add the two continuation bonds, then check that each carbon has four bonds.</p>
      solution: "<p>C=C を見つけ、側基を上と下に置いて描き直し、C=C を C–C に変え、鎖の続きを表す結合を 2 本描きます。最後に、どの炭素にも結合が 4 本あることを確かめます。</p>",
    },

    // ── s2-4-q019 · numeric · challenge · SL · Structure 2.4.5 · 2 marks
    "s2-4-q019": {
      // EN: <p>Propene, <span class="chem nowrap">C<sub>3</sub>H<sub>6</sub></span>, forms the addition polymer poly(propene). One polymer chain has a relative molecular mass of <span class="mono">6.31 × 10<sup>4</sup></span>. Estimate the number of repeating units in this chain. Use <i>A</i><sub>r</sub>: C 12.01, H 1.01.</p>
      stem: "<p>プロペン (propene) <span class=\"chem nowrap\">C<sub>3</sub>H<sub>6</sub></span> から、付加重合体のポリプロペン (poly(propene)) ができます。ある高分子の鎖 1 本の相対分子質量は <span class=\"mono\">6.31 × 10<sup>4</sup></span> です。この鎖に含まれる繰り返し単位の数を見積もりなさい (estimate)。<i>A</i><sub>r</sub> は C 12.01、H 1.01 を使います。</p>",
      hints: [
        // EN: In addition polymerization no atoms are lost. What is the relative mass of one repeating unit?
        "付加重合では、原子は失われません。繰り返し単位 1 個の相対質量はいくつですか。",
        // EN: Number of units = relative molecular mass of the chain ÷ relative mass of one unit.
        "単位の数 = 鎖の相対分子質量 ÷ 単位 1 個の相対質量。",
      ],
      // EN: <p>The repeating unit has the same atoms as one monomer, <span class="chem nowrap">C<sub>3</sub>H<sub>6</sub></span>.</p><div class="worked__math"><i>M</i><sub>r</sub>(unit) = 3(12.01) + 6(1.01) = 42.09</div><div class="worked__math">number of units = 6.31 × 10<sup>4</sup> / 42.09 = 1499.2 = <b>1.50 × 10<sup>3</sup></b> (3 significant figures)</div>
      solution: "<p>繰り返し単位は、単量体 1 個と同じ原子を含みます：<span class=\"chem nowrap\">C<sub>3</sub>H<sub>6</sub></span>。</p><div class=\"worked__math\"><i>M</i><sub>r</sub>(単位) = 3(12.01) + 6(1.01) = 42.09</div><div class=\"worked__math\">単位の数 = 6.31 × 10<sup>4</sup> / 42.09 = 1499.2 = <b>1.50 × 10<sup>3</sup></b> （有効数字 3 桁）</div>",
    },

    // ── s2-4-q020 · mcq · challenge · SL · Structure 2.4.1 · 1 mark
    "s2-4-q020": {
      // EN: <p>The table gives electronegativity values. <i>χ</i>(O) = 3.4.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Element</th><th scope="col" class="num">Na</th><th scope="col" class="num">Mg</th><th scope="col" class="num">Si</th><th scope="col" class="num">P</th><th scope="col" class="num">S</th></tr></thead><tbody><tr><th scope="row"><i>χ</i></th><td class="num">0.9</td><td class="num">1.3</td><td class="num">1.9</td><td class="num">2.2</td><td class="num">2.6</td></tr></tbody></table></div><p>How does the position of the oxide in the bonding triangle change from sodium oxide to the oxide of sulfur, and what does this show about the bonding?</p>
      stem: "<p>表は電気陰性度の値です。<i>χ</i>(O) = 3.4 です。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">元素</th><th scope=\"col\" class=\"num\">Na</th><th scope=\"col\" class=\"num\">Mg</th><th scope=\"col\" class=\"num\">Si</th><th scope=\"col\" class=\"num\">P</th><th scope=\"col\" class=\"num\">S</th></tr></thead><tbody><tr><th scope=\"row\"><i>χ</i></th><td class=\"num\">0.9</td><td class=\"num\">1.3</td><td class=\"num\">1.9</td><td class=\"num\">2.2</td><td class=\"num\">2.6</td></tr></tbody></table></div><p>酸化ナトリウムから硫黄の酸化物へ進むと、結合の三角形での酸化物の位置はどう変わりますか。また、それは結合について何を表していますか。</p>",
      options: [
        // EN: The difference decreases and the average increases. The bonding changes from ionic to polar covalent.
        "差は小さくなり、平均は大きくなる。結合はイオン結合から極性共有結合に変わる。",
        // EN: The difference increases and the average increases. The bonding changes from polar covalent to ionic.
        "差は大きくなり、平均も大きくなる。結合は極性共有結合からイオン結合に変わる。",
        // EN: The difference decreases and the average decreases. The bonding changes from ionic to metallic.
        "差は小さくなり、平均も小さくなる。結合はイオン結合から金属結合に変わる。",
        // EN: The position does not change, because every oxide contains oxygen.
        "位置は変わらない。どの酸化物も酸素を含むから。",
      ],
      hints: [
        // EN: Calculate the difference and the average for the first oxide and the last oxide.
        "最初の酸化物と最後の酸化物について、差と平均を計算しましょう。",
        // EN: Na and O: difference 2.5, average 2.15. S and O: difference 0.8, average 3.0.
        "Na と O：差 2.5、平均 2.15。S と O：差 0.8、平均 3.0。",
      ],
      // EN: <div class="worked__math">Na and O: Δ<i>χ</i> = 3.4 − 0.9 = 2.5; average = (0.9 + 3.4) / 2 = 2.15</div><div class="worked__math">S and O: Δ<i>χ</i> = 3.4 − 2.6 = 0.8; average = (2.6 + 3.4) / 2 = 3.0</div><p>The points move down and to the right: from the ionic region to the polar covalent region. Bonding changes gradually across the period, which is the idea of a continuum.</p>
      solution: "<div class=\"worked__math\">Na と O：Δ<i>χ</i> = 3.4 − 0.9 = 2.5；平均 = (0.9 + 3.4) / 2 = 2.15</div><div class=\"worked__math\">S と O：Δ<i>χ</i> = 3.4 − 2.6 = 0.8；平均 = (2.6 + 3.4) / 2 = 3.0</div><p>点は右下へ動きます。イオン結合の領域から極性共有結合の領域へ移ります。周期を左から右へ進むにつれて、結合は少しずつ変わります。これが、連続的に変化する (continuum) という考え方です。</p>",
      misconception: {
        // EN (option B): The values get closer to 3.4 from Na to S, so the difference gets smaller, not larger. Check: 3.4 − 0.9 = 2.5 but 3.4 − 2.6 = 0.8.
        "1": "Na から S へ進むと、値は 3.4 に近づきます。だから差は小さくなり、大きくはなりません。確かめましょう：3.4 − 0.9 = 2.5 ですが、3.4 − 2.6 = 0.8 です。",
        // EN (option C): The average rises, because the first element becomes more electronegative while oxygen stays at 3.4. The points move right, away from the metallic corner.
        "2": "平均は大きくなります。酸素は 3.4 のままで、もう一方の元素の電気陰性度が高くなるからです。点は右へ動き、金属結合の角から離れます。",
        // EN (option D): The position depends on both elements. The other element changes, so both coordinates change.
        "3": "位置は両方の元素で決まります。もう一方の元素が変わるので、座標は 2 つとも変わります。",
      },
    },

    // ── s2-4-q021 · short · challenge · SL · Structure 2.4.2 · 3 marks
    "s2-4-q021": {
      // EN: <p>Sodium and silicon both form chlorides: NaCl and <span class="chem nowrap">SiCl<sub>4</sub></span>. Use <i>χ</i>(Na) = 0.9, <i>χ</i>(Si) = 1.9 and <i>χ</i>(Cl) = 3.2 and the bonding triangle. Determine the position of each chloride, deduce the bonding type of each, and predict one difference in their properties.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>ナトリウムとケイ素は、どちらも塩化物をつくります。NaCl と <span class=\"chem nowrap\">SiCl<sub>4</sub></span> です。<i>χ</i>(Na) = 0.9、<i>χ</i>(Si) = 1.9、<i>χ</i>(Cl) = 3.2 と結合の三角形を使います。それぞれの塩化物の位置を求めなさい (determine)。それぞれの結合の種類を導きなさい (deduce)。性質の違いを 1 つ予測しなさい (predict)。</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"結合の三角形。横軸：電気陰性度の平均、0.5 から 4.0。縦軸：電気陰性度の差、0 から 3.0。金属結合の領域は左下にあり、底辺では平均が約 1.9 までです。イオン結合の領域は、頂点に向かってのびる帯です。共有結合と極性共有結合の領域は右下にあります。\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">金属結合</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">イオン結合</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">極性</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共有結合</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共有結合</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電気陰性度の平均</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電気陰性度の差</text></svg>",
      hints: [
        // EN: Work out two numbers for each chloride. Use one value per element.
        "塩化物ごとに、数値を 2 つ計算します。元素ごとに値を 1 つ使います。",
        // EN: Locate both points, then use the model for each region to predict properties.
        "両方の点をさがします。それから、それぞれの領域のモデルを使って性質を予測します。",
      ],
      // EN: <p>NaCl is at (2.05, 2.3), in the ionic region. <span class="chem nowrap">SiCl<sub>4</sub></span> is at (2.55, 1.3), in the polar covalent region. The ionic model predicts a high melting point and conduction when molten. The covalent model predicts no conduction, and <span class="chem nowrap">SiCl<sub>4</sub></span> is made of molecules, so its melting point is low.</p>
      solution: "<p>NaCl は (2.05, 2.3) で、イオン結合の領域にあります。<span class=\"chem nowrap\">SiCl<sub>4</sub></span> は (2.55, 1.3) で、極性共有結合の領域にあります。イオン結合モデルからは、融点が高いことと、融解すると電気を通すことが予測できます。共有結合モデルからは、電気を通さないことが予測できます。また、<span class=\"chem nowrap\">SiCl<sub>4</sub></span> は分子でできているので、融点は低くなります。</p>",
      // EN: <div class="worked__math">NaCl: Δ<i>χ</i> = 3.2 − 0.9 = 2.3; average = (0.9 + 3.2) / 2 = 2.05</div><div class="worked__math">SiCl<sub>4</sub>: Δ<i>χ</i> = 3.2 − 1.9 = 1.3; average = (1.9 + 3.2) / 2 = 2.55</div><p>NaCl is in the ionic region and <span class="chem nowrap">SiCl<sub>4</sub></span> is in the polar covalent region. NaCl has a much higher melting point, because of the strong electrostatic attraction between its ions. Molten NaCl conducts electricity because its ions can move, but <span class="chem nowrap">SiCl<sub>4</sub></span> does not conduct because it has no mobile charged particles.</p>
      answer: "<div class=\"worked__math\">NaCl：Δ<i>χ</i> = 3.2 − 0.9 = 2.3；平均 = (0.9 + 3.2) / 2 = 2.05</div><div class=\"worked__math\">SiCl<sub>4</sub>：Δ<i>χ</i> = 3.2 − 1.9 = 1.3；平均 = (1.9 + 3.2) / 2 = 2.55</div><p>NaCl はイオン結合の領域にあり、<span class=\"chem nowrap\">SiCl<sub>4</sub></span> は極性共有結合の領域にあります。NaCl のほうが融点がずっと高くなります。イオンの間に強い静電気的な引力がはたらくからです。融解した NaCl は、イオンが動けるので電気を通します。しかし <span class=\"chem nowrap\">SiCl<sub>4</sub></span> は、動ける荷電粒子がないので電気を通しません。</p>",
      markscheme: [
        // EN: NaCl: difference 2.3 and average 2.05 AND SiCl₄: difference 1.3 and average 2.55.
        "NaCl：差 2.3 と平均 2.05 かつ SiCl₄：差 1.3 と平均 2.55。",
        // EN: NaCl ionic AND SiCl₄ (polar) covalent.
        "NaCl はイオン結合 かつ SiCl₄ は（極性）共有結合。",
        // EN: One valid difference with a reason, for example: NaCl has the higher melting point (strong electrostatic attraction between ions) OR NaCl conducts when molten (mobile ions) and SiCl₄ does not.
        "理由のついた正しい違いを 1 つ。たとえば：NaCl のほうが融点が高い（イオンの間の強い静電気的な引力）または NaCl は融解すると電気を通す（動けるイオン）が、SiCl₄ は通さない。",
      ],
    },

    // ── s2-4-q022 · numeric · challenge · SL · Structure 2.4.2 · 2 marks
    "s2-4-q022": {
      // EN: <p>Element X has an electronegativity of 1.6. It forms a binary compound with a more electronegative element, Y. The compound is at the point (2.4, 1.6) in the bonding triangle: average electronegativity 2.4, electronegativity difference 1.6. Calculate the electronegativity of Y.</p>
      stem: "<p>元素 X の電気陰性度は 1.6 です。X は、より電気陰性度の高い元素 Y と二元化合物をつくります。この化合物は、結合の三角形で点 (2.4, 1.6) にあります。電気陰性度の平均が 2.4、電気陰性度の差が 1.6 です。Y の電気陰性度を計算しなさい (calculate)。</p>",
      hints: [
        // EN: Y is more electronegative than X, so <i>χ</i>(Y) − <i>χ</i>(X) equals the difference.
        "Y は X より電気陰性度が高いので、<i>χ</i>(Y) − <i>χ</i>(X) が差になります。",
        // EN: Either use the difference: <i>χ</i>(Y) = 1.6 + 1.6. Or use the average: the two values add up to 2 × 2.4.
        "差を使うなら：<i>χ</i>(Y) = 1.6 + 1.6。平均を使うなら：2 つの値の合計は 2 × 2.4 です。",
      ],
      // EN: <div class="worked__math"><i>χ</i>(Y) = <i>χ</i>(X) + Δ<i>χ</i> = 1.6 + 1.6 = 3.2</div><p>Check with the average:</p><div class="worked__math">(1.6 + 3.2) / 2 = 4.8 / 2 = 2.4 ✓</div>
      solution: "<div class=\"worked__math\"><i>χ</i>(Y) = <i>χ</i>(X) + Δ<i>χ</i> = 1.6 + 1.6 = 3.2</div><p>平均で確かめます：</p><div class=\"worked__math\">(1.6 + 3.2) / 2 = 4.8 / 2 = 2.4 ✓</div>",
    },

    // ── s2-4-q023 · mcq · foundation · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q023": {
      // EN: <p>Which statement is correct for the formation of every condensation polymer?</p>
      stem: "<p>どの縮合重合体ができるときにも当てはまる文はどれですか。</p>",
      options: [
        // EN: Each monomer must contain a carbon to carbon double bond.
        "どの単量体にも、炭素と炭素の二重結合がなければならない。",
        // EN: The polymer is the only product.
        "生成物は高分子だけである。",
        // EN: A small molecule is released each time two monomers join.
        "2 個の単量体がつながるたびに、小さな分子が放出される。",
        // EN: Only one kind of monomer can be used.
        "単量体は 1 種類しか使えない。",
      ],
      hints: [
        // EN: What does the word “condensation” tell you is formed as well as the polymer?
        "「縮合 (condensation)」という言葉から、高分子のほかに何ができるとわかりますか。",
      ],
      // EN: <p>In condensation polymerization, functional groups on the monomers react together. Each new link releases a small molecule, usually water.</p>
      solution: "<p>縮合重合 (condensation polymerization) では、単量体の官能基どうしが反応します。新しい結合ができるたびに、小さな分子（ふつうは水）が放出されます。</p>",
      misconception: {
        // EN (option A): A C=C double bond is needed for addition polymerization. Condensation monomers need two functional groups instead.
        "0": "C=C 二重結合が必要なのは付加重合です。縮合重合の単量体には、その代わりに官能基が 2 つ必要です。",
        // EN (option B): This is true for addition polymers. A condensation reaction also gives a small molecule, usually water.
        "1": "これは付加重合体に当てはまることです。縮合反応では、小さな分子（ふつうは水）もできます。",
        // EN (option D): Many condensation polymers are made from two different monomers, such as a diol and a dicarboxylic acid.
        "3": "多くの縮合重合体は、ジオールとジカルボン酸のように、2 種類の異なる単量体からできます。",
      },
    },

    // ── s2-4-q024 · mcq · exam · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q024": {
      // EN: <p>A polyester is made from these two monomers.</p><p><span class="chem nowrap">HO–CH<sub>2</sub>–CH<sub>2</sub>–OH</span> &nbsp; and &nbsp; <span class="chem nowrap">HOOC–C<sub>6</sub>H<sub>4</sub>–COOH</span></p><p>Which is the repeating unit of the polyester?</p>
      stem: "<p>次の 2 つの単量体からポリエステル (polyester) ができます。</p><p><span class=\"chem nowrap\">HO–CH<sub>2</sub>–CH<sub>2</sub>–OH</span> &nbsp; と &nbsp; <span class=\"chem nowrap\">HOOC–C<sub>6</sub>H<sub>4</sub>–COOH</span></p><p>このポリエステルの繰り返し単位はどれですか。</p>",
      options: [
        // EN: <span class="chem chem--eq">HO–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–COOH</span>
        "<span class=\"chem chem--eq\">HO–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–COOH</span>",
        // EN: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>
        "<span class=\"chem chem--eq\">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>",
        // EN: <span class="chem chem--eq">–CH<sub>2</sub>–CH<sub>2</sub>–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>
        "<span class=\"chem chem--eq\">–CH<sub>2</sub>–CH<sub>2</sub>–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>",
        // EN: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–O–</span>
        "<span class=\"chem chem--eq\">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–O–</span>",
      ],
      hints: [
        // EN: Water forms from an H of the diol and an –OH of the acid.
        "水は、ジオールの H と酸の –OH からできます。",
        // EN: Remove H from both ends of the diol and –OH from both ends of the acid. Then join them.
        "ジオールの両端から H を取り、酸の両端から –OH を取ります。それからつなげます。",
      ],
      // EN: <p>Each –OH group of the diol loses H. Each –COOH group of the acid loses –OH. Joining O to the C=O carbon gives the ester link: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>. Water is the other product.</p>
      solution: "<p>ジオールの –OH 基は、それぞれ H を失います。酸の –COOH 基は、それぞれ –OH を失います。O を C=O の炭素とつなぐと、エステル結合 (ester link) ができます：<span class=\"chem chem--eq\">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>。もう 1 つの生成物は水です。</p>",
      misconception: {
        // EN (option A): This is the molecule made when one diol joins one acid. It still has an –OH group and a –COOH group at its ends, so it is not a repeating unit. A repeating unit has continuation bonds at both ends.
        "0": "これは、ジオール 1 個と酸 1 個がつながってできる分子です。両端に –OH 基と –COOH 基が残っているので、繰り返し単位ではありません。繰り返し単位には、両端に鎖の続きを表す結合があります。",
        // EN (option C): Both oxygen atoms of the diol have been removed. The diol loses only an H atom at each end. Its oxygen atoms stay and become part of the ester links.
        "2": "ジオールの酸素原子が 2 個とも取り除かれています。ジオールが失うのは、両端の H 原子 1 個ずつだけです。酸素原子は残って、エステル結合の一部になります。",
        // EN (option D): There is one oxygen atom too many. The acid loses its –OH at each end, so the right-hand end is –CO–, not –CO–O–.
        "3": "酸素原子が 1 個多すぎます。酸は両端の –OH を失うので、右端は –CO– で、–CO–O– ではありません。",
      },
    },

    // ── s2-4-q025 · mcq · exam · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q025": {
      // EN: <p>The repeating unit of a polyamide is shown.</p><p><span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span></p><p>Which pair of monomers forms this polymer?</p>
      stem: "<p>ポリアミド (polyamide) の繰り返し単位を示します。</p><p><span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span></p><p>この高分子は、どの単量体の組からできますか。</p>",
      options: [
        // EN: <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>6</sub>–OH</span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>6</sub>–OH</span> と <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
        // EN: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> and <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>8</sub>–OH</span>
        "<span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> と <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>8</sub>–OH</span>",
        // EN: <span class="chem chem--eq">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–COOH</span> and <span class="chem chem--eq">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem chem--eq\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–COOH</span> と <span class=\"chem chem--eq\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
        // EN: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> と <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
      ],
      hints: [
        // EN: Break each bond between N and the C=O carbon.
        "N と C=O の炭素の間の結合を、それぞれ切ります。",
        // EN: Give each N an extra H, and give each C=O carbon an –OH.
        "それぞれの N に H を 1 個加え、それぞれの C=O の炭素に –OH を加えます。",
      ],
      // EN: <p>Break the amide links. The <span class="chem nowrap">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–</span> part gains an H on each nitrogen: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>, a diamine. The <span class="chem nowrap">–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span> part gains an –OH on each carbon: <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>, a dicarboxylic acid.</p>
      solution: "<p>アミド結合を切ります。<span class=\"chem nowrap\">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–</span> の部分は、それぞれの窒素に H がつきます：<span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>。これはジアミンです。<span class=\"chem nowrap\">–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span> の部分は、それぞれの炭素に –OH がつきます：<span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>。これはジカルボン酸です。</p>",
      misconception: {
        // EN (option A): A diol and a dicarboxylic acid give a polyester, with –O–CO– links. This polymer has nitrogen in its links.
        "0": "ジオールとジカルボン酸からは、–O–CO– の結合をもつポリエステルができます。この高分子の結合には窒素があります。",
        // EN (option B): The two C=O groups in the repeating unit have been lost. Each C=O carbon gains an –OH on hydrolysis, to give a –COOH group.
        "1": "繰り返し単位にあった 2 つの C=O 基がなくなっています。加水分解では、それぞれの C=O の炭素に –OH がついて、–COOH 基になります。",
        // EN (option C): The unit shows both nitrogen atoms on the <span class="chem nowrap">(CH<sub>2</sub>)<sub>6</sub></span> part and both C=O groups on the <span class="chem nowrap">(CH<sub>2</sub>)<sub>8</sub></span> part. So one monomer has two –NH<sub>2</sub> groups and the other has two –COOH groups.
        "2": "この単位では、窒素原子は 2 個とも <span class=\"chem nowrap\">(CH<sub>2</sub>)<sub>6</sub></span> の部分についていて、C=O 基は 2 つとも <span class=\"chem nowrap\">(CH<sub>2</sub>)<sub>8</sub></span> の部分についています。だから、一方の単量体には –NH<sub>2</sub> 基が 2 つあり、もう一方には –COOH 基が 2 つあります。",
      },
    },

    // ── s2-4-q026 · short · exam · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q026": {
      // EN: <p>A polyamide is made from these two monomers.</p><p><span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>5</sub>–NH<sub>2</sub></span> &nbsp; and &nbsp; <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH</span></p><p>Draw the repeating unit of the polyamide.</p>
      stem: "<p>次の 2 つの単量体からポリアミド (polyamide) ができます。</p><p><span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>5</sub>–NH<sub>2</sub></span> &nbsp; と &nbsp; <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH</span></p><p>このポリアミドの繰り返し単位を描きなさい (draw)。</p>",
      hints: [
        // EN: An –NH<sub>2</sub> group loses one H. A –COOH group loses –OH.
        "–NH<sub>2</sub> 基は H を 1 個失います。–COOH 基は –OH を失います。",
        // EN: Join N to the C=O carbon. Then open both outer ends in the same way.
        "N を C=O の炭素とつなぎます。それから、外側の両端も同じようにして開きます。",
      ],
      // EN: <p>Remove one H from each –NH<sub>2</sub> group and the –OH from each –COOH group. Join N to the C=O carbon. The unit is <span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span>, and water is the other product. Brackets and <i>n</i> are not required.</p>
      solution: "<p>それぞれの –NH<sub>2</sub> 基から H を 1 個、それぞれの –COOH 基から –OH を取ります。N を C=O の炭素とつなぎます。単位は <span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span> で、もう 1 つの生成物は水です。括弧と <i>n</i> は必須ではありません。</p>",
      // EN: <p><span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span></p><p>Each CO is a carbon atom with a double bond to oxygen. Each nitrogen atom keeps one hydrogen atom. There is a continuation bond at each end.</p>
      answer: "<p><span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span></p><p>CO はどれも、酸素と二重結合している炭素原子です。窒素原子には、それぞれ水素原子が 1 個残ります。両端に鎖の続きを表す結合があります。</p>",
      markscheme: [
        // EN: Correct amide link shown: –NH–CO– (C=O bonded to N–H).
        "正しいアミド結合が示されている：–NH–CO–（C=O が N–H と結合している）。",
        // EN: Continuation bonds at both ends AND the rest of the structure correct, with only one repeating unit drawn.
        "両端に鎖の続きを表す結合がある かつ 残りの構造が正しく、繰り返し単位を 1 つだけ描いている。",
      ],
    },

    // ── s2-4-q027 · multi · exam · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q027": {
      // EN: <p>Which statements about condensation and hydrolysis are correct? Select all that apply.</p>
      stem: "<p>縮合 (condensation) と加水分解 (hydrolysis) について、正しい文はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Proteins form from amino acids by condensation reactions.
        "タンパク質は、アミノ酸から縮合反応でできる。",
        // EN: Hydrolysis of a polyester releases one molecule of water for each link broken.
        "ポリエステルの加水分解では、結合が 1 つ切れるたびに水分子が 1 個放出される。",
        // EN: Hydrolysis breaks the links in a condensation polymer by reaction with water.
        "加水分解では、水との反応で縮合重合体の結合が切れる。",
        // EN: Poly(ethene) is easily broken down into ethene by hydrolysis.
        "ポリエテンは、加水分解で簡単にエテンに分解される。",
        // EN: One molecule of water is released when an amide link forms from an –NH<sub>2</sub> group and a –COOH group.
        "–NH<sub>2</sub> 基と –COOH 基からアミド結合ができるとき、水分子が 1 個放出される。",
      ],
      hints: [
        // EN: Condensation and hydrolysis are opposites. In which one is water a product?
        "縮合と加水分解は逆の反応です。水が生成物になるのはどちらですか。",
      ],
      // EN: <p>All biological macromolecules, including proteins, form by condensation and break down by hydrolysis. Condensation releases water as each link forms. Hydrolysis uses water to break each link.</p>
      solution: "<p>タンパク質を含めて、生体の巨大分子はすべて、縮合でできて加水分解でこわれます。縮合では、結合ができるたびに水が放出されます。加水分解では、水を使って結合を切ります。</p>",
      misconception: {
        // EN (option B): Hydrolysis uses water. It does not release it. One molecule of water is a reactant for each link that breaks.
        "1": "加水分解では水を使います。水は放出されません。結合が 1 つ切れるたびに、水分子 1 個が反応物になります。",
        // EN (option D): Poly(ethene) is an addition polymer. Its backbone has only carbon to carbon bonds, with no ester or amide links for water to break.
        "3": "ポリエテンは付加重合体です。主鎖には炭素と炭素の結合しかなく、水が切れるエステル結合やアミド結合はありません。",
      },
    },

    // ── s2-4-q028 · numeric · challenge · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q028": {
      // EN: <p>150 molecules of a diamine react with 150 molecules of a dicarboxylic acid. They form one polyamide chain that contains all 300 monomer units. How many molecules of water are released?</p>
      stem: "<p>ジアミンの分子 150 個が、ジカルボン酸の分子 150 個と反応します。300 個の単量体の単位をすべて含む、1 本のポリアミドの鎖ができます。水分子は何個放出されますか。</p>",
      hints: [
        // EN: One molecule of water is released for each amide link that forms.
        "アミド結合が 1 つできるたびに、水分子が 1 個放出されます。",
        // EN: How many links join 300 units in a single chain? Try it with 2 units, then 3 units.
        "1 本の鎖で 300 個の単位をつなぐ結合は何個ですか。まず単位 2 個で、次に 3 個で考えてみましょう。",
      ],
      // EN: <p>Two units need 1 link. Three units need 2 links. A chain of <i>N</i> units has <i>N</i> − 1 links.</p><div class="worked__math">links = 300 − 1 = 299, so 299 molecules of H<sub>2</sub>O</div>
      solution: "<p>単位が 2 個なら、結合は 1 個です。3 個なら、結合は 2 個です。単位が <i>N</i> 個の鎖には、結合が <i>N</i> − 1 個あります。</p><div class=\"worked__math\">結合 = 300 − 1 = 299 なので、H<sub>2</sub>O 分子は 299 個</div>",
    },

    // ── s2-4-q029 · short · challenge · AHL · Structure 2.4.6 · 3 marks
    "s2-4-q029": {
      // EN: <p>The repeating unit of a polyester is shown.</p><p><span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>4</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span></p><p>(a) Deduce the structures of the two monomers formed when this polymer is hydrolysed. (b) Suggest why this polymer breaks down in the environment more readily than poly(ethene).</p>
      stem: "<p>ポリエステルの繰り返し単位を示します。</p><p><span class=\"chem chem--eq\">–O–(CH<sub>2</sub>)<sub>4</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span></p><p>(a) この高分子を加水分解したときにできる 2 つの単量体の構造を導きなさい (deduce)。(b) この高分子が、ポリエテン (poly(ethene)) より環境の中で分解されやすい理由を提案しなさい (suggest)。</p>",
      hints: [
        // EN: Break each bond between O and the C=O carbon.
        "O と C=O の炭素の間の結合を、それぞれ切ります。",
        // EN: Each O gains an H. Each C=O carbon gains an –OH.
        "それぞれの O に H がつきます。それぞれの C=O の炭素に –OH がつきます。",
        // EN: For (b), compare the backbones of the two polymers.
        "(b) では、2 つの高分子の主鎖をくらべましょう。",
      ],
      // EN: <p>Hydrolysis breaks each ester link. The <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>4</sub>–O–</span> part gains an H at each end to give the diol. The <span class="chem nowrap">–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span> part gains an –OH at each end to give the dicarboxylic acid. Addition polymers have no links that water can break.</p>
      solution: "<p>加水分解で、エステル結合がそれぞれ切れます。<span class=\"chem nowrap\">–O–(CH<sub>2</sub>)<sub>4</sub>–O–</span> の部分は、両端に H がついてジオールになります。<span class=\"chem nowrap\">–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span> の部分は、両端に –OH がついてジカルボン酸になります。付加重合体には、水が切れる結合がありません。</p>",
      // EN: <p>(a) <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>4</sub>–OH</span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>2</sub>–COOH</span>.</p><p>(b) The polyester has ester links in its backbone, which can be broken by hydrolysis (reaction with water). Poly(ethene) has only strong carbon to carbon bonds in its backbone, which are not hydrolysed.</p>
      answer: "<p>(a) <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>4</sub>–OH</span> と <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>2</sub>–COOH</span>。</p><p>(b) このポリエステルは主鎖にエステル結合があり、加水分解（水との反応）で切れます。ポリエテンの主鎖には強い炭素と炭素の結合しかなく、加水分解されません。</p>",
      markscheme: [
        // EN: HO–(CH₂)₄–OH (the diol).
        "HO–(CH₂)₄–OH（ジオール）。",
        // EN: HOOC–(CH₂)₂–COOH (the dicarboxylic acid).
        "HOOC–(CH₂)₂–COOH（ジカルボン酸）。",
        // EN: The polyester has ester links that can be hydrolysed / broken by water, but poly(ethene) has only (strong, non-polar) C–C bonds in its chain.
        "ポリエステルには、加水分解できる / 水で切れるエステル結合がある。しかしポリエテンの鎖には（強くて無極性の）C–C 結合しかない。",
      ],
    },

    // ── s2-4-q030 · mcq · challenge · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q030": {
      // EN: <p>A single monomer can form a condensation polymer if it has two different functional groups. The monomer <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>5</sub>–COOH</span> forms a polyester. Which is the repeating unit?</p>
      stem: "<p>異なる官能基を 2 つもつ単量体は、1 種類だけで縮合重合体をつくれます。単量体 <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>5</sub>–COOH</span> からポリエステルができます。繰り返し単位はどれですか。</p>",
      options: [
        // EN: <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "<span class=\"chem nowrap\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>",
        // EN: <span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "<span class=\"chem chem--eq\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>",
        // EN: <span class="chem nowrap">–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>
        "<span class=\"chem nowrap\">–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>",
        // EN: <span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–</span>
        "<span class=\"chem chem--eq\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–O–</span>",
      ],
      hints: [
        // EN: The –OH end of one molecule reacts with the –COOH end of the next molecule.
        "ある分子の –OH の端が、次の分子の –COOH の端と反応します。",
        // EN: Remove H from the –OH end and –OH from the –COOH end.
        "–OH の端から H を取り、–COOH の端から –OH を取ります。",
      ],
      // EN: <p>Each molecule loses an H from its –OH group and an –OH from its –COOH group, which together make one molecule of water. What remains is <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>. The ester link forms where one unit joins the next.</p>
      solution: "<p>どの分子も、–OH 基から H を、–COOH 基から –OH を失います。これらが合わさって、水分子が 1 個できます。残るのは <span class=\"chem nowrap\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span> です。エステル結合は、単位が次の単位とつながるところにできます。</p>",
      misconception: {
        // EN (option B): This shows two repeating units. With one kind of monomer, the smallest part that repeats comes from a single monomer molecule.
        "1": "これは繰り返し単位 2 つ分です。単量体が 1 種類のとき、繰り返す最も小さな部分は、単量体の分子 1 個からできます。",
        // EN (option C): The oxygen of the –OH group has been removed. The –OH group loses only its H. Its oxygen becomes part of the ester link.
        "2": "–OH 基の酸素が取り除かれています。–OH 基が失うのは H だけです。酸素はエステル結合の一部になります。",
        // EN (option D): There is one oxygen atom too many. The –COOH group loses its –OH, so that end of the unit is –CO–.
        "3": "酸素原子が 1 個多すぎます。–COOH 基は –OH を失うので、単位のその端は –CO– です。",
      },
    },

    // ── s2-4-q031 · mcq · foundation · SL · Structure 2.4.1 · 1 mark
    "s2-4-q031": {
      // EN: <p>Chemists describe bonding as a continuum between the ionic, covalent and metallic models. What does this mean?</p>
      stem: "<p>化学では、結合はイオン結合・共有結合・金属結合の 3 つのモデルの間の連続体 (continuum) だと言います。これはどういう意味ですか。</p>",
      options: [
        // EN: Every substance has exactly one of the three types of bonding.
        "どの物質の結合も、3 種類のうちのちょうど 1 つである。",
        // EN: Bonding changes gradually from one type to another, and many substances lie between the models.
        "結合はある種類から別の種類へ少しずつ変わり、多くの物質がモデルの中間にある。",
        // EN: Every substance has equal amounts of the three types of bonding.
        "どの物質も、3 種類の結合を同じ量ずつもっている。",
        // EN: The type of bonding in a substance changes when the substance is heated.
        "物質を加熱すると、その物質の結合の種類が変わる。",
      ],
      hints: [
        // EN: Think of the bonding triangle. Are substances found only at its three corners?
        "結合の三角形を考えましょう。物質は 3 つの角にしかありませんか。",
      ],
      // EN: <p>A continuum is a smooth range with no sharp dividing lines. The three models are the extremes. The bonding in most substances lies somewhere between them, and the bonding triangle shows where.</p>
      solution: "<p>連続体とは、はっきりした境目のない、なめらかにつながった範囲のことです。3 つのモデルは、その極端な形です。ほとんどの物質の結合は、その間のどこかにあります。どこにあるかは、結合の三角形でわかります。</p>",
      misconception: {
        // EN (option A): This describes three separate boxes. A continuum has no sharp dividing lines: a polar covalent bond, for example, is covalent with some ionic character.
        "0": "これは、3 つの別々の箱という考え方です。連続体には、はっきりした境目がありません。たとえば極性共有結合は、イオン結合の性格を少しもった共有結合です。",
        // EN (option C): The amounts are not equal. A substance near a corner of the bonding triangle is described well by one model. A substance between the corners has character of more than one model.
        "2": "量は同じではありません。結合の三角形の角の近くにある物質は、1 つのモデルでよく説明できます。角と角の間にある物質は、2 つ以上のモデルの性格をもちます。",
        // EN (option D): A continuum is not about one substance changing. It is about the gradual change in bonding from one substance to the next.
        "3": "連続体とは、1 つの物質が変化するという意味ではありません。物質から物質へ、結合が少しずつ変わっていくという意味です。",
      },
    },

    // ── s2-4-q032 · short · exam · SL · Structure 2.4.1 · 2 marks
    "s2-4-q032": {
      // EN: <p>Solid copper conducts electricity. Solid sodium chloride does not. Use bonding models to explain this difference.</p>
      stem: "<p>固体の銅は電気を通します。固体の塩化ナトリウムは通しません。結合モデルを使って、この違いを説明しなさい (explain)。</p>",
      hints: [
        // EN: To conduct electricity, a substance needs charged particles that can move.
        "物質が電気を通すには、動ける荷電粒子が必要です。",
        // EN: Name the charged particles in each solid. Can they move?
        "それぞれの固体にある荷電粒子の名前を挙げましょう。その粒子は動けますか。",
      ],
      // EN: <p>Name the particles and say whether they can move. In copper the delocalized electrons move. In solid sodium chloride the charged particles are ions, and they are fixed in the lattice. “Sodium chloride has no free electrons” does not earn the mark, because an ionic compound conducts through moving ions when it is molten.</p>
      solution: "<p>粒子の名前を書き、動けるかどうかを書きます。銅では、非局在化電子が動きます。固体の塩化ナトリウムでは、荷電粒子はイオンで、結晶格子の中に固定されています。「塩化ナトリウムには自由電子がない」では点になりません。イオン化合物は、融解すると、動くイオンによって電気を通すからです。</p>",
      // EN: <p>Copper has metallic bonding: a lattice of cations with delocalized electrons. The delocalized electrons are free to move through the solid, so they carry charge.</p><p>Sodium chloride has ionic bonding. In the solid, the ions are held in fixed positions in the lattice, so no charged particles are free to move.</p>
      answer: "<p>銅は金属結合です。陽イオンの結晶格子と非局在化電子でできています。非局在化電子は固体の中を自由に動けるので、電荷を運びます。</p><p>塩化ナトリウムはイオン結合です。固体では、イオンが結晶格子の決まった位置に固定されているので、自由に動ける荷電粒子がありません。</p>",
      markscheme: [
        // EN: Copper: delocalized electrons that are free to move / mobile (through the lattice).
        "銅：非局在化電子が（結晶格子の中を）自由に動ける / 動ける。",
        // EN: Sodium chloride: ions are in fixed positions / cannot move in the solid (lattice). Do not accept “no free electrons” alone.
        "塩化ナトリウム：固体（結晶格子）では、イオンが決まった位置にある / 動けない。「自由電子がない」だけでは認めない。",
      ],
    },

    // ── s2-4-q033 · mcq · foundation · SL · Structure 2.4.3 · 1 mark
    "s2-4-q033": {
      // EN: <p>Bronze is made by adding tin to copper. Bronze is harder than pure copper. Which statement explains this?</p>
      stem: "<p>青銅は、銅にスズを加えてつくります。青銅は純粋な銅よりかたい物質です。これを説明している文はどれですか。</p>",
      options: [
        // EN: The tin atoms form strong covalent bonds with the copper atoms.
        "スズ原子が銅原子と強い共有結合をつくる。",
        // EN: The tin atoms are a different size, so the layers cannot slide over each other as easily.
        "スズ原子は大きさが違うので、層がたがいにすべりにくくなる。",
        // EN: The tin atoms remove the delocalized electrons from the copper.
        "スズ原子が銅から非局在化電子を取り除く。",
        // EN: The tin atoms and the copper atoms form an ionic lattice.
        "スズ原子と銅原子がイオンの結晶格子をつくる。",
      ],
      hints: [
        // EN: Why is a pure metal malleable? What must the layers be able to do?
        "純粋な金属に展性があるのはなぜですか。層は何ができなければなりませんか。",
      ],
      // EN: <p>In pure copper the cations are all the same size and form regular layers, which slide over each other. Tin atoms are a different size. They disrupt the regular layers, so the layers slide less easily and the alloy is harder.</p>
      solution: "<p>純粋な銅では、陽イオンの大きさがすべて同じで、規則正しい層をつくり、層はたがいにすべります。スズ原子は大きさが違います。規則正しい層を乱すので、層がすべりにくくなり、合金はよりかたくなります。</p>",
      misconception: {
        // EN (option A): The bonding in an alloy is still metallic. The alloy is harder because its layers are disrupted, not because new covalent bonds form.
        "0": "合金の結合は、金属結合のままです。合金がかたいのは層が乱れるからで、新しい共有結合ができるからではありません。",
        // EN (option C): The delocalized electrons stay. Tin is a metal and adds its own outer electrons to them.
        "2": "非局在化電子は残ります。スズは金属なので、自分の外側の電子をそこに加えます。",
        // EN (option D): Both elements are metals, and neither forms negative ions here. The bonding stays metallic.
        "3": "どちらの元素も金属で、ここではどちらも陰イオンになりません。結合は金属結合のままです。",
      },
    },

    // ── s2-4-q034 · mcq · foundation · SL · Structure 2.4.4 · 1 mark
    "s2-4-q034": {
      // EN: <p>Polymers can be natural or synthetic. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Natural polymer</th><th scope="col">Synthetic polymer</th></tr></thead><tbody><tr><th scope="row">A</th><td>poly(ethene)</td><td>starch</td></tr><tr><th scope="row">B</th><td>protein</td><td>poly(ethene)</td></tr><tr><th scope="row">C</th><td>water</td><td>protein</td></tr><tr><th scope="row">D</th><td>cellulose</td><td>ethene</td></tr></tbody></table></div>
      stem: "<p>高分子には、天然のものと合成のものがあります。正しい行はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">天然高分子</th><th scope=\"col\">合成高分子</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>ポリエテン (poly(ethene))</td><td>デンプン</td></tr><tr><th scope=\"row\">B</th><td>タンパク質</td><td>ポリエテン (poly(ethene))</td></tr><tr><th scope=\"row\">C</th><td>水</td><td>タンパク質</td></tr><tr><th scope=\"row\">D</th><td>セルロース</td><td>エテン (ethene)</td></tr></tbody></table></div>",
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
        // EN: Natural polymers are made by living things. Synthetic polymers are made in factories.
        "天然高分子は、生物がつくります。合成高分子は、工場でつくります。",
        // EN: A polymer is a large molecule. Check that both substances in the row are polymers.
        "高分子は大きな分子です。その行の物質が 2 つとも高分子かどうかを確かめましょう。",
      ],
      // EN: <p>Proteins are natural polymers: living things make them from amino acids. Poly(ethene) is a synthetic polymer, a plastic made from ethene. Row B is correct.</p>
      solution: "<p>タンパク質は天然高分子です。生物がアミノ酸からつくります。ポリエテンは合成高分子で、エテンからつくるプラスチックです。正しいのは B の行です。</p>",
      misconception: {
        // EN (option A): These are the wrong way round. Starch is made by plants, so it is natural. Poly(ethene) is made in factories, so it is synthetic.
        "0": "逆になっています。デンプンは植物がつくるので、天然です。ポリエテンは工場でつくるので、合成です。",
        // EN (option C): Water is a small molecule, not a polymer. Protein is a natural polymer, made by living things.
        "2": "水は小さな分子で、高分子ではありません。タンパク質は、生物がつくる天然高分子です。",
        // EN (option D): Cellulose is a natural polymer, but ethene is a small molecule. Ethene is the monomer that makes the polymer poly(ethene).
        "3": "セルロースは天然高分子ですが、エテンは小さな分子です。エテンは、高分子のポリエテンをつくる単量体です。",
      },
    },

    // ── s2-4-q035 · mcq · exam · SL · Structure 2.4.4 · 1 mark
    "s2-4-q035": {
      // EN: <p>Many plastics soften when they are warmed, so they can be moulded into new shapes. Which statement explains this?</p>
      stem: "<p>多くのプラスチックは、温めるとやわらかくなり、型に入れて新しい形にできます。これを説明している文はどれですか。</p>",
      options: [
        // EN: The covalent bonds inside the polymer chains break.
        "高分子の鎖の中の共有結合が切れる。",
        // EN: The weak intermolecular forces between the polymer chains are overcome, so the chains can slide past each other.
        "高分子の鎖と鎖の間の弱い分子間力に打ち勝つので、鎖がたがいにすべって動けるようになる。",
        // EN: The delocalized electrons in the plastic gain energy and move faster.
        "プラスチックの中の非局在化電子がエネルギーを得て、速く動く。",
        // EN: The ions in the plastic become free to move.
        "プラスチックの中のイオンが自由に動けるようになる。",
      ],
      hints: [
        // EN: There are two kinds of attraction in a plastic: inside each chain, and between chains. Which is weaker?
        "プラスチックには 2 種類の引力があります。1 本の鎖の中の引力と、鎖と鎖の間の引力です。弱いのはどちらですか。",
      ],
      // EN: <p>Inside each chain the atoms are joined by strong covalent bonds. Between the chains there are only weak intermolecular forces. Gentle heating overcomes these weak forces, so the chains slide past each other and the plastic softens. No covalent bonds break.</p>
      solution: "<p>1 本の鎖の中では、原子は強い共有結合でつながっています。鎖と鎖の間には、弱い分子間力 (intermolecular forces) しかはたらいていません。おだやかに加熱すると、この弱い力に打ち勝つので、鎖がたがいにすべって動き、プラスチックはやわらかくなります。共有結合は切れません。</p>",
      misconception: {
        // EN (option A): The covalent bonds in the chains are strong and do not break on gentle heating. If they broke, the plastic would decompose into new substances.
        "0": "鎖の中の共有結合は強く、おだやかな加熱では切れません。もし切れたら、プラスチックは分解して別の物質になってしまいます。",
        // EN (option C): A plastic has no delocalized electrons. All its outer electrons are held in covalent bonds, which is why it is an electrical insulator.
        "2": "プラスチックに非局在化電子はありません。外側の電子はすべて共有結合に使われています。だから電気を通さないのです。",
        // EN (option D): A plastic is made of covalently bonded molecules. It contains no ions.
        "3": "プラスチックは、共有結合でできた分子からなります。イオンは含みません。",
      },
    },

    // ── s2-4-q036 · multi · exam · SL · Structure 2.4.4 · 2 marks
    "s2-4-q036": {
      // EN: <p>Which statements about plastics are correct? Select all that apply.</p>
      stem: "<p>プラスチックについて、正しい文はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: A plastic is made of very long molecules.
        "プラスチックは、とても長い分子でできている。",
        // EN: Plastics are electrical insulators because all their outer electrons are held in covalent bonds.
        "プラスチックが電気を通さないのは、外側の電子がすべて共有結合に使われているからである。",
        // EN: Plastics are unreactive because the forces between the chains are weak.
        "プラスチックが反応しにくいのは、鎖と鎖の間の力が弱いからである。",
        // EN: The atoms inside each polymer chain are joined by strong covalent bonds.
        "高分子の鎖の中の原子は、強い共有結合でつながっている。",
        // EN: Most plastics are quickly broken down by microorganisms.
        "ほとんどのプラスチックは、微生物によってすぐに分解される。",
      ],
      hints: [
        // EN: Separate the two ideas: strong covalent bonds inside a chain, and weak forces between chains.
        "2 つの考え方を分けましょう。鎖の中の強い共有結合と、鎖と鎖の間の弱い力です。",
        // EN: A chemical property depends on breaking bonds inside the chains.
        "化学的性質は、鎖の中の結合が切れるかどうかで決まります。",
      ],
      // EN: <p>Plastics are polymers: very long molecules with strong covalent bonds inside each chain. There are no delocalized electrons or ions, so plastics do not conduct electricity. The strong covalent bonds make plastics unreactive and, for most plastics, non-biodegradable.</p>
      solution: "<p>プラスチックは高分子です。とても長い分子で、鎖の中には強い共有結合があります。非局在化電子もイオンもないので、プラスチックは電気を通しません。強い共有結合のために、プラスチックは反応しにくく、ほとんどのプラスチックは生分解されません。</p>",
      misconception: {
        // EN (option C): The weak forces between chains explain physical properties, such as softening on heating. Plastics are unreactive because the covalent bonds inside the chains are strong.
        "2": "鎖と鎖の間の弱い力で説明できるのは、加熱するとやわらかくなる、といった物理的性質です。プラスチックが反応しにくいのは、鎖の中の共有結合が強いからです。",
        // EN (option E): Most plastics are non-biodegradable. Microorganisms cannot easily break the strong covalent bonds in the chains, so plastic waste stays in the environment for a very long time.
        "4": "ほとんどのプラスチックは生分解されません。微生物は鎖の中の強い共有結合をなかなか切れないので、プラスチックのごみはとても長い間、環境に残ります。",
      },
    },

    // ── s2-4-q037 · mcq · foundation · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q037": {
      // EN: <p>A diamine reacts with a dicarboxylic acid to form a condensation polymer. Which row gives the type of polymer and the link between the monomer units?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of polymer</th><th scope="col">Link</th></tr></thead><tbody><tr><th scope="row">A</th><td>polyester</td><td>–CO–O–</td></tr><tr><th scope="row">B</th><td>polyamide</td><td>–CO–O–</td></tr><tr><th scope="row">C</th><td>polyamide</td><td>–CO–NH–</td></tr><tr><th scope="row">D</th><td>polyester</td><td>–CO–NH–</td></tr></tbody></table></div>
      stem: "<p>ジアミンがジカルボン酸と反応して、縮合重合体ができます。高分子の種類と、単量体の単位の間の結合を正しく示している行はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">高分子の種類</th><th scope=\"col\">結合</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>ポリエステル (polyester)</td><td>–CO–O–</td></tr><tr><th scope=\"row\">B</th><td>ポリアミド (polyamide)</td><td>–CO–O–</td></tr><tr><th scope=\"row\">C</th><td>ポリアミド (polyamide)</td><td>–CO–NH–</td></tr><tr><th scope=\"row\">D</th><td>ポリエステル (polyester)</td><td>–CO–NH–</td></tr></tbody></table></div>",
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
        // EN: A diamine has two –NH<sub>2</sub> groups. Which atom of the diamine joins to the C=O carbon?
        "ジアミンには –NH<sub>2</sub> 基が 2 つあります。ジアミンのどの原子が C=O の炭素とつながりますか。",
      ],
      // EN: <p>An –NH<sub>2</sub> group reacts with a –COOH group. Water is released and an amide link, –CO–NH–, forms. A polymer with many amide links is a polyamide.</p>
      solution: "<p>–NH<sub>2</sub> 基が –COOH 基と反応します。水が放出されて、アミド結合 –CO–NH– ができます。アミド結合をたくさんもつ高分子がポリアミドです。</p>",
      misconception: {
        // EN (option A): A polyester forms from a diol and a dicarboxylic acid. Here the first monomer is a diamine, with –NH<sub>2</sub> groups, so the link must contain nitrogen.
        "0": "ポリエステルは、ジオールとジカルボン酸からできます。ここでは 1 つ目の単量体が –NH<sub>2</sub> 基をもつジアミンなので、結合には窒素が入っているはずです。",
        // EN (option B): The name is right, but –CO–O– is an ester link. An amide link contains nitrogen: –CO–NH–.
        "1": "名前は正しいのですが、–CO–O– はエステル結合です。アミド結合には窒素があります：–CO–NH–。",
        // EN (option D): The link is right, but a polymer with –CO–NH– links is called a polyamide.
        "3": "結合は正しいのですが、–CO–NH– の結合をもつ高分子はポリアミドと呼びます。",
      },
    },

  }
});
