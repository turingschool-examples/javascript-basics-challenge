const assert = require('chai').assert
const GuessingGame = require('../lib/guessGame.js')

describe('GuessingGame', function () {
  it ('returns a result after taking in a guess', function() {
    let game = new GuessingGame(20)

    let expected_one = game.isSolved()
    assert.equal(expected_one, false)

    let expected_two = game.guess(5)
    assert.equal(expected_two, "Too low, guess again")

    let expected_three = game.guess(40)
    assert.equal(expected_three, "Too high, guess again")

    let expected_four = game.guess(20)
    assert.equal(expected_four, "Correct. Winner, Winner chicken dinner!")

    let expected_five = game.isSolved()
    assert.equal(expected_five, true)
  });
});
