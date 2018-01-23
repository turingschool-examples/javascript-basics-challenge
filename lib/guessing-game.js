module.exports = {
  GuessingGame: function GuessingGame(answer) {
  this.answer = answer
  this.win = false
  this.guess = function(number) {
    if (number < this.answer) { return 'low' }
    if (number > this.answer) { return 'high' }
    if (number == this.answer) { this.win = true; return 'correct' }
  }
  this.isSolved = function() {
    if (this.win == true) {
      return true
    } else {
      return false
    }
  }
}}