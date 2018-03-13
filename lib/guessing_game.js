function GuessingGame(answer) {
  this.answer = answer

  this.guess = function(guess){
    if(guess > answer) {
      return 'high'
    }
    else if(guess < answer) {
      return 'low'
    }
    else {
      return 'correct'
    }
  }
}

module.exports = GuessingGame
