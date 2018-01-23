function GuessingGame(num) {
  this.answer = num;
  this.isSolved = function() {
    return false
  }
  this.guess = function(otherNum) {
    if (otherNum === this.answer) {
      this.isSolved = function() {
        return true
      } 
      return 'correct'
    } else if (otherNum > this.answer ) {
      return 'high'
    } else {
      return 'low'
    }
  }
}

module.exports = GuessingGame;
