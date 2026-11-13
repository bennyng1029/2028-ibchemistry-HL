/* practice — ja translation overlay for Structure Lab.
   Keys are the English source text. Fill in the values; leave "" for "not translated yet" (English is shown).
   Do not edit keys. See docs/TRANSLATING.md. */
S1.i18n.register('ja', 'practice', {
  "strings": {
    "Practice | Structure Lab": "練習 | Structure Lab",
    "Structure 1, 2 and 3 · all topics": "Structure 1・2・3 · 全トピック",
    "Choose what to practise, then answer one question at a time. You get feedback straight away, and anything you miss is saved so you can come back to it.": "練習する内容を選び、1 問ずつ答えましょう。答えるとすぐにフィードバックが表示されます。間違えた問題は保存されるので、あとでもう一度取り組めます。",
    "What the difficulty levels mean": "難易度の意味",
    "What it checks": "確かめること",
    "When to use it": "使うタイミング",
    "One idea or one calculation step at a time.": "1 問につき、考え方 1 つ、または計算 1 ステップを確かめます。",
    "Straight after reading a section.": "セクションを読んだすぐあと。",
    "Questions shaped like the ones in the papers, with marks.": "実際の試験に近い形式の、配点つきの問題。",
    "When foundation questions feel comfortable.": "基礎の問題に慣れてきたとき。",
    "Several ideas joined together, or an unfamiliar context.": "いくつかの考え方を組み合わせた問題や、初めて見る場面の問題。",
    "When you want to push for the top grades.": "最高の成績（7）をねらいたいとき。"
  }
});

/* Added for the scoped lookups: page text no longer falls back to the ui overlay, and new shell strings. */
S1.i18n.register('ja', 'practice', {
  strings: {
    "Practice": "練習",
    "Level": "レベル",
    "Foundation": "基礎",
    "Exam style": "試験形式",
    "Challenge": "チャレンジ"
  }
});
