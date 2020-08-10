var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
const { platform } = require('os');
var upload = multer();


app.set('view engine', 'pug');
app.set('views','./views');
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/form', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   let b1 = req.body.say;
   let to1 = req.body.to;
   let plat = req.body.platform;
   res.send(`recieved your request. <br /> b1: ${b1} to1:${to1} and plat:${platform}`);
});
app.get('/', function(req, res){
   var start = "This is a get request";
   console.log( start );
   res.send( start );
});
app.listen(3000);