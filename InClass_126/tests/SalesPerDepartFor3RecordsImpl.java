import java.util.HashMap;

public class SalesPerDepartFor3RecordsImpl implements SalesPerDeptInterface {
    @Override
    public HashMap<String, Double> getSalesPerDept() {
        HashMap<String, Double> salesPerDept = new HashMap<>();
        salesPerDept.put("101", 500000.00);
        salesPerDept.put("102", 500001.00);
        salesPerDept.put("103", 50000.00);
        return salesPerDept;
    }
}
