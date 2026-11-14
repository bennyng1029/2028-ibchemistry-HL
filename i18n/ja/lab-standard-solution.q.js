/* lab-standard-solution.q — ja question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 'lab-standard-solution.q', {
  questions: {

    // ── lab-standard-solution-q001 · numeric · foundation · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q001": {
      // EN: <p>A student needs 250.0 <span class="unit">cm3</span> of a 0.0400 <span class="unit">mol dm-3</span> standard solution of sodium carbonate, <span class="chem">Na2CO3</span>.</p><p>Calculate the mass of sodium carbonate the student must weigh. <i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span></p>
      stem: "<p>ある生徒が、炭酸ナトリウム <span class=\"chem\">Na2CO3</span> の 0.0400 <span class=\"unit\">mol dm-3</span> の標準溶液を 250.0 <span class=\"unit\">cm3</span> つくろうとしています。</p><p>この生徒がはかり取るべき炭酸ナトリウムの質量を計算しなさい (calculate)。<i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Convert 250.0 cm³ to dm³ first.
        "まず 250.0 cm³ を dm³ に直しましょう。",
        // EN: n = C × V, then m = n × M.
        "n = C × V、それから m = n × M。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 250.0 <span class="unit">cm3</span> ÷ 1000 = 0.2500 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = 0.0400 <span class="unit">mol dm-3</span> × 0.2500 <span class="unit">dm3</span> = 0.0100 <span class="unit">mol</span></div><div class="worked__math"><i>m</i> = 0.0100 <span class="unit">mol</span> × 105.99 <span class="unit">g mol-1</span> = 1.06 <span class="unit">g</span></div><p>M1 for the amount (with the volume in dm³), M2 for the mass.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 250.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.2500 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = 0.0400 <span class=\"unit\">mol dm-3</span> × 0.2500 <span class=\"unit\">dm3</span> = 0.0100 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>m</i> = 0.0100 <span class=\"unit\">mol</span> × 105.99 <span class=\"unit\">g mol-1</span> = 1.06 <span class=\"unit\">g</span></div><p>物質量（体積を dm³ にしたもの）で M1、質量で M2。</p>",
    },

    // ── lab-standard-solution-q002 · order · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q002": {
      // EN: <p>Put these steps for preparing a standard solution in the correct order.</p>
      stem: "<p>標準溶液をつくる次のステップを、正しい順に並べなさい。</p>",
      options: [
        // EN: Weigh the solid accurately
        "固体の質量を正確にはかる",
        // EN: Dissolve it in a small volume of distilled water in a beaker
        "ビーカーに入れた少量の蒸留水に溶かす",
        // EN: Pour the solution through a funnel into a volumetric flask
        "溶液を、ろうとを使ってメスフラスコに注ぐ",
        // EN: Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask
        "ビーカー、ガラス棒、ろうとを蒸留水ですすぎ、洗液をフラスコに加える",
        // EN: Add distilled water until the bottom of the meniscus is on the mark
        "メニスカスの底が標線に合うまで蒸留水を加える",
        // EN: Stopper the flask and invert it several times
        "フラスコに栓をして、何回か逆さにする",
      ],
      hints: [
        // EN: The solid must be fully dissolved before it goes into the flask.
        "固体は、フラスコに入れる前に完全に溶かしておかなければなりません。",
        // EN: Mixing comes last, once the volume is right.
        "混ぜるのは最後、体積が合ってからです。",
      ],
      // EN: <p>Weigh → dissolve in a beaker → transfer to the volumetric flask → add the rinsings → make up to the mark → stopper and invert. The rinsings go in <em>before</em> making up to the mark, because they are part of the final volume.</p>
      solution: "<p>はかる → ビーカーで溶かす → メスフラスコに移す → 洗液を加える → 標線まで水を加える → 栓をして逆さにする。洗液は最終的な体積の一部なので、標線まで水を加える<em>前に</em>入れます。</p>",
    },

    // ── lab-standard-solution-q003 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q003": {
      // EN: <p>A student must measure exactly 10.00 <span class="unit">cm3</span> of a stock solution for a dilution. Which piece of glassware is the most suitable?</p>
      stem: "<p>ある生徒が、希釈のために原液をちょうど 10.00 <span class=\"unit\">cm3</span> はかり取らなければなりません。最も適したガラス器具はどれですか。</p>",
      options: [
        // EN: A 10 cm³ measuring cylinder
        "10 cm³ のメスシリンダー",
        // EN: A 10.00 cm³ volumetric pipette
        "10.00 cm³ のホールピペット",
        // EN: A 50 cm³ beaker
        "50 cm³ のビーカー",
        // EN: A 25 cm³ conical flask
        "25 cm³ の三角フラスコ",
      ],
      hints: [
        // EN: Which piece of glassware is made to deliver one volume very precisely?
        "1 つの体積をとても精密にはかり出すためにつくられたガラス器具はどれでしょうか。",
      ],
      // EN: <p>A volumetric (bulb) pipette delivers one fixed volume with a small uncertainty (about ±0.02 to ±0.04 <span class="unit">cm3</span>). A burette would also be acceptable. A measuring cylinder is not precise enough.</p>
      solution: "<p>ホールピペットは、決まった 1 つの体積を小さな不確かさ（約 ±0.02〜±0.04 <span class=\"unit\">cm3</span>）ではかり出します。ビュレットでもかまいません。メスシリンダーは精度が足りません。</p>",
      misconception: {
        // EN (option A): A measuring cylinder is fine for rough volumes, but its uncertainty is several times larger than that of a pipette. Markschemes do not accept it for a standard solution or dilution.
        "0": "メスシリンダーは大まかな体積には十分ですが、不確かさはホールピペットの数倍あります。採点基準では、標準溶液や希釈には認められません。",
        // EN (option C): The marks on a beaker are only a rough guide, often ±5 % or worse.
        "2": "ビーカーの目盛は大まかな目安にすぎず、±5 % かそれより悪いことがよくあります。",
        // EN (option D): A conical flask is used to hold a solution in a titration. Its marks, if any, are not for measuring.
        "3": "三角フラスコは、滴定で溶液を入れておくのに使います。目盛があっても、はかるためのものではありません。",
      },
    },

    // ── lab-standard-solution-q004 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q004": {
      // EN: <p>To make one standard, a student runs 3.50 <span class="unit">cm3</span> of 0.250 <span class="unit">mol dm-3</span> copper(II) sulfate from one burette and 6.50 <span class="unit">cm3</span> of distilled water from another into a test tube, and mixes them.</p><p>Calculate the concentration of copper(II) sulfate in the test tube.</p>
      stem: "<p>標準溶液を 1 つつくるために、ある生徒が 1 本のビュレットから 0.250 <span class=\"unit\">mol dm-3</span> の硫酸銅(II) 水溶液を 3.50 <span class=\"unit\">cm3</span>、もう 1 本から蒸留水を 6.50 <span class=\"unit\">cm3</span> 試験管に入れて混ぜます。</p><p>試験管の中の硫酸銅(II) の濃度を計算しなさい (calculate)。</p>",
      hints: [
        // EN: The total volume is 3.50 + 6.50 cm³.
        "全体の体積は 3.50 + 6.50 cm³ です。",
        // EN: C₂ = C₁ × V₁ ÷ V₂.
        "C₂ = C₁ × V₁ ÷ V₂。",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>2</sub> = 3.50 + 6.50 = 10.00 <span class="unit">cm3</span></div><div class="worked__math"><i>C</i><sub>2</sub> = 0.250 × 3.50 ÷ 10.00 = 0.0875 <span class="unit">mol dm-3</span></div>
      solution: "<div class=\"worked__math\"><i>V</i><sub>2</sub> = 3.50 + 6.50 = 10.00 <span class=\"unit\">cm3</span></div><div class=\"worked__math\"><i>C</i><sub>2</sub> = 0.250 × 3.50 ÷ 10.00 = 0.0875 <span class=\"unit\">mol dm-3</span></div>",
    },

    // ── lab-standard-solution-q005 · short · exam · SL · Structure 1.4.5 · 3 marks
    "lab-standard-solution-q005": {
      // EN: <p>Describe how you would prepare 100.0 <span class="unit">cm3</span> of 0.0250 <span class="unit">mol dm-3</span> copper(II) sulfate solution from a 0.250 <span class="unit">mol dm-3</span> stock solution. Include the volume of stock solution needed.</p>
      stem: "<p>0.250 <span class=\"unit\">mol dm-3</span> の原液から、0.0250 <span class=\"unit\">mol dm-3</span> の硫酸銅(II) 水溶液を 100.0 <span class=\"unit\">cm3</span> つくる方法を記述しなさい (describe)。必要な原液の体積も含めること。</p>",
      hints: [
        // EN: Use C₁V₁ = C₂V₂ to find V₁.
        "C₁V₁ = C₂V₂ を使って V₁ を求めましょう。",
        // EN: Name the glassware for each volume, then say how to finish and mix.
        "それぞれの体積をはかるガラス器具の名前を書き、それから仕上げ方と混ぜ方を書きましょう。",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> ÷ <i>C</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 <span class="unit">cm3</span></div><p>Pipette 10.0 cm³ of stock into a 100.0 cm³ volumetric flask. Add distilled water until the bottom of the meniscus is on the mark, adding the last drops with a dropping pipette. Stopper and invert several times. Do not write “add 90 cm³ of water”: the flask is filled <em>to the mark</em>.</p>
      solution: "<div class=\"worked__math\"><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> ÷ <i>C</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 <span class=\"unit\">cm3</span></div><p>原液 10.0 cm³ をホールピペットで 100.0 cm³ のメスフラスコに入れます。メニスカスの底が標線に合うまで蒸留水を加え、最後の数滴はスポイトで加えます。栓をして、何回か逆さにします。「水を 90 cm³ 加える」と書いてはいけません。フラスコは<em>標線まで</em>満たすものです。</p>",
      // EN: <p><i>V</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 cm³. Measure 10.0 cm³ of the stock with a pipette (or burette) into a 100.0 cm³ volumetric flask. Add distilled water up to the mark, then stopper and invert to mix.</p>
      answer: "<p><i>V</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 cm³。原液 10.0 cm³ をホールピペット（またはビュレット）ではかり、100.0 cm³ のメスフラスコに入れる。標線まで蒸留水を加え、栓をして逆さにして混ぜる。</p>",
      markscheme: [
        // EN: M1: volume of stock = 10.0 cm³.
        "M1：原液の体積 = 10.0 cm³。",
        // EN: M2: measured with a (volumetric) pipette OR burette, into a 100.0 cm³ volumetric flask. (Do not accept a measuring cylinder.)
        "M2：（ホール）ピペットまたはビュレットではかり、100.0 cm³ のメスフラスコに入れる。（メスシリンダーは認めない。）",
        // EN: M3: make up to the mark with distilled/deionized water AND stopper and invert/mix.
        "M3：蒸留水 / イオン交換水を標線まで加える、かつ、栓をして逆さにする / 混ぜる。",
      ],
    },

    // ── lab-standard-solution-q006 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q006": {
      // EN: <p>A student plots a calibration curve for copper(II) sulfate. The line of best fit has a gradient of 2.84 <span class="unit">dm3 mol-1</span> and a <i>y</i>-intercept of 0.01. The mean absorbance of an unknown solution is 0.52.</p><p>Calculate the concentration of copper(II) sulfate in the unknown.</p>
      stem: "<p>ある生徒が硫酸銅(II) の検量線をかきます。最もよく合う直線の傾きは 2.84 <span class=\"unit\">dm3 mol-1</span>、<i>y</i> 切片は 0.01 です。未知の溶液の吸光度の平均は 0.52 です。</p><p>未知の溶液の硫酸銅(II) の濃度を計算しなさい (calculate)。</p>",
      hints: [
        // EN: The line is absorbance = gradient × concentration + intercept.
        "直線は、吸光度 = 傾き × 濃度 + 切片 です。",
        // EN: Rearrange: concentration = (absorbance − intercept) ÷ gradient.
        "変形すると、濃度 = (吸光度 − 切片) ÷ 傾き です。",
      ],
      // EN: <div class="worked__math">[<span class="chem">CuSO4</span>] = (0.52 − 0.01) ÷ 2.84 = 0.18 <span class="unit">mol dm-3</span></div><p>The absorbance has 2 significant figures, so 0.18 <span class="unit">mol dm-3</span> (0.180 is also accepted).</p>
      solution: "<div class=\"worked__math\">[<span class=\"chem\">CuSO4</span>] = (0.52 − 0.01) ÷ 2.84 = 0.18 <span class=\"unit\">mol dm-3</span></div><p>吸光度は有効数字 2 桁なので、0.18 <span class=\"unit\">mol dm-3</span> です（0.180 も認められます）。</p>",
    },

    // ── lab-standard-solution-q007 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q007": {
      // EN: <p>Copper(II) sulfate solution is blue. Why is a red filter used in the colorimeter when making its calibration curve?</p>
      stem: "<p>硫酸銅(II) 水溶液は青色です。その検量線をつくるとき、比色計に赤色フィルターを使うのはなぜですか。</p>",
      options: [
        // EN: The solution absorbs red light most strongly, so absorbance changes most with concentration
        "溶液が赤色の光を最も強く吸収するので、濃度による吸光度の変化が最も大きい",
        // EN: Blue light passes through the solution, so the colorimeter measures the blue colour
        "青色の光が溶液を通り抜けるので、比色計が青色を測定する",
        // EN: Red light has the most energy, so it gives the largest readings
        "赤色の光はエネルギーが最も大きいので、読みが最も大きくなる",
        // EN: The filter should be the same colour as the solution
        "フィルターは溶液と同じ色にするべきである",
      ],
      hints: [
        // EN: A solution looks blue because blue light reaches your eye. What happens to the other colours?
        "溶液が青色に見えるのは、青色の光が目に届くからです。ほかの色はどうなるでしょうか。",
        // EN: Look at the colour wheel in the data booklet.
        "データブックレットの色相環を見ましょう。",
      ],
      // EN: <p>A blue solution absorbs the complementary colour, orange–red, most strongly. With a red filter the absorbance changes a lot as the concentration changes, so the calibration line is steep and each reading is precise compared with its size.</p>
      solution: "<p>青色の溶液は、その補色である橙〜赤色の光を最も強く吸収します。赤色フィルターを使うと、濃度が変わったときに吸光度が大きく変わるので、検量線の傾きが急になり、一つひとつの読みが値の大きさにくらべて精密になります。</p>",
      misconception: {
        // EN (option B): The solution looks blue because blue light passes through it. Light that passes through is not absorbed, so it shows little change with concentration.
        "1": "溶液が青色に見えるのは、青色の光が通り抜けるからです。通り抜ける光は吸収されないので、濃度が変わってもほとんど変化しません。",
        // EN (option C): Red light has the lowest energy of the visible colours. The choice is about which colour the solution absorbs.
        "2": "赤色の光は、可視光の中でエネルギーが最も小さい色です。選ぶ基準は、溶液がどの色を吸収するかです。",
        // EN (option D): A filter of the same colour lets through light the solution hardly absorbs. The readings would be tiny.
        "3": "同じ色のフィルターは、溶液がほとんど吸収しない光を通します。読みはごくわずかになります。",
      },
    },

    // ── lab-standard-solution-q008 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q008": {
      // EN: <p>While making a standard solution, a student adds water too quickly and the meniscus ends up above the mark of the volumetric flask. The student calculates the concentration from the mass weighed and the volume of the flask. How does the true concentration compare with the calculated value?</p>
      stem: "<p>標準溶液をつくっている途中で、ある生徒が水を速く加えすぎ、メニスカスがメスフラスコの標線より上になってしまいました。この生徒は、はかった質量とフラスコの体積から濃度を計算します。真の濃度は、計算した値とくらべてどうなりますか。</p>",
      options: [
        // EN: Higher, because more water dissolves more solid
        "高い。水が多いほど、多くの固体が溶けるから",
        // EN: Lower, because the same amount of solute is in a larger volume
        "低い。同じ物質量の溶質が、より大きな体積に入っているから",
        // EN: The same, because the amount of solute has not changed
        "同じ。溶質の物質量は変わっていないから",
        // EN: Lower, because some solute is lost over the mark
        "低い。溶質の一部が標線を越えて失われるから",
      ],
      hints: [
        // EN: Concentration = amount ÷ volume. Which of these has changed?
        "濃度 = 物質量 ÷ 体積。このうち、どちらが変わったでしょうか。",
      ],
      // EN: <p>The amount of solute is unchanged but the volume is larger than the flask’s stated volume, so the true concentration is <strong>lower</strong> than calculated. The solution must be made again; you cannot remove water. Add the last few cm³ with a dropping pipette.</p>
      solution: "<p>溶質の物質量は変わりませんが、体積がフラスコに表示された体積より大きいので、真の濃度は計算より<strong>低く</strong>なります。水は取り除けないので、溶液はつくり直さなければなりません。最後の数 cm³ はスポイトで加えましょう。</p>",
      misconception: {
        // EN (option A): All the solid had already dissolved. Extra water only spreads the same amount of solute through more volume.
        "0": "固体はすでにすべて溶けていました。余分な水は、同じ物質量の溶質を、より大きな体積に広げるだけです。",
        // EN (option C): The amount is the same, but concentration is amount ÷ volume, and the volume is now larger.
        "2": "物質量は同じですが、濃度は物質量 ÷ 体積で、その体積が大きくなっています。",
        // EN (option D): Nothing is lost from the flask. The problem is the extra water.
        "3": "フラスコから何も失われていません。問題は余分な水です。",
      },
    },

    // ── lab-standard-solution-q009 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q009": {
      // EN: <p>A student weighs 2.50 g of solid by difference on a balance that reads to ±0.01 g, and makes it up to 100.0 <span class="unit">cm3</span> in a volumetric flask with an uncertainty of ±0.10 <span class="unit">cm3</span>.</p><p>Calculate the percentage uncertainty in the concentration of the solution. Ignore the uncertainty in the molar mass.</p>
      stem: "<p>ある生徒が、±0.01 g まで読める電子てんびんで、差し引きによって固体 2.50 g をはかり、不確かさ ±0.10 <span class=\"unit\">cm3</span> のメスフラスコで 100.0 <span class=\"unit\">cm3</span> にします。</p><p>この溶液の濃度の百分率の不確かさを計算しなさい (calculate)。モル質量の不確かさは無視しなさい。</p>",
      hints: [
        // EN: Weighing by difference uses two readings, so the mass is ±0.02 g.
        "差し引きによるひょう量は 2 回の読みを使うので、質量は ±0.02 g です。",
        // EN: Concentration = (m ÷ M) ÷ V: add the percentage uncertainties of m and V.
        "濃度 = (m ÷ M) ÷ V：m と V の百分率の不確かさを足します。",
      ],
      // EN: <div class="worked__math">mass: 0.02 ÷ 2.50 × 100 = 0.8 %</div><div class="worked__math">volume: 0.10 ÷ 100.0 × 100 = 0.1 %</div><div class="worked__math">concentration: 0.8 % + 0.1 % = 0.9 %</div><p>The balance, not the flask, controls the uncertainty here. A larger mass, or a balance reading to 0.001 g, would reduce it.</p>
      solution: "<div class=\"worked__math\">質量：0.02 ÷ 2.50 × 100 = 0.8 %</div><div class=\"worked__math\">体積：0.10 ÷ 100.0 × 100 = 0.1 %</div><div class=\"worked__math\">濃度：0.8 % + 0.1 % = 0.9 %</div><p>ここで不確かさを決めているのは、フラスコではなく電子てんびんです。質量を大きくするか、0.001 g まで読める電子てんびんを使えば、小さくできます。</p>",
    },

    // ── lab-standard-solution-q010 · short · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q010": {
      // EN: <p>A student makes five standards by running 2.00, 4.00, 6.00, 8.00 and 10.00 <span class="unit">cm3</span> of stock solution from a burette into test tubes, and making each up to 10.00 <span class="unit">cm3</span> with water from a second burette.</p><p>Explain why the standard made from 2.00 <span class="unit">cm3</span> of stock has the largest percentage uncertainty in its concentration.</p>
      stem: "<p>ある生徒が、ビュレットから原液を 2.00、4.00、6.00、8.00、10.00 <span class=\"unit\">cm3</span> ずつ試験管に入れ、2 本目のビュレットから水を加えてそれぞれ 10.00 <span class=\"unit\">cm3</span> にして、5 つの標準溶液をつくります。</p><p>原液 2.00 <span class=\"unit\">cm3</span> からつくった標準溶液の濃度の百分率の不確かさが最も大きい理由を説明しなさい (explain)。</p>",
      hints: [
        // EN: Does the burette’s uncertainty depend on how much you run out?
        "ビュレットの不確かさは、出す量によって変わるでしょうか。",
        // EN: Percentage uncertainty = absolute ÷ value × 100.
        "百分率の不確かさ = 絶対不確かさ ÷ 値 × 100。",
      ],
      // EN: <p>The burette uncertainty is fixed (±0.05 cm³ per reading, so ±0.10 cm³ for a volume run out). 0.10 ÷ 2.00 × 100 = 5 %, but 0.10 ÷ 10.00 × 100 = 1 %. The smallest volume carries the largest percentage uncertainty.</p>
      solution: "<p>ビュレットの不確かさは一定です（1 回の読みにつき ±0.05 cm³ なので、出した体積では ±0.10 cm³）。0.10 ÷ 2.00 × 100 = 5 % ですが、0.10 ÷ 10.00 × 100 = 1 % です。最も小さい体積が、最も大きい百分率の不確かさをもちます。</p>",
      // EN: <p>Every volume from the burette has the same absolute uncertainty (±0.10 cm³ from two readings). For the smallest volume, 2.00 cm³, this is the largest fraction of the volume (5 %, compared with 1 % for 10.00 cm³), so its concentration has the largest percentage uncertainty.</p>
      answer: "<p>ビュレットではかる体積は、どれも同じ絶対不確かさ（2 回の読みから ±0.10 cm³）をもつ。最も小さい体積 2.00 cm³ では、これが体積に占める割合が最も大きい（5 %。10.00 cm³ では 1 %）。そのため、その濃度の百分率の不確かさが最も大きい。</p>",
      markscheme: [
        // EN: Same absolute uncertainty (±0.05 cm³ per reading / ±0.10 cm³ per volume) for every volume measured with the burette.
        "ビュレットではかるどの体積でも、絶対不確かさは同じ（1 回の読みにつき ±0.05 cm³ / 1 つの体積につき ±0.10 cm³）。",
        // EN: It is the largest percentage / fraction of the smallest volume (2.00 cm³): 5 % compared with 1 % for 10.00 cm³.
        "最も小さい体積（2.00 cm³）では、それが占める百分率 / 割合が最も大きい：5 %。10.00 cm³ では 1 %。",
      ],
    },

    // ── lab-standard-solution-q011 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q011": {
      // EN: <p>A calibration curve uses standards with absorbances from 0.00 to 0.74. An unknown solution gives an absorbance of 0.95. What should the student do?</p>
      stem: "<p>ある検量線は、吸光度 0.00〜0.74 の標準溶液を使っています。未知の溶液の吸光度は 0.95 でした。生徒はどうすべきですか。</p>",
      options: [
        // EN: Extend the line of best fit and read the concentration from it
        "最もよく合う直線を延ばし、そこから濃度を読み取る",
        // EN: Dilute the unknown by a known factor, measure it again, and multiply the result by the factor
        "未知の溶液を決まった倍率でうすめ、もう一度測定し、結果にその倍率をかける",
        // EN: Change to a filter of a different colour and measure the unknown only
        "違う色のフィルターに変えて、未知の溶液だけを測定する",
        // EN: Report the concentration of the most concentrated standard
        "いちばん濃い標準溶液の濃度を報告する",
      ],
      hints: [
        // EN: Is the unknown inside the range of the standards?
        "未知の溶液は、標準溶液の範囲の中にあるでしょうか。",
        // EN: How could you bring it inside that range without losing track of its concentration?
        "濃度がわからなくならないようにして、その範囲の中に入れるにはどうすればよいでしょうか。",
      ],
      // EN: <p>Only read values inside the range of the standards. Dilute the unknown accurately (for example 10.00 cm³ by pipette into a 25.00 cm³ volumetric flask, a factor of 2.5), measure it, read its concentration from the line, and multiply by the dilution factor.</p>
      solution: "<p>読み取るのは、標準溶液の範囲の中の値だけです。未知の溶液を正確にうすめ（たとえば 10.00 cm³ をホールピペットで 25.00 cm³ のメスフラスコに入れると、倍率は 2.5）、測定して直線から濃度を読み取り、希釈倍率をかけます。</p>",
      misconception: {
        // EN (option A): The line has only been tested inside the range of the standards. Above that it may bend, so extrapolating is not reliable.
        "0": "直線が確かめられているのは、標準溶液の範囲の中だけです。その外では曲がるかもしれないので、外挿は信頼できません。",
        // EN (option C): Every reading must use the same filter as the standards, or the line no longer applies.
        "2": "すべての読みに、標準溶液と同じフィルターを使わなければなりません。そうしないと、直線が使えなくなります。",
        // EN (option D): The unknown is more concentrated than the top standard, so this value would certainly be too low.
        "3": "未知の溶液はいちばん濃い標準溶液より濃いので、この値は確実に低すぎます。",
      },
    },

    // ── lab-standard-solution-q012 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q012": {
      // EN: <p>A calibration curve gives [<span class="chem">CuSO4</span>] = 0.138 <span class="unit">mol dm-3</span> for an unknown solution. Calculate the concentration in <span class="unit">g dm-3</span>. <i>M</i>(<span class="chem">CuSO4</span>) = 159.62 <span class="unit">g mol-1</span></p>
      stem: "<p>検量線から、ある未知の溶液の [<span class=\"chem\">CuSO4</span>] = 0.138 <span class=\"unit\">mol dm-3</span> が得られました。この濃度を <span class=\"unit\">g dm-3</span> 単位で計算しなさい (calculate)。<i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: To go from mol dm⁻³ to g dm⁻³, multiply by the molar mass.
        "mol dm⁻³ から g dm⁻³ にするには、モル質量をかけます。",
      ],
      // EN: <div class="worked__math">0.138 <span class="unit">mol dm-3</span> × 159.62 <span class="unit">g mol-1</span> = 22.0 <span class="unit">g dm-3</span></div><p>The square brackets mean “concentration in mol dm⁻³”. Use the molar mass of the dissolved substance, <span class="chem">CuSO4</span>, not of the hydrate.</p>
      solution: "<div class=\"worked__math\">0.138 <span class=\"unit\">mol dm-3</span> × 159.62 <span class=\"unit\">g mol-1</span> = 22.0 <span class=\"unit\">g dm-3</span></div><p>角かっこは「mol dm⁻³ で表した濃度」という意味です。水和物ではなく、溶けている物質 <span class=\"chem\">CuSO4</span> のモル質量を使います。</p>",
    },

    // ── lab-standard-solution-q013 · mcq · challenge · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q013": {
      // EN: <p>A student forgets to zero the colorimeter with the blank. Every reading, for the standards and for the unknown, is 0.05 higher than it should be. The student draws the line of best fit through the points, without forcing it through the origin.</p><div class="table-scroll"><table class="data"><caption>Two of the readings</caption><thead><tr><th scope="col">Solution</th><th scope="col" class="num">[CuSO₄] / mol dm⁻³</th><th scope="col" class="num">Absorbance</th></tr></thead><tbody><tr><th scope="row">Standard 1</th><td class="num">0.0500</td><td class="num">0.20</td></tr><tr><th scope="row">Standard 5</th><td class="num">0.2500</td><td class="num">0.79</td></tr></tbody></table></div><p>What is the effect on the concentration of the unknown read from the line?</p>
      stem: "<p>ある生徒が、ブランクで比色計のゼロを合わせるのを忘れました。標準溶液も未知の溶液も、すべての読みが本来より 0.05 高くなっています。生徒は、原点を通るようにはせずに、点に最もよく合う直線を引きます。</p><div class=\"table-scroll\"><table class=\"data\"><caption>読みのうちの 2 つ</caption><thead><tr><th scope=\"col\">溶液</th><th scope=\"col\" class=\"num\">[CuSO₄] / mol dm⁻³</th><th scope=\"col\" class=\"num\">吸光度</th></tr></thead><tbody><tr><th scope=\"row\">標準溶液 1</th><td class=\"num\">0.0500</td><td class=\"num\">0.20</td></tr><tr><th scope=\"row\">標準溶液 5</th><td class=\"num\">0.2500</td><td class=\"num\">0.79</td></tr></tbody></table></div><p>直線から読み取る未知の溶液の濃度には、どんな影響がありますか。</p>",
      options: [
        // EN: Little or no effect, because the line and the unknown are both shifted up by the same amount
        "影響はほとんどない。直線と未知の溶液が、どちらも同じだけ上にずれるから",
        // EN: Too high, because the unknown’s absorbance is 0.05 too high
        "高すぎる。未知の溶液の吸光度が 0.05 高すぎるから",
        // EN: Too low, because the line is shifted up more than the unknown
        "低すぎる。直線が未知の溶液より大きく上にずれるから",
        // EN: Too high, because the gradient of the line is larger
        "高すぎる。直線の傾きが大きくなるから",
      ],
      hints: [
        // EN: What does adding 0.05 to every point do to the line of best fit: its gradient, or its intercept?
        "すべての点に 0.05 を足すと、最もよく合う直線の何が変わるでしょうか。傾きでしょうか、切片でしょうか。",
        // EN: Then where does the unknown land on the shifted line?
        "では、ずれた直線の上で、未知の溶液はどこに来るでしょうか。",
      ],
      // EN: <p>A constant offset raises every point by 0.05, so the best-fit line moves up by 0.05 with the same gradient: its intercept becomes about 0.05 instead of 0. The unknown is raised by the same 0.05, so reading across to the line gives the same concentration. It is still a systematic error: if the student had forced the line through the origin, the result would be too high. Zeroing with the blank removes it.</p>
      solution: "<p>一定のずれはすべての点を 0.05 上げるので、最もよく合う直線は傾きが同じまま 0.05 上に動きます。切片は 0 ではなく約 0.05 になります。未知の溶液も同じ 0.05 だけ上がるので、横に進んで直線に当てると、同じ濃度になります。それでも、これは系統誤差です。もし生徒が直線を原点に通していたら、結果は高すぎたでしょう。ブランクでゼロを合わせれば取り除けます。</p>",
      misconception: {
        // EN (option B): The unknown is 0.05 too high, but so is the line at every concentration. Reading across lands on the same concentration.
        "1": "未知の溶液は 0.05 高すぎますが、直線もどの濃度でも同じだけ高くなっています。横に進んで読むと、同じ濃度になります。",
        // EN (option C): The offset is the same for every reading, so the line and the unknown move by exactly the same amount.
        "2": "ずれはすべての読みで同じなので、直線と未知の溶液はちょうど同じだけ動きます。",
        // EN (option D): Adding the same amount to every reading moves the line up without changing its slope.
        "3": "すべての読みに同じ量を足すと、直線は傾きを変えずに上に動きます。",
      },
    },

  }
});
