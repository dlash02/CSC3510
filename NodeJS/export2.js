
// can also 'destructure' these items from export1 to make them directly available
const {inc, dec, getCount} = require("./export1");


inc();
inc();
inc();
dec();

console.log(`counter=${getCount()}`);