function randomNum(input){
  return Math.floor((Math.random() * input) + 1);
}

class GuessingGame{
  constructor(number){
    this.answer = randomNum(number);
  }
  guess(guess){
    if(guess === this.answer){
      return "You got it!"
    } else if (guess > this.answer){
      return "Too High"
    } else {
      return "Too Low!"
    }
  }
}


module.exports = {
  randomNum: randomNum, GuessingGame: GuessingGame
}

