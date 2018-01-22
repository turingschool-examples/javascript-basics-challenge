var expect = require("chai").expect;
var gameGuess = require("../app/guessing-game");

describe("Guessing game", function() {
  it("lets you know if your guess is correct, etc", function() {
    var game = new gameGuess.GuessingGame(20);

    expect(game.isSolved()).to.deep.equal(false);
    
    expect(game.guess(5)).to.deep.equal("too low, too slow");
    expect(game.guess(40)).to.deep.equal("too high, motherfucka");
    expect(game.isSolved()).to.deep.equal(false);

    expect(game.guess(20)).to.deep.equal("that is correct!");
    expect(game.isSolved()).to.deep.equal(true);
  })
})
