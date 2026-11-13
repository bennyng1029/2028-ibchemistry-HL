# Structure Lab 日本語用語集（English → 日本語）

Structure Lab（IB Chemistry, Structure 1・2・3、guide first assessment 2025）を日本語に訳すときの**唯一の用語基準**です。
ここにない用語を使うときは、先にこの表に追加してください。1 つの英語には 1 つの訳語を使います。

- 読者：16 歳の生徒。試験は英語で受け、解説を日本語で読むことがあります。
- 優先順位：**正確さ → 伝わりやすさ → 日本の高校化学の標準用語 → IB の慣習を守ること**。
- 作業手順と HTML の規則は [TRANSLATING.md](TRANSLATING.md) を見てください。

## 0. 出典と確度の記号

| 記号 | 意味 |
|---|---|
| **教** | 日本の高等学校「化学基礎」「化学」の教科書（現行学習指導要領、2022 年度〜）で使われる標準用語 |
| **化** | 日本化学会「高等学校化学で用いる用語に関する提案」（2015 年〜）で変更・整理された用語。現行教科書に反映済み |
| **IB** | 日本語 DP の資料で確認できた訳語（文部科学省 IB 教育推進コンソーシアム掲載の DP 化学 単元指導案・実践報告、同コンソーシアム「IB 用語集」）。IB 公式の日本語版『指導の手引き』そのものは入手できなかったため、二次資料です |
| **学** | 高校では扱わないが、大学の教科書・学術用語集で定着している訳語 |
| **サ** | このサイトで決めた訳（UI の言葉など） |
| **要確認** | 確信が持てない訳語。理由を「読み・メモ」に書いています。一覧は §15 |

参照した資料：

1. 啓林館「化学基礎 教科書用語の変更について」（2022 年度以降用 内容解説資料）
   <https://www.shinko-keirin.co.jp/keirinkan/kou/science2022/text/chemistry1/pdf/yougo.pdf>
   （昇華/凝華、貴ガス、イオンの化学式、遷移元素 3〜12 族、アルカリ土類金属、価標、共有結合結晶、標準状態の扱い）
2. 日本化学会「高等学校化学で用いる用語に関する提案（1）」2015 年。15 語の一覧はリセマム 2015-03-18 の報道で確認
   <https://resemom.jp/article/2015/03/18/23582.html>
3. 文部科学省 IB 教育推進コンソーシアム「DP 単元指導案 化学（構造 3.2 官能基：有機化合物の分類）」
   <https://ibconsortium.mext.go.jp/wp-content/uploads/2026/05/ecc276e95c1dd99f99d43227d877ad93.pdf>
   （同族列、骨格構造式、立体化学式、エナンチオマー、化学的環境、官能基領域、『化学資料集』、ツール 1〜3、探究プロセス など）
4. 同コンソーシアム「IB 化学の新カリキュラム（2025）での実習の取扱について」（沖縄尚学高等学校、2025-11）
   <https://ibconsortium.mext.go.jp/wp-content/uploads/2026/02/ac1ac75665359276c856eb56b587796e.pdf>
   （「構造と反応性」「反応性 1.1」「2025 年版の指導の手引き」「ツール 1：実験技術」）
5. 同コンソーシアム「IB 用語集」<https://ibconsortium.mext.go.jp/glossary/>
   （指示用語、マークスキーム（採点基準）、内部評価、外部評価、形成的評価、総括的評価、指導の手引き）
6. IB 公式の日本語資料（ibo.org の日本語版 subject brief）はアクセスが拒否され（HTTP 403）、内容を確認できませんでした。
   **IB が公開する化学の日英対訳用語集は見つかりませんでした。** 日本語 DP 校の先生が公式の日本語版『指導の手引き』を持っていれば、
   §15 の用語をそれと照合してください。

提案（2）（3）（シス-トランス異性体、鏡像異性体、遷移状態など）は原文を取得できず、現行教科書の用法に基づいて記載しています。

---

## 1. スタイルガイド

### 1.1 文体

- **です・ます体**。高校生に教える上手な家庭教師の口調で書きます。
- 1 文は短く。1 文に 1 つのこと。40〜50 字を超えたら 2 文に分けます。
- ふつうの言葉を使います。「〜を行う」より「〜する」、「〜することが可能です」より「〜できます」、「用いる」より「使う」。
- 英語の語順をなぞらない。主語は必要なときだけ書きます。無生物主語の直訳（「この式は私たちに〜を教えます」）は避け、「この式から〜がわかります」とします。
- 呼びかけは「〜しましょう」「〜してください」。命令形（「〜せよ」「〜しなさい」）は、指示用語の訳として示すときだけ使います（§3）。
- 強調は `<strong>`。斜体は使いません（変数の `<i>n</i>`、`<i>V</i>` はそのまま）。
- 感嘆符は多用しません。ほめ言葉は短く（「いいですね。」「よくできました。」）。

### 1.2 「you」の訳し方

- 原則として**訳しません**（主語を省く）。"You need to know …" →「…を覚えておきましょう」。
- どうしても必要なときは「あなた」。「君」「きみ」「皆さん」は使いません。
- "your answer" →「あなたの答え」または「自分の答え」。"your teacher" →「担当の先生」。
- "we"（著者）は訳さないか、「このサイトでは」とします。

### 1.3 数字・単位・式

- 数字、単位、化学式、変数は**半角**。数字と単位の間は半角スペース（`25.0 cm³`、`298 K`、`100 kPa`）。`%` と `°C` も IB 表記のまま（`25 °C`、`36 %` ではなく原文に合わせる）。
- 単位は **IB の表記を変えません**:`dm³`（L に直さない）、`cm³`（mL に直さない）、`mol dm⁻³`（mol/L に直さない）、`g mol⁻¹`、`kJ mol⁻¹`、`kPa`。
  初めて出るページで 1 回だけ「1 dm³ = 1 L、1 cm³ = 1 mL」と補足してよい。
- 小数点はピリオド、3 桁区切りは原文どおり。指数表記は `6.02 × 10²³`。
- 和文と半角英数字の間には半角スペースを入れます（「1 つ」「3 個」「IB 化学」）。化学式の直後の助詞との間も同じ（「H₂O は」）。ボタンなど短いラベルでは詰めてもかまいません。
- 個数は「1 つ、2 つ」または「1 個」。漢数字は熟語だけ（「一重線」「二重結合」「第一イオン化エネルギー」「三角錐形」）。
- 有効数字は「有効数字 3 桁」。"3 s.f." も「有効数字 3 桁」。"decimal places" は「小数第 2 位まで」。
- 物理量の表は IB 式の「量 / 単位」（`体積 / cm³`）。日本の教科書式の `体積〔cm³〕` には直しません。

### 1.4 化学名の書き方

- 化合物名は日本語の慣用名・IUPAC 日本語名（日本化学会 化合物命名法）で書きます：塩化ナトリウム、硫酸銅(II)、水酸化カルシウム、酸化鉄(III)。
- 酸化数のローマ数字は半角の括弧と大文字：`鉄(III)`、`銅(II)`。
- 元素名は §13 の表に従います。Na は「ナトリウム」、K は「カリウム」（英語の sodium, potassium と形が違うので、初出では元素記号を添える）。
- 有機化合物は IUPAC 名のカタカナ表記：エタン酸（ethanoic acid）、エテン（ethene）、プロパン-2-オール。IB は体系名を使うので、**慣用名（酢酸、エチレン）に置き換えません**。
  初出で「エタン酸（酢酸）」のように慣用名を添えるのはかまいません。位置番号とハイフンは半角。
- イオンは「ナトリウムイオン Na⁺」「塩化物イオン Cl⁻」「硫酸イオン SO₄²⁻」。
- 状態記号 (s) (l) (g) (aq) はそのまま。
- 英語の人名がつく法則は日本の慣用に従います：アボガドロ、ボイル、シャルル、フント、パウリ、ルイス、ロンドン、ファンデルワールス。

### 1.5 句読点・記号

- 地の文は全角の「。」「、」「：」「（ ）」「「 」」。数字・単位・式の中は半角。
- 並列は「、」または「・」（「元素・化合物・混合物」）。スラッシュの言い換えは「/」の前後に半角スペース。
- 引用やラベル名は「 」。書名・資料名は『 』（『指導の手引き』）。
- 範囲は「〜」（「3〜12 族」）。ダッシュ（—）は使わず、文を分けます。
- コロンで終わる導入文は「次のとおりです。」などに言い換えてもかまいません。

### 1.6 英語を並べて見せるとき（試験は英語）

