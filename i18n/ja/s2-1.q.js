/* s2-1.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's2-1.q', {
  questions: {

    // ── s2-1-q001 · mcq · foundation · SL · Structure 2.1.1 · 1 mark
    "s2-1-q001": {
      // EN: <p>A magnesium atom has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span></span>. What is the charge of the ion that magnesium forms?</p>
      stem: "<p>マグネシウム原子の電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span></span> です。マグネシウムがつくるイオンの電荷はどれですか。</p>",
      options: [
        // EN: 1+
        "1+",
        // EN: 2+
        "2+",
        // EN: 2−
        "2−",
        // EN: 6−
        "6−",
      ],
      hints: [
        // EN: Which shell is the outer shell, and how many electrons does it hold?
        "最外殻はどの殻ですか。そこに電子は何個ありますか。",
        // EN: Magnesium is a metal. Do metal atoms lose or gain electrons?
        "マグネシウムは金属です。金属の原子は、電子を失いますか、受け取りますか。",
      ],
      // EN: <p>The outer shell is shell 3, which holds 2 electrons (<span class="mono"><span class="nowrap">3s<sup>2</sup></span></span>). Magnesium is a metal, so the atom loses both.</p><div class="worked__math">charge = 12 protons − 10 electrons = 2+</div><p>The ion is <span class="chem">Mg^2+</span>, with the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.</p>
      solution: "<p>最外殻は 3 番目の殻で、電子が 2 個あります（<span class=\"mono\"><span class=\"nowrap\">3s<sup>2</sup></span></span>）。マグネシウムは金属なので、原子はこの 2 個を両方とも失います。</p><div class=\"worked__math\">電荷 = 陽子 12 個 − 電子 10 個 = 2+</div><p>イオンは <span class=\"chem\">Mg^2+</span> で、電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span> です。</p>",
      misconception: {
        // EN (option A): Magnesium has two electrons in its outer shell, and it loses both of them, not one.
        "0": "マグネシウムの最外殻には電子が 2 個あります。失うのは 1 個ではなく、2 個とも全部です。",
        // EN (option C): The size is right but the sign is wrong. Losing two negative electrons leaves more protons than electrons, so the ion is positive.
        "2": "大きさは合っていますが、符号が違います。負の電荷をもつ電子を 2 個失うと、陽子が電子より多くなります。だから、イオンは正になります。",
        // EN (option D): A metal atom with two outer electrons does not gain six more. Losing two electrons takes far less energy.
        "3": "最外殻の電子が 2 個の金属の原子が、さらに 6 個受け取ることはありません。2 個失うほうが、ずっと少ないエネルギーですみます。",
      },
    },

    // ── s2-1-q002 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q002": {
      // EN: <p>Why does sodium chloride dissolve in water?</p>
      stem: "<p>塩化ナトリウムが水に溶けるのはなぜですか。</p>",
      options: [
        // EN: Polar water molecules attract the ions strongly enough to separate them from the lattice.
        "極性のある水分子がイオンを強く引きつけ、結晶格子から引き離すから。",
        // EN: Water molecules break the covalent bonds between the sodium atoms and the chlorine atoms.
        "水分子が、ナトリウム原子と塩素原子の間の共有結合を切るから。",
        // EN: Sodium chloride molecules fit into the spaces between the water molecules.
        "塩化ナトリウムの分子が、水分子の間のすき間に入りこむから。",
        // EN: Water reacts with the ions and changes them back into atoms.
        "水がイオンと反応して、イオンを原子にもどすから。",
      ],
      hints: [
        // EN: What particles is sodium chloride made of?
        "塩化ナトリウムは、どんな粒子でできていますか。",
        // EN: A water molecule has a slightly negative end and a slightly positive end. What will each end attract?
        "水分子には、わずかに負の端と、わずかに正の端があります。それぞれの端は何を引きつけますか。",
      ],
      // EN: <p>Water molecules are polar. The slightly negative oxygen end is attracted to <span class="chem">Na+</span> ions and the slightly positive hydrogen end is attracted to <span class="chem">Cl-</span> ions. Together these attractions are strong enough to pull the ions out of the lattice. The separated ions are then surrounded by water molecules.</p>
      solution: "<p>水分子には極性があります (polar)。わずかに負の酸素の側は <span class=\"chem\">Na+</span> イオンに引きつけられ、わずかに正の水素の側は <span class=\"chem\">Cl-</span> イオンに引きつけられます。これらの引力が合わさると、イオンを結晶格子 (lattice) から引き出せるほど強くなります。引き離されたイオンは、水分子に囲まれます。</p>",
      misconception: {
        // EN (option B): Sodium chloride has no covalent bonds between sodium and chlorine. It is a lattice of ions held together by electrostatic attraction.
        "1": "塩化ナトリウムには、ナトリウムと塩素の間の共有結合はありません。静電気的な引力 (electrostatic attraction) でまとまった、イオンの結晶格子です。",
        // EN (option C): There are no sodium chloride molecules. The solid is a lattice of separate <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions.
        "2": "塩化ナトリウムの分子というものはありません。固体は、ばらばらに数えられる <span class=\"chem\">Na+</span> イオンと <span class=\"chem\">Cl-</span> イオンが並んだ結晶格子です。",
        // EN (option D): The ions stay as ions in the solution. That is why the solution conducts electricity.
        "3": "イオンは、溶液の中でもイオンのままです。だから、溶液は電気を通します。",
      },
    },

    // ── s2-1-q003 · numeric · foundation · SL · Structure 2.1.1 · 1 mark
    "s2-1-q003": {
      // EN: <p>An atom has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>4</sup></span></span>. How many electrons does this atom gain when it forms its usual ion?</p>
      stem: "<p>ある原子の電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>4</sup></span></span> です。この原子がふつうのイオンになるとき、電子を何個受け取りますか。</p>",
      hints: [
        // EN: Count the electrons in the outer shell: add the 3s and 3p electrons.
        "最外殻の電子を数えましょう。3s と 3p の電子をたします。",
        // EN: A non-metal atom gains electrons until its outer s and p sublevels hold eight electrons.
        "非金属の原子は、最外殻の s 副準位と p 副準位の電子が合わせて 8 個になるまで、電子を受け取ります。",
      ],
      // EN: <div class="worked__math">outer shell: 3s<sup>2</sup> 3p<sup>4</sup> = 6 electrons</div><div class="worked__math">electrons gained = 8 − 6 = 2</div><p>The atom gains <strong>2</strong> electrons and forms an ion with a charge of 2−. (The element is sulfur and the ion is <span class="chem">S^2-</span>.)</p>
      solution: "<div class=\"worked__math\">最外殻：3s<sup>2</sup> 3p<sup>4</sup> = 電子 6 個</div><div class=\"worked__math\">受け取る電子 = 8 − 6 = 2</div><p>原子は電子を <strong>2</strong> 個受け取り、電荷 2− のイオンになります。（この元素は硫黄で、イオンは <span class=\"chem\">S^2-</span> です。）</p>",
    },

    // ── s2-1-q004 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q004": {
      // EN: <p>What is an ionic bond?</p>
      stem: "<p>イオン結合 (ionic bond) とは何ですか。</p>",
      options: [
        // EN: The transfer of electrons from a metal atom to a non-metal atom
        "金属の原子から非金属の原子への電子の移動",
        // EN: The electrostatic attraction between oppositely charged ions
        "反対の電荷をもつイオンの間の静電気的な引力",
        // EN: The electrostatic attraction between two nuclei and a shared pair of electrons
        "2 つの原子核と共有電子対の間の静電気的な引力",
        // EN: The electrostatic attraction between cations and delocalized electrons
        "陽イオンと非局在化電子の間の静電気的な引力",
      ],
      hints: [
        // EN: The question asks what the bond <em>is</em>, not how the ions were made.
        "聞かれているのは、結合が<em>何であるか</em>です。イオンがどうやってできたかではありません。",
        // EN: Which two kinds of particle are in an ionic compound, and what force acts between them?
        "イオン化合物には、どんな 2 種類の粒子がありますか。その間には、どんな力がはたらきますか。",
      ],
      // EN: <p>An ionic bond is the electrostatic attraction between oppositely charged ions (cations and anions).</p>
      solution: "<p>イオン結合は、反対の電荷をもつイオン（陽イオンと陰イオン）の間の静電気的な引力 (electrostatic attraction between oppositely charged ions) です。</p>",
      misconception: {
        // EN (option A): The transfer of electrons is how the ions form. The bond is the attraction between the ions afterwards. Markschemes do not accept “transfer of electrons” as the definition.
        "0": "電子の移動は、イオンができるしくみです。結合は、そのあとのイオンどうしの引力です。マークスキームでは、「transfer of electrons（電子の移動）」は定義として認められません。",
        // EN (option C): A shared pair of electrons describes a covalent bond. In an ionic bond no electrons are shared.
        "2": "共有電子対 (shared pair of electrons) は、共有結合の説明です。イオン結合では、電子は共有されません。",
        // EN (option D): Cations and delocalized electrons describe a metal. An ionic compound contains cations and anions.
        "3": "陽イオンと非局在化電子 (delocalized electrons) は、金属の説明です。イオン化合物に含まれるのは、陽イオンと陰イオンです。",
      },
    },

    // ── s2-1-q005 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q005": {
      // EN: <p>What is the formula of calcium chloride?</p>
      stem: "<p>塩化カルシウム (calcium chloride) の化学式はどれですか。</p>",
      options: [
        // EN: <span class="chem">CaCl</span>
        "<span class=\"chem\">CaCl</span>",
        // EN: <span class="chem">Ca2Cl</span>
        "<span class=\"chem\">Ca2Cl</span>",
        // EN: <span class="chem">CaCl2</span>
        "<span class=\"chem\">CaCl2</span>",
        // EN: <span class="chem">Ca(Cl)2</span>
        "<span class=\"chem\">Ca(Cl)2</span>",
      ],
      hints: [
        // EN: Calcium is in group 2 and chlorine is in group 17. Write the two ions with their charges.
        "カルシウムは 2 族、塩素は 17 族です。2 つのイオンを、電荷をつけて書きましょう。",
        // EN: How many 1− ions balance one 2+ ion?
        "2+ のイオン 1 個とつり合う 1− のイオンは何個ですか。",
      ],
      // EN: <p>The ions are <span class="chem">Ca^2+</span> and <span class="chem">Cl-</span>.</p><div class="worked__math">1 × (2+) = 2+ &nbsp; and &nbsp; 2 × (1−) = 2−</div><p>The formula is <span class="chem">CaCl2</span>.</p>
      solution: "<p>イオンは <span class=\"chem\">Ca^2+</span> と <span class=\"chem\">Cl-</span> です。</p><div class=\"worked__math\">1 × (2+) = 2+ &nbsp; と &nbsp; 2 × (1−) = 2−</div><p>化学式は <span class=\"chem\">CaCl2</span> です。</p>",
      misconception: {
        // EN (option A): One <span class="chem">Ca^2+</span> and one <span class="chem">Cl-</span> give a total charge of 1+. The charges must add up to zero.
        "0": "<span class=\"chem\">Ca^2+</span> 1 個と <span class=\"chem\">Cl-</span> 1 個では、電荷の合計が 1+ になります。電荷は合わせて 0 にならなければなりません。",
        // EN (option B): The numbers are the wrong way round. Two <span class="chem">Ca^2+</span> ions would give 4+ against only 1−.
        "1": "数字が逆です。<span class=\"chem\">Ca^2+</span> イオンが 2 個だと 4+ になり、それに対して負の電荷は 1− しかありません。",
        // EN (option D): The ratio is right, but brackets are only used around a polyatomic ion. Chloride is a single atom, so no brackets are needed.
        "3": "比は合っていますが、括弧は多原子イオンのまわりにだけ使います。塩化物イオンは原子 1 個なので、括弧はいりません。",
      },
    },

    // ── s2-1-q006 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q006": {
      // EN: <p>What is the name of <span class="chem">K2S</span>?</p>
      stem: "<p><span class=\"chem\">K2S</span> の名前（英語名）はどれですか。</p>",
      options: [
        // EN: potassium sulfide
        "potassium sulfide",
        // EN: potassium sulfate
        "potassium sulfate",
        // EN: dipotassium sulfide
        "dipotassium sulfide",
        // EN: potassium(II) sulfide
        "potassium(II) sulfide",
      ],
      hints: [
        // EN: The compound contains only two elements. What ending does the anion take?
        "この化合物は 2 種類の元素だけでできています。陰イオンの英語名は、どんな語尾になりますか。",
      ],
      // EN: <p>The cation is named first: potassium. The anion is made from one element, sulfur, so its name ends in -ide: sulfide. The name is <strong>potassium sulfide</strong>.</p>
      solution: "<p>陽イオンの名前を先に書きます：potassium（カリウム）。陰イオンは 1 種類の元素、硫黄 (sulfur) からできているので、名前は -ide で終わります：sulfide（硫化物イオン）。名前は <strong>potassium sulfide</strong>（硫化カリウム）です。</p>",
      misconception: {
        // EN (option B): Sulfate is the polyatomic ion <span class="chem">SO4^2-</span>, which contains oxygen. This formula has no oxygen.
        "1": "sulfate（硫酸イオン）は、酸素を含む多原子イオン <span class=\"chem\">SO4^2-</span> です。この化学式に酸素はありません。",
        // EN (option C): Names of ionic compounds do not use prefixes such as di-. The number of ions follows from the charges.
        "2": "イオン化合物の名前には、di- のような接頭語は使いません。イオンの数は電荷から決まります。",
        // EN (option D): A Roman numeral is only used for a metal that can form more than one ion. Potassium, in group 1, only forms <span class="chem">K+</span>. A numeral would also show the charge, which is 1+, not 2+.
        "3": "ローマ数字は、2 種類以上のイオンをつくれる金属にだけ使います。カリウムは 1 族なので、<span class=\"chem\">K+</span> しかつくりません。それに、ローマ数字は電荷を表すので、もし書くとしても 2+ ではなく 1+ です。",
      },
    },

    // ── s2-1-q007 · mcq · foundation · SL · Structure 2.1.2 · 1 mark
    "s2-1-q007": {
      // EN: <p>Which row gives the correct name and formula of a polyatomic ion?</p>
      stem: "<p>多原子イオンの名前と化学式が正しい組み合わせはどれですか。</p>",
      options: [
        // EN: sulfate, <span class="chem">SO3^2-</span>
        "sulfate（硫酸イオン）、<span class=\"chem\">SO3^2-</span>",
        // EN: carbonate, <span class="chem">CO3-</span>
        "carbonate（炭酸イオン）、<span class=\"chem\">CO3-</span>",
        // EN: nitrate, <span class="chem">NO3-</span>
        "nitrate（硝酸イオン）、<span class=\"chem\">NO3-</span>",
        // EN: ammonium, <span class="chem">NH3+</span>
        "ammonium（アンモニウムイオン）、<span class=\"chem\">NH3+</span>",
      ],
      hints: [
        // EN: Check two things in each row: the number of atoms and the charge.
        "それぞれの組み合わせで、2 つのことを確かめましょう。原子の数と電荷です。",
      ],
      // EN: <p>Nitrate is <span class="chem">NO3-</span>. The others should be sulfate <span class="chem">SO4^2-</span>, carbonate <span class="chem">CO3^2-</span> and ammonium <span class="chem">NH4+</span>.</p>
      solution: "<p>nitrate（硝酸イオン）は <span class=\"chem\">NO3-</span> です。ほかは、sulfate が <span class=\"chem\">SO4^2-</span>、carbonate が <span class=\"chem\">CO3^2-</span>、ammonium が <span class=\"chem\">NH4+</span> でなければなりません。</p>",
      misconception: {
        // EN (option A): Sulfate has four oxygen atoms: <span class="chem">SO4^2-</span>.
        "0": "硫酸イオンには酸素原子が 4 個あります：<span class=\"chem\">SO4^2-</span>。",
        // EN (option B): The atoms are right but the charge is wrong. Carbonate is <span class="chem">CO3^2-</span>.
        "1": "原子は合っていますが、電荷が違います。炭酸イオンは <span class=\"chem\">CO3^2-</span> です。",
        // EN (option D): <span class="chem">NH3</span> is ammonia, a neutral molecule. The ammonium ion has four hydrogen atoms: <span class="chem">NH4+</span>.
        "3": "<span class=\"chem\">NH3</span> はアンモニア (ammonia) で、電荷をもたない分子です。アンモニウムイオンには水素原子が 4 個あります：<span class=\"chem\">NH4+</span>。",
      },
    },

    // ── s2-1-q008 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q008": {
      // EN: <p>Why does solid sodium chloride <strong>not</strong> conduct electricity?</p>
      stem: "<p>固体の塩化ナトリウムが電気を通さ<strong>ない</strong>のはなぜですか。</p>",
      options: [
        // EN: It contains no charged particles.
        "電荷をもつ粒子を含んでいないから。",
        // EN: Its ions are held in fixed positions in the lattice.
        "イオンが結晶格子の決まった位置に固定されているから。",
        // EN: Its electrons are held in fixed positions in the lattice.
        "電子が結晶格子の決まった位置に固定されているから。",
        // EN: Its molecules have no overall charge.
        "分子が全体として電荷をもたないから。",
      ],
      hints: [
        // EN: To conduct, a substance needs charged particles that are free to move.
        "物質が電気を通すには、自由に動ける電荷をもつ粒子が必要です。",
        // EN: Which charged particles does sodium chloride contain? Can they move in the solid?
        "塩化ナトリウムには、電荷をもつどんな粒子がありますか。固体の中で、その粒子は動けますか。",
      ],
      // EN: <p>Solid sodium chloride contains ions, but they are held in fixed positions in the lattice by strong electrostatic attraction. They can only vibrate. Because the ions cannot move from place to place, no charge can flow.</p>
      solution: "<p>固体の塩化ナトリウムにはイオンがあります。しかし、イオンは強い静電気的な引力によって、結晶格子の決まった位置に固定されています (ions are in fixed positions)。その場で振動することしかできません。イオンが場所を移動できないので、電荷は流れません。</p>",
      misconception: {
        // EN (option A): Solid sodium chloride is made of charged particles: <span class="chem">Na+</span> and <span class="chem">Cl-</span> ions. The problem is that they cannot move.
        "0": "固体の塩化ナトリウムは、電荷をもつ粒子でできています。<span class=\"chem\">Na+</span> イオンと <span class=\"chem\">Cl-</span> イオンです。問題は、それらが動けないことです。",
        // EN (option C): In an ionic compound the charge would be carried by ions, not by electrons. The explanation must be about the ions.
        "2": "イオン化合物で電荷を運ぶとすれば、それは電子ではなくイオンです。説明はイオンについて書く必要があります。",
        // EN (option D): Sodium chloride has no molecules. It is a lattice of ions.
        "3": "塩化ナトリウムに分子はありません。イオンの結晶格子です。",
      },
    },

    // ── s2-1-q009 · mcq · foundation · SL · Structure 2.1.3 · 1 mark
    "s2-1-q009": {
      // EN: <p>Which quantity is a measure of the strength of the ionic bonding in a compound?</p>
      stem: "<p>化合物のイオン結合の強さの目安になる量はどれですか。</p>",
      options: [
        // EN: Electronegativity
        "電気陰性度 (electronegativity)",
        // EN: First ionization energy
        "第一イオン化エネルギー (first ionization energy)",
        // EN: Lattice enthalpy
        "格子エンタルピー (lattice enthalpy)",
        // EN: Relative formula mass
        "相対式量 (relative formula mass)",
      ],
      hints: [
        // EN: Which quantity is the energy needed to separate the ions of a solid lattice completely?
        "固体の結晶格子のイオンを完全に引き離すのに必要なエネルギーは、どの量ですか。",
      ],
      // EN: <p>Lattice enthalpy is the enthalpy change when one mole of a solid ionic compound is separated into gaseous ions. The stronger the electrostatic attraction between the ions, the larger the lattice enthalpy.</p>
      solution: "<p>格子エンタルピーは、固体のイオン化合物 1 モルを気体のイオンに分けるときのエンタルピー変化です。イオンの間の静電気的な引力が強いほど、格子エンタルピーは大きくなります。</p>",
      misconception: {
        // EN (option A): Electronegativity describes how strongly one atom attracts bonding electrons. It is a property of an element, not of the bonding in a compound.
        "0": "電気陰性度は、1 個の原子が結合の電子をどれだけ強く引きつけるかを表します。元素の性質であって、化合物の結合の性質ではありません。",
        // EN (option B): First ionization energy is the energy needed to remove an electron from a gaseous atom. It does not measure the attraction between ions in a lattice.
        "1": "第一イオン化エネルギーは、気体の原子から電子を 1 個取りのぞくのに必要なエネルギーです。結晶格子の中のイオンどうしの引力をはかるものではありません。",
        // EN (option D): Relative formula mass is the mass of a formula unit. It tells you nothing about how strongly the ions attract each other.
        "3": "相対式量は、組成式単位 1 つ分の質量です。イオンどうしがどれだけ強く引き合うかは、何もわかりません。",
      },
    },

    // ── s2-1-q010 · order · foundation · SL · Structure 2.1.2 · 2 marks
    "s2-1-q010": {
      // EN: <p>Put these steps in order to deduce the formula of aluminium oxide.</p>
      stem: "<p>酸化アルミニウム (aluminium oxide) の化学式を導く (deduce) ステップを、正しい順に並べましょう。</p>",
      options: [
        // EN: Write the two ions: <span class="chem">Al^3+</span> and <span class="chem">O^2-</span>.
        "2 つのイオンを書く：<span class=\"chem\">Al^3+</span> と <span class=\"chem\">O^2-</span>。",
        // EN: Find the smallest total charge that 3 and 2 both divide into: 6.
        "3 でも 2 でも割り切れる、いちばん小さい電荷の合計を見つける：6。",
        // EN: Work out the numbers of ions: two <span class="chem">Al^3+</span> give 6+ and three <span class="chem">O^2-</span> give 6−.
        "イオンの数を求める：<span class=\"chem\">Al^3+</span> 2 個で 6+、<span class=\"chem\">O^2-</span> 3 個で 6−。",
        // EN: Write the formula: <span class="chem">Al2O3</span>.
        "化学式を書く：<span class=\"chem\">Al2O3</span>。",
      ],
      hints: [
        // EN: You cannot balance the charges until you know them.
        "電荷がわからないうちは、電荷をつり合わせることはできません。",
        // EN: The formula is the last thing you write.
        "化学式は、いちばん最後に書くものです。",
      ],
      // EN: <p>Start from the ions and their charges. Find the smallest common total (6), work out how many of each ion give that total, then write those numbers as subscripts: <span class="chem">Al2O3</span>.</p>
      solution: "<p>イオンとその電荷から始めます。いちばん小さい共通の合計（6）を見つけ、その合計になるにはそれぞれのイオンが何個必要かを求めます。その数を右下の小さい数字にして書きます：<span class=\"chem\">Al2O3</span>。</p>",
    },

    // ── s2-1-q011 · mcq · exam · SL · Structure 2.1.1 · 1 mark
    "s2-1-q011": {
      // EN: <p>Which ion has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>6</sup></span></span>?</p>
      stem: "<p>電子配置が <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>6</sup></span></span> であるイオンはどれですか。</p>",
      options: [
        // EN: <span class="chem">Na+</span>
        "<span class=\"chem\">Na+</span>",
        // EN: <span class="chem">O^2-</span>
        "<span class=\"chem\">O^2-</span>",
        // EN: <span class="chem">S^2-</span>
        "<span class=\"chem\">S^2-</span>",
        // EN: <span class="chem">Mg^2+</span>
        "<span class=\"chem\">Mg^2+</span>",
      ],
      hints: [
        // EN: Add the superscripts to find how many electrons the ion has.
        "右上の数字をたして、イオンの電子の数を求めましょう。",
        // EN: For each ion, work out the number of electrons: atomic number minus the charge (with its sign).
        "それぞれのイオンについて、電子の数を求めましょう。原子番号から、符号つきの電荷を引きます。",
      ],
      // EN: <p>The configuration has 2 + 2 + 6 + 2 + 6 = 18 electrons.</p><div class="worked__math">S<sup>2−</sup>: 16 + 2 = 18 electrons</div><p>The other three ions each have 10 electrons. Only <span class="chem">S^2-</span> has 18.</p>
      solution: "<p>この電子配置には、2 + 2 + 6 + 2 + 6 = 18 個の電子があります。</p><div class=\"worked__math\">S<sup>2−</sup>: 16 + 2 = 電子 18 個</div><p>ほかの 3 つのイオンは、どれも電子が 10 個です。18 個なのは <span class=\"chem\">S^2-</span> だけです。</p>",
      misconception: {
        // EN (option A): A sodium atom has 11 electrons and loses 1. <span class="chem">Na+</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "0": "ナトリウム原子には電子が 11 個あり、1 個失います。<span class=\"chem\">Na+</span> の電子は 10 個です：<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
        // EN (option B): An oxygen atom has 8 electrons and gains 2. <span class="chem">O^2-</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "1": "酸素原子には電子が 8 個あり、2 個受け取ります。<span class=\"chem\">O^2-</span> の電子は 10 個です：<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
        // EN (option D): A magnesium atom has 12 electrons and loses 2. <span class="chem">Mg^2+</span> has 10 electrons: <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "3": "マグネシウム原子には電子が 12 個あり、2 個失います。<span class=\"chem\">Mg^2+</span> の電子は 10 個です：<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
      },
    },

    // ── s2-1-q012 · mcq · exam · SL · Structure 2.1.1 · 1 mark
    "s2-1-q012": {
      // EN: <p>Iron forms two chlorides, <span class="chem">FeCl2</span> and <span class="chem">FeCl3</span>. Which statement explains this?</p>
      stem: "<p>鉄には <span class=\"chem\">FeCl2</span> と <span class=\"chem\">FeCl3</span> の 2 種類の塩化物があります。このことを説明している文はどれですか。</p>",
      options: [
        // EN: Chlorine can form ions with two different charges.
        "塩素は、電荷の違う 2 種類のイオンをつくれる。",
        // EN: Iron is a transition element and can form ions with different charges.
        "鉄は遷移元素で、電荷の違うイオンをつくれる。",
        // EN: Iron has isotopes with different numbers of neutrons.
        "鉄には、中性子の数が違う同位体がある。",
        // EN: The charge of an iron ion is equal to its group number.
        "鉄イオンの電荷は、族の番号と等しい。",
      ],
      hints: [
        // EN: The chloride ion is always <span class="chem">Cl-</span>. What must the charge on iron be in each compound?
        "塩化物イオンはいつも <span class=\"chem\">Cl-</span> です。それぞれの化合物で、鉄の電荷はいくつのはずですか。",
      ],
      // EN: <p>Each chloride ion is 1−. In <span class="chem">FeCl2</span> the iron ion is <span class="chem">Fe^2+</span> and in <span class="chem">FeCl3</span> it is <span class="chem">Fe^3+</span>. Iron is a transition element, and a transition element can form ions with different charges. The compounds are iron(II) chloride and iron(III) chloride.</p>
      solution: "<p>塩化物イオンは 1 個あたり 1− です。<span class=\"chem\">FeCl2</span> の鉄イオンは <span class=\"chem\">Fe^2+</span>、<span class=\"chem\">FeCl3</span> の鉄イオンは <span class=\"chem\">Fe^3+</span> です。鉄は遷移元素 (transition element) で、遷移元素は電荷の違うイオンをつくれます。この 2 つの化合物は、塩化鉄(II) (iron(II) chloride) と塩化鉄(III) (iron(III) chloride) です。</p>",
      misconception: {
        // EN (option A): Chlorine, in group 17, forms only the chloride ion, <span class="chem">Cl-</span>. The difference is in the iron ion.
        "0": "塩素は 17 族で、塩化物イオン <span class=\"chem\">Cl-</span> しかつくりません。違うのは鉄イオンのほうです。",
        // EN (option C): Isotopes differ in neutrons, which does not change the charge of an ion or the formula of a compound.
        "2": "同位体は中性子の数が違うだけです。イオンの電荷も、化合物の化学式も変わりません。",
        // EN (option D): Iron is in group 8, and its common ions are 2+ and 3+. The group number does not give the charge of a transition element ion.
        "3": "鉄は 8 族で、よく見られるイオンは 2+ と 3+ です。遷移元素のイオンの電荷は、族の番号からはわかりません。",
      },
    },

    // ── s2-1-q013 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q013": {
      // EN: <p>What is the formula of ammonium sulfate?</p>
      stem: "<p>硫酸アンモニウム (ammonium sulfate) の化学式はどれですか。</p>",
      options: [
        // EN: <span class="chem">NH4SO4</span>
        "<span class=\"chem\">NH4SO4</span>",
        // EN: <span class="chem">(NH4)2SO4</span>
        "<span class=\"chem\">(NH4)2SO4</span>",
        // EN: <span class="chem">NH4(SO4)2</span>
        "<span class=\"chem\">NH4(SO4)2</span>",
        // EN: <span class="chem">(NH4)2S</span>
        "<span class=\"chem\">(NH4)2S</span>",
      ],
      hints: [
        // EN: Write the two ions with their charges: ammonium and sulfate.
        "2 つのイオンを、電荷をつけて書きましょう。ammonium（アンモニウムイオン）と sulfate（硫酸イオン）です。",
        // EN: How many 1+ ions balance one 2− ion? Do you need brackets?
        "2− のイオン 1 個とつり合う 1+ のイオンは何個ですか。括弧は必要ですか。",
      ],
      // EN: <p>The ions are <span class="chem">NH4+</span> and <span class="chem">SO4^2-</span>.</p><div class="worked__math">2 × (1+) = 2+ &nbsp; and &nbsp; 1 × (2−) = 2−</div><p>Two ammonium ions need brackets: <span class="chem">(NH4)2SO4</span>.</p>
      solution: "<p>イオンは <span class=\"chem\">NH4+</span> と <span class=\"chem\">SO4^2-</span> です。</p><div class=\"worked__math\">2 × (1+) = 2+ &nbsp; と &nbsp; 1 × (2−) = 2−</div><p>アンモニウムイオンは 2 個なので、括弧が必要です：<span class=\"chem\">(NH4)2SO4</span>。</p>",
      misconception: {
        // EN (option A): One <span class="chem">NH4+</span> (1+) does not balance one <span class="chem">SO4^2-</span> (2−). The total charge would be 1−.
        "0": "<span class=\"chem\">NH4+</span>（1+）1 個では、<span class=\"chem\">SO4^2-</span>（2−）1 個とつり合いません。電荷の合計が 1− になってしまいます。",
        // EN (option C): The numbers are the wrong way round. One 1+ ion and two 2− ions give a total charge of 3−.
        "2": "数字が逆です。1+ のイオン 1 個と 2− のイオン 2 個では、電荷の合計が 3− になります。",
        // EN (option D): This is ammonium sulf<em>ide</em>. Sulfate is the polyatomic ion <span class="chem">SO4^2-</span>.
        "3": "これは ammonium sulf<em>ide</em>（硫化アンモニウム）です。sulfate（硫酸イオン）は多原子イオン <span class=\"chem\">SO4^2-</span> です。",
      },
    },

    // ── s2-1-q014 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q014": {
      // EN: <p>What is the formula of iron(III) hydroxide?</p>
      stem: "<p>水酸化鉄(III) (iron(III) hydroxide) の化学式はどれですか。</p>",
      options: [
        // EN: <span class="chem">Fe3OH</span>
        "<span class=\"chem\">Fe3OH</span>",
        // EN: <span class="chem">FeOH3</span>
        "<span class=\"chem\">FeOH3</span>",
        // EN: <span class="chem">Fe(OH)2</span>
        "<span class=\"chem\">Fe(OH)2</span>",
        // EN: <span class="chem">Fe(OH)3</span>
        "<span class=\"chem\">Fe(OH)3</span>",
      ],
      hints: [
        // EN: The Roman numeral gives the charge on the iron ion.
        "ローマ数字は、鉄イオンの電荷を表します。",
        // EN: Hydroxide is <span class="chem">OH-</span>. How many are needed to balance 3+?
        "hydroxide（水酸化物イオン）は <span class=\"chem\">OH-</span> です。3+ とつり合うには何個必要ですか。",
      ],
      // EN: <p>The ions are <span class="chem">Fe^3+</span> and <span class="chem">OH-</span>.</p><div class="worked__math">1 × (3+) = 3+ &nbsp; and &nbsp; 3 × (1−) = 3−</div><p>Three hydroxide ions need brackets: <span class="chem">Fe(OH)3</span>.</p>
      solution: "<p>イオンは <span class=\"chem\">Fe^3+</span> と <span class=\"chem\">OH-</span> です。</p><div class=\"worked__math\">1 × (3+) = 3+ &nbsp; と &nbsp; 3 × (1−) = 3−</div><p>水酸化物イオンは 3 個なので、括弧が必要です：<span class=\"chem\">Fe(OH)3</span>。</p>",
      misconception: {
        // EN (option A): The Roman numeral III is the charge on the iron ion, 3+. It is not the number of iron ions.
        "0": "ローマ数字の III は、鉄イオンの電荷 3+ を表します。鉄イオンの数ではありません。",
        // EN (option B): Without brackets, the 3 applies only to hydrogen. Three hydroxide ions must be written <span class="chem">(OH)3</span>.
        "1": "括弧がないと、3 は水素だけにかかります。水酸化物イオン 3 個は <span class=\"chem\">(OH)3</span> と書かなければなりません。",
        // EN (option C): This is iron(II) hydroxide. Two <span class="chem">OH-</span> ions only balance a 2+ ion.
        "2": "これは水酸化鉄(II) (iron(II) hydroxide) です。<span class=\"chem\">OH-</span> イオン 2 個がつり合うのは、2+ のイオンです。",
      },
    },

    // ── s2-1-q015 · mcq · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q015": {
      // EN: <p>What is the name of <span class="chem">CuCO3</span>?</p>
      stem: "<p><span class=\"chem\">CuCO3</span> の名前（英語名）はどれですか。</p>",
      options: [
        // EN: copper carbonate
        "copper carbonate",
        // EN: copper(I) carbonate
        "copper(I) carbonate",
        // EN: copper(II) carbonate
        "copper(II) carbonate",
        // EN: copper(II) carbide
        "copper(II) carbide",
      ],
      hints: [
        // EN: What is the charge on a carbonate ion?
        "炭酸イオン (carbonate ion) の電荷はいくつですか。",
        // EN: The compound is neutral and contains one copper ion. What must its charge be?
        "この化合物は電気的に中性で、銅イオンを 1 個含んでいます。その電荷はいくつのはずですか。",
      ],
      // EN: <p>Carbonate is <span class="chem">CO3^2-</span>. One copper ion balances one carbonate ion, so the copper ion is <span class="chem">Cu^2+</span>. Copper can also form <span class="chem">Cu+</span>, so the name needs the Roman numeral: <strong>copper(II) carbonate</strong>.</p>
      solution: "<p>carbonate（炭酸イオン）は <span class=\"chem\">CO3^2-</span> です。銅イオン 1 個が炭酸イオン 1 個とつり合うので、銅イオンは <span class=\"chem\">Cu^2+</span> です。銅は <span class=\"chem\">Cu+</span> もつくれるので、名前にはローマ数字が必要です：<strong>copper(II) carbonate</strong>（炭酸銅(II)）。</p>",
      misconception: {
        // EN (option A): Copper is a transition element that can form more than one ion, so the name needs a Roman numeral to show the charge.
        "0": "銅は遷移元素で、2 種類以上のイオンをつくれます。だから、名前には電荷を表すローマ数字が必要です。",
        // EN (option B): Carbonate is 2−. One copper ion balances it, so the copper ion must be 2+, not 1+. Copper(I) carbonate would be <span class="chem">Cu2CO3</span>.
        "1": "炭酸イオンは 2− です。銅イオン 1 個でつり合っているので、銅イオンは 1+ ではなく 2+ のはずです。copper(I) carbonate なら、化学式は <span class=\"chem\">Cu2CO3</span> になります。",
        // EN (option D): The metal is right, but <span class="chem">CO3^2-</span> is the polyatomic ion carbonate. An -ide ending is for an anion of one element.
        "3": "金属は合っていますが、<span class=\"chem\">CO3^2-</span> は多原子イオンの carbonate（炭酸イオン）です。-ide の語尾は、1 種類の元素からできた陰イオンに使います。",
      },
    },

    // ── s2-1-q016 · numeric · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q016": {
      // EN: <p>Deduce the formula of calcium phosphate. How many <strong>ions</strong>, in total, are in one formula unit?</p>
      stem: "<p>リン酸カルシウム (calcium phosphate) の化学式を導きなさい (deduce)。組成式単位 (formula unit) 1 つの中に、<strong>イオン</strong>は全部で何個ありますか。</p>",
      hints: [
        // EN: The ions are <span class="chem">Ca^2+</span> and <span class="chem">PO4^3-</span>. Find the smallest total charge that 2 and 3 both divide into.
        "イオンは <span class=\"chem\">Ca^2+</span> と <span class=\"chem\">PO4^3-</span> です。2 でも 3 でも割り切れる、いちばん小さい電荷の合計を見つけましょう。",
        // EN: A phosphate ion counts as one ion, although it contains five atoms.
        "リン酸イオンは、原子を 5 個含んでいても、イオンとしては 1 個と数えます。",
      ],
      // EN: <div class="worked__math">smallest common total charge = 6</div><div class="worked__math">6 ÷ 2 = 3 Ca<sup>2+</sup> ions &nbsp; and &nbsp; 6 ÷ 3 = 2 PO<sub>4</sub><sup>3−</sup> ions</div><p>The formula is <span class="chem">Ca3(PO4)2</span>. One formula unit contains 3 + 2 = <strong>5</strong> ions.</p>
      solution: "<div class=\"worked__math\">いちばん小さい共通の電荷の合計 = 6</div><div class=\"worked__math\">6 ÷ 2 = 3 個の Ca<sup>2+</sup> イオン &nbsp; と &nbsp; 6 ÷ 3 = 2 個の PO<sub>4</sub><sup>3−</sup> イオン</div><p>化学式は <span class=\"chem\">Ca3(PO4)2</span> です。組成式単位 1 つには、3 + 2 = <strong>5</strong> 個のイオンがあります。</p>",
    },

    // ── s2-1-q017 · short · exam · SL · Structure 2.1.2 · 2 marks
    "s2-1-q017": {
      // EN: <p>Sodium hydrogencarbonate, <span class="chem">NaHCO3</span>, contains both ionic bonds and covalent bonds. State where each type of bond is found in this compound.</p>
      stem: "<p>炭酸水素ナトリウム (sodium hydrogencarbonate) <span class=\"chem\">NaHCO3</span> には、イオン結合と共有結合の両方があります。この化合物の中で、それぞれの結合がどこにあるかを述べなさい (state)。</p>",
      hints: [
        // EN: Split the formula into its two ions first.
        "まず、化学式を 2 つのイオンに分けましょう。",
        // EN: A polyatomic ion is a group of atoms. What kind of bond holds the atoms in the group together?
        "多原子イオンは原子の集まりです。その集まりの中で原子をつないでいるのは、どんな結合ですか。",
      ],
      // EN: <p>The ionic bonding is between the sodium ions, <span class="chem">Na+</span>, and the hydrogencarbonate ions, <span class="chem">HCO3-</span>. The covalent bonds are between the atoms inside each hydrogencarbonate ion (between carbon and oxygen, and between oxygen and hydrogen).</p>
      answer: "<p>イオン結合は、ナトリウムイオン <span class=\"chem\">Na+</span> と炭酸水素イオン <span class=\"chem\">HCO3-</span> の間にあります。共有結合は、それぞれの炭酸水素イオンの中の原子どうしの間（炭素と酸素の間、酸素と水素の間）にあります。</p>",
      markscheme: [
        // EN: Ionic: between the sodium ion / Na⁺ and the hydrogencarbonate ion / HCO₃⁻. Accept: between the cation and the (polyatomic) anion.
        "イオン結合：ナトリウムイオン / Na⁺ と炭酸水素イオン / HCO₃⁻ の間。次も可：陽イオンと（多原子の）陰イオンの間。",
        // EN: Covalent: between the atoms within the hydrogencarbonate ion. Accept: between C and O / between O and H.
        "共有結合：炭酸水素イオンの中の原子どうしの間。次も可：C と O の間 / O と H の間。",
      ],
    },

    // ── s2-1-q018 · short · exam · SL · Structure 2.1.2 · 1 mark
    "s2-1-q018": {
      // EN: <p>State what is meant by the term <em>ionic bond</em>.</p>
      stem: "<p><em>イオン結合</em> (ionic bond) という用語の意味を述べなさい (state)。</p>",
      hints: [
        // EN: Name the force, and name the particles it acts between.
        "力の名前を書きましょう。その力がどの粒子の間にはたらくかも書きましょう。",
      ],
      // EN: <p>An ionic bond is the electrostatic attraction between oppositely charged ions.</p>
      answer: "<p>イオン結合は、反対の電荷をもつイオンの間の静電気的な引力です。</p>",
      markscheme: [
        // EN: Electrostatic attraction between oppositely charged ions. Accept: between cations and anions / between positive and negative ions. Do not accept: “transfer of electrons” alone, or an answer without “electrostatic”.
        "反対の電荷をもつイオンの間の静電気的な引力。次も可：陽イオンと陰イオンの間 / 正のイオンと負のイオンの間。不可：「電子の移動」だけの答え、「electrostatic（静電気的な）」という語がない答え。",
      ],
    },

    // ── s2-1-q019 · multi · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q019": {
      // EN: <p>Which statements about solid sodium chloride are correct? Select all that apply.</p>
      stem: "<p>固体の塩化ナトリウムについて、正しい文はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: Each sodium ion is surrounded by chloride ions.
        "ナトリウムイオンは、それぞれ塩化物イオンに囲まれている。",
        // EN: The solid is made of separate NaCl molecules.
        "この固体は、ばらばらの NaCl 分子でできている。",
        // EN: The formula NaCl gives the ratio of the ions in the lattice.
        "化学式 NaCl は、結晶格子の中のイオンの比を表す。",
        // EN: The electrostatic attraction between the ions acts in all directions.
        "イオンの間の静電気的な引力は、あらゆる方向にはたらく。",
        // EN: Each sodium ion is bonded to only one chloride ion.
        "ナトリウムイオンは、それぞれ 1 個の塩化物イオンとだけ結合している。",
        // EN: The lattice contains delocalized electrons.
        "結晶格子には非局在化電子が含まれる。",
      ],
      hints: [
        // EN: Picture the lattice: what are the nearest neighbours of each ion?
        "結晶格子を思いうかべましょう。それぞれのイオンのいちばん近くには、何がありますか。",
        // EN: Does the formula of an ionic compound describe a molecule or a ratio?
        "イオン化合物の化学式が表すのは、分子ですか、比ですか。",
      ],
      // EN: <p>Sodium chloride is a three-dimensional lattice. Each ion is surrounded by ions of the opposite charge, and the electrostatic attraction acts in all directions. There are no molecules, so the formula NaCl is an empirical formula: it gives the ratio of the ions, 1 : 1.</p>
      solution: "<p>塩化ナトリウムは三次元の結晶格子 (lattice) です。どのイオンも反対の電荷をもつイオンに囲まれていて、静電気的な引力 (electrostatic attraction) はあらゆる方向にはたらきます。分子はないので、化学式 NaCl は組成式（実験式）(empirical formula) です。イオンの比 1 : 1 を表しています。</p>",
      misconception: {
        // EN (option B): There are no molecules in an ionic lattice. Every ion attracts all the oppositely charged ions around it.
        "1": "イオン結晶の結晶格子に分子はありません。どのイオンも、まわりにある反対の電荷のイオンすべてを引きつけます。",
        // EN (option E): The attraction is not between one pair. A sodium ion attracts every chloride ion near it, in all directions.
        "4": "引力は、1 組のペアの間だけにはたらくのではありません。ナトリウムイオンは、近くにあるすべての塩化物イオンを、あらゆる方向に引きつけます。",
        // EN (option F): Delocalized electrons are found in metals. In sodium chloride all the electrons belong to individual ions.
        "5": "非局在化電子 (delocalized electrons) があるのは金属です。塩化ナトリウムでは、電子はすべて、それぞれのイオンのものです。",
      },
    },

    // ── s2-1-q020 · mcq · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q020": {
      // EN: <p>The table gives some properties of four substances, W, X, Y and Z. The data are illustrative. Which substance is most likely to be an ionic compound?</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Melting point / °C</th><th scope="col">Conducts when solid?</th><th scope="col">Conducts when molten?</th></tr></thead><tbody><tr><th scope="row">W</th><td class="num">1085</td><td>yes</td><td>yes</td></tr><tr><th scope="row">X</th><td class="num">770</td><td>no</td><td>yes</td></tr><tr><th scope="row">Y</th><td class="num">1700</td><td>no</td><td>no</td></tr><tr><th scope="row">Z</th><td class="num">80</td><td>no</td><td>no</td></tr></tbody></table></div>
      stem: "<p>表は、4 つの物質 W、X、Y、Z の性質をまとめたものです。データは説明のための例です。イオン化合物である可能性がいちばん高い物質はどれですか。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">物質</th><th scope=\"col\" class=\"num\">融点 / °C</th><th scope=\"col\">固体で電気を通す？</th><th scope=\"col\">融解すると電気を通す？</th></tr></thead><tbody><tr><th scope=\"row\">W</th><td class=\"num\">1085</td><td>はい</td><td>はい</td></tr><tr><th scope=\"row\">X</th><td class=\"num\">770</td><td>いいえ</td><td>はい</td></tr><tr><th scope=\"row\">Y</th><td class=\"num\">1700</td><td>いいえ</td><td>いいえ</td></tr><tr><th scope=\"row\">Z</th><td class=\"num\">80</td><td>いいえ</td><td>いいえ</td></tr></tbody></table></div>",
      options: [
        // EN: W
        "W",
        // EN: X
        "X",
        // EN: Y
        "Y",
        // EN: Z
        "Z",
      ],
      hints: [
        // EN: An ionic compound contains ions. When can those ions move?
        "イオン化合物にはイオンがあります。そのイオンが動けるのは、どんなときですか。",
        // EN: Look for a high melting point together with conduction only in the molten state.
        "融点が高く、しかも融解した状態でだけ電気を通すものを探しましょう。",
      ],
      // EN: <p>An ionic compound has a high melting point, because of the strong electrostatic attraction in the lattice. It does not conduct when solid (ions in fixed positions) but does conduct when molten (ions free to move). Only <strong>X</strong> fits all three.</p>
      solution: "<p>イオン化合物は、結晶格子の中の強い静電気的な引力のために、融点が高くなります。固体では電気を通しません（イオンが決まった位置に固定されている）。融解すると電気を通します（イオンが自由に動ける）。この 3 つすべてに当てはまるのは <strong>X</strong> だけです。</p>",
      misconception: {
        // EN (option A): W conducts when solid. In a solid ionic compound the ions are in fixed positions, so it does not conduct. W behaves like a metal.
        "0": "W は固体で電気を通します。固体のイオン化合物では、イオンが決まった位置に固定されているので、電気を通しません。W は金属のようにふるまっています。",
        // EN (option C): Y has a high melting point, but it does not conduct when molten. A molten ionic compound has ions that are free to move, so it must conduct.
        "2": "Y は融点が高いですが、融解しても電気を通しません。融解したイオン化合物には自由に動けるイオンがあるので、必ず電気を通します。",
        // EN (option D): Z melts at a low temperature and never conducts. An ionic lattice needs a lot of energy to break down, and its molten form conducts.
        "3": "Z は低い温度で融解し、どの状態でも電気を通しません。イオン結晶の結晶格子をくずすには大きなエネルギーが必要です。また、融解したイオン化合物は電気を通します。",
      },
    },

    // ── s2-1-q021 · order · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q021": {
      // EN: <p>Arrange these sodium halides in order of increasing lattice enthalpy, <strong>smallest first</strong>.</p>
      stem: "<p>次のハロゲン化ナトリウムを、格子エンタルピー (lattice enthalpy) が小さいものから大きいものへ、順に並べましょう。<strong>いちばん小さいものが先</strong>です。</p>",
      options: [
        // EN: <span class="chem">NaI</span>
        "<span class=\"chem\">NaI</span>",
        // EN: <span class="chem">NaBr</span>
        "<span class=\"chem\">NaBr</span>",
        // EN: <span class="chem">NaCl</span>
        "<span class=\"chem\">NaCl</span>",
        // EN: <span class="chem">NaF</span>
        "<span class=\"chem\">NaF</span>",
      ],
      hints: [
        // EN: The cation and all the charges are the same. What is different?
        "陽イオンも、電荷もすべて同じです。違うのは何ですか。",
        // EN: Ionic radius increases down group 17. Smaller ions get closer together.
        "イオン半径は、17 族を上から下へ進むと大きくなります。イオンが小さいほど、たがいに近づけます。",
      ],
      // EN: <p>All four contain <span class="chem">Na+</span> and a 1− ion, so only the ionic radius of the halide ion changes. Data booklet radii: <span class="chem">I-</span> 220 pm, <span class="chem">Br-</span> 196 pm, <span class="chem">Cl-</span> 181 pm, <span class="chem">F-</span> 133 pm. The smaller the anion, the closer the ions and the stronger the electrostatic attraction.</p><div class="worked__math">NaI 705 &lt; NaBr 754 &lt; NaCl 790 &lt; NaF 930 &nbsp; (kJ mol<sup>−1</sup>)</div>
      solution: "<p>4 つとも <span class=\"chem\">Na+</span> と 1− のイオンを含むので、変わるのはハロゲン化物イオンのイオン半径 (ionic radius) だけです。データブックレットの半径：<span class=\"chem\">I-</span> 220 pm、<span class=\"chem\">Br-</span> 196 pm、<span class=\"chem\">Cl-</span> 181 pm、<span class=\"chem\">F-</span> 133 pm。陰イオンが小さいほど、イオンどうしが近くなり、静電気的な引力 (electrostatic attraction) が強くなります。</p><div class=\"worked__math\">NaI 705 &lt; NaBr 754 &lt; NaCl 790 &lt; NaF 930 &nbsp; (kJ mol<sup>−1</sup>)</div>",
    },

    // ── s2-1-q022 · short · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q022": {
      // EN: <p>The lattice enthalpy of magnesium oxide is 3791 <span class="unit">kJ mol-1</span>. The lattice enthalpy of barium oxide is 3054 <span class="unit">kJ mol-1</span>. Explain why the lattice enthalpy of magnesium oxide is larger.</p>
      stem: "<p>酸化マグネシウムの格子エンタルピーは 3791 <span class=\"unit\">kJ mol-1</span> です。酸化バリウムの格子エンタルピーは 3054 <span class=\"unit\">kJ mol-1</span> です。酸化マグネシウムの格子エンタルピーのほうが大きい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Compare the two cations. Is it the charge or the ionic radius that is different?
        "2 つの陽イオンをくらべましょう。違うのは電荷ですか、イオン半径ですか。",
        // EN: Finish by naming the force that is stronger.
        "最後に、強くなる力の名前を書きましょう。",
      ],
      // EN: <p>Both compounds contain a 2+ ion and the oxide ion, so the charges are the same. The <span class="chem">Mg^2+</span> ion has a smaller ionic radius than the <span class="chem">Ba^2+</span> ion (72 pm against 135 pm), so the ions are closer together in magnesium oxide. The electrostatic attraction between the oppositely charged ions is therefore stronger.</p>
      answer: "<p>どちらの化合物も 2+ のイオンと酸化物イオンを含むので、電荷は同じです。<span class=\"chem\">Mg^2+</span> イオンのイオン半径は、<span class=\"chem\">Ba^2+</span> イオンより小さくなっています（135 pm に対して 72 pm）。そのため、酸化マグネシウムのほうがイオンどうしが近くなります。だから、反対の電荷をもつイオンの間の静電気的な引力がより強くなります。</p>",
      markscheme: [
        // EN: Mg²⁺ has a smaller ionic radius than Ba²⁺. Accept: the ions are closer together / smaller distance between the ions in MgO. Do not accept: “atomic radius” or “magnesium is smaller” without reference to ions.
        "Mg²⁺ のイオン半径は Ba²⁺ より小さい。次も可：MgO のほうがイオンどうしが近い / イオンの間の距離が短い。不可：「原子半径 (atomic radius)」、またはイオンにふれずに「マグネシウムのほうが小さい」とだけ書いた答え。",
        // EN: Stronger electrostatic attraction between the (oppositely charged) ions in MgO. Accept: stronger attraction between Mg²⁺ and O²⁻.
        "MgO のほうが、（反対の電荷をもつ）イオンの間の静電気的な引力が強い。次も可：Mg²⁺ と O²⁻ の間の引力のほうが強い。",
      ],
    },

    // ── s2-1-q023 · short · exam · SL · Structure 2.1.3 · 2 marks
    "s2-1-q023": {
      // EN: <p>Explain why sodium chloride conducts electricity when it is molten but not when it is solid.</p>
      stem: "<p>塩化ナトリウムが、融解した状態では電気を通すのに、固体では電気を通さない理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Which charged particles does sodium chloride contain?
        "塩化ナトリウムには、電荷をもつどんな粒子がありますか。",
        // EN: Write one sentence about the solid and one about the liquid.
        "固体について 1 文、液体について 1 文を書きましょう。",
      ],
      // EN: <p>In the solid, the ions are held in fixed positions in the lattice and cannot move. When the solid melts, the lattice breaks down and the ions are free to move, so they can carry charge.</p>
      answer: "<p>固体では、イオンが結晶格子の決まった位置に固定されていて、動けません。固体が融解すると、結晶格子がくずれてイオンが自由に動けるようになります。そのため、イオンが電荷を運べます。</p>",
      markscheme: [
        // EN: Solid: ions are in fixed positions / ions cannot move (through the lattice).
        "固体：イオンが決まった位置に固定されている / イオンが（結晶格子の中を）動けない。",
        // EN: Molten: ions are free to move / mobile ions (carry the charge). Do not accept: electrons are free to move.
        "融解した状態：イオンが自由に動ける / 動けるイオンが（電荷を運ぶ）。不可：電子が自由に動ける。",
      ],
    },

    // ── s2-1-q024 · multi · exam · SL · Structure 2.1.3 · 1 mark
    "s2-1-q024": {
      // EN: <p>Which properties are typical of an ionic compound such as potassium bromide? Select all that apply.</p>
      stem: "<p>臭化カリウム (potassium bromide) のようなイオン化合物に、ふつう見られる性質はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: High melting point
        "融点が高い",
        // EN: Low volatility
        "揮発性が低い",
        // EN: Conducts electricity when solid
        "固体で電気を通す",
        // EN: Conducts electricity when molten
        "融解すると電気を通す",
        // EN: Dissolves well in non-polar solvents such as hexane
        "ヘキサンのような無極性の溶媒によく溶ける",
        // EN: Brittle
        "もろい",
      ],
      hints: [
        // EN: Start from the structure: a lattice of ions held by strong electrostatic attraction.
        "構造から考え始めましょう。強い静電気的な引力でまとまった、イオンの結晶格子です。",
        // EN: For each property ask: does it need a lot of energy? Can the ions move?
        "それぞれの性質について考えましょう。大きなエネルギーが必要ですか。イオンは動けますか。",
      ],
      // EN: <p>The strong electrostatic attraction between the ions gives a high melting point and a low volatility. The solid does not conduct because its ions are in fixed positions, but the molten compound conducts because its ions are free to move. The solid is brittle: a force can bring ions of the same charge next to each other, and they repel. It does not dissolve in non-polar solvents.</p>
      solution: "<p>イオンの間の静電気的な引力が強いので、融点が高く、揮発性 (volatility) が低くなります。固体は、イオンが決まった位置に固定されているので電気を通しません。融解した化合物は、イオンが自由に動けるので電気を通します。固体はもろい (brittle) 性質をもちます。力が加わると、同じ電荷のイオンが隣り合い、反発するからです。無極性の溶媒には溶けません。</p>",
      misconception: {
        // EN (option C): In the solid the ions are held in fixed positions in the lattice, so they cannot carry charge.
        "2": "固体では、イオンが結晶格子の決まった位置に固定されています。だから、電荷を運べません。",
        // EN (option E): Non-polar molecules do not attract ions strongly enough to pull them out of the lattice. Ionic compounds are more likely to dissolve in a polar solvent such as water.
        "4": "無極性分子は、イオンを結晶格子から引き出せるほど強くは引きつけません。イオン化合物は、水のような極性のある溶媒のほうに溶けやすいといえます。",
      },
    },

    // ── s2-1-q025 · order · challenge · SL · Structure 2.1.3 · 2 marks
    "s2-1-q025": {
      // EN: <p>Use the charges of the ions, and the ionic radii in section 10 of the data booklet, to arrange these compounds in order of increasing lattice enthalpy, <strong>smallest first</strong>.</p>
      stem: "<p>イオンの電荷と、データブックレットのセクション 10 にあるイオン半径を使って、次の化合物を格子エンタルピーが小さいものから大きいものへ、順に並べましょう。<strong>いちばん小さいものが先</strong>です。</p>",
      options: [
        // EN: <span class="chem">KCl</span>
        "<span class=\"chem\">KCl</span>",
        // EN: <span class="chem">NaF</span>
        "<span class=\"chem\">NaF</span>",
        // EN: <span class="chem">CaCl2</span>
        "<span class=\"chem\">CaCl2</span>",
        // EN: <span class="chem">BaO</span>
        "<span class=\"chem\">BaO</span>",
        // EN: <span class="chem">MgO</span>
        "<span class=\"chem\">MgO</span>",
      ],
      hints: [
        // EN: Sort by ion charge first. Which compounds contain only 1+ and 1− ions? Which contain a 2+ ion and a 2− ion?
        "まず、イオンの電荷で分けましょう。1+ と 1− のイオンだけを含む化合物はどれですか。2+ のイオンと 2− のイオンを含む化合物はどれですか。",
        // EN: Within a group with the same charges, the compound with the smaller ions has the larger lattice enthalpy.
        "電荷が同じグループの中では、イオンが小さい化合物のほうが、格子エンタルピーが大きくなります。",
      ],
      // EN: <p><strong>Charges first.</strong> KCl and NaF contain 1+ and 1− ions. <span class="chem">CaCl2</span> contains a 2+ ion and 1− ions. BaO and MgO contain 2+ and 2− ions. Higher charges give stronger electrostatic attraction.</p><p><strong>Then ionic radius.</strong> <span class="chem">Na+</span> (102 pm) and <span class="chem">F-</span> (133 pm) are smaller than <span class="chem">K+</span> (138 pm) and <span class="chem">Cl-</span> (181 pm), so NaF is above KCl. <span class="chem">Mg^2+</span> (72 pm) is smaller than <span class="chem">Ba^2+</span> (135 pm), so MgO is above BaO.</p><div class="worked__math">KCl 720 &lt; NaF 930 &lt; CaCl<sub>2</sub> 2271 &lt; BaO 3054 &lt; MgO 3791 &nbsp; (kJ mol<sup>−1</sup>)</div>
      solution: "<p><strong>まず電荷。</strong>KCl と NaF は 1+ と 1− のイオンを含みます。<span class=\"chem\">CaCl2</span> は 2+ のイオンと 1− のイオンを含みます。BaO と MgO は 2+ と 2− のイオンを含みます。電荷が大きいほど、静電気的な引力は強くなります。</p><p><strong>次にイオン半径。</strong><span class=\"chem\">Na+</span>（102 pm）と <span class=\"chem\">F-</span>（133 pm）は、<span class=\"chem\">K+</span>（138 pm）と <span class=\"chem\">Cl-</span>（181 pm）より小さいので、NaF は KCl より上になります。<span class=\"chem\">Mg^2+</span>（72 pm）は <span class=\"chem\">Ba^2+</span>（135 pm）より小さいので、MgO は BaO より上になります。</p><div class=\"worked__math\">KCl 720 &lt; NaF 930 &lt; CaCl<sub>2</sub> 2271 &lt; BaO 3054 &lt; MgO 3791 &nbsp; (kJ mol<sup>−1</sup>)</div>",
    },

    // ── s2-1-q026 · mcq · challenge · SL · Structure 2.1.2 · 1 mark
    "s2-1-q026": {
      // EN: <p>Element X has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span>. Element Y has the electron configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>. X and Y form an ionic compound. Which row is correct?</p>
      stem: "<p>元素 X の電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span> です。元素 Y の電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span> です。X と Y はイオン化合物をつくります。正しい組み合わせはどれですか。</p>",
      options: [
        // EN: Formula <span class="chem">X3Y2</span>. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "化学式は <span class=\"chem\">X3Y2</span>。どちらのイオンも電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
        // EN: Formula <span class="chem">X2Y3</span>. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "化学式は <span class=\"chem\">X2Y3</span>。どちらのイオンも電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
        // EN: Formula <span class="chem">X2Y3</span>. The ions have the configurations <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span> <span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span> and <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>.
        "化学式は <span class=\"chem\">X2Y3</span>。イオンの電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span> <span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span> と <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span>。",
        // EN: Formula XY. Both ions have the configuration <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.
        "化学式は XY。どちらのイオンも電子配置は <span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。",
      ],
      hints: [
        // EN: How many outer electrons does each atom have? Which one is the metal?
        "それぞれの原子の最外殻には、電子が何個ありますか。金属はどちらですか。",
        // EN: X loses 3 electrons and Y gains 2. Write the two ions, then balance the charges.
        "X は電子を 3 個失い、Y は 2 個受け取ります。2 つのイオンを書いてから、電荷をつり合わせましょう。",
      ],
      // EN: <p>X has 3 outer electrons (<span class="mono"><span class="nowrap">3s<sup>2</sup></span> <span class="nowrap">3p<sup>1</sup></span></span>) and loses them: <span class="chem">X^3+</span>, <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>. Y has 6 outer electrons (<span class="mono"><span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>4</sup></span></span>) and gains 2: <span class="chem">Y^2-</span>, <span class="mono"><span class="nowrap">1s<sup>2</sup></span> <span class="nowrap">2s<sup>2</sup></span> <span class="nowrap">2p<sup>6</sup></span></span>.</p><div class="worked__math">2 × (3+) = 6+ &nbsp; and &nbsp; 3 × (2−) = 6−</div><p>The formula is <span class="chem">X2Y3</span>. (X is aluminium and Y is oxygen.)</p>
      solution: "<p>X の最外殻の電子は 3 個（<span class=\"mono\"><span class=\"nowrap\">3s<sup>2</sup></span> <span class=\"nowrap\">3p<sup>1</sup></span></span>）で、これを失います：<span class=\"chem\">X^3+</span>、<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。Y の最外殻の電子は 6 個（<span class=\"mono\"><span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>4</sup></span></span>）で、2 個受け取ります：<span class=\"chem\">Y^2-</span>、<span class=\"mono\"><span class=\"nowrap\">1s<sup>2</sup></span> <span class=\"nowrap\">2s<sup>2</sup></span> <span class=\"nowrap\">2p<sup>6</sup></span></span>。</p><div class=\"worked__math\">2 × (3+) = 6+ &nbsp; と &nbsp; 3 × (2−) = 6−</div><p>化学式は <span class=\"chem\">X2Y3</span> です。（X はアルミニウム、Y は酸素です。）</p>",
      misconception: {
        // EN (option A): The configurations are right, but the subscripts are the wrong way round. Three 3+ ions and two 2− ions give 9+ against 4−.
        "0": "電子配置は合っていますが、右下の数字が逆です。3+ のイオン 3 個と 2− のイオン 2 個では、9+ に対して 4− になります。",
        // EN (option C): The formula is right, but these are the configurations of the neutral atoms. The ions have lost or gained electrons.
        "2": "化学式は合っていますが、これは電気的に中性の原子の電子配置です。イオンは、電子を失ったり受け取ったりしています。",
        // EN (option D): One 3+ ion and one 2− ion leave a total charge of 1+. The charges must add up to zero.
        "3": "3+ のイオン 1 個と 2− のイオン 1 個では、電荷の合計が 1+ 残ります。電荷は合わせて 0 にならなければなりません。",
      },
    },

    // ── s2-1-q027 · short · challenge · SL · Structure 2.1.3 · 3 marks
    "s2-1-q027": {
      // EN: <p>The table gives data booklet values for sodium fluoride and calcium oxide.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Compound</th><th scope="col">Ionic radii / pm</th><th scope="col" class="num">Lattice enthalpy / kJ mol<sup>−1</sup></th></tr></thead><tbody><tr><th scope="row">NaF</th><td><span class="chem">Na+</span> 102, <span class="chem">F-</span> 133</td><td class="num">930</td></tr><tr><th scope="row">CaO</th><td><span class="chem">Ca^2+</span> 100, <span class="chem">O^2-</span> 140</td><td class="num">3401</td></tr></tbody></table></div><p>Use the data to explain why the lattice enthalpy of calcium oxide is much larger than that of sodium fluoride.</p>
      stem: "<p>表は、フッ化ナトリウムと酸化カルシウムについての、データブックレットの値です。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">化合物</th><th scope=\"col\">イオン半径 / pm</th><th scope=\"col\" class=\"num\">格子エンタルピー / kJ mol<sup>−1</sup></th></tr></thead><tbody><tr><th scope=\"row\">NaF</th><td><span class=\"chem\">Na+</span> 102, <span class=\"chem\">F-</span> 133</td><td class=\"num\">930</td></tr><tr><th scope=\"row\">CaO</th><td><span class=\"chem\">Ca^2+</span> 100, <span class=\"chem\">O^2-</span> 140</td><td class=\"num\">3401</td></tr></tbody></table></div><p>このデータを使って、酸化カルシウムの格子エンタルピーがフッ化ナトリウムよりずっと大きい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Add the two radii for each compound. What do you notice?
        "それぞれの化合物で、2 つの半径をたしてみましょう。何に気づきますか。",
        // EN: If the distance between the ions is nearly the same, which other factor is left?
        "イオンの間の距離がほとんど同じなら、残る要因は何ですか。",
      ],
      // EN: <p>The ionic radii are almost the same in the two compounds: the sum of the radii is 102 + 133 = 235 pm in NaF and 100 + 140 = 240 pm in CaO. So the distance between the ions cannot explain the difference. The ions in CaO have twice the charge (2+ and 2−, against 1+ and 1−). The electrostatic attraction between the oppositely charged ions is therefore much stronger in CaO, and more energy is needed to separate the ions.</p>
      answer: "<p>イオン半径は、2 つの化合物でほとんど同じです。半径の和は、NaF で 102 + 133 = 235 pm、CaO で 100 + 140 = 240 pm です。だから、イオンの間の距離では、この違いを説明できません。CaO のイオンは、電荷が 2 倍です（1+ と 1− に対して 2+ と 2−）。そのため、反対の電荷をもつイオンの間の静電気的な引力は CaO のほうがずっと強く、イオンを引き離すのに、より大きなエネルギーが必要です。</p>",
      markscheme: [
        // EN: The ionic radii / the distances between the ions are (almost) the same in both compounds (235 pm and 240 pm), so radius does not explain the difference.
        "イオン半径 / イオンの間の距離は、2 つの化合物で（ほとんど）同じ（235 pm と 240 pm）。だから、半径ではこの違いを説明できない。",
        // EN: The ions in CaO have higher charges: 2+ and 2− against 1+ and 1−.
        "CaO のイオンのほうが電荷が大きい：1+ と 1− に対して 2+ と 2−。",
        // EN: Stronger electrostatic attraction between the (oppositely charged) ions in CaO. Accept: more energy needed to separate the ions.
        "CaO のほうが、（反対の電荷をもつ）イオンの間の静電気的な引力が強い。次も可：イオンを引き離すのに、より大きなエネルギーが必要。",
      ],
    },

    // ── s2-1-q028 · multi · challenge · SL · Structure 2.1.3 · 1 mark
    "s2-1-q028": {
      // EN: <p>The lattice enthalpy of calcium fluoride, <span class="chem">CaF2</span>, is 2651 <span class="unit">kJ mol-1</span>. The lattice enthalpy of calcium chloride, <span class="chem">CaCl2</span>, is 2271 <span class="unit">kJ mol-1</span>. Which statements help to explain why the value for calcium fluoride is larger? Select all that apply.</p>
      stem: "<p>フッ化カルシウム <span class=\"chem\">CaF2</span> の格子エンタルピーは 2651 <span class=\"unit\">kJ mol-1</span> です。塩化カルシウム <span class=\"chem\">CaCl2</span> の格子エンタルピーは 2271 <span class=\"unit\">kJ mol-1</span> です。フッ化カルシウムの値のほうが大きい理由の説明に役立つ文はどれですか。当てはまるものをすべて選びましょう。</p>",
      options: [
        // EN: The fluoride ion has a smaller ionic radius than the chloride ion.
        "フッ化物イオンは、塩化物イオンよりイオン半径が小さい。",
        // EN: The fluoride ion has a higher charge than the chloride ion.
        "フッ化物イオンは、塩化物イオンより電荷が大きい。",
        // EN: The centres of the ions are closer together in calcium fluoride.
        "フッ化カルシウムのほうが、イオンの中心どうしが近い。",
        // EN: The electrostatic attraction between the ions is stronger in calcium fluoride.
        "フッ化カルシウムのほうが、イオンの間の静電気的な引力が強い。",
        // EN: The intermolecular forces are stronger in calcium fluoride.
        "フッ化カルシウムのほうが、分子間力が強い。",
      ],
      hints: [
        // EN: Both compounds contain <span class="chem">Ca^2+</span>. Compare the two anions: charge and ionic radius.
        "どちらの化合物も <span class=\"chem\">Ca^2+</span> を含みます。2 つの陰イオンをくらべましょう。電荷とイオン半径です。",
        // EN: Data booklet: <span class="chem">F-</span> 133 pm, <span class="chem">Cl-</span> 181 pm.
        "データブックレット：<span class=\"chem\">F-</span> 133 pm、<span class=\"chem\">Cl-</span> 181 pm。",
      ],
      // EN: <p>Both anions are 1−, so charge does not explain the difference. <span class="chem">F-</span> (133 pm) is smaller than <span class="chem">Cl-</span> (181 pm), so the centres of the ions are closer together in <span class="chem">CaF2</span>. The electrostatic attraction between the oppositely charged ions is stronger, and the lattice enthalpy is larger.</p>
      solution: "<p>どちらの陰イオンも 1− なので、電荷ではこの違いを説明できません。<span class=\"chem\">F-</span>（133 pm）は <span class=\"chem\">Cl-</span>（181 pm）より小さいので、<span class=\"chem\">CaF2</span> のほうがイオンの中心どうしが近くなります。反対の電荷をもつイオンの間の静電気的な引力が強くなり、格子エンタルピーが大きくなります。</p>",
      misconception: {
        // EN (option B): Fluoride and chloride are both in group 17, so both ions have a charge of 1−. The charges are the same in the two compounds.
        "1": "フッ素と塩素はどちらも 17 族なので、どちらのイオンも電荷は 1− です。2 つの化合物で、電荷は同じです。",
        // EN (option E): Ionic compounds have no molecules, so there are no intermolecular forces. The force is electrostatic attraction between ions.
        "4": "イオン化合物に分子はないので、分子間力 (intermolecular forces) もありません。はたらいている力は、イオンの間の静電気的な引力です。",
      },
    },

    // ── s2-1-q029 · mcq · challenge · SL · Structure 2.1.2 · 1 mark
    "s2-1-q029": {
      // EN: <p>The dichromate ion has the formula <span class="chem">Cr2O7^2-</span>. What is the formula of iron(III) dichromate?</p>
      stem: "<p>二クロム酸イオン (dichromate ion) の化学式は <span class=\"chem\">Cr2O7^2-</span> です。二クロム酸鉄(III) (iron(III) dichromate) の化学式はどれですか。</p>",
      options: [
        // EN: <span class="chem">FeCr2O7</span>
        "<span class=\"chem\">FeCr2O7</span>",
        // EN: <span class="chem">Fe3(Cr2O7)2</span>
        "<span class=\"chem\">Fe3(Cr2O7)2</span>",
        // EN: <span class="chem">Fe2(Cr2O7)3</span>
        "<span class=\"chem\">Fe2(Cr2O7)3</span>",
        // EN: <span class="chem">Fe2Cr6O21</span>
        "<span class=\"chem\">Fe2Cr6O21</span>",
      ],
      hints: [
        // EN: You do not need to know this ion. Treat it like sulfate: a 2− polyatomic ion.
        "このイオンを知らなくてもかまいません。硫酸イオンと同じように、2− の多原子イオンとして扱いましょう。",
        // EN: Iron(III) is 3+. Find the smallest total charge that 3 and 2 both divide into.
        "iron(III) は 3+ です。3 でも 2 でも割り切れる、いちばん小さい電荷の合計を見つけましょう。",
      ],
      // EN: <p>The ions are <span class="chem">Fe^3+</span> and <span class="chem">Cr2O7^2-</span>. The smallest common total is 6.</p><div class="worked__math">2 × (3+) = 6+ &nbsp; and &nbsp; 3 × (2−) = 6−</div><p>Three dichromate ions go in brackets: <span class="chem">Fe2(Cr2O7)3</span>.</p>
      solution: "<p>イオンは <span class=\"chem\">Fe^3+</span> と <span class=\"chem\">Cr2O7^2-</span> です。いちばん小さい共通の合計は 6 です。</p><div class=\"worked__math\">2 × (3+) = 6+ &nbsp; と &nbsp; 3 × (2−) = 6−</div><p>二クロム酸イオンは 3 個なので、括弧に入れます：<span class=\"chem\">Fe2(Cr2O7)3</span>。</p>",
      misconception: {
        // EN (option A): One <span class="chem">Fe^3+</span> and one <span class="chem">Cr2O7^2-</span> leave a total charge of 1+. This would be the formula of iron(II) dichromate.
        "0": "<span class=\"chem\">Fe^3+</span> 1 個と <span class=\"chem\">Cr2O7^2-</span> 1 個では、電荷の合計が 1+ 残ります。これは二クロム酸鉄(II) (iron(II) dichromate) の化学式です。",
        // EN (option B): The numbers are the wrong way round. Three 3+ ions and two 2− ions give 9+ against 4−.
        "1": "数字が逆です。3+ のイオン 3 個と 2− のイオン 2 個では、9+ に対して 4− になります。",
        // EN (option D): The numbers of atoms are right, but the dichromate ion must stay together in brackets. The formula has to show that the compound contains three <span class="chem">Cr2O7^2-</span> ions.
        "3": "原子の数は合っていますが、二クロム酸イオンは括弧に入れて、ひとまとまりのままにしなければなりません。化学式は、この化合物が <span class=\"chem\">Cr2O7^2-</span> イオンを 3 個含むことを表す必要があります。",
      },
    },

    // ── s2-1-q030 · short · challenge · SL · Structure 2.1.3 · 3 marks
    "s2-1-q030": {
      // EN: <p>A student writes this about magnesium chloride, <span class="chem">MgCl2</span>:</p><p><em>“Solid magnesium chloride does not conduct electricity because it contains no ions. When it melts, its electrons become free to move, so it conducts. It has a high melting point because the intermolecular forces between the magnesium chloride molecules are strong.”</em></p><p>Identify the three errors and correct each one.</p>
      stem: "<p>ある生徒が、塩化マグネシウム <span class=\"chem\">MgCl2</span> について次のように書きました。</p><p><em>「固体の塩化マグネシウムは、イオンを含まないので電気を通さない。融解すると、電子が自由に動けるようになるので、電気を通す。融点が高いのは、塩化マグネシウムの分子の間の分子間力が強いからである。」</em></p><p>3 つのまちがいを特定しなさい (identify)。そして、それぞれを正しく直しなさい。</p>",
      hints: [
        // EN: Take one sentence at a time. What particles is magnesium chloride made of?
        "1 文ずつ見ていきましょう。塩化マグネシウムは、どんな粒子でできていますか。",
        // EN: Which particles move in a molten ionic compound?
        "融解したイオン化合物の中で動くのは、どの粒子ですか。",
        // EN: What holds an ionic lattice together?
        "イオン結晶の結晶格子をまとめているのは何ですか。",
      ],
      // EN: <p>(1) The solid does contain ions, <span class="chem">Mg^2+</span> and <span class="chem">Cl-</span>. It does not conduct because the ions are held in fixed positions in the lattice. (2) When it melts, it is the ions, not electrons, that become free to move and carry the charge. (3) There are no molecules and no intermolecular forces. The melting point is high because the electrostatic attraction between the oppositely charged ions in the lattice is strong, so a lot of energy is needed to overcome it.</p>
      answer: "<p>(1) 固体にはイオン <span class=\"chem\">Mg^2+</span> と <span class=\"chem\">Cl-</span> があります。電気を通さないのは、イオンが結晶格子の決まった位置に固定されているからです。(2) 融解したときに自由に動けるようになって電荷を運ぶのは、電子ではなくイオンです。(3) 分子はなく、分子間力もありません。融点が高いのは、結晶格子の中で、反対の電荷をもつイオンの間の静電気的な引力が強いからです。そのため、それに打ち勝つのに大きなエネルギーが必要です。</p>",
      markscheme: [
        // EN: The solid contains ions, but they are in fixed positions / cannot move (so it does not conduct).
        "固体にはイオンがあるが、決まった位置に固定されている / 動けない（だから電気を通さない）。",
        // EN: When molten, the ions (not electrons) are free to move / carry the charge.
        "融解すると、（電子ではなく）イオンが自由に動ける / 電荷を運ぶ。",
        // EN: There are no molecules / no intermolecular forces: the high melting point is due to strong electrostatic attraction between oppositely charged ions (in the lattice).
        "分子はない / 分子間力はない：融点が高いのは、（結晶格子の中の）反対の電荷をもつイオンの間の静電気的な引力が強いため。",
      ],
    },

  }
});
