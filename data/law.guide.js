// Study guide explanations for the Law assessment.
// strategies: per-dimension how-to-approach text (HTML ok).
// questions: keyed by question id — steps[] (HTML ok) + optional trap string.
// The question prompt/options/answer come from data/law.js (no duplication).
window.GUIDE = {
  strategies: {
    verbal: "Focus on the <b>exact</b> meaning of each word. In law, a single word ('may' vs 'shall', 'unless' vs 'if') can reverse an entire obligation. For analogies, nail down the <b>relationship type</b> (opposites, part-to-whole, action-to-product) before scanning the options. For odd-one-out, test each word against a shared category — the one that breaks the rule is your answer.",
    argument: "First, <b>locate the conclusion</b> — the claim the argument wants you to accept. Then identify the <b>premises</b> (the reasons). Ask: do the premises <i>actually</i> support the conclusion, or does the argument sneak in an unproven step? Common flaws: confusing correlation with causation, reversing an 'all A are B' statement, and presenting only two options when more exist.",
    reading: "Your only source of truth is the passage. Before answering, re-read the relevant sentence. Reject options that are <b>reasonable-sounding extrapolations</b> but are not stated. Watch for words like 'directly', 'only', 'must', and 'cannot' in the options — each tightens what the passage is allowed to prove. If an option introduces a word or concept not in the passage, treat it with suspicion.",
    deductive: "Identify the <b>logical form</b>: Is it 'All A are B, X is A → X is B' (modus ponens)? Is it 'If P then Q; not Q → not P' (modus tollens)? Is it a chain of if-then rules? Write out the chain step by step. Never add information the premises don't give you — the most common mistake is assuming the rule works in reverse.",
    ethics: "<b>Name the principle before picking an answer</b> — is this about fairness, autonomy/consent, honesty, confidentiality, proportionality, or avoiding bias? Then check which option best applies that principle without collapsing a genuine tension into a simple slogan. Avoid options that say 'always' or 'never' unless the principle genuinely admits no exceptions."
  },
  questions: {
    "q1": {
      steps: [
        "The analogy pattern is <b>opposites</b>: guilty ↔ innocent.",
        "Now apply the same relationship to the legal domain: 'plaintiff' is one <b>opposing party</b> in a case.",
        "The party on the other side of a lawsuit is the <b>defendant</b> — the legal opposite of the plaintiff."
      ],
      trap: "Judge and jury are also courtroom figures, but neither is the direct counterpart of the plaintiff the way a defendant is."
    },
    "q2": {
      steps: [
        "<b>Unambiguous</b> is built from 'un-' (not) + 'ambiguous' (open to more than one meaning).",
        "So it means: admitting of <b>only one interpretation</b> — nothing unclear.",
        "'Clear and leaving no room for doubt' captures this exactly."
      ],
      trap: "'Complicated but important' is the opposite of what unambiguous means. Don't be misled by the formal-document context — the word has a precise meaning regardless of context."
    },
    "q3": {
      steps: [
        "Group the words by meaning: <b>binding, enforceable, obligatory</b> all describe something that <i>must</i> be done.",
        "<b>Discretionary</b> means left to someone's choice — the exact opposite of compulsory.",
        "Discretionary is the odd one out."
      ],
      trap: "All four words can appear in legal documents, so don't be distracted by context — focus on whether each word implies compulsion or choice."
    },
    "q4": {
      steps: [
        "In formal legal and contractual writing, <b>'may'</b> grants a permission or discretion — the committee <i>can</i> approve but is not required to.",
        "<b>'Shall'</b> creates a <i>mandatory duty</i> — the committee is <b>obliged</b> to approve.",
        "This single-word swap flips optional discretion into a binding obligation — the most drastic possible change."
      ],
      trap: "Changing 'committee' or 'application' alters who or what, but the <i>nature of the duty</i> stays the same. Only 'may'/'shall' changes whether the action is required."
    },
    "q5": {
      steps: [
        "The analogy type is <b>antonyms</b>: transparent ↔ opaque.",
        "Now find the antonym of 'explicit'. Explicit means directly and fully stated.",
        "<b>Implicit</b> means implied but not directly stated — the antonym that mirrors the pattern."
      ],
      trap: "'Formal' and 'written' are related to explicit communication but are not its opposite. 'Detailed' is closer to explicit in meaning, not its antonym."
    },
    "q6": {
      steps: [
        "'Looked into' is an informal <b>phrasal verb</b> — vague in formal writing because it does not specify the nature or rigour of the action.",
        "<b>'Investigated'</b> is precise: it names a formal process of inquiry.",
        "'Promptly' replaces 'at your earliest convenience' with a cleaner, equally professional word."
      ],
      trap: "Options B and C become less formal, not more precise. Option D ('it would be nice') is even weaker. The goal is precision and formality, not brevity at the cost of accuracy."
    },
    "q7": {
      steps: [
        "The <b>conclusion</b> is the claim the argument is trying to <i>establish</i> — usually signalled by 'therefore', 'so', or 'thus'.",
        "Here 'therefore' introduces: 'the sports programme should be expanded to five days a week.'",
        "The other options are <b>premises</b> (facts offered as reasons), not the conclusion."
      ],
      trap: "'Students who attend sports have better attendance' sounds like the main point, but it is actually the evidence used to justify expansion — a premise, not the conclusion."
    },
    "q8": {
      steps: [
        "The argument's structure: All great chefs trained in France → my neighbour trained in France → therefore neighbour is a great chef.",
        "This is the fallacy of <b>affirming the consequent</b>: 'All A are B' does NOT mean 'all B are A'.",
        "Many people train in France who are not great chefs; the shared trait runs only one way."
      ],
      trap: "Option A (small sample) is also a real issue, but the deeper logical flaw is the reversal of the direction — even with a large sample, training in France cannot alone prove great-chef status."
    },
    "q9": {
      steps: [
        "The argument <b>assumes</b> the front-row seat <i>causes</i> better marks.",
        "Option B introduces a <b>lurking variable</b>: motivated students both choose the front row AND get higher marks; the seat itself is incidental.",
        "This severs the assumed causal link — if motivation is the real cause, forcing all students to the front won't replicate the effect."
      ],
      trap: "Option A (no clear front row) is a practical objection, not a logical one. Option D (other measures of education) broadens the goal but doesn't attack the causal claim directly."
    },
    "q10": {
      steps: [
        "An <b>assumption</b> is something the argument relies on but does not prove — it is smuggled in as if settled.",
        "'Organic food is healthier' is stated as a premise, but the argument never justifies it — it is the hidden load-bearing claim.",
        "In reality this is contested: 'definitively healthier for everyone in all circumstances' is far stronger than the evidence supports."
      ],
      trap: "'The local shop sells organic food' is an explicitly stated fact, not an assumption. The assumption is the unstated or unproven claim the argument leans on."
    },
    "q11": {
      steps: [
        "The argument: red jacket worn → team loses. Conclusion: stop wearing it.",
        "This only makes sense if you assume the jacket <b>influences the team's performance</b> — i.e., that there is a causal link.",
        "Without that assumption the pattern is mere coincidence (correlation, not causation)."
      ],
      trap: "Option D ('would win every match') overstates — even the arguer doesn't claim a guarantee, just that stopping wearing it would help. The core assumption is merely that the jacket has some causal effect."
    },
    "q12": {
      steps: [
        "The conclusion is: high umbrella sales → economy booming (people have money for non-essentials).",
        "Option B provides an <b>alternative explanation</b> that is both obvious and specific: rain causes umbrella purchases regardless of income.",
        "If rain explains the sales spike, the economic conclusion is completely undermined."
      ],
      trap: "Option D ('economy might be booming for other reasons') actually supports the idea that the economy is booming — it doesn't weaken the conclusion. Option B is the only one that explains the data without the economy booming at all."
    },
    "q13": {
      steps: [
        "Scan the passage for each option: 'Non-members may use the reading room but may not borrow books' is a <b>verbatim match</b> for option C.",
        "Option A is wrong: the library is closed on public holidays, so members cannot visit then.",
        "Option D is wrong: the passage sets a hard limit of six with no mention of a librarian override."
      ],
      trap: "Option B (non-member at 10 am Saturday) is tricky — the library does open at 11 am on Saturdays so they can't enter at 10 am. But the question asks what the passage <i>directly supports</i>: C is the cleanest, unambiguous, word-for-word inference."
    },
    "q14": {
      steps: [
        "The passage says businesses 'reported increased foot traffic <i>in the weeks following</i>' installation.",
        "This is a <b>temporal association</b>, not a causal claim — the passage does not say the lane <i>caused</i> the foot-traffic rise.",
        "Option C introduces the word 'caused' — that is the reader's inference, not the passage's statement."
      ],
      trap: "The distinction between 'A happened after B' and 'B caused A' is one of the most tested skills in reading comprehension and law. The passage describes a sequence, not a mechanism."
    },
    "q15": {
      steps: [
        "Chain the passage's rules: must register in advance → registration closes 48 hours before → code arrives via confirmation email → no code = no entry.",
        "If someone did not register, they did not receive a confirmation email, so they have no access code.",
        "No access code → cannot enter. Option B states this precisely."
      ],
      trap: "Options A and C introduce possibilities (explaining yourself, registering on the day) that the passage explicitly excludes — registration is advance-only and closes 48 hours before."
    },
    "q16": {
      steps: [
        "The passage states there is a 'designated off-lead area in its north-east corner'.",
        "Option C follows directly: a dog in that corner <b>may</b> be off the lead.",
        "Option A is wrong — the lead is required everywhere except the designated area. Option B is wrong — the café bans dogs. Option D is not stated."
      ],
      trap: "Option A is tempting if you miss 'at all times' for on-lead dogs. The passage creates a specific exception (the north-east corner) and Option C simply names it."
    },
    "q17": {
      steps: [
        "The passage states the hall is available 'on Fridays and Saturdays' — Sunday is not listed.",
        "Option D ('not available on Sundays') follows <b>directly</b> from that constraint.",
        "Option A adds 'unsuitable' — the hall might still work for small events; the passage only says it holds 80. Option B adds 'definitely' — the passage says when to apply, not that you'll always get it. Option C invents 'seated in rows'."
      ],
      trap: "Each distractor either overstates the passage ('unsuitable', 'definitely', 'in rows') or adds information not given. Stick only to what the words actually say."
    },
    "q18": {
      steps: [
        "Three criteria must ALL be met: (1) age 18–25, (2) full-time degree programme, (3) never received the scholarship.",
        "The 22-year-old meets (1) and (3) but is a <b>part-time</b> student — failing criterion (2).",
        "Failing any single criterion makes the applicant ineligible. Answer: not eligible."
      ],
      trap: "Option A focuses only on the two criteria met and ignores the one that fails. In legal reasoning, conditions joined by AND require all to be satisfied."
    },
    "q19": {
      steps: [
        "Logical form (modus ponens): All Book Club members → receive newsletter. Priya is a member. Therefore Priya receives the newsletter.",
        "This is a straightforward universal syllogism with no hidden steps."
      ],
      trap: "Option D reverses the direction: 'everyone who receives the newsletter is a member' — but the passage only says members get it, not that only members do. Reversing 'All A → B' to 'All B → A' is a classic logic error."
    },
    "q20": {
      steps: [
        "The rule only flows one way: <b>late submission → no full marks</b>.",
        "On-time submission removes the guaranteed bar to full marks, but does NOT guarantee full marks — quality, content, and other factors still apply.",
        "We can only conclude Kofi <i>may or may not</i> receive full marks."
      ],
      trap: "The trap is assuming the rule reverses: 'not late → full marks'. That is not what was stated. On-time submission is a <i>necessary</i> condition, not a <i>sufficient</i> one."
    },
    "q21": {
      steps: [
        "Conditions: (1) Anna not next to Ben. (2) Cara immediately left of Dan. (3) Ben at one end.",
        "Test option D: Ben–Cara–Dan–Anna. Ben is at end ✓. Cara immediately left of Dan ✓ (positions 2–3). Anna not next to Ben ✓ (Anna is position 4, Ben is position 1, not adjacent). All conditions satisfied.",
        "Check others: A (Anna–Ben–Cara–Dan): Anna is next to Ben ✗. B (Ben–Anna–Cara–Dan): Anna next to Ben ✗. C (Cara–Dan–Anna–Ben): Ben at right end ✓, Cara–Dan ✓, but Anna (pos 3) is next to Ben (pos 4) ✗."
      ],
      trap: "Systematically test each option against all constraints. It's easy to check one condition and stop — you must verify all three."
    },
    "q22": {
      steps: [
        "Check each rule: Rule 1 — one guest ✓ (nephew is the only guest). Rule 3 — guest must be 16+, nephew is 17 ✓. Rule 4 — no unpaid dues ✓.",
        "Rule 2 — guests must sign the visitor book on arrival. This rule is satisfied only <i>if</i> he signs.",
        "So: Lena can bring him, <b>provided he signs the visitor book</b>."
      ],
      trap: "Option A misquotes Rule 3 as 'under 18' — the actual rule says under 16. Always use the exact wording of each rule, not a paraphrase."
    },
    "q23": {
      steps: [
        "Chain: Alarm sounds → doors automatically lock → staff must use key cards. The alarm has sounded.",
        "Apply modus ponens twice: alarm → locks. Locks → key cards. Alarm is true, so both consequences follow.",
        "Staff <b>must use their key cards</b> to exit."
      ],
      trap: "Options B and C introduce doubts ('may or may not', 'only some doors') that are not in the premises. If the premises are accepted as true, the chain is deterministic."
    },
    "q24": {
      steps: [
        "Constraints: P before R; Q immediately before S; T last; R before Q.",
        "This means the order must contain: …P…R…Q S…T (T=5th).",
        "Option A: P(1)–R(2)–Q(3)–S(4)–T(5). P<R ✓, R<Q ✓, Q immediately before S ✓, T last ✓. All four satisfied.",
        "Option B: Q before R — violates R before Q. Option C: P after R — violates P before R. Option D: Q before R — violates R before Q."
      ],
      trap: "The 'Q immediately before S' condition is easy to miss — it means they must be adjacent with Q one step before S, not just Q appearing somewhere before S."
    },
    "q25": {
      steps: [
        "The principle at stake is <b>fairness / consistency of treatment</b>: all 30 students should be judged by the same standard.",
        "The only way to achieve this is to re-mark <b>all 30</b> with a single consistent standard.",
        "Option C is the only approach that treats every student equally and corrects the inconsistency."
      ],
      trap: "Option B (re-mark only the first 15) still leaves unequal treatment — the second 15 were already marked generously and would not be re-examined. Option D (flat bonus) does not remove the differential."
    },
    "q26": {
      steps: [
        "The principle in professional ethics: <b>confidentiality can be overridden when there is a credible, serious, and imminent threat to a third party</b>.",
        "Here all three elements are present: the plan is specific (harm another student), serious (serious harm), and time-limited (next week).",
        "Preventing serious harm to an innocent third party overrides the confidentiality duty in this case."
      ],
      trap: "Option A treats confidentiality as absolute — in professional ethics it is not. Option D (promise not to act) relies on the word of someone already intending harm, which is not a safeguard."
    },
    "q27": {
      steps: [
        "The principle at stake is <b>patient autonomy / informed consent and refusal</b>.",
        "A <b>competent adult</b> has the right to refuse medical treatment, even when that refusal may harm their health. The doctor's confidence about 'best interest' does not override this.",
        "Performing the procedure anyway would constitute battery in most legal systems."
      ],
      trap: "Option A (proceed anyway) is the most common intuitive but wrong answer — it substitutes the doctor's judgement for the patient's rights. Option B (family member's agreement) is also wrong: a competent adult does not need next-of-kin consent."
    },
    "q28": {
      steps: [
        "The principle is <b>proportionality</b>: punishment should fit the gravity of the offence.",
        "A one-month suspension for copying two sentences on a low-stakes in-class exercise is grossly disproportionate.",
        "Option B names proportionality precisely and limits the criticism to <i>this application</i>, rather than condemning all zero-tolerance policies (which would overstate)."
      ],
      trap: "Option A ('zero-tolerance is always wrong') is too absolute — proportionality criticises the <i>application</i> to a minor offence, not zero-tolerance as a concept in all contexts."
    },
    "q29": {
      steps: [
        "This is a <b>genuine ethical dilemma</b> — two legitimate principles are in conflict.",
        "Principle 1: the state's duty to protect those (children) who cannot fully protect themselves (paternalism / harm prevention).",
        "Principle 2: individual and family autonomy — the right to make choices without state interference.",
        "Option C names both sides accurately without prematurely resolving the tension."
      ],
      trap: "Options A and B each collapse the dilemma by declaring one side obviously correct — that is a sign of sloppy reasoning, not principled analysis. Option D deflects by mis-categorising the issue."
    },
    "q30": {
      steps: [
        "Two <b>legitimate duties</b> are in genuine conflict: (1) the legal obligation to comply with a court order; (2) the moral obligation to keep a promise that a source relied on at personal risk.",
        "Options A and B each dismiss one duty as non-existent — that is not honest ethical framing.",
        "Option C correctly names both duties and identifies this as a <b>genuine dilemma</b>, which is the starting point for principled reasoning."
      ],
      trap: "Option D (deny the promise) is simply dishonest — it avoids the dilemma by adding a new ethical violation. The first step in ethics is always to describe the tension accurately."
    },
    "q31": {
      steps: [
        "The analogy type: a question calls for an <b>answer</b>; a problem calls for a <b>solution</b>.",
        "Both pairs are: thing that requires resolution → what resolves it."
      ],
      trap: "'Difficulty' describes a quality of the problem rather than its resolution. 'Worry' is an emotional response, not a resolution."
    },
    "q32": {
      steps: [
        "<b>Obligatory</b> derives from 'obligation' — something one is bound to do.",
        "'Compulsory' is the direct synonym: required, not merely suggested."
      ],
      trap: "'Recommended' and 'optional' are the opposite of obligatory. 'Occasional' describes frequency, not requirement."
    },
    "q33": {
      steps: [
        "Permit, allow, and authorise all mean <b>to let something happen</b> — they grant permission.",
        "<b>Forbid</b> means to prohibit — the categorical opposite.",
        "Forbid is the odd one out."
      ],
      trap: "All four can appear in rule-sets, making it tempting to group them by context. Focus on meaning: three enable, one prohibits."
    },
    "q34": {
      steps: [
        "A <b>precedent</b> in law is an earlier decision that guides how similar future cases are decided.",
        "'An earlier example used as a guide for later cases' matches this precisely."
      ],
      trap: "'A final and unchangeable rule' describes a statute or binding rule, not a precedent — precedents can be distinguished or overruled."
    },
    "q35": {
      steps: [
        "The pattern is <b>antonyms</b>: lenient ↔ severe.",
        "Temporary means lasting for a limited time. Its antonym is <b>permanent</b>."
      ],
      trap: "'Brief' is a near-synonym of temporary, not its antonym. 'Frequent' and 'sudden' describe frequency and manner, not duration."
    },
    "q36": {
      steps: [
        "In contract drafting, <b>'shall'</b> is the standard word for a mandatory duty.",
        "'May' grants discretion; 'is encouraged' is precatory (aspirational, not binding); 'might wish to' is purely suggestive.",
        "Only 'The tenant <b>shall</b> keep the garden tidy' creates a binding obligation."
      ],
      trap: "'May' is a classic trap — in everyday speech it can sound strong, but in formal legal writing it explicitly denotes permission or discretion, not obligation."
    },
    "q37": {
      steps: [
        "<b>Void</b> in law means having no legal force or effect — as if the agreement never existed.",
        "A contract signed under duress (threat) is voidable or void because genuine consent was absent.",
        "'Having no legal force' is the correct definition."
      ],
      trap: "'Temporary' suggests the agreement might revive — void means it has no effect at all, not just temporarily."
    },
    "q38": {
      steps: [
        "'<b>Comprise</b>' means 'to consist of' — the whole comprises the parts.",
        "Option B: 'Five members comprise the committee' means 'five members make up the committee' — correct usage.",
        "Options A, C, D all use 'comprised of' or 'comprises of' — 'of' is redundant and non-standard. The whole comprises its parts without 'of'."
      ],
      trap: "'Is comprised of' is extremely common in everyday English but is considered non-standard in formal legal writing. Comprise does not take 'of'."
    },
    "q39": {
      steps: [
        "Annul, rescind, and repeal all mean to <b>cancel or revoke</b> something that existed.",
        "<b>Ratify</b> means to confirm or formally approve — the opposite direction."
      ],
      trap: "All four words appear in legal contexts, which makes it easy to group them. Ratify sounds formal and procedural, similar to the others, but its meaning is confirmation, not cancellation."
    },
    "q40": {
      steps: [
        "A witness <b>produces</b> testimony — it is the thing they create or deliver.",
        "An author produces a <b>manuscript</b> — the physical/written thing they create.",
        "The relationship is: person → the specific thing they produce in their role."
      ],
      trap: "'Reader' is what an author relates to but is not what an author produces. 'Library' and 'publisher' are contexts, not products."
    },
    "q41": {
      steps: [
        "Parse: 'No vehicle, other than a bicycle, may enter.' The phrase 'other than a bicycle' creates an exception.",
        "Translation: all vehicles are barred <i>except</i> bicycles. So bicycles <b>are allowed</b>; everything else is banned.",
        "Option C states this exactly."
      ],
      trap: "Option D ('only motor vehicles are banned') is too narrow — all vehicles except bicycles are banned, not just motor vehicles. Option A reverses the clause entirely."
    },
    "q42": {
      steps: [
        "Clause A: 'refundable unless damaged' = refund is the default; damage removes it. So: <b>no damage → refund; damage → no refund</b>.",
        "Clause B: 'refundable if damaged' = damage is the trigger. So: <b>damage → refund; no damage → no refund</b>.",
        "The conditions are <b>reversed</b> — a single word swap produces the opposite financial outcome."
      ],
      trap: "This is the core lesson of q4 applied to contract law. 'Unless' and 'if' are not interchangeable — they flip the condition under which the consequence applies."
    },
    "q43": {
      steps: [
        "The original, 'manager or the supervisor and the director,' is ambiguous between two readings: '(manager or supervisor) AND director' vs 'manager OR (supervisor AND director)'.",
        "Option A ('to the manager, or to both the supervisor and the director') makes the second reading explicit with clear punctuation — it resolves the ambiguity while preserving one of the possible intended meanings.",
        "The other options either change the required recipients or collapse all three into a flat list."
      ],
      trap: "Options B–D alter the substantive meaning rather than clarifying the ambiguous structure. The task is to resolve the ambiguity, not rewrite the obligation."
    },
    "q44": {
      steps: [
        "<b>Stipulate</b> means to specify something as a definite or binding condition, especially in a contract or agreement.",
        "'States as a firm condition' is the closest match."
      ],
      trap: "'Suggests gently' is the opposite register. 'Questions whether' inverts the meaning. 'Hints at indirectly' contradicts the directness that stipulate implies."
    },
    "q45": {
      steps: [
        "Universal rule: All houses on Oak Street have gardens. Number 12 is on Oak Street.",
        "Apply modus ponens: Number 12 → has a garden.",
        "This is the most direct logical inference available."
      ],
      trap: "'Oak Street is a pleasant place to live' and 'gardens require maintenance' go beyond the evidence — don't add pleasant-sounding extras the premises don't support."
    },
    "q46": {
      steps: [
        "Both ice-cream sales and drowning rise in summer. The argument treats this as causation.",
        "The flaw: a <b>third variable</b> (hot weather / summer) causes both independently.",
        "This is correlation without causation, driven by a lurking variable."
      ],
      trap: "Option A (small sample) might apply in some studies but is not the core logical flaw here — the flaw is the causal inference itself, not sample size."
    },
    "q47": {
      steps: [
        "The argument ignores the research entirely and attacks Dr Lee's <b>association</b> with a food company.",
        "This is an <b>ad hominem</b> attack (attacking the source) or 'poisoning the well' (pre-emptively discrediting the speaker).",
        "Even if the association exists, the research must be evaluated on its own merits."
      ],
      trap: "This is not an appeal to authority — that fallacy uses the person's credentials to support a claim. Here the source is being discredited rather than cited as an authority."
    },
    "q48": {
      steps: [
        "The argument: allowing one retake → demands for all retakes → grades meaningless. Each step is asserted without evidence.",
        "This is a <b>slippery-slope</b> argument: it assumes a chain of extreme consequences from a single modest step.",
        "The flaw is that each link in the chain is unproven — the conclusion is possible but not inevitable."
      ],
      trap: "A hasty generalisation draws a broad conclusion from too few examples. A slippery slope assumes a causal chain to an extreme. The feature here is the chain, not the sample size."
    },
    "q49": {
      steps: [
        "The statement presents exactly two options: cut the library budget or go bankrupt.",
        "In reality many other options may exist (find efficiencies, seek funding, reduce other budgets).",
        "This is a <b>false dilemma</b> (false dichotomy): artificially limiting the options to two."
      ],
      trap: "There is no expert cited (not appeal to authority) and no circular reasoning (the conclusion doesn't restate the premise). The key feature is the artificial either/or framing."
    },
    "q50": {
      steps: [
        "The argument: majority support → therefore good policy.",
        "Popularity does not establish correctness — many popular views have been wrong.",
        "This is the <b>appeal to popularity</b> (bandwagon) fallacy."
      ],
      trap: "Ad hominem attacks a person; straw man distorts an opponent's view; begging the question assumes what it tries to prove. None of those fit — the issue is using popularity as proof of quality."
    },
    "q51": {
      steps: [
        "The original proposal: reduce the speed limit near the school. The reply: opponent wants to ban all cars.",
        "'Reduce the speed limit' ≠ 'ban all cars' — the reply <b>exaggerates and distorts</b> the position.",
        "This is a <b>straw man</b>: misrepresent the opponent's view to make it easier to attack."
      ],
      trap: "No counter-evidence is provided, and there is no logical deduction or authority cited. The defining feature is the distortion of the original claim."
    },
    "q52": {
      steps: [
        "The evidence: 'once it opens, fewer cars will be stuck in jams.' The conclusion: 'the bridge will reduce traffic.'",
        "'Fewer jams' is just another way of saying 'reduced traffic congestion' — the supposed reason is the same as the conclusion.",
        "This is <b>circular reasoning</b>: the conclusion is smuggled in as the premise."
      ],
      trap: "There is no statistic, no authority, and no false dilemma. The structure loops back on itself — that is the defining mark of circularity."
    },
    "q53": {
      steps: [
        "The observation: successful entrepreneurs wake at 5 am. The conclusion: waking at 5 am → success.",
        "The flaw: waking early is a <b>correlate</b> of success, not necessarily a cause. Many factors distinguish successful entrepreneurs.",
        "This also shows <b>survivorship bias</b>: we only see successful entrepreneurs; we don't know how many early risers failed."
      ],
      trap: "'The sample only includes entrepreneurs who failed' inverts the survivorship issue. The sample is of successful ones, which is the problem — we don't see the unsuccessful early risers."
    },
    "q54": {
      steps: [
        "The argument: 'no one proved it doesn't work → it must work.'",
        "Absence of disproof is not the same as proof. This is the <b>appeal to ignorance</b> (argumentum ad ignorantiam).",
        "The burden of proof for a positive claim rests on the claimant, not on those who doubt it."
      ],
      trap: "A hasty generalisation draws from too few cases — there are no cases cited here. A slippery slope requires a chain of consequences. The specific structure here is using lack of evidence against as evidence for."
    },
    "q55": {
      steps: [
        "To strengthen 'the factory caused the pollution', we need evidence that <b>ties the factory to the pollutant specifically</b>.",
        "Option B does this: a rare chemical used <i>only</i> by that factory, appearing <i>only downstream</i> of it, is close to a fingerprint — it eliminates alternative sources and establishes the unique link.",
        "The other options (size, age, community dislike) are irrelevant to causation."
      ],
      trap: "That the factory opened years ago does not establish it caused this particular pollution event — it needs a specific chemical link, not just temporal presence."
    },
    "q56": {
      steps: [
        "The argument: streetlights installed → crime fell → lights caused the reduction.",
        "Option B: neighbouring towns with <b>no lights</b> saw the same drop — this is a natural control group.",
        "If crime fell equally without lights, the lights were not the cause — something else (e.g., national trend) explains it."
      ],
      trap: "Cost and occasional failures are practical concerns but do not attack the causal claim. Option B is the only one that directly undermines the causal inference with comparative evidence."
    },
    "q57": {
      steps: [
        "The inference: witness must be lying because the defendant says the opposite.",
        "This only works if we already assume the <b>defendant is more credible</b> than the witness.",
        "That assumption is unstated — it is doing all the argumentative work."
      ],
      trap: "Whether they know each other, whether the time matters, whether there are other witnesses — none of these are the <i>logical</i> assumption required. The core assumption is comparative credibility."
    },
    "q58": {
      steps: [
        "To test whether the blue bins caused the recycling rise, we need to rule out <b>confounding factors</b>.",
        "Option B asks whether anything else changed simultaneously (e.g., a new fine) — if so, that other factor might explain the rise.",
        "This is exactly the right question to isolate the causal variable."
      ],
      trap: "Cost and colour of old bins are irrelevant to causation. Number of bins ordered might matter at the margin but doesn't test the causal claim. Only B targets the alternative explanation."
    },
    "q59": {
      steps: [
        "Wednesday is not Sunday, so it falls under 'all other days' → tickets cost £8.",
        "Adults pay £8 on a Wednesday is <b>directly supported</b> by the passage."
      ],
      trap: "Option C (children under 5 must pay on Sundays) contradicts the passage — children under 5 enter free every day. Don't invert the rule."
    },
    "q60": {
      steps: [
        "Rule: visitors must be accompanied by a staff member at all times.",
        "If a visitor is inside the building, they must be accompanied — so there is a staff member with them.",
        "Option B states this direct inference."
      ],
      trap: "Option A says a visitor can go alone if they wear a badge — the passage says badges are for staff, and visitors must be accompanied regardless."
    },
    "q61": {
      steps: [
        "Check all conditions: within 14 days (10 days ✓), unused ✓, receipt presented ✓, not a sale item ✓.",
        "All conditions satisfied → the item is <b>eligible for a refund</b>."
      ],
      trap: "Option A ('10 days have passed') misreads the rule — 10 days is within the 14-day window, not past it."
    },
    "q62": {
      steps: [
        "The passage says: charities are <b>prioritised</b>; other community groups <b>may also apply</b>.",
        "Option B follows directly: a non-charity group may apply but is not prioritised."
      ],
      trap: "Option A ('only charities may apply') contradicts the explicit statement that other groups may also apply. Option C and D go far beyond the passage."
    },
    "q63": {
      steps: [
        "The passage reports: three regions up, north declined, company will review.",
        "It does <b>not</b> state why the north declined — option C ('caused by poor management') is not stated.",
        "Cause is the reporter's or reader's inference, not the passage's claim."
      ],
      trap: "The passage is factual and neutral about the northern decline — no cause is attributed. 'Poor management' is an assumption imported from outside."
    },
    "q64": {
      steps: [
        "The threshold: at least three meetings. Mara attended two — one short.",
        "She does <b>not meet the threshold</b> → not entitled to vote.",
        "The rule is clear and leaves no discretion."
      ],
      trap: "Option C ('may vote if another member agrees') invents a mechanism not in the passage. The rule is binary: three or more = entitled; fewer = not."
    },
    "q65": {
      steps: [
        "Walkers: year-round. Cyclists: April–September only. Horses: never.",
        "January is within 'year-round' for walkers → a walker may use the path in January.",
        "Option B is directly and unambiguously supported."
      ],
      trap: "Option A (cyclist in December) contradicts the April–September window. Option D ('closed to walkers in winter') is the opposite of what 'year-round' means."
    },
    "q66": {
      steps: [
        "The passage: permits are not transferable to non-residents.",
        "Option B follows directly: a non-resident <b>cannot use</b> a Mill Lane permit."
      ],
      trap: "Option A invents a three-permit exception. Option C introduces visitor parking — not mentioned. Option D introduces fees — not mentioned. Only B is a verbatim consequence of a stated rule."
    },
    "q67": {
      steps: [
        "Electronics are excluded from the discount → no discount on the £60 electronics order.",
        "£60 > £30 → free delivery applies.",
        "The customer gets <b>free delivery but not the discount</b>."
      ],
      trap: "Both conditions must be checked independently. The discount exception for electronics is specific — don't assume the discount applies just because the total exceeds £50."
    },
    "q68": {
      steps: [
        "Shortlisting requires passing <b>both</b> the written test and the interview.",
        "We know Sam passed the written test. We do not know the interview result.",
        "With only one of two required facts, we <b>cannot determine</b> shortlisting status."
      ],
      trap: "Option A assumes passing the written test is sufficient — it is necessary but not sufficient. Option D assumes Sam failed the interview — we have no information about that."
    },
    "q69": {
      steps: [
        "The rule: emergencies are seen <b>at any time</b>.",
        "3 pm is 'any time' → an emergency at 3 pm will be seen.",
        "Option B is a direct application of the universal rule."
      ],
      trap: "Option A (routine check-up as walk-in) contradicts 'routine check-ups are by booking only'. Option C (booked patients in morning) contradicts 'booked patients in the afternoon'."
    },
    "q70": {
      steps: [
        "70% own a bicycle. Half of those cycle to work: 50% × 70% = 35%.",
        "So <b>35% of respondents</b> both own a bicycle and cycle to work.",
        "Option B states this calculation precisely."
      ],
      trap: "Option A ('70% cycle to work') confuses bicycle ownership with commuting. Option C ('half of all respondents') mistakes 'half of the 70%' for 'half of all'."
    },
    "q71": {
      steps: [
        "The passage defines professional as 'anyone who has earned money from the sport'.",
        "Priya earned money <i>coaching</i> the sport → she is considered a professional.",
        "The competition is open to amateurs only → Priya is <b>not eligible</b>."
      ],
      trap: "The definition is explicit: money from the sport, not just money from competition. Coaching counts. Option A ignores the definition; Option C invents a cure not offered in the passage."
    },
    "q72": {
      steps: [
        "The passage attributes two things to the author: a <b>benefit</b> (improves focus) and a <b>drawback</b> (can weaken team bonds).",
        "Option C correctly captures this as 'both a benefit and a drawback'.",
        "This is a balanced view — not entirely positive or negative."
      ],
      trap: "Options A and B each take only half the picture. Option D ('no clear position') is wrong — the author clearly states both a benefit and a concern."
    },
    "q73": {
      steps: [
        "Logical form (modus ponens): All contracts signed by the manager are valid. This contract was signed by the manager.",
        "Therefore: this contract is <b>valid</b>.",
        "A straightforward universal application."
      ],
      trap: "Option B ('the manager signs all contracts') reverses the rule — the passage says manager-signed contracts are valid, not that the manager signs all contracts."
    },
    "q74": {
      steps: [
        "Logical form (<b>modus tollens</b>): If public holiday → office closed. Office is open (not closed).",
        "Contrapositive: not closed → not a public holiday.",
        "Therefore: <b>today is not a public holiday</b>."
      ],
      trap: "Option A ('today is a public holiday') would require the office to be closed — but the office is open. The open office is direct evidence against it being a holiday."
    },
    "q75": {
      steps: [
        "Some lawyers are novelists. All novelists are writers.",
        "The lawyers who are novelists are <i>also</i> writers (because all novelists are writers).",
        "Therefore: <b>some lawyers are writers</b>."
      ],
      trap: "Option A ('all lawyers are writers') overstates — only the lawyer-novelists are guaranteed to be writers. The 'some' qualifier is crucial."
    },
    "q76": {
      steps: [
        "All snakes are reptiles. No reptiles are mammals.",
        "Since snakes are a subset of reptiles, and reptiles are entirely disjoint from mammals, snakes are also entirely disjoint from mammals.",
        "Therefore: <b>no snakes are mammals</b>."
      ],
      trap: "Option A ('some snakes are mammals') contradicts both premises. Options C and D reverse directions not supported by the premises."
    },
    "q77": {
      steps: [
        "Order from the premises: Tom > Ravi > Sam (Tom finished ahead of Ravi; Ravi ahead of Sam).",
        "Sam is at the end of the chain → Sam came <b>last</b>."
      ],
      trap: "'Cannot be determined' is only appropriate when the premises leave the order genuinely ambiguous. Here the chain is fully determined."
    },
    "q78": {
      steps: [
        "Chain: overdue → fine → borrowing suspended. This book is overdue.",
        "Apply modus ponens twice: overdue → fine (applied). Fine → borrowing suspended.",
        "Therefore: <b>borrowing is suspended</b>."
      ],
      trap: "Option B ('no fine applies') contradicts the first link. Option D ('continues normally') contradicts the second link. Follow the chain to its end."
    },
    "q79": {
      steps: [
        "Constraints: green is at the bottom. Yellow is directly above green. Red is above blue.",
        "Build upward: green (bottom) → yellow (directly above green). Then blue must come next, and red above blue.",
        "Order bottom-up: green, yellow, blue, red → <b>red is on top</b>."
      ],
      trap: "The phrase 'directly above the green' pins yellow in position 2. Red is above blue but could not be position 2 (yellow is there) — work out the only valid arrangement systematically."
    },
    "q80": {
      steps: [
        "The rule: <b>only</b> permit-holders may fish — a permit is a <i>necessary condition</i>.",
        "Jon does not hold a permit → he does not meet the necessary condition.",
        "Therefore: Jon <b>may not fish</b> here."
      ],
      trap: "Option D ('holds a different permit') invents an exception not in the passage. The passage states only one type of permit, and Jon has none."
    },
    "q81": {
      steps: [
        "Both conditions required: (i) on time AND (ii) supported by a receipt.",
        "The claim is on time ✓. No receipt ✗.",
        "Failing condition (ii) → the claim is <b>not approved</b>."
      ],
      trap: "An AND requirement means all conditions must be met — not just the majority. One failed condition is enough to block approval."
    },
    "q82": {
      steps: [
        "Logical form (<b>modus tollens</b>): If witness reliable → report accurate. Report is not accurate.",
        "Contrapositive: not accurate → not reliable.",
        "Therefore: <b>the witness is not reliable</b>."
      ],
      trap: "Option D ('lied deliberately') overstates — unreliable does not mean intentionally dishonest. The logic only establishes unreliability, not motive."
    },
    "q83": {
      steps: [
        "Conditions: A before B. C after B. D before A. E last.",
        "Chain: D < A < B < C, and E is 5th (last).",
        "Order: D(1), A(2), B(3), C(4), E(5). <b>D finished first</b>."
      ],
      trap: "Build the chain step by step. E is explicitly last, which pins position 5. Work the remaining four in order using the inequalities."
    },
    "q84": {
      steps: [
        "Rule: meeting runs late → minutes emailed the next day.",
        "Observed: minutes emailed the <b>same day</b> (not next day).",
        "Modus tollens: not next-day email → meeting did not run late."
      ],
      trap: "Option A ('meeting ran late') would predict next-day email — but we observed same-day email. The observation contradicts the premise, so we infer the antecedent was false."
    },
    "q85": {
      steps: [
        "Universal: all documents in the folder are signed. The contract is in the folder.",
        "The contract is one of those documents → the contract is <b>signed</b>."
      ],
      trap: "Option B ('the only document') is not implied — there could be many documents. Option C ('some unsigned') contradicts the universal rule."
    },
    "q86": {
      steps: [
        "Disjunctive syllogism: (off OR disabled); not off.",
        "If not-off, then the other disjunct must hold: <b>someone disabled the alarm</b>.",
        "This is a valid disjunctive syllogism — the disjunction is exclusive because one is ruled out."
      ],
      trap: "Option B ('no one disabled it') contradicts the conclusion. The disjunction means at least one must be true — ruling out one forces the other."
    },
    "q87": {
      steps: [
        "The principle: <b>conflict of interest</b>. Even if the referee believes he can be fair, officiating his own child's match creates an appearance of partiality.",
        "The principled response is to <b>recuse</b> — step aside for a neutral official.",
        "This protects both the integrity of the result and public trust in the process."
      ],
      trap: "Option C (favour the other team to compensate) introduces a different bias, not neutrality. The solution to a conflict of interest is removal, not counter-bias."
    },
    "q88": {
      steps: [
        "The principle: <b>honesty</b> requires accurate accounting and correcting errors where possible.",
        "Option B — record the discrepancy accurately and correct it if the customer can be identified — is the honest response.",
        "Keeping the money without recording the error is dishonest even if undetected."
      ],
      trap: "Option A frames the error as hers to absorb — but the money belongs to the business, and honesty requires accounting for it. Option C (take from the next customer) is a further wrong."
    },
    "q89": {
      steps: [
        "The principle: <b>fair attribution</b> — giving credit where credit is due.",
        "Equal work deserves equal recognition; denying credit to one contributor violates this principle.",
        "Efficiency, confidentiality, and employer loyalty do not directly address the attribution issue."
      ],
      trap: "This is not a confidentiality question or an efficiency question. The core issue is fairness in how contributions are recognised."
    },
    "q90": {
      steps: [
        "The lease provides a <b>grace period</b> — an agreed rule the landlord is bypassing.",
        "Two principles caution against immediate eviction: (1) <b>acting within agreed rules</b> (the lease defines the terms both parties accepted) and (2) <b>proportionality</b> (one late payment does not warrant immediate eviction when the agreement allows more time).",
        "Option A names both: agreed rules and proportionate response."
      ],
      trap: "Freedom of contract (option C) is what created the lease — but it also created the grace period the landlord is ignoring. The principle that most directly cautions against bypassing the lease is staying within its agreed terms."
    },
    "q91": {
      steps: [
        "Two principles conflict: (1) <b>consequentialism</b> — deception may produce a benefit for many; (2) <b>autonomy and informed consent</b> — participants have a right to know what they are agreeing to.",
        "Option C names both sides of the genuine tension without resolving it prematurely.",
        "Options A and B collapse the tension by declaring one principle absolute."
      ],
      trap: "The funding source (option D) is a red herring — it might raise a conflict-of-interest issue but is irrelevant to the deception-vs-consent tension."
    },
    "q92": {
      steps: [
        "Two principles in tension: (1) <b>equal treatment</b> — same offence should attract the same consequence; (2) <b>rewarding honesty</b> — owning up to wrongdoing is a mitigating factor in many justice systems.",
        "Option A correctly names both sides: whether honesty in owning up should affect the consequence, balanced against equal treatment for equal wrongdoing."
      ],
      trap: "The other options (exam difficulty, parental complaints, classroom size) are irrelevant to the ethical principle at stake."
    },
    "q93": {
      steps: [
        "The principle: <b>honesty</b> — not deceiving customers about what they are receiving in exchange for their money.",
        "Quietly lowering quality without disclosure is a form of misrepresentation — customers pay for one thing and receive another.",
        "Option B names this principle directly."
      ],
      trap: "Profit maximisation describes the motivation, not the ethical constraint on it. Employee loyalty and delivery speed are irrelevant to the deception concern."
    },
    "q94": {
      steps: [
        "The principle: <b>impartiality requires avoiding not just actual bias but the appearance of bias</b>.",
        "Even if the judge is subjectively certain the gift won't influence her, accepting it creates an objective appearance of partiality that undermines public trust in impartial decisions.",
        "Option B captures this: appearance of bias undermines trust."
      ],
      trap: "Option D ('gifts are always illegal') overstates — legality varies; the ethical concern is about the appearance of bias even where no law is broken."
    },
    "q95": {
      steps: [
        "The volunteer has a <b>duty of confidentiality</b> — they learned the information in their capacity as a volunteer.",
        "Against this sits a claimed <b>public interest</b> in disclosure — the public's right to know about a charity's finances.",
        "Option B names this tension precisely: confidentiality vs public-interest disclosure (the classic whistleblowing dilemma)."
      ],
      trap: "Speed vs accuracy and cost vs benefit are business considerations, not the ethical principles at stake here. Loyalty vs efficiency misframes the issue."
    },
    "q96": {
      steps: [
        "The principle: <b>accountability / taking responsibility</b> for one's actions and their consequences.",
        "Leaving a note with contact details allows the owner to be compensated — this is what responsibility requires even when no one is watching.",
        "Option B is the responsible action."
      ],
      trap: "Options A, C, and D each use the absence of witnesses or the severity threshold to escape responsibility. Accountability does not depend on whether one is observed."
    },
    "q97": {
      steps: [
        "The principle: <b>equal moral worth of persons</b>. In bioethics, all patients have equal claim to life-saving treatment — rank by social 'importance' treats some lives as more valuable than others.",
        "Option B names this: valuing by social status conflicts with the principle that all people have equal moral worth.",
        "Standard triage uses medical criteria (who can benefit most), not social rank."
      ],
      trap: "Option A (too slow) is a practical objection, not an ethical one. Option D (importance is easy to measure) would make the criterion worse, not better."
    },
    "q98": {
      steps: [
        "The principle: <b>the right to a defence</b> — in an adversarial legal system, even people the lawyer believes are guilty are entitled to have the prosecution's case properly tested.",
        "A lawyer's role is not to judge guilt but to hold the state to its burden of proof and ensure the process is fair.",
        "Option B articulates this: everyone is entitled to a defence and to have the case against them properly tested."
      ],
      trap: "Option A ('lawyers must always believe their clients') is not a legal principle — defence work does not require personal belief in innocence. Option C ('guilt is never knowable') is a philosophical position, not the operative principle."
    },
    "q99": {
      steps: [
        "The principle: <b>interpret a rule by its purpose</b> (teleological interpretation). The 'no food' rule exists to keep the library clean and orderly — not to endanger health.",
        "A genuine medical emergency is outside the rule's purpose — applying the rule literally would cause the harm the library is supposed to prevent.",
        "Option B names this: the purpose behind the rule should guide a sensible exception for a genuine medical need."
      ],
      trap: "Option A ('no exception in any case') ignores the purpose-based approach that underlies legal and ethical interpretation. Option D ('ignore rules whenever inconvenient') is too permissive — the exception is narrow and purpose-grounded, not a general licence."
    },
    "q100": {
      steps: [
        "Two principles in conflict: (1) <b>collective security</b> — surveilling communications catches criminals and protects people; (2) <b>individual privacy</b> — everyone has a right not to have their private communications monitored.",
        "Option C names both sides and acknowledges the trade-off must be weighed, not assumed — neither side is absolute.",
        "Options A and B each collapse the tension; Option D reduces the question to cost."
      ],
      trap: "This is the same structure as q29 (paternalism vs autonomy) — a genuine tension between a collective benefit and an individual right. The task is to name the tension accurately, not to resolve it."
    }
  }
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
