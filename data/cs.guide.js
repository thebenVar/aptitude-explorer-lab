// Study guide explanations for the Computer Science assessment.
// strategies: per-dimension how-to-approach text (HTML ok).
// questions: keyed by question id — steps[] (HTML ok) + optional trap string.
// The question prompt/options/answer come from data/cs.js (no duplication).
window.GUIDE = {
  strategies: {
    logic: "Follow the instructions <b>one step at a time</b>, exactly as written. For code traces, keep a small table of every variable and update it with each line — never skip ahead. For syllogisms, check the <b>direction</b> of each statement: 'all A are B' does not mean 'all B are A'. For series, look at the differences between terms before looking at the terms themselves.",
    pattern: "Before guessing, look at the <b>gaps</b> between consecutive terms. Then look at the gaps between those gaps. If a single rule doesn't fit, try splitting the sequence into <b>two interleaved sub-sequences</b> and find the rule for each separately. State the rule in words before calculating the next term.",
    precision: "Slow down and read the question <b>word for word</b>. Underline the key instruction (second-largest, capital letters, exactly the same). For spot-the-difference tasks, compare character by character — don't skim. For multi-condition rules, check <b>every</b> condition against your answer before committing.",
    decomp: "Ask three questions: <i>What are the parts?</i> <i>What order must they go in?</i> <i>Which parts depend on each other?</i> For timing problems, draw a simple timeline showing what can run at the <b>same time</b> versus what must wait. A good decomposition lists one small action per step, not vague blobs.",
    systems: "Trace the <b>chain of effects</b>: if X changes, what does that do to Y, and what does Y then do to Z? For charts, read axis labels first, then look at the <b>shape</b> of the trend, not just the tallest bar. Watch for feedback loops (an effect that circles back to reinforce or dampen itself) and single points of failure (one broken link that stops the whole chain)."
  },
  questions: {
    /* ── LOGICAL & SEQUENTIAL THINKING ── */
    "q1": {
      "steps": [
        "Write down the differences between consecutive terms: 5−2=<b>3</b>, 10−5=<b>5</b>, 17−10=<b>7</b>, 26−17=<b>9</b>.",
        "The differences increase by 2 each time: 3, 5, 7, 9 → next difference = <b>11</b>.",
        "So the next term = 26 + 11 = <b>37</b>."
      ],
      "trap": "The differences grow — this is not a simple 'add the same number each time' series. Calculate each gap before guessing."
    },
    "q2": {
      "steps": [
        "Statement 1: All tigers have stripes. This tells us: tiger → stripes.",
        "Statement 2: Leo has stripes. This tells us Leo is inside the 'has stripes' group.",
        "But the 'has stripes' group is <b>bigger</b> than tigers — zebras, leopards and many others have stripes too.",
        "Knowing Leo has stripes tells us nothing certain about whether Leo is a tiger. We <b>cannot conclude</b>."
      ],
      "trap": "'All A have B' does NOT flip to 'all B are A'. Having stripes is a necessary feature of tigers, not a unique feature."
    },
    "q3": {
      "steps": [
        "n = 8.",
        "Check condition: is 8 > 5? <b>Yes</b>. Is 8 < 10? <b>Yes</b>. Both parts of AND are true → the condition is true.",
        "Because the condition is true, the program shows <b>\"Yes\"</b>."
      ]
    },
    "q4": {
      "steps": [
        "Start: count = 0.",
        "3 > 4? No → skip. count = 0.",
        "7 > 4? Yes → count = 1.",
        "2 > 4? No → skip. count = 1.",
        "8 > 4? Yes → count = 2.",
        "5 > 4? Yes → count = 3.",
        "Final count = <b>3</b>."
      ],
      "trap": "Go through every number in order. The numbers that qualify are 7, 8, and 5 — that is three, not two."
    },
    "q5": {
      "steps": [
        "Apple, Orange, Banana — all are <b>fruits</b> (from the sweet, seed-bearing part of a plant).",
        "Carrot is a <b>vegetable</b> (an edible root).",
        "The odd one out is <b>Carrot</b>."
      ]
    },
    "q6": {
      "steps": [
        "Start: a = 5, b = 9.",
        "temp = a → temp = <b>5</b>. (a and b unchanged so far.)",
        "a = b → a = <b>9</b>. (temp still holds the original a.)",
        "b = temp → b = <b>5</b>.",
        "Result: a = 9, b = 5."
      ],
      "trap": "The whole point of 'temp' is to save a's original value before overwriting a. Follow each assignment in strict order."
    },

    /* ── PATTERN RECOGNITION ── */
    "q7": {
      "steps": [
        "Convert each letter to its position: B=2, D=4, G=7, K=11, P=16.",
        "Find the gaps: 4−2=2, 7−4=3, 11−7=4, 16−11=5.",
        "Gaps increase by 1 each time: next gap = <b>6</b>.",
        "16 + 6 = 22 → position 22 = <b>V</b>."
      ]
    },
    "q8": {
      "steps": [
        "1 = 1², 4 = 2², 9 = 3², 16 = 4², 25 = 5².",
        "The pattern is consecutive perfect squares.",
        "Next: 6² = <b>36</b>."
      ]
    },
    "q9": {
      "steps": [
        "6 ÷ 3 = 2, 12 ÷ 6 = 2, 24 ÷ 12 = 2, 48 ÷ 24 = 2.",
        "Each term is <b>doubled</b> (multiplied by 2).",
        "48 × 2 = <b>96</b>."
      ]
    },
    "q10": {
      "steps": [
        "First letter of each pair: A(1), B(2), C(3) — moving forward through the alphabet.",
        "Second letter of each pair: Z(26), Y(25), X(24) — moving backward through the alphabet.",
        "Next: first letter = D (4th), second letter = W (23rd) → <b>DW</b>."
      ]
    },
    "q11": {
      "steps": [
        "Differences: 100−91=9, 91−83=8, 83−76=7, 76−70=6.",
        "The differences decrease by 1 each time: next difference = <b>5</b>.",
        "70 − 5 = <b>65</b>."
      ]
    },
    "q12": {
      "steps": [
        "Split into odd-position terms: 2, 4, 8, 16 — each doubles.",
        "Split into even-position terms: 3, 6, 12 — each doubles.",
        "The 8th term (even position) follows the even sub-sequence: next value after 12 is 12×2 = <b>24</b>."
      ],
      "trap": "Looking for one single rule across all seven terms will fail here. The key insight is that two separate doubling sequences are interleaved."
    },

    /* ── PRECISION & ATTENTION TO DETAIL ── */
    "q13": {
      "steps": [
        "Compare each option character by character against the first: <code>x = 2 * (a + b) - c</code>.",
        "Options A, B, D all end in <code>- c</code>.",
        "Option C ends in <code>+ c</code> — the minus sign has become a plus sign.",
        "The different one is <b>Option C</b>."
      ],
      "trap": "Don't skim — the only difference is a single character (+/−) near the end of the expression."
    },
    "q14": {
      "steps": [
        "Go through the list: 1 (odd → unchanged), 2 (even → 2+3=5), 3 (odd → unchanged), 4 (even → 4+3=7), 5 (odd → unchanged).",
        "Result: [1, 5, 3, 7, 5]."
      ],
      "trap": "Apply the rule only to even numbers. The list [4, 5, 6, 7, 8] adds 3 to every number — that is wrong."
    },
    "q15": {
      "steps": [
        "The list is 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.",
        "Counting them gives <b>10</b> numbers.",
        "(Quick formula: last − first + 1 = 10 − 1 + 1 = 10.)"
      ],
      "trap": "Subtracting 10 − 1 = 9 is the classic off-by-one error. Always add 1 when both endpoints are included."
    },
    "q16": {
      "steps": [
        "Check every option against all three rules (name starts with A, age > 15, score ≥ 80):",
        "Aryan, age 16, score 79: score 79 < 80 → <b>fails</b>.",
        "Aryan, age 15, score 85: age 15 is not > 15 → <b>fails</b>.",
        "Aisha, age 17, score 80: name starts A ✓, age 17 > 15 ✓, score 80 ≥ 80 ✓ → <b>qualifies</b>.",
        "Aisha, age 16, score 78: score 78 < 80 → fails."
      ],
      "trap": "Check every condition for every option. Option B fails because 'more than 15' means strictly greater — age 15 does not qualify."
    },
    "q17": {
      "steps": [
        "Sort the list in descending order: 89, 55, 42, 33, 17.",
        "The largest is 89. The <b>second-largest</b> is <b>55</b>."
      ],
      "trap": "The question asks for second-largest, not largest. Sort the list first."
    },
    "q18": {
      "steps": [
        "The correct order is: Put bread in → press lever → wait → remove toast → eat.",
        "Option B says: Put bread in → <b>wait</b> → press lever → remove → eat. You cannot wait for toasting before you have even pressed the lever. This is the wrong version.",
        "Option C eats before removing — also wrong; Option D removes before waiting — also wrong. But Option B has the most obviously illogical step: waiting before starting."
      ],
      "trap": "Read each sequence carefully. The question asks which has a step 'out of position'. In Option B, 'wait' appears before 'press lever' — you can't wait for something you haven't started."
    },

    /* ── PROBLEM DECOMPOSITION ── */
    "q19": {
      "steps": [
        "The listed steps: open app → write subject → write message → click Send.",
        "Without a recipient address, the email has nowhere to go — it cannot be sent.",
        "The missing step is <b>'Enter the recipient's email address'</b>, which must happen before clicking Send."
      ]
    },
    "q20": {
      "steps": [
        "Mixing must come before pouring (you mix the batter, then pour it). Baking must come before cooling (it's hot when it comes out). Cooling must come before icing (icing melts on a hot cake).",
        "Only option C follows all these constraints: gather → mix → pour → bake → cool → ice."
      ],
      "trap": "Option B has 'ice' before 'cool' — icing a hot cake melts the icing. Always ask 'does this step need a previous step to be done first?'"
    },
    "q21": {
      "steps": [
        "Draw a timeline. C can start at time 0 and runs for 8 minutes.",
        "A starts at 0, finishes at 10. B can only start after A, so B runs from 10 to 15.",
        "The chain A→B finishes at 15. C finishes at 8.",
        "Everything is done when the <b>last</b> part finishes: max(15, 8) = <b>15 minutes</b>."
      ],
      "trap": "Adding all times (10+5+8=23) is wrong — C runs in parallel with A and B. The bottleneck is the A→B chain."
    },
    "q22": {
      "steps": [
        "A good decomposition uses small, concrete, sequential steps that can each be checked off.",
        "Option A (Plan → Design → Code → Test → Launch) covers every phase with no overlap and in a logical order.",
        "Options B and C skip important phases (testing, design). Option D cycles without direction."
      ]
    },
    "q23": {
      "steps": [
        "Think through every individual action: open browser, navigate to site, log in (enter username, enter password, click submit), find upload section, click 'Choose file', select the photo, confirm upload. That is already more than 6 distinct clicks/actions.",
        "The answer is <b>at least 6 steps</b>."
      ],
      "trap": "'Open the website and upload' feels like 2 steps, but each of those words hides many small actions. Always enumerate every click and decision."
    },
    "q24": {
      "steps": [
        "Debugging means <b>changing one thing at a time</b> so you can know which change fixed the problem.",
        "Option B tests the bulb first; if the lamp works, the bulb was the problem. If not, move to the next component. Each test tells you something definitive.",
        "Option A replaces everything at once — if it works, you still don't know which part was broken."
      ]
    },

    /* ── SYSTEMS & CAUSE-EFFECT THINKING ── */
    "q25": {
      "steps": [
        "Read the axis: values are Jan=200, Feb=220, Mar=280, Apr=270, May=340.",
        "Calculate each month-to-month change: Feb: +20, Mar: +60, Apr: −10, May: +70.",
        "The largest increase is +70, which happened in <b>May</b>."
      ],
      "trap": "April has the second tallest bar but actually fell from March. 'Grew the most' means biggest positive change, not biggest absolute value."
    },
    "q26": {
      "steps": [
        "Read the data points: 1→10ms, 2→12ms, 4→18ms, 8→35ms, 16→90ms, 32→200ms.",
        "Each time the user count doubles, the response time more than doubles — the increases are getting <b>larger and larger</b>.",
        "This means response time grows <b>faster and faster</b> as more users are added."
      ],
      "trap": "'Doubles exactly every time' would require a perfectly consistent 2× ratio — the actual ratio is irregular and growing. The correct answer is 'grows faster and faster'."
    },
    "q27": {
      "steps": [
        "The pipeline is Chop → Fry → Season → Serve.",
        "Skipping 'Season' means the food goes from frying directly to serving — without any seasoning added.",
        "The most direct effect is <b>unseasoned / bland food</b>."
      ],
      "trap": "Skipping a step affects only what that step would have done. Chopping still happened; the food isn't overcooked — it's just missing its seasoning."
    },
    "q28": {
      "steps": [
        "More books borrowed per student → fewer copies sitting on shelves at any moment.",
        "Fewer copies on shelves → other students who want those books must <b>wait longer</b>.",
        "This is a direct, realistic cause-effect chain."
      ],
      "trap": "Option C is wishful (and absurd). Option A ignores human behaviour. The realistic chain is the one that follows the physical constraint: more borrowed = fewer available."
    },
    "q29": {
      "steps": [
        "The thermostat rule: below 20°C → heater ON; at 20°C → heater OFF.",
        "In a cold room the heater turns ON. As the room warms toward 20°C the heater turns OFF. If it cools slightly below 20°C it turns ON again.",
        "Over time the temperature <b>cycles around 20°C</b>, kept near the target by the feedback loop."
      ],
      "trap": "This is a negative feedback loop — the system corrects itself toward a target. The heater does not stay on forever, nor does it keep the temperature rising indefinitely."
    },
    "q30": {
      "steps": [
        "The chain is: Device → Router → Modem → Internet provider.",
        "The modem is broken — it is a <b>single point of failure</b> in the middle of the chain.",
        "Even if the router and provider are fine, no data can get through the broken modem, so <b>no device can reach the internet</b>."
      ],
      "trap": "In a series chain, one broken link breaks everything downstream. The router being fine does not help — the modem is the link to the outside world."
    },

    /* ── LOGICAL & SEQUENTIAL THINKING (q31–q44) ── */
    "q31": {
      "steps": [
        "Differences between terms: 4−1=3, 10−4=6, 22−10=12, 46−22=24.",
        "Each difference doubles: 3, 6, 12, 24 → next difference = <b>48</b>.",
        "46 + 48 = <b>94</b>."
      ]
    },
    "q32": {
      "steps": [
        "x = 4.",
        "Is x > 5? 4 > 5 is <b>false</b> → go to 'otherwise' branch.",
        "Inside 'otherwise': is x > 2? 4 > 2 is <b>true</b> → show <b>\"Medium\"</b>.",
        "The 'Low' branch is never reached."
      ],
      "trap": "Follow the indentation carefully. The second if/otherwise is nested inside the first 'otherwise' block — only enter it because the first condition failed."
    },
    "q33": {
      "steps": [
        "Statement 1: All cats are mammals → every cat is inside the mammals group.",
        "Statement 2: Felix is a cat → Felix is inside the cats group.",
        "Since all cats are mammals, Felix (being a cat) must be a mammal. This is a <b>valid syllogism</b>.",
        "Conclusion: <b>Felix is a mammal</b>."
      ],
      "trap": "Unlike q2, this direction is valid: we go from 'Felix is a cat' forward to 'Felix is a mammal' because ALL cats are mammals."
    },
    "q34": {
      "steps": [
        "Start: total = 0.",
        "Add 1 → total = 1.",
        "Add 2 → total = 3.",
        "Add 3 → total = 6.",
        "Add 4 → total = <b>10</b>."
      ]
    },
    "q35": {
      "steps": [
        "2 is prime (divisible only by 1 and 2).",
        "3 is prime (divisible only by 1 and 3).",
        "5 is prime (divisible only by 1 and 5).",
        "9 = 3 × 3 — divisible by 3. It is <b>not prime</b>.",
        "The odd one out is <b>9</b>."
      ],
      "trap": "All four are odd except 2 — don't use 'even/odd' as the grouping rule. The correct grouping is prime vs. composite."
    },
    "q36": {
      "steps": [
        "Start: n = 10, count = 0.",
        "Loop 1: n=10 > 1 → n = 10−3 = 7, count = 1.",
        "Loop 2: n=7 > 1 → n = 7−3 = 4, count = 2.",
        "Loop 3: n=4 > 1 → n = 4−3 = 1, count = 3.",
        "Check: n=1 is NOT greater than 1 → loop stops. count = <b>3</b>."
      ],
      "trap": "The condition is 'n is greater than 1', which is strictly greater — n=1 does not enter the loop. Check the boundary precisely."
    },
    "q37": {
      "steps": [
        "Rule: replace each letter with its alphabet position (A=1, B=2, …).",
        "B = 2, A = 1, D = 4.",
        "BAD → <b>2-1-4</b>."
      ]
    },
    "q38": {
      "steps": [
        "A glove is a covering worn on a <b>hand</b>.",
        "By the same relationship, the covering worn on a <b>foot</b> is a <b>sock</b>."
      ],
      "trap": "A shoe covers the foot too, but it is not listed. Among the options, 'Sock' is the direct equivalent of a glove (a fitted cloth covering)."
    },
    "q39": {
      "steps": [
        "age = 20, hasTicket = false.",
        "Condition: age ≥ 18 AND hasTicket is true.",
        "20 ≥ 18 is <b>true</b>, but hasTicket is <b>false</b>.",
        "AND requires <b>both</b> parts to be true. One is false → whole condition is false → show <b>\"No entry\"</b>."
      ],
      "trap": "With AND, both conditions must hold. Meeting the age requirement is not enough if the ticket condition fails."
    },
    "q40": {
      "steps": [
        "Differences: 3−1=2, 6−3=3, 8−6=2, 11−8=3, 13−11=2.",
        "The gaps alternate: +2, +3, +2, +3, +2 → next gap = <b>+3</b>.",
        "13 + 3 = <b>16</b>."
      ]
    },
    "q41": {
      "steps": [
        "Statement 1: <i>Some</i> birds can fly — not all.",
        "Statement 2: Penguins are birds.",
        "Penguins are in the 'birds' group. But we only know <i>some</i> birds fly — penguins might be in the flying or non-flying subset. <b>We cannot conclude</b> from these two statements alone.",
        "(In real life penguins can't fly, but logic requires us to work only with what's given.)"
      ],
      "trap": "'Some' means 'at least one' — it does not cover every member. Knowing penguins are birds doesn't tell us which subset they fall into."
    },
    "q42": {
      "steps": [
        "raining = false, weekend = true.",
        "Condition: raining is true OR weekend is true.",
        "raining is false, but weekend is <b>true</b>.",
        "OR requires at least one part to be true. Weekend is true → whole condition is true → show <b>\"Stay in\"</b>."
      ],
      "trap": "With OR, only one side needs to be true. Even though 'raining' is false, 'weekend' being true is enough."
    },
    "q43": {
      "steps": [
        "Amy is behind Ben → Ben is closer to the front than Amy.",
        "Ben is behind Cara → Cara is closer to the front than Ben.",
        "Order from front: <b>Cara, Ben, Amy</b>. Cara is at the front."
      ]
    },
    "q44": {
      "steps": [
        "Start: count = 0.",
        "2: even → count = 1.",
        "5: odd → skip. count = 1.",
        "8: even → count = 2.",
        "11: odd → skip. count = 2.",
        "14: even → count = 3.",
        "Final count = <b>3</b>."
      ]
    },

    /* ── PATTERN RECOGNITION (q45–q58) ── */
    "q45": {
      "steps": [
        "Differences: 3−1=2, 6−3=3, 10−6=4, 15−10=5.",
        "The differences increase by 1 each time: next difference = <b>6</b>.",
        "15 + 6 = <b>21</b>.",
        "(These are triangular numbers: 1, 3, 6, 10, 15, 21 …)"
      ]
    },
    "q46": {
      "steps": [
        "6÷2=3, 18÷6=3, 54÷18=3.",
        "Each term is multiplied by <b>3</b>.",
        "54 × 3 = <b>162</b>."
      ]
    },
    "q47": {
      "steps": [
        "1 = 1³, 8 = 2³, 27 = 3³, 64 = 4³.",
        "The pattern is consecutive <b>perfect cubes</b>.",
        "Next: 5³ = 5 × 5 × 5 = <b>125</b>."
      ],
      "trap": "100 = 10² (a perfect square but not 5³). 128 = 2⁷. The correct next cube is 125."
    },
    "q48": {
      "steps": [
        "A(1), C(3), E(5), G(7) — every second letter of the alphabet.",
        "The gap is always +2 positions.",
        "G(7) + 2 = I(9) → <b>I</b>."
      ]
    },
    "q49": {
      "steps": [
        "Check: does each term equal the sum of the two before it?",
        "2+3=5 ✓, 3+5=8 ✓, 5+8=13 ✓.",
        "Next: 8 + 13 = <b>21</b>."
      ],
      "trap": "This is the Fibonacci rule: add the two previous terms. Adding just one of them (13+8=21 vs 13+5=18) is easy to mix up — always add the pair immediately before."
    },
    "q50": {
      "steps": [
        "Triangle has 3, square has 4, pentagon has 5, hexagon has 6.",
        "Each shape adds one side: +1 each step.",
        "Next: 6 + 1 = <b>7</b> sides (heptagon)."
      ]
    },
    "q51": {
      "steps": [
        "Look at the pattern of operations: 4 ×2=8, 8 −1=7, 7 ×2=14, 14 −1=13.",
        "The rule alternates: ×2, then −1, then ×2, then −1 …",
        "Last operation was −1 (14→13). Next operation is ×2: 13 × 2 = <b>26</b>."
      ],
      "trap": "The sequence alternates between two different operations. Spotting that '×2 then −1' repeats is the key to finding the rule."
    },
    "q52": {
      "steps": [
        "The block A, B, C repeats: A B C | A B C | A B …",
        "After the second A B, the next letter in the block is <b>C</b>."
      ]
    },
    "q53": {
      "steps": [
        "Differences: 48−32=16, 56−48=8, 60−56=4.",
        "Each difference is <b>halved</b>: 16, 8, 4 → next difference = <b>2</b>.",
        "60 + 2 = <b>62</b>."
      ],
      "trap": "The sequence is getting closer and closer to a limit, not growing or staying constant. Calculate the differences first."
    },
    "q54": {
      "steps": [
        "50−43=7, 43−36=7, 36−29=7.",
        "Subtract <b>7</b> each time.",
        "29 − 7 = <b>22</b>."
      ]
    },
    "q55": {
      "steps": [
        "Number part: 1, 2, 3, 4 → next number = <b>5</b>.",
        "Letter part (positions): A=1, C=3, E=5, G=7 — skip one letter each time (+2).",
        "Next letter: G(7)+2 = I(9) → <b>I</b>.",
        "Answer: <b>5I</b>."
      ]
    },
    "q56": {
      "steps": [
        "Notice: 0=1²−1, 3=2²−1, 8=3²−1, 15=4²−1, 24=5²−1.",
        "Rule: n² − 1 for n = 1, 2, 3, 4, 5 …",
        "Next: 6² − 1 = 36 − 1 = <b>35</b>."
      ],
      "trap": "The differences are 3, 5, 7, 9 (odd numbers increasing by 2) — that also leads to 35. Either approach works."
    },
    "q57": {
      "steps": [
        "Odd-position terms (1st, 3rd, 5th, 7th): 1, 6, 11, ? — each adds 5.",
        "Even-position terms (2nd, 4th, 6th): 2, 4, 8 — each doubles.",
        "The 7th term is odd-position: 11 + 5 = <b>16</b>."
      ],
      "trap": "Trying to find one rule for all seven terms will fail. Split into two interleaved sequences."
    },
    "q58": {
      "steps": [
        "Look at each term: 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31.",
        "Rule: multiply by 2, then add 1 each step.",
        "31 × 2 + 1 = <b>63</b>."
      ],
      "trap": "Differences are 2, 4, 8, 16 — doubling each time — which also leads to 63 (31+32=63). Use whichever method you spot first."
    },

    /* ── PRECISION & ATTENTION TO DETAIL (q59–q72) ── */
    "q59": {
      "steps": [
        "Compare character by character: options A, B, D are '10110'.",
        "Option C is '10<b>1</b>00' — the 4th character is 0 instead of 1.",
        "The different one is <b>Option C</b>."
      ],
      "trap": "These strings differ in only one bit. Go position by position: 1-0-1-1-0 vs 1-0-1-0-0."
    },
    "q60": {
      "steps": [
        "Spell it out letter by letter: m-i-<b>s</b>-<b>s</b>-i-<b>s</b>-<b>s</b>-i-p-p-i.",
        "Tick each 's': positions 3, 4, 6, 7 → total = <b>4</b>."
      ],
      "trap": "It is easy to miscount by skimming. Write each letter out separately and tick as you go."
    },
    "q61": {
      "steps": [
        "Go character by character and track what's 'open'.",
        "Option B: '(' opens → '[' opens → ']' closes '[' ✓ → ')' closes '(' ✓. All matched and correctly nested → <b>Option B</b> is correct."
      ],
      "trap": "Option A: '(' opens, '[' opens, ')' tries to close — but '[' is still open, so ')' mismatches. Always close the most recently opened bracket first."
    },
    "q62": {
      "steps": [
        "The whole numbers from 5 to 12 inclusive: 5, 6, 7, 8, 9, 10, 11, 12.",
        "Count them: that is <b>8</b> numbers.",
        "(Formula: 12 − 5 + 1 = 8.)"
      ],
      "trap": "12 − 5 = 7 is the off-by-one mistake — it misses one endpoint. Always add 1 when both ends are included."
    },
    "q63": {
      "steps": [
        "Options A, B, C are all 'a * b + c = d'.",
        "Option D is 'a * b <b>−</b> c = d' — the plus has become a minus.",
        "The different one is <b>Option D</b>."
      ]
    },
    "q64": {
      "steps": [
        "Rules: ≥8 characters, contains a digit, contains an uppercase letter.",
        "'hello123' (8 chars): no uppercase → <b>fails</b>.",
        "'Hello12' (7 chars): too short → <b>fails</b>.",
        "'HELLOWORLD' (10 chars): no digit → <b>fails</b>.",
        "'Hello123' (8 chars): H is uppercase ✓, 1,2,3 are digits ✓, length 8 ✓ → <b>valid</b>."
      ],
      "trap": "Check all three conditions. 'HELLOWORLD' is long and has uppercase but has no digit. 'hello123' has length and digits but no uppercase."
    },
    "q65": {
      "steps": [
        "Sort the list in ascending order: 3, 9, 14, 17, 21.",
        "First-smallest: 3. Second-smallest: 9. Third-smallest: <b>14</b>."
      ],
      "trap": "The question asks third-smallest, not the middle or the third item as originally listed. Sort first."
    },
    "q66": {
      "steps": [
        "Write the number out digit by digit: 1, 0, 0, 3, 0, 2, 0.",
        "Count the zeros: positions 2, 3, 5, 7 → <b>4 zeros</b>."
      ],
      "trap": "The comma in '1,003,020' is a thousands separator, not a digit. Focus only on the digits themselves."
    },
    "q67": {
      "steps": [
        "Reversing [1, 2, 3, 4] means the last element becomes first: 4, 3, 2, 1.",
        "Result: <b>[4, 3, 2, 1]</b>."
      ]
    },
    "q68": {
      "steps": [
        "Options A, B, D are '4830271'.",
        "Compare Option C digit by digit: 4-8-3-0-<b>2</b>-<b>1</b>-7 vs 4-8-3-0-2-7-1. The last three digits are '217' instead of '271'.",
        "The different one is <b>Option C (4830217)</b>."
      ],
      "trap": "The difference is a transposition of digits near the end. Go slowly position by position: …2-7-1 vs …2-1-7."
    },
    "q69": {
      "steps": [
        "The correct login order is: open app → enter username → enter password → click Login.",
        "Option B: open app → enter username → <b>click Login</b> → enter password. Clicking Login before entering the password is impossible (or ineffective). This is the wrong version."
      ],
      "trap": "Option C swaps username and password, which is odd but some apps allow it. Option B jumps to 'click Login' mid-process — that is the clearest violation of the logical order."
    },
    "q70": {
      "steps": [
        "Apply 'double then subtract 1' to each number.",
        "2 → 2×2=4, 4−1=<b>3</b>.",
        "3 → 3×2=6, 6−1=<b>5</b>.",
        "Result: <b>[3, 5]</b>."
      ],
      "trap": "Option A just doubles (no subtract-1). Option D subtracts 1 before doubling — wrong order. Always follow the stated order: double first, subtract second."
    },
    "q71": {
      "steps": [
        "Options A, B, D are 'if x == 5 then stop' (using <b>double equals ==</b>).",
        "Option C is 'if x <b>=</b> 5 then stop' — single equals instead of double equals.",
        "The different one is <b>Option C</b>."
      ],
      "trap": "In most programming languages == means 'is equal to' (comparison) while = means 'assign'. A single character difference here completely changes the meaning."
    },
    "q72": {
      "steps": [
        "Go letter by letter through 'HelloWorldHI':",
        "<b>H</b>-e-l-l-o-<b>W</b>-o-r-l-d-<b>H</b>-<b>I</b>.",
        "Capital letters: H, W, H, I → <b>4 capitals</b>."
      ],
      "trap": "Don't count total letters or just the first capital. Go through every character and check each one."
    },

    /* ── PROBLEM DECOMPOSITION (q73–q86) ── */
    "q73": {
      "steps": [
        "The listed steps are: boil water → put teabag in cup → wait → add milk.",
        "After boiling the water you need to <b>pour it into the cup</b> before the teabag can brew. Without this step the teabag sits in an empty cup.",
        "The missing step is: <b>'Pour the hot water into the cup'</b>."
      ]
    },
    "q74": {
      "steps": [
        "Draw a timeline. Load 1: wash 0→30 min, dry 30→70 min.",
        "Load 2: cannot start washing until the washer is free at 30 min → wash 30→60 min. Cannot start drying until the dryer is free at 70 min → dry 70→110 min.",
        "Everything finishes at <b>110 minutes</b>."
      ],
      "trap": "70 minutes would be the time for just one load. Adding both loads sequentially (140) ignores that washing load 2 can overlap with drying load 1. The correct overlap analysis gives 110."
    },
    "q75": {
      "steps": [
        "A useful decomposition has small, concrete, ordered, non-overlapping steps.",
        "Option B covers every phase in the right order: Set a date → invite guests → arrange food → arrange cake → plan activities.",
        "The other options either skip steps ('just sort it out'), collapse everything ('buy a cake → done'), or repeat steps pointlessly."
      ]
    },
    "q76": {
      "steps": [
        "The required order is: clean wall → apply primer → paint → dry.",
        "'Clean the wall' depends on no previous step — it can (and must) be done <b>first</b>.",
        "Each subsequent step depends on the one before it."
      ]
    },
    "q77": {
      "steps": [
        "Enumerate each action: insert card, wait for menu, enter PIN, confirm PIN, select 'Withdraw', choose account type, enter amount, confirm amount, take cash, take card (and possibly take receipt).",
        "That is easily 6 or more individual steps. The realistic answer is <b>about 6 steps</b>."
      ],
      "trap": "'Insert card and take cash' sounds like 2 steps but hides many in between. Always enumerate every decision and action separately."
    },
    "q78": {
      "steps": [
        "The goal is to isolate the fault systematically.",
        "Option B: first check whether other devices connect (this tells you if the problem is the phone or the router/network). If others connect, the fault is in the phone's settings. If they don't, restart the router. Each test answers one question.",
        "Changing everything at once (Option C) or assuming a cause (Option D) does not isolate anything."
      ]
    },
    "q79": {
      "steps": [
        "The pipeline is: write draft → edit → publish.",
        "Publishing requires the draft to exist. Without a draft there is nothing to edit or publish.",
        "'<b>Writing the draft</b>' must come before publishing — it is the foundational dependency."
      ],
      "trap": "Sharing on social media and reading comments happen after publishing — they cannot be prerequisites. Counting views also happens after the post is live."
    },
    "q80": {
      "steps": [
        "To go as fast as possible, split the work so all four people work in <b>parallel</b>.",
        "Dividing 100 pages among 4 people = 25 pages each. All work simultaneously, then totals are combined.",
        "Option B achieves the maximum parallelism."
      ],
      "trap": "Option A has everyone counting all 100 pages — that is slower (same total time as one person) and produces redundant work."
    },
    "q81": {
      "steps": [
        "Two tasks are independent if neither requires the other to be done first.",
        "'Toast the bread' and 'slice the tomato' are completely separate preparation actions — neither depends on the other. They can happen simultaneously.",
        "'Eat and make' are sequential (you must make it before eating). 'Slice bread and eat it' — you can't eat what you haven't finished making."
      ]
    },
    "q82": {
      "steps": [
        "A and B can run at the same time. A finishes at t=4 min; B finishes at t=2 min.",
        "C cannot start until BOTH are done → C starts at t=4 (when the slower of the two, A, finishes).",
        "C takes 3 min → finishes at 4+3 = <b>7 minutes</b>."
      ],
      "trap": "Adding A+B+C = 9 min ignores the parallelism. The bottleneck is A (4 min), not B (2 min)."
    },
    "q83": {
      "steps": [
        "Rules: socks before shoes; shirt before jacket.",
        "Option A: shoes before socks → <b>breaks rule 1</b>.",
        "Option B: socks → shoes ✓ (rule 1 ok), shirt → jacket ✓ (rule 2 ok) → <b>valid</b>.",
        "Option C has 'jacket' listed twice which is incoherent. Option D puts jacket before shirt — breaks rule 2."
      ]
    },
    "q84": {
      "steps": [
        "Cooking pasta involves: boil water, add pasta, stir, drain, add sauce.",
        "Boil water ✓, add pasta ✓, drain pasta ✓ — all directly part of the task.",
        "'Mow the lawn' has <b>nothing to do</b> with cooking pasta. It is not a subtask."
      ]
    },
    "q85": {
      "steps": [
        "Each room needs 2 tasks: sweep + mop.",
        "3 rooms × 2 tasks per room = <b>6 tasks</b> in total."
      ],
      "trap": "3 rooms alone is not the answer — each room has two distinct actions. Multiply, don't just read the room count."
    },
    "q86": {
      "steps": [
        "A beginner should start with the smallest achievable version of the goal.",
        "Option B ('successfully bake one simple loaf from a basic recipe') is concrete, achievable, and the natural first step.",
        "Opening a bakery, inventing a new bread, or winning a competition are all far beyond a beginner's immediate reach."
      ]
    },

    /* ── SYSTEMS & CAUSE-EFFECT THINKING (q87–q100) ── */
    "q87": {
      "steps": [
        "Read the bar values: Q1=40, Q2=55, Q3=50, Q4=80.",
        "Calculate each quarter-to-quarter change: Q1→Q2 +15, Q2→Q3 −5, Q3→Q4 +<b>30</b>.",
        "The biggest rise is +30, from <b>Q3 to Q4</b>."
      ],
      "trap": "Q4 has the tallest bar, but the question asks about the biggest rise between two consecutive quarters — that is the largest positive change, which is Q3→Q4."
    },
    "q88": {
      "steps": [
        "Read the values: 10, 20, 40, 80, 160 ms as page size roughly doubles.",
        "Each step roughly doubles the load time — the jumps get bigger and bigger in absolute terms.",
        "This is an accelerating ('growing faster and faster') trend."
      ],
      "trap": "'Doubles exactly every time' could be argued here, but the correct answer targets the general description: load time 'keeps roughly doubling — grows faster and faster'."
    },
    "q89": {
      "steps": [
        "The Inspect step catches faults before products leave the factory.",
        "Without Inspect, faulty items continue through the pipeline and are shipped.",
        "The most likely result: <b>faulty products may be shipped without being caught</b>."
      ],
      "trap": "Skipping Inspect doesn't speed up Cut, Weld, or Paint — those still run the same way. The only direct effect is lost quality control."
    },
    "q90": {
      "steps": [
        "If the main road is blocked, drivers naturally divert to the next available roads.",
        "More cars on nearby roads → those roads become <b>more congested</b> → journeys take longer.",
        "This is a classic cause-effect ripple through a network."
      ],
      "trap": "Option A ignores human behaviour. Option C is absurd. Option D is the opposite of reality — the closed road carries zero traffic."
    },
    "q91": {
      "steps": [
        "Interest is calculated on the <b>current balance</b>, which includes previously added interest.",
        "Year 1: balance grows by interest. Year 2: interest is calculated on the larger balance → balance grows by more. And so on.",
        "This is compound growth — the balance grows <b>faster over time</b>."
      ],
      "trap": "Option B describes simple interest (the same fixed amount each year). Compound interest earns interest on interest — the growth accelerates."
    },
    "q92": {
      "steps": [
        "The relay requires: runner 1 passes baton to runner 2, who passes it to runner 3.",
        "Runner 2 drops out → the baton cannot pass to runner 3. The chain is broken.",
        "Even though runners 1 and 3 are ready, <b>the team cannot complete the relay</b>."
      ],
      "trap": "Runner 3 being fine doesn't help — they never receive the baton. One broken link in a serial chain stops everything downstream."
    },
    "q93": {
      "steps": [
        "The recipe currently makes 4 servings. You want 8 — exactly twice as many.",
        "To scale up proportionally, <b>double every ingredient</b>.",
        "Halving would make 2 servings; changing only flour would unbalance the recipe."
      ]
    },
    "q94": {
      "steps": [
        "Inflow rate: 10 litres/min. Outflow rate: 4 litres/min.",
        "Net rate = 10 − 4 = <b>+6 litres/min</b> — the tank gains water every minute.",
        "Since the tank continually gains water, it will eventually <b>overflow</b>."
      ],
      "trap": "The tank doesn't drain — inflow is greater than outflow. There is no mechanism to stabilise the level."
    },
    "q95": {
      "steps": [
        "Read the bars: Mon=50, Tue=20, Wed=8, Thu=3.",
        "Each day the error count drops sharply: 50 → 20 → 8 → 3.",
        "This strongly suggests <b>the fix is working</b> — errors are falling rapidly."
      ],
      "trap": "The bars are getting shorter, not longer. The trend is clearly downward — errors are reducing, not staying constant or rising."
    },
    "q96": {
      "steps": [
        "A power cut removes electricity from everything connected to the mains.",
        "The fridge (electric), the lights (electric), and the Wi-Fi router (electric) all run on mains power.",
        "All three stop at once. A <b>battery torch</b> uses its own stored energy and keeps working."
      ]
    },
    "q97": {
      "steps": [
        "Writing a short letter is a task that cannot easily be split — all the ideas must come from one coherent train of thought.",
        "Assigning 10 people to write one letter creates coordination overhead: who writes which sentence, whose style wins, how do you merge 10 drafts?",
        "The task is not parallelisable; adding people adds <b>coordination cost</b> without proportionally reducing time."
      ],
      "trap": "Brook's Law: 'Adding more workers to a late software project makes it later.' Some tasks do not speed up with more people because coordination and communication grow with team size."
    },
    "q98": {
      "steps": [
        "The heater is so powerful it adds heat faster than the thermostat can switch it off.",
        "By the time the thermostat registers 20°C the room has already been heated past 20°C — the temperature <b>overshoots</b> the target.",
        "After the heater switches off, the room slowly cools back toward 20°C. This is 'overshoot then settle'."
      ],
      "trap": "The thermostat isn't broken — it switches off correctly at 20°C. The problem is the heater's power causes thermal lag: the room is already too warm when the thermostat acts."
    },
    "q99": {
      "steps": [
        "Larger images have bigger file sizes.",
        "Bigger file sizes take longer to transfer over the network.",
        "Result: pages take <b>longer to load</b> and use <b>more data</b> per visit."
      ],
      "trap": "Higher quality images do not make the code run faster — only smaller file sizes and faster servers do that. More data = slower load."
    },
    "q100": {
      "steps": [
        "The throughput of a pipeline is limited by its <b>slowest stage</b> (the bottleneck).",
        "Stage 1: 2 min/item, Stage 2: 9 min/item, Stage 3: 3 min/item.",
        "Stage 2 is the slowest — every item waits there the longest. Improving Stage 1 or 3 won't help until Stage 2 is faster.",
        "Improve <b>Stage 2</b> first."
      ],
      "trap": "It might seem logical to improve Stage 1 (the first step), but improving a non-bottleneck stage just creates a bigger queue in front of Stage 2. Always target the bottleneck."
    }
  }
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
