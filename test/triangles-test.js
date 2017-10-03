const assert = require('chai').assert
const Triangles = require('../lib/triangles')

describe('Triangles Methods', function() {
  var triangles = new Triangles();

  it("returns true for good triangle", function() {
    assert(triangles.isTriangle(4, 4, 4))
  })

  it("returns true for bad triangle", function() {
    assert.isFalse(triangles.isTriangle(-2,1,5))
  })

  it("returns true for another bad triangle", function() {
    assert.isFalse(triangles.isTriangle(4, 8, 50))
  })

  it("returns true for good triangle", function() {
    assert(triangles.isTriangle(4, 4, 4))
  })

  it("returns true for good triangle", function() {
    assert(triangles.isTriangle(6,8,10))
  })

  it("returns true for good triangle", function() {
    assert(triangles.isTriangle(8,6,10))
  })

  it("returns true for good triangle", function() {
    assert(triangles.isTriangle(10,6,8))
  })

  it("returns true for good triangle", function() {
    assert(triangles.isTriangle(10,8,6))
  })

  it("returns true for good triangle", function() {
    assert(triangles.isTriangle(3,4,5))
  })
})
