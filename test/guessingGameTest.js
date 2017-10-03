const assert = require('chai').assert
const game = require('../guessingGame')

describe('testing guessingGame', function() {
  context('tests guess', function() {
    it('is too low', function() {
      assert.equal(game.guess(49), false)
    })

    it('is too high', function() {
      assert.equal(game.guess(51), false)
    })

    it('is correct', function() {
      assert.equal(game.guess(50), true)
    })
  })
})
