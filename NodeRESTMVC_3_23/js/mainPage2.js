function insertNew(id) {
    alert("New insert")
}
    function deleteIt(id) {
    alert(`Delete it id:${id}`);
}
$(document).ready(function() {
    alert("click")
        //let URL =  "driveChuck.php";
        let URL2 =  "http://127.0.0.1:3000/tasks";
        console.log(`Click Show URL2=${URL2}`);
        let  settings = {
            "url" : URL2,
            "method": "GET",
            "async": true,
            "dataType": 'jsonp',
            "crossDomain": true,
            "timeout": 0,
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
        };

        $.ajax({
            url: URL2,
            headers: {'Access-Control-Allow-Origin':'*'}, // <-------- set this
            contentType: 'application/json',
            //data: JSON.stringify(data),
            async: true,
            crossDomain : true,
            success: function (data) {
                //alert("Ajax2");

                //console.log("Showing");
                //console.log(data);
                let oStr = "<h2> Available Tasks </h2>";
                oStr += "<table border=1>";
                for( let i=0; i<data.length; i++ ){
                    let t =data[i].task;
                    let id =data[i].id;
                    let s =data[i].status;
                    let c =data[i].created_at;
                    oStr += `<tr>`;
                    oStr += `<tr><td>${id} </td>`;
                    oStr += `<td>${t} </td>`;
                    oStr += `<td>${s} </td>`;
                    oStr += `<td>${c} </td>`;
                    oStr += `<td> <button value='${id}' class="btn btn-outline-success" type="submit" onclick="deleteIt(${id})">Delete ${id}</button></td>`;
                    oStr += `</tr>`;
                    console.log(data[i].task);
                }
                oStr += `</table>`;
                $('#results').html( oStr );
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err );
                alert("Ajax3 Error");
                console.log("Error--->>>");
                console.log(err);
            }
        });
        //$.ajax(settings).done(function (response) {
            //alert("Back");
            //console.log("Respons=");
            //console.log( response );
            //let oStr = "<table border='1'>";
            //console.log("Showing");
            //console.log(response.value);
            //let objList =  response.value;
            //let records = objList.value;
            //console.log("\nobjList");
            //console.log(objList);
            //objList.forEach( function ( obj )  {
                ////alert(`obj=${obj}`);
                //let oID = obj.id;
                //oStr += `<tr><td>ID=${obj.id}</td>`;
                //oStr += `<td>xxxx=${obj.joke}</td>`;
            //})
            //alert( `oStr;${oStr}`);
            //let t = $("#showResults").html( oStr );

        //});
});