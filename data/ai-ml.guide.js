// Study guide explanations for the AI/ML assessment.
// strategies: per-dimension how-to-approach text (HTML ok).
// questions: keyed by question id — steps[] (HTML ok) + optional trap string.
// The question prompt/options/answer come from data/ai-ml.js (no duplication).
window.GUIDE = {
  strategies: {
  "quant": "Turn the words into numbers and one clear operation. Always ask: what is the <b>whole</b>, what is the <b>part</b>, and <b>what is being compared to what</b>? For 'percentage change', the base is the <i>starting</i> value, not 100.",
  "logic": "Find the <b>rule</b> that links the items, then apply it. For number series, look at the gaps between terms (and the gaps between the gaps). For word logic, watch the <b>direction</b> of a statement — 'all A are B' does not mean 'all B are A'.",
  "stats": "Numbers tell a story. Watch for a single <b>extreme value</b> dragging an average away from what's 'typical'. For probability, remember independent events have <b>no memory</b>, and that a very rare thing stays rare even after a 'positive' result.",
  "code": "Don't read these like a sentence — <b>run them like a recipe</b>. Keep a tiny table of each value and update it line by line as you 'do' each step in order. No coding knowledge needed; just careful, ordered thinking.",
  "data": "Read the <b>labels and the axis first</b> so you know what the chart is about. Then answer <b>only what the chart can actually prove</b> — reject options that sound reasonable but the chart doesn't show. Watch the difference between 'highest' and 'grew the most'."
},
  questions: {
  "q1": {
    "steps": [
      "Find the actual increase: 75 − 60 = <b>15</b>.",
      "Percentage increase compares that increase to the <b>starting</b> value: 15 ÷ 60.",
      "15 ÷ 60 = 0.25, and 0.25 × 100 = <b>25%</b>."
    ],
    "trap": "Don't just say 15%. The 15 is the size of the jump, but 'percentage increase' asks 'how big is the jump compared to where we started (60)?'"
  },
  "q2": {
    "steps": [
      "More taps means <b>less</b> time — they share the work. This is inverse proportion.",
      "You doubled the taps (3 → 6), so the time is <b>halved</b>.",
      "4 ÷ 2 = <b>2 minutes</b>."
    ],
    "trap": "It's tempting to think 'more taps, more time'. Ask which way the relationship actually goes: more workers finish a fixed job faster."
  },
  "q3": {
    "steps": [
      "The question asks for those who do <b>NOT</b> play. If 35% play, then 100% − 35% = <b>65%</b> don't.",
      "65% of 800 = 0.65 × 800 = <b>520</b>.",
      "(Check: 35% of 800 = 280 play; 800 − 280 = 520. Same answer.)"
    ],
    "trap": "Re-read the question. 280 is the number who DO play — an easy wrong pick if you miss the word 'NOT'."
  },
  "q4": {
    "steps": [
      "Undo the operations in reverse order. First remove the +5: subtract 5 from both sides → 2x = 12.",
      "Now undo the ×2: divide both sides by 2 → x = 6."
    ],
    "trap": "Do the +5 before the ×2 when undoing — reverse of normal order. Don't divide 17 by 2 first."
  },
  "q5": {
    "steps": [
      "A ratio of 4 : 1 means the money is split into 4 + 1 = <b>5 equal parts</b>.",
      "Each part = ₹2,000 ÷ 5 = <b>₹400</b>.",
      "The smaller share is 1 part = <b>₹400</b> (the bigger share is 4 parts = ₹1,600)."
    ],
    "trap": "Don't divide by 4. The total number of parts is 4 + 1 = 5, not 4."
  },
  "q6": {
    "steps": [
      "Doubling means ×2 each hour. Just step through it:",
      "Start 3 → after 1h: 6 → 2h: 12 → 3h: 24 → 4h: <b>48</b>.",
      "(Shortcut: 3 × 2 × 2 × 2 × 2 = 3 × 16 = 48.)"
    ],
    "trap": "Doubling 4 times is ×2×2×2×2 (×16), not ×4×2 or '3 × 4'. Growth like this multiplies, it doesn't add."
  },
  "q7": {
    "steps": [
      "Look at the gaps between terms: 6−2=4, 12−6=6, 20−12=8, 30−20=10.",
      "The gaps grow by 2 each time: 4, 6, 8, 10 → next gap is <b>12</b>.",
      "So the next term is 30 + 12 = <b>42</b>.",
      "(Another view: the terms are 1×2, 2×3, 3×4, 4×5, 5×6, so next is 6×7 = 42.)"
    ]
  },
  "q8": {
    "steps": [
      "'All doctors studied biology' tells you doctors are <i>inside</i> the group of biology-students.",
      "But lots of non-doctors also study biology (nurses, teachers, students…).",
      "Knowing Maya studied biology doesn't tell you which kind she is. So we <b>cannot conclude</b>."
    ],
    "trap": "'All A are B' does NOT flip to 'all B are A'. This reversal is the most common logic error."
  },
  "q9": {
    "steps": [
      "These aren't random letters — they're the first letters of the <b>months</b>:",
      "January, February, March, April, May…",
      "The next month is <b>June</b> → J."
    ],
    "trap": "Don't look for an alphabet gap pattern. Step back and ask 'what real-world list starts J, F, M, A, M?'"
  },
  "q10": {
    "steps": [
      "The rule: replace each letter with its position in the alphabet (A=1, B=2, … Z=26).",
      "A = 1, D = 4, D = 4.",
      "So ADD → <b>1-4-4</b>."
    ]
  },
  "q11": {
    "steps": [
      "Find a property most of them share. Square, Circle and Triangle are all <b>flat (2D)</b> shapes.",
      "A Cube is a <b>solid (3D)</b> object.",
      "The odd one out is <b>Cube</b>."
    ],
    "trap": "There can be tempting wrong groupings (e.g. 'circle has no corners'). Pick the property that cleanly splits 3 from 1."
  },
  "q12": {
    "steps": [
      "Test 'each term = sum of the two before it': 1+1=2 ✓, 1+2=3 ✓, 2+3=5 ✓, 3+5=8 ✓.",
      "So the next term is 5 + 8 = <b>13</b>.",
      "(This famous pattern is the Fibonacci sequence.)"
    ]
  },
  "q13": {
    "steps": [
      "'Spread' = how far apart the numbers are from each other.",
      "Set A is all 10s — zero spread, perfectly consistent.",
      "Set B ranges from 2 to 18 — clearly varied. So <b>Set B</b> is more spread out."
    ],
    "trap": "Both sets have the same average (10). Spread is about variation, not the average — same centre can hide very different spreads."
  },
  "q14": {
    "steps": [
      "The 400 is an <b>outlier</b> — far above the rest.",
      "The average = (30+32+31+33+400)/5 = 105k. But nobody earns near 105k — it's pulled up by the one big value.",
      "Sort them: 30, 31, 32, 33, 400 → the <b>middle value is 32</b>, which truly reflects most people. So the middle value (the median) is the better 'typical'."
    ],
    "trap": "Averages are misleading when one value is extreme. The middle value resists outliers."
  },
  "q15": {
    "steps": [
      "List the outcomes: 1, 2, 3, 4, 5, 6 — six equally likely results.",
      "The even ones are 2, 4, 6 → that's 3 of the 6.",
      "3 out of 6 = <b>1 in 2</b> (a half)."
    ]
  },
  "q16": {
    "steps": [
      "Don't reason with the 99% alone — picture <b>10,000 real people</b>.",
      "About 1 person actually has the illness.",
      "The test is wrong 1% of the time, so of the 9,999 healthy people it falsely flags ~100 as positive.",
      "So positives ≈ 1 true + 100 false. A given positive is far more likely a <b>false alarm</b> → confidence is low."
    ],
    "trap": "This is the famous base-rate trap: when something is very rare, even an accurate test produces mostly false positives. The disease's rarity matters as much as the test's accuracy."
  },
  "q17": {
    "steps": [
      "Average × count = total. So the five numbers add up to 20 × 5 = <b>100</b>.",
      "The four known numbers sum to 18 + 22 + 19 + 21 = <b>80</b>.",
      "The fifth = 100 − 80 = <b>20</b>."
    ],
    "trap": "Work backwards from the total. The average gives you the sum (100) — that's the key unlock."
  },
  "q18": {
    "steps": [
      "A fair coin has <b>no memory</b> — it doesn't know what came before.",
      "Each toss is independent, so the chance is always <b>one half</b>, no matter the streak."
    ],
    "trap": "Feeling that tails is 'due' (or that heads is 'hot') is the gambler's fallacy. Past independent results never change the next probability."
  },
  "q19": {
    "steps": [
      "Track x as you go: start x = 0.",
      "Add 1 → x = 1. Add 2 → x = 3. Add 3 → x = 6. Add 4 → x = <b>10</b>.",
      "(It's just 1 + 2 + 3 + 4 = 10.)"
    ],
    "trap": "'Add to x' means keep a running total, not replace x. Update the same value each step."
  },
  "q20": {
    "steps": [
      "First check: is 5 greater than 3? <b>Yes</b> — so we go inside the first block (we ignore the bottom 'otherwise → C').",
      "Inside, next check: is 5 greater than 10? <b>No</b> — so we take that block's 'otherwise'.",
      "That shows <b>'B'</b>."
    ],
    "trap": "Follow the indentation like nested boxes. Because the first check passed, 'C' is never reached."
  },
  "q21": {
    "steps": [
      "Make a table and loop. Start: result = 1, n = 4.",
      "n=4 (>1): result = 1×4 = 4, then n = 3.",
      "n=3 (>1): result = 4×3 = 12, then n = 2.",
      "n=2 (>1): result = 12×2 = 24, then n = 1.",
      "n=1 is not more than 1 → stop. result = <b>24</b> (that's 4 × 3 × 2)."
    ],
    "trap": "Check the stop condition each lap, and remember the loop stops at n=1 (it doesn't multiply by 1)."
  },
  "q22": {
    "steps": [
      "Scan the list one item at a time, ticking each time you see a 1.",
      "3 (no), 1 (tick → 1), 4 (no), 1 (tick → 2), 5 (no).",
      "Count = <b>2</b>."
    ],
    "trap": "Count occurrences of the value 1 — not the length of the list (5) and not the position."
  },
  "q23": {
    "steps": [
      "Start: a = 2, b = 7. Put a's value somewhere safe: temp = 2.",
      "Set a to b's value: a = 7. (b is still 7.)",
      "Set b to the saved temp: b = 2.",
      "End: <b>a = 7, b = 2</b> — the values have swapped."
    ],
    "trap": "The 'temp' box exists so you don't lose a's original value when you overwrite a. Without it, both would end up 7."
  },
  "q24": {
    "steps": [
      "Go 1 to 6, but only add the even ones (skip odd).",
      "Evens are 2, 4, 6.",
      "2 + 4 + 6 = <b>12</b>."
    ],
    "trap": "The 'if even' line filters the list. Adding all of 1–6 (=21) ignores that condition."
  },
  "q25": {
    "steps": [
      "The question asks about <b>growth</b> — the jump from one month to the next, not the tallest bar.",
      "Work out each change: Jan→Feb +4, Feb→Mar −1, Mar→Apr +15, Apr→May +2.",
      "The biggest jump is +15, in <b>April</b>."
    ],
    "trap": "May has the tallest bar, but it only grew +2 over April. 'Grew the most' = biggest change, not biggest value."
  },
  "q26": {
    "steps": [
      "Look at the <b>shape</b> of the line, not single points.",
      "It drops a lot early (90 → 70 → 55), then the drops get tiny (48, 45, 44) — it flattens.",
      "That's '<b>falls quickly, then levels off</b>'."
    ],
    "trap": "'Constant rate' would be a straight slanted line. Here the early drops are big and later ones small — that's not constant."
  },
  "q27": {
    "steps": [
      "Check each claim against the chart.",
      "'Most scored 100'? Only 1 did — false. 'Everyone passed (≥50)'? The 4 who scored 40 failed — false.",
      "'Average is exactly 70'? Average = (4×40 + 10×70 + 1×100) ÷ 15 = 960 ÷ 15 = 64 — false.",
      "'Most common score is 70'? 10 students got it, more than any other — <b>true</b>."
    ],
    "trap": "Test every option against the data. The 'most common' value (the mode) is simply the tallest bar = 70."
  },
  "q28": {
    "steps": [
      "Shop A = 120, Shop B = 80. The extra A sold = 120 − 80 = 40.",
      "Compare that extra to B: 40 is half of 80, i.e. <b>50% more</b>.",
      "(Twice as much would be 160, not 120.)"
    ],
    "trap": "'50% more' and 'twice as much' are different. Twice = 200%. A is 1.5× B, so it's 50% more."
  },
  "q29": {
    "steps": [
      "Scan the bar heights: 82, 55, 88, 90, 60 — they jump around a lot.",
      "So performance is inconsistent → '<b>varies a lot from game to game</b>'.",
      "The other options claim things the chart doesn't show (how often games were played) or are clearly false (90% isn't 'hopeless')."
    ],
    "trap": "Only pick what the chart can prove. It shows scores, not how many times each game was played — so that option is unsupported."
  },
  "q30": {
    "steps": [
      "Trace the line left to right: 10 → 25 → 60 → 80 (highest), then 55 → 30.",
      "It goes up to a peak in the middle, then comes back down.",
      "So: '<b>rose, peaked in the middle, then fell</b>'."
    ],
    "trap": "Don't latch onto only the first half ('kept rising') or only the second ('only fell'). Describe the whole shape."
  }
}
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
