describe('Check class add ', function() {
    context( "Can Add a new Student", function() {

       it('Can add a new student', function() {
           //addThisStudent( classList, maxClassSize, reservedSlots, student ){
           let classList = [];
           let student =  101;
           let maxClassSize=5;
           let reservedSlots=1;
           let ret = addAStudent( classList, maxClassSize, reservedSlots );
           chai.assert.equal( true, ret);
       });
    });
});