# Authoring guide — Structure 1 Lab

This is the contract between the shared shell (`assets/`) and the topic pages.
If you build a topic page, you should only need this file and `topics/s1-1.html`
(the working reference template).

**Rules that never bend**

- Static files only. Must work from `file://` and from a GitHub Pages subpath.
  No `fetch`, no ES modules, no build step, no external scripts. Relative URLs only.
- One global namespace: `window.S1`. Do not add other globals.
- Do not edit `assets/css/site.css`, `assets/js/core.js`, `quiz.js` or `chem.js`
  from a topic branch. If something is missing, ask for it to be added to the shell.
- Topic builders own exactly three files per topic:
  `topics/s1-N.html`, `data/questions-s1-N.js`, `assets/js/widgets-s1-N.js`.
- Accuracy first. Use IB wording, IB data booklet values (`S1.chem.constants`,
  `S1.chem.elements`) and IB conventions (`dm3`, `mol dm-3`, `kPa`, `K`).
- All questions must be original. Never copy or closely paraphrase past papers.

---

## 1. Page skeleton (copy this)

```html
<!DOCTYPE html>
<html lang="en" data-root="../">            <!-- "" for root pages, "../" for /topics/ -->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>1.2 The nuclear atom | Structure 1 Lab</title>
<meta name="description" content="…one sentence…">
<meta name="color-scheme" content="light dark">
<script>(function(){try{var d=document.documentElement,t=localStorage.getItem('s1.theme'),l=localStorage.getItem('s1.level');if(t==='light'||t==='dark')d.setAttribute('data-theme',t);if(l==='sl')d.setAttribute('data-show','sl');}catch(e){}})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&amp;family=Bricolage+Grotesque:opsz,wght@12..96,500..800&amp;family=JetBrains+Mono:wght@400;600&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/site.css">
</head>
<body data-page="s1-2">                      <!-- s1-1 … s1-5 | home | practice -->
<div data-s1-header></div>
<noscript><p class="noscript-note">This site needs JavaScript for its menu, quizzes and interactive diagrams. The explanations below still work without it. <a href="../index.html">Home</a></p></noscript>
<main id="main">

  <header class="topic-hero wrap">
    <div data-s1-tile="s1-2"></div>
    <div class="topic-hero__text">
      <p class="eyebrow">Structure 1.2</p>
      <h1>The nuclear atom</h1>
      <p class="guiding"><span class="guiding__label">Guiding question</span>How do the nuclei of atoms differ?</p>
    </div>
  </header>

  <div class="topic-layout wrap">
    <nav data-s1-toc aria-label="On this page"></nav>
    <div class="topic-content">

      <section class="topic-section" id="goals">
        <h2>What you need to be able to do</h2>
        <ul class="checklist" data-s1-checklist="s1-2"> … </ul>
      </section>

      <section class="topic-section" id="isotopes">
        <span class="section-code">Structure 1.2.2</span>
        <h2>Isotopes</h2>
        …
      </section>

      <div data-s1-pager></div>
    </div>
  </div>
</main>
<div data-s1-footer></div>
<script src="../assets/js/chem.js"></script>
<script src="../assets/js/core.js"></script>
<script src="../assets/js/quiz.js"></script>
<script src="../data/questions-s1-2.js"></script>
<script src="../assets/js/widgets-s1-2.js"></script>
</body>
</html>
```

Script order matters: `chem.js`, `core.js`, `quiz.js`, question banks, widget files.
All scripts go at the end of `<body>`, without `defer` or `async`.
Everything auto-initialises on `DOMContentLoaded`. If you insert HTML later, call `S1.enhance(element)`.

`data-root` on `<html>` and `data-page` on `<body>` are required. The header, footer,
tile, section nav and pager are all injected by `core.js` from those two attributes.

### Sections

- Every major section is `<section class="topic-section" id="unique-id">` with one `<h2>`.
  The section nav is built from these. Use `data-toc="Short label"` to shorten a long heading in the nav.
- Optional syllabus code above the heading: `<span class="section-code">Structure 1.2.2</span>`.
- Use `<h3>` inside sections. Do not skip heading levels.
- Text width is capped automatically. Do not add wrappers for width.

---

## 2. Level system (SL / Additional HL)

Unmarked content is SL core. Mark Additional HL content with `data-level="ahl"` on
a block element: `section`, `div`, `aside`, `figure` or `article`.

