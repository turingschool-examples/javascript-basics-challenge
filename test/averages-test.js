const assert = require('chai').assert
const {total, mean, median} = require('../scripts/averages')
const array = [1, 2, 3, 4, 5]

describe('averages', () => {
  context('total', () => {
    it('returns the total of all values in array', () => {
      assert.deepEqual(total(array), 15)
    })
  })

  context('mean', () => {
    it('returns the mean of the array', () => {
      assert.deepEqual(mean(array), 3)
    })
  })

  context('median', () => {
    it('returns the median of the array', () => {
      assert.deepEqual(median(array), 3)
    })
  })

  context('mode', () => {
    xit('returns an object', () => {
      assert.instanceOf(mode[1], Object)
    })

    xit('property is a mode', () => {
      assert.deepEqual(Object.keys(result)[0], [2])
    })

    xit('value is a frequency', () => {
      assert.deepEqual(result[2], 3)
    })
  })
})
