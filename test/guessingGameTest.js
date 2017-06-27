const assert = require('chai').assert;
const GuessingGame = require('../guess');

describe('GuessingGame', () => {
  it('plays until correctly guessed', () => {
    var game = new GuessingGame(20);
    assert.isFalse(game.isSolved())
    assert.equal(game.guess(33), "high")
    assert.equal(game.guess(7), "low")
    assert.equal(game.guess(20), "correct")
    assert.isTrue(game.isSolved());
  })
})
