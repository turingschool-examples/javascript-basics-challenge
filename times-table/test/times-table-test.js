var assert = require('chai').assert;
var timesTable = require('../times-table')

describe ("it can make a times table", function() {
  it("when it is given a number of rows", function() {
    table = new timesTable;
    assert.equal(table.createTable(5), "1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25");
  })

  // it("it gives an error when it is given anything other than an number", function() {
    // table = new timesTable;
  //   assert.equal(table.createTable("Boudi"), "Wrong.")
  // })
})
