function GuessingGame(initialEntry){
  this.correctAnswer = initialEntry,
  this.lastGuess = null,
  this.isSolved = function(){
    if(this.lastGuess == this.correctAnswer){
      return true
    }else{
      return false
    }
  }
  this.guess = function(guess){
    this.lastGuess = guess
    if(this.lastGuess == this.correctAnswer){
      return "correct"
    }else if(this.lastGuess < this.correctAnswer){
      return "low"
    }else if(this.lastGuess > this.correctAnswer){
      return "high"
    }
  };
};

module.exports = GuessingGame
