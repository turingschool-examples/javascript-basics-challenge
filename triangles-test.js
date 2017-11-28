const assert = require('chai').assert;
const isTriangle = require('./triangles');

describe('isTriangle', function() {
  context('isTriangle function', function() {
    it('it returns false if it is not a triangle', function() {
      assert.isNotTrue(isTriangle(0,0,0))
      assert.isNotTrue(isTriangle(-2,1,5))
      assert.isNotTrue(isTriangle(4, 8, 50))
    })
    it('it returns true if it is a triangle', function() {
      assert.isTrue(isTriangle(4,4,4))
      assert.isTrue(isTriangle(6,8,10))
      assert.isTrue(isTriangle(8,6,10))
      assert.isTrue(isTriangle(10,8,6))
    })
  })
})
