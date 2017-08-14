const assert = require('chai').assert
const {total, mean, median, mode} = require('../averages.js')

describe('total()', () => {
  it('it sums an array', () => {
    assert.equal(total([1,1,1]), 3)
    assert.equal(total([-1,1,1]), 1)
    assert.equal(total([1,1,1000]), 1002)
  })
})

describe('mean()', () => {
  it('averages an array', () => {
    assert.equal(mean([1,1,1]), 1)
    assert.equal(mean([1,2,3]), 2)
  })
})

describe('median()', () => {
  it('returns middle number of an array with odd length', () => {
    assert.equal(median([1,1,1]), 1)
    assert.equal(median([3,1,2]), 2)
    assert.equal(median([3,1,200, 2, 100]), 3)
  })
  it('returns middle number of an array with even length', () => {
    assert.equal(median([1,1,1, 2]), 1)
    assert.equal(median([3,1,2, 4]), 2.5)
    assert.equal(median([3,1,200, 5]), 4)
  })
})

describe('mode()', () => {
  it('returns object', () => {
    assert.instanceOf(mode([1]), Object)
  })

  it('the property is the mode', () => {
    result = mode([1,2,3,2])
    assert.equal(Object.keys(result)[0], 2)
  })

  it('the value is the frequency', () => {
    result = mode([1,2,3,2, 2])
    assert.equal(result[2], 3)
  })
})
