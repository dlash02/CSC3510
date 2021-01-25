import java.util.HashMap;

public class SalesByDeptImplPrep implements SalesByDepartmentPrepInterface {
    @Override
    public HashMap<String, Double> getSalesByDept() {
            HashMap<String, Double> sales = new HashMap<>();
            sales.put("001", 100000.00 );
            sales.put("002", 50000.00 );
            sales.put("003", 150000.00 );
            sales.put("004", 120000.00 );
        return sales;
        }
    }
