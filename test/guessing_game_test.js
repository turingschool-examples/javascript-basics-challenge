var expect    = require("chai").expect;
var gueGame = require("../app/guessing_games");

describe("Guessing Game constructor function thing", function() {
  it("tells you if you chose wisely", function() {

    var game = new gueGame.GuessingGame(20);

    expect(game.isSolved()).to.deep.equal(false);

    expect(game.guess(5)).to.deep.equal('low');
    expect(game.guess(40)).to.deep.equal('high');
    expect(game.isSolved()).to.deep.equal(false);

    expect(game.guess(20)).to.deep.equal('correct');
    expect(game.isSolved()).to.deep.equal(true);

    });
  });
