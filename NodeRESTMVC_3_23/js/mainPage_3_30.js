function deleteIt( id ) {
    alert(`DELETE IT ${id}`)
}
function startIt(){
    alert("CLCIK READY TO GO");
}
$(document).ready(function() {
    alert("Document Loaded");
    // JS AJAX CODE HERE TO GET ALL THE TASKS
    let id=document.getElementById("taskArea");
    let URL = "http://127.0.0.1:3000/tasks"
    $.ajax({
        url: URL,
        headers: {'Access-Control-Allow-Origin':'*'}, // <-------- set this
        contentType: 'application/json',
        async: true,
        crossDomain : true,
        success : function( data ){
            let oStr = `<h2> Available Tasks </h2>`;
            oStr += "<table border='1'> ";
            oStr += `<tr><th>Id</th><th>Task</th><th>Status</th><th>Created</th></tr>`;
            alert("success");
            console.log(`data:`);
            console.log( data );
            for (let i=0; i<data.length; i++){
                let ti = data[i].id;
                let t = data[i].task;
                let s = data[i].status;
                let c = data[i].created_at;
                oStr += `<tr><td>${ti}</td><td>${t}</td><td>${s}</td><td>${c}</td>`;
                oStr += `<td> <button type="button" class="btn btn-primary" onClick="deleteIt(${ti})">Delete ${ti} </button> </td>`;
                oStr += `</tr>`;

            }
            oStr += `</table>`;
            id.innerHTML = oStr;
        },
        error : function( xhr, status, error ) {
            alert("Error");
        }

    })
    console.log(`URL:${URL}`);
});