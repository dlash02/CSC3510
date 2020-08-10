// change 3 seconds to 5
const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    //  calc percent time
    const p = Math.floor( ( currentTime / waitTime) * 100);
    // we can clear the last time
    process.stdout.clearLine();
    // move cursor back to line start
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p} %`);

}
console.log( `setting a timer for ${waitTime / 1000 } seconds` );

const timerFinished = () => {
    console.log("We are done");
    clearInterval(interval);
    console.log("Yes Done");
}

// setInterval calls incTime over and over based on waitInterval
// calls incTime every 1/2 second
const interval = setInterval( incTime, waitInterval );
setTimeout( timerFinished, waitTime)