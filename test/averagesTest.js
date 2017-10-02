const assert = require('chai').assert
const averages = require('../averages')

describe('test averages', function () {
  context('testing total', function() {
    it('totals an array', function() {
      array = new Array(1, 1, 1)
      assert.equal(averages.total(array), 3)
    })
  })
})
