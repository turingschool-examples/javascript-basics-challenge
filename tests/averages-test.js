const assert = require('chai').assert
const averages = require('../averages')

describe("checks for average", function() {
  it("returns the total", function() {
    assert.deepEqual(averages.total([1, 2, 3]), 6)
  });

  it("returns the mean", function() {
    assert.deepEqual(averages.mean([13, 18, 13, 14, 13, 16, 14, 21, 13]), 15)
  });

  it("returns the median", function() {
    assert.deepEqual(averages.median([13, 18, 13, 14, 13, 16, 14, 21, 13]), 14)
  });

  it("returns the mode", function() {
    assert.deepEqual(averages.mode([13, 18, 13, 14, 13, 16, 14, 21, 13]), 13)
  });
});
