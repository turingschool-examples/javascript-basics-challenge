const assert = require('chai').assert
const GuessingGame = require('./guessingGame')

describe('GuessingGame can evaluate guesses', function() {
  context('when a high guess is given', function() {
    it('returns "high"', function() {
      var game = new GuessingGame(20);
      assert.equal(game.guess(40), 'High');
    })
  })

  context('when a low guess is given', function() {
    it('returns "low"', function() {
      var game = new GuessingGame(20);
      assert.equal(game.guess(5), 'Low');
    })
  })

  context('when isSolved is run before any guesses', function() {
    it('returns false', function() {
      var game = new GuessingGame(20);
      assert.isFalse(game.isSolved());
    })
  })

  context('when isSolved is run on an incorrect guess', function() {
    it('returns false', function() {
      var game = new GuessingGame(20);
      game.guess(5);
      assert.isFalse(game.isSolved());
    })
  })

  context('when isSolved is run on a correct guess', function() {
    it('returns true', function() {
      var game = new GuessingGame(20);
      game.guess(20);
      assert.isTrue(game.isSolved());
    })
  })
})
