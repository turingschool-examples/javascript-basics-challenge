var assert = require('chai').assert
var timesTable = require('../lib/times-table')

describe('TimesTable', function() {
  it('can print out a string table based on a given number', function(){
    assert.equal(timesTable.timesTable(5), "1  2  3  4  5  \n2  4  6  8  10 \n3  6  9  12 15 \n4  8  12 16 20 \n5  10 15 20 25 \n")
  })
})