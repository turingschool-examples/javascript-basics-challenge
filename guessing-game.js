function GuessingGame(answer) {
  this.answer = answer;
  this.solved = false;
  this.isSolved = function() {
    return this.solved
  }
  this.guess = function(number) {
    if (number > answer) {
      return "high"
    } else if (number < answer) {
      return "low"
    } else {
      this.solved = true
      return "correct"
    }
  }
}

module.exports = GuessingGame
