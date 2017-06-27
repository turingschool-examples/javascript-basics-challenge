const assert  = require('chai').assert
const factorial = require('../lib/factorial')

describe('factorial', () => {
  it('returns factorial of a given number', () => {
    assert.equal(factorial(4), 24)
  })
})
