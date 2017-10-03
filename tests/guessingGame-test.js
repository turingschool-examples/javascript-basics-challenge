const assert = require('chai').assert
const guess = require('../guessingGame')

describe("guessing game", function() {
  it("returns correct if guess is correct", function() {
    var game = new guess.GuessingGame(20);
    assert.deepEqual(game.guess(20), "correct");
    assert.deepEqual(game.isSolved(), true);
  });

  it("returns low if guess is low", function() {
    var game = new guess.GuessingGame(20);
    assert.deepEqual(game.guess(10), "low");
    assert.deepEqual(game.isSolved(), false);
  });

  it("returns high if guess is high", function() {
    var game = new guess.GuessingGame(20);
    assert.deepEqual(game.guess(30), "high");
    assert.deepEqual(game.isSolved(), false);
  });

  it("returns correct outputs based on guesses", function() {
    var game = new guess.GuessingGame(20);
    assert.deepEqual(game.isSolved(), false);

    assert.deepEqual(game.guess(5), "low");
    assert.deepEqual(game.guess(40), "high");
    assert.deepEqual(game.isSolved(), false);

    assert.deepEqual(game.guess(20), "correct");
    assert.deepEqual(game.isSolved(), true);
  });
});

