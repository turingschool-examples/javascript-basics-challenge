const assert = require('chai').assert
const GuessingGame = require('../lib/guessingGame')

describe('GuessingGame prototype', function() {
  context('initialized with an integer', function () {
    it('has an .answer', function() {
      var game = new GuessingGame(20)
      assert.equal(game.answer, 20)
    })
  })

  context('guess(num)', function() {
    it('returns low if the guess is less than the answer', function() {
      var game = new GuessingGame(20)
      assert.equal(game.guess(19), 'low')
    })

    it('returns high if the guess is greater than the answer', function() {
      var game = new GuessingGame(20)
      assert.equal(game.guess(21), 'high')
    })

    it('returns correct if the guess is the same as the answer', function() {
      var game = new GuessingGame(20)
      assert.equal(game.guess(20), 'correct')
    })
  })

  context('isSolved()', function() {
    it('returns false if the correct answer has not been guessed', function() {
      var game = new GuessingGame(20)
      assert.isFalse(game.isSolved())
    })
    
    it('returns true after the correct answer has been guessed', function() {
      var game = new GuessingGame(20)
      assert.isFalse(game.isSolved())
      game.guess(20)
      assert.isTrue(game.isSolved())
    })
  })
})
