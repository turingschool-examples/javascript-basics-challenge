class GuessingGame {
  constructor(solution) {
    this.solution = solution;
    this.solved = false;
  }
  guess(guess) {
    if(guess < this.solution) {
      return 'low';
    } else if(guess === this.solution) {
      this.solved = true;
      return 'correct';
    } else {
      return 'high';
    }
  }

  isSolved() {
    return this.solved
  }
}
module.exports = GuessingGame
