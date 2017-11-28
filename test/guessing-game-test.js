assert = require('chai').assert;
const GuessingGame = require('../lib/guessing-game')

describe('chai tests guessing game', function() {
  it('can return the right response for a guess', function() {
    var game = new GuessingGame(20);

    assert.isNotTrue(game.isSolved())
    assert.deepEqual(game.guess(3), 'low')
    assert.deepEqual(game.guess(39), 'high')
    assert.isNotTrue(game.isSolved())
    assert.deepEqual(game.guess(20), 'correct')
    assert.isTrue(game.isSolved())
    assert.deepEqual(game.guess("things and stuff"), "that's not a vaild guess")
    game.guess(90)
    assert.isNotTrue(game.isSolved)
  })
})
