// Auto-generated assessment data for "commerce". Edit here to change this test.
window.ASSESSMENT = {
  id: "commerce",
  title: "Commerce &amp; Finance — Aptitude Check",
  dot: "Com",
  brandName: "Commerce &amp; Finance Aptitude Check",
  loginIntro: "A short, gently-timed, <b>just-for-fun</b> set of questions exploring the thinking\n        patterns Commerce and Finance rely on — numerical accuracy, financial reasoning,\n        reading data, business logic, and catching errors. No business knowledge required\n        — just bring your thinking.",
  theme: { accent: "#3b82f6", accent2: "#0ea5e9" },
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
    quant: { label:"Numerical Aptitude",
      means:"quick, accurate calculation of percentages, interest, profit/loss and ratios — the daily work of accounting and finance.",
      improve:"Drill arithmetic especially percentages, simple and compound interest, and profit/loss. Use shortcuts and always verify your answers." },
    financial: { label:"Financial Reasoning",
      means:"thinking about cost, value, return, and risk — making smart money decisions, not just calculating them.",
      improve:"Study personal finance basics (Investopedia for beginners). Practise break-even analysis and cost-benefit comparisons." },
    data: { label:"Data Reading &amp; Interpretation",
      means:"extracting the right meaning from tables, charts, and reports — business decisions depend entirely on reading data correctly.",
      improve:"Read the business page of any newspaper. Focus on what the numbers actually mean, not just what they say on the surface." },
    business: { label:"Business Logic &amp; Decision-Making",
      means:"reasoning about pricing, supply, demand, and trade-offs — understanding why businesses make the choices they do.",
      improve:"Study basic economics. Read business case studies. Listen to business podcasts like 'How I Built This'." },
    detail: { label:"Accuracy &amp; Attention to Detail",
      means:"spotting errors in numbers and records — a single misplaced decimal in accounts or a contract has serious consequences.",
      improve:"Always verify calculations twice. Practise proofreading financial statements. Slow down when working with numbers." }
  }
},
  bandText: {
  strong:{ pill:"good", title:"A strong set of answers",
    blurb:"Your answers show the numerical accuracy and business reasoning Commerce relies on. You handled financial calculations, data reading, and detail questions well — take this as warm encouragement to explore commerce and finance further." },
  promising:{ pill:"warn", title:"A promising mix, with some gaps",
    blurb:"Good instincts in several areas, with some question types that caught you out. Look at the lower-scoring dimensions — those are exactly the habits commerce study builds up." },
  gaps:{ pill:"bad", title:"Several question types to practise",
    blurb:"Some of these questions didn't go your way this time. Numerical and financial reasoning are skills that grow quickly with focused practice — the notes below show where to start." }
},
  bank: [

  /* ── NUMERICAL APTITUDE ── */

  /* q1: 15% of 240 = 36. Verify: 10% of 240 = 24, 5% = 12, total = 36. Correct. */
  {id:"q1", dim:"quant", timer:45,
   prompt:"A market stall sells 240 oranges on Saturday. The stallholder gives 15% of them to a charity at the end of the day. How many oranges does she give away?",
   options:["30",
            "36",
            "40",
            "24"],
   answer:1},

  /* q2: Price rises from ₹400 to ₹460. Increase = 60, % increase = 60/400 × 100 = 15%. Correct. */
  {id:"q2", dim:"quant", timer:50,
   prompt:"A bus fare goes up from ₹400 to ₹460 a month. What is the percentage increase?",
   options:["12%",
            "13.5%",
            "15%",
            "16%"],
   answer:2},

  /* q3: Simple interest. Principal=₹8,000, rate=6% pa, time=3 years.
         SI = 8000 × 6 × 3 / 100 = 1,440. Total = 8,000 + 1,440 = ₹9,440. Correct. */
  {id:"q3", dim:"quant", timer:55,
   prompt:"Priya deposits ₹8,000 in a savings account that pays 6% simple interest per year. She leaves it untouched for 3 years. How much money is in the account at the end?",
   options:["₹9,000",
            "₹9,440",
            "₹9,600",
            "₹10,080"],
   answer:1},

  /* q4 (TRICKY): Buy price ₹250, sell price ₹290. Profit = 40. Profit% = 40/250 × 100 = 16%.
     Trap: students may divide by 290 (selling price) and get ~13.8%, or divide wrong. */
  {id:"q4", dim:"quant", timer:55,
   prompt:"A shop buys a bag for ₹250 and sells it for ₹290. What is the profit percentage? (Profit percentage is always calculated on the cost price.)",
   options:["13.8%  — profit divided by the selling price",
            "14%",
            "16%",
            "18%"],
   answer:2},

  /* q5: Ratio 3:5, total 240 items. Share A = 3/8 × 240 = 90. Share B = 5/8 × 240 = 150. Correct. */
  {id:"q5", dim:"quant", timer:50,
   prompt:"Two shopkeepers share a stock of 240 items in the ratio 3 : 5. How many items does the larger share contain?",
   options:["90",
            "120",
            "150",
            "160"],
   answer:2},

  /* q6 (TRICKY): Marked price ₹500. Discount 20% → selling price = 500 × 0.80 = ₹400.
     Further discount 10% on ₹400 → 400 × 0.90 = ₹360.
     Total discount on original = (500 − 360)/500 × 100 = 28%.
     Trap: students add 20% + 10% = 30%, which is wrong. */
  {id:"q6", dim:"quant", timer:60,
   prompt:"A jacket is marked at ₹500. The shop first gives a 20% discount, then a further 10% off the already-reduced price. What is the final price you pay?",
   options:["₹350  — 30% off ₹500",
            "₹355",
            "₹360",
            "₹370"],
   answer:2},

  /* ── FINANCIAL REASONING ── */

  /* q7: Phone A costs ₹8,000 outright. Phone B costs ₹5,000 + 12 months × ₹250 = 5,000 + 3,000 = ₹8,000.
     They cost exactly the same. Trap: people assume the upfront phone is obviously more expensive. */
  {id:"q7", dim:"financial", timer:55,
   prompt:"You need a new phone. Option A: buy it outright for ₹8,000. Option B: pay ₹5,000 now and ₹250 a month for 12 months. Which is cheaper over the full 12 months?",
   options:["Option A — ₹8,000 outright is less than the instalment plan",
            "Option B — spread payments are always the better deal",
            "They cost exactly the same — both total ₹8,000",
            "Option B — because the monthly amount feels smaller"],
   answer:2},

  /* q8: Break-even. Fixed cost = ₹2,000. Selling price = ₹50. Variable cost per unit = ₹30.
     Contribution per unit = 50 − 30 = ₹20. Break-even = 2,000 / 20 = 100 units. Correct. */
  {id:"q8", dim:"financial", timer:60,
   prompt:"A student sets up a small stall selling handmade greeting cards. Her fixed monthly cost (table rental + supplies) is ₹2,000. Each card sells for ₹50 and costs her ₹30 in materials. How many cards must she sell each month just to break even — covering all costs with no profit or loss?",
   options:["40 cards",
            "67 cards",
            "100 cards",
            "133 cards"],
   answer:2},

  /* q9 (TRICKY): Opportunity cost. Keeping ₹50,000 cash under the mattress means forgoing
     the interest it could earn. The best answer is about the interest foregone — not about inflation,
     which is a separate concept the question does not mention. */
  {id:"q9", dim:"financial", timer:55,
   prompt:"A family keeps ₹50,000 in cash in a drawer at home instead of putting it in a savings account paying 5% per year. What is the real cost of this decision after one year?",
   options:["Nothing — cash is the safest place for money",
            "₹2,500 — the interest they could have earned but didn't",
            "₹50,000 — they could lose it all to theft",
            "There is no cost as long as prices don't rise"],
   answer:1},

  /* q10: Loan A: ₹10,000 at 12% pa simple interest for 2 years. SI = 10,000 × 12 × 2 / 100 = 2,400. Total = 12,400.
           Loan B: ₹10,000 at 10% pa simple interest for 3 years. SI = 10,000 × 10 × 3 / 100 = 3,000. Total = 13,000.
           Loan A has lower total repayment. Correct. */
  {id:"q10", dim:"financial", timer:60,
   prompt:"You need to borrow ₹10,000. Two banks make offers using simple interest. Bank A: 12% per year, repay over 2 years. Bank B: 10% per year, repay over 3 years. Which loan costs you less in total interest?",
   options:["Bank A — you pay less total interest",
            "Bank B — the lower interest rate always means you pay less",
            "They are the same — the total interest is always equal",
            "Bank B — longer repayment periods always save money"],
   answer:0},

  /* q11: Revenue = 40 × ₹500 = ₹20,000. Costs = 40 × ₹300 + ₹2,000 = ₹12,000 + ₹2,000 = ₹14,000.
          Profit = 20,000 − 14,000 = ₹6,000. Correct. */
  {id:"q11", dim:"financial", timer:60,
   prompt:"A small café sells 40 lunches on a busy day. Each lunch is priced at ₹500. Ingredients cost ₹300 per lunch and the café has a fixed daily cost of ₹2,000 (rent, wages, utilities). What is the café's profit for that day?",
   options:["₹4,000",
            "₹5,000",
            "₹6,000",
            "₹8,000"],
   answer:2},

  /* q12 (TRICKY): Electricity plan comparison.
     Plan A: ₹600 fixed + ₹0.15 per unit. At 200 units: 600 + 30 = ₹630.
     Plan B: ₹300 fixed + ₹0.25 per unit. At 200 units: 300 + 50 = ₹350.
     Plan B is cheaper at 200 units. But the trap is people assume the lower fixed fee always wins.
     Break-even: 600 + 0.15x = 300 + 0.25x → 300 = 0.10x → x = 3,000 units.
     At 200 units, Plan B is much cheaper. Correct answer: Plan B. */
  {id:"q12", dim:"financial", timer:60,
   prompt:"Two electricity plans are available. Plan A: ₹600 fixed monthly charge + ₹0.15 per unit used. Plan B: ₹300 fixed monthly charge + ₹0.25 per unit used. Your household uses about 200 units a month. Which plan is cheaper?",
   options:["Plan A — the lower cost-per-unit makes it better for heavy users",
            "Plan B — at 200 units, Plan B costs ₹350 versus Plan A's ₹630",
            "Plan A — the lower per-unit rate always wins",
            "They are the same for average household usage"],
   answer:1},

  /* ── DATA READING & INTERPRETATION ── */

  /* q13: Bar chart — Monthly sales of a bakery Jan–May. Values: Jan=12,000, Feb=9,000, Mar=15,000, Apr=11,000, May=18,000.
     Highest month = May (18,000). Correct. */
  {id:"q13", dim:"data", timer:50,
   prompt:"The bar chart below shows a bakery's monthly sales (in ₹) from January to May. Which month had the highest sales?",
   chart:barChart(["Jan","Feb","Mar","Apr","May"],[12000,9000,15000,11000,18000],"₹ monthly sales"),
   options:["January",
            "March",
            "April",
            "May"],
   answer:3},

  /* q14: Table in prompt. Product margins: A=35%, B=50%, C=20%, D=50%.
     B and D both show 50%. Question asks which SINGLE product has the highest margin — but B and D are tied.
     Rewrite: A=35%, B=50%, C=20%, D=45%. Highest = B at 50%. Correct. */
  {id:"q14", dim:"data", timer:50,
   prompt:"A retailer's product profit margins are shown below:\n\n| Product | Profit Margin |\n|---------|---------------|\n| A       | 35%           |\n| B       | 50%           |\n| C       | 20%           |\n| D       | 45%           |\n\nA sales manager says: 'We should focus on the product with the highest margin.' Which product should she prioritise?",
   options:["Product A",
            "Product B",
            "Product C",
            "Product D"],
   answer:1},

  /* q15 (TRICKY): Line chart shows quarterly revenue. Values Q1=80,000, Q2=95,000, Q3=90,000, Q4=105,000.
     The drop from Q2 to Q3 is a fall. Q3 to Q4 is a rise. Trap: "revenue grew every quarter" is FALSE because Q2→Q3 fell.
     Correct conclusion: Revenue was not always growing — it fell in Q3. */
  {id:"q15", dim:"data", timer:55,
   prompt:"The line chart below shows a company's quarterly revenue (₹). A colleague claims: 'Our revenue grew every single quarter this year.' Is that claim correct?",
   chart:lineChart([80000,95000,90000,105000],"₹ quarterly revenue — Q1 to Q4"),
   options:["Yes — the final quarter is higher than the first quarter, so overall growth is clear",
            "Yes — the trend line is upward across the year",
            "No — revenue fell from Q2 to Q3, so it did not grow every quarter",
            "Cannot tell — the chart does not show enough data"],
   answer:2},

  /* q16: Simple budget table. Monthly budget: Rent=₹1,200, Food=₹800, Transport=₹400, Entertainment=₹300, Savings=₹300. Total=3,000.
     Food as % = 800/3,000 × 100 = 26.7% ≈ 27%. Correct.
     But let me use a clean table: Rent=1500, Food=900, Transport=450, Entertainment=300, Savings=350. Total=3,500.
     Food = 900/3,500 × 100 = 25.7%. Still messy. Use: Total=4,000. Rent=2000, Food=1000, Transport=500, Savings=500. Food=1000/4000=25%. Clean. */
  {id:"q16", dim:"data", timer:50,
   prompt:"A household's monthly budget is laid out below:\n\n| Category      | Amount (₹) |\n|---------------|------------|\n| Rent          | 2,000      |\n| Food          | 1,000      |\n| Transport     | 500        |\n| Entertainment | 300        |\n| Savings       | 200        |\n\nWhat percentage of the total monthly budget is spent on food?",
   options:["20%",
            "25%",
            "28%",
            "33%"],
   answer:1},

  /* q17: Bar chart — quarterly revenue Q1=45,000, Q2=52,000, Q3=48,000, Q4=61,000. Total = 206,000.
     Question: what is the total annual revenue? 45+52+48+61 = 206 thousand. Correct. */
  {id:"q17", dim:"data", timer:55,
   prompt:"The chart below shows a small business's revenue by quarter (₹ thousands). What was the total revenue for the full year?",
   chart:barChart(["Q1","Q2","Q3","Q4"],[45,52,48,61],"₹ thousands per quarter"),
   options:["₹1,86,000",
            "₹2,00,000",
            "₹2,06,000",
            "₹2,12,000"],
   answer:2},

  /* q18 (TRICKY): Table shows three employees' sales. Ravi=₹80,000, Sunita=₹95,000, Dev=₹72,000.
     Report says "Ravi outsold Dev by ₹12,000." Check: 80,000 − 72,000 = 8,000, NOT 12,000. The report is wrong.
     But Sunita is the top seller, not Ravi. Trap: the question asks which conclusion is SUPPORTED by the data. */
  {id:"q18", dim:"data", timer:55,
   prompt:"A sales report contains this table:\n\n| Salesperson | Monthly Sales (₹) |\n|-------------|-------------------|\n| Ravi        | 80,000            |\n| Sunita      | 95,000            |\n| Dev         | 72,000            |\n\nThe report's summary states: 'Ravi outsold Dev by ₹12,000.' Which of the following is correct?",
   options:["The summary is correct — Ravi's sales are ₹12,000 more than Dev's",
            "The summary is wrong — Ravi outsold Dev by ₹8,000, not ₹12,000",
            "The summary is wrong — Dev outsold Ravi",
            "The summary is correct — Ravi has the highest sales of the three"],
   answer:1},

  /* ── BUSINESS LOGIC & DECISION-MAKING ── */

  /* q19: Supply and demand. If a popular item goes out of stock, fewer units are available.
     With the same demand and less supply, price typically rises. Correct. */
  {id:"q19", dim:"business", timer:45,
   prompt:"A popular brand of cooking oil suddenly becomes scarce because of a bad harvest. Shops have much less of it than usual but customer demand stays the same. What most likely happens to the price?",
   options:["The price falls — suppliers want to sell whatever they have quickly",
            "The price stays the same — price is set by the manufacturer only",
            "The price rises — lower supply with unchanged demand pushes prices up",
            "The price falls — customers will stop buying if it gets too expensive"],
   answer:2},

  /* q20: A bakery is deciding whether to start selling coffee. Fixed setup cost = ₹15,000. Coffee sells at ₹150, variable cost = ₹60. Contribution = 90. Break-even = 15,000/90 ≈ 166.7, round up to 167 cups. Correct. */
  {id:"q20", dim:"business", timer:60,
   prompt:"A bakery is deciding whether to add coffee to its menu. Setting up the coffee station costs ₹15,000 (one-time). Each cup of coffee sells for ₹150 and costs ₹60 in ingredients. How many cups must the bakery sell to recover the setup cost?",
   options:["100 cups",
            "167 cups",
            "200 cups",
            "250 cups"],
   answer:1},

  /* q21 (TRICKY): A shop raises its price by 10% and sales volume falls by 5%.
     New revenue = original × 1.10 × 0.95 = 1.045 × original → revenue rises by 4.5%.
     Trap: "raised price, sold less — revenue must have fallen." */
  {id:"q21", dim:"business", timer:60,
   prompt:"A shop raises the price of a product by 10%. As a result, the number of units sold falls by 5%. What happens to the shop's total revenue from that product?",
   options:["Revenue falls — selling fewer items always means less revenue",
            "Revenue stays the same — the price rise exactly offsets the sales drop",
            "Revenue rises — the 10% price increase outweighs the 5% drop in units sold",
            "Revenue falls by 5% — matching the drop in units"],
   answer:2},

  /* q22: Two food stalls. Stall A: revenue ₹12,000, costs ₹10,500. Profit = ₹1,500.
           Stall B: revenue ₹8,000, costs ₹6,000. Profit = ₹2,000.
           Stall B makes more profit despite lower revenue. Correct. */
  {id:"q22", dim:"business", timer:55,
   prompt:"Two food stalls at a fair report their results for the day:\n\nStall A — Revenue: ₹12,000 &nbsp; Costs: ₹10,500\nStall B — Revenue: ₹8,000 &nbsp;&nbsp; Costs: ₹6,000\n\nA reporter writes: 'Stall A was the more successful stall today.' Is this correct?",
   options:["Yes — higher revenue means greater success",
            "No — Stall B made more profit (₹2,000 vs ₹1,500), so Stall B performed better",
            "Yes — more sales always mean a better business outcome",
            "Cannot tell without knowing what each stall sold"],
   answer:1},

  /* q23: Market saturation scenario. Three coffee shops already serve a small town.
     A new one opens. Best move = differentiate (specialise, find an underserved niche) rather than copy the others. */
  {id:"q23", dim:"business", timer:50,
   prompt:"A small town already has three popular coffee shops. A fourth one is planning to open. Which approach gives the new shop the best chance of success?",
   options:["Copy the most successful existing shop exactly — if it works for them, it will work for you",
            "Open next door to the busiest shop to capture its overflow customers",
            "Find a gap — offer something the others don't (a different style, a niche menu, a quieter study space) to attract customers who aren't fully served",
            "Charge lower prices than everyone else to pull customers away"],
   answer:2},

  /* q24 (TRICKY): A business owner thinks: "I sell 500 units at ₹100 profit each = ₹50,000 profit. If I lower the price to get 600 units, I'll earn more."
     At ₹100 profit: 500 × 100 = ₹50,000.
     At ₹80 profit: 600 × 80 = ₹48,000. LESS profit, not more.
     Trap: more units sold feels like it should mean more profit. */
  {id:"q24", dim:"business", timer:60,
   prompt:"A trader currently sells 500 units a month at a profit of ₹100 each. She considers cutting her price to sell 600 units a month, but this would reduce her profit per unit to ₹80. Should she make the change?",
   options:["Yes — selling 600 units is always better than 500 units",
            "Yes — more customers means a stronger business in the long run",
            "No — her total monthly profit would fall from ₹50,000 to ₹48,000",
            "Yes — higher volume always leads to higher total profit"],
   answer:2},

  /* ── ACCURACY & ATTENTION TO DETAIL ── */

  /* q25: Column of four numbers to add. 347 + 256 + 189 + 408 = ?
     347 + 256 = 603. 603 + 189 = 792. 792 + 408 = 1,200.
     The question shows a "calculation" claiming the total is 1,190. The error is in the addition.
     Verify: 347+256=603 ✓. 603+189=792 ✓. 792+408=1200 ✓. So 1,190 is wrong; 1,200 is correct.
     Answer: the stated total of 1,190 is wrong — correct total is 1,200. */
  {id:"q25", dim:"detail", timer:55,
   prompt:"A cashier tallies four daily sales figures: ₹347, ₹256, ₹189, and ₹408. She writes the total as ₹1,190. Is her total correct?",
   options:["Yes — ₹1,190 is the correct total",
            "No — the correct total is ₹1,180",
            "No — the correct total is ₹1,200",
            "No — the correct total is ₹1,210"],
   answer:2},

  /* q26: Invoice check. Item: 12 boxes at ₹85 each. Expected subtotal = 12 × 85 = ₹1,020.
     Invoice shows ₹1,080. Error = ₹60 overcharge. Correct answer: the invoice overcharges. */
  {id:"q26", dim:"detail", timer:50,
   prompt:"An invoice reads: '12 boxes of stationery at ₹85 each — Subtotal: ₹1,080.' Is the subtotal on the invoice correct?",
   options:["Yes — ₹1,080 is correct",
            "No — the correct subtotal is ₹1,020; the invoice overcharges by ₹60",
            "No — the correct subtotal is ₹960; the invoice overcharges by ₹120",
            "No — the correct subtotal is ₹1,020; the invoice undercharges by ₹60"],
   answer:1},

  /* q27 (TRICKY): A table shows petty cash entries. The running balance column has an error.
     Opening balance: ₹5,000. Entry 1: spent ₹320 → balance should be ₹4,680 (table shows ₹4,680 ✓).
     Entry 2: received ₹150 → balance should be ₹4,830 (table shows ₹4,830 ✓).
     Entry 3: spent ₹540 → balance should be ₹4,290 (table shows ₹4,390 ✗). Error here.
     Entry 4: spent ₹200 → based on wrong balance 4,390 − 200 = 4,190 (table shows 4,090 ✗ based on correct 4,290-200=4,090 ✓ wait...
     Let me redo cleanly:
     Opening: 5,000
     −320 → should be 4,680 → show 4,680 ✓
     +150 → should be 4,830 → show 4,930 ✗ (error here, +100 too much)
     −540 → based on wrong 4,930: 4,930−540=4,390 → show 4,390
     −200 → 4,390−200=4,190 → show 4,190
     So the error is in Entry 2: received ₹150 but balance went up by ₹250 (4,680→4,930). That's the error.
     Answer: Entry 2 balance is wrong (shows 4,930, should be 4,830). */
  {id:"q27", dim:"detail", timer:60,
   prompt:"Study this petty cash record carefully. One entry in the Balance column is wrong — find it.\n\n| Entry | Description       | Amount (₹) | Balance (₹) |\n|-------|-------------------|------------|-------------|\n| Open  | Opening balance   | —          | 5,000       |\n| 1     | Bought envelopes  | −320       | 4,680       |\n| 2     | Cash received     | +150       | 4,930       |\n| 3     | Paid for tea      | −540       | 4,390       |\n| 4     | Bought stamps     | −200       | 4,190       |",
   options:["Entry 1 — the balance after spending ₹320 should be ₹4,720",
            "Entry 2 — after receiving ₹150, the balance should be ₹4,830, not ₹4,930",
            "Entry 3 — the balance after spending ₹540 should be ₹4,290",
            "Entry 4 — the balance after spending ₹200 should be ₹3,990"],
   answer:1},

  /* q28: Bank statement check. Opening balance ₹3,500. Deposit ₹2,200. Withdrawal ₹750. Closing balance should be: 3,500 + 2,200 − 750 = 4,950.
     Statement shows ₹5,050. Error = ₹100 overstated. Correct. */
  {id:"q28", dim:"detail", timer:55,
   prompt:"A bank statement shows: Opening balance ₹3,500 · Deposit ₹2,200 · Withdrawal ₹750 · Closing balance ₹5,050. Is the closing balance correct?",
   options:["Yes — ₹5,050 is correct",
            "No — the correct closing balance is ₹4,850",
            "No — the correct closing balance is ₹4,950",
            "No — the correct closing balance is ₹5,150"],
   answer:2},

  /* q29 (TRICKY): A report says "Sales grew by 25% last year and then fell by 25% this year, so they are back to where they started."
     This is WRONG. Start at 100. +25% → 125. −25% of 125 = 31.25. 125 − 31.25 = 93.75. Net loss of 6.25%.
     Trap: "25% up then 25% down = same" feels obvious but is incorrect. */
  {id:"q29", dim:"detail", timer:55,
   prompt:"A manager writes in a report: 'Our sales rose 25% last year, then fell 25% this year — so we're back to exactly where we started two years ago.' Is this statement correct?",
   options:["Yes — a 25% rise followed by a 25% fall always returns to the starting point",
            "No — the sales are now slightly higher than two years ago",
            "No — the sales are now lower than two years ago (roughly 6% below the original figure)",
            "No — you cannot compare percentage rises and falls directly"],
   answer:2},

  /* q30: Spot the inconsistency. A company report states three facts:
     (1) Total revenue = ₹2,40,000. (2) Total costs = ₹1,95,000. (3) Net profit = ₹55,000.
     Check: 2,40,000 − 1,95,000 = 45,000. The stated profit of ₹55,000 is wrong — should be ₹45,000.
     Trap: numbers are large and close enough that the error is easy to miss. */
  {id:"q30", dim:"detail", timer:50,
   prompt:"A company's summary for the month reads:\n\n• Total Revenue: ₹2,40,000\n• Total Costs: ₹1,95,000\n• Net Profit: ₹55,000\n\nIs there an error in this summary?",
   options:["No — all three figures are consistent with each other",
            "Yes — the net profit should be ₹35,000",
            "Yes — the net profit should be ₹45,000",
            "Yes — the net profit should be ₹65,000"],
   answer:2}

]
};
if (window.__bootAssessment) window.__bootAssessment();
