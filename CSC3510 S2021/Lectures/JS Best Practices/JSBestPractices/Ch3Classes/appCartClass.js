'use strict';

const loggedInUser = 'JakeJones';
const taxRate = .075;

class Cart {
  constructor(options) {
    this.user = options.user;
  }
  calcTax(rate) {
    this.tax = this.total * rate;
  }
}

const currentCart = new Cart({
  user: loggedInUser,
});


console.log(currentCart);

currentCart.total = 100;
currentCart.calcTax( taxRate);
console.log( currentCart);
