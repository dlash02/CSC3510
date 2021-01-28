import java.util.HashMap;

public class SalesPerDepartNegRecordImpl implements SalesPerDeptInterface{
    @Override
    public HashMap<String, Double> getSalesPerDept() {
        HashMap<String, Double> salesPerDept = new HashMap<>();
        salesPerDept.put("101", -5.00);
        salesPerDept.put("102", -1.00);
        salesPerDept.put("103", -50000.00);
        return salesPerDept;
    }
}
