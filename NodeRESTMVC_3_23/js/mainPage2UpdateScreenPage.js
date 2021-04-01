function sendTheUpdate() {
    alert("send the update");
}
function updateIt(id, t='apple', s=12) {
    //alert(`New Update id:${id}`);
    let oStr = `<h2> Update of id:${id} </h2>`;
    oStr += `task <input type=text id='task' name='task' value='${t}'>`;
    oStr += `status <input type=text id='status' name='status' value='${s}'>`;
    oStr += `<button type="button" onClick="sendTheUpdate('${id}')"> Update </button>`
    $('#results').html( oStr );
}
function sendTheUpdate( id ) {
    //
        //let URL =  "driveChuck.php";
        //let task = document.getElementById('task').value;
        let task = $('#task').val();
        //let status = document.getElementById('status').value;
        let status = $('#status').val();

        alert(`Send the Update status:${status} task:${task}`)
        let URL2 =  `http://127.0.0.1:3000/tasks/${id}`;
        console.log(`UPDATE showing URL2=${URL2}`);
        // Error check before doing the rest
        let d = {
            task : `${task}`,
            status : `${status}`
        }
        alert(d.task)
        $.ajax({
            url: URL2,
            contentType: 'application/json',
            type: 'PUT',
            data : JSON.stringify( d ),
            success: function (data) {
                let oStr = "<h2> SUCCESS</h2>";
                console.log( "POST" );
                console.log( data );
                alert("Update Successful!")
                window.location.reload();
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
function deleteIt(id) {
    alert(`New delete id:${id}`);
    let URL2 =  `http://127.0.0.1:3000/tasks/${id}`;
    alert(`URL:${URL2}`);

    $.ajax({
          url: URL2,
          headers: {'Access-Control-Allow-Origin':'*'}, // <-------- set this
          contentType: 'application/json',
          async: true,
          type: "DELETE",
          crossDomain : true,
     success: function (data) {
         alert(`delete of id:${id} complete`);
         console.log("Server Response");
         console.log( data );
         oStr = `<span style="color:red"> ${data.message}</span>`;
         $('#ajaxResults').html( oStr );
         alert(`Delete it id:${id} click to continue`);
         window.location.reload();
     },
     error: function (xhr, status, error) {
        var err = eval("(" + xhr.responseText + ")");
        alert(err );
        alert("Ajax3 Error");
        console.log("Error--->>>");
        console.log(err);
         window.location.reload();
    }
   });
 }
$(document).ready(function() {
    let statusMessage = "";
    alert("click")
        //let URL =  "driveChuck.php";
        let URL2 =  "http://127.0.0.1:3000/tasks";
        console.log(`Click Show URL2=${URL2}`);
        //let  settings = {
            //"url" : URL2,
            //"method": "GET",
            //"async": true,
            //"dataType": 'jsonp',
            //"crossDomain": true,
            //"timeout": 0,
            //"headers": {
                //"accept": "application/json",
                //"Access-Control-Allow-Origin":"*"
            //}
        //};
        refreshPage( URL2 );
});
   function refreshPage( URL2 ){
       alert(`REFRESSING! :${URL2}`);
        $.ajax({
            url: URL2,
            headers: {'Access-Control-Allow-Origin':'*'}, // <-------- set this
            contentType: 'application/json',
            //data: JSON.stringify(data),
            async: true,
            crossDomain : true,
            success: function (data) {
                alert("Ajax2");

                console.log("Showing");
                console.log(data);
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
                    oStr += `<td> <button value='${id}' class="btn btn-outline-success" onclick="deleteIt(${id})">Delete ${id}</button></td>`;
                    oStr += `<td> <button value='${id}' class="btn btn-outline-success" onclick="updateIt(${id}, '${t}', '${s}')">Update ${id}</button></td>`;
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
   }

