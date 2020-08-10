const grab = flag => {
    indexOfFlag = process.argv.indexOf(flag);
    afterFlagInx = indexOfFlag + 1;
    return process.argv[afterFlagInx];
}

const firstName = grab("--first");
const lastName = grab("--last");
console.log(`first:${firstName} last:${lastName}`);