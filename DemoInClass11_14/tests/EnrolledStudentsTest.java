import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

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
        ArrayList<Double> grades = new ArrayList<>();
        String id = "007";
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
        assertTrue( Double.isNaN( gr ) );
        System.out.printf("\n gr:%s", gr);
    }
    // Add a method that returns A, B, C, D or F based on the percentage
    // 1. Write a test - make the test fail
    // 2. Write code to make it true
    // 3. refactor
    @Test
    void testForAGrade() {
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        grades.add(100.0);
        grades.add(90.0);
        grades.add(95.0);
        EnrolledStudent s = new EnrolledStudent("Pete", "RePete", id, grades);
        Double gr = s.getGradePercent();
        String letterGr = s.getLetterGrade();
        assertEquals( letterGr, "A");
    }
    @Test
    void testForBGrade() {
        // Test for "b" insside getLetterGrade();
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        grades.add(70.0);
        grades.add(80.0);
        grades.add(90.0);
        EnrolledStudent s = new EnrolledStudent("Pete", "RePete", id, grades);
        //Double gr = s.getGradePercent();
        // Add 2 -3 tests to ensure 80
        //ArrayList<Double> grade2 = new ArrayList<>();
        String letterGr = s.getLetterGrade();
        //assertEquals( letterGr, "B");
        //letterGr = s.getLetterGrade();
        assertEquals( letterGr, "B");
    }
    @Test
    void testForCGrade() {
        String id = "007";
        ArrayList<Double> grades = new ArrayList<>();
        grades.add(70.0);
        grades.add(75.0);
        grades.add(65.0);
        EnrolledStudent s = new EnrolledStudent("Pete", "RePete", id, grades);
        String letterGr = s.getLetterGrade();
        assertEquals( letterGr, "C");
    }

}
