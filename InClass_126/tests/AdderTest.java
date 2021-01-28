import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AdderTest {
    @Test
    void testCanAdd2Numbers(){
        Adder a = new Adder( 5, 6);
        assertEquals( 11, a.doAdd());
    }
}
