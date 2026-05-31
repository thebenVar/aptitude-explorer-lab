# Aptitude Explorer Lab — Aptitude Readiness Checks (for fun)

A small, self-contained web toy with multiple aptitude explorations. Includes eight
assessments — AI/ML, Data Science, Computer Science, Medicine, Law, Commerce & Finance,
Engineering, and Design — each with a 100-question bank (a fresh 30 are drawn each
sitting). Everything runs in the browser — no server, no database, no internet needed,
no dependencies.

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

## Areas it explores

Each assessment has its own **five dimensions** (defined in its `data/<id>.js`). For
AI/ML, for example:

1. **Quantitative / Numerical** — arithmetic, %, ratios, basic algebra
2. **Logical & Abstract Reasoning** — sequences, patterns, deduction
3. **Statistics & Probability Intuition** — averages, spread, likelihood
4. **Computational / Step-by-Step Logic** — following loops/conditions (no coding needed)
5. **Data Interpretation** — reading charts and tables

Each test has a **100-question bank** (20 per dimension). A single sitting draws **30**
multiple-choice questions at random and avoids questions seen in previous sittings, so
repeat attempts stay fresh. Gently timed; all questions are phrased in everyday
situations, not technical jargon. The report also surfaces **behavioral patterns** (pace,
second-guessing, quick-vs-considered accuracy) and a **learning-agility** signal across
attempts.

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
  step. `vercel.json` enables clean URLs and rewrites, so each test is reachable at
  **`/ai-ml`**, **`/ds`**, **`/cs`**, etc. (each rewrites to
  `assessment.html?test=<id>`), the home grid at **`/`**, and the guide at **`/learn`**.

## Files

The eight assessments share **one engine and one shell**; only the per-test data differs.

### Core pages
- `index.html` — home page listing all eight tests.
- `assessment.html` — the single shell for every test. Reads `?test=<id>` from the URL,
  loads that test's data, then runs the shared engine. (Old per-test files like
  `ai-ml.html` no longer exist.)
- `learn.html` — study guide + personalized review (auto-loads test results, or upload to analyze).
- `dashboard.html` — consolidated progress dashboard (cross-test scores, dimension comparison, behavioral profile, study focus).

### Shared engine & styles
- `assets/app.js` — the whole engine: question flow, scoring, behavioral telemetry,
  learning-agility, mentor report, `barChart`/`lineChart` helpers. A fix or feature here
  applies to all tests at once.
- `assets/app.css` — shared styles; each test's accent color comes from CSS custom
  properties set at load.

### Per-test data
- `data/<id>.js` — one file per test (`ai-ml`, `ds`, `cs`, `commerce`, `design`,
  `engineering`, `law`, `medicine`). Each sets `window.ASSESSMENT = { id, title, dot,
  brandName, loginIntro, theme, config, bandText, bank }`.

### Config, tools & samples
- `aptitude-result-sample.json` — example results file for trying `learn.html`.
- `vercel.json` — clean URLs + rewrites (`/ai-ml` → `assessment.html?test=ai-ml`, etc.).
- `tools/validate-bank.cjs` — structural gate for a question bank (counts, dims, answer
  indices, difficulty labels): `node tools/validate-bank.cjs <id>`.
- `docs/question-bank-blueprint.md` — the authoring standard for the 100-question banks.
- `README.md` — this file.

## Customising

### Tuning a test
Everything tunable lives in that test's `data/<id>.js`, inside `window.ASSESSMENT`:

- `id` — the test's short code (e.g., `"ai-ml"`). Used for localStorage keys and the URL.
- `theme` — `{ accent, accent2 }` hex colors for the test's look.
- `title`, `dot`, `brandName`, `loginIntro` — per-test copy shown in the shell.
- `config.credentials` — usernames, passwords, roles.
- `config.rapidMs` — threshold (ms) below which an answer counts as "rushed".
- `config.nearDeadlineSec` — seconds-left threshold for "answered under pressure".
- `config.bands` / `config.criticalWeakPct` — band cutoffs.
- `config.dims` — the five area labels, meanings, and improvement advice.
- `bandText` — the strong/promising/gaps result blurbs.
- `bank` — the question array: `{ id, dim, difficulty, timer, prompt, options[], answer, code?, chart? }`.
  `answer` is the 0-based index of the correct option. Charts use the `barChart()` /
  `lineChart()` helpers (defined globally in `app.js`, inline SVG, no libraries).
  After editing, validate with `node tools/validate-bank.cjs <id>`.

### Adding a new test
1. Create `data/<newid>.js` setting `window.ASSESSMENT = { ... }` (copy an existing data
   file as a template; keep five dimensions and follow `docs/question-bank-blueprint.md`).
2. Add a test card to `index.html` linking to `assessment.html?test=<newid>`.
3. Add the test to the `TEST_META` map in `dashboard.html` and `learn.html`.
4. Add a rewrite for `/<newid>` in `vercel.json`.

No engine, CSS, or shell changes are needed — that's the point of the shared setup.
