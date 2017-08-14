const assert = require('chai').assert
const guessingGame = require('../guessingGame.js')

describe('isSolved()', () => {
  context('when the game starts it is not sovle', () => {
    it('it returns false', () => {
      game = new guessingGame
      assert.isFalse(game.isSolved())
    })
  })

  context('when the game has been solved', () => {
    it('returns true', () => {
      game = new guessingGame(1)
      game.guess(1)
      assert.isTrue(game.isSolved())
    })
  })

  context('when the guess is high', () => {
    it('it returns "high"', () => {
      game = new guessingGame(1)
      assert.equal(game.guess(10), "high")
    })
  })

  context('when the guess is low', () => {
    it('it returns "low"', () => {
      game = new guessingGame(10)
      assert.equal(game.guess(1), "low")
    })
  })

  context('when the guess is correct', () => {
    it('it returns "correct"', () => {
      game = new guessingGame(10)
      assert.equal(game.guess(10), "correct")
    })
  })
})

// Define an instance method `guess` which takes an integer
// called `guess` as its input. `guess` should return the string
// `'high'` if the `guess` is larger than the `answer`, `'correct'`
// if the `guess` is equal to the `answer`, and `'low'` if the `guess`
// is lower than the `answer`.
//
// Define an instance method `isSolved` which returns `true` if the
// most recent `guess` was correct and `false` otherwise.
//
// For example:
//
// ```javascript
// var game = new GuessingGame(20);
//
// game.isSolved();   // => false
//
// game.guess(5);     // => 'low'
// game.guess(40);    // => 'high'
// game.isSolved();   // => false
//
// game.guess(20);    // => 'correct'
// game.isSolved()    // => true
// ```
