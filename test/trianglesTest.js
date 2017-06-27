const assert = require('chai').assert
const triangles = require('../lib/triangle')

describe('isTriangle', () => {
  it('returns true if three lengths can make a triangle', () => {
    assert.isTrue(triangles.isTriangle(4, 4, 4))
  })
  it('returns false if three lengths dont make a triangle', () => {
    assert.isFalse(triangles.isTriangle(0, 4, 4))
  })
})