- **キーワード**（英語側が `<dfn>` の語）：初出で「訳語 + 英語」。
  `<dfn>物質量 <span class="en-term">(amount of substance)</span></dfn>`。2 回目からは訳語だけ。
- **試験のポイント**（`callout--exam`）と**マークスキームの採点ポイント・模範解答**：サイトが英語を上、訳を下に自動で並べます。訳は採点ポイントを増やしたり減らしたりしません。
- **指示用語**：問題文で初めて効いてくるところで「説明しなさい (explain)」。§3 の訳語を必ず使います。
- 訳さないもの：化学式、記号、単位、数値、変数、シラバス番号（Structure 1.4.2）、SL / HL / AHL / IB、Paper 1A などの試験名、サイト名。
- 英語で答えを書く練習になる語（markscheme に出る語）は、訳語を先に、英語を括弧で残します。日本語だけにしないでください。

### 1.7 IB と日本の高校化学が違うところ（IB を優先し、短い注を付ける）

| 項目 | IB | 日本の高校 | サイトでの扱い |
|---|---|---|---|
| STP | 273.15 K、100 kPa。モル体積 22.7 dm³ mol⁻¹ | 「標準状態」0 °C、1.013 × 10⁵ Pa、22.4 L/mol | **IB の値を使う**。「STP」と書き、初出で「日本の教科書の 22.4 L/mol とは圧力が違います」と注記。「標準状態」とは訳さない |
| 体積・濃度の単位 | dm³、cm³、mol dm⁻³ | L、mL、mol/L | IB の単位のまま |
| 気体定数 | 8.31 J K⁻¹ mol⁻¹（SI で計算） | 8.31 × 10³ Pa·L/(K·mol) | IB のまま |
| 相対原子質量 | relative atomic mass, *A*ᵣ | 原子量 | 「相対原子質量（原子量）」を初出で、以降「相対原子質量」 |
| 相対式量 | relative formula mass, *M*ᵣ | 式量・分子量 | 「相対式量（式量）」。分子には「相対分子質量（分子量）」 |
| ルイス式 | Lewis formula（線・点・×のどれでもよい） | 電子式（点のみ） | 「ルイス構造式」。初出で「日本の教科書の電子式にあたります」 |
| 分子間力 | London (dispersion)、dipole–dipole、水素結合。van der Waals は水素結合を**含まない** | ファンデルワールス力+水素結合 | IB の 4 分類を使う |
| 副準位 | sublevel (s, p, d, f) | 高校「化学」では発展扱い（s 軌道、p 軌道…） | 「副準位」 |
| 酸化数 | oxidation state（+2、−1 と書く） | 酸化数 | 「酸化数」。符号を先に書く IB 式 |
| 遷移元素 | 不完全な d 副準位をもつ元素（Zn は含めない） | 3〜12 族（化） | 「遷移元素」。必要なところで「IB では亜鉛を遷移元素に含めません」と注記 |
| 有機の名前 | 体系名（ethanoic acid） | 慣用名が多い（酢酸） | 体系名 |
| レベル | SL / Additional HL (AHL) | なし | 「SL」「AHL」は訳さない。説明文では「HL 追加内容」 |
| 貴ガス | noble gases | 貴ガス（旧：希ガス）（化） | 「貴ガス」 |

### 1.8 避けること

- 硬い直訳、二重否定、長い連体修飾。
- 同じ英語に複数の訳語を当てること（例：mole を「モル」と「物質量」で混用。mole =モル、amount =物質量）。
- 旧用語：希ガス、イオン式、共有結晶、絶対質量、標準状態（IB の STP の訳として）、光学異性体、幾何異性体、活性化状態、原子価標。
- 「モル数」（→物質量）、「分子量」をイオン化合物に使うこと（→相対式量）。
- 中国語の用語や字体の混入（摩爾、原子序、電負性、鍵 など）。
- カタカナ語の乱用。教科書に漢語があるものは漢語（スペクトラム→スペクトル、ソリューション→溶液）。
- markscheme で点になる英語を、訳だけにして隠すこと。
- 化学式・数値・答えを訳文で変えること。

---

## 2. サイトの UI 用語

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| worked example | 例題 | れいだい | サ |
| try it | やってみよう | 練習計算のラベル | サ |
| hint / I need a hint | ヒント / ヒントを見る | | サ |
| common mistake | よくある間違い | | サ |
| exam tip | 試験のポイント | 英語の下に訳が出る | サ |
| key idea | 重要な考え方 | | サ |
| why | 理由 | 例題の各ステップ。「理由：」と表示される | サ |
| not needed for IB | IB の範囲外 | 「試験に出ない」内容の枠 | サ |
| in your data booklet | データブックレットに掲載 | | サ |
| data booklet | データブックレット | 日本語 DP では『化学資料集』と呼ぶ資料がある（出典 3）。生徒は英語版を使うのでカタカナ表記にした | サ・**要確認** |
| quick check | 確認クイズ | | サ |
| quiz | クイズ | | サ |
| practice / mixed practice | 練習 / 総合練習 | | サ |
| foundation | 基礎 | 難易度 1 | サ |
| exam style / exam standard | 試験形式 / 試験レベル | 難易度 2。見出し "Exam standard" は「試験レベル」 | サ |
| challenge | チャレンジ | 難易度 3。「発展」は日本の教科書で「範囲外」の意味になるので使わない | サ |
| difficulty / level | 難易度 / レベル | | サ |
| Additional HL (AHL) | HL 追加内容（AHL） | バッジ・狭い場所は「AHL」。IB 日本語資料では「追加上級レベル」の表記例もある | サ・**要確認** |
| SL core / standard level core | SL の内容（SL・HL 共通） | 「コア」は使わない | サ |
| SL core only / SL only | SL のみ | | サ |
| Standard Level (SL) | 標準レベル（SL） | | IB |
| Higher Level (HL) | 上級レベル（HL） | | IB |
| syllabus | シラバス | | サ |
| subject guide / the guide | 『指導の手引き』 | 初出で（subject guide） | IB |
| first assessment 2025 | 2025 年第 1 回試験 | | IB |
| topic | トピック | | サ |
| strand | 分野 | Structure 1・2・3 | サ |
| Structure (theme) | Structure（構造） | 番号つき（Structure 1.4）は訳さない。IB 日本語では「構造 3.2」 | IB |
| Reactivity (theme) | Reactivity（反応性） | IB 日本語では「反応性 1.1」 | IB |
| guiding question | 導入の問い（Guiding question） | 公式訳を確認できなかった | **要確認** |
| linking question | つながりの問い（Linking question） | 公式訳を確認できなかった | **要確認** |
| understanding (syllabus) | 理解すべき内容 | | サ |
| what you need to be able to do | できるようになること | チェックリストの見出し | サ |
| checklist / tick | チェックリスト / チェック | | サ |
| progress | 進み具合 | 「進捗」は硬い | サ |
| section | セクション | | サ |
| on this page | このページの内容 | | サ |
| step | ステップ | 例題の段階 | サ |
| solution / model answer | 解答 / 模範解答 | | サ |
| answer | 答え | | サ |
| check (button) | 答え合わせ | | サ |
| correct / right | 正解 | | サ |
| not correct / missed | 不正解 | | サ |
| not quite | おしい！ | | サ |
| skipped | スキップ | | サ |
| part marks | 部分点 | | サ |
| mark / marks | 点 / 配点 | "[2 marks]" は「[2 点]」 | サ |
| markscheme | 採点基準（マークスキーム） | | IB |
| marking point | 採点ポイント | | サ |
| multiple choice | 選択問題 | | サ |
| select all that apply | 当てはまるものをすべて選ぶ | | サ |
| put in order | 並べ替え | | サ |
| calculation (question type) | 計算問題 | | サ |
| written answer | 記述問題 | | サ |
| short-answer question | 短答問題 | | サ |
| extended-response question | 長めの記述問題 | | サ |
| data-based question | データにもとづく問題 | | サ |
| paper (Paper 1A, 1B, 2) | 試験（Paper 1A などは訳さない） | IB 日本語では「試験問題 1」 | IB |
| internal assessment (IA) | 内部評価（IA） | | IB |
| external assessment | 外部評価 | | IB |
| scientific investigation | 科学的研究（Scientific investigation） | IA の課題名。2025 年版の公式訳を確認できなかった。英語を必ず添える | **要確認** |
| command term | 指示用語 | | IB |
| grade | 成績 | 7 段階 | IB |
| stem (of a question) | 問題文 | | サ |
| option (MCQ) | 選択肢 | | サ |
| misconception | よくある誤解 | | サ |
| working | 途中の計算 | "show your working"=途中の計算を書く | サ |
| interactive (widget) | 動かして学ぶ | ラベル。本文では「教材」 | サ |
| 3-D model | 3D モデル | | サ |
| chart / graph | グラフ | | サ |
| table | 表 | | サ |
| menu / close / cancel | メニュー / 閉じる / キャンセル | | サ |
| dark theme / light theme | ダークテーマ / ライトテーマ | | サ |
| coming soon | 近日公開 / 準備中 | | サ |
| linking it up | つなげて考える | 節の見出し | サ |
| where this topic stops | このトピックの範囲はここまで | 節の見出し | サ |
| method in words | 解き方を言葉で | 節の見出し | サ |
| level 7 stretch | 成績 7 をめざす発展問題 | | サ |
| tools (Tool 1, 2, 3) | ツール 1：実験技術、ツール 2：テクノロジー、ツール 3：数学 | | IB |
| inquiry process | 探究プロセス | | IB |
| nature of science (NOS) | 科学の本質（NOS） | | IB |

