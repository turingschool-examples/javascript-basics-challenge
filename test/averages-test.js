const assert = require('chai').assert
const averages = require('../lib/averages')

describe("Total", function() {
  it("returns the total", function() {
    let array = [1,2,3]
    let result = averages.total(array)
    assert.equal(result, 6)
  });
});

describe("Mean", function() {
  it("returns the mean", function() {
    let array = [1,2,3]
    let result = averages.mean(array)
    assert.equal(result, 2)
  });
});
