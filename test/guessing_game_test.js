const expect = require('expect');
const Guess = require('../lib/guessing_game');

describe('guessingGame', function() {
  beforeEach(function () {
    this.guess = new Guess(12);
  })

  describe('guess', function() {
    it('returns low for too low number', function() {
      expect(this.guess.guess(3)).toEqual('low');
    })

    it('returns high for too high number', function() {
      expect(this.guess.guess(50)).toEqual('high');
    })

    it('returns correct for correct number', function() {
      expect(this.guess.guess(12)).toEqual('correct');
    })
  })

  describe('isSolved', function() {
    it('returns false if not solved', function() {
      expect(this.guess.isSolved()).toBe(false);
    })

    it('returns true if solved', function() {
      this.guess.guess(12);
      expect(this.guess.isSolved()).toBe(true);
    })
  })
})
