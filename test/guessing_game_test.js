const assert = require('chai').assert;
const GuessingGame = require('../lib/guessing_game');

describe('Guessing Game', function() {
  it('initializes with number', function() {
    let game = new GuessingGame(20);

    assert.equal(game.secretNum, 20);
  });

  it('tells whether guess was high or low', function() {
    let game = new GuessingGame(20);

    assert.equal(game.guess(10), 'low');
    assert.isFalse(game.isSolved);
    assert.equal(game.guess(30), 'high');
    assert.isFalse(game.isSolved);
  });

  it('lets you solve the game', function() {
    let game = new GuessingGame(20);

    assert.isFalse(game.isSolved);
    assert.equal(game.guess(20), 'correct');
    assert.isTrue(game.isSolved);
  });
});
