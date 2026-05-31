# Question Bank Blueprint & QA Rubric

The reusable standard for expanding any assessment bank from 30 to 100 questions
without quality drift. Every bank-expansion issue (#8–#15) references this document.
(Tracking: #6. This document satisfies #7.)

---

## 1. Target Structure

Each assessment is a **100-question bank**, organised into **5 dimensions** of
**20 questions each**. A single sitting still draws **30 questions** at random —
the larger bank only deepens the pool so repeat sittings show fresh material.

| Property            | Value                                  |
|---------------------|----------------------------------------|
| Total per bank      | 100 questions                          |
| Dimensions          | 5 (unchanged from the existing file)   |
| Questions/dimension | 20                                     |
| Sitting length      | 30 (unchanged — runtime untouched)     |
| Existing kept       | 30 (6 per dimension)                   |
| New to author       | 70 (14 per dimension)                  |

The 5 dimension keys are **already defined in each file** — do not invent new ones.
For AI/ML they are: `quant`, `logic`, `stats`, `data`, `code`. Read the existing
question array of each file to find that file's keys before authoring.

---

## 2. Data Model (match exactly)

New questions are appended to the same `const QUESTIONS = [ ... ]` array. Each object:

```js
{id:"q31", dim:"quant", difficulty:"medium", timer:50, prompt:"...", options:["A","B","C","D"], answer:1}
```

| Field        | Required | Notes                                                          |
|--------------|----------|----------------------------------------------------------------|
| `id`         | yes      | `"q<n>"`, sequential and unique within the file (q31…q100)     |
| `dim`        | yes      | one of the file's 5 existing dimension keys                    |
| `difficulty` | yes      | `"easy"`, `"medium"`, or `"hard"`; data-level metadata only   |
| `timer`      | yes      | seconds; keep as an explicit field separate from difficulty    |
| `prompt`     | yes      | the question text; plain string                                |
| `options`    | yes      | array of 4 strings (4 is the established norm)                 |
| `answer`     | yes      | **0-indexed** integer pointing at the correct option          |
| `code`       | optional | pseudo-code block as a `\n`-separated string (see `code` dim)   |
| `chart`      | optional | `barChart(labels, values, unit)` or `lineChart(values, unit)`  |

`difficulty` is now part of the question data model, but it is **metadata only**
for now. The runtime does **not** need to use it yet for selection, timing,
reporting, or analytics. Existing questions should be backfilled to one of the
three allowed values so each bank is internally consistent.

---

## 3. Difficulty Mix (per dimension, 20 questions)

| Difficulty | Count | Meaning                                             |
|------------|-------|-----------------------------------------------------|
| Easy       | 6     | one step, obvious method, recognisable              |
| Medium     | 10    | two steps or a small twist                          |
| Hard       | 4     | multi-step, a trap distractor, or counter-intuitive |

Across a full bank this works out to roughly **30 easy / 50 medium / 20 hard**.
Treat these numbers as a **target shape, not a strict quota** — the existing 30
questions already lean easy–medium, so weight new items toward medium and hard to
move the bank in the right direction. Landing close to the shape is success;
relabeling or rewriting good questions just to hit exact counts is not.

`difficulty` and `timer` are intentionally **not coupled** in this blueprint.
Difficulty should be labeled at the data level now; any timer policy can be
discussed and decided later without changing the taxonomy.

---

## 4. Subtype Coverage (anti-duplication)

Within each 20-question dimension, spread items across **at least 5–6 distinct
subtypes** so the bank doesn't collapse into reworded clones. No single subtype
should exceed ~4 questions. Example subtype families:

- **quant**: percentages, ratios, rates/work, simple algebra, growth/doubling, averages
- **logic**: number series, syllogisms, odd-one-out, coding-decoding, analogies, pattern/sequence
- **stats**: spread/variance, mean-vs-median, basic probability, conditional/base-rate, sampling sense, misleading averages
- **data**: bar-chart reading, line-chart trend, comparison/ratio from chart, distribution reading, peak/change detection
- **code**: loops/accumulation, conditionals/branching, counting, swaps/variables, simple recursion/factorial, filtering

For non-AI/ML assessments, derive an equivalent subtype list from that subject's
existing questions before authoring — keep it grounded in what's already there.

---

## 5. Per-Question QA Checklist

Every new question must pass **all** of these before it's accepted:

1. **One clear best answer** — exactly one option is defensibly correct.
2. **Plausible distractors** — wrong options reflect realistic mistakes, not filler.
3. **Answer key verified** — `answer` index manually re-computed and confirmed.
4. **Wording clarity** — unambiguous, no double negatives, no trick phrasing unless
   the question is *intentionally* a hard item.
5. **Difficulty fit** — actual difficulty matches its `difficulty` label.
6. **No duplicate idea** — not a reworded twin of another item in the bank; subtype
   quota (Section 4) respected.
7. **No prerequisite knowledge** — solvable with general reasoning + school maths;
   no specialist jargon beyond the assessment's intended aptitude style.
8. **Self-contained** — any chart/pseudo-code needed is included via `chart`/`code`.
9. **Tone match** — everyday, friendly scenarios consistent with existing items.

---

## 6. Hybrid Authoring Workflow

1. **Draft (AI):** generate candidate items per dimension/subtype against this rubric.
2. **Verify (factual):** independently re-solve every calculation and logic item;
   confirm the `answer` index. Check chart values support the stated correct answer.
3. **Editorial QA:** run each item through the Section 5 checklist; cut or rewrite
   anything that fails. Check the bank-level subtype and difficulty distributions.
4. **Backfill the original 30 (explicit task):** none of the existing questions
   carry a `difficulty` value today, so each must be labelled `easy`/`medium`/`hard`.
   This is real per-assessment work — **~30 judgement calls per file, ~240 across
   all 8 assessments** — not an afterthought. Do it as a distinct pass before or
   alongside authoring, keeping the question content itself intact.
5. **Integrate:** append the new items to the file's `QUESTIONS` array with
   sequential ids and explicit `difficulty` values; keep the existing 30 intact.

---

## 7. Bank-Level Acceptance (smoke check)

After expanding a file, confirm:

- [ ] Exactly **100** question objects in the array.
- [ ] Exactly **20** per dimension (`grep` count of each `dim:` key).
- [ ] All `id`s unique and sequential.
- [ ] Every question has a valid `difficulty` value: `easy`, `medium`, or `hard`
      (including the backfilled original 30 — see Section 6).
- [ ] Difficulty totals are **in the neighbourhood** of 30 easy / 50 medium / 20 hard.
      This is a guide, not a pass/fail gate — small deviations are fine.
- [ ] Every `answer` is a valid index into its `options` array.
- [ ] Open in a browser → start the assessment → a 30-question sitting runs with
      no console errors and renders charts/code blocks correctly.
- [ ] Complete a sitting → results page renders.
- [ ] Start a second attempt → different questions appear (pool tracking works).

---

## 8. Out of Scope

- Changing sitting length from 30 questions.
- Adding a backend, CMS, or database authoring workflow.
- Modifying the runtime question-selection engine to use difficulty.
- Changing timer behavior based on difficulty.
- Bundling unrelated bug fixes into the content program.

---

## 9. Decision Log

- **`difficulty` is a first-class field, decoupled from `timer`.** Difficulty is
  recorded as data-level metadata (`easy`/`medium`/`hard`); the runtime does not
  consume it yet. `timer` stays an independent field — the two are not coupled, so
  timer policy can change later without touching the difficulty taxonomy.
- **The 30/50/20 difficulty mix is suggestive, not a gate.** It's a target shape to
  steer authoring, not a pass/fail check. Landing in the neighbourhood is success;
  we will not relabel or rewrite sound questions just to hit exact counts.
- **The original 30 per assessment get backfilled with difficulty labels.** Treated
  as explicit work (~240 items total), content left intact.
