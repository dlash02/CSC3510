const chai = require('chai');
const { isRegExp } = require('util');
const expect = chai.expect;  

describe( 'Filee: simple2 chai test', () => {
    it('Should compare 2 values', () => { 
         expect(1).to.equal(1);
     });
})