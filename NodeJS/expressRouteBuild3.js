var express = require('express');
var app = express();

//only match the requests that have a 5-digit long id. 
app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

app.listen(3000);