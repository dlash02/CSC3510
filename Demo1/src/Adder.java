public class Adder {
    int x;
    int y;

    public Adder(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public boolean getNum(  ){
        if ( x % 2 == 0 ){
            return true;
        }
        return false;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }
}
