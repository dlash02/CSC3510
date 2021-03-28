function insertNew() {
    alert("New insert2")
    //let URL =  "driveChuck.php";
    //let task = document.getElementById('task').value;
    let task = $('#task').val();
    //let status = document.getElementById('status').value;
    let status = $('#status').val();

    alert(`status:${status} task:${task}`)
    let URL2 =  "http://127.0.0.1:3000/tasks";
    console.log(`Click Show URL2=${URL2}`);
    let  settings = {
        "url" : URL2,
        "method": "POST",
        "async": true,
        "dataType": 'jsonp',
        "crossDomain": true,
        "timeout": 0,
        "headers": {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
    };
    // Error check before doing the rest
    let d = {
        task : `${task}`,
        status : `${status}`
    }
    alert(d.task)
    $.ajax({
        url: URL2,
        contentType: 'application/json',
        type: 'POST',
        data : JSON.stringify( d ),
        success: function (data) {
            let oStr = "<h2> SUCCESS</h2>";
            console.log( "POST" );
            console.log( data );
        },
        error: function (xhr, status, error) {
            //var err = eval("(" + xhr.responseText + ")");
            alert(error );
            alert("Ajax3 Error");
            console.log("Error--->>>");
            console.log(error);
        }
    });
}