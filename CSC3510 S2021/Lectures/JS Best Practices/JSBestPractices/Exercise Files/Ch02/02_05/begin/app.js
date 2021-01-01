'use strict';

const projections = [15.2, 33.8, 17.3, 22.4];

const bestCase = projections.map(proj => {
  return ((proj * 1.5).toFixed(1));
});

console.log(bestCase);