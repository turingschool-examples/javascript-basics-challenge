const assert = require('chai').assert
const guess = require('../guessingGame')

describe("guessing game", function() {
  it("returns correct if guess is correct", function() {
    var game = new guess.GuessingGame(20);
    assert.deepEqual(game.guess(20), "correct");
  });

  it("returns low if guess is low", function() {
    var game = new guess.GuessingGame(20);
    assert.deepEqual(game.guess(10), "low");
  });

  it("returns high if guess is high", function() {
    var game = new guess.GuessingGame(20);
    assert.deepEqual(game.guess(30), "high");
  });
});

