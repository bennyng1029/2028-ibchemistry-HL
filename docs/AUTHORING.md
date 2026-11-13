# Authoring guide — Structure Lab

This is the contract between the shared shell (`assets/`) and the topic pages.
If you build a topic page, you should only need this file and `topics/s1-1.html`
(the working reference template).

**Rules that never bend**

- Static files only. Must work from `file://` and from a GitHub Pages subpath.
  No `fetch`, no ES modules, no build step, no external scripts. Relative URLs only.
- One global namespace: `window.S1`. Do not add other globals.
- Do not edit `assets/css/site.css`, `assets/js/core.js`, `quiz.js` or `chem.js`
  from a topic branch. If something is missing, ask for it to be added to the shell.
- Topic builders own exactly three files per topic page (`<id>` is the topic id, see the table below):
  `topics/<id>.html`, `data/questions-<id>.js`, `assets/js/widgets-<id>.js`.
- Every string a student can see in a widget goes through `t("…")` (see section 7). English is the
  only language you write; translations are separate overlay files (`docs/TRANSLATING.md`).
- Accuracy first. Use IB wording, IB data booklet values (`S1.chem.constants`,
  `S1.chem.elements`) and IB conventions (`dm3`, `mol dm-3`, `kPa`, `K`).
- All questions must be original. Never copy or closely paraphrase past papers.

### Topic ids

| id | Page | Title | Tile |
|---|---|---|---|
| `s1-1` … `s1-5` | 1.1 – 1.5 | Structure 1. Models of the particulate nature of matter | Pn, Nu, Ec, Ml, Ig |
| `s2-1` | 2.1 | The ionic model | Io |
| `s2-2` | 2.2 | The covalent model (SL and HL core content) | Cv |
| `s2-2h` | 2.2 | The covalent model: Additional HL (a separate, AHL-only page) | Cv + HL tag |
| `s2-3` | 2.3 | The metallic model | Me |
| `s2-4` | 2.4 | From models to materials | Ma |
| `s3-1` | 3.1 | The periodic table: classification of elements | Pe |
| `s3-2` | 3.2 | Functional groups: classification of organic compounds | Fg |
| `s3-2h` | 3.2 | Functional groups: Additional HL (a separate, AHL-only page) | Fg + HL tag |

The registry is `S1.topics` in `core.js` (`id, group, ready, level, num, sym, short, title, blurb, href`),
grouped by `S1.groups` (`s1`, `s2`, `s3`). A topic with `ready: false` shows as "coming soon" in the header
menus and on the home page and is not a link; the manager sets `ready: true` when the page is published.
A topic with `level: 'ahl'` gets the violet HL tag and is hidden in "SL core only" mode. The pager runs
across all published topics in registry order. Question ids follow the page id: `s2-2h-q001`.
On an AHL-only page do **not** also mark every section `data-level="ahl"`: the whole page is AHL.

---

## 1. Page skeleton (copy this)

