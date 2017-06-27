function GuessingGame(answer) {
  this.answer = answer;
  this.solved = false;
}

GuessingGame.prototype.guess = function(guess) {
  if(guess > this.answer) {
    return 'high';
  } else if (guess < this.answer) {
    return 'low';
  } else {
    this.solved = true
    return 'correct';
  }
}

GuessingGame.prototype.isSolved = function() {
  return this.solved;
}

module.exports = GuessingGame
