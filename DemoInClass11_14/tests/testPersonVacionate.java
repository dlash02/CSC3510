import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

public class testPersonVacionate {
    // age >= 65 -> 1 and State  =IL
    // Job "Grocery", "First Responder", "Health Care" and IL, IO, IN -> Level 1
    // Job "Retail", "Cook", and IL -> Level 2
    //   int age;
    //    String job;
    //    String state;
    //         Rule1        Rule 2                        Rule 3
    //          age>=65     Level 1 Job "G, FR, HC"      Level 2 Job "C, R"
    //  Age     65           60                           50
    //  Level    1           1                            2
    //  Job      ""          "G"                         "R"
     //  OnList   Y           Y                           Y
    //
    @Test
    void CookLevel2IsTrue() {
        PersonVacinate pc = new PersonVacinate( "John", 22, "Cook", 2,  "IL" );
        assertTrue(pc.isOnList());
    }
    @Test
    void CookLevel1IsFalse() {
        PersonVacinate pc = new PersonVacinate( "John", 22, "Cook", 1,  "IL" );
        assertFalse(pc.isOnList());
    }
    @Test
    void age65IsOnList() {
        PersonVacinate pc = new PersonVacinate( "John", 65, "Cook", 2,  "IL" );
        assertTrue(pc.isOnList());
    }
    @Test
    void notStateRight() {
        PersonVacinate pc = new PersonVacinate( "John", 65, "Cook", 2,  "IO" );
         Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            pc.isOnList();
         });
    }

}

