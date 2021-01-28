public class Employee {
    //Where each employee has an Id, Joblevel  (either Manager or Employee )
    //a departID and Salary Per year
    private String id;
    private String jobLevel; //E.g., M or E
    private String deptId;
    private double salary;

    public Employee(String id, String jobLevel, String deptId, double salary) {
        this.id = id;
        this.jobLevel = jobLevel;
        this.deptId = deptId;
        this.salary = salary;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJobLevel() {
        return jobLevel;
    }

    public void setJobLevel(String jobLevel) {
        this.jobLevel = jobLevel;
    }

    public String getDeptId() {
        return deptId;
    }

    public void setDeptId(String deptId) {
        this.deptId = deptId;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}
