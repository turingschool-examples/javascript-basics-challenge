class guessingGame {
  constructor(answer = Math.round(Math.random() * 100) + 1) {
    this.answer = answer;
    this.solved = false;
  }

  isSolved() {
    return this.solved;
  }

  guess(num) {
    if (num === this.answer) {
      this.solved = true;
      return "Correct!";
    } else if (num > this.answer) {
      return "Too high!";
    } else {
      return "Too low!";
    }
  }
}

module.exports = guessingGame
