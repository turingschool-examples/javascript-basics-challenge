const assert = require('chai').assert
const total  = require('../averages').total
const mean   = require('../averages').mean
const median = require('../averages').median
const mode   = require('../averages').mode

describe('averages', function() {
  context('average functions', function() {
    var numbers = [10,20,30,10,30]
    it('can calculate the total number', function() {
      assert.equal(total(numbers), 100);
    })

    it('can calculate the average number', function() {
      assert.equal(mean(numbers), 20);
    })

    it('can calculate the median number for odd length array', function() {
      var num = [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]
      assert.equal(median(num), 23);
    })

    it('can calculate the median number for an even length array', function() {
      var num = [3, 13, 7, 5, 21, 23, 23, 40, 23, 14, 12, 56, 23, 29]
      assert.equal(median(num), 23);
    })

    it('can calculate the median number', function() {
      var num = [3, 13, 7]
      assert.equal(median(num), 7);
    })
  })
})
