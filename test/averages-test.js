const assert = require('chai').assert
const Average = require('../lib/averages')

describe('average functionality', function() {
  context('total(array)', function() {
    it('returns the total of all values in the array', function() {
      array = [1, 2, 3]
      assert.equal(Average.total(array), 6)
    })

    it('returns the total of all values in the array with positive and negative values', function() {
      array = [1, -2, 3]
      assert.equal(Average.total(array), 2)
    })
  })

  context('mean(array)', function() {
    it('returns the arithmetic mean of all elements in the array', function() {
      array = [1, 2, 9]
      assert.equal(Average.mean(array), 4)
    })
  })

  context('median(array)', function() {
    it('returns the median of the array with an odd number of elements - 3', function() {
      array = [3, 6, 1]
      assert.equal(Average.median(array), 3)
    })

    it('returns the median of the array with an odd number of elements - 5', function() {
      array1 = [12, 18, 3, 6, 1]
      assert.equal(Average.median(array1), 6)
    })

    it('returns the median of the array with an even number of elements - 4', function() {
      array = [3, 6, 1, 4]
      assert.equal(Average.median(array), 3.5)
    })

    it('returns the median of the array with an even number of elements - 6', function() {
      array = [3, 6, 1, 4, 8, 10]
      assert.equal(Average.median(array), 5)
    })
  })

  context('mode(array)', function() {
    it('returns an object with the mode as a property and value as frequency', function() {
      array = [1, 2, 2, 3, 4]
      expected = { '2': 2 }
      assert.deepEqual(Average.mode(array), expected)
    })

    it('returns an object with the mode as a property and value as frequency', function() {
      array = [1, 2, 2, 3, 3, 4]
      expected = { '2': 2, '3': 2 }
      assert.deepEqual(Average.mode(array), expected)
    })
  })
})
