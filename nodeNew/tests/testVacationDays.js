describe('vaction Days', function() {
    context( "Vacation days ", function() {
        it( "Should be handle LT 5 years and < 60", function(){
            //let res = checkSalary( -1 );
            //chai.assert.equal( res.errorFlag, true );
            let age = 16;
            let year = 1;
            let vd = new vacationDays( age, year );
            let d = vd.getVacationDays();
            //chai.assert( g.gradesOK(), true);
            chai.assert.equal(d, 5);
        });
        it( "Should be handle LT 5 years and >= 60", function(){
            let age = 60;
            let year = 1;
            let vd = new vacationDays( age, year );
            let d = vd.getVacationDays();
            //chai.assert( g.gradesOK(), true);
            chai.assert.equal(d, 8);
        });
        it( "Should be handle 5 years and < 60", function(){
            let age = 16;
            let year = 5;
            let vd = new vacationDays( age, year );
            let d = vd.getVacationDays();
            chai.assert.equal(d, 8);
        });
        it( "Should be handle 5 years and > 60", function(){
            let age = 60;
            let year = 5;
            let vd = new vacationDays( age, year );
            let d = vd.getVacationDays();
            chai.assert.equal(d, 11);
        });
    });
});
