const chai = require('chai');
const { isRegExp } = require('util');
const expect = chai.expect;  

describe( 'Filee: simple chai test', () => {
    it('Should compare 2 values', () => { 
         expect(1).to.equal(1);
     });
    it('compare 2 values and output process var', () => { 
         expect(1).to.equal(1);
         console.log(`ENV:${process.env.NODE_ENV}`);
        if (process.env.NODE_ENV == 'development' ){
            console.log(`---- YES indeed in ENV:${process.env.NODE_ENV}`);

        }
     });
});