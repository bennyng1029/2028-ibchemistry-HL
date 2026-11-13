# Structure Lab

An interactive study guide to the **Structure** theme of **IB Chemistry** (SL and Additional HL, syllabus
for first assessment 2025):

- **Structure 1.** Models of the particulate nature of matter (1.1 to 1.5)
- **Structure 2.** Models of bonding and structure (2.1 to 2.4)
- **Structure 3.** Classification of matter (3.1 and 3.2)

It is written for students who find the ideas or the calculations hard. Every topic has short
explanations, worked examples you reveal one step at a time, “try it” calculations with hints, and
original practice questions with feedback. It also says clearly what you do **not** need to know for the
exam. The site can be read in English, Japanese or Traditional Chinese; the exam wording always stays
visible in English.

## How to run it

There is nothing to install or build.

- **On your computer:** download or clone the repository and open `index.html` in a browser.
- **On GitHub Pages:** in the repository settings, set Pages to deploy from the main
  branch, root folder. All links are relative, so it works under any subpath. The empty
  `.nojekyll` file tells Pages to serve the files as they are.

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
i18n/<lang>/*.js            translation overlays (ja, zh-Hant)
tools/i18n-*.js             extraction and checking tools for translators (Node + Playwright, dev only)
dev/                        test pages for the components and drawing helpers (not linked from the site)
docs/AUTHORING.md           how to write pages, components, questions and widgets
docs/TRANSLATING.md         how translation works, the workflow and the glossary
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

## Disclaimer

This project is not affiliated with, or endorsed by, the International Baccalaureate
Organization. “International Baccalaureate” and “IB” are trademarks of that organization.
All explanations and questions here are original. This is a study aid, not an official
source: always check against the current subject guide, the data booklet and your teacher.

## Licence

[MIT](LICENSE).
