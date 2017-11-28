var readline = require('readline');


function GuessingGame(num) {
  this.num = num;
  this.solved = false
  this.guess = function(input) {
    if(input === this.num) {
      this.solved = true;
      return 'correct';
    }
    else if(input < this.num) {
      this.solved = false;
      return 'low';
    }
    else if(input > this.num) {
      this.solved = false;
      return 'high';
    }
    else {
      return "that's not a vaild guess"
    }
  }
  this.isSolved = function() {
    return this.solved
  }
}

module.exports = GuessingGame
