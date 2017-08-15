const assert = require('chai').assert;
const guessingGame = require('../guessing-game.js');

it('returns too high when the guess is larger than answer', function () {
  game = new guessingGame(2);
  assert.deepEqual(game.guess(5), "Too high!");
});

// it('returns true when the game is solved', function () {
//   game = new guessingGame(1);
//   game.guess(1);
//   assert.isTrue(game.isSolved());
// });
