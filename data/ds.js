// Auto-generated assessment data for "ds". Edit here to change this test.
window.ASSESSMENT = {
  id: "ds",
  title: "Data Science — Aptitude Check",
  dot: "DS",
  brandName: "Data Science Aptitude Check",
  loginIntro: "A short, gently-timed, <b>just-for-fun</b> set of questions exploring the kinds\n        of thinking Data Science depends on — statistical reasoning, probability, spotting\n        misleading data, analytical logic, and mathematical intuition. It is <b>not</b> a\n        syllabus exam, and <b>not</b> an official assessment of any kind.",
  theme: { accent: "#4f9cf9", accent2: "#7c5cff" },
  config: {
  credentials: {
    "student": { password: "learn2025", role: "student", name: "Student" },
    "mentor":  { password: "mentor2025", role: "admin",  name: "Mentor"  }
  },
  rapidMs: 3000,
  nearDeadlineSec: 6,
  defaultTimerSec: 55,
  bands: { strong: 75, promising: 55 },
  criticalWeakPct: 40,
  dims: {
    stats: { label:"Statistical Reasoning",
      means:"understanding how data summarises, how averages can mislead, and how a single outlier changes everything — the foundation of all data analysis.",
      improve:"Khan Academy 'Statistics &amp; Probability'. Focus on mean vs median, what variance signals, and how outliers distort averages." },
    prob:  { label:"Probability &amp; Uncertainty",
      means:"reasoning about chance and risk under uncertainty — core to ML models, A/B testing, and interpreting experimental results.",
      improve:"Practice conditional probability and Bayes' intuition. Look up the Monty Hall problem and the birthday paradox — both reveal how badly raw intuition can mislead." },
    data:  { label:"Data Critique",
      means:"spotting misleading charts, sampling bias, and unjustified conclusions — what separates a careful analyst from a careless one.",
      improve:"Read 'How to Lie with Statistics' (Darrell Huff — short and sharp). For every chart you see, ask: what is the axis hiding? Who was sampled? Does correlation imply cause here?" },
    logic: { label:"Analytical Logic",
      means:"breaking complex problems into clear steps and reasoning strictly from evidence — essential for designing studies and stress-testing conclusions.",
      improve:"Practice logic puzzles. Read about survivorship bias, regression to the mean, and the prosecutor's fallacy — each one changes how you read real-world claims." },
    math:  { label:"Mathematical Intuition",
      means:"comfort with percentages, ratios, compound growth, and proportional reasoning — the everyday toolkit for all data work.",
      improve:"Khan Academy Arithmetic through Pre-Algebra. Focus on percentage change (a rise and its reversal are not symmetrical), compound growth, and why averages of averages can mislead." }
  }
},
  bandText: {
  strong:{ pill:"good", title:"A strong set of answers",
    blurb:"Your answers show the kind of careful, data-aware thinking that Data Science relies on. Several tricky questions didn't catch you out — that's a good sign. Take this as friendly encouragement to explore the field further." },
  promising:{ pill:"warn", title:"A promising mix, with some gaps",
    blurb:"Good instincts on many questions, with a few types that tripped you up. Look at which areas scored lower and practise those specifically — the thinking patterns are learnable." },
  gaps:{ pill:"bad", title:"Several question types to practise",
    blurb:"A number of these questions didn't go your way this time. Data Science reasoning is a set of learnable habits — it gets significantly clearer with practice and exposure to the right examples." }
},
  bank: [
  /* ── STATISTICAL REASONING ── */
  {id:"q1", dim:"stats", difficulty:"easy", timer:45,
   prompt:"A company has 10 employees. Nine of them earn ₹30,000/month; the manager earns ₹3,00,000/month. The average salary works out to ₹57,000. Which figure best describes a 'typical' employee's pay?",
   options:["The average — ₹57,000",
            "The middle value when sorted — ₹30,000",
            "The highest salary — ₹3,00,000",
            "Any of these; they all describe the same thing"],
   answer:1},

  {id:"q2", dim:"stats", difficulty:"medium", timer:55,
   /* TRICKY — compounding: obvious answer is 40% */
   prompt:"A shop's revenue grew by 20% in January, then grew by another 20% in February. What is the total percentage growth over the two months combined?",
   options:["40%  — add the two monthly gains together",
            "44%",
            "42%",
            "38%"],
   answer:1},

  {id:"q3", dim:"stats", difficulty:"medium", timer:50,
   prompt:"Two cricket teams each played 10 matches. Team A's scores: 0, 0, 0, 0, 0, 300, 300, 300, 300, 300. Team B's scores: 150, 140, 160, 155, 145, 150, 160, 145, 155, 140. Both averaged 150 runs. What is the key difference?",
   options:["Nothing — same average means the same overall performance",
            "Team B is clearly the stronger team",
            "Team A is wildly inconsistent; Team B delivers steadily every match",
            "Team A must have easier opponents"],
   answer:2},

  {id:"q4", dim:"stats", difficulty:"hard", timer:55,
   /* TRICKY — regression to the mean: obvious answer is praise caused the dip */
   prompt:"A student usually scores around 60%. One day, by chance, they score 95% on a surprise test. After much praise, their very next test score is 63%. The teacher says: 'The praise made them overconfident.' What is the most statistically sound explanation?",
   options:["The praise caused the dip in performance",
            "The second test must have been harder",
            "Unusually high scores naturally drift back towards a person's normal level over time — this happens even without any outside cause",
            "The 95% result was probably a data error"],
   answer:2},

  {id:"q5", dim:"stats", difficulty:"easy", timer:45,
   prompt:"An interviewer surveys 20 randomly chosen shoppers at a mall and finds 65% prefer Brand X. Can you confidently conclude that '65% of all shoppers prefer Brand X'?",
   options:["No — 20 people is too small a sample to reliably represent all shoppers",
            "Yes — a clear majority finding is always reliable",
            "Yes — random selection alone makes a sample valid regardless of size",
            "No — shopper preferences are impossible to measure accurately"],
   answer:0},

  {id:"q6", dim:"stats", difficulty:"hard", timer:60,
   /* TRICKY — Simpson's paradox */
   prompt:"A new drug is tested at two hospitals. At both hospitals, it cures a higher percentage of patients than the old drug. Yet a combined report covering both hospitals together shows the old drug has a higher overall cure rate. How is this possible?",
   options:["It is impossible — better at both hospitals must mean better overall",
            "The drug company must have manipulated the numbers",
            "One hospital treated far more patients, and the new drug was used mainly there on harder-to-cure cases — their weight can flip the combined total",
            "The percentages were rounded differently at each hospital"],
   answer:2},

  /* ── PROBABILITY & UNCERTAINTY ── */
  {id:"q7", dim:"prob", difficulty:"medium", timer:50,
   /* TRICKY — inclusion-exclusion: obvious answer overcounts King of Hearts */
   prompt:"You draw one card from a shuffled standard 52-card deck. What is the probability of drawing a King OR a Heart?",
   options:["17/52  — there are 4 Kings and 13 Hearts, so 4 + 13",
            "16/52  — the King of Hearts is counted in both groups and must be subtracted once",
            "13/52  — just the Hearts",
            "4/52  — just the Kings"],
   answer:1},

  {id:"q8", dim:"prob", difficulty:"hard", timer:50,
   /* TRICKY — birthday paradox: obvious answer is "very low" */
   prompt:"In a room of 30 people, what is the probability that at least two of them share the same birthday?",
   options:["Very low — 30 people out of 365 possible birthdays makes it unlikely",
            "About 30%",
            "More likely than not — actually above 70%",
            "Exactly 30 ÷ 365"],
   answer:2},

  {id:"q9", dim:"prob", difficulty:"medium", timer:50,
   /* slightly tricky — without-replacement vs with-replacement */
   prompt:"A bag has 3 red balls and 2 blue balls. You draw one ball, keep it out, then draw a second. What is the probability that both balls are red?",
   options:["9/25  — three-fifths multiplied by three-fifths",
            "1/2",
            "2/5",
            "3/10  — three-fifths for the first draw, then two-quarters for the second"],
   answer:3},

  {id:"q10", dim:"prob", difficulty:"hard", timer:55,
   /* TRICKY — Monty Hall: obvious answer is "50-50, doesn't matter" */
   prompt:"You pick one of three closed doors. Behind one is a prize; the other two are empty. The host — who always knows what is behind each door — opens one of the other two to reveal it is empty, then asks if you want to switch to the remaining door. What gives you the best chance?",
   options:["Switch — it raises your probability of winning from 1/3 to 2/3",
            "Stay — it is now a 50-50 chance between the two remaining doors",
            "It makes no difference — switching and staying are equally good",
            "Switch only if you have a gut feeling about it"],
   answer:0},

  {id:"q11", dim:"prob", difficulty:"medium", timer:55,
   prompt:"A game pays you ₹100 if a coin lands heads, and costs you ₹50 if it lands tails. If you play 10 rounds, what is your expected total gain?",
   options:["₹0 — it is a fair coin, so you break even in the long run",
            "₹100",
            "₹250",
            "₹500"],
   answer:2},

  {id:"q12", dim:"prob", difficulty:"hard", timer:60,
   /* TRICKY — base-rate neglect: obvious answer is "95% — test is that accurate" */
   prompt:"A disease affects 1 in 100 people. A test correctly identifies sick people 95% of the time AND correctly clears healthy people 95% of the time. You test positive. Roughly what is the probability you actually have the disease?",
   options:["95%  — the test is 95% accurate, so a positive is almost certain",
            "About 50-50",
            "Around 16%",
            "Less than 1%"],
   answer:2},

  /* ── DATA CRITIQUE ── */
  {id:"q13", dim:"data", difficulty:"medium", timer:50,
   prompt:"Cities with more public libraries tend to have lower crime rates. A councillor concludes: 'Building more libraries will reduce crime.' What is the fundamental flaw?",
   options:["Libraries and crime are completely unrelated",
            "The study needs data from more cities to be valid",
            "Both could be driven by the same underlying factor — wealthier cities both fund libraries and happen to have lower crime",
            "Crime statistics are notoriously unreliable"],
   answer:2},

  {id:"q14", dim:"data", difficulty:"hard", timer:55,
   /* TRICKY — survivorship bias */
   prompt:"A researcher interviews 50 highly successful entrepreneurs. They all say: 'I trusted my gut instinct, not data.' The researcher concludes: 'Trusting gut instinct leads to success.' What is the key flaw?",
   options:["Successful people may genuinely not know what made them succeed",
            "50 is not a large enough sample of entrepreneurs",
            "Only successful entrepreneurs were interviewed — the far larger number who also trusted their gut and failed were never counted",
            "Entrepreneurs are known to exaggerate in interviews"],
   answer:2},

  {id:"q15", dim:"data", difficulty:"medium", timer:50,
   /* chart shows 98 vs 100 at true scale — question discusses truncation */
   prompt:"A bar chart compares two students' scores: 98 and 100 (shown below at a proper 0–100 scale). A newspaper reprints the same chart but starts the y-axis at 96 instead of 0, making Student B's bar appear three times as tall. What does that redesign do?",
   chart:barChart(["Student A","Student B"], [98,100], "score (0 → 100 scale)"),
   options:["The newspaper version is fine — it just magnifies the relevant range",
            "Starting the axis above zero makes a 2-point gap look like a massive difference",
            "Bar charts should not be used for scores above 50",
            "Student A should always be shown on the right"],
   answer:1},

  {id:"q16", dim:"data", difficulty:"easy", timer:45,
   /* correlation ≠ causation — ice cream / drowning */
   prompt:"A report shows that ice cream sales and the number of drowning incidents both rise together each summer. It concludes: 'Ice cream consumption may cause drowning.' What is the correct critique?",
   options:["Both are caused by the same third factor — hot weather drives people to buy ice cream AND to swim more. Correlation does not mean causation.",
            "The data must be wrong — ice cream clearly cannot affect swimming safety",
            "The study needs many more years of data before any conclusion is valid",
            "Drowning statistics are typically inaccurate"],
   answer:0},

  {id:"q17", dim:"data", difficulty:"medium", timer:50,
   /* self-selection bias in online survey */
   prompt:"An online survey of 5,000 visitors to a company's website finds 82% are satisfied with the service. The CEO announces: 'Over 80% of our customers are satisfied.' What is the main problem?",
   options:["5,000 responses is not a large enough sample",
            "Only website visitors responded — satisfied customers are more likely to engage; unhappy ones may simply leave and never respond",
            "Online surveys are never statistically valid",
            "82% is implausibly high for any company"],
   answer:1},

  {id:"q18", dim:"data", difficulty:"hard", timer:55,
   /* TRICKY — relative vs absolute risk */
   prompt:"A drug advertisement says: 'Our drug reduces your risk of this disease by 50%!' The fine print: without the drug, 2 in every 10,000 people get the disease per year; with the drug, 1 in 10,000 do. Should this headline impress you?",
   options:["Yes — a 50% risk reduction is always highly significant",
            "The 50% figure is technically correct but misleading — the actual benefit is just 1 fewer case per 10,000 people per year",
            "No — a drug must reduce risk by at least 80% to be clinically meaningful",
            "Yes, but only if the drug has no side effects"],
   answer:1},

  /* ── ANALYTICAL LOGIC ── */
  {id:"q19", dim:"logic", difficulty:"medium", timer:55,
   prompt:"Three friends each enjoy exactly one activity: chess, cricket, or cooking. Arjun does not like chess, and does not like cricket. Bina does not like cricket. Chetan does not like cooking. What does each person enjoy?",
   options:["Arjun: chess    Bina: cricket    Chetan: cooking",
            "Arjun: cricket    Bina: chess    Chetan: cooking",
            "Arjun: cooking    Bina: cricket    Chetan: chess",
            "Arjun: cooking    Bina: chess    Chetan: cricket"],
   answer:3},

  {id:"q20", dim:"logic", difficulty:"medium", timer:50,
   /* reverse exponential — people often just divide by 6 (2×3) instead of 2³ */
   prompt:"A shop's sales doubled every year for 3 years and reached ₹80,000 at the end of year 3. What were the sales before year 1 began?",
   options:["₹40,000",
            "₹10,000",
            "₹20,000",
            "₹26,667"],
   answer:1},

  {id:"q21", dim:"logic", difficulty:"medium", timer:50,
   /* TRICKY — linear vs exponential: chart makes it visually clear if read carefully */
   prompt:"An app's daily downloads over five months: 100, 150, 200, 250, 300. Which description is most accurate?",
   chart:lineChart([100, 150, 200, 250, 300], "daily downloads"),
   options:["Downloads double each month (exponential growth)",
            "Downloads grow by the same fixed amount each month (linear growth)",
            "Growth is accelerating — each monthly jump is larger than the last",
            "Growth is slowing down"],
   answer:1},

  {id:"q22", dim:"logic", difficulty:"hard", timer:55,
   /* TRICKY — base-rate of driving near home */
   prompt:"A road safety report states: '87% of all accidents occur within 16 km of the driver's home.' A journalist concludes: 'Driving near home is the most dangerous.' What is wrong with this conclusion?",
   options:["It is genuinely more dangerous to drive near home due to driver distraction",
            "Most driving happens close to home — so naturally, most accidents also happen there. Distance alone tells you nothing about risk per kilometre driven.",
            "Home environments distract drivers through familiarity",
            "Speed limits near homes should therefore be lower"],
   answer:1},

  {id:"q23", dim:"logic", difficulty:"easy", timer:50,
   prompt:"A researcher wants to find out whether more hours of sleep is linked to higher exam scores. Which approach gives the most reliable answer?",
   options:["Interview a handful of top-scoring students about how much they sleep",
            "Ask a sleep expert for their professional opinion",
            "Have one student sleep more for a week and check if their score improves",
            "Collect sleep hours and exam scores from a large, diverse group of students and look for a consistent pattern across all of them"],
   answer:3},

  {id:"q24", dim:"logic", difficulty:"medium", timer:55,
   prompt:"A project took 8 workers exactly 6 days to complete. The same project now needs to be done in 4 days. Assuming all workers are equally productive and the work can be divided freely, how many workers are needed?",
   options:["10 workers",
            "12 workers",
            "14 workers",
            "16 workers"],
   answer:1},

  /* ── MATHEMATICAL INTUITION ── */
  {id:"q25", dim:"math", difficulty:"easy", timer:45,
   prompt:"A town's population grows from 1,000 to 1,000,000 over 100 years. Which type of growth best describes this?",
   options:["Linear — the same number of people move in each year",
            "Random — populations do not follow patterns",
            "Logarithmic — it grew quickly at first, then nearly stopped",
            "Exponential — the town grows by roughly the same percentage each year, compounding over time"],
   answer:3},

  {id:"q26", dim:"math", difficulty:"hard", timer:50,
   /* TRICKY — lily-pad / doubling: obvious answer is Day 15 */
   prompt:"A patch of algae doubles in size every day. On day 30 it covers the entire lake. On which day did it cover exactly half the lake?",
   options:["Day 15 — halfway through the 30-day period",
            "Day 29",
            "Day 25",
            "Day 20"],
   answer:1},

  {id:"q27", dim:"math", difficulty:"medium", timer:55,
   /* TRICKY — percentage rise ≠ percentage fall */
   prompt:"A jacket's price rises from ₹1,000 to ₹1,250. Later it goes on sale and drops back down to ₹1,000. Which statement is correct?",
   options:["The rise and the fall are both 25% — they cancel out symmetrically",
            "The price rose 20% and then fell 25%",
            "The price rose 25% but fell only 20%",
            "The rise and fall must be equal since the price returned to where it started"],
   answer:2},

  {id:"q28", dim:"math", difficulty:"hard", timer:55,
   /* TRICKY — harmonic mean for average speed: obvious answer is 45 km/h */
   prompt:"You drive 60 km to a destination at 30 km/h, then return the same 60 km at 60 km/h. What is your average speed for the whole round trip?",
   options:["45 km/h  — the average of 30 and 60",
            "40 km/h",
            "50 km/h",
            "42 km/h"],
   answer:1},

  {id:"q29", dim:"math", difficulty:"medium", timer:55,
   /* TRICKY — successive discounts: obvious answer is 50% */
   prompt:"A shop first applies a 30% discount, then takes a further 20% off the already-discounted price. What is the total discount compared with the original price?",
   options:["50%  — just add the two discounts together",
            "44%",
            "46%",
            "48%"],
   answer:1},

  {id:"q30", dim:"math", difficulty:"medium", timer:55,
   /* TRICKY — handshakes: obvious answer is 6×5=30 (double-counts) */
   prompt:"At a meeting, every person shakes hands with every other person exactly once. There are 6 people. How many handshakes take place in total?",
   options:["30  — each of the 6 people shakes 5 hands, so 6 × 5",
            "15",
            "12",
            "36"],
   answer:1},

  /* ══════════ NEW QUESTIONS q31–q100 ══════════ */

  /* ── STATISTICAL REASONING (q31–q44) ── */
  {id:"q31", dim:"stats", difficulty:"easy", timer:45,
   prompt:"Five test scores are: 4, 6, 8, 10, 12. What is the mean (average) score?",
   options:["7","8","9","10"],
   answer:1},

  {id:"q32", dim:"stats", difficulty:"easy", timer:45,
   prompt:"The numbers 3, 7, 9, 12, 20 are sorted in order. What is the median (middle value)?",
   options:["7","9","10.2","12"],
   answer:1},

  {id:"q33", dim:"stats", difficulty:"easy", timer:45,
   prompt:"Which of these sets of numbers is the MOST consistent (least spread out)?",
   options:["5, 5, 5, 5","1, 4, 9, 16","0, 10, 0, 10","2, 6, 2, 10"],
   answer:0},

  {id:"q34", dim:"stats", difficulty:"medium", timer:50,
   prompt:"A class of 5 students scored: 50, 52, 54, 56, 1000 (one score was a typo). Which average is LEAST distorted by that one wrong value?",
   options:["The mean (add all, divide by 5)","The median (middle value)","The total sum","The largest value"],
   answer:1},

  {id:"q35", dim:"stats", difficulty:"medium", timer:50,
   prompt:"A dataset has mean 50 and median 50. A single new value of 500 is added. What most likely happens?",
   options:["The mean stays the same; the median stays the same",
            "The mean rises noticeably; the median barely moves",
            "The median rises noticeably; the mean barely moves",
            "Both the mean and median jump to about 500"],
   answer:1},

  {id:"q36", dim:"stats", difficulty:"medium", timer:50,
   prompt:"In a town, the MEAN income is far higher than the MEDIAN income. What does this most strongly suggest?",
   options:["Everyone earns about the same amount",
            "A small number of very high earners pull the mean upward",
            "Most people earn more than the mean",
            "The data must have been recorded incorrectly"],
   answer:1},

  {id:"q37", dim:"stats", difficulty:"medium", timer:50,
   prompt:"A factory's daily output is normally about 100 units. The standard deviation is described as 'small'. What does that tell you?",
   options:["Output varies wildly from day to day",
            "Output is usually very close to 100 each day",
            "The factory often produces zero units",
            "The average output is wrong"],
   answer:1},

  {id:"q38", dim:"stats", difficulty:"medium", timer:50,
   prompt:"You want to estimate the average height of all students in a large school. Which sample is most trustworthy?",
   options:["The 12 tallest players on the basketball team",
            "100 students chosen at random across all year groups",
            "The first 100 students who arrive early one morning",
            "Only students who volunteer because they like being measured"],
   answer:1},

  {id:"q39", dim:"stats", difficulty:"medium", timer:50,
   prompt:"A poll of 10 people finds 70% support a proposal. A poll of 2,000 people finds 52% support it. Which result should you trust more as an estimate of the whole population?",
   options:["The 10-person poll, because 70% is a clearer majority",
            "The 2,000-person poll, because a larger sample is more reliable",
            "Neither — sample size does not affect reliability",
            "The 10-person poll, because smaller groups are easier to measure"],
   answer:1},

  {id:"q40", dim:"stats", difficulty:"medium", timer:50,
   prompt:"Two students both average 80% over 5 tests. Student A scored 80 on every test. Student B scored 40, 70, 80, 90, 120. What distinguishes them?",
   options:["Nothing — equal averages mean equal performance",
            "Student A is far more consistent; Student B's scores swing widely",
            "Student B is clearly the better student",
            "Student A must have had easier tests"],
   answer:1},

  {id:"q41", dim:"stats", difficulty:"medium", timer:50,
   prompt:"A report says 'the average family in this area has 2.4 children'. A reader objects: 'No family can have 0.4 of a child, so the figure is nonsense.' Who is right?",
   options:["The reader — averages must be whole numbers when counting people",
            "The report — an average of counts can be a fraction even though each family has a whole number of children",
            "Neither — the average should have been rounded to 2",
            "The reader — the data was clearly miscalculated"],
   answer:1},

  {id:"q42", dim:"stats", difficulty:"hard", timer:55,
   prompt:"A teacher adds 5 marks to every student's score in a class. What happens to the spread (the gap between highest and lowest)?",
   options:["The spread increases by 5","The spread doubles","The spread stays exactly the same","The spread decreases by 5"],
   answer:2},

  {id:"q43", dim:"stats", difficulty:"hard", timer:55,
   prompt:"In a swimming class, the average lap time of the 4 fastest swimmers is 30s, and the average of the 6 slowest is 50s. What is the average lap time of all 10 swimmers?",
   options:["40s — the midpoint of 30 and 50",
            "42s",
            "44s",
            "45s"],
   answer:1},

  {id:"q44", dim:"stats", difficulty:"hard", timer:55,
   prompt:"A website's average session length is reported as 8 minutes. Most users actually stay under 1 minute, but a few leave a tab open for hours. What is misleading about quoting the 8-minute average?",
   options:["Nothing — the average is the best single summary here",
            "A handful of very long sessions inflate the mean, so 8 minutes describes almost nobody; the median would be far lower",
            "The average should be even higher than 8 minutes",
            "Session length cannot be measured reliably"],
   answer:1},

  /* ── PROBABILITY & UNCERTAINTY (q45–q58) ── */
  {id:"q45", dim:"prob", difficulty:"easy", timer:45,
   prompt:"You flip one fair coin. What is the probability it lands on heads?",
   options:["1/4","1/3","1/2","2/3"],
   answer:2},

  {id:"q46", dim:"prob", difficulty:"easy", timer:45,
   prompt:"You roll a normal six-sided die once. What is the probability of rolling a number greater than 4 (i.e. a 5 or 6)?",
   options:["1/6","1/3","1/2","2/3"],
   answer:1},

  {id:"q47", dim:"prob", difficulty:"easy", timer:45,
   prompt:"A bag holds 4 red and 6 green marbles. You draw one without looking. What is the probability it is red?",
   options:["2/5","1/2","3/5","4/6"],
   answer:0},

  {id:"q48", dim:"prob", difficulty:"easy", timer:45,
   prompt:"The probability of rain tomorrow is 0.3. What is the probability it does NOT rain?",
   options:["0.3","0.5","0.7","1.3"],
   answer:2},

  {id:"q49", dim:"prob", difficulty:"medium", timer:50,
   prompt:"You flip a fair coin twice. What is the probability of getting heads BOTH times?",
   options:["1/2","1/3","1/4","2/4"],
   answer:2},

  {id:"q50", dim:"prob", difficulty:"medium", timer:50,
   prompt:"You roll two normal dice. What is the probability that both show a 6?",
   options:["1/6","1/12","1/36","2/12"],
   answer:2},

  {id:"q51", dim:"prob", difficulty:"medium", timer:50,
   prompt:"A fair coin has just landed heads 5 times in a row. What is the probability the next flip is heads?",
   options:["Much less than 1/2 — tails is 'due'","Exactly 1/2 — each flip is independent","Much more than 1/2 — heads is on a streak","It cannot be calculated"],
   answer:1},

  {id:"q52", dim:"prob", difficulty:"easy", timer:45,
   prompt:"A spinner is split into 8 equal sections, 3 of them coloured blue. What is the probability of landing on blue in one spin?",
   options:["3/8","1/8","5/8","3/5"],
   answer:0},

  {id:"q53", dim:"prob", difficulty:"medium", timer:50,
   prompt:"You roll one die. What is the probability of getting an even number OR a number greater than 4?",
   options:["1/2","2/3","3/6","5/6"],
   answer:1},

  {id:"q54", dim:"prob", difficulty:"medium", timer:50,
   prompt:"A raffle sells 200 tickets and you buy 5. Only one ticket wins. What is your probability of winning?",
   options:["1/200","5/200","1/5","5/195"],
   answer:1},

  {id:"q55", dim:"prob", difficulty:"medium", timer:50,
   prompt:"A game costs ₹10 to play. You win ₹40 with probability 1/5, otherwise nothing. What is your expected gain per play (winnings minus cost)?",
   options:["−₹2 (a small loss on average)","+₹2","+₹8","₹0"],
   answer:0},

  {id:"q56", dim:"prob", difficulty:"hard", timer:55,
   prompt:"You roll two dice. What is the probability that AT LEAST one of them shows a 6?",
   options:["1/6","2/6","11/36","12/36"],
   answer:2},

  {id:"q57", dim:"prob", difficulty:"hard", timer:55,
   prompt:"A box has 5 good bulbs and 1 faulty one. You pick 2 bulbs at random (without replacement). What is the probability that NEITHER is faulty?",
   options:["5/6","2/3","4/5","25/36"],
   answer:1},

  {id:"q58", dim:"prob", difficulty:"hard", timer:55,
   prompt:"A spam filter wrongly flags 1 in 1,000 good emails as spam. Out of 5,000 good emails, roughly how many will be wrongly flagged?",
   options:["About 5","About 50","About 500","About 0"],
   answer:0},

  /* ── DATA CRITIQUE (q59–q72) ── */
  {id:"q59", dim:"data", difficulty:"easy", timer:45,
   prompt:"A shop's sales (in units) were: Mon 20, Tue 35, Wed 50, Thu 30. On which day were sales highest?",
   chart:barChart(["Mon","Tue","Wed","Thu"], [20,35,50,30], "units sold"),
   options:["Monday","Tuesday","Wednesday","Thursday"],
   answer:2},

  {id:"q60", dim:"data", difficulty:"easy", timer:45,
   prompt:"Look at the monthly visitor counts. What is the overall trend across the five months?",
   chart:lineChart([200, 260, 320, 380, 440], "monthly visitors"),
   options:["Steadily rising","Steadily falling","Flat — no change","Rising then falling"],
   answer:0},

  {id:"q61", dim:"data", difficulty:"easy", timer:45,
   prompt:"The bar chart shows runs scored by four players. How many more runs did the top scorer make than the lowest scorer?",
   chart:barChart(["A","B","C","D"], [40,80,60,30], "runs"),
   options:["30","40","50","80"],
   answer:2},

  {id:"q62", dim:"data", difficulty:"medium", timer:50,
   prompt:"The line chart shows daily sign-ups. Between which two consecutive days was the biggest single jump?",
   chart:lineChart([10, 12, 30, 33, 35], "daily sign-ups"),
   options:["Day 1 to Day 2","Day 2 to Day 3","Day 3 to Day 4","Day 4 to Day 5"],
   answer:1},

  {id:"q63", dim:"data", difficulty:"medium", timer:50,
   prompt:"The chart shows quarterly revenue (₹ lakh). Roughly what fraction of the year's total revenue came in Q4?",
   chart:barChart(["Q1","Q2","Q3","Q4"], [10,20,30,40], "₹ lakh"),
   options:["About one quarter (25%)","About one tenth (10%)","About 40%","About half (50%)"],
   answer:2},

  {id:"q64", dim:"data", difficulty:"medium", timer:50,
   prompt:"Two products' sales are shown. Product B sold how many times as much as Product A?",
   chart:barChart(["Product A","Product B"], [25,100], "units"),
   options:["2 times","3 times","4 times","5 times"],
   answer:2},

  {id:"q65", dim:"data", difficulty:"medium", timer:50,
   prompt:"A line chart of temperatures rises, then falls back to the start. Which description fits?",
   chart:lineChart([15, 22, 28, 22, 15], "°C"),
   options:["Temperature rose steadily all day",
            "Temperature peaked in the middle, then returned to its starting level",
            "Temperature fell all day",
            "Temperature stayed constant"],
   answer:1},

  {id:"q66", dim:"data", difficulty:"medium", timer:50,
   prompt:"A pie-style claim says 'sales doubled!' but the chart shows last year ₹50k and this year ₹60k. What is wrong?",
   chart:barChart(["Last year","This year"], [50,60], "₹ thousand"),
   options:["Nothing — ₹60k is double ₹50k",
            "Sales rose only 20%, not double; the headline overstates the change",
            "Sales actually fell",
            "The two bars cannot be compared"],
   answer:1},

  {id:"q67", dim:"data", difficulty:"medium", timer:50,
   prompt:"A chart's y-axis starts at 90 (not 0), making a bar of 95 look tiny next to a bar of 100. What is the effect of NOT starting the axis at zero here?",
   chart:barChart(["Team X","Team Y"], [95,100], "score (full 0→100 scale)"),
   options:["It honestly shows the two are nearly equal",
            "It exaggerates a small 5-point gap into a large-looking difference",
            "It makes both teams look identical",
            "It has no effect on how the bars appear"],
   answer:1},

  {id:"q68", dim:"data", difficulty:"medium", timer:50,
   prompt:"A health blog says 'people who drink more coffee live longer'. Before believing coffee causes long life, what should you most ask?",
   options:["How tall the coffee drinkers were",
            "Whether some other factor (e.g. wealth or activity) drives both coffee habits and longevity",
            "Which brand of coffee they drank",
            "Whether the study used a bar chart or a line chart"],
   answer:1},

  {id:"q69", dim:"data", difficulty:"medium", timer:50,
   prompt:"A TV channel reports 'our viewership grew 200%!' Last month it was 1,000 viewers. How many viewers does it have now?",
   options:["1,200","2,000","3,000","200"],
   answer:2},

  {id:"q70", dim:"data", difficulty:"hard", timer:55,
   prompt:"A chart shows app revenue rising every month, but the company is losing money overall. How can BOTH be true?",
   chart:lineChart([10, 20, 30, 40, 50], "monthly revenue (₹ lakh)"),
   options:["It cannot be true — rising revenue means profit",
            "Revenue is only one side; if costs rise even faster than revenue, the company still loses money",
            "The chart must be fake",
            "Revenue and profit always mean the same thing"],
   answer:1},

  {id:"q71", dim:"data", difficulty:"hard", timer:55,
   prompt:"A survey poster reads: '9 out of 10 dentists recommend our toothpaste.' Which question most undermines this claim?",
   options:["What flavour is the toothpaste?",
            "How many dentists were asked, and could they recommend several brands including this one?",
            "Do dentists use toothpaste themselves?",
            "Was the poster printed in colour?"],
   answer:1},

  {id:"q72", dim:"data", difficulty:"hard", timer:55,
   prompt:"A chart shows accident numbers falling after a new road sign was installed. Why might you NOT credit the sign?",
   chart:lineChart([50, 48, 30, 28, 25], "accidents per month"),
   options:["Accidents can never be reduced by signs",
            "Other things may have changed too (lighting, weather, traffic), and an unusually high earlier month can fall on its own",
            "The chart shows accidents rising, not falling",
            "Signs always cause accidents to rise"],
   answer:1},

  /* ── ANALYTICAL LOGIC (q73–q86) ── */
  {id:"q73", dim:"logic", difficulty:"easy", timer:40,
   prompt:"Find the next number in the series:  2, 4, 6, 8, ?",
   options:["9","10","11","12"],
   answer:1},

  {id:"q74", dim:"logic", difficulty:"easy", timer:45,
   prompt:"Find the next number:  3, 6, 12, 24, ?",
   options:["36","48","30","60"],
   answer:1},

  {id:"q75", dim:"logic", difficulty:"easy", timer:45,
   prompt:"Which one does NOT belong with the others?",
   options:["Apple","Banana","Carrot","Mango"],
   answer:2},

  {id:"q76", dim:"logic", difficulty:"medium", timer:50,
   prompt:"All cats are animals. Some animals are black. Which conclusion is logically guaranteed?",
   options:["All cats are black","Some cats are black","All animals are cats","No firm conclusion about black cats can be drawn from this"],
   answer:3},

  {id:"q77", dim:"logic", difficulty:"medium", timer:50,
   prompt:"If BOOK is coded as 2-15-15-11 using alphabet positions (B=2, O=15, K=11), what is the code for CAB?",
   options:["3-1-2","2-1-3","3-2-1","1-2-3"],
   answer:0},

  {id:"q78", dim:"logic", difficulty:"medium", timer:50,
   prompt:"Find the next number:  1, 4, 9, 16, 25, ?",
   options:["30","36","35","49"],
   answer:1},

  {id:"q79", dim:"logic", difficulty:"medium", timer:50,
   prompt:"'Hand' is to 'Glove' as 'Foot' is to ___ ?",
   options:["Sock","Leg","Toe","Shoe"],
   answer:3},

  {id:"q80", dim:"logic", difficulty:"medium", timer:50,
   prompt:"Ravi is taller than Sam. Sam is taller than Tom. Who is the shortest?",
   options:["Ravi","Sam","Tom","Cannot be determined"],
   answer:2},

  {id:"q81", dim:"logic", difficulty:"medium", timer:50,
   prompt:"A train leaves at 14:45 and the journey takes 1 hour 40 minutes. At what time does it arrive?",
   options:["16:15","16:25","16:35","15:25"],
   answer:1},

  {id:"q82", dim:"logic", difficulty:"medium", timer:50,
   prompt:"If 5 machines make 5 widgets in 5 minutes, how long do 100 machines take to make 100 widgets?",
   options:["100 minutes","20 minutes","5 minutes","1 minute"],
   answer:2},

  {id:"q83", dim:"logic", difficulty:"easy", timer:45,
   prompt:"Find the missing number:  7, 14, 28, ?, 112",
   options:["42","56","70","84"],
   answer:1},

  {id:"q84", dim:"logic", difficulty:"hard", timer:55,
   prompt:"A claim states: 'Most lottery winners bought their ticket at Store X, so Store X sells lucky tickets.' What is the flaw?",
   options:["Store X genuinely sells luckier tickets",
            "Store X probably sells far more tickets than other shops, so by sheer volume more of its tickets win — that says nothing about luck",
            "Lottery tickets cannot be lucky",
            "Winners always lie about where they bought tickets"],
   answer:1},

  {id:"q85", dim:"logic", difficulty:"hard", timer:55,
   prompt:"In a code, if 'TOLD' is written by shifting each letter forward by 1 (T→U, O→P...), what does 'CAT' become under the same rule?",
   options:["DBU","BZS","DAT","DBV"],
   answer:0},

  {id:"q86", dim:"logic", difficulty:"hard", timer:55,
   prompt:"Four people finish a race. Priya is not last. Quan finishes immediately after Priya. Ravi finishes first. Sara is last. In what order do they finish?",
   options:["Ravi, Priya, Quan, Sara","Ravi, Quan, Priya, Sara","Priya, Quan, Ravi, Sara","Ravi, Priya, Sara, Quan"],
   answer:0},

  /* ── MATHEMATICAL INTUITION (q87–q100) ── */
  {id:"q87", dim:"math", difficulty:"easy", timer:45,
   prompt:"What is 25% of 200?",
   options:["25","40","50","75"],
   answer:2},

  {id:"q88", dim:"math", difficulty:"easy", timer:45,
   prompt:"A shirt costs ₹800. In a 10% off sale, how much do you save?",
   options:["₹8","₹80","₹100","₹120"],
   answer:1},

  {id:"q89", dim:"math", difficulty:"easy", timer:45,
   prompt:"Share ₹600 between two people in the ratio 1 : 2. How much does the larger share get?",
   options:["₹200","₹300","₹400","₹450"],
   answer:2},

  {id:"q90", dim:"math", difficulty:"easy", timer:45,
   prompt:"A number is tripled and becomes 60. What was the original number?",
   options:["15","20","30","180"],
   answer:1},

  {id:"q91", dim:"math", difficulty:"medium", timer:50,
   prompt:"A price rises from ₹50 to ₹60. What is the percentage increase?",
   options:["10%","16.7%","20%","25%"],
   answer:2},

  {id:"q92", dim:"math", difficulty:"medium", timer:50,
   prompt:"₹1,000 is invested at 10% simple interest per year. How much interest is earned after 3 years?",
   options:["₹100","₹300","₹331","₹1,300"],
   answer:1},

  {id:"q93", dim:"math", difficulty:"medium", timer:50,
   prompt:"A recipe for 4 people needs 600g of rice. How much rice is needed for 6 people?",
   options:["800g","900g","1000g","720g"],
   answer:1},

  {id:"q94", dim:"math", difficulty:"easy", timer:45,
   prompt:"If 3 pencils cost ₹12, how much do 7 pencils cost at the same rate?",
   options:["₹21","₹24","₹28","₹35"],
   answer:2},

  {id:"q95", dim:"math", difficulty:"medium", timer:50,
   prompt:"A car travels 150 km in 2 hours. At the same speed, how far does it go in 5 hours?",
   options:["300 km","350 km","375 km","450 km"],
   answer:2},

  {id:"q96", dim:"math", difficulty:"medium", timer:50,
   prompt:"Which is the better deal on the same item: 'Buy 1 get 1 free' or '40% off each'?",
   options:["40% off each","Buy 1 get 1 free (effectively 50% off when buying two)","They are identical","Cannot be compared"],
   answer:1},

  {id:"q97", dim:"math", difficulty:"medium", timer:50,
   prompt:"A quantity doubles every step: 1, 2, 4, 8, ... What is its value at the 7th term (starting from 1 as the 1st)?",
   options:["32","64","128","48"],
   answer:1},

  {id:"q98", dim:"math", difficulty:"hard", timer:55,
   prompt:"A price falls by 50%, then later rises by 50% from the reduced price. Compared with the original, the final price is:",
   options:["The same as the original","25% lower than the original","25% higher than the original","50% lower than the original"],
   answer:1},

  {id:"q99", dim:"math", difficulty:"hard", timer:55,
   prompt:"A tank is filled by pipe A in 4 hours and by pipe B in 6 hours. With both open together, how long to fill it?",
   options:["2.4 hours","5 hours","2 hours","10 hours"],
   answer:0},

  {id:"q100", dim:"math", difficulty:"hard", timer:55,
   prompt:"Sales were ₹200 and grew to ₹242 over two years, by the same percentage each year. What was the annual growth rate?",
   options:["10%","11%","20%","21%"],
   answer:0}
]
};
if (window.__bootAssessment) window.__bootAssessment();
