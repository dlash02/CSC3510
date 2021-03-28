$(document).ready(function() {
    $("#show").click(function() {
        alert("click")
        //let URL =  "driveChuck.php";
        let URL2 =  "http://127.0.0.1:3000/tasks";
        alert(`Gone start to call ${URL2}`)
    });
});