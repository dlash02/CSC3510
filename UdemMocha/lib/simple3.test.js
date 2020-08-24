const chai= require('chai');
const expect = chai.expect;

var simp3 = require("./simple3");

describe( "Simple3", () => {
    context('add', () => {
        it('Should add two numbers', () => {
            expect(simp3.add(1,2,)).to.equal(3);
        });
    });
    context('callback add', () => {
        // done is the callBack function
        it('should test callback add', (done)=> {
            simp3.addCallback(1,3, (err, result) => {
                expect(err).to.not.exist; 
                expect(result).to.equal(4);
                done();
            });
        });
    });
    context('Promise add', () => {
        it('should shoud add with a promise callback ', (done)=> {
            simp3.addPromise( 2, 3).then ((result) => {
                expect( result).to.equal(5);
                done();
            }).catch((ex) => {
                console.log('Caught an error');
                done( ex );
            })
        });
    });
});