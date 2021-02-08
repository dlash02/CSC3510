describe('Simple checker of stuff', function() {
    it('check that 6 is 6', function() {
        let item = 6;
        chai.assert.equal( 6, item );
    });
    it('check that 7 is 7', function() {
        let item = 7;
        chai.assert.equal( 7, item );
    });
});