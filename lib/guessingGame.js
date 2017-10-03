module.exports = GuessingGame

function GuessingGame(number) {
  this.answer = number
  this.userGuess = 0
  this.isSolved = function() {
    if (this.userGuess == this.answer) {
      return true
    } else {
      return false
    }
  }
  this.guess = function(userInput){
    if (userInput == this.answer){
      this.userGuess = userInput
      return 'correct';
    } else if (userInput < this.answer) {
      return 'low';
    } else {
      return 'high';
    }
  }
}
