/* s2-4 — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's2-4', {
  strings: {

    // page title (browser tab)
    "2.4 From models to materials | Structure Lab": "2.4 モデルから材料へ | Structure Lab",

    // From models to materials > page header > p
    "Structure 2.4": "Structure 2.4",

    // From models to materials > page header > h1
    "From models to materials": "モデルから材料へ",

    // From models to materials > page header > span
    "What role do bonding and structure have in the design of materials?": "材料を設計するとき、結合と構造はどんな役割をもつのでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes.": "ノートを見ないでできるようになったものから、チェックを入れましょう。",

    // What you need to be able to do > checklist > span
    "Describe bonding as a continuum between the ionic, covalent and metallic models, and use the models to explain the properties of a material.": "結合を、イオン結合・共有結合・金属結合の 3 つのモデルの間で連続的に変化するものとして記述する。モデルを使って材料の性質を説明する。",

    // What you need to be able to do > checklist > span
    "Find the position of a binary compound in the bonding triangle from electronegativity data.": "電気陰性度のデータから、二元化合物が結合の三角形のどこにくるかを求める。",

    // What you need to be able to do > checklist > span
    "Predict the properties of a compound from its position in the bonding triangle.": "結合の三角形での位置から、化合物の性質を予測する。",

    // What you need to be able to do > checklist > span
    "Say what an alloy is, and explain the properties of alloys using non-directional bonding.": "合金とは何かを言える。方向性のない結合を使って、合金の性質を説明する。",

    // What you need to be able to do > checklist > span
    "Say what polymers and monomers are, and describe the common properties of plastics using their structure.": "高分子と単量体（モノマー）とは何かを言える。プラスチックに共通する性質を、構造を使って記述する。",

    // What you need to be able to do > checklist > span
    "Draw the repeating unit of an addition polymer from a given monomer.": "与えられた単量体から、付加重合体の繰り返し単位を描く。",

    // What you need to be able to do > checklist > span
    "Deduce the monomer from a section of an addition polymer.": "付加重合体の一部分から、単量体を導く。",

    // What you need to be able to do > checklist > Additional HL > span
    "Draw the repeating unit of a polyamide or a polyester from given monomers, and name the small molecule released.": "与えられた単量体から、ポリアミドやポリエステルの繰り返し単位を描く。放出される小さな分子の名前を言う。",

    // What you need to be able to do > checklist > Additional HL > span
    "State that biological macromolecules form by condensation and break down by hydrolysis, and deduce the monomers from a condensation polymer.": "生体の巨大分子は縮合でできて加水分解でこわれる、と述べる。縮合重合体から単量体を導く。",

    // Bonding is a continuum > data-toc attribute
    "The bonding continuum": "結合の連続性",

    // Bonding is a continuum > h2
    "Bonding is a continuum": "結合は連続的に変化する",

    // Bonding is a continuum > p
    "Think of a colour chart for paint. Red, yellow and blue sit at the corners. Most paints are a mixture, somewhere between the corners. Bonding works in a similar way.": "絵の具の色見本を思い浮かべてください。赤・黄・青が 3 つの角にあります。ほとんどの色は混ぜてつくった色で、角と角の間のどこかにあります。結合も、これと似ています。",

    // Bonding is a continuum > p
    "In Structure 2.1, 2.2 and 2.3 you met three bonding models. Each model describes one extreme kind of bonding.": "Structure 2.1、2.2、2.3 で、3 つの結合モデルを学びました。どのモデルも、結合の両極端の 1 つを表しています。",

    // Bonding is a continuum > table > caption
    "The three bonding models": "3 つの結合モデル",

    // Bonding is a continuum > table > th
    "Model": "モデル",

    // Bonding is a continuum > table > th
    "What attracts what": "何と何が引き合うか",

    // Bonding is a continuum > table > th
    "Typical properties": "代表的な性質",

    // Bonding is a continuum > table > th
    // Placing a compound in the bonding triangle > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Ionic": "イオン結合",

    // Bonding is a continuum > table > td
    "Electrostatic attraction between oppositely charged ions in a lattice.": "結晶格子の中で、反対の電荷をもつイオンどうしにはたらく静電気的な引力 (electrostatic attraction)。",

    // Bonding is a continuum > table > td
    "High melting point. Brittle. Conducts electricity only when molten or dissolved, because then the ions can move.": "融点が高い。もろい。電気を通すのは、融解したときか水に溶けたときだけ。そのときはイオンが動けるからです。",

    // Bonding is a continuum > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Covalent": "共有結合",

    // Bonding is a continuum > table > td
    "Electrostatic attraction between a shared pair of electrons and the two positively charged nuclei.": "共有電子対と、正の電荷をもつ 2 つの原子核との間にはたらく静電気的な引力。",

    // Bonding is a continuum > table > td
    "Does not conduct, because there are no mobile charged particles. Molecular substances have low melting points. Covalent networks have very high melting points.": "電気を通さない。動ける荷電粒子がないからです。分子でできた物質は融点が低い。共有結合の結晶は融点がとても高い。",

    // Bonding is a continuum > table > th
    // Placing a compound in the bonding triangle > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Metallic": "金属結合",

    // Bonding is a continuum > table > td
    "Electrostatic attraction between a lattice of cations and delocalized electrons.": "結晶格子をつくる陽イオンと、非局在化電子 (delocalized electrons)（自由電子）との間にはたらく静電気的な引力。",

    // Bonding is a continuum > table > td
    // Placing a compound in the bonding triangle > table > td
    "Conducts electricity and heat as a solid. Malleable.": "固体のままで電気と熱をよく通す。展性がある。",

    // Bonding is a continuum > p
    "Real substances do not fall into three separate boxes. The bonding in most substances has some character of more than one model. Chemists say that bonding is a <dfn data-def=\"A smooth range with no sharp dividing lines. Bonding changes gradually from one type to another.\">continuum</dfn>: it changes gradually from one type to another.": "実際の物質は、3 つの箱にきれいに分かれるわけではありません。ほとんどの物質の結合は、2 つ以上のモデルの性格をあわせもっています。化学では、結合は<dfn data-def=\"はっきりした境目のない、なめらかにつながった範囲のことです。結合は、ある種類から別の種類へ少しずつ変わります。\">連続体 <span class=\"en-term\">(continuum)</span></dfn>だと言います。ある種類から別の種類へ、少しずつ変わっていくという意味です。",

    // Bonding is a continuum > data-def attribute
    "A smooth range with no sharp dividing lines. Bonding changes gradually from one type to another.": "はっきりした境目のない、なめらかにつながった範囲のことです。結合は、ある種類から別の種類へ少しずつ変わります。",

    // Bonding is a continuum > p
    "One example is hydrogen chloride. Its bond is covalent, but chlorine attracts the shared electrons more strongly than hydrogen does. The bond is polar. It is covalent with some ionic character.": "塩化水素がその例です。結合は共有結合ですが、塩素は水素よりも強く共有電子を引きつけます。だから、この結合には極性があります。イオン結合の性格を少しもった共有結合です。",

    // Bonding is a continuum > key idea > p
    "Ionic, covalent and metallic are models, not boxes. The bonding in a real material is usually somewhere between them. The position between the models explains the properties of the material.": "イオン結合・共有結合・金属結合はモデルであって、物質を分ける箱ではありません。実際の材料の結合は、たいていその間のどこかにあります。どのあたりにあるかで、材料の性質を説明できます。",

    // Bonding is a continuum > h3
    "The bonding triangle": "結合の三角形",

    // Bonding is a continuum > p
    "The <dfn data-def=\"A diagram with ionic, covalent and metallic bonding at its three corners. A substance is placed on it using the electronegativities of its two elements.\">bonding triangle</dfn> is a map of this continuum. The three pure models sit at the three corners. A substance gets a position on the map from the electronegativities of its elements.": "<dfn data-def=\"イオン結合・共有結合・金属結合を 3 つの角に置いた図です。物質の位置は、2 つの元素の電気陰性度から決めます。\">結合の三角形 <span class=\"en-term\">(bonding triangle)</span></dfn>は、この連続的な変化を表す地図です。3 つの純粋なモデルが、3 つの角にあります。物質が地図のどこにくるかは、元素の電気陰性度から決まります。",

    // Bonding is a continuum > data-def attribute
    "A diagram with ionic, covalent and metallic bonding at its three corners. A substance is placed on it using the electronegativities of its two elements.": "イオン結合・共有結合・金属結合を 3 つの角に置いた図です。物質の位置は、2 つの元素の電気陰性度から決めます。",

    // Bonding is a continuum > p
    "Remember that <dfn data-def=\"A measure of how strongly an atom attracts the shared pair of electrons in a covalent bond.\">electronegativity</dfn>, symbol <i>χ</i>, measures how strongly an atom attracts a shared pair of electrons.": "思い出しましょう。<dfn data-def=\"共有結合の共有電子対を、原子がどれだけ強く引きつけるかを表す尺度です。\">電気陰性度 <span class=\"en-term\">(electronegativity)</span></dfn>（記号 <i>χ</i>）は、原子が共有電子対をどれだけ強く引きつけるかを表します。",

    // Bonding is a continuum > data-def attribute
    "A measure of how strongly an atom attracts the shared pair of electrons in a covalent bond.": "共有結合の共有電子対を、原子がどれだけ強く引きつけるかを表す尺度です。",

    // Bonding is a continuum > widget > data-title attribute
    "A map of bonding": "結合の地図",

    // Bonding is a continuum > widget > figcaption
    "Choose a region to see what it means. The outline follows the triangle printed in section 17 of the data booklet. The dashed lines belong to the percentage scale on the right. In the booklet the left corner is labelled 0.79. The printed outline is drawn a little too small at the top and on the right. So the point for CsF sits just above its tip.": "領域を選ぶと、その意味が出ます。輪郭は、データブックレットのセクション 17 にある三角形と同じです。破線は、右側の百分率の目盛りのものです。データブックレットでは、左の角に 0.79 と書いてあります。印刷された輪郭は、上と右が少し小さめに描かれています。そのため、CsF の点は頂点のすぐ上にきます。",

    // Bonding is a continuum > li
    "<strong>Bottom left, metallic.</strong> Both elements have low electronegativity. Neither holds its outer electrons strongly, so the electrons are delocalized.": "<strong>左下：金属結合。</strong>どちらの元素も電気陰性度が低い。どちらも外側の電子を強く引きつけないので、電子は非局在化しています。",

    // Bonding is a continuum > li
    "<strong>Bottom right, covalent.</strong> Both elements have high electronegativity. Both attract electrons strongly, so the electrons are shared.": "<strong>右下：共有結合。</strong>どちらの元素も電気陰性度が高い。どちらも電子を強く引きつけるので、電子は共有されます。",

    // Bonding is a continuum > li
    "<strong>Top, ionic.</strong> One element has low electronegativity and one has high electronegativity. Electrons are transferred, so ions form.": "<strong>上：イオン結合。</strong>一方の元素は電気陰性度が低く、もう一方は高い。電子が移るので、イオンができます。",

    // Bonding is a continuum > p
    "Between the covalent corner and the ionic top, the sharing becomes more and more unequal. This part is labelled <dfn>polar covalent</dfn>. The booklet prints no line between “covalent” and “polar covalent”, because the change is gradual.": "共有結合の角からイオン結合の頂点に向かうにつれて、電子の共有はだんだんかたよっていきます。この部分には<dfn>極性共有結合 <span class=\"en-term\">(polar covalent)</span></dfn>と書いてあります。データブックレットの図では、「covalent」と「polar covalent」の間に線がありません。変化がゆるやかだからです。",

    // Bonding is a continuum > data booklet note > p
    "The triangular bonding diagram is in section 17 of the data booklet. Electronegativity values are in section 9. You do not need to remember either.": "三角形の結合の図は、データブックレットのセクション 17 にあります。電気陰性度の値はセクション 9 にあります。どちらも覚える必要はありません。",

    // Bonding is a continuum > exam tip (shown in English + translation) > p
    "When you explain a property, name the particles and the attraction. For example: “strong electrostatic attraction between oppositely charged ions” or “delocalized electrons are free to move”. A bare phrase such as “strong bonds” does not earn the mark.": "性質を説明するときは、粒子の名前と引力の名前を書きましょう。たとえば「反対の電荷をもつイオンの間の強い静電気的な引力」や「非局在化電子が自由に動ける」と書きます。「結合が強い」とだけ書いても、点になりません。",

    // Bonding is a continuum > data-title attribute
    "The bonding continuum: quick check": "結合の連続性：確認クイズ",

    // Placing a compound in the bonding triangle > data-toc attribute
    "Using the triangle": "三角形の使い方",

    // Placing a compound in the bonding triangle > h2
    "Placing a compound in the bonding triangle": "化合物を結合の三角形に置く",

    // Placing a compound in the bonding triangle > p
    "A map needs two coordinates. For the bonding triangle, you calculate both from the electronegativities of the two elements.": "地図には 2 つの座標が必要です。結合の三角形では、どちらの座標も 2 つの元素の電気陰性度から計算します。",

    // Placing a compound in the bonding triangle > equation > maths line
    "Δ<i>χ</i> = |<i>χ</i><sub>a</sub> − <i>χ</i><sub>b</sub>| &nbsp;&nbsp;&nbsp; average <i>χ</i> = <span class=\"frac\"><span><i>χ</i><sub>a</sub> + <i>χ</i><sub>b</sub></span><span>2</span></span>": "Δ<i>χ</i> = |<i>χ</i><sub>a</sub> − <i>χ</i><sub>b</sub>| &nbsp;&nbsp;&nbsp; 平均 <i>χ</i> = <span class=\"frac\"><span><i>χ</i><sub>a</sub> + <i>χ</i><sub>b</sub></span><span>2</span></span>",

    // Placing a compound in the bonding triangle > equation > dd
    "electronegativities of the two elements (no unit)": "2 つの元素の電気陰性度（単位なし）",

    // Placing a compound in the bonding triangle > equation > dd
    "electronegativity difference: the vertical axis (no unit)": "電気陰性度の差：縦軸（単位なし）",

    // Placing a compound in the bonding triangle > equation > dt
    "average χ": "平均 χ",

    // Placing a compound in the bonding triangle > equation > dd
    "average electronegativity: the horizontal axis (no unit)": "電気陰性度の平均：横軸（単位なし）",

    // Placing a compound in the bonding triangle > p
    "The two vertical bars mean “the size of the difference”. Always subtract the smaller value from the larger value, so the answer is positive.": "2 本の縦線は「差の大きさ」という意味です。いつも大きい値から小さい値を引いて、答えが正になるようにします。",

    // Placing a compound in the bonding triangle > h3
    "Method in words": "解き方を言葉で",

    // Placing a compound in the bonding triangle > li
    "Look up the electronegativity of each element (data booklet, section 9).": "それぞれの元素の電気陰性度を調べます（データブックレットのセクション 9）。",

    // Placing a compound in the bonding triangle > li
    "Subtract the smaller value from the larger value. This is the difference, Δ<i>χ</i>. It goes <strong>up</strong> the triangle.": "大きい値から小さい値を引きます。これが差 Δ<i>χ</i> です。三角形を<strong>上に</strong>進む向きの座標です。",

    // Placing a compound in the bonding triangle > li
    "Add the two values and divide by 2. This is the average. It goes <strong>along</strong> the triangle.": "2 つの値を足して 2 で割ります。これが平均です。三角形を<strong>横に</strong>進む向きの座標です。",

    // Placing a compound in the bonding triangle > li
    "Find the point on the triangle and read the region.": "三角形の上でその点を見つけ、どの領域にあるかを読みます。",

    // Placing a compound in the bonding triangle > li
    "Use the region to predict the properties.": "その領域から性質を予測します。",

    // Placing a compound in the bonding triangle > p
    "The numbers in the formula do not matter. For <span class=\"chem\">MgCl2</span> you use one value for Mg and one value for Cl. You do not count the chlorine twice.": "化学式の中の数字は関係ありません。<span class=\"chem\">MgCl2</span> なら、Mg の値を 1 つと Cl の値を 1 つ使います。塩素を 2 回数えることはしません。",

    // Placing a compound in the bonding triangle > table > caption
    "Electronegativity values used on this page (data booklet, section 9)": "このページで使う電気陰性度の値（データブックレットのセクション 9）",

    // Placing a compound in the bonding triangle > table > th
    "Element": "元素",

    // Placing a compound in the bonding triangle > table > th
    "Na": "Na",

    // Placing a compound in the bonding triangle > table > th
    "Mg": "Mg",

    // Placing a compound in the bonding triangle > table > th
    "Cl": "Cl",

    // Placing a compound in the bonding triangle > table > th
    "Al": "Al",

    // Placing a compound in the bonding triangle > table > th
    "Si": "Si",

    // Placing a compound in the bonding triangle > table > th
    "Ca": "Ca",

    // Placing a compound in the bonding triangle > table > th
    "Br": "Br",

    // Placing a compound in the bonding triangle > widget > data-title attribute
    "Bonding triangle plotter": "結合の三角形に点を打つ",

    // Placing a compound in the bonding triangle > widget > figcaption
    "Choose two elements, or pick an example. The working shows both coordinates. Then press “Predict first” and decide the region before the point is shown. The outline is the triangle printed in the data booklet. Points for fluorides fall just outside it. Your numbers are still right: read the nearest region.": "元素を 2 つ選ぶか、例を 1 つ選びます。途中の計算に 2 つの座標が出ます。次に「先に予想する」を押して、点が出る前に領域を決めてみましょう。輪郭は、データブックレットに印刷されている三角形です。フッ化物の点は、輪郭のすぐ外にきます。それでも計算した数値は正しいので、いちばん近い領域を読みましょう。",

    // Placing a compound in the bonding triangle > worked example > h3
    "Magnesium oxide on the triangle": "三角形の上の酸化マグネシウム",

    // Placing a compound in the bonding triangle > worked example > p
    "Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(O) = 3.4. Determine the position of magnesium oxide, <span class=\"chem\">MgO</span>, in the bonding triangle. Predict its bonding type and two properties.": "<i>χ</i>(Mg) = 1.3、<i>χ</i>(O) = 3.4 を使います。酸化マグネシウム <span class=\"chem\">MgO</span> が結合の三角形のどこにくるかを求めましょう。結合の種類と、性質を 2 つ予測しましょう。",

    // Placing a compound in the bonding triangle > worked example > data-title attribute
    "Find the difference": "差を求める",

    // Placing a compound in the bonding triangle > worked example > p
    "The difference is the vertical coordinate. Subtract the smaller value from the larger value.": "差は縦の座標です。大きい値から小さい値を引きます。",

    // Placing a compound in the bonding triangle > worked example > data-title attribute
    "Find the average": "平均を求める",

    // Placing a compound in the bonding triangle > worked example > p
    "The average is the horizontal coordinate. Add, then divide by 2.": "平均は横の座標です。足してから 2 で割ります。",

    // Placing a compound in the bonding triangle > worked example > maths line
    "average <i>χ</i> = (1.3 + 3.4) / 2 = 4.7 / 2 = 2.35": "平均 <i>χ</i> = (1.3 + 3.4) / 2 = 4.7 / 2 = 2.35",

    // Placing a compound in the bonding triangle > worked example > data-title attribute
    "Read the region": "領域を読む",

    // Placing a compound in the bonding triangle > worked example > p
    "Go along to 2.35 and up to 2.1. The point is in the upper part of the triangle.": "横に 2.35、上に 2.1 進みます。点は三角形の上のほうにあります。",

    // Placing a compound in the bonding triangle > worked example > maths line
    "(2.35, 2.1) is in the <b>ionic</b> region": "(2.35, 2.1) は<b>イオン結合</b>の領域にある",

    // Placing a compound in the bonding triangle > worked example > data-title attribute
    "Predict the properties": "性質を予測する",

    // Placing a compound in the bonding triangle > worked example > p
    "Use the ionic model: strong electrostatic attraction between oppositely charged ions, and ions that are fixed in the solid.": "イオン結合モデルを使います。反対の電荷をもつイオンの間に強い静電気的な引力がはたらき、固体ではイオンが動けません。",

    // Placing a compound in the bonding triangle > worked example > maths line
    "high melting point; conducts electricity when molten but not as a solid": "融点が高い；融解すると電気を通すが、固体では通さない",

    // Placing a compound in the bonding triangle > worked example > p
    "Δ<i>χ</i> = 2.1 and average <i>χ</i> = 2.35, so MgO is ionic. It has a high melting point and conducts only when molten.": "Δ<i>χ</i> = 2.1、平均 <i>χ</i> = 2.35 なので、MgO はイオン結合です。融点が高く、融解したときだけ電気を通します。",

    // Placing a compound in the bonding triangle > worked example > data-kicker attribute
    "Worked example: a contrast": "例題：くらべてみよう",

    // Placing a compound in the bonding triangle > worked example > h3
    "Phosphorus trichloride on the triangle": "三角形の上の三塩化リン",

    // Placing a compound in the bonding triangle > worked example > p
    "Use <i>χ</i>(P) = 2.2 and <i>χ</i>(Cl) = 3.2. Determine the position of phosphorus trichloride, <span class=\"chem\">PCl3</span>, in the bonding triangle. Predict its bonding type and two properties.": "<i>χ</i>(P) = 2.2、<i>χ</i>(Cl) = 3.2 を使います。三塩化リン <span class=\"chem\">PCl3</span> が結合の三角形のどこにくるかを求めましょう。結合の種類と、性質を 2 つ予測しましょう。",

    // Placing a compound in the bonding triangle > worked example > p
    "Use one value for each element. The 3 in the formula is not used.": "元素ごとに値を 1 つ使います。化学式の 3 は使いません。",

    // Placing a compound in the bonding triangle > worked example > p
    "Add the two values, then divide by 2.": "2 つの値を足してから、2 で割ります。",

    // Placing a compound in the bonding triangle > worked example > maths line
    "average <i>χ</i> = (2.2 + 3.2) / 2 = 5.4 / 2 = 2.7": "平均 <i>χ</i> = (2.2 + 3.2) / 2 = 5.4 / 2 = 2.7",

    // Placing a compound in the bonding triangle > worked example > p
    "Go along to 2.7 and up to 1.0. The point is on the right, well above the base.": "横に 2.7、上に 1.0 進みます。点は右側の、底辺よりかなり上にあります。",

    // Placing a compound in the bonding triangle > worked example > maths line
    "(2.7, 1.0) is in the <b>polar covalent</b> region": "(2.7, 1.0) は<b>極性共有結合</b>の領域にある",

    // Placing a compound in the bonding triangle > worked example > p
    "Use the covalent model: electrons are held in bonds, so no charged particles can move. <span class=\"chem\">PCl3</span> is made of small molecules, with only weak forces between them.": "共有結合モデルを使います。電子は結合の中にとどまっているので、動ける荷電粒子がありません。<span class=\"chem\">PCl3</span> は小さな分子でできていて、分子の間には弱い力しかはたらきません。",

    // Placing a compound in the bonding triangle > worked example > maths line
    "does not conduct electricity; low melting point": "電気を通さない；融点が低い",

    // Placing a compound in the bonding triangle > worked example > p
    "Δ<i>χ</i> = 1.0 and average <i>χ</i> = 2.7, so <span class=\"chem\">PCl3</span> is polar covalent. It does not conduct and it has a low melting point.": "Δ<i>χ</i> = 1.0、平均 <i>χ</i> = 2.7 なので、<span class=\"chem\">PCl3</span> は極性共有結合です。電気を通さず、融点は低くなります。",

    // Placing a compound in the bonding triangle > p
    "Compare the two examples. Both compounds contain a period 3 element joined to a more electronegative element. The larger difference puts MgO high in the triangle, in the ionic region. The smaller difference and larger average put <span class=\"chem\">PCl3</span> lower and further right, in the polar covalent region.": "2 つの例をくらべましょう。どちらの化合物も、第 3 周期の元素が、より電気陰性度の高い元素と結びついています。差が大きい MgO は三角形の高いところ、イオン結合の領域にきます。差が小さく平均が大きい <span class=\"chem\">PCl3</span> は、もっと低く、もっと右の、極性共有結合の領域にきます。",

    // Placing a compound in the bonding triangle > common mistake > p
    "Do not decide by “metal with non-metal means ionic”. Use the two numbers. Tin(IV) chloride contains a metal and a non-metal, but its point (2.6, 1.2) is in the polar covalent region. It is a liquid made of molecules.": "「金属と非金属ならイオン結合」と決めつけないようにしましょう。2 つの数値を使います。塩化スズ(IV) は金属と非金属からできていますが、点 (2.6, 1.2) は極性共有結合の領域にあります。分子でできた液体です。",

    // Placing a compound in the bonding triangle > common mistake > p
    "The average is not the sum. For <i>χ</i> values 1.3 and 3.4, the sum is 4.7 but the average is 2.35. Also check the axes: the average goes along, the difference goes up.": "平均は合計ではありません。<i>χ</i> の値が 1.3 と 3.4 なら、合計は 4.7 ですが、平均は 2.35 です。軸も確かめましょう。平均は横、差は縦です。",

    // Placing a compound in the bonding triangle > try it > data-label attribute
    "Electronegativity difference": "電気陰性度の差",

    // Placing a compound in the bonding triangle > try it > p
    "Calcium oxide is <span class=\"chem\">CaO</span>. Use <i>χ</i>(Ca) = 1.0 and <i>χ</i>(O) = 3.4. Calculate the electronegativity difference.": "酸化カルシウムは <span class=\"chem\">CaO</span> です。<i>χ</i>(Ca) = 1.0、<i>χ</i>(O) = 3.4 を使って、電気陰性度の差を計算しましょう。",

    // Placing a compound in the bonding triangle > try it > li
    "The difference is the larger value minus the smaller value.": "差は、大きい値から小さい値を引いたものです。",

    // Placing a compound in the bonding triangle > try it > li
    "Set up 3.4 − 1.0.": "3.4 − 1.0 という式を立てます。",

    // Placing a compound in the bonding triangle > try it > data-label attribute
    // widget string (assets/js/widgets-s2-4.js)
    "Average electronegativity": "電気陰性度の平均",

    // Placing a compound in the bonding triangle > try it > p
    "Now calculate the average electronegativity for calcium oxide, using the same values.": "次に、同じ値を使って、酸化カルシウムの電気陰性度の平均を計算しましょう。",

    // Placing a compound in the bonding triangle > try it > li
    "Add the two values first. Then divide by 2.": "まず 2 つの値を足します。それから 2 で割ります。",

    // Placing a compound in the bonding triangle > try it > li
    "Set up (1.0 + 3.4) / 2.": "(1.0 + 3.4) / 2 という式を立てます。",

    // Placing a compound in the bonding triangle > try it > maths line
    "average <i>χ</i> = (1.0 + 3.4) / 2 = 4.4 / 2 = 2.2": "平均 <i>χ</i> = (1.0 + 3.4) / 2 = 4.4 / 2 = 2.2",

    // Placing a compound in the bonding triangle > try it > p
    "The point (2.2, 2.4) is in the ionic region. Check it with the plotter above.": "点 (2.2, 2.4) はイオン結合の領域にあります。上の教材で確かめてみましょう。",

    // Placing a compound in the bonding triangle > try it > p
    "Silicon tetrachloride is <span class=\"chem\">SiCl4</span>. Use <i>χ</i>(Si) = 1.9 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity.": "四塩化ケイ素は <span class=\"chem\">SiCl4</span> です。<i>χ</i>(Si) = 1.9、<i>χ</i>(Cl) = 3.2 を使って、電気陰性度の平均を計算しましょう。",

    // Placing a compound in the bonding triangle > try it > li
    "Use one value for silicon and one value for chlorine. Ignore the 4 in the formula.": "ケイ素の値を 1 つ、塩素の値を 1 つ使います。化学式の 4 は無視します。",

    // Placing a compound in the bonding triangle > try it > li
    "Set up (1.9 + 3.2) / 2. Keep both decimal places.": "(1.9 + 3.2) / 2 という式を立てます。小数第 2 位まで残しましょう。",

    // Placing a compound in the bonding triangle > try it > maths line
    "average <i>χ</i> = (1.9 + 3.2) / 2 = 5.1 / 2 = 2.55": "平均 <i>χ</i> = (1.9 + 3.2) / 2 = 5.1 / 2 = 2.55",

    // Placing a compound in the bonding triangle > try it > p
    "The difference is 3.2 − 1.9 = 1.3. The point (2.55, 1.3) is in the polar covalent region.": "差は 3.2 − 1.9 = 1.3 です。点 (2.55, 1.3) は極性共有結合の領域にあります。",

    // Placing a compound in the bonding triangle > h3
    "Predicting properties from the position": "位置から性質を予測する",

    // Placing a compound in the bonding triangle > table > caption
    "What each region of the triangle predicts": "三角形のそれぞれの領域から予測できること",

    // Placing a compound in the bonding triangle > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Region": "領域",

    // Placing a compound in the bonding triangle > table > th
    "Model that fits best": "最もよく合うモデル",

    // Placing a compound in the bonding triangle > table > th
    "Properties to predict": "予測できる性質",

    // Placing a compound in the bonding triangle > table > td
    "Lattice of ions": "イオンの結晶格子",

    // Placing a compound in the bonding triangle > table > td
    "High melting point. Brittle. Does not conduct as a solid. Conducts when molten or dissolved in water.": "融点が高い。もろい。固体では電気を通さない。融解したときや水に溶けたときは通す。",

    // Placing a compound in the bonding triangle > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Covalent and polar covalent": "共有結合と極性共有結合",

    // Placing a compound in the bonding triangle > table > td
    "Shared electron pairs": "共有電子対",

    // Placing a compound in the bonding triangle > table > td
    "Does not conduct in any state. Low melting point if it is made of molecules. Very high melting point if it is a covalent network.": "どの状態でも電気を通さない。分子でできていれば融点が低い。共有結合の結晶なら融点がとても高い。",

    // Placing a compound in the bonding triangle > table > td
    "Cations and delocalized electrons": "",

    // Placing a compound in the bonding triangle > p
    "A point near a boundary has properties between the two models. Aluminium chloride, at (2.4, 1.6), lies just inside the polar covalent region, almost on the line with the ionic region. It is a solid that turns into a gas at about 180 °C. The ionic model alone does not predict such a low temperature.": "",

    // Placing a compound in the bonding triangle > p
    "When a point is almost on a line, say so in your answer. Give both numbers and write that the bonding is between the two types.": "",

    // Placing a compound in the bonding triangle > p
    "The triangle has a limit. It tells you the type of bonding. It does not tell you the structure. Carbon dioxide and silicon dioxide are both polar covalent, but <span class=\"chem\">CO2</span> is molecular and <span class=\"chem\">SiO2</span> is a covalent network.": "",

    // Placing a compound in the bonding triangle > h3
    "Reading the percentage scale": "",

    // Placing a compound in the bonding triangle > p
    "The booklet prints a scale beside the triangle. It shows the percentage covalent character and the percentage ionic character at each height. You read it at the height of your point. The two percentages always add up to 100.": "",

    // Placing a compound in the bonding triangle > table > caption
    "The scale beside the triangle (heights read from the booklet diagram)": "",

    // Placing a compound in the bonding triangle > table > th
    "Δ<i>χ</i> (about)": "",

    // Placing a compound in the bonding triangle > table > th
    "% covalent": "",

    // Placing a compound in the bonding triangle > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "% ionic": "",

    // Placing a compound in the bonding triangle > p
    "For MgO, Δ<i>χ</i> = 2.1. That height is between the 50 % ionic line and the 75 % ionic line, and closer to the 75 % line. A fair reading is about 65 to 70 % ionic.": "",

    // Placing a compound in the bonding triangle > exam tip (shown in English + translation) > p
    "Give both numbers, the difference and the average, and then the bonding type. One number alone does not earn the mark. A percentage is a reading from the diagram, so a range of answers is accepted (about 10 percentage points wide in one 2025 paper).": "",

    // Placing a compound in the bonding triangle > not needed for IB > p
    "The guide says that calculations of percentage ionic character are not required. So you never use a formula for it. Reading a percentage from the printed scale is different: it has been asked in an exam, so practise it. You also do not need the triangle for compounds of three or more elements. Only binary compounds are placed on it.": "",

    // Placing a compound in the bonding triangle > data-title attribute
    "Bonding triangle: quick check": "",

    // Alloys > h2
    "Alloys": "",

    // Alloys > p
    "A gold ring is rarely pure gold. Pure gold is so soft that a ring would bend out of shape. Jewellers mix the gold with a little copper or silver to make it harder.": "",

    // Alloys > p
    "An <dfn data-def=\"A mixture of a metal and other metals or non-metals. It has enhanced properties.\">alloy</dfn> is a mixture of a metal and other metals or non-metals. Alloys have enhanced properties: they are often harder, stronger or more resistant to corrosion than the pure metal.": "",

    // Alloys > data-def attribute
    "A mixture of a metal and other metals or non-metals. It has enhanced properties.": "",

    // Alloys > p
    "Common examples are bronze (copper with tin), brass (copper with zinc) and stainless steel (iron with chromium, nickel and a little carbon). Carbon is a non-metal, so steel shows that the added element does not have to be a metal.": "",

    // Alloys > h3
    "Why metals can form alloys": "",

    // Alloys > p
    "In a metal, cations sit in a lattice and are attracted to the delocalized electrons all around them. This attraction acts equally in every direction. Chemists say metallic bonding is <dfn data-def=\"Acting equally in all directions, not along a fixed line between two particular atoms.\">non-directional</dfn>.": "",

    // Alloys > data-def attribute
    "Acting equally in all directions, not along a fixed line between two particular atoms.": "",

    // Alloys > p
    "Because the bonding is non-directional, the lattice does not need one fixed arrangement of particular atoms. An atom of a different element can take a place in the lattice, and the delocalized electrons still hold everything together.": "",

    // Alloys > h3
    "Why alloys are often harder and stronger": "",

    // Alloys > p
    "In a pure metal, all the cations are the same size. They pack in regular layers. When a force is applied, the layers can slide over each other. That is why pure metals are malleable.": "",

    // Alloys > p
    "In an alloy, the atoms of the added element are a different size. They disrupt the regular layers. The layers cannot slide over each other as easily, so the alloy is harder and stronger.": "",

    // Alloys > widget > data-title attribute
    "Push a layer: pure metal and alloy": "",

    // Alloys > widget > figcaption
    "Choose a material, then push the top layers. This is a flat model of a few dozen ions. A real metal has layers in three dimensions. In a real alloy the layers can still slide if the force is large enough: it is harder to do, not impossible.": "",

    // Alloys > key idea > p
    "Alloys are mixtures. The amounts of the elements can vary, and the elements are not chemically combined in a fixed ratio. That is why an alloy is not a compound.": "",

    // Alloys > worked example > h3
    "Explaining the hardness of an alloy": "",

    // Alloys > worked example > p
    "Brass is an alloy of copper and zinc. Explain why brass is harder than pure copper. [2 marks]": "",

    // Alloys > worked example > data-title attribute
    "Describe the pure metal": "",

    // Alloys > worked example > p
    "An “explain” answer needs the starting picture: what makes pure copper soft.": "",

    // Alloys > worked example > maths line
    "In pure copper, the cations are all the same size and form regular layers. The layers can slide over each other.": "",

    // Alloys > worked example > data-title attribute
    "Say what the added atoms do": "",

    // Alloys > worked example > p
    "This is the first marking point. Mention the different size and the effect on the regular arrangement.": "",

    // Alloys > worked example > maths line
    "Zinc atoms are a different size from copper atoms, so they disrupt the regular layers of the lattice.": "",

    // Alloys > worked example > data-title attribute
    "Link to the property": "",

    // Alloys > worked example > p
    "This is the second marking point. Connect the structure to hardness.": "",

    // Alloys > worked example > maths line
    "<b>The layers cannot slide over each other as easily, so brass is harder.</b>": "",

    // Alloys > worked example > p
    "Zinc atoms have a different size, so they disrupt the regular layers. The layers slide over each other less easily.": "",

    // Alloys > common mistake > p
    "Do not write that an alloy is harder “because the bonds are stronger”. The mark is for the disrupted layers that slide less easily. Do not call an alloy a compound.": "",

    // Alloys > not needed for IB > p
    "You do not need to learn the composition or the uses of any particular alloy. Any alloy in a question will be described for you.": "",

    // Alloys > data-title attribute
    "Alloys: quick check": "",

    // Polymers and plastics > data-toc attribute
    // Polymers and plastics > h2
    "Polymers and plastics": "",

    // Polymers and plastics > p
    "A paper-clip chain is made by joining many identical clips, one after another. A polymer is made in the same way, from small molecules.": "",

    // Polymers and plastics > p
    "A <dfn data-def=\"A large molecule (macromolecule) made from many repeating subunits called monomers.\">polymer</dfn> is a large molecule made from many repeating subunits. The small molecules that join together are called <dfn data-def=\"A small molecule that can join with many others to form a polymer.\">monomers</dfn>. Another word for a very large molecule is <dfn>macromolecule</dfn>. One polymer chain can contain thousands of monomer units.": "",

    // Polymers and plastics > data-def attribute
    "A large molecule (macromolecule) made from many repeating subunits called monomers.": "",

    // Polymers and plastics > data-def attribute
    "A small molecule that can join with many others to form a polymer.": "",

    // Polymers and plastics > h3
    "Natural and synthetic polymers": "",

    // Polymers and plastics > li
    "<strong>Natural polymers</strong> are made by living things. Examples are starch and cellulose in plants, proteins, DNA and natural rubber.": "",

    // Polymers and plastics > li
    "<strong>Synthetic polymers</strong> are made in factories. Examples are poly(ethene), used for bags and bottles, and nylon, used for fabrics. Plastics are synthetic polymers.": "",

    // Polymers and plastics > h3
    "Properties of plastics, explained by structure": "",

    // Polymers and plastics > p
    "Two facts about the structure explain most properties of plastics.": "",

    // Polymers and plastics > li
    "Inside each chain, the atoms are joined by strong covalent bonds.": "",

    // Polymers and plastics > li
    "Between one chain and the next, there are only weak intermolecular forces.": "",

    // Polymers and plastics > table > caption
    "Common properties of plastics": "",

    // Polymers and plastics > table > th
    "Property": "",

    // Polymers and plastics > table > th
    "Kind": "",

    // Polymers and plastics > table > th
    "Reason from the structure": "",

    // Polymers and plastics > table > th
    "Unreactive (chemically inert)": "",

    // Polymers and plastics > table > td
    "chemical": "",

    // Polymers and plastics > table > td
    "The covalent bonds in the chains are strong and take a lot of energy to break.": "",

    // Polymers and plastics > table > th
    "Non-biodegradable": "",

    // Polymers and plastics > table > td
    "Microorganisms cannot easily break the strong covalent bonds, so the chains stay intact.": "",

    // Polymers and plastics > table > th
    "Electrical insulator": "",

    // Polymers and plastics > table > td
    "physical": "",

    // Polymers and plastics > table > td
    "All outer electrons are held in covalent bonds. There are no delocalized electrons or mobile ions.": "",

    // Polymers and plastics > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Poor conductor of heat": "",

    // Polymers and plastics > table > td
    "There are no delocalized electrons to carry energy quickly.": "",

    // Polymers and plastics > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Low density": "",

    // Polymers and plastics > table > td
    "The chains contain light atoms such as carbon and hydrogen, and long chains do not pack tightly.": "",

    // Polymers and plastics > table > th
    "Softens on heating and can be moulded (many plastics)": "",

    // Polymers and plastics > table > td
    "The weak forces between chains are overcome, so the chains can slide past each other.": "",

    // Polymers and plastics > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Strong for its mass": "",

    // Polymers and plastics > table > td
    "The chains are very long, so the many weak forces along each chain add up.": "",

    // Polymers and plastics > widget > data-title attribute
    "Sort the properties of plastics": "",

    // Polymers and plastics > widget > figcaption
    "Decide if each property is physical or chemical. The feedback gives the reason from the structure of the polymer.": "",

    // Polymers and plastics > p
    "The same property can be useful and harmful. Plastics are unreactive, so a plastic bottle does not react with the drink inside it. But for the same reason plastic waste is not broken down in nature. It stays in the environment for a very long time.": "",

    // Polymers and plastics > exam tip (shown in English + translation) > p
    "Read the command carefully. If a question asks for a <em>chemical</em> property of a plastic, write “unreactive”, “chemically inert” or “non-biodegradable”. A physical property, such as “strong” or “low density”, does not earn the mark.": "",

    // Polymers and plastics > not needed for IB > p
    "You do not need to learn the names, structures or uses of particular plastics. You do not need high-density and low-density poly(ethene), thermoplastic and thermosetting polymers, plasticizers or recycling codes.": "",

    // Polymers and plastics > data-title attribute
    "Polymers and plastics: quick check": "",

    // Addition polymers > data-toc attribute
    // Addition polymers > h2
    "Addition polymers": "",

    // Addition polymers > p
    "Picture a line of people, each with their arms folded. If every person unfolds their arms and holds hands with the neighbours on both sides, the line becomes one long chain. Nobody leaves the line.": "",

    // Addition polymers > data-def attribute
    "A polymer formed when the double bond in each monomer breaks and the monomers join, with no other product.": "",

    // Addition polymers > key idea > p
    "In addition polymerization the monomers add together and nothing else is made. The polymer is the only product. The repeating unit contains the same atoms as one monomer.": "",

    // Addition polymers > widget > data-title attribute
    "Addition polymer builder": "",

    // Addition polymers > widget > figcaption
    "Choose a monomer and step through. Watch the double bond become a single bond while the side groups stay where they are. Then try “Reverse: find the monomer”.": "",

    // Addition polymers > p
    "A <dfn data-def=\"The smallest group of atoms that repeats along a polymer chain.\">repeating unit</dfn> is the smallest group of atoms that repeats along the chain. It is drawn with a bond at each end that passes through square brackets. A small <i>n</i> after the brackets stands for a very large number.": "",

    // Addition polymers > data-def attribute
    "The smallest group of atoms that repeats along a polymer chain.": "",

    // Addition polymers > p
    "The equation for making poly(ethene) from ethene shows this notation.": "",

    // Addition polymers > h3
    "Method: repeating unit from a monomer": "",

    // Addition polymers > li
    "Redraw the monomer with the two double-bonded carbons side by side. Put every other group above or below those two carbons.": "",

    // Addition polymers > li
    "Change the double bond to a single bond.": "",

    // Addition polymers > li
    "Draw one new bond out from each of the two carbons, to the left and to the right. These are the continuation bonds.": "",

    // Addition polymers > li
    "Add brackets and <i>n</i> if you want. Check that each carbon has four bonds.": "",

    // Addition polymers > worked example > h3
    "Repeating unit from a monomer": "",

    // Addition polymers > worked example > p
    "Propene has the structure shown. Draw the repeating unit of the addition polymer formed from propene.": "",

    // Addition polymers > worked example > data-title attribute
    "Find the two double-bonded carbons": "",

    // Addition polymers > worked example > p
    "Only these two carbons go into the backbone of the chain. The <span class=\"chem\">CH3</span> group is not part of the double bond, so it is a side group.": "",

    // Addition polymers > worked example > maths line
    "backbone carbons: the CH<sub>2</sub> carbon and the CH carbon": "",

    // Addition polymers > worked example > data-title attribute
    "Change C=C to C–C": "",

    // Addition polymers > worked example > p
    "One bond of the double bond breaks. The carbons stay joined by a single bond.": "",

    // Addition polymers > worked example > maths line
    "CH<sub>2</sub>=CH(CH<sub>3</sub>) becomes CH<sub>2</sub>–CH(CH<sub>3</sub>)": "",

    // Addition polymers > worked example > data-title attribute
    "Add the continuation bonds": "",

    // Addition polymers > worked example > p
    "Each backbone carbon now needs one more bond. These bonds join the unit to its neighbours.": "",

    // Addition polymers > worked example > data-title attribute
    "Check and draw": "",

    // Addition polymers > worked example > p
    "Each carbon must have four bonds. The <span class=\"chem\">CH3</span> group hangs off the chain.": "",

    // Addition polymers > worked example > p
    "The repeating unit is –CH<sub>2</sub>–CH(CH<sub>3</sub>)–, with the <span class=\"chem\">CH3</span> group as a side group.": "",

    // Addition polymers > common mistake > p
    "Do not put all three carbons of propene in a row in the backbone. Only the two carbons of the double bond are in the chain. Do not leave the double bond in the repeating unit either: it has become a single bond.": "",

    // Addition polymers > h3
    "Method: monomer from a polymer": "",

    // Addition polymers > li
    "Mark off the chain two backbone carbons at a time. Each pair, with its side groups, is one repeating unit.": "",

    // Addition polymers > li
    "Copy one pair with all four side groups.": "",

    // Addition polymers > li
    "Remove the continuation bonds and draw a double bond between the two carbons.": "",

    // Addition polymers > worked example > h3
    "Monomer from a polymer": "",

    // Addition polymers > worked example > p
    "A section of an addition polymer is shown. Deduce the structure of the monomer.": "",

    // Addition polymers > worked example > data-title attribute
    "Mark one repeating unit": "",

    // Addition polymers > worked example > p
    "The repeating unit of an addition polymer has two backbone carbons. Here the pattern repeats every two carbons.": "",

    // Addition polymers > worked example > data-title attribute
    "Copy the unit": "",

    // Addition polymers > worked example > p
    "Keep all four side groups exactly where they are.": "",

    // Addition polymers > worked example > data-title attribute
    "Put the double bond back": "",

    // Addition polymers > worked example > p
    "The monomer is CH<sub>2</sub>=CH(CN).": "",

    // Addition polymers > exam tip (shown in English + translation) > p
    "The mark for a repeating unit needs the correct structure <em>and</em> a continuation bond at each end. Draw only one repeating unit: drawing two loses the mark. Brackets and <i>n</i> are not required, but they are a good habit. A bond must end on the correct atom, for example on the C of a <span class=\"chem\">CH3</span> group.": "",

    // Addition polymers > not needed for IB > data-title attribute
    // Condensation polymers > not needed for IB > Additional HL > data-title attribute
    "Comes later in the course": "",

    // Addition polymers > not needed for IB > p
    "You do not need to know how the double bond breaks, step by step. The calculation called atom economy comes in Reactivity 2.1. Here you only need the idea that an addition polymer is the only product, so no atoms are wasted.": "",

    // Addition polymers > not needed for IB > p
    "You do not need to remember the structures of monomers. A question gives you the monomer, or gives you the polymer so you can deduce the monomer.": "",

    // Addition polymers > data-title attribute
    "Addition polymers: quick check": "",

    // Condensation polymers > Additional HL > data-toc attribute
    // Condensation polymers > Additional HL > h2
    "Condensation polymers": "",

    // Condensation polymers > Additional HL > p
    "Imagine a line of people where each person must take off a glove before shaking hands with a neighbour. A chain forms, and a pile of gloves is left over. In a condensation polymer, the “glove” is a small molecule, usually water.": "",

    // Condensation polymers > Additional HL > p
    "A <dfn data-def=\"A polymer formed when functional groups on the monomers react together. A small molecule, usually water, is released each time a link forms.\">condensation polymer</dfn> forms when functional groups on the monomers react with each other. Each time two monomers join, a small molecule is released. A <dfn data-def=\"A group of atoms in a molecule that gives the molecule its typical reactions, such as –OH or –COOH.\">functional group</dfn> is a group of atoms that gives a molecule its typical reactions.": "",

    // Condensation polymers > Additional HL > data-def attribute
    "A polymer formed when functional groups on the monomers react together. A small molecule, usually water, is released each time a link forms.": "",

    // Condensation polymers > Additional HL > data-def attribute
    "A group of atoms in a molecule that gives the molecule its typical reactions, such as –OH or –COOH.": "",

    // Condensation polymers > Additional HL > p
    "Each monomer needs <strong>two</strong> functional groups, so that it can join to a neighbour on both sides. You need two kinds of condensation polymer.": "",

    // Condensation polymers > table > Additional HL > caption
    "The two kinds of condensation polymer you need": "",

    // Condensation polymers > table > Additional HL > th
    "Polymer": "",

    // Condensation polymers > table > Additional HL > th
    "Monomers": "",

    // Condensation polymers > table > Additional HL > th
    "Groups that react": "",

    // Condensation polymers > table > Additional HL > th
    // widget string (assets/js/widgets-s2-4.js)
    "Link formed": "",

    // Condensation polymers > table > Additional HL > th
    "Released": "",

    // Condensation polymers > table > Additional HL > th
    "Polyester": "",

    // Condensation polymers > table > Additional HL > td
    "a diol and a dicarboxylic acid": "",

    // Condensation polymers > table > Additional HL > th
    "Polyamide": "",

    // Condensation polymers > table > Additional HL > td
    "a diamine and a dicarboxylic acid": "",

    // Condensation polymers > Additional HL > p
    "“Di” means two. A diol has two –OH groups. A dicarboxylic acid has two –COOH groups. A diamine has two –NH<sub>2</sub> groups.": "",

    // Condensation polymers > Additional HL > p
    "The water is made from an H atom of the –OH or –NH<sub>2</sub> group and the –OH part of the –COOH group. A new bond then joins the O or N atom to the C=O carbon.": "",

    // Condensation polymers > widget > Additional HL > data-title attribute
    "Condensation polymer builder": "",

    // Condensation polymers > widget > Additional HL > figcaption
    "Choose a polymer type and step through. A box stands for the part of the monomer that does not change. Dashed outlines mark the atoms that become water. An underline marks the new link.": "",

    // Condensation polymers > Additional HL > h3
    "Method: repeating unit from two monomers": "",

    // Condensation polymers > Additional HL > li
    "Draw the two monomers side by side, with a –COOH group of one next to an –OH or –NH<sub>2</sub> group of the other.": "",

    // Condensation polymers > Additional HL > li
    "Remove the –OH from the –COOH group and one H from the other group. These atoms form <span class=\"chem\">H2O</span>.": "",

    // Condensation polymers > Additional HL > li
    "Join the C=O carbon to the O (polyester) or to the N (polyamide).": "",

    // Condensation polymers > Additional HL > li
    "At the two outer ends, remove an H from one end and an –OH from the other end. Draw continuation bonds there.": "",

    // Condensation polymers > worked example > Additional HL > h3
    "Repeating unit of a polyester": "",

    // Condensation polymers > worked example > Additional HL > p
    "A polyester is made from the two monomers shown. Draw its repeating unit and state the other product.": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Identify the groups that react": "",

    // Condensation polymers > worked example > Additional HL > p
    "An –OH group of the diol reacts with a –COOH group of the acid. This makes an ester link.": "",

    // Condensation polymers > worked example > Additional HL > maths line
    "–OH + HOOC– → ester link + H<sub>2</sub>O": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Remove the atoms that form water": "",

    // Condensation polymers > worked example > Additional HL > p
    "The H comes from the diol. The –OH comes from the –COOH group of the acid.": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Join O to the C=O carbon": "",

    // Condensation polymers > worked example > Additional HL > p
    "The oxygen of the diol bonds to the carbon of the C=O group. This –O–C(=O)– group is the ester link.": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Open both ends and draw the unit": "",

    // Condensation polymers > worked example > Additional HL > p
    "The other –OH group and the other –COOH group react in the same way with the next monomers. So the unit has a continuation bond at each end.": "",

    // Condensation polymers > worked example > Additional HL > p
    "The repeating unit is –O–(CH<sub>2</sub>)<sub>3</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–. The other product is water.": "",

    // Condensation polymers > worked example > Additional HL > h3
    "Repeating unit of a polyamide": "",

    // Condensation polymers > worked example > Additional HL > p
    "A polyamide is made from the two monomers shown. Draw its repeating unit.": "",

    // Condensation polymers > worked example > Additional HL > p
    "An –NH<sub>2</sub> group of the diamine reacts with a –COOH group of the acid. This makes an amide link.": "",

    // Condensation polymers > worked example > Additional HL > maths line
    "–NH<sub>2</sub> + HOOC– → amide link + H<sub>2</sub>O": "",

    // Condensation polymers > worked example > Additional HL > p
    "One H comes from the –NH<sub>2</sub> group, so the nitrogen keeps one H. The –OH comes from the –COOH group.": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Join N to the C=O carbon": "",

    // Condensation polymers > worked example > Additional HL > p
    "The nitrogen bonds to the carbon of the C=O group. This –N(H)–C(=O)– group is the amide link.": "",

    // Condensation polymers > worked example > Additional HL > p
    "The far –NH<sub>2</sub> group loses an H and the far –COOH group loses an –OH when they join the next monomers.": "",

    // Condensation polymers > worked example > Additional HL > p
    "The repeating unit is –NH–(CH<sub>2</sub>)<sub>4</sub>–NH–CO–(CH<sub>2</sub>)<sub>6</sub>–CO–. Water is also formed.": "",

    // Condensation polymers > common mistake > Additional HL > p
    "Each nitrogen atom in a polyamide chain still has one hydrogen atom: the link is –NH–CO–, not –N–CO–. Also remember the water. A condensation equation without the small molecule is incomplete.": "",

    // Condensation polymers > Additional HL > h3
    "Hydrolysis: the reverse reaction": "",

    // Condensation polymers > Additional HL > p
    "<dfn data-def=\"The breaking of a bond by reaction with water. It is the reverse of condensation.\">Hydrolysis</dfn> means breaking a bond by reaction with water. It is the reverse of condensation. Water breaks each ester or amide link. The –OH of water joins the C=O carbon, and the H of water joins the O or N atom. The monomers form again.": "",

    // Condensation polymers > Additional HL > data-def attribute
    "The breaking of a bond by reaction with water. It is the reverse of condensation.": "",

    // Condensation polymers > worked example > Additional HL > h3
    "Monomers from a condensation polymer": "",

    // Condensation polymers > worked example > Additional HL > p
    "The repeating unit of a polymer is shown. Identify the type of polymer and deduce the structures of the two monomers.": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Find the link": "",

    // Condensation polymers > worked example > Additional HL > p
    "Look for C=O next to N or O in the backbone. Here C=O is next to N–H.": "",

    // Condensation polymers > worked example > Additional HL > maths line
    "–NH–CO– is an amide link, so this is a polyamide": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Break every amide link": "",

    // Condensation polymers > worked example > Additional HL > p
    "Hydrolysis breaks the bond between the N and the C=O carbon. Remember that the bonds at the ends of the unit are amide links too.": "",

    // Condensation polymers > worked example > Additional HL > maths line
    "–NH–(CH<sub>2</sub>)<sub>2</sub>–NH– &nbsp; and &nbsp; –CO–(CH<sub>2</sub>)<sub>3</sub>–CO–": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Add the atoms of water": "",

    // Condensation polymers > worked example > Additional HL > p
    "Each N gains an H, giving –NH<sub>2</sub>. Each C=O carbon gains an –OH, giving –COOH.": "",

    // Condensation polymers > worked example > Additional HL > maths line
    "H<sub>2</sub>N–(CH<sub>2</sub>)<sub>2</sub>–NH<sub>2</sub> &nbsp; and &nbsp; HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH": "",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Check the monomers": "",

    // Condensation polymers > worked example > Additional HL > p
    "Each monomer must have two functional groups: a diamine and a dicarboxylic acid.": "",

    // Condensation polymers > worked example > Additional HL > p
    "It is a polyamide. The monomers are H<sub>2</sub>N–(CH<sub>2</sub>)<sub>2</sub>–NH<sub>2</sub> and HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH.": "",

    // Condensation polymers > try it > Additional HL > data-label attribute
    "Number of water molecules": "",

    // Condensation polymers > try it > Additional HL > p
    "50 molecules of a diol and 50 molecules of a dicarboxylic acid join to make one polyester chain. How many molecules of water are released?": "",

    // Condensation polymers > try it > Additional HL > li
    "One molecule of water is released for each link that forms.": "",

    // Condensation polymers > try it > Additional HL > li
    "The chain contains 100 monomer units in a row. Count the links between them, as you would count the gaps between 100 fence posts.": "",

    // Condensation polymers > try it > Additional HL > maths line
    "monomer units in the chain = 50 + 50 = 100": "",

    // Condensation polymers > try it > Additional HL > maths line
    "links = 100 − 1 = 99, so 99 molecules of H<sub>2</sub>O": "",

    // Condensation polymers > Additional HL > h3
    "Biological macromolecules": "",

    // Condensation polymers > Additional HL > p
    "All biological macromolecules form by condensation reactions and break down by hydrolysis. Proteins are an example. Amino acids join by condensation, and water is released. The link between amino acids is an amide link, so a protein is a natural polyamide. When you digest protein, hydrolysis breaks the links and gives amino acids again.": "",

    // Condensation polymers > Additional HL > p
    "The same pattern is true for carbohydrates such as starch, and for DNA. The builder above includes amino acids as its third option.": "",

    // Condensation polymers > table > Additional HL > caption
    "Addition and condensation polymers compared": "",

    // Condensation polymers > table > Additional HL > th
    "Feature": "",

    // Condensation polymers > table > Additional HL > th
    "Addition": "",

    // Condensation polymers > table > Additional HL > th
    "Condensation": "",

    // Condensation polymers > table > Additional HL > th
    "What the monomer needs": "",

    // Condensation polymers > table > Additional HL > td
    "a C=C double bond": "",

    // Condensation polymers > table > Additional HL > td
    "two functional groups": "",

    // Condensation polymers > table > Additional HL > th
    "Products": "",

    // Condensation polymers > table > Additional HL > td
    "the polymer only": "",

    // Condensation polymers > table > Additional HL > td
    "the polymer and a small molecule, usually water": "",

    // Condensation polymers > table > Additional HL > th
    "Backbone of the chain": "",

    // Condensation polymers > table > Additional HL > td
    "carbon atoms only": "",

    // Condensation polymers > table > Additional HL > td
    "contains ester or amide links": "",

    // Condensation polymers > table > Additional HL > th
    "Reversed by hydrolysis?": "",

    // Condensation polymers > table > Additional HL > td
    "no": "",

    // Condensation polymers > table > Additional HL > td
    "yes": "",

    // Condensation polymers > exam tip (shown in English + translation) > Additional HL > p
    "For a condensation repeating unit, one mark is for the correct ester or amide link. The other mark is for the continuation bonds and the rest of the structure. Draw one repeating unit only. If you are asked for the type of polymer, “condensation”, “polyester” or “polyamide” is expected.": "",

    // Condensation polymers > not needed for IB > Additional HL > p
    "You do not need the detailed structures of proteins, carbohydrates, fats or DNA. You do not need the names of particular polyesters or polyamides. Other kinds of condensation polymer are not needed as drawing tasks.": "",

    // Condensation polymers > not needed for IB > Additional HL > p
    "Alcohols, carboxylic acids, amines, esters and amides are studied as classes of compound in Structure 3.2. You do not need to know how these reactions happen, step by step. You also do not need other monomers, such as acyl chlorides, which release HCl in place of water.": "",

    // Condensation polymers > Additional HL > data-title attribute
    "Condensation polymers: quick check": "",

    // Linking it up > h2
    "Linking it up": "",

    // Linking it up > p
    "The IB guide asks these linking questions. Short answers are enough at this stage.": "",

    // Linking it up > h3
    "What are the limitations of discrete bonding categories?": "",

    // Linking it up > p
    "“Discrete” means separate. If you sort every substance into only three boxes, you lose information. Many substances lie between the models, such as polar covalent molecules and compounds near a boundary in the triangle. A single label then predicts the wrong properties. The bonding triangle is a better model because it shows the gradual change.": "",

    // Linking it up > h3
    "How do the trends in properties of period 3 oxides reflect the trend in their bonding?": "",

    // Linking it up > p
    "From sodium to sulfur, the electronegativity of the element gets closer to that of oxygen. The difference falls from 2.5 for <span class=\"chem\">Na2O</span> to 0.8 for <span class=\"chem\">SO3</span>, and the average rises. The points move down and to the right in the triangle, from ionic to polar covalent. The properties change in step: the oxides on the left are ionic solids with high melting points, and the oxides on the right are made of molecules. You will meet their acid–base behaviour in Structure 3.1.": "",

    // Linking it up > h3
    "Why are alloys more correctly described as mixtures rather than as compounds?": "",

    // Linking it up > p
    "In a compound, the elements are chemically bonded in a fixed ratio. In an alloy, the proportions can vary, and the atoms of the added element simply take places in the metal lattice. Non-directional metallic bonding makes this possible. This matches the meaning of “mixture” from Structure 1.1.": "",

    // Linking it up > h3
    "Why is the atom economy 100% for an addition polymerization reaction?": "",

    // Linking it up > p
    "The polymer is the only product. Every atom of every monomer ends up in the polymer, so no atoms are wasted. You will calculate atom economy in Reactivity 2.1.": "",

    // Linking it up > h3
    "Why do composites like reinforced concretes, which are made from ionic and covalently bonded components and steel bars, have unique properties?": "",

    // Linking it up > p
    "A <dfn data-def=\"A material made from two or more different materials that stay separate inside it. It combines their properties.\">composite</dfn> is made from two or more different materials. Each part keeps its own bonding, so the composite combines their properties. Concrete has ionic and covalent bonding. It is hard and strong when it is squeezed, but it is brittle and cracks when it is pulled or bent. Steel has metallic bonding. It is strong when it is pulled, and it bends without breaking. Reinforced concrete, with steel bars inside the concrete, resists both squeezing and pulling. Neither material can do this alone.": "",

    // Linking it up > data-def attribute
    "A material made from two or more different materials that stay separate inside it. It combines their properties.": "",

    // Linking it up > not needed for IB > p
    "Composites appear in the guide only in this linking question. You do not need to learn examples of composites or how they are made.": "",

    // Linking it up > h3
    "What are the structural features of some plastics that make them biodegradable?": "",

    // Linking it up > p
    "Most plastics have a backbone of carbon atoms joined by strong, non-polar bonds. Water and microorganisms cannot break these bonds easily. A biodegradable plastic has other groups of atoms in its backbone, such as ester links, which can react with water. The chain then breaks into small molecules. You will meet these groups in Structure 3.2.": "",

    // Linking it up > Additional HL > p
    "Ester and amide links are found in condensation polymers. They are broken by hydrolysis. So some polyesters and polyamides can be broken down in the environment, but addition polymers cannot.": "",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "",

    // Exam-style practice > p
    "Questions you have not yet answered correctly come up first, so each set changes when you come back to it. Each question gives the electronegativity values and the diagram you need. Have paper and a calculator beside you.": "",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "",

    // Exam-style practice > data-title attribute
    "2.4 foundation": "",

    // Exam-style practice > h3
    "Exam standard": "",

    // Exam-style practice > data-title attribute
    "2.4 exam standard": "",

    // Exam-style practice > h3
    "Challenge": "",

    // Exam-style practice > data-title attribute
    "2.4 challenge": "",

    // Exam-style practice > Additional HL > h3
    "Additional HL only: condensation polymers": "",

    // Exam-style practice > Additional HL > data-title attribute
    "2.4 Additional HL": "",

    // widget string (assets/js/widgets-s2-4.js)
    "hydrogen": "",

    // widget string (assets/js/widgets-s2-4.js)
    "lithium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "beryllium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "boron": "",

    // widget string (assets/js/widgets-s2-4.js)
    "carbon": "",

    // widget string (assets/js/widgets-s2-4.js)
    "nitrogen": "",

    // widget string (assets/js/widgets-s2-4.js)
    "oxygen": "",

    // widget string (assets/js/widgets-s2-4.js)
    "fluorine": "",

    // widget string (assets/js/widgets-s2-4.js)
    "sodium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "magnesium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "aluminium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "silicon": "",

    // widget string (assets/js/widgets-s2-4.js)
    "phosphorus": "",

    // widget string (assets/js/widgets-s2-4.js)
    "sulfur": "",

    // widget string (assets/js/widgets-s2-4.js)
    "chlorine": "",

    // widget string (assets/js/widgets-s2-4.js)
    "potassium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "calcium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "iron": "",

    // widget string (assets/js/widgets-s2-4.js)
    "zinc": "",

    // widget string (assets/js/widgets-s2-4.js)
    "bromine": "",

    // widget string (assets/js/widgets-s2-4.js)
    "tin": "",

    // widget string (assets/js/widgets-s2-4.js)
    "iodine": "",

    // widget string (assets/js/widgets-s2-4.js)
    "caesium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "barium": "",

    // widget string (assets/js/widgets-s2-4.js)
    "metallic": "",

    // widget string (assets/js/widgets-s2-4.js)
    "ionic": "",

    // widget string (assets/js/widgets-s2-4.js)
    "covalent or polar covalent": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Polar": "",

    // widget string (assets/js/widgets-s2-4.js)
    "covalent": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Electronegativity difference, Δχ": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The ionic model fits best. Expect a hard, brittle solid with a high melting point. It does not conduct electricity as a solid. It conducts when molten or dissolved in water.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The metallic model fits best. Expect a solid that conducts electricity and heat well and is malleable.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The covalent model fits best, and the bonds are non-polar (Δχ = 0). Expect a poor electrical conductor. The triangle cannot tell you if the substance is made of molecules (low melting point) or is a covalent network (very high melting point).": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The covalent model fits best. The bonds are polar, and more polar the higher the point sits. Expect a poor electrical conductor in every state. The triangle cannot tell you if the substance is made of molecules (low melting point) or is a covalent network (very high melting point).": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Take care: this point is very close to the boundary with the {region} region. The triangle does not give a clear answer here. Expect properties between the two models.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "This point is just outside the outline printed in the data booklet. The printed outline is drawn a little too small for points like this one (it happens with fluorides). Your two numbers are still correct. Read the nearest region: {region}.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "First element": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Second element (choose the same one for an element)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Or pick an example": "",

    // widget string (assets/js/widgets-s2-4.js)
    "(my own choice)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Predict first: new compound": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Bonding triangle. Horizontal axis: average electronegativity. Vertical axis: electronegativity difference. Metallic region at the bottom left, ionic region at the top, covalent and polar covalent region at the bottom right. The readout below gives the position of the chosen point.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Position (average, difference)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Read from the % scale": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Prediction": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Correct": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Not quite": "",

    // widget string (assets/js/widgets-s2-4.js)
    "{formula} sits in the {region} region. Check the two numbers in the working, then find the point on the triangle.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "It is close to the boundary with the {other} region, so either model on its own is a rough description.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Where would {formula} sit?": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Use χ({a}) = {xa}.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Use χ({a}) = {xa} and χ({b}) = {xb}.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Work out the difference and the average on paper. Then choose a region.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Make your prediction first.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "average": "",

    // widget string (assets/js/widgets-s2-4.js)
    "about {ionic} % ionic, {cov} % covalent": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Each corner is one pure bonding model. Most substances sit somewhere between the corners.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Bottom left: both elements have low electronegativity, and the difference is small. Neither atom holds its outer electrons strongly, so the electrons are delocalized. Sodium is an example.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Top: one element has low electronegativity and the other has high electronegativity, so the difference is large. Electrons are transferred and ions form. Caesium fluoride is a very ionic example.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Bottom right: both elements have high electronegativity, and the difference is small. Both atoms attract the electrons strongly, so the electrons are shared. Chlorine is an example. Higher up this region the sharing is unequal: polar covalent.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Explain a region": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The whole triangle": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Bonding triangle with example substances. Sodium is in the metallic corner, chlorine in the covalent corner and caesium fluoride at the ionic top. Sodium chloride is in the ionic region. Silicon dioxide is in the polar covalent region. On a wide screen hydrogen chloride is also shown there.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "What this region means": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Material": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Pure metal": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Alloy: some larger atoms added": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Alloy: some smaller atoms added": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Push the top layers": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Reset": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Model of a metal lattice: rows of positive ions in a sea of delocalized electrons. In the alloy some ions are a different size, so the rows are no longer regular.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "What happened": "",

    // widget string (assets/js/widgets-s2-4.js)
    "force": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Shaded background: delocalized electrons (not drawn one by one)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "All ions are the same size: regular layers": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Dark circles: atoms of the added element": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Nothing yet. Press “Push the top layers”.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The layers have moved two places. Press Reset to try again.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The layers slid one place. Every ion is still surrounded by delocalized electrons, so the metallic bonding is unchanged. The metal changed shape without breaking: it is malleable.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The layers hardly moved. The different-sized atoms break up the regular layers, so the layers cannot slide past each other as easily. The same force gives less change of shape: the alloy is harder and stronger.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Does not conduct electricity": "",

    // widget string (assets/js/widgets-s2-4.js)
    "All the outer electrons are held in covalent bonds. There are no delocalized electrons and no mobile ions to carry charge.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Does not react with water, air, acids or alkalis": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The chains are held together by strong covalent bonds, which take a lot of energy to break. So the polymer is chemically unreactive (inert).": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The chains are made mostly of light atoms such as carbon and hydrogen, and long chains do not pack tightly.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Not broken down by microorganisms (non-biodegradable)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "This is a chemical property: it is about reactions. The strong covalent bonds in the chains are not easily broken, so the plastic stays in the environment for a very long time.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Softens when heated, so it can be moulded into shapes": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Only weak intermolecular forces hold one chain to the next. Gentle heating gives the chains enough energy to slide past each other. No covalent bonds break.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "There are no delocalized electrons to carry energy quickly through the material.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Each chain is very long, so the many intermolecular forces along its length add up. The chains also tangle.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Sorted correctly": "",

    // widget string (assets/js/widgets-s2-4.js)
    "All sorted.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "In an exam, read the question carefully: if it asks for a chemical property of a plastic, a physical property earns no mark.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Start again": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Property {n} of {total}": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Physical property": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Chemical property": "",

    // widget string (assets/js/widgets-s2-4.js)
    "This is a physical property: no new substance forms.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "This is a chemical property: it describes how the plastic reacts.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Reason from the structure:": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Next property": "",

    // widget string (assets/js/widgets-s2-4.js)
    "ethene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "propene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "chloroethene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "tetrafluoroethene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "phenylethene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "propenenitrile": "",

    // widget string (assets/js/widgets-s2-4.js)
    "1,1-dichloroethene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "1,2-dichloroethene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "1,1-difluoroethene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "but-2-ene": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Monomer": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Back": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Next step": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Reverse: find the monomer": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Back to the builder": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Repeating unit": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Check": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 1 of 4: three monomer molecules": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Each monomer has a carbon to carbon double bond, C=C.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 2 of 4: open each double bond": "",

    // widget string (assets/js/widgets-s2-4.js)
    "One of the two bonds in each C=C breaks. Each of the two carbons can now form one new bond. This picture is a book-keeping model, not the reaction mechanism.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 3 of 4: join the units": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The new bonds link the carbons into one long chain. Only single bonds remain in the backbone. The side groups have not moved. No atoms are lost.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 4 of 4: the repeating unit": "",

    // widget string (assets/js/widgets-s2-4.js)
    "One pair of backbone carbons with its four side groups, in brackets. The bonds must cross the brackets. The letter n means a very large number.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Three separate molecules of {name}, each with a carbon to carbon double bond": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Three units of {name} with the double bonds opened: each unit has a single bond between its two carbons and one free bond at each end": "",

    // widget string (assets/js/widgets-s2-4.js)
    "A chain of three repeating units made from {name}: six backbone carbons joined by single bonds, with a continuation bond at each end": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Repeating unit of the polymer of {name}: {unit}, in square brackets with n": "",

    // widget string (assets/js/widgets-s2-4.js)
    "reach step 4": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The repeating unit has the same atoms as one monomer: nothing is lost, so the atom economy is 100 %.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Count the atoms at each step. The number never changes.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Find the monomer.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "This is a section of an addition polymer. Which monomer made it?": "",

    // widget string (assets/js/widgets-s2-4.js)
    "A section of an addition polymer chain with six backbone carbons. Repeating unit: {unit}": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Not this one": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The monomer is {name}, {mono}. Two neighbouring backbone carbons and their four side groups make one repeating unit. Put the double bond back between those two carbons.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Split the chain into pairs of backbone carbons. Each pair, with its four side groups, came from one monomer. Compare those side groups with this molecule, then try again.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Another polymer": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The repeating unit of an addition polymer has two backbone carbons.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Polyester: diol + dicarboxylic acid": "",

    // widget string (assets/js/widgets-s2-4.js)
    "ester link, –COO–": "",

    // widget string (assets/js/widgets-s2-4.js)
    "a diol (two –OH groups)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "a dicarboxylic acid (two –COOH groups)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Polyamide: diamine + dicarboxylic acid": "",

    // widget string (assets/js/widgets-s2-4.js)
    "amide link, –CONH–": "",

    // widget string (assets/js/widgets-s2-4.js)
    "a diamine (two –NH₂ groups)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Polypeptide: amino acids": "",

    // widget string (assets/js/widgets-s2-4.js)
    "amide link, –CONH– (called a peptide bond in proteins)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "an amino acid (one –NH₂ group and one –COOH group)": "",

    // widget string (assets/js/widgets-s2-4.js)
    "a second amino acid": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Polymer type": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Small molecule released": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 1 of 5: the two monomers": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Monomer A is {A}. Monomer B is {B}. Each monomer has two functional groups, one at each end, so it can join on both sides. R¹ and R² stand for the side groups.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Monomer A is {A}. Monomer B is {B}. Each monomer has two functional groups, one at each end, so it can join on both sides. A box stands for the rest of the molecule.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Two monomers, each with a functional group at both ends": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 2 of 5: find the atoms that leave": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The dashed outlines mark an H atom on one monomer and the –OH of a –COOH group on the other monomer. Together these atoms make one molecule of water.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The same two monomers. A hydrogen atom on one monomer and the OH of a carboxyl group on the other monomer are outlined.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 3 of 5: the link forms and water is released": "",

    // widget string (assets/js/widgets-s2-4.js)
    "A new bond joins the two monomers. The underlined atoms are the {link}. The product still has a functional group at each end, so it can react again and the chain grows.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "The two monomers joined by a new link, and one molecule of water": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 4 of 5: the repeating unit": "",

    // widget string (assets/js/widgets-s2-4.js)
    "One amino acid unit with its end atoms removed, in brackets with n. R stands for the side group, which differs from one amino acid to the next.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "One unit from A joined to one unit from B, with the end H and OH removed. The bonds cross the brackets. One link is inside the unit. The second link forms where units join.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Repeating unit of the condensation polymer in square brackets with n: {unit}": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 5 of 5: hydrolysis, the reverse reaction": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Water breaks the underlined link. The –OH of water joins the C=O carbon and the H of water joins the O or N atom. The monomers form again. Biological macromolecules are broken down in the same way.": "",

    // widget string (assets/js/widgets-s2-4.js)
    "Hydrolysis: the linked molecule and one water molecule give back the two monomers. The atoms that came from water are outlined.": "",

  }
});
