module.exports = game

function game(num){
  this.num = num;
  this.isSolved = false;
  this.guess = function(guess){
    if(guess === num) {
      this.isSolved = true;
      return "correct"
    } else if (guess > num){
      return "too high";
    } else if (guess < num) {
      return "too low"
    }
  }
}
