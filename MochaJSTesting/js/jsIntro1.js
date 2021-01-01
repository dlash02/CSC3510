let menu = [ 1.99, 2.00, 3.99, 4.00, 5.99 ];
$(document).ready( function() {
    alert( "Ready1") ;
    $("#getCost").click( function() {
          alert( "Ready") ;
          let sVal = $('#item option:selected').val();
          let cost = 0;
          if ( menu[sVal] != null ) {
             cost =menu[sVal];
              alert(`ok sVal:${sVal} cost:${cost}`);
          } else {
              alert(`Something is wrong sVal:${sVal}`);
          }
          let fStr = "<b>" + cost + "</b>";
        $("#costResult").html( fStr );

    });
});