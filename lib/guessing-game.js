module.exports = {
  GuessingGame: function GuessingGame(answer){
    this.answer = answer
    this.solved = false
    this.isSolved = function() {
      return this.solved
    }
    this.guess = function(number) {
      this.number = number
      if (number !== answer) {
        if (number < answer) {
          return 'low'
        } else {
          return 'high'
        }
      } else if (number === answer) {
        this.solved = true
        return 'correct'
      }
    }
}
}
