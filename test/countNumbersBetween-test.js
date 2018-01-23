const assert = require('chai').assert
const cNB = require('../lib/countNumbersBetween')

describe('countNumbersBetween', function() {
  context('with three arguments: array of integers, lower bound, upper bound', function() {
    it('returns the count of numbers in the array that are between the lower and upper bound', function() {
      assert.equal(cNB.countNumbersBetween([25, 2, 8], 0, 100), 3)
      assert.equal(cNB.countNumbersBetween([-19, 1, 22], 0, 100), 2)
      assert.equal(cNB.countNumbersBetween([100, 200, 300], 100, 300), 3)
      assert.equal(cNB.countNumbersBetween([], -10, 10), 0)
      assert.equal(cNB.countNumbersBetween([5], 5, 5), 1)
    })
  })
})
