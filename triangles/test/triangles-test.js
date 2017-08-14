var assert = require('chai').assert;
var isTriangle = require('../is-triangle')

describe("it can determine if a shape is a triangle", function() {
  it("returns true when the sides can form a triangle", function() {
    assert.equal(isTriangle(2,3,3), true);
  })

  it("returns false if the sides cannot form a triangle", function() {
    assert.equal(isTriangle(3,2,1), false);
  })

  it("returns false when the sides contain a negative number", function() {
    assert.equal(isTriangle(-2,1,5), "false, because a triangle can't have negative length sides");
    assert.equal(isTriangle(1,-2,5), "false, because a triangle can't have negative length sides");
    assert.equal(isTriangle(1,5,-2), "false, because a triangle can't have negative length sides");
  })

  it("returns false if it is given 0 length sides", function() {
    assert.equal(isTriangle(0, 3, 4), "false, because a triangle can't have 0 length sides");
    assert.equal(isTriangle(3, 0, 4), "false, because a triangle can't have 0 length sides");
    assert.equal(isTriangle(3, 4, 0), "false, because a triangle can't have 0 length sides");
  })

  it("returns 'equilateral triangle' when all sides are the same", function() {
    assert.equal(isTriangle(4,4,4), "true, an equilateral triangle");
  })

  it("returns 'right triangle' when conditions are correct", function() {
    assert.equal(isTriangle(3,4,5), "true, a right triangle");
    assert.equal(isTriangle(4,3,5), "true, a right triangle");
    assert.equal(isTriangle(4,5,3), "true, a right triangle");
  })

})
