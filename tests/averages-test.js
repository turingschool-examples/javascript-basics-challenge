const assert = require('chai').assert
const averages = require('../averages')

describe("checks for average", function() {
  it("returns the total", function() {
    assert.deepEqual(averages.total([1, 2, 3]), "it works!")
  });
});
