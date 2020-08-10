var express = require('express');
var app = express();
var fs = require("fs");
app.get('/listUsers', function (req, res) {
       fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
           if ( !err ) { 
               console.log( `data=${data}` );
          } else { 
            console.log( `err=${err}` );
          } 
         res.end( data );
      });
});

// adding addUser Route
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
 
// answers a post request this way ... can ma
 //app.post('/addUser', function (req, res) {
// answers a post request this way ... can ma
 app.get('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( `data=${data}` );
       res.end( JSON.stringify(data));
    });
 });
 // should be a delete route but make it get for testing
 //app.delete('/deleteUser', function (req, res) {
 app.get('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
        
       console.log( `deleteData=${data}` );
       res.end( JSON.stringify(data));
    });
 });
 // add route for a specific ID
 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( `user=${user}` );
       res.end( JSON.stringify(user));
    });
 })
 // Adding delete with id 2 hard coded

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port);
});