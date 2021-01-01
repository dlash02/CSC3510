// Based on US Tax Brackets:
//      https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets
$(document).ready( function() {
    $("#startButton").click( function() {
          //alert( "Ready") ;
          let sal = $("#salary").val();
          //alert(`sal=${sal}`)
          let deductions = $("#deduct").val();
        //alert(`ded=${deductions}`)
        let adjGross = getAdjGross( parseInt(sal), parseInt(deductions));
        alert( `adjGross=${adjGross}`);
       let totalTax = getTaxOwed( adjGross );
        alert( `totalTax=${totalTax}`);
        $("#taxable").html( adjGross );
        $("#taxOwed").html( totalTax );
    });
});
function getAdjGross (  sal, deductions ) {
    return sal - deductions;
}
function getTaxOwed ( adjGross ){
    const  MAX_BRACKET = 518401;
    const  MAX_BRACKET2 = 207350;
    const  MAX_BRACKET3 = 163301;
    const  MAX_BRACKET4 = 85525;
    const  MAX_BRACKET5 = 40126;
    const  MAX_BRACKET6 = 9876;
     if (  adjGross >=  MAX_BRACKET ){
        adjGross = adjGross * .37;
     } else if ( adjGross > MAX_BRACKET2 ) {
         adjGross = adjGross * .35;
     } else if ( adjGross > MAX_BRACKET3 ) {
          adjGross = adjGross * .32;
     }  else if ( adjGross > MAX_BRACKET4 ) {
         adjGross = adjGross * .24;
     }  else if ( adjGross > MAX_BRACKET3 ) {
         adjGross = adjGross * .12;
     } else {
         adjGross = adjGross * .1;
     }
     return (Math.round(adjGross * 100) / 100);
}