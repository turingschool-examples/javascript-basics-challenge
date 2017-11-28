class GuessingGame {
  constructor(answer) {
    this.answer = answer
    this.guessedCorrectly = false
  }

  guess(n) {
    if (n > this.answer)
      return 'high'
    else if (n < this.answer)
      return 'low'
    else
      this.guessedCorrectly = true
      return 'correct'
  }

  isSolved() {
    return this.guessedCorrectly
  }
}

module.exports = GuessingGame
