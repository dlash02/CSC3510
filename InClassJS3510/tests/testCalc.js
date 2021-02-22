describe('Simple checker of stuff', function() {
    context( "Average 3 number", function() {

       it('Can average 3 numbers', function() {
           let item = 6;
           chai.assert.equal( 6, item );
       });
       it('check that 7 is 7', function() {
           let item = 7;
           chai.assert.equal( 7, item );
       });
    });
});