```html
<section class="topic-section" id="ie" data-level="ahl"> … </section>
<div data-level="ahl"><p>…</p></div>
<aside class="callout callout--key" data-level="ahl"><p>…</p></aside>
<div class="worked" data-s1-worked data-level="ahl"> … </div>
```

The violet edge and “Additional HL” badge are added for you (add `data-no-badge` to
suppress the badge, for example on a block nested inside another AHL block).
The header switch hides every `[data-level="ahl"]` element sitewide.
Violet means AHL and nothing else. Never use it for decoration.

Inline badges, if you need one in text: `<span class="badge badge--sl">SL</span>`,
`<span class="badge badge--ahl">AHL</span>`.

---

## 3. Components

### 3.1 Checklist (“what you need to be able to do”)

```html
<ul class="checklist" data-s1-checklist="s1-2">
  <li data-id="isotope-def" data-level="sl">Define isotope.</li>
  <li data-id="mass-spec" data-level="ahl">Interpret a mass spectrum.</li>
</ul>
```

- `data-id` must be unique within the topic and must never change once published
  (it is the storage key). `data-level` is `sl` or `ahl`.
- One checklist per topic page. Ticks feed the progress meter on the home page.

### 3.2 Callouts

The label is added by CSS. Override it with `data-title="…"` only when needed.

```html
<aside class="callout callout--key"><p>…</p></aside>       <!-- Key idea -->
<aside class="callout callout--mistake"><p>…</p></aside>   <!-- Common mistake (amber) -->
<aside class="callout callout--exam"><p>…</p></aside>      <!-- Exam tip: what the markscheme wants -->
<aside class="callout callout--scope"><p>…</p></aside>     <!-- Not needed for IB -->
<aside class="callout callout--booklet"><p>…</p></aside>   <!-- In your data booklet -->
```

- `--scope` is a core feature. Use it wherever students commonly over-learn.
  Say plainly what is not required, in one or two sentences. Do not then teach it.
- `--mistake` describes the wrong idea and then the right one.
- Keep callouts to 1–3 sentences. At most one of each kind per screenful.

### 3.3 Definitions, formulas, units

```html
<dfn>isotopes</dfn>                                  <!-- bold term, first use -->
<dfn data-def="Atoms of the same element with different numbers of neutrons.">isotopes</dfn>   <!-- with tooltip -->

<span class="chem">H2SO4</span>                     <!-- auto-formatted by S1.chem.formula -->
<span class="chem">SO4^2-</span>  <span class="chem">Na+</span>  <span class="chem">CuSO4.5H2O</span>
<span class="chem">N2 + 3H2 <=> 2NH3</span>         <!-- write &lt;=&gt; in HTML source -->
<span class="unit">g mol-1</span>                   <!-- auto: g mol⁻¹ -->
<span class="mono">6.02 × 10<sup>23</sup></span>     <!-- numbers and data in mono -->
```

Formula rules: digits after a letter or `)` become subscripts; a leading number is a
coefficient; `^2-`, `^3+` are charges; a bare trailing `+` or `-` is a single charge;
`^14C` gives a mass number; `.` before a hydrate becomes a centred dot; `->` and `<=>` become arrows.
Write oxide as `O^2-` (`O2-` would be read as superoxide). If a `.chem` or `.unit`
element already contains child elements, it is left alone, so you can hand-write the HTML.
Full nuclide notation: `S1.chem.nuclide(14, 6, 'C')` returns HTML.

### 3.4 Equation block

```html
<div class="eq">
  <div class="eq__formula"><i>n</i> = <span class="frac"><span><i>m</i></span><span><i>M</i></span></span></div>
  <dl class="eq__legend">
    <div><dt>n</dt><dd>amount of substance <span class="unit">mol</span></dd></div>
    <div><dt>m</dt><dd>mass <span class="unit">g</span></dd></div>
    <div><dt>M</dt><dd>molar mass <span class="unit">g mol-1</span></dd></div>
  </dl>
</div>
```

`.frac` takes exactly two child spans (top, bottom). Variables are italic (`<i>`), units are not.
Every symbol in the formula must appear in the legend with its unit.

### 3.5 Data table

```html
<div class="table-scroll">
  <table class="data">
    <caption>Relative masses and charges</caption>
    <thead><tr><th scope="col">Particle</th><th scope="col" class="num">Relative mass</th></tr></thead>
    <tbody><tr><th scope="row">proton</th><td class="num">1</td></tr></tbody>
  </table>
</div>
```

