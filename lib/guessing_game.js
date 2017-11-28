class GuessingGame {
  constructor(num) {
    this.secretNum = num;
    this.isSolved = false;
  };

  guess(num) {
    if (num > this.secretNum) {
      return 'high';
    } else if (num < this.secretNum) {
      return 'low';
    } else if (num === this.secretNum) {
      this.isSolved = true;
      return 'correct';
    };
  };
};

module.exports = GuessingGame;
