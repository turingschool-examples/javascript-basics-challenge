const assert = require('chai').assert;
const pry = require('pryjs')
const GuessingGame = require('../lib/guessing-game')

describe('Guessing Game', function(){
  it('starts with a number', function() {
    var game = new GuessingGame(20)

    assert.equal(game.number, 20)
  });

  it('it can tell if number is too high or too low', function() {
    var game = new GuessingGame(20)

    assert.equal(game.guess(10), 'low')
    assert.equal(game.guess(50), 'high')
    assert.isFalse(game.isSolved)
  });

  it('can tell if correct number is guessed', function() {
    var game = new GuessingGame(20)

    assert.equal(game.guess(20), 'correct')
    assert.isTrue(game.isSolved)
  });
})
