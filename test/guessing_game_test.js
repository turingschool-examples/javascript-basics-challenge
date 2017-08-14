const assert = require("chai").assert
const GuessingGame = require('../guessing_game')

const pry = require('pryjs')

it("can do the thing", function() {
    var game = new GuessingGame(20);
    assert.isFalse(game.isSolved())
    assert.equal(game.guess(5), "low")
    assert.equal(game.guess(40), "high")
    assert.isFalse(game.guess())
    assert.equal(game.guess(20), 'correct')
    assert.isTrue(game.isSolved())
})