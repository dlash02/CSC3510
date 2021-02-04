import java.util.ArrayList;

class HangMainGetGameProductionData implements HangManGetInputWords {
    @Override
    public ArrayList<String> getInputWords() {
        ArrayList<String> inWords = new ArrayList<>();
        inWords.add("apple");
        inWords.add("baker");
        inWords.add("charlie");
        inWords.add("dog");
        inWords.add("fox");
        inWords.add("green");
        return inWords;
    }
}
