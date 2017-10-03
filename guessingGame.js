function GuessingGame(guess) {
  this.guess = function correct(guess) {
    if (guess === 20) {
      return "correct";
    } else if (guess > 20) {
      return "high";
    } else if (guess < 20) {
      return "low";
    };
  };
};

module.exports = {
  GuessingGame: GuessingGame
}
