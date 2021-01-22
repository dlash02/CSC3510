import com.sun.jdi.connect.IllegalConnectorArgumentsException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


public class AdderTest1 {
    @Test
    void checkAdderX(){
        // Checks for positive integers ok
        int x = 5;
        int y = 1;
        AddX a = new AddX( x );
        assertEquals( 5, a.getX());
    }
    @Test
    void checkAdderPosInts(){
        // Checks for positive integers ok
        int x = 5;
        int y = 1;
        Adder a = new Adder( x, y );
        assertEquals( 6, a.doAdd() );
    }
    @Test
    void checkZerosForInput() {
        int x = 0;
        int y = 0;
        Adder a = new Adder( x, y );
        assertEquals( 0, a.doAdd() );
    }
    @Test
    void checkFor1Arg() {
        int x = 0;
        int y;
        Adder a = new Adder( );
        //assertEquals( 0, a.doAdd());
        assertThrows(IllegalConnectorArgumentsException.class, () -> a.doAdd() );
    }
}
