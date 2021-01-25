import java.util.ArrayList;

public class EmployeePrepInput implements EmployeeInterfacePrep {
    @Override
    public ArrayList<EmployeePrep> employeeInputFromDB() {
        ArrayList<EmployeePrep> emp = new ArrayList<EmployeePrep>();
        emp.add( new EmployeePrep("007", "Manager","001", 50000 ));
        emp.add( new EmployeePrep("008", "Manager","001", 50000 ));
        emp.add( new EmployeePrep("009", "Employee","003", 50000 ));
        return emp;
    }
}
