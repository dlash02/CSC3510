var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('images'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/static', function(req, res){
    res.render('static');
})

app.listen(3000);