let menu = ["Tuna", "Salmon", "Squid", "Pizza"];
let cost  = [5.99, 12.99, 8.99, 10.99 ];
function showTheMenu(){
    alert("Start");
    let oStr = "<ol>";
    for( let i=0; i<menu.length; i++){
        oStr += `<li onClick='showCost(${i})'> ${menu[i]} </li>`;
    }
    oStr += "</ol>";
    let m = document.getElementById("menu");
    m.innerHTML = oStr;
}
function showCost( item ){
    if ( cost[item] == undefined ){
        alert("Item is undefinedA;")
    } else {
        let m = menu[item] ;
        let c = cost[item] ;
        alert(`item:${m} has cost:${c} `);

    }
}
