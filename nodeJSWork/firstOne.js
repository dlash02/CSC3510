let greeting = "Hello There";
console.log(`greeting:${greeting}`);

console.log( "DirNAme=" + __dirname);
console.log( "FileName=" + __filename);

const path = require("path");
console.log(`The path is: ${path}`)
console.log(`The path is: ${path.basename(__filename)}`)

// get some arguments from command line

console.log("argv:" +process.argv);
[,,arg1, arg2] = process.argv;
let a1 = process.argv[2];
console.log(`arg1=${arg1} arg2=${arg2}`);
console.log(`a1=${a1} `);
