class GuessingGame {
  constructor(answer) {
    this.answer = answer
    this.guessed = false
  }
  guess(num) {
    if (num === this.answer) {
      this.guessed = true
      return 'correct'
    } else if (num > this.answer) {
      return 'high'
    } else if (num < this.answer) {
      return 'low'
    }
  }
  isSolved() {
    return this.guessed
  }
}


module.exports = GuessingGame
