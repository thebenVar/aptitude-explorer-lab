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
  {id:"q1", dim:"stats", timer:45,
   prompt:"A company has 10 employees. Nine of them earn ₹30,000/month; the manager earns ₹3,00,000/month. The average salary works out to ₹57,000. Which figure best describes a 'typical' employee's pay?",
   options:["The average — ₹57,000",
            "The middle value when sorted — ₹30,000",
            "The highest salary — ₹3,00,000",
            "Any of these; they all describe the same thing"],
   answer:1},

  {id:"q2", dim:"stats", timer:55,
   /* TRICKY — compounding: obvious answer is 40% */
   prompt:"A shop's revenue grew by 20% in January, then grew by another 20% in February. What is the total percentage growth over the two months combined?",
   options:["40%  — add the two monthly gains together",
            "44%",
            "42%",
            "38%"],
   answer:1},

  {id:"q3", dim:"stats", timer:50,
   prompt:"Two cricket teams each played 10 matches. Team A's scores: 0, 0, 0, 0, 0, 300, 300, 300, 300, 300. Team B's scores: 150, 140, 160, 155, 145, 150, 160, 145, 155, 140. Both averaged 150 runs. What is the key difference?",
   options:["Nothing — same average means the same overall performance",
            "Team B is clearly the stronger team",
            "Team A is wildly inconsistent; Team B delivers steadily every match",
            "Team A must have easier opponents"],
   answer:2},

  {id:"q4", dim:"stats", timer:55,
   /* TRICKY — regression to the mean: obvious answer is praise caused the dip */
   prompt:"A student usually scores around 60%. One day, by chance, they score 95% on a surprise test. After much praise, their very next test score is 63%. The teacher says: 'The praise made them overconfident.' What is the most statistically sound explanation?",
   options:["The praise caused the dip in performance",
            "The second test must have been harder",
            "Unusually high scores naturally drift back towards a person's normal level over time — this happens even without any outside cause",
            "The 95% result was probably a data error"],
   answer:2},

  {id:"q5", dim:"stats", timer:45,
   prompt:"An interviewer surveys 20 randomly chosen shoppers at a mall and finds 65% prefer Brand X. Can you confidently conclude that '65% of all shoppers prefer Brand X'?",
   options:["No — 20 people is too small a sample to reliably represent all shoppers",
            "Yes — a clear majority finding is always reliable",
            "Yes — random selection alone makes a sample valid regardless of size",
            "No — shopper preferences are impossible to measure accurately"],
   answer:0},

  {id:"q6", dim:"stats", timer:60,
   /* TRICKY — Simpson's paradox */
   prompt:"A new drug is tested at two hospitals. At both hospitals, it cures a higher percentage of patients than the old drug. Yet a combined report covering both hospitals together shows the old drug has a higher overall cure rate. How is this possible?",
   options:["It is impossible — better at both hospitals must mean better overall",
            "The drug company must have manipulated the numbers",
            "One hospital treated far more patients, and the new drug was used mainly there on harder-to-cure cases — their weight can flip the combined total",
            "The percentages were rounded differently at each hospital"],
   answer:2},

  /* ── PROBABILITY & UNCERTAINTY ── */
  {id:"q7", dim:"prob", timer:50,
   /* TRICKY — inclusion-exclusion: obvious answer overcounts King of Hearts */
   prompt:"You draw one card from a shuffled standard 52-card deck. What is the probability of drawing a King OR a Heart?",
   options:["17/52  — there are 4 Kings and 13 Hearts, so 4 + 13",
            "16/52  — the King of Hearts is counted in both groups and must be subtracted once",
            "13/52  — just the Hearts",
            "4/52  — just the Kings"],
   answer:1},

  {id:"q8", dim:"prob", timer:50,
   /* TRICKY — birthday paradox: obvious answer is "very low" */
   prompt:"In a room of 30 people, what is the probability that at least two of them share the same birthday?",
   options:["Very low — 30 people out of 365 possible birthdays makes it unlikely",
            "About 30%",
            "More likely than not — actually above 70%",
            "Exactly 30 ÷ 365"],
   answer:2},

  {id:"q9", dim:"prob", timer:50,
   /* slightly tricky — without-replacement vs with-replacement */
   prompt:"A bag has 3 red balls and 2 blue balls. You draw one ball, keep it out, then draw a second. What is the probability that both balls are red?",
   options:["9/25  — three-fifths multiplied by three-fifths",
            "1/2",
            "2/5",
            "3/10  — three-fifths for the first draw, then two-quarters for the second"],
   answer:3},

  {id:"q10", dim:"prob", timer:55,
   /* TRICKY — Monty Hall: obvious answer is "50-50, doesn't matter" */
   prompt:"You pick one of three closed doors. Behind one is a prize; the other two are empty. The host — who always knows what is behind each door — opens one of the other two to reveal it is empty, then asks if you want to switch to the remaining door. What gives you the best chance?",
   options:["Switch — it raises your probability of winning from 1/3 to 2/3",
            "Stay — it is now a 50-50 chance between the two remaining doors",
            "It makes no difference — switching and staying are equally good",
            "Switch only if you have a gut feeling about it"],
   answer:0},

  {id:"q11", dim:"prob", timer:55,
   prompt:"A game pays you ₹100 if a coin lands heads, and costs you ₹50 if it lands tails. If you play 10 rounds, what is your expected total gain?",
   options:["₹0 — it is a fair coin, so you break even in the long run",
            "₹100",
            "₹250",
            "₹500"],
   answer:2},

  {id:"q12", dim:"prob", timer:60,
   /* TRICKY — base-rate neglect: obvious answer is "95% — test is that accurate" */
   prompt:"A disease affects 1 in 100 people. A test correctly identifies sick people 95% of the time AND correctly clears healthy people 95% of the time. You test positive. Roughly what is the probability you actually have the disease?",
   options:["95%  — the test is 95% accurate, so a positive is almost certain",
            "About 50-50",
            "Around 16%",
            "Less than 1%"],
   answer:2},

  /* ── DATA CRITIQUE ── */
  {id:"q13", dim:"data", timer:50,
   prompt:"Cities with more public libraries tend to have lower crime rates. A councillor concludes: 'Building more libraries will reduce crime.' What is the fundamental flaw?",
   options:["Libraries and crime are completely unrelated",
            "The study needs data from more cities to be valid",
            "Both could be driven by the same underlying factor — wealthier cities both fund libraries and happen to have lower crime",
            "Crime statistics are notoriously unreliable"],
   answer:2},

  {id:"q14", dim:"data", timer:55,
   /* TRICKY — survivorship bias */
   prompt:"A researcher interviews 50 highly successful entrepreneurs. They all say: 'I trusted my gut instinct, not data.' The researcher concludes: 'Trusting gut instinct leads to success.' What is the key flaw?",
   options:["Successful people may genuinely not know what made them succeed",
            "50 is not a large enough sample of entrepreneurs",
            "Only successful entrepreneurs were interviewed — the far larger number who also trusted their gut and failed were never counted",
            "Entrepreneurs are known to exaggerate in interviews"],
   answer:2},

  {id:"q15", dim:"data", timer:50,
   /* chart shows 98 vs 100 at true scale — question discusses truncation */
   prompt:"A bar chart compares two students' scores: 98 and 100 (shown below at a proper 0–100 scale). A newspaper reprints the same chart but starts the y-axis at 96 instead of 0, making Student B's bar appear three times as tall. What does that redesign do?",
   chart:barChart(["Student A","Student B"], [98,100], "score (0 → 100 scale)"),
   options:["The newspaper version is fine — it just magnifies the relevant range",
            "Starting the axis above zero makes a 2-point gap look like a massive difference",
            "Bar charts should not be used for scores above 50",
            "Student A should always be shown on the right"],
   answer:1},

  {id:"q16", dim:"data", timer:45,
   /* correlation ≠ causation — ice cream / drowning */
   prompt:"A report shows that ice cream sales and the number of drowning incidents both rise together each summer. It concludes: 'Ice cream consumption may cause drowning.' What is the correct critique?",
   options:["Both are caused by the same third factor — hot weather drives people to buy ice cream AND to swim more. Correlation does not mean causation.",
            "The data must be wrong — ice cream clearly cannot affect swimming safety",
            "The study needs many more years of data before any conclusion is valid",
            "Drowning statistics are typically inaccurate"],
   answer:0},

  {id:"q17", dim:"data", timer:50,
   /* self-selection bias in online survey */
   prompt:"An online survey of 5,000 visitors to a company's website finds 82% are satisfied with the service. The CEO announces: 'Over 80% of our customers are satisfied.' What is the main problem?",
   options:["5,000 responses is not a large enough sample",
            "Only website visitors responded — satisfied customers are more likely to engage; unhappy ones may simply leave and never respond",
            "Online surveys are never statistically valid",
            "82% is implausibly high for any company"],
   answer:1},

  {id:"q18", dim:"data", timer:55,
   /* TRICKY — relative vs absolute risk */
   prompt:"A drug advertisement says: 'Our drug reduces your risk of this disease by 50%!' The fine print: without the drug, 2 in every 10,000 people get the disease per year; with the drug, 1 in 10,000 do. Should this headline impress you?",
   options:["Yes — a 50% risk reduction is always highly significant",
            "The 50% figure is technically correct but misleading — the actual benefit is just 1 fewer case per 10,000 people per year",
            "No — a drug must reduce risk by at least 80% to be clinically meaningful",
            "Yes, but only if the drug has no side effects"],
   answer:1},

  /* ── ANALYTICAL LOGIC ── */
  {id:"q19", dim:"logic", timer:55,
   prompt:"Three friends each enjoy exactly one activity: chess, cricket, or cooking. Arjun does not like chess, and does not like cricket. Bina does not like cricket. Chetan does not like cooking. What does each person enjoy?",
   options:["Arjun: chess    Bina: cricket    Chetan: cooking",
            "Arjun: cricket    Bina: chess    Chetan: cooking",
            "Arjun: cooking    Bina: cricket    Chetan: chess",
            "Arjun: cooking    Bina: chess    Chetan: cricket"],
   answer:3},

  {id:"q20", dim:"logic", timer:50,
   /* reverse exponential — people often just divide by 6 (2×3) instead of 2³ */
   prompt:"A shop's sales doubled every year for 3 years and reached ₹80,000 at the end of year 3. What were the sales before year 1 began?",
   options:["₹40,000",
            "₹10,000",
            "₹20,000",
            "₹26,667"],
   answer:1},

  {id:"q21", dim:"logic", timer:50,
   /* TRICKY — linear vs exponential: chart makes it visually clear if read carefully */
   prompt:"An app's daily downloads over five months: 100, 150, 200, 250, 300. Which description is most accurate?",
   chart:lineChart([100, 150, 200, 250, 300], "daily downloads"),
   options:["Downloads double each month (exponential growth)",
            "Downloads grow by the same fixed amount each month (linear growth)",
            "Growth is accelerating — each monthly jump is larger than the last",
            "Growth is slowing down"],
   answer:1},

  {id:"q22", dim:"logic", timer:55,
   /* TRICKY — base-rate of driving near home */
   prompt:"A road safety report states: '87% of all accidents occur within 16 km of the driver's home.' A journalist concludes: 'Driving near home is the most dangerous.' What is wrong with this conclusion?",
   options:["It is genuinely more dangerous to drive near home due to driver distraction",
            "Most driving happens close to home — so naturally, most accidents also happen there. Distance alone tells you nothing about risk per kilometre driven.",
            "Home environments distract drivers through familiarity",
            "Speed limits near homes should therefore be lower"],
   answer:1},

  {id:"q23", dim:"logic", timer:50,
   prompt:"A researcher wants to find out whether more hours of sleep is linked to higher exam scores. Which approach gives the most reliable answer?",
   options:["Interview a handful of top-scoring students about how much they sleep",
            "Ask a sleep expert for their professional opinion",
            "Have one student sleep more for a week and check if their score improves",
            "Collect sleep hours and exam scores from a large, diverse group of students and look for a consistent pattern across all of them"],
   answer:3},

  {id:"q24", dim:"logic", timer:55,
   prompt:"A project took 8 workers exactly 6 days to complete. The same project now needs to be done in 4 days. Assuming all workers are equally productive and the work can be divided freely, how many workers are needed?",
   options:["10 workers",
            "12 workers",
            "14 workers",
            "16 workers"],
   answer:1},

  /* ── MATHEMATICAL INTUITION ── */
  {id:"q25", dim:"math", timer:45,
   prompt:"A town's population grows from 1,000 to 1,000,000 over 100 years. Which type of growth best describes this?",
   options:["Linear — the same number of people move in each year",
            "Random — populations do not follow patterns",
            "Logarithmic — it grew quickly at first, then nearly stopped",
            "Exponential — the town grows by roughly the same percentage each year, compounding over time"],
   answer:3},

  {id:"q26", dim:"math", timer:50,
   /* TRICKY — lily-pad / doubling: obvious answer is Day 15 */
   prompt:"A patch of algae doubles in size every day. On day 30 it covers the entire lake. On which day did it cover exactly half the lake?",
   options:["Day 15 — halfway through the 30-day period",
            "Day 29",
            "Day 25",
            "Day 20"],
   answer:1},

  {id:"q27", dim:"math", timer:55,
   /* TRICKY — percentage rise ≠ percentage fall */
   prompt:"A jacket's price rises from ₹1,000 to ₹1,250. Later it goes on sale and drops back down to ₹1,000. Which statement is correct?",
   options:["The rise and the fall are both 25% — they cancel out symmetrically",
            "The price rose 20% and then fell 25%",
            "The price rose 25% but fell only 20%",
            "The rise and fall must be equal since the price returned to where it started"],
   answer:2},

  {id:"q28", dim:"math", timer:55,
   /* TRICKY — harmonic mean for average speed: obvious answer is 45 km/h */
   prompt:"You drive 60 km to a destination at 30 km/h, then return the same 60 km at 60 km/h. What is your average speed for the whole round trip?",
   options:["45 km/h  — the average of 30 and 60",
            "40 km/h",
            "50 km/h",
            "42 km/h"],
   answer:1},

  {id:"q29", dim:"math", timer:55,
   /* TRICKY — successive discounts: obvious answer is 50% */
   prompt:"A shop first applies a 30% discount, then takes a further 20% off the already-discounted price. What is the total discount compared with the original price?",
   options:["50%  — just add the two discounts together",
            "44%",
            "46%",
            "48%"],
   answer:1},

  {id:"q30", dim:"math", timer:55,
   /* TRICKY — handshakes: obvious answer is 6×5=30 (double-counts) */
   prompt:"At a meeting, every person shakes hands with every other person exactly once. There are 6 people. How many handshakes take place in total?",
   options:["30  — each of the 6 people shakes 5 hands, so 6 × 5",
            "15",
            "12",
            "36"],
   answer:1}
]
};
if (window.__bootAssessment) window.__bootAssessment();
