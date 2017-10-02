function GuessingGame(number) {
  this.answer = number;
	this.solved = false;
	this.isSolved = function() {
        if (this.solved) {
            return true;
        } else {
            return false;
        }
    };
  this.guess = function(userGuess) {
      if (userGuess === this.answer) {
          this.solved = true;
          return "correct";
      } else if (userGuess < this.answer) {
          return "low";
      } else if (userGuess > this.answer) {
          return "high";
      }
  }
};

module.exports = GuessingGame
