public class AdderDriveTest {
    public static void main(String[] args) {
        int x=5;
        int y=6;
        Adder a = new Adder(x, y );
        if ( a.doAdd() == 11 ) {
            System.out.printf("\n T1: TEST PASSED x=%s y=%s pass", x, y);
        } else {
            System.out.printf("\n T1: TEST FAILED T1: x=%s y=%s pass", x, y);

        }
        x=0;
        y=0;
       a.setX( x );
       a.setY( y );
       if ( a.doAdd() == 0 ) {
            System.out.printf("\n T2: TEST PASSED x=%s y=%s pass", x, y);
        } else {
            System.out.printf("\n T2: TEST FAILED T1: x=%s y=%s pass", x, y);

        }
    }
}
