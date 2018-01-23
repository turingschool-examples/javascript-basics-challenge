var pry = require('pryjs');


function GuessingGame(answer) {
  this.answer = answer;
  this.guess = function (guess) {
    this.current_guess = guess;
    if(guess === this.answer){
        return 'correct';
        }
    else if (guess > this.answer){
      return 'high';
      }
    else if (guess < this.answer){
      return 'low';
      }
    }
  this.isSolved = function(){

    if(this.current_guess === this.answer){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports = {GuessingGame}
