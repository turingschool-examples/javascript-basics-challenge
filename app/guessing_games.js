exports.GuessingGame = function(answer) {
  this.answer = answer;
  var boogabooga = false;

  this.guess = function(guess) {
    if (guess > answer) {
      return "high";
    }
    else if (guess < answer) {
      return "low";
    }
    else {
      boogabooga = true;
      return "correct";
    }
  };

  this.isSolved = function() {
    if (boogabooga === true) {
      return true;
    }
    else {
      return false;
    }
  };
};