## 3. 指示用語（Command terms）

問題文では「訳 (English)」の形で示します。訳語は固定です。公式の日本語訳一覧は入手できなかったため、表全体が**要確認**ですが、
英語を必ず添えるので実害はありません。

| English | 日本語 | 読み・メモ（何を書けば点になるか） | 出典・確度 |
|---|---|---|---|
| state | 述べなさい | 理由なしで、名前・値・短い答えだけ | サ・要確認 |
| outline | 概要を述べなさい | 短くまとめる | サ・要確認 |
| describe | 記述しなさい | くわしく書く（何が起こるか） | サ・要確認 |
| explain | 説明しなさい | 理由・しくみを書く（なぜ） | サ・要確認 |
| deduce | 導きなさい | 与えられた情報から結論を出す | サ・要確認 |
| determine | 求めなさい | 可能な唯一の答えを出す | サ・要確認 |
| calculate | 計算しなさい | 途中の計算を示して数値を出す | サ・要確認 |
| sketch | 概形を描きなさい | 形と特徴がわかるグラフ・図。軸のラベルは必要 | サ・要確認 |
| draw | 描きなさい | 定規や正確な点を使ってきちんと描く | サ・要確認 |
| suggest | 提案しなさい | 考えられる答え・仮説を示す | サ・要確認 |
| compare | 比較しなさい | 共通点を述べる | サ・要確認 |
| compare and contrast | 比較対照しなさい | 共通点と相違点の両方 | サ・要確認 |
| distinguish | 区別しなさい | 違いをはっきり示す | サ・要確認 |
| identify | 特定しなさい | いくつかの中から答えを選ぶ | サ・要確認（出典 3 は「特定」） |
| predict | 予測しなさい | 予想される結果を示す | サ・要確認 |
| discuss | 論じなさい | いろいろな見方・根拠を示して考察する | サ・要確認 |
| evaluate | 評価しなさい | 長所と短所をくらべて判断する | サ・要確認 |
| justify | 正当な理由を示しなさい | 答えを支える根拠を示す | サ・要確認 |
| estimate | 見積もりなさい | おおよその値 | サ・要確認 |
| label | ラベルを付けなさい | 図に名前を書き入れる | サ・要確認 |
| annotate | 注釈を付けなさい | 図に短い説明を書き入れる | サ・要確認 |
| list | 列挙しなさい | 説明なしで並べる | サ・要確認 |
| write / write an equation | 書きなさい / 反応式を書きなさい | | サ・要確認 |
| show (that) | 示しなさい | 計算や導出の過程を示す | サ・要確認 |
| apply | 適用しなさい | 考え方・式を新しい場面に使う | サ・要確認 |
| analyse | 分析しなさい | 要素に分けて関係を示す | サ・要確認 |
| interpret | 解釈しなさい | データから意味を読み取る | サ・要確認 |
| construct | 作成しなさい | 図や式を組み立てる | サ・要確認 |
| formulate | 式で表しなさい | | サ・要確認 |
| comment | コメントしなさい | 与えられた結果に対する判断を書く | サ・要確認 |
| define | 定義しなさい | 用語の正確な意味を書く | サ・要確認 |
| measure | 測定しなさい | | サ・要確認 |
| plot | プロットしなさい | 点を正確に打つ | サ・要確認 |
| solve | 解きなさい | | サ・要確認 |
| recognize | 見分ける | シラバスの到達目標の動詞 | サ |
| represent | 表す | 同上 | サ |
| interconvert | 相互に変換する | 同上 | IB |

## 4. 一般の科学・数学・測定の用語

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| model | モデル | | 教 |
| particle | 粒子 | りゅうし | 教 |
| particulate nature of matter | 物質の粒子性 | ぶっしつのりゅうしせい | サ |
| matter | 物質 | substance も「物質」。区別が要るときは pure substance=純物質 | 教 |
| property (physical / chemical) | 性質（物理的 / 化学的） | | 教 |
| trend | 傾向 | けいこう | 教 |
| pattern | 規則性 | | サ |
| significant figures | 有効数字 | ゆうこうすうじ | 教 |
| decimal place | 小数第 n 位 | | 教 |
| standard form (scientific notation) | 指数表記 | *a* × 10ⁿ の形 | サ |
| power of ten | 10 の累乗 | るいじょう。説明では「10 の何乗」 | 教 |
| order of magnitude | 桁 | けた | 教 |
| rounding | 四捨五入 / 丸める | | 教 |
| unit / SI unit | 単位 / SI 単位 | | 教 |
| unit conversion | 単位の換算 | かんさん | 教 |
| ratio | 比 | | 教 |
| mole ratio | 物質量の比（モル比） | | 教 |
| whole-number ratio | 整数比 | | 教 |
| directly proportional | 比例する | 「正比例」も可 | 教 |
| inversely proportional | 反比例する | | 教 |
| constant | 定数 / 一定 | 名詞は定数、形容詞は「一定」 | 教 |
| variable | 変数 | | 教 |
| independent / dependent / control variable | 独立変数 / 従属変数 / 制御変数 | | IB |
| equation (mathematical) | 式 | chemical equation は化学反応式 | 教 |
| rearrange (an equation) | 式を変形する | | 教 |
| substitute | 代入する | だいにゅう | 教 |
| graph / axis / gradient / intercept | グラフ / 軸 / 傾き / 切片 | せっぺん | 教 |
| area under the curve | 曲線の下の面積 | | 教 |
| line of best fit | 最もよく合う直線（近似直線） | | サ |
| extrapolate / interpolate | 外挿する / 内挿する | がいそう / ないそう | 学 |
| log scale | 対数目盛 | たいすうめもり | 教 |
| average (mean) | 平均 | | 教 |
| weighted average | 加重平均 | かじゅうへいきん。説明は「存在比をかけた平均」 | 学 |
| percentage | 百分率（パーセント） | | 教 |
| uncertainty | 不確かさ | | IB |
| random error / systematic error | 偶然誤差 / 系統誤差 | | 学 |
| precision / accuracy | 精密さ / 正確さ | | 学 |
| qualitative / quantitative | 定性的 / 定量的 | | 教 |
| approximation | 近似 | きんじ | 教 |
| negligible | 無視できるほど小さい | | サ |
| assumption | 仮定 | | 教 |
| evidence | 証拠 | | 教 |
| data | データ | | 教 |
| calculator | 電卓 | | サ |
| electrostatic attraction | 静電気的な引力（静電気力） | せいでんきてき。教科書は「静電気力（クーロン力）」 | 教 |
| repulsion | 反発 | | 教 |
| charge | 電荷 | でんか | 教 |
| energy | エネルギー | | 教 |
| kinetic energy | 運動エネルギー | | 教 |
| potential energy | 位置エネルギー（ポテンシャルエネルギー） | | 教 |
| heat | 熱 | | 教 |
| density | 密度 | | 教 |
| mass | 質量 | しつりょう | 教 |
| volume | 体積 | | 教 |
| pressure | 圧力 | | 教 |
| temperature | 温度 | | 教 |
| speed / velocity | 速さ / 速度 | | 教 |
| collision | 衝突 | しょうとつ | 教 |
| elastic collision | 弾性衝突 | だんせいしょうとつ | 学 |
| frequency | 振動数 | しんどうすう。電磁波では「周波数」より「振動数」 | 教 |
| wavelength | 波長 | | 教 |
| speed of light | 光の速さ（光速） | | 教 |
| Planck constant | プランク定数 | | 教 |
| photon | 光子 | こうし | 教（物理） |
| electromagnetic spectrum | 電磁スペクトル | 電磁波の全体 | 学 |
| visible light / ultraviolet / infrared | 可視光 / 紫外線 / 赤外線 | | 教 |
| radiation | 放射（線） | 電磁波の意味では「放射」 | 教 |
| absorb / emit | 吸収する / 放出する | | 教 |
| complementary colour | 補色 | ほしょく | 教 |
| colour wheel | 色相環 | しきそうかん | 学 |

