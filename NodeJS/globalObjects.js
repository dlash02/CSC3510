// output value of __filename
console.log( `The Current FN:${__filename}` );


// output value of __dirname
console.log( `The Current FN:${__dirname}` );


// setTimeout(cb, ms) -> global function 
//  runs  a callback function after at least ms milliseconds. 
//(A timer cannot span more than 24.8 days.)
function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 let t = setTimeout(printHello, 2000);
 // Now clear the try timer
//clearTimeout(t)