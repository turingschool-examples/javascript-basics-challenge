
const assert = require('chai').assert;
const expect = require('chai').expect;
const timesTable = require('../lib/times_table')

describe('times table', function() {
  context('display', function() {
    it("produces a string representing a times table with that number of rows", function() {
      number = 3;
      result = timesTable(3)
      assert.equal(result, "1 2 3 /n2 4 6 /n3 6 9 /n" )
    })
  })
})
