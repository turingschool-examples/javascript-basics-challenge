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
})

// Create a `GuessingGame` constructor function which is
// initialized with an integer called `answer`.
//
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
