const assert = require('chai').assert;
const guessGame = require('../scripts/guessing_game');
var pry = require('pryjs');

describe('guessing game', function(){
  context('is solved', function(){
    it('will return false if it is not solved', function(){
      var game = new guessGame.GuessingGame(20);

      assert.equal(game.isSolved(), false);
    });

    it('will return low if the guess is too low', function(){
      var game = new guessGame.GuessingGame(20);

      assert.equal(game.guess(5), "low")
    });

    it('will return high if the guess is too high', function(){
      var game = new guessGame.GuessingGame(20);

      assert.equal(game.guess(25), "high")
    });

    it('will return correct if the guess is correct and is solved returns true', function(){
      var game = new guessGame.GuessingGame(20);

      assert.equal(game.guess(20), "correct")
      assert.equal(game.isSolved(), true);
    });
  });
});
