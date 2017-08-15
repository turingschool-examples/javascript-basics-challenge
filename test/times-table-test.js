const assert = require('chai').assert;
const timesTable = require('../times-table');


describe("timesTable function", function() {
  it("returns a times table with the width of the argument", function() {
    var expected = '1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n';
    var actual = timesTable(5);
    assert.equal(expected, actual);
  });
})