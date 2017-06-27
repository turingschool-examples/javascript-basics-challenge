function GuessingGame(num){
  this.answer = num
  this.solved = false
}

GuessingGame.prototype.guess = function(guessNum){

  if (guessNum > this.answer)
  { return 'high' }
  else if (guessNum < this.answer)
  { return 'low' }
  else
  { this.solved = true
    return 'correct' }

}

GuessingGame.prototype.isSolved = function(){
  return this.solved
}

module.exports = GuessingGame


  // this.isSolved = function() {






// var game = new GuessingGame(20);
//
// game.isSolved();   // => false
//
// game.guess(5);     // => 'low'
// game.guess(40);    // => 'high'
// game.isSolved();   // => false
//
// game.guess(20);    // => 'correct'
// game.isSolved()    // => true
