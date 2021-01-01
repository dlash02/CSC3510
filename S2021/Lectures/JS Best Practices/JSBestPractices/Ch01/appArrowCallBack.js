'use strict'
const projections = [ 15.2, 33.454, 99.9999];

//const bestCase = projections.map( function(proj) {
const bestCase = projections.map( (proj) => ((proj*1.5)).toFixed(1));

console.log(`bestCase:${bestCase}`)
