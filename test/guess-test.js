var pry = require('pryjs');
const assert = require('chai').assert;
const GuessingGame = require('../guess.js');


describe("guessingGame constructor function", function() {
  it('returns "high" if the guess is larger than the answer and isSolved returns false', function() {
    var game = new GuessingGame(20);
    var expected = 'high';
    var actual = game.guess(40);
    var expectedSolved = false;
    var actualSolved = game.isSolved();
    assert.equal(expectedSolved, actualSolved);
    assert.equal(expected, actual);
  });

  it('returns "low" if the guess is smaller than the answer and isSolved returns false', function() {
    var game = new GuessingGame(20);
    var expected = 'low';
    var actual = game.guess(4);
    var expectedSolved = false;
    var actualSolved = game.isSolved();
    assert.equal(expected, actual);
    assert.equal(expectedSolved, actualSolved);
  });

  it('returns "correct" if the guess is equal to the answer and isSolved returns true', function() {
    var game = new GuessingGame(20);
    var expected = 'correct';
    var actual = game.guess(20);
    var expectedSolved = true;
    var actualSolved = game.isSolved();
    assert.equal(expected, actual);
    assert.equal(expectedSolved, actualSolved);
  });
})
