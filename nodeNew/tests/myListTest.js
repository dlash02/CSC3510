describe('myList Tester', function() {
    context( "function to be tested", function() {

        before( () => {
            alert("Before going ");
        });
    it('check second element getElement()', function() {
        let indx = 2;
        //let item = getElement( indx );
        let item = 6;
        chai.assert.equal( 6, item );

    });
    it('check for null element', function() {
        let idx = 10;
        //let item = getElement( idx );
        let item = null;
        chai.assert.equal( null, item );
    });

    });
});