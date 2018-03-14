const assert = require('chai').assert
const GuessingGame = require('../js/guessing-game.js')

describe('factorial', function() {

    it('returns the factorial of a number', function(){
    var game = new GuessingGame(20);
      assert.equal(game.guess(14), 'low') 
      assert.equal(game.guess(34), 'high')   
      assert.equal(game.guess(20), 'correct') 
    })
})
