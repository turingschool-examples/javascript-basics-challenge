const assert = require('chai').assert
const utils  = require('../factorial')

describe('Factorial', () => {
  it('returns undefined if parameter is negative', () => {
    let result = utils.factorial(-1)
    assert.equal(result, undefined)
  })

  it('returns factorial for number 0', () => {
    let result = utils.factorial(0)
    assert.equal(result, 1)
  })

  it('returns the factorial for number 4', () => {
    let result = utils.factorial(4)
    assert.equal(result, 24)
  })
})