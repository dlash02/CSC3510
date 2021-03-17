var express = require('express');
var app = express();

app.get('/', function( req, res){
    res.send("hello world");
});

app.get('/inventory',
    (req, res) => {
   let response = {
       "items" : {
           hammer : { "quantity" :99, "price": 5.99},
           saw : { "quantity" :45, "price": 12.99},
           drivers : { "quantity" :15, "price": 10.99}
       }
   };
   res.writeHead(200, {"Content-Type": "application/json"});
   //console.log( response );
   res.end(JSON.stringify(response));
   res.status(200).send();
 });


var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listening on http://${host}:${port}`);
})
module.exports = app;
