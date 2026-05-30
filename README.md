# Aptitude Explorer Lab — Aptitude Readiness Checks (for fun)

A small, self-contained web toy with multiple aptitude explorations. Currently includes
the AI/ML readiness check, with Data Science and Computer Science
coming soon. Everything runs in the browser — no server, no database, no internet
needed, no dependencies.

> ### ⚠️ Disclaimer — please read
> This is an **informal, experimental tool made for fun and learning**. It is **not**
> an official test, exam, assessment, or career-guidance service, and it is **not
> affiliated with or endorsed by** any school, college, university, examination board,
> or institution. The reports reflect **only the specific options selected** on this
> short set of questions on a single occasion. They are **not** a measure of anyone's
> intelligence, ability, skill, aptitude, potential, or readiness for any course,
> career, or exam, and **must not** be used for admission, selection, hiring,
> counselling, or any other consequential decision. No professional, educational,
> psychological, or career advice is offered or implied. Use at your own discretion.

> ### 🔒 Privacy — no data is collected
> Nothing is collected, stored on a server, transmitted, tracked, or shared. The whole
> thing runs **entirely in your own browser**. The only file that ever leaves your
> device is the results file *you* choose to download and pass on. The login is purely
> a simple gate to deter bots and casual automated access — it is **not** a security
> feature and protects nothing sensitive.

> Designed by **thebenVar** for personal use, and shared here for fun / experimentation.

## Logging in

The credentials are shown right on the home page (there is no account and no signup):

| Role    | Username  | Password     |
|---------|-----------|--------------|
| Student | `student` | `learn2025`  |
| Mentor  | `mentor`  | `mentor2025` |

They live in the `CONFIG.credentials` block at the top of the `<script>` in
`index.html` and can be changed there. Because the page is fully client-side, these
credentials are visible to anyone who opens the file — that's fine, since the login is
just a bot-gate, not security.

## The five areas it explores

1. **Quantitative / Numerical** — arithmetic, %, ratios, basic algebra
2. **Logical & Abstract Reasoning** — sequences, patterns, deduction
3. **Statistics & Probability Intuition** — averages, spread, likelihood
4. **Computational / Step-by-Step Logic** — following loops/conditions (no coding needed)
5. **Data Interpretation** — reading charts and tables

~30 multiple-choice questions, ~6 per area, gently timed. All questions are phrased in
everyday situations (shops, students, dice, taps), not technical jargon.

## How to use it

### Student
1. Open `index.html` (double-click it, or open the hosted link). You'll see a grid of
   available tests.
2. Pick a test (e.g., **AI/ML**). You'll be taken to that test's page.
3. Log in with the student credentials shown on the page.
4. Answer the questions. A soft per-question timer is shown — if it runs out it simply
   moves on; it does **not** erase your answer. You can go **Back** to revisit.
5. At the end you get a friendly snapshot. You can **Download your report (PDF)** (opens
   the print dialog → *Save as PDF*) and **Download your results file** (`.json`) to keep
   or share with a mentor. Your results are automatically saved in your browser.

### Mentor / admin
1. Open the same `index.html`, log in with the mentor credentials.
2. Drag the student's `.json` results file onto the drop zone (or click to choose).
3. A detailed answer analysis + behavioral breakdown renders. The file is
   integrity-checked; you'll see a warning if it was edited by hand.

## Study guide + personalized review (`learn.html`)

`learn.html` teaches **how to reason through** each question type (step-by-step method,
the common trap, then the answer) — not just an answer key. No login needed.

**Automatic syncing via browser storage:** When the student finishes a test, results
are automatically saved in the browser's `localStorage` under a test-specific key
(e.g., `aptitude-result:ai-ml`). When they visit `learn.html`, it auto-detects which
test's results are saved and displays the personalized review instantly — **no
download/upload step needed**. The guide automatically shows which test is being reviewed
(e.g., "Reviewing your AI/ML results"). They can also manually upload a
different results file (e.g., from another device) by dragging a `.json` onto the zone.

The personalized review:
- Overlays actual answers onto the guide (marks each right/wrong, highlights wrong picks)
- Auto-opens explanations for every missed question
- Builds a **personalized analysis** with insights from captured behavior: rushing,
  second-guessing, time pressure, concept-gap vs. speed, blanks, strongest/weakest areas
- Offers a short, ordered study plan

Everything is read in the browser only; nothing is uploaded anywhere.

`aptitude-result-sample.json` is included so you can see the review in action before
anyone has taken the test. Just drop it onto the upload zone in `learn.html`.

All pages link to each other: home → test → results → guide, and guide → home/test.

## Hosting / sharing

- **Simplest: just send the files.** Email / WhatsApp / USB `index.html` (and
  `learn.html`). They run fully offline. The relative links between them work as long as
  both sit in the same folder.
- **Deploy to Vercel or GitHub Pages.** Drop the folder in as a static site — no build
  step. `vercel.json` enables clean URLs, so the guide is served at **`/learn`** and the
  test at **`/`**.

## Files

### Core pages
- `index.html` — home page listing all available tests (AI/ML active, DS & CS coming soon).
- `ai-ml.html` — the AI/ML test (friendly student report + mentor analysis + behavioral capture).
- `learn.html` — study guide + personalized review (auto-loads test results, upload to analyze).
- `dashboard.html` — consolidated progress dashboard (cross-test scores, dimension comparison, behavioral profile, study focus).

### Config & samples
- `aptitude-result-sample.json` — example results file for trying `learn.html`.
- `vercel.json` — clean-URL config for Vercel (enables `/ai-ml`, `/learn`, `/ds`, `/cs` URLs).
- `README.md` — this file.

### Future tests (to be created)
- `ds.html` — Data Science aptitude test (coming soon).
- `cs.html` — Computer Science aptitude test (coming soon).

## Customising

### Tuning the AI/ML test
Everything tunable lives at the top of the `<script>` block in `ai-ml.html`:

- `TEST_ID` — the test's short code (e.g., `"ai-ml"`). Used for localStorage keys.
- `CONFIG.credentials` — usernames, passwords, roles.
- `CONFIG.rapidMs` — threshold (ms) below which an answer counts as "rushed".
- `CONFIG.nearDeadlineSec` — seconds-left threshold for "answered under pressure".
- `CONFIG.bands` / `CONFIG.criticalWeakPct` — band cutoffs.
- `CONFIG.dims` — area labels, meanings, and improvement advice.
- `BANK` — the question array: `{ id, dim, prompt, options[], answer, timer?, code?, chart? }`.
  Charts use the `barChart()` / `lineChart()` helpers (inline SVG, no libraries). To add a
  question, copy an existing object and set `answer` to the 0-based index of the correct
  option. Question order in `learn.html` mirrors `BANK` (ids `q1`…`q30`).

### Adding a new test
To add a new test (e.g., Data Science):
1. Copy `ai-ml.html` to `ds.html`.
2. Change `const TEST_ID = "ai-ml"` to `const TEST_ID = "ds"`.
3. Update question bank and CONFIG.dims as needed.
4. Update `index.html` to add a test card linking to `ds.html` (change `coming` class to remove it once ready).
5. Update `learn.html` to add the new test ID to the `testNames` object in `autoLoadFromStorage()`.
6. Point `vercel.json` references to `/ds` if using custom URLs (clean URLs are automatic).
