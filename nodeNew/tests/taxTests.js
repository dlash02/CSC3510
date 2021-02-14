describe('Tax Calculator JavaScript', function() {
    context( "CheckSalary works right", function() {
        it( "should parseInt correctly with float input", function(){
            let res = checkSalary( 2.2 );
            chai.assert.equal( res.val, 2 );
        });
        it( "should parseInt correctly with Negative", function(){
            let res = checkSalary( -2.2 );
            chai.assert.equal( res.val, -2 );
        });
        //it( "should parseInt correctly with Null", function(){
            //let res = checkSalary( -2.2 );
            //chai.assert.equal( res, -2 );
        //});
    });
});
