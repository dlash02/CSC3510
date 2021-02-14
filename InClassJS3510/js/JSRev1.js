function handle1(){
    alert("Inside handle1");
    let idObj = document.getElementById("text1");
    let v = idObj.value;
    console.log( 'idObj=' );
    console.log( `idObj=${v}` );
    let sel = document.getElementById("ageId");
}
$("document").ready(function(){
    //alert("Go");
    $("#btn1").click(function(){
        //alert("click");
        let v = $("#text1").val();
        console.log( `idObj=${v}` );
        let sVal = $("#ageId :selected").val();
        console.log( sVal );
        $("#ageId :selected").each(function() {
            alert(this.value);
        });
    });
});