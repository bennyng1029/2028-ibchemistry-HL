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
    "In Structure 2.1, 2.2 and 2.3 you met three bonding models. Each model describes one extreme kind of bonding.": "Structure 2.1、2.2、2.3 で、3 つの結合モデルを学びました。どのモデルも、結合の極端な形の 1 つを表しています。",

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
    "High melting point. Brittle. Conducts electricity only when molten or dissolved, because then the ions can move.": "融点が高い。もろい。電気を通すのは、融解したときか水に溶けたときだけ。そのときはイオンが動けるから。",

    // Bonding is a continuum > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Covalent": "共有結合",

    // Bonding is a continuum > table > td
    "Electrostatic attraction between a shared pair of electrons and the two positively charged nuclei.": "共有電子対と、正の電荷をもつ 2 つの原子核との間にはたらく静電気的な引力。",

    // Bonding is a continuum > table > td
    "Does not conduct, because there are no mobile charged particles. Molecular substances have low melting points. Covalent networks have very high melting points.": "電気を通さない。動ける荷電粒子がないから。分子でできた物質は融点が低い。共有結合の結晶は融点がとても高い。",

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
    "<strong>Bottom left, metallic.</strong> Both elements have low electronegativity. Neither holds its outer electrons strongly, so the electrons are delocalized.": "<strong>左下：金属結合。</strong>どちらの元素も電気陰性度が低く、外側の電子を強く引きつけません。そのため、電子は非局在化しています。",

    // Bonding is a continuum > li
    "<strong>Bottom right, covalent.</strong> Both elements have high electronegativity. Both attract electrons strongly, so the electrons are shared.": "<strong>右下：共有結合。</strong>どちらの元素も電気陰性度が高く、電子を強く引きつけます。そのため、電子は共有されます。",

    // Bonding is a continuum > li
    "<strong>Top, ionic.</strong> One element has low electronegativity and one has high electronegativity. Electrons are transferred, so ions form.": "<strong>上：イオン結合。</strong>一方の元素は電気陰性度が低く、もう一方は高くなっています。電子が移るので、イオンができます。",

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
    "Use <i>χ</i>(Mg) = 1.3 and <i>χ</i>(O) = 3.4. Determine the position of magnesium oxide, <span class=\"chem\">MgO</span>, in the bonding triangle. Predict its bonding type and two properties.": "<i>χ</i>(Mg) = 1.3、<i>χ</i>(O) = 3.4 を使います。酸化マグネシウム <span class=\"chem\">MgO</span> が結合の三角形のどこにくるかを求めなさい (determine)。結合の種類と、性質を 2 つ予測しなさい (predict)。",

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
    "Use <i>χ</i>(P) = 2.2 and <i>χ</i>(Cl) = 3.2. Determine the position of phosphorus trichloride, <span class=\"chem\">PCl3</span>, in the bonding triangle. Predict its bonding type and two properties.": "<i>χ</i>(P) = 2.2、<i>χ</i>(Cl) = 3.2 を使います。三塩化リン <span class=\"chem\">PCl3</span> が結合の三角形のどこにくるかを求めなさい。結合の種類と、性質を 2 つ予測しなさい。",

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
    "Calcium oxide is <span class=\"chem\">CaO</span>. Use <i>χ</i>(Ca) = 1.0 and <i>χ</i>(O) = 3.4. Calculate the electronegativity difference.": "酸化カルシウムは <span class=\"chem\">CaO</span> です。<i>χ</i>(Ca) = 1.0、<i>χ</i>(O) = 3.4 を使って、電気陰性度の差を計算しなさい (calculate)。",

    // Placing a compound in the bonding triangle > try it > li
    "The difference is the larger value minus the smaller value.": "差は、大きい値から小さい値を引いたものです。",

    // Placing a compound in the bonding triangle > try it > li
    "Set up 3.4 − 1.0.": "3.4 − 1.0 という式を立てます。",

    // Placing a compound in the bonding triangle > try it > data-label attribute
    // widget string (assets/js/widgets-s2-4.js)
    "Average electronegativity": "電気陰性度の平均",

    // Placing a compound in the bonding triangle > try it > p
    "Now calculate the average electronegativity for calcium oxide, using the same values.": "次に、同じ値を使って、酸化カルシウムの電気陰性度の平均を計算しなさい。",

    // Placing a compound in the bonding triangle > try it > li
    "Add the two values first. Then divide by 2.": "まず 2 つの値を足します。それから 2 で割ります。",

    // Placing a compound in the bonding triangle > try it > li
    "Set up (1.0 + 3.4) / 2.": "(1.0 + 3.4) / 2 という式を立てます。",

    // Placing a compound in the bonding triangle > try it > maths line
    "average <i>χ</i> = (1.0 + 3.4) / 2 = 4.4 / 2 = 2.2": "平均 <i>χ</i> = (1.0 + 3.4) / 2 = 4.4 / 2 = 2.2",

    // Placing a compound in the bonding triangle > try it > p
    "The point (2.2, 2.4) is in the ionic region. Check it with the plotter above.": "点 (2.2, 2.4) はイオン結合の領域にあります。上の教材で確かめてみましょう。",

    // Placing a compound in the bonding triangle > try it > p
    "Silicon tetrachloride is <span class=\"chem\">SiCl4</span>. Use <i>χ</i>(Si) = 1.9 and <i>χ</i>(Cl) = 3.2. Calculate the average electronegativity.": "四塩化ケイ素は <span class=\"chem\">SiCl4</span> です。<i>χ</i>(Si) = 1.9、<i>χ</i>(Cl) = 3.2 を使って、電気陰性度の平均を計算しなさい。",

    // Placing a compound in the bonding triangle > try it > li
    "Use one value for silicon and one value for chlorine. Ignore the 4 in the formula.": "ケイ素の値を 1 つ、塩素の値を 1 つ使います。化学式の 4 は無視します。",

    // Placing a compound in the bonding triangle > try it > li
    "Set up (1.9 + 3.2) / 2. Keep both decimal places.": "(1.9 + 3.2) / 2 という式を立てます。小数点以下の数字は両方とも残しましょう。",

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
    "Cations and delocalized electrons": "陽イオンと非局在化電子",

    // Placing a compound in the bonding triangle > p
    "A point near a boundary has properties between the two models. Aluminium chloride, at (2.4, 1.6), lies just inside the polar covalent region, almost on the line with the ionic region. It is a solid that turns into a gas at about 180 °C. The ionic model alone does not predict such a low temperature.": "境界線に近い点は、2 つのモデルの中間の性質をもちます。塩化アルミニウムは (2.4, 1.6) にあり、極性共有結合の領域のすぐ内側、イオン結合の領域との境界線のほぼ上にあります。固体ですが、約 180 °C で気体になります。イオン結合モデルだけでは、こんなに低い温度は予測できません。",

    // Placing a compound in the bonding triangle > p
    "When a point is almost on a line, say so in your answer. Give both numbers and write that the bonding is between the two types.": "点が境界線のほぼ上にあるときは、答えにそう書きましょう。2 つの数値を示して、結合は 2 つの種類の中間だと書きます。",

    // Placing a compound in the bonding triangle > p
    "The triangle has a limit. It tells you the type of bonding. It does not tell you the structure. Carbon dioxide and silicon dioxide are both polar covalent, but <span class=\"chem\">CO2</span> is molecular and <span class=\"chem\">SiO2</span> is a covalent network.": "三角形には限界があります。わかるのは結合の種類です。構造まではわかりません。二酸化炭素と二酸化ケイ素はどちらも極性共有結合ですが、<span class=\"chem\">CO2</span> は分子でできていて、<span class=\"chem\">SiO2</span> は共有結合の結晶です。",

    // Placing a compound in the bonding triangle > h3
    "Reading the percentage scale": "百分率の目盛りを読む",

    // Placing a compound in the bonding triangle > p
    "The booklet prints a scale beside the triangle. It shows the percentage covalent character and the percentage ionic character at each height. You read it at the height of your point. The two percentages always add up to 100.": "データブックレットでは、三角形の横に目盛りが印刷されています。それぞれの高さでの、共有結合性の割合とイオン結合性の割合を示す目盛りです。自分の点の高さで読みます。2 つの百分率を足すと、いつも 100 になります。",

    // Placing a compound in the bonding triangle > table > caption
    "The scale beside the triangle (heights read from the booklet diagram)": "三角形の横の目盛り（高さはデータブックレットの図から読んだ値）",

    // Placing a compound in the bonding triangle > table > th
    "Δ<i>χ</i> (about)": "Δ<i>χ</i>（およその値）",

    // Placing a compound in the bonding triangle > table > th
    "% covalent": "共有結合性 %",

    // Placing a compound in the bonding triangle > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "% ionic": "イオン結合性 %",

    // Placing a compound in the bonding triangle > p
    "For MgO, Δ<i>χ</i> = 2.1. That height is between the 50 % ionic line and the 75 % ionic line, and closer to the 75 % line. A fair reading is about 65 to 70 % ionic.": "MgO では Δ<i>χ</i> = 2.1 です。この高さは、イオン結合性 50 % の線と 75 % の線の間で、75 % の線に近いほうです。イオン結合性は約 65〜70 % と読むのが妥当です。",

    // Placing a compound in the bonding triangle > exam tip (shown in English + translation) > p
    "Give both numbers, the difference and the average, and then the bonding type. One number alone does not earn the mark. A percentage is a reading from the diagram, so a range of answers is accepted (about 10 percentage points wide in one 2025 paper).": "差と平均の 2 つの数値を書き、それから結合の種類を書きましょう。数値が 1 つだけでは点になりません。百分率は図から読み取る値なので、ある幅の答えが認められます（2025 年のある試験では、幅は約 10 ポイントでした）。",

    // Placing a compound in the bonding triangle > not needed for IB > p
    "The guide says that calculations of percentage ionic character are not required. So you never use a formula for it. Reading a percentage from the printed scale is different: it has been asked in an exam, so practise it. You also do not need the triangle for compounds of three or more elements. Only binary compounds are placed on it.": "『指導の手引き』には、イオン結合性の割合の計算は必要ないと書かれています。だから、公式を使って求めることはありません。ただし、印刷された目盛りから百分率を読むのは別です。試験で実際に出題されたので、練習しておきましょう。また、3 種類以上の元素からなる化合物に三角形を使う必要はありません。三角形に置くのは二元化合物だけです。",

    // Placing a compound in the bonding triangle > data-title attribute
    "Bonding triangle: quick check": "結合の三角形：確認クイズ",

    // Alloys > h2
    "Alloys": "合金",

    // Alloys > p
    "A gold ring is rarely pure gold. Pure gold is so soft that a ring would bend out of shape. Jewellers mix the gold with a little copper or silver to make it harder.": "金の指輪は、純粋な金でできていることはあまりありません。純粋な金はとてもやわらかく、指輪にすると形がゆがんでしまいます。そこで、金に銅や銀を少し混ぜて、かたくします。",

    // Alloys > p
    "An <dfn data-def=\"A mixture of a metal and other metals or non-metals. It has enhanced properties.\">alloy</dfn> is a mixture of a metal and other metals or non-metals. Alloys have enhanced properties: they are often harder, stronger or more resistant to corrosion than the pure metal.": "<dfn data-def=\"金属と、ほかの金属または非金属との混合物です。もとの金属より優れた性質をもちます。\">合金 <span class=\"en-term\">(alloy)</span></dfn>は、金属と、ほかの金属または非金属との混合物です。合金は、もとの金属より優れた性質をもちます。純粋な金属より、かたい、強い、腐食しにくい、といったことがよくあります。",

    // Alloys > data-def attribute
    "A mixture of a metal and other metals or non-metals. It has enhanced properties.": "金属と、ほかの金属または非金属との混合物です。もとの金属より優れた性質をもちます。",

    // Alloys > p
    "Common examples are bronze (copper with tin), brass (copper with zinc) and stainless steel (iron with chromium, nickel and a little carbon). Carbon is a non-metal, so steel shows that the added element does not have to be a metal.": "よくある例は、青銅（銅とスズ）、黄銅（銅と亜鉛）、ステンレス鋼（鉄にクロム、ニッケル、少しの炭素）です。炭素は非金属です。だから鋼の例から、加える元素は金属でなくてもよいことがわかります。",

    // Alloys > h3
    "Why metals can form alloys": "金属が合金をつくれる理由",

    // Alloys > p
    "In a metal, cations sit in a lattice and are attracted to the delocalized electrons all around them. This attraction acts equally in every direction. Chemists say metallic bonding is <dfn data-def=\"Acting equally in all directions, not along a fixed line between two particular atoms.\">non-directional</dfn>.": "金属の中では、陽イオンが結晶格子をつくり、まわりを取りまく非局在化電子に引きつけられています。この引力は、どの方向にも同じようにはたらきます。化学では、金属結合には<dfn data-def=\"どの方向にも同じようにはたらくことです。決まった 2 つの原子を結ぶ決まった線に沿ってはたらくのではありません。\">方向性がない <span class=\"en-term\">(non-directional)</span></dfn>と言います。",

    // Alloys > data-def attribute
    "Acting equally in all directions, not along a fixed line between two particular atoms.": "どの方向にも同じようにはたらくことです。決まった 2 つの原子を結ぶ決まった線に沿ってはたらくのではありません。",

    // Alloys > p
    "Because the bonding is non-directional, the lattice does not need one fixed arrangement of particular atoms. An atom of a different element can take a place in the lattice, and the delocalized electrons still hold everything together.": "結合に方向性がないので、結晶格子は、決まった原子が決まった並び方をしている必要がありません。別の元素の原子が格子の中の場所に入っても、非局在化電子が全体をまとめたままです。",

    // Alloys > h3
    "Why alloys are often harder and stronger": "合金がよりかたく、強くなることが多い理由",

    // Alloys > p
    "In a pure metal, all the cations are the same size. They pack in regular layers. When a force is applied, the layers can slide over each other. That is why pure metals are malleable.": "純粋な金属では、陽イオンの大きさがすべて同じです。陽イオンは規則正しい層になって並びます。力を加えると、層はたがいにすべることができます。純粋な金属に展性があるのは、このためです。",

    // Alloys > p
    "In an alloy, the atoms of the added element are a different size. They disrupt the regular layers. The layers cannot slide over each other as easily, so the alloy is harder and stronger.": "合金では、加えた元素の原子の大きさが違います。そのため、規則正しい層が乱れます。層がすべりにくくなるので、合金はよりかたく、より強くなります。",

    // Alloys > widget > data-title attribute
    "Push a layer: pure metal and alloy": "層を押す：純粋な金属と合金",

    // Alloys > widget > figcaption
    "Choose a material, then push the top layers. This is a flat model of a few dozen ions. A real metal has layers in three dimensions. In a real alloy the layers can still slide if the force is large enough: it is harder to do, not impossible.": "材料を選んで、上の層を押してみましょう。これは、数十個のイオンを平面に並べたモデルです。実際の金属では、層は 3 次元に重なっています。実際の合金でも、力が十分に大きければ層はすべります。すべりにくくなるだけで、すべらなくなるわけではありません。",

    // Alloys > key idea > p
    "Alloys are mixtures. The amounts of the elements can vary, and the elements are not chemically combined in a fixed ratio. That is why an alloy is not a compound.": "合金は混合物です。元素の量は変えることができ、元素が一定の比で化学的に結合しているわけではありません。だから、合金は化合物ではありません。",

    // Alloys > worked example > h3
    "Explaining the hardness of an alloy": "合金のかたさを説明する",

    // Alloys > worked example > p
    "Brass is an alloy of copper and zinc. Explain why brass is harder than pure copper. [2 marks]": "黄銅は、銅と亜鉛の合金です。黄銅が純粋な銅よりかたい理由を説明しなさい (explain)。[2 点]",

    // Alloys > worked example > data-title attribute
    "Describe the pure metal": "純粋な金属のようすを書く",

    // Alloys > worked example > p
    "An “explain” answer needs the starting picture: what makes pure copper soft.": "「説明しなさい (explain)」の答えには、出発点が必要です。純粋な銅がなぜやわらかいのかを書きます。",

    // Alloys > worked example > maths line
    "In pure copper, the cations are all the same size and form regular layers. The layers can slide over each other.": "純粋な銅では、陽イオンの大きさがすべて同じで、規則正しい層をつくっている。層はたがいにすべることができる。",

    // Alloys > worked example > data-title attribute
    "Say what the added atoms do": "加えた原子のはたらきを書く",

    // Alloys > worked example > p
    "This is the first marking point. Mention the different size and the effect on the regular arrangement.": "これが 1 つ目の採点ポイントです。大きさが違うことと、規則正しい並び方への影響を書きます。",

    // Alloys > worked example > maths line
    "Zinc atoms are a different size from copper atoms, so they disrupt the regular layers of the lattice.": "亜鉛原子は銅原子と大きさが違うので、結晶格子の規則正しい層を乱す。",

    // Alloys > worked example > data-title attribute
    "Link to the property": "性質と結びつける",

    // Alloys > worked example > p
    "This is the second marking point. Connect the structure to hardness.": "これが 2 つ目の採点ポイントです。構造をかたさと結びつけます。",

    // Alloys > worked example > maths line
    "<b>The layers cannot slide over each other as easily, so brass is harder.</b>": "<b>層がたがいにすべりにくくなるので、黄銅のほうがかたい。</b>",

    // Alloys > worked example > p
    "Zinc atoms have a different size, so they disrupt the regular layers. The layers slide over each other less easily.": "亜鉛原子は大きさが違うので、規則正しい層を乱します。層はたがいにすべりにくくなります。",

    // Alloys > common mistake > p
    "Do not write that an alloy is harder “because the bonds are stronger”. The mark is for the disrupted layers that slide less easily. Do not call an alloy a compound.": "合金がかたいのは「結合が強いから」と書いてはいけません。点になるのは、層が乱れてすべりにくくなる、という説明です。また、合金を化合物と呼んではいけません。",

    // Alloys > not needed for IB > p
    "You do not need to learn the composition or the uses of any particular alloy. Any alloy in a question will be described for you.": "特定の合金の組成や用途を覚える必要はありません。問題に合金が出るときは、説明が付いています。",

    // Alloys > data-title attribute
    "Alloys: quick check": "合金：確認クイズ",

    // Polymers and plastics > data-toc attribute
    // Polymers and plastics > h2
    "Polymers and plastics": "高分子とプラスチック",

    // Polymers and plastics > p
    "A paper-clip chain is made by joining many identical clips, one after another. A polymer is made in the same way, from small molecules.": "クリップをつないだ鎖は、同じクリップを次々につなげてつくります。高分子も同じように、小さな分子をつなげてつくります。",

    // Polymers and plastics > p
    "A <dfn data-def=\"A large molecule (macromolecule) made from many repeating subunits called monomers.\">polymer</dfn> is a large molecule made from many repeating subunits. The small molecules that join together are called <dfn data-def=\"A small molecule that can join with many others to form a polymer.\">monomers</dfn>. Another word for a very large molecule is <dfn>macromolecule</dfn>. One polymer chain can contain thousands of monomer units.": "<dfn data-def=\"単量体（モノマー）と呼ばれる小さな単位がたくさん繰り返してできた、大きな分子（巨大分子）です。\">高分子（ポリマー）<span class=\"en-term\">(polymer)</span></dfn>は、小さな単位がたくさん繰り返してできた大きな分子です。つながり合う小さな分子を<dfn data-def=\"たくさんの分子とつながって高分子をつくることができる、小さな分子です。\">単量体（モノマー）<span class=\"en-term\">(monomers)</span></dfn>と呼びます。とても大きな分子は<dfn>巨大分子 <span class=\"en-term\">(macromolecule)</span></dfn>とも呼びます。1 本の高分子の鎖には、単量体の単位が数千個も入っていることがあります。",

    // Polymers and plastics > data-def attribute
    "A large molecule (macromolecule) made from many repeating subunits called monomers.": "単量体（モノマー）と呼ばれる小さな単位がたくさん繰り返してできた、大きな分子（巨大分子）です。",

    // Polymers and plastics > data-def attribute
    "A small molecule that can join with many others to form a polymer.": "たくさんの分子とつながって高分子をつくることができる、小さな分子です。",

    // Polymers and plastics > h3
    "Natural and synthetic polymers": "天然高分子と合成高分子",

    // Polymers and plastics > li
    "<strong>Natural polymers</strong> are made by living things. Examples are starch and cellulose in plants, proteins, DNA and natural rubber.": "<strong>天然高分子</strong>は、生物がつくります。植物のデンプンやセルロース、タンパク質、DNA、天然ゴムなどがあります。",

    // Polymers and plastics > li
    "<strong>Synthetic polymers</strong> are made in factories. Examples are poly(ethene), used for bags and bottles, and nylon, used for fabrics. Plastics are synthetic polymers.": "<strong>合成高分子</strong>は、工場でつくります。袋やボトルに使うポリエテン (poly(ethene)) や、布に使うナイロンなどがあります。プラスチックは合成高分子です。",

    // Polymers and plastics > h3
    "Properties of plastics, explained by structure": "プラスチックの性質を構造から説明する",

    // Polymers and plastics > p
    "Two facts about the structure explain most properties of plastics.": "プラスチックの性質のほとんどは、構造についての 2 つの事実で説明できます。",

    // Polymers and plastics > li
    "Inside each chain, the atoms are joined by strong covalent bonds.": "1 本の鎖の中では、原子は強い共有結合でつながっています。",

    // Polymers and plastics > li
    "Between one chain and the next, there are only weak intermolecular forces.": "鎖と鎖の間には、弱い分子間力しかはたらいていません。",

    // Polymers and plastics > table > caption
    "Common properties of plastics": "プラスチックに共通する性質",

    // Polymers and plastics > table > th
    "Property": "性質",

    // Polymers and plastics > table > th
    "Kind": "種類",

    // Polymers and plastics > table > th
    "Reason from the structure": "構造からわかる理由",

    // Polymers and plastics > table > th
    "Unreactive (chemically inert)": "反応しにくい（化学的に不活性）",

    // Polymers and plastics > table > td
    "chemical": "化学的",

    // Polymers and plastics > table > td
    "The covalent bonds in the chains are strong and take a lot of energy to break.": "鎖の中の共有結合は強く、切るには多くのエネルギーが必要です。",

    // Polymers and plastics > table > th
    "Non-biodegradable": "生分解されない",

    // Polymers and plastics > table > td
    "Microorganisms cannot easily break the strong covalent bonds, so the chains stay intact.": "微生物は強い共有結合をなかなか切れないので、鎖はそのまま残ります。",

    // Polymers and plastics > table > th
    "Electrical insulator": "電気を通さない（絶縁体）",

    // Polymers and plastics > table > td
    "physical": "物理的",

    // Polymers and plastics > table > td
    "All outer electrons are held in covalent bonds. There are no delocalized electrons or mobile ions.": "外側の電子はすべて共有結合に使われています。非局在化電子も、動けるイオンもありません。",

    // Polymers and plastics > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Poor conductor of heat": "熱を伝えにくい",

    // Polymers and plastics > table > td
    "There are no delocalized electrons to carry energy quickly.": "エネルギーをすばやく運ぶ非局在化電子がありません。",

    // Polymers and plastics > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Low density": "密度が小さい",

    // Polymers and plastics > table > td
    "The chains contain light atoms such as carbon and hydrogen, and long chains do not pack tightly.": "鎖は炭素や水素のような軽い原子でできています。また、長い鎖はぎっしりとは詰まりません。",

    // Polymers and plastics > table > th
    "Softens on heating and can be moulded (many plastics)": "加熱するとやわらかくなり、型に入れて形をつくれる（多くのプラスチック）",

    // Polymers and plastics > table > td
    "The weak forces between chains are overcome, so the chains can slide past each other.": "鎖と鎖の間の弱い力に打ち勝つので、鎖がたがいにすべって動けるようになります。",

    // Polymers and plastics > table > th
    // widget string (assets/js/widgets-s2-4.js)
    "Strong for its mass": "質量のわりに強い",

    // Polymers and plastics > table > td
    "The chains are very long, so the many weak forces along each chain add up.": "鎖がとても長いので、1 本の鎖に沿ってはたらくたくさんの弱い力が積み重なります。",

    // Polymers and plastics > widget > data-title attribute
    "Sort the properties of plastics": "プラスチックの性質を分類する",

    // Polymers and plastics > widget > figcaption
    "Decide if each property is physical or chemical. The feedback gives the reason from the structure of the polymer.": "それぞれの性質が物理的か化学的かを決めましょう。フィードバックに、高分子の構造からわかる理由が出ます。",

    // Polymers and plastics > p
    "The same property can be useful and harmful. Plastics are unreactive, so a plastic bottle does not react with the drink inside it. But for the same reason plastic waste is not broken down in nature. It stays in the environment for a very long time.": "同じ性質が、役に立つこともあれば、害になることもあります。プラスチックは反応しにくいので、プラスチックのボトルは中の飲み物と反応しません。しかし同じ理由で、プラスチックのごみは自然の中で分解されません。とても長い間、環境に残ります。",

    // Polymers and plastics > exam tip (shown in English + translation) > p
    "Read the command carefully. If a question asks for a <em>chemical</em> property of a plastic, write “unreactive”, “chemically inert” or “non-biodegradable”. A physical property, such as “strong” or “low density”, does not earn the mark.": "指示をよく読みましょう。プラスチックの<em>化学的</em>性質を問われたら、「反応しにくい」「化学的に不活性」「生分解されない」と書きます。「強い」や「密度が小さい」のような物理的性質を書いても、点になりません。",

    // Polymers and plastics > not needed for IB > p
    "You do not need to learn the names, structures or uses of particular plastics. You do not need high-density and low-density poly(ethene), thermoplastic and thermosetting polymers, plasticizers or recycling codes.": "特定のプラスチックの名前、構造、用途を覚える必要はありません。高密度ポリエテンと低密度ポリエテン、熱可塑性と熱硬化性の高分子、可塑剤、リサイクルの識別番号も必要ありません。",

    // Polymers and plastics > data-title attribute
    "Polymers and plastics: quick check": "高分子とプラスチック：確認クイズ",

    // Addition polymers > data-toc attribute
    // Addition polymers > h2
    "Addition polymers": "付加重合体",

    // Addition polymers > p
    "Picture a line of people, each with their arms folded. If every person unfolds their arms and holds hands with the neighbours on both sides, the line becomes one long chain. Nobody leaves the line.": "腕を組んだ人が 1 列に並んでいるところを思い浮かべてください。全員が腕をほどいて両どなりの人と手をつなぐと、列は 1 本の長い鎖になります。列から抜ける人はいません。",

    // Addition polymers > p
    "An <dfn data-def=\"A polymer formed when the double bond in each monomer breaks and the monomers join, with no other product.\">addition polymer</dfn> forms in this way. Each monomer has a carbon to carbon double bond, <span class=\"chem\" data-i18n=\"off\">C=C</span>. One bond of the double bond breaks. Each of the two carbon atoms then forms a new single bond to the next monomer.": "<dfn data-def=\"各単量体の二重結合が切れて単量体どうしがつながり、ほかの生成物ができない高分子です。\">付加重合体 <span class=\"en-term\">(addition polymer)</span></dfn>は、このようにしてできます。どの単量体にも、炭素と炭素の間の二重結合 <span class=\"chem\" data-i18n=\"off\">C=C</span> があります。二重結合のうち 1 本の結合が切れます。すると、2 個の炭素原子はそれぞれ、となりの単量体と新しい単結合をつくります。",

    // Addition polymers > data-def attribute
    "A polymer formed when the double bond in each monomer breaks and the monomers join, with no other product.": "それぞれの単量体の二重結合が切れて単量体どうしがつながってできる高分子です。ほかの生成物はできません。",

    // Addition polymers > p
    "Hydrocarbons with a <span class=\"chem\" data-i18n=\"off\">C=C</span> double bond are called alkenes. You will study alkenes as a class of compound in Structure 3.2.": "<span class=\"chem\" data-i18n=\"off\">C=C</span> 二重結合をもつ炭化水素を、アルケン (alkene) といいます。アルケンという化合物のグループは、Structure 3.2 で学びます。",

    // Addition polymers > key idea > p
    "In addition polymerization the monomers add together and nothing else is made. The polymer is the only product. The repeating unit contains the same atoms as one monomer.": "付加重合 (addition polymerization) では、単量体がそのままつながり、ほかには何もできません。生成物は高分子だけです。繰り返し単位は、単量体 1 個と同じ原子を含みます。",

    // Addition polymers > widget > data-title attribute
    "Addition polymer builder": "付加重合体をつくる",

    // Addition polymers > widget > figcaption
    "Choose a monomer and step through. Watch the double bond become a single bond while the side groups stay where they are. Then try “Reverse: find the monomer”.": "単量体を選んで、ステップを進めましょう。二重結合が単結合になり、側基はそのままの位置にあることを見てください。そのあと「逆向き：単量体を見つける」を試しましょう。",

    // Addition polymers > p
    "A <dfn data-def=\"The smallest group of atoms that repeats along a polymer chain.\">repeating unit</dfn> is the smallest group of atoms that repeats along the chain. It is drawn with a bond at each end that passes through square brackets. A small <i>n</i> after the brackets stands for a very large number.": "<dfn data-def=\"高分子の鎖に沿って繰り返す、最も小さな原子のまとまりです。\">繰り返し単位 <span class=\"en-term\">(repeating unit)</span></dfn>は、鎖に沿って繰り返す、最も小さな原子のまとまりです。両端に結合を 1 本ずつ描き、その結合が角括弧を突き抜けるようにします。括弧のあとの小さな <i>n</i> は、とても大きな数を表します。",

    // Addition polymers > data-def attribute
    "The smallest group of atoms that repeats along a polymer chain.": "高分子の鎖に沿って繰り返す、最も小さな原子のまとまりです。",

    // Addition polymers > p
    "The equation for making poly(ethene) from ethene shows this notation.": "エテンからポリエテンができる反応式で、この書き方を見てみましょう。",

    // Addition polymers > h3
    "Method: repeating unit from a monomer": "解き方：単量体から繰り返し単位",

    // Addition polymers > li
    "Redraw the monomer with the two double-bonded carbons side by side. Put every other group above or below those two carbons.": "二重結合でつながった 2 個の炭素を横に並べて、単量体を描き直します。ほかの基はすべて、この 2 個の炭素の上か下に置きます。",

    // Addition polymers > li
    "Change the double bond to a single bond.": "二重結合を単結合に変えます。",

    // Addition polymers > li
    "Draw one new bond out from each of the two carbons, to the left and to the right. These are the continuation bonds.": "2 個の炭素のそれぞれから、左と右へ新しい結合を 1 本ずつ外に向けて描きます。これが、鎖の続きを表す結合 (continuation bond) です。",

    // Addition polymers > li
    "Add brackets and <i>n</i> if you want. Check that each carbon has four bonds.": "必要なら、括弧と <i>n</i> を付けます。どの炭素にも結合が 4 本あることを確かめます。",

    // Addition polymers > worked example > h3
    "Repeating unit from a monomer": "単量体から繰り返し単位",

    // Addition polymers > worked example > p
    "Propene has the structure shown. Draw the repeating unit of the addition polymer formed from propene.": "図はプロペン (propene) の構造です。プロペンからできる付加重合体の繰り返し単位を描きなさい (draw)。",

    // Addition polymers > worked example > data-label attribute
    "Propene: two carbons joined by a double bond. The first carbon has two hydrogen atoms. The second carbon has one hydrogen atom and one CH3 group.": "プロペン：2 個の炭素が二重結合でつながっています。1 個目の炭素には水素原子が 2 個付いています。2 個目の炭素には水素原子 1 個と CH3 基 1 個が付いています。",

    // Addition polymers > worked example > data-title attribute
    "Find the two double-bonded carbons": "二重結合でつながった 2 個の炭素を見つける",

    // Addition polymers > worked example > p
    "Only these two carbons go into the backbone of the chain. The <span class=\"chem\">CH3</span> group is not part of the double bond, so it is a side group.": "鎖の主鎖 (backbone) に入るのは、この 2 個の炭素だけです。<span class=\"chem\">CH3</span> 基は二重結合の一部ではないので、側基 (side group) になります。",

    // Addition polymers > worked example > maths line
    "backbone carbons: the CH<sub>2</sub> carbon and the CH carbon": "主鎖の炭素：CH<sub>2</sub> の炭素と CH の炭素",

    // Addition polymers > worked example > data-title attribute
    "Change C=C to C–C": "C=C を C–C に変える",

    // Addition polymers > worked example > p
    "One bond of the double bond breaks. The carbons stay joined by a single bond.": "二重結合のうち 1 本が切れます。炭素どうしは単結合でつながったままです。",

    // Addition polymers > worked example > maths line
    "CH<sub>2</sub>=CH(CH<sub>3</sub>) becomes CH<sub>2</sub>–CH(CH<sub>3</sub>)": "CH<sub>2</sub>=CH(CH<sub>3</sub>) が CH<sub>2</sub>–CH(CH<sub>3</sub>) になる",

    // Addition polymers > worked example > data-title attribute
    "Add the continuation bonds": "鎖の続きを表す結合を描く",

    // Addition polymers > worked example > p
    "Each backbone carbon now needs one more bond. These bonds join the unit to its neighbours.": "主鎖の炭素は、それぞれあと 1 本の結合が必要です。この結合で、単位はとなりの単位とつながります。",

    // Addition polymers > worked example > data-title attribute
    "Check and draw": "確かめて描く",

    // Addition polymers > worked example > p
    "Each carbon must have four bonds. The <span class=\"chem\">CH3</span> group hangs off the chain.": "どの炭素にも結合が 4 本なければなりません。<span class=\"chem\">CH3</span> 基は鎖から枝のように出ています。",

    // Addition polymers > worked example > data-label attribute
    "Repeating unit of poly(propene): two backbone carbons joined by a single bond, with a continuation bond at each end through square brackets. The first carbon has two hydrogen atoms. The second carbon has one hydrogen atom and one CH3 group.": "ポリ(プロペン) の繰り返し単位：主鎖の炭素 2 個が単結合でつながり、両端には、角括弧を突き抜ける、鎖の続きを表す結合があります。1 個目の炭素には水素原子が 2 個付いています。2 個目の炭素には水素原子 1 個と CH3 基 1 個が付いています。",

    // Addition polymers > worked example > p
    "The repeating unit is –CH<sub>2</sub>–CH(CH<sub>3</sub>)–, with the <span class=\"chem\">CH3</span> group as a side group.": "繰り返し単位は –CH<sub>2</sub>–CH(CH<sub>3</sub>)– で、<span class=\"chem\">CH3</span> 基は側基です。",

    // Addition polymers > common mistake > p
    "Do not put all three carbons of propene in a row in the backbone. Only the two carbons of the double bond are in the chain. Do not leave the double bond in the repeating unit either: it has become a single bond.": "プロペンの 3 個の炭素を、すべて主鎖に 1 列に並べてはいけません。鎖に入るのは、二重結合の 2 個の炭素だけです。また、繰り返し単位に二重結合を残してもいけません。単結合に変わっています。",

    // Addition polymers > h3
    "Method: monomer from a polymer": "解き方：高分子から単量体",

    // Addition polymers > li
    "Mark off the chain two backbone carbons at a time. Each pair, with its side groups, is one repeating unit.": "鎖を、主鎖の炭素 2 個ずつに区切ります。それぞれの 2 個の組と、そこに付いた側基が、1 つの繰り返し単位です。",

    // Addition polymers > li
    "Copy one pair with all four side groups.": "1 組を、4 つの側基といっしょに写します。",

    // Addition polymers > li
    "Remove the continuation bonds and draw a double bond between the two carbons.": "鎖の続きを表す結合を消して、2 個の炭素の間に二重結合を描きます。",

    // Addition polymers > worked example > h3
    "Monomer from a polymer": "高分子から単量体",

    // Addition polymers > worked example > p
    "A section of an addition polymer is shown. Deduce the structure of the monomer.": "図は付加重合体の一部分です。単量体の構造を導きなさい (deduce)。",

    // Addition polymers > worked example > data-label attribute
    "A polymer chain section with four backbone carbons. Carbons 1 and 3 each have two hydrogen atoms. Carbons 2 and 4 each have one hydrogen atom and one CN group. A continuation bond is at each end.": "主鎖の炭素が 4 個ある、高分子の鎖の一部分。1 番目と 3 番目の炭素には、それぞれ水素原子が 2 個付いています。2 番目と 4 番目の炭素には、それぞれ水素原子 1 個と CN 基 1 個が付いています。両端に、鎖の続きを表す結合があります。",

    // Addition polymers > worked example > data-title attribute
    "Mark one repeating unit": "繰り返し単位を 1 つ区切る",

    // Addition polymers > worked example > p
    "The repeating unit of an addition polymer has two backbone carbons. Here the pattern repeats every two carbons.": "付加重合体の繰り返し単位には、主鎖の炭素が 2 個あります。この例では、炭素 2 個ごとに同じ並びが繰り返しています。",

    // Addition polymers > worked example > data-label attribute
    "The same chain with the first two backbone carbons and their side groups circled as one repeating unit": "同じ鎖。最初の 2 個の主鎖の炭素とその側基が、1 つの繰り返し単位として丸で囲まれています",

    // Addition polymers > worked example > data-title attribute
    "Copy the unit": "単位を写す",

    // Addition polymers > worked example > p
    "Keep all four side groups exactly where they are.": "4 つの側基は、すべて元の位置のままにします。",

    // Addition polymers > worked example > data-title attribute
    "Put the double bond back": "二重結合を元に戻す",

    // Addition polymers > worked example > p
    "The continuation bonds were made from the double bond. Remove them and restore <span class=\"chem\" data-i18n=\"off\">C=C</span>.": "鎖の続きを表す結合は、二重結合からできたものです。これを消して、<span class=\"chem\" data-i18n=\"off\">C=C</span> に戻します。",

    // Addition polymers > worked example > data-label attribute
    "The monomer: two carbons joined by a double bond. The first carbon has two hydrogen atoms. The second carbon has one hydrogen atom and one CN group.": "単量体：2 個の炭素が二重結合でつながっています。1 個目の炭素には水素原子が 2 個付いています。2 個目の炭素には水素原子 1 個と CN 基 1 個が付いています。",

    // Addition polymers > worked example > p
    "The monomer is CH<sub>2</sub>=CH(CN).": "単量体は CH<sub>2</sub>=CH(CN) です。",

    // Addition polymers > exam tip (shown in English + translation) > p
    "The mark for a repeating unit needs the correct structure <em>and</em> a continuation bond at each end. Draw only one repeating unit: drawing two loses the mark. Brackets and <i>n</i> are not required, but they are a good habit. A bond must end on the correct atom, for example on the C of a <span class=\"chem\">CH3</span> group.": "繰り返し単位で点を取るには、正しい構造<em>と</em>、両端の鎖の続きを表す結合が必要です。繰り返し単位は 1 つだけ描きましょう。2 つ描くと点を失います。括弧と <i>n</i> は必須ではありませんが、付ける習慣にしましょう。結合は正しい原子につなげます。たとえば <span class=\"chem\">CH3</span> 基なら C につなげます。",

    // Addition polymers > not needed for IB > data-title attribute
    // Condensation polymers > not needed for IB > Additional HL > data-title attribute
    "Comes later in the course": "あとで学ぶ内容",

    // Addition polymers > not needed for IB > p
    "You do not need to know how the double bond breaks, step by step. The calculation called atom economy comes in Reactivity 2.1. Here you only need the idea that an addition polymer is the only product, so no atoms are wasted.": "二重結合がどのように切れるかを、段階を追って知る必要はありません。アトムエコノミー（原子効率）という計算は Reactivity 2.1 で学びます。ここでは、付加重合体が唯一の生成物なので原子がむだにならない、という考え方だけで十分です。",

    // Addition polymers > not needed for IB > p
    "You do not need to remember the structures of monomers. A question gives you the monomer, or gives you the polymer so you can deduce the monomer.": "単量体の構造を覚える必要はありません。問題では、単量体が与えられるか、高分子が与えられてそこから単量体を導きます。",

    // Addition polymers > data-title attribute
    "Addition polymers: quick check": "付加重合体：確認クイズ",

    // Condensation polymers > Additional HL > data-toc attribute
    // Condensation polymers > Additional HL > h2
    "Condensation polymers": "縮合重合体",

    // Condensation polymers > Additional HL > p
    "Imagine a line of people where each person must take off a glove before shaking hands with a neighbour. A chain forms, and a pile of gloves is left over. In a condensation polymer, the “glove” is a small molecule, usually water.": "人が 1 列に並んでいて、となりの人と握手する前に、手袋を片方はずさなければならないとします。鎖ができ、はずした手袋の山が残ります。縮合重合体では、この「手袋」にあたるのが小さな分子で、ふつうは水です。",

    // Condensation polymers > Additional HL > p
    "A <dfn data-def=\"A polymer formed when functional groups on the monomers react together. A small molecule, usually water, is released each time a link forms.\">condensation polymer</dfn> forms when functional groups on the monomers react with each other. Each time two monomers join, a small molecule is released. A <dfn data-def=\"A group of atoms in a molecule that gives the molecule its typical reactions, such as –OH or –COOH.\">functional group</dfn> is a group of atoms that gives a molecule its typical reactions.": "<dfn data-def=\"単量体の官能基どうしが反応してできる高分子です。結合が 1 つできるたびに、小さな分子（ふつうは水）が放出されます。\">縮合重合体 <span class=\"en-term\">(condensation polymer)</span></dfn>は、単量体の官能基どうしが反応してできます。2 個の単量体がつながるたびに、小さな分子が 1 個放出されます。<dfn data-def=\"分子に特有の反応をさせる原子のまとまりです。–OH や –COOH などがあります。\">官能基 <span class=\"en-term\">(functional group)</span></dfn>とは、分子に特有の反応をさせる原子のまとまりです。",

    // Condensation polymers > Additional HL > data-def attribute
    "A polymer formed when functional groups on the monomers react together. A small molecule, usually water, is released each time a link forms.": "単量体の官能基どうしが反応してできる高分子です。結合が 1 つできるたびに、小さな分子（ふつうは水）が放出されます。",

    // Condensation polymers > Additional HL > data-def attribute
    "A group of atoms in a molecule that gives the molecule its typical reactions, such as –OH or –COOH.": "分子に特有の反応をさせる原子のまとまりです。–OH や –COOH などがあります。",

    // Condensation polymers > Additional HL > p
    "Each monomer needs <strong>two</strong> functional groups, so that it can join to a neighbour on both sides. You need two kinds of condensation polymer.": "単量体には、官能基が <strong>2 つ</strong>必要です。両側のとなりとつながるためです。縮合重合体は 2 種類を覚えましょう。",

    // Condensation polymers > table > Additional HL > caption
    "The two kinds of condensation polymer you need": "覚えておく 2 種類の縮合重合体",

    // Condensation polymers > table > Additional HL > th
    "Polymer": "高分子",

    // Condensation polymers > table > Additional HL > th
    "Monomers": "単量体",

    // Condensation polymers > table > Additional HL > th
    "Groups that react": "反応する基",

    // Condensation polymers > table > Additional HL > th
    // widget string (assets/js/widgets-s2-4.js)
    "Link formed": "できる結合",

    // Condensation polymers > table > Additional HL > th
    "Released": "放出される分子",

    // Condensation polymers > table > Additional HL > th
    "Polyester": "ポリエステル (polyester)",

    // Condensation polymers > table > Additional HL > td
    "a diol and a dicarboxylic acid": "ジオールとジカルボン酸",

    // Condensation polymers > table > Additional HL > td
    "ester link, <span data-i18n=\"off\">–COO–</span>": "エステル結合 (ester link)、<span data-i18n=\"off\">–COO–</span>",

    // Condensation polymers > table > Additional HL > th
    "Polyamide": "ポリアミド (polyamide)",

    // Condensation polymers > table > Additional HL > td
    "a diamine and a dicarboxylic acid": "ジアミンとジカルボン酸",

    // Condensation polymers > table > Additional HL > td
    "amide link, <span data-i18n=\"off\">–CONH–</span>": "アミド結合 (amide link)、<span data-i18n=\"off\">–CONH–</span>",

    // Condensation polymers > Additional HL > p
    "“Di” means two. A diol has two –OH groups. A dicarboxylic acid has two –COOH groups. A diamine has two –NH<sub>2</sub> groups.": "「ジ (di)」は 2 つという意味です。ジオール (diol) には –OH 基が 2 つあります。ジカルボン酸 (dicarboxylic acid) には –COOH 基が 2 つあります。ジアミン (diamine) には –NH<sub>2</sub> 基が 2 つあります。",

    // Condensation polymers > Additional HL > p
    "The water is made from an H atom of the –OH or –NH<sub>2</sub> group and the –OH part of the –COOH group. A new bond then joins the O or N atom to the C=O carbon.": "水は、–OH 基または –NH<sub>2</sub> 基の H 原子と、–COOH 基の –OH の部分からできます。そして新しい結合が、O 原子または N 原子を C=O の炭素とつなぎます。",

    // Condensation polymers > widget > Additional HL > data-title attribute
    "Condensation polymer builder": "縮合重合体をつくる",

    // Condensation polymers > widget > Additional HL > figcaption
    "Choose a polymer type and step through. A box stands for the part of the monomer that does not change. Dashed outlines mark the atoms that become water. An underline marks the new link.": "高分子の種類を選んで、ステップを進めましょう。四角は、単量体の中で変化しない部分を表します。破線の囲みは、水になる原子です。下線は、新しくできた結合です。",

    // Condensation polymers > Additional HL > h3
    "Method: repeating unit from two monomers": "解き方：2 種類の単量体から繰り返し単位",

    // Condensation polymers > Additional HL > li
    "Draw the two monomers side by side, with a –COOH group of one next to an –OH or –NH<sub>2</sub> group of the other.": "2 つの単量体を横に並べて描きます。一方の –COOH 基が、もう一方の –OH 基または –NH<sub>2</sub> 基のとなりにくるようにします。",

    // Condensation polymers > Additional HL > li
    "Remove the –OH from the –COOH group and one H from the other group. These atoms form <span class=\"chem\">H2O</span>.": "–COOH 基から –OH を取り、もう一方の基から H を 1 個取ります。これらの原子が <span class=\"chem\">H2O</span> になります。",

    // Condensation polymers > Additional HL > li
    "Join the C=O carbon to the O (polyester) or to the N (polyamide).": "C=O の炭素を、O（ポリエステル）または N（ポリアミド）とつなぎます。",

    // Condensation polymers > Additional HL > li
    "At the two outer ends, remove an H from one end and an –OH from the other end. Draw continuation bonds there.": "外側の両端では、一方の端から H を、もう一方の端から –OH を取ります。そこに鎖の続きを表す結合を描きます。",

    // Condensation polymers > worked example > Additional HL > h3
    "Repeating unit of a polyester": "ポリエステルの繰り返し単位",

    // Condensation polymers > worked example > Additional HL > p
    "A polyester is made from the two monomers shown. Draw its repeating unit and state the other product.": "図の 2 つの単量体からポリエステルができます。繰り返し単位を描きなさい (draw)。また、もう 1 つの生成物を述べなさい (state)。",

    // Condensation polymers > worked example > Additional HL > data-label attribute
    "Monomer 1: a diol, H–O–(CH2)3–O–H. Monomer 2: a dicarboxylic acid, H–O–CO–(CH2)2–CO–O–H.": "単量体 1：ジオール H–O–(CH2)3–O–H。単量体 2：ジカルボン酸 H–O–CO–(CH2)2–CO–O–H。",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Identify the groups that react": "反応する基を特定する",

    // Condensation polymers > worked example > Additional HL > p
    "An –OH group of the diol reacts with a –COOH group of the acid. This makes an ester link.": "ジオールの –OH 基が、酸の –COOH 基と反応します。これでエステル結合 (ester link) ができます。",

    // Condensation polymers > worked example > Additional HL > maths line
    "–OH + HOOC– → ester link + H<sub>2</sub>O": "–OH + HOOC– → エステル結合 + H<sub>2</sub>O",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Remove the atoms that form water": "水になる原子を取る",

    // Condensation polymers > worked example > Additional HL > p
    "The H comes from the diol. The –OH comes from the –COOH group of the acid.": "H はジオールからきます。–OH は酸の –COOH 基からきます。",

    // Condensation polymers > worked example > Additional HL > data-label attribute
    "The same two monomers. One H of the diol and the OH of one carboxyl group are outlined: they form water.": "同じ 2 つの単量体。ジオールの H 1 個と、カルボキシ基 1 つの OH が線で囲まれています。これらが水になります。",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Join O to the C=O carbon": "O を C=O の炭素とつなぐ",

    // Condensation polymers > worked example > Additional HL > p
    "The oxygen of the diol bonds to the carbon of the C=O group. This –O–C(=O)– group is the ester link.": "ジオールの酸素が、C=O 基の炭素と結合します。この –O–C(=O)– のまとまりがエステル結合です。",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Open both ends and draw the unit": "両端を開いて単位を描く",

    // Condensation polymers > worked example > Additional HL > p
    "The other –OH group and the other –COOH group react in the same way with the next monomers. So the unit has a continuation bond at each end.": "もう一方の –OH 基と、もう一方の –COOH 基も、次の単量体と同じように反応します。だから、単位の両端には鎖の続きを表す結合があります。",

    // Condensation polymers > worked example > Additional HL > data-label attribute
    "Repeating unit of the polyester in square brackets with n: –O–(CH2)3–O–CO–(CH2)2–CO–, each CO drawn as a carbon with a double bond to oxygen.": "角括弧と n で表した、ポリエステルの繰り返し単位：–O–(CH2)3–O–CO–(CH2)2–CO–。それぞれの CO は、酸素と二重結合した炭素として描かれています。",

    // Condensation polymers > worked example > Additional HL > p
    "The repeating unit is –O–(CH<sub>2</sub>)<sub>3</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO–. The other product is water.": "繰り返し単位は –O–(CH<sub>2</sub>)<sub>3</sub>–O–CO–(CH<sub>2</sub>)<sub>2</sub>–CO– です。もう 1 つの生成物は水です。",

    // Condensation polymers > worked example > Additional HL > h3
    "Repeating unit of a polyamide": "ポリアミドの繰り返し単位",

    // Condensation polymers > worked example > Additional HL > p
    "A polyamide is made from the two monomers shown. Draw its repeating unit.": "図の 2 つの単量体からポリアミドができます。繰り返し単位を描きなさい。",

    // Condensation polymers > worked example > Additional HL > data-label attribute
    "Monomer 1: a diamine, H2N–(CH2)4–NH2. Monomer 2: a dicarboxylic acid, HOOC–(CH2)6–COOH.": "単量体 1：ジアミン H2N–(CH2)4–NH2。単量体 2：ジカルボン酸 HOOC–(CH2)6–COOH。",

    // Condensation polymers > worked example > Additional HL > p
    "An –NH<sub>2</sub> group of the diamine reacts with a –COOH group of the acid. This makes an amide link.": "ジアミンの –NH<sub>2</sub> 基が、酸の –COOH 基と反応します。これでアミド結合 (amide link) ができます。",

    // Condensation polymers > worked example > Additional HL > maths line
    "–NH<sub>2</sub> + HOOC– → amide link + H<sub>2</sub>O": "–NH<sub>2</sub> + HOOC– → アミド結合 + H<sub>2</sub>O",

    // Condensation polymers > worked example > Additional HL > p
    "One H comes from the –NH<sub>2</sub> group, so the nitrogen keeps one H. The –OH comes from the –COOH group.": "H は –NH<sub>2</sub> 基から 1 個とれるので、窒素には H が 1 個残ります。–OH は –COOH 基からきます。",

    // Condensation polymers > worked example > Additional HL > data-label attribute
    "The same two monomers. One H on a nitrogen atom and the OH of one carboxyl group are outlined: they form water.": "同じ 2 つの単量体。窒素原子に付いた H 1 個と、カルボキシ基 1 つの OH が線で囲まれています。これらが水になります。",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Join N to the C=O carbon": "N を C=O の炭素とつなぐ",

    // Condensation polymers > worked example > Additional HL > p
    "The nitrogen bonds to the carbon of the C=O group. This –N(H)–C(=O)– group is the amide link.": "窒素が、C=O 基の炭素と結合します。この –N(H)–C(=O)– のまとまりがアミド結合です。",

    // Condensation polymers > worked example > Additional HL > p
    "The far –NH<sub>2</sub> group loses an H and the far –COOH group loses an –OH when they join the next monomers.": "反対側の端の –NH<sub>2</sub> 基は H を、反対側の端の –COOH 基は –OH を失って、次の単量体とつながります。",

    // Condensation polymers > worked example > Additional HL > data-label attribute
    "Repeating unit of the polyamide in square brackets with n: –NH–(CH2)4–NH–CO–(CH2)6–CO–, each N with one H and each CO drawn as a carbon with a double bond to oxygen.": "角括弧と n で表した、ポリアミドの繰り返し単位：–NH–(CH2)4–NH–CO–(CH2)6–CO–。それぞれの N には H が 1 個付き、それぞれの CO は、酸素と二重結合した炭素として描かれています。",

    // Condensation polymers > worked example > Additional HL > p
    "The repeating unit is –NH–(CH<sub>2</sub>)<sub>4</sub>–NH–CO–(CH<sub>2</sub>)<sub>6</sub>–CO–. Water is also formed.": "繰り返し単位は –NH–(CH<sub>2</sub>)<sub>4</sub>–NH–CO–(CH<sub>2</sub>)<sub>6</sub>–CO– です。水もできます。",

    // Condensation polymers > common mistake > Additional HL > p
    "Each nitrogen atom in a polyamide chain still has one hydrogen atom: the link is –NH–CO–, not –N–CO–. Also remember the water. A condensation equation without the small molecule is incomplete.": "ポリアミドの鎖の窒素原子には、どれも水素原子が 1 個残っています。結合は –NH–CO– で、–N–CO– ではありません。水も忘れないようにしましょう。小さな分子を書いていない縮合の反応式は、不完全です。",

    // Condensation polymers > Additional HL > h3
    "Hydrolysis: the reverse reaction": "加水分解：逆向きの反応",

    // Condensation polymers > Additional HL > p
    "<dfn data-def=\"The breaking of a bond by reaction with water. It is the reverse of condensation.\">Hydrolysis</dfn> means breaking a bond by reaction with water. It is the reverse of condensation. Water breaks each ester or amide link. The –OH of water joins the C=O carbon, and the H of water joins the O or N atom. The monomers form again.": "<dfn data-def=\"水との反応で結合を切ることです。縮合の逆です。\">加水分解 <span class=\"en-term\">(hydrolysis)</span></dfn>とは、水との反応で結合を切ることです。縮合の逆の反応です。水が、エステル結合やアミド結合を 1 つずつ切ります。水の –OH は C=O の炭素につき、水の H は O 原子または N 原子につきます。こうして単量体が元どおりにできます。",

    // Condensation polymers > Additional HL > data-def attribute
    "The breaking of a bond by reaction with water. It is the reverse of condensation.": "水との反応で結合を切ることです。縮合の逆です。",

    // Condensation polymers > worked example > Additional HL > h3
    "Monomers from a condensation polymer": "縮合重合体から単量体",

    // Condensation polymers > worked example > Additional HL > p
    "The repeating unit of a polymer is shown. Identify the type of polymer and deduce the structures of the two monomers.": "図はある高分子の繰り返し単位です。高分子の種類を特定しなさい (identify)。また、2 つの単量体の構造を導きなさい (deduce)。",

    // Condensation polymers > worked example > Additional HL > data-label attribute
    "Repeating unit in square brackets with n: –NH–(CH2)2–NH–CO–(CH2)3–CO–": "角括弧と n で表した繰り返し単位：–NH–(CH2)2–NH–CO–(CH2)3–CO–",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Find the link": "結合を見つける",

    // Condensation polymers > worked example > Additional HL > p
    "Look for C=O next to N or O in the backbone. Here C=O is next to N–H.": "主鎖の中で、N または O のとなりにある C=O をさがします。ここでは、C=O が N–H のとなりにあります。",

    // Condensation polymers > worked example > Additional HL > maths line
    "–NH–CO– is an amide link, so this is a polyamide": "–NH–CO– はアミド結合なので、これはポリアミド",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Break every amide link": "アミド結合をすべて切る",

    // Condensation polymers > worked example > Additional HL > p
    "Hydrolysis breaks the bond between the N and the C=O carbon. Remember that the bonds at the ends of the unit are amide links too.": "加水分解では、N と C=O の炭素の間の結合が切れます。単位の両端の結合もアミド結合であることを忘れないようにしましょう。",

    // Condensation polymers > worked example > Additional HL > maths line
    "–NH–(CH<sub>2</sub>)<sub>2</sub>–NH– &nbsp; and &nbsp; –CO–(CH<sub>2</sub>)<sub>3</sub>–CO–": "–NH–(CH<sub>2</sub>)<sub>2</sub>–NH– &nbsp; と &nbsp; –CO–(CH<sub>2</sub>)<sub>3</sub>–CO–",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Add the atoms of water": "水の原子を加える",

    // Condensation polymers > worked example > Additional HL > p
    "Each N gains an H, giving –NH<sub>2</sub>. Each C=O carbon gains an –OH, giving –COOH.": "それぞれの N に H がついて、–NH<sub>2</sub> になります。それぞれの C=O の炭素に –OH がついて、–COOH になります。",

    // Condensation polymers > worked example > Additional HL > maths line
    "H<sub>2</sub>N–(CH<sub>2</sub>)<sub>2</sub>–NH<sub>2</sub> &nbsp; and &nbsp; HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH": "H<sub>2</sub>N–(CH<sub>2</sub>)<sub>2</sub>–NH<sub>2</sub> &nbsp; と &nbsp; HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH",

    // Condensation polymers > worked example > Additional HL > data-title attribute
    "Check the monomers": "単量体を確かめる",

    // Condensation polymers > worked example > Additional HL > p
    "Each monomer must have two functional groups: a diamine and a dicarboxylic acid.": "どちらの単量体にも官能基が 2 つなければなりません。ジアミンとジカルボン酸です。",

    // Condensation polymers > worked example > Additional HL > data-label attribute
    "The two monomers: the diamine H2N–(CH2)2–NH2 and the dicarboxylic acid HOOC–(CH2)3–COOH": "2 つの単量体：ジアミン H2N–(CH2)2–NH2 とジカルボン酸 HOOC–(CH2)3–COOH",

    // Condensation polymers > worked example > Additional HL > p
    "It is a polyamide. The monomers are H<sub>2</sub>N–(CH<sub>2</sub>)<sub>2</sub>–NH<sub>2</sub> and HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH.": "ポリアミドです。単量体は H<sub>2</sub>N–(CH<sub>2</sub>)<sub>2</sub>–NH<sub>2</sub> と HOOC–(CH<sub>2</sub>)<sub>3</sub>–COOH です。",

    // Condensation polymers > try it > Additional HL > data-label attribute
    "Number of water molecules": "水分子の数",

    // Condensation polymers > try it > Additional HL > p
    "50 molecules of a diol and 50 molecules of a dicarboxylic acid join to make one polyester chain. How many molecules of water are released?": "ジオールの分子 50 個とジカルボン酸の分子 50 個がつながって、ポリエステルの鎖が 1 本できます。水分子は何個放出されますか。",

    // Condensation polymers > try it > Additional HL > li
    "One molecule of water is released for each link that forms.": "結合が 1 つできるたびに、水分子が 1 個放出されます。",

    // Condensation polymers > try it > Additional HL > li
    "The chain contains 100 monomer units in a row. Count the links between them, as you would count the gaps between 100 fence posts.": "鎖には、単量体の単位が 100 個、1 列に並んでいます。その間の結合を数えましょう。100 本の柵の柱の間にあるすき間を数えるのと同じです。",

    // Condensation polymers > try it > Additional HL > maths line
    "monomer units in the chain = 50 + 50 = 100": "鎖の中の単量体の単位 = 50 + 50 = 100",

    // Condensation polymers > try it > Additional HL > maths line
    "links = 100 − 1 = 99, so 99 molecules of H<sub>2</sub>O": "結合 = 100 − 1 = 99 なので、H<sub>2</sub>O 分子は 99 個",

    // Condensation polymers > Additional HL > h3
    "Biological macromolecules": "生体の巨大分子",

    // Condensation polymers > Additional HL > p
    "All biological macromolecules form by condensation reactions and break down by hydrolysis. Proteins are an example. Amino acids join by condensation, and water is released. The link between amino acids is an amide link, so a protein is a natural polyamide. When you digest protein, hydrolysis breaks the links and gives amino acids again.": "生体の巨大分子 (biological macromolecules) はすべて、縮合反応でできて、加水分解でこわれます。タンパク質がその例です。アミノ酸が縮合でつながり、水が放出されます。アミノ酸の間の結合はアミド結合なので、タンパク質は天然のポリアミドです。タンパク質を消化するときは、加水分解で結合が切れて、またアミノ酸になります。",

    // Condensation polymers > Additional HL > p
    "The same pattern is true for carbohydrates such as starch, and for DNA. The builder above includes amino acids as its third option.": "デンプンなどの炭水化物や DNA でも、同じことが言えます。上の教材では、3 つ目の選択肢としてアミノ酸を選べます。",

    // Condensation polymers > table > Additional HL > caption
    "Addition and condensation polymers compared": "付加重合体と縮合重合体の比較",

    // Condensation polymers > table > Additional HL > th
    "Feature": "特徴",

    // Condensation polymers > table > Additional HL > th
    "Addition": "付加",

    // Condensation polymers > table > Additional HL > th
    "Condensation": "縮合",

    // Condensation polymers > table > Additional HL > th
    "What the monomer needs": "単量体に必要なもの",

    // Condensation polymers > table > Additional HL > td
    "a C=C double bond": "C=C 二重結合",

    // Condensation polymers > table > Additional HL > td
    "two functional groups": "2 つの官能基",

    // Condensation polymers > table > Additional HL > th
    "Products": "生成物",

    // Condensation polymers > table > Additional HL > td
    "the polymer only": "高分子だけ",

    // Condensation polymers > table > Additional HL > td
    "the polymer and a small molecule, usually water": "高分子と小さな分子（ふつうは水）",

    // Condensation polymers > table > Additional HL > th
    "Backbone of the chain": "鎖の主鎖",

    // Condensation polymers > table > Additional HL > td
    "carbon atoms only": "炭素原子だけ",

    // Condensation polymers > table > Additional HL > td
    "contains ester or amide links": "エステル結合またはアミド結合を含む",

    // Condensation polymers > table > Additional HL > th
    "Reversed by hydrolysis?": "加水分解で元に戻るか",

    // Condensation polymers > table > Additional HL > td
    "no": "いいえ",

    // Condensation polymers > table > Additional HL > td
    "yes": "はい",

    // Condensation polymers > exam tip (shown in English + translation) > Additional HL > p
    "For a condensation repeating unit, one mark is for the correct ester or amide link. The other mark is for the continuation bonds and the rest of the structure. Draw one repeating unit only. If you are asked for the type of polymer, “condensation”, “polyester” or “polyamide” is expected.": "縮合重合体の繰り返し単位では、1 点は正しいエステル結合またはアミド結合に与えられます。もう 1 点は、鎖の続きを表す結合と残りの構造に与えられます。繰り返し単位は 1 つだけ描きましょう。高分子の種類を問われたら、「condensation（縮合）」「polyester（ポリエステル）」「polyamide（ポリアミド）」と答えます。",

    // Condensation polymers > not needed for IB > Additional HL > p
    "You do not need the detailed structures of proteins, carbohydrates, fats or DNA. You do not need the names of particular polyesters or polyamides. Other kinds of condensation polymer are not needed as drawing tasks.": "タンパク質、炭水化物、脂肪、DNA のくわしい構造は必要ありません。特定のポリエステルやポリアミドの名前も必要ありません。ほかの種類の縮合重合体を描く問題は出ません。",

    // Condensation polymers > not needed for IB > Additional HL > p
    "Alcohols, carboxylic acids, amines, esters and amides are studied as classes of compound in Structure 3.2. You do not need to know how these reactions happen, step by step. You also do not need other monomers, such as acyl chlorides, which release HCl in place of water.": "アルコール、カルボン酸、アミン、エステル、アミドは、化合物の種類として Structure 3.2 で学びます。これらの反応がどのように進むかを、段階を追って知る必要はありません。水の代わりに HCl を放出する塩化アシルのような、ほかの単量体も必要ありません。",

    // Condensation polymers > Additional HL > data-title attribute
    "Condensation polymers: quick check": "縮合重合体：確認クイズ",

    // Linking it up > h2
    "Linking it up": "つなげて考える",

    // Linking it up > p
    "The IB guide asks these linking questions. Short answers are enough at this stage.": "IB の『指導の手引き』には、次のような「つながりの問い」(Linking question) があります。今の段階では、短い答えで十分です。",

    // Linking it up > h3
    "What are the limitations of discrete bonding categories?": "結合をいくつかの種類にはっきり分けることには、どんな限界がありますか。",

    // Linking it up > p
    "“Discrete” means separate. If you sort every substance into only three boxes, you lose information. Many substances lie between the models, such as polar covalent molecules and compounds near a boundary in the triangle. A single label then predicts the wrong properties. The bonding triangle is a better model because it shows the gradual change.": "「discrete」は、ばらばらに分かれているという意味です。すべての物質を 3 つの箱だけに分けると、情報が失われます。極性共有結合の分子や、三角形の境界線に近い化合物のように、モデルの中間にある物質はたくさんあります。そういう物質に 1 つのラベルだけを付けると、性質をまちがって予測してしまいます。結合の三角形は、ゆるやかな変化を表せるので、よりよいモデルです。",

    // Linking it up > h3
    "How do the trends in properties of period 3 oxides reflect the trend in their bonding?": "第 3 周期の酸化物の性質の傾向は、結合の傾向をどのように表していますか。",

    // Linking it up > p
    "From sodium to sulfur, the electronegativity of the element gets closer to that of oxygen. The difference falls from 2.5 for <span class=\"chem\">Na2O</span> to 0.8 for <span class=\"chem\">SO3</span>, and the average rises. The points move down and to the right in the triangle, from ionic to polar covalent. The properties change in step: the oxides on the left are ionic solids with high melting points, and the oxides on the right are made of molecules. You will meet their acid–base behaviour in Structure 3.1.": "ナトリウムから硫黄へ進むにつれて、元素の電気陰性度は酸素の電気陰性度に近づきます。差は <span class=\"chem\">Na2O</span> の 2.5 から <span class=\"chem\">SO3</span> の 0.8 まで小さくなり、平均は大きくなります。三角形の上で、点は右下へ、イオン結合から極性共有結合へと動きます。性質もこれに合わせて変わります。左側の酸化物は融点の高いイオン結合の固体で、右側の酸化物は分子でできています。酸化物の酸・塩基としての性質は、Structure 3.1 で学びます。",

    // Linking it up > h3
    "Why are alloys more correctly described as mixtures rather than as compounds?": "合金は、化合物ではなく混合物と呼ぶほうが正しいのはなぜですか。",

    // Linking it up > p
    "In a compound, the elements are chemically bonded in a fixed ratio. In an alloy, the proportions can vary, and the atoms of the added element simply take places in the metal lattice. Non-directional metallic bonding makes this possible. This matches the meaning of “mixture” from Structure 1.1.": "化合物では、元素が一定の比で化学的に結合しています。合金では、元素の割合を変えることができ、加えた元素の原子は金属の結晶格子の中の場所に入るだけです。方向性のない金属結合だから、これができます。これは、Structure 1.1 で学んだ「混合物」の意味と合っています。",

    // Linking it up > h3
    "Why is the atom economy 100% for an addition polymerization reaction?": "付加重合反応のアトムエコノミーが 100% になるのはなぜですか。",

    // Linking it up > p
    "The polymer is the only product. Every atom of every monomer ends up in the polymer, so no atoms are wasted. You will calculate atom economy in Reactivity 2.1.": "生成物は高分子だけです。すべての単量体のすべての原子が高分子に入るので、原子はむだになりません。アトムエコノミーの計算は Reactivity 2.1 で学びます。",

    // Linking it up > h3
    "Why do composites like reinforced concretes, which are made from ionic and covalently bonded components and steel bars, have unique properties?": "鉄筋コンクリートのような複合材料は、イオン結合や共有結合でできた成分と鋼の棒からできています。このような複合材料が独特の性質をもつのはなぜですか。",

    // Linking it up > p
    "A <dfn data-def=\"A material made from two or more different materials that stay separate inside it. It combines their properties.\">composite</dfn> is made from two or more different materials. Each part keeps its own bonding, so the composite combines their properties. Concrete has ionic and covalent bonding. It is hard and strong when it is squeezed, but it is brittle and cracks when it is pulled or bent. Steel has metallic bonding. It is strong when it is pulled, and it bends without breaking. Reinforced concrete, with steel bars inside the concrete, resists both squeezing and pulling. Neither material can do this alone.": "<dfn data-def=\"2 種類以上の異なる材料からできていて、それぞれが中で分かれたまま残っている材料です。もとの材料の性質をあわせもちます。\">複合材料 <span class=\"en-term\">(composite)</span></dfn>は、2 種類以上の異なる材料からできています。それぞれの部分は自分の結合を保つので、複合材料はそれらの性質をあわせもちます。コンクリートには、イオン結合と共有結合があります。押し縮める力にはかたくて強いのですが、もろく、引っぱったり曲げたりすると割れます。鋼には金属結合があります。引っぱる力に強く、折れずに曲がります。コンクリートの中に鋼の棒を入れた鉄筋コンクリートは、押し縮める力にも引っぱる力にも耐えます。どちらの材料も、単独ではこれができません。",

    // Linking it up > data-def attribute
    "A material made from two or more different materials that stay separate inside it. It combines their properties.": "2 種類以上の異なる材料からできていて、それぞれが中で分かれたまま残っている材料です。もとの材料の性質をあわせもちます。",

    // Linking it up > not needed for IB > p
    "Composites appear in the guide only in this linking question. You do not need to learn examples of composites or how they are made.": "複合材料は、『指導の手引き』ではこのつながりの問いにしか出てきません。複合材料の例やつくり方を覚える必要はありません。",

    // Linking it up > h3
    "What are the structural features of some plastics that make them biodegradable?": "一部のプラスチックが生分解性をもつのは、構造にどんな特徴があるからですか。",

    // Linking it up > p
    "Most plastics have a backbone of carbon atoms joined by strong, non-polar bonds. Water and microorganisms cannot break these bonds easily. A biodegradable plastic has other groups of atoms in its backbone, such as ester links, which can react with water. The chain then breaks into small molecules. You will meet these groups in Structure 3.2.": "ほとんどのプラスチックの主鎖は、強くて無極性の結合でつながった炭素原子でできています。水や微生物は、この結合をなかなか切れません。生分解性プラスチックは、主鎖の中に、エステル結合のような水と反応できる別の原子のまとまりをもっています。そのため、鎖が切れて小さな分子になります。これらのまとまりは Structure 3.2 で学びます。",

    // Linking it up > Additional HL > p
    "Ester and amide links are found in condensation polymers. They are broken by hydrolysis. So some polyesters and polyamides can be broken down in the environment, but addition polymers cannot.": "エステル結合とアミド結合は、縮合重合体にあります。これらの結合は加水分解で切れます。だから、ポリエステルやポリアミドの中には環境の中で分解されるものがありますが、付加重合体は分解されません。",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "試験形式の練習",

    // Exam-style practice > p
    "Questions you have not yet answered correctly come up first, so each set changes when you come back to it. Each question gives the electronegativity values and the diagram you need. Have paper and a calculator beside you.": "まだ正解していない問題が先に出るので、戻ってくるたびにセットの中身が変わります。必要な電気陰性度の値と図は、問題ごとに与えられます。紙と電卓を手元に用意しましょう。",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "基礎：一度に 1 つの考え方",

    // Exam-style practice > data-title attribute
    "2.4 foundation": "2.4 基礎",

    // Exam-style practice > h3
    "Exam standard": "試験レベル",

    // Exam-style practice > data-title attribute
    "2.4 exam standard": "2.4 試験レベル",

    // Exam-style practice > h3
    "Challenge": "チャレンジ",

    // Exam-style practice > data-title attribute
    "2.4 challenge": "2.4 チャレンジ",

    // Exam-style practice > Additional HL > h3
    "Additional HL only: condensation polymers": "HL 追加内容のみ：縮合重合体",

    // Exam-style practice > Additional HL > data-title attribute
    "2.4 Additional HL": "2.4 HL 追加内容",

    // widget string (assets/js/widgets-s2-4.js)
    "hydrogen": "水素",

    // widget string (assets/js/widgets-s2-4.js)
    "lithium": "リチウム",

    // widget string (assets/js/widgets-s2-4.js)
    "beryllium": "ベリリウム",

    // widget string (assets/js/widgets-s2-4.js)
    "boron": "ホウ素",

    // widget string (assets/js/widgets-s2-4.js)
    "carbon": "炭素",

    // widget string (assets/js/widgets-s2-4.js)
    "nitrogen": "窒素",

    // widget string (assets/js/widgets-s2-4.js)
    "oxygen": "酸素",

    // widget string (assets/js/widgets-s2-4.js)
    "fluorine": "フッ素",

    // widget string (assets/js/widgets-s2-4.js)
    "sodium": "ナトリウム",

    // widget string (assets/js/widgets-s2-4.js)
    "magnesium": "マグネシウム",

    // widget string (assets/js/widgets-s2-4.js)
    "aluminium": "アルミニウム",

    // widget string (assets/js/widgets-s2-4.js)
    "silicon": "ケイ素",

    // widget string (assets/js/widgets-s2-4.js)
    "phosphorus": "リン",

    // widget string (assets/js/widgets-s2-4.js)
    "sulfur": "硫黄",

    // widget string (assets/js/widgets-s2-4.js)
    "chlorine": "塩素",

    // widget string (assets/js/widgets-s2-4.js)
    "potassium": "カリウム",

    // widget string (assets/js/widgets-s2-4.js)
    "calcium": "カルシウム",

    // widget string (assets/js/widgets-s2-4.js)
    "iron": "鉄",

    // widget string (assets/js/widgets-s2-4.js)
    "zinc": "亜鉛",

    // widget string (assets/js/widgets-s2-4.js)
    "bromine": "臭素",

    // widget string (assets/js/widgets-s2-4.js)
    "tin": "スズ",

    // widget string (assets/js/widgets-s2-4.js)
    "iodine": "ヨウ素",

    // widget string (assets/js/widgets-s2-4.js)
    "caesium": "セシウム",

    // widget string (assets/js/widgets-s2-4.js)
    "barium": "バリウム",

    // widget string (assets/js/widgets-s2-4.js)
    "metallic": "金属結合",

    // widget string (assets/js/widgets-s2-4.js)
    "ionic": "イオン結合",

    // widget string (assets/js/widgets-s2-4.js)
    "covalent or polar covalent": "共有結合または極性共有結合",

    // widget string (assets/js/widgets-s2-4.js)
    "Polar": "極性",

    // widget string (assets/js/widgets-s2-4.js)
    "covalent": "共有結合",

    // widget string (assets/js/widgets-s2-4.js)
    "Electronegativity difference, Δχ": "電気陰性度の差 Δχ",

    // widget string (assets/js/widgets-s2-4.js)
    "The ionic model fits best. Expect a hard, brittle solid with a high melting point. It does not conduct electricity as a solid. It conducts when molten or dissolved in water.": "イオン結合モデルが最もよく合います。かたくてもろく、融点の高い固体だと予測できます。固体では電気を通しません。融解したときや水に溶けたときは通します。",

    // widget string (assets/js/widgets-s2-4.js)
    "The metallic model fits best. Expect a solid that conducts electricity and heat well and is malleable.": "金属結合モデルが最もよく合います。電気と熱をよく通し、展性のある固体だと予測できます。",

    // widget string (assets/js/widgets-s2-4.js)
    "The covalent model fits best, and the bonds are non-polar (Δχ = 0). Expect a poor electrical conductor. The triangle cannot tell you if the substance is made of molecules (low melting point) or is a covalent network (very high melting point).": "共有結合モデルが最もよく合い、結合は無極性です（Δχ = 0）。電気を通しにくいと予測できます。物質が分子でできているか（融点が低い）、共有結合の結晶か（融点がとても高い）は、三角形からはわかりません。",

    // widget string (assets/js/widgets-s2-4.js)
    "The covalent model fits best. The bonds are polar, and more polar the higher the point sits. Expect a poor electrical conductor in every state. The triangle cannot tell you if the substance is made of molecules (low melting point) or is a covalent network (very high melting point).": "共有結合モデルが最もよく合います。結合には極性があり、点が高いところにあるほど極性が大きくなります。どの状態でも電気を通しにくいと予測できます。物質が分子でできているか（融点が低い）、共有結合の結晶か（融点がとても高い）は、三角形からはわかりません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Take care: this point is very close to the boundary with the {region} region. The triangle does not give a clear answer here. Expect properties between the two models.": "注意：この点は、{region}の領域との境界線にとても近いところにあります。ここでは、三角形からはっきりした答えは出ません。2 つのモデルの中間の性質だと予測しましょう。",

    // widget string (assets/js/widgets-s2-4.js)
    "This point is just outside the outline printed in the data booklet. The printed outline is drawn a little too small for points like this one (it happens with fluorides). Your two numbers are still correct. Read the nearest region: {region}.": "この点は、データブックレットに印刷された輪郭のすぐ外にあります。印刷された輪郭は、このような点には少し小さめに描かれています（フッ化物で起こります）。それでも 2 つの数値は正しいです。いちばん近い領域を読みましょう：{region}。",

    // widget string (assets/js/widgets-s2-4.js)
    "First element": "1 つ目の元素",

    // widget string (assets/js/widgets-s2-4.js)
    "Second element (choose the same one for an element)": "2 つ目の元素（単体なら同じ元素を選ぶ）",

    // widget string (assets/js/widgets-s2-4.js)
    "Or pick an example": "または例を選ぶ",

    // widget string (assets/js/widgets-s2-4.js)
    "(my own choice)": "（自分で選ぶ）",

    // widget string (assets/js/widgets-s2-4.js)
    "Predict first: new compound": "先に予想する：新しい化合物",

    // widget string (assets/js/widgets-s2-4.js)
    "Bonding triangle. Horizontal axis: average electronegativity. Vertical axis: electronegativity difference. Metallic region at the bottom left, ionic region at the top, covalent and polar covalent region at the bottom right. The readout below gives the position of the chosen point.": "結合の三角形。横軸：電気陰性度の平均。縦軸：電気陰性度の差。左下が金属結合の領域、上がイオン結合の領域、右下が共有結合と極性共有結合の領域。選んだ点の位置は、下の表示に出ます。",

    // widget string (assets/js/widgets-s2-4.js)
    "Position (average, difference)": "位置（平均、差）",

    // widget string (assets/js/widgets-s2-4.js)
    "Read from the % scale": "% の目盛りの読み",

    // widget string (assets/js/widgets-s2-4.js)
    "Prediction": "予想",

    // widget string (assets/js/widgets-s2-4.js)
    "Correct": "正解",

    // widget string (assets/js/widgets-s2-4.js)
    "Not quite": "おしい！",

    // widget string (assets/js/widgets-s2-4.js)
    "{formula} sits in the {region} region. Check the two numbers in the working, then find the point on the triangle.": "{formula} は{region}の領域にあります。途中の計算の 2 つの数値を確かめてから、三角形の上で点をさがしましょう。",

    // widget string (assets/js/widgets-s2-4.js)
    "It is close to the boundary with the {other} region, so either model on its own is a rough description.": "{other}の領域との境界線に近いので、どちらのモデルも、単独ではおおまかな説明にしかなりません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Where would {formula} sit?": "{formula} はどこにくるでしょうか。",

    // widget string (assets/js/widgets-s2-4.js)
    "Use χ({a}) = {xa}.": "χ({a}) = {xa} を使います。",

    // widget string (assets/js/widgets-s2-4.js)
    "Use χ({a}) = {xa} and χ({b}) = {xb}.": "χ({a}) = {xa}、χ({b}) = {xb} を使います。",

    // widget string (assets/js/widgets-s2-4.js)
    "Work out the difference and the average on paper. Then choose a region.": "差と平均を紙の上で計算しましょう。それから領域を選びます。",

    // widget string (assets/js/widgets-s2-4.js)
    "Make your prediction first.": "まず予想してみましょう。",

    // widget string (assets/js/widgets-s2-4.js)
    "average": "平均",

    // widget string (assets/js/widgets-s2-4.js)
    "about {ionic} % ionic, {cov} % covalent": "イオン結合性 約 {ionic} %、共有結合性 約 {cov} %",

    // widget string (assets/js/widgets-s2-4.js)
    "Each corner is one pure bonding model. Most substances sit somewhere between the corners.": "それぞれの角は、純粋な結合モデルの 1 つです。ほとんどの物質は、角と角の間のどこかにあります。",

    // widget string (assets/js/widgets-s2-4.js)
    "Bottom left: both elements have low electronegativity, and the difference is small. Neither atom holds its outer electrons strongly, so the electrons are delocalized. Sodium is an example.": "左下：どちらの元素も電気陰性度が低く、差は小さくなります。どちらの原子も外側の電子を強く引きつけないので、電子は非局在化しています。ナトリウムがその例です。",

    // widget string (assets/js/widgets-s2-4.js)
    "Top: one element has low electronegativity and the other has high electronegativity, so the difference is large. Electrons are transferred and ions form. Caesium fluoride is a very ionic example.": "上：一方の元素は電気陰性度が低く、もう一方は高いので、差が大きくなります。電子が移り、イオンができます。フッ化セシウムは、イオン結合性がとても大きい例です。",

    // widget string (assets/js/widgets-s2-4.js)
    "Bottom right: both elements have high electronegativity, and the difference is small. Both atoms attract the electrons strongly, so the electrons are shared. Chlorine is an example. Higher up this region the sharing is unequal: polar covalent.": "右下：どちらの元素も電気陰性度が高く、差は小さくなります。どちらの原子も電子を強く引きつけるので、電子は共有されます。塩素がその例です。この領域の上のほうでは、共有がかたよります。これが極性共有結合です。",

    // widget string (assets/js/widgets-s2-4.js)
    "Explain a region": "領域を説明する",

    // widget string (assets/js/widgets-s2-4.js)
    "The whole triangle": "三角形全体",

    // widget string (assets/js/widgets-s2-4.js)
    "Bonding triangle with example substances. Sodium is in the metallic corner, chlorine in the covalent corner and caesium fluoride at the ionic top. Sodium chloride is in the ionic region. Silicon dioxide is in the polar covalent region. On a wide screen hydrogen chloride is also shown there.": "物質の例を示した結合の三角形。ナトリウムは金属結合の角、塩素は共有結合の角、フッ化セシウムはイオン結合の頂点にあります。塩化ナトリウムはイオン結合の領域にあります。二酸化ケイ素は極性共有結合の領域にあります。広い画面では、塩化水素もそこに表示されます。",

    // widget string (assets/js/widgets-s2-4.js)
    "What this region means": "この領域の意味",

    // widget string (assets/js/widgets-s2-4.js)
    "Material": "材料",

    // widget string (assets/js/widgets-s2-4.js)
    "Pure metal": "純粋な金属",

    // widget string (assets/js/widgets-s2-4.js)
    "Alloy: some larger atoms added": "合金：大きい原子を少し加えたもの",

    // widget string (assets/js/widgets-s2-4.js)
    "Alloy: some smaller atoms added": "合金：小さい原子を少し加えたもの",

    // widget string (assets/js/widgets-s2-4.js)
    "Push the top layers": "上の層を押す",

    // widget string (assets/js/widgets-s2-4.js)
    "Reset": "リセット",

    // widget string (assets/js/widgets-s2-4.js)
    "Model of a metal lattice: rows of positive ions in a sea of delocalized electrons. In the alloy some ions are a different size, so the rows are no longer regular.": "金属の結晶格子のモデル。非局在化電子の海の中に、陽イオンが列になって並んでいます。合金では、一部のイオンの大きさが違うので、列が規則正しくなくなっています。",

    // widget string (assets/js/widgets-s2-4.js)
    "What happened": "起こったこと",

    // widget string (assets/js/widgets-s2-4.js)
    "force": "力",

    // widget string (assets/js/widgets-s2-4.js)
    "Shaded background: delocalized electrons (not drawn one by one)": "色のついた背景：非局在化電子（1 個ずつは描いていません）",

    // widget string (assets/js/widgets-s2-4.js)
    "All ions are the same size: regular layers": "イオンの大きさがすべて同じ：規則正しい層",

    // widget string (assets/js/widgets-s2-4.js)
    "Dark circles: atoms of the added element": "濃い色の円：加えた元素の原子",

    // widget string (assets/js/widgets-s2-4.js)
    "Nothing yet. Press “Push the top layers”.": "まだ何も起こっていません。「上の層を押す」を押しましょう。",

    // widget string (assets/js/widgets-s2-4.js)
    "The layers have moved two places. Press Reset to try again.": "層は 2 個分動きました。「リセット」を押すと、もう一度試せます。",

    // widget string (assets/js/widgets-s2-4.js)
    "The layers slid one place. Every ion is still surrounded by delocalized electrons, so the metallic bonding is unchanged. The metal changed shape without breaking: it is malleable.": "層が 1 個分すべりました。どのイオンも、まだ非局在化電子に囲まれているので、金属結合は変わっていません。金属は割れずに形を変えました。展性があるということです。",

    // widget string (assets/js/widgets-s2-4.js)
    "The layers hardly moved. The different-sized atoms break up the regular layers, so the layers cannot slide past each other as easily. The same force gives less change of shape: the alloy is harder and stronger.": "層はほとんど動きませんでした。大きさの違う原子が規則正しい層を乱すので、層はたがいにすべりにくくなります。同じ力でも形の変化が小さくなります。合金のほうがかたく、強いということです。",

    // widget string (assets/js/widgets-s2-4.js)
    "Does not conduct electricity": "電気を通さない",

    // widget string (assets/js/widgets-s2-4.js)
    "All the outer electrons are held in covalent bonds. There are no delocalized electrons and no mobile ions to carry charge.": "外側の電子はすべて共有結合に使われています。電荷を運ぶ非局在化電子も、動けるイオンもありません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Does not react with water, air, acids or alkalis": "水、空気、酸、アルカリと反応しない",

    // widget string (assets/js/widgets-s2-4.js)
    "The chains are held together by strong covalent bonds, which take a lot of energy to break. So the polymer is chemically unreactive (inert).": "鎖は強い共有結合でできていて、切るには多くのエネルギーが必要です。だから、高分子は化学的に反応しにくい（不活性）のです。",

    // widget string (assets/js/widgets-s2-4.js)
    "The chains are made mostly of light atoms such as carbon and hydrogen, and long chains do not pack tightly.": "鎖は主に炭素や水素のような軽い原子でできています。また、長い鎖はぎっしりとは詰まりません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Not broken down by microorganisms (non-biodegradable)": "微生物に分解されない（生分解されない）",

    // widget string (assets/js/widgets-s2-4.js)
    "This is a chemical property: it is about reactions. The strong covalent bonds in the chains are not easily broken, so the plastic stays in the environment for a very long time.": "これは化学的性質です。反応についての性質だからです。鎖の中の強い共有結合はなかなか切れないので、プラスチックはとても長い間、環境に残ります。",

    // widget string (assets/js/widgets-s2-4.js)
    "Softens when heated, so it can be moulded into shapes": "加熱するとやわらかくなり、型に入れて形をつくれる",

    // widget string (assets/js/widgets-s2-4.js)
    "Only weak intermolecular forces hold one chain to the next. Gentle heating gives the chains enough energy to slide past each other. No covalent bonds break.": "鎖と鎖をつなぎとめているのは、弱い分子間力だけです。おだやかに加熱すると、鎖はたがいにすべって動けるだけのエネルギーを得ます。共有結合は切れません。",

    // widget string (assets/js/widgets-s2-4.js)
    "There are no delocalized electrons to carry energy quickly through the material.": "材料の中でエネルギーをすばやく運ぶ非局在化電子がありません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Each chain is very long, so the many intermolecular forces along its length add up. The chains also tangle.": "鎖はどれもとても長いので、鎖に沿ってはたらくたくさんの分子間力が積み重なります。鎖どうしがからみ合ってもいます。",

    // widget string (assets/js/widgets-s2-4.js)
    "Sorted correctly": "正しく分類した数",

    // widget string (assets/js/widgets-s2-4.js)
    "All sorted.": "すべて分類しました。",

    // widget string (assets/js/widgets-s2-4.js)
    "In an exam, read the question carefully: if it asks for a chemical property of a plastic, a physical property earns no mark.": "試験では、問題文をよく読みましょう。プラスチックの化学的性質を問われたときに物理的性質を書いても、点になりません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Start again": "最初からやり直す",

    // widget string (assets/js/widgets-s2-4.js)
    "Property {n} of {total}": "性質 {n} / {total}",

    // widget string (assets/js/widgets-s2-4.js)
    "Physical property": "物理的性質",

    // widget string (assets/js/widgets-s2-4.js)
    "Chemical property": "化学的性質",

    // widget string (assets/js/widgets-s2-4.js)
    "This is a physical property: no new substance forms.": "これは物理的性質です。新しい物質はできません。",

    // widget string (assets/js/widgets-s2-4.js)
    "This is a chemical property: it describes how the plastic reacts.": "これは化学的性質です。プラスチックがどう反応するかを表しています。",

    // widget string (assets/js/widgets-s2-4.js)
    "Reason from the structure:": "構造からわかる理由：",

    // widget string (assets/js/widgets-s2-4.js)
    "Next property": "次の性質",

    // widget string (assets/js/widgets-s2-4.js)
    "ethene": "ethene",

    // widget string (assets/js/widgets-s2-4.js)
    "propene": "propene",

    // widget string (assets/js/widgets-s2-4.js)
    "chloroethene": "chloroethene",

    // widget string (assets/js/widgets-s2-4.js)
    "tetrafluoroethene": "tetrafluoroethene",

    // widget string (assets/js/widgets-s2-4.js)
    "phenylethene": "phenylethene",

    // widget string (assets/js/widgets-s2-4.js)
    "propenenitrile": "propenenitrile",

    // widget string (assets/js/widgets-s2-4.js)
    "1,1-dichloroethene": "1,1-dichloroethene",

    // widget string (assets/js/widgets-s2-4.js)
    "1,2-dichloroethene": "1,2-dichloroethene",

    // widget string (assets/js/widgets-s2-4.js)
    "1,1-difluoroethene": "1,1-difluoroethene",

    // widget string (assets/js/widgets-s2-4.js)
    "but-2-ene": "but-2-ene",

    // widget string (assets/js/widgets-s2-4.js)
    "Monomer": "単量体",

    // widget string (assets/js/widgets-s2-4.js)
    "Back": "戻る",

    // widget string (assets/js/widgets-s2-4.js)
    "Next step": "次のステップ",

    // widget string (assets/js/widgets-s2-4.js)
    "Reverse: find the monomer": "逆向き：単量体を見つける",

    // widget string (assets/js/widgets-s2-4.js)
    "Back to the builder": "組み立てに戻る",

    // widget string (assets/js/widgets-s2-4.js)
    "Repeating unit": "繰り返し単位",

    // widget string (assets/js/widgets-s2-4.js)
    "Check": "確認",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 1 of 4: three monomer molecules": "ステップ 1 / 4：単量体の分子 3 個",

    // widget string (assets/js/widgets-s2-4.js)
    "Each monomer has a carbon to carbon double bond, C=C.": "どの単量体にも、炭素と炭素の二重結合 C=C があります。",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 2 of 4: open each double bond": "ステップ 2 / 4：二重結合を開く",

    // widget string (assets/js/widgets-s2-4.js)
    "One of the two bonds in each C=C breaks. Each of the two carbons can now form one new bond. This picture is a book-keeping model, not the reaction mechanism.": "それぞれの C=C の 2 本の結合のうち、1 本が切れます。2 個の炭素は、それぞれ新しい結合を 1 本つくれるようになります。この図は原子と結合の数を整理するためのモデルで、反応のしくみ（反応機構）ではありません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 3 of 4: join the units": "ステップ 3 / 4：単位をつなぐ",

    // widget string (assets/js/widgets-s2-4.js)
    "The new bonds link the carbons into one long chain. Only single bonds remain in the backbone. The side groups have not moved. No atoms are lost.": "新しい結合で、炭素が 1 本の長い鎖につながります。主鎖に残るのは単結合だけです。側基は動いていません。原子は 1 個も失われません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 4 of 4: the repeating unit": "ステップ 4 / 4：繰り返し単位",

    // widget string (assets/js/widgets-s2-4.js)
    "One pair of backbone carbons with its four side groups, in brackets. The bonds must cross the brackets. The letter n means a very large number.": "主鎖の炭素 1 組と、その 4 つの側基を、括弧で囲みます。結合は括弧を突き抜けなければなりません。文字 n は、とても大きな数を表します。",

    // widget string (assets/js/widgets-s2-4.js)
    "Three separate molecules of {name}, each with a carbon to carbon double bond": "{name} の分子 3 個。ばらばらで、それぞれに炭素と炭素の二重結合がある",

    // widget string (assets/js/widgets-s2-4.js)
    "Three units of {name} with the double bonds opened: each unit has a single bond between its two carbons and one free bond at each end": "二重結合を開いた {name} の単位 3 個。どの単位も、2 個の炭素の間は単結合で、両端に空いた結合が 1 本ずつある",

    // widget string (assets/js/widgets-s2-4.js)
    "A chain of three repeating units made from {name}: six backbone carbons joined by single bonds, with a continuation bond at each end": "{name} からできた繰り返し単位 3 個の鎖。主鎖の炭素 6 個が単結合でつながり、両端に鎖の続きを表す結合がある",

    // widget string (assets/js/widgets-s2-4.js)
    "Repeating unit of the polymer of {name}: {unit}, in square brackets with n": "{name} の高分子の繰り返し単位：{unit}。角括弧で囲み、n を付けてある",

    // widget string (assets/js/widgets-s2-4.js)
    "reach step 4": "ステップ 4 で表示",

    // widget string (assets/js/widgets-s2-4.js)
    "The repeating unit has the same atoms as one monomer: nothing is lost, so the atom economy is 100 %.": "繰り返し単位は、単量体 1 個と同じ原子を含みます。何も失われないので、アトムエコノミーは 100 % です。",

    // widget string (assets/js/widgets-s2-4.js)
    "Count the atoms at each step. The number never changes.": "ステップごとに原子を数えてみましょう。数は変わりません。",

    // widget string (assets/js/widgets-s2-4.js)
    "Find the monomer.": "単量体を見つけましょう。",

    // widget string (assets/js/widgets-s2-4.js)
    "This is a section of an addition polymer. Which monomer made it?": "これは付加重合体の一部分です。どの単量体からできたでしょうか。",

    // widget string (assets/js/widgets-s2-4.js)
    "A section of an addition polymer chain with six backbone carbons. Repeating unit: {unit}": "主鎖の炭素が 6 個ある、付加重合体の鎖の一部分。繰り返し単位：{unit}",

    // widget string (assets/js/widgets-s2-4.js)
    "Not this one": "これではありません",

    // widget string (assets/js/widgets-s2-4.js)
    "The monomer is {name}, {mono}. Two neighbouring backbone carbons and their four side groups make one repeating unit. Put the double bond back between those two carbons.": "単量体は {name}、{mono} です。となり合う主鎖の炭素 2 個と、その 4 つの側基が、1 つの繰り返し単位です。その 2 個の炭素の間に二重結合を戻します。",

    // widget string (assets/js/widgets-s2-4.js)
    "Split the chain into pairs of backbone carbons. Each pair, with its four side groups, came from one monomer. Compare those side groups with this molecule, then try again.": "鎖を、主鎖の炭素 2 個ずつの組に分けましょう。それぞれの組と、その 4 つの側基が、1 個の単量体からできています。その側基をこの分子とくらべて、もう一度選びましょう。",

    // widget string (assets/js/widgets-s2-4.js)
    "Another polymer": "別の高分子",

    // widget string (assets/js/widgets-s2-4.js)
    "The repeating unit of an addition polymer has two backbone carbons.": "付加重合体の繰り返し単位には、主鎖の炭素が 2 個あります。",

    // widget string (assets/js/widgets-s2-4.js)
    "Polyester: diol + dicarboxylic acid": "ポリエステル：ジオール + ジカルボン酸",

    // widget string (assets/js/widgets-s2-4.js)
    "ester link, –COO–": "エステル結合 –COO–",

    // widget string (assets/js/widgets-s2-4.js)
    "a diol (two –OH groups)": "ジオール（–OH 基が 2 つ）",

    // widget string (assets/js/widgets-s2-4.js)
    "a dicarboxylic acid (two –COOH groups)": "ジカルボン酸（–COOH 基が 2 つ）",

    // widget string (assets/js/widgets-s2-4.js)
    "Polyamide: diamine + dicarboxylic acid": "ポリアミド：ジアミン + ジカルボン酸",

    // widget string (assets/js/widgets-s2-4.js)
    "amide link, –CONH–": "アミド結合 –CONH–",

    // widget string (assets/js/widgets-s2-4.js)
    "a diamine (two –NH₂ groups)": "ジアミン（–NH₂ 基が 2 つ）",

    // widget string (assets/js/widgets-s2-4.js)
    "Polypeptide: amino acids": "ポリペプチド：アミノ酸",

    // widget string (assets/js/widgets-s2-4.js)
    "amide link, –CONH– (called a peptide bond in proteins)": "アミド結合 –CONH–（タンパク質ではペプチド結合と呼ぶ）",

    // widget string (assets/js/widgets-s2-4.js)
    "an amino acid (one –NH₂ group and one –COOH group)": "アミノ酸（–NH₂ 基が 1 つと –COOH 基が 1 つ）",

    // widget string (assets/js/widgets-s2-4.js)
    "a second amino acid": "2 つ目のアミノ酸",

    // widget string (assets/js/widgets-s2-4.js)
    "Polymer type": "高分子の種類",

    // widget string (assets/js/widgets-s2-4.js)
    "Small molecule released": "放出される小さな分子",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 1 of 5: the two monomers": "ステップ 1 / 5：2 つの単量体",

    // widget string (assets/js/widgets-s2-4.js)
    "Monomer A is {A}. Monomer B is {B}. Each monomer has two functional groups, one at each end, so it can join on both sides. R¹ and R² stand for the side groups.": "単量体 A は{A}です。単量体 B は{B}です。どちらの単量体にも、両端に 1 つずつ、合わせて 2 つの官能基があります。だから両側でつながることができます。R¹ と R² は側基を表します。",

    // widget string (assets/js/widgets-s2-4.js)
    "Monomer A is {A}. Monomer B is {B}. Each monomer has two functional groups, one at each end, so it can join on both sides. A box stands for the rest of the molecule.": "単量体 A は{A}です。単量体 B は{B}です。どちらの単量体にも、両端に 1 つずつ、合わせて 2 つの官能基があります。だから両側でつながることができます。四角は、分子の残りの部分を表します。",

    // widget string (assets/js/widgets-s2-4.js)
    "Two monomers, each with a functional group at both ends": "両端に官能基がある単量体 2 つ",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 2 of 5: find the atoms that leave": "ステップ 2 / 5：外れる原子を見つける",

    // widget string (assets/js/widgets-s2-4.js)
    "The dashed outlines mark an H atom on one monomer and the –OH of a –COOH group on the other monomer. Together these atoms make one molecule of water.": "破線の囲みは、一方の単量体の H 原子と、もう一方の単量体の –COOH 基の –OH です。これらの原子が合わさって、水分子が 1 個できます。",

    // widget string (assets/js/widgets-s2-4.js)
    "The same two monomers. A hydrogen atom on one monomer and the OH of a carboxyl group on the other monomer are outlined.": "同じ 2 つの単量体。一方の単量体の水素原子と、もう一方の単量体のカルボキシ基の OH が囲んである。",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 3 of 5: the link forms and water is released": "ステップ 3 / 5：結合ができ、水が放出される",

    // widget string (assets/js/widgets-s2-4.js)
    "A new bond joins the two monomers. The underlined atoms are the {link}. The product still has a functional group at each end, so it can react again and the chain grows.": "新しい結合が 2 つの単量体をつなぎます。下線のついた原子が、できた結合（{link}）です。生成物の両端にはまだ官能基があるので、さらに反応でき、鎖がのびていきます。",

    // widget string (assets/js/widgets-s2-4.js)
    "The two monomers joined by a new link, and one molecule of water": "新しい結合でつながった 2 つの単量体と、水分子 1 個",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 4 of 5: the repeating unit": "ステップ 4 / 5：繰り返し単位",

    // widget string (assets/js/widgets-s2-4.js)
    "One amino acid unit with its end atoms removed, in brackets with n. R stands for the side group, which differs from one amino acid to the next.": "アミノ酸の単位 1 個から端の原子を取り、括弧で囲んで n を付けたものです。R は側基を表し、アミノ酸ごとに違います。",

    // widget string (assets/js/widgets-s2-4.js)
    "One unit from A joined to one unit from B, with the end H and OH removed. The bonds cross the brackets. One link is inside the unit. The second link forms where units join.": "A からの単位 1 個と B からの単位 1 個がつながり、端の H と OH を取ったものです。結合は括弧を突き抜けます。1 つの結合は単位の中にあります。2 つ目の結合は、単位どうしがつながるところにできます。",

    // widget string (assets/js/widgets-s2-4.js)
    "Repeating unit of the condensation polymer in square brackets with n: {unit}": "縮合重合体の繰り返し単位。角括弧で囲み、n を付けてある：{unit}",

    // widget string (assets/js/widgets-s2-4.js)
    "Step 5 of 5: hydrolysis, the reverse reaction": "ステップ 5 / 5：加水分解（逆向きの反応）",

    // widget string (assets/js/widgets-s2-4.js)
    "Water breaks the underlined link. The –OH of water joins the C=O carbon and the H of water joins the O or N atom. The monomers form again. Biological macromolecules are broken down in the same way.": "水が、下線のついた結合を切ります。水の –OH は C=O の炭素につき、水の H は O 原子または N 原子につきます。単量体が元どおりにできます。生体の巨大分子も、同じようにして分解されます。",

    // widget string (assets/js/widgets-s2-4.js)
    "Hydrolysis: the linked molecule and one water molecule give back the two monomers. The atoms that came from water are outlined.": "加水分解：つながった分子と水分子 1 個から、2 つの単量体が元どおりにできる。水からきた原子が囲んである。",

  }
});
