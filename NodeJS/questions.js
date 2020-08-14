

process.stdout.write("Hello");
process.stdout.write("There \n\n");


const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferring PL?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\ni=${i} question${questions[i]}`);
    process.stdout.write("->");
}

ask();


//stdin.on data ... is event waiting for input
//This line waits for input data ... and continues to run and listen 
// ...you have to type cntl-C to stop

// V2 Update ...you have to type cntl-C to stop
const answers = [];
process.stdin.on("data", data => {
     // V2 Update ...push to answers
    answers.push(`${data.toString().trim()}`);
    if ( answers.length < questions.length ) {
        ask( answers.length);
    } else { 
        console.log("Must be done");
        process.exit();
    } 
    
});


process.on("exit", () => {
    const [name, activity, lang ] = answers;
    console.log(` 
     
     Thank you ${name} for your answers.
     For do ${activity} you can write ${lang} later`);
});