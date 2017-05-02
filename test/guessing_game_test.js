const assert = require('chai').assert
const GuessingGame = require('../lib/guessing_game')
const game = new GuessingGame(20)
var pry = require('pryjs');

describe("guessing game", function(){
  it("solved is false by default", function(){
    assert.equal(game.isSolved(), false)
  });

  it(" returns high if the guess is larger than answer", function(){
    assert.equal(game.guess(40), "high")
  });

  it("returns low if the guess lower than answer", function(){
    assert.equal(game.guess(5), "low")
  });

  it("returns correct if guess is correct", function(){
    assert.equal(game.guess(20), "correct")
  });

  it("returns true when it is solved", function(){
    game.guess(20)
    assert.equal(game.isSolved(), true)
  });
});
