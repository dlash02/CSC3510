describe('Simple Math Library Tests', function() {
    context( "AddNToX", function() {
        it( "should add 1 successfully", function(){
            let x = 2;
            let n = 1;
            let ret = addNToX( 2, 1);
            chai.assert.strictEqual( ret, 3 );
        });
        it( "should add not be negative when n is negative", function(){
            let x = 2;
            let n = -3;
            //let ret = addNToX( 2, 1);
            chai.assert.strictEqual( addNToX(x, n), 5 );
        });
        it( "should add not be negative when x is negative", function(){
            let x = -2;
            let n = 3;
            //let ret = addNToX( 2, 1);
            chai.assert.strictEqual( addNToX(x, n), 5 );
        });
    });
    context( "SubTractNfromX", function() {
        it( "should subtract N from X ", function(){
            let x = 2;
            let n = 1;
            //let ret = addNToX( 2, 1);
            chai.assert.strictEqual( subNFromX(x, n), 1 );
        });
        it( "should subtract N from X again", function(){
            let x = 5;
            let n = 1;
            //let ret = addNToX( 2, 1);
            chai.assert.strictEqual( subNFromX(x, n), 4 );
        });
    });
});
