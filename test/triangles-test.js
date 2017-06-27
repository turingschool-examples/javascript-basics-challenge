const assert = require("chai").assert
const isTriangle = require("../triangles")


describe("Triangles", function() {
  context("with a triangle", function() {
    triangle = [3, 3, 3]
    not_triangle = [-4, 5, 9]
    it("can determine if sides make a triangle", function() {
      assert.isTrue(isTriangle(3, 3, 3))
      assert.isTrue(isTriangle(3, 5, 6))
      assert.isFalse(isTriangle(-3, 3, 3))
      assert.isFalse(isTriangle(3, 3, 0))
    })
  })
})
