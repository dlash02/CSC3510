exports.getGrade = function(g1) {
       if (g1 >= 100){
           return null;
       } else if (g1 >= 90) {
           return "A";
       } else if (g1 >= 80) {
           return "B";
       } else if (g1 >= 70) {
           return "C";
       } else if (g1 >= 60) {
           return "D";
       } else if (g1 < 60 && g1 > 0) {
           return "F";
       } else{
           return null;
       }
   }
