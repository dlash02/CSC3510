import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class HangmanHW {
    int nGuess=7;
    ArrayList<HangManWordsHW> inputWords;
    String targetWord; // This is the word trying to be guessed
    String currentString; // This is the current String of the game
    // (E.g,. for the word apple it would be set to ***** after guessing 'p' it would *pp**)
    Set<String> usedWords;

    public HangmanHW(int nGuess, ArrayList<HangManWordsHW> inputWords ){
        this.nGuess = nGuess;
        this.inputWords = inputWords;
    }
    public String getUniqueWord( int inputDifficult ){
        // This method must go through the inputWords and return one that has not been used for the
        // level of difficulty
        //  for example, if inputDifficult = 1 and the inputWords are the following
        //    Banana 1
        //    Paper  1
        //    Scissors  1
        //    pattern  1
        //    notebook  2
        //    simple  2
        //    salesdate  2
        // Then the method wold return any random word with difficulty 1 that has not been used already
        //  (that is not in usedWords);
        return "";
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