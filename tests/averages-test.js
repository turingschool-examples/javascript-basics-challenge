assert = require('chai').assert
expect = require('chai').expect
const averageFunctions = require('../lib/averages')

describe("average functions", () => {
  it("can find the total of an array", () => {
    assert.equal(averageFunctions.total([2, 2, 4, 6, 8]),22)
  })
  it("can calculate the mean of the array", () => {
    assert.equal(averageFunctions.mean([2, 2, 4, 6, 8]), 4.4)
  })
  it("can calculate the median of an array", () => {
    assert.equal(averageFunctions.median([2, 2, 4, 6, 8]), 4)
  })
  it("can calculate the mode of an array", () => {
    assert.equal(averageFunctions.mode([2, 2, 4, 6, 8]), 2)
  })
})