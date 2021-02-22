// Every employee receives at least 7 days vacation.
// Additional days are provided according to the following criteria:
//     Employees with less than 5 years service receive 3 days of vcation
//     Employees with 5 or more years service receive 5 extra days
//     Employees with 12 or years service receive 5 extra days
//     Employees with 16 or years service receive 2 extra days
//     Employees with at least 30 years of service receive 3 more days of vacation
//     In addition also employees of age 60 or more receive 3 more days of vacation regardless of
//          the years experience

class payRow {
   // number Hour
    age = 0;
    years = 0;
    constructor( age, years ) {
        this.age = age;
        this.years = years;
    }
    setVacationDays( ){
        return 1;

    }
}