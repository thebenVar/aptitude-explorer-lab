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

  {id:"q1", dim:"spatial", timer:45,
   prompt:"A standard cube sits on a table. How many faces does it have in total — including the one resting on the table and the one facing up?",
   options:["4",
            "5",
            "6",
            "8"],
   answer:2},

  {id:"q2", dim:"spatial", timer:55,
   /* TRICKY: a cross-shaped net (plus sign) folds into a cube — people often doubt this */
   prompt:"Imagine a flat net made of six squares arranged in a plus-sign shape: one square in the centre, one square attached to each of its four sides, and one more square attached to the bottom square. If you fold all five outer squares up along their shared edges, which 3D shape do you get?",
   options:["A pyramid",
            "A cube",
            "A rectangular box that is not a cube",
            "It cannot form a closed 3D shape"],
   answer:1},

  {id:"q3", dim:"spatial", timer:50,
   prompt:"You are standing in the corner of a rectangular room. The door is directly in front of you on the wall you are facing. If you turn 180°, which wall are you now facing?",
   options:["The wall with the door",
            "The wall to your left",
            "The wall opposite the door — the wall behind where you were standing",
            "The wall to your right"],
   answer:2},

  {id:"q4", dim:"spatial", timer:45,
   /* TRICKY: turning right from facing North → face East, not West */
   prompt:"You are standing in the south-west corner of a square courtyard, facing north. You turn 90° to your right. Which direction are you now facing?",
   options:["South",
            "West",
            "North",
            "East"],
   answer:3},

  {id:"q5", dim:"spatial", timer:55,
   /* TRICKY: bottom layer 9, middle layer 4, top layer 1 = 14 total (people often say 9+4+1=something wrong) */
   prompt:"Blocks are stacked in a pyramid arrangement: the bottom layer is a 3×3 grid of 9 blocks; the middle layer is a 2×2 grid of 4 blocks centred on top; the top layer is a single block. How many blocks are there in total?",
   options:["12",
            "13",
            "14",
            "16"],
   answer:2},

  {id:"q6", dim:"spatial", timer:50,
   /* TRICKY: mirror reverses left–right, not up–down; hasty answer is "upside down" */
   prompt:"You hold the letter 'R' up to a flat vertical mirror. Which of the following best describes what you see in the mirror?",
   options:["The letter R flipped upside down",
            "The letter R reversed left-to-right, like a backwards R",
            "The letter R exactly as it is — mirrors show things correctly",
            "The letter R rotated 90° clockwise"],
   answer:1},

  /* ── VISUAL PATTERN RECOGNITION (q7–q12) ── */

  {id:"q7", dim:"visual", timer:45,
   prompt:"A sequence of shapes repeats: square, circle, triangle, square, circle, triangle, square, circle… What is the next shape in the sequence?",
   options:["Square",
            "Circle",
            "Triangle",
            "Diamond"],
   answer:2},

  {id:"q8", dim:"visual", timer:50,
   /* Row 1: 1 dot, Row 2: 3 dots, Row 3: 6 dots (triangular numbers), Row 4: 10 dots, Row 5: 15 dots */
   /* TRICKY: people assume 'adds one more each row' (arithmetic) → 1,2,3,4,5 increments → Row 5 = 5+4+3+2+1=15 */
   prompt:"A triangular dot pattern: Row 1 has 1 dot. Row 2 has 3 dots. Row 3 has 6 dots. Row 4 has 10 dots. How many dots does Row 5 have? (Hint: look at how much each row grows by.)",
   options:["13",
            "14",
            "15",
            "12"],
   answer:2},

  {id:"q9", dim:"visual", timer:45,
   prompt:"Four shapes are described below. Which one is symmetrical — meaning it looks identical on both sides of a central dividing line? A) A scalene triangle (all three sides are different lengths). B) An isosceles triangle (two sides are equal). C) A parallelogram that is not a rectangle. D) The letter 'S'.",
   options:["A — the scalene triangle",
            "B — the isosceles triangle",
            "C — the parallelogram",
            "D — the letter S"],
   answer:1},

  {id:"q10", dim:"visual", timer:55,
   /* TRICKY: the odd one out is the one that does NOT share the property of the others */
   prompt:"Five shapes are described: (1) equilateral triangle, (2) square, (3) regular pentagon, (4) regular hexagon, (5) rectangle with unequal sides. Which is the odd one out, and why?",
   options:["The equilateral triangle — it has the fewest sides",
            "The rectangle with unequal sides — it is the only shape where not all sides are equal",
            "The regular hexagon — it has the most sides",
            "The square — it has right angles unlike the others"],
   answer:1},

  {id:"q11", dim:"visual", timer:55,
   /* TRICKY: rotating 90° clockwise is not the same as reflecting */
   prompt:"Shape A is a right-pointing arrow (→). Shape B looks like a downward-pointing arrow (↓). Which single transformation turns Shape A into Shape B?",
   options:["Reflecting Shape A horizontally (flipping it left-to-right)",
            "Rotating Shape A 90° clockwise",
            "Scaling Shape A to be smaller",
            "Reflecting Shape A vertically (flipping it top-to-bottom)"],
   answer:1},

  {id:"q12", dim:"visual", timer:60,
   /* 3x3 matrix: top row circles, middle row squares, bottom row triangles; left col small, middle col medium, right col large — missing = large triangle */
   prompt:"A 3×3 grid of shapes follows two rules: each row uses one shape type (circles in row 1, squares in row 2, triangles in row 3), and each column uses one size (small in column 1, medium in column 2, large in column 3). The bottom-right cell is blank. What should go there?",
   options:["A small circle",
            "A medium square",
            "A large triangle",
            "A medium triangle"],
   answer:2},

  /* ── PROPORTIONAL THINKING (q13–q18) ── */

  {id:"q13", dim:"proportion", timer:50,
   prompt:"A floor plan shows a room as a rectangle 4 cm wide by 5 cm long. The real room is 4 m wide by 5 m long. What scale was used for the drawing?",
   options:["1:10",
            "1:50",
            "1:100",
            "1:500"],
   answer:2},

  {id:"q14", dim:"proportion", timer:55,
   /* TRICKY: shadow length is proportional to height — 1.8m person → 2.7m shadow (ratio 1:1.5); 3m tree → 4.5m shadow */
   prompt:"On a sunny afternoon, a person 1.8 m tall casts a shadow 2.7 m long. At the same time and place, a nearby tree casts a shadow 7.5 m long. How tall is the tree? (The sun's angle is the same for both.)",
   options:["4 m",
            "5 m",
            "6 m",
            "4.5 m"],
   answer:1},

  {id:"q15", dim:"proportion", timer:50,
   /* 2:3 blue to white; total = 5 parts; 50 tiles → 50/5=10 per part; blue = 2×10 = 20 */
   prompt:"A tile design uses blue and white tiles in a ratio of 2:3. If 50 tiles are needed in total, how many should be blue?",
   options:["25",
            "20",
            "15",
            "30"],
   answer:1},

  {id:"q16", dim:"proportion", timer:55,
   /* Golden ratio ≈ 1:1.618 → look for 5:8 ≈ 1:1.6 as the closest option */
   /* TRICKY: 3:5 = 1:1.667 is close but 5:8 = 1:1.6 is closer to 1.618 */
   prompt:"The golden ratio is approximately 1 : 1.618. Which of the following pairs of dimensions comes closest to this ratio?",
   options:["1 cm : 2 cm  (ratio 1 : 2.0)",
            "3 cm : 5 cm  (ratio 1 : 1.667)",
            "5 cm : 8 cm  (ratio 1 : 1.6)",
            "2 cm : 3 cm  (ratio 1 : 1.5)"],
   answer:2},

  {id:"q17", dim:"proportion", timer:55,
   /* Recipe scaling: original calls for 120g flour for 8 biscuits; scale to 20 biscuits → 20/8 × 120 = 300g */
   prompt:"A pattern recipe for ceramic tiles requires 120 g of pigment to colour 8 tiles. How much pigment is needed to colour 20 tiles at the same intensity?",
   options:["240 g",
            "280 g",
            "300 g",
            "320 g"],
   answer:2},

  {id:"q18", dim:"proportion", timer:60,
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

  {id:"q19", dim:"lateral", timer:55,
   prompt:"A designer must make a chair using a single flat sheet of plywood with no glue, screws, or separate joints. Which approach best solves this constraint?",
   options:["Cut the sheet into many small pieces and stack them",
            "Cut interlocking slots into the sheet so parts slide together and hold each other without fasteners",
            "Soak the sheet in water to make it soft enough to fold into a chair shape",
            "Paint the sheet and lean it against a wall for use as a stool"],
   answer:1},

  {id:"q20", dim:"lateral", timer:50,
   prompt:"A local park has a muddy shortcut that pedestrians keep taking across the grass, ignoring the paved path. The groundskeeper wants to stop this. Which solution addresses the actual cause of the problem most effectively?",
   options:["Put up a 'Keep off the grass' sign",
            "Install a fence along the muddy shortcut",
            "Pave the shortcut itself — the desire path shows where people naturally want to walk",
            "Fine pedestrians who use the shortcut"],
   answer:2},

  {id:"q21", dim:"lateral", timer:55,
   /* TRICKY: reframing — the designer is solving 'waiting feels long', not 'lift is slow' */
   prompt:"Residents of an office block complain that the lift is too slow. The building manager's first instinct is to upgrade the lift motor at great expense. A designer suggests a different intervention that costs almost nothing and solves the complaint completely. What is the designer most likely proposing?",
   options:["Replace the lift with a faster one",
            "Add mirrors inside the lift lobby so people are distracted while waiting",
            "Reduce the number of floors the lift serves",
            "Install a second lift shaft"],
   answer:1},

  {id:"q22", dim:"lateral", timer:50,
   prompt:"A packaging designer is asked to reduce plastic waste. Which of the following changes would have the biggest positive impact for the least cost?",
   options:["Use a slightly thinner plastic to save a tiny amount of material",
            "Print the packaging with eco-friendly ink",
            "Redesign the packaging shape so products stack more efficiently, reducing the number of boxes shipped and the filler material needed",
            "Change the packaging colour to green to signal sustainability"],
   answer:2},

  {id:"q23", dim:"lateral", timer:55,
   /* repurposing everyday object — using a bicycle wheel as a colour-mixing spin wheel */
   prompt:"A children's art studio needs an inexpensive device that spins a canvas at variable speeds so paint spreads outward in patterns. Which existing everyday object could most easily be repurposed for this?",
   options:["An umbrella frame",
            "A salad spinner",
            "A picture frame",
            "A door hinge"],
   answer:1},

  {id:"q24", dim:"lateral", timer:60,
   /* TRICKY: 'what is the designer really solving?' — hasty answer picks the surface problem */
   prompt:"A hospital asks a designer to 'make the emergency waiting room more comfortable'. After observation, the designer finds that patients' main distress is uncertainty about how long the wait will be — not the chairs or the temperature. What should the designer actually focus on?",
   options:["Replacing the chairs with softer ones",
            "Adding a real-time queue display showing estimated wait times for each patient",
            "Improving the lighting and colour scheme of the walls",
            "Installing a coffee machine"],
   answer:1},

  /* ── PROCESS & SEQUENCE REASONING (q25–q30) ── */

  {id:"q25", dim:"process", timer:55,
   /* Scrambled steps for building a timber-frame wall; correct order: design → foundation → frame → insulate → clad → paint */
   prompt:"Six steps in constructing a timber-framed wall are listed in scrambled order. Arrange them in the correct sequence: (P) Paint or finish the outer cladding. (Q) Lay the foundation or floor slab to build from. (R) Install insulation between the timber studs. (S) Attach the outer cladding boards. (T) Erect and fix the timber stud frame. (U) Finalise the structural design and obtain approvals.",
   options:["U → Q → T → R → S → P",
            "Q → U → R → T → S → P",
            "T → Q → U → R → S → P",
            "U → T → Q → R → S → P"],
   answer:0},

  {id:"q26", dim:"process", timer:50,
   prompt:"In a ceramic pottery process, which step must be completed before glazing the pot?",
   options:["Firing the glaze in the kiln",
            "Bisque firing (the first kiln firing to harden the clay before glazing)",
            "Applying the decorative pattern on top of the glaze",
            "Polishing the finished pot"],
   answer:1},

  {id:"q27", dim:"process", timer:55,
   /* TRICKY: if you skip priming, the topcoat adhesion fails later — not immediately */
   prompt:"A painter is applying a decorative finish to a wall in this order: (1) Clean the wall surface. (2) Apply primer coat. (3) Apply first topcoat. (4) Apply second topcoat. (5) Apply protective varnish. If Step 2 (the primer) is skipped, which later step is most likely to fail or produce a poor result?",
   options:["Step 1 — the wall cannot be cleaned properly without primer",
            "Step 3 — the first topcoat will not adhere well and may peel",
            "Step 5 — the varnish will react badly without primer",
            "None — primer is optional for decorative finishes"],
   answer:1},

  {id:"q28", dim:"process", timer:50,
   prompt:"A builder is laying a tiled bathroom floor. In which order should these tasks be done? (A) Lay and grout the tiles. (B) Apply waterproof membrane to the floor surface. (C) Ensure the sub-floor is level and solid. (D) Seal the grout after it has cured.",
   options:["A → B → C → D",
            "C → B → A → D",
            "B → C → A → D",
            "C → A → B → D"],
   answer:1},

  {id:"q29", dim:"process", timer:55,
   /* dependency mapping — structural elements must precede finishes */
   prompt:"In a building project, the following tasks are listed: (i) Install electrical wiring inside the walls. (ii) Hang and finish the interior plasterboard (drywall). (iii) Paint the walls. (iv) Frame the internal partition walls. Which describes the correct dependency chain?",
   options:["(ii) must happen before (iv)",
            "(iii) must happen before (i)",
            "(iv) must happen before (i), which must happen before (ii), which must happen before (iii)",
            "(i) and (iv) can both happen after (ii)"],
   answer:2},

  {id:"q30", dim:"process", timer:55,
   /* TRICKY: two tasks that CAN be done simultaneously — site clearance and design drawings don't depend on each other */
   prompt:"A small design-build project has these tasks: (A) Survey and clear the site. (B) Produce detailed architectural drawings. (C) Submit drawings for planning approval. (D) Begin foundation excavation. Which pair of tasks can safely be done at the same time without either depending on the other?",
   options:["A and C — site clearance and planning submission",
            "B and D — drawing production and foundation digging",
            "A and B — site survey/clearance and drawing production",
            "C and D — planning approval and foundation excavation"],
   answer:2}

]
};
if (window.__bootAssessment) window.__bootAssessment();
