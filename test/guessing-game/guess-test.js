const assert = require('chai').assert
const GuessingGame = require('../../lib/guessing-game/guess.js')

describe('GuessingGame functionality', function() {
  context('GuessingGame function', function(){
    it('it can determine the GuessingGame of an value', function(){
      let newGame = new GuessingGame(20);

      assert.equal(newGame.isSolved(), false);
      assert.equal(newGame.guess(5), "low");
      assert.equal(newGame.guess(25), "high");
      assert.equal(newGame.isSolved(), false);
      assert.equal(newGame.guess(20), "correct");

      newGame.guess(20)

      assert.equal(newGame.isSolved(), true);

      newGame = new GuessingGame(50);

      assert.equal(newGame.isSolved(), false);
      assert.equal(newGame.guess(5), "low");
      assert.equal(newGame.guess(75), "high");
      assert.equal(newGame.isSolved(), false);
      assert.equal(newGame.guess(50), "correct");

      newGame.guess(50)

      assert.equal(newGame.isSolved(), true);

      newGame = new GuessingGame(73);

      assert.equal(newGame.isSolved(), false);
      assert.equal(newGame.guess(34), "low");
      assert.equal(newGame.guess(100), "high");
      assert.equal(newGame.isSolved(), false);
      assert.equal(newGame.guess(73), "correct");

      newGame.guess(50)

      assert.equal(newGame.isSolved(), true);
    })
  })
})
