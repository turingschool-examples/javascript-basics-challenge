function GuessingGame(answer) {
  this.answer = answer;

  this.guess = function(response) {
    if (response > answer)  {
      return "high"
    } else {
      return "low"
    }
  }
}

module.exports = {
  GuessingGame
}
