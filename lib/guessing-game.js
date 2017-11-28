function GuessingGame(input) {
  this.answer = input;
  this.lastGuess = undefined;
}

GuessingGame.prototype.guess = function(int) {
  this.lastGuess = int;
  if(this.lastGuess > this.answer) {
    return 'high';
  } else if(this.lastGuess < this.answer) {
    return 'low';
  } else {
    return 'correct';
  }
};

GuessingGame.prototype.isSolved = function() {
  if(this.lastGuess === this.answer) {
    return true;
  } else {
    return false;
  }
};

module.exports = GuessingGame;