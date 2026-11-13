/* s2-4.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's2-4.q', {
  questions: {

    // ── s2-4-q001 · mcq · foundation · SL · Structure 2.4.1 · 1 mark
    "s2-4-q001": {
      // EN: <p>The bonding triangle shows bonding as a continuum between the ionic, covalent and metallic models. What is plotted on its two axes?</p>
      stem: "<p>鍵合三角顯示鍵合是介乎離子、共價和金屬三個模型之間的連續體。它的兩條軸分別代表甚麼？</p>",
      options: [
        // EN: Horizontal: average electronegativity. Vertical: electronegativity difference.
        "橫軸：平均電負性。縱軸：電負性差。",
        // EN: Horizontal: electronegativity difference. Vertical: average electronegativity.
        "橫軸：電負性差。縱軸：平均電負性。",
        // EN: Horizontal: sum of the electronegativities. Vertical: electronegativity difference.
        "橫軸：電負性的總和。縱軸：電負性差。",
        // EN: Horizontal: electronegativity of the metal. Vertical: electronegativity of the non-metal.
        "橫軸：金屬的電負性。縱軸：非金屬的電負性。",
      ],
      hints: [
        // EN: Ionic compounds have a large electronegativity difference. Where are they on the triangle: high up, or far along?
        "離子化合物的電負性差很大。它們在三角形的哪裏：位置很高，還是很靠右？",
      ],
      // EN: <p>The horizontal axis is the average electronegativity of the two elements. The vertical axis is the electronegativity difference. A large difference puts a compound near the ionic top.</p>
      solution: "<p>橫軸是兩種元素的平均電負性。縱軸是電負性差。電負性差大，化合物就靠近離子的頂部。</p>",
      misconception: {
        // EN (option B): The axes are swapped. The difference goes up the triangle, which is why the most ionic compounds are at the top.
        "1": "兩條軸調轉了。電負性差沿三角形向上量，所以離子性最強的化合物在頂部。",
        // EN (option C): The horizontal axis is the average, not the sum. The sum of two values can be as large as 7.4, which is off the scale.
        "2": "橫軸是平均值，不是總和。兩個數值的總和可以高達 7.4，超出了標度。",
        // EN (option D): The triangle does not need a metal and a non-metal. It uses the same two calculations for any two elements.
        "3": "鍵合三角不需要一種金屬配一種非金屬。任何兩種元素都用同樣的兩項計算。",
      },
    },

    // ── s2-4-q002 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q002": {
      // EN: <p>Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(Cl) = 3.2. Calculate the electronegativity difference for magnesium chloride, <span class="chem nowrap">MgCl<sub>2</sub></span>.</p>
      stem: "<p>使用 <i>χ</i>(Mg) = 1.3 和 <i>χ</i>(Cl) = 3.2。計算 (calculate) 氯化鎂 (magnesium chloride) <span class=\"chem nowrap\">MgCl<sub>2</sub></span> 的電負性差。</p>",
      hints: [
        // EN: Subtract the smaller value from the larger value.
        "用較大的數值減去較小的數值。",
        // EN: Use one value for each element. The 2 in the formula is not used.
        "每種元素只用一個數值。化學式中的 2 用不着。",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 1.3 = 1.9</div>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 1.3 = 1.9</div>",
    },

    // ── s2-4-q003 · numeric · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q003": {
      // EN: <p>Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity for magnesium chloride, <span class="chem nowrap">MgCl<sub>2</sub></span>.</p>
      stem: "<p>使用 <i>χ</i>(Mg) = 1.3 和 <i>χ</i>(Cl) = 3.2。計算 (calculate) 氯化鎂 (magnesium chloride) <span class=\"chem nowrap\">MgCl<sub>2</sub></span> 的平均電負性。</p>",
      hints: [
        // EN: Add the two values, then divide by 2.
        "把兩個數值相加，再除以 2。",
        // EN: Use one value for each element. Do not count chlorine twice.
        "每種元素只用一個數值。氯不要計算兩次。",
      ],
      // EN: <div class="worked__math">average <i>χ</i> = (1.3 + 3.2) / 2 = 4.5 / 2 = 2.25</div>
      solution: "<div class=\"worked__math\">平均 <i>χ</i> = (1.3 + 3.2) / 2 = 4.5 / 2 = 2.25</div>",
    },

    // ── s2-4-q004 · mcq · foundation · SL · Structure 2.4.2 · 1 mark
    "s2-4-q004": {
      // EN: <p>A binary compound has an average electronegativity of 2.7 and an electronegativity difference of 1.0. Use the bonding triangle to deduce its bonding type.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>某二元化合物的平均電負性是 2.7，電負性差是 1.0。利用鍵合三角推斷 (deduce) 它的鍵合類型。</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"鍵合三角。橫軸：平均電負性，由 0.5 到 4.0。縱軸：電負性差，由 0 到 3.0。金屬區域在左下方，在底邊上延伸到平均值約 1.9。離子區域是一條向頂部上升的帶。共價和極性共價區域在右下方。\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">金屬</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">離子</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">極性</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共價</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共價</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">平均電負性</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電負性差</text></svg>",
      options: [
        // EN: Ionic
        "離子",
        // EN: Polar covalent
        "極性共價",
        // EN: Metallic
        "金屬",
        // EN: Non-polar covalent
        "非極性共價",
      ],
      hints: [
        // EN: Go along the horizontal axis to 2.7. Then go up to 1.0.
        "沿橫軸走到 2.7。然後向上走到 1.0。",
      ],
      // EN: <p>The point (2.7, 1.0) is on the right-hand side of the triangle and well above the base. That is the polar covalent region.</p>
      solution: "<p>點 (2.7, 1.0) 在三角形的右邊，遠高於底邊。那是極性共價區域。</p>",
      misconception: {
        // EN (option A): Check the axes. Going along to 1.0 and up to 2.7 is the wrong way round. The average, 2.7, goes along and the difference, 1.0, goes up.
        "0": "檢查兩條軸。橫向走到 1.0、向上走到 2.7 是調轉了。平均值 2.7 橫向量，電負性差 1.0 向上量。",
        // EN (option C): The metallic region is at the bottom left, where the average is below about 1.9. An average of 2.7 is far to the right of it.
        "2": "金屬區域在左下方，那裏的平均值低於約 1.9。平均值 2.7 遠在它的右邊。",
        // EN (option D): A non-polar covalent bond has a difference of 0, so its point is on the base line. This point is at a height of 1.0.
        "3": "非極性共價鍵的電負性差是 0，所以它的點在底線上。這一點的高度是 1.0。",
      },
    },

    // ── s2-4-q005 · mcq · foundation · SL · Structure 2.4.3 · 1 mark
    "s2-4-q005": {
      // EN: <p>Which statement describes an alloy?</p>
      stem: "<p>以下哪一項描述合金 (alloy)？</p>",
      options: [
        // EN: A compound of two metals that are chemically combined in a fixed ratio.
        "兩種金屬按固定比例以化學方式結合而成的化合物。",
        // EN: A mixture of a metal and other metals or non-metals.
        "金屬與其他金屬或非金屬的混合物。",
        // EN: An ionic compound of a metal and a non-metal.
        "金屬與非金屬形成的離子化合物。",
        // EN: A pure metal that has been heated and then cooled quickly.
        "加熱後急速冷卻的純金屬。",
      ],
      hints: [
        // EN: Think of steel: iron with a little carbon. Is the amount of carbon fixed?
        "想想鋼：鐵加少量碳。碳的分量是固定的嗎？",
      ],
      // EN: <p>An alloy is a mixture of a metal and other metals or non-metals. It has enhanced properties, such as greater hardness.</p>
      solution: "<p>合金是金屬與其他金屬或非金屬的混合物。它的性質有所提升，例如硬度較高。</p>",
      misconception: {
        // EN (option A): An alloy is a mixture, not a compound. The proportions of the elements can vary.
        "0": "合金是混合物，不是化合物。各元素的比例可以改變。",
        // EN (option C): An ionic compound has ions in a fixed ratio. In an alloy the bonding is metallic, and a non-metal such as carbon can be one of the components without forming an ionic lattice.
        "2": "離子化合物的離子有固定比例。合金的鍵合是金屬鍵，而碳等非金屬可以是成分之一，卻不會形成離子晶格。",
        // EN (option D): A pure metal contains only one element. An alloy always contains at least one other element.
        "3": "純金屬只含一種元素。合金一定含有至少一種其他元素。",
      },
    },

    // ── s2-4-q006 · mcq · foundation · SL · Structure 2.4.4 · 1 mark
    "s2-4-q006": {
      // EN: <p>Which statement describes a polymer?</p>
      stem: "<p>以下哪一項描述聚合物 (polymer)？</p>",
      options: [
        // EN: A small molecule that can join to many others like it.
        "能與許多同類分子連接的小分子。",
        // EN: A giant lattice of positive and negative ions.
        "由正離子和負離子構成的巨型晶格。",
        // EN: A large molecule made from many repeating subunits.
        "由許多重複的次單位構成的大型分子。",
        // EN: A mixture of a metal and other elements.
        "金屬與其他元素的混合物。",
      ],
      hints: [
        // EN: “Poly” means many. “Mono” means one.
        "「Poly」的意思是多。「Mono」的意思是一。",
      ],
      // EN: <p>A polymer is a large molecule (a macromolecule) made from many repeating subunits. The subunits come from small molecules called monomers.</p>
      solution: "<p>聚合物是由許多重複的次單位構成的大型分子（大分子）。這些次單位來自稱為單體的小分子。</p>",
      misconception: {
        // EN (option A): This describes a monomer. The polymer is the large molecule that forms when many monomers join.
        "0": "這是單體的描述。聚合物是許多單體連接後形成的大型分子。",
        // EN (option B): This describes an ionic compound. A polymer is a covalently bonded molecule.
        "1": "這是離子化合物的描述。聚合物是以共價鍵結合的分子。",
        // EN (option D): This describes an alloy.
        "3": "這是合金的描述。",
      },
    },

    // ── s2-4-q007 · mcq · foundation · SL · Structure 2.4.5 · 1 mark
    "s2-4-q007": {
      // EN: <p>Chloroethene, <span class="chem nowrap">CH<sub>2</sub>=CHCl</span>, forms an addition polymer. Which is the repeating unit of the polymer?</p>
      stem: "<p>Chloroethene <span class=\"chem nowrap\">CH<sub>2</sub>=CHCl</span> 形成加成聚合物 (addition polymer)。以下哪一個是這種聚合物的重複單位？</p>",
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
        "把 C=C 改為 C–C。然後在兩端各加一個鍵。",
        // EN: The side groups stay on the same carbon atoms.
        "側基留在原來的碳原子上。",
      ],
      // EN: <p>The double bond becomes a single bond, and each of the two carbons gains a continuation bond: <span class="chem nowrap">–CH<sub>2</sub>–CHCl–</span>. The chlorine atom stays on its carbon as a side group.</p>
      solution: "<p>雙鍵變成單鍵，兩個碳各得到一個延伸鍵：<span class=\"chem nowrap\">–CH<sub>2</sub>–CHCl–</span>。氯原子留在它的碳上，成為側基。</p>",
      misconception: {
        // EN (option A): The double bond does not stay. One bond of the C=C breaks so that each carbon can join to a neighbour. Two hydrogen atoms have also been lost here, but no atoms are lost in addition polymerization.
        "0": "雙鍵不會保留。C=C 的其中一個鍵斷開，每個碳才能與相鄰的單位連接。這裏還少了兩個氫原子，但加成聚合不會失去任何原子。",
        // EN (option C): This shows two repeating units. The repeating unit is the smallest part that repeats: two backbone carbons.
        "2": "這裏畫了兩個重複單位。重複單位是重複出現的最小部分：兩個主鏈碳。",
        // EN (option D): Chlorine forms only one bond, so it cannot be in the backbone. It stays as a side group on its carbon.
        "3": "氯只能形成一個鍵，所以不可能在主鏈中。它留在自己的碳上，成為側基。",
      },
    },

    // ── s2-4-q008 · multi · foundation · SL · Structure 2.4.5 · 2 marks
    "s2-4-q008": {
      // EN: <p>Which statements about the addition polymerization of an alkene are correct? Select all that apply.</p>
      stem: "<p>關於烯烴 (alkene) 的加成聚合 (addition polymerization)，以下哪些說法正確？選出所有正確選項。</p>",
      options: [
        // EN: The carbon to carbon double bond in each monomer breaks.
        "每個單體的碳碳雙鍵斷開。",
        // EN: A molecule of water is released each time two monomers join.
        "每當兩個單體連接，就放出一個水分子。",
        // EN: The polymer is the only product.
        "聚合物是唯一的生成物。",
        // EN: The backbone of the polymer contains C=C double bonds.
        "聚合物的主鏈含有 C=C 雙鍵。",
        // EN: The repeating unit contains the same atoms as one monomer.
        "重複單位所含的原子與一個單體相同。",
      ],
      hints: [
        // EN: Count the atoms before and after. Are any atoms lost?
        "數一數反應前後的原子。有沒有原子失去？",
      ],
      // EN: <p>In addition polymerization the double bond of each monomer breaks and the monomers join. Nothing else is formed, so the polymer is the only product and each repeating unit has the same atoms as one monomer.</p>
      solution: "<p>在加成聚合中，每個單體的雙鍵斷開，單體互相連接。沒有其他物質生成，所以聚合物是唯一的生成物，而每個重複單位所含的原子與一個單體相同。</p>",
      misconception: {
        // EN (option B): Releasing a small molecule is the feature of condensation polymerization. In addition polymerization nothing is released.
        "1": "放出小分子是縮合聚合的特點。加成聚合不會放出任何物質。",
        // EN (option D): The double bonds are used up when the monomers join. The backbone has only single bonds between the carbons.
        "3": "單體連接時，雙鍵已經用掉。主鏈的碳之間只有單鍵。",
      },
    },

    // ── s2-4-q009 · numeric · exam · SL · Structure 2.4.2 · 1 mark
    "s2-4-q009": {
      // EN: <p>The scale beside the bonding triangle shows the percentage ionic character at different heights.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col" class="num">Δ<i>χ</i></th><th scope="col" class="num">% ionic</th></tr></thead><tbody><tr><td class="num">1.0</td><td class="num">25</td></tr><tr><td class="num">1.6</td><td class="num">50</td></tr><tr><td class="num">2.3</td><td class="num">75</td></tr></tbody></table></div><p>Magnesium chloride has Δ<i>χ</i> = 1.9. Estimate its percentage ionic character from the scale.</p>
      stem: "<p>鍵合三角旁邊的標度顯示不同高度的離子性百分率。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\" class=\"num\">Δ<i>χ</i></th><th scope=\"col\" class=\"num\">% 離子性</th></tr></thead><tbody><tr><td class=\"num\">1.0</td><td class=\"num\">25</td></tr><tr><td class=\"num\">1.6</td><td class=\"num\">50</td></tr><tr><td class=\"num\">2.3</td><td class=\"num\">75</td></tr></tbody></table></div><p>氯化鎂的 Δ<i>χ</i> = 1.9。根據標度估算 (estimate) 它的離子性百分率。</p>",
      hints: [
        // EN: Between which two heights in the table does 1.9 lie?
        "1.9 在表中哪兩個高度之間？",
        // EN: It is a little less than halfway from 1.6 to 2.3. Read a value a little less than halfway from 50 to 75.
        "它在 1.6 到 2.3 之間略少於一半的位置。所以讀數在 50 到 75 之間略少於一半的位置。",
      ],
      // EN: <p>1.9 lies between 1.6 (50 % ionic) and 2.3 (75 % ionic).</p><div class="worked__math">fraction of the way = (1.9 − 1.6) / (2.3 − 1.6) = 0.3 / 0.7 = 0.43</div><div class="worked__math">reading = 50 + 0.43 × 25 = about 60 % ionic</div><p>This is a reading from a diagram, so any answer from about 55 % to 65 % is acceptable.</p>
      solution: "<p>1.9 在 1.6（50 % 離子性）和 2.3（75 % 離子性）之間。</p><div class=\"worked__math\">所佔的比例 = (1.9 − 1.6) / (2.3 − 1.6) = 0.3 / 0.7 = 0.43</div><div class=\"worked__math\">讀數 = 50 + 0.43 × 25 = 約 60 % 離子性</div><p>這是從圖上讀出來的數值，所以約 55 % 至 65 % 之間的答案都可接受。</p>",
      // EN: about 60 % (55 to 65 % accepted)
      answerDisplay: "約 60 %（55 至 65 % 都接受）",
    },

    // ── s2-4-q010 · mcq · exam · SL · Structure 2.4.2 · 1 mark
    "s2-4-q010": {
      // EN: <p>Tin is a metal and chlorine is a non-metal. Use <i>χ</i>(Sn) = 2.0, <i>χ</i>(Cl) = 3.2 and the bonding triangle. What is the best description of the bonding in tin(IV) chloride, <span class="chem nowrap">SnCl<sub>4</sub></span>?</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>錫是金屬，氯是非金屬。利用 <i>χ</i>(Sn) = 2.0、<i>χ</i>(Cl) = 3.2 和鍵合三角作答。以下哪一項最能描述氯化錫(IV) (tin(IV) chloride) <span class=\"chem nowrap\">SnCl<sub>4</sub></span> 的鍵合？</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"鍵合三角。橫軸：平均電負性，由 0.5 到 4.0。縱軸：電負性差，由 0 到 3.0。金屬區域在左下方，在底邊上延伸到平均值約 1.9。離子區域是一條向頂部上升的帶。共價和極性共價區域在右下方。\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">金屬</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">離子</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">極性</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共價</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共價</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">平均電負性</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電負性差</text></svg>",
      options: [
        // EN: Ionic, because a metal is bonded to a non-metal.
        "離子，因為金屬與非金屬成鍵。",
        // EN: Ionic, because the electronegativity difference is greater than 1.0.
        "離子，因為電負性差大於 1.0。",
        // EN: Polar covalent, because the point (2.6, 1.2) lies in that region.
        "極性共價，因為點 (2.6, 1.2) 位於該區域。",
        // EN: Metallic, because the compound contains a metal.
        "金屬，因為化合物含有金屬。",
      ],
      hints: [
        // EN: Calculate both coordinates: the difference and the average.
        "計算兩個坐標：電負性差和平均值。",
        // EN: Difference = 3.2 − 2.0. Average = (2.0 + 3.2) / 2. Now find the point.
        "電負性差 = 3.2 − 2.0。平均值 = (2.0 + 3.2) / 2。然後找出這一點。",
      ],
      // EN: <div class="worked__math">Δ<i>χ</i> = 3.2 − 2.0 = 1.2</div><div class="worked__math">average <i>χ</i> = (2.0 + 3.2) / 2 = 2.6</div><p>The point (2.6, 1.2) is in the polar covalent region. This agrees with the properties: tin(IV) chloride is a liquid made of molecules.</p>
      solution: "<div class=\"worked__math\">Δ<i>χ</i> = 3.2 − 2.0 = 1.2</div><div class=\"worked__math\">平均 <i>χ</i> = (2.0 + 3.2) / 2 = 2.6</div><p>點 (2.6, 1.2) 位於極性共價區域。這與它的性質吻合：氯化錫(IV) 是由分子構成的液體。</p>",
      misconception: {
        // EN (option A): “Metal with non-metal” is only a rough guide. The triangle uses the electronegativity values, and here they place the compound in the polar covalent region.
        "0": "「金屬加非金屬」只是粗略的指引。鍵合三角用的是電負性數值，而這些數值把這種化合物放在極性共價區域。",
        // EN (option B): One number is not enough, and there is no cut-off at 1.0. You need the difference and the average to find the region.
        "1": "一個數值並不足夠，而且 1.0 並不是分界值。你需要電負性差和平均值才能找出區域。",
        // EN (option D): The metallic region is at the bottom left, where both elements have low electronegativity. Chlorine has a high electronegativity.
        "3": "金屬區域在左下方，那裏兩種元素的電負性都低。氯的電負性高。",
      },
    },

    // ── s2-4-q011 · mcq · exam · SL · Structure 2.4.1 · 1 mark
    "s2-4-q011": {
      // EN: <p>A binary compound has an average electronegativity of 2.1 and an electronegativity difference of 2.6. Its point is high in the ionic region of the bonding triangle. Which properties does the ionic model predict?</p>
      stem: "<p>某二元化合物的平均電負性是 2.1，電負性差是 2.6。它的點在鍵合三角離子區域的高處。離子模型預測它有哪些性質？</p>",
      options: [
        // EN: Low melting point; does not conduct electricity in any state.
        "熔點低；任何物態下都不導電。",
        // EN: High melting point; conducts electricity as a solid.
        "熔點高；固態時導電。",
        // EN: High melting point; conducts electricity when molten but not as a solid.
        "熔點高；熔融時導電，固態時不導電。",
        // EN: Low melting point; conducts electricity when molten.
        "熔點低；熔融時導電。",
      ],
      hints: [
        // EN: What particles are in an ionic solid? Can they move?
        "離子固體中有甚麼粒子？它們能移動嗎？",
      ],
      // EN: <p>The ionic model has a lattice of oppositely charged ions with strong electrostatic attraction between them, so the melting point is high. The ions cannot move in the solid, but they can move when the compound is molten, so it conducts only then.</p>
      solution: "<p>離子模型是由帶相反電荷的離子構成的晶格，離子之間有強靜電引力，所以熔點高。離子在固體中不能移動，但化合物熔融後就能移動，所以只在那時導電。</p>",
      misconception: {
        // EN (option A): These are the properties of a molecular covalent substance. An ionic lattice has strong electrostatic attraction between oppositely charged ions in every direction.
        "0": "這些是分子共價物質的性質。離子晶格在每個方向上，帶相反電荷的離子之間都有強靜電引力。",
        // EN (option B): Conducting as a solid needs delocalized electrons, as in a metal. In a solid ionic lattice the ions are fixed in place.
        "1": "固態時導電需要離域電子，像金屬那樣。在固態離子晶格中，離子的位置固定。",
        // EN (option D): A lot of energy is needed to overcome the strong electrostatic attraction between the ions, so the melting point is high.
        "3": "要大量能量才能克服離子之間的強靜電引力，所以熔點高。",
      },
    },

    // ── s2-4-q012 · short · exam · SL · Structure 2.4.2 · 2 marks
    "s2-4-q012": {
      // EN: <p>Use <i>χ</i>(Ca) = 1.0 and <i>χ</i>(S) = 2.6. Determine the position of calcium sulfide, CaS, in the bonding triangle, and deduce its bonding type.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>使用 <i>χ</i>(Ca) = 1.0 和 <i>χ</i>(S) = 2.6。求出 (determine) 硫化鈣 (calcium sulfide) CaS 在鍵合三角中的位置，並推斷 (deduce) 它的鍵合類型。</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"鍵合三角。橫軸：平均電負性，由 0.5 到 4.0。縱軸：電負性差，由 0 到 3.0。金屬區域在左下方，在底邊上延伸到平均值約 1.9。離子區域是一條向頂部上升的帶。共價和極性共價區域在右下方。\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">金屬</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">離子</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">極性</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共價</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共價</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">平均電負性</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電負性差</text></svg>",
      hints: [
        // EN: You need two numbers: the difference and the average.
        "你需要兩個數值：電負性差和平均值。",
        // EN: Plot the average along and the difference up.
        "平均值橫向繪，電負性差向上繪。",
      ],
      // EN: <p>Both values are needed for the first mark. The point (1.8, 1.6) lies above the metallic region and to the left of the polar covalent region, inside the ionic band.</p>
      solution: "<p>兩個數值都寫出，才得第一分。點 (1.8, 1.6) 在金屬區域之上、極性共價區域的左邊，在離子帶之內。</p>",
      // EN: <div class="worked__math">Δ<i>χ</i> = 2.6 − 1.0 = 1.6</div><div class="worked__math">average <i>χ</i> = (1.0 + 2.6) / 2 = 1.8</div><p>The point (1.8, 1.6) is in the ionic region, so calcium sulfide is ionic.</p>
      answer: "<div class=\"worked__math\">Δ<i>χ</i> = 2.6 − 1.0 = 1.6</div><div class=\"worked__math\">平均 <i>χ</i> = (1.0 + 2.6) / 2 = 1.8</div><p>點 (1.8, 1.6) 位於離子區域，所以硫化鈣是離子化合物。</p>",
      markscheme: [
        // EN: Electronegativity difference = 1.6 AND average electronegativity = 1.8 (both needed for the mark).
        "電負性差 = 1.6，並且平均電負性 = 1.8（兩者都要有才得分）。",
        // EN: Ionic (bonding), from the position in the triangle.
        "離子（鍵合），由三角形中的位置得出。",
      ],
    },

    // ── s2-4-q013 · short · exam · SL · Structure 2.4.3 · 2 marks
    "s2-4-q013": {
      // EN: <p>Steel is an alloy made by adding a small amount of carbon to iron. Explain why steel is harder than pure iron.</p>
      stem: "<p>鋼是在鐵中加入少量碳而製成的合金。解釋 (explain) 為甚麼鋼比純鐵硬。</p>",
      hints: [
        // EN: Start with pure iron. Why is it malleable?
        "由純鐵開始。它為甚麼有展性？",
        // EN: What does an atom of a different size do to regular layers?
        "一個大小不同的原子，會對整齊的層造成甚麼影響？",
      ],
      // EN: <p>In pure iron the cations are all the same size and form regular layers that slide over each other. Carbon atoms have a different size and disrupt the layers, so they slide less easily. “The bonds are stronger” is not accepted.</p>
      solution: "<p>在純鐵中，陽離子大小全部相同，排列成整齊的層，各層可以互相滑過。碳原子的大小不同，打亂了這些層，所以各層較難滑動。「鍵較強」不獲接受。</p>",
      // EN: <p>Carbon atoms are a different size from iron atoms, so they disrupt the regular arrangement of the layers in the lattice. The layers cannot slide over each other as easily, so steel is harder.</p>
      answer: "<p>碳原子與鐵原子的大小不同，所以打亂了晶格中各層的整齊排列。各層不能那麼容易互相滑過，所以鋼較硬。</p>",
      markscheme: [
        // EN: The carbon atoms are a different size (smaller) AND disrupt/distort the regular lattice/layers of iron ions.
        "碳原子的大小不同（較小），並且打亂／扭曲了鐵離子的整齊晶格／層。",
        // EN: The layers cannot slide over each other as easily (so more force is needed to change the shape).
        "各層不能那麼容易互相滑過（所以要用更大的力才能改變形狀）。",
      ],
    },

    // ── s2-4-q014 · mcq · exam · SL · Structure 2.4.3 · 1 mark
    "s2-4-q014": {
      // EN: <p>Which feature of metallic bonding makes it possible for atoms of another element to take places in a metal lattice?</p>
      stem: "<p>金屬鍵的哪一項特點，令另一種元素的原子可以佔據金屬晶格中的位置？</p>",
      options: [
        // EN: Each metal atom forms a fixed number of covalent bonds in fixed directions.
        "每個金屬原子在固定方向上形成固定數目的共價鍵。",
        // EN: The attraction between the cations and the delocalized electrons is non-directional.
        "陽離子與離域電子之間的引力是無方向性的。",
        // EN: The cations and the atoms of the other element form a compound with a fixed ratio.
        "陽離子與另一種元素的原子形成有固定比例的化合物。",
        // EN: The delocalized electrons are removed when the other element is added.
        "加入另一種元素時，離域電子被移走。",
      ],
      hints: [
        // EN: In a metal, does each cation bond to particular neighbours, or to the electrons all around it?
        "在金屬中，每個陽離子是與特定的相鄰粒子成鍵，還是與四周的電子成鍵？",
      ],
      // EN: <p>Metallic bonding is the electrostatic attraction between cations and delocalized electrons. It is non-directional, so the lattice can accommodate atoms of other elements and still be held together.</p>
      solution: "<p>金屬鍵是陽離子與離域電子之間的靜電引力。它是無方向性的 (non-directional)，所以晶格可以容納其他元素的原子，仍然結合在一起。</p>",
      misconception: {
        // EN (option A): Bonds in fixed directions describe covalent bonding. Metallic bonding acts equally in all directions.
        "0": "有固定方向的鍵是共價鍵合的描述。金屬鍵在所有方向的作用都相同。",
        // EN (option C): An alloy is a mixture. Its composition is not fixed.
        "2": "合金是混合物。它的組成並不固定。",
        // EN (option D): The delocalized electrons stay. They are what holds the lattice together, including the added atoms.
        "3": "離域電子仍然存在。正是它們把晶格（包括加入的原子）結合在一起。",
      },
    },

    // ── s2-4-q015 · mcq · exam · SL · Structure 2.4.5 · 1 mark
    "s2-4-q015": {
      // EN: <p>The structure of propene is shown.</p><svg viewBox="0 0 90 112" width="90" height="112" role="img" aria-label="Propene: two carbons joined by a double bond. The first carbon has two H atoms. The second carbon has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="22" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M22 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M22 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="68" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M68 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="68" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M68 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="62" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M32 53 H58 M32 59 H58" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/></svg><p>Which is the repeating unit of poly(propene)?</p>
      stem: "<p>圖中顯示 propene（丙烯）的結構。</p><svg viewBox=\"0 0 90 112\" width=\"90\" height=\"112\" role=\"img\" aria-label=\"Propene：兩個碳以雙鍵相連。第一個碳有兩個 H 原子。第二個碳有一個 H 原子和一個 CH3 基。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"22\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M22 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M22 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"68\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M68 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"68\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M68 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"62\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M32 53 H58 M32 59 H58\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/></svg><p>以下哪一個是 poly(propene) 的重複單位？</p>",
      options: [
        // EN: <svg viewBox="0 0 186 112" width="186" height="112" role="img" aria-label="Option A: three backbone carbons in a row, each with two H atoms, with a continuation bond at each end" style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M132 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M132 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M96 56 H122" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M142 56 H166" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M148 6 H154 V106 H148" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="158" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 186 112\" width=\"186\" height=\"112\" role=\"img\" aria-label=\"選項 A：三個主鏈碳排成一行，每個碳有兩個 H 原子，兩端各有一個延伸鍵\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M132 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M132 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M96 56 H122\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M142 56 H166\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M148 6 H154 V106 H148\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"158\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 154 112" width="154" height="112" role="img" aria-label="Option B: two backbone carbons joined by a double bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="80" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M50 53 H76 M50 59 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M96 56 H134" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M116 6 H122 V106 H116" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="126" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 154 112\" width=\"154\" height=\"112\" role=\"img\" aria-label=\"選項 B：兩個主鏈碳以雙鍵相連，兩端各有一個延伸鍵。第一個碳有兩個 H 原子。第二個碳有一個 H 原子和一個 CH3 基。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"80\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M50 53 H76 M50 59 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M96 56 H134\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M116 6 H122 V106 H116\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"126\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 154 112" width="154" height="112" role="img" aria-label="Option C: two backbone carbons joined by a single bond, with a continuation bond at each end. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="80" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M96 56 H134" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M24 6 H18 V106 H24 M116 6 H122 V106 H116" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="126" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 154 112\" width=\"154\" height=\"112\" role=\"img\" aria-label=\"選項 C：兩個主鏈碳以單鍵相連，兩端各有一個延伸鍵。第一個碳有兩個 H 原子。第二個碳有一個 H 原子和一個 CH3 基。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"80\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M96 56 H134\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M24 6 H18 V106 H24 M116 6 H122 V106 H116\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"126\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
        // EN: <svg viewBox="0 0 118 112" width="118" height="112" role="img" aria-label="Option D: two carbons joined by a single bond, with no continuation bonds. The first carbon has two H atoms. The second has one H atom and one CH3 group." style="max-width:100%;height:auto;display:block"><text x="22" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M22 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M22 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="22" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="68" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M68 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="68" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M68 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="62" y="96.5" text-anchor="start" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">CH₃</text><path d="M32 56 H58" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M6 6 H0 V106 H6 M98 6 H104 V106 H98" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="108" y="108" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px">n</text></svg>
        "<svg viewBox=\"0 0 118 112\" width=\"118\" height=\"112\" role=\"img\" aria-label=\"選項 D：兩個碳以單鍵相連，沒有延伸鍵。第一個碳有兩個 H 原子。第二個碳有一個 H 原子和一個 CH3 基。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"22\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M22 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M22 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"22\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"68\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M68 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"68\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M68 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"62\" y=\"96.5\" text-anchor=\"start\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">CH₃</text><path d=\"M32 56 H58\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M6 6 H0 V106 H6 M98 6 H104 V106 H98\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"108\" y=\"108\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700;font-style:italic;font-size:14px\">n</text></svg>",
      ],
      hints: [
        // EN: Which two carbon atoms were joined by the double bond? Only those are in the backbone.
        "哪兩個碳原子原本以雙鍵相連？只有它們在主鏈中。",
        // EN: Check that every carbon has exactly four bonds.
        "檢查每個碳是否剛好有四個鍵。",
      ],
      // EN: <p>Change C=C to C–C and add a continuation bond to each of the two carbons. The CH₃ group stays as a side group: –CH<sub>2</sub>–CH(CH<sub>3</sub>)–.</p>
      solution: "<p>把 C=C 改為 C–C，並在兩個碳上各加一個延伸鍵。CH₃ 基留下來成為側基：–CH<sub>2</sub>–CH(CH<sub>3</sub>)–。</p>",
      misconception: {
        // EN (option A): The CH₃ group is not part of the double bond, so it does not go into the backbone. Only the two carbons of the C=C are in the chain.
        "0": "CH₃ 基不屬於雙鍵的一部分，所以不會進入主鏈。只有 C=C 的兩個碳在鏈中。",
        // EN (option B): The double bond has been kept. Each carbon would then have five bonds. The C=C becomes C–C when the continuation bonds form.
        "1": "雙鍵被保留了。這樣每個碳會有五個鍵。形成延伸鍵時，C=C 變成 C–C。",
        // EN (option D): The continuation bonds are missing. Without them the unit cannot join to its neighbours, and each backbone carbon has only three bonds.
        "3": "欠了延伸鍵。沒有延伸鍵，這個單位就不能與相鄰的單位連接，而且每個主鏈碳只有三個鍵。",
      },
    },

    // ── s2-4-q016 · mcq · exam · SL · Structure 2.4.5 · 1 mark
    "s2-4-q016": {
      // EN: <p>A section of an addition polymer is shown.</p><svg viewBox="0 0 218 112" width="218" height="112" role="img" aria-label="Polymer chain section with four backbone carbons and a continuation bond at each end. Carbons 1 and 3 each have two H atoms. Carbons 2 and 4 each have two Cl atoms." style="max-width:100%;height:auto;display:block"><text x="40" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M40 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M40 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="40" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><text x="86" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M86 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M86 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="86" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M50 56 H76" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M132 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M132 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="132" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">H</text><path d="M96 56 H122" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="61.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">C</text><path d="M178 45 V32" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="26.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M178 67 V80" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><text x="178" y="96.5" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700">Cl</text><path d="M142 56 H168" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/><path d="M30 56 H6 M188 56 H212" style="stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none"/></svg><p>Which monomer formed this polymer?</p>
      stem: "<p>圖中顯示一段加成聚合物。</p><svg viewBox=\"0 0 218 112\" width=\"218\" height=\"112\" role=\"img\" aria-label=\"一段聚合物鏈，有四個主鏈碳，兩端各有一個延伸鍵。第 1 和第 3 個碳各有兩個 H 原子。第 2 和第 4 個碳各有兩個 Cl 原子。\" style=\"max-width:100%;height:auto;display:block\"><text x=\"40\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M40 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M40 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"40\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><text x=\"86\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M86 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M86 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"86\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M50 56 H76\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M132 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M132 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"132\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">H</text><path d=\"M96 56 H122\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"61.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">C</text><path d=\"M178 45 V32\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"26.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M178 67 V80\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><text x=\"178\" y=\"96.5\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:16px;font-weight:700\">Cl</text><path d=\"M142 56 H168\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/><path d=\"M30 56 H6 M188 56 H212\" style=\"stroke:currentColor;stroke-width:1.7;stroke-linecap:round;fill:none\"/></svg><p>這種聚合物由哪一種單體形成？</p>",
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
        "把鏈上的主鏈碳每兩個分成一組。",
        // EN: One pair is CH<sub>2</sub> joined to CCl<sub>2</sub>. Put a double bond between those two carbons.
        "其中一對是 CH<sub>2</sub> 連着 CCl<sub>2</sub>。在這兩個碳之間放一個雙鍵。",
      ],
      // EN: <p>The repeating unit is –CH<sub>2</sub>–CCl<sub>2</sub>–. Remove the continuation bonds and restore the double bond: CH<sub>2</sub>=CCl<sub>2</sub>.</p>
      solution: "<p>重複單位是 –CH<sub>2</sub>–CCl<sub>2</sub>–。除去延伸鍵，把雙鍵放回去：CH<sub>2</sub>=CCl<sub>2</sub>。</p>",
      misconception: {
        // EN (option A): This monomer would put one chlorine on every backbone carbon. In the polymer shown, both chlorine atoms are on the same carbon and the next carbon has none.
        "0": "這種單體會令每個主鏈碳上都有一個氯。在圖中的聚合物，兩個氯原子都在同一個碳上，下一個碳則沒有。",
        // EN (option B): This monomer has only one chlorine atom, but each repeating unit in the chain has two.
        "1": "這種單體只有一個氯原子，但鏈中每個重複單位有兩個。",
        // EN (option D): This molecule has no C=C double bond, so it cannot form an addition polymer.
        "3": "這個分子沒有 C=C 雙鍵，所以不能形成加成聚合物。",
      },
    },

    // ── s2-4-q017 · short · exam · SL · Structure 2.4.4 · 2 marks
    "s2-4-q017": {
      // EN: <p>Poly(ethene) is a plastic used for food containers. State one <strong>chemical</strong> property that makes it suitable for this use, and explain the property in terms of the structure of the polymer.</p>
      stem: "<p>Poly(ethene)（聚乙烯）是用來製造食物容器的塑膠。寫出 (state) 一種令它適合這個用途的<strong>化學</strong>性質，並從聚合物的結構解釋 (explain) 這種性質。</p>",
      hints: [
        // EN: A chemical property is about whether the substance reacts.
        "化學性質與物質會否反應有關。",
        // EN: What kind of bond joins the atoms inside a polymer chain?
        "聚合物鏈內的原子以哪一種鍵連接？",
      ],
      // EN: <p>The question asks for a chemical property, so “strong” or “light” earns nothing. Plastics are unreactive because the covalent bonds in their chains are strong.</p>
      solution: "<p>題目問的是化學性質，所以「堅固」或「輕」不會得分。塑膠不活潑，因為鏈中的共價鍵很強。</p>",
      // EN: <p>It is unreactive (chemically inert), so it does not react with the food. The atoms in the polymer chains are joined by strong covalent bonds, which need a lot of energy to break.</p>
      answer: "<p>它不活潑（化學惰性），所以不會與食物反應。聚合物鏈中的原子以強的共價鍵連接，要大量能量才能斷開。</p>",
      markscheme: [
        // EN: Unreactive / chemically inert / does not react with food, water or acids (accept non-biodegradable). Do not accept a physical property such as strong, flexible or low density.
        "不活潑／化學惰性／不與食物、水或酸反應（接受「不可生物降解」）。不接受物理性質，例如堅固、柔韌或密度低。",
        // EN: The chains contain strong covalent bonds (C–C and C–H) which are difficult to break.
        "鏈中含有強的共價鍵（C–C 和 C–H），難以斷開。",
      ],
    },

    // ── s2-4-q018 · order · exam · SL · Structure 2.4.5 · 2 marks
    "s2-4-q018": {
      // EN: <p>Put these steps in order to draw the repeating unit of an addition polymer from its monomer.</p>
      stem: "<p>把以下步驟排列次序，由單體繪畫出加成聚合物的重複單位。</p>",
      options: [
        // EN: Find the two carbon atoms that are joined by the double bond.
        "找出以雙鍵相連的兩個碳原子。",
        // EN: Redraw the monomer with every other group above or below those two carbons.
        "重新繪畫單體，把其他基團全部放在這兩個碳的上方或下方。",
        // EN: Change the double bond to a single bond.
        "把雙鍵改為單鍵。",
        // EN: Draw one continuation bond out from each of the two carbons.
        "從兩個碳各向外畫一個延伸鍵。",
        // EN: Check that each carbon atom has four bonds.
        "檢查每個碳原子是否都有四個鍵。",
      ],
      hints: [
        // EN: You cannot open the double bond until you have found it.
        "要先找到雙鍵，才能把它打開。",
        // EN: The check comes last.
        "檢查放在最後。",
      ],
      // EN: <p>Find the C=C, redraw with the side groups above and below, change C=C to C–C, add the two continuation bonds, then check that each carbon has four bonds.</p>
      solution: "<p>找出 C=C，重新繪畫並把側基放在上方和下方，把 C=C 改為 C–C，加上兩個延伸鍵，然後檢查每個碳是否都有四個鍵。</p>",
    },

    // ── s2-4-q019 · numeric · challenge · SL · Structure 2.4.5 · 2 marks
    "s2-4-q019": {
      // EN: <p>Propene, <span class="chem nowrap">C<sub>3</sub>H<sub>6</sub></span>, forms the addition polymer poly(propene). One polymer chain has a relative molecular mass of <span class="mono">6.31 × 10<sup>4</sup></span>. Estimate the number of repeating units in this chain. Use <i>A</i><sub>r</sub>: C 12.01, H 1.01.</p>
      stem: "<p>Propene <span class=\"chem nowrap\">C<sub>3</sub>H<sub>6</sub></span> 形成加成聚合物 poly(propene)。一條聚合物鏈的相對分子質量是 <span class=\"mono\">6.31 × 10<sup>4</sup></span>。估算 (estimate) 這條鏈中重複單位的數目。使用 <i>A</i><sub>r</sub>：C 12.01、H 1.01。</p>",
      hints: [
        // EN: In addition polymerization no atoms are lost. What is the relative mass of one repeating unit?
        "加成聚合不會失去任何原子。一個重複單位的相對質量是多少？",
        // EN: Number of units = relative molecular mass of the chain ÷ relative mass of one unit.
        "單位的數目 = 鏈的相對分子質量 ÷ 一個單位的相對質量。",
      ],
      // EN: <p>The repeating unit has the same atoms as one monomer, <span class="chem nowrap">C<sub>3</sub>H<sub>6</sub></span>.</p><div class="worked__math"><i>M</i><sub>r</sub>(unit) = 3(12.01) + 6(1.01) = 42.09</div><div class="worked__math">number of units = 6.31 × 10<sup>4</sup> / 42.09 = 1499.2 = <b>1.50 × 10<sup>3</sup></b> (3 significant figures)</div>
      solution: "<p>重複單位所含的原子與一個單體相同，即 <span class=\"chem nowrap\">C<sub>3</sub>H<sub>6</sub></span>。</p><div class=\"worked__math\"><i>M</i><sub>r</sub>(單位) = 3(12.01) + 6(1.01) = 42.09</div><div class=\"worked__math\">單位的數目 = 6.31 × 10<sup>4</sup> / 42.09 = 1499.2 = <b>1.50 × 10<sup>3</sup></b>（3 位有效數字）</div>",
    },

    // ── s2-4-q020 · mcq · challenge · SL · Structure 2.4.1 · 1 mark
    "s2-4-q020": {
      // EN: <p>The table gives electronegativity values. <i>χ</i>(O) = 3.4.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Element</th><th scope="col" class="num">Na</th><th scope="col" class="num">Mg</th><th scope="col" class="num">Si</th><th scope="col" class="num">P</th><th scope="col" class="num">S</th></tr></thead><tbody><tr><th scope="row"><i>χ</i></th><td class="num">0.9</td><td class="num">1.3</td><td class="num">1.9</td><td class="num">2.2</td><td class="num">2.6</td></tr></tbody></table></div><p>How does the position of the oxide in the bonding triangle change from sodium oxide to the oxide of sulfur, and what does this show about the bonding?</p>
      stem: "<p>下表列出電負性數值。<i>χ</i>(O) = 3.4。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">元素</th><th scope=\"col\" class=\"num\">Na</th><th scope=\"col\" class=\"num\">Mg</th><th scope=\"col\" class=\"num\">Si</th><th scope=\"col\" class=\"num\">P</th><th scope=\"col\" class=\"num\">S</th></tr></thead><tbody><tr><th scope=\"row\"><i>χ</i></th><td class=\"num\">0.9</td><td class=\"num\">1.3</td><td class=\"num\">1.9</td><td class=\"num\">2.2</td><td class=\"num\">2.6</td></tr></tbody></table></div><p>由氧化鈉到硫的氧化物，氧化物在鍵合三角中的位置怎樣改變？這說明鍵合有甚麼變化？</p>",
      options: [
        // EN: The difference decreases and the average increases. The bonding changes from ionic to polar covalent.
        "電負性差減小，平均值增大。鍵合由離子變成極性共價。",
        // EN: The difference increases and the average increases. The bonding changes from polar covalent to ionic.
        "電負性差增大，平均值增大。鍵合由極性共價變成離子。",
        // EN: The difference decreases and the average decreases. The bonding changes from ionic to metallic.
        "電負性差減小，平均值減小。鍵合由離子變成金屬。",
        // EN: The position does not change, because every oxide contains oxygen.
        "位置不變，因為每種氧化物都含有氧。",
      ],
      hints: [
        // EN: Calculate the difference and the average for the first oxide and the last oxide.
        "計算第一種氧化物和最後一種氧化物的電負性差和平均值。",
        // EN: Na and O: difference 2.5, average 2.15. S and O: difference 0.8, average 3.0.
        "Na 和 O：電負性差 2.5，平均值 2.15。S 和 O：電負性差 0.8，平均值 3.0。",
      ],
      // EN: <div class="worked__math">Na and O: Δ<i>χ</i> = 3.4 − 0.9 = 2.5; average = (0.9 + 3.4) / 2 = 2.15</div><div class="worked__math">S and O: Δ<i>χ</i> = 3.4 − 2.6 = 0.8; average = (2.6 + 3.4) / 2 = 3.0</div><p>The points move down and to the right: from the ionic region to the polar covalent region. Bonding changes gradually across the period, which is the idea of a continuum.</p>
      solution: "<div class=\"worked__math\">Na 和 O：Δ<i>χ</i> = 3.4 − 0.9 = 2.5；平均值 = (0.9 + 3.4) / 2 = 2.15</div><div class=\"worked__math\">S 和 O：Δ<i>χ</i> = 3.4 − 2.6 = 0.8；平均值 = (2.6 + 3.4) / 2 = 3.0</div><p>各點向右下方移動：由離子區域到極性共價區域。鍵合橫跨整個週期逐漸改變，這就是連續體的概念。</p>",
      misconception: {
        // EN (option B): The values get closer to 3.4 from Na to S, so the difference gets smaller, not larger. Check: 3.4 − 0.9 = 2.5 but 3.4 − 2.6 = 0.8.
        "1": "由 Na 到 S，數值越來越接近 3.4，所以電負性差變小，不是變大。驗算：3.4 − 0.9 = 2.5，但 3.4 − 2.6 = 0.8。",
        // EN (option C): The average rises, because the first element becomes more electronegative while oxygen stays at 3.4. The points move right, away from the metallic corner.
        "2": "平均值上升，因為第一種元素的電負性越來越高，而氧保持在 3.4。各點向右移，遠離金屬的一角。",
        // EN (option D): The position depends on both elements. The other element changes, so both coordinates change.
        "3": "位置取決於兩種元素。另一種元素改變了，所以兩個坐標都會改變。",
      },
    },

    // ── s2-4-q021 · short · challenge · SL · Structure 2.4.2 · 3 marks
    "s2-4-q021": {
      // EN: <p>Sodium and silicon both form chlorides: NaCl and <span class="chem nowrap">SiCl<sub>4</sub></span>. Use <i>χ</i>(Na) = 0.9, <i>χ</i>(Si) = 1.9 and <i>χ</i>(Cl) = 3.2 and the bonding triangle. Determine the position of each chloride, deduce the bonding type of each, and predict one difference in their properties.</p><svg viewBox="0 0 320 250" width="320" height="250" role="img" aria-label="Bonding triangle. Horizontal axis: average electronegativity, 0.5 to 4.0. Vertical axis: electronegativity difference, 0 to 3.0. The metallic region is at the bottom left, up to an average of about 1.9 on the base. The ionic region is a band rising to the top. The covalent and polar covalent region is at the bottom right." style="max-width:100%;height:auto;display:block"><path d="M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 22 V212 H292" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M76.72222222222223 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="76.72222222222223" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M146.16666666666666 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="146.16666666666666" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M215.61111111111111 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="215.61111111111111" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M285.05555555555554 212 v4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="285.05555555555554" y="227" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">4.0</text><path d="M42 212 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="216" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">0.0</text><path d="M42 156.11764705882354 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="160.11764705882354" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">1.0</text><path d="M42 100.23529411764706 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="104.23529411764706" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">2.0</text><path d="M42 44.35294117647058 h-4" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="35" y="48.35294117647058" text-anchor="end" style="fill:currentColor;font-family:var(--font-body);font-size:11px">3.0</text><path d="M111.44444444444444 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M180.88888888888889 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M250.33333333333331 212 v3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 184.05882352941177 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 128.1764705882353 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><path d="M42 72.29411764705881 h-3" style="fill:none;stroke:currentColor;stroke-width:1.3"/><text x="97.55555555555556" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Metallic</text><text x="154.5" y="100.23529411764706" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Ionic</text><text x="201.7222222222222" y="136.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Polar</text><text x="201.7222222222222" y="149.55882352941177" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">covalent</text><text x="215.61111111111111" y="199.7058823529412" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Covalent</text><text x="167" y="246" text-anchor="middle" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Average electronegativity</text><text x="12" y="117" text-anchor="middle" transform="rotate(-90 12 117)" style="fill:currentColor;font-family:var(--font-body);font-size:11px">Electronegativity difference</text></svg>
      stem: "<p>鈉和矽都能形成氯化物：NaCl 和 <span class=\"chem nowrap\">SiCl<sub>4</sub></span>。利用 <i>χ</i>(Na) = 0.9、<i>χ</i>(Si) = 1.9、<i>χ</i>(Cl) = 3.2 和鍵合三角作答。求出 (determine) 每種氯化物的位置，推斷 (deduce) 各自的鍵合類型，並預測 (predict) 兩者性質上的一項差異。</p><svg viewBox=\"0 0 320 250\" width=\"320\" height=\"250\" role=\"img\" aria-label=\"鍵合三角。橫軸：平均電負性，由 0.5 到 4.0。縱軸：電負性差，由 0 到 3.0。金屬區域在左下方，在底邊上延伸到平均值約 1.9。離子區域是一條向頂部上升的帶。共價和極性共價區域在右下方。\" style=\"max-width:100%;height:auto;display:block\"><path d=\"M53.1 212.0 L96.9 144.9 L126.0 190.2 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M96.9 144.9 L167.7 34.9 L197.6 80.1 L126.0 190.2 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M126.0 190.2 L197.6 80.1 L282.3 212.0 L140.6 212.0 Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 22 V212 H292\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M76.72222222222223 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"76.72222222222223\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M146.16666666666666 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"146.16666666666666\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M215.61111111111111 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"215.61111111111111\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M285.05555555555554 212 v4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"285.05555555555554\" y=\"227\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">4.0</text><path d=\"M42 212 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"216\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">0.0</text><path d=\"M42 156.11764705882354 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"160.11764705882354\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">1.0</text><path d=\"M42 100.23529411764706 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"104.23529411764706\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">2.0</text><path d=\"M42 44.35294117647058 h-4\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"35\" y=\"48.35294117647058\" text-anchor=\"end\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">3.0</text><path d=\"M111.44444444444444 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M180.88888888888889 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M250.33333333333331 212 v3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 184.05882352941177 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 128.1764705882353 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><path d=\"M42 72.29411764705881 h-3\" style=\"fill:none;stroke:currentColor;stroke-width:1.3\"/><text x=\"97.55555555555556\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">金屬</text><text x=\"154.5\" y=\"100.23529411764706\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">離子</text><text x=\"201.7222222222222\" y=\"136.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">極性</text><text x=\"201.7222222222222\" y=\"149.55882352941177\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共價</text><text x=\"215.61111111111111\" y=\"199.7058823529412\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">共價</text><text x=\"167\" y=\"246\" text-anchor=\"middle\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">平均電負性</text><text x=\"12\" y=\"117\" text-anchor=\"middle\" transform=\"rotate(-90 12 117)\" style=\"fill:currentColor;font-family:var(--font-body);font-size:11px\">電負性差</text></svg>",
      hints: [
        // EN: Work out two numbers for each chloride. Use one value per element.
        "為每種氯化物算出兩個數值。每種元素只用一個數值。",
        // EN: Locate both points, then use the model for each region to predict properties.
        "找出兩個點的位置，然後用每個區域的模型預測性質。",
      ],
      // EN: <p>NaCl is at (2.05, 2.3), in the ionic region. <span class="chem nowrap">SiCl<sub>4</sub></span> is at (2.55, 1.3), in the polar covalent region. The ionic model predicts a high melting point and conduction when molten. The covalent model predicts no conduction, and <span class="chem nowrap">SiCl<sub>4</sub></span> is made of molecules, so its melting point is low.</p>
      solution: "<p>NaCl 位於 (2.05, 2.3)，在離子區域。<span class=\"chem nowrap\">SiCl<sub>4</sub></span> 位於 (2.55, 1.3)，在極性共價區域。離子模型預測熔點高，熔融時導電。共價模型預測不導電，而 <span class=\"chem nowrap\">SiCl<sub>4</sub></span> 由分子構成，所以熔點低。</p>",
      // EN: <div class="worked__math">NaCl: Δ<i>χ</i> = 3.2 − 0.9 = 2.3; average = (0.9 + 3.2) / 2 = 2.05</div><div class="worked__math">SiCl<sub>4</sub>: Δ<i>χ</i> = 3.2 − 1.9 = 1.3; average = (1.9 + 3.2) / 2 = 2.55</div><p>NaCl is in the ionic region and <span class="chem nowrap">SiCl<sub>4</sub></span> is in the polar covalent region. NaCl has a much higher melting point, because of the strong electrostatic attraction between its ions. Molten NaCl conducts electricity because its ions can move, but <span class="chem nowrap">SiCl<sub>4</sub></span> does not conduct because it has no mobile charged particles.</p>
      answer: "<div class=\"worked__math\">NaCl：Δ<i>χ</i> = 3.2 − 0.9 = 2.3；平均值 = (0.9 + 3.2) / 2 = 2.05</div><div class=\"worked__math\">SiCl<sub>4</sub>：Δ<i>χ</i> = 3.2 − 1.9 = 1.3；平均值 = (1.9 + 3.2) / 2 = 2.55</div><p>NaCl 在離子區域，<span class=\"chem nowrap\">SiCl<sub>4</sub></span> 在極性共價區域。NaCl 的熔點高得多，因為它的離子之間有強靜電引力。熔融的 NaCl 能導電，因為它的離子可以移動；但 <span class=\"chem nowrap\">SiCl<sub>4</sub></span> 不導電，因為它沒有可移動的帶電粒子。</p>",
      markscheme: [
        // EN: NaCl: difference 2.3 and average 2.05 AND SiCl₄: difference 1.3 and average 2.55.
        "NaCl：電負性差 2.3、平均值 2.05，並且 SiCl₄：電負性差 1.3、平均值 2.55。",
        // EN: NaCl ionic AND SiCl₄ (polar) covalent.
        "NaCl 是離子，並且 SiCl₄ 是（極性）共價。",
        // EN: One valid difference with a reason, for example: NaCl has the higher melting point (strong electrostatic attraction between ions) OR NaCl conducts when molten (mobile ions) and SiCl₄ does not.
        "一項有理據的正確差異，例如：NaCl 的熔點較高（離子之間有強靜電引力），或 NaCl 熔融時導電（離子可流動）而 SiCl₄ 不導電。",
      ],
    },

    // ── s2-4-q022 · numeric · challenge · SL · Structure 2.4.2 · 2 marks
    "s2-4-q022": {
      // EN: <p>Element X has an electronegativity of 1.6. It forms a binary compound with a more electronegative element, Y. The compound is at the point (2.4, 1.6) in the bonding triangle: average electronegativity 2.4, electronegativity difference 1.6. Calculate the electronegativity of Y.</p>
      stem: "<p>元素 X 的電負性是 1.6。它與電負性較高的元素 Y 形成二元化合物。這種化合物在鍵合三角中的點是 (2.4, 1.6)：平均電負性 2.4，電負性差 1.6。計算 (calculate) Y 的電負性。</p>",
      hints: [
        // EN: Y is more electronegative than X, so <i>χ</i>(Y) − <i>χ</i>(X) equals the difference.
        "Y 的電負性比 X 高，所以 <i>χ</i>(Y) − <i>χ</i>(X) 等於電負性差。",
        // EN: Either use the difference: <i>χ</i>(Y) = 1.6 + 1.6. Or use the average: the two values add up to 2 × 2.4.
        "可以用電負性差：<i>χ</i>(Y) = 1.6 + 1.6。也可以用平均值：兩個數值相加等於 2 × 2.4。",
      ],
      // EN: <div class="worked__math"><i>χ</i>(Y) = <i>χ</i>(X) + Δ<i>χ</i> = 1.6 + 1.6 = 3.2</div><p>Check with the average:</p><div class="worked__math">(1.6 + 3.2) / 2 = 4.8 / 2 = 2.4 ✓</div>
      solution: "<div class=\"worked__math\"><i>χ</i>(Y) = <i>χ</i>(X) + Δ<i>χ</i> = 1.6 + 1.6 = 3.2</div><p>用平均值驗算：</p><div class=\"worked__math\">(1.6 + 3.2) / 2 = 4.8 / 2 = 2.4 ✓</div>",
    },

    // ── s2-4-q023 · mcq · foundation · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q023": {
      // EN: <p>Which statement is correct for the formation of every condensation polymer?</p>
      stem: "<p>關於每一種縮合聚合物 (condensation polymer) 的形成，以下哪一項說法正確？</p>",
      options: [
        // EN: Each monomer must contain a carbon to carbon double bond.
        "每個單體必須含有碳碳雙鍵。",
        // EN: The polymer is the only product.
        "聚合物是唯一的生成物。",
        // EN: A small molecule is released each time two monomers join.
        "每當兩個單體連接，就放出一個小分子。",
        // EN: Only one kind of monomer can be used.
        "只能使用一種單體。",
      ],
      hints: [
        // EN: What does the word “condensation” tell you is formed as well as the polymer?
        "「縮合」(condensation) 一詞告訴你，除了聚合物之外還生成甚麼？",
      ],
      // EN: <p>In condensation polymerization, functional groups on the monomers react together. Each new link releases a small molecule, usually water.</p>
      solution: "<p>在縮合聚合中，單體上的官能基互相反應。每形成一個新的連接鍵，就放出一個小分子，通常是水。</p>",
      misconception: {
        // EN (option A): A C=C double bond is needed for addition polymerization. Condensation monomers need two functional groups instead.
        "0": "加成聚合才需要 C=C 雙鍵。縮合聚合的單體需要的是兩個官能基。",
        // EN (option B): This is true for addition polymers. A condensation reaction also gives a small molecule, usually water.
        "1": "這對加成聚合物才正確。縮合反應還會生成一個小分子，通常是水。",
        // EN (option D): Many condensation polymers are made from two different monomers, such as a diol and a dicarboxylic acid.
        "3": "許多縮合聚合物由兩種不同的單體製成，例如二醇和二羧酸。",
      },
    },

    // ── s2-4-q024 · mcq · exam · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q024": {
      // EN: <p>A polyester is made from these two monomers.</p><p><span class="chem nowrap">HO–CH<sub>2</sub>–CH<sub>2</sub>–OH</span> &nbsp; and &nbsp; <span class="chem nowrap">HOOC–C<sub>6</sub>H<sub>4</sub>–COOH</span></p><p>Which is the repeating unit of the polyester?</p>
      stem: "<p>一種聚酯 (polyester) 由以下兩種單體製成。</p><p><span class=\"chem nowrap\">HO–CH<sub>2</sub>–CH<sub>2</sub>–OH</span> &nbsp; 和 &nbsp; <span class=\"chem nowrap\">HOOC–C<sub>6</sub>H<sub>4</sub>–COOH</span></p><p>以下哪一個是這種聚酯的重複單位？</p>",
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
        "水由二醇的一個 H 和酸的一個 –OH 形成。",
        // EN: Remove H from both ends of the diol and –OH from both ends of the acid. Then join them.
        "從二醇的兩端各除去 H，從酸的兩端各除去 –OH。然後把它們連接起來。",
      ],
      // EN: <p>Each –OH group of the diol loses H. Each –COOH group of the acid loses –OH. Joining O to the C=O carbon gives the ester link: <span class="chem chem--eq">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>. Water is the other product.</p>
      solution: "<p>二醇的每個 –OH 基失去 H。酸的每個 –COOH 基失去 –OH。把 O 連到 C=O 的碳，就得到酯鍵：<span class=\"chem chem--eq\">–O–CH<sub>2</sub>–CH<sub>2</sub>–O–CO–C<sub>6</sub>H<sub>4</sub>–CO–</span>。水是另一種生成物。</p>",
      misconception: {
        // EN (option A): This is the molecule made when one diol joins one acid. It still has an –OH group and a –COOH group at its ends, so it is not a repeating unit. A repeating unit has continuation bonds at both ends.
        "0": "這是一個二醇與一個酸連接後形成的分子。它的兩端仍有一個 –OH 基和一個 –COOH 基，所以不是重複單位。重複單位的兩端都有延伸鍵。",
        // EN (option C): Both oxygen atoms of the diol have been removed. The diol loses only an H atom at each end. Its oxygen atoms stay and become part of the ester links.
        "2": "二醇的兩個氧原子都被除去了。二醇每一端只失去一個 H 原子。它的氧原子會留下，成為酯鍵的一部分。",
        // EN (option D): There is one oxygen atom too many. The acid loses its –OH at each end, so the right-hand end is –CO–, not –CO–O–.
        "3": "多了一個氧原子。酸的每一端都失去 –OH，所以右端是 –CO–，不是 –CO–O–。",
      },
    },

    // ── s2-4-q025 · mcq · exam · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q025": {
      // EN: <p>The repeating unit of a polyamide is shown.</p><p><span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span></p><p>Which pair of monomers forms this polymer?</p>
      stem: "<p>以下是一種聚酰胺 (polyamide) 的重複單位。</p><p><span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span></p><p>以下哪一對單體形成這種聚合物？</p>",
      options: [
        // EN: <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>6</sub>–OH</span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>6</sub>–OH</span> 和 <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
        // EN: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> and <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>8</sub>–OH</span>
        "<span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> 和 <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>8</sub>–OH</span>",
        // EN: <span class="chem chem--eq">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–COOH</span> and <span class="chem chem--eq">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem chem--eq\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–COOH</span> 和 <span class=\"chem chem--eq\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
        // EN: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>
        "<span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span> 和 <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>",
      ],
      hints: [
        // EN: Break each bond between N and the C=O carbon.
        "斷開 N 與 C=O 的碳之間的每個鍵。",
        // EN: Give each N an extra H, and give each C=O carbon an –OH.
        "給每個 N 多加一個 H，給每個 C=O 的碳加一個 –OH。",
      ],
      // EN: <p>Break the amide links. The <span class="chem nowrap">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–</span> part gains an H on each nitrogen: <span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>, a diamine. The <span class="chem nowrap">–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span> part gains an –OH on each carbon: <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>, a dicarboxylic acid.</p>
      solution: "<p>斷開酰胺鍵。<span class=\"chem nowrap\">–NH–(CH<sub>2</sub>)<sub>6</sub>–NH–</span> 部分的每個氮得到一個 H：<span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>6</sub>–NH<sub>2</sub></span>，是二胺。<span class=\"chem nowrap\">–CO–(CH<sub>2</sub>)<sub>8</sub>–CO–</span> 部分的每個碳得到一個 –OH：<span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>8</sub>–COOH</span>，是二羧酸。</p>",
      misconception: {
        // EN (option A): A diol and a dicarboxylic acid give a polyester, with –O–CO– links. This polymer has nitrogen in its links.
        "0": "二醇和二羧酸形成的是聚酯，連接鍵是 –O–CO–。這種聚合物的連接鍵含有氮。",
        // EN (option B): The two C=O groups in the repeating unit have been lost. Each C=O carbon gains an –OH on hydrolysis, to give a –COOH group.
        "1": "重複單位中的兩個 C=O 基不見了。水解時，每個 C=O 的碳得到一個 –OH，成為 –COOH 基。",
        // EN (option C): The unit shows both nitrogen atoms on the <span class="chem nowrap">(CH<sub>2</sub>)<sub>6</sub></span> part and both C=O groups on the <span class="chem nowrap">(CH<sub>2</sub>)<sub>8</sub></span> part. So one monomer has two –NH<sub>2</sub> groups and the other has two –COOH groups.
        "2": "重複單位顯示兩個氮原子都在 <span class=\"chem nowrap\">(CH<sub>2</sub>)<sub>6</sub></span> 部分，兩個 C=O 基都在 <span class=\"chem nowrap\">(CH<sub>2</sub>)<sub>8</sub></span> 部分。所以一種單體有兩個 –NH<sub>2</sub> 基，另一種有兩個 –COOH 基。",
      },
    },

    // ── s2-4-q026 · short · exam · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q026": {
      // EN: <p>A polyamide is made from these two monomers.</p><p><span class="chem nowrap">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>5</sub>–NH<sub>2</sub></span> &nbsp; and &nbsp; <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH</span></p><p>Draw the repeating unit of the polyamide.</p>
      stem: "<p>一種聚酰胺 (polyamide) 由以下兩種單體製成。</p><p><span class=\"chem nowrap\">H<sub>2</sub>N–(CH<sub>2</sub>)<sub>5</sub>–NH<sub>2</sub></span> &nbsp; 和 &nbsp; <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH</span></p><p>繪畫 (draw) 這種聚酰胺的重複單位。</p>",
      hints: [
        // EN: An –NH<sub>2</sub> group loses one H. A –COOH group loses –OH.
        "一個 –NH<sub>2</sub> 基失去一個 H。一個 –COOH 基失去 –OH。",
        // EN: Join N to the C=O carbon. Then open both outer ends in the same way.
        "把 N 連到 C=O 的碳。然後以同樣方式打開外側的兩端。",
      ],
      // EN: <p>Remove one H from each –NH<sub>2</sub> group and the –OH from each –COOH group. Join N to the C=O carbon. The unit is <span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span>, and water is the other product. Brackets and <i>n</i> are not required.</p>
      solution: "<p>從每個 –NH<sub>2</sub> 基除去一個 H，從每個 –COOH 基除去 –OH。把 N 連到 C=O 的碳。重複單位是 <span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span>，另一種生成物是水。括號和 <i>n</i> 並非必須。</p>",
      // EN: <p><span class="chem chem--eq">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span></p><p>Each CO is a carbon atom with a double bond to oxygen. Each nitrogen atom keeps one hydrogen atom. There is a continuation bond at each end.</p>
      answer: "<p><span class=\"chem chem--eq\">–NH–(CH<sub>2</sub>)<sub>5</sub>–NH–CO–(CH<sub>2</sub>)<sub>3</sub>–CO–</span></p><p>每個 CO 是一個以雙鍵連接氧的碳原子。每個氮原子保留一個氫原子。兩端各有一個延伸鍵。</p>",
      markscheme: [
        // EN: Correct amide link shown: –NH–CO– (C=O bonded to N–H).
        "顯示正確的酰胺鍵：–NH–CO–（C=O 與 N–H 相連）。",
        // EN: Continuation bonds at both ends AND the rest of the structure correct, with only one repeating unit drawn.
        "兩端都有延伸鍵，並且結構的其餘部分正確，而且只畫了一個重複單位。",
      ],
    },

    // ── s2-4-q027 · multi · exam · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q027": {
      // EN: <p>Which statements about condensation and hydrolysis are correct? Select all that apply.</p>
      stem: "<p>關於縮合 (condensation) 和水解 (hydrolysis)，以下哪些說法正確？選出所有正確選項。</p>",
      options: [
        // EN: Proteins form from amino acids by condensation reactions.
        "蛋白質由氨基酸經縮合反應形成。",
        // EN: Hydrolysis of a polyester releases one molecule of water for each link broken.
        "聚酯水解時，每斷開一個連接鍵就放出一個水分子。",
        // EN: Hydrolysis breaks the links in a condensation polymer by reaction with water.
        "水解是與水反應，把縮合聚合物中的連接鍵斷開。",
        // EN: Poly(ethene) is easily broken down into ethene by hydrolysis.
        "Poly(ethene) 容易經水解分解成 ethene。",
        // EN: One molecule of water is released when an amide link forms from an –NH<sub>2</sub> group and a –COOH group.
        "一個 –NH<sub>2</sub> 基和一個 –COOH 基形成酰胺鍵時，放出一個水分子。",
      ],
      hints: [
        // EN: Condensation and hydrolysis are opposites. In which one is water a product?
        "縮合和水解是相反的過程。在哪一個過程中，水是生成物？",
      ],
      // EN: <p>All biological macromolecules, including proteins, form by condensation and break down by hydrolysis. Condensation releases water as each link forms. Hydrolysis uses water to break each link.</p>
      solution: "<p>所有生物大分子（包括蛋白質）都由縮合形成，經水解分解。縮合時，每形成一個連接鍵就放出水。水解則用水把每個連接鍵斷開。</p>",
      misconception: {
        // EN (option B): Hydrolysis uses water. It does not release it. One molecule of water is a reactant for each link that breaks.
        "1": "水解消耗水，而不是放出水。每斷開一個連接鍵，就有一個水分子作為反應物。",
        // EN (option D): Poly(ethene) is an addition polymer. Its backbone has only carbon to carbon bonds, with no ester or amide links for water to break.
        "3": "Poly(ethene) 是加成聚合物。它的主鏈只有碳碳鍵，沒有可被水斷開的酯鍵或酰胺鍵。",
      },
    },

    // ── s2-4-q028 · numeric · challenge · AHL · Structure 2.4.6 · 2 marks
    "s2-4-q028": {
      // EN: <p>150 molecules of a diamine react with 150 molecules of a dicarboxylic acid. They form one polyamide chain that contains all 300 monomer units. How many molecules of water are released?</p>
      stem: "<p>150 個二胺 (diamine) 分子與 150 個二羧酸 (dicarboxylic acid) 分子反應。它們形成一條聚酰胺鏈，包含全部 300 個單體單位。放出多少個水分子？</p>",
      hints: [
        // EN: One molecule of water is released for each amide link that forms.
        "每形成一個酰胺鍵，就放出一個水分子。",
        // EN: How many links join 300 units in a single chain? Try it with 2 units, then 3 units.
        "把 300 個單位連成一條鏈，需要多少個連接鍵？先用 2 個單位試試，再用 3 個單位。",
      ],
      // EN: <p>Two units need 1 link. Three units need 2 links. A chain of <i>N</i> units has <i>N</i> − 1 links.</p><div class="worked__math">links = 300 − 1 = 299, so 299 molecules of H<sub>2</sub>O</div>
      solution: "<p>兩個單位需要 1 個連接鍵。三個單位需要 2 個連接鍵。有 <i>N</i> 個單位的鏈，就有 <i>N</i> − 1 個連接鍵。</p><div class=\"worked__math\">連接鍵 = 300 − 1 = 299，所以放出 299 個 H<sub>2</sub>O 分子</div>",
    },

    // ── s2-4-q029 · short · challenge · AHL · Structure 2.4.6 · 3 marks
    "s2-4-q029": {
      // EN: <p>The repeating unit of a polyester is shown.</p><p><span class="chem chem--eq">–O–(CH<sub>2</sub>)<sub>4</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span></p><p>(a) Deduce the structures of the two monomers formed when this polymer is hydrolysed. (b) Suggest why this polymer breaks down in the environment more readily than poly(ethene).</p>
      stem: "<p>以下是一種聚酯 (polyester) 的重複單位。</p><p><span class=\"chem chem--eq\">–O–(CH<sub>2</sub>)<sub>4</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span></p><p>(a) 推斷 (deduce) 這種聚合物水解後生成的兩種單體的結構。(b) 提出 (suggest) 為甚麼這種聚合物在環境中比 poly(ethene)（聚乙烯）更容易分解。</p>",
      hints: [
        // EN: Break each bond between O and the C=O carbon.
        "斷開 O 與 C=O 的碳之間的每個鍵。",
        // EN: Each O gains an H. Each C=O carbon gains an –OH.
        "每個 O 得到一個 H。每個 C=O 的碳得到一個 –OH。",
        // EN: For (b), compare the backbones of the two polymers.
        "做 (b) 時，比較兩種聚合物的主鏈。",
      ],
      // EN: <p>Hydrolysis breaks each ester link. The <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>4</sub>–O–</span> part gains an H at each end to give the diol. The <span class="chem nowrap">–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span> part gains an –OH at each end to give the dicarboxylic acid. Addition polymers have no links that water can break.</p>
      solution: "<p>水解把每個酯鍵斷開。<span class=\"chem nowrap\">–O–(CH<sub>2</sub>)<sub>4</sub>–O–</span> 部分的兩端各得到一個 H，成為二醇。<span class=\"chem nowrap\">–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–</span> 部分的兩端各得到一個 –OH，成為二羧酸。加成聚合物沒有可被水斷開的連接鍵。</p>",
      // EN: <p>(a) <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>4</sub>–OH</span> and <span class="chem chem--eq">HOOC–(CH<sub>2</sub>)<sub>2</sub>–COOH</span>.</p><p>(b) The polyester has ester links in its backbone, which can be broken by hydrolysis (reaction with water). Poly(ethene) has only strong carbon to carbon bonds in its backbone, which are not hydrolysed.</p>
      answer: "<p>(a) <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>4</sub>–OH</span> 和 <span class=\"chem chem--eq\">HOOC–(CH<sub>2</sub>)<sub>2</sub>–COOH</span>。</p><p>(b) 這種聚酯的主鏈有酯鍵，可經水解（與水反應）斷開。Poly(ethene) 的主鏈只有強的碳碳鍵，不會水解。</p>",
      markscheme: [
        // EN: HO–(CH₂)₄–OH (the diol).
        "HO–(CH₂)₄–OH（二醇）。",
        // EN: HOOC–(CH₂)₂–COOH (the dicarboxylic acid).
        "HOOC–(CH₂)₂–COOH（二羧酸）。",
        // EN: The polyester has ester links that can be hydrolysed / broken by water, but poly(ethene) has only (strong, non-polar) C–C bonds in its chain.
        "聚酯有酯鍵，可被水解／被水斷開，但 poly(ethene) 的鏈中只有（強的、非極性的）C–C 鍵。",
      ],
    },

    // ── s2-4-q030 · mcq · challenge · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q030": {
      // EN: <p>A single monomer can form a condensation polymer if it has two different functional groups. The monomer <span class="chem nowrap">HO–(CH<sub>2</sub>)<sub>5</sub>–COOH</span> forms a polyester. Which is the repeating unit?</p>
      stem: "<p>如果一種單體有兩個不同的官能基，單獨一種單體也能形成縮合聚合物。單體 <span class=\"chem nowrap\">HO–(CH<sub>2</sub>)<sub>5</sub>–COOH</span> 形成一種聚酯。以下哪一個是重複單位？</p>",
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
        "一個分子的 –OH 端與下一個分子的 –COOH 端反應。",
        // EN: Remove H from the –OH end and –OH from the –COOH end.
        "從 –OH 端除去 H，從 –COOH 端除去 –OH。",
      ],
      // EN: <p>Each molecule loses an H from its –OH group and an –OH from its –COOH group, which together make one molecule of water. What remains is <span class="chem nowrap">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>. The ester link forms where one unit joins the next.</p>
      solution: "<p>每個分子從 –OH 基失去一個 H，從 –COOH 基失去一個 –OH，兩者合成一個水分子。剩下的是 <span class=\"chem nowrap\">–O–(CH<sub>2</sub>)<sub>5</sub>–CO–</span>。酯鍵在一個單位與下一個單位相連處形成。</p>",
      misconception: {
        // EN (option B): This shows two repeating units. With one kind of monomer, the smallest part that repeats comes from a single monomer molecule.
        "1": "這裏畫了兩個重複單位。只有一種單體時，重複出現的最小部分來自一個單體分子。",
        // EN (option C): The oxygen of the –OH group has been removed. The –OH group loses only its H. Its oxygen becomes part of the ester link.
        "2": "–OH 基的氧被除去了。–OH 基只失去它的 H。它的氧會成為酯鍵的一部分。",
        // EN (option D): There is one oxygen atom too many. The –COOH group loses its –OH, so that end of the unit is –CO–.
        "3": "多了一個氧原子。–COOH 基失去它的 –OH，所以單位的那一端是 –CO–。",
      },
    },

    // ── s2-4-q031 · mcq · foundation · SL · Structure 2.4.1 · 1 mark
    "s2-4-q031": {
      // EN: <p>Chemists describe bonding as a continuum between the ionic, covalent and metallic models. What does this mean?</p>
      stem: "<p>化學家把鍵合描述為介乎離子、共價和金屬三個模型之間的連續體 (continuum)。這是甚麼意思？</p>",
      options: [
        // EN: Every substance has exactly one of the three types of bonding.
        "每種物質都只有三種鍵合類型的其中一種。",
        // EN: Bonding changes gradually from one type to another, and many substances lie between the models.
        "鍵合由一種類型逐漸變成另一種，而許多物質介乎各模型之間。",
        // EN: Every substance has equal amounts of the three types of bonding.
        "每種物質都有等量的三種鍵合類型。",
        // EN: The type of bonding in a substance changes when the substance is heated.
        "物質受熱時，它的鍵合類型會改變。",
      ],
      hints: [
        // EN: Think of the bonding triangle. Are substances found only at its three corners?
        "想想鍵合三角。物質只出現在它的三個角嗎？",
      ],
      // EN: <p>A continuum is a smooth range with no sharp dividing lines. The three models are the extremes. The bonding in most substances lies somewhere between them, and the bonding triangle shows where.</p>
      solution: "<p>連續體是一個平滑漸變的範圍，沒有明確的分界線。三個模型是極端的情況。大部分物質的鍵合介乎三者之間，而鍵合三角顯示出它們的位置。</p>",
      misconception: {
        // EN (option A): This describes three separate boxes. A continuum has no sharp dividing lines: a polar covalent bond, for example, is covalent with some ionic character.
        "0": "這說的是三個互不相干的格子。連續體沒有明確的分界線：例如極性共價鍵，就是帶有少許離子性的共價鍵。",
        // EN (option C): The amounts are not equal. A substance near a corner of the bonding triangle is described well by one model. A substance between the corners has character of more than one model.
        "2": "分量並不相等。靠近鍵合三角某個角的物質，用一個模型就能描述得很好。位於各個角之間的物質，帶有多於一個模型的特性。",
        // EN (option D): A continuum is not about one substance changing. It is about the gradual change in bonding from one substance to the next.
        "3": "連續體說的不是一種物質本身的改變，而是由一種物質到另一種物質，鍵合逐漸改變。",
      },
    },

    // ── s2-4-q032 · short · exam · SL · Structure 2.4.1 · 2 marks
    "s2-4-q032": {
      // EN: <p>Solid copper conducts electricity. Solid sodium chloride does not. Use bonding models to explain this difference.</p>
      stem: "<p>固態銅能導電。固態氯化鈉卻不能。利用鍵合模型解釋 (explain) 這個差異。</p>",
      hints: [
        // EN: To conduct electricity, a substance needs charged particles that can move.
        "物質要導電，需要有可移動的帶電粒子。",
        // EN: Name the charged particles in each solid. Can they move?
        "說出每種固體中的帶電粒子。它們能移動嗎？",
      ],
      // EN: <p>Name the particles and say whether they can move. In copper the delocalized electrons move. In solid sodium chloride the charged particles are ions, and they are fixed in the lattice. “Sodium chloride has no free electrons” does not earn the mark, because an ionic compound conducts through moving ions when it is molten.</p>
      solution: "<p>說出是甚麼粒子，並說明它們能否移動。在銅中，離域電子可以移動。在固態氯化鈉中，帶電粒子是離子，它們固定在晶格中。「氯化鈉沒有自由電子」不會得分，因為離子化合物熔融時是靠移動的離子導電的。</p>",
      // EN: <p>Copper has metallic bonding: a lattice of cations with delocalized electrons. The delocalized electrons are free to move through the solid, so they carry charge.</p><p>Sodium chloride has ionic bonding. In the solid, the ions are held in fixed positions in the lattice, so no charged particles are free to move.</p>
      answer: "<p>銅有金屬鍵：陽離子晶格加上離域電子。離域電子可在固體中自由移動，所以能傳送電荷。</p><p>氯化鈉有離子鍵。在固體中，離子固定在晶格的位置上，所以沒有帶電粒子可以自由移動。</p>",
      markscheme: [
        // EN: Copper: delocalized electrons that are free to move / mobile (through the lattice).
        "銅：離域電子可自由移動／可流動（穿過晶格）。",
        // EN: Sodium chloride: ions are in fixed positions / cannot move in the solid (lattice). Do not accept “no free electrons” alone.
        "氯化鈉：離子位置固定／在固體（晶格）中不能移動。不接受只寫「沒有自由電子」。",
      ],
    },

    // ── s2-4-q033 · mcq · foundation · SL · Structure 2.4.3 · 1 mark
    "s2-4-q033": {
      // EN: <p>Bronze is made by adding tin to copper. Bronze is harder than pure copper. Which statement explains this?</p>
      stem: "<p>青銅是在銅中加入錫而製成的。青銅比純銅硬。以下哪一項解釋了這一點？</p>",
      options: [
        // EN: The tin atoms form strong covalent bonds with the copper atoms.
        "錫原子與銅原子形成強的共價鍵。",
        // EN: The tin atoms are a different size, so the layers cannot slide over each other as easily.
        "錫原子的大小不同，所以各層不能那麼容易互相滑過。",
        // EN: The tin atoms remove the delocalized electrons from the copper.
        "錫原子移走了銅的離域電子。",
        // EN: The tin atoms and the copper atoms form an ionic lattice.
        "錫原子和銅原子形成離子晶格。",
      ],
      hints: [
        // EN: Why is a pure metal malleable? What must the layers be able to do?
        "純金屬為甚麼有展性？各層必須能夠怎樣？",
      ],
      // EN: <p>In pure copper the cations are all the same size and form regular layers, which slide over each other. Tin atoms are a different size. They disrupt the regular layers, so the layers slide less easily and the alloy is harder.</p>
      solution: "<p>在純銅中，陽離子大小全部相同，排列成整齊的層，各層可以互相滑過。錫原子的大小不同。它們打亂了整齊的層，所以各層較難滑動，合金也就較硬。</p>",
      misconception: {
        // EN (option A): The bonding in an alloy is still metallic. The alloy is harder because its layers are disrupted, not because new covalent bonds form.
        "0": "合金的鍵合仍然是金屬鍵。合金較硬是因為層被打亂，不是因為形成了新的共價鍵。",
        // EN (option C): The delocalized electrons stay. Tin is a metal and adds its own outer electrons to them.
        "2": "離域電子仍然存在。錫是金屬，會把自己的最外層電子加進去。",
        // EN (option D): Both elements are metals, and neither forms negative ions here. The bonding stays metallic.
        "3": "兩種元素都是金屬，在這裏都不會形成負離子。鍵合仍然是金屬鍵。",
      },
    },

    // ── s2-4-q034 · mcq · foundation · SL · Structure 2.4.4 · 1 mark
    "s2-4-q034": {
      // EN: <p>Polymers can be natural or synthetic. Which row is correct?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Natural polymer</th><th scope="col">Synthetic polymer</th></tr></thead><tbody><tr><th scope="row">A</th><td>poly(ethene)</td><td>starch</td></tr><tr><th scope="row">B</th><td>protein</td><td>poly(ethene)</td></tr><tr><th scope="row">C</th><td>water</td><td>protein</td></tr><tr><th scope="row">D</th><td>cellulose</td><td>ethene</td></tr></tbody></table></div>
      stem: "<p>聚合物可以是天然的，也可以是合成的。哪一行正確？</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">天然聚合物</th><th scope=\"col\">合成聚合物</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>poly(ethene)</td><td>澱粉</td></tr><tr><th scope=\"row\">B</th><td>蛋白質</td><td>poly(ethene)</td></tr><tr><th scope=\"row\">C</th><td>水</td><td>蛋白質</td></tr><tr><th scope=\"row\">D</th><td>纖維素</td><td>ethene</td></tr></tbody></table></div>",
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
        "天然聚合物由生物製造。合成聚合物在工廠製造。",
        // EN: A polymer is a large molecule. Check that both substances in the row are polymers.
        "聚合物是大型分子。檢查該行的兩種物質是否都是聚合物。",
      ],
      // EN: <p>Proteins are natural polymers: living things make them from amino acids. Poly(ethene) is a synthetic polymer, a plastic made from ethene. Row B is correct.</p>
      solution: "<p>蛋白質是天然聚合物：生物用氨基酸製造蛋白質。Poly(ethene) 是合成聚合物，是由 ethene 製成的塑膠。B 行正確。</p>",
      misconception: {
        // EN (option A): These are the wrong way round. Starch is made by plants, so it is natural. Poly(ethene) is made in factories, so it is synthetic.
        "0": "兩者調轉了。澱粉由植物製造，所以是天然的。Poly(ethene) 在工廠製造，所以是合成的。",
        // EN (option C): Water is a small molecule, not a polymer. Protein is a natural polymer, made by living things.
        "2": "水是小分子，不是聚合物。蛋白質是天然聚合物，由生物製造。",
        // EN (option D): Cellulose is a natural polymer, but ethene is a small molecule. Ethene is the monomer that makes the polymer poly(ethene).
        "3": "纖維素是天然聚合物，但 ethene 是小分子。Ethene 是製造聚合物 poly(ethene) 的單體。",
      },
    },

    // ── s2-4-q035 · mcq · exam · SL · Structure 2.4.4 · 1 mark
    "s2-4-q035": {
      // EN: <p>Many plastics soften when they are warmed, so they can be moulded into new shapes. Which statement explains this?</p>
      stem: "<p>許多塑膠受熱時會軟化，所以可以模塑成新的形狀。以下哪一項解釋了這一點？</p>",
      options: [
        // EN: The covalent bonds inside the polymer chains break.
        "聚合物鏈內的共價鍵斷開。",
        // EN: The weak intermolecular forces between the polymer chains are overcome, so the chains can slide past each other.
        "聚合物鏈之間微弱的分子間引力被克服，所以鏈可以互相滑過。",
        // EN: The delocalized electrons in the plastic gain energy and move faster.
        "塑膠中的離域電子獲得能量，移動得更快。",
        // EN: The ions in the plastic become free to move.
        "塑膠中的離子變得可以自由移動。",
      ],
      hints: [
        // EN: There are two kinds of attraction in a plastic: inside each chain, and between chains. Which is weaker?
        "塑膠中有兩種引力：每條鏈之內的，和鏈與鏈之間的。哪一種較弱？",
      ],
      // EN: <p>Inside each chain the atoms are joined by strong covalent bonds. Between the chains there are only weak intermolecular forces. Gentle heating overcomes these weak forces, so the chains slide past each other and the plastic softens. No covalent bonds break.</p>
      solution: "<p>在每條鏈之內，原子以強的共價鍵連接。鏈與鏈之間只有微弱的分子間引力。稍為加熱就能克服這些微弱的引力，所以鏈互相滑過，塑膠軟化。沒有共價鍵斷開。</p>",
      misconception: {
        // EN (option A): The covalent bonds in the chains are strong and do not break on gentle heating. If they broke, the plastic would decompose into new substances.
        "0": "鏈中的共價鍵很強，稍為加熱不會斷開。如果它們斷開，塑膠就會分解成新的物質。",
        // EN (option C): A plastic has no delocalized electrons. All its outer electrons are held in covalent bonds, which is why it is an electrical insulator.
        "2": "塑膠沒有離域電子。它所有的最外層電子都留在共價鍵中，所以它是電絕緣體。",
        // EN (option D): A plastic is made of covalently bonded molecules. It contains no ions.
        "3": "塑膠由以共價鍵結合的分子構成。它不含離子。",
      },
    },

    // ── s2-4-q036 · multi · exam · SL · Structure 2.4.4 · 2 marks
    "s2-4-q036": {
      // EN: <p>Which statements about plastics are correct? Select all that apply.</p>
      stem: "<p>關於塑膠，以下哪些說法正確？選出所有正確選項。</p>",
      options: [
        // EN: A plastic is made of very long molecules.
        "塑膠由非常長的分子構成。",
        // EN: Plastics are electrical insulators because all their outer electrons are held in covalent bonds.
        "塑膠是電絕緣體，因為所有最外層電子都留在共價鍵中。",
        // EN: Plastics are unreactive because the forces between the chains are weak.
        "塑膠不活潑，因為鏈與鏈之間的引力微弱。",
        // EN: The atoms inside each polymer chain are joined by strong covalent bonds.
        "每條聚合物鏈內的原子以強的共價鍵連接。",
        // EN: Most plastics are quickly broken down by microorganisms.
        "大部分塑膠很快就被微生物分解。",
      ],
      hints: [
        // EN: Separate the two ideas: strong covalent bonds inside a chain, and weak forces between chains.
        "把兩個概念分開：鏈內的強共價鍵，和鏈與鏈之間的微弱引力。",
        // EN: A chemical property depends on breaking bonds inside the chains.
        "化學性質取決於鏈內的鍵會否斷開。",
      ],
      // EN: <p>Plastics are polymers: very long molecules with strong covalent bonds inside each chain. There are no delocalized electrons or ions, so plastics do not conduct electricity. The strong covalent bonds make plastics unreactive and, for most plastics, non-biodegradable.</p>
      solution: "<p>塑膠是聚合物：非常長的分子，每條鏈之內有強的共價鍵。塑膠沒有離域電子或離子，所以不導電。強的共價鍵令塑膠不活潑，而且大部分塑膠不可生物降解。</p>",
      misconception: {
        // EN (option C): The weak forces between chains explain physical properties, such as softening on heating. Plastics are unreactive because the covalent bonds inside the chains are strong.
        "2": "鏈與鏈之間的微弱引力解釋的是物理性質，例如受熱時軟化。塑膠不活潑，是因為鏈內的共價鍵很強。",
        // EN (option E): Most plastics are non-biodegradable. Microorganisms cannot easily break the strong covalent bonds in the chains, so plastic waste stays in the environment for a very long time.
        "4": "大部分塑膠不可生物降解。微生物不容易斷開鏈中強的共價鍵，所以塑膠廢物會在環境中留存很長時間。",
      },
    },

    // ── s2-4-q037 · mcq · foundation · AHL · Structure 2.4.6 · 1 mark
    "s2-4-q037": {
      // EN: <p>A diamine reacts with a dicarboxylic acid to form a condensation polymer. Which row gives the type of polymer and the link between the monomer units?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Type of polymer</th><th scope="col">Link</th></tr></thead><tbody><tr><th scope="row">A</th><td>polyester</td><td>–CO–O–</td></tr><tr><th scope="row">B</th><td>polyamide</td><td>–CO–O–</td></tr><tr><th scope="row">C</th><td>polyamide</td><td>–CO–NH–</td></tr><tr><th scope="row">D</th><td>polyester</td><td>–CO–NH–</td></tr></tbody></table></div>
      stem: "<p>二胺 (diamine) 與二羧酸 (dicarboxylic acid) 反應，形成縮合聚合物。哪一行正確列出聚合物的類型和單體單位之間的連接鍵？</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">聚合物類型</th><th scope=\"col\">連接鍵</th></tr></thead><tbody><tr><th scope=\"row\">A</th><td>聚酯</td><td>–CO–O–</td></tr><tr><th scope=\"row\">B</th><td>聚酰胺</td><td>–CO–O–</td></tr><tr><th scope=\"row\">C</th><td>聚酰胺</td><td>–CO–NH–</td></tr><tr><th scope=\"row\">D</th><td>聚酯</td><td>–CO–NH–</td></tr></tbody></table></div>",
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
        "二胺有兩個 –NH<sub>2</sub> 基。二胺的哪一個原子連到 C=O 的碳？",
      ],
      // EN: <p>An –NH<sub>2</sub> group reacts with a –COOH group. Water is released and an amide link, –CO–NH–, forms. A polymer with many amide links is a polyamide.</p>
      solution: "<p>–NH<sub>2</sub> 基與 –COOH 基反應。放出水，並形成酰胺鍵 –CO–NH–。有許多酰胺鍵的聚合物就是聚酰胺。</p>",
      misconception: {
        // EN (option A): A polyester forms from a diol and a dicarboxylic acid. Here the first monomer is a diamine, with –NH<sub>2</sub> groups, so the link must contain nitrogen.
        "0": "聚酯由二醇和二羧酸形成。這裏第一種單體是二胺，帶有 –NH<sub>2</sub> 基，所以連接鍵必定含有氮。",
        // EN (option B): The name is right, but –CO–O– is an ester link. An amide link contains nitrogen: –CO–NH–.
        "1": "名稱正確，但 –CO–O– 是酯鍵。酰胺鍵含有氮：–CO–NH–。",
        // EN (option D): The link is right, but a polymer with –CO–NH– links is called a polyamide.
        "3": "連接鍵正確，但含有 –CO–NH– 連接鍵的聚合物稱為聚酰胺。",
      },
    },

  }
});
