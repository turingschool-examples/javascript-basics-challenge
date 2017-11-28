const assert = require("chai").assert;
const GuessingGame = require("../lib/guessingGame");

describe("Guessing Game", function() {
  var game = new GuessingGame(10);

  it("Initializes", function() {
    assert.equal(game.answer, 10);
  });

  it("Tells guess was high", function() {
    assert.equal(game.guess(20), "high");
    assert.isFalse(game.isSolved);
  });

  it("Tells guess was low", function() {
    assert.equal(game.guess(5), "low");
    assert.isFalse(game.isSolved);
  });

  it("Is winnable", function() {
    assert.isFalse(game.isSolved);
    assert.equal(game.guess(10), "correct");
    assert.isTrue(game.isSolved);
  });
});