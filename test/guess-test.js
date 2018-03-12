const assert = require('chai').assert
const GuessingGame = require('../lib/guess')

describe("Guessing Game", () => {
  it("will be unsolved at the start", () => {
    game = new GuessingGame(20)
    assert.equal(game.isSolved(), false)
  })

  it("can tell if a guess is high/low/correct", () => {
    game = new GuessingGame(20)
    assert.equal(game.guess(5), 'low')
    assert.equal(game.guess(40), 'high')
    assert.equal(game.isSolved(), false)

    assert.equal(game.guess(20), 'correct')
    assert.equal(game.isSolved(), true)
  })


})
