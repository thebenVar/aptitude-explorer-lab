// Auto-generated assessment data for "engineering". Edit here to change this test.
window.ASSESSMENT = {
  id: "engineering",
  title: "Engineering — Aptitude Check",
  dot: "Eng",
  brandName: "Engineering Aptitude Check",
  loginIntro: "A short, gently-timed, <b>just-for-fun</b> set of questions exploring the thinking patterns Engineering relies on — mathematical reasoning, physical intuition, spatial thinking, understanding how systems interact, and finding the best solution under constraints. No prior engineering knowledge needed.",
  theme: { accent: "#f59e0b", accent2: "#f97316" },
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
    quant: { label:"Mathematical Reasoning",
      means:"comfort with formulas, algebra and proportional thinking — the language of all engineering.",
      improve:"Drill algebra and formula manipulation. Focus on unit conversions and word problems. Khan Academy's Algebra and Physics tracks." },
    physics: { label:"Physical Intuition",
      means:"a feel for how forces, energy, speed, and materials behave before you calculate — good engineers estimate first, then verify.",
      improve:"Watch Veritasium, MinutePhysics, or SmarterEveryDay. Notice everyday physics: why a door is hinged at the edge, why bridges are shaped that way." },
    spatial: { label:"Spatial &amp; 3D Thinking",
      means:"visualising objects in 3D and understanding how they fit together — essential for mechanical, civil, and structural engineering.",
      improve:"Solve tangram and origami puzzles. Sketch objects from different views. Try free tools like Tinkercad or SketchUp." },
    systems: { label:"Systems Thinking",
      means:"seeing how components interact and how failure in one part affects the whole — the mindset behind safe engineering design.",
      improve:"Study engineering failure case studies (bridges, machines). Ask 'what happens if this part fails?' about everyday objects and machines." },
    optimize: { label:"Optimisation &amp; Trade-off Thinking",
      means:"finding the best solution under constraints — engineers rarely have unlimited time, money, or materials.",
      improve:"Work through problems involving constraints: minimum cost, maximum strength, fewest materials. Try resource-management puzzles or games." }
  }
},
  bandText: {
  strong:{ pill:"good", title:"A strong set of answers",
    blurb:"Your answers show the quantitative and spatial reasoning Engineering depends on. You handled trade-off questions and physical intuition well — take this as warm encouragement to explore engineering fields further." },
  promising:{ pill:"warn", title:"A promising mix, with some gaps",
    blurb:"Good instincts in several areas, with a few question types that caught you out. Look at which dimensions scored lower — those thinking patterns are exactly what engineering study builds up over time." },
  gaps:{ pill:"bad", title:"Several question types to practise",
    blurb:"Some of these questions didn't go your way this time. Engineering thinking is built, not born — the notes below point to where to start building." }
},
  bank: [

  /* ── MATHEMATICAL REASONING (q1–q6) ── */

  // q1: simple pipe flow rate — direct proportion
  {id:"q1", dim:"quant", difficulty:"easy", timer:50,
   prompt:"A pipe fills a water tank in 12 minutes. A second, wider pipe fills the same tank in 6 minutes. If both pipes are opened together, how long will it take to fill the tank?",
   options:["9 minutes — average of 12 and 6",
            "4 minutes",
            "18 minutes",
            "3 minutes"],
   // Pipe 1 rate = 1/12 tank/min, Pipe 2 rate = 1/6 tank/min. Together = 1/12 + 1/6 = 1/12 + 2/12 = 3/12 = 1/4 tank/min. Time = 4 minutes.
   answer:1},

  // q2: bridge load — ratio/proportion
  {id:"q2", dim:"quant", difficulty:"easy", timer:45,
   prompt:"A bridge is designed to hold a maximum load of 450 tonnes spread evenly across 30 support beams. An engineer wants to redesign the bridge to use only 18 beams but keep the same total load capacity. What load must each new beam support?",
   options:["15 tonnes",
            "25 tonnes",
            "270 tonnes",
            "9 tonnes"],
   // 450 / 18 = 25 tonnes per beam
   answer:1},

  // q3: area scaling — trap answer is doubling
  {id:"q3", dim:"quant", difficulty:"hard", timer:55,
   /* TRICKY — area scales as square of linear dimension */
   prompt:"A square solar panel with sides of 2 m produces 400 W of power. An engineer doubles the side length to 4 m. Assuming the same efficiency, how much power does the new panel produce?",
   options:["800 W — double the side, double the power",
            "1,200 W",
            "1,600 W",
            "200 W"],
   // Area of 2m square = 4 m². Area of 4m square = 16 m². Ratio = 4. Power = 400 × 4 = 1600 W.
   answer:2},

  // q4: work rate with different speeds
  {id:"q4", dim:"quant", difficulty:"medium", timer:55,
   prompt:"A construction crew can lay 120 metres of pipe in 8 hours. They are joined by a second crew that lays pipe at half the speed. Working together, how long will they take to lay 180 metres of pipe?",
   options:["9 hours",
            "8 hours",
            "12 hours",
            "6 hours"],
   // Crew 1 rate = 120/8 = 15 m/hr. Crew 2 rate = 7.5 m/hr. Together = 22.5 m/hr. Time = 180/22.5 = 8 hours.
   answer:1},

  // q5: percentage increase in cross-sectional area — unit conversion context
  {id:"q5", dim:"quant", difficulty:"medium", timer:50,
   prompt:"A cylindrical pipe has an internal diameter of 10 cm. It is replaced by a pipe with an internal diameter of 20 cm. By what percentage does the cross-sectional area of the pipe increase?",
   options:["100% — the diameter doubled so the area doubles too",
            "200%",
            "300%",
            "400%"],
   // Area ∝ d². Area ratio = (20/10)² = 4. So new area is 4× old area — an increase of 300%.
   answer:2},

  // q6: speed/distance/time with a relay — trap answer is just dividing
  {id:"q6", dim:"quant", difficulty:"hard", timer:60,
   /* TRICKY — train meeting problem */
   prompt:"Two trains start at the same time from stations 300 km apart, heading towards each other. Train A travels at 80 km/h and Train B travels at 70 km/h. How far from Train A's starting station do they meet?",
   options:["150 km — they meet in the middle",
            "160 km",
            "140 km",
            "180 km"],
   // Combined speed = 150 km/h. Time to meet = 300/150 = 2 hours. Train A travels 80 × 2 = 160 km.
   answer:1},

  /* ── PHYSICAL INTUITION (q7–q12) ── */

  // q7: lever / torque intuition
  {id:"q7", dim:"physics", difficulty:"easy", timer:45,
   prompt:"You need to loosen a very tight bolt with a spanner. You have two spanners: one with a handle 15 cm long and one with a handle 30 cm long. Which gives more turning force with the same hand effort, and why?",
   options:["The shorter one — it is stiffer and transfers force better",
            "The longer one — a longer handle multiplies the turning force you apply",
            "They are the same — only the strength of the grip matters",
            "The shorter one — the bolt is closer to your hand so you feel it better"],
   answer:1},

  // q8: floating / buoyancy intuition — trap is material density focus
  {id:"q8", dim:"physics", difficulty:"hard", timer:50,
   /* TRICKY — steel ship floats; steel ball sinks */
   prompt:"A solid steel ball and a large ocean liner (also made mostly of steel) are placed in water. The ball sinks instantly. The ship floats. Which explanation is correct?",
   options:["The ship's steel is a different, lighter grade than the ball's steel",
            "The ship's hull traps a huge volume of air, making the average density of the whole ship (hull + air inside) less than water",
            "The ship floats because it is moving — a stationary ship would also sink",
            "Large objects always float; small objects always sink"],
   answer:1},

  // q9: heat / insulation — trap answer is counterintuitive
  {id:"q9", dim:"physics", difficulty:"medium", timer:45,
   /* TRICKY — a good insulator keeps cold things cold too */
   prompt:"On a very hot summer day, you want to keep a tub of ice cream cold for as long as possible. Should you wrap it in a thick woollen blanket or leave it uncovered?",
   options:["Leave it uncovered — the open air will cool it faster",
            "Wrap it — a good insulator slows heat transfer in both directions, keeping warmth out",
            "Leave it uncovered — wool is a heat source that would melt the ice cream faster",
            "It makes no difference; ice cream melts at the same rate regardless"],
   answer:1},

  // q10: structural shape — arch vs flat beam
  {id:"q10", dim:"physics", difficulty:"medium", timer:50,
   prompt:"Engineers building a bridge over a wide river choose an arched design rather than a flat horizontal beam. What is the main structural reason for this?",
   options:["An arch uses less steel than a flat beam of the same length",
            "An arch converts downward loads into compressive forces along its curve, spreading the load efficiently into the supports — flat beams experience much more bending stress",
            "Arches look more impressive, which makes them cheaper to fund",
            "A flat beam would vibrate dangerously in the wind"],
   answer:1},

  // q11: energy conservation intuition
  {id:"q11", dim:"physics", difficulty:"easy", timer:45,
   prompt:"A ball is rolled along a flat, frictionless surface and then up a smooth ramp. Ignoring air resistance, which statement best describes what happens to its speed at the top of the ramp compared to the bottom?",
   options:["It speeds up — the ramp compresses the ball and releases energy",
            "It slows down — kinetic energy is converted into gravitational potential energy as it climbs",
            "It stays the same — frictionless means no energy is lost",
            "It stops immediately at the start of the ramp"],
   answer:1},

  // q12: counterintuitive — heavier vs lighter falling objects
  {id:"q12", dim:"physics", difficulty:"hard", timer:50,
   /* TRICKY — common misconception about gravity */
   prompt:"You drop a 10 kg iron cannonball and a 1 kg iron ball from the same height at the same moment (no wind, in a vacuum). Which hits the ground first?",
   options:["The 10 kg cannonball — heavier objects fall faster",
            "The 1 kg ball — lighter objects fall faster because gravity has less to pull against",
            "They hit at exactly the same time — gravity accelerates all objects equally regardless of mass",
            "The 10 kg cannonball — it has more momentum"],
   answer:2},

  /* ── SPATIAL & 3D THINKING (q13–q18) ── */

  // q13: net of a cube — how many faces
  {id:"q13", dim:"spatial", difficulty:"easy", timer:45,
   prompt:"A standard cardboard box (a cube) is cut along some of its edges and unfolded flat into a 'net'. How many separate square faces does this flat net contain?",
   options:["4",
            "5",
            "6",
            "8"],
   answer:2},

  // q14: rotating shape — which view is correct
  {id:"q14", dim:"spatial", difficulty:"medium", timer:55,
   prompt:"An L-shaped metal bracket is lying flat on a table, with the long arm pointing right and the short arm pointing upward from the left end. You pick it up and rotate it 90 degrees clockwise (when viewed from above). How does it now look?",
   options:["Long arm pointing down, short arm pointing right from the top end",
            "Long arm pointing left, short arm pointing upward from the right end",
            "Long arm pointing upward, short arm pointing right from the bottom end",
            "Long arm pointing right, short arm pointing downward from the left end"],
   // Original: long arm → right, short arm ↑ from left end. After 90° CW rotation: what was pointing right now points down, what was pointing up now points right. So long arm → down from the top, short arm → right from the top. Answer A.
   answer:0},

  // q15: counting visible faces of stacked cubes
  {id:"q15", dim:"spatial", difficulty:"medium", timer:50,
   prompt:"Three identical cubes are stacked directly on top of each other to form a tower. How many individual faces of the three cubes are NOT touching another cube face? (Count the face resting on the floor as visible — you can slide a piece of paper under it.)",
   options:["12",
            "14",
            "10",
            "16"],
   // Bottom cube: top face touches middle cube (hidden). 5 faces visible (4 sides + bottom). Middle cube: top touches top cube, bottom touches bottom cube. 4 side faces visible. Top cube: bottom touches middle cube. 5 faces visible (4 sides + top). Total = 5+4+5 = 14.
   answer:1},

  // q16: mirror image of an asymmetric shape
  {id:"q16", dim:"spatial", difficulty:"medium", timer:50,
   prompt:"A letter 'R' is reflected in a vertical mirror (the mirror is placed to the right of the letter). Which of the following best describes the reflected image?",
   options:["The letter 'R' looks the same — it is symmetrical",
            "The letter looks like a reversed 'R' with the leg kicking to the left instead of the right",
            "The letter is upside-down but not reversed",
            "The letter appears rotated 90 degrees"],
   answer:1},

  // q17: reading a 2D plan / top-down view
  {id:"q17", dim:"spatial", difficulty:"easy", timer:55,
   prompt:"A floor plan (top-down view) shows a rectangular room 8 m wide and 6 m deep. A square pillar of side 1 m sits exactly in the centre of the room. What is the floor area available (excluding the pillar)?",
   options:["47 m²",
            "48 m²",
            "49 m²",
            "46 m²"],
   // Room area = 8 × 6 = 48 m². Pillar area = 1 × 1 = 1 m². Available = 47 m².
   answer:0},

  // q18: folding net into 3D shape
  {id:"q18", dim:"spatial", difficulty:"hard", timer:55,
   /* TRICKY — a cross-shaped net of 6 squares folds into a cube, not other shapes */
   prompt:"A flat cross shape is made by placing one square in the centre, one square on each of its four sides, and one more square on top of one of those four. When folded up, what 3D shape does this net form?",
   options:["A rectangular box (cuboid) that is not a cube",
            "A cube",
            "A triangular prism",
            "A pyramid"],
   answer:1},

  /* ── SYSTEMS THINKING (q19–q24) ── */

  // q19: single point of failure
  {id:"q19", dim:"systems", difficulty:"easy", timer:50,
   prompt:"A factory assembly line has six machines in a sequence: each machine processes a part before passing it to the next. If any single machine breaks down, what happens to the whole line?",
   options:["Only the broken machine stops; the others continue independently",
            "The line slows by one-sixth of its capacity",
            "The entire line stops — because the machines are dependent in sequence, one failure blocks all the others",
            "The line automatically reroutes work around the broken machine"],
   answer:2},

  // q20: feedback loop — thermostat
  {id:"q20", dim:"systems", difficulty:"medium", timer:45,
   prompt:"A room thermostat switches the heater ON when the temperature drops below 20°C, and switches it OFF when the temperature rises above 22°C. This is an example of what type of control mechanism?",
   options:["Open-loop control — the heater runs at a fixed schedule regardless of temperature",
            "Negative feedback — the system senses its output (room temperature) and uses that information to correct itself back toward the target range",
            "Positive feedback — the warmer the room gets, the harder the heater works",
            "Random control — the thermostat guesses when to switch"],
   answer:1},

  // q21: systems cascade — chart shows load vs deformation
  {id:"q21", dim:"systems", difficulty:"medium", timer:60,
   prompt:"The chart below shows how a steel beam deforms under increasing load. Beyond a certain point, each small additional load causes a much larger deformation. What does this sudden change in the curve indicate?",
   chart:lineChart([2, 4, 6, 8, 12, 20, 36], "deformation (mm) vs load (kN) →"),
   options:["The measuring instrument became inaccurate at high loads",
            "The beam has exceeded its elastic limit — it is now deforming permanently and is approaching failure",
            "The load was applied too quickly and the results are unreliable",
            "Steel always behaves this way; the chart is normal and the beam is fine"],
   answer:1},

  // q22: redundancy in systems
  {id:"q22", dim:"systems", difficulty:"medium", timer:50,
   prompt:"An aircraft has three independent hydraulic systems, any one of which can operate the flight controls alone. Why do engineers include this redundancy rather than just using one reliable system?",
   options:["Three systems are cheaper to maintain than one large system",
            "Aviation regulations require exactly three systems by law in all countries",
            "If one system fails (due to a leak, seal failure, etc.), the remaining systems ensure the aircraft can still be controlled safely — redundancy protects against single-point failure",
            "Three smaller systems weigh less than one large system"],
   answer:2},

  // q23: systems thinking — bottleneck — chart shows throughput per stage
  {id:"q23", dim:"systems", difficulty:"medium", timer:55,
   prompt:"The chart below shows how many units per hour each stage of a five-stage production line can process. What is the maximum output rate of the entire line, and which stage determines it?",
   chart:barChart(["Stage 1","Stage 2","Stage 3","Stage 4","Stage 5"],[120,95,60,110,100],"units / hour"),
   options:["120 units/hour — the fastest stage sets the pace",
            "97 units/hour — the average of all five stages",
            "60 units/hour — the slowest stage limits the whole line",
            "485 units/hour — the sum of all stages"],
   answer:2},

  // q24: unintended consequences in a system
  {id:"q24", dim:"systems", difficulty:"hard", timer:55,
   /* TRICKY — fixing one part causes a problem elsewhere */
   prompt:"A city widens a busy road to reduce traffic congestion. Six months later, congestion is worse than before. Which systems-thinking concept best explains this?",
   options:["The road widening was done incorrectly by the contractors",
            "Induced demand — making a road wider attracts more drivers who previously used other routes or modes, filling the new capacity and often making congestion worse",
            "Traffic always increases over time regardless of road width",
            "The city should have widened the road even more"],
   answer:1},

  /* ── OPTIMISATION & TRADE-OFF THINKING (q25–q30) ── */

  // q25: minimum cuts to divide a plank
  {id:"q25", dim:"optimize", difficulty:"medium", timer:45,
   /* TRICKY — trap is 9 cuts for 10 pieces */
   prompt:"A carpenter needs to cut a wooden plank into exactly 10 equal pieces. Each cut goes all the way through the plank. What is the minimum number of cuts needed?",
   options:["10 cuts",
            "9 cuts",
            "5 cuts — cut the pieces in half each time",
            "8 cuts"],
   // Each cut produces one extra piece. Starting with 1 piece, n cuts give n+1 pieces. For 10 pieces: 9 cuts.
   answer:1},

  // q26: cheapest combination under a constraint
  {id:"q26", dim:"optimize", difficulty:"medium", timer:60,
   prompt:"A civil engineer needs at least 500 kg of gravel. Supplier A sells gravel in 50 kg bags at ₹120 each. Supplier B sells it in 80 kg bags at ₹180 each. Which option is cheapest for buying at least 500 kg?",
   options:["Supplier A: 10 bags = ₹1,200",
            "Supplier B: 7 bags (560 kg) = ₹1,260",
            "Supplier B: 6 bags (480 kg) = ₹1,080 — close enough to 500 kg",
            "Supplier A: 9 bags (450 kg) = ₹1,080 — close enough"],
   // Must get AT LEAST 500 kg. A: 10 × ₹120 = ₹1,200 for 500 kg. B: 7 × ₹180 = ₹1,260 for 560 kg. B 6 bags = 480 kg — insufficient. A 9 bags = 450 kg — insufficient. Cheapest valid option = Supplier A at ₹1,200.
   answer:0},

  // q27: route optimisation — minimum fuel
  {id:"q27", dim:"optimize", difficulty:"easy", timer:55,
   prompt:"A delivery van needs to travel from Town X to Town Z. Route 1 is 80 km of highway (fuel use: 8 km per litre). Route 2 is 60 km of hilly road (fuel use: 5 km per litre). Route 3 is 70 km of mixed road (fuel use: 6 km per litre). Which route uses the least fuel?",
   options:["Route 1 — longest distance but most fuel-efficient road",
            "Route 2 — shortest distance",
            "Route 3 — a middle-ground option",
            "All three routes use the same fuel"],
   // Route 1: 80/8 = 10 litres. Route 2: 60/5 = 12 litres. Route 3: 70/6 ≈ 11.7 litres. Route 1 uses the least fuel.
   answer:0},

  // q28: minimum material for a given enclosure — trade-off
  {id:"q28", dim:"optimize", difficulty:"hard", timer:60,
   /* TRICKY — a square uses less perimeter for the same area than a rectangle */
   prompt:"An engineer needs to enclose a rectangular area of 36 m² using the least possible length of fencing. Which rectangle shape achieves this?",
   options:["A rectangle 18 m × 2 m (perimeter = 40 m)",
            "A rectangle 12 m × 3 m (perimeter = 30 m)",
            "A rectangle 9 m × 4 m (perimeter = 26 m)",
            "A square 6 m × 6 m (perimeter = 24 m)"],
   // For fixed area, the square minimises perimeter. 6×6 = 36 m², perimeter = 24 m. That's the minimum.
   answer:3},

  // q29: cost vs strength trade-off in material selection
  {id:"q29", dim:"optimize", difficulty:"medium", timer:55,
   prompt:"An engineer must choose a material for a bridge component. The table of options is: Material W — cost ₹10,000, strength rating 8/10. Material X — cost ₹6,000, strength rating 5/10. Material Y — cost ₹8,000, strength rating 8/10. Material Z — cost ₹14,000, strength rating 9/10. The minimum acceptable strength rating is 8/10. Which material gives the required strength at the lowest cost?",
   options:["Material W — cost ₹10,000, strength 8/10",
            "Material X — cheapest overall",
            "Material Y — cost ₹8,000, strength 8/10",
            "Material Z — highest strength"],
   // X has strength 5/10 — below minimum. W: ₹10,000 meets minimum. Y: ₹8,000 meets minimum. Y is cheaper than W and meets the constraint.
   answer:2},

  // q30: scheduling / resource optimisation
  {id:"q30", dim:"optimize", difficulty:"hard", timer:60,
   /* TRICKY — parallel vs sequential task completion */
   prompt:"A project has three tasks: Task A takes 4 hours, Task B takes 3 hours, and Task C takes 2 hours. Tasks A and B can be done simultaneously by different workers. Task C can only start after both A and B are finished. With two workers available, what is the minimum total time to complete all three tasks?",
   options:["9 hours — add all task durations together",
            "7 hours — do A and B together (3 hrs minimum, but A takes 4) then C",
            "6 hours — do A and B in parallel (4 hours), then C (2 hours)",
            "5 hours — assign two workers to Task A to finish it in 2 hours, then B and C"],
   // Worker 1 does A (4 hours). Worker 2 does B (3 hours), then waits 1 hour. C starts after both finish (at hour 4). C takes 2 hours. Total = 4 + 2 = 6 hours.
   answer:2},

  /* ── NEW: MATHEMATICAL REASONING (q31–q44) — 4 easy, 8 medium, 2 hard ── */

  {id:"q31", dim:"quant", difficulty:"easy", timer:45,
   prompt:"A machine produces 240 bottles per hour. How many bottles does it produce in 15 minutes, running at the same rate?",
   options:["40","60","80","120"],
   // 240 per 60 min → 240/4 = 60 in 15 min.
   answer:1},

  {id:"q32", dim:"quant", difficulty:"easy", timer:45,
   prompt:"A recipe for concrete mixes cement and sand in the ratio 1 : 3 by weight. If you use 5 kg of cement, how much sand do you need?",
   options:["8 kg","12 kg","15 kg","20 kg"],
   // 3 × 5 = 15 kg.
   answer:2},

  {id:"q33", dim:"quant", difficulty:"easy", timer:50,
   prompt:"Solve for x:   5x − 7 = 33",
   options:["6","7","8","9"],
   // 5x = 40 → x = 8.
   answer:2},

  {id:"q34", dim:"quant", difficulty:"easy", timer:45,
   prompt:"A car travels 150 km using 10 litres of fuel. How far can it travel on 4 litres at the same efficiency?",
   options:["45 km","50 km","60 km","75 km"],
   // 150/10 = 15 km/litre × 4 = 60 km.
   answer:2},

  {id:"q35", dim:"quant", difficulty:"medium", timer:55,
   prompt:"A water tank holds 600 litres. A leak drains it at 5 litres per minute while an inflow pipe adds 8 litres per minute. Starting from empty, how long until the tank is full?",
   options:["120 minutes","150 minutes","200 minutes","75 minutes"],
   // Net fill rate = 8 − 5 = 3 L/min. 600/3 = 200 min.
   answer:2},

  {id:"q36", dim:"quant", difficulty:"medium", timer:55,
   prompt:"A rectangular metal sheet is 1.2 m long and 0.5 m wide. It weighs 6 kg. What is the weight of a sheet of the same material that is 2.4 m long and 1 m wide (double both dimensions)?",
   options:["12 kg","18 kg","24 kg","36 kg"],
   // Area scales by 2×2 = 4. Weight = 6 × 4 = 24 kg.
   answer:2},

  {id:"q37", dim:"quant", difficulty:"medium", timer:50,
   prompt:"A gear with 12 teeth drives a gear with 36 teeth. If the small gear turns at 300 revolutions per minute, how fast does the large gear turn?",
   options:["100 rpm","150 rpm","600 rpm","900 rpm"],
   // Speed ratio inverse to teeth: 300 × (12/36) = 100 rpm.
   answer:0},

  {id:"q38", dim:"quant", difficulty:"medium", timer:55,
   prompt:"An electric motor is 80% efficient. If it draws 1,000 watts of electrical power, how much useful mechanical power does it deliver?",
   options:["200 W","800 W","1,000 W","1,250 W"],
   // 80% of 1000 = 800 W.
   answer:1},

  {id:"q39", dim:"quant", difficulty:"medium", timer:55,
   prompt:"A project was estimated to cost ₹40,000 but ended up costing ₹50,000. By what percentage did the cost overrun the estimate?",
   options:["10%","20%","25%","40%"],
   // (50000−40000)/40000 = 10000/40000 = 25%.
   answer:2},

  {id:"q40", dim:"quant", difficulty:"medium", timer:55,
   prompt:"A pump's output increases by 10% one month, then by another 20% the next month. Compared to the start, what is the total percentage increase?",
   options:["30%","32%","28%","35%"],
   // 1.10 × 1.20 = 1.32 → 32% increase.
   answer:1},

  {id:"q41", dim:"quant", difficulty:"medium", timer:55,
   prompt:"A beam's length is measured as 4.0 m with a possible error of ±2%. What is the largest length it could actually be?",
   options:["4.02 m","4.08 m","4.20 m","4.40 m"],
   // 2% of 4.0 = 0.08. Max = 4.08 m.
   answer:1},

  {id:"q42", dim:"quant", difficulty:"medium", timer:55,
   prompt:"Three resistors each let through 2 amps of current and are connected so their currents add together. A fourth identical resistor is added in the same way. What is the total current now?",
   options:["6 amps","8 amps","4 amps","2 amps"],
   // 4 × 2 = 8 amps.
   answer:1},

  {id:"q43", dim:"quant", difficulty:"hard", timer:60,
   prompt:"A tank can be filled by pipe A in 3 hours and emptied by drain B in 5 hours. If both are open at once on an empty tank, how long to fill it?",
   options:["7.5 hours","8 hours","4 hours","2 hours"],
   // Fill rate = 1/3, drain = 1/5. Net = 1/3 − 1/5 = 5/15 − 3/15 = 2/15 per hour. Time = 15/2 = 7.5 h.
   answer:0},

  {id:"q44", dim:"quant", difficulty:"hard", timer:60,
   prompt:"A spherical balloon's radius doubles. Its volume scales with the cube of the radius. By what factor does the volume increase?",
   options:["2 times","4 times","6 times","8 times"],
   // 2^3 = 8.
   answer:3},

  /* ── NEW: PHYSICAL INTUITION (q45–q58) — 4 easy, 8 medium, 2 hard ── */

  {id:"q45", dim:"physics", difficulty:"easy", timer:45,
   prompt:"You push a heavy box across the floor at a steady, constant speed. What does this tell you about the forces on the box?",
   options:["Your push is greater than friction",
            "Your push exactly balances the friction force, so the net force is zero",
            "There is no friction acting on the box",
            "Friction is greater than your push"],
   // Constant velocity means net force = 0, so push balances friction.
   answer:1},

  {id:"q46", dim:"physics", difficulty:"easy", timer:45,
   prompt:"Why does a sharp knife cut more easily than a blunt one, using the same pushing force?",
   options:["A sharp edge concentrates the force onto a tiny area, creating much higher pressure",
            "A sharp knife is always made of harder metal",
            "A blunt knife actually has more friction with your hand",
            "Sharp knives are heavier, adding more force"],
   // Smaller area → higher pressure for same force.
   answer:0},

  {id:"q47", dim:"physics", difficulty:"easy", timer:45,
   prompt:"A cyclist stops pedalling on a flat road and gradually slows to a stop. What mainly causes them to slow down?",
   options:["Gravity pulling the bike backward",
            "Friction and air resistance opposing the motion",
            "The wheels run out of stored speed",
            "The road pushes the bike backward on purpose"],
   answer:1},

  {id:"q48", dim:"physics", difficulty:"easy", timer:50,
   prompt:"Two children sit on a see-saw. A heavier child sits closer to the pivot and a lighter child sits farther out, and it balances. Why can the lighter child balance the heavier one?",
   options:["The lighter child is actually pushing down harder",
            "Sitting farther from the pivot gives a longer lever arm, so a smaller weight produces the same turning effect",
            "See-saws ignore weight entirely",
            "The heavier child is lifting themselves up"],
   answer:1},

  {id:"q49", dim:"physics", difficulty:"medium", timer:50,
   prompt:"A car going 30 km/h needs a certain distance to brake to a stop. If it instead travels at 60 km/h, roughly how does the braking distance compare (same brakes, same road)?",
   options:["About the same",
            "About twice as long",
            "About four times as long",
            "About half as long"],
   // Braking distance ∝ speed². Doubling speed → 4× distance.
   answer:2},

  {id:"q50", dim:"physics", difficulty:"medium", timer:50,
   prompt:"Hot air balloons rise because the air inside is heated. What is the main reason heating makes the balloon rise?",
   options:["Hot air is heavier and sinks, pushing the balloon up",
            "Heated air expands and becomes less dense than the surrounding cooler air, so the balloon is buoyant",
            "The flame physically pushes the balloon upward",
            "Heat removes the balloon's weight"],
   answer:1},

  {id:"q51", dim:"physics", difficulty:"medium", timer:50,
   prompt:"A wide, flat-bottomed boot sinks less into soft snow than a narrow high-heeled shoe carrying the same person. Why?",
   options:["The boot is lighter than the shoe",
            "The larger contact area spreads the weight, lowering the pressure on the snow",
            "Snow is attracted to narrow objects",
            "Heels are always made of denser material"],
   answer:1},

  {id:"q52", dim:"physics", difficulty:"medium", timer:50,
   prompt:"Why do metal bridges have small gaps (expansion joints) built into them?",
   options:["To let rainwater drain through",
            "To allow the metal to expand and contract with temperature changes without buckling or cracking",
            "To reduce the total weight of the bridge",
            "To make the bridge flexible in earthquakes only"],
   answer:1},

  {id:"q53", dim:"physics", difficulty:"medium", timer:50,
   prompt:"A spinning ice skater pulls their arms in close to their body and spins faster. Why?",
   options:["Pulling arms in adds energy from the muscles directly to the spin",
            "Bringing mass closer to the spin axis reduces resistance to spinning, so the spin rate increases to conserve rotational motion",
            "Air resistance disappears when the arms are in",
            "The ice becomes more slippery as they spin"],
   answer:1},

  {id:"q54", dim:"physics", difficulty:"medium", timer:50,
   prompt:"A 2 kg object is lifted straight up by 3 metres. Taking gravity as roughly 10 m/s², about how much gravitational potential energy does it gain?",
   options:["6 joules","15 joules","60 joules","600 joules"],
   // PE = mgh = 2 × 10 × 3 = 60 J.
   answer:2},

  {id:"q55", dim:"physics", difficulty:"medium", timer:50,
   prompt:"Why is it easier to pull a heavy load up a long, gentle ramp than to lift it straight up the same height?",
   options:["The ramp removes the object's weight",
            "The ramp lets you apply a smaller force over a longer distance to do the same work",
            "Gravity is weaker along a slope",
            "The load becomes lighter on a slope"],
   answer:1},

  {id:"q56", dim:"physics", difficulty:"medium", timer:50,
   prompt:"A swimmer pushes water backward with their hands and moves forward. Which principle best explains this?",
   options:["Water is naturally attracted to swimmers",
            "For every action force there is an equal and opposite reaction force",
            "The swimmer becomes lighter in water",
            "Forward motion needs no force once started"],
   answer:1},

  {id:"q57", dim:"physics", difficulty:"hard", timer:55,
   prompt:"A bullet is fired horizontally from a gun at the same instant an identical bullet is simply dropped from the same height (flat ground, ignore air resistance). Which hits the ground first?",
   options:["The fired bullet, because it travels faster",
            "The dropped bullet, because it goes straight down",
            "They hit at the same time — vertical fall is unaffected by horizontal motion",
            "Neither — the fired bullet never lands"],
   // Horizontal and vertical motion are independent; both fall the same height in the same time.
   answer:2},

  {id:"q58", dim:"physics", difficulty:"hard", timer:55,
   prompt:"A sealed bottle of water is weighed. A small toy boat floats inside on the water. The boat is then pushed down so it sinks to the bottom (still sealed, nothing added or removed). How does the total weight of the sealed bottle change?",
   options:["It increases — the sunken boat now weighs more",
            "It decreases — sinking removes buoyancy",
            "It stays exactly the same — no mass entered or left the sealed bottle",
            "It depends on how deep the boat sinks"],
   // Sealed system: total mass unchanged, so weight unchanged.
   answer:2},

  /* ── NEW: SPATIAL & 3D THINKING (q59–q72) — 4 easy, 7 medium, 3 hard ── */

  {id:"q59", dim:"spatial", difficulty:"easy", timer:45,
   prompt:"How many edges does a standard cube have?",
   options:["6","8","12","16"],
   // A cube has 12 edges.
   answer:2},

  {id:"q60", dim:"spatial", difficulty:"easy", timer:45,
   prompt:"You look at an ordinary drinking glass (a cylinder) directly from straight above. What shape do you see?",
   options:["A rectangle","A circle","A triangle","An oval tilted to one side"],
   // Top-down view of a cylinder is a circle.
   answer:1},

  {id:"q61", dim:"spatial", difficulty:"easy", timer:50,
   prompt:"A solid cube is painted red on all outside faces, then cut once straight through the middle into two equal halves. How many faces of one half are NOT painted red?",
   options:["0","1","2","5"],
   // The single new cut face is unpainted; the other 5 faces of each half were outer (painted). So 1 unpainted face.
   answer:1},

  {id:"q62", dim:"spatial", difficulty:"easy", timer:45,
   prompt:"A triangle has corners pointing up, left, and right (a flat base at the bottom, apex at top). It is flipped upside-down (rotated 180°). Where does the apex now point?",
   options:["Up","Down","Left","Right"],
   answer:1},

  {id:"q63", dim:"spatial", difficulty:"medium", timer:55,
   prompt:"A large cube is built from 27 small identical cubes (a 3×3×3 stack). How many small cubes are completely hidden inside, touching no outer surface at all?",
   options:["0","1","6","8"],
   // Only the very centre cube is fully internal: 1.
   answer:1},

  {id:"q64", dim:"spatial", difficulty:"medium", timer:55,
   prompt:"A 3×3×3 cube (27 small cubes) is painted on all outer faces, then taken apart. How many small cubes have exactly three painted faces?",
   options:["6","8","12","4"],
   // Corner cubes have 3 painted faces; a cube has 8 corners → 8.
   answer:1},

  {id:"q65", dim:"spatial", difficulty:"medium", timer:55,
   prompt:"You drill a straight hole all the way through the centre of a solid wooden ball, from one side to the other. What is the shape of the hole's empty space inside the ball?",
   options:["A cube","A cylinder","A cone","A flat circle"],
   // A straight round drill bit removes a cylindrical channel.
   answer:1},

  {id:"q66", dim:"spatial", difficulty:"medium", timer:55,
   prompt:"A capital letter 'b' is rotated 180° (turned completely upside-down) on the page. Which letter does it most look like?",
   options:["d","p","q","b"],
   // 'b' rotated 180° becomes 'q'.
   answer:2},

  {id:"q67", dim:"spatial", difficulty:"medium", timer:55,
   prompt:"A clock's hour hand points at 3 o'clock. The clock is held up to a mirror. In the mirror image, which time does the clock appear to show?",
   options:["3 o'clock","6 o'clock","9 o'clock","12 o'clock"],
   // Mirror reflects across vertical axis: 3 ↔ 9.
   answer:2},

  {id:"q68", dim:"spatial", difficulty:"medium", timer:55,
   prompt:"A square piece of paper is folded exactly in half twice (in half, then in half again the other way) to make a smaller square. A single hole is punched through all layers. When unfolded, how many holes are in the paper?",
   options:["1","2","4","8"],
   // Folded twice = 4 layers → 4 holes.
   answer:2},

  {id:"q69", dim:"spatial", difficulty:"medium", timer:55,
   prompt:"A right-handed glove is turned completely inside-out. Which hand does it now fit?",
   options:["Still the right hand","The left hand","Neither hand","Both hands equally"],
   // Turning a glove inside-out mirrors it: a right glove becomes a left glove.
   answer:1},

  {id:"q70", dim:"spatial", difficulty:"hard", timer:55,
   prompt:"A 3×3×3 cube (27 small cubes) is painted on all outer faces, then split apart. How many small cubes have exactly one painted face?",
   options:["4","6","8","12"],
   // Face-centre cubes have exactly one painted face: 1 per face × 6 faces = 6.
   answer:1},

  {id:"q71", dim:"spatial", difficulty:"hard", timer:55,
   prompt:"You stand facing North. You turn 90° to your right, then 180°, then 90° to your right again. Which direction are you now facing?",
   options:["North","East","South","West"],
   // North → right 90° = East → 180° = West → right 90° = North.
   answer:0},

  {id:"q72", dim:"spatial", difficulty:"hard", timer:55,
   prompt:"A flat net is made of four squares in a vertical strip plus one square attached to the left of the second square from the top and one to the right of that same square. When folded, can it form a closed cube?",
   options:["Yes — it has six squares arranged so every face is covered",
            "No — it has only five squares",
            "No — two faces would overlap and one would be missing",
            "No — a cube needs eight squares"],
   // Six squares (4 in a column + 2 side flaps on one row) is a valid cube net; folds into a closed cube.
   answer:0},

  /* ── NEW: SYSTEMS THINKING (q73–q86) — 5 easy, 6 medium, 3 hard ── */

  {id:"q73", dim:"systems", difficulty:"easy", timer:45,
   prompt:"A string of old-style holiday lights is wired so that current must pass through every bulb in turn (in series). If one bulb burns out and breaks the circuit, what happens?",
   options:["Only that one bulb goes dark",
            "All the bulbs go dark, because the broken bulb breaks the single shared circuit",
            "The bulbs get brighter",
            "Half the bulbs go dark"],
   answer:1},

  {id:"q74", dim:"systems", difficulty:"easy", timer:45,
   prompt:"In a car, pressing the brake pedal makes brake lights turn on at the back. The brake lights are best described as what part of this system?",
   options:["An input that controls the brakes",
            "An output/signal that reports the brakes are being used",
            "A power source for the brakes",
            "A backup braking system"],
   answer:1},

  {id:"q75", dim:"systems", difficulty:"easy", timer:50,
   prompt:"A backup generator switches on automatically only when the main power supply fails. What is the main purpose of this arrangement?",
   options:["To save fuel by running both supplies at once",
            "To provide redundancy so power continues if the main supply fails",
            "To make the main supply run faster",
            "To increase the total electricity bill"],
   answer:1},

  {id:"q76", dim:"systems", difficulty:"easy", timer:45,
   prompt:"A home circuit has a fuse that melts and cuts the power if too much current flows. What is the fuse's role in the system?",
   options:["To boost the current when devices need more power",
            "A safety device that breaks the circuit to prevent overheating and fire",
            "To store electricity for later use",
            "To measure how much electricity is used"],
   answer:1},

  {id:"q77", dim:"systems", difficulty:"easy", timer:50,
   prompt:"A website runs on two identical servers behind a load balancer that shares visitors between them. If one server crashes, what happens to the website?",
   options:["The whole website goes offline",
            "The website keeps running on the remaining server, just with less spare capacity",
            "Both servers shut down for safety",
            "Visitors are permanently lost"],
   answer:1},

  {id:"q78", dim:"systems", difficulty:"medium", timer:55,
   prompt:"A heater is controlled so that the hotter the room gets, the harder the heater works. Left alone, what is this loop likely to do?",
   options:["Settle gently at a comfortable temperature",
            "Run away — heat causes more heating, pushing the temperature ever higher (positive feedback)",
            "Switch the heater off as soon as it is warm",
            "Keep the temperature perfectly constant"],
   // This is positive feedback: it amplifies, runs away.
   answer:1},

  {id:"q79", dim:"systems", difficulty:"medium", timer:55,
   prompt:"Two pumps share the job of moving water and together just keep up with demand. They are 'in parallel' — either alone can run, but each handles only half the load. If one pump fails, what is the most likely result?",
   options:["Water flow stops completely",
            "The remaining pump can supply only about half the demand, so the system falls behind",
            "The remaining pump automatically doubles its capacity with no downside",
            "Flow doubles because there is less competition"],
   answer:1},

  {id:"q80", dim:"systems", difficulty:"medium", timer:55,
   prompt:"In a chain of tasks, Stage A feeds Stage B feeds Stage C. Stage B is sped up so it is now the fastest stage, but overall output barely changes. What is the most likely reason?",
   options:["Speeding up B always slows the whole line",
            "The bottleneck simply moved to A or C — the slowest remaining stage still caps the output",
            "Output can never be improved",
            "Stage B was not actually sped up"],
   answer:1},

  {id:"q81", dim:"systems", difficulty:"medium", timer:55,
   prompt:"A factory adds a fast new machine in the middle of its line but does not change the slow machine at the start. Output stays the same. This illustrates which idea?",
   options:["More machines always mean more output",
            "A system is limited by its slowest stage, not its fastest",
            "New machines are always faulty",
            "Speed and output are unrelated"],
   answer:1},

  {id:"q82", dim:"systems", difficulty:"medium", timer:55,
   prompt:"An online shop's checkout depends on a single payment service. If only that one service goes down, the whole checkout stops. What is this situation called?",
   options:["Redundancy","A single point of failure","A feedback loop","Load balancing"],
   answer:1},

  {id:"q83", dim:"systems", difficulty:"medium", timer:55,
   prompt:"A team speeds up just one step of a five-step process by 50%, but the customer wait time hardly improves. What does this most strongly suggest?",
   options:["The improved step was not the bottleneck limiting the overall flow",
            "Speeding things up never helps customers",
            "The other four steps must also have improved",
            "The measurement must be wrong"],
   answer:0},

  {id:"q84", dim:"systems", difficulty:"hard", timer:60,
   prompt:"A spam filter is tuned to block far more messages so that almost no spam gets through. Six months later, users complain they keep missing important real emails. Which trade-off does this illustrate?",
   options:["Blocking more spam inevitably also blocks more legitimate messages — reducing one error type tends to raise the other",
            "The filter simply stopped working",
            "Spam and real email are unrelated to the filter",
            "Users started getting less email overall"],
   answer:0},

  {id:"q85", dim:"systems", difficulty:"hard", timer:60,
   prompt:"A city installs free, unlimited parking downtown to help shoppers. A year later, traffic and congestion downtown are noticeably worse. Which systems idea best explains this?",
   options:["Free parking attracts more cars into the area, increasing traffic — the 'fix' encouraged the very behaviour it aimed to ease",
            "Shoppers stopped coming downtown",
            "Parking has no effect on traffic",
            "The city should remove all roads"],
   answer:0},

  {id:"q86", dim:"systems", difficulty:"hard", timer:60,
   prompt:"A dashboard light is meant to warn of low oil. A wiring fault makes it stay ON even when oil is fine, so drivers learn to ignore it. What is the deeper system failure here?",
   options:["The oil is genuinely always low",
            "A false alarm has trained users to distrust a safety signal, so a real warning may now be ignored",
            "The light uses too much electricity",
            "Drivers no longer need oil"],
   answer:1},

  /* ── NEW: OPTIMISATION & TRADE-OFF THINKING (q87–q100) — 5 easy, 7 medium, 2 hard ── */

  {id:"q87", dim:"optimize", difficulty:"easy", timer:45,
   prompt:"You need exactly 6 metres of cable. Shop A sells it at ₹50 per metre with no minimum. Shop B sells fixed 10-metre rolls at ₹400 each. Which is cheaper for your 6 metres?",
   options:["Shop A: ₹300","Shop B: ₹400","They cost the same","Cannot be decided"],
   // A: 6 × 50 = ₹300. B: ₹400 (forced to buy 10 m). A cheaper.
   answer:0},

  {id:"q88", dim:"optimize", difficulty:"easy", timer:45,
   prompt:"A worker can either drive (40 minutes) or take the train (25 minutes) to a site. Only travel time matters and both cost the same. Which should they choose to save the most time?",
   options:["Drive","Train","Either — same time","Neither is faster"],
   // Train 25 < drive 40.
   answer:1},

  {id:"q89", dim:"optimize", difficulty:"easy", timer:50,
   prompt:"You must carry at least 20 litres of paint. Tins come in 5-litre sizes only. What is the fewest tins you can buy?",
   options:["3 tins","4 tins","5 tins","20 tins"],
   // 20/5 = 4 tins.
   answer:1},

  {id:"q90", dim:"optimize", difficulty:"easy", timer:45,
   prompt:"Two light bulbs give the same brightness. Bulb A uses 60 watts; Bulb B uses 10 watts. To save the most electricity, which should you choose?",
   options:["Bulb A","Bulb B","Either — brightness is the same","Whichever is cheaper to buy"],
   // Same brightness, lower power B uses less electricity.
   answer:1},

  {id:"q91", dim:"optimize", difficulty:"easy", timer:50,
   prompt:"A delivery must arrive by 5:00 pm. Route P takes 2 hours, Route Q takes 90 minutes, Route R takes 2.5 hours. Leaving at 3:00 pm, which routes arrive on time?",
   options:["Only Route Q","Routes P and Q","All three routes","Only Route R"],
   // From 3pm: P→5:00 (on time), Q→4:30 (on time), R→5:30 (late). P and Q.
   answer:1},

  {id:"q92", dim:"optimize", difficulty:"medium", timer:55,
   prompt:"A tank truck holds 5,000 litres. You must deliver 23,000 litres in full truckloads only. What is the minimum number of trips?",
   options:["4 trips","5 trips","6 trips","23 trips"],
   // 23000/5000 = 4.6 → round up to 5 trips.
   answer:1},

  {id:"q93", dim:"optimize", difficulty:"medium", timer:55,
   prompt:"You can buy widgets at ₹9 each, or in packs of 10 for ₹80. You need exactly 25 widgets. What is the cheapest total cost?",
   options:["₹205","₹225","₹240","₹200"],
   // 2 packs (20) = ₹160, plus 5 singles = ₹45 → ₹205. Cheaper than 3 packs ₹240 or 25 singles ₹225.
   answer:0},

  {id:"q94", dim:"optimize", difficulty:"medium", timer:60,
   prompt:"A machine part must last at least 1,000 hours. Option 1: ₹500, lasts 1,200 hours. Option 2: ₹300, lasts 800 hours. Option 3: ₹450, lasts 1,000 hours. Which meets the requirement at the lowest cost?",
   options:["Option 1","Option 2","Option 3","All are equal"],
   // Must reach ≥1000 h. Option 2 (800 h) fails. Option 3 (1000 h, ₹450) cheaper than Option 1 (₹500).
   answer:2},

  {id:"q95", dim:"optimize", difficulty:"medium", timer:60,
   prompt:"A small generator runs 4 hours per litre of fuel and a large one runs 6 hours per litre but must run for a fixed 12-hour job. Fuel is the only cost. How many litres does the more fuel-efficient choice use for the 12-hour job?",
   options:["2 litres","3 litres","4 litres","6 litres"],
   // Large: 12/6 = 2 L. Small: 12/4 = 3 L. Large is more efficient, uses 2 L.
   answer:0},

  {id:"q96", dim:"optimize", difficulty:"medium", timer:55,
   prompt:"To climb stairs you can take steps of 1 or 2 at a time. You need to climb exactly 5 steps in the fewest moves. What is the minimum number of moves?",
   options:["2","3","4","5"],
   // 2+2+1 = three moves; can't do fewer since max 2 per move and ceil(5/2)=3.
   answer:1},

  {id:"q97", dim:"optimize", difficulty:"medium", timer:60,
   prompt:"A box can hold 12 kg. You must ship items weighing 5 kg, 5 kg, 4 kg, and 4 kg. What is the fewest boxes needed?",
   options:["1 box","2 boxes","3 boxes","4 boxes"],
   // Total 18 kg. Pair 5+5=10 (≤12) and 4+4=8 (≤12) → 2 boxes. Can't fit all 18 in one 12 kg box.
   answer:1},

  {id:"q98", dim:"optimize", difficulty:"medium", timer:55,
   prompt:"Painting a wall with one coat takes 2 hours and gives acceptable cover; a second coat takes another 2 hours and gives slightly better cover. The job only requires acceptable cover. What is the time-optimal choice?",
   options:["One coat — 2 hours, meets the requirement",
            "Two coats — 4 hours, looks slightly nicer",
            "Three coats to be safe",
            "Neither coat is needed"],
   // Requirement is only 'acceptable'; one coat meets it in least time.
   answer:0},

  {id:"q99", dim:"optimize", difficulty:"hard", timer:60,
   prompt:"Four tasks must each be done once on a single machine, taking 8, 1, 4, and 2 minutes. They run one after another, and a task's 'finish time' is when it completes. To make the AVERAGE finish time as small as possible, in what order should they run?",
   options:["Longest first: 8, 4, 2, 1",
            "Shortest first: 1, 2, 4, 8",
            "Original order: 8, 1, 4, 2",
            "Order makes no difference to the average"],
   // Shortest-job-first minimises average completion time. 1,2,4,8 → finishes 1,3,7,15, avg 6.5, the minimum.
   answer:1},

  {id:"q100", dim:"optimize", difficulty:"hard", timer:60,
   prompt:"A water container must hold 1,000 cm³. Cube-shaped and tall-narrow designs both hold the same volume, but you want to use the least material (smallest surface area) for the walls. Which shape is best?",
   options:["A tall, narrow box — height looks impressive",
            "A flat, wide tray",
            "A cube-like shape — for a fixed volume, the most compact (cube) box minimises surface area",
            "Shape does not affect surface area"],
   // For fixed volume, the cube minimises surface area among rectangular boxes.
   answer:2}
]
};
if (window.__bootAssessment) window.__bootAssessment();
