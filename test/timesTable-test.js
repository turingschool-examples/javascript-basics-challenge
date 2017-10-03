const assert = require('chai').assert;
const timesTable = require('../lib/timesTable.js')

describe('Times table functionality', function(){
  it('generateTable returns table', function(){
    assert.equal(timesTable.generateTable(2), "1 2 \n2 4 \n");
  })
})