Always wrap in `.table-scroll` (it scrolls sideways on phones). Use `class="num"` on numeric cells and their headers.

### 3.6 Worked example stepper — the main tool for calculations

```html
<div class="worked" data-s1-worked>
  <h3 class="worked__title">Moles from mass</h3>
  <div class="worked__problem">
    <p>Calculate the amount, in mol, of 4.50 g of water.</p>
  </div>
  <ol class="worked__steps">
    <li data-title="Find the molar mass">
      <p class="worked__why">You need M before you can use n = m / M.</p>
      <div class="worked__math"><i>M</i>(H<sub>2</sub>O) = 2(1.01) + 16.00 = 18.02 g mol<sup>−1</sup></div>
    </li>
    <li data-title="Substitute and calculate">
      <p class="worked__why">Keep extra digits until the final step.</p>
      <div class="worked__math"><i>n</i> = 4.50 / 18.02 = 0.24972… mol</div>
    </li>
    <li data-title="Round to the data">
      <p class="worked__why">4.50 g has 3 significant figures.</p>
      <div class="worked__math"><i>n</i> = <b>0.250 mol</b></div>
    </li>
  </ol>
  <div class="worked__answer"><p>0.250 mol</p></div>
</div>
```

- `data-title` on each `<li>`: a short imperative heading for the step (“Convert to dm³”).
- `.worked__why`: one sentence saying why this step. The “Why:” label is added by CSS
  (change it with `data-label="Check"`).
- `.worked__math`: one line of working per block; use several blocks for several lines.
  Use `<b>` for the result of the final step. Lines scroll sideways rather than wrap, so keep them short.
- 3–6 steps. Steps are hidden until revealed; with JavaScript off, everything shows.
- Use the heading level that fits the outline (`h3` inside a section).
- Optional: `data-kicker="Worked example 2"` changes the bar label.
- Always carry units through the working and state the rounding rule in the last step.

### 3.7 “Try it” numeric check

```html
<div data-s1-numeric data-answer="0.2497" data-tolerance="1%" data-sigfigs="3" data-unit="mol">
  <div class="tryit__q"><p>Calculate the amount, in mol, of 4.50 g of water.</p></div>
  <ol class="tryit__hints">
    <li>First hint: a nudge about the method.</li>
    <li>Second hint: the set-up, without the final number.</li>
  </ol>
  <div class="tryit__solution">
    <div class="worked__math"><i>n</i> = 4.50 / 18.02 = 0.250 mol</div>
  </div>
</div>
```

| Attribute | Meaning |
|---|---|
| `data-answer` | The unrounded correct value, as a plain JS number (`6.02e23` is fine). Required. |
| `data-tolerance` | `"1%"` = relative; `"0.5"` = absolute. Default `1%`. |
| `data-sigfigs` | `"3"` or a range `"2-3"`. Omit to ignore significant figures. |
| `data-unit` | Shown after the box; plain text, formatted like `.unit`. |
| `data-label` | Replaces “Your answer”. |
| `data-title` | Replaces the “Try it” label. |

The hint ladder is hint 1, hint 2, …, then the full solution. Two hints is the norm.

Accepted input: `0.0012`, `1.2e-3`, `1.2E-3`, `1.2x10^-3`, `1.2 × 10^-3`, `1.2*10^-3`,
`1.2 × 10⁻³`, `10^-3`, decimal commas (`1,2e-3`), and a trailing unit (`0.25 mol`).
Feedback is one of: correct; “right value, check your significant figures”; not a number;
power-of-ten slip; sign slip; wrong.
Trailing zeros without a decimal point are treated generously (`1200` counts as 2, 3 or 4 s.f.).

### 3.8 Quiz embed

```html
<div data-s1-quiz data-topic="s1-2" data-tier="foundation" data-count="5" data-title="Isotopes quick check"></div>
```

| Attribute | Meaning |
|---|---|
| `data-topic` | One id, a comma list (`s1-1,s1-2`), or `all`. |
| `data-tier` | `foundation`, `exam` or `challenge`. Omit for any. |
| `data-level` | `sl` or `ahl`. Omit for both. |
| `data-type` | `mcq`, `numeric`, `multi`, `order` or `short`. Omit for any. |
| `data-ids` | Comma list of question ids, to pin exact questions. Add `data-shuffle="false"` to keep that order. |
| `data-count` | How many to draw (default 5; `0` = all). |
| `data-title` | Heading in the quiz bar. |
| `data-mode` | `review` shows the student's saved mistakes instead. |

