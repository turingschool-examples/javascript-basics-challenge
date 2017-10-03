function GuessingGame(number) {
  this.flag = false;
  this.isSolved = function() {
    return this.flag;
  };
  this.guess = function(guess) {
    if (guess === number) {
      this.flag = true;
      return "correct";
    } else if (guess > number) {
      this.flag = false;
      return "high";
    } else if (guess < number) {
      this.flag = false;
      return "low";
    };
  };
};

module.exports = {
  GuessingGame: GuessingGame
}
