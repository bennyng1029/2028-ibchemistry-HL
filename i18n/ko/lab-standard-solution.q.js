/* lab-standard-solution.q — ko question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 'lab-standard-solution.q', {
  questions: {

    // ── lab-standard-solution-q001 · numeric · foundation · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q001": {
      // EN: <p>A student needs 250.0 <span class="unit">cm3</span> of a 0.0400 <span class="unit">mol dm-3</span> standard solution of sodium carbonate, <span class="chem">Na2CO3</span>.</p><p>Calculate the mass of sodium carbonate the student must weigh. <i>M</i>(<span class="chem">Na2CO3</span>) = 105.99 <span class="unit">g mol-1</span></p>
      stem: "<p>한 학생에게 0.0400 <span class=\"unit\">mol dm-3</span> 탄산 나트륨(<span class=\"chem\">Na2CO3</span>) 표준 용액 250.0 <span class=\"unit\">cm3</span>가 필요해요.</p><p>학생이 재야 하는 탄산 나트륨의 질량을 계산하시오 (calculate). <i>M</i>(<span class=\"chem\">Na2CO3</span>) = 105.99 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: Convert 250.0 cm³ to dm³ first.
        "먼저 250.0 cm³를 dm³로 바꿔요.",
        // EN: n = C × V, then m = n × M.
        "n = C × V, 그다음 m = n × M.",
      ],
      // EN: <div class="worked__math"><i>V</i> = 250.0 <span class="unit">cm3</span> ÷ 1000 = 0.2500 <span class="unit">dm3</span></div><div class="worked__math"><i>n</i> = 0.0400 <span class="unit">mol dm-3</span> × 0.2500 <span class="unit">dm3</span> = 0.0100 <span class="unit">mol</span></div><div class="worked__math"><i>m</i> = 0.0100 <span class="unit">mol</span> × 105.99 <span class="unit">g mol-1</span> = 1.06 <span class="unit">g</span></div><p>M1 for the amount (with the volume in dm³), M2 for the mass.</p>
      solution: "<div class=\"worked__math\"><i>V</i> = 250.0 <span class=\"unit\">cm3</span> ÷ 1000 = 0.2500 <span class=\"unit\">dm3</span></div><div class=\"worked__math\"><i>n</i> = 0.0400 <span class=\"unit\">mol dm-3</span> × 0.2500 <span class=\"unit\">dm3</span> = 0.0100 <span class=\"unit\">mol</span></div><div class=\"worked__math\"><i>m</i> = 0.0100 <span class=\"unit\">mol</span> × 105.99 <span class=\"unit\">g mol-1</span> = 1.06 <span class=\"unit\">g</span></div><p>M1은 양(부피를 dm³로 바꿔 계산), M2는 질량이에요.</p>",
    },

    // ── lab-standard-solution-q002 · order · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q002": {
      // EN: <p>Put these steps for preparing a standard solution in the correct order.</p>
      stem: "<p>표준 용액을 만드는 다음 단계들을 올바른 순서로 놓으세요.</p>",
      options: [
        // EN: Weigh the solid accurately
        "고체의 질량을 정확히 잰다",
        // EN: Dissolve it in a small volume of distilled water in a beaker
        "비커에서 적은 양의 증류수에 녹인다",
        // EN: Pour the solution through a funnel into a volumetric flask
        "깔때기를 통해 용액을 부피 플라스크에 붓는다",
        // EN: Rinse the beaker, rod and funnel with distilled water and add the rinsings to the flask
        "비커, 유리 막대, 깔때기를 증류수로 헹구고 헹군 물을 플라스크에 넣는다",
        // EN: Add distilled water until the bottom of the meniscus is on the mark
        "메니스커스의 바닥이 표선에 닿을 때까지 증류수를 넣는다",
        // EN: Stopper the flask and invert it several times
        "플라스크에 마개를 막고 여러 번 뒤집는다",
      ],
      hints: [
        // EN: The solid must be fully dissolved before it goes into the flask.
        "고체는 플라스크에 넣기 전에 완전히 녹아 있어야 해요.",
        // EN: Mixing comes last, once the volume is right.
        "섞기는 부피를 맞춘 다음 맨 마지막에 해요.",
      ],
      // EN: <p>Weigh → dissolve in a beaker → transfer to the volumetric flask → add the rinsings → make up to the mark → stopper and invert. The rinsings go in <em>before</em> making up to the mark, because they are part of the final volume.</p>
      solution: "<p>질량 재기 → 비커에서 녹이기 → 부피 플라스크로 옮기기 → 헹군 물 넣기 → 표선까지 채우기 → 마개를 막고 뒤집기. 헹군 물은 최종 부피의 일부이므로 표선까지 채우기 <em>전에</em> 넣어요.</p>",
    },

    // ── lab-standard-solution-q003 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q003": {
      // EN: <p>A student must measure exactly 10.00 <span class="unit">cm3</span> of a stock solution for a dilution. Which piece of glassware is the most suitable?</p>
      stem: "<p>희석을 위해 원액을 정확히 10.00 <span class=\"unit\">cm3</span> 재야 해요. 가장 알맞은 유리 기구는 무엇인가요?</p>",
      options: [
        // EN: A 10 cm³ measuring cylinder
        "10 cm³ 눈금실린더",
        // EN: A 10.00 cm³ volumetric pipette
        "10.00 cm³ 부피 피펫",
        // EN: A 50 cm³ beaker
        "50 cm³ 비커",
        // EN: A 25 cm³ conical flask
        "25 cm³ 삼각 플라스크",
      ],
      hints: [
        // EN: Which piece of glassware is made to deliver one volume very precisely?
        "한 가지 부피를 아주 정밀하게 옮기도록 만든 유리 기구는 무엇일까요?",
      ],
      // EN: <p>A volumetric (bulb) pipette delivers one fixed volume with a small uncertainty (about ±0.02 to ±0.04 <span class="unit">cm3</span>). A burette would also be acceptable. A measuring cylinder is not precise enough.</p>
      solution: "<p>부피(홀) 피펫은 정해진 부피 하나를 작은 불확도(약 ±0.02 ~ ±0.04 <span class=\"unit\">cm3</span>)로 옮겨요. 뷰렛도 인정돼요. 눈금실린더는 정밀도가 부족해요.</p>",
      misconception: {
        // EN (option A): A measuring cylinder is fine for rough volumes, but its uncertainty is several times larger than that of a pipette. Markschemes do not accept it for a standard solution or dilution.
        "0": "눈금실린더는 대략적인 부피에는 괜찮지만, 불확도가 피펫보다 몇 배 커요. 채점 기준은 표준 용액이나 희석에 눈금실린더를 인정하지 않아요.",
        // EN (option C): The marks on a beaker are only a rough guide, often ±5 % or worse.
        "2": "비커의 눈금은 대략적인 기준일 뿐이고, 흔히 ±5 % 이상 차이 나요.",
        // EN (option D): A conical flask is used to hold a solution in a titration. Its marks, if any, are not for measuring.
        "3": "삼각 플라스크는 적정에서 용액을 담는 데 써요. 눈금이 있더라도 부피를 재는 용도가 아니에요.",
      },
    },

    // ── lab-standard-solution-q004 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q004": {
      // EN: <p>To make one standard, a student runs 3.50 <span class="unit">cm3</span> of 0.250 <span class="unit">mol dm-3</span> copper(II) sulfate from one burette and 6.50 <span class="unit">cm3</span> of distilled water from another into a test tube, and mixes them.</p><p>Calculate the concentration of copper(II) sulfate in the test tube.</p>
      stem: "<p>표준 용액 하나를 만들기 위해, 한 학생이 뷰렛 하나로 0.250 <span class=\"unit\">mol dm-3</span> 황산 구리(II) 3.50 <span class=\"unit\">cm3</span>를, 다른 뷰렛으로 증류수 6.50 <span class=\"unit\">cm3</span>를 시험관에 넣고 섞어요.</p><p>시험관 속 황산 구리(II)의 농도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: The total volume is 3.50 + 6.50 cm³.
        "전체 부피는 3.50 + 6.50 cm³예요.",
        // EN: C₂ = C₁ × V₁ ÷ V₂.
        "C₂ = C₁ × V₁ ÷ V₂.",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>2</sub> = 3.50 + 6.50 = 10.00 <span class="unit">cm3</span></div><div class="worked__math"><i>C</i><sub>2</sub> = 0.250 × 3.50 ÷ 10.00 = 0.0875 <span class="unit">mol dm-3</span></div>
      solution: "<div class=\"worked__math\"><i>V</i><sub>2</sub> = 3.50 + 6.50 = 10.00 <span class=\"unit\">cm3</span></div><div class=\"worked__math\"><i>C</i><sub>2</sub> = 0.250 × 3.50 ÷ 10.00 = 0.0875 <span class=\"unit\">mol dm-3</span></div>",
    },

    // ── lab-standard-solution-q005 · short · exam · SL · Structure 1.4.5 · 3 marks
    "lab-standard-solution-q005": {
      // EN: <p>Describe how you would prepare 100.0 <span class="unit">cm3</span> of 0.0250 <span class="unit">mol dm-3</span> copper(II) sulfate solution from a 0.250 <span class="unit">mol dm-3</span> stock solution. Include the volume of stock solution needed.</p>
      stem: "<p>0.250 <span class=\"unit\">mol dm-3</span> 원액으로 0.0250 <span class=\"unit\">mol dm-3</span> 황산 구리(II) 용액 100.0 <span class=\"unit\">cm3</span>를 만드는 방법을 서술하시오 (describe). 필요한 원액의 부피도 쓰시오.</p>",
      hints: [
        // EN: Use C₁V₁ = C₂V₂ to find V₁.
        "C₁V₁ = C₂V₂로 V₁을 구해요.",
        // EN: Name the glassware for each volume, then say how to finish and mix.
        "부피마다 쓰는 유리 기구 이름을 쓰고, 마무리하고 섞는 방법을 쓰세요.",
      ],
      // EN: <div class="worked__math"><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> ÷ <i>C</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 <span class="unit">cm3</span></div><p>Pipette 10.0 cm³ of stock into a 100.0 cm³ volumetric flask. Add distilled water until the bottom of the meniscus is on the mark, adding the last drops with a dropping pipette. Stopper and invert several times. Do not write “add 90 cm³ of water”: the flask is filled <em>to the mark</em>.</p>
      solution: "<div class=\"worked__math\"><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> ÷ <i>C</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 <span class=\"unit\">cm3</span></div><p>원액 10.0 cm³를 피펫으로 100.0 cm³ 부피 플라스크에 넣어요. 메니스커스의 바닥이 표선에 닿을 때까지 증류수를 넣고, 마지막 몇 방울은 스포이트로 넣어요. 마개를 막고 여러 번 뒤집어요. “물 90 cm³를 넣는다”라고 쓰지 마세요: 플라스크는 <em>표선까지</em> 채워요.</p>",
      // EN: <p><i>V</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 cm³. Measure 10.0 cm³ of the stock with a pipette (or burette) into a 100.0 cm³ volumetric flask. Add distilled water up to the mark, then stopper and invert to mix.</p>
      answer: "<p><i>V</i><sub>1</sub> = 0.0250 × 100.0 ÷ 0.250 = 10.0 cm³. 원액 10.0 cm³를 피펫(또는 뷰렛)으로 재서 100.0 cm³ 부피 플라스크에 넣는다. 표선까지 증류수를 넣은 다음, 마개를 막고 뒤집어 섞는다.</p>",
      markscheme: [
        // EN: M1: volume of stock = 10.0 cm³.
        "M1: 원액의 부피 = 10.0 cm³.",
        // EN: M2: measured with a (volumetric) pipette OR burette, into a 100.0 cm³ volumetric flask. (Do not accept a measuring cylinder.)
        "M2: (부피) 피펫 또는 뷰렛으로 재서 100.0 cm³ 부피 플라스크에 넣음. (눈금실린더는 불인정.)",
        // EN: M3: make up to the mark with distilled/deionized water AND stopper and invert/mix.
        "M3: 증류수/탈이온수로 표선까지 채우고, 마개를 막고 뒤집기/섞기.",
      ],
    },

    // ── lab-standard-solution-q006 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q006": {
      // EN: <p>A student plots a calibration curve for copper(II) sulfate. The line of best fit has a gradient of 2.84 <span class="unit">dm3 mol-1</span> and a <i>y</i>-intercept of 0.01. The mean absorbance of an unknown solution is 0.52.</p><p>Calculate the concentration of copper(II) sulfate in the unknown.</p>
      stem: "<p>한 학생이 황산 구리(II)의 검량선을 그려요. 가장 잘 맞는 직선의 기울기는 2.84 <span class=\"unit\">dm3 mol-1</span>이고 <i>y</i>절편은 0.01이에요. 미지 용액의 평균 흡광도는 0.52예요.</p><p>미지 용액 속 황산 구리(II)의 농도를 계산하시오 (calculate).</p>",
      hints: [
        // EN: The line is absorbance = gradient × concentration + intercept.
        "직선은 흡광도 = 기울기 × 농도 + 절편이에요.",
        // EN: Rearrange: concentration = (absorbance − intercept) ÷ gradient.
        "식을 바꾸면: 농도 = (흡광도 − 절편) ÷ 기울기.",
      ],
      // EN: <div class="worked__math">[<span class="chem">CuSO4</span>] = (0.52 − 0.01) ÷ 2.84 = 0.18 <span class="unit">mol dm-3</span></div><p>The absorbance has 2 significant figures, so 0.18 <span class="unit">mol dm-3</span> (0.180 is also accepted).</p>
      solution: "<div class=\"worked__math\">[<span class=\"chem\">CuSO4</span>] = (0.52 − 0.01) ÷ 2.84 = 0.18 <span class=\"unit\">mol dm-3</span></div><p>흡광도가 유효 숫자 2자리이므로 0.18 <span class=\"unit\">mol dm-3</span>예요 (0.180도 인정).</p>",
    },

    // ── lab-standard-solution-q007 · mcq · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q007": {
      // EN: <p>Copper(II) sulfate solution is blue. Why is a red filter used in the colorimeter when making its calibration curve?</p>
      stem: "<p>황산 구리(II) 용액은 파란색이에요. 이 용액의 검량선을 만들 때 비색계에 빨간색 필터를 쓰는 이유는 무엇인가요?</p>",
      options: [
        // EN: The solution absorbs red light most strongly, so absorbance changes most with concentration
        "용액이 빨간빛을 가장 강하게 흡수하므로, 농도에 따라 흡광도가 가장 크게 변한다",
        // EN: Blue light passes through the solution, so the colorimeter measures the blue colour
        "파란빛이 용액을 통과하므로, 비색계가 파란색을 잰다",
        // EN: Red light has the most energy, so it gives the largest readings
        "빨간빛의 에너지가 가장 크므로, 측정값이 가장 크다",
        // EN: The filter should be the same colour as the solution
        "필터는 용액과 같은 색이어야 한다",
      ],
      hints: [
        // EN: A solution looks blue because blue light reaches your eye. What happens to the other colours?
        "용액이 파랗게 보이는 것은 파란빛이 눈에 들어오기 때문이에요. 다른 색들은 어떻게 될까요?",
        // EN: Look at the colour wheel in the data booklet.
        "데이터 부클릿의 색상환을 보세요.",
      ],
      // EN: <p>A blue solution absorbs the complementary colour, orange–red, most strongly. With a red filter the absorbance changes a lot as the concentration changes, so the calibration line is steep and each reading is precise compared with its size.</p>
      solution: "<p>파란색 용액은 보색인 주황–빨간색 빛을 가장 강하게 흡수해요. 빨간색 필터를 쓰면 농도가 변할 때 흡광도가 크게 변하므로, 검량선이 가파르고 각 측정값이 그 크기에 비해 정밀해요.</p>",
      misconception: {
        // EN (option B): The solution looks blue because blue light passes through it. Light that passes through is not absorbed, so it shows little change with concentration.
        "1": "용액이 파랗게 보이는 것은 파란빛이 용액을 통과하기 때문이에요. 통과하는 빛은 흡수되지 않으므로 농도에 따라 거의 변하지 않아요.",
        // EN (option C): Red light has the lowest energy of the visible colours. The choice is about which colour the solution absorbs.
        "2": "빨간빛은 가시광선 중 에너지가 가장 작아요. 필터는 용액이 어떤 색을 흡수하는지에 따라 골라요.",
        // EN (option D): A filter of the same colour lets through light the solution hardly absorbs. The readings would be tiny.
        "3": "같은 색 필터는 용액이 거의 흡수하지 않는 빛을 통과시켜요. 측정값이 아주 작을 거예요.",
      },
    },

    // ── lab-standard-solution-q008 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q008": {
      // EN: <p>While making a standard solution, a student adds water too quickly and the meniscus ends up above the mark of the volumetric flask. The student calculates the concentration from the mass weighed and the volume of the flask. How does the true concentration compare with the calculated value?</p>
      stem: "<p>표준 용액을 만드는 동안, 한 학생이 물을 너무 빨리 넣어서 메니스커스가 부피 플라스크의 표선보다 위에 있게 되었어요. 학생은 잰 질량과 플라스크의 부피로 농도를 계산해요. 실제 농도는 계산값과 비교해 어떤가요?</p>",
      options: [
        // EN: Higher, because more water dissolves more solid
        "더 높다. 물이 많을수록 고체가 더 많이 녹기 때문이다",
        // EN: Lower, because the same amount of solute is in a larger volume
        "더 낮다. 같은 양의 용질이 더 큰 부피에 들어 있기 때문이다",
        // EN: The same, because the amount of solute has not changed
        "같다. 용질의 양이 변하지 않았기 때문이다",
        // EN: Lower, because some solute is lost over the mark
        "더 낮다. 용질 일부가 표선 위로 넘쳐 없어지기 때문이다",
      ],
      hints: [
        // EN: Concentration = amount ÷ volume. Which of these has changed?
        "농도 = 양 ÷ 부피. 이 중 무엇이 바뀌었나요?",
      ],
      // EN: <p>The amount of solute is unchanged but the volume is larger than the flask’s stated volume, so the true concentration is <strong>lower</strong> than calculated. The solution must be made again; you cannot remove water. Add the last few cm³ with a dropping pipette.</p>
      solution: "<p>용질의 양은 그대로지만 부피가 플라스크에 표시된 부피보다 크므로, 실제 농도는 계산값보다 <strong>낮아요</strong>. 물을 뺄 수는 없으므로 용액을 다시 만들어야 해요. 마지막 몇 cm³는 스포이트로 넣으세요.</p>",
      misconception: {
        // EN (option A): All the solid had already dissolved. Extra water only spreads the same amount of solute through more volume.
        "0": "고체는 이미 모두 녹아 있었어요. 물을 더 넣으면 같은 양의 용질이 더 큰 부피로 퍼질 뿐이에요.",
        // EN (option C): The amount is the same, but concentration is amount ÷ volume, and the volume is now larger.
        "2": "양은 같지만 농도는 양 ÷ 부피이고, 이제 부피가 더 커졌어요.",
        // EN (option D): Nothing is lost from the flask. The problem is the extra water.
        "3": "플라스크에서 없어지는 것은 없어요. 문제는 더 들어간 물이에요.",
      },
    },

    // ── lab-standard-solution-q009 · numeric · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q009": {
      // EN: <p>A student weighs 2.50 g of solid by difference on a balance that reads to ±0.01 g, and makes it up to 100.0 <span class="unit">cm3</span> in a volumetric flask with an uncertainty of ±0.10 <span class="unit">cm3</span>.</p><p>Calculate the percentage uncertainty in the concentration of the solution. Ignore the uncertainty in the molar mass.</p>
      stem: "<p>한 학생이 ±0.01 g까지 읽는 저울로 고체 2.50 g을 차감 칭량하고, 불확도가 ±0.10 <span class=\"unit\">cm3</span>인 부피 플라스크에서 100.0 <span class=\"unit\">cm3</span>로 맞춰요.</p><p>용액 농도의 백분율 불확도를 계산하시오 (calculate). 몰 질량의 불확도는 무시하세요.</p>",
      hints: [
        // EN: Weighing by difference uses two readings, so the mass is ±0.02 g.
        "차감 칭량은 두 번 읽으므로 질량은 ±0.02 g이에요.",
        // EN: Concentration = (m ÷ M) ÷ V: add the percentage uncertainties of m and V.
        "농도 = (m ÷ M) ÷ V: m과 V의 백분율 불확도를 더해요.",
      ],
      // EN: <div class="worked__math">mass: 0.02 ÷ 2.50 × 100 = 0.8 %</div><div class="worked__math">volume: 0.10 ÷ 100.0 × 100 = 0.1 %</div><div class="worked__math">concentration: 0.8 % + 0.1 % = 0.9 %</div><p>The balance, not the flask, controls the uncertainty here. A larger mass, or a balance reading to 0.001 g, would reduce it.</p>
      solution: "<div class=\"worked__math\">질량: 0.02 ÷ 2.50 × 100 = 0.8 %</div><div class=\"worked__math\">부피: 0.10 ÷ 100.0 × 100 = 0.1 %</div><div class=\"worked__math\">농도: 0.8 % + 0.1 % = 0.9 %</div><p>여기서는 플라스크가 아니라 저울이 불확도를 좌우해요. 질량을 더 크게 하거나 0.001 g까지 읽는 저울을 쓰면 불확도가 줄어요.</p>",
    },

    // ── lab-standard-solution-q010 · short · exam · SL · Structure 1.4.5 · 2 marks
    "lab-standard-solution-q010": {
      // EN: <p>A student makes five standards by running 2.00, 4.00, 6.00, 8.00 and 10.00 <span class="unit">cm3</span> of stock solution from a burette into test tubes, and making each up to 10.00 <span class="unit">cm3</span> with water from a second burette.</p><p>Explain why the standard made from 2.00 <span class="unit">cm3</span> of stock has the largest percentage uncertainty in its concentration.</p>
      stem: "<p>한 학생이 뷰렛으로 원액 2.00, 4.00, 6.00, 8.00, 10.00 <span class=\"unit\">cm3</span>를 시험관에 넣고, 두 번째 뷰렛의 물로 각각 10.00 <span class=\"unit\">cm3</span>로 맞춰 표준 용액 5개를 만들어요.</p><p>원액 2.00 <span class=\"unit\">cm3</span>로 만든 표준 용액의 농도가 백분율 불확도가 가장 큰 이유를 설명하시오 (explain).</p>",
      hints: [
        // EN: Does the burette’s uncertainty depend on how much you run out?
        "뷰렛의 불확도는 얼마나 많이 흘려보내는지에 따라 달라질까요?",
        // EN: Percentage uncertainty = absolute ÷ value × 100.
        "백분율 불확도 = 절대 불확도 ÷ 값 × 100.",
      ],
      // EN: <p>The burette uncertainty is fixed (±0.05 cm³ per reading, so ±0.10 cm³ for a volume run out). 0.10 ÷ 2.00 × 100 = 5 %, but 0.10 ÷ 10.00 × 100 = 1 %. The smallest volume carries the largest percentage uncertainty.</p>
      solution: "<p>뷰렛의 불확도는 일정해요 (한 번 읽을 때 ±0.05 cm³, 흘려보낸 부피는 ±0.10 cm³). 0.10 ÷ 2.00 × 100 = 5 %이지만 0.10 ÷ 10.00 × 100 = 1 %예요. 가장 작은 부피가 가장 큰 백분율 불확도를 가져요.</p>",
      // EN: <p>Every volume from the burette has the same absolute uncertainty (±0.10 cm³ from two readings). For the smallest volume, 2.00 cm³, this is the largest fraction of the volume (5 %, compared with 1 % for 10.00 cm³), so its concentration has the largest percentage uncertainty.</p>
      answer: "<p>뷰렛으로 잰 부피는 모두 절대 불확도가 같다 (두 번 읽으므로 ±0.10 cm³). 가장 작은 부피인 2.00 cm³에서는 이 값이 부피에서 차지하는 비율이 가장 크다 (5 %, 10.00 cm³는 1 %). 그래서 이 표준 용액의 농도가 백분율 불확도가 가장 크다.</p>",
      markscheme: [
        // EN: Same absolute uncertainty (±0.05 cm³ per reading / ±0.10 cm³ per volume) for every volume measured with the burette.
        "뷰렛으로 잰 모든 부피의 절대 불확도가 같음 (한 번 읽을 때 ±0.05 cm³ / 부피 하나에 ±0.10 cm³).",
        // EN: It is the largest percentage / fraction of the smallest volume (2.00 cm³): 5 % compared with 1 % for 10.00 cm³.
        "가장 작은 부피(2.00 cm³)에서 가장 큰 백분율/비율이 됨: 5 %, 10.00 cm³는 1 %.",
      ],
    },

    // ── lab-standard-solution-q011 · mcq · exam · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q011": {
      // EN: <p>A calibration curve uses standards with absorbances from 0.00 to 0.74. An unknown solution gives an absorbance of 0.95. What should the student do?</p>
      stem: "<p>검량선에 쓴 표준 용액들의 흡광도는 0.00부터 0.74까지예요. 미지 용액의 흡광도는 0.95예요. 학생은 어떻게 해야 하나요?</p>",
      options: [
        // EN: Extend the line of best fit and read the concentration from it
        "가장 잘 맞는 직선을 연장해서 농도를 읽는다",
        // EN: Dilute the unknown by a known factor, measure it again, and multiply the result by the factor
        "미지 용액을 알고 있는 배수로 희석해서 다시 재고, 결과에 그 배수를 곱한다",
        // EN: Change to a filter of a different colour and measure the unknown only
        "다른 색 필터로 바꾸고 미지 용액만 잰다",
        // EN: Report the concentration of the most concentrated standard
        "가장 진한 표준 용액의 농도를 보고한다",
      ],
      hints: [
        // EN: Is the unknown inside the range of the standards?
        "미지 용액이 표준 용액의 범위 안에 있나요?",
        // EN: How could you bring it inside that range without losing track of its concentration?
        "농도를 놓치지 않으면서 그 범위 안으로 들어오게 하려면 어떻게 해야 할까요?",
      ],
      // EN: <p>Only read values inside the range of the standards. Dilute the unknown accurately (for example 10.00 cm³ by pipette into a 25.00 cm³ volumetric flask, a factor of 2.5), measure it, read its concentration from the line, and multiply by the dilution factor.</p>
      solution: "<p>표준 용액의 범위 안에 있는 값만 읽어요. 미지 용액을 정확히 희석하고 (예를 들어 피펫으로 10.00 cm³를 25.00 cm³ 부피 플라스크에 넣으면 희석 배수 2.5), 잰 다음, 직선에서 농도를 읽고, 희석 배수를 곱해요.</p>",
      misconception: {
        // EN (option A): The line has only been tested inside the range of the standards. Above that it may bend, so extrapolating is not reliable.
        "0": "직선은 표준 용액의 범위 안에서만 확인되었어요. 그 위에서는 휠 수 있으므로 외삽한 값은 믿을 수 없어요.",
        // EN (option C): Every reading must use the same filter as the standards, or the line no longer applies.
        "2": "모든 측정은 표준 용액과 같은 필터로 해야 해요. 그렇지 않으면 직선을 더 이상 쓸 수 없어요.",
        // EN (option D): The unknown is more concentrated than the top standard, so this value would certainly be too low.
        "3": "미지 용액은 가장 진한 표준 용액보다 진하므로, 이 값은 분명히 너무 낮아요.",
      },
    },

    // ── lab-standard-solution-q012 · numeric · foundation · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q012": {
      // EN: <p>A calibration curve gives [<span class="chem">CuSO4</span>] = 0.138 <span class="unit">mol dm-3</span> for an unknown solution. Calculate the concentration in <span class="unit">g dm-3</span>. <i>M</i>(<span class="chem">CuSO4</span>) = 159.62 <span class="unit">g mol-1</span></p>
      stem: "<p>검량선으로 구한 미지 용액의 [<span class=\"chem\">CuSO4</span>]는 0.138 <span class=\"unit\">mol dm-3</span>예요. 이 농도를 <span class=\"unit\">g dm-3</span> 단위로 계산하시오 (calculate). <i>M</i>(<span class=\"chem\">CuSO4</span>) = 159.62 <span class=\"unit\">g mol-1</span></p>",
      hints: [
        // EN: To go from mol dm⁻³ to g dm⁻³, multiply by the molar mass.
        "mol dm⁻³에서 g dm⁻³로 바꾸려면 몰 질량을 곱해요.",
      ],
      // EN: <div class="worked__math">0.138 <span class="unit">mol dm-3</span> × 159.62 <span class="unit">g mol-1</span> = 22.0 <span class="unit">g dm-3</span></div><p>The square brackets mean “concentration in mol dm⁻³”. Use the molar mass of the dissolved substance, <span class="chem">CuSO4</span>, not of the hydrate.</p>
      solution: "<div class=\"worked__math\">0.138 <span class=\"unit\">mol dm-3</span> × 159.62 <span class=\"unit\">g mol-1</span> = 22.0 <span class=\"unit\">g dm-3</span></div><p>대괄호는 “mol dm⁻³ 단위의 농도”를 뜻해요. 수화물이 아니라 녹아 있는 물질인 <span class=\"chem\">CuSO4</span>의 몰 질량을 써요.</p>",
    },

    // ── lab-standard-solution-q013 · mcq · challenge · SL · Structure 1.4.5 · 1 mark
    "lab-standard-solution-q013": {
      // EN: <p>A student forgets to zero the colorimeter with the blank. Every reading, for the standards and for the unknown, is 0.05 higher than it should be. The student draws the line of best fit through the points, without forcing it through the origin.</p><div class="table-scroll"><table class="data"><caption>Two of the readings</caption><thead><tr><th scope="col">Solution</th><th scope="col" class="num">[CuSO₄] / mol dm⁻³</th><th scope="col" class="num">Absorbance</th></tr></thead><tbody><tr><th scope="row">Standard 1</th><td class="num">0.0500</td><td class="num">0.20</td></tr><tr><th scope="row">Standard 5</th><td class="num">0.2500</td><td class="num">0.79</td></tr></tbody></table></div><p>What is the effect on the concentration of the unknown read from the line?</p>
      stem: "<p>한 학생이 바탕 용액으로 비색계의 영점을 맞추는 것을 잊었어요. 표준 용액과 미지 용액의 모든 측정값이 원래보다 0.05 높아요. 학생은 직선이 원점을 지나도록 억지로 맞추지 않고, 점들을 지나는 가장 잘 맞는 직선을 그어요.</p><div class=\"table-scroll\"><table class=\"data\"><caption>측정값 중 2개</caption><thead><tr><th scope=\"col\">용액</th><th scope=\"col\" class=\"num\">[CuSO₄] / mol dm⁻³</th><th scope=\"col\" class=\"num\">흡광도</th></tr></thead><tbody><tr><th scope=\"row\">표준 용액 1</th><td class=\"num\">0.0500</td><td class=\"num\">0.20</td></tr><tr><th scope=\"row\">표준 용액 5</th><td class=\"num\">0.2500</td><td class=\"num\">0.79</td></tr></tbody></table></div><p>직선에서 읽은 미지 용액의 농도에는 어떤 영향이 있나요?</p>",
      options: [
        // EN: Little or no effect, because the line and the unknown are both shifted up by the same amount
        "영향이 거의 없다. 직선과 미지 용액이 모두 같은 양만큼 위로 이동하기 때문이다",
        // EN: Too high, because the unknown’s absorbance is 0.05 too high
        "너무 높다. 미지 용액의 흡광도가 0.05만큼 너무 높기 때문이다",
        // EN: Too low, because the line is shifted up more than the unknown
        "너무 낮다. 직선이 미지 용액보다 더 많이 위로 이동하기 때문이다",
        // EN: Too high, because the gradient of the line is larger
        "너무 높다. 직선의 기울기가 더 커지기 때문이다",
      ],
      hints: [
        // EN: What does adding 0.05 to every point do to the line of best fit: its gradient, or its intercept?
        "모든 점에 0.05를 더하면 가장 잘 맞는 직선의 무엇이 바뀔까요: 기울기일까요, 절편일까요?",
        // EN: Then where does the unknown land on the shifted line?
        "그러면 미지 용액은 이동한 직선의 어디에 놓일까요?",
      ],
      // EN: <p>A constant offset raises every point by 0.05, so the best-fit line moves up by 0.05 with the same gradient: its intercept becomes about 0.05 instead of 0. The unknown is raised by the same 0.05, so reading across to the line gives the same concentration. It is still a systematic error: if the student had forced the line through the origin, the result would be too high. Zeroing with the blank removes it.</p>
      solution: "<p>일정한 차이가 모든 점을 0.05만큼 올리므로, 가장 잘 맞는 직선은 기울기는 그대로이고 0.05만큼 위로 이동해요: 절편이 0이 아니라 약 0.05가 돼요. 미지 용액도 같은 0.05만큼 올라가므로, 가로로 직선까지 가서 읽으면 같은 농도가 나와요. 그래도 이것은 계통 오차예요: 학생이 직선을 억지로 원점에 지나게 했다면 결과가 너무 높았을 거예요. 바탕 용액으로 영점을 맞추면 이 오차가 없어져요.</p>",
      misconception: {
        // EN (option B): The unknown is 0.05 too high, but so is the line at every concentration. Reading across lands on the same concentration.
        "1": "미지 용액은 0.05만큼 너무 높지만, 직선도 모든 농도에서 똑같이 높아요. 가로로 읽으면 같은 농도에 닿아요.",
        // EN (option C): The offset is the same for every reading, so the line and the unknown move by exactly the same amount.
        "2": "이 차이는 모든 측정값에 똑같으므로, 직선과 미지 용액이 정확히 같은 양만큼 움직여요.",
        // EN (option D): Adding the same amount to every reading moves the line up without changing its slope.
        "3": "모든 측정값에 같은 양을 더하면 직선은 기울기가 바뀌지 않고 위로 이동해요.",
      },
    },

  }
});
