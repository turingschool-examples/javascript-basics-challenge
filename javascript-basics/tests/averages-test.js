var pry = require('pryjs');
assert = require('chai').assert
expect = require('chai').expect
averages = require('../scripts/averages')


describe('Average functions', function() {
  it('returns the total of the array', function() {
    assert.deepEqual(averages.total([1,2,3]), 6)
  })
  
  it('returns the mean of the array', function() {
    assert.deepEqual(averages.mean([2,3,4]), 3)
  })

  it('returns the median of the array', function() {
    assert.deepEqual(averages.median([1,2,3,4,5]), 3)
    assert.deepEqual(averages.median([1,2,3,4]), 2.5)
  })
})
