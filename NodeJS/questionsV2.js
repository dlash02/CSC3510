const readL = require("readline");
const rl = readL.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "Where you you live to vacation?"
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [ firstQuestion ] = questions;
    const questionsAnswered = answer => {
        answers.push( answer );
        if ( answers.length < questions.length ){
            // as you increase answers in answers array length will get the next item
            rl.question(questions[answers.length], questionsAnswered );
        } else {
            console.log(".....");
            done( answers );
        }
    }
    rl.question( firstQuestion, questionsAnswered );
    //done( answers);
};
// Make a call to collectAnswers ... when done execute callback function
collectAnswers( questions, answers => {
    console.log( "Thank you for your answers")
    console.log( answers );
    process.exit();
});