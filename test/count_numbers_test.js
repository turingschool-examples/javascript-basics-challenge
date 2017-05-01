const assert = require('chai').assert
const countNumbersBetween = require('../lib/count_numbers')
var pry = require('pryjs');

describe ("countNumbersBetween", function(){
  it ('returns the number of integers in the Array', function(){
    var array = [25,2,8]
    var min = 0
    var max  = 100
    assert.equal(countNumbersBetween(array, min, max),3);
  })
});