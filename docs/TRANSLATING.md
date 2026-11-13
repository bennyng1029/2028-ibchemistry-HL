# Translating Structure Lab

The site is written in English. Japanese (`ja`) and Traditional Chinese (`zh-Hant`) are **overlays**:
separate files that map each English string to its translation. Nobody edits the English pages to
translate them, and a missing translation simply shows the English.

The student chooses the language in the header. There is no auto-detection: the site is English until
she chooses otherwise, and the choice is remembered in the browser.

## 1. How it works

```
i18n/<lang>/index.js        list of the overlay files that exist (generated: do not edit by hand)
i18n/<lang>/ui.js           header, footer, quiz engine, practice filters, topic names, drawing helpers
i18n/<lang>/home.js         index.html
i18n/<lang>/practice.js     practice.html
i18n/<lang>/s1-1.js         topics/s1-1.html + its widget strings + its question bank   (one per topic id)
```

Each file makes one call:

```js
S1.i18n.register('ja', 's1-4', {
  strings: {
    "The mole": "モル",
    "A <dfn>mole</dfn> is the SI unit of amount of substance.": "<dfn>モル <span class=\"en-term\">(mole)</span></dfn>は物質量の SI 単位です。",
    "{n} of {total} steps": "ステップ {n} / {total}"
  },
  questions: {
    "s1-4-q001": { stem: "…", options: ["…", "…", "…", "…"], hints: ["…"], solution: "…", misconception: { "0": "…" } }
  }
});
```

- **The key is the English source**, with runs of white space collapsed to one space. For a block of page
  text the key is the block's inner HTML exactly as the page author wrote it (before the site adds
  subscripts, badges and so on). You never type keys: the extraction tool writes them.
- **Order of operations.** On load the site records the authored English of every block, *then* builds the
  components. A translation replaces the authored HTML and the formatters run again on it, so
  `<span class="chem">H2O</span>` in a translation is formatted exactly like the English.
- **What is translated:** headings, `p`, `li`, `dt`/`dd`, `th`/`td`, `caption`, `figcaption`, `summary`,
  `legend`, `button`, `option`, anything marked `data-i18n`; the attributes `title`, `aria-label`,
  `placeholder`, `alt`; the page `<title>`; component attributes (`data-title`, `data-toc`, `data-def`,
  `data-label`, `data-kicker`, `data-correct`); widget strings (`t("…")`); question fields.
- **What is never translated:** anything inside `data-i18n="off"`, `.chem`, `.unit`, `.eq__formula`,
  `.worked__math`, `code`, `pre`, `kbd`, `samp`. Numbers, answers and marking logic never change.
- **Loading.** Files are added with `<script>` tags on demand, so everything works from `file://`.
  English stays on screen until the files have loaded. On the practice page every topic overlay is loaded
  so that all questions can be shown translated.
- **Switching** fires `s1:langchange`. Page text swaps in place (the English is cached, so switching back
  is exact). Quizzes re-render the current question without losing the answer. Widgets restart.

## 2. Workflow for a translator

Work on one scope (one file) at a time. Wait until the English for that page has been audited: every later
change to an English sentence makes its translation stale.

1. **Make the skeleton.**

   ```
   node tools/i18n-extract.js s1-4 --write
   ```

   This creates or updates `i18n/ja/s1-4.js` and `i18n/zh-Hant/s1-4.js` with every key and an empty
   value. Existing translations are kept; keys that no longer exist in English are dropped.
   Without `--write` it prints the skeleton; `--lang ja` limits it to one language; `--json` also prints
   the English question text for reference.
2. **Fill in the values.** Leave `""` for anything not done yet (English is shown). Do not edit keys.
3. **Check.**

   ```
   node tools/i18n-check.js ja --verbose
   ```

   It lists, per file, what is **missing** (no translation yet) and what is **stale** (a key in the file
   that is no longer in the English source), and it rewrites `i18n/ja/index.js`. Run it after adding a
   new file, otherwise the site will not load that file.
