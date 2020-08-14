const collectAnswers = require("./lib/questionsV2AsModule");
// This use needs questions 
// 
const questions = [
    "What is your first name?",
    "Where were you born?",
    "Where you you live to vacation?"
];

// Need to start things off
collectAnswers( questions, answers => {
    console.log( "Thank you for your answers")
    console.log( answers );
    process.exit();
});