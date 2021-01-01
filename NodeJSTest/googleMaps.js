var unirest = require("unirest");

var req = unirest("POST", "https://marvelstefan-skliarovv1.p.rapidapi.com/getComics");

req.headers({
	"content-type": "application/x-www-form-urlencoded",
	"x-rapidapi-key": "7246518105msh18f628dae525d69p176dc5jsn5b01bb801a76",
	"x-rapidapi-host": "Marvelstefan-skliarovV1.p.rapidapi.com",
	"useQueryString": true
});

req.form({
	"privateKey": "ef4ef771d7c68bfc6f39093a5024e986",
    "publicKey": "f095996f7bbc1e1b1be256777ba49167aa5ad142"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);
    console.log( "Starting" );
	console.log(res.body);
});