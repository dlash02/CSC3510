const p = require("path");

const dirUpLoad = p.join( __dirname, "www", "files", "uploads");
console.log(`upoads:${dirUpLoad}`);

const u = require("util");   // has another log method 

u.log( p.basename(__filename));
u.log("Testing this log function");



// there are lots of modules we can use 
const v8 = require("v8");
u.log( v8.getHeapCodeStatistics());


 //functions can be 'destructored' out of their modules
const {getHeapCodeStatistics} = require("v8");
const {log} = require("util");
log("--------------------");
log( getHeapCodeStatistics());