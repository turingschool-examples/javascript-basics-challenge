var assert = require('chai').assert;
var isTriangle = require('../triangles').isTriangle
var pry = require('pryjs')

describe('Triangle functions', function() {
  it('can determine if a shape is a triangle', function() {
    assert.equal(isTriangle(0,0,0), false)
    assert.equal(isTriangle(4,9,2), false)
    assert.equal(isTriangle(3,4,5), true)

  })
})
