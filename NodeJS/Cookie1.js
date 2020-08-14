var cookieParser = require('cookie-parser');

var express = require('express');
var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
   let cObj = req.cookies;

   console.log( `Cookie was:${cObj.name}`);
   console.log( `Cookie was:${cObj.color}`);
   let size = cObj.size;
   let response = "";
   if ( size == 'large'){
       response += "<br /> I see you like large";
   } else {
       response += "<br /> You have no size ";
   }
   res.cookie('name', 'JAKE'); 
   res.cookie('color', 'blue'); //Sets name = express
   response += "<br /> Cookie set";
   //Expires after 360000 ms from the time it is set.
   res.cookie('size', 'large', {expire: 360000 + Date.now()}); 
   res.send( response );
});
app.get('/clearCookie', function(req, res){
    res.clearCookie('size');
    res.send('cookie size cleared');
 });

app.listen(3000);