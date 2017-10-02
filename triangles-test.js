const assert = require('chai').assert
const isTriangle = require('./triangles')

describe('isTriangle will evaluate a triangle', function() {
  context('when given a real triangle', function() {
    it('will return true', function() {
      assert.equal(isTriangle(6,8,10), true);
    })
  })

  context('when given an impossible triangle', function() {
    it('will return false', function() {
      assert.equal(isTriangle(4, 8, 50), false);
    })
  })

  context('when given a zero', function() {
    it('will return false', function() {
      assert.equal(isTriangle(0,0,0), false);
    })
  })

  context('when given a negative number', function() {
    it('will return false', function() {
      assert.equal(, false);
    })
  })
})
