// Study guide explanations for the Engineering assessment.
window.GUIDE = {
  strategies: {
    quant: "Turn the words into a formula before touching numbers. Ask: what <b>rate</b> or <b>ratio</b> is being described, and what is the unknown? Watch for area and volume: if a <i>linear</i> dimension doubles, area scales by <b>2² = 4</b> and volume by <b>2³ = 8</b>. For 'working together' problems, add the <i>rates</i>, not the times.",
    physics: "State the principle first, then apply it. Before calculating, ask: which law covers this? (Newton's laws, conservation of energy, torque, pressure = force ÷ area, density.) Sketch a quick force or energy diagram mentally. Numbers should confirm what your physical intuition already suspects.",
    spatial: "Build the shape in your mind one step at a time. For nets, fold one edge at a time and track which face goes where. For rotation, anchor one point and follow it through the turn. For cube dissections, count by layer: corners, edges, faces, centre.",
    systems: "Find the <b>constraint</b> (bottleneck), the <b>feedback direction</b> (positive or negative), and the <b>single point of failure</b>. A chain is only as strong as its weakest link — speeding up any link that isn't the bottleneck changes nothing. Ask 'what happens downstream if this part fails?'",
    optimize: "List all options that <b>meet the constraint first</b>, then compare cost/time/material among those survivors. Options that fail the constraint are disqualified no matter how cheap. For shape problems, the most compact (square or cube) shape uses the least perimeter or surface area for a given area or volume."
  },
  questions: {
    q1: {
      steps: [
        "Find each pipe's rate in tanks per minute: Pipe 1 fills 1 tank in 12 min → rate = <b>1/12</b> tank/min. Pipe 2 fills 1 tank in 6 min → rate = <b>1/6</b> tank/min.",
        "Combined rate = 1/12 + 1/6. Convert to the same denominator: 1/12 + 2/12 = <b>3/12 = 1/4</b> tank/min.",
        "Time to fill 1 tank at 1/4 per min = 1 ÷ (1/4) = <b>4 minutes</b>."
      ],
      trap: "Don't average the two times (12 + 6) ÷ 2 = 9. Add the <i>rates</i>, not the times — rates combine, times don't."
    },
    q2: {
      steps: [
        "Total load = 450 tonnes, spread across the new number of beams = 18.",
        "Load per beam = 450 ÷ 18 = <b>25 tonnes</b>."
      ],
      trap: "Don't divide by 30 (the old count). The total capacity stays at 450 tonnes; only the number of beams changes."
    },
    q3: {
      steps: [
        "Power is proportional to <b>area</b>, not to side length.",
        "Old area = 2 × 2 = 4 m². New area = 4 × 4 = <b>16 m²</b>.",
        "Area ratio = 16 ÷ 4 = <b>4</b>. New power = 400 × 4 = <b>1,600 W</b>."
      ],
      trap: "Doubling the side doubles the area? No — area scales as the <i>square</i> of the linear dimension. Doubling the side quadruples the area."
    },
    q4: {
      steps: [
        "Crew 1 rate = 120 m ÷ 8 h = <b>15 m/h</b>. Crew 2 rate = half = <b>7.5 m/h</b>.",
        "Combined rate = 15 + 7.5 = <b>22.5 m/h</b>.",
        "Time = 180 ÷ 22.5 = <b>8 hours</b>."
      ],
      trap: "Both crews working means their rates add. Don't confuse the combined rate with just Crew 1's rate."
    },
    q5: {
      steps: [
        "Cross-sectional area of a circle ∝ diameter². Old area ∝ 10² = 100. New area ∝ 20² = 400.",
        "New area is <b>4 times</b> the old area.",
        "Percentage increase = (4 − 1) × 100% = <b>300%</b>."
      ],
      trap: "The area doubled? No — doubling the diameter quadruples the area (2² = 4). An increase from 100 to 400 is a 300% increase, not 100%."
    },
    q6: {
      steps: [
        "The trains close the 300 km gap at a combined speed of 80 + 70 = <b>150 km/h</b>.",
        "Time to meet = 300 ÷ 150 = <b>2 hours</b>.",
        "Train A travels at 80 km/h for 2 hours = 80 × 2 = <b>160 km</b> from its starting station."
      ],
      trap: "They don't meet in the middle (150 km) because the trains travel at different speeds. Add the speeds, find the time, then multiply only Train A's speed by that time."
    },
    q7: {
      steps: [
        "Principle: Torque = Force × distance from pivot. A longer handle means a larger distance.",
        "The 30 cm spanner has twice the lever arm of the 15 cm one.",
        "Same hand force × twice the distance = <b>twice the torque</b> — so the longer spanner wins."
      ],
      trap: "A shorter spanner feels stiffer, but 'stiff' and 'strong turning force' are different things. Turning force (torque) grows with arm length."
    },
    q8: {
      steps: [
        "Principle (Archimedes): an object floats when its <b>average density</b> is less than water's.",
        "A solid steel ball is dense throughout — average density > water → sinks.",
        "The ship's hull encloses a vast volume of air. Average density of (thin steel shell + air inside) << water → floats."
      ],
      trap: "The ship's steel is the same material as the ball. The difference is not the grade of steel — it's the shape that traps air and lowers the overall density."
    },
    q9: {
      steps: [
        "Principle: insulation slows <i>heat transfer in both directions</i>.",
        "On a hot day, heat tries to flow from the warm air into the cold ice cream.",
        "Wool traps air and is a poor conductor, so it greatly slows that inward heat flow — the ice cream stays cold longer."
      ],
      trap: "Wool doesn't generate heat — it just slows heat movement. The same blanket that keeps you warm in winter keeps the cold in in summer."
    },
    q10: {
      steps: [
        "Principle: an arch converts vertical loads into <b>compressive forces along its curve</b>, which are efficiently carried to the abutments.",
        "A flat beam must resist <b>bending stress</b>, which is far more demanding for the same span.",
        "Arches are used where long spans are needed precisely because compression is easy for stone, concrete, and steel."
      ],
      trap: "The arch doesn't necessarily use less steel. The structural advantage is the shape, not the material quantity."
    },
    q11: {
      steps: [
        "Principle: conservation of energy. Kinetic energy (KE) converts to gravitational potential energy (GPE) as the ball climbs.",
        "On a frictionless ramp, no energy is lost — it all converts from KE to GPE.",
        "So the ball's speed <i>decreases</i> as it rises (KE decreases) and it would stop at the exact height where all KE has become GPE."
      ],
      trap: "'Frictionless' means no energy loss to heat, but the ball still slows — energy is conserved by being converted, not created."
    },
    q12: {
      steps: [
        "Principle (Galileo): in the absence of air resistance, gravity accelerates all objects at the same rate (~9.8 m/s²) regardless of mass.",
        "Both balls start from the same height with zero velocity. Same acceleration, same starting conditions → same fall time.",
        "They hit at exactly the same time."
      ],
      trap: "Heavier feels like faster in everyday life because air resistance matters less for heavy objects. In a vacuum (stated in the question) that effect vanishes entirely."
    },
    q13: {
      steps: [
        "A cube has 6 faces (top, bottom, front, back, left, right).",
        "Unfolding the cube lays all 6 faces flat — a valid net has exactly <b>6 squares</b>."
      ],
      trap: "Don't confuse faces (6) with vertices (8) or edges (12) of a cube."
    },
    q14: {
      steps: [
        "Start: long arm → right (East), short arm → up (North) from the left end.",
        "A 90° clockwise rotation turns East → South, North → East.",
        "So the long arm now points <b>down (South)</b>, and the short arm points <b>right (East)</b> from the <i>top</i> end of the long arm.",
        "That matches option A: 'Long arm pointing down, short arm pointing right from the top end'."
      ],
      trap: "Rotate each direction vector, not just one end. Both the arm direction and the corner direction change."
    },
    q15: {
      steps: [
        "Each cube has 6 faces. Three cubes have 18 faces total.",
        "Hidden (touching) faces: bottom cube top touches middle cube bottom (2 faces); middle cube top touches top cube bottom (2 faces). Total hidden = 4.",
        "Visible faces = 18 − 4 = <b>14</b>."
      ],
      trap: "Each touch point hides <i>two</i> faces (one from each cube). Don't subtract 1 per join, subtract 2."
    },
    q16: {
      steps: [
        "A vertical mirror reflects left ↔ right but leaves up/down unchanged.",
        "The letter R has its leg kicking to the lower right. After reflection that leg kicks to the lower <b>left</b>.",
        "The result is a mirror-R (sometimes written Я) — reversed left-right."
      ],
      trap: "R is not symmetric (unlike A, H, M) — a reflected R is clearly different from the original."
    },
    q17: {
      steps: [
        "Room area = 8 m × 6 m = <b>48 m²</b>.",
        "Pillar area = 1 m × 1 m = <b>1 m²</b>.",
        "Available floor = 48 − 1 = <b>47 m²</b>."
      ]
    },
    q18: {
      steps: [
        "Count the squares: 1 centre + 4 sides + 1 extra on top of one side = <b>6 squares</b>.",
        "Six squares is the correct number for a cube net.",
        "This particular arrangement (cross or T-variant) is a valid cube net — it folds into a <b>cube</b>."
      ],
      trap: "Six squares don't automatically make a valid net — but this specific cross arrangement does. A triangular prism has 5 faces; a pyramid fewer. The answer is cube."
    },
    q19: {
      steps: [
        "The machines are in <b>series</b>: each feeds the next. No machine can skip a broken one.",
        "If Machine 3 breaks, it receives parts from Machines 1–2 but cannot pass them to Machine 4.",
        "Parts back up behind the break, and no finished parts emerge → <b>the entire line stops</b>."
      ],
      trap: "Parallel systems can reroute; series systems cannot. A chain of dependent steps has no bypass."
    },
    q20: {
      steps: [
        "The thermostat <b>measures</b> the output (room temperature) and <b>uses that information</b> to adjust the input (heater on/off).",
        "When temperature exceeds the target, the heater turns off — it pushes the output back toward the goal.",
        "This is <b>negative feedback</b>: the system's response opposes the deviation."
      ],
      trap: "Positive feedback would amplify the deviation (hotter → heater works harder → hotter still). A thermostat does the opposite."
    },
    q21: {
      steps: [
        "In the elastic range, the beam springs back to its original shape — deformation is proportional to load (straight line).",
        "Beyond the <b>elastic limit</b> (yield point), small additional load causes large, permanent deformation.",
        "The steep upturn in the curve means the beam is plastically deforming and approaching structural failure."
      ],
      trap: "This is not instrument error or a loading artefact. The abrupt change in slope is the signature of yielding — a real physical change in the beam's behaviour."
    },
    q22: {
      steps: [
        "Each hydraulic system can independently control the flight surfaces.",
        "If one fails due to any cause (leak, seal failure, contamination), the remaining two take over — the pilot retains full control.",
        "This is <b>redundancy</b>: multiple independent systems protect against single-point failure."
      ],
      trap: "Redundancy costs more and weighs more. Engineers accept that cost specifically because safety in flight is non-negotiable."
    },
    q23: {
      steps: [
        "Read the bar chart: Stage 1=120, Stage 2=95, Stage 3=<b>60</b>, Stage 4=110, Stage 5=100.",
        "A series pipeline can only move as fast as its slowest stage.",
        "Stage 3 processes only 60 units/hour — that caps the entire line at <b>60 units/hour</b>."
      ],
      trap: "The fastest or average stage does not set the pace. The bottleneck stage does — like a narrow section in a pipe limits the whole flow."
    },
    q24: {
      steps: [
        "Widening the road reduced travel time and friction → more people chose to drive instead of using buses, cycling, or staying home.",
        "New demand filled the extra capacity, and congestion returned or worsened.",
        "This is <b>induced demand</b>: supply creates its own demand when the resource is transportation capacity."
      ],
      trap: "The contractors didn't do it wrong. The widening 'worked' physically — but the system responded by attracting more users, negating the gain."
    },
    q25: {
      steps: [
        "You start with 1 piece. Each cut adds exactly 1 piece.",
        "To end with 10 pieces you need 10 − 1 = <b>9 cuts</b>."
      ],
      trap: "It's natural to say '10 pieces = 10 cuts', but the first piece already exists before any cuts. Count cuts needed, not pieces desired."
    },
    q26: {
      steps: [
        "Identify valid options first (must reach ≥ 500 kg). Supplier B 6 bags = 480 kg — insufficient. Supplier A 9 bags = 450 kg — insufficient.",
        "Valid options: Supplier A 10 bags = 500 kg at <b>₹1,200</b>. Supplier B 7 bags = 560 kg at <b>₹1,260</b>.",
        "Supplier A is cheaper: <b>₹1,200</b>."
      ],
      trap: "Options C and D are cheaper in rupees but don't meet the 500 kg requirement — they're disqualified before price comparison."
    },
    q27: {
      steps: [
        "Calculate litres for each route: Route 1 = 80 ÷ 8 = <b>10 L</b>. Route 2 = 60 ÷ 5 = <b>12 L</b>. Route 3 = 70 ÷ 6 ≈ <b>11.7 L</b>.",
        "Route 1 uses the least fuel at <b>10 litres</b> despite being the longest distance."
      ],
      trap: "Shorter distance doesn't mean less fuel if the road is less efficient. Always divide distance by fuel economy for each route."
    },
    q28: {
      steps: [
        "For a fixed area, the shape that minimises perimeter is the most 'square-like'.",
        "Check all four options (all have area = 36 m²): 18×2 perimeter=40, 12×3 perimeter=30, 9×4 perimeter=26, 6×6 perimeter=<b>24</b>.",
        "The square 6 × 6 has the shortest perimeter: <b>24 m</b>."
      ],
      trap: "Intuition might say 'a long thin shape fits the site'. But the question only asks for minimum fencing — the square always wins for a given area."
    },
    q29: {
      steps: [
        "First filter by the constraint: strength ≥ 8/10. Material X scores 5/10 — disqualified.",
        "Remaining valid options: W (₹10,000, 8/10), Y (₹8,000, 8/10), Z (₹14,000, 9/10).",
        "Lowest cost among valid options = Material Y at <b>₹8,000</b>."
      ],
      trap: "Z has the best strength but costs most and doesn't add value beyond the minimum needed. X is cheapest but fails the strength constraint."
    },
    q30: {
      steps: [
        "Worker 1 does Task A (4 h). Worker 2 does Task B (3 h), then waits idle for 1 hour until A is done.",
        "Both A and B finish at <b>hour 4</b>. Task C can now start.",
        "C takes 2 hours → finishes at hour 4 + 2 = <b>6 hours</b> total."
      ],
      trap: "Don't add all durations (4+3+2=9). Parallel work overlaps. The critical path is A (longest parallel task, 4 h) + C (2 h) = 6 h."
    },
    q31: {
      steps: [
        "15 minutes is one-quarter of an hour.",
        "Production in 15 min = 240 ÷ 4 = <b>60 bottles</b>."
      ]
    },
    q32: {
      steps: [
        "Ratio cement : sand = 1 : 3, so sand = 3 × cement.",
        "Sand = 3 × 5 kg = <b>15 kg</b>."
      ]
    },
    q33: {
      steps: [
        "5x − 7 = 33. Add 7 to both sides: 5x = <b>40</b>.",
        "Divide both sides by 5: x = <b>8</b>."
      ]
    },
    q34: {
      steps: [
        "Fuel economy = 150 ÷ 10 = <b>15 km per litre</b>.",
        "Distance on 4 litres = 15 × 4 = <b>60 km</b>."
      ]
    },
    q35: {
      steps: [
        "Net fill rate = inflow − drain = 8 − 5 = <b>3 litres per minute</b>.",
        "Time to fill 600 litres = 600 ÷ 3 = <b>200 minutes</b>."
      ],
      trap: "Both pipes are running simultaneously — subtract the drain rate from the inflow rate to get the net rate before dividing."
    },
    q36: {
      steps: [
        "Both dimensions double, so area scales by 2 × 2 = <b>4</b>.",
        "Weight ∝ area (same material, same thickness) → new weight = 6 × 4 = <b>24 kg</b>."
      ],
      trap: "Doubling one dimension doubles the area; doubling both dimensions quadruples it."
    },
    q37: {
      steps: [
        "Gear speed is <i>inversely</i> proportional to number of teeth.",
        "Speed ratio = teeth of driver ÷ teeth of driven = 12 ÷ 36 = 1/3.",
        "Large gear speed = 300 × (1/3) = <b>100 rpm</b>."
      ],
      trap: "More teeth on the driven gear means it turns slower, not faster. The relationship is inverse."
    },
    q38: {
      steps: [
        "Efficiency = useful output ÷ total input. 80% efficiency means 80% of input power becomes useful output.",
        "Useful power = 1,000 × 0.80 = <b>800 W</b>."
      ],
      trap: "The remaining 20% (200 W) is lost as heat, not delivered mechanically."
    },
    q39: {
      steps: [
        "Overrun = actual − estimate = 50,000 − 40,000 = <b>₹10,000</b>.",
        "Percentage overrun = (overrun ÷ estimate) × 100 = (10,000 ÷ 40,000) × 100 = <b>25%</b>."
      ],
      trap: "The base for percentage change is the <i>original estimate</i>, not the actual cost."
    },
    q40: {
      steps: [
        "Multiply the growth factors: 1.10 × 1.20 = <b>1.32</b>.",
        "Total percentage increase = (1.32 − 1) × 100 = <b>32%</b>."
      ],
      trap: "10% + 20% = 30% only if they apply to the same base. The second 20% applies to the already-increased value, giving 32% overall."
    },
    q41: {
      steps: [
        "2% of 4.0 m = 0.02 × 4.0 = <b>0.08 m</b>.",
        "Maximum possible length = 4.0 + 0.08 = <b>4.08 m</b>."
      ]
    },
    q42: {
      steps: [
        "Each resistor carries 2 amps. In this parallel-style configuration, currents add.",
        "4 resistors × 2 A each = <b>8 amps</b> total."
      ]
    },
    q43: {
      steps: [
        "Pipe A fills at rate 1/3 tank per hour. Drain B empties at rate 1/5 tank per hour.",
        "Net fill rate = 1/3 − 1/5 = 5/15 − 3/15 = <b>2/15</b> tank per hour.",
        "Time to fill = 1 ÷ (2/15) = 15/2 = <b>7.5 hours</b>."
      ],
      trap: "The drain works against the fill. Subtract the drain rate from the fill rate before dividing."
    },
    q44: {
      steps: [
        "Volume of a sphere ∝ r³. If radius doubles: new volume ∝ (2r)³ = 8r³.",
        "Volume increases by a factor of <b>8</b>."
      ],
      trap: "Doubling a linear dimension doubles it once. Volume uses that dimension three times (×2 × ×2 × ×2 = ×8), not twice (×4)."
    },
    q45: {
      steps: [
        "Newton's First Law: constant velocity means <b>zero net force</b>.",
        "The only horizontal forces are your push (forward) and friction (backward).",
        "Constant speed → push exactly equals friction. They balance."
      ],
      trap: "A moving object at constant speed does not need a net forward force — only enough push to cancel friction."
    },
    q46: {
      steps: [
        "Pressure = Force ÷ Area.",
        "A sharp edge has a tiny contact area. Same force ÷ tiny area = <b>very high pressure</b>.",
        "Higher pressure cuts more effectively into the material."
      ]
    },
    q47: {
      steps: [
        "On a flat road, gravity has no component in the direction of motion.",
        "The forces opposing motion are rolling resistance (tyre and road friction) and <b>air resistance (drag)</b>.",
        "These remove kinetic energy until the cyclist stops."
      ]
    },
    q48: {
      steps: [
        "Principle: Torque = Weight × distance from pivot. For balance, torques must be equal.",
        "Heavy child closer to pivot: large weight × small distance = torque T.",
        "Light child farther from pivot: small weight × large distance = same torque T. They balance."
      ]
    },
    q49: {
      steps: [
        "Braking distance ∝ v² (from kinetic energy = ½mv²).",
        "Speed doubles from 30 to 60 km/h → braking distance scales by 2² = <b>4</b>.",
        "Braking distance is approximately <b>four times longer</b>."
      ],
      trap: "Twice the speed does not mean twice the distance — the square relationship makes it four times, which is why high-speed crashes are so much more severe."
    },
    q50: {
      steps: [
        "Heating air causes it to expand. The same mass now occupies more volume → <b>lower density</b>.",
        "The balloon's average density (hot air + envelope) becomes less than the surrounding cooler, denser air.",
        "Buoyancy force (upward) exceeds weight → balloon rises."
      ],
      trap: "The flame doesn't push the balloon — it heats the air inside, changing its density. Buoyancy does the lifting."
    },
    q51: {
      steps: [
        "Pressure = Force ÷ Area. Same person (same weight) standing on two differently shaped soles.",
        "Wide boot → large area → lower pressure on snow → snow doesn't compress as much.",
        "Narrow heel → small area → high pressure → sinks into soft snow."
      ]
    },
    q52: {
      steps: [
        "Metals expand when heated and contract when cooled (<b>thermal expansion</b>).",
        "Without gaps, a bridge expanding on a hot day has nowhere to go — it buckles or cracks.",
        "Expansion joints provide room for this movement, preventing structural damage."
      ]
    },
    q53: {
      steps: [
        "Principle: conservation of <b>angular momentum</b> (L = I × ω). L is conserved when no external torque acts.",
        "Pulling arms in reduces the skater's moment of inertia (I) — mass moves closer to the spin axis.",
        "To keep L constant, angular velocity ω must increase → the skater spins faster."
      ],
      trap: "No external energy is added. The faster spin comes from reduced rotational resistance, not from muscle power injecting energy into the spin."
    },
    q54: {
      steps: [
        "Gravitational PE = mass × g × height = m × g × h.",
        "PE = 2 kg × 10 m/s² × 3 m = <b>60 joules</b>."
      ]
    },
    q55: {
      steps: [
        "The ramp is a <b>simple machine</b>. Work done = Force × distance.",
        "The total work to raise the load (mgh) is fixed. A ramp spreads that work over a longer distance.",
        "Longer distance → smaller force needed. The ramp trades distance for force."
      ],
      trap: "A ramp doesn't reduce the total work — it reduces the <i>force</i> required at the cost of a longer travel distance."
    },
    q56: {
      steps: [
        "Newton's Third Law: for every action force there is an equal and opposite reaction force.",
        "The swimmer's hands push water backward (action). The water pushes the swimmer forward (reaction).",
        "This reaction force propels the swimmer through the water."
      ]
    },
    q57: {
      steps: [
        "Principle: horizontal and vertical motions are <b>independent</b> under gravity.",
        "Both bullets start at the same height with zero vertical velocity.",
        "Both experience the same downward gravitational acceleration, so both fall the same vertical distance in the same time.",
        "They hit the ground <b>simultaneously</b>."
      ],
      trap: "The fired bullet moves horizontally very fast, but gravity pulls it down at exactly the same rate as the dropped bullet. Horizontal speed doesn't affect vertical fall."
    },
    q58: {
      steps: [
        "The bottle is <b>sealed</b>: no mass enters or leaves.",
        "The total mass of the system (water + boat + bottle) does not change regardless of whether the boat floats or sinks.",
        "Weight = mass × g. Since mass is unchanged, weight is unchanged."
      ],
      trap: "Sinking the boat changes the distribution of mass (and the water level inside) but not the total mass. The scale reads the same."
    },
    q59: {
      steps: [
        "A cube has 8 vertices, 6 faces, and <b>12 edges</b>.",
        "Count by type: 4 edges on the top face + 4 edges on the bottom face + 4 vertical edges connecting them = 12."
      ]
    },
    q60: {
      steps: [
        "Looking straight down at a cylinder, you see the circular top face.",
        "The top-down view of any cylinder (or glass) is a <b>circle</b>."
      ]
    },
    q61: {
      steps: [
        "The original cube has 6 painted outer faces. Cutting it in half creates <b>one new flat face</b> on each half.",
        "That new cut face was interior — it was never painted.",
        "Each half has 5 painted faces (the outer ones) and <b>1 unpainted face</b> (the cut)."
      ]
    },
    q62: {
      steps: [
        "The triangle has its apex at the top. Rotating 180° turns it upside-down.",
        "The apex, previously pointing up, now points <b>down</b>."
      ]
    },
    q63: {
      steps: [
        "A 3×3×3 cube has 27 small cubes. All cubes on the outer shell touch at least one outer face.",
        "Only the <b>very centre cube</b> is surrounded on all 6 sides by other cubes — it touches no outer surface.",
        "That's <b>1</b> hidden cube."
      ],
      trap: "It's tempting to guess more. But in a 3×3×3, only one position (the exact centre) has no outer face at all."
    },
    q64: {
      steps: [
        "Small cubes at the <b>corners</b> of the big cube have 3 painted faces (one from each of three intersecting outer faces).",
        "A cube has 8 corners → <b>8 small cubes</b> with exactly 3 painted faces."
      ]
    },
    q65: {
      steps: [
        "A straight drill bit is circular in cross-section and moves in a straight line through the ball.",
        "The channel it removes has a circular cross-section and a straight axis — that is the definition of a <b>cylinder</b>."
      ]
    },
    q66: {
      steps: [
        "The letter 'b' has a vertical stroke on the left and a bump on the right facing right.",
        "Rotating 180°: the top becomes the bottom, the left side goes to the right. The bump now faces <b>left</b> from the <b>bottom</b>.",
        "That matches the letter <b>'q'</b>."
      ],
      trap: "'d' is a mirror of 'b'; 'p' is b upside-down; 'q' is b rotated 180°. Rotation and reflection are different operations."
    },
    q67: {
      steps: [
        "A vertical mirror reflects left ↔ right. The 3 is on the right side of a clock face.",
        "After reflection, the right side maps to the left. The hand (and the 3) appear on the <b>left</b>, which is where the 9 normally is.",
        "The reflected clock shows <b>9 o'clock</b>."
      ]
    },
    q68: {
      steps: [
        "First fold (in half): 2 layers. Second fold (in half the other way): 4 layers.",
        "Punching through 4 layers creates 4 holes. When unfolded, you see <b>4 holes</b>."
      ],
      trap: "Each fold doubles the number of layers. Two folds = 2² = 4 layers = 4 holes."
    },
    q69: {
      steps: [
        "Turning a glove inside-out is a <b>reflection</b> of the shape through its surface.",
        "A reflection changes the handedness of any chiral object.",
        "A right-handed glove turned inside-out becomes a <b>left-handed</b> glove."
      ],
      trap: "This is counter-intuitive but true. Think of it this way: the thumb and fingers keep the same relative positions but the 'inside' is now outside — mirroring the hand."
    },
    q70: {
      steps: [
        "Small cubes with exactly <b>one</b> painted face sit in the centre of each face of the big cube (not at corners or edges).",
        "Each of the 6 faces has exactly 1 such face-centre cube.",
        "Total: <b>6 small cubes</b> with exactly one painted face."
      ],
      trap: "Corner cubes have 3 painted faces; edge (non-corner) cubes have 2; face-centre cubes have 1. Don't mix these up."
    },
    q71: {
      steps: [
        "Start: facing <b>North</b>.",
        "Turn 90° right → facing <b>East</b>.",
        "Turn 180° → facing <b>West</b>.",
        "Turn 90° right → facing <b>North</b>."
      ],
      trap: "Apply each turn sequentially from your current facing, not from the original. Turning right from West gives North."
    },
    q72: {
      steps: [
        "Count the squares: 4 in a vertical strip + 1 to the left of the 2nd square + 1 to the right of the 2nd square = <b>6 squares</b>.",
        "6 squares is exactly the number of faces on a cube. This cross-with-side-flaps arrangement is a recognised valid net.",
        "When folded, every face of the cube is covered with no overlaps → it forms a <b>closed cube</b>."
      ]
    },
    q73: {
      steps: [
        "In a <b>series circuit</b>, all current must pass through every component in sequence.",
        "One broken bulb creates an open gap — current cannot flow anywhere in the loop.",
        "<b>All bulbs go dark</b>."
      ],
      trap: "Modern lights are wired in parallel (each bulb has its own path), so one failure doesn't kill the rest. But the question specifies the old series wiring."
    },
    q74: {
      steps: [
        "The driver presses the brake pedal (input). The brakes slow the car (process). The brake lights illuminate (output/signal).",
        "The lights don't control anything — they <b>report</b> that the brakes are being used, signalling to drivers behind."
      ]
    },
    q75: {
      steps: [
        "The generator only activates when the main supply fails — it is on standby.",
        "Its purpose is to <b>provide continuity</b> of power during main-supply failure.",
        "This is <b>redundancy</b>: a backup that takes over when the primary fails."
      ]
    },
    q76: {
      steps: [
        "Excess current heats wires, risking fire. The fuse melts when current exceeds the safe limit, <b>breaking the circuit</b>.",
        "It sacrifices itself to protect the rest of the circuit.",
        "Role: a <b>sacrificial safety device</b> that prevents overheating and fire."
      ]
    },
    q77: {
      steps: [
        "The two servers share the visitor load. If one goes down, the load balancer redirects all traffic to the surviving server.",
        "The website remains <b>online</b>, but the single remaining server now handles 100% of traffic with 50% less spare capacity."
      ],
      trap: "Full redundancy (N+1) keeps the service running. The loss of one server doesn't cause an outage — just reduced headroom."
    },
    q78: {
      steps: [
        "Hotter room → heater works harder → room gets even hotter → heater works even harder…",
        "This is <b>positive feedback</b>: the response amplifies the original change.",
        "Left alone, the system runs away — temperature climbs without limit until something physical stops it."
      ],
      trap: "Positive feedback doesn't mean 'good'. It means the feedback reinforces (amplifies) the deviation rather than correcting it."
    },
    q79: {
      steps: [
        "Two pumps in parallel each handle half the load and together meet demand.",
        "One pump fails → only half the normal flow is available.",
        "The system can supply only about <b>half the demand</b> — it falls behind, pressure drops, or queues grow."
      ]
    },
    q80: {
      steps: [
        "Before the change, Stage B was a bottleneck. Speeding it up removes that bottleneck.",
        "Now A or C (whichever is slowest) becomes the new bottleneck.",
        "Output is still capped — just by a different stage. <b>The bottleneck shifted.</b>"
      ],
      trap: "Fixing one bottleneck never magically fixes all bottlenecks. It just reveals the next constraint in the chain."
    },
    q81: {
      steps: [
        "The slow machine at the start caps how many parts enter the middle of the line.",
        "Even if the middle machine processes 10× faster, it can only work on parts that arrive — and the slow start machine limits that rate.",
        "Output stays the same: <b>a system's throughput is limited by its slowest stage</b> (Theory of Constraints)."
      ]
    },
    q82: {
      steps: [
        "If the single payment service fails, the entire checkout function fails with it.",
        "No alternative path exists — there's only one payment service.",
        "This is a <b>single point of failure</b>: one component whose failure brings down a larger system."
      ]
    },
    q83: {
      steps: [
        "Customer wait time barely improved even after speeding up one step by 50%.",
        "The most likely explanation: the step that was improved was <b>not the bottleneck</b>.",
        "The bottleneck is in one of the other four steps — speeding up a non-bottleneck step doesn't reduce the overall wait."
      ]
    },
    q84: {
      steps: [
        "A spam filter classifies messages as spam or not-spam. Two types of error exist: miss real spam, or block real email.",
        "Tuning the filter to block more aggressively reduces missed spam (false negatives) but blocks more real email (false positives).",
        "This is a classic <b>precision vs. recall trade-off</b> — reducing one error type increases the other."
      ]
    },
    q85: {
      steps: [
        "Free unlimited parking reduces the cost of driving downtown → more people choose to drive → more cars → more congestion.",
        "The policy that was meant to help shoppers made the problem it was trying to ease (congestion) worse.",
        "This is <b>unintended consequences</b> / <b>induced demand</b>: the intervention changed behaviour in a way that cancelled its intended benefit."
      ]
    },
    q86: {
      steps: [
        "The wiring fault caused the oil warning light to stay on permanently — even when oil was fine.",
        "Drivers learned to ignore it because it was always on and 'crying wolf'.",
        "Now when oil genuinely is low, the light still comes on — but drivers ignore it. A <b>false alarm erodes trust in the safety signal</b>.",
        "This is the <b>alarm fatigue</b> failure: signal noise trains people to stop responding to real warnings."
      ]
    },
    q87: {
      steps: [
        "Shop A: 6 m × ₹50/m = <b>₹300</b> for exactly 6 m.",
        "Shop B: cheapest option is 1 roll = 10 m for <b>₹400</b> (can't buy less than a roll).",
        "Shop A is cheaper: <b>₹300</b>."
      ],
      trap: "Shop B's per-metre price is ₹40/m (better than ₹50) but you must buy 10 m even if you need only 6 — forced extra purchase makes it more expensive overall."
    },
    q88: {
      steps: [
        "Train: 25 minutes. Drive: 40 minutes. Only travel time matters and both cost the same.",
        "25 < 40 → <b>take the train</b> to save 15 minutes."
      ]
    },
    q89: {
      steps: [
        "You need at least 20 litres; tins are 5 litres each.",
        "20 ÷ 5 = <b>4 tins</b> exactly. That meets the requirement without excess."
      ]
    },
    q90: {
      steps: [
        "Both bulbs give the same brightness (same output). Bulb A draws 60 W; Bulb B draws 10 W.",
        "To achieve the same result using less electricity, choose <b>Bulb B</b>."
      ]
    },
    q91: {
      steps: [
        "Departure 3:00 pm. Route P: +2 h → 5:00 pm ✓. Route Q: +1.5 h → 4:30 pm ✓. Route R: +2.5 h → 5:30 pm ✗.",
        "Routes P and Q arrive on time. Route R arrives 30 minutes late."
      ]
    },
    q92: {
      steps: [
        "Each trip carries 5,000 litres. You need 23,000 litres.",
        "23,000 ÷ 5,000 = 4.6 trips. Since you can't do 0.6 of a trip, round up: <b>5 trips</b>."
      ],
      trap: "4 trips deliver only 20,000 litres — not enough. Always round up when you need to meet or exceed a target in whole units."
    },
    q93: {
      steps: [
        "Option 1: buy 2 packs (20 widgets, ₹160) + 5 singles (₹45) = <b>₹205</b> for 25 widgets.",
        "Option 2: buy 3 packs (30 widgets, ₹240) — more than needed and more expensive.",
        "Option 3: buy 25 singles (₹225) — more than the mixed approach.",
        "Cheapest: 2 packs + 5 singles = <b>₹205</b>."
      ]
    },
    q94: {
      steps: [
        "Minimum lifetime required: 1,000 hours. Option 2 lasts only 800 hours — <b>disqualified</b>.",
        "Remaining valid options: Option 1 (1,200 h, ₹500), Option 3 (1,000 h, ₹450).",
        "Option 3 meets the requirement at the <b>lower cost of ₹450</b>."
      ],
      trap: "Option 2 looks attractive at ₹300 but it fails the requirement. Always eliminate disqualified options before comparing prices."
    },
    q95: {
      steps: [
        "Small generator: 4 hours per litre → 12 h job uses 12 ÷ 4 = <b>3 litres</b>.",
        "Large generator: 6 hours per litre → 12 h job uses 12 ÷ 6 = <b>2 litres</b>.",
        "Large generator is more fuel-efficient and uses <b>2 litres</b>."
      ]
    },
    q96: {
      steps: [
        "Maximum steps per move = 2. To climb 5 steps in fewest moves: take two 2-step moves (4 steps) + one 1-step move = <b>3 moves</b>.",
        "Can you do it in 2 moves? 2 + 2 = 4 steps — one short of 5. No. So 3 is the minimum."
      ]
    },
    q97: {
      steps: [
        "Box capacity = 12 kg. Total weight = 5+5+4+4 = 18 kg — won't fit in one box.",
        "Try pairs: 5+5 = 10 kg ≤ 12 ✓ (Box 1). 4+4 = 8 kg ≤ 12 ✓ (Box 2).",
        "All items fit in <b>2 boxes</b>."
      ],
      trap: "Check whether pairs fit before assuming you need more boxes. Optimal packing matters."
    },
    q98: {
      steps: [
        "The job requirement is 'acceptable cover'. One coat achieves that in <b>2 hours</b>.",
        "A second coat adds time and cost but exceeds the stated requirement.",
        "Time-optimal choice: <b>one coat</b> — do just enough to meet the requirement."
      ],
      trap: "Engineers optimise for the stated constraint, not for theoretical perfection. 'Slightly better' is irrelevant when the requirement is already met."
    },
    q99: {
      steps: [
        "Shortest-Job-First (SJF) minimises average completion time.",
        "Order: 1 min, 2 min, 4 min, 8 min.",
        "Completion times: 1, 3, 7, 15 minutes. Average = (1+3+7+15) ÷ 4 = 26 ÷ 4 = <b>6.5 minutes</b>.",
        "Any other order gives a higher average finish time (e.g., longest-first: 8,12,14,15 → avg 12.25)."
      ],
      trap: "Longest-first feels logical ('tackle the big job early') but every short job that waits behind a long one pays that full waiting cost. Short first reduces cumulative waiting."
    },
    q100: {
      steps: [
        "For a rectangular box of fixed volume, surface area is minimised when the box is as close to a <b>cube</b> as possible.",
        "A tall narrow box has a large surface-area-to-volume ratio. A flat tray is even worse.",
        "The cube-like shape minimises material (surface area) for a given enclosed volume."
      ],
      trap: "Tall may feel 'efficient' visually, but mathematically the cube wins. The same principle underlies why bubbles are spherical and why animals in cold climates tend to be rounder."
    }
  }
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
