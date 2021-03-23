var mysql = require('mysql');

var con = mysql.createConnection({
    host: "45.55.136.114",
    user: "csc3610",
    password: "csc3610",
    database: "csc3610"
});

//con.connect( function(err) {
    //if ( err) throw err;
    //con.query("SELECT item, cost from `candy` order by item", function(err, result, fields) {
        //if ( err) throw err;
        //console.log(result);
    //});
//});
module.exports = {
    con
}