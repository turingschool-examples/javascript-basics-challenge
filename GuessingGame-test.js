const assert = require('chai').assert;
const GuessingGame = require('./GuessingGame');

describe('GuessingGame', function() {
  context('isSolved function', function() {
    it('it returns false with no guess', function() {
      var game = new GuessingGame(20);
      assert.isFalse(game.isSolved())
    })
    it('it returns false if wrong guess', function() {
      var game = new GuessingGame(20);
      game.guess(5);
      assert.isFalse(game.isSolved())
    })
    it('it returns true if correct guess', function() {
      var game = new GuessingGame(20);
      game.guess(20);
      assert.isTrue(game.isSolved())
    })
  })
  context('guess function', function() {
    it('it returns low if guess is lower than answer', function() {
      var game = new GuessingGame(20);
      assert.equal(game.guess(5), 'low')
    })
    it('it returns high if guess is higher than answer', function() {
      var game = new GuessingGame(20);
      assert.equal(game.guess(40), 'high')
    })
    it('it returns correct if guess matches answer', function() {
      var game = new GuessingGame(20);
      assert.equal(game.guess(20), 'correct')
    })
  })
})
