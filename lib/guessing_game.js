function Guess(num) {
  this.num = num;
  this.solved = false;
}

Guess.prototype.guess = function(number) {
  if (number < this.num) {
    return 'low';
  }

  if (number > this.num) {
    return 'high';
  }

  this.solved = true;
  return 'correct';
}

Guess.prototype.isSolved = function() {
  return this.solved;
}
module.exports = Guess;
