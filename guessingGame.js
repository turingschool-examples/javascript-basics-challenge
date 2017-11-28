class GuessingGame {
  constructor (answer) {
    this.answer = answer
    this.lastGuess = undefined
  }

  guess (num) {
    this.lastGuess = num;
    if (num === this.answer) {
      return "Correct!";
    } else if (num < this.answer) {
      return "low";
    } else if (num > this.answer) {
      return "high";
    } else {
      return "try again";
    }
  }

  isSolved () {
    if (this.lastGuess === this.answer) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = GuessingGame;
