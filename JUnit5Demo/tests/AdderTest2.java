import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AdderTest2 {
    @Test
    void getAdder(){
        Adder a = new Adder( 5, 10 );
        assertEquals( 15, a.addIt());
        assertEquals( 25, a.addIt());
    }

}
