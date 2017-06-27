const assert = require("chai").assert
const GuessingGame = require("../guessing-game")


describe("Guessing Game", function() {
  var game = new GuessingGame(10)
  context("in a guess", function() {
    it("returns high if guess is too high", function() {
      assert.equal(game.guess(40), "high")
    })
    it("returns low if guess is low", function() {
      assert.equal(game.guess(2), "low")
    })
    it("returns correct if guess is correct", function() {
      assert.equal(game.guess(10), "correct")
    })
  })
  context("isSolved", function() {
    it("returns false if last_guess is incorrect", function() {
      game.guess(15)
      assert.isFalse(game.isSolved())
    })
    it("returns true if last_guess is correct", function() {
      game.guess(10)
      assert.isTrue(game.isSolved())
    })
  })
})
  //
  // var game = new GuessingGame(20);
  //
  // game.isSolved();   // => false
  //
  // game.guess(5);     // => 'low'
  // );    // => 'high'
  // game.isSolved();   // => false
  //
  // game.guess(20);    // => 'correct'
  // game.isSolved()    // => true
