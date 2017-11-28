var assert = require('assert');
var expect    = require("chai").expect;
var guessingGameFunctions = require("../lib/guessing-game");
describe('guessing game', function() {
  describe('guessing game', function() {
    it('should correctly respond to guesses', function() {

      var game = new guessingGameFunctions.GuessingGame(20);

      var lowGuess = game.guess(5);
      var highGuess = game.guess(40);

      assert.deepEqual(lowGuess, "low", "low guess returns low")
      assert.deepEqual(highGuess, "high", "high guess returns high")
      expect(game.isSolved()).to.be.false;

      var correctGuess = game.guess(20)

      assert.deepEqual(correctGuess, "correct", "correct guess returns correct");
      expect(game.isSolved()).to.be.true;
    });
  });
});
