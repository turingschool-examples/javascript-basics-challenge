const assert = require('chai').assert
const myFunctions = require('../lib/times-table')

describe('times table', function()  {
  it('produces times table', function() {
    assert.strictEqual(myFunctions.timesTable(5), 1)
  })
})
