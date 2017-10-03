const assert = require('chai').assert
const table = require('../timesTable')


describe("it tests timestable", function() {
  it("returns the thing", function() {
    assert.deepEqual(table.timesTable(4), 12345);
  });
});