## 5. Structure 1.1 物質の粒子性・状態・分離

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| element | 元素 | げんそ。物質としての element は「単体」 | 教 |
| elementary substance | 単体 | たんたい | 教 |
| compound | 化合物 | | 教 |
| mixture | 混合物 | | 教 |
| pure substance | 純物質 | | 教 |
| homogeneous mixture | 均一混合物 | きんいつ | 教 |
| heterogeneous mixture | 不均一混合物 | | 教 |
| atom / molecule / ion | 原子 / 分子 / イオン | | 教 |
| diatomic molecule | 二原子分子 | | 教 |
| chemically bonded (combined) | 化学的に結合している | 「化合」は教科書で使わなくなった（化） | 化 |
| fixed ratio | 一定の比 | | 教 |
| state of matter | 物質の状態（三態） | さんたい | 教 |
| solid / liquid / gas | 固体 / 液体 / 気体 | | 教 |
| aqueous solution | 水溶液 | | 教 |
| state symbol | 状態記号 | (s) (l) (g) (aq) | サ |
| change of state | 状態変化 | | 教 |
| melting | 融解 | ゆうかい | 教 |
| freezing | 凝固 | ぎょうこ | 教 |
| vaporization | 蒸発（気化） | IB は evaporation と boiling をまとめて vaporization と呼ぶ。総称は「気化」 | 教 |
| evaporation | 蒸発 | | 教 |
| boiling | 沸騰 | ふっとう | 教 |
| condensation | 凝縮 | ぎょうしゅく | 教 |
| sublimation | 昇華 | しょうか。固体→気体 | 教・化 |
| deposition | 凝華 | ぎょうか。気体→固体。2015 年提案で導入、現行教科書に掲載 | 化 |
| melting point / boiling point / freezing point | 融点 / 沸点 / 凝固点 | | 教 |
| heating curve / cooling curve | 加熱曲線 / 冷却曲線 | | 教 |
| endothermic | 吸熱 | "endothermic change"=吸熱変化 | 教 |
| exothermic | 発熱 | | 教 |
| surroundings | 外界（周囲） | | 学 |
| kinetic molecular theory | 分子運動論 | 「気体分子運動論」も可 | 教 |
| intermolecular forces | 分子間力 | | 教 |
| vibrate | 振動する | | 教 |
| arrangement (of particles) | 粒子の並び方（配列） | | 教 |
| temperature scale | 温度目盛り | | 教 |
| kelvin / Kelvin scale | ケルビン / 絶対温度（ケルビン目盛り） | | 教 |
| degree Celsius | セルシウス度（°C） | 説明では「セ氏温度」 | 教 |
| absolute zero | 絶対零度 | ぜったいれいど | 教 |
| average kinetic energy | 平均運動エネルギー | | 教 |
| volatile / volatility | 揮発性の / 揮発性 | きはつせい | 教 |
| vapour | 蒸気 | | 教 |
| separation technique | 分離法 | | 教 |
| filtration | ろ過 | | 教 |
| filtrate / residue | ろ液 / 残留物（ろ紙に残った固体） | | 教 |
| filter paper / filter funnel | ろ紙 / ろうと | | 教 |
| evaporation (to dryness) | 蒸発乾固 | じょうはつかんこ | 学 |
| crystallization | 結晶化 | | 学 |
| recrystallization | 再結晶 | | 教 |
| distillation | 蒸留 | じょうりゅう | 教 |
| fractional distillation | 分留（分別蒸留） | | 教 |
| distillate | 留出液 | りゅうしゅつえき | 学 |
| condenser | 冷却器（リービッヒ冷却器） | | 教 |
| chromatography | クロマトグラフィー | | 教 |
| paper chromatography | ペーパークロマトグラフィー | | 教 |
| thin layer chromatography (TLC) | 薄層クロマトグラフィー（TLC） | はくそう | 学 |
| mobile phase / stationary phase | 移動相 / 固定相 | | 学 |
| solvent front | 溶媒先端（溶媒が進んだ前線） | | 学 |
| retardation factor, *R*F | *R*F 値（移動率） | IB は "retardation factor"。日本語は「Rf 値」が普通 | 学 |
| solvation | 溶媒和 | ようばいわ。水なら「水和」 | 学 |
| soluble / insoluble | 溶ける（可溶）/ 溶けない（不溶） | | 教 |
| solubility | 溶解度 | 性質として言うときは「溶けやすさ」 | 教 |
| dissolve | 溶ける / 溶かす | | 教 |
| impurity | 不純物 | | 教 |
| crystal | 結晶 | | 教 |
| saturated solution | 飽和溶液 | | 教 |
| distilled water / deionized water | 蒸留水 / 脱イオン水（純水） | | 教 |

## 6. Structure 1.2 原子の構造・同位体・質量スペクトル

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| nuclear atom | 原子核をもつ原子 | トピック名 "The nuclear atom" の訳 | サ |
| nuclear model (of the atom) | 原子核モデル（有核原子模型） | ラザフォードのモデル | 学 |
| nucleus | 原子核 | げんしかく | 教 |
| subatomic particle | 原子を構成する粒子 | 「亜原子粒子」は高校生に難しい | サ |
| proton / neutron / electron | 陽子 / 中性子 / 電子 | ようし / ちゅうせいし | 教 |
| nucleon | 核子 | かくし | 教（物理） |
| relative mass / relative charge | 相対質量 / 相対電荷 | | 教 |
| atomic number, *Z* | 原子番号 | | 教 |
| mass number, *A* | 質量数 | | 教 |
| nuclear symbol (notation) | 原子の記号（質量数と原子番号を添えた元素記号） | 例 ¹²₆C | サ |
| isotope | 同位体 | どういたい | 教 |
| abundance (isotopic) | 存在比 | そんざいひ | 教 |
| relative abundance | 相対存在量 | 質量スペクトルの縦軸。百分率なら「存在比 / %」 | 学 |
| relative atomic mass, *A*ᵣ | 相対原子質量（原子量） | 2 回目から「相対原子質量」 | 教（原子量） |
| relative isotopic mass | 同位体の相対質量 | | 教 |
| carbon-12 | 炭素 12(¹²C) | | 教 |
| ion | イオン | | 教 |
| cation / anion | 陽イオン / 陰イオン | よう / いん | 教 |
| mass spectrometer | 質量分析計 | | 学 |
| mass spectrometry (MS) | 質量分析法 | | IB・学 |
| mass spectrum | 質量スペクトル | 複数形 spectra も同じ | 学 |
| mass-to-charge ratio, *m*/*z* | 質量電荷比（*m*/*z*） | | 学 |
| peak | ピーク | | 学 |
| ionized | イオン化した | | 教 |
| deflect | 曲げられる（偏向する） | | サ |
| charged plates | 帯電した電極板 | | サ |
| radioactive / radioisotope | 放射性の / 放射性同位体 | | 教 |
| isotope tracer | 同位体トレーサー | | 学 |

