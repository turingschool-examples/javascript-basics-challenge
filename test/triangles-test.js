const assert = require('chai').assert

const isTriangle = require('../lib/triangles');

describe("isTriange", function() {
  context("with valid inputs", function() {
    it("outputs true or false", function() {
      assert.isTrue(isTriangle(4, 4, 4))
      assert.isTrue(isTriangle(6, 8, 10))
      assert.isTrue(isTriangle(8, 6, 10))
      assert.isTrue(isTriangle(10, 8, 6))
      assert.isFalse(isTriangle(4, 8, 50))
    })
  })
  context("with invalid inputs", function() {
    it("outputs false", function() {
      assert.isFalse(isTriangle(0, 0, 0))
      assert.isFalse(isTriangle(-2, 1, 5))
    })
  })
})
