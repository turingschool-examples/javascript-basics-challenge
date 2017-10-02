const assert = require('chai').assert
const isTriangle = require('../triangle')

describe('triangle test', function() {
  context('testing isTriangle with 0 side', function() {
    it('returns false if a sideOne is 0', function() {
      triangle = {sideOne: 0, sideTwo: 1, sideThree: 2}
      assert.equal(isTriangle(triangle), false)
    })

    it('returns false if sideTwo is 0', function() {
      triangle = {sideOne: 1, sideTwo: 0, sideThree: 2}
      assert.equal(isTriangle(triangle), false)
    })

    it('returns false if sideThree is 0', function() {
      triangle = {sideOne: 1, sideTwo: 1, sideThree: 0}
      assert.equal(isTriangle(triangle), false)
    })
  })
})
