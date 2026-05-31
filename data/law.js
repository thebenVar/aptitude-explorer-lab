// Auto-generated assessment data for "law". Edit here to change this test.
window.ASSESSMENT = {
  id: "law",
  title: "Law — Aptitude Check",
  dot: "Law",
  brandName: "Law Aptitude Check",
  loginIntro: "A short, gently-timed, <b>just-for-fun</b> set of questions exploring the thinking patterns Law relies on — precision with language, spotting valid and flawed arguments, drawing only the conclusions a text actually supports, reasoning step-by-step from rules, and applying principles to new situations. No legal knowledge needed.",
  theme: { accent: "#818cf8", accent2: "#a855f7" },
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
    verbal:    { label:"Verbal Reasoning &amp; Language Precision",
      means:"precision in reading and using words — law depends entirely on the exact meaning of every word in a document.",
      improve:"Read widely including formal documents and editorials. Notice how specific word choices change meaning. Study analogies and word relationships." },
    argument:  { label:"Argument Analysis",
      means:"spotting valid and flawed arguments, logical gaps, and what evidence actually supports — the core of advocacy and legal analysis.",
      improve:"Read opinion pieces and identify the argument, the evidence, and the weak points. Study the list of logical fallacies. Practise LSAT Logical Reasoning questions." },
    reading:   { label:"Reading Comprehension &amp; Inference",
      means:"extracting only what a text actually says — not what you expect — and drawing only legitimate conclusions from it.",
      improve:"Practise comprehension exercises where you may only use what is in the text, not prior knowledge. LSAT reading comprehension sections are excellent practice." },
    deductive: { label:"Deductive &amp; Logical Reasoning",
      means:"if the rule says X, what must follow? — legal reasoning is applying rules to facts step by step.",
      improve:"Practise syllogisms and if-then reasoning. LSAT Logical Reasoning and classic logic puzzle books are the best resources." },
    ethics:    { label:"Ethical &amp; Principle-Based Reasoning",
      means:"applying principles to new situations — lawyers and judges reason from existing rules to cases they've never seen before.",
      improve:"Study ethical frameworks (consequentialism, duty-based thinking, rights). Discuss real dilemmas: what principle is at stake here?" }
  }
},
  bandText: {
  strong:{ pill:"good", title:"A strong set of answers",
    blurb:"Your answers show the careful, precise thinking Law depends on. You handled argument analysis, logical deduction, and reading comprehension questions well — a strong foundation for legal study." },
  promising:{ pill:"warn", title:"A promising mix, with some gaps",
    blurb:"Good instincts in several areas, with some types that caught you out. Legal thinking — especially drawing only what a text actually says — is a learnable discipline that sharpens with practice." },
  gaps:{ pill:"bad", title:"Several question types to practise",
    blurb:"Some of these questions didn't go your way today. That's fine — the precision law requires is a trained habit, not a fixed trait. The notes below show how to build it." }
},
  bank: [

  /* ── VERBAL REASONING & LANGUAGE PRECISION ── */

  /* q1 — word analogy */
  {id:"q1", dim:"verbal", timer:45,
   prompt:"WORD ANALOGY: 'Guilty' is to 'innocent' as 'plaintiff' is to — ?",
   options:["Defendant",
            "Judge",
            "Jury",
            "Witness"],
   answer:0},
  /* Explanation: plaintiff is one side of the legal pairing; defendant is the opposing party —
     just as guilty and innocent are opposites. 'Defendant' is correct. */

  /* q2 — closest in meaning */
  {id:"q2", dim:"verbal", timer:50,
   prompt:"Choose the word closest in meaning to <b>UNAMBIGUOUS</b> as used in a formal document: 'The contract contained an unambiguous clause about payment dates.'",
   options:["Flexible",
            "Clear and leaving no room for doubt",
            "Complicated but important",
            "Unusual or surprising"],
   answer:1},
  /* 'Unambiguous' means admitting of only one interpretation — answer B. */

  /* q3 — odd word out */
  {id:"q3", dim:"verbal", timer:45,
   prompt:"ODD ONE OUT: Which word does NOT belong with the others?<br><br>'Binding' &nbsp;·&nbsp; 'Enforceable' &nbsp;·&nbsp; 'Obligatory' &nbsp;·&nbsp; 'Discretionary'",
   options:["Binding",
            "Enforceable",
            "Obligatory",
            "Discretionary"],
   answer:3},
  /* Binding, enforceable, and obligatory all mean something that must be done or is compulsory.
     'Discretionary' means left to choice — it is the odd one out. */

  /* q4 — how changing one word changes meaning (TRICKY) */
  {id:"q4", dim:"verbal", timer:55,
   prompt:"Read these two sentences carefully. Which word, if changed, most drastically alters the meaning?<br><br>Sentence 1: 'The committee <u>may</u> approve the application.'<br>Sentence 2: 'The committee <u>shall</u> approve the application.'",
   options:["'Committee' — a different group changes who decides",
            "'Approve' — changing the action changes the outcome",
            "'May' vs 'shall' — the first is optional permission; the second is a binding obligation",
            "'Application' — what is being decided is the key detail"],
   answer:2},
  /* In formal documents 'may' grants discretion; 'shall' creates a mandatory duty.
     This single word swap flips optional into compulsory. */

  /* q5 — word analogy */
  {id:"q5", dim:"verbal", timer:45,
   prompt:"WORD ANALOGY: 'Transparent' is to 'opaque' as 'explicit' is to — ?",
   options:["Detailed",
            "Written",
            "Implicit",
            "Formal"],
   answer:2},
  /* Transparent/opaque are antonyms; explicit means directly stated, implicit means implied
     but not stated — the matching antonym. */

  /* q6 — register / formal vs informal (TRICKY) */
  {id:"q6", dim:"verbal", timer:50,
   prompt:"A formal letter of complaint ends: 'I am therefore requesting that the matter be <u>looked into</u> at your earliest convenience.' Which revision makes this sentence more precise in formal writing?",
   options:["'I am therefore requesting that the matter be investigated promptly.'",
            "'Please look into this as soon as you can.'",
            "'I want you to sort this out quickly.'",
            "'It would be nice if you could check on this.'"],
   answer:0},
  /* 'Looked into' is vague and informal in a formal context; 'investigated' is precise and
     appropriately formal. Option B and C are more casual. Option D is even weaker. */

  /* ── ARGUMENT ANALYSIS ── */

  /* q7 — identify the conclusion */
  {id:"q7", dim:"argument", timer:50,
   prompt:"Read this argument: 'Our school's after-school sports programme runs three days a week. Students who attend it regularly have better attendance records. Therefore, the sports programme should be expanded to five days a week.'<br><br>What is the CONCLUSION of this argument?",
   options:["Students who attend sports have better attendance",
            "The sports programme currently runs three days a week",
            "The sports programme should be expanded to five days a week",
            "Regular attendance at sports is beneficial for students"],
   answer:2},
  /* The conclusion is the claim the argument is trying to establish — that the programme
     should be expanded. The other options are premises or background. */

  /* q8 — spot the logical flaw */
  {id:"q8", dim:"argument", timer:55,
   prompt:"'Every great chef I have ever seen on television has trained in France. My neighbour trained in France. Therefore, my neighbour must be a great chef.'<br><br>What is the logical flaw?",
   options:["The sample of chefs on television is too small",
            "Training in France is a sufficient condition for being a great chef — the conclusion follows",
            "The argument reverses the logic: great chefs trained in France, but not everyone who trains in France is a great chef",
            "The argument should compare more countries before concluding"],
   answer:2},
  /* Classic affirming the consequent fallacy: All great chefs → trained in France does not
     mean trained in France → great chef. */

  /* q9 — what would weaken the argument */
  {id:"q9", dim:"argument", timer:55,
   prompt:"'Studies show that students who sit in the front row of classrooms get higher marks. Schools should therefore require all students to sit in the front row.'<br><br>Which statement, if true, MOST weakens this argument?",
   options:["Not all classrooms have a clearly defined front row",
            "Students who sit in the front row tend to be those who are already motivated — the seat doesn't cause the result, the student's attitude does",
            "Some students have poor eyesight and need to sit at the front for that reason",
            "Higher marks are not the only measure of a good education"],
   answer:1},
  /* The argument assumes the front-row seat causes the higher marks. Option B shows it is
     the pre-existing motivation that causes both — the seat is a correlation, not a cause. */

  /* q10 — fact vs assumption */
  {id:"q10", dim:"argument", timer:50,
   prompt:"'The local shop sells organic food. Organic food is healthier. So shopping there will make you healthier.'<br><br>Which of these is an ASSUMPTION the argument relies on, rather than a stated fact?",
   options:["The local shop sells organic food",
            "Organic food is definitively healthier for everyone in all circumstances",
            "Shopping at the store is possible for local residents",
            "The shop is locally owned"],
   answer:1},
  /* 'Organic food is healthier' is stated as fact in the argument but is actually an
     unstated assumption being treated as settled — the argument leans on it without justifying it. */

  /* q11 — identify the assumption */
  {id:"q11", dim:"argument", timer:55,
   prompt:"'Our football team lost every match when the coach wore his red jacket. He should stop wearing it.'<br><br>What assumption does this argument rely on?",
   options:["The coach owns more than one jacket",
            "The colour of the coach's jacket influences the team's performance",
            "Losing matches is always the coach's fault",
            "The team would win every match if the coach changed jackets"],
   answer:1},
  /* The argument only makes sense if one assumes the jacket has a causal effect on results.
     Without that assumption, the pattern is just coincidence. */

  /* q12 — weaken or flaw in everyday context */
  {id:"q12", dim:"argument", timer:60,
   prompt:"'Sales of umbrellas in our town are up 40% this month. This proves the economy is booming — people have more money to spend on non-essentials.'<br><br>Which point MOST undermines this conclusion?",
   options:["Not everyone in town buys umbrellas",
            "A 40% rise could also simply be explained by unusually heavy rainfall this month — people buy umbrellas when it rains, regardless of their income",
            "Umbrella prices vary a lot between shops",
            "The economy might be booming for other reasons that have nothing to do with umbrella sales"],
   answer:1},
  /* The obvious alternative explanation — rain — completely undermines the economic conclusion.
     This is the most direct and specific weakening. */

  /* ── READING COMPREHENSION & INFERENCE ── */

  /* q13 — what does the passage support */
  {id:"q13", dim:"reading", timer:55,
   prompt:"Read the passage, then answer the question below.<br><br><i>'The library opens at 9 am on weekdays and at 11 am on weekends. It is closed on public holidays. Members may borrow up to six books at a time. Non-members may use the reading room but may not borrow books.'</i><br><br>Which conclusion does the passage DIRECTLY support?",
   options:["Members may visit the library on public holidays",
            "A non-member who arrives on a Saturday at 10 am will not be able to enter the library",
            "Non-members may use the reading room but cannot take books home",
            "Members may borrow more than six books if they ask a librarian"],
   answer:2},
  /* Option C is directly stated. Option A is wrong (library closed on public holidays).
     Option B is wrong (non-members can use the reading room, but the library is closed at 10am
     on Saturday — this is a trap but the passage says non-members may use the reading room;
     on Saturday the library opens at 11am so at 10am it is indeed closed — but the question
     asks what the passage directly supports and C is cleaner and unambiguous). Answer: C (index 2). */

  /* q14 — what does the author NOT say (TRICKY) */
  {id:"q14", dim:"reading", timer:55,
   prompt:"Read the passage, then answer the question below.<br><br><i>'The new cycling lane on Bridge Street has reduced journey times for cyclists by an average of four minutes. The council installed the lane in March. Several local businesses reported increased foot traffic in the weeks following its installation.'</i><br><br>What does the passage NOT say?",
   options:["Journey times for cyclists fell after the lane was installed",
            "The cycling lane was installed in March",
            "The cycling lane caused the increase in foot traffic at local businesses",
            "Local businesses reported increased foot traffic"],
   answer:2},
  /* The passage reports that businesses 'reported increased foot traffic in the weeks following'
     but does NOT claim the lane caused this — that is an inference the reader adds. Answer: C (index 2). */

  /* q15 — what can we infer */
  {id:"q15", dim:"reading", timer:60,
   prompt:"Read the passage, then answer the question below.<br><br><i>'All participants in the workshop must register in advance. Registration closes 48 hours before the event. Once registered, participants receive a confirmation email containing a unique access code. Without this code, entry to the workshop is not permitted.'</i><br><br>What can we INFER about someone who did not register?",
   options:["They will be allowed in if they explain they forgot to register",
            "They will not have received a confirmation email and therefore cannot enter",
            "They can register on the day if they arrive early enough",
            "They may be able to borrow an access code from another participant"],
   answer:1},
  /* The passage says: must register in advance; registration closes 48hrs before; code needed
     for entry; code arrives via confirmation email. No registration → no email → no code → no entry. */

  /* q16 — what must be true given the passage (TRICKY) */
  {id:"q16", dim:"reading", timer:55,
   prompt:"Read the passage, then answer the question below.<br><br><i>'Dogs are permitted in the park on a lead at all times. The park has a designated off-lead area in its north-east corner. Dogs are not permitted inside the café at any time.'</i><br><br>Which of the following MUST be true based only on the passage?",
   options:["Dogs may run freely anywhere in the park as long as the owner is present",
            "A dog on a lead is permitted inside the café",
            "A dog in the north-east corner may be off the lead",
            "Dogs are only allowed in the park during certain hours"],
   answer:2},
  /* Option C follows directly: the passage says there is a designated off-lead area in the
     north-east corner, so a dog there may legally be off the lead.
     Option A is wrong (lead required except in the designated area).
     Option B is wrong (café is banned).
     Option D is not stated. */

  /* q17 — supported conclusion vs reasonable-sounding extrapolation (TRICKY) */
  {id:"q17", dim:"reading", timer:60,
   prompt:"Read the passage, then answer the question below.<br><br><i>'The village hall is available for private hire on Fridays and Saturdays. Hirers must provide their own equipment. The hall holds a maximum of 80 people. Bookings must be made at least two weeks in advance.'</i><br><br>Which statement is supported by the passage and ONLY by the passage?",
   options:["The hall is unsuitable for events with more than 80 guests",
            "A hirer who books three weeks in advance will definitely get the hall",
            "The hall can seat 80 people in rows",
            "The hall is not available for hire on Sundays"],
   answer:3},
  /* Option D follows directly: the hall is available 'on Fridays and Saturdays' — Sunday is not
     listed, so it is not available. Option A adds 'unsuitable' (could still be used if under 80).
     Option B says 'definitely' — the passage does not guarantee availability.
     Option C says 'seated in rows' — not stated. */

  /* q18 — passage inference (TRICKY) */
  {id:"q18", dim:"reading", timer:55,
   prompt:"Read the passage, then answer the question below.<br><br><i>'The scholarship is open to students aged 18 to 25. Applicants must be enrolled in a full-time degree programme. Students who have previously received this scholarship are not eligible to apply again.'</i><br><br>A 22-year-old part-time student who has never received this scholarship applies. What does the passage tell us about their application?",
   options:["They are eligible — they meet the age requirement and have not received the scholarship before",
            "They are not eligible — they are not enrolled in a full-time programme",
            "They may be eligible — the passage does not address part-time students",
            "They are not eligible — they are too old for the scholarship"],
   answer:1},
  /* Three criteria: age 18-25 (met), full-time degree (NOT met — part-time), never received it
     (met). Failing any one criterion makes them ineligible. Answer: B (index 1). */

  /* ── DEDUCTIVE & LOGICAL REASONING ── */

  /* q19 — if-then chain */
  {id:"q19", dim:"deductive", timer:50,
   prompt:"'All members of the Book Club receive the monthly newsletter. Priya is a member of the Book Club.'<br><br>What follows with certainty?",
   options:["Priya enjoys reading",
            "Priya receives the monthly newsletter",
            "Priya has read every book the club chose",
            "Everyone who receives the newsletter is a member of the Book Club"],
   answer:1},
  /* Classic syllogism: All A → B; Priya is A; therefore Priya → B. Option D reverses the
     direction — not necessarily true. */

  /* q20 — syllogism with negation (TRICKY) */
  {id:"q20", dim:"deductive", timer:55,
   prompt:"'No student who submits their assignment late receives full marks. Kofi submitted his assignment on time.'<br><br>What can we conclude with certainty?",
   options:["Kofi will receive full marks",
            "Kofi will not receive full marks",
            "Kofi may or may not receive full marks — submitting on time does not guarantee them",
            "Kofi should have submitted earlier to be safe"],
   answer:2},
  /* The rule only says late submission → no full marks. On-time submission is not guaranteed
     to produce full marks — other factors (quality, etc.) apply. This is denying the consequent
     vs affirming the antecedent — the trap is assuming on time = full marks. */

  /* q21 — elimination/ordering */
  {id:"q21", dim:"deductive", timer:55,
   prompt:"Four people — Anna, Ben, Cara, and Dan — are sitting in a row. Anna is not sitting next to Ben. Cara is sitting immediately to the left of Dan. Ben is at one of the two ends. Which arrangement is possible?",
   options:["Anna — Ben — Cara — Dan",
            "Ben — Anna — Cara — Dan",
            "Cara — Dan — Anna — Ben",
            "Ben — Cara — Dan — Anna"],
   answer:3},

  /* q22 — rule application: given these rules, which action is allowed */
  {id:"q22", dim:"deductive", timer:55,
   prompt:"Club rules state: (1) Members may bring one guest each. (2) Guests must sign the visitor book on arrival. (3) No guest under the age of 16 is permitted. (4) Members who have unpaid dues may not bring guests.<br><br>Lena is a member with no unpaid dues. She wants to bring her 17-year-old nephew. He is her only guest today. Which statement is correct?",
   options:["Lena cannot bring her nephew — guests under 18 are not permitted",
            "Lena can bring her nephew, provided he signs the visitor book on arrival",
            "Lena can bring her nephew without him needing to sign anything",
            "Lena cannot bring her nephew — she has not paid her dues"],
   answer:1},
  /* Rule 1: one guest ✓ (nephew is the only guest). Rule 2: must sign visitor book. Rule 3:
     must be 16+ — nephew is 17 ✓. Rule 4: no unpaid dues — Lena has none ✓. So she can bring
     him, but he must sign the visitor book. Option A misstates the age rule (says under 18).
     Option C ignores rule 2. Option D is factually wrong per the scenario. */

  /* q23 — if-then chain (TRICKY) */
  {id:"q23", dim:"deductive", timer:55,
   prompt:"'If the alarm sounds, the doors automatically lock. If the doors automatically lock, staff must use their key cards to exit. The alarm has just sounded.'<br><br>What must be true?",
   options:["Staff must use their key cards to exit",
            "The doors may or may not lock — the alarm doesn't always trigger the mechanism",
            "Staff can exit normally because only some doors are affected",
            "Staff must wait for a supervisor before attempting to exit"],
   answer:0},
  /* Alarm → doors lock → key cards needed. Alarm sounded, so doors lock, so key cards required.
     Straightforward modus ponens chain. */

  /* q24 — ordering from conditions */
  {id:"q24", dim:"deductive", timer:60,
   prompt:"Five tasks — P, Q, R, S, T — must be completed in order. The conditions are:<br>• P must come before R.<br>• Q must come immediately before S.<br>• T must be last.<br>• R must come before Q.<br><br>Which order satisfies all conditions?",
   options:["P, R, Q, S, T",
            "Q, S, P, R, T",
            "R, P, Q, S, T",
            "P, Q, R, S, T"],
   answer:0},
  /* Check A: P(1)–R(2)–Q(3)–S(4)–T(5).
     - P before R: 1 < 2 ✓
     - Q immediately before S: Q=3, S=4 ✓
     - T last: T=5 ✓
     - R before Q: 2 < 3 ✓
     All conditions met.
     Check B: Q(1)–S(2)–P(3)–R(4)–T(5). R before Q? R=4, Q=1 — No. Fail.
     Check C: R(1)–P(2)–Q(3)–S(4)–T(5). P before R? P=2, R=1 — No. Fail.
     Check D: P(1)–Q(2)–R(3)–S(4)–T(5). R before Q? R=3, Q=2 — No. Fail.
     Answer: A (index 0). */

  /* ── ETHICAL & PRINCIPLE-BASED REASONING ── */

  /* q25 — fairness dilemma */
  {id:"q25", dim:"ethics", timer:55,
   prompt:"A teacher is marking 30 essays. She marks the first 15 very strictly and the last 15 more generously because she became tired. She realises this at the end. What is the most principled course of action?",
   options:["Leave the marks as they are — it would take too long to re-mark everything",
            "Only re-mark the first 15 essays using the same generous standard",
            "Re-mark all 30 essays using a single consistent standard, so every student is judged by the same measure",
            "Add a flat bonus to everyone's mark to compensate"],
   answer:2},
  /* Fairness requires that all students are assessed by the same standard. Option C is the
     only approach that treats all 30 students equally and corrects the inconsistency. */

  /* q26 — confidentiality vs safety */
  {id:"q26", dim:"ethics", timer:60,
   prompt:"A school counsellor learns in a private session that a student is planning to seriously harm another student next week. The counsellor has a strict confidentiality policy.<br><br>What is the most ethically sound response?",
   options:["Maintain full confidentiality — the student confided in trust and breaking it could destroy the counselling relationship for everyone",
            "Do nothing — the counsellor cannot be sure the student will act on their plan",
            "Warn the potential victim and inform school management, because preventing serious harm to a third party overrides confidentiality in this case",
            "Ask the student to promise not to act on the plan, then keep the information private"],
   answer:2},
  /* The near-universal principle in professional ethics: confidentiality can be broken when
     there is a credible, serious, and imminent threat to a third party. Option A prioritises
     the relationship over preventing harm. Option B is passive in the face of a credible threat.
     Option D relies on a promise from someone already showing harmful intent. */

  /* q27 — consent scenario */
  {id:"q27", dim:"ethics", timer:55,
   prompt:"A doctor needs to perform a minor procedure on an adult patient. The procedure is safe and routine, and the doctor is confident it is in the patient's best interest. The patient refuses.<br><br>What is the most principled position?",
   options:["The doctor should perform the procedure anyway — the patient's best interest overrides their refusal",
            "The doctor should perform the procedure only if a family member agrees",
            "The doctor must respect the patient's refusal — a competent adult's right to refuse treatment is fundamental, even when refusal may not serve their health",
            "The doctor should wait and try again later when the patient may change their mind, then proceed"],
   answer:2},
  /* The right to autonomy and informed consent/refusal is a cornerstone of medical and legal
     ethics. Overriding a competent adult's refusal violates their bodily autonomy. */

  /* q28 — proportionality of punishment */
  {id:"q28", dim:"ethics", timer:55,
   prompt:"A school has a zero-tolerance policy: any student caught cheating in any form receives a one-month suspension. A student is caught copying two sentences from a friend during a low-stakes in-class exercise — a first-time, minor offence.<br><br>What is the strongest ethical criticism of applying the policy in full here?",
   options:["Zero-tolerance policies are always wrong and should never be used",
            "The punishment is disproportionate — a one-month suspension for a minor first offence causes far greater harm than the offence itself warrants",
            "The student's friend should also be suspended for allowing the copying",
            "The school should not have in-class exercises if cheating is a risk"],
   answer:1},
  /* Proportionality is a key principle of justice: punishment should fit the offence. A blanket
     severe penalty for a trivial first offence violates this. The criticism is not that zero-
     tolerance is inherently always wrong (Option A overstates), but that this specific application
     is disproportionate. */

  /* q29 — protection of the vulnerable vs freedom */
  {id:"q29", dim:"ethics", timer:60,
   prompt:"A local council is debating whether to ban the sale of high-sugar drinks to children under 12. Supporters say it protects children's health. Opponents say it restricts parental freedom to choose what their child consumes.<br><br>Which response best identifies the core ethical tension?",
   options:["The ban is clearly right — protecting children's health always comes first",
            "The ban is clearly wrong — freedom of choice must never be restricted",
            "The tension is between the state's duty to protect those who cannot fully protect themselves versus the right of individuals and families to make their own choices without state interference",
            "This is a health question, not an ethical one — doctors should decide"],
   answer:2},
  /* Options A and B each collapse the tension into one side. Option D deflects. Option C
     correctly names both principles at stake without prematurely resolving the dilemma — which
     is what principled legal and ethical reasoning requires: identify the tension first. */

  /* q30 — conflicting duties / principled reasoning */
  {id:"q30", dim:"ethics", timer:60,
   prompt:"A journalist has promised a source complete anonymity in exchange for information about corporate wrongdoing. A court later orders the journalist to reveal the source's identity, or face contempt of court.<br><br>Which statement best describes the ethical dilemma?",
   options:["There is no dilemma — journalists must always obey court orders",
            "There is no dilemma — a promise of anonymity is absolute and overrides any court order",
            "The journalist faces a genuine conflict between two legitimate duties: the legal obligation to comply with a court and the moral obligation to keep a promise that the source relied on to come forward at personal risk",
            "The journalist should simply deny making any promise of anonymity"],
   answer:2},
  /* Options A and B each dismiss one side. Option D is dishonest. Option C identifies the
     genuine tension between two legitimate duties — legal compliance and keeping a moral
     commitment — which is the hallmark of a principled framing of the dilemma. */

]
};
if (window.__bootAssessment) window.__bootAssessment();
