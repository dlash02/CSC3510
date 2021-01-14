import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AdderTest {
    @Test
    public void getAdd(){
        Adder a = new Adder( 5, 2);
        assertEquals( 7, a.getSum());
    }

}
