const assert = require('chai').assert;
const GuessingGame = require('../guessing_game');

var game = new GuessingGame(20);
describe("You can play the guessing game", function(){
  it("you can check if it has been solved", function(){
    assert.equal(game.isSolved(), false);
  });
  it("you can make a guess", function(){
    assert.equal(game.guess(5), 'low');
    assert.equal(game.guess(40), 'high');
    assert.equal(game.isSolved(), false);
  });
  it("you can make a correct guess and see if it is solved", function(){
    assert.equal(game.guess(20), 'correct');
    assert.equal(game.isSolved(), true);
  });
});
