class GuessingGame {
  constructor(number) {
    this.answer = number
    this.solved = false
  }

  isSolved() {
    return this.solved
  }

  guess(number) {
    let result = this.answer - number

    if (result < 0) {
      return 'high'
    } else if (result > 0) {
      return 'low'
    } else {
      this.solved = true
    }
  }
}

var exports = module.exports = { GuessingGame }