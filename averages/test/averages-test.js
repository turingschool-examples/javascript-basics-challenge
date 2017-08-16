const assert = require('chai').assert
const averages = require('../averages')

const numbers = [2,3,4,5,1]

describe('it can find averages on array of numbers', function() {
  it('can find the total sum', function() {
    assert.equal(averages.total(numbers), 15)
  })

  it('can find the mean', function() {
    assert.equal(averages.mean(numbers), 3)
  })

  it('can find the median', function() {
    assert.equal(averages.median(numbers), 3)
  })
})
