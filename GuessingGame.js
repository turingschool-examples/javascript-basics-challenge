function GuessingGame(answer) {
  this.answer = answer;
  this.guess = function guess(guess) {
    if (guess > this.answer) {
      return 'high';
    } else if (guess === this.answer) {
      this.solved = true;
      return 'correct';
    } else if (guess < this.answer) {
      return 'low';
    }
  };
  this.isSolved = function isSolved() {
    if (this.solved === true) {
      return true;
    } else {
      return false;
    }
  }
}
