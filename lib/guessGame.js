function GuessingGame(answer) {
  this.answer    = answer
  this.solved    = false
  this.isSolved  = () => {
    return this.solved
  }
  this.guess     = (input) => {
    if(input < answer) {
      return "Too low, guess again"
    } else if(input > answer) {
      return "Too high, guess again"
    } else if(input == answer) {
      this.solved = true
      return "Correct. Winner, Winner chicken dinner!"
    } else {
      return "You broke it; I told you not to break it."
    }
  }
}

module.exports = GuessingGame
