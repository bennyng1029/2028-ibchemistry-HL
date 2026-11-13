/* practice — zh-Hant translation overlay for Structure Lab.
   Keys are the English source text. Fill in the values; leave "" for "not translated yet" (English is shown).
   Do not edit keys. See docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 'practice', {
  "strings": {
    "Practice | Structure Lab": "練習 | Structure Lab",
    "Structure 1, 2 and 3 · all topics": "Structure 1、2 和 3 · 所有課題",
    "Choose what to practise, then answer one question at a time. You get feedback straight away, and anything you miss is saved so you can come back to it.": "先選擇想練習的內容，然後逐題作答。你會即時得到回饋，答錯的題目會儲存下來，方便之後再做。",
    "What the difficulty levels mean": "各難度的意思",
    "What it checks": "測試甚麼",
    "When to use it": "甚麼時候用",
    "One idea or one calculation step at a time.": "每次只考一個概念或一個計算步驟。",
    "Straight after reading a section.": "剛讀完一個小節之後。",
    "Questions shaped like the ones in the papers, with marks.": "形式與試卷題目相似，並附有分數。",
    "When foundation questions feel comfortable.": "做基礎題已經得心應手的時候。",
    "Several ideas joined together, or an unfamiliar context.": "結合多個概念，或者情境陌生的題目。",
    "When you want to push for the top grades.": "想爭取最高等級的時候。"
  }
});

/* Added for the scoped lookups: page text no longer falls back to the ui overlay, and new shell strings. */
S1.i18n.register('zh-Hant', 'practice', {
  strings: {
    "Practice": "練習",
    "Level": "程度",
    "Foundation": "基礎",
    "Exam style": "考試題型",
    "Challenge": "挑戰"
  }
});
