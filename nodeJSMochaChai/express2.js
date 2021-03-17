var express = require('express');
var app = express();

//app.get('/', function( req, res){
    //res.send("hello world");
//});

app.get('/inventory/:id([0-9])', function( req, res){
    let d =  { "items" : {
        1 : { "id" : 1, "name": "hammer", "quantity" :99, "price": 5.99},
        2 : {  "id" : 2, "name" : "saw",  "quantity" :45, "price": 12.99},
        3 : { "id" : 3, "name" : "drivers",  "quantity" :25, "price": 13.99},
       }
    };
    //console.log(`id:${req.params.id}`) ;
    let id = req.params.id;
    let r = d.items[id];
    //console.log(`result:${r} `);
    //res.send(`i:${i} name:${req.params.id}`) ;
    res.writeHead(200, {"Content-Type": "application/json"});
    //console.log( response );
    res.end(JSON.stringify(r));
});

app.get('/inventory',
    (req, res) => {
   let response = {
       "items" : {
           1 : { "name": "hammer", "quantity" :99, "price": 5.99},
           2 : { "name" : "saw",  "quantity" :45, "price": 12.99},
           3 : { "name" : "drivers",  "quantity" :25, "price": 13.99},
       }
   };
   res.writeHead(200, {"Content-Type": "application/json"});
   //console.log( response );
   res.end(JSON.stringify(response));
   res.status(200).send();
 });


var server = app.listen(8885, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listening on http://${host}:${port}`);
})
module.exports = app;
