assert = require('chai').assert;
const timesTable = require('../lib/times-table')

describe('chai can test times table', function() {
  it('can return a table with an argument', function() {
    var result = "1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n"
    assert.deepEqual(timesTable(5), result)
  })
})
