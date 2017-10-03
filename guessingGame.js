var pry = require('pryjs')

var randomNumber = Math.floor(Math.random() * 100);

function guessingGame() {
  function isSolved(number) {
    function guess(number) {
      if (number == randomNumber) {
        return true;
      } else {
        return guess(number);
      }
    }
  }
}


guessingGame()
