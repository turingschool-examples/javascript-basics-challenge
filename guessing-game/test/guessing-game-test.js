var assert = require('chai').assert;
var guessingGame = require('../guessing-game')
var pry = require('pryjs')

describe("It can play a guessing game", function() {
  it("can tell you if the game is solved", function() {
    var game = new guessingGame(20);
    assert.equal(game.isSolved(), false);
    assert.equal(game.guess(5), "low");
    assert.equal(game.guess(45), "high");
    assert.equal(game.isSolved(), false);
    assert.equal(game.guess(20), "correct");
    assert.equal(game.isSolved(), true);
  })
})
