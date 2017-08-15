class guessingGame {
  constructor(answer = Math.floor(Math.random() * 100) + 1) {
    this.answer = answer
    this.solved = false
  }

  isSolved() {
    return this.solved
  }

  guess(num) {
    if(num === this.answer) {
      this.solved = true
      return 'correct'
    } else if (num > this.answer) {
      return 'high'
    } else {
      return 'low'
    }
  }
}

module.exports = guessingGame
