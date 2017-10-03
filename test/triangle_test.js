const assert =  require('chai').assert;
const isTriangle = require('../triangles').isTriangle

describe("triangle function", function() {
  it("returns false if zero is given", function() {
    assert.equal(isTriangle(0, 0, 0), false)
  });

  it("returns false if negative number is given", function() {
    assert.equal(isTriangle(-2,1,5), false)
  });

  it("returns true if correct numbers are given", function() {
    assert.equal(isTriangle(4,4,4), true)
    assert.equal(isTriangle(6,8,10), true)
    assert.equal(isTriangle(10,8,6), true)
    assert.equal(isTriangle(4,8,50), false)
  });
});
