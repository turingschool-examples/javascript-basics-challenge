const assert = require('chai').assert
const isTriangle = require('../triangles')

describe('isTriangle', function() {
  it('returns if three coordinates could be arranged as a triangle', function() {
    assert.isTrue(isTriangle(4,4,4), 'equilateral triangle')
    assert.isTrue(isTriangle(6,8,10), 'right triangle')
    assert.isTrue(isTriangle(8,6,10), 'right triangle')
    assert.isTrue(isTriangle(10,8,6), 'right triangle')
    assert.isFalse(isTriangle(4,8,50), 'no such triangle')
  });

  it('returns false if there is a negative number', function() {
    assert.isFalse(isTriangle(-2,1,5))
  });

  it('returns false if there is a zero', function() {
    assert.isFalse(isTriangle(0,0,0))
  });
})





