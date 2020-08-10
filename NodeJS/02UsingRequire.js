// Every node.js created is called a module
//  ... can load built-in modules with require
const path = require("path");

console.log(`The file name is ${path.basename(__filename)}`);

// can also use the process object to get
// environment variable  process info 

//console.log(process.versions.node);
//console.log(process.id);

// can also get arguments sent 
console.log( process.argv);