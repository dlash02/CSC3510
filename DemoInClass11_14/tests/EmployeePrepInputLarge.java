import java.util.ArrayList;

public class EmployeePrepInputLarge implements EmployeeInterfacePrep {
    @Override
    public ArrayList<EmployeePrep> employeeInputFromDB() {
        ArrayList<EmployeePrep> emp = new ArrayList<EmployeePrep>();
        emp.add( new EmployeePrep("007", "Manager","001", 50000 ));
        emp.add( new EmployeePrep("008", "Manager","001", 50000 ));
        emp.add( new EmployeePrep("009", "Employee","001", 50000 ));
        emp.add( new EmployeePrep("010", "Employee","002", 50000 ));
        emp.add( new EmployeePrep("011", "Employee","002", 50000 ));
        emp.add( new EmployeePrep("012", "Employee","002", 50000 ));
        emp.add( new EmployeePrep("013", "Employee","003", 50000 ));
        emp.add( new EmployeePrep("014", "Employee","003", 50000 ));
        emp.add( new EmployeePrep("015", "Employee","003", 50000 ));
        return emp;
    }
}
