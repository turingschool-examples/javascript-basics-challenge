const assert = require('chai').assert
const averages = require('../averages')

describe('statistical averages', function() {
  context('.total', function() {
    it('adds all the elements in an array', function() {
      let collection = [1,2,3,4,5,6,7,8,9,10]
      assert.equal(averages.total(collection), 55)
    })
  })

  context('.mean', function() {
    it('returns the average of an array', function() {
      let collection = [1,2,3,4,5,6,7,8,9,10]
      let collection_zero = [0,1,2,3,4,5,6,7,8,9]
      assert.equal(averages.mean(collection), 5.5)
      assert.equal(averages.mean(collection_zero), 4.5)
    })
  })

  context('.median', function() {
    it('returns the median of an array', function() {
      let collection = [9, 13, 9, 11, 9, 13, 11, 9, 10, 8, 11]
      let collection_zero = [5, 11, 12, 4, 8, 21]
      assert.equal(averages.median(collection), 10)
      assert.equal(averages.median(collection_zero), 9.5)
    })
  })

  context('.mode', function() {
    it('returns the mode of an array', function() {
      let collection = [8, 9, 9, 9, 9, 10, 11, 11, 11, 13, 13]
      let collection_zero = [5, 11, 12, 4, 8, 21]
      assert.equal(averages.mode(collection), 9)
      assert.equal(averages.mode(collection_zero), 4)
    })
  })
})
