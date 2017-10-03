const assert = require('chai').assert;
const pry = require('pryjs');
const total = require('../lib/averages/total');
const mean = require('../lib/averages/mean');
const median = require('../lib/averages/median');
const mode = require('../lib/averages/mode');
const numbers = [1,2,3,3,4,5];

describe('averages', function() {
  context('with list of numbers', function() {
    it('returns total of array', function() {

      assert(total(numbers), 18);
    });

    it('returns the average of the list', function() {

      assert.equal(mean(numbers), 3);
    });

    it('returns the median', function() {

      assert(median(numbers), [3, 3]);
      assert(median([1,2,4,5,6]), 4);
    });

    it('returns object representing the modes of array with frequency', function() {

      assert(mode(numbers), {3: 2});
    });
  });
});