Questions not yet answered correctly are served first. In “SL core only” mode AHL questions are left out.
Place a quiz after each major section (pin with `data-ids`) and one mixed quiz at the end.

### 3.9 Widgets

```html
<figure data-s1-widget="s1-2.isotopes" data-title="Build an isotope" data-start="12">
  <p class="widget__fallback">An interactive diagram appears here when JavaScript is on.</p>
  <figcaption>One or two sentences: what to do and what to notice.</figcaption>
</figure>
```

Register the widget in `assets/js/widgets-s1-N.js` (loaded after `core.js`).
Names are prefixed with the topic id.

```js
(function () {
  'use strict';
  var S1 = window.S1;
  S1.widgets.register('s1-2.isotopes', function (w) {
    var setMass = w.readoutItem('Mass number');
    var n = w.slider({ label: 'Neutrons', min: 0, max: 20, step: 1, value: Number(w.options.start) || 6, onInput: update });
    var cv = w.canvas({ height: 220, label: 'Nucleus diagram' });
    cv.draw(function (ctx, width, height) {
      ctx.fillStyle = w.color('--accent');            // always read colours from tokens
      ctx.fillRect(0, 0, n.value * 10, 20);
    });
    function update() { setMass(String(6 + n.value)); cv.draw(); }
    update();
  });
})();
```

The frame (title bar, controls, stage, readout, caption) is built for you. `w` gives you:

| Member | Use |
|---|---|
| `w.el`, `w.stage`, `w.controls`, `w.readout`, `w.caption` | The frame's elements. |
| `w.options` | The element's `data-*` attributes (strings). |
| `w.canvas({height \| aspect, label, minWidth, maxHeight})` | Hi-DPI canvas filling the stage. Returns `{el, ctx, width, height, draw(fn), resize()}`. `draw(fn)` registers `fn(ctx, width, height)` (CSS pixels) and runs it now, on resize and on theme change. `draw()` with no argument redraws. |
| `w.svg('0 0 600 240', {label})` | Empty responsive `<svg>` in the stage. In SVG, use CSS variables directly (`fill="var(--accent)"`). |
| `w.slider({label, min, max, step, value, unit, onInput})` | Linked slider and number box. Returns `{el, value, set(v, silent)}`. |
| `w.button(label, onClick, {primary})` | Button in the controls area. |
| `w.select({label, options, value, onChange})` | Labelled select. `options` is `['a','b']` or `[{value, label}]`. |
| `w.readoutItem(label, {text})` | Returns a setter for a named value in the readout strip (HTML allowed; `{text: true}` for a sentence). The readout is an `aria-live` region. |
| `w.color('--token')` | Resolved CSS token, for canvas. |
| `w.onTheme(fn)`, `w.redraw()`, `w.onDraw(fn)` | Theme hook and manual redraw. |
| `w.loop(fn(dt, t))` | Animation loop. Returns `{start(userAsked), stop(), running}`. Pauses off screen and in hidden tabs. With reduced motion it only starts from `start(true)`, so call that from a Play button. |
| `w.reducedMotion` | `true` if the user prefers reduced motion. |

Widget rules: every control has a visible label; every canvas has a `label` describing it;
the readout carries the numbers so the widget works without seeing the picture;
no colour-only meaning; must fit 328 px of width; no autoplay that cannot be paused.
Use `S1.chem.fmt`, `S1.chem.sci`, `S1.chem.fixed` for numbers in readouts.

### 3.10 Smaller pieces

| Markup | What it does |
|---|---|
| `<div data-s1-tile="s1-3"></div>` | Topic element-cell tile. |
| `<div data-s1-pager></div>` | Previous / next topic links. |
| `<nav data-s1-toc></nav>` | Section nav, built from `.topic-section` headings. |
| `<div data-s1-topics></div>` | The five-cell row with progress (home page). |
| `<div data-s1-reset></div>` | “Reset my progress” with in-page confirm. |
| `<div data-s1-practice></div>` | The practice arena (practice page). |
| `<hr class="spectrum">` | Balmer-line band as a section break. Use at most once per page. |
| `.btn`, `.btn--primary`, `.btn--quiet`, `.btn--small` | Buttons and button-style links. |
| `.lede`, `.muted`, `.small`, `.mono`, `.nowrap`, `.prose`, `.eyebrow` | Text helpers. |

