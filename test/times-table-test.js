const assert = require('chai').assert;
const timesTable = require('../times-table')

describe('Times Table', function(){
  it('can print out a times table', function(){
    expected = "1 2 3 4 5 /n2 4 6 8 10 /n3 6 9 12 15 /n4 8 12 16 20 /n5 10 15 20 25 /n"
    assert.deepEqual(timesTable(5), expected);
  })
})
