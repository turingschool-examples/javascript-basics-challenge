const assert = require('chai').assert;
const timesTable = require('./timesTable');

describe('timesTable', function() {
  context('timesTable function', function() {
    it('it returns a times table', function() {
      var expected = ' x   [1] [2] [3] [4] [5] \n[1]   1   2   3   4   5\n[2]   2   4   6   8  10\n[3]   3   6   9  12  15\n[4]   4   8  12  16  20\n[5]   5  10  15  20  25\n'
      assert.equal(timesTable(5), expected)
    })
  })
})
