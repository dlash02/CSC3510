public class Book {
   String title;
   int publishedYear;
   char  bookType; // R for Reference, F for Fiction, N for NonFiction

   public Book(String title, int publishedYear, char bookType) {
      this.title = title;
      this.publishedYear = publishedYear;
      this.bookType = bookType;
   }
   public String getTitle() { return title; }

   public void setTitle(String title) { this.title = title; }

   public int getPublishedYear() { return publishedYear; }

   public void setPublishedYear(int publishedYear) { this.publishedYear = publishedYear; }

   public char getBookType() { return bookType; }

   public void setBookType(char bookType) { this.bookType = bookType; }
}

