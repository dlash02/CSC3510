class Grades {
    gradeListStr = [];
    gradeListNum = [];
    errorString = "";
    gotError = false;
    aver = 0;
    constructor( gList ){
        this.gradeListStr = gList;
        console.log(`gListString=${this.gradeListStr}`);
        this.gradesOK();
    }
    get gListStr() { return this.gradeListStr;}
    get gradeListNum() { return this.gradeListNum;}
    get getErrorString() { return this.errorString }
    gradesOK(){
        for( let i=0; i<this.gradeListStr.length; i++ )  {
            if ( isNaN(this.gradeListStr[i]) ) {
                this.errorString += `index:${i} number:${this.gradeListStr[i]} is Invalid`;
                this.gotError = true;
                continue;
            } else if( parseFloat( this.gradeListStr[i] ) < 0) {
                this.errorString += `index:${i} number:${this.gradeListStr[i]} is Negative`;
            } else {
                this.gradeListNum[i] = parseFloat( this.gradeListStr[i]);
            }
            //alert(`allGradesOK gListN=${this.gradeListNum[i]}`);
        }
        //alert(`error=${this.errorString}`);
    }

    calcAver() {
        let sum = 0;
        for( let i=0; i<this.gradeListNum.length; i++ ) {
            sum += this.gradeListNum[i];
        }
        console.log(`sum:${sum} len:${this.gradeListNum.length}`);
        this.aver = sum/this.gradeListNum.length;
    }
}
function calcGrades() {
    let gList  = [];
    gList[0] = document.getElementById("g1").value;
    gList[1] = document.getElementById("g2").value;
    gList[2] = document.getElementById("g3").value;
    let g = new Grades( gList );
    if ( g.errorString ) {
        let oStr = `<span style='color:red'> ${g.errorString} </span>`;
        let r = document.getElementById("results").innerHTML = oStr;
    } else {
        g.calcAver();
        let oStr = `<span style='color:black'> ${g.aver} </span>`;
        let r = document.getElementById("results").innerHTML = oStr;
    }
}