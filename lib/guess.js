class GuessingGame {
  constructor(answer){
    this.answer = answer
    this.currentGuess = null
  }

  isSolved(){
    return this.currentGuess === this.answer ? true : false
  }

  guess(number){
    this.currentGuess = number
    if(this.currentGuess < this.answer){
      return 'low'
    } else if (this.currentGuess > this.answer) {
      return 'high'
    } else {
      return 'correct'
    }
  }
}

module.exports = GuessingGame
