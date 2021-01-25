import java.util.ArrayList;
import java.util.HashMap;

public class PayrollPrep {
    HashMap<String,Double> salesByDept;
    ArrayList<EmployeePrep> employees;

    public PayrollPrep(HashMap<String, Double> salesByDept, ArrayList<EmployeePrep> employees) {
        this.salesByDept = salesByDept;
        this.employees = employees;
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
}
