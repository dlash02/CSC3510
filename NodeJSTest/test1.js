const assert = require('assert');
const { isMainThread } = require('worker_threads');

describe( "File to be tested", () => {
    context( "Function to be tested", () => {
        it('show do something', () =>{
            assert.equal(1,2);
        });
    });
});