```html
<!DOCTYPE html>
<html lang="en" data-root="../">            <!-- "" for root pages, "../" for /topics/ -->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>1.2 The nuclear atom | Structure Lab</title>
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
  The section nav is built from these. To shorten a long heading in the nav, put `data-toc="Short label"`
  **on the `<section>` element** (not on the `<h2>`).
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

An equation (anything with spaces, such as `N2 + 3H2 <=> 2NH3`) may wrap between terms on a narrow
screen but never inside a term. Hand-written `.chem` HTML does not wrap, so let the formatter do equations.

Formula rules: digits after a letter or `)` become subscripts; a leading number is a
coefficient; `^2-`, `^3+` are charges; a bare trailing `+` or `-` is a single charge;
`^14C` gives a mass number; `.` before a hydrate becomes a centred dot; `->` and `<=>` become arrows.
Write oxide as `O^2-` (`O2-` would be read as superoxide). If a `.chem` or `.unit`
element already contains child elements, it is left alone, so you can hand-write the HTML.
Full nuclide notation: `S1.chem.nuclide(A, Z, symbol, charge)` returns HTML with A stacked above Z,
right-aligned against the symbol for any number of digits: `nuclide(14, 6, 'C')`, `nuclide(238, 92, 'U')`,
`nuclide(23, 11, 'Na', '+')`, `nuclide(37, null, 'Cl', '-')` (mass number only). It needs `site.css`.

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
Header cells are shown exactly as written (no automatic capitals), so units and formulas are safe in headers.

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
  Use `<b>` for the result of the final step. A long line wraps at spaces with a hanging indent, so
  write spaces around `=`, `+` and `×`; only an unbreakable token scrolls sideways. Use `.nowrap` to keep
  a value and its unit together.
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
| `data-syllabus` | Exact syllabus code(s) to draw from: `Structure 1.4.2`, or a comma list. Matches the question's `syllabus` field. |
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
| `w.canvas({height \| aspect, label, minWidth, maxHeight})` | Hi-DPI canvas filling the stage. `height` is a number of CSS px or a function of the width, e.g. `height: function (w) { return w < 480 ? 420 : 260; }`. Returns `{el, ctx, width, height, draw(fn), resize(), setHeight(h)}`. `draw(fn)` registers `fn(ctx, width, height)` (CSS pixels); it runs on resize, theme change and language change. `draw()` with no argument redraws. **While your init function is still running, drawing is deferred until it returns**, so a draw function may use variables declared further down; after init, `draw()` runs at once. |
| `w.svg('0 0 600 240', {label})` | Empty responsive `<svg>` in the stage. In SVG, use CSS variables directly (`fill="var(--accent)"`). |
| `w.slider({label, min, max, step, value, unit, onInput})` | Linked slider and number box. Returns `{el, value, set(v, silent), setValue(v, silent), setRange(min, max, step?, silent?)}`. `setRange` clamps the current value into the new range and calls `onInput` only if it changed. |
| `w.button(label, onClick, {primary})` | Button in the controls area. |
| `w.select({label, options, value, onChange})` | Labelled select. `options` is `['a','b']` or `[{value, label}]`. |
| `w.readoutItem(label, {text})` | Returns a setter for a named value in the readout strip (HTML allowed; `{text: true}` for a sentence). The readout is an `aria-live` region. |
| `w.color('--token')` | Resolved CSS token, for canvas. |
| `w.onTheme(fn)`, `w.onLang(fn)`, `w.redraw()`, `w.onDraw(fn)` | Theme and language hooks, manual redraw. Canvases redraw automatically on both; use `w.onLang(update)` if your readouts are built from several translated pieces. |
| `w.t(text, vars)` | Same as `S1.t`. |
| `w.listen(target, type, fn)`, `w.onCleanup(fn)` | Add a listener, or register a clean-up function, that is removed or run when the widget is torn down. Use these instead of `document.addEventListener` and for any timer or observer you create. |
| `w.keepOnLangChange()` | Opt out of the restart on language change (see below). |
| `w.loop(fn(dt, t))` | Animation loop. Returns `{start(userAsked), stop(), running}`. Pauses off screen and in hidden tabs. With reduced motion it only starts from `start(true)`, so call that from a Play button. |
| `w.reducedMotion` | `true` if the user prefers reduced motion. |

**Language change restarts the widget.** When the student switches language, the widget's frame is cleared
and your init function runs again from scratch, so every `t()` string is read in the new language. Loops,
resize observers and listeners made through `w` are stopped first. State (slider positions and so on) is
not kept. If your widget keeps state worth preserving and updates all its own text, call
`w.keepOnLangChange()` in init (or put `data-lang="keep"` on the element): then only labels made through
`w` and the canvases refresh, and `w.onLang(fn)` tells you to update the rest.

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
| `<div data-s1-topics="s1"></div>` | One strand's row of topic cells with progress (`s1`, `s2`, `s3`; empty = all three, each with a heading). |
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

- Long equations in stems, options and solutions belong in `<span class="chem">…</span>` with spaces between
  terms, so they can wrap on a phone.
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
S1.topics, S1.topic(id), S1.topicsIn(group)  topic registry (id, group, ready, level, num, sym, short, title, blurb, href)
S1.groups, S1.group(id)                      the three strands (id, num, name, title, idea)
S1.t(english, vars)                          translate a UI string, with {name} placeholders
S1.i18n.get() / set(lang) / onChange(fn)     language: 'en' | 'ja' | 'zh-Hant'  (docs/TRANSLATING.md)
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
S1.chem.elements       [{z, symbol, name, ar, group, period, block, category, massNumber?}] for Z = 1–118;  S1.chem.element('Na' | 11)
S1.periodic            optional (periodic-data.js): get(), series(), config()  — section 10
S1.mol                 optional (mol.js): lewis, structural, skeletal, viewer3d, vsepr  — section 8
S1.chart               optional (chart.js): plot, ir, massSpectrum, nmr  — section 9
S1.chem.molarMass('Ca(OH)2')                  → 74.1 (g mol-1, from Ar to 2 d.p.); NaN if unreadable or an element has no Ar
S1.chem.parseFormula('CuSO4.5H2O')            → {counts: {Cu: 1, S: 1, O: 9, H: 10}, order, M: 249.72, charge: 0} | null
S1.chem.formula(str), unit(str), nuclide(A, Z, symbol, charge)   → HTML strings
S1.chem.roundSig(x, n) → number;  toSig(x, n) → '0.250';  sci(x, n) → '6.02 × 10<sup>23</sup>'
S1.chem.fmt(x, n)      → plain or scientific HTML, chosen automatically;  fixed(x, dp)
S1.chem.parseNumber(str) → {value, sfMin, sfMax} | null
S1.chem.checkNumeric(input, {answer, tolerance, sigfigs}) → {status: 'correct'|'sigfig'|'wrong'|'invalid', clue}
```

