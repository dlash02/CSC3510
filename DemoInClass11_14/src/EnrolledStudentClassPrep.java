import java.util.ArrayList;

public class EnrolledStudentClassPrep {
    String fName;
    String lName;
    String id;
    ArrayList<Double> grades;

    public EnrolledStudentClassPrep(String fName, String lName, String id, ArrayList<Double> grades) {
        this.fName = fName;
        this.lName = lName;
        this.id = id;
        this.grades = grades;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ArrayList<Double> getGrades() {
        return grades;
    }

    public void setGrades(ArrayList<Double> grades) {
        this.grades = grades;
    }

    public double  getGradePercent( ) {
        double percentage = 0.0;
        double sum = 0.0;
        for( double gr : grades) {
            sum += gr;
        }
       double aver = sum/grades.size();
        if ( aver < 0 || aver > 100 ){
            throw new IllegalArgumentException("Percentage must be between 0 - 100");
        }
        return aver;
    }
    public boolean isPassing(){
        String lGr = getLetterGrade();
        if ( lGr.equals("F") || lGr.equals("D")){
            return false;
        }
        return true;
    }

    private String getLetterGrade() {
        String lGr = "F";
        double aver = getGradePercent();
        if( aver >= 90 ) lGr = "A";
        else if( aver >= 80 ) lGr = "B";
        else if( aver >= 70 ) lGr = "C";
        else if( aver >= 60 ) lGr = "D";
        return lGr;

    }
}
