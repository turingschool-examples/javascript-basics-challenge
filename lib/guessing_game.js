var pry = require('pryjs');
function GuessingGame(num){
  var num = num;
  var solvedStatus = false

  this.isSolved = function(swap){
    
    if(swap === "got it"){
      solvedStatus = true
    }
    return solvedStatus
  }

  this.guess = function(userGuess) {
    if(userGuess < num) {
      return "low"
    } else if (userGuess > num){
      return 'high'
    } else if (userGuess === num) {
      this.isSolved("got it")
      return 'correct'
    }
  };

}


module.exports = GuessingGame
