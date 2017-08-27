class GuessingGame {
  constructor(answer) {
    this.answer = answer
    this.solved = false
  }

  isSolved() {
    return this.solved
  }

  guess(num) {
    if (num === this.answer) {
      this.solved = true
      return "correct"
    } else if (num > this.answer) {
      return "high"
    } else if (num < this.answer) {
      return "low"
    }
  }

}

module.exports = GuessingGame
