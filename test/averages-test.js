var assert = require('chai').assert;
var total = require('../averages').total;
var mean = require('../averages').mean;
var median = require('../averages').mode;
var mode = require('../averages').mode;

describe('array statistics', function(){
  it('can calculate the total', function(){
    var nums = [4,5,3,6,2]
    assert.equal(total(nums), 20)
  })
})