---

## 4. Question banks

One file per topic: `data/questions-s1-N.js`. It makes one call:

```js
S1.questions.register('s1-4', [ { …question… }, { …question… } ]);
```

### Schema

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | yes | Globally unique and permanent: `s1-4-q017`. Progress is stored against it. |
| `topic` | string | no | `'s1-1'` … `'s1-5'`. Defaults to the bank's topic. |
| `level` | `'sl'` \| `'ahl'` | yes | Default `'sl'`. |
| `tier` | `'foundation'` \| `'exam'` \| `'challenge'` | yes | Default `'foundation'`. |
| `type` | `'mcq'` \| `'numeric'` \| `'multi'` \| `'order'` \| `'short'` | yes | |
| `marks` | number | yes | Default 1. |
| `syllabus` | string | recommended | e.g. `'Structure 1.4.2'`. |
| `stem` | HTML string | yes | Wrap in `<p>`. `.chem` and `.unit` spans are formatted. |
| `hints` | HTML string[] | recommended | Revealed one at a time. |
| `solution` | HTML string | recommended | Step by step. Use `<div class="worked__math">` for lines of working. |
| `correctNote` | HTML string | no | Extra line shown with “Correct”. |

Type-specific fields:

| Type | Fields |
|---|---|
| `mcq` | `options`: HTML string[] (keep IB order, usually 4). `answer`: index of the correct option (0-based). `misconception`: object keyed by wrong option index, giving feedback specific to that distractor: `{0: '…', 2: '…', 3: '…'}`. |
| `multi` | `options` as above. `answer`: array of all correct indices, e.g. `[1, 3]`. `misconception`: as for `mcq`. |
| `numeric` | `answer`: unrounded number. `tolerance`: `'1%'` or `{rel: 0.01}` (relative), `{abs: 0.5}` or a bare number (absolute); default 1 % relative. `sigfigs`: `3` or `[2, 3]`; omit to ignore. `unit`: plain text such as `'mol dm-3'`. `answerDisplay` (optional HTML): how to print the answer in the solution if the automatic rounding is not what you want. |
| `order` | `options`: the steps **written in the correct order**; the engine shuffles them. (`answer` is optional: an array of option indices in correct order, if you prefer to write options in another order.) |
| `short` | `answer`: model answer (HTML). `markscheme`: string[] of marking points; the student ticks the ones they made, one mark each, capped at `marks`. |

Complete examples of all five types are in `data/questions-s1-1.js`.

### How answers are scored

- The **first definite attempt** counts: right, wrong, or (for `short`) part marks.
  The student can then retry or reveal the solution.
- For `numeric`, “right value but wrong significant figures” and unreadable input do
  not use up the first attempt. The student is told and can fix it.
- Wrong first attempts are saved as mistakes and offered in “Review my mistakes”.
  A later correct first attempt removes the question from that list.
- Invalid questions are skipped with a `console.warn`; check the console after editing a bank.

### Writing good questions

- Aim per topic: at least 12 foundation, 12 exam, 6 challenge, across all five types.
  Tag AHL questions `level: 'ahl'`.
- Calculations: choose data so the answer is not on a rounding boundary. Set `answer`
  to the unrounded value and let `tolerance` and `sigfigs` do the work. Use data booklet
  values (`Ar` to 2 d.p., `NA = 6.02e23`, `R = 8.31`, molar volume at STP `22.7 dm3 mol-1`).
- If rounding intermediate values could shift the last digit, widen `tolerance` (2 %) or allow `sigfigs: [2, 3]`.
- Every wrong MCQ option should be a real misconception, with its own `misconception` text
  that explains the error without just stating the answer.
- Solutions show every step with units, as a worked example would.
- In JS strings, write `<=>` and `->` directly inside `.chem` spans.

---

## 5. JavaScript API summary

