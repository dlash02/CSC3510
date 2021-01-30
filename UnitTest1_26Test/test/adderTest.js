var assert = chai.assert;

describe('adder', function() {
    it('adder should work', function() {
        let x=6;
        let y=6;
        assert.equal(adder(x,y), 12);
    });
});