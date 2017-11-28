assert = require('chai').assert;
const isBetween = require('../lib/between')

describe('chai tests between numbers', function() {
  it('returns the right count of numbers between', function() {
    assert.deepEqual(isBetween([3, 8, 10], 4, 13), 2)
    assert.deepEqual(isBetween([], 6, 4), 0)
  })
  it('includes the min and max in the results', function() {
    assert.deepEqual(isBetween([2, 4, 2, 5, 8, 6, 4, 3, 2, 5, 7, 9, 10], 3, 9), 9)
  })
})
