

console.log( "Enter something->");
process.stdin.on("data", data => {
    console.log(`Got len:${data.length - 1} chars`);
});