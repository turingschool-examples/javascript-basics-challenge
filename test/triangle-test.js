assert = require('chai').assert;
const isTriangle = require('../lib/triangle');

describe("Triangle Determination", function() {
  context("A valid triangle", function() {
    it("Equilateral triangle", function(){
      assert.isTrue(isTriangle(2, 2, 2))
    })

    it("Right triangle", function() {
      assert.isTrue(isTriangle(6, 8, 10))
    })

    it("Same right triangle", function() {
      assert.isTrue(isTriangle(8, 10, 6))
    })
  })

  context("An invalid triangle", function() {
    it("Side with 0 length", function() {
      assert.isFalse(isTriangle(0, 2, 2))
    })

    it("Side with negative length", function() {
      assert.isFalse(isTriangle(2, 2, -2))
    })

    it("No possible triangle", function() {
      assert.isFalse(isTriangle(4, 8, 50))
    })
  })
})
