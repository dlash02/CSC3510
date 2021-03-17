let express = require('express');
const app = express();
var mysql = require('mysql');
const { con } = require("./mySql1");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get( '/candy/:id', function(req, res){
    //res.send( `id:${req.params.id} and name:${req.params.name}`);
    let sql =  `SELECT * FROM candy where id=${req.params.id}`;
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result );
    });
});
app.get( '/candy', function(req, res){
    con.connect(function(err) {
        if (err) throw err;
        let sql =  "SELECT * FROM candy";
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.send(result );
        });
    });
    //res.send("THis Is Stuff");
});
app.delete( '/candy/:id', function(req, res){
    //res.send( `id:${req.params.id} and name:${req.params.name}`);
    let sql =  `delete FROM candy where id='${req.params.id}'`;
    console.log(`sql:${sql}`)
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send( sql );
    });
});
app.post( '/candy/', function(req, res){
    console.log(`got body:${req.body.firstName}`);
    console.log(JSON.stringify(req.body, null, 2 ));
    res.send(JSON.stringify( {
        firstName: req.body.firstName || null,
        lastName: req.body.lastName || null
    }))
});
app.post( '/candy/', function(req, res){
    // id	item	count	cost	totalValue
        console.log(`got body:${req.body.count}`);
        console.log(JSON.stringify(req.body, null, 2 ));
        res.send(JSON.stringify( {
            item : req.body.item || null,
            count: req.body.count || null,
            cost: req.body.cost || null,
            totalValue: req.body.totalValue || null
        }))
});
app.post( '/candy2/', function(req,
                               res){
    console.log(`got body:${req.body.item}`);
    let i = req.body.item;
    let c = req.body.count;
    let ct = req.body.cost;
    let tv = req.body.totalValue;
    let sql = `INSERT INTO candy ( item, count, cost, totalValue ) values ( '${i}','${c}', '${ct}', '${tv}')`;
    console.log(`sql=${sql}`)
    con.query(sql, function (err, res2, fields) {
          if (err) {
               console.log("error: ", err);
               res.send(JSON.stringify( {
                  error : err
                 }))
           }
        console.log("created candy: ", { item : req.body.item });
        res.send(JSON.stringify( {
            item : req.body.item || null, count : req.body.count || null,
            cost : req.body.cost || null,
            totalValue : req.body.totalValue || null
        }));
    });
});
app.put( '/candy2/:id', function(req,
                               res){
    let id=req.params.id;
    let i = req.body.item;
    let c = req.body.count;
    let ct = req.body.cost;
    let tv = req.body.totalValue;
    let sql = `UPDATE candy set `;
    sql += ` item='${i}', count='${c}', cost='${ct}', totalValue='${tv}' `;
    sql += ` where id=${id}`;
    console.log(`sql:${sql}`)
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result );
    });
    //res.send(JSON.stringify( {
        //item : req.body.item || null, count : req.body.count || null,
        //cost : req.body.cost || null,
        //totalValue : req.body.totalValue || null
    //}));
});

let port = 3000;
console.log(`Listening on 127.0.0.1:${port}`);
app.listen( port );