const assert = require('chai').assert;
const timesTable  = require('../times_table').timesTable

describe("it returns multiples for a number", function() {
  it("returns a table 5 x 5", function() {
    assert.equal(timesTable(5), "1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25\n")
  })
})
