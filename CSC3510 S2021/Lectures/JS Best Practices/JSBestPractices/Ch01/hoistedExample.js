'use strict'
const today = new Date();
// Hosting ...
//     with function weekAgoDate() set up can call function before the code is defined

// --- the following is a traditional hoisted declration
function weekAgoDate() {
// --- this defn is not hoisted ... and must be defined before it is called
//const weekAgoDate = function() {
   const date = new Date();
   date.setDate( date.getDate() - 7 );
   return date
}


const weekAgo  = weekAgoDate();

console.log(`today:${today}`)
console.log(`week Ago:${weekAgo}`)
