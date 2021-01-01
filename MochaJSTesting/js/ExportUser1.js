import {months} from './exportsUser_Months.js';
//import {months, getName} from './exportsUser_Months.js';

let m = "";
let cma = "";
for ( let i=0; i<months.length; i++ ){
    if ( i != 0 )  cma = ",";
    m += `${cma}${months[i]}`;

}
$("#months").html( m )

//let n = getName();
//$("#name").html( n )

