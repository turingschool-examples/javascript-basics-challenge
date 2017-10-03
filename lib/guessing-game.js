
function GuessingGame(answer){
  this.guess = function(guess){
    if (guess > answer){
      return "high";
    } else if (guess < answer){
      "low"
    } else {
      return false
    };
  };

  this.isSolved = function(){
    if (guess === answer){
      return true
    } else {
      return false
    };
  };
};

var game = new GuessingGame(20);
console.log(game.isSolved());
