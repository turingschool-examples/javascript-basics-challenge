const assert = require('chai').assert
const GuessingGame = require('../lib/guessing_game')

describe('Guessing Game', function() {
  it("can play a game", function() {
    var game = new GuessingGame(20)
    assert.equal(game.isSolved(), false)
    assert.equal(game.guess(5), "low")
    assert.equal(game.guess(45), "high")
    assert.equal(game.isSolved(), false)
    assert.equal(game.guess(20), "correct")
    assert.equal(game.isSolved(), true)
  })
})
