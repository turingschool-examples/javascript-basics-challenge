class GuessingGame {
  constructor (answer) {
    this.answer = answer
    this.solved = false
  }

  guess (guess) {
    if (guess === this.answer) {
      this.solved = true
      return "correct"
    } else if (guess < this.answer){
      return "low"
    } else {
      return "high"
    }
  }

  isSolved () {
    return this.solved
  }
}

module.exports = GuessingGame
