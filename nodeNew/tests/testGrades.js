describe('Grade Calculator JavaScript', function() {
    context( "Check Initiall OK", function() {
        it( "Should be able to create and object", function(){
            //let res = checkSalary( -1 );
            //chai.assert.equal( res.errorFlag, true );
            let gList = [];
            let g = new Grades( gList );
            //chai.assert( g.gradesOK(), true);
            chai.assert.isTrue(g.gradesOK());
        });
    });
    context( "Check for Input Grades valid", function() {
        it( "Should be false if g1 is NaN", function(){
            let gList = [ "Apple", 12, 22];
            let g = new Grades( gList );
            chai.assert.isFalse(g.gradesOK());
        });
        it( "Should be false if g2 is NaN", function(){
            let gList = [ 12, "Apple", 22];
            let g = new Grades( gList );
            chai.assert.isFalse(g.gradesOK());
        });
        it( "Should be false if g3 is NaN", function(){
            let gList = [ 100, 12, "Apple"];
            let g = new Grades( gList );
            chai.assert.isFalse(g.gradesOK());
        });
        it( "Should be true all are valid numbers", function(){
            let gList = [ 100, 12, 100];
            let g = new Grades( gList );
            chai.assert.isTrue(g.gradesOK());
        });
    });
    context( "Check for average is correct", function() {
        it( "Should average 3 whole numbers  with integer return", function() {
            let gList = [ 100, 90, 80];
            let g = new Grades( gList );
            let ok = g.gradesOK();
            let res = g.getAver();
            chai.assert.equal( res, 90.0);
        });
    });
});
