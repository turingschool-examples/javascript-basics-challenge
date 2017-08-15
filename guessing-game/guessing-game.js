class guessingGame {
  constructor(val) {
    this.answer = val;
    this.solved = false;
  }

  isSolved() {
    return this.solved;
  }

}

module.exports = guessingGame;
