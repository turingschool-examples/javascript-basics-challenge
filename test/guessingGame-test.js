const assert = require('chai').assert
const guessingGame = require('../scripts/guessingGame')

describe('guessingGame', () => {
  context('game solved', () => {
    it('returns true', () => {
      game = new guessingGame(1)
      game.guess(1)
      assert.isTrue(game.isSolved())
    })
  })

  context('when the guess is high', () => {
    it('it returns "high"', () => {
      game = new guessingGame(1)
      assert.equal(game.guess(10), "high")
    })
  })

  context('when the guess is low', () => {
    it('it returns "low"', () => {
      game = new guessingGame(10)
      assert.equal(game.guess(1), "low")
    })
  })

  context('when the guess is correct', () => {
    it('it returns "correct"', () => {
      game = new guessingGame(10)
      assert.equal(game.guess(10), "correct")
    })
  })
})
