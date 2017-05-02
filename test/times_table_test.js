const expect = require('expect');
const timesTable = require('../lib/times_table');

describe('timesTable', function() {
  it('returns rows of times table', function() {
    expect(timesTable(5)).toEqual('1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n')
  })
})
