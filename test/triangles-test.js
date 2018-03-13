const assert = require('chai').assert
const isTriangle = require('../lib/triangles')

describe("Triangle", () => {
  context("instance methods", () => {
    context("isTriangle", () => {
      it("cannot have a length of 0 on a side", () => {
        assert.equal(isTriangle(0,0,0), false)
      })
      it("cannot have a negative length on a side", () => {
        assert.equal(isTriangle(-2,1,15), false)
      })
      it("is an equilateral triangle", () => {
        assert.equal(isTriangle(4, 4, 4), true)
      })
      it("is a right triangle", () => {
        assert.equal(isTriangle(8,6,10), true)
      })
      it("is not a right triangle", () => {
        assert.equal(isTriangle(4,8,50), false)
      })
    })
  })
})
