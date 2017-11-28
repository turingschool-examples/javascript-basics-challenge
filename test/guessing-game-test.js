const assert = require('chai').assert;
const GuessingGame = require('../guessing-game');
var pry = require('pryjs');

describe('Guessing Game', function(){
  it('can create a Guessing Game Object', function(){
    var game = new GuessingGame(20);
    assert.equal(game.isSolved(), false)
    assert.equal(game.guess(5), 'low')
    assert.equal(game.guess(40), 'high')
    assert.equal(game.isSolved(), false)
    assert.equal(game.guess(20), 'correct')
    assert.equal(game.isSolved(), true)
  })
})
