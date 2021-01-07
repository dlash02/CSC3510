import java.util.ArrayList;
import java.util.Arrays;

public class DriveCourseGrader {
    public static void main(String[] args) {
        String course = "CSC3510";
        ArrayList<Integer> grades = new ArrayList<>(
                Arrays.asList( 100, 90, 95 )
        );
        CourseGrader c = new CourseGrader( course,  grades);
        double aver = c.getAverage();
        System.out.printf("\n Aver:%s" , aver);
    }
}
