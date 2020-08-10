var express = require('express');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'pug');
app.set('views','./views');

var con = mysql.createConnection({
  host: "45.55.136.114",
  user: "csc3610",
  password: "csc3610",
  database: "csc3610"
});

var bodyParser = require('body-parser');
var multer = require('multer');
const { platform } = require('os');
var upload = multer();
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.post('/candy', function( req, res){
   let item = req.body.item;
   let count = req.body.count;
   let cost = req.body.cost;
   let totalValue = count * cost;
   res.send(`recieved your request. <br /> item: ${item} count:${count} and cost:${cost} totalvalue:${totalValue} `);
});

app.get('/', function(req, res){
    res.render('insert');
});
app.listen(3000);