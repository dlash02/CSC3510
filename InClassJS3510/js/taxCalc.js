function getAdjGross(salary, deductions) {
    //input:
    // Salary => total gross salary
    // deductions => total number of deductions
    // return the total taxable income
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

        let adjGross = getAdjGross( nSal, nDed);
        let taxOwed = getTaxOwed( adjGross );
        console.log(`adjGross=${adjGross}`);
        console.log(`taxOwed=${taxOwed}`);
        console.log("Done");
    });
})