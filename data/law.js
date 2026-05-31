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
  {id:"q1", dim:"verbal", difficulty:"easy", timer:45,
   prompt:"WORD ANALOGY: 'Guilty' is to 'innocent' as 'plaintiff' is to — ?",
   options:["Defendant",
            "Judge",
            "Jury",
            "Witness"],
   answer:0},
  /* Explanation: plaintiff is one side of the legal pairing; defendant is the opposing party —
     just as guilty and innocent are opposites. 'Defendant' is correct. */

  /* q2 — closest in meaning */
  {id:"q2", dim:"verbal", difficulty:"easy", timer:50,
   prompt:"Choose the word closest in meaning to <b>UNAMBIGUOUS</b> as used in a formal document: 'The contract contained an unambiguous clause about payment dates.'",
   options:["Flexible",
            "Clear and leaving no room for doubt",
            "Complicated but important",
            "Unusual or surprising"],
   answer:1},
  /* 'Unambiguous' means admitting of only one interpretation — answer B. */

  /* q3 — odd word out */
  {id:"q3", dim:"verbal", difficulty:"easy", timer:45,
   prompt:"ODD ONE OUT: Which word does NOT belong with the others?<br><br>'Binding' &nbsp;·&nbsp; 'Enforceable' &nbsp;·&nbsp; 'Obligatory' &nbsp;·&nbsp; 'Discretionary'",
   options:["Binding",
            "Enforceable",
            "Obligatory",
            "Discretionary"],
   answer:3},
  /* Binding, enforceable, and obligatory all mean something that must be done or is compulsory.
     'Discretionary' means left to choice — it is the odd one out. */

  /* q4 — how changing one word changes meaning (TRICKY) */
  {id:"q4", dim:"verbal", difficulty:"hard", timer:55,
   prompt:"Read these two sentences carefully. Which word, if changed, most drastically alters the meaning?<br><br>Sentence 1: 'The committee <u>may</u> approve the application.'<br>Sentence 2: 'The committee <u>shall</u> approve the application.'",
   options:["'Committee' — a different group changes who decides",
            "'Approve' — changing the action changes the outcome",
            "'May' vs 'shall' — the first is optional permission; the second is a binding obligation",
            "'Application' — what is being decided is the key detail"],
   answer:2},
  /* In formal documents 'may' grants discretion; 'shall' creates a mandatory duty.
     This single word swap flips optional into compulsory. */

  /* q5 — word analogy */
  {id:"q5", dim:"verbal", difficulty:"medium", timer:45,
   prompt:"WORD ANALOGY: 'Transparent' is to 'opaque' as 'explicit' is to — ?",
   options:["Detailed",
            "Written",
            "Implicit",
            "Formal"],
   answer:2},
  /* Transparent/opaque are antonyms; explicit means directly stated, implicit means implied
     but not stated — the matching antonym. */

  /* q6 — register / formal vs informal (TRICKY) */
  {id:"q6", dim:"verbal", difficulty:"medium", timer:50,
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
  {id:"q7", dim:"argument", difficulty:"easy", timer:50,
   prompt:"Read this argument: 'Our school's after-school sports programme runs three days a week. Students who attend it regularly have better attendance records. Therefore, the sports programme should be expanded to five days a week.'<br><br>What is the CONCLUSION of this argument?",
   options:["Students who attend sports have better attendance",
            "The sports programme currently runs three days a week",
            "The sports programme should be expanded to five days a week",
            "Regular attendance at sports is beneficial for students"],
   answer:2},
  /* The conclusion is the claim the argument is trying to establish — that the programme
     should be expanded. The other options are premises or background. */

  /* q8 — spot the logical flaw */
  {id:"q8", dim:"argument", difficulty:"medium", timer:55,
   prompt:"'Every great chef I have ever seen on television has trained in France. My neighbour trained in France. Therefore, my neighbour must be a great chef.'<br><br>What is the logical flaw?",
   options:["The sample of chefs on television is too small",
            "Training in France is a sufficient condition for being a great chef — the conclusion follows",
            "The argument reverses the logic: great chefs trained in France, but not everyone who trains in France is a great chef",
            "The argument should compare more countries before concluding"],
   answer:2},
  /* Classic affirming the consequent fallacy: All great chefs → trained in France does not
     mean trained in France → great chef. */

  /* q9 — what would weaken the argument */
  {id:"q9", dim:"argument", difficulty:"medium", timer:55,
   prompt:"'Studies show that students who sit in the front row of classrooms get higher marks. Schools should therefore require all students to sit in the front row.'<br><br>Which statement, if true, MOST weakens this argument?",
   options:["Not all classrooms have a clearly defined front row",
            "Students who sit in the front row tend to be those who are already motivated — the seat doesn't cause the result, the student's attitude does",
            "Some students have poor eyesight and need to sit at the front for that reason",
            "Higher marks are not the only measure of a good education"],
   answer:1},
  /* The argument assumes the front-row seat causes the higher marks. Option B shows it is
     the pre-existing motivation that causes both — the seat is a correlation, not a cause. */

  /* q10 — fact vs assumption */
  {id:"q10", dim:"argument", difficulty:"medium", timer:50,
   prompt:"'The local shop sells organic food. Organic food is healthier. So shopping there will make you healthier.'<br><br>Which of these is an ASSUMPTION the argument relies on, rather than a stated fact?",
   options:["The local shop sells organic food",
            "Organic food is definitively healthier for everyone in all circumstances",
            "Shopping at the store is possible for local residents",
            "The shop is locally owned"],
   answer:1},
  /* 'Organic food is healthier' is stated as fact in the argument but is actually an
     unstated assumption being treated as settled — the argument leans on it without justifying it. */

  /* q11 — identify the assumption */
  {id:"q11", dim:"argument", difficulty:"medium", timer:55,
   prompt:"'Our football team lost every match when the coach wore his red jacket. He should stop wearing it.'<br><br>What assumption does this argument rely on?",
   options:["The coach owns more than one jacket",
            "The colour of the coach's jacket influences the team's performance",
            "Losing matches is always the coach's fault",
            "The team would win every match if the coach changed jackets"],
   answer:1},
  /* The argument only makes sense if one assumes the jacket has a causal effect on results.
     Without that assumption, the pattern is just coincidence. */

  /* q12 — weaken or flaw in everyday context */
  {id:"q12", dim:"argument", difficulty:"hard", timer:60,
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
  {id:"q13", dim:"reading", difficulty:"medium", timer:55,
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
  {id:"q14", dim:"reading", difficulty:"hard", timer:55,
   prompt:"Read the passage, then answer the question below.<br><br><i>'The new cycling lane on Bridge Street has reduced journey times for cyclists by an average of four minutes. The council installed the lane in March. Several local businesses reported increased foot traffic in the weeks following its installation.'</i><br><br>What does the passage NOT say?",
   options:["Journey times for cyclists fell after the lane was installed",
            "The cycling lane was installed in March",
            "The cycling lane caused the increase in foot traffic at local businesses",
            "Local businesses reported increased foot traffic"],
   answer:2},
  /* The passage reports that businesses 'reported increased foot traffic in the weeks following'
     but does NOT claim the lane caused this — that is an inference the reader adds. Answer: C (index 2). */

  /* q15 — what can we infer */
  {id:"q15", dim:"reading", difficulty:"medium", timer:60,
   prompt:"Read the passage, then answer the question below.<br><br><i>'All participants in the workshop must register in advance. Registration closes 48 hours before the event. Once registered, participants receive a confirmation email containing a unique access code. Without this code, entry to the workshop is not permitted.'</i><br><br>What can we INFER about someone who did not register?",
   options:["They will be allowed in if they explain they forgot to register",
            "They will not have received a confirmation email and therefore cannot enter",
            "They can register on the day if they arrive early enough",
            "They may be able to borrow an access code from another participant"],
   answer:1},
  /* The passage says: must register in advance; registration closes 48hrs before; code needed
     for entry; code arrives via confirmation email. No registration → no email → no code → no entry. */

  /* q16 — what must be true given the passage (TRICKY) */
  {id:"q16", dim:"reading", difficulty:"medium", timer:55,
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
  {id:"q17", dim:"reading", difficulty:"hard", timer:60,
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
  {id:"q18", dim:"reading", difficulty:"medium", timer:55,
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
  {id:"q19", dim:"deductive", difficulty:"easy", timer:50,
   prompt:"'All members of the Book Club receive the monthly newsletter. Priya is a member of the Book Club.'<br><br>What follows with certainty?",
   options:["Priya enjoys reading",
            "Priya receives the monthly newsletter",
            "Priya has read every book the club chose",
            "Everyone who receives the newsletter is a member of the Book Club"],
   answer:1},
  /* Classic syllogism: All A → B; Priya is A; therefore Priya → B. Option D reverses the
     direction — not necessarily true. */

  /* q20 — syllogism with negation (TRICKY) */
  {id:"q20", dim:"deductive", difficulty:"hard", timer:55,
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
  {id:"q21", dim:"deductive", difficulty:"medium", timer:55,
   prompt:"Four people — Anna, Ben, Cara, and Dan — are sitting in a row. Anna is not sitting next to Ben. Cara is sitting immediately to the left of Dan. Ben is at one of the two ends. Which arrangement is possible?",
   options:["Anna — Ben — Cara — Dan",
            "Ben — Anna — Cara — Dan",
            "Cara — Dan — Anna — Ben",
            "Ben — Cara — Dan — Anna"],
   answer:3},

  /* q22 — rule application: given these rules, which action is allowed */
  {id:"q22", dim:"deductive", difficulty:"medium", timer:55,
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
  {id:"q23", dim:"deductive", difficulty:"medium", timer:55,
   prompt:"'If the alarm sounds, the doors automatically lock. If the doors automatically lock, staff must use their key cards to exit. The alarm has just sounded.'<br><br>What must be true?",
   options:["Staff must use their key cards to exit",
            "The doors may or may not lock — the alarm doesn't always trigger the mechanism",
            "Staff can exit normally because only some doors are affected",
            "Staff must wait for a supervisor before attempting to exit"],
   answer:0},
  /* Alarm → doors lock → key cards needed. Alarm sounded, so doors lock, so key cards required.
     Straightforward modus ponens chain. */

  /* q24 — ordering from conditions */
  {id:"q24", dim:"deductive", difficulty:"hard", timer:60,
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
  {id:"q25", dim:"ethics", difficulty:"easy", timer:55,
   prompt:"A teacher is marking 30 essays. She marks the first 15 very strictly and the last 15 more generously because she became tired. She realises this at the end. What is the most principled course of action?",
   options:["Leave the marks as they are — it would take too long to re-mark everything",
            "Only re-mark the first 15 essays using the same generous standard",
            "Re-mark all 30 essays using a single consistent standard, so every student is judged by the same measure",
            "Add a flat bonus to everyone's mark to compensate"],
   answer:2},
  /* Fairness requires that all students are assessed by the same standard. Option C is the
     only approach that treats all 30 students equally and corrects the inconsistency. */

  /* q26 — confidentiality vs safety */
  {id:"q26", dim:"ethics", difficulty:"medium", timer:60,
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
  {id:"q27", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A doctor needs to perform a minor procedure on an adult patient. The procedure is safe and routine, and the doctor is confident it is in the patient's best interest. The patient refuses.<br><br>What is the most principled position?",
   options:["The doctor should perform the procedure anyway — the patient's best interest overrides their refusal",
            "The doctor should perform the procedure only if a family member agrees",
            "The doctor must respect the patient's refusal — a competent adult's right to refuse treatment is fundamental, even when refusal may not serve their health",
            "The doctor should wait and try again later when the patient may change their mind, then proceed"],
   answer:2},
  /* The right to autonomy and informed consent/refusal is a cornerstone of medical and legal
     ethics. Overriding a competent adult's refusal violates their bodily autonomy. */

  /* q28 — proportionality of punishment */
  {id:"q28", dim:"ethics", difficulty:"medium", timer:55,
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
  {id:"q29", dim:"ethics", difficulty:"hard", timer:60,
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
  {id:"q30", dim:"ethics", difficulty:"medium", timer:60,
   prompt:"A journalist has promised a source complete anonymity in exchange for information about corporate wrongdoing. A court later orders the journalist to reveal the source's identity, or face contempt of court.<br><br>Which statement best describes the ethical dilemma?",
   options:["There is no dilemma — journalists must always obey court orders",
            "There is no dilemma — a promise of anonymity is absolute and overrides any court order",
            "The journalist faces a genuine conflict between two legitimate duties: the legal obligation to comply with a court and the moral obligation to keep a promise that the source relied on to come forward at personal risk",
            "The journalist should simply deny making any promise of anonymity"],
   answer:2},
  /* Options A and B each dismiss one side. Option D is dishonest. Option C identifies the
     genuine tension between two legitimate duties — legal compliance and keeping a moral
     commitment — which is the hallmark of a principled framing of the dilemma. */

  /* ════════════ NEW ITEMS q31–q100 ════════════ */

  /* ── VERBAL (q31–q44): 14 new → 20 total ── */

  {id:"q31", dim:"verbal", difficulty:"easy", timer:45,
   prompt:"WORD ANALOGY: 'Question' is to 'answer' as 'problem' is to — ?",
   options:["Difficulty","Solution","Cause","Worry"],
   answer:1},
  /* question↔answer (a thing and its resolution); problem↔solution. Solution. */

  {id:"q32", dim:"verbal", difficulty:"easy", timer:45,
   prompt:"Choose the word closest in meaning to <b>OBLIGATORY</b>: 'Attendance at the safety briefing is obligatory.'",
   options:["Recommended","Compulsory","Occasional","Optional"],
   answer:1},
  /* obligatory = required/compulsory. */

  {id:"q33", dim:"verbal", difficulty:"easy", timer:45,
   prompt:"ODD ONE OUT: Which word does NOT belong with the others?<br><br>'Permit' &nbsp;·&nbsp; 'Allow' &nbsp;·&nbsp; 'Authorise' &nbsp;·&nbsp; 'Forbid'",
   options:["Permit","Allow","Authorise","Forbid"],
   answer:3},
  /* first three mean to let happen; forbid means the opposite. */

  {id:"q34", dim:"verbal", difficulty:"medium", timer:50,
   prompt:"Choose the word closest in meaning to <b>PRECEDENT</b> as used here: 'The judge's decision set a precedent for similar cases.'",
   options:["A penalty imposed for an offence","An earlier example used as a guide for later cases","A formal apology","A final and unchangeable rule"],
   answer:1},
  /* precedent = an earlier case serving as an example/guide. */

  {id:"q35", dim:"verbal", difficulty:"medium", timer:50,
   prompt:"WORD ANALOGY: 'Lenient' is to 'severe' as 'temporary' is to — ?",
   options:["Brief","Permanent","Sudden","Frequent"],
   answer:1},
  /* lenient/severe are antonyms; temporary/permanent are antonyms. */

  {id:"q36", dim:"verbal", difficulty:"medium", timer:50,
   prompt:"In a contract, which phrasing most clearly creates an obligation that MUST be performed?",
   options:["'The tenant may keep the garden tidy.'","'The tenant is encouraged to keep the garden tidy.'","'The tenant shall keep the garden tidy.'","'The tenant might wish to keep the garden tidy.'"],
   answer:2},
  /* 'shall' = mandatory duty; 'may'/'encouraged'/'might' are non-binding. */

  {id:"q37", dim:"verbal", difficulty:"medium", timer:50,
   prompt:"Choose the word closest in meaning to <b>VOID</b> as used here: 'Because it was signed under threat, the agreement was declared void.'",
   options:["Confidential","Having no legal force","Temporary","Costly"],
   answer:1},
  /* void = having no legal effect. */

  {id:"q38", dim:"verbal", difficulty:"medium", timer:50,
   prompt:"Which sentence uses 'comprise' correctly?",
   options:["The committee is comprised of five members.","Five members comprise the committee.","The committee comprises of five members.","The committee is comprised by five members."],
   answer:1},
  /* 'comprise' = to consist of; the whole comprises the parts: 'Five members comprise the committee' (parts compose the whole). Among the four, B is the only one without the non-standard 'comprised of'/'comprises of'. */

  {id:"q39", dim:"verbal", difficulty:"medium", timer:50,
   prompt:"ODD ONE OUT by meaning: which word does NOT mean roughly 'to cancel or revoke'?",
   options:["Annul","Rescind","Ratify","Repeal"],
   answer:2},
  /* annul/rescind/repeal cancel; ratify means to confirm/approve. */

  {id:"q40", dim:"verbal", difficulty:"medium", timer:50,
   prompt:"WORD ANALOGY: 'Witness' is to 'testimony' as 'author' is to — ?",
   options:["Library","Manuscript","Reader","Publisher"],
   answer:1},
  /* a witness produces testimony; an author produces a manuscript (the thing they create). */

  {id:"q41", dim:"verbal", difficulty:"hard", timer:55,
   prompt:"A clause reads: 'No vehicle, <u>other than</u> a bicycle, may enter the courtyard.' Which statement is the precise meaning?",
   options:["Bicycles are banned from the courtyard, but other vehicles are allowed","All vehicles including bicycles are banned","Bicycles are allowed; all other vehicles are banned","Only motor vehicles are banned; all non-motor vehicles are allowed"],
   answer:2},
  /* 'No vehicle other than a bicycle may enter' = the only vehicle permitted is a bicycle. */

  {id:"q42", dim:"verbal", difficulty:"hard", timer:55,
   prompt:"Two clauses differ by one word.<br>A: 'The deposit is refundable <u>unless</u> the room is damaged.'<br>B: 'The deposit is refundable <u>if</u> the room is damaged.'<br>What is the effect of the change?",
   options:["No real difference — both return the deposit when there is damage","A returns the deposit when there is no damage; B returns it only when there IS damage — the conditions are reversed","Both withhold the deposit in all cases","A withholds the deposit always; B refunds it always"],
   answer:1},
  /* 'unless damaged' = refund except when damaged; 'if damaged' = refund only when damaged. Opposite conditions. */

  {id:"q43", dim:"verbal", difficulty:"hard", timer:55,
   prompt:"Which revision removes an ambiguity in: 'The notice must be given to the manager or the supervisor and the director.'?",
   options:["'The notice must be given to the manager, or to both the supervisor and the director.'","'The notice must be given to the manager, the supervisor, the director.'","'The notice must be given to one of the manager, supervisor or director.'","'The notice must be given to everyone listed.'"],
   answer:0},
  /* The original is ambiguous between '(manager or supervisor) and director' vs 'manager or (supervisor and director)'. Option A makes one reading explicit; the others change the meaning rather than disambiguate the same structure. */

  {id:"q44", dim:"verbal", difficulty:"medium", timer:50,
   prompt:"Choose the word closest in meaning to <b>STIPULATE</b>: 'The lease stipulates that pets are not allowed.'",
   options:["Suggests gently","States as a firm condition","Hints at indirectly","Questions whether"],
   answer:1},
  /* stipulate = specify as a binding condition. */

  /* ── ARGUMENT (q45–q58): 14 new → 20 total ── */

  {id:"q45", dim:"argument", difficulty:"easy", timer:50,
   prompt:"'Every house on Oak Street has a garden. Number 12 is on Oak Street.' Which is the CONCLUSION best supported?",
   options:["Number 12 has a garden","Oak Street is a pleasant place to live","Gardens require maintenance","All gardens are on Oak Street"],
   answer:0},
  /* direct application: all Oak St houses have gardens; #12 is one → it has a garden. */

  {id:"q46", dim:"argument", difficulty:"medium", timer:55,
   prompt:"'Ice-cream sales and drowning incidents both rise in the same months. Therefore, eating ice cream causes drowning.'<br><br>What is the flaw?",
   options:["The sample is too small","It treats a correlation as causation, ignoring a common cause such as hot weather","Drowning is not related to swimming","Ice-cream sales are measured incorrectly"],
   answer:1},
  /* classic correlation/causation with a lurking variable (summer heat). */

  {id:"q47", dim:"argument", difficulty:"easy", timer:55,
   prompt:"'You should not trust Dr Lee's research on diet, because she once gave a talk sponsored by a food company.'<br><br>Which fallacy does this most closely resemble?",
   options:["Attacking the source rather than the evidence (ad hominem / poisoning the well)","Appeal to authority","Circular reasoning","False dilemma"],
   answer:0},
  /* dismisses the research by attacking the person/source, not the evidence. */

  {id:"q48", dim:"argument", difficulty:"medium", timer:55,
   prompt:"'If we let students retake one exam, soon they will demand to retake every exam, and eventually no grade will mean anything.'<br><br>This reasoning is an example of:",
   options:["A hasty generalisation","A slippery-slope argument that assumes one step inevitably leads to extreme outcomes","A valid deduction","An appeal to authority"],
   answer:1},
  /* slippery slope: assumes a chain to an extreme without justification. */

  {id:"q49", dim:"argument", difficulty:"easy", timer:55,
   prompt:"'Either we cut the library budget, or the school will go bankrupt.'<br><br>What is the main weakness of this statement?",
   options:["It is a false dilemma — it presents only two options when others may exist","It relies on an expert opinion","It uses circular reasoning","It attacks a person"],
   answer:0},
  /* false dilemma: presents two choices as if exhaustive. */

  {id:"q50", dim:"argument", difficulty:"easy", timer:55,
   prompt:"'This policy must be good, because it is supported by the majority of people we surveyed.'<br><br>Which fallacy is this?",
   options:["Appeal to popularity (bandwagon)","Straw man","Ad hominem","Begging the question"],
   answer:0},
  /* popularity does not establish correctness — appeal to popularity. */

  {id:"q51", dim:"argument", difficulty:"medium", timer:55,
   prompt:"Opponent's view: 'We should reduce the speed limit near the school.' Reply: 'My opponent wants to ban all cars from the town entirely, which is absurd.'<br><br>What has the reply done?",
   options:["Provided strong counter-evidence","Misrepresented the opponent's position to attack it more easily (straw man)","Made a valid deduction","Appealed to authority"],
   answer:1},
  /* straw man: distorts the actual claim. */

  {id:"q52", dim:"argument", difficulty:"medium", timer:55,
   prompt:"'The new bridge will reduce traffic. We know this because once it opens, fewer cars will be stuck in jams.'<br><br>What is wrong with this reasoning?",
   options:["It uses an irrelevant statistic","It is circular — the conclusion (less traffic) is simply restated as the reason (fewer jams)","It attacks the engineers","It relies on a false dilemma"],
   answer:1},
  /* circular: 'fewer jams' just restates 'reduce traffic'. */

  {id:"q53", dim:"argument", difficulty:"medium", timer:55,
   prompt:"'Most successful entrepreneurs wake up at 5 am. So if you wake up at 5 am, you will become a successful entrepreneur.'<br><br>The reasoning fails because:",
   options:["Waking early is unhealthy","It confuses a feature common among successes with a cause of success","The sample only includes entrepreneurs who failed","5 am is not early enough"],
   answer:1},
  /* mistakes a shared trait for a sufficient cause; survivorship/correlation error. */

  {id:"q54", dim:"argument", difficulty:"hard", timer:60,
   prompt:"'No one has ever proved that the remedy does NOT work. Therefore it must work.'<br><br>Which describes the flaw most precisely?",
   options:["Hasty generalisation from few cases","Appeal to ignorance — treating a lack of disproof as proof","A valid argument","Slippery slope"],
   answer:1},
  /* appeal to ignorance: absence of disproof ≠ proof. */

  {id:"q55", dim:"argument", difficulty:"hard", timer:60,
   prompt:"An argument concludes 'the factory caused the river pollution.' Which finding, if true, would MOST strengthen it?",
   options:["The factory is large and employs many people","The pollutant found in the river is a rare chemical used only by that factory, and appears only downstream of it","Several residents dislike the factory","The factory opened many years ago"],
   answer:1},
  /* a unique chemical signature appearing only downstream ties cause to the factory. */

  {id:"q56", dim:"argument", difficulty:"hard", timer:60,
   prompt:"'Our town's crime fell after we installed streetlights, so the lights cut crime.' Which finding would MOST weaken this?",
   options:["The lights were expensive to install","Crime fell by the same amount in neighbouring towns that installed no lights","Some residents prefer darker streets","The lights occasionally fail"],
   answer:1},
  /* a control group with the same drop shows the lights weren't the cause. */

  {id:"q57", dim:"argument", difficulty:"medium", timer:55,
   prompt:"'The witness must be lying about the time, because the defendant says the opposite.'<br><br>What unstated assumption does this rely on?",
   options:["That the witness and defendant know each other","That the defendant's account is more reliable than the witness's","That the time of day is unimportant","That there were no other witnesses"],
   answer:1},
  /* the inference only works if the defendant is assumed more credible. */

  {id:"q58", dim:"argument", difficulty:"medium", timer:55,
   prompt:"A council argues: 'Recycling rose 20% after we added blue bins, so the bins work.' Which question best tests this claim?",
   options:["How much did the bins cost?","Did anything else change at the same time, such as a new fine for not recycling?","What colour were the old bins?","How many bins were ordered?"],
   answer:1},
  /* tests for confounding factors that could explain the rise. */

  /* ── READING (q59–q72): 14 new → 20 total ── */

  {id:"q59", dim:"reading", difficulty:"easy", timer:50,
   prompt:"<i>'The museum is free to enter on Sundays. On all other days, tickets cost £8. Children under 5 enter free every day.'</i><br><br>Which statement is directly supported?",
   options:["Adults pay £8 on a Wednesday","The museum is closed on Mondays","Children under 5 must pay on Sundays","Adults always enter free"],
   answer:0},
  /* Wednesday is 'all other days' → £8. */

  {id:"q60", dim:"reading", difficulty:"easy", timer:50,
   prompt:"<i>'All staff must wear an ID badge inside the building. Visitors must be accompanied by a staff member at all times.'</i><br><br>What must be true?",
   options:["A visitor may walk through the building alone if they wear a badge","A visitor inside the building is with a staff member","Staff do not need badges if accompanied","Visitors receive ID badges"],
   answer:1},
  /* visitors must always be accompanied → a visitor inside is with staff. */

  {id:"q61", dim:"reading", difficulty:"medium", timer:55,
   prompt:"<i>'Refunds are available within 14 days of purchase, provided the item is unused and the receipt is presented. Sale items cannot be refunded.'</i><br><br>A customer returns an unused, full-price item with a receipt, 10 days after purchase. What does the passage support?",
   options:["The item cannot be refunded because 10 days have passed","The item is eligible for a refund","A refund requires the original packaging","Sale items can be refunded within 14 days"],
   answer:1},
  /* within 14 days ✓, unused ✓, receipt ✓, not a sale item → eligible. */

  {id:"q62", dim:"reading", difficulty:"medium", timer:55,
   prompt:"<i>'The grant supports projects that benefit the local community. Applications from registered charities are prioritised, but other community groups may also apply.'</i><br><br>Which is supported?",
   options:["Only registered charities may apply","A non-charity community group may apply but is not prioritised","Individuals may apply for personal use","All applicants receive the grant"],
   answer:1},
  /* charities prioritised; other groups 'may also apply' but not prioritised. */

  {id:"q63", dim:"reading", difficulty:"medium", timer:55,
   prompt:"<i>'The report notes that sales increased in three of the four regions. The northern region saw a decline. The company plans to review its northern strategy.'</i><br><br>What does the passage NOT state?",
   options:["Sales rose in three regions","The northern region declined","The decline in the north was caused by poor management","The company will review its northern strategy"],
   answer:2},
  /* the cause of the northern decline is not stated. */

  {id:"q64", dim:"reading", difficulty:"easy", timer:55,
   prompt:"<i>'Only members who have attended at least three meetings this year are entitled to vote at the annual general meeting.'</i><br><br>Mara is a member who has attended two meetings this year. What follows?",
   options:["Mara is entitled to vote","Mara is not entitled to vote this year","Mara may vote if another member agrees","Mara must attend the AGM"],
   answer:1},
  /* threshold is three; two falls short → not entitled. */

  {id:"q65", dim:"reading", difficulty:"medium", timer:55,
   prompt:"<i>'The path is open to walkers year-round. Cyclists may use it from April to September only. Horses are not permitted at any time.'</i><br><br>Which MUST be true?",
   options:["A cyclist may use the path in December","A walker may use the path in January","Horses may use the path in summer","The path is closed to walkers in winter"],
   answer:1},
  /* walkers year-round → January allowed. */

  {id:"q66", dim:"reading", difficulty:"medium", timer:55,
   prompt:"<i>'Parking permits are issued to residents of Mill Lane. Each household may hold up to two permits. Permits are not transferable to non-residents.'</i><br><br>Which is supported ONLY by the passage?",
   options:["A Mill Lane household may hold three permits if it has a large car","A non-resident cannot use a Mill Lane permit","Visitors may park free on Mill Lane","Permits cost a fixed annual fee"],
   answer:1},
  /* permits non-transferable to non-residents → a non-resident can't use one. */

  {id:"q67", dim:"reading", difficulty:"hard", timer:60,
   prompt:"<i>'The discount applies to orders over £50, except for electronics. Delivery is free on all orders over £30.'</i><br><br>A customer orders £60 of electronics. What is supported?",
   options:["They get both the discount and free delivery","They get free delivery but not the discount","They get the discount but not free delivery","They get neither"],
   answer:1},
  /* electronics excluded from discount; £60 > £30 → free delivery. */

  {id:"q68", dim:"reading", difficulty:"hard", timer:60,
   prompt:"<i>'A candidate is shortlisted only if they pass both the written test and the interview. Sam passed the written test.'</i><br><br>What can we conclude?",
   options:["Sam is shortlisted","Sam is not shortlisted","We cannot determine whether Sam is shortlisted from this alone","Sam failed the interview"],
   answer:2},
  /* shortlisting needs both; only the written result is known → undetermined. */

  {id:"q69", dim:"reading", difficulty:"hard", timer:60,
   prompt:"<i>'The clinic sees walk-in patients before noon and booked patients in the afternoon. Emergencies are seen at any time. Routine check-ups are by booking only.'</i><br><br>Which MUST be true?",
   options:["A routine check-up can be done as a morning walk-in","An emergency at 3 pm will be seen","Booked patients are seen in the morning","Walk-ins are refused all day"],
   answer:1},
  /* emergencies seen at any time → a 3pm emergency is seen. */

  {id:"q70", dim:"reading", difficulty:"easy", timer:55,
   prompt:"<i>'The survey found that 70% of respondents owned a bicycle. Of those, half cycled to work.'</i><br><br>What is directly supported about the respondents?",
   options:["70% cycle to work","35% of respondents both own a bicycle and cycle to work","Half of all respondents cycle to work","Everyone who owns a bicycle cycles to work"],
   answer:1},
  /* half of 70% = 35% own a bike and cycle to work. */

  {id:"q71", dim:"reading", difficulty:"medium", timer:55,
   prompt:"<i>'Entry to the competition is open to amateurs only. Anyone who has earned money from the sport is considered a professional.'</i><br><br>Priya has earned money coaching the sport. What follows?",
   options:["Priya may enter as an amateur","Priya is considered a professional and may not enter","Priya may enter if she stops coaching","The passage does not define professional"],
   answer:1},
  /* earned money from the sport → professional → not eligible (amateurs only). */

  {id:"q72", dim:"reading", difficulty:"easy", timer:55,
   prompt:"<i>'The author argues that remote work improves focus but warns it can weaken team bonds.'</i><br><br>Which best captures the author's view?",
   options:["Remote work is entirely beneficial","Remote work is entirely harmful","Remote work has both a benefit and a drawback","The author has no clear position"],
   answer:2},
  /* a benefit (focus) and a drawback (team bonds) — a balanced view. */

  /* ── DEDUCTIVE (q73–q86): 14 new → 20 total ── */

  {id:"q73", dim:"deductive", difficulty:"easy", timer:50,
   prompt:"'All contracts signed by the manager are valid. This contract was signed by the manager.' What follows with certainty?",
   options:["This contract is valid","The manager signs all contracts","Only the manager can sign contracts","This contract is invalid"],
   answer:0},
  /* modus ponens: all manager-signed contracts valid; this is one → valid. */

  {id:"q74", dim:"deductive", difficulty:"easy", timer:50,
   prompt:"'If it is a public holiday, the office is closed. Today the office is open.' What follows?",
   options:["Today is a public holiday","Today is not a public holiday","The office is never closed","Tomorrow is a public holiday"],
   answer:1},
  /* modus tollens: holiday → closed; office open (not closed) → not a holiday. */

  {id:"q75", dim:"deductive", difficulty:"easy", timer:55,
   prompt:"'Some lawyers are novelists. All novelists are writers.' Which conclusion follows with certainty?",
   options:["All lawyers are writers","Some lawyers are writers","No lawyers are writers","All writers are lawyers"],
   answer:1},
  /* the lawyers who are novelists are writers → some lawyers are writers. */

  {id:"q76", dim:"deductive", difficulty:"medium", timer:55,
   prompt:"'No reptiles are mammals. All snakes are reptiles.' What follows with certainty?",
   options:["Some snakes are mammals","No snakes are mammals","All mammals are snakes","Some mammals are reptiles"],
   answer:1},
  /* snakes ⊆ reptiles, reptiles disjoint from mammals → no snakes are mammals. */

  {id:"q77", dim:"deductive", difficulty:"easy", timer:55,
   prompt:"Three friends finished a race. Tom finished ahead of Ravi. Ravi finished ahead of Sam. Who came last?",
   options:["Tom","Ravi","Sam","Cannot be determined"],
   answer:2},
  /* Tom > Ravi > Sam → Sam last. */

  {id:"q78", dim:"deductive", difficulty:"medium", timer:55,
   prompt:"'If a book is overdue, a fine applies. If a fine applies, borrowing is suspended. This book is overdue.' What must be true?",
   options:["Borrowing is suspended","No fine applies","The book is not overdue","Borrowing continues normally"],
   answer:0},
  /* overdue → fine → suspended; chain of modus ponens. */

  {id:"q79", dim:"deductive", difficulty:"medium", timer:55,
   prompt:"Four boxes are stacked. The red box is above the blue. The green box is at the bottom. The yellow box is directly above the green. Which box is on top?",
   options:["Green","Yellow","Blue","Red"],
   answer:3},
  /* green(bottom), yellow above green, then blue, then red above blue → red on top. Order bottom-up: green, yellow, blue, red. */

  {id:"q80", dim:"deductive", difficulty:"easy", timer:55,
   prompt:"'Only people who hold a permit may fish here. Jon does not hold a permit.' What follows?",
   options:["Jon may fish here","Jon may not fish here","Everyone may fish here","Jon holds a different permit"],
   answer:1},
  /* permit is necessary; Jon lacks it → may not fish. */

  {id:"q81", dim:"deductive", difficulty:"medium", timer:55,
   prompt:"Rules: A claim is approved only if it is (i) submitted on time AND (ii) supported by a receipt. A claim is on time but has no receipt. What follows?",
   options:["The claim is approved","The claim is not approved","The claim may be approved later automatically","The receipt is unnecessary"],
   answer:1},
  /* both conditions required; receipt missing → not approved. */

  {id:"q82", dim:"deductive", difficulty:"hard", timer:60,
   prompt:"'If the witness is reliable, then the report is accurate. The report is not accurate.' What must be true?",
   options:["The witness is reliable","The witness is not reliable","The report was never written","The witness lied deliberately"],
   answer:1},
  /* modus tollens: reliable → accurate; not accurate → not reliable. (Note: 'lied deliberately' overstates — unreliable need not mean intentional.) */

  {id:"q83", dim:"deductive", difficulty:"hard", timer:60,
   prompt:"Five runners A, B, C, D, E. Conditions: A finished before B. C finished after B. D finished before A. E finished last. Who finished first?",
   options:["A","B","C","D"],
   answer:3},
  /* D<A<B<C and E last. So order: D, A, B, C, E → D first. */

  {id:"q84", dim:"deductive", difficulty:"hard", timer:60,
   prompt:"'Whenever the meeting runs late, the minutes are emailed the next day. The minutes were emailed the same day.' What can we conclude?",
   options:["The meeting ran late","The meeting did not run late","The minutes were never written","Someone forgot to send the minutes"],
   answer:1},
  /* late → next-day email; same-day email means 'not next day' → meeting did not run late. */

  {id:"q85", dim:"deductive", difficulty:"medium", timer:55,
   prompt:"'All of the documents in the folder are signed. The contract is in the folder.' What follows with certainty?",
   options:["The contract is signed","The contract is the only document","Some documents are unsigned","The folder contains only contracts"],
   answer:0},
  /* universal applies to the contract → it is signed. */

  {id:"q86", dim:"deductive", difficulty:"hard", timer:60,
   prompt:"'Either the alarm was off or someone disabled it. The alarm was not off.' What follows with certainty?",
   options:["Someone disabled the alarm","No one disabled the alarm","The alarm was off after all","The alarm does not exist"],
   answer:0},
  /* disjunctive syllogism: (off OR disabled), not off → disabled. */

  /* ── ETHICS (q87–q100): 14 new → 20 total ── */

  {id:"q87", dim:"ethics", difficulty:"easy", timer:55,
   prompt:"A referee's own child is playing in a match he is officiating. What is the most principled course of action?",
   options:["Officiate as normal — he can be trusted to be fair","Step aside and let a neutral referee officiate, to avoid a conflict of interest","Officiate but favour the other team to compensate","Ask the spectators to decide close calls"],
   answer:1},
  /* avoiding conflict of interest / appearance of bias → recuse. */

  {id:"q88", dim:"ethics", difficulty:"easy", timer:55,
   prompt:"A shopkeeper realises she gave a customer too much change an hour ago. The customer has left and won't know. What does honesty as a principle most directly require?",
   options:["Keep quiet — the mistake was hers and the customer benefited","Record the loss accurately and, if the customer returns or can be identified, correct it","Take the difference from the next customer","Blame the till for the error"],
   answer:1},
  /* honest accounting and correcting an error where possible. */

  {id:"q89", dim:"ethics", difficulty:"easy", timer:55,
   prompt:"Two employees did equal work on a project, but only one is publicly credited. What principle is most directly at stake?",
   options:["Efficiency","Fair attribution / giving credit where it is due","Confidentiality","Loyalty to the employer"],
   answer:1},
  /* fairness in attribution of credit. */

  {id:"q90", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A landlord wants to evict a tenant immediately for a single late rent payment, though the lease allows a grace period. Which principle most directly cautions against this?",
   options:["Acting within agreed rules and proportionate response","Maximising profit","Freedom of contract above all","Privacy of the tenant"],
   answer:0},
  /* the response should follow the agreed rules and be proportionate to the breach. */

  {id:"q91", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A scientist's experiment would help many people but requires deceiving participants about its true purpose. Which response best frames the ethical tension?",
   options:["Deception is always acceptable if the results help people","Deception is never acceptable for any reason","The benefit to many must be weighed against the duty to treat participants honestly and with informed consent","Only the funding source matters"],
   answer:2},
  /* names the genuine tension between consequences and honesty/consent. */

  {id:"q92", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A teacher discovers two students cheated together, but only one confesses. Treating them differently because one confessed raises which consideration?",
   options:["Whether honesty in owning up should affect the consequence, balanced against equal treatment for equal wrongdoing","Whether the exam was too hard","Whether the parents will complain","Whether the classroom is large enough"],
   answer:0},
  /* the tension between rewarding honesty and treating equal offences equally. */

  {id:"q93", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A company can cut costs by quietly lowering product quality in a way customers won't immediately notice. Which principle most directly weighs against this?",
   options:["Profit maximisation","Honesty and not misleading customers about what they are buying","Employee loyalty","Speed of delivery"],
   answer:1},
  /* not deceiving customers about the product. */

  {id:"q94", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A judge is offered a generous gift by someone who has a case before her. Even if she believes it won't affect her, why is accepting still problematic?",
   options:["The gift might be the wrong size","It creates an appearance of bias that undermines trust in impartial decisions","Judges are not allowed to own anything","Gifts are always illegal"],
   answer:1},
  /* impartiality includes avoiding the appearance of bias. */

  {id:"q95", dim:"ethics", difficulty:"medium", timer:55,
   prompt:"A volunteer learns confidential information about a charity's finances and is tempted to share it because the public 'has a right to know.' What competing principles are in tension?",
   options:["Speed versus accuracy","A duty of confidentiality versus a claimed public interest in disclosure","Cost versus benefit only","Loyalty versus efficiency"],
   answer:1},
  /* confidentiality vs public-interest disclosure (whistleblowing tension). */

  {id:"q96", dim:"ethics", difficulty:"easy", timer:55,
   prompt:"A driver hits a parked car in an empty lot with no witnesses. What does taking responsibility most directly require?",
   options:["Drive away — no one saw it","Leave a note with contact details so the owner can reach them","Wait only if someone asks","Report it only if the damage is severe"],
   answer:1},
  /* accountability: leave contact details so the owner can be compensated. */

  {id:"q97", dim:"ethics", difficulty:"hard", timer:60,
   prompt:"A hospital has one ventilator and two patients who need it equally and urgently. A administrator suggests giving it to whichever patient is more 'important' to the community. Why is this criterion ethically contentious?",
   options:["It is too slow to apply","It risks valuing people by social status rather than treating them as having equal moral worth","It ignores the cost of the ventilator","Importance is always easy to measure"],
   answer:1},
  /* ranking by social 'importance' conflicts with equal moral worth of persons. */

  {id:"q98", dim:"ethics", difficulty:"hard", timer:60,
   prompt:"A lawyer is certain her client is guilty but the client insists on pleading not guilty. Which principle best explains why she may still defend him?",
   options:["Lawyers must always believe their clients","Everyone is entitled to a defence and to have the case against them properly tested, regardless of the lawyer's private opinion","Guilt is never knowable","Defending the guilty is profitable"],
   answer:1},
  /* the right to a defence / testing the state's case underpins the role. */

  {id:"q99", dim:"ethics", difficulty:"hard", timer:60,
   prompt:"A rule says 'no food in the library.' A diabetic student needs to eat something quickly to avoid a medical emergency. What does principled reasoning suggest about applying the rule here?",
   options:["The rule must be applied without exception in all cases","The purpose behind the rule (cleanliness, not endangering health) should guide a sensible exception for a genuine medical need","The student should be banned from the library","Rules should be ignored whenever inconvenient"],
   answer:1},
  /* interpret a rule by its purpose; a medical emergency justifies a narrow exception. */

  {id:"q100", dim:"ethics", difficulty:"hard", timer:60,
   prompt:"A government wants to use everyone's private messages to catch a small number of criminals more easily. Which response best identifies the core ethical tension?",
   options:["There is no tension — catching criminals is always worth it","There is no tension — privacy is absolute and nothing overrides it","The collective benefit of greater security is in tension with every individual's right to privacy, and the trade-off must be weighed, not assumed","Only the cost of the technology matters"],
   answer:2},
  /* security vs privacy — names the genuine trade-off without collapsing it. */

]
};
if (window.__bootAssessment) window.__bootAssessment();
