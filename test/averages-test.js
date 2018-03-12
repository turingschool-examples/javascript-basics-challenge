var assert = require('chai').assert;
var getTotal = require('../averages').getTotal
var calculateAverage = require('../averages').calculateAverage
var pry = require('pryjs')


describe('Average functions', function() {
  it('calculates the sum of all numbers in array', function() {
    assert.equal(getTotal([3, 4, 5]), 12)
    assert.equal(getTotal([4, 5, 7]), 16)
  })

  it('calculates the average value from an array', function() {
    // eval(pry.it)
    assert.equal(calculateAverage([3, 4, 5]), 4)
    assert.equal(calculateAverage([5, 5, 8]), 6)
  })
})
