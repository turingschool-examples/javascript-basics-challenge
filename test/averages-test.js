const assert = require('chai').assert
const myFunctions = require('../lib/averages')

describe ('it can take an array of values', function()  {
  it ('can find the total of the array', function() {
    array = [1,2,3]
    assert.strictEqual(myFunctions.total(array), 6)
  })

  it ('can find the mean of the array', function()  {
    array = [1,2,3]
    assert.strictEqual(myFunctions.mean(array), 2)
  })

  it ('can find the median of an odd array', function()  {
    array = [1,3,2]
    assert.strictEqual(myFunctions.median(array), 2)
  })

  it ('can find the median of an even array', function()  {
    array = [1,4,2,3]
    assert.strictEqual(myFunctions.median(array), 2.5)
  })

  it ('can find one mode of an array', function() {
    array = [3,1,3,2]
    assert.deepEqual(myFunctions.mode(array), {3: 2})
  })
})
