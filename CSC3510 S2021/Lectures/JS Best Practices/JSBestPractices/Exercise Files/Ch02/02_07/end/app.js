'use strict';

const values = [16, 7, 55];
const projection = (array, result = 0) => {
  const max = array.reduce((a, b) => Math.max(a, b));
  if (max < 10) {
    return 'Poor';
  } else if (max < 100) {
    return 'Fair';
  } else {
    return 'Good';
  }
};

console.log(projection(values));