const assert = require('chai').assert;
const count = require('../scripts/count_numbers_between');
var pry = require('pryjs');

describe('number count inbetween', function(){
  context('counts the numbers inbetween a range', function(){
    it('returns the number of integers between the bounds', function(){
      assert.equal(count.countNumbersBetween([25, 2, 8], 0, 100), 3)
    });

    it('returns the correct number of integers between the bounds', function(){
      assert.equal(count.countNumbersBetween([-19, 1, 22], 0, 100), 2)
    });

    it('can handle big numbers', function(){
      assert.equal(count.countNumbersBetween([100, 200, 300], 100, 300), 3)
    });

    it('can handle negative numbers', function(){
      assert.equal(count.countNumbersBetween([], -10, 10), 0)
    });

    it('can handle just one number', function(){
      assert.equal(count.countNumbersBetween([5], 5, 5), 1)
    });
  });
});
