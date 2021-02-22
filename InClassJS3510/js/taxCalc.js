function getAdjGross(salary, deductions) {
    // Tests:
    //  Error cases
    //    salray - null deduction null
    //    salray - 10 deduction null
    //    salray - null deduction 100
    //    salray - 1000 deduction -1
    //    salray - 100 deduction 1
    //    expected
    //    salray - 1000 deduction 1
    //    salray - 1000 deduction 0
    //input:
    // Salary => total gross salary
    // deductions => total number of deductions
    // return the total taxable income
    // Should it return a negetive number for adjGross
    //   -> NO ... it should then return 0
    let totalDeduction = deductions * 1000;
    return salary - totalDeduction;
}

function checkSalary( inSal ) {
    let retSal = parseInt(inSal);
    //ToDo: Add Error Checking for neg
    return retSal;
}
function checkDeduction( inDed ) {
    let retDed = parseInt( inDed );
    //ToDo: Add Error Checking for neg
    return retDed;
}

function getTaxOwed(adjGross) {
    // What tests make sense to completely test this bugger
    // Brack1 -> 518401,  518400,  518402
    // Brack2 -> 207350  207349,  207351
    // Brack3 -> 207349
    // Error Issues: -1, 0, Nothing, Hello
    const  BRACKET1 =  518401;
    const  BRACKET2 =  207350;
    if ( adjGross >= BRACKET1) {
        adjGross = adjGross * .37;
    } else if ( adjGross >= BRACKET2) {
        adjGross = adjGross * .35;
    } else {
        adjGross = adjGross * .1;
    }

    return ( Math.round( adjGross*100)/100);
}

$(document).ready( function() {
    $("#startButton").click( function() {
        let salary = $("#salary").val();
        let nSal = checkSalary( salary );
        let deductions = $("#deduct").val();
        let nDed = checkDeduction( deductions );

        let adjGross = getAdjGross( nSal.val, nDed);
        let taxOwed = getTaxOwed( adjGross );
        console.log(`adjGross=${adjGross}`);
        console.log(`taxOwed=${taxOwed}`);
        $("#taxOwed").html( taxOwed );
        $("#taxable").html( adjGross );
        console.log("Done");
    });
})