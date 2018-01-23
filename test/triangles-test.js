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

  context("given a triangle with legal side lengths", function () {
    it("returns true", function () {
      assert.equal(isTriangle(2,2,2), true)
    })
  })

  context("given a triangle with illegal positive side lengths", function() {
    it("returns false", function() {
      assert.equal(isTriangle(100,1,1), false)
      assert.equal(isTriangle(2,1,1), false)
    })
  })
})
