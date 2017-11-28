const assert = require('chai').assert;
const GuessingGame = require('../guessingGame');
const game = new GuessingGame(7);

describe("Guessing Game", function() {
  it("is initialized with answer", function() {
    assert.instanceOf(game, GuessingGame)
  })
  it("is initialized with lastGuess undefined", function() {
    assert.isUndefined(game.lastGuess)
  })
  
  it("instance methods: #guess", function() {
    assert.equal("high", game.guess(10))
    assert.equal("low", game.guess(5))
    assert.equal("Correct!", game.guess(7))
  })

  it("instance methods: #isSolved", function() {
    game.guess(8);
    assert.isFalse(game.isSolved())
    game.guess(7);
    assert.isTrue(game.isSolved())
  })

  it("updates lastGuess when guess is called", function() {
    game.guess(9);
    const game2 = new GuessingGame(8);

    assert.equal(9, game.lastGuess)
    assert.equal(undefined, game2.lastGuess)

    game2.guess(4);
    assert.equal(4, game2.lastGuess)
  })
})
