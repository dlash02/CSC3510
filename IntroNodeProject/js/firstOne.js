$(document).ready(function() {

    $("#button1").click( function(){
        alert("Clicked");
        let str="<ol>";
        for( let i=0; i<10; i++){
            str += "<li> Bottles of bear on the wall</li>";
        }
        str+="</ol>";
        let r = $("#myResults").html( str);
    });
});