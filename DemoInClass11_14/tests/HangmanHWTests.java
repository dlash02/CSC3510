import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class HangmanHWTests {
    @Test
    void canCreateBasicClass(){
        ArrayList<String> inWords = new ArrayList<>();
        int nGuess = 7;
        HangmanHW hm = new HangmanHW( nGuess, inWords);
        assertEquals( 7, hm.getNGuess() );
    }
    @Test
    void canRandomlyPickFrom2(){
        int nGuess = 7;
        HangManGet2WordsImpl iw = new HangManGet2WordsImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW( nGuess, inWords);
        String w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        System.out.printf("\nw=%s", w);
        assertTrue( w.equals("apple") || w.equals("sauce"));
    }
    @Test
    void willNotPickSameWordTwice(){
        int nGuess = 7;
        HangManGet2WordsImpl iw = new HangManGet2WordsImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHWSln hm = new HangmanHWSln( nGuess, inWords);
        String w = hm.getUniqueWord();
        if ( w.equals("apple")) {
            System.out.printf("\nfl1:w:%s", w );
            w = hm.getUniqueWord();
            assertEquals("sauce", w );
        } else {
            System.out.printf("\nfl2:w:%s", w );
            w = hm.getUniqueWord();
            assertEquals("apple", w );
        }
    }
    @Test
    void canSetWordDisplayInitially() {
        int nGuess = 7;
        HangManGet2WordsImpl iw = new HangManGet2WordsImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHWSln hm = new HangmanHWSln(nGuess, inWords);
        String w = hm.getUniqueWord();
        System.out.printf("\nw:%s", w);
        w = hm.getCurrentWordDisplayString();
        assertEquals("*****", w );
    }
    @Test
    void canSetDisplayWord() {
        int nGuess = 7;
        HangManGet1WordImpl iw = new HangManGet1WordImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW(nGuess, inWords);
        String w = hm.getUniqueWord();
        //System.out.printf("\nW=%s", w);
        assertEquals("apple", w);
    }
    @Test
    void canSetNumberChanged() {
        int nGuess = 7;
        HangManGet1WordImpl iw = new HangManGet1WordImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW(nGuess, inWords);
        String w = hm.getUniqueWord();
        System.out.printf("\n w=%s", w);
        int c = hm.guessLetter('p');
        //System.out.printf("\nW=%s", w);
        assertEquals(c, 2);
    }
    @Test
    void cansetDisplayString() {
        int nGuess = 7;
        HangManGet1WordImpl iw = new HangManGet1WordImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW(nGuess, inWords);
        String w = hm.getUniqueWord();
        System.out.printf("\n w=%s", w);
        int c = hm.guessLetter('p');
        String ds = hm.getCurrentWordDisplayString();
        //System.out.printf("\nW=%s", w);
        assertEquals( "*pp**", ds );
    }
    @Test
    void cansetDisplayString2Guesses() {
        int nGuess = 7;
        HangManGet1WordImpl iw = new HangManGet1WordImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW(nGuess, inWords);
        String w = hm.getUniqueWord();
        System.out.printf("\n w=%s", w);
        int c = hm.guessLetter('p');
        c = hm.guessLetter('l');
        String ds = hm.getCurrentWordDisplayString();
        //System.out.printf("\nW=%s", w);
        assertEquals( "*ppl*", ds );
    }
    @Test
    void testGetMoreWordsThanOnTheLst(){
        int nGuess = 7;
        HangManGet2WordsImpl iw = new HangManGet2WordsImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW( nGuess, inWords);
        String w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        assertTrue( w.equals(""), "" );
    }
    @Test
    void canRandomlyPickFrom5(){
        int nGuess = 7;
        HangManGet5WordsImpl iw = new HangManGet5WordsImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW( nGuess, inWords);
        String w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        System.out.printf("\nw2=%s", w);
        assertTrue( w.equals("apple") || w.equals("baker") || w.equals("cake") ||
                w.equals("dog") || w.equals("egg"));
    }
    @Test
    void getNullWhenPick6from5(){
        int nGuess = 7;
        HangManGet5WordsImpl iw = new HangManGet5WordsImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW( nGuess, inWords);
        String w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        w = hm.getUniqueWord();
        assertTrue( w.equals("") );
    }
}

