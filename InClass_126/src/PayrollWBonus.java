import java.util.ArrayList;
import java.util.HashMap;

public class PayrollWBonus {
    private ArrayList<Employee> employees;
    private HashMap<String, Double> salesPerDepart;
    private String bestDepart = "";
    private HashMap<String,Double> payForEmployee;

    public PayrollWBonus(ArrayList<Employee> employees, HashMap<String, Double> salesPerDepart) {
        this.employees = employees;
        this.salesPerDepart = salesPerDepart;
    }
    public void setBestDepart(){
        //find the department with the highest sales and set bestDept
        // Go through salesPerDepart and find the 1 with the most sales
        // If all are negatie set to ""
        this.bestDepart = "";
        double bestSales = 0;
        for( String dept : salesPerDepart.keySet()){
            Double sales =  salesPerDepart.get(dept);
            if ( sales > bestSales) {
                bestSales = sales;
                bestDepart = dept;
            }
        }
    }

    public String getBestDepart() {
        return bestDepart;
    }
    public boolean inBestDepart( Employee e ) {
        if ( e.getDeptId().equals(bestDepart)) {
            return true;
        } else {
            return false;
        }
    }
    public void setPayroll() {
        // Go through all employees and decide their actual y owed for month
        //    HashMap< String, Double> payyR -> String EMployeeID Double Amount owed
        payForEmployee = new HashMap<>();
        //payForEmployee.put("01", 8333.33);
        for( Employee e : employees ) {
            String id = e.getId();
            if ( inBestDepart( e)) {
                String lvl = e.getJobLevel();
                // do bonus stuff
                //System.out.printf("\n INSIDE BEST eId:%s", e.getId());
                Double sal = e.getSalary()/12.0;
                if ( lvl.equals("M")) {
                    sal += 1000;
                } else if ( lvl.equals("E")) {
                    sal += 500;
                }  else {
                        System.out.printf("\n throw exception");
                }

                payForEmployee.put(id, sal );
            } else {
                Double sal = e.getSalary()/12.0;
                payForEmployee.put(id, sal );
            }
        }
    }
    public HashMap<String, Double> getPayroll() {
        setPayroll();
        return payForEmployee;
    }
}
