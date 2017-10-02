const assert = require('chai').assert
const averages = require('../averages')

describe('test averages', function () {
  context('testing total', function() {
    it('totals an array', function() {
      array = new Array(1, 1, 1)
      assert.equal(averages.total(array), 3)
    })
  })

  context('testing mean', function() {
    it('returns the mean', function() {
      array = new Array(2, 1, 3)
      assert.equal(averages.mean(array), 2)
    })
  })

  context('testing median', function() {
    it('returns the median', function() {
      array = new Array(2, 1, 3)
      assert.equal(averages.median(array), 2)
    })

    it('returns the median of an even array', function() {
      array = new Array(1, 2, 2, 4)
      assert.equal(averages.median(array), 2)
    })
  })
})
