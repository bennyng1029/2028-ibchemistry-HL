# Structure 1 Lab

An interactive study guide to **IB Chemistry, Structure 1: Models of the particulate
nature of matter** (subtopics 1.1 to 1.5, SL and Additional HL, syllabus for first
assessment 2025).

It is written for students who find the ideas or the calculations hard. Every topic has
short explanations, worked examples you reveal one step at a time, “try it” calculations
with hints, and original practice questions with feedback. It also says clearly what you
do **not** need to know for the exam.

| Topic | Page |
|---|---|
| 1.1 Introduction to the particulate nature of matter | `topics/s1-1.html` |
| 1.2 The nuclear atom | `topics/s1-2.html` |
| 1.3 Electron configurations | `topics/s1-3.html` |
| 1.4 Counting particles by mass: the mole | `topics/s1-4.html` |
| 1.5 Ideal gases | `topics/s1-5.html` |

## How to run it

There is nothing to install or build.

- **On your computer:** download or clone the repository and open `index.html` in a browser.
- **On GitHub Pages:** in the repository settings, set Pages to deploy from the main
  branch, root folder. All links are relative, so it works under any subpath.

The site is plain HTML, CSS and JavaScript. Its only external request is to Google Fonts,
and it falls back to system fonts if that is unavailable. There is no tracking, no
account and no server. Progress is saved in your own browser (`localStorage`) and never leaves it.

## Structure

```
index.html                 home: the five topics, how to study, progress
practice.html              mixed practice across all topics, with filters and mistake review
topics/s1-N.html           one page per subtopic (s1-1.html is the reference template)
assets/css/site.css        the design system (tokens, light and dark themes, all components)
assets/js/chem.js          formula and number formatting, sig figs, answer checking, constants, Ar data
assets/js/core.js          header and footer, theme, SL/HL switch, progress, component auto-init, widget frame
assets/js/quiz.js          question engine and practice arena
assets/js/widgets-s1-N.js  interactive diagrams for each topic
data/questions-s1-N.js     question bank for each topic
docs/AUTHORING.md          how to write pages, components, questions and widgets
```

## Contributing

Corrections are very welcome, especially to the chemistry.

1. Read [`docs/AUTHORING.md`](docs/AUTHORING.md). It defines the page skeleton, every
   component's markup, the question schema and the style rules.
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
