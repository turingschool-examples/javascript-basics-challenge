const assert = require('chai').assert
const GuessingGame = require('../lib/guessing-game')

describe("Guessing Game", () => {
  context("GuessingGame constructor", () => {
    it("initializes with an integer called answer", () => {
      let game = new GuessingGame(5)
      assert.equal(game.answer, 5)
    })
  })

  context("guess", () => {
    let game = new GuessingGame(9)

    it("returns high when the guess is higher than the answer", () => {
      assert.equal(game.guess(14), 'high')
    })

    it("returns low when the guess is lower than the answer", () => {
      assert.equal(game.guess(4), 'low')
    })

    it("returns correct when the guess is correct", () => {
      assert.equal(game.guess(9), 'correct')
    })
  })

  context("isSolved", () => {
    it("returns false when not solved", () => {
      let game = new GuessingGame(5)

      assert.equal(game.isSolved(), false)
    })

    it("returns true when solved", () => {
      let game = new GuessingGame(5)
      game.guess(5)

      assert.equal(game.isSolved(), true)
    })
  })
})
