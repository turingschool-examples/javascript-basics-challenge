class GuessingGame {
    constructor(answer) {
        this.answer = answer;
        this.isSolved = false;
    }
    
    guess(guess) {
        if(guess > this.answer){
            return 'high'
        }
        else if(guess < this.answer){
            return 'low'
        }
        else
            return 'correct'
            this.isSolved = true
    }
  
}

module.exports  = GuessingGame
// export default 
// var game = new GuessingGame(20);
// game.guess(35)
