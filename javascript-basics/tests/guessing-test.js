var expect = require("chai").expect;
var game = require("../scripts/guessing")

describe("Guessing Game", function(){
  it("tells you if your guess is incorrect and solved", function(){
    var newGame = new game.GuessingGame(20);

    var guess1 = newGame.guess(40);
    expect(guess1).to.deep.equal("too high")
    expect(newGame.isSolved()).to.deep.equal(false)
    var guess2 = newGame.guess(20);
    expect(guess2).to.deep.equal("correct!")
    expect(newGame.isSolved()).to.deep.equal(true)
  })
})