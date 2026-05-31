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
  },
  "q31": {
    "steps": [
      "20% means 20 per 100, or one-fifth. So 20% of 150 = 150 ÷ 5 = <b>30</b>.",
      "(Or: 0.20 × 150 = 30. Both routes give the same answer.)"
    ]
  },
  "q32": {
    "steps": [
      "A 10% reduction means you pay 90% of the original price.",
      "90% of ₹800 = 0.90 × 800 = <b>₹720</b>.",
      "(Or: find 10% = ₹80, then subtract: 800 − 80 = ₹720.)"
    ]
  },
  "q33": {
    "steps": [
      "Speed = Distance ÷ Time.",
      "240 km ÷ 3 hours = <b>80 km/h</b>."
    ]
  },
  "q34": {
    "steps": [
      "Find the cost of one pen: ₹60 ÷ 5 = <b>₹12 per pen</b>.",
      "Now multiply: 8 pens × ₹12 = <b>₹96</b>."
    ]
  },
  "q35": {
    "steps": [
      "Start at ₹100. Rise by 20%: 100 × 1.20 = <b>₹120</b>.",
      "Now fall by 20% from the new price: 120 × 0.80 = <b>₹96</b>.",
      "Change from ₹100 → ₹96 is a loss of ₹4, which is a <b>4% decrease</b>."
    ],
    "trap": "The two 20%s cancel to zero only if they apply to the same base. The fall is 20% of 120, not of 100 — so you end up slightly below the start."
  },
  "q36": {
    "steps": [
      "200 g serves 4 people, so 1 person needs 200 ÷ 4 = <b>50 g</b>.",
      "For 10 people: 50 × 10 = <b>500 g</b>."
    ]
  },
  "q37": {
    "steps": [
      "The first five even numbers are 2, 4, 6, 8, 10.",
      "Add them: 2 + 4 = 6, 6 + 6 = 12, 12 + 8 = 20, 20 + 10 = <b>30</b>."
    ]
  },
  "q38": {
    "steps": [
      "Three-quarters of an unknown number equals 60: (3/4) × n = 60.",
      "To undo ×(3/4), multiply both sides by 4/3: n = 60 × (4/3) = <b>80</b>.",
      "(Check: 3/4 of 80 = 60. ✓)"
    ],
    "trap": "Don't multiply 60 by 3. That gives 180, which is 3 × the answer. You need to do the inverse of 'take three-quarters', which is 'multiply by four-thirds'."
  },
  "q39": {
    "steps": [
      "The train covers its own length (100 m) in 5 seconds as it passes the pole.",
      "Speed = Distance ÷ Time = 100 m ÷ 5 s = <b>20 m/s</b>."
    ]
  },
  "q40": {
    "steps": [
      "Think in 'fraction of tank per minute'. Pipe 1 fills 1/6 per minute; Pipe 2 fills 1/12 per minute.",
      "Together: 1/6 + 1/12 = 2/12 + 1/12 = <b>3/12 = 1/4</b> of the tank per minute.",
      "So they fill the whole tank in 4 minutes."
    ],
    "trap": "Don't average the two times (6 and 12 = average 9). When two workers share a job, add their rates (fractions per minute), not their times."
  },
  "q41": {
    "steps": [
      "Profit = Selling price − Cost price = ₹500 − ₹400 = <b>₹100</b>.",
      "Profit % = (Profit ÷ Cost price) × 100 = (100 ÷ 400) × 100 = <b>25%</b>."
    ],
    "trap": "Always calculate profit % on the <i>cost</i> price, not the selling price. Dividing 100 by 500 gives 20% — that would be the wrong base."
  },
  "q42": {
    "steps": [
      "Average × count = total. Six numbers with average 15: total = 6 × 15 = <b>90</b>.",
      "Remove 20: remaining total = 90 − 20 = <b>70</b>.",
      "New average = 70 ÷ 5 = <b>14</b>."
    ]
  },
  "q43": {
    "steps": [
      "Half of 250 = 250 ÷ 2 = <b>125</b>."
    ]
  },
  "q44": {
    "steps": [
      "First discount of 10%: ₹1,000 × 0.90 = <b>₹900</b>.",
      "Second discount of 20% applied to the new price: ₹900 × 0.80 = <b>₹720</b>."
    ],
    "trap": "The two discounts are not 30% off the original. Apply each one in turn to the price after the previous discount."
  },
  "q45": {
    "steps": [
      "The gap between each term is +5: 5, 10, 15, 20 — each time add 5.",
      "Next = 20 + 5 = <b>25</b>."
    ]
  },
  "q46": {
    "steps": [
      "The gap between each term is +3: 3, 6, 9, 12.",
      "Next = 12 + 3 = <b>15</b>."
    ]
  },
  "q47": {
    "steps": [
      "Each term is double the previous one: 2, 4, 8, 16.",
      "Next = 16 × 2 = <b>32</b>."
    ]
  },
  "q48": {
    "steps": [
      "Apple, Banana, and Mango are all <b>fruits</b>.",
      "A Carrot is a <b>vegetable</b>.",
      "The odd one out is <b>Carrot</b>."
    ]
  },
  "q49": {
    "steps": [
      "Use letter positions: C = 3, A = 1, T = 20.",
      "So CAT → <b>3-1-20</b>."
    ]
  },
  "q50": {
    "steps": [
      "A Bird lives in the <b>Sky</b> — the sky is the bird's natural environment.",
      "By the same relationship, a Fish lives in <b>Water</b>."
    ]
  },
  "q51": {
    "steps": [
      "Premise 1: Some cats are black (not all cats, just some).",
      "Premise 2: All black things are dark.",
      "Therefore, the cats that are black are also dark → '<b>Some cats are dark</b>'.",
      "We can't say ALL cats are dark, because not all cats are black."
    ],
    "trap": "Don't jump to 'All cats are dark'. The word 'some' in the first premise limits the conclusion — only the black cats inherit the 'dark' property."
  },
  "q52": {
    "steps": [
      "The terms are 1², 2², 3², 4²: 1, 4, 9, 16.",
      "Next is 5² = <b>25</b>."
    ]
  },
  "q53": {
    "steps": [
      "C > A and A > B, so the order from tallest to shortest is <b>C, A, B</b>.",
      "The tallest is <b>C</b>."
    ]
  },
  "q54": {
    "steps": [
      "Look at the terms: 2, 3, 5, 7, 11. Each is a <b>prime number</b> (divisible only by 1 and itself).",
      "The next prime after 11 is <b>13</b> (12 = 2×6, so 12 is not prime)."
    ],
    "trap": "Don't just look for arithmetic gaps (2,3,5,7,11 — the gaps are 1,2,2,4, which don't follow a simple pattern). Recognise this as the prime number sequence."
  },
  "q55": {
    "steps": [
      "Look at the ratio between consecutive terms: 2÷1=2, 6÷2=3, 24÷6=4.",
      "The multipliers are 2, 3, 4 — each one step up. So the next multiplier is 5.",
      "24 × 5 = <b>120</b>.",
      "(These are factorial values: 1!, 2!, 3!, 4!, 5! = 1, 2, 6, 24, 120.)"
    ],
    "trap": "Simply doubling 24 gives 48, which misses that each multiplier increases by 1."
  },
  "q56": {
    "steps": [
      "A week has 7 days. Find the remainder when 100 is divided by 7: 100 = 14 × 7 + <b>2</b>.",
      "So 100 days from now is 2 days past Monday.",
      "Monday + 2 days = <b>Wednesday</b>."
    ],
    "trap": "Don't count 100 days by hand. Divide by 7 (the cycle length) and use only the remainder."
  },
  "q57": {
    "steps": [
      "The series skips every other letter: A (skip B), C (skip D), E (skip F), G (skip H).",
      "Next = skip H → <b>I</b>."
    ]
  },
  "q58": {
    "steps": [
      "Each term is half the previous one: 100, 50, 25.",
      "Next = 25 ÷ 2 = <b>12.5</b>."
    ]
  },
  "q59": {
    "steps": [
      "Mean = sum ÷ count = (2 + 4 + 6) ÷ 3 = 12 ÷ 3 = <b>4</b>."
    ]
  },
  "q60": {
    "steps": [
      "Sort the values: 1, 2, 3.",
      "The middle value of three numbers is the 2nd one: <b>2</b>."
    ]
  },
  "q61": {
    "steps": [
      "List the values: 2, 3, 3, 4, 5.",
      "The value that appears most often is <b>3</b> (it appears twice; all others appear once)."
    ]
  },
  "q62": {
    "steps": [
      "Total balls = 3 red + 2 blue = <b>5</b>.",
      "Chance of red = 3 out of 5 = <b>3 in 5</b>."
    ]
  },
  "q63": {
    "steps": [
      "Range = largest − smallest.",
      "Largest = 9, smallest = 2.",
      "Range = 9 − 2 = <b>7</b>."
    ]
  },
  "q64": {
    "steps": [
      "Chance of three heads in a row = (1/2) × (1/2) × (1/2) = <b>1/8</b>.",
      "Chance of at least one tail: the only way to get zero tails is three heads (prob 1/8), so at least one tail = 1 − 1/8 = <b>7/8</b>.",
      "7/8 is much larger than 1/8, so '<b>at least one tail</b>' is far more likely."
    ],
    "trap": "'At least one tail' covers HHT, HTH, THH, HTT, THT, TTH, TTT — that's 7 out of 8 outcomes. Don't assume they're equal because both relate to the same three tosses."
  },
  "q65": {
    "steps": [
      "Mean = (10 + 20 + 30 + 40) ÷ 4 = 100 ÷ 4 = <b>25</b>."
    ]
  },
  "q66": {
    "steps": [
      "List every way to make each total from 2 to 12. The total of <b>7</b> can be made in 6 ways: (1+6, 2+5, 3+4, 4+3, 5+2, 6+1).",
      "No other total has more than 6 combinations, so 7 comes up most often."
    ],
    "trap": "12 is the highest possible but can only be made one way (6+6). The most frequent total is in the middle of the range."
  },
  "q67": {
    "steps": [
      "The new student scored 80, which is above the current average of 50.",
      "Adding a value above the current average always pulls the average <b>up</b>.",
      "The new average will be somewhere between 50 and 80 — exactly where depends on how many students were already in the class."
    ],
    "trap": "The average won't jump all the way to 80 (that would require just this one student) or stay at exactly 50 (a higher value was added). It rises to somewhere in between."
  },
  "q68": {
    "steps": [
      "If 70% like tea and 40% like coffee, together that's 70 + 40 = 110%.",
      "But there are only 100% of people, so at least 110 − 100 = <b>10%</b> must be counted in both groups.",
      "10% is the minimum overlap."
    ],
    "trap": "It seems like they could be completely separate groups, but the percentages add up past 100%. The overlap must absorb the excess."
  },
  "q69": {
    "steps": [
      "List all outcomes for two flips: HH, HT, TH, TT — four equally likely results.",
      "Exactly one head: HT and TH → that's 2 out of 4 = <b>1 in 2</b>."
    ],
    "trap": "Don't confuse 'exactly one head' with 'at least one head' (which is 3/4). Listing all four outcomes clearly shows the answer."
  },
  "q70": {
    "steps": [
      "Average speed = total distance ÷ total time. Don't average the speeds directly.",
      "Time for first 60 km at 60 km/h = 1 hour. Time for second 60 km at 30 km/h = 2 hours.",
      "Total: 120 km in 3 hours → 120 ÷ 3 = <b>40 km/h</b>."
    ],
    "trap": "The naive approach — (60 + 30) ÷ 2 = 45 — is wrong because equal distances, not equal times, are driven at each speed. More time is spent at the slower speed, dragging the average down."
  },
  "q71": {
    "steps": [
      "A fair coin has two equally likely outcomes: heads and tails.",
      "Chance of tails = 1 out of 2 = <b>1 in 2</b>."
    ]
  },
  "q72": {
    "steps": [
      "Average of Set A: (5 + 5 + 5) ÷ 3 = 15 ÷ 3 = <b>5</b>.",
      "Average of Set B: (1 + 5 + 9) ÷ 3 = 15 ÷ 3 = <b>5</b>.",
      "Both averages are 5 — they are the same."
    ],
    "trap": "Set B looks 'bigger' because it has more extreme values, but the average is the same. This is the key difference between average (centre) and spread (variance)."
  },
  "q73": {
    "steps": [
      "Start: x = 10.",
      "Apply x = x + 5: x = 10 + 5 = <b>15</b>."
    ]
  },
  "q74": {
    "steps": [
      "Start: total = 0.",
      "n=1: total = 0 + 1 = 1. n=2: total = 1 + 2 = 3. n=3: total = 3 + 3 = <b>6</b>.",
      "(1 + 2 + 3 = 6.)"
    ]
  },
  "q75": {
    "steps": [
      "Start: x = 2. Repeat 3 times, doubling each time.",
      "After 1st: x = 2 × 2 = 4. After 2nd: x = 4 × 2 = 8. After 3rd: x = 8 × 2 = <b>16</b>.",
      "(Equivalently: 2 × 2³ = 2 × 8 = 16.)"
    ],
    "trap": "Multiplying 3 times by 2 is not the same as multiplying by 6. Each step multiplies the current value — that's exponential, not linear."
  },
  "q76": {
    "steps": [
      "Scan the list [1, 2, 3, 4, 5, 6] and count numbers where 'n is even'.",
      "Even numbers: 2, 4, 6 — that's <b>3</b> even numbers.",
      "count = <b>3</b>."
    ]
  },
  "q77": {
    "steps": [
      "x = 3. First check: is 3 > 5? <b>No</b> — skip 'A'.",
      "Second check: is 3 > 1? <b>Yes</b> — show '<b>B</b>'.",
      "Because the second check succeeded, the 'otherwise → C' is never reached."
    ]
  },
  "q78": {
    "steps": [
      "Scan the list [4, 8, 15, 16] for the largest value.",
      "The largest is <b>16</b>."
    ]
  },
  "q79": {
    "steps": [
      "Start: a = 1, b = 2.",
      "Step 1 — a = a + b = 1 + 2 = <b>3</b>. (b is still 2.)",
      "Step 2 — b = a + b = 3 + 2 = <b>5</b>.",
      "End: a = 3, b = 5."
    ],
    "trap": "Both lines use the current value of each variable. After step 1, a has changed to 3, so step 2 uses a = 3, not the original 1."
  },
  "q80": {
    "steps": [
      "Start: n = 10. Track how many times the loop runs before n ≤ 0.",
      "Run 1: n = 10 − 3 = 7. Run 2: n = 7 − 3 = 4. Run 3: n = 4 − 3 = 1. Run 4: n = 1 − 3 = −2.",
      "After run 4, n = −2 which is not > 0, so stop. The loop ran <b>4 times</b>."
    ],
    "trap": "10 ÷ 3 = 3.33, which might suggest 3 runs, but n stays positive after 3 subtractions (n = 1), so the loop runs a 4th time."
  },
  "q81": {
    "steps": [
      "Reverse [1, 2, 3] → [3, 2, 1].",
      "Take the first item of [3, 2, 1] → <b>3</b>."
    ]
  },
  "q82": {
    "steps": [
      "Start: result = 1, n = 5. Multiply result by n, then reduce n, while n > 1.",
      "n=5: result = 1×5 = 5, n→4. n=4: result = 5×4 = 20, n→3.",
      "n=3: result = 20×3 = 60, n→2. n=2: result = 60×2 = 120, n→1.",
      "n=1 is not > 1 → stop. result = <b>120</b> (= 5!)."
    ]
  },
  "q83": {
    "steps": [
      "Start: a = 0, b = 1. Each step: temp = a + b, a = b, b = temp.",
      "Step 1: temp=1, a=1, b=1. Step 2: temp=2, a=1, b=2.",
      "Step 3: temp=3, a=2, b=3. Step 4: temp=5, a=3, b=<b>5</b>.",
      "b at the end = <b>5</b>."
    ],
    "trap": "Each step produces the next Fibonacci number. Build a table rather than trying to track it in your head — it's easy to lose track after step 2."
  },
  "q84": {
    "steps": [
      "Start: x = 1. Loop: for i = 1, 2, 3, 4 — add i to x each time.",
      "i=1: x = 1+1 = 2. i=2: x = 2+2 = 4. i=3: x = 4+3 = 7. i=4: x = 7+4 = <b>11</b>.",
      "(Equivalently: 1 + (1+2+3+4) = 1 + 10 = 11.)"
    ]
  },
  "q85": {
    "steps": [
      "x = 7. Check: is 7 > 5? <b>Yes</b>.",
      "So show '<b>big</b>'."
    ]
  },
  "q86": {
    "steps": [
      "Double each number in [3, 6, 9]: 3×2=6, 6×2=12, 9×2=18.",
      "Add the doubled values: 6 + 12 + 18 = <b>36</b>."
    ]
  },
  "q87": {
    "steps": [
      "Read the bar heights: Q1=10, Q2=20, Q3=30, Q4=<b>40</b>.",
      "The tallest bar is Q4 with 40 units — that's the highest quarter."
    ]
  },
  "q88": {
    "steps": [
      "Read the line values at each reading: 20, 22, <b>25</b>, 23, 21.",
      "The peak is at the 3rd reading (25°C)."
    ]
  },
  "q89": {
    "steps": [
      "Read the bar heights: A=30, B=<b>45</b>, C=25.",
      "Option B has the tallest bar with 45 votes."
    ]
  },
  "q90": {
    "steps": [
      "Read the values: 5, 10, 20, 40. Compute the gaps: +5, +10, +20.",
      "The gaps themselves are doubling each step (5, 10, 20) — the value is rising and each jump is larger than the last.",
      "That matches '<b>rising, and faster each step</b>'."
    ],
    "trap": "'Rising at a steady rate' would mean equal gaps (like 5, 10, 15, 20). Here the gaps grow, so the rise is accelerating."
  },
  "q91": {
    "steps": [
      "Read the bar values: Jan=100, Feb=50, Mar=150.",
      "Total = 100 + 50 + 150 = <b>300 mm</b>."
    ]
  },
  "q92": {
    "steps": [
      "Bar values: Boys=20, Girls=30. Total students = 20 + 30 = <b>50</b>.",
      "Girls as a fraction = 30 ÷ 50 = 0.60 = <b>60%</b>."
    ]
  },
  "q93": {
    "steps": [
      "Read the values: 100, 80, 60, 40. Each step drops by the same amount (−20).",
      "That's a <b>steadily falling</b> trend (a straight downward line)."
    ]
  },
  "q94": {
    "steps": [
      "Compute day-on-day changes: Tue = 6−4 = +2, Wed = 2−6 = −4, Thu = 8−2 = <b>+6</b>.",
      "The biggest positive jump is Thursday (+6), so Thursday had the largest increase."
    ],
    "trap": "Thursday has the tallest bar but that's not what 'increased the most compared with the day before' means. The biggest jump is from Wednesday (2) to Thursday (8) = +6."
  },
  "q95": {
    "steps": [
      "Bar values: X=200, Y=100.",
      "200 ÷ 100 = <b>2</b>. Product X sold exactly 2 times as much as Product Y."
    ]
  },
  "q96": {
    "steps": [
      "All four readings are 50 — the line is flat.",
      "A flat line means the value <b>does not change</b> over time."
    ]
  },
  "q97": {
    "steps": [
      "Bar values: A=80, B=40. The difference = 80 − 40 = <b>40</b>.",
      "Percentage more = difference ÷ B's score × 100 = 40 ÷ 40 × 100 = <b>100% more</b>."
    ],
    "trap": "'100% more' means A scored twice B's total — 40 is 100% of 40, so A is 40 above B. Don't compare to A's total (40÷80=50%), which would answer the wrong question."
  },
  "q98": {
    "steps": [
      "Read consecutive pairs left to right: 30→60 (rise), 60→45 (fall), 45→90 (rise), 90→75 (fall).",
      "The line falls <b>2 times</b> (at point 3 and point 5)."
    ]
  },
  "q99": {
    "steps": [
      "Bar values: Food=500, Rent=1000, Other=500. Total = 500+1000+500 = <b>2000</b>.",
      "Rent fraction = 1000 ÷ 2000 = <b>1/2</b>."
    ]
  },
  "q100": {
    "steps": [
      "Read the bar heights: Dogs=5, Cats=3, Fish=<b>2</b>.",
      "The shortest bar is Fish (2) — the least common pet."
    ]
  }
}
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
