describe( "The File to be tested", function(){
    context("function (or class) to be tested", function () {
        it( "(Describe the test) should be a positive number", function(){
            chai.assert.equal(1, 1);
        });
        it( "(Describe the new test) should be a blah", function(){
            let x = 2;
            chai.assert.equal(x, 2);
        });
        it( "Array Length should be a correct", function(){
            let arr = [];
            chai.assert.equal(arr.length, 0);
        });
        it( "should be a correct string", function(){
            let x = '2';
            let y = 2;
            chai.assert.strictEqual( x, y);
        });
    });
});