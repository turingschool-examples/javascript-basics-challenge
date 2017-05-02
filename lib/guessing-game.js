pry = require('pryjs');

function GuessingGame(answer){
  this.solved = false;
  this.answer = answer;
}

GuessingGame.prototype.guess = function(number) {
  if(number == this.answer) {
    this.solved = true
    return "correct"
  } else if(number < this.answer) {
    return "low"
  } else {
    return "high"
  }
}
GuessingGame.prototype.isSolved = function () {
  return this.solved;
}

module.exports = GuessingGame
