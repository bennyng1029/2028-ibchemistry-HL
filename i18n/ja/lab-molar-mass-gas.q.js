/* lab-molar-mass-gas.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-molar-mass-gas.q', {
  questions: {

    // ── lab-molar-mass-gas-q001 · numeric · foundation · SL · Structure 1.4.6 · 2 marks
    "lab-molar-mass-gas-q001": {
      // EN: <p>0.0850 g of magnesium reacts with excess hydrochloric acid.</p><p><span class="chem">Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)</span></p><p>Calculate the volume of hydrogen produced at STP, in <span class="unit">cm3</span>.</p>
      stem: "<p>マグネシウム 0.0850 g が過剰の塩酸と反応します。</p><p><span class=\"chem\">Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)</span></p><p>STP で発生する水素の体積を <span class=\"unit\">cm3</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Find the amount of magnesium. The equation gives the amount of hydrogen.
        "マグネシウムの物質量を求めましょう。反応式から水素の物質量がわかります。",
        // EN: At STP one mole of an ideal gas occupies 22.7 dm³.
        "STP では、理想気体 1 mol の体積は 22.7 dm³ です。",
      ],
      // EN: <div class="worked__math"><i>n</i>(Mg) = 0.0850 ÷ 24.31 = 3.497 × 10<sup>−3</sup> mol = <i>n</i>(H<sub>2</sub>)</div><div class="worked__math"><i>V</i> = 3.497 × 10<sup>−3</sup> × 22.7 = 0.0794 dm<sup>3</sup> = 79.4 cm<sup>3</sup></div>
      solution: "<div class=\"worked__math\"><i>n</i>(Mg) = 0.0850 ÷ 24.31 = 3.497 × 10<sup>−3</sup> mol = <i>n</i>(H<sub>2</sub>)</div><div class=\"worked__math\"><i>V</i> = 3.497 × 10<sup>−3</sup> × 22.7 = 0.0794 dm<sup>3</sup> = 79.4 cm<sup>3</sup></div>",
    },

    // ── lab-molar-mass-gas-q002 · numeric · foundation · SL · Structure 1.5.3 · 2 marks
    "lab-molar-mass-gas-q002": {
      // EN: <p>In an experiment, 0.0620 g of magnesium reacts with excess acid and gives 63.5 <span class="unit">cm3</span> of hydrogen at room temperature and pressure. Calculate the molar volume of hydrogen under these conditions, in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>ある実験で、マグネシウム 0.0620 g が過剰の酸と反応し、室温・大気圧で水素が 63.5 <span class=\"unit\">cm3</span> できます。この条件での水素のモル体積を <span class=\"unit\">dm3 mol-1</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: One mole of Mg gives one mole of H₂.
        "Mg 1 mol から H₂ 1 mol ができます。",
        // EN: Molar volume = volume in dm³ ÷ amount in mol.
        "モル体積 = dm³ で表した体積 ÷ mol で表した物質量。",
      ],
      // EN: <div class="worked__math"><i>n</i>(H<sub>2</sub>) = <i>n</i>(Mg) = 0.0620 ÷ 24.31 = 2.550 × 10<sup>−3</sup> mol</div><div class="worked__math"><i>V</i><sub>m</sub> = 0.0635 dm<sup>3</sup> ÷ 2.550 × 10<sup>−3</sup> mol = 24.9 dm<sup>3</sup> mol<sup>−1</sup></div>
      solution: "<div class=\"worked__math\"><i>n</i>(H<sub>2</sub>) = <i>n</i>(Mg) = 0.0620 ÷ 24.31 = 2.550 × 10<sup>−3</sup> mol</div><div class=\"worked__math\"><i>V</i><sub>m</sub> = 0.0635 dm<sup>3</sup> ÷ 2.550 × 10<sup>−3</sup> mol = 24.9 dm<sup>3</sup> mol<sup>−1</sup></div>",
    },

    // ── lab-molar-mass-gas-q003 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "lab-molar-mass-gas-q003": {
      // EN: <p>A student calculates the molar mass of a vapour using <i>M</i> = <i>mRT</i> / <i>PV</i> with <i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup>. The mass is in g and the temperature in K, but the student uses the pressure in kPa and the volume in <span class="unit">cm3</span>. How does the student’s answer compare with the correct value?</p>
      stem: "<p>ある生徒が、<i>R</i> = 8.31 J K<sup>−1</sup> mol<sup>−1</sup> として <i>M</i> = <i>mRT</i> / <i>PV</i> を使い、蒸気のモル質量を計算します。質量は g、温度は K ですが、圧力は kPa、体積は <span class=\"unit\">cm3</span> のまま使いました。この生徒の答えは、正しい値とくらべてどうなりますか。</p>",
      options: [
        // EN: It is 1000 times too large.
        "1000 倍大きすぎる。",
        // EN: It is 1000 times too small.
        "1000 分の 1 に小さすぎる。",
        // EN: It is 10<sup>6</sup> times too small.
        "10<sup>6</sup> 分の 1 に小さすぎる。",
        // EN: It is correct, because the units cancel.
        "正しい。単位が打ち消し合うから。",
      ],
      hints: [
        // EN: 1 kPa = 10³ Pa and 1 cm³ = 10⁻⁶ m³. What is 1 kPa cm³ in Pa m³?
        "1 kPa = 10³ Pa、1 cm³ = 10⁻⁶ m³ です。1 kPa cm³ は何 Pa m³ でしょうか。",
      ],
      // EN: <p>1 kPa cm<sup>3</sup> = 10<sup>3</sup> Pa × 10<sup>−6</sup> m<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup>. So the number used for <i>PV</i> is 1000 times larger than the SI value. <i>PV</i> is in the denominator, so <i>M</i> comes out 1000 times too small.</p>
      solution: "<p>1 kPa cm<sup>3</sup> = 10<sup>3</sup> Pa × 10<sup>−6</sup> m<sup>3</sup> = 10<sup>−3</sup> Pa m<sup>3</sup> です。したがって、<i>PV</i> に使った数は SI での値の 1000 倍になります。<i>PV</i> は分母にあるので、<i>M</i> は 1000 分の 1 に小さくなりすぎます。</p>",
      misconception: {
        // EN (option A): Check the direction. kPa × cm³ gives a number for <i>PV</i> that is 1000 times larger than Pa × m³. <i>PV</i> is on the bottom of the fraction.
        "0": "向きを確かめましょう。kPa × cm³ で求めた <i>PV</i> の数は、Pa × m³ の 1000 倍になります。<i>PV</i> は分数の下にあります。",
        // EN (option C): The two conversions partly cancel: a pressure in kPa is a number 10³ times smaller than in Pa, but a volume in cm³ is a number 10⁶ times larger than in m³. Overall <i>PV</i> is 10³ times too big as a number.
        "2": "2 つの換算は一部しか打ち消し合いません。kPa で表した圧力の数は Pa の 10³ 分の 1 ですが、cm³ で表した体積の数は m³ の 10⁶ 倍です。全体として、<i>PV</i> の数は 10³ 倍大きすぎます。",
        // EN (option D): <i>R</i> = 8.31 is in J K⁻¹ mol⁻¹, and 1 J = 1 Pa m³. Units of <i>P</i> and <i>V</i> must match that.
        "3": "<i>R</i> = 8.31 の単位は J K⁻¹ mol⁻¹ で、1 J = 1 Pa m³ です。<i>P</i> と <i>V</i> の単位は、これに合わせなければなりません。",
      },
    },

    // ── lab-molar-mass-gas-q004 · numeric · exam · SL · Structure 1.5.4 · 3 marks
    "lab-molar-mass-gas-q004": {
      // EN: <p>0.211 g of a volatile liquid is injected into a gas syringe in a heating jacket at 80.0 °C. The volume of vapour formed is 73.5 <span class="unit">cm3</span> at 99.8 kPa. Calculate the molar mass of the liquid, in <span class="unit">g mol-1</span>.</p>
      stem: "<p>揮発性の液体 0.211 g を、80.0 °C の加熱ジャケットの中の気体用シリンジに注入します。できた蒸気の体積は 99.8 kPa で 73.5 <span class=\"unit\">cm3</span> です。この液体のモル質量を <span class=\"unit\">g mol-1</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Convert to Pa, m³ and K first.
        "まず Pa、m³、K に直しましょう。",
        // EN: <i>M</i> = <i>mRT</i> / <i>PV</i>.
        "<i>M</i> = <i>mRT</i> / <i>PV</i>。",
      ],
      // EN: <div class="worked__math"><i>T</i> = 80.0 + 273.15 = 353.15 K; <i>P</i> = 9.98 × 10<sup>4</sup> Pa; <i>V</i> = 7.35 × 10<sup>−5</sup> m<sup>3</sup></div><div class="worked__math"><i>n</i> = <i>PV</i> / <i>RT</i> = (9.98 × 10<sup>4</sup> × 7.35 × 10<sup>−5</sup>) ÷ (8.31 × 353.15) = 2.499 × 10<sup>−3</sup> mol</div><div class="worked__math"><i>M</i> = 0.211 ÷ 2.499 × 10<sup>−3</sup> = 84.4 g mol<sup>−1</sup></div><p>M1 for the unit conversions, M2 for the amount, M3 for the answer. A correct final answer scores all three.</p>
      solution: "<div class=\"worked__math\"><i>T</i> = 80.0 + 273.15 = 353.15 K；<i>P</i> = 9.98 × 10<sup>4</sup> Pa；<i>V</i> = 7.35 × 10<sup>−5</sup> m<sup>3</sup></div><div class=\"worked__math\"><i>n</i> = <i>PV</i> / <i>RT</i> = (9.98 × 10<sup>4</sup> × 7.35 × 10<sup>−5</sup>) ÷ (8.31 × 353.15) = 2.499 × 10<sup>−3</sup> mol</div><div class=\"worked__math\"><i>M</i> = 0.211 ÷ 2.499 × 10<sup>−3</sup> = 84.4 g mol<sup>−1</sup></div><p>単位の換算で M1、物質量で M2、答えで M3。最後の答えが正しければ 3 点すべてもらえます。</p>",
    },

    // ── lab-molar-mass-gas-q005 · short · exam · SL · Structure 1.5.2 · 2 marks
    "lab-molar-mass-gas-q005": {
      // EN: <p>In the volatile-liquid method, the heating jacket is set at least 20 °C above the boiling point of the liquid. Explain <strong>two</strong> reasons for this.</p>
      stem: "<p>揮発性の液体を使う方法では、加熱ジャケットを液体の沸点より少なくとも 20 °C 高くします。その理由を <strong>2 つ</strong>説明しなさい (explain)。</p>",
      hints: [
        // EN: What would happen to a drop of liquid that does not evaporate?
        "蒸発しない液滴があると、どうなるでしょうか。",
        // EN: Under which conditions does a real gas deviate from ideal behaviour?
        "実在気体が理想気体からずれるのは、どんな条件のときでしょうか。",
      ],
      // EN: <p>All of the liquid must vaporize; any liquid left over means the volume is too small. Far above its boiling point the vapour behaves more like an ideal gas, because the particles move faster and the intermolecular forces become negligible, so <i>PV</i> = <i>nRT</i> applies.</p>
      answer: "<p>液体はすべて蒸発しなければなりません。液体が残ると、体積が小さすぎることになります。沸点よりずっと高い温度では、粒子が速く動き、分子間力が無視できるほど小さくなるので、蒸気は理想気体に近いふるまいをし、<i>PV</i> = <i>nRT</i> が成り立ちます。</p>",
      markscheme: [
        // EN: So that all the liquid vaporizes / no liquid remains (otherwise <i>V</i> is too small and <i>M</i> too high).
        "液体がすべて蒸発する / 液体が残らないようにするため（残ると <i>V</i> が小さすぎ、<i>M</i> が高すぎる）。",
        // EN: Close to the boiling point the intermolecular forces are significant / the vapour is not ideal; well above it the vapour behaves (more) ideally.
        "沸点に近いと分子間力が無視できない / 蒸気が理想気体としてふるまわない。沸点よりずっと高いと、蒸気は（より）理想気体に近いふるまいをする。",
      ],
    },

    // ── lab-molar-mass-gas-q006 · mcq · foundation · SL · Structure 1.5.3 · 1 mark
    "lab-molar-mass-gas-q006": {
      // EN: <p>A student uses magnesium ribbon with a dull coating of magnesium oxide, without cleaning it, to find the molar volume of hydrogen. How is the result affected?</p>
      stem: "<p>ある生徒が、くすんだ酸化マグネシウムの被膜があるマグネシウムリボンを、みがかずに使って水素のモル体積を求めます。結果にはどんな影響がありますか。</p>",
      options: [
        // EN: The molar volume is too low.
        "モル体積が低すぎる。",
        // EN: The molar volume is too high.
        "モル体積が高すぎる。",
        // EN: No effect, because magnesium oxide also reacts with the acid.
        "影響はない。酸化マグネシウムも酸と反応するから。",
        // EN: No effect, because the acid is in excess.
        "影響はない。酸が過剰だから。",
      ],
      hints: [
        // EN: Does magnesium oxide produce hydrogen when it reacts with acid?
        "酸化マグネシウムは、酸と反応すると水素を出すでしょうか。",
      ],
      // EN: <p>Part of the weighed mass is MgO, which reacts to give MgCl<sub>2</sub> and water but no hydrogen. The student calculates the amount of hydrogen from the full mass, so the amount used is too large and the volume measured too small for it. The molar volume, <i>V</i> ÷ <i>n</i>, is too low.</p>
      solution: "<p>はかった質量の一部は MgO で、反応して MgCl<sub>2</sub> と水になりますが、水素は出しません。生徒は質量全体から水素の物質量を計算するので、使う物質量が大きすぎ、測定した体積はそれに対して小さすぎます。モル体積 <i>V</i> ÷ <i>n</i> は低すぎます。</p>",
      misconception: {
        // EN (option B): Follow the chain. The oxide adds mass but no hydrogen. Less gas for the same recorded mass means a smaller volume per mole.
        "1": "順にたどりましょう。酸化物は質量を増やしますが、水素は出しません。記録した質量が同じで気体が少ないと、1 mol あたりの体積は小さくなります。",
        // EN (option C): Magnesium oxide does react with the acid, but it forms magnesium chloride and water, not hydrogen.
        "2": "酸化マグネシウムは酸と反応しますが、できるのは塩化マグネシウムと水で、水素ではありません。",
        // EN (option D): Excess acid makes sure all the solid reacts. It cannot make the oxide produce hydrogen.
        "3": "酸が過剰なら、固体はすべて反応します。でも、酸化物から水素が出るようにはできません。",
      },
    },

    // ── lab-molar-mass-gas-q007 · mcq · exam · SL · Structure 1.5.3 · 1 mark
    "lab-molar-mass-gas-q007": {
      // EN: <p>The reaction of magnesium with hydrochloric acid is exothermic. A student reads the gas syringe as soon as the fizzing stops, while the flask is still warm, and uses the room temperature in the calculation. What is the effect on the molar volume at room conditions?</p>
      stem: "<p>マグネシウムと塩酸の反応は発熱反応です。ある生徒が、泡が止まってすぐ、フラスコがまだ温かいうちに気体用シリンジを読み、計算には室温を使います。室内の条件でのモル体積にはどんな影響がありますか。</p>",
      options: [
        // EN: It is too high, because warm gas occupies a larger volume.
        "高すぎる。温かい気体は体積が大きいから。",
        // EN: It is too low, because warm gas occupies a smaller volume.
        "低すぎる。温かい気体は体積が小さいから。",
        // EN: It is too low, because less hydrogen is produced at a higher temperature.
        "低すぎる。温度が高いと、できる水素が少ないから。",
        // EN: No effect, because the amount of hydrogen is the same.
        "影響はない。水素の物質量は同じだから。",
      ],
      hints: [
        // EN: At constant pressure, how does the volume of a gas change with temperature?
        "圧力一定のとき、気体の体積は温度によってどう変わるでしょうか。",
      ],
      // EN: <p>The amount of hydrogen is fixed by the magnesium. Warm gas has a larger volume than the same gas at room temperature, so the volume read is too large and <i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i> is too high. Wait for the flask to cool before reading.</p>
      solution: "<p>水素の物質量はマグネシウムで決まります。温かい気体は、室温の同じ気体より体積が大きいので、読んだ体積が大きすぎ、<i>V</i><sub>m</sub> = <i>V</i> ÷ <i>n</i> は高すぎます。フラスコが冷えるのを待ってから読みましょう。</p>",
      misconception: {
        // EN (option B): At constant pressure, volume is proportional to the absolute temperature. Warmer gas takes up more space, not less.
        "1": "圧力一定では、体積は絶対温度に比例します。温かい気体は体積が小さくなるのではなく、大きくなります。",
        // EN (option C): The amount of hydrogen depends only on the mass of magnesium. Temperature changes the volume that amount occupies.
        "2": "水素の物質量は、マグネシウムの質量だけで決まります。温度が変えるのは、その物質量の気体が占める体積です。",
        // EN (option D): The amount is the same, but the volume read is not the volume at room temperature. That volume is larger.
        "3": "物質量は同じですが、読んだ体積は室温での体積ではありません。その体積は大きすぎます。",
      },
    },

    // ── lab-molar-mass-gas-q008 · numeric · challenge · SL · Structure 1.5.4 · 2 marks
    "lab-molar-mass-gas-q008": {
      // EN: <p>Data from a volatile-liquid experiment:</p><ul><li>mass of liquid (two weighings) = 0.125 ± 0.002 g</li><li>volume of vapour (two readings) = 62.0 ± 1.0 <span class="unit">cm3</span></li><li>temperature = 371.2 ± 0.5 K</li><li>pressure = 100.5 ± 0.1 kPa</li></ul><p>Calculate the percentage uncertainty in the molar mass calculated with <i>M</i> = <i>mRT</i> / <i>PV</i>.</p>
      stem: "<p>揮発性の液体の実験のデータ：</p><ul><li>液体の質量（2 回の質量測定）= 0.125 ± 0.002 g</li><li>蒸気の体積（2 回の読み）= 62.0 ± 1.0 <span class=\"unit\">cm3</span></li><li>温度 = 371.2 ± 0.5 K</li><li>圧力 = 100.5 ± 0.1 kPa</li></ul><p><i>M</i> = <i>mRT</i> / <i>PV</i> で計算したモル質量の百分率の不確かさを計算しなさい (calculate)。</p>",
      hints: [
        // EN: For products and quotients, add the percentage uncertainties.
        "積や商では、百分率の不確かさを足します。",
        // EN: <i>R</i> is a constant, so it has no uncertainty.
        "<i>R</i> は定数なので、不確かさはありません。",
      ],
      // EN: <div class="worked__math">%<i>m</i> = 0.002 ÷ 0.125 × 100 = 1.60 %</div><div class="worked__math">%<i>V</i> = 1.0 ÷ 62.0 × 100 = 1.61 %</div><div class="worked__math">%<i>T</i> = 0.5 ÷ 371.2 × 100 = 0.13 %; %<i>P</i> = 0.1 ÷ 100.5 × 100 = 0.10 %</div><div class="worked__math">%<i>M</i> = 1.60 + 1.61 + 0.13 + 0.10 = 3.4 %</div>
      solution: "<div class=\"worked__math\">%<i>m</i> = 0.002 ÷ 0.125 × 100 = 1.60 %</div><div class=\"worked__math\">%<i>V</i> = 1.0 ÷ 62.0 × 100 = 1.61 %</div><div class=\"worked__math\">%<i>T</i> = 0.5 ÷ 371.2 × 100 = 0.13 %；%<i>P</i> = 0.1 ÷ 100.5 × 100 = 0.10 %</div><div class=\"worked__math\">%<i>M</i> = 1.60 + 1.61 + 0.13 + 0.10 = 3.4 %</div>",
    },

    // ── lab-molar-mass-gas-q009 · numeric · exam · SL · Structure 1.5.4 · 2 marks
    "lab-molar-mass-gas-q009": {
      // EN: <p>A student’s molar volume of hydrogen is 24.6 <span class="unit">dm3 mol-1</span> at 22.0 °C and 101.5 kPa. Calculate the molar volume this corresponds to at STP (273.15 K and 100 kPa), in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>ある生徒が求めた水素のモル体積は、22.0 °C、101.5 kPa で 24.6 <span class=\"unit\">dm3 mol-1</span> です。これに対応する STP（273.15 K、100 kPa）でのモル体積を <span class=\"unit\">dm3 mol-1</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Use <i>P</i>₁<i>V</i>₁ / <i>T</i>₁ = <i>P</i>₂<i>V</i>₂ / <i>T</i>₂ with temperatures in kelvin.
        "温度をケルビンにして、<i>P</i>₁<i>V</i>₁ / <i>T</i>₁ = <i>P</i>₂<i>V</i>₂ / <i>T</i>₂ を使いましょう。",
      ],
      // EN: <div class="worked__math"><i>T</i><sub>1</sub> = 22.0 + 273.15 = 295.15 K</div><div class="worked__math"><i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × (<i>P</i><sub>1</sub> ÷ <i>P</i><sub>2</sub>) × (<i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>) = 24.6 × (101.5 ÷ 100) × (273.15 ÷ 295.15) = 23.1 dm<sup>3</sup> mol<sup>−1</sup></div><p>The data booklet value is 22.7 dm<sup>3</sup> mol<sup>−1</sup>, so this result is 1.8 % high.</p>
      solution: "<div class=\"worked__math\"><i>T</i><sub>1</sub> = 22.0 + 273.15 = 295.15 K</div><div class=\"worked__math\"><i>V</i><sub>2</sub> = <i>V</i><sub>1</sub> × (<i>P</i><sub>1</sub> ÷ <i>P</i><sub>2</sub>) × (<i>T</i><sub>2</sub> ÷ <i>T</i><sub>1</sub>) = 24.6 × (101.5 ÷ 100) × (273.15 ÷ 295.15) = 23.1 dm<sup>3</sup> mol<sup>−1</sup></div><p>データブックレットの値は 22.7 dm<sup>3</sup> mol<sup>−1</sup> なので、この結果は 1.8 % 大きい値です。</p>",
    },

    // ── lab-molar-mass-gas-q010 · short · challenge · SL · Structure 1.5.4 · 4 marks
    "lab-molar-mass-gas-q010": {
      // EN: <p>A student releases butane from a gas lighter into an upturned measuring cylinder full of water. The lighter is weighed before and after. The student’s molar mass for butane is 52.6 g mol<sup>−1</sup>; the accepted value is 58.14 g mol<sup>−1</sup>. Suggest <strong>two</strong> reasons why the result is too low, and an improvement for each.</p>
      stem: "<p>ある生徒が、ガスライターのブタンを、水を満たして逆さにしたメスシリンダーの中に放出します。ライターの質量を、放出の前と後にはかります。生徒が求めたブタンのモル質量は 52.6 g mol<sup>−1</sup> で、認められている値は 58.14 g mol<sup>−1</sup> です。結果が低すぎる理由を <strong>2 つ</strong>挙げ、それぞれの改善策を提案しなさい (suggest)。</p>",
      hints: [
        // EN: <i>M</i> = <i>m</i> ÷ <i>n</i>. Too low a result means <i>m</i> too small or <i>n</i> too large.
        "<i>M</i> = <i>m</i> ÷ <i>n</i>。結果が低すぎるのは、<i>m</i> が小さすぎるか、<i>n</i> が大きすぎるからです。",
        // EN: Which measurement could water on the lighter affect?
        "ライターについた水は、どの測定に影響するでしょうか。",
      ],
      // EN: <p>The lighter was still wet when reweighed, so the loss in mass (the mass of butane) was too small; dry the lighter thoroughly before the second weighing. The water level inside the cylinder was above the level outside, so the gas was below atmospheric pressure and the amount calculated with atmospheric pressure was too large; raise or lower the cylinder until the levels are equal before reading. The gas also contains water vapour, so the volume is larger than the volume of butane alone.</p>
      answer: "<p>はかり直したとき、ライターがまだぬれていたので、質量の減少（ブタンの質量）が小さすぎました。2 回目の質量測定の前に、ライターをよく乾かしましょう。シリンダーの中の水面が外の水面より高かったので、気体は大気圧より低い圧力にあり、大気圧を使って計算した物質量が大きすぎました。読む前に、シリンダーを上げ下げして水面の高さをそろえましょう。また、気体には水蒸気も含まれるので、体積はブタンだけの体積より大きくなります。</p>",
      markscheme: [
        // EN: The lighter was wet when reweighed / water on the lighter, so the mass of butane released appears too small (<i>M</i> too low).
        "はかり直したときライターがぬれていた / ライターに水がついていたので、放出したブタンの質量が小さすぎるように見える（<i>M</i> が低すぎる）。",
        // EN: Improvement: dry the lighter thoroughly (with paper towel) before reweighing.
        "改善策：はかり直す前に、ライターを（ペーパータオルで）よく乾かす。",
        // EN: Water levels inside and outside the cylinder not equal, so the gas pressure is not atmospheric pressure / <i>n</i> calculated too large (<i>M</i> too low).
        "シリンダーの内と外で水面の高さがそろっていないので、気体の圧力が大気圧ではない / 計算した <i>n</i> が大きすぎる（<i>M</i> が低すぎる）。",
        // EN: Improvement: adjust the cylinder so the water levels are equal before reading the volume.
        "改善策：体積を読む前に、水面の高さがそろうようにシリンダーを調節する。",
        // EN: Accept: the collected gas contains water vapour, so the volume is too large (<i>M</i> too low); note it as a limitation.
        "認める：集めた気体に水蒸気が含まれるので、体積が大きすぎる（<i>M</i> が低すぎる）。限界として書いておく。",
        // EN: Accept: the measuring cylinder was read at the top of the meniscus / gas volume over-read; read at eye level.
        "認める：メスシリンダーをメニスカスの上で読んだ / 気体の体積を多く読みすぎた。目の高さで読む。",
      ],
    },

    // ── lab-molar-mass-gas-q011 · mcq · exam · SL · Structure 1.5.4 · 1 mark
    "lab-molar-mass-gas-q011": {
      // EN: <p>A student injects different masses, <i>m</i>, of one liquid into a heated gas syringe at constant temperature <i>T</i> and pressure <i>P</i>, and plots the volume of vapour, <i>V</i>, against <i>m</i>. The line passes through the origin with gradient <i>k</i>. Which expression gives the molar mass?</p>
      stem: "<p>ある生徒が、1 種類の液体をいろいろな質量 <i>m</i> だけ、一定の温度 <i>T</i> と圧力 <i>P</i> の加熱した気体用シリンジに注入し、蒸気の体積 <i>V</i> を <i>m</i> に対してプロットします。直線は原点を通り、傾きは <i>k</i> です。モル質量を表す式はどれですか。</p>",
      options: [
        // EN: <i>RT</i> / <i>Pk</i>
        "<i>RT</i> / <i>Pk</i>",
        // EN: <i>Pk</i> / <i>RT</i>
        "<i>Pk</i> / <i>RT</i>",
        // EN: <i>kRT</i> / <i>P</i>
        "<i>kRT</i> / <i>P</i>",
        // EN: <i>P</i> / <i>kRT</i>
        "<i>P</i> / <i>kRT</i>",
      ],
      hints: [
        // EN: Rearrange <i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i> into the form <i>V</i> = (something) × <i>m</i>.
        "<i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i> を、<i>V</i> =（何か）× <i>m</i> の形に変形しましょう。",
      ],
      // EN: <p><i>V</i> = (<i>RT</i> / <i>PM</i>) × <i>m</i>, so the gradient <i>k</i> = <i>RT</i> / <i>PM</i>. Rearranging: <i>M</i> = <i>RT</i> / <i>Pk</i>.</p>
      solution: "<p><i>V</i> = (<i>RT</i> / <i>PM</i>) × <i>m</i> なので、傾き <i>k</i> = <i>RT</i> / <i>PM</i> です。変形すると <i>M</i> = <i>RT</i> / <i>Pk</i> です。</p>",
      misconception: {
        // EN (option B): This is the reciprocal. Start from <i>V</i> = <i>mRT</i> / <i>PM</i> and pick out the part that multiplies <i>m</i>.
        "1": "これは逆数です。<i>V</i> = <i>mRT</i> / <i>PM</i> から始めて、<i>m</i> にかかっている部分を取り出しましょう。",
        // EN (option C): This would be correct only if the gradient were proportional to <i>M</i>. A heavier vapour gives fewer moles per gram, so a smaller gradient.
        "2": "これが正しいのは、傾きが <i>M</i> に比例する場合だけです。重い蒸気ほど 1 g あたりの物質量が少ないので、傾きは小さくなります。",
        // EN (option D): Check the dimensions: <i>RT</i> / <i>P</i> has units of volume per mole, so it must sit on top.
        "3": "次元を確かめましょう。<i>RT</i> / <i>P</i> の単位は 1 mol あたりの体積なので、分子に来なければなりません。",
      },
    },

    // ── lab-molar-mass-gas-q012 · numeric · exam · SL · Structure 1.5.3 · 2 marks
    "lab-molar-mass-gas-q012": {
      // EN: <p>A graph of the volume of hydrogen against the mass of magnesium (with excess acid) is a straight line through the origin with a gradient of 1015 <span class="unit">cm3</span> g<sup>−1</sup>. Calculate the molar volume of hydrogen under the conditions of the experiment, in <span class="unit">dm3 mol-1</span>.</p>
      stem: "<p>（過剰の酸を使って）水素の体積をマグネシウムの質量に対してプロットしたグラフは、原点を通る直線で、傾きは 1015 <span class=\"unit\">cm3</span> g<sup>−1</sup> です。この実験の条件での水素のモル体積を <span class=\"unit\">dm3 mol-1</span> で計算しなさい (calculate)。</p>",
      hints: [
        // EN: The gradient is the volume of hydrogen from 1 g of magnesium. How many grams of magnesium are in one mole?
        "傾きは、マグネシウム 1 g から出る水素の体積です。マグネシウム 1 mol は何 g でしょうか。",
      ],
      // EN: <div class="worked__math">volume from 1 mol of Mg = 1015 cm<sup>3</sup> g<sup>−1</sup> × 24.31 g mol<sup>−1</sup> = 24 675 cm<sup>3</sup> mol<sup>−1</sup></div><div class="worked__math"><i>V</i><sub>m</sub> = 24.7 dm<sup>3</sup> mol<sup>−1</sup> (1 mol of Mg gives 1 mol of H<sub>2</sub>)</div>
      solution: "<div class=\"worked__math\">Mg 1 mol からの体積 = 1015 cm<sup>3</sup> g<sup>−1</sup> × 24.31 g mol<sup>−1</sup> = 24 675 cm<sup>3</sup> mol<sup>−1</sup></div><div class=\"worked__math\"><i>V</i><sub>m</sub> = 24.7 dm<sup>3</sup> mol<sup>−1</sup>（Mg 1 mol から H<sub>2</sub> 1 mol ができる）</div>",
    },

    // ── lab-molar-mass-gas-q013 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "lab-molar-mass-gas-q013": {
      // EN: <p>Why would the molar volume measured for hydrogen be the same as that for oxygen under the same conditions of temperature and pressure?</p>
      stem: "<p>温度と圧力の条件が同じなら、水素について測定したモル体積が酸素のモル体積と同じになるのはなぜですか。</p>",
      options: [
        // EN: Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules.
        "温度と圧力が同じなら、同じ体積の気体には同じ数の分子が含まれるから。",
        // EN: Hydrogen and oxygen molecules have the same mass.
        "水素分子と酸素分子の質量が同じだから。",
        // EN: Hydrogen and oxygen molecules are the same size.
        "水素分子と酸素分子の大きさが同じだから。",
        // EN: Both gases are diatomic, so they contain the same number of atoms per gram.
        "どちらの気体も二原子分子なので、1 g あたりの原子の数が同じだから。",
      ],
      hints: [
        // EN: This is Avogadro’s law.
        "これはアボガドロの法則です。",
      ],
      // EN: <p>Avogadro’s law: equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules. So one mole of any ideal gas occupies the same volume under the same conditions.</p>
      solution: "<p>アボガドロの法則：温度と圧力が同じなら、どの気体でも同じ体積には同じ数の分子が含まれます。したがって、同じ条件では、どの理想気体も 1 mol の体積は同じです。</p>",
      misconception: {
        // EN (option B): An O₂ molecule is 16 times heavier than an H₂ molecule. Mass does not decide the volume of a gas.
        "1": "O₂ 分子は H₂ 分子の 16 倍の質量があります。気体の体積を決めるのは質量ではありません。",
        // EN (option C): In the ideal gas model the volume of the particles is negligible, so their size does not matter.
        "2": "理想気体モデルでは粒子の体積は無視できるほど小さいので、大きさは関係ありません。",
        // EN (option D): A gram of hydrogen contains far more molecules than a gram of oxygen. The molar volume is about the number of molecules, not the mass.
        "3": "水素 1 g には、酸素 1 g よりずっと多くの分子が含まれます。モル体積は分子の数についてのもので、質量についてのものではありません。",
      },
    },

    // ── lab-molar-mass-gas-q014 · mcq · foundation · SL · Structure 1.4.6 · 1 mark
    "lab-molar-mass-gas-q014": {
      // EN: <p>Why is the hydrochloric acid used in excess when finding the molar volume of hydrogen from magnesium?</p>
      stem: "<p>マグネシウムから水素のモル体積を求めるとき、塩酸を過剰に使うのはなぜですか。</p>",
      options: [
        // EN: So that all the magnesium reacts, and the amount of hydrogen depends only on the mass of magnesium.
        "マグネシウムがすべて反応し、水素の物質量がマグネシウムの質量だけで決まるようにするため。",
        // EN: So that the reaction is fast enough to finish before the gas cools.
        "気体が冷える前に終わるほど、反応を速くするため。",
        // EN: So that the acid absorbs the heat given out by the reaction.
        "反応で出る熱を、酸に吸収させるため。",
        // EN: So that the hydrogen does not dissolve in the solution.
        "水素が溶液に溶けないようにするため。",
      ],
      hints: [
        // EN: The calculation uses the mass of magnesium. What has to happen to all of it?
        "計算にはマグネシウムの質量を使います。そのマグネシウムが、すべてどうならなければならないでしょうか。",
      ],
      // EN: <p>The amount of hydrogen is calculated from the mass of magnesium, using the 1 : 1 ratio. That only works if all the magnesium reacts, so the magnesium must be the limiting reactant and the acid must be in excess.</p>
      solution: "<p>水素の物質量は、1 : 1 の比を使ってマグネシウムの質量から計算します。それが成り立つのはマグネシウムがすべて反応するときだけなので、マグネシウムが制限反応物で、酸が過剰でなければなりません。</p>",
      misconception: {
        // EN (option B): Excess acid may speed things up a little, but that is not why it is used. The calculation needs every gram of magnesium to react.
        "1": "過剰の酸で反応が少し速くなるかもしれませんが、それが使う理由ではありません。計算では、マグネシウムが 1 g 残らず反応する必要があります。",
        // EN (option C): The volume of acid has little effect on the temperature, and you wait for the gas to cool anyway.
        "2": "酸の体積は温度にほとんど影響しません。それに、どちらにしても気体が冷えるのを待ちます。",
        // EN (option D): The acid is mostly water. More of it would, if anything, dissolve slightly more hydrogen.
        "3": "酸はほとんどが水です。量を増やすと、むしろ水素が少し多く溶けるかもしれません。",
      },
    },

  }
});
