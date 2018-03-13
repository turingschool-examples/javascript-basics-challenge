const assert = require('chai').assert
var timesTable = require('../lib/times_table.js')

describe('times table', function() {
  context('timesTable function', function() {
    it('it can create a multiplication table from a number', function() {

      assert.equal(timesTable(3), "1 2 3\n2 4 6\n3 6 9")
    })
  })
});
