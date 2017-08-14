class guessingGame {
  constructor(answer) {
    this.answer = answer
    this.solved = false
  }

  isSolved() {
    return this.solved
  }

  guess(num) {
    if(num === this.answer) this.solved = true
  }
}

module.exports = guessingGame
