class vacationDays {
    age = 0;
    years = 0;
    constructor( a, y){
        this.age = a;
        this.years = y;
    }
    checkValid( min, max, valToCheck ) {
        let ret = true;
        //  return true if valToCheck is between min and max (inclusively)
        //  return false if valToCheck is non-numeric or < min or > max
        return ret;
    }
    getVacationDays(){
       // Additional days are provided according to the following criteria:
       //     Employees with less than 5 years service receive 3 days of vcation
       //     Employees with 5 or more years service receive 5 extra days
       //     Employees with 12 or years service receive 5 extra days
       //     Employees with 16 or years service receive 2 extra days
       //     Employees with at least 30 years of service receive 3 more days of vacation
       //     In addition also employees of age 60 or more receive 3 more days of vacation regardless of
       //          the years experience
       //     age < 16 is illegal and should generate an exception
        let vacDays = 0;
        return vacDays;
    }
}
