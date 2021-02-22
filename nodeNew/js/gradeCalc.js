class Grades {
   gradeListstr = [];
   gradeList = [];
   constructor( gList ) {
      this.gradeListStr = gList;
   }
   gradesOK(){
       let ret = true;
      for ( let i=0; i<this.gradeListStr.length; i++ ) {
          let gr = parseInt(this.gradeListStr[i] );
          if ( isNaN( gr )) {
             ret = false;
          } else {
             this.gradeList.push( gr ) ;
          }
      }
      return ret;
   }
    getAver() {
       let sum = 0;
        for ( let i=0; i<this.gradeList.length; i++ ) {
            sum += this.gradeList[i];
        }
        let aver = (sum/this.gradeList.length).toFixed(2);
        return aver;
    }
}
function calcGrades() {
   let g1 = document.getElementById("g1").value;
   let g2 = document.getElementById("g2").value ;
   let g3 = document.getElementById("g3").value ;
   let result = document.getElementById("results");
   let gList = [ g1, g2, g3];
   g = new Grades( gList );
   if ( g.gradesOK() ) {
         let aver = g.getAver();
         result.innerHTML = "Your Average is " + aver;
   } else {
      result.innerHTML = "Grades Not OK";
   }

   alert("hey");

   //grOK( g1 );
   // Error Checking ... Could g1 or g2 or g3 be null?
   // could g1, g2, g3 be negative or > 100?

   //calcAverage(g1, g2, g3);
   console.log(`gr1:${g1}`);
   console.log(`gr2:${g2}`);
   console.log(`gr3:${g3}`);
}
