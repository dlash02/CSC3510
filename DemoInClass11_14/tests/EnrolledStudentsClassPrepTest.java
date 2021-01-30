
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.ArrayList;

class EnrolledStudentsClassPrepTest {

    @Test
    void testObjectCreate() {
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        //EnrolledStudentClassPrep(String fName, String lName, String id, ArrayList<Double> grades) {
         EnrolledStudentClassPrep s = new EnrolledStudentClassPrep("Pete", "Repete", id, grades );
         assertEquals("Pete", s.getfName());
    }

}
