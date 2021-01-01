'use strict';

const loggedInUser = 'sashavodnik';

class cart {
  constructor(options) {
    this.user = options.user;
  }
}

const currentCart = new cart({
  user: loggedInUser,
});

console.log(currentCart);