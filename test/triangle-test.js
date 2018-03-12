const assert = require('chai').assert
const isTriangle = require('../triangles').isTriangle


describe('Triangles', function () {
  context('isTriangle function', function () {
    it('determines whether 3 lengths can form a triangle', function () {
      assert.equal(isTriangle(1, 1, 1), false)
      assert.equal(isTriangle(1, 1, 2), false)
      assert.equal(isTriangle(3, 6, 7), true)
    })
  })

})
