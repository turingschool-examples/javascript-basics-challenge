function guessingGame() {
  this.isSolved = false;
  this.number = Math.round(Math.random() * 100);
  
  
  this.guess = function(guess) {
    if (guess == this.number) {
      this.solved = true;
      return "correct"
    } else if ( guess > this.number) {
      return 'high';
    } else {
      return 'low';
    }
  };
}

module.exports = {guessingGame};