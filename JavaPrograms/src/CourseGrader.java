import java.util.ArrayList;

public class CourseGrader {
    String name;
    ArrayList<Integer> HW;

    public CourseGrader(String name, ArrayList<Integer> HW) {
        this.name = name;
        this.HW = HW;
    }
    public Double getAverage() {
        Double sum = 0.0;
        int ct = 0;
        for( int hw : HW ){
            sum += hw;
            ct += 1;
        }
        if ( ct == 0 ) return 0.0;
            //else return sum / ct * 100;
        else return sum / ct ;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Integer> getHW() {
        return HW;
    }

    public void setHW(ArrayList<Integer> HW) {
        this.HW = HW;
    }
}
