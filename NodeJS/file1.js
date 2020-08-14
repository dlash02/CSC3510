const fs = require("fs");

console.log( "Starting .... to read" );
//const files = fs.readdirSync("./assets");
// can use a non-blocking function 
fs.readdir("./assets", (err, files) => {
    if ( err) {
        throw err;
    }
    console.log( files );
});
console.log( "done reading " );