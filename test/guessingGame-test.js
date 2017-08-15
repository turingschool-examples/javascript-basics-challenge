const assert = require('chai').assert
const GuessingGame = require('../guessingGame')

describe('GuessingGame constructor', function() {
  it('builds a new object', function() {
    var game = new GuessingGame(20);
    assert.isObject(game);
  });

  it('returns false if it has not been solved', function() {
    var game = new GuessingGame(20);
    assert.isFalse(game.isSolved());
  });

  it('returns low if the guess is lower than the answer', function() {
    var game = new GuessingGame(20);
    assert.equal(game.guess(5), 'low');
  });

  it('returns high if the guess is higher than the answer', function() {
    var game = new GuessingGame(20);
    assert.equal(game.guess(40), 'high');
  });

  it('returns correct if the guess is equal to the answer', function() {
    var game = new GuessingGame(20);
    assert.equal(game.guess(20), 'correct');
  });

  it('returns true if it has been solved', function() {
    var game = new GuessingGame(20);
    game.guess(20);
    assert.isTrue(game.isSolved());
  })
})
