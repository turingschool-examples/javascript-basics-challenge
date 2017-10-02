const assert = require('chai').assert
const table = require('../timesTable')

describe('times tables', function() {
  it('creates a times table', function() {
    assert.deepEqual(table.timesTable(2), " 1 2\n 2 4\n")
  });
});
