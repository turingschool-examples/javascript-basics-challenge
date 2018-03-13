const assert = require('chai').assert
const timesTable = require('../lib/times_table')

describe('it produces times table', function()  {
  it('timesTable', function() {
    assert.deepEqual(timesTable(3), [[1,2,3],[2,4,6],[3,6,9]])
  })
})
