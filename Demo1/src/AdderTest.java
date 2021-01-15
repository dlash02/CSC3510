import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AdderTest {
    @Test
    public void checkWorks(){
        Adder a = new Adder( 5 , 6);
        Boolean res =  a.getNum();
        //assertEquals( res, true );
        assertFalse( res );


    }

}
