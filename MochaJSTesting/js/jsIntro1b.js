let menu = [
       {'id' : 1 , 'item' : 'Regular Coffee', price :  1.99 },
       {'id' : 3 , 'item' : 'Latte', price :  2.00 },
       {'id' : 4, 'item' : 'Mocha Latte', price :  3.00 },
       {'id' : 5 , 'item' : 'Frapicino', price :  4.00 },
       {'id' : 6 , 'item' : 'Expresso', price :  5.00 },
       {'id' : 7 , 'item' : 'Mocha Expresso', price :  6.00 }
];
$(document).ready( function() {
    alert( "Ready1") ;
    doSelect();
    $("#getCost").click( function() {
          //alert( "Ready1b") ;
          // This is returns an array of selected items
          //  -- so now sVal is an array
        let sVal = $('#item').val();
        console.log(`sval:${sVal}`)
        alert(`sval:${sVal}`);
        let total = 0;
        let fStr = " <table border='1'>";
        alert(`sVal Length:${sVal.length}`);
        for ( i=0; i<sVal.length; i++ ){
            let selItem = sVal[i];
            mItem = getThisItem( selItem )
            alert(`item:${mItem.item} i=${i}`);
            if ( mItem != null ){
                total += mItem.price;
                fStr += `<tr><td>${mItem.item} </td><td>${mItem.price}</td></tr>`;
            } else {
                alert( "Illegal detected")
                fStr += "<tr><th> Illegal Selection</th></tr>";
                break;
            }
        }
        fStr += "</table>";
        $("#costResult").html( fStr );

    });
function doSelect() {
    alert("doSelect")
    let oStr = "";
    for ( i=0; i<menu.length; i++){
        let o = menu[i];
        oStr += `<option value=${o.id}>  ${o.item} </option>`;
    }
    alert( `oStr:${oStr}`)
    $("#item").html( oStr );
}
function getThisItem( iVal ) {
        for ( i=0; i<menu.length; i++) {
            let o = menu[i];
            if ( o.id == iVal ) {
                return o;
            }
        }
        alert( "Error Item not found ");
        return null;
    }

});
