const assert = require('chai').assert;
const expect = require('chai').expect;
const GuessingGame = require('../lib/guessing-game');

describe("Guessing Game", function() {
  context("GuessingGame", function() {
    it("initializes with an answer", function() {
      var newGame = new GuessingGame(20);
      var gameAnswer = newGame.answer;
      assert.equal(gameAnswer, 20);
    });
  });
  context("guess", function() {
    it("returns a message of high, low, or correct on a guess", function() {
      var newGame = new GuessingGame(20);
      var high = newGame.guess(25);
      var low = newGame.guess(15);
      var correct = newGame.guess(20);
      assert.equal(high, 'high');
      assert.equal(low, 'low');
      assert.equal(correct, 'correct');
    });
  });
  context("isSolved", function() {
    var game = new GuessingGame(20);
    it("returns false if there havn't been any guesses", function() {
      var notYetSolved = game.isSolved();
      expect(notYetSolved).to.be.false;
    })
    it("returns false if the last guess was wrong", function() {
      game.guess(15);
      var stillNotSolved = game.isSolved();
      expect(stillNotSolved).to.be.false;
    })
    it("returns true if the last guess was correct", function() {
      game.guess(20);
      var finallySolved = game.isSolved();
      expect(finallySolved).to.be.true;
    });
  });
});