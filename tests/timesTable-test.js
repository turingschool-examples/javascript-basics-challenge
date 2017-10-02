const assert = require('chai').assert
const table = require('../timesTable')

describe('times tables', function() {
  it('creates a times table', function() {
    assert.deepEqual(table.timesTable(), "it works!")
  });
});
