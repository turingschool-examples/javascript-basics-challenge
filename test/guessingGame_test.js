const assert = require('chai').assert;
const GuessingGame = require('../GuessingGame')

const game = new GuessingGame(20)

describe("GuessingGame", function() {
  context ("isSolved", function () {
    it("returns false if the correct number has not been guessed", function() {
      assert.deepEqual(game.isSolved(), false)
      game.guess(5)
      assert.deepEqual(game.isSolved(), false)
    })
    it("returns true if the correct number has been guessed", function() {
      assert.deepEqual(game.isSolved(), false)
      game.guess(20)
      assert.deepEqual(game.isSolved(), true)
    })
  })
  context ("guess()", function () {
    it("returns correct if the guess is correct", function() {
      assert.deepEqual(game.guess(20), "correct")
    })
    it("returns low if the guess is too low", function() {
      assert.deepEqual(game.guess(5), "low")
    })
    it("returns high if the guess is too high", function() {
      assert.deepEqual(game.guess(30), "high")
    })
  })
})
