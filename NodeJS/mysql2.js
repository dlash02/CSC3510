var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "45.55.136.114",
  user: "csc3610",
  password: "csc3610",
  database: "csc3610"
});

app.get('/', function(req, res){
    var start = "This is a get request";
    console.log( start );
    //res.send( start );
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM BestSellingBooks", function (err, result, fields) {
           if (err) throw err;
           //let aData = JSON.parse( result );
           console.log( "\n --- parsed" );
           let sRes = "<table border=1>";
           sRes += "<tr><th>Id</th>";
           sRes += "<th>Title</th>";
           sRes += "<th>Author</th>";
           sRes += "<th>Language</th>";
           sRes += "<th>Year</th>";
            result.forEach((item) => {
                console.log(item);
                sRes += `<tr> <td> ${item.id}</td>`;
               sRes += `<td> ${item.Title}</td>`;
               sRes += `<td> ${item.Author} </td>`;
               sRes += `<td> ${item.Language} </td>`;
               sRes += `<td> ${item.Year} </td>`;
           });
           sRes += "</table>";
           res.send( sRes );
        });
    });
});
app.listen(3000);