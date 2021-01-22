import java.util.ArrayList;

public class EnrolledStudent {
   private String  fName; // Encapsulation of properties
   private String  lName;
   private String  id;
   private ArrayList<Double> scores;

   public EnrolledStudent(String fName, String lName, String id, ArrayList<Double> scores) {
      this.fName = fName;
      this.lName = lName;
      this.id = id;
      this.scores = scores;
   }
   public Double getGradePercent(){
      Double aver = 0.0;
      Double sum = 0.0;
      for ( Double score : scores ) {
         sum += score;
      }
      aver = sum / scores.size();
      System.out.printf("\n FL1: Aver:%s", aver );
      if ( aver < 0 || aver > 100 ){
         throw new IllegalArgumentException("Percentage Must be betwee 0-100");
      }
      return aver;
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

   public ArrayList<Double> getScores() {
      return scores;
   }

   public void setScores(ArrayList<Double> scores) {
      this.scores = scores;
   }

   public String getLetterGrade() {
       double aver = getGradePercent();
      String retGr = "F";
      if ( aver >= 90 ) {
          retGr = "A";
       } else if ( aver >= 80 ) {
         retGr = "B";
      }  else if ( aver >= 70 ) {
         retGr = "C";
      }   else if ( aver >= 60 ) {
        retGr = "D";
      }
      return retGr;
   }
}
