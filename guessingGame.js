var GuessingGame = function(number) {
	this.number = number;
	this.solved = false;

	GuessingGame.prototype.isSolved = function() {
		return this.solved;
	}

	GuessingGame.prototype.guess = function(thisGuess) {
		if (thisGuess == this.number) {
			this.solved = true;
			return 'correct'
		} else if (thisGuess > this.number) {
			return 'high'
		} else if (thisGuess < this.number) {
			return 'low'
		}
	}
}


module.exports = GuessingGame