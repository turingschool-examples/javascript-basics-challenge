function GuessingGame(answer) {
  this.answer = answer;
  this.solved = false;
  this.guess = function(guess) {
    if(this.answer === guess){
      this.solved = true;
      return 'correct';
    } else if (this.answer < guess) {
      return 'high';
    } else {
      return 'low';
    }
  };
  this.isSolved = function() {
    return this.solved;
  }
}

module.exports = GuessingGame
