const chai = require('chai');
const { isRegExp } = require('util');
const expect = chai.expect;  

describe( 'chai test', () => {
    it('Should compare 2 values', () => { 
         expect(1).to.equal(1);
     });
    it('Should work for objects', () => { 
        expect( {name:'Blah'}).to.deep.equal({name:'Blah'});
        expect( {name:'Blah'}).to.have.property('name').to.equal('Blah');
        expect( 5 > 8).to.be.false;
        expect( {} ).to.be.a('object');
        expect( 'foo' ).to.be.a('string');
        expect(3).to.be.a('number');
        expect('bar').to.be.a('string').with.length(3);
        expect([1,2,3].length).to.equal(3);
        expect(null).to.be.null;   // need to check null this way
        expect(undefined).to.not.exist;  // how to check for undefined
        expect(1).to.exist;
     });
     
});