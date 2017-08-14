const assert = require('chai').assert
const total = require('../averages.js')

describe('total()', () => {
  it('it sums an array', () => {
    assert.equal(total([1,1,1]), 3)
  })
})
