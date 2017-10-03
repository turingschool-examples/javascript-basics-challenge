const assert = require('chai').assert;
const GuessingGame  = require('../guessing_game').GuessingGame


describe("guessing game function", function() {
  it("returns false if no answer is given", function() {
    var game = new GuessingGame(20);
    assert.isFalse(game.isSolved())
  });

  it("returns low if answer is low", function() {
    var game = new GuessingGame(20);
    assert.equal(game.guess(5),'low')
  });

  it("returns high if answer is high", function() {
    var game = new GuessingGame(20);
    assert.equal(game.guess(40), 'high')
  });

  it("returns correct if answer is correct", function() {
    var game = new GuessingGame(20);
    assert.equal(game.guess(20), 'correct')
  });
});
