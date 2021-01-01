// ToDo -> Create a REST get Request
//      using expres.js/node.js
var express = require("express");
var bodyParser = require("body-parser");

var multer = require('multer');

var app = express();

// Need to add to allow x-domain availability
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Suppose you can connect DB to get the rows
var movies = [
    {id:101, name:"Fight Club", year: 1990, rating:8.1},
    {id:102, name:"Inception", year: 2010, rating:8.7},
    {id:103, name:"The Dark Knight", year: 2008, rating:9.1},
    {id:104, name:"12 Angry Men", year: 1957, rating: 7.6}
];
app.get('/movies', function( req, res ) {
    // connect to DB ... and output JSON output
    res.json( movies );
});
app.get('/movies/:id([0-9]{3,})', function( req, res ) {
    // a get request for a Specific movie ID
    console.log(`id:${req.params.id}`)
    var currMovie = movies.filter( function(movie){
        if ( movie.id == req.params.id) {
            return true;
        }
    });
    if ( currMovie.length == 1 ){
        res.json( currMovie[0]);
    } else {
        res.status(404); // movies not found
        res.json( {message:"Movie Not Found"});
    }
});
app.delete('/movies/:id', function( req, res ) {
    let itemLidList = movies.map( function(movie){
        return movie.id;
    });
    let found = 0;
    for( var i= 0; i<itemLidList;i++ ){
        if ( itemLidList[i] == req.params.id ){
            movies.splice( i, 1);
            res.send( {message: `Movvie ID:${req.params.id} removed`})
            found = 1;
            break;
        }
    }
    if( found == 0 ){
        res.send( {message: `Movvie ID:${req.params.id} Not Found`})
    }
});

console.log("Listening on 3333")
app.listen(3333);