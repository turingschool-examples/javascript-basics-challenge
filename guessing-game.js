function GuessingGame(answer) {
  this.answer = answer
  this.solved = false
  
  this.guess = function(guess) {
    if (guess == answer) {
      this.solved = true
      return 'correct'
    } else if (guess > answer) {
      return 'high'
    } else if (guess < answer) {
      return 'low'
    } else {
      return false
    }
  }
  
 this.isSolved = function() {
   return this.solved
 }
}

module.exports = GuessingGame