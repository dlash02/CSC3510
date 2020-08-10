var fName = "joda.txt";
var fs = require("fs");
var data = fs.readFileSync( fName );

console.log(data.toString());
console.log("Program Ended");

// Now redo without blocking

console.log("------------------------------------");

var fs = require("fs");

fs.readFile(fName, function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");