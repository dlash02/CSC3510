import java.util.*;

public class HangmanHW {
    private int nGuess=7; // The number of wrong guesses (default 7 )
    private ArrayList<String> inputWords; // Input list of valid words
    private String targetWord; // Word trying to be guessed in the current game
    private HashSet<String> usedWords = new HashSet<>();  // Current usedWords of past games
    private String currentWord; // this is the current word trying to be guessed (E.g., fishbowl );
    private String currentWordDisplayString; // This is the current word that is displayed during the game
                                     // E.g., *is*b*wl as the player is guessing it.
    public HangmanHW(int nGuess, ArrayList<String> inputWords ){
        this.nGuess = nGuess;
        this.inputWords = inputWords;
    }
    public int getNGuess( ) {
        return nGuess;
    }
    public void setUniqueWord( ) {
        //  description: go through the inputWords and return one that has not been used before
        //
        // class properties:
        //    inputWords - an arrayList of valid HangMan words
        //  for example, if
        //  inputWords are
        //        Banana, Paper, Scissors, Rock, Pattern, notebook, simple, salesdate
        //  usedWords are
        //        Banana, Paper, Scissors, Rock, Pattern
        // Then Sets
        //       currentWord to either notebook, simple, salesdate ranomly
        // and updated usedWords
        currentWord = "";
        boolean doNoHaveWord = true;
        int s = inputWords.size();
        if ( usedWords.size() == inputWords.size()) {
            currentWord = "";
        } else {
            Random r = new Random();
            while ( doNoHaveWord == true ) {
                int rn = r.nextInt(s);
                String w = inputWords.get( rn );
                if ( usedWords.contains(w)){
                    continue;
                }
                usedWords.add( w );
                currentWord = w;
                setInitialCurrentWordDisplay();
                break;
            }
        }
    }
    public void guessLetter( char guess  ) {
        if ( currentWordDisplayString.indexOf( guess) > 0  ){

        }
    }
    public void setInitialCurrentWordDisplay( ) {
        int sz = currentWord.length();
        currentWordDisplayString = "";
        for( int i=0; i<sz; i++ ){
            currentWordDisplayString += "*";
        }
    }
    public String getInitialCurrentWordDisplay( ) {
        setInitialCurrentWordDisplay();
        return currentWordDisplayString;
    }
    public String getUniqueWord( ){
        setUniqueWord();
        // Returns the current word

        return currentWord;
    }
    public String guessLetterInWord( char guessLetter ) {
        // method looks through the current targetWord and sets currentString
        // method returns:
        //   currentString unaltered if guessLetter does not occur in targetWord
        //   currentString with guessLetter reveals if guessLetter is in
        //   it also sets
        return "";
    }

}