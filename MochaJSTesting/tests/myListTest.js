describe('myList Tester', function() {
    it('check second element getElement()', function() {
        let indx = 2;
        let item = getElement( indx );
        chai.assert.equal( 6, item );

    });
    it('check for null element', function() {
        let idx = 10;
        let item = getElement( idx );
        chai.assert.equal( null, item );
    });
});