# Behavioral Telemetry & Learning-Agility Layer — Design

**Date:** 2026-05-31
**Scope:** AI/ML pilot (`ai-ml.html`), to be replicated across the other 7 assessments later.

## Context

The assessments already capture rich per-question behavioral signals (answer
changes with timestamps, time-to-first-answer, total time, revisit count,
rapid-answer and near-deadline flags) and persist them per attempt in
localStorage. None of this is analyzed or shown to students — only the final
answer score is. Meanwhile, the multi-attempt system serves *fresh, unseen*
questions each pass, so there is no measurement of whether a student improves
after reviewing their previous results.

This feature turns the existing raw telemetry into insight, and adds a
cross-pass learning measurement: after a student reviews their answers, the next
pass measures how their performance on the same *skills* changes. This adds a
soft layer of aptitude/competency signal — specifically **learning agility**
(ability to learn and apply) — on top of raw correctness, and it teaches students
that assessments can read underlying patterns, not just final answers.

## Goals

1. Derive and surface four behavioral patterns from already-collected data.
2. Add a per-question review step between passes (your answer, correct answer, why).
3. Let the student choose the next pass's focus (weak areas vs balanced), and
   weight question selection accordingly.
4. Measure and report **learning agility**: weak-dimension improvement across passes.
5. Keep the existing "this is a friendly snapshot, not a fixed verdict" tone,
   while honestly noting that behavioral patterns are tracked.

## Non-Goals

- No backend, database, or server-side analytics.
- No change to sitting length (still 30 questions).
- No re-serving of identical questions (next pass stays fresh; "apply" is measured
  on new items in the same dimensions).
- Not propagating to the other 7 files in this build (pilot first).

## Decisions (resolved during brainstorming)

| Question | Decision |
|---|---|
| Pass model | New questions, same skills (fresh, not repeated) |
| Pass-2 selection | Student chooses: **Focus weak areas** or **Balanced mix** |
| Review depth | Full per-question review: your pick ✓/✗, correct answer, one-line *why* |
| Framing | Soft competency; growth-framed; existing disclaimer stays; add honest note that patterns are tracked |
| Scope | AI/ML pilot first |

## Architecture

All changes live in `ai-ml.html`. No new files at runtime.

| Piece | Responsibility |
|---|---|
| `analyzeBehavior(perQuestion)` | Pure function → derives the four pattern summaries from existing raw fields. |
| `compareToPriorPass(attempts, currentDimScores)` | Reads stored attempts; computes per-dimension deltas and a learning-agility summary. |
| New **Review** view (`view-review`) | Added to the `views` array; per-question review list + focus-choice buttons. |
| `selectQuestionsForAttempt(focusMode)` | Extends current function; `"weak"` over-samples low-scoring dimensions, `"balanced"` keeps current random-unseen behavior. |
| `why` field on each question | One-line explanation, shown only in the Review view. |
| Report additions | Behavioral pattern cards (always) + learning-agility card (attempt ≥ 2). |
| Admin report additions | Same panels in the mentor view. |

### Data flow & persistence

- Behavioral analysis and cross-pass comparison read from the **existing**
  persisted `perQuestion` + `dimScores` — no schema-breaking change.
- Bump `schema` to `aptitude-readiness/v2`; add `focusMode` to the saved object.
- Read older `v1` attempts gracefully (missing fields default to neutral).

### The four behavioral patterns

1. **Pace & rushing** — from `wasRapid`, `timedOut`, `answeredNearDeadline`,
   time-to-first. E.g. "You answered 8 questions very fast; 5 of those were wrong."
2. **Second-guessing** — from `changes[]`: switch rate, and whether switches went
   right→wrong vs wrong→right. E.g. "You changed 6 answers; 4 changed a correct
   answer to a wrong one."
3. **Confidence vs accuracy** — fast-answer correctness cross-tab. E.g. "Your quick
   answers were right 80% of the time — trust your instinct here."
4. **Learning agility** *(attempt ≥ 2 only)* — weak-dimension % improvement vs the
   prior pass. E.g. "After reviewing, your stats score rose from 33% to 60% — you
   pick things up quickly."

### Review → next-pass flow

