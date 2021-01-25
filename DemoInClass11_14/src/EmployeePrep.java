public class EmployeePrep {
    private String employId;
    private String jobTitle;
    private String deptID;
    private double salary;

    public EmployeePrep(String employId, String jobTitle, String deptID, double salary) {
        this.employId = employId;
        this.jobTitle = jobTitle;
        this.deptID = deptID;
        this.salary = salary;
    }

    public String getEmployId() {
        return employId;
    }

    public void setEmployId(String employId) {
        this.employId = employId;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getDeptID() {
        return deptID;
    }

    public void setDeptID(String deptID) {
        this.deptID = deptID;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}
