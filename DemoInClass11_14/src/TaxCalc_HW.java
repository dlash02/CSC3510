public class TaxCalc_HW {
    private int dependents; // Number dependents can be 0-100
                    // more than 100 or < 0 should generate an exception
    private double totalIncome;    // This is the totalIncome before tax adjustments
    private String taxStatus;   // Set to either Single or Married these are the only 2 tax
                       //    status we will use
    private double adjustedGrossIncome = 0;
    private double totalTaxOwed = 0.0;   // this is purpose of the class
    private double standardDeduction = 0.0;
    private double dependentDeduction = 0.0;
    // The pupose of this class is to set totalTaxOwed based on these input arguments
    public TaxCalc_HW(int dependents, double totalIncome, String taxStatus) {
        this.dependents = dependents;
        this.totalIncome = totalIncome;
        this.taxStatus = taxStatus;
    }

    // 1. Create getters and setters for each class property
    // 2. write the setAdjustedGrossIncome()
    //      setStandardDeduction()
    //      and setTaxOwed() methods
    //      - See comments in them for directions
    // 3. Write another test class called TaxCalc_HW_Test
    //    that contains test classes to completed test this class.
    //    3.a. Provide enough tests to completely test setAdjustedGrossIncome() -
    //              Make sure to include tests for the the expected cases and any error conditions
    //    3.b. Provide enough tests to completely test setStandardDeduction() method
    //              Make sure to include tests for the the expected cases and any error conditions
    //    3.c. Provide enough tests to completely test setTaxOwned() method
    //              Make sure to include tests for the the expected cases and any error conditions
    //    3.d For each test add a comment CLEARLY explaining 1. What it does 2. Why you included it.
    //    3.e For each test add a comment CLEARLY explaining 1. What it does 2. Why you included it.
    //    3.f. Provide enough tests to completely test setTaxOwed()
    //              Make sure to include tests for the the expected casses and any error conditions
    //    3.g For each test add a comment CLEARLY explaining 1. What it does 2. Why you included it.
    //  4. What to hand in:
    //  4. a. Your completed TaxCalc_HW.java class
    //  4. B. Your Test Class(s)
    //  4. c. A screen shot showing all of your test classes running

    public void setStandardDeduction() {
        //  This method will set the property adjustedGrossIncome (AGI) based on the following rules
        //                 adjustedGrossIncome  = this.income - standardDeduction - dependentDeduction
        //   Part 1 - stardDeduction rules -
        //     1. if taxStatus is Single then Standard Deduction = $12,400
        //     2. if  taxStatus is not Single then throw an IllegalArgument Exception
        //    Example1:  single person with 100,000 income has adjustedGrossIncome = 100,0000 - 12,400
        //    Example1:  Married with 100,000 income has adjustedGrossIncome => Throw exception
        //
        this.standardDeduction = 0.0;
    }
    public double getStandardDeduction() {
        return standardDeduction;
    }
    public void setDependentDeduction() {
        //   dependentDeduction Rules
        //    1. If taxStatus is Single then subtract $2,000 for each dependent if totalIncome
        //        (before subtracting the standardDeduction) is < $200,000 otherwise dependentDuction = 0;
        //     2. if  number dependents are < 0 or > 100  then throw an IllegalArgument Exception
        //
        //    Example1 Single person with 2 dependents with 100,000 => dependenDeuction = 4,000
        //    Example2 Single person with - 10 dependents with 1000 adjustGrossincome => dependentDeduction =  0
        //                   ... it cannot be negative
        //    Example3 Single person with 0 dependents with 100,000 => dependendDeduction = 0;
        //    Example4 Single person with -3 dependents with 100,000 => throw exception
        //    Example5 Single person with 5 dependents with 200,000 => dependendtDeduction = 0;
        dependentDeduction = 0.0;
    }
    public double getDependentDeduction() {
        return dependentDeduction;
    }
    public void setAdjustedGrossIncome() {
        this.adjustedGrossIncome = totalIncome;
        double standardDeduction = 0.0;
    }
    public double getAdjustedGrossIncome(){
        return adjustedGrossIncome;
    }
    public void setTaxOwed() {
        totalTaxOwed = 0.0;
        // Total tax owed uses the adjustedGrossIncome via the Federal Tax Brackets
       //    For simplicity, we will use these tax brackets and rules
       //  Single filer
       //      10% upto 40125
       //      22% from 40,126 to $163,300
       //      32% $163,301 to $518,400
       //      37% > 518,400
       //
       //
       // Example #1: single filer with $32,000 in adjustedGrossIndome
       //     12% tax bracket.  12% on all $32,000
       //  Example #2: If you had $50,000 of adjustedGrossIncome,
       //         you'd  pay 22% on the on the 50,0000 or 12,100
       // Use the above rules to use these tax bracked and adjustedGrossIncome to set the totalTaxOwed
  }
  public double getTotalTaxOwed() {
        return totalTaxOwed;
  }
}
