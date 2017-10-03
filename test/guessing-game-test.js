const assert = require('chai').assert
const GuessingGame = require('../lib/guessing-game')

describe("Guessing game", function() {
  it("returns high, low, correct, and solved", function() {
    let game = new GuessingGame(20)

    let result = game.guess(5)
    assert.equal(result, 'low')
    assert.equal(game.isSolved, false)

    result = game.guess(25)
    assert.equal(result, 'high')
    assert.equal(game.isSolved, false)

    result = game.guess(20)
    assert.equal(result, 'correct')
    assert.equal(game.isSolved, true)
  });
});
