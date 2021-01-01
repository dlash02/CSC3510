class menuItems {
   constructor() {
       this.menu = [
           {'id' : 1 , 'item' : 'Regular Coffee', price :  1.99 },
           {'id' : 3 , 'item' : 'Latte', price :  2.00 },
           {'id' : 4, 'item' : 'Mocha Latte', price :  3.00 },
           {'id' : 5 , 'item' : 'Frapicino', price :  4.00 },
           {'id' : 6 , 'item' : 'Expresso', price :  5.00 },
           {'id' : 7 , 'item' : 'Mocha Expresso', price :  6.00 }
       ]
   }
   getThisItem( iVal ) {
            for ( i=0; i<this.menu.length; i++) {
                let o = this.menu[i];
                if ( o.id == iVal ) {
                    return o;
                }
            }
            alert( "Error Item not found ");
            return null;
        }
}
$(document).ready( function() {
    alert( "Ready1") ;
    let m = new menuItems();


    doSelect( m );

    $("#getCost").click( function() {
          // This is returns an array of selected items
          //  -- so now sVal is an array
        let sVal = $('#item').val();
        console.log(`sval:${sVal}`)
        alert(`sval:${sVal}`);
        let total = 0;
        let fStr = " <table border='1'>";
        for ( let i=0; i<sVal.length; i++ ){
            let selItem = sVal[i];
            mItem = m.getThisItem( selItem );
            console.log(`i=${i} selItem:${selItem}-->>`)
            console.log(mItem)
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
function doSelect( m ) {
    let oStr = "";
    for ( i=0; i<m.menu.length; i++){
        let o = m.menu[i];
        oStr += `<option value=${o.id}>  ${o.item} </option>`;
    }
    $("#item").html( oStr );
}

});
