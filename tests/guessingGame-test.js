assert = require('chai').assert;
const guessingGame = require('../lib/guessingGame')
describe("GuessingGame constructor", function(){

  it("it is initialized with an answer", function(){
     game = new guessingGame.GuessingGame(10)

    assert.instanceOf(game, guessingGame.GuessingGame, 'guessingGame is an object' )
  })

  it("it returns high if guess is above the number", function(){
    game = new guessingGame.GuessingGame(10);
    assert.strictEqual(game.guess(20), 'high')
  })

  it("it returns low if guess is below the number", function(){
    game = new guessingGame.GuessingGame(10);
    assert.strictEqual(game.guess(5), 'low')
  })

  it("it returns correcr if guess is the same", function(){
    game = new guessingGame.GuessingGame(10);
    assert.strictEqual(game.guess(10), 'correct')
  })

  it("it returns false is the number has not been guessed", function(){
    game = new guessingGame.GuessingGame(10);
    assert.strictEqual(game.isSolved(), false )
  })

  it("it has an instance method called guess", function(){
    var game = new guessingGame.GuessingGame(10);
    game.guess(10);

    assert.strictEqual(game.isSolved(), true )
  })
})