```
finishTest → Report view
   ↓ "Review my answers"
Review view: per-question (prompt, your pick ✓/✗, correct, why)
   ↓ focus choice
[Focus weak areas]  or  [Balanced mix]
   ↓
startTest(focusMode) → next pass selects accordingly
```

### Weighted selection (`focusMode="weak"`)

Read the most recent attempt's `dimScores`. Allocate the 30 slots so weak
dimensions get more (e.g. weakest dimensions ~8–10 each) while every dimension
keeps at least ~3, all drawn from unseen questions. If unseen runs low, fall back
to the existing full-bank reset behavior. `"balanced"` = current logic unchanged.

### Framing / copy

- Keep the existing "informal, just-for-fun snapshot … not a measure of your
  ability" notice verbatim.
- Add a growth-framed learning-agility line when applicable.
- Add one honest educational note in the report: *"These quizzes notice more than
  your final answers — how quickly you respond, when you change your mind, and how
  you improve after reviewing. Patterns like these are part of what real
  assessments can measure too."*

## Verification

1. `node` parse check of the `BANK` array still passes (100 Qs, valid answers,
   now each with a `why` string).
2. Open `ai-ml.html` in a browser:
   - Complete pass 1 → report shows the behavioral cards (no learning-agility yet).
   - Click review → every question shows your pick, correct answer, and a *why*.
   - Choose **Focus weak areas** → next pass over-samples the weak dimensions.
   - Complete pass 2 → report now shows the learning-agility card with the delta.
   - Choose **Balanced mix** on another run → even spread, current behavior.
3. Load a result file in the admin view → behavioral + learning-agility panels render.
4. Confirm an older v1 result file still loads without errors.

---

## Appendix: 100 `why` Explanations (AI/ML bank)

One concise line per question, keyed by id. These populate the `why` field and are
shown only in the Review view.

