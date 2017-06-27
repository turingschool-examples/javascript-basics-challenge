const assert = require('chai').assert;
const GuessingGame = require('../guess');

it('does correct', function() {
  var game = new GuessingGame(20);
  assert.isFalse(game.isSolved())
  assert.equal(game.guess(5), "low")
  assert.equal(game.guess(40), "high")
  assert.isFalse(game.isSolved())
  assert.equal(game.guess(20), "correct")
  assert.isTrue(game.isSolved());
})
