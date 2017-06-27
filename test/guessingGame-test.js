const assert = require('chai').assert
const GuessingGame = require('../guessingGame')

describe("guessingGame", function(){
  var game = new GuessingGame(20)
  it("can create new game with answer", function(){
    assert.equal(game.answer, 20)
  })
  it("can create new game with solved false", function(){
    assert.isFalse(game.isSolved())
  })
  it("knows if guess is high", function(){
    assert.equal(game.guess(25), "high")
  })
  it("knows if guess is low", function(){
    assert.equal(game.guess(15), "low")
  })
  it("knows if guess is correct", function(){
    assert.equal(game.guess(20), "correct")
    assert.isTrue(game.isSolved())
  })

})