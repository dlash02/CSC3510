let menu = [
    { "Name" : "Ham", "Price" : 1.99 },
    { "Name" : "Spam", "Price" : 2.00 },
    { "Name" : "Grand Slam", "Price" : 4.99 },
    { "Name" : "Sardines", "Price" : 5.99 }
]
function showMenu() {
    let oStr = "<select id='item' size='2'>";
    menu.forEach( (item, i) => {
        console.log(item)
        console.log(i)
        oStr += `<option value='${i}'> ${item.Name} </option>`;
    });
    oStr += "</select>";
    $("#menu").html( oStr );
}
function calcCost(){
    // menu costs cannot be negative
    // menu items are unlimited in size
    let id = document.getElementById("item");
    let sVal = $('#item option:selected').val();
    alert("Click" +sVal);
    //sVal = 6;
    // sVal -> 0, 1, 2, 3, 4
    let cObj = menu[sVal];
    let oStr = "";
    if ( cObj == undefined) {
        oStr = `Error: Nothing selected value index:${sVal}`;
    } else if ( cObj.Name == undefined) {
        oStr = `Error: Illegal Input value index:${sVal}`;
    } else {
        oStr = "Total Cost $" + cObj.Price;
    }
    $("#costResults").html( oStr );
}