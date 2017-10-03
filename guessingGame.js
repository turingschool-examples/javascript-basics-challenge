var pry = require('pryjs')

// var randomNumber = Math.floor(Math.random() * 100);
var randomNumber = 50 //for testing

function guess(number) {
  if (number == randomNumber) {
    console.log("correct")
    return true;
  } else if (number > randomNumber) {
    console.log("high")
    return false;
  } else {
    console.log("low")
    return false;
  }
}

function isSolved(number) {
  guess(number)
}

function guessingGame(number) {
  isSolved(number)
}


module.exports = {guess, isSolved, guessingGame}
