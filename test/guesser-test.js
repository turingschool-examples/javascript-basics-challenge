const assert = require('chai').assert
const Guesser = require('../lib/guesser')

describe('Guesser', function(){
  it('Has an answere', function(){
    let game = new Guesser(20)

    assert.equal(20, game.answer)
  });

  it('Knows when it is not solved', function(){
    let game = new Guesser(20);

    assert.isFalse(game.isSolved());
  });

  it('Knows when guess is correct', function(){
    let game = new Guesser(20);

    assert.equal('Correct', game.guess(20));
    assert.isTrue(game.isSolved());
  });

  it('Knows when guess is low or high', function(){
    let game = new Guesser(20);

    assert.equal('Low', game.guess(10));
    assert.equal('High', game.guess(30));
  });
})