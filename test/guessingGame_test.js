const assert = require('chai').assert;
const expect = require('chai').expect;
const GuessingGame = require('../guessingGame');

describe("guessing game unit tests", function(){
  context("object constructor object test", function(){
    var game = new GuessingGame(20);
    it("can be iniated", function(){
      expect(game).to.exist
    })
  });
  context("object constructor function tests", function(){
    var game = new GuessingGame(20);
    it("is not initially solved", function(){
      assert.equal(false, game.isSolved())
    })
    it("low guesses return 'low'", function(){
      assert.equal('low', game.guess(5))
    })
    it("high guesses return 'high'", function(){
      assert.equal('high', game.guess(25))
      assert.equal(false, game.isSolved())
    })
    it("correct guesses return 'correct'", function(){
      assert.equal('correct', game.guess(20))
    })
    it("can be solved", function(){
      game.guess(20)
      assert.equal(true, game.isSolved())
    })
  });
});
