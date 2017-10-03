const assert = require('chai').assert;
const GuessingGame = require('../lib/guessing-game/guessing-game');
const secret = 25;
const game = new GuessingGame(secret);

describe('guessing game', function() {
  context('with given guess input', function() {
    it('returns high if guess is too high', function() {

      assert(game.guess(30), 'high');
    })

    it('returns low if guess is too low', function() {

      assert(game.guess(10), 'low');
      assert.isFalse(game.isSolved);
    });

    it('returns correct with right answer', function() {

      assert(game.guess(25), 'correct');
      assert.isTrue(game.isSolved);
    });
  });
});
