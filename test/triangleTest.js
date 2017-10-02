const assert = require('chai').assert
const isTriangle = require('../triangle')

describe('triangle test', function() {
  context('testing isTriangle with 0 side', function() {
    it('returns false if a sideOne is 0', function() {
      assert.equal(isTriangle(0, 1, 1), false)
    })

    it('returns false if sideTwo is 0', function() {
      assert.equal(isTriangle(1, 0, 1), false)
    })

    it('returns false if sideThree is 0', function() {
      assert.equal(isTriangle(1, 1, 0), false)
    })
  })

  context('test triangle inequality', function() {
    it('returns true if all sides are greater than other side', function() {
      assert.equal(isTriangle(4, 4, 4), true)
    })

    it('returns false if one side not greater than other sides', function() {
      assert.equal(isTriangle(4, 1, 2), false)
    })
  })

  context('test triangle with negative', function() {
    it('returns false with negative number', function() {
      assert.equal(isTriangle(-1, 1, 1), false)
    })
  })
})
