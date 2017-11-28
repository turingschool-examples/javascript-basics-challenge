const assert     = require('chai').assert
const isTriangle = require('../triangles').isTriangle

describe('triangle', function() {
  context('assess if input can form a triangle', function() {

    it('asserts false for lengths of 0', function() {
      assert.equal(isTriangle(0,0,0), false);
    })

    it('asserts false for lengths of negative numbers', function() {
      assert.equal(isTriangle(-2,1,5), false);
    })

    it('asserts true for an equilateral triangle', function() {
      assert.equal(isTriangle(4,4,4), true);
    })

    it('asserts true for a right angle triangle', function() {
      assert.equal(isTriangle(6,8,10), true);
      assert.equal(isTriangle(8,6,10), true);
      assert.equal(isTriangle(10,8,6), true);
    })
    it('asserts false for invalid sides', function() {
      assert.equal(isTriangle(4,8,50), false);
    })
  })
})
