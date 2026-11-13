/* s2-3 — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's2-3', {
  strings: {

    // page title (browser tab)
    "2.3 The metallic model | Structure Lab": "2.3 金属結合モデル | Structure Lab",

    // The metallic model > page header > p
    "Structure 2.3": "Structure 2.3",

    // The metallic model > page header > h1
    "The metallic model": "金属結合モデル",

    // The metallic model > page header > span
    "What determines the metallic nature and properties of an element?": "元素の金属らしさや金属の性質は、何で決まるのでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes.": "ノートを見ないでできるようになったら、1 つずつチェックを付けましょう。",

    // What you need to be able to do > checklist > span
    "Describe a metallic bond as the electrostatic attraction between a lattice of cations and delocalized electrons.": "金属結合を、陽イオンの結晶格子と非局在化電子の間の静電気的な引力として記述する。",

    // What you need to be able to do > checklist > span
    "Explain why metals conduct electricity.": "金属が電気を通す理由を説明する。",

    // What you need to be able to do > checklist > span
    "Explain why metals conduct heat.": "金属が熱を伝える理由を説明する。",

    // What you need to be able to do > checklist > span
    // widget string (assets/js/widgets-s2-3.js)
    "Explain why metals are malleable.": "金属に展性がある理由を説明する。",

    // What you need to be able to do > checklist > span
    "Relate the properties of a metal to the way it is used.": "金属の性質を、その使われ方と結びつける。",

    // What you need to be able to do > checklist > span
    "Explain how the charge and the radius of the metal ion affect the strength of a metallic bond.": "金属イオンの電荷と半径が、金属結合の強さにどう影響するかを説明する。",

    // What you need to be able to do > checklist > span
    "Explain trends in the melting points of s-block and p-block metals.": "s ブロックと p ブロックの金属の融点の傾向を説明する。",

    // What you need to be able to do > checklist > Additional HL > span
    "Explain the high melting points and the electrical conductivity of transition elements, using their delocalized d-electrons.": "遷移元素の高い融点と電気伝導性を、非局在化した d 電子を使って説明する。",

    // The metallic bond > data-toc attribute
    // The metallic bond > h2
    "The metallic bond": "金属結合",

    // The metallic bond > p
    "Pick up a metal spoon. It is shiny and it bends before it breaks. It feels cold, because it carries heat away from your hand quickly. One model of bonding explains all of this.": "金属のスプーンを手に取ってみましょう。表面は光っていて、折れる前に曲がります。さわると冷たく感じます。手の熱をすばやく運び去るからです。これらはすべて、1 つの結合モデルで説明できます。",

    // The metallic bond > p
    "A metal atom has only a few outer electrons, and it does not hold them strongly. In a piece of metal, these outer electrons leave their own atoms. They are no longer tied to any one atom. They can move through the whole piece of metal.": "金属の原子は、外側の電子が少なく、それを強く引きつけていません。金属のかたまりの中では、この外側の電子が自分の原子から離れます。もう、どれか 1 つの原子に結びついてはいません。金属全体を動き回れます。",

    // The metallic bond > p
    "Electrons like this are called <dfn data-def=\"Electrons that are not tied to one atom or one bond. In a metal they can move through the whole structure.\">delocalized electrons</dfn>. “Delocalized” means “not in one fixed place”.": "このような電子を<dfn data-def=\"1 つの原子や 1 つの結合に結びついていない電子。金属では、構造全体を動き回れる。\">非局在化電子 <span class=\"en-term\">(delocalized electrons)</span></dfn>（自由電子）といいます。「delocalized」は「決まった 1 か所にいない」という意味です。",

    // The metallic bond > data-def attribute
    "Electrons that are not tied to one atom or one bond. In a metal they can move through the whole structure.": "1 つの原子や 1 つの結合に結びついていない電子。金属では、構造全体を動き回れる。",

    // The metallic bond > p
    "Each atom that has lost its outer electrons is now a positive ion, a <dfn data-def=\"A positive ion. It has fewer electrons than protons.\">cation</dfn>. The cations are packed in a regular, repeating pattern called a <dfn data-def=\"A regular, repeating three-dimensional arrangement of particles.\">lattice</dfn>.": "外側の電子を失った原子は、正の電荷をもつイオン、つまり<dfn data-def=\"正の電荷をもつイオン。電子の数が陽子の数より少ない。\">陽イオン <span class=\"en-term\">(cation)</span></dfn>になります。陽イオンは、規則正しいパターンをくり返して並んでいます。この並びを<dfn data-def=\"粒子が規則正しくくり返して並んだ、立体的な配列。\">結晶格子 <span class=\"en-term\">(lattice)</span></dfn>といいます。",

    // The metallic bond > data-def attribute
    "A positive ion. It has fewer electrons than protons.": "正の電荷をもつイオン。電子の数が陽子の数より少ない。",

    // The metallic bond > data-def attribute
    "A regular, repeating three-dimensional arrangement of particles.": "粒子が規則正しくくり返して並んだ、立体的な配列。",

    // The metallic bond > p
    "The cations are positive. The delocalized electrons are negative. Opposite charges attract, and this attraction holds the metal together.": "陽イオンは正の電荷、非局在化電子は負の電荷をもちます。反対の電荷は引き合います。この引力が金属をまとめています。",

    // The metallic bond > key idea > p
    "A <dfn>metallic bond</dfn> is the electrostatic attraction between a lattice of cations and delocalized electrons.": "<dfn>金属結合 <span class=\"en-term\">(metallic bond)</span></dfn>は、陽イオンの結晶格子と非局在化電子の間の静電気的な引力です。",

    // The metallic bond > p
    "<dfn data-def=\"Attraction between particles with opposite electric charges.\">Electrostatic attraction</dfn> means attraction between opposite charges. You used the same words for the ionic bond in Structure 2.1 and the covalent bond in Structure 2.2. The three bonds differ in <em>which</em> particles attract each other.": "<dfn data-def=\"反対の電荷をもつ粒子の間にはたらく引力。\">静電気的な引力 <span class=\"en-term\">(electrostatic attraction)</span></dfn>とは、反対の電荷の間にはたらく引力のことです。Structure 2.1 のイオン結合でも、Structure 2.2 の共有結合でも、同じ言葉を使いました。3 つの結合の違いは、<em>どの</em>粒子どうしが引き合うかです。",

    // The metallic bond > data-def attribute
    "Attraction between particles with opposite electric charges.": "反対の電荷をもつ粒子の間にはたらく引力。",

    // The metallic bond > table > caption
    "Three bonds, one kind of attraction": "3 つの結合、引力は 1 種類",

    // The metallic bond > table > th
    "Bond": "結合",

    // The metallic bond > table > th
    "The electrostatic attraction is between": "何と何の間の静電気的な引力か",

    // The metallic bond > table > th
    "ionic": "イオン結合",

    // The metallic bond > table > td
    "oppositely charged ions (cations and anions)": "反対の電荷をもつイオン（陽イオンと陰イオン）",

    // The metallic bond > table > th
    "covalent": "共有結合",

    // The metallic bond > table > td
    "a shared pair of electrons and the two positively charged nuclei": "共有電子対と、正の電荷をもつ 2 つの原子核",

    // The metallic bond > table > th
    "metallic": "金属結合",

    // The metallic bond > table > td
    "a lattice of cations and delocalized electrons": "陽イオンの結晶格子と非局在化電子",

    // The metallic bond > h3
    "The bond has no direction": "結合に方向性がない",

    // The metallic bond > p
    "A covalent bond joins two particular atoms. A metallic bond does not. The delocalized electrons are spread through the whole lattice, so each cation is attracted to the electrons all around it, in every direction.": "共有結合は、決まった 2 つの原子を結びつけます。金属結合はそうではありません。非局在化電子は結晶格子全体に広がっています。そのため、どの陽イオンも、まわりのあらゆる方向にある電子に引きつけられます。",

    // The metallic bond > p
    "Chemists say the metallic bond is <dfn data-def=\"Acting equally in all directions, not along a line between two particular atoms.\">non-directional</dfn>. This one idea explains why you can change the shape of a metal. You will use it in the next section.": "化学では、金属結合には<dfn data-def=\"決まった 2 つの原子を結ぶ線に沿ってではなく、すべての方向に同じようにはたらくこと。\">方向性がない <span class=\"en-term\">(non-directional)</span></dfn>といいます。金属の形を変えられる理由は、この 1 つの考え方で説明できます。次のセクションで使います。",

    // The metallic bond > data-def attribute
    "Acting equally in all directions, not along a line between two particular atoms.": "決まった 2 つの原子を結ぶ線に沿ってではなく、すべての方向に同じようにはたらくこと。",

    // The metallic bond > widget > data-title attribute
    "Inside a piece of metal": "金属の中をのぞく",

    // The metallic bond > widget > figcaption
    "Start with “No voltage, no heating” and watch which particles move. Then try the other three choices. This is a model, not a photograph. The picture is flat and has only a few rows. Each cation is drawn with one delocalized electron, as in sodium. The electrons are drawn as small dots, and their drift in a voltage is made much larger than in real life so that you can see it.": "まず「電圧も加熱もなし」で、どの粒子が動くかを見ましょう。次に、ほかの 3 つも試してください。これはモデルで、写真ではありません。図は平面で、数段しか描いていません。陽イオン 1 個につき、非局在化電子を 1 個描いています。ナトリウムと同じです。電子は小さな点で描いています。電圧をかけたときの電子の流れは、見えるように実際よりずっと大きくしてあります。",

    // The metallic bond > exam tip (shown in English + translation) > p
    "A full description needs three things: “electrostatic attraction”, “lattice of cations” (or positive ions) and “delocalized electrons”. Some books call the electrons “a sea of electrons”. That is only a picture. In the exam, use the word “delocalized” and say what the electrons are attracted to.": "完全な記述には 3 つの要素が必要です。「electrostatic attraction」（静電気的な引力）、「lattice of cations」（陽イオンの結晶格子。positive ions と書いてもよい）、「delocalized electrons」（非局在化電子）です。電子を「sea of electrons」（電子の海）と呼ぶ本もありますが、これはイメージにすぎません。試験では「delocalized」という語を使い、電子が何に引きつけられているかを書きましょう。",

    // The metallic bond > common mistake > p
    "The attraction is <em>not</em> between the metal ions. The cations are all positive, so they repel each other. It is also not between the electrons. The attraction is between the cations and the delocalized electrons.": "引力は、金属イオンどうしの間にはたらくのでは<em>ありません</em>。陽イオンはすべて正の電荷をもつので、たがいに反発します。電子どうしの間でもありません。引力は、陽イオンと非局在化電子の間にはたらきます。",

    // The metallic bond > common mistake > data-title attribute
    "Common mistake: molecules": "よくある間違い：分子",

    // The metallic bond > common mistake > p
    "A metal contains no molecules, so it has no intermolecular forces. Never write “intermolecular forces” or “molecules” in an answer about a metal. Write “metallic bonding”.": "金属には分子がないので、分子間力もありません。金属についての答えに「intermolecular forces」（分子間力）や「molecules」（分子）と書いてはいけません。「metallic bonding」（金属結合）と書きます。",

    // The metallic bond > not needed for IB > p
    "You do not need band theory. You do not need the names of the ways that metal atoms pack together (such as body-centred cubic, face-centred cubic or hexagonal close packing) or any unit cells. “A lattice of cations” is enough.": "バンド理論は必要ありません。金属原子の詰まり方の名前（体心立方格子、面心立方格子、六方最密構造など）や単位格子も必要ありません。「陽イオンの結晶格子」(a lattice of cations) で十分です。",

    // Explaining the properties of metals > data-toc attribute
    "Properties of metals": "金属の性質",

    // Explaining the properties of metals > h2
    "Explaining the properties of metals": "金属の性質を説明する",

    // Explaining the properties of metals > p
    "The syllabus names three properties that you must be able to explain: electrical conductivity, thermal conductivity and malleability. Each explanation starts from the same picture: a lattice of cations and delocalized electrons.": "シラバスは、説明できなければならない性質を 3 つ挙げています。電気伝導性 (electrical conductivity)、熱伝導性 (thermal conductivity)、展性 (malleability) です。どの説明も、同じ図から始まります。陽イオンの結晶格子と非局在化電子です。",

    // Explaining the properties of metals > h3
    // Transition elements: delocalized d-electrons > Additional HL > h3
    // widget string (assets/js/widgets-s2-3.js)
    "Electrical conductivity": "電気伝導性",

    // Explaining the properties of metals > p
    "An electric current is a flow of charged particles. So a substance conducts electricity only if it contains charged particles that are free to move.": "電流は、電荷をもつ粒子の流れです。だから、物質が電気を通すのは、自由に動ける電荷をもつ粒子を含むときだけです。",

    // Explaining the properties of metals > p
    "A metal has them: the delocalized electrons. When you connect a voltage across a metal, the delocalized electrons drift towards the positive terminal. New electrons enter the metal from the negative terminal. The cations stay where they are.": "金属にはそれがあります。非局在化電子です。金属に電圧をかけると、非局在化電子は正極の方へ流れていきます。負極からは、新しい電子が金属に入ってきます。陽イオンはその場にとどまります。",

    // Explaining the properties of metals > p
    "The delocalized electrons are still there when the metal melts. So a metal conducts electricity as a solid <em>and</em> as a liquid.": "金属が融解しても、非局在化電子はなくなりません。だから金属は、固体でも液体で<em>も</em>電気を通します。",

    // Explaining the properties of metals > common mistake > p
    "Do not write “the ions move” or “free ions” for a metal. In a solid metal the cations only vibrate about fixed positions. It is the delocalized <em>electrons</em> that move and carry the charge. Moving ions carry the charge in molten or dissolved ionic compounds (Structure 2.1).": "金属について「the ions move」（イオンが動く）や「free ions」（自由なイオン）と書いてはいけません。固体の金属では、陽イオンは決まった位置で振動するだけです。動いて電荷を運ぶのは、非局在化<em>電子</em>です。イオンが動いて電荷を運ぶのは、融解したイオン化合物や、溶かしたイオン化合物です（Structure 2.1）。",

    // Explaining the properties of metals > h3
    // widget string (assets/js/widgets-s2-3.js)
    "Thermal conductivity": "熱伝導性",

    // Explaining the properties of metals > p
    "<dfn data-def=\"How well a material lets heat pass through it.\">Thermal conductivity</dfn> is how well a material lets heat pass through it. Heating one end of a metal gives the particles there more kinetic energy.": "<dfn data-def=\"材料がどれだけ熱を伝えやすいか。\">熱伝導性 <span class=\"en-term\">(thermal conductivity)</span></dfn>は、材料がどれだけ熱を伝えやすいかを表します。金属の一方の端を加熱すると、そこの粒子の運動エネルギーが大きくなります。",

    // Explaining the properties of metals > data-def attribute
    "How well a material lets heat pass through it.": "材料がどれだけ熱を伝えやすいか。",

    // Explaining the properties of metals > p
    "The delocalized electrons at the hot end move faster. They are free to move through the structure, so they carry this kinetic energy to the cooler parts quickly.": "熱い側の非局在化電子は、速く動くようになります。この電子は構造の中を自由に動けるので、運動エネルギーを温度の低い部分へすばやく運びます。",

    // Explaining the properties of metals > p
    "The cations help too. They are packed closely together. A cation that vibrates strongly passes some of its energy to its neighbours.": "陽イオンも役に立ちます。陽イオンはすき間なく詰まっています。強く振動している陽イオンは、エネルギーの一部をとなりの陽イオンに伝えます。",

    // Explaining the properties of metals > h3
    // widget string (assets/js/widgets-s2-3.js)
    "Malleability": "展性",

    // Explaining the properties of metals > p
    "A <dfn data-def=\"Able to be hammered or pressed into a new shape without breaking.\">malleable</dfn> material can be hammered or pressed into a new shape without breaking. Metals are malleable. Most can also be pulled into wires.": "<dfn data-def=\"たたいたり押したりして、割れずに新しい形にできること。\">展性がある <span class=\"en-term\">(malleable)</span></dfn>材料は、たたいたり押したりしても割れずに、新しい形にできます。金属には展性があります。ほとんどの金属は、引きのばして線にすることもできます。",

    // Explaining the properties of metals > data-def attribute
    "Able to be hammered or pressed into a new shape without breaking.": "たたいたり押したりして、割れずに新しい形にできること。",

    // Explaining the properties of metals > p
    "The cations in a metal are arranged in layers. When a force is applied, one layer can slide over the next.": "金属の中の陽イオンは、層になって並んでいます。力を加えると、1 つの層がとなりの層の上をすべります。",

    // Explaining the properties of metals > p
    "After the slide, each cation has moved to a new position. But the delocalized electrons are still all around it. The attraction is still there, because the metallic bond is non-directional. The bond is not broken. The metal has a new shape.": "すべったあと、それぞれの陽イオンは新しい位置にいます。それでも、まわりにはやはり非局在化電子があります。金属結合には方向性がないので、引力はなくなりません。結合は切れていません。金属は新しい形になります。",

    // Explaining the properties of metals > p
    "Compare this with an ionic crystal. If a layer of ions slides, ions with the same charge come next to each other. They repel, and the crystal splits. That is why an ionic crystal is brittle. Choose “Hit it with a hammer” in the model above to see both.": "イオン結晶とくらべてみましょう。イオンの層がすべると、同じ電荷のイオンがとなり合います。すると反発して、結晶が割れます。イオン結晶がもろい (brittle) のはこのためです。上のモデルで「ハンマーでたたく」を選ぶと、両方を見られます。",

    // Explaining the properties of metals > exam tip (shown in English + translation) > p
    "For malleability, the marks are for: layers of cations can slide over each other, <em>and</em> the metallic bond is not broken (it is non-directional). “Delocalized electrons can move” on its own explains conductivity, not malleability.": "展性では、次の 2 つに点が入ります。陽イオンの層がたがいにすべること、<em>そして</em>金属結合が切れないこと（方向性がないから）です。「非局在化電子が動ける」と書くだけでは、伝導性の説明にはなっても、展性の説明にはなりません。",

    // Explaining the properties of metals > h3
    "Summary: property, explanation, use": "まとめ：性質・説明・用途",

    // Explaining the properties of metals > p
    "You can be asked to link a property of a metal to a use. Name the property, then say why the use needs it.": "金属の性質を用途と結びつける問題が出ることがあります。性質の名前を挙げてから、その用途にその性質が必要な理由を書きましょう。",

    // Explaining the properties of metals > table > caption
    "Properties of metals and how they are used": "金属の性質と使われ方",

    // Explaining the properties of metals > table > th
    "Property": "性質",

    // Explaining the properties of metals > table > th
    "Explanation": "説明",

    // Explaining the properties of metals > table > th
    "Example of a use": "用途の例",

    // Explaining the properties of metals > table > th
    "Conducts electricity": "電気を通す",

    // Explaining the properties of metals > table > td
    "Delocalized electrons are free to move through the structure and carry charge.": "非局在化電子が構造の中を自由に動き、電荷を運ぶ。",

    // Explaining the properties of metals > table > td
    "Copper in electrical wires. Aluminium in overhead power cables.": "電線の銅。送電線のアルミニウム。",

    // Explaining the properties of metals > table > th
    "Conducts heat": "熱を伝える",

    // Explaining the properties of metals > table > td
    "Delocalized electrons and closely packed cations transfer kinetic energy through the structure.": "非局在化電子と、すき間なく詰まった陽イオンが、構造の中で運動エネルギーを伝える。",

    // Explaining the properties of metals > table > td
    "Aluminium, copper and steel in cooking pans.": "調理用のなべに使うアルミニウム、銅、鋼。",

    // Explaining the properties of metals > table > th
    "Malleable": "展性がある",

    // Explaining the properties of metals > table > td
    "Layers of cations can slide over each other without breaking the metallic bond, because it is non-directional.": "金属結合には方向性がないので、結合が切れることなく、陽イオンの層がたがいにすべる。",

    // Explaining the properties of metals > table > td
    "Steel sheet pressed into car body panels. Aluminium rolled into foil.": "鋼板をプレスして作る自動車の車体パネル。アルミニウムをうすくのばして作るアルミ箔。",

    // Explaining the properties of metals > not needed for IB > data-title attribute
    // Transition elements: delocalized d-electrons > not needed for IB > Additional HL > data-title attribute
    "Comes later": "あとで学ぶ内容",

    // Explaining the properties of metals > not needed for IB > p
    "An <em>alloy</em> is a mixture of a metal with other elements. Why alloys are often harder than pure metals is in Structure 2.4. How metals react is in Structure 3.1 and Reactivity 3.2.": "<em>合金</em> (alloy) は、金属にほかの元素を混ぜた混合物です。合金が純粋な金属よりかたいことが多い理由は、Structure 2.4 で学びます。金属の反応のしかたは、Structure 3.1 と Reactivity 3.2 で学びます。",

    // Explaining the properties of metals > data-title attribute
    "The metallic bond and properties: quick check": "金属結合と性質：確認クイズ",

    // How strong is a metallic bond? > data-toc attribute
    "Bond strength and melting point": "結合の強さと融点",

    // How strong is a metallic bond? > h2
    "How strong is a metallic bond?": "金属結合はどのくらい強いのでしょうか",

    // How strong is a metallic bond? > p
    "Caesium melts in a warm room, at 28.44 °C. Magnesium melts at 650.0 °C. Both are metals, so why are they so different?": "セシウムは 28.44 °C で融解します。暖かい部屋なら融けてしまう温度です。マグネシウムは 650.0 °C で融解します。どちらも金属なのに、なぜこれほど違うのでしょうか。",

    // How strong is a metallic bond? > p
    "To melt a metal, you must give the cations enough energy to move out of their lattice positions and past each other. The stronger the attraction between the cations and the delocalized electrons, the more energy this takes. So a stronger metallic bond gives a higher melting point.": "金属を融解させるには、陽イオンが結晶格子の位置から抜け出し、たがいにすれ違って動けるだけのエネルギーを与えなければなりません。陽イオンと非局在化電子の間の引力が強いほど、必要なエネルギーは大きくなります。だから、金属結合が強いほど、融点は高くなります。",

    // How strong is a metallic bond? > p
    "The strength of a metallic bond depends on two things about the metal ion.": "金属結合の強さは、金属イオンについての 2 つのことで決まります。",

    // How strong is a metallic bond? > li
    "<strong>The charge of the ion.</strong> A cation with a greater charge attracts the delocalized electrons more strongly. A greater charge also means that each atom has given more delocalized electrons. A <span class=\"chem\">Mg^2+</span> ion comes with two delocalized electrons. A <span class=\"chem\">Na+</span> ion comes with one.": "<strong>イオンの電荷。</strong>電荷が大きい陽イオンほど、非局在化電子を強く引きつけます。電荷が大きいということは、原子 1 個が出した非局在化電子が多いということでもあります。<span class=\"chem\">Mg^2+</span> イオン 1 個につき、非局在化電子は 2 個あります。<span class=\"chem\">Na+</span> イオンでは 1 個です。",

    // How strong is a metallic bond? > li
    "<strong>The radius of the ion.</strong> In a smaller cation, the nucleus is closer to the delocalized electrons around the ion. The attraction is stronger.": "<strong>イオンの半径。</strong>陽イオンが小さいほど、原子核は、イオンのまわりの非局在化電子に近くなります。引力は強くなります。",

    // How strong is a metallic bond? > key idea > p
    "A greater ion charge (with more delocalized electrons per atom) and a smaller ionic radius both give a stronger metallic bond, and so a higher melting point.": "イオンの電荷が大きい（原子 1 個あたりの非局在化電子が多い）ほど、またイオン半径が小さいほど、金属結合は強くなり、融点は高くなります。",

    // How strong is a metallic bond? > p
    "The IB guide also uses the words <dfn data-def=\"In a metal: how many delocalized electrons there are in a given volume of the lattice.\">electron density</dfn>. In a metal, this means how many delocalized electrons there are in a given volume. More delocalized electrons per atom and smaller ions both give a higher electron density. A higher electron density means a stronger attraction to the cations.": "IB の『指導の手引き』は、<dfn data-def=\"金属の場合：結晶格子の一定の体積の中に、非局在化電子がいくつあるか。\">電子密度 <span class=\"en-term\">(electron density)</span></dfn>という言葉も使います。金属では、一定の体積の中に非局在化電子がいくつあるかを表します。原子 1 個あたりの非局在化電子が多いほど、またイオンが小さいほど、電子密度は高くなります。電子密度が高いほど、陽イオンとの引力は強くなります。",

    // How strong is a metallic bond? > data-def attribute
    "In a metal: how many delocalized electrons there are in a given volume of the lattice.": "金属の場合：結晶格子の一定の体積の中に、非局在化電子がいくつあるか。",

    // How strong is a metallic bond? > p
    "Some books say instead that a small ion with a large charge has a high “charge density”. It is the same idea. In an answer, it is safest to name the charge and the radius of the ion.": "本によっては、小さくて電荷の大きいイオンは「電荷密度」(charge density) が高い、と説明しています。考え方は同じです。答えを書くときは、イオンの電荷と半径をはっきり書くのがいちばん安全です。",

    // How strong is a metallic bond? > data booklet note > p
    "Melting points of the elements are in section 8 of the data booklet, in °C. Ionic radii are in section 10, in units of 10<sup>−12</sup> m (the same as pm). You do not need to remember any of these values.": "元素の融点は、データブックレットのセクション 8 に °C で載っています。イオン半径はセクション 10 にあり、単位は 10<sup>−12</sup> m（pm と同じ）です。これらの値を覚える必要はありません。",

    // How strong is a metallic bond? > h3
    "Two trends to explain": "説明する 2 つの傾向",

    // How strong is a metallic bond? > p
    "The syllabus asks about s-block and p-block metals. Two trends are the usual examples. The table shows the first. Use the explorer below to predict both before you see the melting points.": "シラバスが問うのは、s ブロックと p ブロックの金属です。よく出る例は 2 つの傾向です。表は 1 つ目の傾向を示しています。下の教材を使って、融点を見る前に、両方の傾向を予測してみましょう。",

    // How strong is a metallic bond? > table > caption
    "Across period 3: sodium, magnesium and aluminium (data booklet values)": "第 3 周期を左から右へ：ナトリウム、マグネシウム、アルミニウム（データブックレットの値）",

    // How strong is a metallic bond? > table > th
    // widget string (assets/js/widgets-s2-3.js)
    "Metal": "金属",

    // How strong is a metallic bond? > table > th
    // widget string (assets/js/widgets-s2-3.js)
    "Ion": "イオン",

    // How strong is a metallic bond? > table > th
    // widget string (assets/js/widgets-s2-3.js)
    "Delocalized electrons per atom": "原子 1 個あたりの非局在化電子",

    // How strong is a metallic bond? > table > th
    // widget string (assets/js/widgets-s2-3.js)
    "Ionic radius / pm": "イオン半径 / pm",

    // How strong is a metallic bond? > table > th
    // widget string (assets/js/widgets-s2-3.js)
    "Melting point / °C": "融点 / °C",

    // How strong is a metallic bond? > table > th
    "sodium": "ナトリウム",

    // How strong is a metallic bond? > table > td
    "<span class=\"chem\">Na+</span>": "<span class=\"chem\">Na+</span>",

    // How strong is a metallic bond? > table > th
    "magnesium": "マグネシウム",

    // How strong is a metallic bond? > table > td
    "<span class=\"chem\">Mg^2+</span>": "<span class=\"chem\">Mg^2+</span>",

    // How strong is a metallic bond? > table > th
    "aluminium": "アルミニウム",

    // How strong is a metallic bond? > table > td
    "<span class=\"chem\">Al^3+</span>": "<span class=\"chem\">Al^3+</span>",

    // How strong is a metallic bond? > widget > data-title attribute
    "Melting point trend explorer": "融点の傾向を調べよう",

    // How strong is a metallic bond? > widget > figcaption
    "Choose a set of metals. Read the ion data, make a prediction, then reveal the melting points. All values are from sections 8 and 10 of the data booklet. The number of delocalized electrons per atom is the simple model used in IB: it equals the charge on the ion.": "金属の組を選びます。イオンのデータを読んで予測を立ててから、融点を表示しましょう。値はすべて、データブックレットのセクション 8 と 10 のものです。原子 1 個あたりの非局在化電子の数は、IB で使う単純なモデルによるもので、イオンの電荷と同じ数です。",

    // How strong is a metallic bond? > h3
    "Method in words: comparing two melting points": "解き方を言葉で：2 つの融点をくらべる",

    // How strong is a metallic bond? > li
    "Write the ion that each metal forms. Use the group number: group 1 gives 1+, group 2 gives 2+, group 13 gives 3+.": "それぞれの金属がつくるイオンを書きます。族の番号を使います。1 族は 1+、2 族は 2+、13 族は 3+ です。",

    // How strong is a metallic bond? > li
    "Compare the charges, and so the number of delocalized electrons per atom.": "電荷をくらべます。そこから、原子 1 個あたりの非局在化電子の数もくらべます。",

    // How strong is a metallic bond? > li
    "Compare the ionic radii. Down a group the radius increases. Across a period, for these cations, it decreases.": "イオン半径をくらべます。族を上から下へ進むと、半径は大きくなります。周期を左から右へ進むと、これらの陽イオンでは小さくなります。",

    // How strong is a metallic bond? > li
    "Say which metal has the stronger electrostatic attraction between its cations and its delocalized electrons.": "陽イオンと非局在化電子の間の静電気的な引力 (electrostatic attraction) が強いのは、どちらの金属かを書きます。",

    // How strong is a metallic bond? > li
    "Link to energy: a stronger attraction needs more energy to overcome, so the melting point is higher.": "エネルギーと結びつけます。引力が強いほど、それに打ち勝つのに必要なエネルギーが大きいので、融点は高くなります。",

    // How strong is a metallic bond? > worked example > h3
    "Across a period: magnesium and sodium": "周期を左から右へ：マグネシウムとナトリウム",

    // How strong is a metallic bond? > worked example > p
    "Explain why magnesium has a higher melting point than sodium. [3 marks]": "マグネシウムの融点がナトリウムより高い理由を説明しなさい (explain)。[3 点]",

    // How strong is a metallic bond? > worked example > data-title attribute
    "Write the ions": "イオンを書く",

    // How strong is a metallic bond? > worked example > p
    "The explanation is about the cations in each lattice, so start by naming them.": "説明するのは、それぞれの結晶格子の中の陽イオンについてです。だから、まずそのイオンを書きます。",

    // How strong is a metallic bond? > worked example > maths line
    "sodium: Na<sup>+</sup> &nbsp;&nbsp; magnesium: Mg<sup>2+</sup>": "ナトリウム: Na<sup>+</sup> &nbsp;&nbsp; マグネシウム: Mg<sup>2+</sup>",

    // How strong is a metallic bond? > worked example > data-title attribute
    "Compare the charges and the delocalized electrons": "電荷と非局在化電子をくらべる",

    // How strong is a metallic bond? > worked example > p
    "A greater ion charge means more delocalized electrons per atom. Both make the attraction stronger.": "イオンの電荷が大きいほど、原子 1 個あたりの非局在化電子は多くなります。どちらも引力を強くします。",

    // How strong is a metallic bond? > worked example > p
    "The <span class=\"chem\">Mg^2+</span> ion has a greater charge than the <span class=\"chem\">Na+</span> ion. Magnesium has two delocalized electrons per atom and sodium has one.": "<span class=\"chem\">Mg^2+</span> イオンは、<span class=\"chem\">Na+</span> イオンより電荷が大きいです。原子 1 個あたりの非局在化電子は、マグネシウムが 2 個、ナトリウムが 1 個です。",

    // How strong is a metallic bond? > worked example > data-title attribute
    "Compare the ionic radii": "イオン半径をくらべる",

    // How strong is a metallic bond? > worked example > p
    "A smaller cation attracts the delocalized electrons more strongly.": "陽イオンが小さいほど、非局在化電子を強く引きつけます。",

    // How strong is a metallic bond? > worked example > p
    "The <span class=\"chem\">Mg^2+</span> ion (72 pm) is smaller than the <span class=\"chem\">Na+</span> ion (102 pm).": "<span class=\"chem\">Mg^2+</span> イオン（72 pm）は、<span class=\"chem\">Na+</span> イオン（102 pm）より小さいです。",

    // How strong is a metallic bond? > worked example > data-title attribute
    // Transition elements: delocalized d-electrons > worked example > Additional HL > data-title attribute
    "Name the attraction and link it to energy": "引力の名前を書き、エネルギーと結びつける",

    // How strong is a metallic bond? > worked example > p
    "The mark is for saying what attracts what. Then finish the chain: stronger attraction, more energy, higher melting point.": "何が何を引きつけるのかを書くと、点が入ります。そのあと、説明を最後までつなげます。引力が強い、必要なエネルギーが大きい、融点が高い、の順です。",

    // How strong is a metallic bond? > worked example > p
    "<b>The electrostatic attraction between the cations and the delocalized electrons is stronger in magnesium, so more energy is needed to overcome it.</b>": "<b>陽イオンと非局在化電子の間の静電気的な引力は、マグネシウムのほうが強いので、それに打ち勝つのに必要なエネルギーが大きくなります。</b>",

    // How strong is a metallic bond? > worked example > p
    "Mg<sup>2+</sup> has a greater charge than Na<sup>+</sup>, and magnesium has two delocalized electrons per atom, not one. Mg<sup>2+</sup> also has a smaller ionic radius. So the electrostatic attraction between the cations and the delocalized electrons is stronger in magnesium, and more energy is needed to overcome it.": "Mg<sup>2+</sup> は Na<sup>+</sup> より電荷が大きく、原子 1 個あたりの非局在化電子はマグネシウムが 2 個、ナトリウムが 1 個です。Mg<sup>2+</sup> はイオン半径も小さいです。そのため、陽イオンと非局在化電子の間の静電気的な引力はマグネシウムのほうが強く、それに打ち勝つのに必要なエネルギーが大きくなります。",

    // How strong is a metallic bond? > worked example > h3
    "Down a group: the group 1 metals": "族を上から下へ：1 族の金属",

    // How strong is a metallic bond? > worked example > p
    "The melting points of the group 1 metals decrease from lithium (180.5 °C) to caesium (28.44 °C). Explain this trend. [2 marks]": "1 族の金属の融点は、リチウム（180.5 °C）からセシウム（28.44 °C）へと低くなります。この傾向を説明しなさい (explain)。[2 点]",

    // How strong is a metallic bond? > worked example > data-title attribute
    "Say what stays the same": "変わらないものを書く",

    // How strong is a metallic bond? > worked example > p
    "If the charge does not change, it cannot be the reason for the trend. Saying so shows you have checked.": "電荷が変わらないなら、それは傾向の理由になりません。そう書いておくと、確かめたことが伝わります。",

    // How strong is a metallic bond? > worked example > p
    "Every group 1 metal forms a 1+ ion, and each atom gives one delocalized electron.": "1 族の金属はどれも 1+ のイオンになり、原子 1 個が非局在化電子を 1 個出します。",

    // How strong is a metallic bond? > worked example > data-title attribute
    "Say what changes": "変わるものを書く",

    // How strong is a metallic bond? > worked example > p
    "Each step down the group adds one more occupied energy level, so the ion is larger.": "族を 1 つ下がるごとに、電子の入ったエネルギー準位が 1 つ増えるので、イオンは大きくなります。",

    // How strong is a metallic bond? > worked example > maths line
    "ionic radius: Li<sup>+</sup> 76 pm, Na<sup>+</sup> 102 pm, K<sup>+</sup> 138 pm, Rb<sup>+</sup> 152 pm, Cs<sup>+</sup> 167 pm": "イオン半径: Li<sup>+</sup> 76 pm, Na<sup>+</sup> 102 pm, K<sup>+</sup> 138 pm, Rb<sup>+</sup> 152 pm, Cs<sup>+</sup> 167 pm",

    // How strong is a metallic bond? > worked example > p
    "The ionic radius increases down the group.": "イオン半径は、族を上から下へ進むと大きくなります。",

    // How strong is a metallic bond? > worked example > p
    "In a larger ion, the nucleus is further from the delocalized electrons, so it attracts them less strongly.": "大きいイオンでは、原子核が非局在化電子から遠いので、引きつける力が弱くなります。",

    // How strong is a metallic bond? > worked example > p
    "<b>The electrostatic attraction between the cations and the delocalized electrons becomes weaker down the group, so less energy is needed to overcome it.</b>": "<b>陽イオンと非局在化電子の間の静電気的な引力は、族を下がるほど弱くなるので、それに打ち勝つのに必要なエネルギーは小さくなります。</b>",

    // How strong is a metallic bond? > worked example > p
    "The ions all have the same charge (1+), but the ionic radius increases down the group. The electrostatic attraction between the cations and the delocalized electrons becomes weaker, so less energy is needed to overcome it.": "イオンの電荷はどれも同じ（1+）ですが、イオン半径は族を下がるほど大きくなります。陽イオンと非局在化電子の間の静電気的な引力が弱くなるので、それに打ち勝つのに必要なエネルギーは小さくなります。",

    // How strong is a metallic bond? > common mistake > p
    "Do not explain a melting point by the mass of the atoms. Caesium atoms are about 19 times heavier than lithium atoms, but caesium has the lower melting point. The reasons are always the charge of the ion and the radius of the ion.": "融点を原子の質量で説明してはいけません。セシウム原子はリチウム原子の約 19 倍の重さですが、融点はセシウムのほうが低いです。理由はいつも、イオンの電荷とイオンの半径です。",

    // How strong is a metallic bond? > exam tip (shown in English + translation) > p
    "In a comparison, write about <em>both</em> metals and use comparing words: “greater charge”, “smaller radius”, “stronger attraction”. Always end with the attraction between the cations and the delocalized electrons, and the energy needed to overcome it.": "比較するときは、<em>両方</em>の金属について書き、くらべる表現を使いましょう。「greater charge」（電荷がより大きい）、「smaller radius」（半径がより小さい）、「stronger attraction」（引力がより強い）などです。最後は必ず、陽イオンと非局在化電子の間の引力と、それに打ち勝つのに必要なエネルギーで終えます。",

    // How strong is a metallic bond? > not needed for IB > p
    "This simple model gives the direction of the two trends above. It does not explain every number. The rise from magnesium to aluminium is small. In group 2, magnesium (650.0 °C) melts at a lower temperature than calcium (842.0 °C). Gallium, below aluminium, melts at only 29.77 °C. The way the cations are packed also matters, and that is not part of the IB course. You are not asked to explain these values. The guide asks only for “a simple treatment in terms of charge of cations and electron density”.": "この単純なモデルでわかるのは、上の 2 つの傾向の向きです。すべての数値を説明できるわけではありません。マグネシウムからアルミニウムへの上がり方は小さいです。2 族では、マグネシウム（650.0 °C）のほうがカルシウム（842.0 °C）より低い温度で融解します。アルミニウムの下にあるガリウムは、わずか 29.77 °C で融解します。陽イオンの詰まり方も関係しますが、それは IB のコースの範囲外です。これらの値の説明は求められません。『指導の手引き』が求めているのは「a simple treatment in terms of charge of cations and electron density」（陽イオンの電荷と電子密度による単純な扱い）だけです。",

    // How strong is a metallic bond? > data-title attribute
    "Bond strength and melting point: quick check": "結合の強さと融点：確認クイズ",

    // Build an explanation that scores > data-toc attribute
    "Build an explanation": "説明を組み立てる",

    // Build an explanation that scores > h2
    "Build an explanation that scores": "点が取れる説明を組み立てる",

    // Build an explanation that scores > p
    "Almost every exam question on this topic begins with “Explain”. A good answer is a short chain of true statements, each one a marking point. A weak answer mixes in statements that are wrong, or that are true but do not answer the question.": "このトピックの試験問題は、ほとんどが「Explain」（説明しなさい）で始まります。よい答えは、正しい文を短くつなげたものです。その 1 文 1 文が採点ポイントになります。弱い答えには、間違った文や、正しくても問いに答えていない文が混ざっています。",

    // Build an explanation that scores > p
    "Use the builder to practise choosing. Each wrong sentence is a real mistake that students make, and the builder tells you what is wrong with it.": "下の教材で、文を選ぶ練習をしましょう。間違いの文はどれも、生徒が実際によくする間違いです。どこが間違っているかも表示されます。",

    // Build an explanation that scores > widget > data-title attribute
    "Explain the property": "性質を説明しよう",

    // Build an explanation that scores > widget > figcaption
    "Choose a question. Tick the sentences that belong in a full-mark answer, then press Check my answer. Your chosen sentences are joined into one answer underneath, so you can read it as an examiner would.": "問題を選びます。満点の答えに入る文にチェックを付けて、「答え合わせ」を押しましょう。選んだ文は下で 1 つの答えにつながるので、採点者と同じ目で読めます。",

    // Transition elements: delocalized d-electrons > Additional HL > data-toc attribute
    "Transition elements": "遷移元素",

    // Transition elements: delocalized d-electrons > Additional HL > h2
    "Transition elements: delocalized d-electrons": "遷移元素：非局在化した d 電子",

    // Transition elements: delocalized d-electrons > Additional HL > p
    "Iron melts at 1538 °C. Calcium, in the same period, melts at 842.0 °C, and potassium melts at only 63.38 °C. Transition elements have high melting points. The reason is the number of electrons they can delocalize.": "鉄は 1538 °C で融解します。同じ周期のカルシウムは 842.0 °C、カリウムはわずか 63.38 °C で融解します。遷移元素 (transition elements) の融点は高いのです。理由は、非局在化できる電子の数にあります。",

    // Transition elements: delocalized d-electrons > Additional HL > p
    "In potassium and calcium, only the 4s electrons are delocalized. A transition element has electrons in the 3d sublevel as well. The 3d and 4s sublevels are close in energy.": "カリウムとカルシウムでは、非局在化するのは 4s 電子だけです。遷移元素は、3d 副準位にも電子をもっています。3d 副準位と 4s 副準位は、エネルギーが近いのです。",

    // Transition elements: delocalized d-electrons > key idea > Additional HL > p
    "Transition elements have delocalized d-electrons. In a first-row transition element, 3d electrons are delocalized as well as 4s electrons.": "遷移元素には、非局在化した d 電子 (delocalized d-electrons) があります。第一遷移系列の元素では、4s 電子に加えて 3d 電子も非局在化します。",

    // Transition elements: delocalized d-electrons > Additional HL > h3
    "High melting points": "高い融点",

    // Transition elements: delocalized d-electrons > Additional HL > p
    "With d-electrons delocalized as well as s-electrons, a transition element has more delocalized electrons per atom than an s-block metal in the same period. The electrostatic attraction between the cations and the delocalized electrons is stronger. More energy is needed to overcome it, so the melting point is high.": "s 電子に加えて d 電子も非局在化するので、遷移元素は、同じ周期の s ブロックの金属より、原子 1 個あたりの非局在化電子が多くなります。陽イオンと非局在化電子の間の静電気的な引力は、より強くなります。それに打ち勝つのに必要なエネルギーが大きいので、融点は高くなります。",

    // Transition elements: delocalized d-electrons > Additional HL > p
    "The explanation has the same form as for any metal. The delocalized electrons are free to move through the structure and carry charge. For a transition element, say that these include d-electrons as well as s-electrons.": "説明の形は、どの金属でも同じです。非局在化電子が構造の中を自由に動き、電荷を運びます。遷移元素では、その電子に s 電子だけでなく d 電子も含まれる、と書きましょう。",

    // Transition elements: delocalized d-electrons > widget > Additional HL > data-title attribute
    "Melting points across period 4": "第 4 周期の融点",

    // Transition elements: delocalized d-electrons > widget > Additional HL > figcaption
    "Make a prediction, then reveal the melting points of potassium, calcium and the first-row transition elements from scandium to copper. The values are from section 8 of the data booklet.": "予測を立ててから、カリウム、カルシウム、そしてスカンジウムから銅までの第一遷移系列の元素の融点を表示しましょう。値は、データブックレットのセクション 8 のものです。",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > h3
    "Why a transition element has a high melting point": "遷移元素の融点が高い理由",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > p
    "Titanium is a transition element. It melts at 1670 °C. Calcium, an s-block metal in the same period, melts at 842.0 °C. Explain why titanium has the higher melting point. [2 marks]": "チタンは遷移元素で、1670 °C で融解します。同じ周期の s ブロックの金属であるカルシウムは、842.0 °C で融解します。チタンの融点のほうが高い理由を説明しなさい (explain)。[2 点]",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > data-title attribute
    "Say which electrons are delocalized": "どの電子が非局在化するかを書く",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > p
    "This is the fact the syllabus statement gives you. Use the word “d-electrons”.": "これは、シラバスの記述がそのまま教えてくれる事実です。「d-electrons」（d 電子）という語を使いましょう。",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > p
    "In titanium, 3d electrons are delocalized as well as 4s electrons. In calcium, only the two 4s electrons are delocalized.": "チタンでは、4s 電子に加えて 3d 電子も非局在化します。カルシウムでは、非局在化するのは 2 個の 4s 電子だけです。",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > data-title attribute
    "Compare the number of delocalized electrons": "非局在化電子の数をくらべる",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > p
    "More delocalized electrons per atom means more negative charge for each cation to attract.": "原子 1 個あたりの非局在化電子が多いほど、それぞれの陽イオンが引きつける負の電荷が多くなります。",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > p
    "Titanium has more delocalized electrons per atom than calcium.": "チタンは、カルシウムより原子 1 個あたりの非局在化電子が多いです。",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > p
    "This step is the same for every melting point question in this topic.": "このステップは、このトピックの融点の問題ならどれでも同じです。",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > p
    "<b>The electrostatic attraction between the cations and the delocalized electrons is stronger in titanium, so more energy is needed to overcome it.</b>": "<b>陽イオンと非局在化電子の間の静電気的な引力は、チタンのほうが強いので、それに打ち勝つのに必要なエネルギーが大きくなります。</b>",

    // Transition elements: delocalized d-electrons > worked example > Additional HL > p
    "In titanium, 3d electrons as well as 4s electrons are delocalized, so there are more delocalized electrons per atom than in calcium. The electrostatic attraction between the cations and the delocalized electrons is stronger, so more energy is needed to overcome it.": "チタンでは、4s 電子に加えて 3d 電子も非局在化するので、原子 1 個あたりの非局在化電子がカルシウムより多くなります。陽イオンと非局在化電子の間の静電気的な引力がより強いので、それに打ち勝つのに必要なエネルギーが大きくなります。",

    // Transition elements: delocalized d-electrons > exam tip (shown in English + translation) > Additional HL > p
    "The key phrase is “delocalized d-electrons”, or “d-electrons as well as s-electrons are delocalized”. Then finish in the usual way: stronger electrostatic attraction between the cations and the delocalized electrons.": "キーフレーズは「delocalized d-electrons」（非局在化した d 電子）、または「d-electrons as well as s-electrons are delocalized」（s 電子に加えて d 電子も非局在化する）です。あとはいつもの形で終えます。陽イオンと非局在化電子の間の静電気的な引力がより強い、と書きます。",

    // Transition elements: delocalized d-electrons > common mistake > Additional HL > p
    "Variable oxidation states, coloured compounds and catalysis are <em>chemical</em> properties of transition elements. They do not explain a melting point or conductivity. Keep the physical explanation (delocalized d-electrons) separate.": "複数の酸化数、有色の化合物、触媒作用は、遷移元素の<em>化学的</em>性質です。融点や伝導性の説明にはなりません。物理的な説明（非局在化した d 電子）とは分けて考えましょう。",

    // Transition elements: delocalized d-electrons > not needed for IB > Additional HL > p
    "The chemical properties of transition elements are in Structure 3.1 and Reactivity 3.4. On this page you need only the two physical properties: high melting point and electrical conductivity. You are not asked to count how many d-electrons are delocalized, or to explain why the melting points from scandium to copper go up and down. Zinc is not shown in the chart. Structure 3.1 explains why zinc does not behave like a typical transition element.": "遷移元素の化学的性質は、Structure 3.1 と Reactivity 3.4 で学びます。このページで必要なのは、2 つの物理的性質、つまり高い融点と電気伝導性だけです。d 電子が何個非局在化するかを数えることや、スカンジウムから銅までの融点が上がったり下がったりする理由の説明は、求められません。亜鉛はグラフに入れていません。亜鉛が典型的な遷移元素のようにふるまわない理由は、Structure 3.1 で説明します。",

    // Transition elements: delocalized d-electrons > Additional HL > data-title attribute
    "Transition elements: quick check": "遷移元素：確認クイズ",

    // Linking it up > h2
    "Linking it up": "つなげて考える",

    // Linking it up > p
    "The IB guide asks these linking questions. Short answers are enough at this stage.": "IB の『指導の手引き』には、次のような「つながりの問い」(Linking question) があります。今の段階では、短い答えで十分です。",

    // Linking it up > h3
    "What are the features of metallic bonding that make it possible for metals to form alloys?": "金属結合のどのような特徴によって、金属は合金をつくれるのでしょうか。",

    // Linking it up > p
    "The metallic bond is non-directional. The delocalized electrons attract any cation, of any size, in any position. So atoms of another element can take places in the lattice and the metal still holds together. Alloys and their properties are in Structure 2.4.": "金属結合には方向性がありません。非局在化電子は、大きさや位置に関係なく、どんな陽イオンも引きつけます。だから、ほかの元素の原子が結晶格子の中に入っても、金属はまとまったままです。合金とその性質は、Structure 2.4 で学びます。",

    // Linking it up > h3
    "What experimental data demonstrate the physical properties of metals, and trends in these properties?": "金属の物理的性質と、その性質の傾向は、どのような実験データからわかるのでしょうか。",

    // Linking it up > p
    "Melting points are one example. The values in section 8 of the data booklet show the fall down group 1 and the rise from sodium to aluminium. Measurements of electrical conductivity show that metals conduct as solids and as liquids. Periodic trends are studied in Structure 3.1.": "融点はその 1 つの例です。データブックレットのセクション 8 の値から、1 族を下がるほど融点が低くなることと、ナトリウムからアルミニウムへ高くなることがわかります。電気伝導性を測定すると、金属が固体でも液体でも電気を通すことがわかります。周期的な傾向は Structure 3.1 で学びます。",

    // Linking it up > h3
    "What trends in the reactivity of metals can be predicted from the periodic table?": "金属の反応性のどのような傾向が、周期表から予測できるのでしょうか。",

    // Linking it up > p
    "Metals react by losing electrons. Down group 1 the outer electron is further from the nucleus and is lost more easily, so the metals become more reactive. This is a chemical trend, and it is taught in Structure 3.1 and Reactivity 3.2. Do not mix it up with melting point, which is a physical property with its own explanation.": "金属は、電子を失って反応します。1 族を下がるほど、外側の電子は原子核から遠くなり、失われやすくなります。そのため、金属の反応性は高くなります。これは化学的な傾向で、Structure 3.1 と Reactivity 3.2 で学びます。融点と混同しないようにしましょう。融点は物理的性質で、説明も別です。",

    // Linking it up > Additional HL > h3
    "Why is the trend in melting points of metals across a period less evident across the d-block?": "周期を左から右へ進むときの金属の融点の傾向が、d ブロックではあまりはっきりしないのはなぜでしょうか。",

    // Linking it up > Additional HL > p
    "From sodium to aluminium, each step adds one delocalized electron per atom, increases the charge of the ion and makes the ion much smaller. All three changes make the bonding stronger, so the trend is clear. Across the d-block, every element has both d-electrons and s-electrons that can be delocalized. But the number of delocalized electrons does not rise by one at each step. The size of the atoms also changes less from one element to the next. No single factor changes steadily, so there is no simple trend.": "ナトリウムからアルミニウムまでは、1 つ進むごとに、原子 1 個あたりの非局在化電子が 1 個増え、イオンの電荷が大きくなり、イオンがずっと小さくなります。3 つの変化がどれも結合を強くするので、傾向ははっきりしています。d ブロックでは、どの元素にも、非局在化できる d 電子と s 電子があります。しかし、非局在化電子の数は、1 つ進むごとに 1 個ずつ増えるわけではありません。原子の大きさも、となりの元素との差が小さくなります。一定の向きに変わり続ける要因が 1 つもないので、単純な傾向は現れません。",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "試験形式の練習",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. Questions you have not yet answered correctly come up first, so each set changes when you come back to it. Have the data booklet beside you.": "最初の一歩から発展問題まで、3 つのセットがあります。まだ正解していない問題が先に出るので、戻ってくるたびにセットの中身が変わります。データブックレットを手元に用意しましょう。",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "基礎：一度に 1 つの考え方",

    // Exam-style practice > data-title attribute
    "2.3 foundation": "2.3 基礎",

    // Exam-style practice > h3
    "Exam standard": "試験レベル",

    // Exam-style practice > data-title attribute
    "2.3 exam standard": "2.3 試験レベル",

    // Exam-style practice > h3
    "Challenge": "チャレンジ",

    // Exam-style practice > data-title attribute
    "2.3 challenge": "2.3 チャレンジ",

    // Exam-style practice > Additional HL > h3
    "Additional HL: transition elements": "HL 追加内容（AHL）：遷移元素",

    // Exam-style practice > Additional HL > data-title attribute
    "2.3 Additional HL": "2.3 HL 追加内容（AHL）",

    // widget string (assets/js/widgets-s2-3.js)
    "No voltage, no heating": "電圧も加熱もなし",

    // widget string (assets/js/widgets-s2-3.js)
    "Apply a voltage": "電圧をかける",

    // widget string (assets/js/widgets-s2-3.js)
    "Heat the left end": "左端を加熱する",

    // widget string (assets/js/widgets-s2-3.js)
    "Hit it with a hammer": "ハンマーでたたく",

    // widget string (assets/js/widgets-s2-3.js)
    "What happens to the metal": "金属に何をするか",

    // widget string (assets/js/widgets-s2-3.js)
    "Hit with the hammer": "たたく",

    // widget string (assets/js/widgets-s2-3.js)
    "Pause": "一時停止",

    // widget string (assets/js/widgets-s2-3.js)
    "Reset": "リセット",

    // widget string (assets/js/widgets-s2-3.js)
    "Model of a metal: rows of positive ions (cations) in fixed positions, with small delocalized electrons moving between them": "金属のモデル：正の電荷をもつイオン（陽イオン）が決まった位置に列をつくって並び、その間を小さな非局在化電子が動いている",

    // widget string (assets/js/widgets-s2-3.js)
    "What the model shows": "モデルが示していること",

    // widget string (assets/js/widgets-s2-3.js)
    "How to write it in an exam": "試験での書き方",

    // widget string (assets/js/widgets-s2-3.js)
    "Play": "再生",

    // widget string (assets/js/widgets-s2-3.js)
    "The cations stay in their lattice positions and only vibrate. The delocalized electrons move randomly in all directions between them.": "陽イオンは結晶格子の位置にとどまり、振動するだけです。非局在化電子は、その間をあらゆる方向に不規則に動きます。",

    // widget string (assets/js/widgets-s2-3.js)
    "A metallic bond is the electrostatic attraction between a lattice of cations and delocalized electrons.": "金属結合は、陽イオンの結晶格子と非局在化電子の間の静電気的な引力です。",

    // widget string (assets/js/widgets-s2-3.js)
    "The electrons still move randomly, but now they also drift towards the positive terminal. New electrons enter from the negative terminal. The cations do not travel.": "電子は今も不規則に動いていますが、同時に正極の方へ流れていきます。負極からは新しい電子が入ってきます。陽イオンは移動しません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Metals conduct electricity because the delocalized electrons are free to move through the structure and carry charge.": "金属が電気を通すのは、非局在化電子が構造の中を自由に動き、電荷を運ぶからです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Cations at the hot end vibrate more. The delocalized electrons move faster there and carry kinetic energy along the metal. Close-packed cations also pass vibrations to their neighbours.": "熱い側の陽イオンは、より大きく振動します。そこでは非局在化電子が速く動き、運動エネルギーを金属に沿って運びます。すき間なく詰まった陽イオンも、振動をとなりの陽イオンに伝えます。",

    // widget string (assets/js/widgets-s2-3.js)
    "Metals conduct heat because the delocalized electrons and the closely packed cations transfer kinetic energy through the structure.": "金属が熱を伝えるのは、非局在化電子と、すき間なく詰まった陽イオンが、構造の中で運動エネルギーを伝えるからです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Press “Hit with the hammer”. Watch the top two layers of each lattice.": "「たたく」を押しましょう。それぞれの結晶格子の上の 2 層に注目してください。",

    // widget string (assets/js/widgets-s2-3.js)
    "Metals are malleable because the layers of cations can slide over each other without breaking the metallic bond.": "金属に展性があるのは、金属結合が切れることなく、陽イオンの層がたがいにすべるからです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Metal: the layers of cations slid to new positions. Delocalized electrons still surround every cation, so the attraction remains and the metal only changes shape. Ionic crystal: ions with the same charge are now next to each other. They repel, and the crystal splits.": "金属：陽イオンの層がすべって、新しい位置に移りました。どの陽イオンのまわりにも、やはり非局在化電子があります。だから引力はなくならず、金属は形が変わるだけです。イオン結晶：同じ電荷のイオンがとなり合いました。反発して、結晶が割れます。",

    // widget string (assets/js/widgets-s2-3.js)
    "Metals are malleable because the layers of cations can slide over each other without breaking the metallic bond. The bond is non-directional: the delocalized electrons attract the cations in every direction.": "金属に展性があるのは、金属結合が切れることなく、陽イオンの層がたがいにすべるからです。この結合には方向性がありません。非局在化電子は、あらゆる方向で陽イオンを引きつけています。",

    // widget string (assets/js/widgets-s2-3.js)
    "cation (positive ion)": "陽イオン (cation)",

    // widget string (assets/js/widgets-s2-3.js)
    "delocalized electron": "非局在化電子",

    // widget string (assets/js/widgets-s2-3.js)
    "electrons drift towards the positive terminal": "電子は正極の方へ流れる",

    // widget string (assets/js/widgets-s2-3.js)
    "heated end": "加熱した端",

    // widget string (assets/js/widgets-s2-3.js)
    "far end": "反対側の端",

    // widget string (assets/js/widgets-s2-3.js)
    "bar height = how much the cations in that column vibrate": "棒の高さ = その列の陽イオンの振動の大きさ",

    // widget string (assets/js/widgets-s2-3.js)
    "Ionic crystal, for comparison": "比較：イオン結晶",

    // widget string (assets/js/widgets-s2-3.js)
    "force": "力",

    // widget string (assets/js/widgets-s2-3.js)
    "layers slid: bond not broken": "層がすべっても結合は切れない",

    // widget string (assets/js/widgets-s2-3.js)
    "layers of cations": "陽イオンの層",

    // widget string (assets/js/widgets-s2-3.js)
    "like charges repel: crystal splits": "同じ電荷が反発：結晶が割れる",

    // widget string (assets/js/widgets-s2-3.js)
    "+ and − ions alternate": "+ と − のイオンが交互に並ぶ",

    // widget string (assets/js/widgets-s2-3.js)
    "Across period 3: Na, Mg, Al": "第 3 周期を左から右へ：Na、Mg、Al",

    // widget string (assets/js/widgets-s2-3.js)
    "Down group 1: Li to Cs": "1 族を上から下へ：Li から Cs",

    // widget string (assets/js/widgets-s2-3.js)
    "Additional HL: K, Ca and the transition elements Sc to Cu": "HL 追加内容（AHL）：K、Ca と遷移元素 Sc から Cu",

    // widget string (assets/js/widgets-s2-3.js)
    "Set of metals": "金属の組",

    // widget string (assets/js/widgets-s2-3.js)
    "Reveal the melting points": "融点を表示する",

    // widget string (assets/js/widgets-s2-3.js)
    "Start again": "最初からやり直す",

    // widget string (assets/js/widgets-s2-3.js)
    "Highest melting point": "融点が最も高い",

    // widget string (assets/js/widgets-s2-3.js)
    "Lowest melting point": "融点が最も低い",

    // widget string (assets/js/widgets-s2-3.js)
    "Look at the ions in the table. Predict: how does the melting point change from sodium to aluminium?": "表のイオンを見て予測しましょう。ナトリウムからアルミニウムへ、融点はどう変わりますか。",

    // widget string (assets/js/widgets-s2-3.js)
    "It rises": "高くなる",

    // widget string (assets/js/widgets-s2-3.js)
    "It falls": "低くなる",

    // widget string (assets/js/widgets-s2-3.js)
    "It stays about the same": "ほとんど変わらない",

    // widget string (assets/js/widgets-s2-3.js)
    "Period 3 metals": "第 3 周期の金属",

    // widget string (assets/js/widgets-s2-3.js)
    "The melting point rises from Na to Al. Going across, the charge on the cation rises from 1+ to 3+, each atom gives more delocalized electrons (1, 2, then 3) and the ionic radius falls. The electrostatic attraction between the cations and the delocalized electrons gets stronger, so more energy is needed to overcome it.": "融点は Na から Al へ高くなります。左から右へ進むと、陽イオンの電荷は 1+ から 3+ へ大きくなり、原子 1 個が出す非局在化電子は増え（1 個、2 個、3 個）、イオン半径は小さくなります。陽イオンと非局在化電子の間の静電気的な引力が強くなるので、それに打ち勝つのに必要なエネルギーが大きくなります。",

    // widget string (assets/js/widgets-s2-3.js)
    "Notice that the step from Mg to Al is small. This simple model gives the direction of the trend. It does not give the size of each step.": "Mg から Al への上がり方が小さいことに注目しましょう。この単純なモデルでわかるのは、傾向の向きです。1 つ 1 つの変化の大きさまではわかりません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Look at the ions in the table. Predict: how does the melting point change down group 1, from lithium to caesium?": "表のイオンを見て予測しましょう。1 族を上から下へ、リチウムからセシウムへ進むと、融点はどう変わりますか。",

    // widget string (assets/js/widgets-s2-3.js)
    "Group 1 metals": "1 族の金属",

    // widget string (assets/js/widgets-s2-3.js)
    "The melting point falls from Li to Cs. Every ion has a 1+ charge and every atom gives one delocalized electron. But the ionic radius increases down the group, so the delocalized electrons are further from the nucleus of each cation. The electrostatic attraction between the cations and the delocalized electrons gets weaker, so less energy is needed to overcome it.": "融点は Li から Cs へ低くなります。どのイオンも電荷は 1+ で、どの原子も非局在化電子を 1 個出します。しかし、イオン半径は族を下がるほど大きくなるので、非局在化電子は、それぞれの陽イオンの原子核から遠くなります。陽イオンと非局在化電子の間の静電気的な引力が弱くなるので、それに打ち勝つのに必要なエネルギーは小さくなります。",

    // widget string (assets/js/widgets-s2-3.js)
    "Potassium and calcium have only 4s electrons to delocalize. The transition elements also have 3d electrons. Predict: how do the melting points of Sc to Cu compare with K and Ca?": "カリウムとカルシウムで非局在化できるのは、4s 電子だけです。遷移元素には 3d 電子もあります。予測しましょう。Sc から Cu までの融点は、K や Ca とくらべてどうでしょうか。",

    // widget string (assets/js/widgets-s2-3.js)
    "Much higher": "ずっと高い",

    // widget string (assets/js/widgets-s2-3.js)
    "About the same": "ほぼ同じ",

    // widget string (assets/js/widgets-s2-3.js)
    "Lower": "低い",

    // widget string (assets/js/widgets-s2-3.js)
    "Period 4: K, Ca and the transition elements Sc to Cu": "第 4 周期：K、Ca と遷移元素 Sc から Cu",

    // widget string (assets/js/widgets-s2-3.js)
    "Every transition element from Sc to Cu melts above 1000 °C, far higher than K and higher than Ca. In a transition element, 3d electrons are delocalized as well as 4s electrons. More delocalized electrons per atom means a stronger electrostatic attraction between the cations and the delocalized electrons.": "Sc から Cu までの遷移元素は、どれも 1000 °C より高い温度で融解します。K よりはるかに高く、Ca よりも高い温度です。遷移元素では、4s 電子に加えて 3d 電子も非局在化します。原子 1 個あたりの非局在化電子が多いほど、陽イオンと非局在化電子の間の静電気的な引力は強くなります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The values do not rise smoothly from Sc to Cu. You are not asked to explain each value.": "値は、Sc から Cu へなめらかに上がるわけではありません。1 つ 1 つの値の説明は求められません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Outer electrons": "外側の電子",

    // widget string (assets/js/widgets-s2-3.js)
    "Electrons that can delocalize": "非局在化できる電子",

    // widget string (assets/js/widgets-s2-3.js)
    "3d and 4s": "3d と 4s",

    // widget string (assets/js/widgets-s2-3.js)
    "4s only": "4s のみ",

    // widget string (assets/js/widgets-s2-3.js)
    "Predict first.": "まず予測しましょう。",

    // widget string (assets/js/widgets-s2-3.js)
    "Your prediction": "あなたの予測",

    // widget string (assets/js/widgets-s2-3.js)
    "Your prediction was right": "予測のとおりでした",

    // widget string (assets/js/widgets-s2-3.js)
    "Not what the data show": "データとは違いました",

    // widget string (assets/js/widgets-s2-3.js)
    "{metal} {value} °C": "{metal} {value} °C",

    // widget string (assets/js/widgets-s2-3.js)
    "Bar chart of the melting points in the table above": "上の表の融点の棒グラフ",

    // widget string (assets/js/widgets-s2-3.js)
    "Explain why solid copper conducts electricity.": "固体の銅が電気を通す理由を説明しなさい (explain)。",

    // widget string (assets/js/widgets-s2-3.js)
    "Copper contains delocalized electrons.": "銅には非局在化電子があります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The delocalized electrons are free to move through the structure and carry charge.": "非局在化電子は構造の中を自由に動き、電荷を運びます。",

    // widget string (assets/js/widgets-s2-3.js)
    "The copper ions are free to move and carry charge.": "銅イオンが自由に動き、電荷を運びます。",

    // widget string (assets/js/widgets-s2-3.js)
    "In a solid metal the cations stay in their lattice positions. They vibrate but they do not travel. Ions carry the charge in a molten or dissolved ionic compound, not in a metal.": "固体の金属では、陽イオンは結晶格子の位置にとどまります。振動はしますが、移動はしません。イオンが電荷を運ぶのは、融解したイオン化合物や溶かしたイオン化合物で、金属ではありません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Electrons are set free from the atoms only when a voltage is applied.": "電圧をかけたときだけ、電子が原子から離れて自由になります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The delocalized electrons are always there. A voltage does not create them. It makes them drift in one direction.": "非局在化電子は、いつもそこにあります。電圧が電子をつくり出すのではありません。電圧は、電子を一方向に流れさせるだけです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Copper has a shiny surface.": "銅の表面には光沢があります。",

    // widget string (assets/js/widgets-s2-3.js)
    "This is true, but it does not explain conductivity. A true statement that does not answer the question earns no mark.": "これは正しい文ですが、伝導性の説明にはなっていません。正しくても問いに答えていない文には、点が入りません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Explain why metals are good conductors of heat.": "金属が熱をよく伝える理由を説明しなさい (explain)。",

    // widget string (assets/js/widgets-s2-3.js)
    "Metals contain delocalized electrons that are free to move through the structure.": "金属には、構造の中を自由に動ける非局在化電子があります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The delocalized electrons carry kinetic energy from the hot part to the cooler part.": "非局在化電子が、熱い部分から温度の低い部分へ運動エネルギーを運びます。",

    // widget string (assets/js/widgets-s2-3.js)
    "The cations are closely packed, so vibrations are also passed from one cation to the next.": "陽イオンはすき間なく詰まっているので、振動も陽イオンからとなりの陽イオンへ伝わります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The cations travel from the hot end to the cold end.": "陽イオンが、熱い端から冷たい端へ移動します。",

    // widget string (assets/js/widgets-s2-3.js)
    "The cations stay in their lattice positions. They vibrate more when hot, but they do not travel along the metal.": "陽イオンは結晶格子の位置にとどまります。熱いと振動は大きくなりますが、金属に沿って移動することはありません。",

    // widget string (assets/js/widgets-s2-3.js)
    "The metallic bonds break at the hot end and release energy.": "熱い端で金属結合が切れて、エネルギーを放出します。",

    // widget string (assets/js/widgets-s2-3.js)
    "No bonds break when a solid metal conducts heat. Energy is passed on by moving electrons and vibrating cations.": "固体の金属が熱を伝えるとき、結合は切れません。エネルギーは、動く電子と振動する陽イオンによって伝わります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The cations are arranged in layers.": "陽イオンは層になって並んでいます。",

    // widget string (assets/js/widgets-s2-3.js)
    "The layers can slide over each other when a force is applied.": "力を加えると、層はたがいにすべります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The metallic bond is non-directional, so the attraction between the cations and the delocalized electrons is not broken.": "金属結合には方向性がないので、陽イオンと非局在化電子の間の引力は切れません。",

    // widget string (assets/js/widgets-s2-3.js)
    "The delocalized electrons are free to move and carry charge.": "非局在化電子は自由に動き、電荷を運びます。",

    // widget string (assets/js/widgets-s2-3.js)
    "This is true, but it explains electrical conductivity. It does not say why a metal can change shape without breaking.": "これは正しい文ですが、電気伝導性の説明です。金属が割れずに形を変えられる理由にはなっていません。",

    // widget string (assets/js/widgets-s2-3.js)
    "The intermolecular forces between the layers are weak.": "層の間の分子間力が弱いです。",

    // widget string (assets/js/widgets-s2-3.js)
    "A metal contains no molecules, so it has no intermolecular forces. The layers of cations are held together by metallic bonding.": "金属には分子がないので、分子間力もありません。陽イオンの層をまとめているのは金属結合です。",

    // widget string (assets/js/widgets-s2-3.js)
    "The metallic bonds are weak, so they break when the metal is hit.": "金属結合は弱いので、金属をたたくと切れます。",

    // widget string (assets/js/widgets-s2-3.js)
    "The bond is not broken when the layers slide. That is the point: the cations are still attracted to the delocalized electrons in their new positions.": "層がすべっても、結合は切れません。そこが大事な点です。陽イオンは、新しい位置でも非局在化電子に引きつけられています。",

    // widget string (assets/js/widgets-s2-3.js)
    "Melting point: Mg and Na": "融点：Mg と Na",

    // widget string (assets/js/widgets-s2-3.js)
    "Explain why magnesium has a higher melting point than sodium.": "マグネシウムの融点がナトリウムより高い理由を説明しなさい (explain)。",

    // widget string (assets/js/widgets-s2-3.js)
    "The magnesium ion has a greater charge (2+) than the sodium ion (1+).": "マグネシウムイオンの電荷（2+）は、ナトリウムイオンの電荷（1+）より大きいです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Magnesium has two delocalized electrons per atom. Sodium has one.": "原子 1 個あたりの非局在化電子は、マグネシウムが 2 個、ナトリウムが 1 個です。",

    // widget string (assets/js/widgets-s2-3.js)
    "The magnesium ion has a smaller ionic radius than the sodium ion.": "マグネシウムイオンは、ナトリウムイオンよりイオン半径が小さいです。",

    // widget string (assets/js/widgets-s2-3.js)
    "So the electrostatic attraction between the cations and the delocalized electrons is stronger in magnesium, and more energy is needed to overcome it.": "そのため、陽イオンと非局在化電子の間の静電気的な引力はマグネシウムのほうが強く、それに打ち勝つのに必要なエネルギーが大きくなります。",

    // widget string (assets/js/widgets-s2-3.js)
    "Magnesium atoms have a greater mass, so they need more energy to melt.": "マグネシウム原子のほうが質量が大きいので、融解に必要なエネルギーが大きくなります。",

    // widget string (assets/js/widgets-s2-3.js)
    "Mass is not the reason. Caesium atoms are much heavier than lithium atoms, but caesium melts at a much lower temperature.": "質量は理由ではありません。セシウム原子はリチウム原子よりずっと重いですが、セシウムのほうがずっと低い温度で融解します。",

    // widget string (assets/js/widgets-s2-3.js)
    "Magnesium has stronger intermolecular forces.": "マグネシウムのほうが分子間力が強いです。",

    // widget string (assets/js/widgets-s2-3.js)
    "A metal contains no molecules. Use “metallic bonding” or “the attraction between the cations and the delocalized electrons”.": "金属には分子がありません。「metallic bonding」（金属結合）または「the attraction between the cations and the delocalized electrons」（陽イオンと非局在化電子の間の引力）と書きましょう。",

    // widget string (assets/js/widgets-s2-3.js)
    "The attraction between the magnesium ions is stronger.": "マグネシウムイオンどうしの引力のほうが強いです。",

    // widget string (assets/js/widgets-s2-3.js)
    "The cations are all positive, so they repel each other. The attraction is between the cations and the delocalized electrons.": "陽イオンはすべて正の電荷をもつので、たがいに反発します。引力がはたらくのは、陽イオンと非局在化電子の間です。",

    // widget string (assets/js/widgets-s2-3.js)
    "Melting point: K and Na": "融点：K と Na",

    // widget string (assets/js/widgets-s2-3.js)
    "Explain why potassium has a lower melting point than sodium.": "カリウムの融点がナトリウムより低い理由を説明しなさい (explain)。",

    // widget string (assets/js/widgets-s2-3.js)
    "Both ions have a 1+ charge, and each atom gives one delocalized electron.": "どちらのイオンも電荷は 1+ で、原子 1 個が非局在化電子を 1 個出します。",

    // widget string (assets/js/widgets-s2-3.js)
    "The potassium ion has a larger ionic radius than the sodium ion.": "カリウムイオンは、ナトリウムイオンよりイオン半径が大きいです。",

    // widget string (assets/js/widgets-s2-3.js)
    "So the electrostatic attraction between the cations and the delocalized electrons is weaker in potassium, and less energy is needed to overcome it.": "そのため、陽イオンと非局在化電子の間の静電気的な引力はカリウムのほうが弱く、それに打ち勝つのに必要なエネルギーは小さくなります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The potassium ion has a smaller charge than the sodium ion.": "カリウムイオンは、ナトリウムイオンより電荷が小さいです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Both are in group 1, so both form 1+ ions. The charge is the same. The difference is the ionic radius.": "どちらも 1 族なので、どちらも 1+ のイオンになります。電荷は同じです。違うのはイオン半径です。",

    // widget string (assets/js/widgets-s2-3.js)
    "Potassium has fewer delocalized electrons per atom than sodium.": "カリウムは、ナトリウムより原子 1 個あたりの非局在化電子が少ないです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Each atom gives one delocalized electron in both metals. Check the group: both are in group 1.": "どちらの金属でも、原子 1 個が非局在化電子を 1 個出します。族を確かめましょう。どちらも 1 族です。",

    // widget string (assets/js/widgets-s2-3.js)
    "Potassium loses its outer electron more easily, so it is more reactive.": "カリウムのほうが外側の電子を失いやすいので、反応性が高いです。",

    // widget string (assets/js/widgets-s2-3.js)
    "This is true, but it is about chemical reactivity. Melting is a physical change. The question asks about the strength of the metallic bond.": "これは正しい文ですが、化学的な反応性の話です。融解は物理変化です。問われているのは金属結合の強さです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Additional HL: melting point of Fe and Ca": "HL 追加内容（AHL）：Fe と Ca の融点",

    // widget string (assets/js/widgets-s2-3.js)
    "Explain why iron, a transition element, has a much higher melting point than calcium.": "遷移元素である鉄の融点が、カルシウムよりずっと高い理由を説明しなさい (explain)。",

    // widget string (assets/js/widgets-s2-3.js)
    "In iron, 3d electrons are delocalized as well as 4s electrons.": "鉄では、4s 電子に加えて 3d 電子も非局在化します。",

    // widget string (assets/js/widgets-s2-3.js)
    "So iron has more delocalized electrons per atom than calcium, which has only its two 4s electrons.": "そのため、鉄は、2 個の 4s 電子しかないカルシウムより、原子 1 個あたりの非局在化電子が多くなります。",

    // widget string (assets/js/widgets-s2-3.js)
    "The electrostatic attraction between the cations and the delocalized electrons is stronger in iron, so more energy is needed to overcome it.": "陽イオンと非局在化電子の間の静電気的な引力は鉄のほうが強いので、それに打ち勝つのに必要なエネルギーが大きくなります。",

    // widget string (assets/js/widgets-s2-3.js)
    "Iron has variable oxidation states and forms coloured compounds.": "鉄は複数の酸化数をとり、有色の化合物をつくります。",

    // widget string (assets/js/widgets-s2-3.js)
    "These are chemical properties of transition elements (Structure 3.1). They do not explain a melting point.": "これらは遷移元素の化学的性質です（Structure 3.1）。融点の説明にはなりません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Iron atoms have a greater mass than calcium atoms.": "鉄原子は、カルシウム原子より質量が大きいです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Mass is not the reason. Melting point depends on the strength of the metallic bond.": "質量は理由ではありません。融点は、金属結合の強さで決まります。",

    // widget string (assets/js/widgets-s2-3.js)
    "Iron atoms are joined by strong covalent bonds.": "鉄原子は、強い共有結合で結びついています。",

    // widget string (assets/js/widgets-s2-3.js)
    "Iron is a metal. Its bonding is metallic: an attraction between cations and delocalized electrons, not shared pairs between two atoms.": "鉄は金属です。その結合は金属結合で、陽イオンと非局在化電子の間の引力です。2 つの原子の間の共有電子対ではありません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Question": "問題",

    // widget string (assets/js/widgets-s2-3.js)
    "Check my answer": "答え合わせ",

    // widget string (assets/js/widgets-s2-3.js)
    "Show a model answer": "模範解答を見る",

    // widget string (assets/js/widgets-s2-3.js)
    "Tick every sentence that belongs in a full-mark answer. Leave out the ones that are wrong or that do not answer the question.": "満点の答えに入る文すべてにチェックを付けましょう。間違っている文や、問いに答えていない文は選びません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Marking points chosen": "選んだ採点ポイント",

    // widget string (assets/js/widgets-s2-3.js)
    "Marking point.": "採点ポイントです。",

    // widget string (assets/js/widgets-s2-3.js)
    "Leave this out.": "これは入れません。",

    // widget string (assets/js/widgets-s2-3.js)
    "{chosen} / {total}": "{chosen} / {total}",

    // widget string (assets/js/widgets-s2-3.js)
    "You chose every marking point and nothing else. Read your answer below: this is how to write it in the exam.": "採点ポイントをすべて選び、余分な文は 1 つも選びませんでした。下の自分の答えを読みましょう。試験ではこのように書きます。",

    // widget string (assets/js/widgets-s2-3.js)
    "One of your sentences should not be there. Read the note under it.": "選んだ文のうち 1 つは、答えに入れてはいけません。その文の下の説明を読みましょう。",

    // widget string (assets/js/widgets-s2-3.js)
    "{n} of your sentences should not be there. Read the note under each one.": "選んだ文のうち {n} つは、答えに入れてはいけません。それぞれの文の下の説明を読みましょう。",

    // widget string (assets/js/widgets-s2-3.js)
    "One marking point is still missing. Look for what the answer has not said yet.": "採点ポイントがあと 1 つ足りません。答えにまだ書いていないことを探しましょう。",

    // widget string (assets/js/widgets-s2-3.js)
    "{n} marking points are still missing. Look for what the answer has not said yet.": "採点ポイントがあと {n} つ足りません。答えにまだ書いていないことを探しましょう。",

    // widget string (assets/js/widgets-s2-3.js)
    "Full marks": "満点",

    // widget string (assets/js/widgets-s2-3.js)
    "Not yet": "まだ正解ではありません",

    // widget string (assets/js/widgets-s2-3.js)
    "Your answer so far": "ここまでのあなたの答え",

    // widget string (assets/js/widgets-s2-3.js)
    "Nothing chosen yet.": "まだ何も選んでいません。",

    // widget string (assets/js/widgets-s2-3.js)
    "Model answer": "模範解答",

  }
});