## 7. Structure 1.3 電子配置

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| electron configuration | 電子配置 | | 教 |
| emission spectrum | 発光スペクトル | 「輝線スペクトル」は line spectrum 側に使う | 学 |
| absorption spectrum | 吸収スペクトル | | 学 |
| line spectrum | 線スペクトル | | 教（物理） |
| continuous spectrum | 連続スペクトル | | 教（物理） |
| energy level | エネルギー準位 | じゅんい | 教 |
| main energy level | 主エネルギー準位（電子殻） | *n* = 1, 2, 3…。日本の教科書の K 殻、L 殻、M 殻にあたる | 教（電子殻） |
| sublevel | 副準位 | ふくじゅんい。s, p, d, f。「副殻」とも言う。高校「化学」は「s 軌道、p 軌道」とだけ呼ぶ | 学・**要確認** |
| orbital | 軌道（原子軌道） | 「電子軌道」より「軌道」 | 教 |
| s / p / d / f orbital | s 軌道 / p 軌道 / d 軌道 / f 軌道 | | 教 |
| spherical / dumbbell-shaped | 球形 / 亜鈴形（ダンベル形） | あれいがた | 学 |
| ground state / excited state | 基底状態 / 励起状態 | きてい / れいき | 学 |
| electron transition | 電子遷移（電子の移動） | せんい | 学 |
| discrete | とびとびの（離散的） | | サ |
| quantized | 量子化された | | 学 |
| converge / convergence | 収束する / 収束 | しゅうそく | 学 |
| convergence limit | 収束限界 | | 学 |
| series (Lyman, Balmer, Paschen) | 系列（ライマン、バルマー、パッシェン） | | 教（物理） |
| Aufbau principle | 構成原理 | こうせいげんり | 学 |
| Hund's rule | フントの規則 | | 学 |
| Pauli exclusion principle | パウリの排他原理 | はいたげんり | 学 |
| spin | スピン | | 学 |
| paired / unpaired electron | 対になった電子 / 不対電子 | ふついでんし | 教 |
| orbital diagram (arrows in boxes) | 軌道図（箱と矢印の図） | | サ |
| full / condensed electron configuration | 完全な電子配置 / 省略形の電子配置（[Ar] 4s² など） | | サ |
| noble gas core | 貴ガスの電子配置（芯） | | サ |
| valence electron | 価電子 | かでんし | 教 |
| valence shell / outer shell | 最外殻 | さいがいかく | 教 |
| inner electrons / core electrons | 内側の電子（内殻電子） | | 教 |
| ionization energy | イオン化エネルギー | | 教 |
| first ionization energy | 第一イオン化エネルギー | | 教 |
| successive ionization energies | 逐次イオン化エネルギー | ちくじ。説明：「第一、第二、第三…と順に取るイオン化エネルギー」 | 学 |
| nuclear charge | 原子核の正電荷（核電荷） | | 学 |
| effective nuclear charge | 有効核電荷 | | 学 |
| shielding | 遮蔽 | しゃへい。初出にふりがな的説明「内側の電子が原子核の引力をさえぎること」 | 学 |
| discontinuity | 不連続（傾向からのずれ） | | サ |
| half-filled / filled sublevel | 半分満たされた / 完全に満たされた副準位 | | サ |
| electron affinity | 電子親和力 | でんししんわりょく | 教 |