4. **Look at the page.** Open it, switch language in the header, and read it at phone width as well.
   Add `?i18ndebug` to the address (or run `localStorage.setItem('s1.i18ndebug', '1')`) to outline every
   block that is still in English. In the console, `S1.i18n.coverage()` lists the missing keys for the
   page you are on.

The tools need Node and Playwright and nothing else. `i18n/ja/dev.js` is a small test fixture for
`dev/kitchen-sink.html`; the checker skips it unless you pass `--all`.

## 3. Rules for the text

**Register.** Plain, warm and direct, written for a 16-year-old. Short sentences and common words, the same
as the English. Japanese: です・ます style. Chinese: standard written Chinese (書面語) in a natural, plain
register, not Cantonese colloquial writing.

**Keep the HTML.** Copy every tag and attribute from the key into the translation and translate only the
words between them. In particular keep `class="chem"`, `class="unit"`, `class="mono"`, links and `<strong>`.
Translate the text of a `data-def="…"` attribute if the key contains one.

**Keep the placeholders.** `{n}`, `{total}`, `{name}` must appear unchanged; you may move them.

**Do not translate:** chemical formulas, symbols, units, numbers, variable letters, syllabus codes
("Structure 1.4.2"), "SL", "HL", "AHL", "IB", paper names ("Paper 1A"), and the site name.

**Punctuation.** Use full-width punctuation in running text (。、，：；（）「」) and half-width for numbers,
units and formulas. Put a thin gap between CJK text and Latin letters or digits only where it reads better.
No italics for emphasis: use `<strong>`. (`<i>` for variables such as *n* and *V* stays.)

### The exam is in English

She will sit the exam in English, so the English wording has to stay in view where it earns marks.

1. **Key terms.** Every `<dfn>` shows the translated term followed by the English term in brackets, using
   the helper class:

   ```html
   <dfn>莫耳 …</dfn>   ✗
   <dfn>摩爾 <span class="en-term">(mole)</span></dfn>   ✓
   ```

   Do this the first time a term is defined on a page (wherever the English uses `<dfn>`). After that, use
   the translated term alone.
2. **Exam tips** (`callout--exam`) are shown in English with the translation underneath. This is automatic:
   just translate the paragraph.
3. **Markscheme points and model answers** in written-answer questions are also shown in English with the
   translation underneath. Translate them plainly; do not add or remove marking points.
4. **Command terms** (state, describe, explain, deduce, calculate, outline, …) follow the same idea as key
   terms the first time they matter in a question stem: 説明しなさい (explain).

## 4. Terminology policy

- **Japanese:** the terms used in Japanese upper-secondary chemistry (MEXT course of study and approved
  textbooks).
- **Traditional Chinese:** **Hong Kong** school chemistry terms. The authority is the EDB glossary
  《中學化學科常用英漢及漢英辭彙》 (2007) together with the Chinese HKDSE Chemistry Curriculum and Assessment
  Guide, for example 摩爾 (not 莫耳), 電子排佈, 軌態, 週期表 (not 周期表), 壓強, 貴氣體, 分子間引力. Where Hong
  Kong and Taiwan or the Mainland differ, use Hong Kong. Where IB and HKDSE conventions differ (STP and
  22.7 dm³ mol⁻¹, IUPAC names, oxidation state, Additional HL), keep IB and add a one-line note.
  **The full glossary (about 780 terms, the 118 elements, the style guide and the list of terms still to
  confirm) is [`docs/glossary-zh-Hant.md`](glossary-zh-Hant.md). It overrides the starter table below for
  Chinese.**
- One English term has one translation across the whole site. Add new terms to the table below before you
  use them. A "?" marks a term that the terminology reviewer still has to confirm.

### Starter glossary

