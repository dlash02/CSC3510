import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class EnrolledStudentsTest {
    @Test
    void testObjectCreate(){
        // Test that we can successully create an object
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        EnrolledStudent s = new EnrolledStudent( "Pete", "RePete", id, grades);
        assertEquals( "Pete", s.getfName());
    }
    @Test
    void testNormalGradeCalc(){
        // Test will ensure scores of 80, 85, 90 => 85%
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        grades.add( 80.0 );
        grades.add( 85.0 );
        grades.add( 90.0 );
        EnrolledStudent s = new EnrolledStudent( "Pete", "RePete", id, grades);
        assertEquals( 85.0, s.getGradePercent(), .01 );
    }
    @Test
    void testFractionGradeCalc(){
        // Test will ensure scores of 99 99, 100 => 99.33
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        grades.add( 99.0 );
        grades.add( 99.0 );
        grades.add( 100.0 );
        EnrolledStudent s = new EnrolledStudent( "Pete", "RePete", id, grades);
        assertEquals( 99.33, s.getGradePercent(), .01 );
    }
    @Test
    void testBadAverForGradeCalc(){
        // Test will ensure scores of 100, 200, 300
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        grades.add( 100.0 );
        grades.add( 200.0 );
        grades.add( 300.0 );
        EnrolledStudent s = new EnrolledStudent( "Pete", "RePete", id, grades);
        //assertEquals( 200, s.getGradePercent(), .01 );
        assertThrows( IllegalArgumentException.class,
                            () -> s.getGradePercent());
    }
    @Test
    void testForNoInputGradeAndCallGradePercent() {
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        EnrolledStudent s = new EnrolledStudent("Pete", "RePete", id, grades);
        Double gr = s.getGradePercent();
        System.out.printf("\n gr:%s", gr);
    }
}
