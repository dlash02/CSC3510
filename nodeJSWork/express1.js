let express = require('express');
let app = express();

app.get( '/stuff', function(req, res){
   res.send("THis Is Stuff");
});
app.get( '/otherStuff', function(req, res){
   res.send("THis is otherStuff");
});
app.get( '/', function(req, res){
   res.send("THis is slash");
});
app.post( '/pizza', function(req, res){
   console.log("inside pizza");
   res.send("Yes we have pizza");
});
app.delete( '/pizza', function(req, res){
   console.log("delete inside pizza");
   res.send("Yes we will delete pizza");
});
app.get( '/pizza/{id}n', function(req, res){
   let response = {
     'pizzaType' : "Deep Dish",
     'pizzaTopping' : "Pepperoni"
   }
   console.log(response);
   res.send( JSON.stringify( response) );
});



let port = 3000;
console.log(`Listening on 127.0.0.1:${port}`);
app.listen( port );