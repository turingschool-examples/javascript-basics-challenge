const assert = require('chai').assert
const {total, mean} = require('../averages.js')

describe('total()', () => {
  it('it sums an array', () => {
    assert.equal(total([1,1,1]), 3)
    assert.equal(total([-1,1,1]), 1)
    assert.equal(total([1,1,1000]), 1002)
  })
})

describe('mean()', () => {
  it('averages an array', () => {
    assert.equal(mean([1,1,1]), 1)
    assert.equal(mean([1,2,3]), 2)
  })
})


// 1. `total` - returns the total of all the values in the array
// 2. `mean` - returns the mean (average) of the array
// 3. `median` - returns the median of the array
// 4. `mode`- returns an object representing the mode(s) of the array
//     with the property being the mode and the value being the frequency
