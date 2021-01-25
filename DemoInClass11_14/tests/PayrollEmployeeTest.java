import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PayrollEmployeeTest {
    @Test
    void checkCanCreateEmployee(){
        //String employId, String jobTitle, String deptID, double salary) {
        EmployeePrep ep = new EmployeePrep( "007", "Manager", "101", 100000);
        //String id = ep.getDeptID();
        assertEquals( "007", ep.getEmployId());
    }
    void checkCanCreateEmployeesUsingInterface(){
        //String employId, String jobTitle, String deptID, double salary) {
        EmployeeInterfacePrep empIn  = new EmployeePrepInput();
        ArrayList<EmployeePrep>  employees = empIn.employeeInputFromDB();
        int sz = employees.size();
        //String id = ep.getDeptID();
        assertEquals( 3, sz );
    }
    @Test
    void checkCanCreateEmployeeLarge(){
        //String employId, String jobTitle, String deptID, double salary) {
        EmployeeInterfacePrep ep = new EmployeePrepInputLarge();
        ArrayList<EmployeePrep>  employees = ep.employeeInputFromDB();
        int sz = employees.size();
        //String id = ep.getDeptID();
        assertEquals( 9, sz );
    }
    @Test
    void canCreateSalesUsingInterface(){
        SalesByDeptInterface s = new SalesByDeptPrep();
        HashMap<String,Double> sales = s.getSalesByDept();
        double s101 = sales.get("101");
        assertEquals( 100000.00, s101 );
    }
    @Test
    void canCreateSalesData(){
        EmployeeInterfacePrep empIn  = new EmployeePrepInput();
        ArrayList<EmployeePrep>  employees = empIn.employeeInputFromDB();

        SalesByDeptInterface s = new SalesByDeptPrep();
        HashMap<String,Double> sales = s.getSalesByDept();

        PayrollPrep pp = new PayrollPrep( sales, employees );
        int sz = pp.getEmployees().size();
        assertEquals( 3, sz );
    }
  }
