import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AdderTest {
    @Test
    void testAdd(){
        Adder a = new Adder( 4, 3 );
        assertEquals( 7, a.addIt() );
    }
}
