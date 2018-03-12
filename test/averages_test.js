const assert = require('chai').assert
const averages = require('../source/averages.js')
const total = averages.total
const mean = averages.mean
const median = averages.median

describe('average calculations', function() {

  it('can return the total of an array of numbers', function(){
    var arrayOne = [4, 6, 10, 99, 4]
    var arrayTwo = [1, 2, 3, 4, 5]
    assert.equal(total(arrayOne), 123)
    assert.equal(total(arrayTwo), 15)
  })

  it('can return the mean of an array of numbers', function(){
    var arrayOne = [4, 6, 10, 99, 6]
    var arrayTwo = [1, 2, 3, 4, 5]
    assert.equal(mean(arrayOne), 25)
    assert.equal(mean(arrayTwo), 3)
  })

  it('can return the median of an array of numbers', function(){
    var arrayOne = [4, 6, 10, 99, 6]
    var arrayTwo = [1, 2, 3, 4, 5, 6]
    var arrayThree = [2, 55, 10, 3, 101, 40]
    assert.equal(median(arrayOne), 6)
    assert.equal(median(arrayTwo), 3.5)
    assert.equal(median(arrayThree), 25)
  })
})

// total - returns the total of all the values in the array
// mean - returns the mean (average) of the array
// median - returns the median of the array
// mode- returns an object representing the mode(s) of the array with the property
//       being the mode and the value being the frequency