```
S1.topics, S1.topic(id)                      topic registry (id, num, sym, short, title, blurb, href)
S1.enhance(root?)                            initialise components inside root (idempotent)
S1.ready(fn)                                 run after first initialisation
S1.theme.get() / set('dark') / toggle() / color('--token') / onChange(fn)
S1.level.get() → 'all' | 'sl' / set(v) / onChange(fn)
S1.progress.getCheck / setCheck / recordAnswer(q, result) / result(id) / mistakes() / summary(topic) / reset()
S1.questions.register(topic, list) / all() / get(id) / byTopic(topic) / filter({topics, level, tier, type, ids})
S1.quiz.mount(el, {topics, level, tier, type, ids, count, shuffle, mode, title})
S1.widgets.register(name, initFn)
S1.util.el(tag, attrs, children) / escapeHtml / shuffle / clamp / uid / reducedMotion()
S1.store.get(key, fallback) / set(key, value)   safe localStorage (use keys starting "s1.")

S1.chem.constants      NA, R, Vm_STP, STP_T, STP_p (kPa), STP_p_Pa, h, c, zeroC
S1.chem.constantInfo   name, symbolHtml, valueHtml, unit for display
S1.chem.elements       [{z, symbol, name, ar}] for Z = 1–36;  S1.chem.element('Na' | 11)
S1.chem.molarMass('Ca(OH)2')                  → 74.1 (g mol-1, from Ar to 2 d.p.)
S1.chem.formula(str), unit(str), nuclide(A, Z, symbol)   → HTML strings
S1.chem.roundSig(x, n) → number;  toSig(x, n) → '0.250';  sci(x, n) → '6.02 × 10<sup>23</sup>'
S1.chem.fmt(x, n)      → plain or scientific HTML, chosen automatically;  fixed(x, dp)
S1.chem.parseNumber(str) → {value, sfMin, sfMax} | null
S1.chem.checkNumeric(input, {answer, tolerance, sigfigs}) → {status: 'correct'|'sigfig'|'wrong'|'invalid', clue}
```

Events on `document`: `s1:themechange` (`detail.theme`), `s1:levelchange` (`detail.level`),
`s1:progress`, `s1:questions`.

Rounding in `S1.chem` is round-half-up on the decimal digits, so `toSig(310.15, 4)` is `310.2`.

---

## 6. Design rules

Colour has fixed jobs. Use tokens (`var(--accent)`), never hex values, in any inline style or widget.

| Token | Job |
|---|---|
| `--paper`, `--surface`, `--surface-2` | Page, panels, recessed areas. |
| `--ink`, `--ink-2`, `--ink-3` | Text: main, secondary, muted. |
| `--line`, `--line-strong` | Hairlines and control borders. |
| `--accent`, `--accent-ink`, `--accent-soft`, `--on-accent` | Interactive things and key ideas. |
| `--ahl`, `--ahl-soft` | Additional HL only. |
| `--amber`, `--amber-line`, `--amber-soft` | Common mistakes (and “nearly right” feedback) only. |
| `--ok`, `--ok-soft`, `--bad`, `--bad-soft` | Correct / incorrect feedback only. |
| `--h-alpha`, `--h-beta`, `--h-gamma`, `--h-delta`, `--band-bg` | The spectral band. Fine for spectrum diagrams in 1.3. |
| `--font-body`, `--font-display`, `--font-mono` | Type families. |

For data series in a chart, use `--accent`, `--ink-2` and `--line-strong`, plus direct labels.
Do not borrow the role colours.

### Do

- Write to a capable 16-year-old: plain, warm, direct. Short sentences. One idea per paragraph.
- Lead each section with the idea, then an example, then a worked example, then a “Try it”.
- Put numbers, units and working in mono (`.mono`, `.unit`, `.worked__math`).
- Use a true minus sign (−) and multiplication sign (×) in text. Leave a space between number and unit.
- Give every image, canvas and SVG a text description. Test in dark mode and at 360 px wide.
- Say what is *not* required, with a scope callout, whenever a topic invites going deeper.

### Don't

- No emoji as icons, no gradients, no shadows, no rounded cards, no centred body text.
- No new colours, fonts or font sizes. No inline `style` except sizes inside a widget.
- No hype (“amazing”, “super easy”) and no filler. Do not tell students something is easy.
- Do not put a bare `<table>` or wide diagram in the flow; wrap it in `.table-scroll` or a widget.
- Do not rely on colour alone, hover alone, or animation alone to carry meaning.
- Do not use `localStorage` directly; use `S1.store` or `S1.progress`.
- Do not copy IB questions, markschemes or figures.

### Before you hand in a page

1. Open it from `file://`. The console shows no errors and no `[S1.questions]` warnings.
2. No sideways page scroll at 360 px. Light and dark both look right.
3. Tab through the page: every control is reachable and has a visible focus ring.
4. Switch to “SL core only”: the page still reads sensibly with AHL blocks gone.
5. Every calculation has been checked independently, with data booklet values.
