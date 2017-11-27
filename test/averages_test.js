const assert = require('chai').assert;
const avg = require('../averages')

describe("total", function() {
  it("returns total of all numbers in array", function() {
    assert.deepEqual(avg.total([1, 5, 3, 6]), 15)
  })
})

describe("mean", function() {
  it("returns the mean of all numbers in array", function() {
    assert.deepEqual(avg.mean([1, 6, 3, 6]), 4)
  })
})

describe("median", function() {
  it("returns the median of all numbers in array with odd length", function() {
    assert.deepEqual(avg.median([1, 6, 3, 7, 5]), 5)
  })
  it("returns the median of all numbers in array with even length", function() {
    assert.deepEqual(avg.median([1, 6, 4, 7]), 5)
  })
})

describe("mode", function() {
  it("returns the mode of all numbers in array", function() {
    assert.deepEqual(avg.mode([1, 6, 3, 6]), {'1': 1, '3': 1, '6': 2})
  })
})
