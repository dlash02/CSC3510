import java.util.HashMap;

public class SalesByDeptEmptyImpPrep implements SalesByDepartmentPrepInterface{
    @Override
    public HashMap<String, Double> getSalesByDept() {
        HashMap<String, Double> sales  = new HashMap<>();
        return sales;
    }
}
