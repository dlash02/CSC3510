const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("How is node going so far?", answer => {
    console.log(`Your Answer: ${answer}`)
})