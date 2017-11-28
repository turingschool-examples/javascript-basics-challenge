const assert = require('chai').assert;
const isTriangle = require('../triangles')

describe("isTriangle", function() {
  it("is not a triangle if one of the arguments is 0", function() {
    var noTriangle = isTriangle(0, 4, 5)
    assert.deepEqual(noTriangle, false)
  })
  it("is not a triangle if one of the arguments is negagive", function() {
    var noTriangle = isTriangle(-3, 4, 5)
    assert.deepEqual(noTriangle, false)
  })
  it("is a triangle if it passes the triangle inequality theorem", function() {
    var Triangle = isTriangle(3, 4, 5)
    assert.deepEqual(Triangle, true)
  })
})
