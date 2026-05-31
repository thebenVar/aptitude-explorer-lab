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
  {id:"q1", dim:"quant", difficulty:"easy", timer:45,
   prompt:"A market stall sells 240 oranges on Saturday. The stallholder gives 15% of them to a charity at the end of the day. How many oranges does she give away?",
   options:["30",
            "36",
            "40",
            "24"],
   answer:1},

  /* q2: Price rises from ₹400 to ₹460. Increase = 60, % increase = 60/400 × 100 = 15%. Correct. */
  {id:"q2", dim:"quant", difficulty:"easy", timer:50,
   prompt:"A bus fare goes up from ₹400 to ₹460 a month. What is the percentage increase?",
   options:["12%",
            "13.5%",
            "15%",
            "16%"],
   answer:2},

  /* q3: Simple interest. Principal=₹8,000, rate=6% pa, time=3 years.
         SI = 8000 × 6 × 3 / 100 = 1,440. Total = 8,000 + 1,440 = ₹9,440. Correct. */
  {id:"q3", dim:"quant", difficulty:"medium", timer:55,
   prompt:"Priya deposits ₹8,000 in a savings account that pays 6% simple interest per year. She leaves it untouched for 3 years. How much money is in the account at the end?",
   options:["₹9,000",
            "₹9,440",
            "₹9,600",
            "₹10,080"],
   answer:1},

  /* q4 (TRICKY): Buy price ₹250, sell price ₹290. Profit = 40. Profit% = 40/250 × 100 = 16%.
     Trap: students may divide by 290 (selling price) and get ~13.8%, or divide wrong. */
  {id:"q4", dim:"quant", difficulty:"hard", timer:55,
   prompt:"A shop buys a bag for ₹250 and sells it for ₹290. What is the profit percentage? (Profit percentage is always calculated on the cost price.)",
   options:["13.8%  — profit divided by the selling price",
            "14%",
            "16%",
            "18%"],
   answer:2},

  /* q5: Ratio 3:5, total 240 items. Share A = 3/8 × 240 = 90. Share B = 5/8 × 240 = 150. Correct. */
  {id:"q5", dim:"quant", difficulty:"medium", timer:50,
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
  {id:"q6", dim:"quant", difficulty:"hard", timer:60,
   prompt:"A jacket is marked at ₹500. The shop first gives a 20% discount, then a further 10% off the already-reduced price. What is the final price you pay?",
   options:["₹350  — 30% off ₹500",
            "₹355",
            "₹360",
            "₹370"],
   answer:2},

  /* ── FINANCIAL REASONING ── */

  /* q7: Phone A costs ₹8,000 outright. Phone B costs ₹5,000 + 12 months × ₹250 = 5,000 + 3,000 = ₹8,000.
     They cost exactly the same. Trap: people assume the upfront phone is obviously more expensive. */
  {id:"q7", dim:"financial", difficulty:"medium", timer:55,
   prompt:"You need a new phone. Option A: buy it outright for ₹8,000. Option B: pay ₹5,000 now and ₹250 a month for 12 months. Which is cheaper over the full 12 months?",
   options:["Option A — ₹8,000 outright is less than the instalment plan",
            "Option B — spread payments are always the better deal",
            "They cost exactly the same — both total ₹8,000",
            "Option B — because the monthly amount feels smaller"],
   answer:2},

  /* q8: Break-even. Fixed cost = ₹2,000. Selling price = ₹50. Variable cost per unit = ₹30.
     Contribution per unit = 50 − 30 = ₹20. Break-even = 2,000 / 20 = 100 units. Correct. */
  {id:"q8", dim:"financial", difficulty:"medium", timer:60,
   prompt:"A student sets up a small stall selling handmade greeting cards. Her fixed monthly cost (table rental + supplies) is ₹2,000. Each card sells for ₹50 and costs her ₹30 in materials. How many cards must she sell each month just to break even — covering all costs with no profit or loss?",
   options:["40 cards",
            "67 cards",
            "100 cards",
            "133 cards"],
   answer:2},

  /* q9 (TRICKY): Opportunity cost. Keeping ₹50,000 cash under the mattress means forgoing
     the interest it could earn. The best answer is about the interest foregone — not about inflation,
     which is a separate concept the question does not mention. */
  {id:"q9", dim:"financial", difficulty:"hard", timer:55,
   prompt:"A family keeps ₹50,000 in cash in a drawer at home instead of putting it in a savings account paying 5% per year. What is the real cost of this decision after one year?",
   options:["Nothing — cash is the safest place for money",
            "₹2,500 — the interest they could have earned but didn't",
            "₹50,000 — they could lose it all to theft",
            "There is no cost as long as prices don't rise"],
   answer:1},

  /* q10: Loan A: ₹10,000 at 12% pa simple interest for 2 years. SI = 10,000 × 12 × 2 / 100 = 2,400. Total = 12,400.
           Loan B: ₹10,000 at 10% pa simple interest for 3 years. SI = 10,000 × 10 × 3 / 100 = 3,000. Total = 13,000.
           Loan A has lower total repayment. Correct. */
  {id:"q10", dim:"financial", difficulty:"medium", timer:60,
   prompt:"You need to borrow ₹10,000. Two banks make offers using simple interest. Bank A: 12% per year, repay over 2 years. Bank B: 10% per year, repay over 3 years. Which loan costs you less in total interest?",
   options:["Bank A — you pay less total interest",
            "Bank B — the lower interest rate always means you pay less",
            "They are the same — the total interest is always equal",
            "Bank B — longer repayment periods always save money"],
   answer:0},

  /* q11: Revenue = 40 × ₹500 = ₹20,000. Costs = 40 × ₹300 + ₹2,000 = ₹12,000 + ₹2,000 = ₹14,000.
          Profit = 20,000 − 14,000 = ₹6,000. Correct. */
  {id:"q11", dim:"financial", difficulty:"easy", timer:60,
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
  {id:"q12", dim:"financial", difficulty:"hard", timer:60,
   prompt:"Two electricity plans are available. Plan A: ₹600 fixed monthly charge + ₹0.15 per unit used. Plan B: ₹300 fixed monthly charge + ₹0.25 per unit used. Your household uses about 200 units a month. Which plan is cheaper?",
   options:["Plan A — the lower cost-per-unit makes it better for heavy users",
            "Plan B — at 200 units, Plan B costs ₹350 versus Plan A's ₹630",
            "Plan A — the lower per-unit rate always wins",
            "They are the same for average household usage"],
   answer:1},

  /* ── DATA READING & INTERPRETATION ── */

  /* q13: Bar chart — Monthly sales of a bakery Jan–May. Values: Jan=12,000, Feb=9,000, Mar=15,000, Apr=11,000, May=18,000.
     Highest month = May (18,000). Correct. */
  {id:"q13", dim:"data", difficulty:"easy", timer:50,
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
  {id:"q14", dim:"data", difficulty:"easy", timer:50,
   prompt:"A retailer's product profit margins are shown below:\n\n| Product | Profit Margin |\n|---------|---------------|\n| A       | 35%           |\n| B       | 50%           |\n| C       | 20%           |\n| D       | 45%           |\n\nA sales manager says: 'We should focus on the product with the highest margin.' Which product should she prioritise?",
   options:["Product A",
            "Product B",
            "Product C",
            "Product D"],
   answer:1},

  /* q15 (TRICKY): Line chart shows quarterly revenue. Values Q1=80,000, Q2=95,000, Q3=90,000, Q4=105,000.
     The drop from Q2 to Q3 is a fall. Q3 to Q4 is a rise. Trap: "revenue grew every quarter" is FALSE because Q2→Q3 fell.
     Correct conclusion: Revenue was not always growing — it fell in Q3. */
  {id:"q15", dim:"data", difficulty:"hard", timer:55,
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
  {id:"q16", dim:"data", difficulty:"medium", timer:50,
   prompt:"A household's monthly budget is laid out below:\n\n| Category      | Amount (₹) |\n|---------------|------------|\n| Rent          | 2,000      |\n| Food          | 1,000      |\n| Transport     | 500        |\n| Entertainment | 300        |\n| Savings       | 200        |\n\nWhat percentage of the total monthly budget is spent on food?",
   options:["20%",
            "25%",
            "28%",
            "33%"],
   answer:1},

  /* q17: Bar chart — quarterly revenue Q1=45,000, Q2=52,000, Q3=48,000, Q4=61,000. Total = 206,000.
     Question: what is the total annual revenue? 45+52+48+61 = 206 thousand. Correct. */
  {id:"q17", dim:"data", difficulty:"medium", timer:55,
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
  {id:"q18", dim:"data", difficulty:"hard", timer:55,
   prompt:"A sales report contains this table:\n\n| Salesperson | Monthly Sales (₹) |\n|-------------|-------------------|\n| Ravi        | 80,000            |\n| Sunita      | 95,000            |\n| Dev         | 72,000            |\n\nThe report's summary states: 'Ravi outsold Dev by ₹12,000.' Which of the following is correct?",
   options:["The summary is correct — Ravi's sales are ₹12,000 more than Dev's",
            "The summary is wrong — Ravi outsold Dev by ₹8,000, not ₹12,000",
            "The summary is wrong — Dev outsold Ravi",
            "The summary is correct — Ravi has the highest sales of the three"],
   answer:1},

  /* ── BUSINESS LOGIC & DECISION-MAKING ── */

  /* q19: Supply and demand. If a popular item goes out of stock, fewer units are available.
     With the same demand and less supply, price typically rises. Correct. */
  {id:"q19", dim:"business", difficulty:"easy", timer:45,
   prompt:"A popular brand of cooking oil suddenly becomes scarce because of a bad harvest. Shops have much less of it than usual but customer demand stays the same. What most likely happens to the price?",
   options:["The price falls — suppliers want to sell whatever they have quickly",
            "The price stays the same — price is set by the manufacturer only",
            "The price rises — lower supply with unchanged demand pushes prices up",
            "The price falls — customers will stop buying if it gets too expensive"],
   answer:2},

  /* q20: A bakery is deciding whether to start selling coffee. Fixed setup cost = ₹15,000. Coffee sells at ₹150, variable cost = ₹60. Contribution = 90. Break-even = 15,000/90 ≈ 166.7, round up to 167 cups. Correct. */
  {id:"q20", dim:"business", difficulty:"medium", timer:60,
   prompt:"A bakery is deciding whether to add coffee to its menu. Setting up the coffee station costs ₹15,000 (one-time). Each cup of coffee sells for ₹150 and costs ₹60 in ingredients. How many cups must the bakery sell to recover the setup cost?",
   options:["100 cups",
            "167 cups",
            "200 cups",
            "250 cups"],
   answer:1},

  /* q21 (TRICKY): A shop raises its price by 10% and sales volume falls by 5%.
     New revenue = original × 1.10 × 0.95 = 1.045 × original → revenue rises by 4.5%.
     Trap: "raised price, sold less — revenue must have fallen." */
  {id:"q21", dim:"business", difficulty:"hard", timer:60,
   prompt:"A shop raises the price of a product by 10%. As a result, the number of units sold falls by 5%. What happens to the shop's total revenue from that product?",
   options:["Revenue falls — selling fewer items always means less revenue",
            "Revenue stays the same — the price rise exactly offsets the sales drop",
            "Revenue rises — the 10% price increase outweighs the 5% drop in units sold",
            "Revenue falls by 5% — matching the drop in units"],
   answer:2},

  /* q22: Two food stalls. Stall A: revenue ₹12,000, costs ₹10,500. Profit = ₹1,500.
           Stall B: revenue ₹8,000, costs ₹6,000. Profit = ₹2,000.
           Stall B makes more profit despite lower revenue. Correct. */
  {id:"q22", dim:"business", difficulty:"medium", timer:55,
   prompt:"Two food stalls at a fair report their results for the day:\n\nStall A — Revenue: ₹12,000 &nbsp; Costs: ₹10,500\nStall B — Revenue: ₹8,000 &nbsp;&nbsp; Costs: ₹6,000\n\nA reporter writes: 'Stall A was the more successful stall today.' Is this correct?",
   options:["Yes — higher revenue means greater success",
            "No — Stall B made more profit (₹2,000 vs ₹1,500), so Stall B performed better",
            "Yes — more sales always mean a better business outcome",
            "Cannot tell without knowing what each stall sold"],
   answer:1},

  /* q23: Market saturation scenario. Three coffee shops already serve a small town.
     A new one opens. Best move = differentiate (specialise, find an underserved niche) rather than copy the others. */
  {id:"q23", dim:"business", difficulty:"medium", timer:50,
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
  {id:"q24", dim:"business", difficulty:"hard", timer:60,
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
  {id:"q25", dim:"detail", difficulty:"medium", timer:55,
   prompt:"A cashier tallies four daily sales figures: ₹347, ₹256, ₹189, and ₹408. She writes the total as ₹1,190. Is her total correct?",
   options:["Yes — ₹1,190 is the correct total",
            "No — the correct total is ₹1,180",
            "No — the correct total is ₹1,200",
            "No — the correct total is ₹1,210"],
   answer:2},

  /* q26: Invoice check. Item: 12 boxes at ₹85 each. Expected subtotal = 12 × 85 = ₹1,020.
     Invoice shows ₹1,080. Error = ₹60 overcharge. Correct answer: the invoice overcharges. */
  {id:"q26", dim:"detail", difficulty:"easy", timer:50,
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
  {id:"q27", dim:"detail", difficulty:"hard", timer:60,
   prompt:"Study this petty cash record carefully. One entry in the Balance column is wrong — find it.\n\n| Entry | Description       | Amount (₹) | Balance (₹) |\n|-------|-------------------|------------|-------------|\n| Open  | Opening balance   | —          | 5,000       |\n| 1     | Bought envelopes  | −320       | 4,680       |\n| 2     | Cash received     | +150       | 4,930       |\n| 3     | Paid for tea      | −540       | 4,390       |\n| 4     | Bought stamps     | −200       | 4,190       |",
   options:["Entry 1 — the balance after spending ₹320 should be ₹4,720",
            "Entry 2 — after receiving ₹150, the balance should be ₹4,830, not ₹4,930",
            "Entry 3 — the balance after spending ₹540 should be ₹4,290",
            "Entry 4 — the balance after spending ₹200 should be ₹3,990"],
   answer:1},

  /* q28: Bank statement check. Opening balance ₹3,500. Deposit ₹2,200. Withdrawal ₹750. Closing balance should be: 3,500 + 2,200 − 750 = 4,950.
     Statement shows ₹5,050. Error = ₹100 overstated. Correct. */
  {id:"q28", dim:"detail", difficulty:"medium", timer:55,
   prompt:"A bank statement shows: Opening balance ₹3,500 · Deposit ₹2,200 · Withdrawal ₹750 · Closing balance ₹5,050. Is the closing balance correct?",
   options:["Yes — ₹5,050 is correct",
            "No — the correct closing balance is ₹4,850",
            "No — the correct closing balance is ₹4,950",
            "No — the correct closing balance is ₹5,150"],
   answer:2},

  /* q29 (TRICKY): A report says "Sales grew by 25% last year and then fell by 25% this year, so they are back to where they started."
     This is WRONG. Start at 100. +25% → 125. −25% of 125 = 31.25. 125 − 31.25 = 93.75. Net loss of 6.25%.
     Trap: "25% up then 25% down = same" feels obvious but is incorrect. */
  {id:"q29", dim:"detail", difficulty:"hard", timer:55,
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
  {id:"q30", dim:"detail", difficulty:"medium", timer:50,
   prompt:"A company's summary for the month reads:\n\n• Total Revenue: ₹2,40,000\n• Total Costs: ₹1,95,000\n• Net Profit: ₹55,000\n\nIs there an error in this summary?",
   options:["No — all three figures are consistent with each other",
            "Yes — the net profit should be ₹35,000",
            "Yes — the net profit should be ₹45,000",
            "Yes — the net profit should be ₹65,000"],
   answer:2},

  /* ── NEW: NUMERICAL APTITUDE (quant) q31–q44 ── */

  /* q31: 20% of 350 = 70. */
  {id:"q31", dim:"quant", difficulty:"easy", timer:45,
   prompt:"A shop has 350 items in stock and sells 20% of them in one morning. How many items did it sell?",
   options:["35","60","70","80"],
   answer:2},

  /* q32: 25% off ₹800 = 800 × 0.75 = ₹600. */
  {id:"q32", dim:"quant", difficulty:"easy", timer:45,
   prompt:"A coat priced at ₹800 is offered with a 25% discount. What is the discounted price?",
   options:["₹550","₹600","₹640","₹700"],
   answer:1},

  /* q33: ratio 2:3, total 500 → larger = 3/5 × 500 = 300. */
  {id:"q33", dim:"quant", difficulty:"easy", timer:45,
   prompt:"Profit of ₹500 is split between two partners in the ratio 2 : 3. How much does the partner with the larger share receive?",
   options:["₹200","₹250","₹300","₹350"],
   answer:2},

  /* q34: SI = 5000 × 8 × 2 / 100 = 800. */
  {id:"q34", dim:"quant", difficulty:"easy", timer:50,
   prompt:"₹5,000 is invested at 8% simple interest per year. How much interest is earned after 2 years?",
   options:["₹400","₹640","₹800","₹1,000"],
   answer:2},

  /* q35: 12% of 1500 = 180. */
  {id:"q35", dim:"quant", difficulty:"easy", timer:45,
   prompt:"A salesperson earns a 12% commission on sales of ₹1,500. What is the commission?",
   options:["₹150","₹180","₹120","₹200"],
   answer:1},

  /* q36: 360 ÷ 8 = 45 per box; nothing tricky. average price. */
  {id:"q36", dim:"quant", difficulty:"medium", timer:50,
   prompt:"A wholesaler pays ₹360 for 8 identical mugs. What is the cost of one mug?",
   options:["₹40","₹45","₹48","₹50"],
   answer:1},

  /* q37: VAT/tax add. ₹250 + 18% = 250 × 1.18 = 295. */
  {id:"q37", dim:"quant", difficulty:"medium", timer:50,
   prompt:"A service costs ₹250 before tax. An 18% tax is added. What is the total amount payable?",
   options:["₹268","₹290","₹295","₹300"],
   answer:2},

  /* q38: loss%. CP 600, SP 480. loss = 120. loss% = 120/600 = 20%. */
  {id:"q38", dim:"quant", difficulty:"medium", timer:55,
   prompt:"A trader buys an item for ₹600 and is forced to sell it for ₹480. What is the loss percentage (on cost price)?",
   options:["18%","20%","24%","25%"],
   answer:1},

  /* q39: reverse percentage. After 10% discount price is ₹450. Original = 450/0.9 = 500. */
  {id:"q39", dim:"quant", difficulty:"medium", timer:55,
   prompt:"After a 10% discount, a customer pays ₹450 for a kettle. What was its original (pre-discount) price?",
   options:["₹460","₹495","₹500","₹540"],
   answer:2},

  /* q40: average. Sales 1200,1500,1800,1300,1200 over 5 days → sum=7000, avg=1400. 1200+1500=2700+1800=4500+1300=5800+1200=7000. /5=1400. */
  {id:"q40", dim:"quant", difficulty:"medium", timer:55,
   prompt:"A stall's daily takings over five days are ₹1,200, ₹1,500, ₹1,800, ₹1,300 and ₹1,200. What is the average daily takings?",
   options:["₹1,300","₹1,400","₹1,500","₹1,600"],
   answer:1},

  /* q41: rate/work. 4 workers pack 200 boxes in 1 hour → 1 worker = 50/hr. 6 workers in 2 hours = 6×50×2 = 600. */
  {id:"q41", dim:"quant", difficulty:"medium", timer:55,
   prompt:"4 workers pack 200 boxes in one hour, all working at the same steady rate. How many boxes would 6 such workers pack in 2 hours?",
   options:["400","500","600","700"],
   answer:2},

  /* q42: percentage of a percentage / two-step. 60% of customers are members; 25% of members use a coupon. Of 400 customers, members=240, coupon users=60. */
  {id:"q42", dim:"quant", difficulty:"medium", timer:55,
   prompt:"Of 400 customers, 60% are members. Of those members, 25% used a discount coupon. How many customers used a coupon?",
   options:["40","60","100","240"],
   answer:1},

  /* q43 (HARD): successive growth. ₹10,000 grows 10% year 1, then 20% year 2. 10000×1.1=11000×1.2=13200. Trap: 30% → 13000. */
  {id:"q43", dim:"quant", difficulty:"hard", timer:60,
   prompt:"A business's revenue is ₹10,000. It grows 10% in the first year, then 20% the next year. What is the revenue after two years?",
   options:["₹13,000  — adding 10% and 20%","₹13,200","₹12,200","₹13,320"],
   answer:1},

  /* q44 (HARD): compound interest 2 yrs. ₹20,000 at 10% compounded annually. Yr1: 22000, Yr2: 24200. Trap simple interest → 24000. */
  {id:"q44", dim:"quant", difficulty:"hard", timer:60,
   prompt:"₹20,000 is deposited at 10% interest per year, compounded annually. What is the balance after 2 years?",
   options:["₹24,000  — using simple interest","₹24,200","₹22,000","₹26,000"],
   answer:1},

  /* ── NEW: FINANCIAL REASONING (financial) q45–q58 ── */

  /* q45: emergency fund concept. easy. */
  {id:"q45", dim:"financial", difficulty:"easy", timer:50,
   prompt:"Financial advisers often suggest keeping an 'emergency fund'. What is its main purpose?",
   options:["To pay for everyday shopping and bills","To cover unexpected costs like job loss or repairs without taking on debt","To invest in the stock market for high returns","To lend money to friends at interest"],
   answer:1},

  /* q46: needs vs wants. easy. */
  {id:"q46", dim:"financial", difficulty:"easy", timer:50,
   prompt:"When money is tight and you must cut spending, which of these is the most reasonable item to cut first?",
   options:["Rent for your home","A monthly streaming subscription you rarely use","Basic groceries","Electricity for your home"],
   answer:1},

  /* q47: saving early. easy. */
  {id:"q47", dim:"financial", difficulty:"easy", timer:50,
   prompt:"Two friends both save ₹1,000 a month into accounts paying the same interest. One starts at age 25, the other at age 35. Who is likely to have more saved by age 60, assuming all else is equal?",
   options:["The one who started at 25 — money has more time to grow","The one who started at 35 — they earn more later","Both will have exactly the same amount","It is impossible to say"],
   answer:0},

  /* q48: simple budgeting. income 30000, spends 28000 → saves 2000. easy. */
  {id:"q48", dim:"financial", difficulty:"easy", timer:50,
   prompt:"A person earns ₹30,000 a month and spends ₹28,000. To build savings faster, which step has the most direct effect?",
   options:["Check the bank balance more often","Reduce monthly spending or increase income","Move the money to a different bank","Pay bills on a different date"],
   answer:1},

  /* q49: insurance concept. easy. */
  {id:"q49", dim:"financial", difficulty:"easy", timer:50,
   prompt:"Why might someone pay a small amount each month for health insurance even when they are healthy?",
   options:["It guarantees they will never get ill","It protects them from a large, unexpected medical bill later","It is a way to earn interest on savings","It increases their monthly income"],
   answer:1},

  /* q50: rent vs buy total. Rent ₹6000/mo × 12 = 72000. medium. */
  {id:"q50", dim:"financial", difficulty:"medium", timer:55,
   prompt:"A tenant pays ₹6,000 rent every month. How much rent will they have paid in total over 2 years?",
   options:["₹72,000","₹1,20,000","₹1,44,000","₹1,80,000"],
   answer:2},

  /* q51: cost comparison bulk. 1 bar = ₹30; pack of 6 = ₹150 → ₹25 each. Pack cheaper per unit. medium. */
  {id:"q51", dim:"financial", difficulty:"medium", timer:55,
   prompt:"A single soap bar costs ₹30. A pack of 6 bars costs ₹150. If you need 6 bars, which is the better value, and by how much?",
   options:["Buying singly — it costs ₹30 less","The pack — it saves ₹30 compared with six singles","They cost the same","The pack — but only if you need exactly 6"],
   answer:1},

  /* q52: interest on loan vs savings. medium - sound decision. */
  {id:"q52", dim:"financial", difficulty:"medium", timer:55,
   prompt:"You have ₹20,000 in savings earning 4% a year. You also have a ₹20,000 loan charging 14% a year. With a spare ₹20,000, what is usually the smarter move?",
   options:["Add it to savings to earn 4%","Pay off the loan to avoid the 14% charge","Keep it as cash in a drawer","Split it equally with no clear reason"],
   answer:1},

  /* q53: discount vs cashback. 20% off ₹1000 = ₹800 cost. ₹150 cashback on ₹1000 = ₹850 cost. Discount better. medium. */
  {id:"q53", dim:"financial", difficulty:"medium", timer:60,
   prompt:"A ₹1,000 item is offered two ways: Shop A gives 20% off; Shop B charges full price but gives ₹150 cashback. Which leaves you paying less?",
   options:["Shop A — you pay ₹800","Shop B — you pay ₹800","They are the same","Shop B — you pay ₹750"],
   answer:0},

  /* q54: gross vs net / take-home. salary 40000, deductions 15% = 6000, net 34000. medium. */
  {id:"q54", dim:"financial", difficulty:"medium", timer:55,
   prompt:"An employee's gross salary is ₹40,000 a month. Deductions (tax and contributions) total 15%. What is the take-home pay?",
   options:["₹32,000","₹34,000","₹36,000","₹38,000"],
   answer:1},

  /* q55: minimum payment trap on credit. medium. */
  {id:"q55", dim:"financial", difficulty:"medium", timer:55,
   prompt:"A credit card bill is ₹10,000. The card lets you pay just a ₹500 'minimum' this month. Why is paying only the minimum usually a poor choice?",
   options:["It cancels the card automatically","Interest keeps building on the unpaid ₹9,500, so the debt grows","It has no effect on the total owed","The bank refunds the minimum payment"],
   answer:1},

  /* q56: ROI comparison. Option A: invest 10000 return 11500 in 1yr (15%). Option B: invest 10000 return 11000 (10%). A better. medium. */
  {id:"q56", dim:"financial", difficulty:"medium", timer:60,
   prompt:"Two one-year investments each need ₹10,000. Option A returns ₹11,500 at year end; Option B returns ₹11,000. Ignoring risk, which gives the better return?",
   options:["Option A — a ₹1,500 gain (15%)","Option B — a ₹1,000 gain (10%)","They are equal","Cannot be compared"],
   answer:0},

  /* q57 (HARD): inflation real return. Savings earn 5%, inflation 7%. Real purchasing power falls. */
  {id:"q57", dim:"financial", difficulty:"hard", timer:60,
   prompt:"Your savings earn 5% interest in a year, but prices (inflation) rise 7% that same year. What happens to the real buying power of your money?",
   options:["It rises — you earned 5% interest","It stays the same — interest cancels inflation","It falls — prices rose faster than your money grew","It cannot be affected by inflation"],
   answer:2},

  /* q58 (HARD): leasing vs buying twist. Lease ₹2000/mo×36=72000, own nothing. Buy ₹60000 own asset. Over 3 yrs buying cheaper AND you keep the asset. */
  {id:"q58", dim:"financial", difficulty:"hard", timer:60,
   prompt:"A machine can be leased at ₹2,000 a month for 3 years (after which it must be returned), or bought outright for ₹60,000 (and kept). Over the 3 years, which is the better deal financially?",
   options:["Leasing — smaller monthly payments are always cheaper","Buying — it totals ₹60,000 versus ₹72,000 leased, and you keep the machine","They cost the same over 3 years","Leasing — because you avoid ownership"],
   answer:1},

  /* ── NEW: DATA READING & INTERPRETATION (data) q59–q72 ── */

  /* q59: bar chart lowest. values 20,35,15,40,25 → lowest = third (15). easy. */
  {id:"q59", dim:"data", difficulty:"easy", timer:50,
   prompt:"The bar chart shows weekly visitor numbers to a shop (in hundreds). Which day had the fewest visitors?",
   chart:barChart(["Mon","Tue","Wed","Thu","Fri"],[20,35,15,40,25],"visitors (hundreds)"),
   options:["Monday","Tuesday","Wednesday","Friday"],
   answer:2},

  /* q60: line chart peak. values 30,45,60,50,40 → peak = 60 (3rd point). easy. */
  {id:"q60", dim:"data", difficulty:"easy", timer:50,
   prompt:"The line chart shows monthly app downloads (in thousands) from month 1 to month 5. In which month were downloads highest?",
   chart:lineChart([30,45,60,50,40],"downloads (thousands), months 1–5"),
   options:["Month 1","Month 2","Month 3","Month 5"],
   answer:2},

  /* q61: table direct read. easy. */
  {id:"q61", dim:"data", difficulty:"easy", timer:50,
   prompt:"A price list reads:\n\n| Item   | Price (₹) |\n|--------|-----------|\n| Pen    | 15        |\n| Folder | 45        |\n| Stapler| 90        |\n| Marker | 25        |\n\nHow much would 2 folders and 1 marker cost in total?",
   options:["₹95","₹105","₹115","₹135"],
   answer:2},

  /* q62: bar chart difference. Jan=50, Feb=80 → diff 30. easy. */
  {id:"q62", dim:"data", difficulty:"easy", timer:50,
   prompt:"The bar chart shows sales (₹ thousands) for two months. How much higher were February's sales than January's?",
   chart:barChart(["Jan","Feb"],[50,80],"₹ thousands"),
   options:["₹20,000","₹30,000","₹40,000","₹50,000"],
   answer:1},

  /* q63: total from bar. 10+20+30+40=100. easy. */
  {id:"q63", dim:"data", difficulty:"easy", timer:50,
   prompt:"The bar chart shows units sold in each of four regions. What is the total number of units sold across all regions?",
   chart:barChart(["North","South","East","West"],[10,20,30,40],"units sold"),
   options:["90","100","110","120"],
   answer:1},

  /* q64: % from chart. one region 40 of total 100 → 40%. medium. */
  {id:"q64", dim:"data", difficulty:"medium", timer:55,
   prompt:"Using the same four-region figures (North 10, South 20, East 30, West 40; total 100 units), what percentage of all units were sold in the West?",
   chart:barChart(["North","South","East","West"],[10,20,30,40],"units sold"),
   options:["30%","40%","50%","60%"],
   answer:1},

  /* q65: line chart trend - biggest increase between consecutive months. values 20,22,21,35,36. jumps: +2,-1,+14,+1 → biggest m3→m4. medium. */
  {id:"q65", dim:"data", difficulty:"medium", timer:55,
   prompt:"The line chart shows monthly orders (months 1–5). Between which two consecutive months did orders rise the most?",
   chart:lineChart([20,22,21,35,36],"orders, months 1–5"),
   options:["Month 1 to Month 2","Month 2 to Month 3","Month 3 to Month 4","Month 4 to Month 5"],
   answer:2},

  /* q66: ratio from chart. Product A=60, B=20 → 3:1. medium. */
  {id:"q66", dim:"data", difficulty:"medium", timer:55,
   prompt:"The bar chart shows units sold of two products. What is the ratio of Product A's sales to Product B's sales, in simplest form?",
   chart:barChart(["Product A","Product B"],[60,20],"units sold"),
   options:["2 : 1","3 : 1","4 : 1","6 : 2 (not simplified)"],
   answer:1},

  /* q67: average from chart. 40,50,60,50 → sum 200, avg 50. medium. */
  {id:"q67", dim:"data", difficulty:"medium", timer:55,
   prompt:"The bar chart shows quarterly profit (₹ thousands). What was the average profit per quarter?",
   chart:barChart(["Q1","Q2","Q3","Q4"],[40,50,60,50],"₹ thousands"),
   options:["₹45,000","₹50,000","₹55,000","₹60,000"],
   answer:1},

  /* q68: table two-step. Revenue 100k, cost 70k → profit 30k → margin 30%. medium. */
  {id:"q68", dim:"data", difficulty:"medium", timer:55,
   prompt:"A summary reads — Revenue: ₹1,00,000; Costs: ₹70,000. What is the profit margin (profit as a percentage of revenue)?",
   options:["20%","25%","30%","43%"],
   answer:2},

  /* q69: % change between two line points. From 80 to 100 = +25%. medium. */
  {id:"q69", dim:"data", difficulty:"medium", timer:55,
   prompt:"The line chart shows yearly revenue (₹ thousands) for two years: ₹80 then ₹100 (thousands). What was the percentage increase from the first year to the second?",
   chart:lineChart([80,100],"₹ thousands, year 1 to year 2"),
   options:["20%","25%","30%"," none of these"],
   answer:1},

  /* q70: misleading - which has higher TOTAL not higher single. medium-ish. */
  {id:"q70", dim:"data", difficulty:"medium", timer:55,
   prompt:"A chart shows two sellers' monthly sales (₹ thousands): Seller X has 30, 30, 30; Seller Y has 10, 60, 20. A note says 'Y is the stronger seller because Y hit the single highest month.' Which conclusion is best supported?",
   chart:barChart(["X-M1","X-M2","X-M3","Y-M1","Y-M2","Y-M3"],[30,30,30,10,60,20],"₹ thousands"),
   options:["Y is stronger — it had the highest single month","X and Y sold the same total (₹90k each); one peak month doesn't make Y stronger","X is far ahead in total sales","There is not enough information to compare totals"],
   answer:1},

  /* q71 (HARD): chart trap — percentages without base sizes. */
  {id:"q71", dim:"data", difficulty:"hard", timer:60,
   prompt:"A report says 'Branch A grew sales 50% and Branch B grew 10%, so Branch A added more sales.' Branch A started at ₹2,000 and Branch B at ₹40,000. Who actually added more in rupees?",
   options:["Branch A — ₹1,000 added (50% of ₹2,000)","Branch B — ₹4,000 added (10% of ₹40,000)","They added the same amount","Cannot tell from percentages alone, but A's percentage is bigger so A wins"],
   answer:1},

  /* q72 (HARD): line chart — cumulative vs per-period confusion. values rising 10,25,45,70 are cumulative totals; per-period = 10,15,20,25. Question: did monthly sales fall in any month? No, each month positive add. Trap: choose based on slope. */
  {id:"q72", dim:"data", difficulty:"hard", timer:60,
   prompt:"The line chart shows the running (cumulative) total of items sold after each of 4 weeks: 10, 25, 45, 70. A trainee says 'Sales slowed down in week 3.' Looking at items sold IN each week, is that right?",
   chart:lineChart([10,25,45,70],"cumulative items sold, weeks 1–4"),
   options:["Yes — the line flattens in week 3","No — weekly sales were 10, 15, 20, 25; week 3 (20) was higher than week 2 (15)","Yes — week 3 sold fewer than week 2","Cannot tell from a cumulative chart"],
   answer:1},

  /* ── NEW: BUSINESS LOGIC & DECISION-MAKING (business) q73–q86 ── */

  /* q73: demand falls when price rises (normal good). easy. */
  {id:"q73", dim:"business", difficulty:"easy", timer:50,
   prompt:"A café doubles the price of its coffee overnight, with no change in quality. What is the most likely effect on the number of cups sold?",
   options:["Sales rise — higher prices attract more buyers","Sales fall — many customers buy less or go elsewhere","Sales stay exactly the same","Sales depend only on the weather"],
   answer:1},

  /* q74: fixed vs variable cost. rent = fixed. easy. */
  {id:"q74", dim:"business", difficulty:"easy", timer:50,
   prompt:"Which of these is a 'fixed cost' for a bakery — a cost that stays the same whether it bakes 10 loaves or 100?",
   options:["Flour used in the loaves","Monthly shop rent","Electricity used by the ovens","Packaging for each loaf"],
   answer:1},

  /* q75: target market. easy. */
  {id:"q75", dim:"business", difficulty:"easy", timer:50,
   prompt:"A company makes premium baby products. Where is its advertising money best spent?",
   options:["A magazine read mostly by new parents","A magazine about retirement planning","A teenagers' gaming website","A heavy-machinery trade journal"],
   answer:0},

  /* q76: cash flow vs profit basic. easy-ish. */
  {id:"q76", dim:"business", difficulty:"easy", timer:50,
   prompt:"A profitable shop still runs out of cash to pay its suppliers this week. What is the most likely reason?",
   options:["Profit and available cash are the same thing","Customers owe money that hasn't been collected yet, so cash is tied up","The shop is not actually profitable","Suppliers never need to be paid"],
   answer:1},

  /* q77: economies of scale concept. easy. */
  {id:"q77", dim:"business", difficulty:"easy", timer:50,
   prompt:"Why can a large factory often make each unit more cheaply than a tiny workshop?",
   options:["Large factories always pay workers less","Spreading fixed costs over many units lowers the cost per unit","Big factories never make mistakes","Customers pay more at big factories"],
   answer:1},

  /* q78: pricing — markup. Cost 200, wants 25% margin on cost → 250. medium. */
  {id:"q78", dim:"business", difficulty:"medium", timer:55,
   prompt:"A retailer buys a gadget for ₹200 and wants a 25% profit on the cost price. What selling price should she set?",
   options:["₹225","₹240","₹250","₹260"],
   answer:2},

  /* q79: which product to drop. A: profit 30/unit ×100=3000; B: 50/unit ×40=2000. Keep higher total → drop B if must drop. medium. */
  {id:"q79", dim:"business", difficulty:"medium", timer:60,
   prompt:"A shop must drop one product to free up shelf space. Product A earns ₹30 profit per unit and sells 100 units a month. Product B earns ₹50 per unit but sells only 40 units. Which should it drop to lose the least total profit?",
   options:["Drop A — it has the lower profit per unit","Drop B — it earns ₹2,000 a month versus A's ₹3,000","Drop either — they earn the same","Drop A — fewer units means less work"],
   answer:1},

  /* q80: loss leader logic. medium. */
  {id:"q80", dim:"business", difficulty:"medium", timer:55,
   prompt:"A supermarket sells milk at a tiny loss but places it at the back of the store. What is the most likely business reason?",
   options:["It wants to lose money on milk","Cheap milk draws shoppers in, who then buy profitable items on the way","Milk is too heavy to sell at a profit","It is required by law"],
   answer:1},

  /* q81: discount effect on volume needed. Profit/unit was 100; cut price by 20 → 80. To keep ₹50,000 profit need 50000/80 = 625 units vs 500. medium. */
  {id:"q81", dim:"business", difficulty:"medium", timer:60,
   prompt:"A trader makes ₹100 profit on each of 500 units (₹50,000 total). If she cuts the price so profit drops to ₹80 per unit, how many units must she sell to keep the same ₹50,000 total profit?",
   options:["500 units","550 units","625 units","700 units"],
   answer:2},

  /* q82: make vs buy. Make: ₹40/unit × 1000 = 40000. Buy: ₹35/unit × 1000 = 35000. Buying cheaper. medium. */
  {id:"q82", dim:"business", difficulty:"medium", timer:60,
   prompt:"A firm needs 1,000 components. Making them in-house costs ₹40 each. A supplier offers the same quality at ₹35 each. Ignoring other factors, what is the cheaper option and the saving?",
   options:["Make them — saves ₹5,000","Buy them — saves ₹5,000","They cost the same","Buy them — saves ₹50,000"],
   answer:1},

  /* q83: competition response. medium. */
  {id:"q83", dim:"business", difficulty:"medium", timer:55,
   prompt:"A rival shop cuts prices sharply. Before matching the cut, what is the most sensible first thing for a small shop to check?",
   options:["Whether it can still cover its costs at the lower price","Whether the rival's owner is friendly","What colour the rival's sign is","How many staff the rival employs"],
   answer:0},

  /* q84: diversification of suppliers. medium. */
  {id:"q84", dim:"business", difficulty:"medium", timer:55,
   prompt:"A bakery buys all its flour from a single supplier to keep things simple. What is the main risk of this approach?",
   options:["The flour will taste better","If that one supplier fails or raises prices, the bakery has no backup","It always costs more than using many suppliers","Customers will notice the flour brand"],
   answer:1},

  /* q85 (HARD): sunk cost. Already spent ₹50,000 on a failing project; finishing needs ₹30,000 more for expected ₹20,000 return. Should stop. */
  {id:"q85", dim:"business", difficulty:"hard", timer:60,
   prompt:"A company has already spent ₹50,000 on a project. To finish it needs ₹30,000 more, but the finished project is now expected to bring in only ₹20,000. What is the rational decision?",
   options:["Finish it — they've already spent ₹50,000 and shouldn't waste it","Stop now — spending ₹30,000 to earn ₹20,000 loses a further ₹10,000","Finish it — the ₹50,000 will be recovered","Spend even more to be safe"],
   answer:1},

  /* q86 (HARD): bundle vs separate. Two items cost ₹100 and ₹100 separately (₹200); bundle ₹170. If a customer only wanted one (₹100), bundle isn't a saving for them. Best answer: bundle helps only buyers who want both. */
  {id:"q86", dim:"business", difficulty:"hard", timer:60,
   prompt:"A shop offers a bundle: two items that cost ₹100 each separately are sold together for ₹170. For which customer is the bundle genuinely a good deal?",
   options:["Any customer — bundles are always cheaper","Only a customer who actually wants both items, saving ₹30","A customer who wants just one item","No customer — bundles never save money"],
   answer:1},

  /* ── NEW: ACCURACY & ATTENTION TO DETAIL (detail) q87–q100 ── */

  /* q87: spot mismatched figure. ₹4,500 written as words. easy. 4500 = four thousand five hundred. */
  {id:"q87", dim:"detail", difficulty:"easy", timer:50,
   prompt:"A cheque shows the amount '₹4,500' in figures. Which words match this amount exactly?",
   options:["Four thousand five hundred","Forty-five thousand","Four thousand fifty","Four hundred fifty"],
   answer:0},

  /* q88: simple multiplication check. 7 × 250 = 1750. easy. */
  {id:"q88", dim:"detail", difficulty:"easy", timer:50,
   prompt:"An order line reads: '7 units at ₹250 each.' What should the line total be?",
   options:["₹1,500","₹1,750","₹1,800","₹2,250"],
   answer:1},

  /* q89: spot the odd account number / consistency. easy. Which total is wrong: 100+200+300 stated 700? Actual 600. */
  {id:"q89", dim:"detail", difficulty:"easy", timer:50,
   prompt:"Three amounts are listed as ₹100, ₹200 and ₹300, with a stated total of ₹700. Is the total right?",
   options:["Yes — ₹700 is correct","No — the total should be ₹600","No — the total should be ₹500","No — the total should be ₹650"],
   answer:1},

  /* q90: matching reference numbers. easy - find the one that differs. INV-2025-0048 vs others. */
  {id:"q90", dim:"detail", difficulty:"easy", timer:50,
   prompt:"You must confirm the invoice number 'INV-2025-0048' was copied correctly. Which of the following copies does NOT match?",
   options:["INV-2025-0048","INV-2025-0048","INV-2025-0084","INV-2025-0048"],
   answer:2},

  /* q91: percentage on receipt. ₹500 with 10% service = ₹550. easy. */
  {id:"q91", dim:"detail", difficulty:"easy", timer:50,
   prompt:"A restaurant bill is ₹500 before a 10% service charge. The printed total says ₹560. Is it correct?",
   options:["Yes — ₹560 is correct","No — the total should be ₹550","No — the total should be ₹510","No — the total should be ₹600"],
   answer:1},

  /* q92: decimal place error. ₹45.00 vs ₹450.0. medium. Item 3 boxes at ₹15 → 45.00. Statement says 450.00. */
  {id:"q92", dim:"detail", difficulty:"medium", timer:55,
   prompt:"A receipt reads '3 boxes at ₹15.00 each = ₹450.00'. What kind of error has been made?",
   options:["No error — ₹450.00 is correct","A decimal/place error — it should be ₹45.00, not ₹450.00","The quantity is wrong — it should be 30 boxes","The unit price should be ₹150"],
   answer:1},

  /* q93: running balance check. Open 2000, +500=2500, -300=2200, +100=2300. statement shows last as 2200 wrong? Let's make error: 2000,2500,2200,2300 correct; error is one row. Make: +100 → shows 2400 (wrong, should 2300). medium. */
  {id:"q93", dim:"detail", difficulty:"medium", timer:60,
   prompt:"Check the balance column. One row is wrong.\n\n| Step | Change (₹) | Balance (₹) |\n|------|-----------|-------------|\n| Open | —         | 2,000       |\n| 1    | +500      | 2,500       |\n| 2    | −300      | 2,200       |\n| 3    | +100      | 2,400       |\n\nWhich balance is incorrect?",
   options:["Step 1 — should be ₹2,400","Step 2 — should be ₹2,300","Step 3 — should be ₹2,300, not ₹2,400","No error — all balances are correct"],
   answer:2},

  /* q94: total vs sum of parts mismatch. Items 1200+800+500=2500, stated 2600. medium. */
  {id:"q94", dim:"detail", difficulty:"medium", timer:55,
   prompt:"An expense claim lists ₹1,200, ₹800 and ₹500, with a 'Total' box showing ₹2,600. Is the total correct, and if not, what should it be?",
   options:["Correct — ₹2,600","Wrong — it should be ₹2,500","Wrong — it should be ₹2,400","Wrong — it should be ₹2,700"],
   answer:1},

  /* q95: date consistency. Invoice dated 31/04/2025 — April has 30 days, invalid. medium. */
  {id:"q95", dim:"detail", difficulty:"medium", timer:55,
   prompt:"An invoice is dated '31/04/2025'. Why should this date be queried?",
   options:["The year is in the future","April has only 30 days, so the 31st cannot exist","The format should always use month first","Invoices cannot be dated in 2025"],
   answer:1},

  /* q96: unit mismatch (kg vs g). Price ₹40 per kg; bought 500 g → ₹20, but billed ₹40. medium. */
  {id:"q96", dim:"detail", difficulty:"medium", timer:60,
   prompt:"Rice is priced at ₹40 per kilogram. A customer buys 500 grams and is charged ₹40. What is the billing error?",
   options:["No error — ₹40 is correct","She was charged for 1 kg; 500 g should cost ₹20","She should have been charged ₹80","The price per kg is wrong"],
   answer:1},

  /* q97: transposition error detection. Recorded 5,940 but should be 5,490 — digits swapped; difference 450 divisible by 9. medium. */
  {id:"q97", dim:"detail", difficulty:"medium", timer:60,
   prompt:"A clerk meant to record ₹5,490 but typed ₹5,940 — two digits were swapped. By how much is the recorded figure too high?",
   options:["₹360","₹450","₹540","₹900"],
   answer:1},

  /* q98: percentage discount applied to wrong base. 15% of 2000 = 300, not 200 shown. medium. */
  {id:"q98", dim:"detail", difficulty:"medium", timer:55,
   prompt:"A bill of ₹2,000 should have a 15% discount applied. The receipt shows a discount of ₹200. Is the discount amount correct?",
   options:["Yes — ₹200 is correct","No — 15% of ₹2,000 is ₹300, not ₹200","No — the discount should be ₹150","No — the discount should be ₹250"],
   answer:1},

  /* q99 (HARD): compounded-looking but additive check. Three monthly figures 1,250 each; quarter total claimed 3,500. Actual 3×1250=3750. */
  {id:"q99", dim:"detail", difficulty:"hard", timer:60,
   prompt:"A quarterly report says monthly rent was ₹1,250 in each of 3 months, and gives a quarter total of ₹3,500. Is the total right?",
   options:["Yes — ₹3,500 is correct","No — 3 × ₹1,250 is ₹3,750, so it's understated by ₹250","No — the total should be ₹3,250","No — the total should be ₹3,600"],
   answer:1},

  /* q100 (HARD): net vs gross with tax double-check. Item ₹1,000, 10% tax = ₹100, total ₹1,100. Receipt shows subtotal 1000, tax 100, total 1200. Error in total. */
  {id:"q100", dim:"detail", difficulty:"hard", timer:60,
   prompt:"A receipt reads — Subtotal: ₹1,000; Tax (10%): ₹100; Total: ₹1,200. Both the subtotal and tax look right. What is wrong?",
   options:["Nothing — ₹1,200 is correct","The total should be ₹1,100 (₹1,000 + ₹100), so it is overstated by ₹100","The tax should be ₹120","The subtotal should be ₹1,100"],
   answer:1}

]
};
if (window.__bootAssessment) window.__bootAssessment();
