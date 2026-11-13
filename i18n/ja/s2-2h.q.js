/* s2-2h.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's2-2h.q', {
  questions: {

    // ── s2-2h-q001 · mcq · foundation · AHL · Structure 2.2.11 · 1 mark
    "s2-2h-q001": {
      // EN: <p>For which species can you draw more than one Lewis formula, where the formulas differ only in the position of a double bond?</p>
      stem: "<p>二重結合の位置だけが違うルイス構造式を、2 つ以上描ける化学種はどれですか。</p>",
      options: [
        // EN: <span class="chem">HCHO</span> (methanal)
        "<span class=\"chem\">HCHO</span>（メタナール）",
        // EN: <span class="chem">C2H4</span> (ethene)
        "<span class=\"chem\">C2H4</span>（エテン）",
        // EN: <span class="chem">NO3-</span> (nitrate ion)
        "<span class=\"chem\">NO3-</span>（硝酸イオン）",
        // EN: <span class="chem">HCN</span> (hydrogen cyanide)
        "<span class=\"chem\">HCN</span>（シアン化水素）",
      ],
      hints: [
        // EN: Look for a central atom joined to two or more atoms of the same element.
        "同じ元素の原子 2 個以上とつながっている中心原子を探しましょう。",
        // EN: Ask: could the double bond be drawn to a different atom and still give a correct Lewis formula?
        "考えてみましょう。二重結合を別の原子との間に描いても、正しいルイス構造式になりますか。",
      ],
      // EN: <p>In the nitrate ion, nitrogen is joined to three oxygen atoms. The one N=O double bond can be drawn to any of the three. That gives three resonance structures. In the other species the multiple bond has only one possible position.</p>
      solution: "<p>硝酸イオンでは、窒素が 3 個の酸素原子とつながっています。1 つの N=O 二重結合は、3 個のどれとの間にも描けます。だから共鳴構造が 3 つあります。ほかの化学種では、多重結合を置ける位置は 1 つだけです。</p>",
      misconception: {
        // EN (option A): In methanal the double bond can only go to the oxygen atom. Hydrogen forms one single bond only. One position means no resonance.
        "0": "メタナールでは、二重結合は酸素原子との間にしか置けません。水素は単結合を 1 本しか作りません。位置が 1 つだけなら、共鳴はありません。",
        // EN (option B): In ethene the double bond can only be between the two carbon atoms. There is no second position for it.
        "1": "エテンでは、二重結合は 2 個の炭素原子の間にしか置けません。ほかに置ける位置はありません。",
        // EN (option D): HCN has a triple bond between C and N. Hydrogen cannot take part in a multiple bond, so there is only one possible formula.
        "3": "HCN には C と N の間に三重結合があります。水素は多重結合を作れないので、描ける構造式は 1 つだけです。",
      },
    },

    // ── s2-2h-q002 · mcq · exam · AHL · Structure 2.2.11 · 1 mark
    "s2-2h-q002": {
      // EN: <p>The data booklet gives these bond lengths: N–O 136 pm and N=O 114 pm. One Lewis formula of the nitrate ion, <span class="chem">NO3-</span>, shows one N=O bond and two N–O bonds.</p><p>Which describes the nitrogen–oxygen bonds that are measured in the nitrate ion?</p>
      stem: "<p>データブックレットには、次の結合距離が載っています。N–O 136 pm、N=O 114 pm。硝酸イオン <span class=\"chem\">NO3-</span> のルイス構造式の 1 つには、N=O 結合が 1 本と N–O 結合が 2 本あります。</p><p>硝酸イオンで実際に測定される窒素–酸素結合を、正しく説明しているものはどれですか。</p>",
      options: [
        // EN: One bond of 114 pm and two bonds of 136 pm
        "114 pm の結合が 1 本と、136 pm の結合が 2 本",
        // EN: Three bonds of 114 pm
        "114 pm の結合が 3 本",
        // EN: Three bonds of 136 pm
        "136 pm の結合が 3 本",
        // EN: Three equal bonds, with a length between 114 pm and 136 pm
        "長さの等しい結合が 3 本で、長さは 114 pm と 136 pm の間",
      ],
      hints: [
        // EN: How many resonance structures does the nitrate ion have?
        "硝酸イオンには共鳴構造がいくつありますか。",
        // EN: The real ion is a mix (hybrid) of all of them. What does that do to the three bonds?
        "実際のイオンは、そのすべてを混ぜ合わせたもの（混成体）です。すると 3 本の結合はどうなりますか。",
      ],
      // EN: <p>The nitrate ion has three resonance structures. The π electrons are delocalized over the nitrogen atom and all three oxygen atoms. So all three bonds are the same, and each is between a single and a double bond. The measured value is about 124 pm.</p>
      solution: "<p>硝酸イオンには共鳴構造が 3 つあります。π 電子は、窒素原子と 3 個の酸素原子全体に非局在化しています (delocalized)。そのため 3 本の結合はすべて同じで、どれも単結合と二重結合の中間です。測定値は約 124 pm です。</p>",
      misconception: {
        // EN (option A): This treats one resonance structure as the real ion. The ion does not have one fixed double bond. The π electrons are delocalized over all three bonds.
        "0": "これは、1 つの共鳴構造を実際のイオンとして扱っています。イオンには、決まった位置の二重結合が 1 つあるわけではありません。π 電子は 3 本の結合全体に非局在化しています。",
        // EN (option B): There is only one double bond to share among three positions, so the bonds are not all full double bonds.
        "1": "二重結合は 1 つしかなく、それを 3 つの位置で分け合います。だから、すべての結合が完全な二重結合になることはありません。",
        // EN (option C): The double bond does not disappear. Its π electrons are shared by all three bonds, which makes each one shorter than a single bond.
        "2": "二重結合が消えるわけではありません。その π 電子が 3 本の結合すべてに共有されるので、どの結合も単結合より短くなります。",
      },
    },

    // ── s2-2h-q003 · short · exam · AHL · Structure 2.2.11 · 2 marks
    "s2-2h-q003": {
      // EN: <p>A Lewis formula of ozone, <span class="chem">O3</span>, shows one O=O double bond and one O–O single bond. The data booklet values are O–O 148 pm and O=O 121 pm.</p><p>Measurements show that both bonds in ozone are 128 pm long. Explain this.</p>
      stem: "<p>オゾン <span class=\"chem\">O3</span> のルイス構造式の 1 つには、O=O 二重結合が 1 本と O–O 単結合が 1 本あります。データブックレットの値は、O–O 148 pm、O=O 121 pm です。</p><p>測定によると、オゾンの 2 本の結合はどちらも 128 pm です。このことを説明しなさい (explain)。</p>",
      hints: [
        // EN: Draw the Lewis formula with the double bond on the left. Now draw it with the double bond on the right.
        "二重結合を左側にしてルイス構造式を描きましょう。次に、二重結合を右側にして描きましょう。",
        // EN: Use the word “delocalized” and say what it does to the two bonds.
        "「非局在化している (delocalized)」という語を使い、それによって 2 本の結合がどうなるかを書きましょう。",
      ],
      // EN: <p>Two resonance structures exist. Neither is the real molecule. The π electrons are delocalized over the three atoms, so both bonds are equal in length. 128 pm lies between 121 pm (double) and 148 pm (single).</p>
      solution: "<p>共鳴構造が 2 つあります。どちらも実際の分子ではありません。π 電子は 3 つの原子全体に非局在化しているので、2 本の結合は同じ長さです。128 pm は、121 pm（二重結合）と 148 pm（単結合）の間にあります。</p>",
      // EN: <p>Ozone has two resonance structures, because the double bond can be drawn on either side of the central atom. The real molecule is a hybrid of the two. The π electrons are delocalized over all three oxygen atoms, so both bonds are identical and each is between a single and a double bond.</p>
      answer: "<p>オゾンには共鳴構造が 2 つあります。二重結合を、中心原子のどちら側にも描けるからです。実際の分子は、この 2 つの共鳴混成体です。π 電子は 3 個の酸素原子全体に非局在化しているので、2 本の結合はまったく同じで、どちらも単結合と二重結合の中間です。</p>",
      markscheme: [
        // EN: Two resonance structures can be drawn / the double bond has two possible positions (accept: ozone has resonance).
        "共鳴構造が 2 つ描ける / 二重結合を置ける位置が 2 つある（「オゾンには共鳴がある」も可）。",
        // EN: The (π) electrons are delocalized over all three oxygen atoms, so both bonds are the same / each bond is intermediate between a single and a double bond.
        "（π）電子が 3 個の酸素原子全体に非局在化しているので、2 本の結合は同じである / どちらの結合も単結合と二重結合の中間である。",
      ],
    },

    // ── s2-2h-q004 · short · challenge · AHL · Structure 2.2.11 · 3 marks
    "s2-2h-q004": {
      // EN: <p>Ultraviolet light can break the bonds in oxygen, <span class="chem">O2</span>, and in ozone, <span class="chem">O3</span>. The bond in <span class="chem">O2</span> is broken only by light with a wavelength shorter than about 242 nm. The bonds in <span class="chem">O3</span> are broken by light with wavelengths up to about 330 nm.</p><p>Explain this difference, using the bonding in the two molecules.</p>
      stem: "<p>紫外線は、酸素 <span class=\"chem\">O2</span> とオゾン <span class=\"chem\">O3</span> の結合を切ることができます。<span class=\"chem\">O2</span> の結合は、波長が約 242 nm より短い光でしか切れません。<span class=\"chem\">O3</span> の結合は、波長が約 330 nm までの光で切れます。</p><p>2 つの分子の結合をもとに、この違いを説明しなさい (explain)。</p>",
      hints: [
        // EN: Compare the type of bond in each molecule. Ozone has two resonance structures.
        "それぞれの分子の結合の種類をくらべましょう。オゾンには共鳴構造が 2 つあります。",
        // EN: Which bond is stronger: a double bond, or a bond between single and double?
        "どちらの結合が強いでしょうか。二重結合ですか。それとも、単結合と二重結合の中間の結合ですか。",
        // EN: Link energy and wavelength: <i>E</i> = <i>hf</i> and <i>c</i> = <i>λf</i> (Structure 1.3).
        "エネルギーと波長を結びつけましょう：<i>E</i> = <i>hf</i> と <i>c</i> = <i>λf</i>（Structure 1.3）。",
      ],
      // EN: <p>Step 1: bonding. <span class="chem">O2</span> has O=O. In <span class="chem">O3</span> the two bonds are equal and intermediate between single and double.</p><p>Step 2: strength. An intermediate bond is weaker than a double bond, so less energy is needed.</p><p>Step 3: light. A photon with less energy has a longer wavelength. So ozone is broken by longer wavelengths than oxygen.</p>
      solution: "<p>ステップ 1：結合。<span class=\"chem\">O2</span> には O=O があります。<span class=\"chem\">O3</span> では 2 本の結合が等しく、単結合と二重結合の中間です。</p><p>ステップ 2：強さ。中間の結合は二重結合より弱いので、切るのに必要なエネルギーは少なくなります。</p><p>ステップ 3：光。エネルギーの少ない光子は、波長が長くなります。だからオゾンは、酸素より長い波長の光で切れます。</p>",
      // EN: <p><span class="chem">O2</span> has a double bond, O=O. In ozone, resonance means the π electrons are delocalized, so each bond is between a single and a double bond. The bonds in ozone are therefore weaker than the bond in <span class="chem">O2</span> and need less energy to break. Light of lower energy has a longer wavelength (<i>E</i> = <i>hc</i>/<i>λ</i>), so longer wavelengths can break ozone.</p>
      answer: "<p><span class=\"chem\">O2</span> には二重結合 O=O があります。オゾンでは、共鳴によって π 電子が非局在化しているので、どちらの結合も単結合と二重結合の中間です。そのため、オゾンの結合は <span class=\"chem\">O2</span> の結合より弱く、少ないエネルギーで切れます。エネルギーの低い光は波長が長い（<i>E</i> = <i>hc</i>/<i>λ</i>）ので、より長い波長の光でオゾンを切ることができます。</p>",
      markscheme: [
        // EN: O<sub>2</sub> has a double bond, AND the bonds in O<sub>3</sub> are between single and double bonds (because of resonance / delocalization).
        "O<sub>2</sub> には二重結合があり、かつ、O<sub>3</sub> の結合は（共鳴 / 非局在化のために）単結合と二重結合の中間である。",
        // EN: The bonds in ozone are weaker / need less energy to break than the bond in O<sub>2</sub>.
        "オゾンの結合は O<sub>2</sub> の結合より弱い / 切るのに必要なエネルギーが少ない。",
        // EN: Lower energy corresponds to a longer wavelength (lower frequency), so light of longer wavelength can break the bonds in ozone.
        "エネルギーが低いことは、波長が長い（振動数が小さい）ことに対応する。だから、より長い波長の光でオゾンの結合を切ることができる。",
      ],
    },

    // ── s2-2h-q005 · mcq · foundation · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q005": {
      // EN: <p>Which statement about the carbon–carbon bonds in benzene, <span class="chem">C6H6</span>, is correct?</p>
      stem: "<p>ベンゼン <span class=\"chem\">C6H6</span> の炭素–炭素結合について、正しい文はどれですか。</p>",
      options: [
        // EN: Three short C=C bonds and three long C–C bonds alternate around the ring.
        "短い C=C 結合 3 本と長い C–C 結合 3 本が、環に交互に並んでいる。",
        // EN: All six bonds have the same length, between the lengths of C–C and C=C.
        "6 本の結合はすべて同じ長さで、C–C と C=C の間の長さである。",
        // EN: All six bonds are single bonds, the same length as in ethane.
        "6 本の結合はすべて単結合で、エタンと同じ長さである。",
        // EN: All six bonds are double bonds, the same length as in ethene.
        "6 本の結合はすべて二重結合で、エテンと同じ長さである。",
      ],
      hints: [
        // EN: Benzene has two resonance structures. The real molecule is a hybrid of them.
        "ベンゼンには共鳴構造が 2 つあります。実際の分子は、その共鳴混成体です。",
      ],
      // EN: <p>The six π electrons in benzene are delocalized over all six carbon atoms. So all six carbon–carbon bonds are identical. Their length, about 140 pm, is between C–C (154 pm) and C=C (134 pm).</p>
      solution: "<p>ベンゼンの 6 個の π 電子は、6 個の炭素原子全体に非局在化しています。そのため、6 本の炭素–炭素結合はすべて同じです。長さは約 140 pm で、C–C (154 pm) と C=C (134 pm) の間です。</p>",
      misconception: {
        // EN (option A): This is one resonance structure, not the real molecule. Measurements show six equal bonds.
        "0": "これは共鳴構造の 1 つで、実際の分子ではありません。測定すると、6 本の結合は等しくなっています。",
        // EN (option C): Six single bonds would leave each carbon with only three bonds. The measured length (about 140 pm) is shorter than C–C (154 pm).
        "2": "単結合 6 本だと、それぞれの炭素の結合は 3 本だけになってしまいます。測定された長さ（約 140 pm）は、C–C (154 pm) より短い値です。",
        // EN (option D): Six double bonds would give each carbon too many bonds. The measured length (about 140 pm) is longer than C=C (134 pm).
        "3": "二重結合 6 本だと、それぞれの炭素の結合が多すぎます。測定された長さ（約 140 pm）は、C=C (134 pm) より長い値です。",
      },
    },

    // ── s2-2h-q006 · mcq · exam · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q006": {
      // EN: <p>Benzene was once drawn as a ring with alternating single and double bonds. Which observation is evidence <strong>against</strong> that structure?</p>
      stem: "<p>ベンゼンは、かつて単結合と二重結合が交互に並んだ環として描かれていました。この構造を<strong>否定する</strong>証拠になる観察はどれですか。</p>",
      options: [
        // EN: Benzene has the molecular formula <span class="chem">C6H6</span>.
        "ベンゼンの分子式は <span class=\"chem\">C6H6</span> である。",
        // EN: Benzene reacts with hydrogen to form cyclohexane, <span class="chem">C6H12</span>.
        "ベンゼンは水素と反応して、シクロヘキサン <span class=\"chem\">C6H12</span> になる。",
        // EN: All the carbon–carbon bonds in benzene have the same length.
        "ベンゼンの炭素–炭素結合は、すべて同じ長さである。",
        // EN: Benzene burns in oxygen to form carbon dioxide and water.
        "ベンゼンは酸素中で燃えて、二酸化炭素と水になる。",
      ],
      hints: [
        // EN: Ask of each observation: would a ring with three real C=C bonds also do this?
        "それぞれの観察について考えましょう。本物の C=C 結合を 3 つもつ環でも、同じことが起こりますか。",
        // EN: Single and double bonds have different lengths.
        "単結合と二重結合は、長さが違います。",
      ],
      // EN: <p>Alternating single and double bonds would have two different lengths (154 pm and 134 pm). All six bonds in benzene are equal (about 140 pm). This is physical evidence that the π electrons are delocalized.</p>
      solution: "<p>単結合と二重結合が交互なら、長さが 2 種類（154 pm と 134 pm）になるはずです。ベンゼンの 6 本の結合はすべて等しく、約 140 pm です。これは、π 電子が非局在化していることを示す物理的な証拠です。</p>",
      misconception: {
        // EN (option A): A ring with alternating single and double bonds also has the formula C<sub>6</sub>H<sub>6</sub>. This fits both models, so it is not evidence against one of them.
        "0": "単結合と二重結合が交互に並んだ環も、化学式は C<sub>6</sub>H<sub>6</sub> です。どちらのモデルにも合うので、片方を否定する証拠にはなりません。",
        // EN (option B): A molecule with three C=C bonds would also add three H<sub>2</sub> to form cyclohexane. This fits both models.
        "1": "C=C 結合を 3 つもつ分子も、H<sub>2</sub> を 3 分子付加してシクロヘキサンになります。これはどちらのモデルにも合います。",
        // EN (option D): Every hydrocarbon burns to form carbon dioxide and water. This says nothing about the bonds in the ring.
        "3": "炭化水素はどれも、燃えると二酸化炭素と水になります。環の結合については何もわかりません。",
      },
    },

    // ── s2-2h-q007 · multi · exam · AHL · Structure 2.2.12 · 2 marks
    "s2-2h-q007": {
      // EN: <p>Which of these are <strong>chemical</strong> evidence that benzene does not contain three ordinary C=C double bonds? Select all that apply.</p>
      stem: "<p>ベンゼンにふつうの C=C 二重結合が 3 つあるわけではないことを示す、<strong>化学的な</strong>証拠はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Benzene reacts by substitution rather than addition.
        "ベンゼンは、付加反応ではなく置換反応をする。",
        // EN: All the carbon–carbon bonds in benzene are 140 pm long.
        "ベンゼンの炭素–炭素結合の長さは、すべて 140 pm である。",
        // EN: The enthalpy of hydrogenation of benzene is less exothermic than three times that of cyclohexene.
        "ベンゼンの水素化エンタルピーは、シクロヘキセンの値の 3 倍より発熱が小さい。",
        // EN: Benzene is a planar regular hexagon with bond angles of 120°.
        "ベンゼンは平面の正六角形で、結合角は 120° である。",
        // EN: Benzene does not readily decolourize bromine water.
        "ベンゼンは、臭素水を簡単には脱色しない。",
      ],
      hints: [
        // EN: Chemical evidence comes from what benzene does in reactions, including the energy change of a reaction.
        "化学的な証拠は、ベンゼンが反応でどうふるまうかから得られます。反応のエネルギー変化もふくみます。",
        // EN: Physical evidence comes from measuring the molecule itself: lengths, angles, shape.
        "物理的な証拠は、分子そのものの測定から得られます。長さ、角度、形です。",
      ],
      // EN: <p>Chemical: substitution instead of addition; no fast reaction with bromine water; a less exothermic enthalpy of hydrogenation than expected. Physical: equal bond lengths; a planar regular hexagon.</p>
      solution: "<p>化学的：付加ではなく置換をする。臭素水とすぐには反応しない。水素化エンタルピーの発熱が予想より小さい。物理的：結合距離が等しい。平面の正六角形である。</p>",
      misconception: {
        // EN (option B): Bond length is measured, not seen in a reaction. It is physical evidence. If a question asks for chemical evidence, this does not score.
        "1": "結合距離は測定するもので、反応で見るものではありません。これは物理的な証拠です。化学的な証拠を求める問題では、点になりません。",
        // EN (option D): Shape and bond angles are physical evidence. Chemical evidence is about reactions and their energy changes.
        "3": "形と結合角は物理的な証拠です。化学的な証拠は、反応とそのエネルギー変化についてのものです。",
      },
    },

    // ── s2-2h-q008 · short · exam · AHL · Structure 2.2.12 · 3 marks
    "s2-2h-q008": {
      // EN: <p>Benzene is sometimes drawn as a ring with alternating single and double bonds.</p><p>Discuss why this drawing does not describe benzene well. Give one piece of physical evidence and one piece of chemical evidence, and state how the bonding in benzene is described instead.</p>
      stem: "<p>ベンゼンは、単結合と二重結合が交互に並んだ環として描かれることがあります。</p><p>この図がベンゼンをうまく表していない理由を論じなさい (discuss)。物理的な証拠を 1 つ、化学的な証拠を 1 つ挙げ、ベンゼンの結合が実際にはどう説明されるかを述べなさい (state)。</p>",
      hints: [
        // EN: Physical evidence is something you measure about the molecule. Chemical evidence is about a reaction.
        "物理的な証拠は、分子について測定できることです。化学的な証拠は、反応についてのことです。",
        // EN: For the bonding, use the words “delocalized” and “π electrons”.
        "結合の説明には、「非局在化した (delocalized)」と「π 電子 (π electrons)」という語を使いましょう。",
      ],
      // EN: <p>One physical point (equal bond lengths), one chemical point (substitution, not addition), then the model: delocalized π electrons around the ring. If you give two physical points and no chemical point, you lose a mark.</p>
      solution: "<p>物理的な点を 1 つ（結合距離が等しい）、化学的な点を 1 つ（付加ではなく置換）書き、次にモデルを書きます。環全体に非局在化した π 電子です。物理的な点を 2 つ書いて化学的な点を書かないと、1 点失います。</p>",
      // EN: <p>Physical evidence: all six carbon–carbon bonds have the same length (about 140 pm), between a single and a double bond. Alternating bonds would have two different lengths. Chemical evidence: benzene reacts by substitution, not by addition, so it does not behave like an alkene. The bonding is described as a ring of six carbon atoms with six delocalized π electrons, spread over the whole ring.</p>
      answer: "<p>物理的な証拠：6 本の炭素–炭素結合はすべて同じ長さ（約 140 pm）で、単結合と二重結合の中間である。結合が交互なら、長さが 2 種類になるはずである。化学的な証拠：ベンゼンは付加反応ではなく置換反応をするので、アルケンのようにはふるまわない。結合は、6 個の炭素原子の環と、環全体に広がって非局在化した 6 個の π 電子として説明される。</p>",
      markscheme: [
        // EN: Physical evidence: all carbon–carbon bond lengths are equal / intermediate between single and double (accept: regular planar hexagon, all bond angles 120°).
        "物理的な証拠：炭素–炭素結合の長さがすべて等しい / 単結合と二重結合の中間である（「平面の正六角形で、結合角がすべて 120°」も可）。",
        // EN: Chemical evidence: undergoes substitution rather than addition / does not readily decolourize bromine water (accept: enthalpy of hydrogenation less exothermic than expected for three C=C).
        "化学的な証拠：付加反応ではなく置換反応をする / 臭素水を簡単には脱色しない（「水素化エンタルピーの発熱が、C=C 3 つの予想より小さい」も可）。",
        // EN: Bonding: delocalized π electrons (spread over all six carbon atoms / the ring). The word “π” (or “pi”) is needed.
        "結合：非局在化した π 電子（6 個の炭素原子全体 / 環全体に広がっている）。「π」（または「pi」）という語が必要。",
      ],
    },

    // ── s2-2h-q009 · mcq · challenge · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q009": {
      // EN: <p>Cyclohexene has one C=C bond. Its enthalpy of hydrogenation is −120 <span class="unit">kJ mol-1</span>. The enthalpy of hydrogenation of benzene to cyclohexane is −208 <span class="unit">kJ mol-1</span>.</p><p>What do these data show?</p>
      stem: "<p>シクロヘキセンには C=C 結合が 1 つあります。その水素化エンタルピーは −120 <span class=\"unit\">kJ mol-1</span> です。ベンゼンがシクロヘキサンになるときの水素化エンタルピーは −208 <span class=\"unit\">kJ mol-1</span> です。</p><p>このデータからわかることはどれですか。</p>",
      options: [
        // EN: Benzene is about 152 <span class="unit">kJ mol-1</span> more stable than a ring with three separate C=C bonds.
        "ベンゼンは、独立した C=C 結合を 3 つもつ環より、約 152 <span class=\"unit\">kJ mol-1</span> 安定である。",
        // EN: Benzene is about 152 <span class="unit">kJ mol-1</span> less stable than a ring with three separate C=C bonds.
        "ベンゼンは、独立した C=C 結合を 3 つもつ環より、約 152 <span class=\"unit\">kJ mol-1</span> 不安定である。",
        // EN: Benzene contains between one and two C=C bonds.
        "ベンゼンには、C=C 結合が 1 つと 2 つの間の数だけある。",
        // EN: About 152 <span class="unit">kJ mol-1</span> must be supplied to hydrogenate benzene.
        "ベンゼンを水素化するには、約 152 <span class=\"unit\">kJ mol-1</span> を加えなければならない。",
      ],
      hints: [
        // EN: What would you predict for a ring with three separate C=C bonds?
        "独立した C=C 結合を 3 つもつ環なら、値はいくらになると予測できますか。",
        // EN: Compare your prediction with −208 <span class="unit">kJ mol-1</span>. Which is less exothermic?
        "その予測値を −208 <span class=\"unit\">kJ mol-1</span> とくらべましょう。発熱が小さいのはどちらですか。",
      ],
      // EN: <div class="worked__math">Predicted for three C=C: 3 × (−120) = −360 kJ mol<sup>−1</sup></div><div class="worked__math">Difference: 360 − 208 = 152 kJ mol<sup>−1</sup></div><p>Benzene releases 152 <span class="unit">kJ mol-1</span> less than predicted. So benzene is lower in energy (more stable) than the model with three separate double bonds. Delocalization of the π electrons lowers the energy.</p>
      solution: "<div class=\"worked__math\">C=C 3 つの予測値：3 × (−120) = −360 kJ mol<sup>−1</sup></div><div class=\"worked__math\">差：360 − 208 = 152 kJ mol<sup>−1</sup></div><p>ベンゼンが放出するエネルギーは、予測より 152 <span class=\"unit\">kJ mol-1</span> 少なくなっています。つまりベンゼンは、独立した二重結合が 3 つあるモデルよりエネルギーが低い（より安定）ということです。π 電子の非局在化によって、エネルギーが下がっています。</p>",
      misconception: {
        // EN (option B): Benzene gives out less energy than predicted when it is hydrogenated. It must start lower in energy, which means more stable, not less.
        "1": "水素化するとき、ベンゼンが放出するエネルギーは予測より少なくなっています。はじめのエネルギーが低いはずで、これは不安定ではなく、より安定という意味です。",
        // EN (option C): Dividing 208 by 120 treats the π electrons as separate double bonds. The data show the opposite: the electrons are not in separate double bonds.
        "2": "208 を 120 で割るのは、π 電子を独立した二重結合として扱う考え方です。データが示しているのはその逆で、電子は独立した二重結合の中にはありません。",
        // EN (option D): Both values are negative, so hydrogenation of benzene is exothermic. The 152 is a difference between a prediction and a measurement.
        "3": "どちらの値も負なので、ベンゼンの水素化は発熱反応です。152 は、予測値と測定値の差です。",
      },
    },

    // ── s2-2h-q010 · mcq · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q010": {
      // EN: <p>What are the molecular geometry and the bond angles of <span class="chem">PCl5</span>?</p>
      stem: "<p><span class=\"chem\">PCl5</span> の分子の形と結合角は、どれですか。</p>",
      options: [
        // EN: Trigonal bipyramidal; 90° and 120°
        "三方両錐形、90° と 120°",
        // EN: Square pyramidal; 90°
        "四角錐形、90°",
        // EN: Trigonal planar; 120°
        "平面三角形、120°",
        // EN: Octahedral; 90°
        "正八面体形、90°",
      ],
      hints: [
        // EN: Phosphorus has 5 valence electrons. How many are used in the five P–Cl bonds?
        "リンの価電子は 5 個です。5 本の P–Cl 結合に何個使いますか。",
        // EN: Five electron domains and no lone pairs.
        "電子領域は 5 つで、非共有電子対はありません。",
      ],
      // EN: <p>P has 5 valence electrons and uses all 5 in bonds. That is five bonding domains and no lone pairs. Five domains are arranged in a trigonal bipyramid: three bonds in a plane at 120°, and two bonds at 90° to that plane.</p>
      solution: "<p>P の価電子は 5 個で、5 個すべてを結合に使います。結合の領域が 5 つで、非共有電子対はありません。5 つの領域は三方両錐の形に並びます。3 本の結合は 1 つの平面上で 120° の向き、2 本の結合はその平面に対して 90° の向きです。</p>",
      misconception: {
        // EN (option B): Square pyramidal needs six electron domains, one of them a lone pair. Phosphorus in PCl<sub>5</sub> has five domains and no lone pair.
        "1": "四角錐形になるには、電子領域が 6 つで、そのうち 1 つが非共有電子対でなければなりません。PCl<sub>5</sub> のリンは領域が 5 つで、非共有電子対はありません。",
        // EN (option C): Trigonal planar is for three electron domains. Phosphorus here has five bonding domains.
        "2": "平面三角形は、電子領域が 3 つのときの形です。このリンには結合の領域が 5 つあります。",
        // EN (option D): Octahedral needs six electron domains. Count the bonds: there are five.
        "3": "正八面体形になるには、電子領域が 6 つ必要です。結合を数えましょう。5 本です。",
      },
    },

    // ── s2-2h-q011 · numeric · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q011": {
      // EN: <p>How many lone pairs are on the chlorine atom in <span class="chem">ClF3</span>?</p>
      stem: "<p><span class=\"chem\">ClF3</span> の塩素原子には、非共有電子対が何組ありますか。</p>",
      hints: [
        // EN: Chlorine is in group 17. How many valence electrons does it have?
        "塩素は 17 族です。価電子は何個ありますか。",
        // EN: Three electrons are used in the three Cl–F bonds. Pair up the rest.
        "3 本の Cl–F 結合に電子を 3 個使います。残りを対にしましょう。",
      ],
      // EN: <div class="worked__math">Valence electrons on Cl = 7</div><div class="worked__math">Used in three Cl–F bonds = 3</div><div class="worked__math">Left over = 7 − 3 = 4 electrons = <b>2 lone pairs</b></div><p>So chlorine has 3 + 2 = 5 electron domains.</p>
      solution: "<div class=\"worked__math\">Cl の価電子 = 7</div><div class=\"worked__math\">3 本の Cl–F 結合に使う電子 = 3</div><div class=\"worked__math\">残り = 7 − 3 = 4 個の電子 = <b>2 組の非共有電子対</b></div><p>だから、塩素の電子領域は 3 + 2 = 5 つです。</p>",
      // EN: lone pairs
      unit: "組の非共有電子対",
    },

    // ── s2-2h-q012 · mcq · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q012": {
      // EN: <p>What are the molecular geometry and the F–S–F bond angle between neighbouring bonds in <span class="chem">SF6</span>?</p>
      stem: "<p><span class=\"chem\">SF6</span> の分子の形と、隣り合う結合の間の F–S–F 結合角は、どれですか。</p>",
      options: [
        // EN: Tetrahedral; 109.5°
        "正四面体形、109.5°",
        // EN: Trigonal bipyramidal; 90° and 120°
        "三方両錐形、90° と 120°",
        // EN: Octahedral; 90°
        "正八面体形、90°",
        // EN: Hexagonal planar; 60°
        "平面六角形、60°",
      ],
      hints: [
        // EN: Sulfur has 6 valence electrons and forms six bonds.
        "硫黄の価電子は 6 個で、結合を 6 本作ります。",
        // EN: Six electron domains, no lone pairs.
        "電子領域は 6 つで、非共有電子対はありません。",
      ],
      // EN: <p>S uses all 6 valence electrons in six S–F bonds. Six bonding domains with no lone pairs give an octahedral molecule. Neighbouring bonds are at 90°.</p>
      solution: "<p>S は 6 個の価電子すべてを、6 本の S–F 結合に使います。結合の領域が 6 つで非共有電子対がないので、分子は正八面体形です。隣り合う結合は 90° の向きです。</p>",
      misconception: {
        // EN (option A): Tetrahedral is for four electron domains. Sulfur here has six bonds.
        "0": "正四面体形は、電子領域が 4 つのときの形です。この硫黄には結合が 6 本あります。",
        // EN (option B): Trigonal bipyramidal is for five electron domains. Count the fluorine atoms: there are six.
        "1": "三方両錐形は、電子領域が 5 つのときの形です。フッ素原子を数えましょう。6 個です。",
        // EN (option D): Electron domains spread out in three dimensions to get as far apart as possible. Six domains in one flat plane would be only 60° apart.
        "3": "電子領域は、できるだけ遠くに離れるように立体的に広がります。6 つの領域が 1 つの平面上にあると、60° しか離れません。",
      },
    },

    // ── s2-2h-q013 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q013": {
      // EN: <p>What are the electron domain geometry and the molecular geometry of <span class="chem">SF4</span>?</p>
      stem: "<p><span class=\"chem\">SF4</span> の電子領域の配置と分子の形は、どれですか。</p>",
      options: [
        // EN: Electron domain geometry: tetrahedral. Molecular geometry: tetrahedral.
        "電子領域の配置：正四面体形。分子の形：正四面体形。",
        // EN: Electron domain geometry: trigonal bipyramidal. Molecular geometry: trigonal bipyramidal.
        "電子領域の配置：三方両錐形。分子の形：三方両錐形。",
        // EN: Electron domain geometry: trigonal bipyramidal. Molecular geometry: seesaw.
        "電子領域の配置：三方両錐形。分子の形：シーソー形。",
        // EN: Electron domain geometry: octahedral. Molecular geometry: square planar.
        "電子領域の配置：正八面体形。分子の形：平面正方形。",
      ],
      hints: [
        // EN: Find the lone pairs on sulfur: valence electrons minus electrons used in bonds.
        "硫黄の非共有電子対を見つけましょう。価電子の数から、結合に使う電子の数を引きます。",
        // EN: Four bonding domains + one lone pair = five domains.
        "結合の領域 4 つ + 非共有電子対 1 組 = 5 領域。",
      ],
      // EN: <div class="worked__math">S: 6 valence electrons; 4 used in bonds; 2 left = 1 lone pair</div><p>Five electron domains: trigonal bipyramidal electron domain geometry. The lone pair takes an equatorial position. The four atoms then make a seesaw shape.</p>
      solution: "<div class=\"worked__math\">S：価電子 6 個；結合に 4 個使う；残り 2 個 = 非共有電子対 1 組</div><p>電子領域が 5 つなので、電子領域の配置は三方両錐形です。非共有電子対はエクアトリアル位 (equatorial) に入ります。すると 4 個の原子はシーソー形に並びます。</p>",
      misconception: {
        // EN (option A): This counts only the four bonds. Sulfur has 6 valence electrons and uses 4, so one lone pair is left. That makes five domains.
        "0": "これは 4 本の結合だけを数えています。硫黄の価電子は 6 個で、4 個を使うので、非共有電子対が 1 組残ります。だから領域は 5 つです。",
        // EN (option B): The electron domain geometry is right. But the molecular geometry describes the atoms only, and one of the five domains is a lone pair.
        "1": "電子領域の配置は合っています。しかし、分子の形は原子の並び方だけを表します。5 つの領域のうち 1 つは非共有電子対です。",
        // EN (option D): Square planar needs six domains with two lone pairs. Sulfur in SF<sub>4</sub> has only one lone pair: 6 − 4 = 2 electrons.
        "3": "平面正方形になるには、領域が 6 つで、非共有電子対が 2 組必要です。SF<sub>4</sub> の硫黄には、非共有電子対が 1 組しかありません：6 − 4 = 2 個の電子。",
      },
    },

    // ── s2-2h-q014 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q014": {
      // EN: <p>What are the molecular geometry and the F–Xe–F bond angle between neighbouring bonds in <span class="chem">XeF4</span>?</p>
      stem: "<p><span class=\"chem\">XeF4</span> の分子の形と、隣り合う結合の間の F–Xe–F 結合角は、どれですか。</p>",
      options: [
        // EN: Tetrahedral; 109.5°
        "正四面体形、109.5°",
        // EN: Square planar; 90°
        "平面正方形、90°",
        // EN: Seesaw; less than 90° and less than 120°
        "シーソー形、90° 未満と 120° 未満",
        // EN: Octahedral; 90°
        "正八面体形、90°",
      ],
      hints: [
        // EN: Xenon is in group 18: 8 valence electrons.
        "キセノンは 18 族で、価電子は 8 個です。",
        // EN: The two lone pairs go opposite each other, 180° apart.
        "2 組の非共有電子対は、互いに反対側、180° 離れた位置に入ります。",
      ],
      // EN: <div class="worked__math">Xe: 8 valence electrons; 4 used in bonds; 4 left = 2 lone pairs</div><p>Six domains: octahedral electron domain geometry. The two lone pairs are opposite each other. The four fluorine atoms lie in one plane: square planar, 90°.</p>
      solution: "<div class=\"worked__math\">Xe：価電子 8 個；結合に 4 個使う；残り 4 個 = 非共有電子対 2 組</div><p>領域が 6 つなので、電子領域の配置は正八面体形です。2 組の非共有電子対は互いに反対側にあります。4 個のフッ素原子は 1 つの平面上に並びます。平面正方形で、90° です。</p>",
      misconception: {
        // EN (option A): This counts only the four bonds. Xenon has 8 valence electrons and uses 4, so two lone pairs are left: six domains in total.
        "0": "これは 4 本の結合だけを数えています。キセノンの価電子は 8 個で、4 個を使うので、非共有電子対が 2 組残ります。領域は合計 6 つです。",
        // EN (option C): Seesaw is for five domains with one lone pair. Xenon here has six domains: four bonds and two lone pairs.
        "2": "シーソー形は、領域が 5 つで非共有電子対が 1 組のときの形です。このキセノンには領域が 6 つあります。結合 4 本と非共有電子対 2 組です。",
        // EN (option D): Octahedral is the electron domain geometry. The molecular geometry describes only the atoms, and two of the six positions hold lone pairs.
        "3": "正八面体形は電子領域の配置です。分子の形は原子の並び方だけを表します。6 つの位置のうち 2 つには非共有電子対が入っています。",
      },
    },

    // ── s2-2h-q015 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q015": {
      // EN: <p>What is the molecular geometry of <span class="chem">BrF3</span>?</p>
      stem: "<p><span class=\"chem\">BrF3</span> の分子の形は、どれですか。</p>",
      options: [
        // EN: Trigonal planar
        "平面三角形",
        // EN: Trigonal pyramidal
        "三角錐形",
        // EN: T-shaped
        "T 字形",
        // EN: Trigonal bipyramidal
        "三方両錐形",
      ],
      hints: [
        // EN: Bromine is in group 17.
        "臭素は 17 族です。",
        // EN: Three bonding domains + two lone pairs = five domains. The lone pairs are equatorial.
        "結合の領域 3 つ + 非共有電子対 2 組 = 5 領域。非共有電子対はエクアトリアル位に入ります。",
      ],
      // EN: <div class="worked__math">Br: 7 valence electrons; 3 used in bonds; 4 left = 2 lone pairs</div><p>Five domains: trigonal bipyramidal arrangement. Both lone pairs are equatorial. The three fluorine atoms make a T shape, with bond angles a little less than 90°.</p>
      solution: "<div class=\"worked__math\">Br：価電子 7 個；結合に 3 個使う；残り 4 個 = 非共有電子対 2 組</div><p>領域が 5 つなので、配置は三方両錐形です。非共有電子対は 2 組ともエクアトリアル位に入ります。3 個のフッ素原子は T 字形に並び、結合角は 90° より少し小さくなります。</p>",
      misconception: {
        // EN (option A): Trigonal planar would mean no lone pairs on bromine. Bromine has 7 valence electrons and uses only 3 in bonds.
        "0": "平面三角形なら、臭素に非共有電子対がないことになります。臭素の価電子は 7 個で、結合に使うのは 3 個だけです。",
        // EN (option B): Trigonal pyramidal is for four domains with one lone pair. Bromine here has two lone pairs: (7 − 3) ÷ 2 = 2.
        "1": "三角錐形は、領域が 4 つで非共有電子対が 1 組のときの形です。この臭素には非共有電子対が 2 組あります：(7 − 3) ÷ 2 = 2。",
        // EN (option D): That is the electron domain geometry (five domains). Two of the five domains are lone pairs, so the atoms make a different shape.
        "3": "それは電子領域の配置です（領域が 5 つ）。5 つの領域のうち 2 つは非共有電子対なので、原子の並び方は別の形になります。",
      },
    },

    // ── s2-2h-q016 · numeric · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q016": {
      // EN: <p>Deduce the Cl–I–Cl bond angle in the ion <span class="chem">ICl2-</span>. Iodine is the central atom.</p>
      stem: "<p>イオン <span class=\"chem\">ICl2-</span> の Cl–I–Cl 結合角を導きなさい (deduce)。中心原子はヨウ素です。</p>",
      hints: [
        // EN: Count the electrons around iodine: 7 of its own, 1 from each chlorine, and 1 for the negative charge.
        "ヨウ素のまわりの電子を数えましょう。ヨウ素自身の 7 個、塩素 1 個につき 1 個、負の電荷の分 1 個です。",
        // EN: Five pairs: two bonding pairs and three lone pairs. The lone pairs take the three equatorial positions.
        "電子対は 5 組です。共有電子対が 2 組、非共有電子対が 3 組です。非共有電子対は、3 つのエクアトリアル位に入ります。",
      ],
      // EN: <div class="worked__math">Electrons around I = 7 + 2 + 1 = 10 = 5 pairs</div><div class="worked__math">2 bonding pairs + 3 lone pairs</div><p>Five domains are arranged in a trigonal bipyramid. The three lone pairs are equatorial. The two chlorine atoms are in the axial positions, so the ion is linear: <b>180°</b>.</p>
      solution: "<div class=\"worked__math\">I のまわりの電子 = 7 + 2 + 1 = 10 = 5 組</div><div class=\"worked__math\">共有電子対 2 組 + 非共有電子対 3 組</div><p>5 つの領域は三方両錐の形に並びます。3 組の非共有電子対はエクアトリアル位に入ります。2 個の塩素原子はアキシアル位 (axial) にあるので、イオンは直線形です：<b>180°</b>。</p>",
    },

    // ── s2-2h-q017 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q017": {
      // EN: <p>What is the molecular geometry of <span class="chem">IF5</span>?</p>
      stem: "<p><span class=\"chem\">IF5</span> の分子の形は、どれですか。</p>",
      options: [
        // EN: Trigonal bipyramidal
        "三方両錐形",
        // EN: Square pyramidal
        "四角錐形",
        // EN: Octahedral
        "正八面体形",
        // EN: Seesaw
        "シーソー形",
      ],
      hints: [
        // EN: Iodine is in group 17.
        "ヨウ素は 17 族です。",
        // EN: Five bonding domains + one lone pair = six domains.
        "結合の領域 5 つ + 非共有電子対 1 組 = 6 領域。",
      ],
      // EN: <div class="worked__math">I: 7 valence electrons; 5 used in bonds; 2 left = 1 lone pair</div><p>Six domains: octahedral arrangement. One position holds the lone pair. The five fluorine atoms make a square pyramid.</p>
      solution: "<div class=\"worked__math\">I：価電子 7 個；結合に 5 個使う；残り 2 個 = 非共有電子対 1 組</div><p>領域が 6 つなので、配置は正八面体形です。1 つの位置に非共有電子対が入ります。5 個のフッ素原子は四角錐の形に並びます。</p>",
      misconception: {
        // EN (option A): This counts five bonds and forgets the lone pair. Iodine has 7 valence electrons and uses 5: one lone pair is left, so there are six domains.
        "0": "これは結合 5 本だけを数えて、非共有電子対を忘れています。ヨウ素の価電子は 7 個で、5 個を使います。非共有電子対が 1 組残るので、領域は 6 つです。",
        // EN (option C): Octahedral is the electron domain geometry. One of the six domains is a lone pair, so the atoms do not make an octahedron.
        "2": "正八面体形は電子領域の配置です。6 つの領域のうち 1 つは非共有電子対なので、原子は正八面体の形には並びません。",
        // EN (option D): Seesaw is for five domains with one lone pair (four bonds). Here there are five bonds and one lone pair.
        "3": "シーソー形は、領域が 5 つで非共有電子対が 1 組（結合 4 本）のときの形です。ここでは結合が 5 本、非共有電子対が 1 組です。",
      },
    },

    // ── s2-2h-q018 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q018": {
      // EN: <p>Which molecule is polar?</p>
      stem: "<p>極性分子はどれですか。</p>",
      options: [
        // EN: <span class="chem">PCl5</span>
        "<span class=\"chem\">PCl5</span>",
        // EN: <span class="chem">SF4</span>
        "<span class=\"chem\">SF4</span>",
        // EN: <span class="chem">XeF4</span>
        "<span class=\"chem\">XeF4</span>",
        // EN: <span class="chem">SF6</span>
        "<span class=\"chem\">SF6</span>",
      ],
      hints: [
        // EN: All four molecules have polar bonds. The question is whether the bond dipoles cancel.
        "4 つの分子は、どれも極性のある結合をもっています。問題は、結合の双極子が打ち消し合うかどうかです。",
        // EN: Find the shape of each molecule. Which one is not symmetrical?
        "それぞれの分子の形を求めましょう。対称でないのはどれですか。",
      ],
      // EN: <p><span class="chem">SF4</span> has a lone pair on sulfur and a seesaw shape. The S–F bond dipoles do not cancel, so the molecule has a net dipole. The other three shapes are symmetrical, so their bond dipoles cancel.</p>
      solution: "<p><span class=\"chem\">SF4</span> は硫黄に非共有電子対があり、シーソー形です。S–F 結合の双極子は打ち消し合わないので、分子全体の双極子 (net dipole) が残ります。ほかの 3 つは形が対称なので、結合の双極子が打ち消し合います。</p>",
      misconception: {
        // EN (option A): PCl<sub>5</sub> is trigonal bipyramidal with five identical bonds and no lone pairs. The bond dipoles cancel.
        "0": "PCl<sub>5</sub> は三方両錐形で、5 本の結合はすべて同じ、非共有電子対はありません。結合の双極子は打ち消し合います。",
        // EN (option C): XeF<sub>4</sub> is square planar. The four Xe–F bond dipoles point in opposite pairs and cancel.
        "2": "XeF<sub>4</sub> は平面正方形です。4 本の Xe–F 結合の双極子は、反対向きの組どうしで打ち消し合います。",
        // EN (option D): SF<sub>6</sub> is octahedral. The six S–F bond dipoles cancel in opposite pairs.
        "3": "SF<sub>6</sub> は正八面体形です。6 本の S–F 結合の双極子は、反対向きの組どうしで打ち消し合います。",
      },
    },

    // ── s2-2h-q019 · mcq · challenge · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q019": {
      // EN: <p>Iodine forms the ions <span class="chem">IF4+</span> and <span class="chem">IF4-</span>. What are their molecular geometries?</p>
      stem: "<p>ヨウ素は <span class=\"chem\">IF4+</span> と <span class=\"chem\">IF4-</span> というイオンを作ります。それぞれの分子の形は、どれですか。</p>",
      options: [
        // EN: <span class="chem">IF4+</span>: seesaw. <span class="chem">IF4-</span>: square planar.
        "<span class=\"chem\">IF4+</span>：シーソー形。<span class=\"chem\">IF4-</span>：平面正方形。",
        // EN: <span class="chem">IF4+</span>: tetrahedral. <span class="chem">IF4-</span>: tetrahedral.
        "<span class=\"chem\">IF4+</span>：正四面体形。<span class=\"chem\">IF4-</span>：正四面体形。",
        // EN: <span class="chem">IF4+</span>: square planar. <span class="chem">IF4-</span>: seesaw.
        "<span class=\"chem\">IF4+</span>：平面正方形。<span class=\"chem\">IF4-</span>：シーソー形。",
        // EN: <span class="chem">IF4+</span>: seesaw. <span class="chem">IF4-</span>: seesaw.
        "<span class=\"chem\">IF4+</span>：シーソー形。<span class=\"chem\">IF4-</span>：シーソー形。",
      ],
      hints: [
        // EN: Electrons around iodine = 7 + 4 (one from each F), then subtract 1 for a + charge or add 1 for a − charge.
        "ヨウ素のまわりの電子 = 7 + 4（F 1 個につき 1 個）。そこから、+ の電荷なら 1 を引き、− の電荷なら 1 を足します。",
        // EN: Halve the total to get the number of electron domains. Four are bonding; the rest are lone pairs.
        "合計を半分にすると、電子領域の数になります。4 つは結合の領域で、残りが非共有電子対です。",
      ],
      // EN: <div class="worked__math">IF<sub>4</sub><sup>+</sup>: 7 + 4 − 1 = 10 electrons = 5 domains = 4 bonds + 1 lone pair</div><div class="worked__math">IF<sub>4</sub><sup>−</sup>: 7 + 4 + 1 = 12 electrons = 6 domains = 4 bonds + 2 lone pairs</div><p>Five domains with one lone pair: seesaw. Six domains with two lone pairs: square planar.</p>
      solution: "<div class=\"worked__math\">IF<sub>4</sub><sup>+</sup>：7 + 4 − 1 = 10 個の電子 = 5 領域 = 結合 4 本 + 非共有電子対 1 組</div><div class=\"worked__math\">IF<sub>4</sub><sup>−</sup>：7 + 4 + 1 = 12 個の電子 = 6 領域 = 結合 4 本 + 非共有電子対 2 組</div><p>領域が 5 つで非共有電子対が 1 組：シーソー形。領域が 6 つで非共有電子対が 2 組：平面正方形。</p>",
      misconception: {
        // EN (option B): This counts only the four bonds. Iodine has lone pairs in both ions. Count all the electrons around iodine, including the charge.
        "1": "これは 4 本の結合だけを数えています。どちらのイオンでも、ヨウ素には非共有電子対があります。電荷もふくめて、ヨウ素のまわりの電子をすべて数えましょう。",
        // EN (option C): The charges are the wrong way round. A positive charge means one electron fewer; a negative charge means one electron more.
        "2": "電荷の扱いが逆です。正の電荷は電子が 1 個少ないこと、負の電荷は電子が 1 個多いことを表します。",
        // EN (option D): This ignores the charge. The two ions have different numbers of electrons around iodine, so they have different numbers of lone pairs.
        "3": "これは電荷を無視しています。2 つのイオンでは、ヨウ素のまわりの電子の数が違うので、非共有電子対の数も違います。",
      },
    },

    // ── s2-2h-q020 · short · challenge · AHL · Structure 2.2.13 · 4 marks
    "s2-2h-q020": {
      // EN: <p>Solid phosphorus(V) chloride contains the ions <span class="chem">PCl4+</span> and <span class="chem">PCl6-</span>.</p><p>Deduce the molecular geometry and the Cl–P–Cl bond angle (between neighbouring bonds) of each ion. Show how you counted the electron domains.</p>
      stem: "<p>固体の塩化リン(V) には、<span class=\"chem\">PCl4+</span> と <span class=\"chem\">PCl6-</span> というイオンがふくまれています。</p><p>それぞれのイオンの分子の形と、（隣り合う結合の間の）Cl–P–Cl 結合角を導きなさい (deduce)。電子領域をどう数えたかも示しましょう。</p>",
      hints: [
        // EN: Electrons around P = 5 (its own) + 1 from each Cl, then adjust for the charge.
        "P のまわりの電子 = 5（P 自身）+ Cl 1 個につき 1。そのあと、電荷の分を調整します。",
        // EN: Divide by 2 to get the number of domains. Compare with the number of bonds to find the lone pairs.
        "2 で割ると、領域の数になります。結合の数とくらべて、非共有電子対を求めましょう。",
      ],
      // EN: <div class="worked__math">PCl<sub>4</sub><sup>+</sup>: 5 + 4 − 1 = 8 electrons = 4 domains (4 bonds, 0 lone pairs)</div><div class="worked__math">PCl<sub>6</sub><sup>−</sup>: 5 + 6 + 1 = 12 electrons = 6 domains (6 bonds, 0 lone pairs)</div><p>Four bonding domains: tetrahedral, 109.5°. Six bonding domains: octahedral, 90°. Only the anion has an expanded octet.</p>
      solution: "<div class=\"worked__math\">PCl<sub>4</sub><sup>+</sup>：5 + 4 − 1 = 8 個の電子 = 4 領域（結合 4 本、非共有電子対 0 組）</div><div class=\"worked__math\">PCl<sub>6</sub><sup>−</sup>：5 + 6 + 1 = 12 個の電子 = 6 領域（結合 6 本、非共有電子対 0 組）</div><p>結合の領域が 4 つ：正四面体形、109.5°。結合の領域が 6 つ：正八面体形、90°。拡張オクテットをもつのは陰イオンだけです。</p>",
      // EN: <p><span class="chem">PCl4+</span>: electrons around P = 5 + 4 − 1 = 8, so four electron domains, all bonding. Tetrahedral, 109.5°.</p><p><span class="chem">PCl6-</span>: electrons around P = 5 + 6 + 1 = 12, so six electron domains, all bonding. Octahedral, 90°.</p>
      answer: "<p><span class=\"chem\">PCl4+</span>：P のまわりの電子 = 5 + 4 − 1 = 8 個。だから電子領域は 4 つで、すべて結合の領域。正四面体形、109.5°。</p><p><span class=\"chem\">PCl6-</span>：P のまわりの電子 = 5 + 6 + 1 = 12 個。だから電子領域は 6 つで、すべて結合の領域。正八面体形、90°。</p>",
      markscheme: [
        // EN: PCl<sub>4</sub><sup>+</sup>: four electron domains / four bonding pairs and no lone pairs on P.
        "PCl<sub>4</sub><sup>+</sup>：電子領域が 4 つ / P に共有電子対が 4 組あり、非共有電子対はない。",
        // EN: PCl<sub>4</sub><sup>+</sup>: tetrahedral AND 109.5°.
        "PCl<sub>4</sub><sup>+</sup>：正四面体形、かつ 109.5°。",
        // EN: PCl<sub>6</sub><sup>−</sup>: six electron domains / six bonding pairs and no lone pairs on P.
        "PCl<sub>6</sub><sup>−</sup>：電子領域が 6 つ / P に共有電子対が 6 組あり、非共有電子対はない。",
        // EN: PCl<sub>6</sub><sup>−</sup>: octahedral AND 90°.
        "PCl<sub>6</sub><sup>−</sup>：正八面体形、かつ 90°。",
      ],
    },

    // ── s2-2h-q021 · numeric · foundation · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q021": {
      // EN: <p>In the Lewis formula of the ammonium ion, <span class="chem">NH4+</span>, nitrogen has four single bonds and no lone pairs.</p><p>Calculate the formal charge on the nitrogen atom. Include the sign.</p>
      stem: "<p>アンモニウムイオン <span class=\"chem\">NH4+</span> のルイス構造式では、窒素に単結合が 4 本あり、非共有電子対はありません。</p><p>窒素原子の形式電荷を計算しなさい (calculate)。符号も付けましょう。</p>",
      hints: [
        // EN: FC = V − N − ½B. V is the number of valence electrons of a free nitrogen atom.
        "FC = V − N − ½B。V は、結合していない窒素原子の価電子の数です。",
        // EN: N = 0 (no lone pairs). B = 8 (four bonds, two electrons each).
        "N = 0（非共有電子対なし）。B = 8（結合 4 本、それぞれ電子 2 個）。",
      ],
      // EN: <div class="worked__math">V = 5 (group 15), N = 0, B = 8</div><div class="worked__math">FC = 5 − 0 − ½(8) = <b>+1</b></div><p>Each hydrogen has FC = 1 − 0 − ½(2) = 0. The total, +1, equals the charge on the ion.</p>
      solution: "<div class=\"worked__math\">V = 5（15 族）、N = 0、B = 8</div><div class=\"worked__math\">FC = 5 − 0 − ½(8) = <b>+1</b></div><p>水素はどれも FC = 1 − 0 − ½(2) = 0 です。合計は +1 で、イオンの電荷と同じです。</p>",
    },

    // ── s2-2h-q022 · numeric · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q022": {
      // EN: <p>One Lewis formula of the chlorate ion, <span class="chem">ClO3-</span>, has chlorine joined to three oxygen atoms by single bonds. Chlorine has one lone pair. Each oxygen has three lone pairs.</p><p>Calculate the formal charge on the chlorine atom in this formula. Include the sign.</p>
      stem: "<p>塩素酸イオン <span class=\"chem\">ClO3-</span> のルイス構造式の 1 つでは、塩素が 3 個の酸素原子と単結合でつながっています。塩素には非共有電子対が 1 組あります。酸素にはそれぞれ非共有電子対が 3 組あります。</p><p>この構造式の塩素原子の形式電荷を計算しなさい (calculate)。符号も付けましょう。</p>",
      hints: [
        // EN: FC = V − N − ½B. Chlorine is in group 17.
        "FC = V − N − ½B。塩素は 17 族です。",
        // EN: N counts electrons, not pairs: one lone pair is 2 electrons. B = 6 (three single bonds).
        "N は電子対の数ではなく、電子の数です。非共有電子対 1 組は電子 2 個です。B = 6（単結合 3 本）。",
      ],
      // EN: <div class="worked__math">V = 7, N = 2, B = 6</div><div class="worked__math">FC(Cl) = 7 − 2 − ½(6) = <b>+2</b></div><div class="worked__math">FC(each O) = 6 − 6 − ½(2) = −1</div><p>Check: +2 + 3(−1) = −1, the charge on the ion. Do not confuse this with the oxidation state of chlorine, which is +5.</p>
      solution: "<div class=\"worked__math\">V = 7、N = 2、B = 6</div><div class=\"worked__math\">FC(Cl) = 7 − 2 − ½(6) = <b>+2</b></div><div class=\"worked__math\">FC(各 O) = 6 − 6 − ½(2) = −1</div><p>確認：+2 + 3(−1) = −1 で、イオンの電荷と同じです。塩素の酸化数 +5 と混同しないようにしましょう。</p>",
    },

    // ── s2-2h-q023 · mcq · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q023": {
      // EN: <p>Three Lewis formulas can be drawn for dinitrogen monoxide, <span class="chem">N2O</span>, with the atoms in the order N, N, O. The lone pairs on each atom are given in the same order.</p><ul><li>I: N≡N–O, with 1, 0 and 3 lone pairs</li><li>II: N=N=O, with 2, 0 and 2 lone pairs</li><li>III: N–N≡O, with 3, 0 and 1 lone pairs</li></ul><p>Which is the preferred Lewis formula? (Electronegativity: N 3.0, O 3.4.)</p>
      stem: "<p>一酸化二窒素 <span class=\"chem\">N2O</span> には、原子が N、N、O の順に並んだルイス構造式が 3 つ描けます。各原子の非共有電子対の数を、同じ順に示します。</p><ul><li>I：N≡N–O、非共有電子対は 1、0、3 組</li><li>II：N=N=O、非共有電子対は 2、0、2 組</li><li>III：N–N≡O、非共有電子対は 3、0、1 組</li></ul><p>より適切なルイス構造式はどれですか。（電気陰性度：N 3.0、O 3.4）</p>",
      options: [
        // EN: I
        "I",
        // EN: II
        "II",
        // EN: III
        "III",
        // EN: I and II are equally preferred, because their formal charges are the same size.
        "I と II は同じくらい適切である。形式電荷の大きさが同じだから。",
      ],
      hints: [
        // EN: Calculate FC = V − N − ½B for all three atoms in each formula.
        "それぞれの構造式の 3 つの原子すべてについて、FC = V − N − ½B を計算しましょう。",
        // EN: First reject the formula with the largest charges. Then look at which atom carries the negative charge.
        "まず、電荷がいちばん大きい構造式を外します。次に、負の電荷がどの原子にあるかを見ます。",
      ],
      // EN: <div class="worked__math">I: N 5 − 2 − 3 = 0; N 5 − 0 − 4 = +1; O 6 − 6 − 1 = −1</div><div class="worked__math">II: N 5 − 4 − 2 = −1; N +1; O 6 − 4 − 2 = 0</div><div class="worked__math">III: N 5 − 6 − 1 = −2; N +1; O 6 − 2 − 3 = +1</div><p>III has the largest charges. I and II both have one +1 and one −1, but I puts the −1 on oxygen, the more electronegative atom. I is preferred.</p>
      solution: "<div class=\"worked__math\">I：N 5 − 2 − 3 = 0；N 5 − 0 − 4 = +1；O 6 − 6 − 1 = −1</div><div class=\"worked__math\">II：N 5 − 4 − 2 = −1；N +1；O 6 − 4 − 2 = 0</div><div class=\"worked__math\">III：N 5 − 6 − 1 = −2；N +1；O 6 − 2 − 3 = +1</div><p>III は電荷がいちばん大きくなっています。I と II にはどちらも +1 と −1 が 1 つずつありますが、I では −1 が、電気陰性度の大きいほうの酸素にあります。I がより適切です。</p>",
      misconception: {
        // EN (option B): II has formal charges −1, +1, 0. The negative charge sits on nitrogen. Oxygen is more electronegative, so the negative charge is better placed on oxygen.
        "1": "II の形式電荷は −1、+1、0 です。負の電荷は窒素にあります。酸素のほうが電気陰性度が大きいので、負の電荷は酸素にあるほうがよい構造式です。",
        // EN (option C): III has formal charges −2, +1, +1. These are the largest charges of the three, and oxygen is positive. Reject it first.
        "2": "III の形式電荷は −2、+1、+1 です。3 つの中で電荷がいちばん大きく、酸素が正になっています。最初に外しましょう。",
        // EN (option D): The sizes are the same, so use the second rule: a negative formal charge should be on the more electronegative atom. That separates I from II.
        "3": "大きさは同じなので、2 つ目の規則を使います。負の形式電荷は、電気陰性度の大きいほうの原子にあるべきです。これで I と II を区別できます。",
      },
    },

    // ── s2-2h-q024 · mcq · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q024": {
      // EN: <p>Which assumption is made when the formal charge of an atom is calculated?</p>
      stem: "<p>原子の形式電荷を計算するとき、どのような仮定をしていますか。</p>",
      options: [
        // EN: The electrons in each bond are shared equally between the two bonded atoms.
        "それぞれの結合の電子は、結合している 2 つの原子に等しく共有されている。",
        // EN: The electrons in each bond belong completely to the more electronegative atom.
        "それぞれの結合の電子は、すべて電気陰性度の大きいほうの原子のものである。",
        // EN: The lone pairs are shared equally among all the atoms in the species.
        "非共有電子対は、化学種のすべての原子に等しく共有されている。",
        // EN: Every atom in the species has an octet of electrons.
        "化学種のどの原子も、電子のオクテットをもっている。",
      ],
      hints: [
        // EN: Look at the formula: FC = V − N − ½B. Why is B halved?
        "式を見ましょう：FC = V − N − ½B。なぜ B を半分にするのでしょうか。",
      ],
      // EN: <p>The ½ in front of B gives each atom half of the electrons in its bonds. So formal charge treats every bond as perfectly covalent (equal sharing). Oxidation state makes the opposite assumption: every bond is treated as ionic, with the electrons given to the more electronegative atom.</p>
      solution: "<p>B の前の ½ は、結合の電子の半分をそれぞれの原子に割り当てるという意味です。つまり形式電荷は、すべての結合を完全な共有結合（等しい共有）として扱います。酸化数は逆の仮定をします。すべての結合をイオン結合として扱い、電子を電気陰性度の大きいほうの原子に与えます。</p>",
      misconception: {
        // EN (option B): That is the assumption for oxidation states. Formal charge ignores electronegativity and splits each bond evenly.
        "1": "それは酸化数の仮定です。形式電荷は電気陰性度を考えず、どの結合も半分ずつに分けます。",
        // EN (option C): Lone pairs belong completely to the atom they are drawn on. That is why N is subtracted in full.
        "2": "非共有電子対は、それが描かれている原子だけのものです。だから N はそのまま全部引きます。",
        // EN (option D): Formal charge can be calculated for any Lewis formula, including ones with expanded octets or fewer than eight electrons.
        "3": "形式電荷は、どんなルイス構造式でも計算できます。拡張オクテットの構造式や、電子が 8 個より少ない構造式でも同じです。",
      },
    },

    // ── s2-2h-q025 · mcq · challenge · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q025": {
      // EN: <p>Lewis formulas of the phosphate ion, <span class="chem">PO4^3-</span>, can be drawn with different numbers of P=O double bonds. Every oxygen atom has an octet in each formula. Phosphorus has no lone pairs.</p><p>Which formula is preferred, using formal charge? (Electronegativity: P 2.2, O 3.4.)</p>
      stem: "<p>リン酸イオン <span class=\"chem\">PO4^3-</span> のルイス構造式は、P=O 二重結合の数を変えて何通りか描けます。どの構造式でも、酸素原子はすべてオクテットです。リンに非共有電子対はありません。</p><p>形式電荷で考えると、より適切な構造式はどれですか。（電気陰性度：P 2.2、O 3.4）</p>",
      options: [
        // EN: No P=O bonds (four P–O single bonds)
        "P=O 結合なし（P–O 単結合が 4 本）",
        // EN: One P=O bond and three P–O bonds
        "P=O 結合が 1 本と、P–O 結合が 3 本",
        // EN: Two P=O bonds and two P–O bonds
        "P=O 結合が 2 本と、P–O 結合が 2 本",
        // EN: Four P=O bonds
        "P=O 結合が 4 本",
      ],
      hints: [
        // EN: A singly bonded O with three lone pairs has FC = −1. A doubly bonded O with two lone pairs has FC = 0.
        "単結合で、非共有電子対が 3 組ある O は FC = −1 です。二重結合で、非共有電子対が 2 組ある O は FC = 0 です。",
        // EN: For P: FC = 5 − 0 − ½B. Work it out for 4, 5, 6 and 8 bonding pairs.
        "P については FC = 5 − 0 − ½B です。共有電子対が 4、5、6、8 組の場合をそれぞれ計算しましょう。",
      ],
      // EN: <div class="worked__math">No P=O: P = 5 − ½(8) = +1; O: four at −1</div><div class="worked__math">One P=O: P = 5 − ½(10) = 0; O: one at 0, three at −1</div><div class="worked__math">Two P=O: P = 5 − ½(12) = −1; O: two at 0, two at −1</div><div class="worked__math">Four P=O: P = 5 − ½(16) = −3; O: four at 0</div><p>Every set adds up to −3. The formula with one P=O has the formal charges closest to zero, and all its negative charges are on oxygen, the more electronegative atom.</p>
      solution: "<div class=\"worked__math\">P=O なし：P = 5 − ½(8) = +1；O：4 個とも −1</div><div class=\"worked__math\">P=O 1 本：P = 5 − ½(10) = 0；O：1 個が 0、3 個が −1</div><div class=\"worked__math\">P=O 2 本：P = 5 − ½(12) = −1；O：2 個が 0、2 個が −1</div><div class=\"worked__math\">P=O 4 本：P = 5 − ½(16) = −3；O：4 個とも 0</div><p>どの組も合計は −3 です。P=O が 1 本の構造式は、形式電荷がいちばん 0 に近く、負の電荷がすべて、電気陰性度の大きいほうの酸素にあります。</p>",
      misconception: {
        // EN (option A): This gives +1 on P and −1 on all four O atoms: five atoms carry a charge. Another formula has fewer charged atoms.
        "0": "この場合、P が +1、4 個の O がすべて −1 になり、5 個の原子が電荷をもちます。電荷をもつ原子がもっと少ない構造式があります。",
        // EN (option C): This gives −1 on P and −1 on two O atoms. A negative formal charge on phosphorus is not favoured, because oxygen is more electronegative.
        "2": "この場合、P が −1、2 個の O が −1 になります。酸素のほうが電気陰性度が大きいので、リンに負の形式電荷があるのは好ましくありません。",
        // EN (option D): This gives −3 on phosphorus and 0 on every oxygen. A large negative charge on the less electronegative atom is the worst choice.
        "3": "この場合、リンが −3、酸素がすべて 0 になります。電気陰性度の小さいほうの原子に大きな負の電荷があるのは、いちばん悪い選び方です。",
      },
    },

    // ── s2-2h-q026 · short · challenge · AHL · Structure 2.2.14 · 3 marks
    "s2-2h-q026": {
      // EN: <p>Two Lewis formulas can be drawn for the sulfate ion, <span class="chem">SO4^2-</span>. In both, sulfur has no lone pairs and every oxygen has an octet.</p><ul><li>A: four S–O single bonds</li><li>B: two S=O double bonds and two S–O single bonds</li></ul><p>Calculate the formal charge on sulfur in each formula. Then state which formula is preferred, with a reason.</p>
      stem: "<p>硫酸イオン <span class=\"chem\">SO4^2-</span> には、ルイス構造式が 2 つ描けます。どちらでも、硫黄に非共有電子対はなく、酸素はすべてオクテットです。</p><ul><li>A：S–O 単結合が 4 本</li><li>B：S=O 二重結合が 2 本と、S–O 単結合が 2 本</li></ul><p>それぞれの構造式の硫黄の形式電荷を計算しなさい (calculate)。次に、どちらの構造式がより適切かを、理由を付けて述べなさい (state)。</p>",
      hints: [
        // EN: FC = V − N − ½B, with V = 6 for sulfur.
        "FC = V − N − ½B。硫黄では V = 6 です。",
        // EN: B = 8 in formula A. In formula B, count 4 electrons for each double bond.
        "構造式 A では B = 8 です。構造式 B では、二重結合 1 本につき電子 4 個と数えます。",
      ],
      // EN: <div class="worked__math">A: FC(S) = 6 − 0 − ½(8) = +2; each O = 6 − 6 − ½(2) = −1</div><div class="worked__math">B: FC(S) = 6 − 0 − ½(12) = 0; O (double) = 6 − 4 − ½(4) = 0; O (single) = −1</div><p>Both add up to −2. B has charges closest to zero, so formal charge prefers B. In B sulfur has an expanded octet (12 electrons), which is possible for a period 3 element.</p>
      solution: "<div class=\"worked__math\">A：FC(S) = 6 − 0 − ½(8) = +2；各 O = 6 − 6 − ½(2) = −1</div><div class=\"worked__math\">B：FC(S) = 6 − 0 − ½(12) = 0；O（二重結合）= 6 − 4 − ½(4) = 0；O（単結合）= −1</div><p>どちらも合計は −2 です。B のほうが電荷が 0 に近いので、形式電荷で選ぶと B になります。B の硫黄は拡張オクテット（電子 12 個）で、これは第 3 周期の元素なら可能です。</p>",
      // EN: <p>A: FC(S) = 6 − 0 − ½(8) = +2. B: FC(S) = 6 − 0 − ½(12) = 0. B is preferred, because its formal charges are closest to zero (sulfur is 0 and only two oxygen atoms are −1).</p>
      answer: "<p>A：FC(S) = 6 − 0 − ½(8) = +2。B：FC(S) = 6 − 0 − ½(12) = 0。B がより適切である。形式電荷がいちばん 0 に近いから（硫黄は 0 で、−1 の酸素原子は 2 個だけ）。</p>",
      markscheme: [
        // EN: A: formal charge on S = +2.
        "A：S の形式電荷 = +2。",
        // EN: B: formal charge on S = 0.
        "B：S の形式電荷 = 0。",
        // EN: B is preferred because its formal charges are closest to zero / fewer atoms have a non-zero formal charge.
        "B がより適切である。形式電荷がいちばん 0 に近いから / 形式電荷が 0 でない原子が少ないから。",
      ],
    },

    // ── s2-2h-q027 · numeric · foundation · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q027": {
      // EN: <p>How many sigma (σ) bonds are there in one molecule of ethene, <span class="chem">CH2=CH2</span>?</p>
      stem: "<p>エテン <span class=\"chem\">CH2=CH2</span> の 1 分子には、シグマ (σ) 結合が何本ありますか。</p>",
      hints: [
        // EN: Every single bond is one σ bond. Do not forget the C–H bonds.
        "単結合はどれも σ 結合 1 本です。C–H 結合を忘れないようにしましょう。",
        // EN: A double bond is one σ bond and one π bond.
        "二重結合は、σ 結合 1 本と π 結合 1 本です。",
      ],
      // EN: <div class="worked__math">C–H bonds: 4 σ</div><div class="worked__math">C=C bond: 1 σ (and 1 π)</div><div class="worked__math">Total = 4 + 1 = <b>5 σ bonds</b></div>
      solution: "<div class=\"worked__math\">C–H 結合：4 σ</div><div class=\"worked__math\">C=C 結合：1 σ（と 1 π）</div><div class=\"worked__math\">合計 = 4 + 1 = <b>σ 結合 5 本</b></div>",
      // EN: σ bonds
      unit: "本の σ 結合",
    },

    // ── s2-2h-q028 · mcq · foundation · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q028": {
      // EN: <p>Which describes how a sigma (σ) bond forms?</p>
      stem: "<p>シグマ (σ) 結合のでき方を正しく説明しているものはどれですか。</p>",
      options: [
        // EN: Head-on overlap of atomic orbitals; electron density is concentrated along the bond axis.
        "原子軌道が正面から重なる。電子密度は結合軸に沿って集中する。",
        // EN: Sideways overlap of p orbitals; electron density is concentrated above and below the bond axis.
        "p 軌道が横方向に重なる。電子密度は結合軸の上と下に集中する。",
        // EN: Head-on overlap of atomic orbitals; electron density is concentrated above and below the bond axis.
        "原子軌道が正面から重なる。電子密度は結合軸の上と下に集中する。",
        // EN: Transfer of an electron from one atom to the other.
        "一方の原子からもう一方の原子へ、電子が移る。",
      ],
      hints: [
        // EN: The bond axis is the line joining the two nuclei.
        "結合軸は、2 つの原子核を結ぶ直線です。",
      ],
      // EN: <p>A σ bond forms when two atomic orbitals overlap head-on (end to end). The shared electrons are found mainly on the bond axis, between the nuclei.</p>
      solution: "<p>σ 結合は、2 つの原子軌道が正面から (head-on / end to end) 重なってできます。共有された電子は、おもに結合軸の上、原子核の間にあります。</p>",
      misconception: {
        // EN (option B): This describes a π bond. A π bond needs p orbitals side by side.
        "1": "これは π 結合の説明です。π 結合には、横に並んだ p 軌道が必要です。",
        // EN (option C): Head-on overlap puts the electron density between the two nuclei, on the line that joins them. Density on opposite sides of the axis belongs to a π bond.
        "2": "正面から重なると、電子密度は 2 つの原子核の間、原子核を結ぶ直線上にできます。軸の両側に電子密度があるのは π 結合です。",
        // EN (option D): Electron transfer gives ions and ionic bonding. σ and π bonds are both covalent: electrons are shared.
        "3": "電子が移ると、イオンとイオン結合ができます。σ 結合と π 結合はどちらも共有結合で、電子は共有されています。",
      },
    },

    // ── s2-2h-q029 · numeric · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q029": {
      // EN: <p>How many sigma (σ) bonds are there in one molecule of ethanoic acid, <span class="chem">CH3COOH</span>?</p>
      stem: "<p>エタン酸 <span class=\"chem\">CH3COOH</span> の 1 分子には、シグマ (σ) 結合が何本ありますか。</p>",
      hints: [
        // EN: Draw the full structural formula first: CH<sub>3</sub>–C(=O)–O–H.
        "まず完全な構造式を描きましょう：CH<sub>3</sub>–C(=O)–O–H。",
        // EN: Count one σ bond for every pair of atoms that are joined, including C–H and O–H.
        "結合している原子の組 1 つにつき、σ 結合を 1 本と数えます。C–H と O–H も入れます。",
      ],
      // EN: <div class="worked__math">C–H: 3; C–C: 1; C=O: 1 σ (and 1 π); C–O: 1; O–H: 1</div><div class="worked__math">Total = 3 + 1 + 1 + 1 + 1 = <b>7 σ bonds</b></div><p>Check: a molecule with no rings and 8 atoms has 8 − 1 = 7 σ bonds.</p>
      solution: "<div class=\"worked__math\">C–H：3；C–C：1；C=O：1 σ（と 1 π）；C–O：1；O–H：1</div><div class=\"worked__math\">合計 = 3 + 1 + 1 + 1 + 1 = <b>σ 結合 7 本</b></div><p>確認：環がなく、原子が 8 個の分子では、σ 結合は 8 − 1 = 7 本です。</p>",
      // EN: σ bonds
      unit: "本の σ 結合",
    },

    // ── s2-2h-q030 · mcq · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q030": {
      // EN: <p>How many σ bonds and π bonds are there in one molecule of propenenitrile, <span class="chem">CH2=CH–C≡N</span>?</p>
      stem: "<p>プロペンニトリル <span class=\"chem\">CH2=CH–C≡N</span> の 1 分子には、σ 結合と π 結合がそれぞれ何本ありますか。</p>",
      options: [
        // EN: 6 σ and 3 π
        "σ 6 本と π 3 本",
        // EN: 3 σ and 3 π
        "σ 3 本と π 3 本",
        // EN: 6 σ and 2 π
        "σ 6 本と π 2 本",
        // EN: 4 σ and 5 π
        "σ 4 本と π 5 本",
      ],
      hints: [
        // EN: Draw every bond, including the three C–H bonds.
        "3 本の C–H 結合もふくめて、結合をすべて描きましょう。",
        // EN: Double bond = 1 σ + 1 π. Triple bond = 1 σ + 2 π.
        "二重結合 = 1 σ + 1 π。三重結合 = 1 σ + 2 π。",
      ],
      // EN: <div class="worked__math">σ: C–H 3; C=C 1; C–C 1; C≡N 1; total 6</div><div class="worked__math">π: C=C 1; C≡N 2; total 3</div>
      solution: "<div class=\"worked__math\">σ：C–H 3；C=C 1；C–C 1；C≡N 1；合計 6</div><div class=\"worked__math\">π：C=C 1；C≡N 2；合計 3</div>",
      misconception: {
        // EN (option B): The three C–H bonds are missing. They are hidden in the condensed formula, but each one is a σ bond.
        "1": "3 本の C–H 結合が抜けています。簡略化した構造式では見えませんが、どれも σ 結合です。",
        // EN (option C): A triple bond has two π bonds, not one. So C≡N gives 2 π and C=C gives 1 π.
        "2": "三重結合の π 結合は 1 本ではなく、2 本です。だから C≡N で 2 π、C=C で 1 π です。",
        // EN (option D): This counts every line of a multiple bond as π. One bond in each double or triple bond is always a σ bond.
        "3": "これは、多重結合の線をすべて π と数えています。二重結合でも三重結合でも、そのうち 1 本は必ず σ 結合です。",
      },
    },

    // ── s2-2h-q031 · short · exam · AHL · Structure 2.2.15 · 2 marks
    "s2-2h-q031": {
      // EN: <p>The carbon–carbon double bond in ethene is made of one σ bond and one π bond.</p><p>Describe how each bond forms, and state where its electron density is concentrated.</p>
      stem: "<p>エテンの炭素–炭素二重結合は、σ 結合 1 本と π 結合 1 本でできています。</p><p>それぞれの結合がどのようにできるかを記述しなさい (describe)。また、電子密度がどこに集中するかを述べなさい (state)。</p>",
      hints: [
        // EN: One bond is made by orbitals pointing at each other. The other is made by orbitals standing side by side.
        "一方の結合は、互いに向き合った軌道からできます。もう一方は、横に並んで立った軌道からできます。",
        // EN: Say which type of orbital makes the π bond.
        "π 結合を作るのがどの種類の軌道かを書きましょう。",
      ],
      // EN: <p>σ: head-on overlap, density on the axis. π: sideways overlap of p orbitals, density on opposite sides of the axis. A diagram with labels can score these marks.</p>
      solution: "<p>σ：正面からの重なり、電子密度は軸上。π：p 軌道の横方向の重なり、電子密度は軸の両側。ラベルを付けた図でも、この点を取れます。</p>",
      // EN: <p>The σ bond forms by head-on (end-to-end) overlap of two orbitals, one from each carbon atom. Its electron density is concentrated along the bond axis, between the two nuclei. The π bond forms by sideways (lateral) overlap of two p orbitals. Its electron density is concentrated above and below the bond axis.</p>
      answer: "<p>σ 結合は、それぞれの炭素原子から 1 つずつ出た 2 つの軌道が、正面から重なってできる。電子密度は、2 つの原子核の間の結合軸に沿って集中する。π 結合は、2 つの p 軌道が横方向に重なってできる。電子密度は、結合軸の上と下に集中する。</p>",
      markscheme: [
        // EN: σ: head-on / end-to-end overlap of (atomic or hybrid) orbitals AND electron density along the bond axis / between the nuclei.
        "σ：（原子軌道または混成軌道の）正面からの重なり、かつ、電子密度は結合軸に沿う / 原子核の間にある。",
        // EN: π: sideways / lateral overlap of p orbitals AND electron density above and below (on opposite sides of) the bond axis.
        "π：p 軌道の横方向の重なり、かつ、電子密度は結合軸の上と下（両側）にある。",
      ],
    },

    // ── s2-2h-q032 · order · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q032": {
      // EN: <p>Put these molecules in order of the number of π bonds in one molecule, <strong>fewest first</strong>.</p>
      stem: "<p>次の分子を、1 分子にある π 結合の数が<strong>少ない順</strong>に並べましょう。</p>",
      options: [
        // EN: <span class="chem">CH3CH3</span> (ethane)
        "<span class=\"chem\">CH3CH3</span>（エタン）",
        // EN: <span class="chem">CH2=CH2</span> (ethene)
        "<span class=\"chem\">CH2=CH2</span>（エテン）",
        // EN: <span class="chem">H–C≡N</span> (hydrogen cyanide)
        "<span class=\"chem\">H–C≡N</span>（シアン化水素）",
        // EN: <span class="chem">CH2=CH–C≡N</span> (propenenitrile)
        "<span class=\"chem\">CH2=CH–C≡N</span>（プロペンニトリル）",
      ],
      hints: [
        // EN: Single bond: 0 π. Double bond: 1 π. Triple bond: 2 π.
        "単結合：0 π。二重結合：1 π。三重結合：2 π。",
      ],
      // EN: <p>Ethane 0 π; ethene 1 π; hydrogen cyanide 2 π (one triple bond); propenenitrile 3 π (one double bond and one triple bond).</p>
      solution: "<p>エタン 0 π。エテン 1 π。シアン化水素 2 π（三重結合が 1 つ）。プロペンニトリル 3 π（二重結合が 1 つと三重結合が 1 つ）。</p>",
    },

    // ── s2-2h-q033 · numeric · challenge · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q033": {
      // EN: <p>A molecule has the condensed structural formula <span class="chem">HC≡C–CH=CH–CHO</span>. The <span class="chem">CHO</span> group contains a C=O double bond and a C–H bond.</p><p>How many sigma (σ) bonds are there in one molecule?</p>
      stem: "<p>ある分子の簡略化した構造式は <span class=\"chem\">HC≡C–CH=CH–CHO</span> です。<span class=\"chem\">CHO</span> 基には、C=O 二重結合が 1 本と C–H 結合が 1 本あります。</p><p>1 分子にシグマ (σ) 結合は何本ありますか。</p>",
      hints: [
        // EN: Draw the full structural formula. There are 5 carbon atoms, 4 hydrogen atoms and 1 oxygen atom.
        "完全な構造式を描きましょう。炭素原子が 5 個、水素原子が 4 個、酸素原子が 1 個あります。",
        // EN: Each multiple bond contains exactly one σ bond. Each C–H bond is a σ bond.
        "多重結合には、どれも σ 結合がちょうど 1 本ふくまれます。C–H 結合はどれも σ 結合です。",
      ],
      // EN: <div class="worked__math">C–H: 4; C≡C: 1 σ; C–C: 2; C=C: 1 σ; C=O: 1 σ</div><div class="worked__math">Total = 4 + 1 + 2 + 1 + 1 = <b>9 σ bonds</b></div><p>Check: 10 atoms and no rings gives 10 − 1 = 9 σ bonds. The molecule also has 2 + 1 + 1 = 4 π bonds.</p>
      solution: "<div class=\"worked__math\">C–H：4；C≡C：1 σ；C–C：2；C=C：1 σ；C=O：1 σ</div><div class=\"worked__math\">合計 = 4 + 1 + 2 + 1 + 1 = <b>σ 結合 9 本</b></div><p>確認：原子が 10 個で環がないので、σ 結合は 10 − 1 = 9 本です。この分子には π 結合も 2 + 1 + 1 = 4 本あります。</p>",
      // EN: σ bonds
      unit: "本の σ 結合",
    },

    // ── s2-2h-q034 · mcq · foundation · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q034": {
      // EN: <p>What is the hybridization of each carbon atom in ethene, <span class="chem">CH2=CH2</span>?</p>
      stem: "<p>エテン <span class=\"chem\">CH2=CH2</span> の各炭素原子の混成は、どれですか。</p>",
      options: [
        // EN: sp
        "sp",
        // EN: sp<sup>2</sup>
        "sp<sup>2</sup>",
        // EN: sp<sup>3</sup>
        "sp<sup>3</sup>",
        // EN: The carbon atoms are not hybridized.
        "炭素原子は混成していない。",
      ],
      hints: [
        // EN: Count the electron domains around one carbon atom. A double bond is one domain.
        "炭素原子 1 個のまわりの電子領域を数えましょう。二重結合は 1 つの領域です。",
        // EN: 2 domains → sp; 3 domains → sp<sup>2</sup>; 4 domains → sp<sup>3</sup>.
        "2 領域 → sp、3 領域 → sp<sup>2</sup>、4 領域 → sp<sup>3</sup>。",
      ],
      // EN: <p>Each carbon has three electron domains: two C–H bonds and one C=C bond. Three domains means sp<sup>2</sup>, with the domains in a trigonal planar arrangement (120°).</p>
      solution: "<p>どちらの炭素にも電子領域が 3 つあります。C–H 結合 2 本と C=C 結合 1 本です。領域が 3 つなら sp<sup>2</sup> で、領域は平面三角形に並びます（120°）。</p>",
      misconception: {
        // EN (option A): sp is for two electron domains. Each carbon in ethene is joined to three atoms: two H and one C.
        "0": "sp は、電子領域が 2 つのときです。エテンの炭素は、どちらも 3 個の原子とつながっています。H 2 個と C 1 個です。",
        // EN (option C): sp<sup>3</sup> is for four electron domains. A double bond counts as one domain, so each carbon has three.
        "2": "sp<sup>3</sup> は、電子領域が 4 つのときです。二重結合は 1 つの領域と数えるので、どちらの炭素も領域は 3 つです。",
        // EN (option D): Carbon atoms that form bonds in molecules are described as sp, sp<sup>2</sup> or sp<sup>3</sup> hybridized.
        "3": "分子の中で結合を作っている炭素原子は、sp、sp<sup>2</sup>、sp<sup>3</sup> のどれかの混成として説明されます。",
      },
    },

    // ── s2-2h-q035 · mcq · exam · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q035": {
      // EN: <p>The molecule <span class="chem">CH3–CO–C≡CH</span> contains a C=O double bond and a C≡C triple bond. What is the hybridization of the carbon atom in each group?</p>
      stem: "<p>分子 <span class=\"chem\">CH3–CO–C≡CH</span> には、C=O 二重結合と C≡C 三重結合があります。それぞれの基の炭素原子の混成は、どれですか。</p>",
      options: [
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>2</sup>. C≡C: sp.
        "<span class=\"chem\">CH3</span>：sp<sup>3</sup>。C=O：sp<sup>2</sup>。C≡C：sp。",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>3</sup>. C≡C: sp<sup>3</sup>.
        "<span class=\"chem\">CH3</span>：sp<sup>3</sup>。C=O：sp<sup>3</sup>。C≡C：sp<sup>3</sup>。",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp. C≡C: sp<sup>2</sup>.
        "<span class=\"chem\">CH3</span>：sp<sup>3</sup>。C=O：sp。C≡C：sp<sup>2</sup>。",
        // EN: <span class="chem">CH3</span>: sp<sup>3</sup>. C=O: sp<sup>2</sup>. C≡C: sp<sup>2</sup>.
        "<span class=\"chem\">CH3</span>：sp<sup>3</sup>。C=O：sp<sup>2</sup>。C≡C：sp<sup>2</sup>。",
      ],
      hints: [
        // EN: For each carbon, count the atoms it is joined to. Carbon has no lone pairs here, so that is its number of domains.
        "それぞれの炭素について、つながっている原子を数えましょう。ここでは炭素に非共有電子対がないので、それが領域の数になります。",
        // EN: Multiple bonds count as one domain each.
        "多重結合は、どれも 1 つの領域と数えます。",
      ],
      // EN: <p><span class="chem">CH3</span> carbon: four single bonds, four domains, sp<sup>3</sup>. C=O carbon: joined to C, O and C, three domains, sp<sup>2</sup>. Each C≡C carbon: joined to two atoms, two domains, sp.</p>
      solution: "<p><span class=\"chem\">CH3</span> の炭素：単結合 4 本で領域は 4 つ、sp<sup>3</sup>。C=O の炭素：C、O、C とつながり、領域は 3 つ、sp<sup>2</sup>。C≡C の炭素はどちらも、2 個の原子とつながり、領域は 2 つ、sp。</p>",
      misconception: {
        // EN (option B): Not every carbon is sp<sup>3</sup>. Only a carbon with four electron domains (four single bonds) is sp<sup>3</sup>.
        "1": "すべての炭素が sp<sup>3</sup> というわけではありません。sp<sup>3</sup> になるのは、電子領域が 4 つ（単結合 4 本）の炭素だけです。",
        // EN (option C): These two are swapped. The C=O carbon is joined to three atoms (three domains, sp<sup>2</sup>). A triply bonded carbon is joined to two atoms (two domains, sp).
        "2": "この 2 つが入れ替わっています。C=O の炭素は 3 個の原子とつながっています（領域 3 つ、sp<sup>2</sup>）。三重結合の炭素は 2 個の原子とつながっています（領域 2 つ、sp）。",
        // EN (option D): A carbon in a triple bond has only two electron domains: the triple bond and one single bond. Two domains means sp.
        "3": "三重結合の炭素には、電子領域が 2 つしかありません。三重結合と単結合 1 本です。領域が 2 つなら sp です。",
      },
    },

    // ── s2-2h-q036 · multi · exam · AHL · Structure 2.2.16 · 2 marks
    "s2-2h-q036": {
      // EN: <p>In which of these is the named atom sp<sup>2</sup> hybridized? Select all that apply.</p>
      stem: "<p>次のうち、示された原子が sp<sup>2</sup> 混成であるものはどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: B in <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span> の B",
        // EN: C in <span class="chem">HCHO</span> (methanal)
        "<span class=\"chem\">HCHO</span>（メタナール）の C",
        // EN: N in <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span> の N",
        // EN: C in <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span> の C",
        // EN: Each C in <span class="chem">C2H4</span>
        "<span class=\"chem\">C2H4</span> のそれぞれの C",
      ],
      hints: [
        // EN: sp<sup>2</sup> means three electron domains around the atom.
        "sp<sup>2</sup> は、原子のまわりに電子領域が 3 つあるという意味です。",
        // EN: Lone pairs count as domains. A double bond counts as one domain.
        "非共有電子対も領域と数えます。二重結合は 1 つの領域と数えます。",
      ],
      // EN: <p>Three domains: B in <span class="chem">BF3</span> (three bonds, no lone pair); C in methanal (two C–H and one C=O); each C in ethene (two C–H and one C=C). N in <span class="chem">NH3</span> has four domains (sp<sup>3</sup>). C in <span class="chem">CO2</span> has two domains (sp).</p>
      solution: "<p>領域が 3 つのもの：<span class=\"chem\">BF3</span> の B（結合 3 本、非共有電子対なし）、メタナールの C（C–H 2 本と C=O 1 本）、エテンのそれぞれの C（C–H 2 本と C=C 1 本）。<span class=\"chem\">NH3</span> の N は領域が 4 つです (sp<sup>3</sup>)。<span class=\"chem\">CO2</span> の C は領域が 2 つです (sp)。</p>",
      misconception: {
        // EN (option C): Nitrogen in ammonia has three bonds and one lone pair. The lone pair is a domain too: four domains, so sp<sup>3</sup>. Count domains, not bonds.
        "2": "アンモニアの窒素には、結合が 3 本と非共有電子対が 1 組あります。非共有電子対も領域なので、領域は 4 つで sp<sup>3</sup> です。結合ではなく、領域を数えましょう。",
        // EN (option D): Carbon in CO<sub>2</sub> has two double bonds. Each double bond is one domain: two domains, so sp.
        "3": "CO<sub>2</sub> の炭素には二重結合が 2 本あります。二重結合はどれも 1 つの領域なので、領域は 2 つで sp です。",
      },
    },

    // ── s2-2h-q037 · mcq · exam · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q037": {
      // EN: <p>The Lewis formula of carbon dioxide is O=C=O, with two lone pairs on each oxygen atom. What is the hybridization of the carbon atom and of each oxygen atom?</p>
      stem: "<p>二酸化炭素のルイス構造式は O=C=O で、どちらの酸素原子にも非共有電子対が 2 組あります。炭素原子と各酸素原子の混成は、どれですか。</p>",
      options: [
        // EN: C: sp. O: sp<sup>2</sup>.
        "C：sp。O：sp<sup>2</sup>。",
        // EN: C: sp<sup>2</sup>. O: sp<sup>2</sup>.
        "C：sp<sup>2</sup>。O：sp<sup>2</sup>。",
        // EN: C: sp. O: sp<sup>3</sup>.
        "C：sp。O：sp<sup>3</sup>。",
        // EN: C: sp<sup>3</sup>. O: sp<sup>2</sup>.
        "C：sp<sup>3</sup>。O：sp<sup>2</sup>。",
      ],
      hints: [
        // EN: Carbon: two double bonds, no lone pairs. How many domains?
        "炭素：二重結合が 2 本で、非共有電子対はありません。領域はいくつですか。",
        // EN: Oxygen: one double bond and two lone pairs. How many domains?
        "酸素：二重結合が 1 本と、非共有電子対が 2 組です。領域はいくつですか。",
      ],
      // EN: <p>Carbon: two domains → sp (linear, 180°). Each oxygen: one bonded atom + two lone pairs = three domains → sp<sup>2</sup>.</p>
      solution: "<p>炭素：領域が 2 つ → sp（直線形、180°）。それぞれの酸素：結合している原子 1 個 + 非共有電子対 2 組 = 領域 3 つ → sp<sup>2</sup>。</p>",
      misconception: {
        // EN (option B): Carbon is joined to two atoms and has no lone pairs: two domains, so sp. Its shape is linear, not trigonal planar.
        "1": "炭素は 2 個の原子とつながり、非共有電子対はありません。領域は 2 つなので sp です。形は平面三角形ではなく、直線形です。",
        // EN (option C): Each oxygen has one double bond (one domain) and two lone pairs (two domains). That is three domains, not four.
        "2": "どちらの酸素にも、二重結合が 1 本（領域 1 つ）と非共有電子対が 2 組（領域 2 つ）あります。領域は 4 つではなく、3 つです。",
        // EN (option D): Carbon forms four bonds here, but they are two double bonds. Two double bonds are two domains.
        "3": "ここでは炭素は結合を 4 本作っていますが、それは二重結合 2 本です。二重結合 2 本は、領域 2 つです。",
      },
    },

    // ── s2-2h-q038 · mcq · challenge · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q038": {
      // EN: <p>Ethene reacts with hydrogen to form ethane: <span class="chem">C2H4 + H2 -> C2H6</span>. What happens at each carbon atom during this reaction?</p>
      stem: "<p>エテンは水素と反応してエタンになります：<span class=\"chem\">C2H4 + H2 -> C2H6</span>。この反応で、それぞれの炭素原子では何が起こりますか。</p>",
      options: [
        // EN: Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 120° to about 109.5°.
        "混成が sp<sup>2</sup> から sp<sup>3</sup> に変わる。結合角は約 120° から約 109.5° に変わる。",
        // EN: Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 109.5° to about 120°.
        "混成が sp<sup>2</sup> から sp<sup>3</sup> に変わる。結合角は約 109.5° から約 120° に変わる。",
        // EN: Hybridization changes from sp to sp<sup>2</sup>. The bond angles change from 180° to about 120°.
        "混成が sp から sp<sup>2</sup> に変わる。結合角は 180° から約 120° に変わる。",
        // EN: Hybridization changes from sp<sup>3</sup> to sp<sup>2</sup>. The bond angles change from about 109.5° to about 120°.
        "混成が sp<sup>3</sup> から sp<sup>2</sup> に変わる。結合角は約 109.5° から約 120° に変わる。",
      ],
      hints: [
        // EN: Count the electron domains around a carbon atom in ethene, then in ethane.
        "エテンの炭素原子のまわりの電子領域を数え、次にエタンでも数えましょう。",
        // EN: Match each hybridization to its geometry: sp<sup>2</sup> trigonal planar, sp<sup>3</sup> tetrahedral.
        "それぞれの混成を形と結びつけましょう。sp<sup>2</sup> は平面三角形、sp<sup>3</sup> は正四面体形です。",
      ],
      // EN: <p>In ethene each carbon has three domains: sp<sup>2</sup>, trigonal planar, about 120°. In ethane each carbon has four domains: sp<sup>3</sup>, tetrahedral, about 109.5°. The π bond is lost and two new σ C–H bonds form.</p>
      solution: "<p>エテンでは、どちらの炭素も領域が 3 つです。sp<sup>2</sup>、平面三角形、約 120° です。エタンでは、どちらの炭素も領域が 4 つです。sp<sup>3</sup>、正四面体形、約 109.5° です。π 結合がなくなり、新しい C–H の σ 結合が 2 本できます。</p>",
      misconception: {
        // EN (option B): The hybridization is right but the angles are the wrong way round. sp<sup>2</sup> goes with 120° and sp<sup>3</sup> with 109.5°.
        "1": "混成は合っていますが、角度が逆です。sp<sup>2</sup> には 120°、sp<sup>3</sup> には 109.5° が対応します。",
        // EN (option C): sp and 180° belong to a carbon in a triple bond, such as in ethyne. Ethene has a double bond.
        "2": "sp と 180° は、エチンのように三重結合をもつ炭素のものです。エテンにあるのは二重結合です。",
        // EN (option D): This is the reverse reaction. Ethene (three domains per carbon) is the reactant; ethane (four domains per carbon) is the product.
        "3": "これは逆向きの反応です。エテン（炭素 1 個あたり領域 3 つ）が反応物で、エタン（炭素 1 個あたり領域 4 つ）が生成物です。",
      },
    },

    // ── s2-2h-q039 · short · challenge · AHL · Structure 2.2.16 · 3 marks
    "s2-2h-q039": {
      // EN: <p>Hydrogen cyanide has the structure H–C≡N, with one lone pair on nitrogen.</p><p>Analyse the bonding around the carbon atom. State its hybridization and the H–C–N bond angle, and describe how the σ bonds and the π bonds to carbon are formed.</p>
      stem: "<p>シアン化水素の構造は H–C≡N で、窒素に非共有電子対が 1 組あります。</p><p>炭素原子のまわりの結合を分析しなさい (analyse)。炭素の混成と H–C–N 結合角を述べなさい (state)。また、炭素の σ 結合と π 結合がどのようにできるかを記述しなさい (describe)。</p>",
      hints: [
        // EN: Count the electron domains around carbon. A triple bond is one domain.
        "炭素のまわりの電子領域を数えましょう。三重結合は 1 つの領域です。",
        // EN: An sp carbon has two hybrid orbitals and two p orbitals left unmixed. Which make σ bonds and which make π bonds?
        "sp の炭素には、混成軌道が 2 つと、混ざらずに残った p 軌道が 2 つあります。σ 結合を作るのはどちらで、π 結合を作るのはどちらですか。",
      ],
      // EN: <p>Two domains → sp → linear, 180°. The two sp hybrid orbitals point in opposite directions and make the two σ bonds (to H and to N) by head-on overlap. The two unmixed p orbitals are at right angles to each other. Each overlaps sideways with a p orbital on nitrogen, giving two π bonds. Triple bond = 1 σ + 2 π.</p>
      solution: "<p>領域が 2 つ → sp → 直線形、180°。2 つの sp 混成軌道は反対方向を向き、正面からの重なりで 2 本の σ 結合（H との結合と N との結合）を作ります。混ざらずに残った 2 つの p 軌道は、互いに直角です。それぞれが窒素の p 軌道と横方向に重なり、2 本の π 結合ができます。三重結合 = 1 σ + 2 π。</p>",
      // EN: <p>Carbon has two electron domains (one single bond and one triple bond), so it is sp hybridized and the H–C–N angle is 180°. The C–H σ bond forms by head-on overlap of an sp hybrid orbital on carbon with the 1s orbital of hydrogen. The C–N σ bond forms by head-on overlap of the other sp hybrid orbital on carbon with a hybrid orbital on nitrogen. The two π bonds form by sideways overlap of the two unhybridized p orbitals on carbon with two p orbitals on nitrogen.</p>
      answer: "<p>炭素には電子領域が 2 つ（単結合 1 本と三重結合 1 本）あるので、sp 混成で、H–C–N の角度は 180° である。C–H の σ 結合は、炭素の sp 混成軌道が水素の 1s 軌道と正面から重なってできる。C–N の σ 結合は、炭素のもう 1 つの sp 混成軌道が窒素の混成軌道と正面から重なってできる。2 本の π 結合は、炭素の混成していない 2 つの p 軌道が、窒素の 2 つの p 軌道と横方向に重なってできる。</p>",
      markscheme: [
        // EN: Carbon is sp hybridized AND the bond angle is 180° (two electron domains).
        "炭素は sp 混成であり、かつ、結合角は 180° である（電子領域が 2 つ）。",
        // EN: σ bonds: head-on overlap of sp hybrid orbitals of carbon (with 1s of H / with an orbital on N).
        "σ 結合：炭素の sp 混成軌道の正面からの重なり（H の 1s と / N の軌道と）。",
        // EN: Two π bonds: sideways (lateral) overlap of the (unhybridized) p orbitals on carbon and nitrogen.
        "2 本の π 結合：炭素と窒素の（混成していない）p 軌道の横方向の重なり。",
      ],
    },

    // ── s2-2h-q040 · numeric · foundation · AHL · Structure 2.2.3 · 1 mark
    "s2-2h-q040": {
      // EN: <p>In the complex ion <span class="chem">[Fe(H2O)6]^3+</span>, six water molecules are bonded to one <span class="chem">Fe^3+</span> ion.</p><p>How many coordination bonds are there in one complex ion?</p>
      stem: "<p>錯イオン <span class=\"chem\">[Fe(H2O)6]^3+</span> では、6 個の水分子が 1 個の <span class=\"chem\">Fe^3+</span> イオンに結合しています。</p><p>この錯イオン 1 個には、配位結合が何本ありますか。</p>",
      hints: [
        // EN: A coordination bond is a covalent bond in which both shared electrons come from the same atom.
        "配位結合は、共有される電子が 2 個とも同じ原子から来ている共有結合です。",
        // EN: Each water molecule donates one lone pair from its oxygen atom to the metal ion.
        "水分子はそれぞれ、酸素原子の非共有電子対 1 組を金属イオンに与えます。",
      ],
      // EN: <p>Each of the six water molecules donates one lone pair to the <span class="chem">Fe^3+</span> ion. That makes <b>6</b> coordination bonds. The O–H bonds inside each water molecule are ordinary covalent bonds, so they are not counted.</p>
      solution: "<p>6 個の水分子がそれぞれ、非共有電子対 1 組を <span class=\"chem\">Fe^3+</span> イオンに与えます。だから配位結合は <b>6</b> 本です。水分子の中の O–H 結合はふつうの共有結合なので、数えません。</p>",
      // EN: coordination bonds
      unit: "本の配位結合",
    },

    // ── s2-2h-q041 · mcq · exam · AHL · Structure 2.2.3 · 1 mark
    "s2-2h-q041": {
      // EN: <p>In the complex ion <span class="chem">[Cu(NH3)4(H2O)2]^2+</span>, each ammonia molecule is bonded to the copper ion. Which describes the bond between one ammonia molecule and the copper ion?</p>
      stem: "<p>錯イオン <span class=\"chem\">[Cu(NH3)4(H2O)2]^2+</span> では、アンモニア分子はどれも銅イオンに結合しています。アンモニア分子 1 個と銅イオンの間の結合を、正しく説明しているものはどれですか。</p>",
      options: [
        // EN: A coordination bond: both electrons of the shared pair come from the nitrogen atom.
        "配位結合：共有電子対の電子は、2 個とも窒素原子から来ている。",
        // EN: A coordination bond: both electrons of the shared pair come from the copper ion.
        "配位結合：共有電子対の電子は、2 個とも銅イオンから来ている。",
        // EN: A covalent bond: one electron comes from the nitrogen atom and one from the copper ion.
        "共有結合：電子の 1 個は窒素原子から、もう 1 個は銅イオンから来ている。",
        // EN: An ionic bond: ammonia has gained electrons from the copper ion.
        "イオン結合：アンモニアが銅イオンから電子を受け取っている。",
      ],
      hints: [
        // EN: Draw the Lewis formula of ammonia. What does nitrogen have besides its three bonds?
        "アンモニアのルイス構造式を描きましょう。窒素には、3 本の結合のほかに何がありますか。",
        // EN: Which particle is short of electrons: the positive metal ion or the ammonia molecule?
        "電子が足りないのはどちらの粒子ですか。正の電荷をもつ金属イオンですか、アンモニア分子ですか。",
      ],
      // EN: <p>Nitrogen in ammonia has one lone pair. It donates this pair to the <span class="chem">Cu^2+</span> ion. Both electrons of the shared pair come from the same atom (nitrogen), so the bond is a coordination bond. The ion has six coordination bonds: four from ammonia and two from water.</p>
      solution: "<p>アンモニアの窒素には、非共有電子対が 1 組あります。窒素はこれを <span class=\"chem\">Cu^2+</span> イオンに与えます。共有電子対の電子が 2 個とも同じ原子（窒素）から来ているので、この結合は配位結合です。このイオンには配位結合が 6 本あります。アンモニアから 4 本、水から 2 本です。</p>",
      misconception: {
        // EN (option B): The direction is reversed. The copper ion is positive and accepts the electron pair. The lone pair is on the nitrogen atom of ammonia.
        "1": "向きが逆です。銅イオンは正の電荷をもち、電子対を受け取る側です。非共有電子対は、アンモニアの窒素原子にあります。",
        // EN (option C): That describes an ordinary covalent bond. Here the nitrogen atom supplies both electrons, from its lone pair.
        "2": "それはふつうの共有結合の説明です。ここでは、窒素原子が非共有電子対から電子を 2 個とも出しています。",
        // EN (option D): Ammonia is a neutral molecule and stays a molecule in the complex. No electrons are transferred to it. It shares its lone pair with the copper ion.
        "3": "アンモニアは電荷をもたない分子で、錯イオンの中でも分子のままです。アンモニアに電子は移りません。アンモニアは、非共有電子対を銅イオンと共有します。",
      },
    },

  }
});
