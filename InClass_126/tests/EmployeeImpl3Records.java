import java.util.ArrayList;

public class EmployeeImpl3Records implements EmployeeInterface{
    @Override
    public ArrayList<Employee> getEmployeeFromDB() {
        ArrayList<Employee>  e = new ArrayList<>();
        //(String id, String jobLevel, String deptId, double salary
        e.add( new Employee( "01", "M", "101", 100000));
        e.add( new Employee( "02", "M", "102", 100000));
        e.add( new Employee( "03", "E", "102", 100000));
        return e;
    }
}
