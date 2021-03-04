$(document).ready( function(){
    $("#startIt").click( function () {
        let URL = 'http://numbersapi.com/random/year?json';
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
                alert( response.text );
                alert( response.type );
                //alert( response.number );
                year = response.number;
                $("#year").html( year );
                alert( "YEAAR22:" + year );
                oText = response.text;
                $("#results").html( oText );
            }
       )
    })
})