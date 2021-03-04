import java.util.ArrayList;

public class PersonVacinate {
    // age >= 65 -> 1 and State  =IL
    // Job "Grocery", "First Responder", "Health Care" and IL, IO, IN -> Level 1
    // Job "Retail", "Cook", and IL -> Level 2
    String personName;
    int age;
    int level;
    String state;
    String job;

    public PersonVacinate( String personName, int age, String job, int level, String state ) {
        this.personName = personName;
        this.age = age;
        this.job = job;
        this.level = level;
        this.state = state;
    }
    public Boolean isOnList( ){
        // State must be IL ... does not work for any other state residence
        //     if not illinois, then throw illegalArgumentException
        // if person is 65 or older they are automatically eleigible for testing (return true)
        // if person has a job of "Grocery", "Health Care" or "First Responder" and level=1 return true;
        //
        //  if person has job of "Retail",  or "Cook" and level=2 then return true;
        // However if age is < 16 they are not elegible for level 1 or level 2 testing regardless of what
        //      job they indicated (return false)

            if ( state.equals("IL")) {
                if ( this.age >= 65) {
                    return true;
                }
                if ( this.level == 1   && ( job.equals("Grocery")  ||
                             job.equals("Health Care")  || job.equals("First Responder")  ) ) {
                         if ( this.age <= 16) return false;
                         else return true;
                    } else if ( level == 2  && ( job.equals("Retail")  || job.equals("Cook") ) ) {
                          if ( this.age <= 16) return false;
                          else return true;
                     }
            } else {
                throw new IllegalArgumentException("Error:" + state + " is not valid");
            }

            return false;
      }
}
