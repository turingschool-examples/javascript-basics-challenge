const assert = require('chai').assert
const averages = require('../lib/averages')

describe('averages', () => {
  var nums = [2, 4, 6]
  context('total function', () => {
    it('returns total of all elements in array', () => {
      // var pry = require('pryjs'); eval(pry.it);
      assert.equal(nums.total(), 12)
    })
  })
  context('mean function', () => {
    it('returns mean of elements in array', () => {
      assert.equal(nums.mean(), 4)
    })
  })

  context('median function', () => {
    it('returns median number in an odd array', () => {
      assert.equal(nums.median(), 4)
    })
  })

  context('median function', () => {
    it('returns median number in an even array', () => {
      evenNums = [6, 3, 2, 5]
      assert.equal(evenNums.median(), 4)
    })
  })
  context('mode function', () => {
    it('returns the number with the most occurances', () => {
      arr = [3, 2, 3, 4, 1]
      assert.deepEqual(arr.mode(), {'3': 2})
    })
  })
})
