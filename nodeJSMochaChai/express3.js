//require the express nodejs module
var express = require('express'),
    //set an instance of exress
    app = express(),
    //require the body-parser nodejs module
    bodyParser = require('body-parser'),
    //require the path nodejs module
    path = require("path");
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//tell express what to do when the /about route is requested
app.post('/form', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');

    //mimic a slow network connection
    setTimeout(function(){
        let f = req.body.firstName ;
        console.log(`First:${f}` );
        res.send(JSON.stringify({
            firstName: req.body.firstName || null,
            lastName: req.body.lastName || null
        }));
    }, 1000)
    //debugging output for the terminal
    console.log('you posted: First Name: ' + req.body.firstName + ', ' +
        ' Last Name: ' + req.body.lastName);
});
app.get('/inventory',
    (req, res) => {
        let response = {
            "items" : {
                1 : { "name": "hammer", "quantity" :99, "price": 5.99},
                2 : { "name" : "saw",  "quantity" :45, "price": 12.99},
                3 : { "name" : "drivers",  "quantity" :25, "price": 13.99},
            }
        };
        res.writeHead(200, {"Content-Type": "application/json"});
        //console.log( response );
        res.end(JSON.stringify(response));
        res.status(200).send();
    });
//wait for a connection
app.listen(3333, function () {
    console.log('Server is running. Point your browser to: http://localhost:3333');
});