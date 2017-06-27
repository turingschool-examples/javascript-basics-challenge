const assert = require("chai").assert
const GuessingGame = require("../guessing-game")

describe('Guessing game returns guesses or isSolved', () => {
  var game = new GuessingGame(20)
  
  it('returns false if the the last guess was incorrect', () => {
    game.guess(40)
    assert.equal(game.isSolved(), false)
  })
  
  it('returns correct if the right number is guessed', () => {
    assert.equal(game.guess(20), 'correct')
  })
  
  it('returns low if the number is guessed is low', () => {
    assert.equal(game.guess(5), 'low')
  })
  
  it('returns high if the number is guessed is high', () => {
    assert.equal(game.guess(40), 'high')
  })

  it('returns true if the the last guess was correct', () => {
    game.guess(20)
    assert.equal(game.isSolved(), true)
  })
})