const assert = require('chai').assert
const timesTable = require('../lib/times_table')
var pry = require('pryjs');

describe("times table", function(){
  it ("returns a times table", function(){
    var table = "1 2 3 \n2 4 6 \n3 6 9 \n"
    assert.deepEqual(timesTable(3), table)
  });
});
