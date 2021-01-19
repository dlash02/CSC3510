public class TaxCalc_HW_Sln {
    private int dependents; // Number dependents can be 0-100
                    // more than 100 or < 0 should generate an exception
    private double totalIncome;    // This is the totalIncome before tax adjustments
    private String taxStatus;   // Set to either Single or Married these are the only 2 tax
                       //    status we will use
    private double adjustedGrossIncome = 0;
    private double totalTaxOwed = 0.0;
    public TaxCalc_HW_Sln(int dependents, double totalIncome, String taxStatus) {
        this.dependents = dependents;
        this.totalIncome = totalIncome;
        this.taxStatus = taxStatus;
    }

    public int getDependents() {
        return dependents;
    }

    public void setDependents(int dependents) {
        this.dependents = dependents;
    }

    public double getTotalIncome() {
        return totalIncome;
    }

    public void setTotalIncome(double totalIncome) {
        this.totalIncome = totalIncome;
    }

    public String getTaxStatus() {
        return taxStatus;
    }

    public void setTaxStatus(String taxStatus) {
        this.taxStatus = taxStatus;
    }
// 1. Create getters and setters for each class property
    // 2. write the setAdjustedGrossIncome() and setTaxOwed() methods
    // 3. Write another test class called TaxCalc_HW_Test
    //    that contains test classes to completed test this class.
    //  4. What to hand in:
    //  4. a. Your completed TaxCalc_HW.java class
    //  4. B. Your Test Class(s)
    //  4. c. A screen shot showing all of your test classes running

    public void setAdjustedGrossIncome() {
        this.adjustedGrossIncome = totalIncome;
        double stdDeduction;
        if ( this.taxStatus.equals("Single") ) {
           stdDeduction = 12400.00;
        }  else  {
            throw new IllegalArgumentException("srtDeduction not Married or Single");
        }
        //  This method will set the property adjustedGrossIncome (AGI) based on the following rules
        //                 adjustedGrossIncome  = this.income - standardDeduction - dependentDeduction
        //   Part 1 - stardDeduction rules -
        //     1. if taxStatus is Single then Standard Deduction = $12,400
        //     2. if  taxStatus is not Single then throw an IllegalArgument Exception
        //    Example1:  single person with 100,000 income has adjustedGrossIncome = 100,0000 - 12,400
        //    Example1:  Married with 100,000 income has adjustedGrossIncome => Throw exception
        //
        double dependDeduction = 0.0;
        if ( dependents < 0 || dependents > 100 ) {
            throw new IllegalArgumentException("FL2: dependents < 0 or > 100 ");
        }
        if ( this.taxStatus.equals("Single") ) {
            if ( totalIncome < 200000 ) {
                dependDeduction = dependents * 2000;
            }
        }
        //else if ( this.taxStatus.equals("Married") ) {
            //if ( totalIncome < 400000 ) {
                //dependDeduction = dependents * 2000;
            //}
        //}  else  {
            //throw new IllegalArgumentException("FL2: srtDeduction not Married or Single");
        //}

        //   Part 2 - dependentDeduction Rules
        //    1. If taxStatus is Single then subtract $2,000 for each dependent if totalIncome
        //        (before subtracting the standardDeduction) is < $200,000)
        //     2. if  number dependents are < 0 or > 100  then throw an IllegalArgument Exception
        //
        //    Example1 Single person with 2 dependents with 100,000 adjustedGrossIncome -> 100,000 - 12,400 - 4,000
        //    Example2 Single person with - dependents with 1000 adjustGrossincome -> 0 ... it cannot be negative
        //    Example3 Single person with 0 dependents with 100,000 adjustedGrossIncome -> 100,000 - 12,400
        //    Example4 Single person with -3 dependents with 100,000 => throw exception
        adjustedGrossIncome = totalIncome - dependDeduction - stdDeduction;
        if ( adjustedGrossIncome < 0 ) {
            System.out.printf("\nRESET AGI:%s", adjustedGrossIncome);
            adjustedGrossIncome = 0;
        }
        System.out.printf("\nAGI:%s", adjustedGrossIncome);
        System.out.printf("\ndep:%s", dependDeduction );
        System.out.printf("\nstDeb:%s",stdDeduction );
    }
    public double getAdjustedGrossIncome(){
        return adjustedGrossIncome;
    }
    public void setTaxOwed() {
        setAdjustedGrossIncome();
        totalTaxOwed = 0.0;
        // Total tax owed uses the adjustedGrossIncome via the Federal Tax Brackets
       //       Tax brackets - https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets
       // --- Tax Brackets depending on Married or Single filing
       //  Single filer
       //      10% upto 9875
       //      12% from 9876= 85,525

        if ( this.taxStatus.equals("Single") ) {
            double B1 = 9875;
            double R1 = .1;
            double B2 = 85525;
            double R2 = .12;
            double B3 = 207300;
            double R3 = .24;
            double R4 = .35;
            if ( adjustedGrossIncome <= B1 ){
                totalTaxOwed = adjustedGrossIncome * .10;
                System.out.printf("\nB1:FLAGTTO:%s", totalTaxOwed);
            } else if ( adjustedGrossIncome <= B2 ){
                totalTaxOwed = adjustedGrossIncome * R2;
            } else if ( adjustedGrossIncome <= B3 ){
                totalTaxOwed = adjustedGrossIncome * R3;
            } else if ( adjustedGrossIncome > B3 ) {
                totalTaxOwed = adjustedGrossIncome * R4;
            } else {
                throw new IllegalArgumentException("FL2: srtDeduction not Married or Single");
            }
         }  else  {
            throw new IllegalArgumentException("FL2: srtDeduction not Single");
        }
  }
  public double getTotalTaxOwed() {
        setTaxOwed();
        return totalTaxOwed;
  }
}
