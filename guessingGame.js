function GuessingGame(answer) {
  this.answer = answer;
  this.recentGuess = null
  this.guess = function(num) {
    recentGuess = num
    if(num < answer){
      return "low";
    } else if(num > answer){
      return "high";
    } else if(num == answer){
      return "correct";
    }
  };
  this.isSolved = function () {
    if(this.guess(recentGuess) == "correct"){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { GuessingGame }