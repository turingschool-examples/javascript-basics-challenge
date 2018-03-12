class GuessingGame {

  constructor(answer) {
    this.answer = answer
    this.solved = false
  }

  guess(number) {
    if (number > this.answer) {
      return "high"
    } else if (number === this.answer) {
      return "correct"
      this.solved = true
    } else {
      return "low"
    }
  }

  isSolved() {
    return this.solved
  }

}

module.exports = GuessingGame


