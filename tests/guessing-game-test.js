const assert = require('chai').assert
const guessingGameFunction = require('../guessingGame')

describe("Guessing Game function", function () {
  it("can return a ", function () {
    let game = new guessingGameFunction.GuessingGame(20)
    assert.isObject(game);
    assert.equal(game.guess(4), "low");
    assert.equal(game.isSolved(), false);
    assert.equal(game.guess(40), "high");
    assert.equal(game.isSolved(), false);
    assert.equal(game.guess(20), "correct");
    assert.equal(game.isSolved(), true);
  });
})