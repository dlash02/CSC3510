import java.util.ArrayList;
import java.util.Scanner;

public class driveHangManHWSln {
        public static void main(String[] args) {

        HangManGetInputWords inW = new HangMainGetGameProductionData();
        ArrayList<String> inWords = inW.getInputWords();
        HangmanHWSln hm = new HangmanHWSln( 7, inWords);
        String word = hm.getUniqueWord();
        String displayWord = hm.getCurrentWordDisplayString();
        System.out.printf("\n--- Starting DIsplay word->%s nGuesses=%s", displayWord, hm.getNGuess());

        boolean playingThisGame = true;
        while ( playingThisGame == true) {
            char letter = askQuestion( "Guess a letter-> ", displayWord);
                int res = hm.guessLetter( letter );
                int nGuess = hm.getnGuess();
                if ( res == -1 ) {
                    System.out.printf("\nNope not there res=%s displayword:%s nGuess=%s", res, displayWord, nGuess );
                } else {
                   System.out.printf("\nFound it res=%s nGuess=%s", res, displayWord, nGuess );
                }
                displayWord = hm.getCurrentWordDisplayString();
                if ( nGuess == 0 ) {
                    System.out.printf("\n Sorry... Game over displayWord:%s Out of guesses:%s", displayWord, nGuess);
                }
               if ( displayWord.indexOf( '*' )  == -1   ) {
                   System.out.printf("\n Fantasic you got displayWord:%s with nGuess:%s left", displayWord, nGuess );
               }
        }
    }
    private static char askQuestion(String question, String displayWord) {
        Scanner s = new Scanner(System.in);
        System.out.printf("\n %s", question);
        String str = s.next();
        return str.charAt(0);
   }

}
