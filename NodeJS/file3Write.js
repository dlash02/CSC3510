const fs = require("fs");

const someText =  `
#this is a new file 
We can write some stuff to a file:
* fs.readdir
* fs.readFile
* fs.writeFile
`;
console.log( "Starting .... to write" );
// Lets do it asyncrounsly ...
fs.writeFile("./assets/SomeFile.txt", someText.trim(), err => {
    if ( err ) {
        console.log(`And error occurred: ${err.message}`);
    }
    console.log( "This file has been saved  " );
});
console.log( "--- We are done here " );