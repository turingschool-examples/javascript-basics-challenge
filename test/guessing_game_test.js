
const assert = require('chai').assert;
const GuessingGame = require('../guessing_game');

describe('Guessing game constructor function', function () {
   it('can build an object', function () {
       let game = new GuessingGame(10);
       assert.isObject(game);
   });

   it('returns low when guess < answer', function () {
       let game = new GuessingGame(10);
       assert.equal(game.guess(5), 'Low')
   });

    it('returns high when guess > answer', function () {
        let game = new GuessingGame(10);
        assert.equal(game.guess(15), 'High')
    });

    it('returns Correct when guess === answer', function () {
        let game = new GuessingGame(10);
        assert.equal(game.guess(10), 'Correct')
    })
});