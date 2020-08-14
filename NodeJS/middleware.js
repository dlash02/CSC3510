var express = require('express');
var app = express();

//Simple request time logger
//app.use(function(req, res, next){
   //console.log("A new request received at " + Date.now());
   
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware
   // function/route handler.
   //next();
//});
app.use('/route1', function(req, res, next){
    console.log('\n---- slash  use is executed');
    next();
 });
app.get('/route1', function(req, res){
    console.log('\n---- inside slash is execuded and send ');
   res.send('Inside Slash is executed and send ');
 });
console.log("We are done:" + Date.now());

app.listen(3000);