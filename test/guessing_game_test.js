
const assert = require('chai').assert;
const expect = require('chai').expect;
const GuessingGame = require('../lib/guessing_game')

describe('Guessing Game', function() {
  it("can tell if number is too high or low", function() {
    var game = new GuessingGame(20);

    assert.equal(game.guess(1), "low")
    assert.equal(game.guess(100), "high")
  })

  it("can tell if number is correct", function() {
    var game = new GuessingGame(20);

    assert.equal(game.guess(20), "correct")
    assert.equal(game.isSolved, true)
  })
})
