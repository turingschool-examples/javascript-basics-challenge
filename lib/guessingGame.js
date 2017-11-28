class GuessingGame {
  constructor (answer) {
    this.answer = answer
    this.solved = false
  }
  guess (guess) {
    if(guess < this.guess) {
      return 'low';
    } else if(guess === this.guess) {
      this.solved = true;
      return 'correct';
    } else {
      return 'high';
    }
  }
  
  isSolved () {
    return this.solved
  }
}
