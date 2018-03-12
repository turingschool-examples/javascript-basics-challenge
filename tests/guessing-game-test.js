assert = require('chai').assert
expect = require('chai').expect
let GuessingGame = require('../lib/guessing-game')

describe("guessing game functions", () => {
  let game;
  beforeEach(() => {
    game = new GuessingGame(20)
  })
  it("a guessing game by default is not solved", () => {
    assert.equal(game.isSolved(), false)
  })
  it("tells you when your gues is too low", () => {
    assert.equal(game.guess(5),"low")
  })
  it("tells you when your guess is too high", () => {
    assert.equal(game.guess(25), "high")
  })
  it("tells you when you have made a correct guess", () => {
    assert.equal(game.guess(20), "correct")
  })

})
