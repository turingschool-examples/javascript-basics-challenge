const assert = require('chai').assert
const timesTable = require('./timesTable')

describe('timesTable creates a table', function() {
  context('when provided with a number', function() {
    it('returns the multiplication table for that many rows', function() {
      assert.equal(timesTable(5), '1  2  3  4  2  4  6  8  3  6  9  12 4  8  12 16');
    })
  })
})
