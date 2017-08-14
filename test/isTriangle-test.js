const assert = require('chai').assert
const isTriangle = require('../isTriangle.js')

describe('isTriangle', () => {
  context('when one side is zero', () => {
    it('it returns false', () => {
      assert.isFalse(isTriangle(0,0,0))
    })

    it('it returns false', () => {
      assert.isFalse(isTriangle(0,1,1))
    })

    it('it returns false', () => {
      assert.isFalse(isTriangle(1,1,0))
    })
  })

  context('when one number is negative', () => {
    it('in first position - it returns false', () => {
      assert.isFalse(isTriangle(-2,1,5))
    })

    it('in middle position - it returns false', () => {
      assert.isFalse(isTriangle(2,-1,5))
    })

    it('in last position - it returns false', () => {
      assert.isFalse(isTriangle(2,1,-5))
    })
  })

  context('when the triangle is equalateral', () => {
    it('4,4,4 should be true', () => {
      assert.isTrue(isTriangle(4, 4, 4))
    })
  })

  context('when the triangle is a right triangle', () => {
    it('6,8,10 should be true', () => {
      assert.isTrue(isTriangle(6,8,10))
    })

    it('8,6,10 should be true', () => {
      assert.isTrue(isTriangle(8,6,10))
    })

    it('6,10,8 should be true', () => {
      assert.isTrue(isTriangle(6,10,8))
    })
  })
})

// isTriangle(0,0,0) # => false, because a triangle can't have 0 length sides
// isTriangle(-2,1,5) # => false, because a triangle can't have negative length sides
//
// isTriangle(4,4,4) # => true, an equilateral triangle
//
// isTriangle(6,8,10) # => true, a right triangle
// isTriangle(8,6,10) # => true, the same right triangle
// isTriangle(10,8,6) # => true, the same right triangle
//
// isTriangle(4, 8, 50) #=> false, no such triangle exists
