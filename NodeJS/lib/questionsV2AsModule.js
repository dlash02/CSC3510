const readL = require("readline");
const rl = readL.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Will remove these because want any generic set of questions
// 
//const questions = [
//    "What is your name?",
//    "Where do you live?",
//    "Where you you live to vacation?"
//];

// Instead of this want to export the function ... 
//         the consumer may call it whatever they wany
//const collectAnswers = (questions, done) => {
module.exports = (questions, done) => {
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
// 
// Don't want this code because it actually uses the file
//collectAnswers( questions, answers => {
//    console.log( "Thank you for your answers")
//    console.log( answers );
//    process.exit();
//});