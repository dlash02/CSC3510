import java.util.ArrayList;

public class BookCheckOut {
    ArrayList<Book> checkOutBooks;
    int patronId;
    int dueDays = 0;
    int reserveDays = 0;

    public BookCheckOut(ArrayList<Book> checkOutBooks, int patronId) {
        this.checkOutBooks = checkOutBooks;
        this.patronId = patronId;
    }

    public ArrayList<Book> getCheckOut() {
        return checkOutBooks;
    }

    public void setCheckOut(ArrayList<Book> checkOut) {
        this.checkOutBooks = checkOut;
    }

    public int getPatronId() {
        return patronId;
    }

    public void setPatronId(int patronId) {
        this.patronId = patronId;
    }
    public void setDueDate(){
        for ( Book b : checkOutBooks){
           if ( b.bookType == 'R') {
               reserveDays = 0;
           } else if ( b.bookType == 'F'){
               reserveDays = 14;
           }  else if ( b.bookType == 'N'){
            reserveDays = 14;
           }
        }
    }
    public int getDueDate(){
        return reserveDays;
    }
}
