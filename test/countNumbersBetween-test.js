const assert = require('chai').assert
const countNumbersBetween = require('../countNumbersBetween.js')

describe('countNumbersBetween()', () => {
  it('it returns 3 for [25, 2, 8], 0, 100', () => {
    assert.equal(countNumbersBetween([25, 2, 8], 0, 100), 3)
  })

  it('it returns 2 for [-19, 1, 22], 0, 100', () => {
    assert.equal(countNumbersBetween([-19, 1, 22], 0, 100), 2)
  })

  it('it returns 3 for [100, 200, 300], 100, 300)', () => {
    assert.equal(countNumbersBetween([100, 200, 300], 100, 300), 3)
  })

  it('it returns 0 for [], -10, 10', () => {
    assert.equal(countNumbersBetween([], -10, 10), 0)
  })

  it('it returns 1 for [5], 5, 5', () => {
    assert.equal(countNumbersBetween([5], 5, 5), 1)
  })
})
