import java.util.HashMap;

public class driveHashMapReview {
    public static void main(String[] args) {
        // python -> dictionarys
        // JavaScript / PHP -> associative arrays
        // HashMaps -> Java, C#
        // Maps -> C++
        // Normal or seuqential array or index
        int[] myList = new int[14];
        myList[0] = 10;
        myList[1] = 10;

        // HashMaps -> use key ... each key has a value
        HashMap< String, Double> hm = new HashMap<>();
        hm.put( "Hammer", 12.99);
        hm.put( "Wrench", 2.99);
        hm.put( "Pizza", 16.99 );
        if ( hm.containsKey("Hammer")) {
            System.out.printf("\n yes we have hammers and they are %s", hm.get("Hammer"));
        } else {
            System.out.printf("\n sorry no hammers for you");
        }
        // Print out all the key values
        for( String key : hm.keySet()) {
            System.out.printf("\n Item:%s Value:%s", key, hm.get( key ));
        }


    }
}
