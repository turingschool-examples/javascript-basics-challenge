const assert = require('chai').assert;
const triangleFunctions = require('../triangle')

describe("Triangle", function() {
  it("sides can't have 0 length", function() {
    assert.isFalse(triangleFunctions.checkZero(0,0,0))
    assert.isFalse(triangleFunctions.checkZero(0,4,3))
    assert.isTrue(triangleFunctions.checkZero(7,5,11))
  })

  it("sides can't be negative",function () {
    assert.isFalse(triangleFunctions.checkNegative(1, -2, 3))
    assert.isTrue(triangleFunctions.checkNegative(1, 2, 3))
  })
  
  it("the sum of two sides has to be greater than the third side", function () {
    assert.isFalse(triangleFunctions.checkSides(1, 2, 10))
    assert.isFalse(triangleFunctions.checkSides(2, 1, 10))
    assert.isFalse(triangleFunctions.checkSides(2, 1, 5))
    assert.isTrue(triangleFunctions.checkSides(1, 1, 1))
    assert.isTrue(triangleFunctions.checkSides(7, 5, 11))
  })

  it("returns true if it is a triangle", function() {
    assert.isTrue(triangleFunctions.isTriangle(1, 1, 1))
    assert.isTrue(triangleFunctions.isTriangle(7, 5, 11))
    assert.isTrue(triangleFunctions.isTriangle(6, 8, 10))
    assert.isFalse(triangleFunctions.isTriangle(1, -2, 3))
    assert.isFalse(triangleFunctions.isTriangle(0,4,3))
    assert.isFalse(triangleFunctions.isTriangle(4, 8, 50))
  })
})
