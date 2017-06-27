var pry = require('pryjs');

function GuessingGame(answer) {
  this.guess = function(guess) {
    if(guess > answer) {
      return 'high';
    } else if (guess < answer) {
      return 'low';
    } else {
      return 'correct';
    }
  }

  this.isSolved = function() {
    eval(pry.it)
    if(this.guess() === 'correct') {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = GuessingGame
