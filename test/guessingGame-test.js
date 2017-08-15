const assert = require('chai').assert
const GuessingGame = require('../guessingGame')

describe('the guessingGame', function() {
	var game = new GuessingGame(20);
	it('can indicate an incorrect guess', function() {
		assert.equal(game.isSolved(), false);	
	})
	it('can inform if a guess is too low', function() {
		assert.equal(game.guess(5), 'low');
	})
	it('can inform if a guess is too high', function() {
		assert.equal(game.guess(25), 'high');
	})
	it('can inform if a guess is correct', function() {
		assert.equal(game.guess(20), 'correct');
	})
	it('can inform if the correct guess has already been made', function() {
		assert.equal(game.isSolved(), true);
	})
});
