const assert        = require('chai').assert
const guessinggame = require('../GuessingGame').GuessingGame

describe('guessing game', function() {
  var game = new guessinggame(20);
  it('returns false if a guess has not been made', function () {
    assert.equal(game.isSolved(), false);
  })
  it('returns low if a guess is lower than the answer', function () {
    assert.equal(game.guess(5), 'low');
  })
  it('returns high if a guess is higher than the answer', function () {
    assert.equal(game.guess(40), 'high');
  })
  it('returns false if a guess is not correct', function () {
    game.guess(40)
    assert.equal(game.isSolved(), false);
  })
  it('returns true if a guess is correct', function () {
    game.guess(20)
    assert.equal(game.isSolved(), true);
  })
})
