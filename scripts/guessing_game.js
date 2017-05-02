var pry = require('pryjs');

function GuessingGame(answer) {
  this.answer   = answer;
  var currentGuess = 0
  this.isSolved = function (){
    if (answer != currentGuess){
      return false
    } else {
      return true
    }
  }
  this.guess = function (guess){
    currentGuess = guess
    if (guess < answer) {
      return "low"
    } else if (guess > answer) {
      return "high"
    } else {
      return "correct"
    }
  }
}
module.exports = {GuessingGame};
