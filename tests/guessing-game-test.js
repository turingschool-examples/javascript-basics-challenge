var assert = require('chai').assert
var game = require('../lib/guessing-game')

describe('GuessingGame', function() {
  var newGame = new game.GuessingGame(20)

  it('initializes with an answer argument', function() {
    assert.equal(newGame.answer, 20)
  })

  it('isSolved returns false when no guess has been made', function() {
    assert.isFalse(newGame.isSolved())
  })

  it('returns feedback when a low guess has been made', function() {
    assert.equal(newGame.guess(5), 'low')
  })

  it('returns feedback when a high guess has been made', function() {
    assert.equal(newGame.guess(40), 'high')
  })

  it('isSolved returns false when a correct guess has not been made', function() {
    assert.isFalse(newGame.isSolved())
  })

  it('returns "correct" when a right guess has been made', function() {
    assert.equal(newGame.guess(20), 'correct')
  })

  it('isSolved returns true after a guess returns "correct"', function() {
    assert.isTrue(newGame.isSolved())
  })
})