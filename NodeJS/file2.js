const fs = require("fs");

console.log( "Starting .... to read" );
//const text = fs.readFileSync("./assets/input.txt", "UTF-8");

// Lets do it asyncrounsly ...
fs.readFile("./assets/BLAH.txt", "UTF-8", (err, text) => {
    if ( err ) {
        console.log(`And error occurred: ${err.message}`);
    }
    console.log( "File is actually read  " );
   console.log( text );

});
console.log( "done reading " );