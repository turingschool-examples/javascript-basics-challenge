const assert = require('chai').assert
const game = new GuessingGame(5)
const myFunctions = require('../lib/guessing-game')

describe('guess', function() {
  it('responds to high response', function()  {
    assert.strictEqual(game.guess(7), "high")
  })

  xit('empty array returns null', function() {
    array = []
    assert.strictEqual(myFunctions.longestString(array), null)
  })
})
