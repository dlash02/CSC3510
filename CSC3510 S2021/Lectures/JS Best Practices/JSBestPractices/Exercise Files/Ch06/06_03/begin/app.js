'use strict';

let a;
const r = 10;

with (Math) {
  a = PI * pow(r, 2);
}

console.log(a);