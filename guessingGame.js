function GuessingGame(answer) {
  this.answer = answer;
  this.lastGuess = null
  this.guess = function(number) {
    if (number == answer) {
      this.lastGuess = number;
    } else if (number > answer) {
      return "High";
    } else if (number < answer) {
      return "Low";
    }
  }
  this.isSolved = function() {
    if (this.lastGuess == this.answer) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = GuessingGame
