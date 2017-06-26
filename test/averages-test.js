const assert = require("chai").assert
const averages = require("../averages")

describe('Array averages calculations', () => {
  var arr = [1,2,3]
  var arr2 = [500,5,50]
  it('can calculate the total', () => {
    assert.equal(arr.total(), 6)
  })
  
  it('can calculate the mean', () => {
    assert.equal(arr.mean(), 2)
  })
  
  it('can calculate another mean', () => {
    assert.equal(arr2.mean(), 185)
  })
  
  it('can calculate the median', () => {
    assert.equal(arr.median(), 2)
  })
  
  it('can calculate another median', () => {
    assert.equal(arr2.median(), 50)
  })
  
  it('can calculate a median of an even-numbered array', () => {
    assert.equal([1,9,7,5].median(), 6)
  })
  
  it('can calculate the mode & return an object with frequency as the value', () => {
    assert.deepEqual([1,9,9,7].mode(), {'9': 2})
  })
  
  it('can calculate another mode', () => {
    assert.deepEqual([20,2,2].mode(), {'2': 2})
  })
})