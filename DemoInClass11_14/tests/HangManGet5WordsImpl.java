import java.util.ArrayList;

public class HangManGet5WordsImpl implements HangManGetInputWords{
    @Override
    public ArrayList<String> getInputWords() {
        ArrayList<String> inWords = new ArrayList<String>();
        inWords.add("apple");
        inWords.add("baker");
        inWords.add("cake");
        inWords.add("dog");
        inWords.add("egg");
        return inWords;
    }
}
