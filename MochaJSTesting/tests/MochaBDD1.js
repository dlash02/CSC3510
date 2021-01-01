describe("pow", function() {
    describe("check n to the 3rd power", function() {
       it("2 to power 3 should be 8", function() {
           assert.equal(pow(2, 3), 8);
       });
       it("3 to power 3 should be 27", function() {
            assert.equal(pow(3, 3), 27);
       });
       makeTest( 10 );
       makeTest( 1 );
       makeTest( 1000 );
       it("3 to power -1 should be NaN", function() {
           assert.isNaN(pow(3, -1));
       });
        it("3 to power non-integer should be NaN", function() {
            assert.isNaN(pow(3, 1.5));
        });
    });
});

// can  use functions if easier to test
function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
    });
}