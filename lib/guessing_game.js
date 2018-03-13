module.exports = class GuessingGame {
  constructor(answer) {
    this.answer = answer;
    this.solved = false;
  }

  isSolved() {
    return this.solved;
  }

  guess(number) {
    if(number > this.answer) {
      return 'high';
    } else if(number < this.answer) {
      return 'low';
    } else {
      this.solved = true;
      return 'correct';
    }
  }

}
