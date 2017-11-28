const assert = require('chai').assert;
const timesTable = require('../timesTable')

describe("timesTable", function() {
  it("returns a times table with the given number of rows", function() {
    var string = "\n1 2 3 4 \n2 4 6 8 \n3 6 9 12 \n4 8 12 16 "
    assert.deepEqual(timesTable(4), string)
  })
})
