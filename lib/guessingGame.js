function GuessingGame(answer) {
  this.answer = answer;
  this.solved = false
}

GuessingGame.prototype.guess = function(num) {
  if (this.answer > num) {
    return 'low'
  } else if (this.answer < num) {
    return 'high'
  } else {
    this.solved = true;
    return 'correct'
  }
}

GuessingGame.prototype.isSolved = function() {
  return this.solved
}

module.exports = GuessingGame
