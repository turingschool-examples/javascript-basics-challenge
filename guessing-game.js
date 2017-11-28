var pry = require('pryjs');

function GuessingGame(answer) {
  this.answer = answer
  this.guesses = [-1];
  this.isSolved = function(){
    for (var i = 0; i <= this.guesses.length; i++) {
      if (this.guesses[i] == this.answer) {
        return true;
      }
    }
    return false;
  }
  this.guess = function(number){
    this.guesses.push(number)
    if (number == this.answer) {
      return 'correct';
    } else if (answer < number) {
      return 'high';
    } else if (answer > number) {
      return 'low';
    }
  }
}

module.exports = GuessingGame;
