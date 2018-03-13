var assert = require('chai').assert;
var total = require('../averages').total;
var mean = require('../averages').mean;
var median = require('../averages').median;
var mode = require('../averages').mode;

describe('array statistics', function(){
  it('can calculate the total', function(){
    var nums = [4,5,3,6,2]
    assert.equal(total(nums), 20)
  })

  it('can calculate the average', function(){
    var nums = [4,5,3,6,2]
    assert.equal(mean(nums), 4)
  })

  it('can calculate the median', function(){
    var nums = [4,5,3,6,2]
    assert.equal(median(nums), 4)
  })

  it('can calculate mode', function(){
    var nums = [4,5,3,6,2]
    var nums2 = [4,4,5,3,6,2]
    var nums3 = [4,5,3,3,6,6,2]
    assert.deepEqual(mode(nums), [2,3,4,5,6])
    assert.equal(mode(nums2), 4)
    assert.deepEqual(mode(nums3), [3,6])
  })
})
