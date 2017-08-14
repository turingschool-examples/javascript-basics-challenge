class GuessingGame {
    constructor(answer, solved = false) {
        this.answer = answer
        this.solved = false
    }

    isSolved() {
        return this.solved
    }

    guess(num) {
        if (num === undefined) {
            return false;
        } else if (num > this.answer) {
            return "high";
        } else if (num < this.answer) {
            return "low";
        } else if (num === this.answer) {
            this.solved = true
            return "correct";
        }
    }
}


module.exports = GuessingGame