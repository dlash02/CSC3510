import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AdderTest {

    @Test
    void getAdder(){
        Adder a = new Adder( 5, 10 );
        assertEquals( 15, a.addIt());
    }
}