'use strict';

const bonusResult = (input) => {
  if (input <= 100) { 
    input = 100
  } else if (input > 100 && input < 500) {
    input = input * 1.5;
  } else if (input >= 500) {
    input = input * 2;
  }
  return input;
}

console.log(bonusResult(50));
console.log(bonusResult(150));
console.log(bonusResult(600));