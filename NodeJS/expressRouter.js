var express = require('Express');
var app = express();

var things = require('./router.js');

//both index.js and things.js should be in same directory
app.use('/things', router);

app.listen(3000);