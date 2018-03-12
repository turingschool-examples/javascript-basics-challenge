var assert = require('chai').assert;
var isTriangle = require('../triangles').isTriangle

describe('Triangle functions', function() {
  it('can determine if a shape is a triangle', function() {
    assert.equal(isTriangle(0,0,0), false)
  })
})
