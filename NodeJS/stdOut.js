const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What would you your preferred programming language?"
];

const ask = ( i=0 ) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(`->`);
}

ask();

// use on function to listen for keyboard enter events 
// arg1 Event Name: data
// arg2 Event handler function
const answers = [];
process.stdin.on('data',  
   data => {
       answers.push( data.toString().trim() );
       if ( answers.length < questions.length ){
           ask( answers.length );
       } else { 
           console.log("We are done");
           process.exit();
       }
   }
);

process.on('exit', () => {
   const[name, activity, lang] = answers;
   console.log( `
        OK Go do ${activity} ${name} you can always write code  in ${lang} later

   `);
});
