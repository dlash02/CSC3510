class Grades {
    gradeListStr = [];
    gradeListNum = [];
    errorString = "";
    gotError = false;
    constructor( gList ){
        //this.gradeListStr = gList.split('\n');
        this.gradeListStr = gList.split('\s+');
        console.log(`g1=${this.gradeListStr}`);
        this.gradesOK();
    }
    get gListStr() { return this.gradeListStr;}
    get gradeListNum() { return this.gradeListNum;}
    get getErrorString() { return this.errorString }
    gradesOK(){
        for( let i=0; i<this.gradeListStr.length; i++ )  {
            if ( isNaN(this.gradeListStr[i]) ) {
                this.errorString += `index:${i} number:${gList[i]} is Invalid`;
                this.gotError = true;
                continue;
            } else {
                this.gradeListNum[i] = parseFloat( this.gradeListStr[i]);
            }
            alert(`allGradesOK gListN=${this.gradeListNum[i]}`);
        }
        alert(`error=${this.errorString}`);
    }
}
function calcGrades() {
    alert( "A OK ");
    let gr = document.getElementById("grades").value;
    //console.log( `graades=${grades}`);
    let g = new Grades( gr );
    if ( g.errorString ) {
        let r = document.getElementById("results").innerHTML = g.errorString;
    } else {
     let r = document.getElementById("results").innerHTML = "OK";
    }
}