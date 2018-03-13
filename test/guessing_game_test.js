const assert = require('chai').assert
const GuessingGame = require('../lib/guessing_game')

describe('a user can play a guessing game', function()  {
  let game = new GuessingGame(20);
  it('it tells the user their guess is high', function() {
    assert.equal(game.guess(30), 'high')
  })
  it('it tells the user their guess is low', function() {
    assert.equal(game.guess(10), 'low')
  })
  it('it tells the user the game is not solved', function() {
    assert.equal(game.isSolved(), false)
  })
  it('it tells the user their guess is correct', function() {
    assert.equal(game.guess(20), 'correct')
  })
  it('it tells the user the game is solved', function() {
    assert.equal(game.isSolved(), true)
  })
})
