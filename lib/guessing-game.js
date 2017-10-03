var pry = require('pryjs');

class GuessingGame {
  constructor(number) {
    this.number = number;
    this.isSolved = false;
  };

  guess(input) {
    if (input == this.number) {
      this.isSolved = true;
      return 'correct'
    } else if (input > this.number) {
      return 'high'
    } else if (input < this.number) {
      return 'low'
    }
  };
}

module.exports = GuessingGame
