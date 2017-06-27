var pry = require('pryjs');

function GuessingGame(number){
  this.answer = number;
  this.solved = false;
}
GuessingGame.prototype.guess = function(number){
  if(number>this.answer){
    return 'high'
  }
  else if(number<this.answer){
    return 'low'
  }
  else {
    this.solved = true
    return 'correct'
  }
}

GuessingGame.prototype.isSolved = function(){
  return this.solved
}

console.log(new GuessingGame(20))

module.exports = GuessingGame