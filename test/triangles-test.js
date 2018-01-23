const assert = require('chai').assert
const Triangle = require('../lib/triangles')

describe('isTriangle function', function() {
  context('determines if three arguments of side length could form a valid triangle', function() {
    it('returns false if a side length is 0', function() {
      assert.isFalse(Triangle.isTriangle(1, 2, 0))
      assert.isFalse(Triangle.isTriangle(0, 2, 0))
      assert.isFalse(Triangle.isTriangle(0, 0, 0))
    })

    it('returns false if a side length is negative', function() {
      assert.isFalse(Triangle.isTriangle(-1, 2, 3))
      assert.isFalse(Triangle.isTriangle(-1, -2, 3))
      assert.isFalse(Triangle.isTriangle(-1, -2, -3))
    })

    it('returns true if it is an equilateral triangle', function() {
      assert.isTrue(Triangle.isTriangle(4, 4, 4))
    })

    it('returns true if the sum of two smaller sides is greater than the largest side', function() {
      assert.isTrue(Triangle.isTriangle(2, 3, 4))
      assert.isTrue(Triangle.isTriangle(2, 4, 3))
      assert.isTrue(Triangle.isTriangle(3, 2, 4))
      assert.isTrue(Triangle.isTriangle(3, 4, 2))
      assert.isTrue(Triangle.isTriangle(4, 2, 3))
      assert.isTrue(Triangle.isTriangle(4, 3, 2))
    })

    it('returns false if the sum of two smaller sides is equal to the longest side', function() {
      assert.isFalse(Triangle.isTriangle(2, 3, 5))
      assert.isFalse(Triangle.isTriangle(2, 5, 3))
      assert.isFalse(Triangle.isTriangle(3, 5, 2))
      assert.isFalse(Triangle.isTriangle(3, 2, 5))
      assert.isFalse(Triangle.isTriangle(5, 2, 3))
      assert.isFalse(Triangle.isTriangle(5, 3, 2))
    })
  })
})
