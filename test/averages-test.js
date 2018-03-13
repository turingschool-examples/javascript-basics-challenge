const assert = require('chai').assert
const total = require("../averages").total
const median = require("../averages").median
const mode = require("../averages").mode
const mean = require("../averages").mean

describe('Averages', function () {

  context('total function', function () {
    it('calculates the total', function () {
      assert.equal(total([1, 2, 2, 2, 3, 3, 4, 5, 6]), 28)
    })
  })

  context('median function', function () {
    it('returns the median value', function () {
       assert.equal(median([1, 2, 2, 2, 3, 3, 4, 5, 6]), 3)
    })
  })

  context('mode function', function () {
    it('returns the mode', function () {
       assert.deepEqual(mode([1, 2, 2, 2, 3, 3, 4, 5, 6]), { '1': 1, '2': 3, '3': 2, '4': 1, '5': 1, '6': 1 })
    })
  })

  context('mean function', function () {
    it('calculates the mean', function () {
       assert.equal(mean([1, 2, 2, 2, 3, 3, 4, 5, 6]), 3.111111111111111)
    })
  })


})
