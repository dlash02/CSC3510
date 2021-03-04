$(document).ready( function(){
    $("#startIt").click( function () {
        //let URL = 'http://numbersapi.com/random/year?json';
        let URL = 'https://98f2c9ce-fa98-4bd1-ac26-3da85ea67799.mock.pstmn.io/owners';
        alert("click=" + URL) ;
        let settings = {
            "url" : URL,
            "method" : "GET",
            "timeout" : 0
        };
        let year = "Nothing";
        let oText = "Nothing2";
        $.ajax ( settings ).done(
            function( response) {
                alert("done");
                console.log("Resonse:");
                console.log( response );
                let own = response.owners;
                console.log("own:");
                console.log( own );
                oText = "";
                for( let i=0; i<own.length; i++ ){
                    alert(`owner ${own[i].name}` );
                    oText += `owner:${own[i].name}`;
                };
                $("#results").html( oText );
            }
        )
    })
})