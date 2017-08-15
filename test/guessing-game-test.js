const assert = require('chai').assert;
const guessingGame = require('../guessing-game.js');

it('returns too high when the guess is larger than answer', function () {
  game = new guessingGame(2);
  assert.deepEqual(game.guess(5), "Too high!");
});

it('returns too low when the guess is lower than answer', function () {
  game = new guessingGame(13);
  assert.deepEqual(game.guess(2), "Too low!");
});

it('returns correct when the game is solved', function () {
  game = new guessingGame(1);
  assert.deepEqual(game.guess(1), "Correct!");
});

it('returns true if the game is solved', function () {
  game = new guessingGame(3);
  game.guess(3);
  assert.isTrue(game.isSolved());
});

it('returns false if the game is not solved', function () {
  game = new guessingGame(3);
  game.guess(5);
  assert.isFalse(game.isSolved());
});
