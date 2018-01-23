var assert = require('assert');
var expect    = require("chai").expect;
var guessingGame = require("../app/guessing-game");

  describe('guessing game', function() {
    it('takes guesses from user', function() {

      var game = new guessingGame.GuessingGame(20);

      var low = game.guess(5);
      var high = game.guess(40);

      assert.deepEqual(low, "low");
      assert.deepEqual(high, "high")
      expect(game.isSolved()).to.be.false;

      var correct = game.guess(20)

      assert.deepEqual(correct, "correct");
      expect(game.isSolved()).to.be.true;
    });
  });
