import java.util.ArrayList;
import java.util.HashMap;

public class PayrollWBonus {
    private ArrayList<Employee> employees;
    private HashMap<String, Double> salesPerDepart;
    private String bestDepart = "";

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
}
