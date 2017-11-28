const assert = require('chai').assert;
const GuessingGame = require("../lib/guessingGame");

describe("guessingGame", function(){
  var game = new GuessingGame(10);

  it("returns low if the guess is too low", function(){
    var guess = game.guess(1)

    assert.deepEqual(guess, 'low');
  });

  it("returns high if the guess is too high", function(){
    var guess = game.guess(20)

    assert.deepEqual(guess, 'high');
  });

  it("returns correct for solution", function(){
    var guess = game.guess(10)

    assert.deepEqual(guess, 'correct');
  });

});
