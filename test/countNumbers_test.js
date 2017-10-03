const assert = require("chai").assert;
const countNumbersBetween = require("../countNumbers");

describe("countNumbersBetween Extension test", function(){
  it("correctly outputs the number of digits from array from upper and lower bounds", function(){
    assert.equal(3, countNumbersBetween([25, 2, 8], 0, 100))
    assert.equal(2, countNumbersBetween([-19, 1, 22], 0, 100))
    assert.equal(3, countNumbersBetween([100, 200, 300], 100, 300))
  })
  it("can correctly guess edge cases", function(){
    assert.equal(0, countNumbersBetween([], -10, 10))
    assert.equal(1, countNumbersBetween([5], 5, 5))
  })
});
