import java.util.HashMap;

public interface SalesPerDeptInterface {
    // The keys (or index are deptId and value total sales for Dept
    HashMap<String,Double>  getSalesPerDept();
}