Events on `document`: `s1:themechange` (`detail.theme`), `s1:levelchange` (`detail.level`),
`s1:langchange` (`detail.lang`), `s1:progress`, `s1:questions`.

`S1.t` returns the string as HTML, unescaped (translations may contain tags). Escape any student input or
other untrusted text yourself (`S1.util.escapeHtml`) before you put it in a `{placeholder}`.

`ar` is `null` for elements the data booklet gives no relative atomic mass for (those with no stable
isotopes, such as Tc and everything after Bi except Th, Pa and U). Check for `null` before you calculate.

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

---

## 7. Languages: what a page author must do

The site runs in English, Japanese and Traditional Chinese. **You only write English.** Translators add
overlay files later (`docs/TRANSLATING.md`). Three rules keep your page translatable:

1. **Widget strings go through `t()`.** At the top of each widget file:

   ```js
   var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
   ```

   Then `w.button(t('Reset'), …)`, `setNote(t('Water is liquid (at {p} kPa)', {p: 100}))`,
   `ctx.fillText(t('absolute zero'), x, y)`. Write the string as a **literal inside the call** so the
   extraction tool can find it; use `{name}` placeholders instead of joining pieces. Do not reuse `t` as a
   loop variable in the same scope (`for (var t = …)` hides the function).
   Labels you pass to `w.slider`, `w.button`, `w.select`, `w.readoutItem` and plain sentences passed to a
   readout setter switch language by themselves. Text you draw on a canvas switches because canvases
   redraw. For anything else, use `w.onLang(update)`.
