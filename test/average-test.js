assert = require('chai').assert;
const averageFunctions = require('../lib/average')

describe('chai tests math on arrays and stuff', function() {
  it('can return the sum of the array', function() {
    var testArray = [4, 3, 5, 6, 2, 3, 6]
    assert.deepEqual(averageFunctions.sum(testArray), 29)
  })
  it('can return the mean of the array', function() {
    var testArray = [4, 3, 5, 6, 2, 3, 6]
    assert.deepEqual(averageFunctions.mean(testArray), 4.142857142857143)
  })
  it('can find the median of an odd array', function() {
    var testArray1 = [4, 3, 5, 6, 2, 3, 6];
    assert.deepEqual(averageFunctions.median(testArray1), 4)
  })
  it('should return the median for even length arrays', function() {
    var testArray2 = [4, 3, 5, 6, 2, 3, 6, 10];
    assert.deepEqual(averageFunctions.median(testArray2), 4.5)
  })
  it('should return the mode', function() {
    var testArray = [4, 3, 5, 6, 2, 3, 6, 10];
    assert.deepEqual(averageFunctions.mode(testArray), 3)
  })
})
