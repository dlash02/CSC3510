let express = require('express');
let app = express();
var mysql = require('mysql');
const { con } = require("./mySql1");

app.get( '/books/:id', function(req, res){
    //res.send( `id:${req.params.id} and name:${req.params.name}`);
    let sql =  `SELECT * FROM BestSellingBooks where id=${req.params.id}`;
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result );
    });
});
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
app.delete( '/books/:id', function(req, res){
    //res.send( `id:${req.params.id} and name:${req.params.name}`);
    let sql =  `delete FROM BestSellingBooks where id=${req.params.id}`;
    //con.query(sql, function (err, result, fields) {
        //if (err) throw err;
        res.send( sql );
    //});
});
let port = 3000;
console.log(`Listening on 127.0.0.1:${port}`);
app.listen( port );