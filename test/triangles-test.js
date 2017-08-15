const assert = require('chai').assert
const isTriangle = require('../scripts/triangles')

describe('isTriangle', () => {
  context('when created', () => {
    it('is a function', () => {
      assert.isFunction(isTriangle)
    })
  })
  
  context('when one or more sides is 0', () => {
    it('returns false', () => {
      assert.isFalse(isTriangle(0,0,0))
    })
  })

  context('when one or more sides is negative', () => {
    it('returns false', () => {
      assert.isFalse(isTriangle(-2,1,5))
    })
  })

  context('when it is an equilateral', () => {
    it('returns true', () => {
      assert.isTrue(isTriangle(4,4,4))
    })
  })

  context('when it is a right triangle', () => {
    it('returns true', () => {
      assert.isTrue(isTriangle(6,8,10))
    })

    it('returns true', () => {
      assert.isTrue(isTriangle(8,6,10))
    })

    it('returns true', () => {
      assert.isTrue(isTriangle(10,8,6))
    })
  })

  context('when no triangle exists', () => {
    it('returns false', () => {
      assert.isFalse(isTriangle(4,8,50))
    })
  })
})
