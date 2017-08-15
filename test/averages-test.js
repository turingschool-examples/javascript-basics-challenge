const assert = require('chai').assert
const utils  = require('../averages')

describe('Calculates', () => {
  it('returns total of all values', () => {
    numbers = [10, 20, 30]
    let result = utils.total(numbers)
    assert.equal(result, 60)
  })

  it('returns mean of all values', () => {
    numbers = [5, 10, 15, 100, 20]
    let result = utils.mean(numbers)
    assert.equal(result, 30)
  })

  it('returns median of all values', () => {
    numbers = [5, 10, 15, 100, 20]
    let result = utils.median(numbers)
    assert.equal(result, 15)
  })

  it('returns mode of all values', () => {
    numbers = [5, 10, 10, 10, 20, 20, 30]
    let result = utils.mode(numbers)
    assert.equal(result, 10)
  })
})