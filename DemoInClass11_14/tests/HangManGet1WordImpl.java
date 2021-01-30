import java.util.ArrayList;

public class HangManGet1WordImpl implements HangManGetInputWords{
    @Override
    public ArrayList<String> getInputWords() {
        ArrayList<String> inWords = new ArrayList<String>();
        inWords.add("apple");
        return inWords;
    }
}
