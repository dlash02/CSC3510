function pow( x, n ){
    // improve implementation
    let result = 1;
    if ( n < 0 ) return NaN;
    if (Math.round(n) != n) return NaN;

    for (let i = 0; i < n; i++) {
       result *= x;
   }
    //alert(`x=${x} n:${n} ret:${result}`)
   return result;
}