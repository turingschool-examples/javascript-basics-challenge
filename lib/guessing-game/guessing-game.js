const pry = require('pryjs');

class GuessingGame {
  constructor(secret) {
    this.secret = secret;
    this.isSolved = false;
  }

  guess(number) {
    if(number > this.secret) {
      return 'high';
    } else if(number < this.secret) {
      return 'low';
    } else {
      this.isSolved = true;
      return 'correct';
    };
  };
};
module.exports = GuessingGame;
