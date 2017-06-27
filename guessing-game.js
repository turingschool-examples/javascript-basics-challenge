function GuessingGame(answer) {
  this.answer = answer;
  this.last_guess = null
  this.guess = function(guess) {
    this.last_guess = guess
    if (guess > answer) return "high"
    if (guess == answer) return "correct"
    if (guess < answer) return "low"
  }
  this.isSolved = function() {
    return (this.answer == this.last_guess);
  }
}

module.exports = GuessingGame
