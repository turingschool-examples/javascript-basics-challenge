const assert =  require("chai").assert;
const g = require("../lib/guessingGame");

describe("guessing game constructor", function(){
  it("initializes with random number and solved attribute", function(){
    var game = new g.guessingGame;
    assert.equal(game.isSolved, false);
    assert(Number.isInteger((game.number)));
  });
});