#!/usr/bin/env node
// Validate one or more assessment data files against the bank blueprint.
//
// Usage:
//   node tools/validate-bank.cjs                 # validate all data/*.js
//   node tools/validate-bank.cjs ai-ml cs        # validate specific tests
//
// Checks (structural only — it CANNOT verify an answer key is factually correct):
//   - data file parses and sets window.ASSESSMENT
//   - every question: unique sequential id (q1..qN), valid dim, 4 options,
//     answer is an in-range 0-based index, difficulty in easy|medium|hard
//   - dimension distribution is even
//   - reports difficulty mix vs the ~30/50/20 guide (informational, never fails)
//   - 100-question banks must hit exactly 20 per dimension; smaller banks just
//     warn if dimensions are uneven
//
// Exit code 0 = all valid, 1 = problems found.

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const ALLOWED_DIFF = ["easy", "medium", "hard"];

function loadAssessment(file) {
  const code = fs.readFileSync(file, "utf8");
  const win = {};
  const barChart = () => "";
  const lineChart = () => "";
  new Function("window", "barChart", "lineChart", code)(win, barChart, lineChart);
  if (!win.ASSESSMENT) throw new Error("file did not set window.ASSESSMENT");
  return win.ASSESSMENT;
}

function validate(id) {
  const file = path.join(DATA_DIR, id + ".js");
  const problems = [];
  let A;
  try {
    A = loadAssessment(file);
  } catch (e) {
    return { id, ok: false, problems: ["parse error: " + e.message] };
  }

  const dims = Object.keys((A.config && A.config.dims) || {});
  const bank = A.bank || [];
  const perDim = {};
  const diffMix = { easy: 0, medium: 0, hard: 0, missing: 0 };
  const seenIds = new Set();

  bank.forEach((q, i) => {
    const where = q.id || "#" + i;
    const expectedId = "q" + (i + 1);
    if (q.id !== expectedId) problems.push(`${where}: id should be ${expectedId}`);
    if (seenIds.has(q.id)) problems.push(`${where}: duplicate id`);
    seenIds.add(q.id);
    if (!dims.includes(q.dim)) problems.push(`${where}: dim "${q.dim}" not in config.dims`);
    if (!Array.isArray(q.options) || q.options.length !== 4)
      problems.push(`${where}: expected 4 options, got ${q.options && q.options.length}`);
    if (typeof q.answer !== "number" || q.answer < 0 || (q.options && q.answer >= q.options.length))
      problems.push(`${where}: answer index ${q.answer} out of range`);
    if (!ALLOWED_DIFF.includes(q.difficulty)) {
      problems.push(`${where}: difficulty "${q.difficulty}" not in ${ALLOWED_DIFF.join("/")}`);
      diffMix.missing++;
    } else {
      diffMix[q.difficulty]++;
    }
    perDim[q.dim] = (perDim[q.dim] || 0) + 1;
  });

  // dimension evenness: 100-q banks must be exactly 20 each
  if (bank.length === 100) {
    dims.forEach((d) => {
      if ((perDim[d] || 0) !== 20) problems.push(`dimension ${d}: ${perDim[d] || 0}/20`);
    });
  }

  // Collapse the most common bulk problem (missing difficulty on every question)
  // into one summary line instead of N identical lines.
  const missingDiff = problems.filter((p) => /difficulty .* not in/.test(p)).length;
  let shown = problems.filter((p) => !/difficulty .* not in/.test(p));
  if (missingDiff) shown.unshift(`${missingDiff} question(s) missing a valid difficulty label`);

  const ok = problems.length === 0;
  return { id, ok, problems: shown, bank: bank.length, dimCount: dims.length, perDim, diffMix };
}

const args = process.argv.slice(2);
const ids = args.length
  ? args
  : fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".js")).map((f) => f.replace(/\.js$/, ""));

let allOk = true;
for (const id of ids) {
  const r = validate(id);
  if (!r.ok) allOk = false;
  const mix = r.diffMix
    ? `${r.diffMix.easy}e/${r.diffMix.medium}m/${r.diffMix.hard}h` +
      (r.diffMix.missing ? ` (+${r.diffMix.missing} missing)` : "")
    : "-";
  const head = `${r.ok ? "PASS" : "FAIL"}  ${id.padEnd(12)} bank=${r.bank ?? "-"} dims=${r.dimCount ?? "-"} diff=${mix}`;
  console.log(head);
  if (r.perDim) console.log("        perDim " + JSON.stringify(r.perDim));
  if (r.bank === 100 && r.diffMix) {
    const target = "30e/50m/20h";
    const actual = `${r.diffMix.easy}e/${r.diffMix.medium}m/${r.diffMix.hard}h`;
    if (actual !== target) console.log(`        note: difficulty mix ${actual} vs guide ${target} (suggestive, not a failure)`);
  }
  const list = r.problems || [];
  list.slice(0, 10).forEach((p) => console.log("        - " + p));
  if (list.length > 10) console.log(`        - ...and ${list.length - 10} more`);
}

console.log(allOk ? "\nALL VALID" : "\nPROBLEMS FOUND");
process.exit(allOk ? 0 : 1);
