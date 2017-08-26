const assert = require('chai').assert
const averages = require('../lib/averages')

describe('Average numbers suite', function() {

  var array = [1, 2, 3, 4, 5]

  it('can add all the numbers in an array', function() {
    var expected = 15
    var actual = averages.total(array)

    assert.equal(actual, expected)
  })

  it('can find the mean of the numbers in the array', function() {
    var expected = 3
    var actual = averages.mean(array)

    assert.equal(actual, expected)
  })

  it('can find the median of the numbers in the array', function() {
    var expected = 3
    var actual = averages.median(array)

    assert.equal(actual, expected)
  })


})

