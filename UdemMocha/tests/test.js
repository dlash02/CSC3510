// generally provide the file to be tested
const assert = require('assert');

describe('file to be tested', () =>  {
    // context just an alias for describe
    // provide the function you will test
    context('function to be tested', () => {
        before(() => {
            console.log('-----before running');
        });
        after(() => {
            console.log('-----after running');
        });
        beforeEach(() => {
            console.log('----- --- beforeEach running');
        });
        afterEach(() => {
            console.log('----- --- afterEach running');
        });
        // phrase this like you say it: 
        // It should add 2 numbers
        it('should add 2 numbers', () => {
            assert.equal(2, 2);
        });
        it('pass testing strings', () => {
            assert.deepEqual({name:'joe'}, {name:'joe' });
        });
        it('this is a pending test');
    });
    context('another function2 to be tested', () => {
        it('pass testing strings', () => {
            assert.deepEqual({name:'jack'}, {name:'jack' });
        });
    });
});
