const assert = require('chai').assert;
const GuessingGame = require('../guessingGame')

describe('Guessing game', function(){
  var game = new GuessingGame(20)
  it('it isnt solved if the correct number hasnt been guessed', function(){
    assert.equal(game.isSolved, false)
  });
});

