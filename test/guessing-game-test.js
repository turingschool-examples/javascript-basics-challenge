const assert = require('chai').assert
const GuessingGame = require("../guessing-game")



describe('GuessingGame', function(){
  context('a game to guess a secret number', function (){

    it('it returns high, low, or correct given a guess', function(){
      var game = new GuessingGame(20);

      assert.equal(game.guess(5), 'low')
      assert.equal(game.guess(50), 'high')
      assert.equal(game.guess(20), 'correct')

    })
    it('it returns true or false if solved', function(){
      var game = new GuessingGame(20);

      assert.equal(game.guess(5), 'low')
      assert.equal(game.isSolved(), false)
      assert.equal(game.guess(50), 'high')
      assert.equal(game.isSolved(), false)
      assert.equal(game.guess(20), 'correct')
      assert.equal(game.isSolved(), true)

    })
  })
})
