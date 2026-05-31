// Study guide explanations for the Design & Architecture assessment.
window.GUIDE = {
  strategies: {
    spatial: "Build a mental model step by step. <b>Sketch it if you can</b> — even a rough pencil sketch on scrap paper unlocks the answer. For nets: name each face before folding. For rotations: track one reference point (e.g. 'where does the top-left corner end up?'). For counting hidden faces or cubes: work layer by layer.",
    visual: "Find the <b>rule before guessing</b>. Ask: what changes between each item (shape, size, colour, orientation, count)? Does the change repeat on a fixed cycle, grow steadily, or follow two separate rules at once? State the rule in words, then apply it mechanically to find the missing item.",
    proportion: "Always set up a <b>fraction or ratio equation</b>. For scale: real = drawing × scale factor. For ratios: find one 'part', then multiply. For scaling recipes or measurements: divide to find the unit rate, then multiply to the new quantity. Show your arithmetic — proportion errors almost always come from dividing by the wrong number.",
    lateral: "Resist the first obvious answer. Ask: <b>what is the actual problem</b> (not just the stated symptom)? Which solution tackles the root cause rather than just masking it? Good lateral answers tend to be simpler and cheaper than brute-force fixes — if an option sounds expensive or heavy-handed, look again.",
    process: "Draw the <b>dependency arrows</b>: which step produces something the next step needs? A step cannot start until everything it depends on is finished. Look for steps that are truly independent — those can run in parallel. Then order the rest by their dependencies, earliest first."
  },
  questions: {
    "q1": {
      steps: [
        "A standard cube has six faces: <b>top, bottom, front, back, left side, right side</b>.",
        "The face resting on the table counts, and so does the one facing up — both are included in the total.",
        "6 faces total."
      ],
      trap: "No face is hidden from the count — the question asks for the total number of faces the shape has, not the number you can see from one viewpoint."
    },
    "q2": {
      steps: [
        "Picture the plus-sign net: one <b>centre square</b>, then one square attached to each of its four sides (call them top, left, right, bottom extensions), and one more square attached below the bottom extension — six squares in total.",
        "Fold the four side extensions up: they become the four vertical walls of a cube.",
        "The extra square attached to the bottom extension folds over to close the top face.",
        "The centre square is the base — all six faces are now accounted for: a perfect cube."
      ],
      trap: "It feels like the plus-sign net can't close, but the sixth square (the one attached to the bottom arm) reaches all the way up to cap the top. Count the squares first — six is the magic number for a cube."
    },
    "q3": {
      steps: [
        "You start facing the door on the wall in front of you.",
        "Turning 180° means spinning to face the <b>exactly opposite direction</b>.",
        "After a 180° turn you now face the wall behind where you were standing — the wall opposite the door."
      ],
      trap: "180° is a half-turn, not a quarter-turn. You end up facing the wall directly behind your starting position, not a side wall."
    },
    "q4": {
      steps: [
        "You start facing <b>north</b>.",
        "Turning 90° to your <b>right</b> (clockwise) from north moves you to face <b>east</b>.",
        "Think of a compass: N → turn right → E."
      ],
      trap: "Turning right from north gives east, not west. 'Right' is always clockwise on a standard map: N → E → S → W."
    },
    "q5": {
      steps: [
        "Bottom layer: 3 × 3 = <b>9 blocks</b>.",
        "Middle layer: 2 × 2 = <b>4 blocks</b>.",
        "Top layer: <b>1 block</b>.",
        "Total: 9 + 4 + 1 = <b>14</b>."
      ],
      trap: "Don't add only two of the three layers, or miscount the grid sizes. Each layer must be counted separately: 9, 4, and 1."
    },
    "q6": {
      steps: [
        "A flat vertical mirror reverses the dimension that goes <b>into</b> the mirror — that is, left becomes right (and right becomes left).",
        "The 'R' is flipped left-to-right, producing a <b>backwards R</b> (mirrored horizontally).",
        "Up and down are unchanged — it is not upside-down, and it has not been rotated."
      ],
      trap: "Mirrors do not flip top-to-bottom; they flip left-to-right. The R stays upright but its leg swings to the other side."
    },
    "q7": {
      steps: [
        "The repeating unit is: <b>square, circle, triangle</b> (period = 3).",
        "Count where you are: …square (7th). After circle (8th) comes <b>triangle</b> (9th).",
        "The very next shape after '…square, circle' is <b>triangle</b>."
      ],
      trap: "The sequence shown ends on 'circle', so the next item is triangle — the third element of the repeating group."
    },
    "q8": {
      steps: [
        "Look at how much each row <b>grows</b>: Row 1 → Row 2 adds 2 dots; Row 2 → Row 3 adds 3 dots; Row 3 → Row 4 adds 4 dots.",
        "The pattern: each row adds one more dot than the previous row added.",
        "Row 4 → Row 5 adds <b>5</b> dots: 10 + 5 = <b>15</b>."
      ],
      trap: "The rows don't just add a fixed 2 each time. The increment itself grows by 1 each step (2, 3, 4, 5…). These are triangular numbers."
    },
    "q9": {
      steps: [
        "Symmetry requires two halves that are <b>mirror images</b> of each other across a dividing line.",
        "An isosceles triangle has two equal sides and one line of symmetry running from the apex straight down to the midpoint of the base.",
        "Scalene triangles (option A) have no equal sides and no symmetry; a tilted parallelogram has no reflection symmetry; the letter S has rotational symmetry but no reflection symmetry."
      ],
      trap: "Rotational symmetry (S) is not the same as reflection symmetry. Only B — the isosceles triangle — has a true mirror line."
    },
    "q10": {
      steps: [
        "Identify the shared property of four of the shapes: equilateral triangle, square, regular pentagon, regular hexagon are all <b>regular polygons — every side equal, every angle equal</b>.",
        "A rectangle with unequal sides is NOT regular — its sides are not all the same length.",
        "That makes the unequal-sided rectangle the <b>odd one out</b>."
      ],
      trap: "The number of sides is a distraction. The key property is 'regular' (all sides and angles equal). Four shapes share this; only the unequal rectangle does not."
    },
    "q11": {
      steps: [
        "Shape A points right (→). Shape B points down (↓).",
        "Imagine rotating the right-arrow 90° <b>clockwise</b>: the arrowhead, which was pointing to the right, now points downward. The tail, which was on the left, now points upward.",
        "That matches a downward-pointing arrow exactly — so the transformation is a <b>90° clockwise rotation</b>."
      ],
      trap: "A horizontal flip (left-to-right reflection) would give a left-pointing arrow (←), not a downward one. Rotation is the correct operation here."
    },
    "q12": {
      steps: [
        "Row rule: row 1 = circles, row 2 = squares, row 3 = triangles. Bottom-right is in row 3 → must be a <b>triangle</b>.",
        "Column rule: column 1 = small, column 2 = medium, column 3 = large. Bottom-right is in column 3 → must be <b>large</b>.",
        "Combining both rules: the missing cell contains a <b>large triangle</b>."
      ],
      trap: "Apply both rules simultaneously. A 'medium triangle' satisfies only the shape rule but gets the size wrong."
    },
    "q13": {
      steps: [
        "The drawing shows 4 cm and the real room is 4 m = 400 cm.",
        "Scale factor = drawing ÷ real = 4 cm ÷ 400 cm = <b>1 ÷ 100</b>.",
        "Written as a scale: <b>1:100</b>."
      ],
      trap: "Convert to the same units first (both in centimetres). 4 m = 400 cm, not 4 cm — the scale is 1:100, not 1:1."
    },
    "q14": {
      steps: [
        "Set up the proportion: person's height ÷ person's shadow = tree height ÷ tree's shadow.",
        "1.8 ÷ 2.7 = tree height ÷ 7.5.",
        "Shadow-to-height ratio: 2.7 ÷ 1.8 = 1.5, so tree height = 7.5 ÷ 1.5 = <b>5 m</b>."
      ],
      trap: "The sun angle is the same, so the ratio of shadow to object height is fixed. Set up the proportion carefully: don't mix up numerator and denominator."
    },
    "q15": {
      steps: [
        "Ratio 2 : 3 means 2 + 3 = <b>5 equal parts</b> in total.",
        "Each part = 50 ÷ 5 = <b>10 tiles</b>.",
        "Blue tiles = 2 parts = 2 × 10 = <b>20</b>."
      ],
      trap: "Don't split 50 in half. The ratio is 2:3 (not 1:1), so you find one 'share' (10) and multiply by the blue portion (2)."
    },
    "q16": {
      steps: [
        "Golden ratio ≈ <b>1 : 1.618</b>. Find which option's ratio is numerically closest.",
        "1 cm : 2 cm → 1 : 2.000. Difference from 1.618 = 0.382.",
        "3 cm : 5 cm → 1 : 1.667. Difference = 0.049.",
        "5 cm : 8 cm → 1 : 1.600. Difference = 0.018. ✓ (closest)",
        "2 cm : 3 cm → 1 : 1.500. Difference = 0.118.",
        "<b>5 : 8</b> is closest."
      ],
      trap: "3:5 looks close but 5:8 is even closer to 1.618. Calculate each difference from 1.618 to be sure."
    },
    "q17": {
      steps: [
        "Find the pigment per tile: 120 g ÷ 8 tiles = <b>15 g per tile</b>.",
        "Scale up to 20 tiles: 15 g × 20 = <b>300 g</b>."
      ],
      trap: "Find the unit rate first (per tile), then multiply. Don't try to scale 120 directly without knowing how many more tiles you need."
    },
    "q18": {
      steps: [
        "Read the chart values: Room A is 6 m wide, 4 m high. Room B is 8 m wide, 4 m high. Room C is 9 m wide, 5 m high. Room D is 7 m wide, 3 m high.",
        "Target ratio is width : height = 3 : 2 = 1.5 : 1.",
        "Room A: 6 ÷ 4 = <b>1.5</b> exactly. Room B: 8 ÷ 4 = 2.0. Room C: 9 ÷ 5 = 1.8. Room D: 7 ÷ 3 ≈ 2.33.",
        "Room A matches 3 : 2 perfectly."
      ],
      trap: "Calculate the actual ratio for each room — don't estimate by eye. Room A's 6 × 4 gives exactly 1.5, the target."
    },
    "q19": {
      steps: [
        "The constraint is: <b>one flat sheet, no fasteners</b>.",
        "Interlocking slots work purely by geometry — pieces slide together and the weight and friction hold them. No glue or screws are needed.",
        "This is a real technique used in flat-pack furniture and architectural models."
      ],
      trap: "Soaking plywood in water weakens it; stacking pieces still requires sticking them together. The slot-and-tab approach is the only option that truly obeys all constraints."
    },
    "q20": {
      steps: [
        "The root cause: the <b>paved path doesn't go where people naturally want to walk</b>. The muddy shortcut is called a 'desire path' — it reveals actual human behaviour.",
        "Paving the desire path removes the mud and legitimises the route people already chose.",
        "Signs, fences, and fines fight the symptom, not the cause — and are less effective because the underlying desire still exists."
      ],
      trap: "A fence or sign addresses the symptom (people crossing the grass) without fixing why they do it. Paving the shortcut is the only option that resolves the actual mismatch between the path and people's natural movement."
    },
    "q21": {
      steps: [
        "The real complaint is '<b>waiting feels long</b>', not 'the lift is mechanically slow'.",
        "Adding mirrors in the lobby gives people something to do (check appearance, perceive space) while waiting — the wait feels shorter without the lift moving any faster.",
        "This is a famous real-world case study in design: the Otis elevator company solved identical complaints this way."
      ],
      trap: "The expensive instinct is to fix the lift's speed. The designer reframes the problem: the experience of waiting is the issue, not the hardware. Mirrors cost almost nothing and address the actual source of frustration."
    },
    "q22": {
      steps: [
        "Evaluate each option's <b>scale of impact</b>.",
        "Thinner plastic or eco ink saves a trivial amount per unit. Green colour changes nothing real.",
        "Redesigning shape for better stacking means <b>fewer boxes shipped, less void-fill material, lower transport emissions</b> — the biggest win per unit of effort and cost."
      ],
      trap: "Options A and B sound eco-friendly but their actual material saving is tiny. Systemic reduction through smarter geometry has far greater impact than cosmetic changes."
    },
    "q23": {
      steps: [
        "Need: a device that <b>spins at variable speeds</b> and can hold a canvas.",
        "A salad spinner already: has a rotating platform, spins at variable speed (harder or gentler pull), is cheap, and is the right scale for a child's canvas.",
        "An umbrella frame spins but has no solid platform; a picture frame doesn't spin; a door hinge rotates but doesn't spin freely."
      ],
      trap: "The umbrella frame looks circular but it has no flat spinning surface and no speed control. The salad spinner directly provides variable-speed rotation of a flat platform."
    },
    "q24": {
      steps: [
        "The designer's observation reveals the <b>actual source of distress</b>: uncertainty about wait time, not physical discomfort.",
        "A real-time queue display with estimated wait times directly reduces that uncertainty — the root cause of the complaint.",
        "Better chairs, lighting, or a coffee machine improve comfort, but they do not address why patients are distressed."
      ],
      trap: "Don't solve the stated problem ('make it comfortable') — solve the discovered problem ('remove uncertainty'). The design observation changes what counts as the right answer."
    },
    "q25": {
      steps: [
        "Map the logical dependencies:",
        "(U) Design and approvals must come first — you cannot build without a plan.",
        "(Q) Foundation/floor slab must be laid before the frame can stand on it.",
        "(T) Erect the timber stud frame once the foundation is ready.",
        "(R) Install insulation between the studs once the frame is up.",
        "(S) Attach outer cladding once insulation is in place.",
        "(P) Paint or finish the cladding last, once it is attached.",
        "Correct order: <b>U → Q → T → R → S → P</b>."
      ],
      trap: "You cannot erect a frame before laying a foundation, and you cannot insulate before the frame exists. The design and approvals (U) must precede everything physical."
    },
    "q26": {
      steps: [
        "Raw clay must be <b>bisque fired</b> (first kiln firing) to harden it into a porous but rigid state before glazing.",
        "Glaze is a liquid/paste applied to the bisque-fired surface. Without bisque firing, the raw clay would dissolve or deform.",
        "After glazing, a second (glaze) firing melts the glaze into a glassy coat."
      ],
      trap: "The glaze firing comes AFTER glazing, not before. The step that must precede glazing is bisque firing — the first hardening fire."
    },
    "q27": {
      steps: [
        "Primer's job is to give the topcoat something to grip. Without primer, the surface is non-porous or contaminated.",
        "When the first topcoat (Step 3) is applied without primer, it has nothing to bond to — it will <b>not adhere well and is likely to peel or flake</b>.",
        "Steps 4 and 5 fail too, but Step 3 is the first to show the problem."
      ],
      trap: "The failure isn't immediate at Step 1 (cleaning still works fine without primer). The failure appears at Step 3 — the first topcoat — when adhesion is tested."
    },
    "q28": {
      steps: [
        "(C) Ensure the sub-floor is level and solid — tiling on an uneven base leads to cracked tiles.",
        "(B) Apply waterproof membrane — protects the structure from water before tiles go on.",
        "(A) Lay and grout the tiles — only once the surface is prepared.",
        "(D) Seal the grout after it has fully cured — the very last step.",
        "Correct order: <b>C → B → A → D</b>."
      ],
      trap: "The membrane goes on BEFORE the tiles, not after. And sealing grout is always last — grout must cure before sealing."
    },
    "q29": {
      steps: [
        "Identify what each step needs to exist before it can happen:",
        "(iv) Frame the walls — must come first; you cannot wire or board what doesn't exist.",
        "(i) Install wiring — must happen while the wall cavity is open, so after framing.",
        "(ii) Hang plasterboard — closes the wall over the wiring; must come after wiring.",
        "(iii) Paint — must come after plasterboard is hung and finished.",
        "Chain: <b>iv → i → ii → iii</b>."
      ],
      trap: "You cannot wire before there is a frame to wire within, and you cannot board before wiring is inside the cavity. Each step physically enables the next."
    },
    "q30": {
      steps: [
        "Check each pair for dependency:",
        "A (site clearance) and B (drawing production) — site clearance doesn't need drawings, and drawings don't need the site to be cleared. <b>Truly independent</b>.",
        "B and D — excavation requires approved drawings or at least a design, so D depends on B.",
        "A and C — planning submission (C) needs the drawings (B) first, not site clearance.",
        "C and D — excavation cannot start until planning is approved, so D depends on C."
      ],
      trap: "A and B are the only pair with no arrow between them. Surveying a site and producing drawings are separate activities that can proceed concurrently."
    },
    "q31": {
      steps: [
        "A rectangular box (cuboid) has <b>8 corners (vertices)</b> and each edge connects two corners.",
        "Count by face pairs: 4 edges on the top face + 4 edges on the bottom face + 4 vertical edges connecting top to bottom = <b>12 edges</b>."
      ],
      trap: "Don't confuse edges with faces (6) or corners (8). A brick has 12 edges."
    },
    "q32": {
      steps: [
        "Looking straight down at a cylinder from directly above, you see only the <b>circular top opening</b>.",
        "The sides and base are hidden below — the top-down silhouette of any cylinder is a circle."
      ],
      trap: "The side view of a mug is rectangular; the front view shows the handle. But directly above, all you see is the circular opening."
    },
    "q33": {
      steps: [
        "Start: facing <b>north</b>.",
        "First 90° right turn → facing <b>east</b>.",
        "Second 90° right turn → facing <b>south</b>."
      ],
      trap: "Two 90° right turns = 180° total. From north, 180° brings you to south. Don't stop after one turn."
    },
    "q34": {
      steps: [
        "In a 3×3×3 cube, the only small cube with <b>no painted faces</b> is the one completely hidden inside — the very centre cube.",
        "It touches no outer face at all, so no paint reached it.",
        "There is exactly <b>1</b> such cube."
      ],
      trap: "Every other small cube touches at least one outer face of the big cube and gets at least one painted face. Only the single centre cube is fully surrounded."
    },
    "q35": {
      steps: [
        "A small cube gets one painted face for every outer face of the big cube it sits on.",
        "Small cubes with <b>three</b> painted faces sit at the <b>corners</b> of the big cube.",
        "A cube has 8 corners, so there are <b>8</b> small cubes with exactly three painted faces."
      ],
      trap: "Edge cubes (not corners) have 2 painted faces; face-centre cubes have 1; the body centre has 0. Only corner cubes have 3."
    },
    "q36": {
      steps: [
        "Before folding: 1 layer. Folding in half lays one half on top of the other.",
        "Along the folded edge: <b>2 layers</b> of paper are now stacked together."
      ],
      trap: "One fold doubles the layers from 1 to 2. The answer is 2, not 1 (unfolded) or 4 (two folds)."
    },
    "q37": {
      steps: [
        "Each fold doubles the number of layers: 1 → 2 → 4 → 8.",
        "After <b>three</b> folds: 2³ = <b>8 layers</b>."
      ],
      trap: "Three folds is ×2 three times (multiply, not add). 3 × 2 = 6 is wrong; 2 × 2 × 2 = 8 is right."
    },
    "q38": {
      steps: [
        "A cube has <b>six</b> square faces, so its net must contain exactly six squares.",
        "This net has only <b>four</b> squares — two faces short.",
        "No matter how you fold four squares, you can never close all six faces of a cube."
      ],
      trap: "No folding trick compensates for missing faces. Four squares can form other shapes, but never a closed cube."
    },
    "q39": {
      steps: [
        "On a standard die, opposite faces sum to 7.",
        "Face showing 2 is on top, so the opposite face (bottom) = 7 − 2 = <b>5</b>."
      ],
      trap: "The rule is specifically 'opposite faces sum to 7', not any other relationship. 7 − 2 = 5."
    },
    "q40": {
      steps: [
        "Viewed from the side, a dining chair shows: a tall vertical <b>back rest</b> rising upward, a <b>horizontal seat</b> extending forward from the base of the back, and <b>legs</b> hanging down beneath the seat.",
        "That silhouette — vertical back, horizontal seat, legs below — looks like an <b>L-shape</b> with legs."
      ],
      trap: "A front view would show a more rectangular/symmetric outline. The side view reveals the L-shaped profile of back + seat."
    },
    "q41": {
      steps: [
        "A right hand and a left hand are <b>mirror images</b> of each other — they have the same parts but arranged in opposite chirality.",
        "Rotation moves an object through 3D space but never converts it to its mirror image — that would require flipping it through a fourth spatial dimension.",
        "This property is called <b>chirality</b> (handedness) — gloves, screws, and spirals all exhibit it."
      ],
      trap: "No matter how you turn, flip, or rotate a right hand in our three-dimensional world, it never becomes a left hand — only a mirror can do that."
    },
    "q42": {
      steps: [
        "A cylinder has two flat circular ends and one curved rectangular side.",
        "Unroll the curved side: it flattens into a <b>rectangle</b> (its width = the cylinder's height, its length = the circumference).",
        "The two flat ends are <b>two circles</b>.",
        "Net = <b>one rectangle + two circles</b>."
      ],
      trap: "The curved side is not a square — it unrolls into a rectangle. And there are two circles, not one."
    },
    "q43": {
      steps: [
        "Start at floor 0.",
        "Up 3 floors → floor 3.",
        "Down 1 floor → floor 2.",
        "Up 2 floors → floor <b>4</b>."
      ],
      trap: "Track the running total: 0 + 3 = 3, then 3 − 1 = 2, then 2 + 2 = 4. Don't add all the ups and ignore the down."
    },
    "q44": {
      steps: [
        "A square-based pyramid has: <b>1 square base</b> + <b>4 triangular sides</b>.",
        "Total flat faces: 1 + 4 = <b>5</b>."
      ],
      trap: "The base is a face too. Counting only the 4 triangular sides gives 4 — but the square base brings the total to 5."
    },
    "q45": {
      steps: [
        "Pattern: black, white alternating (period = 2).",
        "After …black, white, the next is <b>black</b>."
      ],
      trap: "The pattern is strictly alternating. After white always comes black."
    },
    "q46": {
      steps: [
        "Each square's side length doubles: 2, 4, 8, 16 → multiply by 2 each step.",
        "Next: 16 × 2 = <b>32 cm</b>."
      ],
      trap: "Adding 16 (to get 32) happens to give the right answer but for the wrong reason. The rule is ×2 (doubling), not +16. Confirm: 2×2=4, 4×2=8, 8×2=16, 16×2=32."
    },
    "q47": {
      steps: [
        "Quarter-turn clockwise sequence: up → right → down → left → <b>up</b> → …",
        "After four steps the arrow completes one full cycle and returns to pointing <b>up</b>.",
        "The sequence shown ends on 'left', so the very next step is <b>up</b>."
      ],
      trap: "The cycle has period 4. After 'left' (the 4th position in the cycle), the pattern resets to 'up'."
    },
    "q48": {
      steps: [
        "A vertical line of symmetry means the left half mirrors the right half.",
        "The capital letter <b>A</b>: both legs slope outward equally from a central peak — a vertical line through the apex splits it into two mirror-image halves.",
        "F, G, and P are asymmetric when split vertically."
      ],
      trap: "B has a horizontal line of symmetry (sort of), not vertical. A is the letter with a clean vertical mirror line."
    },
    "q49": {
      steps: [
        "Side count increases by 1 each step: triangle (3), square (4), pentagon (5), …",
        "Next: 5 + 1 = 6 sides → <b>hexagon</b>."
      ],
      trap: "The sequence adds one side per step. After pentagon (5) comes hexagon (6), not octagon (8)."
    },
    "q50": {
      steps: [
        "Shared property: circle, square, and triangle are all described as <b>solid filled</b>.",
        "The star is <b>outline only (hollow)</b> — not solidly filled.",
        "The odd one out is the <b>hollow star</b>."
      ],
      trap: "The distinguishing property is fill style, not shape type. Three are filled; one is hollow — that one stands apart."
    },
    "q51": {
      steps: [
        "Shape sequence (period 2): square, circle, square, circle… Position 7 is odd → <b>square</b>.",
        "Colour sequence (period 3): red, blue, blue, red, blue, blue… Position 7: 7 mod 3 = 1 (remainder 1) → first in the cycle → <b>red</b>.",
        "7th item: <b>square, red</b>."
      ],
      trap: "Track the two rules independently. Shape cycles with period 2; colour cycles with period 3. Apply modular arithmetic to each: position 7, shape cycle 2 → odd → square; colour cycle 3 → position 7 mod 3 = 1 → red."
    },
    "q52": {
      steps: [
        "The grid counts go: 1, 3, 5, 7, 9, 11, 13, 15, <b>?</b> — each cell adds 2.",
        "After 15, the next value is 15 + 2 = <b>17</b>."
      ],
      trap: "The rule is a simple +2 each step. Count the cells: 8 values given, blank is the 9th: 15 + 2 = 17."
    },
    "q53": {
      steps: [
        "Repeating unit ABB (period = 3).",
        "10th position: 10 ÷ 3 = 3 remainder 1, so position 10 is the same as position 1 in the unit → <b>A</b>."
      ],
      trap: "Use modular arithmetic: position 10, period 3 → remainder 1 → maps to the 1st element of the unit (A). Don't count out all 10 items if you know the cycle."
    },
    "q54": {
      steps: [
        "Scaling (enlarging/reducing) a logo changes its size but preserves all <b>proportional relationships</b> between its parts.",
        "If the logo is enlarged to twice the size, every length doubles — the ratio of any two lengths stays identical.",
        "Colours, shapes, and corner angles are all unchanged by uniform scaling."
      ],
      trap: "Only non-uniform scaling (stretching in one direction) would change proportions. A uniform 'twice the size' enlargement leaves proportions intact."
    },
    "q55": {
      steps: [
        "Count the small squares: the 2×2 grid gives <b>4 small squares</b>.",
        "Count the big outer square: <b>1 large square</b>.",
        "Total: 4 + 1 = <b>5</b>."
      ],
      trap: "People see 4 and stop. The outer boundary is also a square — don't forget to count it."
    },
    "q56": {
      steps: [
        "A square has: (1) a vertical line through its centre, (2) a horizontal line through its centre, (3) a diagonal from top-left to bottom-right, (4) a diagonal from top-right to bottom-left.",
        "Each line folds the square onto itself perfectly.",
        "Total: <b>4 lines of symmetry</b>."
      ],
      trap: "A rectangle (non-square) has only 2 lines of symmetry (no diagonals). A square's equal sides mean its diagonals are also lines of symmetry."
    },
    "q57": {
      steps: [
        "The dot grids are perfect squares: 1×1=1, 2×2=4, 3×3=9, 4×4=16.",
        "Next in sequence: 5×5 = <b>25 dots</b>."
      ],
      trap: "These are perfect square numbers. After 4×4=16, the next is 5×5=25, not 20 or 24."
    },
    "q58": {
      steps: [
        "The analogy is: small → large, same shape.",
        "Small circle is to large circle as small square is to <b>large square</b>."
      ],
      trap: "The relationship is purely size (small to large), keeping the shape constant. The answer must be the same shape (square) made larger."
    },
    "q59": {
      steps: [
        "Scale 1:100 means 1 cm on the drawing = 100 cm in reality.",
        "3 cm on drawing × 100 = <b>300 cm = 3 m</b>."
      ],
      trap: "3 cm × 100 = 300 cm = 3 m, not 30 m. Always convert to metres after multiplying."
    },
    "q60": {
      steps: [
        "Ratio 1 table : 4 chairs.",
        "7 tables × 4 chairs per table = <b>28 chairs</b>."
      ],
      trap: "The ratio is 1:4 (not 1:2). Multiply 7 tables by 4, not by 2 or 3."
    },
    "q61": {
      steps: [
        "Original side = s, so area = s².",
        "New side = 2s, so new area = (2s)² = <b>4s²</b>.",
        "Area becomes <b>four times as large</b>."
      ],
      trap: "Doubling the side doubles both dimensions — area scales as the square. 2 × 2 = 4, not 2."
    },
    "q62": {
      steps: [
        "Rate: 600 g ÷ 12 mugs = <b>50 g per mug</b>.",
        "For 4 mugs: 50 × 4 = <b>200 g</b>."
      ],
      trap: "Find the unit rate (per mug) first. 600/12 = 50. Then 50 × 4 = 200, not 150 or 240."
    },
    "q63": {
      steps: [
        "Ratio 16 : 9. Width is 32 cm. Scale factor from 16 to 32 = 32 ÷ 16 = <b>2</b>.",
        "Height = 9 × 2 = <b>18 cm</b>."
      ],
      trap: "Scale both dimensions by the same factor. The width doubled (16→32), so the height also doubles (9→18)."
    },
    "q64": {
      steps: [
        "Original width = 6 cm, new width = 15 cm. Scale factor = 15 ÷ 6 = <b>2.5</b>.",
        "New height = original height × scale factor = 4 × 2.5 = <b>10 cm</b>."
      ],
      trap: "The scale factor is 2.5 (not 2 or 3). Calculate it precisely from the widths, then apply to the height."
    },
    "q65": {
      steps: [
        "Scale 1:50 means 1 cm on model = 50 cm in reality.",
        "Real beam = 4 m = 400 cm. Model length = 400 ÷ 50 = <b>8 cm</b>."
      ],
      trap: "Convert metres to centimetres first: 4 m = 400 cm. Then divide by the scale factor (50): 400 ÷ 50 = 8 cm."
    },
    "q66": {
      steps: [
        "Ratio 3 : 1 (paint : water). Total parts = 3 + 1 = 4.",
        "Each part = 8 litres ÷ 4 = 2 litres.",
        "Water = 1 part = <b>2 litres</b>."
      ],
      trap: "Don't divide 8 by 3. Find how many parts in total (4), then how big one part is (2 L), then the water portion (1 × 2 = 2 L)."
    },
    "q67": {
      steps: [
        "Read chart values: Box A = 10 × 6, Box B = 8 × 8, Box C = 12 × 9, Box D = 5 × 11.",
        "A perfect square has equal width and height (ratio 1:1).",
        "Box B: 8 = 8 — <b>exactly square</b>. All others have unequal dimensions.",
        "Choose <b>Box B</b>."
      ],
      trap: "No calculation needed beyond comparing width to height. Box B has identical values (8 and 8), making it a perfect square."
    },
    "q68": {
      steps: [
        "5 painters, each takes one wall. So each painter paints 1 wall in <b>5 hours</b> independently.",
        "1 painter painting 1 wall at the same pace takes <b>5 hours</b>."
      ],
      trap: "The key insight: each painter has their own wall and works independently. There is no sharing of effort — one painter always takes 5 hours for 1 wall."
    },
    "q69": {
      steps: [
        "Image : text = 2 : 3. Total parts = 2 + 3 = 5.",
        "Image fraction = 2 out of 5 = <b>two fifths</b>."
      ],
      trap: "The image gets 2 parts out of a total of 5, giving 2/5. Don't confuse with the text's share (3/5)."
    },
    "q70": {
      steps: [
        "A4 halved gives two A5 sheets with the same proportions as A4. A3 halved gives two A4 sheets, and so on.",
        "This means you can <b>scale a layout up or down</b> between A-series sizes (e.g. A4 → A3) without distorting proportions.",
        "The ratio that makes this work is 1 : √2 ≈ 1 : 1.414."
      ],
      trap: "The clever property is about consistent proportions under halving — not about squares, ink colour, or measurement avoidance."
    },
    "q71": {
      steps: [
        "Rate: 250 ml ÷ 5 panels = <b>50 ml per panel</b>.",
        "For 8 panels: 50 × 8 = <b>400 ml</b>."
      ],
      trap: "Unit rate first: 250/5 = 50 ml per panel. Then multiply: 50 × 8 = 400 ml, not 375 or 350."
    },
    "q72": {
      steps: [
        "Ratio 12 : 18. Divide both sides by their GCF (6): 12 ÷ 6 = 2, 18 ÷ 6 = 3.",
        "Simplest form: <b>2 : 3</b>."
      ],
      trap: "6:9 is still not fully simplified (both divisible by 3). Keep dividing until no common factor remains — 2:3 is the simplest form."
    },
    "q73": {
      steps: [
        "The goal: make customers <b>naturally</b> pause at the display without needing to read a sign.",
        "A gentle bend in the path means people must turn their body to navigate it — as they turn, they naturally face the display.",
        "This works with human movement patterns rather than against them."
      ],
      trap: "A sign requires people to notice and obey it — many won't. Architectural or spatial cues that align with natural movement are far more effective and require no conscious effort from the visitor."
    },
    "q74": {
      steps: [
        "Physics of tipping: the harder it is to shift the centre of gravity outside the base, the more stable the object.",
        "A <b>wide, heavy base</b> lowers the centre of gravity and widens the footprint — both resist tipping.",
        "Colour, lids, and handles don't address the physics of stability."
      ],
      trap: "A lid prevents spilling after tipping but doesn't prevent the tip itself. The single feature that directly prevents tipping is a wide, heavy base."
    },
    "q75": {
      steps: [
        "SCAMPER 'Combine' = merge two separate objects into one.",
        "A <b>pencil with a built-in eraser</b> combines the writing tool and the correction tool into a single object — a textbook example of combination.",
        "Glass bottles, rulers, and paper bags are single-function objects."
      ],
      trap: "Look for a product where two formerly separate tools are merged into one physical item. The eraser-tipped pencil is the canonical example taught in design courses."
    },
    "q76": {
      steps: [
        "Root cause: the packaging's opening mechanism is <b>not self-evident</b>.",
        "If the shape itself communicates how to open it (a notch, a tab that begs to be pulled, a perforation line), users don't need instructions.",
        "This is the design principle of <b>affordance</b>: the object's form signals its correct use."
      ],
      trap: "Clearer or larger instructions still require people to read them. Redesigning the shape so the correct action is obvious removes the need for instructions entirely — the better fix."
    },
    "q77": {
      steps: [
        "Need: seat 3 people comfortably AND discourage lying across the full bench.",
        "<b>Two armrests</b> divide the bench into three separate seat spaces, comfortably seating three people, while making it physically awkward (but not impossible) to lie full-length.",
        "Shortening the bench sacrifices seating capacity; slippery surfaces hurt; removing the bench removes seating entirely."
      ],
      trap: "The solution must achieve BOTH goals simultaneously. Armrests are the only option that seats three people AND provides a physical deterrent to lying down."
    },
    "q78": {
      steps: [
        "A constraint (offcuts are too small for furniture) can be reframed as an <b>opportunity</b> if you find a use that matches the new scale.",
        "Small offcuts are perfect for small objects — coasters, toys, decorative blocks — which can even become a product line or gift item.",
        "Throwing them away destroys value; storing them forever achieves nothing."
      ],
      trap: "Lateral thinking here means changing the question from 'how do I get rid of these?' to 'what can I make with offcuts exactly this size?' The constraint defines the product."
    },
    "q79": {
      steps: [
        "Root cause of noise: sound travels freely in an open space with hard reflective surfaces.",
        "<b>Sound-absorbing materials</b> (soft panels, carpet, acoustic tiles) reduce reverberation; <b>enclosed quiet zones</b> physically separate noisy activities from focused work.",
        "Telling people to be quieter doesn't change the acoustic environment — sound still bounces around."
      ],
      trap: "'Ask everyone to be quieter' addresses behaviour, not physics. Noise in open offices is a spatial/acoustic design problem requiring a spatial/acoustic solution."
    },
    "q80": {
      steps: [
        "This is called <b>inversion thinking</b> (or the 'opposite' technique).",
        "By listing what makes a shopfront forgettable (bland, no name visible, uniform with neighbours, nothing interesting at eye level), you automatically generate a list of what to AVOID — which is a clearer brief than 'make it memorable'.",
        "Sometimes it's easier to identify failure modes than success conditions."
      ],
      trap: "This isn't giving up — it's a structured creativity technique. Knowing exactly what NOT to do is highly actionable design guidance."
    },
    "q81": {
      steps: [
        "A horizontal ladder mounted on a wall has rungs at regular intervals — these become the <b>shelf supports</b>.",
        "Planks rested across the rungs create shelves at multiple heights, using the ladder's existing structure.",
        "Cost: near zero. Aesthetic: rustic/industrial, matching a café's character."
      ],
      trap: "The rustic appeal and structural regularity of a ladder make it ideal for shelving. Burning or storing it wastes the resource; using it only as a ladder misses the creative reuse."
    },
    "q82": {
      steps: [
        "Children and adults need different spout heights to drink comfortably.",
        "Two fountains at different heights, or one fountain with both a high and a low spout, <b>directly accommodates both groups</b>.",
        "Single-height fountains exclude one group; signs only add instructions without changing the physical reality."
      ],
      trap: "The simplest inclusive solution literally provides both heights — not one compromise height that works poorly for both. The question asks for the 'simplest' option that actually works."
    },
    "q83": {
      steps: [
        "Signs tell drivers the rule; they don't change the <b>felt experience</b> of driving.",
        "Narrowing the visual width with trees, planters, and parked cars makes the road <b>feel tighter</b>, which triggers an instinctive slowing response even in drivers who don't consciously read the speed limit.",
        "This is called a 'traffic calming' measure and is extensively used in urban design."
      ],
      trap: "More or brighter signs haven't worked — the problem is behaviour, not awareness. Physical design changes that alter how the road feels are far more effective at actually changing driver behaviour."
    },
    "q84": {
      steps: [
        "If visitors don't see a side room, they don't choose to enter it — they follow the path of least resistance.",
        "An <b>eye-catching object</b> (an unusual artefact, sculpture, or striking display) or a <b>pool of warm light</b> at the entrance creates visual curiosity that pulls people in without requiring signage.",
        "This works with natural human curiosity rather than fighting it."
      ],
      trap: "Signs require visitors to read and act on them. A visual hook at the entrance works at the pre-conscious level — people move toward interesting things automatically."
    },
    "q85": {
      steps: [
        "George de Mestral noticed burrs stuck to his dog's fur and studied their micro-hooks under a microscope, leading to Velcro.",
        "This strategy — observing how nature has already solved a problem and applying that principle to design — is called <b>biomimicry</b>.",
        "Other examples: Shinkansen bullet train nose designed like a kingfisher's beak; building ventilation inspired by termite mounds."
      ],
      trap: "Biomimicry is a specific, named design strategy. It is not copying a competitor (that's imitation) and not random trial-and-error."
    },
    "q86": {
      steps: [
        "A fixed constraint (the pillar cannot move) can become a <b>feature</b> if you design around it intentionally rather than apologetically.",
        "Wrapping the pillar with a circular bar, shelving, or vertical garden makes it useful and visually deliberate — customers stop noticing it as a problem.",
        "This is the 'constraint as opportunity' principle: the best design often comes from embracing what cannot change."
      ],
      trap: "Hiding or apologising for the pillar keeps it a problem. Turning it into a purposeful feature makes the constraint invisible or even desirable."
    },
    "q87": {
      steps: [
        "Boiling water is the physical prerequisite for making tea — you cannot pour hot water until the water is hot.",
        "Boiling must come <b>before</b> pouring."
      ],
      trap: "Adding milk, drinking, or washing happen after the tea is made. The only step that must precede pouring the hot water is boiling it."
    },
    "q88": {
      steps: [
        "Socks must go on before shoes because shoes cover socks — you physically cannot put shoes on first and then slide socks underneath.",
        "<b>Socks before shoes</b> is the only genuinely required ordering here."
      ],
      trap: "Many clothing items (coat, hat, trousers) can technically be put on in various orders. Socks and shoes are the classic example of a true physical dependency."
    },
    "q89": {
      steps: [
        "Map the dependencies: you must weigh/mix dry (Q) and wet (U) separately before combining them.",
        "Q and U can happen in either order, but both must come before S (combining into batter).",
        "S → R (bake) → T (cool — you cannot ice a hot cake) → P (ice).",
        "Correct order: <b>Q → U → S → R → T → P</b>."
      ],
      trap: "Icing (P) must come last, and cooling (T) must come before icing. Baking (R) must come before cooling. Combining (S) must come before baking. Weighing/mixing ingredients (Q, U) must come before combining."
    },
    "q90": {
      steps: [
        "A 3D printer reads a file of layer-by-layer instructions (a 'slice' file), not the original 3D model directly.",
        "<b>Slicing the model</b> (converting it to printable layers and sending to the printer) is the step that must happen immediately before printing begins.",
        "Sanding, support removal, and painting all happen after printing."
      ],
      trap: "The printer cannot start until it receives the sliced file. The slicing step is the direct prerequisite to printing — not support removal (which comes after)."
    },
    "q91": {
      steps: [
        "Walls cannot stand without a foundation below them to distribute their load to the ground.",
        "A roof cannot span across walls that do not yet exist.",
        "Dependency chain: <b>foundations → walls → roof</b>."
      ],
      trap: "Each stage literally has nothing to rest on without the previous one. This is an absolute physical dependency."
    },
    "q92": {
      steps: [
        "Map the dependencies: C needs B done first; D needs both A and C done.",
        "At the very start: A (manufacture) has no prerequisites; B (design artwork) has no prerequisites.",
        "<b>A and B</b> can run simultaneously from day one.",
        "C must wait for B; D must wait for both A and C."
      ],
      trap: "C depends on B, so C cannot start immediately. D depends on both A and C. Only A and B have no incoming dependencies and can begin in parallel."
    },
    "q93": {
      steps: [
        "You cannot sew fabric that hasn't been cut yet, and you cannot cut without having the pattern pieces as a guide.",
        "<b>Cut the fabric pieces from the pattern</b> must come first.",
        "Sewing, buttons, and ironing all follow cutting."
      ],
      trap: "Attaching buttons requires a garment that is already sewn. Ironing is a finishing step. Cutting is the prerequisite for everything else."
    },
    "q94": {
      steps: [
        "The <b>critical path</b> is the longest chain — it determines the overall duration.",
        "Chain 1 takes 10 days; Chain 2 takes 6 days. Both run simultaneously. Opening date is set by the longer chain: 10 days.",
        "Chain 2 delayed by 2 days → Chain 2 now takes 8 days. But Chain 1 still takes 10 days and is still longer.",
        "Chain 2 is still not the bottleneck — <b>opening date is unaffected</b>."
      ],
      trap: "Only a delay on the critical path (the longest chain) delays the overall project. Chain 2 (6 days → 8 days) is still shorter than Chain 1 (10 days), so the opening date doesn't move."
    },
    "q95": {
      steps: [
        "Step 1 creates the stencil by coating the screen and exposing it to light through the design — the unexposed areas wash away to leave open mesh only where ink should pass.",
        "Without Step 1, the entire screen mesh is open — <b>ink passes through everywhere</b>, printing a solid blotch instead of a design.",
        "There is no stencil, so no controlled pattern can be printed."
      ],
      trap: "Step 1 is the stencil-creation step. Without a stencil, the screen has no design information — ink floods through indiscriminately. It is absolutely not optional."
    },
    "q96": {
      steps: [
        "Paint needs a clean, smooth surface to bond to.",
        "<b>Sanding</b> removes rough fibres and old finish; cleaning off the dust ensures nothing sits between the paint and the wood.",
        "Applying topcoat or wax to unsanded, dusty wood results in poor adhesion and a rough finish."
      ],
      trap: "Sanding first is not optional — it is the physical preparation that all subsequent coats depend on. Glossy topcoat cannot cover a rough surface; it follows the texture underneath."
    },
    "q97": {
      steps: [
        "Adhesive needs time to set (cure) and grip the tiles firmly in place.",
        "While the adhesive is still wet, the tiles can be nudged, shifted, or sunk unevenly.",
        "Grouting while tiles are still movable means the grout forces tiles out of alignment — <b>the tile layout is ruined</b>.",
        "Setting time is a mandatory wait, not optional padding."
      ],
      trap: "Grouting feels like a separate job that could happen in any order. But grouting requires downward pressure and movement — on wet adhesive, this displaces the tiles. The setting time protects the layout."
    },
    "q98": {
      steps: [
        "You cannot sketch solutions (B) without knowing what problem to solve (A — requirements).",
        "You cannot build (C) something you haven't designed (B).",
        "You cannot test (D) something that doesn't exist yet (C).",
        "Correct order: <b>A → B → C → D</b>."
      ],
      trap: "Each step produces the input the next step needs. Building before sketching means building without a plan; testing before building means nothing to test."
    },
    "q99": {
      steps: [
        "A mould defines the shape of the cast object. Molten metal poured without a mould would simply pool or splash — it has no shape to fill.",
        "<b>Creating the mould cavity</b> must come before pouring.",
        "Polishing, removing from the mould, and selling all follow the cast."
      ],
      trap: "The mould is the prerequisite for the pour. Without the cavity, there is no shape — pouring is physically meaningless without it."
    },
    "q100": {
      steps: [
        "Map dependencies: (iii) needs (ii) — drawer needs runners first; (iv) needs (i) — standing up needs legs on.",
        "(i) attach legs and (ii) attach drawer runners are <b>independent of each other</b> — they can be done in either order.",
        "Valid sequence: attach legs (i) and runners (ii) in either order, then slide drawer (iii) into runners, then stand the desk up (iv).",
        "One valid order: <b>ii → iii → i → iv</b> — runners first, then drawer, then legs, then stand up."
      ],
      trap: "You cannot slide the drawer in (iii) before the runners exist (ii). You cannot stand the desk up (iv) until the legs are attached (i). But attaching legs and attaching runners have no dependency on each other, giving some ordering flexibility."
    }
  }
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
