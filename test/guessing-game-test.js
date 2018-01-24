var assert = require('chai').assert;
var pry = require('pryjs')
var GuessingGame = require('../lib/guessing-game')

describe('Guessing Game', function () {
  it('returns low or high based on guess', function () {
    var game = new GuessingGame(30)

    assert.equal(game.guess(20), 'low')
    assert.equal(game.guess(70), 'high')
    assert.isFalse(game.isSolved)
  });

  it('returns correct if correct number is guessed', function () {
    var game = new GuessingGame(123)

    assert.equal(game.guess(123), 'correct')
    assert.isTrue(game.isSolved)
  });
})
