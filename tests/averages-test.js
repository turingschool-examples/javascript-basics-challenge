const assert = require('chai').assert
const averages = require('../averages')

describe("checks for average", function() {
  it("returns the total", function() {
    assert.deepEqual(averages.total([1, 2, 3]), 6)
  });

  it("returns the mean", function() {
    assert.deepEqual(averages.mean([13, 18, 13, 14, 13, 16, 14, 21, 13]), 15)
  });
});