2. **Write prose in ordinary blocks.** Headings, `p`, `li`, `dt`/`dd`, `th`/`td`, `caption`, `figcaption`,
   `summary`, `legend`, `button`, `option` are translated as whole blocks, keyed by their English HTML.
   So: do not put bare text next to block children (wrap it in `<p>`), and do not attach your own event
   listeners to elements inside such a block (the block's HTML is replaced when the language changes).
   Add `data-i18n` to a `div` or `span` that holds loose text which must be translated.
3. **Mark what must never be translated** with `data-i18n="off"` (it applies to everything inside).
   `.chem`, `.unit`, `.eq__formula`, `.worked__math`, `code`, `pre`, `kbd`, `samp` are skipped already.

Also translated: `title`, `aria-label`, `placeholder`, `alt`; the component attributes `data-title`,
`data-toc`, `data-def`, `data-label`, `data-kicker`, `data-correct`; question fields (by question id).
Exam tips (`.callout--exam`) and markscheme points are shown in English **and** the translation, because
the exam is in English. Use `<dfn>` for key terms: translators keep the English term beside it.
Changing an English sentence after it has been translated makes that translation stale, so finish the
English first.

---

## 8. Molecule drawings: `mol.js`

Load `assets/js/mol.js` after `core.js`. Every function takes an element (or a selector) and a spec, and
draws into it. Give every drawing a `label` (the text alternative). Colours follow the theme.
Live examples of everything below: `dev/mol-demo.html`.

### 8.1 Lewis formulas — `S1.mol.lewis(el, spec)`

Central-atom shorthand (up to four positions use left, right, bottom, top; bonds first, then lone pairs):

```js
S1.mol.lewis('#water',   { central: 'O', outer: ['H', 'H'], centralLone: 2, label: 'Lewis formula of water' });
S1.mol.lewis('#co2',     { central: 'C', outer: ['O', 'O'], orders: [2, 2], outerLone: [2, 2], label: '…' });
S1.mol.lewis('#ammonium',{ central: 'N', outer: ['H', 'H', 'H', 'H'], dative: [false, false, false, true],
                           bracket: true, charge: '+', label: '…' });
```

| Key | Meaning |
|---|---|
| `central`, `outer[]` | Element symbols. |
| `orders[]` | Bond order to each outer atom: 1, 2 or 3 (default 1). |
| `dative[]` | `true` draws that bond as a coordination-bond arrow pointing at the outer atom. |
| `centralLone`, `outerLone[]` | Number of lone pairs. |
| `centralCharge`, `outerCharges[]` | Formal charges (`'+'`, `'-'`, `-1`, `'2-'`), drawn in a small circle. |
| `bracket`, `charge` | Square brackets and the overall ion charge. |
| `scale` | Pixels per bond length (default 46). |

Explicit form, for anything else (y grows downwards; one unit is about one bond length):

```js
S1.mol.lewis('#nitrate', {
  atoms: [{ el: 'N', x: 0, y: 0 }, { el: 'O', x: 0, y: -1.25, lone: 2 },
          { el: 'O', x: -1.08, y: 0.63, lone: 3 }, { el: 'O', x: 1.08, y: 0.63, lone: 3 }],
  bonds: [{ a: 0, b: 1, order: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }],
  bracket: true, charge: '-', label: 'Lewis formula of the nitrate ion' });
```

Atom keys: `el`, `x`, `y`, `lone` (a number, placed automatically away from the bonds, or an array of
angles in degrees with 0 = right and 90 = up), `charge` (formal charge), `radical: true` (one unpaired
dot), `label` (text instead of `el`). Bond keys: `a`, `b` (atom indexes), `order`, `dative`.

### 8.2 Full structural formulas — `S1.mol.structural(el, spec)`

Shows every atom and every bond. Chain shorthand: hydrogens are added to fill each valence.

```js
S1.mol.structural('#ethanol', { chain: ['C', 'C', 'O'], label: 'Full structural formula of ethanol' });
S1.mol.structural('#propene', { chain: ['C', 'C', 'C'], bonds: [2, 1], label: '…' });
S1.mol.structural('#acid',    { chain: ['C', 'C', 'O'], subs: { 1: ['=O'] }, label: '…' });   // ethanoic acid
S1.mol.structural('#chloro',  { chain: ['C', 'C', 'C'], subs: { 1: ['Cl'] }, label: '…' });   // 2-chloropropane
```

`chain` lists the backbone atoms left to right; `bonds[i]` is the order between atom `i` and `i + 1`;
`subs` maps a **0-based** chain index to substituents: an element symbol, with `=` or `#` in front for a
double or triple bond (`'Cl'`, `'O'` → O–H, `'=O'`, `'N'` → NH2, `'C'` → CH3). For rings or unusual
layouts pass `{atoms, bonds}` exactly as for `lewis` (lone pairs are not drawn).

### 8.3 Skeletal formulas — `S1.mol.skeletal(el, spec)`

Zig-zag shorthand (carbons are numbered from 1, left to right):

```js
S1.mol.skeletal('#butane',   { chain: 4, numbers: true, label: 'Skeletal formula of butane' });
S1.mol.skeletal('#butene',   { chain: 4, double: [1], label: '…' });            // bond starting at C1
S1.mol.skeletal('#propanol', { chain: 3, subs: { 2: 'OH' }, label: '…' });      // propan-2-ol
S1.mol.skeletal('#acid',     { chain: ['', '', '', 'OH'], subs: { 3: '=O' }, label: '…' });   // propanoic acid
S1.mol.skeletal('#stereo',   { chain: 4, subs: { 2: [{ label: 'OH', stereo: 'wedge' }, { label: 'H', stereo: 'hash' }] }, label: '…' });
```

| Key | Meaning |
|---|---|
| `chain` | Number of carbons, or an array of vertex labels (`''` = carbon; `'OH'`, `'NH2'`, `'O'`, `'Cl'` = labelled atom in the chain). |
| `double[]`, `triple[]` | 1-based number of the carbon where the multiple bond starts. |
| `subs` | 1-based carbon number → a label, or an array of up to two. A label may start with `=` or `#`. Use an object for stereo: `{label, stereo: 'wedge' | 'hash'}`. |
| `numbers` | `true` numbers the chain atoms. |
| `scale` | Pixels per bond length (default 38). |

Hetero-atom labels show their hydrogens as you write them (`OH`, `NH2`); a label on the left end is
flipped (`H2N`). For rings and branches pass explicit `{atoms: [{x, y, label, number}], bonds: [{a, b, order, stereo}]}`.

### 8.4 3-D models — `S1.mol.viewer3d(el, spec)` and `S1.mol.vsepr(opts)`

```js
var view = S1.mol.viewer3d('#model', S1.mol.vsepr({ domains: 4, lonePairs: 1, central: 'N', outer: 'H' }));
view.setSpec(S1.mol.vsepr({ domains: 6, lonePairs: 2, central: 'Xe', outer: 'F' }));   // change molecule
```

`viewer3d` spec:

| Key | Meaning |
|---|---|
| `atoms` | `[{el, x, y, z, label}]`, any consistent length unit (a bond is about 1 to 1.5). |
| `bonds` | `[{a, b, order}]`. |
| `lonePairs` | `[{on: atomIndex, dir: [x, y, z]}]`, drawn as a dashed lobe with two dots. |
| `angle`, `angleText` | `[i, j, k]` labels the angle at atom `j`; the true 3-D value is shown unless `angleText` is given. |
| `height` | CSS px (default 280). The width follows the container. |
| `autoRotate` | Start turning (default `false`; never starts by itself with reduced motion). |
| `labels`, `controls` | Element symbols on the atoms; the "Turn slowly / Reset view" bar. Both default `true`. |
| `label` | Text alternative. Required. |

Returns `{el, canvas, setSpec(spec), reset(), rotate(dYaw, dPitch), spin(on), redraw()}`.
Drag or swipe to rotate; arrow keys when the canvas has focus; Home resets. Atoms are drawn back to front
with simple shading, an outline and the element symbol, so colour is never the only cue.

`vsepr({domains: 2…6, lonePairs: n, central, outer: 'F' | ['F','Cl',…], orders, bondLength})` returns a
ready spec plus `name`, `domainGeometry`, `idealAngles` (numbers) and `angleNote` (words), or `null` for a
combination that is not one of these:

| Domains | Lone pairs 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| 2 | linear (180°) | | | |
| 3 | trigonal planar (120°) | bent (< 120°) | | |
| 4 | tetrahedral (109.5°) | trigonal pyramidal (< 109.5°) | bent (< 109.5°) | |
| 5 | trigonal bipyramidal (90°, 120°, 180°) | seesaw | T-shaped (< 90°) | linear (180°) |
| 6 | octahedral (90°, 180°) | square pyramidal (< 90°) | square planar (90°, 180°) | |

The same table is `S1.mol.SHAPES['4-1']` → `{name, domainGeometry, angles, note}`.
Coordinates use the **ideal** electron domain geometry; the angle label says "< 109.5°" where lone pairs
make the real angle smaller. Five and six domains are Additional HL: put those models in AHL blocks.
The shape names and `angleNote` are plain English strings: pass them through `t()` when you show them.

---

## 9. Charts: `chart.js`

Load `assets/js/chart.js` after `core.js`. Charts are canvas, hi-DPI, and redraw on resize, theme change
and language change. Axis labels, series names and annotations are passed through `S1.t`.

```js
var ie = S1.periodic.series('ie1', 3, 18);
S1.chart.plot('#trend', {
  label: 'First ionization energy of the elements lithium to argon',     // text alternative (required)
  height: 260,
  categories: ie.map(function (e) { return e.symbol; }),                  // named x positions 0, 1, 2 …
  x: { label: 'Element' },
  y: { label: 'First ionization energy / kJ mol⁻¹', min: 0, max: 2500, step: 500 },
  series: [{ type: 'line', points: true, data: ie.map(function (e, i) { return [i, e.value]; }) }]
});
```

| Spec key | Meaning |
|---|---|
| `x`, `y` | `{label, min, max, step` or `ticks: [], reverse, format(v)}`. `reverse: true` runs the axis backwards. |
| `categories` | Names for x = 0, 1, 2 … (bars, element trends). |
| `series[]` | `{type: 'line' | 'scatter' | 'bar' | 'stick', data, color: '--accent', name, width, points, labels}`. `data` items are `[x, y]`, `[x, y, 'label']` or `{x, y, label}`. `name` adds a legend entry; `labels: true` prints each y value. |
| `annotations[]` | `{x, y, text, dx, dy}`. |

Returns `{el, canvas, update(spec), redraw()}`. Use at most three series and label them directly.
Default colours are `--accent`, `--ink-2`, `--line-strong`; never use the role colours (violet, amber, green, red).

Spectra:

```js
S1.chart.ir('#ir', { label: 'Infrared spectrum of …', peaks: [
  { at: 3300, depth: 55, width: 160, label: 'O–H' }, { at: 1715, depth: 85, width: 18, label: 'C=O' }] });
S1.chart.massSpectrum('#ms', { label: 'Mass spectrum of magnesium', peaks: [[24, 79], [25, 10], [26, 11]],
  xMin: 20, xMax: 30, labelAll: true });
S1.chart.nmr('#nmr', { label: 'Proton NMR spectrum of ethanol', max: 5, signals: [
  { shift: 1.2, h: 3, split: 3, label: 'CH₃' }, { shift: 3.7, h: 2, split: 4, label: 'CH₂' }, { shift: 2.6, h: 1, split: 1, label: 'OH' }] });
```

- `ir`: the wavenumber axis runs 4000 → 400 cm⁻¹. `depth` = percentage absorbed at the peak, `width` = half-width in cm⁻¹.
  These are **sketches** built from the peaks you list, not measured spectra. Say so in the caption.
- `massSpectrum`: `peaks` are `[m/z, relative abundance, optional label]`; `yLabel`, `yMax`, `xMin`, `xMax` optional.
- `nmr`: `split` is the number of lines (1 singlet … 4 quartet); line heights follow Pascal's triangle and the
  signal size follows `h`. The shift axis runs from `max` down to 0 ppm.

---

## 10. Element data

`S1.chem.elements` (always loaded) covers Z = 1–118: `{z, symbol, name, ar, group, period, block, category}`.
`ar` is to 2 d.p. and is `null` for elements with no stable isotopes (`massNumber` then gives the bracketed
value where it is well established). `group` is `null` for the f-block rows; La and Ac are in group 3.
`category` is `'metal' | 'metalloid' | 'non-metal' | 'unknown'`.

`assets/js/periodic-data.js` (optional, load after `chem.js`) adds `S1.periodic`:

```js
S1.periodic.get('Fe')            // {…element, en: 1.8, ie1: 762, radius: 124, ions: [{charge: 2, radius: 61}, …], mp: 1811, config: '[Ar] 3d6 4s2'}
S1.periodic.series('ie1', 3, 10) // [{z, symbol, value}] for a plot; elements without a value are left out
S1.periodic.series('ionRadius', 11, 17)
S1.periodic.config(24)                        // '[Ar] 3d5 4s1'
S1.periodic.config(24, { order: 'filling' })  // '[Ar] 4s1 3d5'
S1.periodic.config(26, { condensed: false, html: true })
```

| Property | Unit | Coverage |
|---|---|---|
| `en` | Pauling scale | Z = 1–56 (noble gases He, Ne, Ar, Kr are `null`) |
| `ie1` | kJ mol⁻¹ | Z = 1–56, plus Hf, Au, Hg, Tl, Pb, Bi, Rn |
| `radius` | pm (atomic / covalent) | Z = 1–56 |
| `ions` | pm, with charge | common ions, Z = 3–56 where well established |
| `mp` | K | Z = 1–56 and 72–83, except He, C, As |
| `config` | | every element (Aufbau order plus the listed exceptions) |

**A missing value is `null`, never a guess: always handle `null`.** Sources and caveats are in the header
of `periodic-data.js`. Every value shown to students must be checked against the current data booklet.
