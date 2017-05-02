const GuessingGame = require('../lib/guessing-game');
const assert = require('chai').assert;

describe("GuessingGame", function(){
  it("allows user to guess number for object", function(){
    var game = new GuessingGame(20);
      assert.equal(game.isSolved(), false)
      assert.equal(game.guess(5), "low")
      assert.equal(game.guess(21), "high")
      assert.equal(game.guess(20), "correct")
      assert.equal(game.isSolved(), true)
  });
});
