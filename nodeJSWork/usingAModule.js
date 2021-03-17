let uc = require("upper-case");
let http = require("http");

http.createServer( function (req,res){
    res.writeHead( 200, {'Content-Type': 'text/html'});
    res.write( uc.upperCase("Testing this upercase thing"));
    res.end();
}).listen(8888);