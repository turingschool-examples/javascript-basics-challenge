function GuessingGame(number) {
  this.isSolved = false;
  this.guess = function(guess) {
    if (guess === number) {
      this.isSolved = true;
      return "correct";
    } else if (guess > number) {
      this.isSolved = false;
      return "high";
    } else if (guess < number) {
      this.isSolved = false;
      return "low";
    };
  };
};

module.exports = {
  GuessingGame: GuessingGame
}
