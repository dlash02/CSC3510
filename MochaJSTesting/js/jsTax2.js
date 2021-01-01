// Based on US Tax Brackets:
//      https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets
// This doesn't work since does not gaurrentee order
let TaxBrackets = {
    518401: .37,
    207350: .35,
    163301: .32,
    85525: .24,
    40126: .12,
    9876: .1
}
// This is an ordered list of objects
let TaxBrackets2 = [
    {cap: 518401, taxPerc  : .37},
    {cap : 207350, taxPerc : .35},
    {cap : 163301, taxPerc : .32},
    {cap : 85525, taxPerc : .24},
    {cap : 40126, taxPerc : .12},
    {cap : 9876, taxPerc : .1}
   ];


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
    for( let i=0; i<TaxBrackets2.length; i++ ){
        let cap  = TaxBrackers2[i].cap;
        let taxPerc  = TaxBrackers2[i].taxPerc;
        if ( adjGross >= cap ){
            adjTaxPerc = taxPerc;
            break;
        }
    }
    return (Math.round(adjTaxPerc * 100) / 100);
}