| English | 日本語 (superseded by the reviewed [glossary-ja.md](glossary-ja.md), which wins where they differ) | 繁體中文 (HK) |
|---|---|---|
| element | 元素 (substance: 単体) | 元素 |
| compound | 化合物 | 化合物 |
| mixture (homogeneous / heterogeneous) | 混合物(均一 / 不均一) | 混合物(均勻 / 不均勻) |
| state of matter | 物質の状態(三態) | 物態 |
| change of state | 状態変化 | 物態變化 |
| melting / freezing | 融解 / 凝固 | 熔化 / 凝固 |
| vaporization (evaporation, boiling) / condensation | 蒸発・沸騰 / 凝縮 | 汽化(蒸發、沸騰) / 凝結 |
| sublimation / deposition | 昇華 / 凝華 ? | 昇華 / 凝華 ? |
| kinetic molecular theory | 分子運動論 | 分子運動論 |
| temperature (kelvin, absolute zero) | 温度(ケルビン、絶対零度) | 溫度(開爾文、絕對零度) |
| atom / nucleus | 原子 / 原子核 | 原子 / 原子核 |
| proton / neutron / electron | 陽子 / 中性子 / 電子 | 質子 / 中子 / 電子 |
| atomic number / mass number | 原子番号 / 質量数 | 原子序 / 質量數 |
| isotope | 同位体 | 同位素 |
| relative atomic mass | 相対原子質量(原子量) | 相對原子質量 |
| relative formula mass | 式量 | 相對式量 |
| mass spectrum / mass spectrometer | 質量スペクトル / 質量分析計 | 質譜 / 質譜儀 |
| emission spectrum (line spectrum) | 発光スペクトル(線スペクトル) | 發射光譜(線光譜) |
| energy level | エネルギー準位 | 能級 |
| sublevel | 副殻 | 亞層 |
| orbital | 軌道(電子軌道) | 軌態 |
| electron configuration | 電子配置 | 電子排佈 |
| ionization energy (first, successive) | イオン化エネルギー(第一、逐次) | 電離能(第一、逐級 ?) |
| mole | モル | 摩爾 |
| amount of substance | 物質量 | 物質的量 ? (HK classrooms: 摩爾數) |
| Avogadro constant | アボガドロ定数 | 亞佛加德羅常數 |
| molar mass | モル質量 | 摩爾質量 |
| empirical formula | 組成式(実験式) | 實驗式 |
| molecular formula | 分子式 | 分子式 |
| concentration (molar concentration) | 濃度(モル濃度) | 濃度(摩爾濃度) |
| solution / solute / solvent | 溶液 / 溶質 / 溶媒 | 溶液 / 溶質 / 溶劑 |
| molar volume | モル体積 | 摩爾體積 |
| ideal gas | 理想気体 | 理想氣體 |
| pressure / volume | 圧力 / 体積 | 壓強 / 體積 |
| ionic bond / ionic compound | イオン結合 / イオン化合物 | 離子鍵 / 離子化合物 |
| lattice | 結晶格子 | 晶格 |
| covalent bond | 共有結合 | 共價鍵 |
| Lewis formula | ルイス構造式(電子式) | 路易斯結構式(HKDSE: 電子圖) |
| lone pair / bonding pair | 非共有電子対 / 共有電子対 | 孤電子對 / 鍵合電子對 |
| coordination bond | 配位結合 | 配位鍵(HKDSE: 配位共價鍵) |
| electron domain | 電子領域 ? | 電子域 ? |
| molecular geometry (shape) | 分子の形 | 分子形狀 |
| bond angle | 結合角 | 鍵角 |
| electronegativity | 電気陰性度 | 電負性 |
| polarity (polar / non-polar) | 極性(極性 / 無極性) | 極性(極性 / 非極性) |
| intermolecular forces | 分子間力 | 分子間引力 |
| hydrogen bonding | 水素結合 | 氫鍵 |
| formal charge | 形式電荷 | 形式電荷 |
| resonance | 共鳴 | 共振 |
| hybridization | 混成 | 雜化 |
| sigma bond / pi bond | σ 結合 / π 結合 | σ 鍵 / π 鍵 |
| metallic bond | 金属結合 | 金屬鍵 |
| delocalized electrons | 非局在化電子(自由電子) | 離域電子 |
| alloy | 合金 | 合金 |
| polymer / monomer | 高分子(ポリマー) / 単量体(モノマー) | 聚合物 / 單體 |
| periodic table | 周期表 | 週期表 |
| group / period / block | 族 / 周期 / ブロック | 族 / 週期 / 區 |
| metal / metalloid / non-metal | 金属 / 半金属 / 非金属 | 金屬 / 類金屬 / 非金屬 |
| oxidation state | 酸化数 | 氧化態 (HKDSE: 氧化數) |
| atomic radius / ionic radius | 原子半径 / イオン半径 | 原子半徑 / 離子半徑 |
| melting point / boiling point | 融点 / 沸点 | 熔點 / 沸點 |
| functional group | 官能基 | 官能基 |
| homologous series | 同族列 | 同系列 |
| structural formula / skeletal formula | 構造式 / 骨格構造式 | 結構式 / 骨架式 ? |
| isomer (structural isomer / stereoisomer) | 異性体(構造異性体 / 立体異性体) | 同分異構體(結構異構體 / 立體異構體) |
| infrared spectrum | 赤外スペクトル | 紅外光譜 |
| NMR spectrum (chemical shift) | NMR スペクトル(化学シフト) | 核磁共振譜(化學位移) |
| significant figures | 有効数字 | 有效數字 |
| standard form (scientific notation) | 指数表記 | 科學記數法 |
| data booklet | データブックレット | 數據手冊 |
| worked example | 例題 | 例題 |
| markscheme | 採点基準 | 評分準則 |

