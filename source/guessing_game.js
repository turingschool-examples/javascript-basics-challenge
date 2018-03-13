pry = require('pryjs')

function GuessingGame(answer) {
  this.answer = answer
  this.guess = function(num) {
    if (num < this.answer) {
      alert("low")
    } else if ( num > this.answer) {
      alert("high")
    } else if (num === this.answer) {
      alert("correct")
    }
    this.last_guess = num
  }
  this.isSolved = function() {
    this.last_guess === this.answer ? true : false
  }
}

eval(pry.it)

// game.isSolved();   // => false
//
// game.guess(5);     // => 'low'
// game.guess(40);    // => 'high'
// game.isSolved();   // => false
//
// game.guess(20);    // => 'correct'
// game.isSolved()    // => true
