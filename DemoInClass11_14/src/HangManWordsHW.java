public class HangManWordsHW {
    String word;
    int difficulty;
    public HangManWordsHW(String word, int difficulty) {
        this.word = word;
        this.difficulty = difficulty;
    }
    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public int getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }
}