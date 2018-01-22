exports.GuessingGame = function(answer) {
  this.answer = answer;
  var solved = false;

  this.guess = function(g) {
    if (g > answer) {
      return "too high, motherfucka";
    }
    else if (g < answer) {
      return "too low, too slow";
    }
    else {
      solved = true;
      return "that is correct!";
    }
  }

  this.isSolved = function() {
    if (solved === true) {
      return true;
    }
    else {
      return false;
    }
  }
}
