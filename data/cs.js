// Auto-generated assessment data for "cs". Edit here to change this test.
window.ASSESSMENT = {
  id: "cs",
  title: "Computer Science — Aptitude Check",
  dot: "CS",
  brandName: "Computer Science Aptitude Check",
  loginIntro: "A short, gently-timed, <b>just-for-fun</b> set of questions exploring the thinking patterns Computer Science relies on — logical step-by-step reasoning, spotting patterns, precision, breaking problems into pieces, and understanding how systems behave. No prior coding knowledge needed.",
  theme: { accent: "#a855f7", accent2: "#3b82f6" },
  config: {
  credentials: {
    "student": { password: "learn2025", role: "student", name: "Student" },
    "mentor":  { password: "mentor2025", role: "admin",  name: "Mentor"  }
  },
  rapidMs: 3000,
  nearDeadlineSec: 6,
  defaultTimerSec: 50,
  bands: { strong: 75, promising: 55 },
  criticalWeakPct: 40,
  dims: {
    logic: { label:"Logical &amp; Sequential Thinking",
      means:"following rules precisely and tracing step-by-step processes — the core of writing and debugging algorithms.",
      improve:"Practise tracing pseudocode on paper. Work through logic puzzles and follow multi-step instructions precisely. Try CS Unplugged activities." },
    pattern: { label:"Pattern Recognition",
      means:"spotting the rule behind a sequence and extending it — how programmers identify repeating structures and design efficient solutions.",
      improve:"Number and letter series exercises. Solve pattern-based puzzles. Try Project Euler problems (easy ones)." },
    precision: { label:"Precision &amp; Attention to Detail",
      means:"catching small errors — one wrong character in code causes complete failure. Precision is non-negotiable in programming.",
      improve:"Slow down when checking work. Spot-the-difference exercises. Proofread your own writing before submitting it." },
    decomp: { label:"Problem Decomposition",
      means:"breaking a complex problem into smaller, manageable subtasks — how every large program is designed and built.",
      improve:"For any complex task in daily life, list every individual step needed. Estimate resources. Flowchart your thinking before acting." },
    systems: { label:"Systems &amp; Cause-Effect Thinking",
      means:"understanding how components interact and what happens when one part changes — essential for debugging and designing software.",
      improve:"Ask 'what breaks if I change this?' when studying anything. Study how networks, computers, or operating systems work at a conceptual level." }
  }
},
  bandText: {
  strong:{ pill:"good", title:"A strong set of answers",
    blurb:"Your answers show the careful, step-by-step thinking Computer Science relies on. Logical conditions, patterns, and precision questions didn't trip you up — that's a great sign. Take this as warm encouragement to explore CS further." },
  promising:{ pill:"warn", title:"A promising mix, with some gaps",
    blurb:"Good instincts on many questions, with a few types that caught you out. The areas where you stumbled are exactly the ones most learnable — see which dimensions scored lower and practise those specifically." },
  gaps:{ pill:"bad", title:"Several question types to practise",
    blurb:"A number of these questions didn't go your way this time. That's OK — the thinking patterns CS uses are learnable habits, not fixed traits. Focus on the dimension notes below to build them up." }
},
  bank: [

  /* ── LOGICAL & SEQUENTIAL THINKING (q1–q6) ── */

  // q1: Number series — differences increase by 2 each time
  // Series: 2, 5, 10, 17, 26, ?  Diffs: 3, 5, 7, 9 → next diff = 11 → 26+11 = 37
  {id:"q1", dim:"logic", timer:45,
   prompt:"What comes next in this series?   2, 5, 10, 17, 26, __",
   options:["35","37","38","40"],
   answer:1},

  // q2: Syllogism trap — "all A have B, X has B" does NOT mean X is A
  // All tigers have stripes. Leo has stripes. Correct: cannot conclude Leo is a tiger.
  {id:"q2", dim:"logic", timer:45,
   prompt:"All tigers have stripes. Leo has stripes. Which conclusion is logically correct?",
   options:["Leo is a tiger.","Leo is not a tiger.","We cannot conclude whether Leo is a tiger.","Leo is the only striped animal."],
   answer:2},

  // q3 (code): x=8. if x>5 AND x<10 → true AND true → show "Yes"
  {id:"q3", dim:"logic", timer:55,
   prompt:"n is 8. Follow the steps below. What gets shown?",
   code:"n = 8\nif n is greater than 5 AND n is less than 10:\n    show \"Yes\"\notherwise:\n    show \"No\"",
   options:["Yes","No","Nothing","Error"],
   answer:0},

  // q4 (code): count items > 4 in [3, 7, 2, 8, 5]
  // 3→no, 7→yes, 2→no, 8→yes, 5→yes → count = 3
  {id:"q4", dim:"logic", timer:55,
   prompt:"Follow these steps. Start with count = 0. Go through each number in the list and add 1 to count whenever a number is greater than 4. What is count at the end?",
   code:"count = 0\nfor each number in [3, 7, 2, 8, 5]:\n    if number is greater than 4:\n        add 1 to count",
   options:["1","2","3","4"],
   answer:2},

  // q5: Odd-one-out — Apple, Orange, Banana are fruits; Carrot is a vegetable
  {id:"q5", dim:"logic", timer:45,
   prompt:"Which one does NOT belong with the others?   Apple, Orange, Banana, Carrot",
   options:["Apple","Orange","Banana","Carrot"],
   answer:3},

  // q6 (code): swap a and b using a temp variable — classic swap
  // a=5, b=9 → temp=5, a=9, b=5 → a=9, b=5
  {id:"q6", dim:"logic", timer:55,
   prompt:"Follow these swap steps in order. What are a and b at the end?",
   code:"a = 5,  b = 9\ntemp = a\na = b\nb = temp",
   options:["a=5, b=9","a=9, b=5","a=9, b=9","a=5, b=5"],
   answer:1},

  /* ── PATTERN RECOGNITION (q7–q12) ── */

  // q7: Letter series — gaps increase by 1 each step
  // B(2), D(4), G(7), K(11), P(16), ? gap=2,3,4,5 → next gap=6 → 16+6=22 → V
  {id:"q7", dim:"pattern", timer:45,
   prompt:"What letter comes next?   B, D, G, K, P, __   (Use the positions of letters: A=1, B=2, C=3 …)",
   options:["S","T","V","W"],
   answer:2},

  // q8: Perfect squares — 1,4,9,16,25,? = 36
  {id:"q8", dim:"pattern", timer:45,
   prompt:"What comes next?   1, 4, 9, 16, 25, __",
   options:["36","30","49","32"],
   answer:0},

  // q9: Doubles — 3,6,12,24,48,? = 96
  {id:"q9", dim:"pattern", timer:45,
   prompt:"What comes next?   3, 6, 12, 24, 48, __",
   options:["72","96","84","106"],
   answer:1},

  // q10: Paired letter pattern — AZ, BY, CX, ? → D + W = DW
  // A↔Z (1,26), B↔Y (2,25), C↔X (3,24) → D↔W (4,23)
  {id:"q10", dim:"pattern", timer:50,
   prompt:"What pair comes next?   AZ, BY, CX, __   (Each pair: one letter from the start of the alphabet, one from the end.)",
   options:["DV","DX","DW","EW"],
   answer:2},

  // q11: Decreasing differences — diffs: 100,91,83,76,70,?  diffs=9,8,7,6 → next=5 → 65
  {id:"q11", dim:"pattern", timer:50,
   prompt:"What comes next?   100, 91, 83, 76, 70, __",
   options:["66","63","68","65"],
   answer:3},

  // q12: Two interleaved doubling sequences
  // Odd positions:  2, 4, 8, 16  → each ×2
  // Even positions: 3, 6, 12     → each ×2, next = 24
  // Sequence: 2, 3, 4, 6, 8, 12, 16, __  → 8th term = next even-position = 24
  {id:"q12", dim:"pattern", timer:55,
   prompt:"Two patterns are woven together here. Find the rule and complete the sequence.   2, 3, 4, 6, 8, 12, 16, __",
   options:["32","24","20","28"],
   answer:1},

  /* ── PRECISION & ATTENTION TO DETAIL (q13–q18) ── */

  // q13: Spot the one expression that is different — trap is a subtle character swap
  // Three are identical; one has a switched digit
  {id:"q13", dim:"precision", timer:50,
   prompt:"Three of these are exactly the same. Which one is DIFFERENT?",
   options:["x = 2 * (a + b) - c","x = 2 * (a + b) - c","x = 2 * (a + b) + c","x = 2 * (a + b) - c"],
   answer:2},

  // q14: Follow instructions exactly — "add 3 to every even number"
  // List: 1, 2, 3, 4, 5 → evens are 2 and 4 → results: 1, 5, 3, 7, 5
  // Which result list is correct?
  {id:"q14", dim:"precision", timer:50,
   prompt:"Rule: add 3 to every EVEN number; leave odd numbers unchanged. Apply this to the list [1, 2, 3, 4, 5]. Which result is correct?",
   options:["[4, 5, 6, 7, 8]","[1, 5, 3, 7, 5]","[1, 5, 6, 7, 5]","[1, 2, 3, 7, 5]"],
   answer:1},

  // q15: Off-by-one — "from 1 to 5, including both ends" = 5 numbers
  // Trap: students sometimes say 4 (5-1=4)
  {id:"q15", dim:"precision", timer:45,
   prompt:"A list contains every whole number from 1 to 10, including both 1 and 10. How many numbers are in the list?",
   options:["10","9","11","8"],
   answer:0},

  // q16: All three conditions must be met — spot the option that violates one
  // Conditions: name starts with 'A', age > 15, score >= 80
  // Options: one satisfies all three, one misses one condition (trap)
  {id:"q16", dim:"precision", timer:55,
   prompt:"A student qualifies ONLY if ALL three rules are met:\n• Their name starts with the letter A\n• Their age is more than 15\n• Their score is 80 or higher\n\nWhich student qualifies?",
   options:["Aryan, age 16, score 79","Aryan, age 15, score 85","Aisha, age 17, score 80","Aisha, age 16, score 78"],
   answer:2},

  // q17: Careful reading — asks for second-largest NOT largest
  // List: 42, 17, 89, 55, 33 → sorted: 89, 55, 42, 33, 17 → second-largest = 55
  {id:"q17", dim:"precision", timer:50,
   prompt:"From this list of numbers, what is the SECOND-LARGEST value?   42, 17, 89, 55, 33",
   options:["89","55","42","33"],
   answer:1},

  // q18: Which step is in the wrong order?
  // To make toast: put bread in toaster → press down lever → wait → remove toast → eat
  // Wrong version swaps "wait" and "press down lever" order
  {id:"q18", dim:"precision", timer:50,
   prompt:"Someone wrote instructions for making toast. One step is in the wrong position. Which version has a step out of order?",
   options:["Put bread in toaster → press lever → wait → remove toast → eat",
            "Put bread in toaster → wait → press lever → remove toast → eat",
            "Put bread in toaster → press lever → wait → eat → remove toast",
            "Put bread in toaster → press lever → remove toast → wait → eat"],
   answer:1},

  /* ── PROBLEM DECOMPOSITION (q19–q24) ── */

  // q19: Which step is missing from the plan?
  // Plan to send an email: open app, write subject, write message, send → missing "enter recipient address"
  {id:"q19", dim:"decomp", timer:50,
   prompt:"Someone listed these steps for sending an email:\n1. Open the email app\n2. Write the subject line\n3. Write the message\n4. Click Send\n\nWhich important step is MISSING?",
   options:["Attach a file","Enter the recipient's email address","Log out afterwards","Spell-check the message"],
   answer:1},

  // q20: Correct order of steps — baking a cake
  // Correct: gather ingredients → mix → pour into tin → bake → cool → ice
  // One option has "ice" before "cool" (wrong)
  {id:"q20", dim:"decomp", timer:50,
   prompt:"Which ordering of steps for baking a cake is CORRECT?",
   options:["Gather ingredients → bake → mix → pour into tin → cool → ice",
            "Gather ingredients → mix → pour into tin → bake → ice → cool",
            "Gather ingredients → mix → pour into tin → bake → cool → ice",
            "Mix → gather ingredients → pour into tin → bake → cool → ice"],
   answer:2},

  // q21: A task has 3 sub-tasks: A takes 10 min, B takes 5 min, C takes 8 min.
  // B cannot start until A finishes. C can run at the same time as A and B.
  // Minimum time = max(A+B, C) = max(15, 8) = 15 minutes
  {id:"q21", dim:"decomp", timer:55,
   prompt:"A project has three parts:\n• Part A takes 10 minutes\n• Part B takes 5 minutes (can only start after A finishes)\n• Part C takes 8 minutes (can run at the same time as A and B)\n\nWhat is the shortest time to complete all three parts?",
   options:["23 minutes","8 minutes","15 minutes","18 minutes"],
   answer:2},

  // q22: Breaking a big task into subtasks — which breakdown is best?
  // Task: build a website. Best decomposition = plan, design, code, test, launch
  // Wrong options collapse multiple steps or omit testing
  {id:"q22", dim:"decomp", timer:50,
   prompt:"A student wants to build a simple website. Which list of subtasks best breaks the job into clear, manageable steps?",
   options:["Plan what it needs → Design the layout → Write the code → Test it → Launch it",
            "Think about it → Build it",
            "Write the code → Launch it → Fix bugs forever",
            "Design → Code → Design again → Code again"],
   answer:0},

  // q23: Estimate the number of steps — uploading a photo to a website
  // Steps: open browser, go to site, log in, find upload button, choose file, confirm upload
  // = at least 6 distinct steps; which count is most realistic?
  {id:"q23", dim:"decomp", timer:45,
   prompt:"A friend says &ldquo;uploading a photo to a website is just 2 steps.&rdquo; Thinking carefully about every small action involved, which estimate is more realistic?",
   options:["2 steps","3 steps","At least 6 steps","Exactly 100 steps"],
   answer:2},

  // q24: Which decomposition correctly isolates one thing at a time?
  // Goal: find why a lamp won't turn on. Good decomp: check bulb, then switch, then cable, then socket — one at a time
  {id:"q24", dim:"decomp", timer:50,
   prompt:"A lamp won't turn on. Which approach best isolates the cause by testing one thing at a time?",
   options:["Replace the bulb, switch, cable, and socket all at once, then see if it works",
            "Check the bulb first; if OK, check the switch; if OK, check the cable; if OK, check the socket",
            "Throw it away and buy a new lamp",
            "Assume the socket is broken because it usually is"],
   answer:1},

  /* ── SYSTEMS & CAUSE-EFFECT THINKING (q25–q30) ── */

  // q25 (chart): A bar chart shows the number of users of an app across 5 months.
  // [Jan:200, Feb:220, Mar:280, Apr:270, May:340]
  // Largest single-month growth: Mar vs Feb = 60; Apr vs Mar = -10; May vs Apr = 70 → May grew most
  {id:"q25", dim:"systems", timer:55,
   prompt:"The bar chart shows the number of active users (in thousands) of an app each month. In which month did the number of users grow the MOST compared with the previous month?",
   chart:barChart(["Jan","Feb","Mar","Apr","May"],[200,220,280,270,340],"thousand users"),
   options:["February","March","April","May"],
   answer:3},

  // q26 (line chart): Shows response time of a server as number of users increases
  // [1user:10ms, 2:12, 4:18, 8:35, 16:90, 32:200]
  // Pattern: response time grows much faster than the number of users — exponential-ish
  {id:"q26", dim:"systems", timer:55,
   prompt:"The chart shows how long a computer server takes to respond (in ms) as more users connect at once. What best describes the relationship?",
   chart:lineChart([10,12,18,35,90,200],"response time (ms)"),
   options:["Response time stays the same no matter how many users connect",
            "Response time grows faster and faster as more users are added",
            "Response time falls as more users connect",
            "Response time doubles exactly every time"],
   answer:1},

  // q27: If you delete a step in a pipeline, what happens downstream?
  // A recipe pipeline: chop → fry → season → serve. If "season" is removed, food is bland.
  {id:"q27", dim:"systems", timer:45,
   prompt:"A recipe pipeline has four steps: Chop → Fry → Season → Serve. If the 'Season' step is accidentally skipped, what is the most likely result?",
   options:["The food is still perfectly fine","The food will be unseasoned / bland","The food will be overcooked","The chopping step will also be skipped"],
   answer:1},

  // q28: Cause-effect chain — a single change ripples through a system
  // Scenario: a school raises library book limit from 2 to 5 per student.
  // Effect chain: more books borrowed → fewer books available on shelves → other students wait longer → some books get lost → library needs to buy replacements
  {id:"q28", dim:"systems", timer:50,
   prompt:"A school library increases the borrowing limit from 2 books to 5 books per student. Which chain of effects is most likely?",
   options:["Nothing changes — students will still borrow the same number",
            "More books are borrowed → fewer books on shelves → other students must wait longer",
            "Students immediately read 5 books at once → grades improve → school wins an award",
            "Books will last longer because more people are reading them"],
   answer:1},

  // q29: Feedback loop — thermostat
  // When room temperature drops below the set level, the heater turns on; when it reaches the set level, it turns off.
  // This is a negative feedback loop that keeps temperature stable.
  {id:"q29", dim:"systems", timer:50,
   prompt:"A room thermostat works like this: when the temperature falls below 20°C the heater switches ON; when it reaches 20°C the heater switches OFF. You set it to 20°C in a cold room. What happens over time?",
   options:["The heater stays on permanently until you switch it off manually",
            "The temperature rises to 20°C, then the heater cycles on and off to keep it near that level",
            "The room temperature keeps rising indefinitely past 20°C",
            "Nothing happens — the room stays cold"],
   answer:1},

  // q30: Single point of failure — if one part of a chain fails, the whole chain stops
  // Scenario: internet works like router → modem → ISP. If modem breaks, even if router and ISP are fine, internet stops.
  {id:"q30", dim:"systems", timer:50,
   prompt:"Your home internet works through this chain: Your device → Router → Modem → Internet provider. The modem breaks. What is the result, even though the router and internet provider are both working perfectly?",
   options:["Your device still connects to the internet through the router alone",
            "Only the router stops working",
            "No device in your home can reach the internet",
            "The internet provider also breaks down"],
   answer:2}
]
};
if (window.__bootAssessment) window.__bootAssessment();
