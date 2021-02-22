describe('Tax Calculator JavaScript', function() {
    context( "Check for valid input", function() {
        it( "Should generate error on negative Salary", function(){
           let res = checkSalary( -1 );
            //chai.assert.equal( res.errorFlag, true );
            chai.assert.isTrue( res.errorFlag);
        });
        it( "Should work for 0 depend 0 salary", function(){
            let res = checkSalary( 0 );
            chai.assert.isFalse( res.errorFlag);
        });
        it( "Should Not work for blank salary", function(){
            let res = checkSalary( null );
            chai.assert.isTrue( res.errorFlag);
        });
    });
    context( "Check the deductions rule", function() {
    });
    context( "CheckSalary works right", function() {
        it( "should parseInt correctly with float input", function(){
            let res = checkSalary( 2.2 );
            chai.assert.equal( res.val, 2 );
        });
        //it( "should parseInt correctly with Negative", function(){
            //let res = checkSalary( -2.2 );
            //chai.assert.equal( res.val, -2 );
        //});
        //it( "should parseInt correctly with Null", function(){
            //let res = checkSalary( -2.2 );
            //chai.assert.equal( res, -2 );
        //});
    });
});
