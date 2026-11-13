/* s1-1 — ja translation overlay for Structure Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-1', {
  strings: {

    // page title (browser tab)
    "1.1 Particulate nature of matter | Structure Lab": "1.1 物質の粒子性 | Structure Lab",

    // Introduction to the particulate nature of matter > page header > p
    "Structure 1.1": "Structure 1.1",

    // Introduction to the particulate nature of matter > page header > h1
    "Introduction to the particulate nature of matter": "物質の粒子性：はじめに",

    // Introduction to the particulate nature of matter > page header > span
    "How can we model the particulate nature of matter?": "物質の粒子性は、どのようなモデルで表せるでしょうか。",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each one when you can do it without looking at your notes. Everything in this topic is SL core. There is no Additional HL content in 1.1.": "ノートを見ないでできるようになったら、チェックを付けましょう。このトピックはすべて SL の内容（SL・HL 共通）です。1.1 に HL 追加内容（AHL）はありません。",

    // What you need to be able to do > checklist > span
    "Tell apart elements, compounds and mixtures from their properties.": "性質をもとに、単体・化合物・混合物を見分ける。",

    // What you need to be able to do > checklist > span
    "Say whether a mixture is homogeneous or heterogeneous, and why.": "混合物が均一か不均一かを判断し、その理由を言える。",

    // What you need to be able to do > checklist > span
    "Choose a suitable method to separate a mixture: solvation, filtration, recrystallization, evaporation, distillation or paper chromatography.": "混合物を分けるのに合った方法を選ぶ。方法は、溶媒和、ろ過、再結晶、蒸発、蒸留、ペーパークロマトグラフィーの中から選ぶ。",

    // What you need to be able to do > checklist > span
    "Use the kinetic molecular theory to describe and explain the properties of solids, liquids and gases.": "分子運動論を使って、固体・液体・気体の性質を記述し、説明する。",

    // What you need to be able to do > checklist > span
    "Name the six changes of state and say whether each one absorbs or releases energy.": "6 つの状態変化の名前を言い、それぞれがエネルギーを吸収するか放出するかを言える。",

    // What you need to be able to do > checklist > span
    "Use the state symbols (s), (l), (g) and (aq) in chemical equations.": "化学反応式で状態記号 (s)、(l)、(g)、(aq) を使う。",

    // What you need to be able to do > checklist > span
    "Interpret what happens to temperature and to the particles during a change of state, for example on a heating curve.": "状態変化のあいだに、温度と粒子がどうなるかを読み取る。たとえば加熱曲線で。",

    // What you need to be able to do > checklist > span
    "Convert between degrees Celsius and kelvin, and link temperature in kelvin to the average kinetic energy of the particles.": "セルシウス度とケルビンを換算する。ケルビンで表した温度を、粒子の平均運動エネルギーと結びつける。",

    // Elements, compounds and mixtures > h2
    "Elements, compounds and mixtures": "単体・化合物・混合物",

    // Elements, compounds and mixtures > p
    "Think about a glass of sea water. You can get salt out of it by leaving it in the sun. You cannot get hydrogen out of the water that way. The salt and the water are only mixed. The hydrogen and oxygen in the water are chemically bonded. That difference is what this section is about.": "コップに入れた海水を思い浮かべてください。日なたに置いておけば、塩を取り出せます。でも、同じやり方で水から水素を取り出すことはできません。塩と水は、ただ混ざっているだけです。一方、水の中の水素と酸素は、化学的に結合しています。この違いが、このセクションのテーマです。",

    // Elements, compounds and mixtures > p
    "An <dfn data-def=\"A substance that cannot be chemically broken down into simpler substances. It contains only one type of atom.\">element</dfn> is a substance that cannot be chemically broken down into simpler substances. It contains only one type of atom. Examples: copper, <span class=\"chem\">O2</span>, diamond.": "<dfn data-def=\"化学的な方法では、それ以上簡単な物質に分解できない物質です。1 種類の原子だけでできています。\">単体 <span class=\"en-term\">(element)</span></dfn>は、化学的な方法では、それ以上簡単な物質に分解できない物質です。1 種類の原子だけでできています。例：銅、<span class=\"chem\">O2</span>、ダイヤモンド。",

    // Elements, compounds and mixtures > data-def attribute
    "A substance that cannot be chemically broken down into simpler substances. It contains only one type of atom.": "化学的な方法では、それ以上簡単な物質に分解できない物質です。1 種類の原子だけでできています。",

    // Elements, compounds and mixtures > p
    "A <dfn data-def=\"A substance made of atoms of two or more different elements, chemically bonded together in a fixed ratio.\">compound</dfn> is made of atoms of different elements, chemically bonded together in a fixed ratio. Examples: <span class=\"chem\">H2O</span>, <span class=\"chem\">NaCl</span>, <span class=\"chem\">CO2</span>.": "<dfn data-def=\"2 種類以上の元素の原子が、一定の比で化学的に結合してできた物質です。\">化合物 <span class=\"en-term\">(compound)</span></dfn>は、異なる元素の原子が、一定の比で化学的に結合してできた物質です。例：<span class=\"chem\">H2O</span>、<span class=\"chem\">NaCl</span>、<span class=\"chem\">CO2</span>。",

    // Elements, compounds and mixtures > data-def attribute
    "A substance made of atoms of two or more different elements, chemically bonded together in a fixed ratio.": "2 種類以上の元素の原子が、一定の比で化学的に結合してできた物質です。",

    // Elements, compounds and mixtures > p
    "A <dfn data-def=\"More than one element or compound, in no fixed ratio, not chemically bonded to each other. It can be separated by physical methods.\">mixture</dfn> contains more than one element or compound, in no fixed ratio. The parts are not chemically bonded to each other, so they can be separated by physical methods. Examples: air, sea water.": "<dfn data-def=\"2 種類以上の単体や化合物が、決まった比をもたずに混ざったものです。成分どうしは化学的に結合していません。物理的な方法で分けられます。\">混合物 <span class=\"en-term\">(mixture)</span></dfn>は、2 種類以上の単体や化合物が、決まった比をもたずに混ざったものです。成分どうしは化学的に結合していないので、物理的な方法で分けられます。例：空気、海水。",

    // Elements, compounds and mixtures > data-def attribute
    "More than one element or compound, in no fixed ratio, not chemically bonded to each other. It can be separated by physical methods.": "2 種類以上の単体や化合物が、決まった比をもたずに混ざったものです。成分どうしは化学的に結合していません。物理的な方法で分けられます。",

    // Elements, compounds and mixtures > key idea > p
    "A compound has different properties from the elements in it. A mixture keeps the properties of its parts. That is why a mixture can be separated by physical methods and a compound cannot.": "化合物の性質は、もとの元素の性質とは違います。混合物では、それぞれの成分の性質がそのまま残ります。だから、混合物は物理的な方法で分けられますが、化合物は分けられません。",

    // Elements, compounds and mixtures > table > caption
    "Three kinds of matter": "物質の 3 つの種類",

    // Elements, compounds and mixtures > table > th
    "Type": "種類",

    // Elements, compounds and mixtures > table > th
    "Examples": "例",

    // Elements, compounds and mixtures > table > th
    "Composition": "組成",

    // Elements, compounds and mixtures > table > th
    "Properties": "性質",

    // Elements, compounds and mixtures > table > th
    "How to separate the parts": "成分の分け方",

    // Elements, compounds and mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Element": "単体",

    // Elements, compounds and mixtures > table > td
    "copper, <span class=\"chem\">O2</span>": "銅、<span class=\"chem\">O2</span>",

    // Elements, compounds and mixtures > table > td
    "one type of atom": "1 種類の原子",

    // Elements, compounds and mixtures > table > td
    "its own fixed properties": "その物質に固有の、決まった性質",

    // Elements, compounds and mixtures > table > td
    "cannot be broken down chemically": "化学的な方法では分解できない",

    // Elements, compounds and mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Compound": "化合物",

    // Elements, compounds and mixtures > table > td
    "<span class=\"chem\">NaCl</span>, <span class=\"chem\">CO2</span>": "<span class=\"chem\">NaCl</span>、<span class=\"chem\">CO2</span>",

    // Elements, compounds and mixtures > table > td
    "different elements, bonded, fixed ratio": "異なる元素が、一定の比で結合している",

    // Elements, compounds and mixtures > table > td
    "different from its elements": "もとの元素の性質とは違う",

    // Elements, compounds and mixtures > table > td
    "chemical reaction only": "化学反応でしか分けられない",

    // Elements, compounds and mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Mixture": "混合物",

    // Elements, compounds and mixtures > table > td
    "air, sea water": "空気、海水",

    // Elements, compounds and mixtures > table > td
    "no fixed ratio, not bonded to each other": "比は決まっていない。成分どうしは結合していない",

    // Elements, compounds and mixtures > table > td
    "each part keeps its own": "それぞれの成分の性質が残る",

    // Elements, compounds and mixtures > table > td
    "physical methods": "物理的な方法",

    // Elements, compounds and mixtures > p
    "Here is one example of “different properties”. Sodium is a soft metal that reacts violently with water. Chlorine is a toxic yellow-green gas. The compound sodium chloride is the white solid you put on food.": "「性質が違う」例を 1 つ見てみましょう。ナトリウム（Na）は、水と激しく反応するやわらかい金属です。塩素は、黄緑色の有毒な気体です。ところが、化合物の塩化ナトリウムは、料理に使う白い固体です。",

    // Elements, compounds and mixtures > common mistake > p
    "“Pure” in everyday speech means natural or clean. In chemistry a pure substance is a single element or a single compound. Pure orange juice is a mixture.": "ふだんの言葉で「純粋（ピュア）」と言うと、天然のもの、きれいなものという意味です。化学でいう純物質 <span class=\"en-term\">(pure substance)</span> は、1 種類の単体、または 1 種類の化合物のことです。「100 % ピュア」のオレンジジュースも、化学では混合物です。",

    // Elements, compounds and mixtures > common mistake > p
    "An element is not always single atoms. <span class=\"chem\">O2</span>, <span class=\"chem\">N2</span> and <span class=\"chem\">Cl2</span> are molecules, but each contains only one type of atom, so each is an element.": "単体が、いつもばらばらの原子でできているとは限りません。<span class=\"chem\">O2</span>、<span class=\"chem\">N2</span>、<span class=\"chem\">Cl2</span> は分子です。でも、どれも 1 種類の原子だけでできているので、単体です。",

    // Elements, compounds and mixtures > h3
    "Homogeneous and heterogeneous mixtures": "均一混合物と不均一混合物",

    // Elements, compounds and mixtures > p
    "Stir salt into water and it disappears. Stir sand into water and you still see the sand. Both are mixtures, but they are different kinds.": "水に塩を入れてかき混ぜると、塩は見えなくなります。砂を入れてかき混ぜても、砂は見えたままです。どちらも混合物ですが、種類が違います。",

    // Elements, compounds and mixtures > p
    "A <dfn data-def=\"A mixture with the same composition and properties throughout. You cannot see separate parts.\">homogeneous mixture</dfn> has the same composition and properties throughout. You cannot see separate parts. Solutions are homogeneous. So is air.": "<dfn data-def=\"どの部分をとっても組成と性質が同じ混合物です。成分を見分けることはできません。\">均一混合物 <span class=\"en-term\">(homogeneous mixture)</span></dfn>は、どの部分をとっても組成と性質が同じです。成分を見分けることはできません。溶液は均一混合物です。空気もそうです。",

    // Elements, compounds and mixtures > data-def attribute
    "A mixture with the same composition and properties throughout. You cannot see separate parts.": "どの部分をとっても組成と性質が同じ混合物です。成分を見分けることはできません。",

    // Elements, compounds and mixtures > p
    "A <dfn data-def=\"A mixture whose composition is not the same throughout. It has separate regions with different properties.\">heterogeneous mixture</dfn> does not have the same composition throughout. It has separate regions with different properties. Sand in water and oil on water are heterogeneous.": "<dfn data-def=\"場所によって組成が違う混合物です。性質の違う部分に分かれています。\">不均一混合物 <span class=\"en-term\">(heterogeneous mixture)</span></dfn>は、場所によって組成が違います。性質の違う部分に分かれています。水に入れた砂や、水に浮いた油は不均一混合物です。",

    // Elements, compounds and mixtures > data-def attribute
    "A mixture whose composition is not the same throughout. It has separate regions with different properties.": "場所によって組成が違う混合物です。性質の違う部分に分かれています。",

    // Elements, compounds and mixtures > common mistake > p
    "A homogeneous mixture is not a compound. Salt water looks like one substance, but the salt and water are not chemically bonded in a fixed ratio. You can add more salt, and you can get the salt back by evaporating the water.": "均一混合物は化合物ではありません。食塩水は 1 つの物質のように見えます。でも、塩と水は一定の比で化学的に結合しているわけではありません。塩はあとから足せますし、水を蒸発させれば塩を取り戻せます。",

    // Elements, compounds and mixtures > widget > data-title attribute
    "Classify it": "分類してみよう",

    // Elements, compounds and mixtures > widget > figcaption
    "Pick a substance, then choose its box. Ask two questions each time. Is it one substance or more than one? If it is one, how many types of atom? If it is more than one, can you see separate parts?": "物質を 1 つ選び、当てはまる箱を選びましょう。毎回、次の 2 つを考えます。物質は 1 種類ですか、それとも 2 種類以上ですか。1 種類なら、原子は何種類ですか。2 種類以上なら、成分を見分けられますか。",

    // Elements, compounds and mixtures > exam tip (shown in English + translation) > p
    "To “distinguish between an element and a compound”, give one clear statement about each. An element contains only one type of atom. A compound contains atoms of different elements chemically bonded in a fixed ratio. If a question asks for a physical property that differs, do not give a chemical property or a molar mass.": "「単体と化合物を区別しなさい (distinguish between an element and a compound)」と問われたら、それぞれについてはっきりした文を 1 つずつ書きます。単体は 1 種類の原子だけでできています。化合物は、異なる元素の原子が一定の比で化学的に結合してできています。違いのある物理的性質を問われたときは、化学的性質やモル質量を答えてはいけません。",

    // Elements, compounds and mixtures > not needed for IB > p
    "You do not need colloids, suspensions or emulsions as separate categories. Homogeneous and heterogeneous are enough. Why particular substances do or do not mix is explained with intermolecular forces later, in Structure 2.2.": "コロイド、懸濁液、乳濁液を別の分類として覚える必要はありません。均一と不均一の 2 つで十分です。物質どうしが混ざる理由、混ざらない理由は、あとの Structure 2.2 で分子間力を使って説明します。",

    // Elements, compounds and mixtures > data-title attribute
    "Elements, compounds and mixtures: quick check": "単体・化合物・混合物：確認クイズ",

    // Separating mixtures > data-toc attribute
    // Separating mixtures > h2
    "Separating mixtures": "混合物の分離",

    // Separating mixtures > p
    "Making coffee uses two separation techniques. Hot water dissolves the flavour compounds out of the ground beans. Then a paper filter holds back the grounds and lets the solution through.": "コーヒーをいれるときには、2 つの分離法を使っています。まず、お湯が、ひいた豆から味や香りの成分を溶かし出します。次に、ペーパーフィルターが豆のかすを止め、溶液だけを通します。",

    // Separating mixtures > p
    "Every separation works the same way. You find a <strong>physical property that is different</strong> for the parts of the mixture, and you pick a technique that uses that difference.": "どの分離も、しくみは同じです。混合物の成分のあいだで<strong>違いのある物理的性質</strong>を見つけ、その違いを利用する方法を選びます。",

    // Separating mixtures > table > caption
    "The six techniques named in the syllabus": "シラバスに出てくる 6 つの分離法",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Technique": "分離法",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Property that differs": "違いのある性質",

    // Separating mixtures > table > th
    "What it separates": "何を分けるか",

    // Separating mixtures > table > th
    "Words to use": "使う言葉",

    // Separating mixtures > table > th
    "Solvation (dissolving)": "溶媒和（溶解）",

    // Separating mixtures > table > td
    "solubility in a chosen solvent": "選んだ溶媒への溶けやすさ",

    // Separating mixtures > table > td
    "a soluble solid from an insoluble solid (first step)": "溶ける固体と溶けない固体（最初のステップ）",

    // Separating mixtures > table > td
    "solute, solvent, solution": "溶質 (solute)、溶媒 (solvent)、溶液 (solution)",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Filtration": "ろ過",

    // Separating mixtures > table > td
    "particle size: an undissolved solid cannot pass through filter paper": "粒子の大きさ：溶けていない固体はろ紙を通れない",

    // Separating mixtures > table > td
    "an insoluble solid from a liquid or solution": "溶けない固体を、液体や溶液から分ける",

    // Separating mixtures > table > td
    "residue (on the paper), filtrate (passes through)": "残留物 (residue)：ろ紙に残る。ろ液 (filtrate)：通り抜ける",

    // Separating mixtures > table > th
    // Changes of state and state symbols > table > th
    "Evaporation": "蒸発",

    // Separating mixtures > table > td
    "volatility: the solvent turns to vapour, the dissolved solid does not": "揮発性：溶媒は蒸気になるが、溶けている固体はならない",

    // Separating mixtures > table > td
    "a dissolved solid from its solvent (you keep the solid)": "溶けている固体を、溶媒から分ける（固体を残す）",

    // Separating mixtures > table > td
    "heat to evaporate, then leave to crystallize": "加熱して蒸発させ (evaporate)、置いておいて結晶化させる (crystallize)",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Distillation": "蒸留",

    // Separating mixtures > table > td
    "volatility (boiling point)": "揮発性（沸点）",

    // Separating mixtures > table > td
    "a solvent from a solution, or two liquids that mix and have different boiling points (you keep the liquid)": "溶液から溶媒を取り出す。または、混ざり合っていて沸点の違う 2 種類の液体を分ける（液体を残す）",

    // Separating mixtures > table > td
    "boil, condense, distillate": "沸騰 (boil)、凝縮 (condense)、留出液 (distillate)",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Recrystallization": "再結晶",

    // Separating mixtures > table > td
    "solubility in hot solvent compared with cold solvent": "熱い溶媒と冷たい溶媒での溶けやすさの違い",

    // Separating mixtures > table > td
    "a solid product from small amounts of impurities": "少量の不純物を含む固体の生成物を、不純物から分ける",

    // Separating mixtures > table > td
    "minimum volume of hot solvent, cool, filter, rinse, dry": "最小限の体積の熱い溶媒 (minimum volume of hot solvent)、冷やす、ろ過、すすぐ、乾かす",

    // Separating mixtures > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Paper chromatography": "ペーパークロマトグラフィー",

    // Separating mixtures > table > td
    "how strongly each part is attracted to the paper compared with the moving solvent": "動いていく溶媒とくらべて、それぞれの成分が紙にどれだけ強く引きつけられるか",

    // Separating mixtures > table > td
    "small amounts of dissolved substances, such as dyes": "溶けている少量の物質（色素など）",

    // Separating mixtures > table > td
    "baseline, solvent front, spots": "原線 (baseline)、溶媒先端 (solvent front)、スポット (spots)",

    // Separating mixtures > p
    "<dfn data-def=\"The process in which particles of a solute become surrounded by solvent particles and spread out through the solvent. In everyday words: dissolving.\">Solvation</dfn> is the chemist’s word for dissolving: solvent particles surround the solute particles and carry them into the liquid. A liquid is <dfn data-def=\"A volatile liquid turns to vapour easily. It has a low boiling point.\">volatile</dfn> if it turns to vapour easily, which means it has a low boiling point.": "<dfn data-def=\"溶質の粒子が溶媒の粒子に取り囲まれ、溶媒全体に広がっていく過程です。ふだんの言葉でいえば「溶けること」です。\">溶媒和 <span class=\"en-term\">(solvation)</span></dfn>は、「溶けること」を表す化学の言葉です。溶媒の粒子が溶質の粒子を取り囲み、液体の中へ運んでいきます。蒸気になりやすい液体を、<dfn data-def=\"揮発性の液体は蒸気になりやすい液体です。沸点が低い液体です。\">揮発性 <span class=\"en-term\">(volatile)</span></dfn>の液体といいます。つまり、沸点が低い液体です。",

    // Separating mixtures > data-def attribute
    "The process in which particles of a solute become surrounded by solvent particles and spread out through the solvent. In everyday words: dissolving.": "溶質の粒子が溶媒の粒子に取り囲まれ、溶媒全体に広がっていく過程です。ふだんの言葉でいえば「溶けること」です。",

    // Separating mixtures > data-def attribute
    "A volatile liquid turns to vapour easily. It has a low boiling point.": "揮発性の液体は蒸気になりやすい液体です。沸点が低い液体です。",

    // Separating mixtures > widget > data-title attribute
    "What each technique looks like": "それぞれの分離法のようす",

    // Separating mixtures > widget > data-kicker attribute
    "Diagrams": "図",

    // Separating mixtures > widget > figcaption
    "Choose a technique to see a labelled diagram. These are simple sketches, not drawn to scale. Notice where each part of the mixture ends up.": "分離法を選ぶと、ラベル付きの図が出ます。簡単な略図で、縮尺は正確ではありません。混合物のそれぞれの成分がどこに行くかに注目しましょう。",

    // Separating mixtures > h3
    "How to choose a technique": "分離法の選び方",

    // Separating mixtures > li
    "List what is in the mixture and the state of each part: solid, liquid or dissolved.": "混合物に何が入っているかを書き出し、それぞれの状態を確認する。固体か、液体か、溶けているか。",

    // Separating mixtures > li
    "Decide which part you want to keep.": "どの成分を残したいかを決める。",

    // Separating mixtures > li
    "Find a physical property that is different: solubility, particle size, boiling point, or attraction to paper.": "違いのある物理的性質を見つける。溶けやすさ、粒子の大きさ、沸点、紙への引きつけられやすさなど。",

    // Separating mixtures > li
    "Pick the technique that uses that difference. Use more than one step if you need to.": "その違いを利用する分離法を選ぶ。必要なら、ステップを 2 つ以上組み合わせる。",

    // Separating mixtures > li
    "Finish the job: dry a solid, or evaporate the solvent from a filtrate.": "最後まで仕上げる。固体は乾かす。ろ液からは溶媒を蒸発させる。",

    // Separating mixtures > widget > data-title attribute
    "Separation chooser": "分離法を選ぼう",

    // Separating mixtures > widget > figcaption
    "Choose a mixture, then answer the two steps. Notice that the same property difference can lead to different techniques. It depends on which part you want to keep.": "混合物を選び、2 つのステップに答えましょう。同じ性質の違いでも、選ぶ分離法が変わることがあります。どの成分を残したいかで決まります。",

    // Separating mixtures > worked example > data-kicker attribute
    "Worked example: planning a separation": "例題：分離の計画を立てる",

    // Separating mixtures > worked example > h3
    "Getting dry sand and dry salt from a mixture of the two": "砂と塩の混合物から、乾いた砂と乾いた塩を取り出す",

    // Separating mixtures > worked example > p
    "A student has a dry mixture of sand and salt (sodium chloride). Outline how to obtain a dry sample of each solid.": "生徒が、砂と塩（塩化ナトリウム）の乾いた混合物を持っています。それぞれの固体の乾いた試料を得る方法について、概要を述べなさい (outline)。",

    // Separating mixtures > worked example > data-title attribute
    "Find the property that differs": "違いのある性質を見つける",

    // Separating mixtures > worked example > p
    "Every separation starts from a difference in a physical property.": "どの分離も、物理的性質の違いから出発します。",

    // Separating mixtures > worked example > p
    "Salt is soluble in water. Sand is insoluble in water.": "塩は水に溶けます (soluble)。砂は水に溶けません (insoluble)。",

    // Separating mixtures > worked example > data-title attribute
    "Dissolve the salt": "塩を溶かす",

    // Separating mixtures > worked example > p
    "Solvation moves the salt into the liquid and leaves the sand as a solid.": "溶媒和によって、塩は液体の中に移り、砂は固体のまま残ります。",

    // Separating mixtures > worked example > p
    "Add distilled water to the mixture and stir until no more solid dissolves.": "混合物に蒸留水を加え、固体がそれ以上溶けなくなるまでかき混ぜます。",

    // Separating mixtures > worked example > data-title attribute
    "Filter": "ろ過する",

    // Separating mixtures > worked example > p
    "The undissolved sand grains cannot pass through filter paper. The dissolved salt can.": "溶けていない砂の粒は、ろ紙を通れません。溶けている塩は通れます。",

    // Separating mixtures > worked example > p
    "Pour the mixture through filter paper in a funnel. Sand is the residue. Salt solution is the filtrate.": "ろうとにろ紙をセットし、混合物を注ぎます。砂が残留物 (residue) です。食塩水がろ液 (filtrate) です。",

    // Separating mixtures > worked example > data-title attribute
    "Finish the sand": "砂を仕上げる",

    // Separating mixtures > worked example > p
    "The sand is wet, and it has salt solution on it.": "砂はぬれていて、食塩水も付いています。",

    // Separating mixtures > worked example > p
    "Rinse the residue with a little distilled water, then leave it to dry.": "残留物を少量の蒸留水ですすぎ、置いて乾かします。",

    // Separating mixtures > worked example > data-title attribute
    "Finish the salt": "塩を仕上げる",

    // Separating mixtures > worked example > p
    "The salt is still dissolved. Water is volatile and salt is not.": "塩はまだ溶けたままです。水は揮発性ですが、塩は揮発性ではありません。",

    // Separating mixtures > worked example > p
    "Heat the filtrate to evaporate the water. Leave it to crystallize, then dry the crystals.": "ろ液を加熱して、水を蒸発させます。置いておいて結晶化させ、結晶を乾かします。",

    // Separating mixtures > worked example > p
    "Add water and stir, filter, rinse and dry the residue (sand), evaporate the water from the filtrate and dry the crystals (salt).": "水を加えてかき混ぜる。ろ過する。残留物（砂）をすすいで乾かす。ろ液から水を蒸発させ、結晶（塩）を乾かす。",

    // Separating mixtures > exam tip (shown in English + translation) > p
    "In a separation plan, each workable step in a sensible order earns a mark. The steps students forget are the last ones: drying the residue and evaporating the filtrate. Use any physical property the question gives you. For example, if one solid is magnetic, remove it with a magnet first.": "分離の計画では、実行できるステップを筋の通った順に書くと、1 つずつ点になります。忘れやすいのは最後のステップです。残留物を乾かすこと、ろ液を蒸発させることです。問題に書かれた物理的性質は、どれでも利用しましょう。たとえば、固体の 1 つが磁石に付くなら、最初に磁石で取り除きます。",

    // Separating mixtures > h3
    "Recrystallization, step by step": "再結晶の手順",

    // Separating mixtures > p
    "Recrystallization purifies a solid that contains small amounts of impurities. It works when the solid is very soluble in the hot solvent and much less soluble in the cold solvent.": "再結晶は、少量の不純物を含む固体を精製する方法です。その固体が、熱い溶媒にはよく溶け、冷たい溶媒にはずっと溶けにくいときに使えます。",

    // Separating mixtures > li
    "Dissolve the impure solid in the <strong>minimum volume of hot solvent</strong>.": "不純物を含む固体を、<strong>最小限の体積の熱い溶媒</strong>に溶かす。",

    // Separating mixtures > li
    "Filter the solution while it is hot. Insoluble impurities stay on the filter paper.": "熱いうちに溶液をろ過する。溶けない不純物は、ろ紙の上に残る。",

    // Separating mixtures > li
    "Let the filtrate cool. The product is less soluble in cold solvent, so it forms crystals. Soluble impurities are present in small amounts, so they stay dissolved.": "ろ液を冷やす。生成物は冷たい溶媒に溶けにくいので、結晶になる。溶ける不純物は量が少ないので、溶けたまま残る。",

    // Separating mixtures > li
    "Filter to collect the crystals.": "ろ過して結晶を集める。",

    // Separating mixtures > li
    "Rinse the crystals with a little <strong>cold</strong> solvent, then dry them.": "結晶を少量の<strong>冷たい</strong>溶媒ですすぎ、乾かす。",

    // Separating mixtures > common mistake > p
    "Using plenty of hot solvent “to be safe” loses product. The more solvent there is, the more product stays dissolved after cooling, so fewer crystals form. The same idea explains the cold rinse: warm solvent would dissolve some of your crystals again.": "「念のため」と熱い溶媒をたっぷり使うと、生成物が減ってしまいます。溶媒が多いほど、冷やしたあとも溶けたままの生成物が増え、できる結晶が少なくなるからです。冷たい溶媒ですすぐのも同じ理由です。温かい溶媒だと、せっかくの結晶がまた少し溶けてしまいます。",

    // Separating mixtures > h3
    "Paper chromatography in practice": "ペーパークロマトグラフィーの実際",

    // Separating mixtures > p
    "Draw the baseline in pencil, because pencil does not dissolve in the solvent. Put a small spot of the mixture on the baseline. Stand the paper in a little solvent, with the solvent level <strong>below</strong> the baseline. If the spot started under the solvent, the dyes would dissolve into the beaker instead of moving up the paper. A pure substance gives one spot. A mixture gives more than one.": "原線 <span class=\"en-term\">(baseline)</span> は鉛筆で引きます。鉛筆の線は溶媒に溶けないからです。混合物を原線の上に小さなスポットとして付けます。紙を少量の溶媒に立てます。このとき、溶媒の液面が原線より<strong>下</strong>になるようにします。スポットが最初から溶媒につかっていると、色素は紙を上がらずに、ビーカーの溶媒に溶け出してしまいます。純物質ならスポットは 1 つです。混合物なら 2 つ以上になります。",

    // Separating mixtures > not needed for IB > p
    "You do not need retardation factor (R<sub>f</sub>) calculations or the terms stationary phase and mobile phase in this topic. They come later, in Structure 2.2, together with thin layer chromatography. You also do not need the details of fractionating columns, centrifuges or separating funnels here.": "このトピックでは、R<sub>f</sub> 値（移動率、retardation factor）の計算や、固定相・移動相という用語は必要ありません。これらは、あとの Structure 2.2 で薄層クロマトグラフィーと一緒に学びます。分留塔、遠心分離機、分液ろうとのくわしい内容も、ここでは必要ありません。",

    // Separating mixtures > data-title attribute
    "Separating mixtures: quick check": "混合物の分離：確認クイズ",

    // The kinetic molecular theory and states of matter > data-toc attribute
    "States of matter": "物質の状態",

    // The kinetic molecular theory and states of matter > h2
    "The kinetic molecular theory and states of matter": "分子運動論と物質の状態",

    // The kinetic molecular theory and states of matter > p
    "An ice cube keeps its shape on a plate. When it melts, the water spreads out. When the water boils away, the steam fills the kitchen. It is the same substance, <span class=\"chem\">H2O</span>, each time. What changes is how its particles are arranged and how they move.": "氷は、皿の上で形を保ちます。とけると、水は広がります。その水が沸騰してなくなると、水蒸気は台所いっぱいに広がります。どの場合も、物質は同じ <span class=\"chem\">H2O</span> です。変わるのは、粒子の並び方と動き方です。",

    // The kinetic molecular theory and states of matter > p
    "The <dfn data-def=\"A model that explains the physical properties of solids, liquids and gases, and changes of state, in terms of particles that are always moving.\">kinetic molecular theory</dfn> is a model. It says that all matter is made of particles that are always moving, and that there are forces of attraction between them. With those two ideas you can explain the physical properties of solids, liquids and gases.": "<dfn data-def=\"固体・液体・気体の物理的性質と状態変化を、つねに動いている粒子で説明するモデルです。\">分子運動論 <span class=\"en-term\">(kinetic molecular theory)</span></dfn>は、モデルの 1 つです。このモデルでは、すべての物質はつねに動いている粒子でできていて、粒子のあいだには引力がはたらくと考えます。この 2 つの考えで、固体・液体・気体の物理的性質を説明できます。",

    // The kinetic molecular theory and states of matter > data-def attribute
    "A model that explains the physical properties of solids, liquids and gases, and changes of state, in terms of particles that are always moving.": "固体・液体・気体の物理的性質と状態変化を、つねに動いている粒子で説明するモデルです。",

    // The kinetic molecular theory and states of matter > table > caption
    "Solids, liquids and gases in the particle model": "粒子モデルで見た固体・液体・気体",

    // The kinetic molecular theory and states of matter > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Solid": "固体",

    // The kinetic molecular theory and states of matter > table > th
    // What happens to temperature during a change of state > worked example > p
    // widget string (assets/js/widgets-s1-1.js)
    "Liquid": "液体",

    // The kinetic molecular theory and states of matter > table > th
    // widget string (assets/js/widgets-s1-1.js)
    "Gas": "気体",

    // The kinetic molecular theory and states of matter > table > th
    "Arrangement": "並び方",

    // The kinetic molecular theory and states of matter > table > td
    "regular, fixed positions": "規則正しく、位置が決まっている",

    // The kinetic molecular theory and states of matter > table > td
    "random": "不規則",

    // The kinetic molecular theory and states of matter > table > th
    "Spacing": "間隔",

    // The kinetic molecular theory and states of matter > table > td
    "close together": "近い",

    // The kinetic molecular theory and states of matter > table > td
    "far apart": "遠く離れている",

    // The kinetic molecular theory and states of matter > table > th
    "Movement": "動き",

    // The kinetic molecular theory and states of matter > table > td
    "vibrate about fixed positions": "決まった位置で振動する",

    // The kinetic molecular theory and states of matter > table > td
    "move past each other": "たがいにすれ違って動く",

    // The kinetic molecular theory and states of matter > table > td
    "move quickly in all directions": "あらゆる向きに速く動く",

    // The kinetic molecular theory and states of matter > table > th
    "Attractions between particles": "粒子間の引力",

    // The kinetic molecular theory and states of matter > table > td
    "strong enough to hold particles in place": "粒子を決まった位置にとどめるほど強い",

    // The kinetic molecular theory and states of matter > table > td
    "hold particles close, but not in place": "粒子を近くにとどめるが、位置は固定しない",

    // The kinetic molecular theory and states of matter > table > td
    "very weak, because the particles are far apart": "とても弱い（粒子が遠く離れているため）",

    // The kinetic molecular theory and states of matter > table > th
    "Shape": "形",

    // The kinetic molecular theory and states of matter > table > td
    "fixed": "決まっている",

    // The kinetic molecular theory and states of matter > table > td
    "takes the shape of its container": "容器の形になる",

    // The kinetic molecular theory and states of matter > table > td
    "fills its container": "容器いっぱいに広がる",

    // The kinetic molecular theory and states of matter > table > th
    "Volume": "体積",

    // The kinetic molecular theory and states of matter > table > td
    "not fixed: fills its container": "決まっていない：容器いっぱいに広がる",

    // The kinetic molecular theory and states of matter > table > th
    "Can it be compressed?": "圧縮できるか",

    // The kinetic molecular theory and states of matter > table > td
    "no (almost)": "できない（ほとんど）",

    // The kinetic molecular theory and states of matter > table > td
    "yes, easily": "簡単にできる",

    // The kinetic molecular theory and states of matter > widget > data-title attribute
    "Particle model: solid, liquid, gas": "粒子モデル：固体・液体・気体",

    // The kinetic molecular theory and states of matter > widget > figcaption
    "Choose a substance and move the temperature slider. Watch the arrangement, the spacing and the movement. This is a model: it is flat (2-D), it shows only 48 particles, and it is not to scale. In a real gas at room pressure the particles are about ten times further apart than in the liquid. Speeds are only a guide. The model also does not show that ice is slightly less dense than liquid water, which is unusual. Melting and boiling points are rounded to the nearest degree, at normal atmospheric pressure.": "物質を選び、温度のスライダーを動かしましょう。並び方、間隔、動きに注目します。これはモデルです。平面（2-D）で、粒子は 48 個だけで、縮尺も正確ではありません。ふつうの大気圧のもとにある実在気体では、粒子の間隔は液体のときの約 10 倍です。速さも目安にすぎません。また、氷は液体の水より密度が少し小さいのですが（これはめずらしい性質です）、このモデルはそれを表していません。融点と沸点は、標準大気圧での値を整数に丸めています。",

    // The kinetic molecular theory and states of matter > key idea > p
    "Link each property to the particles. Solids and liquids are hard to compress because their particles are already close together. Gases are easy to compress because there is a lot of empty space between the particles. Liquids and gases flow because their particles can move past each other.": "それぞれの性質を、粒子と結びつけましょう。固体と液体が圧縮しにくいのは、粒子がすでに近くにあるからです。気体が圧縮しやすいのは、粒子のあいだに何もない空間がたくさんあるからです。液体と気体が流れるのは、粒子がたがいにすれ違って動けるからです。",

    // The kinetic molecular theory and states of matter > common mistake > p
    "The particles themselves do not expand, melt or get hot. When a substance is heated, its particles move faster and usually move further apart. Each particle stays the same size.": "粒子そのものが、膨張したり、とけたり、熱くなったりするわけではありません。物質を加熱すると、粒子は速く動くようになり、ふつうは粒子の間隔が広がります。1 個 1 個の粒子の大きさは変わりません。",

    // The kinetic molecular theory and states of matter > exam tip (shown in English + translation) > p
    "When you describe a state, cover three things: arrangement, spacing and movement. For example, for a liquid: “particles are close together, randomly arranged, and move past each other”.": "状態を記述する (describe) ときは、並び方 (arrangement)、間隔 (spacing)、動き (movement) の 3 つを書きます。たとえば液体なら、「粒子は近くにあり、不規則に並び、たがいにすれ違って動く」と書きます。",

    // The kinetic molecular theory and states of matter > not needed for IB > p
    "You do not need other states such as plasma, or phase diagrams and triple points. Why one substance is a solid and another a gas at room temperature depends on the bonding and the forces between particles. That comes in Structure 2.": "プラズマなどほかの状態や、状態図、三重点は必要ありません。ある物質が室温で固体になり、別の物質が気体になる理由は、結合や粒子間の力で決まります。これは Structure 2 で学びます。",

    // Changes of state and state symbols > data-toc attribute
    "Changes of state": "状態変化",

    // Changes of state and state symbols > h2
    "Changes of state and state symbols": "状態変化と状態記号",

    // Changes of state and state symbols > p
    "A puddle dries up. A cold window mists over. Frost forms on a freezing night without any liquid water appearing first. Each of these is a change of state, and each has a name you need to know.": "水たまりが乾きます。冷たい窓がくもります。冷えこんだ夜には、液体の水を経ずに霜ができます。どれも状態変化で、それぞれに覚えておくべき名前があります。",

    // Changes of state and state symbols > aria-label attribute
    "Diagram of the six changes of state. Solid to liquid is melting. Liquid to gas is vaporization. Solid to gas is sublimation. These three absorb energy. Gas to liquid is condensation. Liquid to solid is freezing. Gas to solid is deposition. These three release energy.": "6 つの状態変化の図。固体から液体は融解。液体から気体は蒸発（気化）。固体から気体は昇華。この 3 つはエネルギーを吸収する。気体から液体は凝縮。液体から固体は凝固。気体から固体は凝華。この 3 つはエネルギーを放出する。",

    // Changes of state and state symbols > figcaption
    "The six changes of state. Changes that overcome attractions between particles absorb energy. Changes in which attractions form between particles release energy.": "6 つの状態変化。粒子間の引力に打ち勝つ変化は、エネルギーを吸収します。粒子間に引力がはたらくようになる変化は、エネルギーを放出します。",

    // Changes of state and state symbols > table > caption
    "Names of the changes of state": "状態変化の名前",

    // Changes of state and state symbols > table > th
    "Change": "変化",

    // Changes of state and state symbols > table > th
    "Name": "名前",

    // Changes of state and state symbols > table > th
    "Energy": "エネルギー",

    // Changes of state and state symbols > table > th
    "Example": "例",

    // Changes of state and state symbols > table > th
    "solid → liquid": "固体 → 液体",

    // Changes of state and state symbols > table > td
    // widget string (assets/js/widgets-s1-1.js)
    "melting": "融解 (melting)",

    // Changes of state and state symbols > table > td
    "absorbed (endothermic)": "吸収する（吸熱 endothermic）",

    // Changes of state and state symbols > table > td
    "ice melting in a drink": "飲み物の中で氷がとける",

    // Changes of state and state symbols > table > th
    "liquid → gas": "液体 → 気体",

    // Changes of state and state symbols > table > td
    "vaporization (evaporation or boiling)": "蒸発（気化）(vaporization)：蒸発 (evaporation) または沸騰 (boiling)",

    // Changes of state and state symbols > table > td
    "a puddle drying, a kettle boiling": "水たまりが乾く、やかんの湯が沸く",

    // Changes of state and state symbols > table > th
    "solid → gas": "固体 → 気体",

    // Changes of state and state symbols > table > td
    "sublimation": "昇華 (sublimation)",

    // Changes of state and state symbols > table > td
    "dry ice, <span class=\"chem\">CO2(s)</span>, turning to gas": "ドライアイス <span class=\"chem\">CO2(s)</span> が気体になる",

    // Changes of state and state symbols > table > th
    "gas → liquid": "気体 → 液体",

    // Changes of state and state symbols > table > td
    "condensation": "凝縮 (condensation)",

    // Changes of state and state symbols > table > td
    "released (exothermic)": "放出する（発熱 exothermic）",

    // Changes of state and state symbols > table > td
    "mist on a cold window": "冷たい窓のくもり",

    // Changes of state and state symbols > table > th
    "liquid → solid": "液体 → 固体",

    // Changes of state and state symbols > table > td
    "freezing": "凝固 (freezing)",

    // Changes of state and state symbols > table > td
    "water turning to ice": "水が氷になる",

    // Changes of state and state symbols > table > th
    "gas → solid": "気体 → 固体",

    // Changes of state and state symbols > table > td
    "deposition": "凝華 (deposition)",

    // Changes of state and state symbols > table > td
    "frost forming on cold glass": "冷たいガラスに霜ができる",

    // Changes of state and state symbols > h3
    "Why energy goes in or comes out": "エネルギーが出入りする理由",

    // Changes of state and state symbols > p
    "There are forces of attraction between particles. To melt, vaporize or sublime a substance, the particles must overcome some or all of those attractions. That needs energy, so these changes are <dfn data-def=\"A change that absorbs energy from the surroundings.\">endothermic</dfn>: they absorb energy from the surroundings.": "粒子のあいだには引力がはたらいています。物質を融解、蒸発（気化）、昇華させるには、粒子がその引力の一部またはすべてに打ち勝たなければなりません。それにはエネルギーが必要です。だから、これらの変化は<dfn data-def=\"外界（周囲）からエネルギーを吸収する変化です。\">吸熱 <span class=\"en-term\">(endothermic)</span></dfn>変化です。外界（周囲）からエネルギーを吸収します。",

    // Changes of state and state symbols > data-def attribute
    "A change that absorbs energy from the surroundings.": "外界（周囲）からエネルギーを吸収する変化です。",

    // Changes of state and state symbols > p
    "In the opposite changes, attractions form between the particles and hold them more strongly. That releases energy to the surroundings, so condensation, freezing and deposition are <dfn data-def=\"A change that releases energy to the surroundings.\">exothermic</dfn>.": "逆向きの変化では、粒子のあいだに引力がはたらくようになり、粒子はより強く結びつきます。このとき、外界（周囲）へエネルギーが放出されます。だから、凝縮、凝固、凝華は<dfn data-def=\"外界（周囲）へエネルギーを放出する変化です。\">発熱 <span class=\"en-term\">(exothermic)</span></dfn>変化です。",

    // Changes of state and state symbols > data-def attribute
    "A change that releases energy to the surroundings.": "外界（周囲）へエネルギーを放出する変化です。",

    // Changes of state and state symbols > common mistake > p
    "Freezing releases energy. It feels wrong because freezing happens in cold places. But the water must lose energy to its colder surroundings in order to freeze. Energy leaves the water, so the change is exothermic.": "凝固ではエネルギーが放出されます。凝固は寒い場所で起こるので、変に感じるかもしれません。でも、水がこおるには、水よりも冷たい外界（周囲）にエネルギーを渡さなければなりません。エネルギーが水から出ていくので、発熱変化です。",

    // Changes of state and state symbols > h3
    "Evaporation and boiling are both vaporization": "蒸発も沸騰も「気化 (vaporization)」",

    // Changes of state and state symbols > table > caption
    "Two ways for a liquid to become a gas": "液体が気体になる 2 つの道すじ",

    // Changes of state and state symbols > table > th
    "Boiling": "沸騰",

    // Changes of state and state symbols > table > th
    "Where?": "どこで？",

    // Changes of state and state symbols > table > td
    "at the surface only": "表面だけ",

    // Changes of state and state symbols > table > td
    "throughout the liquid (bubbles of vapour form)": "液体全体（蒸気の泡ができる）",

    // Changes of state and state symbols > table > th
    "At what temperature?": "どの温度で？",

    // Changes of state and state symbols > table > td
    "any temperature below the boiling point": "沸点より低い温度なら、どの温度でも",

    // Changes of state and state symbols > table > td
    "at the boiling point": "沸点で",

    // Changes of state and state symbols > table > th
    "Which particles?": "どの粒子が？",

    // Changes of state and state symbols > table > td
    "the faster particles at the surface escape": "表面にある速い粒子が飛び出す",

    // Changes of state and state symbols > table > td
    "particles all through the liquid": "液体全体の粒子",

    // Changes of state and state symbols > common mistake > p
    "The bubbles in boiling water are not air, and they are not hydrogen and oxygen. They are water vapour, <span class=\"chem\">H2O(g)</span>. A change of state does not break the bonds inside the molecules. It only separates whole molecules from each other.": "沸騰している水の泡は、空気ではありません。水素と酸素でもありません。水蒸気 <span class=\"chem\">H2O(g)</span> です。状態変化では、分子の中の結合は切れません。分子がまるごと、たがいに離れるだけです。",

    // Changes of state and state symbols > h3
    "State symbols": "状態記号",

    // Changes of state and state symbols > p
    "A <dfn data-def=\"A letter in brackets after a formula in an equation that shows the state of the substance: (s), (l), (g) or (aq).\">state symbol</dfn> is written in brackets after a formula to show the state of the substance.": "<dfn data-def=\"反応式の化学式のあとに括弧に入れて書く文字で、物質の状態を表します。(s)、(l)、(g)、(aq) があります。\">状態記号 <span class=\"en-term\">(state symbol)</span></dfn>は、物質の状態を表すために、化学式のあとに括弧に入れて書きます。",

    // Changes of state and state symbols > data-def attribute
    "A letter in brackets after a formula in an equation that shows the state of the substance: (s), (l), (g) or (aq).": "反応式の化学式のあとに括弧に入れて書く文字で、物質の状態を表します。(s)、(l)、(g)、(aq) があります。",

    // Changes of state and state symbols > table > caption
    "The four state symbols": "4 つの状態記号",

    // Changes of state and state symbols > table > th
    "Symbol": "記号",

    // Changes of state and state symbols > table > th
    "Meaning": "意味",

    // Changes of state and state symbols > table > td
    // widget string (assets/js/widgets-s1-1.js)
    "solid": "固体",

    // Changes of state and state symbols > table > td
    "<span class=\"chem\">NaCl(s)</span>, salt crystals": "<span class=\"chem\">NaCl(s)</span>：塩の結晶",

    // Changes of state and state symbols > table > td
    "pure liquid": "純粋な液体",

    // Changes of state and state symbols > table > td
    "<span class=\"chem\">H2O(l)</span>, water; <span class=\"chem\">NaCl(l)</span>, molten salt": "<span class=\"chem\">H2O(l)</span>：水。<span class=\"chem\">NaCl(l)</span>：融解した塩",

    // Changes of state and state symbols > table > td
    // widget string (assets/js/widgets-s1-1.js)
    "gas": "気体",

    // Changes of state and state symbols > table > td
    "<span class=\"chem\">CO2(g)</span>": "<span class=\"chem\">CO2(g)</span>",

    // Changes of state and state symbols > table > th
    "(aq)": "(aq)",

    // Changes of state and state symbols > table > td
    "aqueous: dissolved in water": "水溶液 (aqueous)：水に溶けている",

    // Changes of state and state symbols > table > td
    "<span class=\"chem\">NaCl(aq)</span>, salt solution": "<span class=\"chem\">NaCl(aq)</span>：食塩水",

    // Changes of state and state symbols > p
    "Changes of state can be written as equations. The formula stays the same and only the state symbol changes:": "状態変化は式で書けます。化学式はそのままで、状態記号だけが変わります。",

    // Changes of state and state symbols > p
    "<span class=\"chem\">H2O(s) -&gt; H2O(l)</span> (melting) &nbsp;&nbsp; <span class=\"chem\">CO2(s) -&gt; CO2(g)</span> (sublimation)": "<span class=\"chem\">H2O(s) -&gt; H2O(l)</span>（融解） &nbsp;&nbsp; <span class=\"chem\">CO2(s) -&gt; CO2(g)</span>（昇華）",

    // Changes of state and state symbols > p
    "A reaction equation with state symbols looks like this:": "状態記号を付けた化学反応式は、次のようになります。",

    // Changes of state and state symbols > p
    "<span class=\"chem\">Zn(s) + 2HCl(aq) -&gt; ZnCl2(aq) + H2(g)</span>": "<span class=\"chem\">Zn(s) + 2HCl(aq) -&gt; ZnCl2(aq) + H2(g)</span>",

    // Changes of state and state symbols > p
    "Read it as: solid zinc reacts with hydrochloric acid solution to give zinc chloride solution and hydrogen gas.": "読み方：固体の亜鉛が塩酸（水溶液）と反応して、塩化亜鉛の水溶液と気体の水素ができる。",

    // Changes of state and state symbols > common mistake > p
    "(l) and (aq) are different. <span class=\"chem\">NaCl(l)</span> is salt that has been melted, above 800 °C. <span class=\"chem\">NaCl(aq)</span> is salt dissolved in water. Water itself is <span class=\"chem\">H2O(l)</span>, never <span class=\"chem\">H2O(aq)</span>.": "(l) と (aq) は違います。<span class=\"chem\">NaCl(l)</span> は、800 °C より高い温度で融解した塩です。<span class=\"chem\">NaCl(aq)</span> は、水に溶けた塩です。水そのものは <span class=\"chem\">H2O(l)</span> で、<span class=\"chem\">H2O(aq)</span> とは決して書きません。",

    // Changes of state and state symbols > exam tip (shown in English + translation) > p
    "State symbols are marked when the question asks for them, so include them whenever you are asked. Acids, alkalis and dissolved salts are (aq). Water as a product is (l). A solid that forms in a solution (a precipitate) is (s).": "状態記号は、問題で求められたときに採点されます。求められたら必ず書きましょう。酸、アルカリ、溶けている塩は (aq) です。生成物の水は (l) です。溶液の中でできる固体（沈殿、precipitate）は (s) です。",

    // Changes of state and state symbols > data-title attribute
    "States and changes of state: quick check": "物質の状態と状態変化：確認クイズ",

    // Temperature and the kelvin scale > data-toc attribute
    "Temperature and kelvin": "温度とケルビン",

    // Temperature and the kelvin scale > h2
    "Temperature and the kelvin scale": "温度とケルビン目盛り",

    // Temperature and the kelvin scale > p
    "Put a spoon in hot tea and the handle warms up. The fast-moving particles in the tea hit the particles of the spoon and pass energy on. “Hot” means the particles have, on average, more energy of movement.": "熱い紅茶にスプーンを入れると、柄が温かくなります。紅茶の中の速く動く粒子がスプーンの粒子にぶつかり、エネルギーを渡すからです。「熱い」とは、粒子の運動のエネルギーが平均して大きいということです。",

    // Temperature and the kelvin scale > p
    "<dfn data-def=\"The energy a particle has because it is moving.\">Kinetic energy</dfn>, <i>E</i><sub>k</sub>, is the energy a particle has because it is moving. In any sample some particles move slowly and some move fast, so we talk about the average.": "<dfn data-def=\"粒子が動いていることによってもつエネルギーです。\">運動エネルギー <span class=\"en-term\">(kinetic energy)</span></dfn> <i>E</i><sub>k</sub> は、粒子が動いていることによってもつエネルギーです。どんな試料でも、ゆっくり動く粒子もあれば、速く動く粒子もあります。だから平均で考えます。",

    // Temperature and the kelvin scale > data-def attribute
    "The energy a particle has because it is moving.": "粒子が動いていることによってもつエネルギーです。",

    // Temperature and the kelvin scale > key idea > p
    "Temperature, <i>T</i>, in kelvin (K) is a measure of the average kinetic energy of the particles.": "ケルビン（K）で表した温度 <i>T</i> は、粒子の平均運動エネルギー (average kinetic energy) の尺度です。",

    // Temperature and the kelvin scale > p
    "The Celsius scale puts its zero at the freezing point of water. The kelvin scale puts its zero at <dfn data-def=\"0 K, the lowest possible temperature.\">absolute zero</dfn>, the lowest possible temperature. At absolute zero the particles have the lowest possible kinetic energy.": "セルシウス温度の目盛りでは、水の凝固点を 0 とします。ケルビン目盛りでは、<dfn data-def=\"0 K。ありうる最も低い温度です。\">絶対零度 <span class=\"en-term\">(absolute zero)</span></dfn>を 0 とします。絶対零度は、ありうる最も低い温度です。絶対零度では、粒子の運動エネルギーは、ありうる最も小さい値になります。",

    // Temperature and the kelvin scale > data-def attribute
    "0 K, the lowest possible temperature.": "0 K。ありうる最も低い温度です。",

    // Temperature and the kelvin scale > p
    "The higher the temperature in kelvin, the greater the average kinetic energy of the particles. Two samples at the same temperature have the same average kinetic energy, even if one sample is much bigger than the other.": "ケルビンで表した温度が高いほど、粒子の平均運動エネルギーは大きくなります。同じ温度の 2 つの試料は、片方がずっと大きくても、平均運動エネルギーは同じです。",

    // Temperature and the kelvin scale > p
    "The kelvin is the SI unit of temperature. One kelvin is the same size as one degree Celsius. Only the zero point is different, so you convert by adding or subtracting a fixed number.": "ケルビンは温度の SI 単位です。1 ケルビンの幅は、セルシウス度の 1 度の幅と同じです。違うのは 0 の位置だけです。だから、決まった数を足すか引くかすれば換算できます。",

    // Temperature and the kelvin scale > equation > dd
    "temperature on the kelvin scale <span class=\"unit\">K</span>": "ケルビン目盛りでの温度 <span class=\"unit\">K</span>",

    // Temperature and the kelvin scale > equation > dd
    "temperature on the Celsius scale <span class=\"unit\">°C</span>": "セルシウス目盛りでの温度 <span class=\"unit\">°C</span>",

    // Temperature and the kelvin scale > widget > data-title attribute
    "Celsius and kelvin, side by side": "セルシウス度とケルビンを並べて見る",

    // Temperature and the kelvin scale > widget > figcaption
    "Drag the slider or type a value. Both scales have the same step size, so a change of 1 °C is a change of 1 K. Only the zero point differs. There are no negative temperatures in kelvin.": "スライダーを動かすか、値を入力しましょう。2 つの目盛りは 1 目盛りの幅が同じなので、1 °C の変化は 1 K の変化です。違うのは 0 の位置だけです。ケルビンには負の温度はありません。",

    // Temperature and the kelvin scale > data booklet note > p
    "The data booklet gives the conversion: temperature (K) = temperature (°C) + 273.15. It also gives STP as 273.15 K and 100 kPa.": "データブックレットには、換算の式「温度 (K) = 温度 (°C) + 273.15」が載っています。STP が 273.15 K、100 kPa であることも載っています。",

    // Temperature and the kelvin scale > h3
    "Method in words": "解き方を言葉で",

    // Temperature and the kelvin scale > li
    "Decide the direction. Going to kelvin, the number gets bigger: add 273.15. Going to degrees Celsius, the number gets smaller: subtract 273.15.": "向きを決める。ケルビンに直すと数は大きくなる：273.15 を足す。セルシウス度に直すと数は小さくなる：273.15 を引く。",

    // Temperature and the kelvin scale > li
    "Keep the sign of a negative Celsius value.": "セルシウス度の値が負のときは、符号をそのまま付けておく。",

    // Temperature and the kelvin scale > li
    "Round to the same number of decimal places as the temperature you were given.": "与えられた温度と同じ小数の桁数に丸める。",

    // Temperature and the kelvin scale > li
    "Write the unit as K, with no degree sign.": "単位は K と書く。度の記号（°）は付けない。",

    // Temperature and the kelvin scale > li
    "For a temperature <em>change</em>, do not add 273.15. The change is the same number in °C and in K.": "温度の<em>変化</em>には 273.15 を足さない。変化は °C でも K でも同じ数になる。",

    // Temperature and the kelvin scale > worked example > data-kicker attribute
    "Worked example 1": "例題 1",

    // Temperature and the kelvin scale > worked example > h3
    "Converting a boiling point to kelvin": "沸点をケルビンに換算する",

    // Temperature and the kelvin scale > worked example > p
    "Liquid oxygen boils at −182.96 °C. Give this temperature in kelvin.": "液体酸素は −182.96 °C で沸騰します。この温度をケルビンで表しなさい。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Write the relationship": "関係式を書く",

    // Temperature and the kelvin scale > worked example > p
    "Starting from the formula shows your method.": "式から始めると、解き方が伝わります。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Substitute, keeping the sign": "符号に気をつけて代入する",

    // Temperature and the kelvin scale > worked example > p
    "The Celsius value is negative. Losing the minus sign is the most common slip.": "セルシウス度の値は負です。マイナスの符号を落とすのが、いちばん多いミスです。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Round sensibly": "適切に丸める",

    // Temperature and the kelvin scale > worked example > p
    "When you add, the answer keeps the smallest number of decimal places in the data. Both values have two decimal places, so keep two.": "足し算の答えは、データの中でいちばん少ない小数の桁数に合わせます。どちらの値も小数第 2 位まであるので、小数第 2 位まで書きます。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Check that it makes sense": "答えが妥当かを確かめる",

    // Temperature and the kelvin scale > worked example > data-label attribute
    "Check": "確認",

    // Temperature and the kelvin scale > worked example > p
    "A kelvin value is always positive, and always bigger than the Celsius value.": "ケルビンの値は必ず正で、セルシウス度の値より必ず大きくなります。",

    // Temperature and the kelvin scale > worked example > maths line
    "90.19 &gt; −182.96, and 90.19 &gt; 0": "90.19 &gt; −182.96、かつ 90.19 &gt; 0",

    // Temperature and the kelvin scale > worked example > data-kicker attribute
    "Worked example 2": "例題 2",

    // Temperature and the kelvin scale > worked example > h3
    "Converting kelvin to degrees Celsius": "ケルビンをセルシウス度に換算する",

    // Temperature and the kelvin scale > worked example > p
    "Ethanol boils at 351.52 K. Give this temperature in degrees Celsius.": "エタノールは 351.52 K で沸騰します。この温度をセルシウス度で表しなさい。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Rearrange the relationship": "関係式を変形する",

    // Temperature and the kelvin scale > worked example > p
    "You want °C on its own, so subtract 273.15 from both sides.": "°C だけを残したいので、両辺から 273.15 を引きます。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Substitute": "代入する",

    // Temperature and the kelvin scale > worked example > p
    "Going from kelvin to °C, the number must get smaller.": "ケルビンから °C に直すと、数は必ず小さくなります。",

    // Temperature and the kelvin scale > worked example > p
    "Both values have two decimal places, so keep two.": "どちらの値も小数第 2 位まであるので、小数第 2 位まで書きます。",

    // Temperature and the kelvin scale > worked example > data-kicker attribute
    "Worked example 3": "例題 3",

    // Temperature and the kelvin scale > worked example > h3
    "A temperature change in °C and in K": "温度変化を °C と K で表す",

    // Temperature and the kelvin scale > worked example > p
    "Water is heated from 21.4 °C to 68.9 °C. Find the temperature change in °C and in K.": "水を 21.4 °C から 68.9 °C まで加熱します。温度変化を °C と K で求めなさい。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Find the change in °C": "°C での変化を求める",

    // Temperature and the kelvin scale > worked example > p
    "A change is always final minus initial.": "変化は、いつも「あと − はじめ」です。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Convert both temperatures to kelvin": "両方の温度をケルビンに換算する",

    // Temperature and the kelvin scale > worked example > p
    "This is the long way. It shows you what happens to the 273.15.": "これは遠回りの方法です。273.15 がどうなるかがわかります。",

    // Temperature and the kelvin scale > worked example > maths line
    "initial: 21.4 + 273.15 = 294.55 K": "はじめ：21.4 + 273.15 = 294.55 K",

    // Temperature and the kelvin scale > worked example > maths line
    "final: 68.9 + 273.15 = 342.05 K": "あと：68.9 + 273.15 = 342.05 K",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "Find the change in K": "K での変化を求める",

    // Temperature and the kelvin scale > worked example > p
    "The 273.15 is added to both values, so it cancels when you subtract.": "273.15 は両方の値に足されているので、引き算をすると消えます。",

    // Temperature and the kelvin scale > worked example > data-title attribute
    "State the result": "結果を述べる",

    // Temperature and the kelvin scale > worked example > p
    "The scales have the same step size, so a change is the same number on both.": "2 つの目盛りは 1 目盛りの幅が同じなので、変化はどちらでも同じ数になります。",

    // Temperature and the kelvin scale > worked example > p
    "47.5 °C, which is also 47.5 K": "47.5 °C。これは 47.5 K でもあります",

    // Temperature and the kelvin scale > common mistake > p
    "Adding 273.15 to a temperature change is wrong. A rise of 47.5 °C is a rise of 47.5 K, not 320.65 K. Add 273.15 only to a single temperature reading.": "温度変化に 273.15 を足すのは間違いです。47.5 °C の上昇は 47.5 K の上昇で、320.65 K ではありません。273.15 を足すのは、1 つの温度の値を換算するときだけです。",

    // Temperature and the kelvin scale > exam tip (shown in English + translation) > p
    "Write temperatures in kelvin as <span class=\"mono\">298 K</span>, with no degree sign. In gas calculations (Structure 1.5), always convert to kelvin before you substitute.": "ケルビンの温度は <span class=\"mono\">298 K</span> のように書き、度の記号は付けません。気体の計算（Structure 1.5）では、代入する前に必ずケルビンに換算しましょう。",

    // Temperature and the kelvin scale > try it > p
    "Normal human body temperature is about 37 °C. What is this in kelvin? Give your answer to 3 significant figures.": "人の平熱は約 37 °C です。これは何ケルビンですか。有効数字 3 桁で答えましょう。",

    // Temperature and the kelvin scale > try it > li
    "Which is bigger, the number in kelvin or the number in °C? Decide before you calculate.": "ケルビンの数と °C の数、どちらが大きいでしょうか。計算の前に考えましょう。",

    // Temperature and the kelvin scale > try it > li
    "Add 273.15 to the Celsius value: <span class=\"mono\">37 + 273.15</span>.": "セルシウス度の値に 273.15 を足します：<span class=\"mono\">37 + 273.15</span>。",

    // Temperature and the kelvin scale > try it > p
    "To 3 significant figures: <strong>310 K</strong>.": "有効数字 3 桁で：<strong>310 K</strong>。",

    // Temperature and the kelvin scale > try it > p
    "Liquid helium boils at 4.22 K. What is this in degrees Celsius? Give your answer to 2 decimal places.": "液体ヘリウムは 4.22 K で沸騰します。これは何 °C ですか。小数第 2 位まで答えましょう。",

    // Temperature and the kelvin scale > try it > li
    "Going from kelvin to °C, the number gets smaller. Here it will be negative.": "ケルビンから °C に直すと、数は小さくなります。ここでは負の数になります。",

    // Temperature and the kelvin scale > try it > li
    "Subtract 273.15 from the kelvin value: <span class=\"mono\">4.22 − 273.15</span>.": "ケルビンの値から 273.15 を引きます：<span class=\"mono\">4.22 − 273.15</span>。",

    // Temperature and the kelvin scale > try it > p
    "The answer is negative because 4.22 K is far below the freezing point of water.": "答えが負になるのは、4.22 K が水の凝固点よりずっと低いからです。",

    // Temperature and the kelvin scale > try it > p
    "A solution warms from −5.0 °C to 21.5 °C. What is the temperature change in kelvin?": "溶液が −5.0 °C から 21.5 °C まで温まります。温度変化は何ケルビンですか。",

    // Temperature and the kelvin scale > try it > li
    "This is a change, not a single reading. Do you need 273.15?": "これは変化であって、1 つの温度の値ではありません。273.15 は必要でしょうか。",

    // Temperature and the kelvin scale > try it > li
    "Change = final − initial: <span class=\"mono\">21.5 − (−5.0)</span>. Subtracting a negative number means adding.": "変化 = あと − はじめ：<span class=\"mono\">21.5 − (−5.0)</span>。負の数を引くのは、足すのと同じです。",

    // Temperature and the kelvin scale > try it > p
    "A temperature change is the same number in °C and in K.": "温度変化は、°C でも K でも同じ数になります。",

    // Temperature and the kelvin scale > not needed for IB > p
    "You do not need a formula that links kinetic energy to temperature or to particle speed. You need the idea only: temperature in kelvin is a measure of average kinetic energy. Many textbooks go one step further and say that the average kinetic energy is directly proportional to the temperature in kelvin. That is correct, but the IB guide says only “a measure of”, so this site does not ask you to calculate with it. The graph of how kinetic energies are spread out among the particles comes later, in Reactivity 2.2.": "運動エネルギーを温度や粒子の速さと結びつける式は必要ありません。必要なのは、「ケルビンで表した温度は平均運動エネルギーの尺度である」という考え方だけです。多くの教科書はもう一歩進んで、平均運動エネルギーはケルビンで表した温度に比例する、と書いています。これは正しいのですが、IB の『指導の手引き』は「尺度 (a measure of)」としか書いていません。そのため、このサイトでは、これを使った計算は出しません。運動エネルギーが粒子のあいだでどう分布しているかを表すグラフは、あとの Reactivity 2.2 で学びます。",

    // What happens to temperature during a change of state > data-toc attribute
    "Heating curves": "加熱曲線",

    // What happens to temperature during a change of state > h2
    "What happens to temperature during a change of state": "状態変化のあいだ、温度はどうなるか",

    // What happens to temperature during a change of state > p
    "Put a thermometer in a pan of boiling water and keep the heat on. The reading stays at 100 °C until the water has boiled away. Energy is going in all the time, but the temperature is not rising. Where is the energy going?": "沸騰している鍋の湯に温度計を入れ、そのまま加熱を続けます。水がすべて沸騰してなくなるまで、目盛りは 100 °C のままです。エネルギーはずっと加えられているのに、温度は上がりません。エネルギーはどこへ行っているのでしょうか。",

    // What happens to temperature during a change of state > p
    "A <dfn data-def=\"A graph of temperature against energy supplied (or time of steady heating) for a substance as it is heated through its changes of state.\">heating curve</dfn> shows the temperature of a substance as energy is supplied to it at a steady rate. It has sloping parts and flat parts.": "<dfn data-def=\"物質を加熱して状態変化させていくときの温度を、加えたエネルギー（または一定の強さで加熱した時間）に対して表したグラフです。\">加熱曲線 <span class=\"en-term\">(heating curve)</span></dfn>は、一定の割合でエネルギーを加えたときの、物質の温度を表すグラフです。傾いた部分と平らな部分があります。",

    // What happens to temperature during a change of state > data-def attribute
    "A graph of temperature against energy supplied (or time of steady heating) for a substance as it is heated through its changes of state.": "物質を加熱して状態変化させていくときの温度を、加えたエネルギー（または一定の強さで加熱した時間）に対して表したグラフです。",

    // What happens to temperature during a change of state > li
    "<strong>Sloping parts: one state is being heated.</strong> The energy supplied increases the average kinetic energy of the particles, so the temperature rises.": "<strong>傾いた部分：1 つの状態のまま温められている。</strong>加えたエネルギーによって粒子の平均運動エネルギーが大きくなるので、温度が上がります。",

    // What happens to temperature during a change of state > li
    "<strong>Flat parts: the state is changing.</strong> The energy supplied is used to overcome the forces of attraction between the particles. This increases their <dfn data-def=\"Energy stored because of the positions of particles relative to each other. It rises when particles that attract each other are moved apart.\">potential energy</dfn>. Their average kinetic energy does not change, so the temperature stays constant.": "<strong>平らな部分：状態が変化している。</strong>加えたエネルギーは、粒子間の引力に打ち勝つために使われます。これによって、粒子の<dfn data-def=\"粒子どうしの位置関係によって蓄えられるエネルギーです。引き合う粒子を引き離すと大きくなります。\">位置エネルギー <span class=\"en-term\">(potential energy)</span></dfn>が大きくなります。平均運動エネルギーは変わらないので、温度は一定のままです。",

    // What happens to temperature during a change of state > data-def attribute
    "Energy stored because of the positions of particles relative to each other. It rises when particles that attract each other are moved apart.": "粒子どうしの位置関係によって蓄えられるエネルギーです。引き合う粒子を引き離すと大きくなります。",

    // What happens to temperature during a change of state > widget > data-title attribute
    "Heating curve explorer: 100 g of water": "加熱曲線を調べよう：水 100 g",

    // What happens to temperature during a change of state > widget > figcaption
    "Move the slider or step through the five stages. Notice the two flat parts: energy is supplied but the temperature does not change. The graph is to scale for 100 g of water at normal atmospheric pressure, using approximate data. The particle picture is a flat model and is not to scale. Read the curve from right to left and it becomes a cooling curve: the same flat parts appear as the steam condenses and the water freezes.": "スライダーを動かすか、5 つの段階を順に進めましょう。2 つの平らな部分に注目します。エネルギーを加えているのに、温度は変わりません。グラフは、標準大気圧での水 100 g について、おおよそのデータを使って正しい縮尺で描いています。粒子の図は平面のモデルで、縮尺は正確ではありません。曲線を右から左へ読むと、冷却曲線になります。水蒸気が凝縮するときと水が凝固するときに、同じ平らな部分が現れます。",

    // What happens to temperature during a change of state > key idea > p
    "During a change of state, the temperature stays constant even though energy is still being supplied or removed. The first flat part is at the melting point. The second is at the boiling point.": "状態変化のあいだは、エネルギーを加え続けていても、うばい続けていても、温度は一定です。1 つ目の平らな部分は融点です。2 つ目は沸点です。",

    // What happens to temperature during a change of state > h3
    "How to read a heating or cooling curve": "加熱曲線・冷却曲線の読み方",

    // What happens to temperature during a change of state > li
    "Find the flat parts. On a heating curve the lower one is the melting point and the higher one is the boiling point.": "平らな部分を見つける。加熱曲線では、低いほうが融点、高いほうが沸点。",

    // What happens to temperature during a change of state > li
    "Name the state on each sloping part: solid below the melting point, liquid between, gas above the boiling point.": "傾いた部分それぞれの状態を言う。融点より下は固体、あいだは液体、沸点より上は気体。",

    // What happens to temperature during a change of state > li
    "On a flat part, two states are present together.": "平らな部分では、2 つの状態が同時に存在する。",

    // What happens to temperature during a change of state > li
    "To find the state at a given temperature, compare it with the melting point and the boiling point.": "ある温度での状態を知るには、その温度を融点・沸点とくらべる。",

    // What happens to temperature during a change of state > worked example > data-kicker attribute
    "Worked example 4": "例題 4",

    // What happens to temperature during a change of state > worked example > h3
    "Finding the state from melting and boiling points": "融点と沸点から状態を求める",

    // What happens to temperature during a change of state > worked example > p
    "Bromine melts at 266 K and boils at 332 K. What is the state of bromine at 25 °C?": "臭素は 266 K で融解し、332 K で沸騰します。25 °C での臭素の状態は何ですか。",

    // What happens to temperature during a change of state > worked example > data-title attribute
    "Put everything in the same unit": "すべてを同じ単位にそろえる",

    // What happens to temperature during a change of state > worked example > p
    "You cannot compare a temperature in °C with temperatures in K.": "°C の温度と K の温度は、そのままではくらべられません。",

    // What happens to temperature during a change of state > worked example > data-title attribute
    "Compare with the melting point": "融点とくらべる",

    // What happens to temperature during a change of state > worked example > p
    "Above the melting point, the substance is not a solid.": "融点より高ければ、固体ではありません。",

    // What happens to temperature during a change of state > worked example > maths line
    "298.15 K &gt; 266 K, so bromine has melted": "298.15 K &gt; 266 K なので、臭素は融解している",

    // What happens to temperature during a change of state > worked example > data-title attribute
    "Compare with the boiling point": "沸点とくらべる",

    // What happens to temperature during a change of state > worked example > p
    "Below the boiling point, the substance has not boiled.": "沸点より低ければ、まだ沸騰していません。",

    // What happens to temperature during a change of state > worked example > maths line
    "298.15 K &lt; 332 K, so bromine has not boiled": "298.15 K &lt; 332 K なので、臭素は沸騰していない",

    // What happens to temperature during a change of state > worked example > data-title attribute
    "State the answer": "答えを述べる",

    // What happens to temperature during a change of state > worked example > p
    "Between the melting point and the boiling point, a substance is a liquid.": "融点と沸点のあいだでは、物質は液体です。",

    // What happens to temperature during a change of state > worked example > maths line
    "Bromine is a <b>liquid</b> at 25 °C: <span class=\"chem\">Br2(l)</span>": "臭素は 25 °C で<b>液体</b>：<span class=\"chem\">Br2(l)</span>",

    // What happens to temperature during a change of state > common mistake > p
    "“The temperature is constant, so no energy is being absorbed” is wrong. Energy is still going in. It is used to overcome the attractions between the particles. This increases their potential energy, not their average kinetic energy.": "「温度が一定だから、エネルギーは吸収されていない」は間違いです。エネルギーは入り続けています。そのエネルギーは、粒子間の引力に打ち勝つために使われます。大きくなるのは粒子の位置エネルギーで、平均運動エネルギーではありません。",

    // What happens to temperature during a change of state > exam tip (shown in English + translation) > p
    "“Explain why the temperature stays constant during melting” is usually worth 2 marks. Mark 1: the energy is used to overcome the forces of attraction between the particles. Mark 2: the average kinetic energy of the particles does not change. Write both.": "「融解のあいだ温度が一定である理由を説明しなさい (explain)」という問題は、ふつう 2 点です。1 点目：エネルギーは粒子間の引力に打ち勝つために使われる。2 点目：粒子の平均運動エネルギーは変わらない。両方を書きましょう。",

    // What happens to temperature during a change of state > not needed for IB > p
    "You do not need to calculate the energy for any part of a heating curve in this topic. Calculations with specific heat capacity come later, in Reactivity 1.1. The numbers on the graph above are there only to make the scale honest.": "このトピックでは、加熱曲線のどの部分についても、エネルギーを計算する必要はありません。比熱容量を使う計算は、あとの Reactivity 1.1 で学びます。上のグラフの数値は、縮尺を正しくするために入れてあるだけです。",

    // What happens to temperature during a change of state > data-title attribute
    "Temperature and heating curves: quick check": "温度と加熱曲線：確認クイズ",

    // Linking it up > h2
    "Linking it up": "つなげて考える",

    // Linking it up > p
    "The syllabus asks questions that connect this topic to others. Short answers to four of them:": "シラバスには、このトピックをほかのトピックと結びつける問いがあります。そのうち 4 つに短く答えます。",

    // Linking it up > h3
    "What factors are considered in choosing a method to separate the components of a mixture?": "混合物の成分を分ける方法を選ぶとき、どんな要素を考えますか。",

    // Linking it up > p
    "The states of the components, a physical property that differs between them (solubility, particle size, boiling point), and which component you want to keep. For example, evaporation and distillation both use volatility, but only distillation keeps the liquid.": "成分の状態、成分のあいだで違いのある物理的性質（溶けやすさ、粒子の大きさ、沸点）、そしてどの成分を残したいかです。たとえば、蒸発も蒸留も揮発性を利用しますが、液体を残せるのは蒸留だけです。",

    // Linking it up > h3
    "Why are alloys generally considered to be mixtures, even though they often contain metallic bonding?": "合金は金属結合をもつことが多いのに、なぜ一般に混合物と考えられるのですか。",

    // Linking it up > p
    "An alloy does not have a fixed ratio of elements. Brass can be made with different proportions of copper and zinc. A compound always has a fixed ratio. The full picture of bonding in alloys comes in Structure 2.3.": "合金では、元素の比が決まっていません。黄銅（しんちゅう）は、銅と亜鉛の割合を変えて作れます。化合物では、比はいつも一定です。合金の結合については、Structure 2.3 でくわしく学びます。",

    // Linking it up > h3
    "Why are some changes of state endothermic and some exothermic?": "なぜ、吸熱の状態変化と発熱の状態変化があるのですか。",

    // Linking it up > p
    "Melting, vaporization and sublimation need energy to overcome attractions between particles, so they are endothermic. Freezing, condensation and deposition form attractions between particles, which releases energy, so they are exothermic. Energy changes are studied in Reactivity 1.": "融解、蒸発（気化）、昇華では、粒子間の引力に打ち勝つためにエネルギーが必要なので、吸熱です。凝固、凝縮、凝華では、粒子間に引力がはたらくようになり、エネルギーが放出されるので、発熱です。エネルギーの変化は Reactivity 1 で学びます。",

    // Linking it up > h3
    "What is the graphical distribution of kinetic energy values of particles in a sample at a fixed temperature?": "一定の温度で、試料中の粒子の運動エネルギーの値は、グラフにするとどのように分布しますか。",

    // Linking it up > p
    "At any one temperature the particles do not all have the same kinetic energy. A few have very little, a few have a lot, and most are in between. Temperature measures the average. The shape of this distribution is covered in Reactivity 2.2.": "どの温度でも、すべての粒子が同じ運動エネルギーをもつわけではありません。とても小さい粒子が少し、とても大きい粒子が少しあり、ほとんどはそのあいだです。温度は、その平均を表します。この分布の形は Reactivity 2.2 で学びます。",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "試験形式の練習",

    // Exam-style practice > p
    "Three sets, from first steps to stretch. You get feedback after each question. Questions you have not yet answered correctly come first. All questions are original and written for this site.": "基礎から発展まで、3 つのセットがあります。1 問ごとにフィードバックが出ます。まだ正解していない問題が先に出ます。問題はすべて、このサイトのために作ったオリジナルです。",

    // Exam-style practice > h3
    "Foundation: one idea at a time": "基礎：一度に 1 つの考え方",

    // Exam-style practice > data-title attribute
    "1.1 foundation": "1.1 基礎",

    // Exam-style practice > h3
    "Exam standard": "試験レベル",

    // Exam-style practice > data-title attribute
    "1.1 exam standard": "1.1 試験レベル",

    // Exam-style practice > h3
    "Challenge: level 7 stretch": "チャレンジ：成績 7 をめざす発展問題",

    // Exam-style practice > data-title attribute
    "1.1 challenge": "1.1 チャレンジ",

    // widget string (assets/js/widgets-s1-1.js)
    "Correct": "正解",

    // widget string (assets/js/widgets-s1-1.js)
    "Not quite": "おしい！",

    // widget string (assets/js/widgets-s1-1.js)
    "Celsius": "セルシウス度",

    // widget string (assets/js/widgets-s1-1.js)
    "Kelvin": "ケルビン",

    // widget string (assets/js/widgets-s1-1.js)
    "What it means": "意味",

    // widget string (assets/js/widgets-s1-1.js)
    "Temperature": "温度",

    // widget string (assets/js/widgets-s1-1.js)
    "Absolute zero": "絶対零度",

    // widget string (assets/js/widgets-s1-1.js)
    "Water freezes": "水がこおる",

    // widget string (assets/js/widgets-s1-1.js)
    "Room temperature": "室温",

    // widget string (assets/js/widgets-s1-1.js)
    "Water boils": "水が沸騰する",

    // widget string (assets/js/widgets-s1-1.js)
    "absolute zero": "絶対零度",

    // widget string (assets/js/widgets-s1-1.js)
    "water freezes": "水がこおる",

    // widget string (assets/js/widgets-s1-1.js)
    "water boils": "水が沸騰する",

    // widget string (assets/js/widgets-s1-1.js)
    "Thermometer scale from absolute zero to 150 degrees Celsius, labelled in both degrees Celsius and kelvin": "絶対零度から 150 セルシウス度までの温度計の目盛り。セルシウス度とケルビンの両方で示している",

    // widget string (assets/js/widgets-s1-1.js)
    "Absolute zero: the lowest possible temperature": "絶対零度：ありうる最も低い温度",

    // widget string (assets/js/widgets-s1-1.js)
    "Below the freezing point of water": "水の凝固点より低い",

    // widget string (assets/js/widgets-s1-1.js)
    "Water is liquid (at normal atmospheric pressure)": "水は液体（標準大気圧で）",

    // widget string (assets/js/widgets-s1-1.js)
    "At or above the boiling point of water": "水の沸点、またはそれより高い",

    // widget string (assets/js/widgets-s1-1.js)
    "Water": "水",

    // widget string (assets/js/widgets-s1-1.js)
    "Ethanol": "エタノール",

    // widget string (assets/js/widgets-s1-1.js)
    "Nitrogen": "窒素",

    // widget string (assets/js/widgets-s1-1.js)
    "State": "状態",

    // widget string (assets/js/widgets-s1-1.js)
    "What the particles are doing": "粒子のようす",

    // widget string (assets/js/widgets-s1-1.js)
    "Substance": "物質",

    // widget string (assets/js/widgets-s1-1.js)
    "Melting point": "融点",

    // widget string (assets/js/widgets-s1-1.js)
    "Boiling point": "沸点",

    // widget string (assets/js/widgets-s1-1.js)
    "Box of 48 particles shown as a solid, liquid or gas, with a bar below showing the temperature ranges of the three states": "48 個の粒子が入った箱。固体・液体・気体のどれかとして表示される。下の帯は 3 つの状態の温度範囲を示す",

    // widget string (assets/js/widgets-s1-1.js)
    "Pause motion": "動きを止める",

    // widget string (assets/js/widgets-s1-1.js)
    "Play motion": "動きを再生",

    // widget string (assets/js/widgets-s1-1.js)
    "liquid": "液体",

    // widget string (assets/js/widgets-s1-1.js)
    "Close together in a regular, fixed arrangement. They only vibrate about fixed positions.": "粒子は近くにあり、規則正しく、決まった位置に並んでいます。決まった位置で振動するだけです。",

    // widget string (assets/js/widgets-s1-1.js)
    "Solid and liquid together": "固体と液体が共存",

    // widget string (assets/js/widgets-s1-1.js)
    "At the melting point both states can exist together. Some particles are still in fixed positions. Others have broken free and move past each other.": "融点では、2 つの状態が同時に存在できます。まだ決まった位置にある粒子もあれば、そこから離れて、たがいにすれ違って動く粒子もあります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Still close together, but in a random arrangement. They move past each other, so the liquid flows and takes the shape of the bottom of the box.": "粒子はまだ近くにありますが、並び方は不規則です。たがいにすれ違って動くので、液体は流れ、箱の底の形になります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Liquid and gas together": "液体と気体が共存",

    // widget string (assets/js/widgets-s1-1.js)
    "At the boiling point both states can exist together. Some particles have escaped the attractions of their neighbours and move freely through the box.": "沸点では、2 つの状態が同時に存在できます。まわりの粒子の引力からぬけ出して、箱の中を自由に動く粒子もあります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Far apart, in a random arrangement. They move quickly in all directions and fill the whole box.": "粒子は遠く離れていて、並び方は不規則です。あらゆる向きに速く動き、箱全体に広がります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Ice warming: solid": "氷が温まる：固体",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature rises. The energy supplied increases the average kinetic energy of the particles: they vibrate faster about their fixed positions.": "温度が上がります。加えたエネルギーによって、粒子の平均運動エネルギーが大きくなります。粒子は決まった位置で、より速く振動します。",

    // widget string (assets/js/widgets-s1-1.js)
    "Melting: solid and liquid ({pct}% melted)": "融解：固体と液体（{pct}% が融解）",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature stays at 0 °C. The energy supplied is used to overcome some of the attractions that hold the particles in fixed positions. Their potential energy rises. Their average kinetic energy does not change.": "温度は 0 °C のままです。加えたエネルギーは、粒子を決まった位置にとどめている引力の一部に打ち勝つために使われます。粒子の位置エネルギーは大きくなります。平均運動エネルギーは変わりません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Water warming: liquid": "水が温まる：液体",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature rises again. All the solid has melted, so the energy supplied increases the average kinetic energy of the particles.": "温度がまた上がります。固体はすべて融解したので、加えたエネルギーによって粒子の平均運動エネルギーが大きくなります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Boiling: liquid and gas ({pct}% boiled)": "沸騰：液体と気体（{pct}% が沸騰）",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature stays at 100 °C. The energy supplied is used to overcome the attractions between the particles so that they separate completely. Their average kinetic energy does not change. This plateau is long because the particles must be fully separated.": "温度は 100 °C のままです。加えたエネルギーは、粒子間の引力に打ち勝って、粒子を完全に引き離すために使われます。平均運動エネルギーは変わりません。この平らな部分が長いのは、粒子を完全に引き離さなければならないからです。",

    // widget string (assets/js/widgets-s1-1.js)
    "Steam warming: gas": "水蒸気が温まる：気体",

    // widget string (assets/js/widgets-s1-1.js)
    "The temperature rises again. All the liquid has boiled, so the energy supplied increases the average kinetic energy of the gas particles.": "温度がまた上がります。液体はすべて沸騰したので、加えたエネルギーによって気体の粒子の平均運動エネルギーが大きくなります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Energy supplied": "加えたエネルギー",

    // widget string (assets/js/widgets-s1-1.js)
    "Stage": "段階",

    // widget string (assets/js/widgets-s1-1.js)
    "Why": "理由",

    // widget string (assets/js/widgets-s1-1.js)
    "Previous stage": "前の段階",

    // widget string (assets/js/widgets-s1-1.js)
    "Next stage": "次の段階",

    // widget string (assets/js/widgets-s1-1.js)
    "Heating curve for 100 grams of water: temperature against energy supplied, with flat sections at 0 and 100 degrees Celsius, and a particle picture for the chosen point": "水 100 グラムの加熱曲線。加えたエネルギーに対する温度のグラフで、0 セルシウス度と 100 セルシウス度に平らな部分がある。選んだ点での粒子の図も示す",

    // widget string (assets/js/widgets-s1-1.js)
    "energy supplied / kJ": "加えたエネルギー / kJ",

    // widget string (assets/js/widgets-s1-1.js)
    "temperature / °C": "温度 / °C",

    // widget string (assets/js/widgets-s1-1.js)
    "particle picture": "粒子の図",

    // widget string (assets/js/widgets-s1-1.js)
    "boiling": "沸騰",

    // widget string (assets/js/widgets-s1-1.js)
    "{E} kJ": "{E} kJ",

    // widget string (assets/js/widgets-s1-1.js)
    "mixture|poured in": "混合物を|注ぐ",

    // widget string (assets/js/widgets-s1-1.js)
    "filter paper|in a funnel": "ろ紙|（ろうとの中）",

    // widget string (assets/js/widgets-s1-1.js)
    "residue:|insoluble solid|stays on paper": "残留物：|溶けない固体が|ろ紙に残る",

    // widget string (assets/js/widgets-s1-1.js)
    "filtrate:|liquid that|passes through": "ろ液：|通り抜けた|液体",

    // widget string (assets/js/widgets-s1-1.js)
    "add water|(the solvent)": "水を加える|（溶媒）",

    // widget string (assets/js/widgets-s1-1.js)
    "stir with a|glass rod": "ガラス棒で|かき混ぜる",

    // widget string (assets/js/widgets-s1-1.js)
    "soluble solid|dissolves:|a solution forms": "溶ける固体は|溶けて、|溶液になる",

    // widget string (assets/js/widgets-s1-1.js)
    "insoluble solid|does not|dissolve": "溶けない|固体は|溶けない",

    // widget string (assets/js/widgets-s1-1.js)
    "solvent leaves|as vapour": "溶媒は蒸気に|なって出ていく",

    // widget string (assets/js/widgets-s1-1.js)
    "evaporating|basin": "蒸発皿",

    // widget string (assets/js/widgets-s1-1.js)
    "solution, then|crystals of the|dissolved solid": "溶液。あとで|溶けていた固体の|結晶になる",

    // widget string (assets/js/widgets-s1-1.js)
    "gentle|heat": "弱く|加熱",

    // widget string (assets/js/widgets-s1-1.js)
    "thermometer: shows the|temperature of the vapour": "温度計：蒸気の|温度を示す",

    // widget string (assets/js/widgets-s1-1.js)
    "cooling water out": "冷却水の出口",

    // widget string (assets/js/widgets-s1-1.js)
    "condenser:|vapour cools|to a liquid": "冷却器：|蒸気が冷えて|液体になる",

    // widget string (assets/js/widgets-s1-1.js)
    "cooling|water in": "冷却水の|入口",

    // widget string (assets/js/widgets-s1-1.js)
    "distillate": "留出液",

    // widget string (assets/js/widgets-s1-1.js)
    "mixture": "混合物",

    // widget string (assets/js/widgets-s1-1.js)
    "heat": "加熱",

    // widget string (assets/js/widgets-s1-1.js)
    "Dissolve in the minimum|volume of hot solvent.": "最小限の体積の|熱い溶媒に溶かす。",

    // widget string (assets/js/widgets-s1-1.js)
    "Filter while hot:|insoluble impurities|stay on the paper.": "熱いうちにろ過：|溶けない不純物は|ろ紙に残る。",

    // widget string (assets/js/widgets-s1-1.js)
    "Cool slowly: crystals form.|Soluble impurities stay|dissolved.": "ゆっくり冷やす：結晶が|できる。溶ける不純物は|溶けたまま。",

    // widget string (assets/js/widgets-s1-1.js)
    "Filter, rinse with a little|cold solvent, then dry|the crystals.": "ろ過し、少量の冷たい|溶媒ですすいで、|結晶を乾かす。",

    // widget string (assets/js/widgets-s1-1.js)
    "lid": "ふた",

    // widget string (assets/js/widgets-s1-1.js)
    "solvent front": "溶媒先端",

    // widget string (assets/js/widgets-s1-1.js)
    "separated dyes:|each travels a|different distance": "分かれた色素：|進む距離が|それぞれ違う",

    // widget string (assets/js/widgets-s1-1.js)
    "chromatography|paper": "クロマト|グラフィー用の紙",

    // widget string (assets/js/widgets-s1-1.js)
    "pencil baseline|with the start|spot": "鉛筆で引いた|原線と最初の|スポット",

    // widget string (assets/js/widgets-s1-1.js)
    "solvent: its level|starts below|the baseline": "溶媒：液面は|原線より下から|始める",

    // widget string (assets/js/widgets-s1-1.js)
    "Solubility in water: one solid dissolves, the other does not.": "水への溶けやすさ：一方の固体は溶け、もう一方は溶けない。",

    // widget string (assets/js/widgets-s1-1.js)
    "One part is an undissolved solid, the other is a liquid. The solid particles are too large to pass through filter paper.": "一方は溶けていない固体、もう一方は液体。固体の粒子は大きすぎて、ろ紙を通れない。",

    // widget string (assets/js/widgets-s1-1.js)
    "Volatility: one part has a much lower boiling point, so it turns to vapour more easily.": "揮発性：一方の沸点がずっと低く、蒸気になりやすい。",

    // widget string (assets/js/widgets-s1-1.js)
    "Solubility changes with temperature: the solid is much more soluble in hot solvent than in cold solvent.": "溶けやすさが温度で変わる：その固体は、冷たい溶媒より熱い溶媒にずっとよく溶ける。",

    // widget string (assets/js/widgets-s1-1.js)
    "The parts are attracted to paper and to a solvent by different amounts.": "成分によって、紙と溶媒に引きつけられる強さが違う。",

    // widget string (assets/js/widgets-s1-1.js)
    "Solvation (dissolving), then filtration": "溶媒和（溶解）、そのあと、ろ過",

    // widget string (assets/js/widgets-s1-1.js)
    "Evaporation, then crystallization": "蒸発、そのあと結晶化",

    // widget string (assets/js/widgets-s1-1.js)
    "Sand in salt water": "食塩水に入った砂",

    // widget string (assets/js/widgets-s1-1.js)
    "Sand stirred into salt water.": "食塩水に砂を入れてかき混ぜたもの。",

    // widget string (assets/js/widgets-s1-1.js)
    "the sand removed from the liquid": "液体から取り除いた砂",

    // widget string (assets/js/widgets-s1-1.js)
    "The sand has not dissolved. Its grains are far too large to pass through the tiny holes in filter paper. The water and the dissolved salt pass through.": "砂は溶けていません。砂の粒は、ろ紙の小さな穴を通るには大きすぎます。水と、溶けている塩は通り抜けます。",

    // widget string (assets/js/widgets-s1-1.js)
    "Filtration separates an insoluble solid from a liquid. The sand is the <strong>residue</strong>. The salt solution is the <strong>filtrate</strong>. Filtration cannot remove the dissolved salt.": "ろ過は、溶けない固体を液体から分けます。砂が<strong>残留物 (residue)</strong> です。食塩水が<strong>ろ液 (filtrate)</strong> です。ろ過では、溶けている塩は取り除けません。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is only one undissolved solid here. The salt is already dissolved.": "ここにある溶けていない固体は 1 つだけです。塩はすでに溶けています。",

    // widget string (assets/js/widgets-s1-1.js)
    "True, but it is a slow way to get sand out of water. Look for the simplest difference.": "そのとおりですが、水から砂を取り出すには時間がかかる方法です。いちばん単純な違いを探しましょう。",

    // widget string (assets/js/widgets-s1-1.js)
    "Sand does not dissolve in hot water either.": "砂は熱い水にも溶けません。",

    // widget string (assets/js/widgets-s1-1.js)
    "That is the idea behind chromatography, which separates dissolved substances.": "それはクロマトグラフィーの考え方です。クロマトグラフィーは、溶けている物質どうしを分けます。",

    // widget string (assets/js/widgets-s1-1.js)
    "Dry sand and salt": "乾いた砂と塩",

    // widget string (assets/js/widgets-s1-1.js)
    "A dry mixture of sand and salt (both solids).": "砂と塩の乾いた混合物（どちらも固体）。",

    // widget string (assets/js/widgets-s1-1.js)
    "the sand and the salt in separate containers": "砂と塩を別々の容器に",

    // widget string (assets/js/widgets-s1-1.js)
    "Salt is soluble in water. Sand is insoluble.": "塩は水に溶けます。砂は溶けません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Add water and stir. The salt dissolves (solvation) and the sand does not. Then filter: sand is the residue, salt solution is the filtrate. Evaporate the water from the filtrate to get the salt back, and dry the sand.": "水を加えてかき混ぜます。塩は溶け（溶媒和）、砂は溶けません。次にろ過します。砂が残留物、食塩水がろ液です。ろ液から水を蒸発させて塩を取り戻し、砂は乾かします。",

    // widget string (assets/js/widgets-s1-1.js)
    "Both parts are solids at the start. There is no liquid to filter yet.": "はじめは、どちらも固体です。ろ過する液体がまだありません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Both solids have very high boiling points. Heating will not separate them in a school laboratory.": "どちらの固体も沸点がとても高いです。学校の実験室では、加熱しても分けられません。",

    // widget string (assets/js/widgets-s1-1.js)
    "That difference is used to purify one solid, not to separate these two.": "その違いは、1 つの固体を精製するのに使います。この 2 つを分けるのには使えません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Copper(II) sulfate solution": "硫酸銅(II) 水溶液",

    // widget string (assets/js/widgets-s1-1.js)
    "Copper(II) sulfate dissolved in water.": "硫酸銅(II) を水に溶かしたもの。",

    // widget string (assets/js/widgets-s1-1.js)
    "solid copper(II) sulfate crystals": "固体の硫酸銅(II) の結晶",

    // widget string (assets/js/widgets-s1-1.js)
    "Water is volatile: it turns to vapour when heated. The dissolved solid has a very high boiling point and stays behind.": "水は揮発性で、加熱すると蒸気になります。溶けている固体は沸点がとても高いので、あとに残ります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Heat gently to evaporate some of the water until the solution is saturated. Then leave it to cool so that crystals form (crystallization). You want the solid, so the water can escape into the air.": "おだやかに加熱して水の一部を蒸発させ、飽和溶液にします。そのあと冷やして、結晶をつくります（結晶化）。ほしいのは固体なので、水は空気中に逃がしてかまいません。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is only one solid here, and it is already dissolved.": "ここにある固体は 1 つだけで、すでに溶けています。",

    // widget string (assets/js/widgets-s1-1.js)
    "The solid is dissolved, so its particles pass through filter paper with the water.": "固体は溶けているので、その粒子は水と一緒にろ紙を通り抜けます。",

    // widget string (assets/js/widgets-s1-1.js)
    "True for many solids, but here there are no impurities to remove. Which difference lets you remove the water?": "多くの固体に当てはまりますが、ここには取り除く不純物がありません。水を取り除くには、どの違いを使えばよいでしょうか。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is only one dissolved substance, so there is nothing to spread out on paper.": "溶けている物質は 1 つだけなので、紙の上で分かれるものがありません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Salt water (you want the water)": "食塩水（水がほしい）",

    // widget string (assets/js/widgets-s1-1.js)
    "Salt dissolved in water.": "塩を水に溶かしたもの。",

    // widget string (assets/js/widgets-s1-1.js)
    "pure water": "純粋な水",

    // widget string (assets/js/widgets-s1-1.js)
    "Water boils at 100 °C. Salt has a very high boiling point and does not vaporize.": "水は 100 °C で沸騰します。塩は沸点がとても高く、気化しません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Distillation boils the water and then condenses the vapour back to a liquid in a separate container. The liquid collected is the <strong>distillate</strong>. The salt stays in the flask. Evaporation would lose the water you want.": "蒸留では、水を沸騰させ、その蒸気を別の容器で凝縮させて液体に戻します。集めた液体が<strong>留出液 (distillate)</strong> です。塩はフラスコに残ります。蒸発では、ほしい水が失われてしまいます。",

    // widget string (assets/js/widgets-s1-1.js)
    "The salt is dissolved, so it passes through filter paper with the water.": "塩は溶けているので、水と一緒にろ紙を通り抜けます。",

    // widget string (assets/js/widgets-s1-1.js)
    "That helps to purify a solid. Here you want the liquid.": "それは固体の精製に役立つ違いです。ここでほしいのは液体です。",

    // widget string (assets/js/widgets-s1-1.js)
    "Chromatography separates tiny amounts for identification. It would not give you a beaker of water.": "クロマトグラフィーは、成分を調べるために、ごく少量を分ける方法です。ビーカー 1 杯の水は得られません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Ethanol and water": "エタノールと水",

    // widget string (assets/js/widgets-s1-1.js)
    "Ethanol and water, two liquids that mix completely.": "エタノールと水。完全に混ざり合う 2 つの液体。",

    // widget string (assets/js/widgets-s1-1.js)
    "the ethanol separated from the water": "水から分けたエタノール",

    // widget string (assets/js/widgets-s1-1.js)
    "Ethanol boils at 78 °C and water at 100 °C. Ethanol is more volatile.": "エタノールは 78 °C、水は 100 °C で沸騰します。エタノールのほうが揮発性が高いです。",

    // widget string (assets/js/widgets-s1-1.js)
    "On heating, the vapour contains more of the liquid with the lower boiling point (ethanol). The condenser turns the vapour back into a liquid, which is collected as the distillate. One distillation gives a distillate that is richer in ethanol. It is not pure ethanol.": "加熱すると、蒸気には沸点の低い液体（エタノール）が多く含まれます。冷却器が蒸気を液体に戻し、それを留出液として集めます。1 回の蒸留では、エタノールの割合が高くなった留出液が得られます。純粋なエタノールではありません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Both parts are liquids, and they mix completely.": "どちらも液体で、完全に混ざり合っています。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is no undissolved solid. Both liquids pass through filter paper.": "溶けていない固体はありません。どちらの液体もろ紙を通り抜けます。",

    // widget string (assets/js/widgets-s1-1.js)
    "That applies to a solid dissolved in a solvent.": "それは、溶媒に溶けた固体の場合に当てはまります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Chromatography separates tiny amounts for identification, not two bulk liquids.": "クロマトグラフィーは、成分を調べるために、ごく少量を分ける方法です。大量の 2 つの液体を分ける方法ではありません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Dyes in black ink": "黒インクの色素",

    // widget string (assets/js/widgets-s1-1.js)
    "Black ink, a solution of several coloured dyes.": "黒インク。いくつかの色の色素が溶けた溶液。",

    // widget string (assets/js/widgets-s1-1.js)
    "to find out how many dyes the ink contains": "インクに色素が何種類入っているかを調べる",

    // widget string (assets/js/widgets-s1-1.js)
    "Each dye is attracted to the paper and dissolves in the moving solvent by a different amount.": "紙に引きつけられる強さと、動いていく溶媒への溶けやすさが、色素ごとに違います。",

    // widget string (assets/js/widgets-s1-1.js)
    "The solvent moves up the paper and carries the dyes with it. A dye that is more soluble in the solvent and less attracted to the paper travels further. Each dye ends up at a different height.": "溶媒は紙を上がっていき、色素を一緒に運びます。溶媒に溶けやすく、紙に引きつけられにくい色素ほど、遠くまで進みます。色素はそれぞれ違う高さで止まります。",

    // widget string (assets/js/widgets-s1-1.js)
    "All the dyes are dissolved in the same ink.": "色素はすべて、同じインクの中に溶けています。",

    // widget string (assets/js/widgets-s1-1.js)
    "The dyes are dissolved, so they pass through filter paper together.": "色素は溶けているので、一緒にろ紙を通り抜けます。",

    // widget string (assets/js/widgets-s1-1.js)
    "Dyes are not volatile. Heating removes the solvent but leaves the dyes mixed together.": "色素は揮発性ではありません。加熱すると溶媒はなくなりますが、色素は混ざったまま残ります。",

    // widget string (assets/js/widgets-s1-1.js)
    "That would not separate several dissolved dyes from each other.": "それでは、溶けているいくつかの色素を、たがいに分けることはできません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Impure solid product": "不純物を含む固体の生成物",

    // widget string (assets/js/widgets-s1-1.js)
    "An impure solid product from a reaction. It contains small amounts of other solids.": "反応でできた、不純物を含む固体の生成物。ほかの固体が少量入っている。",

    // widget string (assets/js/widgets-s1-1.js)
    "pure, dry crystals of the product": "純粋で乾いた生成物の結晶",

    // widget string (assets/js/widgets-s1-1.js)
    "The product is very soluble in the hot solvent but much less soluble in the cold solvent. Small amounts of soluble impurities stay dissolved when the solution cools.": "生成物は、熱い溶媒にはよく溶けますが、冷たい溶媒にはずっと溶けにくいです。少量の溶ける不純物は、溶液を冷やしても溶けたまま残ります。",

    // widget string (assets/js/widgets-s1-1.js)
    "Dissolve the solid in the minimum volume of hot solvent. Filter hot to remove insoluble impurities. Cool so that the product crystallizes. Filter, rinse with a little cold solvent and dry.": "固体を最小限の体積の熱い溶媒に溶かします。熱いうちにろ過して、溶けない不純物を取り除きます。冷やして、生成物を結晶化させます。ろ過し、少量の冷たい溶媒ですすいで、乾かします。",

    // widget string (assets/js/widgets-s1-1.js)
    "Close. But one filtration cannot remove impurities that also dissolve.": "おしいです。でも、1 回のろ過では、同じように溶ける不純物は取り除けません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Everything is solid at the start. There is no liquid to filter yet.": "はじめは、すべて固体です。ろ過する液体がまだありません。",

    // widget string (assets/js/widgets-s1-1.js)
    "The solids are not volatile.": "これらの固体は揮発性ではありません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Chromatography separates tiny amounts for identification. It would not give you a useful mass of product.": "クロマトグラフィーは、成分を調べるために、ごく少量を分ける方法です。使える量の生成物は得られません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Solvation is the first step when you start with two solids, one soluble and one insoluble.": "溶媒和は、溶ける固体と溶けない固体の 2 つから始めるときの、最初のステップです。",

    // widget string (assets/js/widgets-s1-1.js)
    "Filtration only removes a solid that has not dissolved. Dissolved particles pass through the paper.": "ろ過で取り除けるのは、溶けていない固体だけです。溶けている粒子は、ろ紙を通り抜けます。",

    // widget string (assets/js/widgets-s1-1.js)
    "Evaporation keeps the dissolved solid and loses the solvent into the air. Check which part you want to keep.": "蒸発では、溶けていた固体が残り、溶媒は空気中に逃げてしまいます。どの成分を残したいかを確かめましょう。",

    // widget string (assets/js/widgets-s1-1.js)
    "Distillation collects the liquid that boils off. Check which part you want to keep.": "蒸留では、沸騰して出ていく液体を集めます。どの成分を残したいかを確かめましょう。",

    // widget string (assets/js/widgets-s1-1.js)
    "Recrystallization purifies a solid that has small amounts of impurities.": "再結晶は、少量の不純物を含む固体を精製する方法です。",

    // widget string (assets/js/widgets-s1-1.js)
    "Paper chromatography separates small amounts of dissolved substances so that you can identify them.": "ペーパークロマトグラフィーは、溶けている少量の物質を分けて、何であるかを調べられるようにする方法です。",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of filtration": "ろ過のラベル付きの図",

    // widget string (assets/js/widgets-s1-1.js)
    "Solvation": "溶媒和",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of solvation": "溶媒和のラベル付きの図",

    // widget string (assets/js/widgets-s1-1.js)
    "Evaporation and crystallization": "蒸発と結晶化",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of evaporation and crystallization": "蒸発と結晶化のラベル付きの図",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of distillation": "蒸留のラベル付きの図",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of recrystallization": "再結晶のラベル付きの図",

    // widget string (assets/js/widgets-s1-1.js)
    "Labelled diagram of paper chromatography": "ペーパークロマトグラフィーのラベル付きの図",

    // widget string (assets/js/widgets-s1-1.js)
    "Start again": "最初からやり直す",

    // widget string (assets/js/widgets-s1-1.js)
    "Not chosen yet": "まだ選んでいません",

    // widget string (assets/js/widgets-s1-1.js)
    "<strong>You have:</strong> {mix}<br><strong>You want:</strong> {want}.": "<strong>今あるもの：</strong>{mix}<br><strong>ほしいもの：</strong>{want}。",

    // widget string (assets/js/widgets-s1-1.js)
    "Step 1. Which physical property is different?": "ステップ 1. 違いのある物理的性質はどれですか。",

    // widget string (assets/js/widgets-s1-1.js)
    "Try another property.": "別の性質を試しましょう。",

    // widget string (assets/js/widgets-s1-1.js)
    "Step 2. Which technique uses that difference to give you what you want?": "ステップ 2. その違いを利用して、ほしいものが得られる分離法はどれですか。",

    // widget string (assets/js/widgets-s1-1.js)
    "Homogeneous mixture": "均一混合物",

    // widget string (assets/js/widgets-s1-1.js)
    "Heterogeneous mixture": "不均一混合物",

    // widget string (assets/js/widgets-s1-1.js)
    "Copper wire": "銅線",

    // widget string (assets/js/widgets-s1-1.js)
    "Copper contains only copper atoms.": "銅は銅原子だけでできています。",

    // widget string (assets/js/widgets-s1-1.js)
    "Oxygen gas, {formula}": "酸素（気体）、{formula}",

    // widget string (assets/js/widgets-s1-1.js)
    "The molecules contain two atoms, but both are oxygen atoms. One type of atom means an element.": "分子は原子を 2 個含みますが、どちらも酸素原子です。原子が 1 種類なので、単体です。",

    // widget string (assets/js/widgets-s1-1.js)
    "Diamond": "ダイヤモンド",

    // widget string (assets/js/widgets-s1-1.js)
    "Diamond contains only carbon atoms.": "ダイヤモンドは炭素原子だけでできています。",

    // widget string (assets/js/widgets-s1-1.js)
    "Distilled water, {formula}": "蒸留水、{formula}",

    // widget string (assets/js/widgets-s1-1.js)
    "Hydrogen and oxygen atoms are chemically bonded in a fixed 2 : 1 ratio.": "水素原子と酸素原子が、2 : 1 の一定の比で化学的に結合しています。",

    // widget string (assets/js/widgets-s1-1.js)
    "Sodium chloride crystals, {formula}": "塩化ナトリウムの結晶、{formula}",

    // widget string (assets/js/widgets-s1-1.js)
    "Sodium and chlorine are chemically bonded in a fixed 1 : 1 ratio.": "ナトリウムと塩素が、1 : 1 の一定の比で化学的に結合しています。",

    // widget string (assets/js/widgets-s1-1.js)
    "Carbon dioxide, {formula}": "二酸化炭素、{formula}",

    // widget string (assets/js/widgets-s1-1.js)
    "Carbon and oxygen atoms are chemically bonded in a fixed 1 : 2 ratio.": "炭素原子と酸素原子が、1 : 2 の一定の比で化学的に結合しています。",

    // widget string (assets/js/widgets-s1-1.js)
    "Clean, dry air": "きれいで乾いた空気",

    // widget string (assets/js/widgets-s1-1.js)
    "Air is several gases (mainly nitrogen and oxygen) mixed evenly. The composition is the same throughout.": "空気は、いくつかの気体（おもに窒素と酸素）が均一に混ざったものです。どの部分も組成は同じです。",

    // widget string (assets/js/widgets-s1-1.js)
    "Salt dissolved in water": "水に溶かした塩",

    // widget string (assets/js/widgets-s1-1.js)
    "A solution is a mixture with the same composition throughout. You cannot see separate parts.": "溶液は、どの部分も組成が同じ混合物です。成分を見分けることはできません。",

    // widget string (assets/js/widgets-s1-1.js)
    "Brass (copper and zinc)": "黄銅（銅と亜鉛）",

    // widget string (assets/js/widgets-s1-1.js)
    "Brass is an alloy. The copper and zinc atoms are mixed evenly, and the ratio can vary, so it is a mixture and not a compound.": "黄銅は合金です。銅原子と亜鉛原子は均一に混ざっていて、比は変えられます。だから、化合物ではなく混合物です。",

    // widget string (assets/js/widgets-s1-1.js)
    "Sand stirred into water": "水に入れてかき混ぜた砂",

    // widget string (assets/js/widgets-s1-1.js)
    "You can see separate regions of sand and of water. The composition is not the same throughout.": "砂の部分と水の部分が分かれて見えます。場所によって組成が違います。",

    // widget string (assets/js/widgets-s1-1.js)
    "Oil and water": "油と水",

    // widget string (assets/js/widgets-s1-1.js)
    "The two liquids form separate layers. The composition is not the same throughout.": "2 つの液体は別々の層になります。場所によって組成が違います。",

    // widget string (assets/js/widgets-s1-1.js)
    "Granite rock": "花こう岩",

    // widget string (assets/js/widgets-s1-1.js)
    "You can see grains of different minerals. The composition is not the same throughout.": "いろいろな鉱物の粒が見えます。場所によって組成が違います。",

    // widget string (assets/js/widgets-s1-1.js)
    "Check the types of atom. A compound needs atoms of two or more different elements.": "原子の種類を確かめましょう。化合物には、2 種類以上の異なる元素の原子が必要です。",

    // widget string (assets/js/widgets-s1-1.js)
    "A mixture contains more than one substance. This is a single substance.": "混合物は 2 種類以上の物質を含みます。これは 1 種類の物質です。",

    // widget string (assets/js/widgets-s1-1.js)
    "An element has only one type of atom. Look at the formula: how many different elements are in it?": "単体は 1 種類の原子だけでできています。化学式を見てください。元素は何種類ありますか。",

    // widget string (assets/js/widgets-s1-1.js)
    "The different atoms here are chemically bonded in a fixed ratio. In a mixture the parts are not bonded to each other and the ratio can vary.": "ここでは、異なる原子が一定の比で化学的に結合しています。混合物では、成分どうしは結合しておらず、比も変えられます。",

    // widget string (assets/js/widgets-s1-1.js)
    "The different atoms here are chemically bonded in a fixed ratio. That makes a single pure substance, not a mixture.": "ここでは、異なる原子が一定の比で化学的に結合しています。だから、混合物ではなく、1 種類の純物質です。",

    // widget string (assets/js/widgets-s1-1.js)
    "There is more than one substance here.": "ここには 2 種類以上の物質があります。",

    // widget string (assets/js/widgets-s1-1.js)
    "The substances here are not chemically bonded to each other, and their ratio can vary. That makes a mixture.": "ここにある物質どうしは、化学的に結合していません。比も変えられます。だから混合物です。",

    // widget string (assets/js/widgets-s1-1.js)
    "It is a mixture, but can you see separate parts? If the composition is the same throughout, it is homogeneous.": "混合物ですが、成分を見分けられますか。どの部分も組成が同じなら、均一混合物です。",

    // widget string (assets/js/widgets-s1-1.js)
    "It is a mixture, but the parts are not evenly spread. You can see separate regions.": "混合物ですが、成分は均一に広がっていません。分かれた部分が見えます。",

    // widget string (assets/js/widgets-s1-1.js)
    "Sorted": "分類済み",

    // widget string (assets/js/widgets-s1-1.js)
    "Right first time": "1 回目で正解",

    // widget string (assets/js/widgets-s1-1.js)
    "1. Pick a substance": "1. 物質を選ぶ",

    // widget string (assets/js/widgets-s1-1.js)
    "Substances still to sort": "まだ分類していない物質",

    // widget string (assets/js/widgets-s1-1.js)
    "2. Choose where it belongs": "2. 当てはまる箱を選ぶ",

    // widget string (assets/js/widgets-s1-1.js)
    "All sorted. You got {n} of {total} right first time.": "すべて分類しました。{total} 個のうち {n} 個が 1 回目で正解でした。",

    // widget string (assets/js/widgets-s1-1.js)
    "{bin}: substances placed here": "{bin}：ここに入れた物質",

    // widget string (assets/js/widgets-s1-1.js)
    "{n} of {total}": "{n} / {total}",

    // widget string (assets/js/widgets-s1-1.js)
    "<strong>{name}</strong>: {text}": "<strong>{name}</strong>：{text}",

  }
});

/* Added by i18n-extract --only-missing on 2026-11-13: new or changed English. */
S1.i18n.register('ja', 's1-1', {
  strings: {

    // Changes of state and state symbols > figure label
    "energy absorbed (endothermic): arrows pointing right": "エネルギーを吸収（吸熱）：右向きの矢印",

    // Changes of state and state symbols > figure label
    "SOLID": "固体",

    // Changes of state and state symbols > figure label
    "LIQUID": "液体",

    // Changes of state and state symbols > figure label
    "GAS": "気体",

    // Changes of state and state symbols > figure label
    "vaporization": "気化 (vaporization)",

    // Changes of state and state symbols > figure label
    "energy released (exothermic): arrows pointing left": "エネルギーを放出（発熱）：左向きの矢印",

    // widget string (assets/js/widgets-s1-1.js)
    "m.p. {T} °C": "融点 {T} °C",

    // widget string (assets/js/widgets-s1-1.js)
    "b.p. {T} °C": "沸点 {T} °C",

    // widget string (assets/js/widgets-s1-1.js)
    "{C} °C = {K} K": "{C} °C = {K} K",

  }
});
