const assert = require('chai').assert
const GuessingGame = require('../lib/guessingGame')

describe('GuessingGame Methods', function() {
  it('should return correct output', function() {
    var game = new GuessingGame(20);
    assert.isFalse(game.isSolved())
    assert.equal('low', game.guess(5))
    assert.equal('high', game.guess(40))
    assert.isFalse(game.isSolved())

    assert(game.guess(20));    // => 'correct'
    assert(game.isSolved())
  })
})
