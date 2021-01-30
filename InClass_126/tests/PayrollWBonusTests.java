import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PayrollWBonusTests {
    @Test
    void testCanFindBestDepartWithSmallRecords(){
        SalesPerDepartFor3RecordsImpl s = new SalesPerDepartFor3RecordsImpl();
        HashMap<String, Double> sales = s.getSalesPerDept();
        ArrayList<Employee>  e = new ArrayList<>();
        //(String id, String jobLevel, String deptId, double salary
        e.add( new Employee( "01", "M", "001", 100000));

        PayrollWBonus p = new PayrollWBonus( e, sales);
        p.setBestDepart();
        assertEquals( "102", p.getBestDepart());
    }
    @Test
    void testCanFindBestDepartWithNegativeSalesData(){
        SalesPerDepartNegRecordImpl s = new SalesPerDepartNegRecordImpl();
        HashMap<String, Double> sales = s.getSalesPerDept();
        ArrayList<Employee>  e = new ArrayList<>();
        //(String id, String jobLevel, String deptId, double salary
        e.add( new Employee( "01", "M", "001", 100000));

        PayrollWBonus p = new PayrollWBonus( e, sales);
        p.setBestDepart();
        assertEquals( "", p.getBestDepart());
    }
    @Test
    void testCanFindBestDepartWithEmptySalesData(){
        // No sales data or sales data is nnull
        HashMap<String, Double> sales = new HashMap<>();
        ArrayList<Employee>  e = new ArrayList<>();
        //(String id, String jobLevel, String deptId, double salary
        e.add( new Employee( "01", "M", "001", 100000));

        PayrollWBonus p = new PayrollWBonus( e, sales);
        p.setBestDepart();
        assertEquals( "", p.getBestDepart());
    }
    @Test
    void testItendifyEmployeeInBestDepart(){
        // use 3 SalesPerDpetData
        SalesPerDepartFor3RecordsImpl s = new SalesPerDepartFor3RecordsImpl();
        HashMap<String, Double> sales = s.getSalesPerDept();
        EmployeeImpl3Records e   = new EmployeeImpl3Records();

        ArrayList<Employee> employees = e.getEmployeeFromDB();
        PayrollWBonus p = new PayrollWBonus( employees, sales);
        p.setBestDepart();
        int ct = 0;
        for( Employee emp : employees ){
            if ( p.inBestDepart(emp)) {
                ct += 1;
            }
        }
        assertEquals( 2 , ct );
    }
    @Test
    void verifyCanSetEmployeePayRollAndGetNonBonus(){
        //public HashMap<String, Double> getPayroll() {
        // use 3 SalesPerDpetData
        SalesPerDepartFor3RecordsImpl s = new SalesPerDepartFor3RecordsImpl();
        HashMap<String, Double> sales = s.getSalesPerDept();
        EmployeeImpl3Records e   = new EmployeeImpl3Records();

        ArrayList<Employee> employees = e.getEmployeeFromDB();
        PayrollWBonus p = new PayrollWBonus( employees, sales);
        p.setBestDepart();
        HashMap<String,Double> pr = p.getPayroll();
        Double e01Pay = pr.get("01");
        assertEquals(  8333.33, e01Pay, .01 );
    }
    @Test
    void verifyCanSetEmployeePayRollAndSetBonusProperly() {
        //public HashMap<String, Double> getPayroll() {
        // use 3 SalesPerDpetData
        SalesPerDepartFor3RecordsImpl s = new SalesPerDepartFor3RecordsImpl();
        HashMap<String, Double> sales = s.getSalesPerDept();
        EmployeeImpl3Records e   = new EmployeeImpl3Records();

        ArrayList<Employee> employees = e.getEmployeeFromDB();
        PayrollWBonus p = new PayrollWBonus( employees, sales);
        p.setBestDepart();
        HashMap<String,Double> pr = p.getPayroll();
        Double e01Pay = pr.get("02");
        assertEquals(  9333.33, e01Pay, .01 );
    }
    @Test
    void verifyCanSetEmployeePayRollAndSetBonusProperlyNonManager() {
        //public HashMap<String, Double> getPayroll() {
        // use 3 SalesPerDpetData
        SalesPerDepartFor3RecordsImpl s = new SalesPerDepartFor3RecordsImpl();
        HashMap<String, Double> sales = s.getSalesPerDept();
        EmployeeImpl3Records e   = new EmployeeImpl3Records();

        ArrayList<Employee> employees = e.getEmployeeFromDB();
        PayrollWBonus p = new PayrollWBonus( employees, sales);
        p.setBestDepart();
        HashMap<String,Double> pr = p.getPayroll();
        Double e03Pay = pr.get("03");
        assertEquals(  8833.33, e03Pay, .01 );
    }
}
