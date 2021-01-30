import java.util.ArrayList;

public class HangManGet2WordsSameWordImpl implements HangManGetInputWords{
    @Override
    public ArrayList<String> getInputWords() {
        ArrayList<String> inWords = new ArrayList<String>();
        inWords.add("apple");
        inWords.add("apple");
        return inWords;
    }
}
