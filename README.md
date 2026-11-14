# Structure Lab

An interactive study guide to the **Structure** theme of **IB Chemistry** (SL and Additional HL, syllabus
for first assessment 2025):

- **Structure 1.** Models of the particulate nature of matter (1.1 to 1.5)
- **Structure 2.** Models of bonding and structure (2.1 to 2.4)
- **Structure 3.** Classification of matter (3.1 and 3.2)

There are 13 topic pages (1.1 to 1.5, 2.1 to 2.4 and 3.1 to 3.2, with separate Additional HL pages for
2.2 and 3.2), a home page and a mixed practice page.

It is written for students who find the ideas or the calculations hard. Every topic has short
explanations, worked examples you reveal one step at a time, “try it” calculations with hints, and
original practice questions with feedback. It also says clearly what you do **not** need to know for the
exam. The site can be read in English, Japanese, Traditional Chinese (Hong Kong school terms) or Korean. You
choose the language in the header: the site starts in English and never switches by itself, and the exam
wording always stays visible in English.

This is an **unofficial** study aid. It is not produced, checked or endorsed by the International
Baccalaureate Organization (see the [disclaimer](#disclaimer)).

## How to run it

There is nothing to install or build.

- **On your computer:** download or clone the repository and open `index.html` in a browser. It works
  straight from `file://`. If you prefer a local server, run `python3 -m http.server 8000` in the
  repository folder and open `http://localhost:8000/`.
- **On GitHub Pages:** in the repository settings, open **Pages** and set **Source** to
  **GitHub Actions**. The workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) then
  publishes the site on every push to `main` (or when you run it by hand from the Actions tab). It
  uploads only the files the site needs: `index.html`, `practice.html`, `LICENSE`, `topics/`, `assets/`,
  `data/` and `i18n/`. All links are relative, so the site works under any subpath
  (`https://<user>.github.io/<repository>/`).
- The empty `.nojekyll` file is only needed if you set the Pages source to "Deploy from a branch"
  instead: it tells Pages to serve the files as they are. The workflow adds one to the published folder too.

The site is plain HTML, CSS and JavaScript. Its only external requests are to Google Fonts,
and it falls back to system fonts if that is unavailable. There is no tracking, no
account and no server. Progress is saved in your own browser (`localStorage`) and never leaves it.

## Structure

```
index.html                  home: the three strands and their topics, how to study, exam facts, progress
practice.html               mixed practice across all topics, with filters and mistake review
topics/<id>.html            one page per topic: s1-1 … s1-5, s2-1, s2-2, s2-2h, s2-3, s2-4, s3-1, s3-2, s3-2h
assets/css/site.css         the design system (tokens, light and dark themes, all components)
assets/js/chem.js           formulas, numbers, sig figs, answer checking, constants, element table (Z = 1–118)
assets/js/core.js           header and footer, theme, SL/HL switch, languages, progress, components, widget frame
assets/js/quiz.js           question engine and practice arena
assets/js/mol.js            Lewis, structural and skeletal formulas, 3-D ball-and-stick viewer, VSEPR shapes
assets/js/chart.js          line, scatter, bar and stick charts; IR, mass and NMR spectra
assets/js/periodic-data.js  data booklet values: electronegativity, ionization energy, electron affinity, radii, melting and boiling points; configurations
assets/js/widgets-<id>.js   interactive diagrams for each topic
data/questions-<id>.js      question bank for each topic
i18n/<lang>/*.js            translation overlays (ja, zh-Hant, ko)
tools/i18n-*.js             extraction and checking tools for translators (Node + Playwright, dev only)
dev/                        test pages for the components and drawing helpers (not linked from the site, not published)
docs/AUTHORING.md           how to write pages, components, questions and widgets
docs/TRANSLATING.md         how translation works, the workflow and the rules
docs/glossary-<lang>.md     the term lists the translations follow (ja, zh-Hant, ko)
docs/research/              the authors' scope and exam-style notes (paraphrase only; not published)
.github/workflows/pages.yml the GitHub Pages deployment
```

## Contributing

Corrections are very welcome, especially to the chemistry.

1. Read [`docs/AUTHORING.md`](docs/AUTHORING.md). It defines the page skeleton, every
   component's markup, the question schema and the style rules. For translations, read
   [`docs/TRANSLATING.md`](docs/TRANSLATING.md).
2. Keep it static: no build tools, no frameworks, no external scripts.
3. Check your change from `file://`, in light and dark themes, at phone width, with the
   browser console open.
4. Questions must be your own work. Do not submit past-paper questions or close paraphrases.

If you find a mistake but cannot fix it, open an issue and say which page and section.

### Contributing a translation

Translations are overlay files: nobody edits the English pages, and a missing translation simply shows
the English. To improve Japanese, Traditional Chinese or Korean, edit the value (never the key) in
`i18n/<lang>/<page>.js` or `i18n/<lang>/<page>.q.js`, following the glossary in `docs/`, then run

```
node tools/i18n-check.js ja            # or zh-Hant, ko; add a page id such as s1-4 to check one page
```

until it ends with "All translated, nothing stale, all lints pass", and look at the page at desktop and
phone width. The full workflow, including how to start a new language or top up after the English
changes, is in [`docs/TRANSLATING.md`](docs/TRANSLATING.md). The tools need Node.js and Playwright;
the site itself needs neither.

## Disclaimer

This is an unofficial project. It is not affiliated with, or endorsed by, the International
Baccalaureate Organization. “International Baccalaureate” and “IB” are trademarks of that organization.
All explanations and questions here are original; no IB documents, past-paper questions or markschemes
are included. This is a study aid, not an official source: always check against the current subject
guide, the data booklet and your teacher.

Numerical data (relative atomic masses, constants, ionization energies and so on) follow the IB
Chemistry data booklet (first assessment 2025). The booklet itself is not part of this repository. A
copy can be found, as an external reference only, at
<https://www.ibchem.com/root_pdf/DataBook2025.pdf>.

## Licence

[MIT](LICENSE).
