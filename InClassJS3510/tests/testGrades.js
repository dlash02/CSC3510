describe('gradeCalc Class', function() {
    let gList  = [];
    before( () => {
        gList[0] = 100;
        gList[1] = 90;
        gList[2] = 80;
        alert("Do this first");
    });
    context( "Input OK", function() {
        after( () => {
            alert("Tests are done");
        });
    it('check that 100, 90, 80 is 90', function() {
        //let gList  = [];
        //
        // gList[0] = 100;
        //gList[1] = 90;
        //gList[2] = 80;
        let g = new Grades( gList );
        console.log( `calc:${g.calcAver()}`);
        g.calcAver();
        chai.assert.equal( 90.0, g.aver );
    });
    });
});