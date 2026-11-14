/* lab-flame-tests.q — zh-Hant question translations for Structure Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'lab-flame-tests.q', {
  questions: {

    // ── lab-flame-tests-q001 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q001": {
      // EN: <p>A student looks at four light sources through a hand spectroscope. Which source gives a <strong>continuous</strong> spectrum?</p>
      stem: "<p>某學生透過手持分光鏡觀察四個光源。哪一個光源產生<strong>連續</strong>光譜？</p>",
      options: [
        // EN: A hydrogen discharge tube
        "氫放電管",
        // EN: A flame containing sodium chloride
        "含有氯化鈉的火焰",
        // EN: The hot filament of a lamp
        "燈泡中熾熱的燈絲",
        // EN: A mercury discharge tube
        "汞放電管",
      ],
      hints: [
        // EN: Which source is a hot solid, rather than excited atoms of a gas?
        "哪一個光源是熾熱的固體，而不是受激發的氣體原子？",
      ],
      // EN: <p>A hot solid emits light of every wavelength, so the spectrum is an unbroken band from violet to red. The other three sources contain excited gaseous atoms, which emit only certain wavelengths: a line spectrum.</p>
      solution: "<p>熾熱的固體發射所有波長的光，所以光譜是由紫色到紅色、沒有間斷的光帶。其他三個光源含有受激發的氣態原子，只發射某些波長的光：線光譜。</p>",
      misconception: {
        // EN (option A): Excited hydrogen atoms emit only certain wavelengths, so you see separate lines.
        "0": "受激發的氫原子只發射某些波長的光，所以你會看到分開的譜線。",
        // EN (option B): The sodium atoms in the flame emit one strong yellow-orange line, not a full band of colours.
        "1": "火焰中的鈉原子發射一條強烈的黃橙色譜線，而不是包含所有顏色的光帶。",
        // EN (option D): Mercury atoms emit a few separate lines (violet, blue, green, yellow), so this is a line spectrum.
        "3": "汞原子發射幾條分開的譜線（紫色、藍色、綠色、黃色），所以這是線光譜。",
      },
    },

    // ── lab-flame-tests-q002 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q002": {
      // EN: <p>Before each flame test, a student dips the wire loop in dilute hydrochloric acid and holds it in the flame until the flame shows no colour. What is the main reason for this?</p>
      stem: "<p>每次焰色試驗之前，某學生把金屬線圈浸入稀氫氯酸，然後放在火焰中，直至火焰不再帶有顏色。這樣做的主要原因是甚麼？</p>",
      options: [
        // EN: To make the salt stick to the wire
        "使鹽黏在金屬線上",
        // EN: To remove traces of earlier samples, so that only the new salt colours the flame
        "除去之前樣本的殘留物，使只有新的鹽令火焰帶有顏色",
        // EN: To turn the metal ions into metal atoms before the test
        "在測試前把金屬離子變成金屬原子",
        // EN: To make the flame hotter
        "使火焰更熱",
      ],
      hints: [
        // EN: Think about what the blank test (no colour) tells you.
        "想想空白測試（沒有顏色）告訴你甚麼。",
      ],
      // EN: <p>Traces of an earlier salt, or of sodium from fingers, would add their own colour. Heating the cleaned wire until the flame shows no colour is a blank test: it shows that any colour later comes from the new salt.</p>
      solution: "<p>之前的鹽或手指上的鈉的殘留物，會加入它們自己的顏色。把清潔過的金屬線加熱至火焰不再帶有顏色，就是空白測試：它顯示之後出現的任何顏色都來自新的鹽。</p>",
      misconception: {
        // EN (option A): The acid does help solid stick to the wire, but heating until there is no colour is a check that the wire is clean.
        "0": "酸確實有助固體黏在金屬線上，但加熱至沒有顏色，是為了檢查金屬線是否清潔。",
        // EN (option C): The cleaning step happens before any sample is added. It is about what is already on the wire.
        "2": "清潔步驟在加入任何樣本之前進行。它關乎金屬線上原本已有的東西。",
        // EN (option D): The acid does not change the temperature of the flame.
        "3": "酸不會改變火焰的溫度。",
      },
    },

    // ── lab-flame-tests-q003 · short · exam · SL · Structure 1.3.1 · 2 marks
    "lab-flame-tests-q003": {
      // EN: <p>When a little copper(II) chloride is held in a Bunsen flame, the flame turns blue-green. Explain how the coloured light is produced.</p>
      stem: "<p>把少量氯化銅(II) 放在本生燈火焰中，火焰變成藍綠色。解釋 (explain) 有色的光是怎樣產生的。</p>",
      hints: [
        // EN: What does the heat do to the electrons?
        "熱對電子有甚麼作用？",
        // EN: What is given out when they return, and what fixes its energy?
        "電子返回時發射甚麼？它的能量由甚麼決定？",
      ],
      // EN: <p>See the model answer. Two ideas earn the marks: excitation by heat, then emission of photons as electrons return to lower levels.</p>
      solution: "<p>見參考答案。兩個概念可以得分：電子受熱激發，然後返回較低能級時發射光子。</p>",
      // EN: <p>Heat from the flame excites electrons in the copper atoms (or ions) to higher energy levels. The electrons then fall back to lower energy levels and emit photons. The energy of each photon equals the energy difference between the two levels. Only certain differences are possible, so only certain wavelengths are emitted, and these give the colour we see.</p>
      answer: "<p>火焰的熱使銅原子（或離子）中的電子受激發，躍遷到較高的能級。電子然後落回較低的能級，並發射光子。每個光子的能量等於兩個能級之間的能量差。只有某些能量差是可能的，所以只發射某些波長的光，這些光就是我們看到的顏色。</p>",
      markscheme: [
        // EN: Electrons are excited / promoted to higher energy levels by the heat of the flame.
        "電子受火焰的熱激發／躍遷到較高的能級。",
        // EN: Electrons fall / return to lower energy levels and emit photons (light) whose energy equals the difference between the levels (accept: of specific wavelengths/frequencies).
        "電子落回／返回較低的能級，並發射光子（光），光子的能量等於能級之間的能量差（接受：特定的波長／頻率）。",
      ],
    },

    // ── lab-flame-tests-q004 · mcq · exam · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q004": {
      // EN: <p>Two unknown salts both give a red flame. One contains lithium ions and the other strontium ions. Which method is most likely to tell them apart?</p>
      stem: "<p>兩種未知的鹽都產生紅色火焰。一種含有鋰離子，另一種含有鍶離子。哪一種方法最有可能把它們區分出來？</p>",
      options: [
        // EN: Repeat each flame test three times and take the average colour
        "每種鹽的焰色試驗重複三次，取顏色的平均",
        // EN: Use a larger amount of each salt
        "每種鹽用較多份量",
        // EN: Look at each flame through a spectroscope and compare the lines with reference spectra
        "透過分光鏡觀察每個火焰，並把譜線與參考光譜比較",
        // EN: Use a luminous (yellow) Bunsen flame instead of a blue one
        "用發光的（黃色）本生燈火焰代替藍色火焰",
      ],
      hints: [
        // EN: Each element has its own pattern of lines, even when the colours look alike.
        "即使顏色看來相似，每種元素都有自己的譜線圖樣。",
      ],
      // EN: <p>A spectroscope splits the light into separate lines. Lithium and strontium have different energy levels, so their lines are at different wavelengths. Matching the lines with reference spectra identifies each element.</p>
      solution: "<p>分光鏡把光分成分開的譜線。鋰和鍶的能級不同，所以它們的譜線在不同的波長。把譜線與參考光譜配對，就能辨認每種元素。</p>",
      misconception: {
        // EN (option A): Repeating reduces random error, but both colours are red each time. You cannot average a colour.
        "0": "重複可以減少隨機誤差，但兩種顏色每次都是紅色。顏色不能取平均。",
        // EN (option B): More salt gives a brighter flame, not a different colour.
        "1": "較多的鹽會使火焰較明亮，但顏色不會不同。",
        // EN (option D): A yellow flame makes the colours harder to see, not easier.
        "3": "黃色的火焰使顏色更難看清，而不是更容易。",
      },
    },

    // ── lab-flame-tests-q005 · numeric · exam · SL · Structure 1.3.2 · 2 marks
    "lab-flame-tests-q005": {
      // EN: <p>A student checks a spectroscope with a hydrogen tube.</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Hydrogen lines through the spectroscope</caption><thead><tr><th scope="col">Data value / nm</th><th scope="col">Reading / nm (±2)</th></tr></thead><tbody><tr><th scope="row">410</th><td>414</td></tr><tr><th scope="row">486</th><td>490</td></tr><tr><th scope="row">656</th><td>660</td></tr></tbody></table></div><p>With the same spectroscope, a mercury tube gives a green line at a reading of 550 nm. Calculate the corrected wavelength, in nm, of the green line.</p>
      stem: "<p>某學生用氫放電管檢查一個分光鏡。</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>透過分光鏡看到的氫譜線</caption><thead><tr><th scope=\"col\">數據值 / nm</th><th scope=\"col\">讀數 / nm (±2)</th></tr></thead><tbody><tr><th scope=\"row\">410</th><td>414</td></tr><tr><th scope=\"row\">486</th><td>490</td></tr><tr><th scope=\"row\">656</th><td>660</td></tr></tbody></table></div><p>用同一個分光鏡，汞放電管產生一條讀數為 550 nm 的綠色譜線。計算 (calculate) 這條綠色譜線的校正波長，以 nm 表示。</p>",
      hints: [
        // EN: By how much does the scale read too high or too low for every hydrogen line?
        "每條氫譜線的刻度讀數偏高或偏低了多少？",
        // EN: Apply the same correction to the mercury reading.
        "把相同的校正應用到汞的讀數上。",
      ],
      // EN: <div class="worked__math">414 − 410 = 4; 490 − 486 = 4; 660 − 656 = 4</div><div class="worked__math">every reading is 4 nm too high (systematic error)</div><div class="worked__math">corrected = 550 − 4 = <b>546 nm</b></div>
      solution: "<div class=\"worked__math\">414 − 410 = 4；490 − 486 = 4；660 − 656 = 4</div><div class=\"worked__math\">每個讀數都高了 4 nm（系統誤差）</div><div class=\"worked__math\">校正值 = 550 − 4 = <b>546 nm</b></div>",
    },

    // ── lab-flame-tests-q006 · mcq · foundation · SL · Structure 1.3.1 · 1 mark
    "lab-flame-tests-q006": {
      // EN: <p>A helium tube shows lines at 447 nm (blue), 502 nm (green), 588 nm (yellow-orange) and 668 nm (red). Which line is produced by photons of the <strong>highest energy</strong>?</p>
      stem: "<p>氦放電管顯示在 447 nm（藍色）、502 nm（綠色）、588 nm（黃橙色）和 668 nm（紅色）的譜線。哪一條譜線由<strong>能量最高</strong>的光子產生？</p>",
      options: [
        // EN: 447 nm
        "447 nm",
        // EN: 502 nm
        "502 nm",
        // EN: 588 nm
        "588 nm",
        // EN: 668 nm
        "668 nm",
      ],
      hints: [
        // EN: Shorter wavelength means higher frequency.
        "波長越短，頻率越高。",
      ],
      // EN: <p>The shortest wavelength has the highest frequency and so the highest energy per photon: <b>447 nm</b>, the blue line.</p>
      solution: "<p>最短的波長有最高的頻率，所以每個光子的能量最高：<b>447 nm</b>，即藍色譜線。</p>",
      misconception: {
        // EN (option B): Energy rises as wavelength falls. There is a line with a shorter wavelength than 502 nm.
        "1": "波長越短，能量越高。有一條譜線的波長比 502 nm 更短。",
        // EN (option C): This line is the brightest in the helium spectrum, but brightness depends on how many photons there are, not on the energy of each one.
        "2": "這是氦光譜中最明亮的譜線，但亮度取決於光子的數目，而不是每個光子的能量。",
        // EN (option D): This is the longest wavelength, so it has the lowest frequency and the lowest energy per photon.
        "3": "這是最長的波長，所以它的頻率最低，每個光子的能量也最低。",
      },
    },

    // ── lab-flame-tests-q007 · numeric · exam · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q007": {
      // EN: <p>A student records a hydrogen line as 486 ± 2 nm. Calculate the percentage uncertainty of this reading.</p>
      stem: "<p>某學生記錄一條氫譜線為 486 ± 2 nm。計算 (calculate) 這個讀數的百分不確定度。</p>",
      hints: [
        // EN: Percentage uncertainty = absolute uncertainty / reading × 100.
        "百分不確定度 = 絕對不確定度 / 讀數 × 100。",
      ],
      // EN: <div class="worked__math">2 / 486 × 100 = <b>0.41 %</b></div>
      solution: "<div class=\"worked__math\">2 / 486 × 100 = <b>0.41 %</b></div>",
      // EN: 0.41 % (accept 0.4 %)
      answerDisplay: "0.41 %（也接受 0.4 %）",
    },

    // ── lab-flame-tests-q008 · short · exam · SL · Structure 1.3.2 · 2 marks
    "lab-flame-tests-q008": {
      // EN: <p>A student reads all four visible hydrogen lines through a spectroscope. Every reading is 3 or 4 nm higher than the data value. The readings agree with each other when repeated.</p><p>State the type of error, and suggest how the student should deal with it.</p>
      stem: "<p>某學生透過分光鏡讀取全部四條可見的氫譜線。每個讀數都比數據值高 3 或 4 nm。重複讀數時，讀數彼此一致。</p><p>寫出 (state) 誤差的類別，並提出 (suggest) 學生應該怎樣處理這個誤差。</p>",
      hints: [
        // EN: Are the readings scattered on both sides of the true values, or all shifted one way?
        "讀數是分散在真實值的兩邊，還是全都向同一方向偏移？",
      ],
      // EN: <p>All readings are too high by a similar amount, so the error is systematic. Averaging repeats cannot remove it, but a calibration with known lines can.</p>
      solution: "<p>所有讀數都偏高了相近的數值，所以這是系統誤差。重複讀數並取平均值不能消除它，但用已知譜線校準就可以。</p>",
      // EN: <p>It is a systematic error: every reading is shifted the same way by about the same amount (the scale is out of place). Repeating will not remove it. The student should calibrate the spectroscope: find the shift using lines of known wavelength (such as these hydrogen lines) and subtract it from every reading.</p>
      answer: "<p>這是系統誤差：每個讀數都向同一方向偏移了大約相同的數值（刻度偏離了位置）。重複讀數不能消除它。學生應該校準分光鏡：用已知波長的譜線（例如這些氫譜線）找出偏移量，並從每個讀數中減去它。</p>",
      markscheme: [
        // EN: Systematic error (accept: zero / calibration error of the scale).
        "系統誤差（接受：刻度的零點誤差／校準誤差）。",
        // EN: Calibrate with lines of known wavelength and subtract the shift (about 3–4 nm) from every reading (do not accept "repeat the readings").
        "用已知波長的譜線校準，並從每個讀數中減去偏移量（約 3–4 nm）（不接受「重複讀數」）。",
      ],
    },

    // ── lab-flame-tests-q009 · mcq · challenge · SL · Structure 1.3.2 · 1 mark
    "lab-flame-tests-q009": {
      // EN: <p>A calibrated spectroscope gives these readings (each ±2 nm) for a tube that contains one or two elements:</p><p class="mono">409, 433, 448, 471, 487, 492, 502, 587, 657, 669</p><div class="table-scroll" tabindex="0"><table class="data"><caption>Reference lines</caption><thead><tr><th scope="col">Element</th><th scope="col">Lines / nm</th></tr></thead><tbody><tr><th scope="row">hydrogen</th><td>410, 434, 486, 656</td></tr><tr><th scope="row">helium</th><td>447, 471, 492, 502, 588, 668</td></tr><tr><th scope="row">lithium</th><td>610, 671</td></tr><tr><th scope="row">sodium</th><td>589</td></tr></tbody></table></div><p>Which elements are in the tube?</p>
      stem: "<p>一個已校準的分光鏡對一支含有一種或兩種元素的放電管得出以下讀數（各 ±2 nm）：</p><p class=\"mono\">409, 433, 448, 471, 487, 492, 502, 587, 657, 669</p><div class=\"table-scroll\" tabindex=\"0\"><table class=\"data\"><caption>參考譜線</caption><thead><tr><th scope=\"col\">元素</th><th scope=\"col\">譜線 / nm</th></tr></thead><tbody><tr><th scope=\"row\">氫</th><td>410, 434, 486, 656</td></tr><tr><th scope=\"row\">氦</th><td>447, 471, 492, 502, 588, 668</td></tr><tr><th scope=\"row\">鋰</th><td>610, 671</td></tr><tr><th scope=\"row\">鈉</th><td>589</td></tr></tbody></table></div><p>放電管中有哪些元素？</p>",
      options: [
        // EN: Hydrogen and helium
        "氫和氦",
        // EN: Helium and sodium
        "氦和鈉",
        // EN: Hydrogen, helium and lithium
        "氫、氦和鋰",
        // EN: Helium only
        "只有氦",
      ],
      hints: [
        // EN: Check each element: are all of its lines present?
        "逐一檢查每種元素：它所有的譜線都出現了嗎？",
        // EN: An element with a missing line is not present.
        "有一條譜線沒有出現的元素，就不存在。",
      ],
      // EN: <p>Hydrogen: 409, 433, 487, 657 match 410, 434, 486, 656. Helium: 448, 471, 492, 502, 587, 669 match all six helium lines. Lithium is ruled out (no line near 610 nm). Sodium cannot be confirmed: its one line is hidden by helium’s 588 nm line, and nothing needs it. Answer: <b>hydrogen and helium</b>.</p>
      solution: "<p>氫：409、433、487、657 與 410、434、486、656 相符。氦：448、471、492、502、587、669 與全部六條氦譜線相符。可以排除鋰（610 nm 附近沒有譜線）。不能確認有鈉：它唯一的譜線被氦的 588 nm 譜線掩蓋，而且沒有讀數需要用鈉來解釋。答案：<b>氫和氦</b>。</p>",
      misconception: {
        // EN (option B): Sodium’s only line, 589 nm, overlaps helium’s 588 nm line, so the 587 nm reading is explained by helium. And you still have to explain 409, 433, 487 and 657 nm.
        "1": "鈉唯一的譜線 589 nm 與氦的 588 nm 譜線重疊，所以 587 nm 的讀數可以用氦解釋。而且你仍然要解釋 409、433、487 和 657 nm。",
        // EN (option C): Lithium needs a line at 610 nm as well as 671 nm. There is no reading near 610 nm.
        "2": "鋰除了 671 nm 之外，還需要一條在 610 nm 的譜線。610 nm 附近沒有讀數。",
        // EN (option D): Helium explains six readings, but 409, 433, 487 and 657 nm do not belong to helium.
        "3": "氦可以解釋六個讀數，但 409、433、487 和 657 nm 不屬於氦。",
      },
    },

    // ── lab-flame-tests-q010 · short · exam · SL · Structure 1.3.1 · 2 marks
    "lab-flame-tests-q010": {
      // EN: <p>A student tests potassium chloride with a wire that was used for sodium chloride and not cleaned. The flame is yellow-orange. The data say potassium gives a lilac flame.</p><p>Explain the student’s observation and suggest an improvement.</p>
      stem: "<p>某學生用一支測試過氯化鈉而沒有清潔的金屬線測試氯化鉀。火焰是黃橙色的。數據顯示鉀產生淡紫色的火焰。</p><p>解釋 (explain) 學生的觀察結果，並提出 (suggest) 一項改進方法。</p>",
      hints: [
        // EN: What was on the wire before the potassium salt?
        "測試鉀鹽之前，金屬線上有甚麼？",
        // EN: Which colour is more intense?
        "哪一種顏色較強烈？",
      ],
      // EN: <p>See the model answer: contamination by sodium, and a blank test with a cleaned wire as the improvement.</p>
      solution: "<p>見參考答案：受鈉污染，改進方法是用清潔的金屬線進行空白測試。</p>",
      // EN: <p>Traces of sodium chloride were still on the wire. Sodium gives an intense yellow-orange colour, which hides the pale lilac of potassium. The student should clean the wire with dilute hydrochloric acid and heat it until the flame shows no colour before each test (or use a fresh wire or splint for each salt).</p>
      answer: "<p>金屬線上仍有氯化鈉的殘留物。鈉產生強烈的黃橙色，掩蓋了鉀的淺淡紫色。每次測試前，學生應該用稀氫氯酸清潔金屬線，並加熱至火焰不再帶有顏色（或每種鹽用一支新的金屬線或木條）。</p>",
      markscheme: [
        // EN: Sodium (ions) left on the wire / contamination gives yellow-orange light that masks the lilac colour.
        "金屬線上殘留的鈉（離子）／污染產生黃橙色的光，掩蓋了淡紫色。",
        // EN: Clean the wire with (hydrochloric) acid and heat until no colour is seen, before each test (accept: separate wire or splint for each salt).
        "每次測試前，用（氫氯）酸清潔金屬線，並加熱至看不到顏色（接受：每種鹽用獨立的金屬線或木條）。",
      ],
    },

    // ── lab-flame-tests-q011 · numeric · exam · AHL · Structure 1.3.6 · 2 marks
    "lab-flame-tests-q011": {
      // EN: <p>Lithium’s red line has a corrected wavelength of 671 nm. Calculate the energy, in J, of one photon of this light.</p>
      stem: "<p>鋰紅色譜線的校正波長是 671 nm。計算 (calculate) 這種光一個光子的能量，以 J 表示。</p>",
      hints: [
        // EN: Find the frequency first: f = c / λ, with λ in metres.
        "先求出頻率：f = c / λ，λ 以米表示。",
        // EN: Then E = hf.
        "然後 E = hf。",
      ],
      // EN: <div class="worked__math"><i>f</i> = 3.00 × 10<sup>8</sup> / 6.71 × 10<sup>−7</sup> = 4.471 × 10<sup>14</sup> s<sup>−1</sup></div><div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 4.471 × 10<sup>14</sup> = <b>2.96 × 10<sup>−19</sup> J</b></div>
      solution: "<div class=\"worked__math\"><i>f</i> = 3.00 × 10<sup>8</sup> / 6.71 × 10<sup>−7</sup> = 4.471 × 10<sup>14</sup> s<sup>−1</sup></div><div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 4.471 × 10<sup>14</sup> = <b>2.96 × 10<sup>−19</sup> J</b></div>",
    },

    // ── lab-flame-tests-q012 · numeric · exam · AHL · Structure 1.3.6 · 3 marks
    "lab-flame-tests-q012": {
      // EN: <p>Mercury gives a green line at 546 nm. Calculate the energy, in kJ mol<sup>−1</sup>, of one mole of photons of this light.</p>
      stem: "<p>汞產生一條在 546 nm 的綠色譜線。計算 (calculate) 一摩爾這種光的光子的能量，以 kJ mol<sup>−1</sup> 表示。</p>",
      hints: [
        // EN: λ = 5.46 × 10<sup>−7</sup> m. Use f = c / λ and E = hf.
        "λ = 5.46 × 10<sup>−7</sup> m。用 f = c / λ 和 E = hf。",
        // EN: Multiply by the Avogadro constant and divide by 1000.
        "乘以亞佛加德羅常數，再除以 1000。",
      ],
      // EN: <div class="worked__math"><i>f</i> = 3.00 × 10<sup>8</sup> / 5.46 × 10<sup>−7</sup> = 5.495 × 10<sup>14</sup> s<sup>−1</sup></div><div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 5.495 × 10<sup>14</sup> = 3.643 × 10<sup>−19</sup> J</div><div class="worked__math">3.643 × 10<sup>−19</sup> × 6.02 × 10<sup>23</sup> / 1000 = <b>219 kJ mol<sup>−1</sup></b></div>
      solution: "<div class=\"worked__math\"><i>f</i> = 3.00 × 10<sup>8</sup> / 5.46 × 10<sup>−7</sup> = 5.495 × 10<sup>14</sup> s<sup>−1</sup></div><div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 5.495 × 10<sup>14</sup> = 3.643 × 10<sup>−19</sup> J</div><div class=\"worked__math\">3.643 × 10<sup>−19</sup> × 6.02 × 10<sup>23</sup> / 1000 = <b>219 kJ mol<sup>−1</sup></b></div>",
    },

    // ── lab-flame-tests-q013 · numeric · challenge · AHL · Structure 1.3.6 · 3 marks
    "lab-flame-tests-q013": {
      // EN: <p>In the emission spectrum of hydrogen, the lines that end on the ground state converge at a frequency of 3.29 × 10<sup>15</sup> s<sup>−1</sup>. Calculate the first ionization energy of hydrogen in kJ mol<sup>−1</sup>.</p>
      stem: "<p>在氫的發射光譜中，終止於基態的譜線在頻率 3.29 × 10<sup>15</sup> s<sup>−1</sup> 處會聚。計算 (calculate) 氫的第一電離能，以 kJ mol<sup>−1</sup> 表示。</p>",
      hints: [
        // EN: At the convergence limit the electron is removed from the atom. E = hf gives the energy for one atom.
        "在會聚極限，電子被移離原子。E = hf 給出一個原子的能量。",
        // EN: Multiply by the Avogadro constant and divide by 1000.
        "乘以亞佛加德羅常數，再除以 1000。",
      ],
      // EN: <div class="worked__math"><i>E</i> = 6.63 × 10<sup>−34</sup> × 3.29 × 10<sup>15</sup> = 2.181 × 10<sup>−18</sup> J per atom</div><div class="worked__math">2.181 × 10<sup>−18</sup> × 6.02 × 10<sup>23</sup> = 1.313 × 10<sup>6</sup> J mol<sup>−1</sup> = <b>1310 kJ mol<sup>−1</sup></b></div>
      solution: "<div class=\"worked__math\"><i>E</i> = 6.63 × 10<sup>−34</sup> × 3.29 × 10<sup>15</sup> = 每個原子 2.181 × 10<sup>−18</sup> J</div><div class=\"worked__math\">2.181 × 10<sup>−18</sup> × 6.02 × 10<sup>23</sup> = 1.313 × 10<sup>6</sup> J mol<sup>−1</sup> = <b>1310 kJ mol<sup>−1</sup></b></div>",
      // EN: 1310 kJ mol<sup>−1</sup> (1313 to 4 significant figures)
      answerDisplay: "1310 kJ mol<sup>−1</sup>（取 4 位有效數字是 1313）",
    },

    // ── lab-flame-tests-q014 · mcq · challenge · AHL · Structure 1.3.6 · 1 mark
    "lab-flame-tests-q014": {
      // EN: <p>A student wants to find the first ionization energy of hydrogen from the convergence limit, using a hand spectroscope and a hydrogen tube. Why can this not be done?</p>
      stem: "<p>某學生想用手持分光鏡和氫放電管，從會聚極限求出氫的第一電離能。為甚麼這樣做不到？</p>",
      options: [
        // EN: The lines that end on the ground state (n = 1) are in the ultraviolet, which the spectroscope cannot show
        "終止於基態 (n = 1) 的譜線在紫外區，分光鏡無法顯示",
        // EN: Hydrogen has only four lines, so there is no convergence limit
        "氫只有四條譜線，所以沒有會聚極限",
        // EN: The visible lines are too bright to read
        "可見譜線太明亮，無法讀取",
        // EN: The convergence limit is at the red end of the spectrum, beyond 700 nm
        "會聚極限在光譜的紅色一端，超過 700 nm",
      ],
      hints: [
        // EN: Which energy level does the electron fall to for the first ionization energy? Is that transition visible?
        "求第一電離能時，電子落到哪一個能級？這種躍遷是可見的嗎？",
      ],
      // EN: <p>The first ionization energy needs the series that ends on n = 1. Those transitions have large energy differences, so the lines are in the ultraviolet. The visible lines end on n = 2, and their limit gives the energy to remove an electron from n = 2, not from the ground state.</p>
      solution: "<p>第一電離能需要終止於 n = 1 的線系。這些躍遷的能量差很大，所以譜線在紫外區。可見譜線終止於 n = 2，它們的極限給出的是從 n = 2 移走一個電子所需的能量，而不是從基態移走。</p>",
      misconception: {
        // EN (option B): Only four lines are visible, but each series has many more lines, crowding together towards its limit.
        "1": "可見的只有四條譜線，但每個線系都有更多譜線，越接近極限就越密集。",
        // EN (option C): Brightness is not the problem. The question is which region of the spectrum the needed lines are in.
        "2": "問題不在於亮度，而在於所需的譜線在光譜的哪一個區域。",
        // EN (option D): Lines converge at higher frequency, so towards shorter wavelengths, not towards the red end.
        "3": "譜線在較高頻率處會聚，即向較短的波長會聚，而不是向紅色一端。",
      },
    },

  }
});
