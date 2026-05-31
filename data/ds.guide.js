// Study guide explanations for the Data Science assessment.
// strategies: per-dimension how-to-approach text (HTML ok).
// questions: keyed by question id — steps[] (HTML ok) + optional trap string.
// The question prompt/options/answer come from data/ds.js (no duplication).
window.GUIDE = {
  strategies: {
    stats: "Always ask: does this number describe what's <b>typical</b>, or is it being pulled by an extreme value? The <b>mean</b> is sensitive to outliers; the <b>median</b> is not. When a dataset has a few very large or very small values, the median is almost always the more honest summary. Also watch for <b>variance</b> — two groups can share an identical average while having completely different patterns of consistency.",
    prob: "Convert wordy probability problems into <b>fractions of equally likely outcomes</b>, then apply the rules mechanically. For two events: if they share outcomes (like King AND Heart), use <b>inclusion-exclusion</b> — add, then subtract the overlap. For independent events in sequence, <b>multiply</b> the separate probabilities. And always remember: past results never change the next independent flip or roll — there is no 'due' outcome.",
    data: "Before reading any chart, <b>check the axes</b> — what is being measured, what is the scale, and does the y-axis start at zero? A truncated axis turns a tiny gap into a dramatic cliff. Then ask three questions for every claim: Is the sample <b>representative</b>? Could a <b>third variable</b> explain both things at once? Does the data actually <b>support the causal language</b> used in the headline?",
    logic: "Work through logic problems by <b>elimination</b> — rule out what is impossible first and the answer often becomes the only thing left. For series, compute the <b>differences between terms</b> (and sometimes the differences of the differences). For proportional reasoning, always check <b>which direction</b> the relationship goes before scaling: more workers finish a job faster, not slower.",
    math: "Percentage changes are <b>not symmetric</b> — a 25% rise followed by a 20% fall gets you back to the start, not plus 5%. Always apply percentage changes to the <b>current base</b>, not the original. For averages of rates (speeds, prices), the correct tool is often the <b>harmonic mean</b>, not the simple arithmetic average. When dealing with exponential growth, trace through each step of doubling — the final doubling is always equal to all previous growth combined."
  },
  questions: {
    /* ── STATISTICAL REASONING ── */
    "q1": {
      steps: [
        "Nine employees earn ₹30,000; one earns ₹3,00,000. The mean pulls toward the extreme: <b>₹57,000</b>.",
        "Not a single employee actually earns ₹57,000 — it is above every regular worker's pay.",
        "The <b>median</b> (middle value when sorted) is ₹30,000 — it describes what the 5th or 6th employee earns, which matches nine out of ten workers perfectly."
      ],
      trap: "The mean is not 'wrong', but it is a poor summary when one value is wildly different — here, the manager's salary alone accounts for most of the mean."
    },
    "q2": {
      steps: [
        "Month 1: revenue × 1.20. Month 2: that result × 1.20.",
        "Combined multiplier = 1.20 × 1.20 = <b>1.44</b>.",
        "1.44 means a <b>44% total increase</b> — the extra 4% comes from earning growth on last month's growth (compounding)."
      ],
      trap: "Adding 20% + 20% = 40% ignores compound growth. The second 20% is applied to a base that is already 20% larger, so you earn a small bonus on top."
    },
    "q3": {
      steps: [
        "Both teams average 150 runs — the mean is identical.",
        "Team A scored either 0 or 300 every match: <b>huge swings</b>, completely unpredictable.",
        "Team B scored between 140 and 160 every match: <b>small, consistent variation</b>. Same average; radically different reliability."
      ],
      trap: "Identical means do not imply identical performance. Variance (spread) is the crucial second number that the mean completely hides."
    },
    "q4": {
      steps: [
        "The student's normal level is around 60%. The 95% score was an <b>unusually lucky day</b> — an extreme at the top of their natural range.",
        "Extreme scores, whether lucky or unlucky, tend to be followed by scores closer to the person's true average. This is called <b>regression to the mean</b>.",
        "The 63% was just the student returning to normal — the praise almost certainly had <b>no causal effect</b>."
      ],
      trap: "It is tempting to invent a story (praise caused overconfidence) when the simpler, statistical explanation — regression to the mean — fully accounts for the observation."
    },
    "q5": {
      steps: [
        "Random selection is necessary but not sufficient — <b>sample size</b> also matters.",
        "With only 20 people, the margin of error is very large; the true figure could easily be anywhere from 40% to 90%.",
        "A reliable population estimate requires <b>hundreds or thousands</b> of responses to narrow the margin of error to a meaningful level."
      ],
      trap: "Random selection does not guarantee accuracy on its own. A small random sample can still produce a wildly inaccurate estimate."
    },
    "q6": {
      steps: [
        "This is <b>Simpson's Paradox</b>: a trend visible in every subgroup can reverse when the subgroups are combined.",
        "The key: one hospital treated far more patients overall, and the new drug was used mostly there — on harder-to-cure cases.",
        "That larger hospital's worse outcomes <b>dominate the combined total</b>, making the new drug look worse even though it outperforms the old drug within each hospital separately."
      ],
      trap: "Intuition says 'better in every group must mean better overall'. It does not — the size of each group and the mix of case severity can flip the aggregate result."
    },

    /* ── PROBABILITY & UNCERTAINTY ── */
    "q7": {
      steps: [
        "Kings: 4 cards. Hearts: 13 cards. Total if we just add: 4 + 13 = 17.",
        "But the <b>King of Hearts</b> is in both groups — we counted it twice. Subtract 1: 4 + 13 − 1 = <b>16</b>.",
        "Probability = <b>16/52</b>."
      ],
      trap: "This is the inclusion-exclusion principle. Any time two sets overlap, you must subtract the overlap once to avoid double-counting."
    },
    "q8": {
      steps: [
        "Instead of calculating 'at least one pair share', calculate the complement: the probability <b>no two people share</b> a birthday.",
        "With 30 people, this complement is surprisingly small (about 29%), meaning a shared birthday is likely <b>above 70%</b>.",
        "The probability exceeds 50% with just 23 people — our intuition underestimates how quickly pairwise comparisons multiply."
      ],
      trap: "We compare 30 people to 365 days and think 'that's sparse'. But 30 people generate 30×29/2 = 435 different pairs, each with a chance of matching."
    },
    "q9": {
      steps: [
        "First draw: 3 red out of 5 total → probability = <b>3/5</b>.",
        "Ball is kept out. Now 2 red remain out of 4 total → probability = <b>2/4 = 1/2</b>.",
        "Both red: 3/5 × 2/4 = 6/20 = <b>3/10</b>."
      ],
      trap: "Removing without replacement changes the denominator for the second draw. Using 3/5 × 3/5 (with-replacement) gives the wrong answer 9/25."
    },
    "q10": {
      steps: [
        "Initially, your door has a <b>1/3 chance</b> of hiding the prize. The other two doors together hold a 2/3 chance.",
        "The host always opens an empty door from the other two — that 2/3 probability is now concentrated entirely on the <b>one remaining door</b>.",
        "Switching gives you <b>2/3</b>; staying keeps you at <b>1/3</b>. Always switch."
      ],
      trap: "After the host opens a door, it feels like a 50-50 choice. It is not — the host's action was not random and it transfers probability to the other door."
    },
    "q11": {
      steps: [
        "Expected value per round = (probability of heads × gain) + (probability of tails × loss).",
        "= (1/2 × ₹100) + (1/2 × −₹50) = ₹50 − ₹25 = <b>₹25 per round</b>.",
        "Over 10 rounds: 10 × ₹25 = <b>₹250 total expected gain</b>."
      ],
      trap: "This is not a fair game — the gain (₹100) is double the loss (₹50), so each round has a positive expected value even though the coin is fair."
    },
    "q12": {
      steps: [
        "Picture <b>10,000 people</b>. About 100 have the disease (1 in 100); 9,900 do not.",
        "The test catches 95% of the 100 sick people → <b>95 true positives</b>. It wrongly flags 5% of 9,900 healthy people → <b>495 false positives</b>.",
        "Total positives ≈ 590. True positives = 95. So 95/590 ≈ <b>16%</b>. Most positives are false alarms."
      ],
      trap: "The test's 95% accuracy sounds impressive, but when a disease is rare, the large pool of healthy people generates far more false positives than the small pool of sick people generates true positives."
    },

    /* ── DATA CRITIQUE ── */
    "q13": {
      steps: [
        "The data shows a <b>correlation</b>: cities with more libraries have lower crime. That is a real pattern.",
        "But a third factor — <b>city wealth</b> — explains both simultaneously. Wealthy cities can afford to build libraries AND they tend to have lower crime for many other reasons.",
        "Building libraries does not necessarily cause the crime drop. Correlation without ruling out confounders is not causation."
      ],
      trap: "Always ask: is there a hidden third variable that could produce both trends at once? Here wealth is the obvious candidate."
    },
    "q14": {
      steps: [
        "The researcher only studied <b>successful</b> entrepreneurs — the people who survived long enough to be interviewed.",
        "Thousands of entrepreneurs who also 'trusted their gut' <b>failed and went home</b> — they were never sampled.",
        "This is classic <b>survivorship bias</b>: we see only the winners, so any trait they share appears to predict success."
      ],
      trap: "When you only study winners, every characteristic of winners looks like a success factor. The invisible failures are the crucial missing data."
    },
    "q15": {
      steps: [
        "At the proper 0–100 scale, Student A (98) and Student B (100) look almost identical — a <b>2-point gap</b>.",
        "Truncating the axis to start at 96 means that 2-point gap now occupies the <b>entire height</b> of the chart.",
        "The redesign makes a trivially small difference look dramatic, misleading anyone who does not inspect the axis carefully."
      ],
      trap: "A truncated y-axis is not automatically dishonest — it can help zoom in on genuine variation. But here it converts a 2% gap into a visually enormous difference."
    },
    "q16": {
      steps: [
        "Ice cream sales rise in summer. Drowning incidents rise in summer. Both respond to the <b>same cause</b>: hot weather.",
        "Hot weather → more people buy ice cream; hot weather → more people swim → more drowning risk.",
        "Ice cream and drowning are <b>correlated by a shared cause</b>, not by any direct link between them."
      ],
      trap: "When two things rise together, the instinct is to connect them. Always ask: could a third factor (season, weather, time of year) explain both?"
    },
    "q17": {
      steps: [
        "Only people who <b>visited the website</b> were surveyed. Customers who had a bad experience may have simply never returned.",
        "This creates <b>self-selection bias</b>: the people most motivated to respond are likely the satisfied ones.",
        "The CEO's claim overgeneralises from a non-representative sample to all customers."
      ],
      trap: "A large sample (5,000) does not cure a biased sampling method. Many surveys still miss the people most relevant to the question."
    },
    "q18": {
      steps: [
        "The 50% figure is mathematically correct: risk falls from 2/10,000 to 1/10,000, which is halved.",
        "But the <b>absolute risk reduction</b> is just 1 person per 10,000 per year — tiny.",
        "Headlines quoting <b>relative risk reduction</b> (50%) can be technically true yet profoundly misleading when the baseline risk is already very small."
      ],
      trap: "Relative risk reduction always sounds bigger than absolute risk reduction. Ask 'how many fewer cases per thousand people?' to judge real-world impact."
    },

    /* ── ANALYTICAL LOGIC ── */
    "q19": {
      steps: [
        "Arjun does not like chess <b>and</b> does not like cricket → Arjun must like <b>cooking</b>.",
        "Cooking is taken. Bina does not like cricket → Bina must like <b>chess</b>.",
        "Chess and cooking are taken. Chetan does not like cooking (already taken anyway) → Chetan gets <b>cricket</b>."
      ]
    },
    "q20": {
      steps: [
        "Doubling every year for 3 years means the original was multiplied by 2 × 2 × 2 = <b>8</b>.",
        "To reverse: divide ₹80,000 by 8 = <b>₹10,000</b>.",
        "Check: ₹10,000 → ₹20,000 → ₹40,000 → ₹80,000. Correct."
      ],
      trap: "A common error is dividing by 2×3=6 (linear thinking). Doubling three times is multiplying by 2³=8, not 6."
    },
    "q21": {
      steps: [
        "The downloads are: 100, 150, 200, 250, 300.",
        "Each month adds exactly <b>50 more downloads</b> than the month before — a fixed, constant jump.",
        "A fixed amount added each step is the definition of <b>linear growth</b>. Exponential growth would multiply each month, giving 100, 200, 400, 800…"
      ],
      trap: "The chart rises steadily, which can look like exponential. But count the actual jumps: +50, +50, +50, +50 — equal steps mean linear."
    },
    "q22": {
      steps: [
        "People drive mostly <b>near their homes</b> — commuting, errands, school runs. So the vast majority of all kilometres driven are within 16 km of home.",
        "If 90% of driving happens near home, we would expect roughly 90% of accidents there — <b>not because it is more dangerous</b>, but because of exposure.",
        "The correct measure of danger is <b>accidents per kilometre driven</b>, not total accident count."
      ],
      trap: "Absolute counts always favour the place where the activity happens most. You need a rate (accidents per km) to compare risk fairly."
    },
    "q23": {
      steps: [
        "We need a <b>consistent pattern</b> across many students, not anecdotes from a few.",
        "Interviewing a handful of top scorers introduces selection bias; asking an expert gives opinion not data; one student is too small a sample.",
        "Collecting sleep hours and exam scores from <b>a large, diverse group</b> and analysing the pattern is the only approach that controls for individual variation."
      ]
    },
    "q24": {
      steps: [
        "Total work = 8 workers × 6 days = <b>48 worker-days</b>.",
        "The same work must now be done in 4 days: workers needed = 48 ÷ 4 = <b>12 workers</b>.",
        "Check: 12 × 4 = 48 worker-days. Correct."
      ],
      trap: "Halving the time does not mean adding a fixed number of workers — you must double the workforce (8 → 16 is wrong; recalculate from total work)."
    },

    /* ── MATHEMATICAL INTUITION ── */
    "q25": {
      steps: [
        "1,000 to 1,000,000 is a <b>1,000-fold increase</b> over 100 years.",
        "Linear growth would add the same number each year — impossible since that number would have to be ~9,990 per year, yet the town started with only 1,000.",
        "Growth that compounds on itself — the same <b>percentage added each year</b> — is exponential. A ~7% annual rate compounds to ×1,000 over 100 years."
      ],
      trap: "Logarithmic growth is the opposite — it slows down. This town grew dramatically over time, which means it must be exponential."
    },
    "q26": {
      steps: [
        "If the algae <b>doubles every day</b>, then one day before Day 30 it covered <b>half the lake</b>.",
        "Day 29: half-covered. Day 30: doubles → fully covered.",
        "The answer is <b>Day 29</b>."
      ],
      trap: "Instinct says halfway through 30 days = Day 15. But exponential growth means most of the area was covered in the last few doublings — the final day alone adds as much as all previous days combined."
    },
    "q27": {
      steps: [
        "Rise: ₹1,000 → ₹1,250. Increase = ₹250. 250 ÷ 1,000 = <b>25% rise</b>.",
        "Fall: ₹1,250 → ₹1,000. Decrease = ₹250. 250 ÷ 1,250 = <b>20% fall</b>.",
        "The <b>base changes</b>: the fall is calculated on the higher price, so a smaller percentage undoes the same absolute amount."
      ],
      trap: "It feels like a symmetric 25% up and 25% down should cancel. But the percentage fall is calculated on the new (higher) base, so it is always a smaller percentage."
    },
    "q28": {
      steps: [
        "Time for first leg: 60 km ÷ 30 km/h = <b>2 hours</b>. Time for return: 60 km ÷ 60 km/h = <b>1 hour</b>.",
        "Total distance: 120 km. Total time: 3 hours.",
        "Average speed = 120 ÷ 3 = <b>40 km/h</b>."
      ],
      trap: "Averaging the speeds (30 + 60) / 2 = 45 km/h is wrong because equal distances — not equal times — were spent at each speed. Calculate from total distance and total time."
    },
    "q29": {
      steps: [
        "Start with ₹100. After 30% off: ₹100 × 0.70 = <b>₹70</b>.",
        "After a further 20% off the discounted price: ₹70 × 0.80 = <b>₹56</b>.",
        "Total discount = ₹100 − ₹56 = ₹44, so <b>44%</b> off the original."
      ],
      trap: "Adding 30% + 20% = 50% ignores that the second discount is applied to the already-reduced price. Each successive percentage operates on a smaller base."
    },
    "q30": {
      steps: [
        "Each of 6 people shakes hands with the other 5 → 6 × 5 = 30 'handshake events'.",
        "But each handshake is shared between <b>two people</b>, so it gets counted twice in that total.",
        "30 ÷ 2 = <b>15 handshakes</b>. (Formula: n(n−1)/2 = 6×5/2 = 15.)"
      ],
      trap: "Multiplying 6 × 5 = 30 double-counts: when A shakes B's hand, it appears once from A's list and once from B's list."
    },

    /* ── STATISTICAL REASONING q31–q44 ── */
    "q31": {
      steps: [
        "Add the five scores: 4 + 6 + 8 + 10 + 12 = <b>40</b>.",
        "Divide by the number of scores: 40 ÷ 5 = <b>8</b>."
      ]
    },
    "q32": {
      steps: [
        "The numbers are already sorted: 3, 7, 9, 12, 20.",
        "Five values → the middle (3rd) value is the median: <b>9</b>."
      ],
      trap: "Don't calculate an average — just find the literal middle value in the sorted list."
    },
    "q33": {
      steps: [
        "Set A = {5, 5, 5, 5}: every value is identical — <b>zero spread</b>.",
        "The other sets all contain different values (ranging from 1 to 16, or 0 to 10, or 2 to 10).",
        "Zero spread is the maximum consistency — <b>Set A</b> wins."
      ]
    },
    "q34": {
      steps: [
        "The five scores sorted: 50, 52, 54, 56, 1000. The mean = (50+52+54+56+1000)/5 = 1212/5 = <b>242.4</b> — massively inflated.",
        "The <b>median</b> is the 3rd value = <b>54</b> — unchanged by the outlier.",
        "The median is resistant to extreme values because it only depends on the middle position, not the size of every number."
      ],
      trap: "The mean is pulled toward 1000 and gives a value (242) that describes none of the real students. The median stays anchored near the true cluster."
    },
    "q35": {
      steps: [
        "The existing mean is 50 and applies to, say, n values. Adding 500 adds a large number to the sum, pulling the mean noticeably upward.",
        "The median is the middle value. Adding one extreme value shifts the middle position by at most one step — a tiny effect.",
        "Result: <b>mean rises noticeably; median barely moves</b>."
      ],
      trap: "The mean weights every value equally, so one outlier can move it a lot. The median depends only on rank order, so one new extreme barely shifts it."
    },
    "q36": {
      steps: [
        "If most incomes were similar, mean ≈ median.",
        "When mean > median, it means a few very <b>large values</b> are pulling the mean up without affecting the median much.",
        "This is the signature of a <b>right-skewed</b> distribution — a small number of very high earners drag the mean well above what a typical person earns."
      ],
      trap: "Most people earn below the mean in this scenario — not above it. High earners skew the average upward for everyone."
    },
    "q37": {
      steps: [
        "Standard deviation measures how far typical values stray from the mean.",
        "A <b>small standard deviation</b> means most daily outputs are close to 100.",
        "Think of it as a tight cluster around 100 — very predictable, very consistent output."
      ],
      trap: "Small standard deviation means low variability, not low output. The average is still 100."
    },
    "q38": {
      steps: [
        "Basketball players are selected for height — a <b>biased</b> sample.",
        "Early arrivers and volunteers are also self-selected — both introduce bias.",
        "Only <b>100 students chosen at random across all year groups</b> gives every student an equal chance of inclusion, producing an unbiased estimate."
      ],
      trap: "Convenience samples (first arrivals, volunteers) systematically exclude students who wouldn't show up early or who dislike being measured."
    },
    "q39": {
      steps: [
        "Both polls use random sampling, so the method is the same.",
        "The 10-person poll could easily produce 70% by chance even if the true figure is 50% — the margin of error is huge.",
        "A <b>2,000-person poll</b> has a much smaller margin of error; the 52% figure is far more reliable as a population estimate."
      ],
      trap: "A higher percentage in a small poll does not make it more trustworthy. Sample size determines how reliable the estimate is."
    },
    "q40": {
      steps: [
        "Student A: 80, 80, 80, 80, 80 — mean 80, <b>zero variation</b>.",
        "Student B: 40, 70, 80, 90, 120 — mean 80, but scores range from 40 to 120.",
        "Equal averages hide very different <b>consistency</b>. Student A is perfectly predictable; Student B is highly variable."
      ],
      trap: "Same mean does not mean same performance profile. Always ask about the spread, not just the average."
    },
    "q41": {
      steps: [
        "The average of a count can be a non-integer even when each individual count must be a whole number.",
        "For example: 2 families with 2 kids and 1 family with 3 kids → average = 7/3 = 2.33.",
        "The report is correct — fractional averages of count data are <b>perfectly valid statistics</b>."
      ],
      trap: "Averages describe the overall level of a population, not any individual family. A 2.4 average is meaningful even though no family has 0.4 of a child."
    },
    "q42": {
      steps: [
        "Adding 5 to every score shifts the entire distribution <b>upward by 5</b>.",
        "The gap between the highest and lowest scores: if originally (high − low) = d, then after adding 5 to both, (high+5) − (low+5) = d. <b>Unchanged.</b>",
        "Uniform shifts move the whole set; they do not stretch or compress it."
      ],
      trap: "It is tempting to think 'adding 5 increases the spread'. Spread is about differences between values, not their absolute size."
    },
    "q43": {
      steps: [
        "4 fastest: average 30s → total time = 4 × 30 = <b>120s</b>.",
        "6 slowest: average 50s → total time = 6 × 50 = <b>300s</b>.",
        "All 10 swimmers: total = 120 + 300 = 420s. Mean = 420 ÷ 10 = <b>42s</b>."
      ],
      trap: "Averaging the two averages (30 + 50) / 2 = 40 ignores that the groups are different sizes (4 vs 6). You must weight by group size."
    },
    "q44": {
      steps: [
        "Most users stay under 1 minute — the <b>distribution is right-skewed</b> by a small number of very long sessions.",
        "Those long sessions (hours) inflate the mean dramatically, pushing it to 8 minutes when the typical user experience is under 1 minute.",
        "The <b>median session length</b> would be far lower and would better describe what a typical user experiences."
      ],
      trap: "An 8-minute average is not wrong mathematically, but it misrepresents typical behaviour when outliers dominate the calculation."
    },

    /* ── PROBABILITY & UNCERTAINTY q45–q58 ── */
    "q45": {
      steps: [
        "A fair coin has two equally likely outcomes: heads or tails.",
        "Probability of heads = <b>1 out of 2 = 1/2</b>."
      ]
    },
    "q46": {
      steps: [
        "A six-sided die has outcomes 1 through 6 — six equally likely results.",
        "Results greater than 4: {5, 6} → <b>2 outcomes</b> out of 6.",
        "Probability = 2/6 = <b>1/3</b>."
      ]
    },
    "q47": {
      steps: [
        "Total marbles: 4 red + 6 green = 10.",
        "Probability of drawing red = 4 out of 10 = <b>4/10 = 2/5</b>."
      ],
      trap: "4/6 is the ratio of red to green, not the probability of drawing red from the whole bag."
    },
    "q48": {
      steps: [
        "All probabilities must add to 1 (certainty).",
        "P(no rain) = 1 − P(rain) = 1 − 0.3 = <b>0.7</b>."
      ]
    },
    "q49": {
      steps: [
        "The two flips are <b>independent</b> — multiply the separate probabilities.",
        "P(heads first) = 1/2. P(heads second) = 1/2.",
        "P(both heads) = 1/2 × 1/2 = <b>1/4</b>."
      ],
      trap: "2/4 and 1/4 look similar but only 1/4 is correct. There are 4 equally likely outcomes (HH, HT, TH, TT) and only one is HH."
    },
    "q50": {
      steps: [
        "The two dice are independent — multiply.",
        "P(first die = 6) = 1/6. P(second die = 6) = 1/6.",
        "P(both 6) = 1/6 × 1/6 = <b>1/36</b>."
      ]
    },
    "q51": {
      steps: [
        "Each coin flip is an <b>independent event</b>. The coin has no memory.",
        "Five previous heads provide zero information about the next flip.",
        "P(heads on next flip) is always exactly <b>1/2</b>."
      ],
      trap: "The gambler's fallacy: believing 'tails is due' or 'heads is on a roll'. Neither is true — independent events have no memory."
    },
    "q52": {
      steps: [
        "3 blue sections out of 8 equal sections total.",
        "Probability = <b>3/8</b>."
      ]
    },
    "q53": {
      steps: [
        "Even numbers on a die: {2, 4, 6} — 3 outcomes.",
        "Numbers greater than 4: {5, 6} — 2 outcomes.",
        "Overlap (both even AND > 4): {6} — 1 outcome.",
        "Union = 3 + 2 − 1 = <b>4 outcomes</b> out of 6 = <b>4/6 = 2/3</b>."
      ],
      trap: "Simply adding 3/6 + 2/6 = 5/6 double-counts the 6. Apply inclusion-exclusion: subtract the overlap (1/6)."
    },
    "q54": {
      steps: [
        "You own 5 tickets out of 200 total.",
        "Probability of winning = <b>5/200 = 1/40</b>."
      ],
      trap: "5/195 would be wrong — your tickets compete with all 200, not just the other 195."
    },
    "q55": {
      steps: [
        "Expected winnings = (1/5 × ₹40) + (4/5 × ₹0) = ₹8.",
        "Subtract the cost to play: ₹8 − ₹10 = <b>−₹2</b>.",
        "On average you lose ₹2 per play — a small but consistent loss."
      ],
      trap: "Expected value includes the cost to play. Many people calculate the prize value correctly but forget to subtract the entry fee."
    },
    "q56": {
      steps: [
        "Use the complement: P(at least one 6) = 1 − P(no 6 on either die).",
        "P(no 6 on one die) = 5/6. P(no 6 on both dice) = 5/6 × 5/6 = 25/36.",
        "P(at least one 6) = 1 − 25/36 = <b>11/36</b>."
      ],
      trap: "Adding 1/6 + 1/6 = 2/6 = 1/3 double-counts the outcome where both dice show 6. The complement method avoids this."
    },
    "q57": {
      steps: [
        "P(first pick is good) = 5 out of 6.",
        "One good bulb removed. P(second pick is also good) = 4 out of 5 remaining.",
        "P(neither is faulty) = 5/6 × 4/5 = 20/30 = <b>2/3</b>."
      ],
      trap: "Using 5/6 × 5/6 = 25/36 treats the draws as independent (with replacement). Removing without replacement changes the denominator for the second draw."
    },
    "q58": {
      steps: [
        "Rate of false flags: 1 in 1,000 good emails incorrectly marked as spam.",
        "Out of 5,000 good emails: 5,000 × (1/1,000) = <b>5 emails</b> wrongly flagged.",
        "A small rate applied to a moderate pool still produces a small absolute number."
      ],
      trap: "It is easy to misread '1 in 1,000' as 1% and calculate 50. But 1/1,000 = 0.1%, and 0.1% of 5,000 = 5."
    },

    /* ── DATA CRITIQUE q59–q72 ── */
    "q59": {
      steps: [
        "Read the bar heights: Mon = 20, Tue = 35, <b>Wed = 50</b>, Thu = 30.",
        "The tallest bar is Wednesday at <b>50 units</b>."
      ]
    },
    "q60": {
      steps: [
        "Visitor counts: 200, 260, 320, 380, 440.",
        "Each month is higher than the last — a consistent, <b>steady upward trend</b>."
      ]
    },
    "q61": {
      steps: [
        "Chart values: A = 40, B = 80, C = 60, D = 30.",
        "Top scorer: B = 80. Lowest scorer: D = 30.",
        "Difference = 80 − 30 = <b>50 runs</b>."
      ]
    },
    "q62": {
      steps: [
        "Daily sign-ups: Day 1 = 10, Day 2 = 12, Day 3 = 30, Day 4 = 33, Day 5 = 35.",
        "Day-to-day jumps: +2, <b>+18</b>, +3, +2.",
        "The biggest single jump is from <b>Day 2 to Day 3</b> (+18)."
      ],
      trap: "Don't just look for the tallest bar — compute the actual change between each consecutive pair of days."
    },
    "q63": {
      steps: [
        "Quarterly revenues: Q1 = 10, Q2 = 20, Q3 = 30, Q4 = 40. Total = <b>100</b>.",
        "Q4 share = 40/100 = <b>40%</b>."
      ],
      trap: "Because Q4 = 40 and total = 100, the fraction is 40/100 = 40%, not 25% (which would assume equal quarters)."
    },
    "q64": {
      steps: [
        "Product A = 25 units. Product B = 100 units.",
        "Ratio = 100 ÷ 25 = <b>4 times</b>."
      ]
    },
    "q65": {
      steps: [
        "Temperature readings: 15, 22, 28, 22, 15.",
        "Rises from 15 to a <b>peak of 28</b> in the middle, then falls back to 15.",
        "The description is: peaked in the middle, then returned to its starting level."
      ]
    },
    "q66": {
      steps: [
        "Last year: ₹50k. This year: ₹60k. Actual increase = ₹10k.",
        "Percentage change = 10/50 × 100 = <b>20%</b>.",
        "Doubling would require ₹100k. The headline 'doubled' is <b>wildly wrong</b>."
      ],
      trap: "Always calculate the actual percentage change from the chart data. A 20% rise sounds modest compared to 'doubled' — that contrast is the whole point."
    },
    "q67": {
      steps: [
        "At true scale (0–100), Team X = 95 and Team Y = 100 look nearly the same — a 5-point gap in a 100-point range.",
        "Starting the axis at 90 means the chart height represents only a 10-point range. A 5-point gap now fills <b>half the chart</b>.",
        "The visual impression of difference is dramatically exaggerated by the truncated axis."
      ],
      trap: "A non-zero axis is sometimes legitimate (to show fine variation), but it must be read critically — the eye perceives relative bar height, not the absolute scale."
    },
    "q68": {
      steps: [
        "The claim is that coffee <b>causes</b> long life. But this is based on correlation data.",
        "A likely explanation: wealthier, healthier people may both drink more coffee and live longer — <b>confounding by a third variable</b>.",
        "Before inferring causation, rule out all plausible confounders."
      ],
      trap: "Coffee might or might not help health, but correlation alone cannot establish that. The most important question is always: what else differs between the groups?"
    },
    "q69": {
      steps: [
        "A 200% increase means the quantity grew by <b>two times itself</b>: new = old + 200% of old = old × (1 + 2.00).",
        "1,000 × 3 = <b>3,000 viewers</b>.",
        "Note: '200% more' = tripled total; '200% of original' would also equal 2,000 (a 100% increase)."
      ],
      trap: "200% increase ≠ 200% of original. 'Grew by 200%' means you add 200% of the base (2 × 1,000 = 2,000) to the original (1,000) → 3,000."
    },
    "q70": {
      steps: [
        "Revenue and <b>profit</b> are different: profit = revenue − costs.",
        "If costs grow faster than revenue (e.g., revenue +₹10/month but costs +₹20/month), the company loses more money each month even as revenue rises.",
        "The chart shows only one side of the ledger. A company can be growing revenue <b>and</b> losing money simultaneously."
      ],
      trap: "Revenue rising = growing income from sales. But it says nothing about how much is being spent. The two are entirely compatible."
    },
    "q71": {
      steps: [
        "The claim sounds authoritative but is vague on two key points.",
        "First: how many dentists were surveyed? A cherry-picked 10 is very different from 10,000.",
        "Second: could they recommend <b>more than one</b> brand? If so, 9 out of 10 recommending this brand could simultaneously recommend several competitors — proving little."
      ],
      trap: "Marketing statistics often omit sample size and survey design. Both determine whether a statistic is informative or meaningless."
    },
    "q72": {
      steps: [
        "The chart shows accidents falling: 50, 48, 30, 28, 25 — a real decline.",
        "But correlation with the sign's installation is not causation. Other things may have changed: better lighting, reduced speed limits, seasonal traffic, or simply <b>regression to the mean</b> after an unusually bad period.",
        "Without a control group or isolation of the sign's effect, you cannot attribute the drop to the sign."
      ],
      trap: "Post-hoc reasoning: 'X happened, then Y improved, so X caused Y.' Many things change simultaneously; the sign may be entirely incidental."
    },

    /* ── ANALYTICAL LOGIC q73–q86 ── */
    "q73": {
      steps: [
        "The series 2, 4, 6, 8 increases by <b>2 each time</b>.",
        "Next: 8 + 2 = <b>10</b>."
      ]
    },
    "q74": {
      steps: [
        "Series: 3, 6, 12, 24. Each term is <b>doubled</b>.",
        "Next: 24 × 2 = <b>48</b>."
      ]
    },
    "q75": {
      steps: [
        "Apple, Banana, and Mango are all <b>fruits</b>.",
        "Carrot is a <b>vegetable</b> — it does not belong with the others."
      ]
    },
    "q76": {
      steps: [
        "'All cats are animals' places cats inside the animals group.",
        "'Some animals are black' means some members of the animals group are black.",
        "Cats are animals, but we don't know if any of those black animals are cats — the overlap might not include cats at all. <b>No firm conclusion</b> about black cats can be drawn."
      ],
      trap: "'Some animals are black' + 'all cats are animals' does not imply any cats are black. The black animals could all be dogs, crows, etc."
    },
    "q77": {
      steps: [
        "Each letter is replaced by its <b>position in the alphabet</b> (A=1, B=2, C=3…).",
        "C = 3, A = 1, B = 2.",
        "CAB → <b>3-1-2</b>."
      ]
    },
    "q78": {
      steps: [
        "Series: 1, 4, 9, 16, 25. These are <b>perfect squares</b>: 1², 2², 3², 4², 5².",
        "Next: 6² = <b>36</b>."
      ]
    },
    "q79": {
      steps: [
        "A glove is worn on a <b>hand</b> — it covers and protects the hand.",
        "The corresponding item that is worn on a <b>foot</b> and covers/protects it is a <b>shoe</b>.",
        "(A sock also covers the foot but a shoe is the closer functional parallel to a glove.)"
      ],
      trap: "A sock is a plausible answer but a glove provides structural protection and shape — the better analogy to a shoe, which does the same for the foot."
    },
    "q80": {
      steps: [
        "Ravi > Sam (Ravi is taller).",
        "Sam > Tom (Sam is taller).",
        "Therefore Ravi > Sam > Tom. <b>Tom is shortest</b>."
      ]
    },
    "q81": {
      steps: [
        "Departure: <b>14:45</b>. Journey: <b>1 hour 40 minutes</b>.",
        "Add 1 hour: 14:45 → 15:45. Add 40 minutes: 15:45 + 40 min = <b>16:25</b>."
      ]
    },
    "q82": {
      steps: [
        "5 machines make 5 widgets in 5 minutes → each machine makes <b>1 widget in 5 minutes</b>.",
        "100 machines each make 1 widget in 5 minutes → 100 widgets in <b>5 minutes</b>.",
        "The machines run in parallel; scaling equally leaves the time unchanged."
      ],
      trap: "The ratio of machines to widgets stays 1:1, so the time stays at 5 minutes. Only if you had fewer machines per widget would it take longer."
    },
    "q83": {
      steps: [
        "Series: 7, 14, 28, ?, 112. Each term is <b>doubled</b>.",
        "28 × 2 = <b>56</b>. Check: 56 × 2 = 112. Correct."
      ]
    },
    "q84": {
      steps: [
        "Store X may simply sell <b>far more tickets</b> than other stores — if it sells 80% of all tickets, it will naturally produce most winners.",
        "Winning at Store X is proportional to <b>market share</b>, not supernatural luck.",
        "To test 'luck', you would need to compare win rates (wins per ticket sold), not raw winner counts."
      ],
      trap: "Confusing absolute count with rate. More tickets sold → more winners, regardless of any luck factor."
    },
    "q85": {
      steps: [
        "Rule: shift each letter <b>forward by 1</b> in the alphabet.",
        "C → D, A → B, T → U.",
        "CAT → <b>DBU</b>."
      ]
    },
    "q86": {
      steps: [
        "Ravi finishes <b>1st</b> (stated directly). Sara is <b>last</b> (4th).",
        "Quan finishes <b>immediately after</b> Priya. Priya is not last (not Sara's position).",
        "The only slots left for Priya and Quan are 2nd and 3rd. So: Ravi, <b>Priya, Quan</b>, Sara."
      ],
      trap: "Work from the most constrained clues first (Ravi = 1st, Sara = last), then place the remaining pair using the adjacency rule."
    },

    /* ── MATHEMATICAL INTUITION q87–q100 ── */
    "q87": {
      steps: [
        "25% = 1/4.",
        "1/4 of 200 = 200 ÷ 4 = <b>50</b>."
      ]
    },
    "q88": {
      steps: [
        "10% of ₹800 = ₹800 × 0.10 = <b>₹80</b>.",
        "You save ₹80."
      ]
    },
    "q89": {
      steps: [
        "Ratio 1:2 → total parts = 1 + 2 = 3.",
        "Each part = ₹600 ÷ 3 = ₹200.",
        "Larger share (2 parts) = 2 × ₹200 = <b>₹400</b>."
      ],
      trap: "Don't split 600 into halves (₹300 each). The ratio is 1:2, so the total is split into 3 equal pieces."
    },
    "q90": {
      steps: [
        "The number was tripled to get 60. Reverse: 60 ÷ 3 = <b>20</b>.",
        "Check: 20 × 3 = 60. ✓"
      ]
    },
    "q91": {
      steps: [
        "Increase = ₹60 − ₹50 = ₹10.",
        "Percentage increase = (increase ÷ original) × 100 = (10 ÷ 50) × 100 = <b>20%</b>."
      ],
      trap: "The percentage is calculated relative to the <b>starting</b> value (₹50), not the final value. 10/60 ≈ 16.7% is wrong."
    },
    "q92": {
      steps: [
        "<b>Simple interest</b> earns the same amount each year — no compounding.",
        "Annual interest = ₹1,000 × 10% = ₹100.",
        "Over 3 years: ₹100 × 3 = <b>₹300</b>."
      ],
      trap: "₹331 would be the compound interest answer (1,000 × 1.1³ − 1,000). Simple interest is straightforward multiplication."
    },
    "q93": {
      steps: [
        "Rice per person: 600g ÷ 4 = 150g per person.",
        "For 6 people: 6 × 150g = <b>900g</b>."
      ]
    },
    "q94": {
      steps: [
        "Rate: ₹12 ÷ 3 pencils = ₹4 per pencil.",
        "7 pencils: 7 × ₹4 = <b>₹28</b>."
      ]
    },
    "q95": {
      steps: [
        "Speed = 150 km ÷ 2 h = <b>75 km/h</b>.",
        "In 5 hours at the same speed: 75 × 5 = <b>375 km</b>."
      ]
    },
    "q96": {
      steps: [
        "'Buy 1 get 1 free' on two items means you pay for 1 but get 2 — effectively <b>50% off</b> per item.",
        "'40% off each' gives you 40% off per item.",
        "<b>50% off beats 40% off</b> — buy 1 get 1 free is the better deal when buying two."
      ],
      trap: "The comparison only works when you're actually buying two. If you only want one item, 40% off may be better since the free item has no value."
    },
    "q97": {
      steps: [
        "Sequence: 1, 2, 4, 8, 16, 32, <b>64</b>.",
        "Each term doubles. The 7th term = 2^(7−1) = 2^6 = <b>64</b>."
      ],
      trap: "2^7 = 128 is the 8th term, not the 7th. When the first term is 1 = 2^0, the 7th term is 2^6 = 64."
    },
    "q98": {
      steps: [
        "Start: ₹100 (use 100 for easy arithmetic). Fall 50%: ₹100 × 0.50 = <b>₹50</b>.",
        "Rise 50% from ₹50: ₹50 × 1.50 = <b>₹75</b>.",
        "Final price ₹75 vs original ₹100 → <b>25% lower</b> than the original."
      ],
      trap: "The 50% rise is applied to the reduced price, not the original. So the rise cannot fully undo the fall — you always end up below the starting point."
    },
    "q99": {
      steps: [
        "Pipe A fills 1/4 of the tank per hour. Pipe B fills 1/6 per hour.",
        "Together per hour: 1/4 + 1/6 = 3/12 + 2/12 = <b>5/12</b> of the tank.",
        "Time to fill = 1 ÷ (5/12) = 12/5 = <b>2.4 hours</b>."
      ],
      trap: "Adding the times (4 + 6 = 10, then dividing by 2 = 5) is wrong. You must add the <b>rates</b> (fractions per hour), not the times."
    },
    "q100": {
      steps: [
        "Let the annual growth rate be r. After 2 years: ₹200 × (1 + r)² = ₹242.",
        "(1 + r)² = 242 ÷ 200 = <b>1.21</b>.",
        "√1.21 = 1.10, so r = <b>10%</b> per year."
      ],
      trap: "A simple linear approach (242 − 200 = 42, 42/2/200 = 10.5%) gives the wrong answer. Compound growth requires taking the square root, not dividing the total growth by 2."
    }
  }
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
