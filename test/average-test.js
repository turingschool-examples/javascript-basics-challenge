const assert = require('chai').assert;
const averageFunctions = require('../average')

describe("Averages", function() {
  it("returns the total of all values in the array", function () {
    assert.equal(averageFunctions.total([5, 2, 3]), 10) 
    assert.equal(averageFunctions.total([7, 7, 7]), 21) 
  })

  it("returns the mean(average) of the array", function() {
    assert.equal(5, averageFunctions.mean([5, 5, 5]))
    assert.equal(20, averageFunctions.mean([10, 20, 30]))
  })
  it("returns the median of the array", function() {
    assert.equal(10, averageFunctions.median([5, 10, 15]))
    assert.equal(15, averageFunctions.median([5, 10, 15, 20, 25]))
    assert.equal(22, averageFunctions.median([3, 13, 7, 5, 21, 23, 23, 40, 23, 14, 12, 56, 23, 29]))
  })

  it("returns the mode(s) of the array", function() {
    assert.deepEqual({23: 4}, averageFunctions.mode([3, 13, 7, 5, 21, 23, 23, 40, 23, 14, 12, 56, 23, 29]))
    assert.deepEqual({23: 4, 13: 2}, averageFunctions.mode([3, 13, 7, 5, 21, 23, 23, 13, 23, 14, 12, 56, 23, 29]))
    assert.deepEqual({}, averageFunctions.mode([3, 13, 7, 5, 21]))
  })
})
