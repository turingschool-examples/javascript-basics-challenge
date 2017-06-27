const assert = require('chai').assert
require('../averages')

describe("averages", function(){
  var array = [1,2,3,4,5]
  var array2 = [2,4,6,8]
  var array3 = [5, 20, 15, 10]
  var array4 = [1, 1, 3, 5]
  var array5 = [1,1,2,2,5]
  it ("can find total sum of array", function(){
    assert.equal(array.total(), 15)
    assert.equal(array2.total(), 20)
    assert.equal(array3.total(), 50)
  })
  it ("can find mean of an array", function(){
    assert.equal(array.mean(), 3)
    assert.equal(array2.mean(), 5)
    assert.equal(array3.mean(), 12.5)
  })
  it ("can find median of an array", function(){
    assert.equal(array.median(), 3)
    assert.equal(array2.median(), 5)
    assert.equal(array3.median(), 12.5)
  })
  it ("can find mode of an array", function(){
    assert.deepEqual(array4.mode(), {'1': 2})
    assert.deepEqual(array5.mode(), {'1': 2, '2': 2})
  })
})