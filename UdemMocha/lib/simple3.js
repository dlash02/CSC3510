exports.add = function( a, b){
    return a + b
}

// does an add but adds a .5 second delay
exports.addCallback = function( a, b, callBack ) {
    setTimeout(() => {
        return callBack(null, a+b);
    }, 500);
}
// Promise
exports.addPromise = function( a, b ) {
        // Use this line to throw an exception
        //return Promise.reject(new Error('TESTING ERROR EXECPTION'));

        // test inititally with this line
        return Promise.resolve(a + b);
}