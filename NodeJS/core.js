const p = require("path");
//const u = require("util");


//u.log( p.basename(__filename));

//u.log( v8.getHeapCodeStatistics());


// functions can be 'destructored' out of their modules
const {getHeapCodeStatistics} = require("v8");
const {log} = require("util");
log("--------------------");
log( getHeapCodeStatistics());