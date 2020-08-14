// process object is also global
const p = process.pid;
console.log(`pid:${p}`);

console.log("Node Ver:" +process.versions.node);

// Process can also  be used to get command line arguments

console.log( "argv" +process.argv);

// since argv is an array ... can destructure it this way

[conf,,firstN, lastN] = process.argv
// now call with node globalProcess dave lash
console.log( `Welcome first:${firstN} last:${lastN}`);
