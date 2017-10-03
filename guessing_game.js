function GuessingGame(answer) {
    this.answer = answer;
    this.solved = false;
    this.guess = function (guess) {
        if (guess === this.answer) {
            this.solved = true;
            return 'Correct';
        }
        else if (guess > this.answer){
            return 'High';
        }
        else {
            return 'Low'
        }
    };
    this.isSolved = function () {
        return this.solved
    }
}

module.exports = GuessingGame;

