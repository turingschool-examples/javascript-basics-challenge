const assert = require('chai').assert
var GuessingGame = require('../lib/guessing_game.js')


describe('guessing game', function() {
  it('it returns high if guess is high', function() {
    var game = new GuessingGame(5)
    assert.equal(game.guess(7), 'high')
  })

  it('it returns low if guess is low', function() {
    var game = new GuessingGame(5)
    assert.equal(game.guess(3), 'low')
  })

  it('it returns correct if guess is right', function() {
    var game = new GuessingGame(5)
    assert.equal(game.guess(5), 'correct')
  })
});
