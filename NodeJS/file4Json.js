const fs = require("fs");
const players = require("./assets/players.json");


players.nameList.forEach( p => {
    console.log( `first:${p.firstName } last:${p.lastName} job:${p.occupation}` );
    let t = p.firstName + " " + p.lastName + "\n";
    fs.appendFile("./assets/justNames.txt", t, err => {
        if ( err ){
            throw err;
        }
        
    });
});


