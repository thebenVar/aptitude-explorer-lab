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

  {id:"q1", dim:"bio", timer:50,
   /* straightforward pipe-blockage analogy */
   prompt:"Think of blood vessels as water pipes carrying fluid around a building. If a pipe narrows to half its width, what happens to the pressure needed to push the same amount of water through at the same speed?",
   options:["The pressure required stays the same — narrowing does not affect it",
            "The pressure required decreases — less space means the water moves more easily",
            "The pressure required increases significantly — the fluid must be forced through a tighter gap",
            "The flow stops entirely — water cannot move through a narrowed pipe"],
   answer:2},

  {id:"q2", dim:"bio", timer:55,
   /* domino effect — oxygen delivery chain */
   prompt:"Oxygen is carried from your lungs to your muscles by red blood cells moving through your bloodstream. If the number of red blood cells in your body fell sharply, which sequence of effects would you most logically expect?",
   options:["Less oxygen delivered to muscles → muscles tire more quickly → breathing rate increases to try to compensate",
            "More oxygen delivered to muscles → muscles tire less quickly → breathing rate decreases",
            "No immediate effect — the lungs would simply produce more oxygen to make up for it",
            "The heart slows down because less work is needed to pump fewer cells"],
   answer:0},

  {id:"q3", dim:"bio", timer:50,
   /* TRICKY — sweating is a cooling mechanism, not a warming one */
   prompt:"On a hot day your body begins to sweat heavily. A friend says: 'Sweating means your body is generating extra heat.' Is this correct?",
   options:["Yes — sweating is the body's way of producing warmth during physical effort",
            "No — sweating is a cooling mechanism; water evaporating from your skin takes heat away from your body",
            "Yes — the salt in sweat acts as an insulator, trapping warmth",
            "No — sweat glands generate cold directly, like a refrigerator"],
   answer:1},

  {id:"q4", dim:"bio", timer:55,
   /* cause-effect in a feedback loop: blood sugar regulation analogy */
   prompt:"Imagine a thermostat that turns a heater on when a room gets too cold and off when it warms up again. A similar 'switch on / switch off' control system operates in the body to keep blood sugar levels stable. If the 'switch off' signal fails and blood sugar keeps rising, what is the most logical consequence?",
   options:["Blood sugar levels would stabilise at a lower level than usual",
            "Blood sugar levels would continue rising unchecked, because nothing is stopping them",
            "The body would automatically replace the faulty signal with a backup system of equal strength",
            "Blood sugar levels would start falling rapidly because the system overcompensates"],
   answer:1},

  {id:"q5", dim:"bio", timer:50,
   /* domino: if kidneys cannot filter, toxins build up */
   prompt:"The kidneys act like a filter — they remove waste products from the blood and pass them out in urine. If both kidneys stopped working completely, what would happen over time?",
   options:["The liver would automatically take over filtration, so nothing would change",
            "Urine production would double as the body tried to compensate",
            "Waste products would accumulate in the blood, because there is no longer anything removing them",
            "The body would begin filtering waste through the skin instead"],
   answer:2},

  {id:"q6", dim:"bio", timer:60,
   /* TRICKY — more antibiotics ≠ faster recovery always; correct answer is resistance/ecosystem disruption */
   prompt:"A person takes a prescribed course of antibiotics and feels completely better after four days, even though the prescription is for seven days. They stop taking the tablets early. From a cause-and-effect perspective, what is the most important risk?",
   options:["None — if symptoms are gone, the infection is fully cleared and it is safe to stop",
            "The remaining bacteria — which may be the hardiest ones — could survive, multiply, and become harder to treat in future",
            "Stopping early causes the antibiotic to reverse its effect and make the infection worse immediately",
            "The unused tablets will expire and cannot be used for anything else"],
   answer:1},

  /* ── SYSTEMATIC & SEQUENTIAL THINKING (q7–q12) ── */

  {id:"q7", dim:"systematic", timer:45,
   prompt:"A nurse must prepare a patient for a blood test. The correct order is: (1) explain the procedure to the patient, (2) put on gloves, (3) clean the skin with a swab, (4) insert the needle, (5) collect the sample, (6) remove the needle and apply pressure. A colleague suggests doing step 3 after step 4. Why is that wrong?",
   options:["It is not wrong — cleaning can happen at any point before the needle is removed",
            "Cleaning after inserting the needle cannot sterilise the puncture site in time, so it serves no purpose and the patient is exposed to unnecessary infection risk",
            "The swab would interfere with blood flow once the needle is in",
            "Regulations require the swab to be used last"],
   answer:1},

  {id:"q8", dim:"systematic", timer:55,
   /* TRICKY: step is missing from a 5-step hand-wash protocol */
   prompt:"A hospital hand-washing protocol has five steps: (1) wet hands, (2) apply soap, (3) scrub all surfaces for 20 seconds, (4) rinse thoroughly, (5) dry with a single-use towel. A student completes steps 1, 2, 3, and 5 — skipping step 4. What is the problem?",
   options:["There is no problem — drying removes any soap left on the hands",
            "Soap and loosened bacteria remain on the hands; without rinsing they are transferred to the towel and then back to the hands",
            "The 20-second scrub time is reduced by skipping the rinse",
            "Skipping step 4 only matters if the student will touch food immediately after"],
   answer:1},

  {id:"q9", dim:"systematic", timer:50,
   prompt:"Below are instructions for diluting a cleaning solution. Which sequence is correct?\n(A) Add concentrate to water  (B) Add water to concentrate",
   options:["Sequence B — always add water to concentrate so you can control the volume",
            "Either order works — the final mixture is identical either way",
            "Sequence A — always add concentrate to water, because adding water to a concentrated solution can cause a dangerous heat reaction or splashing",
            "Sequence B — water should always go in last to seal the concentrate"],
   answer:2},

  {id:"q10", dim:"systematic", timer:55,
   /* identifying what step comes NEXT in an incomplete protocol */
   prompt:"A healthcare assistant is sterilising reusable instruments. They have completed: cleaning off visible debris, rinsing with water, and drying. What is the correct next step before the instruments can be used on another patient?",
   options:["Use the instruments immediately — they have been cleaned and dried",
            "Store them in a sealed bag — drying is the final step",
            "Apply the sterilisation process (heat, chemical, or UV) — cleaning removes dirt but does not kill all pathogens",
            "Label them with the date they were cleaned"],
   answer:2},

  {id:"q11", dim:"systematic", timer:50,
   /* why order matters — medication before or after food */
   prompt:"Some medications must be taken with food, and some must be taken on an empty stomach. A patient is prescribed one of each type and takes both together, on an empty stomach, because it is more convenient. What is the likely consequence?",
   options:["No consequence — the body will automatically sort out which drug needs food and which does not",
            "One drug may be absorbed too quickly or cause stomach irritation because food was absent; the other may actually work correctly",
            "Both drugs will be equally ineffective because they were taken together",
            "Taking drugs on an empty stomach always improves their effectiveness"],
   answer:1},

  {id:"q12", dim:"systematic", timer:60,
   /* TRICKY: obvious answer is 'check the label again' but the right answer is stop and verify with a senior */
   prompt:"A student nurse is about to administer a medication. They notice the dose written in the patient's chart (500 mg) is double the standard dose listed on the drug information sheet (250 mg). The ward is busy. What should they do?",
   options:["Administer 500 mg as written — the doctor who prescribed it knows the patient best",
            "Administer 250 mg — the drug sheet takes precedence over the chart",
            "Stop, do not administer the medication yet, and immediately verify the discrepancy with a senior clinician before proceeding",
            "Average the two figures and give 375 mg as a safe middle ground"],
   answer:2},

  /* ── NUMERICAL REASONING IN CONTEXT (q13–q18) ── */

  {id:"q13", dim:"numerical", timer:50,
   prompt:"A liquid medicine contains 200 mg of active ingredient in every 5 ml of liquid. A patient needs a dose of 600 mg. How many millilitres should be given?",
   options:["10 ml",
            "15 ml",
            "20 ml",
            "30 ml"],
   answer:1},
   /* 200mg/5ml = 40mg/ml; 600mg ÷ 40mg/ml = 15ml ✓ */

  {id:"q14", dim:"numerical", timer:55,
   /* TRICKY — percentage of a percentage */
   prompt:"A hospital ward has 40 beds. 75% of them are occupied. Of the occupied beds, 20% contain patients who have been there for more than a week. How many patients have been in the ward for more than a week?",
   options:["6",
            "8",
            "10",
            "12"],
   answer:0},
   /* 40 × 0.75 = 30 occupied; 30 × 0.20 = 6 ✓ */

  {id:"q15", dim:"numerical", timer:55,
   prompt:"A drip delivers fluid to a patient at a rate of 80 ml per hour. The bag contains 500 ml when it is set up. Roughly how long will the bag last before it runs empty?",
   options:["About 4 hours",
            "About 5 hours and 15 minutes",
            "About 6 hours and 15 minutes",
            "About 7 hours"],
   answer:2},
   /* 500 ÷ 80 = 6.25 hours = 6 hours 15 minutes ✓ */

  {id:"q16", dim:"numerical", timer:60,
   /* reading a simple table */
   prompt:"A patient's temperature is recorded four times a day. The readings over two days are shown here:\n\nDay 1 — 8am: 37.2 °C, 12pm: 37.8 °C, 4pm: 38.4 °C, 8pm: 38.1 °C\nDay 2 — 8am: 37.5 °C, 12pm: 37.3 °C, 4pm: 37.1 °C, 8pm: 36.9 °C\n\nWhat is the difference between the highest temperature recorded and the lowest?",
   options:["1.2 °C",
            "1.5 °C",
            "1.3 °C",
            "1.6 °C"],
   answer:1},
   /* Highest: 38.4 °C (Day 1, 4pm); Lowest: 36.9 °C (Day 2, 8pm); difference = 1.5 °C ✓ */

  {id:"q17", dim:"numerical", timer:50,
   prompt:"A child weighs 20 kg. The prescribed dose of a pain-relief syrup is 10 mg per kilogram of body weight. The syrup contains 50 mg per 5 ml. How many millilitres should the child receive?",
   options:["10 ml",
            "20 ml",
            "25 ml",
            "40 ml"],
   answer:1},
   /* Dose needed: 20 kg × 10 mg/kg = 200 mg; Syrup concentration: 50 mg/5 ml = 10 mg/ml; Volume = 200 mg ÷ 10 mg/ml = 20 ml ✓ */

  {id:"q18", dim:"numerical", timer:55,
   /* TRICKY — percentage increase vs absolute change */
   prompt:"Last month a clinic saw 120 patients. This month it saw 150 patients. By what percentage did the number of patients increase?",
   options:["20%",
            "25%",
            "30%",
            "80%"],
   answer:1},
   /* Increase = 30; percentage = 30/120 × 100 = 25% ✓ */

  /* ── OBSERVATION & PATTERN RECOGNITION (q19–q24) ── */

  {id:"q19", dim:"observation", timer:50,
   /* spot the difference between two patient descriptions */
   prompt:"Two patient notes describe a wound dressing check. Read both carefully and identify what has changed.\n\nNote A: 'Wound edges approximated, no redness, no swelling, small amount of clear fluid, dressing dry and intact.'\nNote B: 'Wound edges approximated, no swelling, moderate yellow discharge, dressing partially saturated, slight redness at wound edges.'\n\nHow many observable differences are there between Note A and Note B?",
   options:["One — the amount of fluid",
            "Two — the fluid type and the dressing condition",
            "Three — the fluid type, the dressing condition, and redness",
            "Four — the fluid type, the fluid amount description, the dressing condition, and redness"],
   answer:3},
   /* Note A: no redness / Note B: redness. Note A: clear fluid / Note B: yellow discharge. Note A: small amount / Note B: moderate. Note A: dressing dry and intact / Note B: dressing partially saturated. = 4 differences ✓ */

  {id:"q20", dim:"observation", timer:55,
   /* bar chart — identify the anomaly */
   prompt:"The chart below shows a patient's daily fluid intake (in ml) over six days. Which day shows an unusual reading compared with the overall trend?",
   chart:barChart(["Mon","Tue","Wed","Thu","Fri","Sat"], [1800,1750,1820,950,1790,1810], "ml / day"),
   options:["Monday",
            "Wednesday",
            "Thursday",
            "Saturday"],
   answer:2},
   /* All days cluster around 1750–1820 ml except Thursday at 950 ml — clear anomaly ✓ */

  {id:"q21", dim:"observation", timer:55,
   /* line chart — describe the trend correctly */
   prompt:"The chart below shows a patient's recorded pain score (0 = no pain, 10 = worst pain) over eight days of treatment. Which description best fits the overall trend?",
   chart:lineChart([8, 7, 6, 6, 5, 4, 4, 3], "pain score (0–10)"),
   options:["The pain score rises steadily throughout treatment",
            "The pain score fluctuates randomly with no clear direction",
            "The pain score decreases overall, with two periods where it stays level before dropping again",
            "The pain score drops sharply at first, then spikes back to its starting level"],
   answer:2},
   /* Scores: 8,7,6,6,5,4,4,3 — general downward trend with level periods at 6,6 and 4,4 ✓ */

  {id:"q22", dim:"observation", timer:50,
   /* find the anomaly in a sequence of lab values */
   prompt:"A lab runs the same test on five samples from the same batch. The results are: 4.2, 4.1, 4.3, 4.2, 7.8. What should a careful observer do?",
   options:["Record all five values and move on — variation is expected in any test",
            "Discard the middle three values and only report the first and last",
            "Flag the value of 7.8 as a likely error or outlier and re-run or check that sample before reporting",
            "Average all five values together to smooth out the anomaly"],
   answer:2},

  {id:"q23", dim:"observation", timer:50,
   /* spot the difference: two medication labels */
   prompt:"A pharmacy technician is checking two bottles before dispensing. Study both labels:\n\nBottle 1: 'Amoxicillin 250 mg capsules — take ONE capsule THREE times daily — 21 capsules'\nBottle 2: 'Amoxicillin 250 mg capsules — take ONE capsule THREE times daily — 28 capsules'\n\nWhat is the only difference between the two labels?",
   options:["The drug name",
            "The dosage strength",
            "The dosing instructions",
            "The quantity of capsules"],
   answer:3},

  {id:"q24", dim:"observation", timer:55,
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

  {id:"q25", dim:"ethics", timer:55,
   /* consent — patient has the right to refuse */
   prompt:"A patient is admitted to hospital and is found to need a blood transfusion to recover safely. The patient is fully conscious and clearly states they do not want a transfusion for personal reasons. The doctor believes the patient will deteriorate without it. What is the most principled course of action?",
   options:["Administer the transfusion — the doctor's duty to preserve life overrides the patient's preference",
            "Respect the patient's refusal, ensure they understand the consequences, document the decision, and continue to provide the best care possible within those limits",
            "Delay treatment until the patient becomes unconscious, then administer the transfusion",
            "Ask the patient's family to overrule the patient's decision"],
   answer:1},

  {id:"q26", dim:"ethics", timer:50,
   /* confidentiality vs safeguarding */
   prompt:"A teenage patient tells a doctor in confidence that a family member is regularly hurting them at home. The patient begs the doctor not to tell anyone. What is the most principled action?",
   options:["Keep the information completely confidential — the patient's privacy must be respected absolutely",
            "Tell the patient's family immediately so they can deal with the situation",
            "Explain to the patient that while you respect their trust, protecting them from ongoing harm means reporting this to the appropriate safeguarding authority — and that you will do so",
            "Do nothing until the patient raises it again of their own accord"],
   answer:2},

  {id:"q27", dim:"ethics", timer:55,
   /* fairness / resource allocation */
   prompt:"A hospital has one remaining dose of a scarce medicine. Two patients need it equally urgently. Patient A is well-connected and their family is putting pressure on hospital staff. Patient B has no connections and no family present. How should the decision be made?",
   options:["Give it to Patient A — family advocacy shows greater need",
            "Give it to Patient B — the less powerful patient deserves protection",
            "Allocate it based on clinical criteria only (such as who is likely to benefit most or who has waited longer), entirely independent of social connections or pressure",
            "Flip a coin — if both are equally urgent, chance is fairest"],
   answer:2},

  {id:"q28", dim:"ethics", timer:60,
   /* TRICKY — truth-telling vs 'protecting' the patient */
   prompt:"An elderly patient asks their doctor directly: 'Do I have cancer?' The patient's adult children have separately asked the doctor not to tell their parent, insisting it 'would destroy them.' The test results confirm the patient does have cancer. What is the most principled response?",
   options:["Respect the family's wishes and tell the patient nothing — they know their parent best",
            "Tell the patient the full truth if they are asking directly and have the mental capacity to receive it — a patient has the right to know their own diagnosis",
            "Give a vague non-answer and change the subject",
            "Tell the patient only if they ask again on a second visit"],
   answer:1},

  {id:"q29", dim:"ethics", timer:50,
   /* duty of care vs personal risk */
   prompt:"During a busy shift, a healthcare worker notices that a colleague appears to be intoxicated at work. The colleague is currently caring for patients. What is the most principled action?",
   options:["Say nothing — reporting a colleague would damage team trust and morale",
            "Send the colleague an anonymous note later to warn them",
            "Raise the concern immediately with a senior member of staff, because patient safety must take priority over collegial loyalty",
            "Wait until the end of the shift to observe whether the colleague makes any visible mistakes before deciding"],
   answer:2},

  {id:"q30", dim:"ethics", timer:55,
   /* TRICKY — doing something for efficiency vs informed consent */
   prompt:"A busy clinic is running an hour behind schedule. A clinician decides to skip the usual explanation of a minor procedure and just carry it out, reasoning: 'It is routine, harmless, and explaining it wastes time we do not have.' Is this approach acceptable?",
   options:["Yes — if the procedure is genuinely routine and low-risk, consent is implied by the patient attending the clinic",
            "Yes — time pressure is a valid clinical reason to modify consent procedures",
            "No — every patient has the right to understand what will be done to them and to agree or refuse, regardless of how routine or busy things are",
            "Only acceptable if the patient does not specifically ask what is happening"],
   answer:2}
]
};
if (window.__bootAssessment) window.__bootAssessment();
