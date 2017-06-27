const assert  = require('chai').assert
const countNumbersBetween = require('../lib/countNumbersBetween')

describe('countNumbersBetween', () => {
  it('returns number of integers between two bounds', () => {
    var arr = [2, 24, 5, 16,]
    var lBound = 10
    var uBound = 30
    assert.equal(countNumbersBetween(arr, lBound, uBound), 2)
  })
})
