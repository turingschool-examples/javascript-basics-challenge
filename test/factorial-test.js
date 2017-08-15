const assert = require('chai').assert
const factorial = require('../scripts/factorial')

describe('factorial', () => {
  it('returns the factorial for 0', () => {
    assert.deepEqual(factorial(0), 1)
  })

  it('returns the factorial for 1', () => {
    assert.deepEqual(factorial(1), 1)
  })

  it('returns the factorial for 4', () => {
    assert.deepEqual(factorial(4), 24)
  })

  it('returns the factorial for 5', () => {
    assert.deepEqual(factorial(5), 120)
  })
})
