var express = require('express');
var router = express.Router();
var movies = [
   {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
   {id: 102, name: "Inception", year: 2010, rating: 8.7},
   {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
   {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
];

//Routes will go here
module.exports = router;


// 
// add route to 127.0.0.1:3000/101
// 
 router.get('/:id([0-9]{3,})', function(req, res){
    var currMovie = movies.filter(function(movie){
       if(movie.id == req.params.id){
          return true;
       }
    });
    if(currMovie.length == 1){
       res.json(currMovie[0])
    } else {
       res.status(404);//Set status to 404 as movie was not found
       res.json({message: "Not Found"});
    }
 });

router.get('/', function(req, res){
    res.json(movies);
 });

 router.delete('/:id', function(req, res){
    let itemIdList = movies.map(function(movie){
       return movie.id;
    });
        
    found = 0;
    for ( var i=0; i<itemIdList.length; i++ ){
        if ( itemIdList[i] == req.params.id){
            movies.splice(i, 1);
            res.send({message: "Movie id " + req.params.id + " removed."});
            found = 1;
            break;
        }
    }
    if( found == 0 ) { 
       res.json({message: "Not found of id=" + req.params.id});
    } 
 });
 // Put request to update an exisiting 
 router.put('/:id', function(req, res) {
    //Check if all fields are provided and are valid:
    if(!req.body.name ||
       !req.body.year.toString().match(/^[0-9]{4}$/g) ||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
       !req.params.id.toString().match(/^[0-9]{3,}$/g)){
       res.status(400);
       res.json({message: "Bad Request"});
    } else {
       //Gets us the index of movie with given id.
       var updateIndex = movies.map(function(movie){
          return movie.id;
       }).indexOf(parseInt(req.params.id));
       
       if(updateIndex === -1){
          //Movie not found, create new
          movies.push({
             id: req.params.id,
             name: req.body.name,
             year: req.body.year,
             rating: req.body.rating
          });
          res.json({
             message: "New movie created.", location: "/movies/" + req.params.id});
       } else {
          //Update existing movie
          movies[updateIndex] = {
             id: req.params.id,
             name: req.body.name,
             year: req.body.year,
             rating: req.body.rating
          };
          res.json({message: "Movie id " + req.params.id + " updated.",
             location: "/movies/" + req.params.id});
       }
    }
 });