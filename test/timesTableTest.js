const assert  = require('chai').assert
const timesTable = require('../lib/timesTable')

describe('timesTable', () => {
  it('prints out given number of rows', () => {
    var table = '1 2 3 \n4 5 6 \n7 8 9 '
    assert.deepEqual(timesTable(3), table)
  })
})
