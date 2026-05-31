// Study guide explanations for the Commerce & Finance assessment.
window.GUIDE = {
  strategies: {
    quant: "Always ask: <b>what is the whole, what is the part, and what is being compared to what?</b> For percentage change the base is the <i>starting</i> value. For profit/loss percentage, always divide by the <b>cost price</b>, never the selling price. For successive discounts or growth, multiply the factors — never just add them.",
    financial: "Ask: <b>what does this decision actually cost, and what does it give back?</b> Opportunity cost is real even if no money changes hands. Total outlay (not the monthly feel) is what counts. When comparing loans, always calculate the <b>total interest paid</b> over the full term.",
    data: "Read the <b>axis labels and units first</b>. Then answer only what the chart or table can actually prove — reject options that sound plausible but aren't shown. 'Highest total' and 'grew the most' are different questions. Always verify arithmetic claims by computing them yourself.",
    business: "Understand the <b>principle</b> behind each decision: supply/demand, fixed vs. variable costs, break-even, margin vs. volume, and sunk costs. Sunk costs are gone — only future cash matters. Revenue is not profit; the higher-revenue option often earns less profit.",
    detail: "Slow down and <b>compute every figure independently</b> — don't trust the printed total. Check running balances step by step. Watch for transposition errors (digits swapped), wrong base units, and percentage applied to the wrong amount. One wrong decimal can change everything."
  },
  questions: {

    /* ── NUMERICAL APTITUDE ── */

    "q1": {
      steps: [
        "Find 10% of 240 first: 240 ÷ 10 = <b>24</b>.",
        "Find 5% (half of 10%): 24 ÷ 2 = <b>12</b>.",
        "Add them: 24 + 12 = <b>36</b> oranges given away."
      ],
      trap: "Watch out for 30 (which is 12.5%) or 24 (which is 10%). The question asks for 15%, not 10%."
    },

    "q2": {
      steps: [
        "Increase = ₹<b>460</b> − ₹<b>400</b> = ₹<b>60</b>.",
        "Percentage increase = increase ÷ original × 100 = 60 ÷ 400 × 100.",
        "60 ÷ 400 = <b>0.15</b>. Multiply by 100 → <b>15%</b>."
      ],
      trap: "Always divide by the original (starting) value — ₹400 — not the new value of ₹460."
    },

    "q3": {
      steps: [
        "Simple Interest formula: SI = Principal × Rate × Time ÷ 100.",
        "SI = <b>8,000</b> × <b>6</b> × <b>3</b> ÷ 100 = 1,44,000 ÷ 100 = <b>₹1,440</b>.",
        "Total = ₹8,000 + ₹1,440 = <b>₹9,440</b>."
      ],
      trap: "₹9,600 would be the answer if you forgot to divide by 100 correctly. ₹9,000 is only the interest added once. Always compute SI first, then add it to the principal."
    },

    "q4": {
      steps: [
        "Cost price = ₹<b>250</b>. Selling price = ₹<b>290</b>.",
        "Profit = 290 − 250 = <b>₹40</b>.",
        "Profit % = Profit ÷ <b>Cost Price</b> × 100 = 40 ÷ 250 × 100 = <b>16%</b>."
      ],
      trap: "Dividing by the selling price (₹290) gives ~13.8% — which is the wrong base. Profit percentage is always on the cost price."
    },

    "q5": {
      steps: [
        "Ratio 3 : 5 means 3 + 5 = <b>8 equal parts</b> in total.",
        "Each part = 240 ÷ 8 = <b>30 items</b>.",
        "Larger share (5 parts) = 5 × 30 = <b>150 items</b>."
      ],
      trap: "Don't divide 240 by 5 alone — the total number of parts is 8 (3+5), not 5."
    },

    "q6": {
      steps: [
        "First discount 20%: ₹500 × <b>0.80</b> = <b>₹400</b>.",
        "Second discount 10% on the reduced price: ₹400 × <b>0.90</b> = <b>₹360</b>.",
        "Final price = <b>₹360</b>."
      ],
      trap: "Adding 20% + 10% = 30% and subtracting from ₹500 gives ₹350 — but this is wrong. The second discount is on ₹400, not on ₹500."
    },

    /* ── FINANCIAL REASONING ── */

    "q7": {
      steps: [
        "Option A total = <b>₹8,000</b> (outright).",
        "Option B total = ₹5,000 + (<b>12</b> × ₹<b>250</b>) = ₹5,000 + ₹3,000 = <b>₹8,000</b>.",
        "Both options cost exactly <b>₹8,000</b> over 12 months."
      ],
      trap: "Spread payments can feel cheaper month to month, but always total the full cost before deciding."
    },

    "q8": {
      steps: [
        "Contribution per card = Selling price − Variable cost = ₹<b>50</b> − ₹<b>30</b> = <b>₹20</b>.",
        "Break-even units = Fixed cost ÷ Contribution = ₹<b>2,000</b> ÷ ₹<b>20</b> = <b>100 cards</b>."
      ],
      trap: "Don't divide the fixed cost by the selling price (₹50) alone — you must subtract variable costs first to get the true 'contribution' each unit makes."
    },

    "q9": {
      steps: [
        "Keeping cash at home earns <b>nothing</b>.",
        "The savings account would have earned 5% on ₹50,000 = ₹50,000 × 0.05 = <b>₹2,500</b>.",
        "That ₹2,500 of foregone interest is the <b>opportunity cost</b> of keeping cash at home."
      ],
      trap: "Inflation is a separate concept not mentioned here. The direct, measurable cost is the interest income they gave up: ₹2,500."
    },

    "q10": {
      steps: [
        "Bank A: SI = ₹10,000 × 12% × 2 = ₹10,000 × 0.12 × 2 = <b>₹2,400</b>.",
        "Bank B: SI = ₹10,000 × 10% × 3 = ₹10,000 × 0.10 × 3 = <b>₹3,000</b>.",
        "Bank A costs <b>₹600 less</b> in total interest despite its higher rate."
      ],
      trap: "A higher rate over a short time can be cheaper than a lower rate over a long time. Always multiply rate × time, not just compare rates."
    },

    "q11": {
      steps: [
        "Revenue = 40 × ₹<b>500</b> = <b>₹20,000</b>.",
        "Variable costs = 40 × ₹<b>300</b> = <b>₹12,000</b>. Fixed costs = <b>₹2,000</b>. Total costs = <b>₹14,000</b>.",
        "Profit = ₹20,000 − ₹14,000 = <b>₹6,000</b>."
      ],
      trap: "Don't forget the fixed daily cost of ₹2,000. Adding only the ingredient costs gives the wrong answer of ₹8,000."
    },

    "q12": {
      steps: [
        "Plan A at 200 units: ₹<b>600</b> + (200 × ₹<b>0.15</b>) = ₹600 + ₹30 = <b>₹630</b>.",
        "Plan B at 200 units: ₹<b>300</b> + (200 × ₹<b>0.25</b>) = ₹300 + ₹50 = <b>₹350</b>.",
        "Plan B saves ₹280 at 200 units. (Plans break even at 3,000 units — well above typical household use.)"
      ],
      trap: "Plan A's lower per-unit rate only wins above 3,000 units. At a typical 200 units, Plan B's lower fixed charge dominates."
    },

    /* ── DATA READING & INTERPRETATION ── */

    "q13": {
      steps: [
        "Read all five bar heights: Jan = <b>₹12,000</b>, Feb = <b>₹9,000</b>, Mar = <b>₹15,000</b>, Apr = <b>₹11,000</b>, May = <b>₹18,000</b>.",
        "The tallest bar is <b>May</b> at ₹18,000."
      ],
      trap: "March looks tall but it is only ₹15,000. Always read the actual values, not just visual impression."
    },

    "q14": {
      steps: [
        "Read the table: A = <b>35%</b>, B = <b>50%</b>, C = <b>20%</b>, D = <b>45%</b>.",
        "Highest margin = <b>Product B at 50%</b>."
      ],
      trap: "Product D at 45% is close but B is still higher. Read precisely — don't guess from position."
    },

    "q15": {
      steps: [
        "Read each quarter: Q1 = <b>₹80,000</b>, Q2 = <b>₹95,000</b>, Q3 = <b>₹90,000</b>, Q4 = <b>₹1,05,000</b>.",
        "Q2 to Q3: revenue <b>fell</b> from ₹95,000 to ₹90,000.",
        "So the claim 'grew every quarter' is <b>false</b>."
      ],
      trap: "Overall, the final quarter is higher than the first, so the full-year trend is up — but 'every quarter' includes the Q2→Q3 dip, which is a fall."
    },

    "q16": {
      steps: [
        "Total budget = ₹2,000 + ₹1,000 + ₹500 + ₹300 + ₹200 = <b>₹4,000</b>.",
        "Food = <b>₹1,000</b>.",
        "Food % = 1,000 ÷ 4,000 × 100 = <b>25%</b>."
      ],
      trap: "Make sure to add all five categories to get the correct total (₹4,000). Using only four categories gives a wrong denominator."
    },

    "q17": {
      steps: [
        "Read each bar: Q1 = <b>45</b>, Q2 = <b>52</b>, Q3 = <b>48</b>, Q4 = <b>61</b> (₹ thousands).",
        "Total = 45 + 52 + 48 + 61 = <b>206</b> thousands = <b>₹2,06,000</b>."
      ],
      trap: "Add carefully: 45 + 52 = 97, + 48 = 145, + 61 = 206. Rushing gives 200 or 212."
    },

    "q18": {
      steps: [
        "From the table: Ravi = <b>₹80,000</b>, Dev = <b>₹72,000</b>.",
        "Ravi's lead over Dev = ₹80,000 − ₹72,000 = <b>₹8,000</b>.",
        "The report says ₹12,000 — that is <b>wrong</b>."
      ],
      trap: "The report also incorrectly implies Ravi is top seller; Sunita (₹95,000) is highest. Focus on what was specifically claimed: the ₹12,000 figure."
    },

    /* ── BUSINESS LOGIC & DECISION-MAKING ── */

    "q19": {
      steps: [
        "Supply of cooking oil <b>falls</b> (bad harvest). Demand stays the same.",
        "Basic supply-and-demand: lower supply + same demand → sellers can charge more → <b>price rises</b>."
      ],
      trap: "Suppliers do not slash prices when goods are scarce — scarcity gives them more pricing power, not less."
    },

    "q20": {
      steps: [
        "Contribution per cup = Selling price − Variable cost = ₹<b>150</b> − ₹<b>60</b> = <b>₹90</b>.",
        "Break-even = Setup cost ÷ Contribution = ₹<b>15,000</b> ÷ ₹<b>90</b> = <b>166.7</b>, rounded up to <b>167 cups</b>."
      ],
      trap: "Dividing ₹15,000 by the full selling price (₹150) gives 100 — but that ignores the ₹60 ingredient cost per cup."
    },

    "q21": {
      steps: [
        "New revenue = old revenue × (1 + 10%) × (1 − 5%) = old × <b>1.10</b> × <b>0.95</b>.",
        "1.10 × 0.95 = <b>1.045</b> — so revenue rises by <b>4.5%</b>."
      ],
      trap: "Selling fewer units feels like less revenue, but the 10% price gain outweighs the 5% volume loss. Multiply the factors — don't just subtract percentages."
    },

    "q22": {
      steps: [
        "Stall A: profit = ₹12,000 − ₹10,500 = <b>₹1,500</b>.",
        "Stall B: profit = ₹8,000 − ₹6,000 = <b>₹2,000</b>.",
        "Stall B earns <b>more profit</b> despite lower revenue."
      ],
      trap: "Higher revenue does not equal higher profit. Always subtract costs before comparing performance."
    },

    "q23": {
      steps: [
        "Three coffee shops already serve the town — copying them means competing head-on for the same customers.",
        "The smarter move: <b>find a gap</b> (different style, niche menu, study space) to attract customers the others don't fully serve."
      ],
      trap: "Price-cutting alone is a race to the bottom and unsustainable. Differentiation is more durable than matching the competition."
    },

    "q24": {
      steps: [
        "Current profit: 500 units × ₹<b>100</b> = <b>₹50,000</b>.",
        "Proposed profit: 600 units × ₹<b>80</b> = <b>₹48,000</b>.",
        "The change <b>reduces</b> total profit by ₹2,000 — she should not make the change."
      ],
      trap: "More units sold can feel like a better business, but if the margin drops proportionally more, total profit falls."
    },

    /* ── ACCURACY & ATTENTION TO DETAIL ── */

    "q25": {
      steps: [
        "Add step by step: ₹347 + ₹256 = <b>₹603</b>.",
        "₹603 + ₹189 = <b>₹792</b>.",
        "₹792 + ₹408 = <b>₹1,200</b>.",
        "The cashier wrote ₹1,190 — that is <b>wrong by ₹10</b>."
      ],
      trap: "Adding the last pair (792 + 408) carefully: 792 + 400 = 1,192, + 8 = 1,200 — not 1,190."
    },

    "q26": {
      steps: [
        "Expected subtotal = 12 × ₹<b>85</b> = <b>₹1,020</b>.",
        "Invoice shows <b>₹1,080</b>.",
        "Overcharge = ₹1,080 − ₹1,020 = <b>₹60</b>."
      ],
      trap: "₹1,080 could be 12 × ₹90 — someone may have used the wrong unit price. Always multiply quantity × correct price independently."
    },

    "q27": {
      steps: [
        "Opening = <b>₹5,000</b>.",
        "Entry 1: 5,000 − 320 = <b>₹4,680</b> ✓ (table shows 4,680).",
        "Entry 2: 4,680 + 150 = <b>₹4,830</b> — but table shows <b>₹4,930</b> ✗.",
        "The error is in Entry 2."
      ],
      trap: "Once an error appears, later balances are all off too. Always start from the last confirmed correct balance and check each step."
    },

    "q28": {
      steps: [
        "Expected closing balance = ₹<b>3,500</b> + ₹<b>2,200</b> − ₹<b>750</b>.",
        "3,500 + 2,200 = 5,700. 5,700 − 750 = <b>₹4,950</b>.",
        "Statement shows ₹5,050 — overstated by <b>₹100</b>."
      ],
      trap: "Work it out yourself rather than trusting the printed figure. A ₹100 error in a bank statement is easy to miss without computing."
    },

    "q29": {
      steps: [
        "Start at a base of <b>100</b>. Rise 25%: 100 × 1.25 = <b>125</b>.",
        "Fall 25% of <b>125</b> (not of 100): 125 × 0.75 = <b>93.75</b>.",
        "Net result: <b>6.25% below</b> the starting figure — not the same."
      ],
      trap: "25% up then 25% down feels symmetric but it's not. The fall is taken on a larger number, so it removes more than the rise added."
    },

    "q30": {
      steps: [
        "Net profit = Revenue − Costs = ₹<b>2,40,000</b> − ₹<b>1,95,000</b> = <b>₹45,000</b>.",
        "The report states ₹55,000 — that is <b>wrong</b> by ₹10,000."
      ],
      trap: "Large numbers make arithmetic errors easy to miss. Always independently subtract costs from revenue rather than trusting the stated figure."
    },

    /* ── NUMERICAL APTITUDE q31–q44 ── */

    "q31": {
      steps: [
        "20% of 350 = 350 × <b>0.20</b> = <b>70</b> items.",
        "(Quick check: 10% of 350 = 35; double for 20% = 70 ✓)"
      ],
      trap: "10% of 350 is 35 — a common wrong answer if you forget to double it for 20%."
    },

    "q32": {
      steps: [
        "25% off means you pay 100% − 25% = <b>75%</b> of the price.",
        "₹800 × <b>0.75</b> = <b>₹600</b>.",
        "(Or: 25% of 800 = 200; 800 − 200 = 600 ✓)"
      ],
      trap: "Don't subtract ₹25 — the discount is 25% of the price, not ₹25."
    },

    "q33": {
      steps: [
        "Total parts = 2 + 3 = <b>5</b>. Each part = ₹500 ÷ 5 = <b>₹100</b>.",
        "Larger share (3 parts) = 3 × ₹100 = <b>₹300</b>."
      ],
      trap: "Dividing ₹500 by 3 gives ₹166.67 — wrong because the total parts are 5, not 3."
    },

    "q34": {
      steps: [
        "SI = Principal × Rate × Time ÷ 100 = <b>5,000</b> × <b>8</b> × <b>2</b> ÷ 100.",
        "5,000 × 8 = 40,000. 40,000 × 2 = 80,000. 80,000 ÷ 100 = <b>₹800</b>."
      ],
      trap: "₹400 is only one year's interest. The question asks for two years: multiply by 2."
    },

    "q35": {
      steps: [
        "Commission = 12% of ₹1,500 = ₹1,500 × <b>0.12</b>.",
        "1,500 × 0.12 = <b>₹180</b>.",
        "(10% = 150; 2% = 30; total 12% = 180 ✓)"
      ],
      trap: "10% of ₹1,500 is ₹150 — don't stop there. Add the extra 2% (₹30) for 12%."
    },

    "q36": {
      steps: [
        "Cost per mug = Total ÷ Quantity = ₹<b>360</b> ÷ <b>8</b> = <b>₹45</b>."
      ],
      trap: "360 ÷ 8: try 8 × 45 = 360 to verify. Not 40 (8 × 40 = 320) and not 48 (8 × 48 = 384)."
    },

    "q37": {
      steps: [
        "18% tax on ₹250: ₹250 × <b>0.18</b> = <b>₹45</b>.",
        "Total = ₹250 + ₹45 = <b>₹295</b>.",
        "(Or: ₹250 × 1.18 = ₹295 directly.)"
      ],
      trap: "₹290 would be 16% tax. Make sure to use 18%, not 15% or 16%."
    },

    "q38": {
      steps: [
        "Loss = Cost − Selling = ₹<b>600</b> − ₹<b>480</b> = <b>₹120</b>.",
        "Loss % = Loss ÷ Cost × 100 = 120 ÷ 600 × 100 = <b>20%</b>."
      ],
      trap: "Always divide by the cost price (₹600), not the selling price. Dividing by 480 gives 25% — wrong."
    },

    "q39": {
      steps: [
        "After a 10% discount, the customer pays <b>90%</b> of the original price.",
        "So 90% of original = ₹450.",
        "Original = ₹450 ÷ <b>0.9</b> = <b>₹500</b>."
      ],
      trap: "Don't add 10% to ₹450 (which gives ₹495). Reverse a percentage by dividing — the original × 0.9 = ₹450, so divide ₹450 by 0.9."
    },

    "q40": {
      steps: [
        "Sum = ₹1,200 + ₹1,500 + ₹1,800 + ₹1,300 + ₹1,200 = <b>₹7,000</b>.",
        "Average = ₹7,000 ÷ <b>5</b> = <b>₹1,400</b>."
      ],
      trap: "Add step by step: 1200+1500=2700, +1800=4500, +1300=5800, +1200=7000. A quick mental shortcut: ₹1,400 × 5 = 7,000 ✓."
    },

    "q41": {
      steps: [
        "Rate per worker per hour = 200 ÷ 4 = <b>50 boxes/hour</b>.",
        "6 workers × 50 boxes/hour × 2 hours = <b>600 boxes</b>."
      ],
      trap: "400 would be the answer for only 4 workers over 2 hours. Adjust for the extra 2 workers."
    },

    "q42": {
      steps: [
        "Members = 60% of 400 = <b>240</b>.",
        "Coupon users = 25% of 240 = 240 × 0.25 = <b>60 customers</b>."
      ],
      trap: "Don't take 25% of 400 (= 100). The 25% applies only to the 240 members, not all customers."
    },

    "q43": {
      steps: [
        "Year 1: ₹10,000 × <b>1.10</b> = <b>₹11,000</b>.",
        "Year 2: ₹11,000 × <b>1.20</b> = <b>₹13,200</b>."
      ],
      trap: "Adding 10% + 20% = 30% gives ₹13,000 — wrong because the second year's 20% grows the already-increased Year 1 figure, not the original ₹10,000."
    },

    "q44": {
      steps: [
        "Year 1 balance: ₹20,000 × <b>1.10</b> = <b>₹22,000</b>.",
        "Year 2 balance: ₹22,000 × <b>1.10</b> = <b>₹24,200</b>."
      ],
      trap: "Simple interest would give ₹20,000 + ₹2,000 + ₹2,000 = ₹24,000. Compound interest earns interest on Year 1's interest too, giving ₹24,200."
    },

    /* ── FINANCIAL REASONING q45–q58 ── */

    "q45": {
      steps: [
        "An emergency fund is money set aside specifically to <b>cover unexpected expenses</b> — job loss, medical bills, urgent repairs — without needing to borrow.",
        "It acts as a buffer so one bad event doesn't become a debt spiral."
      ],
      trap: "It is not for investment or everyday spending. The point is liquidity and protection, not growth."
    },

    "q46": {
      steps: [
        "Distinguish <b>needs</b> (rent, food, electricity) from <b>wants</b> (streaming services rarely used).",
        "A streaming subscription rarely used is a discretionary expense — the safest to cut without affecting basic living."
      ],
      trap: "Cutting rent, groceries, or electricity would harm essential living. Discretionary spending is always the first target when budgets are tight."
    },

    "q47": {
      steps: [
        "Compound interest means money grows on <b>previous growth</b> as well as the original deposit.",
        "Starting at <b>25</b> gives 35 years of growth before age 60; starting at 35 gives only 25 years.",
        "More time → more compounding → significantly more savings."
      ],
      trap: "It is not about how much you earn later in life. Time in the market is what drives the difference."
    },

    "q48": {
      steps: [
        "Current saving per month = ₹30,000 − ₹28,000 = <b>₹2,000</b>.",
        "To save more: either <b>spend less</b> (cut expenses) or <b>earn more</b> (raise income). Both directly change the gap.",
        "Checking balances or changing payment dates does not change the underlying math."
      ],
      trap: "Checking your balance more often is a monitoring habit, not a saving strategy."
    },

    "q49": {
      steps: [
        "Health insurance transfers the risk of a large, unpredictable cost (e.g. hospital bill) to the insurer.",
        "You pay a small, predictable premium so that if a large bill arrives, you are protected."
      ],
      trap: "Insurance doesn't guarantee you won't get ill. It protects your finances when you do."
    },

    "q50": {
      steps: [
        "Monthly rent = ₹<b>6,000</b>. Duration = <b>2 years</b> = 24 months.",
        "Total rent = ₹6,000 × 24 = <b>₹1,44,000</b>."
      ],
      trap: "2 years = 24 months, not 20 or 12. ₹72,000 is only one year; ₹1,20,000 is 20 months."
    },

    "q51": {
      steps: [
        "Single bars cost: 6 × ₹<b>30</b> = <b>₹180</b>.",
        "Pack of 6 costs: <b>₹150</b>.",
        "Saving with pack = ₹180 − ₹150 = <b>₹30</b>."
      ],
      trap: "You're comparing like for like (six bars either way). The pack saves exactly ₹30."
    },

    "q52": {
      steps: [
        "Savings earn <b>4%</b>. Loan charges <b>14%</b>.",
        "Paying off the loan saves 14% interest cost — much more than the 4% earned in savings.",
        "Net benefit of paying off loan = 14% − 4% = <b>10%</b> advantage."
      ],
      trap: "Keeping savings while carrying a more-expensive loan is financially irrational. The loan rate always dominates."
    },

    "q53": {
      steps: [
        "Shop A: 20% off ₹1,000 = ₹1,000 × <b>0.80</b> = <b>₹800</b> paid.",
        "Shop B: pay ₹1,000, get ₹150 back = <b>₹850</b> net paid.",
        "Shop A costs <b>₹50 less</b>."
      ],
      trap: "Cashback is received after paying full price — the effective cost is ₹850, not ₹800."
    },

    "q54": {
      steps: [
        "Deductions = 15% of ₹40,000 = ₹40,000 × <b>0.15</b> = <b>₹6,000</b>.",
        "Take-home = ₹40,000 − ₹6,000 = <b>₹34,000</b>."
      ],
      trap: "₹36,000 would be a 10% deduction, not 15%. Always compute the percentage of the gross, then subtract."
    },

    "q55": {
      steps: [
        "Unpaid balance = ₹10,000 − ₹500 = <b>₹9,500</b>.",
        "Interest accrues on the ₹9,500 each month, and next month interest accrues on an even bigger balance.",
        "Paying the minimum prolongs the debt and significantly increases the <b>total amount repaid</b>."
      ],
      trap: "The card allows minimum payment — that's a feature for the bank, not for you. It maximises the interest they collect."
    },

    "q56": {
      steps: [
        "Option A return = ₹11,500 − ₹10,000 = <b>₹1,500</b> gain = <b>15%</b>.",
        "Option B return = ₹11,000 − ₹10,000 = <b>₹1,000</b> gain = <b>10%</b>.",
        "Option A gives the better return."
      ],
      trap: "Both require the same outlay; just compare the return in rupees (₹1,500 vs ₹1,000)."
    },

    "q57": {
      steps: [
        "Your money grows by <b>5%</b> in nominal terms.",
        "But prices rose <b>7%</b> — things cost 7% more.",
        "Real purchasing power change ≈ 5% − 7% = <b>−2%</b>. You can buy less than before."
      ],
      trap: "Earning interest in a bank account sounds like a gain, but if inflation outpaces it, your real wealth shrinks."
    },

    "q58": {
      steps: [
        "Lease total = ₹<b>2,000</b> × <b>36</b> months = <b>₹72,000</b> — and you return the machine.",
        "Buy total = <b>₹60,000</b> — and you <b>own</b> the machine.",
        "Buying costs ₹12,000 less AND you keep the asset."
      ],
      trap: "Smaller monthly payments can feel better, but totalling them reveals the lease costs more."
    },

    /* ── DATA READING & INTERPRETATION q59–q72 ── */

    "q59": {
      steps: [
        "Read each bar: Mon = <b>20</b>, Tue = <b>35</b>, Wed = <b>15</b>, Thu = <b>40</b>, Fri = <b>25</b> (hundreds).",
        "Smallest value = <b>15</b> on <b>Wednesday</b>."
      ],
      trap: "Monday (20) is the second lowest, not the lowest. Always read all values before concluding."
    },

    "q60": {
      steps: [
        "Read all five points: Month 1 = <b>30</b>, 2 = <b>45</b>, 3 = <b>60</b>, 4 = <b>50</b>, 5 = <b>40</b> (thousands).",
        "Peak = <b>60</b> in <b>Month 3</b>."
      ],
      trap: "Downloads declined after Month 3. Month 5 at 40 is the second-lowest — don't confuse last with highest."
    },

    "q61": {
      steps: [
        "2 Folders = 2 × ₹<b>45</b> = <b>₹90</b>.",
        "1 Marker = ₹<b>25</b>.",
        "Total = ₹90 + ₹25 = <b>₹115</b>."
      ],
      trap: "Only the requested items count — Pen and Stapler are distractors in the table."
    },

    "q62": {
      steps: [
        "February sales = <b>₹80,000</b>. January sales = <b>₹50,000</b>.",
        "Difference = ₹80,000 − ₹50,000 = <b>₹30,000</b>."
      ],
      trap: "The chart is in ₹ thousands — reading 80 and 50 directly is right, but the answer must be expressed as ₹30,000."
    },

    "q63": {
      steps: [
        "Bar values: North = <b>10</b>, South = <b>20</b>, East = <b>30</b>, West = <b>40</b>.",
        "Total = 10 + 20 + 30 + 40 = <b>100 units</b>."
      ],
      trap: "Adding only three of the four regions gives 90. Include all regions."
    },

    "q64": {
      steps: [
        "West sold <b>40</b> units out of a total of <b>100</b> units.",
        "West % = 40 ÷ 100 × 100 = <b>40%</b>."
      ],
      trap: "East (30 units = 30%) and West (40 units = 40%) are the highest. Don't confuse East with West."
    },

    "q65": {
      steps: [
        "Month-to-month changes: M1→M2 = 22−20 = <b>+2</b>; M2→M3 = 21−22 = <b>−1</b>; M3→M4 = 35−21 = <b>+14</b>; M4→M5 = 36−35 = <b>+1</b>.",
        "Biggest rise = <b>+14</b> from Month 3 to Month 4."
      ],
      trap: "Month 4 has a high value but only rose +1 from Month 3. The question asks for the biggest increase between consecutive months."
    },

    "q66": {
      steps: [
        "Product A = <b>60</b> units, Product B = <b>20</b> units.",
        "Ratio A : B = 60 : 20 = <b>3 : 1</b> (divide both by 20)."
      ],
      trap: "6 : 2 is technically correct but not simplified. 3 : 1 is the simplest form."
    },

    "q67": {
      steps: [
        "Sum = <b>40</b> + <b>50</b> + <b>60</b> + <b>50</b> = <b>200</b> (₹ thousands).",
        "Average = 200 ÷ 4 = <b>50</b> (₹ thousands) = <b>₹50,000</b>."
      ],
      trap: "The highest quarter is ₹60,000 but the average is ₹50,000. Don't report the peak as the average."
    },

    "q68": {
      steps: [
        "Profit = Revenue − Costs = ₹<b>1,00,000</b> − ₹<b>70,000</b> = <b>₹30,000</b>.",
        "Profit margin = ₹30,000 ÷ ₹1,00,000 × 100 = <b>30%</b>."
      ],
      trap: "43% would result from dividing profit by costs (30/70). Profit margin is always profit ÷ revenue."
    },

    "q69": {
      steps: [
        "Increase = ₹<b>100k</b> − ₹<b>80k</b> = <b>₹20k</b>.",
        "% increase = 20 ÷ <b>80</b> × 100 = <b>25%</b>."
      ],
      trap: "Dividing by 100 (the new value) gives 20%, which is the wrong base. Always divide by the starting value."
    },

    "q70": {
      steps: [
        "Seller X total = 30 + 30 + 30 = <b>₹90k</b>.",
        "Seller Y total = 10 + 60 + 20 = <b>₹90k</b>.",
        "Both sold the same total. Y's one peak month doesn't make Y the stronger seller overall."
      ],
      trap: "A single standout month is easy to notice but distorts comparisons. Always look at <b>total</b> performance."
    },

    "q71": {
      steps: [
        "Branch A added: 50% of ₹<b>2,000</b> = <b>₹1,000</b>.",
        "Branch B added: 10% of ₹<b>40,000</b> = <b>₹4,000</b>.",
        "Branch B added <b>4× more in rupees</b>, despite its smaller percentage."
      ],
      trap: "A large percentage on a small base is often less than a small percentage on a large base. Always check the absolute (rupee) amounts."
    },

    "q72": {
      steps: [
        "Cumulative totals: Wk1 = <b>10</b>, Wk2 = <b>25</b>, Wk3 = <b>45</b>, Wk4 = <b>70</b>.",
        "Items sold in each week: Wk1 = 10, Wk2 = 25−10 = <b>15</b>, Wk3 = 45−25 = <b>20</b>, Wk4 = 70−45 = <b>25</b>.",
        "Sales <b>increased</b> every week — the trainee's claim is wrong."
      ],
      trap: "A cumulative chart always slopes upward. 'Slowing down' would mean the weekly increments are shrinking — here they are growing (+10, +15, +20, +25)."
    },

    /* ── BUSINESS LOGIC & DECISION-MAKING q73–q86 ── */

    "q73": {
      steps: [
        "Doubling price makes coffee less affordable or less appealing relative to competitors.",
        "Customers substitute (go elsewhere, make coffee at home) → <b>sales fall</b>."
      ],
      trap: "Higher prices don't attract more buyers for an everyday commodity like coffee — they drive customers away."
    },

    "q74": {
      steps: [
        "A fixed cost does <b>not change</b> with output level.",
        "Monthly shop rent stays the same whether 10 or 100 loaves are baked.",
        "Flour, packaging, and electricity all increase with output — they are <b>variable costs</b>."
      ],
      trap: "Electricity can feel 'fixed' but it rises with oven use. Rent is the clearest fixed cost."
    },

    "q75": {
      steps: [
        "Premium baby products target <b>new parents</b> who are actively buying for babies.",
        "Advertising in a parenting magazine reaches exactly that audience."
      ],
      trap: "Reaching a huge audience in the wrong demographic wastes money. Target marketing focuses on who will actually buy."
    },

    "q76": {
      steps: [
        "Profit is an accounting concept; cash is what's physically available.",
        "If customers buy on credit and haven't paid yet, the business is profitable on paper but <b>cash is tied up in receivables</b>.",
        "That's a cash-flow problem, not a profitability problem."
      ],
      trap: "A profitable business can run out of cash. Profit ≠ available cash."
    },

    "q77": {
      steps: [
        "Fixed costs (building, machinery, management) are the same whether you make 100 or 10,000 units.",
        "Spread over more units → <b>fixed cost per unit falls</b> — this is economies of scale.",
        "Lower cost per unit lets large producers charge less or earn more margin."
      ],
      trap: "It's not about paying workers less — it's about spreading fixed costs over a larger output."
    },

    "q78": {
      steps: [
        "25% profit on cost price = ₹<b>200</b> × 0.25 = <b>₹50</b> profit.",
        "Selling price = ₹200 + ₹50 = <b>₹250</b>."
      ],
      trap: "Don't add 25% of the selling price — the question specifies profit on cost price (₹200)."
    },

    "q79": {
      steps: [
        "Product A total profit = ₹<b>30</b> × <b>100</b> = <b>₹3,000</b>/month.",
        "Product B total profit = ₹<b>50</b> × <b>40</b> = <b>₹2,000</b>/month.",
        "Drop <b>Product B</b> — losing ₹2,000 is better than losing ₹3,000."
      ],
      trap: "Higher profit per unit does not mean higher total profit. Always multiply margin × volume."
    },

    "q80": {
      steps: [
        "Selling milk at a loss draws shoppers into the store.",
        "Placing milk at the back means customers must walk through the store — past profitable items — to reach it.",
        "The <b>incidental purchases</b> of other goods more than cover the loss on milk."
      ],
      trap: "The loss on milk is deliberate — it's a 'loss leader' strategy, not an accounting mistake."
    },

    "q81": {
      steps: [
        "Required total profit = <b>₹50,000</b>. New profit per unit = <b>₹80</b>.",
        "Units needed = ₹50,000 ÷ ₹80 = <b>625 units</b>."
      ],
      trap: "At ₹80 profit per unit she needs 125 more units than before (625 vs 500) to make the same money — cutting price requires selling significantly more."
    },

    "q82": {
      steps: [
        "Make in-house: 1,000 × ₹<b>40</b> = <b>₹40,000</b>.",
        "Buy from supplier: 1,000 × ₹<b>35</b> = <b>₹35,000</b>.",
        "Buying saves <b>₹5,000</b>."
      ],
      trap: "The saving is ₹5 per unit × 1,000 units = ₹5,000 — not ₹50,000. Check your multiplication."
    },

    "q83": {
      steps: [
        "Before matching a rival's price cut, check whether you can still <b>cover your own costs</b> at that price.",
        "If your costs are higher than the rival's, matching the price could mean selling at a loss."
      ],
      trap: "Reacting emotionally to a competitor's move without checking your own numbers can destroy your margins."
    },

    "q84": {
      steps: [
        "Using a single supplier creates <b>concentration risk</b>.",
        "If that supplier has a problem (shortage, price hike, closure), the bakery has <b>no alternative</b> and may run out of flour."
      ],
      trap: "Single-supplier simplicity is convenient but fragile. Diversifying suppliers costs a little more to manage but protects supply continuity."
    },

    "q85": {
      steps: [
        "The ₹<b>50,000</b> already spent is a <b>sunk cost</b> — it cannot be recovered.",
        "The real decision: spend ₹<b>30,000</b> more to earn ₹<b>20,000</b> back.",
        "That is a net loss of <b>₹10,000</b> on top. Rationally: <b>stop the project</b>."
      ],
      trap: "'We've already spent ₹50,000 so we can't stop now' is the sunk cost fallacy. Past money spent is irrelevant to future decisions."
    },

    "q86": {
      steps: [
        "Bundle saves ₹200 − ₹170 = <b>₹30</b> vs buying both separately.",
        "If you only want <b>one</b> item, the bundle costs ₹170 for something worth ₹100 to you — a loss of ₹70.",
        "The bundle is genuinely good value <b>only</b> for someone who wants both items."
      ],
      trap: "'Bundles are always cheaper' is a common marketing misconception. For single-item buyers the bundle is more expensive."
    },

    /* ── ACCURACY & ATTENTION TO DETAIL q87–q100 ── */

    "q87": {
      steps: [
        "₹4,500 in words: four thousand (<b>4,000</b>) + five hundred (<b>500</b>) = 'Four thousand five hundred'.",
        "Match that exactly — no other option fits."
      ],
      trap: "'Forty-five thousand' would be ₹45,000 — a ×10 error. Always verify the place value of each digit."
    },

    "q88": {
      steps: [
        "7 × ₹250: 7 × 200 = 1,400; 7 × 50 = 350; total = <b>₹1,750</b>."
      ],
      trap: "₹1,500 would be 6 × ₹250. Count the units (7) carefully before multiplying."
    },

    "q89": {
      steps: [
        "₹100 + ₹200 + ₹300 = <b>₹600</b>.",
        "Stated total is ₹700 — wrong by <b>₹100</b>."
      ],
      trap: "Three-figure addition is quick, but ₹700 can look plausible if you skim. Always add independently."
    },

    "q90": {
      steps: [
        "Original: INV-2025-<b>0048</b>.",
        "Option C shows INV-2025-<b>0084</b> — the last two digits are swapped.",
        "That is a <b>transposition error</b> and does not match."
      ],
      trap: "Options A, B, and D all show 0048 correctly. Option C's 0084 looks similar at a glance — compare digit by digit."
    },

    "q91": {
      steps: [
        "10% of ₹500 = <b>₹50</b>.",
        "Correct total = ₹500 + ₹50 = <b>₹550</b>.",
        "Receipt shows ₹560 — overstated by <b>₹10</b>."
      ],
      trap: "₹560 looks close to ₹550 — always calculate the service charge independently rather than accepting the printed total."
    },

    "q92": {
      steps: [
        "3 × ₹15.00 = <b>₹45.00</b>, not ₹450.00.",
        "The receipt has a <b>decimal (place value) error</b> — ₹450.00 is ten times too large."
      ],
      trap: "Decimal errors are easy to miss, especially when the unit price itself ends in .00. Always verify by multiplying quantity × unit price."
    },

    "q93": {
      steps: [
        "Step 1: 2,000 + 500 = <b>2,500</b> ✓.",
        "Step 2: 2,500 − 300 = <b>2,200</b> ✓.",
        "Step 3: 2,200 + 100 = <b>2,300</b> — table shows <b>2,400</b> ✗."
      ],
      trap: "Steps 1 and 2 are correct — the error only appears at Step 3. Trace the chain from the last confirmed correct balance."
    },

    "q94": {
      steps: [
        "₹1,200 + ₹800 + ₹500 = <b>₹2,500</b>.",
        "Stated total is ₹2,600 — overstated by <b>₹100</b>."
      ],
      trap: "Add left to right: 1200 + 800 = 2000, + 500 = 2500. ₹2,600 could result from adding ₹1,300 instead of ₹1,200 by misreading."
    },

    "q95": {
      steps: [
        "April is the <b>4th month</b> of the year.",
        "April has <b>30 days</b> — it cannot have a 31st day.",
        "The date 31/04/2025 is <b>invalid</b> and should be queried."
      ],
      trap: "The year 2025 and the format are both fine. The issue is purely the day number — 30 is the maximum for April."
    },

    "q96": {
      steps: [
        "Price = ₹<b>40</b> per <b>kilogram</b>.",
        "Customer bought <b>500 g = 0.5 kg</b>.",
        "Correct charge = ₹40 × 0.5 = <b>₹20</b>. She was charged ₹40 — double the correct amount."
      ],
      trap: "The error is a unit confusion: the cashier charged for 1 kg when only 500 g was purchased. Always convert grams to kilograms before calculating."
    },

    "q97": {
      steps: [
        "Correct figure = ₹<b>5,490</b>. Recorded figure = ₹<b>5,940</b>.",
        "Difference = ₹5,940 − ₹5,490 = <b>₹450</b>."
      ],
      trap: "Transposition errors (swapping two digits) are always divisible by 9. Here 5,940 − 5,490 = 450 = 9 × 50 ✓. The overstated amount is ₹450."
    },

    "q98": {
      steps: [
        "15% of ₹2,000 = ₹2,000 × <b>0.15</b> = <b>₹300</b>.",
        "Receipt shows ₹200 — which is only 10% of ₹2,000.",
        "The discount is understated by <b>₹100</b>."
      ],
      trap: "₹200 looks like it could be a reasonable discount — but 15% of ₹2,000 is definitely ₹300. Always compute independently."
    },

    "q99": {
      steps: [
        "Monthly rent = ₹<b>1,250</b>. Months in a quarter = <b>3</b>.",
        "Correct quarter total = 3 × ₹1,250 = <b>₹3,750</b>.",
        "Report states ₹3,500 — understated by <b>₹250</b>."
      ],
      trap: "₹3,500 might arise from incorrectly using 2.8 months or just misadding. Multiply directly: 3 × 1,250 = 3,750."
    },

    "q100": {
      steps: [
        "Subtotal = ₹<b>1,000</b>. Tax (10%) = ₹<b>100</b>.",
        "Correct total = ₹1,000 + ₹100 = <b>₹1,100</b>.",
        "Receipt shows ₹1,200 — overstated by <b>₹100</b>."
      ],
      trap: "Both the subtotal and tax look right individually, making the wrong total easy to overlook. Always add subtotal + tax yourself to verify the final line."
    }

  }
};
if (window.__onGuideLoaded) window.__onGuideLoaded();
