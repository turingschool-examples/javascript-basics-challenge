const assert = require('assert')
const isTriangle = require("../triangles")

describe("isTriangle", function() {
  context("given a triangle with side length 0", function() {
    it("returns false", function() {
      assert.equal(isTriangle(0,0,0), false)
    })
  })

  context("given a triangle with a negative side length", function () {
    it("returns false", function() {
      assert.equal(isTriangle(-1,2,4), false)
    })
  })
})
