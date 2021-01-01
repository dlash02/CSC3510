'use strict';

const loggedInUser = 'sashavodnik';
const taxRate = 0.075;

class Cart {
  constructor(options) {
    this.user = options.user;
  }
}

const calcTax = (rate) => {
  this.tax = this.total * rate;
};

const currentCart = new Cart({
  user: loggedInUser,
});

currentCart.total = 100;
