exports.GuessingGame = function(answer){
  this.answer = answer;
  var solved = false;

  this.guess = function(number) {
    if (number > answer) {
      return "too high"
    }
    else if (number < answer) {
      return "too low"
    }
    else if (number === answer) {
      solved = true
      return "correct!"
    }
  }
  this.isSolved = function() {
    if (solved === true) {
      return true
    }
    else {
      return false
    }
  }
}