/* s2-2h.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 's2-2h.q', {
  questions: {

    // ── s2-2h-q001 · mcq · foundation · AHL · Structure 2.2.11 · 1 mark
    "s2-2h-q001": {
      // EN: <p>For which species can you draw more than one Lewis formula, where the formulas differ only in the position of a double bond?</p>
      stem: "<p>以下哪一個物種可以畫出多於一個路易斯結構式，而各結構式之間只有雙鍵的位置不同？</p>",
      options: [
        // EN: <span class="chem">HCHO</span> (methanal)
        "<span class=\"chem\">HCHO</span>（甲醛）",
        // EN: <span class="chem">C2H4</span> (ethene)
        "<span class=\"chem\">C2H4</span>（乙烯）",
        // EN: <span class="chem">NO3-</span> (nitrate ion)
        "<span class=\"chem\">NO3-</span>（硝酸根離子）",
        // EN: <span class="chem">HCN</span> (hydrogen cyanide)
        "<span class=\"chem\">HCN</span>（氰化氫）",
      ],
      hints: [
        // EN: Look for a central atom joined to two or more atoms of the same element.
        "找出連接着兩個或以上同一種元素原子的中心原子。",
        // EN: Ask: could the double bond be drawn to a different atom and still give a correct Lewis formula?
        "問問自己：雙鍵可否畫到另一個原子上，而路易斯結構式仍然正確？",
      ],
      // EN: <p>In the nitrate ion, nitrogen is joined to three oxygen atoms. The one N=O double bond can be drawn to any of the three. That gives three resonance structures. In the other species the multiple bond has only one possible position.</p>
      solution: "<p>在硝酸根離子中，氮連接着三個氧原子。那一個 N=O 雙鍵可以畫到三個氧原子中的任何一個，所以有三個共振結構。其他物種的重鍵只有一個可能的位置。</p>",
      misconception: {
        // EN (option A): In methanal the double bond can only go to the oxygen atom. Hydrogen forms one single bond only. One position means no resonance.
        "0": "在甲醛中，雙鍵只能連到氧原子。氫只能形成一個單鍵。只有一個位置，就沒有共振。",
        // EN (option B): In ethene the double bond can only be between the two carbon atoms. There is no second position for it.
        "1": "在乙烯中，雙鍵只能在兩個碳原子之間，沒有第二個位置。",
        // EN (option D): HCN has a triple bond between C and N. Hydrogen cannot take part in a multiple bond, so there is only one possible formula.
        "3": "HCN 的 C 和 N 之間是三鍵。氫不能參與重鍵，所以只有一個可能的結構式。",
      },
    },

    // ── s2-2h-q002 · mcq · exam · AHL · Structure 2.2.11 · 1 mark
    "s2-2h-q002": {
      // EN: <p>The data booklet gives these bond lengths: N–O 136 pm and N=O 114 pm. One Lewis formula of the nitrate ion, <span class="chem">NO3-</span>, shows one N=O bond and two N–O bonds.</p><p>Which describes the nitrogen–oxygen bonds that are measured in the nitrate ion?</p>
      stem: "<p>數據手冊給出以下鍵長：N–O 136 pm 和 N=O 114 pm。硝酸根離子 <span class=\"chem\">NO3-</span> 的一個路易斯結構式有一個 N=O 鍵和兩個 N–O 鍵。</p><p>以下哪一項描述在硝酸根離子中量度到的氮氧鍵？</p>",
      options: [
        // EN: One bond of 114 pm and two bonds of 136 pm
        "一個 114 pm 的鍵和兩個 136 pm 的鍵",
        // EN: Three bonds of 114 pm
        "三個 114 pm 的鍵",
        // EN: Three bonds of 136 pm
        "三個 136 pm 的鍵",
        // EN: Three equal bonds, with a length between 114 pm and 136 pm
        "三個相同的鍵，長度介乎 114 pm 和 136 pm 之間",
      ],
      hints: [
        // EN: How many resonance structures does the nitrate ion have?
        "硝酸根離子有多少個共振結構？",
        // EN: The real ion is a mix (hybrid) of all of them. What does that do to the three bonds?
        "真實的離子是所有共振結構的混合（雜化體）。這對三個鍵有甚麼影響？",
      ],
      // EN: <p>The nitrate ion has three resonance structures. The π electrons are delocalized over the nitrogen atom and all three oxygen atoms. So all three bonds are the same, and each is between a single and a double bond. The measured value is about 124 pm.</p>
      solution: "<p>硝酸根離子有三個共振結構。π 電子離域到氮原子和全部三個氧原子上。所以三個鍵完全相同，每個都介乎單鍵和雙鍵之間。量度值約為 124 pm。</p>",
      misconception: {
        // EN (option A): This treats one resonance structure as the real ion. The ion does not have one fixed double bond. The π electrons are delocalized over all three bonds.
        "0": "這是把其中一個共振結構當成真實的離子。離子並沒有一個固定的雙鍵。π 電子離域到全部三個鍵上。",
        // EN (option B): There is only one double bond to share among three positions, so the bonds are not all full double bonds.
        "1": "只有一個雙鍵由三個位置分享，所以三個鍵不可能全部是完整的雙鍵。",
        // EN (option C): The double bond does not disappear. Its π electrons are shared by all three bonds, which makes each one shorter than a single bond.
        "2": "雙鍵不會消失。它的 π 電子由三個鍵共用，令每個鍵都比單鍵短。",
      },
    },

    // ── s2-2h-q003 · short · exam · AHL · Structure 2.2.11 · 2 marks
    "s2-2h-q003": {
      // EN: <p>A Lewis formula of ozone, <span class="chem">O3</span>, shows one O=O double bond and one O–O single bond. The data booklet values are O–O 148 pm and O=O 121 pm.</p><p>Measurements show that both bonds in ozone are 128 pm long. Explain this.</p>
      stem: "<p>臭氧 <span class=\"chem\">O3</span> 的一個路易斯結構式有一個 O=O 雙鍵和一個 O–O 單鍵。數據手冊的數值是 O–O 148 pm 和 O=O 121 pm。</p><p>量度結果顯示，臭氧的兩個鍵都長 128 pm。解釋 (explain) 這個現象。</p>",
      hints: [
        // EN: Draw the Lewis formula with the double bond on the left. Now draw it with the double bond on the right.
        "畫出雙鍵在左邊的路易斯結構式。再畫出雙鍵在右邊的結構式。",
        // EN: Use the word “delocalized” and say what it does to the two bonds.
        "用上「離域」(delocalized) 一詞，並說明它對兩個鍵有甚麼影響。",
      ],
      // EN: <p>Two resonance structures exist. Neither is the real molecule. The π electrons are delocalized over the three atoms, so both bonds are equal in length. 128 pm lies between 121 pm (double) and 148 pm (single).</p>
      solution: "<p>臭氧有兩個共振結構，兩個都不是真實的分子。π 電子離域到三個原子上，所以兩個鍵長度相等。128 pm 介乎 121 pm（雙鍵）和 148 pm（單鍵）之間。</p>",
      // EN: <p>Ozone has two resonance structures, because the double bond can be drawn on either side of the central atom. The real molecule is a hybrid of the two. The π electrons are delocalized over all three oxygen atoms, so both bonds are identical and each is between a single and a double bond.</p>
      answer: "<p>臭氧有兩個共振結構，因為雙鍵可以畫在中心原子的任何一邊。真實的分子是兩者的雜化體。π 電子離域到全部三個氧原子上，所以兩個鍵完全相同，每個都介乎單鍵和雙鍵之間。</p>",
      markscheme: [
        // EN: Two resonance structures can be drawn / the double bond has two possible positions (accept: ozone has resonance).
        "可以畫出兩個共振結構／雙鍵有兩個可能的位置（接受：臭氧有共振）。",
        // EN: The (π) electrons are delocalized over all three oxygen atoms, so both bonds are the same / each bond is intermediate between a single and a double bond.
        "（π）電子離域到全部三個氧原子上，所以兩個鍵相同／每個鍵都介乎單鍵和雙鍵之間。",
      ],
    },

    // ── s2-2h-q004 · short · challenge · AHL · Structure 2.2.11 · 3 marks
    "s2-2h-q004": {
      // EN: <p>Ultraviolet light can break the bonds in oxygen, <span class="chem">O2</span>, and in ozone, <span class="chem">O3</span>. The bond in <span class="chem">O2</span> is broken only by light with a wavelength shorter than about 242 nm. The bonds in <span class="chem">O3</span> are broken by light with wavelengths up to about 330 nm.</p><p>Explain this difference, using the bonding in the two molecules.</p>
      stem: "<p>紫外光可以令氧 <span class=\"chem\">O2</span> 和臭氧 <span class=\"chem\">O3</span> 的鍵斷裂。<span class=\"chem\">O2</span> 的鍵只有波長短於約 242 nm 的光才能打斷。<span class=\"chem\">O3</span> 的鍵則可由波長最長約 330 nm 的光打斷。</p><p>根據這兩種分子的鍵合，解釋 (explain) 這個差別。</p>",
      hints: [
        // EN: Compare the type of bond in each molecule. Ozone has two resonance structures.
        "比較兩種分子中鍵的類型。臭氧有兩個共振結構。",
        // EN: Which bond is stronger: a double bond, or a bond between single and double?
        "哪一種鍵較強：雙鍵，還是介乎單鍵和雙鍵之間的鍵？",
        // EN: Link energy and wavelength: <i>E</i> = <i>hf</i> and <i>c</i> = <i>λf</i> (Structure 1.3).
        "把能量和波長聯繫起來：<i>E</i> = <i>hf</i> 和 <i>c</i> = <i>λf</i> (Structure 1.3)。",
      ],
      // EN: <p>Step 1: bonding. <span class="chem">O2</span> has O=O. In <span class="chem">O3</span> the two bonds are equal and intermediate between single and double.</p><p>Step 2: strength. An intermediate bond is weaker than a double bond, so less energy is needed.</p><p>Step 3: light. A photon with less energy has a longer wavelength. So ozone is broken by longer wavelengths than oxygen.</p>
      solution: "<p>第 1 步：鍵合。<span class=\"chem\">O2</span> 有 O=O。在 <span class=\"chem\">O3</span> 中，兩個鍵相同，介乎單鍵和雙鍵之間。</p><p>第 2 步：強度。介乎兩者之間的鍵比雙鍵弱，所以所需的能量較少。</p><p>第 3 步：光。能量較少的光子，波長較長。所以令臭氧的鍵斷裂的光，波長比氧的長。</p>",
      // EN: <p><span class="chem">O2</span> has a double bond, O=O. In ozone, resonance means the π electrons are delocalized, so each bond is between a single and a double bond. The bonds in ozone are therefore weaker than the bond in <span class="chem">O2</span> and need less energy to break. Light of lower energy has a longer wavelength (<i>E</i> = <i>hc</i>/<i>λ</i>), so longer wavelengths can break ozone.</p>
      answer: "<p><span class=\"chem\">O2</span> 有一個雙鍵 O=O。在臭氧中，共振表示 π 電子離域，所以每個鍵都介乎單鍵和雙鍵之間。因此臭氧的鍵比 <span class=\"chem\">O2</span> 的鍵弱，斷裂所需的能量較少。能量較低的光，波長較長 (<i>E</i> = <i>hc</i>/<i>λ</i>)，所以波長較長的光也能令臭氧的鍵斷裂。</p>",
      markscheme: [
        // EN: O<sub>2</sub> has a double bond, AND the bonds in O<sub>3</sub> are between single and double bonds (because of resonance / delocalization).
        "O<sub>2</sub> 有一個雙鍵，並且 O<sub>3</sub> 的鍵介乎單鍵和雙鍵之間（因為共振／離域）。",
        // EN: The bonds in ozone are weaker / need less energy to break than the bond in O<sub>2</sub>.
        "臭氧的鍵比 O<sub>2</sub> 的鍵弱／斷裂所需的能量較少。",
        // EN: Lower energy corresponds to a longer wavelength (lower frequency), so light of longer wavelength can break the bonds in ozone.
        "能量較低對應較長的波長（較低的頻率），所以波長較長的光能令臭氧的鍵斷裂。",
      ],
    },

    // ── s2-2h-q005 · mcq · foundation · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q005": {
      // EN: <p>Which statement about the carbon–carbon bonds in benzene, <span class="chem">C6H6</span>, is correct?</p>
      stem: "<p>關於苯 <span class=\"chem\">C6H6</span> 的碳碳鍵，以下哪一項敍述正確？</p>",
      options: [
        // EN: Three short C=C bonds and three long C–C bonds alternate around the ring.
        "環上有三個短的 C=C 鍵和三個長的 C–C 鍵相間排列。",
        // EN: All six bonds have the same length, between the lengths of C–C and C=C.
        "六個鍵的長度全部相同，介乎 C–C 和 C=C 的長度之間。",
        // EN: All six bonds are single bonds, the same length as in ethane.
        "六個鍵全部是單鍵，長度與乙烷的相同。",
        // EN: All six bonds are double bonds, the same length as in ethene.
        "六個鍵全部是雙鍵，長度與乙烯的相同。",
      ],
      hints: [
        // EN: Benzene has two resonance structures. The real molecule is a hybrid of them.
        "苯有兩個共振結構。真實的分子是兩者的雜化體。",
      ],
      // EN: <p>The six π electrons in benzene are delocalized over all six carbon atoms. So all six carbon–carbon bonds are identical. Their length, about 140 pm, is between C–C (154 pm) and C=C (134 pm).</p>
      solution: "<p>苯的六個 π 電子離域到全部六個碳原子上。所以六個碳碳鍵完全相同。鍵長約 140 pm，介乎 C–C (154 pm) 和 C=C (134 pm) 之間。</p>",
      misconception: {
        // EN (option A): This is one resonance structure, not the real molecule. Measurements show six equal bonds.
        "0": "這是其中一個共振結構，不是真實的分子。量度結果顯示六個鍵相同。",
        // EN (option C): Six single bonds would leave each carbon with only three bonds. The measured length (about 140 pm) is shorter than C–C (154 pm).
        "2": "六個單鍵的話，每個碳只有三個鍵。量度所得的鍵長（約 140 pm）比 C–C (154 pm) 短。",
        // EN (option D): Six double bonds would give each carbon too many bonds. The measured length (about 140 pm) is longer than C=C (134 pm).
        "3": "六個雙鍵的話，每個碳的鍵就太多了。量度所得的鍵長（約 140 pm）比 C=C (134 pm) 長。",
      },
    },

    // ── s2-2h-q006 · mcq · exam · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q006": {
      // EN: <p>Benzene was once drawn as a ring with alternating single and double bonds. Which observation is evidence <strong>against</strong> that structure?</p>
      stem: "<p>苯曾經畫成單鍵和雙鍵相間的環。以下哪一項觀察結果是<strong>否定</strong>這個結構的證據？</p>",
      options: [
        // EN: Benzene has the molecular formula <span class="chem">C6H6</span>.
        "苯的分子式是 <span class=\"chem\">C6H6</span>。",
        // EN: Benzene reacts with hydrogen to form cyclohexane, <span class="chem">C6H12</span>.
        "苯與氫反應，生成環己烷 <span class=\"chem\">C6H12</span>。",
        // EN: All the carbon–carbon bonds in benzene have the same length.
        "苯的所有碳碳鍵長度相同。",
        // EN: Benzene burns in oxygen to form carbon dioxide and water.
        "苯在氧中燃燒，生成二氧化碳和水。",
      ],
      hints: [
        // EN: Ask of each observation: would a ring with three real C=C bonds also do this?
        "就每項觀察結果問問自己：有三個真正 C=C 鍵的環是否也會這樣？",
        // EN: Single and double bonds have different lengths.
        "單鍵和雙鍵的長度不同。",
      ],
      // EN: <p>Alternating single and double bonds would have two different lengths (154 pm and 134 pm). All six bonds in benzene are equal (about 140 pm). This is physical evidence that the π electrons are delocalized.</p>
      solution: "<p>單鍵和雙鍵相間的話，會有兩種不同的鍵長（154 pm 和 134 pm）。苯的六個鍵全部相同（約 140 pm）。這是 π 電子離域的物理證據。</p>",
      misconception: {
        // EN (option A): A ring with alternating single and double bonds also has the formula C<sub>6</sub>H<sub>6</sub>. This fits both models, so it is not evidence against one of them.
        "0": "單鍵和雙鍵相間的環，化學式同樣是 C<sub>6</sub>H<sub>6</sub>。這與兩個模型都吻合，所以不能用來否定其中一個。",
        // EN (option B): A molecule with three C=C bonds would also add three H<sub>2</sub> to form cyclohexane. This fits both models.
        "1": "有三個 C=C 鍵的分子同樣會加上三個 H<sub>2</sub>，生成環己烷。這與兩個模型都吻合。",
        // EN (option D): Every hydrocarbon burns to form carbon dioxide and water. This says nothing about the bonds in the ring.
        "3": "所有烴燃燒都會生成二氧化碳和水。這並不能說明環上的鍵是怎樣的。",
      },
    },

    // ── s2-2h-q007 · multi · exam · AHL · Structure 2.2.12 · 2 marks
    "s2-2h-q007": {
      // EN: <p>Which of these are <strong>chemical</strong> evidence that benzene does not contain three ordinary C=C double bonds? Select all that apply.</p>
      stem: "<p>以下哪些是<strong>化學</strong>證據，顯示苯並沒有三個普通的 C=C 雙鍵？選出所有正確選項。</p>",
      options: [
        // EN: Benzene reacts by substitution rather than addition.
        "苯進行取代反應，而不是加成反應。",
        // EN: All the carbon–carbon bonds in benzene are 140 pm long.
        "苯的所有碳碳鍵都長 140 pm。",
        // EN: The enthalpy of hydrogenation of benzene is less exothermic than three times that of cyclohexene.
        "苯的氫化焓的放熱程度，比環己烯氫化焓的三倍小。",
        // EN: Benzene is a planar regular hexagon with bond angles of 120°.
        "苯是平面的正六邊形，鍵角是 120°。",
        // EN: Benzene does not readily decolourize bromine water.
        "苯不易令溴水褪色。",
      ],
      hints: [
        // EN: Chemical evidence comes from what benzene does in reactions, including the energy change of a reaction.
        "化學證據來自苯在反應中的表現，包括反應的能量變化。",
        // EN: Physical evidence comes from measuring the molecule itself: lengths, angles, shape.
        "物理證據來自對分子本身的量度：長度、角度、形狀。",
      ],
      // EN: <p>Chemical: substitution instead of addition; no fast reaction with bromine water; a less exothermic enthalpy of hydrogenation than expected. Physical: equal bond lengths; a planar regular hexagon.</p>
      solution: "<p>化學證據：進行取代而非加成；不會與溴水迅速反應；氫化焓的放熱程度比預期小。物理證據：鍵長相等；平面的正六邊形。</p>",
      misconception: {
        // EN (option B): Bond length is measured, not seen in a reaction. It is physical evidence. If a question asks for chemical evidence, this does not score.
        "1": "鍵長是量度出來的，不是在反應中觀察到的，所以是物理證據。如果題目要求化學證據，這一項不會得分。",
        // EN (option D): Shape and bond angles are physical evidence. Chemical evidence is about reactions and their energy changes.
        "3": "形狀和鍵角是物理證據。化學證據與反應和反應的能量變化有關。",
      },
    },

    // ── s2-2h-q008 · short · exam · AHL · Structure 2.2.12 · 3 marks
    "s2-2h-q008": {
      // EN: <p>Benzene is sometimes drawn as a ring with alternating single and double bonds.</p><p>Discuss why this drawing does not describe benzene well. Give one piece of physical evidence and one piece of chemical evidence, and state how the bonding in benzene is described instead.</p>
      stem: "<p>苯有時會畫成單鍵和雙鍵相間的環。</p><p>討論 (discuss) 為甚麼這個圖不能準確描述苯。提出一項物理證據和一項化學證據，並寫出現在怎樣描述苯的鍵合。</p>",
      hints: [
        // EN: Physical evidence is something you measure about the molecule. Chemical evidence is about a reaction.
        "物理證據是你對分子量度所得的結果。化學證據則與反應有關。",
        // EN: For the bonding, use the words “delocalized” and “π electrons”.
        "描述鍵合時，要用上「離域」(delocalized) 和「π 電子」(π electrons)。",
      ],
      // EN: <p>One physical point (equal bond lengths), one chemical point (substitution, not addition), then the model: delocalized π electrons around the ring. If you give two physical points and no chemical point, you lose a mark.</p>
      solution: "<p>寫一項物理證據（鍵長相等）、一項化學證據（進行取代而非加成），然後寫出模型：環上有離域 π 電子。如果你寫了兩項物理證據而沒有化學證據，就會失去一分。</p>",
      // EN: <p>Physical evidence: all six carbon–carbon bonds have the same length (about 140 pm), between a single and a double bond. Alternating bonds would have two different lengths. Chemical evidence: benzene reacts by substitution, not by addition, so it does not behave like an alkene. The bonding is described as a ring of six carbon atoms with six delocalized π electrons, spread over the whole ring.</p>
      answer: "<p>物理證據：六個碳碳鍵的長度全部相同（約 140 pm），介乎單鍵和雙鍵之間。單雙鍵相間的話，會有兩種不同的鍵長。化學證據：苯進行取代反應，而不是加成反應，所以它的表現與烯烴不同。苯的鍵合可描述為：六個碳原子組成的環，加上六個離域 π 電子，分散在整個環上。</p>",
      markscheme: [
        // EN: Physical evidence: all carbon–carbon bond lengths are equal / intermediate between single and double (accept: regular planar hexagon, all bond angles 120°).
        "物理證據：所有碳碳鍵的鍵長相等／介乎單鍵和雙鍵之間（接受：平面的正六邊形，所有鍵角都是 120°）。",
        // EN: Chemical evidence: undergoes substitution rather than addition / does not readily decolourize bromine water (accept: enthalpy of hydrogenation less exothermic than expected for three C=C).
        "化學證據：進行取代而非加成／不易令溴水褪色（接受：氫化焓的放熱程度比三個 C=C 的預期值小）。",
        // EN: Bonding: delocalized π electrons (spread over all six carbon atoms / the ring). The word “π” (or “pi”) is needed.
        "鍵合：離域 π 電子（分散到全部六個碳原子上／整個環上）。必須寫出「π」（或「pi」）。",
      ],
    },

    // ── s2-2h-q009 · mcq · challenge · AHL · Structure 2.2.12 · 1 mark
    "s2-2h-q009": {
      // EN: <p>Cyclohexene has one C=C bond. Its enthalpy of hydrogenation is −120 <span class="unit">kJ mol-1</span>. The enthalpy of hydrogenation of benzene to cyclohexane is −208 <span class="unit">kJ mol-1</span>.</p><p>What do these data show?</p>
      stem: "<p>環己烯有一個 C=C 鍵，它的氫化焓是 −120 <span class=\"unit\">kJ mol-1</span>。苯氫化成環己烷的氫化焓是 −208 <span class=\"unit\">kJ mol-1</span>。</p><p>這些數據說明了甚麼？</p>",
      options: [
        // EN: Benzene is about 152 <span class="unit">kJ mol-1</span> more stable than a ring with three separate C=C bonds.
        "與有三個獨立 C=C 鍵的環相比，苯穩定約 152 <span class=\"unit\">kJ mol-1</span>。",
        // EN: Benzene is about 152 <span class="unit">kJ mol-1</span> less stable than a ring with three separate C=C bonds.
        "與有三個獨立 C=C 鍵的環相比，苯不穩定約 152 <span class=\"unit\">kJ mol-1</span>。",
        // EN: Benzene contains between one and two C=C bonds.
        "苯有一至兩個 C=C 鍵。",
        // EN: About 152 <span class="unit">kJ mol-1</span> must be supplied to hydrogenate benzene.
        "苯氫化時必須供應約 152 <span class=\"unit\">kJ mol-1</span> 的能量。",
      ],
      hints: [
        // EN: What would you predict for a ring with three separate C=C bonds?
        "如果環上有三個獨立的 C=C 鍵，你預測數值會是多少？",
        // EN: Compare your prediction with −208 <span class="unit">kJ mol-1</span>. Which is less exothermic?
        "把你的預測值與 −208 <span class=\"unit\">kJ mol-1</span> 比較。哪一個的放熱程度較小？",
      ],
      // EN: <div class="worked__math">Predicted for three C=C: 3 × (−120) = −360 kJ mol<sup>−1</sup></div><div class="worked__math">Difference: 360 − 208 = 152 kJ mol<sup>−1</sup></div><p>Benzene releases 152 <span class="unit">kJ mol-1</span> less than predicted. So benzene is lower in energy (more stable) than the model with three separate double bonds. Delocalization of the π electrons lowers the energy.</p>
      solution: "<div class=\"worked__math\">三個 C=C 的預測值：3 × (−120) = −360 kJ mol<sup>−1</sup></div><div class=\"worked__math\">相差：360 − 208 = 152 kJ mol<sup>−1</sup></div><p>苯釋出的能量比預測少 152 <span class=\"unit\">kJ mol-1</span>。所以苯的能量比「三個獨立雙鍵」的模型低（更穩定）。π 電子離域令能量降低。</p>",
      misconception: {
        // EN (option B): Benzene gives out less energy than predicted when it is hydrogenated. It must start lower in energy, which means more stable, not less.
        "1": "苯氫化時釋出的能量比預測少。它起初的能量必定較低，即是更穩定，而不是較不穩定。",
        // EN (option C): Dividing 208 by 120 treats the π electrons as separate double bonds. The data show the opposite: the electrons are not in separate double bonds.
        "2": "把 208 除以 120，是把 π 電子當成獨立的雙鍵。數據顯示的剛好相反：這些電子並不在獨立的雙鍵裏。",
        // EN (option D): Both values are negative, so hydrogenation of benzene is exothermic. The 152 is a difference between a prediction and a measurement.
        "3": "兩個數值都是負數，所以苯的氫化是放熱的。152 是預測值和量度值之間的差。",
      },
    },

    // ── s2-2h-q010 · mcq · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q010": {
      // EN: <p>What are the molecular geometry and the bond angles of <span class="chem">PCl5</span>?</p>
      stem: "<p><span class=\"chem\">PCl5</span> 的分子形狀和鍵角是甚麼？</p>",
      options: [
        // EN: Trigonal bipyramidal; 90° and 120°
        "三角雙錐體形；90° 和 120°",
        // EN: Square pyramidal; 90°
        "正方錐體形；90°",
        // EN: Trigonal planar; 120°
        "平面三角形；120°",
        // EN: Octahedral; 90°
        "八面體形；90°",
      ],
      hints: [
        // EN: Phosphorus has 5 valence electrons. How many are used in the five P–Cl bonds?
        "磷有 5 個價電子。五個 P–Cl 鍵用去了多少個？",
        // EN: Five electron domains and no lone pairs.
        "5 個電子域，沒有孤電子對。",
      ],
      // EN: <p>P has 5 valence electrons and uses all 5 in bonds. That is five bonding domains and no lone pairs. Five domains are arranged in a trigonal bipyramid: three bonds in a plane at 120°, and two bonds at 90° to that plane.</p>
      solution: "<p>P 有 5 個價電子，5 個全部用於鍵合。即有 5 個鍵合電子域，沒有孤電子對。5 個電子域排列成三角雙錐體：三個鍵在同一平面上，互成 120°；另外兩個鍵與這個平面成 90°。</p>",
      misconception: {
        // EN (option B): Square pyramidal needs six electron domains, one of them a lone pair. Phosphorus in PCl<sub>5</sub> has five domains and no lone pair.
        "1": "正方錐體形需要 6 個電子域，其中一個是孤電子對。PCl<sub>5</sub> 中的磷有 5 個電子域，沒有孤電子對。",
        // EN (option C): Trigonal planar is for three electron domains. Phosphorus here has five bonding domains.
        "2": "平面三角形對應 3 個電子域。這裏的磷有 5 個鍵合電子域。",
        // EN (option D): Octahedral needs six electron domains. Count the bonds: there are five.
        "3": "八面體形需要 6 個電子域。數一數鍵：只有五個。",
      },
    },

    // ── s2-2h-q011 · numeric · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q011": {
      // EN: <p>How many lone pairs are on the chlorine atom in <span class="chem">ClF3</span>?</p>
      stem: "<p>在 <span class=\"chem\">ClF3</span> 中，氯原子上有多少個孤電子對？</p>",
      hints: [
        // EN: Chlorine is in group 17. How many valence electrons does it have?
        "氯在第 17 族。它有多少個價電子？",
        // EN: Three electrons are used in the three Cl–F bonds. Pair up the rest.
        "三個 Cl–F 鍵用去三個電子。把餘下的電子配成對。",
      ],
      // EN: <div class="worked__math">Valence electrons on Cl = 7</div><div class="worked__math">Used in three Cl–F bonds = 3</div><div class="worked__math">Left over = 7 − 3 = 4 electrons = <b>2 lone pairs</b></div><p>So chlorine has 3 + 2 = 5 electron domains.</p>
      solution: "<div class=\"worked__math\">Cl 的價電子 = 7</div><div class=\"worked__math\">三個 Cl–F 鍵用去 = 3</div><div class=\"worked__math\">餘下 = 7 − 3 = 4 個電子 = <b>2 個孤電子對</b></div><p>所以氯有 3 + 2 = 5 個電子域。</p>",
      // EN: lone pairs
      unit: "個孤電子對",
    },

    // ── s2-2h-q012 · mcq · foundation · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q012": {
      // EN: <p>What are the molecular geometry and the F–S–F bond angle between neighbouring bonds in <span class="chem">SF6</span>?</p>
      stem: "<p><span class=\"chem\">SF6</span> 的分子形狀是甚麼？相鄰兩個鍵之間的 F–S–F 鍵角是多少？</p>",
      options: [
        // EN: Tetrahedral; 109.5°
        "四面體形；109.5°",
        // EN: Trigonal bipyramidal; 90° and 120°
        "三角雙錐體形；90° 和 120°",
        // EN: Octahedral; 90°
        "八面體形；90°",
        // EN: Hexagonal planar; 60°
        "平面六邊形；60°",
      ],
      hints: [
        // EN: Sulfur has 6 valence electrons and forms six bonds.
        "硫有 6 個價電子，形成六個鍵。",
        // EN: Six electron domains, no lone pairs.
        "6 個電子域，沒有孤電子對。",
      ],
      // EN: <p>S uses all 6 valence electrons in six S–F bonds. Six bonding domains with no lone pairs give an octahedral molecule. Neighbouring bonds are at 90°.</p>
      solution: "<p>S 的 6 個價電子全部用於六個 S–F 鍵。6 個鍵合電子域，沒有孤電子對，所以分子是八面體形。相鄰的鍵互成 90°。</p>",
      misconception: {
        // EN (option A): Tetrahedral is for four electron domains. Sulfur here has six bonds.
        "0": "四面體形對應 4 個電子域。這裏的硫有六個鍵。",
        // EN (option B): Trigonal bipyramidal is for five electron domains. Count the fluorine atoms: there are six.
        "1": "三角雙錐體形對應 5 個電子域。數一數氟原子：共有六個。",
        // EN (option D): Electron domains spread out in three dimensions to get as far apart as possible. Six domains in one flat plane would be only 60° apart.
        "3": "電子域會在三維空間散開，盡量遠離對方。6 個電子域如果在同一平面上，只會相隔 60°。",
      },
    },

    // ── s2-2h-q013 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q013": {
      // EN: <p>What are the electron domain geometry and the molecular geometry of <span class="chem">SF4</span>?</p>
      stem: "<p><span class=\"chem\">SF4</span> 的電子域幾何形狀和分子形狀是甚麼？</p>",
      options: [
        // EN: Electron domain geometry: tetrahedral. Molecular geometry: tetrahedral.
        "電子域幾何形狀：四面體形。分子形狀：四面體形。",
        // EN: Electron domain geometry: trigonal bipyramidal. Molecular geometry: trigonal bipyramidal.
        "電子域幾何形狀：三角雙錐體形。分子形狀：三角雙錐體形。",
        // EN: Electron domain geometry: trigonal bipyramidal. Molecular geometry: seesaw.
        "電子域幾何形狀：三角雙錐體形。分子形狀：蹺蹺板形。",
        // EN: Electron domain geometry: octahedral. Molecular geometry: square planar.
        "電子域幾何形狀：八面體形。分子形狀：平面正方形。",
      ],
      hints: [
        // EN: Find the lone pairs on sulfur: valence electrons minus electrons used in bonds.
        "找出硫上的孤電子對：價電子數目減去用於鍵合的電子數目。",
        // EN: Four bonding domains + one lone pair = five domains.
        "4 個鍵合電子域 + 1 個孤電子對 = 5 個電子域。",
      ],
      // EN: <div class="worked__math">S: 6 valence electrons; 4 used in bonds; 2 left = 1 lone pair</div><p>Five electron domains: trigonal bipyramidal electron domain geometry. The lone pair takes an equatorial position. The four atoms then make a seesaw shape.</p>
      solution: "<div class=\"worked__math\">S：6 個價電子；4 個用於鍵合；餘下 2 個 = 1 個孤電子對</div><p>5 個電子域：電子域幾何形狀是三角雙錐體形。孤電子對佔一個赤道位置。四個原子於是形成蹺蹺板形。</p>",
      misconception: {
        // EN (option A): This counts only the four bonds. Sulfur has 6 valence electrons and uses 4, so one lone pair is left. That makes five domains.
        "0": "這只數了四個鍵。硫有 6 個價電子，用去 4 個，所以餘下一個孤電子對。這樣就有 5 個電子域。",
        // EN (option B): The electron domain geometry is right. But the molecular geometry describes the atoms only, and one of the five domains is a lone pair.
        "1": "電子域幾何形狀是對的。但分子形狀只描述原子的排列，而 5 個電子域中有一個是孤電子對。",
        // EN (option D): Square planar needs six domains with two lone pairs. Sulfur in SF<sub>4</sub> has only one lone pair: 6 − 4 = 2 electrons.
        "3": "平面正方形需要 6 個電子域，其中兩個是孤電子對。SF<sub>4</sub> 中的硫只有一個孤電子對：6 − 4 = 2 個電子。",
      },
    },

    // ── s2-2h-q014 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q014": {
      // EN: <p>What are the molecular geometry and the F–Xe–F bond angle between neighbouring bonds in <span class="chem">XeF4</span>?</p>
      stem: "<p><span class=\"chem\">XeF4</span> 的分子形狀是甚麼？相鄰兩個鍵之間的 F–Xe–F 鍵角是多少？</p>",
      options: [
        // EN: Tetrahedral; 109.5°
        "四面體形；109.5°",
        // EN: Square planar; 90°
        "平面正方形；90°",
        // EN: Seesaw; less than 90° and less than 120°
        "蹺蹺板形；小於 90° 和小於 120°",
        // EN: Octahedral; 90°
        "八面體形；90°",
      ],
      hints: [
        // EN: Xenon is in group 18: 8 valence electrons.
        "氙在第 18 族：有 8 個價電子。",
        // EN: The two lone pairs go opposite each other, 180° apart.
        "兩個孤電子對在相對的位置，互成 180°。",
      ],
      // EN: <div class="worked__math">Xe: 8 valence electrons; 4 used in bonds; 4 left = 2 lone pairs</div><p>Six domains: octahedral electron domain geometry. The two lone pairs are opposite each other. The four fluorine atoms lie in one plane: square planar, 90°.</p>
      solution: "<div class=\"worked__math\">Xe：8 個價電子；4 個用於鍵合；餘下 4 個 = 2 個孤電子對</div><p>6 個電子域：電子域幾何形狀是八面體形。兩個孤電子對在相對的位置。四個氟原子在同一平面上：平面正方形，90°。</p>",
      misconception: {
        // EN (option A): This counts only the four bonds. Xenon has 8 valence electrons and uses 4, so two lone pairs are left: six domains in total.
        "0": "這只數了四個鍵。氙有 8 個價電子，用去 4 個，所以餘下兩個孤電子對：共 6 個電子域。",
        // EN (option C): Seesaw is for five domains with one lone pair. Xenon here has six domains: four bonds and two lone pairs.
        "2": "蹺蹺板形對應 5 個電子域，其中一個是孤電子對。這裏的氙有 6 個電子域：四個鍵和兩個孤電子對。",
        // EN (option D): Octahedral is the electron domain geometry. The molecular geometry describes only the atoms, and two of the six positions hold lone pairs.
        "3": "八面體形是電子域幾何形狀。分子形狀只描述原子的排列，而六個位置中有兩個是孤電子對。",
      },
    },

    // ── s2-2h-q015 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q015": {
      // EN: <p>What is the molecular geometry of <span class="chem">BrF3</span>?</p>
      stem: "<p><span class=\"chem\">BrF3</span> 的分子形狀是甚麼？</p>",
      options: [
        // EN: Trigonal planar
        "平面三角形",
        // EN: Trigonal pyramidal
        "三角錐體形",
        // EN: T-shaped
        "T 形",
        // EN: Trigonal bipyramidal
        "三角雙錐體形",
      ],
      hints: [
        // EN: Bromine is in group 17.
        "溴在第 17 族。",
        // EN: Three bonding domains + two lone pairs = five domains. The lone pairs are equatorial.
        "3 個鍵合電子域 + 2 個孤電子對 = 5 個電子域。孤電子對在赤道位置。",
      ],
      // EN: <div class="worked__math">Br: 7 valence electrons; 3 used in bonds; 4 left = 2 lone pairs</div><p>Five domains: trigonal bipyramidal arrangement. Both lone pairs are equatorial. The three fluorine atoms make a T shape, with bond angles a little less than 90°.</p>
      solution: "<div class=\"worked__math\">Br：7 個價電子；3 個用於鍵合；餘下 4 個 = 2 個孤電子對</div><p>5 個電子域：排列成三角雙錐體形。兩個孤電子對都在赤道位置。三個氟原子形成 T 形，鍵角略小於 90°。</p>",
      misconception: {
        // EN (option A): Trigonal planar would mean no lone pairs on bromine. Bromine has 7 valence electrons and uses only 3 in bonds.
        "0": "平面三角形表示溴上沒有孤電子對。但溴有 7 個價電子，只有 3 個用於鍵合。",
        // EN (option B): Trigonal pyramidal is for four domains with one lone pair. Bromine here has two lone pairs: (7 − 3) ÷ 2 = 2.
        "1": "三角錐體形對應 4 個電子域，其中一個是孤電子對。這裏的溴有兩個孤電子對：(7 − 3) ÷ 2 = 2。",
        // EN (option D): That is the electron domain geometry (five domains). Two of the five domains are lone pairs, so the atoms make a different shape.
        "3": "這是電子域幾何形狀（5 個電子域）。5 個電子域中有兩個是孤電子對，所以原子形成的形狀不同。",
      },
    },

    // ── s2-2h-q016 · numeric · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q016": {
      // EN: <p>Deduce the Cl–I–Cl bond angle in the ion <span class="chem">ICl2-</span>. Iodine is the central atom.</p>
      stem: "<p>推斷 (deduce) 離子 <span class=\"chem\">ICl2-</span> 中的 Cl–I–Cl 鍵角。碘是中心原子。</p>",
      hints: [
        // EN: Count the electrons around iodine: 7 of its own, 1 from each chlorine, and 1 for the negative charge.
        "數出碘周圍的電子：自己的 7 個，每個氯提供 1 個，負電荷再加 1 個。",
        // EN: Five pairs: two bonding pairs and three lone pairs. The lone pairs take the three equatorial positions.
        "共 5 對：兩個鍵合電子對和三個孤電子對。孤電子對佔三個赤道位置。",
      ],
      // EN: <div class="worked__math">Electrons around I = 7 + 2 + 1 = 10 = 5 pairs</div><div class="worked__math">2 bonding pairs + 3 lone pairs</div><p>Five domains are arranged in a trigonal bipyramid. The three lone pairs are equatorial. The two chlorine atoms are in the axial positions, so the ion is linear: <b>180°</b>.</p>
      solution: "<div class=\"worked__math\">I 周圍的電子 = 7 + 2 + 1 = 10 = 5 對</div><div class=\"worked__math\">2 個鍵合電子對 + 3 個孤電子對</div><p>5 個電子域排列成三角雙錐體。三個孤電子對在赤道位置。兩個氯原子在軸向位置，所以離子是直線形：<b>180°</b>。</p>",
    },

    // ── s2-2h-q017 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q017": {
      // EN: <p>What is the molecular geometry of <span class="chem">IF5</span>?</p>
      stem: "<p><span class=\"chem\">IF5</span> 的分子形狀是甚麼？</p>",
      options: [
        // EN: Trigonal bipyramidal
        "三角雙錐體形",
        // EN: Square pyramidal
        "正方錐體形",
        // EN: Octahedral
        "八面體形",
        // EN: Seesaw
        "蹺蹺板形",
      ],
      hints: [
        // EN: Iodine is in group 17.
        "碘在第 17 族。",
        // EN: Five bonding domains + one lone pair = six domains.
        "5 個鍵合電子域 + 1 個孤電子對 = 6 個電子域。",
      ],
      // EN: <div class="worked__math">I: 7 valence electrons; 5 used in bonds; 2 left = 1 lone pair</div><p>Six domains: octahedral arrangement. One position holds the lone pair. The five fluorine atoms make a square pyramid.</p>
      solution: "<div class=\"worked__math\">I：7 個價電子；5 個用於鍵合；餘下 2 個 = 1 個孤電子對</div><p>6 個電子域：排列成八面體形。其中一個位置是孤電子對。五個氟原子形成正方錐體。</p>",
      misconception: {
        // EN (option A): This counts five bonds and forgets the lone pair. Iodine has 7 valence electrons and uses 5: one lone pair is left, so there are six domains.
        "0": "這只數了五個鍵，忘記了孤電子對。碘有 7 個價電子，用去 5 個：餘下一個孤電子對，所以有 6 個電子域。",
        // EN (option C): Octahedral is the electron domain geometry. One of the six domains is a lone pair, so the atoms do not make an octahedron.
        "2": "八面體形是電子域幾何形狀。6 個電子域中有一個是孤電子對，所以原子並不形成八面體。",
        // EN (option D): Seesaw is for five domains with one lone pair (four bonds). Here there are five bonds and one lone pair.
        "3": "蹺蹺板形對應 5 個電子域，其中一個是孤電子對（四個鍵）。這裏有五個鍵和一個孤電子對。",
      },
    },

    // ── s2-2h-q018 · mcq · exam · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q018": {
      // EN: <p>Which molecule is polar?</p>
      stem: "<p>以下哪一個分子有極性？</p>",
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
        "四個分子都有極性鍵。問題是鍵偶極會否互相抵消。",
        // EN: Find the shape of each molecule. Which one is not symmetrical?
        "找出每個分子的形狀。哪一個不對稱？",
      ],
      // EN: <p><span class="chem">SF4</span> has a lone pair on sulfur and a seesaw shape. The S–F bond dipoles do not cancel, so the molecule has a net dipole. The other three shapes are symmetrical, so their bond dipoles cancel.</p>
      solution: "<p><span class=\"chem\">SF4</span> 的硫上有一個孤電子對，形狀是蹺蹺板形。S–F 鍵偶極不能互相抵消，所以分子有淨偶極。其餘三個分子的形狀對稱，所以鍵偶極互相抵消。</p>",
      misconception: {
        // EN (option A): PCl<sub>5</sub> is trigonal bipyramidal with five identical bonds and no lone pairs. The bond dipoles cancel.
        "0": "PCl<sub>5</sub> 是三角雙錐體形，有五個相同的鍵，沒有孤電子對。鍵偶極互相抵消。",
        // EN (option C): XeF<sub>4</sub> is square planar. The four Xe–F bond dipoles point in opposite pairs and cancel.
        "2": "XeF<sub>4</sub> 是平面正方形。四個 Xe–F 鍵偶極兩兩方向相反，互相抵消。",
        // EN (option D): SF<sub>6</sub> is octahedral. The six S–F bond dipoles cancel in opposite pairs.
        "3": "SF<sub>6</sub> 是八面體形。六個 S–F 鍵偶極兩兩方向相反，互相抵消。",
      },
    },

    // ── s2-2h-q019 · mcq · challenge · AHL · Structure 2.2.13 · 1 mark
    "s2-2h-q019": {
      // EN: <p>Iodine forms the ions <span class="chem">IF4+</span> and <span class="chem">IF4-</span>. What are their molecular geometries?</p>
      stem: "<p>碘會形成離子 <span class=\"chem\">IF4+</span> 和 <span class=\"chem\">IF4-</span>。它們的分子形狀是甚麼？</p>",
      options: [
        // EN: <span class="chem">IF4+</span>: seesaw. <span class="chem">IF4-</span>: square planar.
        "<span class=\"chem\">IF4+</span>：蹺蹺板形。<span class=\"chem\">IF4-</span>：平面正方形。",
        // EN: <span class="chem">IF4+</span>: tetrahedral. <span class="chem">IF4-</span>: tetrahedral.
        "<span class=\"chem\">IF4+</span>：四面體形。<span class=\"chem\">IF4-</span>：四面體形。",
        // EN: <span class="chem">IF4+</span>: square planar. <span class="chem">IF4-</span>: seesaw.
        "<span class=\"chem\">IF4+</span>：平面正方形。<span class=\"chem\">IF4-</span>：蹺蹺板形。",
        // EN: <span class="chem">IF4+</span>: seesaw. <span class="chem">IF4-</span>: seesaw.
        "<span class=\"chem\">IF4+</span>：蹺蹺板形。<span class=\"chem\">IF4-</span>：蹺蹺板形。",
      ],
      hints: [
        // EN: Electrons around iodine = 7 + 4 (one from each F), then subtract 1 for a + charge or add 1 for a − charge.
        "碘周圍的電子 = 7 + 4（每個 F 提供一個）；帶 + 電荷就減 1，帶 − 電荷就加 1。",
        // EN: Halve the total to get the number of electron domains. Four are bonding; the rest are lone pairs.
        "把總數減半，得出電子域的數目。其中四個是鍵合電子域，其餘是孤電子對。",
      ],
      // EN: <div class="worked__math">IF<sub>4</sub><sup>+</sup>: 7 + 4 − 1 = 10 electrons = 5 domains = 4 bonds + 1 lone pair</div><div class="worked__math">IF<sub>4</sub><sup>−</sup>: 7 + 4 + 1 = 12 electrons = 6 domains = 4 bonds + 2 lone pairs</div><p>Five domains with one lone pair: seesaw. Six domains with two lone pairs: square planar.</p>
      solution: "<div class=\"worked__math\">IF<sub>4</sub><sup>+</sup>：7 + 4 − 1 = 10 個電子 = 5 個電子域 = 4 個鍵 + 1 個孤電子對</div><div class=\"worked__math\">IF<sub>4</sub><sup>−</sup>：7 + 4 + 1 = 12 個電子 = 6 個電子域 = 4 個鍵 + 2 個孤電子對</div><p>5 個電子域，其中一個是孤電子對：蹺蹺板形。6 個電子域，其中兩個是孤電子對：平面正方形。</p>",
      misconception: {
        // EN (option B): This counts only the four bonds. Iodine has lone pairs in both ions. Count all the electrons around iodine, including the charge.
        "1": "這只數了四個鍵。兩個離子中的碘都有孤電子對。要數出碘周圍的所有電子，並把電荷計算在內。",
        // EN (option C): The charges are the wrong way round. A positive charge means one electron fewer; a negative charge means one electron more.
        "2": "兩個電荷弄反了。正電荷代表少一個電子；負電荷代表多一個電子。",
        // EN (option D): This ignores the charge. The two ions have different numbers of electrons around iodine, so they have different numbers of lone pairs.
        "3": "這忽略了電荷。兩個離子中碘周圍的電子數目不同，所以孤電子對的數目也不同。",
      },
    },

    // ── s2-2h-q020 · short · challenge · AHL · Structure 2.2.13 · 4 marks
    "s2-2h-q020": {
      // EN: <p>Solid phosphorus(V) chloride contains the ions <span class="chem">PCl4+</span> and <span class="chem">PCl6-</span>.</p><p>Deduce the molecular geometry and the Cl–P–Cl bond angle (between neighbouring bonds) of each ion. Show how you counted the electron domains.</p>
      stem: "<p>固態氯化磷(V) 含有離子 <span class=\"chem\">PCl4+</span> 和 <span class=\"chem\">PCl6-</span>。</p><p>推斷 (deduce) 每個離子的分子形狀和（相鄰兩個鍵之間的）Cl–P–Cl 鍵角。寫出你怎樣數電子域。</p>",
      hints: [
        // EN: Electrons around P = 5 (its own) + 1 from each Cl, then adjust for the charge.
        "P 周圍的電子 = 5（自己的）+ 每個 Cl 提供 1 個，然後按電荷調整。",
        // EN: Divide by 2 to get the number of domains. Compare with the number of bonds to find the lone pairs.
        "除以 2，得出電子域的數目。與鍵的數目比較，找出孤電子對的數目。",
      ],
      // EN: <div class="worked__math">PCl<sub>4</sub><sup>+</sup>: 5 + 4 − 1 = 8 electrons = 4 domains (4 bonds, 0 lone pairs)</div><div class="worked__math">PCl<sub>6</sub><sup>−</sup>: 5 + 6 + 1 = 12 electrons = 6 domains (6 bonds, 0 lone pairs)</div><p>Four bonding domains: tetrahedral, 109.5°. Six bonding domains: octahedral, 90°. Only the anion has an expanded octet.</p>
      solution: "<div class=\"worked__math\">PCl<sub>4</sub><sup>+</sup>：5 + 4 − 1 = 8 個電子 = 4 個電子域（4 個鍵，0 個孤電子對）</div><div class=\"worked__math\">PCl<sub>6</sub><sup>−</sup>：5 + 6 + 1 = 12 個電子 = 6 個電子域（6 個鍵，0 個孤電子對）</div><p>4 個鍵合電子域：四面體形，109.5°。6 個鍵合電子域：八面體形，90°。只有陰離子有擴張八隅體。</p>",
      // EN: <p><span class="chem">PCl4+</span>: electrons around P = 5 + 4 − 1 = 8, so four electron domains, all bonding. Tetrahedral, 109.5°.</p><p><span class="chem">PCl6-</span>: electrons around P = 5 + 6 + 1 = 12, so six electron domains, all bonding. Octahedral, 90°.</p>
      answer: "<p><span class=\"chem\">PCl4+</span>：P 周圍的電子 = 5 + 4 − 1 = 8，所以有 4 個電子域，全部是鍵合電子域。四面體形，109.5°。</p><p><span class=\"chem\">PCl6-</span>：P 周圍的電子 = 5 + 6 + 1 = 12，所以有 6 個電子域，全部是鍵合電子域。八面體形，90°。</p>",
      markscheme: [
        // EN: PCl<sub>4</sub><sup>+</sup>: four electron domains / four bonding pairs and no lone pairs on P.
        "PCl<sub>4</sub><sup>+</sup>：P 上有 4 個電子域／4 個鍵合電子對，沒有孤電子對。",
        // EN: PCl<sub>4</sub><sup>+</sup>: tetrahedral AND 109.5°.
        "PCl<sub>4</sub><sup>+</sup>：四面體形，並且是 109.5°。",
        // EN: PCl<sub>6</sub><sup>−</sup>: six electron domains / six bonding pairs and no lone pairs on P.
        "PCl<sub>6</sub><sup>−</sup>：P 上有 6 個電子域／6 個鍵合電子對，沒有孤電子對。",
        // EN: PCl<sub>6</sub><sup>−</sup>: octahedral AND 90°.
        "PCl<sub>6</sub><sup>−</sup>：八面體形，並且是 90°。",
      ],
    },

    // ── s2-2h-q021 · numeric · foundation · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q021": {
      // EN: <p>In the Lewis formula of the ammonium ion, <span class="chem">NH4+</span>, nitrogen has four single bonds and no lone pairs.</p><p>Calculate the formal charge on the nitrogen atom. Include the sign.</p>
      stem: "<p>在銨離子 <span class=\"chem\">NH4+</span> 的路易斯結構式中，氮有四個單鍵，沒有孤電子對。</p><p>計算 (calculate) 氮原子的形式電荷。答案要包括正負號。</p>",
      hints: [
        // EN: FC = V − N − ½B. V is the number of valence electrons of a free nitrogen atom.
        "FC = V − N − ½B。V 是自由氮原子的價電子數目。",
        // EN: N = 0 (no lone pairs). B = 8 (four bonds, two electrons each).
        "N = 0（沒有孤電子對）。B = 8（四個鍵，每個有兩個電子）。",
      ],
      // EN: <div class="worked__math">V = 5 (group 15), N = 0, B = 8</div><div class="worked__math">FC = 5 − 0 − ½(8) = <b>+1</b></div><p>Each hydrogen has FC = 1 − 0 − ½(2) = 0. The total, +1, equals the charge on the ion.</p>
      solution: "<div class=\"worked__math\">V = 5（第 15 族），N = 0，B = 8</div><div class=\"worked__math\">FC = 5 − 0 − ½(8) = <b>+1</b></div><p>每個氫的 FC = 1 − 0 − ½(2) = 0。總和是 +1，等於離子的電荷。</p>",
    },

    // ── s2-2h-q022 · numeric · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q022": {
      // EN: <p>One Lewis formula of the chlorate ion, <span class="chem">ClO3-</span>, has chlorine joined to three oxygen atoms by single bonds. Chlorine has one lone pair. Each oxygen has three lone pairs.</p><p>Calculate the formal charge on the chlorine atom in this formula. Include the sign.</p>
      stem: "<p>在氯酸根離子 <span class=\"chem\">ClO3-</span> 的其中一個路易斯結構式中，氯以單鍵連接三個氧原子。氯有一個孤電子對。每個氧有三個孤電子對。</p><p>計算 (calculate) 這個結構式中氯原子的形式電荷。答案要包括正負號。</p>",
      hints: [
        // EN: FC = V − N − ½B. Chlorine is in group 17.
        "FC = V − N − ½B。氯在第 17 族。",
        // EN: N counts electrons, not pairs: one lone pair is 2 electrons. B = 6 (three single bonds).
        "N 數的是電子，不是電子對：一個孤電子對是 2 個電子。B = 6（三個單鍵）。",
      ],
      // EN: <div class="worked__math">V = 7, N = 2, B = 6</div><div class="worked__math">FC(Cl) = 7 − 2 − ½(6) = <b>+2</b></div><div class="worked__math">FC(each O) = 6 − 6 − ½(2) = −1</div><p>Check: +2 + 3(−1) = −1, the charge on the ion. Do not confuse this with the oxidation state of chlorine, which is +5.</p>
      solution: "<div class=\"worked__math\">V = 7，N = 2，B = 6</div><div class=\"worked__math\">FC(Cl) = 7 − 2 − ½(6) = <b>+2</b></div><div class=\"worked__math\">FC（每個 O）= 6 − 6 − ½(2) = −1</div><p>核對：+2 + 3(−1) = −1，即離子的電荷。不要把它與氯的氧化態混淆，氯的氧化態是 +5。</p>",
    },

    // ── s2-2h-q023 · mcq · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q023": {
      // EN: <p>Three Lewis formulas can be drawn for dinitrogen monoxide, <span class="chem">N2O</span>, with the atoms in the order N, N, O. The lone pairs on each atom are given in the same order.</p><ul><li>I: N≡N–O, with 1, 0 and 3 lone pairs</li><li>II: N=N=O, with 2, 0 and 2 lone pairs</li><li>III: N–N≡O, with 3, 0 and 1 lone pairs</li></ul><p>Which is the preferred Lewis formula? (Electronegativity: N 3.0, O 3.4.)</p>
      stem: "<p>一氧化二氮 <span class=\"chem\">N2O</span> 可以畫出三個路易斯結構式，原子的次序是 N、N、O。各原子上的孤電子對數目按相同次序列出。</p><ul><li>I：N≡N–O，孤電子對數目是 1、0 和 3</li><li>II：N=N=O，孤電子對數目是 2、0 和 2</li><li>III：N–N≡O，孤電子對數目是 3、0 和 1</li></ul><p>哪一個是較可取的路易斯結構式？（電負性：N 3.0，O 3.4。）</p>",
      options: [
        // EN: I
        "I",
        // EN: II
        "II",
        // EN: III
        "III",
        // EN: I and II are equally preferred, because their formal charges are the same size.
        "I 和 II 同樣可取，因為它們的形式電荷大小相同。",
      ],
      hints: [
        // EN: Calculate FC = V − N − ½B for all three atoms in each formula.
        "為每個結構式的全部三個原子計算 FC = V − N − ½B。",
        // EN: First reject the formula with the largest charges. Then look at which atom carries the negative charge.
        "先排除電荷最大的結構式。然後看看哪個原子帶負電荷。",
      ],
      // EN: <div class="worked__math">I: N 5 − 2 − 3 = 0; N 5 − 0 − 4 = +1; O 6 − 6 − 1 = −1</div><div class="worked__math">II: N 5 − 4 − 2 = −1; N +1; O 6 − 4 − 2 = 0</div><div class="worked__math">III: N 5 − 6 − 1 = −2; N +1; O 6 − 2 − 3 = +1</div><p>III has the largest charges. I and II both have one +1 and one −1, but I puts the −1 on oxygen, the more electronegative atom. I is preferred.</p>
      solution: "<div class=\"worked__math\">I：N 5 − 2 − 3 = 0；N 5 − 0 − 4 = +1；O 6 − 6 − 1 = −1</div><div class=\"worked__math\">II：N 5 − 4 − 2 = −1；N +1；O 6 − 4 − 2 = 0</div><div class=\"worked__math\">III：N 5 − 6 − 1 = −2；N +1；O 6 − 2 − 3 = +1</div><p>III 的電荷最大。I 和 II 都有一個 +1 和一個 −1，但 I 的 −1 在氧上，而氧是電負性較高的原子。所以 I 較可取。</p>",
      misconception: {
        // EN (option B): II has formal charges −1, +1, 0. The negative charge sits on nitrogen. Oxygen is more electronegative, so the negative charge is better placed on oxygen.
        "1": "II 的形式電荷是 −1、+1、0。負電荷在氮上。氧的電負性較高，所以負電荷放在氧上較好。",
        // EN (option C): III has formal charges −2, +1, +1. These are the largest charges of the three, and oxygen is positive. Reject it first.
        "2": "III 的形式電荷是 −2、+1、+1。這是三個結構式中最大的電荷，而且氧帶正電荷。應首先排除。",
        // EN (option D): The sizes are the same, so use the second rule: a negative formal charge should be on the more electronegative atom. That separates I from II.
        "3": "電荷大小相同，所以要用第二條規則：負形式電荷應在電負性較高的原子上。這樣就能分出 I 和 II 的高下。",
      },
    },

    // ── s2-2h-q024 · mcq · exam · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q024": {
      // EN: <p>Which assumption is made when the formal charge of an atom is calculated?</p>
      stem: "<p>計算原子的形式電荷時，作了哪一個假設？</p>",
      options: [
        // EN: The electrons in each bond are shared equally between the two bonded atoms.
        "每個鍵的電子由兩個鍵合原子平均共用。",
        // EN: The electrons in each bond belong completely to the more electronegative atom.
        "每個鍵的電子完全屬於電負性較高的原子。",
        // EN: The lone pairs are shared equally among all the atoms in the species.
        "孤電子對由物種中所有原子平均共用。",
        // EN: Every atom in the species has an octet of electrons.
        "物種中每個原子都有八隅體。",
      ],
      hints: [
        // EN: Look at the formula: FC = V − N − ½B. Why is B halved?
        "看看公式：FC = V − N − ½B。為甚麼 B 要減半？",
      ],
      // EN: <p>The ½ in front of B gives each atom half of the electrons in its bonds. So formal charge treats every bond as perfectly covalent (equal sharing). Oxidation state makes the opposite assumption: every bond is treated as ionic, with the electrons given to the more electronegative atom.</p>
      solution: "<p>B 前面的 ½ 表示每個原子得到它的鍵中一半的電子。所以形式電荷把每個鍵都看成完全共價（平均共用）。氧化態的假設剛好相反：每個鍵都看成離子鍵，電子歸電負性較高的原子所有。</p>",
      misconception: {
        // EN (option B): That is the assumption for oxidation states. Formal charge ignores electronegativity and splits each bond evenly.
        "1": "這是氧化態的假設。形式電荷不理會電負性，把每個鍵的電子平分。",
        // EN (option C): Lone pairs belong completely to the atom they are drawn on. That is why N is subtracted in full.
        "2": "孤電子對完全屬於它所在的原子。所以 N 要整個減去。",
        // EN (option D): Formal charge can be calculated for any Lewis formula, including ones with expanded octets or fewer than eight electrons.
        "3": "任何路易斯結構式都可以計算形式電荷，包括有擴張八隅體或少於 8 個電子的結構式。",
      },
    },

    // ── s2-2h-q025 · mcq · challenge · AHL · Structure 2.2.14 · 1 mark
    "s2-2h-q025": {
      // EN: <p>Lewis formulas of the phosphate ion, <span class="chem">PO4^3-</span>, can be drawn with different numbers of P=O double bonds. Every oxygen atom has an octet in each formula. Phosphorus has no lone pairs.</p><p>Which formula is preferred, using formal charge? (Electronegativity: P 2.2, O 3.4.)</p>
      stem: "<p>磷酸根離子 <span class=\"chem\">PO4^3-</span> 的路易斯結構式可以畫成有不同數目的 P=O 雙鍵。在每個結構式中，每個氧原子都有八隅體。磷沒有孤電子對。</p><p>按形式電荷，哪一個結構式較可取？（電負性：P 2.2，O 3.4。）</p>",
      options: [
        // EN: No P=O bonds (four P–O single bonds)
        "沒有 P=O 鍵（四個 P–O 單鍵）",
        // EN: One P=O bond and three P–O bonds
        "一個 P=O 鍵和三個 P–O 鍵",
        // EN: Two P=O bonds and two P–O bonds
        "兩個 P=O 鍵和兩個 P–O 鍵",
        // EN: Four P=O bonds
        "四個 P=O 鍵",
      ],
      hints: [
        // EN: A singly bonded O with three lone pairs has FC = −1. A doubly bonded O with two lone pairs has FC = 0.
        "以單鍵連接、有三個孤電子對的 O，FC = −1。以雙鍵連接、有兩個孤電子對的 O，FC = 0。",
        // EN: For P: FC = 5 − 0 − ½B. Work it out for 4, 5, 6 and 8 bonding pairs.
        "就 P 而言：FC = 5 − 0 − ½B。分別計算有 4、5、6 和 8 個鍵合電子對的情況。",
      ],
      // EN: <div class="worked__math">No P=O: P = 5 − ½(8) = +1; O: four at −1</div><div class="worked__math">One P=O: P = 5 − ½(10) = 0; O: one at 0, three at −1</div><div class="worked__math">Two P=O: P = 5 − ½(12) = −1; O: two at 0, two at −1</div><div class="worked__math">Four P=O: P = 5 − ½(16) = −3; O: four at 0</div><p>Every set adds up to −3. The formula with one P=O has the formal charges closest to zero, and all its negative charges are on oxygen, the more electronegative atom.</p>
      solution: "<div class=\"worked__math\">沒有 P=O：P = 5 − ½(8) = +1；O：四個都是 −1</div><div class=\"worked__math\">一個 P=O：P = 5 − ½(10) = 0；O：一個是 0，三個是 −1</div><div class=\"worked__math\">兩個 P=O：P = 5 − ½(12) = −1；O：兩個是 0，兩個是 −1</div><div class=\"worked__math\">四個 P=O：P = 5 − ½(16) = −3；O：四個都是 0</div><p>每一組加起來都是 −3。有一個 P=O 的結構式，形式電荷最接近零，而且所有負電荷都在氧上，而氧是電負性較高的原子。</p>",
      misconception: {
        // EN (option A): This gives +1 on P and −1 on all four O atoms: five atoms carry a charge. Another formula has fewer charged atoms.
        "0": "這樣 P 是 +1，四個 O 原子全部是 −1：有五個原子帶電荷。另一個結構式的帶電荷原子較少。",
        // EN (option C): This gives −1 on P and −1 on two O atoms. A negative formal charge on phosphorus is not favoured, because oxygen is more electronegative.
        "2": "這樣 P 是 −1，兩個 O 原子是 −1。磷帶負形式電荷並不理想，因為氧的電負性較高。",
        // EN (option D): This gives −3 on phosphorus and 0 on every oxygen. A large negative charge on the less electronegative atom is the worst choice.
        "3": "這樣磷是 −3，每個氧都是 0。把大的負電荷放在電負性較低的原子上，是最差的選擇。",
      },
    },

    // ── s2-2h-q026 · short · challenge · AHL · Structure 2.2.14 · 3 marks
    "s2-2h-q026": {
      // EN: <p>Two Lewis formulas can be drawn for the sulfate ion, <span class="chem">SO4^2-</span>. In both, sulfur has no lone pairs and every oxygen has an octet.</p><ul><li>A: four S–O single bonds</li><li>B: two S=O double bonds and two S–O single bonds</li></ul><p>Calculate the formal charge on sulfur in each formula. Then state which formula is preferred, with a reason.</p>
      stem: "<p>硫酸根離子 <span class=\"chem\">SO4^2-</span> 可以畫出兩個路易斯結構式。在兩個結構式中，硫都沒有孤電子對，每個氧都有八隅體。</p><ul><li>A：四個 S–O 單鍵</li><li>B：兩個 S=O 雙鍵和兩個 S–O 單鍵</li></ul><p>計算 (calculate) 每個結構式中硫的形式電荷。然後寫出 (state) 哪一個結構式較可取，並說明理由。</p>",
      hints: [
        // EN: FC = V − N − ½B, with V = 6 for sulfur.
        "FC = V − N − ½B，硫的 V = 6。",
        // EN: B = 8 in formula A. In formula B, count 4 electrons for each double bond.
        "在結構式 A 中，B = 8。在結構式 B 中，每個雙鍵算 4 個電子。",
      ],
      // EN: <div class="worked__math">A: FC(S) = 6 − 0 − ½(8) = +2; each O = 6 − 6 − ½(2) = −1</div><div class="worked__math">B: FC(S) = 6 − 0 − ½(12) = 0; O (double) = 6 − 4 − ½(4) = 0; O (single) = −1</div><p>Both add up to −2. B has charges closest to zero, so formal charge prefers B. In B sulfur has an expanded octet (12 electrons), which is possible for a period 3 element.</p>
      solution: "<div class=\"worked__math\">A：FC(S) = 6 − 0 − ½(8) = +2；每個 O = 6 − 6 − ½(2) = −1</div><div class=\"worked__math\">B：FC(S) = 6 − 0 − ½(12) = 0；O（雙鍵）= 6 − 4 − ½(4) = 0；O（單鍵）= −1</div><p>兩者加起來都是 −2。B 的電荷最接近零，所以按形式電荷，B 較可取。在 B 中，硫有擴張八隅體（12 個電子），第 3 週期的元素可以這樣。</p>",
      // EN: <p>A: FC(S) = 6 − 0 − ½(8) = +2. B: FC(S) = 6 − 0 − ½(12) = 0. B is preferred, because its formal charges are closest to zero (sulfur is 0 and only two oxygen atoms are −1).</p>
      answer: "<p>A：FC(S) = 6 − 0 − ½(8) = +2。B：FC(S) = 6 − 0 − ½(12) = 0。B 較可取，因為它的形式電荷最接近零（硫是 0，只有兩個氧原子是 −1）。</p>",
      markscheme: [
        // EN: A: formal charge on S = +2.
        "A：S 的形式電荷 = +2。",
        // EN: B: formal charge on S = 0.
        "B：S 的形式電荷 = 0。",
        // EN: B is preferred because its formal charges are closest to zero / fewer atoms have a non-zero formal charge.
        "B 較可取，因為它的形式電荷最接近零／形式電荷不是零的原子較少。",
      ],
    },

    // ── s2-2h-q027 · numeric · foundation · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q027": {
      // EN: <p>How many sigma (σ) bonds are there in one molecule of ethene, <span class="chem">CH2=CH2</span>?</p>
      stem: "<p>一個乙烯分子 <span class=\"chem\">CH2=CH2</span> 中有多少個 σ (sigma) 鍵？</p>",
      hints: [
        // EN: Every single bond is one σ bond. Do not forget the C–H bonds.
        "每個單鍵是一個 σ 鍵。不要忘記 C–H 鍵。",
        // EN: A double bond is one σ bond and one π bond.
        "雙鍵是一個 σ 鍵和一個 π 鍵。",
      ],
      // EN: <div class="worked__math">C–H bonds: 4 σ</div><div class="worked__math">C=C bond: 1 σ (and 1 π)</div><div class="worked__math">Total = 4 + 1 = <b>5 σ bonds</b></div>
      solution: "<div class=\"worked__math\">C–H 鍵：4 個 σ</div><div class=\"worked__math\">C=C 鍵：1 個 σ（和 1 個 π）</div><div class=\"worked__math\">總數 = 4 + 1 = <b>5 個 σ 鍵</b></div>",
      // EN: σ bonds
      unit: "個 σ 鍵",
    },

    // ── s2-2h-q028 · mcq · foundation · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q028": {
      // EN: <p>Which describes how a sigma (σ) bond forms?</p>
      stem: "<p>以下哪一項描述 σ (sigma) 鍵怎樣形成？</p>",
      options: [
        // EN: Head-on overlap of atomic orbitals; electron density is concentrated along the bond axis.
        "原子軌態頭對頭重疊；電子密度集中在鍵軸上。",
        // EN: Sideways overlap of p orbitals; electron density is concentrated above and below the bond axis.
        "p 軌態側向重疊；電子密度集中在鍵軸的上方和下方。",
        // EN: Head-on overlap of atomic orbitals; electron density is concentrated above and below the bond axis.
        "原子軌態頭對頭重疊；電子密度集中在鍵軸的上方和下方。",
        // EN: Transfer of an electron from one atom to the other.
        "一個電子由一個原子轉移到另一個原子。",
      ],
      hints: [
        // EN: The bond axis is the line joining the two nuclei.
        "鍵軸是連接兩個原子核的直線。",
      ],
      // EN: <p>A σ bond forms when two atomic orbitals overlap head-on (end to end). The shared electrons are found mainly on the bond axis, between the nuclei.</p>
      solution: "<p>兩個原子軌態頭對頭（端對端）重疊，就形成 σ 鍵。共用的電子主要在鍵軸上、兩個原子核之間。</p>",
      misconception: {
        // EN (option B): This describes a π bond. A π bond needs p orbitals side by side.
        "1": "這是描述 π 鍵。π 鍵需要並排的 p 軌態。",
        // EN (option C): Head-on overlap puts the electron density between the two nuclei, on the line that joins them. Density on opposite sides of the axis belongs to a π bond.
        "2": "頭對頭重疊令電子密度集中在兩個原子核之間，即連接兩者的直線上。電子密度在鍵軸相對兩側的是 π 鍵。",
        // EN (option D): Electron transfer gives ions and ionic bonding. σ and π bonds are both covalent: electrons are shared.
        "3": "電子轉移會產生離子和離子鍵。σ 鍵和 π 鍵都是共價鍵：電子是共用的。",
      },
    },

    // ── s2-2h-q029 · numeric · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q029": {
      // EN: <p>How many sigma (σ) bonds are there in one molecule of ethanoic acid, <span class="chem">CH3COOH</span>?</p>
      stem: "<p>一個乙酸分子 <span class=\"chem\">CH3COOH</span> 中有多少個 σ (sigma) 鍵？</p>",
      hints: [
        // EN: Draw the full structural formula first: CH<sub>3</sub>–C(=O)–O–H.
        "先畫出完整結構式：CH<sub>3</sub>–C(=O)–O–H。",
        // EN: Count one σ bond for every pair of atoms that are joined, including C–H and O–H.
        "每一對相連的原子算一個 σ 鍵，包括 C–H 和 O–H。",
      ],
      // EN: <div class="worked__math">C–H: 3; C–C: 1; C=O: 1 σ (and 1 π); C–O: 1; O–H: 1</div><div class="worked__math">Total = 3 + 1 + 1 + 1 + 1 = <b>7 σ bonds</b></div><p>Check: a molecule with no rings and 8 atoms has 8 − 1 = 7 σ bonds.</p>
      solution: "<div class=\"worked__math\">C–H：3；C–C：1；C=O：1 個 σ（和 1 個 π）；C–O：1；O–H：1</div><div class=\"worked__math\">總數 = 3 + 1 + 1 + 1 + 1 = <b>7 個 σ 鍵</b></div><p>核對：沒有環而有 8 個原子的分子，有 8 − 1 = 7 個 σ 鍵。</p>",
      // EN: σ bonds
      unit: "個 σ 鍵",
    },

    // ── s2-2h-q030 · mcq · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q030": {
      // EN: <p>How many σ bonds and π bonds are there in one molecule of propenenitrile, <span class="chem">CH2=CH–C≡N</span>?</p>
      stem: "<p>一個丙烯腈 (propenenitrile) 分子 <span class=\"chem\">CH2=CH–C≡N</span> 中有多少個 σ 鍵和 π 鍵？</p>",
      options: [
        // EN: 6 σ and 3 π
        "6 個 σ 鍵和 3 個 π 鍵",
        // EN: 3 σ and 3 π
        "3 個 σ 鍵和 3 個 π 鍵",
        // EN: 6 σ and 2 π
        "6 個 σ 鍵和 2 個 π 鍵",
        // EN: 4 σ and 5 π
        "4 個 σ 鍵和 5 個 π 鍵",
      ],
      hints: [
        // EN: Draw every bond, including the three C–H bonds.
        "畫出每一個鍵，包括三個 C–H 鍵。",
        // EN: Double bond = 1 σ + 1 π. Triple bond = 1 σ + 2 π.
        "雙鍵 = 1 個 σ + 1 個 π。三鍵 = 1 個 σ + 2 個 π。",
      ],
      // EN: <div class="worked__math">σ: C–H 3; C=C 1; C–C 1; C≡N 1; total 6</div><div class="worked__math">π: C=C 1; C≡N 2; total 3</div>
      solution: "<div class=\"worked__math\">σ：C–H 3；C=C 1；C–C 1；C≡N 1；總數 6</div><div class=\"worked__math\">π：C=C 1；C≡N 2；總數 3</div>",
      misconception: {
        // EN (option B): The three C–H bonds are missing. They are hidden in the condensed formula, but each one is a σ bond.
        "1": "漏了三個 C–H 鍵。簡寫結構式沒有把它們畫出來，但每一個都是 σ 鍵。",
        // EN (option C): A triple bond has two π bonds, not one. So C≡N gives 2 π and C=C gives 1 π.
        "2": "三鍵有兩個 π 鍵，不是一個。所以 C≡N 有 2 個 π 鍵，C=C 有 1 個 π 鍵。",
        // EN (option D): This counts every line of a multiple bond as π. One bond in each double or triple bond is always a σ bond.
        "3": "這是把重鍵的每一條線都當成 π 鍵。每個雙鍵或三鍵中，必定有一個是 σ 鍵。",
      },
    },

    // ── s2-2h-q031 · short · exam · AHL · Structure 2.2.15 · 2 marks
    "s2-2h-q031": {
      // EN: <p>The carbon–carbon double bond in ethene is made of one σ bond and one π bond.</p><p>Describe how each bond forms, and state where its electron density is concentrated.</p>
      stem: "<p>乙烯的碳碳雙鍵由一個 σ 鍵和一個 π 鍵組成。</p><p>描述 (describe) 每個鍵怎樣形成，並寫出 (state) 它的電子密度集中在哪裏。</p>",
      hints: [
        // EN: One bond is made by orbitals pointing at each other. The other is made by orbitals standing side by side.
        "一個鍵由互相指向對方的軌態形成。另一個鍵由並排的軌態形成。",
        // EN: Say which type of orbital makes the π bond.
        "說明 π 鍵是由哪一類軌態形成的。",
      ],
      // EN: <p>σ: head-on overlap, density on the axis. π: sideways overlap of p orbitals, density on opposite sides of the axis. A diagram with labels can score these marks.</p>
      solution: "<p>σ：頭對頭重疊，電子密度在鍵軸上。π：p 軌態側向重疊，電子密度在鍵軸的相對兩側。附有標示的圖也可以取得這些分數。</p>",
      // EN: <p>The σ bond forms by head-on (end-to-end) overlap of two orbitals, one from each carbon atom. Its electron density is concentrated along the bond axis, between the two nuclei. The π bond forms by sideways (lateral) overlap of two p orbitals. Its electron density is concentrated above and below the bond axis.</p>
      answer: "<p>σ 鍵由兩個軌態（每個碳原子各一個）頭對頭（端對端）重疊而成。它的電子密度集中在鍵軸上、兩個原子核之間。π 鍵由兩個 p 軌態側向重疊而成。它的電子密度集中在鍵軸的上方和下方。</p>",
      markscheme: [
        // EN: σ: head-on / end-to-end overlap of (atomic or hybrid) orbitals AND electron density along the bond axis / between the nuclei.
        "σ：（原子或雜化）軌態頭對頭／端對端重疊，並且電子密度在鍵軸上／兩個原子核之間。",
        // EN: π: sideways / lateral overlap of p orbitals AND electron density above and below (on opposite sides of) the bond axis.
        "π：p 軌態側向重疊，並且電子密度在鍵軸的上方和下方（相對兩側）。",
      ],
    },

    // ── s2-2h-q032 · order · exam · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q032": {
      // EN: <p>Put these molecules in order of the number of π bonds in one molecule, <strong>fewest first</strong>.</p>
      stem: "<p>按一個分子中 π 鍵的數目排列這些分子，<strong>由最少開始</strong>。</p>",
      options: [
        // EN: <span class="chem">CH3CH3</span> (ethane)
        "<span class=\"chem\">CH3CH3</span>（乙烷）",
        // EN: <span class="chem">CH2=CH2</span> (ethene)
        "<span class=\"chem\">CH2=CH2</span>（乙烯）",
        // EN: <span class="chem">H–C≡N</span> (hydrogen cyanide)
        "<span class=\"chem\">H–C≡N</span>（氰化氫）",
        // EN: <span class="chem">CH2=CH–C≡N</span> (propenenitrile)
        "<span class=\"chem\">CH2=CH–C≡N</span>（丙烯腈）",
      ],
      hints: [
        // EN: Single bond: 0 π. Double bond: 1 π. Triple bond: 2 π.
        "單鍵：0 個 π。雙鍵：1 個 π。三鍵：2 個 π。",
      ],
      // EN: <p>Ethane 0 π; ethene 1 π; hydrogen cyanide 2 π (one triple bond); propenenitrile 3 π (one double bond and one triple bond).</p>
      solution: "<p>乙烷 0 個 π 鍵；乙烯 1 個 π 鍵；氰化氫 2 個 π 鍵（一個三鍵）；丙烯腈 3 個 π 鍵（一個雙鍵和一個三鍵）。</p>",
    },

    // ── s2-2h-q033 · numeric · challenge · AHL · Structure 2.2.15 · 1 mark
    "s2-2h-q033": {
      // EN: <p>A molecule has the condensed structural formula <span class="chem">HC≡C–CH=CH–CHO</span>. The <span class="chem">CHO</span> group contains a C=O double bond and a C–H bond.</p><p>How many sigma (σ) bonds are there in one molecule?</p>
      stem: "<p>某分子的簡寫結構式是 <span class=\"chem\">HC≡C–CH=CH–CHO</span>。<span class=\"chem\">CHO</span> 原子團有一個 C=O 雙鍵和一個 C–H 鍵。</p><p>一個分子中有多少個 σ (sigma) 鍵？</p>",
      hints: [
        // EN: Draw the full structural formula. There are 5 carbon atoms, 4 hydrogen atoms and 1 oxygen atom.
        "畫出完整結構式。分子有 5 個碳原子、4 個氫原子和 1 個氧原子。",
        // EN: Each multiple bond contains exactly one σ bond. Each C–H bond is a σ bond.
        "每個重鍵都只有一個 σ 鍵。每個 C–H 鍵都是 σ 鍵。",
      ],
      // EN: <div class="worked__math">C–H: 4; C≡C: 1 σ; C–C: 2; C=C: 1 σ; C=O: 1 σ</div><div class="worked__math">Total = 4 + 1 + 2 + 1 + 1 = <b>9 σ bonds</b></div><p>Check: 10 atoms and no rings gives 10 − 1 = 9 σ bonds. The molecule also has 2 + 1 + 1 = 4 π bonds.</p>
      solution: "<div class=\"worked__math\">C–H：4；C≡C：1 個 σ；C–C：2；C=C：1 個 σ；C=O：1 個 σ</div><div class=\"worked__math\">總數 = 4 + 1 + 2 + 1 + 1 = <b>9 個 σ 鍵</b></div><p>核對：有 10 個原子而沒有環，所以有 10 − 1 = 9 個 σ 鍵。分子還有 2 + 1 + 1 = 4 個 π 鍵。</p>",
      // EN: σ bonds
      unit: "個 σ 鍵",
    },

    // ── s2-2h-q034 · mcq · foundation · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q034": {
      // EN: <p>What is the hybridization of each carbon atom in ethene, <span class="chem">CH2=CH2</span>?</p>
      stem: "<p>乙烯 <span class=\"chem\">CH2=CH2</span> 中每個碳原子的雜化方式是甚麼？</p>",
      options: [
        // EN: sp
        "sp",
        // EN: sp<sup>2</sup>
        "sp<sup>2</sup>",
        // EN: sp<sup>3</sup>
        "sp<sup>3</sup>",
        // EN: The carbon atoms are not hybridized.
        "碳原子沒有雜化。",
      ],
      hints: [
        // EN: Count the electron domains around one carbon atom. A double bond is one domain.
        "數出一個碳原子周圍的電子域。雙鍵算一個電子域。",
        // EN: 2 domains → sp; 3 domains → sp<sup>2</sup>; 4 domains → sp<sup>3</sup>.
        "2 個電子域 → sp；3 個電子域 → sp<sup>2</sup>；4 個電子域 → sp<sup>3</sup>。",
      ],
      // EN: <p>Each carbon has three electron domains: two C–H bonds and one C=C bond. Three domains means sp<sup>2</sup>, with the domains in a trigonal planar arrangement (120°).</p>
      solution: "<p>每個碳有 3 個電子域：兩個 C–H 鍵和一個 C=C 鍵。3 個電子域就是 sp<sup>2</sup>，電子域排列成平面三角形 (120°)。</p>",
      misconception: {
        // EN (option A): sp is for two electron domains. Each carbon in ethene is joined to three atoms: two H and one C.
        "0": "sp 對應 2 個電子域。乙烯中每個碳連接三個原子：兩個 H 和一個 C。",
        // EN (option C): sp<sup>3</sup> is for four electron domains. A double bond counts as one domain, so each carbon has three.
        "2": "sp<sup>3</sup> 對應 4 個電子域。雙鍵算一個電子域，所以每個碳有 3 個。",
        // EN (option D): Carbon atoms that form bonds in molecules are described as sp, sp<sup>2</sup> or sp<sup>3</sup> hybridized.
        "3": "在分子中形成鍵的碳原子，會描述為 sp、sp<sup>2</sup> 或 sp<sup>3</sup> 雜化。",
      },
    },

    // ── s2-2h-q035 · mcq · exam · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q035": {
      // EN: <p>The molecule <span class="chem">CH3–CO–C≡CH</span> contains a C=O double bond and a C≡C triple bond. What is the hybridization of the carbon atom in each group?</p>
      stem: "<p>分子 <span class=\"chem\">CH3–CO–C≡CH</span> 有一個 C=O 雙鍵和一個 C≡C 三鍵。各原子團中碳原子的雜化方式是甚麼？</p>",
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
        "數出每個碳連接多少個原子。這裏的碳沒有孤電子對，所以這就是它的電子域數目。",
        // EN: Multiple bonds count as one domain each.
        "每個重鍵算一個電子域。",
      ],
      // EN: <p><span class="chem">CH3</span> carbon: four single bonds, four domains, sp<sup>3</sup>. C=O carbon: joined to C, O and C, three domains, sp<sup>2</sup>. Each C≡C carbon: joined to two atoms, two domains, sp.</p>
      solution: "<p><span class=\"chem\">CH3</span> 的碳：四個單鍵，4 個電子域，sp<sup>3</sup>。C=O 的碳：連接 C、O 和 C，3 個電子域，sp<sup>2</sup>。C≡C 的每個碳：連接兩個原子，2 個電子域，sp。</p>",
      misconception: {
        // EN (option B): Not every carbon is sp<sup>3</sup>. Only a carbon with four electron domains (four single bonds) is sp<sup>3</sup>.
        "1": "不是每個碳都是 sp<sup>3</sup>。只有具 4 個電子域（四個單鍵）的碳才是 sp<sup>3</sup>。",
        // EN (option C): These two are swapped. The C=O carbon is joined to three atoms (three domains, sp<sup>2</sup>). A triply bonded carbon is joined to two atoms (two domains, sp).
        "2": "這兩個調亂了。C=O 的碳連接三個原子（3 個電子域，sp<sup>2</sup>）。有三鍵的碳連接兩個原子（2 個電子域，sp）。",
        // EN (option D): A carbon in a triple bond has only two electron domains: the triple bond and one single bond. Two domains means sp.
        "3": "三鍵上的碳只有 2 個電子域：三鍵和一個單鍵。2 個電子域就是 sp。",
      },
    },

    // ── s2-2h-q036 · multi · exam · AHL · Structure 2.2.16 · 2 marks
    "s2-2h-q036": {
      // EN: <p>In which of these is the named atom sp<sup>2</sup> hybridized? Select all that apply.</p>
      stem: "<p>在以下哪些物種中，所指的原子是 sp<sup>2</sup> 雜化？選出所有正確選項。</p>",
      options: [
        // EN: B in <span class="chem">BF3</span>
        "<span class=\"chem\">BF3</span> 中的 B",
        // EN: C in <span class="chem">HCHO</span> (methanal)
        "<span class=\"chem\">HCHO</span>（甲醛）中的 C",
        // EN: N in <span class="chem">NH3</span>
        "<span class=\"chem\">NH3</span> 中的 N",
        // EN: C in <span class="chem">CO2</span>
        "<span class=\"chem\">CO2</span> 中的 C",
        // EN: Each C in <span class="chem">C2H4</span>
        "<span class=\"chem\">C2H4</span> 中的每個 C",
      ],
      hints: [
        // EN: sp<sup>2</sup> means three electron domains around the atom.
        "sp<sup>2</sup> 表示原子周圍有 3 個電子域。",
        // EN: Lone pairs count as domains. A double bond counts as one domain.
        "孤電子對也算電子域。雙鍵算一個電子域。",
      ],
      // EN: <p>Three domains: B in <span class="chem">BF3</span> (three bonds, no lone pair); C in methanal (two C–H and one C=O); each C in ethene (two C–H and one C=C). N in <span class="chem">NH3</span> has four domains (sp<sup>3</sup>). C in <span class="chem">CO2</span> has two domains (sp).</p>
      solution: "<p>有 3 個電子域的：<span class=\"chem\">BF3</span> 中的 B（三個鍵，沒有孤電子對）；甲醛中的 C（兩個 C–H 和一個 C=O）；乙烯中的每個 C（兩個 C–H 和一個 C=C）。<span class=\"chem\">NH3</span> 中的 N 有 4 個電子域 (sp<sup>3</sup>)。<span class=\"chem\">CO2</span> 中的 C 有 2 個電子域 (sp)。</p>",
      misconception: {
        // EN (option C): Nitrogen in ammonia has three bonds and one lone pair. The lone pair is a domain too: four domains, so sp<sup>3</sup>. Count domains, not bonds.
        "2": "氨中的氮有三個鍵和一個孤電子對。孤電子對也是電子域：共 4 個電子域，所以是 sp<sup>3</sup>。要數電子域，不是數鍵。",
        // EN (option D): Carbon in CO<sub>2</sub> has two double bonds. Each double bond is one domain: two domains, so sp.
        "3": "CO<sub>2</sub> 中的碳有兩個雙鍵。每個雙鍵是一個電子域：共 2 個電子域，所以是 sp。",
      },
    },

    // ── s2-2h-q037 · mcq · exam · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q037": {
      // EN: <p>The Lewis formula of carbon dioxide is O=C=O, with two lone pairs on each oxygen atom. What is the hybridization of the carbon atom and of each oxygen atom?</p>
      stem: "<p>二氧化碳的路易斯結構式是 O=C=O，每個氧原子上有兩個孤電子對。碳原子和每個氧原子的雜化方式是甚麼？</p>",
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
        "碳：兩個雙鍵，沒有孤電子對。有多少個電子域？",
        // EN: Oxygen: one double bond and two lone pairs. How many domains?
        "氧：一個雙鍵和兩個孤電子對。有多少個電子域？",
      ],
      // EN: <p>Carbon: two domains → sp (linear, 180°). Each oxygen: one bonded atom + two lone pairs = three domains → sp<sup>2</sup>.</p>
      solution: "<p>碳：2 個電子域 → sp（直線形，180°）。每個氧：一個相連的原子 + 兩個孤電子對 = 3 個電子域 → sp<sup>2</sup>。</p>",
      misconception: {
        // EN (option B): Carbon is joined to two atoms and has no lone pairs: two domains, so sp. Its shape is linear, not trigonal planar.
        "1": "碳連接兩個原子，沒有孤電子對：2 個電子域，所以是 sp。它的形狀是直線形，不是平面三角形。",
        // EN (option C): Each oxygen has one double bond (one domain) and two lone pairs (two domains). That is three domains, not four.
        "2": "每個氧有一個雙鍵（一個電子域）和兩個孤電子對（兩個電子域）。共 3 個電子域，不是 4 個。",
        // EN (option D): Carbon forms four bonds here, but they are two double bonds. Two double bonds are two domains.
        "3": "這裏的碳形成四個鍵，但它們是兩個雙鍵。兩個雙鍵是 2 個電子域。",
      },
    },

    // ── s2-2h-q038 · mcq · challenge · AHL · Structure 2.2.16 · 1 mark
    "s2-2h-q038": {
      // EN: <p>Ethene reacts with hydrogen to form ethane: <span class="chem">C2H4 + H2 -> C2H6</span>. What happens at each carbon atom during this reaction?</p>
      stem: "<p>乙烯與氫反應，生成乙烷：<span class=\"chem\">C2H4 + H2 -> C2H6</span>。反應期間，每個碳原子有甚麼變化？</p>",
      options: [
        // EN: Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 120° to about 109.5°.
        "雜化方式由 sp<sup>2</sup> 變為 sp<sup>3</sup>。鍵角由約 120° 變為約 109.5°。",
        // EN: Hybridization changes from sp<sup>2</sup> to sp<sup>3</sup>. The bond angles change from about 109.5° to about 120°.
        "雜化方式由 sp<sup>2</sup> 變為 sp<sup>3</sup>。鍵角由約 109.5° 變為約 120°。",
        // EN: Hybridization changes from sp to sp<sup>2</sup>. The bond angles change from 180° to about 120°.
        "雜化方式由 sp 變為 sp<sup>2</sup>。鍵角由 180° 變為約 120°。",
        // EN: Hybridization changes from sp<sup>3</sup> to sp<sup>2</sup>. The bond angles change from about 109.5° to about 120°.
        "雜化方式由 sp<sup>3</sup> 變為 sp<sup>2</sup>。鍵角由約 109.5° 變為約 120°。",
      ],
      hints: [
        // EN: Count the electron domains around a carbon atom in ethene, then in ethane.
        "先數出乙烯中一個碳原子周圍的電子域，再數乙烷的。",
        // EN: Match each hybridization to its geometry: sp<sup>2</sup> trigonal planar, sp<sup>3</sup> tetrahedral.
        "把每種雜化方式與它的幾何形狀配對：sp<sup>2</sup> 是平面三角形，sp<sup>3</sup> 是四面體形。",
      ],
      // EN: <p>In ethene each carbon has three domains: sp<sup>2</sup>, trigonal planar, about 120°. In ethane each carbon has four domains: sp<sup>3</sup>, tetrahedral, about 109.5°. The π bond is lost and two new σ C–H bonds form.</p>
      solution: "<p>在乙烯中，每個碳有 3 個電子域：sp<sup>2</sup>，平面三角形，約 120°。在乙烷中，每個碳有 4 個電子域：sp<sup>3</sup>，四面體形，約 109.5°。π 鍵消失，並形成兩個新的 C–H σ 鍵。</p>",
      misconception: {
        // EN (option B): The hybridization is right but the angles are the wrong way round. sp<sup>2</sup> goes with 120° and sp<sup>3</sup> with 109.5°.
        "1": "雜化方式是對的，但鍵角弄反了。sp<sup>2</sup> 對應 120°，sp<sup>3</sup> 對應 109.5°。",
        // EN (option C): sp and 180° belong to a carbon in a triple bond, such as in ethyne. Ethene has a double bond.
        "2": "sp 和 180° 屬於三鍵上的碳，例如乙炔中的碳。乙烯有的是雙鍵。",
        // EN (option D): This is the reverse reaction. Ethene (three domains per carbon) is the reactant; ethane (four domains per carbon) is the product.
        "3": "這是逆向的反應。乙烯（每個碳有 3 個電子域）是反應物；乙烷（每個碳有 4 個電子域）是生成物。",
      },
    },

    // ── s2-2h-q039 · short · challenge · AHL · Structure 2.2.16 · 3 marks
    "s2-2h-q039": {
      // EN: <p>Hydrogen cyanide has the structure H–C≡N, with one lone pair on nitrogen.</p><p>Analyse the bonding around the carbon atom. State its hybridization and the H–C–N bond angle, and describe how the σ bonds and the π bonds to carbon are formed.</p>
      stem: "<p>氰化氫的結構是 H–C≡N，氮上有一個孤電子對。</p><p>分析 (analyse) 碳原子周圍的鍵合。寫出 (state) 它的雜化方式和 H–C–N 鍵角，並描述 (describe) 連接碳的 σ 鍵和 π 鍵怎樣形成。</p>",
      hints: [
        // EN: Count the electron domains around carbon. A triple bond is one domain.
        "數出碳周圍的電子域。三鍵算一個電子域。",
        // EN: An sp carbon has two hybrid orbitals and two p orbitals left unmixed. Which make σ bonds and which make π bonds?
        "sp 碳有兩個雜化軌態，還有兩個沒有混合的 p 軌態。哪些形成 σ 鍵，哪些形成 π 鍵？",
      ],
      // EN: <p>Two domains → sp → linear, 180°. The two sp hybrid orbitals point in opposite directions and make the two σ bonds (to H and to N) by head-on overlap. The two unmixed p orbitals are at right angles to each other. Each overlaps sideways with a p orbital on nitrogen, giving two π bonds. Triple bond = 1 σ + 2 π.</p>
      solution: "<p>2 個電子域 → sp → 直線形，180°。兩個 sp 雜化軌態指向相反方向，以頭對頭重疊形成兩個 σ 鍵（連接 H 和連接 N）。兩個沒有混合的 p 軌態互成直角。每個都與氮的一個 p 軌態側向重疊，形成兩個 π 鍵。三鍵 = 1 個 σ + 2 個 π。</p>",
      // EN: <p>Carbon has two electron domains (one single bond and one triple bond), so it is sp hybridized and the H–C–N angle is 180°. The C–H σ bond forms by head-on overlap of an sp hybrid orbital on carbon with the 1s orbital of hydrogen. The C–N σ bond forms by head-on overlap of the other sp hybrid orbital on carbon with a hybrid orbital on nitrogen. The two π bonds form by sideways overlap of the two unhybridized p orbitals on carbon with two p orbitals on nitrogen.</p>
      answer: "<p>碳有 2 個電子域（一個單鍵和一個三鍵），所以是 sp 雜化，H–C–N 鍵角是 180°。C–H σ 鍵由碳的一個 sp 雜化軌態與氫的 1s 軌態頭對頭重疊而成。C–N σ 鍵由碳的另一個 sp 雜化軌態與氮的一個雜化軌態頭對頭重疊而成。兩個 π 鍵由碳的兩個未雜化 p 軌態與氮的兩個 p 軌態側向重疊而成。</p>",
      markscheme: [
        // EN: Carbon is sp hybridized AND the bond angle is 180° (two electron domains).
        "碳是 sp 雜化，並且鍵角是 180°（2 個電子域）。",
        // EN: σ bonds: head-on overlap of sp hybrid orbitals of carbon (with 1s of H / with an orbital on N).
        "σ 鍵：碳的 sp 雜化軌態（與 H 的 1s 軌態／與 N 的一個軌態）頭對頭重疊。",
        // EN: Two π bonds: sideways (lateral) overlap of the (unhybridized) p orbitals on carbon and nitrogen.
        "兩個 π 鍵：碳和氮的（未雜化）p 軌態側向重疊。",
      ],
    },

    // ── s2-2h-q040 · numeric · foundation · AHL · Structure 2.2.3 · 1 mark
    "s2-2h-q040": {
      // EN: <p>In the complex ion <span class="chem">[Fe(H2O)6]^3+</span>, six water molecules are bonded to one <span class="chem">Fe^3+</span> ion.</p><p>How many coordination bonds are there in one complex ion?</p>
      stem: "<p>在絡離子 <span class=\"chem\">[Fe(H2O)6]^3+</span> 中，六個水分子與一個 <span class=\"chem\">Fe^3+</span> 離子鍵合。</p><p>一個絡離子中有多少個配位鍵？</p>",
      hints: [
        // EN: A coordination bond is a covalent bond in which both shared electrons come from the same atom.
        "配位鍵是一種共價鍵，共用的兩個電子都來自同一個原子。",
        // EN: Each water molecule donates one lone pair from its oxygen atom to the metal ion.
        "每個水分子由氧原子給出一個孤電子對予金屬離子。",
      ],
      // EN: <p>Each of the six water molecules donates one lone pair to the <span class="chem">Fe^3+</span> ion. That makes <b>6</b> coordination bonds. The O–H bonds inside each water molecule are ordinary covalent bonds, so they are not counted.</p>
      solution: "<p>六個水分子各給出一個孤電子對予 <span class=\"chem\">Fe^3+</span> 離子，所以有 <b>6</b> 個配位鍵。每個水分子內的 O–H 鍵是普通的共價鍵，所以不計算在內。</p>",
      // EN: coordination bonds
      unit: "個配位鍵",
    },

    // ── s2-2h-q041 · mcq · exam · AHL · Structure 2.2.3 · 1 mark
    "s2-2h-q041": {
      // EN: <p>In the complex ion <span class="chem">[Cu(NH3)4(H2O)2]^2+</span>, each ammonia molecule is bonded to the copper ion. Which describes the bond between one ammonia molecule and the copper ion?</p>
      stem: "<p>在絡離子 <span class=\"chem\">[Cu(NH3)4(H2O)2]^2+</span> 中，每個氨分子都與銅離子鍵合。以下哪一項描述一個氨分子與銅離子之間的鍵？</p>",
      options: [
        // EN: A coordination bond: both electrons of the shared pair come from the nitrogen atom.
        "配位鍵：共用電子對的兩個電子都來自氮原子。",
        // EN: A coordination bond: both electrons of the shared pair come from the copper ion.
        "配位鍵：共用電子對的兩個電子都來自銅離子。",
        // EN: A covalent bond: one electron comes from the nitrogen atom and one from the copper ion.
        "共價鍵：一個電子來自氮原子，一個來自銅離子。",
        // EN: An ionic bond: ammonia has gained electrons from the copper ion.
        "離子鍵：氨從銅離子取得了電子。",
      ],
      hints: [
        // EN: Draw the Lewis formula of ammonia. What does nitrogen have besides its three bonds?
        "畫出氨的路易斯結構式。氮除了三個鍵以外，還有甚麼？",
        // EN: Which particle is short of electrons: the positive metal ion or the ammonia molecule?
        "哪一個粒子缺少電子：帶正電荷的金屬離子，還是氨分子？",
      ],
      // EN: <p>Nitrogen in ammonia has one lone pair. It donates this pair to the <span class="chem">Cu^2+</span> ion. Both electrons of the shared pair come from the same atom (nitrogen), so the bond is a coordination bond. The ion has six coordination bonds: four from ammonia and two from water.</p>
      solution: "<p>氨中的氮有一個孤電子對。它把這對電子給予 <span class=\"chem\">Cu^2+</span> 離子。共用電子對的兩個電子都來自同一個原子（氮），所以這個鍵是配位鍵。這個離子有六個配位鍵：四個來自氨，兩個來自水。</p>",
      misconception: {
        // EN (option B): The direction is reversed. The copper ion is positive and accepts the electron pair. The lone pair is on the nitrogen atom of ammonia.
        "1": "方向反了。銅離子帶正電荷，是接受電子對的一方。孤電子對在氨的氮原子上。",
        // EN (option C): That describes an ordinary covalent bond. Here the nitrogen atom supplies both electrons, from its lone pair.
        "2": "這是描述普通的共價鍵。這裏兩個電子都由氮原子提供，來自它的孤電子對。",
        // EN (option D): Ammonia is a neutral molecule and stays a molecule in the complex. No electrons are transferred to it. It shares its lone pair with the copper ion.
        "3": "氨是中性分子，在絡合物中仍然是分子。沒有電子轉移給它。它是把孤電子對與銅離子共用。",
      },
    },

  }
});
