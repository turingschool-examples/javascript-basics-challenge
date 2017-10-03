const assert = require('chai').assert
const table = require('../timesTable')


describe("it tests triangle", function() {
  it("returns the thing", function() {
    assert.deepEqual(table.timesTable(4), true);
  });
});
