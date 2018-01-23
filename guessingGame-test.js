const assert = require('chai').assert;
const GuessingGame = require('./guessingGame');

describe('Guessing Game Tests', function() {
  it('can make high guess', function() {
    var game = new GuessingGame(20);
    var response = game.guess(30);

    assert.equal(response, 'high');
  });

  it('can make low guess', function() {
    var game = new GuessingGame(20);
    var response = game.guess(5);

    assert.equal(response, 'low');
  });

  it('can make correct guess', function() {
    var game = new GuessingGame(20);
    var response = game.guess(20);

    assert.equal(response, 'correct');
  });

  it('will be solved if correct', function() {
    var game = new GuessingGame(20);
    game.guess(5);

    assert.equal(false, game.isSolved());

    game.guess(20);
    
    assert.equal(true, game.isSolved());
  });
});
