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
    void canSetWordDisplayInitially() {
        int nGuess = 7;
        HangManGet2WordsImpl iw = new HangManGet2WordsImpl();
        ArrayList<String> inWords = iw.getInputWords();
        HangmanHW hm = new HangmanHW(nGuess, inWords);
        String w = hm.getUniqueWord();
        w = hm.getUniqueWord();
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

