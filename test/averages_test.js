const assert = require('chai').assert;
const total   = require('../averages').total
const mean   = require('../averages').mean
const median   = require('../averages').median
const mode   = require('../averages').mode



describe("average functions", function(){
  it("returns the total value for an array", function(){
    assert.equal(total([1,2,3,4]), 10)
    assert.equal(total([1,0,-3,2]), 0)
  });

  it("returns the mean value for an array", function(){
    assert.equal(mean([4,4,4,4]), 4)
    assert.equal(mean([10,5,2,3]), 5)
  });

  it("returns the median value for an array", function(){
    assert.equal(median([4,4,4,4]), 4)
    assert.equal(median([10,5,2,3,6]), 5)
  });

  it("returns the mode and value for an array", function(){
    assert.deepEqual(mode([4,4,4,4]), {4:4})
    assert.deepEqual(mode([10,5,10,5,10]), {5:2, 10:3})
  });
});
