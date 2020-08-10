var express = require('Express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/first_template', function(req, res){
   res.render('first');
});

app.get('/pass1', function(req, res){
    res.render('second', {
       name: "Aurora", 
       url:"http://www.aurora.edu",
       user: {name: "Jake", age: "20"}
    });
});

app.listen(3000);