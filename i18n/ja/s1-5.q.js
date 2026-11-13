/* s1-5.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 's1-5.q', {
  questions: {

    // ── s1-5-q001 · mcq · foundation · SL · Structure 1.5.1 · 1 mark
    "s1-5-q001": {
      // EN: <p>Which statement is an assumption of the ideal gas model?</p>
      stem: "<p>理想気体モデルの仮定はどれですか。</p>",
      options: [
        // EN: The particles attract each other weakly.
        "粒子どうしが弱く引き合う。",
        // EN: A small amount of kinetic energy is lost in each collision.
        "衝突のたびに、運動エネルギーが少し失われる。",
        // EN: The particles have negligible volume.
        "粒子の体積は無視できるほど小さい。",
        // EN: The particles have negligible mass.
        "粒子の質量は無視できるほど小さい。",
      ],
      hints: [
        // EN: There are four assumptions: moving particles, negligible particle volume, no intermolecular forces, elastic collisions.
        "仮定は 4 つあります。動いている粒子、無視できるほど小さい粒子の体積、分子間力がはたらかないこと、弾性衝突です。",
      ],
      // EN: <p>The ideal gas model assumes the particles themselves take up a negligible part of the volume of the container. It also assumes moving particles, no intermolecular forces and elastic collisions.</p>
      solution: "<p>理想気体モデルでは、粒子そのものが容器の体積に占める割合は無視できるほど小さい、と仮定します。ほかに、粒子が動いていること、分子間力がはたらかないこと、衝突が弾性衝突であることも仮定します。</p>",
      misconception: {
        // EN (option A): The model assumes there are no intermolecular forces at all, not weak ones. Weak attractions describe a real gas.
        "0": "モデルの仮定は「分子間力がまったくない」で、「弱い」ではありません。弱い引力があるのは実在気体です。",
        // EN (option B): That would be an inelastic collision. The model assumes collisions are elastic, so no kinetic energy is lost overall.
        "1": "それは非弾性衝突です。モデルでは衝突を弾性衝突と仮定するので、全体として運動エネルギーは失われません。",
        // EN (option D): Ideal gas particles do have mass. It is their volume that is taken to be negligible.
        "3": "理想気体の粒子にも質量はあります。無視できるほど小さいとするのは、粒子の体積です。",
      },
    },

    // ── s1-5-q002 · multi · foundation · SL · Structure 1.5.1 · 1 mark
    "s1-5-q002": {
      // EN: <p>Select <strong>all</strong> the assumptions of the ideal gas model.</p>
      stem: "<p>理想気体モデルの仮定を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: The gas consists of moving particles.
        "気体は動いている粒子でできている。",
        // EN: All the particles move at the same speed.
        "すべての粒子が同じ速さで動いている。",
        // EN: The particles have negligible volume.
        "粒子の体積は無視できるほど小さい。",
        // EN: There are no intermolecular forces between the particles.
        "粒子の間に分子間力がはたらかない。",
        // EN: The particles have negligible mass.
        "粒子の質量は無視できるほど小さい。",
        // EN: All collisions between particles are elastic.
        "粒子どうしの衝突は、すべて弾性衝突である。",
      ],
      hints: [
        // EN: There are exactly four correct statements.
        "正しいものは、ちょうど 4 つあります。",
        // EN: Two of the four are about the particles themselves (their volume, the forces between them). One is about collisions.
        "4 つのうち 2 つは、粒子そのものについての仮定です（粒子の体積、粒子の間の力）。1 つは衝突についての仮定です。",
      ],
      // EN: <p>The four assumptions are: moving particles; negligible particle volume; no intermolecular forces; elastic collisions.</p>
      solution: "<p>4 つの仮定は、動いている粒子、無視できるほど小さい粒子の体積、分子間力がはたらかないこと、弾性衝突です。</p>",
      misconception: {
        // EN (option B): The model does not say this. The particles are moving, but nothing requires them all to have the same speed.
        "1": "モデルにこの仮定はありません。粒子は動いていますが、すべてが同じ速さである必要はありません。",
        // EN (option E): The particles have mass. A gas can be weighed. It is the volume of the particles that is negligible.
        "4": "粒子には質量があります。気体の質量ははかれます。無視できるほど小さいのは、粒子の体積です。",
      },
    },

    // ── s1-5-q003 · mcq · foundation · SL · Structure 1.5.2 · 1 mark
    "s1-5-q003": {
      // EN: <p>Under which conditions does a real gas behave <strong>most</strong> like an ideal gas?</p>
      stem: "<p>実在気体が理想気体に<strong>最も</strong>近いふるまいをするのは、どの条件ですか。</p>",
      options: [
        // EN: High temperature and high pressure
        "高温・高圧",
        // EN: High temperature and low pressure
        "高温・低圧",
        // EN: Low temperature and high pressure
        "低温・高圧",
        // EN: Low temperature and low pressure
        "低温・低圧",
      ],
      hints: [
        // EN: When are the particles far apart? When are they moving too fast for attractions to matter?
        "粒子どうしが遠く離れるのは、どんなときですか。引力が効かないほど粒子が速く動くのは、どんなときですか。",
      ],
      // EN: <p>At <strong>low pressure</strong> the particles are far apart, so their volume is negligible compared with the container. At <strong>high temperature</strong> they move fast, so intermolecular forces have little effect. Both assumptions of the model then hold well.</p>
      solution: "<p><strong>低圧</strong>では粒子どうしが遠く離れているので、粒子の体積は容器にくらべて無視できます。<strong>高温</strong>では粒子が速く動くので、分子間力の影響はほとんどありません。このとき、モデルの 2 つの仮定がどちらもよく成り立ちます。</p>",
      misconception: {
        // EN (option A): The high temperature helps, but high pressure pushes the particles close together, so their own volume is no longer negligible.
        "0": "高温は合っていますが、高圧では粒子どうしが近くに押し込まれるので、粒子の体積が無視できなくなります。",
        // EN (option C): These are the conditions where a real gas deviates most. Slow, crowded particles are where gases turn into liquids.
        "2": "これは、実在気体が最も大きくずれる条件です。粒子が遅く、混み合っているのは、気体が液体になる条件です。",
        // EN (option D): The low pressure helps, but at low temperature the particles move slowly, so intermolecular forces become significant.
        "3": "低圧は合っていますが、低温では粒子の動きが遅いので、分子間力の影響が大きくなります。",
      },
    },

    // ── s1-5-q004 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q004": {
      // EN: <p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 0.300 mol of an ideal gas at STP.</p>
      stem: "<p>STP で 0.300 mol の理想気体が占める体積を、<span class=\"unit\">dm3</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: The data booklet gives the molar volume of an ideal gas at STP.
        "データブックレットに、STP での理想気体のモル体積が載っています。",
        // EN: <span class="mono">V = n × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>
        "<span class=\"mono\">V = n × 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>",
      ],
      // EN: <div class="worked__math">V = n × V<sub>m</sub> = 0.300 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 6.81 dm<sup>3</sup></div>
      solution: "<div class=\"worked__math\">V = n × V<sub>m</sub> = 0.300 mol × 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 6.81 dm<sup>3</sup></div>",
    },

    // ── s1-5-q005 · numeric · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q005": {
      // EN: <p>A sample of argon occupies 4540 <span class="unit">cm3</span> at STP. Calculate the amount of argon, in mol.</p>
      stem: "<p>アルゴンの試料が、STP で 4540 <span class=\"unit\">cm3</span> を占めています。アルゴンの物質量を mol で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Convert the volume to dm<sup>3</sup> first: divide by 1000.
        "まず体積を dm<sup>3</sup> に換算します。1000 で割ります。",
        // EN: <span class="mono">n = V ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>
        "<span class=\"mono\">n = V ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup></span>",
      ],
      // EN: <div class="worked__math">V = 4540 cm<sup>3</sup> ÷ 1000 = 4.54 dm<sup>3</sup></div><div class="worked__math">n = 4.54 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 0.200 mol</div>
      solution: "<div class=\"worked__math\">V = 4540 cm<sup>3</sup> ÷ 1000 = 4.54 dm<sup>3</sup></div><div class=\"worked__math\">n = 4.54 dm<sup>3</sup> ÷ 22.7 dm<sup>3</sup> mol<sup>−1</sup> = 0.200 mol</div>",
    },

    // ── s1-5-q006 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q006": {
      // EN: <p>A fixed mass of an ideal gas is kept at constant temperature. Which description fits a graph of pressure (vertical axis) against volume (horizontal axis)?</p>
      stem: "<p>一定量の理想気体を、温度一定に保ちます。圧力（縦軸）と体積（横軸）のグラフに合う説明はどれですか。</p>",
      options: [
        // EN: A straight line through the origin with a positive gradient
        "原点を通り、傾きが正の直線",
        // EN: A straight line with a negative gradient that reaches zero pressure
        "傾きが負で、圧力がゼロに達する直線",
        // EN: A curve that falls steeply at first and then levels off, without touching either axis
        "最初は急に下がり、だんだんゆるやかになる曲線。どちらの軸にも触れない",
        // EN: A horizontal straight line
        "水平な直線",
      ],
      hints: [
        // EN: If the volume doubles, what happens to the pressure? And if it doubles again?
        "体積が 2 倍になると、圧力はどうなりますか。さらに 2 倍になったら、どうなりますか。",
      ],
      // EN: <p>At constant temperature, <span class="mono">PV = constant</span>, so pressure is inversely proportional to volume. Each doubling of V halves P. This gives a falling curve that gets closer to both axes without touching them.</p>
      solution: "<p>温度が一定のとき <span class=\"mono\">PV = 一定</span> なので、圧力は体積に反比例します。V が 2 倍になるたびに、P は半分になります。そのため、下がりながら両方の軸に近づくけれど、どちらにも触れない曲線になります。</p>",
      misconception: {
        // EN (option A): That would mean pressure is directly proportional to volume. Squeezing a gas into a smaller volume raises its pressure, so the two move in opposite directions.
        "0": "それでは、圧力が体積に比例することになります。気体を小さな体積に押し縮めると圧力は上がるので、2 つは逆向きに変化します。",
        // EN (option B): Inverse proportion is not a straight line going down. The pressure halves each time the volume doubles, so it never reaches zero.
        "1": "反比例は、右下がりの直線ではありません。体積が 2 倍になるたびに圧力は半分になるので、ゼロにはなりません。",
        // EN (option D): A horizontal line is the graph of PV against P. Pressure itself changes when the volume changes.
        "3": "水平な直線になるのは、縦軸 PV・横軸 P のグラフです。体積が変われば、圧力そのものは変わります。",
      },
    },

    // ── s1-5-q007 · mcq · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q007": {
      // EN: <p>What is 250 <span class="unit">cm3</span> expressed in <span class="unit">m3</span>?</p>
      stem: "<p>250 <span class=\"unit\">cm3</span> を <span class=\"unit\">m3</span> で表すと、どうなりますか。</p>",
      options: [
        // EN: <span class="mono">0.250 m<sup>3</sup></span>
        "<span class=\"mono\">0.250 m<sup>3</sup></span>",
        // EN: <span class="mono">2.50 m<sup>3</sup></span>
        "<span class=\"mono\">2.50 m<sup>3</sup></span>",
        // EN: <span class="mono">2.50 × 10<sup>−4</sup> m<sup>3</sup></span>
        "<span class=\"mono\">2.50 × 10<sup>−4</sup> m<sup>3</sup></span>",
        // EN: <span class="mono">2.50 × 10<sup>8</sup> m<sup>3</sup></span>
        "<span class=\"mono\">2.50 × 10<sup>8</sup> m<sup>3</sup></span>",
      ],
      hints: [
        // EN: 1 m<sup>3</sup> = 1000 dm<sup>3</sup> and 1 dm<sup>3</sup> = 1000 cm<sup>3</sup>.
        "1 m<sup>3</sup> = 1000 dm<sup>3</sup>、1 dm<sup>3</sup> = 1000 cm<sup>3</sup> です。",
      ],
      // EN: <div class="worked__math">250 cm<sup>3</sup> ÷ 1000 = 0.250 dm<sup>3</sup></div><div class="worked__math">0.250 dm<sup>3</sup> ÷ 1000 = 2.50 × 10<sup>−4</sup> m<sup>3</sup></div><p>In one step: divide cm<sup>3</sup> by 10<sup>6</sup> to get m<sup>3</sup>.</p>
      solution: "<div class=\"worked__math\">250 cm<sup>3</sup> ÷ 1000 = 0.250 dm<sup>3</sup></div><div class=\"worked__math\">0.250 dm<sup>3</sup> ÷ 1000 = 2.50 × 10<sup>−4</sup> m<sup>3</sup></div><p>まとめて 1 回で換算するなら、cm<sup>3</sup> を 10<sup>6</sup> で割ると m<sup>3</sup> になります。</p>",
      misconception: {
        // EN (option A): Dividing by 1000 gives the volume in dm<sup>3</sup>, not m<sup>3</sup>. You need to divide by 1000 again.
        "0": "1000 で割ると、m<sup>3</sup> ではなく dm<sup>3</sup> で表した体積になります。もう一度 1000 で割る必要があります。",
        // EN (option B): There are 100 cm in 1 m, but volume is length cubed: 1 m<sup>3</sup> = 100 × 100 × 100 = 10<sup>6</sup> cm<sup>3</sup>.
        "1": "1 m は 100 cm ですが、体積は長さの 3 乗です。1 m<sup>3</sup> = 100 × 100 × 100 = 10<sup>6</sup> cm<sup>3</sup> です。",
        // EN (option D): You multiplied by 10<sup>6</sup> instead of dividing. A cubic metre is much bigger than a cubic centimetre, so the number must get smaller.
        "3": "10<sup>6</sup> で割る代わりに、かけています。1 立方メートルは 1 立方センチメートルよりずっと大きいので、数値は小さくなるはずです。",
      },
    },

    // ── s1-5-q008 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q008": {
      // EN: <p>Calculate the pressure, in kPa, of 1.00 mol of an ideal gas in a 10.0 <span class="unit">dm3</span> container at 300 K.</p>
      stem: "<p>300 K で 10.0 <span class=\"unit\">dm3</span> の容器に入った 1.00 mol の理想気体の圧力を、kPa で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Rearrange <span class="mono">PV = nRT</span> for P.
        "<span class=\"mono\">PV = nRT</span> を P について変形します。",
        // EN: With V in dm<sup>3</sup>, the pressure comes out in kPa: <span class="mono">P = (1.00 × 8.31 × 300) ÷ 10.0</span>
        "V が dm<sup>3</sup> なら、圧力は kPa で出ます：<span class=\"mono\">P = (1.00 × 8.31 × 300) ÷ 10.0</span>",
      ],
      // EN: <div class="worked__math">P = nRT ÷ V</div><div class="worked__math">P = (1.00 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 300 K) ÷ 10.0 dm<sup>3</sup> = 249.3 kPa</div><p>To 3 significant figures: <strong>249 kPa</strong>.</p>
      solution: "<div class=\"worked__math\">P = nRT ÷ V</div><div class=\"worked__math\">P = (1.00 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 300 K) ÷ 10.0 dm<sup>3</sup> = 249.3 kPa</div><p>有効数字 3 桁で <strong>249 kPa</strong> です。</p>",
    },

    // ── s1-5-q009 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "s1-5-q009": {
      // EN: <p>A fixed mass of an ideal gas is compressed to half its original volume at constant temperature. What happens to the pressure?</p>
      stem: "<p>一定量の理想気体を、温度一定のまま、もとの半分の体積に圧縮します。圧力はどうなりますか。</p>",
      options: [
        // EN: It halves.
        "半分になる。",
        // EN: It stays the same.
        "変わらない。",
        // EN: It doubles.
        "2 倍になる。",
        // EN: It becomes four times larger.
        "4 倍になる。",
      ],
      hints: [
        // EN: At constant temperature, <span class="mono">P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span>.
        "温度が一定のとき、<span class=\"mono\">P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span> です。",
      ],
      // EN: <div class="worked__math">P<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ (½V<sub>1</sub>) = 2P<sub>1</sub></div><p>The pressure doubles.</p>
      solution: "<div class=\"worked__math\">P<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub> ÷ (½V<sub>1</sub>) = 2P<sub>1</sub></div><p>圧力は 2 倍になります。</p>",
      misconception: {
        // EN (option A): That would be direct proportion. Pressure and volume are inversely proportional: when one goes down, the other goes up.
        "0": "それは比例の場合です。圧力と体積は反比例するので、一方が小さくなると、もう一方は大きくなります。",
        // EN (option B): The same particles now hit a smaller wall area more often, so the pressure must rise.
        "1": "同じ数の粒子が、前より狭い壁に、前より何度もぶつかります。だから、圧力は必ず上がります。",
        // EN (option D): The relationship is P ∝ 1/V, not 1/V<sup>2</sup>. Halving V multiplies P by 2, not 4.
        "3": "関係は P ∝ 1/V で、1/V<sup>2</sup> ではありません。V を半分にすると、P は 4 倍ではなく 2 倍になります。",
      },
    },

    // ── s1-5-q010 · numeric · foundation · SL · Structure 1.5.4 · 1 mark
    "s1-5-q010": {
      // EN: <p>A gas occupies 3.00 <span class="unit">dm3</span> at 300 K. It is heated to 450 K at constant pressure. Calculate the new volume, in <span class="unit">dm3</span>.</p>
      stem: "<p>ある気体が、300 K で 3.00 <span class=\"unit\">dm3</span> を占めています。圧力を一定にして、450 K まで加熱します。新しい体積を <span class=\"unit\">dm3</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: The pressure is constant, so it cancels from the combined gas law.
        "圧力が一定なので、ボイル・シャルルの法則 (combined gas law)の式から圧力が消えます。",
        // EN: <span class="mono">V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub> ÷ T<sub>1</sub></span>
        "<span class=\"mono\">V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub> ÷ T<sub>1</sub></span>",
      ],
      // EN: <div class="worked__math">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div><div class="worked__math">V<sub>2</sub> = 3.00 dm<sup>3</sup> × 450 K ÷ 300 K = 4.50 dm<sup>3</sup></div>
      solution: "<div class=\"worked__math\">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div><div class=\"worked__math\">V<sub>2</sub> = 3.00 dm<sup>3</sup> × 450 K ÷ 300 K = 4.50 dm<sup>3</sup></div>",
    },

    // ── s1-5-q011 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q011": {
      // EN: <p>A sealed, rigid container of gas is heated from 25 °C to 50 °C. What happens to the pressure of the gas?</p>
      stem: "<p>密閉された変形しない容器の中の気体を、25 °C から 50 °C に加熱します。気体の圧力はどうなりますか。</p>",
      options: [
        // EN: It doubles.
        "2 倍になる。",
        // EN: It increases by about 8 %.
        "約 8 % 大きくなる。",
        // EN: It halves.
        "半分になる。",
        // EN: It stays the same because the container is rigid.
        "容器が変形しないので、変わらない。",
      ],
      hints: [
        // EN: Convert both temperatures to kelvin before comparing them.
        "くらべる前に、両方の温度をケルビンに換算しましょう。",
        // EN: At constant volume, <span class="mono">P<sub>2</sub>/P<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub></span>.
        "体積が一定のとき、<span class=\"mono\">P<sub>2</sub>/P<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub></span> です。",
      ],
      // EN: <div class="worked__math">T<sub>1</sub> = 25 + 273.15 = 298.15 K; &nbsp; T<sub>2</sub> = 50 + 273.15 = 323.15 K</div><div class="worked__math">P<sub>2</sub>/P<sub>1</sub> = 323.15 K ÷ 298.15 K = 1.084</div><p>The pressure rises by about 8 %.</p>
      solution: "<div class=\"worked__math\">T<sub>1</sub> = 25 + 273.15 = 298.15 K; &nbsp; T<sub>2</sub> = 50 + 273.15 = 323.15 K</div><div class=\"worked__math\">P<sub>2</sub>/P<sub>1</sub> = 323.15 K ÷ 298.15 K = 1.084</div><p>圧力は約 8 % 大きくなります。</p>",
      misconception: {
        // EN (option A): You used the Celsius values. Pressure is proportional to temperature in kelvin: 298 K to 323 K is far from a doubling.
        "0": "セルシウス温度の値を使っています。圧力は、ケルビンで表した温度に比例します。298 K から 323 K への変化は、2 倍にはほど遠い変化です。",
        // EN (option C): Pressure and temperature are directly proportional, so heating raises the pressure. Also check you used kelvin.
        "2": "圧力と温度は比例するので、加熱すると圧力は上がります。ケルビンを使ったかどうかも確認しましょう。",
        // EN (option D): A rigid container keeps the volume constant, not the pressure. Faster particles hit the walls harder and more often.
        "3": "変形しない容器で一定になるのは体積で、圧力ではありません。速くなった粒子は、壁に強く、何度もぶつかります。",
      },
    },

    // ── s1-5-q012 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q012": {
      // EN: <p>A gas sample has a volume of 450 <span class="unit">cm3</span> at 27.0 °C and 98.0 kPa. Calculate the volume, in <span class="unit">cm3</span>, that the same sample would occupy at STP.</p>
      stem: "<p>ある気体の試料の体積は、27.0 °C、98.0 kPa で 450 <span class=\"unit\">cm3</span> です。同じ試料が STP で占める体積を、<span class=\"unit\">cm3</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: STP is 273.15 K and 100 kPa. Use the combined gas law.
        "STP は 273.15 K、100 kPa です。ボイル・シャルルの法則 (combined gas law)を使います。",
        // EN: T<sub>1</sub> = 300.15 K. <span class="mono">V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub>T<sub>2</sub> ÷ (T<sub>1</sub>P<sub>2</sub>)</span>
        "T<sub>1</sub> = 300.15 K です。<span class=\"mono\">V<sub>2</sub> = P<sub>1</sub>V<sub>1</sub>T<sub>2</sub> ÷ (T<sub>1</sub>P<sub>2</sub>)</span>",
      ],
      // EN: <div class="worked__math">T<sub>1</sub> = 27.0 + 273.15 = 300.15 K; &nbsp; T<sub>2</sub> = 273.15 K; &nbsp; P<sub>2</sub> = 100 kPa</div><div class="worked__math">V<sub>2</sub> = (98.0 kPa × 450 cm<sup>3</sup> × 273.15 K) ÷ (300.15 K × 100 kPa)</div><div class="worked__math">V<sub>2</sub> = 401.3… cm<sup>3</sup></div><p>To 3 significant figures: <strong>401 cm<sup>3</sup></strong>. Cooling and a slightly higher pressure both make the volume smaller, so this is sensible.</p>
      solution: "<div class=\"worked__math\">T<sub>1</sub> = 27.0 + 273.15 = 300.15 K; &nbsp; T<sub>2</sub> = 273.15 K; &nbsp; P<sub>2</sub> = 100 kPa</div><div class=\"worked__math\">V<sub>2</sub> = (98.0 kPa × 450 cm<sup>3</sup> × 273.15 K) ÷ (300.15 K × 100 kPa)</div><div class=\"worked__math\">V<sub>2</sub> = 401.3… cm<sup>3</sup></div><p>有効数字 3 桁で <strong>401 cm<sup>3</sup></strong> です。冷やすことも、圧力が少し高くなることも、体積を小さくします。だから、この答えはもっともです。</p>",
    },

    // ── s1-5-q013 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q013": {
      // EN: <p>Calculate the volume, in <span class="unit">dm3</span>, occupied by 2.00 g of helium at 20.0 °C and 101 kPa.</p>
      stem: "<p>20.0 °C、101 kPa で 2.00 g のヘリウムが占める体積を、<span class=\"unit\">dm3</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Find the amount of helium first: <span class="mono">n = m ÷ M</span>, with <i>A</i><sub>r</sub>(He) = 4.00.
        "まずヘリウムの物質量を求めます：<span class=\"mono\">n = m ÷ M</span>。<i>A</i><sub>r</sub>(He) = 4.00 です。",
        // EN: Then <span class="mono">V = nRT ÷ P</span> with T = 293.15 K. With P in kPa, V is in dm<sup>3</sup>.
        "次に <span class=\"mono\">V = nRT ÷ P</span> を使います。T = 293.15 K です。P が kPa なら、V は dm<sup>3</sup> で出ます。",
      ],
      // EN: <div class="worked__math">n = 2.00 g ÷ 4.00 g mol<sup>−1</sup> = 0.500 mol</div><div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">V = (0.500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) ÷ 101 kPa = 12.05… dm<sup>3</sup></div><p>To 3 significant figures: <strong>12.1 dm<sup>3</sup></strong>.</p>
      solution: "<div class=\"worked__math\">n = 2.00 g ÷ 4.00 g mol<sup>−1</sup> = 0.500 mol</div><div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">V = (0.500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) ÷ 101 kPa = 12.05… dm<sup>3</sup></div><p>有効数字 3 桁で <strong>12.1 dm<sup>3</sup></strong> です。</p>",
    },

    // ── s1-5-q014 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "s1-5-q014": {
      // EN: <p>A 500 <span class="unit">cm3</span> flask contains nitrogen gas, <span class="chem">N2</span>, at 15.0 °C and 120 kPa. Calculate the mass of nitrogen in the flask, in g.</p>
      stem: "<p>500 <span class=\"unit\">cm3</span> のフラスコに、15.0 °C、120 kPa の窒素の気体 <span class=\"chem\">N2</span> が入っています。フラスコ内の窒素の質量を g で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Convert first: 500 cm<sup>3</sup> to dm<sup>3</sup>, and 15.0 °C to K.
        "まず換算します。500 cm<sup>3</sup> を dm<sup>3</sup> に、15.0 °C を K にします。",
        // EN: <span class="mono">n = PV ÷ RT = (120 × 0.500) ÷ (8.31 × 288.15)</span>
        "<span class=\"mono\">n = PV ÷ RT = (120 × 0.500) ÷ (8.31 × 288.15)</span>",
        // EN: Then <span class="mono">m = n × M</span>. Nitrogen gas is N<sub>2</sub>, so M = 28.02 g mol<sup>−1</sup>.
        "次に <span class=\"mono\">m = n × M</span> を使います。窒素の気体は N<sub>2</sub> なので、M = 28.02 g mol<sup>−1</sup> です。",
      ],
      // EN: <div class="worked__math">V = 500 cm<sup>3</sup> ÷ 1000 = 0.500 dm<sup>3</sup>; &nbsp; T = 15.0 + 273.15 = 288.15 K</div><div class="worked__math">n = (120 kPa × 0.500 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 288.15 K) = 0.025057… mol</div><div class="worked__math">M(N<sub>2</sub>) = 2 × 14.01 = 28.02 g mol<sup>−1</sup></div><div class="worked__math">m = 0.025057… mol × 28.02 g mol<sup>−1</sup> = 0.7021… g</div><p>To 3 significant figures: <strong>0.702 g</strong>.</p>
      solution: "<div class=\"worked__math\">V = 500 cm<sup>3</sup> ÷ 1000 = 0.500 dm<sup>3</sup>; &nbsp; T = 15.0 + 273.15 = 288.15 K</div><div class=\"worked__math\">n = (120 kPa × 0.500 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 288.15 K) = 0.025057… mol</div><div class=\"worked__math\">M(N<sub>2</sub>) = 2 × 14.01 = 28.02 g mol<sup>−1</sup></div><div class=\"worked__math\">m = 0.025057… mol × 28.02 g mol<sup>−1</sup> = 0.7021… g</div><p>有効数字 3 桁で <strong>0.702 g</strong> です。</p>",
    },

    // ── s1-5-q015 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "s1-5-q015": {
      // EN: <p>0.412 g of an unknown gas occupies 185 <span class="unit">cm3</span> at 35.0 °C and 99.0 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>ある未知の気体 0.412 g が、35.0 °C、99.0 kPa で 185 <span class=\"unit\">cm3</span> を占めています。この気体のモル質量を <span class=\"unit\">g mol-1</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Two links: the gas equation gives the amount, then molar mass is mass ÷ amount.
        "2 段階で考えます。気体の状態方程式から物質量を求め、次に「モル質量 = 質量 ÷ 物質量」を使います。",
        // EN: <span class="mono">n = (99.0 × 0.185) ÷ (8.31 × 308.15)</span>
        "<span class=\"mono\">n = (99.0 × 0.185) ÷ (8.31 × 308.15)</span>",
      ],
      // EN: <div class="worked__math">V = 185 cm<sup>3</sup> ÷ 1000 = 0.185 dm<sup>3</sup>; &nbsp; T = 35.0 + 273.15 = 308.15 K</div><div class="worked__math">n = (99.0 kPa × 0.185 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 308.15 K) = 0.0071522… mol</div><div class="worked__math">M = m ÷ n = 0.412 g ÷ 0.0071522… mol = 57.60… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>57.6 g mol<sup>−1</sup></strong>.</p>
      solution: "<div class=\"worked__math\">V = 185 cm<sup>3</sup> ÷ 1000 = 0.185 dm<sup>3</sup>; &nbsp; T = 35.0 + 273.15 = 308.15 K</div><div class=\"worked__math\">n = (99.0 kPa × 0.185 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 308.15 K) = 0.0071522… mol</div><div class=\"worked__math\">M = m ÷ n = 0.412 g ÷ 0.0071522… mol = 57.60… g mol<sup>−1</sup></div><p>有効数字 3 桁で <strong>57.6 g mol<sup>−1</sup></strong> です。</p>",
    },

    // ── s1-5-q016 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q016": {
      // EN: <p>Which graph, for a fixed mass of an ideal gas, is a straight line that passes through the origin?</p>
      stem: "<p>一定量の理想気体について、原点を通る直線になるグラフはどれですか。</p>",
      options: [
        // EN: Pressure against volume, at constant temperature
        "縦軸 圧力・横軸 体積（温度が一定）",
        // EN: Pressure against 1/volume, at constant temperature
        "縦軸 圧力・横軸 1/体積（温度が一定）",
        // EN: Volume against temperature in °C, at constant pressure
        "縦軸 体積・横軸 °C で表した温度（圧力が一定）",
        // EN: Pressure × volume against pressure, at constant temperature
        "縦軸 圧力 × 体積・横軸 圧力（温度が一定）",
      ],
      hints: [
        // EN: A straight line through the origin means the two plotted quantities are directly proportional.
        "原点を通る直線は、プロットした 2 つの量が比例することを意味します。",
      ],
      // EN: <p>At constant temperature <span class="mono">P = nRT × (1/V)</span>, so P is directly proportional to 1/V. Plotting P against 1/V gives a straight line through the origin with gradient nRT.</p>
      solution: "<p>温度が一定のとき <span class=\"mono\">P = nRT × (1/V)</span> なので、P は 1/V に比例します。縦軸 P・横軸 1/V でプロットすると、原点を通り、傾きが nRT の直線になります。</p>",
      misconception: {
        // EN (option A): P against V is a falling curve, because P is inversely proportional to V.
        "0": "縦軸 P・横軸 V のグラフは、右下がりの曲線です。P は V に反比例するからです。",
        // EN (option C): This is a straight line, but it does not pass through the origin. At 0 °C the gas still has a volume. The line reaches zero volume at −273.15 °C.
        "2": "直線ですが、原点は通りません。0 °C でも気体には体積があります。直線が体積ゼロに達するのは −273.15 °C です。",
        // EN (option D): PV is constant at constant temperature, so this graph is a horizontal line, not a line through the origin.
        "3": "温度が一定なら PV は一定です。だから、このグラフは原点を通る直線ではなく、水平な直線です。",
      },
    },

    // ── s1-5-q017 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q017": {
      // EN: <p>Which sketch shows how the volume of a fixed mass of an ideal gas (vertical axis) changes with its temperature in <strong>°C</strong> (horizontal axis) at constant pressure? In each sketch the vertical axis is drawn at 0 on the horizontal scale.</p>
      stem: "<p>一定量の理想気体の体積（縦軸）が、圧力一定のもとで、<strong>°C</strong> で表した温度（横軸）とともにどう変わるかを示す概形はどれですか。どの図でも、縦軸は横軸の目盛りの 0 の位置に描いてあります。</p>",
      options: [
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A straight line with positive gradient that starts at the origin" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 68 L104 16" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"原点から始まる、傾きが正の直線\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 68 L104 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A straight line with positive gradient that crosses the vertical axis above zero; extended back with a dashed line it meets the horizontal axis at a negative value" style="vertical-align:middle"><path d="M16 68 H112 M44 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 68 L44 48" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><path d="M44 48 L104 5.1" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="40" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"傾きが正で、縦軸とゼロより上で交わる直線。破線で左へ延ばすと、横軸と負の値で交わる\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M44 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 68 L44 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><path d=\"M44 48 L104 5.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"40\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A curve that falls steeply and then levels off" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M24 12 C28 44 52 58 108 62" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"急に下がってから、ゆるやかになる曲線\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M24 12 C28 44 52 58 108 62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
        // EN: <svg viewBox="0 0 120 84" width="120" height="84" role="img" aria-label="A horizontal straight line" style="vertical-align:middle"><path d="M16 68 H112 M16 8 V68" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 30 H104" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="12" y="80" text-anchor="end" font-size="10" fill="currentColor">0</text></svg>
        "<svg viewBox=\"0 0 120 84\" width=\"120\" height=\"84\" role=\"img\" aria-label=\"水平な直線\" style=\"vertical-align:middle\"><path d=\"M16 68 H112 M16 8 V68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 30 H104\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"12\" y=\"80\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">0</text></svg>",
      ],
      hints: [
        // EN: Does a gas have zero volume at 0 °C?
        "0 °C で、気体の体積はゼロですか。",
        // EN: Where would the volume of an ideal gas reach zero?
        "理想気体の体積がゼロになるのは、どこですか。",
      ],
      // EN: <p>Volume is directly proportional to temperature in kelvin. On a Celsius axis the same straight line is shifted: it crosses the volume axis above zero at 0 °C, and extrapolates back to zero volume at −273.15 °C (absolute zero).</p>
      solution: "<p>体積は、ケルビンで表した温度に比例します。セルシウス温度の軸では、同じ直線が横にずれます。0 °C では、ゼロより上で体積の軸と交わります。左へ外挿すると、−273.15 °C（絶対零度）で体積がゼロになります。</p>",
      misconception: {
        // EN (option A): This is the graph for temperature in kelvin. At 0 °C (273.15 K) a gas still has a volume, so the line cannot start at the origin.
        "0": "これは、温度をケルビンで表したときのグラフです。0 °C（273.15 K）でも気体には体積があるので、直線は原点から始まりません。",
        // EN (option C): This is the shape of pressure against volume. Volume increases steadily with temperature.
        "2": "これは、縦軸 圧力・横軸 体積のグラフの形です。体積は、温度とともに一定の割合で大きくなります。",
        // EN (option D): A horizontal line would mean the volume does not change on heating. At constant pressure a gas expands when heated.
        "3": "水平な直線は、加熱しても体積が変わらないことを意味します。圧力が一定なら、気体は加熱すると膨張します。",
      },
    },

    // ── s1-5-q018 · mcq · exam · SL · Structure 1.5.2 · 1 mark
    "s1-5-q018": {
      // EN: <p>The boiling points of four substances at 100 kPa are shown.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col">Substance</th><th scope="col" class="num">Boiling point / K</th></tr></thead><tbody><tr><th scope="row">helium, <span class="chem">He</span></th><td class="num">4</td></tr><tr><th scope="row">nitrogen, <span class="chem">N2</span></th><td class="num">77</td></tr><tr><th scope="row">methane, <span class="chem">CH4</span></th><td class="num">112</td></tr><tr><th scope="row">ammonia, <span class="chem">NH3</span></th><td class="num">240</td></tr></tbody></table></div><p>Which gas would you expect to deviate <strong>most</strong> from ideal behaviour at 300 K and 100 kPa?</p>
      stem: "<p>4 種類の物質の、100 kPa での沸点を示します。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\">物質</th><th scope=\"col\" class=\"num\">沸点 / K</th></tr></thead><tbody><tr><th scope=\"row\">ヘリウム <span class=\"chem\">He</span></th><td class=\"num\">4</td></tr><tr><th scope=\"row\">窒素 <span class=\"chem\">N2</span></th><td class=\"num\">77</td></tr><tr><th scope=\"row\">メタン <span class=\"chem\">CH4</span></th><td class=\"num\">112</td></tr><tr><th scope=\"row\">アンモニア <span class=\"chem\">NH3</span></th><td class=\"num\">240</td></tr></tbody></table></div><p>では、300 K、100 kPa で、理想気体のふるまいから<strong>最も</strong>大きくずれる (deviate)と考えられる気体はどれですか。</p>",
      options: [
        // EN: Helium
        "ヘリウム",
        // EN: Nitrogen
        "窒素",
        // EN: Methane
        "メタン",
        // EN: Ammonia
        "アンモニア",
      ],
      hints: [
        // EN: A higher boiling point means stronger forces between the particles.
        "沸点が高いほど、粒子の間にはたらく力が強いということです。",
        // EN: Which assumption of the ideal gas model is about forces?
        "理想気体モデルの仮定のうち、力についてのものはどれですか。",
      ],
      // EN: <p>Ammonia has the highest boiling point, so it has the strongest intermolecular forces. The ideal gas model assumes no intermolecular forces, so ammonia fits the model least well. At 300 K it is also the gas closest to its own boiling point.</p>
      solution: "<p>アンモニアは沸点が最も高いので、分子間力が最も強い物質です。理想気体モデルでは分子間力がないと仮定するので、アンモニアはモデルに最も合いません。また、300 K では、4 つの中で自分の沸点に最も近い気体でもあります。</p>",
      misconception: {
        // EN (option A): Helium has the lowest boiling point, so the weakest forces between its particles. It is the closest to ideal of the four.
        "0": "ヘリウムは沸点が最も低いので、粒子の間にはたらく力が最も弱い物質です。4 つの中で最も理想気体に近い気体です。",
        // EN (option B): Nitrogen boils at only 77 K, which shows its intermolecular forces are weak. At 300 K it behaves almost ideally.
        "1": "窒素の沸点はわずか 77 K で、分子間力が弱いことがわかります。300 K では、ほぼ理想気体としてふるまいます。",
        // EN (option C): Methane has stronger forces than helium or nitrogen, but another gas in the table has a much higher boiling point.
        "2": "メタンの分子間力は、ヘリウムや窒素より強いです。しかし、表にはもっとずっと沸点が高い気体があります。",
      },
    },

    // ── s1-5-q019 · short · exam · SL · Structure 1.5.2 · 2 marks
    "s1-5-q019": {
      // EN: <p>Explain why a real gas deviates from ideal gas behaviour at high pressure and at low temperature.</p>
      stem: "<p>実在気体が、高圧のときと低温のときに理想気体のふるまいからずれる理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Link each condition to one assumption of the ideal gas model that stops being true.
        "それぞれの条件を、成り立たなくなる理想気体モデルの仮定 1 つと結びつけましょう。",
      ],
      // EN: <p>At high pressure the particles are close together, so the volume of the particles themselves is no longer negligible compared with the volume of the container. At low temperature the particles have less kinetic energy and move more slowly, so the intermolecular forces between them become significant.</p>
      answer: "<p>高圧では粒子どうしが近いので、粒子そのものの体積が、容器の体積にくらべて無視できなくなります。低温では粒子の運動エネルギーが小さく、動きが遅いので、粒子の間の分子間力の影響が大きくなります。</p>",
      markscheme: [
        // EN: High pressure: particles are close together, so the volume of the particles is not negligible (compared with the volume of the gas/container).
        "高圧：粒子どうしが近いので、粒子の体積が（気体 / 容器の体積にくらべて）無視できない。",
        // EN: Low temperature: particles move more slowly / have lower kinetic energy, so intermolecular forces (attractions) become significant / are no longer negligible.
        "低温：粒子の動きが遅くなる / 運動エネルギーが小さくなるので、分子間力（引力）の影響が大きくなる / 無視できなくなる。",
      ],
    },

    // ── s1-5-q020 · short · exam · SL · Structure 1.5.1 · 2 marks
    "s1-5-q020": {
      // EN: <p>State <strong>two</strong> assumptions of the ideal gas model.</p>
      stem: "<p>理想気体モデルの仮定を <strong>2 つ</strong>述べなさい (state)。</p>",
      hints: [
        // EN: Tick any two of the four points. The maximum is 2 marks.
        "4 つのポイントのうち、どれか 2 つにチェックを入れます。最高で 2 点です。",
      ],
      // EN: <p>Any two of: the particles have negligible volume; there are no intermolecular forces between the particles; all collisions between particles are elastic; the gas consists of moving particles.</p>
      answer: "<p>次のうち 2 つ：粒子の体積は無視できるほど小さい。粒子の間に分子間力がはたらかない。粒子どうしの衝突はすべて弾性衝突である。気体は動いている粒子でできている。</p>",
      markscheme: [
        // EN: The particles have negligible volume (compared with the volume of the container). Do not accept “the gas has no volume”.
        "粒子の体積は（容器の体積にくらべて）無視できるほど小さい。「気体に体積がない」は認めない。",
        // EN: There are no intermolecular forces (no attractions or repulsions) between the particles.
        "粒子の間に分子間力（引力も反発力も）がはたらかない。",
        // EN: Collisions between particles are (perfectly) elastic / no kinetic energy is lost in collisions.
        "粒子どうしの衝突は（完全な）弾性衝突である / 衝突で運動エネルギーが失われない。",
        // EN: The gas consists of moving particles.
        "気体は動いている粒子でできている。",
      ],
    },

    // ── s1-5-q021 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q021": {
      // EN: <p>A student calculates the amount of gas in a 250 <span class="unit">cm3</span> flask at 101 kPa and 298 K. The student substitutes <span class="mono">P = 101</span>, <span class="mono">V = 250</span>, <span class="mono">R = 8.31</span> and <span class="mono">T = 298</span> into <span class="mono">n = PV ÷ RT</span>. How does the student’s answer compare with the correct amount?</p>
      stem: "<p>ある生徒が、101 kPa、298 K で 250 <span class=\"unit\">cm3</span> のフラスコに入った気体の物質量を計算します。生徒は <span class=\"mono\">n = PV ÷ RT</span> に <span class=\"mono\">P = 101</span>、<span class=\"mono\">V = 250</span>、<span class=\"mono\">R = 8.31</span>、<span class=\"mono\">T = 298</span> を代入しました。生徒の答えは、正しい物質量とくらべてどうなりますか。</p>",
      options: [
        // EN: It is correct.
        "正しい。",
        // EN: It is 1000 times too large.
        "1000 倍で、大きすぎる。",
        // EN: It is 1000 times too small.
        "1000 分の 1 で、小さすぎる。",
        // EN: It is 10<sup>6</sup> times too large.
        "10<sup>6</sup> 倍で、大きすぎる。",
      ],
      hints: [
        // EN: Which volume unit goes with kPa when R = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>?
        "R = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> を使うとき、kPa と組み合わせる体積の単位はどれですか。",
      ],
      // EN: <p>With pressure in kPa, the volume must be in dm<sup>3</sup>: 250 cm<sup>3</sup> = 0.250 dm<sup>3</sup>.</p><div class="worked__math">correct: n = (101 × 0.250) ÷ (8.31 × 298) = 0.0102 mol</div><div class="worked__math">student: n = (101 × 250) ÷ (8.31 × 298) = 10.2 mol</div><p>The student’s value is 1000 times too large. More than 10 mol of gas in a small flask is a warning sign.</p>
      solution: "<p>圧力が kPa なら、体積は dm<sup>3</sup> でなければなりません。250 cm<sup>3</sup> = 0.250 dm<sup>3</sup> です。</p><div class=\"worked__math\">正しい計算: n = (101 × 0.250) ÷ (8.31 × 298) = 0.0102 mol</div><div class=\"worked__math\">生徒の計算: n = (101 × 250) ÷ (8.31 × 298) = 10.2 mol</div><p>生徒の値は 1000 倍で、大きすぎます。小さなフラスコに 10 mol を超える気体が入っているという答えは、間違いのサインです。</p>",
      misconception: {
        // EN (option A): kPa must be paired with dm<sup>3</sup>. The volume here was left in cm<sup>3</sup>, so the units are not consistent.
        "0": "kPa には dm<sup>3</sup> を組み合わせます。ここでは体積が cm<sup>3</sup> のままなので、単位がそろっていません。",
        // EN (option C): The direction is wrong. V is on top of the fraction, and 250 is bigger than 0.250, so the answer comes out too large.
        "2": "向きが逆です。V は分数の分子にあり、250 は 0.250 より大きいので、答えは大きすぎる値になります。",
        // EN (option D): A factor of 10<sup>6</sup> is the difference between cm<sup>3</sup> and m<sup>3</sup>. With kPa the matching unit is dm<sup>3</sup>, which is 1000 cm<sup>3</sup>.
        "3": "10<sup>6</sup> 倍の違いは、cm<sup>3</sup> と m<sup>3</sup> の違いです。kPa に合う単位は dm<sup>3</sup> で、これは 1000 cm<sup>3</sup> です。",
      },
    },

    // ── s1-5-q022 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "s1-5-q022": {
      // EN: <p>The temperature of a fixed mass of an ideal gas, measured in kelvin, is doubled. At the same time its volume is halved. By what factor does the pressure change?</p>
      stem: "<p>一定量の理想気体の、ケルビンで表した温度を 2 倍にします。同時に、体積を半分にします。圧力は何倍になりますか。</p>",
      options: [
        // EN: × ¼
        "× ¼",
        // EN: × 1 (no change)
        "× 1（変化なし）",
        // EN: × 2
        "× 2",
        // EN: × 4
        "× 4",
      ],
      hints: [
        // EN: Rearrange the combined gas law for P<sub>2</sub>, then put in T<sub>2</sub> = 2T<sub>1</sub> and V<sub>2</sub> = ½V<sub>1</sub>.
        "ボイル・シャルルの法則 (combined gas law)の式を P<sub>2</sub> について変形し、T<sub>2</sub> = 2T<sub>1</sub> と V<sub>2</sub> = ½V<sub>1</sub> を代入します。",
      ],
      // EN: <div class="worked__math">P<sub>2</sub> = P<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) = P<sub>1</sub> × 2 × 2 = 4P<sub>1</sub></div>
      solution: "<div class=\"worked__math\">P<sub>2</sub> = P<sub>1</sub> × (V<sub>1</sub>/V<sub>2</sub>) × (T<sub>2</sub>/T<sub>1</sub>) = P<sub>1</sub> × 2 × 2 = 4P<sub>1</sub></div>",
      misconception: {
        // EN (option A): Both changes raise the pressure. You have inverted both effects.
        "0": "どちらの変化も圧力を上げます。両方の効果を逆にしています。",
        // EN (option B): The two changes do not cancel. Heating raises the pressure, and so does squeezing the gas into a smaller volume.
        "1": "2 つの変化は打ち消し合いません。加熱すると圧力は上がります。気体を小さな体積に押し縮めても、圧力は上がります。",
        // EN (option C): You have counted only one of the two changes. Each one doubles the pressure.
        "2": "2 つの変化のうち、1 つしか数えていません。それぞれが圧力を 2 倍にします。",
      },
    },

    // ── s1-5-q023 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q023": {
      // EN: <p>0.0500 mol of an ideal gas occupies 1.50 <span class="unit">dm3</span> at a pressure of 95.0 kPa. Calculate the temperature of the gas in <strong>°C</strong>.</p>
      stem: "<p>0.0500 mol の理想気体が、圧力 95.0 kPa で 1.50 <span class=\"unit\">dm3</span> を占めています。この気体の温度を <strong>°C</strong> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Rearrange <span class="mono">PV = nRT</span> for T. The answer comes out in kelvin.
        "<span class=\"mono\">PV = nRT</span> を T について変形します。答えはケルビンで出ます。",
        // EN: <span class="mono">T = (95.0 × 1.50) ÷ (0.0500 × 8.31)</span>, then subtract 273.15.
        "<span class=\"mono\">T = (95.0 × 1.50) ÷ (0.0500 × 8.31)</span>。そのあと 273.15 を引きます。",
      ],
      // EN: <div class="worked__math">T = PV ÷ nR = (95.0 kPa × 1.50 dm<sup>3</sup>) ÷ (0.0500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup>) = 342.96… K</div><div class="worked__math">T = 342.96… − 273.15 = 69.81… °C</div><p>To 3 significant figures: <strong>69.8 °C</strong>.</p>
      solution: "<div class=\"worked__math\">T = PV ÷ nR = (95.0 kPa × 1.50 dm<sup>3</sup>) ÷ (0.0500 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup>) = 342.96… K</div><div class=\"worked__math\">T = 342.96… − 273.15 = 69.81… °C</div><p>有効数字 3 桁で <strong>69.8 °C</strong> です。</p>",
    },

    // ── s1-5-q024 · order · exam · SL · Structure 1.5.4 · 2 marks
    "s1-5-q024": {
      // EN: <p>A student measures the mass of a volatile liquid, and the volume, temperature and pressure of its vapour. Put the steps in order to find the molecular formula from these data and the empirical formula.</p>
      stem: "<p>ある生徒が、揮発性の液体の質量と、その蒸気の体積・温度・圧力を測定しました。これらのデータと組成式 (empirical formula)から分子式を求める手順を、正しい順に並べなさい。</p>",
      options: [
        // EN: Convert the temperature to kelvin and the volume to dm<sup>3</sup> (pressure in kPa).
        "温度をケルビンに、体積を dm<sup>3</sup> に換算する（圧力は kPa）。",
        // EN: Calculate the amount of vapour using <span class="mono">n = PV ÷ RT</span>.
        "<span class=\"mono\">n = PV ÷ RT</span> を使って、蒸気の物質量を計算する。",
        // EN: Calculate the molar mass using <span class="mono">M = m ÷ n</span>.
        "<span class=\"mono\">M = m ÷ n</span> を使って、モル質量を計算する。",
        // EN: Divide the molar mass by the mass of one empirical formula unit.
        "モル質量を、組成式 1 単位分の質量（組成式の式量）で割る。",
        // EN: Multiply the subscripts in the empirical formula by the whole number obtained.
        "組成式の添え字に、得られた整数をかける。",
      ],
      hints: [
        // EN: You cannot use the gas equation until the units are consistent.
        "単位がそろうまでは、気体の状態方程式は使えません。",
        // EN: The molar mass needs the amount of vapour, and the amount comes from the gas equation.
        "モル質量を求めるには、蒸気の物質量が必要です。物質量は、気体の状態方程式から求めます。",
      ],
      // EN: <p>Units first, then the gas equation for the amount, then molar mass from mass ÷ amount. Comparing the molar mass with the empirical formula mass gives the whole-number multiple that turns the empirical formula into the molecular formula.</p>
      solution: "<p>まず単位、次に気体の状態方程式で物質量、そして「質量 ÷ 物質量」でモル質量を求めます。モル質量を組成式の式量とくらべると、組成式を分子式に変える整数倍がわかります。</p>",
    },

    // ── s1-5-q025 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q025": {
      // EN: <p>Which sample of gas occupies the largest volume at STP?</p>
      stem: "<p>STP で最も大きい体積を占める気体の試料はどれですか。</p>",
      options: [
        // EN: 4.0 g of hydrogen, <span class="chem">H2</span>
        "水素 <span class=\"chem\">H2</span> 4.0 g",
        // EN: 28.0 g of nitrogen, <span class="chem">N2</span>
        "窒素 <span class=\"chem\">N2</span> 28.0 g",
        // EN: 44.0 g of carbon dioxide, <span class="chem">CO2</span>
        "二酸化炭素 <span class=\"chem\">CO2</span> 44.0 g",
        // EN: 40.0 g of argon, <span class="chem">Ar</span>
        "アルゴン <span class=\"chem\">Ar</span> 40.0 g",
      ],
      hints: [
        // EN: At the same temperature and pressure, volume depends only on the amount of gas in moles.
        "温度と圧力が同じなら、体積は気体の物質量（mol）だけで決まります。",
        // EN: Work out <span class="mono">n = m ÷ M</span> for each sample.
        "それぞれの試料について、<span class=\"mono\">n = m ÷ M</span> を計算しましょう。",
      ],
      // EN: <div class="worked__math">H<sub>2</sub>: 4.0 g ÷ 2.02 g mol<sup>−1</sup> = 1.98 mol</div><div class="worked__math">N<sub>2</sub>: 28.0 ÷ 28.02 = 1.00 mol; &nbsp; CO<sub>2</sub>: 44.0 ÷ 44.01 = 1.00 mol; &nbsp; Ar: 40.0 ÷ 39.95 = 1.00 mol</div><p>Hydrogen has about twice the amount, so about twice the volume (about 45 dm<sup>3</sup> against about 22.7 dm<sup>3</sup>).</p>
      solution: "<div class=\"worked__math\">H<sub>2</sub>: 4.0 g ÷ 2.02 g mol<sup>−1</sup> = 1.98 mol</div><div class=\"worked__math\">N<sub>2</sub>: 28.0 ÷ 28.02 = 1.00 mol; &nbsp; CO<sub>2</sub>: 44.0 ÷ 44.01 = 1.00 mol; &nbsp; Ar: 40.0 ÷ 39.95 = 1.00 mol</div><p>水素は物質量が約 2 倍なので、体積も約 2 倍です（約 22.7 dm<sup>3</sup> に対して、約 45 dm<sup>3</sup>）。</p>",
      misconception: {
        // EN (option B): Gas volume depends on the amount in moles, not on the mass. 28.0 g of N<sub>2</sub> is about 1 mol.
        "1": "気体の体積は、質量ではなく物質量（mol）で決まります。N<sub>2</sub> 28.0 g は約 1 mol です。",
        // EN (option C): The largest mass does not mean the largest volume. 44.0 g of CO<sub>2</sub> is about 1 mol, and bigger molecules do not take up more room in an ideal gas.
        "2": "質量が最も大きくても、体積が最も大きいとは限りません。CO<sub>2</sub> 44.0 g は約 1 mol です。また、理想気体では、分子が大きくても、占める空間は大きくなりません。",
        // EN (option D): 40.0 g of argon is about 1 mol. Another sample contains about twice that amount.
        "3": "アルゴン 40.0 g は約 1 mol です。その約 2 倍の物質量を含む試料が、ほかにあります。",
      },
    },

    // ── s1-5-q026 · multi · exam · SL · Structure 1.5.3 · 1 mark
    "s1-5-q026": {
      // EN: <p>Select <strong>all</strong> the graphs that are straight lines through the origin for a fixed mass of an ideal gas.</p>
      stem: "<p>一定量の理想気体について、原点を通る直線になるグラフを<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: P against 1/V, at constant temperature
        "縦軸 P・横軸 1/V（温度が一定）",
        // EN: P against V, at constant temperature
        "縦軸 P・横軸 V（温度が一定）",
        // EN: V against T in kelvin, at constant pressure
        "縦軸 V・横軸 ケルビンで表した T（圧力が一定）",
        // EN: V against T in °C, at constant pressure
        "縦軸 V・横軸 °C で表した T（圧力が一定）",
        // EN: P against T in kelvin, at constant volume
        "縦軸 P・横軸 ケルビンで表した T（体積が一定）",
        // EN: PV against P, at constant temperature
        "縦軸 PV・横軸 P（温度が一定）",
      ],
      hints: [
        // EN: A straight line through the origin means direct proportion.
        "原点を通る直線は、比例を意味します。",
        // EN: There are three correct answers.
        "正しい答えは 3 つあります。",
      ],
      // EN: <p>From <span class="mono">PV = nRT</span>: P ∝ 1/V at constant T; V ∝ T (in K) at constant P; P ∝ T (in K) at constant V. Each of these direct proportions plots as a straight line through the origin.</p>
      solution: "<p><span class=\"mono\">PV = nRT</span> から、T が一定なら P ∝ 1/V、P が一定なら V ∝ T（K で表す）、V が一定なら P ∝ T（K で表す）です。これらの比例関係は、どれも原点を通る直線になります。</p>",
      misconception: {
        // EN (option B): P against V is a curve. The inverse relationship only becomes a straight line when you plot P against 1/V.
        "1": "縦軸 P・横軸 V のグラフは曲線です。反比例の関係が直線になるのは、縦軸 P・横軸 1/V でプロットしたときだけです。",
        // EN (option D): A straight line, but not through the origin: at 0 °C the gas still has a volume. The line meets the temperature axis at −273.15 °C.
        "3": "直線ですが、原点は通りません。0 °C でも気体には体積があります。直線は −273.15 °C で温度の軸と交わります。",
        // EN (option F): PV does not change at constant temperature, so this is a horizontal line.
        "5": "温度が一定なら PV は変わらないので、これは水平な直線です。",
      },
    },

    // ── s1-5-q031 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "s1-5-q031": {
      // EN: <p>The molar volume of an ideal gas is 22.7 <span class="unit">dm3 mol-1</span> at STP. Use the ideal gas equation to calculate the molar volume of an ideal gas, in <span class="unit">dm3 mol-1</span>, at 25.0 °C and 100 kPa.</p>
      stem: "<p>理想気体のモル体積は、STP で 22.7 <span class=\"unit\">dm3 mol-1</span> です。理想気体の状態方程式を使って、25.0 °C、100 kPa での理想気体のモル体積を <span class=\"unit\">dm3 mol-1</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Molar volume is the volume of exactly 1 mol. Put n = 1 mol into <span class="mono">V = nRT ÷ P</span>.
        "モル体積は、ちょうど 1 mol の体積です。<span class=\"mono\">V = nRT ÷ P</span> に n = 1 mol を代入します。",
        // EN: <span class="mono">V = (1 × 8.31 × 298.15) ÷ 100</span>
        "<span class=\"mono\">V = (1 × 8.31 × 298.15) ÷ 100</span>",
      ],
      // EN: <div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 24.77… dm<sup>3</sup></div><p>Molar volume = <strong>24.8 dm<sup>3</sup> mol<sup>−1</sup></strong>. It is larger than 22.7 because the gas is warmer. This is why 22.7 can only be used at STP.</p>
      solution: "<div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">V = (1 mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 24.77… dm<sup>3</sup></div><p>モル体積 = <strong>24.8 dm<sup>3</sup> mol<sup>−1</sup></strong>。気体の温度が高いので、22.7 より大きくなります。22.7 が STP でしか使えないのは、このためです。</p>",
    },

    // ── s1-5-q035 · short · exam · SL · Structure 1.5.3 · 2 marks
    "s1-5-q035": {
      // EN: <p>The volume of a fixed mass of gas is measured at several temperatures between 0 °C and 100 °C at constant pressure. Describe the graph of volume against temperature in °C, and state what is found when the line is extrapolated to zero volume.</p>
      stem: "<p>一定量の気体の体積を、圧力一定のもとで、0 °C から 100 °C の間のいくつかの温度で測定します。縦軸に体積、横軸に °C で表した温度をとったグラフを記述しなさい (describe)。また、直線を体積ゼロまで外挿するとわかることを述べなさい (state)。</p>",
      hints: [
        // EN: Is the volume zero at 0 °C?
        "0 °C で、体積はゼロですか。",
        // EN: What is special about −273.15 °C?
        "−273.15 °C は、どんな特別な温度ですか。",
      ],
      // EN: <p>The graph is a straight line with a positive gradient that does not pass through the origin (the volume is not zero at 0 °C). Extrapolated back, the line reaches zero volume at about −273 °C, which is absolute zero (0 K).</p>
      answer: "<p>グラフは傾きが正の直線で、原点を通りません（0 °C で体積はゼロではありません）。左へ外挿すると、直線は約 −273 °C で体積ゼロに達します。これが絶対零度（0 K）です。</p>",
      markscheme: [
        // EN: Straight line with positive gradient / volume increases linearly with temperature, not passing through the origin (positive intercept on the volume axis).
        "傾きが正の直線 / 体積は温度とともに直線的に大きくなる。原点は通らない（体積の軸に正の切片がある）。",
        // EN: Extrapolates to zero volume at −273(.15) °C / absolute zero / 0 K.
        "外挿すると、−273(.15) °C / 絶対零度 / 0 K で体積がゼロになる。",
      ],
    },

    // ── s1-5-q027 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q027": {
      // EN: <p>A compound contains 52.2 % carbon, 13.1 % hydrogen and 34.7 % oxygen by mass. When 0.230 g of the compound is vaporised at 100.0 °C and 100 kPa, the vapour occupies 155 <span class="unit">cm3</span>.</p><p>Calculate the molar mass of the compound, in <span class="unit">g mol-1</span>. Then use the solution to check that you can also deduce its molecular formula.</p>
      stem: "<p>ある化合物は、質量で炭素 52.2 %、水素 13.1 %、酸素 34.7 % を含みます。この化合物 0.230 g を 100.0 °C、100 kPa で気化させると、蒸気は 155 <span class=\"unit\">cm3</span> を占めます。</p><p>この化合物のモル質量を <span class=\"unit\">g mol-1</span> で計算しなさい (calculate)。そのあと解答を見て、分子式も導ける (deduce)かどうか確かめましょう。</p>",
      hints: [
        // EN: The molar mass comes from the gas data alone: find n with the gas equation, then M = m ÷ n.
        "モル質量は、気体のデータだけで求められます。気体の状態方程式で n を求め、M = m ÷ n を使います。",
        // EN: <span class="mono">n = (100 × 0.155) ÷ (8.31 × 373.15)</span>
        "<span class=\"mono\">n = (100 × 0.155) ÷ (8.31 × 373.15)</span>",
        // EN: For the formula: find the empirical formula from the percentages, then compare its mass with M.
        "分子式を求めるには、百分率から組成式を求め、その式量を M とくらべます。",
      ],
      // EN: <div class="worked__math">V = 155 cm<sup>3</sup> ÷ 1000 = 0.155 dm<sup>3</sup>; &nbsp; T = 100.0 + 273.15 = 373.15 K</div><div class="worked__math">n = (100 kPa × 0.155 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 373.15 K) = 0.0049985… mol</div><div class="worked__math">M = 0.230 g ÷ 0.0049985… mol = 46.01… g mol<sup>−1</sup> = <b>46.0 g mol<sup>−1</sup></b></div><p>Molecular formula: in 100 g there are</p><div class="worked__math">C: 52.2 ÷ 12.01 = 4.346 mol; &nbsp; H: 13.1 ÷ 1.01 = 12.97 mol; &nbsp; O: 34.7 ÷ 16.00 = 2.169 mol</div><div class="worked__math">divide by 2.169: C 2.00 : H 5.98 : O 1.00, so the empirical formula is C<sub>2</sub>H<sub>6</sub>O (46.08 g mol<sup>−1</sup>)</div><p>46.0 ÷ 46.08 ≈ 1, so the molecular formula is also <strong>C<sub>2</sub>H<sub>6</sub>O</strong>.</p>
      solution: "<div class=\"worked__math\">V = 155 cm<sup>3</sup> ÷ 1000 = 0.155 dm<sup>3</sup>; &nbsp; T = 100.0 + 273.15 = 373.15 K</div><div class=\"worked__math\">n = (100 kPa × 0.155 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 373.15 K) = 0.0049985… mol</div><div class=\"worked__math\">M = 0.230 g ÷ 0.0049985… mol = 46.01… g mol<sup>−1</sup> = <b>46.0 g mol<sup>−1</sup></b></div><p>分子式：100 g の中には、次の物質量が含まれます。</p><div class=\"worked__math\">C: 52.2 ÷ 12.01 = 4.346 mol; &nbsp; H: 13.1 ÷ 1.01 = 12.97 mol; &nbsp; O: 34.7 ÷ 16.00 = 2.169 mol</div><div class=\"worked__math\">2.169 で割ると: C 2.00 : H 5.98 : O 1.00 なので、組成式は C<sub>2</sub>H<sub>6</sub>O (46.08 g mol<sup>−1</sup>)</div><p>46.0 ÷ 46.08 ≈ 1 なので、分子式も <strong>C<sub>2</sub>H<sub>6</sub>O</strong> です。</p>",
    },

    // ── s1-5-q028 · mcq · challenge · SL · Structure 1.5.4 · 2 marks
    "s1-5-q028": {
      // EN: <p>A gaseous hydrocarbon has the empirical formula <span class="chem">CH2</span>. A 1.40 g sample occupies 0.755 <span class="unit">dm3</span> at 91.0 °C and 100 kPa. What is the molecular formula of the hydrocarbon?</p>
      stem: "<p>ある気体の炭化水素の組成式 (empirical formula)は <span class=\"chem\">CH2</span> です。この試料 1.40 g は、91.0 °C、100 kPa で 0.755 <span class=\"unit\">dm3</span> を占めます。この炭化水素の分子式はどれですか。</p>",
      options: [
        // EN: <span class="chem">CH2</span>
        "<span class=\"chem\">CH2</span>",
        // EN: <span class="chem">C2H4</span>
        "<span class=\"chem\">C2H4</span>",
        // EN: <span class="chem">C3H6</span>
        "<span class=\"chem\">C3H6</span>",
        // EN: <span class="chem">C4H8</span>
        "<span class=\"chem\">C4H8</span>",
      ],
      hints: [
        // EN: The conditions are not STP, so find the amount with <span class="mono">n = PV ÷ RT</span>.
        "条件は STP ではないので、<span class=\"mono\">n = PV ÷ RT</span> で物質量を求めます。",
        // EN: Then M = m ÷ n, and compare M with the mass of one CH<sub>2</sub> unit, 14.03 g mol<sup>−1</sup>.
        "次に M = m ÷ n を計算し、M を CH<sub>2</sub> 1 単位分の質量 14.03 g mol<sup>−1</sup> とくらべます。",
      ],
      // EN: <div class="worked__math">T = 91.0 + 273.15 = 364.15 K</div><div class="worked__math">n = (100 kPa × 0.755 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 364.15 K) = 0.024949… mol</div><div class="worked__math">M = 1.40 g ÷ 0.024949… mol = 56.11… g mol<sup>−1</sup></div><div class="worked__math">56.11… ÷ 14.03 = 4.00, so the molecular formula is (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub></div>
      solution: "<div class=\"worked__math\">T = 91.0 + 273.15 = 364.15 K</div><div class=\"worked__math\">n = (100 kPa × 0.755 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 364.15 K) = 0.024949… mol</div><div class=\"worked__math\">M = 1.40 g ÷ 0.024949… mol = 56.11… g mol<sup>−1</sup></div><div class=\"worked__math\">56.11… ÷ 14.03 = 4.00 なので、分子式は (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub></div>",
      misconception: {
        // EN (option A): A molar mass of about 14 g mol<sup>−1</sup> comes from putting 91.0 into the equation as the temperature. Convert to kelvin first: 91.0 °C = 364.15 K.
        "0": "モル質量が約 14 g mol<sup>−1</sup> になるのは、温度として 91.0 をそのまま式に入れたときです。先にケルビンに換算しましょう。91.0 °C = 364.15 K です。",
        // EN (option B): The molar mass is about 56 g mol<sup>−1</sup>. Divide by the mass of one CH<sub>2</sub> unit (14.03 g mol<sup>−1</sup>), which gives 4 units, not 2.
        "1": "モル質量は約 56 g mol<sup>−1</sup> です。CH<sub>2</sub> 1 単位分の質量（14.03 g mol<sup>−1</sup>）で割ると、2 単位ではなく 4 単位になります。",
        // EN (option C): You get 42 g mol<sup>−1</sup> if you use 22.7 dm<sup>3</sup> mol<sup>−1</sup> to find the amount. That value applies only at STP, and this gas is at 91.0 °C. Use the gas equation.
        "2": "物質量を求めるのに 22.7 dm<sup>3</sup> mol<sup>−1</sup> を使うと、42 g mol<sup>−1</sup> になります。この値が使えるのは STP のときだけで、この気体は 91.0 °C です。気体の状態方程式を使いましょう。",
      },
    },

    // ── s1-5-q029 · numeric · challenge · SL · Structure 1.5.4 · 2 marks
    "s1-5-q029": {
      // EN: <p>A gas has a density of 1.25 <span class="unit">g dm-3</span> at 25.0 °C and 100 kPa. Calculate the molar mass of the gas, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>ある気体の密度は、25.0 °C、100 kPa で 1.25 <span class=\"unit\">g dm-3</span> です。この気体のモル質量を <span class=\"unit\">g mol-1</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: A density of 1.25 g dm<sup>−3</sup> means that 1.00 dm<sup>3</sup> of the gas has a mass of 1.25 g.
        "密度 1.25 g dm<sup>−3</sup> は、この気体 1.00 dm<sup>3</sup> の質量が 1.25 g という意味です。",
        // EN: Find the amount of gas in 1.00 dm<sup>3</sup> with <span class="mono">n = PV ÷ RT</span>, then use M = m ÷ n.
        "<span class=\"mono\">n = PV ÷ RT</span> で 1.00 dm<sup>3</sup> 中の気体の物質量を求め、次に M = m ÷ n を使います。",
      ],
      // EN: <p>Take exactly 1.00 dm<sup>3</sup> of the gas. Its mass is 1.25 g.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = (100 kPa × 1.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.040361… mol</div><div class="worked__math">M = 1.25 g ÷ 0.040361… mol = 30.97… g mol<sup>−1</sup></div><p>To 3 significant figures: <strong>31.0 g mol<sup>−1</sup></strong>.</p>
      solution: "<p>この気体を、ちょうど 1.00 dm<sup>3</sup> とります。その質量は 1.25 g です。</p><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">n = (100 kPa × 1.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.040361… mol</div><div class=\"worked__math\">M = 1.25 g ÷ 0.040361… mol = 30.97… g mol<sup>−1</sup></div><p>有効数字 3 桁で <strong>31.0 g mol<sup>−1</sup></strong> です。</p>",
    },

    // ── s1-5-q030 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q030": {
      // EN: <p>Sodium azide decomposes completely when heated:</p><p><span class="chem">2NaN3(s) -> 2Na(s) + 3N2(g)</span></p><p>Calculate the volume of nitrogen, in <span class="unit">dm3</span>, measured at 25.0 °C and 100 kPa, that is produced when 65.0 g of sodium azide decomposes.</p>
      stem: "<p>アジ化ナトリウム (sodium azide)は、加熱すると完全に分解します。</p><p><span class=\"chem\">2NaN3(s) -> 2Na(s) + 3N2(g)</span></p><p>65.0 g のアジ化ナトリウムが分解するときに生じる窒素の体積を、25.0 °C、100 kPa で測定した値として、<span class=\"unit\">dm3</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Start with the amount of sodium azide: <span class="mono">n = m ÷ M</span>, with M(NaN<sub>3</sub>) = 22.99 + 3(14.01).
        "まずアジ化ナトリウムの物質量を求めます：<span class=\"mono\">n = m ÷ M</span>。M(NaN<sub>3</sub>) = 22.99 + 3(14.01) です。",
        // EN: The equation says 2 mol of NaN<sub>3</sub> gives 3 mol of N<sub>2</sub>.
        "化学反応式から、2 mol の NaN<sub>3</sub> から 3 mol の N<sub>2</sub> が生じるとわかります。",
        // EN: The gas is not at STP (25.0 °C), so use <span class="mono">V = nRT ÷ P</span>.
        "気体は STP ではない（25.0 °C）ので、<span class=\"mono\">V = nRT ÷ P</span> を使います。",
      ],
      // EN: <div class="worked__math">M(NaN<sub>3</sub>) = 22.99 + 3(14.01) = 65.02 g mol<sup>−1</sup></div><div class="worked__math">n(NaN<sub>3</sub>) = 65.0 g ÷ 65.02 g mol<sup>−1</sup> = 0.99969… mol</div><div class="worked__math">n(N<sub>2</sub>) = 0.99969… × 3/2 = 1.4995… mol</div><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">V = (1.4995… mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 37.15… dm<sup>3</sup></div><p>To 3 significant figures: <strong>37.2 dm<sup>3</sup></strong>. Using 22.7 dm<sup>3</sup> mol<sup>−1</sup> would give 34.0 dm<sup>3</sup>, which is wrong because the gas is not at STP.</p>
      solution: "<div class=\"worked__math\">M(NaN<sub>3</sub>) = 22.99 + 3(14.01) = 65.02 g mol<sup>−1</sup></div><div class=\"worked__math\">n(NaN<sub>3</sub>) = 65.0 g ÷ 65.02 g mol<sup>−1</sup> = 0.99969… mol</div><div class=\"worked__math\">n(N<sub>2</sub>) = 0.99969… × 3/2 = 1.4995… mol</div><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">V = (1.4995… mol × 8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) ÷ 100 kPa = 37.15… dm<sup>3</sup></div><p>有効数字 3 桁で <strong>37.2 dm<sup>3</sup></strong> です。22.7 dm<sup>3</sup> mol<sup>−1</sup> を使うと 34.0 dm<sup>3</sup> になりますが、気体が STP にないので間違いです。</p>",
    },

    // ── s1-5-q032 · short · challenge · SL · Structure 1.5.2 · 3 marks
    "s1-5-q032": {
      // EN: <p>Helium boils at 4 K and ammonia boils at 240 K (both at 100 kPa). At 250 K and 100 kPa, the measured volume of 1 mol of helium agrees very closely with the value predicted by <span class="mono">PV = nRT</span>. The measured volume of 1 mol of ammonia does not agree as closely.</p><p>Explain this difference, referring to the assumptions of the ideal gas model.</p>
      stem: "<p>ヘリウムの沸点は 4 K、アンモニアの沸点は 240 K です（どちらも 100 kPa）。250 K、100 kPa で、ヘリウム 1 mol の体積の測定値は、<span class=\"mono\">PV = nRT</span> から予測される値ととてもよく一致します。アンモニア 1 mol の体積の測定値は、それほどよく一致しません。</p><p>理想気体モデルの仮定にふれながら、この違いを説明しなさい (explain)。</p>",
      hints: [
        // EN: What does a boiling point tell you about the forces between particles?
        "沸点から、粒子の間にはたらく力について何がわかりますか。",
        // EN: How far above its own boiling point is each gas at 250 K?
        "250 K は、それぞれの気体の沸点よりどれくらい高い温度ですか。",
      ],
      // EN: <p>The much higher boiling point of ammonia shows that the intermolecular forces between ammonia molecules are much stronger than those between helium atoms. The ideal gas model assumes there are no intermolecular forces, so this assumption is less valid for ammonia. At 250 K ammonia is only just above its boiling point, so its particles are moving slowly enough for these forces to be significant, whereas helium is far above its boiling point and its very weak forces are negligible.</p>
      answer: "<p>アンモニアの沸点はずっと高いので、アンモニア分子の間の分子間力は、ヘリウム原子の間の力よりずっと強いことがわかります。理想気体モデルは分子間力がないと仮定するので、この仮定はアンモニアには当てはまりにくくなります。250 K は、アンモニアにとっては沸点をわずかに上回るだけの温度です。そのため、粒子の動きが遅く、分子間力の影響が大きくなります。一方、ヘリウムは沸点よりはるかに高い温度にあるので、そのとても弱い力は無視できます。</p>",
      markscheme: [
        // EN: Ammonia has (much) stronger intermolecular forces than helium (shown by its higher boiling point).
        "アンモニアの分子間力は、ヘリウムより（ずっと）強い（沸点が高いことからわかる）。",
        // EN: The ideal gas model assumes no intermolecular forces (and negligible particle volume), so the assumption is less valid for ammonia.
        "理想気体モデルは、分子間力がない（そして粒子の体積は無視できるほど小さい）と仮定する。そのため、この仮定はアンモニアには当てはまりにくい。",
        // EN: 250 K is a low temperature for ammonia / close to its boiling point, so its particles are slow enough for the forces to be significant; helium is far above its boiling point so its forces are negligible.
        "250 K はアンモニアにとっては低温 / 沸点に近いので、粒子の動きが遅く、分子間力の影響が大きい。ヘリウムは沸点よりはるかに高い温度にあるので、力は無視できる。",
      ],
    },

    // ── s1-5-q033 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q033": {
      // EN: <p>In dry air, 0.934 % of the particles are argon atoms. This means 0.934 % of the total amount of gas, in mol, is argon. A 2.00 <span class="unit">dm3</span> flask is filled with dry air at 20.0 °C and 101 kPa. Calculate the mass of argon in the flask, in g.</p>
      stem: "<p>乾燥空気では、粒子の 0.934 % がアルゴン原子です。つまり、気体全体の物質量（mol）の 0.934 % がアルゴンです。2.00 <span class=\"unit\">dm3</span> のフラスコを、20.0 °C、101 kPa の乾燥空気で満たします。フラスコ内のアルゴンの質量を g で計算しなさい (calculate)。</p>",
      hints: [
        // EN: First find the total amount of gas in the flask with <span class="mono">n = PV ÷ RT</span>.
        "まず <span class=\"mono\">n = PV ÷ RT</span> で、フラスコ内の気体全体の物質量を求めます。",
        // EN: 0.934 % of that amount is argon: multiply by 0.00934.
        "その物質量の 0.934 % がアルゴンです。0.00934 をかけます。",
        // EN: Then <span class="mono">m = n × M</span> with <i>A</i><sub>r</sub>(Ar) = 39.95.
        "次に <span class=\"mono\">m = n × M</span> を使います。<i>A</i><sub>r</sub>(Ar) = 39.95 です。",
      ],
      // EN: <div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(air) = (101 kPa × 2.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.082920… mol</div><div class="worked__math">n(Ar) = 0.082920… mol × 0.934 ÷ 100 = 7.7447… × 10<sup>−4</sup> mol</div><div class="worked__math">m(Ar) = 7.7447… × 10<sup>−4</sup> mol × 39.95 g mol<sup>−1</sup> = 0.030940… g</div><p>To 3 significant figures: <strong>0.0309 g</strong>.</p>
      solution: "<div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">n(空気) = (101 kPa × 2.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.082920… mol</div><div class=\"worked__math\">n(Ar) = 0.082920… mol × 0.934 ÷ 100 = 7.7447… × 10<sup>−4</sup> mol</div><div class=\"worked__math\">m(Ar) = 7.7447… × 10<sup>−4</sup> mol × 39.95 g mol<sup>−1</sup> = 0.030940… g</div><p>有効数字 3 桁で <strong>0.0309 g</strong> です。</p>",
    },

    // ── s1-5-q034 · numeric · challenge · SL · Structure 1.5.4 · 3 marks
    "s1-5-q034": {
      // EN: <p>A rigid 5.00 <span class="unit">dm3</span> cylinder contains gas at 300 kPa and 20.0 °C. Some gas is released until the pressure falls to 180 kPa. The temperature is still 20.0 °C. Calculate the amount of gas, in mol, that was released.</p>
      stem: "<p>変形しない 5.00 <span class=\"unit\">dm3</span> のボンベに、300 kPa、20.0 °C の気体が入っています。圧力が 180 kPa に下がるまで、気体の一部を放出します。温度は 20.0 °C のままです。放出された気体の物質量を mol で計算しなさい (calculate)。</p>",
      hints: [
        // EN: The amount of gas changes, so the combined gas law does not apply. Use <span class="mono">n = PV ÷ RT</span> before and after.
        "気体の物質量が変わるので、ボイル・シャルルの法則 (combined gas law)は使えません。放出の前と後に、それぞれ <span class=\"mono\">n = PV ÷ RT</span> を使います。",
        // EN: Shortcut: V and T are the same before and after, so the amount released is <span class="mono">(300 − 180) × 5.00 ÷ (8.31 × 293.15)</span>.
        "近道：V と T は前と後で同じなので、放出された物質量は <span class=\"mono\">(300 − 180) × 5.00 ÷ (8.31 × 293.15)</span> です。",
      ],
      // EN: <div class="worked__math">T = 20.0 + 273.15 = 293.15 K</div><div class="worked__math">n(before) = (300 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.61574… mol</div><div class="worked__math">n(after) = (180 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.36944… mol</div><div class="worked__math">n(released) = 0.61574… − 0.36944… = 0.24629… mol</div><p>To 3 significant figures: <strong>0.246 mol</strong>.</p>
      solution: "<div class=\"worked__math\">T = 20.0 + 273.15 = 293.15 K</div><div class=\"worked__math\">n(前) = (300 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.61574… mol</div><div class=\"worked__math\">n(後) = (180 kPa × 5.00 dm<sup>3</sup>) ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 293.15 K) = 0.36944… mol</div><div class=\"worked__math\">n(放出) = 0.61574… − 0.36944… = 0.24629… mol</div><p>有効数字 3 桁で <strong>0.246 mol</strong> です。</p>",
    },

    // ── s1-5-q036 · numeric · challenge · SL · Structure 1.5.3 · 2 marks
    "s1-5-q036": {
      // EN: <p>A student changes the volume of a fixed mass of gas at a constant temperature of 25.0 °C and measures the pressure each time. A graph of pressure in kPa (vertical axis) against 1/volume in <span class="unit">dm-3</span> (horizontal axis) is a straight line through the origin. Its gradient is 62.0 <span class="unit">kPa dm3</span>.</p><p>Calculate the amount of gas, in mol.</p>
      stem: "<p>ある生徒が、25.0 °C の一定温度で一定量の気体の体積を変え、そのたびに圧力を測定します。kPa で表した圧力（縦軸）と、<span class=\"unit\">dm-3</span> で表した 1/体積（横軸）のグラフは、原点を通る直線になりました。傾きは 62.0 <span class=\"unit\">kPa dm3</span> です。</p><p>気体の物質量を mol で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Write <span class="mono">PV = nRT</span> as P = (something) × (1/V). The “something” is the gradient.
        "<span class=\"mono\">PV = nRT</span> を P = (何か) × (1/V) の形に書きます。この「何か」が傾きです。",
        // EN: The gradient is nRT, so <span class="mono">n = gradient ÷ RT</span>. Use T in kelvin.
        "傾きは nRT なので、<span class=\"mono\">n = 傾き ÷ RT</span> です。T はケルビンを使います。",
      ],
      // EN: <p>From <span class="mono">PV = nRT</span>, P = nRT × (1/V). So a graph of P against 1/V has gradient nRT.</p><div class="worked__math">T = 25.0 + 273.15 = 298.15 K</div><div class="worked__math">n = gradient ÷ RT = 62.0 kPa dm<sup>3</sup> ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.025023… mol</div><p>To 3 significant figures: <strong>0.0250 mol</strong>. kPa × dm<sup>3</sup> = J, so the units match R.</p>
      solution: "<p><span class=\"mono\">PV = nRT</span> から、P = nRT × (1/V) です。だから、縦軸 P・横軸 1/V のグラフの傾きは nRT です。</p><div class=\"worked__math\">T = 25.0 + 273.15 = 298.15 K</div><div class=\"worked__math\">n = 傾き ÷ RT = 62.0 kPa dm<sup>3</sup> ÷ (8.31 J K<sup>−1</sup> mol<sup>−1</sup> × 298.15 K) = 0.025023… mol</div><p>有効数字 3 桁で <strong>0.0250 mol</strong> です。kPa × dm<sup>3</sup> = J なので、単位は R と合います。</p>",
    },

  }
});
