
function GuessingGame(number) {
    this.number = number;
    this.isSolved = false;

    this.guess = function(userGuess) {
      if (userGuess === this.number) {
        this.isSolved = true
        return "correct"
      }else if(userGuess < this.number) {
        return "low"
      }else if (userGuess > this.number) {
        return "high"
      }
    }
};

module.exports = GuessingGame;
