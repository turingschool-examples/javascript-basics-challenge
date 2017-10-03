const assert = require('chai').assert
const guess = require('../guessingGame')

describe("guessing game", function() {
  it("returns correct if guess is correct", function() {
    var game = new guess.GuessingGame(20);
    assert.deepEqual(game.guess(20), "correct");
  });
});

