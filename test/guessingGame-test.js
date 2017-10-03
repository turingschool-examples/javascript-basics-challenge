const assert = require('chai').assert;
const GuessingGame = require('../lib/guessingGame.js')

var game = new GuessingGame(20);

describe('Guessing game table functionality', function(){
  it('has a num', function(){
    assert.equal(game.num, 20);
  })

  it('is false at the start', function(){
    assert.equal(game.isSolved, false);
  })

  it('is returns too high prompt', function(){
    assert.equal(game.guess(56), "too high");
  })

  it('is returns too low prompt', function(){
    assert.equal(game.guess(1), "too low");
  })

  it('is returns correct when guess is correct', function(){
    assert.equal(game.guess(20), "correct");
  })

  it('is isSolved after correct guess', function(){
    assert.equal(game.isSolved, true);
  })
})
