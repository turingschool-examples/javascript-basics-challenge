const assert   = require('chai').assert
const isTriangle = require('../triangle')

describe('Triangle', () => {
  context('tests three lengths to determine if shape is a triangle', () => {
    it('returns false if a length is 0', () => {
      assert(isTriangle(0, 3, 4), false)
    })

    it('returns false if a length is negative', () => {
      assert(isTriangle(-3, -4, -5), false)
    })

    it('returns false if a length is greater than the sum of the other two lengths', () => {
      assert(isTriangle(1, 2, 50), false)
    })

    it('returns true for a equilateral triangle', () => {
      assert(isTriangle(2, 2, 2), true)
    })

    it('returns true for a right triangle', () => {
      assert(isTriangle(3, 4, 5), true)
    })
  })
})