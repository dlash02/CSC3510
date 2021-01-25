import java.util.ArrayList;
import java.util.HashMap;

public class PayrollPrep {
    HashMap<String,Double> salesByDept;
    ArrayList<EmployeePrep> employees;
    HashMap<String ,Double> byEmployeePayroll;


    public PayrollPrep(HashMap<String, Double> salesByDept, ArrayList<EmployeePrep> employees) {
        this.salesByDept = salesByDept;
        this.employees = employees;
        byEmployeePayroll = new HashMap<String ,Double>();
    }

    public HashMap<String, Double> getSalesByDept() {
        return salesByDept;
    }

    public void setSalesByDept(HashMap<String, Double> salesByDept) {
        this.salesByDept = salesByDept;
    }

    public ArrayList<EmployeePrep> getEmployees() {
        return employees;
    }

    public void setEmployees(ArrayList<EmployeePrep> employees) {
        this.employees = employees;
    }
    public String getBestDepartment(){
        Double Best = 0.0;
        String  BestDept = "";
        for( String s : salesByDept.keySet()) {
            //LEft off
            double current = salesByDept.get(s);
            if ( current > Best )  {
                Best = current;
                BestDept = s;
            }
        }
        return BestDept;
    }

    public HashMap<String, Double> getSalaryPerEmployee() {
        setSalaryPerEmployee();
        return byEmployeePayroll;
    }

    private void setSalaryPerEmployee() {
        //ArrayList<EmployeePrep> employees;
        String best = getBestDepartment();
        System.out.printf("\n Best:%s", best);
        for( EmployeePrep e : employees ) {
           String dept = e.getDeptID();
            String id = e.getEmployId();

           if ( dept.equals( best )  ) {
               byEmployeePayroll.put( id, 10000.00 );
               System.out.printf("\n Best One:%s dept:%s", id, dept );
           } else {
               System.out.printf("\n not Best :%s dept:%s", id, dept );
            }
        }
    }
}