| id | why |
|----|-----|
| q1 | The rise is 15 out of 60, and 15/60 = 25%. |
| q2 | Twice as many taps fill it in half the time → 2 minutes. |
| q3 | If 35% play, 65% don't: 65% of 800 = 520. |
| q4 | 2x = 17 − 5 = 12, so x = 6. |
| q5 | The smaller share is 1 part of 5: 2000 ÷ 5 = ₹400. |
| q6 | Doubling from 3: 6 → 12 → 24 → 48 after 4 hours. |
| q7 | Gaps grow 4, 6, 8, 10, so add 12 → 42. |
| q8 | Studying biology doesn't make her a doctor — we can't conclude. |
| q9 | They're first letters of months; after May (M) comes June (J). |
| q10 | A=1, D=4, D=4 → 1-4-4. |
| q11 | A cube is 3-D; the others are flat 2-D shapes. |
| q12 | Each number is the sum of the two before: 5 + 8 = 13. |
| q13 | Set B's values spread out; Set A's are all identical. |
| q14 | The ₹400 outlier drags the average up; the median is more typical. |
| q15 | Three of six faces are even: 3/6 = 1 in 2. |
| q16 | The illness is so rare that most positive tests are false alarms. |
| q17 | The five must total 100; 100 − (18+22+19+21) = 20. |
| q18 | Coin tosses are independent — still 1 in 2, streak or not. |
| q19 | Adding 1+2+3+4 gives 10. |
| q20 | x>3 is true but x>10 is false, so the 'otherwise' shows B. |
| q21 | 4 × 3 × 2 × 1 = 24. |
| q22 | The number 1 appears twice in the list. |
| q23 | The temp swap leaves a = 7 and b = 2. |
| q24 | Even numbers 2 + 4 + 6 = 12. |
| q25 | March→April jumps 23 to 38, the biggest month-on-month rise. |
| q26 | Mistakes drop sharply, then flatten out. |
| q27 | 70 was scored by the most students (10). |
| q28 | 120 is 40 more than 80, and 40 is 50% of 80. |
| q29 | The scores range widely, so performance varies a lot. |
| q30 | Visitors rise to a mid peak, then fall. |
| q31 | 20% of 150 = 30. |
| q32 | A 10% cut off 800 is 80, leaving 720. |
| q33 | 240 km ÷ 3 h = 80 km/h. |
| q34 | Each pen is ₹12, so 8 pens cost ₹96. |
| q35 | 1.2 × 0.8 = 0.96, a 4% decrease overall. |
| q36 | 50 g per person × 10 = 500 g. |
| q37 | 2 + 4 + 6 + 8 + 10 = 30. |
| q38 | If 3/4 = 60, the whole is 60 ÷ 3 × 4 = 80. |
| q39 | 100 m ÷ 5 s = 20 m/s. |
| q40 | Rates add: 1/6 + 1/12 = 1/4, so 4 minutes together. |
| q41 | Profit ₹100 on cost ₹400 = 25%. |
| q42 | Total is 90; remove 20 → 70 ÷ 5 = 14. |
| q43 | Half of 250 is 125. |
| q44 | 1000 × 0.9 = 900, then × 0.8 = 720. |
| q45 | Add 5 each time → 25. |
| q46 | Add 3 each time → 15. |
| q47 | Double each time → 32. |
| q48 | A carrot is a vegetable; the rest are fruit. |
| q49 | C=3, A=1, T=20 → 3-1-20. |
| q50 | A bird lives in the sky as a fish lives in water. |
| q51 | If some cats are black and black things are dark, some cats are dark. |
| q52 | These are squares: 1, 4, 9, 16, 25. |
| q53 | C > A > B, so C is tallest. |
| q54 | They're prime numbers; the next prime is 13. |
| q55 | Multiply by 2, 3, 4… so × 5 = 120. |
| q56 | 100 ÷ 7 leaves 2, so two days after Monday is Wednesday. |
| q57 | Skip one letter each time → I. |
| q58 | Halve each time → 12.5. |
| q59 | (2 + 4 + 6) ÷ 3 = 4. |
| q60 | Sorted: 1, 2, 3 — the middle value is 2. |
| q61 | 3 appears most often. |
| q62 | 3 red out of 5 balls = 3 in 5. |
| q63 | Largest 9 minus smallest 2 = 7. |
| q64 | At least one tail (7/8) is far likelier than three heads (1/8). |
| q65 | (10 + 20 + 30 + 40) ÷ 4 = 25. |
| q66 | Seven can be made the most ways, so it's most common. |
| q67 | One above-average score pulls the mean up, between 50 and 80. |
| q68 | 70 + 40 − 100 = 10% must overlap at minimum. |
| q69 | HT and TH out of four outcomes = 1 in 2. |
| q70 | 120 km in 1 + 2 = 3 hours → 40 km/h. |
| q71 | One of two outcomes = 1 in 2. |
| q72 | Both sets average 5, despite different spread. |
| q73 | 10 + 5 = 15. |
| q74 | 1 + 2 + 3 = 6. |
| q75 | Doubling 2 three times: 4 → 8 → 16. |
| q76 | Even numbers 2, 4, 6 → count 3. |
| q77 | x>5 is false but x>1 is true → B. |
| q78 | The largest value is 16. |
| q79 | a becomes 3, then b = 3 + 2 = 5. |
| q80 | 10 → 7 → 4 → 1 — the loop runs 4 times. |
| q81 | Reversed list is 3, 2, 1; first item is 3. |
| q82 | 5 × 4 × 3 × 2 × 1 = 120. |
| q83 | Fibonacci steps end with b = 5. |
| q84 | 1 + 1 + 2 + 3 + 4 = 11. |
| q85 | x is over 5, so it shows 'big'. |
| q86 | Doubles 6 + 12 + 18 = 36. |
| q87 | Q4 is the tallest bar at 40. |
| q88 | The third reading (25) is highest. |
| q89 | B has the most votes at 45. |
| q90 | It doubles each step, rising faster and faster. |
| q91 | 100 + 50 + 150 = 300. |
| q92 | 30 girls out of 50 = 60%. |
| q93 | The line drops steadily from 100 to 40. |
| q94 | Wed→Thu rises 2 to 8, the biggest jump. |
| q95 | 200 is twice 100. |
| q96 | The flat line shows no change. |
| q97 | 80 is double 40, i.e. 100% more. |
| q98 | It falls twice: 60→45 and 90→75. |
| q99 | Rent 1000 of total 2000 = 1/2. |
| q100 | Fish is the shortest bar at 2. |
