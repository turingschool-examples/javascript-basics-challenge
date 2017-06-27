const isTriangle = require('../lib/triangle')
const assert     = require('chai').assert

describe("Triangle", () => {
  context("isTriangle", () => {
    it("triangle cant have 0 length sides", () => {
      let assertion = isTriangle(0,0,0)
      assert.equal(assertion, false)
    })

    it("triangle cant have negative length sides ", () => {
      let assertion = isTriangle(-2,1,5)
      assert.equal(assertion, false)
    })

    it("an equilateral triangle", () => {
      let assertion = isTriangle(4,4,4)
      assert.equal(assertion, true)
    })

    it("a right triangle", () => {
      let assertion = isTriangle(6,8,10)
      assert.equal(assertion, true)
    })

    it("reorganized right triangle", () => {
      let assertion = isTriangle(8,6,10)
      assert.equal(assertion, true)
    })

    it("reorganized right triangle", () => {
      let assertion = isTriangle(10,8,6)
      assert.equal(assertion, true)
    })

    it("no such triangle exists", () => {
      let assertion = isTriangle(4, 8, 50)
      assert.equal(assertion, false)
    })

    //isTriangle(0,0,0) # => false, because a triangle can't have 0 length sides
    //isTriangle(-2,1,5) # => false, because a triangle can't have negative length sides
    //isTriangle(4,4,4) # => true, an equilateral triangle
    //isTriangle(6,8,10) # => true, a right triangle
    //isTriangle(8,6,10) # => true, the same right triangle
    //isTriangle(10,8,6) # => true, the same right triangle
    //isTriangle(4, 8, 50) #=> false, no such triangle exists
  })
})
