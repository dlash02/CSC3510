const { incr, decr, getCount} = require("./myExport");
incr();
incr();
//.incr();
decr();

//require("./myExport").incr();
//require("./myExport").incr();
//require("./myExport").incr();
//let x = getCount();
let x = getCount();
console.log(`count:${getCount()}`);
console.log(`x:${x}`);