## 8. Structure 1.4 モル・Structure 1.5 理想気体

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| mole | モル | 単位 mol | 教 |
| amount of substance, *n* | 物質量 | ぶっしつりょう。「モル数」は使わない | 教 |
| Avogadro constant, *N*A | アボガドロ定数 | 6.02 × 10²³ mol⁻¹ | 教 |
| elementary entity | 要素粒子（数える単位となる粒子） | SI の用語。IB の「elementary entity」に対応 | 学・**要確認** |
| formula unit | 組成式単位（組成式が表す 1 単位） | イオン化合物の「1 個」。高校教科書に定訳がない | 学・**要確認** |
| molar mass, *M* | モル質量 | g mol⁻¹ | 教 |
| relative formula mass, *M*ᵣ | 相対式量（式量） | | 教（式量） |
| relative molecular mass | 相対分子質量（分子量） | | 教（分子量） |
| chemical formula | 化学式 | | 教 |
| empirical formula | 組成式（実験式） | 日本の高校では「組成式」。出典 3 は「実験式」 | 教・IB |
| molecular formula | 分子式 | | 教 |
| percentage composition by mass | 質量百分率組成（質量パーセント組成） | | 学 |
| combustion analysis | 元素分析（燃焼法） | | 教 |
| hydrated salt / hydrate | 水和物 | すいわぶつ | 教 |
| anhydrous | 無水（無水物） | むすい | 教 |
| water of crystallization | 水和水（結晶水） | | 教 |
| concentration | 濃度 | | 教 |
| molar concentration | モル濃度 | 単位は IB の mol dm⁻³ | 教 |
| mass concentration | 質量濃度 | g dm⁻³。「質量パーセント濃度」とは別 | 学 |
| solution / solute / solvent | 溶液 / 溶質 / 溶媒 | ようばい | 教 |
| standard solution | 標準溶液 | 濃度が正確にわかっている溶液 | 教 |
| stock solution | 原液（もとの濃い溶液） | | サ |
| dilution / dilute | 希釈 / うすめる | きしゃく | 教 |
| serial dilution | 段階希釈 | | 学 |
| dilution factor | 希釈倍率 | | 学 |
| concentrated / dilute (adj.) | 濃い / うすい | 「濃〜」「希〜」（濃硫酸、希塩酸） | 教 |
| calibration curve | 検量線 | けんりょうせん | 学 |
| absorbance | 吸光度 | きゅうこうど | 学 |
| colorimeter / colorimetry | 比色計 / 比色法 | ひしょく | 学 |
| spectrophotometry | 分光光度法 | | 学 |
| chemical equation | 化学反応式 | | 教 |
| coefficient | 係数 | けいすう | 教 |
| reactant / product | 反応物 / 生成物 | | 教 |
| limiting reactant | 制限反応物（先になくなる反応物） | Reactivity 2.1 の用語 | 学 |
| excess | 過剰 | かじょう。"in excess"=過剰にある | 教 |
| Avogadro's law | アボガドロの法則 | | 教 |
| molar volume | モル体積 | IB:STP で 22.7 dm³ mol⁻¹ | 教 |
| STP (standard temperature and pressure) | STP（273.15 K、100 kPa） | 「標準状態」と訳さない。§1.7 | サ（化：標準状態は使わない方向） |
| SATP | SATP（298.15 K、100 kPa） | データブックレットに記載 | 学 |
| ideal gas | 理想気体 | | 教 |
| real gas | 実在気体 | じつざいきたい | 教 |
| ideal gas model | 理想気体モデル | | サ |
| ideal gas equation | 理想気体の状態方程式 | *pV* = *nRT* | 教 |
| gas constant, *R* | 気体定数 | | 教 |
| gas laws | 気体の法則 | | 教 |
| Boyle's law | ボイルの法則 | IB は名前を要求しない | 教 |
| Charles's law | シャルルの法則 | 同上 | 教 |
| combined gas law | ボイル・シャルルの法則 | *p*₁*V*₁/*T*₁ = *p*₂*V*₂/*T*₂ | 教 |
| fixed mass (of gas) | 一定量（一定質量）の気体 | | 教 |
| deviate (from ideal behaviour) | 理想気体からずれる | | 教 |
| gas density | 気体の密度 | | 教 |

## 9. Structure 2.1〜2.4 結合と構造

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| chemical bond / bonding | 化学結合 / 結合 | | 教 |
| ionic model / covalent model / metallic model | イオン結合モデル / 共有結合モデル / 金属結合モデル | トピック名 | サ |
| ionic bond | イオン結合 | | 教 |
| ionic compound | イオン化合物 | 教科書は「イオンからなる物質」「イオン結晶」も使う | 教 |
| binary compound | 二元化合物 | にげん。2 種類の元素からなる化合物 | 学 |
| polyatomic ion | 多原子イオン | | 教 |
| oppositely charged ions | 反対の電荷をもつイオン | | 教 |
| ammonium / hydroxide / nitrate ion | アンモニウムイオン / 水酸化物イオン / 硝酸イオン | | 教 |
| hydrogencarbonate / carbonate ion | 炭酸水素イオン / 炭酸イオン | | 教 |
| sulfate / phosphate ion | 硫酸イオン / リン酸イオン | | 教 |
| nitrite / sulfite ion | 亜硝酸イオン / 亜硫酸イオン | | 教 |
| chloride / oxide / sulfide ion | 塩化物イオン / 酸化物イオン / 硫化物イオン | | 教 |
| halide ion | ハロゲン化物イオン | | 教 |
| lattice | 結晶格子 | 単に「格子」も可 | 教 |
| ionic lattice | イオン結晶（の結晶格子） | | 教 |
| lattice enthalpy | 格子エンタルピー | 教科書の「格子エネルギー」にあたる | 学 |
| ionic radius / ion charge | イオン半径 / イオンの電荷 | 「価数」より「電荷」（化） | 教・化 |
| electrical conductivity | 電気伝導性 | 「電気を通す性質」 | 教 |
| thermal conductivity | 熱伝導性 | | 教 |
| molten | 融解した（溶融状態の） | | 教 |
| brittle | もろい | | 教 |
| malleability / malleable | 展性 / 展性がある | てんせい | 教 |
| ductility | 延性 | えんせい | 教 |
| covalent bond | 共有結合 | | 教 |
| shared pair (bonding pair) | 共有電子対 | きょうゆうでんしつい | 教 |
| lone pair (non-bonding pair) | 非共有電子対 | 「孤立電子対」も大学では使う | 教 |
| octet rule | オクテット則 | | 学 |
| Lewis formula (Lewis structure) | ルイス構造式 | 日本の教科書の「電子式」（点で書く）にあたる。IB は線・点・×のどれでもよい | 学 |
| electron dot diagram | 電子式 | | 教 |
| single / double / triple bond | 単結合 / 二重結合 / 三重結合 | | 教 |
| multiple bond | 多重結合 | | 学 |
| bond (line in a structural formula) | 結合を表す線 | 「価標」は教科書で使わなくなった（化）。「1 本の線」 | 化 |
| bond length | 結合距離（結合の長さ） | | 教 |
| bond strength | 結合の強さ | | 教 |
| bond enthalpy | 結合エンタルピー | 教科書の「結合エネルギー」。2022 年度〜エンタルピー導入 | 教 |
| coordination bond | 配位結合 | はいいけつごう | 教 |
| complex ion | 錯イオン | さくイオン | 教 |
| ligand | 配位子 | はいいし | 教 |
| coordination number | 配位数 | | 教 |
| VSEPR model | VSEPR モデル（原子価殻電子対反発モデル） | げんしかかく でんしつい はんぱつ | 学 |
| electron domain | 電子領域 | 結合（単・二重・三重はどれも 1 つ）と非共有電子対を数える単位。日本の教科書は「電子対」で説明し、定訳がない。「電子ドメイン」とも | 学・**要確認** |
| electron domain geometry | 電子領域の配置 | | サ・**要確認** |
| molecular geometry (shape) | 分子の形 | | 教 |
| central atom | 中心原子 | | 教 |
| bond angle | 結合角 | けつごうかく | 教 |
| linear | 直線形 | 180° | 教 |
| trigonal planar | 平面三角形 | 120°。教科書は「三角形」「正三角形」とも | 教・学 |
| bent / V-shaped | 折れ線形 | おれせんがた | 教 |
| tetrahedral | 正四面体形 | 109.5°。置換基が同じでないときは「四面体形」 | 教 |
| trigonal pyramidal | 三角錐形 | さんかくすいがた。約 107° | 教 |
| trigonal bipyramidal | 三方両錐形 | さんぽうりょうすいがた（AHL） | 学 |
| seesaw | シーソー形 | AHL | 学 |
| T-shaped | T 字形 | AHL | 学 |
| octahedral | 正八面体形 | AHL。90° | 教 |
| square pyramidal | 四角錐形 | しかくすいがた（AHL） | 学 |
| square planar | 平面正方形 | AHL。教科書は「正方形」とも。「平面四角形」も使われる | 教・学 |
| electronegativity | 電気陰性度 | でんきいんせいど | 教 |
| bond polarity | 結合の極性 | | 教 |
| polar / non-polar | 極性（がある）/ 無極性 | 極性分子 / 無極性分子 | 教 |
| polar covalent bond | 極性共有結合（極性のある共有結合） | | 学 |
| partial charge (δ+, δ−) | 部分電荷 | | 学 |
| bond dipole | 結合の双極子 | そうきょくし | 学 |
| dipole moment / net dipole | 双極子モーメント / 分子全体の双極子（正味の双極子） | | 学 |
| molecular polarity | 分子の極性 | | 教 |
| covalent network structure | 共有結合の結晶（共有結合結晶） | IB は "giant covalent / covalent network" | 化 |
| allotrope | 同素体 | どうそたい | 教 |
| diamond / graphite | ダイヤモンド / 黒鉛（グラファイト） | こくえん | 教 |
| graphene / fullerene | グラフェン / フラーレン | | 教 |
| silicon / silicon dioxide | ケイ素 / 二酸化ケイ素 | | 教 |
| London (dispersion) forces | ロンドン（分散）力 | 「分散力」 | IB・学 |
| instantaneous / temporary dipole | 瞬間的な双極子 | | 学 |
| induced dipole | 誘起双極子 | ゆうき | 学 |
| dipole–dipole forces | 双極子–双極子相互作用（双極子間の引力） | | 学 |
| dipole–induced dipole forces | 双極子–誘起双極子相互作用 | | 学 |
| van der Waals forces | ファンデルワールス力 | IB：上の 3 つの総称で、水素結合を含まない | 教 |
| hydrogen bond / hydrogen bonding | 水素結合 | | 教 |
| resonance | 共鳴 | AHL | 学 |
| resonance structure | 共鳴構造 | | 学 |
| resonance energy | 共鳴エネルギー | | 学 |
| delocalization | 非局在化 | ひきょくざいか | 学 |
| delocalized electrons | 非局在化電子 | 金属では日本の教科書の「自由電子」にあたる。初出で「（自由電子）」を添える | 学・教（自由電子） |
| benzene | ベンゼン | | 教 |
| expanded octet | 拡張オクテット | オクテット則より多い電子をもつこと。「超原子価」は使わない | 学・**要確認** |
| formal charge | 形式電荷 | | 学 |
| sigma bond (σ) / pi bond (π) | σ 結合 / π 結合 | シグマ / パイ | 学 |
| head-on / lateral (sideways) overlap | 正面からの重なり / 横方向の重なり | | サ |
| bond axis | 結合軸 | | 学 |
| electron density | 電子密度 | | 学 |
| atomic orbital | 原子軌道 | | 学 |
| hybridization | 混成 | こんせい | 学 |
| hybrid orbital (sp, sp², sp³) | 混成軌道（sp、sp²、sp³） | | 学 |
| metallic bond / bonding | 金属結合 | | 教 |
| metallic lattice | 金属結晶 | 「金属の結晶」→「金属結晶」（化） | 化 |
| non-directional bonding | 方向性のない結合 | | サ |
| alloy | 合金 | ごうきん | 教 |
| bronze / brass / stainless steel / steel | 青銅 / 黄銅（しんちゅう）/ ステンレス鋼 / 鋼 | おうどう、こう | 教 |
| bonding triangle | 結合の三角形 | データブックレットの図（ファン・アルケル–ケテラーの三角形）。日本の教科書にない | サ・**要確認** |
| bonding continuum | 結合の連続性（連続的な変化） | | サ |
| percentage ionic character | イオン結合性の割合 | | 学 |
| material | 材料 | | 教 |
| composite | 複合材料 | | 学 |
| polymer | 高分子（ポリマー） | 「高分子化合物」も可 | 教 |
| macromolecule | 巨大分子（高分子） | | 学 |
| monomer | 単量体（モノマー） | たんりょうたい | 教 |
| repeating unit | 繰り返し単位 | | 教 |
| polymerization | 重合 | じゅうごう | 教 |
| addition polymer / addition polymerization | 付加重合体 / 付加重合 | | 教 |
| condensation polymer / condensation polymerization | 縮合重合体 / 縮合重合 | AHL | 教 |
| polyamide / polyester | ポリアミド / ポリエステル | | 教 |
| hydrolysis | 加水分解 | | 教 |
| plastic | プラスチック | | 教 |
| biodegradable | 生分解性 | | 教 |
| natural / synthetic polymer | 天然高分子 / 合成高分子 | | 教 |
| atom economy | アトムエコノミー（原子効率） | Reactivity 2.1 | 学 |

## 10. Structure 3.1 周期表

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| periodic table | 周期表 | | 教 |
| group / period | 族 / 周期 | ぞく | 教 |
| block (s, p, d, f) | ブロック（s、p、d、f） | 「s ブロック元素」 | 学 |
| periodicity | 周期性 | 「元素の周期律」 | 教 |
| across a period / down a group | 周期を左から右へ / 族を上から下へ | | サ |
| metal / non-metal / metalloid | 金属 / 非金属 / 半金属 | | 教 |
| alkali metals | アルカリ金属 | 1 族（H を除く） | 教 |
| alkaline earth metals | アルカリ土類金属 | 2 族すべて（化） | 化 |
| halogens | ハロゲン | 17 族 | 教 |
| noble gases | 貴ガス | 18 族。旧「希ガス」（化） | 化 |
| transition elements | 遷移元素 | せんいげんそ。日本：3〜12 族（化）。IB：不完全な d 副準位をもつ元素で Zn を含めない。§1.7 | 化 |
| first-row transition elements | 第一遷移系列の元素（第 4 周期の遷移元素） | Sc〜Cu | 学 |
| main group elements | 典型元素 | てんけいげんそ | 教 |
| atomic radius | 原子半径 | | 教 |
| metallic character / non-metallic character | 金属性 / 非金属性 | | 教 |
| reactivity | 反応性 | | 教 |
| displacement reaction | 置換反応（ハロゲンの置換） | 「より反応性の高いハロゲンが…を追い出す」と説明 | 学 |
| oxide | 酸化物 | | 教 |
| basic / acidic / amphoteric oxide | 塩基性酸化物 / 酸性酸化物 / 両性酸化物 | りょうせい | 教 |
| acid rain | 酸性雨 | | 教 |
| ocean acidification | 海洋酸性化 | | 学 |
| oxidation state (oxidation number) | 酸化数 | さんかすう。IB は +2、−1 と書く | 教 |
| variable oxidation state | 複数の酸化数（酸化数が変わること） | | サ |
| hydride / peroxide | 水素化物 / 過酸化物 | | 教 |
| oxyanion | オキソ酸イオン（オキソアニオン） | | 学 |
| Roman numeral | ローマ数字 | 鉄(III) | 教 |
| redox reaction | 酸化還元反応 | | 教 |
| incomplete d-sublevel | 不完全な（満たされていない）d 副準位 | | サ |
| catalyst / catalytic properties | 触媒 / 触媒作用 | しょくばい | 教 |
| magnetic properties | 磁性 | | 学 |
| coloured compound | 有色の化合物 | | 教 |
| splitting of d-orbitals | d 軌道の分裂 | AHL | 学 |
| promote (an electron) | （電子を）高い準位へ移す（励起する） | | サ |

## 11. Structure 3.2 有機化合物・官能基・異性体

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| organic compound | 有機化合物 | | 教 |
| hydrocarbon | 炭化水素 | | 教 |
| functional group | 官能基 | かんのうき | 教・IB |
| class (of compound) | 化合物の種類（クラス） | | IB |
| homologous series | 同族列 | どうぞくれつ。教科書は「同族体」（メンバー）も使う | IB・学 |
| general formula | 一般式 | | 教 |
| structural formula | 構造式 | | 教 |
| full structural formula | 完全な構造式 | すべての結合を線で書く | IB |
| condensed structural formula | 簡略化した構造式（示性式） | CH₃CH₂OH の形。日本の「示性式」にあたる | IB・教（示性式） |
| skeletal formula | 骨格構造式 | こっかく | IB |
| stereochemical formula | 立体化学式 | くさび形と破線で書く | IB |
| wedge-dash representation | くさび–破線表記 | | 学 |
| 3D model | 3D モデル（分子模型） | | IB |
| saturated / unsaturated | 飽和 / 不飽和 | | 教・IB |
| carbon chain | 炭素鎖 | たんそさ | 教 |
| parent chain (longest chain) | 主鎖（最長の炭素鎖） | しゅさ | 教 |
| straight-chain / branched-chain | 直鎖 / 分岐鎖（枝分かれ） | | 教・IB |
| substituent | 置換基 | ちかんき | 教 |
| alkyl group (methyl, ethyl) | アルキル基（メチル基、エチル基） | | 教 |
| IUPAC nomenclature | IUPAC 命名法 | | 教・IB |
| systematic name | 体系名 | 教科書は「組織名」とも | IB |
| prefix / suffix | 接頭語 / 接尾語 | | 学 |
| locant (position number) | 位置番号 | | 学 |
| alkane / alkene / alkyne | アルカン / アルケン / アルキン | | 教 |
| cycloalkane | シクロアルカン | | 教 |
| halogenoalkane | ハロゲノアルカン | 「ハロゲン化アルキル」も使われる | IB |
| alcohol | アルコール | | 教 |
| aldehyde / ketone | アルデヒド / ケトン | | 教 |
| carboxylic acid | カルボン酸 | | 教 |
| ether | エーテル | | 教 |
| amine / amide | アミン / アミド | | 教 |
| ester | エステル | | 教 |
| arene / aromatic compound | 芳香族化合物 | ほうこうぞく | 教 |
| halogeno group | ハロゲノ基 | 出典 3 は「ハロゲン基」。置換基名としては「ハロゲノ基」が正確 | 学・**要確認** |
| hydroxyl group | ヒドロキシ基 | 旧「ヒドロキシル基」 | 教・IB |
| carbonyl group | カルボニル基 | | 教・IB |
| carboxyl group | カルボキシ基 | 旧「カルボキシル基」 | 教・IB |
| alkoxy group | アルコキシ基 | エーテル結合 –O– に対応 | IB |
| amino group | アミノ基 | | 教・IB |
| amido group | アミド基 | 教科書は「アミド結合」 | IB |
| ester group | エステル基 | 教科書は「エステル結合」 | IB |
| phenyl group | フェニル基 | | 教・IB |
| primary / secondary / tertiary | 第一級 / 第二級 / 第三級 | だいいっきゅう | 教・IB |
| isomer | 異性体 | いせいたい | 教 |
| structural isomer | 構造異性体 | | 教・IB |
| chain (branched) isomer | 分岐鎖異性体（炭素骨格の異性体） | | IB |
| position isomer | 位置異性体 | | IB |
| functional group isomer | 官能基異性体 | | IB |
| connectivity | 原子のつながり方 | | サ |
| stereoisomer | 立体異性体 | AHL | 教・IB |
| *cis–trans* isomer | シス-トランス異性体 | 旧「幾何異性体」 | 教・IB |
| *cis* / *trans* | シス形 / トランス形 | | 教 |
| chiral | キラル | | IB・学 |
| chiral carbon | キラル炭素原子（不斉炭素原子） | ふせい。教科書は「不斉炭素原子」 | IB・教 |
| enantiomer | 鏡像異性体（エナンチオマー） | 旧「光学異性体」。出典 3 は「エナンチオマー」 | 教・IB |
| mirror image / non-superimposable | 鏡像 / 重ね合わせることができない | | IB |
| optical activity | 光学活性 | | IB・学 |
| plane-polarized light | 平面偏光 | へんこう | 学 |
| racemic mixture | ラセミ混合物（ラセミ体） | | IB・学 |
| spatial arrangement | 空間的な配置 | | IB |

## 12. 分光法（AHL）

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| spectroscopy | 分光法 | ぶんこうほう | 学 |
| spectrum / spectra | スペクトル | | 教 |
| structural analysis / structure determination | 構造解析 / 構造決定 | | IB |
| fragmentation | フラグメンテーション（開裂） | 出典 3 は「フラグメンテーション（断片化）」 | IB |
| fragmentation pattern | フラグメンテーションパターン | | IB |
| fragment (ion) | フラグメント（イオン） | | IB |
| molecular ion (peak) | 分子イオン（ピーク） | | IB |
| infrared (IR) spectrum | 赤外（IR）スペクトル | | IB |
| infrared spectroscopy | 赤外分光法 | | IB |
| wavenumber | 波数 | はすう。単位 cm⁻¹ | IB・学 |
| transmittance | 透過率 | とうかりつ | 学 |
| absorption (band) | 吸収（帯） | | 学 |
| functional group region | 官能基領域 | | IB |
| fingerprint region | 指紋領域 | しもんりょういき | 学 |
| characteristic frequencies | 特性吸収（特徴的な振動数） | 出典 3 は「特徴的な周波数」 | IB・学 |
| IR active | 赤外活性 | | IB |
| bond vibration (stretch / bend) | 結合の振動（伸縮 / 変角） | | 学 |
| greenhouse gas | 温室効果ガス | | 教・IB |
| global warming potential | 地球温暖化係数 | | 学 |
| proton NMR (¹H NMR) spectroscopy | プロトン核磁気共鳴分光法（¹H NMR） | | IB |
| ¹H NMR spectrum | ¹H NMR スペクトル（プロトン NMR スペクトル） | | IB |
| chemical shift | 化学シフト | 単位 ppm | 学 |
| chemical environment | 化学的環境 | | IB |
| signal | シグナル | 「信号」としない | IB |
| integration trace / relative area | 積分曲線 / 相対的な面積（面積比） | | 学 |
| splitting pattern | 分裂パターン | | IB・学 |
| singlet / doublet / triplet / quartet | 一重線 / 二重線 / 三重線 / 四重線 | いちじゅうせん | 学 |
| *n* + 1 rule | *n* + 1 則 | | 学 |
| TMS (tetramethylsilane) | TMS（テトラメチルシラン） | 基準物質 | 学 |

## 13. 実験器具・操作

| English | 日本語 | 読み・メモ | 出典・確度 |
|---|---|---|---|
| apparatus / glassware | 器具 / ガラス器具 | | 教 |
| volumetric flask | メスフラスコ | | 教・IB |
| graduation mark / meniscus | 標線 / メニスカス | ひょうせん | 教 |
| pipette (volumetric) | ホールピペット | | 教 |
| graduated pipette | メスピペット | | 教・IB |
| burette | ビュレット | | 教 |
| measuring cylinder | メスシリンダー | | 教・IB |
| beaker | ビーカー | | 教 |
| conical flask | 三角フラスコ（コニカルビーカー） | | 教 |
| round-bottomed flask | 丸底フラスコ | | 教 |
| test tube | 試験管 | | 教 |
| funnel | ろうと | | 教 |
| stopper | 栓 | せん | 教 |
| balance | 電子てんびん | | 教 |
| crucible | るつぼ | | 教 |
| evaporating basin | 蒸発皿 | | 教 |
| Bunsen burner | ガスバーナー | | 教 |
| thermometer | 温度計 | | 教 |
| gas syringe | 気体用シリンジ（注射器） | | サ |
| stirring rod | ガラス棒 | | 教 |
| spatula | 薬さじ | | 教 |
| wash bottle | 洗びん | | 教 |
| data logger / sensor | データロガー / センサー | | IB |
| weigh | 質量をはかる（ひょう量する） | | 教 |
| rinse / rinsings | すすぐ / 洗液 | | 教 |
| transfer | 移す | | 教 |
| make up to the mark | 標線まで水を加える | | 教 |
| stir / shake / invert | かき混ぜる / 振る / 逆さにして混ぜる | | 教 |
| heat to constant mass | 質量が一定になるまで加熱する | | サ |
| titration | 滴定 | てきてい | 教 |
| precipitate | 沈殿 | ちんでん | 教 |
| flame test | 炎色反応 | えんしょくはんのう | 教 |
| safety / hazard | 安全 / 危険性 | | 教 |

## 14. 元素名（118 元素）

英語は IB の綴り（aluminium、caesium、sulfur）。日本語は日本化学会の元素名。

| 記号 | English | 日本語 | | 記号 | English | 日本語 |
|---|---|---|---|---|---|---|
| H | hydrogen | 水素 | | Li | lithium | リチウム |
| He | helium | ヘリウム | | Be | beryllium | ベリリウム |
| B | boron | ホウ素 | | C | carbon | 炭素 |
| N | nitrogen | 窒素 | | O | oxygen | 酸素 |
| F | fluorine | フッ素 | | Ne | neon | ネオン |
| Na | sodium | ナトリウム | | Mg | magnesium | マグネシウム |
| Al | aluminium | アルミニウム | | Si | silicon | ケイ素 |
| P | phosphorus | リン | | S | sulfur | 硫黄 |
| Cl | chlorine | 塩素 | | Ar | argon | アルゴン |
| K | potassium | カリウム | | Ca | calcium | カルシウム |
| Sc | scandium | スカンジウム | | Ti | titanium | チタン |
| V | vanadium | バナジウム | | Cr | chromium | クロム |
| Mn | manganese | マンガン | | Fe | iron | 鉄 |
| Co | cobalt | コバルト | | Ni | nickel | ニッケル |
| Cu | copper | 銅 | | Zn | zinc | 亜鉛 |
| Ga | gallium | ガリウム | | Ge | germanium | ゲルマニウム |
| As | arsenic | ヒ素 | | Se | selenium | セレン |
| Br | bromine | 臭素 | | Kr | krypton | クリプトン |
| Rb | rubidium | ルビジウム | | Sr | strontium | ストロンチウム |
| Y | yttrium | イットリウム | | Zr | zirconium | ジルコニウム |
| Nb | niobium | ニオブ | | Mo | molybdenum | モリブデン |
| Tc | technetium | テクネチウム | | Ru | ruthenium | ルテニウム |
| Rh | rhodium | ロジウム | | Pd | palladium | パラジウム |
| Ag | silver | 銀 | | Cd | cadmium | カドミウム |
| In | indium | インジウム | | Sn | tin | スズ |
| Sb | antimony | アンチモン | | Te | tellurium | テルル |
| I | iodine | ヨウ素 | | Xe | xenon | キセノン |
| Cs | caesium | セシウム | | Ba | barium | バリウム |
| La | lanthanum | ランタン | | Ce | cerium | セリウム |
| Pr | praseodymium | プラセオジム | | Nd | neodymium | ネオジム |
| Pm | promethium | プロメチウム | | Sm | samarium | サマリウム |
| Eu | europium | ユウロピウム | | Gd | gadolinium | ガドリニウム |
| Tb | terbium | テルビウム | | Dy | dysprosium | ジスプロシウム |
| Ho | holmium | ホルミウム | | Er | erbium | エルビウム |
| Tm | thulium | ツリウム | | Yb | ytterbium | イッテルビウム |
| Lu | lutetium | ルテチウム | | Hf | hafnium | ハフニウム |
| Ta | tantalum | タンタル | | W | tungsten | タングステン |
| Re | rhenium | レニウム | | Os | osmium | オスミウム |
| Ir | iridium | イリジウム | | Pt | platinum | 白金 |
| Au | gold | 金 | | Hg | mercury | 水銀 |
| Tl | thallium | タリウム | | Pb | lead | 鉛 |
| Bi | bismuth | ビスマス | | Po | polonium | ポロニウム |
| At | astatine | アスタチン | | Rn | radon | ラドン |
| Fr | francium | フランシウム | | Ra | radium | ラジウム |
| Ac | actinium | アクチニウム | | Th | thorium | トリウム |
| Pa | protactinium | プロトアクチニウム | | U | uranium | ウラン |
| Np | neptunium | ネプツニウム | | Pu | plutonium | プルトニウム |
| Am | americium | アメリシウム | | Cm | curium | キュリウム |
| Bk | berkelium | バークリウム | | Cf | californium | カリホルニウム |
| Es | einsteinium | アインスタイニウム | | Fm | fermium | フェルミウム |
| Md | mendelevium | メンデレビウム | | No | nobelium | ノーベリウム |
| Lr | lawrencium | ローレンシウム | | Rf | rutherfordium | ラザホージウム |
| Db | dubnium | ドブニウム | | Sg | seaborgium | シーボーギウム |
| Bh | bohrium | ボーリウム | | Hs | hassium | ハッシウム |
| Mt | meitnerium | マイトネリウム | | Ds | darmstadtium | ダームスタチウム |
| Rg | roentgenium | レントゲニウム | | Cn | copernicium | コペルニシウム |
| Nh | nihonium | ニホニウム | | Fl | flerovium | フレロビウム |
| Mc | moscovium | モスコビウム | | Lv | livermorium | リバモリウム |
| Ts | tennessine | テネシン | | Og | oganesson | オガネソン |

読みに注意する元素：ホウ素、窒素（ちっそ）、ケイ素、硫黄（いおう）、塩素、亜鉛（あえん）、臭素（しゅうそ）、ヒ素、白金（はっきん）、鉛（なまり）、水銀。
英語と形が大きく違う元素（初出で記号を添える）：Na、K、Fe、Cu、Ag、Au、Hg、Pb、Sn、Zn、W、Sb、S、P、Si、H、C、N、O、F、Cl、Br、I、B、As、Pt、Ti、Mn、Cr、U。

## 15. 要確認の一覧

| 用語 | 現在の訳 | 確信が持てない理由 |
|---|---|---|
| 指示用語（§3 の全体） | 述べなさい、説明しなさい、導きなさい… | IB 公式の日本語訳一覧を入手できなかった。英語を必ず併記するので採点上の危険はない |
| data booklet | データブックレット | 日本語 DP 資料は『化学資料集』と呼ぶ。生徒が使うのは英語版なのでカタカナにしたが、所有者の判断が必要 |
| Additional HL | HL 追加内容（AHL） | 公式訳（「追加上級レベル」など）を確認できなかった |
| scientific investigation | 科学的研究 | 2025 年版 IA の公式名称の訳を確認できなかった（「科学的探究」の可能性） |
| guiding question / linking question | 導入の問い / つながりの問い | 公式訳を確認できなかった |
| sublevel | 副準位 | 学術的には「副殻」も同じ意味で使う。IB の "main energy level → sublevel → orbital" の対応が見えやすい「副準位」を選んだ。日本の高校教科書には対応語がない |
| elementary entity | 要素粒子 | SI 文書の訳語。高校教科書にない |
| formula unit | 組成式単位 | 定訳がない。説明つきで使うこと |
| electron domain / electron domain geometry | 電子領域 / 電子領域の配置 | 日本語の定訳がない（電子ドメイン、電子対の領域 などが混在） |
| expanded octet | 拡張オクテット | 定訳がない。「オクテットの拡張」「オクテット則を超える」とも |
| bonding triangle | 結合の三角形 | 日本の教科書にない図。訳は直訳 |
| halogeno group | ハロゲノ基 | 日本語 DP 資料は「ハロゲン基」。IUPAC 置換基名に合わせて「ハロゲノ基」とした |

## 16. 改訂の記録

- 2026-11-13 初版。`i18n/ja/ui.js`、`home.js`、`practice.js` はこの用語集に合わせて確認済み。
