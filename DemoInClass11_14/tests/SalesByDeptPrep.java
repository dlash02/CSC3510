import java.util.HashMap;

public class SalesByDeptPrep implements  SalesByDeptInterface{
    public HashMap<String, Double> getSalesByDept() {
        HashMap<String, Double> sales = new HashMap<>();
        sales.put("101", 100000.00 );
        sales.put("102", 50000.00 );
        return sales;
    }
}
