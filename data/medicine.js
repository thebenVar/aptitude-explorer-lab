// Auto-generated assessment data for "medicine". Edit here to change this test.
window.ASSESSMENT = {
  id: "medicine",
  title: "Medicine — Aptitude Check",
  dot: "Med",
  brandName: "Medicine Aptitude Check",
  loginIntro: "A short, gently-timed, <b>just-for-fun</b> set of questions exploring the thinking patterns Medicine relies on — reasoning about cause and effect in living systems, following procedures precisely, working with numbers in context, noticing small details, and making principled decisions. No biology knowledge required.",
  theme: { accent: "#22d3ee", accent2: "#34d399" },
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
    bio: { label:"Biological Cause-Effect Reasoning",
      means:"understanding how actions in one part of a system affect others — medicine is applied biology, and biology is about interconnected systems.",
      improve:"Study human body systems with a 'why' focus (Khan Academy Health &amp; Medicine; Crash Course Biology). Ask 'what causes what?' for every fact." },
    systematic: { label:"Systematic &amp; Sequential Thinking",
      means:"following protocols in the right order with precision — misorders in medicine have serious consequences.",
      improve:"Practise following complex multi-step instructions exactly. Cooking, lab procedures, and assembly guides all build this discipline." },
    numerical: { label:"Numerical Reasoning in Context",
      means:"calculating rates, proportions, dosages, and reading test results accurately — numerical errors in healthcare have real consequences.",
      improve:"Practise percentage and ratio problems in medical contexts. Focus on concentration, rate, and proportion calculations." },
    observation: { label:"Observation &amp; Pattern Recognition",
      means:"noticing subtle differences and changes — a key diagnostic skill, whether reading a chart, comparing samples, or tracking a trend.",
      improve:"Practise spot-the-difference exercises. Try to describe what's 'normal' in everyday observations so that abnormal stands out." },
    ethics: { label:"Ethical &amp; Principled Reasoning",
      means:"applying principles of welfare, consent, and fairness — medicine requires constant ethical judgment alongside technical skill.",
      improve:"Read about medical ethics (BBC Ethics Guide). Discuss dilemmas: what do you do when two good principles conflict?" }
  }
},
  bandText: {
  strong:{ pill:"good", title:"A strong set of answers",
    blurb:"Your answers show the careful, systematic thinking Medicine depends on. You handled cause-effect, procedural, and detail questions well — a good sign for someone exploring healthcare careers." },
  promising:{ pill:"warn", title:"A promising mix, with some gaps",
    blurb:"Good instincts in several areas, with a few types that caught you out. The areas where you lost marks are learnable — the notes below show where to focus." },
  gaps:{ pill:"bad", title:"Several question types to practise",
    blurb:"Some of these questions didn't go your way today. Medical thinking is a set of habits that build with practice — the notes below are a starting point." }
},
  bank: [

  /* ── BIOLOGICAL CAUSE-EFFECT REASONING (q1–q6) ── */

  {id:"q1", dim:"bio", difficulty:"easy", timer:50,
   /* straightforward pipe-blockage analogy */
   prompt:"Think of blood vessels as water pipes carrying fluid around a building. If a pipe narrows to half its width, what happens to the pressure needed to push the same amount of water through at the same speed?",
   options:["The pressure required stays the same — narrowing does not affect it",
            "The pressure required decreases — less space means the water moves more easily",
            "The pressure required increases significantly — the fluid must be forced through a tighter gap",
            "The flow stops entirely — water cannot move through a narrowed pipe"],
   answer:2},

  {id:"q2", dim:"bio", difficulty:"medium", timer:55,
   /* domino effect — oxygen delivery chain */
   prompt:"Oxygen is carried from your lungs to your muscles by red blood cells moving through your bloodstream. If the number of red blood cells in your body fell sharply, which sequence of effects would you most logically expect?",
   options:["Less oxygen delivered to muscles → muscles tire more quickly → breathing rate increases to try to compensate",
            "More oxygen delivered to muscles → muscles tire less quickly → breathing rate decreases",
            "No immediate effect — the lungs would simply produce more oxygen to make up for it",
            "The heart slows down because less work is needed to pump fewer cells"],
   answer:0},

  {id:"q3", dim:"bio", difficulty:"easy", timer:50,
   /* TRICKY — sweating is a cooling mechanism, not a warming one */
   prompt:"On a hot day your body begins to sweat heavily. A friend says: 'Sweating means your body is generating extra heat.' Is this correct?",
   options:["Yes — sweating is the body's way of producing warmth during physical effort",
            "No — sweating is a cooling mechanism; water evaporating from your skin takes heat away from your body",
            "Yes — the salt in sweat acts as an insulator, trapping warmth",
            "No — sweat glands generate cold directly, like a refrigerator"],
   answer:1},

  {id:"q4", dim:"bio", difficulty:"medium", timer:55,
   /* cause-effect in a feedback loop: blood sugar regulation analogy */
   prompt:"Imagine a thermostat that turns a heater on when a room gets too cold and off when it warms up again. A similar 'switch on / switch off' control system operates in the body to keep blood sugar levels stable. If the 'switch off' signal fails and blood sugar keeps rising, what is the most logical consequence?",
   options:["Blood sugar levels would stabilise at a lower level than usual",
            "Blood sugar levels would continue rising unchecked, because nothing is stopping them",
            "The body would automatically replace the faulty signal with a backup system of equal strength",
            "Blood sugar levels would start falling rapidly because the system overcompensates"],
   answer:1},

  {id:"q5", dim:"bio", difficulty:"easy", timer:50,
   /* domino: if kidneys cannot filter, toxins build up */
   prompt:"The kidneys act like a filter — they remove waste products from the blood and pass them out in urine. If both kidneys stopped working completely, what would happen over time?",
   options:["The liver would automatically take over filtration, so nothing would change",
            "Urine production would double as the body tried to compensate",
            "Waste products would accumulate in the blood, because there is no longer anything removing them",
            "The body would begin filtering waste through the skin instead"],
   answer:2},

  {id:"q6", dim:"bio", difficulty:"hard", timer:60,
   /* TRICKY — more antibiotics ≠ faster recovery always; correct answer is resistance/ecosystem disruption */
   prompt:"A person takes a prescribed course of antibiotics and feels completely better after four days, even though the prescription is for seven days. They stop taking the tablets early. From a cause-and-effect perspective, what is the most important risk?",
   options:["None — if symptoms are gone, the infection is fully cleared and it is safe to stop",
            "The remaining bacteria — which may be the hardiest ones — could survive, multiply, and become harder to treat in future",
            "Stopping early causes the antibiotic to reverse its effect and make the infection worse immediately",
            "The unused tablets will expire and cannot be used for anything else"],
   answer:1},

  /* ── SYSTEMATIC & SEQUENTIAL THINKING (q7–q12) ── */

  {id:"q7", dim:"systematic", difficulty:"easy", timer:45,
   prompt:"A nurse must prepare a patient for a blood test. The correct order is: (1) explain the procedure to the patient, (2) put on gloves, (3) clean the skin with a swab, (4) insert the needle, (5) collect the sample, (6) remove the needle and apply pressure. A colleague suggests doing step 3 after step 4. Why is that wrong?",
   options:["It is not wrong — cleaning can happen at any point before the needle is removed",
            "Cleaning after inserting the needle cannot sterilise the puncture site in time, so it serves no purpose and the patient is exposed to unnecessary infection risk",
            "The swab would interfere with blood flow once the needle is in",
            "Regulations require the swab to be used last"],
   answer:1},

  {id:"q8", dim:"systematic", difficulty:"medium", timer:55,
   /* TRICKY: step is missing from a 5-step hand-wash protocol */
   prompt:"A hospital hand-washing protocol has five steps: (1) wet hands, (2) apply soap, (3) scrub all surfaces for 20 seconds, (4) rinse thoroughly, (5) dry with a single-use towel. A student completes steps 1, 2, 3, and 5 — skipping step 4. What is the problem?",
   options:["There is no problem — drying removes any soap left on the hands",
            "Soap and loosened bacteria remain on the hands; without rinsing they are transferred to the towel and then back to the hands",
            "The 20-second scrub time is reduced by skipping the rinse",
            "Skipping step 4 only matters if the student will touch food immediately after"],
   answer:1},

  {id:"q9", dim:"systematic", difficulty:"medium", timer:50,
   prompt:"Below are instructions for diluting a cleaning solution. Which sequence is correct?\n(A) Add concentrate to water  (B) Add water to concentrate",
   options:["Sequence B — always add water to concentrate so you can control the volume",
            "Either order works — the final mixture is identical either way",
            "Sequence A — always add concentrate to water, because adding water to a concentrated solution can cause a dangerous heat reaction or splashing",
            "Sequence B — water should always go in last to seal the concentrate"],
   answer:2},

  {id:"q10", dim:"systematic", difficulty:"easy", timer:55,
   /* identifying what step comes NEXT in an incomplete protocol */
   prompt:"A healthcare assistant is sterilising reusable instruments. They have completed: cleaning off visible debris, rinsing with water, and drying. What is the correct next step before the instruments can be used on another patient?",
   options:["Use the instruments immediately — they have been cleaned and dried",
            "Store them in a sealed bag — drying is the final step",
            "Apply the sterilisation process (heat, chemical, or UV) — cleaning removes dirt but does not kill all pathogens",
            "Label them with the date they were cleaned"],
   answer:2},

  {id:"q11", dim:"systematic", difficulty:"medium", timer:50,
   /* why order matters — medication before or after food */
   prompt:"Some medications must be taken with food, and some must be taken on an empty stomach. A patient is prescribed one of each type and takes both together, on an empty stomach, because it is more convenient. What is the likely consequence?",
   options:["No consequence — the body will automatically sort out which drug needs food and which does not",
            "One drug may be absorbed too quickly or cause stomach irritation because food was absent; the other may actually work correctly",
            "Both drugs will be equally ineffective because they were taken together",
            "Taking drugs on an empty stomach always improves their effectiveness"],
   answer:1},

  {id:"q12", dim:"systematic", difficulty:"hard", timer:60,
   /* TRICKY: obvious answer is 'check the label again' but the right answer is stop and verify with a senior */
   prompt:"A student nurse is about to administer a medication. They notice the dose written in the patient's chart (500 mg) is double the standard dose listed on the drug information sheet (250 mg). The ward is busy. What should they do?",
   options:["Administer 500 mg as written — the doctor who prescribed it knows the patient best",
            "Administer 250 mg — the drug sheet takes precedence over the chart",
            "Stop, do not administer the medication yet, and immediately verify the discrepancy with a senior clinician before proceeding",
            "Average the two figures and give 375 mg as a safe middle ground"],
   answer:2},

  /* ── NUMERICAL REASONING IN CONTEXT (q13–q18) ── */

  {id:"q13", dim:"numerical", difficulty:"easy", timer:50,
   prompt:"A liquid medicine contains 200 mg of active ingredient in every 5 ml of liquid. A patient needs a dose of 600 mg. How many millilitres should be given?",
   options:["10 ml",
            "15 ml",
            "20 ml",
            "30 ml"],
   answer:1},
   /* 200mg/5ml = 40mg/ml; 600mg ÷ 40mg/ml = 15ml ✓ */

  {id:"q14", dim:"numerical", difficulty:"hard", timer:55,
   /* TRICKY — percentage of a percentage */
   prompt:"A hospital ward has 40 beds. 75% of them are occupied. Of the occupied beds, 20% contain patients who have been there for more than a week. How many patients have been in the ward for more than a week?",
   options:["6",
            "8",
            "10",
            "12"],
   answer:0},
   /* 40 × 0.75 = 30 occupied; 30 × 0.20 = 6 ✓ */

  {id:"q15", dim:"numerical", difficulty:"medium", timer:55,
   prompt:"A drip delivers fluid to a patient at a rate of 80 ml per hour. The bag contains 500 ml when it is set up. Roughly how long will the bag last before it runs empty?",
   options:["About 4 hours",
            "About 5 hours and 15 minutes",
            "About 6 hours and 15 minutes",
            "About 7 hours"],
   answer:2},
   /* 500 ÷ 80 = 6.25 hours = 6 hours 15 minutes ✓ */

  {id:"q16", dim:"numerical", difficulty:"medium", timer:60,
   /* reading a simple table */
   prompt:"A patient's temperature is recorded four times a day. The readings over two days are shown here:\n\nDay 1 — 8am: 37.2 °C, 12pm: 37.8 °C, 4pm: 38.4 °C, 8pm: 38.1 °C\nDay 2 — 8am: 37.5 °C, 12pm: 37.3 °C, 4pm: 37.1 °C, 8pm: 36.9 °C\n\nWhat is the difference between the highest temperature recorded and the lowest?",
   options:["1.2 °C",
            "1.5 °C",
            "1.3 °C",
            "1.6 °C"],
   answer:1},
   /* Highest: 38.4 °C (Day 1, 4pm); Lowest: 36.9 °C (Day 2, 8pm); difference = 1.5 °C ✓ */

  {id:"q17", dim:"numerical", difficulty:"medium", timer:50,
   prompt:"A child weighs 20 kg. The prescribed dose of a pain-relief syrup is 10 mg per kilogram of body weight. The syrup contains 50 mg per 5 ml. How many millilitres should the child receive?",
   options:["10 ml",
            "20 ml",
            "25 ml",
            "40 ml"],
   answer:1},
   /* Dose needed: 20 kg × 10 mg/kg = 200 mg; Syrup concentration: 50 mg/5 ml = 10 mg/ml; Volume = 200 mg ÷ 10 mg/ml = 20 ml ✓ */

  {id:"q18", dim:"numerical", difficulty:"medium", timer:55,
   /* TRICKY — percentage increase vs absolute change */
   prompt:"Last month a clinic saw 120 patients. This month it saw 150 patients. By what percentage did the number of patients increase?",
   options:["20%",
            "25%",
            "30%",
            "80%"],
   answer:1},
   /* Increase = 30; percentage = 30/120 × 100 = 25% ✓ */

  /* ── OBSERVATION & PATTERN RECOGNITION (q19–q24) ── */

  {id:"q19", dim:"observation", difficulty:"hard", timer:50,
   /* spot the difference between two patient descriptions */
   prompt:"Two patient notes describe a wound dressing check. Read both carefully and identify what has changed.\n\nNote A: 'Wound edges approximated, no redness, no swelling, small amount of clear fluid, dressing dry and intact.'\nNote B: 'Wound edges approximated, no swelling, moderate yellow discharge, dressing partially saturated, slight redness at wound edges.'\n\nHow many observable differences are there between Note A and Note B?",
   options:["One — the amount of fluid",
            "Two — the fluid type and the dressing condition",
            "Three — the fluid type, the dressing condition, and redness",
            "Four — the fluid type, the fluid amount description, the dressing condition, and redness"],
   answer:3},
   /* Note A: no redness / Note B: redness. Note A: clear fluid / Note B: yellow discharge. Note A: small amount / Note B: moderate. Note A: dressing dry and intact / Note B: dressing partially saturated. = 4 differences ✓ */

  {id:"q20", dim:"observation", difficulty:"easy", timer:55,
   /* bar chart — identify the anomaly */
   prompt:"The chart below shows a patient's daily fluid intake (in ml) over six days. Which day shows an unusual reading compared with the overall trend?",
   chart:barChart(["Mon","Tue","Wed","Thu","Fri","Sat"], [1800,1750,1820,950,1790,1810], "ml / day"),
   options:["Monday",
            "Wednesday",
            "Thursday",
            "Saturday"],
   answer:2},
   /* All days cluster around 1750–1820 ml except Thursday at 950 ml — clear anomaly ✓ */

  {id:"q21", dim:"observation", difficulty:"medium", timer:55,
   /* line chart — describe the trend correctly */
   prompt:"The chart below shows a patient's recorded pain score (0 = no pain, 10 = worst pain) over eight days of treatment. Which description best fits the overall trend?",
   chart:lineChart([8, 7, 6, 6, 5, 4, 4, 3], "pain score (0–10)"),
   options:["The pain score rises steadily throughout treatment",
            "The pain score fluctuates randomly with no clear direction",
            "The pain score decreases overall, with two periods where it stays level before dropping again",
            "The pain score drops sharply at first, then spikes back to its starting level"],
   answer:2},
   /* Scores: 8,7,6,6,5,4,4,3 — general downward trend with level periods at 6,6 and 4,4 ✓ */

  {id:"q22", dim:"observation", difficulty:"medium", timer:50,
   /* find the anomaly in a sequence of lab values */
   prompt:"A lab runs the same test on five samples from the same batch. The results are: 4.2, 4.1, 4.3, 4.2, 7.8. What should a careful observer do?",
   options:["Record all five values and move on — variation is expected in any test",
            "Discard the middle three values and only report the first and last",
            "Flag the value of 7.8 as a likely error or outlier and re-run or check that sample before reporting",
            "Average all five values together to smooth out the anomaly"],
   answer:2},

  {id:"q23", dim:"observation", difficulty:"easy", timer:50,
   /* spot the difference: two medication labels */
   prompt:"A pharmacy technician is checking two bottles before dispensing. Study both labels:\n\nBottle 1: 'Amoxicillin 250 mg capsules — take ONE capsule THREE times daily — 21 capsules'\nBottle 2: 'Amoxicillin 250 mg capsules — take ONE capsule THREE times daily — 28 capsules'\n\nWhat is the only difference between the two labels?",
   options:["The drug name",
            "The dosage strength",
            "The dosing instructions",
            "The quantity of capsules"],
   answer:3},

  {id:"q24", dim:"observation", difficulty:"medium", timer:55,
   /* TRICKY: chart shows a plateau, not acceleration */
   prompt:"The chart below shows weekly step counts for a patient in a rehabilitation programme over eight weeks.",
   chart:lineChart([2000, 3500, 5000, 6500, 8000, 8100, 8050, 8000], "steps / week"),
   options:["The patient's activity increased steadily throughout all eight weeks",
            "The patient showed rapid early improvement that levelled off — a plateau was reached around weeks 5–8",
            "The patient's activity decreased in the second half of the programme",
            "There is no clear pattern in this data"],
   answer:1},
   /* 2000→3500→5000→6500→8000 (steady climb) then 8100→8050→8000 (plateau) ✓ */

  /* ── ETHICAL & PRINCIPLED REASONING (q25–q30) ── */

  {id:"q25", dim:"ethics", difficulty:"medium", timer:55,
   /* consent — patient has the right to refuse */
   prompt:"A patient is admitted to hospital and is found to need a blood transfusion to recover safely. The patient is fully conscious and clearly states they do not want a transfusion for personal reasons. The doctor believes the patient will deteriorate without it. What is the most principled course of action?",
   options:["Administer the transfusion — the doctor's duty to preserve life overrides the patient's preference",
            "Respect the patient's refusal, ensure they understand the consequences, document the decision, and continue to provide the best care possible within those limits",
            "Delay treatment until the patient becomes unconscious, then administer the transfusion",
            "Ask the patient's family to overrule the patient's decision"],
   answer:1},

  {id:"q26", dim:"ethics", difficulty:"medium", timer:50,
   /* confidentiality vs safeguarding */
   prompt:"A teenage patient tells a doctor in confidence that a family member is regularly hurting them at home. The patient begs the doctor not to tell anyone. What is the most principled action?",
   options:["Keep the information completely confidential — the patient's privacy must be respected absolutely",
            "Tell the patient's family immediately so they can deal with the situation",
            "Explain to the patient that while you respect their trust, protecting them from ongoing harm means reporting this to the appropriate safeguarding authority — and that you will do so",
            "Do nothing until the patient raises it again of their own accord"],
   answer:2},

  {id:"q27", dim:"ethics", difficulty:"medium", timer:55,
   /* fairness / resource allocation */
   prompt:"A hospital has one remaining dose of a scarce medicine. Two patients need it equally urgently. Patient A is well-connected and their family is putting pressure on hospital staff. Patient B has no connections and no family present. How should the decision be made?",
   options:["Give it to Patient A — family advocacy shows greater need",
            "Give it to Patient B — the less powerful patient deserves protection",
            "Allocate it based on clinical criteria only (such as who is likely to benefit most or who has waited longer), entirely independent of social connections or pressure",
            "Flip a coin — if both are equally urgent, chance is fairest"],
   answer:2},

  {id:"q28", dim:"ethics", difficulty:"hard", timer:60,
   /* TRICKY — truth-telling vs 'protecting' the patient */
   prompt:"An elderly patient asks their doctor directly: 'Do I have cancer?' The patient's adult children have separately asked the doctor not to tell their parent, insisting it 'would destroy them.' The test results confirm the patient does have cancer. What is the most principled response?",
   options:["Respect the family's wishes and tell the patient nothing — they know their parent best",
            "Tell the patient the full truth if they are asking directly and have the mental capacity to receive it — a patient has the right to know their own diagnosis",
            "Give a vague non-answer and change the subject",
            "Tell the patient only if they ask again on a second visit"],
   answer:1},

  {id:"q29", dim:"ethics", difficulty:"easy", timer:50,
   /* duty of care vs personal risk */
   prompt:"During a busy shift, a healthcare worker notices that a colleague appears to be intoxicated at work. The colleague is currently caring for patients. What is the most principled action?",
   options:["Say nothing — reporting a colleague would damage team trust and morale",
            "Send the colleague an anonymous note later to warn them",
            "Raise the concern immediately with a senior member of staff, because patient safety must take priority over collegial loyalty",
            "Wait until the end of the shift to observe whether the colleague makes any visible mistakes before deciding"],
   answer:2},

  {id:"q30", dim:"ethics", difficulty:"hard", timer:55,
   /* TRICKY — doing something for efficiency vs informed consent */
   prompt:"A busy clinic is running an hour behind schedule. A clinician decides to skip the usual explanation of a minor procedure and just carry it out, reasoning: 'It is routine, harmless, and explaining it wastes time we do not have.' Is this approach acceptable?",
   options:["Yes — if the procedure is genuinely routine and low-risk, consent is implied by the patient attending the clinic",
            "Yes — time pressure is a valid clinical reason to modify consent procedures",
            "No — every patient has the right to understand what will be done to them and to agree or refuse, regardless of how routine or busy things are",
            "Only acceptable if the patient does not specifically ask what is happening"],
   answer:2},

  /* ══════════════════ NEW QUESTIONS q31–q100 ══════════════════ */

  /* ── BIOLOGICAL CAUSE-EFFECT REASONING (q31–q44) — subtypes: pipe/flow analogy, oxygen/energy chain, feedback loop, filter/waste, temperature regulation, dose-response reasoning ── */

  {id:"q31", dim:"bio", difficulty:"easy", timer:50,
   prompt:"Muscles need oxygen to keep working hard. When you sprint, your muscles use oxygen much faster than usual. Which response would most logically help meet that extra demand?",
   options:["Your breathing slows down so less air is wasted",
            "Your breathing and heart rate speed up to bring oxygen in and move it around faster",
            "Your muscles stop using oxygen and switch off",
            "Your body temperature drops to save oxygen"],
   answer:1},

  {id:"q32", dim:"bio", difficulty:"easy", timer:50,
   prompt:"A wound on the skin forms a scab. A child asks what the scab is for. Which explanation makes the most sense?",
   options:["The scab is a sign the wound is infected and getting worse",
            "The scab is a protective cover that seals the wound while new skin grows underneath",
            "The scab pulls dirt deeper into the wound",
            "The scab stops the skin from ever healing"],
   answer:1},

  {id:"q33", dim:"bio", difficulty:"medium", timer:55,
   prompt:"Drinking water leaves the gut, enters the blood, and is eventually removed by the kidneys as urine. If someone drinks a very large amount of water in a short time, what would you most logically expect?",
   options:["They produce less urine, because the body holds on to all the extra water",
            "They produce more urine, as the kidneys remove the extra water from the blood",
            "Their blood stops carrying water entirely",
            "The water turns directly into sweat and none reaches the kidneys"],
   answer:1},

  {id:"q34", dim:"bio", difficulty:"medium", timer:55,
   prompt:"Think of the heart as a pump pushing blood through a closed loop of tubes. If the pump becomes weaker and pushes less blood with each beat, what is the most logical way the body might keep total blood flow steady in the short term?",
   options:["Beat faster, so more (smaller) pushes happen each minute",
            "Beat far more slowly to rest the pump",
            "Stop the loop so no blood is needed",
            "Make the tubes leak so blood escapes"],
   answer:0},

  {id:"q35", dim:"bio", difficulty:"medium", timer:50,
   prompt:"A feedback system keeps body temperature near 37 °C: if you get too hot, you sweat and blood vessels in the skin widen to lose heat. Following that logic, what would the body most likely do when you get too cold?",
   options:["Sweat more and widen the skin vessels further",
            "Shiver to make heat and narrow the skin vessels to keep heat in",
            "Stop producing any heat at all",
            "Speed up sweating to warm the skin"],
   answer:1},

  {id:"q36", dim:"bio", difficulty:"medium", timer:55,
   prompt:"Plants release oxygen during the day. A family keeps many plants in a sealed, unlit cupboard overnight and notices the air feels 'stuffy' by morning. Using simple reasoning about gases, what is the most likely explanation?",
   options:["In the dark the plants are not adding oxygen but are still using some, so oxygen in the sealed space falls",
            "Plants produce extra oxygen in total darkness, making the air too rich",
            "Plants turn oxygen into water at night, flooding the cupboard",
            "Sealed air cannot change composition at all"],
   answer:0},

  {id:"q37", dim:"bio", difficulty:"medium", timer:55,
   prompt:"A medicine works by blocking a single specific 'docking site' on a cell, like a key fitting one lock. A drug company makes a new version that fits the same lock but holds on far more tightly and for much longer. Compared with the original, what effect is most logical?",
   options:["It would have no effect, since it fits the same lock",
            "Its blocking effect would tend to be stronger and last longer",
            "It would automatically unlock every other site in the body",
            "It would make the cell produce more locks instantly"],
   answer:1},

  {id:"q38", dim:"bio", difficulty:"medium", timer:55,
   prompt:"Bleeding is normally stopped by the blood forming a clot to plug the damaged vessel. If a person takes a medicine that makes their blood much slower to clot, what is the most logical trade-off?",
   options:["Wounds heal faster but bruise less",
            "Cuts and internal injuries may bleed more and for longer before stopping",
            "Their blood stops flowing entirely",
            "They can no longer get any wounds at all"],
   answer:1},

  {id:"q39", dim:"bio", difficulty:"easy", timer:50,
   prompt:"Food is broken down in the gut and useful nutrients pass into the blood through the gut wall. If a stretch of gut wall were so damaged that almost nothing could pass through it, what would most logically follow over time?",
   options:["The body would absorb more nutrients than usual",
            "The body would struggle to take in enough nutrients from food, even if the person eats normally",
            "Food would be absorbed instantly through the skin instead",
            "Nutrient levels in the blood would rise sharply"],
   answer:1},

  {id:"q40", dim:"bio", difficulty:"easy", timer:50,
   prompt:"Vaccines work by showing the immune system a harmless preview of a germ so it can recognise the real one faster later. Following this idea, what is the main intended benefit of a vaccine?",
   options:["It guarantees you can never be exposed to the germ",
            "It helps the body respond more quickly and strongly if the real germ arrives",
            "It replaces the need for the immune system entirely",
            "It makes the germ stronger so it is easier to find"],
   answer:1},

  {id:"q41", dim:"bio", difficulty:"hard", timer:60,
   prompt:"A patient's body keeps blood calcium steady using a hormone: when calcium drops, more hormone is released to raise it; when calcium rises, less hormone is released. A tumour now releases this hormone constantly, ignoring the calcium level. What is the most logical consequence?",
   options:["Blood calcium stays perfectly normal because the hormone is present",
            "Blood calcium tends to rise too high, because the 'switch off when high' control is bypassed",
            "Blood calcium falls steadily to zero",
            "The hormone stops having any effect on calcium"],
   answer:1},

  {id:"q42", dim:"bio", difficulty:"hard", timer:60,
   prompt:"A poison works by stopping cells from using oxygen, even when plenty of oxygen is reaching them in the blood. A doctor reasons about why giving the patient extra oxygen to breathe may not be enough on its own. Which reasoning is soundest?",
   options:["Extra oxygen always fixes any oxygen problem, so it will work fully",
            "The problem is not delivery but use — cells still cannot use the oxygen that arrives, so more oxygen alone may not solve it",
            "Extra oxygen would make the poison harmless instantly",
            "Cells do not need oxygen, so the poison is irrelevant"],
   answer:1},

  {id:"q43", dim:"bio", difficulty:"hard", timer:60,
   prompt:"In a balanced gut, 'friendly' bacteria take up space and resources, which keeps harmful bacteria from growing out of control. A strong antibiotic wipes out a large share of all gut bacteria, friendly ones included. Which downstream effect is most logical?",
   options:["Harmful bacteria can no longer ever grow",
            "With competition removed, a hardy harmful species could overgrow and cause problems",
            "The gut becomes permanently sterile and healthier",
            "Friendly bacteria instantly double to fill the gap"],
   answer:1},

  {id:"q44", dim:"bio", difficulty:"medium", timer:55,
   prompt:"A doctor explains that a certain organ has a large 'reserve': a person can lose a big part of it and still function, until very little is left, after which problems appear quickly. Which everyday situation follows the same pattern?",
   options:["A phone battery that shows 100% until it dies with no warning",
            "A water tank that keeps supplying normally until it is nearly empty, then runs dry suddenly",
            "A light that dims smoothly and evenly the whole time",
            "A clock that always shows the exact same time"],
   answer:1},

  /* ── SYSTEMATIC & SEQUENTIAL THINKING (q45–q58) — subtypes: ordering steps, spotting a misordered step, identifying next step, missing step, stop-and-verify judgement, conditional protocol branching ── */

  {id:"q45", dim:"systematic", difficulty:"easy", timer:50,
   prompt:"To give an injection safely the recommended order is: (1) check the patient's name and the drug, (2) wash hands and put on gloves, (3) draw up the correct dose, (4) give the injection, (5) dispose of the needle in a sharps bin. A worker draws up the dose before checking the patient's name and the drug. Why is the original order better?",
   options:["It is not better — the order makes no difference",
            "Checking the right patient and drug first avoids preparing or giving the wrong medication",
            "Gloves cannot be worn after drawing up a dose",
            "Sharps bins must always be opened first"],
   answer:1},

  {id:"q46", dim:"systematic", difficulty:"easy", timer:50,
   prompt:"A recipe-style protocol for making up a powdered medicine reads: (1) read the label, (2) measure the exact volume of water, (3) add the water to the powder, (4) shake until fully dissolved, (5) check the final volume. A trainee shakes the bottle (step 4) before adding any water (step 3). What is the obvious problem?",
   options:["No problem — shaking dry powder mixes it better",
            "There is nothing to dissolve yet, so shaking before adding water achieves nothing useful",
            "Shaking first makes the water measurement wrong",
            "The label cannot be read after shaking"],
   answer:1},

  {id:"q47", dim:"systematic", difficulty:"medium", timer:50,
   prompt:"A clinic triage rule says: first check if the patient is breathing; if not, call for help and start resuscitation; only if they ARE breathing do you move on to ask about their symptoms. A new staff member starts asking an unconscious, non-breathing patient about their symptoms. What is wrong with their approach?",
   options:["Nothing — gathering symptoms is always the first priority",
            "They have skipped the most urgent check; a non-breathing patient needs immediate help before any history-taking",
            "Symptoms should be asked twice, not once",
            "They should have asked about symptoms even earlier"],
   answer:1},

  {id:"q48", dim:"systematic", difficulty:"medium", timer:55,
   prompt:"A two-person check for high-risk medicines requires: nurse A prepares the dose, nurse B independently re-checks the drug and dose against the chart, and only then is it given. The point of nurse B's check is defeated if which of these happens?",
   options:["Nurse B checks the chart in a quiet room",
            "Nurse B simply agrees with nurse A without independently looking at the drug and the chart",
            "Nurse B uses the same chart nurse A used",
            "Nurse B signs the record after checking"],
   answer:1},

  {id:"q49", dim:"systematic", difficulty:"medium", timer:55,
   prompt:"Sterile gloves must be put on without the outside surface touching anything unsterile. A worker has scrubbed their hands, opened the sterile glove pack, and is about to put the first glove on. Midway, their bare wrist brushes the outer surface of that glove. What is the correct next step?",
   options:["Carry on — a small touch does not matter",
            "Treat that glove as contaminated and replace it with a fresh sterile one before continuing",
            "Wipe the glove on their gown and continue",
            "Take off both gloves and skip gloving entirely"],
   answer:1},

  {id:"q50", dim:"systematic", difficulty:"medium", timer:55,
   prompt:"A blood sample must be: (1) labelled at the bedside with the patient's details, (2) placed in the correct tube, (3) sent to the lab. A worker collects several patients' samples first and plans to label them all later at the desk. Why is this unsafe?",
   options:["It is fine, as long as they remember whose is whose",
            "Labelling away from the bedside risks mixing up which sample belongs to which patient",
            "Samples cannot be carried in a tray",
            "The lab prefers unlabelled tubes"],
   answer:1},

  {id:"q51", dim:"systematic", difficulty:"medium", timer:55,
   prompt:"An ointment tube says: 'Apply a thin layer twice daily AFTER washing and drying the affected area.' A patient applies the ointment first, then washes the area. What is the most likely result?",
   options:["The treatment works exactly as intended",
            "Washing afterwards removes much of the ointment, reducing the treatment's effect",
            "The ointment soaks in faster because the skin is dry later",
            "Order makes no difference for skin treatments"],
   answer:1},

  {id:"q52", dim:"systematic", difficulty:"easy", timer:50,
   prompt:"A worker has just removed disposable gloves after a messy task. According to good hygiene practice, what is the correct next step before touching anything clean?",
   options:["Nothing — gloves keep the hands perfectly clean",
            "Wash or sanitise the hands, because hands can still be contaminated after glove removal",
            "Put the same gloves back on",
            "Touch the clean items first, then wash"],
   answer:1},

  {id:"q53", dim:"systematic", difficulty:"hard", timer:60,
   prompt:"A protocol for a transfusion has a deliberate 'final bedside check': just before starting, two staff confirm the blood bag's label matches the patient's wristband. Everything earlier was done correctly hours ago. Why keep this last check even when earlier steps were correct?",
   options:["It is pointless once earlier checks passed",
            "It is the last chance to catch a mix-up (right blood, wrong patient) before harm is done, regardless of earlier steps",
            "It replaces the need for any earlier checks",
            "It is only about checking the expiry date"],
   answer:1},

  {id:"q54", dim:"systematic", difficulty:"hard", timer:60,
   prompt:"An automated pump is set to deliver fluid. The protocol says: program the rate, then have a second person verify the rate before starting. A nurse programs '50' but is unsure whether the units on screen are ml per hour or ml per minute — a big difference. Following sound systematic practice, what should they do?",
   options:["Start it anyway; the pump is usually right",
            "Stop and confirm the units before starting, since the same number means very different doses",
            "Halve the number to be safe and start",
            "Switch the pump off and give the fluid by hand instead"],
   answer:1},

  {id:"q55", dim:"systematic", difficulty:"hard", timer:60,
   prompt:"A checklist before a minor procedure has independent items: confirm patient identity, confirm the correct site/side, confirm allergies, confirm consent. A team is running late and proposes 'combining' the identity and site checks into one quick glance to save time. What is the soundest objection?",
   options:["No objection — combining steps always saves safe time",
            "Each item guards against a different specific error; merging them makes it easier to miss one of those errors",
            "The checklist should simply be skipped when late",
            "Site checks are unnecessary for minor procedures"],
   answer:1},

  {id:"q56", dim:"systematic", difficulty:"medium", timer:55,
   prompt:"Instructions for a home blood-pressure monitor: (1) sit and rest quietly for 5 minutes, (2) place the cuff on a bare upper arm, (3) keep the arm supported at heart height, (4) take the reading without talking. A user takes the reading immediately after rushing up the stairs, while talking. Which steps did they break?",
   options:["Only step 2",
            "Steps 1 and 4 — they did not rest first and they talked during the reading",
            "Only step 3",
            "None — these steps do not affect the reading"],
   answer:1},

  {id:"q57", dim:"systematic", difficulty:"medium", timer:55,
   prompt:"A discharge process is: (1) doctor confirms patient is medically ready, (2) medicines to take home are prepared and explained, (3) follow-up appointment is arranged, (4) patient leaves. Staff let the patient leave after step 1, planning to phone the medicine details later. What is the main risk?",
   options:["No risk — the order is flexible",
            "The patient goes home without their medicines or instructions, risking incorrect or missed treatment",
            "The follow-up will be booked twice",
            "The doctor's confirmation becomes invalid"],
   answer:1},

  {id:"q58", dim:"systematic", difficulty:"easy", timer:50,
   prompt:"A fridge for storing certain medicines must stay between 2 °C and 8 °C, and the temperature is logged each morning. One morning the log shows 11 °C overnight. What is the correct systematic response?",
   options:["Ignore it — one reading does not matter",
            "Flag the out-of-range reading and check whether the medicines are still safe to use before giving them",
            "Lower the fridge to below 0 °C to compensate",
            "Erase the reading and record 8 °C instead"],
   answer:1},

  /* ── NUMERICAL REASONING IN CONTEXT (q59–q72) — subtypes: concentration/dose, weight-based dose, infusion rate/time, percentage change, percentage-of-percentage, unit conversion, ratio/proportion ── */

  {id:"q59", dim:"numerical", difficulty:"easy", timer:50,
   prompt:"A syrup contains 100 mg of medicine in every 5 ml. A patient needs 300 mg. How many millilitres should be given?",
   options:["10 ml","15 ml","20 ml","6 ml"],
   answer:1},
   /* 100mg/5ml = 20mg/ml; 300/20 = 15 ml ✓ */

  {id:"q60", dim:"numerical", difficulty:"easy", timer:50,
   prompt:"Tablets come in 250 mg each. A patient is prescribed 750 mg per dose. How many tablets make up one dose?",
   options:["2","3","4","1.5"],
   answer:1},
   /* 750/250 = 3 ✓ */

  {id:"q61", dim:"numerical", difficulty:"easy", timer:50,
   prompt:"A medicine must be taken 3 times a day for 5 days. How many doses is that in total?",
   options:["8","12","15","18"],
   answer:2},
   /* 3 × 5 = 15 ✓ */

  {id:"q62", dim:"numerical", difficulty:"medium", timer:55,
   prompt:"A drip is set to deliver 1000 ml over 8 hours. Roughly how many millilitres does it deliver per hour?",
   options:["80 ml/h","100 ml/h","125 ml/h","160 ml/h"],
   answer:2},
   /* 1000/8 = 125 ml/h ✓ */

  {id:"q63", dim:"numerical", difficulty:"medium", timer:55,
   prompt:"A child weighs 15 kg. The dose is 8 mg per kilogram of body weight per dose. How many milligrams is one dose?",
   options:["100 mg","120 mg","150 mg","80 mg"],
   answer:1},
   /* 15 × 8 = 120 mg ✓ */

  {id:"q64", dim:"numerical", difficulty:"medium", timer:55,
   prompt:"A solution is labelled 2 mg per ml. A nurse needs to draw up 30 mg. What volume should be drawn up?",
   options:["10 ml","15 ml","20 ml","60 ml"],
   answer:1},
   /* 30 / 2 = 15 ml ✓ */

  {id:"q65", dim:"numerical", difficulty:"medium", timer:55,
   prompt:"A patient's weight falls from 80 kg to 72 kg. By what percentage did their weight decrease?",
   options:["8%","10%","12%","20%"],
   answer:1},
   /* drop 8 of 80 = 10% ✓ */

  {id:"q66", dim:"numerical", difficulty:"medium", timer:55,
   prompt:"A waiting room has 60 people. 25% are children. Of those children, 40% are under 5 years old. How many children are under 5?",
   options:["6","9","15","24"],
   answer:0},
   /* 60×0.25 = 15 children; 15×0.40 = 6 ✓ */

  {id:"q67", dim:"numerical", difficulty:"easy", timer:50,
   prompt:"A medicine bottle holds 240 ml. The dose is 20 ml. How many full doses are in the bottle?",
   options:["10","12","14","24"],
   answer:1},
   /* 240/20 = 12 ✓ */

  {id:"q68", dim:"numerical", difficulty:"medium", timer:55,
   prompt:"An infusion runs at 50 ml per hour. How long will a 200 ml bag last?",
   options:["2 hours","3 hours","4 hours","5 hours"],
   answer:2},
   /* 200/50 = 4 h ✓ */

  {id:"q69", dim:"numerical", difficulty:"hard", timer:60,
   prompt:"A drug comes as a 5 mg in 2 ml solution. A patient needs 12.5 mg. What volume is required?",
   options:["2.5 ml","5 ml","6.25 ml","10 ml"],
   answer:1},
   /* concentration 2.5 mg/ml; 12.5/2.5 = 5 ml ✓ */

  {id:"q70", dim:"numerical", difficulty:"hard", timer:60,
   prompt:"A 1.5 litre bag of fluid is to be given evenly over 12 hours. About how many millilitres per hour is that? (1 litre = 1000 ml)",
   options:["100 ml/h","125 ml/h","150 ml/h","180 ml/h"],
   answer:1},
   /* 1500/12 = 125 ml/h ✓ */

  {id:"q71", dim:"numerical", difficulty:"hard", timer:60,
   prompt:"A clinic's monthly visits rose from 250 to 300, then the next month fell back from 300 to 270. To the nearest whole percent, what was the second month's percentage change?",
   options:["10% decrease","11% decrease","20% decrease","30% decrease"],
   answer:0},
   /* drop 30 of 300 = 10% decrease ✓ */

  {id:"q72", dim:"numerical", difficulty:"medium", timer:55,
   prompt:"A medicine is mixed with water in a ratio of 1 part medicine to 4 parts water, making 200 ml of mixture in total. How much pure medicine is in it?",
   options:["20 ml","40 ml","50 ml","160 ml"],
   answer:1},
   /* 1+4 = 5 parts; 200/5 = 40 ml medicine ✓ */

  /* ── OBSERVATION & PATTERN RECOGNITION (q73–q86) — subtypes: spot-the-difference (notes/labels), bar-chart anomaly, line-chart trend, outlier in number set, peak/change detection, comparison from chart ── */

  {id:"q73", dim:"observation", difficulty:"easy", timer:50,
   prompt:"Two prescription labels are checked side by side:\n\nLabel 1: 'Paracetamol 500 mg — take TWO tablets every 6 hours — max 8 in 24 hours'\nLabel 2: 'Paracetamol 500 mg — take TWO tablets every 4 hours — max 8 in 24 hours'\n\nWhat is the only difference?",
   options:["The drug name","The tablet strength","The time interval between doses","The maximum per day"],
   answer:2},

  {id:"q74", dim:"observation", difficulty:"easy", timer:55,
   prompt:"The chart shows a patient's resting heart rate (beats per minute) recorded over six days. Which day stands out as unusual compared with the others?",
   chart:barChart(["Mon","Tue","Wed","Thu","Fri","Sat"], [72,70,74,71,118,73], "beats / min"),
   options:["Monday","Wednesday","Friday","Saturday"],
   answer:2},
   /* all ~70-74 except Fri at 118 ✓ */

  {id:"q75", dim:"observation", difficulty:"medium", timer:55,
   prompt:"The chart shows a patient's weight (kg) over five weeks of a recovery plan. Which description best fits the trend?",
   chart:lineChart([58, 60, 62, 64, 66], "weight (kg)"),
   options:["Weight fell steadily each week",
            "Weight rose by a steady 2 kg each week",
            "Weight stayed flat the whole time",
            "Weight rose sharply then crashed"],
   answer:1},
   /* +2 each week ✓ */

  {id:"q76", dim:"observation", difficulty:"medium", timer:55,
   prompt:"A lab repeats the same measurement on six identical samples: 5.0, 5.1, 4.9, 5.0, 5.2, 0.5. A careful technician should:",
   options:["Report all six values without comment",
            "Treat 0.5 as a likely outlier or error and re-check that sample before reporting",
            "Throw away the five high values and keep only 0.5",
            "Average everything to hide the odd value"],
   answer:1},

  {id:"q77", dim:"observation", difficulty:"medium", timer:55,
   prompt:"Two sets of notes describe the same patient an hour apart:\n\nEarlier: 'Alert, speaking in full sentences, skin warm and dry, no pain reported.'\nLater: 'Drowsy, speaking in short phrases, skin cool and clammy, reports chest pain.'\n\nHow many of the four described features have changed?",
   options:["One","Two","Three","Four"],
   answer:3},
   /* alertness, speech, skin, pain — all 4 changed ✓ */

  {id:"q78", dim:"observation", difficulty:"medium", timer:55,
   prompt:"The chart shows the number of new infections reported each week on a ward. Which statement is best supported?",
   chart:lineChart([2, 3, 9, 4, 2, 1], "new infections / week"),
   options:["Infections rose steadily every week",
            "There was a clear spike in week 3, after which numbers fell back down",
            "Infections were highest in the final week",
            "There were no infections at any point"],
   answer:1},
   /* peak at week 3 (9) then decline ✓ */

  {id:"q79", dim:"observation", difficulty:"easy", timer:55,
   prompt:"The chart shows how much fluid (ml) a patient drank each day over five days. On which day did intake drop the most compared with the day before?",
   chart:barChart(["Day1","Day2","Day3","Day4","Day5"], [1500,1450,800,1400,1480], "ml / day"),
   options:["Day 2","Day 3","Day 4","Day 5"],
   answer:1},
   /* Day3: 1450→800 = -650, biggest drop ✓ */

  {id:"q80", dim:"observation", difficulty:"medium", timer:55,
   prompt:"The chart compares the number of patients seen by two clinics in a week. Which statement does the chart support?",
   chart:barChart(["Clinic A","Clinic B"], [150, 100], "patients"),
   options:["Clinic A saw 50% more patients than Clinic B",
            "Clinic A saw twice as many as Clinic B",
            "Clinic B saw more than Clinic A",
            "They saw the same number"],
   answer:0},
   /* 150 vs 100 = 50% more ✓ */

  {id:"q81", dim:"observation", difficulty:"hard", timer:60,
   prompt:"The chart shows a patient's temperature (°C) measured every 4 hours. Which reading of the data is most accurate?",
   chart:lineChart([37.0, 37.2, 38.5, 38.6, 37.4, 37.1], "temperature (°C)"),
   options:["The temperature climbed steadily the whole time",
            "There was a temporary fever that peaked in the middle and then settled back near the starting level",
            "The temperature fell throughout",
            "The temperature never changed"],
   answer:1},
   /* rise to ~38.6 mid then back to ~37 ✓ */

  {id:"q82", dim:"observation", difficulty:"hard", timer:60,
   prompt:"Three vital-sign readings are taken. A trainee says the patient is 'clearly getting worse across the board.' The readings are:\n\nReading 1 → heart rate 80, oxygen 98%\nReading 2 → heart rate 95, oxygen 97%\nReading 3 → heart rate 110, oxygen 98%\n\nWhat is the most accurate observation?",
   options:["Everything is worsening, including oxygen",
            "Heart rate is rising steadily, but oxygen has stayed roughly steady — only one measure is clearly trending",
            "Oxygen is falling sharply while heart rate is stable",
            "Nothing is changing at all"],
   answer:1},
   /* HR rises 80→95→110; oxygen 98/97/98 steady ✓ */

  {id:"q83", dim:"observation", difficulty:"easy", timer:50,
   prompt:"Two medicine boxes look almost identical. Spot the difference:\n\nBox 1: 'Insulin 100 units/ml — 10 ml vial'\nBox 2: 'Insulin 100 units/ml — 3 ml cartridge'\n\nWhat differs between them?",
   options:["The drug strength (units/ml)","The container type and volume","The drug name","Nothing differs"],
   answer:1},

  {id:"q84", dim:"observation", difficulty:"medium", timer:55,
   prompt:"The chart shows a wound's measured size (mm across) over six clinic visits. What is the overall pattern?",
   chart:lineChart([40, 34, 28, 22, 16, 10], "wound size (mm)"),
   options:["The wound is getting steadily smaller — healing well",
            "The wound is getting steadily larger",
            "The wound size is not changing",
            "The wound shrinks then grows back"],
   answer:0},
   /* steady decrease ✓ */

  {id:"q85", dim:"observation", difficulty:"medium", timer:55,
   prompt:"A monitor logs oxygen levels (%) once an hour: 97, 96, 97, 88, 96, 97. Which single reading most deserves a closer look?",
   options:["The first 97","The 88","The final 97","All readings are equally normal"],
   answer:1},
   /* 88 is the lone dip ✓ */

  {id:"q86", dim:"observation", difficulty:"hard", timer:60,
   prompt:"The bar chart shows medication errors reported per month after a new safety system was introduced at the start of February. What does the data most support?",
   chart:barChart(["Jan","Feb","Mar","Apr","May"], [18, 17, 9, 8, 7], "errors / month"),
   options:["Errors were already falling fast before February, so the system made no difference",
            "Errors were fairly flat before February and dropped noticeably from March onward, consistent with the new system helping",
            "Errors rose after the new system",
            "The chart shows errors disappeared entirely"],
   answer:1},
   /* Jan→Feb flat (18,17); Mar onward 9,8,7 drop ✓ */

  /* ── ETHICAL & PRINCIPLED REASONING (q87–q100) — subtypes: consent/refusal, confidentiality vs safeguarding, fair allocation, truth-telling, duty of care vs loyalty, honesty about errors ── */

  {id:"q87", dim:"ethics", difficulty:"easy", timer:50,
   prompt:"A patient with full mental capacity wants to read their own medical records. A clerk is unsure whether to allow it. Which response best respects the patient's rights?",
   options:["Refuse — records are only for staff",
            "Support the patient's reasonable request to access their own information, following the proper process",
            "Allow it only if the patient explains why",
            "Hand over another patient's file to save time"],
   answer:1},

  {id:"q88", dim:"ethics", difficulty:"easy", timer:50,
   prompt:"A healthcare worker realises they gave a patient a slightly wrong dose. The patient is unharmed and unaware. What is the most principled action?",
   options:["Say nothing, since no harm was done",
            "Report the error honestly so it can be checked and prevented in future, and inform the patient appropriately",
            "Quietly change the records to match what was given",
            "Blame the pharmacy to avoid trouble"],
   answer:1},

  {id:"q89", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A researcher wants to include a patient in a study. The patient agrees but clearly has not understood that they can drop out at any time without affecting their care. What should happen before they take part?",
   options:["Proceed — a 'yes' is enough on its own",
            "Make sure the patient genuinely understands the study and their right to withdraw, so their consent is truly informed",
            "Skip the explanation to avoid confusing them",
            "Enrol them and explain later if they ask"],
   answer:1},

  {id:"q90", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A friend asks a hospital worker to look up a celebrity patient's diagnosis 'just out of curiosity.' The worker can access the record. What is the principled response?",
   options:["Look it up — curiosity is harmless",
            "Refuse, because accessing records without a care-related reason breaches the patient's confidentiality",
            "Look it up but only share a little",
            "Ask a colleague to look instead"],
   answer:1},

  {id:"q91", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A gift of money is offered to a nurse by a grateful patient's family, on condition that the nurse 'makes sure their relative jumps the waiting list.' What is the most principled response?",
   options:["Accept — the family is simply being generous",
            "Decline, because allocating care by payment rather than clinical need is unfair to other patients",
            "Accept the money but do nothing in return",
            "Move the relative up the list quietly without the money"],
   answer:1},

  {id:"q92", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"Two patients arrive at once. Patient X has a life-threatening but treatable emergency; patient Y has a painful but non-urgent problem. Y arrived first and is annoyed at waiting. How should priority be decided?",
   options:["First come, first served — see Y first",
            "By clinical urgency — treat the life-threatening emergency (X) first, while keeping Y informed",
            "Whoever complains loudest",
            "Toss a coin between them"],
   answer:1},

  {id:"q93", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A patient who does not speak the local language is about to consent to a procedure. No interpreter is present, and staff are tempted to 'just get a signature' using gestures. What is the principled course?",
   options:["Get the signature with gestures — it is faster",
            "Arrange proper interpretation so the patient truly understands before consenting",
            "Ask another patient nearby to translate informally",
            "Proceed without consent since it is routine"],
   answer:1},

  {id:"q94", dim:"ethics", difficulty:"easy", timer:50,
   prompt:"A worker is asked to perform a task they have never been trained to do, and they are not confident they can do it safely. What is the most principled action?",
   options:["Attempt it anyway to seem capable",
            "Say honestly that they are not trained for it and ask for supervision or for someone qualified to do it",
            "Refuse and walk away without telling anyone",
            "Do half of it and leave the rest"],
   answer:1},

  {id:"q95", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A patient shares a personal detail and says 'please don't write that in my notes.' The detail is directly relevant to their safe treatment. How should the worker handle the tension between privacy and good care?",
   options:["Leave it out entirely to honour the request",
            "Explain why the information matters for safe care, record what is clinically necessary, and limit who can see it",
            "Write it down and tell everyone on the ward",
            "Ignore the patient's concern without explanation"],
   answer:1},

  {id:"q96", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A junior worker sees a senior colleague repeatedly skipping hand hygiene between patients. They feel awkward challenging someone senior. What is the most principled action?",
   options:["Say nothing, because the colleague is more senior",
            "Raise the concern appropriately — patient safety matters more than rank or discomfort",
            "Copy the senior's behaviour to fit in",
            "Tell other patients to avoid that colleague"],
   answer:1},

  {id:"q97", dim:"ethics", difficulty:"hard", timer:60,
   prompt:"A competent adult patient refuses a treatment that staff strongly believe would help them. The patient understands the risks of refusing. A new staff member suggests simply not mentioning the refusal so the treatment can go ahead. Why is that wrong?",
   options:["It is not wrong — staff know best",
            "Giving treatment a competent patient has knowingly refused ignores their right to decide about their own body",
            "It is only wrong if the patient later complains",
            "Refusals can be overridden whenever staff disagree"],
   answer:1},

  {id:"q98", dim:"ethics", difficulty:"hard", timer:60,
   prompt:"During a disaster there are far more injured people than staff can treat at once. A team must decide who to treat first. Which principle is the most defensible basis for these hard choices?",
   options:["Treat the wealthiest or most important people first",
            "Aim to do the most good with limited resources — prioritise by clinical need and likely benefit, applied consistently to everyone",
            "Treat friends and relatives of staff first",
            "Treat whoever shouts the loudest"],
   answer:1},

  {id:"q99", dim:"ethics", difficulty:"hard", timer:60,
   prompt:"A patient asks a worker to lie to their insurance company by recording a condition the patient does not actually have, so a claim will be paid. The worker feels sympathy for the patient's money worries. What is the principled response?",
   options:["Record the false condition — it helps someone in need",
            "Decline to falsify records, because honesty and accurate documentation protect everyone, even when the motive is sympathetic",
            "Record it but add a note that it might be untrue",
            "Ask a colleague to record the false detail instead"],
   answer:1},

  {id:"q100", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A clinical trial offers a struggling patient a large payment to join a risky study. Staff worry the money alone is driving the decision. What is the main ethical concern?",
   options:["There is no concern — payment makes recruitment easier",
            "A large payment may pressure someone into accepting risks they would otherwise refuse, undermining truly free consent",
            "The payment should simply be doubled",
            "Money has no bearing on consent"],
   answer:1}
]
};
if (window.__bootAssessment) window.__bootAssessment();
