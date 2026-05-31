// Auto-generated assessment data for "design". Edit here to change this test.
window.ASSESSMENT = {
  id: "design",
  title: "Design &amp; Architecture — Aptitude Check",
  dot: "Des",
  brandName: "Design &amp; Architecture Aptitude Check",
  loginIntro: "A short, gently-timed, <b>just-for-fun</b> set of questions exploring the thinking patterns Design and Architecture rely on — visualising shapes and space, spotting visual patterns, thinking in scale and proportion, finding non-obvious solutions, and reasoning about how things are made in sequence. No prior design knowledge needed.",
  theme: { accent: "#ec4899", accent2: "#f97316" },
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
    spatial: { label:"Spatial Reasoning",
      means:"visualising, rotating, and understanding 3D objects from 2D views — the bedrock of architectural drawing and product design.",
      improve:"Do origami, 3D puzzles, and tangrams. Sketch objects from different angles. Try free tools like SketchUp or Tinkercad. Look at architectural plans." },
    visual: { label:"Visual Pattern Recognition",
      means:"spotting visual rules — symmetry, repetition, transformation — and extending them: how designers see systematically.",
      improve:"Study patterns in nature and art (Islamic geometry, fractals, textile patterns). Practise visual matrix puzzles. Look at graphic design with an analytical eye." },
    proportion: { label:"Proportional Thinking",
      means:"understanding scale, ratio, and balance — everything in design depends on the relationship between dimensions.",
      improve:"Study the golden ratio and design grids. Practise estimating proportions in photographs and floor plans. Sketch and measure real objects." },
    lateral: { label:"Creative &amp; Lateral Thinking",
      means:"reaching solutions that aren't obvious — design problems rarely have one correct answer, and the best answer is often unexpected.",
      improve:"Brainstorm 10 solutions before picking one. Study design history and how designers solved classic problems. Read about SCAMPER and Design Thinking." },
    process: { label:"Process &amp; Sequence Reasoning",
      means:"understanding the logical order in making things — design and construction depend critically on doing steps in the right sequence.",
      improve:"Deconstruct how everyday objects are made. Notice what depends on what when you build or cook. Flowchart the making process for a simple object." }
  }
},
  bandText: {
  strong:{ pill:"good", title:"A strong set of answers",
    blurb:"Your answers show the spatial, visual, and lateral thinking Design and Architecture rely on. You navigated proportion, pattern, and process questions well — a promising sign for someone exploring design fields." },
  promising:{ pill:"warn", title:"A promising mix, with some gaps",
    blurb:"Good instincts in several areas, with some types that caught you out. Design thinking is a learnable practice — look at which dimensions scored lower and explore those deliberately." },
  gaps:{ pill:"bad", title:"Several question types to practise",
    blurb:"Some of these questions didn't go your way today. Spatial and visual reasoning grow a lot with deliberate practice — the notes below show exactly how to build them." }
},
  bank: [

  /* ── SPATIAL REASONING (q1–q6) ── */

  {id:"q1", dim:"spatial", difficulty:"easy", timer:45,
   prompt:"A standard cube sits on a table. How many faces does it have in total — including the one resting on the table and the one facing up?",
   options:["4",
            "5",
            "6",
            "8"],
   answer:2},

  {id:"q2", dim:"spatial", difficulty:"hard", timer:55,
   /* TRICKY: a cross-shaped net (plus sign) folds into a cube — people often doubt this */
   prompt:"Imagine a flat net made of six squares arranged in a plus-sign shape: one square in the centre, one square attached to each of its four sides, and one more square attached to the bottom square. If you fold all five outer squares up along their shared edges, which 3D shape do you get?",
   options:["A pyramid",
            "A cube",
            "A rectangular box that is not a cube",
            "It cannot form a closed 3D shape"],
   answer:1},

  {id:"q3", dim:"spatial", difficulty:"easy", timer:50,
   prompt:"You are standing in the corner of a rectangular room. The door is directly in front of you on the wall you are facing. If you turn 180°, which wall are you now facing?",
   options:["The wall with the door",
            "The wall to your left",
            "The wall opposite the door — the wall behind where you were standing",
            "The wall to your right"],
   answer:2},

  {id:"q4", dim:"spatial", difficulty:"medium", timer:45,
   /* TRICKY: turning right from facing North → face East, not West */
   prompt:"You are standing in the south-west corner of a square courtyard, facing north. You turn 90° to your right. Which direction are you now facing?",
   options:["South",
            "West",
            "North",
            "East"],
   answer:3},

  {id:"q5", dim:"spatial", difficulty:"medium", timer:55,
   /* TRICKY: bottom layer 9, middle layer 4, top layer 1 = 14 total (people often say 9+4+1=something wrong) */
   prompt:"Blocks are stacked in a pyramid arrangement: the bottom layer is a 3×3 grid of 9 blocks; the middle layer is a 2×2 grid of 4 blocks centred on top; the top layer is a single block. How many blocks are there in total?",
   options:["12",
            "13",
            "14",
            "16"],
   answer:2},

  {id:"q6", dim:"spatial", difficulty:"medium", timer:50,
   /* TRICKY: mirror reverses left–right, not up–down; hasty answer is "upside down" */
   prompt:"You hold the letter 'R' up to a flat vertical mirror. Which of the following best describes what you see in the mirror?",
   options:["The letter R flipped upside down",
            "The letter R reversed left-to-right, like a backwards R",
            "The letter R exactly as it is — mirrors show things correctly",
            "The letter R rotated 90° clockwise"],
   answer:1},

  /* ── VISUAL PATTERN RECOGNITION (q7–q12) ── */

  {id:"q7", dim:"visual", difficulty:"easy", timer:45,
   prompt:"A sequence of shapes repeats: square, circle, triangle, square, circle, triangle, square, circle… What is the next shape in the sequence?",
   options:["Square",
            "Circle",
            "Triangle",
            "Diamond"],
   answer:2},

  {id:"q8", dim:"visual", difficulty:"hard", timer:50,
   /* Row 1: 1 dot, Row 2: 3 dots, Row 3: 6 dots (triangular numbers), Row 4: 10 dots, Row 5: 15 dots */
   /* TRICKY: people assume 'adds one more each row' (arithmetic) → 1,2,3,4,5 increments → Row 5 = 5+4+3+2+1=15 */
   prompt:"A triangular dot pattern: Row 1 has 1 dot. Row 2 has 3 dots. Row 3 has 6 dots. Row 4 has 10 dots. How many dots does Row 5 have? (Hint: look at how much each row grows by.)",
   options:["13",
            "14",
            "15",
            "12"],
   answer:2},

  {id:"q9", dim:"visual", difficulty:"easy", timer:45,
   prompt:"Four shapes are described below. Which one is symmetrical — meaning it looks identical on both sides of a central dividing line? A) A scalene triangle (all three sides are different lengths). B) An isosceles triangle (two sides are equal). C) A parallelogram that is not a rectangle. D) The letter 'S'.",
   options:["A — the scalene triangle",
            "B — the isosceles triangle",
            "C — the parallelogram",
            "D — the letter S"],
   answer:1},

  {id:"q10", dim:"visual", difficulty:"medium", timer:55,
   /* TRICKY: the odd one out is the one that does NOT share the property of the others */
   prompt:"Five shapes are described: (1) equilateral triangle, (2) square, (3) regular pentagon, (4) regular hexagon, (5) rectangle with unequal sides. Which is the odd one out, and why?",
   options:["The equilateral triangle — it has the fewest sides",
            "The rectangle with unequal sides — it is the only shape where not all sides are equal",
            "The regular hexagon — it has the most sides",
            "The square — it has right angles unlike the others"],
   answer:1},

  {id:"q11", dim:"visual", difficulty:"medium", timer:55,
   /* TRICKY: rotating 90° clockwise is not the same as reflecting */
   prompt:"Shape A is a right-pointing arrow (→). Shape B looks like a downward-pointing arrow (↓). Which single transformation turns Shape A into Shape B?",
   options:["Reflecting Shape A horizontally (flipping it left-to-right)",
            "Rotating Shape A 90° clockwise",
            "Scaling Shape A to be smaller",
            "Reflecting Shape A vertically (flipping it top-to-bottom)"],
   answer:1},

  {id:"q12", dim:"visual", difficulty:"medium", timer:60,
   /* 3x3 matrix: top row circles, middle row squares, bottom row triangles; left col small, middle col medium, right col large — missing = large triangle */
   prompt:"A 3×3 grid of shapes follows two rules: each row uses one shape type (circles in row 1, squares in row 2, triangles in row 3), and each column uses one size (small in column 1, medium in column 2, large in column 3). The bottom-right cell is blank. What should go there?",
   options:["A small circle",
            "A medium square",
            "A large triangle",
            "A medium triangle"],
   answer:2},

  /* ── PROPORTIONAL THINKING (q13–q18) ── */

  {id:"q13", dim:"proportion", difficulty:"easy", timer:50,
   prompt:"A floor plan shows a room as a rectangle 4 cm wide by 5 cm long. The real room is 4 m wide by 5 m long. What scale was used for the drawing?",
   options:["1:10",
            "1:50",
            "1:100",
            "1:500"],
   answer:2},

  {id:"q14", dim:"proportion", difficulty:"medium", timer:55,
   /* TRICKY: shadow length is proportional to height — 1.8m person → 2.7m shadow (ratio 1:1.5); 3m tree → 4.5m shadow */
   prompt:"On a sunny afternoon, a person 1.8 m tall casts a shadow 2.7 m long. At the same time and place, a nearby tree casts a shadow 7.5 m long. How tall is the tree? (The sun's angle is the same for both.)",
   options:["4 m",
            "5 m",
            "6 m",
            "4.5 m"],
   answer:1},

  {id:"q15", dim:"proportion", difficulty:"easy", timer:50,
   /* 2:3 blue to white; total = 5 parts; 50 tiles → 50/5=10 per part; blue = 2×10 = 20 */
   prompt:"A tile design uses blue and white tiles in a ratio of 2:3. If 50 tiles are needed in total, how many should be blue?",
   options:["25",
            "20",
            "15",
            "30"],
   answer:1},

  {id:"q16", dim:"proportion", difficulty:"hard", timer:55,
   /* Golden ratio ≈ 1:1.618 → look for 5:8 ≈ 1:1.6 as the closest option */
   /* TRICKY: 3:5 = 1:1.667 is close but 5:8 = 1:1.6 is closer to 1.618 */
   prompt:"The golden ratio is approximately 1 : 1.618. Which of the following pairs of dimensions comes closest to this ratio?",
   options:["1 cm : 2 cm  (ratio 1 : 2.0)",
            "3 cm : 5 cm  (ratio 1 : 1.667)",
            "5 cm : 8 cm  (ratio 1 : 1.6)",
            "2 cm : 3 cm  (ratio 1 : 1.5)"],
   answer:2},

  {id:"q17", dim:"proportion", difficulty:"medium", timer:55,
   /* Recipe scaling: original calls for 120g flour for 8 biscuits; scale to 20 biscuits → 20/8 × 120 = 300g */
   prompt:"A pattern recipe for ceramic tiles requires 120 g of pigment to colour 8 tiles. How much pigment is needed to colour 20 tiles at the same intensity?",
   options:["240 g",
            "280 g",
            "300 g",
            "320 g"],
   answer:2},

  {id:"q18", dim:"proportion", difficulty:"medium", timer:60,
   /* barChart question — four room widths and heights shown; which room has the proportions closest to 3:2? */
   /* Room A: 6×4 = 3:2 exactly. Room B: 8×4 = 2:1. Room C: 9×5 = 1.8:1. Room D: 7×3 = 7:3 */
   prompt:"The chart below shows the width and height of four proposed rooms in a studio (all values in metres). A designer wants the room whose width-to-height ratio is closest to 3 : 2 (width is 1.5× the height). Which room should they choose?",
   chart:barChart(["Room A w","Room A h","Room B w","Room B h","Room C w","Room C h","Room D w","Room D h"],[6,4,8,4,9,5,7,3],"metres"),
   options:["Room B  (8 m wide, 4 m high)",
            "Room A  (6 m wide, 4 m high)",
            "Room C  (9 m wide, 5 m high)",
            "Room D  (7 m wide, 3 m high)"],
   answer:1},

  /* ── CREATIVE & LATERAL THINKING (q19–q24) ── */

  {id:"q19", dim:"lateral", difficulty:"easy", timer:55,
   prompt:"A designer must make a chair using a single flat sheet of plywood with no glue, screws, or separate joints. Which approach best solves this constraint?",
   options:["Cut the sheet into many small pieces and stack them",
            "Cut interlocking slots into the sheet so parts slide together and hold each other without fasteners",
            "Soak the sheet in water to make it soft enough to fold into a chair shape",
            "Paint the sheet and lean it against a wall for use as a stool"],
   answer:1},

  {id:"q20", dim:"lateral", difficulty:"medium", timer:50,
   prompt:"A local park has a muddy shortcut that pedestrians keep taking across the grass, ignoring the paved path. The groundskeeper wants to stop this. Which solution addresses the actual cause of the problem most effectively?",
   options:["Put up a 'Keep off the grass' sign",
            "Install a fence along the muddy shortcut",
            "Pave the shortcut itself — the desire path shows where people naturally want to walk",
            "Fine pedestrians who use the shortcut"],
   answer:2},

  {id:"q21", dim:"lateral", difficulty:"hard", timer:55,
   /* TRICKY: reframing — the designer is solving 'waiting feels long', not 'lift is slow' */
   prompt:"Residents of an office block complain that the lift is too slow. The building manager's first instinct is to upgrade the lift motor at great expense. A designer suggests a different intervention that costs almost nothing and solves the complaint completely. What is the designer most likely proposing?",
   options:["Replace the lift with a faster one",
            "Add mirrors inside the lift lobby so people are distracted while waiting",
            "Reduce the number of floors the lift serves",
            "Install a second lift shaft"],
   answer:1},

  {id:"q22", dim:"lateral", difficulty:"medium", timer:50,
   prompt:"A packaging designer is asked to reduce plastic waste. Which of the following changes would have the biggest positive impact for the least cost?",
   options:["Use a slightly thinner plastic to save a tiny amount of material",
            "Print the packaging with eco-friendly ink",
            "Redesign the packaging shape so products stack more efficiently, reducing the number of boxes shipped and the filler material needed",
            "Change the packaging colour to green to signal sustainability"],
   answer:2},

  {id:"q23", dim:"lateral", difficulty:"medium", timer:55,
   /* repurposing everyday object — using a bicycle wheel as a colour-mixing spin wheel */
   prompt:"A children's art studio needs an inexpensive device that spins a canvas at variable speeds so paint spreads outward in patterns. Which existing everyday object could most easily be repurposed for this?",
   options:["An umbrella frame",
            "A salad spinner",
            "A picture frame",
            "A door hinge"],
   answer:1},

  {id:"q24", dim:"lateral", difficulty:"medium", timer:60,
   /* TRICKY: 'what is the designer really solving?' — hasty answer picks the surface problem */
   prompt:"A hospital asks a designer to 'make the emergency waiting room more comfortable'. After observation, the designer finds that patients' main distress is uncertainty about how long the wait will be — not the chairs or the temperature. What should the designer actually focus on?",
   options:["Replacing the chairs with softer ones",
            "Adding a real-time queue display showing estimated wait times for each patient",
            "Improving the lighting and colour scheme of the walls",
            "Installing a coffee machine"],
   answer:1},

  /* ── PROCESS & SEQUENCE REASONING (q25–q30) ── */

  {id:"q25", dim:"process", difficulty:"medium", timer:55,
   /* Scrambled steps for building a timber-frame wall; correct order: design → foundation → frame → insulate → clad → paint */
   prompt:"Six steps in constructing a timber-framed wall are listed in scrambled order. Arrange them in the correct sequence: (P) Paint or finish the outer cladding. (Q) Lay the foundation or floor slab to build from. (R) Install insulation between the timber studs. (S) Attach the outer cladding boards. (T) Erect and fix the timber stud frame. (U) Finalise the structural design and obtain approvals.",
   options:["U → Q → T → R → S → P",
            "Q → U → R → T → S → P",
            "T → Q → U → R → S → P",
            "U → T → Q → R → S → P"],
   answer:0},

  {id:"q26", dim:"process", difficulty:"easy", timer:50,
   prompt:"In a ceramic pottery process, which step must be completed before glazing the pot?",
   options:["Firing the glaze in the kiln",
            "Bisque firing (the first kiln firing to harden the clay before glazing)",
            "Applying the decorative pattern on top of the glaze",
            "Polishing the finished pot"],
   answer:1},

  {id:"q27", dim:"process", difficulty:"medium", timer:55,
   /* TRICKY: if you skip priming, the topcoat adhesion fails later — not immediately */
   prompt:"A painter is applying a decorative finish to a wall in this order: (1) Clean the wall surface. (2) Apply primer coat. (3) Apply first topcoat. (4) Apply second topcoat. (5) Apply protective varnish. If Step 2 (the primer) is skipped, which later step is most likely to fail or produce a poor result?",
   options:["Step 1 — the wall cannot be cleaned properly without primer",
            "Step 3 — the first topcoat will not adhere well and may peel",
            "Step 5 — the varnish will react badly without primer",
            "None — primer is optional for decorative finishes"],
   answer:1},

  {id:"q28", dim:"process", difficulty:"medium", timer:50,
   prompt:"A builder is laying a tiled bathroom floor. In which order should these tasks be done? (A) Lay and grout the tiles. (B) Apply waterproof membrane to the floor surface. (C) Ensure the sub-floor is level and solid. (D) Seal the grout after it has cured.",
   options:["A → B → C → D",
            "C → B → A → D",
            "B → C → A → D",
            "C → A → B → D"],
   answer:1},

  {id:"q29", dim:"process", difficulty:"hard", timer:55,
   /* dependency mapping — structural elements must precede finishes */
   prompt:"In a building project, the following tasks are listed: (i) Install electrical wiring inside the walls. (ii) Hang and finish the interior plasterboard (drywall). (iii) Paint the walls. (iv) Frame the internal partition walls. Which describes the correct dependency chain?",
   options:["(ii) must happen before (iv)",
            "(iii) must happen before (i)",
            "(iv) must happen before (i), which must happen before (ii), which must happen before (iii)",
            "(i) and (iv) can both happen after (ii)"],
   answer:2},

  {id:"q30", dim:"process", difficulty:"hard", timer:55,
   /* TRICKY: two tasks that CAN be done simultaneously — site clearance and design drawings don't depend on each other */
   prompt:"A small design-build project has these tasks: (A) Survey and clear the site. (B) Produce detailed architectural drawings. (C) Submit drawings for planning approval. (D) Begin foundation excavation. Which pair of tasks can safely be done at the same time without either depending on the other?",
   options:["A and C — site clearance and planning submission",
            "B and D — drawing production and foundation digging",
            "A and B — site survey/clearance and drawing production",
            "C and D — planning approval and foundation excavation"],
   answer:2},

  /* ════════════════════════════════════════════════════════════
     EXPANSION q31–q100 — 14 per dimension (each dim reaches 20)
     ════════════════════════════════════════════════════════════ */

  /* ── SPATIAL REASONING (q31–q44) ── */

  {id:"q31", dim:"spatial", difficulty:"easy", timer:45,
   prompt:"A solid brick is a rectangular box. How many edges does it have in total?",
   options:["8","10","12","6"],
   answer:2},

  {id:"q32", dim:"spatial", difficulty:"easy", timer:45,
   prompt:"You are looking straight down at a coffee mug from directly above. Ignoring the handle, what 2D outline do you see?",
   options:["A square","A circle","A triangle","A rectangle"],
   answer:1},

  {id:"q33", dim:"spatial", difficulty:"medium", timer:50,
   /* North → turn right twice (90° each) = 180° = South */
   prompt:"You are facing north. You turn 90° to your right, then turn 90° to your right again. Which direction are you now facing?",
   options:["East","West","South","North"],
   answer:2},

  {id:"q34", dim:"spatial", difficulty:"medium", timer:50,
   /* Cube painted on outside, cut into 3x3x3=27 small cubes; centre cube has 0 painted faces */
   prompt:"A wooden cube is painted red on all its outer faces, then cut into 27 equal smaller cubes (a 3×3×3 arrangement). How many of the small cubes have NO red paint on them at all?",
   options:["0","1","6","8"],
   answer:1},

  {id:"q35", dim:"spatial", difficulty:"medium", timer:50,
   /* 3x3x3 cube: corner cubes have 3 painted faces; there are 8 corners */
   prompt:"A wooden cube is painted on all outer faces, then cut into 27 equal smaller cubes (3×3×3). How many small cubes have exactly THREE painted faces?",
   options:["4","6","8","12"],
   answer:2},

  {id:"q36", dim:"spatial", difficulty:"easy", timer:45,
   prompt:"A sheet of paper is folded exactly in half once. How many layers of paper are stacked together along the folded part?",
   options:["1","2","3","4"],
   answer:1},

  {id:"q37", dim:"spatial", difficulty:"medium", timer:50,
   /* fold in half 3 times: 2^3 = 8 layers */
   prompt:"You fold a single sheet of paper in half, then in half again, then in half a third time. How many layers thick is the paper now?",
   options:["6","8","16","3"],
   answer:1},

  {id:"q38", dim:"spatial", difficulty:"medium", timer:50,
   /* Net check: a 'T' tetromino of squares (row of 3 + 1 below centre) is only 4 squares, cannot fold to a cube which needs 6 */
   prompt:"A flat net is made of only four squares joined edge to edge. Could this net possibly fold up into a closed cube?",
   options:["Yes, if folded carefully","No — a cube needs six square faces, so four squares can never close it","Yes, two faces just overlap","Only if the squares are large enough"],
   answer:1},

  {id:"q39", dim:"spatial", difficulty:"hard", timer:55,
   /* Two dice opposite faces sum to 7 on standard die; if 2 is up, bottom is 5 */
   prompt:"On a standard six-sided die, the numbers on opposite faces always add up to 7. If the face showing 2 is pointing up, what number is on the face resting on the table directly below it?",
   options:["6","4","5","1"],
   answer:2},

  {id:"q40", dim:"spatial", difficulty:"medium", timer:50,
   /* viewing a chair from the side gives an L-ish silhouette */
   prompt:"You view an ordinary four-legged dining chair from directly to one side (a side elevation). Which described outline best matches what you see?",
   options:["A plain rectangle","An L-like shape: a vertical back rising from a horizontal seat, with legs below","A circle","A triangle standing on its point"],
   answer:1},

  {id:"q41", dim:"spatial", difficulty:"hard", timer:55,
   /* Rotating a right hand to look like left = mirror, not rotation */
   prompt:"You have a model of a right hand. No matter how you rotate or turn it in space, it never looks exactly like a left hand. Why not?",
   options:["A right hand and a left hand are mirror images, and no rotation can turn one into its mirror image","Because hands are too detailed to rotate","Because the right hand is always bigger","Rotation always changes the size of an object"],
   answer:0},

  {id:"q42", dim:"spatial", difficulty:"medium", timer:50,
   /* A cylinder's net = rectangle + 2 circles */
   prompt:"If you could unroll and flatten a tin can (a cylinder) completely, which set of flat shapes would you get?",
   options:["Two squares and a triangle","One rectangle and two circles","Three rectangles","One circle and one triangle"],
   answer:1},

  {id:"q43", dim:"spatial", difficulty:"hard", timer:55,
   /* staircase: going up 2 floors then down 1 floor = net 1 floor up */
   prompt:"In a building you climb the stairs up 3 floors, then go down 1 floor, then up 2 more floors. Starting from the ground floor (floor 0), which floor do you end on?",
   options:["Floor 3","Floor 4","Floor 5","Floor 6"],
   answer:1},

  {id:"q44", dim:"spatial", difficulty:"easy", timer:45,
   /* A pyramid (square-based) has 5 faces: 4 triangles + 1 square base */
   prompt:"A classic square-based pyramid (like the shape of an Egyptian pyramid) has how many flat faces in total, counting its base?",
   options:["4","5","6","8"],
   answer:1},

  /* ── VISUAL PATTERN RECOGNITION (q45–q58) ── */

  {id:"q45", dim:"visual", difficulty:"easy", timer:45,
   /* pattern: black, white, black, white -> next black */
   prompt:"A border tile pattern goes: black, white, black, white, black, white… What colour is the next tile?",
   options:["Black","White","Grey","It is random"],
   answer:0},

  {id:"q46", dim:"visual", difficulty:"medium", timer:50,
   /* sizes: 2,4,8,16 -> doubling -> next 32 (described as side length) */
   prompt:"A row of squares grows in side length: 2 cm, 4 cm, 8 cm, 16 cm… If the rule continues, what is the side length of the next square?",
   options:["18 cm","24 cm","32 cm","20 cm"],
   answer:2},

  {id:"q47", dim:"visual", difficulty:"medium", timer:50,
   /* rotation pattern: arrow rotates 90° clockwise each step: up, right, down, left, then up again */
   prompt:"An arrow rotates a quarter-turn (90°) clockwise at each step: it points up, then right, then down, then left… Which way does it point at the very next step?",
   options:["Right","Down","Up","Left"],
   answer:2},

  {id:"q48", dim:"visual", difficulty:"easy", timer:45,
   /* symmetry: which letter has a vertical line of symmetry: A,B,C - 'A' */
   prompt:"Which of these capital letters can be split by a single vertical line down the middle into two halves that mirror each other?",
   options:["F","A","G","P"],
   answer:1},

  {id:"q49", dim:"visual", difficulty:"medium", timer:50,
   /* count of sides increasing: triangle3, square4, pentagon5, ? hexagon6 */
   prompt:"A sequence of regular shapes is shown by side count: triangle (3 sides), square (4 sides), pentagon (5 sides)… What is the next shape in the sequence?",
   options:["Another square","A hexagon (6 sides)","A circle","An octagon (8 sides)"],
   answer:1},

  {id:"q50", dim:"visual", difficulty:"medium", timer:55,
   /* odd one out: shapes filled vs outline. circle filled, square filled, triangle filled, star outline -> star */
   prompt:"Four icons are described: a solid filled circle, a solid filled square, a solid filled triangle, and an outline-only (hollow) star. Which is the odd one out?",
   options:["The circle","The square","The triangle","The hollow star — it is the only one not solidly filled"],
   answer:3},

  {id:"q51", dim:"visual", difficulty:"hard", timer:55,
   /* alternating two rules: shape cycles square,circle; colour cycles red,red,blue. Combined position 7 */
   prompt:"A pattern alternates two shapes — square, circle, square, circle… — while the colours go red, blue, blue, red, blue, blue (repeating every three). What are the shape and colour of the 7th item?",
   options:["Square, red","Circle, blue","Square, blue","Circle, red"],
   answer:0},

  {id:"q52", dim:"visual", difficulty:"medium", timer:50,
   /* matrix: dots add 2 each cell row-wise: 1,3,5 / 7,9,11 / 13,15,? = 17 */
   prompt:"Reading left to right, top to bottom, a 3×3 grid contains increasing dot counts: 1, 3, 5, 7, 9, 11, 13, 15, and one blank in the bottom-right. How many dots belong in the blank cell?",
   options:["16","17","18","19"],
   answer:1},

  {id:"q53", dim:"visual", difficulty:"easy", timer:45,
   /* repeating ABBABB: position 7? A B B A B B A -> A */
   prompt:"A woven pattern repeats the unit A B B over and over: A B B A B B A B B… What is the 10th symbol in the sequence?",
   options:["A","B","Either A or B","Cannot be known"],
   answer:0},

  {id:"q54", dim:"visual", difficulty:"medium", timer:55,
   /* scaling vs translating: enlarging keeps proportions */
   prompt:"A logo is enlarged to twice its size for a poster, with nothing else changed. Which statement is true about the enlarged logo?",
   options:["Its proportions (the relationships between its parts) stay exactly the same","It becomes taller but not wider","Its corners become rounded","Its colours invert"],
   answer:0},

  {id:"q55", dim:"visual", difficulty:"hard", timer:55,
   /* count squares in 2x2 grid including the big one: 4 small + 1 large = 5 */
   prompt:"A large square is divided by one horizontal and one vertical line into four equal smaller squares. Counting BOTH the small squares and the big outer square, how many squares are there in total?",
   options:["4","5","6","8"],
   answer:1},

  {id:"q56", dim:"visual", difficulty:"medium", timer:50,
   /* reflection symmetry count of square = 4 lines of symmetry */
   prompt:"How many distinct lines of symmetry does a perfect square have (lines you could fold along so the two halves match exactly)?",
   options:["1","2","4","8"],
   answer:2},

  {id:"q57", dim:"visual", difficulty:"hard", timer:55,
   /* growth: each step adds previous plus a border. Square dot grids: 1,4,9,16 -> perfect squares -> next 25 */
   prompt:"A designer builds square dot grids: 1 dot, then 2×2 = 4 dots, then 3×3 = 9 dots, then 4×4 = 16 dots… How many dots are in the next grid in the sequence?",
   options:["20","24","25","32"],
   answer:2},

  {id:"q58", dim:"visual", difficulty:"easy", timer:45,
   /* analogy: small circle is to big circle as small square is to big square */
   prompt:"Small circle is to large circle as small square is to ___ ?",
   options:["a large square","a small triangle","a large circle","a small circle"],
   answer:0},

  /* ── PROPORTIONAL THINKING (q59–q72) ── */

  {id:"q59", dim:"proportion", difficulty:"easy", timer:50,
   /* 1:100 scale, 3cm on plan = 300cm = 3m */
   prompt:"On a 1:100 scale drawing, a wall measures 3 cm long. How long is the real wall?",
   options:["30 cm","3 m","30 m","300 m"],
   answer:1},

  {id:"q60", dim:"proportion", difficulty:"easy", timer:50,
   /* ratio 1:2, 6 chairs to tables? 12 chairs for 6 tables? Each table 2 chairs -> 5 tables = 10 chairs */
   prompt:"A café seats tables and chairs in a ratio of 1 table to 4 chairs. How many chairs are needed for 7 tables?",
   options:["11","21","28","32"],
   answer:2},

  {id:"q61", dim:"proportion", difficulty:"medium", timer:55,
   /* doubling all dimensions of a square doubles perimeter, quadruples area */
   prompt:"A square tile has its side length doubled. What happens to its AREA?",
   options:["It stays the same","It doubles","It becomes four times as large","It becomes eight times as large"],
   answer:2},

  {id:"q62", dim:"proportion", difficulty:"medium", timer:55,
   /* recipe scaling down: 600g for 12 -> for 4 = 200g */
   prompt:"A glaze recipe needs 600 g of powder for 12 mugs. How much powder is needed for just 4 mugs at the same strength?",
   options:["150 g","200 g","240 g","300 g"],
   answer:1},

  {id:"q63", dim:"proportion", difficulty:"medium", timer:55,
   /* aspect ratio 16:9, width 32 -> height 18 */
   prompt:"A screen has a width-to-height ratio of 16 : 9. If a poster mock-up is 32 cm wide and keeps the same ratio, how tall is it?",
   options:["16 cm","18 cm","20 cm","24 cm"],
   answer:1},

  {id:"q64", dim:"proportion", difficulty:"hard", timer:55,
   /* enlargement: photo 6x4, enlarge so width becomes 15; scale 15/6=2.5; height 4*2.5=10 */
   prompt:"A photo is 6 cm wide and 4 cm tall. It is enlarged so its width becomes 15 cm, keeping the same proportions. What is its new height?",
   options:["8 cm","9 cm","10 cm","12 cm"],
   answer:2},

  {id:"q65", dim:"proportion", difficulty:"easy", timer:50,
   /* half scale model: 4m real -> model length at 1:50 = 8cm */
   prompt:"An architect builds a model at 1:50 scale. A real beam is 4 m long. How long is the beam on the model?",
   options:["4 cm","8 cm","12 cm","2 cm"],
   answer:1},

  {id:"q66", dim:"proportion", difficulty:"medium", timer:55,
   /* mixing ratio 3:1 paint to water, total 8L, water = 2L */
   prompt:"A wash is mixed with paint and water in a ratio of 3 : 1. To make 8 litres of wash in total, how much water is needed?",
   options:["1 litre","2 litres","3 litres","4 litres"],
   answer:1},

  {id:"q67", dim:"proportion", difficulty:"hard", timer:60,
   /* chart: 4 logos heights & widths, find one closest to 1:1 (square). values w/h pairs */
   prompt:"The chart shows the width and height (in cm) of four logo boxes. A brand wants the box closest to a perfect square (width equal to height). Which should they pick?",
   chart:barChart(["A w","A h","B w","B h","C w","C h","D w","D h"],[10,6,8,8,12,9,5,11],"cm"),
   options:["Box A (10 × 6)","Box B (8 × 8)","Box C (12 × 9)","Box D (5 × 11)"],
   answer:1},

  {id:"q68", dim:"proportion", difficulty:"medium", timer:55,
   /* unit rate: 5 painters paint 5 walls in 5 hours, how long 1 painter 1 wall? 5 hours */
   prompt:"5 painters paint 5 walls in 5 hours, each painter taking one wall. At the same pace, how long does 1 painter take to paint 1 wall?",
   options:["1 hour","5 hours","25 hours","2.5 hours"],
   answer:1},

  {id:"q69", dim:"proportion", difficulty:"medium", timer:55,
   /* percentage of layout: page 30% image, 70% text; if 21cm tall text region... simpler: 40% margin */
   prompt:"On a page layout, the image takes up 2 parts and the text takes up 3 parts of the height. What fraction of the page height is taken by the image?",
   options:["One half","Two fifths","Three fifths","One third"],
   answer:1},

  {id:"q70", dim:"proportion", difficulty:"hard", timer:60,
   /* A4 ratio: folding A-series in half keeps ratio 1:sqrt2. Which statement true */
   prompt:"A-series paper (A4, A3, etc.) is designed so that cutting a sheet in half across its longer side gives two sheets with the SAME width-to-height proportions as the original. What does this clever property let you do?",
   options:["Scale a layout up or down between paper sizes without changing its proportions","Make every sheet a perfect square","Avoid ever needing to measure paper","Print only in black and white"],
   answer:0},

  {id:"q71", dim:"proportion", difficulty:"medium", timer:55,
   /* scale up ingredient: 250ml for 5 portions, need 8 portions -> 400ml */
   prompt:"A varnish job uses 250 ml to coat 5 panels. How much varnish is needed to coat 8 panels at the same coverage?",
   options:["350 ml","375 ml","400 ml","450 ml"],
   answer:2},

  {id:"q72", dim:"proportion", difficulty:"easy", timer:50,
   /* simple ratio simplify: 12:18 = 2:3 */
   prompt:"A room is 12 m long and 18 m wide. Expressed in its simplest form, what is the ratio of length to width?",
   options:["1 : 2","2 : 3","3 : 4","6 : 9"],
   answer:1},

  /* ── CREATIVE & LATERAL THINKING (q73–q86) ── */

  {id:"q73", dim:"lateral", difficulty:"easy", timer:50,
   prompt:"A small shop wants customers to slow down and look at a featured display near the entrance. Which low-cost design change best encourages people to pause there naturally?",
   options:["Put up a sign saying 'Please stop and look'","Place the display at a gentle bend in the walking path so people must turn and naturally face it","Make the display very tall","Paint the display bright red only"],
   answer:1},

  {id:"q74", dim:"lateral", difficulty:"medium", timer:55,
   /* reframe: glass half problem - design a cup that can't tip - wide base */
   prompt:"A designer must make a child's cup that is very hard to knock over. Which single feature most directly achieves this with the least complexity?",
   options:["A lid with a straw hole","A wide, heavy base that lowers the cup's centre of gravity","A bright, cheerful colour","A handle on each side"],
   answer:1},

  {id:"q75", dim:"lateral", difficulty:"medium", timer:55,
   /* SCAMPER - combine: combine pencil and eraser */
   prompt:"Which everyday product is the clearest example of solving a problem by COMBINING two separate tools into one object?",
   options:["A glass bottle","A pencil with an eraser fixed on the end","A wooden ruler","A paper bag"],
   answer:1},

  {id:"q76", dim:"lateral", difficulty:"hard", timer:60,
   /* reframe: people don't read manuals -> design so no manual needed (affordances) */
   prompt:"Customers keep calling support because they cannot work out how to open a new product's packaging. The team's instinct is to write clearer instructions. A designer proposes a better fix. What is it most likely to be?",
   options:["Print the instructions in a larger font","Redesign the packaging so the correct way to open it is obvious by its shape, needing no instructions","Add a warning label","Translate the instructions into more languages"],
   answer:1},

  {id:"q77", dim:"lateral", difficulty:"medium", timer:55,
   /* constraint: design bench that discourages sleeping but seats people - armrests */
   prompt:"A bus shelter bench should comfortably seat three separate passengers and gently discourage one person lying across the whole bench. Which simple design feature achieves both at once?",
   options:["Make the bench shorter so only one person fits","Add two armrests that divide the bench into three seat spaces","Use a slippery metal surface","Remove the bench entirely"],
   answer:1},

  {id:"q78", dim:"lateral", difficulty:"easy", timer:50,
   prompt:"A studio has leftover offcuts of timber too small for furniture. Which idea best turns this constraint into an opportunity rather than waste?",
   options:["Throw the offcuts away to keep the studio tidy","Glue and assemble the offcuts into small items like coasters, toys, or decorative blocks","Burn them immediately","Store them forever and never use them"],
   answer:1},

  {id:"q79", dim:"lateral", difficulty:"medium", timer:55,
   /* root cause: noisy office -> not louder partitions but soft materials/zones */
   prompt:"An open-plan office is too noisy and people cannot concentrate. Management wants to ask everyone to 'be quieter'. A designer suggests addressing the real cause instead. Which is the strongest design response?",
   options:["Send a daily reminder email to stay quiet","Add sound-absorbing materials and a few enclosed quiet zones so noise is contained where it arises","Turn off the air conditioning","Remove all the desks"],
   answer:1},

  {id:"q80", dim:"lateral", difficulty:"hard", timer:60,
   /* inversion thinking: to make something memorable, ask 'how to make it forgettable' then avoid */
   prompt:"A team is stuck trying to design a 'memorable' shopfront. A designer suggests first brainstorming how to make the MOST FORGETTABLE shopfront possible. Why is this a useful technique?",
   options:["It wastes time deliberately","Listing what makes something forgettable reveals exactly what to avoid, pointing toward what makes it memorable","Forgettable shopfronts are cheaper","It is a way to give up on the project"],
   answer:1},

  {id:"q81", dim:"lateral", difficulty:"medium", timer:55,
   /* repurpose: use a ladder horizontally as shelving */
   prompt:"A café wants rustic, low-cost wall shelving and has an old wooden ladder spare. What is the most resourceful reuse?",
   options:["Cut the ladder into firewood","Mount the ladder flat against the wall and rest planks across its rungs as shelves","Paint the ladder and store it","Use the ladder only to reach high places"],
   answer:1},

  {id:"q82", dim:"lateral", difficulty:"easy", timer:50,
   prompt:"A park designer wants children and adults to use the same drinking fountain comfortably. What is the simplest inclusive solution?",
   options:["Install two fountains at two different heights, or one with both a high and a low spout","Put up a sign telling children to ask an adult","Build it only at adult height","Build it only at child height"],
   answer:0},

  {id:"q83", dim:"lateral", difficulty:"hard", timer:60,
   /* reframe: cars speed in a lane -> narrowing visual cues slow drivers (not just signs) */
   prompt:"Drivers keep speeding down a residential street despite speed-limit signs. Which design intervention is most likely to actually slow them down, by changing how the street feels to drive?",
   options:["Add more identical speed-limit signs","Narrow the visual width of the road with trees, planters, and parked-car bays so it feels tighter to drive through","Repaint the existing signs brighter","Lower the official speed limit number on the sign"],
   answer:1},

  {id:"q84", dim:"lateral", difficulty:"medium", timer:55,
   prompt:"A museum finds visitors miss a key exhibit tucked in a side room. Rather than adding signs, which design move most naturally draws people in?",
   options:["Close the side room","Place an eye-catching object or a pool of warm light at the room's entrance so it visually invites people in","Email visitors a map afterwards","Make the main hall darker"],
   answer:1},

  {id:"q85", dim:"lateral", difficulty:"medium", timer:55,
   /* analogy thinking: borrow nature - velcro from burrs (biomimicry) */
   prompt:"Velcro was invented after a designer studied how plant burrs stick to clothing. This approach — borrowing solutions from nature — is best described as which design strategy?",
   options:["Copying a competitor","Biomimicry: taking inspiration from how nature already solves a problem","Random trial and error","Ignoring the problem"],
   answer:1},

  {id:"q86", dim:"lateral", difficulty:"hard", timer:60,
   /* constraint as feature: turning a column in the middle of a room into a feature */
   prompt:"A café renovation is stuck with a thick structural pillar awkwardly in the middle of the seating area that cannot be removed. What is the most creative response to this fixed constraint?",
   options:["Leave it bare and apologise to customers","Turn the pillar into a feature — wrap it with a circular bar counter, shelving, or greenery so it becomes useful and intentional","Hide the whole area behind a curtain","Close that part of the café"],
   answer:1},

  /* ── PROCESS & SEQUENCE REASONING (q87–q100) ── */

  {id:"q87", dim:"process", difficulty:"easy", timer:50,
   prompt:"When making a cup of tea, which step must come before pouring the hot water onto the tea?",
   options:["Adding milk to the finished cup","Boiling the water","Drinking the tea","Washing the empty cup afterwards"],
   answer:1},

  {id:"q88", dim:"process", difficulty:"easy", timer:50,
   /* order of dressing: socks before shoes */
   prompt:"In getting dressed, which pairing shows a step that MUST come before another?",
   options:["Shoes before socks","Socks before shoes","Coat before shirt is required","Hat before trousers is required"],
   answer:1},

  {id:"q89", dim:"process", difficulty:"medium", timer:55,
   /* baking a cake order: mix dry, mix wet, combine, bake, cool, ice */
   prompt:"Six cake-making steps are scrambled: (P) Ice the cake. (Q) Weigh and mix the dry ingredients. (R) Bake in the oven. (S) Combine wet and dry mixtures into a batter. (T) Let the cake cool. (U) Mix the wet ingredients. Which order is correct?",
   options:["Q → U → S → R → T → P","U → Q → R → S → T → P","Q → S → U → R → P → T","S → Q → U → R → T → P"],
   answer:0},

  {id:"q90", dim:"process", difficulty:"medium", timer:55,
   /* 3D printing: model -> slice -> print -> remove supports -> sand */
   prompt:"In 3D printing a part, which step must happen immediately BEFORE the printer can start printing?",
   options:["Sanding the finished part","Slicing the 3D model into printable layers and sending it to the printer","Removing the support material","Painting the part"],
   answer:1},

  {id:"q91", dim:"process", difficulty:"medium", timer:55,
   /* dependency: foundation before walls before roof */
   prompt:"Building a house involves: (i) lay foundations, (ii) build walls, (iii) put on the roof. Which statement about their order is correct?",
   options:["The roof can go on before the walls","Foundations must come before walls, and walls before the roof","Walls can be built before the foundations","All three can be done in any order"],
   answer:1},

  {id:"q92", dim:"process", difficulty:"hard", timer:60,
   /* parallel tasks: two independent tasks that can overlap */
   prompt:"A product launch has: (A) manufacture the product, (B) design the packaging artwork, (C) print the packaging, (D) pack the products. Note (C) needs (B) done, and (D) needs both (A) and (C) done. Which two tasks can run at the SAME time from the start without waiting on each other?",
   options:["A and B","C and D","B and C","A and D"],
   answer:0},

  {id:"q93", dim:"process", difficulty:"medium", timer:55,
   /* sewing a garment: cut fabric before sewing */
   prompt:"When making a shirt, which step logically comes first?",
   options:["Sew the seams together","Cut the fabric pieces from the pattern","Attach the buttons","Iron the finished shirt"],
   answer:1},

  {id:"q94", dim:"process", difficulty:"hard", timer:60,
   /* critical path: which delay delays the whole project */
   prompt:"A small build has two parallel chains that must both finish before opening: Chain 1 takes 10 days (site work), Chain 2 takes 6 days (interior fit-out), and they run at the same time. If the interior fit-out (Chain 2) is delayed by 2 days, what happens to the overall opening date?",
   options:["It is delayed by 2 days","It is delayed by 8 days","It is not delayed, because the 10-day site work is still the longest chain","It is delayed by 4 days"],
   answer:2},

  {id:"q95", dim:"process", difficulty:"medium", timer:55,
   /* screen printing order: prepare screen, ink, squeegee, cure */
   prompt:"In screen printing a T-shirt: (1) coat and expose the screen with the design, (2) place the shirt under the screen, (3) push ink through with a squeegee, (4) heat-cure the print. If you skip step 1, what goes wrong?",
   options:["The shirt is the wrong colour","There is no stencil, so ink would pass through everywhere and there is no design","The print cures too quickly","Nothing — step 1 is optional"],
   answer:1},

  {id:"q96", dim:"process", difficulty:"easy", timer:50,
   prompt:"To paint a wooden table so the finish lasts, which step should come first?",
   options:["Apply the final glossy topcoat","Sand the bare wood smooth and clean off the dust","Wax the table","Use the table for a meal"],
   answer:1},

  {id:"q97", dim:"process", difficulty:"hard", timer:60,
   /* reordering with a hidden dependency: you cannot grout before tiles are stuck/set */
   prompt:"A tiler plans: (1) spread adhesive, (2) press tiles into place, (3) let the adhesive set, (4) grout the gaps. A rushed apprentice wants to grout immediately after pressing the tiles, skipping the setting time. Why is this a mistake?",
   options:["Grout dries faster than adhesive anyway","The tiles can still shift while the adhesive is wet, so grouting too early ruins the alignment","Grout and adhesive are the same material","Grout must always go on before the tiles"],
   answer:1},

  {id:"q98", dim:"process", difficulty:"medium", timer:55,
   /* concurrent design review while prototyping? dependency reasoning */
   prompt:"In a design project: (A) gather user requirements, (B) sketch concepts, (C) build a prototype, (D) test the prototype with users. Which is the correct logical order?",
   options:["B → A → C → D","A → B → C → D","C → A → B → D","A → C → B → D"],
   answer:1},

  {id:"q99", dim:"process", difficulty:"medium", timer:55,
   /* casting metal: make mould before pouring */
   prompt:"When casting a metal handle, which step must be completed before molten metal is poured?",
   options:["Polishing the cooled handle","Creating the mould cavity in the shape of the handle","Removing the handle from the mould","Selling the finished handle"],
   answer:1},

  {id:"q100", dim:"process", difficulty:"hard", timer:60,
   /* dependency chain with parallel branch correctly identified */
   prompt:"To assemble a flat-pack desk: (i) attach the legs to the tabletop, (ii) attach the drawer runners to the tabletop, (iii) slide the drawer into the runners, (iv) stand the desk upright. The drawer (iii) needs the runners (ii) fitted first; standing it up (iv) needs the legs (i) on. Which order is valid?",
   options:["iii → ii → i → iv","ii → iii → i → iv","i → iii → ii → iv","iv → i → ii → iii"],
   answer:1}

]
};
if (window.__bootAssessment) window.__bootAssessment();
