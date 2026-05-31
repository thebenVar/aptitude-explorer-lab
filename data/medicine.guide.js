// Study guide explanations for the Medicine assessment.
window.GUIDE = {
  strategies: {
    bio: "Trace the <b>chain of cause and effect</b> step by step. Ask: what does this part of the body <i>do</i>? If it does less (or more) of that, what downstream effect follows? Think in analogies — pipes, pumps, filters, thermostats — and follow the logic to its natural conclusion.",
    systematic: "Protocols exist because <b>order matters</b>. Before picking an answer, ask: why was each step placed where it is? What goes wrong if it moves? When in doubt, the safe answer is to <b>stop and verify</b> with someone more senior rather than guess or improvise.",
    numerical: "Turn the words into a clear equation before touching any numbers. Identify the <b>whole</b>, the <b>part</b>, and the <b>operation</b> (rate = total ÷ time; volume = dose ÷ concentration; % change = change ÷ original × 100). Show each step and check your units at every stage.",
    observation: "Read <b>all the data first</b> before looking at the options. For charts, note the axis labels and scale. For paired texts, compare feature by feature. Your job is to report only what the data actually shows — not what sounds plausible.",
    ethics: "Name the ethical principle at stake first (<b>consent, patient autonomy, confidentiality, safeguarding, honesty, fairness</b>), then apply it. When two principles conflict (e.g. privacy vs. safety), ask which harm is greater and which principle medical practice treats as primary."
  },
  questions: {
    "q1": {
      "steps": [
        "The analogy: a narrower pipe resists flow — the fluid must be forced through a smaller gap.",
        "Think of squeezing a garden hose to make the same amount of water exit at the same speed: you need to squeeze harder.",
        "Narrowing a blood vessel to half its width dramatically increases resistance, so <b>more pressure is required</b> to maintain the same flow rate.",
        "This is why high blood pressure often accompanies narrowed arteries."
      ],
      "trap": "Options A and B suggest narrowing is neutral or helpful. In reality, resistance increases sharply — even a small narrowing has a large effect on pressure required."
    },
    "q2": {
      "steps": [
        "Red blood cells are the oxygen carriers. Fewer red cells = less oxygen delivered per unit of blood.",
        "Muscles starved of oxygen fatigue faster — they can't sustain effort.",
        "The body detects low oxygen and signals the lungs and heart to work harder — breathing rate rises to pull in more oxygen.",
        "The correct chain is: <b>fewer red cells → less O₂ to muscles → faster fatigue → higher breathing rate</b>."
      ],
      "trap": "Option C says the lungs can 'produce' more oxygen — lungs extract oxygen from air, they don't manufacture it. Option D is backwards: the heart works harder, not slower."
    },
    "q3": {
      "steps": [
        "The biological principle: sweating is the body's <b>cooling</b> mechanism, not a heat-generator.",
        "When you sweat, water appears on your skin surface. As it evaporates it carries heat energy away from your body — like how a wet cloth cools your forehead.",
        "So sweating means the body is <b>losing</b> heat, not generating it.",
        "The correct answer is: <b>No — sweating is a cooling mechanism</b>."
      ],
      "trap": "This question is marked TRICKY because the friend's statement sounds plausible (you sweat during hot activity). The key is the direction: sweat removes heat from the body."
    },
    "q4": {
      "steps": [
        "The thermostat analogy: when blood sugar rises above the set point, a 'switch off' signal normally reduces it.",
        "If the 'switch off' signal fails, nothing stops blood sugar from continuing to climb.",
        "Following the logic: without any brake on the system, <b>blood sugar levels rise unchecked</b>.",
        "This mirrors what happens in uncontrolled diabetes — the feedback loop is broken."
      ],
      "trap": "Option C invents a backup system — the question explicitly says the signal fails, with no mention of any backup. Option D (rapid fall) is the opposite of what happens when a rising signal's brake is removed."
    },
    "q5": {
      "steps": [
        "The kidneys' function: continuously filter blood and expel waste as urine.",
        "If both stop working, nothing takes over that filtration role — the liver performs different functions.",
        "Waste products (urea, creatinine, etc.) that would normally be expelled instead <b>accumulate in the blood</b>.",
        "Over time this leads to serious illness — a condition called uraemia."
      ],
      "trap": "Option A (liver takes over) is a common misconception. The liver processes nutrients and toxins but cannot replace kidney filtration. Option D (skin filtration) is not a real physiological mechanism."
    },
    "q6": {
      "steps": [
        "When antibiotics are taken, they kill bacteria — but the first to die are often the most susceptible.",
        "The bacteria still alive on day 4 may be the <b>hardiest, most resistant</b> ones.",
        "If you stop early, those survivors can multiply — and their offspring inherit the resistance.",
        "The most important risk is therefore: <b>surviving bacteria could become harder to treat in future</b>."
      ],
      "trap": "Option A (safe to stop if symptoms gone) is a very common real-world mistake. Feeling better does not mean all bacteria are dead — sub-therapeutic antibiotic levels actively encourage resistance."
    },
    "q7": {
      "steps": [
        "The protocol places cleaning (step 3) <b>before</b> needle insertion (step 4) for a specific reason: to sterilise the skin at the puncture site before it is broken.",
        "Once the needle is inserted, the skin is already punctured — cleaning around it cannot sterilise a wound that already exists.",
        "Cleaning after insertion therefore <b>fails its purpose</b> and exposes the patient to unnecessary infection risk.",
        "The original order is correct: prepare a sterile site, then break the skin barrier."
      ],
      "trap": "Option A ('order makes no difference') ignores the reason for the step. Option C about blood flow is a distractor — swabs don't block blood flow."
    },
    "q8": {
      "steps": [
        "Hand-washing logic: scrubbing loosens bacteria and dead skin cells into the soap lather.",
        "Rinsing (step 4) is what physically removes that contaminated lather from the hands.",
        "Skipping the rinse means <b>soap and loosened bacteria remain on the hands</b>.",
        "Drying then transfers that residue to the towel and potentially back — so the hands are no cleaner than before scrubbing."
      ],
      "trap": "Option A ('drying removes soap') is wrong — drying a soapy hand just spreads the soap. Option D ('only matters for food') underestimates infection risk in all clinical contacts."
    },
    "q9": {
      "steps": [
        "When you add a large volume of water to a small volume of concentrated liquid (sequence B), you can get rapid heat release or vigorous splashing — a safety hazard.",
        "The safe rule is <b>always add concentrate to water</b> (sequence A) — the concentrate disperses into a large, cool volume, controlling the reaction.",
        "This is the standard lab and pharmacy safety rule: 'Do as you oughter — add acid to water.'"
      ],
      "trap": "Option B ('either order works') ignores the real physical hazard of adding water to concentrate."
    },
    "q10": {
      "steps": [
        "The protocol steps are: clean → rinse → dry → sterilise → use.",
        "The worker has completed cleaning, rinsing, and drying — the next step is <b>sterilisation</b>.",
        "Cleaning removes visible debris; sterilisation (heat/chemical/UV) kills the pathogens that cleaning cannot.",
        "Using the instruments after only drying would risk transmitting infectious agents to the next patient."
      ],
      "trap": "Option A (use immediately after drying) confuses cleaning with sterilisation. Cleaning is necessary but not sufficient — it does not kill all pathogens."
    },
    "q11": {
      "steps": [
        "Drug A requires food to be present (e.g. for absorption or to protect the stomach); drug B requires an empty stomach (food may block absorption or cause interaction).",
        "Taking both on an empty stomach satisfies the condition for drug B but violates it for drug A.",
        "Drug A may cause stomach irritation or be absorbed incorrectly; drug B may work as intended.",
        "The likely consequence: <b>one drug works correctly, the other is compromised</b>."
      ],
      "trap": "Option A ('body sorts it out automatically') is the wishful thinking answer. Pharmacokinetics are fixed by chemistry, not by convenience."
    },
    "q12": {
      "steps": [
        "A discrepancy between a chart dose (500 mg) and the standard dose (250 mg) is a potential prescribing or transcription error.",
        "The safe systematic action is always: <b>stop, do not give the medication, and verify with a senior clinician</b>.",
        "Option A (give 500 mg without checking) risks a harmful overdose. Option B (give 250 mg without checking) risks an under-dose if the higher dose was intentional.",
        "Option D (average to 375 mg) is never a valid clinical approach."
      ],
      "trap": "This is the classic 'stop and verify' scenario. The busy ward is a deliberate distractor — time pressure is never an excuse to skip a safety check for a dangerous discrepancy."
    },
    "q13": {
      "steps": [
        "Find the concentration: 200 mg per 5 ml = <b>40 mg per ml</b>.",
        "Volume needed = dose ÷ concentration = 600 mg ÷ 40 mg/ml = <b>15 ml</b>.",
        "Check: 15 ml × 40 mg/ml = 600 mg ✓"
      ],
      "trap": "Don't just divide 600 by 200 and get 3 — that gives the number of '5 ml lots', which you'd then multiply by 5 to get 15. Either method works, but track units carefully."
    },
    "q14": {
      "steps": [
        "Step 1 — occupied beds: 40 × 75% = 40 × 0.75 = <b>30 beds occupied</b>.",
        "Step 2 — long-stay patients: 30 × 20% = 30 × 0.20 = <b>6 patients</b>.",
        "Answer: <b>6</b>."
      ],
      "trap": "This is a percentage of a percentage. Don't take 20% of 40 (=8) — you must first find the occupied beds (30), then take 20% of that."
    },
    "q15": {
      "steps": [
        "Rate of delivery = 80 ml per hour.",
        "Time = volume ÷ rate = 500 ml ÷ 80 ml/h = <b>6.25 hours</b>.",
        "0.25 hours = 0.25 × 60 = <b>15 minutes</b>.",
        "Total: <b>6 hours and 15 minutes</b>."
      ],
      "trap": "Don't round 500 ÷ 80 to 6 — the 0.25 remainder is 15 minutes, making a real difference to when the bag runs out."
    },
    "q16": {
      "steps": [
        "Scan all eight readings: Day 1 — 37.2, 37.8, 38.4, 38.1; Day 2 — 37.5, 37.3, 37.1, 36.9.",
        "Highest: <b>38.4 °C</b> (Day 1, 4 pm).",
        "Lowest: <b>36.9 °C</b> (Day 2, 8 pm).",
        "Difference: 38.4 − 36.9 = <b>1.5 °C</b>."
      ],
      "trap": "Read every value before picking the highest and lowest — the extreme values are on different days and easy to miss."
    },
    "q17": {
      "steps": [
        "Step 1 — total dose needed: 20 kg × 10 mg/kg = <b>200 mg</b>.",
        "Step 2 — concentration of syrup: 50 mg per 5 ml = <b>10 mg per ml</b>.",
        "Step 3 — volume: 200 mg ÷ 10 mg/ml = <b>20 ml</b>.",
        "Check: 20 ml × 10 mg/ml = 200 mg ✓"
      ],
      "trap": "A two-step calculation: first find the dose from weight, then find the volume from concentration. Skipping step 1 and dividing 200 by 50 gives 4 (wrong) — you must use the per-ml concentration."
    },
    "q18": {
      "steps": [
        "Increase = 150 − 120 = <b>30 patients</b>.",
        "Percentage increase = (increase ÷ original) × 100 = (30 ÷ 120) × 100 = <b>25%</b>."
      ],
      "trap": "A common error: 30/150 × 100 = 20% (using the new value as the base). Percentage change always divides by the <b>original (starting)</b> value, not the final one."
    },
    "q19": {
      "steps": [
        "Compare Note A and Note B feature by feature.",
        "Redness: A says 'no redness'; B says 'slight redness at wound edges' — <b>difference 1</b>.",
        "Fluid colour: A says 'clear fluid'; B says 'yellow discharge' — <b>difference 2</b>.",
        "Fluid amount: A says 'small amount'; B says 'moderate' — <b>difference 3</b>.",
        "Dressing state: A says 'dry and intact'; B says 'partially saturated' — <b>difference 4</b>.",
        "Total: <b>four observable differences</b>."
      ],
      "trap": "Options A, B, and C all under-count. You must compare every described feature systematically — it's easy to miss the fluid amount (small vs. moderate) as a separate change from fluid colour."
    },
    "q20": {
      "steps": [
        "Read each bar: Mon 1800, Tue 1750, Wed 1820, Thu <b>950</b>, Fri 1790, Sat 1810 ml.",
        "Five days cluster tightly around 1750–1820 ml; Thursday at 950 ml is far below the rest.",
        "Thursday is the anomaly."
      ],
      "trap": "All other days are within ~70 ml of each other. Thursday is ~800 ml below the cluster — a clear outlier, not natural variation."
    },
    "q21": {
      "steps": [
        "List the eight pain scores: 8, 7, 6, 6, 5, 4, 4, 3.",
        "Overall the scores decrease from 8 to 3 — a downward trend.",
        "But days 3–4 both show 6 (level period), and days 6–7 both show 4 (level period) before dropping again.",
        "Best description: <b>decreases overall, with two level periods before dropping further</b>."
      ],
      "trap": "Option B ('fluctuates randomly') is wrong — there is a clear downward direction. Option D ('spikes back') is wrong — the score never returns to its starting level."
    },
    "q22": {
      "steps": [
        "Results: 4.2, 4.1, 4.3, 4.2, 7.8.",
        "Four results cluster between 4.1 and 4.3; the fifth is 7.8 — almost double the others.",
        "In a lab context such an extreme outlier is very likely a measurement or transcription error.",
        "The correct action: <b>flag 7.8 as a likely outlier and re-check that sample</b> before reporting."
      ],
      "trap": "Option A (record and move on) ignores the duty of quality control. Option D (average everything) hides the error rather than addressing it."
    },
    "q23": {
      "steps": [
        "Compare every field on both labels side by side.",
        "Drug name: 'Amoxicillin' — same. Strength: '250 mg' — same. Instructions: 'one THREE times daily' — same.",
        "Quantity: Bottle 1 has '21 capsules'; Bottle 2 has '28 capsules' — <b>different</b>.",
        "The only difference is <b>the quantity of capsules</b>."
      ]
    },
    "q24": {
      "steps": [
        "Read the weekly step counts: 2000, 3500, 5000, 6500, 8000, 8100, 8050, 8000.",
        "Weeks 1–5: steady rise (+1500 each week approximately).",
        "Weeks 5–8: 8000 → 8100 → 8050 → 8000 — essentially flat (a plateau).",
        "Best description: <b>rapid early improvement that levelled off around weeks 5–8</b>."
      ],
      "trap": "Option A ('increased steadily throughout all eight weeks') ignores the plateau. Option C ('decreased in the second half') overstates a tiny fluctuation — the values are effectively constant."
    },
    "q25": {
      "steps": [
        "Ethical principle: <b>patient autonomy and informed consent</b>. A conscious, mentally capable adult has the legal and ethical right to refuse any treatment.",
        "The doctor's duty to preserve life does not override a competent patient's refusal.",
        "The principled action: <b>respect the refusal, ensure the patient understands the consequences, document the decision, and continue providing all other care</b>.",
        "Administering treatment against an explicit refusal would constitute assault, regardless of the doctor's intentions."
      ],
      "trap": "Options A and C attempt to override the patient's will. Option D (family overrule) is also wrong — family members cannot override a competent adult's own decision."
    },
    "q26": {
      "steps": [
        "Two ethical principles are in tension: <b>confidentiality</b> (patient's privacy) vs. <b>safeguarding</b> (protecting a child from ongoing harm).",
        "In medicine and law, the duty to protect a child from serious ongoing harm overrides the general duty of confidentiality.",
        "The principled action: <b>explain this to the patient honestly, then report to the appropriate safeguarding authority</b>.",
        "Doing nothing (option D) or absolute secrecy (option A) leaves the child at continued risk."
      ],
      "trap": "The patient's plea for confidentiality feels compelling, but safeguarding is a legal duty that supersedes confidentiality when a minor is at risk of ongoing harm."
    },
    "q27": {
      "steps": [
        "Ethical principle: <b>fairness and impartiality in resource allocation</b>. Clinical decisions must be based on clinical criteria, not social status, connections, or pressure.",
        "Patient A's family connection and lobbying is irrelevant to clinical need.",
        "The principled action: <b>allocate the medicine purely on clinical criteria</b> (likelihood of benefit, waiting time, severity).",
        "Any other basis — social power, wealth, noise — is a form of discrimination."
      ],
      "trap": "Options A and B each privilege one patient for non-clinical reasons. Option D (coin flip) ignores available clinical information that should guide the decision."
    },
    "q28": {
      "steps": [
        "Ethical principle: <b>truth-telling and patient autonomy</b>. A patient who has mental capacity and asks a direct question about their own health has the right to a truthful answer.",
        "The adult children's preference, however well-intentioned, cannot override the patient's own right to know their diagnosis.",
        "The principled response: <b>tell the patient the truth, since they are directly asking and have capacity</b>.",
        "This also enables the patient to make informed decisions about their remaining time, treatment choices, and affairs."
      ],
      "trap": "This question is marked TRICKY because the family's protectiveness feels caring. But withholding a diagnosis from a capable, enquiring patient violates their autonomy and their ability to plan."
    },
    "q29": {
      "steps": [
        "Ethical principle: <b>duty of care and patient safety</b> take priority over collegial loyalty.",
        "An intoxicated colleague currently caring for patients poses an immediate risk to those patients.",
        "The principled action: <b>raise the concern immediately with a senior member of staff</b>.",
        "Waiting (option D) leaves patients at risk during the rest of the shift. Silence (option A) prioritises personal comfort over patient welfare."
      ],
      "trap": "The discomfort of 'reporting' a colleague is a deliberate distractor. Patient safety is a non-negotiable obligation that overrides social awkwardness."
    },
    "q30": {
      "steps": [
        "Ethical principle: <b>informed consent</b>. Every patient has the right to understand what will be done to their body and to agree or refuse — regardless of how routine the procedure seems.",
        "Time pressure is not a recognised exception to informed consent requirements.",
        "Skipping the explanation removes the patient's ability to exercise their right to refuse.",
        "The answer: <b>No — this approach is not acceptable</b>."
      ],
      "trap": "This is marked TRICKY because the clinician's reasoning ('routine and harmless') sounds practical. But 'routine' and 'harmless' are judgements the clinician makes — the patient deserves the chance to disagree."
    },
    "q31": {
      "steps": [
        "During a sprint, muscles consume oxygen much faster than at rest.",
        "The body detects rising CO₂ and falling oxygen, and responds by increasing breathing rate (to bring in more oxygen) and heart rate (to deliver it faster).",
        "Both systems speed up together to meet the extra demand.",
        "Correct response: <b>breathing and heart rate speed up</b>."
      ],
      "trap": "Option C (muscles switch off) is absurd — muscles keep working harder during a sprint. Option D (temperature drops) is the opposite of what happens during exercise."
    },
    "q32": {
      "steps": [
        "A scab is formed from dried blood, platelets, and fibrin — a natural biological seal over a wound.",
        "Its biological purpose: <b>prevent infection by sealing the wound</b> and provide a protective environment for new skin cells to grow underneath.",
        "When new skin is ready, the scab naturally falls away.",
        "Correct explanation: <b>a protective cover while new skin grows underneath</b>."
      ],
      "trap": "Option A (sign of infection) is wrong — a scab is a normal healing response, not evidence of infection. Infection would produce pus, redness, and heat."
    },
    "q33": {
      "steps": [
        "Water absorbed from the gut enters the bloodstream, increasing blood volume and diluting the blood.",
        "The kidneys constantly regulate blood composition by filtering out excess water.",
        "More water in the blood → kidneys excrete more water → <b>more urine produced</b>.",
        "This is exactly why drinking a lot makes you urinate frequently."
      ],
      "trap": "Option A (less urine, body holds all the water) is wrong — the kidneys actively remove excess water to maintain blood balance."
    },
    "q34": {
      "steps": [
        "The heart is a pump: cardiac output = stroke volume × heart rate.",
        "If stroke volume drops (weaker pump), cardiac output would fall — unless the heart beats faster.",
        "Beating faster means more pumping cycles per minute, compensating for the smaller volume per beat.",
        "Logical short-term compensation: <b>beat faster</b>."
      ],
      "trap": "Option B (beat far more slowly) would make cardiac output even worse — it doesn't compensate. Option C is not physiologically possible."
    },
    "q35": {
      "steps": [
        "The feedback principle: the body corrects temperature deviations by doing the <b>opposite</b> of the problem.",
        "When too hot: sweat + widen skin blood vessels → lose heat.",
        "When too cold: the body needs to conserve heat and generate more.",
        "Response: <b>shiver (generate heat) + narrow skin vessels (retain heat)</b>."
      ],
      "trap": "Option A applies the hot-weather response to a cold situation — a straightforward reversal error. The question asks you to apply the feedback logic in the opposite direction."
    },
    "q36": {
      "steps": [
        "During daylight, plants photosynthesise: they take in CO₂ and release oxygen.",
        "In <b>darkness</b>, photosynthesis stops. Plants only respire — taking in oxygen and releasing CO₂.",
        "In a sealed, unlit space, plants are net oxygen consumers, not producers.",
        "Result: oxygen level in the sealed cupboard <b>falls overnight</b>, making the air feel stuffy."
      ],
      "trap": "Many people only remember that plants 'produce oxygen' — but that only happens in light. In darkness the balance reverses."
    },
    "q37": {
      "steps": [
        "The drug works by occupying a receptor site (the 'lock').",
        "A new version that binds the <b>same</b> lock but more tightly and for longer will occupy it more persistently.",
        "The blocking effect — preventing whatever normally binds there — will therefore be <b>stronger and longer-lasting</b>.",
        "This is the principle behind developing longer-acting medications."
      ],
      "trap": "Option A (no effect, same lock) is wrong — binding affinity and duration directly determine how strongly a drug acts. Option C (unlocks everything else) invents a non-existent mechanism."
    },
    "q38": {
      "steps": [
        "Normal blood clotting: damaged vessels are sealed quickly by a clot, stopping blood loss.",
        "A drug that slows clotting means clots form more slowly and less firmly.",
        "Logical trade-off: <b>cuts and internal injuries bleed more and for longer</b> before clotting stops them.",
        "This is the real risk profile of anticoagulant medicines — used therapeutically but requiring careful monitoring."
      ],
      "trap": "Option C (blood stops flowing) is wrong — anticoagulants slow clot formation, they don't cause the blood itself to stop moving."
    },
    "q39": {
      "steps": [
        "The gut wall's role is to absorb digested nutrients into the blood.",
        "If that wall is severely damaged and absorption is blocked, nutrients pass through the gut without entering the bloodstream.",
        "Even if the person eats a normal diet, <b>the body cannot take in enough nutrients</b>.",
        "Over time this causes malnutrition despite adequate food intake."
      ],
      "trap": "Option D (blood nutrient levels rise sharply) is the opposite — with impaired absorption, levels fall. Option C (skin absorption) is not a real human mechanism."
    },
    "q40": {
      "steps": [
        "Vaccines present a harmless version or fragment of a pathogen to the immune system.",
        "The immune system learns to recognise it and builds a 'memory' response — specific antibodies and immune cells.",
        "If the real pathogen arrives later, the immune system recognises it quickly and responds much faster and more powerfully.",
        "Main benefit: <b>faster, stronger immune response if the real pathogen arrives</b>."
      ],
      "trap": "Option A (guarantees no exposure) is wrong — vaccines don't create a force field. They prepare the immune system for when exposure occurs."
    },
    "q41": {
      "steps": [
        "Normally: calcium rises → less hormone released → calcium falls back to normal (negative feedback).",
        "The tumour releases the hormone constantly, regardless of calcium levels — the 'switch off when high' signal is bypassed.",
        "With nothing turning the hormone off, calcium is continuously driven upward.",
        "Result: <b>blood calcium tends to rise too high</b> (hypercalcaemia)."
      ],
      "trap": "Option A (stays perfectly normal) ignores that the control mechanism is broken. Option C (falls to zero) confuses 'hormone present' with 'hormone active in a controlled way'."
    },
    "q42": {
      "steps": [
        "The poison's mechanism: it blocks cells' ability to <b>use</b> oxygen, even when oxygen is delivered normally.",
        "Giving extra oxygen increases the <b>delivery</b> of oxygen — but doesn't fix the cells' inability to use it.",
        "More oxygen arriving at a cell that can't process it doesn't help that cell.",
        "The doctor's sound reasoning: <b>the problem is cellular use, not delivery — extra oxygen alone is unlikely to be sufficient</b>."
      ],
      "trap": "This question requires distinguishing between oxygen delivery and oxygen utilisation — two separate steps. Extra oxygen treats a delivery problem, not a utilisation problem."
    },
    "q43": {
      "steps": [
        "In a healthy gut, friendly bacteria occupy space and consume nutrients, outcompeting harmful bacteria.",
        "A broad antibiotic kills much of this 'friendly' community, removing that competition.",
        "With the ecological brake removed, any hardy or antibiotic-resistant harmful species can expand rapidly.",
        "Most logical downstream effect: <b>a harmful species could overgrow and cause problems</b> (e.g. C. difficile infection)."
      ],
      "trap": "Option A (harmful bacteria can never grow) is the opposite of what happens. Option C (permanently sterile and healthier) ignores that the gut microbiome serves protective functions."
    },
    "q44": {
      "steps": [
        "The concept is 'functional reserve' — an organ has spare capacity, so partial loss doesn't affect function until the reserve is nearly exhausted.",
        "Think of a water tank: while there is sufficient reserve, water flows normally. As it empties below a threshold, flow drops suddenly.",
        "The analogy that matches: <b>a water tank that supplies normally until nearly empty, then runs dry suddenly</b>.",
        "This explains why some organ diseases (e.g. liver disease, kidney disease) cause few symptoms until very late."
      ],
      "trap": "Option C (dims smoothly and evenly) describes a linear decline, not a 'reserve until a threshold' pattern. The key feature is: normal → threshold → rapid decline."
    },
    "q45": {
      "steps": [
        "The protocol requires checking the right patient and drug <b>before</b> preparing the dose.",
        "If you prepare the dose first, you might draw up the wrong drug or the wrong amount — and only discover it (or not) later.",
        "Checking first means you know what you are about to prepare and give, eliminating the risk of preparing for the wrong patient.",
        "Original order is better because: <b>checking first avoids preparing or giving the wrong medication</b>."
      ]
    },
    "q46": {
      "steps": [
        "The powder dissolves in water — but only if water is present first.",
        "Shaking the bottle before adding water means there is nothing to dissolve, and nothing to mix — the powder simply rattles around.",
        "Problem: <b>there is nothing to dissolve yet, so shaking before adding water achieves nothing useful</b>.",
        "The protocol step order exists to ensure each action has its intended effect."
      ]
    },
    "q47": {
      "steps": [
        "The triage rule is explicit: check breathing first; if not breathing, immediately call for help and start resuscitation.",
        "Only if the patient IS breathing does history-taking become relevant.",
        "An unconscious, non-breathing patient cannot answer questions and will die without immediate intervention.",
        "The staff member has <b>skipped the most urgent check</b> — a non-breathing patient needs resuscitation, not a history."
      ],
      "trap": "Option A ('gathering symptoms is always first') is dangerously wrong. In triage, life-threatening emergencies always take precedence over information gathering."
    },
    "q48": {
      "steps": [
        "The purpose of nurse B's independent check is to <b>independently verify</b> the drug and dose — catching any error that nurse A may have made.",
        "If nurse B simply agrees with nurse A without looking at the drug and chart themselves, they are not doing an independent check — they are just rubber-stamping.",
        "The safety purpose is defeated when: <b>nurse B agrees without independently checking</b>.",
        "The word 'independently' in the protocol is key — it means looking for yourself, not deferring to your colleague."
      ]
    },
    "q49": {
      "steps": [
        "Sterile technique requires that the outer surface of the glove never contacts anything unsterile before it contacts the patient.",
        "The worker's bare wrist touching the outer surface of the glove has contaminated that surface.",
        "The glove is no longer sterile and must be treated as contaminated.",
        "Correct next step: <b>discard that glove and use a fresh sterile one</b>."
      ],
      "trap": "Option A (carry on) risks introducing contamination to a sterile field or surgical site. Option C (wipe on gown) doesn't restore sterility."
    },
    "q50": {
      "steps": [
        "Labelling at the bedside immediately after collection ensures each sample is identified at the moment it is taken from its specific patient.",
        "Collecting multiple samples and labelling later at a desk introduces the risk of <b>mixing up which sample belongs to which patient</b>.",
        "A mislabelled sample can lead to another patient's result being acted upon — a potentially serious error.",
        "Protocol: label at the bedside, immediately — no exceptions."
      ],
      "trap": "Option A ('as long as they remember') relies on fallible human memory during a busy shift — an unacceptable safety risk in clinical practice."
    },
    "q51": {
      "steps": [
        "The instruction: apply ointment AFTER washing and drying the area.",
        "The patient's sequence: apply ointment → wash → (now wet or clean but ointment removed).",
        "Washing after application removes the ointment that was just applied.",
        "Most likely result: <b>much of the ointment is washed off, reducing the treatment's effectiveness</b>."
      ]
    },
    "q52": {
      "steps": [
        "Disposable gloves protect hands during a task, but removal can transfer contamination — the outside of used gloves is dirty.",
        "Good hygiene practice: <b>wash or sanitise hands after glove removal</b>, before touching anything clean.",
        "The gloves protect during the task; handwashing afterwards protects the next thing you touch.",
        "This is a fundamental clinical and food-safety principle."
      ],
      "trap": "Option A ('gloves keep hands perfectly clean') is wrong — glove removal itself can contaminate the hands, and gloves can have micro-tears."
    },
    "q53": {
      "steps": [
        "Earlier checks verified the blood match in the lab and pharmacy; the bedside check verifies it again at the point of care.",
        "Between earlier checks and the bedside, events can occur: wrong bag handed over, bags switched, wrong patient moved to the bed.",
        "The bedside check is the <b>last line of defence</b> before irreversible harm — it catches errors that earlier correct checks cannot prevent.",
        "Keeping it: <b>last chance to catch a right-blood-wrong-patient mix-up before harm is done</b>."
      ],
      "trap": "Option A ('pointless once earlier checks passed') misunderstands layered safety. Each check guards against different failure modes; the final check guards against late mix-ups."
    },
    "q54": {
      "steps": [
        "The pump shows '50' — but 50 ml/hour is a safe rate, while 50 ml/minute is dangerously fast (3,000 ml/hour).",
        "These are very different doses from identical-looking numbers.",
        "Systematic practice demands: <b>confirm the units before starting</b>.",
        "The second-person verification step is also the right moment to resolve this ambiguity — not after starting."
      ],
      "trap": "Option C (halve the number and start) invents a solution not supported by any protocol and is still based on unconfirmed units."
    },
    "q55": {
      "steps": [
        "Each checklist item exists because it guards against a specific, distinct type of error.",
        "Patient identity check catches: wrong patient. Site/side check catches: wrong location of procedure. These are <b>different</b> errors.",
        "Combining them into 'one quick glance' makes it easy to mentally tick both without actually verifying both.",
        "Soundest objection: <b>each item guards against a different error; merging them makes one easier to miss</b>."
      ]
    },
    "q56": {
      "steps": [
        "Step 1 (rest 5 min): not done — user rushed upstairs immediately before taking the reading.",
        "Step 2 (bare upper arm cuff): unclear, but not mentioned as violated.",
        "Step 3 (arm at heart height): not mentioned as violated.",
        "Step 4 (no talking during reading): violated — user was talking.",
        "Steps broken: <b>steps 1 and 4</b> — no rest beforehand, and talking during the reading."
      ],
      "trap": "Both violations matter clinically: raised physical exertion artificially inflates blood pressure; talking during measurement can alter breathing and pressure readings."
    },
    "q57": {
      "steps": [
        "The discharge protocol ensures: (1) medical clearance, (2) medicines explained and provided, (3) follow-up arranged — then patient leaves.",
        "Letting the patient leave after step 1 and planning to 'phone medicine details later' skips steps 2 and 3 in the moment.",
        "Main risk: <b>patient goes home without their medicines or instructions, risking missed or incorrect treatment</b>.",
        "Patients may not receive the call, may misunderstand verbal phone instructions, or may not have access to the medicines."
      ]
    },
    "q58": {
      "steps": [
        "The fridge must stay 2–8 °C; the log shows 11 °C overnight — well above the safe maximum.",
        "Medicines stored above their required temperature may have degraded in quality or potency.",
        "Correct systematic response: <b>flag the out-of-range reading and check whether the medicines are still safe before use</b>.",
        "Using potentially degraded medicines without checking could lead to under-treatment or unexpected side effects."
      ],
      "trap": "Option A (ignore it) is never appropriate for a documented out-of-range temperature. Option C (lower to below 0 °C) would cause freezing damage — a different kind of harm."
    },
    "q59": {
      "steps": [
        "Concentration: 100 mg per 5 ml = <b>20 mg per ml</b>.",
        "Volume = dose ÷ concentration = 300 mg ÷ 20 mg/ml = <b>15 ml</b>.",
        "Check: 15 ml × 20 mg/ml = 300 mg ✓"
      ]
    },
    "q60": {
      "steps": [
        "Each tablet = 250 mg. Prescribed dose = 750 mg.",
        "Tablets needed = 750 ÷ 250 = <b>3 tablets</b>.",
        "Check: 3 × 250 = 750 mg ✓"
      ]
    },
    "q61": {
      "steps": [
        "3 doses per day × 5 days = <b>15 doses total</b>.",
        "Check: 5 days × 3 = 15 ✓"
      ]
    },
    "q62": {
      "steps": [
        "Rate = total volume ÷ total time = 1000 ml ÷ 8 hours = <b>125 ml per hour</b>.",
        "Check: 125 ml/h × 8 h = 1000 ml ✓"
      ]
    },
    "q63": {
      "steps": [
        "Dose = weight × dose per kg = 15 kg × 8 mg/kg = <b>120 mg</b>.",
        "Check: 15 × 8 = 120 ✓"
      ]
    },
    "q64": {
      "steps": [
        "Concentration: 2 mg per ml.",
        "Volume = dose ÷ concentration = 30 mg ÷ 2 mg/ml = <b>15 ml</b>.",
        "Check: 15 ml × 2 mg/ml = 30 mg ✓"
      ]
    },
    "q65": {
      "steps": [
        "Drop in weight = 80 − 72 = <b>8 kg</b>.",
        "Percentage decrease = (drop ÷ original) × 100 = (8 ÷ 80) × 100 = <b>10%</b>.",
        "Check: 10% of 80 = 8, and 80 − 8 = 72 ✓"
      ],
      "trap": "Always divide by the <b>original</b> value (80), not the new value (72). Using 72 as the base gives ~11.1%, which is wrong."
    },
    "q66": {
      "steps": [
        "Step 1 — number of children: 60 × 25% = 60 × 0.25 = <b>15 children</b>.",
        "Step 2 — under 5: 15 × 40% = 15 × 0.40 = <b>6 children</b>.",
        "Answer: <b>6</b>."
      ],
      "trap": "Percentage of a percentage: 25% of 60 first, then 40% of that result. Don't take 40% of 60 directly."
    },
    "q67": {
      "steps": [
        "Full doses = total volume ÷ dose size = 240 ml ÷ 20 ml = <b>12 doses</b>.",
        "Check: 12 × 20 = 240 ✓"
      ]
    },
    "q68": {
      "steps": [
        "Time = volume ÷ rate = 200 ml ÷ 50 ml/h = <b>4 hours</b>.",
        "Check: 4 h × 50 ml/h = 200 ml ✓"
      ]
    },
    "q69": {
      "steps": [
        "Concentration: 5 mg in 2 ml = <b>2.5 mg per ml</b>.",
        "Volume = dose ÷ concentration = 12.5 mg ÷ 2.5 mg/ml = <b>5 ml</b>.",
        "Check: 5 ml × 2.5 mg/ml = 12.5 mg ✓"
      ],
      "trap": "First convert to per-ml concentration (5 mg ÷ 2 ml = 2.5 mg/ml). Dividing 12.5 by 5 (the mg in the vial) gives 2.5 ml — a common error that skips the concentration step."
    },
    "q70": {
      "steps": [
        "Convert: 1.5 litres = <b>1500 ml</b>.",
        "Rate = 1500 ml ÷ 12 hours = <b>125 ml per hour</b>.",
        "Check: 125 × 12 = 1500 ✓"
      ],
      "trap": "The unit conversion (litres → ml) is the critical first step. Dividing 1.5 by 12 gives 0.125, which is wrong unless you then multiply by 1000."
    },
    "q71": {
      "steps": [
        "The second month: visits go from 300 down to 270.",
        "Drop = 300 − 270 = <b>30 visits</b>.",
        "Percentage change = (30 ÷ 300) × 100 = <b>10% decrease</b>.",
        "Check: 10% of 300 = 30, and 300 − 30 = 270 ✓"
      ],
      "trap": "The base for this calculation is the <b>start of the second month</b> (300), not the original 250. The question asks about the second month's change only."
    },
    "q72": {
      "steps": [
        "Ratio 1 part medicine : 4 parts water = <b>5 parts total</b>.",
        "Value of 1 part = 200 ml ÷ 5 = <b>40 ml</b>.",
        "Medicine in mixture = 1 part = <b>40 ml</b>.",
        "Check: 40 ml medicine + 160 ml water = 200 ml total ✓"
      ],
      "trap": "Don't divide 200 by 4 (=50) — that divides by only the water parts. The total parts are 1 + 4 = 5."
    },
    "q73": {
      "steps": [
        "Compare field by field: drug name — 'Paracetamol 500 mg' (same). Strength — '500 mg' (same). Instructions — 'TWO tablets every X hours' (time differs: 6h vs. 4h). Max per day — '8 in 24 hours' (same).",
        "The only difference: <b>the time interval between doses</b> (every 6 hours vs. every 4 hours)."
      ]
    },
    "q74": {
      "steps": [
        "Read the bar heights: Mon 72, Tue 70, Wed 74, Thu 71, Fri <b>118</b>, Sat 73 beats/min.",
        "Five days cluster between 70–74; Friday at 118 is far above the rest.",
        "Friday stands out as unusual."
      ]
    },
    "q75": {
      "steps": [
        "Read the weekly weights: 58, 60, 62, 64, 66 kg.",
        "Each week increases by exactly 2 kg.",
        "Best description: <b>weight rose by a steady 2 kg each week</b>."
      ],
      "trap": "Option C (stayed flat) and option D (rose then crashed) are clearly wrong from the data. The consistent +2 each week makes it 'steady', not random."
    },
    "q76": {
      "steps": [
        "Results: 5.0, 5.1, 4.9, 5.0, 5.2, 0.5.",
        "Five values cluster between 4.9 and 5.2; the sixth is 0.5 — an order of magnitude lower.",
        "In a controlled lab test of identical samples, such an extreme difference strongly suggests error.",
        "Correct action: <b>flag 0.5 as a likely outlier and re-check that sample before reporting</b>."
      ],
      "trap": "Option D (average everything) hides the error rather than investigating it. Scientific integrity requires investigating, not obscuring, anomalies."
    },
    "q77": {
      "steps": [
        "Compare every feature: alertness (Alert → Drowsy) — <b>changed</b>. Speech (full sentences → short phrases) — <b>changed</b>. Skin (warm and dry → cool and clammy) — <b>changed</b>. Pain (none → chest pain) — <b>changed</b>.",
        "All <b>four</b> described features have changed."
      ],
      "trap": "This is a deliberate spot-the-difference exercise. Careful, feature-by-feature comparison reveals all four changes — skimming leads to undercounting."
    },
    "q78": {
      "steps": [
        "Read the weekly infection counts: week 1: 2, week 2: 3, week 3: <b>9</b>, week 4: 4, week 5: 2, week 6: 1.",
        "Week 3 is a clear spike — much higher than any other week.",
        "After week 3, numbers fall back down and continue declining.",
        "Best description: <b>clear spike in week 3, then numbers fell back</b>."
      ],
      "trap": "Option A (rose steadily every week) is wrong — weeks 4–6 all decrease. Option C (highest in final week) is clearly wrong from the data."
    },
    "q79": {
      "steps": [
        "Calculate the drop from each day to the next: Day1→Day2: 1500→1450 = −50. Day2→Day3: 1450→800 = <b>−650</b>. Day3→Day4: 800→1400 = +600. Day4→Day5: 1400→1480 = +80.",
        "The biggest single-day drop is Day 2 to Day 3: <b>650 ml</b>.",
        "So intake dropped the most on <b>Day 3</b> (compared with Day 2)."
      ]
    },
    "q80": {
      "steps": [
        "Clinic A: 150 patients. Clinic B: 100 patients.",
        "Difference: 150 − 100 = 50 more patients at A.",
        "Percentage more: 50 ÷ 100 × 100 = <b>50% more</b>.",
        "Check: twice as many would be 200; half again (150%) would also be wrong. 150 is 1.5 × 100, i.e. 50% more."
      ],
      "trap": "Option B ('twice as many') would require A = 200. Option A is correct: 50% more than 100 = 150."
    },
    "q81": {
      "steps": [
        "Read the temperature readings at each 4-hour interval: 37.0, 37.2, 38.5, 38.6, 37.4, 37.1 °C.",
        "The temperature rises from 37.0 to a peak of ~38.6 (readings 3–4), then falls back toward 37.1.",
        "This is a <b>temporary fever that peaked in the middle and settled back near the start</b>.",
        "Option A (climbed steadily the whole time) ignores the second half of the data."
      ]
    },
    "q82": {
      "steps": [
        "Reading 1: HR 80, O₂ 98%. Reading 2: HR 95, O₂ 97%. Reading 3: HR 110, O₂ 98%.",
        "Heart rate: 80 → 95 → 110 — <b>clearly and steadily rising</b>.",
        "Oxygen: 98 → 97 → 98 — essentially <b>unchanged</b>, with only 1% fluctuation.",
        "Most accurate observation: <b>heart rate is rising, but oxygen has stayed roughly steady — only one measure is clearly trending</b>."
      ],
      "trap": "The trainee says 'clearly getting worse across the board' — but the oxygen data doesn't support this. Accurate observation means reporting only what the numbers actually show."
    },
    "q83": {
      "steps": [
        "Compare: drug name — 'Insulin' (same). Strength — '100 units/ml' (same). Container: Box 1 says '10 ml vial'; Box 2 says '3 ml cartridge' — <b>different type and volume</b>.",
        "The difference is: <b>the container type and volume</b>."
      ],
      "trap": "The drug strength (100 units/ml) is identical on both — don't confuse strength with volume. The volume per container (10 ml vs. 3 ml) and the format (vial vs. cartridge) differ."
    },
    "q84": {
      "steps": [
        "Read the wound measurements: 40, 34, 28, 22, 16, 10 mm.",
        "Each visit: −6 mm from the previous. Consistently decreasing.",
        "Overall pattern: <b>the wound is getting steadily smaller — healing well</b>."
      ]
    },
    "q85": {
      "steps": [
        "Readings: 97, 96, 97, <b>88</b>, 96, 97%.",
        "Five readings cluster between 96–97%; the fourth reading drops to 88% — significantly below the rest.",
        "In clinical practice, an oxygen reading of 88% warrants immediate attention.",
        "The reading that most deserves a closer look: <b>the 88</b>."
      ]
    },
    "q86": {
      "steps": [
        "Read the monthly error counts: Jan 18, Feb 17, Mar 9, Apr 8, May 7.",
        "Jan and Feb (before the new system in Feb) are similar: 18 and 17 — essentially flat.",
        "From March onward (first full month under the system): 9, 8, 7 — a notable drop.",
        "Data most supports: <b>errors were fairly flat before February and dropped noticeably from March — consistent with the new system helping</b>."
      ],
      "trap": "Option A says errors were 'already falling fast before February' — but Jan→Feb is 18→17, a trivial change. The real drop happens at Mar (18→9 effectively)."
    },
    "q87": {
      "steps": [
        "Ethical principle: <b>patient's right to access their own information</b>. Under data protection and patient rights frameworks, competent patients have the right to access their own records.",
        "The principled response: <b>support the patient's reasonable request to access their own information, following the proper process</b> (e.g. submitting a formal access request).",
        "Refusal without grounds, or requiring justification, violates the patient's rights."
      ],
      "trap": "Option A (records are only for staff) is a common misconception — patients have legally protected rights to see their own medical records."
    },
    "q88": {
      "steps": [
        "Ethical principle: <b>honesty and duty of candour</b>. Healthcare workers have a professional and ethical obligation to be open about errors, even when no harm resulted.",
        "The principled action: <b>report the error honestly so it can be reviewed and prevent recurrence, and inform the patient appropriately</b>.",
        "Covering up an error (options C and D) or saying nothing (option A) prioritises self-protection over transparency and learning."
      ],
      "trap": "Option A ('no harm, say nothing') is ethically wrong — near misses and errors should be reported to prevent future harm, regardless of outcome."
    },
    "q89": {
      "steps": [
        "Ethical principle: <b>informed consent</b>. A 'yes' is only valid as consent if the person genuinely understands what they are agreeing to.",
        "The patient doesn't know they can withdraw without affecting their care — a crucial piece of information that may change their decision.",
        "What should happen: <b>ensure the patient genuinely understands the study and their right to withdraw before proceeding</b>."
      ],
      "trap": "Option A ('a yes is enough') ignores the 'informed' part of informed consent. Consent without understanding is not ethically valid."
    },
    "q90": {
      "steps": [
        "Ethical principle: <b>patient confidentiality</b>. Medical records contain sensitive personal information protected by law and professional ethics.",
        "Accessing a patient's records requires a legitimate care-related reason — curiosity is not one.",
        "Principled response: <b>refuse, because accessing records without a care-related reason breaches confidentiality</b>.",
        "The celebrity's fame does not reduce their right to privacy."
      ],
      "trap": "Option C ('look but only share a little') still involves an unauthorised access — the breach happens at the point of accessing, not only at the point of sharing."
    },
    "q91": {
      "steps": [
        "Ethical principle: <b>fairness and impartiality</b>. Clinical decisions — including waiting list position — must be based on clinical need, not on payment or personal connections.",
        "Accepting money to prioritise one patient is bribery and disadvantages other patients who are equally or more clinically deserving.",
        "Principled response: <b>decline the gift</b>, because this would mean allocating care by payment rather than need."
      ],
      "trap": "Option C (accept the money, do nothing) is still ethically wrong — accepting a gift with an implicit expectation is itself a conflict of interest."
    },
    "q92": {
      "steps": [
        "Ethical principle: <b>clinical urgency and triage</b>. Resources should be allocated based on clinical need, not order of arrival or volume of complaint.",
        "Patient X has a life-threatening but treatable emergency — inaction risks death. Patient Y's problem is painful but non-urgent.",
        "Principled approach: <b>treat the life-threatening emergency first</b>, while keeping Patient Y informed and as comfortable as possible.",
        "First-come-first-served is the appropriate rule for equally urgent cases — not when urgency differs dramatically."
      ]
    },
    "q93": {
      "steps": [
        "Ethical principle: <b>informed consent requires genuine understanding</b>. A signature obtained through gestures when a patient doesn't understand the language is not valid informed consent.",
        "The patient cannot make a truly informed decision without understanding what is being proposed.",
        "Principled course: <b>arrange proper interpretation so the patient truly understands before consenting</b>.",
        "Delaying a procedure to obtain proper consent is always preferable to proceeding without it."
      ],
      "trap": "Option C (ask another patient to translate informally) introduces confidentiality concerns and risks inaccurate translation — an unqualified interpreter is not a safe substitute."
    },
    "q94": {
      "steps": [
        "Ethical principle: <b>scope of practice and honesty about competence</b>. Performing tasks you are not trained for puts patients at risk.",
        "Attempting an unsafe task to 'seem capable' is dishonest and potentially harmful.",
        "Principled action: <b>say honestly that you are not trained for it and ask for supervision or for someone qualified to do it</b>.",
        "This protects the patient and is the expected standard of professional behaviour."
      ],
      "trap": "Option A ('attempt it to seem capable') prioritises the worker's image over patient safety — the opposite of professional ethics."
    },
    "q95": {
      "steps": [
        "Tension: patient's <b>privacy request</b> vs. <b>clinician's duty to provide safe care</b> using accurate information.",
        "If the detail is clinically necessary, omitting it could harm the patient's treatment.",
        "Principled handling: <b>explain why the information matters, record what is clinically necessary, and limit access as much as possible</b>.",
        "This balances the competing duties rather than sacrificing either entirely."
      ],
      "trap": "Option A (leave it out entirely) could lead to unsafe care. Option C (tell everyone) ignores the patient's privacy concern. The principled middle path records what's needed and restricts who sees it."
    },
    "q96": {
      "steps": [
        "Ethical principle: <b>duty of care and patient safety</b> — the obligation to protect patients overrides professional hierarchy and social discomfort.",
        "Each time the senior colleague skips hand hygiene, there is a risk of transmitting infection between patients.",
        "Principled action: <b>raise the concern appropriately — patient safety matters more than rank or discomfort</b>.",
        "Most institutions have mechanisms (e.g. speaking to a supervisor, using a safety reporting system) to raise concerns without direct confrontation."
      ],
      "trap": "Option A ('say nothing, they're senior') allows ongoing patient risk for social reasons. Seniority does not exempt anyone from infection control obligations."
    },
    "q97": {
      "steps": [
        "Ethical principle: <b>patient autonomy</b>. A competent adult who has been fully informed and understands the risks of refusing has the absolute right to refuse treatment.",
        "Proceeding with treatment a competent patient has knowingly refused constitutes assault in law and a serious ethical violation.",
        "The suggestion to 'not mention the refusal' involves deception and removes the last safeguard.",
        "It is wrong because: <b>giving treatment a competent patient has knowingly refused ignores their right to decide about their own body</b>."
      ],
      "trap": "Options A and D ('staff know best', 'overridden when staff disagree') reflect medical paternalism — an outdated and ethically rejected approach. Autonomy of a competent patient is paramount."
    },
    "q98": {
      "steps": [
        "Ethical principle: <b>utilitarian triage ethics</b> — when resources are overwhelmed, the goal is to maximise the number of lives saved or reduce total harm.",
        "This requires decisions based on clinical need and likely benefit, applied equally to all, not on wealth, status, connections, or noise.",
        "Most defensible basis: <b>prioritise by clinical need and likely benefit, consistently applied</b>.",
        "This is the formal triage principle used in mass-casualty and disaster medicine worldwide."
      ],
      "trap": "Options A, C, and D all prioritise non-clinical factors (wealth, personal connections, volume of complaint). These are indefensible in ethical triage frameworks."
    },
    "q99": {
      "steps": [
        "Ethical principle: <b>honesty and integrity in documentation</b>. Medical records must be accurate — falsifying them harms the integrity of the healthcare system and risks consequences for others.",
        "Recording a condition the patient doesn't have constitutes fraud, regardless of the motive.",
        "Even sympathy doesn't justify dishonesty that could mislead future clinicians and defraud the insurer.",
        "Principled response: <b>decline to falsify records — honesty and accurate documentation protect everyone</b>."
      ],
      "trap": "Option C ('record it with a note it might be untrue') still involves recording a false condition and is not a principled resolution. The note doesn't make the false entry acceptable."
    },
    "q100": {
      "steps": [
        "Ethical principle: <b>voluntariness as a condition of valid consent</b>. For consent to be truly free, it must not be driven by financial desperation.",
        "A large payment may create pressure on a struggling patient to accept risks they would refuse if their financial situation were different.",
        "This undermines the voluntary nature of consent — a core requirement of research ethics.",
        "Main ethical concern: <b>the payment may pressure someone into accepting risks they would otherwise refuse, undermining truly free consent</b>."
      ],
      "trap": "Option A ('payment makes recruitment easier') frames the problem backwards — ease of recruitment is not an ethical goal if it compromises free choice."
    }
  }
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