Terms where Hong Kong and Taiwan or Mainland usage differ, so that nobody "corrects" them by mistake:
mole 摩爾 (TW 莫耳); orbital 軌態 (TW 軌域, Mainland 軌道); electron configuration 電子排佈 (TW 電子組態,
Mainland 電子排布); periodic table 週期表 (Mainland 周期表); sublevel 亞層 (TW 副殼層); hybridization 雜化
(TW 混成); intermolecular forces 分子間引力 (TW and Mainland 分子間作用力); ionization energy 電離能 (TW 游離能);
electronegativity 電負性 (TW 電負度); noble gas 貴氣體 (Mainland 稀有氣體, TW 惰性氣體 / 鈍氣); pressure 壓強
(TW 壓力); silicon 矽 (Mainland 硅); amide 酰胺 (TW 醯胺); chromatography 色層法 (TW 層析); complex ion 絡離子
(TW 錯離子, Mainland 配離子); chiral 手性 (TW 對掌性); subatomic particle 次原子粒子 (Mainland 亞原子粒子);
Avogadro 亞佛加德羅 (TW 亞佛加厥, Mainland 阿伏伽德羅); kelvin 開爾文 (TW 克耳文); scientific notation
科學記數法 (TW 科學記號); data 數據 (TW 資料); software words such as 儲存, 選單, 瀏覽器 are shared.
The complete list, with sources, is in [`docs/glossary-zh-Hant.md`](glossary-zh-Hant.md).

## 5. For developers

- `S1.t(english, vars)` is the one lookup function. It exists as soon as `core.js` has loaded and returns
  the English until a language is active. It returns HTML, unescaped.
- Shell code binds text with `S1.i18n.live(el, fn)` / `liveAttr(el, name, fn)` so that it re-renders on a
  language change; `S1.util.el(tag, {t: 'English'})` is the shorthand. A key that reaches `t()` through a
  variable must sit on a line that ends with a `// i18n` comment so that the extraction tool finds it.
- Labels that CSS draws (`Key idea`, `Try it`, `Why`, `Hint` …) come from a `data-s1-label` attribute that
  `core.js` sets in the current language; the CSS keeps an English fallback for pages without JavaScript.
- Fonts: `Noto Sans JP` / `Noto Sans TC` are requested from Google Fonts only when that language is active;
  the stacks fall back to the system CJK fonts. CJK text gets a taller line height, no letter-spacing or
  uppercase on labels, no italics for emphasis, and a shorter line length.
- Adding a language: add it to `LANGS` in `core.js` and `tools/i18n-lib.js`, add font stacks under
  `:root[lang="…"]` in `site.css`, then extract `ui`, `home` and `practice`.
