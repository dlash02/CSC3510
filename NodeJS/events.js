// Import events core module
var events = require('events');

// Create an eventEmitter object - constructs eventEmmiter instance
var eventEmitter = new events.EventEmitter()
// Create event handler for customEvent
eventEmitter.on("customEvent", (msg, user ) => {
   console.log(`user:${user} message:${msg}`);
});
// Create 2 calls to start customEvends
eventEmitter.emit('customEvent', "Hello there", "From your Computer");
eventEmitter.emit('customEvent', "Wow pretty cool", "From me!");

// Create an event handler as follows to raise a custom event
//var connectHandler = function connected() {
   //console.log('connection succesful.');
 // 
   //// Fire the data_received event 
   //eventEmitter.emit('data_received');
//}
////
//// Bind the connection event with the handler
//eventEmitter.on('connection', connectHandler);
// 
//// Bind the data_received event with the anonymous function
//eventEmitter.on('data_received', function() {
   //console.log('data received succesfully.');
//});

// Fire the connection event 
//eventEmitter.emit('connection');

//console.log("Program Ended.");