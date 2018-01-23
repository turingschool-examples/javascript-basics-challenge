const assert = require('assert')
const GuessingGame = require('../guessing-game')

describe("GuessingGame", function() {
  it("can create a guessing game object with a given number stored as an answer property and a isSolved property of false", function() {
    var game = new GuessingGame(20)

    assert.equal(game.answer, 20)
    assert.equal(game.solved, false)
  })

  context("a user can make guesses and check the status of if the guess has been solved", function() {
    it("returns the result of guesses or the value of isSolved", function() {
      var game = new GuessingGame(20)

      assert.equal(game.isSolved(), false)

      assert.equal(game.guess(5), "low")
      assert.equal(game.guess(40), "high")
      assert.equal(game.isSolved(), false)

      assert.equal(game.guess(20), "correct")
      assert.equal(game.isSolved(), true)
    })
  })
})
