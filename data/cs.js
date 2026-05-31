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
  {id:"q1", dim:"logic", difficulty:"medium", timer:45,
   prompt:"What comes next in this series?   2, 5, 10, 17, 26, __",
   options:["35","37","38","40"],
   answer:1},

  // q2: Syllogism trap — "all A have B, X has B" does NOT mean X is A
  // All tigers have stripes. Leo has stripes. Correct: cannot conclude Leo is a tiger.
  {id:"q2", dim:"logic", difficulty:"hard", timer:45,
   prompt:"All tigers have stripes. Leo has stripes. Which conclusion is logically correct?",
   options:["Leo is a tiger.","Leo is not a tiger.","We cannot conclude whether Leo is a tiger.","Leo is the only striped animal."],
   answer:2},

  // q3 (code): x=8. if x>5 AND x<10 → true AND true → show "Yes"
  {id:"q3", dim:"logic", difficulty:"easy", timer:55,
   prompt:"n is 8. Follow the steps below. What gets shown?",
   code:"n = 8\nif n is greater than 5 AND n is less than 10:\n    show \"Yes\"\notherwise:\n    show \"No\"",
   options:["Yes","No","Nothing","Error"],
   answer:0},

  // q4 (code): count items > 4 in [3, 7, 2, 8, 5]
  // 3→no, 7→yes, 2→no, 8→yes, 5→yes → count = 3
  {id:"q4", dim:"logic", difficulty:"medium", timer:55,
   prompt:"Follow these steps. Start with count = 0. Go through each number in the list and add 1 to count whenever a number is greater than 4. What is count at the end?",
   code:"count = 0\nfor each number in [3, 7, 2, 8, 5]:\n    if number is greater than 4:\n        add 1 to count",
   options:["1","2","3","4"],
   answer:2},

  // q5: Odd-one-out — Apple, Orange, Banana are fruits; Carrot is a vegetable
  {id:"q5", dim:"logic", difficulty:"easy", timer:45,
   prompt:"Which one does NOT belong with the others?   Apple, Orange, Banana, Carrot",
   options:["Apple","Orange","Banana","Carrot"],
   answer:3},

  // q6 (code): swap a and b using a temp variable — classic swap
  // a=5, b=9 → temp=5, a=9, b=5 → a=9, b=5
  {id:"q6", dim:"logic", difficulty:"medium", timer:55,
   prompt:"Follow these swap steps in order. What are a and b at the end?",
   code:"a = 5,  b = 9\ntemp = a\na = b\nb = temp",
   options:["a=5, b=9","a=9, b=5","a=9, b=9","a=5, b=5"],
   answer:1},

  /* ── PATTERN RECOGNITION (q7–q12) ── */

  // q7: Letter series — gaps increase by 1 each step
  // B(2), D(4), G(7), K(11), P(16), ? gap=2,3,4,5 → next gap=6 → 16+6=22 → V
  {id:"q7", dim:"pattern", difficulty:"medium", timer:45,
   prompt:"What letter comes next?   B, D, G, K, P, __   (Use the positions of letters: A=1, B=2, C=3 …)",
   options:["S","T","V","W"],
   answer:2},

  // q8: Perfect squares — 1,4,9,16,25,? = 36
  {id:"q8", dim:"pattern", difficulty:"easy", timer:45,
   prompt:"What comes next?   1, 4, 9, 16, 25, __",
   options:["36","30","49","32"],
   answer:0},

  // q9: Doubles — 3,6,12,24,48,? = 96
  {id:"q9", dim:"pattern", difficulty:"easy", timer:45,
   prompt:"What comes next?   3, 6, 12, 24, 48, __",
   options:["72","96","84","106"],
   answer:1},

  // q10: Paired letter pattern — AZ, BY, CX, ? → D + W = DW
  // A↔Z (1,26), B↔Y (2,25), C↔X (3,24) → D↔W (4,23)
  {id:"q10", dim:"pattern", difficulty:"medium", timer:50,
   prompt:"What pair comes next?   AZ, BY, CX, __   (Each pair: one letter from the start of the alphabet, one from the end.)",
   options:["DV","DX","DW","EW"],
   answer:2},

  // q11: Decreasing differences — diffs: 100,91,83,76,70,?  diffs=9,8,7,6 → next=5 → 65
  {id:"q11", dim:"pattern", difficulty:"medium", timer:50,
   prompt:"What comes next?   100, 91, 83, 76, 70, __",
   options:["66","63","68","65"],
   answer:3},

  // q12: Two interleaved doubling sequences
  // Odd positions:  2, 4, 8, 16  → each ×2
  // Even positions: 3, 6, 12     → each ×2, next = 24
  // Sequence: 2, 3, 4, 6, 8, 12, 16, __  → 8th term = next even-position = 24
  {id:"q12", dim:"pattern", difficulty:"hard", timer:55,
   prompt:"Two patterns are woven together here. Find the rule and complete the sequence.   2, 3, 4, 6, 8, 12, 16, __",
   options:["32","24","20","28"],
   answer:1},

  /* ── PRECISION & ATTENTION TO DETAIL (q13–q18) ── */

  // q13: Spot the one expression that is different — trap is a subtle character swap
  // Three are identical; one has a switched digit
  {id:"q13", dim:"precision", difficulty:"medium", timer:50,
   prompt:"Three of these are exactly the same. Which one is DIFFERENT?",
   options:["x = 2 * (a + b) - c","x = 2 * (a + b) - c","x = 2 * (a + b) + c","x = 2 * (a + b) - c"],
   answer:2},

  // q14: Follow instructions exactly — "add 3 to every even number"
  // List: 1, 2, 3, 4, 5 → evens are 2 and 4 → results: 1, 5, 3, 7, 5
  // Which result list is correct?
  {id:"q14", dim:"precision", difficulty:"medium", timer:50,
   prompt:"Rule: add 3 to every EVEN number; leave odd numbers unchanged. Apply this to the list [1, 2, 3, 4, 5]. Which result is correct?",
   options:["[4, 5, 6, 7, 8]","[1, 5, 3, 7, 5]","[1, 5, 6, 7, 5]","[1, 2, 3, 7, 5]"],
   answer:1},

  // q15: Off-by-one — "from 1 to 5, including both ends" = 5 numbers
  // Trap: students sometimes say 4 (5-1=4)
  {id:"q15", dim:"precision", difficulty:"easy", timer:45,
   prompt:"A list contains every whole number from 1 to 10, including both 1 and 10. How many numbers are in the list?",
   options:["10","9","11","8"],
   answer:0},

  // q16: All three conditions must be met — spot the option that violates one
  // Conditions: name starts with 'A', age > 15, score >= 80
  // Options: one satisfies all three, one misses one condition (trap)
  {id:"q16", dim:"precision", difficulty:"hard", timer:55,
   prompt:"A student qualifies ONLY if ALL three rules are met:\n• Their name starts with the letter A\n• Their age is more than 15\n• Their score is 80 or higher\n\nWhich student qualifies?",
   options:["Aryan, age 16, score 79","Aryan, age 15, score 85","Aisha, age 17, score 80","Aisha, age 16, score 78"],
   answer:2},

  // q17: Careful reading — asks for second-largest NOT largest
  // List: 42, 17, 89, 55, 33 → sorted: 89, 55, 42, 33, 17 → second-largest = 55
  {id:"q17", dim:"precision", difficulty:"easy", timer:50,
   prompt:"From this list of numbers, what is the SECOND-LARGEST value?   42, 17, 89, 55, 33",
   options:["89","55","42","33"],
   answer:1},

  // q18: Which step is in the wrong order?
  // To make toast: put bread in toaster → press down lever → wait → remove toast → eat
  // Wrong version swaps "wait" and "press down lever" order
  {id:"q18", dim:"precision", difficulty:"medium", timer:50,
   prompt:"Someone wrote instructions for making toast. One step is in the wrong position. Which version has a step out of order?",
   options:["Put bread in toaster → press lever → wait → remove toast → eat",
            "Put bread in toaster → wait → press lever → remove toast → eat",
            "Put bread in toaster → press lever → wait → eat → remove toast",
            "Put bread in toaster → press lever → remove toast → wait → eat"],
   answer:1},

  /* ── PROBLEM DECOMPOSITION (q19–q24) ── */

  // q19: Which step is missing from the plan?
  // Plan to send an email: open app, write subject, write message, send → missing "enter recipient address"
  {id:"q19", dim:"decomp", difficulty:"easy", timer:50,
   prompt:"Someone listed these steps for sending an email:\n1. Open the email app\n2. Write the subject line\n3. Write the message\n4. Click Send\n\nWhich important step is MISSING?",
   options:["Attach a file","Enter the recipient's email address","Log out afterwards","Spell-check the message"],
   answer:1},

  // q20: Correct order of steps — baking a cake
  // Correct: gather ingredients → mix → pour into tin → bake → cool → ice
  // One option has "ice" before "cool" (wrong)
  {id:"q20", dim:"decomp", difficulty:"medium", timer:50,
   prompt:"Which ordering of steps for baking a cake is CORRECT?",
   options:["Gather ingredients → bake → mix → pour into tin → cool → ice",
            "Gather ingredients → mix → pour into tin → bake → ice → cool",
            "Gather ingredients → mix → pour into tin → bake → cool → ice",
            "Mix → gather ingredients → pour into tin → bake → cool → ice"],
   answer:2},

  // q21: A task has 3 sub-tasks: A takes 10 min, B takes 5 min, C takes 8 min.
  // B cannot start until A finishes. C can run at the same time as A and B.
  // Minimum time = max(A+B, C) = max(15, 8) = 15 minutes
  {id:"q21", dim:"decomp", difficulty:"hard", timer:55,
   prompt:"A project has three parts:\n• Part A takes 10 minutes\n• Part B takes 5 minutes (can only start after A finishes)\n• Part C takes 8 minutes (can run at the same time as A and B)\n\nWhat is the shortest time to complete all three parts?",
   options:["23 minutes","8 minutes","15 minutes","18 minutes"],
   answer:2},

  // q22: Breaking a big task into subtasks — which breakdown is best?
  // Task: build a website. Best decomposition = plan, design, code, test, launch
  // Wrong options collapse multiple steps or omit testing
  {id:"q22", dim:"decomp", difficulty:"easy", timer:50,
   prompt:"A student wants to build a simple website. Which list of subtasks best breaks the job into clear, manageable steps?",
   options:["Plan what it needs → Design the layout → Write the code → Test it → Launch it",
            "Think about it → Build it",
            "Write the code → Launch it → Fix bugs forever",
            "Design → Code → Design again → Code again"],
   answer:0},

  // q23: Estimate the number of steps — uploading a photo to a website
  // Steps: open browser, go to site, log in, find upload button, choose file, confirm upload
  // = at least 6 distinct steps; which count is most realistic?
  {id:"q23", dim:"decomp", difficulty:"medium", timer:45,
   prompt:"A friend says &ldquo;uploading a photo to a website is just 2 steps.&rdquo; Thinking carefully about every small action involved, which estimate is more realistic?",
   options:["2 steps","3 steps","At least 6 steps","Exactly 100 steps"],
   answer:2},

  // q24: Which decomposition correctly isolates one thing at a time?
  // Goal: find why a lamp won't turn on. Good decomp: check bulb, then switch, then cable, then socket — one at a time
  {id:"q24", dim:"decomp", difficulty:"medium", timer:50,
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
  {id:"q25", dim:"systems", difficulty:"medium", timer:55,
   prompt:"The bar chart shows the number of active users (in thousands) of an app each month. In which month did the number of users grow the MOST compared with the previous month?",
   chart:barChart(["Jan","Feb","Mar","Apr","May"],[200,220,280,270,340],"thousand users"),
   options:["February","March","April","May"],
   answer:3},

  // q26 (line chart): Shows response time of a server as number of users increases
  // [1user:10ms, 2:12, 4:18, 8:35, 16:90, 32:200]
  // Pattern: response time grows much faster than the number of users — exponential-ish
  {id:"q26", dim:"systems", difficulty:"medium", timer:55,
   prompt:"The chart shows how long a computer server takes to respond (in ms) as more users connect at once. What best describes the relationship?",
   chart:lineChart([10,12,18,35,90,200],"response time (ms)"),
   options:["Response time stays the same no matter how many users connect",
            "Response time grows faster and faster as more users are added",
            "Response time falls as more users connect",
            "Response time doubles exactly every time"],
   answer:1},

  // q27: If you delete a step in a pipeline, what happens downstream?
  // A recipe pipeline: chop → fry → season → serve. If "season" is removed, food is bland.
  {id:"q27", dim:"systems", difficulty:"easy", timer:45,
   prompt:"A recipe pipeline has four steps: Chop → Fry → Season → Serve. If the 'Season' step is accidentally skipped, what is the most likely result?",
   options:["The food is still perfectly fine","The food will be unseasoned / bland","The food will be overcooked","The chopping step will also be skipped"],
   answer:1},

  // q28: Cause-effect chain — a single change ripples through a system
  // Scenario: a school raises library book limit from 2 to 5 per student.
  // Effect chain: more books borrowed → fewer books available on shelves → other students wait longer → some books get lost → library needs to buy replacements
  {id:"q28", dim:"systems", difficulty:"medium", timer:50,
   prompt:"A school library increases the borrowing limit from 2 books to 5 books per student. Which chain of effects is most likely?",
   options:["Nothing changes — students will still borrow the same number",
            "More books are borrowed → fewer books on shelves → other students must wait longer",
            "Students immediately read 5 books at once → grades improve → school wins an award",
            "Books will last longer because more people are reading them"],
   answer:1},

  // q29: Feedback loop — thermostat
  // When room temperature drops below the set level, the heater turns on; when it reaches the set level, it turns off.
  // This is a negative feedback loop that keeps temperature stable.
  {id:"q29", dim:"systems", difficulty:"medium", timer:50,
   prompt:"A room thermostat works like this: when the temperature falls below 20°C the heater switches ON; when it reaches 20°C the heater switches OFF. You set it to 20°C in a cold room. What happens over time?",
   options:["The heater stays on permanently until you switch it off manually",
            "The temperature rises to 20°C, then the heater cycles on and off to keep it near that level",
            "The room temperature keeps rising indefinitely past 20°C",
            "Nothing happens — the room stays cold"],
   answer:1},

  // q30: Single point of failure — if one part of a chain fails, the whole chain stops
  // Scenario: internet works like router → modem → ISP. If modem breaks, even if router and ISP are fine, internet stops.
  {id:"q30", dim:"systems", difficulty:"hard", timer:50,
   prompt:"Your home internet works through this chain: Your device → Router → Modem → Internet provider. The modem breaks. What is the result, even though the router and internet provider are both working perfectly?",
   options:["Your device still connects to the internet through the router alone",
            "Only the router stops working",
            "No device in your home can reach the internet",
            "The internet provider also breaks down"],
   answer:2},

  /* ── LOGICAL & SEQUENTIAL THINKING (q31–q44) ── */

  // q31: series diffs ×2: 3,6,12,24 → 1,4,10,22,46,? 22+24=... wait recompute below
  // 1,4,10,22,46: diffs 3,6,12,24 → next diff 48 → 46+48=94
  {id:"q31", dim:"logic", difficulty:"medium", timer:50,
   prompt:"What comes next in this series?   1, 4, 10, 22, 46, __",
   options:["88","92","94","100"],
   answer:2},

  // q32 (code): nested if. x=4 → x>5 false → else: x>2 true → "Medium"
  {id:"q32", dim:"logic", difficulty:"medium", timer:55,
   prompt:"x is 4. Follow the steps. What gets shown?",
   code:"x = 4\nif x is greater than 5:\n    show \"High\"\notherwise:\n    if x is greater than 2:\n        show \"Medium\"\n    otherwise:\n        show \"Low\"",
   options:["High","Medium","Low","Nothing"],
   answer:1},

  // q33: syllogism valid — All cats are mammals; Felix is a cat → Felix is a mammal
  {id:"q33", dim:"logic", difficulty:"easy", timer:45,
   prompt:"All cats are mammals. Felix is a cat. Which conclusion is logically correct?",
   options:["Felix is a mammal.","Felix is not a mammal.","We cannot tell whether Felix is a mammal.","All mammals are cats."],
   answer:0},

  // q34 (code): loop sum 1..4 → 1+2+3+4 = 10
  {id:"q34", dim:"logic", difficulty:"easy", timer:55,
   prompt:"Start with total = 0. Follow the steps. What is total at the end?",
   code:"total = 0\nfor each number in [1, 2, 3, 4]:\n    add the number to total",
   options:["4","7","10","24"],
   answer:2},

  // q35: odd-one-out — 2,3,5,9 → 9 is the only non-prime (also only odd composite)
  {id:"q35", dim:"logic", difficulty:"medium", timer:45,
   prompt:"Which one does NOT belong with the others?   2, 3, 5, 9",
   options:["2","3","5","9"],
   answer:3},

  // q36 (code): while loop. n=10; while n>1: n=n-3 → 10,7,4,1 stop. Count subtractions=3
  {id:"q36", dim:"logic", difficulty:"hard", timer:55,
   prompt:"Start with n = 10 and count = 0. Follow the steps. What is count at the end?",
   code:"n = 10\ncount = 0\nwhile n is greater than 1:\n    n = n - 3\n    add 1 to count",
   options:["2","3","4","5"],
   answer:1},

  // q37: coding-decoding. If CAB=312 (C=3,A=1,B=2), then BAD=? B=2,A=1,D=4 → 214
  {id:"q37", dim:"logic", difficulty:"medium", timer:50,
   prompt:"Using letter positions (A=1, B=2, C=3 …), the word CAB is written as 3-1-2. Using the same idea, how is the word BAD written?",
   options:["2-1-4","4-1-2","2-4-1","1-2-4"],
   answer:0},

  // q38: analogy. Hand:Glove :: Foot:? → Sock
  {id:"q38", dim:"logic", difficulty:"easy", timer:45,
   prompt:"Hand is to Glove as Foot is to __",
   options:["Shoe lace","Sock","Toe","Leg"],
   answer:1},

  // q39 (code): if AND with one false. age=20, hasTicket=false → both needed → "No entry"
  {id:"q39", dim:"logic", difficulty:"medium", timer:55,
   prompt:"Follow the steps. What gets shown?",
   code:"age = 20\nhasTicket = false\nif age is at least 18 AND hasTicket is true:\n    show \"Enter\"\notherwise:\n    show \"No entry\"",
   options:["Enter","No entry","Nothing","Error"],
   answer:1},

  // q40: series — alternating +2,+3: 1,3,6,8,11,13,? +2 → wait pattern: +2,+3,+2,+3,+2 → next +3 →16
  // 1,3,6,8,11,13: diffs 2,3,2,3,2 → next 3 → 16
  {id:"q40", dim:"logic", difficulty:"medium", timer:50,
   prompt:"What comes next in this series?   1, 3, 6, 8, 11, 13, __",
   options:["15","16","17","18"],
   answer:1},

  // q41: syllogism — Some birds can fly. Penguins are birds. → cannot conclude penguins fly
  {id:"q41", dim:"logic", difficulty:"hard", timer:50,
   prompt:"Some birds can fly. Penguins are birds. Which conclusion is logically correct?",
   options:["Penguins can fly.","Penguins cannot fly.","We cannot conclude from this whether penguins can fly.","All birds are penguins."],
   answer:2},

  // q42 (code): OR condition. raining=false, weekend=true → if raining OR weekend → "Stay in"
  {id:"q42", dim:"logic", difficulty:"easy", timer:55,
   prompt:"Follow the steps. What gets shown?",
   code:"raining = false\nweekend = true\nif raining is true OR weekend is true:\n    show \"Stay in\"\notherwise:\n    show \"Go out\"",
   options:["Stay in","Go out","Nothing","Both"],
   answer:0},

  // q43: ordering rule — three people in a queue. Amy is behind Ben. Ben is behind Cara. Who is first?
  // Cara, Ben, Amy → Cara first
  {id:"q43", dim:"logic", difficulty:"medium", timer:50,
   prompt:"Three people stand in a queue. Amy is behind Ben. Ben is behind Cara. Who is at the FRONT of the queue?",
   options:["Amy","Ben","Cara","Cannot tell"],
   answer:2},

  // q44 (code): count even numbers in [2,5,8,11,14] → 2,8,14 → 3
  {id:"q44", dim:"logic", difficulty:"medium", timer:55,
   prompt:"Start with count = 0. Add 1 to count for each EVEN number in the list. What is count at the end?",
   code:"count = 0\nfor each number in [2, 5, 8, 11, 14]:\n    if number is even:\n        add 1 to count",
   options:["2","3","4","5"],
   answer:1},

  /* ── PATTERN RECOGNITION (q45–q58) ── */

  // q45: triangular numbers 1,3,6,10,15,? = 21
  {id:"q45", dim:"pattern", difficulty:"medium", timer:45,
   prompt:"What comes next?   1, 3, 6, 10, 15, __",
   options:["18","20","21","22"],
   answer:2},

  // q46: ×3 each time 2,6,18,54,? = 162
  {id:"q46", dim:"pattern", difficulty:"easy", timer:45,
   prompt:"What comes next?   2, 6, 18, 54, __",
   options:["108","162","216","148"],
   answer:1},

  // q47: cubes 1,8,27,64,? = 125
  {id:"q47", dim:"pattern", difficulty:"hard", timer:50,
   prompt:"What comes next?   1, 8, 27, 64, __",
   options:["100","121","125","128"],
   answer:2},

  // q48: letter series skip one. A,C,E,G,? = I
  {id:"q48", dim:"pattern", difficulty:"easy", timer:45,
   prompt:"What letter comes next?   A, C, E, G, __",
   options:["H","I","J","K"],
   answer:1},

  // q49: Fibonacci-like 2,3,5,8,13,? = 21
  {id:"q49", dim:"pattern", difficulty:"medium", timer:50,
   prompt:"What comes next?   2, 3, 5, 8, 13, __",
   options:["18","20","21","26"],
   answer:2},

  // q50: shape count pattern described — sides: triangle3, square4, pentagon5, hexagon6 → next heptagon 7
  {id:"q50", dim:"pattern", difficulty:"easy", timer:45,
   prompt:"A sequence of shapes has these numbers of sides:   3, 4, 5, 6, __   What is the next number of sides?",
   options:["7","8","9","10"],
   answer:0},

  // q51: alternating sequence ×2 and -1: 4,8,7,14,13,? 4×2=8,8-1=7,7×2=14,14-1=13,13×2=26
  {id:"q51", dim:"pattern", difficulty:"hard", timer:55,
   prompt:"Find the rule and complete the sequence.   4, 8, 7, 14, 13, __",
   options:["12","24","26","27"],
   answer:2},

  // q52: repeating block ABCABCAB? → C (positions: A B C A B C A B then C)
  {id:"q52", dim:"pattern", difficulty:"easy", timer:45,
   prompt:"What letter comes next?   A, B, C, A, B, C, A, B, __",
   options:["A","B","C","D"],
   answer:2},

  // q53: differences halve: 32,48,56,60,? diffs 16,8,4 → next 2 → 62
  {id:"q53", dim:"pattern", difficulty:"hard", timer:55,
   prompt:"What comes next?   32, 48, 56, 60, __",
   options:["61","62","64","66"],
   answer:1},

  // q54: -7 each time 50,43,36,29,? = 22
  {id:"q54", dim:"pattern", difficulty:"easy", timer:45,
   prompt:"What comes next?   50, 43, 36, 29, __",
   options:["21","22","23","24"],
   answer:1},

  // q55: number+letter pair series. 1A,2C,3E,4G,? gap+2 letters → 5I
  {id:"q55", dim:"pattern", difficulty:"medium", timer:50,
   prompt:"What comes next?   1A, 2C, 3E, 4G, __   (Letters: A=1, B=2 …)",
   options:["5H","5I","5J","6I"],
   answer:1},

  // q56: squares+1 → 2,5,10,17,26 same as q1 family; use ×: positions n^2: use 2,5,10,17 → avoid dup. Use n^2-1: 0,3,8,15,24,? =35
  {id:"q56", dim:"pattern", difficulty:"medium", timer:50,
   prompt:"What comes next?   0, 3, 8, 15, 24, __",
   options:["33","34","35","36"],
   answer:2},

  // q57: interleaved: odd pos +5 (1,6,11), even pos ×2 (2,4,8): 1,2,6,4,11,8,? next odd-pos = 16
  {id:"q57", dim:"pattern", difficulty:"hard", timer:55,
   prompt:"Two patterns are woven together. Find the rule and complete the sequence.   1, 2, 6, 4, 11, 8, __",
   options:["14","16","12","10"],
   answer:1},

  // q58: doubling minus pattern? Use simple ×2+1: 1,3,7,15,31,? =63
  {id:"q58", dim:"pattern", difficulty:"medium", timer:50,
   prompt:"What comes next?   1, 3, 7, 15, 31, __",
   options:["47","62","63","64"],
   answer:2},

  /* ── PRECISION & ATTENTION TO DETAIL (q59–q72) ── */

  // q59: spot the different string. Three "10110", one "10100"
  {id:"q59", dim:"precision", difficulty:"easy", timer:45,
   prompt:"Three of these are exactly the same. Which one is DIFFERENT?",
   options:["10110","10110","10100","10110"],
   answer:2},

  // q60: count the letter 's' in "mississippi" → s appears 4 times
  {id:"q60", dim:"precision", difficulty:"medium", timer:50,
   prompt:"How many times does the letter 's' appear in the word 'mississippi'?",
   options:["2","3","4","5"],
   answer:2},

  // q61: matching brackets — which is correctly balanced? ( [ ] ) correct
  {id:"q61", dim:"precision", difficulty:"hard", timer:55,
   prompt:"In which option are the brackets correctly matched and nested (every opening bracket closed in the right order)?",
   options:["( [ ) ]","( [ ] )","[ ( ] )",") ( ] [" ],
   answer:1},

  // q62: off-by-one — numbers 5 to 12 inclusive → 12-5+1 = 8
  {id:"q62", dim:"precision", difficulty:"medium", timer:50,
   prompt:"How many whole numbers are there from 5 to 12, including both 5 and 12?",
   options:["7","8","9","6"],
   answer:1},

  // q63: spot different equation. three "a*b+c=d", one "a*b-c=d"
  {id:"q63", dim:"precision", difficulty:"easy", timer:45,
   prompt:"Three of these are exactly the same. Which one is DIFFERENT?",
   options:["a * b + c = d","a * b + c = d","a * b + c = d","a * b - c = d"],
   answer:3},

  // q64: all conditions. password rule: at least 8 chars AND has a digit AND has uppercase
  // "Hello12!" len8, has digit, has uppercase → valid. Others fail one.
  {id:"q64", dim:"precision", difficulty:"hard", timer:55,
   prompt:"A password is valid ONLY if ALL three rules hold:\n• at least 8 characters long\n• contains at least one digit\n• contains at least one capital letter\n\nWhich password is valid?",
   options:["hello123 (8 characters)","Hello12 (7 characters)","HELLOWORLD (10 characters)","Hello123 (8 characters)"],
   answer:3},

  // q65: careful reading — third-smallest. 14, 9, 21, 3, 17 → sorted 3,9,14,17,21 → third = 14
  {id:"q65", dim:"precision", difficulty:"medium", timer:50,
   prompt:"From this list, what is the THIRD-SMALLEST value?   14, 9, 21, 3, 17",
   options:["9","14","17","21"],
   answer:1},

  // q66: count zeros in 1003020 → digits 1,0,0,3,0,2,0 → four zeros
  {id:"q66", dim:"precision", difficulty:"easy", timer:45,
   prompt:"How many zeros are in the number 1,003,020?",
   options:["3","4","5","2"],
   answer:1},

  // q67: instruction following — reverse the list [1,2,3,4] → [4,3,2,1]
  {id:"q67", dim:"precision", difficulty:"easy", timer:45,
   prompt:"Rule: reverse the order of the list. Apply it to [1, 2, 3, 4]. Which result is correct?",
   options:["[4, 3, 2, 1]","[1, 2, 3, 4]","[2, 1, 4, 3]","[4, 1, 2, 3]"],
   answer:0},

  // q68: spot subtle difference in long number. 4830271 vs 4830271 vs 4830217 vs 4830271
  {id:"q68", dim:"precision", difficulty:"medium", timer:50,
   prompt:"Three of these numbers are exactly the same. Which one is DIFFERENT?",
   options:["4830271","4830271","4830217","4830271"],
   answer:2},

  // q69: out-of-order steps — login: open app→enter username→enter password→click login
  // wrong version: click login before entering password
  {id:"q69", dim:"precision", difficulty:"medium", timer:50,
   prompt:"One version of these login steps has a step out of order. Which version is WRONG?",
   options:["Open app → enter username → enter password → click Login",
            "Open app → enter username → click Login → enter password",
            "Open app → enter password → enter username → click Login",
            "Open app → enter username → enter password → wait → click Login"],
   answer:1},

  // q70: apply rule exactly — double every number then subtract 1. [2,3] → [3,5]
  {id:"q70", dim:"precision", difficulty:"medium", timer:50,
   prompt:"Rule: double each number, then subtract 1. Apply it to [2, 3]. Which result is correct?",
   options:["[4, 6]","[3, 5]","[1, 2]","[5, 7]"],
   answer:1},

  // q71: which line differs in spacing/symbol. compare "if x == 5" three times, one "if x = 5"
  {id:"q71", dim:"precision", difficulty:"hard", timer:55,
   prompt:"Three of these are exactly the same. Which one is DIFFERENT?",
   options:["if x == 5 then stop","if x == 5 then stop","if x = 5 then stop","if x == 5 then stop"],
   answer:2},

  // q72: count uppercase letters in "HelloWorldHI" → H,W,H,I = 4
  {id:"q72", dim:"precision", difficulty:"medium", timer:50,
   prompt:"How many CAPITAL (uppercase) letters are in the text 'HelloWorldHI'?",
   options:["3","4","5","2"],
   answer:1},

  /* ── PROBLEM DECOMPOSITION (q73–q86) ── */

  // q73: missing step — making tea: boil water, add teabag, pour water, wait, remove teabag, add milk
  // listed: boil water, add teabag to cup, wait, add milk → missing "pour hot water into cup"
  {id:"q73", dim:"decomp", difficulty:"easy", timer:50,
   prompt:"Someone listed steps for making tea:\n1. Boil the water\n2. Put a teabag in the cup\n3. Wait for it to brew\n4. Add milk\n\nWhich important step is MISSING?",
   options:["Buy the teabags","Pour the hot water into the cup","Drink the tea","Wash the cup afterwards"],
   answer:1},

  // q74: parallel/serial timing. Wash 30, dry 40 per load, 2 loads, one washer one dryer.
  // Load1 wash 0-30, dry 30-70. Load2 wash 30-60, dry 70-110. Total = 110
  {id:"q74", dim:"decomp", difficulty:"hard", timer:55,
   prompt:"You must wash and dry 2 loads of laundry. Washing takes 30 min, drying takes 40 min. You have one washer and one dryer. A load must be washed before it can be dried. What is the shortest total time?",
   options:["70 minutes","110 minutes","140 minutes","100 minutes"],
   answer:1},

  // q75: best breakdown — planning a birthday party
  {id:"q75", dim:"decomp", difficulty:"easy", timer:50,
   prompt:"Which list best breaks 'organise a birthday party' into clear, manageable steps?",
   options:["Just sort it out on the day",
            "Set a date → invite guests → arrange food → arrange cake → plan activities",
            "Buy a cake → done",
            "Invite guests → invite guests again → invite guests once more"],
   answer:1},

  // q76: which task can be done first (no dependencies). To paint a wall: clean wall, apply primer, paint, dry
  // First with no prerequisite = clean the wall
  {id:"q76", dim:"decomp", difficulty:"medium", timer:50,
   prompt:"To paint a wall properly: the wall must be cleaned, then primed, then painted, then left to dry. Which task can be done FIRST (it depends on no other step)?",
   options:["Paint the wall","Apply primer","Clean the wall","Let it dry"],
   answer:2},

  // q77: estimate steps realistically — withdrawing cash from an ATM
  {id:"q77", dim:"decomp", difficulty:"medium", timer:45,
   prompt:"Thinking about every small action, roughly how many steps does withdrawing cash from an ATM involve (insert card, enter PIN, choose option, enter amount, take cash, take card)?",
   options:["1 step","2 steps","About 6 steps","Exactly 50 steps"],
   answer:2},

  // q78: isolate cause one at a time — wifi not working
  {id:"q78", dim:"decomp", difficulty:"medium", timer:50,
   prompt:"Your phone won't connect to Wi-Fi. Which approach best isolates the cause one step at a time?",
   options:["Buy a new phone immediately",
            "Check if other devices connect; if not, restart the router; if so, check the phone's Wi-Fi setting",
            "Change every setting on the phone at once",
            "Assume the internet company is at fault and wait"],
   answer:1},

  // q79: dependency ordering — which step must come before another
  // To publish a blog post: write draft → edit → add images → publish. Which MUST come before publishing?
  {id:"q79", dim:"decomp", difficulty:"medium", timer:50,
   prompt:"To publish a blog post you: write a draft, edit it, then publish it. Which step MUST be completed before you can publish?",
   options:["Sharing it on social media","Writing the draft","Reading the comments","Counting the views"],
   answer:1},

  // q80: split a big number-counting job. Count words in a 100-page book, 4 people.
  // Best split = each counts 25 pages then add totals
  {id:"q80", dim:"decomp", difficulty:"easy", timer:50,
   prompt:"Four people must count all the words in a 100-page book as fast as possible. Which plan divides the work best?",
   options:["Everyone counts the whole book separately",
            "Each person counts 25 pages, then add the four totals together",
            "One person counts while three watch",
            "Each person counts the same first page"],
   answer:1},

  // q81: which sub-problem is independent. Building a sandwich: components can be prepared in any order
  // Slicing tomato and toasting bread are independent of each other.
  {id:"q81", dim:"decomp", difficulty:"medium", timer:50,
   prompt:"You are making a toasted sandwich. Which TWO tasks could be done at the same time because neither depends on the other?",
   options:["Eating the sandwich and making it","Toasting the bread and slicing the tomato","Slicing bread and eating it","Buying bread and toasting that same bread"],
   answer:1},

  // q82: critical path. A(4)→C(3); B(2)→C. C needs both A and B done. Min time = max(4,2)+3 = 7
  {id:"q82", dim:"decomp", difficulty:"hard", timer:55,
   prompt:"Task C can only start once BOTH Task A and Task B are finished. A takes 4 min, B takes 2 min (they can run at the same time), and C takes 3 min. What is the shortest time to finish C?",
   options:["5 minutes","7 minutes","9 minutes","3 minutes"],
   answer:1},

  // q83: ordering with constraint — get dressed: socks before shoes, shirt before jacket
  // Which order is valid? socks→shoes→shirt→jacket valid? shoes after socks ok, jacket after shirt ok
  {id:"q83", dim:"decomp", difficulty:"medium", timer:50,
   prompt:"Rules: socks must go on before shoes; a shirt must go on before a jacket. Which order breaks NO rule?",
   options:["Shoes → socks → shirt → jacket",
            "Socks → shoes → shirt → jacket",
            "Shirt → jacket → socks → shoes → jacket",
            "Jacket → shirt → socks → shoes"],
   answer:1},

  // q84: which is NOT a subtask of the goal. Goal: cook pasta. Not a subtask: mow the lawn
  {id:"q84", dim:"decomp", difficulty:"easy", timer:50,
   prompt:"You are breaking down the task 'cook pasta'. Which of these is NOT a useful subtask of that goal?",
   options:["Boil water","Add the pasta","Mow the lawn","Drain the pasta"],
   answer:2},

  // q85: count total small tasks. 3 rooms, each needs sweeping+mopping = 2 tasks → 6 tasks
  {id:"q85", dim:"decomp", difficulty:"medium", timer:50,
   prompt:"You must sweep AND mop each of 3 rooms. Counting each action separately, how many individual cleaning tasks is that in total?",
   options:["3","5","6","9"],
   answer:2},

  // q86: best first sub-goal for big project. Learn to bake bread → start by learning one simple recipe
  {id:"q86", dim:"decomp", difficulty:"medium", timer:50,
   prompt:"A beginner wants to 'become good at baking bread'. Which is the most sensible FIRST sub-goal to break this big aim down?",
   options:["Open a bakery business",
            "Successfully bake one simple loaf from a basic recipe",
            "Invent a brand-new type of bread",
            "Win a national baking competition"],
   answer:1},

  /* ── SYSTEMS & CAUSE-EFFECT THINKING (q87–q100) ── */

  // q87 (chart): bar — sales per quarter [Q1:40,Q2:55,Q3:50,Q4:80]. Biggest jump Q3→Q4 = 30
  {id:"q87", dim:"systems", difficulty:"medium", timer:55,
   prompt:"The bar chart shows quarterly sales (in thousands). Between which two consecutive quarters did sales rise the MOST?",
   chart:barChart(["Q1","Q2","Q3","Q4"],[40,55,50,80],"thousand sales"),
   options:["Q1 to Q2","Q2 to Q3","Q3 to Q4","They all rose equally"],
   answer:2},

  // q88 (line): website load time as page size grows [10,20,40,80,160] roughly doubling → grows faster
  {id:"q88", dim:"systems", difficulty:"medium", timer:55,
   prompt:"The chart shows how long a web page takes to load (ms) as the page gets larger. What best describes the trend?",
   chart:lineChart([10,20,40,80,160],"load time (ms)"),
   options:["Load time stays flat","Load time keeps roughly doubling — it grows faster and faster","Load time falls as the page grows","Load time drops then rises"],
   answer:1},

  // q89: remove a step in pipeline — assembly line: cut→weld→paint→inspect. Skip inspect → faulty items ship
  {id:"q89", dim:"systems", difficulty:"easy", timer:45,
   prompt:"A factory line runs: Cut → Weld → Paint → Inspect. If the 'Inspect' step is skipped, what is the most likely result?",
   options:["Products are made faster with no downside","Faulty products may be shipped without being caught","The cutting step will also stop","Paint quality improves"],
   answer:1},

  // q90: cause-effect chain — road closed → traffic diverts → nearby roads jam
  {id:"q90", dim:"systems", difficulty:"medium", timer:50,
   prompt:"A busy main road is closed for repairs. Which chain of effects is most likely?",
   options:["Nothing changes for nearby roads",
            "Traffic diverts onto nearby roads → those roads become more congested → journeys take longer",
            "All cars instantly disappear",
            "The closed road carries more traffic than before"],
   answer:1},

  // q91: feedback loop — savings account interest. Balance grows → interest grows → balance grows faster
  {id:"q91", dim:"systems", difficulty:"medium", timer:50,
   prompt:"Money in a savings account earns interest, and that interest is added to the balance. Over many years, with nothing withdrawn, what happens?",
   options:["The balance stays the same",
            "The balance grows by the same fixed amount each year",
            "The balance grows faster over time because interest is earned on a larger and larger amount",
            "The balance shrinks"],
   answer:2},

  // q92: single point of failure — a relay race; if one runner falls the team can't finish
  {id:"q92", dim:"systems", difficulty:"easy", timer:50,
   prompt:"In a relay race the baton passes runner 1 → runner 2 → runner 3 → finish. Runner 2 drops out and cannot run. What happens to the team, even though runners 1 and 3 are fine?",
   options:["Runner 3 finishes the race alone for the team","The team cannot complete the relay","Only runner 1's leg is affected","The team automatically wins"],
   answer:1},

  // q93: change one input, predict output. Recipe doubled → twice as much of every ingredient
  {id:"q93", dim:"systems", difficulty:"easy", timer:45,
   prompt:"A recipe makes 4 servings. You want 8 servings. What should happen to the amount of each ingredient?",
   options:["Keep every ingredient the same","Double every ingredient","Halve every ingredient","Only double the flour"],
   answer:1},

  // q94: cache/buffer concept everyday — fill a bucket faster than tap can drain, bucket overflows
  {id:"q94", dim:"systems", difficulty:"hard", timer:55,
   prompt:"Water flows INTO a tank at 10 litres/min and drains OUT at 4 litres/min. The tank starts empty. What happens over time?",
   options:["The water level stays the same","The water level keeps rising and the tank eventually overflows","The tank drains empty","The level rises then falls"],
   answer:1},

  // q95 (chart): bar of errors per day after a fix [Mon:50,Tue:20,Wed:8,Thu:3]. Trend = sharply falling
  {id:"q95", dim:"systems", difficulty:"medium", timer:55,
   prompt:"After a bug fix, the bar chart shows the number of errors reported each day. What does the trend suggest?",
   chart:barChart(["Mon","Tue","Wed","Thu"],[50,20,8,3],"errors"),
   options:["The fix made errors worse","Errors are falling sharply — the fix appears to be working","Errors are staying constant","Errors are rising slowly"],
   answer:1},

  // q96: dependency / knock-on — power cut affects fridge, lights, router (all electric)
  {id:"q96", dim:"systems", difficulty:"easy", timer:50,
   prompt:"A power cut hits a house. Which set of things will most likely stop working at once?",
   options:["The fridge, the lights and the Wi-Fi router","Only the lights","Only the fridge","A battery torch"],
   answer:0},

  // q97: counter-intuitive — adding more cooks doesn't always speed a single small task
  {id:"q97", dim:"systems", difficulty:"hard", timer:55,
   prompt:"One person can write a single short letter in 20 minutes. Why does asking 10 people to write that ONE letter together probably NOT make it 10 times faster?",
   options:["More people always finish any task 10 times faster",
            "The task can't be usefully split among many people, and coordinating them adds overhead",
            "Ten people would refuse to help",
            "Writing speed depends only on pen quality"],
   answer:1},

  // q98: feedback — thermostat too sensitive / overshoot. Heater way too powerful → temperature overshoots then corrects
  {id:"q98", dim:"systems", difficulty:"hard", timer:55,
   prompt:"A heater is so powerful that by the time the thermostat reads 20°C and switches it off, the room keeps warming past 20°C before cooling back. What is this behaviour called in everyday terms?",
   options:["The temperature stays perfectly steady","The temperature overshoots the target, then settles back","The heater never switches off","The thermostat is broken"],
   answer:1},

  // q99: change ripples — increase image size on a webpage → page loads slower, uses more data
  {id:"q99", dim:"systems", difficulty:"medium", timer:50,
   prompt:"A website replaces its small photos with much larger, higher-quality versions. What is the most likely side effect?",
   options:["Pages load faster","Pages load more slowly and use more data","The website uses less storage","Nothing changes at all"],
   answer:1},

  // q100: bottleneck — a chain is only as fast as its slowest stage. Three stages 2,9,3 min/item → throughput limited by 9
  {id:"q100", dim:"systems", difficulty:"hard", timer:55,
   prompt:"An assembly line has three stages working one after another: Stage 1 takes 2 min per item, Stage 2 takes 9 min, Stage 3 takes 3 min. To make the whole line faster, which stage should you improve FIRST?",
   options:["Stage 1","Stage 2","Stage 3","It makes no difference which one"],
   answer:1}
]
};
if (window.__bootAssessment) window.__bootAssessment();
