let express = require('express');
let app = express();
var mysql = require('mysql');
const { con } = require("./mySql1");

app.get( '/books', function(req, res){
    let objs = [];
    con.connect(function(err) {
        if (err) throw err;
        let sql =  "SELECT * FROM BestSellingBooks";
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.send(result );
        });
    });
    //res.send("THis Is Stuff");
});
let port = 3000;
console.log(`Listening on 127.0.0.1:${port}`);
app.listen( port );