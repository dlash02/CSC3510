// Menu is not used ... just corresponds with price
let menu = [ "Ham", "Spam", "Ram", "Grand Slam", "Sardines"]
let price = [ 1.99, 2.00, 3.99, 4.99, 5.99];
function calcCost(){
    // menu costs cannot be negative
    // menu items are unlimited in size
    let id = document.getElementById("item");
    let sVal = $('#item option:selected').val();
    //sVal = 6;
    // sVal -> 0, 1, 2, 3, 4
    let cost = price[sVal];
    let oStr = "";
    if ( cost == undefined) {
       oStr = `Error: Illegal Input value index:${sVal}`;
    } else {
        oStr = "Total Cost $" + cost;
    }
    $("#costResults").html( oStr );
}
