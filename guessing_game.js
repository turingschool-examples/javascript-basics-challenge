function GuessingGame(answer){
  this.answer = answer;
  this.solved = false;
  this.isSolved = function(){
    return this.solved;
  };
  this.guess = function(num){
    if(num > this.answer){
      return 'high';
    } else if (num < this.answer) {
      return 'low';
    } else {
      this.solved = true;
      return 'correct';
    }
  };
}
module.exports = GuessingGame;
