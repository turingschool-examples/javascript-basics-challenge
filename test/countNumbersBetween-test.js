const assert = require('chai').assert
const countNumbersBetween = require('../scripts/countNumbersBetween')

describe('countNumbersBetween', () => {
  it('it returns 0 for [], 25, 55', () => {
    assert.equal(countNumbersBetween([], 25, 55), 0)
  })

  it('it returns 2 for [-10, 5, 32], 0, 100', () => {
    assert.equal(countNumbersBetween([-10, 5, 32], 0, 100), 2)
  })

  it('it returns 3 for [100, 200, 300], 100, 300)', () => {
    assert.equal(countNumbersBetween([100], 100, 300), 1)
  })
})
