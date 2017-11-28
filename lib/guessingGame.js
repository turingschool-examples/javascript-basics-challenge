class GuessingGame {
  constructor(answer) {
    this.answer = answer;
    this.isSolved = false;
  };

  guess(guess) {
    if (guess > this.answer) {
      return "high";
    } else if (guess < this.answer) {
      return "low";
    } else if (guess === this.answer) {
      this.isSolved = true;
      return "correct";
    };
  };
};

module.exports = GuessingGame;