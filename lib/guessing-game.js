class GuessingGame {
  constructor(num) {
    this.number = num;
    this.isSolved = false;
  };

  guess(num) {
    if (num > this.number) {
      return 'high'
    } else if (num < this.number) {
      return 'low'
    } else if (num === this.number) {
      this.isSolved = true
      return 'correct'
    }
  }
}

module.exports = GuessingGame;