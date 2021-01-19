import com.sun.jdi.connect.IllegalConnectorArgumentsException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


//double B1 = 9875;
//double R1 = .1;
//double B2 = 85525;
//double R2 = .12;
//double BractAmount2 = B2 - B1;
//double B3 = 207300;
//double BractAmount3 = B3 - B2;
//double R3 = .24;
//double R4 = .35;
// stdDeduction = 12400.00;
public class TaxCalc_HW_Sln_Test {
    // tests for AddGrossIncome
    @Test
    void checkAdjGrossIncomeNoDepends(){
        double income = 100000;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        t.setAdjustedGrossIncome();
        double sgi = t.getAdjustedGrossIncome();
        assertEquals( income-12400, t.getAdjustedGrossIncome());
    }
    @Test
    void checkAdjGrossIncomeNoDependsLoMoney(){
        double income = 1000;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        t.setAdjustedGrossIncome();
        double sgi = t.getAdjustedGrossIncome();
        assertEquals( 0, t.getAdjustedGrossIncome());
    }
    @Test
    void checkAdjGrossIncomelotsDependsMoney(){
        double income = 15000;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(10, income, "Single");
        t.setAdjustedGrossIncome();
        double sgi = t.getAdjustedGrossIncome();
        assertEquals( 0, t.getAdjustedGrossIncome());
    }
    @Test
    void checkAdjGrossIncome0DependsExactMoney(){
        double income = 12400.00;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        t.setAdjustedGrossIncome();
        assertEquals( 0, t.getAdjustedGrossIncome());
    }
    @Test
    void checkAdjGrossIncome0DependsLeftOverMoney(){
        double income = 12800.00;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        t.setAdjustedGrossIncome();
        assertEquals( 400, t.getAdjustedGrossIncome());
    }
    @Test
    void checkTooManyDependents(){
        double income = 12800.00;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(101, income, "Single");
        assertThrows(IllegalArgumentException.class, () -> t.setAdjustedGrossIncome());
    }
    @Test
    void checkTooFewDependents(){
        double income = 12800.00;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(-1, income, "Single");
        assertThrows(IllegalArgumentException.class, () -> t.setAdjustedGrossIncome());
    }
    @Test
    void checkWrondStatus(){
        double income = 12800.00;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(-1, income, "Married");
        assertThrows(IllegalArgumentException.class, () -> t.setAdjustedGrossIncome());
    }
    // ------------------------------------------------------------------
    @Test
    void checkActualTaxLowAmount(){
        double income = 10000;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        t.setAdjustedGrossIncome();
        double sgi = t.getAdjustedGrossIncome();
        assertEquals( 0, t.getTotalTaxOwed());
    }
    @Test
    void checkActualTaxB1(){
        double income = 15000;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        t.setAdjustedGrossIncome();
        System.out.printf("\n AGI=%s", t.getAdjustedGrossIncome());
        //double sgi = t.getAdjustedGrossIncome();
        assertEquals( 260, t.getTotalTaxOwed());
    }
    @Test
    void checkActualTaxB1NoTax(){
        double income = 22275;
        double stdDeduction = 12400.00;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        t.setAdjustedGrossIncome();
        System.out.printf("\n AGI=%s", t.getAdjustedGrossIncome());
        //double sgi = t.getAdjustedGrossIncome();
        double tax = (income - stdDeduction) * .1;
        System.out.printf("TT:tax:%s", tax);
        assertEquals( tax, t.getTotalTaxOwed());
    }
    @Test
    void checkActualTaxB1someTax(){
        double B1 = 9875;
        double R1 = .1;
        double stdDeduction = 12400.00;
        double income = stdDeduction + 9000;
        double B1Tax = (income  - stdDeduction) * .1;
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        assertEquals( B1Tax, t.getTotalTaxOwed());
    }
    @Test
    void checkActualTaxB2someTax(){
        double B2 = 85525;
        double R2 = .12;
        double stdDeduction = 12400.00;
        double income = stdDeduction + B2 + 1000;
        double B1Tax = ((income) * R2 );
        TaxCalc_HW_Sln t = new TaxCalc_HW_Sln(0, income, "Single");
        assertEquals( B1Tax, t.getTotalTaxOwed());
    }
   // ---------
   //double B1 = 9875;
    //double R1 = .1;
    //double B2 = 85525;
    //double R2 = .12;
    //double B3 = 207300;
    //double R3 = .24;
    //double R4 = .35;
}
