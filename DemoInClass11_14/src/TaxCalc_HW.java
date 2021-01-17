public class TaxCalc_HW {
    // for each dependent
    int dependents;
    int totalIncome;
    String taxStatus; // Set to Single or Married
    // Calculating the amount of tax you owe the IRS depends upon several things
    //   Your Tax Status - There are several tax brackets will will us only 2
    //                 - Single or Married (joint filing)
    // Standard Deduction
    //   The standard deduction is a specific dollar amount that reduces the amount of
    //       income on which you're taxed.
    //      Single: $12,400.
    //      Married filing jointly: $24,800.
    // So, a married couple with 100,000 income would claim 100,0000 - 24,800 adjusted gross income
    // So, a single person with 100,000 income would claim 100,0000 - 12,400 adjusted gross income
    //
    // Per Dependent credit  credit 2,000 per dependent if
    //  Joint income < 400,000. SO ... a married couple with 2 dependents with 100,000 income
    //              has standard deduction + dependent deduction -> 100,000 - 24,800 - 4,000
    //  Single filers < 200,000 ... a single person with 2 dependent with 100,000 include
    //              has standard deduction + dependent deduction -> 100,000 - 12,400 - 4,000
    //
    // Tax brackets - https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets
    // --- Tax Brackets depending on Married or Single filing
    //  Single filer
    //      10% upto 9875
    //      12% from 9876-40125
    //      22% from 40,126 to $85,525
    //      24%  from  $85,526 to $163,300
    //      32% $163,301 to $207,350
    //      35% $207,351 - 518,400
    //      37% > 518,400
    //  Married Joint  Filing
    //      10% upto 19,750
    //      12% from  $19,751 to $80,250
    //      22% from $80,251 to $171,050
    //      24%  from  $171,051 to $326,600
    //      32% from $326,601 to $414,700
    //      35% $414,701 to $622,050
    //      37%  $622,051 or more
    //
    // Example #1: Let’s say you’re a single filer with $32,000 in taxable income.
    //     That puts you in the 12% tax bracket in 2020. But do you pay 12% on all $32,000?
    //     No. Actually, you pay only 10% on the first $9,875; you pay 12% on the rest.
    //  Example #2: If you had $50,000 of taxable income, you’d pay 10% on
    //      that first $9,875 and 12% on the chunk of income between $9,876 and $40,125.
    //      And then you’d pay 22% on the rest, because some of your $50,000
    //      of taxable income falls into the 22% tax bracket.
    //      The total bill would be about $6,800 — about 14% of your taxable income,
    //      even though you're in the 22% bracket
}
}
