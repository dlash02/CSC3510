// Import events core module
var events = require('events');

// Create an eventEmitter object - constructs eventEmmiter instance
var eventEmitter = new events.EventEmitter()
// Create event handler for customEvent
eventEmitter.on("customEvent", (msg, user ) => {
   console.log(`user:${user} message:${msg}`);
});

process.stdin.on( "data", data => {
   const input = data.toString().trim();
   //console.log(`got input:${input}`);
   if ( input == "exit") {
      eventEmitter.emit("customEvent", "GoodBye", "The Process");
      process.exit();
   }
   eventEmitter.emit("customEvent", input, "Terminal");
});